import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	imageAlt: string;
	galleryTitle: string;
	heroImage: string;
	sections: PageSection[];
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
};
export type LocaleUi = {
	nav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
	hero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
	trust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
	product: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
	reviews: { title: string; subtitle: string; outOf: string; countLabel: string };
	common: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
	footer: { explore: string; help: string; tagline: string };
	images: {
		hero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
		headerArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
	};
};
export type PageId = 'home' | 'tarkov-esp' | 'tarkov-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'battleye' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';

export const i18nContent: Record<LocaleCode, { ui: LocaleUi; pages: Record<PageId, PageContent> }> = {
		en: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Pricing",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Buy Now",
				},
				hero: {
					accent: "2026 — Undetected ESP, Aimbot & Wallhack",
					accentShort: "Undetected marvel rivals cheats 2026",
					subtitle: "Marvel Rivals cheats with marvel rivals esp, cooldown tracker and marvel rivals aimbot for Windows PC — NACE maintenance included.",
					subtitleShort: "Marvel Rivals esp, cooldown tracker & aimbot for PC",
					buyNow: "Get Access",
					seeFeatures: "See Features",
				},
				trust: {
					status: "Online",
					statusNote: "Marvel Rivals Cheats — undetected marvel rivals cheats live for Marvel Rivals on Windows PC.",
					statusShort: "Live",
					delivery: "Instant digital delivery",
					platform: "Windows 10 & 11",
					antiCheat: "NACE maintenance supported",
					antiCheatShort: "NACE supported",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "Add to Cart",
					monthly: "Monthly",
					lifetime: "Lifetime",
					available: "Available now",
					gameBadge: "Marvel Rivals",
					platformBadge: "Windows PC",
					statusBadge: "Undetected marvel rivals cheats",
				},
				reviews: {
					title: "What players say",
					subtitle: "Recent feedback from Marvel Rivals Cheats buyers",
					outOf: "out of 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Get Access",
					readGuide: "Read guide",
					language: "Language",
					officialLanguageNote: "English is official; other locales are translated.",
					relatedPages: "Related pages",
				},
				footer: {
					explore: "Explore",
					help: "Help & legal",
					tagline: "Undetected Marvel Rivals cheats for PC.\nESP, wallhack, cooldown tracker & aimbot.",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | Undetected ESP, Aimbot &",
					description: "Marvel Rivals cheats for Windows PC — ESP, soft aim, radar, and NACE updates. Compare plans and buy.",
					h1: "Marvel Rivals Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Marvel Rivals Cheats is the undetected marvel rivals cheats package for Windows PC — built for Marvel Rivals on Windows PC. Marvel Rivals esp wallhack, cooldown tracker, and marvel rivals aimbot with NACE maintenance after every major patch.",
					imageAlt: "Marvel Rivals Cheats homepage hero — ESP and aimbot for Marvel Rivals",
					galleryTitle: "Marvel Rivals Cheats gallery — ESP, Aimbot and wallhack visuals",
					ctaPrimary: "Get Access",
					ctaSecondary: "See all features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why players choose Marvel Rivals cheats in 2026",
							paragraphs: [
								"Marvel Rivals rewards map awareness. Marvel Rivals Cheats combines ESP wallhack for enemy heroes, cooldown and ultimate cues, and configurable Aimbot so you can read fights before committing — in ranked, quick play, and competitive lobbies.",
								"Official seasons, patches, and anti-cheat updates come from <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a> and <a href=\"https://nace.nie.easebar.com/docs/\" target=\"_blank\" rel=\"noopener noreferrer\">NACE</a>. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href=\"/updates/\">Updates page</a>.",
								"Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include NACE maintenance rebuilds when anti-cheat or game patches require updates.",
								"Start with the <a href=\"/marvel-rivals-cheats/\">Marvel Rivals cheats pillar</a>, <a href=\"/marvel-rivals-esp/\">ESP guide</a>, <a href=\"/marvel-rivals-aimbot/\">Aimbot controls</a>, and <a href=\"/marvel-rivals-cheats/\">undetected status</a> pages if you are comparing tools before checkout.",
							],
						},
						{
							h2: "ESP wallhack, cooldown tracker, and Aimbot in one license",
							paragraphs: [
								"Instead of stacking separate tools, Marvel Rivals Cheats bundles player ESP wallhack, objective markers, cooldown tracker overlays, and Aimbot profiles in one undetected package built for ranked and quick play — covering both “marvel rivals cheats” and “marvel rivals cheats” search intent.",
								"Browse the <a href=\"/marvel-rivals-esp/\">ESP</a>, <a href=\"/marvel-rivals-aimbot/\">Aimbot</a>, <a href=\"/marvel-rivals-esp/\">wallhack</a>, and <a href=\"/marvel-rivals-cooldown-tracker/\">radar</a> pages for control details — or jump to <a href=\"/pricing/\">Pricing</a> for monthly and lifetime options.",
								"Before patch days, check <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a> for NetEase service health, then confirm our maintenance notes so you are not queueing on an outdated build.",
								"Ready to buy? Open <a href=\"/pricing/\">Pricing</a>, follow <a href=\"/setup/\">Setup</a> after delivery, and keep <a href=\"/faq/\">FAQ</a> / <a href=\"/support/\">Support</a> bookmarked for license questions.",
							],
						},
					],
					heroImage: "/images/hero-banner-new-2.webp",
				},
				"tarkov-esp": {
					title: "Marvel Rivals ESP 2026 | Player Boxes & Wallhack",
					description: "Marvel Rivals ESP for Windows PC — player boxes, objective markers, and distance readouts. Part of our undetected marvel rivals cheats for Marvel Rivals.",
					h1: "Marvel Rivals ESP — Player Boxes & Wallhack",
					intro: "Marvel Rivals esp visibility tools for ranked and quick play. Read enemy squads, heroes, ultimates, and objectives, and distance before you commit — toggleable marvel rivals esp wallhack overlays bundled in our marvel rivals cheats package.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "Marvel Rivals ESP overlay visuals",
					ctaPrimary: "Get Access",
					ctaSecondary: "Marvel Rivals wallhack guide",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "What Marvel Rivals ESP solves in matches",
							paragraphs: [
								"Marvel Rivals maps punish incomplete information. Marvel Rivals Cheats ESP wallhack helps you spot enemy squads early, spot heroes and heroes before they push your angle, and mark the objective worth the detour.",
								"On ranked, quick play, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a patchd squad. ESP ships bundled with cooldown overlays and Aimbot in one license.",
								"Marvel Rivals’s live seasons and map updates are published by NetEase (<a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a>). When POIs or objective rules shift, ESP categories stay useful because they track players and objectives — not a single static landmark.",
							],
						},
						{
							h2: "Player, boss, and hero ESP wallhack categories",
							paragraphs: [
								"Toggle enemy player outlines, priority hero markers, objective cues, and objective pins so only match-critical ESP wallhack overlays stay active during rotations.",
								"Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports ranked and quick play lobbies alike.",
								"Compare category detail on the <a href=\"/marvel-rivals-esp/\">wallhack page</a> and pair visibility with the <a href=\"/marvel-rivals-cooldown-tracker/\">cooldown tracker</a> for flanks outside your FOV.",
							],
							list: [
								"Enemy player ESP outlines with distance",
								"Loot and container markers for faster rotations",
								"Boss and objective awareness cues",
								"Toggleable categories to reduce overlay noise",
							],
						},
						{
							h2: "Undetected ESP with NACE maintenance",
							paragraphs: [
								"Marvel Rivals Cheats ESP wallhack is maintained for Marvel Rivals with rebuilds after NACE patches. Check the <a href=\"/updates/\">Updates page</a> before you queue — no cheat guarantees permanent undetected status.",
								"Read <a href=\"https://nace.nie.easebar.com/docs/\" target=\"_blank\" rel=\"noopener noreferrer\">NACE</a> for how anti-cheat updates ship, then cross-check our <a href=\"/updates/\">NACE bypass maintenance guide</a> after major patches.",
								"Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href=\"/setup/\">Setup guide</a> and tune overlays before your first match.",
							],
						},
						{
							h2: "ESP next steps — Aimbot, pricing, and support",
							paragraphs: [
								"ESP alone wins information wars; Aimbot covers the firefight. Review <a href=\"/marvel-rivals-aimbot/\">Aimbot controls</a> if you want one license for visibility and assist.",
								"Compare monthly ($35) and lifetime ($150) on <a href=\"/pricing/\">Pricing</a>, then keep <a href=\"/support/\">Support</a> ready if activation needs a human reply.",
								"Still researching? The <a href=\"/marvel-rivals-cheats/\">Marvel Rivals cheats pillar</a> and <a href=\"/marvel-rivals-cheats/\">2026 buyer guide</a> summarize the full stack.",
							],
						},
					],
					heroImage: "/images/hack-preview-image-1.webp",
				},
				"tarkov-aimbot": {
					title: "Marvel Rivals Aimbot 2026 | Soft Aim for Windows PC",
					description: "Marvel Rivals aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our marvel rivals cheats package.",
					h1: "Marvel Rivals Aimbot — Soft Aim for Windows PC",
					intro: "Configurable Aimbot tools for Marvel Rivals firefights. Smoothness, FOV, bone priority, and per-hero profiles — bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marvel Rivals Aimbot combat previews",
					ctaPrimary: "Get Access",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Aimbot tuned for Marvel Rivals combat pace",
							paragraphs: [
								"Marvel Rivals mixes long-range AR fights with close-quarters SMG pushes. Marvel Rivals Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.",
								"Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range close-range fights.",
								"Weapon balance and season rules change via <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a>. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.",
							],
						},
						{
							h2: "Per-weapon Aimbot profiles",
							paragraphs: [
								"Save separate Aimbot profiles for Duelists, Vanguards, and Strategists. Switch between long-range DMR fights and point holds without reopening menus every match.",
								"Prefer softer tracking? Read the <a href=\"/marvel-rivals-aimbot/\">soft aim guide</a>.",
								"Aimbot ships alongside <a href=\"/marvel-rivals-esp/\">ESP wallhack</a> and <a href=\"/marvel-rivals-cooldown-tracker/\">cooldown tracker</a> in the same Marvel Rivals Cheats license.",
							],
							list: [
								"Smoothness, FOV, and sensitivity sliders",
								"Bone priority and threat-based targeting",
								"Hotkeys to toggle Aimbot mid-match",
								"Per-weapon profile slots for AR / SMG / bolt-action",
							],
						},
						{
							h2: "NACE maintenance for undetected Aimbot",
							paragraphs: [
								"Marvel Rivals Cheats rebuilds Aimbot behavior when NACE or major Marvel Rivals patches land. Maintenance notes appear on the <a href=\"/updates/\">Updates page</a> so you know when a new build is live.",
								"Cross-check service health on <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a> and anti-cheat context on <a href=\"https://nace.nie.easebar.com/docs/\" target=\"_blank\" rel=\"noopener noreferrer\">NACE</a>, then follow our <a href=\"/updates/\">NACE maintenance guide</a> before queueing on patch day.",
								"Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.",
							],
						},
						{
							h2: "Buy Aimbot with ESP — pricing and setup",
							paragraphs: [
								"Every plan includes Aimbot plus ESP and radar. Compare options on <a href=\"/pricing/\">Pricing</a>, then activate with the <a href=\"/setup/\">Setup guide</a>.",
								"Questions about delivery or profiles? Use <a href=\"/faq/\">FAQ</a> or email <a href=\"/support/\">Support</a> with your order ID.",
								"Want the full control list first? Open <a href=\"/features/\">Features</a> before checkout.",
							],
						},
					],
					heroImage: "/images/hack-preview-image-2.webp",
				},
				features: {
					title: "Marvel Rivals Cheats Features | ESP, Soft Aim & Radar",
					description: "Full marvel rivals cheats feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.",
					h1: "Marvel Rivals Cheats Features — Full Control List",
					intro: "Every ESP wallhack, cooldown tracker, and Aimbot control included in the Marvel Rivals Cheats package for Marvel Rivals on Windows PC — with NACE maintenance after major patches.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Marvel Rivals Cheats feature gallery",
					ctaPrimary: "Get Access",
					ctaSecondary: "View pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ESP wallhack and visibility features",
							paragraphs: [
								"Enemy player ESP wallhack, boss and objective awareness cues, health and ultimate markers, distance readouts, snaplines, and toggleable ESP categories for match-critical overlays only.",
								"Team and enemy colour coding supports ranked and quick play. Deep-dive the <a href=\"/marvel-rivals-esp/\">ESP page</a> and <a href=\"/marvel-rivals-esp/\">wallhack guide</a> for category-level detail.",
								"Map and objective systems evolve with <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a> patch and map updates — toggleable ESP categories keep overlays useful when POIs rotate.",
							],
						},
						{
							h2: "Radar hack and Aimbot controls",
							paragraphs: [
								"cooldown tracker overlay with directional threat cues, configurable range for rotations and late-match objectives, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-hero profiles.",
								"All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Marvel Rivals sessions. See <a href=\"/marvel-rivals-cooldown-tracker/\">radar</a> and <a href=\"/marvel-rivals-aimbot/\">Aimbot</a> for settings walkthroughs.",
								"Prefer a menu-first workflow? The <a href=\"/marvel-rivals-cheats/\">mod menu page</a> explains mid-match toggles without alt-tabbing.",
							],
						},
						{
							h2: "Licensing, delivery, and NACE maintenance",
							paragraphs: [
								"Monthly ($35) and lifetime ($150) licenses with instant digital delivery. NACE maintenance rebuilds publish on the <a href=\"/updates/\">Updates page</a> after anti-cheat or game patches.",
								"Monitor <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a> on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href=\"/support/\">Support</a> and support@rivalshacks.com.",
								"Next step: compare plans on <a href=\"/pricing/\">Pricing</a> or read <a href=\"/marvel-rivals-cheats/\">how undetected maintenance works</a>.",
							],
						},
					],
					heroImage: "/images/blog-image-12.webp",
				},
				pricing: {
					title: "Marvel Rivals Cheats Pricing | $35/mo or $150 Life",
					description: "Marvel Rivals cheats pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.",
					h1: "Marvel Rivals Cheats Pricing — Monthly & Lifetime",
					intro: "Choose monthly or lifetime access to undetected Marvel Rivals Cheats — ESP wallhack, cooldown tracker, and Aimbot for Marvel Rivals on Windows PC. Instant digital delivery after payment.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Marvel Rivals Cheats package visuals",
					ctaPrimary: "Get Access",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Monthly and lifetime Marvel Rivals Cheats plans",
							paragraphs: [
								"Monthly license: $35 USD for 30 days of full ESP wallhack, cooldown tracker, and Aimbot access with NACE maintenance included during your term.",
								"Lifetime license: $150 USD for long-term access to the same undetected Marvel Rivals Cheats package — ideal if you play Marvel Rivals regularly across seasons.",
								"Both plans unlock the same feature stack described on <a href=\"/features/\">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.",
							],
						},
						{
							h2: "What every plan includes",
							paragraphs: [
								"Player ESP wallhack, objective markers, cooldown tracker overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after NACE or major Marvel Rivals patches.",
								"Season calendars and client updates come from <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a>. Active licenses receive rebuild access when we publish maintenance on <a href=\"/updates/\">Updates</a>.",
								"Digital delivery starts after payment confirmation. Keep your order reference for <a href=\"/support/\">Support</a> requests and follow <a href=\"/setup/\">Setup</a> for first launch.",
							],
						},
						{
							h2: "Refund, billing, and buying checklist",
							paragraphs: [
								"Review the <a href=\"/refund-policy/\">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.",
								"Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.",
								"Still comparing tools? Read <a href=\"/marvel-rivals-cheats/\">Marvel Rivals cheats</a>, <a href=\"/marvel-rivals-cheats/\">undetected status</a>, and <a href=\"/faq/\">FAQ</a> before you checkout.",
							],
						},
					],
					heroImage: "/images/blog-image-3.webp",
				},
				setup: {
					title: "Marvel Rivals Cheats Setup | Windows PC Guide",
					description: "Set up marvel rivals cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check NACE updates before your first queue.",
					h1: "Marvel Rivals Cheats Setup — Windows PC Guide",
					intro: "Install and configure Marvel Rivals Cheats for Marvel Rivals on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify NACE maintenance status before queueing.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Marvel Rivals Cheats setup visuals",
					ctaPrimary: "Get Access",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before you install Marvel Rivals Cheats",
							paragraphs: [
								"Confirm your order email and license details. Check the <a href=\"/updates/\">Updates page</a> for the latest NACE maintenance build before launching Marvel Rivals.",
								"Also glance at <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a> if NetEase services look unstable on patch day — a platform outage is not a license fault.",
								"Marvel Rivals Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.",
							],
						},
						{
							h2: "Activate ESP wallhack and Aimbot profiles",
							paragraphs: [
								"Follow the delivery instructions in your license email. Load default ESP wallhack categories for heroes, ultimates, and objectives — then tune tracker range and Aimbot smoothness to your playstyle.",
								"Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for NACE module live on <a href=\"/marvel-rivals-esp/\">ESP</a>, <a href=\"/marvel-rivals-aimbot/\">Aimbot</a>, and <a href=\"/marvel-rivals-cheats/\">mod menu</a>.",
								"Prefer a soft tracking feel? Start with the <a href=\"/marvel-rivals-aimbot/\">soft aim</a> recommendations before raising aggressiveness.",
							],
						},
						{
							h2: "After Marvel Rivals or NACE patches",
							paragraphs: [
								"When NetEase ships a major Marvel Rivals update or NACE patch, revisit Updates before queueing. Download maintenance rebuilds when posted.",
								"Official anti-cheat background: <a href=\"https://nace.nie.easebar.com/docs/\" target=\"_blank\" rel=\"noopener noreferrer\">NACE</a>. Our practical workflow is documented on the <a href=\"/updates/\">NACE bypass page</a> and <a href=\"/marvel-rivals-cheats/\">undetected guide</a>.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.",
							],
						},
					],
					heroImage: "/images/blog-image-5.webp",
				},
				updates: {
					title: "Marvel Rivals Cheats Updates | NACE Maintenance Log",
					description: "Marvel Rivals cheats update log: NACE rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.",
					h1: "Marvel Rivals Cheats Updates — Maintenance Log",
					intro: "Track NACE maintenance and Marvel Rivals patch rebuilds for the undetected ESP wallhack, cooldown tracker, and Aimbot package. Check here before queueing after major updates.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "Marvel Rivals patch and maintenance visuals",
					ctaPrimary: "Get Access",
					ctaSecondary: "Undetected status guide",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Why the Updates page matters",
							paragraphs: [
								"Marvel Rivals and NACE receive frequent patches. Marvel Rivals Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.",
								"Use <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a> for NetEase platform health and this page for Marvel Rivals Cheats build status — both matter on big update days.",
								"Checking this log before you queue reduces surprises after game days or seasonal launches on ranked and quick play.",
							],
						},
						{
							h2: "What maintenance entries cover",
							paragraphs: [
								"Entries note NACE compatibility status, rebuilt ESP wallhack overlays, tracker range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.",
								"Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href=\"/pricing/\">Pricing</a> if you need to renew.",
								"For context on why rebuilds happen, read the <a href=\"/updates/\">NACE bypass guide</a> and <a href=\"/marvel-rivals-cheats/\">undetected Marvel Rivals cheats</a> explainer.",
							],
						},
						{
							h2: "Staying undetected after patches",
							paragraphs: [
								"No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.",
								"Follow season notes from <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a>, then confirm our rebuild is live before you queue.",
								"For urgent status questions after a NACE update, contact <a href=\"/support/\">Support</a> with your license tier and last played build version.",
							],
						},
					],
					heroImage: "/images/hero-banner-new-2.webp",
				},
				faq: {
					title: "Marvel Rivals Cheats FAQ | ESP, Soft Aim & Radar Answers",
					description: "Marvel Rivals cheats FAQ: ESP boxes, soft aim, NACE maintenance, and pricing for PC. Clear answers before you buy.",
					h1: "Marvel Rivals Cheats FAQ — Common Questions",
					intro: "Answers about undetected Marvel Rivals Cheats — ESP wallhack, cooldown tracker, Aimbot, NACE maintenance, checkout, and Marvel Rivals compatibility on Windows PC.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "Marvel Rivals Cheats FAQ visuals",
					ctaPrimary: "Get Access",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "What is Marvel Rivals Cheats?",
							paragraphs: [
								"Marvel Rivals Cheats is an undetected cheat package for Marvel Rivals on Windows PC. It includes ESP wallhack, cooldown tracker-style awareness, and Aimbot controls with NACE maintenance updates.",
								"Packages cover ranked and quick play. Explore <a href=\"/features/\">Features</a> for the full control list and <a href=\"/marvel-rivals-esp/\">ESP</a> / <a href=\"/marvel-rivals-aimbot/\">Aimbot</a> for module detail.",
								"Marvel Rivals itself is published by NetEase (<a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a>). Cheats are third-party tools and may violate NetEase' rules — use is at your own risk.",
							],
						},
						{
							h2: "Are Marvel Rivals Cheats undetected in 2026?",
							paragraphs: [
								"Marvel Rivals Cheats is maintained with rebuilds after NACE and game patches. Check the <a href=\"/updates/\">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.",
								"Read <a href=\"/marvel-rivals-cheats/\">undetected Marvel Rivals cheats</a> and the <a href=\"/updates/\">NACE guide</a> for the maintenance workflow.",
								"Responsible settings and reading maintenance notes before queueing are essential.",
							],
						},
						{
							h2: "Delivery, pricing, and support",
							paragraphs: [
								"Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href=\"/pricing/\">Pricing</a>.",
								"Contact support@rivalshacks.com or the <a href=\"/support/\">Support page</a> with order details for setup or billing help. First launch steps are on <a href=\"/setup/\">Setup</a>.",
								"Refund eligibility is covered in the <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/blog-image-12.webp",
				},
				support: {
					title: "Marvel Rivals Cheats Support | Help & Contact",
					description: "Contact marvel rivals cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.",
					h1: "Marvel Rivals Cheats Support — Contact Us",
					intro: "Get help with Marvel Rivals Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and NACE maintenance for Marvel Rivals on Windows PC.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "Marvel Rivals Cheats support resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "When to contact support",
							paragraphs: [
								"Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after NACE maintenance rebuilds.",
								"Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.",
								"Many answers already live in <a href=\"/faq/\">FAQ</a>, <a href=\"/setup/\">Setup</a>, and <a href=\"/updates/\">Updates</a> — check those first for faster resolution.",
							],
						},
						{
							h2: "Response times and scope",
							paragraphs: [
								"Support requests are reviewed daily. Marvel Rivals Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for NetEase bans.",
								"Account and game policy questions belong with NetEase. We can help with license delivery and product configuration only.",
								"Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.",
							],
						},
						{
							h2: "Self-service resources",
							paragraphs: [
								"Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. NACE bypass notes live on the dedicated <a href=\"/updates/\">NACE page</a>.",
								"Email: support@rivalshacks.com",
								"Ready to purchase or renew? Open <a href=\"/pricing/\">Pricing</a>. Need feature detail first? See <a href=\"/features/\">Features</a>.",
							],
						},
					],
					heroImage: "/images/blog-image-3.webp",
				},
				undetected: {
					title: "Undetected Marvel Rivals Cheats 2026 | NACE Maintenance",
					description: "Undetected marvel rivals cheats with NACE maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.",
					h1: "Undetected Marvel Rivals Cheats — NACE Maintenance",
					intro: "How Marvel Rivals Cheats stays maintained for Marvel Rivals after NACE patches — ESP wallhack, cooldown tracker, and Aimbot rebuilds for Windows PC.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Marvel Rivals Cheats visuals",
					ctaPrimary: "Get Access",
					ctaSecondary: "NACE bypass guide",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "What undetected means for Marvel Rivals Cheats",
							paragraphs: [
								"Undetected Marvel Rivals Cheats means the package is actively maintained against NACE and major Marvel Rivals patches — not that detection is impossible forever.",
								"Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after NACE security updates.",
								"Anti-cheat technology is documented by <a href=\"https://nace.nie.easebar.com/docs/\" target=\"_blank\" rel=\"noopener noreferrer\">NACE</a>; Marvel Rivals client updates ship through <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a>. Undetected status is an ongoing process tied to those releases.",
							],
						},
						{
							h2: "NACE maintenance workflow",
							paragraphs: [
								"When NACE or Marvel Rivals updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href=\"/updates/\">Updates page</a>, and delivers rebuilt builds to active licenses.",
								"On patch mornings, also check <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a> for launcher outages that can look like product failures.",
								"Deep technical workflow: <a href=\"/updates/\">NACE bypass Marvel Rivals guide</a>. Feature stack: <a href=\"/features/\">Features</a>.",
							],
						},
						{
							h2: "Responsible use and next steps",
							paragraphs: [
								"Combine maintenance with conservative in-game settings. Read the <a href=\"/faq/\">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.",
								"Lifetime and monthly plans include rebuild access during active terms — see <a href=\"/pricing/\">Pricing</a>.",
								"New buyers should also read <a href=\"/marvel-rivals-cheats/\">Marvel Rivals cheats 2026</a> and complete <a href=\"/setup/\">Setup</a> after delivery.",
							],
						},
					],
					heroImage: "/images/blog-image-12.webp",
				},
				wallhack: {
					title: "Marvel Rivals Wallhack 2026 | ESP Boxes & Visibility",
					description: "Marvel Rivals wallhack ESP with player boxes and objective markers for Windows PC. Undetected marvel rivals cheats — learn overlays and buy.",
					h1: "Marvel Rivals Wallhack — ESP Boxes & Visibility",
					intro: "Marvel Rivals wallhack ESP for Marvel Rivals — see heroes, ultimates, and objectives, and objectives through toggleable wallhack overlays built for ranked and quick play.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Marvel Rivals wallhack ESP gallery",
					ctaPrimary: "Get Access",
					ctaSecondary: "Marvel Rivals ESP page",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Wallhack ESP vs raw aim tools",
							paragraphs: [
								"A Marvel Rivals wallhack focuses on information — player outlines, objective pins, ultimate threat cues — rather than automatic aiming. Marvel Rivals Cheats bundles wallhack ESP with radar and optional Aimbot in one license.",
								"Toggle categories so only the wallhack overlays you need stay active during rotations and objective holds.",
								"For the broader ESP keyword page see <a href=\"/marvel-rivals-esp/\">Marvel Rivals ESP</a>; for combat assist see <a href=\"/marvel-rivals-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "Map coverage for wallhack ESP",
							paragraphs: [
								"Wallhack overlays support ranked, quick play, and competitive lobbies with distance readouts and snaplines for engagement control.",
								"Season maps and POI changes are announced via <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a>. Wallhack remains useful because it tracks entities, not fixed landmarks alone.",
								"Pair wallhack awareness with <a href=\"/marvel-rivals-cooldown-tracker/\">cooldown tracker</a> cues for flanks during building and rooftop fights.",
							],
						},
						{
							h2: "Undetected wallhack maintenance",
							paragraphs: [
								"ESP wallhack modules rebuild after NACE patches. Follow the <a href=\"/updates/\">Updates page</a> and complete checkout for instant license delivery on Windows PC.",
								"Learn the full maintenance story on <a href=\"/marvel-rivals-cheats/\">undetected Marvel Rivals cheats</a> and <a href=\"/updates/\">NACE bypass</a>.",
								"Ready to buy? Compare <a href=\"/pricing/\">Pricing</a> or continue to the <a href=\"/marvel-rivals-esp/\">ESP hack</a> landing for alternate search wording.",
							],
						},
					],
					heroImage: "/images/hack-preview-image-1.webp",
				},
				radar: {
					title: "Marvel Rivals Cooldown Tracker 2026 | 2D Threat Overlay",
					description: "Marvel Rivals cooldown tracker for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our marvel rivals cheats package.",
					h1: "Marvel Rivals Cooldown Tracker — 2D Threat Awareness",
					intro: "cooldown tracker-style overlay for Marvel Rivals — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "Marvel Rivals cooldown tracker visuals",
					ctaPrimary: "Get Access",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Why cooldown tracker matters in Marvel Rivals",
							paragraphs: [
								"Team fights happen in three dimensions — rooftops, windows, and flanks. A cooldown tracker overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.",
								"Marvel Rivals Cheats radar complements <a href=\"/marvel-rivals-esp/\">ESP wallhack</a> markers during squad pushes and objective fights.",
								"Mode rules and seasonal changes come from <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a>. Radar range remains configurable when map scale or mobility meta shifts.",
							],
						},
						{
							h2: "Configurable tracker range",
							paragraphs: [
								"Adjust tracker range for early rotations versus tight objective holds. Directional cues highlight flanks during building clears and flank pushes across ranked and quick play.",
								"Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href=\"/marvel-rivals-cheats/\">mod menu</a> page.",
								"Combat follow-up lives on <a href=\"/marvel-rivals-aimbot/\">Aimbot</a> when you convert radar info into a fight.",
							],
						},
						{
							h2: "Maintenance and licensing",
							paragraphs: [
								"Radar hack modules receive NACE maintenance rebuilds with the full Marvel Rivals Cheats package. Monthly and lifetime licenses include digital delivery — see <a href=\"/pricing/\">Pricing</a>.",
								"Check <a href=\"/updates/\">Updates</a> after major Marvel Rivals patches before relying on previous radar configs.",
								"New to the stack? Start at <a href=\"/features/\">Features</a> or <a href=\"/marvel-rivals-cheats/\">undetected status</a>.",
							],
						},
					],
					heroImage: "/images/blog-image-5.webp",
				},
				battleye: {
					title: "NACE Bypass Marvel Rivals | Marvel Rivals Cheats Maintenance",
					description: "How marvel rivals cheats rebuild after NACE patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.",
					h1: "NACE Bypass — Marvel Rivals Cheats Maintenance",
					intro: "Understand NACE maintenance for Marvel Rivals Cheats — how ESP wallhack, cooldown tracker, and Aimbot rebuild after Marvel Rivals security updates.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "NACE maintenance visuals",
					ctaPrimary: "Get Access",
					ctaSecondary: "Check updates",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "NACE overview",
							paragraphs: [
								"NACE is NetEase' anti-cheat for Marvel Rivals on PC (see <a href=\"https://nace.nie.easebar.com/docs/\" target=\"_blank\" rel=\"noopener noreferrer\">NACE</a>). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.",
								"Marvel Rivals Cheats monitors NACE patch notes and Marvel Rivals seasonal updates from <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a> to schedule module reviews.",
								"“NACE bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.",
							],
						},
						{
							h2: "What happens after a NACE patch",
							paragraphs: [
								"The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href=\"/updates/\">Updates</a>, and ships rebuilt packages to active licenses.",
								"Confirm NetEase service health on <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a> if the launcher or matchmaking fails during the same window.",
								"Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href=\"/marvel-rivals-cheats/\">undetected Marvel Rivals cheats</a>.",
							],
						},
						{
							h2: "No permanent bypass guarantee",
							paragraphs: [
								"NACE bypass in practice means timely maintenance. Read the undetected guide, <a href=\"/faq/\">FAQ</a>, and Updates log before every session.",
								"Contact <a href=\"/support/\">Support</a> if activation fails immediately after a posted rebuild.",
								"Buying for the first time? Compare <a href=\"/pricing/\">Pricing</a> and finish <a href=\"/setup/\">Setup</a> only after Updates shows a live build.",
							],
						},
					],
					heroImage: "/images/blog-image-6.webp",
				},
				"cheats-2026": {
					title: "Marvel Rivals Cheats 2026 | ESP Soft Aim & Radar",
					description: "Best marvel rivals cheats 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected marvel rivals cheats with NACE maintenance — compare and buy.",
					h1: "Marvel Rivals Cheats 2026 — ESP, Soft Aim & Radar",
					intro: "The 2026 Marvel Rivals Cheats package for Marvel Rivals — undetected ESP wallhack, cooldown tracker, and Aimbot with NACE maintenance, instant delivery, and Windows PC support.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Marvel Rivals Cheats 2026 gallery",
					ctaPrimary: "Get Access",
					ctaSecondary: "Compare features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why marvel rivals cheats buyers choose Marvel Rivals Cheats in 2026",
							paragraphs: [
								"2026 seasons bring new maps, weapons, and NACE updates. Marvel Rivals Cheats bundles ESP wallhack, cooldown tracker, and Aimbot with active maintenance — not a stale prior-year build.",
								"Track official season messaging on <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a>, then use our <a href=\"/updates/\">Updates log</a> for product rebuild timing.",
								"Monthly ($35) and lifetime ($150) plans cover ranked and quick play loops — see <a href=\"/pricing/\">Pricing</a>.",
							],
						},
						{
							h2: "Full feature stack for 2026 buyers",
							paragraphs: [
								"Player ESP wallhack, objective markers, cooldown tracker overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.",
								"Deep links: <a href=\"/marvel-rivals-cheats/\">Marvel Rivals cheats pillar</a>, <a href=\"/marvel-rivals-esp/\">ESP</a>, <a href=\"/marvel-rivals-aimbot/\">Aimbot</a>, <a href=\"/marvel-rivals-esp/\">wallhack</a>, <a href=\"/marvel-rivals-cooldown-tracker/\">radar</a>, <a href=\"/marvel-rivals-cheats/\">undetected</a>.",
								"Instant digital delivery after checkout confirmation worldwide.",
							],
						},
						{
							h2: "Before you buy in 2026",
							paragraphs: [
								"Read the <a href=\"/marvel-rivals-cheats/\">Marvel Rivals cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.",
								"Also compare the <a href=\"/marvel-rivals-cheats/\">Marvel Rivals cheats</a> checklist, <a href=\"/blog/marvel-rivals-cheats-guide/\">2026 blog guide</a>, and <a href=\"/faq/\">FAQ</a>.",
								"Support is available at support@rivalshacks.com via the <a href=\"/support/\">Support page</a>.",
							],
						},
					],
					heroImage: "/images/hero-banner-new-2.webp",
				},
				hacks: {
					title: "Marvel Rivals Cheats 2026 | Undetected ESP Aimbot Guide",
					description: "Marvel Rivals cheats for Windows PC: undetected ESP wallhack, cooldown tracker, and Aimbot with NACE maintenance. Compare marvel rivals cheats options and buy",
					h1: "Marvel Rivals Cheats — Undetected ESP, Aimbot & Wallhack",
					intro: "Marvel Rivals cheats for ranked and quick play combine ESP wallhack visibility, cooldown and ultimate cues, and Aimbot controls in one undetected Windows PC license — maintained after NACE patches. This is the pillar guide for marvel rivals cheats in 2026.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Marvel Rivals cheats gallery — ESP, Aimbot, wallhack",
					ctaPrimary: "Get Access",
					ctaSecondary: "See undetected guide",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "What Marvel Rivals cheats include in 2026",
							paragraphs: [
								"Players searching for Marvel Rivals cheats usually want visibility and combat tools without stacking separate downloads. Marvel Rivals Cheats bundles player ESP wallhack, objective markers, cooldown tracker overlays, and configurable Aimbot in one maintained package — the same toolkit often called marvel rivals cheats.",
								"Coverage spans ranked and quick play with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.",
								"Official game updates come from <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a>; our hacks package tracks those releases via the <a href=\"/updates/\">Updates page</a>. Cross-check platform health on <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a> before patch-day queues.",
							],
						},
						{
							h2: "How this Marvel Rivals cheats pillar fits nearby pages",
							paragraphs: [
								"Use this pillar for the core product overview. For year-specific buying notes, see the <a href=\"/marvel-rivals-cheats/\">marvel rivals cheats 2026</a> and <a href=\"/marvel-rivals-cheats/\">Marvel Rivals cheats</a> pages cover buyer comparisons in cheats wording.",
								"Deep-dive modules: <a href=\"/marvel-rivals-esp/\">Marvel Rivals ESP</a>, <a href=\"/marvel-rivals-aimbot/\">Marvel Rivals Aimbot</a>, <a href=\"/marvel-rivals-esp/\">wallhack</a>, <a href=\"/marvel-rivals-cooldown-tracker/\">cooldown tracker</a>, and <a href=\"/marvel-rivals-aimbot/\">soft aim</a>.",
								"Blog guides expand NACE keyword: <a href=\"/blog/marvel-rivals-cheats-guide/\">Marvel Rivals cheats guide</a>, <a href=\"/blog/marvel-rivals-cheats-guide/\">cheats buyers guide</a>, and <a href=\"/blog/what-hwid-spoofer-does-for-safety/\">HWID spoofer notes</a>.",
							],
						},
						{
							h2: "Marvel Rivals cheats vs single-feature tools",
							paragraphs: [
								"Standalone hacks often cover only wallhack or only aim assist. Marvel Rivals Cheats maps the full match loop: read enemy squads, track priority heroes and objectives, track cooldowns, and tune Aimbot per weapon class.",
								"Compare the <a href=\"/marvel-rivals-esp/\">ESP</a>, <a href=\"/marvel-rivals-aimbot/\">Aimbot</a>, and <a href=\"/features/\">Features</a> pages — or review <a href=\"/pricing/\">Pricing</a> for monthly and lifetime licenses.",
								"Related landings: <a href=\"/setup/\">cheat download</a>, <a href=\"/marvel-rivals-cheats/\">mod menu</a>, <a href=\"/marvel-rivals-aimbot/\">aimbot</a>, <a href=\"/marvel-rivals-esp/\">ESP</a>.",
							],
						},
						{
							h2: "Undetected Marvel Rivals cheats with NACE maintenance",
							paragraphs: [
								"Undetected Marvel Rivals cheats require rebuilds after NACE and major Marvel Rivals patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.",
								"See <a href=\"https://nace.nie.easebar.com/docs/\" target=\"_blank\" rel=\"noopener noreferrer\">NACE</a> for anti-cheat background and our <a href=\"/updates/\">NACE bypass guide</a> for the practical workflow. Pair with <a href=\"/marvel-rivals-cheats/\">undetected Marvel Rivals cheats</a> for status language buyers expect.",
								"Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href=\"/setup/\">Setup</a> and keep <a href=\"/support/\">Support</a> ready with your order ID.",
							],
						},
					],
					heroImage: "/images/hero-banner-new-2.webp",
				},
				"cheat-download": {
					title: "Marvel Rivals Hack Download 2026 | Instant Access",
					description: "Marvel Rivals cheat download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.",
					h1: "Marvel Rivals Hack Download — Instant License Delivery",
					intro: "How Marvel Rivals cheat download works for Marvel Rivals — digital license delivery after payment confirmation, with ESP wallhack, cooldown tracker, and Aimbot access on Windows PC.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "Marvel Rivals cheat download visuals",
					ctaPrimary: "Get Access",
					ctaSecondary: "Setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How Marvel Rivals cheat download delivery works",
							paragraphs: [
								"After checkout confirms payment, Marvel Rivals Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.",
								"Keep your order confirmation and license email ready for the <a href=\"/setup/\">Setup guide</a> and Support requests.",
								"If NetEase services are down, check <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a> before assuming a download failure.",
							],
						},
						{
							h2: "What your download unlocks",
							paragraphs: [
								"Every Marvel Rivals cheat download includes player ESP wallhack, health and ultimate markers, cooldown tracker overlays, Aimbot profiles, and in-client toggles for ranked and quick play.",
								"Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href=\"/pricing/\">Pricing page</a>.",
								"Feature detail: <a href=\"/features/\">Features</a>. Module pages: <a href=\"/marvel-rivals-esp/\">ESP</a>, <a href=\"/marvel-rivals-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "After purchase — setup and updates",
							paragraphs: [
								"Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Marvel Rivals or NACE patches ship, check the <a href=\"/updates/\">Updates page</a> for maintenance rebuilds.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.",
								"Also read <a href=\"/marvel-rivals-cheats/\">undetected status</a> so you know what “download ready” means after a patch.",
							],
						},
					],
					heroImage: "/images/blog-image-3.webp",
				},
				"mod-menu": {
					title: "Marvel Rivals Mod Menu 2026 | ESP & Soft Aim Toggles",
					description: "Marvel Rivals mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected marvel rivals cheats package.",
					h1: "Marvel Rivals Mod Menu — In-Client Control Panel",
					intro: "Marvel Rivals mod menu controls for Marvel Rivals — toggle ESP wallhack categories, tracker range, and Aimbot profiles mid-match without leaving your Marvel Rivals session on Windows PC.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "Marvel Rivals mod menu gallery",
					ctaPrimary: "Get Access",
					ctaSecondary: "Full feature list",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What a Marvel Rivals mod menu controls",
							paragraphs: [
								"A Marvel Rivals mod menu is the in-client panel where you enable ESP wallhack overlays, adjust tracker range, and switch Aimbot profiles during live matches. Marvel Rivals Cheats keeps those toggles accessible with hotkeys.",
								"Toggle player outlines, objective markers, ability cues, and per-hero Aimbot settings without alt-tabbing out of Marvel Rivals.",
								"Control deep-dives: <a href=\"/marvel-rivals-esp/\">ESP</a>, <a href=\"/marvel-rivals-aimbot/\">Aimbot</a>, <a href=\"/marvel-rivals-cooldown-tracker/\">radar</a>.",
							],
						},
						{
							h2: "Mod menu categories for ranked and quick play",
							paragraphs: [
								"Separate ESP wallhack categories for heroes, ultimates, and objectives, and priority heroes let you reduce overlay noise during rotations and objective holds.",
								"Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a> seasons change fight distances and mobility.",
								"Soft tracking players should start with <a href=\"/marvel-rivals-aimbot/\">soft aim</a> profiles before aggressive FOV.",
							],
						},
						{
							h2: "Maintained mod menu after NACE patches",
							paragraphs: [
								"Marvel Rivals mod menu behavior is rebuilt when NACE or major Marvel Rivals updates land. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">NACE bypass guide</a> before queueing on patch days.",
								"Checkout with instant digital delivery for monthly and lifetime licenses — see <a href=\"/pricing/\">Pricing</a>.",
								"Need install steps? Open <a href=\"/setup/\">Setup</a> after your license email arrives.",
							],
						},
					],
					heroImage: "/images/blog-image-5.webp",
				},
				"soft-aim": {
					title: "Marvel Rivals Soft Aim 2026 | Smooth Aimbot Settings",
					description: "Marvel Rivals soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our marvel rivals cheats with ESP boxes.",
					h1: "Marvel Rivals Soft Aim — Smooth Aimbot Controls",
					intro: "Marvel Rivals soft aim settings for Marvel Rivals — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Marvel Rivals soft aim gallery",
					ctaPrimary: "Get Access",
					ctaSecondary: "Aimbot controls",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "What Marvel Rivals soft aim means",
							paragraphs: [
								"Marvel Rivals soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Marvel Rivals Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.",
								"Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.",
								"Full Aimbot documentation: <a href=\"/marvel-rivals-aimbot/\">Marvel Rivals Aimbot</a>. Alternate wording: <a href=\"/marvel-rivals-aimbot/\">aimbot hack</a>.",
							],
						},
						{
							h2: "Soft aim profiles per weapon class",
							paragraphs: [
								"Save separate soft aim profiles for Duelists, Vanguards, and Strategists. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.",
								"Weapon TTKs shift with <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a> balance patches — retune smoothness after major combat updates.",
								"Soft aim ships alongside <a href=\"/marvel-rivals-esp/\">ESP wallhack</a> and <a href=\"/marvel-rivals-cooldown-tracker/\">cooldown tracker</a> overlays.",
							],
						},
						{
							h2: "Undetected soft aim with NACE maintenance",
							paragraphs: [
								"Aimbot modules rebuild after NACE patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.",
								"Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href=\"/pricing/\">Pricing</a>.",
								"Activation help: <a href=\"/setup/\">Setup</a> · status questions: <a href=\"/support/\">Support</a>.",
							],
						},
					],
					heroImage: "/images/hack-preview-image-2.webp",
				},
				"best-cheats": {
					title: "Best Marvel Rivals Cheats 2026 | Buyer Guide",
					description: "Best marvel rivals cheats for 2026: ESP boxes, soft aim, and NACE maintenance on Windows PC. Use this checklist before checkout.",
					h1: "Best Marvel Rivals Cheats — 2026 Buyer Guide",
					intro: "Compare the Marvel Rivals cheats for Marvel Rivals in 2026 — undetected ESP wallhack, cooldown tracker, and Aimbot in one maintained package with NACE rebuilds and instant delivery.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "Best Marvel Rivals cheats gallery",
					ctaPrimary: "Get Access",
					ctaSecondary: "Compare pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "What makes the Marvel Rivals cheats in 2026",
							paragraphs: [
								"The Marvel Rivals cheats combine active NACE maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.",
								"Marvel Rivals Cheats covers ranked and quick play with in-client toggles and post-patch rebuilds.",
								"Verify the live game is healthy via <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a>, then confirm our <a href=\"/updates/\">Updates</a> note before you judge any package “best.”",
							],
						},
						{
							h2: "Best Marvel Rivals cheats feature checklist",
							paragraphs: [
								"Look for player ESP wallhack, objective markers, cooldown tracker overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Marvel Rivals patches.",
								"Review <a href=\"/features/\">Features</a>, <a href=\"/marvel-rivals-cheats/\">undetected status</a>, and <a href=\"/marvel-rivals-cheats/\">Marvel Rivals cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.",
								"Module pages worth opening: <a href=\"/marvel-rivals-esp/\">ESP</a>, <a href=\"/marvel-rivals-aimbot/\">Aimbot</a>, <a href=\"/marvel-rivals-cheats/\">hacks</a>.",
							],
						},
						{
							h2: "Buying the Marvel Rivals cheats safely",
							paragraphs: [
								"Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.",
								"No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.",
								"Remember: using cheats can violate NetEase terms. Proceed only if you accept that risk.",
							],
						},
					],
					heroImage: "/images/hero-banner-new-2.webp",
				},
				"aimbot-hack": {
					title: "Marvel Rivals Aimbot Hack 2026 | Soft Aim Assist",
					description: "Marvel Rivals aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our marvel rivals cheats package.",
					h1: "Marvel Rivals Aimbot Hack — Soft Aim Assist",
					intro: "Marvel Rivals aimbot hack tools for Marvel Rivals — smoothness, FOV, bone priority, per-hero profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Marvel Rivals aimbot hack gallery",
					ctaPrimary: "Get Access",
					ctaSecondary: "Aimbot settings",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Marvel Rivals aimbot hack vs visibility tools",
							paragraphs: [
								"A Marvel Rivals aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Marvel Rivals Cheats bundles aimbot hack modules with visibility overlays in one license.",
								"Smoothness, FOV, and sensitivity controls tune assist for Marvel Rivals combat pace across ranked and quick play.",
								"Prefer softer tracking language? See <a href=\"/marvel-rivals-aimbot/\">soft aim</a>. Full settings: <a href=\"/marvel-rivals-aimbot/\">Aimbot page</a>.",
							],
						},
						{
							h2: "Aimbot hack controls and hotkeys",
							paragraphs: [
								"Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-match objectives.",
								"Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.",
								"Balance patches from <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a> can change ideal FOV — retune after major weapon updates.",
							],
						},
						{
							h2: "Undetected aimbot hack maintenance",
							paragraphs: [
								"Aimbot hack signatures rebuild after NACE updates. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">NACE bypass guide</a> before queueing after patch days.",
								"Checkout with instant digital delivery for Windows 10 and 11 — <a href=\"/pricing/\">Pricing</a>.",
								"Pair with <a href=\"/marvel-rivals-esp/\">ESP</a> for the full information + assist loop.",
							],
						},
					],
					heroImage: "/images/hack-preview-image-2.webp",
				},
				"esp-hack": {
					title: "Marvel Rivals ESP Hack 2026 | Player Boxes & Loot",
					description: "Marvel Rivals ESP hack with player boxes and objective markers for Windows PC. Undetected marvel rivals cheats with — see overlays and buy.",
					h1: "Marvel Rivals ESP Hack — Player Boxes Guide",
					intro: "Marvel Rivals ESP hack overlays for Marvel Rivals — player outlines, ultimate threat cues, health and ultimate markers with distance readouts across ranked and quick play.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Marvel Rivals ESP hack gallery",
					ctaPrimary: "Get Access",
					ctaSecondary: "ESP controls",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "What a Marvel Rivals ESP hack shows",
							paragraphs: [
								"A Marvel Rivals ESP hack renders enemy player outlines, vehicle positions, and objective pins through walls and terrain — closing the information gap before you commit to a fight.",
								"Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.",
								"Canonical visibility guide: <a href=\"/marvel-rivals-esp/\">Marvel Rivals ESP</a>. Wallhack wording: <a href=\"/marvel-rivals-esp/\">wallhack</a>.",
							],
						},
						{
							h2: "ESP hack categories for matches",
							paragraphs: [
								"Toggle player ESP hack, objective markers, objective pins, and ability cues independently so only match-critical overlays stay active during rotations.",
								"Team and enemy colour coding supports ranked and quick play.",
								"Map and objective changes publish through <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a> — keep categories toggled to what the current map rewards.",
							],
						},
						{
							h2: "Undetected ESP hack with NACE maintenance",
							paragraphs: [
								"ESP hack modules rebuild after NACE and Marvel Rivals patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — pair ESP hack awareness with <a href=\"/marvel-rivals-cooldown-tracker/\">cooldown tracker</a> for flank reads.",
								"Licenses deliver digitally after checkout on Windows PC — see <a href=\"/pricing/\">Pricing</a>.",
								"Install steps: <a href=\"/setup/\">Setup</a>. Status questions: <a href=\"/marvel-rivals-cheats/\">undetected guide</a>.",
							],
						},
					],
					heroImage: "/images/hack-preview-image-1.webp",
				},
				"unlock-all": {
					title: "Marvel Rivals Unlock All 2026 | What It Really Means",
					description: "Marvel Rivals unlock all explained vs real marvel rivals cheats — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.",
					h1: "Marvel Rivals Unlock All — What Players Search For",
					intro: "Marvel Rivals unlock all is a common search term for Marvel Rivals — this page clarifies what unlock-all tools claim versus the ESP wallhack, cooldown tracker, and Aimbot tools Marvel Rivals Cheats actually provides on Windows PC.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Marvel Rivals unlock all guide visuals",
					ctaPrimary: "Get Access",
					ctaSecondary: "See features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What Marvel Rivals unlock all usually means",
							paragraphs: [
								"Marvel Rivals unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.",
								"Marvel Rivals Cheats focuses on in-match awareness — player ESP, objective markers, cooldown overlays, and configurable Aimbot — not account-wide cosmetic unlocks.",
								"Cosmetics and season progression items are sold through <a href=\"https://www.marvelrivals.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Marvel Rivals</a>. Be wary of unlock-all downloads that promise free skins — they are often scams.",
							],
						},
						{
							h2: "Visibility tools vs unlock-all claims",
							paragraphs: [
								"ESP wallhack helps you spot enemy squads, priority heroes, and the objective during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.",
								"For loadout planning during a match, health and ultimate markers speed map rotations — see the <a href=\"/marvel-rivals-esp/\">ESP</a> and <a href=\"/features/\">Features</a> pages for the full tool list.",
								"Related: <a href=\"/marvel-rivals-cheats/\">Marvel Rivals cheats</a> and <a href=\"/marvel-rivals-cheats/\">Marvel Rivals cheats</a>.",
							],
						},
						{
							h2: "Buying Marvel Rivals Cheats for the right reasons",
							paragraphs: [
								"If you need undetected ESP wallhack, cooldown tracker, and Aimbot for Marvel Rivals on Windows PC, compare <a href=\"/pricing/\">Pricing</a> and read the <a href=\"/setup/\">Setup guide</a> before checkout.",
								"Check the <a href=\"/updates/\">Updates page</a> after NACE patches — maintenance rebuilds publish for active licenses.",
								"Questions? <a href=\"/faq/\">FAQ</a> and <a href=\"/support/\">Support</a> cover delivery and configuration — not cosmetic unlocks.",
							],
						},
					],
					heroImage: "/images/blog-image-5.webp",
				},
				privacy: {
					title: "Privacy Policy | Marvel Rivals Cheats",
					description: "Privacy policy for Marvel Rivals Cheats. How we handle support emails, order data, and checkout for marvel rivals cheats licenses on rivalshacks.com.",
					h1: "Privacy Policy",
					intro: "How Marvel Rivals Cheats handles information when you browse rivalshacks.com or contact support about a Marvel Rivals license.",
					imageAlt: "Marvel Rivals Cheats privacy policy page",
					galleryTitle: "Marvel Rivals Cheats legal resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms of use",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we may collect",
							paragraphs: [
								"We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.",
								"We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.",
							],
							list: [
								"Contact details you send by email",
								"Order references for support requests",
								"Basic technical data for site security",
							],
						},
						{
							h2: "How information is used",
							paragraphs: [
								"Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.",
								"Analytics may use aggregated traffic data without identifying individual Marvel Rivals Cheats customers.",
							],
						},
						{
							h2: "Your choices and contact",
							paragraphs: [
								"You may request correction or deletion of support email data by contacting support@rivalshacks.com with your request details.",
								"Policy updates publish on this page. Continued use of rivalshacks.com after updates means you accept the revised policy. Also see <a href=\"/terms/\">Terms of Use</a> and <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/blog-image-6.webp",
				},
				refund: {
					title: "Refund Policy | Marvel Rivals Cheats",
					description: "Refund policy for Marvel Rivals Cheats. Digital delivery terms and eligibility for marvel rivals cheats packages with ESP, soft aim, and radar.",
					h1: "Refund Policy",
					intro: "Refund terms for Marvel Rivals Cheats licenses — ESP wallhack, cooldown tracker, and Aimbot packages purchased through checkout for Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats refund policy page",
					galleryTitle: "Marvel Rivals Cheats billing resources",
					ctaPrimary: "Contact support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery and eligibility",
							paragraphs: [
								"Marvel Rivals Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.",
								"Submit refund requests within 24 hours of purchase with your order ID and reason.",
							],
						},
						{
							h2: "When refunds may be approved",
							paragraphs: [
								"Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.",
								"Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href=\"/terms/\">Terms of Use</a>.",
							],
						},
						{
							h2: "How to request a refund",
							paragraphs: [
								"Email support@rivalshacks.com with subject \"Refund Request\", your order ID, purchase date, and issue summary — or use the <a href=\"/support/\">Support page</a>.",
								"Approved refunds process back to the original payment method when possible. Pricing details live on <a href=\"/pricing/\">Pricing</a>.",
							],
						},
					],
					heroImage: "/images/blog-image-3.webp",
				},
				terms: {
					title: "Terms of Use 2026 | Marvel Rivals Cheats Rules",
					description: "Terms of use for rivalshacks.com and Marvel Rivals Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.",
					h1: "Terms of Use",
					intro: "Terms governing use of rivalshacks.com and Marvel Rivals Cheats licenses for Marvel Rivals on Windows PC.",
					imageAlt: "Marvel Rivals Cheats terms of use page",
					galleryTitle: "Marvel Rivals Cheats legal pages",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance and license scope",
							paragraphs: [
								"By purchasing or using Marvel Rivals Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Marvel Rivals on Windows PC only.",
								"Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.",
							],
						},
						{
							h2: "Risk and anti-cheat disclaimer",
							paragraphs: [
								"Using cheats in Marvel Rivals may violate NetEase terms and result in account penalties. Marvel Rivals Cheats provides maintenance but does not guarantee undetected status or account safety.",
								"You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href=\"/marvel-rivals-cheats/\">undetected status</a>.",
							],
						},
						{
							h2: "Changes and governing law",
							paragraphs: [
								"We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.",
								"Contact support@rivalshacks.com for questions. Related policies: <a href=\"/privacy-policy/\">Privacy</a> and <a href=\"/refund-policy/\">Refunds</a>.",
							],
						},
					],
					heroImage: "/images/blog-image-12.webp",
				},
			},
		},
		es: {
			ui: {
				nav: {
					home: "Inicio",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funciones",
					pricing: "Precios",
					setup: "Instalación",
					updates: "Actualizaciones",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Trucos Marvel Rivals indetectables",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "ESP wallhack, cooldown tracker y Aimbot para Marvel Rivals en PC Windows — mantenimiento NACE incluido.",
					subtitleShort: "ESP, cooldown tracker y Aimbot para Marvel Rivals PC",
					buyNow: "Comprar ahora",
					seeFeatures: "Ver funciones",
				},
				trust: {
					status: "En línea",
					statusNote: "El paquete Marvel Rivals Cheats está activo para Marvel Rivals en PC Windows.",
					statusShort: "Activo",
					delivery: "Entrega digital instantánea",
					platform: "Windows 10 y 11",
					antiCheat: "Mantenimiento NACE incluido",
					antiCheatShort: "NACE incluido",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "Añadir al carrito",
					monthly: "Mensual",
					lifetime: "De por vida",
					available: "Disponible ahora",
					gameBadge: "Marvel Rivals",
					platformBadge: "PC Windows",
					statusBadge: "Paquete indetectable",
				},
				reviews: {
					title: "Lo que dicen los jugadores",
					subtitle: "Comentarios recientes de compradores de Marvel Rivals Cheats",
					outOf: "de 5",
					countLabel: "reseñas",
				},
				common: {
					buyNow: "Comprar ahora",
					readGuide: "Leer guía",
					language: "Idioma",
					officialLanguageNote: "El inglés es el idioma oficial. Otras versiones están traducidas para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ayuda y legal",
					tagline: "ESP, wallhack, cooldown tracker y Aimbot indetectables para Marvel Rivals — tras el pago.",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP, Wallhack y Aimbot",
					description: "Trucos Marvel Rivals indetectables para Marvel Rivals en PC. ESP wallhack, cooldown tracker y Aimbot con mantenimiento NACE. Entrega digital instantánea.",
					h1: "Marvel Rivals Cheats — ESP, Wallhack y Aimbot indetectables",
					intro: "Paquete undetected para Marvel Rivals en Windows PC: ESP wallhack, cooldown tracker y Aimbot con mantenimiento NACE tras cada parche.",
					imageAlt: "Marvel Rivals ESP player tags hack",
					galleryTitle: "Galería Marvel Rivals Cheats — ESP, Aimbot y wallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por qué eligen Marvel Rivals Cheats en 2026",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Ideal para leer escuadrones enemigos en ranked y quick play.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "ESP wallhack, cooldown tracker y Aimbot en una licencia",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Una licencia en lugar de herramientas separadas.",
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Marvel Rivals | Cajas de jugador y wallhack",
					description: "ESP Marvel Rivals: player boxes, objective markers, and wallhack overlays. entrega digital instantánea. indetectables — Windows PC.",
					h1: "ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. player boxes, objective markers, and wallhack overlays.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Marvel Rivals | Controles soft aim",
					description: "Aimbot Marvel Rivals: soft aim, FOV, and per-hero Aimbot profiles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. soft aim, FOV, and per-hero Aimbot profiles.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				features: {
					title: "Funciones | Lista completa de funciones",
					description: "Funciones: ESP, soft aim, cooldown tracker controls. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Funciones",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Funciones.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "Funciones",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funciones",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. ESP, soft aim, cooldown tracker controls.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				pricing: {
					title: "Precios | Mensual y de por vida",
					description: "Precios: $35 monthly or $150 lifetime licenses. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Precios",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Precios.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Precios",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Precios",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				setup: {
					title: "Instalación | Guía de instalación PC",
					description: "Instalación: Windows PC activation and first-launch setup. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Instalación",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Instalación.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalación",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalación",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Windows PC activation and first-launch setup.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				updates: {
					title: "Actualizaciones | Registro NACE",
					description: "Actualizaciones: NACE patch status and rebuild notes. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Actualizaciones",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Actualizaciones.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "Actualizaciones",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Actualizaciones",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. NACE patch status and rebuild notes.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Preguntas frecuentes",
					description: "FAQ: ESP, soft aim, delivery, and NACE questions. entrega digital instantánea. indetectables — Windows PC.",
					h1: "FAQ",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. FAQ.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. ESP, soft aim, delivery, and NACE questions.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				support: {
					title: "Soporte | Ayuda y contacto",
					description: "Soporte: order help and license support contact. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soporte",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Soporte.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "Soporte",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Soporte",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. order help and license support contact.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				undetected: {
					title: "Trucos indetectables | Estado indetectable",
					description: "Trucos indetectables: undetected maintenance after NACE patches. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos indetectables",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Trucos indetectables.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Trucos indetectables",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Trucos indetectables",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. undetected maintenance after NACE patches.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Marvel Rivals | Visibilidad ESP",
					description: "Wallhack Marvel Rivals: wallhack ESP for heroes, health, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Wallhack Marvel Rivals",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Wallhack Marvel Rivals.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Wallhack Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. wallhack ESP for heroes, health, and distance.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				radar: {
					title: "Tracker de cooldown | cooldown tracker 2D de amenazas",
					description: "Tracker de cooldown: cooldown tracker cues for flanks and rotations. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Tracker de cooldown",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Tracker de cooldown.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "Tracker de cooldown",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Tracker de cooldown",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. cooldown tracker cues for flanks and rotations.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass NACE | Mantenimiento de parches",
					description: "Bypass NACE: how NACE updates are handled for Marvel Rivals hacks. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Bypass NACE",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Bypass NACE.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "Bypass NACE",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass NACE",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. how NACE updates are handled for Marvel Rivals hacks.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Trucos Marvel Rivals 2026 | Guía del comprador",
					description: "Trucos Marvel Rivals 2026: 2026 Marvel Rivals cheats checklist before checkout. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Marvel Rivals 2026",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Trucos Marvel Rivals 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Trucos Marvel Rivals 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Trucos Marvel Rivals 2026",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. 2026 Marvel Rivals cheats checklist before checkout.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				hacks: {
					title: "Trucos Marvel Rivals | Guía ESP y Aimbot",
					description: "Trucos Marvel Rivals: the Marvel Rivals hacks pillar for ESP and Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Marvel Rivals",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Trucos Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "Trucos Marvel Rivals",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Trucos Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descarga Marvel Rivals Cheats | Acceso instantáneo",
					description: "Descarga Marvel Rivals Cheats: digital license download after payment. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Descarga Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Descarga Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "Descarga Marvel Rivals Cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descarga Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. digital license download after payment.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menú mod Marvel Rivals | Controles en partida",
					description: "Menú mod Marvel Rivals: in-client ESP and soft aim toggles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Menú mod Marvel Rivals",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Menú mod Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "Menú mod Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menú mod Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. in-client ESP and soft aim toggles.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marvel Rivals | Ajustes soft aim",
					description: "Soft aim Marvel Rivals: smooth soft aim settings for Windows PC. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soft aim Marvel Rivals",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Soft aim Marvel Rivals.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Soft aim Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. smooth soft aim settings for Windows PC.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Mejores trucos Marvel Rivals | Lista de compra",
					description: "Mejores trucos Marvel Rivals: what to compare before buying Marvel Rivals cheats. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Mejores trucos Marvel Rivals",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Mejores trucos Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "Mejores trucos Marvel Rivals",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Mejores trucos Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. what to compare before buying Marvel Rivals cheats.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Marvel Rivals | Asistencia soft aim",
					description: "Hack aimbot Marvel Rivals: undetected Aimbot hack assist for Marvel Rivals. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Hack aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. undetected Aimbot hack assist for Marvel Rivals.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Marvel Rivals | Cajas y héroes",
					description: "Hack ESP Marvel Rivals: ESP hack boxes, objective pins, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Hack ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Hack ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Hack ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. ESP hack boxes, objective pins, and distance.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marvel Rivals | Qué significa",
					description: "Unlock all Marvel Rivals: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Unlock all Marvel Rivals",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Unlock all Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Unlock all Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidad | Marvel Rivals Cheats",
					description: "Política de privacidad for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de privacidad",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Política de privacidad for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer términos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Información que recopilamos",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "Uso de la información",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Tus derechos",
							paragraphs: [
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Marvel Rivals Cheats",
					description: "Política de reembolso for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de reembolso",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Política de reembolso for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Contact email,  order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "Cuándo se aprueba",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de NACE. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Cómo solicitar",
							paragraphs: [
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "Términos de uso | Marvel Rivals Cheats",
					description: "Términos de uso for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Términos de uso",
					intro: "Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Términos de uso for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceptación de términos",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Contact email,  order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen NACE maintenance.",
							],
						},
						{
							h2: "Riesgos y anti-cheat",
							paragraphs: [
								"Marvel Rivals Cheats ofrece ESP wallhack, cooldown tracker y marvel rivals aimbot indetectables para Marvel Rivals en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "Cambios",
							paragraphs: [
								"Contacta support@rivalshacks.com para solicitudes legales o de soporte.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
		fr: {
			ui: {
				nav: {
					home: "Accueil",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fonctions",
					pricing: "Tarifs",
					setup: "Installation",
					updates: "Mises à jour",
					faq: "FAQ",
					buyNow: "Acheter",
				},
				hero: {
					accent: "Triches Marvel Rivals indétectables",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "ESP wallhack, cooldown tracker et Aimbot pour Marvel Rivals sur PC Windows — maintenance NACE incluse.",
					subtitleShort: "ESP, cooldown tracker et Aimbot pour Marvel Rivals PC",
					buyNow: "Acheter",
					seeFeatures: "Voir les fonctions",
				},
				trust: {
					status: "En ligne",
					statusNote: "Le pack Marvel Rivals Cheats est actif pour Marvel Rivals sur PC Windows.",
					statusShort: "Actif",
					delivery: "Livraison numérique instantanée",
					platform: "Windows 10 et 11",
					antiCheat: "Maintenance NACE incluse",
					antiCheatShort: "NACE inclus",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "Ajouter au panier",
					monthly: "Mensuel",
					lifetime: "À vie",
					available: "Disponible",
					gameBadge: "Marvel Rivals",
					platformBadge: "PC Windows",
					statusBadge: "Pack indétectable",
				},
				reviews: {
					title: "Ce que disent les joueurs",
					subtitle: "Avis récents des acheteurs Marvel Rivals Cheats",
					outOf: "sur 5",
					countLabel: "avis",
				},
				common: {
					buyNow: "Acheter",
					readGuide: "Lire le guide",
					language: "Langue",
					officialLanguageNote: "L'anglais est la langue officielle. Les autres versions sont traduites pour le SEO mondial.",
					relatedPages: "Pages associées",
				},
				footer: {
					explore: "Explorer",
					help: "Aide et légal",
					tagline: "ESP, wallhack, cooldown tracker et Aimbot indétectables pour Marvel Rivals — after payment.",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP, Wallhack et Aimbot",
					description: "Triches Marvel Rivals indétectables pour Marvel Rivals sur PC. ESP wallhack, cooldown tracker et Aimbot avec maintenance NACE. Livraison numérique instantanée.",
					h1: "Marvel Rivals Cheats — ESP, Wallhack et Aimbot indétectables",
					intro: "Pack undetected pour Marvel Rivals sur PC Windows : ESP wallhack, cooldown tracker et Aimbot avec maintenance NACE après chaque patch.",
					imageAlt: "Marvel Rivals ESP player tags hack",
					galleryTitle: "Galerie Marvel Rivals Cheats — ESP, Aimbot et wallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Pourquoi choisir Marvel Rivals Cheats en 2026",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Parfait pour lire les escouades ennemies en ranked et quick play.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "ESP wallhack, cooldown tracker et Aimbot en une licence",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Une licence au lieu d'outils séparés.",
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Marvel Rivals | Boîtes joueur et wallhack",
					description: "ESP Marvel Rivals: player boxes, objective markers, and wallhack overlays. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. player boxes, objective markers, and wallhack overlays.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Marvel Rivals | Contrôles soft aim",
					description: "Aimbot Marvel Rivals: soft aim, FOV, and per-hero Aimbot profiles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. soft aim, FOV, and per-hero Aimbot profiles.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				features: {
					title: "Fonctions | Liste complète des fonctions",
					description: "Fonctions: ESP, soft aim, cooldown tracker controls. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Fonctions",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Fonctions.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "Fonctions",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fonctions",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. ESP, soft aim, cooldown tracker controls.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				pricing: {
					title: "Tarifs | Mensuel et à vie",
					description: "Tarifs: $35 monthly or $150 lifetime licenses. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Tarifs",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Tarifs.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Tarifs",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarifs",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				setup: {
					title: "Installation | Guide d'installation PC",
					description: "Installation: Windows PC activation and first-launch setup. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Installation",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Installation.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Windows PC activation and first-launch setup.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				updates: {
					title: "Mises à jour | Journal NACE",
					description: "Mises à jour: NACE patch status and rebuild notes. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Mises à jour",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Mises à jour.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "Mises à jour",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Mises à jour",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. NACE patch status and rebuild notes.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Questions fréquentes",
					description: "FAQ: ESP, soft aim, delivery, and NACE questions. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "FAQ",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. FAQ.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. ESP, soft aim, delivery, and NACE questions.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				support: {
					title: "Support | Aide et contact",
					description: "Support: order help and license support contact. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Support",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Support.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. order help and license support contact.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				undetected: {
					title: "Triches indétectables | Statut indétectable",
					description: "Triches indétectables: undetected maintenance after NACE patches. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches indétectables",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Triches indétectables.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Triches indétectables",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Triches indétectables",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. undetected maintenance after NACE patches.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Marvel Rivals | Visibilité ESP",
					description: "Wallhack Marvel Rivals: wallhack ESP for heroes, health, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Wallhack Marvel Rivals",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Wallhack Marvel Rivals.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Wallhack Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. wallhack ESP for heroes, health, and distance.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				radar: {
					title: "Tracker de cooldown | cooldown tracker 2D des menaces",
					description: "Tracker de cooldown: cooldown tracker cues for flanks and rotations. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Tracker de cooldown",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Tracker de cooldown.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "Tracker de cooldown",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Tracker de cooldown",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. cooldown tracker cues for flanks and rotations.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass NACE | Maintenance des patchs",
					description: "Bypass NACE: how NACE updates are handled for Marvel Rivals hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Bypass NACE",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Bypass NACE.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "Bypass NACE",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass NACE",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. how NACE updates are handled for Marvel Rivals hacks.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Triches Marvel Rivals 2026 | Guide acheteur",
					description: "Triches Marvel Rivals 2026: 2026 Marvel Rivals cheats checklist before checkout. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Marvel Rivals 2026",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Triches Marvel Rivals 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Triches Marvel Rivals 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Triches Marvel Rivals 2026",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. 2026 Marvel Rivals cheats checklist before checkout.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				hacks: {
					title: "Triches Marvel Rivals | Guide ESP et Aimbot",
					description: "Triches Marvel Rivals: the Marvel Rivals hacks pillar for ESP and Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Marvel Rivals",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Triches Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "Triches Marvel Rivals",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Triches Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Téléchargement Marvel Rivals Cheats | Accès instantané",
					description: "Téléchargement Marvel Rivals Cheats: digital license download after payment. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Téléchargement Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Téléchargement Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "Téléchargement Marvel Rivals Cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Téléchargement Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. digital license download after payment.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Marvel Rivals | Contrôles en jeu",
					description: "Menu mod Marvel Rivals: in-client ESP and soft aim toggles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Menu mod Marvel Rivals",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Menu mod Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "Menu mod Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. in-client ESP and soft aim toggles.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marvel Rivals | Réglages soft aim",
					description: "Soft aim Marvel Rivals: smooth soft aim settings for Windows PC. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Soft aim Marvel Rivals",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Soft aim Marvel Rivals.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Soft aim Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. smooth soft aim settings for Windows PC.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Meilleures triches Marvel Rivals | Checklist acheteur",
					description: "Meilleures triches Marvel Rivals: what to compare before buying Marvel Rivals cheats. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Meilleures triches Marvel Rivals",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Meilleures triches Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "Meilleures triches Marvel Rivals",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Meilleures triches Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. what to compare before buying Marvel Rivals cheats.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Marvel Rivals | Assistance soft aim",
					description: "Hack aimbot Marvel Rivals: undetected Aimbot hack assist for Marvel Rivals. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Hack aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. undetected Aimbot hack assist for Marvel Rivals.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Marvel Rivals | Boîtes et héros",
					description: "Hack ESP Marvel Rivals: ESP hack boxes, objective pins, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Hack ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Hack ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Hack ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. ESP hack boxes, objective pins, and distance.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marvel Rivals | Ce que ça signifie",
					description: "Unlock all Marvel Rivals: unlock-all searches vs real ESP and Aimbot tools. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Unlock all Marvel Rivals",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Unlock all Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Unlock all Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Acheter",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				privacy: {
					title: "Politique de confidentialité | Marvel Rivals Cheats",
					description: "Politique de confidentialité for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de confidentialité",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Politique de confidentialité for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Lire conditions",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informations collectées",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "Utilisation",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Vos droits",
							paragraphs: [
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "Politique de remboursement | Marvel Rivals Cheats",
					description: "Politique de remboursement for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de remboursement",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Politique de remboursement for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livraison numérique",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Contact email,  order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "Approbation",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs NACE. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Comment demander",
							paragraphs: [
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "Conditions d'utilisation | Marvel Rivals Cheats",
					description: "Conditions d'utilisation for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Conditions d'utilisation",
					intro: "Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Conditions d'utilisation for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptation",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Contact email,  order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance NACE.",
							],
						},
						{
							h2: "Risques",
							paragraphs: [
								"Marvel Rivals Cheats combine ESP wallhack, cooldown tracker et marvel rivals aimbot indétectables pour Marvel Rivals sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "Modifications",
							paragraphs: [
								"Contactez support@rivalshacks.com pour le support ou les demandes légales.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
		de: {
			ui: {
				nav: {
					home: "Start",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Preise",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kaufen",
				},
				hero: {
					accent: "Undetected Marvel Rivals Cheats",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "ESP Wallhack, Cooldown Tracker und Aimbot für Marvel Rivals auf Windows PC — NACE-Wartung inklusive.",
					subtitleShort: "ESP, cooldown tracker & Aimbot für Marvel Rivals PC",
					buyNow: "Jetzt kaufen",
					seeFeatures: "Features ansehen",
				},
				trust: {
					status: "Online",
					statusNote: "Marvel Rivals Cheats Paket ist live für Marvel Rivals auf Windows PC.",
					statusShort: "Live",
					delivery: "Sofortige digitale Lieferung",
					platform: "Windows 10 & 11",
					antiCheat: "NACE-Wartung unterstützt",
					antiCheatShort: "NACE Support",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "In den Warenkorb",
					monthly: "Monatlich",
					lifetime: "Lifetime",
					available: "Jetzt verfügbar",
					gameBadge: "Marvel Rivals",
					platformBadge: "Windows PC",
					statusBadge: "Undetected Paket",
				},
				reviews: {
					title: "Was Spieler sagen",
					subtitle: "Aktuelles Feedback von Marvel Rivals Cheats Käufern",
					outOf: "von 5",
					countLabel: "Bewertungen",
				},
				common: {
					buyNow: "Jetzt kaufen",
					readGuide: "Guide lesen",
					language: "Sprache",
					officialLanguageNote: "Englisch ist die offizielle Sprache. Andere Locales sind für globales SEO übersetzt.",
					relatedPages: "Verwandte Seiten",
				},
				footer: {
					explore: "Entdecken",
					help: "Hilfe & Rechtliches",
					tagline: "Undetected ESP, Wallhack, cooldown tracker und Aimbot für Marvel Rivals — nach der Zahlung.",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Marvel Rivals Cheats für Marvel Rivals auf PC. ESP Wallhack, Cooldown Tracker und Aimbot mit NACE-Wartung. Sofortige digitale Lieferung.",
					h1: "Marvel Rivals Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC Paket für Marvel Rivals: ESP Wallhack, cooldown tracker und Aimbot mit NACE-Wartung nach jedem Patch.",
					imageAlt: "Marvel Rivals ESP player tags hack",
					galleryTitle: "Marvel Rivals Cheats Galerie — ESP, Aimbot und Wallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warum Marvel Rivals Cheats 2026 führt",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Ideal um feindliche Squads in ranked und quick play zu lesen.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "ESP Wallhack, cooldown tracker und Aimbot in einer Lizenz",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Eine Lizenz statt separater Tools.",
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "Marvel Rivals ESP | Spielerboxen & Wallhack",
					description: "Marvel Rivals ESP: player boxes, objective markers, and wallhack overlays. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marvel Rivals ESP",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Marvel Rivals ESP.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "Marvel Rivals ESP",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Marvel Rivals ESP",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. player boxes, objective markers, and wallhack overlays.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Marvel Rivals Aimbot | Soft-Aim Steuerung",
					description: "Marvel Rivals Aimbot: soft aim, FOV, and per-hero Aimbot profiles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marvel Rivals Aimbot",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Marvel Rivals Aimbot.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marvel Rivals Aimbot",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals Aimbot",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. soft aim, FOV, and per-hero Aimbot profiles.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				features: {
					title: "Features | Vollständige Feature-Liste",
					description: "Features: ESP, soft aim, cooldown tracker controls. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Features",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Features.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "Features",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Features",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. ESP, soft aim, cooldown tracker controls.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				pricing: {
					title: "Preise | Monatlich & Lifetime",
					description: "Preise: $35 monthly or $150 lifetime licenses. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Preise",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Preise.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Preise",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preise",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. $35 monthly or $150 lifetime licenses.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup-Anleitung",
					description: "Setup: Windows PC activation and first-launch setup. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Setup",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Setup.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Windows PC activation and first-launch setup.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | NACE Wartungslog",
					description: "Updates: NACE patch status and rebuild notes. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Updates",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Updates.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. NACE patch status and rebuild notes.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Häufige Fragen",
					description: "FAQ: ESP, soft aim, delivery, and NACE questions. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. FAQ.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. ESP, soft aim, delivery, and NACE questions.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Hilfe & Kontakt",
					description: "Support: order help and license support contact. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Support",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Support.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. order help and license support contact.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Undetected Status",
					description: "Undetected Cheats: undetected maintenance after NACE patches. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Undetected Cheats.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. undetected maintenance after NACE patches.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Marvel Rivals Wallhack | ESP Sichtbarkeit",
					description: "Marvel Rivals Wallhack: wallhack ESP for heroes, health, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marvel Rivals Wallhack",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Marvel Rivals Wallhack.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Marvel Rivals Wallhack",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals Wallhack",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. wallhack ESP for heroes, health, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				radar: {
					title: "Cooldown-Tracker | 2D Bedrohungsradar",
					description: "Cooldown-Tracker: cooldown tracker cues for flanks and rotations. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Cooldown-Tracker",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Cooldown-Tracker.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "Cooldown-Tracker",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Cooldown-Tracker",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. cooldown tracker cues for flanks and rotations.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				battleye: {
					title: "NACE Bypass | Patch-Wartung",
					description: "NACE Bypass: how NACE updates are handled for Marvel Rivals hacks. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "NACE Bypass",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. NACE Bypass.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "NACE Bypass",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "NACE Bypass",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. how NACE updates are handled for Marvel Rivals hacks.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Marvel Rivals Cheats 2026 | Käuferleitfaden",
					description: "Marvel Rivals Cheats 2026: 2026 Marvel Rivals cheats checklist before checkout. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marvel Rivals Cheats 2026",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Marvel Rivals Cheats 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Marvel Rivals Cheats 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Marvel Rivals Cheats 2026",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. 2026 Marvel Rivals cheats checklist before checkout.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				hacks: {
					title: "Marvel Rivals Cheats | ESP Aimbot Guide",
					description: "Marvel Rivals Cheats: the Marvel Rivals hacks pillar for ESP and Aimbot. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "Marvel Rivals Cheats",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Marvel Rivals Cheat Download | Sofortzugang",
					description: "Marvel Rivals Cheat Download: digital license download after payment. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marvel Rivals Cheat Download",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Marvel Rivals Cheat Download.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "Marvel Rivals Cheat Download",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Marvel Rivals Cheat Download",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. digital license download after payment.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Marvel Rivals Mod-Menü | In-Game Toggles",
					description: "Marvel Rivals Mod-Menü: in-client ESP and soft aim toggles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marvel Rivals Mod-Menü",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Marvel Rivals Mod-Menü.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "Marvel Rivals Mod-Menü",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Mod-Menü",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. in-client ESP and soft aim toggles.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Marvel Rivals Soft Aim | Soft-Aim Einstellungen",
					description: "Marvel Rivals Soft Aim: smooth soft aim settings for Windows PC. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marvel Rivals Soft Aim",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Marvel Rivals Soft Aim.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Marvel Rivals Soft Aim",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Marvel Rivals Soft Aim",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. smooth soft aim settings for Windows PC.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Marvel Rivals Cheats | Käufer-Checkliste",
					description: "Beste Marvel Rivals Cheats: what to compare before buying Marvel Rivals cheats. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Beste Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Beste Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "Beste Marvel Rivals Cheats",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. what to compare before buying Marvel Rivals cheats.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Marvel Rivals Aimbot Hack | Soft-Aim Assist",
					description: "Marvel Rivals Aimbot Hack: undetected Aimbot hack assist for Marvel Rivals. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marvel Rivals Aimbot Hack",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Marvel Rivals Aimbot Hack.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Marvel Rivals Aimbot Hack",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Marvel Rivals Aimbot Hack",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. undetected Aimbot hack assist for Marvel Rivals.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Marvel Rivals ESP Hack | Boxen & Loot",
					description: "Marvel Rivals ESP Hack: ESP hack boxes, objective pins, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marvel Rivals ESP Hack",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Marvel Rivals ESP Hack.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Marvel Rivals ESP Hack",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals ESP Hack",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. ESP hack boxes, objective pins, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Marvel Rivals Unlock All | Was es bedeutet",
					description: "Marvel Rivals Unlock All: unlock-all searches vs real ESP and Aimbot tools. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marvel Rivals Unlock All",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Marvel Rivals Unlock All.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Marvel Rivals Unlock All",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Jetzt kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Unlock All",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				privacy: {
					title: "Datenschutz | Marvel Rivals Cheats",
					description: "Datenschutz for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Datenschutz",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Datenschutz for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Nutzungsbedingungen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Erhobene Daten",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "Datennutzung",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Ihre Rechte",
							paragraphs: [
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "Rückerstattung | Marvel Rivals Cheats",
					description: "Rückerstattung for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Rückerstattung",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Rückerstattung for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale Lieferung",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Contact email,  order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "Genehmigung",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach NACE-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Anfrage stellen",
							paragraphs: [
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "Nutzungsbedingungen | Marvel Rivals Cheats",
					description: "Nutzungsbedingungen for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Nutzungsbedingungen",
					intro: "Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Nutzungsbedingungen for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Annahme",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Contact email,  order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. NACE-Wartung.",
							],
						},
						{
							h2: "Risiko",
							paragraphs: [
								"Marvel Rivals Cheats bündelt ESP wallhack, cooldown tracker und marvel rivals aimbot als undetected Paket für Marvel Rivals auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "Änderungen",
							paragraphs: [
								"support@rivalshacks.com für Support und rechtliche Anfragen.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
		pt: {
			ui: {
				nav: {
					home: "Início",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Recursos",
					pricing: "Preços",
					setup: "Instalação",
					updates: "Atualizações",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Cheats Marvel Rivals indetectáveis",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "ESP wallhack, cooldown tracker e Aimbot para Marvel Rivals no PC Windows — manutenção NACE incluída.",
					subtitleShort: "ESP, cooldown tracker e Aimbot para Marvel Rivals PC",
					buyNow: "Comprar agora",
					seeFeatures: "Ver recursos",
				},
				trust: {
					status: "Online",
					statusNote: "O pacote Marvel Rivals Cheats está ativo para Marvel Rivals no PC Windows.",
					statusShort: "Ativo",
					delivery: "Entrega digital instantânea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenção NACE incluída",
					antiCheatShort: "NACE incluído",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "Adicionar ao carrinho",
					monthly: "Mensal",
					lifetime: "Vitalício",
					available: "Disponível agora",
					gameBadge: "Marvel Rivals",
					platformBadge: "PC Windows",
					statusBadge: "Pacote indetectável",
				},
				reviews: {
					title: "O que os jogadores dizem",
					subtitle: "Feedback recente de compradores Marvel Rivals Cheats",
					outOf: "de 5",
					countLabel: "avaliações",
				},
				common: {
					buyNow: "Comprar agora",
					readGuide: "Ler guia",
					language: "Idioma",
					officialLanguageNote: "Inglês é o idioma oficial. Outros idiomas são traduzidos para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ajuda e legal",
					tagline: "ESP, wallhack, cooldown tracker e Aimbot indetectáveis para Marvel Rivals — after payment.",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP, Wallhack e Aimbot",
					description: "Cheats Marvel Rivals indetectáveis para Marvel Rivals no PC. ESP wallhack, cooldown tracker e Aimbot com manutenção NACE. Entrega digital instantánea.",
					h1: "Marvel Rivals Cheats — ESP, Wallhack e Aimbot indetectáveis",
					intro: "Pacote undetected para Marvel Rivals no Windows PC: ESP wallhack, cooldown tracker e Aimbot com manutenção NACE após cada patch.",
					imageAlt: "Marvel Rivals ESP player tags hack",
					galleryTitle: "Galeria Marvel Rivals Cheats — ESP, Aimbot e wallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por que escolher Marvel Rivals Cheats em 2026",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Ideal para ler esquadrões inimigos em ranked e quick play.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "ESP wallhack, cooldown tracker e Aimbot numa licença",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Uma licença em vez de ferramentas separadas.",
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Marvel Rivals | Caixas de jogador e wallhack",
					description: "ESP Marvel Rivals: player boxes, objective markers, and wallhack overlays. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. player boxes, objective markers, and wallhack overlays.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Marvel Rivals | Controles soft aim",
					description: "Aimbot Marvel Rivals: soft aim, FOV, and per-hero Aimbot profiles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. soft aim, FOV, and per-hero Aimbot profiles.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				features: {
					title: "Recursos | Lista completa de recursos",
					description: "Recursos: ESP, soft aim, cooldown tracker controls. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Recursos",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Recursos.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "Recursos",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Recursos",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. ESP, soft aim, cooldown tracker controls.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				pricing: {
					title: "Preços | Mensal e vitalício",
					description: "Preços: $35 monthly or $150 lifetime licenses. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Preços",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Preços.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Preços",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preços",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				setup: {
					title: "Instalação | Guia de instalação PC",
					description: "Instalação: Windows PC activation and first-launch setup. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Instalação",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Instalação.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalação",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalação",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Windows PC activation and first-launch setup.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				updates: {
					title: "Atualizações | Registro NACE",
					description: "Atualizações: NACE patch status and rebuild notes. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Atualizações",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Atualizações.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "Atualizações",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Atualizações",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. NACE patch status and rebuild notes.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Perguntas frequentes",
					description: "FAQ: ESP, soft aim, delivery, and NACE questions. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "FAQ",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. FAQ.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. ESP, soft aim, delivery, and NACE questions.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				support: {
					title: "Suporte | Ajuda e contato",
					description: "Suporte: order help and license support contact. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Suporte",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Suporte.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "Suporte",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suporte",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. order help and license support contact.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats indetectáveis | Status indetectável",
					description: "Cheats indetectáveis: undetected maintenance after NACE patches. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats indetectáveis",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Cheats indetectáveis.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats indetectáveis",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Cheats indetectáveis",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. undetected maintenance after NACE patches.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Marvel Rivals | Visibilidade ESP",
					description: "Wallhack Marvel Rivals: wallhack ESP for heroes, health, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Wallhack Marvel Rivals",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Wallhack Marvel Rivals.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Wallhack Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. wallhack ESP for heroes, health, and distance.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				radar: {
					title: "Tracker de cooldown | cooldown tracker 2D de ameaças",
					description: "Tracker de cooldown: cooldown tracker cues for flanks and rotations. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Tracker de cooldown",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Tracker de cooldown.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "Tracker de cooldown",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Tracker de cooldown",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. cooldown tracker cues for flanks and rotations.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass NACE | Manutenção de patches",
					description: "Bypass NACE: how NACE updates are handled for Marvel Rivals hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Bypass NACE",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Bypass NACE.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "Bypass NACE",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass NACE",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. how NACE updates are handled for Marvel Rivals hacks.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Marvel Rivals 2026 | Guia do comprador",
					description: "Cheats Marvel Rivals 2026: 2026 Marvel Rivals cheats checklist before checkout. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Marvel Rivals 2026",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Cheats Marvel Rivals 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Cheats Marvel Rivals 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Cheats Marvel Rivals 2026",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. 2026 Marvel Rivals cheats checklist before checkout.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Marvel Rivals | Guia ESP e Aimbot",
					description: "Cheats Marvel Rivals: the Marvel Rivals hacks pillar for ESP and Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Marvel Rivals",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Cheats Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "Cheats Marvel Rivals",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Marvel Rivals Cheats | Acesso instantâneo",
					description: "Download Marvel Rivals Cheats: digital license download after payment. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Download Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Download Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "Download Marvel Rivals Cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. digital license download after payment.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Marvel Rivals | Controles in-game",
					description: "Menu mod Marvel Rivals: in-client ESP and soft aim toggles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Menu mod Marvel Rivals",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Menu mod Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "Menu mod Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. in-client ESP and soft aim toggles.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marvel Rivals | Ajustes soft aim",
					description: "Soft aim Marvel Rivals: smooth soft aim settings for Windows PC. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Soft aim Marvel Rivals",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Soft aim Marvel Rivals.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Soft aim Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. smooth soft aim settings for Windows PC.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Melhores cheats Marvel Rivals | Checklist do comprador",
					description: "Melhores cheats Marvel Rivals: what to compare before buying Marvel Rivals cheats. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Melhores cheats Marvel Rivals",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Melhores cheats Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "Melhores cheats Marvel Rivals",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Melhores cheats Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. what to compare before buying Marvel Rivals cheats.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Marvel Rivals | Assistência soft aim",
					description: "Hack aimbot Marvel Rivals: undetected Aimbot hack assist for Marvel Rivals. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Hack aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. undetected Aimbot hack assist for Marvel Rivals.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Marvel Rivals | Caixas e heróis",
					description: "Hack ESP Marvel Rivals: ESP hack boxes, objective pins, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Hack ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Hack ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Hack ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. ESP hack boxes, objective pins, and distance.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marvel Rivals | O que significa",
					description: "Unlock all Marvel Rivals: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Unlock all Marvel Rivals",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Unlock all Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Unlock all Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Comprar ahora",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidade | Marvel Rivals Cheats",
					description: "Política de privacidade for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de privacidade",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Política de privacidade for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Marvel Rivals Cheats",
					description: "Política de reembolso for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de reembolso",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Política de reembolso for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Contact email,  order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches NACE. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "Termos de uso | Marvel Rivals Cheats",
					description: "Termos de uso for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termos de uso",
					intro: "Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Termos de uso for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Contact email,  order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção NACE.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Marvel Rivals Cheats reúne ESP wallhack, cooldown tracker e marvel rivals aimbot indetectáveis para Marvel Rivals no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contacte support@rivalshacks.com para suporte ou questões legais.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
		it: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funzioni",
					pricing: "Prezzi",
					setup: "Setup",
					updates: "Aggiornamenti",
					faq: "FAQ",
					buyNow: "Acquista",
				},
				hero: {
					accent: "Cheat Marvel Rivals indetectable",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "ESP wallhack, cooldown tracker e Aimbot per Marvel Rivals su PC Windows — manutenzione NACE inclusa.",
					subtitleShort: "ESP, cooldown tracker e Aimbot per Marvel Rivals PC",
					buyNow: "Acquista ora",
					seeFeatures: "Vedi funzioni",
				},
				trust: {
					status: "Online",
					statusNote: "Il pacchetto Marvel Rivals Cheats è attivo per Marvel Rivals su PC Windows.",
					statusShort: "Attivo",
					delivery: "Consegna digitale istantanea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenzione NACE supportata",
					antiCheatShort: "NACE supportato",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "Aggiungi al carrello",
					monthly: "Mensile",
					lifetime: "A vita",
					available: "Disponibile ora",
					gameBadge: "Marvel Rivals",
					platformBadge: "PC Windows",
					statusBadge: "Pacchetto indetectable",
				},
				reviews: {
					title: "Cosa dicono i giocatori",
					subtitle: "Feedback recente dagli acquirenti Marvel Rivals Cheats",
					outOf: "su 5",
					countLabel: "recensioni",
				},
				common: {
					buyNow: "Acquista ora",
					readGuide: "Leggi guida",
					language: "Lingua",
					officialLanguageNote: "L'inglese è la lingua ufficiale. Altre versioni sono tradotte per SEO globale.",
					relatedPages: "Pagine correlate",
				},
				footer: {
					explore: "Esplora",
					help: "Aiuto e legale",
					tagline: "ESP, wallhack, cooldown tracker e Aimbot indetectable per Marvel Rivals — after payment.",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP, Wallhack e Aimbot",
					description: "Cheat Marvel Rivals indetectable per Marvel Rivals su PC. ESP wallhack, cooldown tracker e Aimbot con manutenzione NACE. Consegna digitale istantanea.",
					h1: "Marvel Rivals Cheats — ESP, Wallhack e Aimbot indetectable",
					intro: "Pacchetto undetected per Marvel Rivals su PC Windows: ESP wallhack, cooldown tracker e Aimbot con manutenzione NACE dopo ogni patch.",
					imageAlt: "Marvel Rivals ESP player tags hack",
					galleryTitle: "Galleria Marvel Rivals Cheats — ESP, Aimbot e wallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Perché scegliere Marvel Rivals Cheats nel 2026",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Ideale per leggere squadre nemiche in ranked e quick play.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "ESP wallhack, cooldown tracker e Aimbot in una licenza",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Una licenza invece di tool separati.",
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Marvel Rivals | Box giocatore e wallhack",
					description: "ESP Marvel Rivals: player boxes, objective markers, and wallhack overlays. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. player boxes, objective markers, and wallhack overlays.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Marvel Rivals | Controlli soft aim",
					description: "Aimbot Marvel Rivals: soft aim, FOV, and per-hero Aimbot profiles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. soft aim, FOV, and per-hero Aimbot profiles.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				features: {
					title: "Funzioni | Elenco completo funzioni",
					description: "Funzioni: ESP, soft aim, cooldown tracker controls. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Funzioni",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Funzioni.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "Funzioni",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funzioni",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. ESP, soft aim, cooldown tracker controls.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				pricing: {
					title: "Prezzi | Mensile e lifetime",
					description: "Prezzi: $35 monthly or $150 lifetime licenses. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Prezzi",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Prezzi.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prezzi",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prezzi",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				setup: {
					title: "Setup | Guida setup PC",
					description: "Setup: Windows PC activation and first-launch setup. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Setup",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Setup.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Windows PC activation and first-launch setup.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				updates: {
					title: "Aggiornamenti | Log manutenzione NACE",
					description: "Aggiornamenti: NACE patch status and rebuild notes. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aggiornamenti",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Aggiornamenti.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "Aggiornamenti",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Aggiornamenti",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. NACE patch status and rebuild notes.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Domande frequenti",
					description: "FAQ: ESP, soft aim, delivery, and NACE questions. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "FAQ",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. FAQ.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. ESP, soft aim, delivery, and NACE questions.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				support: {
					title: "Supporto | Aiuto e contatto",
					description: "Supporto: order help and license support contact. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Supporto",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Supporto.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "Supporto",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Supporto",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. order help and license support contact.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat indetectable | Stato indetectable",
					description: "Cheat indetectable: undetected maintenance after NACE patches. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat indetectable",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Cheat indetectable.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat indetectable",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Cheat indetectable",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. undetected maintenance after NACE patches.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Marvel Rivals | Visibilità ESP",
					description: "Wallhack Marvel Rivals: wallhack ESP for heroes, health, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Wallhack Marvel Rivals",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Wallhack Marvel Rivals.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Wallhack Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. wallhack ESP for heroes, health, and distance.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				radar: {
					title: "Tracker cooldown | Tracker cooldown",
					description: "Tracker cooldown: cooldown tracker cues for flanks and rotations. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Tracker cooldown",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Tracker cooldown.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "Tracker cooldown",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Tracker cooldown",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. cooldown tracker cues for flanks and rotations.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass NACE | Manutenzione patch",
					description: "Bypass NACE: how NACE updates are handled for Marvel Rivals hacks. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Bypass NACE",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Bypass NACE.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "Bypass NACE",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass NACE",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. how NACE updates are handled for Marvel Rivals hacks.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Marvel Rivals 2026 | Guida acquirente",
					description: "Cheat Marvel Rivals 2026: 2026 Marvel Rivals cheats checklist before checkout. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Marvel Rivals 2026",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Cheat Marvel Rivals 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Cheat Marvel Rivals 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Cheat Marvel Rivals 2026",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. 2026 Marvel Rivals cheats checklist before checkout.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Marvel Rivals | Guida ESP e Aimbot",
					description: "Cheat Marvel Rivals: the Marvel Rivals hacks pillar for ESP and Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Marvel Rivals",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Cheat Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "Cheat Marvel Rivals",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Marvel Rivals Cheats | Accesso istantaneo",
					description: "Download Marvel Rivals Cheats: digital license download after payment. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Download Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Download Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "Download Marvel Rivals Cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. digital license download after payment.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Marvel Rivals | Toggle in-game",
					description: "Mod menu Marvel Rivals: in-client ESP and soft aim toggles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Mod menu Marvel Rivals",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Mod menu Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "Mod menu Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. in-client ESP and soft aim toggles.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marvel Rivals | Impostazioni soft aim",
					description: "Soft aim Marvel Rivals: smooth soft aim settings for Windows PC. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Soft aim Marvel Rivals",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Soft aim Marvel Rivals.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Soft aim Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. smooth soft aim settings for Windows PC.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Migliori cheat Marvel Rivals | Checklist acquirente",
					description: "Migliori cheat Marvel Rivals: what to compare before buying Marvel Rivals cheats. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Migliori cheat Marvel Rivals",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Migliori cheat Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "Migliori cheat Marvel Rivals",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Migliori cheat Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. what to compare before buying Marvel Rivals cheats.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Marvel Rivals | Assist soft aim",
					description: "Hack aimbot Marvel Rivals: undetected Aimbot hack assist for Marvel Rivals. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Hack aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. undetected Aimbot hack assist for Marvel Rivals.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Marvel Rivals | Box e eroi",
					description: "Hack ESP Marvel Rivals: ESP hack boxes, objective pins, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Hack ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Hack ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Hack ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. ESP hack boxes, objective pins, and distance.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marvel Rivals | Cosa significa",
					description: "Unlock all Marvel Rivals: unlock-all searches vs real ESP and Aimbot tools. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Unlock all Marvel Rivals",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Unlock all Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Unlock all Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Acquista Marvel Rivals Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				privacy: {
					title: "Informativa privacy | Marvel Rivals Cheats",
					description: "Informativa privacy for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Informativa privacy",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Informativa privacy for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "Politica di rimborso | Marvel Rivals Cheats",
					description: "Politica di rimborso for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica di rimborso",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Politica di rimborso for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Contact email,  order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch NACE. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "Termini di utilizzo | Marvel Rivals Cheats",
					description: "Termini di utilizzo for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termini di utilizzo",
					intro: "Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Termini di utilizzo for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Contact email,  order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione NACE.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Marvel Rivals Cheats unisce ESP wallhack, cooldown tracker e marvel rivals aimbot indetectable per Marvel Rivals su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contatta support@rivalshacks.com per supporto o richieste legali.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
		nl: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Functies",
					pricing: "Prijzen",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kopen",
				},
				hero: {
					accent: "Undetected Marvel Rivals Cheats",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "ESP wallhack, cooldown tracker en Aimbot voor Marvel Rivals op Windows PC — NACE-onderhoud inbegrepen.",
					subtitleShort: "ESP, cooldown tracker & Aimbot voor Marvel Rivals PC",
					buyNow: "Nu kopen",
					seeFeatures: "Bekijk functies",
				},
				trust: {
					status: "Online",
					statusNote: "Marvel Rivals Cheats pakket is live voor Marvel Rivals op Windows PC.",
					statusShort: "Live",
					delivery: "Directe digitale levering",
					platform: "Windows 10 & 11",
					antiCheat: "NACE-onderhoud ondersteund",
					antiCheatShort: "NACE support",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "In winkelwagen",
					monthly: "Maandelijks",
					lifetime: "Lifetime",
					available: "Nu beschikbaar",
					gameBadge: "Marvel Rivals",
					platformBadge: "Windows PC",
					statusBadge: "Undetected pakket",
				},
				reviews: {
					title: "Wat spelers zeggen",
					subtitle: "Recente feedback van Marvel Rivals Cheats kopers",
					outOf: "van 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Nu kopen",
					readGuide: "Lees gids",
					language: "Taal",
					officialLanguageNote: "Engels is de officiële taal. Andere talen zijn vertaald voor wereldwijde SEO.",
					relatedPages: "Gerelateerde pagina's",
				},
				footer: {
					explore: "Verkennen",
					help: "Help & juridisch",
					tagline: "Undetected ESP, wallhack, cooldown tracker en Aimbot voor Marvel Rivals — after payment.",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Marvel Rivals cheats voor Marvel Rivals op PC. ESP wallhack, cooldown tracker en Aimbot met NACE-onderhoud. Directe digitale levering.",
					h1: "Marvel Rivals Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC pakket voor Marvel Rivals: ESP wallhack, cooldown tracker en Aimbot met NACE-onderhoud na elke patch.",
					imageAlt: "Marvel Rivals ESP player tags hack",
					galleryTitle: "Marvel Rivals Cheats galerij — ESP, Aimbot en wallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Waarom Marvel Rivals Cheats in 2026",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Ideaal om vijandelijke squads te lezen in ranked en quick play.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "ESP wallhack, cooldown tracker en Aimbot in één licentie",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Eén licentie in plaats van losse tools.",
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "Marvel Rivals ESP | Player Boxes & Wallhack",
					description: "Marvel Rivals ESP: player boxes, objective markers, and wallhack overlays. directe digitale levering. undetected — Windows PC.",
					h1: "Marvel Rivals ESP",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Marvel Rivals ESP.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "Marvel Rivals ESP",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Marvel Rivals ESP",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. player boxes, objective markers, and wallhack overlays.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Marvel Rivals Aimbot | Soft Aim Controls",
					description: "Marvel Rivals Aimbot: soft aim, FOV, and per-hero Aimbot profiles. directe digitale levering. undetected — Windows PC.",
					h1: "Marvel Rivals Aimbot",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Marvel Rivals Aimbot.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marvel Rivals Aimbot",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals Aimbot",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. soft aim, FOV, and per-hero Aimbot profiles.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				features: {
					title: "Functies | Full Feature List",
					description: "Functies: ESP, soft aim, cooldown tracker controls. directe digitale levering. undetected — Windows PC.",
					h1: "Functies",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Functies.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "Functies",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Functies",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. ESP, soft aim, cooldown tracker controls.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				pricing: {
					title: "Prijzen | Monthly & Lifetime",
					description: "Prijzen: $35 monthly or $150 lifetime licenses. directe digitale levering. undetected — Windows PC.",
					h1: "Prijzen",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Prijzen.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prijzen",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prijzen",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. directe digitale levering. undetected — Windows PC.",
					h1: "Setup",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Setup.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Windows PC activation and first-launch setup.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | NACE Maintenance Log",
					description: "Updates: NACE patch status and rebuild notes. directe digitale levering. undetected — Windows PC.",
					h1: "Updates",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Updates.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. NACE patch status and rebuild notes.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and NACE questions. directe digitale levering. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. FAQ.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. ESP, soft aim, delivery, and NACE questions.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. directe digitale levering. undetected — Windows PC.",
					h1: "Support",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Support.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. order help and license support contact.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | NACE Safe Status",
					description: "Undetected Cheats: undetected maintenance after NACE patches. directe digitale levering. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Undetected Cheats.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. undetected maintenance after NACE patches.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Marvel Rivals Wallhack | ESP Visibility",
					description: "Marvel Rivals Wallhack: wallhack ESP for heroes, health, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "Marvel Rivals Wallhack",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Marvel Rivals Wallhack.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Marvel Rivals Wallhack",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals Wallhack",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. wallhack ESP for heroes, health, and distance.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				radar: {
					title: "Cooldown tracker | 2D Threat Overlay",
					description: "Cooldown tracker: cooldown tracker cues for flanks and rotations. directe digitale levering. undetected — Windows PC.",
					h1: "Cooldown tracker",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Cooldown tracker.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "Cooldown tracker",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Cooldown tracker",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. cooldown tracker cues for flanks and rotations.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				battleye: {
					title: "NACE Bypass | Patch Maintenance",
					description: "NACE Bypass: how NACE updates are handled for Marvel Rivals hacks. directe digitale levering. undetected — Windows PC.",
					h1: "NACE Bypass",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. NACE Bypass.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "NACE Bypass",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "NACE Bypass",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. how NACE updates are handled for Marvel Rivals hacks.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Marvel Rivals Cheats 2026 | Buyer Guide",
					description: "Marvel Rivals Cheats 2026: 2026 Marvel Rivals cheats checklist before checkout. directe digitale levering. undetected — Windows PC.",
					h1: "Marvel Rivals Cheats 2026",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Marvel Rivals Cheats 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Marvel Rivals Cheats 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Marvel Rivals Cheats 2026",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. 2026 Marvel Rivals cheats checklist before checkout.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				hacks: {
					title: "Marvel Rivals Cheats | ESP Aimbot Guide",
					description: "Marvel Rivals Cheats: the Marvel Rivals hacks pillar for ESP and Aimbot. directe digitale levering. undetected — Windows PC.",
					h1: "Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "Marvel Rivals Cheats",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Marvel Rivals Cheat Download | Instant Access",
					description: "Marvel Rivals Cheat Download: digital license download after payment. directe digitale levering. undetected — Windows PC.",
					h1: "Marvel Rivals Cheat Download",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Marvel Rivals Cheat Download.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "Marvel Rivals Cheat Download",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Marvel Rivals Cheat Download",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. digital license download after payment.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Marvel Rivals Mod Menu | In-Game Toggles",
					description: "Marvel Rivals Mod Menu: in-client ESP and soft aim toggles. directe digitale levering. undetected — Windows PC.",
					h1: "Marvel Rivals Mod Menu",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Marvel Rivals Mod Menu.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "Marvel Rivals Mod Menu",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Mod Menu",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. in-client ESP and soft aim toggles.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Marvel Rivals Soft Aim | Smooth Aim Settings",
					description: "Marvel Rivals Soft Aim: smooth soft aim settings for Windows PC. directe digitale levering. undetected — Windows PC.",
					h1: "Marvel Rivals Soft Aim",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Marvel Rivals Soft Aim.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Marvel Rivals Soft Aim",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Marvel Rivals Soft Aim",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. smooth soft aim settings for Windows PC.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Marvel Rivals Cheats | Buyer Checklist",
					description: "Beste Marvel Rivals Cheats: what to compare before buying Marvel Rivals cheats. directe digitale levering. undetected — Windows PC.",
					h1: "Beste Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Beste Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "Beste Marvel Rivals Cheats",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. what to compare before buying Marvel Rivals cheats.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Marvel Rivals Aimbot Hack | Soft Aim Assist",
					description: "Marvel Rivals Aimbot Hack: undetected Aimbot hack assist for Marvel Rivals. directe digitale levering. undetected — Windows PC.",
					h1: "Marvel Rivals Aimbot Hack",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Marvel Rivals Aimbot Hack.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Marvel Rivals Aimbot Hack",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Marvel Rivals Aimbot Hack",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. undetected Aimbot hack assist for Marvel Rivals.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Marvel Rivals ESP Hack | Boxes & Loot",
					description: "Marvel Rivals ESP Hack: ESP hack boxes, objective pins, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "Marvel Rivals ESP Hack",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Marvel Rivals ESP Hack.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Marvel Rivals ESP Hack",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals ESP Hack",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. ESP hack boxes, objective pins, and distance.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Marvel Rivals Unlock All | What It Means",
					description: "Marvel Rivals Unlock All: unlock-all searches vs real ESP and Aimbot tools. directe digitale levering. undetected — Windows PC.",
					h1: "Marvel Rivals Unlock All",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Marvel Rivals Unlock All.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Marvel Rivals Unlock All",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Marvel Rivals Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Unlock All",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
								"support@rivalshacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				privacy: {
					title: "Privacybeleid | Marvel Rivals Cheats",
					description: "Privacybeleid for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Privacybeleid",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Privacybeleid for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@rivalshacks.com voor support en juridische vragen.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "Restitutiebeleid | Marvel Rivals Cheats",
					description: "Restitutiebeleid for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Restitutiebeleid",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Restitutiebeleid for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Contact email,  order references, and basic site security data.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na NACE-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@rivalshacks.com voor support en juridische vragen.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "Gebruiksvoorwaarden | Marvel Rivals Cheats",
					description: "Gebruiksvoorwaarden for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gebruiksvoorwaarden",
					intro: "Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Gebruiksvoorwaarden for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Contact email,  order references, and basic site security data.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. NACE-onderhoud.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Marvel Rivals Cheats bundelt ESP wallhack, cooldown tracker en marvel rivals aimbot als undetected pakket voor Marvel Rivals op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@rivalshacks.com voor support en juridische vragen.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
		pl: {
			ui: {
				nav: {
					home: "Strona główna",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkcje",
					pricing: "Cennik",
					setup: "Instalacja",
					updates: "Aktualizacje",
					faq: "FAQ",
					buyNow: "Kup teraz",
				},
				hero: {
					accent: "Undetected cheaty Marvel Rivals",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "ESP wallhack, cooldown tracker i Aimbot do Marvel Rivals na PC Windows — konserwacja NACE w cenie.",
					subtitleShort: "ESP, cooldown tracker i Aimbot dla Marvel Rivals PC",
					buyNow: "Kup teraz",
					seeFeatures: "Zobacz funkcje",
				},
				trust: {
					status: "Online",
					statusNote: "Pakiet Marvel Rivals Cheats jest aktywny dla Marvel Rivals na PC Windows.",
					statusShort: "Aktywny",
					delivery: "Natychmiastowa dostawa cyfrowa",
					platform: "Windows 10 i 11",
					antiCheat: "Wsparcie konserwacji NACE",
					antiCheatShort: "NACE wsparcie",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "Dodaj do koszyka",
					monthly: "Miesięcznie",
					lifetime: "Dożywotnio",
					available: "Dostępne teraz",
					gameBadge: "Marvel Rivals",
					platformBadge: "PC Windows",
					statusBadge: "Pakiet undetected",
				},
				reviews: {
					title: "Co mówią gracze",
					subtitle: "Ostatnie opinie kupujących Marvel Rivals Cheats",
					outOf: "na 5",
					countLabel: "opinii",
				},
				common: {
					buyNow: "Kup teraz",
					readGuide: "Czytaj poradnik",
					language: "Język",
					officialLanguageNote: "Angielski jest językiem oficjalnym. Inne wersje są tłumaczone dla globalnego SEO.",
					relatedPages: "Powiązane strony",
				},
				footer: {
					explore: "Odkrywaj",
					help: "Pomoc i prawo",
					tagline: "Undetected ESP, wallhack, cooldown tracker i Aimbot dla Marvel Rivals — checkout przez .",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP, Wallhack i Aimbot",
					description: "Undetected cheaty Marvel Rivals dla Marvel Rivals na PC. ESP wallhack, cooldown tracker i Aimbot z konserwacją NACE. Natychmiastowa dostawa cyfrowa.",
					h1: "Marvel Rivals Cheats — Undetected ESP, Wallhack i Aimbot",
					intro: "Pakiet undetected dla Marvel Rivals na Windows PC: ESP wallhack, cooldown tracker i Aimbot z konserwacją NACE po każdym patchu.",
					imageAlt: "Marvel Rivals ESP player tags hack",
					galleryTitle: "Galeria Marvel Rivals Cheats — ESP, Aimbot i wallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dlaczego Marvel Rivals Cheats w 2026",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Idealny do czytania wrogich squadów w ranked i quick play.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "ESP wallhack, cooldown tracker i Aimbot w jednej licencji",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Jedna licencja zamiast osobnych narzędzi.",
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Marvel Rivals | Player Boxes & Wallhack",
					description: "ESP Marvel Rivals: player boxes, objective markers, and wallhack overlays. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. player boxes, objective markers, and wallhack overlays.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Marvel Rivals | Soft Aim Controls",
					description: "Aimbot Marvel Rivals: soft aim, FOV, and per-hero Aimbot profiles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. soft aim, FOV, and per-hero Aimbot profiles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				features: {
					title: "Funkcje | Full Feature List",
					description: "Funkcje: ESP, soft aim, cooldown tracker controls. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Funkcje",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Funkcje.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "Funkcje",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkcje",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. ESP, soft aim, cooldown tracker controls.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				pricing: {
					title: "Cennik | Monthly & Lifetime",
					description: "Cennik: $35 monthly or $150 lifetime licenses. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cennik",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Cennik.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Cennik",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Cennik",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				setup: {
					title: "Instalacja | PC Setup Guide",
					description: "Instalacja: Windows PC activation and first-launch setup. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Instalacja",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Instalacja.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalacja",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalacja",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Windows PC activation and first-launch setup.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizacje | NACE Maintenance Log",
					description: "Aktualizacje: NACE patch status and rebuild notes. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aktualizacje",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Aktualizacje.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "Aktualizacje",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Aktualizacje",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. NACE patch status and rebuild notes.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and NACE questions. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. FAQ.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. ESP, soft aim, delivery, and NACE questions.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				support: {
					title: "Wsparcie | Help & Contact",
					description: "Wsparcie: order help and license support contact. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wsparcie",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Wsparcie.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "Wsparcie",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Wsparcie",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. order help and license support contact.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				undetected: {
					title: "Cheaty undetected | NACE Safe Status",
					description: "Cheaty undetected: undetected maintenance after NACE patches. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty undetected",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Cheaty undetected.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheaty undetected",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Cheaty undetected",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. undetected maintenance after NACE patches.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Marvel Rivals | ESP Visibility",
					description: "Wallhack Marvel Rivals: wallhack ESP for heroes, health, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wallhack Marvel Rivals",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Wallhack Marvel Rivals.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Wallhack Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. wallhack ESP for heroes, health, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				radar: {
					title: "Tracker cooldown | 2D Threat Overlay",
					description: "Tracker cooldown: cooldown tracker cues for flanks and rotations. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Tracker cooldown",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Tracker cooldown.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "Tracker cooldown",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Tracker cooldown",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. cooldown tracker cues for flanks and rotations.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass NACE | Patch Maintenance",
					description: "Bypass NACE: how NACE updates are handled for Marvel Rivals hacks. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Bypass NACE",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Bypass NACE.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "Bypass NACE",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass NACE",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. how NACE updates are handled for Marvel Rivals hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheaty Marvel Rivals 2026 | Buyer Guide",
					description: "Cheaty Marvel Rivals 2026: 2026 Marvel Rivals cheats checklist before checkout. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Marvel Rivals 2026",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Cheaty Marvel Rivals 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Cheaty Marvel Rivals 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Cheaty Marvel Rivals 2026",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. 2026 Marvel Rivals cheats checklist before checkout.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				hacks: {
					title: "Cheaty Marvel Rivals | ESP Aimbot Guide",
					description: "Cheaty Marvel Rivals: the Marvel Rivals hacks pillar for ESP and Aimbot. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Marvel Rivals",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Cheaty Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "Cheaty Marvel Rivals",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheaty Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Pobieranie Marvel Rivals Cheats | Instant Access",
					description: "Pobieranie Marvel Rivals Cheats: digital license download after payment. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Pobieranie Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Pobieranie Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "Pobieranie Marvel Rivals Cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Pobieranie Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. digital license download after payment.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Marvel Rivals | In-Game Toggles",
					description: "Mod menu Marvel Rivals: in-client ESP and soft aim toggles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Mod menu Marvel Rivals",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Mod menu Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "Mod menu Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. in-client ESP and soft aim toggles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marvel Rivals | Smooth Aim Settings",
					description: "Soft aim Marvel Rivals: smooth soft aim settings for Windows PC. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Soft aim Marvel Rivals",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Soft aim Marvel Rivals.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Soft aim Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. smooth soft aim settings for Windows PC.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Najlepsze cheaty Marvel Rivals | Buyer Checklist",
					description: "Najlepsze cheaty Marvel Rivals: what to compare before buying Marvel Rivals cheats. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Najlepsze cheaty Marvel Rivals",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Najlepsze cheaty Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "Najlepsze cheaty Marvel Rivals",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Najlepsze cheaty Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. what to compare before buying Marvel Rivals cheats.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Marvel Rivals | Soft Aim Assist",
					description: "Hack aimbot Marvel Rivals: undetected Aimbot hack assist for Marvel Rivals. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Hack aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. undetected Aimbot hack assist for Marvel Rivals.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Marvel Rivals | Boxes & Loot",
					description: "Hack ESP Marvel Rivals: ESP hack boxes, objective pins, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Hack ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Hack ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Hack ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. ESP hack boxes, objective pins, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marvel Rivals | What It Means",
					description: "Unlock all Marvel Rivals: unlock-all searches vs real ESP and Aimbot tools. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Unlock all Marvel Rivals",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Unlock all Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Unlock all Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Kup teraz",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				privacy: {
					title: "Polityka prywatności | Marvel Rivals Cheats",
					description: "Polityka prywatności for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka prywatności",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Polityka prywatności for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "Polityka zwrotów | Marvel Rivals Cheats",
					description: "Polityka zwrotów for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka zwrotów",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Polityka zwrotów for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Contact email,  order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach NACE. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "Warunki użytkowania | Marvel Rivals Cheats",
					description: "Warunki użytkowania for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Warunki użytkowania",
					intro: "Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Warunki użytkowania for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Contact email,  order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją NACE.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Marvel Rivals Cheats łączy ESP wallhack, cooldown tracker i marvel rivals aimbot jako pakiet undetected dla Marvel Rivals na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@rivalshacks.com w sprawach wsparcia i prawnych.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
		ru: {
			ui: {
				nav: {
					home: "Главная",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функции",
					pricing: "Цены",
					setup: "Установка",
					updates: "Обновления",
					faq: "FAQ",
					buyNow: "Купить",
				},
				hero: {
					accent: "Undetected читы Marvel Rivals",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "ESP wallhack, cooldown tracker и Aimbot для Marvel Rivals на Windows PC — обслуживание NACE включено.",
					subtitleShort: "ESP, cooldown tracker и Aimbot для Marvel Rivals PC",
					buyNow: "Купить",
					seeFeatures: "Смотреть функции",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Marvel Rivals Cheats активен для Marvel Rivals на Windows PC.",
					statusShort: "Активен",
					delivery: "Мгновенная цифровая доставка",
					platform: "Windows 10 и 11",
					antiCheat: "Поддержка обслуживания NACE",
					antiCheatShort: "NACE поддержка",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "В корзину",
					monthly: "Месяц",
					lifetime: "Навсегда",
					available: "Доступно сейчас",
					gameBadge: "Marvel Rivals",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Что говорят игроки",
					subtitle: "Недавние отзывы покупателей Marvel Rivals Cheats",
					outOf: "из 5",
					countLabel: "отзывов",
				},
				common: {
					buyNow: "Купить",
					readGuide: "Читать гайд",
					language: "Язык",
					officialLanguageNote: "Английский — официальный язык. Другие версии переведены для глобального SEO.",
					relatedPages: "Похожие страницы",
				},
				footer: {
					explore: "Обзор",
					help: "Помощь и право",
					tagline: "Undetected ESP, wallhack, cooldown tracker и Aimbot для Marvel Rivals — оплата через .",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP, Wallhack и Aimbot",
					description: "Undetected читы Marvel Rivals для Marvel Rivals на PC. ESP wallhack, cooldown tracker и Aimbot с обслуживанием NACE. Мгновенная цифровая доставка.",
					h1: "Marvel Rivals Cheats — Undetected ESP, Wallhack и Aimbot",
					intro: "Undetected пакет для Marvel Rivals на Windows PC: ESP wallhack, cooldown tracker и Aimbot с обслуживанием NACE после патчей.",
					imageAlt: "Marvel Rivals ESP player tags hack",
					galleryTitle: "Галерея Marvel Rivals Cheats — ESP, Aimbot и wallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Почему выбирают Marvel Rivals Cheats в 2026",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Идеально для чтения вражеских отрядов в ranked и quick play.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "ESP wallhack, cooldown tracker и Aimbot в одной лицензии",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Одна лицензия вместо отдельных инструментов.",
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Marvel Rivals | Боксы игроков и wallhack",
					description: "ESP Marvel Rivals: player boxes, objective markers, and wallhack overlays. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. player boxes, objective markers, and wallhack overlays.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Marvel Rivals | Управление soft aim",
					description: "Aimbot Marvel Rivals: soft aim, FOV, and per-hero Aimbot profiles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. soft aim, FOV, and per-hero Aimbot profiles.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				features: {
					title: "Функции | Полный список функций",
					description: "Функции: ESP, soft aim, cooldown tracker controls. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Функции",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Функции.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "Функции",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функции",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. ESP, soft aim, cooldown tracker controls.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				pricing: {
					title: "Цены | Месяц и lifetime",
					description: "Цены: $35 monthly or $150 lifetime licenses. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Цены",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Цены.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Цены",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Цены",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				setup: {
					title: "Установка | Гайд по установке",
					description: "Установка: Windows PC activation and first-launch setup. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Установка",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Установка.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Установка",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Установка",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Windows PC activation and first-launch setup.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				updates: {
					title: "Обновления | Журнал NACE",
					description: "Обновления: NACE patch status and rebuild notes. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Обновления",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Обновления.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "Обновления",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Обновления",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. NACE patch status and rebuild notes.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Частые вопросы",
					description: "FAQ: ESP, soft aim, delivery, and NACE questions. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. FAQ.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. ESP, soft aim, delivery, and NACE questions.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				support: {
					title: "Поддержка | Помощь и контакт",
					description: "Поддержка: order help and license support contact. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Поддержка",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Поддержка.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "Поддержка",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Поддержка",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. order help and license support contact.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected читы | Статус undetected",
					description: "Undetected читы: undetected maintenance after NACE patches. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Undetected читы",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Undetected читы.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected читы",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Undetected читы",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. undetected maintenance after NACE patches.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Marvel Rivals | Видимость ESP",
					description: "Wallhack Marvel Rivals: wallhack ESP for heroes, health, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Wallhack Marvel Rivals",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Wallhack Marvel Rivals.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Wallhack Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. wallhack ESP for heroes, health, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				radar: {
					title: "Трекер кулдаунов | Трекер кулдаунов",
					description: "Трекер кулдаунов: cooldown tracker cues for flanks and rotations. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Трекер кулдаунов",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Трекер кулдаунов.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "Трекер кулдаунов",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Трекер кулдаунов",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. cooldown tracker cues for flanks and rotations.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass NACE | Обслуживание патчей",
					description: "Bypass NACE: how NACE updates are handled for Marvel Rivals hacks. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Bypass NACE",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Bypass NACE.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "Bypass NACE",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass NACE",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. how NACE updates are handled for Marvel Rivals hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Читы Marvel Rivals 2026 | Гайд покупателя",
					description: "Читы Marvel Rivals 2026: 2026 Marvel Rivals cheats checklist before checkout. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Marvel Rivals 2026",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Читы Marvel Rivals 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Читы Marvel Rivals 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Читы Marvel Rivals 2026",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. 2026 Marvel Rivals cheats checklist before checkout.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				hacks: {
					title: "Читы Marvel Rivals | Гайд ESP и Aimbot",
					description: "Читы Marvel Rivals: the Marvel Rivals hacks pillar for ESP and Aimbot. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Marvel Rivals",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Читы Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "Читы Marvel Rivals",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Читы Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Скачать Marvel Rivals Cheats | Мгновенный доступ",
					description: "Скачать Marvel Rivals Cheats: digital license download after payment. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Скачать Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Скачать Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "Скачать Marvel Rivals Cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Скачать Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. digital license download after payment.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Marvel Rivals | Игровые переключатели",
					description: "Мод-меню Marvel Rivals: in-client ESP and soft aim toggles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Мод-меню Marvel Rivals",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Мод-меню Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "Мод-меню Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. in-client ESP and soft aim toggles.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marvel Rivals | Настройки soft aim",
					description: "Soft aim Marvel Rivals: smooth soft aim settings for Windows PC. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Soft aim Marvel Rivals",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Soft aim Marvel Rivals.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Soft aim Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. smooth soft aim settings for Windows PC.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Лучшие читы Marvel Rivals | Чеклист покупателя",
					description: "Лучшие читы Marvel Rivals: what to compare before buying Marvel Rivals cheats. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Лучшие читы Marvel Rivals",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Лучшие читы Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "Лучшие читы Marvel Rivals",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Лучшие читы Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. what to compare before buying Marvel Rivals cheats.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Marvel Rivals | Soft aim ассист",
					description: "Хак aimbot Marvel Rivals: undetected Aimbot hack assist for Marvel Rivals. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Хак aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. undetected Aimbot hack assist for Marvel Rivals.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Marvel Rivals | Боксы и герои",
					description: "Хак ESP Marvel Rivals: ESP hack boxes, objective pins, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Хак ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Хак ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Хак ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. ESP hack boxes, objective pins, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marvel Rivals | Что это значит",
					description: "Unlock all Marvel Rivals: unlock-all searches vs real ESP and Aimbot tools. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Unlock all Marvel Rivals",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Unlock all Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Unlock all Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Купить",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
								"support@rivalshacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				privacy: {
					title: "Политика конфиденциальности | Marvel Rivals Cheats",
					description: "Политика конфиденциальности for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика конфиденциальности",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Политика конфиденциальности for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@rivalshacks.com для поддержки и юридических вопросов.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "Политика возврата | Marvel Rivals Cheats",
					description: "Политика возврата for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика возврата",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Политика возврата for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Contact email,  order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей NACE. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@rivalshacks.com для поддержки и юридических вопросов.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "Условия использования | Marvel Rivals Cheats",
					description: "Условия использования for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Условия использования",
					intro: "Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Условия использования for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Contact email,  order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание NACE.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Marvel Rivals Cheats объединяет ESP wallhack, cooldown tracker и marvel rivals aimbot в undetected пакете для Marvel Rivals на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@rivalshacks.com для поддержки и юридических вопросов.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
		tr: {
			ui: {
				nav: {
					home: "Ana sayfa",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Özellikler",
					pricing: "Fiyatlar",
					setup: "Kurulum",
					updates: "Güncellemeler",
					faq: "SSS",
					buyNow: "Satın al",
				},
				hero: {
					accent: "Undetected Marvel Rivals hileleri",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "Marvel Rivals Windows PC için ESP wallhack, cooldown tracker ve Aimbot — NACE bakımı dahil.",
					subtitleShort: "Marvel Rivals PC için ESP, cooldown tracker ve Aimbot",
					buyNow: "Satın al",
					seeFeatures: "Özellikleri gör",
				},
				trust: {
					status: "Çevrimiçi",
					statusNote: "Marvel Rivals Cheats paketi Marvel Rivals Windows PC için aktif.",
					statusShort: "Aktif",
					delivery: "Anında dijital teslimat",
					platform: "Windows 10 ve 11",
					antiCheat: "NACE bakım desteği",
					antiCheatShort: "NACE destek",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "Sepete ekle",
					monthly: "Aylık",
					lifetime: "Ömür boyu",
					available: "Şimdi mevcut",
					gameBadge: "Marvel Rivals",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Oyuncular ne diyor",
					subtitle: "Marvel Rivals Cheats alıcılarından son geri bildirimler",
					outOf: "/5",
					countLabel: "yorum",
				},
				common: {
					buyNow: "Satın al",
					readGuide: "Rehberi oku",
					language: "Dil",
					officialLanguageNote: "Resmi dil İngilizcedir. Diğer diller küresel SEO için çevrilmiştir.",
					relatedPages: "İlgili sayfalar",
				},
				footer: {
					explore: "Keşfet",
					help: "Yardım ve yasal",
					tagline: "Marvel Rivals için undetected ESP, wallhack, cooldown tracker ve Aimbot — checkout.",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP, Wallhack ve Aimbot",
					description: "Marvel Rivals için undetected hileler. ESP wallhack, cooldown tracker ve Aimbot — NACE bakımı. Anında dijital teslimat.",
					h1: "Marvel Rivals Cheats — Undetected ESP, Wallhack ve Aimbot",
					intro: "Marvel Rivals Windows PC undetected paketi: ESP wallhack, cooldown tracker ve Aimbot — NACE bakımı dahil.",
					imageAlt: "Marvel Rivals ESP player tags hack",
					galleryTitle: "Marvel Rivals Cheats galeri — ESP, Aimbot ve wallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026'da neden Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. ranked ve quick play'da düşman squad okumak için ideal.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "ESP wallhack, cooldown tracker ve Aimbot tek lisans",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Ayrı araçlar yerine tek lisans.",
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "Marvel Rivals ESP | Player Boxes & Wallhack",
					description: "Marvel Rivals ESP: player boxes, objective markers, and wallhack overlays. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marvel Rivals ESP",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Marvel Rivals ESP.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "Marvel Rivals ESP",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Marvel Rivals ESP",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. player boxes, objective markers, and wallhack overlays.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Marvel Rivals Aimbot | Soft Aim Controls",
					description: "Marvel Rivals Aimbot: soft aim, FOV, and per-hero Aimbot profiles. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marvel Rivals Aimbot",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Marvel Rivals Aimbot.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marvel Rivals Aimbot",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals Aimbot",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. soft aim, FOV, and per-hero Aimbot profiles.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				features: {
					title: "Özellikler | Full Feature List",
					description: "Özellikler: ESP, soft aim, cooldown tracker controls. anında dijital teslimat. undetected — Windows PC.",
					h1: "Özellikler",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Özellikler.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "Özellikler",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Özellikler",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. ESP, soft aim, cooldown tracker controls.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				pricing: {
					title: "Fiyatlar | Monthly & Lifetime",
					description: "Fiyatlar: $35 monthly or $150 lifetime licenses. anında dijital teslimat. undetected — Windows PC.",
					h1: "Fiyatlar",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Fiyatlar.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Fiyatlar",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Fiyatlar",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. $35 monthly or $150 lifetime licenses.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				setup: {
					title: "Kurulum | PC Setup Guide",
					description: "Kurulum: Windows PC activation and first-launch setup. anında dijital teslimat. undetected — Windows PC.",
					h1: "Kurulum",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Kurulum.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Kurulum",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Kurulum",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Windows PC activation and first-launch setup.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				updates: {
					title: "Güncellemeler | NACE Maintenance Log",
					description: "Güncellemeler: NACE patch status and rebuild notes. anında dijital teslimat. undetected — Windows PC.",
					h1: "Güncellemeler",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Güncellemeler.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "Güncellemeler",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Güncellemeler",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. NACE patch status and rebuild notes.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				faq: {
					title: "SSS | Common Answers",
					description: "SSS: ESP, soft aim, delivery, and NACE questions. anında dijital teslimat. undetected — Windows PC.",
					h1: "SSS",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. SSS.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "SSS",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "SSS",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. ESP, soft aim, delivery, and NACE questions.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				support: {
					title: "Destek | Help & Contact",
					description: "Destek: order help and license support contact. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destek",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Destek.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "Destek",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destek",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. order help and license support contact.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected hileler | NACE Safe Status",
					description: "Undetected hileler: undetected maintenance after NACE patches. anında dijital teslimat. undetected — Windows PC.",
					h1: "Undetected hileler",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Undetected hileler.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected hileler",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Undetected hileler",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. undetected maintenance after NACE patches.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				wallhack: {
					title: "Marvel Rivals Wallhack | ESP Visibility",
					description: "Marvel Rivals Wallhack: wallhack ESP for heroes, health, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marvel Rivals Wallhack",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Marvel Rivals Wallhack.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Marvel Rivals Wallhack",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals Wallhack",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. wallhack ESP for heroes, health, and distance.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				radar: {
					title: "Cooldown takip | 2D Threat Overlay",
					description: "Cooldown takip: cooldown tracker cues for flanks and rotations. anında dijital teslimat. undetected — Windows PC.",
					h1: "Cooldown takip",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Cooldown takip.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "Cooldown takip",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Cooldown takip",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. cooldown tracker cues for flanks and rotations.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				battleye: {
					title: "NACE bypass | Patch Maintenance",
					description: "NACE bypass: how NACE updates are handled for Marvel Rivals hacks. anında dijital teslimat. undetected — Windows PC.",
					h1: "NACE bypass",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. NACE bypass.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "NACE bypass",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "NACE bypass",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. how NACE updates are handled for Marvel Rivals hacks.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Marvel Rivals Hileleri 2026 | Buyer Guide",
					description: "Marvel Rivals Hileleri 2026: 2026 Marvel Rivals cheats checklist before checkout. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marvel Rivals Hileleri 2026",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Marvel Rivals Hileleri 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Marvel Rivals Hileleri 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Marvel Rivals Hileleri 2026",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. 2026 Marvel Rivals cheats checklist before checkout.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				hacks: {
					title: "Marvel Rivals Hileleri | ESP Aimbot Guide",
					description: "Marvel Rivals Hileleri: the Marvel Rivals hacks pillar for ESP and Aimbot. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marvel Rivals Hileleri",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Marvel Rivals Hileleri.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "Marvel Rivals Hileleri",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Hileleri",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Marvel Rivals Hile İndir | Instant Access",
					description: "Marvel Rivals Hile İndir: digital license download after payment. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marvel Rivals Hile İndir",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Marvel Rivals Hile İndir.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "Marvel Rivals Hile İndir",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Marvel Rivals Hile İndir",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. digital license download after payment.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Marvel Rivals Mod Menü | In-Game Toggles",
					description: "Marvel Rivals Mod Menü: in-client ESP and soft aim toggles. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marvel Rivals Mod Menü",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Marvel Rivals Mod Menü.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "Marvel Rivals Mod Menü",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Mod Menü",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. in-client ESP and soft aim toggles.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Marvel Rivals Soft Aim | Smooth Aim Settings",
					description: "Marvel Rivals Soft Aim: smooth soft aim settings for Windows PC. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marvel Rivals Soft Aim",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Marvel Rivals Soft Aim.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Marvel Rivals Soft Aim",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Marvel Rivals Soft Aim",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. smooth soft aim settings for Windows PC.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				"best-cheats": {
					title: "En İyi Marvel Rivals Hileleri | Buyer Checklist",
					description: "En İyi Marvel Rivals Hileleri: what to compare before buying Marvel Rivals cheats. anında dijital teslimat. undetected — Windows PC.",
					h1: "En İyi Marvel Rivals Hileleri",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. En İyi Marvel Rivals Hileleri.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "En İyi Marvel Rivals Hileleri",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "En İyi Marvel Rivals Hileleri",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. what to compare before buying Marvel Rivals cheats.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Marvel Rivals Aimbot Hilesi | Soft Aim Assist",
					description: "Marvel Rivals Aimbot Hilesi: undetected Aimbot hack assist for Marvel Rivals. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marvel Rivals Aimbot Hilesi",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Marvel Rivals Aimbot Hilesi.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Marvel Rivals Aimbot Hilesi",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Marvel Rivals Aimbot Hilesi",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. undetected Aimbot hack assist for Marvel Rivals.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Marvel Rivals ESP Hilesi | Boxes & Loot",
					description: "Marvel Rivals ESP Hilesi: ESP hack boxes, objective pins, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marvel Rivals ESP Hilesi",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Marvel Rivals ESP Hilesi.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Marvel Rivals ESP Hilesi",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals ESP Hilesi",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. ESP hack boxes, objective pins, and distance.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Marvel Rivals Unlock All | What It Means",
					description: "Marvel Rivals Unlock All: unlock-all searches vs real ESP and Aimbot tools. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marvel Rivals Unlock All",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Marvel Rivals Unlock All.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Marvel Rivals Unlock All",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Marvel Rivals Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Unlock All",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. unlock-all searches vs real ESP and Aimbot tools.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
								"Destek ve yasal sorular için support@rivalshacks.com.",
							],
						},
					],
				},
				privacy: {
					title: "Gizlilik politikası | Marvel Rivals Cheats",
					description: "Gizlilik politikası for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gizlilik politikası",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Gizlilik politikası for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Destek ve yasal sorular için support@rivalshacks.com.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "İade politikası | Marvel Rivals Cheats",
					description: "İade politikası for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "İade politikası",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. İade politikası for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Contact email,  order references, and basic site security data.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"NACE yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Destek ve yasal sorular için support@rivalshacks.com.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "Kullanım şartları | Marvel Rivals Cheats",
					description: "Kullanım şartları for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Kullanım şartları",
					intro: "Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Kullanım şartları for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Contact email,  order references, and basic site security data.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları NACE bakımı içerir.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Marvel Rivals Cheats, Marvel Rivals için Windows PC üzerinde ESP wallhack, cooldown tracker ve marvel rivals aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Destek ve yasal sorular için support@rivalshacks.com.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
		ar: {
			ui: {
				nav: {
					home: "الرئيسية",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "الميزات",
					pricing: "الأسعار",
					setup: "التثبيت",
					updates: "التحديثات",
					faq: "الأسئلة",
					buyNow: "اشترِ الآن",
				},
				hero: {
					accent: "غش Marvel Rivals غير مكتشف",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "ESP wallhack ورadar hack وAimbot لـ Marvel Rivals على Windows PC — صيانة NACE مشمولة.",
					subtitleShort: "ESP ورadar وAimbot لـ Marvel Rivals PC",
					buyNow: "اشترِ الآن",
					seeFeatures: "عرض الميزات",
				},
				trust: {
					status: "متصل",
					statusNote: "حزمة Marvel Rivals Cheats نشطة لـ Marvel Rivals على Windows PC.",
					statusShort: "نشط",
					delivery: "تسليم رقمي فوري",
					platform: "Windows 10 و11",
					antiCheat: "دعم صيانة NACE",
					antiCheatShort: "دعم NACE",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "أضف إلى السلة",
					monthly: "شهري",
					lifetime: "مدى الحياة",
					available: "متوفر الآن",
					gameBadge: "Marvel Rivals",
					platformBadge: "Windows PC",
					statusBadge: "حزمة غير مكتشفة",
				},
				reviews: {
					title: "ماذا يقول اللاعبون",
					subtitle: "آراء حديثة من مشتري Marvel Rivals Cheats",
					outOf: "من 5",
					countLabel: "مراجعات",
				},
				common: {
					buyNow: "اشترِ الآن",
					readGuide: "اقرأ الدليل",
					language: "اللغة",
					officialLanguageNote: "الإنجليزية هي اللغة الرسمية. اللغات الأخرى مترجمة لتحسين SEO العالمي.",
					relatedPages: "صفحات ذات صلة",
				},
				footer: {
					explore: "استكشف",
					help: "المساعدة والقانون",
					tagline: "ESP وwallhack ورadar وAimbot غير مكتشف لـ Marvel Rivals — الدفع عبر .",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP وWallhack وAimbot",
					description: "غش Marvel Rivals undetected لـ Marvel Rivals على PC. ESP wallhack ورadar hack وAimbot مع صيانة NACE. تسليم رقمي فوري.",
					h1: "Marvel Rivals Cheats — ESP وWallhack وAimbot غير مكتشف",
					intro: "حزمة undetected لـ Marvel Rivals على Windows PC: ESP wallhack ورadar وAimbot مع صيانة NACE.",
					imageAlt: "Marvel Rivals ESP player tags hack",
					galleryTitle: "معرض Marvel Rivals Cheats — ESP وAimbot وwallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "لماذا Marvel Rivals Cheats في 2026",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. مثالي لقراءة فرق العدو في ranked وquick play.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "ESP wallhack ورadar وAimbot في ترخيص واحد",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. ترخيص واحد بدلاً من أدوات منفصلة.",
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Marvel Rivals | Player Boxes & Wallhack",
					description: "ESP Marvel Rivals: player boxes, objective markers, and wallhack overlays. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. player boxes, objective markers, and wallhack overlays.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Marvel Rivals | Soft Aim Controls",
					description: "Aimbot Marvel Rivals: soft aim, FOV, and per-hero Aimbot profiles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. Aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. soft aim, FOV, and per-hero Aimbot profiles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				features: {
					title: "الميزات | Full Feature List",
					description: "الميزات: ESP, soft aim, cooldown tracker controls. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الميزات",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. الميزات.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "الميزات",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "الميزات",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. ESP, soft aim, cooldown tracker controls.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				pricing: {
					title: "الأسعار | Monthly & Lifetime",
					description: "الأسعار: $35 monthly or $150 lifetime licenses. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسعار",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. الأسعار.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "الأسعار",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الأسعار",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. $35 monthly or $150 lifetime licenses.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				setup: {
					title: "التثبيت | PC Setup Guide",
					description: "التثبيت: Windows PC activation and first-launch setup. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التثبيت",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. التثبيت.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "التثبيت",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "التثبيت",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. Windows PC activation and first-launch setup.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				updates: {
					title: "التحديثات | NACE Maintenance Log",
					description: "التحديثات: NACE patch status and rebuild notes. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التحديثات",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. التحديثات.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "التحديثات",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "التحديثات",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. NACE patch status and rebuild notes.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				faq: {
					title: "الأسئلة | Common Answers",
					description: "الأسئلة: ESP, soft aim, delivery, and NACE questions. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسئلة",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. الأسئلة.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "الأسئلة",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "الأسئلة",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. ESP, soft aim, delivery, and NACE questions.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				support: {
					title: "الدعم | Help & Contact",
					description: "الدعم: order help and license support contact. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الدعم",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. الدعم.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "الدعم",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الدعم",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. order help and license support contact.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				undetected: {
					title: "غش undetected | NACE Safe Status",
					description: "غش undetected: undetected maintenance after NACE patches. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش undetected",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. غش undetected.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "غش undetected",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "غش undetected",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. undetected maintenance after NACE patches.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Marvel Rivals | ESP Visibility",
					description: "Wallhack Marvel Rivals: wallhack ESP for heroes, health, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Wallhack Marvel Rivals",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. Wallhack Marvel Rivals.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Wallhack Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. wallhack ESP for heroes, health, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				radar: {
					title: "Cooldown tracker | 2D Threat Overlay",
					description: "Cooldown tracker: cooldown tracker cues for flanks and rotations. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Cooldown tracker",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. Cooldown tracker.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "Cooldown tracker",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Cooldown tracker",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. cooldown tracker cues for flanks and rotations.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass NACE | Patch Maintenance",
					description: "Bypass NACE: how NACE updates are handled for Marvel Rivals hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Bypass NACE",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. Bypass NACE.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "Bypass NACE",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass NACE",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. how NACE updates are handled for Marvel Rivals hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "غش Marvel Rivals 2026 | Buyer Guide",
					description: "غش Marvel Rivals 2026: 2026 Marvel Rivals cheats checklist before checkout. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Marvel Rivals 2026",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. غش Marvel Rivals 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "غش Marvel Rivals 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "غش Marvel Rivals 2026",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. 2026 Marvel Rivals cheats checklist before checkout.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				hacks: {
					title: "غش Marvel Rivals | ESP Aimbot Guide",
					description: "غش Marvel Rivals: the Marvel Rivals hacks pillar for ESP and Aimbot. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Marvel Rivals",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. غش Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "غش Marvel Rivals",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "غش Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheat-download": {
					title: "تحميل Marvel Rivals Cheats | Instant Access",
					description: "تحميل Marvel Rivals Cheats: digital license download after payment. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "تحميل Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. تحميل Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "تحميل Marvel Rivals Cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "تحميل Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. digital license download after payment.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"mod-menu": {
					title: "قائمة مود Marvel Rivals | In-Game Toggles",
					description: "قائمة مود Marvel Rivals: in-client ESP and soft aim toggles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "قائمة مود Marvel Rivals",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. قائمة مود Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "قائمة مود Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "قائمة مود Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. in-client ESP and soft aim toggles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marvel Rivals | Smooth Aim Settings",
					description: "Soft aim Marvel Rivals: smooth soft aim settings for Windows PC. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Soft aim Marvel Rivals",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. Soft aim Marvel Rivals.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Soft aim Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. smooth soft aim settings for Windows PC.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"best-cheats": {
					title: "أفضل غش Marvel Rivals | Buyer Checklist",
					description: "أفضل غش Marvel Rivals: what to compare before buying Marvel Rivals cheats. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "أفضل غش Marvel Rivals",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. أفضل غش Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "أفضل غش Marvel Rivals",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "أفضل غش Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. what to compare before buying Marvel Rivals cheats.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "هاك Aimbot Marvel Rivals | Soft Aim Assist",
					description: "هاك Aimbot Marvel Rivals: undetected Aimbot hack assist for Marvel Rivals. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك Aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. هاك Aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "هاك Aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "هاك Aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. undetected Aimbot hack assist for Marvel Rivals.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"esp-hack": {
					title: "هاك ESP Marvel Rivals | Boxes & Loot",
					description: "هاك ESP Marvel Rivals: ESP hack boxes, objective pins, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. هاك ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "هاك ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "هاك ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. ESP hack boxes, objective pins, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marvel Rivals | What It Means",
					description: "Unlock all Marvel Rivals: unlock-all searches vs real ESP and Aimbot tools. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Unlock all Marvel Rivals",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. Unlock all Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Unlock all Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "اشترِ Marvel Rivals Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
								"support@rivalshacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				privacy: {
					title: "سياسة الخصوصية | Marvel Rivals Cheats",
					description: "سياسة الخصوصية for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الخصوصية",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. سياسة الخصوصية for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الشروط",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "المعلومات التي نجمعها",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "استخدام المعلومات",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "حقوقك",
							paragraphs: [
								"support@rivalshacks.com للدعم والطلبات القانونية.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "سياسة الاسترداد | Marvel Rivals Cheats",
					description: "سياسة الاسترداد for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الاسترداد",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. سياسة الاسترداد for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "التسليم الرقمي",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. Contact email,  order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "موافقة الاسترداد",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches NACE. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "كيفية الطلب",
							paragraphs: [
								"support@rivalshacks.com للدعم والطلبات القانونية.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "شروط الاستخدام | Marvel Rivals Cheats",
					description: "شروط الاستخدام for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "شروط الاستخدام",
					intro: "Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. شروط الاستخدام for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "قبول الشروط",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. Contact email,  order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة NACE.",
							],
						},
						{
							h2: "المخاطر",
							paragraphs: [
								"Marvel Rivals Cheats يجمع ESP wallhack وcooldown tracker وmarvel rivals aimbot غير مكتشف لـ Marvel Rivals على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "التغييرات",
							paragraphs: [
								"support@rivalshacks.com للدعم والطلبات القانونية.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
		ja: {
			ui: {
				nav: {
					home: "ホーム",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "機能",
					pricing: "料金",
					setup: "セットアップ",
					updates: "更新",
					faq: "FAQ",
					buyNow: "今すぐ購入",
				},
				hero: {
					accent: "Undetected Marvel Rivalsチート",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "Marvel Rivals Windows PC向けESP wallhack、cooldown tracker、Aimbot — NACEメンテナンス付き。",
					subtitleShort: "Marvel Rivals PC向けESP・cooldown tracker・Aimbot",
					buyNow: "今すぐ購入",
					seeFeatures: "機能を見る",
				},
				trust: {
					status: "オンライン",
					statusNote: "Marvel Rivals CheatsパッケージはMarvel Rivals Windows PCで利用可能です。",
					statusShort: "稼働中",
					delivery: "即時デジタル配信",
					platform: "Windows 10 & 11",
					antiCheat: "NACEメンテナンス対応",
					antiCheatShort: "NACE対応",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "カートに追加",
					monthly: "月額",
					lifetime: "永久",
					available: "現在利用可能",
					gameBadge: "Marvel Rivals",
					platformBadge: "Windows PC",
					statusBadge: "Undetectedパッケージ",
				},
				reviews: {
					title: "プレイヤーの声",
					subtitle: "Marvel Rivals Cheats購入者からの最近のフィードバック",
					outOf: "/5",
					countLabel: "件のレビュー",
				},
				common: {
					buyNow: "今すぐ購入",
					readGuide: "ガイドを読む",
					language: "言語",
					officialLanguageNote: "英語が公式言語です。他言語はグローバルSEO向けに翻訳されています。",
					relatedPages: "関連ページ",
				},
				footer: {
					explore: "探索",
					help: "ヘルプと法務",
					tagline: "Marvel Rivals向けundetected ESP、wallhack、cooldown tracker、Aimbot — で購入。",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP・Wallhack・Aimbot",
					description: "Marvel Rivals向けundetectedチート。ESP wallhack、cooldown tracker、Aimbot、NACEメンテナンス。即時デジタル配信。",
					h1: "Marvel Rivals Cheats — Undetected ESP・Wallhack・Aimbot",
					intro: "Marvel Rivals Windows PC向けundetectedパッケージ：ESP wallhack、cooldown tracker、Aimbot、NACEメンテナンス付き。",
					imageAlt: "Marvel Rivals cheats hero ESP aimbot wallhack",
					galleryTitle: "Marvel Rivals Cheatsギャラリー — ESP、Aimbot、wallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年にMarvel Rivals Cheatsを選ぶ理由",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。rankedとquick playで敵スクワッドを読むのに最適。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "ESP wallhack、cooldown tracker、Aimbotが1ライセンス",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。別ツールではなく1ライセンス。",
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "Marvel Rivals ESP | Player Boxes & Wallhack",
					description: "Marvel Rivals ESP: player boxes, objective markers, and wallhack overlays. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marvel Rivals ESP",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。Marvel Rivals ESP.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "Marvel Rivals ESP",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Marvel Rivals ESP",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。player boxes, objective markers, and wallhack overlays.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Marvel Rivals Aimbot | Soft Aim Controls",
					description: "Marvel Rivals Aimbot: soft aim, FOV, and per-hero Aimbot profiles. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marvel Rivals Aimbot",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。Marvel Rivals Aimbot.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marvel Rivals Aimbot",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals Aimbot",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。soft aim, FOV, and per-hero Aimbot profiles.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				features: {
					title: "機能 | Full Feature List",
					description: "機能: ESP, soft aim, cooldown tracker controls. 即時デジタル配信. undetected — Windows PC.",
					h1: "機能",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。機能.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "機能",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "機能",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。ESP, soft aim, cooldown tracker controls.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				pricing: {
					title: "料金 | Monthly & Lifetime",
					description: "料金: $35 monthly or $150 lifetime licenses. 即時デジタル配信. undetected — Windows PC.",
					h1: "料金",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。料金.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "料金",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "料金",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。$35 monthly or $150 lifetime licenses.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				setup: {
					title: "セットアップ | PC Setup Guide",
					description: "セットアップ: Windows PC activation and first-launch setup. 即時デジタル配信. undetected — Windows PC.",
					h1: "セットアップ",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。セットアップ.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "セットアップ",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "セットアップ",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。Windows PC activation and first-launch setup.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				updates: {
					title: "更新 | NACE Maintenance Log",
					description: "更新: NACE patch status and rebuild notes. 即時デジタル配信. undetected — Windows PC.",
					h1: "更新",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。更新.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "更新",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。NACE patch status and rebuild notes.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and NACE questions. 即時デジタル配信. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。FAQ.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。ESP, soft aim, delivery, and NACE questions.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				support: {
					title: "サポート | Help & Contact",
					description: "サポート: order help and license support contact. 即時デジタル配信. undetected — Windows PC.",
					h1: "サポート",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。サポート.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "サポート",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "サポート",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。order help and license support contact.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				undetected: {
					title: "Undetectedチート | NACE Safe Status",
					description: "Undetectedチート: undetected maintenance after NACE patches. 即時デジタル配信. undetected — Windows PC.",
					h1: "Undetectedチート",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。Undetectedチート.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetectedチート",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Undetectedチート",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。undetected maintenance after NACE patches.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				wallhack: {
					title: "Marvel Rivals Wallhack | ESP Visibility",
					description: "Marvel Rivals Wallhack: wallhack ESP for heroes, health, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marvel Rivals Wallhack",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。Marvel Rivals Wallhack.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Marvel Rivals Wallhack",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals Wallhack",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。wallhack ESP for heroes, health, and distance.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				radar: {
					title: "クールダウン追跡 | 2D Threat Overlay",
					description: "クールダウン追跡: cooldown tracker cues for flanks and rotations. 即時デジタル配信. undetected — Windows PC.",
					h1: "クールダウン追跡",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。クールダウン追跡.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "クールダウン追跡",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "クールダウン追跡",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。cooldown tracker cues for flanks and rotations.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				battleye: {
					title: "NACE Bypass | Patch Maintenance",
					description: "NACE Bypass: how NACE updates are handled for Marvel Rivals hacks. 即時デジタル配信. undetected — Windows PC.",
					h1: "NACE Bypass",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。NACE Bypass.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "NACE Bypass",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "NACE Bypass",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。how NACE updates are handled for Marvel Rivals hacks.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Marvel Rivals Cheats 2026 | Buyer Guide",
					description: "Marvel Rivals Cheats 2026: 2026 Marvel Rivals cheats checklist before checkout. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marvel Rivals Cheats 2026",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。Marvel Rivals Cheats 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Marvel Rivals Cheats 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Marvel Rivals Cheats 2026",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。2026 Marvel Rivals cheats checklist before checkout.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				hacks: {
					title: "Marvel Rivals Cheats | ESP Aimbot Guide",
					description: "Marvel Rivals Cheats: the Marvel Rivals hacks pillar for ESP and Aimbot. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marvel Rivals Cheats",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "Marvel Rivals Cheats",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				"cheat-download": {
					title: "Marvel Rivals Cheat Download | Instant Access",
					description: "Marvel Rivals Cheat Download: digital license download after payment. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marvel Rivals Cheat Download",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。Marvel Rivals Cheat Download.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "Marvel Rivals Cheat Download",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Marvel Rivals Cheat Download",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。digital license download after payment.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				"mod-menu": {
					title: "Marvel Rivals Mod Menu | In-Game Toggles",
					description: "Marvel Rivals Mod Menu: in-client ESP and soft aim toggles. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marvel Rivals Mod Menu",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。Marvel Rivals Mod Menu.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "Marvel Rivals Mod Menu",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Mod Menu",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。in-client ESP and soft aim toggles.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				"soft-aim": {
					title: "Marvel Rivals Soft Aim | Smooth Aim Settings",
					description: "Marvel Rivals Soft Aim: smooth soft aim settings for Windows PC. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marvel Rivals Soft Aim",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。Marvel Rivals Soft Aim.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Marvel Rivals Soft Aim",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Marvel Rivals Soft Aim",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。smooth soft aim settings for Windows PC.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				"best-cheats": {
					title: "最強Marvel Rivalsチート | Buyer Checklist",
					description: "最強Marvel Rivalsチート: what to compare before buying Marvel Rivals cheats. 即時デジタル配信. undetected — Windows PC.",
					h1: "最強Marvel Rivalsチート",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。最強Marvel Rivalsチート.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "最強Marvel Rivalsチート",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最強Marvel Rivalsチート",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。what to compare before buying Marvel Rivals cheats.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Marvel Rivals Aimbot Hack | Soft Aim Assist",
					description: "Marvel Rivals Aimbot Hack: undetected Aimbot hack assist for Marvel Rivals. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marvel Rivals Aimbot Hack",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。Marvel Rivals Aimbot Hack.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Marvel Rivals Aimbot Hack",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Marvel Rivals Aimbot Hack",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。undetected Aimbot hack assist for Marvel Rivals.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				"esp-hack": {
					title: "Marvel Rivals ESP Hack | Boxes & Loot",
					description: "Marvel Rivals ESP Hack: ESP hack boxes, objective pins, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marvel Rivals ESP Hack",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。Marvel Rivals ESP Hack.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Marvel Rivals ESP Hack",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals ESP Hack",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。ESP hack boxes, objective pins, and distance.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				"unlock-all": {
					title: "Marvel Rivals Unlock All | What It Means",
					description: "Marvel Rivals Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marvel Rivals Unlock All",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。Marvel Rivals Unlock All.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Marvel Rivals Unlock All",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Marvel Rivals Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Unlock All",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。unlock-all searches vs real ESP and Aimbot tools.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
								"サポート・法務: support@rivalshacks.com",
							],
						},
					],
				},
				privacy: {
					title: "プライバシーポリシー | Marvel Rivals Cheats",
					description: "プライバシーポリシー for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "プライバシーポリシー",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。プライバシーポリシー for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "利用規約",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "収集する情報",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "情報の利用",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "あなたの権利",
							paragraphs: [
								"サポート・法務: support@rivalshacks.com",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "返金ポリシー | Marvel Rivals Cheats",
					description: "返金ポリシー for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "返金ポリシー",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。返金ポリシー for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "デジタル配信",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。Contact email,  order references, and basic site security data.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "返金承認",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"NACEパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "申請方法",
							paragraphs: [
								"サポート・法務: support@rivalshacks.com",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "利用規約 | Marvel Rivals Cheats",
					description: "利用規約 for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "利用規約",
					intro: "Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。利用規約 for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "規約への同意",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。Contact email,  order references, and basic site security data.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにNACEメンテナンス含む。",
							],
						},
						{
							h2: "リスク",
							paragraphs: [
								"Marvel Rivals CheatsはMarvel Rivals向けWindows PC用ESP wallhack、cooldown tracker、marvel rivals aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "変更",
							paragraphs: [
								"サポート・法務: support@rivalshacks.com",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
		ko: {
			ui: {
				nav: {
					home: "홈",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "기능",
					pricing: "가격",
					setup: "설치",
					updates: "업데이트",
					faq: "FAQ",
					buyNow: "구매하기",
				},
				hero: {
					accent: "Undetected Marvel Rivals 치트",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, Aimbot — NACE 유지보수 포함.",
					subtitleShort: "Marvel Rivals PC용 ESP, cooldown tracker, Aimbot",
					buyNow: "지금 구매",
					seeFeatures: "기능 보기",
				},
				trust: {
					status: "온라인",
					statusNote: "Marvel Rivals Cheats 패키지는 Marvel Rivals Windows PC에서 이용 가능합니다.",
					statusShort: "가동 중",
					delivery: "즉시 디지털 배송",
					platform: "Windows 10 & 11",
					antiCheat: "NACE 유지보수 지원",
					antiCheatShort: "NACE 지원",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "장바구니에 추가",
					monthly: "월간",
					lifetime: "평생",
					available: "지금 이용 가능",
					gameBadge: "Marvel Rivals",
					platformBadge: "Windows PC",
					statusBadge: "Undetected 패키지",
				},
				reviews: {
					title: "플레이어 후기",
					subtitle: "Marvel Rivals Cheats 구매자 최근 피드백",
					outOf: "/5",
					countLabel: "리뷰",
				},
				common: {
					buyNow: "지금 구매",
					readGuide: "가이드 읽기",
					language: "언어",
					officialLanguageNote: "영어가 공식 언어입니다. 다른 언어는 글로벌 SEO를 위해 번역되었습니다.",
					relatedPages: "관련 페이지",
				},
				footer: {
					explore: "탐색",
					help: "도움말 및 법적",
					tagline: "Marvel Rivals용 undetected ESP, wallhack, cooldown tracker, Aimbot —  결제.",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP, Wallhack, Aimbot",
					description: "Marvel Rivals undetected 치트. ESP wallhack, cooldown tracker, Aimbot, NACE 유지보수. 즉시 디지털 배송.",
					h1: "Marvel Rivals Cheats — Undetected ESP, Wallhack, Aimbot",
					intro: "Marvel Rivals Windows PC undetected 패키지: ESP wallhack, cooldown tracker, Aimbot, NACE 유지보수 포함.",
					imageAlt: "Marvel Rivals cheats hero ESP aimbot wallhack",
					galleryTitle: "Marvel Rivals Cheats 갤러리 — ESP, Aimbot, wallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026년 Marvel Rivals Cheats를 선택하는 이유",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. ranked 및 quick play에서 적 분대 읽기에 이상적.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "ESP wallhack, cooldown tracker, Aimbot 단일 라이선스",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. 별도 도구 대신 단일 라이선스.",
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "Marvel Rivals ESP | Player Boxes & Wallhack",
					description: "Marvel Rivals ESP: player boxes, objective markers, and wallhack overlays. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marvel Rivals ESP",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. Marvel Rivals ESP.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "Marvel Rivals ESP",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Marvel Rivals ESP",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. player boxes, objective markers, and wallhack overlays.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Marvel Rivals Aimbot | Soft Aim Controls",
					description: "Marvel Rivals Aimbot: soft aim, FOV, and per-hero Aimbot profiles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marvel Rivals Aimbot",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. Marvel Rivals Aimbot.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marvel Rivals Aimbot",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals Aimbot",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. soft aim, FOV, and per-hero Aimbot profiles.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				features: {
					title: "기능 | Full Feature List",
					description: "기능: ESP, soft aim, cooldown tracker controls. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "기능",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. 기능.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "기능",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "기능",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. ESP, soft aim, cooldown tracker controls.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				pricing: {
					title: "가격 | Monthly & Lifetime",
					description: "가격: $35 monthly or $150 lifetime licenses. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "가격",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. 가격.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "가격",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "가격",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. $35 monthly or $150 lifetime licenses.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				setup: {
					title: "설치 | PC Setup Guide",
					description: "설치: Windows PC activation and first-launch setup. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "설치",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. 설치.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "설치",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "설치",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. Windows PC activation and first-launch setup.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				updates: {
					title: "업데이트 | NACE Maintenance Log",
					description: "업데이트: NACE patch status and rebuild notes. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "업데이트",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. 업데이트.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "업데이트",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "업데이트",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. NACE patch status and rebuild notes.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and NACE questions. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. FAQ.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. ESP, soft aim, delivery, and NACE questions.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				support: {
					title: "지원 | Help & Contact",
					description: "지원: order help and license support contact. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "지원",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. 지원.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "지원",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "지원",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. order help and license support contact.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				undetected: {
					title: "Undetected 치트 | NACE Safe Status",
					description: "Undetected 치트: undetected maintenance after NACE patches. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Undetected 치트",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. Undetected 치트.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected 치트",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Undetected 치트",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. undetected maintenance after NACE patches.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				wallhack: {
					title: "Marvel Rivals Wallhack | ESP Visibility",
					description: "Marvel Rivals Wallhack: wallhack ESP for heroes, health, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marvel Rivals Wallhack",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. Marvel Rivals Wallhack.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Marvel Rivals Wallhack",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals Wallhack",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. wallhack ESP for heroes, health, and distance.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				radar: {
					title: "쿨다운 트래커 | 2D Threat Overlay",
					description: "쿨다운 트래커: cooldown tracker cues for flanks and rotations. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "쿨다운 트래커",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. 쿨다운 트래커.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "쿨다운 트래커",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "쿨다운 트래커",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. cooldown tracker cues for flanks and rotations.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				battleye: {
					title: "NACE Bypass | Patch Maintenance",
					description: "NACE Bypass: how NACE updates are handled for Marvel Rivals hacks. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "NACE Bypass",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. NACE Bypass.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "NACE Bypass",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "NACE Bypass",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. how NACE updates are handled for Marvel Rivals hacks.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Marvel Rivals Cheats 2026 | Buyer Guide",
					description: "Marvel Rivals Cheats 2026: 2026 Marvel Rivals cheats checklist before checkout. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marvel Rivals Cheats 2026",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. Marvel Rivals Cheats 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Marvel Rivals Cheats 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Marvel Rivals Cheats 2026",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. 2026 Marvel Rivals cheats checklist before checkout.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				hacks: {
					title: "Marvel Rivals Cheats | ESP Aimbot Guide",
					description: "Marvel Rivals Cheats: the Marvel Rivals hacks pillar for ESP and Aimbot. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "Marvel Rivals Cheats",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				"cheat-download": {
					title: "Marvel Rivals Cheat Download | Instant Access",
					description: "Marvel Rivals Cheat Download: digital license download after payment. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marvel Rivals Cheat Download",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. Marvel Rivals Cheat Download.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "Marvel Rivals Cheat Download",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Marvel Rivals Cheat Download",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. digital license download after payment.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				"mod-menu": {
					title: "Marvel Rivals 모드 메뉴 | In-Game Toggles",
					description: "Marvel Rivals 모드 메뉴: in-client ESP and soft aim toggles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marvel Rivals 모드 메뉴",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. Marvel Rivals 모드 메뉴.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "Marvel Rivals 모드 메뉴",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals 모드 메뉴",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. in-client ESP and soft aim toggles.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				"soft-aim": {
					title: "Marvel Rivals Soft Aim | Smooth Aim Settings",
					description: "Marvel Rivals Soft Aim: smooth soft aim settings for Windows PC. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marvel Rivals Soft Aim",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. Marvel Rivals Soft Aim.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Marvel Rivals Soft Aim",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Marvel Rivals Soft Aim",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. smooth soft aim settings for Windows PC.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				"best-cheats": {
					title: "최고의 Marvel Rivals 치트 | Buyer Checklist",
					description: "최고의 Marvel Rivals 치트: what to compare before buying Marvel Rivals cheats. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "최고의 Marvel Rivals 치트",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. 최고의 Marvel Rivals 치트.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "최고의 Marvel Rivals 치트",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "최고의 Marvel Rivals 치트",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. what to compare before buying Marvel Rivals cheats.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Marvel Rivals 에임봇 핵 | Soft Aim Assist",
					description: "Marvel Rivals 에임봇 핵: undetected Aimbot hack assist for Marvel Rivals. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marvel Rivals 에임봇 핵",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. Marvel Rivals 에임봇 핵.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Marvel Rivals 에임봇 핵",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Marvel Rivals 에임봇 핵",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. undetected Aimbot hack assist for Marvel Rivals.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				"esp-hack": {
					title: "Marvel Rivals ESP 핵 | Boxes & Loot",
					description: "Marvel Rivals ESP 핵: ESP hack boxes, objective pins, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marvel Rivals ESP 핵",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. Marvel Rivals ESP 핵.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Marvel Rivals ESP 핵",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals ESP 핵",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. ESP hack boxes, objective pins, and distance.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				"unlock-all": {
					title: "Marvel Rivals Unlock All | What It Means",
					description: "Marvel Rivals Unlock All: unlock-all searches vs real ESP and Aimbot tools. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marvel Rivals Unlock All",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. Marvel Rivals Unlock All.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Marvel Rivals Unlock All",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Marvel Rivals Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Unlock All",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. unlock-all searches vs real ESP and Aimbot tools.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
								"지원 및 법무: support@rivalshacks.com",
							],
						},
					],
				},
				privacy: {
					title: "개인정보 처리방침 | Marvel Rivals Cheats",
					description: "개인정보 처리방침 for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "개인정보 처리방침",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. 개인정보 처리방침 for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"지원 및 법무: support@rivalshacks.com",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "환불 정책 | Marvel Rivals Cheats",
					description: "환불 정책 for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "환불 정책",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. 환불 정책 for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. Contact email,  order references, and basic site security data.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"NACE 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"지원 및 법무: support@rivalshacks.com",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "이용 약관 | Marvel Rivals Cheats",
					description: "이용 약관 for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "이용 약관",
					intro: "Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. 이용 약관 for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. Contact email,  order references, and basic site security data.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 NACE 유지보수 포함.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Marvel Rivals Cheats는 Marvel Rivals Windows PC용 ESP wallhack, cooldown tracker, marvel rivals aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"지원 및 법무: support@rivalshacks.com",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
		zh: {
			ui: {
				nav: {
					home: "首页",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "功能",
					pricing: "价格",
					setup: "安装",
					updates: "更新",
					faq: "常见问题",
					buyNow: "立即购买",
				},
				hero: {
					accent: "Undetected Marvel Rivals作弊",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "适用于Marvel Rivals Windows PC的ESP wallhack、cooldown tracker和Aimbot — 含NACE维护。",
					subtitleShort: "Marvel Rivals PC版ESP、cooldown tracker与Aimbot",
					buyNow: "立即购买",
					seeFeatures: "查看功能",
				},
				trust: {
					status: "在线",
					statusNote: "Marvel Rivals Cheats套餐已在Marvel Rivals Windows PC上线。",
					statusShort: "运行中",
					delivery: "即时数字交付",
					platform: "Windows 10 和 11",
					antiCheat: "支持NACE维护",
					antiCheatShort: "NACE支持",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "加入购物车",
					monthly: "月付",
					lifetime: "终身",
					available: "现已可用",
					gameBadge: "Marvel Rivals",
					platformBadge: "Windows PC",
					statusBadge: "Undetected套餐",
				},
				reviews: {
					title: "玩家评价",
					subtitle: "Marvel Rivals Cheats 买家近期反馈",
					outOf: "/5",
					countLabel: "条评价",
				},
				common: {
					buyNow: "立即购买",
					readGuide: "阅读指南",
					language: "语言",
					officialLanguageNote: "英语为官方语言。其他语言为全球SEO翻译版本。",
					relatedPages: "相关页面",
				},
				footer: {
					explore: "探索",
					help: "帮助与法律",
					tagline: "Marvel Rivals undetected ESP、wallhack、cooldown tracker与Aimbot — 通过结账。",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP、Wallhack、Aimbot",
					description: "Marvel Rivals undetected作弊。ESP wallhack、cooldown tracker、Aimbot、NACE维护。即时数字交付。",
					h1: "Marvel Rivals Cheats — Undetected ESP、Wallhack、Aimbot",
					intro: "Marvel Rivals Windows PC undetected套餐：ESP wallhack、cooldown tracker、Aimbot，含NACE维护。",
					imageAlt: "Marvel Rivals cheats hero ESP aimbot wallhack",
					galleryTitle: "Marvel Rivals Cheats图库 — ESP、Aimbot、wallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年选择Marvel Rivals Cheats的原因",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。适合在ranked和quick play中读取敌方小队。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "ESP wallhack、cooldown tracker、Aimbot单一许可证",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。一个许可证而非多个工具。",
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "Marvel Rivals ESP | Player Boxes & Wallhack",
					description: "Marvel Rivals ESP: player boxes, objective markers, and wallhack overlays. 即时数字交付. undetected — Windows PC.",
					h1: "Marvel Rivals ESP",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。Marvel Rivals ESP.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "Marvel Rivals ESP",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Marvel Rivals ESP",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。player boxes, objective markers, and wallhack overlays.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Marvel Rivals Aimbot | Soft Aim Controls",
					description: "Marvel Rivals Aimbot: soft aim, FOV, and per-hero Aimbot profiles. 即时数字交付. undetected — Windows PC.",
					h1: "Marvel Rivals Aimbot",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。Marvel Rivals Aimbot.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marvel Rivals Aimbot",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals Aimbot",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。soft aim, FOV, and per-hero Aimbot profiles.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				features: {
					title: "功能 | Full Feature List",
					description: "功能: ESP, soft aim, cooldown tracker controls. 即时数字交付. undetected — Windows PC.",
					h1: "功能",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。功能.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "功能",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "功能",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。ESP, soft aim, cooldown tracker controls.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				pricing: {
					title: "价格 | Monthly & Lifetime",
					description: "价格: $35 monthly or $150 lifetime licenses. 即时数字交付. undetected — Windows PC.",
					h1: "价格",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。价格.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "价格",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "价格",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。$35 monthly or $150 lifetime licenses.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				setup: {
					title: "安装 | PC Setup Guide",
					description: "安装: Windows PC activation and first-launch setup. 即时数字交付. undetected — Windows PC.",
					h1: "安装",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。安装.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "安装",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "安装",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。Windows PC activation and first-launch setup.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				updates: {
					title: "更新 | NACE Maintenance Log",
					description: "更新: NACE patch status and rebuild notes. 即时数字交付. undetected — Windows PC.",
					h1: "更新",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。更新.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "更新",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。NACE patch status and rebuild notes.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				faq: {
					title: "常见问题 | Common Answers",
					description: "常见问题: ESP, soft aim, delivery, and NACE questions. 即时数字交付. undetected — Windows PC.",
					h1: "常见问题",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。常见问题.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "常见问题",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "常见问题",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。ESP, soft aim, delivery, and NACE questions.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				support: {
					title: "支持 | Help & Contact",
					description: "支持: order help and license support contact. 即时数字交付. undetected — Windows PC.",
					h1: "支持",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。支持.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "支持",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "支持",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。order help and license support contact.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				undetected: {
					title: "Undetected作弊 | NACE Safe Status",
					description: "Undetected作弊: undetected maintenance after NACE patches. 即时数字交付. undetected — Windows PC.",
					h1: "Undetected作弊",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。Undetected作弊.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected作弊",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Undetected作弊",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。undetected maintenance after NACE patches.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				wallhack: {
					title: "Marvel Rivals Wallhack | ESP Visibility",
					description: "Marvel Rivals Wallhack: wallhack ESP for heroes, health, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "Marvel Rivals Wallhack",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。Marvel Rivals Wallhack.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Marvel Rivals Wallhack",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals Wallhack",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。wallhack ESP for heroes, health, and distance.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				radar: {
					title: "冷却追踪 | 2D Threat Overlay",
					description: "冷却追踪: cooldown tracker cues for flanks and rotations. 即时数字交付. undetected — Windows PC.",
					h1: "冷却追踪",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。冷却追踪.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "冷却追踪",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "冷却追踪",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。cooldown tracker cues for flanks and rotations.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				battleye: {
					title: "NACE Bypass | Patch Maintenance",
					description: "NACE Bypass: how NACE updates are handled for Marvel Rivals hacks. 即时数字交付. undetected — Windows PC.",
					h1: "NACE Bypass",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。NACE Bypass.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "NACE Bypass",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "NACE Bypass",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。how NACE updates are handled for Marvel Rivals hacks.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Marvel Rivals作弊 2026 | Buyer Guide",
					description: "Marvel Rivals作弊 2026: 2026 Marvel Rivals cheats checklist before checkout. 即时数字交付. undetected — Windows PC.",
					h1: "Marvel Rivals作弊 2026",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。Marvel Rivals作弊 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Marvel Rivals作弊 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Marvel Rivals作弊 2026",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。2026 Marvel Rivals cheats checklist before checkout.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				hacks: {
					title: "Marvel Rivals作弊 | ESP Aimbot Guide",
					description: "Marvel Rivals作弊: the Marvel Rivals hacks pillar for ESP and Aimbot. 即时数字交付. undetected — Windows PC.",
					h1: "Marvel Rivals作弊",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。Marvel Rivals作弊.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "Marvel Rivals作弊",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals作弊",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				"cheat-download": {
					title: "Marvel Rivals作弊下载 | Instant Access",
					description: "Marvel Rivals作弊下载: digital license download after payment. 即时数字交付. undetected — Windows PC.",
					h1: "Marvel Rivals作弊下载",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。Marvel Rivals作弊下载.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "Marvel Rivals作弊下载",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Marvel Rivals作弊下载",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。digital license download after payment.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				"mod-menu": {
					title: "Marvel Rivals修改菜单 | In-Game Toggles",
					description: "Marvel Rivals修改菜单: in-client ESP and soft aim toggles. 即时数字交付. undetected — Windows PC.",
					h1: "Marvel Rivals修改菜单",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。Marvel Rivals修改菜单.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "Marvel Rivals修改菜单",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals修改菜单",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。in-client ESP and soft aim toggles.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				"soft-aim": {
					title: "Marvel Rivals Soft Aim | Smooth Aim Settings",
					description: "Marvel Rivals Soft Aim: smooth soft aim settings for Windows PC. 即时数字交付. undetected — Windows PC.",
					h1: "Marvel Rivals Soft Aim",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。Marvel Rivals Soft Aim.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Marvel Rivals Soft Aim",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Marvel Rivals Soft Aim",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。smooth soft aim settings for Windows PC.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				"best-cheats": {
					title: "最佳Marvel Rivals作弊 | Buyer Checklist",
					description: "最佳Marvel Rivals作弊: what to compare before buying Marvel Rivals cheats. 即时数字交付. undetected — Windows PC.",
					h1: "最佳Marvel Rivals作弊",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。最佳Marvel Rivals作弊.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "最佳Marvel Rivals作弊",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最佳Marvel Rivals作弊",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。what to compare before buying Marvel Rivals cheats.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Marvel Rivals自瞄外挂 | Soft Aim Assist",
					description: "Marvel Rivals自瞄外挂: undetected Aimbot hack assist for Marvel Rivals. 即时数字交付. undetected — Windows PC.",
					h1: "Marvel Rivals自瞄外挂",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。Marvel Rivals自瞄外挂.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Marvel Rivals自瞄外挂",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Marvel Rivals自瞄外挂",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。undetected Aimbot hack assist for Marvel Rivals.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				"esp-hack": {
					title: "Marvel Rivals ESP外挂 | Boxes & Loot",
					description: "Marvel Rivals ESP外挂: ESP hack boxes, objective pins, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "Marvel Rivals ESP外挂",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。Marvel Rivals ESP外挂.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Marvel Rivals ESP外挂",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals ESP外挂",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。ESP hack boxes, objective pins, and distance.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				"unlock-all": {
					title: "Marvel Rivals Unlock All | What It Means",
					description: "Marvel Rivals Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即时数字交付. undetected — Windows PC.",
					h1: "Marvel Rivals Unlock All",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。Marvel Rivals Unlock All.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Marvel Rivals Unlock All",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "购买 Marvel Rivals Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Unlock All",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。unlock-all searches vs real ESP and Aimbot tools.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
								"支持与法务：support@rivalshacks.com",
							],
						},
					],
				},
				privacy: {
					title: "隐私政策 | Marvel Rivals Cheats",
					description: "隐私政策 for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "隐私政策",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。隐私政策 for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"支持与法务：support@rivalshacks.com",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "退款政策 | Marvel Rivals Cheats",
					description: "退款政策 for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "退款政策",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。退款政策 for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。Contact email,  order references, and basic site security data.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"NACE补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"支持与法务：support@rivalshacks.com",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "使用条款 | Marvel Rivals Cheats",
					description: "使用条款 for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "使用条款",
					intro: "Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。使用条款 for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。Contact email,  order references, and basic site security data.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含NACE维护。",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Marvel Rivals Cheats为Marvel RivalsWindows PC提供ESP wallhack、cooldown tracker和marvel rivals aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"支持与法务：support@rivalshacks.com",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
		hi: {
			ui: {
				nav: {
					home: "होम",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "फ़ीचर्स",
					pricing: "कीमत",
					setup: "सेटअप",
					updates: "अपडेट",
					faq: "FAQ",
					buyNow: "अभी खरीदें",
				},
				hero: {
					accent: "Undetected Marvel Rivals cheats",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "Marvel Rivals Windows PC के लिए ESP wallhack, cooldown tracker और Aimbot — NACE maintenance शामिल।",
					subtitleShort: "Marvel Rivals PC के लिए ESP, cooldown tracker और Aimbot",
					buyNow: "अभी खरीदें",
					seeFeatures: "फ़ीचर्स देखें",
				},
				trust: {
					status: "ऑनलाइन",
					statusNote: "Marvel Rivals Cheats पैकेज Marvel Rivals Windows PC के लिए सक्रिय है।",
					statusShort: "सक्रिय",
					delivery: "तुरंत डिजिटल डिलीवरी",
					platform: "Windows 10 और 11",
					antiCheat: "NACE maintenance समर्थित",
					antiCheatShort: "NACE समर्थित",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "कार्ट में जोड़ें",
					monthly: "मासिक",
					lifetime: "लाइफ़टाइम",
					available: "अभी उपलब्ध",
					gameBadge: "Marvel Rivals",
					platformBadge: "Windows PC",
					statusBadge: "Undetected पैकेज",
				},
				reviews: {
					title: "खिलाड़ी क्या कहते हैं",
					subtitle: "Marvel Rivals Cheats खरीदारों की हाल की प्रतिक्रिया",
					outOf: "/5",
					countLabel: "समीक्षाएँ",
				},
				common: {
					buyNow: "अभी खरीदें",
					readGuide: "गाइड पढ़ें",
					language: "भाषा",
					officialLanguageNote: "अंग्रेज़ी आधिकारिक भाषा है। अन्य भाषाएँ वैश्विक SEO के लिए अनुवादित हैं।",
					relatedPages: "संबंधित पेज",
				},
				footer: {
					explore: "एक्सप्लोर",
					help: "सहायता और कानूनी",
					tagline: "Marvel Rivals के लिए undetected ESP, wallhack, cooldown tracker और Aimbot — checkout।",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP, Wallhack और Aimbot",
					description: "Marvel Rivals undetected cheats. ESP wallhack, cooldown tracker, Aimbot, NACE maintenance. Instant digital delivery.",
					h1: "Marvel Rivals Cheats — Undetected ESP, Wallhack और Aimbot",
					intro: "Marvel Rivals Windows PC undetected पैकेज: ESP wallhack, cooldown tracker, Aimbot, NACE maintenance सहित.",
					imageAlt: "Marvel Rivals cheats hero ESP aimbot wallhack",
					galleryTitle: "Marvel Rivals Cheats gallery — ESP, Aimbot, wallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026 में Marvel Rivals Cheats क्यों",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। ranked और quick play में दुश्मन squad पढ़ने के लिए आदर्श.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "ESP wallhack, cooldown tracker, Aimbot एक लाइसेंस में",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। अलग टूल्स के बजाय एक लाइसेंस.",
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "Marvel Rivals ESP | Player Boxes & Wallhack",
					description: "Marvel Rivals ESP: player boxes, objective markers, and wallhack overlays. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marvel Rivals ESP",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। Marvel Rivals ESP.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "Marvel Rivals ESP",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Marvel Rivals ESP",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। player boxes, objective markers, and wallhack overlays.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Marvel Rivals Aimbot | Soft Aim Controls",
					description: "Marvel Rivals Aimbot: soft aim, FOV, and per-hero Aimbot profiles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marvel Rivals Aimbot",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। Marvel Rivals Aimbot.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marvel Rivals Aimbot",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals Aimbot",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। soft aim, FOV, and per-hero Aimbot profiles.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				features: {
					title: "फ़ीचर्स | Full Feature List",
					description: "फ़ीचर्स: ESP, soft aim, cooldown tracker controls. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "फ़ीचर्स",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। फ़ीचर्स.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "फ़ीचर्स",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "फ़ीचर्स",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। ESP, soft aim, cooldown tracker controls.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				pricing: {
					title: "कीमत | Monthly & Lifetime",
					description: "कीमत: $35 monthly or $150 lifetime licenses. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "कीमत",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। कीमत.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "कीमत",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "कीमत",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। $35 monthly or $150 lifetime licenses.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				setup: {
					title: "सेटअप | PC Setup Guide",
					description: "सेटअप: Windows PC activation and first-launch setup. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सेटअप",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। सेटअप.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "सेटअप",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "सेटअप",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। Windows PC activation and first-launch setup.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				updates: {
					title: "अपडेट | NACE Maintenance Log",
					description: "अपडेट: NACE patch status and rebuild notes. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "अपडेट",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। अपडेट.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "अपडेट",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "अपडेट",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। NACE patch status and rebuild notes.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and NACE questions. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। FAQ.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। ESP, soft aim, delivery, and NACE questions.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				support: {
					title: "सहायता | Help & Contact",
					description: "सहायता: order help and license support contact. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सहायता",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। सहायता.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "सहायता",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "सहायता",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। order help and license support contact.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | NACE Safe Status",
					description: "Undetected cheats: undetected maintenance after NACE patches. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। Undetected cheats.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। undetected maintenance after NACE patches.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				wallhack: {
					title: "Marvel Rivals Wallhack | ESP Visibility",
					description: "Marvel Rivals Wallhack: wallhack ESP for heroes, health, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marvel Rivals Wallhack",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। Marvel Rivals Wallhack.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Marvel Rivals Wallhack",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals Wallhack",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। wallhack ESP for heroes, health, and distance.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				radar: {
					title: "Cooldown tracker | 2D Threat Overlay",
					description: "Cooldown tracker: cooldown tracker cues for flanks and rotations. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Cooldown tracker",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। Cooldown tracker.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "Cooldown tracker",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Cooldown tracker",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। cooldown tracker cues for flanks and rotations.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				battleye: {
					title: "NACE Bypass | Patch Maintenance",
					description: "NACE Bypass: how NACE updates are handled for Marvel Rivals hacks. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "NACE Bypass",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। NACE Bypass.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "NACE Bypass",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "NACE Bypass",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। how NACE updates are handled for Marvel Rivals hacks.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Marvel Rivals Cheats 2026 | Buyer Guide",
					description: "Marvel Rivals Cheats 2026: 2026 Marvel Rivals cheats checklist before checkout. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marvel Rivals Cheats 2026",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। Marvel Rivals Cheats 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Marvel Rivals Cheats 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Marvel Rivals Cheats 2026",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। 2026 Marvel Rivals cheats checklist before checkout.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				hacks: {
					title: "Marvel Rivals Cheats | ESP Aimbot Guide",
					description: "Marvel Rivals Cheats: the Marvel Rivals hacks pillar for ESP and Aimbot. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "Marvel Rivals Cheats",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				"cheat-download": {
					title: "Marvel Rivals Cheat Download | Instant Access",
					description: "Marvel Rivals Cheat Download: digital license download after payment. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marvel Rivals Cheat Download",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। Marvel Rivals Cheat Download.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "Marvel Rivals Cheat Download",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Marvel Rivals Cheat Download",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। digital license download after payment.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				"mod-menu": {
					title: "Marvel Rivals Mod Menu | In-Game Toggles",
					description: "Marvel Rivals Mod Menu: in-client ESP and soft aim toggles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marvel Rivals Mod Menu",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। Marvel Rivals Mod Menu.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "Marvel Rivals Mod Menu",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Mod Menu",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। in-client ESP and soft aim toggles.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				"soft-aim": {
					title: "Marvel Rivals Soft Aim | Smooth Aim Settings",
					description: "Marvel Rivals Soft Aim: smooth soft aim settings for Windows PC. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marvel Rivals Soft Aim",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। Marvel Rivals Soft Aim.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Marvel Rivals Soft Aim",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Marvel Rivals Soft Aim",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। smooth soft aim settings for Windows PC.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				"best-cheats": {
					title: "सर्वश्रेष्ठ Marvel Rivals Cheats | Buyer Checklist",
					description: "सर्वश्रेष्ठ Marvel Rivals Cheats: what to compare before buying Marvel Rivals cheats. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सर्वश्रेष्ठ Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। सर्वश्रेष्ठ Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "सर्वश्रेष्ठ Marvel Rivals Cheats",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "सर्वश्रेष्ठ Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। what to compare before buying Marvel Rivals cheats.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Marvel Rivals Aimbot Hack | Soft Aim Assist",
					description: "Marvel Rivals Aimbot Hack: undetected Aimbot hack assist for Marvel Rivals. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marvel Rivals Aimbot Hack",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। Marvel Rivals Aimbot Hack.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Marvel Rivals Aimbot Hack",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Marvel Rivals Aimbot Hack",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। undetected Aimbot hack assist for Marvel Rivals.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				"esp-hack": {
					title: "Marvel Rivals ESP Hack | Boxes & Loot",
					description: "Marvel Rivals ESP Hack: ESP hack boxes, objective pins, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marvel Rivals ESP Hack",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। Marvel Rivals ESP Hack.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Marvel Rivals ESP Hack",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals ESP Hack",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। ESP hack boxes, objective pins, and distance.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				"unlock-all": {
					title: "Marvel Rivals Unlock All | What It Means",
					description: "Marvel Rivals Unlock All: unlock-all searches vs real ESP and Aimbot tools. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marvel Rivals Unlock All",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। Marvel Rivals Unlock All.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Marvel Rivals Unlock All",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Marvel Rivals Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Unlock All",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। unlock-all searches vs real ESP and Aimbot tools.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
								"सहायता: support@rivalshacks.com",
							],
						},
					],
				},
				privacy: {
					title: "गोपनीयता नीति | Marvel Rivals Cheats",
					description: "गोपनीयता नीति for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "गोपनीयता नीति",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। गोपनीयता नीति for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"सहायता: support@rivalshacks.com",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "रिफंड नीति | Marvel Rivals Cheats",
					description: "रिफंड नीति for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "रिफंड नीति",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। रिफंड नीति for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। Contact email,  order references, and basic site security data.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"NACE पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"सहायता: support@rivalshacks.com",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "उपयोग की शर्तें | Marvel Rivals Cheats",
					description: "उपयोग की शर्तें for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "उपयोग की शर्तें",
					intro: "Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। उपयोग की शर्तें for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। Contact email,  order references, and basic site security data.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में NACE maintenance शामिल।",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Marvel Rivals Cheats Marvel Rivals के लिए Windows PC पर ESP wallhack, cooldown tracker और marvel rivals aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"सहायता: support@rivalshacks.com",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
		id: {
			ui: {
				nav: {
					home: "Beranda",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fitur",
					pricing: "Harga",
					setup: "Setup",
					updates: "Pembaruan",
					faq: "FAQ",
					buyNow: "Beli sekarang",
				},
				hero: {
					accent: "Cheat Marvel Rivals undetected",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "ESP wallhack, cooldown tracker, dan Aimbot untuk Marvel Rivals di PC Windows — pemeliharaan NACE termasuk.",
					subtitleShort: "ESP, cooldown tracker & Aimbot untuk Marvel Rivals PC",
					buyNow: "Beli sekarang",
					seeFeatures: "Lihat fitur",
				},
				trust: {
					status: "Online",
					statusNote: "Paket Marvel Rivals Cheats aktif untuk Marvel Rivals di PC Windows.",
					statusShort: "Aktif",
					delivery: "Pengiriman digital instan",
					platform: "Windows 10 & 11",
					antiCheat: "Pemeliharaan NACE didukung",
					antiCheatShort: "NACE didukung",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "Tambah ke keranjang",
					monthly: "Bulanan",
					lifetime: "Seumur hidup",
					available: "Tersedia sekarang",
					gameBadge: "Marvel Rivals",
					platformBadge: "Windows PC",
					statusBadge: "Paket undetected",
				},
				reviews: {
					title: "Apa kata pemain",
					subtitle: "Umpan balik terbaru dari pembeli Marvel Rivals Cheats",
					outOf: "dari 5",
					countLabel: "ulasan",
				},
				common: {
					buyNow: "Beli sekarang",
					readGuide: "Baca panduan",
					language: "Bahasa",
					officialLanguageNote: "Bahasa Inggris adalah bahasa resmi. Bahasa lain diterjemahkan untuk SEO global.",
					relatedPages: "Halaman terkait",
				},
				footer: {
					explore: "Jelajahi",
					help: "Bantuan & legal",
					tagline: "ESP, wallhack, cooldown tracker, dan Aimbot undetected untuk Marvel Rivals — after payment.",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Marvel Rivals undetected untuk Marvel Rivals di PC. ESP wallhack, cooldown tracker, Aimbot, pemeliharaan NACE. Pengiriman digital instan.",
					h1: "Marvel Rivals Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Paket undetected Marvel Rivals di Windows PC: ESP wallhack, cooldown tracker, Aimbot dengan pemeliharaan NACE.",
					imageAlt: "Marvel Rivals ESP player tags hack",
					galleryTitle: "Galeri Marvel Rivals Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mengapa Marvel Rivals Cheats di 2026",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Ideal membaca squad musuh di ranked dan quick play.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "ESP wallhack, cooldown tracker, Aimbot dalam satu lisensi",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Satu lisensi alih-alih alat terpisah.",
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Marvel Rivals | Player Boxes & Wallhack",
					description: "ESP Marvel Rivals: player boxes, objective markers, and wallhack overlays. pengiriman digital instan. undetected — PC Windows.",
					h1: "ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. player boxes, objective markers, and wallhack overlays.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Marvel Rivals | Soft Aim Controls",
					description: "Aimbot Marvel Rivals: soft aim, FOV, and per-hero Aimbot profiles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. soft aim, FOV, and per-hero Aimbot profiles.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				features: {
					title: "Fitur | Full Feature List",
					description: "Fitur: ESP, soft aim, cooldown tracker controls. pengiriman digital instan. undetected — PC Windows.",
					h1: "Fitur",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Fitur.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "Fitur",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fitur",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. ESP, soft aim, cooldown tracker controls.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				pricing: {
					title: "Harga | Monthly & Lifetime",
					description: "Harga: $35 monthly or $150 lifetime licenses. pengiriman digital instan. undetected — PC Windows.",
					h1: "Harga",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Harga.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Harga",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Harga",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. $35 monthly or $150 lifetime licenses.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. pengiriman digital instan. undetected — PC Windows.",
					h1: "Setup",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Setup.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Windows PC activation and first-launch setup.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				updates: {
					title: "Pembaruan | NACE Maintenance Log",
					description: "Pembaruan: NACE patch status and rebuild notes. pengiriman digital instan. undetected — PC Windows.",
					h1: "Pembaruan",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Pembaruan.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "Pembaruan",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Pembaruan",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. NACE patch status and rebuild notes.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and NACE questions. pengiriman digital instan. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. FAQ.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. ESP, soft aim, delivery, and NACE questions.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				support: {
					title: "Dukungan | Help & Contact",
					description: "Dukungan: order help and license support contact. pengiriman digital instan. undetected — PC Windows.",
					h1: "Dukungan",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Dukungan.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "Dukungan",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dukungan",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. order help and license support contact.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | NACE Safe Status",
					description: "Cheat undetected: undetected maintenance after NACE patches. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Cheat undetected.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. undetected maintenance after NACE patches.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Marvel Rivals | ESP Visibility",
					description: "Wallhack Marvel Rivals: wallhack ESP for heroes, health, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Wallhack Marvel Rivals",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Wallhack Marvel Rivals.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Wallhack Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. wallhack ESP for heroes, health, and distance.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				radar: {
					title: "Pelacak cooldown | 2D Threat Overlay",
					description: "Pelacak cooldown: cooldown tracker cues for flanks and rotations. pengiriman digital instan. undetected — PC Windows.",
					h1: "Pelacak cooldown",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Pelacak cooldown.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "Pelacak cooldown",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Pelacak cooldown",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. cooldown tracker cues for flanks and rotations.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass NACE | Patch Maintenance",
					description: "Bypass NACE: how NACE updates are handled for Marvel Rivals hacks. pengiriman digital instan. undetected — PC Windows.",
					h1: "Bypass NACE",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Bypass NACE.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "Bypass NACE",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass NACE",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. how NACE updates are handled for Marvel Rivals hacks.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Marvel Rivals 2026 | Buyer Guide",
					description: "Cheat Marvel Rivals 2026: 2026 Marvel Rivals cheats checklist before checkout. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Marvel Rivals 2026",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Cheat Marvel Rivals 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Cheat Marvel Rivals 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Cheat Marvel Rivals 2026",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. 2026 Marvel Rivals cheats checklist before checkout.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Marvel Rivals | ESP Aimbot Guide",
					description: "Cheat Marvel Rivals: the Marvel Rivals hacks pillar for ESP and Aimbot. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Marvel Rivals",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Cheat Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "Cheat Marvel Rivals",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Cheat Marvel Rivals | Instant Access",
					description: "Download Cheat Marvel Rivals: digital license download after payment. pengiriman digital instan. undetected — PC Windows.",
					h1: "Download Cheat Marvel Rivals",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Download Cheat Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "Download Cheat Marvel Rivals",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Cheat Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. digital license download after payment.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Marvel Rivals | In-Game Toggles",
					description: "Menu mod Marvel Rivals: in-client ESP and soft aim toggles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Menu mod Marvel Rivals",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Menu mod Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "Menu mod Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. in-client ESP and soft aim toggles.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marvel Rivals | Smooth Aim Settings",
					description: "Soft aim Marvel Rivals: smooth soft aim settings for Windows PC. pengiriman digital instan. undetected — PC Windows.",
					h1: "Soft aim Marvel Rivals",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Soft aim Marvel Rivals.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Soft aim Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. smooth soft aim settings for Windows PC.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Marvel Rivals terbaik | Buyer Checklist",
					description: "Cheat Marvel Rivals terbaik: what to compare before buying Marvel Rivals cheats. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Marvel Rivals terbaik",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Cheat Marvel Rivals terbaik.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "Cheat Marvel Rivals terbaik",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Marvel Rivals terbaik",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. what to compare before buying Marvel Rivals cheats.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Marvel Rivals | Soft Aim Assist",
					description: "Hack aimbot Marvel Rivals: undetected Aimbot hack assist for Marvel Rivals. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Hack aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. undetected Aimbot hack assist for Marvel Rivals.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Marvel Rivals | Boxes & Loot",
					description: "Hack ESP Marvel Rivals: ESP hack boxes, objective pins, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Hack ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Hack ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Hack ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. ESP hack boxes, objective pins, and distance.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marvel Rivals | What It Means",
					description: "Unlock all Marvel Rivals: unlock-all searches vs real ESP and Aimbot tools. pengiriman digital instan. undetected — PC Windows.",
					h1: "Unlock all Marvel Rivals",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Unlock all Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Unlock all Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Beli Marvel Rivals Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
								"support@rivalshacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				privacy: {
					title: "Kebijakan privasi | Marvel Rivals Cheats",
					description: "Kebijakan privasi for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan privasi",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Kebijakan privasi for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@rivalshacks.com untuk dukungan dan legal.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "Kebijakan refund | Marvel Rivals Cheats",
					description: "Kebijakan refund for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan refund",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Kebijakan refund for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Contact email,  order references, and basic site security data.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch NACE. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@rivalshacks.com untuk dukungan dan legal.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "Syarat penggunaan | Marvel Rivals Cheats",
					description: "Syarat penggunaan for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Syarat penggunaan",
					intro: "Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Syarat penggunaan for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Contact email,  order references, and basic site security data.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan NACE.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Marvel Rivals Cheats menyediakan ESP wallhack, cooldown tracker, dan marvel rivals aimbot undetected untuk Marvel Rivals di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@rivalshacks.com untuk dukungan dan legal.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
		th: {
			ui: {
				nav: {
					home: "หน้าแรก",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "ฟีเจอร์",
					pricing: "ราคา",
					setup: "ติดตั้ง",
					updates: "อัปเดต",
					faq: "FAQ",
					buyNow: "ซื้อเลย",
				},
				hero: {
					accent: "Marvel Rivals cheats ไม่ถูกตรวจจับ",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "ESP wallhack, cooldown tracker และ Aimbot สำหรับ Marvel Rivals บน Windows PC — รวมการดูแล NACE",
					subtitleShort: "ESP, cooldown tracker และ Aimbot สำหรับ Marvel Rivals PC",
					buyNow: "ซื้อเลย",
					seeFeatures: "ดูฟีเจอร์",
				},
				trust: {
					status: "ออนไลน์",
					statusNote: "แพ็กเกจ Marvel Rivals Cheats พร้อมใช้งานสำหรับ Marvel Rivals บน Windows PC",
					statusShort: "ใช้งาน",
					delivery: "จัดส่งดิจิทัลทันที",
					platform: "Windows 10 และ 11",
					antiCheat: "รองรับการดูแล NACE",
					antiCheatShort: "NACE รองรับ",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "เพิ่มในตะกร้า",
					monthly: "รายเดือน",
					lifetime: "ตลอดชีพ",
					available: "พร้อมใช้งาน",
					gameBadge: "Marvel Rivals",
					platformBadge: "Windows PC",
					statusBadge: "แพ็กเกจ undetected",
				},
				reviews: {
					title: "ผู้เล่นพูดว่าอย่างไร",
					subtitle: "ความคิดเห็นล่าสุดจากผู้ซื้อ Marvel Rivals Cheats",
					outOf: "จาก 5",
					countLabel: "รีวิว",
				},
				common: {
					buyNow: "ซื้อเลย",
					readGuide: "อ่านคู่มือ",
					language: "ภาษา",
					officialLanguageNote: "ภาษาอังกฤษเป็นภาษาทางการ ภาษาอื่นแปลเพื่อ SEO ระดับโลก",
					relatedPages: "หน้าที่เกี่ยวข้อง",
				},
				footer: {
					explore: "สำรวจ",
					help: "ช่วยเหลือและกฎหมาย",
					tagline: "ESP, wallhack, cooldown tracker และ Aimbot ไม่ถูกตรวจจับสำหรับ Marvel Rivals — ชำระผ่าน ",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP, Wallhack และ Aimbot",
					description: "Cheat Marvel Rivals undetected สำหรับ Marvel Rivals บน PC. ESP wallhack, cooldown tracker, Aimbot, NACE maintenance. จัดส่งดิจิทัลทันที.",
					h1: "Marvel Rivals Cheats — Undetected ESP, Wallhack และ Aimbot",
					intro: "แพ็ก undetected สำหรับ Marvel Rivals บน Windows PC: ESP wallhack, cooldown tracker, Aimbot พร้อม NACE maintenance",
					imageAlt: "Marvel Rivals ESP player tags hack",
					galleryTitle: "แกลเลอรี Marvel Rivals Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ทำไมเลือก Marvel Rivals Cheats ปี 2026",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC เหมาะสำหรับอ่าน squad ศัตรูใน ranked และ quick play",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "ESP wallhack, cooldown tracker, Aimbot ในใบอนุญาตเดียว",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC ใบอนุญาตเดียวแทนเครื่องมือแยก",
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "Marvel Rivals ESP | Player Boxes & Wallhack",
					description: "Marvel Rivals ESP: player boxes, objective markers, and wallhack overlays. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Marvel Rivals ESP",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC Marvel Rivals ESP.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "Marvel Rivals ESP",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Marvel Rivals ESP",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC player boxes, objective markers, and wallhack overlays.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Marvel Rivals Aimbot | Soft Aim Controls",
					description: "Marvel Rivals Aimbot: soft aim, FOV, and per-hero Aimbot profiles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Marvel Rivals Aimbot",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC Marvel Rivals Aimbot.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marvel Rivals Aimbot",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals Aimbot",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC soft aim, FOV, and per-hero Aimbot profiles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				features: {
					title: "ฟีเจอร์ | Full Feature List",
					description: "ฟีเจอร์: ESP, soft aim, cooldown tracker controls. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ฟีเจอร์",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC ฟีเจอร์.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "ฟีเจอร์",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ฟีเจอร์",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC ESP, soft aim, cooldown tracker controls.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				pricing: {
					title: "ราคา | Monthly & Lifetime",
					description: "ราคา: $35 monthly or $150 lifetime licenses. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ราคา",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC ราคา.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "ราคา",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ราคา",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC $35 monthly or $150 lifetime licenses.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				setup: {
					title: "ติดตั้ง | PC Setup Guide",
					description: "ติดตั้ง: Windows PC activation and first-launch setup. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ติดตั้ง",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC ติดตั้ง.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "ติดตั้ง",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "ติดตั้ง",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC Windows PC activation and first-launch setup.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				updates: {
					title: "อัปเดต | NACE Maintenance Log",
					description: "อัปเดต: NACE patch status and rebuild notes. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "อัปเดต",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC อัปเดต.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "อัปเดต",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "อัปเดต",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC NACE patch status and rebuild notes.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and NACE questions. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC FAQ.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC ESP, soft aim, delivery, and NACE questions.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				support: {
					title: "สนับสนุน | Help & Contact",
					description: "สนับสนุน: order help and license support contact. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "สนับสนุน",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC สนับสนุน.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "สนับสนุน",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "สนับสนุน",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC order help and license support contact.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | NACE Safe Status",
					description: "Cheats undetected: undetected maintenance after NACE patches. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheats undetected",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC Cheats undetected.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC undetected maintenance after NACE patches.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				wallhack: {
					title: "Marvel Rivals Wallhack | ESP Visibility",
					description: "Marvel Rivals Wallhack: wallhack ESP for heroes, health, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Marvel Rivals Wallhack",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC Marvel Rivals Wallhack.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Marvel Rivals Wallhack",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals Wallhack",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC wallhack ESP for heroes, health, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				radar: {
					title: "Cooldown tracker | 2D Threat Overlay",
					description: "Cooldown tracker: cooldown tracker cues for flanks and rotations. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cooldown tracker",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC Cooldown tracker.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "Cooldown tracker",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Cooldown tracker",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC cooldown tracker cues for flanks and rotations.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				battleye: {
					title: "NACE Bypass | Patch Maintenance",
					description: "NACE Bypass: how NACE updates are handled for Marvel Rivals hacks. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "NACE Bypass",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC NACE Bypass.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "NACE Bypass",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "NACE Bypass",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC how NACE updates are handled for Marvel Rivals hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Marvel Rivals Cheats 2026 | Buyer Guide",
					description: "Marvel Rivals Cheats 2026: 2026 Marvel Rivals cheats checklist before checkout. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Marvel Rivals Cheats 2026",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC Marvel Rivals Cheats 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Marvel Rivals Cheats 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Marvel Rivals Cheats 2026",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC 2026 Marvel Rivals cheats checklist before checkout.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				hacks: {
					title: "Marvel Rivals Cheats | ESP Aimbot Guide",
					description: "Marvel Rivals Cheats: the Marvel Rivals hacks pillar for ESP and Aimbot. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "Marvel Rivals Cheats",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheat-download": {
					title: "ดาวน์โหลด Marvel Rivals Cheats | Instant Access",
					description: "ดาวน์โหลด Marvel Rivals Cheats: digital license download after payment. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ดาวน์โหลด Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC ดาวน์โหลด Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "ดาวน์โหลด Marvel Rivals Cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ดาวน์โหลด Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC digital license download after payment.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"mod-menu": {
					title: "เมนูมอด Marvel Rivals | In-Game Toggles",
					description: "เมนูมอด Marvel Rivals: in-client ESP and soft aim toggles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "เมนูมอด Marvel Rivals",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC เมนูมอด Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "เมนูมอด Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "เมนูมอด Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC in-client ESP and soft aim toggles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"soft-aim": {
					title: "Marvel Rivals Soft Aim | Smooth Aim Settings",
					description: "Marvel Rivals Soft Aim: smooth soft aim settings for Windows PC. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Marvel Rivals Soft Aim",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC Marvel Rivals Soft Aim.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Marvel Rivals Soft Aim",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Marvel Rivals Soft Aim",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC smooth soft aim settings for Windows PC.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Marvel Rivals ที่ดีที่สุด | Buyer Checklist",
					description: "Cheat Marvel Rivals ที่ดีที่สุด: what to compare before buying Marvel Rivals cheats. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheat Marvel Rivals ที่ดีที่สุด",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC Cheat Marvel Rivals ที่ดีที่สุด.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "Cheat Marvel Rivals ที่ดีที่สุด",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Marvel Rivals ที่ดีที่สุด",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC what to compare before buying Marvel Rivals cheats.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack Aimbot Marvel Rivals | Soft Aim Assist",
					description: "Hack Aimbot Marvel Rivals: undetected Aimbot hack assist for Marvel Rivals. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack Aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC Hack Aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Hack Aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Hack Aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC undetected Aimbot hack assist for Marvel Rivals.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Marvel Rivals | Boxes & Loot",
					description: "Hack ESP Marvel Rivals: ESP hack boxes, objective pins, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC Hack ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Hack ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Hack ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC ESP hack boxes, objective pins, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"unlock-all": {
					title: "Marvel Rivals Unlock All | What It Means",
					description: "Marvel Rivals Unlock All: unlock-all searches vs real ESP and Aimbot tools. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Marvel Rivals Unlock All",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC Marvel Rivals Unlock All.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Marvel Rivals Unlock All",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "ซื้อ Marvel Rivals Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Unlock All",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC unlock-all searches vs real ESP and Aimbot tools.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
								"support@rivalshacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				privacy: {
					title: "นโยบายความเป็นส่วนตัว | Marvel Rivals Cheats",
					description: "นโยบายความเป็นส่วนตัว for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายความเป็นส่วนตัว",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC นโยบายความเป็นส่วนตัว for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@rivalshacks.com สำหรับการสนับสนุน",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "นโยบายการคืนเงิน | Marvel Rivals Cheats",
					description: "นโยบายการคืนเงิน for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายการคืนเงิน",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC นโยบายการคืนเงิน for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC Contact email,  order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ NACE ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@rivalshacks.com สำหรับการสนับสนุน",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "ข้อกำหนดการใช้งาน | Marvel Rivals Cheats",
					description: "ข้อกำหนดการใช้งาน for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "ข้อกำหนดการใช้งาน",
					intro: "Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC ข้อกำหนดการใช้งาน for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC Contact email,  order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล NACE",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Marvel Rivals Cheats รวม ESP wallhack, cooldown tracker และ marvel rivals aimbot แบบ undetected สำหรับ Marvel Rivals บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@rivalshacks.com สำหรับการสนับสนุน",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
		vi: {
			ui: {
				nav: {
					home: "Trang chủ",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Tính năng",
					pricing: "Giá",
					setup: "Cài đặt",
					updates: "Cập nhật",
					faq: "FAQ",
					buyNow: "Mua ngay",
				},
				hero: {
					accent: "Cheat Marvel Rivals undetected",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "ESP wallhack, cooldown tracker và Aimbot cho Marvel Rivals trên PC Windows — bảo trì NACE bao gồm.",
					subtitleShort: "ESP, cooldown tracker & Aimbot cho Marvel Rivals PC",
					buyNow: "Mua ngay",
					seeFeatures: "Xem tính năng",
				},
				trust: {
					status: "Trực tuyến",
					statusNote: "Gói Marvel Rivals Cheats đang hoạt động cho Marvel Rivals trên PC Windows.",
					statusShort: "Hoạt động",
					delivery: "Giao hàng kỹ thuật số tức thì",
					platform: "Windows 10 & 11",
					antiCheat: "Hỗ trợ bảo trì NACE",
					antiCheatShort: "Hỗ trợ NACE",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "Thêm vào giỏ",
					monthly: "Hàng tháng",
					lifetime: "Trọn đời",
					available: "Có sẵn ngay",
					gameBadge: "Marvel Rivals",
					platformBadge: "Windows PC",
					statusBadge: "Gói undetected",
				},
				reviews: {
					title: "Người chơi nói gì",
					subtitle: "Phản hồi gần đây từ người mua Marvel Rivals Cheats",
					outOf: "/5",
					countLabel: "đánh giá",
				},
				common: {
					buyNow: "Mua ngay",
					readGuide: "Đọc hướng dẫn",
					language: "Ngôn ngữ",
					officialLanguageNote: "Tiếng Anh là ngôn ngữ chính thức. Các ngôn ngữ khác được dịch cho SEO toàn cầu.",
					relatedPages: "Trang liên quan",
				},
				footer: {
					explore: "Khám phá",
					help: "Trợ giúp & pháp lý",
					tagline: "ESP, wallhack, cooldown tracker và Aimbot undetected cho Marvel Rivals — thanh toán qua .",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Marvel Rivals undetected cho Marvel Rivals trên PC. ESP wallhack, cooldown tracker, Aimbot, bảo trì NACE. Giao hàng kỹ thuật số tức thì.",
					h1: "Marvel Rivals Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Gói undetected Marvel Rivals trên Windows PC: ESP wallhack, cooldown tracker, Aimbot với bảo trì NACE.",
					imageAlt: "Marvel Rivals ESP player tags hack",
					galleryTitle: "Thư viện Marvel Rivals Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Vì sao chọn Marvel Rivals Cheats 2026",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Lý tưởng đọc squad địch trong ranked và quick play.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "ESP wallhack, cooldown tracker, Aimbot trong một giấy phép",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Một giấy phép thay vì công cụ riêng.",
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Marvel Rivals | Player Boxes & Wallhack",
					description: "ESP Marvel Rivals: player boxes, objective markers, and wallhack overlays. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. player boxes, objective markers, and wallhack overlays.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Marvel Rivals | Soft Aim Controls",
					description: "Aimbot Marvel Rivals: soft aim, FOV, and per-hero Aimbot profiles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. soft aim, FOV, and per-hero Aimbot profiles.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				features: {
					title: "Tính năng | Full Feature List",
					description: "Tính năng: ESP, soft aim, cooldown tracker controls. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tính năng",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Tính năng.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "Tính năng",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Tính năng",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. ESP, soft aim, cooldown tracker controls.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				pricing: {
					title: "Giá | Monthly & Lifetime",
					description: "Giá: $35 monthly or $150 lifetime licenses. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Giá",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Giá.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Giá",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Giá",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. $35 monthly or $150 lifetime licenses.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				setup: {
					title: "Cài đặt | PC Setup Guide",
					description: "Cài đặt: Windows PC activation and first-launch setup. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cài đặt",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Cài đặt.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Cài đặt",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Cài đặt",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Windows PC activation and first-launch setup.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				updates: {
					title: "Cập nhật | NACE Maintenance Log",
					description: "Cập nhật: NACE patch status and rebuild notes. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cập nhật",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Cập nhật.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "Cập nhật",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Cập nhật",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. NACE patch status and rebuild notes.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and NACE questions. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. FAQ.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. ESP, soft aim, delivery, and NACE questions.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				support: {
					title: "Hỗ trợ | Help & Contact",
					description: "Hỗ trợ: order help and license support contact. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hỗ trợ",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Hỗ trợ.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "Hỗ trợ",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Hỗ trợ",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. order help and license support contact.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | NACE Safe Status",
					description: "Cheat undetected: undetected maintenance after NACE patches. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Cheat undetected.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. undetected maintenance after NACE patches.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Marvel Rivals | ESP Visibility",
					description: "Wallhack Marvel Rivals: wallhack ESP for heroes, health, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Wallhack Marvel Rivals",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Wallhack Marvel Rivals.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Wallhack Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. wallhack ESP for heroes, health, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				radar: {
					title: "Theo dõi cooldown | 2D Threat Overlay",
					description: "Theo dõi cooldown: cooldown tracker cues for flanks and rotations. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Theo dõi cooldown",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Theo dõi cooldown.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "Theo dõi cooldown",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Theo dõi cooldown",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. cooldown tracker cues for flanks and rotations.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass NACE | Patch Maintenance",
					description: "Bypass NACE: how NACE updates are handled for Marvel Rivals hacks. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Bypass NACE",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Bypass NACE.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "Bypass NACE",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass NACE",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. how NACE updates are handled for Marvel Rivals hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Marvel Rivals 2026 | Buyer Guide",
					description: "Cheat Marvel Rivals 2026: 2026 Marvel Rivals cheats checklist before checkout. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Marvel Rivals 2026",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Cheat Marvel Rivals 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Cheat Marvel Rivals 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Cheat Marvel Rivals 2026",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. 2026 Marvel Rivals cheats checklist before checkout.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Marvel Rivals | ESP Aimbot Guide",
					description: "Cheat Marvel Rivals: the Marvel Rivals hacks pillar for ESP and Aimbot. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Marvel Rivals",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Cheat Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "Cheat Marvel Rivals",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tải Cheat Marvel Rivals | Instant Access",
					description: "Tải Cheat Marvel Rivals: digital license download after payment. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tải Cheat Marvel Rivals",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Tải Cheat Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "Tải Cheat Marvel Rivals",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tải Cheat Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. digital license download after payment.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Marvel Rivals | In-Game Toggles",
					description: "Mod menu Marvel Rivals: in-client ESP and soft aim toggles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Mod menu Marvel Rivals",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Mod menu Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "Mod menu Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. in-client ESP and soft aim toggles.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marvel Rivals | Smooth Aim Settings",
					description: "Soft aim Marvel Rivals: smooth soft aim settings for Windows PC. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Soft aim Marvel Rivals",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Soft aim Marvel Rivals.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Soft aim Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. smooth soft aim settings for Windows PC.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Marvel Rivals tốt nhất | Buyer Checklist",
					description: "Cheat Marvel Rivals tốt nhất: what to compare before buying Marvel Rivals cheats. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Marvel Rivals tốt nhất",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Cheat Marvel Rivals tốt nhất.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "Cheat Marvel Rivals tốt nhất",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Marvel Rivals tốt nhất",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. what to compare before buying Marvel Rivals cheats.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Marvel Rivals | Soft Aim Assist",
					description: "Hack aimbot Marvel Rivals: undetected Aimbot hack assist for Marvel Rivals. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Hack aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. undetected Aimbot hack assist for Marvel Rivals.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Marvel Rivals | Boxes & Loot",
					description: "Hack ESP Marvel Rivals: ESP hack boxes, objective pins, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Hack ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Hack ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Hack ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. ESP hack boxes, objective pins, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marvel Rivals | What It Means",
					description: "Unlock all Marvel Rivals: unlock-all searches vs real ESP and Aimbot tools. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Unlock all Marvel Rivals",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Unlock all Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Unlock all Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Mua Marvel Rivals Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				privacy: {
					title: "Chính sách bảo mật | Marvel Rivals Cheats",
					description: "Chính sách bảo mật for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách bảo mật",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Chính sách bảo mật for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "Chính sách hoàn tiền | Marvel Rivals Cheats",
					description: "Chính sách hoàn tiền for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách hoàn tiền",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Chính sách hoàn tiền for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Contact email,  order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá NACE. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "Điều khoản sử dụng | Marvel Rivals Cheats",
					description: "Điều khoản sử dụng for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Điều khoản sử dụng",
					intro: "Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Điều khoản sử dụng for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Contact email,  order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì NACE.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Marvel Rivals Cheats cung cấp ESP wallhack, cooldown tracker và marvel rivals aimbot undetected cho Marvel Rivals trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@rivalshacks.com cho hỗ trợ và pháp lý.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
		uk: {
			ui: {
				nav: {
					home: "Головна",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функції",
					pricing: "Ціни",
					setup: "Встановлення",
					updates: "Оновлення",
					faq: "FAQ",
					buyNow: "Купити",
				},
				hero: {
					accent: "Undetected чіти Marvel Rivals",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "ESP wallhack, cooldown tracker і Aimbot для Marvel Rivals на Windows PC — обслуговування NACE включено.",
					subtitleShort: "ESP, cooldown tracker і Aimbot для Marvel Rivals PC",
					buyNow: "Купити",
					seeFeatures: "Дивитися функції",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Marvel Rivals Cheats активний для Marvel Rivals на Windows PC.",
					statusShort: "Активний",
					delivery: "Миттєва цифрова доставка",
					platform: "Windows 10 і 11",
					antiCheat: "Підтримка обслуговування NACE",
					antiCheatShort: "NACE підтримка",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "До кошика",
					monthly: "Щомісяця",
					lifetime: "Назавжди",
					available: "Доступно зараз",
					gameBadge: "Marvel Rivals",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Що кажуть гравці",
					subtitle: "Останні відгуки покупців Marvel Rivals Cheats",
					outOf: "з 5",
					countLabel: "відгуків",
				},
				common: {
					buyNow: "Купити",
					readGuide: "Читати гайд",
					language: "Мова",
					officialLanguageNote: "Англійська — офіційна мова. Інші версії перекладені для глобального SEO.",
					relatedPages: "Пов'язані сторінки",
				},
				footer: {
					explore: "Огляд",
					help: "Допомога та право",
					tagline: "Undetected ESP, wallhack, cooldown tracker і Aimbot для Marvel Rivals — оплата через .",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP, Wallhack і Aimbot",
					description: "Undetected чіти Marvel Rivals для Marvel Rivals на PC. ESP wallhack, cooldown tracker, Aimbot, обслуговування NACE. Мгновенная цифровая доставка.",
					h1: "Marvel Rivals Cheats — Undetected ESP, Wallhack і Aimbot",
					intro: "Undetected пакет для Marvel Rivals на Windows PC: ESP wallhack, cooldown tracker, Aimbot з обслуговуванням NACE.",
					imageAlt: "Marvel Rivals ESP player tags hack",
					galleryTitle: "Галерея Marvel Rivals Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чому Marvel Rivals Cheats у 2026",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Ідеально для читання ворожих загонів у ranked і quick play.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "ESP wallhack, cooldown tracker і Aimbot в одній ліцензії",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Одна ліцензія замість окремих інструментів.",
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Marvel Rivals | Player Boxes & Wallhack",
					description: "ESP Marvel Rivals: player boxes, objective markers, and wallhack overlays. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. player boxes, objective markers, and wallhack overlays.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Marvel Rivals | Soft Aim Controls",
					description: "Aimbot Marvel Rivals: soft aim, FOV, and per-hero Aimbot profiles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. soft aim, FOV, and per-hero Aimbot profiles.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				features: {
					title: "Функції | Full Feature List",
					description: "Функції: ESP, soft aim, cooldown tracker controls. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Функції",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Функції.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "Функції",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функції",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. ESP, soft aim, cooldown tracker controls.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				pricing: {
					title: "Ціни | Monthly & Lifetime",
					description: "Ціни: $35 monthly or $150 lifetime licenses. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Ціни",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Ціни.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Ціни",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ціни",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				setup: {
					title: "Встановлення | PC Setup Guide",
					description: "Встановлення: Windows PC activation and first-launch setup. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Встановлення",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Встановлення.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Встановлення",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Встановлення",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Windows PC activation and first-launch setup.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				updates: {
					title: "Оновлення | NACE Maintenance Log",
					description: "Оновлення: NACE patch status and rebuild notes. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Оновлення",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Оновлення.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "Оновлення",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Оновлення",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. NACE patch status and rebuild notes.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and NACE questions. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. FAQ.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. ESP, soft aim, delivery, and NACE questions.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				support: {
					title: "Підтримка | Help & Contact",
					description: "Підтримка: order help and license support contact. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Підтримка",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Підтримка.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "Підтримка",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Підтримка",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. order help and license support contact.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected чіти | NACE Safe Status",
					description: "Undetected чіти: undetected maintenance after NACE patches. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Undetected чіти",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Undetected чіти.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected чіти",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Undetected чіти",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. undetected maintenance after NACE patches.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Marvel Rivals | ESP Visibility",
					description: "Wallhack Marvel Rivals: wallhack ESP for heroes, health, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Wallhack Marvel Rivals",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Wallhack Marvel Rivals.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Wallhack Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. wallhack ESP for heroes, health, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				radar: {
					title: "Трекер кулдаунів | 2D Threat Overlay",
					description: "Трекер кулдаунів: cooldown tracker cues for flanks and rotations. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Трекер кулдаунів",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Трекер кулдаунів.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "Трекер кулдаунів",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Трекер кулдаунів",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. cooldown tracker cues for flanks and rotations.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass NACE | Patch Maintenance",
					description: "Bypass NACE: how NACE updates are handled for Marvel Rivals hacks. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Bypass NACE",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Bypass NACE.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "Bypass NACE",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass NACE",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. how NACE updates are handled for Marvel Rivals hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Чіти Marvel Rivals 2026 | Buyer Guide",
					description: "Чіти Marvel Rivals 2026: 2026 Marvel Rivals cheats checklist before checkout. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Marvel Rivals 2026",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Чіти Marvel Rivals 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Чіти Marvel Rivals 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Чіти Marvel Rivals 2026",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. 2026 Marvel Rivals cheats checklist before checkout.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				hacks: {
					title: "Чіти Marvel Rivals | ESP Aimbot Guide",
					description: "Чіти Marvel Rivals: the Marvel Rivals hacks pillar for ESP and Aimbot. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Marvel Rivals",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Чіти Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "Чіти Marvel Rivals",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чіти Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Завантаження Marvel Rivals Cheats | Instant Access",
					description: "Завантаження Marvel Rivals Cheats: digital license download after payment. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Завантаження Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Завантаження Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "Завантаження Marvel Rivals Cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Завантаження Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. digital license download after payment.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Marvel Rivals | In-Game Toggles",
					description: "Мод-меню Marvel Rivals: in-client ESP and soft aim toggles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Мод-меню Marvel Rivals",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Мод-меню Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "Мод-меню Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. in-client ESP and soft aim toggles.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marvel Rivals | Smooth Aim Settings",
					description: "Soft aim Marvel Rivals: smooth soft aim settings for Windows PC. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Soft aim Marvel Rivals",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Soft aim Marvel Rivals.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Soft aim Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. smooth soft aim settings for Windows PC.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Найкращі чіти Marvel Rivals | Buyer Checklist",
					description: "Найкращі чіти Marvel Rivals: what to compare before buying Marvel Rivals cheats. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Найкращі чіти Marvel Rivals",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Найкращі чіти Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "Найкращі чіти Marvel Rivals",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Найкращі чіти Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. what to compare before buying Marvel Rivals cheats.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Marvel Rivals | Soft Aim Assist",
					description: "Хак aimbot Marvel Rivals: undetected Aimbot hack assist for Marvel Rivals. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Хак aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. undetected Aimbot hack assist for Marvel Rivals.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Marvel Rivals | Boxes & Loot",
					description: "Хак ESP Marvel Rivals: ESP hack boxes, objective pins, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Хак ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Хак ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Хак ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. ESP hack boxes, objective pins, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marvel Rivals | What It Means",
					description: "Unlock all Marvel Rivals: unlock-all searches vs real ESP and Aimbot tools. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Unlock all Marvel Rivals",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Unlock all Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Unlock all Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Купити Marvel Rivals Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
								"support@rivalshacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				privacy: {
					title: "Політика конфіденційності | Marvel Rivals Cheats",
					description: "Політика конфіденційності for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика конфіденційності",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Політика конфіденційності for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@rivalshacks.com для підтримки та правових питань.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "Політика повернення | Marvel Rivals Cheats",
					description: "Політика повернення for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика повернення",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Політика повернення for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Contact email,  order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів NACE. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@rivalshacks.com для підтримки та правових питань.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "Умови використання | Marvel Rivals Cheats",
					description: "Умови використання for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Умови використання",
					intro: "Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Умови використання for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Contact email,  order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування NACE.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Marvel Rivals Cheats об'єднує ESP wallhack, cooldown tracker і marvel rivals aimbot у undetected пакеті для Marvel Rivals на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@rivalshacks.com для підтримки та правових питань.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
		cs: {
			ui: {
				nav: {
					home: "Domů",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkce",
					pricing: "Ceny",
					setup: "Instalace",
					updates: "Aktualizace",
					faq: "FAQ",
					buyNow: "Koupit",
				},
				hero: {
					accent: "Undetected Marvel Rivals cheaty",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "ESP wallhack, cooldown tracker a Aimbot pro Marvel Rivals na Windows PC — údržba NACE v ceně.",
					subtitleShort: "ESP, cooldown tracker a Aimbot pro Marvel Rivals PC",
					buyNow: "Koupit",
					seeFeatures: "Zobrazit funkce",
				},
				trust: {
					status: "Online",
					statusNote: "Balíček Marvel Rivals Cheats je aktivní pro Marvel Rivals na Windows PC.",
					statusShort: "Aktivní",
					delivery: "Okamžité digitální doručení",
					platform: "Windows 10 a 11",
					antiCheat: "Podpora údržby NACE",
					antiCheatShort: "NACE podpora",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "Přidat do košíku",
					monthly: "Měsíčně",
					lifetime: "Doživotně",
					available: "Dostupné nyní",
					gameBadge: "Marvel Rivals",
					platformBadge: "Windows PC",
					statusBadge: "Undetected balíček",
				},
				reviews: {
					title: "Co říkají hráči",
					subtitle: "Nedávná zpětná vazba od kupujících Marvel Rivals Cheats",
					outOf: "z 5",
					countLabel: "recenzí",
				},
				common: {
					buyNow: "Koupit",
					readGuide: "Číst průvodce",
					language: "Jazyk",
					officialLanguageNote: "Angličtina je oficiální jazyk. Ostatní jazyky jsou přeloženy pro globální SEO.",
					relatedPages: "Související stránky",
				},
				footer: {
					explore: "Prozkoumat",
					help: "Nápověda a právo",
					tagline: "Undetected ESP, wallhack, cooldown tracker a Aimbot pro Marvel Rivals — checkout přes .",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP, Wallhack a Aimbot",
					description: "Undetected Marvel Rivals cheaty pro Marvel Rivals na PC. ESP wallhack, cooldown tracker, Aimbot, údržba NACE. Okamžité digitální doručení.",
					h1: "Marvel Rivals Cheats — Undetected ESP, Wallhack a Aimbot",
					intro: "Undetected balíček pro Marvel Rivals na Windows PC: ESP wallhack, cooldown tracker, Aimbot s údržbou NACE.",
					imageAlt: "Marvel Rivals ESP player tags hack",
					galleryTitle: "Galerie Marvel Rivals Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Proč Marvel Rivals Cheats v roce 2026",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Ideální pro čtení nepřátelských squadů v ranked a quick play.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "ESP wallhack, cooldown tracker a Aimbot v jedné licenci",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Jedna licence místo samostatných nástrojů.",
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "Marvel Rivals ESP | Player Boxes & Wallhack",
					description: "Marvel Rivals ESP: player boxes, objective markers, and wallhack overlays. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Marvel Rivals ESP",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Marvel Rivals ESP.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "Marvel Rivals ESP",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Marvel Rivals ESP",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. player boxes, objective markers, and wallhack overlays.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Marvel Rivals Aimbot | Soft Aim Controls",
					description: "Marvel Rivals Aimbot: soft aim, FOV, and per-hero Aimbot profiles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Marvel Rivals Aimbot",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Marvel Rivals Aimbot.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marvel Rivals Aimbot",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals Aimbot",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. soft aim, FOV, and per-hero Aimbot profiles.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				features: {
					title: "Funkce | Full Feature List",
					description: "Funkce: ESP, soft aim, cooldown tracker controls. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Funkce",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Funkce.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "Funkce",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkce",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. ESP, soft aim, cooldown tracker controls.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				pricing: {
					title: "Ceny | Monthly & Lifetime",
					description: "Ceny: $35 monthly or $150 lifetime licenses. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Ceny",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Ceny.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Ceny",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ceny",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				setup: {
					title: "Instalace | PC Setup Guide",
					description: "Instalace: Windows PC activation and first-launch setup. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Instalace",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Instalace.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalace",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalace",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Windows PC activation and first-launch setup.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizace | NACE Maintenance Log",
					description: "Aktualizace: NACE patch status and rebuild notes. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Aktualizace",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Aktualizace.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "Aktualizace",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Aktualizace",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. NACE patch status and rebuild notes.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and NACE questions. okamžité digitální doručení. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. FAQ.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. ESP, soft aim, delivery, and NACE questions.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				support: {
					title: "Podpora | Help & Contact",
					description: "Podpora: order help and license support contact. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Podpora",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Podpora.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "Podpora",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Podpora",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. order help and license support contact.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheaty | NACE Safe Status",
					description: "Undetected cheaty: undetected maintenance after NACE patches. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Undetected cheaty",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Undetected cheaty.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheaty",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Undetected cheaty",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. undetected maintenance after NACE patches.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				wallhack: {
					title: "Marvel Rivals Wallhack | ESP Visibility",
					description: "Marvel Rivals Wallhack: wallhack ESP for heroes, health, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Marvel Rivals Wallhack",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Marvel Rivals Wallhack.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Marvel Rivals Wallhack",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals Wallhack",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. wallhack ESP for heroes, health, and distance.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				radar: {
					title: "Cooldown tracker | 2D Threat Overlay",
					description: "Cooldown tracker: cooldown tracker cues for flanks and rotations. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Cooldown tracker",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Cooldown tracker.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "Cooldown tracker",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Cooldown tracker",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. cooldown tracker cues for flanks and rotations.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				battleye: {
					title: "NACE Bypass | Patch Maintenance",
					description: "NACE Bypass: how NACE updates are handled for Marvel Rivals hacks. okamžité digitální doručení. undetected — Windows PC.",
					h1: "NACE Bypass",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. NACE Bypass.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "NACE Bypass",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "NACE Bypass",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. how NACE updates are handled for Marvel Rivals hacks.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Marvel Rivals cheaty 2026 | Buyer Guide",
					description: "Marvel Rivals cheaty 2026: 2026 Marvel Rivals cheats checklist before checkout. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Marvel Rivals cheaty 2026",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Marvel Rivals cheaty 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Marvel Rivals cheaty 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Marvel Rivals cheaty 2026",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. 2026 Marvel Rivals cheats checklist before checkout.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				hacks: {
					title: "Marvel Rivals cheaty | ESP Aimbot Guide",
					description: "Marvel Rivals cheaty: the Marvel Rivals hacks pillar for ESP and Aimbot. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Marvel Rivals cheaty",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Marvel Rivals cheaty.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "Marvel Rivals cheaty",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals cheaty",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Stáhnout Marvel Rivals Cheats | Instant Access",
					description: "Stáhnout Marvel Rivals Cheats: digital license download after payment. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Stáhnout Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Stáhnout Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "Stáhnout Marvel Rivals Cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Stáhnout Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. digital license download after payment.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Marvel Rivals mod menu | In-Game Toggles",
					description: "Marvel Rivals mod menu: in-client ESP and soft aim toggles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Marvel Rivals mod menu",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Marvel Rivals mod menu.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "Marvel Rivals mod menu",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals mod menu",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. in-client ESP and soft aim toggles.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Marvel Rivals Soft Aim | Smooth Aim Settings",
					description: "Marvel Rivals Soft Aim: smooth soft aim settings for Windows PC. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Marvel Rivals Soft Aim",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Marvel Rivals Soft Aim.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Marvel Rivals Soft Aim",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Marvel Rivals Soft Aim",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. smooth soft aim settings for Windows PC.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Nejlepší Marvel Rivals cheaty | Buyer Checklist",
					description: "Nejlepší Marvel Rivals cheaty: what to compare before buying Marvel Rivals cheats. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Nejlepší Marvel Rivals cheaty",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Nejlepší Marvel Rivals cheaty.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "Nejlepší Marvel Rivals cheaty",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Nejlepší Marvel Rivals cheaty",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. what to compare before buying Marvel Rivals cheats.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Marvel Rivals aimbot hack | Soft Aim Assist",
					description: "Marvel Rivals aimbot hack: undetected Aimbot hack assist for Marvel Rivals. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Marvel Rivals aimbot hack",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Marvel Rivals aimbot hack.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Marvel Rivals aimbot hack",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Marvel Rivals aimbot hack",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. undetected Aimbot hack assist for Marvel Rivals.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Marvel Rivals ESP hack | Boxes & Loot",
					description: "Marvel Rivals ESP hack: ESP hack boxes, objective pins, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Marvel Rivals ESP hack",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Marvel Rivals ESP hack.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Marvel Rivals ESP hack",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals ESP hack",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. ESP hack boxes, objective pins, and distance.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Marvel Rivals Unlock All | What It Means",
					description: "Marvel Rivals Unlock All: unlock-all searches vs real ESP and Aimbot tools. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Marvel Rivals Unlock All",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Marvel Rivals Unlock All.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Marvel Rivals Unlock All",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Koupit Marvel Rivals Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Unlock All",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
								"support@rivalshacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				privacy: {
					title: "Zásady ochrany soukromí | Marvel Rivals Cheats",
					description: "Zásady ochrany soukromí for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady ochrany soukromí",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Zásady ochrany soukromí for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@rivalshacks.com pro podporu a právní dotazy.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "Zásady vrácení peněz | Marvel Rivals Cheats",
					description: "Zásady vrácení peněz for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady vrácení peněz",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Zásady vrácení peněz for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Contact email,  order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích NACE zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@rivalshacks.com pro podporu a právní dotazy.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "Podmínky použití | Marvel Rivals Cheats",
					description: "Podmínky použití for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Podmínky použití",
					intro: "Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Podmínky použití for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Contact email,  order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby NACE.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Marvel Rivals Cheats spojuje ESP wallhack, cooldown tracker a marvel rivals aimbot jako undetected balíček pro Marvel Rivals na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@rivalshacks.com pro podporu a právní dotazy.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
		ro: {
			ui: {
				nav: {
					home: "Acasă",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funcții",
					pricing: "Prețuri",
					setup: "Instalare",
					updates: "Actualizări",
					faq: "FAQ",
					buyNow: "Cumpără",
				},
				hero: {
					accent: "Cheats Marvel Rivals undetected",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "ESP wallhack, cooldown tracker și Aimbot pentru Marvel Rivals pe PC Windows — mentenanță NACE inclusă.",
					subtitleShort: "ESP, cooldown tracker și Aimbot pentru Marvel Rivals PC",
					buyNow: "Cumpără acum",
					seeFeatures: "Vezi funcții",
				},
				trust: {
					status: "Online",
					statusNote: "Pachetul Marvel Rivals Cheats este activ pentru Marvel Rivals pe PC Windows.",
					statusShort: "Activ",
					delivery: "Livrare digitală instantă",
					platform: "Windows 10 și 11",
					antiCheat: "Mentenanță NACE suportată",
					antiCheatShort: "NACE suportat",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "Adaugă în coș",
					monthly: "Lunar",
					lifetime: "Pe viață",
					available: "Disponibil acum",
					gameBadge: "Marvel Rivals",
					platformBadge: "Windows PC",
					statusBadge: "Pachet undetected",
				},
				reviews: {
					title: "Ce spun jucătorii",
					subtitle: "Feedback recent de la cumpărătorii Marvel Rivals Cheats",
					outOf: "din 5",
					countLabel: "recenzii",
				},
				common: {
					buyNow: "Cumpără acum",
					readGuide: "Citește ghidul",
					language: "Limbă",
					officialLanguageNote: "Engleza este limba oficială. Alte limbi sunt traduse pentru SEO global.",
					relatedPages: "Pagini related",
				},
				footer: {
					explore: "Explorează",
					help: "Ajutor și legal",
					tagline: "ESP, wallhack, cooldown tracker și Aimbot undetected pentru Marvel Rivals — after payment.",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP, Wallhack și Aimbot",
					description: "Cheats Marvel Rivals undetected pentru Marvel Rivals pe PC. ESP wallhack, cooldown tracker, Aimbot, mentenanță NACE. Livrare digitală instantă.",
					h1: "Marvel Rivals Cheats — Undetected ESP, Wallhack și Aimbot",
					intro: "Pachet undetected Marvel Rivals pe Windows PC: ESP wallhack, cooldown tracker, Aimbot cu mentenanță NACE.",
					imageAlt: "Marvel Rivals ESP player tags hack",
					galleryTitle: "Galerie Marvel Rivals Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "De ce Marvel Rivals Cheats în 2026",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Ideal pentru citirea squad-urilor inamice în ranked și quick play.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "ESP wallhack, cooldown tracker și Aimbot într-o licență",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. O licență în loc de instrumente separate.",
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Marvel Rivals | Player Boxes & Wallhack",
					description: "ESP Marvel Rivals: player boxes, objective markers, and wallhack overlays. livrare digitală instantă. undetected — PC Windows.",
					h1: "ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. player boxes, objective markers, and wallhack overlays.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Marvel Rivals | Soft Aim Controls",
					description: "Aimbot Marvel Rivals: soft aim, FOV, and per-hero Aimbot profiles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. soft aim, FOV, and per-hero Aimbot profiles.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				features: {
					title: "Funcții | Full Feature List",
					description: "Funcții: ESP, soft aim, cooldown tracker controls. livrare digitală instantă. undetected — PC Windows.",
					h1: "Funcții",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Funcții.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "Funcții",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funcții",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. ESP, soft aim, cooldown tracker controls.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				pricing: {
					title: "Prețuri | Monthly & Lifetime",
					description: "Prețuri: $35 monthly or $150 lifetime licenses. livrare digitală instantă. undetected — PC Windows.",
					h1: "Prețuri",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Prețuri.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prețuri",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prețuri",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				setup: {
					title: "Instalare | PC Setup Guide",
					description: "Instalare: Windows PC activation and first-launch setup. livrare digitală instantă. undetected — PC Windows.",
					h1: "Instalare",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Instalare.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalare",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalare",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Windows PC activation and first-launch setup.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				updates: {
					title: "Actualizări | NACE Maintenance Log",
					description: "Actualizări: NACE patch status and rebuild notes. livrare digitală instantă. undetected — PC Windows.",
					h1: "Actualizări",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Actualizări.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "Actualizări",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Actualizări",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. NACE patch status and rebuild notes.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and NACE questions. livrare digitală instantă. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. FAQ.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. ESP, soft aim, delivery, and NACE questions.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				support: {
					title: "Suport | Help & Contact",
					description: "Suport: order help and license support contact. livrare digitală instantă. undetected — PC Windows.",
					h1: "Suport",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Suport.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "Suport",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suport",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. order help and license support contact.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | NACE Safe Status",
					description: "Cheats undetected: undetected maintenance after NACE patches. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats undetected",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Cheats undetected.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. undetected maintenance after NACE patches.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Marvel Rivals | ESP Visibility",
					description: "Wallhack Marvel Rivals: wallhack ESP for heroes, health, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Wallhack Marvel Rivals",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Wallhack Marvel Rivals.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Wallhack Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. wallhack ESP for heroes, health, and distance.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				radar: {
					title: "Tracker cooldown | 2D Threat Overlay",
					description: "Tracker cooldown: cooldown tracker cues for flanks and rotations. livrare digitală instantă. undetected — PC Windows.",
					h1: "Tracker cooldown",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Tracker cooldown.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "Tracker cooldown",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Tracker cooldown",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. cooldown tracker cues for flanks and rotations.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass NACE | Patch Maintenance",
					description: "Bypass NACE: how NACE updates are handled for Marvel Rivals hacks. livrare digitală instantă. undetected — PC Windows.",
					h1: "Bypass NACE",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Bypass NACE.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "Bypass NACE",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass NACE",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. how NACE updates are handled for Marvel Rivals hacks.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Marvel Rivals 2026 | Buyer Guide",
					description: "Cheats Marvel Rivals 2026: 2026 Marvel Rivals cheats checklist before checkout. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Marvel Rivals 2026",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Cheats Marvel Rivals 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Cheats Marvel Rivals 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Cheats Marvel Rivals 2026",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. 2026 Marvel Rivals cheats checklist before checkout.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Marvel Rivals | ESP Aimbot Guide",
					description: "Cheats Marvel Rivals: the Marvel Rivals hacks pillar for ESP and Aimbot. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Marvel Rivals",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Cheats Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "Cheats Marvel Rivals",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descărcare Marvel Rivals Cheats | Instant Access",
					description: "Descărcare Marvel Rivals Cheats: digital license download after payment. livrare digitală instantă. undetected — PC Windows.",
					h1: "Descărcare Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Descărcare Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "Descărcare Marvel Rivals Cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descărcare Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. digital license download after payment.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Meniu mod Marvel Rivals | In-Game Toggles",
					description: "Meniu mod Marvel Rivals: in-client ESP and soft aim toggles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Meniu mod Marvel Rivals",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Meniu mod Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "Meniu mod Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Meniu mod Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. in-client ESP and soft aim toggles.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marvel Rivals | Smooth Aim Settings",
					description: "Soft aim Marvel Rivals: smooth soft aim settings for Windows PC. livrare digitală instantă. undetected — PC Windows.",
					h1: "Soft aim Marvel Rivals",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Soft aim Marvel Rivals.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Soft aim Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. smooth soft aim settings for Windows PC.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cele mai bune cheats Marvel Rivals | Buyer Checklist",
					description: "Cele mai bune cheats Marvel Rivals: what to compare before buying Marvel Rivals cheats. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cele mai bune cheats Marvel Rivals",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Cele mai bune cheats Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "Cele mai bune cheats Marvel Rivals",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cele mai bune cheats Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. what to compare before buying Marvel Rivals cheats.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Marvel Rivals | Soft Aim Assist",
					description: "Hack aimbot Marvel Rivals: undetected Aimbot hack assist for Marvel Rivals. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack aimbot Marvel Rivals",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Hack aimbot Marvel Rivals.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Marvel Rivals",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. undetected Aimbot hack assist for Marvel Rivals.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Marvel Rivals | Boxes & Loot",
					description: "Hack ESP Marvel Rivals: ESP hack boxes, objective pins, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack ESP Marvel Rivals",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Hack ESP Marvel Rivals.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Hack ESP Marvel Rivals",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Hack ESP Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. ESP hack boxes, objective pins, and distance.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marvel Rivals | What It Means",
					description: "Unlock all Marvel Rivals: unlock-all searches vs real ESP and Aimbot tools. livrare digitală instantă. undetected — PC Windows.",
					h1: "Unlock all Marvel Rivals",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Unlock all Marvel Rivals.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Unlock all Marvel Rivals",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Cumpără Marvel Rivals Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marvel Rivals",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
								"support@rivalshacks.com pentru suport și legal.",
							],
						},
					],
				},
				privacy: {
					title: "Politica de confidențialitate | Marvel Rivals Cheats",
					description: "Politica de confidențialitate for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de confidențialitate",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Politica de confidențialitate for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@rivalshacks.com pentru suport și legal.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "Politica de rambursare | Marvel Rivals Cheats",
					description: "Politica de rambursare for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de rambursare",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Politica de rambursare for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Contact email,  order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri NACE. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@rivalshacks.com pentru suport și legal.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "Termeni de utilizare | Marvel Rivals Cheats",
					description: "Termeni de utilizare for Marvel Rivals Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termeni de utilizare",
					intro: "Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Termeni de utilizare for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Contact email,  order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță NACE.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Marvel Rivals Cheats combină ESP wallhack, cooldown tracker și marvel rivals aimbot undetected pentru Marvel Rivals pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@rivalshacks.com pentru suport și legal.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
		sv: {
			ui: {
				nav: {
					home: "Hem",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funktioner",
					pricing: "Priser",
					setup: "Installation",
					updates: "Uppdateringar",
					faq: "FAQ",
					buyNow: "Köp nu",
				},
				hero: {
					accent: "Undetected Marvel Rivals cheats",
					accentShort: "Marvel Rivals Cheats",
					subtitle: "ESP wallhack, cooldown tracker och Aimbot för Marvel Rivals på Windows PC — NACE-underhåll ingår.",
					subtitleShort: "ESP, cooldown tracker & Aimbot för Marvel Rivals PC",
					buyNow: "Köp nu",
					seeFeatures: "Se funktioner",
				},
				trust: {
					status: "Online",
					statusNote: "Marvel Rivals Cheats-paketet är live för Marvel Rivals på Windows PC.",
					statusShort: "Live",
					delivery: "Omedelbar digital leverans",
					platform: "Windows 10 & 11",
					antiCheat: "NACE-underhåll stöds",
					antiCheatShort: "NACE stöd",
				},
				product: {
					title: "Marvel Rivals Cheats",
					addToCart: "Lägg i varukorg",
					monthly: "Månadsvis",
					lifetime: "Lifetime",
					available: "Tillgänglig nu",
					gameBadge: "Marvel Rivals",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Vad spelare säger",
					subtitle: "Senaste feedback från Marvel Rivals Cheats-köpare",
					outOf: "av 5",
					countLabel: "recensioner",
				},
				common: {
					buyNow: "Köp nu",
					readGuide: "Läs guide",
					language: "Språk",
					officialLanguageNote: "Engelska är det officiella språket. Andra språk är översatta för global SEO.",
					relatedPages: "Relaterade sidor",
				},
				footer: {
					explore: "Utforska",
					help: "Hjälp & juridik",
					tagline: "Undetected ESP, wallhack, cooldown tracker och Aimbot för Marvel Rivals — after payment.",
				},
				images: {
					hero: "Marvel Rivals Cheats hero — ESP and aimbot overlay in Marvel Rivals",
					espWallhack: "Wallhack outlines showing enemy heroes through walls",
					aimbotCombat: "Soft aim assist overlay during a Marvel Rivals match",
					squadFight: "Marvel Rivals Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Marvel Rivals match",
					headerArt: "Aimbot view and bone priority controls for Marvel Rivals",
					cheatsPackage: "cooldown tracker threat overlay for Marvel Rivals",
					rebootFight: "Aimbot assist during a Marvel Rivals firefight",
					battleRoyale: "Marvel Rivals Cheats in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for heroes and objectives in Marvel Rivals",
				},
			},
			pages: {
				home: {
					title: "Marvel Rivals Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Marvel Rivals cheats för Marvel Rivals på PC. ESP wallhack, cooldown tracker, Aimbot, NACE-underhåll. Omedelbar digital leverans.",
					h1: "Marvel Rivals Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected paket för Marvel Rivals på Windows PC: ESP wallhack, cooldown tracker, Aimbot med NACE-underhåll.",
					imageAlt: "Marvel Rivals ESP player tags hack",
					galleryTitle: "Marvel Rivals Cheats galleri — ESP, Aimbot, wallhack",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Varför Marvel Rivals Cheats 2026",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Ideal för att läsa fiendesquads i ranked och quick play.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "ESP wallhack, cooldown tracker och Aimbot i en licens",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. En licens istället för separata verktyg.",
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "Marvel Rivals ESP | Player Boxes & Wallhack",
					description: "Marvel Rivals ESP: player boxes, objective markers, and wallhack overlays. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marvel Rivals ESP",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Marvel Rivals ESP.",
					imageAlt: "Marvel Rivals ESP player boxes and distance readouts in a match",
					galleryTitle: "Marvel Rivals ESP",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Marvel Rivals ESP",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. player boxes, objective markers, and wallhack overlays.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Marvel Rivals Aimbot | Soft Aim Controls",
					description: "Marvel Rivals Aimbot: soft aim, FOV, and per-hero Aimbot profiles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marvel Rivals Aimbot",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Marvel Rivals Aimbot.",
					imageAlt: "Marvel Rivals aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marvel Rivals Aimbot",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals Aimbot",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. soft aim, FOV, and per-hero Aimbot profiles.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				features: {
					title: "Funktioner | Full Feature List",
					description: "Funktioner: ESP, soft aim, cooldown tracker controls. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Funktioner",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Funktioner.",
					imageAlt: "Marvel Rivals Cheats features — ESP, soft aim, and cooldown tracker screenshots",
					galleryTitle: "Funktioner",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funktioner",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. ESP, soft aim, cooldown tracker controls.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				pricing: {
					title: "Priser | Monthly & Lifetime",
					description: "Priser: $35 monthly or $150 lifetime licenses. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Priser",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Priser.",
					imageAlt: "Marvel Rivals Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Priser",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Priser",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				setup: {
					title: "Installation | PC Setup Guide",
					description: "Installation: Windows PC activation and first-launch setup. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Installation",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Installation.",
					imageAlt: "Marvel Rivals Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Windows PC activation and first-launch setup.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				updates: {
					title: "Uppdateringar | NACE Maintenance Log",
					description: "Uppdateringar: NACE patch status and rebuild notes. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Uppdateringar",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Uppdateringar.",
					imageAlt: "Marvel Rivals Cheats live status after NACE and game patches",
					galleryTitle: "Uppdateringar",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Uppdateringar",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. NACE patch status and rebuild notes.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and NACE questions. omedelbar digital leverans. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. FAQ.",
					imageAlt: "Marvel Rivals Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. ESP, soft aim, delivery, and NACE questions.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Support",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Support.",
					imageAlt: "Marvel Rivals Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. order help and license support contact.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | NACE Safe Status",
					description: "Undetected cheats: undetected maintenance after NACE patches. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Undetected cheats.",
					imageAlt: "Marvel Rivals Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. undetected maintenance after NACE patches.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				wallhack: {
					title: "Marvel Rivals Wallhack | ESP Visibility",
					description: "Marvel Rivals Wallhack: wallhack ESP for heroes, health, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marvel Rivals Wallhack",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Marvel Rivals Wallhack.",
					imageAlt: "Marvel Rivals wallhack visibility through walls in a match",
					galleryTitle: "Marvel Rivals Wallhack",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals Wallhack",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. wallhack ESP for heroes, health, and distance.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				radar: {
					title: "Cooldown-spårare | 2D Threat Overlay",
					description: "Cooldown-spårare: cooldown tracker cues for flanks and rotations. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Cooldown-spårare",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Cooldown-spårare.",
					imageAlt: "Marvel Rivals cooldown tracker overlay showing nearby threats",
					galleryTitle: "Cooldown-spårare",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Cooldown-spårare",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. cooldown tracker cues for flanks and rotations.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				battleye: {
					title: "NACE Bypass | Patch Maintenance",
					description: "NACE Bypass: how NACE updates are handled for Marvel Rivals hacks. omedelbar digital leverans. undetected — Windows PC.",
					h1: "NACE Bypass",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. NACE Bypass.",
					imageAlt: "Marvel Rivals Cheats maintenance after a NACE patch",
					galleryTitle: "NACE Bypass",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "NACE Bypass",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. how NACE updates are handled for Marvel Rivals hacks.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Marvel Rivals Cheats 2026 | Buyer Guide",
					description: "Marvel Rivals Cheats 2026: 2026 Marvel Rivals cheats checklist before checkout. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marvel Rivals Cheats 2026",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Marvel Rivals Cheats 2026.",
					imageAlt: "Marvel Rivals Cheats product overview for Marvel Rivals",
					galleryTitle: "Marvel Rivals Cheats 2026",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/marvel-rivals-cheats/",
					sections: [
						{
							h2: "Marvel Rivals Cheats 2026",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. 2026 Marvel Rivals cheats checklist before checkout.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				hacks: {
					title: "Marvel Rivals Cheats | ESP Aimbot Guide",
					description: "Marvel Rivals Cheats: the Marvel Rivals hacks pillar for ESP and Aimbot. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats product page — ESP, aimbot, and cooldown tracker",
					galleryTitle: "Marvel Rivals Cheats",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. the Marvel Rivals hacks pillar for ESP and Aimbot.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Marvel Rivals Cheat Download | Instant Access",
					description: "Marvel Rivals Cheat Download: digital license download after payment. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marvel Rivals Cheat Download",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Marvel Rivals Cheat Download.",
					imageAlt: "Marvel Rivals Cheats download and install delivery flow",
					galleryTitle: "Marvel Rivals Cheat Download",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Marvel Rivals Cheat Download",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. digital license download after payment.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Marvel Rivals Mod-meny | In-Game Toggles",
					description: "Marvel Rivals Mod-meny: in-client ESP and soft aim toggles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marvel Rivals Mod-meny",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Marvel Rivals Mod-meny.",
					imageAlt: "Marvel Rivals Cheats in-game menu controls",
					galleryTitle: "Marvel Rivals Mod-meny",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Mod-meny",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. in-client ESP and soft aim toggles.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Marvel Rivals Soft Aim | Smooth Aim Settings",
					description: "Marvel Rivals Soft Aim: smooth soft aim settings for Windows PC. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marvel Rivals Soft Aim",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Marvel Rivals Soft Aim.",
					imageAlt: "Marvel Rivals soft aim FOV and smoothness settings",
					galleryTitle: "Marvel Rivals Soft Aim",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Marvel Rivals Soft Aim",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. smooth soft aim settings for Windows PC.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Bästa Marvel Rivals Cheats | Buyer Checklist",
					description: "Bästa Marvel Rivals Cheats: what to compare before buying Marvel Rivals cheats. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Bästa Marvel Rivals Cheats",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Bästa Marvel Rivals Cheats.",
					imageAlt: "Marvel Rivals Cheats overview for Marvel Rivals on PC",
					galleryTitle: "Bästa Marvel Rivals Cheats",
					heroImage: "/images/hero-banner-new-2.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Bästa Marvel Rivals Cheats",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. what to compare before buying Marvel Rivals cheats.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Marvel Rivals Aimbot Hack | Soft Aim Assist",
					description: "Marvel Rivals Aimbot Hack: undetected Aimbot hack assist for Marvel Rivals. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marvel Rivals Aimbot Hack",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Marvel Rivals Aimbot Hack.",
					imageAlt: "Marvel Rivals aimbot hack controls and bone priority",
					galleryTitle: "Marvel Rivals Aimbot Hack",
					heroImage: "/images/hack-preview-image-2.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/marvel-rivals-aimbot/",
					sections: [
						{
							h2: "Marvel Rivals Aimbot Hack",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. undetected Aimbot hack assist for Marvel Rivals.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Marvel Rivals ESP Hack | Boxes & Loot",
					description: "Marvel Rivals ESP Hack: ESP hack boxes, objective pins, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marvel Rivals ESP Hack",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Marvel Rivals ESP Hack.",
					imageAlt: "Marvel Rivals ESP hack boxes and objective markers",
					galleryTitle: "Marvel Rivals ESP Hack",
					heroImage: "/images/hack-preview-image-1.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/marvel-rivals-esp/",
					sections: [
						{
							h2: "Marvel Rivals ESP Hack",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. ESP hack boxes, objective pins, and distance.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Marvel Rivals Unlock All | What It Means",
					description: "Marvel Rivals Unlock All: unlock-all searches vs real ESP and Aimbot tools. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marvel Rivals Unlock All",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Marvel Rivals Unlock All.",
					imageAlt: "Marvel Rivals Cheats license features overview",
					galleryTitle: "Marvel Rivals Unlock All",
					heroImage: "/images/blog-image-5.webp",
					ctaPrimary: "Köp Marvel Rivals Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marvel Rivals Unlock All",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
								"support@rivalshacks.com för support och juridik.",
							],
						},
					],
				},
				privacy: {
					title: "Integritetspolicy | Marvel Rivals Cheats",
					description: "Integritetspolicy for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Integritetspolicy",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Integritetspolicy for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-6.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Contact email,  order references, and basic site security data.",
								"Payment details are processed by checkout — not stored on rivalshacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@rivalshacks.com för support och juridik.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				refund: {
					title: "Återbetalningspolicy | Marvel Rivals Cheats",
					description: "Återbetalningspolicy for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Återbetalningspolicy",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Återbetalningspolicy for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-3.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Contact email,  order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter NACE-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@rivalshacks.com för support och juridik.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
				terms: {
					title: "Användarvillkor | Marvel Rivals Cheats",
					description: "Användarvillkor for Marvel Rivals Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Användarvillkor",
					intro: "Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Användarvillkor for rivalshacks.com and Marvel Rivals licenses.",
					imageAlt: "marvel rivals cheats",
					galleryTitle: "marvel rivals cheats",
					heroImage: "/images/blog-image-12.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Contact email,  order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. NACE-underhåll.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Marvel Rivals Cheats kombinerar ESP wallhack, cooldown tracker och marvel rivals aimbot som undetected paket för Marvel Rivals på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate NetEase terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@rivalshacks.com för support och juridik.",
								"Email: support@rivalshacks.com",
							],
						},
					],
				},
			},
		},
	};
