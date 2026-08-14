import { readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');

/** Hero LCP asset — widths for phones, tablets, laptops, and 2x displays */
const HERO_WIDTHS = [480, 640, 768, 960, 1024, 1280, 1400];

/** Below-fold content images — smaller variants for gallery/product cards */
const CONTENT_WIDTHS = [480, 960];

const SKIP_PATTERNS = [
	/-\d+w\.webp$/i,
	/tarkov-cheats-logo/i,
	/marvel-rivals-cheats-logo/i,
	/hero-banner-new/i,
	/favicon/i,
];

async function optimizeHero() {
	const source = path.join(imagesDir, 'hero-banner-new-2.png');
	const meta = await sharp(source).metadata();
	const results = [];

	for (const width of HERO_WIDTHS) {
		if (meta.width && width > meta.width) continue;
		const file = `hero-banner-new-2-${width}w.webp`;
		const dest = path.join(imagesDir, file);
		const quality =
			width <= 480 ? 72 : width <= 640 ? 78 : width <= 960 ? 84 : width <= 1280 ? 88 : 92;
		const buffer = await sharp(source)
			.resize({ width, withoutEnlargement: true })
			.webp({ quality, effort: 6 })
			.toBuffer();
		await writeFile(dest, buffer);
		results.push({ file, width, bytes: buffer.length });
		console.log(`Wrote ${file} (${buffer.length} bytes)`);
	}

	return results;
}

async function optimizeContentImages() {
	const files = await readdir(imagesDir);
	const sources = files.filter(
		(file) =>
			file.endsWith('.webp') &&
			!SKIP_PATTERNS.some((pattern) => pattern.test(file)) &&
			file !== 'hero-banner-new.png' &&
			!file.startsWith('hero-banner-new-'),
	);

	const results = [];

	for (const file of sources) {
		const source = path.join(imagesDir, file);
		const meta = await sharp(source).metadata();
		const base = file.replace(/\.webp$/i, '');

		for (const width of CONTENT_WIDTHS) {
			if (meta.width && width >= meta.width) continue;
			const variant = `${base}-${width}w.webp`;
			const dest = path.join(imagesDir, variant);
			const buffer = await sharp(source)
				.resize({ width, withoutEnlargement: true })
				.webp({ quality: 78, effort: 6 })
				.toBuffer();
			await writeFile(dest, buffer);
			results.push({ file: variant, width, bytes: buffer.length });
			console.log(`Wrote ${variant} (${buffer.length} bytes)`);
		}
	}

	return results;
}

const heroResults = await optimizeHero();
const contentResults = await optimizeContentImages();
console.log(`Done — ${heroResults.length} hero + ${contentResults.length} content variants.`);
