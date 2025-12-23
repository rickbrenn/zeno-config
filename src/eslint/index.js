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
import getBaseRules from './rules/baseRules.js';
import getImportPluginRules from './rules/importPluginRules.js';
import getReactPluginRules from './rules/reactPluginRules.js';
import getReactHooksPluginRules from './rules/reactHooksPluginRules.js';
import getStylisticPluginRules from './rules/stylisticPluginRules.js';
import getNodePluginRules from './rules/nodePluginRules.js';
import getReactYouMightNotNeedAnEffectPluginRules from './rules/reactYouMightNotNeedAnEffectPluginRules.js';
import getJsxA11yPluginRules from './rules/jsxA11yPluginRules.js';
import getUnicornPluginRules from './rules/unicornPluginRules.js';

// import typescriptPluginRules from './rules/typescriptPluginRules';
import {
	allExtensions,
	allExtensionsString,
	nodeExtensionsString,
	reactExtensions,
	reactExtensionsString,
	reactExtensionsExtended,
	reactExtensionsExtendedString,
	// typescriptExtensions,
	// typescriptExtensionsString,
} from './extensions.js';

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
					extensionsPattern: options.extensionsPattern,
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

// const typescriptConfig = [
// 	{
// 		name: 'zeno/typescript',
// 		files: [`**/*{${typescriptExtensionsString}}`],
// 		rules: { ...typescriptPluginRules },
// 	},
// ];

const configs = {
	base: baseConfig,
	react: reactConfig,
	node: nodeConfig,
	// ts: typescriptConfig,
};

const internals = {
	configs,
	extensions: {
		allExtensions,
		allExtensionsString,
		nodeExtensionsString,
		reactExtensions,
		reactExtensionsString,
		reactExtensionsExtended,
		reactExtensionsExtendedString,
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
		// if a project uses .js file extension for both react and node files this will help separate the rules for each
		nodeIgnoreDirs: [],
		ignoreExports: [],
		reactDirs: [],
		extensionsPattern: {},
		// ts: false,
	};
	let config;

	if (Array.isArray(arg1)) {
		config = arg1;
	} else {
		options = arg1 || options;
		config = arg2 || [];
	}

	return defineConfig([
		...configs.base({
			ignoreExports: options.ignoreExports,
			webpackConfig: options.webpackConfig,
			extensionsPattern: options.extensionsPattern,
		}),
		...configs.node({ ignoreDirs: options.nodeIgnoreDirs }),
		...(options.react
			? configs.react({
					reactDirs: options.reactDirs,
				})
			: []),
		// ...(options.ts ? configs.ts : []),

		...(config || []),

		// Turn off formatting rules that might conflict with Prettier
		prettierPlugin,
	]);
};

export default internals;
export { defineZenoConfig };
