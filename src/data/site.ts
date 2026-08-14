export {
	brand,
	blogLabel,
	fillBrandTokens,
	homeSeo,
	seoDescription,
	seoPageTitle,
	seoTitle,
	siteConfig,
	seoKeywords,
	productInfo,
} from './site-core';

import { fillBrandTokens } from './brand';

function faq<T extends { question: string; answer: string; seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		question: fillBrandTokens(item.question),
		answer: fillBrandTokens(item.answer),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

function reviewMeta<T extends { seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export const trustSignals = {
	status: 'Online',
	statusNote: fillBrandTokens('{brand} is live for {game} on Windows PC.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('{game} hacks'), href: '/marvel-rivals-cheats/' },
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/marvel-rivals-cheats/' },
	{ label: fillBrandTokens('{game} esp'), href: '/marvel-rivals-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/marvel-rivals-aimbot/' },
	{ label: fillBrandTokens('{game} setup'), href: '/setup/' },
	{ label: fillBrandTokens('Undetected {primaryKeyword}'), href: '/marvel-rivals-cheats/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/marvel-rivals-esp/' },
	{ label: fillBrandTokens('{game} cooldown tracker'), href: '/marvel-rivals-cooldown-tracker/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/marvel-rivals-cheats/' },
	{ label: 'Aimbot', href: '/marvel-rivals-aimbot/' },
	{ label: 'ESP', href: '/marvel-rivals-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: fillBrandTokens('{game} hack update log'), href: '/updates/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: fillBrandTokens('{brand} home'), href: '/' },
	{ label: fillBrandTokens('{game} hacks pillar'), href: '/marvel-rivals-cheats/' },
	{ label: fillBrandTokens('Live {game} status'), href: '/updates/' },
	{ label: fillBrandTokens('{game} ESP overlays'), href: '/marvel-rivals-esp/' },
	{ label: fillBrandTokens('{game} Aimbot controls'), href: '/marvel-rivals-aimbot/' },
	{ label: fillBrandTokens('{game} cooldown tracker'), href: '/marvel-rivals-cooldown-tracker/' },
	{ label: fillBrandTokens('Full {game} hack feature list'), href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: fillBrandTokens('{game} hack setup guide'), href: '/setup/' },
	{ label: fillBrandTokens('{game} hacks FAQ'), href: '/faq/' },
	{ label: fillBrandTokens('{brand} reviews'), href: '/reviews/' },
	{ label: fillBrandTokens('{game} Intel blog'), href: '/blog/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
] as const;

export type FaqItem = {
	question: string;
	answer: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
};

export const homeFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is {brand}?',
		answer:
			'{brand} is an undetected {primaryKeyword} package for Marvel Rivals on Windows PC. It includes hero ESP, aimbot, and a cooldown tracker, with {antiCheat} maintenance and setup support.',
		slug: 'what-are-marvel-rivals-cheats',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'{brand} explained: undetected hero ESP, aimbot, and cooldown tracker for {game} on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. Check the Status page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
		slug: 'are-marvel-rivals-cheats-undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How {brand} stays maintained after {antiCheat} patches in 2026 — and why no cheat can promise permanent undetected status.',
	}),
	faq({
		question: 'Does this work for Duelists, Vanguards, and Strategists?',
		answer:
			'Yes. Hero ESP, aimbot, and cooldown tracker are built for {game} matches — reading enemy heroes, ultimates, and objectives in ranked and quick play.',
		slug: 'duelist-vanguard-strategist-support',
		seoTitle: 'Duelist, Vanguard, and Strategist Support | FAQ',
		seoDescription:
			'{brand} works for Duelists, Vanguards, and Strategists — hero ESP, aimbot, and cooldowns for Windows PC.',
	}),
	faq({
		question: 'What is included — ESP, aimbot, or cooldown tracker?',
		answer:
			'{brand} bundles hero ESP, aimbot with hero priority, cooldown tracker, no recoil, stream-proof mode, and Cloud-DMA / AWS options in one license. See Features for the full list.',
		slug: 'esp-aimbot-or-cooldown-tracker',
		seoTitle: 'What Is Included: ESP, Aimbot, Cooldowns | FAQ',
		seoDescription:
			'One {brand} license includes hero ESP, aimbot, cooldown tracker, and extras for Windows PC.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after a {game} or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when a {game} or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Status page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
		slug: 'how-to-contact-support',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} support via the Support page or {email} with your order details for faster help.',
	}),
] as const;

export const seoFaqs: readonly FaqItem[] = [
	...homeFaqs,
	faq({
		question: 'What is a {game} wallhack?',
		answer:
			'A {game} wallhack is hero ESP that shows enemies through walls. {brand} includes health bars, shields, ultimate status, team comps, and objective markers.',
		slug: 'what-is-a-marvel-rivals-wallhack',
		seoTitle: 'What Is a {game} Wallhack? | FAQ',
		seoDescription:
			'A {game} wallhack is hero ESP through walls — with health bars, ultimates, team comps, and objective markers.',
	}),
	faq({
		question: 'Does {brand} include a cooldown tracker?',
		answer:
			'Yes. {brand} includes an ability cooldown tracker so you can see when enemy ultimates and skills are ready.',
		slug: 'does-marvel-rivals-cheats-include-cooldown-tracker',
		seoTitle: 'Does {brand} Include a Cooldown Tracker? | FAQ',
		seoDescription:
			'Yes — {brand} includes an ability cooldown tracker for enemy ultimates and skills.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} (NetEase Anti-Cheat Experts) monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you queue.',
		slug: 'nace-anti-cheat-and-marvel-rivals-cheats',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Status notes explain the update workflow.',
	}),
	faq({
		question: 'Can I buy undetected {game} cheats for Windows PC?',
		answer:
			'Yes — {brand} sells monthly and lifetime licenses for Windows PC with hero ESP, aimbot, and cooldown tracker in one stack. Compare plans on Store before checkout.',
		slug: 'buy-undetected-marvel-rivals-cheats-windows-pc',
		seoTitle: 'Buy Undetected {game} Cheats for Windows PC | FAQ',
		seoDescription:
			'Buy monthly or lifetime {brand} licenses for Windows PC — hero ESP, aimbot, and cooldowns in one stack. Compare pricing before checkout.',
	}),
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	reviewMeta({
		handle: 'xKrypt0_MR',
		rating: 5,
		text: 'Aimbot in Marvel Rivals Cheats feels smooth on Duelists. The menu took a few minutes to learn. After that, ranked fights felt easy.',
		short: 'Aimbot in Marvel Rivals Cheats feels smooth on Duelists.',
		slug: 'marvel-rivals-aimbot-review-xkrypt0',
		seoTitle: 'Aimbot Review by @xKrypt0_MR — 5/5 | {brand}',
		seoDescription: '@xKrypt0_MR rates {brand} aimbot 5/5 for Duelists on Windows PC.',
		date: '2026-07-24',
		tag: 'Aimbot',
	}),
	reviewMeta({
		handle: 'buildsR4K',
		rating: 4,
		text: 'Hero ESP helps on point holds. You can see who is holding a corner before you peek. Still worth the price for Marvel Rivals Cheats.',
		short: 'Hero ESP helps on point holds. Still worth the price for Marvel Rivals Cheats.',
		slug: 'marvel-rivals-esp-review-buildsr4k',
		seoTitle: 'ESP Review by @buildsR4K — 4/5 | {brand}',
		seoDescription: '@buildsR4K rates {brand} hero ESP 4/5 for point holds on Windows PC.',
		date: '2026-07-19',
		tag: 'ESP',
	}),
	reviewMeta({
		handle: 'dma_wizard',
		rating: 5,
		text: 'I moved to Marvel Rivals Cheats this season. Setup was simple. It stayed up after the last NACE update when my old cheat failed. Lifetime was a good buy.',
		short: 'Marvel Rivals Cheats stayed up after the last NACE update. Lifetime was a good buy.',
		slug: 'marvel-rivals-cloud-dma-review-dma-wizard',
		seoTitle: 'Update Review by @dma_wizard — 5/5 | {brand}',
		seoDescription: '@dma_wizard rates {brand} 5/5 after a {antiCheat} update on Windows PC.',
		date: '2026-06-27',
		tag: 'Updates',
	}),
	reviewMeta({
		handle: 'ctrl_player99',
		rating: 4,
		text: 'Aim smoothing in Marvel Rivals Cheats is easy to tune on PC. I changed FOV a little and it felt natural. Menu is clear enough.',
		short: 'Aim smoothing in Marvel Rivals Cheats is easy to tune on PC.',
		slug: 'marvel-rivals-aim-smoothing-review-ctrl-player99',
		seoTitle: 'Aim Smoothing Review by @ctrl_player99 — 4/5 | {brand}',
		seoDescription: '@ctrl_player99 rates {brand} aim smoothing 4/5 on Windows PC.',
		date: '2026-07-11',
		tag: 'Aimbot',
	}),
	reviewMeta({
		handle: 'stormChaser_07',
		rating: 3,
		text: 'Marvel Rivals Cheats works well once it is running. First launch was slow because Windows Defender flagged the loader. Support replied in about two hours. ESP on payload maps is solid.',
		short: 'ESP on payload maps is solid. Support helped after a slow first launch.',
		slug: 'marvel-rivals-setup-review-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | {brand}',
		seoDescription: '@stormChaser_07 rates {brand} setup 3/5. ESP on payload maps is solid after support help.',
		date: '2026-06-15',
		tag: 'Setup',
	}),
	reviewMeta({
		handle: 'ultTrackx',
		rating: 5,
		text: 'Ultimate status ESP in Marvel Rivals Cheats pays for the monthly plan. Cooldown tracker makes first fights faster.',
		short: 'Ultimate status ESP in Marvel Rivals Cheats pays for the monthly plan.',
		slug: 'marvel-rivals-ultimate-esp-review-ulttrackx',
		seoTitle: 'Ultimate ESP Review by @ultTrackx — 5/5 | {brand}',
		seoDescription: '@ultTrackx rates {brand} ultimate ESP 5/5 for early fights on Windows PC.',
		date: '2026-08-01',
	}),
	reviewMeta({
		handle: 'rankedGrind42',
		rating: 4,
		text: 'I have used Marvel Rivals Cheats since last season. Hero priority aimbot helps in ranked. Status updates after NACE patches could be clearer, but it came back the next day.',
		short: 'Hero priority aimbot in Marvel Rivals Cheats helps in ranked.',
		slug: 'marvel-rivals-aimbot-ranked-review-rankedgrind42',
		seoTitle: 'Ranked Aimbot by @rankedGrind42 — 4/5 | {brand}',
		seoDescription: '@rankedGrind42 rates {brand} aimbot 4/5 for ranked on Windows PC.',
		date: '2026-07-07',
		tag: 'Ranked',
	}),
	reviewMeta({
		handle: 'objHoldMR',
		rating: 5,
		text: 'Objective marker ESP in Marvel Rivals Cheats saved me on convoy. Seeing the third party early in 6v6 is huge. Boxes plus cooldowns look clean.',
		short: 'Objective marker ESP in Marvel Rivals Cheats saved me on convoy.',
		slug: 'marvel-rivals-objective-esp-review-objholdmr',
		seoTitle: 'Objective ESP Review by @objHoldMR — 5/5 | {brand}',
		seoDescription: '@objHoldMR rates {brand} objective ESP 5/5 on convoy maps for Windows PC.',
		date: '2026-07-28',
		tag: 'Objectives',
	}),
	reviewMeta({
		handle: 'patchDayMike',
		rating: 4,
		text: 'Most cheats go down on patch day. Marvel Rivals Cheats posted on the status page within a few hours and was back the next morning. My old tool left me waiting for days.',
		short: 'Marvel Rivals Cheats was back the next morning after a patch.',
		slug: 'marvel-rivals-nace-update-review-patchdaymike',
		seoTitle: 'Status Review by @patchDayMike — 4/5 | {brand}',
		seoDescription: '@patchDayMike rates {brand} status updates 4/5 after {antiCheat} patches.',
		date: '2026-06-09',
		tag: 'NACE updates',
	}),
	reviewMeta({
		handle: 'snipezOnly_',
		rating: 5,
		text: 'Hitscan aimbot plus hero ESP in Marvel Rivals Cheats is excellent for long sightlines. Simple and strong.',
		short: 'Hitscan aimbot plus hero ESP in Marvel Rivals Cheats is excellent.',
		slug: 'marvel-rivals-hitscan-aimbot-review-snipezonly',
		seoTitle: 'Hitscan Aimbot by @snipezOnly_ — 5/5 | {brand}',
		seoDescription: '@snipezOnly_ rates {brand} hitscan aimbot 5/5 with ESP on Windows PC.',
		date: '2026-08-01',
	}),
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
