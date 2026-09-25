import { createNodeResolver } from 'eslint-plugin-import-x';
import {
	createTypeScriptImportResolver,
	defaultExtensions as typescriptDefaultExtensions,
} from 'eslint-import-resolver-typescript';
import getWebpackResolveOptions from './webpackResolveOptions.js';
import { allExtensions } from '../extensions.js';

// mirrors the defaults import-x applies to `createNodeResolver`; passing
// `extensions` replaces them, so they're merged back in below
const nodeDefaultExtensions = ['.mjs', '.cjs', '.js', '.json', '.node'];

const unique = (...lists) => [...new Set(lists.flat())];

const isIgnoredTarget = (target) => target === null || target === false;

/**
 * Wraps a resolver so modules aliased to `false`/`null` (webpack semantics)
 * resolve as empty modules instead of being reported as unresolved.
 */
const withIgnoredAliases = (resolver, alias = {}) => {
	const ignored = Object.entries(alias)
		.filter(([, targets]) => {
			const list = [targets].flat();
			return list.length > 0 && list.every(isIgnoredTarget);
		})
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
 * A single resolver is returned. When `ts` is enabled that's
 * `eslint-import-resolver-typescript`, which is a superset of the node
 * resolver (tsconfig `paths`, `customConditions`, `.d.ts` fallbacks) and must
 * be the one consulted first; otherwise import-x's node resolver is used.
 *
 * Option precedence, lowest to highest: zeno defaults → webpack `resolve`
 * options → `resolverOptions`. `alias` is merged per name; other options
 * replace.
 *
 * @param {Object} [options={}] - Configuration options.
 * @param {string} [options.webpackConfig] - Path to a webpack config whose `resolve` options are applied.
 * @param {boolean} [options.ts=false] - Enable TypeScript import resolution.
 * @param {Object} [options.resolverOptions={}] - Extra options forwarded to the resolver (unrs-resolver options such as `conditionNames`, `mainFields`, `alias`, `modules`, `extensions`; plus `project`/`alwaysTryTypes` for the TypeScript resolver).
 * @returns {Array} Resolver instances for `settings['import-x/resolver-next']`.
 */
const getImportResolvers = (options = {}) => {
	const webpackResolveOptions = options.webpackConfig
		? getWebpackResolveOptions(options.webpackConfig)
		: {};
	const resolverOptions = options.resolverOptions ?? {};
	const alias =
		webpackResolveOptions.alias || resolverOptions.alias
			? // merge per alias name so consumers can add to or override webpack aliases
				{ ...webpackResolveOptions.alias, ...resolverOptions.alias }
			: undefined;

	const shared = {
		...webpackResolveOptions,
		// keep every zeno extension (and the resolver's own defaults) resolvable even if webpack lists fewer
		extensions: unique(
			options.ts ? typescriptDefaultExtensions : allExtensions,
			options.ts ? allExtensions : nodeDefaultExtensions,
			webpackResolveOptions.extensions ?? []
		),
		// consumer overrides win
		...resolverOptions,
		...(alias && { alias }),
	};

	const resolver = options.ts
		? createTypeScriptImportResolver({
				// prefer `.d.ts` over bundled JS for third-party packages
				alwaysTryTypes: true,
				...shared,
			})
		: createNodeResolver({
				// mirror the defaults import-x applies to the legacy `node` resolver setting
				builtinModules: true,
				symlinks: false,
				...shared,
			});

	return [withIgnoredAliases(resolver, shared.alias)];
};

export default getImportResolvers;
