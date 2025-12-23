export default {
	useTabs: true,
	tabWidth: 4,
	semi: true,
	singleQuote: true,
	trailingComma: 'es5',
	// override trailingComma for jsonc and eslintrc files https://github.com/prettier/prettier/issues/15956
	overrides: [
		{
			files: ['**/*.jsonc', '**/*.eslintrc'],
			options: {
				trailingComma: 'none',
			},
		},
	],
};
