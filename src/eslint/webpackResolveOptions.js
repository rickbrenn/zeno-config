import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);

const isModuleNamespace = (value) => {
	return (
		value !== null &&
		typeof value === 'object' &&
		(value[Symbol.toStringTag] === 'Module' || value.__esModule === true)
	);
};

/**
 * Converts webpack's `resolve.alias` (object or array form) into the
 * `Record<string, Array<string | null>>` shape unrs-resolver expects.
 * `false` targets become `[null]` (ignore) and `onlyModule` entries get the
 * `$` exact-match suffix, matching enhanced-resolve semantics.
 */
const normalizeAlias = (alias) => {
	if (Array.isArray(alias)) {
		return Object.fromEntries(
			alias.map(({ name, alias: target, onlyModule }) => {
				return [onlyModule ? `${name}$` : name, [target].flat()];
			})
		);
	}

	return Object.fromEntries(
		Object.entries(alias).map(([name, target]) => {
			return [name, target === false ? [null] : [target].flat()];
		})
	);
};

/**
 * Loads a webpack config and extracts the `resolve` options that import-x's
 * built-in node resolver (unrs-resolver, an enhanced-resolve port) understands:
 * `alias`, `modules`, and `extensions`.
 *
 * Supports object configs, array configs (the first entry is used), and
 * synchronous function configs, in either ESM or CommonJS.
 *
 * @param {string} webpackConfigPath - Path to the webpack config, relative to the current working directory.
 * @returns {{ alias?: Record<string, Array<string | null>>, modules?: string[], extensions?: string[] }}
 */
const getWebpackResolveOptions = (webpackConfigPath) => {
	const configPath = path.resolve(webpackConfigPath);
	let config;

	try {
		// the config lives in the consumer's project, so the path is only known at runtime
		// eslint-disable-next-line import-x/no-dynamic-require
		config = require(configPath);
	} catch (error) {
		throw new Error(
			`zeno-config: unable to load webpackConfig "${webpackConfigPath}"`,
			{ cause: error }
		);
	}

	if (isModuleNamespace(config)) {
		config = config.default;
	}

	if (typeof config === 'function') {
		config = config({}, {});
	}

	if (Array.isArray(config)) {
		[config] = config;
	}

	if (typeof config?.then === 'function') {
		throw new TypeError(
			`zeno-config: webpackConfig "${webpackConfigPath}" returned a Promise; only synchronous webpack configs are supported`
		);
	}

	const { alias, modules, extensions } = config?.resolve ?? {};

	return {
		...(alias && { alias: normalizeAlias(alias) }),
		...(modules && { modules }),
		...(extensions && { extensions }),
	};
};

export default getWebpackResolveOptions;
