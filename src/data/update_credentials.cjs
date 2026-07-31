const fs = require('fs');

const oldContent = fs.readFileSync('C:/Users/samja/.gemini/antigravity/scratch/testpreppilot/src/data/credentials.ts', 'utf8');

const newCreds = [
  {
    slug: 'nclex-rn', name: 'National Council Licensure Examination for Registered Nurses', shortName: 'NCLEX-RN', category: 'healthcare', categoryLabel: 'Healthcare', tagline: 'The gateway to your nursing career',
    description: 'The NCLEX-RN is the nationwide examination for the licensing of nurses in the United States and Canada since 1982 and 2015, respectively.',
    type: 'Exam', time: '1-3 months', cost: '$200', difficulty: 'Hard', audience: 'Nursing Graduates', accent: 'rose', isNational: true,
    examDetails: { questionCount: 145, duration: '5 hours', passRate: '80%', retakePolicy: 'Wait 45 days', format: 'Computerized Adaptive Testing' },
    prerequisites: ['Nursing degree (ADN or BSN)'],
    providers: [
      { name: 'UWorld Nursing', url: 'https://nursing.uworld.com/', affiliateUrl: '#affiliate-placeholder', price: '$139', features: ['Adaptive testing', 'Detailed rationales'], isSponsored: true, rating: 4.9 },
      { name: 'Kaplan NCLEX', url: 'https://www.kaptest.com/', affiliateUrl: '#affiliate-placeholder', price: '$199', features: ['Decision tree method'], isSponsored: false, rating: 4.5 }
    ],
    facts: [{label: 'Exam Type', value: 'Adaptive'}, {label: 'Wait Time', value: '45 Days for Retake'}],
    steps: ['Complete a nursing program', 'Apply for licensure with your nursing regulatory body', 'Register with Pearson VUE', 'Take the exam'],
    source: 'NCSBN', sourceUrl: 'https://www.ncsbn.org/nclex.htm', reviewed: '2026-07-28'
  },
  {
    slug: 'cma-aama', name: 'Certified Medical Assistant', shortName: 'CMA (AAMA)', category: 'healthcare', categoryLabel: 'Healthcare', tagline: 'A mark of excellence in medical assisting',
    description: 'The CMA (AAMA) credential designates a medical assistant who has achieved certification through the Certifying Board of the American Association of Medical Assistants.',
    type: 'Certification', time: 'Varies', cost: '$125 - $250', difficulty: 'Moderate', audience: 'Medical Assistants', accent: 'rose', isNational: true,
    examDetails: { questionCount: 200, duration: '160 minutes', passRate: '65%', format: 'Multiple choice' },
    prerequisites: ['Graduate from a CAAHEP or ABHES accredited program'],
    providers: [
      { name: 'Smarter MA', url: 'https://smarterma.com/', affiliateUrl: '#affiliate-placeholder', price: '$89', features: ['High pass rate guarantee'], isSponsored: false, rating: 4.8 }
    ],
    facts: [{label: 'Validity', value: '60 Months'}], steps: ['Graduate from approved program', 'Apply for exam', 'Schedule and take exam'],
    source: 'AAMA', sourceUrl: 'https://www.aama-ntl.org/', reviewed: '2026-07-28'
  },
  {
    slug: 'cpt-phlebotomy', name: 'Certified Phlebotomy Technician', shortName: 'CPT', category: 'healthcare', categoryLabel: 'Healthcare', tagline: 'Essential certification for blood collection',
    description: 'Certified Phlebotomy Technicians collect blood samples from patients for diagnostic testing, transfusions, or donations.',
    type: 'Certification', time: '1-3 months', cost: '$117', difficulty: 'Moderate', audience: 'Phlebotomists', accent: 'rose', isNational: true,
    providers: [{ name: 'NHA', url: 'https://www.nhanow.com/', affiliateUrl: '#affiliate-placeholder', price: '$117', features: ['Official certifier'], isSponsored: false, rating: 4.7 }],
    facts: [{label: 'CE Requirements', value: '10 CE credits every 2 years'}], steps: ['Complete training program', 'Perform 30 venipunctures', 'Pass exam'],
    source: 'NHA', sourceUrl: 'https://www.nhanow.com/', reviewed: '2026-07-28'
  },
  {
    slug: 'comptia-a-plus', name: 'CompTIA A+', shortName: 'CompTIA A+', category: 'technology', categoryLabel: 'Technology', tagline: 'The starting point for a career in IT',
    description: 'CompTIA A+ is the industry standard for establishing a career in IT and is the preferred qualifying credential for technical support and IT operational roles.',
    type: 'Certification', time: '3-6 months', cost: '$492 (2 exams)', difficulty: 'Moderate', audience: 'IT Beginners', accent: 'indigo', isNational: true,
    examDetails: { questionCount: 90, duration: '90 mins per exam', passRate: '~70%', format: 'Performance-based and multiple choice' },
    prerequisites: ['None (9-12 months experience recommended)'],
    providers: [
      { name: 'CompTIA', url: 'https://www.comptia.org/', affiliateUrl: '#affiliate-placeholder', price: '$246/exam', features: ['Official bundles'], isSponsored: true, rating: 4.7 },
      { name: 'Professor Messer', url: 'https://www.professormesser.com/', affiliateUrl: '#affiliate-placeholder', price: '$0', features: ['Free videos'], isSponsored: false, rating: 4.9 }
    ],
    facts: [{label: 'Exams Required', value: 'Two (Core 1 & Core 2)'}], steps: ['Study Core 1', 'Pass Core 1', 'Study Core 2', 'Pass Core 2'],
    source: 'CompTIA', sourceUrl: 'https://www.comptia.org/', reviewed: '2026-07-28'
  },
  {
    slug: 'comptia-security-plus', name: 'CompTIA Security+', shortName: 'Security+', category: 'technology', categoryLabel: 'Technology', tagline: 'Foundational cybersecurity certification',
    description: 'CompTIA Security+ is a global certification that validates the baseline skills necessary to perform core security functions and pursue an IT security career.',
    type: 'Certification', time: '2-4 months', cost: '$392', difficulty: 'Moderate', audience: 'IT Security Professionals', accent: 'indigo', isNational: true,
    providers: [{ name: 'Jason Dion', url: 'https://diontraining.com/', affiliateUrl: '#affiliate-placeholder', price: '$15', features: ['Udemy course'], isSponsored: false, rating: 4.8 }],
    facts: [{label: 'DoD Approved', value: 'Yes (8570 compliant)'}], steps: ['Study for SY0-701 exam', 'Take and pass exam'],
    source: 'CompTIA', sourceUrl: 'https://www.comptia.org/', reviewed: '2026-07-28'
  },
  {
    slug: 'aws-solutions-architect-associate', name: 'AWS Certified Solutions Architect - Associate', shortName: 'AWS SAA', category: 'technology', categoryLabel: 'Technology', tagline: 'Validate your AWS cloud expertise',
    description: 'This credential helps organizations identify and develop talent with critical skills for implementing cloud initiatives.',
    type: 'Certification', time: '3-6 months', cost: '$150', difficulty: 'Hard', audience: 'Cloud Architects', accent: 'indigo', isNational: true,
    providers: [{ name: 'A Cloud Guru', url: 'https://acloudguru.com/', affiliateUrl: '#affiliate-placeholder', price: '$35/mo', features: ['Hands-on labs'], isSponsored: true, rating: 4.6 }],
    facts: [{label: 'Validity', value: '3 Years'}], steps: ['Gain AWS experience', 'Study exam guide', 'Pass exam'],
    source: 'AWS', sourceUrl: 'https://aws.amazon.com/certification/', reviewed: '2026-07-28'
  },
  {
    slug: 'cisco-ccna', name: 'Cisco Certified Network Associate', shortName: 'CCNA', category: 'technology', categoryLabel: 'Technology', tagline: 'Launch your networking career',
    description: 'CCNA validates your skills and knowledge in network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation and programmability.',
    type: 'Certification', time: '3-6 months', cost: '$300', difficulty: 'Hard', audience: 'Network Engineers', accent: 'indigo', isNational: true,
    providers: [{ name: 'Cisco Networking Academy', url: 'https://www.netacad.com/', affiliateUrl: '#affiliate-placeholder', price: 'Varies', features: ['Official curriculum'], isSponsored: false, rating: 4.7 }],
    facts: [{label: 'Validity', value: '3 Years'}], steps: ['Study networking concepts', 'Pass the 200-301 CCNA exam'],
    source: 'Cisco', sourceUrl: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html', reviewed: '2026-07-28'
  },
  {
    slug: 'cdl-commercial-drivers-license', name: "Commercial Driver's License (Class A)", shortName: 'CDL', category: 'trades', categoryLabel: 'Skilled Trades', tagline: 'Drive commercial motor vehicles',
    description: 'A CDL is required in the US to operate large, heavy, or placarded hazardous material vehicles in commerce.',
    type: 'License', time: '4-8 weeks', cost: '$1,500 - $8,000', difficulty: 'Moderate', audience: 'Truck Drivers', accent: 'mint', isNational: false,
    states: ['TX', 'CA', 'FL'],
    stateSpecificData: {
      'TX': { regulatorName: 'Texas DPS', regulatorUrl: 'https://www.dps.texas.gov/', licenseFee: '$97', additionalRequirements: ['Medical certificate'] },
      'CA': { regulatorName: 'California DMV', regulatorUrl: 'https://www.dmv.ca.gov/', licenseFee: '$85', additionalRequirements: ['Commercial learner permit'] },
      'FL': { regulatorName: 'Florida FLHSMV', regulatorUrl: 'https://www.flhsmv.gov/', licenseFee: '$75', additionalRequirements: ['Medical examiner certificate'] }
    },
    providers: [{ name: 'TDA Drivers', url: 'https://tdadrivers.com/', affiliateUrl: '#affiliate-placeholder', price: '$4000', features: ['ELDT Compliant'], isSponsored: false, rating: 4.5 }],
    facts: [{label: 'ELDT Required', value: 'Yes'}], steps: ['Get CLP', 'Complete ELDT', 'Pass skills test'],
    source: 'FMCSA', sourceUrl: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license', reviewed: '2026-07-28'
  },
  {
    slug: 'ase-certification', name: 'Automotive Service Excellence Certification', shortName: 'ASE', category: 'trades', categoryLabel: 'Skilled Trades', tagline: 'The standard for automotive professionals',
    description: 'ASE certification is the industry standard for automotive repair professionals.',
    type: 'Certification', time: 'Varies', cost: '$34 per test + $36 fee', difficulty: 'Moderate', audience: 'Mechanics', accent: 'mint', isNational: true,
    providers: [{ name: 'Motor Age Training', url: 'https://motoragetraining.com/', affiliateUrl: '#affiliate-placeholder', price: '$25+', features: ['Study guides'], isSponsored: false, rating: 4.6 }],
    facts: [{label: 'Experience Required', value: '2 Years'}], steps: ['Gain 2 years experience', 'Pass ASE exams'],
    source: 'ASE', sourceUrl: 'https://www.ase.com/', reviewed: '2026-07-28'
  },
  {
    slug: 'hvac-excellence', name: 'HVAC Excellence Certification', shortName: 'HVAC Excellence', category: 'trades', categoryLabel: 'Skilled Trades', tagline: 'Validate your HVAC knowledge',
    description: 'Provides programmatic accreditation and certification for the HVACR industry.',
    type: 'Certification', time: 'Varies', cost: '$50+', difficulty: 'Moderate', audience: 'HVAC Technicians', accent: 'mint', isNational: true,
    providers: [{ name: 'ESCO Institute', url: 'https://www.escogroup.org/', affiliateUrl: '#affiliate-placeholder', price: '$50', features: ['Exam proctoring'], isSponsored: false, rating: 4.5 }],
    facts: [{label: 'Levels', value: 'Student, Employment Ready, Professional'}], steps: ['Complete education', 'Pass exams'],
    source: 'HVAC Excellence', sourceUrl: 'https://www.escogroup.org/hvac/', reviewed: '2026-07-28'
  },
  {
    slug: 'cfa-level-1', name: 'Chartered Financial Analyst (Level I)', shortName: 'CFA Level I', category: 'finance', categoryLabel: 'Finance & Securities', tagline: 'The gold standard in investment analysis',
    description: 'The CFA Program is a globally recognized, graduate-level curriculum that links theory and practice with real-world investment analysis and portfolio management skills.',
    type: 'Exam', time: '300+ hours', cost: '$940 - $1,250', difficulty: 'Very Hard', audience: 'Investment Professionals', accent: 'emerald', isNational: true,
    providers: [
      { name: 'Kaplan Schweser', url: 'https://www.schweser.com/', affiliateUrl: '#affiliate-placeholder', price: '$699', features: ['SchweserNotes', 'QBank'], isSponsored: true, rating: 4.8 },
      { name: 'Bloomberg Prep', url: 'https://www.bloombergprep.com/', affiliateUrl: '#affiliate-placeholder', price: '$599', features: ['Adaptive tech'], isSponsored: false, rating: 4.4 }
    ],
    facts: [{label: 'Pass Rate', value: '~38%'}], steps: ['Enroll in CFA program', 'Study 300+ hours', 'Pass Level I exam'],
    source: 'CFA Institute', sourceUrl: 'https://www.cfainstitute.org/', reviewed: '2026-07-28'
  },
  {
    slug: 'series-7', name: 'General Securities Representative Exam', shortName: 'Series 7', category: 'finance', categoryLabel: 'Finance & Securities', tagline: 'License to sell all types of securities',
    description: 'The Series 7 exam assesses the competency of an entry-level registered representative to perform their job as a general securities representative.',
    type: 'License', time: '1-3 months', cost: '$300', difficulty: 'Hard', audience: 'Financial Advisors', accent: 'emerald', isNational: true,
    prerequisites: ['SIE Exam', 'FINRA member sponsorship'],
    providers: [{ name: 'Securities Institute', url: 'https://securitiesce.com/', affiliateUrl: '#affiliate-placeholder', price: '$150', features: ['Exam prep'], isSponsored: false, rating: 4.5 }],
    facts: [{label: 'Sponsorship', value: 'Required'}], steps: ['Pass SIE', 'Get sponsored', 'Pass Series 7'],
    source: 'FINRA', sourceUrl: 'https://www.finra.org/registration-exams-ce/qualification-exams/series7', reviewed: '2026-07-28'
  },
  {
    slug: 'new-york-real-estate-license', name: 'New York Real Estate Salesperson License', shortName: 'NY Real Estate', category: 'real-estate', categoryLabel: 'Real Estate', tagline: 'Sell property in the Empire State',
    description: 'A New York Real Estate Salesperson license allows you to handle real estate transactions under a licensed broker.',
    type: 'License', time: '2-4 months', cost: '$300 - $600', difficulty: 'Moderate', audience: 'Real Estate Agents', accent: 'coral', states: ['NY'], isNational: false,
    stateSpecificData: {
      'NY': { regulatorName: 'NY DOS', regulatorUrl: 'https://dos.ny.gov/', requiredHours: 77, examFee: '$15', licenseFee: '$55' }
    },
    providers: [{ name: 'Real Estate Express', url: 'https://www.colibrirealestate.com/', affiliateUrl: '#affiliate-placeholder', price: '$200', features: ['State approved'], isSponsored: false, rating: 4.3 }],
    facts: [{label: 'Hours', value: '77'}], steps: ['Complete 77 hours', 'Pass state exam', 'Apply for license'],
    source: 'NY DOS', sourceUrl: 'https://dos.ny.gov/', reviewed: '2026-07-28'
  },
  {
    slug: 'illinois-real-estate-license', name: 'Illinois Real Estate Broker License', shortName: 'IL Real Estate', category: 'real-estate', categoryLabel: 'Real Estate', tagline: 'Real estate careers in Illinois',
    description: 'In Illinois, entry-level agents are called Brokers.',
    type: 'License', time: '3-6 months', cost: '$400 - $800', difficulty: 'Moderate', audience: 'Real Estate Agents', accent: 'coral', states: ['IL'], isNational: false,
    stateSpecificData: {
      'IL': { regulatorName: 'IDFPR', regulatorUrl: 'https://idfpr.illinois.gov/', requiredHours: 75, examFee: '$58', licenseFee: '$125' }
    },
    providers: [{ name: 'The CE Shop', url: 'https://www.theceshop.com/', affiliateUrl: '#affiliate-placeholder', price: '$250', features: ['Online courses'], isSponsored: false, rating: 4.8 }],
    facts: [{label: 'Hours', value: '75'}], steps: ['Complete 75 hours', 'Pass exam', 'Find sponsoring managing broker'],
    source: 'IDFPR', sourceUrl: 'https://idfpr.illinois.gov/', reviewed: '2026-07-28'
  },
  {
    slug: 'pennsylvania-real-estate-license', name: 'Pennsylvania Real Estate Salesperson License', shortName: 'PA Real Estate', category: 'real-estate', categoryLabel: 'Real Estate', tagline: 'Keystone State real estate careers',
    description: 'Allows you to represent buyers and sellers in real estate transactions in Pennsylvania.',
    type: 'License', time: '2-4 months', cost: '$300 - $600', difficulty: 'Moderate', audience: 'Real Estate Agents', accent: 'coral', states: ['PA'], isNational: false,
    stateSpecificData: {
      'PA': { regulatorName: 'PA State Real Estate Commission', regulatorUrl: 'https://www.dos.pa.gov/', requiredHours: 75, examFee: '$49', licenseFee: '$107' }
    },
    providers: [{ name: 'Kaplan', url: 'https://www.kapre.com/', affiliateUrl: '#affiliate-placeholder', price: '$350', features: ['Exam prep'], isSponsored: false, rating: 4.4 }],
    facts: [{label: 'Hours', value: '75'}], steps: ['Complete 75 hours', 'Pass state exam', 'Apply'],
    source: 'PA DOS', sourceUrl: 'https://www.dos.pa.gov/', reviewed: '2026-07-28'
  },
  {
    slug: 'cissp', name: 'Certified Information Systems Security Professional', shortName: 'CISSP', category: 'technology', categoryLabel: 'Technology', tagline: "The world's premier cybersecurity certification",
    description: "CISSP validates an information security professional's deep technical and managerial knowledge and experience to effectively design, engineer, and manage the overall security posture of an organization.",
    type: 'Certification', time: '6-12 months', cost: '$749', difficulty: 'Very Hard', audience: 'Security Managers', accent: 'indigo', isNational: true,
    prerequisites: ['5 years cumulative paid work experience'],
    providers: [{ name: 'ISC2', url: 'https://www.isc2.org/', affiliateUrl: '#affiliate-placeholder', price: '$749', features: ['Official exams'], isSponsored: false, rating: 4.9 }],
    facts: [{label: 'Experience Requirement', value: '5 Years'}], steps: ['Gain experience', 'Pass exam', 'Get endorsed'],
    source: 'ISC2', sourceUrl: 'https://www.isc2.org/Certifications/CISSP', reviewed: '2026-07-28'
  },
  {
    slug: 'series-63', name: 'Uniform Securities Agent State Law Exam', shortName: 'Series 63', category: 'finance', categoryLabel: 'Finance & Securities', tagline: 'State securities licensing',
    description: "The Series 63 exam measures a candidate's knowledge of state law and regulations (Blue Sky laws).",
    type: 'License', time: '2-4 weeks', cost: '$147', difficulty: 'Moderate', audience: 'Financial Agents', accent: 'emerald', isNational: true,
    providers: [{ name: 'Knopman Marks', url: 'https://knopman.com/', affiliateUrl: '#affiliate-placeholder', price: '$150', features: ['Review courses'], isSponsored: false, rating: 4.8 }],
    facts: [{label: 'Length', value: '60 Questions'}], steps: ['Pass Series 63 exam'],
    source: 'NASAA', sourceUrl: 'https://www.nasaa.org/exams/', reviewed: '2026-07-28'
  }
];

const marker = 'export const credentials: Credential[] = [';
const parts = oldContent.split(marker);
if (parts.length === 2) {
  let existingCredsString = parts[1];
  const lastIndex = existingCredsString.lastIndexOf('];');
  existingCredsString = existingCredsString.substring(0, lastIndex).trim();

  const newCredsString = JSON.stringify(newCreds, null, 2).slice(1, -1);

  const finalArrayContent = marker + '\n  ' + existingCredsString + ',\n' + newCredsString + '\n];';
  const finalContent = parts[0] + finalArrayContent + parts[1].substring(lastIndex + 2);

  fs.writeFileSync('C:/Users/samja/.gemini/antigravity/scratch/testpreppilot/src/data/credentials.ts', finalContent);
  console.log('Successfully updated credentials.ts');
} else {
  console.error('Could not find the credentials array marker.');
  process.exit(1);
}
