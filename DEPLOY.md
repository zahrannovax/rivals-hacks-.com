# Deploy rivalshacks.com

Step-by-step guide to deploy **Marvel Rivals Cheats** to **rivalshacks.com** on Cloudflare Pages, attach DNS, and submit sitemaps to Google Search Console.

Use **Cloudflare Pages in the dashboard**. No Wrangler. No `npm run deploy`. This site is a static Astro build (`dist/`). Path redirects live in `public/_redirects` and ship with that folder.

Host redirects (`www` → apex) are set in the Cloudflare UI.

## Prerequisites

- Node.js **≥ 22.12.0**
- Cloudflare account with access to **rivalshacks.com** DNS

## 1. Build on your PC

From the project folder:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install
npm run build:validate
```

That writes the site into `dist/`. Confirm `dist/_redirects` exists (copied from `public/_redirects`). `build:validate` must pass before you upload.

Zip **the contents of `dist`**, not the `dist` folder itself. The zip root must contain `index.html`, `_redirects`, `sitemap.xml`, and the rest.

Optional if you edited those sources first:

```powershell
npm run generate:i18n
node scripts/generate-blog-posts.mjs
npm run build:validate
```

## 2. Create the Pages project (Direct Upload)

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Project name: `rivalshacks` (or any name).
3. Drop the zip / `dist` files → **Deploy**.

You get a preview like `https://rivalshacks.pages.dev`. Open it and check the homepage.

**Later updates:** same project → **Create deployment** → upload a new zip of `dist`.

**Git instead of zip (still no Wrangler):** Pages → **Connect to Git** → this repo.

| Field | Value |
|--------|--------|
| Framework | Astro |
| Build command | `npm run build` |
| Output directory | `dist` |
| Root directory | `/` (repo root) |

**Settings → Environment variables** (Production + Preview):

| Name | Value |
|------|--------|
| `NODE_VERSION` | `22.12.0` |

Cloudflare builds on push. You still never run Wrangler.

## 3. Attach rivalshacks.com

1. Pages project → **Custom domains** → **Set up a custom domain**.
2. Add `rivalshacks.com`.
3. Add `www.rivalshacks.com` as well (needed for the www 301).

If the domain is already in this Cloudflare account, DNS is created for you. Check **DNS**:

| Type | Name | Content | Proxy |
|------|------|---------|--------|
| CNAME | `@` | `rivalshacks.pages.dev` | Proxied |
| CNAME | `www` | `rivalshacks.com` (or `rivalshacks.pages.dev`) | Proxied |

If an old **Worker** is still bound to this domain, remove that Worker custom domain first. Pages and a Worker on the same hostname will fight.

## 4. SSL

Zone **rivalshacks.com** → **SSL/TLS**:

- Encryption mode: **Full (strict)**
- **Edge Certificates** → **Always Use HTTPS**: On

That is the `http` → `https` 301. Do not add a second HTTP redirect rule.

## 5. Redirect rules (dashboard)

**Rules** → **Redirect Rules** → **Create rule**.  
Do **not** paste blog or locale paths here. Those are already in `_redirects`.

### Rule 1 — www → apex (required)

- **Rule name:** `www to root`
- **When incoming requests match:** Custom filter  
  `(http.host eq "www.rivalshacks.com")`
- **Then:** Dynamic redirect  
  `concat("https://rivalshacks.com", http.request.uri.path)`  
  Status **301**  
  **Preserve query string:** On
- Place this **first** (highest priority).

## 6. Path redirects (automatic)

After upload, Pages reads `dist/_redirects`. Included:

| From | To | Status |
|------|----|--------|
| `/brand-studio`, `/__brand` | 404 page | 200 rewrite (hidden) |
| `/sitemap-index.xml` | `/sitemap.xml` | 301 |
| `/nace-bypass` | `/updates/` | 301 |
| Old Tarkov landings | Marvel Rivals pages | 301 |
| Old blog slugs | New slugs | 301 |
| Locale cannibal URLs | Canonical locale pages | 301 |

Trailing slash is built into Astro (`/features` → `/features/`).

## 7. Smoke test (after DNS is live)

PowerShell:

```powershell
# Apex
curl.exe -sI https://rivalshacks.com/
# HTTP/2 200

# http → https (Always Use HTTPS)
curl.exe -sI http://rivalshacks.com/
# 301 Location: https://rivalshacks.com/

# www → apex (Redirect Rule)
curl.exe -sI https://www.rivalshacks.com/
# 301 Location: https://rivalshacks.com/

# Trailing slash
curl.exe -sI https://rivalshacks.com/features
# 301 → https://rivalshacks.com/features/

# Core pages
curl.exe -sI https://rivalshacks.com/marvel-rivals-cheats/
curl.exe -sI https://rivalshacks.com/marvel-rivals-esp/
curl.exe -sI https://rivalshacks.com/marvel-rivals-aimbot/
curl.exe -sI https://rivalshacks.com/features/
curl.exe -sI https://rivalshacks.com/pricing/
curl.exe -sI https://rivalshacks.com/updates/
curl.exe -sI https://rivalshacks.com/setup/
curl.exe -sI https://rivalshacks.com/blog/
curl.exe -sI https://rivalshacks.com/es/

# Brand Studio hidden
curl.exe -sI https://rivalshacks.com/brand-studio/
# 200 (404 page), not the studio UI

# Old Tarkov path
curl.exe -sI https://rivalshacks.com/tarkov-cheats/
# 301 → /marvel-rivals-cheats/

# Sitemaps + robots
curl.exe -sI https://rivalshacks.com/sitemap.xml
curl.exe -sI https://rivalshacks.com/sitemap-en.xml
curl.exe -sI https://rivalshacks.com/sitemap-images.xml
curl.exe -sI https://rivalshacks.com/robots.txt
```

Browser: homepage, Features, Store, Status. View source: canonical is `https://rivalshacks.com/...` with a trailing slash. `robots.txt` ends with `Sitemap: https://rivalshacks.com/sitemap.xml`.

## 8. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. **Add property** → **Domain** → enter `rivalshacks.com` (covers www + http).
3. Verify with a **DNS TXT record** in Cloudflare.
4. **Sitemaps → Add a new sitemap** — submit **only the index**:

```text
sitemap.xml
```

Full URL: `https://rivalshacks.com/sitemap.xml`

Google fetches the child sitemaps itself.

**Children (check they return 200; you do not have to add each one):**

- `https://rivalshacks.com/sitemap-en.xml`
- `https://rivalshacks.com/sitemap-images.xml`
- `https://rivalshacks.com/sitemap-es.xml`
- `https://rivalshacks.com/sitemap-fr.xml`
- `https://rivalshacks.com/sitemap-de.xml`
- `https://rivalshacks.com/sitemap-pt.xml`
- `https://rivalshacks.com/sitemap-it.xml`
- `https://rivalshacks.com/sitemap-nl.xml`
- `https://rivalshacks.com/sitemap-pl.xml`
- `https://rivalshacks.com/sitemap-ru.xml`
- `https://rivalshacks.com/sitemap-tr.xml`
- `https://rivalshacks.com/sitemap-ar.xml`
- `https://rivalshacks.com/sitemap-ja.xml`
- `https://rivalshacks.com/sitemap-ko.xml`
- `https://rivalshacks.com/sitemap-zh.xml`
- `https://rivalshacks.com/sitemap-hi.xml`
- `https://rivalshacks.com/sitemap-id.xml`
- `https://rivalshacks.com/sitemap-th.xml`
- `https://rivalshacks.com/sitemap-vi.xml`
- `https://rivalshacks.com/sitemap-uk.xml`
- `https://rivalshacks.com/sitemap-cs.xml`
- `https://rivalshacks.com/sitemap-ro.xml`
- `https://rivalshacks.com/sitemap-sv.xml`

**Do not submit:** `sitemap-index.xml` (301s to the index), `sitemap-i18n.xml`, `/brand-studio/`.

5. Use **URL Inspection** to request indexing for:
   - Homepage (`/`)
   - Money page (`/marvel-rivals-cheats/`)
   - Key landings (`/marvel-rivals-esp/`, `/marvel-rivals-aimbot/`, `/features/`, `/pricing/`)
   - A sample of locale homepages (`/es/`, `/de/`, `/fr/`)
6. Monitor **Pages**, **Core Web Vitals**, and hreflang over the following weeks.

## 9. Ongoing maintenance

| Task | Command / action |
|------|------------------|
| Full build + SEO validation | `npm run build:validate` |
| Regenerate i18n content | `npm run generate:i18n` (after editing `scripts/i18n-data/*`) |
| Regenerate blog posts | `node scripts/generate-blog-posts.mjs` |
| Redeploy | Rebuild locally → **Create deployment** → upload new `dist` |

Each later update: rebuild locally → **Create deployment** → upload new `dist`.

Cloudflare does not rebuild it for you in Direct Upload.

1. `npm run build:validate` on your PC
2. Cloudflare → your Pages project → **Create deployment**
3. Upload the **contents** of `dist`
4. Wait until it says Success
5. Open `https://rivalshacks.com` and hard-refresh

You do **not** run Wrangler. You do **not** add the domain again. Only rebuild + upload.

If you later connect the GitHub repo in Pages instead, Cloudflare builds on every push and you skip the zip upload.

## Checklist

- [ ] `npm run build:validate` passes locally
- [ ] Pages Direct Upload of `dist` (or Git connect with `NODE_VERSION=22.12.0`)
- [ ] Custom domains: `rivalshacks.com` + `www.rivalshacks.com`
- [ ] Old Worker unbound from this domain
- [ ] SSL Full (strict) + Always Use HTTPS
- [ ] Redirect Rule: www → `https://rivalshacks.com` 301
- [ ] Smoke curls pass
- [ ] GSC: domain property + `sitemap.xml` only
- [ ] Homepage and `/marvel-rivals-cheats/` requested for indexing
