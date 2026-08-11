// Enrich the 50 batch-9 stub records with researched values matching the depth files.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/data/examCatalog/national-research';
const NUM = Array.from({ length: 188 }, (_, i) => i + 1);

const AP = { c: '~$99 (AP exam fee; reductions for eligible students)', s: 'College credit outcomes vary by school (3+ typically qualifies)', p: 'None — open to all students', f: '~$99', v: 'Score used for college credit at each school\'s discretion' };
const CLEP = { c: '~$97 (College Board fee) plus test-center fee', s: 'College credit outcomes vary by school (ACE recommends 50)', p: 'None — open to all', f: '~$97', v: 'Credit acceptance at each college\'s discretion' };

const F = {
  // ---- English tests ----
  'toeic-listening-and-reading': { t: '60-90 hours over 6-10 weeks', c: '~$100-200 (test-center dependent)', s: 'No direct salary outcome (workplace English proficiency; 10-990 score)', p: 'None — open to all', q: '200 questions (100 listening + 100 reading)', e: '~2 hours', f: '~$100-200', v: 'Scores typically accepted for 2 years by employers/schools' },
  'duolingo-english-test': { t: '40-60 hours over 4-8 weeks', c: '~$65 (certification fee)', s: 'No direct salary outcome (admission gate; 10-160 score)', p: 'None — open to all', q: 'Adaptive items + production prompts', e: '~1 hour', f: '~$65', v: 'Scores sent to institutions per program rules' },
  'pte-academic': { t: '60-90 hours over 6-10 weeks', c: '~$200-250 (Pearson, region-dependent)', s: 'No direct salary outcome (admission/migration gate; 10-90 score)', p: 'None — open to all', q: '~20 integrated item types', e: '~2 hours', f: '~$200-250', v: 'Scores typically accepted for 2 years' },
  // ---- Military ----
  'asvab': { t: '40-60 hours over 4-8 weeks', c: 'Free (military-administered)', s: 'Military pay by rank (E-1 ~$1,900/mo basic pay)', p: 'None — enlistment eligibility', q: '9 subtests (CAT) or 10 (paper)', e: '~3-3.5 hours', f: 'Free', v: 'AFQT percentile and line scores used for enlistment/jobs' },
  // ---- Admissions ----
  'mcat-exam': { t: '300-400 hours over 3-4 months', c: '~$355 (AAMC, 2026 standard fee)', s: '$150,000-$300,000+ (29-1210 Physicians)', p: 'Pre-med coursework typically required', q: '230 questions across 4 sections', e: '~7.5 hours', f: '~$355', v: 'Scores typically valid 2-3 years (school-dependent)' },
  'law-school-admission-test': { t: '120-200 hours over 8-12 weeks', c: '~$253 (LSAC, 2025-26 fee)', s: '$151,160 (23-1011 Lawyers)', p: 'None — open to all', q: '~75-78 questions across 3 scored sections', e: '~2h20m', f: '~$253', v: 'Scores valid 5 years (LSAC policy)' },
  'mpre': { t: '20-40 hours over 2-4 weeks', c: '~$145-160 (NCBE fee)', s: '$151,160 (23-1011 Lawyers)', p: 'None — most states require it for bar admission', q: '60 questions', e: '2 hours', f: '~$145-160', v: 'Score valid for 2 years in most states (verify)' },
  // ---- AP ----
  'ap-united-states-government-and-politics': { t: '40-60 hours over 8-12 weeks', c: AP.c, s: AP.s, p: AP.p, q: '55 MC + 4 FRQs', e: '3 hours', f: AP.f, v: AP.v },
  'ap-biology': { t: '60-80 hours over 10-14 weeks', c: AP.c, s: AP.s, p: AP.p, q: '60 MC + 6 FRQs', e: '3 hours', f: AP.f, v: AP.v },
  'ap-calculus-ab': { t: '60-90 hours over 10-16 weeks', c: AP.c, s: AP.s, p: AP.p, q: '45 MC + 6 FRQs', e: '3h15m', f: AP.f, v: AP.v },
  'ap-statistics': { t: '50-70 hours over 10-14 weeks', c: AP.c, s: AP.s, p: AP.p, q: '40 MC + 6 FRQs', e: '3 hours', f: AP.f, v: AP.v },
  'ap-human-geography': { t: '40-60 hours over 8-12 weeks', c: AP.c, s: AP.s, p: AP.p, q: '60 MC + 3 FRQs', e: '2h15m', f: AP.f, v: AP.v },
  'ap-environmental-science': { t: '50-70 hours over 10-14 weeks', c: AP.c, s: AP.s, p: AP.p, q: '80 MC + 3 FRQs', e: '2h40m', f: AP.f, v: AP.v },
  'ap-chemistry': { t: '60-80 hours over 10-14 weeks', c: AP.c, s: AP.s, p: AP.p, q: '60 MC + 7 FRQs', e: '3h15m', f: AP.f, v: AP.v },
  'ap-physics-1-algebra-based': { t: '60-80 hours over 10-14 weeks', c: AP.c, s: AP.s, p: AP.p, q: '40 MC + 4 FRQs (verify current format)', e: '3 hours', f: AP.f, v: AP.v },
  'ap-computer-science-principles': { t: '40-60 hours over 8-12 weeks', c: AP.c, s: AP.s, p: AP.p, q: '70 MC + 2 FRQs (verify current format)', e: '~3 hours', f: AP.f, v: AP.v },
  'ap-macroeconomics': { t: '40-60 hours over 8-12 weeks', c: AP.c, s: AP.s, p: AP.p, q: '60 MC + 3 FRQs', e: '2h10m', f: AP.f, v: AP.v },
  // ---- CLEP ----
  'clep-college-composition': { t: '30-50 hours over 3-5 weeks', c: CLEP.c, s: CLEP.s, p: CLEP.p, q: '~90 min MC + 2 essays', e: '~2.5 hours', f: CLEP.f, v: CLEP.v },
  'clep-spanish-language': { t: '40-60 hours over 4-6 weeks', c: CLEP.c, s: CLEP.s, p: CLEP.p, q: '~121 questions', e: '~90 min', f: CLEP.f, v: CLEP.v },
  'clep-american-government': { t: '30-50 hours over 3-5 weeks', c: CLEP.c, s: CLEP.s, p: CLEP.p, q: '100 questions', e: '90 minutes', f: CLEP.f, v: CLEP.v },
  'clep-principles-of-microeconomics': { t: '30-50 hours over 3-5 weeks', c: CLEP.c, s: CLEP.s, p: CLEP.p, q: '80 questions', e: '90 minutes', f: CLEP.f, v: CLEP.v },
  'clep-humanities': { t: '30-50 hours over 3-5 weeks', c: CLEP.c, s: CLEP.s, p: CLEP.p, q: '140 questions', e: '90 minutes', f: CLEP.f, v: CLEP.v },
  'clep-natural-sciences': { t: '30-50 hours over 3-5 weeks', c: CLEP.c, s: CLEP.s, p: CLEP.p, q: '120 questions', e: '90 minutes', f: CLEP.f, v: CLEP.v },
  // ---- Allied health ----
  'nha-ccma': { t: '40-60 hours over 4-6 weeks', c: '~$155 (NHA exam fee, verify current)', s: '$33,000-$55,000 (31-9092 median $44,200)', p: 'High-school diploma; NHA eligibility', q: '~180 questions (150 scored + 30 pretest)', e: '180 minutes', f: '~$155', v: 'Valid 2 years (renewal with CEUs)' },
  'ncct-ncma': { t: '40-60 hours over 4-6 weeks', c: '~$119 (NCCT exam fee)', s: '$33,000-$55,000 (31-9092 median $44,200)', p: 'NCCT eligibility (training or experience)', q: '~150 questions (125 scored + 25 pretest)', e: '3 hours', f: '~$119', v: 'Annual renewal with 12 CEUs' },
  'nha-cpht': { t: '40-60 hours over 4-6 weeks', c: '~$125 (NHA exam fee, verify current)', s: '$33,000-$56,000 (29-2052 median $43,460)', p: 'High-school diploma; NHA eligibility', q: '~120 questions (100 scored + 20 pretest)', e: '2h10m', f: '~$125', v: 'Valid 2 years (renewal with 20 CEUs)' },
  'bcen-cen': { t: '60-90 hours over 6-10 weeks', c: '~$380 non-member / ~$285 ENA member', s: '$66,000-$110,000 (29-1141 RN median ~$93,600)', p: 'Active RN license and clinical experience recommended', q: '175 questions (150 scored + 25 pretest)', e: '3 hours', f: '~$380', v: 'Valid 4 years (renewal with 100 CEUs)' },
  'pance': { t: '120-180 hours over 10-16 weeks', c: '~$550 (NCCPA exam fee)', s: '$100,000-$160,000 (29-1071 median $133,260)', p: 'Completion of an accredited PA program', q: '300 questions across 5 blocks', e: '~5 hours', f: '~$550', v: 'Passing certifies PA-C; NCCPA recertification cycle applies' },
  'usmle-step-1': { t: '300-500 hours over 3-4 months', c: '~$695 (2026 fee; international +$210)', s: '$150,000-$300,000+ (29-1210 Physicians)', p: 'Medical school enrollment (US or IMG)', q: '~280 questions across 7 blocks', e: '~8 hours', f: '~$695', v: 'PASS/FAIL since 2022; score report valid for residency application windows' },
  // ---- ARRT ----
  'arrt-nuclear-medicine': { t: '100-140 hours over 8-12 weeks', c: '$225 (application fee)', s: '$75,000-$120,000 (29-2033 median $97,020)', p: 'ARRT-eligible program + clinical requirements', q: '~200 questions (verify current)', e: '~4 hours', f: '$225', v: 'Annual $65 renewal + 24 CEUs per biennium' },
  'arrt-vascular-interventional': { t: '80-120 hours over 8-10 weeks', c: '$225 (application fee)', s: '$52,000-$107,000 (29-2034 median $77,660)', p: 'ARRT primary credential + structured education + procedures', q: '~160 questions (verify current)', e: '~3.5 hours', f: '$225', v: 'Annual $65 renewal + 24 CEUs per biennium' },
  'arrt-radiation-therapy': { t: '100-140 hours over 8-12 weeks', c: '$225 (application fee)', s: '$80,000-$120,000 (29-1124 median ~$98,000)', p: 'ARRT-eligible radiation-therapy program', q: '~200 questions (verify current)', e: '~4 hours', f: '$225', v: 'Annual $65 renewal + 24 CEUs per biennium' },
  'arrt-cardiac-interventional': { t: '80-120 hours over 8-10 weeks', c: '$225 (application fee)', s: '$52,000-$107,000 (29-2034 median $77,660)', p: 'ARRT primary credential + structured education + procedures', q: '~160 questions (verify current)', e: '~3.5 hours', f: '$225', v: 'Annual $65 renewal + 24 CEUs per biennium' },
  'arrt-breast-sonography': { t: '80-110 hours over 6-8 weeks', c: '$225 (application fee)', s: '$60,000-$110,000 (29-2032 median $89,340)', p: 'ARRT primary credential + breast-imaging education + procedures', q: '~160 questions (verify current)', e: '~3.5 hours', f: '$225', v: 'Annual $65 renewal + 24 CEUs per biennium' },
  // ---- FAA ----
  'faa-part-107-initial-training-alc-451': { t: '20-40 hours of study', c: '~$175 (knowledge test fee, verify current)', s: 'No dedicated SOC; survey/photo-adjacent roles (photographers $42,520)', p: 'None — open to all; 16+ for the certificate', q: '60 questions', e: '2 hours', f: '~$175', v: 'Part 107 certificate valid 24 months (recurrent training required)' },
  'faa-part-107-recurrent-training-alc-677': { t: '1-2 hours (online recurrent course)', c: 'Free (FAA online course)', s: 'No dedicated SOC; refreshes Part 107 currency', p: 'Current Part 107 remote pilot certificate', q: 'Course completion (no exam)', e: '~15-30 minutes', f: 'Free', v: 'Completion refreshes the 24-month currency' },
  // ---- FCC ----
  'fcc-amateur-technician-class-license': { t: '20-40 hours over 2-4 weeks', c: '~$35 (FCC application fee) + VE session fee', s: 'No direct occupation (amateur radio hobby/public service)', p: 'None — open to all', q: '35 questions (Element 2)', e: '~40 minutes', f: '~$35', v: 'License valid 10 years (renewal)' },
  'fcc-amateur-general-class-license': { t: '30-50 hours over 3-5 weeks', c: '~$35 (FCC application fee) + VE session fee', s: 'No direct occupation (amateur radio hobby/public service)', p: 'Technician-class license required first', q: '35 questions (Element 3)', e: '~40 minutes', f: '~$35', v: 'License valid 10 years (renewal)' },
  // ---- Bar ----
  'uniform-bar-exam': { t: '300-500 hours over 10-16 weeks', c: '~$1,000+ (jurisdiction-dependent)', s: '$151,160 (23-1011 Lawyers)', p: 'JD degree and MPRE (most jurisdictions)', q: 'MBE 200Q + MEE 6 essays + MPT 2 tasks', e: '2 days', f: '~$1,000+', v: 'Score transferable among UBE jurisdictions (typically 3 years)' },
  'california-bar-exam': { t: '300-500 hours over 10-16 weeks', c: '~$878 (exam fee) + admission costs', s: '$151,160 (23-1011 Lawyers)', p: 'JD degree and MPRE', q: 'MBE 200Q + 5 essays + 1 performance test', e: '2 days', f: '~$878', v: 'California-specific bar admission' },
  // ---- Praxis ----
  'praxis-plt-grades-5-9-5623': { t: '40-60 hours over 4-6 weeks', c: '~$156 (ETS fee for constructed-response exams)', s: '$40,000-$85,000 (25-2031 median $64,580)', p: 'Teacher-education program enrollment typical', q: '70 SR + 4 constructed-response', e: '2 hours', f: '~$156', v: 'State-set passing score; score validity varies by state' },
  'praxis-middle-school-english-language-arts-5047': { t: '50-70 hours over 5-7 weeks', c: '~$156 (ETS fee)', s: '$40,000-$85,000 (25-2031 median $64,580)', p: 'Teacher-education program enrollment typical', q: '~110 questions (verify current)', e: '~2 hours (verify current)', f: '~$156', v: 'State-set passing score; validity varies by state' },
  'praxis-english-to-speakers-of-other-languages-5362': { t: '50-70 hours over 5-7 weeks', c: '~$130 (ETS fee)', s: '$40,000-$85,000 (25-2031 median $64,580)', p: 'Teacher-education program enrollment typical', q: '~120 questions (verify current)', e: '~2 hours (verify current)', f: '~$130', v: 'State-set passing score; validity varies by state' },
  'praxis-health-education-5551': { t: '40-60 hours over 4-6 weeks', c: '~$130 (ETS fee)', s: '$40,000-$85,000 (25-2031 median $64,580)', p: 'Teacher-education program enrollment typical', q: '~120 questions (verify current)', e: '~2 hours (verify current)', f: '~$130', v: 'State-set passing score; validity varies by state' },
  'praxis-chemistry-5246': { t: '50-70 hours over 5-7 weeks', c: '~$130 (ETS fee)', s: '$40,000-$85,000 (25-2031 median $64,580)', p: 'Teacher-education program enrollment typical', q: '~125 questions (verify current)', e: '~2.5 hours (verify current)', f: '~$130', v: 'State-set passing score; validity varies by state' },
  'praxis-algebra-i-5162': { t: '40-60 hours over 4-6 weeks', c: '~$130 (ETS fee)', s: '$40,000-$85,000 (25-2031 median $64,580)', p: 'Teacher-education program enrollment typical', q: '~60 questions (verify current)', e: '~3 hours (verify current)', f: '~$130', v: 'State-set passing score; validity varies by state' },
  'praxis-geometry-5163': { t: '40-60 hours over 4-6 weeks', c: '~$130 (ETS fee)', s: '$40,000-$85,000 (25-2031 median $64,580)', p: 'Teacher-education program enrollment typical', q: '~60 questions (verify current)', e: '~3 hours (verify current)', f: '~$130', v: 'State-set passing score; validity varies by state' },
  'praxis-physics-5266': { t: '50-70 hours over 5-7 weeks', c: '~$130 (ETS fee)', s: '$40,000-$85,000 (25-2031 median $64,580)', p: 'Teacher-education program enrollment typical', q: '~125 questions (verify current)', e: '~2.5 hours (verify current)', f: '~$130', v: 'State-set passing score; validity varies by state' },
  'praxis-educational-leadership-administration-and-supervision-5412': { t: '60-80 hours over 6-8 weeks', c: '~$130 (ETS fee)', s: '$60,000-$110,000 (administrator pay above teacher median)', p: 'Administrator-preparation program and experience typical', q: '~120 questions (verify current)', e: '~2h15m (verify current)', f: '~$130', v: 'State-set passing score; validity varies by state' },
  'praxis-school-psychologist-5403': { t: '60-80 hours over 6-8 weeks', c: '~$130 (ETS fee)', s: '$75,000-$115,000 (19-3033 median ~$98,000)', p: 'School-psychologist preparation program typical', q: '~140 questions (verify current)', e: '~3 hours (verify current)', f: '~$130', v: 'State-set passing score; validity varies by state' }
};

const GENERIC = /^Varies by (exam|credential|state|location|program)|^Varies$|TBD|TODO|to be confirmed|see the official (handbook|exam guide)|see the awarding body/i;

const pad = (n) => String(n).padStart(2, '0');
const batch = (n) => import('./src/data/examCatalog/national-research/batch' + pad(n) + '.mjs');

const setPath = (obj, path, value) => {
  const tokens = path.match(/\w+|\[\d+\]/g) || [];
  const parts = tokens.map((t) => (t.startsWith('[') ? +t.slice(1, -1) : t));
  let o = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    if (typeof p === 'number') { if (!Array.isArray(o) || o[p] == null) return false; o = o[p]; }
    else { if (o[p] == null) return false; o = o[p]; }
  }
  const last = parts[parts.length - 1];
  if (typeof last === 'number') { if (!Array.isArray(o) || o[last] == null) return false; o[last] = value; }
  else o[last] = value;
  return true;
};

const slugToFile = new Map();
for (const slug of Object.keys(F)) {
  for (const n of NUM) {
    const m = await batch(n);
    const rec = (m.default?.exams || m.exams || []).find((e) => e && e.slug === slug);
    if (rec) { slugToFile.set(slug, { file: 'batch' + pad(n) + '.mjs', record: rec }); break; }
  }
}

let patched = 0;
const perFile = new Map();
for (const [slug, info] of slugToFile) {
  const r = info.record;
  const d = F[slug];
  if (!d) continue;
  const apply = (path, value) => { if (setPath(r, path, value)) patched++; };
  if (!r.time || GENERIC.test(String(r.time).trim())) apply('time', d.t);
  if (!r.cost || GENERIC.test(String(r.cost).trim())) apply('cost', d.c);
  if (!r.salaryRange || String(r.salaryRange).trim() === '') apply('salaryRange', d.s);
  if (typeof r.prerequisites === 'string' && GENERIC.test(r.prerequisites.trim())) apply('prerequisites', d.p);
  if (r.examMeta) {
    if (typeof r.examMeta.questions === 'string' && GENERIC.test(r.examMeta.questions.trim())) apply('examMeta.questions', d.q);
    if (typeof r.examMeta.time === 'string' && GENERIC.test(r.examMeta.time.trim())) apply('examMeta.time', d.e);
    if (typeof r.examMeta.fee === 'string' && GENERIC.test(r.examMeta.fee.trim())) apply('examMeta.fee', d.f);
  }
  if (Array.isArray(r.examEssentials) && Array.isArray(r.examEssentials[3]) && typeof r.examEssentials[3][1] === 'string' && GENERIC.test(r.examEssentials[3][1].trim())) apply('examEssentials[3][1]', d.v);
  if (!perFile.has(info.file)) perFile.set(info.file, []);
  perFile.get(info.file).push(slug);
}

for (const [file, slugs] of perFile) {
  const m = await batch(parseInt(file.match(/\d+/)[0]));
  const programs = m.default?.programs || m.programs || [];
  const exams = m.default?.exams || m.exams || [];
  const out = '// Research-backed exam records for batch file ' + file + '.\n' +
    'export const programs = ' + JSON.stringify(programs, null, 2) + ';\n\n' +
    'export const exams = ' + JSON.stringify(exams, null, 2) + ';\n\n' +
    'export default { programs, exams };\n';
  writeFileSync(join(DIR, file), out);
  console.log('rewrote ' + file + ' (' + slugs.length + ' slugs)');
}

console.log('TOTAL patched fields: ' + patched + ' | files touched: ' + perFile.size);
