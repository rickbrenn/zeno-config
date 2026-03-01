import { type Linter } from 'eslint';

interface BaseConfigOptions {
	/** Export patterns to ignore for import rules */
	ignoreExports?: string[];
	/** Additional file patterns to allow dev dependencies in (for no-extraneous-dependencies rule) */
	additionalDevDependencies?: string[];
	/** Extension patterns to ignore for import rules */
	extensionsIgnorePattern?: Record<string, string>;
	/** Path to webpack config for import resolver */
	webpackConfig?: string;
	/** Disables expensive rules for performance */
	performanceMode?: boolean;
}

interface NodeConfigOptions {
	/** Additional directories to ignore for Node-specific rules */
	ignoreDirs?: string[];
}

interface ReactConfigOptions {
	/** Directories containing React files (for projects using .js for both React and Node) */
	reactDirs?: string[];
	/** Extension patterns to ignore for import rules */
	extensionsIgnorePattern?: Record<string, string>;
}

interface TypescriptConfigOptions {
	/** Enable React-specific rules */
	react?: boolean;
}

interface DefineZenoConfigOptions {
	/** Enable React-specific rules */
	react?: boolean;
	/** Enable TypeScript-specific rules */
	ts?: boolean;
	/** Disables expensive rules for performance */
	performanceMode?: boolean;
	/** Additional directories to ignore (added to defaults: dist, build) */
	ignores?: string[];
	/** Directories containing React files (for projects using .js for both React and Node) */
	reactDirs?: string[];
	/** Directories to ignore for Node-specific rules only */
	nodeIgnoreDirs?: string[];
	/** Export patterns to ignore for import rules */
	ignoreExports?: string[];
	/** Additional file patterns to allow dev dependencies in (for no-extraneous-dependencies rule) */
	additionalDevDependencies?: string[];
	/** Extension patterns to ignore for import rules */
	extensionsIgnorePattern?: Record<string, string>;
	/** Path to webpack config for import resolver */
	webpackConfig?: string;
}

interface Extensions {
	allExtensions: string[];
	allExtensionsString: string;
	nodeExtensions: string[];
	nodeExtensionsString: string;
	reactJsExtensions: string[];
	reactJsExtensionsString: string;
	reactJsExtensionsExtended: string[];
	reactJsExtensionsExtendedString: string;
	reactExtensions: string[];
	reactExtensionsString: string;
	reactExtensionsExtended: string[];
	reactExtensionsExtendedString: string;
	typescriptExtensions: string[];
	typescriptExtensionsString: string;
}

interface Configs {
	getBase: (options?: BaseConfigOptions) => Linter.Config[];
	getReact: (options?: ReactConfigOptions) => Linter.Config[];
	getNode: (options?: NodeConfigOptions) => Linter.Config[];
	getTypescript: (options?: TypescriptConfigOptions) => Linter.Config[];
}

interface Rules {
	getBaseRules: () => Linter.RulesRecord;
	getImportPluginRules: (options?: {
		ignoreExports?: string[];
		additionalDevDependencies?: string[];
		extensionsIgnorePattern?: Record<string, string>;
	}) => Linter.RulesRecord;
	getStylisticPluginRules: () => Linter.RulesRecord;
	getUnicornPluginRules: () => Linter.RulesRecord;
	getReactPluginRules: (options?: {
		extensions?: string[];
	}) => Linter.RulesRecord;
	getReactHooksPluginRules: () => Linter.RulesRecord;
	getReactYouMightNotNeedAnEffectPluginRules: () => Linter.RulesRecord;
	getJsxA11yPluginRules: () => Linter.RulesRecord;
}

interface Internals {
	configs: Configs;
	extensions: Extensions;
	rules: Rules;
}

declare const internals: Internals;

/**
 * Defines a Zeno ESLint configuration.
 *
 * @param arg1 - Options object or additional config array. If an array, treated as additional config.
 * @param arg2 - Additional ESLint config objects to merge (only used if arg1 is options object).
 * @returns ESLint flat config array.
 *
 * @example
 * // With options object (using default export)
 * export default defineZenoConfig({ react: true, ts: true })
 *
 * @example
 * // With additional config
 * export default defineZenoConfig({ react: true }, [customConfig])
 *
 * @example
 * // With config array only
 * export default defineZenoConfig([customConfig])
 */
declare function defineZenoConfig(
	arg1?: DefineZenoConfigOptions | Linter.Config[],
	arg2?: Linter.Config[]
): Linter.Config[];

export {
	type BaseConfigOptions,
	type Configs,
	type DefineZenoConfigOptions,
	type Extensions,
	type Internals,
	type NodeConfigOptions,
	type ReactConfigOptions,
	type Rules,
	type TypescriptConfigOptions,
	defineZenoConfig,
};
export default internals;
