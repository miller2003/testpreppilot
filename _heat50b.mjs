// Batch-4 ranking (heat ranks 51-100) by estimated ANNUAL CANDIDATE VOLUME.
// Same method as _heat.mjs: curated VOL map, no fuzzy regex, cap 5 per family, pick 50.
import { allExamsFull } from './src/data/examCatalog/index.mjs';
import { writeFileSync } from 'node:fs';

const done = new Set([
  // batch 1 (28)
  'aama-cma','afaa-certified-personal-trainer','aipb-certified-bookkeeper','certified-dietary-manager-cfpp','cisco-ccna-cybersecurity','cisco-ccnp-cybersecurity','cisco-ccst-cybersecurity','comptia-linux-plus','danb-cda','microsoft-ai-900','microsoft-ai-901','microsoft-az-104','microsoft-az-140','microsoft-az-204','microsoft-az-305','microsoft-az-500','microsoft-az-700','microsoft-az-900','nacpb-cpb','nasm-certified-nutrition-coach','cpa-exam','enrolled-agent','epa-608-certification','osha-10-construction','osha-30-construction','texas-real-estate-license','california-real-estate-license','florida-real-estate-license',
  // batch 2 (30)
  'ace-certified-personal-trainer','ase-t7-truck-hvac','aws-certified-cloud-practitioner','aws-certified-solutions-architect-associate','cdl-air-brakes-knowledge-test','cdl-combination-vehicles-knowledge-test','cdl-general-knowledge-test','cfa-level-1','cisco-ccna','comptia-a-plus','comptia-cysa-plus','comptia-network-plus','comptia-security-plus','fe-civil','itil-4-foundation','nasm-certified-personal-trainer','nclex-rn','nic-cosmetology-practical','nic-cosmetology-theory','nnaap-cna','nremt-emt','pmi-pmp','praxis-core-combined-5752','praxis-elementary-education-multiple-subjects-5001','praxis-plt-grades-k-6-5622','scrum-alliance-certified-scrummaster','series-65','series-66','series-7','sie-exam',
  // batch 3 (50)
  'praxis-elementary-education-content-knowledge-5018','praxis-plt-grades-7-12-5624','google-it-support-professional-certificate','google-data-analytics-professional-certificate','nccer-electrician','acsm-certified-personal-trainer','comptia-pentest-plus','nccer-welding','nccer-plumbing','nccer-hvac','nclex-pn','issa-certified-personal-trainer','pe-civil','series-6','cfa-level-2','ahip-health-insurance-associate','scrum-org-psm-i','shrm-cp','pmi-capm','pmi-acp','aws-certified-solutions-architect-professional','cisco-ccnp-enterprise','comptia-server-plus','google-cloud-digital-leader','aws-certified-welder','series-63','hrci-phr','aws-certified-developer-associate','comptia-cloud-plus','comptia-it-fundamentals','isc2-certified-in-cybersecurity','google-associate-cloud-engineer','aab-phlebotomy','nna-certified-notary-signing-agent','cfa-level-3','scrum-org-pspo-i','asq-certified-six-sigma-black-belt','asq-certified-six-sigma-green-belt','aws-certified-sysops-administrator-associate','cisco-ccst-networking','isc2-cissp','google-professional-cloud-architect','python-institute-pcep','nremt-paramedic','safe-scrum-master','hrci-sphr','shrm-scp','asq-certified-quality-engineer','lpi-linux-essentials','ahima-cca'
]);

const VOL = {
  // ---- Food safety / OSHA / EPA (massive regulatory volume) ----
  'servsafe-food-protection-manager': { v: 500000, src: 'estimate', note: 'ServSafe Manager is the food-industry standard; among the highest-volume US certifications' },
  'osha-10-general-industry': { v: 200000, src: 'estimate', note: 'OSHA 10 general industry — widely required by employers' },
  'osha-30-general-industry': { v: 120000, src: 'estimate', note: 'OSHA 30 general industry — supervisory requirement in many sectors' },
  'epa-609-mvac-certification': { v: 90000, src: 'estimate', note: 'EPA 609 — motor-vehicle AC refrigerant; required for technicians, very high volume' },
  'osha-510-construction-standards': { v: 20000, src: 'estimate', note: 'OSHA 510 — construction-standards trainer/competent-person path' },
  'neha-certified-professional-food-safety': { v: 20000, src: 'estimate', note: 'NEHA food-safety manager — alternative to ServSafe' },
  'statefoodsafety-food-protection-manager': { v: 40000, src: 'estimate', note: 'StateFoodSafety manager exam — common online ANSI-accredited option' },

  // ---- Admissions / education gatekeepers ----
  'casper-test': { v: 100000, src: 'estimate', note: 'CASPer situational-judgment test — used by health-professions admissions; very high volume' },
  'praxis-teaching-reading-k-12-5206': { v: 45000, src: 'estimate', note: 'Praxis Teaching Reading K-12 — reading is a widely required licensure exam' },
  'praxis-teaching-reading-elementary-5205': { v: 35000, src: 'estimate', note: 'Praxis Teaching Reading: Elementary — required in many states' },
  'praxis-special-education-foundational-knowledge-5355': { v: 30000, src: 'estimate', note: 'Praxis Special Education — widely required sped licensure' },
  'praxis-middle-school-mathematics-5164': { v: 20000, src: 'estimate', note: 'Praxis Middle School Mathematics — high-volume subject exam' },
  'praxis-english-language-arts-content-knowledge-5038': { v: 20000, src: 'estimate', note: 'Praxis ELA Content Knowledge — common secondary licensure' },
  'praxis-communication-and-literacy-combined-5753': { v: 20000, src: 'estimate', note: 'Praxis Communication & Literacy (MA) — state-required combo' },

  // ---- Finance / mortgage / securities ----
  'nmls-safe-mlo-national-test': { v: 100000, src: 'estimate', note: 'NMLS SAFE MLO national test — every new mortgage loan originator' },
  'cfp-certification-exam': { v: 15000, src: 'estimate', note: 'CFP Board exam — ~15k candidates/yr' },
  'series-79': { v: 20000, src: 'estimate', note: 'FINRA Series 79 — investment banking rep' },
  'mba-accredited-mortgage-professional': { v: 15000, src: 'estimate', note: 'MBA AMP — mortgage-industry designation' },

  // ---- Medical coding / HIM ----
  'aapc-cpc': { v: 90000, src: 'estimate', note: 'AAPC CPC — the flagship medical-coding credential; very high volume' },
  'aapc-cfpc': { v: 12000, src: 'estimate', note: 'AAPC CFPC — physician-practice coder' },
  'ahima-rhit': { v: 8000, src: 'estimate', note: 'AHIMA RHIT — registered health information technician' },
  'ahima-rhia': { v: 6000, src: 'estimate', note: 'AHIMA RHIA — registered health information administrator' },

  // ---- Allied health ----
  'ptcb-cpht': { v: 90000, src: 'estimate', note: 'PTCB Pharmacy Technician — one of the largest allied-health exams' },
  'mblex': { v: 50000, src: 'estimate', note: 'MBLEx — the massage-therapy licensing exam used by most states' },
  'nha-cpct': { v: 25000, src: 'estimate', note: 'NHA patient care technician — high-entry allied-health cert' },
  'amt-rma': { v: 15000, src: 'estimate', note: 'AMT Registered Medical Assistant — popular CMA alternative' },
  'npte': { v: 18000, src: 'estimate', note: 'NPTE — physical therapist licensure' },
  'npte-pta': { v: 12000, src: 'estimate', note: 'NPTE PTA — physical therapist assistant licensure' },
  'ancc-fnp': { v: 15000, src: 'estimate', note: 'ANCC Family Nurse Practitioner — the largest NP certification' },
  'nbstsa-cst': { v: 12000, src: 'estimate', note: 'NBSTSA CST — surgical technologist certification' },
  'cbspd-crcst': { v: 10000, src: 'estimate', note: 'CBSPD CRCST — central sterile processing' },
  'nremt-aemt': { v: 20000, src: 'estimate', note: 'NREMT Advanced EMT — mid EMS tier' },
  'nremt-emr': { v: 10000, src: 'estimate', note: 'NREMT Emergency Medical Responder — entry EMS tier' },
  'vtne': { v: 8000, src: 'estimate', note: 'VTNE — veterinary technician national exam' },
  'navta-approved-veterinary-assistant': { v: 20000, src: 'estimate', note: 'NAVTA veterinary assistant — common entry vet credential' },

  // ---- Dental ----
  'danb-rhs': { v: 25000, src: 'estimate', note: 'DANB Radiation Health and Safety — dental-assisting requirement' },
  'danb-ice': { v: 30000, src: 'estimate', note: 'DANB Infection Control — widely required for dental assistants' },

  // ---- Imaging ----
  'arrt-radiography': { v: 15000, src: 'estimate', note: 'ARRT RT(R) — the largest radiography credential' },
  'arrt-sonography': { v: 10000, src: 'estimate', note: 'ARRT sonography — diagnostic medical sonography' },
  'arrt-mammography': { v: 8000, src: 'estimate', note: 'ARRT mammography — post-primary breast imaging' },

  // ---- IT / security / cloud (next tier) ----
  'eccouncil-ceh': { v: 60000, src: 'estimate', note: 'EC-Council CEH — one of the most-taken security certifications' },
  'isaca-cisa': { v: 35000, src: 'estimate', note: 'ISACA CISA — the audit/IS-control flagship' },
  'isaca-cism': { v: 20000, src: 'estimate', note: 'ISACA CISM — information-security management' },
  'salesforce-administrator': { v: 30000, src: 'estimate', note: 'Salesforce Administrator — the most-taken Salesforce cert' },
  'salesforce-platform-app-builder': { v: 20000, src: 'estimate', note: 'Salesforce Platform App Builder — popular no-code builder cert' },
  'certified-kubernetes-administrator': { v: 30000, src: 'estimate', note: 'CNCF CKA — Kubernetes administration, very high demand' },
  'certified-kubernetes-application-developer': { v: 20000, src: 'estimate', note: 'CNCF CKAD — Kubernetes app development' },
  'isc2-sscp': { v: 15000, src: 'estimate', note: 'ISC2 SSCP — systems security practitioner' },
  'isc2-csslp': { v: 5000, src: 'estimate', note: 'ISC2 CSSLP — secure software lifecycle' },
  'comptia-project-plus': { v: 25000, src: 'estimate', note: 'CompTIA Project+ — project management for IT' },
  'comptia-ai-essentials': { v: 20000, src: 'estimate', note: 'CompTIA AI Essentials — new high-visibility AI entry cert' },
  'comptia-data-plus': { v: 15000, src: 'estimate', note: 'CompTIA Data+ — data analytics entry cert' },
  'comptia-securityx': { v: 10000, src: 'estimate', note: 'CompTIA SecurityX (CASP+) — advanced security practitioner' },
  'red-hat-certified-system-administrator': { v: 20000, src: 'estimate', note: 'Red Hat RHCSA — the flagship Linux admin cert' },
  'lpic-1-system-administrator': { v: 15000, src: 'estimate', note: 'LPI LPIC-1 — vendor-neutral Linux admin' },
  'databricks-certified-data-engineer-associate': { v: 12000, src: 'estimate', note: 'Databricks Data Engineer Associate — hot new data cert' },

  // ---- Microsoft (remaining big certs) ----
  'microsoft-ms-900': { v: 100000, src: 'estimate', note: 'MS-900 M365 Fundamentals — among the most-taken Microsoft certs' },
  'microsoft-dp-900': { v: 40000, src: 'estimate', note: 'DP-900 Azure Data Fundamentals — popular entry data cert' },
  'microsoft-sc-900': { v: 40000, src: 'estimate', note: 'SC-900 Security Compliance Identity Fundamentals' },
  'microsoft-az-400': { v: 30000, src: 'estimate', note: 'AZ-400 DevOps Engineer Expert' },
  'microsoft-md-102': { v: 30000, src: 'estimate', note: 'MD-102 Endpoint Administrator — high-demand Windows admin' },
  'microsoft-pl-900': { v: 30000, src: 'estimate', note: 'PL-900 Power Platform Fundamentals' },
  'microsoft-ai-102': { v: 25000, src: 'estimate', note: 'AI-102 Azure AI Engineer' },
  'microsoft-ms-102': { v: 20000, src: 'estimate', note: 'MS-102 Enterprise Administrator' },
  'microsoft-dp-203': { v: 15000, src: 'estimate', note: 'DP-203 Azure Data Engineer' },
  'microsoft-sc-200': { v: 15000, src: 'estimate', note: 'SC-200 Security Operations Analyst' },

  // ---- AWS (remaining) ----
  'aws-certified-data-engineer-associate': { v: 40000, src: 'estimate', note: 'AWS Data Engineer Associate — new, very high initial volume' },
  'aws-certified-ai-practitioner': { v: 30000, src: 'estimate', note: 'AWS AI Practitioner — new entry AI cert' },
  'aws-certified-devops-engineer-professional': { v: 20000, src: 'estimate', note: 'AWS DevOps Engineer Professional' },
  'aws-certified-security-specialty': { v: 20000, src: 'estimate', note: 'AWS Security Specialty' },
  'aws-certified-machine-learning-engineer-associate': { v: 15000, src: 'estimate', note: 'AWS Machine Learning Engineer Associate' },

  // ---- Google (remaining) ----
  'google-cybersecurity-professional-certificate': { v: 50000, src: 'estimate', note: 'Google Cybersecurity Career Certificate — very high enrollment' },
  'google-associate-data-practitioner': { v: 20000, src: 'estimate', note: 'Google Associate Data Practitioner — new entry data cert' },
  'google-professional-data-engineer': { v: 20000, src: 'estimate', note: 'Google Professional Data Engineer' },
  'google-professional-cloud-security-engineer': { v: 15000, src: 'estimate', note: 'Google Cloud Security Engineer' },
  'google-professional-cloud-devops-engineer': { v: 15000, src: 'estimate', note: 'Google Cloud DevOps Engineer' },

  // ---- Agile / project ----
  'safe-agilist': { v: 80000, src: 'estimate', note: 'SAFe Agilist — the flagship Scaled Agile cert, very high volume' },
  'prince2-foundation': { v: 40000, src: 'estimate', note: 'PRINCE2 Foundation — one of the most-taken project-management exams worldwide' },

  // ---- Beauty / trades ----
  'nic-barber-theory': { v: 50000, src: 'estimate', note: 'NIC barber theory — barber licensing, high state-exam volume' },
  'nic-barber-practical': { v: 30000, src: 'estimate', note: 'NIC barber practical — hands-on barber licensing' },
  'ase-xev-level-1-electrical-safety': { v: 30000, src: 'estimate', note: 'ASE XEV Level 1 — EV safety, fast-growing technician cert' },
  'nra-range-safety-officer': { v: 30000, src: 'estimate', note: 'NRA Range Safety Officer — very common range credential' },
  'aws-certified-welding-inspector': { v: 8000, src: 'estimate', note: 'AWS Certified Welding Inspector — senior welding credential' },

  // ---- Fitness (one more representative) ----
  'nsca-cscs': { v: 20000, src: 'estimate', note: 'NSCA CSCS — strength & conditioning, professional standard' }
};

const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
const heatOf = (v) => Math.round(clamp(55 + 13 * Math.log10(v / 1000), 0, 100));

function familyOf(slug) {
  if (/^cdl-/.test(slug)) return 'CDL';
  if (/nclex/.test(slug)) return 'NCLEX';
  if (/nnaap|nurse\.aide/.test(slug)) return 'CNA';
  if (/nremt/.test(slug)) return 'EMS';
  if (/arrt|sonograph|radiograph|mammograph/.test(slug)) return 'Imaging';
  if (/weld/.test(slug)) return 'Welding';
  if (/cisco/.test(slug)) return 'Cisco';
  if (/comptia/.test(slug)) return 'CompTIA';
  if (/^aws-certified/.test(slug)) return 'AWS';
  if (/^google-/.test(slug)) return 'Google';
  if (/^microsoft-/.test(slug)) return 'Microsoft';
  if (/itil/.test(slug)) return 'ITIL';
  if (/^safe-|^scrum-|scrum-alliance/.test(slug)) return 'Agile';
  if (/servsafe|statefoodsafety|neha-/.test(slug)) return 'FoodSafety';
  if (/nmls|^mba-|^namb/.test(slug)) return 'Mortgage';
  if (/pmi-|pmp|capm/.test(slug)) return 'PMI';
  if (/cfa/.test(slug)) return 'CFA';
  if (/^series-|^sie/.test(slug)) return 'FINRA';
  if (/cissp|^isc2/.test(slug)) return 'ISC2';
  if (/fe-civil|pe-civil|se-structural/.test(slug)) return 'Engineering';
  if (/^nccer-/.test(slug)) return 'Trades';
  if (/^ase-/.test(slug)) return 'ASE';
  if (/^nic-|cosmetolog|barber/.test(slug)) return 'Beauty';
  if (/nasm|^ace-|acsm|issa|nsca|nccpt|ncsf|nfpt|cooper/.test(slug)) return 'PersonalTraining';
  if (/notary/.test(slug)) return 'Notary';
  if (/^praxis|teacher|teaching|early\.childhood|elementary/.test(slug)) return 'Teaching';
  if (/^osha/.test(slug)) return 'OSHA';
  if (/^epa-/.test(slug)) return 'EPA';
  if (/servsafe|statefoodsafety|neha-/.test(slug)) return 'FoodSafety';
  if (/nmls|^mba-|^namb/.test(slug)) return 'Mortgage';
  if (/^aapc/.test(slug)) return 'AAPC';
  if (/^ahima/.test(slug)) return 'AHIMA';
  if (/^ptcb/.test(slug)) return 'PTCB';
  if (/^nha-/.test(slug)) return 'NHA';
  if (/^amt-/.test(slug)) return 'AMT';
  if (/^npte/.test(slug)) return 'NPTE';
  if (/^ancc-/.test(slug)) return 'NP';
  if (/^nbstsa/.test(slug)) return 'NBSTSA';
  if (/cbspd|^hspa/.test(slug)) return 'SterileProc';
  if (/^danb/.test(slug)) return 'DANB';
  if (/^eccouncil/.test(slug)) return 'ECCouncil';
  if (/^isaca/.test(slug)) return 'ISACA';
  if (/^salesforce/.test(slug)) return 'Salesforce';
  if (/kubernetes/.test(slug)) return 'K8s';
  if (/^nra/.test(slug)) return 'NRA';
  if (/^cfp/.test(slug)) return 'CFP';
  if (/^prince2/.test(slug)) return 'Prince2';
  if (/^casper|admission-test|pcat/.test(slug)) return 'Admissions';
  if (/vtne|navta/.test(slug)) return 'VetTech';
  if (/^red-hat|^lpic/.test(slug)) return 'LinuxAdmin';
  if (/^databricks/.test(slug)) return 'Databricks';
  return 'OTHER:' + slug.split('-')[0];
}

const rows = [];
for (const e of allExamsFull) {
  if (e.scope !== 'national' || done.has(e.slug)) continue;
  const v = VOL[e.slug];
  if (!v) continue;
  rows.push({ slug: e.slug, name: e.name, category: e.category, v: v.v, heat: heatOf(v.v), src: v.src, note: v.note, fam: familyOf(e.slug) });
}
rows.sort((a, b) => b.heat - a.heat || b.v - a.v);

const CAP = 5;
const N = 50;
const picked = [];
const famCount = {};
for (const r of rows) {
  if (picked.length >= N) break;
  const c = famCount[r.fam] || 0;
  if (c >= CAP) continue;
  famCount[r.fam] = c + 1;
  picked.push(r);
}

console.log('Candidates with a volume estimate: ' + rows.length);
console.log('\n=== NEXT ' + N + ' BY ESTIMATED ANNUAL CANDIDATE VOLUME ===');
picked.forEach((r, i) => {
  console.log(String(i + 1).padStart(2, ' ') + '. heat=' + String(r.heat).padStart(3) + ' vol~' + String(r.v).padStart(7) + ' [' + r.src + '] [' + r.fam + ']  ' + r.slug);
  console.log('       ' + r.name + ' — ' + r.note);
});

writeFileSync('./_next50b.json', JSON.stringify(picked.map((r, i) => ({ rank: i + 1, slug: r.slug, name: r.name, heat: r.heat, vol: r.v, src: r.src, family: r.fam, note: r.note })), null, 2));
console.log('\nWrote _next50b.json');
