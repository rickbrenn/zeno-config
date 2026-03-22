#!/usr/bin/env node

/* eslint-disable no-console */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const templatePath = resolve(__dirname, '..', 'src', 'gitignore');
const targetPath = resolve(process.cwd(), '.gitignore');

const template = readFileSync(templatePath, 'utf8');

if (!existsSync(targetPath)) {
	writeFileSync(targetPath, template);
	console.log('Created .gitignore');
	process.exit(0);
}

function parseSections(content) {
	const sections = [];
	let current = null;

	for (const line of content.split('\n')) {
		if (line.startsWith('#')) {
			if (current) {
				sections.push(current);
			}
			current = { comments: [line], patterns: [] };
		} else if (line.trim()) {
			if (!current) {
				current = { comments: [], patterns: [] };
			}
			current.patterns.push(line);
		}
	}

	if (current) {
		sections.push(current);
	}
	return sections;
}

const existing = readFileSync(targetPath, 'utf8');
const existingPatterns = new Set(
	existing
		.split('\n')
		.map((line) => line.trim())
		.filter((line) => line && !line.startsWith('#'))
);

const templateSections = parseSections(template);
const sectionsToAdd = [];

for (const section of templateSections) {
	const missing = section.patterns.filter((p) => !existingPatterns.has(p));
	if (missing.length > 0) {
		sectionsToAdd.push({ comments: section.comments, patterns: missing });
	}
}

if (sectionsToAdd.length === 0) {
	console.log('.gitignore is already up to date');
	process.exit(0);
}

const lines = sectionsToAdd.flatMap((section) => [
	'',
	...section.comments,
	...section.patterns,
]);
const updated = `${existing.trimEnd()}\n${lines.join('\n')}\n`;

writeFileSync(targetPath, updated);

const count = sectionsToAdd.reduce((sum, s) => sum + s.patterns.length, 0);
for (const section of sectionsToAdd) {
	console.log(section.comments.join('\n'));
	for (const p of section.patterns) {
		console.log(`  ${p}`);
	}
}
console.log(`\nAdded ${count} pattern(s) to .gitignore`);
