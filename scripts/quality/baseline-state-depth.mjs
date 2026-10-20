const root = process.argv[2];
const u = (p) => 'file:///' + (root + '/' + p).replace(/\\/g, '/');
const cat = await import(u('src/data/examCatalog/index.mjs'));
const depth = (await import(u('src/data/examCatalog/depth/index.mjs'))).default;
const { dossierByKey } = await import(u('src/data/examCatalog/research/index.mjs'));
const { releases } = await import(u('src/data/examCatalog/release-manifest.mjs'));
const wc = (s) => String(s || '').split(/\s+/).filter(Boolean).length;
const full = cat.allExamsFull;
const bySlug = new Map(full.map((e) => [e.slug, e]));
const stateDepth = Object.keys(depth).filter((s) => !releases[s]);
const match = stateDepth.filter((s) => bySlug.get(s)?.scope === 'state');
console.log('unreleased depth', stateDepth.length, 'matching state catalog rows', match.length);
console.log('non-matching', stateDepth.filter((s) => !bySlug.get(s)).slice(0, 20));
// templates covered by state depth
const tplCov = {}; for (const s of match) { const k = bySlug.get(s).templateKey; tplCov[k] = (tplCov[k] || 0) + 1; }
console.log('state depth by template', tplCov);
// Do state depth pages differentiate? compare CA vs TX salary headline for same template
const pick = (t) => match.filter((s) => bySlug.get(s).templateKey === t).slice(0, 3);
for (const s of pick('cosmetologist')) console.log(s, '|', depth[s].salaryOutlook?.headline?.slice(0, 160), '| passRate:', depth[s].passRate?.headline?.slice(0, 120));
// sample notes for a template across states
const d = dossierByKey['journeyman-electrician'];
console.log('\njourneyman-electrician notes sample');
for (const c of ['AL', 'CA', 'TX', 'NY', 'WY']) console.log(c, JSON.stringify(d.states[c]));
console.log('exam block:', JSON.stringify(d.exam), '\ncost:', JSON.stringify(d.costBreakdown));
const d2 = dossierByKey['cosmetologist'];
console.log('\ncosmetologist'); for (const c of ['CA', 'TX', 'OH']) console.log(c, JSON.stringify(d2.states[c]));
console.log('exam block:', JSON.stringify(d2.exam), 'edu', JSON.stringify(d2.education));
// not-offered sample
console.log('\nnot offered sample', full.filter((e) => e.offered === false).slice(0, 8).map((e) => e.slug));
// national: a sample of medium/low confidence released, and records missing weights/cost
const na = full.filter((e) => e.scope === 'national' && releases[e.slug]);
const low = na.filter((e) => e.record.confidence === 'low').slice(0, 10).map((e) => e.slug);
console.log('\nlow-confidence released national sample', low);
// depth word counts per section
const secW = {}; let k = 0;
for (const e of na) { const dd = depth[e.slug]; if (!dd) continue; k++;
  for (const sec of ['salaryOutlook', 'passRate', 'studyPlan', 'prepStrategies', 'commonMistakes', 'questionTypes', 'examDay']) secW[sec] = (secW[sec] || 0) + wc(JSON.stringify(dd[sec] || ''));
}
for (const s in secW) secW[s] = Math.round(secW[s] / k);
console.log('avg words per depth section', secW);
// passRate caveat presence (no published rate)
console.log('passRate with caveat (no official rate)', na.filter((e) => depth[e.slug]?.passRate?.caveat).length, '/', na.length);
console.log('salary with source url', na.filter((e) => depth[e.slug]?.salaryOutlook?.source?.url).length);
console.log('salaryOutlook headline sample', na.slice(0, 5).map((e) => depth[e.slug]?.salaryOutlook?.headline?.slice(0, 120)));
// reviewedBy shape
console.log('reviewedBy sample', na.slice(0, 3).map((e) => String(depth[e.slug]?.reviewedBy).slice(0, 140)));
// mometrix-less & program comparison-less
// duplicate-ish: how many distinct summaries of examDay.bring across pages
const bring = new Map(); for (const e of na) { const b = JSON.stringify(depth[e.slug]?.examDay?.bring || []); bring.set(b, (bring.get(b) || 0) + 1); }
console.log('distinct examDay.bring lists', bring.size, 'max reuse', Math.max(...bring.values()));
const ph = full.filter((e) => e.scope === 'national' && !releases[e.slug]);
const phW = ph.map((e) => wc(e.record?.description) + (e.record?.faqs || []).reduce((a, f) => a + wc(f.a), 0)).sort((a, b) => a - b);
console.log('unreleased national record words p50', phW[phW.length >> 1], 'count', ph.length);
