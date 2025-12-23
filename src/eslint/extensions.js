const allExtensions = [
	'.js',
	'.mjs',
	'.cjs',
	'.jsx',
	'.mjsx',
	'.cjsx',
	'.ts',
	'.cts',
	'.mts',
	'.tsx',
	'.mtsx',
	'.ctsx',
];

const allExtensionsString = allExtensions.join(',');

const nodeExtensions = ['.js', '.mjs', '.cjs', '.ts', '.cts', '.mts'];

const nodeExtensionsString = nodeExtensions.join(',');

const reactJsExtensions = ['.jsx', '.mjsx', '.cjsx'];

const reactJsExtensionsString = reactJsExtensions.join(',');

const reactExtensions = [...reactJsExtensions, '.tsx', '.mtsx', '.ctsx'];

const reactExtensionsString = reactExtensions.join(',');

const reactJsExtensionsExtended = ['.js', '.mjs', '.cjs', ...reactJsExtensions];

const reactJsExtensionsExtendedString = reactJsExtensionsExtended.join(',');

const reactExtensionsExtended = ['.js', '.mjs', '.cjs', ...reactExtensions];

const reactExtensionsExtendedString = reactExtensionsExtended.join(',');

const typescriptExtensions = ['.ts', '.cts', '.mts', '.tsx', '.mtsx', '.ctsx'];

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
