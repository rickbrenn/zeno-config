const getNodePluginRules = () => {
	return {
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/callback-return.md
		'n/callback-return': 'off',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/exports-style.md
		'n/exports-style': [
			'error',
			'module.exports',
			{
				allowBatchAssign: false,
			},
		],

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/file-extension-in-import.md
		'n/file-extension-in-import': 'off', // handled by import/extensions

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/global-require.md
		'n/global-require': 'error',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/handle-callback-err.md
		'n/handle-callback-err': 'off',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/hashbang.md
		'n/hashbang': 'off',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-callback-literal.md
		'n/no-callback-literal': 'off',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-deprecated-api.md
		'n/no-deprecated-api': 'error',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-exports-assign.md
		'n/no-exports-assign': 'error',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-extraneous-import.md
		'n/no-extraneous-import': 'off', // handled by import/no-extraneous-dependencies

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-extraneous-require.md
		'n/no-extraneous-require': 'off',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-import.md
		'n/no-missing-import': 'off', // handled by import/no-unresolved

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-require.md
		'n/no-missing-require': 'off', // handled by import/no-unresolved

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-mixed-requires.md
		'n/no-mixed-requires': 'off',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-new-require.md
		'n/no-new-require': 'error',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-path-concat.md
		'n/no-path-concat': 'error',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-env.md
		'n/no-process-env': 'off',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-exit.md
		'n/no-process-exit': 'off',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-restricted-import.md
		'n/no-restricted-import': 'off',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-restricted-require.md
		'n/no-restricted-require': 'off',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-sync.md
		'n/no-sync': 'off',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-top-level-await.md
		'n/no-top-level-await': 'off',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-bin.md
		'n/no-unpublished-bin': 'error',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-import.md
		'n/no-unpublished-import': 'off',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-require.md
		'n/no-unpublished-require': 'off',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-builtins.md
		'n/no-unsupported-features/es-builtins': 'error',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-syntax.md
		'n/no-unsupported-features/es-syntax': 'error',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/node-builtins.md
		'n/no-unsupported-features/node-builtins': 'error',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/buffer.md
		'n/prefer-global/buffer': 'error',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/console.md
		'n/prefer-global/console': 'error',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/process.md
		'n/prefer-global/process': 'error',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/text-decoder.md
		'n/prefer-global/text-decoder': 'error',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/text-encoder.md
		'n/prefer-global/text-encoder': 'error',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/url.md
		'n/prefer-global/url': 'error',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/url-search-params.md
		'n/prefer-global/url-search-params': 'error',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-node-protocol.md
		'n/prefer-node-protocol': 'off', // handled by unicorn/prefer-node-protocol

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-promises/dns.md
		'n/prefer-promises/dns': 'off',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-promises/fs.md
		'n/prefer-promises/fs': 'off',

		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/process-exit-as-throw.md
		'n/process-exit-as-throw': 'error',
	};
};

export default getNodePluginRules;
