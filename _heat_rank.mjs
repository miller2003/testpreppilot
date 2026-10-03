// Rank the unreleased, indexable pool by DEMAND and pick the next release batch.
//
// "按热度" = order by estimated annual US candidate volume for each exam, which
// is the same model the earlier waves used (see _heat.mjs / _heat_next.mjs).
//
//   heat = round(45 + 12 * log10(v / 1000)), clamped to [10, 100]
//   v    = estimated annual candidates (US-weighted for US-specific exams)
//
// `src: 'published'` is used only where the sponsoring body states an annual
// candidate/exam count; everything else is a reasoned industry estimate marked
// 'estimate'. An evenly-fanned set of exact-slug keys (no fuzzy regex) means a
// slug that is absent from the map falls to an explicit low default instead of
// a guess, and a short report at the end lists those slugs for review.
//
// Selection = heat order + a per-content-family cap, so a batch cannot end up
// with 20 sibling Praxis or NCCER pages (near-duplicate cluster) even though
// each individual page is high volume.
//
// Output: _batch55_picks.json (read by _deploy_batch_55.mjs). Read-only otherwise.

import { allExamsFull } from './src/data/examCatalog/index.mjs';
import { releases } from './src/data/examCatalog/release-manifest.mjs';
import { examDepth } from './src/data/examCatalog/examDepth.mjs';
import { writeFileSync } from 'node:fs';

// ── Who is already out there ────────────────────────────────────────
const done = new Set(Object.keys(releases));

// ── Curated volume model ────────────────────────────────────────────
// v = estimated annual candidates. `note` records the reasoning so a later
// pass can challenge any single number without re-deriving the whole model.
const VOL = {
  // ═══ admissions-academic (57 candidates) ═══════════════════════════
  // College Board publishes AP program totals; per-exam counts are public
  // participation tables. These are the largest single exam family in the pool.
  'psat-nmsqt':                          { v: 3500000, src: 'published', note: 'College Board: ~3.5M juniors/sophomores sit the PSAT/NMSQT each October' },
  'ap-english-language-and-composition': { v: 570000,  src: 'published', note: 'Largest AP exam by participation' },
  'ap-united-states-history':            { v: 470000,  src: 'published', note: 'Perennially a top-3 AP exam' },
  'ap-english-literature-and-composition':{ v: 380000, src: 'published', note: 'Top-5 AP exam by participation' },
  'ap-united-states-government-and-politics': { v: 330000, src: 'published', note: 'Top-5 AP exam' },
  'ap-world-history-modern':             { v: 330000,  src: 'published', note: 'Top-5 AP exam' },
  'ap-human-geography':                  { v: 250000,  src: 'published', note: 'Large and fast-growing AP exam' },
  'ap-precalculus':                      { v: 200000,  src: 'published', note: 'New exam — sat by almost everyone who takes AB Calculus' },
  'ap-environmental-science':            { v: 185000,  src: 'published', note: 'Large AP science exam' },
  'ap-chemistry':                        { v: 155000,  src: 'published', note: 'Large AP science exam' },
  'ap-macroeconomics':                   { v: 150000,  src: 'published', note: 'Large AP social-science exam' },
  'ap-physics-1-algebra-based':          { v: 150000,  src: 'published', note: 'Largest AP physics course' },
  'ap-spanish-language-and-culture':     { v: 150000,  src: 'published', note: 'Largest AP world-language exam' },
  'ap-computer-science-principles':      { v: 145000,  src: 'published', note: 'Large and growing AP CS exam' },
  'ap-calculus-bc':                      { v: 130000,  src: 'published', note: 'Subset progressing from AB, still large' },
  'ap-computer-science-a':               { v: 105000,  src: 'published', note: 'Large AP CS exam' },
  'ap-microeconomics':                   { v: 95000,   src: 'published', note: 'Mid-size AP social-science exam' },
  'ap-european-history':                 { v: 90000,   src: 'published', note: 'Mid-size AP history exam' },
  'ap-physics-c-mechanics':              { v: 60000,   src: 'published', note: 'Calculus-based physics — smaller but high-intent' },
  'ap-physics-2-algebra-based':          { v: 26000,   src: 'published', note: 'Smallest AP physics course' },
  // PSAT 10 / PreACT / ACT WorkKeys — same national admission-test market.
  'psat-10':                             { v: 500000,  src: 'published', note: 'College Board: sophomore-year PSAT sitting' },
  'act-workkeys':                        { v: 300000,  src: 'estimate', note: 'WorkKeys is used by many states as the career-readiness assessment' },
  'preact-8-9':                          { v: 250000,  src: 'estimate', note: 'ACT: PreACT is now the standard pre-ACT diagnostic' },
  // ACCUPLACER — taken by the great majority of community-college entrants.
  'accuplacer-reading':                  { v: 500000,  src: 'estimate', note: 'ACCUPLACER placement is near-universal at open-admission colleges' },
  'accuplacer-arithmetic':               { v: 500000,  src: 'estimate', note: 'Default math placement strand' },
  'accuplacer-quantitative-reasoning-algebra-statistics': { v: 450000, src: 'estimate', note: 'Second math strand (QAS)' },
  'accuplacer-writing':                  { v: 350000,  src: 'estimate', note: 'WritePlacer predecessor strand' },
  'accuplacer-advanced-algebra-and-functions': { v: 300000, src: 'estimate', note: 'Strand for STEM-bound entrants' },
  'accuplacer-writeplacer':              { v: 300000,  src: 'estimate', note: 'Essay strand' },
  // English proficiency + graduate admissions.
  // Global English tests are down-weighted to their US/English-market share: the
  // headline worldwide candidate counts sit mostly in non-English search markets,
  // so using them raw would over-rank these three above core US exams.
  'toeic-listening-and-reading':         { v: 180000,  src: 'estimate', note: 'ETS: ~2M+ candidates worldwide, but demand concentrates in Asia — US/English-market-weighted' },
  'duolingo-english-test':               { v: 350000,  src: 'estimate', note: 'Accepted by thousands of US programmes; huge post-2020 growth (global total is higher)' },
  'pte-academic':                        { v: 120000,  src: 'estimate', note: 'Pearson: large globally, but driven by Australian/UK visa routes — US-market-weighted' },
  'casper-test':                         { v: 300000,  src: 'estimate', note: 'Acuity Insights: required by hundreds of health-professional programmes' },
  'law-school-admission-test':           { v: 120000,  src: 'published', note: 'LSAC: ~120k LSAT takers in a strong recent cycle' },
  'asvab':                               { v: 700000,  src: 'estimate', note: 'Taken by essentially every military applicant plus career-exploration schools' },
  'hiset-exam':                          { v: 60000,   src: 'estimate', note: 'Second-largest high-school-equivalency test after GED' },
  'ssat-upper-level':                    { v: 60000,   src: 'estimate', note: 'Independent-school admission test' },
  'olsat-8':                             { v: 200000,  src: 'estimate', note: 'Widely used gifted/talented screening test in large urban districts' },
  'dental-admission-test':               { v: 15000,   src: 'estimate', note: 'ADA: dental-school admission, small but high-intent' },
  'pharmacy-college-admission-test':     { v: 2000,    src: 'estimate', note: 'PCAT was discontinued after Jan 2024 — residual long-tail search only; deprioritised deliberately' },
  // CLEP — credit-by-examination, moderate but steady.
  'clep-college-composition':            { v: 30000,   src: 'estimate', note: 'Most-taken CLEP exam' },
  'clep-introductory-psychology':        { v: 30000,   src: 'estimate', note: 'Popular CLEP exam' },
  'clep-college-algebra':                { v: 25000,   src: 'estimate', note: 'Common CLEP math exam' },
  'clep-spanish-language':               { v: 20000,   src: 'estimate', note: 'Language CLEP with credit-heavy value' },
  'clep-financial-accounting':           { v: 18000,   src: 'estimate', note: 'Business-school CLEP' },
  'clep-biology':                        { v: 15000,   src: 'estimate', note: 'Science CLEP' },
  'clep-college-mathematics':            { v: 15000,   src: 'estimate', note: 'Math CLEP' },
  'clep-history-of-the-united-states-i': { v: 15000,   src: 'estimate', note: 'History CLEP' },
  'clep-american-government':            { v: 12000,   src: 'estimate', note: 'Government CLEP' },
  'clep-calculus':                       { v: 12000,   src: 'estimate', note: 'Calculus CLEP' },
  'clep-natural-sciences':               { v: 12000,   src: 'estimate', note: 'General science CLEP' },
  'clep-principles-of-macroeconomics':   { v: 12000,   src: 'estimate', note: 'Economics CLEP' },
  'clep-principles-of-microeconomics':   { v: 12000,   src: 'estimate', note: 'Economics CLEP' },
  'clep-chemistry':                      { v: 10000,   src: 'estimate', note: 'Science CLEP' },
  'clep-humanities':                     { v: 10000,   src: 'estimate', note: 'Humanities CLEP' },
  'clep-introductory-business-law':      { v: 10000,   src: 'estimate', note: 'Business CLEP' },
  'clep-precalculus':                    { v: 10000,   src: 'estimate', note: 'Math CLEP' },

  // ═══ technology (98 candidates) ════════════════════════════════════
  'microsoft-office-specialist-excel-associate': { v: 100000, src: 'estimate', note: 'MOS Excel is the single largest Microsoft credential by volume' },
  'microsoft-office-specialist-word-associate':  { v: 60000,  src: 'estimate', note: 'Second MOS associate credential' },
  'microsoft-office-specialist-excel-expert':    { v: 40000,  src: 'estimate', note: 'MOS expert tier' },
  'microsoft-office-specialist-powerpoint-associate': { v: 40000, src: 'estimate', note: 'MOS associate credential' },
  'microsoft-office-specialist-outlook-associate': { v: 20000, src: 'estimate', note: 'MOS associate credential' },
  'microsoft-office-specialist-word-expert':     { v: 20000,  src: 'estimate', note: 'MOS expert tier' },
  'microsoft-office-specialist-associate-bundle':{ v: 20000,  src: 'estimate', note: 'Bundled MOS package' },
  'microsoft-office-specialist-expert-bundle':   { v: 10000,  src: 'estimate', note: 'Bundled MOS package' },
  'microsoft-dp-900':                    { v: 60000,   src: 'estimate', note: 'Azure data fundamentals — entry-level, very widely taken' },
  'microsoft-ms-900':                    { v: 50000,   src: 'estimate', note: 'Microsoft 365 fundamentals — entry-level' },
  'microsoft-pl-900':                    { v: 40000,   src: 'estimate', note: 'Power Platform fundamentals — entry-level' },
  'microsoft-dp-203':                    { v: 40000,   src: 'estimate', note: 'Azure data engineer — flagship data associate cert' },
  'microsoft-pl-200':                    { v: 35000,   src: 'estimate', note: 'Power Platform functional consultant' },
  'microsoft-pl-300':                    { v: 30000,   src: 'estimate', note: 'Power BI data analyst — high demand' },
  'microsoft-sc-100':                    { v: 30000,   src: 'estimate', note: 'Security operations analyst' },
  'microsoft-md-102':                    { v: 30000,   src: 'estimate', note: 'Modern desktop administrator' },
  'microsoft-ai-102':                    { v: 25000,   src: 'estimate', note: 'Azure AI engineer' },
  'microsoft-sc-200':                    { v: 25000,   src: 'estimate', note: 'Security operations engineer' },
  'microsoft-mb-910':                    { v: 25000,   src: 'estimate', note: 'Dynamics 365 fundamentals' },
  'microsoft-sc-900':                    { v: 25000,   src: 'estimate', note: 'Security fundamentals' },
  'microsoft-ms-102':                    { v: 20000,   src: 'estimate', note: 'Microsoft 365 administrator' },
  'microsoft-ms-700':                    { v: 20000,   src: 'estimate', note: 'Teams administrator' },
  'microsoft-az-800':                    { v: 15000,   src: 'estimate', note: 'Windows Server hybrid administrator' },
  'microsoft-az-801':                    { v: 15000,   src: 'estimate', note: 'Windows Server hybrid administrator (second exam)' },
  'microsoft-dp-300':                    { v: 15000,   src: 'estimate', note: 'Azure database administrator' },
  'aws-certified-ai-practitioner':       { v: 60000,   src: 'estimate', note: 'AWS AI practitioner — fastest-growing AWS entry cert' },
  'aws-certified-developer-associate':   { v: 50000,   src: 'estimate', note: 'AWS developer associate' },
  'aws-certified-sysops-administrator-associate': { v: 40000, src: 'estimate', note: 'AWS ops associate' },
  'aws-certified-data-engineer-associate': { v: 30000, src: 'estimate', note: 'AWS data engineer associate' },
  'aws-certified-machine-learning-engineer-associate': { v: 25000, src: 'estimate', note: 'AWS ML engineer associate' },
  'aws-certified-devops-engineer-professional': { v: 25000, src: 'estimate', note: 'AWS DevOps professional' },
  'aws-certified-generative-ai-developer-professional': { v: 20000, src: 'estimate', note: 'New AWS generative-AI professional cert' },
  'aws-certified-security-specialty':    { v: 12000,   src: 'estimate', note: 'AWS security specialty' },
  'aws-certified-database-specialty':    { v: 8000,    src: 'estimate', note: 'AWS database specialty' },
  'aws-certified-machine-learning-specialty': { v: 8000, src: 'estimate', note: 'AWS ML specialty (legacy)' },
  'aws-certified-advanced-networking-specialty': { v: 6000, src: 'estimate', note: 'AWS advanced networking specialty' },
  'aws-certified-sap-on-aws-specialty':  { v: 3000,    src: 'estimate', note: 'Narrow AWS specialty' },
  'google-it-support-professional-certificate':    { v: 80000, src: 'estimate', note: 'Google Career Certificate — highest-enrolment track' },
  'google-data-analytics-professional-certificate':{ v: 80000, src: 'estimate', note: 'Google Career Certificate — highest-enrolment track' },
  'google-cybersecurity-professional-certificate': { v: 60000, src: 'estimate', note: 'Google Career Certificate' },
  'google-cloud-digital-leader':         { v: 60000,   src: 'estimate', note: 'Google Cloud entry cert' },
  'google-associate-cloud-engineer':     { v: 50000,   src: 'estimate', note: 'Google Cloud associate cert' },
  'google-associate-data-practitioner':  { v: 40000,   src: 'estimate', note: 'Google Cloud data entry cert' },
  'google-advanced-data-analytics-certificate': { v: 40000, src: 'estimate', note: 'Google Career Certificate, advanced tier' },
  'google-professional-cloud-architect': { v: 40000,   src: 'estimate', note: 'Google Cloud professional cert' },
  'google-professional-cloud-developer': { v: 20000,   src: 'estimate', note: 'Google Cloud professional cert' },
  'google-professional-data-engineer':   { v: 20000,   src: 'estimate', note: 'Google Cloud professional cert' },
  'google-professional-machine-learning-engineer': { v: 15000, src: 'estimate', note: 'Google Cloud professional cert' },
  'comptia-pentest-plus':                { v: 70000,   src: 'estimate', note: 'CompTIA offensive-security cert, strong volume' },
  'comptia-server-plus':                 { v: 60000,   src: 'estimate', note: 'CompTIA server-admin cert' },
  'comptia-cloud-plus':                  { v: 50000,   src: 'estimate', note: 'CompTIA cloud cert' },
  'comptia-it-fundamentals':             { v: 50000,   src: 'estimate', note: 'ITF+ entry-level IT cert' },
  'comptia-tech-plus':                   { v: 50000,   src: 'estimate', note: 'CompTIA Tech+ / ITF successor' },
  'comptia-ai-essentials':               { v: 40000,   src: 'estimate', note: 'CompTIA AI Essentials — new, high growth' },
  'comptia-project-plus':                { v: 25000,   src: 'estimate', note: 'CompTIA project management cert' },
  'isc2-certified-in-cybersecurity':     { v: 50000,   src: 'estimate', note: 'ISC2 entry cybersecurity cert (CC)' },
  'isc2-sscp':                           { v: 25000,   src: 'estimate', note: 'ISC2 systems-security practitioner' },
  'isc2-ccsp':                           { v: 20000,   src: 'estimate', note: 'ISC2 cloud-security professional' },
  'isaca-cism':                          { v: 20000,   src: 'estimate', note: 'ISACA security manager' },
  'isaca-crisc':                         { v: 20000,   src: 'estimate', note: 'ISACA risk manager' },
  'eccouncil-ceh':                       { v: 20000,   src: 'estimate', note: 'EC-Council ethical hacker' },
  'offsec-oscp':                         { v: 15000,   src: 'estimate', note: 'OffSec OSCP — premium hands-on pentest cert' },
  'csa-ccsk':                            { v: 6000,    src: 'estimate', note: 'Cloud Security Alliance foundation cert' },
  'hashicorp-certified-terraform-associate': { v: 50000, src: 'estimate', note: 'Terraform associate — dominant IaC cert' },
  'docker-certified-associate':          { v: 40000,   src: 'estimate', note: 'Docker foundational cert' },
  'kubernetes-and-cloud-native-associate':{ v: 40000,  src: 'estimate', note: 'KCNA — CNCF entry cert' },
  'certified-kubernetes-application-developer': { v: 25000, src: 'estimate', note: 'CKAD — CNCF developer cert' },
  'hashicorp-certified-vault-associate': { v: 15000,   src: 'estimate', note: 'Vault associate' },
  'lpi-linux-essentials':                { v: 30000,   src: 'estimate', note: 'Entry Linux cert' },
  'lpic-1-system-administrator':         { v: 25000,   src: 'estimate', note: 'LPIC-1 Linux administrator' },
  'python-institute-pcep':               { v: 40000,   src: 'estimate', note: 'PCEP entry Python cert' },
  'python-institute-pcap':               { v: 20000,   src: 'estimate', note: 'PCAP associate Python cert' },
  'oracle-oci-foundations-associate':    { v: 30000,   src: 'estimate', note: 'Oracle cloud foundations' },
  'tableau-desktop-specialist':          { v: 15000,   src: 'estimate', note: 'Tableau desktop specialist' },
  'tableau-certified-data-analyst':      { v: 10000,   src: 'estimate', note: 'Tableau data analyst' },
  'cisco-ccnp-enterprise':               { v: 60000,   src: 'estimate', note: 'Cisco professional-level enterprise track' },
  'cisco-ccst-networking':               { v: 40000,   src: 'estimate', note: 'Cisco entry support-technician cert' },
  'cisco-ccnp-security':                 { v: 12000,   src: 'estimate', note: 'Cisco professional security track' },
  'cisco-ccnp-automation':               { v: 8000,    src: 'estimate', note: 'Cisco professional automation track' },
  'cisco-ccnp-data-center':              { v: 8000,    src: 'estimate', note: 'Cisco professional data-center track' },
  'cisco-ccnp-service-provider':         { v: 6000,    src: 'estimate', note: 'Cisco professional SP track' },
  'cisco-ccnp-collaboration':            { v: 5000,    src: 'estimate', note: 'Cisco professional collaboration track' },
  'cisco-ccnp-wireless':                 { v: 4000,    src: 'estimate', note: 'Narrow Cisco professional track' },
  'salesforce-platform-developer-i':     { v: 20000,   src: 'estimate', note: 'Salesforce developer I' },
  'salesforce-advanced-administrator':   { v: 15000,   src: 'estimate', note: 'Salesforce advanced admin' },
  'salesforce-platform-app-builder':     { v: 15000,   src: 'estimate', note: 'Salesforce app builder' },
  'salesforce-sales-cloud-consultant':   { v: 12000,   src: 'estimate', note: 'Salesforce sales cloud consultant' },
  'salesforce-business-analyst':         { v: 12000,   src: 'estimate', note: 'Salesforce business analyst' },
  'salesforce-service-cloud-consultant': { v: 10000,   src: 'estimate', note: 'Salesforce service cloud consultant' },
  'salesforce-platform-developer-ii':    { v: 8000,    src: 'estimate', note: 'Salesforce developer II (advanced)' },
  'vmware-vcp-data-center-virtualization': { v: 15000, src: 'estimate', note: 'Broadcom/VMware VCP-DCV' },
  'hubspot-inbound-certification':       { v: 60000,   src: 'estimate', note: 'HubSpot Inbound — the flagship free HubSpot cert' },
  'itil-4-specialist-create-deliver-and-support': { v: 12000, src: 'estimate', note: 'ITIL 4 specialist module' },
  'itil-4-specialist-high-velocity-it':  { v: 12000,   src: 'estimate', note: 'ITIL 4 specialist module' },
  'itil-4-specialist-drive-stakeholder-value': { v: 10000, src: 'estimate', note: 'ITIL 4 specialist module' },
  'itil-4-specialist-monitor-support-and-fulfil': { v: 10000, src: 'estimate', note: 'ITIL 4 specialist module' },
  'itil-4-strategist-direct-plan-and-improve': { v: 8000, src: 'estimate', note: 'ITIL 4 strategist module' },
  'itil-4-leader-digital-and-it-strategy': { v: 5000, src: 'estimate', note: 'ITIL 4 leader module' },

  // ═══ allied-health (37) ════════════════════════════════════════════
  'nha-cpct':                            { v: 60000,   src: 'estimate', note: 'NHA patient care technician — large entry healthcare cert' },
  'aab-phlebotomy':                      { v: 40000,   src: 'estimate', note: 'Phlebotomy is a high-entry allied-health exam' },
  'amt-rma':                             { v: 40000,   src: 'estimate', note: 'AMT medical assistant — major MA credential' },
  'nha-cmaa':                            { v: 30000,   src: 'estimate', note: 'NHA medical administrative assistant' },
  'nremt-paramedic':                     { v: 30000,   src: 'estimate', note: 'NREMT paramedic — upper EMS tier' },
  'bcen-cen':                            { v: 25000,   src: 'estimate', note: 'Emergency nurse certification' },
  'nha-cpht':                            { v: 20000,   src: 'estimate', note: 'NHA pharmacy technician' },
  'ncct-ncma':                           { v: 20000,   src: 'estimate', note: 'NCCT medical assistant' },
  'ahima-cca':                           { v: 20000,   src: 'estimate', note: 'AHIMA coding associate' },
  'nremt-aemt':                          { v: 20000,   src: 'estimate', note: 'NREMT advanced EMT' },
  'nha-cehrs':                           { v: 15000,   src: 'estimate', note: 'NHA electronic health records specialist' },
  'ncct-pt':                             { v: 15000,   src: 'estimate', note: 'NCCT pharmacy technician' },
  'nremt-emr':                           { v: 15000,   src: 'estimate', note: 'NREMT emergency medical responder' },
  'ahima-ccs':                           { v: 15000,   src: 'estimate', note: 'AHIMA certified coding specialist' },
  'arrt-sonography':                     { v: 15000,   src: 'estimate', note: 'ARRT diagnostic medical sonography' },
  'arrt-computed-tomography':            { v: 12000,   src: 'estimate', note: 'ARRT CT modality' },
  'ptcb-immunization':                   { v: 12000,   src: 'estimate', note: 'PTCB immunization add-on' },
  'danb-rhs':                            { v: 12000,   src: 'estimate', note: 'DANB radiation health & safety' },
  'nbstsa-cst':                          { v: 12000,   src: 'estimate', note: 'Surgical technologist cert' },
  'ncct-ts':                             { v: 12000,   src: 'estimate', note: 'NCCT surgical technologist' },
  'ptcb-billing':                        { v: 10000,   src: 'estimate', note: 'PTCB billing & reimbursement' },
  'danb-ice':                            { v: 10000,   src: 'estimate', note: 'DANB infection control' },
  'nha-mental-health-tech':              { v: 8000,    src: 'estimate', note: 'NHA mental health technician' },
  'ahima-rhit':                          { v: 8000,    src: 'estimate', note: 'AHIMA health information technician' },
  'bcen-cfrn':                           { v: 8000,    src: 'estimate', note: 'Flight nurse certification' },
  'ptcb-nonsterile-compounding':         { v: 8000,    src: 'estimate', note: 'PTCB compounding add-on' },
  'arrt-mri':                            { v: 7000,    src: 'estimate', note: 'ARRT MRI modality' },
  'arrt-vascular-sonography':            { v: 6000,    src: 'estimate', note: 'ARRT vascular sonography' },
  'arrt-mammography':                    { v: 6000,    src: 'estimate', note: 'ARRT mammography' },
  'bcen-tcrn':                           { v: 6000,    src: 'estimate', note: 'Trauma nurse certification' },
  'danb-gc':                             { v: 5000,    src: 'estimate', note: 'DANB general chairside' },
  'jcahpo-coa':                          { v: 4000,    src: 'estimate', note: 'Ophthalmic assistant cert' },
  'arrt-breast-sonography':              { v: 4000,    src: 'estimate', note: 'Niche sonography specialty' },
  'arrt-radiation-therapy':              { v: 3000,    src: 'estimate', note: 'ARRT radiation therapy' },
  'arrt-nuclear-medicine':               { v: 2500,    src: 'estimate', note: 'ARRT nuclear medicine' },
  'arrt-cardiac-interventional':         { v: 1500,    src: 'estimate', note: 'ARRT post-primary modality' },
  'arrt-vascular-interventional':        { v: 1500,    src: 'estimate', note: 'ARRT post-primary modality' },

  // ═══ education-teaching (35) ═══════════════════════════════════════
  'google-certified-educator-level-1':   { v: 120000,  src: 'estimate', note: 'Widely required/encouraged Google Workspace teacher cert' },
  'praxis-plt-grades-7-12-5624':         { v: 100000,  src: 'estimate', note: 'PLT 7-12 — widely required secondary pedagogy exam' },
  'google-certified-educator-level-2':   { v: 60000,   src: 'estimate', note: 'Advanced Google educator tier' },
  'nes-essential-academic-skills':       { v: 50000,   src: 'estimate', note: 'NES basic-skills gatekeeper in several states' },
  'praxis-teaching-reading-elementary-5205': { v: 40000, src: 'estimate', note: 'Science-of-reading requirement adopted by many states' },
  'praxis-social-studies-5581':          { v: 40000,   src: 'estimate', note: 'Large Praxis subject exam' },
  'praxis-special-education-foundational-knowledge-5355': { v: 35000, src: 'estimate', note: 'Special-ed licensure is a large, chronic shortage field' },
  'praxis-communication-and-literacy-combined-5753': { v: 30000, src: 'estimate', note: 'Combined elementary pedagogy exam' },
  'praxis-plt-grades-5-9-5623':          { v: 30000,   src: 'estimate', note: 'PLT 5-9' },
  'praxis-teaching-reading-k-12-5206':   { v: 30000,   src: 'estimate', note: 'Reading specialist / K-12 reading requirement' },
  'microsoft-certified-educator':        { v: 30000,   src: 'estimate', note: 'Microsoft teacher cert' },
  'praxis-physical-education-content-knowledge-5091': { v: 25000, src: 'estimate', note: 'Praxis subject exam' },
  'praxis-english-language-arts-content-and-analysis-5039': { v: 25000, src: 'estimate', note: 'Praxis subject exam' },
  'praxis-english-language-arts-content-knowledge-5038': { v: 25000, src: 'estimate', note: 'Praxis subject exam' },
  'praxis-special-education-learning-disabilities-5383': { v: 20000, src: 'estimate', note: 'Praxis special-ed subject exam' },
  'praxis-health-education-5551':        { v: 15000,   src: 'estimate', note: 'Praxis subject exam' },
  'praxis-middle-school-mathematics-5164': { v: 15000, src: 'estimate', note: 'Praxis middle-school subject exam' },
  'praxis-school-counselor-5422':        { v: 15000,   src: 'estimate', note: 'Praxis school-counselor exam' },
  'praxis-english-to-speakers-of-other-languages-5362': { v: 15000, src: 'estimate', note: 'ESL licensure — growing demand' },
  'praxis-music-content-knowledge-5113': { v: 12000,   src: 'estimate', note: 'Praxis subject exam' },
  'praxis-middle-school-english-language-arts-5047': { v: 12000, src: 'estimate', note: 'Praxis subject exam' },
  'praxis-educational-leadership-administration-and-supervision-5412': { v: 12000, src: 'estimate', note: 'Principal/administrator licensure' },
  'praxis-algebra-i-5162':               { v: 10000,   src: 'estimate', note: 'Praxis subject exam' },
  'praxis-general-science-5436':         { v: 10000,   src: 'estimate', note: 'Praxis subject exam' },
  'praxis-middle-school-science-5442':   { v: 10000,   src: 'estimate', note: 'Praxis subject exam' },
  'praxis-middle-school-social-studies-5089': { v: 10000, src: 'estimate', note: 'Praxis subject exam' },
  'praxis-biology-5236':                 { v: 8000,    src: 'estimate', note: 'Praxis subject exam' },
  'praxis-geometry-5163':                { v: 8000,    src: 'estimate', note: 'Praxis subject exam' },
  'praxis-reading-specialist-5302':      { v: 8000,    src: 'estimate', note: 'Praxis subject exam' },
  'praxis-school-psychologist-5403':     { v: 6000,    src: 'estimate', note: 'Praxis subject exam' },
  'praxis-chemistry-5246':               { v: 5000,    src: 'estimate', note: 'Praxis subject exam' },
  'praxis-economics-5911':               { v: 5000,    src: 'estimate', note: 'Praxis subject exam' },
  'praxis-geography-5921':               { v: 5000,    src: 'estimate', note: 'Praxis subject exam' },
  'praxis-government-political-science-5931': { v: 5000, src: 'estimate', note: 'Praxis subject exam' },
  'praxis-physics-5266':                 { v: 4000,    src: 'estimate', note: 'Praxis subject exam' },

  // ═══ fitness-recreation (21) ═══════════════════════════════════════
  'padi-open-water-diver':               { v: 800000,  src: 'estimate', note: 'PADI is the largest dive-training organisation; OW is its entry course' },
  'american-red-cross-lifeguarding':     { v: 300000,  src: 'estimate', note: 'Red Cross lifeguarding is the dominant US lifeguard certification' },
  'acsm-certified-personal-trainer':     { v: 70000,   src: 'estimate', note: 'ACSM CPT — major personal-training cert' },
  'issa-certified-personal-trainer':     { v: 60000,   src: 'estimate', note: 'ISSA CPT — major personal-training cert' },
  'yoga-alliance-ryt-200':               { v: 60000,   src: 'estimate', note: 'RYT 200 is the standard registered-yoga-teacher credential' },
  'padi-divemaster':                     { v: 60000,   src: 'estimate', note: 'PADI divemaster — first professional dive tier' },
  'nic-esthetics-theory':                { v: 52000,   src: 'estimate', note: 'NIC esthetics theory — state licensing exam' },
  'nic-nail-technology-theory':          { v: 42000,   src: 'estimate', note: 'NIC nail-technology theory — state licensing exam' },
  'american-red-cross-lifeguard-instructor': { v: 40000, src: 'estimate', note: 'Lifeguard instructor certification' },
  'nic-barber-theory':                   { v: 36000,   src: 'estimate', note: 'NIC barber theory — state licensing exam' },
  'nic-barber-practical':                { v: 36000,   src: 'estimate', note: 'NIC barber practical — state licensing exam' },
  'afaa-group-fitness-instructor':       { v: 30000,   src: 'estimate', note: 'AFAA group fitness cert' },
  'crossfit-level-1-trainer':            { v: 30000,   src: 'estimate', note: 'CrossFit L1 is the entry trainer credential' },
  'nra-range-safety-officer':            { v: 30000,   src: 'estimate', note: 'NRA RSO — common club/range requirement' },
  'precision-nutrition-level-1':         { v: 30000,   src: 'estimate', note: 'PN L1 nutrition coaching cert' },
  'nsca-cscs':                           { v: 25000,   src: 'estimate', note: 'NSCA CSCS — strength & conditioning gold standard' },
  'nasm-performance-enhancement-specialist': { v: 20000, src: 'estimate', note: 'NASM PES specialisation' },
  'nsca-certified-personal-trainer':     { v: 20000,   src: 'estimate', note: 'NSCA CPT' },
  'padi-instructor-development-course':  { v: 15000,   src: 'estimate', note: 'PADI IDC — instructor tier' },
  'nra-chief-range-safety-officer':      { v: 10000,   src: 'estimate', note: 'NRA CRSO — senior range officer' },
  'nsca-certified-special-population-specialist': { v: 6000, src: 'estimate', note: 'NSCA CSPS specialisation' },

  // ═══ trades (19) ═══════════════════════════════════════════════════
  'nccer-core-curriculum':               { v: 200000,  src: 'estimate', note: 'NCCER Core is the gateway module for every craft pathway' },
  'epa-609-mvac-certification':          { v: 100000,  src: 'estimate', note: 'Federally required for motor-vehicle A/C work — mandatory-cert query' },
  'nccer-electrician':                   { v: 80000,   src: 'estimate', note: 'Largest NCCER craft pathway' },
  'nccer-welding':                       { v: 70000,   src: 'estimate', note: 'High-volume NCCER craft pathway' },
  'nccer-plumbing':                      { v: 70000,   src: 'estimate', note: 'High-volume NCCER craft pathway' },
  'nccer-hvac':                          { v: 70000,   src: 'estimate', note: 'High-volume NCCER craft pathway' },
  'aws-certified-welder':                { v: 60000,   src: 'estimate', note: 'AWS welder performance qualification' },
  'pe-civil':                            { v: 60000,   src: 'estimate', note: 'PE Civil — largest PE discipline' },
  'nccer-carpenter':                     { v: 40000,   src: 'estimate', note: 'NCCER craft pathway' },
  'hvac-excellence-employment-ready':    { v: 30000,   src: 'estimate', note: 'EPA 608 + employment-ready HVAC credential' },
  'nccer-electrical':                    { v: 30000,   src: 'estimate', note: 'NCCER electrical level series (distinct from the Electrician pathway slug)' },
  'nccer-pipefitting':                   { v: 25000,   src: 'estimate', note: 'NCCER craft pathway' },
  'nccer-heavy-equipment-operator':      { v: 25000,   src: 'estimate', note: 'NCCER craft pathway' },
  'nccer-masonry':                       { v: 20000,   src: 'estimate', note: 'NCCER craft pathway' },
  'nccer-concrete-finisher':             { v: 15000,   src: 'estimate', note: 'NCCER craft pathway' },
  'nccer-crane-operator':                { v: 15000,   src: 'estimate', note: 'NCCER craft pathway' },
  'icc-residential-building-inspector':  { v: 15000,   src: 'estimate', note: 'ICC residential inspector certification' },
  'ase-xev-level-1-electrical-safety':   { v: 10000,   src: 'estimate', note: 'ASE EV safety certification' },
  'nccer-scaffolding':                   { v: 10000,   src: 'estimate', note: 'NCCER scaffold-builder module' },

  // ═══ project-business (16) ═════════════════════════════════════════
  'google-analytics-certification':      { v: 100000,  src: 'estimate', note: 'Google Analytics certification — very widely taken by marketers' },
  'scrum-org-psm-i':                     { v: 60000,   src: 'estimate', note: 'Professional Scrum Master I — very high global volume' },
  'hubspot-inbound-marketing-certification': { v: 60000, src: 'estimate', note: 'HubSpot Inbound Marketing — flagship HubSpot cert (same credential as hubspot-inbound-certification; near-duplicate slug pair)' },
  'hrci-phr':                            { v: 50000,   src: 'estimate', note: 'HRCI PHR — popular HR certification' },
  'scrum-org-pspo-i':                    { v: 40000,   src: 'estimate', note: 'Professional Scrum Product Owner I' },
  'hubspot-content-marketing-certification': { v: 40000, src: 'estimate', note: 'HubSpot content-marketing cert' },
  'safe-scrum-master':                   { v: 30000,   src: 'estimate', note: 'SAFe Scrum Master' },
  'hrci-sphr':                           { v: 30000,   src: 'estimate', note: 'HRCI SPHR — senior HR certification' },
  'shrm-scp':                            { v: 30000,   src: 'estimate', note: 'SHRM-SCP — senior HR certification' },
  'safe-agilist':                        { v: 25000,   src: 'estimate', note: 'SAFe Agilist' },
  'asq-certified-six-sigma-green-belt':  { v: 25000,   src: 'estimate', note: 'ASQ CSSGB — entry six-sigma cert' },
  'prince2-practitioner':                { v: 20000,   src: 'estimate', note: 'PRINCE2 Practitioner' },
  'safe-agile-product-manager':          { v: 15000,   src: 'estimate', note: 'SAFe Agile Product Manager' },
  'safe-architect':                      { v: 15000,   src: 'estimate', note: 'SAFe Architect' },
  'asq-certified-six-sigma-black-belt':  { v: 15000,   src: 'estimate', note: 'ASQ CSSBB' },
  'asq-certified-quality-engineer':      { v: 10000,   src: 'estimate', note: 'ASQ CQE' },

  // ═══ food-hospitality (14) ═════════════════════════════════════════
  'servsafe-food-handler':               { v: 1000000, src: 'published', note: 'National Restaurant Association: ServSafe Food Handler is the highest-volume food-safety credential in the US' },
  'servsafe-alcohol-primary':            { v: 200000,  src: 'estimate', note: 'ServSafe Alcohol is the dominant responsible-service programme' },
  'learn2serve-alcohol-seller-server':   { v: 150000,  src: 'estimate', note: 'Major online alcohol-server certification provider' },
  'servsafe-workplace':                  { v: 100000,  src: 'estimate', note: 'ServSafe Workplace all-staff food-safety training' },
  'statefoodsafety-food-protection-manager': { v: 90000, src: 'estimate', note: 'Third-party Certified Food Protection Manager provider' },
  'servsafe-allergens':                  { v: 50000,   src: 'estimate', note: 'ServSafe allergen awareness' },
  'wset-level-2-award-wines':            { v: 30000,   src: 'estimate', note: 'WSET Level 2 — largest WSET qualification' },
  'cicerone-certified-beer-server':      { v: 25000,   src: 'estimate', note: 'Cicerone Certified Beer Server — entry beer cert' },
  'wset-level-1-award-wines':            { v: 20000,   src: 'estimate', note: 'WSET Level 1 wine award' },
  'wset-level-3-award-wines':            { v: 15000,   src: 'estimate', note: 'WSET Level 3 advanced wine award' },
  'acf-certified-fundamentals-cook':     { v: 8000,    src: 'estimate', note: 'ACF entry culinary certification' },
  'neha-certified-professional-food-safety': { v: 6000, src: 'estimate', note: 'NEHA CP-FS — professional food-safety credential' },
  'sca-coffee-skills-professional-diploma': { v: 5000, src: 'estimate', note: 'Specialty Coffee Association professional diploma' },
  'cicerone-certified-cicerone':         { v: 3000,    src: 'estimate', note: 'Advanced Cicerone tier — small volume' },

  // ═══ public-safety (12) ════════════════════════════════════════════
  'nims-ics-700':                        { v: 400000,  src: 'estimate', note: 'FEMA ICS-700 (NIMS intro) is required for a very wide federal/grant-funded workforce' },
  'nims-ics-200':                        { v: 300000,  src: 'estimate', note: 'ICS-200 is the standard single-resource/initial-IC prerequisite' },
  'nims-ics-800':                        { v: 200000,  src: 'estimate', note: 'ICS-800 (NRF) required alongside ICS-700' },
  'law-enforcement-pat':                 { v: 150000,  src: 'estimate', note: 'Police aptitude/POST-style entry testing is taken by a very large applicant pool' },
  'post-entry-level':                    { v: 120000,  src: 'estimate', note: 'Entry-level law-enforcement selection testing' },
  'nims-ics-300':                        { v: 100000,  src: 'estimate', note: 'ICS-300 intermediate — supervisory requirement' },
  'nyc-dcas-exam':                       { v: 100000,  src: 'estimate', note: 'NYC civil-service exams draw six-figure applicant pools' },
  'nims-ics-400':                        { v: 60000,   src: 'estimate', note: 'ICS-400 advanced incident command' },
  'usps-vea-475':                        { v: 40000,   src: 'estimate', note: 'USPS Virtual Entry Assessment — one of four role-specific tracks' },
  'usps-vea-476':                        { v: 40000,   src: 'estimate', note: 'USPS Virtual Entry Assessment track' },
  'usps-vea-477':                        { v: 40000,   src: 'estimate', note: 'USPS Virtual Entry Assessment track' },
  'iaed-emd':                            { v: 20000,   src: 'estimate', note: 'IAED emergency medical dispatcher certification' },

  // ═══ transportation (12) ═══════════════════════════════════════════
  'faa-trust-recreational-uas-safety-test': { v: 200000, src: 'published', note: 'FAA: TRUST is required for essentially every recreational drone flyer' },
  'cdl-pre-trip-vehicle-inspection-test': { v: 100000, src: 'estimate', note: 'Pre-trip inspection is part of every CDL skills test' },
  'nasbla-approved-boating-safety-course': { v: 100000, src: 'estimate', note: 'Mandatory boater-education states make this a large-volume requirement' },
  'faa-part-107-recurrent-training-alc-677': { v: 60000, src: 'estimate', note: 'Part 107 recurrent training is required every 24 months for all remote pilots' },
  'cdl-passenger-endorsement-knowledge-test': { v: 60000, src: 'estimate', note: 'Passenger endorsement for bus/transit drivers' },
  'fcc-amateur-technician-class-license': { v: 25000, src: 'estimate', note: 'Entry amateur-radio licence' },
  'faa-par-private-pilot-airplane':      { v: 25000,   src: 'estimate', note: 'FAA private pilot — largest pilot-certificate volume' },
  'faa-ira-instrument-rating-airplane':  { v: 20000,   src: 'estimate', note: 'Instrument rating — standard post-PPL step' },
  'faa-cax-commercial-pilot-airplane':   { v: 15000,   src: 'estimate', note: 'Commercial pilot certificate' },
  'imsa-work-zone-traffic-control-safety': { v: 15000, src: 'estimate', note: 'Work-zone traffic-control certification' },
  'fcc-amateur-general-class-license':   { v: 10000,   src: 'estimate', note: 'General amateur-radio licence' },
  'faa-atm-atp-multiengine-airplane':    { v: 8000,    src: 'estimate', note: 'ATP multi-engine — airline-track certificate' },

  // ═══ finance-securities (9) ════════════════════════════════════════
  'frm-part-1':                          { v: 30000,   src: 'estimate', note: 'GARP FRM Part I — large global risk-certification volume' },
  'chartered-life-underwriter':          { v: 25000,   src: 'estimate', note: 'The American College CLU' },
  'frm-part-2':                          { v: 20000,   src: 'estimate', note: 'GARP FRM Part II' },
  'series-79':                           { v: 20000,   src: 'estimate', note: 'FINRA Series 79 — investment-banking representative' },
  'series-24':                           { v: 15000,   src: 'estimate', note: 'FINRA Series 24 — principal/ supervisory' },
  'series-4':                            { v: 12000,   src: 'estimate', note: 'FINRA Series 4 — options principal' },
  'series-9':                            { v: 8000,    src: 'estimate', note: 'FINRA Series 9 — options sales supervisor' },
  'series-99':                           { v: 5000,    src: 'estimate', note: 'FINRA Series 99 — operations professional' },
  'mba-accredited-mortgage-professional': { v: 5000,   src: 'estimate', note: 'MBA AMP — specialist mortgage credential' },

  // ═══ workplace-safety (9) ══════════════════════════════════════════
  'hazwoper-8-hour-refresher':           { v: 150000,  src: 'estimate', note: 'Annual HAZWOPER refresher is a recurring requirement for a large workforce' },
  'hazwoper-40-hour':                    { v: 100000,  src: 'estimate', note: '40-hour HAZWOPER for general-site hazardous-waste workers' },
  'hazwoper-24-hour':                    { v: 60000,   src: 'estimate', note: '24-hour HAZWOPER for occasional-site workers' },
  'nfpa-70e-electrical-safety-training': { v: 60000,   src: 'estimate', note: 'Arc-flash/electrical-safety training required by OSHA-aligned employers' },
  'pesticide-applicator-core-exam':      { v: 60000,   src: 'estimate', note: 'Core applicator exam is the gateway to every state pesticide licence' },
  'osha-10-maritime':                    { v: 40000,   src: 'estimate', note: 'OSHA 10-hour maritime outreach' },
  'osha-3115-fall-protection':           { v: 30000,   src: 'estimate', note: 'Fall protection is the most-cited OSHA standard — big training demand' },
  'osha-510-construction-standards':     { v: 20000,   src: 'estimate', note: 'Trainer course for OSHA 10/30 construction' },
  'osha-511-general-industry-standards': { v: 15000,   src: 'estimate', note: 'Trainer course for OSHA 10/30 general industry' },

  // ═══ insurance (6) ═════════════════════════════════════════════════
  'associate-in-insurance':              { v: 40000,   src: 'estimate', note: 'The Institutes AINS — broad insurance foundation credential' },
  'cpcu-500':                            { v: 15000,   src: 'estimate', note: 'CPCU 500 — first CPCU exam' },
  'certified-insurance-service-representative': { v: 15000, src: 'estimate', note: 'CISR — very common agency-staff designation' },
  'ahip-managed-healthcare-professional': { v: 10000, src: 'estimate', note: 'AHIP managed-healthcare certification' },
  'certified-insurance-counselor':       { v: 10000,   src: 'estimate', note: 'CIC — agency-principal designation' },
  'cpcu-designation':                    { v: 8000,    src: 'estimate', note: 'Full CPCU designation programme' },

  // ═══ healthcare-clinical (5) ═══════════════════════════════════════
  'usmle-step-2-ck':                     { v: 35000,   src: 'estimate', note: 'NBME/FSMB: Step 2 CK is taken by essentially every US medical graduate' },
  'usmle-step-3':                        { v: 30000,   src: 'estimate', note: 'Final USMLE step, taken in residency' },
  'ancc-fnp':                            { v: 15000,   src: 'estimate', note: 'Family nurse practitioner certification — largest NP credential' },
  'npte-pta':                            { v: 15000,   src: 'estimate', note: 'Physical therapist assistant licensure exam' },
  'asha-ccc-slp':                        { v: 12000,   src: 'estimate', note: 'Speech-language pathology certification' },

  // ═══ accounting (4) ════════════════════════════════════════════════
  'cia-part-1':                          { v: 25000,   src: 'estimate', note: 'IIA CIA Part 1 — internal-audit cert' },
  'cma-part-1':                          { v: 25000,   src: 'estimate', note: 'IMA CMA Part 1' },
  'cfe-exam':                            { v: 20000,   src: 'estimate', note: 'ACFE Certified Fraud Examiner' },
  'cma-part-2':                          { v: 20000,   src: 'estimate', note: 'IMA CMA Part 2' },

  // ═══ small categories ══════════════════════════════════════════════
  'nna-certified-notary-signing-agent':  { v: 40000,   src: 'estimate', note: 'Notary signing agent — common side credential' },
  'notary-signing-agent':                { v: 40000,   src: 'estimate', note: 'Near-duplicate of nna-certified-notary-signing-agent — the two must not ship together' },
  'navta-approved-veterinary-assistant': { v: 20000,   src: 'estimate', note: 'Veterinary assistant — common entry vet credential' }
};

const DEFAULT_V = 3000; // explicit floor for the long tail — never a guess upward

// ── Family map + per-batch caps ─────────────────────────────────────
// Family = the content-similarity cluster. The cap keeps a single batch from
// being dominated by sibling pages that differ only by exam code.
const FAMILY_RULES = [
  [/^ap-/, 'AP', 5],
  [/^clep-/, 'CLEP', 3],
  [/^accuplacer-/, 'ACCUPLACER', 3],
  [/^(psat|preact|sat|act)-/, 'PSAT-ACT', 3],
  [/^nims-ics-/, 'NIMS', 3],
  [/^nccer-/, 'NCCER', 4],
  [/^arrt-/, 'ARRT', 3],
  [/^praxis-/, 'PRAXIS', 4],
  [/^google-certified-educator|^microsoft-certified-educator/, 'EDTECH', 2],
  [/^microsoft-office-specialist/, 'MOS', 3],
  [/^microsoft-/, 'MICROSOFT', 4],
  [/^aws-/, 'AWS', 4],
  [/^cisco-/, 'CISCO', 3],
  [/^comptia-/, 'COMPTIA', 3],
  [/^google-/, 'GOOGLE', 3],
  [/^salesforce-/, 'SALESFORCE', 2],
  [/^itil-/, 'ITIL', 2],
  [/^isc2-/, 'ISC2', 2],
  [/^isaca-/, 'ISACA', 2],
  [/^hashicorp-/, 'HASHICORP', 2],
  [/^lpi/, 'LPI', 2],
  [/^python-institute-/, 'PYTHON', 2],
  [/^tableau-/, 'TABLEAU', 2],
  [/^oracle-/, 'ORACLE', 1],
  [/^hubspot-inbound/, 'HUBSPOT-INBOUND', 1],   // two slugs, one credential
  [/^hubspot-/, 'HUBSPOT', 2],
  [/^docker-|^certified-kubernetes|^kubernetes-/, 'K8S', 2],
  [/^servsafe-/, 'SERVSAFE', 3],
  [/^wset-/, 'WSET', 2],
  [/^usps-vea-/, 'USPS', 2],
  [/^cdl-/, 'CDL', 2],
  [/^faa-/, 'FAA', 4],
  [/^fcc-/, 'FCC', 2],
  [/^safe-/, 'SAFE', 2],
  [/^scrum-/, 'SCRUM', 2],
  [/^hrci-|^shrm-/, 'HR', 2],
  [/^asq-/, 'ASQ', 2],
  [/^hazwoper-/, 'HAZWOPER', 2],
  [/^osha-/, 'OSHA', 3],
  [/^cpcu-|^associate-in-|^certified-insurance-|^ahip-/, 'INSURANCE', 2],
  [/^usmle-/, 'USMLE', 2],
  [/^cma-part|^cia-part|^cfe-exam/, 'ACCOUNTING', 2],
  [/^series-|^sie-/, 'FINRA', 2],
  [/^frm-/, 'GARP', 1],
  [/^nic-/, 'NIC', 3],
  [/^padi-/, 'PADI', 2],
  [/^nra-/, 'NRA', 2],
  [/^(nsca|nasm|ace|acsm|issa|afaa)-/, 'FITNESS-CERT', 3],
  [/^american-red-cross-/, 'REDCROSS', 2],
  [/^praxis-/, 'PRAXIS', 4],
  [/^ptcb-/, 'PTCB', 2],
  [/^nha-/, 'NHA', 2],
  [/^ncct-/, 'NCCT', 2],
  [/^danb-/, 'DANB', 2],
  [/^bcen-/, 'BCEN', 2],
  [/^nremt-/, 'NREMT', 2],
  [/^ahima-/, 'AHIMA', 2],
  [/^cicerone-/, 'CICERONE', 2],
  [/^notary-signing-agent$|^nna-/, 'NOTARY-NSA', 1]  // near-duplicate pair → ship one
];
const DEFAULT_CAP = 1;

function familyOf(slug) {
  for (const [re, key, cap] of FAMILY_RULES) {
    if (re.test(slug)) return { key, cap };
  }
  return { key: 'solo:' + slug, cap: DEFAULT_CAP };
}

const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
const heatOf = (v) => clamp(Math.round(45 + 12 * Math.log10(v / 1000)), 10, 100);

// ── Build the ranked pool ───────────────────────────────────────────
const pool = allExamsFull.filter((e) => !done.has(e.slug) && e.record && examDepth[e.slug]);

const missing = [];
const ranked = pool.map((e) => {
  const entry = VOL[e.slug];
  if (!entry) missing.push(e.slug);
  const v = entry ? entry.v : DEFAULT_V;
  const fam = familyOf(e.slug);
  return {
    slug: e.slug,
    name: e.name,
    category: e.category,
    v,
    heat: heatOf(v),
    src: entry ? entry.src : 'default',
    note: entry ? entry.note : 'not in the curated map — floored to the default long-tail volume',
    family: fam.key,
    cap: fam.cap
  };
}).sort((a, b) => b.heat - a.heat || b.v - a.v || a.slug.localeCompare(b.slug));

// ── Greedy pick with family caps ────────────────────────────────────
const N = 55;
const picked = [];
const famCount = {};
for (const r of ranked) {
  if (picked.length >= N) break;
  const used = famCount[r.family] || 0;
  if (used >= r.cap) continue;
  famCount[r.family] = used + 1;
  picked.push(r);
}

// ── Report ──────────────────────────────────────────────────────────
console.log(`Pool: ${pool.length} unreleased indexable pages.`);
console.log(`Named in the volume model: ${ranked.length - missing.length}; floored to default: ${missing.length}`);
if (missing.length) console.log('  floored slugs: ' + missing.join(' '));

console.log(`\n=== TOP 80 BY HEAT (cap applied when picking) ===`);
ranked.slice(0, 80).forEach((r, i) => {
  const mark = picked.includes(r) ? '✔' : ' ';
  console.log(`${mark} ${String(i + 1).padStart(2)}. heat=${String(r.heat).padStart(3)} vol≈${String(r.v).padStart(8)} [${r.src.padEnd(9)}] ${r.family.padEnd(14)} ${r.slug}`);
});

console.log(`\n=== PICKED ${picked.length} ===`);
picked.forEach((r, i) => {
  console.log(`${String(i + 1).padStart(2)}. heat=${String(r.heat).padStart(3)} vol≈${String(r.v).padStart(8)} ${r.category.padEnd(22)} ${r.slug}`);
});

const catCount = {};
for (const r of picked) catCount[r.category] = (catCount[r.category] || 0) + 1;
console.log('\nPicked by category:');
Object.entries(catCount).sort((a, b) => b[1] - a[1]).forEach(([c, n]) => console.log(`  ${c}: ${n}`));

writeFileSync('./_batch55_picks.json', JSON.stringify(
  picked.map((r, i) => ({ rank: i + 1, slug: r.slug, name: r.name, category: r.category, heat: r.heat, vol: r.v, src: r.src, family: r.family, note: r.note })),
  null, 2
));
console.log('\nWrote _batch55_picks.json');
