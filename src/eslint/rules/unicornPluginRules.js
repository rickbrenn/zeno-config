const getUnicornPluginRules = () => {
	return {
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-dom-traversing.md
		'unicorn/better-dom-traversing': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md
		'unicorn/catch-error-name': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/class-reference-in-static-methods.md
		'unicorn/class-reference-in-static-methods': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/comment-content.md
		'unicorn/comment-content': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-arrow-return-style.md
		'unicorn/consistent-arrow-return-style': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-assert.md
		'unicorn/consistent-assert': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-boolean-name.md
		'unicorn/consistent-boolean-name': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-class-member-order.md
		'unicorn/consistent-class-member-order': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-compound-words.md
		'unicorn/consistent-compound-words': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-conditional-object-spread.md
		'unicorn/consistent-conditional-object-spread': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-date-clone.md
		'unicorn/consistent-date-clone': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md
		'unicorn/consistent-destructuring': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-empty-array-spread.md
		'unicorn/consistent-empty-array-spread': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-existence-index-check.md
		'unicorn/consistent-existence-index-check': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-export-decorator-position.md
		'unicorn/consistent-export-decorator-position': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md
		'unicorn/consistent-function-scoping': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-style.md
		'unicorn/consistent-function-style': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-json-file-read.md
		'unicorn/consistent-json-file-read': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-optional-chaining.md
		'unicorn/consistent-optional-chaining': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-template-literal-escape.md
		'unicorn/consistent-template-literal-escape': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-tuple-labels.md
		'unicorn/consistent-tuple-labels': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/custom-error-definition.md
		'unicorn/custom-error-definition': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/default-export-style.md
		'unicorn/default-export-style': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/dom-node-dataset.md
		'unicorn/dom-node-dataset': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/empty-brace-spaces.md
		'unicorn/empty-brace-spaces': 'off', // conflicts with prettier

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md
		'unicorn/error-message': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/escape-case.md
		'unicorn/escape-case': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md
		'unicorn/expiring-todo-comments': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-length-check.md
		'unicorn/explicit-length-check': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-timer-delay.md
		'unicorn/explicit-timer-delay': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
		'unicorn/filename-case': [
			'off',
			{ cases: { camelCase: true, pascalCase: true } },
		],

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/id-match.md
		'unicorn/id-match': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-style.md
		'unicorn/import-style': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/isolated-functions.md
		'unicorn/isolated-functions': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/iteration-fallback-style.md
		'unicorn/iteration-fallback-style': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/logical-assignment-operators.md
		'unicorn/logical-assignment-operators': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/max-nested-calls.md
		'unicorn/max-nested-calls': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/name-replacements.md
		'unicorn/name-replacements': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/new-for-builtins.md
		'unicorn/new-for-builtins': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md
		'unicorn/no-abusive-eslint-disable': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-accessor-recursion.md
		'unicorn/no-accessor-recursion': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-accidental-bitwise-operator.md
		'unicorn/no-accidental-bitwise-operator': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-anonymous-default-export.md
		'unicorn/no-anonymous-default-export': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-callback-reference.md
		'unicorn/no-array-callback-reference': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-concat-in-loop.md
		'unicorn/no-array-concat-in-loop': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-fill-with-reference-type.md
		'unicorn/no-array-fill-with-reference-type': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-from-fill.md
		'unicorn/no-array-from-fill': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-front-mutation.md
		'unicorn/no-array-front-mutation': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-method-this-argument.md
		'unicorn/no-array-method-this-argument': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md
		'unicorn/no-array-reduce': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reverse.md
		'unicorn/no-array-reverse': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-sort.md
		'unicorn/no-array-sort': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-sort-for-min-max.md
		'unicorn/no-array-sort-for-min-max': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-splice.md
		'unicorn/no-array-splice': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-asterisk-prefix-in-documentation-comments.md
		'unicorn/no-asterisk-prefix-in-documentation-comments': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-async-iterator-callback.md
		'unicorn/no-async-iterator-callback': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-async-promise-finally.md
		'unicorn/no-async-promise-finally': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-expression-member.md
		'unicorn/no-await-expression-member': 'off', // auto fix breaks logic

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-in-promise-methods.md
		'unicorn/no-await-in-promise-methods': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-barrel-files.md
		'unicorn/no-barrel-files': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-blob-to-file.md
		'unicorn/no-blob-to-file': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-boolean-sort-comparator.md
		'unicorn/no-boolean-sort-comparator': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-break-in-nested-loop.md
		'unicorn/no-break-in-nested-loop': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-canvas-to-image.md
		'unicorn/no-canvas-to-image': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-chained-comparison.md
		'unicorn/no-chained-comparison': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-collection-bracket-access.md
		'unicorn/no-collection-bracket-access': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-computed-property-existence-check.md
		'unicorn/no-computed-property-existence-check': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-confusing-array-splice.md
		'unicorn/no-confusing-array-splice': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-confusing-array-with.md
		'unicorn/no-confusing-array-with': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-console-spaces.md
		'unicorn/no-console-spaces': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-constant-zero-expression.md
		'unicorn/no-constant-zero-expression': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-declarations-before-early-exit.md
		'unicorn/no-declarations-before-early-exit': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-deprecated-css-features.md
		'unicorn/no-deprecated-css-features': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-document-cookie.md
		'unicorn/no-document-cookie': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-double-comparison.md
		'unicorn/no-double-comparison': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-duplicate-css-selectors.md
		'unicorn/no-duplicate-css-selectors': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-duplicate-font-family-names.md
		'unicorn/no-duplicate-font-family-names': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-duplicate-if-branches.md
		'unicorn/no-duplicate-if-branches': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-duplicate-logical-operands.md
		'unicorn/no-duplicate-logical-operands': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-duplicate-loops.md
		'unicorn/no-duplicate-loops': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-duplicate-set-values.md
		'unicorn/no-duplicate-set-values': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-empty-file.md
		'unicorn/no-empty-file': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-error-property-assignment.md
		'unicorn/no-error-property-assignment': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-exports-in-scripts.md
		'unicorn/no-exports-in-scripts': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-for-each.md
		'unicorn/no-for-each': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-for-loop.md
		'unicorn/no-for-loop': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-global-object-property-assignment.md
		'unicorn/no-global-object-property-assignment': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-immediate-mutation.md
		'unicorn/no-immediate-mutation': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-impossible-length-comparison.md
		'unicorn/no-impossible-length-comparison': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-incorrect-query-selector.md
		'unicorn/no-incorrect-query-selector': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-incorrect-template-string-interpolation.md
		'unicorn/no-incorrect-template-string-interpolation': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-instanceof-builtins.md
		'unicorn/no-instanceof-builtins': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-argument-count.md
		'unicorn/no-invalid-argument-count': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-character-comparison.md
		'unicorn/no-invalid-character-comparison': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-fetch-options.md
		'unicorn/no-invalid-fetch-options': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-file-input-accept.md
		'unicorn/no-invalid-file-input-accept': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-media-features.md
		'unicorn/no-invalid-media-features': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-remove-event-listener.md
		'unicorn/no-invalid-remove-event-listener': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-well-known-symbol-methods.md
		'unicorn/no-invalid-well-known-symbol-methods': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-keyword-prefix.md
		'unicorn/no-keyword-prefix': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-late-current-target-access.md
		'unicorn/no-late-current-target-access': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-late-event-control.md
		'unicorn/no-late-event-control': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-lonely-if.md
		'unicorn/no-lonely-if': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-loop-iterable-mutation.md
		'unicorn/no-loop-iterable-mutation': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-magic-array-flat-depth.md
		'unicorn/no-magic-array-flat-depth': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-manually-wrapped-comments.md
		'unicorn/no-manually-wrapped-comments': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-mismatched-map-key.md
		'unicorn/no-mismatched-map-key': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-misrefactored-assignment.md
		'unicorn/no-misrefactored-assignment': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-missing-local-resource.md
		'unicorn/no-missing-local-resource': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-multiple-promise-resolver-calls.md
		'unicorn/no-multiple-promise-resolver-calls': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-named-default.md
		'unicorn/no-named-default': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-array-predicate.md
		'unicorn/no-negated-array-predicate': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-comparison.md
		'unicorn/no-negated-comparison': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-condition.md
		'unicorn/no-negated-condition': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negation-in-equality-check.md
		'unicorn/no-negation-in-equality-check': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nested-ternary.md
		'unicorn/no-nested-ternary': 'off', // prefer the base rule

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nesting-with-mixed-specificity.md
		'unicorn/no-nesting-with-mixed-specificity': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-array.md
		'unicorn/no-new-array': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-buffer.md
		'unicorn/no-new-buffer': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-non-function-verb-prefix.md
		'unicorn/no-non-function-verb-prefix': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nonstandard-builtin-properties.md
		'unicorn/no-nonstandard-builtin-properties': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
		'unicorn/no-null': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-object-as-default-parameter.md
		'unicorn/no-object-as-default-parameter': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-object-methods-with-collections.md
		'unicorn/no-object-methods-with-collections': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-optional-chaining-on-undeclared-variable.md
		'unicorn/no-optional-chaining-on-undeclared-variable': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-process-exit.md
		'unicorn/no-process-exit': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-redundant-comparison.md
		'unicorn/no-redundant-comparison': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-redundant-nested-style-rules.md
		'unicorn/no-redundant-nested-style-rules': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-return-array-push.md
		'unicorn/no-return-array-push': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-selector-as-dom-name.md
		'unicorn/no-selector-as-dom-name': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-shorthand-property-overrides.md
		'unicorn/no-shorthand-property-overrides': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-single-promise-in-promise-methods.md
		'unicorn/no-single-promise-in-promise-methods': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-static-only-class.md
		'unicorn/no-static-only-class': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-subtraction-comparison.md
		'unicorn/no-subtraction-comparison': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-thenable.md
		'unicorn/no-thenable': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-this-assignment.md
		'unicorn/no-this-assignment': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-this-outside-of-class.md
		'unicorn/no-this-outside-of-class': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-top-level-assignment-in-function.md
		'unicorn/no-top-level-assignment-in-function': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-top-level-side-effects.md
		'unicorn/no-top-level-side-effects': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-transition-all.md
		'unicorn/no-transition-all': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-typeof-undefined.md
		'unicorn/no-typeof-undefined': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-uncalled-method.md
		'unicorn/no-uncalled-method': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-undeclared-class-members.md
		'unicorn/no-undeclared-class-members': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unknown-css-annotations.md
		'unicorn/no-unknown-css-annotations': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unknown-pseudo-selectors.md
		'unicorn/no-unknown-pseudo-selectors': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-array-flat-depth.md
		'unicorn/no-unnecessary-array-flat-depth': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-array-flat-map.md
		'unicorn/no-unnecessary-array-flat-map': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-array-splice-count.md
		'unicorn/no-unnecessary-array-splice-count': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-await.md
		'unicorn/no-unnecessary-await': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-boolean-comparison.md
		'unicorn/no-unnecessary-boolean-comparison': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-fetch-options.md
		'unicorn/no-unnecessary-fetch-options': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-global-this.md
		'unicorn/no-unnecessary-global-this': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-nested-ternary.md
		'unicorn/no-unnecessary-nested-ternary': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-polyfills.md
		'unicorn/no-unnecessary-polyfills': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-slice-end.md
		'unicorn/no-unnecessary-slice-end': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-splice.md
		'unicorn/no-unnecessary-splice': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-string-trim.md
		'unicorn/no-unnecessary-string-trim': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-array-destructuring.md
		'unicorn/no-unreadable-array-destructuring': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-for-of-expression.md
		'unicorn/no-unreadable-for-of-expression': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-iife.md
		'unicorn/no-unreadable-iife': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-new-expression.md
		'unicorn/no-unreadable-new-expression': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-object-destructuring.md
		'unicorn/no-unreadable-object-destructuring': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-buffer-conversion.md
		'unicorn/no-unsafe-buffer-conversion': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-dom-html.md
		'unicorn/no-unsafe-dom-html': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-promise-all-settled-values.md
		'unicorn/no-unsafe-promise-all-settled-values': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-property-key.md
		'unicorn/no-unsafe-property-key': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-sqlite-interpolation.md
		'unicorn/no-unsafe-sqlite-interpolation': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-string-replacement.md
		'unicorn/no-unsafe-string-replacement': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unscoped-css-nesting-selector.md
		'unicorn/no-unscoped-css-nesting-selector': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unused-builtin-method-return.md
		'unicorn/no-unused-builtin-method-return': 'off', // successor of no-unused-array-method-return, which was also off

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unused-iterator-helper.md
		'unicorn/no-unused-iterator-helper': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unused-properties.md
		'unicorn/no-unused-properties': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-boolean-cast.md
		'unicorn/no-useless-boolean-cast': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-coercion.md
		'unicorn/no-useless-coercion': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-collection-argument.md
		'unicorn/no-useless-collection-argument': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-compound-assignment.md
		'unicorn/no-useless-compound-assignment': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-concat.md
		'unicorn/no-useless-concat': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-continue.md
		'unicorn/no-useless-continue': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-delete-check.md
		'unicorn/no-useless-delete-check': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-else.md
		'unicorn/no-useless-else': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-error-capture-stack-trace.md
		'unicorn/no-useless-error-capture-stack-trace': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md
		'unicorn/no-useless-fallback-in-spread': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-iterator-to-array.md
		'unicorn/no-useless-iterator-to-array': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-length-check.md
		'unicorn/no-useless-length-check': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-logical-operand.md
		'unicorn/no-useless-logical-operand': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-override.md
		'unicorn/no-useless-override': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-promise-resolve-reject.md
		'unicorn/no-useless-promise-resolve-reject': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-re-export.md
		'unicorn/no-useless-re-export': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-recursion.md
		'unicorn/no-useless-recursion': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-set-construction.md
		'unicorn/no-useless-set-construction': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md
		'unicorn/no-useless-spread': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-switch-case.md
		'unicorn/no-useless-switch-case': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-template-literals.md
		'unicorn/no-useless-template-literals': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md
		'unicorn/no-useless-undefined': 'off', // this conflicts with requiring default props in React

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-using-resource-escape.md
		'unicorn/no-using-resource-escape': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-xor-as-exponentiation.md
		'unicorn/no-xor-as-exponentiation': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-zero-fractions.md
		'unicorn/no-zero-fractions': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/number-literal-case.md
		'unicorn/number-literal-case': 'off', // conflicts with prettier

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md
		'unicorn/numeric-separators-style': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/operator-assignment.md
		'unicorn/operator-assignment': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-abort-signal-any.md
		'unicorn/prefer-abort-signal-any': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-abort-signal-timeout.md
		'unicorn/prefer-abort-signal-timeout': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-add-event-listener.md
		'unicorn/prefer-add-event-listener': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-add-event-listener-options.md
		'unicorn/prefer-add-event-listener-options': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-aggregate-error.md
		'unicorn/prefer-aggregate-error': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-find.md
		'unicorn/prefer-array-find': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat.md
		'unicorn/prefer-array-flat': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat-map.md
		'unicorn/prefer-array-flat-map': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-from-async.md
		'unicorn/prefer-array-from-async': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-from-map.md
		'unicorn/prefer-array-from-map': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-from-range.md
		'unicorn/prefer-array-from-range': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-index-of.md
		'unicorn/prefer-array-index-of': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-iterable-methods.md
		'unicorn/prefer-array-iterable-methods': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-last-methods.md
		'unicorn/prefer-array-last-methods': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-slice.md
		'unicorn/prefer-array-slice': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-some.md
		'unicorn/prefer-array-some': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-at.md
		'unicorn/prefer-at': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-await.md
		'unicorn/prefer-await': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-bigint-literals.md
		'unicorn/prefer-bigint-literals': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-blob-reading-methods.md
		'unicorn/prefer-blob-reading-methods': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-block-statement-over-iife.md
		'unicorn/prefer-block-statement-over-iife': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-boolean-return.md
		'unicorn/prefer-boolean-return': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-class-fields.md
		'unicorn/prefer-class-fields': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-classlist-toggle.md
		'unicorn/prefer-classlist-toggle': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-code-point.md
		'unicorn/prefer-code-point': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-combined-guards.md
		'unicorn/prefer-combined-guards': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-continue.md
		'unicorn/prefer-continue': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-date-now.md
		'unicorn/prefer-date-now': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-default-parameters.md
		'unicorn/prefer-default-parameters': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-direct-iteration.md
		'unicorn/prefer-direct-iteration': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dispose.md
		'unicorn/prefer-dispose': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-append.md
		'unicorn/prefer-dom-node-append': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-html-methods.md
		'unicorn/prefer-dom-node-html-methods': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-remove.md
		'unicorn/prefer-dom-node-remove': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-replace-children.md
		'unicorn/prefer-dom-node-replace-children': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-text-content.md
		'unicorn/prefer-dom-node-text-content': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-early-return.md
		'unicorn/prefer-early-return': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-else-if.md
		'unicorn/prefer-else-if': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-error-is-error.md
		'unicorn/prefer-error-is-error': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-event-target.md
		'unicorn/prefer-event-target': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-explicit-viewport-units.md
		'unicorn/prefer-explicit-viewport-units': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-export-from.md
		'unicorn/prefer-export-from': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-flat-math-min-max.md
		'unicorn/prefer-flat-math-min-max': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-get-or-insert-computed.md
		'unicorn/prefer-get-or-insert-computed': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-global-number-constants.md
		'unicorn/prefer-global-number-constants': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-global-this.md
		'unicorn/prefer-global-this': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-group-by.md
		'unicorn/prefer-group-by': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-has-check.md
		'unicorn/prefer-has-check': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-hoisting-branch-code.md
		'unicorn/prefer-hoisting-branch-code': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-https.md
		'unicorn/prefer-https': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-identifier-import-export-specifiers.md
		'unicorn/prefer-identifier-import-export-specifiers': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-import-meta-properties.md
		'unicorn/prefer-import-meta-properties': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-includes.md
		'unicorn/prefer-includes': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-includes-over-repeated-comparisons.md
		'unicorn/prefer-includes-over-repeated-comparisons': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-iterable-in-constructor.md
		'unicorn/prefer-iterable-in-constructor': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-iterator-concat.md
		'unicorn/prefer-iterator-concat': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-iterator-helpers.md
		'unicorn/prefer-iterator-helpers': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-iterator-to-array.md
		'unicorn/prefer-iterator-to-array': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-iterator-to-array-at-end.md
		'unicorn/prefer-iterator-to-array-at-end': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-iterator-zip.md
		'unicorn/prefer-iterator-zip': 'off', // Iterator.zip() is not yet widely available

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-json-import.md
		'unicorn/prefer-json-import': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-keyboard-event-key.md
		'unicorn/prefer-keyboard-event-key': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-location-assign.md
		'unicorn/prefer-location-assign': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-logical-operator-over-ternary.md
		'unicorn/prefer-logical-operator-over-ternary': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-map-from-entries.md
		'unicorn/prefer-map-from-entries': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-abs.md
		'unicorn/prefer-math-abs': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-constants.md
		'unicorn/prefer-math-constants': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-min-max.md
		'unicorn/prefer-math-min-max': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-trunc.md
		'unicorn/prefer-math-trunc': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-media-feature-range-syntax.md
		'unicorn/prefer-media-feature-range-syntax': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-minimal-ternary.md
		'unicorn/prefer-minimal-ternary': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-dom-apis.md
		'unicorn/prefer-modern-dom-apis': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-math-apis.md
		'unicorn/prefer-modern-math-apis': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
		'unicorn/prefer-module': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-native-coercion-functions.md
		'unicorn/prefer-native-coercion-functions': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-negative-index.md
		'unicorn/prefer-negative-index': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
		'unicorn/prefer-node-protocol': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-coercion.md
		'unicorn/prefer-number-coercion': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-is-safe-integer.md
		'unicorn/prefer-number-is-safe-integer': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-properties.md
		'unicorn/prefer-number-properties': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-define-properties.md
		'unicorn/prefer-object-define-properties': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-destructuring-defaults.md
		'unicorn/prefer-object-destructuring-defaults': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-from-entries.md
		'unicorn/prefer-object-from-entries': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-iterable-methods.md
		'unicorn/prefer-object-iterable-methods': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-observer-apis.md
		'unicorn/prefer-observer-apis': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-optional-catch-binding.md
		'unicorn/prefer-optional-catch-binding': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-path2d.md
		'unicorn/prefer-path2d': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-private-class-fields.md
		'unicorn/prefer-private-class-fields': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-promise-try.md
		'unicorn/prefer-promise-try': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-promise-with-resolvers.md
		'unicorn/prefer-promise-with-resolvers': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-prototype-methods.md
		'unicorn/prefer-prototype-methods': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-query-selector.md
		'unicorn/prefer-query-selector': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-queue-microtask.md
		'unicorn/prefer-queue-microtask': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-reflect-apply.md
		'unicorn/prefer-reflect-apply': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-escape.md
		'unicorn/prefer-regexp-escape': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-test.md
		'unicorn/prefer-regexp-test': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-response-static-json.md
		'unicorn/prefer-response-static-json': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-scoped-selector.md
		'unicorn/prefer-scoped-selector': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-has.md
		'unicorn/prefer-set-has': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-methods.md
		'unicorn/prefer-set-methods': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-size.md
		'unicorn/prefer-set-size': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-short-arrow-method.md
		'unicorn/prefer-short-arrow-method': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-simple-condition-first.md
		'unicorn/prefer-simple-condition-first': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-simple-sort-comparator.md
		'unicorn/prefer-simple-sort-comparator': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-simplified-conditions.md
		'unicorn/prefer-simplified-conditions': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-single-array-predicate.md
		'unicorn/prefer-single-array-predicate': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-single-call.md
		'unicorn/prefer-single-call': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-single-object-destructuring.md
		'unicorn/prefer-single-object-destructuring': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-single-replace.md
		'unicorn/prefer-single-replace': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-smaller-scope.md
		'unicorn/prefer-smaller-scope': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-split-limit.md
		'unicorn/prefer-split-limit': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md
		'unicorn/prefer-spread': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-match-all.md
		'unicorn/prefer-string-match-all': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-pad-start-end.md
		'unicorn/prefer-string-pad-start-end': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-raw.md
		'unicorn/prefer-string-raw': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-repeat.md
		'unicorn/prefer-string-repeat': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md
		'unicorn/prefer-string-replace-all': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-slice.md
		'unicorn/prefer-string-slice': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-starts-ends-with.md
		'unicorn/prefer-string-starts-ends-with': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-trim-start-end.md
		'unicorn/prefer-string-trim-start-end': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-structured-clone.md
		'unicorn/prefer-structured-clone': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-switch.md
		'unicorn/prefer-switch': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-temporal.md
		'unicorn/prefer-temporal': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-temporal-conversion.md
		'unicorn/prefer-temporal-conversion': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md
		'unicorn/prefer-ternary': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-then-catch.md
		'unicorn/prefer-then-catch': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-toggle-attribute.md
		'unicorn/prefer-toggle-attribute': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-top-level-await.md
		'unicorn/prefer-top-level-await': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-type-error.md
		'unicorn/prefer-type-error': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-type-literal-last.md
		'unicorn/prefer-type-literal-last': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-uint8array-base64.md
		'unicorn/prefer-uint8array-base64': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-uint8array-hex.md
		'unicorn/prefer-uint8array-hex': 'off', // Uint8Array hex methods are not yet widely available

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-unary-minus.md
		'unicorn/prefer-unary-minus': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-unicode-code-point-escapes.md
		'unicorn/prefer-unicode-code-point-escapes': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-url-can-parse.md
		'unicorn/prefer-url-can-parse': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-url-href.md
		'unicorn/prefer-url-href': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-url-search-parameters.md
		'unicorn/prefer-url-search-parameters': 'warn',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-while-loop-condition.md
		'unicorn/prefer-while-loop-condition': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/relative-url-style.md
		'unicorn/relative-url-style': ['error', 'always'],

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-join-separator.md
		'unicorn/require-array-join-separator': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-sort-compare.md
		'unicorn/require-array-sort-compare': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-css-escape.md
		'unicorn/require-css-escape': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-frontmatter-fields.md
		'unicorn/require-frontmatter-fields': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-module-attributes.md
		'unicorn/require-module-attributes': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-module-specifiers.md
		'unicorn/require-module-specifiers': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-number-to-fixed-digits-argument.md
		'unicorn/require-number-to-fixed-digits-argument': 'error',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-passive-events.md
		'unicorn/require-passive-events': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-post-message-target-origin.md
		'unicorn/require-post-message-target-origin': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-proxy-trap-boolean-return.md
		'unicorn/require-proxy-trap-boolean-return': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/single-line-block-comment-style.md
		'unicorn/single-line-block-comment-style': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/string-content.md
		'unicorn/string-content': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-braces.md
		'unicorn/switch-case-braces': 'off', // no-empty already takes care of this

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-break-position.md
		'unicorn/switch-case-break-position': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/template-indent.md
		'unicorn/template-indent': 'off', // conflicts with prettier

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/text-encoding-identifier-case.md
		'unicorn/text-encoding-identifier-case': 'off',

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/throw-new-error.md
		'unicorn/throw-new-error': 'error', // handled by unicorn/new-for-builtins

		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/try-complexity.md
		'unicorn/try-complexity': 'off',
	};
};

export default getUnicornPluginRules;
