#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────
//  stateGate — the 12-point flagship quality gate for state exam pages
//
//  Implements §1 of reports/STATE-PAGES-FLAGSHIP-PLAN-2026-10-20.md over
//  BUILT dist HTML. A state page that fails this gate must not ship.
//
//  Usage:
//    node scripts/quality/stateGate.mjs [--dist <path>] [--template <key>]
//                                        [--json <out>] [--help]
//
//  Defaults: --dist dist  --json reports/quality/state-gate.json
//
//  Walks <dist>/exams/**/index.html and selects pages whose HTML carries
//  data-scope="state" (emitted by [slug].astro on state pages).
//
//  Exit codes: 0 = all checked pages passed (or nothing to check),
//              1 = at least one page failed, 2 = usage error.
//  A missing dist is NOT an error: exit 0 with an empty summary + note.
// ─────────────────────────────────────────────────────────────────────
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');

// ── CLI ──────────────────────────────────────────────────────────────
function parseArgs(argv) {
  const args = { dist: 'dist', json: path.join('reports', 'quality', 'state-gate.json'), template: null, help: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--help' || a === '-h') args.help = true;
    else if (a === '--dist') args.dist = argv[++i];
    else if (a === '--template') args.template = argv[++i];
    else if (a === '--json') args.json = argv[++i];
    else { console.error(`Unknown argument: ${a}`); process.exit(2); }
  }
  return args;
}
const args = parseArgs(process.argv.slice(2));

if (args.help) {
  console.log(`stateGate — flagship quality gate for state exam pages

Usage: node scripts/quality/stateGate.mjs [--dist <path>] [--template <key>] [--json <out>]

  --dist <path>      built site root (default: dist)
  --template <key>   only report on pages with data-template="<key>"
                     (sibling pages are still loaded for comparison)
  --json <out>       report path (default: reports/quality/state-gate.json)

Checks (flagship plan §1): state-uniqueness >= 55%, Jaccard < 0.45 vs same-
template pages / < 0.60 vs the rest of the site (sampled), state-true exam
table, >= 3 itemised fees, application portal + steps, renewal, reciprocity,
state wages, >= 4 state FAQs, recent-changes section, >= 4 source deep links
with a displayed checkedOn date, zero draft tokens.

Exit: 0 all passed / nothing to check, 1 failures, 2 usage error.
A missing dist exits 0 with an empty summary and a note.`);
  process.exit(0);
}

const DIST = path.isAbsolute(args.dist) ? args.dist : path.join(ROOT, args.dist);
const JSON_OUT = path.isAbsolute(args.json) ? args.json : path.join(ROOT, args.json);

// ── tokenizer (reuses the _seo_dup.mjs approach) ─────────────────────
// Visible body text: between </header> and the last <footer>, scripts and
// styles stripped, tags stripped, entities stripped, lowercased.
function bodyText(html) {
  const s = html.indexOf('</header>');
  const e = html.lastIndexOf('<footer');
  return html
    .slice(s > -1 ? s : 0, e > -1 ? e : html.length)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&[a-z]+;?/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}
const words = (t) => t.split(' ').filter(Boolean);
function shingles(t, n = 6) {
  const w = words(t);
  const s = new Set();
  for (let i = 0; i + n <= w.length; i++) s.add(w.slice(i, i + n).join(' '));
  return s;
}
function jac(a, b) {
  if (!a.size || !b.size) return 0;
  let i = 0;
  for (const x of a) if (b.has(x)) i++;
  return i / (a.size + b.size - i);
}

// State names/codes are stripped from EVERY page before uniqueness/Jaccard so
// the state's own name never counts as unique content.
const STATE_NAMES = [
  'alabama','alaska','arizona','arkansas','california','colorado','connecticut','delaware',
  'district of columbia','florida','georgia','hawaii','idaho','illinois','indiana','iowa',
  'kansas','kentucky','louisiana','maine','maryland','massachusetts','michigan','minnesota',
  'mississippi','missouri','montana','nebraska','nevada','new hampshire','new jersey',
  'new mexico','new york','north carolina','north dakota','ohio','oklahoma','oregon',
  'pennsylvania','rhode island','south carolina','south dakota','tennessee','texas','utah',
  'vermont','virginia','washington','west virginia','wisconsin','wyoming'
];
function stripStates(text) {
  let out = ` ${text} `;
  for (const n of STATE_NAMES) out = out.split(` ${n} `).join(' ');
  // Two-letter codes — EXCLUDING the ones that double as common English words
  // (de, hi, in, la, me, ok, or) so ordinary prose is not distorted.
  return words(out).filter((w) => !/^(al|ak|az|ar|ca|co|ct|dc|fl|ga|id|il|ks|ky|md|ma|mi|mn|ms|mo|mt|ne|nv|nh|nj|nm|ny|nc|nd|oh|pa|ri|sc|sd|tn|tx|ut|vt|va|wa|wv|wi|wy)$/.test(w)).join(' ');
}

// ── visible-HTML helpers for the structural checks ───────────────────
function visible(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ');
}
function sectionHtml(html, id) {
  // Matches <section ... id="ID" ...> ... </section> (non-greedy, single level).
  const m = html.match(new RegExp(`<section[^>]*\\bid=["']${id}["'][^>]*>[\\s\\S]*?</section>`, 'i'));
  return m ? m[0] : '';
}
const countRe = (html, re) => (html.match(re) || []).length;

const NATIONAL_RANGE_PHRASES = [
  /commonly\s+60[\u2013\u2014-]100/i,
  /typically\s+3[\u2013\u2014-]4\s+hours/i,
  /usually\s+70%/i,
  /some\s+states\s+75%/i
];
const DRAFT_TOKENS = [
  { re: /\bverify\b/i, label: '"verify"' },
  { re: /\bTBD\b/, label: '"TBD"' },
  { re: /\u2248/, label: '"\u2248" (approximation sign)' },
  { re: /check with the state/i, label: '"check with the state"' }
];

// A deep link = URL with a path beyond the origin root.
function isDeepLink(href) {
  const m = String(href || '').match(/^https?:\/\/([^/]+)(\/.*)?$/i);
  if (!m) return false;
  return Boolean(m[2] && m[2].length > 1 && m[2] !== '/');
}

// ── collect state pages from dist ────────────────────────────────────
function walkExams(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!ent.isDirectory()) continue;
    const idx = path.join(dir, ent.name, 'index.html');
    if (fs.existsSync(idx)) out.push(idx);
    // nested one more level (not needed today, but cheap)
    for (const sub of fs.readdirSync(path.join(dir, ent.name), { withFileTypes: true })) {
      if (!sub.isDirectory()) continue;
      const idx2 = path.join(dir, ent.name, sub.name, 'index.html');
      if (fs.existsSync(idx2)) out.push(idx2);
    }
  }
  return out;
}

const report = {
  generatedOn: new Date().toISOString().slice(0, 10),
  dist: path.relative(ROOT, DIST) || DIST,
  note: null,
  perPage: [],
  summary: { passed: 0, failed: 0, list: [] }
};

const files = walkExams(path.join(DIST, 'exams'));
if (!files.length) {
  report.note = `No built pages found under ${path.join(DIST, 'exams')} — nothing to check. Build the site first (astro build) or pass --dist.`;
  report.summary.list.push(report.note);
  console.log(`stateGate: ${report.note}`);
  fs.mkdirSync(path.dirname(JSON_OUT), { recursive: true });
  fs.writeFileSync(JSON_OUT, JSON.stringify(report, null, 2));
  process.exit(0);
}

const pages = [];
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  if (!/data-scope=["']state["']/.test(html)) continue;
  const tmpl = (html.match(/data-template=["']([^"']+)["']/) || [])[1] || null;
  const stateCode = (html.match(/data-state=["']([^"']+)["']/) || [])[1] || null;
  pages.push({ file, slug: path.basename(path.dirname(file)), template: tmpl, stateCode, html, vis: visible(html), text: bodyText(html) });
}

if (!pages.length) {
  report.note = 'No data-scope="state" pages found in dist — state pages are either not released yet or the build predates the state layer.';
  report.summary.list.push(report.note);
  console.log(`stateGate: ${report.note}`);
  fs.mkdirSync(path.dirname(JSON_OUT), { recursive: true });
  fs.writeFileSync(JSON_OUT, JSON.stringify(report, null, 2));
  process.exit(0);
}

// Pre-compute stripped token sets + shingles for every state page (comparison
// sets always include ALL state pages, even when --template filters reporting).
for (const p of pages) {
  p.stripped = stripStates(p.text);
  p.tokens = new Set(words(p.stripped));
  p.sh = shingles(p.stripped);
}

const otherStatePages = pages; // for cross-template Jaccard
const sampled = (arr, n) => (arr.length <= n ? arr : arr.filter((_, i) => (i * 7 + 3) % arr.length < n));

function checkPage(p, siblingsSameTemplate) {
  const checks = [];

  const add = (id, label, ok, detail) => checks.push({ id, label, ok: !!ok, detail: detail || (ok ? 'ok' : 'failed') });

  // (1) state-uniqueness >= 55%
  const sibTokens = new Set();
  for (const s of siblingsSameTemplate) for (const t of s.tokens) sibTokens.add(t);
  let unique = 0;
  const total = p.tokens.size;
  for (const t of p.tokens) if (!sibTokens.has(t)) unique++;
  const uniqueness = total ? unique / total : 0;
  add(1, 'state-uniqueness >= 55%', uniqueness >= 0.55,
    `${(uniqueness * 100).toFixed(1)}% unique tokens (${unique}/${total}) vs ${siblingsSameTemplate.length} same-template siblings`);

  // (2) Jaccard < 0.45 vs same-template pages, < 0.60 vs the rest (sampled)
  let worstSame = 0, worstOther = 0;
  for (const s of siblingsSameTemplate) worstSame = Math.max(worstSame, jac(p.sh, s.sh));
  const others = sampled(otherStatePages.filter((s) => s !== p && s.template !== p.template), 60);
  for (const s of others) worstOther = Math.max(worstOther, jac(p.sh, s.sh));
  add(2, 'Jaccard < 0.45 same-template / < 0.60 site-wide',
    worstSame < 0.45 && worstOther < 0.60,
    `worst same-template ${worstSame.toFixed(3)}, worst other ${worstOther.toFixed(3)} (sampled ${others.length})`);

  // (3) exam table present with state-true cells; no national-range phrases
  const examSection = sectionHtml(p.vis, 'exam');
  const hasStateExam = /data-state-exam/.test(p.vis) && examSection.includes('<table');
  const natRanges = NATIONAL_RANGE_PHRASES.filter((re) => re.test(p.text));
  add(3, 'state-true exam table, no national ranges',
    hasStateExam && natRanges.length === 0,
    hasStateExam
      ? (natRanges.length ? `national-range phrasing present: ${natRanges.length}` : 'state exam table present')
      : 'state exam table (data-state-exam) missing');

  // (4) itemised fees >= 3 rows
  const feesSection = sectionHtml(p.vis, 'state-fees');
  const feeRows = countRe(feesSection, /<tr[\s>]/g) - (feesSection.includes('<thead') ? 1 : 0);
  add(4, 'itemised fees >= 3 rows', feeRows >= 3, `${feeRows} fee rows`);

  // (5) application portal/steps
  const applySection = sectionHtml(p.vis, 'state-apply');
  const steps = countRe(applySection, /<li[\s>]/g);
  add(5, 'application portal + steps', /data-state-apply/.test(p.vis) && steps >= 2, `${steps} step items`);

  // (6) renewal
  const renewSection = sectionHtml(p.vis, 'state-renewal');
  add(6, 'renewal section', /data-state-renewal/.test(p.vis) && renewSection.includes('<table'), renewSection ? 'present' : 'missing');

  // (7) reciprocity (v2 section OR the compact section)
  const reciproc = sectionHtml(p.vis, 'state-reciprocity') || sectionHtml(p.vis, 'reciprocity');
  add(7, 'reciprocity section', reciproc.length > 100, reciproc ? 'present' : 'missing');

  // (8) wages
  const wagesSection = sectionHtml(p.vis, 'state-wages');
  add(8, 'state wages section', /data-state-wages/.test(p.vis) && /\$|employment/i.test(wagesSection), wagesSection ? 'present' : 'missing');

  // (9) >= 4 state FAQs (marked data-state-faq in the #faq section)
  const stateFaqCount = countRe(p.vis, /data-state-faq(?=["'\s>]|=[\s]*["'])/g);
  add(9, '>= 4 state FAQs', stateFaqCount >= 4, `${stateFaqCount} state FAQs`);

  // (10) recent changes
  const changesSection = sectionHtml(p.vis, 'state-changes');
  const changeItems = countRe(changesSection, /<li[\s>]/g);
  add(10, 'recent-changes section', /data-state-changes/.test(p.vis) && changeItems >= 1, `${changeItems} entries`);

  // (11) >= 4 source deep links + displayed checkedOn
  const sourcesSection = sectionHtml(p.vis, 'sources');
  const srcLinks = [...sourcesSection.matchAll(/<a[^>]+href=["'](https?:\/\/[^"']+)["']/gi)].map((m) => m[1]);
  const deepLinks = [...new Set(srcLinks.filter(isDeepLink))];
  const checkedOn = countRe(sourcesSection, /data-checked-on=/g) + countRe(p.vis, /data-compiled-on=["'][^"']+["']/g);
  add(11, '>= 4 source deep links with checkedOn', deepLinks.length >= 4 && checkedOn >= 1,
    `${deepLinks.length} deep links, ${checkedOn} checked dates displayed`);

  // (12) zero draft tokens in visible text
  const drafts = DRAFT_TOKENS.filter((d) => d.re.test(p.text));
  add(12, 'zero draft tokens', drafts.length === 0, drafts.length ? drafts.map((d) => d.label).join(', ') : 'clean');

  return checks;
}

const selected = args.template ? pages.filter((p) => p.template === args.template) : pages;
if (args.template && !selected.length) {
  report.note = `No state pages with data-template="${args.template}" found.`;
  report.summary.list.push(report.note);
}

for (const p of selected) {
  const siblings = pages.filter((s) => s !== p && s.template && s.template === p.template);
  const checks = checkPage(p, siblings);
  const failed = checks.filter((c) => !c.ok);
  report.perPage.push({
    slug: p.slug,
    template: p.template,
    state: p.stateCode,
    file: path.relative(ROOT, p.file),
    passed: failed.length === 0,
    checks,
    failedChecks: failed.map((c) => c.id)
  });
  if (failed.length === 0) report.summary.passed++;
  else {
    report.summary.failed++;
    report.summary.list.push(`${p.slug}: failed checks ${failed.map((c) => `#${c.id} ${c.label}`).join('; ')}`);
  }
}

fs.mkdirSync(path.dirname(JSON_OUT), { recursive: true });
fs.writeFileSync(JSON_OUT, JSON.stringify(report, null, 2));

// ── human summary ────────────────────────────────────────────────────
console.log(`stateGate — ${report.generatedOn} — dist: ${report.dist}`);
console.log(`State pages found: ${pages.length} | checked: ${selected.length} | passed: ${report.summary.passed} | failed: ${report.summary.failed}`);
for (const line of report.summary.list) console.log(`  - ${line}`);
if (selected.length) {
  console.log(`Report written to ${path.relative(ROOT, JSON_OUT) || JSON_OUT}`);
}
process.exit(report.summary.failed > 0 ? 1 : 0);
