// Enrich the 23 stub records behind the next-30 pages with real quick facts.
// For each slug: resolve the FIRST batch (b01..b188 order) that owns the exam
// record, patch the generic "Varies by exam/credential" fields with researched
// values, and rewrite the touched batch files as JSON + export default.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/data/examCatalog/national-research';
const NUM = Array.from({ length: 188 }, (_, i) => i + 1);

// ---- researched facts per slug (same values as the depth files) ----
const F = {
  'ace-certified-personal-trainer': {
    prerequisites: 'Be at least 18 years old, hold a high school diploma or equivalent, and hold a current CPR/AED certification with a live skills component.',
    q: '150 (125 scored + 25 unscored pretest items)',
    time: '3 hours (180 minutes)',
    fee: '$499 for the exam alone (study-package pricing varies)',
    validity: '2 years — renew with 20 continuing education credits (CECs) for $129 per credential; no recertification exam.',
    faq: 'ACE CPT credentials are valid for 2 years and are renewed by earning 20 continuing education credits (CECs) and paying a $129 renewal fee per credential; there is no recertification exam, so the renewal is driven by CEUs rather than a second sit.'
  },
  'ase-t7-truck-hvac': {
    prerequisites: 'ASE certification requires passing the T7 exam; to earn the certification you must also complete the required work experience (typically 1 year) or an approved training program.',
    q: '50 (40 scored + 10 research items)',
    time: '60 minutes',
    fee: '~$34 registration fee + ~$62 per test (2026 pricing)',
    validity: '5 years — recertify by passing the current recertification exam for each credential held.',
    faq: 'ASE certifications must be recertified every 5 years by passing the current recertification exam for each credential you hold; ASE does not use continuing-education units in place of the recertification exam, so the renewal is a retest rather than a CEU cycle.'
  },
  'cdl-air-brakes-knowledge-test': {
    prerequisites: 'A valid Commercial Learner\'s Permit (CLP) issued by your state, and eligibility for a Class A or Class B CDL.',
    q: '~25 (state-set; AAMVA model manual recommends 25)',
    time: '~30 minutes (state-set)',
    fee: 'State-set, commonly $10-$100 for the knowledge test',
    validity: 'Knowledge-test results are typically valid 6-12 months while your CLP is active; the CDL itself renews every 4-8 years per state.',
    faq: 'CDL knowledge-test results are typically valid only while your commercial learner\'s permit is active — commonly 6-12 months depending on the state — after which you must retake the test. The CDL itself renews on your state\'s licence cycle (commonly every 4-8 years).'
  },
  'cdl-combination-vehicles-knowledge-test': {
    prerequisites: 'A valid Commercial Learner\'s Permit (CLP) for the appropriate class; the combination endorsement is required for Class A licensing.',
    q: '~20 (state-set)',
    time: '~30 minutes (state-set)',
    fee: 'State-set, commonly $10-$100 for the knowledge test',
    validity: 'Knowledge-test results are typically valid 6-12 months while your CLP is active; the CDL itself renews every 4-8 years per state.',
    faq: 'CDL knowledge-test results are typically valid only while your commercial learner\'s permit is active — commonly 6-12 months depending on the state — after which you must retake the test. The CDL itself renews on your state\'s licence cycle (commonly every 4-8 years).'
  },
  'cdl-general-knowledge-test': {
    prerequisites: 'Be at least 18 (21 for interstate driving), hold a valid driver\'s licence, pass a DOT physical, and obtain a CLP before the skills test.',
    q: '~50 (state-set)',
    time: '~45-60 minutes (state-set)',
    fee: 'State-set, commonly $10-$100 for the knowledge test',
    validity: 'Knowledge-test results are typically valid 6-12 months while your CLP is active; the CDL itself renews every 4-8 years per state.',
    faq: 'CDL knowledge-test results are typically valid only while your commercial learner\'s permit is active — commonly 6-12 months depending on the state — after which you must retake the test. The CDL itself renews on your state\'s licence cycle (commonly every 4-8 years).'
  },
  'cfa-level-1': {
    prerequisites: 'Enrol in the CFA Program, meet the education requirement (a bachelor\'s degree or equivalent, or 4,000 hours of professional work experience), and hold a valid passport.',
    q: '180 (90 per session, two sessions)',
    time: '4.5 hours total (two sessions of 2.25 hours)',
    fee: '~$990 early registration / ~$1,290 standard (varies by exam window)',
    validity: 'CFA exam results are valid for up to 7 years to complete the remaining levels; the CFA charter itself does not expire.',
    faq: 'CFA exam results do not expire once earned, but you must complete the remaining levels within 7 years of your first exam to earn the charter — a rolling limit, not a per-exam one. The CFA charter itself does not expire and has no renewal fee.'
  },
  'fe-civil': {
    prerequisites: 'An ABET-accredited engineering degree or equivalent as accepted by your state\'s engineering licensure board; requirements vary by state.',
    q: '110',
    time: '6 hours (two sessions of 3 hours)',
    fee: '~$175 (set by NCEES; state surcharges may apply)',
    validity: 'FE exam results do not expire for PE-licensure eligibility in most states; the FE itself is not a renewable credential.',
    faq: 'FE exam results are valid indefinitely for PE-licensure eligibility in most states — the FE is a one-time gateway credential, not a renewable certification. Confirm your state\'s rules, but the common answer is that a passing FE never expires for the purpose of later sitting the PE.'
  },
  'itil-4-foundation': {
    prerequisites: 'None — ITIL 4 Foundation has no prerequisites.',
    q: '40 (all scored)',
    time: '60 minutes',
  },
  'nasm-certified-personal-trainer': {
    prerequisites: 'Be at least 18 years old, hold a high school diploma or equivalent, and hold a current CPR/AED certification.',
    q: '120 (100 scored + 20 unscored pretest items)',
    time: '2 hours (120 minutes)',
    fee: '$499 for the exam alone; up to ~$1,099 with study packages',
    validity: '2 years — renew with 2.0 CEUs (20 hours of continuing education).',
    faq: 'NASM CPT credentials are valid for 2 years and are renewed by earning 2.0 CEUs (continuing education units, typically 20 hours of approved study) and paying the renewal fee; there is no recertification exam.'
  },
  'nclex-rn': {
    prerequisites: 'Graduation from an approved (accredited) nursing education program and an Authorization to Test (ATT) from your state board of nursing.',
    q: '75-145 (computer-adaptive, variable per candidate)',
    time: 'Up to 5 hours (variable by candidate)',
    fee: '~$200 (NCSBN) plus state board and processing fees',
    validity: 'The RN licence renews per your state board of nursing (commonly every 2 years); the NCLEX result itself has no expiry once passed.',
    faq: 'The NCLEX-RN result itself never expires once you pass, but the RN licence you earn from it must be renewed on your state board of nursing\'s cycle (commonly every 2 years, with continuing-education or practice requirements).'
  },
  'nic-cosmetology-practical': {
    prerequisites: 'Completion of your state\'s required cosmetology training hours and eligibility approval from your state board of cosmetology.',
    q: 'Hands-on skills stations (state-dependent)',
    time: 'State-dependent (typically 2-3 hours)',
    fee: 'State-set (typically $50-$150; practical fees vary)',
    validity: 'Licence renewal is set by your state board (commonly every 1-2 years); the exam result itself does not expire once you are licensed.',
    faq: 'Once you pass and obtain your cosmetology licence, the licence renews on your state board\'s cycle (commonly every 1-2 years, with continuing-education hours); the NIC exam result itself does not expire for the purpose of initial licensure.'
  },
  'nic-cosmetology-theory': {
    prerequisites: 'Completion of your state\'s required cosmetology training hours and eligibility approval from your state board of cosmetology.',
    q: '110 (100 scored + 10 pretest items)',
    time: '90 minutes',
    fee: 'State-set (typically $50-$150)',
    validity: 'Licence renewal is set by your state board (commonly every 1-2 years); the exam result itself does not expire once you are licensed.',
    faq: 'Once you pass and obtain your cosmetology licence, the licence renews on your state board\'s cycle (commonly every 1-2 years, with continuing-education hours); the NIC exam result itself does not expire for the purpose of initial licensure.'
  },
  'nnaap-cna': {
    prerequisites: 'Completion of a state-approved nurse aide training program (typically 75-120 hours) and eligibility through your state\'s nurse aide registry.',
    q: 'Written knowledge plus clinical skills evaluation (state-dependent)',
    time: 'State-dependent (typically 2-4 hours including the skills portion)',
    fee: 'State-set (commonly $60-$120)',
    validity: 'Nurse aide registry renewal varies by state (commonly every 2 years).',
    faq: 'Nurse aide (CNA) certification is registered on your state\'s nurse aide registry and typically renewed every 2 years, with a renewal fee and work or continuing-education requirements set by your state.'
  },
  'nremt-emt': {
    prerequisites: 'Completion of a state-approved EMT course, a current CPR credential, and successful completion of the state psychomotor exam.',
    q: '70-120 (computer-adaptive, variable per candidate)',
    time: 'Up to 2 hours (variable by candidate)',
    fee: '~$104 initial cognitive exam (state fees may apply)',
    validity: 'NREMT certification renews every 2 years (by continuing education or recertification exam).',
    faq: 'NREMT certification is valid for 2 years and is renewed by completing the National Continued Competency Program (continuing education) or by passing the cognitive recertification exam; state licensing runs alongside the NREMT cycle.'
  },
  'pmi-pmp': {
    prerequisites: '36 months of professional project-management experience (or a CAPM credential), 35 contact hours of project-management education, and acceptance of your PMP application.',
    q: '180 (all scored)',
    time: '230 minutes (3 hours 50 minutes)',
  },
  'praxis-core-combined-5752': {
    prerequisites: 'None set by ETS — the exam is required by your state or teacher-preparation program as an entry requirement.',
    q: '152 selected-response + 2 essays',
    time: '~4.5 hours (275 minutes) for all three subtests',
    fee: '$150 combined (or $90 per subtest taken separately)',
    validity: 'Praxis scores are valid for 10 years.',
    faq: 'Praxis Core scores are valid for 10 years, subject to your state\'s acceptance window; because passing scores are set by each state, your state education agency is the authority on both the cut score and the validity period.'
  },
  'praxis-elementary-education-multiple-subjects-5001': {
    prerequisites: 'State or program requirement for elementary licensure; ETS itself sets no prerequisites.',
    q: '~245 across 4 subtests (80 + 50 + 60 + 55)',
    time: '4 hours 35 minutes (four separately timed subtests)',
    fee: '$180 combined (or $64 per subtest taken separately)',
    validity: 'Praxis scores are valid for 10 years.',
    faq: 'Praxis scores are valid for 10 years, subject to your state\'s acceptance window; because passing scores are set by each state for each of the four subtests, your state education agency is the authority on both the cut scores and the validity period.'
  },
  'praxis-plt-grades-k-6-5622': {
    prerequisites: 'State or program requirement for teaching licensure; ETS itself sets no prerequisites.',
    q: '70 selected-response + 4 constructed-response',
    time: '2 hours',
    fee: '~$130 (confirm the current fee at ets.org/praxis)',
    validity: 'Praxis scores are valid for 10 years.',
    faq: 'Praxis PLT scores are valid for 10 years, subject to your state\'s acceptance window; because the passing score is set by each state, your state education agency is the authority on both the cut score and the validity period.'
  },
  'scrum-alliance-certified-scrummaster': {
    prerequisites: 'Successful completion of the two-day (16-hour) CSM course with a Scrum Alliance Certified Trainer — you cannot sit the exam without the course.',
    q: '50 (all scored)',
    time: '60 minutes',
    fee: 'Included with the CSM course ($250-$2,495 depending on provider)',
    validity: '2 years — renew with 20 Scrum Education Units (SEUs) and a $100 renewal fee.',
    faq: 'CSM certification is valid for 2 years and is renewed by earning 20 Scrum Education Units (SEUs) and paying the $100 renewal fee through Scrum Alliance; there is no recertification exam.'
  },
  'series-65': {
    prerequisites: 'No prerequisites — you may register directly with NASAA; some states require state registration as well.',
    q: '140 (130 scored + 10 unscored pretest items)',
    time: '180 minutes (3 hours)',
    fee: '~$187',
    validity: 'Exam results are typically valid for 2 years for state registration; the licence/registration renews per state.',
    faq: 'Series 65 exam results are typically valid for 2 years for the purpose of state investment-adviser registration, and the registration itself renews on your state\'s cycle with continuing-education requirements.'
  },
  'series-66': {
    prerequisites: 'Passage of the Series 7 (co-requisite) and sponsorship/registration through a member firm.',
    q: '110 (100 scored + 10 unscored pretest items)',
    time: '150 minutes (2.5 hours)',
    fee: '~$177',
    validity: 'Exam results are typically valid for 2 years for state registration; the licence/registration renews per state.',
    faq: 'Series 66 exam results are typically valid for 2 years for the purpose of state registration, and the registration renews on your state\'s cycle with continuing-education requirements.'
  },
  'series-7': {
    prerequisites: 'Passage of the SIE and employment/sponsorship by a FINRA member firm (Form U4 filing).',
    q: '130 (125 scored + 5 unscored pretest items)',
    time: '225 minutes (3 hours 45 minutes)',
    fee: '~$395',
    validity: 'SIE/Series 7 results are valid for 4 years for registration; registration renews annually via Form U4.',
    faq: 'Series 7 results are valid for 4 years for the purpose of obtaining registration, and once registered the licence renews annually through the Form U4 process with your member firm.'
  },
  'sie-exam': {
    prerequisites: 'No prerequisites — anyone 18 or older may register; the SIE is the prerequisite for the Series 7 and other representative exams.',
    q: '~75 (some unscored pretest items)',
    time: '105 minutes (1 hour 45 minutes)',
    fee: '$100 (raised from $80 in January 2026)',
    validity: 'SIE results are valid for 4 years.',
    faq: 'SIE exam results are valid for 4 years from the passing date, after which you must retake the SIE if you have not yet used it toward a representative registration.'
  }
};

const GENERIC = /Varies by (exam|credential|state|location|program)|TBD|TODO|to be confirmed|see the official handbook|see the awarding body|see the official exam guide/i;

const slugToFile = new Map(); // slug -> {file, record}
const cache = new Map();
async function batch(n) {
  if (!cache.has(n)) cache.set(n, await import('./src/data/examCatalog/national-research/batch' + String(n).padStart(2, '0') + '.mjs'));
  return cache.get(n);
}

for (const slug of Object.keys(F)) {
  for (const n of NUM) {
    const m = await batch(n);
    const list = m.default?.exams || m.exams || [];
    const rec = list.find((e) => e && e.slug === slug);
    if (rec) { slugToFile.set(slug, { file: 'batch' + String(n).padStart(2, '0') + '.mjs', record: rec }); break; }
  }
}

const perFile = new Map();
let patchedPaths = 0;
for (const [slug, f] of Object.entries(F)) {
  const loc = slugToFile.get(slug);
  if (!loc) { console.log('!! no winning batch for ' + slug); continue; }
  const r = loc.record;
  const set = (path, value) => {
    const toks = path.split('.').map((t) => {
      const idx = [...t.matchAll(/\[(\d+)\]/g)].map((x) => +x[1]);
      const name = t.replace(/\[\d+\]/g, '');
      return { name, idx };
    });
    let o = r;
    for (let i = 0; i < toks.length; i++) {
      const { name, idx } = toks[i];
      if (i < toks.length - 1) {
        if (o[name] == null) return;
        o = o[name];
        for (const ix of idx) { if (o[ix] == null) return; o = o[ix]; }
      } else {
        const holder = o[name];
        if (holder == null) return;
        if (idx.length === 0) { o[name] = value; }
        else {
          let h = holder;
          for (let j = 0; j < idx.length - 1; j++) { h = h[idx[j]]; if (h == null) return; }
          h[idx[idx.length - 1]] = value;
        }
      }
    }
    patchedPaths++;
  };
  // prerequisites
  if (typeof r.prerequisites === 'string' && GENERIC.test(r.prerequisites)) set('prerequisites', f.prerequisites);
  if (r.examMeta && typeof r.examMeta.questions === 'string' && GENERIC.test(r.examMeta.questions)) set('examMeta.questions', f.q);
  if (r.examMeta && typeof r.examMeta.time === 'string' && GENERIC.test(r.examMeta.time)) set('examMeta.time', f.time);
  if (f.fee && r.examMeta && typeof r.examMeta.fee === 'string' && GENERIC.test(r.examMeta.fee)) set('examMeta.fee', f.fee);
  if (f.validity && Array.isArray(r.examEssentials) && r.examEssentials[3] && GENERIC.test(String(r.examEssentials[3][1]))) set('examEssentials[3][1]', f.validity);
  if (f.faq && Array.isArray(r.faqs) && r.faqs[2] && typeof r.faqs[2].a === 'string' && GENERIC.test(r.faqs[2].a)) set('faqs[2].a', f.faq);
  // record the file for rewrite
  if (!perFile.has(loc.file)) perFile.set(loc.file, []);
  perFile.get(loc.file).push(slug);
  console.log('patched ' + slug + ' -> ' + loc.file);
}

console.log('\npatched paths total:', patchedPaths);
console.log('files to rewrite:', [...perFile.keys()].join(', '));

// rewrite touched files — restore the original named-export format
for (const [file, slugs] of perFile) {
  const m = await batch(parseInt(file.match(/\d+/)[0]));
  const programs = m.default?.programs ?? m.programs ?? [];
  const exams = m.default?.exams ?? m.exams ?? [];
  const out =
    'export const programs = ' + JSON.stringify(programs, null, 2) + ';\n' +
    'export const exams = ' + JSON.stringify(exams, null, 2) + ';\n' +
    'export default { programs, exams };\n';
  writeFileSync(join(DIR, file), out);
  console.log('rewrote ' + file + ' (' + slugs.join(', ') + ')');
}
