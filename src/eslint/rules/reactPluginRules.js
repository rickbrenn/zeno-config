import { reactExtensions } from '../../extensions.js';

const getReactPluginRules = (options = {}) => {
	return {
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
		'react/boolean-prop-naming': [
			'off',
			{
				propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
				rule: '^(is|has|show|can|allow|should)[A-Z]([A-Za-z0-9]?)+',
				validateNested: true,
				message:
					'Boolean prop ({{ propName }}) should start with "is", "has", "show", "can", "allow", or "should"',
			},
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
		'react/button-has-type': [
			'error',
			{
				button: true,
				submit: true,
				reset: false,
			},
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/checked-requires-onchange-or-readonly.md
		'react/checked-requires-onchange-or-readonly': [
			'error',
			{
				ignoreMissingProperties: false,
				ignoreExclusiveCheckedAttribute: false,
			},
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
		'react/default-props-match-prop-types': [
			'error',
			{ allowRequiredDefaults: false },
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
		'react/destructuring-assignment': [
			'error',
			'always',
			{ destructureInSignature: 'always' },
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
		'react/display-name': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
		'react/forbid-component-props': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
		'react/forbid-dom-props': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
		'react/forbid-elements': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
		'react/forbid-foreign-prop-types': 'warn',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
		'react/forbid-prop-types': [
			'warn',
			{
				forbid: ['any', 'array', 'object'],
				checkContextTypes: true,
				checkChildContextTypes: true,
			},
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forward-ref-uses-ref.md
		'react/forward-ref-uses-ref': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'function-declaration',
				unnamedComponents: 'arrow-function',
			},
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
		'react/hook-use-state': ['error', { allowDestructuredState: false }],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
		'react/iframe-missing-sandbox': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
		'react/jsx-boolean-value': ['error', 'never'],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
		'react/jsx-child-element-spacing': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
		'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
		'react/jsx-closing-tag-location': ['error', 'line-aligned'],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
		'react/jsx-curly-brace-presence': [
			'error',
			{
				props: 'never',
				children: 'never',
				propElementValues: 'always',
			},
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
		'react/jsx-curly-newline': [
			'error',
			{
				multiline: 'consistent',
				singleline: 'consistent',
			},
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
		'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
		'react/jsx-equals-spacing': ['error', 'never'],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: options.extensions || reactExtensions,
			},
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
		'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
		'react/jsx-fragments': ['error', 'syntax'],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
		'react/jsx-handler-names': [
			'off',
			{
				eventHandlerPrefix: 'handle',
				eventHandlerPropPrefix: 'on',
				checkLocalVariables: false,
				checkInlineFunction: false,
				ignoreComponentNames: [],
			},
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
		'react/jsx-indent': [
			'error',
			'tab',
			{ checkAttributes: false, indentLogicalExpressions: false },
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
		'react/jsx-indent-props': ['error', 'tab'],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
		'react/jsx-key': [
			'error',
			{
				checkFragmentShorthand: true,
				checkKeyMustBeforeSpread: false,
				warnOnDuplicates: true,
			},
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
		'react/jsx-max-depth': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
		'react/jsx-max-props-per-line': [
			'error',
			{ maximum: 1, when: 'multiline' },
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
		'react/jsx-newline': [
			'off',
			{ prevent: false, allowMultilines: false },
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
		'react/jsx-no-bind': [
			'error',
			{
				ignoreRefs: true,
				allowArrowFunctions: true,
				allowFunctions: false,
				allowBind: false,
				ignoreDOMComponents: true,
			},
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
		'react/jsx-no-comment-textnodes': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
		'react/jsx-no-constructed-context-values': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
		'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
		'react/jsx-no-leaked-render': [
			'off',
			{ validStrategies: ['ternary', 'coerce'] },
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
		'react/jsx-no-literals': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
		'react/jsx-no-script-url': ['error', { includeFromSettings: true }],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
		// not needed unless you support old browsers
		'react/jsx-no-target-blank': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
		'react/jsx-no-undef': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
		'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
		'react/jsx-one-expression-per-line': [
			'error',
			{ allow: 'single-child' },
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
		'react/jsx-pascal-case': [
			'error',
			{
				allowAllCaps: false,
				allowLeadingUnderscore: false,
				allowNamespace: true,
			},
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
		'react/jsx-props-no-multi-spaces': 'off', // conflicts with prettier

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spread-multi.md
		'react/jsx-props-no-spread-multi': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
		'react/jsx-props-no-spreading': [
			'warn',
			{
				html: 'enforce',
				custom: 'ignore',
				explicitSpread: 'ignore',
				exceptions: [],
			},
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
		'react/jsx-sort-props': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
		'react/jsx-tag-spacing': [
			'error',
			{
				closingSlash: 'never',
				beforeSelfClosing: 'always',
				afterOpening: 'never',
				beforeClosing: 'never',
			},
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
		'react/jsx-uses-react': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
		'react/jsx-uses-vars': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
		'react/jsx-wrap-multilines': [
			'error',
			{
				declaration: 'parens-new-line',
				assignment: 'parens-new-line',
				return: 'parens-new-line',
				arrow: 'parens-new-line',
				condition: 'parens-new-line',
				logical: 'parens-new-line',
				prop: 'parens-new-line',
			},
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
		'react/no-access-state-in-setstate': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
		'react/no-adjacent-inline-elements': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
		'react/no-array-index-key': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
		'react/no-arrow-function-lifecycle': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
		'react/no-children-prop': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
		'react/no-danger': 'warn',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
		'react/no-danger-with-children': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
		'react/no-deprecated': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
		'react/no-did-mount-set-state': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
		'react/no-did-update-set-state': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
		'react/no-direct-mutation-state': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
		'react/no-find-dom-node': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
		'react/no-invalid-html-attribute': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
		'react/no-is-mounted': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
		'react/no-multi-comp': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
		'react/no-namespace': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md
		'react/no-object-type-as-default-prop': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
		'react/no-redundant-should-component-update': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
		'react/no-render-return-value': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
		'react/no-set-state': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
		'react/no-string-refs': ['error', { noTemplateLiterals: true }],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
		'react/no-this-in-sfc': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
		'react/no-typos': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
		'react/no-unescaped-entities': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
		'react/no-unknown-property': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
		'react/no-unsafe': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
		'react/no-unstable-nested-components': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
		'react/no-unused-class-component-methods': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
		'react/no-unused-prop-types': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
		'react/no-unused-state': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
		'react/no-will-update-set-state': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
		'react/prefer-es6-class': ['error', 'always'],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
		'react/prefer-exact-props': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
		'react/prefer-read-only-props': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
		'react/prefer-stateless-function': [
			'error',
			{ ignorePureComponents: true },
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
		'react/prop-types': [
			'error',
			{
				ignore: [],
				customValidators: [],
				skipUndeclared: false,
			},
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
		'react/react-in-jsx-scope': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
		'react/require-default-props': [
			'error',
			{
				forbidDefaultForRequired: true,
				classes: 'defaultProps',
				functions: 'defaultArguments',
			},
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
		'react/require-optimization': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
		'react/require-render-return': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
		'react/self-closing-comp': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
		'react/sort-comp': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-default-props.md
		'react/sort-default-props': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
		'react/sort-prop-types': [
			'off',
			{
				callbacksLast: false,
				ignoreCase: false,
				requiredFirst: false,
				sortShapeProp: false,
				noSortAlphabetically: false,
				checkTypes: true,
			},
		],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
		'react/state-in-constructor': ['off', 'always'],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
		'react/static-property-placement': 'off',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
		'react/style-prop-object': 'error',

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
		'react/void-dom-elements-no-children': 'error',
	};
};

export default getReactPluginRules;
