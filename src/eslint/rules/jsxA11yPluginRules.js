const getJsxA11yPluginRules = () => {
	return {
		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/alt-text.md
		'jsx-a11y-x/alt-text': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/anchor-ambiguous-text.md
		'jsx-a11y-x/anchor-ambiguous-text': 'off',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/anchor-has-content.md
		'jsx-a11y-x/anchor-has-content': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/anchor-is-valid.md
		'jsx-a11y-x/anchor-is-valid': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/aria-activedescendant-has-tabindex.md
		'jsx-a11y-x/aria-activedescendant-has-tabindex': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/aria-props.md
		'jsx-a11y-x/aria-props': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/aria-proptypes.md
		'jsx-a11y-x/aria-proptypes': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/aria-role.md
		'jsx-a11y-x/aria-role': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/aria-unsupported-elements.md
		'jsx-a11y-x/aria-unsupported-elements': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/autocomplete-valid.md
		'jsx-a11y-x/autocomplete-valid': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/click-events-have-key-events.md
		'jsx-a11y-x/click-events-have-key-events': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/control-has-associated-label.md
		'jsx-a11y-x/control-has-associated-label': 'off',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/heading-has-content.md
		'jsx-a11y-x/heading-has-content': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/html-has-lang.md
		'jsx-a11y-x/html-has-lang': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/iframe-has-title.md
		'jsx-a11y-x/iframe-has-title': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/img-redundant-alt.md
		'jsx-a11y-x/img-redundant-alt': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/interactive-supports-focus.md
		'jsx-a11y-x/interactive-supports-focus': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/label-has-associated-control.md
		'jsx-a11y-x/label-has-associated-control': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/lang.md
		'jsx-a11y-x/lang': 'off',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/media-has-caption.md
		'jsx-a11y-x/media-has-caption': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/mouse-events-have-key-events.md
		'jsx-a11y-x/mouse-events-have-key-events': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-access-key.md
		'jsx-a11y-x/no-access-key': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-aria-hidden-on-focusable.md
		'jsx-a11y-x/no-aria-hidden-on-focusable': 'off',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-autofocus.md
		'jsx-a11y-x/no-autofocus': 'off',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-distracting-elements.md
		'jsx-a11y-x/no-distracting-elements': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-interactive-element-to-noninteractive-role.md
		'jsx-a11y-x/no-interactive-element-to-noninteractive-role': [
			'error',
			{
				tr: ['none', 'presentation'],
				canvas: ['img'],
			},
		],

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-noninteractive-element-interactions.md
		'jsx-a11y-x/no-noninteractive-element-interactions': [
			'error',
			{
				handlers: [
					'onClick',
					'onError',
					'onLoad',
					'onMouseDown',
					'onMouseUp',
					'onKeyPress',
					'onKeyDown',
					'onKeyUp',
				],
				alert: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
				body: ['onError', 'onLoad'],
				dialog: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
				iframe: ['onError', 'onLoad'],
				img: ['onError', 'onLoad'],
			},
		],

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md
		'jsx-a11y-x/no-noninteractive-element-to-interactive-role': [
			'error',
			{
				ul: [
					'listbox',
					'menu',
					'menubar',
					'radiogroup',
					'tablist',
					'tree',
					'treegrid',
				],
				ol: [
					'listbox',
					'menu',
					'menubar',
					'radiogroup',
					'tablist',
					'tree',
					'treegrid',
				],
				li: [
					'menuitem',
					'menuitemradio',
					'menuitemcheckbox',
					'option',
					'row',
					'tab',
					'treeitem',
				],
				table: ['grid'],
				td: ['gridcell'],
				fieldset: ['radiogroup', 'presentation'],
			},
		],

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-noninteractive-tabindex.md
		'jsx-a11y-x/no-noninteractive-tabindex': [
			'error',
			{
				tags: [],
				roles: ['tabpanel'],
				allowExpressionValues: true,
			},
		],

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-redundant-roles.md
		'jsx-a11y-x/no-redundant-roles': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-static-element-interactions.md
		'jsx-a11y-x/no-static-element-interactions': [
			'error',
			{
				allowExpressionValues: true,
				handlers: [
					'onClick',
					'onMouseDown',
					'onMouseUp',
					'onKeyPress',
					'onKeyDown',
					'onKeyUp',
				],
			},
		],

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/prefer-tag-over-role.md
		'jsx-a11y-x/prefer-tag-over-role': 'off',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/role-has-required-aria-props.md
		'jsx-a11y-x/role-has-required-aria-props': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/role-supports-aria-props.md
		'jsx-a11y-x/role-supports-aria-props': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/scope.md
		'jsx-a11y-x/scope': 'error',

		// https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/tabindex-no-positive.md
		'jsx-a11y-x/tabindex-no-positive': 'error',
	};
};

export default getJsxA11yPluginRules;
