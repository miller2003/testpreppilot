const root = process.argv[2];
const u = (p) => 'file:///' + (root + '/' + p).replace(/\\/g, '/');
const cat = await import(u('src/data/examCatalog/index.mjs'));
const nr = await import(u('src/data/examCatalog/national-research/index.mjs'));
const { releases } = await import(u('src/data/examCatalog/release-manifest.mjs'));
const depth = (await import(u('src/data/examCatalog/depth/index.mjs'))).default;
const full = cat.allExamsFull;
const na = full.filter((e) => e.scope === 'national' && releases[e.slug]);
const all = full.filter((e) => e.scope === 'national');
const GENERIC = [
  /validates job-ready knowledge and skills in the/i,
  /Topic area tested on the exam; see the official blueprint/i,
  /Passing score set by the awarding body/i,
  /Eligibility varies; many credentials are open to all/i,
  /Professionals and candidates seeking to validate/i,
  /Candidates should review the official handbook for eligibility/i,
];
const PROG_GENERIC = [/Varies by credential/i, /is the awarding organization for the credentials listed on this page/i, /Visit the awarding body/i];
const isGen = (r) => GENERIC.filter((re) => re.test(JSON.stringify(r))).length;
const progGen = (p) => p ? PROG_GENERIC.filter((re) => re.test(JSON.stringify(p))).length : 0;
const count = (rows) => {
  const rec = rows.filter((e) => isGen(e.record) >= 2);
  const prog = rows.filter((e) => progGen(nr.programFor(e.record, e.body)) >= 2);
  return { total: rows.length, genericRecord: rec.length, genericProgram: prog.length, either: rows.filter((e) => isGen(e.record) >= 2 || progGen(nr.programFor(e.record, e.body)) >= 2).length };
};
console.log('released', count(na));
console.log('all national', count(all));
const byConf = {}; for (const e of na) { const k = e.record.confidence + (isGen(e.record) >= 2 ? '-generic' : ''); byConf[k] = (byConf[k] || 0) + 1; }
console.log('released by conf/generic', byConf);
const genCat = {}; for (const e of na.filter((e) => isGen(e.record) >= 2)) genCat[e.category] = (genCat[e.category] || 0) + 1;
console.log('released generic by category', genCat);
console.log('released generic sample', na.filter((e) => isGen(e.record) >= 2).slice(0, 25).map((e) => e.slug).join(', '));
// topics heading claims weights but none
console.log('released topics w/o any weight', na.filter((e) => e.record.topics.length && !e.record.topics.some((t) => t.weight)).length);
// depth vs record contradictions: pass mark generic but depth mentions a number
// programs generic count overall
const progs = nr.nationalPrograms; console.log('programs', progs.length, 'generic programs', progs.filter((p) => progGen(p) >= 2).length);
// quickAnswer advantages generic
console.log('generic advantages', na.filter((e) => /Recognized credential from|Demonstrates verified competence in/i.test(JSON.stringify(e.record.quickAnswer))).length);
