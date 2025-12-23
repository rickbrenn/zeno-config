import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import importX from 'eslint-plugin-import-x';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import stylisticPlugin from '@stylistic/eslint-plugin';
import nodePlugin from 'eslint-plugin-n';
import reactYouMightNotNeedAnEffectPlugin from 'eslint-plugin-react-you-might-not-need-an-effect';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import unicornPlugin from 'eslint-plugin-unicorn';
import typescriptEslint from 'typescript-eslint';
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

const reactConfig = (options = {}) => {
	let files = [`**/*{${reactExtensionsString}}`];
	let extensions = reactExtensions;

	if (options.reactDirs.length > 0) {
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

const typescriptConfig = () => {
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

const defineZenoConfig = (arg1, arg2) => {
	let options = {
		react: false,
		ts: true,

		// if a project uses .js file extension for both react and node files this will help separate the rules for each
		reactDirs: [],
		nodeIgnoreDirs: [],

		ignoreExports: [],
		extensionsIgnorePattern: {},
	};
	let config;

	if (Array.isArray(arg1)) {
		config = arg1;
	} else {
		options = arg1 ? { ...options, ...arg1 } : options;
		config = arg2 || [];
	}

	// use the reactDirs as the nodeIgnoreDirs if they are not set since they would likely be the same
	if (
		options.react &&
		options.reactDirs.length > 0 &&
		options.nodeIgnoreDirs === 0
	) {
		options.nodeIgnoreDirs = [...options.reactDirs];
	}

	return defineConfig([
		...configs.getBase({
			ignoreExports: options.ignoreExports,
			webpackConfig: options.webpackConfig,
			extensionsIgnorePattern: options.extensionsIgnorePattern,
		}),
		...configs.getNode({ ignoreDirs: options.nodeIgnoreDirs }),
		...(options.react
			? configs.getReact({
					reactDirs: options.reactDirs,
					extensionsIgnorePattern: options.extensionsIgnorePattern,
				})
			: []),
		...(options.ts ? configs.getTypescript() : []),

		...(config || []),

		// Turn off formatting rules that might conflict with Prettier
		prettierPlugin,
	]);
};

export default internals;
export { defineZenoConfig };
