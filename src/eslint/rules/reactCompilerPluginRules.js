/**
 * React Compiler rules from eslint-plugin-react-hooks.
 * https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
 *
 * @param {boolean|'warn'} [mode=false]
 * @returns {import('eslint').Linter.RulesRecord}
 */
const getReactCompilerPluginRules = (mode = false) => {
	let level = 'off';
	// advisory rules that stay at 'warn' even when the rest are errors
	let soft = 'off';

	if (mode) {
		level = mode === 'warn' ? 'warn' : 'error';
		soft = 'warn';
	}

	return {
		'react-hooks/config': level,
		'react-hooks/error-boundaries': level,
		'react-hooks/component-hook-factories': level,
		'react-hooks/gating': level,
		'react-hooks/globals': level,
		'react-hooks/immutability': level,
		'react-hooks/preserve-manual-memoization': level,
		'react-hooks/purity': level,
		'react-hooks/refs': level,
		'react-hooks/set-state-in-effect': soft,
		'react-hooks/set-state-in-render': level,
		'react-hooks/static-components': level,
		'react-hooks/unsupported-syntax': soft,
		'react-hooks/use-memo': level,
		'react-hooks/incompatible-library': soft,
	};
};

export default getReactCompilerPluginRules;
