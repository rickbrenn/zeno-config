import { createNodeResolver } from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import getWebpackResolveOptions from './webpackResolveOptions.js';
import { allExtensions } from '../extensions.js';

/**
 * Wraps the node resolver so modules aliased to `false` in webpack resolve as
 * empty modules (webpack semantics) instead of being reported as unresolved.
 */
const withIgnoredAliases = (resolver, alias = {}) => {
	const ignored = Object.entries(alias)
		.filter(([, targets]) => targets.every((target) => target === null))
		.map(([name]) => name.replace(/\$$/, ''));

	if (ignored.length === 0) {
		return resolver;
	}

	return {
		...resolver,
		resolve(modulePath, sourceFile) {
			const isIgnored = ignored.some((name) => {
				return modulePath === name || modulePath.startsWith(`${name}/`);
			});

			if (isIgnored) {
				return { found: true, path: null };
			}

			return resolver.resolve(modulePath, sourceFile);
		},
	};
};

/**
 * Builds the `import-x/resolver-next` resolver list.
 *
 * @param {Object} [options={}] - Configuration options.
 * @param {string} [options.webpackConfig] - Path to a webpack config whose `resolve` options are applied.
 * @param {boolean} [options.ts=false] - Enable TypeScript import resolution.
 * @returns {Array} Resolver instances for `settings['import-x/resolver-next']`.
 */
const getImportResolvers = (options = {}) => {
	const webpackResolveOptions = options.webpackConfig
		? getWebpackResolveOptions(options.webpackConfig)
		: {};

	const nodeResolver = createNodeResolver({
		// mirror the defaults import-x applies to the legacy `node` resolver setting
		builtinModules: true,
		symlinks: false,
		...webpackResolveOptions,
		// keep every zeno extension resolvable even if webpack lists fewer
		extensions: [
			...new Set([
				...allExtensions,
				...(webpackResolveOptions.extensions ?? []),
			]),
		],
	});

	return [
		withIgnoredAliases(nodeResolver, webpackResolveOptions.alias),
		...(options.ts ? [createTypeScriptImportResolver()] : []),
	];
};

export default getImportResolvers;
