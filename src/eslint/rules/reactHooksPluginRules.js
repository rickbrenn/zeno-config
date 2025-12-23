const getReactHooksPluginRules = () => {
	return {
		// https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
		// Core hooks rules
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',

		// React Compiler rules
		'react-hooks/config': 'error',
		'react-hooks/error-boundaries': 'error',
		'react-hooks/component-hook-factories': 'error',
		'react-hooks/gating': 'error',
		'react-hooks/globals': 'error',
		'react-hooks/immutability': 'error',
		'react-hooks/preserve-manual-memoization': 'error',
		'react-hooks/purity': 'error',
		'react-hooks/refs': 'error',
		'react-hooks/set-state-in-effect': 'warn',
		'react-hooks/set-state-in-render': 'error',
		'react-hooks/static-components': 'error',
		'react-hooks/unsupported-syntax': 'warn',
		'react-hooks/use-memo': 'error',
		'react-hooks/incompatible-library': 'warn',
	};
};

export default getReactHooksPluginRules;
