const root = process.argv[2];
const u = (p) => 'file:///' + (root + '/' + p).replace(/\\/g, '/');
const cat = await import(u('src/data/examCatalog/index.mjs'));
const { stateTemplates } = await import(u('src/data/examCatalog/stateTemplates.mjs'));
const { dossierByKey, dossiers } = await import(u('src/data/examCatalog/research/index.mjs'));
const { releases } = await import(u('src/data/examCatalog/release-manifest.mjs'));
const depth = (await import(u('src/data/examCatalog/depth/index.mjs'))).default;
const nr = await import(u('src/data/examCatalog/national-research/index.mjs'));
let mometrix = {};
try { const m = await import(u('src/data/mometrix.mjs')); mometrix = m; } catch (e) { console.log('mometrix import fail', e.message); }

const wc = (s) => String(s || '').split(/\s+/).filter(Boolean).length;
const full = cat.allExamsFull;
const today = '2026-10-20';
const isRel = (s) => releases[s] && releases[s] <= today;

// ───────── STATE
const st = full.filter((e) => e.scope === 'state' && e.status === 'stub');
console.log('\n=== STATE ===');
console.log('templates', stateTemplates.length, 'dossiers', dossiers.length);
console.log('templates w/o dossier', stateTemplates.filter((t) => !dossierByKey[t.key]).map((t) => t.key));
console.log('state rows', st.length, 'offered', st.filter((e) => e.offered === true).length, 'notOffered', st.filter((e) => e.offered === false).length, 'unresearched', st.filter((e) => e.offered == null).length);
const rel = st.filter((e) => isRel(e.slug));
console.log('state released', rel.length, 'of which notOffered', rel.filter((e) => e.offered === false).length, 'scheduled future', st.filter((e) => releases[e.slug] && releases[e.slug] > today).length);
console.log('state with depth', st.filter((e) => depth[e.slug]).length);
const relByTpl = {}; for (const e of rel) relByTpl[e.templateKey] = (relByTpl[e.templateKey] || 0) + 1;
console.log('released by template', relByTpl);

let n = 0, fee = 0, note = 0, agUrl = 0, ag = 0, noteLen = [], conf = {}, ver = 0, lowConfNote = 0, agUrlRoot = 0;
const urlHosts = {};
for (const d of dossiers) {
  conf[d.confidence] = (conf[d.confidence] || 0) + 1; if (d.verified) ver++;
  for (const [c, s] of Object.entries(d.states)) {
    n++; if (s.fee) fee++; if (s.note) { note++; noteLen.push(wc(s.note)); }
    if (s.agencyUrl) { agUrl++; try { const p = new URL(s.agencyUrl); if (p.pathname === '/' || p.pathname === '') agUrlRoot++; } catch {} }
    if (s.agency) ag++;
  }
}
noteLen.sort((a, b) => a - b);
console.log({ instances: n, withFee: fee, withNote: note, withAgencyUrl: agUrl, agencyUrlIsHomepage: agUrlRoot, withAgency: ag, noteWordsMedian: noteLen[noteLen.length >> 1], noteWordsP90: noteLen[Math.floor(noteLen.length * 0.9)], noteWordsMax: noteLen[noteLen.length - 1], conf, verified: ver });
const fields = ['overview', 'eligibility', 'exam', 'education', 'prerequisites', 'costBreakdown', 'timeline', 'route', 'providersNote', 'faqs', 'sourceUrl'];
const cov = {}; for (const f of fields) cov[f] = dossiers.filter((d) => { const v = d[f]; return Array.isArray(v) ? v.length : v && (typeof v !== 'object' || Object.keys(v).length); }).length;
console.log('dossier field coverage (of ' + dossiers.length + ')', cov);
const rows = dossiers.map((d) => {
  const proseW = wc(d.overview) + wc(d.eligibility) + wc(d.prerequisites) + wc(d.providersNote) + d.route.reduce((a, r) => a + wc(r.title) + wc(r.description), 0) + d.faqs.reduce((a, f) => a + wc(f.q) + wc(f.a), 0);
  const sv = Object.values(d.states);
  const stateW = sv.length ? Math.round(sv.reduce((a, s) => a + wc(s.note) + wc(s.agency) + wc(s.fee), 0) / sv.length) : 0;
  return { k: d.key, states: sv.length, sharedW: proseW, perStateW: stateW, uniq: (stateW / (proseW + stateW) * 100).toFixed(0) + '%', faqs: d.faqs.length, route: d.route.length, conf: d.confidence, fees: sv.filter((s) => s.fee).length, notes: sv.filter((s) => s.note).length, compact: d.reciprocity?.compact || '' };
});
console.table(rows);

// ───────── NATIONAL
console.log('\n=== NATIONAL ===');
const na = full.filter((e) => e.scope === 'national' && e.status === 'stub');
const naRel = na.filter((e) => isRel(e.slug));
console.log('national rows', na.length, 'researched(publishable)', na.filter((e) => e.researched).length, 'released', naRel.length, 'released&researched', naRel.filter((e) => e.researched).length, 'released placeholder', naRel.filter((e) => !e.researched).length);
console.log('records', nr.nationalStats, 'programs', nr.nationalPrograms.length);
const withDepth = naRel.filter((e) => depth[e.slug]);
console.log('released national with depth', withDepth.length, '/', naRel.length, ' depth files total', Object.keys(depth).length, ' depth slugs not in released', Object.keys(depth).filter((s) => !naRel.find((e) => e.slug === s)).length);
const recF = (r) => ({
  topicsW: r.topics.some((t) => t.weight), topics: r.topics.length > 0, cost: !!r.costBreakdown, timeline: r.timeline.length > 0, salary: !!r.salaryRange,
  related: r.relatedSlugs.length > 0, src: !!r.sourceUrl, faq5: r.faqs.length >= 5, roadmap: r.roadmap.length > 0, eligibility: !!r.eligibility, essentials: r.examEssentials.length >= 4,
});
const agg = {}; const confN = {}; const reviewed = {};
let progMissing = 0, progNoSteps = 0, progNoCompare = 0;
for (const e of naRel.filter((e) => e.researched)) {
  const r = e.record; for (const [k, v] of Object.entries(recF(r))) agg[k] = (agg[k] || 0) + (v ? 1 : 0);
  confN[r.confidence] = (confN[r.confidence] || 0) + 1; reviewed[r.reviewed] = (reviewed[r.reviewed] || 0) + 1;
  const p = nr.programFor(r, e.body); if (!p) progMissing++; else { if (!p.registrationSteps.length) progNoSteps++; if (!p.comparison) progNoCompare++; }
}
console.log('released researched record field coverage', agg);
console.log('confidence', confN, 'reviewed', reviewed, { progMissing, progNoSteps, progNoCompare });
const dAgg = {}; let author = 0, reviewedBy = 0; const lr = {}; const authors = {};
for (const e of withDepth) {
  const d = depth[e.slug];
  for (const k of ['salaryOutlook', 'passRate', 'studyPlan', 'prepStrategies', 'resourceComparison', 'commonMistakes', 'questionTypes', 'examDay']) dAgg[k] = (dAgg[k] || 0) + (d[k] ? 1 : 0);
  dAgg.samples = (dAgg.samples || 0) + ((d.questionTypes?.samples?.length || 0) >= 3 ? 1 : 0);
  if (d.author) { author++; authors[d.author.name] = (authors[d.author.name] || 0) + 1; } if (d.reviewedBy) reviewedBy++; lr[d.lastReviewed] = (lr[d.lastReviewed] || 0) + 1;
}
console.log('depth section coverage among released w/ depth', dAgg, { author, reviewedBy }, 'lastReviewed', lr);
console.log('authors', authors);
const mm = mometrix.mometrixFor ? naRel.filter((e) => mometrix.mometrixFor(e.slug)).length : 'n/a';
console.log('mometrix on released national', mm);
// unreleased researched national
console.log('unreleased researched national', na.filter((e) => e.researched && !isRel(e.slug)).length, 'unreleased w/ depth', na.filter((e) => !isRel(e.slug) && depth[e.slug]).length);
// prose length
const lens = naRel.filter((e) => e.researched).map((e) => { const r = e.record; return wc(r.description) + wc(r.quickAnswer?.summary) + r.faqs.reduce((a, f) => a + wc(f.a), 0) + wc(r.eligibility); }).sort((a, b) => a - b);
console.log('national record prose words p10/p50/p90', lens[Math.floor(lens.length * 0.1)], lens[lens.length >> 1], lens[Math.floor(lens.length * 0.9)]);
