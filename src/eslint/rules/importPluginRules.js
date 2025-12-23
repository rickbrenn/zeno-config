import { allExtensionsString, nodeExtensionsString } from '../../extensions.js';

const extensionsDefault = {};

const getImportPluginRules = (options = {}) => {
	return {
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/export.md
		'import-x/export': 'error',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-deprecated.md
		'import-x/no-deprecated': 'off',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-empty-named-blocks.md
		'import-x/no-empty-named-blocks': 'error',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-extraneous-dependencies.md
		'import-x/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					`**/eslint.config{${nodeExtensionsString}}`, // eslint config
					`**/webpack.*{${nodeExtensionsString}}`, // webpack config
					`**/*.test{${allExtensionsString}}`, // test files
					`**/*.stories{${allExtensionsString}}`, // story files
					`**/.prettierrc{${nodeExtensionsString}}`, // prettier config
				],
				optionalDependencies: false,
				peerDependencies: true,
				bundledDependencies: false,
				includeInternal: false,
				includeTypes: false,
			},
		],

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-mutable-exports.md
		'import-x/no-mutable-exports': 'error',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default.md
		'import-x/no-named-as-default': 'off',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default-member.md
		'import-x/no-named-as-default-member': 'off',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unused-modules.md
		'import-x/no-unused-modules': [
			'warn',
			{
				missingExports: false,
				unusedExports: true,
				ignoreUnusedTypeExports: false,
				ignoreExports: [
					`**/eslint.config{${nodeExtensionsString}}`,
					...(options.ignoreExports || []),
				],
			},
		],

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-amd.md
		'import-x/no-amd': 'error',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-commonjs.md
		'import-x/no-commonjs': 'off',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-import-module-exports.md
		'import-x/no-import-module-exports': 'error',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-nodejs-modules.md
		'import-x/no-nodejs-modules': 'off',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/unambiguous.md
		'import-x/unambiguous': 'off',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/default.md
		'import-x/default': 'error',

		// TODO: test this, may only be needed in JS and disabled in TS
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/named.md
		'import-x/named': 'error',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/namespace.md
		'import-x/namespace': ['error', { allowComputed: true }],

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-absolute-path.md
		'import-x/no-absolute-path': 'error',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-cycle.md
		'import-x/no-cycle': 'error',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-dynamic-require.md
		'import-x/no-dynamic-require': 'error',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-internal-modules.md
		'import-x/no-internal-modules': 'off',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-packages.md
		'import-x/no-relative-packages': 'error',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-parent-imports.md
		'import-x/no-relative-parent-imports': 'off',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-restricted-paths.md
		'import-x/no-restricted-paths': 'off',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-self-import.md
		'import-x/no-self-import': 'error',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unresolved.md
		'import-x/no-unresolved': [
			'error',
			{
				commonjs: true,
				caseSensitive: true,
				caseSensitiveStrict: true,
			},
		],

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-useless-path-segments.md
		'import-x/no-useless-path-segments': ['error', { commonjs: true }],

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-webpack-loader-syntax.md
		'import-x/no-webpack-loader-syntax': 'error',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/consistent-type-specifier-style.md
		'import-x/consistent-type-specifier-style': ['error', 'prefer-inline'],

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/dynamic-import-chunkname.md
		'import-x/dynamic-import-chunkname': 'off',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/exports-last.md
		'import-x/exports-last': 'error',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/extensions.md
		'import-x/extensions': [
			'error',
			'ignorePackages',
			{ ...extensionsDefault, ...options.extensionsIgnorePattern },
		],

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/first.md
		'import-x/first': 'error',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/group-exports.md
		'import-x/group-exports': 'error',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/max-dependencies.md
		'import-x/max-dependencies': 'off',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/newline-after-import.md
		'import-x/newline-after-import': ['warn', { considerComments: true }],

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-anonymous-default-export.md
		'import-x/no-anonymous-default-export': 'off',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-default-export.md
		'import-x/no-default-export': 'off',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md
		'import-x/no-duplicates': ['error', { 'prefer-inline': true }],

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-default.md
		'import-x/no-named-default': 'error',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-export.md
		'import-x/no-named-export': 'off',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-namespace.md
		'import-x/no-namespace': 'off',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unassigned-import.md
		'import-x/no-unassigned-import': 'off',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md
		'import-x/order': [
			'warn',
			{
				groups: [
					[
						'builtin',
						'external',
						'internal',
						'parent',
						'sibling',
						'index',
						'object',
						'type',
					],
				],
				'newlines-between': 'ignore',
			},
		],

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/prefer-default-export.md
		'import-x/prefer-default-export': 'warn',

		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/prefer-namespace-import.md
		'import-x/prefer-namespace-import': 'off',
	};
};

export default getImportPluginRules;
