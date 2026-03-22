const getReactHooksPluginRules = () => {
	return {
		// https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
	};
};

export default getReactHooksPluginRules;
