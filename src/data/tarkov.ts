import { siteConfig } from './site';

/** Screenshots used across product pages — simple marvel rivals cheats keyword alts. */
export const tarkovImages = {
	hero: '/images/hero-banner-new-2.png',
	espWallhack: '/images/blog-image-12.webp',
	aimbotCombat: '/images/blog-image-6.webp',
	aimbotSkeleton: '/images/blog-image-12.webp',
	playerEsp: '/images/blog-image-5.webp',
	cheatsCombat: '/images/blog-image-3.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/blog-image-3.webp',
	loadoutBuilder: '/images/blog-image-5.webp',
	squadFight: '/images/blog-image-12.webp',
	cheatsPackage: '/images/blog-image-5.webp',
	headerArt: '/images/blog-image-12.webp',
	battleRoyaleCombat: '/images/blog-image-3.webp',
	extractFight: '/images/blog-image-6.webp',
	rebootFight: '/images/blog-image-6.webp',
	scavRunCombat: '/images/blog-image-12.webp',
	scavRunMode: '/images/blog-image-8.webp',
	battleRoyaleIsland: '/images/blog-image-8.webp',
	raidMap: '/images/blog-image-8.webp',
	hackPreviewEsp: '/images/hack-preview-image-1.webp',
	hackPreviewAimbot: '/images/hack-preview-image-2.webp',
	product: [
		{ src: '/images/hack-preview-image-1.webp', alt: 'Hero ESP boxes, names, and distance in a Marvel Rivals match' },
		{ src: '/images/hack-preview-image-2.webp', alt: 'Aimbot lock overlay on enemy heroes in Marvel Rivals' },
	],
	gallery: [
		{ src: '/images/hack-preview-image-1.webp', alt: 'ESP overlay showing hero boxes, health, and distance', featured: true },
		{ src: '/images/hack-preview-image-2.webp', alt: 'Aim assist overlay with hero boxes in combat' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/blog-image-8.webp', title: '', caption: '' },
		{ src: '/images/blog-image-12.webp', title: '', caption: '' },
		{ src: '/images/blog-image-6.webp', title: '', caption: '' },
		{ src: '/images/blog-image-12.webp', title: '', caption: '' },
		{ src: '/images/blog-image-5.webp', title: '', caption: '' },
		{ src: '/images/blog-image-3.webp', title: '', caption: '' },
	],
} as const;
