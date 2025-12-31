/** Combined JavaScript, JSX, TypeScript, and TSX extensions */
declare const allExtensions: string[];
/** String version of allExtensions for use in glob patterns */
declare const allExtensionsString: string;

/** Node.js extensions (JavaScript and TypeScript) */
declare const nodeExtensions: string[];
/** String version of nodeExtensions for use in glob patterns */
declare const nodeExtensionsString: string;

/** React JavaScript extensions only */
declare const reactJsExtensions: string[];
/** String version of reactJsExtensions for use in glob patterns */
declare const reactJsExtensionsString: string;

/** React extensions (JSX and TSX) */
declare const reactExtensions: string[];
/** String version of reactExtensions for use in glob patterns */
declare const reactExtensionsString: string;

/** Extended React JavaScript extensions (includes .js and .jsx) */
declare const reactJsExtensionsExtended: string[];
/** String version of reactJsExtensionsExtended for use in glob patterns */
declare const reactJsExtensionsExtendedString: string;

/** Extended React extensions (includes .js, .jsx, and .tsx) */
declare const reactExtensionsExtended: string[];
/** String version of reactExtensionsExtended for use in glob patterns */
declare const reactExtensionsExtendedString: string;

/** TypeScript extensions (includes .ts and .tsx) */
declare const typescriptExtensions: string[];
/** String version of typescriptExtensions for use in glob patterns */
declare const typescriptExtensionsString: string;

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
