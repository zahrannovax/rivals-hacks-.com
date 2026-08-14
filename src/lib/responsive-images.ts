/**
 * Responsive image helpers — prefer compressed WebP for LCP and below-fold media.
 */

export interface ResponsiveWidth {
	src: string;
	width: number;
}

/** Build a srcset string from width-tagged image paths. */
export function buildSrcSet(widths: ResponsiveWidth[]): string {
	return widths.map(({ src, width }) => `${src} ${width}w`).join(', ');
}

/** Build srcset for content images that have -480w / -960w variants. */
export function contentSrcSet(baseSrc: string): string | undefined {
	const match = baseSrc.match(/^(.+\/)(.+)\.webp$/i);
	if (!match) return undefined;

	const [, dir, name] = match;
	if (
		name.endsWith('-640w') ||
		name.endsWith('-960w') ||
		name.endsWith('-1400w') ||
		name.endsWith('-1024w') ||
		name.endsWith('-1536w') ||
		name.endsWith('-480w') ||
		name.startsWith('hack-preview-image-') ||
		name.startsWith('blog-image-') ||
		name.startsWith('hero-banner-new')
	) {
		return undefined;
	}

	return buildSrcSet(
		contentWidths.map((width) => ({
			src: `${dir}${name}-${width}w.webp`,
			width,
		})),
	);
}

/**
 * Homepage / banner hero — high-quality WebP from hero-banner-new-2.png.
 * Native art 1672×941. Always prefer the native file on desktop so it is not upscaled.
 */
export const heroResponsive: ResponsiveWidth[] = [
	{ src: '/images/hero-banner-new-2-480w.webp', width: 480 },
	{ src: '/images/hero-banner-new-2-640w.webp', width: 640 },
	{ src: '/images/hero-banner-new-2-768w.webp', width: 768 },
	{ src: '/images/hero-banner-new-2-960w.webp', width: 960 },
	{ src: '/images/hero-banner-new-2-1024w.webp', width: 1024 },
	{ src: '/images/hero-banner-new-2-1280w.webp', width: 1280 },
	{ src: '/images/hero-banner-new-2-1400w.webp', width: 1400 },
	{ src: '/images/hero-banner-new-2.webp', width: 1672 },
];

export const heroDesktopResponsive: ResponsiveWidth[] = heroResponsive;

/** Default LCP src — native WebP (not the 1024w ladder step). */
export const heroSrc = '/images/hero-banner-new-2.webp';
export const heroSrcSet = buildSrcSet(heroResponsive);
export const heroSizes =
	'(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1400px) 100vw, 1672px';

/** LCP preload — same native WebP so the browser does not lock onto 1024w. */
export const heroPreloadSrc = heroSrc;
export const heroMimeType = 'image/webp';

/** Exact native dimensions of the LCP file. */
export const heroWidth = 1672;
export const heroHeight = 941;

/** Responsive widths for below-fold content images. */
export const contentWidths = [480, 960] as const;

export const galleryFeaturedSizes = '(max-width: 560px) 100vw, (max-width: 900px) 90vw, 640px';
export const galleryTileSizes = '(max-width: 560px) 100vw, (max-width: 900px) 45vw, 320px';
export const productMainSizes = '(max-width: 900px) 100vw, 640px';
export const productThumbSizes = '160px';
