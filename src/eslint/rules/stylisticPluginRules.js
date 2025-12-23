const getStylisticPluginRules = () => {
	return {
		// https://eslint.style/rules/array-bracket-newline
		'@stylistic/array-bracket-newline': 'off', // conflicts with prettier

		// https://eslint.style/rules/array-bracket-spacing
		'@stylistic/array-bracket-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/array-element-newline
		'@stylistic/array-element-newline': 'off', // conflicts with prettier

		// https://eslint.style/rules/arrow-parens
		'@stylistic/arrow-parens': 'off', // conflicts with prettier

		// https://eslint.style/rules/arrow-spacing
		'@stylistic/arrow-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/block-spacing
		'@stylistic/block-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/brace-style
		'@stylistic/brace-style': 'off', // conflicts with prettier

		// https://eslint.style/rules/comma-dangle
		'@stylistic/comma-dangle': 'off', // conflicts with prettier

		// https://eslint.style/rules/comma-spacing
		'@stylistic/comma-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/comma-style
		'@stylistic/comma-style': 'off', // conflicts with prettier

		// https://eslint.style/rules/computed-property-spacing
		'@stylistic/computed-property-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/curly-newline
		'@stylistic/curly-newline': 'off', // conflicts with prettier

		// https://eslint.style/rules/dot-location
		'@stylistic/dot-location': 'off', // conflicts with prettier

		// https://eslint.style/rules/eol-last
		'@stylistic/eol-last': 'off', // conflicts with prettier

		// https://eslint.style/rules/function-call-argument-newline
		'@stylistic/function-call-argument-newline': 'off', // conflicts with prettier

		// https://eslint.style/rules/function-call-spacing
		'@stylistic/function-call-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/function-paren-newline
		'@stylistic/function-paren-newline': 'off', // conflicts with prettier

		// https://eslint.style/rules/generator-star-spacing
		'@stylistic/generator-star-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/implicit-arrow-linebreak
		'@stylistic/implicit-arrow-linebreak': 'off', // conflicts with prettier

		// https://eslint.style/rules/indent
		'@stylistic/indent': 'off', // conflicts with prettier

		// https://eslint.style/rules/indent-binary-ops
		'@stylistic/indent-binary-ops': 'off', // conflicts with prettier

		// https://eslint.style/rules/jsx-child-element-spacing
		'@stylistic/jsx-child-element-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/jsx-closing-bracket-location
		'@stylistic/jsx-closing-bracket-location': 'off', // conflicts with prettier

		// https://eslint.style/rules/jsx-closing-tag-location
		'@stylistic/jsx-closing-tag-location': 'off', // conflicts with prettier

		// https://eslint.style/rules/jsx-curly-brace-presence
		'@stylistic/jsx-curly-brace-presence': 'off', // conflicts with react/jsx-curly-brace-presence

		// https://eslint.style/rules/jsx-curly-newline
		'@stylistic/jsx-curly-newline': 'off', // conflicts with prettier

		// https://eslint.style/rules/jsx-curly-spacing
		'@stylistic/jsx-curly-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/jsx-equals-spacing
		'@stylistic/jsx-equals-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/jsx-first-prop-new-line
		'@stylistic/jsx-first-prop-new-line': 'off', // conflicts with prettier

		// https://eslint.style/rules/jsx-function-call-newline
		'@stylistic/jsx-function-call-newline': 'warn',

		// https://eslint.style/rules/jsx-indent
		'@stylistic/jsx-indent': 'off', // conflicts with prettier

		// https://eslint.style/rules/jsx-indent-props
		'@stylistic/jsx-indent-props': 'off', // conflicts with prettier

		// https://eslint.style/rules/jsx-max-props-per-line
		'@stylistic/jsx-max-props-per-line': 'off', // conflicts with prettier

		// https://eslint.style/rules/jsx-newline
		'@stylistic/jsx-newline': 'off', // conflicts with prettier

		// https://eslint.style/rules/jsx-one-expression-per-line
		'@stylistic/jsx-one-expression-per-line': 'off', // conflicts with prettier

		// https://eslint.style/rules/jsx-pascal-case
		'@stylistic/jsx-pascal-case': 'off', // conflicts with react/jsx-pascal-case

		// https://eslint.style/rules/jsx-props-no-multi-spaces
		'@stylistic/jsx-props-no-multi-spaces': 'off', // conflicts with prettier

		// https://eslint.style/rules/jsx-quotes
		'@stylistic/jsx-quotes': 'off', // conflicts with prettier

		// https://eslint.style/rules/jsx-self-closing-comp
		'@stylistic/jsx-self-closing-comp': 'off', // conflicts with react/self-closing-comp

		// https://eslint.style/rules/jsx-sort-props
		'@stylistic/jsx-sort-props': 'off', // conflicts with react/jsx-sort-props

		// https://eslint.style/rules/jsx-tag-spacing
		'@stylistic/jsx-tag-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/jsx-wrap-multilines
		'@stylistic/jsx-wrap-multilines': 'off', // conflicts with prettier

		// https://eslint.style/rules/key-spacing
		'@stylistic/key-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/keyword-spacing
		'@stylistic/keyword-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/line-comment-position
		'@stylistic/line-comment-position': 'off',

		// https://eslint.style/rules/linebreak-style
		'@stylistic/linebreak-style': 'off', // conflicts with prettier

		// https://eslint.style/rules/lines-around-comment
		'@stylistic/lines-around-comment': 'off',

		// https://eslint.style/rules/lines-between-class-members
		'@stylistic/lines-between-class-members': [
			'error',
			{
				enforce: [{ blankLine: 'always', prev: 'method', next: '*' }],
			},
			{ exceptAfterSingleLine: false },
		],

		// experimental rule
		// https://eslint.style/rules/list-style
		// '@stylistic/list-style': 'error',

		// https://eslint.style/rules/max-len
		'@stylistic/max-len': 'off',

		// https://eslint.style/rules/max-statements-per-line
		'@stylistic/max-statements-per-line': 'off', // conflicts with prettier

		// https://eslint.style/rules/member-delimiter-style
		'@stylistic/member-delimiter-style': 'off', // conflicts with prettier

		// https://eslint.style/rules/multiline-comment-style
		'@stylistic/multiline-comment-style': 'off',

		// https://eslint.style/rules/multiline-ternary
		'@stylistic/multiline-ternary': 'off', // conflicts with prettier

		// https://eslint.style/rules/new-parens
		'@stylistic/new-parens': 'off', // conflicts with prettier

		// https://eslint.style/rules/newline-per-chained-call
		'@stylistic/newline-per-chained-call': 'off', // conflicts with prettier

		// https://eslint.style/rules/no-confusing-arrow
		'@stylistic/no-confusing-arrow': 'off', // conflicts with prettier

		// https://eslint.style/rules/no-extra-parens
		'@stylistic/no-extra-parens': 'off', // conflicts with prettier

		// https://eslint.style/rules/no-extra-semi
		'@stylistic/no-extra-semi': 'off', // conflicts with prettier

		// https://eslint.style/rules/no-floating-decimal
		'@stylistic/no-floating-decimal': 'off', // conflicts with prettier

		// https://eslint.style/rules/no-mixed-operators
		'@stylistic/no-mixed-operators': [
			'error',
			{
				groups: [
					['%', '**'],
					['%', '+'],
					['%', '-'],
					['%', '*'],
					['%', '/'],
					['/', '*'],
					['&', '|', '<<', '>>', '>>>'],
					['==', '!=', '===', '!=='],
					['&&', '||'],
				],
				allowSamePrecedence: false,
			},
		],

		// https://eslint.style/rules/no-mixed-spaces-and-tabs
		'@stylistic/no-mixed-spaces-and-tabs': 'off', // conflicts with prettier

		// https://eslint.style/rules/no-multi-spaces
		'@stylistic/no-multi-spaces': 'off', // conflicts with prettier

		// https://eslint.style/rules/no-multiple-empty-lines
		'@stylistic/no-multiple-empty-lines': 'off', // conflicts with prettier

		// https://eslint.style/rules/no-tabs
		'@stylistic/no-tabs': 'off',

		// https://eslint.style/rules/no-trailing-spaces
		'@stylistic/no-trailing-spaces': 'off', // conflicts with prettier

		// https://eslint.style/rules/no-whitespace-before-property
		'@stylistic/no-whitespace-before-property': 'off', // conflicts with prettier

		// https://eslint.style/rules/nonblock-statement-body-position
		'@stylistic/nonblock-statement-body-position': 'off', // conflicts with prettier

		// https://eslint.style/rules/object-curly-newline
		'@stylistic/object-curly-newline': 'off', // conflicts with prettier

		// https://eslint.style/rules/object-curly-spacing
		'@stylistic/object-curly-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/object-property-newline
		'@stylistic/object-property-newline': 'off', // conflicts with prettier

		// https://eslint.style/rules/one-var-declaration-per-line
		'@stylistic/one-var-declaration-per-line': 'off', // conflicts with prettier

		// https://eslint.style/rules/operator-linebreak
		'@stylistic/operator-linebreak': 'off', // conflicts with prettier

		// https://eslint.style/rules/padded-blocks
		'@stylistic/padded-blocks': 'off', // conflicts with prettier

		// https://eslint.style/rules/padding-line-between-statements
		'@stylistic/padding-line-between-statements': 'off',

		// https://eslint.style/rules/quote-props
		'@stylistic/quote-props': 'off', // conflicts with prettier

		// https://eslint.style/rules/quotes
		'@stylistic/quotes': 'off', // can be enabled but conflicts with prettier in practice

		// https://eslint.style/rules/rest-spread-spacing
		'@stylistic/rest-spread-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/semi
		'@stylistic/semi': 'off', // conflicts with prettier

		// https://eslint.style/rules/semi-spacing
		'@stylistic/semi-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/semi-style
		'@stylistic/semi-style': 'off', // conflicts with prettier

		// https://eslint.style/rules/space-before-blocks
		'@stylistic/space-before-blocks': 'off', // conflicts with prettier

		// https://eslint.style/rules/space-before-function-paren
		'@stylistic/space-before-function-paren': 'off', // conflicts with prettier

		// https://eslint.style/rules/space-in-parens
		'@stylistic/space-in-parens': 'off', // conflicts with prettier

		// https://eslint.style/rules/space-infix-ops
		'@stylistic/space-infix-ops': 'off', // conflicts with prettier

		// https://eslint.style/rules/space-unary-ops
		'@stylistic/space-unary-ops': 'off', // conflicts with prettier

		// https://eslint.style/rules/spaced-comment
		'@stylistic/spaced-comment': [
			'error',
			'always',
			{
				line: {
					exceptions: ['-', '+'],
					markers: ['=', '!', '/'],
				},
				block: {
					exceptions: ['-', '+'],
					markers: ['=', '!', ':', '::'],
					balanced: true,
				},
			},
		],

		// https://eslint.style/rules/switch-colon-spacing
		'@stylistic/switch-colon-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/template-curly-spacing
		'@stylistic/template-curly-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/template-tag-spacing
		'@stylistic/template-tag-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/type-annotation-spacing
		'@stylistic/type-annotation-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/type-generic-spacing
		'@stylistic/type-generic-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/type-named-tuple-spacing
		'@stylistic/type-named-tuple-spacing': 'off', // conflicts with prettier

		// https://eslint.style/rules/wrap-iife
		'@stylistic/wrap-iife': 'off', // conflicts with prettier

		// https://eslint.style/rules/wrap-regex
		'@stylistic/wrap-regex': 'off', // conflicts with prettier

		// https://eslint.style/rules/yield-star-spacing
		'@stylistic/yield-star-spacing': 'off', // conflicts with prettier
	};
};

export default getStylisticPluginRules;
