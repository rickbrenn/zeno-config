const getReactPluginRules = () => {
	return {
		// https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
		'@eslint-react/dom-no-dangerously-set-innerhtml': 'warn',

		// https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children
		'@eslint-react/dom-no-dangerously-set-innerhtml-with-children': 'error',

		// https://eslint-react.xyz/docs/rules/dom-no-find-dom-node
		'@eslint-react/dom-no-find-dom-node': 'error',

		// https://eslint-react.xyz/docs/rules/dom-no-flush-sync
		'@eslint-react/dom-no-flush-sync': 'error',

		// https://eslint-react.xyz/docs/rules/dom-no-hydrate
		'@eslint-react/dom-no-hydrate': 'error',

		// https://eslint-react.xyz/docs/rules/dom-no-missing-button-type
		'@eslint-react/dom-no-missing-button-type': 'error',

		// https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox
		'@eslint-react/dom-no-missing-iframe-sandbox': 'off',

		// https://eslint-react.xyz/docs/rules/dom-no-render
		'@eslint-react/dom-no-render': 'error',

		// https://eslint-react.xyz/docs/rules/dom-no-render-return-value
		'@eslint-react/dom-no-render-return-value': 'error',

		// https://eslint-react.xyz/docs/rules/dom-no-script-url
		'@eslint-react/dom-no-script-url': 'error',

		// https://eslint-react.xyz/docs/rules/dom-no-string-style-prop
		'@eslint-react/dom-no-string-style-prop': 'error',

		// https://eslint-react.xyz/docs/rules/dom-no-unknown-property
		'@eslint-react/dom-no-unknown-property': 'error',

		// https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox
		'@eslint-react/dom-no-unsafe-iframe-sandbox': 'warn',

		// not needed unless you support old browsers
		// https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
		'@eslint-react/dom-no-unsafe-target-blank': 'off',

		// https://eslint-react.xyz/docs/rules/dom-no-use-form-state
		'@eslint-react/dom-no-use-form-state': 'error',

		// https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children
		'@eslint-react/dom-no-void-elements-with-children': 'error',

		// https://eslint-react.xyz/docs/rules/error-boundaries
		'@eslint-react/error-boundaries': 'off', // handled by eslint-plugin-react-hooks

		// https://eslint-react.xyz/docs/rules/exhaustive-deps
		'@eslint-react/exhaustive-deps': 'off', // handled by eslint-plugin-react-hooks

		// https://eslint-react.xyz/docs/rules/globals
		'@eslint-react/globals': 'off', // handled by eslint-plugin-react-hooks

		// https://eslint-react.xyz/docs/rules/immutability
		'@eslint-react/immutability': 'off', // handled by eslint-plugin-react-hooks

		// https://eslint-react.xyz/docs/rules/jsx-no-children-prop
		'@eslint-react/jsx-no-children-prop': 'error',

		// https://eslint-react.xyz/docs/rules/jsx-no-children-prop-with-children
		'@eslint-react/jsx-no-children-prop-with-children': 'error',

		// https://eslint-react.xyz/docs/rules/jsx-no-comment-textnodes
		'@eslint-react/jsx-no-comment-textnodes': 'error',

		// https://eslint-react.xyz/docs/rules/jsx-no-key-after-spread
		'@eslint-react/jsx-no-key-after-spread': 'error',

		// https://eslint-react.xyz/docs/rules/jsx-no-leaked-dollar
		'@eslint-react/jsx-no-leaked-dollar': 'warn',

		// https://eslint-react.xyz/docs/rules/jsx-no-leaked-semicolon
		'@eslint-react/jsx-no-leaked-semicolon': 'warn',

		// https://eslint-react.xyz/docs/rules/jsx-no-namespace
		'@eslint-react/jsx-no-namespace': 'error',

		// https://eslint-react.xyz/docs/rules/jsx-no-useless-fragment
		'@eslint-react/jsx-no-useless-fragment': [
			'error',
			{ allowExpressions: true },
		],

		// https://eslint-react.xyz/docs/rules/naming-convention-context-name
		'@eslint-react/naming-convention-context-name': 'warn',

		// https://eslint-react.xyz/docs/rules/naming-convention-id-name
		'@eslint-react/naming-convention-id-name': 'warn',

		// https://eslint-react.xyz/docs/rules/naming-convention-ref-name
		'@eslint-react/naming-convention-ref-name': 'warn',

		// https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
		'@eslint-react/no-access-state-in-setstate': 'error',

		// https://eslint-react.xyz/docs/rules/no-array-index-key
		'@eslint-react/no-array-index-key': 'error',

		// https://eslint-react.xyz/docs/rules/no-children-count
		'@eslint-react/no-children-count': 'warn',

		// https://eslint-react.xyz/docs/rules/no-children-for-each
		'@eslint-react/no-children-for-each': 'warn',

		// https://eslint-react.xyz/docs/rules/no-children-map
		'@eslint-react/no-children-map': 'warn',

		// https://eslint-react.xyz/docs/rules/no-children-only
		'@eslint-react/no-children-only': 'warn',

		// https://eslint-react.xyz/docs/rules/no-children-to-array
		'@eslint-react/no-children-to-array': 'warn',

		// https://eslint-react.xyz/docs/rules/no-class-component
		'@eslint-react/no-class-component': 'off',

		// https://eslint-react.xyz/docs/rules/no-clone-element
		'@eslint-react/no-clone-element': 'warn',

		// https://eslint-react.xyz/docs/rules/no-component-will-mount
		'@eslint-react/no-component-will-mount': 'error',

		// https://eslint-react.xyz/docs/rules/no-component-will-receive-props
		'@eslint-react/no-component-will-receive-props': 'error',

		// https://eslint-react.xyz/docs/rules/no-component-will-update
		'@eslint-react/no-component-will-update': 'error',

		// https://eslint-react.xyz/docs/rules/no-context-provider
		'@eslint-react/no-context-provider': 'warn',

		// https://eslint-react.xyz/docs/rules/no-create-ref
		'@eslint-react/no-create-ref': 'error',

		// https://eslint-react.xyz/docs/rules/no-direct-mutation-state
		'@eslint-react/no-direct-mutation-state': 'error',

		// https://eslint-react.xyz/docs/rules/no-duplicate-key
		'@eslint-react/no-duplicate-key': 'warn',

		// bans forwardRef entirely in favor of ref-as-prop (React 19);
		// kept at warn since consumers may support React <19
		// https://eslint-react.xyz/docs/rules/no-forward-ref
		'@eslint-react/no-forward-ref': 'warn',

		// https://eslint-react.xyz/docs/rules/no-implicit-children
		'@eslint-react/no-implicit-children': 'off', // requires type information

		// https://eslint-react.xyz/docs/rules/no-implicit-key
		'@eslint-react/no-implicit-key': 'off', // requires type information

		// https://eslint-react.xyz/docs/rules/no-implicit-ref
		'@eslint-react/no-implicit-ref': 'off', // requires type information

		// https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
		'@eslint-react/no-leaked-conditional-rendering': 'off', // requires type information

		// https://eslint-react.xyz/docs/rules/no-missing-component-display-name
		'@eslint-react/no-missing-component-display-name': 'off',

		// https://eslint-react.xyz/docs/rules/no-missing-context-display-name
		'@eslint-react/no-missing-context-display-name': 'off',

		// https://eslint-react.xyz/docs/rules/no-missing-key
		'@eslint-react/no-missing-key': 'error',

		// https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
		'@eslint-react/no-misused-capture-owner-stack': 'off', // experimental

		// https://eslint-react.xyz/docs/rules/no-nested-component-definitions
		'@eslint-react/no-nested-component-definitions': 'error',

		// https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
		'@eslint-react/no-nested-lazy-component-declarations': 'error',

		// https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
		'@eslint-react/no-set-state-in-component-did-mount': 'off',

		// https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
		'@eslint-react/no-set-state-in-component-did-update': 'error',

		// https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
		'@eslint-react/no-set-state-in-component-will-update': 'error',

		// https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
		'@eslint-react/no-unnecessary-use-prefix': 'warn',

		// https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
		'@eslint-react/no-unsafe-component-will-mount': 'off',

		// https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
		'@eslint-react/no-unsafe-component-will-receive-props': 'off',

		// https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
		'@eslint-react/no-unsafe-component-will-update': 'off',

		// https://eslint-react.xyz/docs/rules/no-unstable-context-value
		'@eslint-react/no-unstable-context-value': 'error',

		// https://eslint-react.xyz/docs/rules/no-unstable-default-props
		'@eslint-react/no-unstable-default-props': 'error',

		// https://eslint-react.xyz/docs/rules/no-unused-class-component-members
		'@eslint-react/no-unused-class-component-members': 'error',

		// https://eslint-react.xyz/docs/rules/no-unused-props
		'@eslint-react/no-unused-props': 'off', // requires type information

		// https://eslint-react.xyz/docs/rules/no-unused-state
		'@eslint-react/no-unused-state': 'error',

		// https://eslint-react.xyz/docs/rules/no-use-context
		'@eslint-react/no-use-context': 'warn',

		// https://eslint-react.xyz/docs/rules/purity
		'@eslint-react/purity': 'off', // handled by eslint-plugin-react-hooks

		// https://eslint-react.xyz/docs/rules/refs
		'@eslint-react/refs': 'off', // handled by eslint-plugin-react-hooks

		// https://eslint-react.xyz/docs/rules/rsc-function-definition
		'@eslint-react/rsc-function-definition': 'error',

		// https://eslint-react.xyz/docs/rules/rules-of-hooks
		'@eslint-react/rules-of-hooks': 'off', // handled by eslint-plugin-react-hooks

		// https://eslint-react.xyz/docs/rules/set-state-in-effect
		'@eslint-react/set-state-in-effect': 'off', // handled by eslint-plugin-react-hooks

		// https://eslint-react.xyz/docs/rules/set-state-in-render
		'@eslint-react/set-state-in-render': 'off', // handled by eslint-plugin-react-hooks

		// https://eslint-react.xyz/docs/rules/static-components
		'@eslint-react/static-components': 'off', // handled by eslint-plugin-react-hooks

		// https://eslint-react.xyz/docs/rules/unsupported-syntax
		'@eslint-react/unsupported-syntax': 'off', // handled by eslint-plugin-react-hooks

		// https://eslint-react.xyz/docs/rules/use-memo
		'@eslint-react/use-memo': 'off', // handled by eslint-plugin-react-hooks

		// https://eslint-react.xyz/docs/rules/use-state
		'@eslint-react/use-state': 'error',

		// https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener
		'@eslint-react/web-api-no-leaked-event-listener': 'error',

		// https://eslint-react.xyz/docs/rules/web-api-no-leaked-fetch
		'@eslint-react/web-api-no-leaked-fetch': 'warn', // experimental

		// https://eslint-react.xyz/docs/rules/web-api-no-leaked-intersection-observer
		'@eslint-react/web-api-no-leaked-intersection-observer': 'error',

		// https://eslint-react.xyz/docs/rules/web-api-no-leaked-interval
		'@eslint-react/web-api-no-leaked-interval': 'error',

		// https://eslint-react.xyz/docs/rules/web-api-no-leaked-resize-observer
		'@eslint-react/web-api-no-leaked-resize-observer': 'error',

		// https://eslint-react.xyz/docs/rules/web-api-no-leaked-timeout
		'@eslint-react/web-api-no-leaked-timeout': 'error',
	};
};

export default getReactPluginRules;
