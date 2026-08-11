import { writeFileSync, readFileSync } from 'node:fs';
import { allExamsFull } from './src/data/examCatalog/index.mjs';
import { readdirSync } from 'node:fs';

const done = new Set(readdirSync('src/data/examCatalog/depth').filter(f => f.endsWith('.mjs') && f !== 'index.mjs').map(f => f.replace(/\.mjs$/, '')));

// VOL: slug -> { v: estimated annual candidate volume, src, note }
const VOL = {
  // ---- AP exams (largest volume family; per-exam annual test-takers) ----
  'ap-united-states-government-and-politics': { v: 330000, src: 'estimate', note: '~330k AP Gov exam takers per year — top-5 AP exam' },
  'ap-biology': { v: 280000, src: 'estimate', note: '~280k AP Biology takers per year' },
  'ap-calculus-ab': { v: 270000, src: 'estimate', note: '~270k AP Calculus AB takers per year' },
  'ap-statistics': { v: 260000, src: 'estimate', note: '~260k AP Statistics takers per year' },
  'ap-human-geography': { v: 270000, src: 'estimate', note: '~270k AP Human Geography takers per year' },
  'ap-environmental-science': { v: 200000, src: 'estimate', note: '~200k AP Environmental Science takers per year' },
  'ap-chemistry': { v: 170000, src: 'estimate', note: '~170k AP Chemistry takers per year' },
  'ap-physics-1-algebra-based': { v: 170000, src: 'estimate', note: '~170k AP Physics 1 takers per year' },
  'ap-macroeconomics': { v: 150000, src: 'estimate', note: '~150k AP Macroeconomics takers per year' },
  'ap-computer-science-principles': { v: 150000, src: 'estimate', note: '~150k AP CSP takers per year' },
  // ---- CLEP (college credit) ----
  'clep-college-composition': { v: 100000, src: 'estimate', note: 'Most-taken CLEP exam' },
  'clep-spanish-language': { v: 30000, src: 'estimate', note: 'High-volume CLEP language exam' },
  'clep-american-government': { v: 25000, src: 'estimate', note: 'Common CLEP requirement' },
  'clep-principles-of-microeconomics': { v: 20000, src: 'estimate', note: 'Common CLEP business-core exam' },
  'clep-humanities': { v: 20000, src: 'estimate', note: 'Common CLEP humanities exam' },
  'clep-natural-sciences': { v: 20000, src: 'estimate', note: 'Common CLEP science exam' },
  // ---- Admissions / assessment ----
  'asvab': { v: 750000, src: 'estimate', note: '~750k ASVAB administrations per year (military enlistment)' },
  'duolingo-english-test': { v: 1000000, src: 'estimate', note: '1M+ DET test-takers per year' },
  'pte-academic': { v: 600000, src: 'estimate', note: '~600k PTE Academic test-takers per year' },
  'mcat-exam': { v: 80000, src: 'estimate', note: '~80k MCAT administrations per year (AAMC)' },
  'law-school-admission-test': { v: 40000, src: 'estimate', note: '~40k LSAT administrations per year (LSAC)' },
  'mpre': { v: 50000, src: 'estimate', note: '~50k MPRE test-takers per year (NCBE)' },
  // ---- Allied health / medical ----
  'usmle-step-1': { v: 25000, src: 'estimate', note: '~25k USMLE Step 1 takers per year (US + IMG)' },
  'pance': { v: 15000, src: 'estimate', note: '~15k PANCE takers per year (PA-C)' },
  'nha-ccma': { v: 50000, src: 'estimate', note: '~50k NHA CCMA medical-assistant candidates per year' },
  'ncct-ncma': { v: 30000, src: 'estimate', note: '~30k NCCT NCMA medical-assistant candidates per year' },
  'bcen-cen': { v: 15000, src: 'estimate', note: '~15k BCEN CEN emergency-nursing candidates per year' },
  'arrt-nuclear-medicine': { v: 3000, src: 'estimate', note: 'ARRT post-primary nuclear-medicine exam' },
  'arrt-radiation-therapy': { v: 2500, src: 'estimate', note: 'ARRT radiation-therapy primary exam' },
  'arrt-vascular-interventional': { v: 3000, src: 'estimate', note: 'ARRT post-primary VI exam' },
  'arrt-cardiac-interventional': { v: 2000, src: 'estimate', note: 'ARRT post-primary CI exam' },
  'arrt-breast-sonography': { v: 1500, src: 'estimate', note: 'ARRT post-primary breast sonography exam' },
  'nha-cpht': { v: 30000, src: 'estimate', note: '~30k NHA pharmacy-tech candidates per year' },
  // ---- Praxis (state licensure; per-exam volume moderate) ----
  'praxis-english-to-speakers-of-other-languages-5362': { v: 10000, src: 'estimate', note: 'ESL licensure — widely required' },
  'praxis-chemistry-5246': { v: 8000, src: 'estimate', note: 'Chemistry teacher licensure' },
  'praxis-physics-5266': { v: 5000, src: 'estimate', note: 'Physics teacher licensure' },
  'praxis-middle-school-english-language-arts-5047': { v: 10000, src: 'estimate', note: 'Middle-school ELA licensure' },
  'praxis-health-education-5551': { v: 8000, src: 'estimate', note: 'Health-education teacher licensure' },
  'praxis-school-psychologist-5403': { v: 3000, src: 'estimate', note: 'School-psychologist licensure' },
  'praxis-geometry-5163': { v: 5000, src: 'estimate', note: 'Geometry add-on licensure' },
  'praxis-algebra-i-5162': { v: 6000, src: 'estimate', note: 'Algebra I add-on licensure' },
  'praxis-plt-grades-5-9-5623': { v: 12000, src: 'estimate', note: 'PLT 5-9 — middle-grades pedagogy licensure' },
  'praxis-educational-leadership-administration-and-supervision-5412': { v: 5000, src: 'estimate', note: 'School-administrator licensure' },
  // ---- FAA / FCC ----
  'faa-part-107-initial-training-alc-451': { v: 50000, src: 'estimate', note: '~50k Part 107 remote-pilot certs per year (FAA)' },
  'faa-part-107-recurrent-training-alc-677': { v: 40000, src: 'estimate', note: 'Part 107 recurrent training' },
  'fcc-amateur-technician-class-license': { v: 25000, src: 'estimate', note: '~25k new technician-class hams per year (FCC)' },
  'fcc-amateur-general-class-license': { v: 12000, src: 'estimate', note: 'General-class upgrade volume' },
  // ---- Bar exams ----
  'uniform-bar-exam': { v: 50000, src: 'estimate', note: '~50k UBE takers per year (NCBE)' },
  'california-bar-exam': { v: 10000, src: 'estimate', note: '~10k California bar takers per year' },
  // ---- Other ----
  'toeic-listening-and-reading': { v: 2000000, src: 'estimate', note: 'Millions of TOEIC L&R tests per year worldwide' }
};

function familyOf(slug) {
  if (/^ap-/.test(slug)) return 'AP';
  if (/^clep-/.test(slug)) return 'CLEP';
  if (/praxis-/.test(slug)) return 'Praxis';
  if (/^arrt-/.test(slug)) return 'ARRT';
  if (/^faa-/.test(slug)) return 'FAA';
  if (/^fcc-/.test(slug)) return 'FCC';
  if (/^usmle-/.test(slug) || /^pance|^mcat|^law-school|^mpre|^asvab/.test(slug)) return 'Admission';
  if (/^duolingo|^pte-|^toeic/.test(slug)) return 'English';
  if (/^nha-|^ncct-|^bcen-/.test(slug)) return 'AlliedHealth';
  if (/bar-exam/.test(slug)) return 'Bar';
  return 'Other';
}

const cand = allExamsFull.filter(e => e.scope === 'national' && !done.has(e.slug) && VOL[e.slug]);
const rows = cand.map(e => {
  const vol = VOL[e.slug];
  const heat = Math.round(40 + 14 * Math.log10(vol.v / 1000));
  return { slug: e.slug, name: e.name || e.title || e.slug, v: vol.v, src: vol.src, note: vol.note, fam: familyOf(e.slug), heat, cat: e.category };
});
rows.sort((a, b) => b.heat - a.heat || b.v - a.v);

const CAP = { AP: 10, CLEP: 6, Praxis: 10, ARRT: 5, FAA: 2, FCC: 2, Admission: 6, English: 3, AlliedHealth: 4, Bar: 2, Other: 2 };
const picked = [];
const famCount = {};
for (const r of rows) {
  if (picked.length >= 50) break;
  const c = famCount[r.fam] || 0;
  if (c >= (CAP[r.fam] || 2)) continue;
  famCount[r.fam] = c + 1;
  picked.push(r);
}

console.log('Candidates with volume:', rows.length);
picked.forEach((r, i) => {
  console.log(String(i + 1).padStart(2) + '. heat=' + r.heat + ' vol~' + r.v.toLocaleString() + ' [' + r.fam + '] ' + r.slug);
  console.log('       ' + r.name + ' — ' + r.note);
});

writeFileSync('./_next50g.json', JSON.stringify(picked.map((r, i) => ({ rank: i + 1, slug: r.slug, name: r.name, heat: r.heat, vol: r.v, src: r.src, family: r.fam, note: r.note })), null, 2));
console.log('\nWrote _next50g.json (' + picked.length + ')');
