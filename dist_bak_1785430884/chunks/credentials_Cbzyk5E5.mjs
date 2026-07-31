const credentials = [
  {
    slug: "texas-real-estate-license",
    name: "Texas Real Estate Sales Agent License",
    shortName: "TX Real Estate",
    category: "real-estate",
    categoryLabel: "Real Estate",
    tagline: "Start your property career in the Lone Star State",
    description: "A Texas Real Estate Sales Agent license permits you to represent buyers and sellers in real estate transactions in Texas under the sponsorship of a licensed broker. Administered by the Texas Real Estate Commission (TREC), it requires completing 180 hours of pre-licensing education.",
    type: "License",
    time: "4-8 weeks",
    cost: "$400 - $800",
    difficulty: "Moderate",
    audience: "Aspiring Real Estate Agents in Texas",
    accent: "coral",
    states: ["TX"],
    isNational: false,
    stateSpecificData: {
      "TX": {
        regulatorName: "Texas Real Estate Commission (TREC)",
        regulatorUrl: "https://www.trec.texas.gov/",
        requiredHours: 180,
        examFee: "$43",
        licenseFee: "$205",
        additionalRequirements: ["Background check", "Fingerprinting ($38.25)", "Sponsoring broker"]
      }
    },
    examDetails: {
      questionCount: 125,
      duration: "4 hours",
      passRate: "58%",
      retakePolicy: "May retake up to 3 times before additional education is required.",
      format: "Multiple-choice, administered by Pearson VUE"
    },
    prerequisites: ["18 years or older", "US citizen or lawfully admitted alien", "Meet TREC qualifications for honesty and integrity"],
    providers: [
      {
        name: "Colibri Real Estate",
        url: "https://www.colibrirealestate.com/",
        affiliateUrl: "#affiliate-placeholder",
        price: "$459",
        features: ["180-hour state approved", "Pass or Don't Pay Guarantee", "Instructor Support"],
        isSponsored: true,
        rating: 4.6
      },
      {
        name: "Kaplan Real Estate Education",
        url: "https://www.kapre.com/",
        affiliateUrl: "#affiliate-placeholder",
        price: "$399",
        features: ["180 hours of TREC-approved education", "Interactive study groups", "Live online options"],
        isSponsored: false,
        rating: 4.5
      },
      {
        name: "AceableAgent",
        url: "https://www.aceableagent.com/",
        affiliateUrl: "#affiliate-placeholder",
        price: "$495",
        features: ["Mobile-first app design", "TREC-approved 180 hours", "Ace or Don't Pay guarantee"],
        isSponsored: false,
        rating: 4.8
      }
    ],
    facts: [
      { label: "Required Hours", value: "180" },
      { label: "Exam Format", value: "125 Questions" },
      { label: "Average Pass Rate", value: "58%" },
      { label: "Administering Body", value: "TREC" }
    ],
    steps: [
      "Complete 180 hours of TREC-approved pre-license education.",
      "Submit your application to TREC along with the required fees.",
      "Get fingerprinted and pass a background check.",
      "Pass the Texas Real Estate Sales Agent exam (National and State portions).",
      "Find a sponsoring broker to activate your license."
    ],
    faq: [
      { question: "Do I need a degree to get a Texas real estate license?", answer: "No, a college degree is not required. You only need to complete the 180 hours of approved pre-license education." },
      { question: "Can I take the exam online?", answer: "No, the Texas real estate exam must be taken in person at a Pearson VUE testing center." },
      { question: "How long does the background check take?", answer: "Background checks usually take a few weeks to process, but can take longer if you have a criminal history." }
    ],
    source: "Texas Real Estate Commission",
    sourceUrl: "https://www.trec.texas.gov/agency-information/fee-schedule",
    reviewed: "2026-07-28",
    relatedSlugs: ["california-real-estate-license", "florida-real-estate-license"],
    salaryRange: "$40,000 - $100,000+",
    renewalInfo: "Renew every 2 years; complete 18 hours of Continuing Education (CE) including Legal Update I & II.",
    quickAnswer: {
      summary: "To become a Texas real estate sales agent you must be 18+, complete 180 hours of TREC-approved pre-license education, pass a background check with fingerprints, and pass the state exam (national + Texas portions). You then activate your license by finding a sponsoring broker. The active process usually takes 4–8 weeks.",
      advantages: [
        "No college degree required — only 180 hours of coursework",
        "Fast entry (weeks, not years) into a commission-based career",
        "TREC education is fully available online through approved providers",
        "Unlimited earning potential through commissions",
        "Lower startup cost than most professional licenses"
      ]
    },
    roadmap: [
      "Meet TREC eligibility (18+, legal resident, good character)",
      "Complete 180 hours of pre-license education",
      "Submit application + fees to TREC",
      "Get fingerprinted (IdentoGO) & background check",
      "Schedule & pass the state exam (Pearson VUE)",
      "Find a sponsoring broker to activate"
    ],
    comparison: {
      title: "Texas vs. California vs. Florida: sales-agent requirements",
      columns: ["", "Texas", "California", "Florida"],
      rows: [
        { label: "Pre-license education", values: ["180 hrs", "135 hrs", "63 hrs"] },
        { label: "State exam questions", values: ["125", "150", "100"] },
        { label: "Exam time limit", values: ["4 hours", "3h 15m", "3h 30m"] },
        { label: "Exam fee", values: ["$43", "$60", "$36.75"] },
        { label: "Initial license fee", values: ["$205", "$245", "$83.75"] },
        { label: "Sponsoring broker", values: ["Required", "Required", "Required"] }
      ]
    },
    registrationSteps: [
      {
        title: "Confirm you meet TREC eligibility",
        description: "You must be at least 18 years old, a U.S. citizen or lawfully admitted alien, and meet TREC’s standards of honesty, trustworthiness, and integrity. You can start education before applying.",
        subSteps: [
          "18+ years old",
          "U.S. citizen or legal resident",
          "No disqualifying criminal history"
        ]
      },
      {
        title: "Complete 180 hours of qualifying education",
        description: "Texas requires six 30-hour courses through a TREC-approved provider (online or in person): Principles of Real Estate I, Principles of Real Estate II, Law of Agency, Law of Contracts, Promulgated Contract Forms, and Real Estate Finance.",
        subSteps: [
          "Principles of Real Estate I (30 hrs)",
          "Principles of Real Estate II (30 hrs)",
          "Law of Agency (30 hrs)",
          "Law of Contracts (30 hrs)",
          "Promulgated Contract Forms (30 hrs)",
          "Real Estate Finance (30 hrs)"
        ],
        duration: "3–6 weeks"
      },
      {
        title: "Submit your license application and pay TREC fees",
        description: "File your Sales Agent application with TREC and pay the application fee. As of Dec 15, 2025, the fee is $205–$206. TREC reviews your education and issues eligibility to test.",
        duration: "1–2 weeks review",
        note: "Application and exam eligibility are valid for one year."
      },
      {
        title: "Get fingerprinted and clear the background check",
        description: "Schedule fingerprinting through IdentoGO (the TREC-approved vendor) for $38.25 and undergo a background check. Your application cannot be finalized until this clears.",
        duration: "1–3 weeks",
        note: "Fingerprints remain valid for up to 2 years."
      },
      {
        title: "Schedule and pass the state exam",
        description: "Once TREC approves your education, schedule the exam at a Pearson VUE center. The exam has 125 questions (85 national + 40 Texas-specific) and you get 4 hours. A score of 70% or higher passes.",
        subSteps: [
          "85 national questions",
          "40 Texas-specific questions",
          "4-hour time limit",
          "Passing score 70%"
        ],
        note: "Exam fee is $43. You may retake up to 3 times within your eligibility year before extra education is required.",
        duration: "Same day"
      },
      {
        title: "Find a sponsoring broker to activate",
        description: "A sales-agent license is inactive until a licensed Texas broker sponsors you. Once you submit the sponsorship through TREC, your license becomes active and you can practice.",
        subSteps: [
          "Interview brokerages",
          "Sign sponsorship",
          "TREC activates license"
        ],
        note: "You cannot legally practice real estate in Texas without a sponsoring broker."
      }
    ],
    timeline: [
      { stage: "180 hours of education done", duration: "3–6 weeks" },
      { stage: "TREC application + fingerprint cleared", duration: "+1–3 weeks" },
      { stage: "State exam passed", duration: "Same day" },
      { stage: "Sponsoring broker secured", duration: "Within days" },
      { stage: "License active", duration: "4–8 weeks total" }
    ],
    costBreakdown: {
      items: [
        { item: "TREC application fee", fee: "$205–$206 (from Dec 15, 2025)" },
        { item: "Pearson VUE exam fee", fee: "$43" },
        { item: "Fingerprinting (IdentoGO)", fee: "$38.25" },
        { item: "180-hr pre-license course", fee: "$300–$500" }
      ],
      total: "~$590–$790 (government + exam fees; course separate)",
      footnote: "TREC raised the application fee to $205–$206 effective December 15, 2025. Broker sponsorship itself is free."
    },
    summaryPoints: [
      "Texas requires more pre-license education (180 hrs) than almost any other state.",
      "Your license is inactive until a broker sponsors you — you cannot practice solo.",
      "Texas has no reciprocity, so out-of-state agents must complete Texas-specific coursework.",
      "First renewal requires Sales Apprentice Education (SAE) plus 18 hours of CE."
    ]
  },
  {
    slug: "california-real-estate-license",
    name: "California Real Estate Salesperson License",
    shortName: "CA Real Estate",
    category: "real-estate",
    categoryLabel: "Real Estate",
    tagline: "Your ticket to the California housing market",
    description: "To become a real estate agent in California, you must be licensed by the Department of Real Estate (DRE). This requires completing 135 hours of college-level pre-license education.",
    type: "License",
    time: "3-6 months",
    cost: "$400 - $1,000",
    difficulty: "Moderate",
    audience: "Aspiring Real Estate Agents in California",
    accent: "blue",
    states: ["CA"],
    isNational: false,
    stateSpecificData: {
      "CA": {
        regulatorName: "Department of Real Estate (DRE)",
        regulatorUrl: "https://www.dre.ca.gov/",
        requiredHours: 135,
        examFee: "$60",
        licenseFee: "$245"
      }
    },
    examDetails: {
      questionCount: 150,
      duration: "3 hours 15 minutes",
      passRate: "50%",
      format: "Multiple-choice"
    },
    prerequisites: ["18 years or older", "Honest and truthful (background check required)"],
    providers: [
      {
        name: "The CE Shop",
        url: "https://www.theceshop.com/",
        affiliateUrl: "#affiliate-placeholder",
        price: "$299",
        features: ["135-hour DRE approved", "High pass rates", "100% online"],
        isSponsored: true,
        rating: 4.7
      }
    ],
    facts: [
      { label: "Required Hours", value: "135" },
      { label: "Exam Format", value: "150 Questions" }
    ],
    steps: [
      "Complete 135 hours of approved college-level real estate courses.",
      "Submit the Salesperson Exam/License Application with required fees.",
      "Complete Live Scan fingerprinting for background check.",
      "Pass the California Real Estate Salesperson Exam with a score of 70% or higher.",
      "Obtain sponsorship from a licensed California Real Estate Broker."
    ],
    source: "California Department of Real Estate",
    sourceUrl: "https://www.dre.ca.gov/Examinees/RequirementsSales.html",
    reviewed: "2026-07-28",
    relatedSlugs: ["texas-real-estate-license"]
  },
  {
    slug: "florida-real-estate-license",
    name: "Florida Real Estate Sales Associate License",
    shortName: "FL Real Estate",
    category: "real-estate",
    categoryLabel: "Real Estate",
    tagline: "Start selling real estate in the Sunshine State",
    description: "A Florida Real Estate Sales Associate license, administered by DBPR/FREC, allows you to practice real estate under a licensed broker. It requires 63 hours of pre-license education.",
    type: "License",
    time: "4-8 weeks",
    cost: "$300 - $600",
    difficulty: "Moderate",
    audience: "Aspiring Agents in Florida",
    accent: "gold",
    states: ["FL"],
    isNational: false,
    stateSpecificData: {
      "FL": {
        regulatorName: "DBPR / FREC",
        regulatorUrl: "http://www.myfloridalicense.com/",
        requiredHours: 63,
        examFee: "$36.75",
        licenseFee: "$83.75",
        additionalRequirements: ["Fingerprinting"]
      }
    },
    prerequisites: ["18 years or older", "High school diploma or equivalent"],
    providers: [
      {
        name: "Gold Coast Schools",
        url: "https://goldcoastschools.com/",
        price: "$399",
        features: ["63-hour FREC approved", "In-person and online"],
        isSponsored: false,
        rating: 4.8
      }
    ],
    facts: [
      { label: "Required Hours", value: "63" }
    ],
    steps: [
      "Complete the 63-hour FREC-approved pre-license course.",
      "Submit your application to the DBPR and pay the fee.",
      "Get your electronic fingerprints taken.",
      "Pass the Florida state real estate exam.",
      "Activate your license with a sponsoring broker."
    ],
    source: "DBPR",
    sourceUrl: "http://www.myfloridalicense.com/DBPR/real-estate-commission/",
    reviewed: "2026-07-28"
  },
  {
    slug: "enrolled-agent",
    name: "IRS Enrolled Agent (EA)",
    shortName: "Enrolled Agent",
    category: "accounting",
    categoryLabel: "Accounting & Tax",
    tagline: "America's Tax Experts",
    description: "An Enrolled Agent is a person who has earned the privilege of representing taxpayers before the Internal Revenue Service by passing a three-part comprehensive IRS test.",
    type: "Exam",
    time: "3-9 months",
    cost: "$800 - $1,500",
    difficulty: "Hard",
    audience: "Tax Professionals",
    accent: "indigo",
    isNational: true,
    examDetails: {
      format: "3 Parts (Individuals, Businesses, Representation)",
      duration: "3.5 hours per part",
      passRate: "~70%"
    },
    providers: [
      {
        name: "Surgent EA Review",
        url: "https://www.surgent.com/",
        affiliateUrl: "#affiliate-placeholder",
        price: "$499",
        features: ["Adaptive learning technology", "Pass guarantee"],
        isSponsored: true,
        rating: 4.7
      },
      {
        name: "Gleim EA Review",
        url: "https://www.gleim.com/",
        affiliateUrl: "#affiliate-placeholder",
        price: "$629",
        features: ["Largest test bank", "Access until you pass"],
        isSponsored: false,
        rating: 4.8
      }
    ],
    facts: [
      { label: "Exam Parts", value: "3" },
      { label: "Administering Body", value: "IRS (Prometric)" }
    ],
    steps: [
      "Obtain a Preparer Tax Identification Number (PTIN).",
      "Apply to take the Special Enrollment Examination (SEE).",
      "Pass all three parts of the SEE.",
      "Apply for enrollment and pass a background check."
    ],
    faq: [
      { question: "EA vs CPA?", answer: "EAs specialize in taxation globally, CPAs have broader accounting scopes typically at a state level." }
    ],
    source: "IRS",
    sourceUrl: "https://www.irs.gov/tax-professionals/enrolled-agents/",
    reviewed: "2026-07-28",
    relatedSlugs: ["cpa-exam"],
    quickAnswer: {
      summary: "An Enrolled Agent (EA) is a federally licensed tax practitioner who earns the credential by passing the three-part Special Enrollment Examination (SEE) or through IRS work experience. The fastest route is: get a PTIN, pass all three SEE parts, then file Form 23 to enroll — no college degree required.",
      advantages: [
        "No bachelor’s degree or 150 credit hours required (unlike the CPA)",
        "Federally licensed — you can represent clients in any state, not just one",
        "Lower total cost (~$1,100) than most accounting credentials",
        "Testing windows are open year-round; you are not locked to certain months",
        "Specialized, in-demand expertise in federal taxation"
      ]
    },
    roadmap: [
      "Get your PTIN (Preparer Tax Identification Number)",
      "Apply for and schedule the SEE (Special Enrollment Exam)",
      "Pass all 3 parts of the SEE",
      "Submit Form 23 and pass the IRS background check",
      "Maintain your license with 72 hours of CE every 3 years"
    ],
    comparison: {
      title: "Enrolled Agent vs. CPA: which is right for you?",
      columns: ["", "Enrolled Agent", "CPA"],
      rows: [
        { label: "Issuing authority", values: ["IRS", "State Board of Accountancy"] },
        { label: "Primary focus", values: ["Federal taxation", "Broad accounting & audit"] },
        { label: "Education required", values: ["No degree required", "150 credit hours"] },
        { label: "Exam parts", values: ["3 (SEE)", "4 (3 Core + 1 Discipline)"] },
        { label: "Geographic scope", values: ["Federal / nationwide", "Single state"] },
        { label: "Approx. cost", values: ["~$1,100", "$1,500–$4,000+"] },
        { label: "Experience to sit", values: ["None", "1–2 yrs typically"] }
      ]
    },
    registrationSteps: [
      {
        title: "Obtain your PTIN",
        description: "Every paid tax preparer must have a Preparer Tax Identification Number from the IRS. Create an account at IRS.gov and pay the annual fee (~$18.75 as of 2026). You cannot register for the SEE without one.",
        duration: "About 1 day",
        note: "Your PTIN must stay active (renewed every year) throughout the process."
      },
      {
        title: "Apply for the Special Enrollment Examination (SEE)",
        description: "Starting in 2026 the SEE is delivered by PSI (formerly Prometric). Create a PSI testing account, choose which part to take first, and pay the fee.",
        subSteps: [
          "Create a PSI testing account",
          "Choose Part 1, 2, or 3 to begin (order is your choice)",
          "Pay $317 per part"
        ],
        duration: "Same day"
      },
      {
        title: "Pass all three parts of the SEE",
        description: "The SEE has three parts: Part 1 — Individuals; Part 2 — Businesses; Part 3 — Representation, Practices & Procedures. Each part is 100 multiple-choice questions in 3.5 hours, scored on a 500 scale (pass mark 105).",
        subSteps: [
          "Part 1: Individuals",
          "Part 2: Businesses",
          "Part 3: Representation, Practices & Procedures"
        ],
        note: "Parts may be taken in any order; you have up to 3 years from your first pass to clear all three.",
        duration: "3–6 months of study"
      },
      {
        title: "Submit Form 23 and complete the IRS background check",
        description: "After passing all three parts, file Form 23 (Application for Enrollment to Practice Before the IRS) and pay the $140 fee. The IRS then runs a tax-compliance and background check, which takes about 60 days.",
        duration: "~60 days"
      },
      {
        title: "Receive your enrollment and maintain it",
        description: "Once approved you are a federally authorized EA. To keep the license you must complete 72 hours of IRS-approved continuing education every 3 years, including at least 16 hours per year (2 of which are ethics).",
        subSteps: [
          "Enroll with an IRS-approved CE provider",
          "Complete 72 hours / 3 years (incl. 16 hrs/yr, 2 ethics)",
          "Renew your PTIN annually"
        ]
      }
    ],
    timeline: [
      { stage: "PTIN issued", duration: "Day 1" },
      { stage: "All 3 SEE parts passed", duration: "3–6 months" },
      { stage: "Form 23 filed + background check", duration: "+~60 days" },
      { stage: "Enrolled & licensed", duration: "~6–12 months total" }
    ],
    costBreakdown: {
      items: [
        { item: "PTIN (annual)", fee: "~$18.75 / yr" },
        { item: "SEE Part 1 — Individuals", fee: "$317" },
        { item: "SEE Part 2 — Businesses", fee: "$317" },
        { item: "SEE Part 3 — Representation", fee: "$317" },
        { item: "Form 23 enrollment application", fee: "$140" },
        { item: "Exam review course (optional)", fee: "$300–$700" }
      ],
      total: "~$1,110 (exams + enrollment, before study materials)",
      footnote: "From 2026 the SEE is delivered by PSI rather than Prometric. Fees are 2026 estimates and subject to change."
    },
    summaryPoints: [
      "The Enrolled Agent is the only tax credential issued directly by the IRS, granting unlimited practice rights before the agency.",
      "No degree is required; the entire process can be finished in roughly 6–12 months.",
      "Total hard cost is about $1,100 for exams and enrollment.",
      "Unlike a CPA, an EA’s license is portable across all 50 states."
    ]
  },
  {
    slug: "osha-10-construction",
    name: "OSHA 10-Hour Construction Certification",
    shortName: "OSHA 10",
    category: "workplace-safety",
    categoryLabel: "Workplace Safety",
    tagline: "Essential safety training for construction workers",
    description: "The OSHA 10-Hour Construction Industry training program provides entry-level construction workers with general awareness on recognizing and preventing hazards on a construction site.",
    type: "Training",
    time: "10 hours",
    cost: "$25 - $89",
    difficulty: "Easy",
    audience: "Entry-level Construction Workers",
    accent: "amber",
    isNational: true,
    providers: [
      {
        name: "360training (OSHAcampus)",
        url: "https://www.360training.com/",
        affiliateUrl: "#affiliate-placeholder",
        price: "$59",
        features: ["100% online", "Printable certificate instantly"],
        isSponsored: true,
        rating: 4.5
      }
    ],
    facts: [
      { label: "Duration", value: "10 Hours" },
      { label: "Valid for", value: "Varies (some states require 5-year renewal)" }
    ],
    steps: [
      "Register for an OSHA-authorized 10-hour course.",
      "Complete all training modules within 6 months.",
      "Pass the final exam with a score of 70% or higher.",
      "Receive your official DOL/OSHA card in the mail."
    ],
    source: "OSHA",
    sourceUrl: "https://www.osha.gov/training/outreach/construction",
    reviewed: "2026-07-28",
    relatedSlugs: ["osha-30-construction"]
  },
  {
    slug: "osha-30-construction",
    name: "OSHA 30-Hour Construction Certification",
    shortName: "OSHA 30",
    category: "workplace-safety",
    categoryLabel: "Workplace Safety",
    tagline: "Advanced safety training for supervisors",
    description: "The OSHA 30-Hour Construction course is designed for supervisors and site leads with safety responsibility.",
    type: "Training",
    time: "30 hours",
    cost: "$120 - $220",
    difficulty: "Moderate",
    audience: "Construction Supervisors",
    accent: "copper",
    isNational: true,
    providers: [
      {
        name: "ClickSafety",
        url: "https://www.clicksafety.com/",
        affiliateUrl: "#affiliate-placeholder",
        price: "$189",
        features: ["Authorized OSHA provider", "Interactive courses"],
        isSponsored: true,
        rating: 4.6
      }
    ],
    facts: [
      { label: "Duration", value: "30 Hours" }
    ],
    steps: [
      "Register for an authorized OSHA 30 course.",
      "Complete all modules.",
      "Pass the final exam.",
      "Receive DOL card."
    ],
    source: "OSHA",
    sourceUrl: "https://www.osha.gov/training/outreach/construction",
    reviewed: "2026-07-28",
    relatedSlugs: ["osha-10-construction"]
  },
  {
    slug: "epa-608-certification",
    name: "EPA 608 Technician Certification",
    shortName: "EPA 608",
    category: "trades",
    categoryLabel: "Skilled Trades",
    tagline: "Required to handle refrigerants",
    description: "Under Section 608 of the Clean Air Act, technicians who maintain, service, repair, or dispose of equipment that could release refrigerants into the atmosphere must be certified.",
    type: "Exam",
    time: "Varies (Self-study)",
    cost: "$25 - $150",
    difficulty: "Moderate",
    audience: "HVAC Technicians",
    accent: "teal",
    isNational: true,
    providers: [
      {
        name: "SkillCat",
        url: "https://www.skillcatapp.com/",
        price: "Free (App)",
        features: ["Free training and exam via mobile app"],
        isSponsored: false,
        rating: 4.8
      }
    ],
    facts: [
      { label: "Types", value: "Type I, II, III, or Universal" }
    ],
    steps: [
      "Study for the EPA Section 608 exam.",
      "Find an EPA-approved certifying organization.",
      "Take and pass the Core section plus at least one Type section.",
      "Receive your certification card."
    ],
    source: "EPA",
    sourceUrl: "https://www.epa.gov/section608/section-608-technician-certification-0",
    reviewed: "2026-07-28"
  },
  {
    slug: "cpa-exam",
    name: "Certified Public Accountant",
    shortName: "CPA",
    category: "accounting",
    categoryLabel: "Accounting & Tax",
    tagline: "The gold standard in accounting",
    description: "The CPA license is the highest standard of competence in the field of accountancy. It requires meeting the 3 Es: Education (150 hours), Exam (4 parts), and Experience (1 year).",
    type: "License",
    time: "12-18 months",
    cost: "$1,500 - $4,000",
    difficulty: "Very Hard",
    audience: "Accountants",
    accent: "blue",
    states: ["TX", "CA", "FL", "NY", "IL"],
    isNational: true,
    examDetails: {
      format: "4 Sections (3 Core, 1 Discipline)",
      duration: "4 hours per section",
      passRate: "~45-55%"
    },
    providers: [
      {
        name: "Becker CPA Review",
        url: "https://www.becker.com/",
        affiliateUrl: "#affiliate-placeholder",
        price: "$2,399",
        features: ["SkillBuilder videos", "Simulated exams", "High pass rate"],
        isSponsored: true,
        rating: 4.9
      },
      {
        name: "UWorld Roger CPA",
        url: "https://accounting.uworld.com/",
        affiliateUrl: "#affiliate-placeholder",
        price: "$1,599",
        features: ["SmartPath Predictive Technology", "Engaging lectures"],
        isSponsored: false,
        rating: 4.8
      }
    ],
    facts: [
      { label: "Education Required", value: "150 Credit Hours" },
      { label: "Exam Sections", value: "4" }
    ],
    steps: [
      "Meet your state board's educational requirements (usually 150 hours).",
      "Submit application and transcripts to your State Board of Accountancy.",
      "Receive Notice to Schedule (NTS).",
      "Study for and pass the 3 Core sections and 1 Discipline section within 30 months.",
      "Pass the AICPA Ethics Exam (if required by state) and meet experience requirements."
    ],
    faq: [
      { question: "What is the CPA Evolution?", answer: "A new CPA exam model introduced in 2024 featuring 3 mandatory Core sections (AUD, FAR, REG) and 1 of 3 chosen Discipline sections (BAR, ISC, TCP)." }
    ],
    source: "AICPA / NASBA",
    sourceUrl: "https://www.aicpa.org/resources/article/cpa-exam-overview",
    reviewed: "2026-07-25",
    relatedSlugs: ["enrolled-agent"],
    salaryRange: "$75,000 - $150,000+",
    renewalInfo: "Varies by state, typically 120 hours of CE every 3 years.",
    quickAnswer: {
      summary: "The CPA license is earned in three stages — Education (150 credit hours), Exam (4 sections under the CPA Evolution model), and Experience (typically 1–2 years). You apply through your State Board of Accountancy, receive a Notice to Schedule (NTS), and sit for the Core and Discipline sections at a Prometric center. Most candidates finish in 12–18 months.",
      advantages: [
        "Highest recognized credential in accounting — the “gold standard”",
        "Required (by law) to sign audit opinions and issue attestations",
        "Opens audit, tax, consulting, and CFO-track career paths",
        "Strong, durable salary premium over non-CPA accountants",
        "Portable across states through reciprocity once licensed"
      ]
    },
    roadmap: [
      "Complete 150 college credit hours (bachelor’s + extra)",
      "Apply to your State Board of Accountancy",
      "Receive ATT & Notice to Schedule (NTS)",
      "Pass 3 Core + 1 Discipline sections within 18 or 30 months",
      "Pass the AICPA Ethics Exam (most states)",
      "Complete 1–2 years of supervised experience",
      "Apply for and receive your license"
    ],
    comparison: {
      title: "CPA vs. Enrolled Agent: which is right for you?",
      columns: ["", "CPA", "Enrolled Agent"],
      rows: [
        { label: "Issuing authority", values: ["State Board of Accountancy", "IRS"] },
        { label: "Education", values: ["150 credit hours", "None required"] },
        { label: "Exam", values: ["4 sections (3 Core + 1 Discipline)", "3 SEE parts"] },
        { label: "Time to complete", values: ["12–18 months", "6–12 months"] },
        { label: "Cost", values: ["$1,500–$4,000+", "~$1,100"] },
        { label: "Scope", values: ["Audit, tax, attest (state)", "Federal tax (nationwide)"] },
        { label: "Experience", values: ["1–2 years", "None to sit"] }
      ]
    },
    registrationSteps: [
      {
        title: "Meet the 150-hour education requirement",
        description: "Every U.S. jurisdiction requires 150 semester hours of college education to sit — 30 hours beyond a typical bachelor’s degree. If you’re short, add graduate courses, community-college classes, or a master’s.",
        subSteps: [
          "Bachelor’s degree (≈120 hrs)",
          "Additional 30 hrs (graduate, community college, or online)"
        ],
        note: "Some states let you sit with 120 hours but require 150 to actually license."
      },
      {
        title: "Apply to your State Board of Accountancy",
        description: "Submit your application, official transcripts, and the application fee ($20–$150 by state). The Board verifies your credits and issues an Attestation of Eligibility (ATT).",
        subSteps: [
          "Send official transcripts",
          "Pay the Board application fee",
          "Wait for ATT (valid 90 days)"
        ],
        duration: "2–6 weeks"
      },
      {
        title: "Receive your Notice to Schedule (NTS)",
        description: "Once approved, pay the NASBA exam fee (~$262.64 per section) and receive your NTS, valid for 6 months. You need the NTS to book a Prometric appointment.",
        subSteps: [
          "Pay NASBA the per-section fee",
          "Receive NTS (valid 6 months)",
          "Book Prometric appointment"
        ],
        note: "International candidates pay an extra $375–$390 per section."
      },
      {
        title: "Pass the 4 exam sections",
        description: "Under CPA Evolution the exam has 3 mandatory Core sections — AUD (Audit), FAR (Financial Accounting & Reporting), REG (Regulation) — plus 1 Discipline you choose: BAR (Business Analysis & Reporting), ISC (Information Systems & Controls), or TCP (Tax Compliance & Planning). Each is 4 hours, with MCQs plus task-based simulations, scaled 0–99 (pass 75).",
        subSteps: [
          "Core: AUD",
          "Core: FAR",
          "Core: REG",
          "Discipline: BAR / ISC / TCP (choose one)"
        ],
        note: "All 4 must be passed within an 18-month (most states) or 30-month window.",
        duration: "6–12 months of testing"
      },
      {
        title: "Pass the AICPA Ethics Exam",
        description: "Most states require the AICPA self-study Ethics Exam — a 40-question, open-book test — before licensing. Cost is typically $150–$200.",
        duration: "A few weeks"
      },
      {
        title: "Complete the experience requirement",
        description: "Nearly every state requires 1–2 years (about 2,000 hours) of supervised accounting experience, verified by a licensed CPA.",
        subSteps: [
          "Secure a CPA-supervised role",
          "Log ~2,000 hours",
          "Obtain CPA verification"
        ],
        note: "Some states accept industry or non-public accounting experience.",
        duration: "1–2 years"
      },
      {
        title: "Apply for your license",
        description: "Submit your final application and pay the license fee ($100–$500). Once issued, maintain it with ~120 hours of CPE every 3 years (varies by state).",
        duration: "2–4 weeks"
      }
    ],
    timeline: [
      { stage: "150 credit hours completed", duration: "~4 years (undergrad)" },
      { stage: "Board application + ATT", duration: "2–6 weeks" },
      { stage: "All 4 exam sections passed", duration: "6–12 months" },
      { stage: "Ethics + experience", duration: "1–2 years" },
      { stage: "License issued", duration: "12–18 months total" }
    ],
    costBreakdown: {
      items: [
        { item: "State Board application fee", fee: "$20–$150" },
        { item: "NASBA exam fee (4 sections)", fee: "~$1,050 ($262.64 ea.)" },
        { item: "International testing surcharge (per section)", fee: "$375–$390" },
        { item: "AICPA Ethics Exam", fee: "$150–$200" },
        { item: "License fee", fee: "$100–$500" },
        { item: "Review course (recommended)", fee: "$1,500–$3,500" }
      ],
      total: "$1,400–$2,000+ in fees (review courses add $1,500–$3,500)",
      footnote: "Fees vary by jurisdiction. International candidates pay roughly $375–$390 extra per section."
    },
    summaryPoints: [
      "The CPA is the only license that lets you sign audit opinions and issue attestations.",
      "The 150-hour education rule is the single biggest hurdle for most candidates.",
      "Under CPA Evolution (2024+), you choose 1 of 3 Discipline sections after the 3 Core.",
      "Most states give you 18 (some 30) months to pass all 4 sections once you pass your first."
    ]
  }
];
function getCredentialBySlug(slug) {
  return credentials.find((c) => c.slug === slug);
}
function getCredentialsByCategory(catId) {
  return credentials.filter((c) => c.category === catId);
}
function getCredentialsByState(stateCode) {
  return credentials.filter((c) => c.isNational || c.states && c.states.includes(stateCode.toUpperCase()));
}
function getRelatedCredentials(slug) {
  const cred = getCredentialBySlug(slug);
  if (!cred || !cred.relatedSlugs) return [];
  return cred.relatedSlugs.map((s) => getCredentialBySlug(s)).filter((c) => c !== void 0);
}

export { getCredentialsByCategory as a, getCredentialBySlug as b, credentials as c, getRelatedCredentials as d, getCredentialsByState as g };
