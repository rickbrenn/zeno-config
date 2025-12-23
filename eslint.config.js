import { defineZenoConfig } from './src/eslint/index.js';

export default defineZenoConfig({
	ignoreExports: ['./src/eslint/index.js', './src/prettier.js'],
});
