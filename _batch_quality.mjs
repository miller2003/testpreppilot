// Per-batch content-quality audit for testpreppilot national exam corpus.
// Attributes every AI research record to its source batchNN.mjs, computes
// comparable quality metrics, and benchmarks against the 8 hand-written
// "gold standard" pages in src/data/credentials.ts.

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const NATIONAL_RESEARCH = path.join(__dirname, 'src/data/examCatalog/national-research');
const CATALOG = path.join(__dirname, 'src/data/examCatalog/index.mjs');
const CRED_TS = path.join(__dirname, 'src/data/credentials.ts');

const words = (s) => (s ? String(s).replace(/\s+/g, ' ').trim().split(/\s+/).filter(Boolean).length : 0);

// ── load catalog for slug -> category mapping ───────────────────────────
const cat = await import(pathToFileURL(CATALOG).href);
const slugCat = {};
const slugName = {};
for (const e of cat.allExams) {
  if (e.scope === 'national') { slugCat[e.slug] = e.category; slugName[e.slug] = e.name; }
}
const CAT_LABEL = {};
const cs = cat.catalogStats;
if (cs && typeof cs === 'object' && Array.isArray(cs.categories)) {
  for (const g of cs.categories) CAT_LABEL[g.id] = g.label;
}

// ── load the 8 gold-standard hand-written pages ─────────────────────────
async function loadGoldStandard() {
  let txt = fs.readFileSync(CRED_TS, 'utf8');
  // strip the TS import + the typed helper functions at the end
  txt = txt.replace(/import\s*\{[^}]*\}\s*from\s*['"][^'"]+['"];?/g, '');
  txt = txt.replace(/export\s+const\s+credentials\s*:\s*[A-Za-z0-9_\[\]]*\s*=/, 'export const credentials =');
  const cut = txt.indexOf('export function getCredentialBySlug');
  if (cut > -1) txt = txt.slice(0, cut);
  const tmp = path.join(__dirname, '_creds_tmp.mjs');
  fs.writeFileSync(tmp, txt);
  const mod = await import(pathToFileURL(tmp).href);
  fs.unlinkSync(tmp);
  return mod.credentials || [];
}

// metrics that work for BOTH record shapes
function metrics(rec, shape) {
  if (shape === 'cred') {
    const faqs = rec.faq || rec.faqs || [];
    const steps = rec.registrationSteps || [];
    let stepWords = 0, stepCount = steps.length;
    for (const s of steps) {
      stepWords += words(s.description) + (s.subSteps || []).reduce((a, x) => a + words(x), 0);
    }
    const tl = rec.timeline || [];
    const cb = rec.costBreakdown;
    // topics not modelled on creds; derive from comparison? skip
    return {
      sumWords: words(rec.quickAnswer?.summary),
      descWords: words(rec.description),
      faqCount: faqs.length,
      faqWords: faqs.reduce((a, f) => a + words(f.answer || f.a), 0),
      roadmapCount: (rec.roadmap || []).length,
      roadmapWords: (rec.roadmap || []).reduce((a, x) => a + words(x), 0),
      topicsCount: 0,
      stepCount,
      stepWords,
      hasCost: !!cb,
      hasTimeline: tl.length > 0,
      hasEssentials: false,
      hasComparison: !!rec.comparison,
      summaryPoints: (rec.summaryPoints || []).length
    };
  }
  // normalized research record
  const faqs = rec.faqs || [];
  return {
    sumWords: words(rec.quickAnswer?.summary),
    descWords: words(rec.description),
    faqCount: faqs.length,
    faqWords: faqs.reduce((a, f) => a + words(f.a), 0),
    roadmapCount: (rec.roadmap || []).length,
    roadmapWords: (rec.roadmap || []).reduce((a, x) => a + words(x), 0),
    topicsCount: (rec.topics || []).length,
    stepCount: 0,          // research records have NO registrationSteps
    stepWords: 0,
    hasCost: !!rec.costBreakdown,
    hasTimeline: (rec.timeline || []).length > 0,
    hasEssentials: (rec.examEssentials || []).length > 0,
    hasComparison: false,  // research exams carry no per-exam comparison
    summaryPoints: (rec.summaryPoints || []).length
  };
}

function totalBody(m) {
  return m.sumWords + m.descWords + m.faqWords + m.roadmapWords + m.stepWords + m.topicsCount * 6 + m.summaryPoints * 12;
}

// ── gold standard ───────────────────────────────────────────────────────
const golds = await loadGoldStandard();
const goldMetrics = golds.map((c) => metrics(c, 'cred'));
const goldAgg = (() => {
  const n = goldMetrics.length;
  const avg = (f) => Math.round(goldMetrics.reduce((a, m) => a + f(m), 0) / n);
  return {
    count: n,
    slugs: golds.map((c) => c.slug),
    avgSumWords: avg((m) => m.sumWords),
    avgDescWords: avg((m) => m.descWords),
    avgFaqCount: avg((m) => m.faqCount),
    avgFaqWords: avg((m) => m.faqWords),
    avgStepCount: avg((m) => m.stepCount),
    avgStepWords: avg((m) => m.stepWords),
    avgRoadmapCount: avg((m) => m.roadmapCount),
    pctCost: Math.round((goldMetrics.filter((m) => m.hasCost).length / n) * 100),
    pctTimeline: Math.round((goldMetrics.filter((m) => m.hasTimeline).length / n) * 100),
    pctComparison: Math.round((goldMetrics.filter((m) => m.hasComparison).length / n) * 100),
    avgTotalBody: avg((m) => totalBody(m))
  };
})();

// ── per-batch aggregation ───────────────────────────────────────────────
const batchDir = NATIONAL_RESEARCH;
const batchFiles = [];
for (let i = 1; i <= 188; i++) batchFiles.push(String(i).padStart(2, '0'));

const batches = [];
const openingCount = {}; // first 6 words of description -> count
const allRecMetrics = [];

for (const bf of batchFiles) {
  const f = path.join(batchDir, `batch${bf}.mjs`);
  if (!fs.existsSync(f)) continue;
  const mod = await import(pathToFileURL(f).href);
  const exams = mod.exams || [];
  const recs = [];
  for (const e of exams) {
    if (!e || !e.slug) continue;
    const m = metrics(e, 'raw');
    const category = slugCat[e.slug] || 'unknown';
    const first6 = String(e.description || '').toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean).slice(0, 6).join(' ');
    if (first6) openingCount[first6] = (openingCount[first6] || 0) + 1;
    const full = { slug: e.slug, batch: bf, category, ...m, totalBody: totalBody(m), descOpening: first6 };
    recs.push(full);
    allRecMetrics.push(full);
  }
  const n = recs.length;
  if (!n) { batches.push({ batch: bf, records: 0 }); continue; }
  const avg = (f2) => +(recs.reduce((a, r) => a + f2(r), 0) / n).toFixed(1);
  const med = (f2) => {
    const arr = recs.map(f2).sort((a, b) => a - b);
    return arr[Math.floor(arr.length / 2)];
  };
  const pct = (f2) => Math.round((recs.filter(f2).length / n) * 100);
  // "low depth" = genuinely thin regardless of the universal step-detail gap:
  // small summary, short description, and weak FAQ support together.
  const lowDepth = recs.filter((r) => r.sumWords < 28 || r.descWords < 45 || (r.faqCount < 4 || r.faqWords < 180)).length;
  // templating: how many records reuse a top-25 repeated description opening
  const templated = recs.filter((r) => {
    const first6 = String(r.descOpening || '').toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean).slice(0, 6).join(' ');
    return first6 && openingCount[first6] >= 3;
  }).length;
  // category breakdown
  const cats = {};
  for (const r of recs) cats[r.category] = (cats[r.category] || 0) + 1;
  const topCats = Object.entries(cats).sort((a, b) => b[1] - a[1]).map(([c, k]) => ({ cat: c, label: CAT_LABEL[c] || c, k }));
  batches.push({
    batch: bf,
    records: n,
    avgSumWords: avg((r) => r.sumWords),
    medSumWords: med((r) => r.sumWords),
    avgDescWords: avg((r) => r.descWords),
    avgFaqCount: avg((r) => r.faqCount),
    avgFaqWords: avg((r) => r.faqWords),
    avgRoadmapCount: avg((r) => r.roadmapCount),
    pctTopics: pct((r) => r.topicsCount > 0),
    pctCost: pct((r) => r.hasCost),
    pctTimeline: pct((r) => r.hasTimeline),
    pctEssentials: pct((r) => r.hasEssentials),
    pctComparison: pct((r) => r.hasComparison),
    pctStepDetail: 0, // research records structurally lack this
    avgTotalBody: avg((r) => r.totalBody),
    lowDepthCount: lowDepth,
    lowDepthPct: Math.round((lowDepth / n) * 100),
    templatedCount: templated,
    templatedPct: Math.round((templated / n) * 100),
    examples: recs.slice(0, 4).map((r) => r.slug),
    topCats
  });
}

// low-depth records drill-down (for action list), sorted by totalBody asc
const weakRecords = allRecMetrics
  .filter((r) => r.sumWords < 28 || r.descWords < 45 || (r.faqCount < 4 || r.faqWords < 180))
  .sort((a, b) => a.totalBody - b.totalBody)
  .slice(0, 500)
  .map((r) => ({ slug: r.slug, batch: r.batch, category: r.category, sum: r.sumWords, desc: r.descWords, faqs: r.faqCount, faqW: r.faqWords, total: r.totalBody }));

// boilerplate: top repeated openings
const topOpenings = Object.entries(openingCount)
  .filter(([k, v]) => v >= 3)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 25)
  .map(([k, v]) => ({ opening: k, count: v }));

// overall aggregates over all research records
const allN = allRecMetrics.length;
const allAvg = (f2) => +(allRecMetrics.reduce((a, r) => a + f2(r), 0) / allN).toFixed(1);
const allPct = (f2) => Math.round((allRecMetrics.filter(f2).length / allN) * 100);

const overall = {
  records: allN,
  avgSumWords: allAvg((r) => r.sumWords),
  avgDescWords: allAvg((r) => r.descWords),
  avgFaqCount: allAvg((r) => r.faqCount),
  avgFaqWords: allAvg((r) => r.faqWords),
  avgRoadmapCount: allAvg((r) => r.roadmapCount),
  pctTopics: allPct((r) => r.topicsCount > 0),
  pctCost: allPct((r) => r.hasCost),
  pctTimeline: allPct((r) => r.hasTimeline),
  pctEssentials: allPct((r) => r.hasEssentials),
  pctComparison: allPct((r) => r.hasComparison),
  pctStepDetail: 0,
  avgTotalBody: allAvg((r) => r.totalBody),
  lowDepthCount: allRecMetrics.filter((r) => r.sumWords < 28 || r.descWords < 45 || (r.faqCount < 4 || r.faqWords < 180)).length
};

const out = {
  generatedAt: new Date().toISOString(),
  goldStandard: goldAgg,
  overall,
  batches,
  weakRecords,
  topOpenings,
  batchCount: batches.length
};

// ── category rollup (more actionable than 188 batches) ──────────────────
const catMap = {};
for (const r of allRecMetrics) {
  const c = r.category;
  if (!catMap[c]) catMap[c] = { cat: c, label: CAT_LABEL[c] || c, records: 0, bodySum: 0, sumSum: 0, descSum: 0, faqWSum: 0, lowDepth: 0, templated: 0, batches: new Set() };
  const o = catMap[c];
  o.records++; o.bodySum += r.totalBody; o.sumSum += r.sumWords; o.descSum += r.descWords; o.faqWSum += r.faqWords;
  if (r.sumWords < 28 || r.descWords < 45 || (r.faqCount < 4 || r.faqWords < 180)) o.lowDepth++;
  if (r.descOpening && openingCount[r.descOpening] >= 3) o.templated++;
  o.batches.add(r.batch);
}
const categoryRollup = Object.values(catMap).map((o) => ({
  cat: o.cat,
  label: o.label,
  records: o.records,
  avgTotalBody: +(o.bodySum / o.records).toFixed(1),
  avgSumWords: +(o.sumSum / o.records).toFixed(1),
  avgDescWords: +(o.descSum / o.records).toFixed(1),
  avgFaqWords: +(o.faqWSum / o.records).toFixed(1),
  lowDepthPct: Math.round((o.lowDepth / o.records) * 100),
  templatedPct: Math.round((o.templated / o.records) * 100),
  batches: o.batches.size
})).sort((a, b) => a.avgTotalBody - b.avgTotalBody);
out.categoryRollup = categoryRollup;

// bottom batches + most-templated batches for quick reference
out.weakestBatches = [...batches].filter((b) => b.records > 0).sort((a, b) => a.avgTotalBody - b.avgTotalBody).slice(0, 20).map((b) => ({ batch: b.batch, records: b.records, avgTotalBody: b.avgTotalBody, avgSumWords: b.avgSumWords, cats: b.topCats.map((c) => c.cat).join('/') }));
out.mostTemplatedBatches = [...batches].filter((b) => b.records > 0).sort((a, b) => b.templatedPct - a.templatedPct).slice(0, 15).map((b) => ({ batch: b.batch, records: b.records, templatedPct: b.templatedPct, cats: b.topCats.map((c) => c.cat).join('/') }));
fs.writeFileSync(path.join(__dirname, '_batch_quality.json'), JSON.stringify(out, null, 2));
console.log('gold standard:', JSON.stringify(goldAgg));
console.log('overall:', JSON.stringify(overall));
console.log('batches analysed:', batches.length, '| low-depth records:', weakRecords.length);
console.log('top repeated openings (templating risk):');
for (const o of topOpenings.slice(0, 12)) console.log('  x' + o.count + ': "' + o.opening + '"');

const withRecs = batches.filter((b) => b.records > 0);
const byAvgBody = [...withRecs].sort((a, b) => a.avgTotalBody - b.avgTotalBody);
console.log('\n=== BOTTOM 15 batches by avgTotalBody (weakest) ===');
for (const b of byAvgBody.slice(0, 15)) console.log('  batch ' + b.batch + ': n=' + b.records + ' avgBody=' + b.avgTotalBody + ' sum=' + b.avgSumWords + ' desc=' + b.avgDescWords + ' faqW=' + b.avgFaqWords + ' lowDepth%=' + b.lowDepthPct + ' templated%=' + b.templatedPct + ' cats=' + b.topCats.map((c) => c.cat).join('/'));
console.log('\n=== TOP 12 most-templated batches ===');
for (const b of [...withRecs].sort((a, b) => b.templatedPct - a.templatedPct).slice(0, 12)) console.log('  batch ' + b.batch + ': n=' + b.records + ' templated%=' + b.templatedPct + ' cats=' + b.topCats.map((c) => c.cat).join('/'));
console.log('\n=== avgTotalBody spread ===');
const bodies = withRecs.map((b) => b.avgTotalBody);
console.log('  min', Math.min(...bodies), 'max', Math.max(...bodies), 'median', bodies.sort((a, b) => a - b)[Math.floor(bodies.length / 2)]);

