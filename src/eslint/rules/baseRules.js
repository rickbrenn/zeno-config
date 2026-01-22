const getBaseRules = () => {
	return {
		// https://eslint.org/docs/latest/rules/array-callback-return
		'array-callback-return': ['error', { allowImplicit: true }],

		// https://eslint.org/docs/latest/rules/constructor-super
		'constructor-super': 'error',

		// https://eslint.org/docs/latest/rules/for-direction
		'for-direction': 'error',

		// https://eslint.org/docs/latest/rules/getter-return
		'getter-return': ['error', { allowImplicit: true }],

		// https://eslint.org/docs/latest/rules/no-async-promise-executor
		'no-async-promise-executor': 'error',

		// https://eslint.org/docs/latest/rules/no-await-in-loop
		'no-await-in-loop': 'warn',

		// https://eslint.org/docs/latest/rules/no-class-assign
		'no-class-assign': 'error',

		// https://eslint.org/docs/latest/rules/no-compare-neg-zero
		'no-compare-neg-zero': 'error',

		// https://eslint.org/docs/latest/rules/no-cond-assign
		'no-cond-assign': ['error', 'always'],

		// https://eslint.org/docs/latest/rules/no-const-assign
		'no-const-assign': 'error',

		// https://eslint.org/docs/latest/rules/no-constant-binary-expression
		'no-constant-binary-expression': 'off',

		// https://eslint.org/docs/latest/rules/no-constant-condition
		'no-constant-condition': 'error',

		// https://eslint.org/docs/latest/rules/no-constructor-return
		'no-constructor-return': 'error',

		// https://eslint.org/docs/latest/rules/no-control-regex
		'no-control-regex': 'error',

		// https://eslint.org/docs/latest/rules/no-debugger
		'no-debugger': 'error',

		// https://eslint.org/docs/latest/rules/no-dupe-args
		'no-dupe-args': 'error',

		// https://eslint.org/docs/latest/rules/no-dupe-class-members
		'no-dupe-class-members': 'error',

		// https://eslint.org/docs/latest/rules/no-dupe-else-if
		'no-dupe-else-if': 'error',

		// https://eslint.org/docs/latest/rules/no-dupe-keys
		'no-dupe-keys': 'error',

		// https://eslint.org/docs/latest/rules/no-duplicate-case
		'no-duplicate-case': 'error',

		// https://eslint.org/docs/latest/rules/no-duplicate-imports
		'no-duplicate-imports': 'off',

		// https://eslint.org/docs/latest/rules/no-empty-character-class
		'no-empty-character-class': 'error',

		// https://eslint.org/docs/latest/rules/no-empty-pattern
		'no-empty-pattern': 'error',

		// https://eslint.org/docs/latest/rules/no-ex-assign
		'no-ex-assign': 'error',

		// https://eslint.org/docs/latest/rules/no-fallthrough
		'no-fallthrough': 'error',

		// https://eslint.org/docs/latest/rules/no-func-assign
		'no-func-assign': 'error',

		// https://eslint.org/docs/latest/rules/no-import-assign
		'no-import-assign': 'error',

		// https://eslint.org/docs/latest/rules/no-inner-declarations
		'no-inner-declarations': 'off',

		// https://eslint.org/docs/latest/rules/no-invalid-regexp
		'no-invalid-regexp': 'error',

		// https://eslint.org/docs/latest/rules/no-irregular-whitespace
		'no-irregular-whitespace': 'error',

		// https://eslint.org/docs/latest/rules/no-loss-of-precision
		'no-loss-of-precision': 'error',

		// https://eslint.org/docs/latest/rules/no-misleading-character-class
		'no-misleading-character-class': 'error',

		// https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
		'no-new-native-nonconstructor': 'error',

		// https://eslint.org/docs/latest/rules/no-obj-calls
		'no-obj-calls': 'error',

		// https://eslint.org/docs/latest/rules/no-promise-executor-return
		'no-promise-executor-return': 'error',

		// https://eslint.org/docs/latest/rules/no-prototype-builtins
		'no-prototype-builtins': 'error',

		// https://eslint.org/docs/latest/rules/no-self-assign
		'no-self-assign': ['error', { props: true }],

		// https://eslint.org/docs/latest/rules/no-self-compare
		'no-self-compare': 'error',

		// https://eslint.org/docs/latest/rules/no-setter-return
		'no-setter-return': 'error',

		// https://eslint.org/docs/latest/rules/no-sparse-arrays
		'no-sparse-arrays': 'error',

		// https://eslint.org/docs/latest/rules/no-template-curly-in-string
		'no-template-curly-in-string': 'error',

		// https://eslint.org/docs/latest/rules/no-this-before-super
		'no-this-before-super': 'error',

		// https://eslint.org/docs/latest/rules/no-unassigned-vars
		'no-unassigned-vars': 'error',

		// https://eslint.org/docs/latest/rules/no-undef
		'no-undef': ['error', { typeof: true }],

		// https://eslint.org/docs/latest/rules/no-unexpected-multiline
		'no-unexpected-multiline': 'error',

		// https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
		'no-unmodified-loop-condition': 'error',

		// https://eslint.org/docs/latest/rules/no-unreachable
		'no-unreachable': 'error',

		// https://eslint.org/docs/latest/rules/no-unreachable-loop
		'no-unreachable-loop': 'error',

		// https://eslint.org/docs/latest/rules/no-unsafe-finally
		'no-unsafe-finally': 'error',

		// https://eslint.org/docs/latest/rules/no-unsafe-negation
		'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],

		// https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
		'no-unsafe-optional-chaining': [
			'error',
			{ disallowArithmeticOperators: true },
		],

		// https://eslint.org/docs/latest/rules/no-unused-private-class-members
		'no-unused-private-class-members': 'error',

		// https://eslint.org/docs/latest/rules/no-unused-vars
		'no-unused-vars': [
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

		// https://eslint.org/docs/latest/rules/no-use-before-define
		'no-use-before-define': [
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

		// https://eslint.org/docs/latest/rules/no-useless-assignment
		'no-useless-assignment': 'error',

		// https://eslint.org/docs/latest/rules/no-useless-backreference
		'no-useless-backreference': 'error',

		// https://eslint.org/docs/latest/rules/require-atomic-updates
		'require-atomic-updates': ['error', { allowProperties: false }],

		// https://eslint.org/docs/latest/rules/use-isnan
		'use-isnan': 'error',

		// https://eslint.org/docs/latest/rules/valid-typeof
		'valid-typeof': ['error', { requireStringLiterals: true }],

		// https://eslint.org/docs/latest/rules/accessor-pairs
		'accessor-pairs': 'error',

		// https://eslint.org/docs/latest/rules/arrow-body-style
		'arrow-body-style': 'off',

		// https://eslint.org/docs/latest/rules/block-scoped-var
		'block-scoped-var': 'error',

		// https://eslint.org/docs/latest/rules/camelcase
		camelcase: [
			'warn',
			{
				properties: 'always',
				ignoreDestructuring: false,
				ignoreImports: false,
				ignoreGlobals: false,
				allow: [],
			},
		],

		// https://eslint.org/docs/latest/rules/capitalized-comments
		'capitalized-comments': 'off',

		// https://eslint.org/docs/latest/rules/class-methods-use-this
		'class-methods-use-this': 'off',

		// https://eslint.org/docs/latest/rules/complexity
		complexity: 'off',

		// https://eslint.org/docs/latest/rules/consistent-return
		'consistent-return': 'off',

		// https://eslint.org/docs/latest/rules/consistent-this
		'consistent-this': 'error',

		// https://eslint.org/docs/latest/rules/curly
		curly: 'error',

		// https://eslint.org/docs/latest/rules/default-case
		'default-case': ['error', { commentPattern: '^no default$' }],

		// https://eslint.org/docs/latest/rules/default-case-last
		'default-case-last': 'error',

		// https://eslint.org/docs/latest/rules/default-param-last
		'default-param-last': 'error',

		// https://eslint.org/docs/latest/rules/dot-notation
		'dot-notation': ['error', { allowKeywords: true }],

		// https://eslint.org/docs/latest/rules/eqeqeq
		eqeqeq: ['error', 'always', { null: 'ignore' }],

		// https://eslint.org/docs/latest/rules/func-name-matching
		'func-name-matching': 'off',

		// https://eslint.org/docs/latest/rules/func-names
		'func-names': ['warn', 'as-needed'],

		// https://eslint.org/docs/latest/rules/func-style
		'func-style': [
			'error',
			'declaration',
			{ allowArrowFunctions: true, allowTypeAnnotation: true },
		],

		// https://eslint.org/docs/latest/rules/grouped-accessor-pairs
		'grouped-accessor-pairs': [
			'error',
			'getBeforeSet',
			{ enforceForTSTypes: true },
		],

		// https://eslint.org/docs/latest/rules/guard-for-in
		'guard-for-in': 'error',

		// https://eslint.org/docs/latest/rules/id-denylist
		'id-denylist': 'off',

		// https://eslint.org/docs/latest/rules/id-length
		'id-length': 'off',

		// https://eslint.org/docs/latest/rules/id-match
		'id-match': 'off',

		// https://eslint.org/docs/latest/rules/init-declarations
		'init-declarations': 'off',

		// https://eslint.org/docs/latest/rules/logical-assignment-operators
		'logical-assignment-operators': 'off',

		// https://eslint.org/docs/latest/rules/max-classes-per-file
		'max-classes-per-file': 'off',

		// https://eslint.org/docs/latest/rules/max-depth
		'max-depth': 'off',

		// https://eslint.org/docs/latest/rules/max-lines
		'max-lines': 'off',

		// https://eslint.org/docs/latest/rules/max-lines-per-function
		'max-lines-per-function': 'off',

		// https://eslint.org/docs/latest/rules/max-nested-callbacks
		'max-nested-callbacks': 'off',

		// https://eslint.org/docs/latest/rules/max-params
		'max-params': 'off',

		// https://eslint.org/docs/latest/rules/max-statements
		'max-statements': 'off',

		// https://eslint.org/docs/latest/rules/new-cap
		'new-cap': [
			'error',
			{
				newIsCap: true,
				capIsNew: true,
				properties: true,
			},
		],

		// https://eslint.org/docs/latest/rules/no-alert
		'no-alert': 'warn',

		// https://eslint.org/docs/latest/rules/no-array-constructor
		'no-array-constructor': 'error',

		// https://eslint.org/docs/latest/rules/no-bitwise
		'no-bitwise': ['error', { allow: ['~'] }],

		// https://eslint.org/docs/latest/rules/no-caller
		'no-caller': 'error',

		// https://eslint.org/docs/latest/rules/no-case-declarations
		'no-case-declarations': 'error',

		// https://eslint.org/docs/latest/rules/no-console
		'no-console': 'warn',

		// https://eslint.org/docs/latest/rules/no-continue
		'no-continue': 'off',

		// https://eslint.org/docs/latest/rules/no-delete-var
		'no-delete-var': 'error',

		// https://eslint.org/docs/latest/rules/no-div-regex
		'no-div-regex': 'off',

		// https://eslint.org/docs/latest/rules/no-else-return
		'no-else-return': 'error',

		// https://eslint.org/docs/latest/rules/no-empty
		'no-empty': 'error',

		// https://eslint.org/docs/latest/rules/no-empty-function
		'no-empty-function': [
			'error',
			{
				allow: ['arrowFunctions'],
			},
		],

		// https://eslint.org/docs/latest/rules/no-empty-static-block
		'no-empty-static-block': 'error',

		// Using eqeqeq rule instead
		// https://eslint.org/docs/latest/rules/no-eq-null
		'no-eq-null': 'off',

		// https://eslint.org/docs/latest/rules/no-eval
		'no-eval': 'error',

		// https://eslint.org/docs/latest/rules/no-extend-native
		'no-extend-native': 'error',

		// https://eslint.org/docs/latest/rules/no-extra-bind
		'no-extra-bind': 'error',

		// https://eslint.org/docs/latest/rules/no-extra-boolean-cast
		'no-extra-boolean-cast': 'error',

		// https://eslint.org/docs/latest/rules/no-extra-label
		'no-extra-label': 'error',

		// https://eslint.org/docs/latest/rules/no-global-assign
		'no-global-assign': 'error',

		// https://eslint.org/docs/latest/rules/no-implicit-coercion
		'no-implicit-coercion': [
			'error',
			{
				boolean: true,
				number: true,
				string: true,
				disallowTemplateShorthand: true,
				allow: ['!!', '~'],
			},
		],

		// https://eslint.org/docs/latest/rules/no-implicit-globals
		'no-implicit-globals': 'off',

		// https://eslint.org/docs/latest/rules/no-implied-eval
		'no-implied-eval': 'error',

		// https://eslint.org/docs/latest/rules/no-inline-comments
		'no-inline-comments': 'off',

		// https://eslint.org/docs/latest/rules/no-invalid-this
		'no-invalid-this': ['error', { capIsConstructor: false }],

		// https://eslint.org/docs/latest/rules/no-iterator
		'no-iterator': 'error',

		// https://eslint.org/docs/latest/rules/no-label-var
		'no-label-var': 'error',

		// https://eslint.org/docs/latest/rules/no-labels
		'no-labels': 'error',

		// https://eslint.org/docs/latest/rules/no-lone-blocks
		'no-lone-blocks': 'error',

		// https://eslint.org/docs/latest/rules/no-lonely-if
		'no-lonely-if': 'error',

		// https://eslint.org/docs/latest/rules/no-loop-func
		'no-loop-func': 'error',

		// https://eslint.org/docs/latest/rules/no-magic-numbers
		'no-magic-numbers': 'off',

		// https://eslint.org/docs/latest/rules/no-multi-assign
		'no-multi-assign': 'error',

		// https://eslint.org/docs/latest/rules/no-multi-str
		'no-multi-str': 'error',

		// https://eslint.org/docs/latest/rules/no-negated-condition
		'no-negated-condition': 'off',

		// https://eslint.org/docs/latest/rules/no-nested-ternary
		'no-nested-ternary': 'error',

		// https://eslint.org/docs/latest/rules/no-new
		'no-new': 'error',

		// https://eslint.org/docs/latest/rules/no-new-func
		'no-new-func': 'error',

		// https://eslint.org/docs/latest/rules/no-new-wrappers
		'no-new-wrappers': 'error',

		// https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
		'no-nonoctal-decimal-escape': 'error',

		// https://eslint.org/docs/latest/rules/no-object-constructor
		'no-object-constructor': 'error',

		// https://eslint.org/docs/latest/rules/no-octal
		'no-octal': 'error',

		// https://eslint.org/docs/latest/rules/no-octal-escape
		'no-octal-escape': 'error',

		// https://eslint.org/docs/latest/rules/no-param-reassign
		'no-param-reassign': [
			'off', // not needed with ESM
			{
				props: true,
				ignorePropertyModificationsFor: [
					'acc', // for reduce accumulators
					'req', // for Express requests
					'res', // for Express responses
				],
				ignorePropertyModificationsForRegex: [
					'^_safe', // to bypass the rule and signify that the property is safe to mutate
				],
			},
		],

		// https://eslint.org/docs/latest/rules/no-plusplus
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

		// https://eslint.org/docs/latest/rules/no-proto
		'no-proto': 'error',

		// https://eslint.org/docs/latest/rules/no-redeclare
		'no-redeclare': 'error',

		// https://eslint.org/docs/latest/rules/no-regex-spaces
		'no-regex-spaces': 'error',

		// https://eslint.org/docs/latest/rules/no-restricted-exports
		'no-restricted-exports': [
			'error',
			{
				restrictedNamedExports: [
					'default', // naming an export 'default' is likely a mistake
				],
			},
		],

		// https://eslint.org/docs/latest/rules/no-restricted-globals
		'no-restricted-globals': 'off',

		// https://eslint.org/docs/latest/rules/no-restricted-imports
		'no-restricted-imports': 'off',

		// https://eslint.org/docs/latest/rules/no-restricted-properties
		'no-restricted-properties': 'off',

		// https://eslint.org/docs/latest/rules/no-restricted-syntax
		'no-restricted-syntax': 'off',

		// https://eslint.org/docs/latest/rules/no-return-assign
		'no-return-assign': ['error', 'always'],

		// https://eslint.org/docs/latest/rules/no-script-url
		'no-script-url': 'error',

		// https://eslint.org/docs/latest/rules/no-sequences
		'no-sequences': 'error',

		// https://eslint.org/docs/latest/rules/no-shadow
		'no-shadow': 'error',

		// https://eslint.org/docs/latest/rules/no-shadow-restricted-names
		'no-shadow-restricted-names': ['error', { reportGlobalThis: true }],

		// https://eslint.org/docs/latest/rules/no-ternary
		'no-ternary': 'off',

		// https://eslint.org/docs/latest/rules/no-throw-literal
		'no-throw-literal': 'error',

		// https://eslint.org/docs/latest/rules/no-undef-init
		'no-undef-init': 'error',

		// https://eslint.org/docs/latest/rules/no-undefined
		'no-undefined': 'off',

		// https://eslint.org/docs/latest/rules/no-underscore-dangle
		'no-underscore-dangle': 'off',

		// https://eslint.org/docs/latest/rules/no-unused-expressions
		'no-unneeded-ternary': ['error', { defaultAssignment: false }],

		// https://eslint.org/docs/latest/rules/no-unused-expressions
		'no-unused-expressions': [
			'error',
			{
				enforceForJSX: true,
			},
		],

		// https://eslint.org/docs/latest/rules/no-unused-labels
		'no-unused-labels': 'error',

		// https://eslint.org/docs/latest/rules/no-useless-call
		'no-useless-call': 'error',

		// https://eslint.org/docs/latest/rules/no-useless-catch
		'no-useless-catch': 'error',

		// https://eslint.org/docs/latest/rules/no-useless-constructor
		'no-useless-constructor': 'error',

		// https://eslint.org/docs/latest/rules/no-useless-escape
		'no-useless-escape': 'error',

		// https://eslint.org/docs/latest/rules/no-useless-rename
		'no-useless-rename': [
			'error',
			{
				ignoreDestructuring: false,
				ignoreImport: false,
				ignoreExport: false,
			},
		],

		// https://eslint.org/docs/latest/rules/no-useless-return
		'no-useless-return': 'error',

		// https://eslint.org/docs/latest/rules/no-var
		'no-var': 'error',

		// https://eslint.org/docs/latest/rules/no-void
		'no-void': 'error',

		// https://eslint.org/docs/latest/rules/no-warning-comments
		'no-warning-comments': 'off',

		// https://eslint.org/docs/latest/rules/no-with
		'no-with': 'error',

		// https://eslint.org/docs/latest/rules/object-shorthand
		'object-shorthand': 'error',

		// https://eslint.org/docs/latest/rules/one-var
		'one-var': ['error', 'never'],

		// https://eslint.org/docs/latest/rules/operator-assignment
		'operator-assignment': ['error', 'always'],

		// https://eslint.org/docs/latest/rules/prefer-arrow-callback
		'prefer-arrow-callback': [
			'error',
			{
				allowNamedFunctions: false,
				allowUnboundThis: true,
			},
		],

		// https://eslint.org/docs/latest/rules/prefer-const
		'prefer-const': [
			'error',
			{
				destructuring: 'all',
				ignoreReadBeforeAssign: false,
			},
		],

		// https://eslint.org/docs/latest/rules/prefer-destructuring
		'prefer-destructuring': [
			'error',
			{
				VariableDeclarator: {
					array: false,
					object: true,
				},
				AssignmentExpression: {
					array: false,
					object: true,
				},
			},
			{
				enforceForRenamedProperties: false,
			},
		],

		// https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
		'prefer-exponentiation-operator': 'error',

		// https://eslint.org/docs/latest/rules/prefer-named-capture-group
		'prefer-named-capture-group': 'off',

		// https://eslint.org/docs/latest/rules/prefer-numeric-literals
		'prefer-numeric-literals': 'error',

		// https://eslint.org/docs/latest/rules/prefer-object-has-own
		'prefer-object-has-own': 'error',

		// https://eslint.org/docs/latest/rules/prefer-object-spread
		'prefer-object-spread': 'error',

		// https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
		'prefer-promise-reject-errors': ['error', { allowEmptyReject: false }],

		// https://eslint.org/docs/latest/rules/prefer-regex-literals
		'prefer-regex-literals': [
			'error',
			{
				disallowRedundantWrapping: true,
			},
		],

		// https://eslint.org/docs/latest/rules/prefer-rest-params
		'prefer-rest-params': 'error',

		// https://eslint.org/docs/latest/rules/prefer-spread
		'prefer-spread': 'error',

		// https://eslint.org/docs/latest/rules/prefer-template
		'prefer-template': 'error',

		// https://eslint.org/docs/latest/rules/preserve-caught-error
		'preserve-caught-error': ['error', { requireCatchParameter: true }],

		// https://eslint.org/docs/latest/rules/radix
		radix: ['error', 'as-needed'],

		// https://eslint.org/docs/latest/rules/require-await
		'require-await': 'off',

		// https://eslint.org/docs/latest/rules/require-unicode-regexp
		'require-unicode-regexp': 'off',

		// https://eslint.org/docs/latest/rules/require-yield
		'require-yield': 'error',

		// https://eslint.org/docs/latest/rules/sort-imports
		'sort-imports': 'off', // handled by import/order

		// https://eslint.org/docs/latest/rules/sort-keys
		'sort-keys': [
			'off', // maybe enable this in the future
			'asc',
			{
				caseSensitive: false,
				natural: false,
				minKeys: 2,
				allowLineSeparatedGroups: true,
				ignoreComputedKeys: true,
			},
		],

		// https://eslint.org/docs/latest/rules/sort-vars
		'sort-vars': 'off',

		// https://eslint.org/docs/latest/rules/strict
		strict: ['error', 'never'],

		// https://eslint.org/docs/latest/rules/symbol-description
		'symbol-description': 'error',

		// https://eslint.org/docs/latest/rules/vars-on-top
		'vars-on-top': 'error',

		// https://eslint.org/docs/latest/rules/yoda
		yoda: ['error', 'never'],

		// https://eslint.org/docs/latest/rules/unicode-bom
		'unicode-bom': ['error', 'never'],
	};
};

export default getBaseRules;
