# SEO / GEO upgrade — 2026-10-03

Scope note: the **content layer was already at reference standard** and was not
touched. 175 exam guides, 5,439 average words, 94% question-form H2s, 100% with a
table and a visible FAQ, zero JSON-LD-vs-visible-text mismatches. Rewriting that
prose would have been churn. The gaps were all **structural**, and that is what
this pass closes.

| Layer | Before | After |
|---|---|---|
| Agent-readiness surface | none | 6 discovery documents + `Link` response headers |
| Machine-readable dataset | none | 175 rows × 18 fields, JSON + CSV + descriptor |
| Ranked Top-N pages | **0** | **14** (`/best` + 13 fields) |
| Sitemap URLs | 214 | 229 |
| Pages built | 221 | 236 |
| `dateModified` accuracy | ~15 pages asserted a fabricated date | omitted unless the page supplies a real one |

---

## 1. Agent-readiness surface

An AI agent that lands anywhere on the site can now discover the machine-readable
surface without guessing paths.

**Response headers** (`public/_headers`, applied to every response):

```
Link: </.well-known/api-catalog>; rel="api-catalog",
      </.well-known/openapi.json>; rel="service-desc",
      </llms.txt>; rel="service-doc",
      </.well-known/ai-catalog.json>; rel="service-meta",
      </data/health.json>; rel="status"
```

Only registered relation types are used (RFC 9727 §3, RFC 8631). The same targets
are advertised as HTML `<link rel=…>` tags from every page.

**Discovery documents** — `public/.well-known/`:

| Document | What it declares |
|---|---|
| `ai-catalog.json` | ARD manifest, 6 entries, each with 2–5 representative queries |
| `api-catalog` | RFC 9727 linkset; `anchor` is `/data/`, which resolves to a real page |
| `openapi.json` | OpenAPI 3.1 description of the three data endpoints |
| `agent-skills/index.json` | Agent Skills index, **digest computed from the shipped bytes** |
| `agent-skills/site-content/SKILL.md` | The real procedure: what to fetch, and what `confidence` means |
| `auth.md` | Access policy: public, read-only, no key, and what is *not* supported |

`robots.txt` gained `Content-Signal: ai-train=yes, search=yes, ai-input=yes`,
`Agentmap:`, and `Crawl-delay: 1`.

### Two integrity rules are enforced by code

1. **Nothing may be advertised that does not exist.** `_verify_agent_surface.mjs`
   resolves every URL promised by any document, every `Link` header target, and
   every OpenAPI path against the built `dist/`. A server card pointing at a dead
   URL burns an agent's turn and gets the whole domain downgraded — worse than
   publishing nothing.
2. **Nothing may drift.** `_gen_agent_surface.mjs` is the single source of truth
   for the whole surface and runs from an `astro:build:start` hook, so the skill
   digest is recomputed from the shipped bytes on every build. (An npm `prebuild`
   alone was not enough — a bare `astro build` skips it.)

### Deliberately NOT published

`agent-card.json`, `mcp/server-card.json`, `oauth-authorization-server`,
`oauth-protected-resource`, `openid-configuration` — **not present, on purpose.**

This site has no A2A agent, no `/mcp` endpoint, and no protected resource. A
scanner will flag those as missing; publishing them anyway would assert
capabilities that do not exist, which is the one failure mode that makes all the
documents untrustworthy. `auth.md` states this plainly.

---

## 2. Public dataset — `/data/`

| URL | Content type |
|---|---|
| `/data/exam-catalog.json` | `application/json` |
| `/data/exam-catalog.csv` | `text/csv` |
| `/data/health.json` | `application/json` |

175 rows × 18 fields: `slug, name, url, category, awardingBody, fee, format,
questions, length, passMark, costRange, studyTime, salaryRange, topics, published,
reviewed, confidence, sourceUrl`.

Two design decisions matter:

- **Only released guides are included.** An unpublished page leaking into a
  machine-readable feed is worse than a 404 — crawlers index feeds.
- **Every row carries its own evidence level.** `confidence` is `high` (66 rows —
  figure published by the awarding body), `medium` (32 — reconciled, may vary by
  jurisdiction) or `low` (77 — a structural estimate, not to be quoted as exact).
  70 rows carry the `sourceUrl` the research was verified against; where that was
  not recorded the field is `null` rather than guessed.

`_verify_agent_surface.mjs` asserts the emitted keys match the documented OpenAPI
schema exactly, in both directions.

---

## 3. Ranked Top-N pages — `/best`

The largest structural gap. Evidence from the reference playbook: most AI
citations come from ranked list structures, and the site had none.

- `/best` — site-wide, top 25 of 163 ranked credentials
- `/best/<field>` — 13 field pages, generated only where ≥5 credentials qualify

Ranking key: the median annual wage published for the occupation each credential
unlocks. Three rules keep it honest:

1. **The parsed figure decides the order and is never printed.** Printing it would
   attribute an occupation median to a certificate — no wage series tracks a
   certificate.
2. **The printed sentence is the guide's own sourced headline, verbatim**,
   including its attribution (usually the BLS series), so the sourced sentence
   stays quotable.
3. **Retired credentials are dropped.** The check reads the researched sentence
   itself, so it can only ever remove a row — never change a figure.

`src/data/examCatalog/payRanking.mjs` holds the single definition, imported by both
the pages and `_gen_llms.mjs`, so the ranking in `llms.txt` cannot disagree with
the ranking rendered on the page.

Measured on the 14 new pages: 100% have a table, 100% a visible FAQ with matching
`FAQPage`, 100% an `ItemList`, number density 10.4 per 100 words, 0 JSON-LD
mismatches.

---

## 4. Technical SEO

- **`dateModified` honesty.** `BaseLayout` stamped a hardcoded `2026-08-06` on every
  page that passed no date — about 15 pages (`/privacy`, `/methodology`, `/guides`,
  `/explore`, …) asserted a freshness date they had no evidence for. A
  self-consistent but false signal is worse than none; it teaches crawlers to
  discount the field on the pages where it *is* accurate. The property is now
  omitted unless the page supplies one, and either prop name feeds both the meta
  tags and the `WebPage` node so they cannot disagree.
- **WebMCP.** `search_exams`, `get_exam` and `list_exam_categories` are registered
  against the real dataset, for both generations of the API, wrapped so a failure
  can never break the page.
- **Sitemap.** `/best` (0.85) and `/data` joined with honest `lastmod`; the
  build-stamp-free policy is unchanged and still verified.
- **`Content-Type`** declared for every extensionless discovery file, which would
  otherwise be served as `application/octet-stream` — defeating the document.
- Discovery `<link>` tags and a `Dataset` JSON-LD node on `/data`.

---

## Verification

All four suites pass on a clean build of 236 pages:

| Harness | Checks |
|---|---|
| `_verify_agent_surface.mjs` | every advertised URL resolves; digest == shipped bytes; only registered `Link` rel types; OpenAPI schema == dataset keys; no unreleased row in the feed |
| `_geo_audit.mjs` | violation list empty across all 236 pages |
| `_qa/verify-seo-geo.mjs` | homepage/category/hub blocks, JSON-LD parses, schema matches visible text, sitemap lastmod honesty |
| `_verify55.mjs` | the wave-3 batch of 55 pages, unchanged |

npm aliases: `verify:agent`, `verify:content`, `verify:batch`, `gen:agent`, `gen:llms`.

---

## Still open

### 1. The Cloudflare edge blocks 8 crawlers — needs a dashboard change, not code

Re-tested today against a real guide page:

| Blocked (403) | Allowed (200) |
|---|---|
| GPTBot, ClaudeBot, anthropic-ai, Amazonbot, CCBot, Diffbot, cohere-ai, Bytespider | OAI-SearchBot, ChatGPT-User, Claude-User, PerplexityBot, Google-Extended, Googlebot, Bingbot, Applebot, meta-externalagent, **and a fake bot UA** |

The fake UA passing proves this is a **targeted allow/block list, not generic bot
protection** — and `robots.txt` explicitly allows all eight. The live `robots.txt`
is byte-identical to the repo, so Cloudflare is **not** rewriting it; only the edge
WAF layer blocks.

**This is the highest-impact GEO fix available and it cannot be made from the repo.**
In the Cloudflare dashboard: open **AI Crawl Control** (older accounts:
**Security → Bots**) and set those crawlers to **Allow**. That feature writes a WAF
custom rule, so also check **Security → WAF → Custom rules** for an AI-crawler
block, and **Security → Settings** for a "block AI training" toggle.

Note the trade-off before deciding: `GPTBot`, `ClaudeBot` and `Google-Extended`
bundle **training *with* grounding** in a single crawler token, so leaving them
blocked also closes the live-citation channel for those assistants. The retrieval
bots are unaffected either way.

### 2. The trust hubs are the last thin layer

8 pages (`/methodology`, `/reviewers`, `/editorial-policy`, `/about`, `/guides`,
`/explore`, `/disclosure`, `/privacy`) average 775 words, 26% question-form H2s,
**0 tables and 13% FAQ**. This is the weakest remaining layer, but closing it needs
real content authoring rather than a markup change — and none of these pages carries
its own review date, so there is no honest `dateModified` to wire either.

### 3. Not built

An MCP server (would need a Cloudflare Pages Function) and `X vs Y` comparison
pages.
