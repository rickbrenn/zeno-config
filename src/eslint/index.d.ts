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
	/** Enable TypeScript import resolution */
	ts?: boolean;
	/** Disables expensive rules for performance */
	performanceMode?: boolean;
}

interface NodeConfigOptions {
	/** Directories and files to apply Node-specific rules to. When set, Node rules only apply to these paths. */
	includes?: string[];
	/** Directories to exclude from Node-specific rules (used internally for auto-exclude) */
	ignoreDirs?: string[];
}

interface ReactConfigOptions {
	/** Directories and files containing React code. Setting this enables React rules for all file types in these paths. */
	includes?: string[];
	/** Extension patterns to ignore for import rules */
	extensionsIgnorePattern?: Record<string, string>;
	/** Enable React Compiler rules. Set to true to enforce as errors, or 'warn' for warnings (recommended when preparing a codebase for React Compiler adoption). */
	reactCompiler?: boolean | 'warn';
}

interface TypescriptConfigOptions {
	/** Enable React-specific rules */
	react?: boolean;
}

interface DefineZenoConfigOptions {
	/** Directories and files containing React code. Setting this enables React rules for all file types in these paths. */
	reactIncludes?: string[];
	/** Enable React Compiler rules. Set to true to enforce as errors, or 'warn' for warnings (recommended when preparing a codebase for React Compiler adoption). */
	reactCompiler?: boolean | 'warn';
	/** Enable TypeScript-specific rules */
	ts?: boolean;
	/** Disables expensive rules for performance */
	performanceMode?: boolean;
	/** Additional directories to ignore (added to defaults: node_modules, dist, build, coverage) */
	ignores?: string[];
	/** Directories and files containing Node.js code. When set, Node-specific rules only apply to these paths. */
	nodeIncludes?: string[];
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
	getReactCompilerPluginRules: (
		mode?: boolean | 'warn'
	) => Linter.RulesRecord;
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
 * // React + TypeScript
 * export default defineZenoConfig({ reactIncludes: ['src'], ts: true })
 *
 * @example
 * // With additional config
 * export default defineZenoConfig({ reactIncludes: ['src'], ts: true }, [customConfig])
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
