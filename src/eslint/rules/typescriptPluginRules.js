const getTypescriptPluginRules = () => {
	return {
		// https://typescript-eslint.io/rules/adjacent-overload-signatures
		'@typescript-eslint/adjacent-overload-signatures': 'error',

		// https://typescript-eslint.io/rules/array-type
		'@typescript-eslint/array-type': [
			'error',
			{
				default: 'array',
				readonly: 'array',
			},
		],

		// TODO: typed linting
		// https://typescript-eslint.io/rules/await-thenable
		'@typescript-eslint/await-thenable': 'error',

		// https://typescript-eslint.io/rules/ban-ts-comment
		'@typescript-eslint/ban-ts-comment': 'error',

		// https://typescript-eslint.io/rules/ban-tslint-comment
		'@typescript-eslint/ban-tslint-comment': 'error',

		// https://typescript-eslint.io/rules/class-literal-property-style
		'@typescript-eslint/class-literal-property-style': 'off',

		// https://typescript-eslint.io/rules/class-methods-use-this
		//  "class-methods-use-this": "off",
		'@typescript-eslint/class-methods-use-this': 'off',

		// https://typescript-eslint.io/rules/consistent-generic-constructors
		'@typescript-eslint/consistent-generic-constructors': 'off',

		// https://typescript-eslint.io/rules/consistent-indexed-object-style
		'@typescript-eslint/consistent-indexed-object-style': 'off',

		// https://typescript-eslint.io/rules/consistent-return
		// 'consistent-return': 'off',
		'@typescript-eslint/consistent-return': 'off',

		// https://typescript-eslint.io/rules/consistent-type-assertions
		// "@typescript-eslint/consistent-type-assertions": "error",

		// https://typescript-eslint.io/rules/no-unused-vars/
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				vars: 'all',
				args: 'after-used',
				caughtErrors: 'none',
				ignoreRestSiblings: false,
				ignoreClassWithStaticInitBlock: false,
				ignoreUsingDeclarations: false,
				reportUsedIgnorePattern: false,
			},
		],
	};
};

export default getTypescriptPluginRules;
