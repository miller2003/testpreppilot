import examDepth from './src/data/examCatalog/examDepth.mjs';
function strings(v, acc = []) { if (typeof v === 'string') { if (v.trim()) acc.push(v); return acc; } if (Array.isArray(v)) { for (const x of v) strings(x, acc); return acc; } if (v && typeof v === 'object') { for (const x of Object.values(v)) strings(x, acc); return acc; } return acc; }
function shingles(text, n = 3) { const w = text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean); const s = new Set(); for (let i = 0; i + n <= w.length; i++) s.add(w.slice(i, i + n).join(' ')); return s; }
function jaccard(a, b) { if (!a.size || !b.size) return 0; let inter = 0; for (const x of a) if (b.has(x)) inter++; return inter / (a.size + b.size - inter); }
const fams = {
  AP: ['ap-united-states-government-and-politics', 'ap-biology', 'ap-calculus-ab', 'ap-statistics', 'ap-human-geography', 'ap-environmental-science', 'ap-chemistry', 'ap-physics-1-algebra-based', 'ap-computer-science-principles', 'ap-macroeconomics', 'ap-english-language-and-composition', 'ap-united-states-history', 'ap-psychology', 'ap-world-history-modern'],
  CLEP: ['clep-college-composition', 'clep-spanish-language', 'clep-american-government', 'clep-principles-of-microeconomics', 'clep-humanities', 'clep-natural-sciences', 'clep-introductory-psychology', 'clep-college-algebra', 'clep-biology'],
  Praxis: ['praxis-plt-grades-5-9-5623', 'praxis-middle-school-english-language-arts-5047', 'praxis-english-to-speakers-of-other-languages-5362', 'praxis-health-education-5551', 'praxis-chemistry-5246', 'praxis-algebra-i-5162', 'praxis-geometry-5163', 'praxis-physics-5266', 'praxis-educational-leadership-administration-and-supervision-5412', 'praxis-school-psychologist-5403'],
  English: ['toeic-listening-and-reading', 'duolingo-english-test', 'pte-academic', 'toefl-ibt', 'ielts-academic'],
  ARRT: ['arrt-nuclear-medicine', 'arrt-vascular-interventional', 'arrt-radiation-therapy', 'arrt-cardiac-interventional', 'arrt-breast-sonography', 'arrt-computed-tomography', 'arrt-mammography', 'arrt-radiography', 'arrt-sonography'],
  Bar: ['uniform-bar-exam', 'california-bar-exam', 'mpre'],
  FAA: ['faa-part-107-initial-training-alc-451', 'faa-part-107-recurrent-training-alc-677', 'faa-par-private-pilot-airplane', 'faa-ira-instrument-rating-airplane'],
  FCC: ['fcc-amateur-technician-class-license', 'fcc-amateur-general-class-license'],
  Medical: ['usmle-step-1', 'mcat-exam', 'pance', 'bcen-cen', 'nclex-rn'],
  Allied: ['nha-ccma', 'ncct-ncma', 'nha-cpht', 'aab-phlebotomy', 'ptcb-cpht'],
  Admission: ['asvab', 'law-school-admission-test', 'sat-exam', 'act-test']
};
const cache = {};
for (const s of Object.keys(examDepth)) cache[s] = shingles(strings(examDepth[s]).join(' '));
let worstAll = 0, worstPair = '';
for (const [fam, members] of Object.entries(fams)) {
  let worst = { pair: '', v: 0 };
  for (let i = 0; i < members.length; i++) for (let j = i + 1; j < members.length; j++) {
    const a = cache[members[i]], b = cache[members[j]];
    if (!a || !b) continue;
    const v = jaccard(a, b);
    if (v > worst.v) worst = { pair: members[i] + ' vs ' + members[j], v };
    if (v > worstAll) { worstAll = v; worstPair = members[i] + ' vs ' + members[j]; }
  }
  console.log(fam.padEnd(9) + ' worst ' + worst.v.toFixed(3) + '  ' + worst.pair + (worst.v >= 0.7 ? '  <-- TOO SIMILAR' : ''));
}
console.log('\nOverall worst: ' + worstAll.toFixed(3) + '  ' + worstPair);
