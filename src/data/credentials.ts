import { Credential } from './types';

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
        features: ['180-hour state approved', 'Pass or Don\'t Pay Guarantee', 'Instructor Support'],
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
        features: ['Mobile-first app design', 'TREC-approved 180 hours', 'Ace or Don\'t Pay guarantee'],
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
    renewalInfo: 'Renew every 2 years; complete 18 hours of Continuing Education (CE) including Legal Update I & II.',

    quickAnswer: {
      summary: 'To become a Texas real estate sales agent you must be 18+, complete 180 hours of TREC-approved pre-license education, pass a background check with fingerprints, and pass the state exam (national + Texas portions). You then activate your license by finding a sponsoring broker. The active process usually takes 4–8 weeks.',
      advantages: [
        'No college degree required — only 180 hours of coursework',
        'Fast entry (weeks, not years) into a commission-based career',
        'TREC education is fully available online through approved providers',
        'Unlimited earning potential through commissions',
        'Lower startup cost than most professional licenses'
      ]
    },
    roadmap: [
      'Meet TREC eligibility (18+, legal resident, good character)',
      'Complete 180 hours of pre-license education',
      'Submit application + fees to TREC',
      'Get fingerprinted (IdentoGO) & background check',
      'Schedule & pass the state exam (Pearson VUE)',
      'Find a sponsoring broker to activate'
    ],
    comparison: {
      title: 'Texas vs. California vs. Florida: sales-agent requirements',
      columns: ['', 'Texas', 'California', 'Florida'],
      rows: [
        { label: 'Pre-license education', values: ['180 hrs', '135 hrs', '63 hrs'] },
        { label: 'State exam questions', values: ['125', '150', '100'] },
        { label: 'Exam time limit', values: ['4 hours', '3h 15m', '3h 30m'] },
        { label: 'Exam fee', values: ['$43', '$60', '$36.75'] },
        { label: 'Initial license fee', values: ['$205', '$245', '$83.75'] },
        { label: 'Sponsoring broker', values: ['Required', 'Required', 'Required'] }
      ]
    },
    registrationSteps: [
      {
        title: 'Confirm you meet TREC eligibility',
        description: 'You must be at least 18 years old, a U.S. citizen or lawfully admitted alien, and meet TREC’s standards of honesty, trustworthiness, and integrity. You can start education before applying.',
        subSteps: [
          '18+ years old',
          'U.S. citizen or legal resident',
          'No disqualifying criminal history'
        ]
      },
      {
        title: 'Complete 180 hours of qualifying education',
        description: 'Texas requires six 30-hour courses through a TREC-approved provider (online or in person): Principles of Real Estate I, Principles of Real Estate II, Law of Agency, Law of Contracts, Promulgated Contract Forms, and Real Estate Finance.',
        subSteps: [
          'Principles of Real Estate I (30 hrs)',
          'Principles of Real Estate II (30 hrs)',
          'Law of Agency (30 hrs)',
          'Law of Contracts (30 hrs)',
          'Promulgated Contract Forms (30 hrs)',
          'Real Estate Finance (30 hrs)'
        ],
        duration: '3–6 weeks'
      },
      {
        title: 'Submit your license application and pay TREC fees',
        description: 'File your Sales Agent application with TREC and pay the application fee. As of Dec 15, 2025, the fee is $205–$206. TREC reviews your education and issues eligibility to test.',
        duration: '1–2 weeks review',
        note: 'Application and exam eligibility are valid for one year.'
      },
      {
        title: 'Get fingerprinted and clear the background check',
        description: 'Schedule fingerprinting through IdentoGO (the TREC-approved vendor) for $38.25 and undergo a background check. Your application cannot be finalized until this clears.',
        duration: '1–3 weeks',
        note: 'Fingerprints remain valid for up to 2 years.'
      },
      {
        title: 'Schedule and pass the state exam',
        description: 'Once TREC approves your education, schedule the exam at a Pearson VUE center. The exam has 125 questions (85 national + 40 Texas-specific) and you get 4 hours. A score of 70% or higher passes.',
        subSteps: [
          '85 national questions',
          '40 Texas-specific questions',
          '4-hour time limit',
          'Passing score 70%'
        ],
        note: 'Exam fee is $43. You may retake up to 3 times within your eligibility year before extra education is required.',
        duration: 'Same day'
      },
      {
        title: 'Find a sponsoring broker to activate',
        description: 'A sales-agent license is inactive until a licensed Texas broker sponsors you. Once you submit the sponsorship through TREC, your license becomes active and you can practice.',
        subSteps: [
          'Interview brokerages',
          'Sign sponsorship',
          'TREC activates license'
        ],
        note: 'You cannot legally practice real estate in Texas without a sponsoring broker.'
      }
    ],
    timeline: [
      { stage: '180 hours of education done', duration: '3–6 weeks' },
      { stage: 'TREC application + fingerprint cleared', duration: '+1–3 weeks' },
      { stage: 'State exam passed', duration: 'Same day' },
      { stage: 'Sponsoring broker secured', duration: 'Within days' },
      { stage: 'License active', duration: '4–8 weeks total' }
    ],
    costBreakdown: {
      items: [
        { item: 'TREC application fee', fee: '$205–$206 (from Dec 15, 2025)' },
        { item: 'Pearson VUE exam fee', fee: '$43' },
        { item: 'Fingerprinting (IdentoGO)', fee: '$38.25' },
        { item: '180-hr pre-license course', fee: '$300–$500' }
      ],
      total: '~$590–$790 (government + exam fees; course separate)',
      footnote: 'TREC raised the application fee to $205–$206 effective December 15, 2025. Broker sponsorship itself is free.'
    },
    summaryPoints: [
      'Texas requires more pre-license education (180 hrs) than almost any other state.',
      'Your license is inactive until a broker sponsors you — you cannot practice solo.',
      'Texas has no reciprocity, so out-of-state agents must complete Texas-specific coursework.',
      'First renewal requires Sales Apprentice Education (SAE) plus 18 hours of CE.'
    ]
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
    cost: "$600 - $1,200",
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
        examFee: '$100',
        licenseFee: '$350'
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
    relatedSlugs: ['texas-real-estate-license'],

    quickAnswer: {
      summary: "To become a California real estate salesperson you must be 18+, complete 135 hours of DRE-approved education (Principles + Practice + one elective), pass a background check via Live Scan, and pass the 150-question state exam at 70%. You then find a sponsoring broker — your license is issued but stays inactive until a broker signs on. Most people finish in 2–6 months at a total cost of about $600–$1,200.",
      advantages: [
        "No college degree required — only three 45-hour courses",
        "One of the largest, highest-value markets in the U.S.",
        "License is portable within California's huge economy",
        "Strong commission potential for productive agents",
        "DRE-approved education is widely available online"
      ]
    },
    roadmap: [
      "Meet DRE eligibility (18+, legal presence, SSN/ITIN)",
      "Complete 135 hours (Principles + Practice + 1 elective)",
      "Submit exam/license application & pay DRE fees",
      "Complete Live Scan fingerprinting (background check)",
      "Pass the 150-question state exam (70%)",
      "Find a sponsoring broker to activate"
    ],
    comparison: {
      title: "California vs. Texas vs. Florida: salesperson requirements",
      columns: ["", "California", "Texas", "Florida"],
      rows: [
        { label: "Pre-license education", values: ["135 hrs", "180 hrs", "63 hrs"] },
        { label: "Exam questions", values: ["150", "125", "100"] },
        { label: "Passing score", values: ["70%", "70%", "75%"] },
        { label: "Exam time", values: ["3 hours", "4 hours", "3.5 hours"] },
        { label: "Exam fee", values: ["$100", "$43", "$36.75"] },
        { label: "Initial license fee", values: ["$350", "$205", "$83.75"] },
        { label: "Sponsoring broker", values: ["Required", "Required", "Required"] },
        { label: "Reciprocity", values: ["None", "None", "Mutual w/ some states"] }
      ]
    },
    registrationSteps: [
      {
        title: "Confirm you meet DRE eligibility",
        description: "You must be at least 18, provide proof of legal presence, and have an SSN or ITIN. No degree is required, but you must disclose any criminal history — most non-violent offenses are reviewed case-by-case.",
        subSteps: [
          "18+ years old",
          "Proof of legal presence",
          "SSN or ITIN"
        ]
      },
      {
        title: "Complete 135 hours of approved education",
        description: "Three 45-hour DRE-approved courses: Real Estate Principles (required), Real Estate Practice (required, now includes implicit-bias and fair-housing training), and one 45-hour elective (e.g., Legal Aspects, Real Estate Finance, Appraisal, Economics, Property Management). DRE pacing rules require a minimum of 18 days per course (54 days total).",
        duration: "4–8 weeks typical",
        subSteps: [
          "Real Estate Principles (45 hrs)",
          "Real Estate Practice (45 hrs)",
          "One elective (45 hrs)"
        ],
        note: "Members of the California State Bar are exempt from the courses."
      },
      {
        title: "Apply for the exam and submit fingerprints",
        description: "File the Combined Exam + License Application (RE 435) through the DRE eLicensing portal and pay the fees (exam $100, original license $350). Complete Live Scan fingerprinting (DOJ + FBI) for the background check — you can do this before or after the exam.",
        duration: "2–4 weeks processing",
        subSteps: [
          "Submit RE 435 (eLicensing)",
          "Pay $100 exam + $350 license",
          "Live Scan fingerprinting (~$49–$90)"
        ],
        note: "If you do not apply for the license within 2 years of passing, you must retake the exam."
      },
      {
        title: "Schedule and pass the state exam",
        description: "Once approved, schedule the exam at a DRE/PSI testing center. It has 150 multiple-choice questions and a 3-hour time limit; a score of 70% (105/150) passes. Results are given immediately.",
        duration: "Same day",
        subSteps: [
          "150 multiple-choice questions",
          "3-hour limit",
          "Passing score 70%"
        ],
        note: "If you fail, wait at least 18 days and repay the $100 exam fee to retake; no limit on attempts."
      },
      {
        title: "Find a sponsoring broker to activate",
        description: "Your salesperson license is issued but cannot be used until a licensed California broker sponsors you. Interview brokerages, compare splits and training, and have the broker countersign your license.",
        note: "You cannot practice real estate in California without a sponsoring broker."
      }
    ],
    timeline: [
      { stage: "Education done", duration: "4–8 weeks" },
      { stage: "Application + Live Scan cleared", duration: "+2–4 weeks" },
      { stage: "Exam passed", duration: "Same day" },
      { stage: "Broker sponsorship", duration: "Within days" },
      { stage: "License active", duration: "~8–16 weeks total" }
    ],
    costBreakdown: {
      items: [
        { item: "Pre-licensing education", fee: "$100–$700" },
        { item: "Exam fee", fee: "$100" },
        { item: "Original license fee", fee: "$350" },
        { item: "Live Scan fingerprinting", fee: "$49–$90" }
      ],
      total: "~$600–$1,200 total",
      footnote: "DRE raised fees July 1, 2024 (exam $60 to $100, license $245 to $350). Renewal: 45 hrs CE every 4 years."
    },
    summaryPoints: [
      "Three 45-hour courses are required — Principles, Practice, and one elective.",
      "DRE raised fees in 2024: $100 exam + $350 original license.",
      "California has no reciprocity; out-of-state licensees must pass the CA exam.",
      "License is inactive until a broker sponsors you."
    ]
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
    cost: "$350 - $700",
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
    reviewed: '2026-07-28',

    quickAnswer: {
      summary: "To get a Florida real estate sales associate license you must be 18+, hold a high-school diploma or GED, complete the 63-hour FREC I pre-license course, pass a background check, and pass the 100-question state exam at 75%. Your license is issued inactive until you affiliate with a Florida broker. The whole process usually takes 4–12 weeks and costs about $350–$700.",
      advantages: [
        "No degree required (high-school diploma/GED only)",
        "Fastest of the big three states — often 4–12 weeks",
        "Broker not required before the exam (only to activate)",
        "Mutual recognition with several states (easier for some out-of-state licensees)",
        "Strong, active real estate market"
      ]
    },
    roadmap: [
      "Meet Florida eligibility (18+, diploma/GED, SSN)",
      "Complete the 63-hour FREC I course",
      "Apply to DBPR & get fingerprinted",
      "Pass the 100-question state exam (75%)",
      "Activate with a sponsoring broker"
    ],
    comparison: {
      title: "Florida vs. Texas vs. California: salesperson requirements",
      columns: ["", "Florida", "Texas", "California"],
      rows: [
        { label: "Pre-license education", values: ["63 hrs", "180 hrs", "135 hrs"] },
        { label: "Exam questions", values: ["100", "125", "150"] },
        { label: "Passing score", values: ["75%", "70%", "70%"] },
        { label: "Exam time", values: ["3.5 hours", "4 hours", "3 hours"] },
        { label: "Exam fee", values: ["$36.75", "$43", "$100"] },
        { label: "Initial license fee", values: ["$83.75", "$205", "$350"] },
        { label: "Sponsoring broker", values: ["Required", "Required", "Required"] },
        { label: "Reciprocity", values: ["Mutual w/ some states", "None", "None"] }
      ]
    },
    registrationSteps: [
      {
        title: "Confirm Florida eligibility",
        description: "You must be at least 18, have a U.S. Social Security number, and hold a high-school diploma or GED. Criminal history is reviewed case-by-case and must be disclosed — failure to disclose is grounds for denial.",
        subSteps: [
          "18+ years old",
          "High-school diploma or GED",
          "U.S. SSN"
        ]
      },
      {
        title: "Complete the 63-hour FREC I course",
        description: "Take the single 63-hour FREC-approved Sales Associate Pre-Licensure Course (FREC Course I) from a DBPR-approved school, online or in person. You must pass the end-of-course exam at 70% or higher; your completion certificate is valid for 2 years.",
        duration: "1–8 weeks",
        note: "Course covers Chapter 475 law, agency, contracts, escrow, and real estate math."
      },
      {
        title: "Apply to DBPR and get fingerprinted",
        description: "Submit your license application through the DBPR portal (myfloridalicense.com) and pay the $83.75 fee. Complete electronic fingerprints via an FDLE-approved LiveScan/IdentoGO vendor (ORI FL920010Z). DBPR reviews applications in about 2–4 weeks and issues exam eligibility.",
        duration: "2–4 weeks",
        subSteps: [
          "DBPR application ($83.75)",
          "IdentoGO/LiveScan fingerprints (~$47–$80)",
          "Wait for eligibility notice"
        ]
      },
      {
        title: "Schedule and pass the state exam",
        description: "Schedule the Sales Associate Exam with Pearson VUE (statewide centers or online proctoring). It has 100 multiple-choice questions (national + Florida-specific) and a 3.5-hour limit; 75/100 (75%) passes. Results are immediate.",
        duration: "Same day",
        subSteps: [
          "100 questions (national + FL-specific)",
          "3.5-hour limit",
          "Passing score 75%"
        ],
        note: "You have 24 months from eligibility to pass; retakes are allowed within that window."
      },
      {
        title: "Activate your license with a broker",
        description: "After passing, your license is issued in inactive status. To practice, a licensed Florida broker submits an activation form through the DBPR portal. You have 24 months from passing the exam to activate, and must complete 45 hours of post-license education before your first renewal or the license becomes null and void.",
        note: "Renewal is every 2 years (March 31 of even years); later renewals need 14 hrs CE."
      }
    ],
    timeline: [
      { stage: "FREC I course done", duration: "1–8 weeks" },
      { stage: "DBPR + fingerprints cleared", duration: "+2–4 weeks" },
      { stage: "Exam passed", duration: "Same day" },
      { stage: "Broker activation", duration: "Within days" },
      { stage: "License active", duration: "~4–12 weeks total" }
    ],
    costBreakdown: {
      items: [
        { item: "63-hour pre-license course", fee: "$100–$450" },
        { item: "DBPR application fee", fee: "$83.75" },
        { item: "Fingerprinting (LiveScan)", fee: "$47–$80" },
        { item: "Pearson VUE exam fee", fee: "$36.75 per attempt" }
      ],
      total: "~$350–$700 total",
      footnote: "First renewal requires 45 hrs post-license education (or license is void); then 14 hrs CE every 2 years."
    },
    summaryPoints: [
      "One 63-hour course (FREC I) is all the education required.",
      "Exam is 100 questions at 75%; the license issues inactive until a broker activates it.",
      "Florida has mutual recognition with several states — some out-of-state licensees take only the FL-specific portion.",
      "Skip post-license education and your license is void, not just inactive."
    ]
  },
  {
    slug: 'enrolled-agent',
    name: 'IRS Enrolled Agent (EA)',
    shortName: 'Enrolled Agent',
    category: 'accounting',
    categoryLabel: 'Accounting & Tax',
    tagline: 'America\'s Tax Experts',
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
    relatedSlugs: ['cpa-exam'],

    quickAnswer: {
      summary: 'An Enrolled Agent (EA) is a federally licensed tax practitioner who earns the credential by passing the three-part Special Enrollment Examination (SEE) or through IRS work experience. The fastest route is: get a PTIN, pass all three SEE parts, then file Form 23 to enroll — no college degree required.',
      advantages: [
        'No bachelor’s degree or 150 credit hours required (unlike the CPA)',
        'Federally licensed — you can represent clients in any state, not just one',
        'Lower total cost (~$1,100) than most accounting credentials',
        'Testing windows are open year-round; you are not locked to certain months',
        'Specialized, in-demand expertise in federal taxation'
      ]
    },
    roadmap: [
      'Get your PTIN (Preparer Tax Identification Number)',
      'Apply for and schedule the SEE (Special Enrollment Exam)',
      'Pass all 3 parts of the SEE',
      'Submit Form 23 and pass the IRS background check',
      'Maintain your license with 72 hours of CE every 3 years'
    ],
    comparison: {
      title: 'Enrolled Agent vs. CPA: which is right for you?',
      columns: ['', 'Enrolled Agent', 'CPA'],
      rows: [
        { label: 'Issuing authority', values: ['IRS', 'State Board of Accountancy'] },
        { label: 'Primary focus', values: ['Federal taxation', 'Broad accounting & audit'] },
        { label: 'Education required', values: ['No degree required', '150 credit hours'] },
        { label: 'Exam parts', values: ['3 (SEE)', '4 (3 Core + 1 Discipline)'] },
        { label: 'Geographic scope', values: ['Federal / nationwide', 'Single state'] },
        { label: 'Approx. cost', values: ['~$1,100', '$1,500–$4,000+'] },
        { label: 'Experience to sit', values: ['None', '1–2 yrs typically'] }
      ]
    },
    registrationSteps: [
      {
        title: 'Obtain your PTIN',
        description: 'Every paid tax preparer must have a Preparer Tax Identification Number from the IRS. Create an account at IRS.gov and pay the annual fee (~$18.75 as of 2026). You cannot register for the SEE without one.',
        duration: 'About 1 day',
        note: 'Your PTIN must stay active (renewed every year) throughout the process.'
      },
      {
        title: 'Apply for the Special Enrollment Examination (SEE)',
        description: 'Starting in 2026 the SEE is delivered by PSI (formerly Prometric). Create a PSI testing account, choose which part to take first, and pay the fee.',
        subSteps: [
          'Create a PSI testing account',
          'Choose Part 1, 2, or 3 to begin (order is your choice)',
          'Pay $317 per part'
        ],
        duration: 'Same day'
      },
      {
        title: 'Pass all three parts of the SEE',
        description: 'The SEE has three parts: Part 1 — Individuals; Part 2 — Businesses; Part 3 — Representation, Practices & Procedures. Each part is 100 multiple-choice questions in 3.5 hours, scored on a 500 scale (pass mark 105).',
        subSteps: [
          'Part 1: Individuals',
          'Part 2: Businesses',
          'Part 3: Representation, Practices & Procedures'
        ],
        note: 'Parts may be taken in any order; you have up to 3 years from your first pass to clear all three.',
        duration: '3–6 months of study'
      },
      {
        title: 'Submit Form 23 and complete the IRS background check',
        description: 'After passing all three parts, file Form 23 (Application for Enrollment to Practice Before the IRS) and pay the $140 fee. The IRS then runs a tax-compliance and background check, which takes about 60 days.',
        duration: '~60 days'
      },
      {
        title: 'Receive your enrollment and maintain it',
        description: 'Once approved you are a federally authorized EA. To keep the license you must complete 72 hours of IRS-approved continuing education every 3 years, including at least 16 hours per year (2 of which are ethics).',
        subSteps: [
          'Enroll with an IRS-approved CE provider',
          'Complete 72 hours / 3 years (incl. 16 hrs/yr, 2 ethics)',
          'Renew your PTIN annually'
        ]
      }
    ],
    timeline: [
      { stage: 'PTIN issued', duration: 'Day 1' },
      { stage: 'All 3 SEE parts passed', duration: '3–6 months' },
      { stage: 'Form 23 filed + background check', duration: '+~60 days' },
      { stage: 'Enrolled & licensed', duration: '~6–12 months total' }
    ],
    costBreakdown: {
      items: [
        { item: 'PTIN (annual)', fee: '~$18.75 / yr' },
        { item: 'SEE Part 1 — Individuals', fee: '$317' },
        { item: 'SEE Part 2 — Businesses', fee: '$317' },
        { item: 'SEE Part 3 — Representation', fee: '$317' },
        { item: 'Form 23 enrollment application', fee: '$140' },
        { item: 'Exam review course (optional)', fee: '$300–$700' }
      ],
      total: '~$1,110 (exams + enrollment, before study materials)',
      footnote: 'From 2026 the SEE is delivered by PSI rather than Prometric. Fees are 2026 estimates and subject to change.'
    },
    summaryPoints: [
      'The Enrolled Agent is the only tax credential issued directly by the IRS, granting unlimited practice rights before the agency.',
      'No degree is required; the entire process can be finished in roughly 6–12 months.',
      'Total hard cost is about $1,100 for exams and enrollment.',
      'Unlike a CPA, an EA’s license is portable across all 50 states.'
    ]
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
    relatedSlugs: ['osha-30-construction'],

    quickAnswer: {
      summary: "OSHA 10 Construction is a 10-hour, entry-level outreach course that gives workers baseline awareness of the most common job-site hazards — falls, electrocution, struck-by, caught-in/between, PPE, and more. It ends with a DOL wallet card that many contractors require for site access. You can finish online in a day or two; there is no formal exam to fail, and the card never expires under federal rules (though employers often want a refresher every 3–5 years).",
      advantages: [
        "No experience or education prerequisites — open to anyone",
        "Fast: complete in as little as 1–2 days online",
        "DOL card is the industry-standard proof of safety orientation",
        "Often required just to get on a commercial job site",
        "Low cost ($25–$89) with the card included"
      ]
    },
    roadmap: [
      "Choose an OSHA-authorized 10-hour Construction provider",
      "Complete all required topic modules (within 6 months)",
      "Pass the provider's short knowledge check",
      "Get your completion certificate (temporary proof)",
      "Receive your official DOL card in the mail (6–8 weeks)"
    ],
    comparison: {
      title: "OSHA 10 vs. OSHA 30 Construction: which do you need?",
      columns: ["", "OSHA 10", "OSHA 30"],
      rows: [
        { label: "Best for", values: ["Entry-level workers", "Supervisors & safety leads"] },
        { label: "Duration", values: ["10 hours", "30 hours"] },
        { label: "Min. time to finish", values: ["2 days", "4 days"] },
        { label: "Depth", values: ["Core hazard awareness", "Hazards + safety program management"] },
        { label: "Online cost", values: ["$25–$89", "$89–$189"] },
        { label: "DOL card", values: ["Same card", "Same card"] }
      ]
    },
    registrationSteps: [
      {
        title: "Pick an OSHA-authorized trainer",
        description: "Only OSHA-authorized Outreach trainers can issue the official DOL card. Verify the trainer's authorization before paying — fraudulent 'OSHA cards' are common.",
        subSteps: [
          "Search OSHA's authorized-trainer list",
          "Confirm the Construction (29 CFR 1926) version",
          "Choose online or in-person"
        ],
        note: "Construction and General Industry cards differ — pick Construction for job-site work."
      },
      {
        title: "Complete the 10 required contact hours",
        description: "The course covers an Introduction to OSHA, the Focus Four hazards (falls, struck-by, caught-in/between, electrocution), PPE, health hazards (e.g., silica, lead, noise), and a few elective topics chosen by the trainer. Training is capped at 7.5 hours per day and must be finished within 6 months of starting.",
        duration: "1–2 days",
        subSteps: [
          "Introduction to OSHA",
          "Focus Four hazards",
          "PPE & health hazards",
          "Elective topics"
        ]
      },
      {
        title: "Pass the knowledge check",
        description: "Outreach training is awareness-level — there is no federal pass/fail exam, but most authorized providers require a short end-of-course quiz (commonly ~70% to pass) before they will issue the card.",
        note: "The DOL card proves attendance, not competency."
      },
      {
        title: "Get your certificate and DOL card",
        description: "Your trainer submits completion to OSHA and mails the official DOL wallet card within 6–8 weeks. Meanwhile the trainer can give you a temporary completion certificate to show employers.",
        duration: "Card in 6–8 weeks",
        note: "Replacement cards are requested through your original trainer."
      }
    ],
    timeline: [
      { stage: "Course completed", duration: "1–2 days" },
      { stage: "DOL card mailed", duration: "+6–8 weeks" },
      { stage: "Card in hand", duration: "~2 months total" }
    ],
    costBreakdown: {
      items: [
        { item: "OSHA 10 online course", fee: "$25–$89" },
        { item: "Official DOL card", fee: "Included" },
        { item: "In-person course (optional)", fee: "$150–$300" }
      ],
      total: "$25–$89 online (card included)",
      footnote: "Federal OSHA does not require this training; it is mandated by some states/cities (e.g., NYC Local Law 196) and many employers."
    },
    summaryPoints: [
      "OSHA 10 is awareness training, not a certification — the DOL card proves attendance, not competency.",
      "The Construction version (29 CFR 1926) is required for job-site work; General Industry is for factories and warehouses.",
      "Federal cards never expire, but employers and some jurisdictions require a refresher every 3–5 years.",
      "You must finish the course within 6 months of starting."
    ]
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
    relatedSlugs: ['osha-10-construction'],

    quickAnswer: {
      summary: "OSHA 30 Construction is the 30-hour outreach course for supervisors, foremen, and workers with safety responsibility. It covers everything in OSHA 10 plus how to manage safety and health programs, run hazard assessments, handle recordkeeping, and apply multi-employer policies. The DOL card it yields is identical in form to the 10-hour card but signals deeper training — and is the level many general contractors require for site leadership.",
      advantages: [
        "Required for supervisory and safety-leadership roles",
        "Covers safety program management, not just personal awareness",
        "Same official DOL card, stronger signal to employers",
        "Often mandated for site safety managers/coordinators (e.g., NYC LL196)",
        "Online options from $89"
      ]
    },
    roadmap: [
      "Choose an OSHA-authorized 30-hour Construction provider",
      "Complete all modules (within 6 months)",
      "Pass the provider's knowledge check",
      "Get your completion certificate",
      "Receive your DOL card (6–8 weeks)"
    ],
    comparison: {
      title: "OSHA 10 vs. OSHA 30 Construction: which do you need?",
      columns: ["", "OSHA 10", "OSHA 30"],
      rows: [
        { label: "Best for", values: ["Entry-level workers", "Supervisors & safety leads"] },
        { label: "Duration", values: ["10 hours", "30 hours"] },
        { label: "Min. time to finish", values: ["2 days", "4 days"] },
        { label: "Depth", values: ["Core hazard awareness", "Hazards + safety program management"] },
        { label: "Online cost", values: ["$25–$89", "$89–$189"] },
        { label: "DOL card", values: ["Same card", "Same card"] }
      ]
    },
    registrationSteps: [
      {
        title: "Confirm you need the 30-hour level",
        description: "If you supervise crews, run job sites, or own safety responsibilities, OSHA 30 is the expected credential. When in doubt, ask the general contractor or project owner — they set the site-access requirement.",
        note: "You can take OSHA 30 directly; no prior OSHA 10 is required."
      },
      {
        title: "Choose an authorized 30-hour Construction trainer",
        description: "Use only an OSHA-authorized Outreach trainer (verify their card). Select the Construction (29 CFR 1926) version.",
        subSteps: [
          "Verify trainer authorization",
          "Construction version",
          "Online or in-person"
        ]
      },
      {
        title: "Complete 30 contact hours",
        description: "Builds on all OSHA 10 topics in greater depth and adds management material: safety and health program management, multi-employer worksite policies, recordkeeping and OSHA reporting, and more elective topics (scaffolding, excavation, cranes, welding, electrical). Capped at 7.5 hours/day; complete within 6 months.",
        duration: "4+ days",
        subSteps: [
          "All OSHA 10 topics, deeper",
          "Safety program management",
          "Recordkeeping & reporting",
          "Advanced electives"
        ]
      },
      {
        title: "Pass the knowledge check and get your card",
        description: "Most providers require a short end-of-course quiz before issuing the card. The trainer submits to OSHA; your DOL wallet card arrives in 6–8 weeks, with a temporary certificate in the meantime.",
        duration: "Card in 6–8 weeks",
        note: "Replacement cards come through your original trainer."
      }
    ],
    timeline: [
      { stage: "Course completed", duration: "4+ days" },
      { stage: "DOL card mailed", duration: "+6–8 weeks" },
      { stage: "Card in hand", duration: "~2 months total" }
    ],
    costBreakdown: {
      items: [
        { item: "OSHA 30 online course", fee: "$89–$189" },
        { item: "Official DOL card", fee: "Included" },
        { item: "In-person course (optional)", fee: "$300–$600" }
      ],
      total: "$89–$189 online (card included)",
      footnote: "Federal OSHA does not require this training; it is mandated by some states/cities and many employers for supervisors."
    },
    summaryPoints: [
      "OSHA 30 is for people responsible for others' safety — not just their own.",
      "No prerequisite: you can skip OSHA 10 and go straight to 30.",
      "The card is identical in form to OSHA 10; the difference is the depth of training behind it.",
      "Complete within 6 months; the federal card never expires (employer refreshers every 3–5 years are common)."
    ]
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
    reviewed: '2026-07-28',

    quickAnswer: {
      summary: "EPA Section 608 certification is the federal credential required before any technician opens a refrigerant circuit on stationary air-conditioning, heat-pump, or refrigeration equipment. You choose a type — Core plus Type I (small appliances), Type II (high-pressure), Type III (low-pressure), or Universal (all three) — pass a 25-question multiple-choice section per type at 70%, and you are certified for life. No degree and no classes are required; many technicians self-study and test for $20–$90.",
      advantages: [
        "Legally required to handle refrigerants — penalties exceed $44,000/day without it",
        "No education prerequisite; self-study is enough",
        "Certification never expires and needs no renewal or CE",
        "Universal card lets you work on any stationary equipment",
        "Low one-time cost ($20–$90)"
      ]
    },
    roadmap: [
      "Decide which type you need (Core + Type I/II/III or Universal)",
      "Study the Section 608 rules (4–12 hours)",
      "Find an EPA-approved testing organization",
      "Schedule and pass each required section (70% each)",
      "Receive your certification card (permanent)"
    ],
    comparison: {
      title: "EPA 608 types: which certification do you need?",
      columns: ["", "Type I", "Type II", "Type III", "Universal"],
      rows: [
        { label: "Covers", values: ["Small appliances ≤5 lb", "High-pressure systems", "Low-pressure chillers", "All equipment"] },
        { label: "Examples", values: ["Fridges, window AC", "Splits, rooftop units", "Centrifugal chillers", "Any stationary equipment"] },
        { label: "Core section", values: ["Required", "Required", "Required", "Required (Core + all 3)"] },
        { label: "Questions", values: ["25", "25", "25", "100 total"] },
        { label: "Best for", values: ["Appliance techs", "Commercial HVAC", "Chiller techs", "Full-spectrum techs"] }
      ]
    },
    registrationSteps: [
      {
        title: "Choose your certification type",
        description: "Core is mandatory for everyone. Add Type I (small appliances with 5 lb or less original charge), Type II (high-pressure systems like R-410A/R-22 splits and rooftop units), or Type III (low-pressure centrifugal chillers). Pass all four for Universal — most employers prefer Universal.",
        subSteps: [
          "Core (mandatory)",
          "Type I — small appliances",
          "Type II — high pressure",
          "Type III — low pressure",
          "Universal = all of the above"
        ],
        note: "Motor-vehicle AC is a separate Section 609 credential."
      },
      {
        title: "Study the regulations",
        description: "The exam tests direct knowledge of the Clean Air Act Section 608: ozone depletion, the venting prohibition, recovery/recycle/reclaim definitions, leak-rate tiers, and refrigerant identification. Experienced technicians usually study 4–12 hours.",
        duration: "4–12 hours"
      },
      {
        title: "Find an EPA-approved test organization",
        description: "Approved organizations include ESCO Institute, Mainstream Engineering, HVAC Excellence, NATE, RSES, and many trade schools. Some providers (e.g., SkillCat) offer free testing.",
        subSteps: [
          "ESCO / Mainstream / HVAC Excellence",
          "Trade schools & unions",
          "Free options available"
        ]
      },
      {
        title: "Take and pass each section",
        description: "Each section is 25 multiple-choice questions; you need 70% (18/25) on each. Universal is 100 questions total (four 25-question sections) — you can take them together or separately. Type I may be open-book or mail-in (mail-in needs 84%); Types II, III, and Universal are closed-book and proctored.",
        subSteps: [
          "Core — 25 questions",
          "Type section(s) — 25 each",
          "Universal — all four"
        ],
        note: "If you fail one section, retake only that section; passed sections stay valid."
      },
      {
        title: "Receive your card",
        description: "The testing organization issues your certificate and wallet card. Under federal law the certification is permanent — no expiration, no renewal, no continuing education.",
        note: "Refrigerant suppliers must verify your card before selling regulated refrigerants in containers over about 2 lbs."
      }
    ],
    timeline: [
      { stage: "Study & schedule", duration: "Days to weeks" },
      { stage: "Exam sat & passed", duration: "Same day" },
      { stage: "Card issued", duration: "Days (digital) / 2–4 weeks (physical)" }
    ],
    costBreakdown: {
      items: [
        { item: "Exam fee (per section/sitting)", fee: "$20–$35 (Universal ~$25–$90)" },
        { item: "Study guide / practice tests", fee: "$20–$80 (optional)" },
        { item: "Free testing option", fee: "$0 (some providers)" }
      ],
      total: "~$40–$115 all-in first attempt (can be free)",
      footnote: "Certification never expires under federal law — a one-time cost."
    },
    summaryPoints: [
      "Required by the Clean Air Act to handle any refrigerant in stationary equipment.",
      "Four levels: Core + Type I/II/III, or Universal (all three) — Universal is what most employers want.",
      "70% (18/25) per section; Universal is 100 questions total.",
      "Permanent certification — no renewal or CE ever required."
    ]
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
      'Meet your state board\'s educational requirements (usually 150 hours).',
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
    renewalInfo: 'Varies by state, typically 120 hours of CE every 3 years.',

    quickAnswer: {
      summary: 'The CPA license is earned in three stages — Education (150 credit hours), Exam (4 sections under the CPA Evolution model), and Experience (typically 1–2 years). You apply through your State Board of Accountancy, receive a Notice to Schedule (NTS), and sit for the Core and Discipline sections at a Prometric center. Most candidates finish in 12–18 months.',
      advantages: [
        'Highest recognized credential in accounting — the “gold standard”',
        'Required (by law) to sign audit opinions and issue attestations',
        'Opens audit, tax, consulting, and CFO-track career paths',
        'Strong, durable salary premium over non-CPA accountants',
        'Portable across states through reciprocity once licensed'
      ]
    },
    roadmap: [
      'Complete 150 college credit hours (bachelor’s + extra)',
      'Apply to your State Board of Accountancy',
      'Receive ATT & Notice to Schedule (NTS)',
      'Pass 3 Core + 1 Discipline sections within 18 or 30 months',
      'Pass the AICPA Ethics Exam (most states)',
      'Complete 1–2 years of supervised experience',
      'Apply for and receive your license'
    ],
    comparison: {
      title: 'CPA vs. Enrolled Agent: which is right for you?',
      columns: ['', 'CPA', 'Enrolled Agent'],
      rows: [
        { label: 'Issuing authority', values: ['State Board of Accountancy', 'IRS'] },
        { label: 'Education', values: ['150 credit hours', 'None required'] },
        { label: 'Exam', values: ['4 sections (3 Core + 1 Discipline)', '3 SEE parts'] },
        { label: 'Time to complete', values: ['12–18 months', '6–12 months'] },
        { label: 'Cost', values: ['$1,500–$4,000+', '~$1,100'] },
        { label: 'Scope', values: ['Audit, tax, attest (state)', 'Federal tax (nationwide)'] },
        { label: 'Experience', values: ['1–2 years', 'None to sit'] }
      ]
    },
    registrationSteps: [
      {
        title: 'Meet the 150-hour education requirement',
        description: 'Every U.S. jurisdiction requires 150 semester hours of college education to sit — 30 hours beyond a typical bachelor’s degree. If you’re short, add graduate courses, community-college classes, or a master’s.',
        subSteps: [
          'Bachelor’s degree (≈120 hrs)',
          'Additional 30 hrs (graduate, community college, or online)'
        ],
        note: 'Some states let you sit with 120 hours but require 150 to actually license.'
      },
      {
        title: 'Apply to your State Board of Accountancy',
        description: 'Submit your application, official transcripts, and the application fee ($20–$150 by state). The Board verifies your credits and issues an Attestation of Eligibility (ATT).',
        subSteps: [
          'Send official transcripts',
          'Pay the Board application fee',
          'Wait for ATT (valid 90 days)'
        ],
        duration: '2–6 weeks'
      },
      {
        title: 'Receive your Notice to Schedule (NTS)',
        description: 'Once approved, pay the NASBA exam fee (~$262.64 per section) and receive your NTS, valid for 6 months. You need the NTS to book a Prometric appointment.',
        subSteps: [
          'Pay NASBA the per-section fee',
          'Receive NTS (valid 6 months)',
          'Book Prometric appointment'
        ],
        note: 'International candidates pay an extra $375–$390 per section.'
      },
      {
        title: 'Pass the 4 exam sections',
        description: 'Under CPA Evolution the exam has 3 mandatory Core sections — AUD (Audit), FAR (Financial Accounting & Reporting), REG (Regulation) — plus 1 Discipline you choose: BAR (Business Analysis & Reporting), ISC (Information Systems & Controls), or TCP (Tax Compliance & Planning). Each is 4 hours, with MCQs plus task-based simulations, scaled 0–99 (pass 75).',
        subSteps: [
          'Core: AUD',
          'Core: FAR',
          'Core: REG',
          'Discipline: BAR / ISC / TCP (choose one)'
        ],
        note: 'All 4 must be passed within an 18-month (most states) or 30-month window.',
        duration: '6–12 months of testing'
      },
      {
        title: 'Pass the AICPA Ethics Exam',
        description: 'Most states require the AICPA self-study Ethics Exam — a 40-question, open-book test — before licensing. Cost is typically $150–$200.',
        duration: 'A few weeks'
      },
      {
        title: 'Complete the experience requirement',
        description: 'Nearly every state requires 1–2 years (about 2,000 hours) of supervised accounting experience, verified by a licensed CPA.',
        subSteps: [
          'Secure a CPA-supervised role',
          'Log ~2,000 hours',
          'Obtain CPA verification'
        ],
        note: 'Some states accept industry or non-public accounting experience.',
        duration: '1–2 years'
      },
      {
        title: 'Apply for your license',
        description: 'Submit your final application and pay the license fee ($100–$500). Once issued, maintain it with ~120 hours of CPE every 3 years (varies by state).',
        duration: '2–4 weeks'
      }
    ],
    timeline: [
      { stage: '150 credit hours completed', duration: '~4 years (undergrad)' },
      { stage: 'Board application + ATT', duration: '2–6 weeks' },
      { stage: 'All 4 exam sections passed', duration: '6–12 months' },
      { stage: 'Ethics + experience', duration: '1–2 years' },
      { stage: 'License issued', duration: '12–18 months total' }
    ],
    costBreakdown: {
      items: [
        { item: 'State Board application fee', fee: '$20–$150' },
        { item: 'NASBA exam fee (4 sections)', fee: '~$1,050 ($262.64 ea.)' },
        { item: 'International testing surcharge (per section)', fee: '$375–$390' },
        { item: 'AICPA Ethics Exam', fee: '$150–$200' },
        { item: 'License fee', fee: '$100–$500' },
        { item: 'Review course (recommended)', fee: '$1,500–$3,500' }
      ],
      total: '$1,400–$2,000+ in fees (review courses add $1,500–$3,500)',
      footnote: 'Fees vary by jurisdiction. International candidates pay roughly $375–$390 extra per section.'
    },
    summaryPoints: [
      'The CPA is the only license that lets you sign audit opinions and issue attestations.',
      'The 150-hour education rule is the single biggest hurdle for most candidates.',
      'Under CPA Evolution (2024+), you choose 1 of 3 Discipline sections after the 3 Core.',
      'Most states give you 18 (some 30) months to pass all 4 sections once you pass your first.'
    ]
  }
];

// NOTE: 15 mock/placeholder credentials were previously injected here (removed
// 2026-07-31). Thin placeholder copy harms pSEO rankings, so they were dropped.
// Re-add real, researched entries through the data pipeline when ready.

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
