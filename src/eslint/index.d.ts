import { type Linter } from 'eslint';

/**
 * Options forwarded to the import resolver. Any unrs-resolver option is
 * accepted; `project` and `alwaysTryTypes` only apply when `ts` is enabled.
 */
interface ImportResolverOptions {
	/** Package `exports`/`imports` conditions to match. Replaces the resolver defaults, so include the standard ones too, e.g. `['my-condition', 'import', 'require', 'node', 'default', 'types']` */
	conditionNames?: string[];
	/** `package.json` fields to read the entry point from */
	mainFields?: string[];
	/** File extensions to probe. Replaces the merged zeno/webpack list. */
	extensions?: string[];
	/** Map an import extension to the extensions to try instead, e.g. `{ '.js': ['.ts', '.js'] }` */
	extensionAlias?: Record<string, string[]>;
	/** Module aliases in unrs-resolver shape, merged per name with any `webpackConfig` aliases; `[null]` ignores the module */
	alias?: Record<string, Array<string | null>>;
	/** Directories to resolve bare specifiers from (default: `['node_modules']`) */
	modules?: string[];
	/** Follow symlinks when resolving */
	symlinks?: boolean;
	/** TypeScript only: tsconfig path(s) or globs used for `paths`/`customConditions`. Defaults to the nearest `tsconfig.json`/`jsconfig.json`. */
	project?: string | string[];
	/** TypeScript only: also look up `@types/*` for packages that resolve to JS (default: `true`) */
	alwaysTryTypes?: boolean;
	[option: string]: unknown;
}

interface ImportResolversOptions {
	/** Path to a webpack config whose `resolve.alias`, `resolve.modules`, and `resolve.extensions` are applied to import resolution */
	webpackConfig?: string;
	/** Use the TypeScript import resolver instead of the node resolver */
	ts?: boolean;
	/** Extra options forwarded to the import resolver */
	resolverOptions?: ImportResolverOptions;
}

/** A resolver instance accepted by `settings['import-x/resolver-next']` */
interface ImportResolver {
	interfaceVersion: number;
	name: string;
	resolve: (
		modulePath: string,
		sourceFile: string
	) => { found: boolean; path?: string | null };
}

interface BaseConfigOptions {
	/** Export patterns to ignore for import rules */
	ignoreExports?: string[];
	/** Additional file patterns to allow dev dependencies in (for no-extraneous-dependencies rule) */
	additionalDevDependencies?: string[];
	/** Extension patterns to ignore for import rules */
	extensionsIgnorePattern?: Record<string, string>;
	/** Path to a webpack config whose `resolve.alias`, `resolve.modules`, and `resolve.extensions` are applied to import resolution */
	webpackConfig?: string;
	/** Extra options forwarded to the import resolver (e.g. `conditionNames`, `mainFields`, `project`, `alwaysTryTypes`) */
	resolverOptions?: ImportResolverOptions;
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
	/** Path to a webpack config whose `resolve.alias`, `resolve.modules`, and `resolve.extensions` are applied to import resolution */
	webpackConfig?: string;
	/** Extra options forwarded to the import resolver (e.g. `conditionNames`, `mainFields`, `project`, `alwaysTryTypes`) */
	resolverOptions?: ImportResolverOptions;
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
	getTypescript: () => Linter.Config[];
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
	getReactPluginRules: () => Linter.RulesRecord;
	getReactHooksPluginRules: () => Linter.RulesRecord;
	getReactCompilerPluginRules: (
		mode?: boolean | 'warn'
	) => Linter.RulesRecord;
	getReactRefreshPluginRules: () => Linter.RulesRecord;
	getReactYouMightNotNeedAnEffectPluginRules: () => Linter.RulesRecord;
	getJsxA11yPluginRules: () => Linter.RulesRecord;
}

interface Internals {
	configs: Configs;
	getImportResolvers: typeof getImportResolvers;
	extensions: Extensions;
	rules: Rules;
}

declare const internals: Internals;

/**
 * Builds the resolver list zeno assigns to `settings['import-x/resolver-next']`.
 *
 * Use this when composing `resolver-next` yourself (for example to append a
 * custom resolver) so webpack alias extraction and zeno defaults are kept.
 * ESLint flat config replaces array settings rather than merging them.
 *
 * @example
 * export default defineZenoConfig({ ts: true }, [
 *   {
 *     settings: {
 *       'import-x/resolver-next': [
 *         ...getImportResolvers({ ts: true, webpackConfig: './webpack.config.js' }),
 *         myCustomResolver,
 *       ],
 *     },
 *   },
 * ]);
 */
declare function getImportResolvers(
	options?: ImportResolversOptions
): ImportResolver[];

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
	type ImportResolver,
	type ImportResolverOptions,
	type ImportResolversOptions,
	type Internals,
	type NodeConfigOptions,
	type ReactConfigOptions,
	type Rules,
	defineZenoConfig,
	getImportResolvers,
};
export default internals;
