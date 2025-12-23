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

		// https://typescript-eslint.io/rules/await-thenable
		// requires type information
		'@typescript-eslint/await-thenable': 'off',

		// https://typescript-eslint.io/rules/ban-ts-comment
		'@typescript-eslint/ban-ts-comment': 'error',

		// https://typescript-eslint.io/rules/ban-tslint-comment
		'@typescript-eslint/ban-tslint-comment': 'error',

		// https://typescript-eslint.io/rules/class-literal-property-style
		'@typescript-eslint/class-literal-property-style': 'error',

		// https://typescript-eslint.io/rules/class-methods-use-this
		'class-methods-use-this': 'off',
		'@typescript-eslint/class-methods-use-this': 'off',

		// https://typescript-eslint.io/rules/consistent-generic-constructors
		'@typescript-eslint/consistent-generic-constructors': 'error',

		// https://typescript-eslint.io/rules/consistent-indexed-object-style
		'@typescript-eslint/consistent-indexed-object-style': 'error',

		// https://typescript-eslint.io/rules/consistent-return
		'consistent-return': 'off',
		'@typescript-eslint/consistent-return': 'off',

		// https://typescript-eslint.io/rules/consistent-type-assertions
		'@typescript-eslint/consistent-type-assertions': 'error',

		// https://typescript-eslint.io/rules/consistent-type-definitions
		'@typescript-eslint/consistent-type-definitions': 'error',

		// https://typescript-eslint.io/rules/consistent-type-exports
		// requires type information
		'@typescript-eslint/consistent-type-exports': 'off',

		// TODO: test this, might conflict with import plugin
		// https://typescript-eslint.io/rules/consistent-type-imports
		'@typescript-eslint/consistent-type-imports': 'off',

		// https://typescript-eslint.io/rules/default-param-last
		'default-param-last': 'off',
		'@typescript-eslint/default-param-last': 'error',

		// https://typescript-eslint.io/rules/dot-notation
		// requires type information
		// 'dot-notation': 'off',
		'@typescript-eslint/dot-notation': 'off',

		// https://typescript-eslint.io/rules/explicit-function-return-type
		'@typescript-eslint/explicit-function-return-type': 'off',

		// https://typescript-eslint.io/rules/explicit-member-accessibility
		'@typescript-eslint/explicit-member-accessibility': 'off',

		// https://typescript-eslint.io/rules/explicit-module-boundary-types
		'@typescript-eslint/explicit-module-boundary-types': 'off',

		// https://typescript-eslint.io/rules/init-declarations
		// 'init-declarations': 'off',
		'@typescript-eslint/init-declarations': 'off',

		// https://typescript-eslint.io/rules/max-params
		// 'max-params': 'off',
		'@typescript-eslint/max-params': 'off',

		// TODO: test
		// https://typescript-eslint.io/rules/member-ordering
		'@typescript-eslint/member-ordering': 'off',

		// https://typescript-eslint.io/rules/method-signature-style
		'@typescript-eslint/method-signature-style': 'error',

		// https://typescript-eslint.io/rules/naming-convention
		// requires type information
		'@typescript-eslint/naming-convention': 'off',

		// https://typescript-eslint.io/rules/no-array-constructor
		'no-array-constructor': 'off',
		'@typescript-eslint/no-array-constructor': 'error',

		// https://typescript-eslint.io/rules/no-array-delete
		// requires type information
		'@typescript-eslint/no-array-delete': 'off',

		// https://typescript-eslint.io/rules/no-base-to-string
		// requires type information
		'@typescript-eslint/no-base-to-string': 'off',

		// https://typescript-eslint.io/rules/no-confusing-non-null-assertion
		'@typescript-eslint/no-confusing-non-null-assertion': 'error',

		// https://typescript-eslint.io/rules/no-confusing-void-expression
		// requires type information
		'@typescript-eslint/no-confusing-void-expression': 'off',

		// https://typescript-eslint.io/rules/no-deprecated
		// requires type information
		'@typescript-eslint/no-deprecated': 'off',

		// https://typescript-eslint.io/rules/no-dupe-class-members
		'no-dupe-class-members': 'off',
		'@typescript-eslint/no-dupe-class-members': 'off', // ts compiler checks this

		// https://typescript-eslint.io/rules/no-duplicate-enum-values
		'@typescript-eslint/no-duplicate-enum-values': 'error',

		// https://typescript-eslint.io/rules/no-duplicate-type-constituents
		// requires type information
		'@typescript-eslint/no-duplicate-type-constituents': 'off',

		// https://typescript-eslint.io/rules/no-dynamic-delete
		'@typescript-eslint/no-dynamic-delete': 'off',

		// https://typescript-eslint.io/rules/no-empty-function
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': [
			'error',
			{
				allow: ['arrowFunctions'],
			},
		],

		// https://typescript-eslint.io/rules/no-empty-interface
		'@typescript-eslint/no-empty-interface': 'off',

		// https://typescript-eslint.io/rules/no-empty-object-type
		'@typescript-eslint/no-empty-object-type': 'error',

		// https://typescript-eslint.io/rules/no-explicit-any
		'@typescript-eslint/no-explicit-any': 'error',

		// https://typescript-eslint.io/rules/no-extra-non-null-assertion
		'@typescript-eslint/no-extra-non-null-assertion': 'error',

		// https://typescript-eslint.io/rules/no-extraneous-class
		'@typescript-eslint/no-extraneous-class': 'error',

		// https://typescript-eslint.io/rules/no-floating-promises
		// requires type information
		'@typescript-eslint/no-floating-promises': 'off',

		// https://typescript-eslint.io/rules/no-for-in-array
		// requires type information
		'@typescript-eslint/no-for-in-array': 'off',

		// https://typescript-eslint.io/rules/no-implied-eval
		// requires type information
		// 'no-implied-eval': 'off',
		'@typescript-eslint/no-implied-eval': 'off',

		// https://typescript-eslint.io/rules/no-import-type-side-effects
		'@typescript-eslint/no-import-type-side-effects': 'off',

		// https://typescript-eslint.io/rules/no-inferrable-types
		'@typescript-eslint/no-inferrable-types': 'error',

		// https://typescript-eslint.io/rules/no-invalid-this
		'no-invalid-this': 'off',
		'@typescript-eslint/no-invalid-this': 'off',

		// https://typescript-eslint.io/rules/no-invalid-void-type
		'@typescript-eslint/no-invalid-void-type': 'error',

		// https://typescript-eslint.io/rules/no-loop-func
		'no-loop-func': 'off',
		'@typescript-eslint/no-loop-func': 'error',

		// https://typescript-eslint.io/rules/no-loss-of-precision
		// 'no-loss-of-precision': 'off',
		'@typescript-eslint/no-loss-of-precision': 'off', // deprecated, base rule handles this

		// https://typescript-eslint.io/rules/no-magic-numbers
		'no-magic-numbers': 'off',
		'@typescript-eslint/no-magic-numbers': 'off',

		// https://typescript-eslint.io/rules/no-meaningless-void-operator
		// requires type information
		'@typescript-eslint/no-meaningless-void-operator': 'off',

		// https://typescript-eslint.io/rules/no-misused-new
		'@typescript-eslint/no-misused-new': 'error',

		// https://typescript-eslint.io/rules/no-misused-promises
		// requires type information
		'@typescript-eslint/no-misused-promises': 'off',

		// https://typescript-eslint.io/rules/no-misused-spread
		// requires type information
		'@typescript-eslint/no-misused-spread': 'off',

		// https://typescript-eslint.io/rules/no-mixed-enums
		// requires type information
		'@typescript-eslint/no-mixed-enums': 'off',

		// https://typescript-eslint.io/rules/no-namespace
		'@typescript-eslint/no-namespace': 'error',

		// https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

		// https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

		// https://typescript-eslint.io/rules/no-non-null-assertion
		'@typescript-eslint/no-non-null-assertion': 'error',

		// https://typescript-eslint.io/rules/no-redeclare
		'no-redeclare': 'off',
		'@typescript-eslint/no-redeclare': 'off', // ts compiler checks this

		// https://typescript-eslint.io/rules/no-redundant-type-constituents
		// requires type information
		'@typescript-eslint/no-redundant-type-constituents': 'off',

		// https://typescript-eslint.io/rules/no-require-imports
		'@typescript-eslint/no-require-imports': 'error',

		// https://typescript-eslint.io/rules/no-restricted-imports
		// 'no-restricted-imports': 'off',
		'@typescript-eslint/no-restricted-imports': 'off',

		// https://typescript-eslint.io/rules/no-restricted-types
		'@typescript-eslint/no-restricted-types': 'off',

		// https://typescript-eslint.io/rules/no-shadow
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'error',

		// https://typescript-eslint.io/rules/no-this-alias
		'@typescript-eslint/no-this-alias': 'error',

		// https://typescript-eslint.io/rules/no-type-alias
		'@typescript-eslint/no-type-alias': 'off', // deprecated

		// https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
		// requires type information
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',

		// https://typescript-eslint.io/rules/no-unnecessary-condition
		// requires type information
		'@typescript-eslint/no-unnecessary-condition': 'off',

		// https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment
		'@typescript-eslint/no-unnecessary-parameter-property-assignment':
			'error',

		// https://typescript-eslint.io/rules/no-unnecessary-qualifier
		// requires type information
		'@typescript-eslint/no-unnecessary-qualifier': 'off',

		// https://typescript-eslint.io/rules/no-unnecessary-template-expression
		// requires type information
		'@typescript-eslint/no-unnecessary-template-expression': 'off',

		// https://typescript-eslint.io/rules/no-unnecessary-type-arguments
		// requires type information
		'@typescript-eslint/no-unnecessary-type-arguments': 'off',

		// https://typescript-eslint.io/rules/no-unnecessary-type-assertion
		// requires type information
		'@typescript-eslint/no-unnecessary-type-assertion': 'off',

		// https://typescript-eslint.io/rules/no-unnecessary-type-constraint
		'@typescript-eslint/no-unnecessary-type-constraint': 'error',

		// https://typescript-eslint.io/rules/no-unnecessary-type-conversion
		// requires type information
		'@typescript-eslint/no-unnecessary-type-conversion': 'off',

		// https://typescript-eslint.io/rules/no-unnecessary-type-parameters
		// requires type information
		'@typescript-eslint/no-unnecessary-type-parameters': 'off',

		// https://typescript-eslint.io/rules/no-unsafe-argument
		// requires type information
		'@typescript-eslint/no-unsafe-argument': 'off',

		// https://typescript-eslint.io/rules/no-unsafe-assignment
		// requires type information
		'@typescript-eslint/no-unsafe-assignment': 'off',

		// https://typescript-eslint.io/rules/no-unsafe-call
		// requires type information
		'@typescript-eslint/no-unsafe-call': 'off',

		// https://typescript-eslint.io/rules/no-unsafe-declaration-merging
		'@typescript-eslint/no-unsafe-declaration-merging': 'error',

		// https://typescript-eslint.io/rules/no-unsafe-enum-comparison
		// requires type information
		'@typescript-eslint/no-unsafe-enum-comparison': 'off',

		// https://typescript-eslint.io/rules/no-unsafe-function-type
		'@typescript-eslint/no-unsafe-function-type': 'error',

		// https://typescript-eslint.io/rules/no-unsafe-member-access
		// requires type information
		'@typescript-eslint/no-unsafe-member-access': 'off',

		// https://typescript-eslint.io/rules/no-unsafe-return
		// requires type information
		'@typescript-eslint/no-unsafe-return': 'off',

		// https://typescript-eslint.io/rules/no-unsafe-type-assertion
		// requires type information
		'@typescript-eslint/no-unsafe-type-assertion': 'off',

		// https://typescript-eslint.io/rules/no-unsafe-unary-minus
		// requires type information
		'@typescript-eslint/no-unsafe-unary-minus': 'off',

		// https://typescript-eslint.io/rules/no-unused-expressions
		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions': [
			'error',
			{
				enforceForJSX: true,
			},
		],

		// https://typescript-eslint.io/rules/no-unused-private-class-members
		'no-unused-private-class-members': 'off',
		'@typescript-eslint/no-unused-private-class-members': 'error',

		// https://typescript-eslint.io/rules/no-unused-vars
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

		// https://typescript-eslint.io/rules/no-use-before-define
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': [
			'error',
			{
				functions: true,
				classes: true,
				variables: true,
				allowNamedExports: false,

				// typescript only
				enums: true,
				typedefs: true,
				ignoreTypeReferences: true,
			},
		],

		// https://typescript-eslint.io/rules/no-useless-constructor
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': 'error',

		// https://typescript-eslint.io/rules/no-useless-default-assignment
		// requires type information
		'@typescript-eslint/no-useless-default-assignment': 'off',

		// https://typescript-eslint.io/rules/no-useless-empty-export
		'@typescript-eslint/no-useless-empty-export': 'error',

		// https://typescript-eslint.io/rules/no-var-requires
		'@typescript-eslint/no-var-requires': 'off', // deprecated

		// https://typescript-eslint.io/rules/no-wrapper-object-types
		'@typescript-eslint/no-wrapper-object-types': 'error',

		// https://typescript-eslint.io/rules/non-nullable-type-assertion-style
		// requires type information
		'@typescript-eslint/non-nullable-type-assertion-style': 'off',

		// https://typescript-eslint.io/rules/only-throw-error
		// requires type information
		// 'no-throw-literal': 'off',
		'@typescript-eslint/only-throw-error': 'off',

		// https://typescript-eslint.io/rules/parameter-properties
		'@typescript-eslint/parameter-properties': 'off',

		// https://typescript-eslint.io/rules/prefer-as-const
		'@typescript-eslint/prefer-as-const': 'error',

		// https://typescript-eslint.io/rules/prefer-destructuring
		// requires type information
		// 'prefer-destructuring': 'off',
		'@typescript-eslint/prefer-destructuring': 'off',

		// https://typescript-eslint.io/rules/prefer-enum-initializers
		'@typescript-eslint/prefer-enum-initializers': 'off',

		// https://typescript-eslint.io/rules/prefer-find
		// requires type information
		'@typescript-eslint/prefer-find': 'off',

		// https://typescript-eslint.io/rules/prefer-for-of
		'@typescript-eslint/prefer-for-of': 'error',

		// https://typescript-eslint.io/rules/prefer-function-type
		'@typescript-eslint/prefer-function-type': 'error',

		// https://typescript-eslint.io/rules/prefer-includes
		// requires type information
		'@typescript-eslint/prefer-includes': 'off',

		// https://typescript-eslint.io/rules/prefer-literal-enum-member
		'@typescript-eslint/prefer-literal-enum-member': 'error',

		// https://typescript-eslint.io/rules/prefer-namespace-keyword
		'@typescript-eslint/prefer-namespace-keyword': 'error',

		// https://typescript-eslint.io/rules/prefer-nullish-coalescing
		// requires type information
		'@typescript-eslint/prefer-nullish-coalescing': 'off',

		// https://typescript-eslint.io/rules/prefer-optional-chain
		// requires type information
		'@typescript-eslint/prefer-optional-chain': 'off',

		// https://typescript-eslint.io/rules/prefer-promise-reject-errors
		// requires type information
		// 'prefer-promise-reject-errors': 'off',
		'@typescript-eslint/prefer-promise-reject-errors': 'off',

		// https://typescript-eslint.io/rules/prefer-readonly
		// requires type information
		'@typescript-eslint/prefer-readonly': 'off',

		// https://typescript-eslint.io/rules/prefer-readonly-parameter-types
		// requires type information
		'@typescript-eslint/prefer-readonly-parameter-types': 'off',

		// https://typescript-eslint.io/rules/prefer-reduce-type-parameter
		// requires type information
		'@typescript-eslint/prefer-reduce-type-parameter': 'off',

		// https://typescript-eslint.io/rules/prefer-regexp-exec
		// requires type information
		'@typescript-eslint/prefer-regexp-exec': 'off',

		// https://typescript-eslint.io/rules/prefer-return-this-type
		// requires type information
		'@typescript-eslint/prefer-return-this-type': 'off',

		// https://typescript-eslint.io/rules/prefer-string-starts-ends-with
		// requires type information
		'@typescript-eslint/prefer-string-starts-ends-with': 'off',

		// https://typescript-eslint.io/rules/prefer-ts-expect-error
		'@typescript-eslint/prefer-ts-expect-error': 'off', // deprecated

		// https://typescript-eslint.io/rules/promise-function-async
		// requires type information
		'@typescript-eslint/promise-function-async': 'off',

		// https://typescript-eslint.io/rules/related-getter-setter-pairs
		// requires type information
		'@typescript-eslint/related-getter-setter-pairs': 'off',

		// https://typescript-eslint.io/rules/require-array-sort-compare
		// requires type information
		'@typescript-eslint/require-array-sort-compare': 'off',

		// https://typescript-eslint.io/rules/require-await
		// requires type information
		// 'require-await': 'off',
		'@typescript-eslint/require-await': 'off',

		// https://typescript-eslint.io/rules/restrict-plus-operands
		// requires type information
		'@typescript-eslint/restrict-plus-operands': 'off',

		// https://typescript-eslint.io/rules/restrict-template-expressions
		// requires type information
		'@typescript-eslint/restrict-template-expressions': 'off',

		// https://typescript-eslint.io/rules/return-await
		// requires type information
		// 'no-return-await': 'off',
		'@typescript-eslint/return-await': 'off',

		// https://typescript-eslint.io/rules/sort-type-constituents
		'@typescript-eslint/sort-type-constituents': 'off', // deprecated

		// https://typescript-eslint.io/rules/strict-boolean-expressions
		// requires type information
		'@typescript-eslint/strict-boolean-expressions': 'off',

		// https://typescript-eslint.io/rules/switch-exhaustiveness-check
		// requires type information
		'@typescript-eslint/switch-exhaustiveness-check': 'off',

		// https://typescript-eslint.io/rules/triple-slash-reference
		'@typescript-eslint/triple-slash-reference': 'error',

		// https://typescript-eslint.io/rules/typedef
		'@typescript-eslint/typedef': 'off', // deprecated

		// https://typescript-eslint.io/rules/unbound-method
		// requires type information
		'@typescript-eslint/unbound-method': 'off',

		// https://typescript-eslint.io/rules/unified-signatures
		'@typescript-eslint/unified-signatures': 'error',

		// https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
		// requires type information
		'@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
	};
};

export default getTypescriptPluginRules;
