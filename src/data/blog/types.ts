import type { LocaleCode } from '../i18n/locales';

export type BlogImageKey =
	| 'blog1'
	| 'blog2'
	| 'blog3'
	| 'blog4'
	| 'blog5'
	| 'blog6'
	| 'blog7'
	| 'blog8'
	| 'blog9'
	| 'blog10'
	| 'blog11'
	| 'blog12'
	| 'blog13';

export type BlogSection = {
	h2: string;
	paragraphs: string[];
};

export type BlogFaqItem = {
	question: string;
	answer: string;
};

export type BlogTranslation = {
	slug: string;
	title: string;
	metaDescription: string;
	h1: string;
	intro: string;
	keywords: string[];
	imageAlt: string;
	sections: BlogSection[];
	faq?: BlogFaqItem[];
};

export type BlogPostDefinition = {
	id: string;
	imageKey: BlogImageKey;
	published: string;
	updated: string;
	category: string;
	featured?: boolean;
	/** Skip in-article hero. OG still uses imageKey. */
	hideHero?: boolean;
	/** Prefer full locale map; helpers clone `en` into any missing locales. */
	translations: Partial<Record<LocaleCode, BlogTranslation>> & { en: BlogTranslation };
};

export type ResolvedBlogPost = BlogPostDefinition & {
	locale: LocaleCode;
	translation: BlogTranslation;
	imageSrc: string;
	canonicalPath: string;
};
