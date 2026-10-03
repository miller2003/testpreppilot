// Generates the AI-agent-readiness discovery surface into public/.
//
//   public/.well-known/ai-catalog.json                (ARD manifest)
//   public/.well-known/api-catalog                    (RFC 9727 linkset)
//   public/.well-known/openapi.json                   (real description of the real endpoints)
//   public/.well-known/agent-skills/index.json        (Agent Skills discovery, computed digests)
//   public/.well-known/agent-skills/site-content/SKILL.md
//   public/auth.md
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for that surface. Every document is
// generated from the artifact table below, so a URL cannot drift between the
// catalog, the linkset, the OpenAPI document and the skills index.
//
// Two rules are enforced here, because a discovery document that lies is worse
// than no document at all:
//   1. Every advertised URL must correspond to something that actually exists.
//      `_verify_agent_surface.mjs` re-checks this against the built dist/.
//   2. Skill digests are COMPUTED from the exact bytes written, never pasted.
//      A hand-copied sha256 goes stale the moment the artifact is edited.
//
// Wired into `prebuild`, so it re-runs on every build and cannot go stale.
// Run manually with the managed Node:  node _gen_agent_surface.mjs

import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { allExamsFull } from './src/data/examCatalog/index.mjs';
import { releases } from './src/data/examCatalog/release-manifest.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const SITE = 'https://testpreppilot.com';
const BUILDER = 'TestPrepPilot';

// ── Live counts, read from the catalog (never typed) ────────────────
const released = allExamsFull.filter((e) => releases[e.slug]);
const fields = new Set(released.map((e) => e.category));
const newest = Object.values(releases).sort().at(-1);
const withFee = released.filter((e) => e.record?.examMeta?.fee).length;
const withPass = released.filter((e) => e.record?.examMeta?.pass).length;

const EXAMS_JSON = '/data/exam-catalog.json';
const EXAMS_CSV = '/data/exam-catalog.csv';
const HEALTH_JSON = '/data/health.json';
const SKILL_PATH = '/.well-known/agent-skills/site-content/SKILL.md';
const SKILLS_INDEX = '/.well-known/agent-skills/index.json';
const AI_CATALOG = '/.well-known/ai-catalog.json';
const API_CATALOG = '/.well-known/api-catalog';
const OPENAPI = '/.well-known/openapi.json';
const LLMS = '/llms.txt';
const SITEMAP = '/sitemap-index.xml';
const AUTH = '/auth.md';

const written = [];
function put(relPath, content, { json = false } = {}) {
  const abs = join(ROOT, 'public', relPath);
  mkdirSync(dirname(abs), { recursive: true });
  const body = json ? JSON.stringify(content, null, 2) + '\n' : content;
  writeFileSync(abs, body, 'utf8');
  written.push({ relPath, bytes: Buffer.byteLength(body, 'utf8'), sha256: createHash('sha256').update(body, 'utf8').digest('hex') });
  return body;
}

// ═══ 1. Agent Skills: a real procedure for consuming this site ══════
// Encodes the actual access paths that exist. No filler.
const skillBody = `---
name: site-content
description: How to retrieve and cite TestPrepPilot's researched U.S. exam and certification guides in machine-readable form — index, dataset, per-guide facts and the source each fact was verified against.
version: 1.0.0
---

# Consuming TestPrepPilot content

TestPrepPilot publishes independently researched guides to U.S. professional
exams, licences and certifications. Each guide states the awarding body, the
exam fee, the format, the number of questions, the pass mark, the eligibility
rules and the renewal cycle. Where the research recorded one, it also carries
the primary source the figures were verified against (the \`sourceUrl\` field;
\`null\` on guides where that was not recorded).

## 1. Start with the index

- \`GET ${SITE}${LLMS}\` — a plain-text map of every published guide, one line
  each, with fee / length / pass mark. This is the cheapest way to find the
  guide that answers a question. Start here.
- \`GET ${SITE}${SITEMAP}\` — full XML sitemap with honest \`lastmod\` dates. An
  exam page's \`lastmod\` is the day that guide was published, not a build stamp.

## 2. Pull the structured facts

- \`GET ${SITE}${EXAMS_JSON}\` — the whole published catalogue as JSON: one object
  per exam with \`fee\`, \`format\`, \`passMark\`, \`questions\`, \`length\`,
  \`awardingBody\`, \`costRange\`, \`studyTime\`, \`salaryRange\`, \`topics\`,
  \`sourceUrl\`, \`reviewed\` and \`confidence\`.
- \`GET ${SITE}${EXAMS_CSV}\` — the same rows as CSV for spreadsheet or dataframe use.
- \`GET ${SITE}${HEALTH_JSON}\` — build descriptor: how many guides are live and
  when the dataset was generated. Use it to detect a stale local copy.

## 3. Read a single guide

\`GET ${SITE}/exams/<slug>\` returns the full guide as HTML. Facts are stated in
the first two sentences under each heading, so a targeted fetch is usually
enough — you do not need the whole page.

**Always carry these three fields into an answer:**

| Field | Meaning |
|---|---|
| \`reviewed\` | the month the guide's facts were last checked against the primary source |
| \`confidence\` | \`high\` = sponsor-published figure; \`medium\` = reconciled from several sources; \`low\` = structural estimate |
| \`sourceUrl\` | the primary regulatory or awarding-body page the guide was verified against |

Never present a \`low\`-confidence figure as an exact number. Fees and eligibility
rules change; when an answer is time-sensitive, cite the guide *and* its
\`sourceUrl\` so the reader can re-check.

## 4. How to cite

Free to quote and cite. Attribute to "TestPrepPilot" and link the specific guide
you used (not the homepage). Where a figure is contested or changes annually,
quote the awarding body as well.

## 5. Limits

- No API key, no registration, no rate limit. Please keep requests sequential
  and identify your crawler honestly. \`Crawl-delay: 1\`.
- The eight \`/paths/<slug>\` flagship guides route through a different template
  and are not in ${EXAMS_JSON}; they are listed in ${LLMS}.
`;

const skillContent = put('.well-known/agent-skills/site-content/SKILL.md', skillBody);
const skillDigest = written.at(-1).sha256;

// ═══ 2. Agent Skills index (digest computed, not pasted) ════════════
put('.well-known/agent-skills/index.json', {
  $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
  version: '0.2.0',
  skills: [
    {
      name: 'site-content',
      type: 'skill-md',
      description:
        'Retrieve and cite TestPrepPilot U.S. exam and certification guides: plain-text index, structured JSON/CSV dataset, and the per-fact confidence and source fields.',
      url: `${SITE}${SKILL_PATH}`,
      digest: `sha256:${skillDigest}`,
      tags: ['credentials', 'certification', 'exam', 'education', 'dataset'],
    },
  ],
}, { json: true });

// ═══ 3. api-catalog + OpenAPI (only the endpoints that exist) ═══════
put('.well-known/openapi.json', {
  openapi: '3.1.0',
  info: {
    title: 'TestPrepPilot public data',
    version: '1.0.0',
    summary: 'Structured facts about published U.S. exam and certification guides.',
    description:
      'Static, dataset-style endpoints. There is no write surface and no authentication.',
    license: { name: 'Free to read and cite with attribution', url: `${SITE}/disclosure` },
    contact: { url: `${SITE}/about` },
  },
  servers: [{ url: SITE }],
  paths: {
    [EXAMS_JSON]: {
      get: {
        operationId: 'getExamCatalog',
        summary: 'Every published exam guide as a flat JSON array of structured facts.',
        responses: { 200: { description: 'The published catalogue.', content: { 'application/json': { schema: { type: 'array', items: { $ref: '#/components/schemas/Exam' } } } } } },
      },
    },
    [EXAMS_CSV]: {
      get: {
        operationId: 'getExamCatalogCsv',
        summary: 'The same catalogue as CSV.',
        responses: { 200: { description: 'CSV, one row per exam.', content: { 'text/csv': { schema: { type: 'string' } } } } },
      },
    },
    [HEALTH_JSON]: {
      get: {
        operationId: 'getDatasetDescriptor',
        summary: 'Build descriptor: guide count, field count and generation timestamp.',
        responses: { 200: { description: 'Descriptor.', content: { 'application/json': { schema: { type: 'object' } } } } },
      },
    },
  },
  components: {
    schemas: {
      Exam: {
        type: 'object',
        required: ['slug', 'name', 'url', 'category'],
        properties: {
          slug: { type: 'string' },
          name: { type: 'string' },
          url: { type: 'string', format: 'uri' },
          category: { type: 'string' },
          awardingBody: { type: ['string', 'null'] },
          fee: { type: ['string', 'null'], description: 'Exam fee as stated on the guide.' },
          format: { type: ['string', 'null'] },
          questions: { type: ['string', 'null'] },
          length: { type: ['string', 'null'] },
          passMark: { type: ['string', 'null'] },
          costRange: { type: ['string', 'null'] },
          studyTime: { type: ['string', 'null'] },
          salaryRange: { type: ['string', 'null'] },
          topics: { type: 'array', items: { type: 'string' } },
          published: { type: 'string', format: 'date' },
          reviewed: { type: ['string', 'null'] },
          confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
          sourceUrl: { type: ['string', 'null'], format: 'uri' },
        },
      },
    },
  },
}, { json: true });

put('.well-known/api-catalog', {
  linkset: [
    {
      anchor: `${SITE}/data/`,
      'service-desc': [{ href: `${SITE}${OPENAPI}`, type: 'application/openapi+json', title: 'OpenAPI description of the public data endpoints' }],
      'service-doc': [{ href: `${SITE}${LLMS}`, type: 'text/plain', title: 'llms.txt content map' }],
      status: [{ href: `${SITE}${HEALTH_JSON}`, type: 'application/json', title: 'Dataset descriptor and guide count' }],
      item: [
        { href: `${SITE}${EXAMS_JSON}`, type: 'application/json', title: 'Published exam catalogue (JSON)' },
        { href: `${SITE}${EXAMS_CSV}`, type: 'text/csv', title: 'Published exam catalogue (CSV)' },
      ],
    },
  ],
}, { json: true });

// ═══ 4. ARD / ai-catalog manifest ═══════════════════════════════════
// Each entry needs a URL that really resolves. Two to five representative
// queries each, phrased the way a person would actually ask.
put('.well-known/ai-catalog.json', {
  specVersion: '1.0',
  host: {
    displayName: 'TestPrepPilot',
    identifier: 'did:web:testpreppilot.com',
    documentationUrl: `${SITE}/about`,
  },
  entries: [
    {
      identifier: 'urn:air:testpreppilot.com:data:exam-catalog',
      displayName: 'Published U.S. exam and certification catalogue',
      description:
        'Structured facts for every published guide: awarding body, exam fee, format, question count, pass mark, eligibility, study time, salary range, last-reviewed month, confidence level and the primary source each figure was verified against.',
      type: 'application/json',
      url: `${SITE}${EXAMS_JSON}`,
      representativeQueries: [
        'How much does the NCLEX-RN cost and how many questions does it have?',
        'What is the pass mark for CompTIA Security+?',
        'How long do you need to study for the Series 7?',
        'Which U.S. certifications have the highest published salary range?',
      ],
    },
    {
      identifier: 'urn:air:testpreppilot.com:data:exam-catalog-csv',
      displayName: 'Published U.S. exam and certification catalogue (CSV)',
      description: 'The same catalogue rows in CSV form, for spreadsheet and dataframe use.',
      type: 'text/csv',
      url: `${SITE}${EXAMS_CSV}`,
      representativeQueries: [
        'Give me a table of U.S. certification exam fees.',
        'List exam lengths and pass marks for US professional licences.',
      ],
    },
    {
      identifier: 'urn:air:testpreppilot.com:docs:llms',
      displayName: 'llms.txt content map',
      description:
        'Plain-text index of every published guide, one line each, with fee, length and pass mark. The cheapest entry point for retrieval.',
      type: 'text/plain',
      url: `${SITE}${LLMS}`,
      representativeQueries: [
        'Which U.S. professional exams does this site cover?',
        'Find a guide to a specific certification.',
      ],
    },
    {
      identifier: 'urn:air:testpreppilot.com:skill:site-content',
      displayName: 'Agent Skills index',
      description:
        'Discovery index for the site-content skill, which documents how to retrieve, verify and cite these guides.',
      type: 'application/json',
      url: `${SITE}${SKILLS_INDEX}`,
      representativeQueries: [
        'How should an agent cite this site?',
        'How do I tell how reliable a figure on this site is?',
      ],
    },
    {
      identifier: 'urn:air:testpreppilot.com:docs:sitemap',
      displayName: 'XML sitemap',
      description:
        'Every indexable URL with an honest lastmod. For exam guides the lastmod is the publication date of that guide.',
      type: 'application/xml',
      url: `${SITE}${SITEMAP}`,
      representativeQueries: [
        'What are the newest U.S. exam guides?',
        'List every published guide URL.',
      ],
    },
    {
      identifier: 'urn:air:testpreppilot.com:docs:api-catalog',
      displayName: 'API catalogue (RFC 9727)',
      description: 'Linkset describing the public data endpoints and the OpenAPI document that describes them.',
      type: 'application/linkset+json',
      url: `${SITE}${API_CATALOG}`,
      representativeQueries: [
        'Is there a machine-readable API for this site?',
        'How do I fetch this data programmatically?',
      ],
    },
  ],
}, { json: true });

// ═══ 5. auth.md — truthful: there is nothing to authenticate to ═════
put('auth.md', `# auth.md

## Is authentication required?

**No.** Everything TestPrepPilot publishes is public, read-only and free to
cite. There is no account, no API key, no OAuth flow and no protected resource.

## Registration

None. Anonymous access is the only mode; there is no registration endpoint and
no credential to obtain.

## Discovery metadata

| Document | URL | Purpose |
|---|---|---|
| Content map | ${SITE}${LLMS} | Plain-text index of every published guide |
| Dataset | ${SITE}${EXAMS_JSON} | Structured exam facts (JSON) |
| Dataset (CSV) | ${SITE}${EXAMS_CSV} | Same rows as CSV |
| Dataset descriptor | ${SITE}${HEALTH_JSON} | Guide count and generation timestamp |
| OpenAPI | ${SITE}${OPENAPI} | Description of the data endpoints |
| API catalogue | ${SITE}${API_CATALOG} | RFC 9727 linkset |
| AI catalogue | ${SITE}${AI_CATALOG} | ARD manifest listing the resources above |
| Agent skills | ${SITE}${SKILLS_INDEX} | How an agent should retrieve and cite this content |
| Sitemap | ${SITE}${SITEMAP} | Every indexable URL |

## What is NOT supported

- No OAuth 2.0 / OpenID Connect authorization server (there is no protected
  resource to authorize).
- No identity assertions, client secrets or signed tokens.
- No write, POST or mutation surface of any kind.

If a scanner reports missing OAuth metadata, that check does not apply to this
site. Publishing an authorization server here would describe a capability that
does not exist.

## Rate limits

None enforced. Please be reasonable: keep requests sequential and identify your
crawler honestly. TestPrepPilot asks \`Crawl-delay: 1\`.

## Contact

${SITE}/about
`);

// ═══ Report ═════════════════════════════════════════════════════════
console.log(`Agent surface written — ${written.length} artifacts.`);
for (const w of written) {
  console.log(`  ${String(w.bytes).padStart(6)} B  ${w.sha256.slice(0, 12)}…  public/${w.relPath}`);
}
console.log('\nSSOT: every URL above is referenced from the same table, so the');
console.log('catalog / linkset / OpenAPI / skills index cannot disagree.');
console.log(`\nCorpus: ${released.length} published guides across ${fields.size} fields;`);
console.log(`  fee stated on ${withFee}, pass mark on ${withPass}; newest release ${newest}.`);
console.log(`  skill digest = sha256:${skillDigest}`);
