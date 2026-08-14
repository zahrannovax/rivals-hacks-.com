#!/usr/bin/env node
/**
 * Lighthouse "Charset declaration is missing or occurs too late":
 * the tag must appear in the first 1024 bytes. Astro can inject CSS at the
 * start of <head>, and a style="" on <html> can push charset past that limit.
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const CHARSET = '<meta charset="utf-8">';

function walk(dir, acc = []) {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) walk(full, acc);
		else if (entry.name.endsWith('.html')) acc.push(full);
	}
	return acc;
}

function fix(html) {
	let out = html.replace(/^\uFEFF/, '');
	out = out.replace(/<html\b([^>]*)>/i, (_, attrs) => {
		const cleaned = String(attrs).replace(/\sstyle=(["'])[\s\S]*?\1/i, '');
		return `<html${cleaned}>`;
	});
	out = out.replace(/<meta\s+charset=["'][^"']*["']\s*\/?>/gi, '');
	out = out.replace(/<meta\s+http-equiv=["']content-type["'][^>]*>/gi, '');
	if (!/<head[\s>]/i.test(out)) return html;
	return out.replace(/<head([^>]*)>/i, `<head$1>${CHARSET}`);
}

function charsetOffset(html) {
	const match = html.match(/charset/i);
	if (!match || match.index == null) return -1;
	return Buffer.byteLength(html.slice(0, match.index), 'utf8');
}

const files = walk(dist);
let changed = 0;
let worst = 0;
let worstFile = '';

for (const file of files) {
	const before = readFileSync(file, 'utf8');
	const after = fix(before);
	if (after !== before) {
		writeFileSync(file, after);
		changed += 1;
	}
	const offset = charsetOffset(after);
	if (offset > worst) {
		worst = offset;
		worstFile = path.relative(dist, file);
	}
}

console.log(
	`ensure-html-charset: ${changed}/${files.length} files updated; latest charset at byte ${worst} (${worstFile || 'n/a'})`,
);

if (worst < 0 || worst > 1024) {
	console.error('ensure-html-charset: charset missing or still after the first 1024 bytes');
	process.exit(1);
}
