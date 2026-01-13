# zeno-config

Preconfigured ESLint, Prettier, and TypeScript setup for modern JavaScript and React projects.

## Features

- 🚀 **ESLint 9+ flat config** - Modern configuration format
- ⚛️ **React support** - Comprehensive React, React Hooks, and JSX accessibility rules
- 📘 **TypeScript ready** - Full TypeScript support with type-aware linting
- 💅 **Prettier integration** - Seamless formatting with ESLint
- 🎯 **Node.js optimized** - Specific rules for Node.js projects
- 🔌 **Modular configs** - Use only what you need

## Requirements

- Node.js >= 20
- ESLint >= 9

## Installation

Install the package and its peer dependencies:

```bash
# Using pnpm (recommended)

# Base dependencies
pnpm add -D zeno-config eslint prettier @eslint/js @stylistic/eslint-plugin eslint-config-prettier eslint-plugin-import-x eslint-plugin-n eslint-plugin-prettier eslint-plugin-unicorn

# For React projects, also install:
pnpm add -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-react-you-might-not-need-an-effect

# For TypeScript projects, also install:
pnpm add -D typescript typescript-eslint
```

## Usage

### ESLint Configuration

Create an `eslint.config.js` file in your project root:

#### Basic Configuration

```javascript
import { defineZenoConfig } from 'zeno-config/eslint';

// defineZenoConfig returns a Promise - ESLint 9+ flat config supports this natively
export default defineZenoConfig({
	ts: true, // Enable TypeScript support (default: false)
	react: true, // Enable React support (default: false)
});
```

#### Required: Empty `.eslintrc` File

You must create an empty `.eslintrc` file in your project root for the `import-x/no-unused-modules` rule to work correctly with flat config:

```bash
touch .eslintrc
```

This is a workaround for a [known limitation](https://github.com/import-js/eslint-plugin-import/issues/3079) where certain internal ESLint APIs are excluded when using flat config. The file can be empty or contain only `ignorePatterns` if you need to ignore specific files.

#### `engines` field in `package.json`

Add an `engines` field to your `package.json` with your supported Node.js versions. Some rules for Node.js use this:

```json
{
	"engines": {
		"node": ">=20"
	}
}
```

#### Advanced Configuration

```javascript
import { defineZenoConfig } from 'zeno-config/eslint';

export default defineZenoConfig(
	{
		react: true,
		ts: true,

		// If using .js extensions for React files, specify React directories
		reactDirs: ['src/client', 'src/components'],

		// Ignore Node.js rules in specific directories (defaults to reactDirs)
		nodeIgnoreDirs: ['src/client'],

		// Patterns to ignore for import/no-unresolved rule
		ignoreExports: ['^@/'],

		// Extensions to ignore for import/extensions rule
		extensionsIgnorePattern: {
			svg: 'always',
		},

		// Webpack config path for import resolution
		webpackConfig: './webpack.config.js',
	},
	[
		// Your custom config objects
		{
			rules: {
				'no-console': 'warn',
			},
		},
	]
);
```

### Prettier Configuration

Create a `prettier.config.js` file in your project root:

```javascript
import zenoConfig from 'zeno-config/prettier';

export default zenoConfig;
```

Or extend it with your own options:

```javascript
import zenoConfig from 'zeno-config/prettier';

export default {
	...zenoConfig,
	printWidth: 100, // Override specific options
};
```

### TypeScript Configuration

For Node.js projects, extend the provided TypeScript config in your `tsconfig.json`:

```json
{
	"extends": "zeno-config/tsconfig"
	// your tsconfig options
}
```

For React projects:

```json
{
	"extends": "zeno-config/tsconfig-react"
	// your tsconfig options
}
```

Example:

```json
{
	"extends": "zeno-config/tsconfig-react",
	"compilerOptions": {
		"baseUrl": ".", // should match webpack alias settings
		"paths": {
			// should match webpack alias settings
			"@/*": ["src/*"]
		},

		"allowJs": true,
		"checkJs": false
	},
	"include": ["src/**/*"]
}
```

### File Extensions Helpers

Use in your build configs, webpack, etc:

```javascript
import {
	allExtensions,
	nodeExtensions,
	reactExtensions,
	typescriptExtensions,
} from 'zeno-config/extensions';
```

Covers all of the module and commonjs extensions:

- **JavaScript**: `.js`, `.mjs`, `.cjs`
- **JSX**: `.jsx`, `.mjsx`, `.cjsx`
- **TypeScript**: `.ts`, `.cts`, `.mts`
- **TSX**: `.tsx`, `.mtsx`, `.ctsx`

### `defineZenoConfig(options, additionalESLintConfig)`

| Option                    | Type       | Default     | Description                                                                         |
| ------------------------- | ---------- | ----------- | ----------------------------------------------------------------------------------- |
| `react`                   | `boolean`  | `false`     | Enable React-specific rules                                                         |
| `ts`                      | `boolean`  | `false`     | Enable TypeScript-specific rules                                                    |
| `reactDirs`               | `string[]` | `[]`        | Directories containing React files (for projects using .js for both React and Node) |
| `nodeIgnoreDirs`          | `string[]` | `[]`        | Directories to ignore for Node-specific rules (defaults to `reactDirs` if not set)  |
| `ignoreExports`           | `string[]` | `[]`        | Export patterns to ignore for import/no-unresolved rule                             |
| `extensionsIgnorePattern` | `object`   | `{}`        | Extension patterns to ignore for import/extensions rule                             |
| `webpackConfig`           | `string`   | `undefined` | Path to webpack config for import resolver                                          |

## Advanced Usage

### Using Internal Configs Directly

For advanced use cases, you can import and use the internal configs:

```javascript
import zenoInternals from 'zeno-config/eslint';

const { configs, rules, extensions } = zenoInternals;

// Note: getReact() and getTypescript() are async (return Promises)
export default (async () => [
	...configs.getBase(),
	...configs.getNode(),
	...(await configs.getReact()),
	...(await configs.getTypescript()),
	// Your custom configs
])();
```

### Accessing Individual Rules

```javascript
import zenoInternals from 'zeno-config/eslint';

const { rules } = zenoInternals;

// Use individual rule sets
const baseRules = rules.getBaseRules();
const reactRules = rules.getReactPluginRules({ extensions: ['.jsx', '.tsx'] });
```

## Defaults

### Ignored Directories

The following directories are automatically ignored:

- `node_modules/`
- `dist/`
- `build/`
- `coverage/`

#### Prettier Settings

See [src/prettier.js](src/prettier.js) for the default Prettier configuration.

### TypeScript Settings

See the TypeScript configuration files:

- [src/tsconfig.base.json](src/tsconfig.base.json) - Base configuration for Node.js projects
- [src/tsconfig.react.json](src/tsconfig.react.json) - Configuration for React projects (extends base)

### Included Plugins

- `@eslint/js` - Core JavaScript rules ([rules](src/eslint/rules/baseRules.js))
- `@stylistic/eslint-plugin` - Code style rules ([rules](src/eslint/rules/stylisticPluginRules.js))
- `eslint-plugin-import-x` - Import/export validation ([rules](src/eslint/rules/importPluginRules.js))
- `eslint-plugin-unicorn` - Additional JavaScript best practices ([rules](src/eslint/rules/unicornPluginRules.js))
- `eslint-plugin-n` - Node.js specific rules ([rules](src/eslint/rules/nodePluginRules.js))
- `eslint-plugin-prettier` - Prettier integration
- `eslint-plugin-react` (optional) - React specific rules ([rules](src/eslint/rules/reactPluginRules.js))
- `eslint-plugin-react-hooks` (optional) - React Hooks rules ([rules](src/eslint/rules/reactHooksPluginRules.js))
- `eslint-plugin-jsx-a11y` (optional) - Accessibility rules for JSX ([rules](src/eslint/rules/jsxA11yPluginRules.js))
- `eslint-plugin-react-you-might-not-need-an-effect` (optional) - React Effect optimization ([rules](src/eslint/rules/reactYouMightNotNeedAnEffectPluginRules.js))
- `typescript-eslint` (optional) - TypeScript rules ([rules](src/eslint/rules/typescriptPluginRules.js))
