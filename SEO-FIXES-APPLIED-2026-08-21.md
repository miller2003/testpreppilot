# SEO Fixes Applied — 2026-08-21 (top-tier pass)

Every P0/P1 issue from `SEO-AUDIT-EXPERT-2026-08-21.md` has been coded, built, and
**verified in the live `dist/` output**. Rebuild ran with the sandbox disabled
(the earlier sitemap regression was caused by the build sandbox stripping
output), producing `sitemap-index.xml` across **147 pages**.

## What changed (with verification)

| # | Issue | Fix | Verified in build |
|---|-------|-----|------------------|
| 1 | **No sitemap in build** (robots.txt pointed to a missing file) | Rebuilt unsandboxed; `@astrojs/sitemap` config already correct | `dist/sitemap-index.xml` + `dist/sitemap-0.xml` present |
| 2 | **No analytics / no GSC** | New `src/components/Analytics.astro` (GA4 + GSC), config-driven via `PUBLIC_GA4_ID` / `PUBLIC_GSC_VERIFICATION`, graceful no-op when unset; wired into `BaseLayout` `<head>`; `.env.example` added | Component builds clean; renders nothing until IDs supplied (by design) |
| 3 | **`/reviews` `/contact` `/how-it-works` = meta-refresh soft redirects** | Added host-level **301**: `public/_redirects` (Netlify/Cloudflare Pages) + `vercel.json`; kept meta-refresh pages as fallback | `dist/_redirects` + root `vercel.json` present |
| 4 | **Affiliate links missing `rel="sponsored"`** | `AffiliateBox.astro` → `rel="sponsored nofollow noopener noreferrer"` | `rel="sponsored nofollow noopener noreferrer"` in built pages |
| 5 | **`og:type` always `website`** | `ogType` prop threaded `BaseLayout → SEOHead`; `article` + `article:modified/published_time` on all content pages | Exam/guide/path/state-credential articles now emit `og:type="article"` |
| 6 | **Zero images site-wide** (0 `<img>`) | `_gen_infographics.mjs` writes a branded, source-derived SVG per exam to `public/exams/<slug>/infographic.svg` (58 files); referenced via `<img>` on exam pages; `prebuild` script added | 58 `infographic.svg` in `dist/exams/*/`; `<img … infographic.svg>` present on each exam page |
| 7 | **E-E-A-T = Organization only, 0 external authority** | `editorial.ts` `leadEditorPerson()` (`#lead-editor`); referenced as `WebPage` author on every page; `sameAs` config-driven | `"@type":"Person"` `#lead-editor` node emitted per page |
| 8 | **`/exams` overclaims "5,000+"** | Description + search placeholder now use dynamic `stats.total` | Live description reads "Browse **58** credential paths" |
| 9 | **RSS only 8 items** | `rss.xml.ts` expanded to paths + indexable exams + guides | **69 `<item>`** in `dist/rss.xml` |

## Items that still need YOUR input (cannot be fabricated)

These are intentionally left as config, not hardcoded, because inventing them
would itself violate Google's quality guidelines:

1. **Analytics IDs** — copy `.env.example` → `.env` and set:
   - `PUBLIC_GA4_ID` (your `G-…` measurement ID)
   - `PUBLIC_GSC_VERIFICATION` (the token from GSC's "HTML tag" method)
   Then rebuild. Until set, the site ships with zero third-party requests.
2. **Lead editor identity** (`src/data/editorial.ts` → `LEAD_EDITOR`): replace the
   placeholder name with a **real, verifiable** editor and add their external
   profiles (`sameAs: ['https://www.linkedin.com/in/…']`). This is the single
   biggest remaining E-E-A-T lever.
3. **Near-duplicate doorway threshold** (224 exam pairs ≥0.70): this is a
   *content* problem, not code. Expanding the state×credential matrix further
   will re-trigger thin/duplicate signals until each state page carries unique,
   source-linked substance. Keep the per-page infographic + named reviewer as
   the differentiators when you scale.

## Deployment note
If you host on Netlify, Cloudflare Pages, or Vercel, the 301 redirects in
`_redirects` / `vercel.json` apply automatically. On other hosts, add equivalent
server redirects. Confirm `sitemap-index.xml` and `rss.xml` are served (no
extension rewrite) after deploy, and submit the sitemap in Google Search Console.
