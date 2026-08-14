/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Marvel Rivals Cheats',
	/** Short product label if needed */
	shortName: 'Rivals Cheats',
	/** Canonical origin — no trailing slash */
	url: 'https://rivalshacks.com',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@rivalshacks.com',
	checkoutUrl: 'https://zadeyo.com/go/ZAHRAN?to=%2Fproducts%2Fmarvel-rivals',

	/** Game this template instance targets */
	game: 'Marvel Rivals',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'NACE',

	logo: '/images/marvel-rivals-cheats-logo.webp',
	logoRaster: '/images/marvel-rivals-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Marvel Rivals Cheats logo',
	defaultOgImage: '/images/hero-banner-new-2.webp',
	heroImage: '/images/hero-banner-new-2.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#5311ee',
		bg: '#0a0811',
		soft: '#c3aef4',
		deep: '#4907df',
		hover: '#a07bf4',
		panel: '#0a080c',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'marvel rivals cheats',
		list: [
			'marvel rivals cheats',
			'marvel rivals hacks',
			'marvel rivals esp',
			'marvel rivals aimbot',
			'marvel rivals kernel anti cheat',
			'best dps marvel rivals',
			'undetected marvel rivals cheats',
			'best marvel rivals settings',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		/** Titles ≤60 chars; descriptions ~140–160 (Google SERP display). */
		/** Home = brand hub. Money URL /marvel-rivals-cheats/ owns the head term. */
		homeTitle: 'Marvel Rivals Cheats | Official Windows PC Site',
		homeDescription:
			'Official Marvel Rivals Cheats site for Windows PC. Compare features, store plans, and live status — then buy hero ESP and aimbot in one license.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC — hero ESP, aimbot, cooldown tracker, and {antiCheat} updates. See what is included before you buy.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Monthly and lifetime {game} plans for Windows PC. Same hero ESP, aimbot, and cooldown tools on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you queue a match on Windows PC today.',
		/** Money page meta — primary target for "marvel rivals cheats". */
		previewTitle: 'Marvel Rivals Cheats | Undetected Hero ESP',
		previewDescription:
			'Buy undetected marvel rivals cheats for Marvel Rivals on Windows PC. Hero ESP, aimbot, cooldown tracker, and NACE updates in one license with instant delivery.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can queue faster. Follow each step before your first match.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for {game} — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — hero ESP, aimbot, and {antiCheat} updates for {game} on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — hero ESP, aimbot, DPS tips, and {antiCheat} updates for Windows PC. Pair with Features when you buy.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — hero ESP, aimbot, and cooldown tracker for PC',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes hero ESP, aimbot, and cooldown tracker, with {antiCheat} maintenance after patches.',
		heroLede: 'Official Windows PC site for undetected hero ESP, aimbot, and cooldown tracker.',
		blogLabel: 'Rivals Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one {brand} license for {game} on Windows PC.',
		storeIntro: 'Pick a {brand} plan in the store. Same features on both, with instant delivery after payment.',
		statusIntro: 'Check {brand} status after a {game} or {antiCheat} patch before you queue.',
		previewIntro:
			'{brand} for {game} — undetected hero ESP, aimbot, cooldown tracker, and {antiCheat} rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short setup steps.',
		supportIntro: 'Need support with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short FAQ answers about {brand} — delivery, setup, updates, and refunds.',
		reviewsIntro: 'Buyer feedback from {brand} — hero ESP, aimbot, cooldowns, and support.',
		chipEsp: 'Hero ESP',
		chipAim: 'Aimbot',
		chipRadar: 'Cooldown tracker',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-15',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/blog-image-8.webp',
				title: 'Hero ESP overlay in Marvel Rivals',
				caption: 'Hero boxes, health bars, and ultimate status during a match',
			},
			{
				src: '/images/blog-image-12.webp',
				title: 'Wallhack visibility for Marvel Rivals',
				caption: 'Enemy hero outlines through walls and cover',
			},
			{
				src: '/images/blog-image-6.webp',
				title: 'Aimbot assist for Marvel Rivals',
				caption: 'Hero priority, FOV, and aim smoothing controls',
			},
			{
				src: '/images/blog-image-1.webp',
				title: 'Aimbot view in Marvel Rivals Cheats',
				caption: 'In-menu aimbot controls for Windows PC',
			},
			{
				src: '/images/blog-image-5.webp',
				title: 'Cooldown and objective overlays',
				caption: 'Ability cooldown tracker and objective marker ESP',
			},
			{
				src: '/images/blog-image-3.webp',
				title: 'Marvel Rivals Cheats license plans',
				caption: 'Monthly and lifetime plans for Windows PC',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
