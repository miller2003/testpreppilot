// Next-30 ranking = estimated ANNUAL CANDIDATE / NEW-LICENSEE VOLUME per exam.
//
// Method (fixed 2026-08-04 after user correction):
//   Earlier model scored whole keyword FAMILIES equally, so 9 Praxis or 9 AWS-welding
//   variants all tied — wrong. The user wants ranking by EACH EXAM's annual volume.
//
//   This version uses an explicit, curated map: VOL[slug] = { v: estimated annual
//   test-takers, src: 'published' | 'estimate', note }. No fuzzy regex => no substring
//   pollution (aicpa-*/cpat/acpa-* can no longer leak in). A near-duplicate safety cap
//   (4 per content family) is kept only as a net; representatives are curated by hand so
//   the cap rarely triggers.
//
//   Heat = round(55 + 13*log10(v/1000)), clamped 0..100.  v is annual candidates.
//
// Only slugs NOT already delivered (28 done) and present in the catalog are considered.

import { allExamsFull } from './src/data/examCatalog/index.mjs';
import { writeFileSync } from 'node:fs';

const done = new Set([
  'aama-cma','afaa-certified-personal-trainer','aipb-certified-bookkeeper',
  'certified-dietary-manager-cfpp','cisco-ccna-cybersecurity','cisco-ccnp-cybersecurity',
  'cisco-ccst-cybersecurity','comptia-linux-plus','danb-cda','microsoft-ai-900',
  'microsoft-ai-901','microsoft-az-104','microsoft-az-140','microsoft-az-204',
  'microsoft-az-305','microsoft-az-500','microsoft-az-700','microsoft-az-900',
  'nacpb-cpb','nasm-certified-nutrition-coach',
  'cpa-exam','enrolled-agent','epa-608-certification','osha-10-construction',
  'osha-30-construction','texas-real-estate-license','california-real-estate-license',
  'florida-real-estate-license'
]);

// v = estimated annual candidates. src: 'published' = vendor/NCSBN/AICPA/PMI publishes
// or cites it; 'estimate' = reasoned industry/structural estimate (documented).
const VOL = {
  // ---- Transport / CDL (fundamental 3 only; endorsements are near-duplicates) ----
  'cdl-general-knowledge-test':        { v: 500000, src: 'estimate', note: 'Taken by essentially every new commercial driver; largest single professional-knowledge exam in the US' },
  'cdl-combination-vehicles-knowledge-test': { v: 350000, src: 'estimate', note: 'Most Class A drivers add the combination endorsement' },
  'cdl-air-brakes-knowledge-test':     { v: 200000, src: 'estimate', note: 'Required for the majority of Class A/B vehicles' },

  // ---- Nursing / healthcare ----
  'nclex-rn':   { v: 380000, src: 'published', note: 'NCSBN: 358,998 RN candidates in 2023; ~290k through 3 qtrs 2024 → ~380k/yr' },
  'nnaap-cna':  { v: 250000, src: 'estimate', note: 'Nurse aide is one of the highest-volume healthcare entry exams' },
  'nclex-pn':   { v: 63000,  src: 'published', note: 'NCSBN: ~63,000 PN testers in 2024' },
  'nremt-emt':  { v: 100000, src: 'estimate', note: 'EMT-B is the largest EMS tier; far more takers than Paramedic' },
  'nremt-paramedic': { v: 30000, src: 'estimate', note: 'Paramedic is a subset of EMS volume' },
  'aab-phlebotomy': { v: 40000, src: 'estimate', note: 'Phlebotomy is a high-entry allied-health exam' },
  'arrt-sonography': { v: 15000, src: 'estimate', note: 'Diagnostic medical sonography — moderate specialist volume' },
  'arrt-vascular-sonography': { v: 6000, src: 'estimate', note: 'Niche sonography specialty' },
  'arrt-breast-sonography': { v: 4000, src: 'estimate', note: 'Niche sonography specialty' },

  // ---- IT / networking / security ----
  'cisco-ccna': { v: 300000, src: 'estimate', note: 'Top-tier benchmark networking cert; no published annual count, estimated very high' },
  'comptia-security-plus': { v: 250000, src: 'published', note: 'CompTIA: 1M+ Security+ holders (2025), 2.3M exams since 2011, DoD 8140 mandate' },
  'comptia-a-plus': { v: 200000, src: 'published', note: 'CompTIA: A+ is the largest entry-level IT cert' },
  'comptia-network-plus': { v: 150000, src: 'estimate', note: 'High-volume CompTIA trilogy member' },
  'comptia-cysa-plus': { v: 80000, src: 'estimate', note: 'Mid-tier CompTIA security analyst cert, strong volume' },
  'comptia-pentest-plus': { v: 70000, src: 'estimate', note: 'CompTIA penetration-testing cert' },
  'comptia-server-plus': { v: 60000, src: 'estimate', note: 'CompTIA server admin cert' },
  'aws-certified-solutions-architect-associate': { v: 150000, src: 'estimate', note: 'One of the most-taken cloud exams globally' },
  'aws-certified-cloud-practitioner': { v: 120000, src: 'estimate', note: 'AWS entry cert; very high global volume' },
  'aws-certified-solutions-architect-professional': { v: 60000, src: 'estimate', note: 'Advanced AWS cert' },
  'itil-4-foundation': { v: 120000, src: 'estimate', note: 'ITIL Foundation is among the most-taken service-management exams worldwide' },
  'scrum-alliance-certified-scrummaster': { v: 100000, src: 'estimate', note: 'CSM is the flagship agile cert; very high global volume' },
  'cisco-ccnp-enterprise': { v: 60000, src: 'estimate', note: 'Cisco professional-level routing/switching' },
  'pmi-acp': { v: 60000, src: 'estimate', note: 'PMI Agile Certified Practitioner' },
  'google-cloud-digital-leader': { v: 60000, src: 'estimate', note: 'Google Cloud entry cert' },
  'isc2-certified-in-cybersecurity': { v: 50000, src: 'estimate', note: 'ISC2 entry cybersecurity cert' },

  // ---- Project / finance / securities ----
  'pmi-pmp': { v: 300000, src: 'published', note: 'PMI: 1.68M active PMP certs (2026); China alone 243k candidates in 2023' },
  'pmi-capm': { v: 60000, src: 'published', note: 'PMI: ~76k active CAPM (2026)' },
  'cfa-level-1': { v: 120000, src: 'estimate', note: 'CFA L1 — globally ~100k-150k candidates/yr' },
  'cfa-level-2': { v: 60000, src: 'estimate', note: 'CFA L2 — subset progressing from L1' },
  'cfa-level-3': { v: 40000, src: 'estimate', note: 'CFA L3 — final level' },
  'series-7': { v: 150000, src: 'estimate', note: 'FINRA Series 7 — large historical volume' },
  'series-65': { v: 120000, src: 'estimate', note: 'FINRA Series 65 — large volume' },
  'series-66': { v: 90000, src: 'estimate', note: 'FINRA Series 66 — combined security/IA law, high volume' },
  'sie-exam': { v: 80000, src: 'estimate', note: 'FINRA Securities Industry Essentials — broad entry exam' },
  'series-79': { v: 20000, src: 'estimate', note: 'FINRA Series 79 — investment banking rep, smaller' },
  'isc2-cissp': { v: 40000, src: 'estimate', note: '(ISC)2 CISSP — premier security cert; tens of thousands/yr' },

  // ---- Engineering ----
  'fe-civil': { v: 80000, src: 'estimate', note: 'FE is the gatekeeper engineering exam; Civil is the largest discipline' },
  'pe-civil': { v: 60000, src: 'estimate', note: 'PE Civil — largest PE discipline' },

  // ---- Trades ----
  'nccer-electrician': { v: 80000, src: 'estimate', note: 'Electrician — mostly state-licensed; high volume' },
  'nccer-plumbing': { v: 70000, src: 'estimate', note: 'Plumber licensure — high volume' },
  'nccer-hvac': { v: 70000, src: 'estimate', note: 'HVAC licensure — high volume' },
  'ase-t7-truck-hvac': { v: 80000, src: 'estimate', note: 'ASE truck HVAC — high-volume auto technician cert' },
  'nccer-welding': { v: 70000, src: 'estimate', note: 'Welder credentialing — high volume' },
  'aws-certified-welder': { v: 60000, src: 'estimate', note: 'AWS welder performance qualification' },

  // ---- Beauty ----
  'nic-cosmetology-theory': { v: 120000, src: 'estimate', note: 'Cosmetology — large state-level license exam' },
  'nic-cosmetology-practical': { v: 120000, src: 'estimate', note: 'Cosmetology practical — same exam as theory via NIC' },

  // ---- Fitness ----
  'nasm-certified-personal-trainer': { v: 100000, src: 'estimate', note: 'NASM CPT — largest US personal-training cert' },
  'ace-certified-personal-trainer': { v: 90000, src: 'estimate', note: 'ACE CPT — major personal-training cert' },
  'acsm-certified-personal-trainer': { v: 70000, src: 'estimate', note: 'ACSM CPT — major personal-training cert' },

  // ---- Notary / legal ----
  'nna-certified-notary-signing-agent': { v: 40000, src: 'estimate', note: 'Notary signing agent — common side credential' },
  'notary-signing-agent': { v: 40000, src: 'estimate', note: 'Notary signing agent variant' },

  // ---- Teaching (3 highest-volume representative Praxis exams only) ----
  'praxis-core-combined-5752': { v: 180000, src: 'estimate', note: 'Praxis Core is the basic-skills gatekeeper required by many states' },
  'praxis-elementary-education-multiple-subjects-5001': { v: 150000, src: 'estimate', note: 'Required for elementary licensure in many states' },
  'praxis-plt-grades-k-6-5622': { v: 120000, src: 'estimate', note: 'Principles of Learning & Teaching K-6 — widely required' }
};

const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
const heatOf = (v) => Math.round(clamp(55 + 13 * Math.log10(v / 1000), 0, 100));

function familyOf(slug) {
  if (/^cdl-/.test(slug)) return 'CDL';
  if (/nclex/.test(slug)) return 'NCLEX';
  if (/nnaap|nurse\.aide/.test(slug)) return 'CNA';
  if (/nremt|paramedic|emt/.test(slug)) return 'EMS';
  if (/arrt|sonograph|radiolog|ultrasound/.test(slug)) return 'Imaging';
  if (/cisco/.test(slug)) return 'Cisco';
  if (/comptia/.test(slug)) return 'CompTIA';
  if (/aws-certified/.test(slug)) return 'AWS';
  if (/itil/.test(slug)) return 'ITIL';
  if (/scrum-alliance|scrum-org|safe-|disciplined-agile|icagile/.test(slug)) return 'Agile';
  if (/pmi-|pmp|capm/.test(slug)) return 'PMI';
  if (/cfa/.test(slug)) return 'CFA';
  if (/series-|sie/.test(slug)) return 'FINRA';
  if (/cissp|isc2/.test(slug)) return 'ISC2';
  if (/fe-civil|pe-civil|\bpe\.exam\b|se-structural/.test(slug)) return 'Engineering';
  if (/nccer-electrician|plumb/.test(slug)) return 'Trades-Elec/Plumb';
  if (/nccer-hvac|hvac/.test(slug)) return 'Trades-HVAC';
  if (/ase-t7|ase-h7/.test(slug)) return 'Auto-HVAC';
  if (/weld|nims/.test(slug)) return 'Welding';
  if (/cosmetolog|barber|nail/.test(slug)) return 'Beauty';
  if (/nasm|ace-|acsm|issa|nccpt|ncsf|nfpt|nsca|cooper|precision-nutrition/.test(slug)) return 'PersonalTraining';
  if (/notary/.test(slug)) return 'Notary';
  if (/praxis|teacher|teaching|early\.childhood|preschool|kindergarten|elementary|daycare|cda-/.test(slug)) return 'Teaching';
  return 'OTHER:' + slug.split('-')[0];
}

const rows = [];
for (const e of allExamsFull) {
  if (e.scope !== 'national' || done.has(e.slug)) continue;
  const v = VOL[e.slug];
  if (!v) continue;
  rows.push({
    slug: e.slug, name: e.name, category: e.category,
    v: v.v, heat: heatOf(v.v), src: v.src, note: v.note, fam: familyOf(e.slug)
  });
}

rows.sort((a, b) => b.heat - a.heat || b.v - a.v);

// near-duplicate safety net: cap 4 per content family
const CAP = 4;
const picked = [];
const famCount = {};
for (const r of rows) {
  if (picked.length >= 30) break;
  const c = famCount[r.fam] || 0;
  if (c >= CAP) continue;
  famCount[r.fam] = c + 1;
  picked.push(r);
}

console.log('Candidates with a volume estimate:', rows.length);
console.log('\n=== NEXT 30 BY ESTIMATED ANNUAL CANDIDATE VOLUME ===');
picked.forEach((r, i) => {
  console.log(`${String(i + 1).padStart(2, ' ')}. heat=${String(r.heat).padStart(3)} vol≈${String(r.v).padStart(7)} [${r.src}] [${r.fam}]  ${r.slug}`);
  console.log(`       ${r.name}  —  ${r.note}`);
});

writeFileSync('./_next30.json', JSON.stringify(
  picked.map((r, i) => ({ rank: i + 1, slug: r.slug, name: r.name, heat: r.heat, vol: r.v, src: r.src, family: r.fam, note: r.note })),
  null, 2
));
console.log('\nWrote _next30.json');
