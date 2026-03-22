const getReactCompilerPluginRules = (mode) => {
	const level = mode === 'warn' ? 'warn' : 'error';

	return {
		// https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
		'react-hooks/config': level,
		'react-hooks/error-boundaries': level,
		'react-hooks/component-hook-factories': level,
		'react-hooks/gating': level,
		'react-hooks/globals': level,
		'react-hooks/immutability': level,
		'react-hooks/preserve-manual-memoization': level,
		'react-hooks/purity': level,
		'react-hooks/refs': level,
		'react-hooks/set-state-in-effect': 'warn',
		'react-hooks/set-state-in-render': level,
		'react-hooks/static-components': level,
		'react-hooks/unsupported-syntax': 'warn',
		'react-hooks/use-memo': level,
		'react-hooks/incompatible-library': 'warn',
	};
};

export default getReactCompilerPluginRules;
