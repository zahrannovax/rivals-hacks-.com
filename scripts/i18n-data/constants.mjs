/** Shared constants for i18n content generation. */

export const LOCALES = [
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

export const PAGE_IDS = [
	'home', 'tarkov-esp', 'tarkov-aimbot', 'features', 'pricing', 'setup',
	'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'battleye',
	'cheats-2026', 'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all', 'privacy', 'refund', 'terms',
];

/** Hero image per page — product screenshots + homepage banner. */
export const HERO_IMAGES = {
	home: '/images/hero-banner-new-2.webp',
	'tarkov-esp': '/images/hack-preview-image-1.webp',
	'tarkov-aimbot': '/images/hack-preview-image-2.webp',
	features: '/images/blog-image-12.webp',
	pricing: '/images/blog-image-3.webp',
	setup: '/images/blog-image-5.webp',
	updates: '/images/hero-banner-new-2.webp',
	faq: '/images/blog-image-12.webp',
	support: '/images/blog-image-3.webp',
	undetected: '/images/blog-image-12.webp',
	wallhack: '/images/hack-preview-image-1.webp',
	radar: '/images/blog-image-5.webp',
	battleye: '/images/blog-image-6.webp',
	'cheats-2026': '/images/hero-banner-new-2.webp',
	hacks: '/images/hero-banner-new-2.webp',
	'cheat-download': '/images/blog-image-3.webp',
	'mod-menu': '/images/blog-image-5.webp',
	'soft-aim': '/images/hack-preview-image-2.webp',
	'best-cheats': '/images/hero-banner-new-2.webp',
	'aimbot-hack': '/images/hack-preview-image-2.webp',
	'esp-hack': '/images/hack-preview-image-1.webp',
	'unlock-all': '/images/blog-image-5.webp',
	privacy: '/images/blog-image-6.webp',
	refund: '/images/blog-image-3.webp',
	terms: '/images/blog-image-12.webp',
};

export const TS_HEADER = `import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
\ttitle: string;
\tdescription: string;
\th1: string;
\tintro: string;
\timageAlt: string;
\tgalleryTitle: string;
\theroImage: string;
\tsections: PageSection[];
\tctaPrimary: string;
\tctaSecondary?: string;
\tctaSecondaryHref?: string;
};
export type LocaleUi = {
\tnav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
\thero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
\ttrust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
\tproduct: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
\treviews: { title: string; subtitle: string; outOf: string; countLabel: string };
\tcommon: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
\tfooter: { explore: string; help: string; tagline: string };
\timages: {
\t\thero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
\t\theaderArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
\t};
};
export type PageId = 'home' | 'tarkov-esp' | 'tarkov-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'battleye' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';
`;

/** Clamp meta strings to SEO limits without ugly ellipsis. */
export function clampTitle(s) {
	if (s.length <= 60) return s;
	const trimmed = s.slice(0, 60);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 45 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 60);
}

export function clampDesc(s) {
	if (s.length <= 160) return s;
	const trimmed = s.slice(0, 160);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 130 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 160);
}

/** Strip leftover checkout-vendor phrases from meta title/description strings. */
export function stripVendorFromMeta(text) {
	return text.replace(/\s{2,}/g, ' ').trim();
}

/** Build a page section. Pass 2+ paragraph strings; optional trailing string[] becomes list. */
export function section(h2, ...args) {
	let list;
	const paragraphs = [...args];
	if (paragraphs.length && Array.isArray(paragraphs[paragraphs.length - 1])) {
		list = paragraphs.pop();
	}
	if (paragraphs.length < 2) {
		throw new Error(`section "${h2}" needs at least 2 paragraphs`);
	}
	const sec = { h2, paragraphs };
	if (list?.length) sec.list = list;
	return sec;
}

/** Authoritative external citation helpers (open in new tab). */
export const EXT = {
	activision:
		'<a href="https://www.marvelrivals.com/" target="_blank" rel="noopener noreferrer">Marvel Rivals</a>',
	tarkov:
		'<a href="https://www.marvelrivals.com/" target="_blank" rel="noopener noreferrer">Marvel Rivals</a>',
	status:
		'<a href="https://www.marvelrivals.com/" target="_blank" rel="noopener noreferrer">Marvel Rivals</a>',
	battleye:
		'<a href="https://nace.nie.easebar.com/docs/" target="_blank" rel="noopener noreferrer">NACE</a>',
};
