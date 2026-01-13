import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import importX from 'eslint-plugin-import-x';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import stylisticPlugin from '@stylistic/eslint-plugin';
import nodePlugin from 'eslint-plugin-n';
import unicornPlugin from 'eslint-plugin-unicorn';
import getBaseRules from './rules/baseRules.js';
import getImportPluginRules from './rules/importPluginRules.js';
import getReactPluginRules from './rules/reactPluginRules.js';
import getReactHooksPluginRules from './rules/reactHooksPluginRules.js';
import getStylisticPluginRules from './rules/stylisticPluginRules.js';
import getNodePluginRules from './rules/nodePluginRules.js';
import getReactYouMightNotNeedAnEffectPluginRules from './rules/reactYouMightNotNeedAnEffectPluginRules.js';
import getJsxA11yPluginRules from './rules/jsxA11yPluginRules.js';
import getUnicornPluginRules from './rules/unicornPluginRules.js';
import getTypescriptPluginRules from './rules/typescriptPluginRules.js';
import {
	allExtensions,
	allExtensionsString,
	nodeExtensions,
	nodeExtensionsString,
	reactJsExtensions,
	reactJsExtensionsString,
	reactJsExtensionsExtended,
	reactJsExtensionsExtendedString,
	reactExtensions,
	reactExtensionsString,
	reactExtensionsExtended,
	reactExtensionsExtendedString,
	typescriptExtensions,
	typescriptExtensionsString,
} from '../extensions.js';

const ignoreDirs = [
	'**/node_modules/*',
	'**/dist/*',
	'**/build/*',
	'**/coverage/*',
];

/**
 * Creates the base ESLint configuration.
 *
 * @param {Object} [options={}] - Configuration options.
 * @param {string[]} [options.ignoreExports] - Export patterns to ignore for import rules.
 * @param {Object} [options.extensionsIgnorePattern] - Extension patterns to ignore for import rules.
 * @param {string} [options.webpackConfig] - Path to webpack config for import resolver.
 * @returns {Array} ESLint flat config array.
 */
const baseConfig = (options = {}) => {
	return [
		{
			name: 'zeno/base',
			files: [`**/*{${allExtensionsString}}`],
			ignores: [...ignoreDirs],
			languageOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				globals: {
					...globals.node,
				},
			},
			settings: {
				'import-x/resolver': {
					node: { extensions: allExtensions },
					...(options.webpackConfig
						? { webpack: { config: options.webpackConfig } }
						: {}),
				},
			},
			plugins: {
				'import-x': importX,
				'@stylistic': stylisticPlugin,
				unicorn: unicornPlugin,
			},
			rules: {
				...getBaseRules(),
				...getImportPluginRules({
					ignoreExports: options.ignoreExports,
					extensionsIgnorePattern: options.extensionsIgnorePattern,
				}),
				...getStylisticPluginRules(),
				...getUnicornPluginRules(),
			},
			extends: [
				// if a new rule is added it'll use the recommended setting until it's added to rules files
				js.configs.recommended,
			],
		},
	];
};

/**
 * Creates the Node.js-specific ESLint configuration.
 *
 * @param {Object} [options={}] - Configuration options.
 * @param {string[]} [options.ignoreDirs] - Additional directories to ignore for Node-specific rules.
 * @returns {Array} ESLint flat config array.
 */
const nodeConfig = (options = {}) => {
	let ignores = [...ignoreDirs];
	if (options.ignoreDirs && options.ignoreDirs.length > 0) {
		const optionsIgnoreDirs = options.ignoreDirs.map((dir) => {
			return `${dir}/**/*{${nodeExtensionsString}}`;
		});
		ignores = [...ignores, ...optionsIgnoreDirs];
	}
	return [
		{
			name: 'zeno/node',
			files: [`**/*{${nodeExtensionsString}}`],
			ignores,
			languageOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				globals: {
					...globals.node,
				},
			},
			plugins: {
				n: nodePlugin,
			},
			rules: { ...getNodePluginRules() },
		},
	];
};

/**
 * Creates the React-specific ESLint configuration.
 *
 * @param {Object} [options={}] - Configuration options.
 * @param {string[]} [options.reactDirs] - Directories containing React files (for projects using .js for both React and Node).
 * @param {Object} [options.extensionsIgnorePattern] - Extension patterns to ignore for import rules.
 * @returns {Promise<Array>} ESLint flat config array.
 */
const reactConfig = async (options = {}) => {
	// Dynamically import optional React dependencies
	const [
		{ default: reactPlugin },
		{ default: reactHooksPlugin },
		{ default: jsxA11yPlugin },
		{ default: reactYouMightNotNeedAnEffectPlugin },
	] = await Promise.all([
		import('eslint-plugin-react'),
		import('eslint-plugin-react-hooks'),
		import('eslint-plugin-jsx-a11y'),
		import('eslint-plugin-react-you-might-not-need-an-effect'),
	]);

	let files = [`**/*{${reactExtensionsString}}`];
	let extensions = reactExtensions;

	if (
		options.reactDirs &&
		Array.isArray(options.reactDirs) &&
		options.reactDirs.length > 0
	) {
		files = options.reactDirs.map((dir) => {
			return `${dir}/**/*{${reactExtensionsExtendedString}}`;
		});
		extensions = reactExtensionsExtended;
	}

	return [
		{
			name: 'zeno/react',
			files,
			ignores: [...ignoreDirs],
			languageOptions: {
				globals: {
					...globals.browser,
				},
				parserOptions: {
					ecmaFeatures: {
						jsx: true,
					},
				},
			},
			settings: {
				react: {
					version: 'detect',
				},
			},
			rules: {
				...getReactPluginRules({ extensions }),
				...getReactHooksPluginRules(),
				...getReactYouMightNotNeedAnEffectPluginRules(),
				...getJsxA11yPluginRules(),

				'import-x/extensions': [
					'error',
					'ignorePackages',
					{
						js: 'never',
						jsx: 'never',
						ts: 'never',
						tsx: 'never',
						...options.extensionsIgnorePattern,
					},
				],
			},
			extends: [
				// if a new rule is added it'll use the recommended setting until it's added to the rules files
				reactPlugin.configs.flat.recommended,
				reactPlugin.configs.flat['jsx-runtime'],
				reactHooksPlugin.configs.flat.recommended,
				reactYouMightNotNeedAnEffectPlugin.configs.recommended,
				jsxA11yPlugin.flatConfigs.recommended,
			],
		},
	];
};

/**
 * Creates the TypeScript-specific ESLint configuration.
 *
 * @returns {Promise<Array>} ESLint flat config array.
 */
const typescriptConfig = async () => {
	// Dynamically import optional TypeScript dependencies
	const { default: typescriptEslint } = await import('typescript-eslint');

	return [
		{
			name: 'zeno/typescript',
			files: [`**/*{${typescriptExtensionsString}}`],
			languageOptions: {
				parser: typescriptEslint.parser,
				// parserOptions: {
				//   projectService: true,
				// },
			},
			plugins: {
				'@typescript-eslint': typescriptEslint.plugin,
			},
			rules: {
				...getTypescriptPluginRules(),

				// other rules the ts compiler handles
				'react/prop-types': 'off',
			},
		},
	];
};

const configs = {
	getBase: baseConfig,
	getReact: reactConfig,
	getNode: nodeConfig,
	getTypescript: typescriptConfig,
};

const internals = {
	configs,
	extensions: {
		allExtensions,
		allExtensionsString,
		nodeExtensions,
		nodeExtensionsString,
		reactJsExtensions,
		reactJsExtensionsString,
		reactJsExtensionsExtended,
		reactJsExtensionsExtendedString,
		reactExtensions,
		reactExtensionsString,
		reactExtensionsExtended,
		reactExtensionsExtendedString,
		typescriptExtensions,
		typescriptExtensionsString,
	},
	rules: {
		getBaseRules,
		getImportPluginRules,
		getStylisticPluginRules,
		getUnicornPluginRules,
		getReactPluginRules,
		getReactHooksPluginRules,
		getReactYouMightNotNeedAnEffectPluginRules,
		getJsxA11yPluginRules,
	},
};

// TODO: make sure to add a suggestion to set the engines fields in package.json

/**
 * Defines a Zeno ESLint configuration.
 *
 * @param {Object|Array} arg1 - Options object or additional config array. If an array, treated as additional config.
 * @param {boolean} [arg1.react=false] - Enable React-specific rules.
 * @param {boolean} [arg1.ts=true] - Enable TypeScript-specific rules.
 * @param {string[]} [arg1.reactDirs=[]] - Directories containing React files (for projects using .js for both React and Node).
 * @param {string[]} [arg1.nodeIgnoreDirs=[]] - Directories to ignore for Node-specific rules.
 * @param {string[]} [arg1.ignoreExports=[]] - Export patterns to ignore for import rules.
 * @param {Object} [arg1.extensionsIgnorePattern={}] - Extension patterns to ignore for import rules.
 * @param {string} [arg1.webpackConfig] - Path to webpack config for import resolver.
 * @param {Array} [arg2] - Additional ESLint config objects to merge (only used if arg1 is options object).
 * @returns {Promise<Array>} ESLint flat config array.
 *
 * @example
 * // With options object
 * defineZenoConfig({ react: true, ts: true })
 *
 * @example
 * // With additional config
 * defineZenoConfig({ react: true }, [customConfig])
 *
 * @example
 * // With config array only
 * defineZenoConfig([customConfig])
 */
const defineZenoConfig = async (arg1, arg2) => {
	let options = {
		react: false,
		ts: false,

		// if a project uses .js file extension for both react and node files this will help separate the rules for each
		reactDirs: [],
		nodeIgnoreDirs: [],

		ignoreExports: [],
		extensionsIgnorePattern: {},
		webpackConfig: undefined,
	};
	let config;

	if (Array.isArray(arg1)) {
		config = arg1;
	} else {
		options = arg1 ? { ...options, ...arg1 } : options;
		config = arg2 || [];
	}

	// Ensure array options are arrays
	if (!Array.isArray(options.reactDirs)) {
		options.reactDirs = [];
	}
	if (!Array.isArray(options.nodeIgnoreDirs)) {
		options.nodeIgnoreDirs = [];
	}
	if (!Array.isArray(options.ignoreExports)) {
		options.ignoreExports = [];
	}
	if (
		typeof options.extensionsIgnorePattern !== 'object' ||
		options.extensionsIgnorePattern === null
	) {
		options.extensionsIgnorePattern = {};
	}

	// use the reactDirs as the nodeIgnoreDirs if they are not set since they would likely be the same
	if (
		options.react &&
		options.reactDirs.length > 0 &&
		options.nodeIgnoreDirs.length === 0
	) {
		options.nodeIgnoreDirs = [...options.reactDirs];
	}

	// Load optional configs in parallel if needed
	const [reactConfigResult, tsConfigResult] = await Promise.all([
		options.react
			? configs.getReact({
					reactDirs: options.reactDirs,
					extensionsIgnorePattern: options.extensionsIgnorePattern,
				})
			: Promise.resolve([]),
		options.ts ? configs.getTypescript() : Promise.resolve([]),
	]);

	return defineConfig([
		...configs.getBase({
			ignoreExports: options.ignoreExports,
			webpackConfig: options.webpackConfig,
			extensionsIgnorePattern: options.extensionsIgnorePattern,
		}),
		...configs.getNode({ ignoreDirs: options.nodeIgnoreDirs }),
		...reactConfigResult,
		...tsConfigResult,

		...(config || []),

		// Turn off formatting rules that might conflict with Prettier
		prettierPlugin,
	]);
};

export default internals;
export { defineZenoConfig };
