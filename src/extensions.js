// Base extension groups
const jsExtensions = ['.js', '.mjs', '.cjs'];
const jsxExtensions = ['.jsx', '.mjsx', '.cjsx'];
const tsExtensions = ['.ts', '.cts', '.mts'];
const tsxExtensions = ['.tsx', '.mtsx', '.ctsx'];

// Combined extension arrays
const allExtensions = [
	...jsExtensions,
	...jsxExtensions,
	...tsExtensions,
	...tsxExtensions,
];
const nodeExtensions = [...jsExtensions, ...tsExtensions];
const reactJsExtensions = jsxExtensions;
const reactExtensions = [...jsxExtensions, ...tsxExtensions];
const reactJsExtensionsExtended = [...jsExtensions, ...jsxExtensions];
const reactExtensionsExtended = [
	...jsExtensions,
	...jsxExtensions,
	...tsxExtensions,
];
const typescriptExtensions = [...tsExtensions, ...tsxExtensions];

// String versions for use in glob patterns
const allExtensionsString = allExtensions.join(',');
const nodeExtensionsString = nodeExtensions.join(',');
const reactJsExtensionsString = reactJsExtensions.join(',');
const reactExtensionsString = reactExtensions.join(',');
const reactJsExtensionsExtendedString = reactJsExtensionsExtended.join(',');
const reactExtensionsExtendedString = reactExtensionsExtended.join(',');
const typescriptExtensionsString = typescriptExtensions.join(',');

export {
	allExtensions,
	allExtensionsString,
	nodeExtensions,
	nodeExtensionsString,
	reactJsExtensions,
	reactJsExtensionsString,
	reactJsExtensionsExtended,
	reactJsExtensionsExtendedString,
	reactExtensions,
	reactExtensionsString,
	reactExtensionsExtended,
	reactExtensionsExtendedString,
	typescriptExtensions,
	typescriptExtensionsString,
};
