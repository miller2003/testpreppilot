# Project Memory — testpreppilot-v2

## SEO / GEO surface (audited 2026-09-16, reference = easternalignment)
- **Content-side GEO is already top-tier — do not "improve" the prose style.** `_geo_audit.mjs` reads the sitemap and checks every page against the AI-friendly rules (H2 asks one question / first two sentences answer it / numbers not adjectives / tables / FAQ / JSON-LD matches visible text). 2026-09-16: 120 exam pages average 5,686 words, 94% question-form H2s, 100% have tables (4.7 each) and a visible FAQ (7.7 Q) with **zero** schema-vs-text mismatches; 0 vague adjectives. Violation list empty.
- **Three harnesses to run before/after any SEO-GEO change**: `node _geo_audit.mjs` (content rules per page type), `node _qa/verify-seo-geo.mjs` (new blocks present, all JSON-LD parses, FAQ text matches the page, sitemap lastmod honesty), `node _ai_crawler_check.mjs` (see below). All three need a fresh `astro build` first; `_qa/qa.mjs` + `_qa/matrix.mjs` need `astro preview --port 4321`.
- **⚠️ OPEN P0 — the Cloudflare edge 403s 8 crawlers that robots.txt explicitly Allows**: GPTBot, ClaudeBot, anthropic-ai, Amazonbot, CCBot, Diffbot, cohere-ai, Bytespider. Retrieval bots (OAI-SearchBot, ChatGPT-User, PerplexityBot, Googlebot, Bingbot, Applebot) pass, and a fake bot UA passes — so it is a targeted UA rule, not a generic bot filter. Nothing in the repo controls it (no wrangler.toml / functions / _headers). Fix in the Cloudflare dashboard (Security → Bots, then WAF managed rules, then custom rules) and re-run `_ai_crawler_check.mjs` until every line reads `ok`. Honest framing: the *training/knowledge* path is cut, the *live citation* path is not.
- **Answer surfaces added 2026-09-16**: homepage `.answer-block` + `.dir-faq` (5 Q, FAQPage generated from the same array as the visible text) + `CollectionPage.dateModified`; category pages get a ranked "highest published pay" list quoting the researched salary headline **verbatim** with an `ItemList` (`itemListOrder: Descending`) — 15 of 19 categories have the data (needs ≥3 credentials with a `$` figure in `depth.salaryOutlook.headline`).
- **Number discipline for the answer blocks**: every figure in them is COMPUTED from the catalog in frontmatter (never typed). Watch the two-definitions trap: `buildDirectory()` includes the 8 flagship guides (which route to `/paths`), so "fields with a published guide" is 19 by one definition and 18 by another — `/llms.txt` says "18 of the directory's 19 credential fields", the homepage says "19 credential fields". If you quote a count, state its definition.
- **Sitemap lastmod policy**: emit a real content date or nothing. Exams → release date; categories → newest release in that field; home + /explore → newest release overall; everything else → no `lastmod` (a build-stamp lastmod on every URL is noise Google discards, which also devalues the accurate ones).
- **`public/llms.txt` is generated** — run `node _gen_llms.mjs` after any release-manifest or catalog change (it writes only released, indexable pages, each with a fee/length/pass-mark one-liner). Currently 120 guides / 167 links / ~39 KB.
- Biggest remaining structural gap vs the reference playbook: **no ranked "Best N" pages at all** (the playbook's evidence says 74.2% of AI citations come from Top-N structures and their top-cited URLs are all best/vs/review). Hubs also lag: /methodology, /reviewers, /editorial-policy, /guides, /explore average 775 words with 0 tables and no FAQ.
- **Tooling traps hit while auditing**: never run regex through `node -e` from Git Bash (`//` and `\$` get mangled → silent wrong results); a Bash `cmd | tail` around a script that spawns Chrome exits 23 and loses output (`> log 2>&1` instead).

## Build / dev environment (non-obvious)
- Astro 5 site. `astro build` / `astro preview` **must run with `dangerouslyDisableSandbox: true`** — the default sandbox's safe-delete shim blocks Vite's `.vite/deps` cleanup and the build silently produces no `dist/`.
- Managed Node only: `export PATH="/c/Users/samja/.workbuddy/binaries/node/versions/22.22.2:$PATH"`; call `./node_modules/.bin/astro` (shell wrapper, never prefix with `node`).
- **`rm -rf dist` is not allowed** — safe-delete shim fails closed even with sandbox disabled; `astro build` empties outDir itself.
- **Astro `is:inline` gotcha**: `{expr}` not evaluated in `<script is:inline>`; use `<script is:inline define:vars={{myVar}}>` and `JSON.parse()` it (define:vars injects a JSON string).
- **Scoped-style gotcha**: JS-injected DOM never gets `[data-astro-cid-*]` — styles targeting injected nodes must use `:global(.cls)`; keep injected class names namespaced.
- **Flex-column + `overflow-y:auto` shrinks children** — panel bodies need `.x > * { flex-shrink: 0 }`; sticky footer shouldn't use negative bottom margin.

## Site IA / key pages
- Homepage `/` IS the exam directory (since 2026-08-21): sticky search+filter bar, abbreviation-aware combobox. `/exams` index 301-redirects to `/`.
- Top nav (2026-08-20): Guides · States · About · search · theme toggle · Exams(button). `/how-it-works` `/reviews` `/contact` redirect into `/about` (excluded from sitemap). `/about` = consolidated E-E-A-T hub linking 4 deep trust pages (`/methodology` `/reviewers` `/editorial-policy` `/disclosure`).
- `/exams` + `/exams/[slug]` are the core product — **off-limits for foundational changes**. `/states` and `/guides` are real hubs; `/explore` deliberately NOT in nav (overlaps `/exams` semantically — confirm before surfacing).
- Global search modal in `Header.astro` (`#search-modal`, Ctrl/Cmd+K), lazily mounts Pagefind into `#nav-search` — keep IDs unique vs SearchUI.astro's `#search` on `/explore`.
- Homepage filter UX (2026-09-16): desktop inline row; ≤900px one row + "Filters" button → bottom sheet (one form, two layouts; `.filter-shell/.filter-panel` are `display:contents` on desktop). Segmented control commits instantly; selects commit on Show; cancel rolls back. Verified via `_qa/qa.mjs` + `_qa/matrix.mjs` (need `astro preview --port 4321`).

## Publishing pipeline (verified)
- **The one switch**: `src/data/examCatalog/release-manifest.mjs` `releases = { slug: 'YYYY-MM-DD' }`, consumed only by `isReleased()` at `index.mjs:169`. Hand-editing is safe (manager/server.mjs is a UI, not a daemon).
- Deploy script (current): `_deploy_batch_30_v2.mjs` — edit `BATCH`/`WINDOW_END`/`DOUBLE_DAYS`, validates before writing, never touches existing slugs. Companions: `_candidates_now.mjs`, `_cat_balance.mjs`.
- **Pick only `national`-mode pages** (`e.record` exists); ~123 state rows are `placeholder` → noindex. **Allocate by live coverage, not backlog** — as of 2026-09-16: technology 19%, admissions-academic 12%, trades 9%, insurance/behavioral-health/animal-agriculture 0% are the gaps; legal/healthcare/finance nearly saturated.
- **Always re-run `node _gen_infographics.mjs` after editing the manifest** — `[slug].astro:398` emits the infographic `<img>` unconditionally; missing asset = broken image. Output count = released + 8.
- Manifest date is only a gate; `datePublished` wired via `releaseDateFor(slug)` → schema.org + article:published_time; sitemap lastmod from `releases[slug]` (not build timestamp).
- Waves: wave 1 = 2026-09-02 (30 pages, 2026-08-02→09-02); wave 2 = 2026-09-16 (30 pages, dates 2026-08-18→09-16). Manifest = 120 slugs, **387 indexable candidates left**. Avoid releasing near-duplicate pair `notary-signing-agent` + `nna-certified-notary-signing-agent` together.
- Post-release verification: dist page exists, published_time == schema date == manifest date, no noindex, infographic referenced, sitemap loc without trailing slash, lastmod == release date.

## Design system (src/styles/tokens.css)
- Colors: `--primary #1d4ed8`, `--ink #111e1f`, `--paper #faf9f6`, `--cream #f0eee5`, `--line #e3e4df`; 13 accent vars (coral/blue/gold/mint/indigo/rose/slate/amber/teal/plum/sage/copper). Fonts: Lora (body) + Cormorant Garamond (headings); `--radius 12px`; fluid type tokens.
- Site has a dark theme (`[data-theme="dark"]`) — always style via CSS variables.
- Trust cluster (/about etc.) shares left-aligned `.page-hero` (2px ink bottom border) — keep new trust pages consistent.
- Schema logo: `${SITE}/logo.png` 512×512 (src/data/editorial.ts).

## Stats & components
- 609 exam depth pages → "600+ roadmaps" safe. states.ts = 51 codes, REVIEW_DOMAINS = 8, methodology = 7 steps.
- Sidebar TOC: `src/components/SidebarTOC.astro`, 6 chapter buckets; used by `/exams/[slug]` + `/paths/[slug]`.
- **JSX `0` trap**: `cond || arr.length` inside `expr && JSX` renders literal "0" — coerce with `!!(...)`.
