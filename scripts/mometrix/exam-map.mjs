// Curated exam slug -> Mometrix product mapping (affiliate ID 1262).
//
// Values are exact "Marketing Group" names from the affiliate panel's HTML Ads
// page (account.php?page=23), parsed into ads.json by parse-export.mjs. Order
// is display order: the first product is the featured card.
//
// Every product below was checked against its landing page on mometrix.com /
// flashcardsecrets.com (fetched directly, never through ref.mometrix.com, so no
// affiliate clicks were generated) on 2026-10-19.
//
// Deliberately NOT mapped — do not re-add without re-checking the product page:
//   cpa-exam                          CPA products not updated for the 2024 CPA redesign
//   cia-part-1                        CIA products flagged "not updated for the current exam"
//   arrt-nuclear-medicine             product flagged "not updated for the current exam"
//   arrt-mammography                  product flagged "not updated for the current exam"
//   ace-certified-group-fitness-instructor  product flagged "not updated for the current exam"
//   jcahpo-coa                        "Ophthalmology" product is the ophthalmologist WQE, and outdated
//   arrt-radiation-therapy            "RTRP" is the retired IRS tax-preparer test, not radiation therapy
//   gmat-focus-edition                GMAT guide still describes the pre-Focus format
//   usmle-step-2-ck, usmle-step-3     USMLE guide covers Step 1 only
const AP = ['AP Exam Secrets Study Guide', 'AP Exam Flashcards'];
const CLEP = ['CLEP Exam Secrets Study Guide', 'CLEP Exam Flashcards'];
const ACCU = ['ACCUPLACER Exam Secrets Study Guide', 'ACCUPLACER Online Study Course', 'ACCUPLACER Exam Flashcards'];
const PRAXII = ['Praxis II Exam Secrets Study Guide', 'Praxis II Exam Flashcards'];
const CDL = ['CDL Exam Secrets Study Guide', 'CDL Online Study Course', 'CDL Exam Flashcards'];
const USMLE = ['USMLE Preparation Secrets Study Guide', 'USMLE Flashcards'];
const RE = ['Real Estate Sales Exam Secrets Study Guide', 'Real Estate Sales Exam Flashcards'];
const PCT = ['Patient Care Technician Exam Secrets Study Guide', 'Patient Care Technician Exam Flashcards'];
const COSMO = ['Cosmetology Exam Secrets Study Guide', 'Cosmetology Online Study Course', 'Cosmetology Exam Flashcards'];
const MBE = ['Multistate Bar Exam Success Strategies Study Guide', 'Multistate Bar Exam Flashcards'];
const POSTAL = ['Postal Exam Secrets Study Guide'];
const SIX = ['Certified Six Sigma Exam Secrets Study Guide', 'Certified Six Sigma Exam Flashcards'];
const HAM = ['Ham Radio License Exam Secrets Study Guide', 'Ham Radio License Exam Flashcards'];
const NPTE = ['NPTE & NPTAE Secrets Study Guide', 'NPTE & NPTAE Flashcards'];
const CMA = ['CMA Exam Secrets Study Guide', 'CMA Exam Flashcards'];
const PSAT = ['PSAT Exam Secrets Study Guide', 'PSAT Online Study Course', 'PSAT Exam Flashcards'];
const POLICE = ['Police Exam Secrets Study Guide'];

const m = {
  'texas-real-estate-license': RE,
  'california-real-estate-license': RE,
  'florida-real-estate-license': RE,
  'act-test': ['ACT Secrets Study Guide', 'ACT Online Study Course', 'ACT Exam Flashcards'],
  'preact-8-9': ['PreACT Secrets Study Guide', 'PreACT Flashcards'],
  'psat-10': PSAT,
  'psat-nmsqt': PSAT,
  'sat-exam': ['SAT Online Study Course', 'SAT Exam Flashcards'],
  'ielts-academic': ['IELTS Exam Secrets Study Guide', 'IELTS Exam Flashcards'],
  'toefl-ibt': ['TOEFL Secrets Study Guide', 'TOEFL Flashcards'],
  'dental-admission-test': ['DAT Prep Book', 'DAT Flashcards'],
  'gre-general-test': ['GRE Secrets Study Guide', 'GRE Online Study Course', 'GRE Flashcards'],
  'law-school-admission-test': ['LSAT Secrets Study Guide', 'LSAT Online Study Course', 'LSAT Flashcards'],
  'mcat-exam': ['MCAT Secrets Study Guide', 'MCAT Flashcards'],
  'pharmacy-college-admission-test': ['PCAT Secrets Study Guide', 'PCAT Flashcards'],
  'ged-test': ['GED Secrets Study Guide', 'GED Online Study Course', 'GED Exam Flashcards'],
  'hiset-exam': ['HiSET Secrets Study Guide', 'HiSET Online Study Course', 'HiSET Flashcards'],
  'ssat-upper-level': ['SSAT Secrets Study Guide', 'SSAT Upper Level Online Study Course', 'SSAT Flashcards'],
  asvab: ['ASVAB Secrets Study Guide', 'ASVAB Online Study Course', 'ASVAB Flashcards'],
  'act-workkeys': ['WorkKeys Secrets Study Guide', 'WorkKeys Online Study Course', 'WorkKeys Math Flashcards'],
  'arrt-radiography': ['Radiography Exam Secrets Study Guide', 'Radiography Exam Flashcards'],
  'arrt-sonography': ['Sonography Exam Secrets Study Guide', 'Sonography Exam Flashcards'],
  'arrt-computed-tomography': ['Computed Tomography Exam Secrets Study Guide', 'Computed Tomography (CT) Online Study Course', 'Computed Tomography Exam Flashcards'],
  'aab-phlebotomy': ['Phlebotomy Exam Secrets Study Guide', 'Phlebotomy Online Study Course', 'Phlebotomy Exam Flashcards'],
  'nnaap-cna': ['CNA Exam Secrets Study Guide', 'CNA Online Study Course', 'CNA Exam Flashcards'],
  'nha-cpct': PCT,
  'ncct-pt': PCT,
  'aama-cma': ['Certified Medical Assistant Exam Secrets Study Guide', 'Certified Medical Assistant CMA Online Study Course', 'Certified Medical Assistant Exam Flashcards'],
  'amt-rma': ['RMA Exam Secrets Study Guide', 'RMA Exam Flashcards'],
  'nha-ccma': ['CCMA Exam Secrets Study Guide', 'NHA CCMA Online Study Course', 'NHA CCMA Exam Flashcards'],
  'nha-cmaa': ['CMAA Exam Secrets Study Guide', 'CMAA Exam Flashcards'],
  'ncct-ncma': ['NCCT Exam Secrets Study Guide', 'NCCT Exam Flashcards'],
  'aapc-cpc': ['CPC Exam Secrets Study Guide', 'CPC Online Study Course', 'CPC Exam Flashcards'],
  'ahima-cca': ['Certified Coding Associate Exam Secrets Study Guide', 'Certified Coding Associate Exam Flashcards'],
  'ahima-ccs': ['Certified Coding Specialist Exam Secrets Study Guide', 'Certified Coding Specialist (CCS) Online Study Course', 'Certified Coding Specialist Exam Flashcards'],
  'ahima-rhit': ['RHIT Exam Secrets Study Guide', 'RHIT Online Study Course', 'RHIT Exam Flashcards'],
  'nremt-emt': ['EMT Exam Secrets Study Guide', 'EMT Online Study Course', 'EMT Exam Flashcards'],
  'bcen-cen': ['CEN Exam Secrets Study Guide', 'CEN Online Study Course', 'CEN Exam Flashcards'],
  'bcen-cfrn': ['CFRN Exam Secrets Study Guide', 'CFRN Exam Flashcards'],
  'bcen-tcrn': ['Trauma Certified Registered Nurse (TCRN) Exam Secrets Study Guide', 'Trauma Certified Registered Nurse (TCRN) Exam Flashcards'],
  'ptcb-cpht': ['PTCB Exam Secrets Study Guide', 'PTCB Online Study Course', 'PTCB Exam Flashcards'],
  'nha-cpht': ['ExCPT Secrets Study Guide', 'ExCPT Online Study Course', 'ExCPT Flashcards'],
  'danb-cda': ['DANB Exam Secrets Study Guide', 'DANB CDA Online Study Course', 'CDA Exam Flashcards'],
  'danb-rhs': ['DANB Exam Secrets Study Guide', 'DANB RHS Online Study Course'],
  'danb-ice': ['DANB Exam Secrets Study Guide', 'CDA Exam Flashcards'],
  'danb-gc': ['DANB Exam Secrets Study Guide', 'CDA Exam Flashcards'],
  'nbstsa-cst': ['CST Exam Secrets Study Guide', 'Certified Surgical Technologist Online Study Course', 'CST Exam Flashcards'],
  vtne: ['VTNE Secrets Study Guide', 'VTNE Online Study Course', 'VTNE Flashcards'],
  'nic-cosmetology-theory': COSMO,
  'nic-cosmetology-practical': COSMO,
  'nic-esthetics-theory': ['Esthetician Exam Secrets Study Guide', 'Esthetician Online Study Course', 'Esthetician Exam Flashcards'],
  'nic-nail-technology-theory': ['Nail Technician Exam Secrets Study Guide', 'Nail Technician Exam Flashcards'],
  'certified-dietary-manager-cfpp': ['Certified Dietary Manager Exam Secrets Study Guide', 'Certified Dietary Manager Online Study Course', 'Certified Dietary Manager Exam Flashcards'],
  'servsafe-food-protection-manager': ['ServSafe Manager Sercrets Study Guide', 'ServSafe Manager Flashcards'],
  'acsm-certified-personal-trainer': ['ACSM Exam Secrets Study Guide', 'ACSM Exam Flashcards'],
  'ace-certified-personal-trainer': ['ACE Personal Trainer Exam Secrets Study Guide', 'ACE Personal Trainer Exam Flashcards'],
  'afaa-certified-personal-trainer': ['AFAA Certified Personal Fitness Trainer Exam Secrets Study Guide', 'AFAA Certified Personal Fitness Trainer Exam Flashcards'],
  'nasm-certified-personal-trainer': ['NASM Personal Trainer Exam Secrets Study Guide', 'NASM Personal Trainer Exam Flashcards'],
  'nsca-certified-personal-trainer': ['NSCA-CPT Exam Secrets Study Guide', 'NSCA-CPT Exam Flashcards'],
  'nsca-cscs': ['CSCS Exam Secrets Study Guide', 'CSCS Online Study Course', 'CSCS Exam Flashcards'],
  'bcba-board-certified-behavior-analyst': ['BCBA Secrets Study Guide'],
  'nes-essential-academic-skills': ['NES Certification Test Secrets Study Guide', 'NES Certification Test Flashcards'],
  'praxis-core-combined-5752': ['Praxis Exam Secrets Study Guide', 'Praxis Core Online Study Course', 'Praxis Exam Flashcards'],
  'praxis-elementary-education-multiple-subjects-5001': ['Praxis Elementary Education: Multiple Subjects (5001) Online Study Course', 'Praxis II Exam Secrets Study Guide', 'Praxis II Exam Flashcards'],
  'praxis-teaching-reading-elementary-5205': ['Praxis Teaching Reading - Elementary (5205) Online Study Course', 'Praxis II Exam Secrets Study Guide', 'Praxis II Exam Flashcards'],
  'praxis-mathematics-5165': ['Praxis Mathematics (5165) Online Study Course', 'Praxis II Exam Secrets Study Guide', 'Praxis II Exam Flashcards'],
  'praxis-middle-school-english-language-arts-5047': ['Praxis Middle School English Language Arts Online Study Course', 'Praxis II Exam Secrets Study Guide', 'Praxis II Exam Flashcards'],
  'praxis-educational-leadership-administration-and-supervision-5412': ['Praxis 5412 Online Study Course', 'Praxis II Exam Secrets Study Guide', 'Praxis II Exam Flashcards'],
  'praxis-school-counselor-5422': ['Praxis School Counselor (5422) Online Study Course', 'Praxis II Exam Secrets Study Guide', 'Praxis II Exam Flashcards'],
  'pe-civil': ['Civil Engineering PE Exam Secrets Study Guide', 'PE Exam Flashcards'],
  'cma-part-1': CMA,
  'cma-part-2': CMA,
  'nmls-safe-mlo-national-test': ['NMLS Test Secrets Study Guide', 'NMLS Online Study Course', 'NMLS Test Flashcards'],
  'sie-exam': ['SIE Exam Secrets Study Guide', 'SIE Online Study Course', 'SIE Exam Flashcards'],
  'series-24': ['Series 24 Exam Secrets Study Guide', 'Series 24 Exam Flashcards'],
  'series-6': ['Series 6 Exam Secrets Study Guide', 'Series 6 Exam Flashcards'],
  'series-63': ['Series 63 Exam Secrets Study Guide', 'Series 63 Exam Flashcards'],
  'series-65': ['Series 65 Exam Secrets Study Guide', 'Series 65 Online Study Course', 'Series 65 Exam Flashcards'],
  'series-66': ['Series 66 Exam Secrets Study Guide', 'Series 66 Exam Flashcards'],
  'series-7': ['Series 7 Exam Secrets Study Guide', 'Series 7 Online Study Course', 'Series 7 Exam Flashcards'],
  'series-79': ['Series 79 Exam Secrets Study Guide', 'Series 79 Exam Flashcards'],
  'series-9': ['Series 9/10 Exam Secrets Study Guide', 'Series 9/10 Exam Flashcards'],
  'series-99': ['Series 99 Exam Secrets Study Guide', 'Series 99 Exam Flashcards'],
  'cfp-certification-exam': ['CFP Exam Secrets Study Guide', 'Certified Financial Planner (CFP) Online Study Course', 'CFP Exam Flashcards'],
  'usmle-step-1': USMLE,
  'nclex-rn': ['NCLEX-RN Review Book', 'NCLEX-RN Online Study Course', 'NCLEX-RN Flashcards'],
  'nclex-pn': ['NCLEX-PN Secrets', 'NCLEX-PN Online Study Course', 'NCLEX-PN Flashcards'],
  'ancc-fnp': ['Family Nurse Practitioner Exam Secrets Study Guide', 'FNP Online Study Course', 'Family Nurse Practitioner Exam Flashcards'],
  npte: NPTE,
  'npte-pta': NPTE,
  mblex: ['MBLEx Secrets Study Guide', 'MBLEx Online Study Course', 'MBLEx Flashcards'],
  pance: ['PANCE Prep Review', 'PANCE Online Study Course', 'PANCE Flashcards'],
  'uniform-bar-exam': MBE,
  'california-bar-exam': MBE,
  mpre: ['MPRE Secrets Study Guide', 'MPRE Flashcards'],
  'usps-vea-474': POSTAL,
  'usps-vea-475': POSTAL,
  'usps-vea-476': POSTAL,
  'usps-vea-477': POSTAL,
  'nyc-dcas-exam': ['NYC Civil Service Exam Secrets Study Guide', 'Civil Service Online Study Course', 'Civil Service Exam Flashcards'],
  'hrci-phr': ['PHR Exam Secrets Study Guide', 'PHR Online Study Course', 'PHR Exam Flashcards'],
  'hrci-sphr': ['SPHR Exam Secrets Study Guide', 'SPHR Online Study Course', 'SPHR Exam Flashcards'],
  'shrm-cp': ['SHRM Exam Secrets Study Guide', 'SHRM-CP Online Study Course', 'SHRM Exam Flashcards'],
  'shrm-scp': ['SHRM Exam Secrets Study Guide', 'SHRM Exam Flashcards'],
  'pmi-capm': ['CAPM Exam Secrets Study Guide', 'CAPM Exam Flashcards'],
  'pmi-pmp': ['PMP Exam Secrets Study Guide', 'PMP Online Study Course', 'PMP Exam Flashcards'],
  'asq-certified-six-sigma-green-belt': SIX,
  'asq-certified-six-sigma-black-belt': SIX,
  'nypd-police-officer-exam': POLICE,
  'post-entry-level': POLICE,
  'corrections-officer-entrance-exam': ['Corrections Officer Exam Secrets Study Guide', 'Corrections Officer Exam Flashcards'],
  'isaca-cisa': ['CISA Exam Secrets Study Guide', 'CISA Exam Flashcards'],
  'fcc-amateur-technician-class-license': HAM,
  'fcc-amateur-general-class-license': HAM
};

const each = (slugs, v) => slugs.forEach((s) => (m[s] = v));
each(['ap-biology', 'ap-calculus-ab', 'ap-calculus-bc', 'ap-chemistry', 'ap-computer-science-a', 'ap-computer-science-principles', 'ap-english-language-and-composition', 'ap-english-literature-and-composition', 'ap-environmental-science', 'ap-european-history', 'ap-human-geography', 'ap-macroeconomics', 'ap-microeconomics', 'ap-physics-1-algebra-based', 'ap-physics-2-algebra-based', 'ap-physics-c-mechanics', 'ap-precalculus', 'ap-psychology', 'ap-spanish-language-and-culture', 'ap-statistics', 'ap-united-states-government-and-politics', 'ap-united-states-history', 'ap-world-history-modern'], AP);
each(['clep-american-government', 'clep-biology', 'clep-calculus', 'clep-chemistry', 'clep-college-algebra', 'clep-college-composition', 'clep-college-mathematics', 'clep-financial-accounting', 'clep-history-of-the-united-states-i', 'clep-humanities', 'clep-introductory-business-law', 'clep-introductory-psychology', 'clep-natural-sciences', 'clep-precalculus', 'clep-principles-of-macroeconomics', 'clep-principles-of-microeconomics', 'clep-spanish-language'], CLEP);
each(['accuplacer-advanced-algebra-and-functions', 'accuplacer-arithmetic', 'accuplacer-quantitative-reasoning-algebra-statistics', 'accuplacer-reading', 'accuplacer-writeplacer', 'accuplacer-writing'], ACCU);
each(['cdl-air-brakes-knowledge-test', 'cdl-combination-vehicles-knowledge-test', 'cdl-general-knowledge-test', 'cdl-hazmat-endorsement-knowledge-test', 'cdl-passenger-endorsement-knowledge-test', 'cdl-pre-trip-vehicle-inspection-test', 'cdl-school-bus-endorsement-knowledge-test', 'cdl-on-road-driving-skills-test'], CDL);
each(['praxis-health-education-5551', 'praxis-physical-education-content-knowledge-5091', 'praxis-communication-and-literacy-combined-5753', 'praxis-early-childhood-education-5025', 'praxis-elementary-education-content-knowledge-5018', 'praxis-teaching-reading-k-12-5206', 'praxis-economics-5911', 'praxis-english-language-arts-content-and-analysis-5039', 'praxis-english-language-arts-content-knowledge-5038', 'praxis-geography-5921', 'praxis-government-political-science-5931', 'praxis-music-content-knowledge-5113', 'praxis-social-studies-5581', 'praxis-algebra-i-5162', 'praxis-biology-5236', 'praxis-chemistry-5246', 'praxis-general-science-5436', 'praxis-geometry-5163', 'praxis-physics-5266', 'praxis-middle-school-mathematics-5164', 'praxis-middle-school-science-5442', 'praxis-middle-school-social-studies-5089', 'praxis-plt-grades-5-9-5623', 'praxis-plt-grades-7-12-5624', 'praxis-plt-grades-k-6-5622', 'praxis-reading-specialist-5302', 'praxis-school-psychologist-5403', 'praxis-special-education-foundational-knowledge-5355', 'praxis-special-education-learning-disabilities-5383', 'praxis-english-to-speakers-of-other-languages-5362'], PRAXII);

// Pages whose product is broader than the exam itself get a plain-English
// caveat under the cards, so nobody buys a book expecting something it isn't.
const notes = {};
const FAMILY = (family) => (slug, name) =>
  `This links to Mometrix's ${family} range rather than a single ${name} title. Check that it lists an edition for ${name} before you buy.`;
const noteEach = (slugs, fn) => slugs.forEach((s) => (notes[s] = fn));
noteEach(Object.keys(m).filter((s) => m[s] === AP), FAMILY('AP'));
noteEach(Object.keys(m).filter((s) => m[s] === CLEP), FAMILY('CLEP'));
noteEach(Object.keys(m).filter((s) => m[s] === PRAXII), FAMILY('Praxis subject-test'));
noteEach(['nes-essential-academic-skills'], FAMILY('NES'));
noteEach(Object.keys(m).filter((s) => m[s] !== PRAXII && m[s].includes(PRAXII[0])), (slug, name) =>
  `The online course is built for ${name}. The study guide and flashcards open Mometrix's wider Praxis subject-test range, so check that they list an edition for this test.`);
noteEach(Object.keys(m).filter((s) => m[s] === RE), () =>
  'Mometrix covers the national portion of the real estate salesperson exam. You will still need your state’s required pre-licensing course and state-law review.');
noteEach(['uniform-bar-exam', 'california-bar-exam'], () =>
  'These cover the Multistate Bar Examination (the multiple-choice day) only, not the essay or performance-test portions.');
noteEach(Object.keys(m).filter((s) => m[s] === CDL && s !== 'cdl-general-knowledge-test'), (slug, name) =>
  `Mometrix's CDL materials cover the CDL knowledge tests as a set rather than the ${name} alone.`);
noteEach(['nypd-police-officer-exam', 'post-entry-level'], () =>
  'This is a general police officer entrance exam guide, not a test-specific edition. Use it for the reading, writing and reasoning skills these exams share.');
noteEach(['danb-ice', 'danb-gc', 'danb-rhs'], () =>
  'The DANB guide covers all three CDA components (RHS, ICE and GC) in one book.');

export { notes };
export default m;
