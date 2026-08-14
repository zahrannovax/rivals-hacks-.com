#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from a previous game source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['marvel rivals-esp', 'marvel rivals-esp'],
	['marvel rivals-aimbot', 'marvel rivals-aimbot'],
	["'nace'", "'nace'"],
	['nace-bypass', 'nace-bypass'],
	['undetected-marvel rivals-cheats', 'undetected-marvel rivals-cheats'],
	['marvel rivals-wallhack', 'marvel rivals-wallhack'],
	['marvel rivals-radar-hack', 'marvel rivals-radar-hack'],
	['marvel rivals-cheats-2026', 'marvel rivals-cheats-2026'],
	['escape-from-marvel rivals-cheats', 'escape-from-marvel rivals-cheats'],
	['escape-from-marvel rivals', 'marvel rivals'],
	['Marvel Rivals', 'Marvel Rivals'],
	['Marvel Rivals', 'Marvel Rivals'],
	['Marvel Rivals Cheats', 'Marvel Rivals Cheats'],
	['Marvel Rivals cheats', 'Marvel Rivals cheats'],
	['Marvel Rivals cheat', 'Marvel Rivals cheat'],
	['Marvel Rivals ESP', 'Marvel Rivals ESP'],
	['Marvel Rivals Aimbot', 'Marvel Rivals Aimbot'],
	['Marvel Rivals wallhack', 'Marvel Rivals wallhack'],
	['Marvel Rivals radar', 'Marvel Rivals radar'],
	['Marvel Rivals firefights', 'Marvel Rivals firefights'],
	['Marvel Rivals combat', 'Marvel Rivals combat'],
	['Marvel Rivals patches', 'Marvel Rivals patches'],
	['Marvel Rivals updates', 'Marvel Rivals updates'],
	['Marvel Rivals setup', 'Marvel Rivals setup'],
	['Marvel Rivals license', 'Marvel Rivals license'],
	['Marvel Rivals licenses', 'Marvel Rivals licenses'],
	['Marvel Rivals sessions', 'Marvel Rivals sessions'],
	['in Marvel Rivals', 'in Marvel Rivals'],
	['for Marvel Rivals', 'for Marvel Rivals'],
	['Marvel Rivals on', 'Marvel Rivals on'],
	['Marvel Rivals or', 'Marvel Rivals or'],
	['Marvel Rivals\'s', 'Marvel Rivals\'s'],
	['Marvel Rivals ', 'Marvel Rivals '],
	['NACE', 'NACE'],
	['NACE maintenance', 'NACE maintenance'],
	['NACE bypass', 'NACE bypass'],
	['NACE Bypass', 'NACE Bypass'],
	['NACE', 'NACE'],
	['nace', 'nace'],
	['support@rivalshacks.com', 'support@rivalshacks.com'],
	['Customs, Woods, and Marvel Rivals maps', 'Customs, Woods, and Marvel Rivals maps'],
	['Customs, Woods and Marvel Rivals maps', 'Customs, Woods and Marvel Rivals maps'],
	['extract fights', 'extract fights'],
	['extract fight', 'extract fight'],
	['raid rounds', 'raid rounds'],
	['extract', 'extract'],
	['PMCs', 'players'],
	['operator', 'player'],
	['PMCs', 'Players'],
	['Operator', 'Player'],
	['extract timer', 'extract timer'],
	['PMC raids and Scav runs', 'PMC raids and Scav runs'],
	['PMC raids and Scav runs', 'PMC raids and Scav runs'],
	['PMC & Scav', 'PMC & Scav'],
	['high-value loot', 'high-value loot'],
	['high-value loot', 'high-value loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Marvel Rivals combat pace'],
	['COD', 'Marvel Rivals'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Marvel Rivals Cheats',
	game: 'Marvel Rivals',
	checkout: '',
	nace: 'NACE',
};`,
);
phrases = phrases.replace(/KW\.battleye/g, 'KW.nace');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Marvel Rivals maps'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
