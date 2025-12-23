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

const reactExtensions = ['.jsx', '.mjsx', '.cjsx', '.tsx', '.mtsx', '.ctsx'];

const reactExtensionsString = reactExtensions.join(',');

const reactExtensionsExtended = [
	'.js',
	'.mjs',
	'.cjs',
	'.jsx',
	'.mjsx',
	'.cjsx',
	'.tsx',
	'.mtsx',
	'.ctsx',
];

const reactExtensionsExtendedString = reactExtensionsExtended.join(',');

const typescriptExtensions = ['.ts', '.cts', '.mts', '.tsx', '.mtsx', '.ctsx'];

const typescriptExtensionsString = typescriptExtensions.join(',');

export {
	allExtensions,
	allExtensionsString,
	// nodeExtensions,
	nodeExtensionsString,
	reactExtensions,
	reactExtensionsString,
	reactExtensionsExtended,
	reactExtensionsExtendedString,
	typescriptExtensions,
	typescriptExtensionsString,
};
