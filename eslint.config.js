import { defineZenoConfig } from './eslint/index.js';

export default defineZenoConfig({
	ignoreExports: ['./eslint/index.js', './prettier.js'],
});
