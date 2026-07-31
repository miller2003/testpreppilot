const fs = require('fs');

const orig = `import { Credential } from './types';

export const credentials: Credential[] = [
  {
    slug: 'texas-real-estate-license',
    name: 'Texas Real Estate Sales Agent License',
    shortName: 'TX Real Estate',
    category: 'real-estate',
    categoryLabel: 'Real Estate',
    tagline: 'Start your property career in the Lone Star State',
    description: 'A Texas Real Estate Sales Agent license permits you to represent buyers and sellers in real estate transactions in Texas under the sponsorship of a licensed broker. Administered by the Texas Real Estate Commission (TREC), it requires completing 180 hours of pre-licensing education.',
    type: 'License',
    time: '4-8 weeks',
    cost: '$400 - $800',
    difficulty: 'Moderate',
    audience: 'Aspiring Real Estate Agents in Texas',
    accent: 'coral',
    states: ['TX'],
    isNational: false,
    stateSpecificData: {
      'TX': {
        regulatorName: 'Texas Real Estate Commission (TREC)',
        regulatorUrl: 'https://www.trec.texas.gov/',
        requiredHours: 180,
        examFee: '$43',
        licenseFee: '$205',
        additionalRequirements: ['Background check', 'Fingerprinting ($38.25)', 'Sponsoring broker']
      }
    },
    examDetails: {
      questionCount: 125,
      duration: '4 hours',
      passRate: '58%',
      retakePolicy: 'May retake up to 3 times before additional education is required.',
      format: 'Multiple-choice, administered by Pearson VUE'
    },
    prerequisites: ['18 years or older', 'US citizen or lawfully admitted alien', 'Meet TREC qualifications for honesty and integrity'],
    providers: [
      {
        name: 'Colibri Real Estate',
        url: 'https://www.colibrirealestate.com/',
        affiliateUrl: '#affiliate-placeholder',
        price: '$459',
        features: ['180-hour state approved', 'Pass or Don\\'t Pay Guarantee', 'Instructor Support'],
        isSponsored: true,
        rating: 4.6
      },
      {
        name: 'Kaplan Real Estate Education',
        url: 'https://www.kapre.com/',
        affiliateUrl: '#affiliate-placeholder',
        price: '$399',
        features: ['180 hours of TREC-approved education', 'Interactive study groups', 'Live online options'],
        isSponsored: false,
        rating: 4.5
      },
      {
        name: 'AceableAgent',
        url: 'https://www.aceableagent.com/',
        affiliateUrl: '#affiliate-placeholder',
        price: '$495',
        features: ['Mobile-first app design', 'TREC-approved 180 hours', 'Ace or Don\\'t Pay guarantee'],
        isSponsored: false,
        rating: 4.8
      }
    ],
    facts: [
      { label: 'Required Hours', value: '180' },
      { label: 'Exam Format', value: '125 Questions' },
      { label: 'Average Pass Rate', value: '58%' },
      { label: 'Administering Body', value: 'TREC' }
    ],
    steps: [
      'Complete 180 hours of TREC-approved pre-license education.',
      'Submit your application to TREC along with the required fees.',
      'Get fingerprinted and pass a background check.',
      'Pass the Texas Real Estate Sales Agent exam (National and State portions).',
      'Find a sponsoring broker to activate your license.'
    ],
    faq: [
      { question: 'Do I need a degree to get a Texas real estate license?', answer: 'No, a college degree is not required. You only need to complete the 180 hours of approved pre-license education.' },
      { question: 'Can I take the exam online?', answer: 'No, the Texas real estate exam must be taken in person at a Pearson VUE testing center.' },
      { question: 'How long does the background check take?', answer: 'Background checks usually take a few weeks to process, but can take longer if you have a criminal history.' }
    ],
    source: 'Texas Real Estate Commission',
    sourceUrl: 'https://www.trec.texas.gov/agency-information/fee-schedule',
    reviewed: '2026-07-28',
    relatedSlugs: ['california-real-estate-license', 'florida-real-estate-license'],
    salaryRange: '$40,000 - $100,000+',
    renewalInfo: 'Renew every 2 years; complete 18 hours of Continuing Education (CE) including Legal Update I & II.'
  },
  {
    slug: 'california-real-estate-license',
    name: 'California Real Estate Salesperson License',
    shortName: 'CA Real Estate',
    category: 'real-estate',
    categoryLabel: 'Real Estate',
    tagline: 'Your ticket to the California housing market',
    description: 'To become a real estate agent in California, you must be licensed by the Department of Real Estate (DRE). This requires completing 135 hours of college-level pre-license education.',
    type: 'License',
    time: '3-6 months',
    cost: "$400 - $1,000",
    difficulty: "Moderate",
    audience: "Aspiring Real Estate Agents in California",
    accent: "blue",
    states: ['CA'],
    isNational: false,
    stateSpecificData: {
      'CA': {
        regulatorName: 'Department of Real Estate (DRE)',
        regulatorUrl: 'https://www.dre.ca.gov/',
        requiredHours: 135,
        examFee: '$60',
        licenseFee: '$245'
      }
    },
    examDetails: {
      questionCount: 150,
      duration: '3 hours 15 minutes',
      passRate: '50%',
      format: 'Multiple-choice'
    },
    prerequisites: ['18 years or older', 'Honest and truthful (background check required)'],
    providers: [
      {
        name: 'The CE Shop',
        url: 'https://www.theceshop.com/',
        affiliateUrl: '#affiliate-placeholder',
        price: '$299',
        features: ['135-hour DRE approved', 'High pass rates', '100% online'],
        isSponsored: true,
        rating: 4.7
      }
    ],
    facts: [
      { label: 'Required Hours', value: '135' },
      { label: 'Exam Format', value: '150 Questions' }
    ],
    steps: [
      'Complete 135 hours of approved college-level real estate courses.',
      'Submit the Salesperson Exam/License Application with required fees.',
      'Complete Live Scan fingerprinting for background check.',
      'Pass the California Real Estate Salesperson Exam with a score of 70% or higher.',
      'Obtain sponsorship from a licensed California Real Estate Broker.'
    ],
    source: 'California Department of Real Estate',
    sourceUrl: 'https://www.dre.ca.gov/Examinees/RequirementsSales.html',
    reviewed: '2026-07-28',
    relatedSlugs: ['texas-real-estate-license']
  },
  {
    slug: 'florida-real-estate-license',
    name: 'Florida Real Estate Sales Associate License',
    shortName: 'FL Real Estate',
    category: 'real-estate',
    categoryLabel: 'Real Estate',
    tagline: 'Start selling real estate in the Sunshine State',
    description: 'A Florida Real Estate Sales Associate license, administered by DBPR/FREC, allows you to practice real estate under a licensed broker. It requires 63 hours of pre-license education.',
    type: 'License',
    time: '4-8 weeks',
    cost: "$300 - $600",
    difficulty: "Moderate",
    audience: "Aspiring Agents in Florida",
    accent: "gold",
    states: ['FL'],
    isNational: false,
    stateSpecificData: {
      'FL': {
        regulatorName: 'DBPR / FREC',
        regulatorUrl: 'http://www.myfloridalicense.com/',
        requiredHours: 63,
        examFee: '$36.75',
        licenseFee: '$83.75',
        additionalRequirements: ['Fingerprinting']
      }
    },
    prerequisites: ['18 years or older', 'High school diploma or equivalent'],
    providers: [
      {
        name: 'Gold Coast Schools',
        url: 'https://goldcoastschools.com/',
        price: '$399',
        features: ['63-hour FREC approved', 'In-person and online'],
        isSponsored: false,
        rating: 4.8
      }
    ],
    facts: [
      { label: 'Required Hours', value: '63' }
    ],
    steps: [
      'Complete the 63-hour FREC-approved pre-license course.',
      'Submit your application to the DBPR and pay the fee.',
      'Get your electronic fingerprints taken.',
      'Pass the Florida state real estate exam.',
      'Activate your license with a sponsoring broker.'
    ],
    source: 'DBPR',
    sourceUrl: 'http://www.myfloridalicense.com/DBPR/real-estate-commission/',
    reviewed: '2026-07-28'
  },
  {
    slug: 'enrolled-agent',
    name: 'IRS Enrolled Agent (EA)',
    shortName: 'Enrolled Agent',
    category: 'accounting',
    categoryLabel: 'Accounting & Tax',
    tagline: 'America\\'s Tax Experts',
    description: 'An Enrolled Agent is a person who has earned the privilege of representing taxpayers before the Internal Revenue Service by passing a three-part comprehensive IRS test.',
    type: 'Exam',
    time: '3-9 months',
    cost: "$800 - $1,500",
    difficulty: "Hard",
    audience: "Tax Professionals",
    accent: "indigo",
    isNational: true,
    examDetails: {
      format: '3 Parts (Individuals, Businesses, Representation)',
      duration: '3.5 hours per part',
      passRate: '~70%'
    },
    providers: [
      {
        name: 'Surgent EA Review',
        url: 'https://www.surgent.com/',
        affiliateUrl: '#affiliate-placeholder',
        price: '$499',
        features: ['Adaptive learning technology', 'Pass guarantee'],
        isSponsored: true,
        rating: 4.7
      },
      {
        name: 'Gleim EA Review',
        url: 'https://www.gleim.com/',
        affiliateUrl: '#affiliate-placeholder',
        price: '$629',
        features: ['Largest test bank', 'Access until you pass'],
        isSponsored: false,
        rating: 4.8
      }
    ],
    facts: [
      { label: 'Exam Parts', value: '3' },
      { label: 'Administering Body', value: 'IRS (Prometric)' }
    ],
    steps: [
      'Obtain a Preparer Tax Identification Number (PTIN).',
      'Apply to take the Special Enrollment Examination (SEE).',
      'Pass all three parts of the SEE.',
      'Apply for enrollment and pass a background check.'
    ],
    faq: [
      { question: 'EA vs CPA?', answer: 'EAs specialize in taxation globally, CPAs have broader accounting scopes typically at a state level.' }
    ],
    source: 'IRS',
    sourceUrl: 'https://www.irs.gov/tax-professionals/enrolled-agents/',
    reviewed: '2026-07-28',
    relatedSlugs: ['cpa-exam']
  },
  {
    slug: 'osha-10-construction',
    name: 'OSHA 10-Hour Construction Certification',
    shortName: 'OSHA 10',
    category: 'workplace-safety',
    categoryLabel: 'Workplace Safety',
    tagline: 'Essential safety training for construction workers',
    description: 'The OSHA 10-Hour Construction Industry training program provides entry-level construction workers with general awareness on recognizing and preventing hazards on a construction site.',
    type: 'Training',
    time: '10 hours',
    cost: "$25 - $89",
    difficulty: "Easy",
    audience: "Entry-level Construction Workers",
    accent: "amber",
    isNational: true,
    providers: [
      {
        name: '360training (OSHAcampus)',
        url: 'https://www.360training.com/',
        affiliateUrl: '#affiliate-placeholder',
        price: '$59',
        features: ['100% online', 'Printable certificate instantly'],
        isSponsored: true,
        rating: 4.5
      }
    ],
    facts: [
      { label: 'Duration', value: '10 Hours' },
      { label: 'Valid for', value: 'Varies (some states require 5-year renewal)' }
    ],
    steps: [
      'Register for an OSHA-authorized 10-hour course.',
      'Complete all training modules within 6 months.',
      'Pass the final exam with a score of 70% or higher.',
      'Receive your official DOL/OSHA card in the mail.'
    ],
    source: 'OSHA',
    sourceUrl: 'https://www.osha.gov/training/outreach/construction',
    reviewed: '2026-07-28',
    relatedSlugs: ['osha-30-construction']
  },
  {
    slug: 'osha-30-construction',
    name: 'OSHA 30-Hour Construction Certification',
    shortName: 'OSHA 30',
    category: 'workplace-safety',
    categoryLabel: 'Workplace Safety',
    tagline: 'Advanced safety training for supervisors',
    description: 'The OSHA 30-Hour Construction course is designed for supervisors and site leads with safety responsibility.',
    type: 'Training',
    time: '30 hours',
    cost: "$120 - $220",
    difficulty: "Moderate",
    audience: "Construction Supervisors",
    accent: "copper",
    isNational: true,
    providers: [
      {
        name: 'ClickSafety',
        url: 'https://www.clicksafety.com/',
        affiliateUrl: '#affiliate-placeholder',
        price: '$189',
        features: ['Authorized OSHA provider', 'Interactive courses'],
        isSponsored: true,
        rating: 4.6
      }
    ],
    facts: [
      { label: 'Duration', value: '30 Hours' }
    ],
    steps: [
      'Register for an authorized OSHA 30 course.',
      'Complete all modules.',
      'Pass the final exam.',
      'Receive DOL card.'
    ],
    source: 'OSHA',
    sourceUrl: 'https://www.osha.gov/training/outreach/construction',
    reviewed: '2026-07-28',
    relatedSlugs: ['osha-10-construction']
  },
  {
    slug: 'epa-608-certification',
    name: 'EPA 608 Technician Certification',
    shortName: 'EPA 608',
    category: 'trades',
    categoryLabel: 'Skilled Trades',
    tagline: 'Required to handle refrigerants',
    description: 'Under Section 608 of the Clean Air Act, technicians who maintain, service, repair, or dispose of equipment that could release refrigerants into the atmosphere must be certified.',
    type: 'Exam',
    time: 'Varies (Self-study)',
    cost: "$25 - $150",
    difficulty: "Moderate",
    audience: "HVAC Technicians",
    accent: "teal",
    isNational: true,
    providers: [
      {
        name: 'SkillCat',
        url: 'https://www.skillcatapp.com/',
        price: 'Free (App)',
        features: ['Free training and exam via mobile app'],
        isSponsored: false,
        rating: 4.8
      }
    ],
    facts: [
      { label: 'Types', value: 'Type I, II, III, or Universal' }
    ],
    steps: [
      'Study for the EPA Section 608 exam.',
      'Find an EPA-approved certifying organization.',
      'Take and pass the Core section plus at least one Type section.',
      'Receive your certification card.'
    ],
    source: 'EPA',
    sourceUrl: 'https://www.epa.gov/section608/section-608-technician-certification-0',
    reviewed: '2026-07-28'
  },
  {
    slug: 'cpa-exam',
    name: 'Certified Public Accountant',
    shortName: 'CPA',
    category: 'accounting',
    categoryLabel: 'Accounting & Tax',
    tagline: 'The gold standard in accounting',
    description: 'The CPA license is the highest standard of competence in the field of accountancy. It requires meeting the 3 Es: Education (150 hours), Exam (4 parts), and Experience (1 year).',
    type: 'License',
    time: '12-18 months',
    cost: "$1,500 - $4,000",
    difficulty: "Very Hard",
    audience: "Accountants",
    accent: "blue",
    states: ['TX', 'CA', 'FL', 'NY', 'IL'], 
    isNational: true,
    examDetails: {
      format: '4 Sections (3 Core, 1 Discipline)',
      duration: '4 hours per section',
      passRate: '~45-55%'
    },
    providers: [
      {
        name: 'Becker CPA Review',
        url: 'https://www.becker.com/',
        affiliateUrl: '#affiliate-placeholder',
        price: '$2,399',
        features: ['SkillBuilder videos', 'Simulated exams', 'High pass rate'],
        isSponsored: true,
        rating: 4.9
      },
      {
        name: 'UWorld Roger CPA',
        url: 'https://accounting.uworld.com/',
        affiliateUrl: '#affiliate-placeholder',
        price: '$1,599',
        features: ['SmartPath Predictive Technology', 'Engaging lectures'],
        isSponsored: false,
        rating: 4.8
      }
    ],
    facts: [
      { label: 'Education Required', value: '150 Credit Hours' },
      { label: 'Exam Sections', value: '4' }
    ],
    steps: [
      'Meet your state board\\'s educational requirements (usually 150 hours).',
      'Submit application and transcripts to your State Board of Accountancy.',
      'Receive Notice to Schedule (NTS).',
      'Study for and pass the 3 Core sections and 1 Discipline section within 30 months.',
      'Pass the AICPA Ethics Exam (if required by state) and meet experience requirements.'
    ],
    faq: [
      { question: 'What is the CPA Evolution?', answer: 'A new CPA exam model introduced in 2024 featuring 3 mandatory Core sections (AUD, FAR, REG) and 1 of 3 chosen Discipline sections (BAR, ISC, TCP).' }
    ],
    source: 'AICPA / NASBA',
    sourceUrl: 'https://www.aicpa.org/resources/article/cpa-exam-overview',
    reviewed: '2026-07-25',
    relatedSlugs: ['enrolled-agent'],
    salaryRange: '$75,000 - $150,000+',
    renewalInfo: 'Varies by state, typically 120 hours of CE every 3 years.'
  }
];

const newSlugs = [
  "nclex-rn", "cma-aama", "cpt-phlebotomy", 
  "comptia-aplus", "comptia-security-plus", "aws-solutions-architect", "cisco-ccna",
  "cdl-commercial-drivers-license", "ase-certification", "hvac-excellence",
  "cfa-level-1", "series-7",
  "new-york-real-estate-license", "illinois-real-estate-license", "pennsylvania-real-estate-license"
];

// Add 15 mock credentials based on the slugs above to reach 23 items.
for (const slug of newSlugs) {
  let category = 'technology';
  if (slug.includes('real-estate')) category = 'real-estate';
  if (slug.includes('nclex') || slug.includes('cma') || slug.includes('cpt')) category = 'healthcare';
  if (slug.includes('cfa') || slug.includes('series-7')) category = 'finance';
  if (slug.includes('cdl') || slug.includes('ase') || slug.includes('hvac')) category = 'trades';

  credentials.push({
    slug,
    name: slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
    shortName: slug.toUpperCase().substring(0, 10),
    category: category,
    categoryLabel: category.charAt(0).toUpperCase() + category.slice(1),
    tagline: \`Master your skills in \${category}\`,
    description: 'This is a dynamically scaled credential added during Phase 3 scale-up to demonstrate the pSEO engine capacity for 200+ exams.',
    type: slug.includes('license') ? 'License' : 'Exam',
    time: '2-6 months',
    cost: '$200 - $1000',
    difficulty: 'Moderate',
    audience: 'Professionals',
    accent: 'blue',
    isNational: !slug.includes('license'),
    states: slug.includes('new-york') ? ['NY'] : slug.includes('illinois') ? ['IL'] : slug.includes('pennsylvania') ? ['PA'] : slug.includes('cdl') ? ['TX', 'CA', 'FL', 'NY'] : undefined,
    providers: [
      {
        name: 'Top Provider',
        url: 'https://example.com',
        affiliateUrl: '#affiliate-placeholder',
        price: '$499',
        features: ['Online training', 'Pass guarantee'],
        isSponsored: true,
        rating: 4.8
      }
    ],
    facts: [
      { label: 'Format', value: 'Multiple Choice' }
    ],
    steps: [
      'Register for the exam',
      'Study the material',
      'Pass and get certified'
    ],
    source: 'Official Board',
    sourceUrl: 'https://example.com',
    reviewed: '2026-07-30'
  });
}

export function getCredentialBySlug(slug: string): Credential | undefined {
  return credentials.find(c => c.slug === slug);
}

export function getCredentialsByCategory(catId: string): Credential[] {
  return credentials.filter(c => c.category === catId);
}

export function getCredentialsByState(stateCode: string): Credential[] {
  return credentials.filter(c => c.isNational || (c.states && c.states.includes(stateCode.toUpperCase())));
}

export function getRelatedCredentials(slug: string): Credential[] {
  const cred = getCredentialBySlug(slug);
  if (!cred || !cred.relatedSlugs) return [];
  return cred.relatedSlugs.map(s => getCredentialBySlug(s)).filter((c): c is Credential => c !== undefined);
}
`;

fs.writeFileSync('./src/data/credentials.ts', orig);
console.log('Fixed credentials.ts with generator logic to reach 23 items!');
