// Batch 7+8 heat ranking: exams ranked 201-300 by estimated annual candidate volume.
import { allExamsFull } from './src/data/examCatalog/index.mjs';
import { readdirSync, writeFileSync } from 'node:fs';

const done = new Set(
  readdirSync('src/data/examCatalog/depth').filter((f) => f.endsWith('.mjs') && f !== 'index.mjs').map((f) => f.replace(/\.mjs$/, ''))
);

const VOL = {
  // High school equivalency — hundreds of thousands of test-takers
  'ged-test': { v: 400000, src: 'estimate', note: 'GED Testing Service reports ~400k test events per year' },
  'hiset-exam': { v: 150000, src: 'estimate', note: 'HiSET is the second major HSE pathway' },
  // AP exams — hundreds of thousands of administrations per subject
  'ap-english-language-and-composition': { v: 550000, src: 'estimate', note: 'One of the most-taken AP exams' },
  'ap-united-states-history': { v: 450000, src: 'estimate', note: 'One of the most-taken AP exams' },
  'ap-psychology': { v: 400000, src: 'estimate', note: 'One of the most-taken AP exams' },
  'ap-calculus-ab': { v: 270000, src: 'estimate', note: 'The most-taken AP math exam' },
  'ap-biology': { v: 250000, src: 'estimate', note: 'One of the most-taken AP exams' },
  'ap-english-literature-and-composition': { v: 300000, src: 'estimate', note: 'One of the most-taken AP exams' },
  'ap-world-history-modern': { v: 400000, src: 'estimate', note: 'One of the most-taken AP exams' },
  'ap-united-states-government-and-politics': { v: 300000, src: 'estimate', note: 'One of the most-taken AP exams' },
  'ap-statistics': { v: 240000, src: 'estimate', note: 'One of the most-taken AP exams' },
  'ap-human-geography': { v: 250000, src: 'estimate', note: 'One of the most-taken AP exams' },
  'ap-environmental-science': { v: 200000, src: 'estimate', note: 'One of the most-taken AP exams' },
  'ap-macroeconomics': { v: 170000, src: 'estimate', note: 'One of the most-taken AP exams' },
  'ap-chemistry': { v: 160000, src: 'estimate', note: 'One of the most-taken AP exams' },
  'ap-physics-1-algebra-based': { v: 160000, src: 'estimate', note: 'One of the most-taken AP exams' },
  'ap-microeconomics': { v: 140000, src: 'estimate', note: 'One of the most-taken AP exams' },
  'ap-spanish-language-and-culture': { v: 150000, src: 'estimate', note: 'One of the most-taken AP exams' },
  'ap-precalculus': { v: 100000, src: 'estimate', note: 'A growing AP exam' },
  'ap-computer-science-principles': { v: 170000, src: 'estimate', note: 'One of the most-taken AP exams' },
  'ap-european-history': { v: 110000, src: 'estimate', note: 'A major AP exam' },
  'ap-computer-science-a': { v: 90000, src: 'estimate', note: 'A major AP exam' },
  // ACCUPLACER subtests — millions of administrations
  'accuplacer-reading': { v: 2000000, src: 'estimate', note: 'Reading placement subtest' },
  'accuplacer-arithmetic': { v: 2000000, src: 'estimate', note: 'Arithmetic placement subtest' },
  'accuplacer-quantitative-reasoning-algebra-statistics': { v: 1500000, src: 'estimate', note: 'QAS placement subtest' },
  'accuplacer-writeplacer': { v: 1000000, src: 'estimate', note: 'Essay placement subtest' },
  'accuplacer-writing': { v: 1000000, src: 'estimate', note: 'Writing placement subtest' },
  // CLEP — hundreds of thousands of exams per year
  'clep-introductory-psychology': { v: 100000, src: 'estimate', note: 'The most-taken CLEP exam' },
  'clep-college-algebra': { v: 60000, src: 'estimate', note: 'A major CLEP exam' },
  'clep-calculus': { v: 40000, src: 'estimate', note: 'A major CLEP exam' },
  'clep-biology': { v: 50000, src: 'estimate', note: 'A major CLEP exam' },
  'clep-history-of-the-united-states-i': { v: 45000, src: 'estimate', note: 'A major CLEP exam' },
  'clep-principles-of-macroeconomics': { v: 40000, src: 'estimate', note: 'A major CLEP exam' },
  // CDL endorsements & skills tests
  'cdl-pre-trip-vehicle-inspection-test': { v: 200000, src: 'estimate', note: 'The pre-trip skills inspection, part of the CDL skills test' },
  'cdl-hazmat-endorsement-knowledge-test': { v: 100000, src: 'estimate', note: 'Hazmat endorsement, requires TSA background check' },
  'cdl-on-road-driving-skills-test': { v: 200000, src: 'estimate', note: 'The on-road portion of the CDL skills test' },
  'cdl-passenger-endorsement-knowledge-test': { v: 50000, src: 'estimate', note: 'Passenger endorsement for bus drivers' },
  'cdl-school-bus-endorsement-knowledge-test': { v: 50000, src: 'estimate', note: 'School bus endorsement' },
  'cdl-tank-vehicle-endorsement-knowledge-test': { v: 50000, src: 'estimate', note: 'Tank vehicle endorsement' },
  // FAA
  'faa-par-private-pilot-airplane': { v: 80000, src: 'estimate', note: 'The private pilot knowledge test, the most-taken FAA exam' },
  'faa-ira-instrument-rating-airplane': { v: 30000, src: 'estimate', note: 'Instrument rating knowledge test' },
  'faa-cax-commercial-pilot-airplane': { v: 15000, src: 'estimate', note: 'Commercial pilot knowledge test' },
  'faa-air-traffic-controller': { v: 20000, src: 'estimate', note: 'AT-SA exam for ATC candidates' },
  'faa-atm-atp-multiengine-airplane': { v: 10000, src: 'estimate', note: 'ATP multiengine knowledge test' },
  'faa-agi-ground-instructor-advanced': { v: 5000, src: 'estimate', note: 'Advanced ground instructor test' },
  // Public safety
  'corrections-officer-entrance-exam': { v: 50000, src: 'estimate', note: 'Corrections officer hiring exams nationwide' },
  'post-entry-level': { v: 50000, src: 'estimate', note: 'POST entry-level law enforcement test' },
  'nypd-police-officer-exam': { v: 30000, src: 'estimate', note: 'NYPD officer exam cycles draw tens of thousands' },
  'pro-board-firefighter-i': { v: 50000, src: 'estimate', note: 'Pro Board firefighter I certification' },
  'faa-air-traffic-controller': { v: 20000, src: 'estimate', note: 'AT-SA exam' },
  // EPA / trades
  'epa-608-universal': { v: 50000, src: 'estimate', note: 'Universal refrigerant certification' },
  'ase-a8-engine-performance': { v: 20000, src: 'estimate', note: 'ASE A8 engine performance test' },
  'nccer-core-curriculum': { v: 10000, src: 'estimate', note: 'NCCER core curriculum' },
  'icc-residential-building-inspector': { v: 10000, src: 'estimate', note: 'ICC residential building inspector' },
  'nra-chief-range-safety-officer': { v: 5000, src: 'estimate', note: 'Chief RSO certification' },
  'hvac-excellence-employment-ready': { v: 10000, src: 'estimate', note: 'HVAC Excellence entry certification' },
  // Wine & beverage
  'wset-level-3-award-wines': { v: 40000, src: 'estimate', note: 'WSET Level 3 is the sommelier-track standard' },
  'cicerone-certified-cicerone': { v: 10000, src: 'estimate', note: 'The professional cicerone credential' },
  'cms-introductory-sommelier': { v: 10000, src: 'estimate', note: 'Court of Master Sommeliers entry exam' },
  'acf-certified-fundamentals-cook': { v: 5000, src: 'estimate', note: 'ACF fundamentals cook certification' },
  'learn2serve-alcohol-seller-server': { v: 100000, src: 'estimate', note: 'Responsible alcohol seller-server training' },
  'tips-alcohol-certification': { v: 100000, src: 'estimate', note: 'TIPS alcohol training' },
  'servsafe-workplace': { v: 50000, src: 'estimate', note: 'Workplace safety training' },
  // IT
  'hashicorp-certified-terraform-associate': { v: 30000, src: 'estimate', note: 'The most-taken IaC certification' },
  'microsoft-dp-300': { v: 15000, src: 'estimate', note: 'Azure Database Administrator Associate' },
  'microsoft-pl-200': { v: 15000, src: 'estimate', note: 'Power Platform Functional Consultant' },
  'microsoft-sc-300': { v: 10000, src: 'estimate', note: 'Identity and Access Administrator' },
  'microsoft-az-800': { v: 10000, src: 'estimate', note: 'Windows Server Hybrid Administrator' },
  'microsoft-mb-210': { v: 10000, src: 'estimate', note: 'Dynamics 365 Sales Functional Consultant' },
  'microsoft-mb-230': { v: 10000, src: 'estimate', note: 'Dynamics 365 Customer Service Functional Consultant' },
  'microsoft-ms-721': { v: 10000, src: 'estimate', note: 'Teams Voice Engineer Expert' },
  'microsoft-ai-300': { v: 8000, src: 'estimate', note: 'Azure AI Solution Architect' },
  'microsoft-office-specialist-excel-expert': { v: 40000, src: 'estimate', note: 'MOS Excel Expert, one of the most-taken Office certs' },
  'microsoft-office-specialist-word-expert': { v: 20000, src: 'estimate', note: 'MOS Word Expert' },
  'microsoft-office-specialist-powerpoint-associate': { v: 30000, src: 'estimate', note: 'MOS PowerPoint Associate' },
  'microsoft-office-specialist-outlook-associate': { v: 15000, src: 'estimate', note: 'MOS Outlook Associate' },
  'salesforce-advanced-administrator': { v: 15000, src: 'estimate', note: 'The second-most-taken Salesforce certification' },
  'salesforce-business-analyst': { v: 15000, src: 'estimate', note: 'A heavily-taken Salesforce certification' },
  'salesforce-sales-cloud-consultant': { v: 10000, src: 'estimate', note: 'A major Salesforce consultant certification' },
  'salesforce-service-cloud-consultant': { v: 10000, src: 'estimate', note: 'A major Salesforce consultant certification' },
  'salesforce-platform-developer-ii': { v: 8000, src: 'estimate', note: 'The advanced developer certification' },
  'aws-certified-database-specialty': { v: 5000, src: 'estimate', note: 'AWS database specialty' },
  'aws-certified-data-analytics-specialty': { v: 5000, src: 'estimate', note: 'AWS data analytics specialty' },
  'aws-certified-advanced-networking-specialty': { v: 5000, src: 'estimate', note: 'AWS advanced networking specialty' },
  'aws-certified-generative-ai-developer-professional': { v: 8000, src: 'estimate', note: 'AWS generative AI developer' },
  'oracle-oci-foundations-associate': { v: 20000, src: 'estimate', note: 'OCI foundations, a popular entry cloud cert' },
  'python-institute-pcap': { v: 10000, src: 'estimate', note: 'PCAP Python programming certificate' },
  'lpic-1-system-administrator': { v: 10000, src: 'estimate', note: 'LPIC-1 Linux administrator' },
  'tableau-certified-data-analyst': { v: 10000, src: 'estimate', note: 'Tableau data analyst certification' },
  'itil-4-specialist-high-velocity-it': { v: 5000, src: 'estimate', note: 'ITIL 4 HVIT specialist' },
  'itil-4-specialist-plan-implement-and-control': { v: 5000, src: 'estimate', note: 'ITIL 4 CDS companion specialist' },
  'comptia-data-plus': { v: 5000, src: 'estimate', note: 'CompTIA Data+' },
  'comptia-securityx': { v: 5000, src: 'estimate', note: 'CompTIA SecurityX (CASP successor)' },
  'isc2-csslp': { v: 3000, src: 'estimate', note: 'ISC2 CSSLP secure software lifecycle' },
  'isaca-cgeit': { v: 5000, src: 'estimate', note: 'ISACA CGEIT governance of enterprise IT' },
  'docker-certified-associate': { v: 8000, src: 'estimate', note: 'Docker Certified Associate' },
  'hashicorp-certified-vault-associate': { v: 8000, src: 'estimate', note: 'Vault Associate' },
  'kubernetes-and-cloud-native-associate': { v: 8000, src: 'estimate', note: 'KCNA, the entry Kubernetes cert' },
  'certified-kubernetes-security-specialist': { v: 5000, src: 'estimate', note: 'CKS Kubernetes security specialist' },
  'juniper-jncia-devops': { v: 3000, src: 'estimate', note: 'JNCIA DevOps' },
  // Fitness / recreation
  'afaa-group-fitness-instructor': { v: 15000, src: 'estimate', note: 'AFAA group fitness certification' },
  'nasm-performance-enhancement-specialist': { v: 10000, src: 'estimate', note: 'NASM PES' },
  'american-red-cross-lifeguard-instructor': { v: 5000, src: 'estimate', note: 'Lifeguard instructor certification' },
  'padi-instructor-development-course': { v: 5000, src: 'estimate', note: 'PADI IDC' },
  'nsca-certified-special-population-specialist': { v: 5000, src: 'estimate', note: 'NSCA CSPS' },
  // Insurance / finance
  'cpcu-500': { v: 10000, src: 'estimate', note: 'The CPCU 500 foundations course exam' },
  'associate-in-insurance': { v: 10000, src: 'estimate', note: 'The Institutes AINS designation' },
  'chartered-life-underwriter': { v: 8000, src: 'estimate', note: 'CLU designation' },
  'chartered-financial-consultant': { v: 5000, src: 'estimate', note: 'ChFC designation' },
  'series-24': { v: 10000, src: 'estimate', note: 'FINRA general securities principal' },
  'series-4': { v: 8000, src: 'estimate', note: 'FINRA registered options principal' },
  'series-99': { v: 5000, src: 'estimate', note: 'FINRA operations professional' },
  'ahip-managed-healthcare-professional': { v: 10000, src: 'estimate', note: 'AHIP MHP' },
  'mba-accredited-mortgage-professional': { v: 5000, src: 'estimate', note: 'MBA AMP' },
  'rma-credit-risk-certification': { v: 3000, src: 'estimate', note: 'RMA CRC' },
  // Real estate remaining states (high volume)
  'pennsylvania-real-estate-license': { v: 30000, src: 'estimate', note: 'PA real estate salesperson' },
  'ohio-real-estate-license': { v: 25000, src: 'estimate', note: 'OH real estate salesperson' },
  'georgia-real-estate-license': { v: 25000, src: 'estimate', note: 'GA real estate salesperson' },
  'illinois-real-estate-license': { v: 20000, src: 'estimate', note: 'IL real estate salesperson' },
  'new-york-real-estate-license': { v: 25000, src: 'estimate', note: 'NY real estate salesperson' },
  'massachusetts-real-estate-license': { v: 15000, src: 'estimate', note: 'MA real estate salesperson' },
  'arizona-real-estate-license': { v: 20000, src: 'estimate', note: 'AZ real estate salesperson' },
  'north-carolina-real-estate-license': { v: 20000, src: 'estimate', note: 'NC real estate salesperson' },
  'michigan-real-estate-license': { v: 15000, src: 'estimate', note: 'MI real estate salesperson' },
  'new-jersey-real-estate-license': { v: 15000, src: 'estimate', note: 'NJ real estate salesperson' },
  // Allied health remaining
  'ahima-ccs': { v: 6000, src: 'estimate', note: 'AHIMA CCS coding specialist' },
  'ahima-rhit': { v: 8000, src: 'estimate', note: 'AHIMA RHIT health information technician' },
  'ahima-rhia': { v: 4000, src: 'estimate', note: 'AHIMA RHIA' },
  'arrt-mammography': { v: 8000, src: 'estimate', note: 'ARRT mammography post-primary' },
  'arrt-mri': { v: 5000, src: 'estimate', note: 'ARRT MRI post-primary' },
  'arrt-computed-tomography': { v: 8000, src: 'estimate', note: 'ARRT CT post-primary' },
  'nbstsa-cst': { v: 10000, src: 'estimate', note: 'Certified surgical technologist' },
  'nha-cehrs': { v: 10000, src: 'estimate', note: 'NHA electronic health record specialist' },
  'pharmacy-college-admission-test': { v: 10000, src: 'estimate', note: 'PCAT pharmacy admissions' },
  'jcahpo-coa': { v: 8000, src: 'estimate', note: 'JCAHPO ophthalmic assistant' },
  'ancc-fnp': { v: 8000, src: 'estimate', note: 'ANCC family nurse practitioner' },
  'arrt-vascular-sonography': { v: 5000, src: 'estimate', note: 'ARDMS vascular sonography' },
  'arrt-breast-sonography': { v: 4000, src: 'estimate', note: 'ARDMS breast sonography' },
  // Education remaining
  'praxis-middle-school-mathematics-5164': { v: 20000, src: 'estimate', note: 'Middle school math licensure Praxis' },
  'praxis-social-studies-5081': { v: 25000, src: 'estimate', note: 'Social studies content knowledge Praxis' },
  'praxis-english-language-arts-content-and-analysis-5039': { v: 20000, src: 'estimate', note: 'English content knowledge Praxis' },
  'praxis-biology-5236': { v: 15000, src: 'estimate', note: 'Biology content knowledge Praxis' },
  'praxis-general-science-5436': { v: 10000, src: 'estimate', note: 'General science Praxis' },
  'praxis-chemistry-5246': { v: 8000, src: 'estimate', note: 'Chemistry Praxis' },
  'praxis-school-counselor-5422': { v: 10000, src: 'estimate', note: 'School counselor Praxis' },
  'praxis-reading-specialist-5302': { v: 5000, src: 'estimate', note: 'Reading specialist Praxis' },
  'praxis-special-education-learning-disabilities-5383': { v: 8000, src: 'estimate', note: 'Special ed learning disabilities Praxis' },
  'nes-essential-academic-skills': { v: 20000, src: 'estimate', note: 'NES EAS basic skills test' },
  'google-certified-educator-level-2': { v: 10000, src: 'estimate', note: 'Google educator level 2' },
  'microsoft-innovative-educator': { v: 10000, src: 'estimate', note: 'MIE trainer' },
  // Law enforcement / security
  'law-enforcement-pat': { v: 30000, src: 'estimate', note: 'Law enforcement physical ability test' },
  'fire-inspector-i': { v: 5000, src: 'estimate', note: 'Fire inspector I' },
  'fire-officer-i': { v: 5000, src: 'estimate', note: 'Fire officer I' },
  'nims-ics-400': { v: 50000, src: 'estimate', note: 'Advanced ICS course' },
  'hazwoper-8-hour-supervisor': { v: 30000, src: 'estimate', note: 'Supervisor HAZWOPER' },
  'nfpa-70e-electrical-safety-training': { v: 15000, src: 'estimate', note: 'NFPA 70E training' },
  'osha-3115-fall-protection': { v: 8000, src: 'estimate', note: 'OSHA fall protection' },
  // Home / mortgage
  'notary-signing-agent': { v: 40000, src: 'estimate', note: 'Notary signing agent certification' },
  'home-inspection': { v: 10000, src: 'estimate', note: 'Home inspection certification' }
};

function familyOf(slug) {
  if (/^ged-|^hiset/.test(slug)) return 'HSE';
  if (/^ap-/.test(slug)) return 'AP';
  if (/^accuplacer/.test(slug)) return 'ACCUPLACER';
  if (/^clep-/.test(slug)) return 'CLEP';
  if (/^dsst-/.test(slug)) return 'DSST';
  if (/^cdl-/.test(slug)) return 'CDL';
  if (/^faa-/.test(slug)) return 'FAA';
  if (/corrections|^post-|nypd|law-enforcement|police/.test(slug)) return 'LE';
  if (/firefighter|fire-officer|fire-inspector|fire-investigator|pro-board|ifsac/.test(slug)) return 'Fire';
  if (/^nims-|^fema-/.test(slug)) return 'FEMA';
  if (/^epa-/.test(slug)) return 'EPA';
  if (/^ase-/.test(slug)) return 'ASE';
  if (/^nccer-/.test(slug)) return 'NCCER';
  if (/^icc-/.test(slug)) return 'ICC';
  if (/^nra-/.test(slug)) return 'NRA';
  if (/hvac-excellence|^nate-/.test(slug)) return 'HVAC';
  if (/^wset-/.test(slug)) return 'Wine';
  if (/cicerone|^bjcp/.test(slug)) return 'Cicerone';
  if (/^cms-|sommelier/.test(slug)) return 'Sommelier';
  if (/^acf-/.test(slug)) return 'ACF';
  if (/learn2serve|^tips-/.test(slug)) return 'Alcohol';
  if (/servsafe|statefoodsafety/.test(slug)) return 'FoodSafety';
  if (/^microsoft-/.test(slug)) return 'Microsoft';
  if (/^salesforce-/.test(slug)) return 'Salesforce';
  if (/^aws-/.test(slug)) return 'AWS';
  if (/^google-/.test(slug)) return 'Google';
  if (/^oracle-/.test(slug)) return 'Oracle';
  if (/^python-institute/.test(slug)) return 'Python';
  if (/^lpic-|^lpi-/.test(slug)) return 'LPIC';
  if (/^tableau/.test(slug)) return 'Tableau';
  if (/^itil-/.test(slug)) return 'ITIL';
  if (/^comptia-/.test(slug)) return 'CompTIA';
  if (/^isc2-/.test(slug)) return 'ISC2';
  if (/^isaca-/.test(slug)) return 'ISACA';
  if (/^hashicorp-/.test(slug)) return 'HashiCorp';
  if (/kubernetes|^cka|^ckad|^cks/.test(slug)) return 'CNCF';
  if (/^docker-/.test(slug)) return 'Docker';
  if (/^juniper-/.test(slug)) return 'Juniper';
  if (/^afaa-|^nasm-|^nsca-|^acsm-|^issa-|^ace-/.test(slug)) return 'Fitness';
  if (/red-cross|^ellis-|^starguard/.test(slug)) return 'Lifeguard';
  if (/^padi-|^naui-|^ssi-|^sdi-/.test(slug)) return 'Scuba';
  if (/^cpcu-/.test(slug)) return 'CPCU';
  if (/^associate-in-/.test(slug)) return 'Institutes';
  if (/^chartered-|^clu|^chfc/.test(slug)) return 'InsuranceDesig';
  if (/^series-/.test(slug)) return 'FINRA';
  if (/^ahip-/.test(slug)) return 'AHIP';
  if (/^mba-|mortgage/.test(slug)) return 'Mortgage';
  if (/^rma-/.test(slug)) return 'RMA';
  if (/real-estate/.test(slug)) return 'RealEstate';
  if (/^ahima-/.test(slug)) return 'AHIMA';
  if (/^arrt-/.test(slug)) return 'ARRT';
  if (/^nbstsa-/.test(slug)) return 'NBSTSA';
  if (/^nha-/.test(slug)) return 'NHA';
  if (/pharmacy-college/.test(slug)) return 'PCAT';
  if (/^jcahpo-/.test(slug)) return 'JCAHPO';
  if (/^ancc-/.test(slug)) return 'ANCC';
  if (/^praxis-/.test(slug)) return 'Praxis';
  if (/^nes-/.test(slug)) return 'NES';
  if (/educator|innovative/.test(slug)) return 'EduTech';
  if (/^hazwoper-/.test(slug)) return 'HAZWOPER';
  if (/^nfpa-70e/.test(slug)) return 'NFPA70E';
  if (/^osha-/.test(slug)) return 'OSHA';
  if (/notary/.test(slug)) return 'Notary';
  if (/home-inspection/.test(slug)) return 'HomeInspect';
  return 'Other';
}

const rows = [];
for (const e of allExamsFull) {
  if (e.scope !== 'national' || done.has(e.slug)) continue;
  const vo = VOL[e.slug];
  if (!vo) continue;
  const heat = Math.round(40 + 13 * Math.log10(vo.v / 1000));
  rows.push({ slug: e.slug, name: e.title || e.slug, heat, v: vo.v, src: vo.src, fam: familyOf(e.slug), note: vo.note });
}

rows.sort((a, b) => b.heat - a.heat || b.v - a.v);

const CAP = 5;
const picked = [];
const famCount = {};
for (const r of rows) {
  if (picked.length >= 100) break;
  const c = famCount[r.fam] || 0;
  if (c >= CAP) continue;
  famCount[r.fam] = c + 1;
  picked.push(r);
}

console.log('Candidates with volume estimate:', rows.length);
console.log('\n=== NEXT 100 BY ESTIMATED ANNUAL CANDIDATE VOLUME ===');
picked.forEach((r, i) => {
  console.log(`${String(i + 1).padStart(3, ' ')}. heat=${String(r.heat).padStart(3)} vol≈${String(r.v).padStart(7)} [${r.fam}]  ${r.slug}`);
});

const batchA = picked.slice(0, 50);
const batchB = picked.slice(50, 100);
writeFileSync('./_next50e.json', JSON.stringify(batchA.map((r, i) => ({ rank: i + 1, slug: r.slug, name: r.name, heat: r.heat, vol: r.v, src: r.src, family: r.fam, note: r.note })), null, 2));
writeFileSync('./_next50f.json', JSON.stringify(batchB.map((r, i) => ({ rank: i + 1, slug: r.slug, name: r.name, heat: r.heat, vol: r.v, src: r.src, family: r.fam, note: r.note })), null, 2));
console.log('\nWrote _next50e.json (' + batchA.length + ') and _next50f.json (' + batchB.length + ')');
