# Marvel Rivals Cheats — Marketing Site

Static Astro 7 site for [rivalshacks.com](https://rivalshacks.com). Primary SEO keyword: **marvel rivals cheats** (secondary: marvel rivals hacks, ESP, aimbot).

## Stack

- Astro 7 + Tailwind CSS 4 + TypeScript
- 22-locale i18n (English at root, `/es/`, `/fr/`, …)
- Cloudflare Pages (dashboard upload or Git). Path redirects live in `public/_redirects`.

## Quick start

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install
npm run generate:i18n   # after editing scripts/i18n-data/*
node scripts/generate-blog-posts.mjs
npm run dev
```

Brand Studio (localhost only): [http://localhost:4321/brand-studio/](http://localhost:4321/brand-studio/)

Build and validate sitemaps:

```powershell
npm run build:validate
```

## Deploy (Cloudflare Pages dashboard)

Do **not** use Wrangler or `npm run deploy`. Full steps: [DEPLOY.md](./DEPLOY.md).

1. `npm run build:validate`
2. Zip the **contents** of `dist/` (zip root must include `index.html`, `_redirects`, `sitemap.xml`)
3. Cloudflare → **Workers & Pages** → **Create** → **Pages** → **Upload assets**
4. Project name: `rivalshacks`
5. Custom domains: `rivalshacks.com` and `www.rivalshacks.com`
6. SSL **Full (strict)** + **Always Use HTTPS**
7. Redirect Rule: www → `https://rivalshacks.com` (301)

**Git instead of zip (still no Wrangler):** connect this repo. Framework Astro, build `npm run build`, output `dist`, env `NODE_VERSION=22.12.0`.

Later updates: rebuild locally → **Create deployment** → upload a new zip of `dist/` contents.

## Environment

- Node.js >= 22.12.0
- Brand, domain, keywords, and checkout: `src/data/brand.ts` (or Brand Studio), then `npm run sync:brand`

## License

Private — for rivalshacks.com deployment only.
