// GEO audit — checks every content page in the built site against the
// AI-friendly content rules the user supplied (2026-09-02):
//
//   R2.1 each H2 answers exactly one question
//   R2.2 the first 2-3 sentences of each block give the answer directly
//   R2.3 concrete numbers instead of adjectives
//   R2.4 comparison tables filled with real data
//   R2.5 an FAQ at the bottom, one Q&A per concrete question
//   R3   JSON-LD (FAQPage / ItemList …) that MATCHES the visible text
//   R4   llms.txt listing the best content (checked separately)
//
// Reads the sitemap (the exact index face Google/AI see), maps every URL to
// its dist file, and audits each page individually. No sampling.

import fs from 'node:fs';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';

// ── helpers ────────────────────────────────────────────────────────
const stripTags = (h) =>
  h
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ');

const textOf = (h) =>
  stripTags(h)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();

const norm = (s) => String(s).replace(/\s+/g, ' ').trim();

const NUM_TOKEN = /\$?\d[\d,.]*%?/g;
const isQuestion = (s) =>
  /^(how|what|when|where|why|which|who|can|do|does|did|is|are|was|were|will|would|should|could|may|might)\b/i.test(s) ||
  /\?\s*$/.test(s);

const VAGUE = [
  'amazing', 'awesome', 'excellent', 'fantastic', 'incredible', 'outstanding',
  'world-class', 'best-in-class', 'top-tier', 'state-of-the-art', 'cutting-edge',
  'seamless', 'effortless', 'unbeatable', 'superior', 'premium quality',
  'highly recommended', 'game-changer', 'one-stop', 'best-in-market'
];

// ── collect every URL from the sitemap ────────────────────────────
const xml = readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8');
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
console.log(`sitemap URLs: ${urls.length}`);

// ── per-page audit ────────────────────────────────────────────────
const results = [];

for (const url of urls) {
  const path = new URL(url).pathname.replace(/\/$/, '') || '/';
  const file = path === '/' ? join(DIST, 'index.html') : join(DIST, path, 'index.html');
  if (!existsSync(file)) { results.push({ path, type: classify(path), error: 'no dist file' }); continue; }

  const html = readFileSync(file, 'utf8');
  const visible = textOf(html);
  const words = visible.split(/\s+/).filter(Boolean);

  // classify page type
  const type = classify(path);

  // R2.1 — H2 structure
  const h2s = [...stripTags(html).matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) => norm(textOf(m[1])));
  // split the article body into per-H2 chunks (by offset)
  const h2Positions = [...stripTags(html).matchAll(/<h2[^>]*>[\s\S]*?<\/h2>/gi)].map((m) => m.index + m[0].length);
  const bodyEnd = visible.length;
  const chunks = [];
  const clean = stripTags(html);
  const h2Full = [...clean.matchAll(/<h2[^>]*>[\s\S]*?<\/h2>/gi)];
  for (let i = 0; i < h2Full.length; i++) {
    const start = h2Full[i].index + h2Full[i][0].length;
    const end = i + 1 < h2Full.length ? h2Full[i + 1].index : clean.length;
    chunks.push(textOf(clean.slice(start, end)));
  }

  const perH2 = chunks.map((c) => ({
    words: c.split(/\s+/).filter(Boolean).length,
    // first paragraph-ish first 2 sentences
    firstSentences: (() => {
      const sents = c.split(/(?<=[.!?])\s+/).slice(0, 2).join(' ');
      return sents;
    })()
  }));

  const firstTwoAvg = perH2.length
    ? perH2.reduce((a, c) => a + c.firstSentences.split(/\s+/).length, 0) / perH2.length
    : 0;
  const firstTwoWithNum = perH2.filter((c) => NUM_TOKEN.test(c.firstSentences)).length;

  // R2.3 — number density & vague adjectives
  const numCount = (visible.match(NUM_TOKEN) || []).length;
  const numPer100 = words.length ? (numCount / words.length) * 100 : 0;
  const lower = visible.toLowerCase();
  const vagueHits = VAGUE.reduce((a, w) => a + (lower.split(w).length - 1), 0);

  // R2.4 — tables
  const tables = [...html.matchAll(/<table[\s\S]*?<\/table>/gi)].map((m) => m[0]);
  const tableInfo = tables.map((t) => {
    const rows = (t.match(/<tr[\s>]/gi) || []).length;
    const cells = [...t.matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi)].map((c) => textOf(c[1]));
    const numCells = cells.filter((c) => NUM_TOKEN.test(c)).length;
    return { rows, cells: cells.length, numCells };
  });
  const hasCompareTable = /eg-table-compare/.test(html);

  // R2.5 — visible FAQ. Two patterns, union'd:
  //   a) <details class="…faq…"><summary> (exam/path/guide templates)
  //   b) any <summary> that is itself a question (category pages put the
  //      faq class on the wrapper, not the details element)
  const visibleFaqs = [
    ...[...html.matchAll(/<details[^>]*class="[^"]*faq[^"]*"[^>]*>\s*<summary[^>]*>([\s\S]*?)<\/summary>/gi)]
      .map((m) => norm(textOf(m[1]))),
    ...[...html.matchAll(/<summary[^>]*>([\s\S]*?\?)<\/summary>/gi)]
      .map((m) => norm(textOf(m[1]))),
  ].filter((s, i, a) => s && a.indexOf(s) === i);

  // R3 — JSON-LD
  const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)]
    .map((m) => m[1]);
  const ldTypes = [];
  let faqQ = [];
  let faqMismatch = [];
  for (const block of ldBlocks) {
    let obj; try { obj = JSON.parse(block); } catch { continue; }
    // Unwrap @graph — a page may bundle several nodes (e.g. AboutPage +
    // FAQPage) inside one script block. Only the top-level object was being
    // read before, which silently missed every graph-embedded node.
    const nodes = Array.isArray(obj['@graph']) ? obj['@graph'] : [obj];
    for (const node of nodes) {
      const t = node['@type'];
      if (!t) continue;
      ldTypes.push(t);
      if (t === 'FAQPage' && Array.isArray(node.mainEntity)) {
        for (const q of node.mainEntity) {
          faqQ.push(q.name);
          // R3 red line: every Q AND A must exist in the visible text
          if (!visible.includes(norm(q.name))) faqMismatch.push('Q missing: ' + norm(q.name).slice(0, 60));
          const aText = q.acceptedAnswer?.text || '';
          if (aText && !visible.includes(norm(aText))) faqMismatch.push('A missing: ' + norm(aText).slice(0, 60));
        }
      }
    }
  }

  results.push({
    path,
    type,
    words: words.length,
    h2Count: h2s.length,
    h2QuestionShare: h2s.length ? h2s.filter(isQuestion).length / h2s.length : 0,
    h2QuestionCount: h2s.filter(isQuestion).length,
    h2MultiTopic: h2s.filter((h) => /,| and | & /i.test(h)).length,
    perH2AvgWords: perH2.length ? perH2.reduce((a, c) => a + c.words, 0) / perH2.length : 0,
    firstTwoAvg: Math.round(firstTwoAvg),
    firstTwoWithNum,
    numPer100: +numPer100.toFixed(2),
    vagueHits,
    tableCount: tables.length,
    tableRows: tableInfo.reduce((a, t) => a + t.rows, 0),
    tableNumCellShare: (() => {
      const cells = tableInfo.reduce((a, t) => a + t.cells, 0);
      const nums = tableInfo.reduce((a, t) => a + t.numCells, 0);
      return cells ? +(nums / cells).toFixed(2) : 0;
    })(),
    hasCompareTable,
    visibleFaqCount: visibleFaqs.length,
    visibleFaqQuestionShare: visibleFaqs.length ? visibleFaqs.filter(isQuestion).length / visibleFaqs.length : 0,
    ldTypes,
    ldFaqCount: faqQ.length,
    ldFaqMismatch: faqMismatch,
    error: undefined
  });
}

function classify(path) {
  if (path === '/') return 'home';
  if (path.startsWith('/exams/')) return 'exam';
  if (path.startsWith('/paths/')) return 'path';
  if (path.startsWith('/guides/')) return 'guide';
  if (path.startsWith('/categories/')) return 'category';
  if (['/about', '/explore', '/states', '/guides', '/methodology', '/reviewers', '/editorial-policy', '/disclosure', '/privacy'].includes(path)) return 'hub';
  return 'other';
}

fs.writeFileSync('_geo_audit.json', JSON.stringify(results, null, 1));

// ── aggregate by page type ────────────────────────────────────────
const byType = {};
for (const r of results) {
  if (r.error) continue;
  (byType[r.type] = byType[r.type] || []).push(r);
}

console.log('\n===== 按页面类型汇总 =====');
for (const [type, rows] of Object.entries(byType)) {
  const avg = (f) => rows.reduce((a, r) => a + (f(r) || 0), 0) / rows.length;
  console.log(`\n## ${type} (${rows.length} 页)`);
  console.log(`  平均词数            : ${Math.round(avg((r) => r.words))}`);
  console.log(`  平均 H2 数          : +${avg((r) => r.h2Count).toFixed(1)}`);
  console.log(`  H2 问句式占比        : ${(avg((r) => r.h2QuestionShare) * 100).toFixed(0)}%`);
  console.log(`  每H2平均词数         : ${Math.round(avg((r) => r.perH2AvgWords))}`);
  console.log(`  H2首2句平均词数      : ${Math.round(avg((r) => r.firstTwoAvg))}`);
  console.log(`  H2首2句含数字页占比   : ${(rows.filter((r) => r.firstTwoWithNum > 0).length / rows.length * 100).toFixed(0)}%`);
  console.log(`  数字密度(每百词)     : ${avg((r) => r.numPer100).toFixed(1)}`);
  console.log(`  含表格页占比         : ${(rows.filter((r) => r.tableCount > 0).length / rows.length * 100).toFixed(0)}% (平均 ${avg((r) => r.tableCount).toFixed(1)} 张 / ${Math.round(avg((r) => r.tableRows))} 行)`);
  console.log(`  表格数字单元格占比    : ${(avg((r) => r.tableNumCellShare) * 100).toFixed(0)}%`);
  console.log(`  对比表(eg-compare)页占: ${(rows.filter((r) => r.hasCompareTable).length / rows.length * 100).toFixed(0)}%`);
  console.log(`  可见FAQ页占比        : ${(rows.filter((r) => r.visibleFaqCount > 0).length / rows.length * 100).toFixed(0)}% (平均 ${avg((r) => r.visibleFaqCount).toFixed(1)} 问)`);
  console.log(`  FAQ问句率           : ${(avg((r) => r.visibleFaqQuestionShare) * 100).toFixed(0)}%`);
  console.log(`  JSON-LD FAQPage 页占比: ${(rows.filter((r) => r.ldFaqCount > 0).length / rows.length * 100).toFixed(0)}%`);
  console.log(`  JSON-LD/可见不一致页  : ${rows.filter((r) => r.ldFaqMismatch.length > 0).length}`);
  console.log(`  ItemList 页数        : ${rows.filter((r) => r.ldTypes.includes('ItemList')).length}`);
  console.log(`  空洞形容词命中总次数  : ${rows.reduce((a, r) => a + r.vagueHits, 0)}`);
}

// outstanding failures
const noFaq = results.filter((r) => !r.error && (r.type === 'exam' || r.type === 'path' || r.type === 'guide') && r.visibleFaqCount === 0);
const noTable = results.filter((r) => !r.error && r.type === 'exam' && r.tableCount === 0);
const mismatch = results.filter((r) => !r.error && r.ldFaqMismatch.length > 0);
const lowNum = results.filter((r) => !r.error && r.type === 'exam' && r.numPer100 < 2);
const noLdFaq = results.filter((r) => !r.error && (r.type === 'exam' || r.type === 'path') && r.ldFaqCount === 0 && r.visibleFaqCount > 0);

console.log('\n===== 违规清单 =====');
console.log(`无可见FAQ的 exam/path/guide : ${noFaq.length}${noFaq.length ? ' → ' + noFaq.map((r) => r.path).join(', ') : ''}`);
console.log(`无表格的 exam              : ${noTable.length}${noTable.length ? ' → ' + noTable.map((r) => r.path).slice(0, 20).join(', ') : ''}`);
console.log(`JSON-LD与可见文字不一致     : ${mismatch.length}`);
console.log(`数字密度<2/百词的 exam     : ${lowNum.length}`);
console.log(`有可见FAQ但无FAQPage标记   : ${noLdFaq.length}${noLdFaq.length ? ' → ' + noLdFaq.map((r) => r.path).join(', ') : ''}`);
