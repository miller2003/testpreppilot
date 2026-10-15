/**
 * Hand-written <title> / meta description overrides, keyed by URL path.
 *
 * The template titles ("<Name> — Requirements, Exam & Costs") left exam codes
 * people actually search (AZ-305, PMP, CCNA) out of the title, and about half
 * the descriptions were the generic "is a professional credential administered
 * by…" fallback. These pages had impressions but CTR near 0% in GSC
 * (2026-10-15 export), so each one gets a title built around the real queries
 * and a description that answers them with the page's own facts.
 *
 * Every number here comes from the page's own record (examMeta, costBreakdown,
 * credentials.ts). If you change a record's fee or format, update the line here
 * too. Titles ≤ 60 chars, descriptions ≤ 158 chars, the same cap clampMeta uses (checked by
 * _qa/check-seo-overrides.mjs).
 */
export default {
  // ── Admissions & academic ────────────────────────────────────────────
  'exams/psat-10': {
    title: 'PSAT 10 Cost (2026): Often Free, 152 Questions, 2h 14m',
    description: 'How much is the PSAT 10? Schools pay about $16, so most students pay $0. See the 152-question digital format, 2 h 14 min timing and 320–1520 scoring.'
  },
  'exams/psat-nmsqt': {
    title: 'PSAT/NMSQT Cost (~$18), Format & National Merit Basics',
    description: 'The PSAT/NMSQT is the fall test for 10th and 11th graders and the National Merit qualifier. About $18 (often school-paid), 152 questions, 2h 14m, 320–1520.'
  },
  'exams/act-workkeys': {
    title: 'ACT WorkKeys Test Cost, Format & NCRC Levels (2026)',
    description: 'WorkKeys costs about $10–$20 per assessment and is often free through schools or job centers. Three tests of ~35 questions each; Level 3+ earns the NCRC.'
  },
  'exams/accuplacer-reading': {
    title: 'ACCUPLACER Reading Test: ~20 Questions, Untimed, Scores',
    description: 'How many questions are on ACCUPLACER Reading? About 20 adaptive questions, untimed, scored 200–300. What it covers, what scores mean, and fees ($0–$50).'
  },
  'exams/accuplacer-arithmetic': {
    title: 'ACCUPLACER Arithmetic Test: ~20 Questions, Untimed',
    description: 'ACCUPLACER Arithmetic: about 20 adaptive questions on fractions, decimals and percents, untimed, scored 200–300. What scores mean, plus a 1–2 week prep plan.'
  },
  'exams/ap-english-language-and-composition': {
    title: 'AP English Language Exam: Format, Essays & Scoring',
    description: 'AP Lang is fully digital: 45 multiple-choice questions in 60 min plus 3 essays in 135 min, scored 1–5. Fee $99 (US); a 3 usually earns comp credit.'
  },
  'exams/ap-english-literature-and-composition': {
    title: 'AP English Literature Exam: Format, Essays & Scoring',
    description: 'AP Lit is fully digital: 55 multiple-choice questions in 60 min plus 3 essays in 120 min, scored 1–5. Fee $99 (US); a 3 often earns intro literature credit.'
  },
  'exams/ap-united-states-government-and-politics': {
    title: 'AP US Government Exam: Format, FRQs & Scoring',
    description: 'AP U.S. Government and Politics is fully digital: 55 multiple-choice questions in 80 min and 4 free-response questions in 100 min, scored 1–5. Fee $99 (US).'
  },
  'exams/olsat-8': {
    title: 'OLSAT 8 Test: Gifted Screening Format, Scores & Prep',
    description: 'OLSAT 8 measures verbal and nonverbal reasoning for K–12 students; schools use it for gifted programs. About 60–75 minutes, SAI mean 100. What scores mean.'
  },
  'exams/toeic-listening-and-reading': {
    title: 'TOEIC Listening & Reading Test: Format, Scores & Fees',
    description: 'The TOEIC L&R has 200 questions in about 2 hours: listening and reading, each scored 5–495 (10–990 total). Fees are set locally. How to register and prep.'
  },
  'exams/duolingo-english-test': {
    title: 'Duolingo English Test: $70 Cost, Scores & Format',
    description: 'The Duolingo English Test is a 1-hour, at-home adaptive test scored 10–160 for $70. Many schools want 105+. Retake rules, result timing and how to prepare.'
  },
  'exams/casper-test': {
    title: 'Casper Test: Cost (~$85), Format & Scoring Quartiles',
    description: 'Casper is an online situational judgment test for health-professions admission: ~14 scenarios, video and typed responses, 60–90 min. ~$85 plus $18 per school.'
  },
  'exams/law-school-admission-test': {
    title: 'LSAT: $238 Fee, Format, Sections & 120–180 Scoring',
    description: 'The LSAT is the main U.S. and Canadian law school admission test: four 35-minute multiple-choice sections plus a writing sample, scored 120–180. $238 fee.'
  },
  'exams/asvab': {
    title: 'ASVAB Test: Free, ~135 Questions, AFQT Scores Explained',
    description: 'The ASVAB is free: about 135 adaptive questions in 10 subtests over 2.5–3 hours at MEPS. How AFQT percentiles work and a 2–6 week prep plan.'
  },

  // ── IT: CompTIA ──────────────────────────────────────────────────────
  'exams/comptia-a-plus': {
    title: 'CompTIA A+ Certification: Cost ($246/Exam), Core 1 & 2',
    description: 'CompTIA A+ takes two exams (220-1201 and 220-1202), $246 each. 90 questions in 90 minutes per exam; pass marks 675 and 700. Study time and entry-level pay.'
  },
  'exams/comptia-network-plus': {
    title: 'CompTIA Network+ (N10-009) Exam: $369, 90 Qs, 720 to Pass',
    description: 'Network+ N10-009 at a glance: $369 voucher, up to 90 questions in 90 minutes, 720/900 to pass. Domains, a 2–3 month study plan and $50K–$75K salaries.'
  },
  'exams/comptia-security-plus': {
    title: 'CompTIA Security+ (SY0-701) Exam Cost: $404, 90 Qs',
    description: 'Security+ SY0-701 costs $404: up to 90 questions in 90 minutes, 750/900 to pass, at Pearson VUE or online. Domains, 2–3 month study plan, $60K–$95K salaries.'
  },
  'exams/comptia-cysa-plus': {
    title: 'CompTIA CySA+ Exam Cost: $404 (CS0-003), 85 Qs, 165 Min',
    description: 'CySA+ CS0-003 costs $404 and has up to 85 questions in 165 minutes; 750/900 to pass. Exam domains, a 3–4 month study plan and $75K–$115K salaries.'
  },
  'exams/comptia-pentest-plus': {
    title: 'CompTIA PenTest+ PT0-003: $404 Exam, 85 Qs, 750 to Pass',
    description: 'PenTest+ PT0-003 costs $404: up to 85 questions including performance-based items in 165 minutes, 750/900 to pass. Study plan and $85K–$130K salaries.'
  },
  'exams/comptia-linux-plus': {
    title: 'CompTIA Linux+ (XK0-006): $390 Exam Cost & Format',
    description: 'Linux+ XK0-006 costs $390 (resellers often $330–$369): up to 90 questions in 90 minutes, 720/900 to pass. Objectives, study plan and $65K–$95K salaries.'
  },
  'exams/comptia-server-plus': {
    title: 'CompTIA Server+ Exam Cost ($404) & SK0-005 Format',
    description: 'Server+ SK0-005 costs $404: up to 90 questions in 90 minutes, 750/900 to pass. Exam domains, a 2–3 month study plan and a $55K–$85K salary range.'
  },

  // ── IT: Microsoft ────────────────────────────────────────────────────
  'exams/microsoft-az-305': {
    title: 'AZ-305 Exam: Azure Solutions Architect Expert ($165)',
    description: 'AZ-305 costs $165, runs 120 minutes and needs 700/1000 to pass. You must also hold AZ-104 or AZ-204. Format, case studies, study plan and free yearly renewal.'
  },
  'exams/microsoft-az-204': {
    title: 'AZ-204 Retired: What Replaced It & Is Your Cert Valid?',
    description: 'Microsoft retired AZ-204 (Azure Developer Associate) in 2026. See the replacement exams, whether an existing AZ-204 still counts, and old exam details.'
  },
  'exams/microsoft-az-500': {
    title: 'AZ-500 Retired Aug 2026: Status, Replacement & Format',
    description: 'AZ-500 (Azure Security Engineer Associate) retired on August 31, 2026. See the SC-series successor, whether your AZ-500 still counts, and the old exam format.'
  },
  'exams/microsoft-az-700': {
    title: 'AZ-700 Exam Cost ($165), Format & Passing Score',
    description: 'AZ-700 Azure Network Engineer Associate: $165 fee, 120 minutes, 40–60 questions with hands-on labs, 700/1000 to pass. Prerequisites and a 2–4 month plan.'
  },
  'exams/microsoft-az-140': {
    title: 'AZ-140 Exam: Azure Virtual Desktop ($165, 100 Min)',
    description: 'AZ-140 Azure Virtual Desktop Specialty: $165, about 100 minutes, 40–60 questions with labs, 700/1000 to pass. Prerequisites and a 2–3 month study plan.'
  },
  'exams/microsoft-ai-900': {
    title: 'AI-900 Retired (June 2026): AI-901 Replaces It',
    description: 'Microsoft retired AI-900 Azure AI Fundamentals on June 30, 2026. See what AI-901 covers ($99, 45 min, 700 to pass) and whether your AI-900 still counts.'
  },
  'exams/microsoft-ai-901': {
    title: 'AI-901 Exam: Azure AI Fundamentals ($99, 45 Min)',
    description: 'AI-901 replaced AI-900 as Azure AI Fundamentals: $99, 45 minutes, 700/1000 to pass. Skills measured and a 2–4 week study plan.'
  },
  'exams/microsoft-mb-910': {
    title: 'MB-910 Exam: Dynamics 365 Fundamentals (CRM), $99',
    description: 'MB-910 Dynamics 365 Fundamentals (CRM): $99, 40–60 questions in about 60 minutes, at Pearson VUE or online. What is covered and 20–40 hours of prep.'
  },
  'exams/microsoft-office-specialist-excel-associate': {
    title: 'MOS Excel Associate (MO-210): ~$100, 50-Min Exam',
    description: 'Microsoft Office Specialist Excel Associate (MO-210): ~$100, a 50-minute performance-based exam with 25–35 tasks in live Excel. What is tested, how to book.'
  },

  // ── IT: Cisco, AWS, Google, OffSec ───────────────────────────────────
  'exams/cisco-ccna': {
    title: 'CCNA Exam (200-301): $300 Cost, Format & Pass Score',
    description: 'Cisco CCNA 200-301 costs $300: 90–110 questions in 120 minutes, including lab-style items, with a ~825/1000 pass mark. Topics, 2–4 month study plan, salary.'
  },
  'exams/cisco-ccna-cybersecurity': {
    title: 'Cisco CCNA Cybersecurity (200-201 CBROPS): $300 Exam',
    description: "Cisco's associate SOC-analyst cert (200-201 CBROPS): ~95–105 questions, 120 minutes, $300 at Pearson VUE or online. Topics and a 2–4 month study plan."
  },
  'exams/cisco-ccst-cybersecurity': {
    title: 'Cisco CCST Cybersecurity Cost ($125), Exam & Prep Time',
    description: 'CCST Cybersecurity (100-160) costs $125: ~50 questions in 50 minutes, no prerequisites, at Pearson VUE/Certiport or online. 3–5 weeks of prep is typical.'
  },
  'exams/cisco-ccnp-cybersecurity': {
    title: 'CCNP Security: SCOR 350-701 ($400) + Concentration',
    description: 'CCNP Cybersecurity needs two exams: the SCOR 350-701 core ($400, 120 min) plus one $300 concentration, $700 total. Valid 3 years. Study time 4–8 months.'
  },
  'exams/cisco-ccnp-enterprise': {
    title: 'CCNP Enterprise: ENCOR 350-401 Exam, Cost & Format',
    description: 'CCNP Enterprise requires the ENCOR 350-401 core exam (90–110 questions, 120 min, $400) plus one concentration such as ENARSI or ENSLD. Study 4–8 months.'
  },
  'exams/aws-certified-cloud-practitioner': {
    title: 'AWS Cloud Practitioner (CLF-C02) Exam Cost: $100, 65 Qs',
    description: 'AWS Certified Cloud Practitioner CLF-C02: $100, 65 questions in 90 minutes, 700 to pass, online proctored. Exam domains and a 2–4 week study plan.'
  },
  'exams/aws-certified-solutions-architect-associate': {
    title: 'AWS Solutions Architect Associate (SAA-C03): $150 Exam',
    description: 'AWS SAA-C03 costs $150: 65 questions in 130 minutes, 720/1000 to pass. Exam domains, a 6–10 week study plan, and a $120K–$165K salary range.'
  },
  'exams/aws-certified-ai-practitioner': {
    title: 'AWS AI Practitioner (AIF-C01): $100 Exam, 700 to Pass',
    description: 'AWS Certified AI Practitioner AIF-C01: $100, 65 questions in 90 minutes, passing score 700. Domains covering AI/ML and generative AI, plus a 2–4 week plan.'
  },
  'exams/google-analytics-certification': {
    title: 'Google Analytics Certification: Free, 50 Qs, How to Get It',
    description: 'How to get Google Analytics certified: the exam is free, with 50 questions in 2 hours and 80% to pass. What to study and how long it takes (10–20 hours).'
  },
  'exams/google-data-analytics-professional-certificate': {
    title: 'Google Data Analytics Certificate: Cost & Time to Finish',
    description: "Google's Data Analytics Professional Certificate on Coursera: ~6 months part-time at $39–$49/month (~$235–$295). What you learn: SQL, R, Tableau."
  },
  'exams/google-it-support-professional-certificate': {
    title: 'Google IT Support Certificate: Cost, Time & What You Learn',
    description: 'Google IT Support Professional Certificate on Coursera: 3–6 months self-paced, about $120–$240. Covers hardware, OS, networking, sysadmin and security.'
  },
  'exams/offsec-oscp': {
    title: 'OSCP Cost ($1,749) & Exam: 24-Hour Hands-On Test',
    description: 'OSCP: a 24-hour proctored hands-on exam plus 24 hours for the report; 70 points to pass. PEN-200 bundle $1,749, exam only $1,699. Prep time and salaries.'
  },

  // ── Project & business ───────────────────────────────────────────────
  'exams/pmi-pmp': {
    title: 'PMP Exam Cost: $405 Member / $555 Non-Member (2026)',
    description: 'PMP exam guide: $405 for PMI members or $555 otherwise, 180 questions in 230 minutes, at a test center or online. Registration steps, retakes and renewal.'
  },
  'exams/itil-4-foundation': {
    title: 'ITIL 4 Foundation Exam Cost (~$425) & Format (2026)',
    description: 'ITIL 4 Foundation costs about $425 in the US ($235–$425 by region): 40 questions in 60 minutes, online proctored by PeopleCert. Registration and retakes.'
  },
  'exams/scrum-alliance-certified-scrummaster': {
    title: 'Certified ScrumMaster (CSM) Cost: $250–$2,495 & Exam',
    description: 'CSM from Scrum Alliance: take the required course ($250–$2,495 by provider) and pass a 50-question, 60-minute online test. Costs, steps and renewal.'
  },
  'exams/nacpb-cpb': {
    title: 'Certified Public Bookkeeper (CPB) License: 3 Exams, Cost',
    description: 'NACPB CPB license: three online exams (Bookkeeping, Payroll, QuickBooks Online), 50 questions in 2 hours each, 75% to pass; $80–$100 per exam plus experience.'
  },
  'exams/cfa-level-1': {
    title: 'CFA Level 1 Exam: Fees ($990–$1,290), Format & Registration',
    description: 'CFA Level I: 180 questions over two 2h 15m sessions, computer-based. Early registration ~$990, standard ~$1,290. Registration windows and how to enroll.'
  },
  'exams/series-66': {
    title: 'Series 66 Exam: 110 Questions, $177 Fee, 150 Minutes',
    description: 'Series 66 (NASAA Uniform Combined State Law): 110 questions (100 scored) in 150 minutes, ~$177 fee. Who needs it and how it pairs with Series 7.'
  },

  // ── Healthcare ───────────────────────────────────────────────────────
  'exams/danb-cda': {
    title: 'DANB CDA Exam: $450 Cost, 245 Questions, Passing Score',
    description: 'The DANB Certified Dental Assistant exam has 3 parts (GC, RHS, ICE): 245 questions in 195 minutes, scaled 400 to pass. Full CDA fee $450; single part $270.'
  },
  'exams/aama-cma': {
    title: 'CMA (AAMA) Exam: $125–$250 Fee, 200 Qs, Passing Score',
    description: 'AAMA Certified Medical Assistant exam: $125 for members/recent grads or $250 otherwise; 200 questions in 160 minutes; scaled 405 to pass. Eligibility rules.'
  },
  'exams/nclex-rn': {
    title: 'NCLEX-RN Requirements, Cost (~$200) & Exam Format',
    description: 'NCLEX-RN: computer-adaptive, 75–145 questions, up to 5 hours. ~$200 NCSBN fee plus state board fees. Licensure steps and how to register.'
  },
  'exams/nnaap-cna': {
    title: 'NNAAP CNA Exam: Written + Skills Test, Cost & Format',
    description: 'The NNAAP nurse aide exam (Pearson VUE) has a written test and a clinical skills evaluation. Fees are state-set ($60–$120). Format and how to register.'
  },
  'exams/nremt-emt': {
    title: 'NREMT EMT Exam: $104 Fee, 70–120 Questions, Format',
    description: 'The National Registry EMT cognitive exam is computer-adaptive: 70–120 questions in up to 2 hours, ~$104 plus state fees. Format, eligibility and registration.'
  },

  // ── Fitness & recreation ─────────────────────────────────────────────
  'exams/ace-certified-personal-trainer': {
    title: 'ACE Personal Trainer Certification: $499 Exam, 150 Qs',
    description: 'ACE CPT exam guide: $499 exam-only fee, 150 questions in 3 hours, at a test center or online with remote proctoring. Costs, format and how to register.'
  },
  'exams/afaa-certified-personal-trainer': {
    title: 'AFAA Personal Trainer Certification: Cost & Exam (2026)',
    description: 'AFAA-CPT: self-study package from $499 (exam included) or $199 exam/retake; 120 questions in 120 minutes, 70% to pass, at PSI or online. Accreditation status.'
  },
  'exams/nasm-certified-nutrition-coach': {
    title: 'NASM Certified Nutrition Coach: $899 Cost, 100-Q Exam',
    description: 'NASM-CNC: self-paced online course, then a 100-question, 90-minute open-book exam (70% to pass). $899 list price, often discounted; 4–6 weeks of study.'
  },
  'exams/padi-open-water-diver': {
    title: 'PADI Open Water Diver: Cost ($250–$500) & Requirements',
    description: 'Get PADI Open Water certified: $250–$500 for a 2–4 week course (~20–30 hours) with a 50-question final (75% to pass). Requirements and what to expect.'
  },

  // ── Public safety & government ───────────────────────────────────────
  'exams/corrections-officer-entrance-exam': {
    title: 'Corrections Officer Exam: Format, Prep Plan & Pay (2026)',
    description: 'What to expect on a correctional officer entrance exam: often 100+ questions over 2–3 hours, set by state and county agencies. A 20–40 hour prep plan and pay.'
  },
  'exams/post-entry-level': {
    title: 'Police Officer Selection Test (POST): Format & Prep',
    description: 'What is on the National Police Officer Selection Test: about 200 questions over roughly 3 hours, set by each department. A 4–6 week prep plan and police pay.'
  },
  'exams/law-enforcement-pat': {
    title: 'Police Physical Ability Test (PAT): Events & How to Train',
    description: 'What a law enforcement physical ability test includes: agency-specific events completed in about an hour, usually with no fee. A 4–8 week training plan.'
  },
  'exams/nyc-dcas-exam': {
    title: 'NYC DCAS Civil Service Exams: How to Apply, Fees & Format',
    description: 'How NYC DCAS civil service exams work: apply by exam title, fees that vary by title, 2–4 hour written tests, and the salary ranges different titles pay.'
  },
  'exams/nims-ics-200': {
    title: 'ICS-200 FEMA Course: Free, 25-Question Test, Validity',
    description: 'NIMS ICS-200 is a free FEMA EMI online course: 3–5 hours self-paced, then a 25-question test (75% to pass). How to take it, whether it expires, and retakes.'
  },
  'exams/nims-ics-700': {
    title: 'ICS-700 FEMA Course: Free, How Long It Takes & Test',
    description: "NIMS ICS-700 is FEMA's free introduction to NIMS: 3–5 hours self-paced plus a 25-question test (75% to pass). How to enroll and get your certificate."
  },
  'exams/nims-ics-800': {
    title: 'ICS-800 (National Response Framework): Free FEMA Test',
    description: "What ICS-800 is: FEMA's free online course on the National Response Framework, with a 25-question open-book test. Time needed (2–3 hours) and how to sign up."
  },
  'exams/faa-part-107-recurrent-training-alc-677': {
    title: 'Part 107 Recurrent Training (ALC-677): Free Online Course',
    description: "Keep your Part 107 drone certificate current for free: take FAA's ALC-677 recurrent training online at FAASafety.gov in about 1–2 hours. Steps and timing."
  },

  // ── Education & teaching ─────────────────────────────────────────────
  'exams/google-certified-educator-level-1': {
    title: 'Google Certified Educator Level 1 Exam: $10, 3 Hours',
    description: 'What the Google Educator Level 1 exam involves: about $10, roughly 3 hours, 40 questions and 80% to pass. Registration, retakes and how long it stays valid.'
  },
  'exams/praxis-core-combined-5752': {
    title: 'Praxis Core Combined (5752): $150 Cost, Format & Timing',
    description: 'Praxis Core 5752 combines reading, writing and math: 152 questions plus 2 essays in about 4.5 hours. $150 combined or $90 per subtest. How to register.'
  },
  'exams/praxis-plt-grades-7-12-5624': {
    title: 'Praxis PLT 7-12 (5624): Format, Cost & Case Studies',
    description: 'Praxis PLT Grades 7–12 (5624): 70 selected-response questions plus 4 case-based constructed responses in 2 hours, about $130. How to register and prepare.'
  },
  'exams/praxis-plt-grades-k-6-5622': {
    title: 'Praxis PLT K-6 (5622): Format, Cost & Case Studies',
    description: 'Praxis PLT Grades K–6 (5622): 70 selected-response questions plus 4 constructed responses in 2 hours, about $130. How to register and prepare.'
  },
  'exams/praxis-elementary-education-multiple-subjects-5001': {
    title: 'Praxis 5001 Elementary Ed: 4 Subtests, $180 Cost',
    description: 'Praxis Elementary Education Multiple Subjects (5001): 4 subtests, ~245 questions in 4 h 35 min. $180 combined or $64 per subtest. How to register.'
  },

  // ── Food, beauty & hospitality ───────────────────────────────────────
  'exams/servsafe-workplace': {
    title: 'ServSafe Workplace: Sexual Harassment Training & Test',
    description: "ServSafe Workplace is the National Restaurant Association's harassment-prevention training: ~$20–$30, about 1 hour, with a short online assessment."
  },
  'exams/servsafe-food-handler': {
    title: 'ServSafe Food Handler Certificate: ~$15, 40-Q Test',
    description: 'ServSafe Food Handler: ~$15 online course and 40-question assessment (70% to pass), about 60–90 minutes total. Who needs it and how to get your certificate.'
  },
  'exams/servsafe-alcohol-primary': {
    title: 'ServSafe Alcohol Primary: ~$15 Course, 25-Q Test',
    description: 'ServSafe Alcohol Primary certification: ~$15, 60–90 minutes of training, then a 25-question assessment (75% to pass). Who needs it and how to sign up.'
  },
  'exams/learn2serve-alcohol-seller-server': {
    title: 'Learn2Serve Alcohol Server Certification: ~$10–$20',
    description: 'Learn2Serve by 360training: an online alcohol seller-server course of 2–4 hours (varies by state), ~$10–$20, with a final test. How it works and who needs it.'
  },
  'exams/nic-cosmetology-theory': {
    title: 'NIC Cosmetology Theory Exam: 110 Questions, 90 Minutes',
    description: 'The NIC cosmetology written exam: 110 questions (100 scored) in 90 minutes, with a state-set fee ($50–$150). What it covers and how to register.'
  },
  'exams/nic-cosmetology-practical': {
    title: 'NIC Cosmetology Practical Exam: Skills Test & Fees',
    description: 'The NIC cosmetology practical exam tests hands-on skills, typically over 2–3 hours, with state-set fees ($50–$150). Format, scoring and how to register.'
  },

  // ── Trades & safety ──────────────────────────────────────────────────
  'exams/aws-certified-welder': {
    title: 'AWS Certified Welder Test: How It Works & Cost',
    description: 'The American Welding Society Certified Welder program is a hands-on weld test at an accredited test facility, with no written exam. Typical cost and process.'
  },
  'exams/nccer-core-curriculum': {
    title: 'NCCER Core Curriculum: 8 Modules, Tests & Cost',
    description: 'NCCER Core is the entry credential for construction crafts: 8 modules (~40–60 hours) with a written test per module at ~$30–$100 each. How to earn it.'
  },
  'exams/nccer-hvac': {
    title: 'NCCER HVAC Certification: Modules, Tests & Cost',
    description: 'How NCCER HVAC certification works: module-based written tests (30–60 min each) plus hands-on checks through an accredited sponsor. Study time and pay.'
  },
  'exams/nccer-electrician': {
    title: 'NCCER Electrician Certification: Modules, Tests & Cost',
    description: 'How NCCER electrical certification works: module-based written tests (30–60 min, ~$10–$60 each) plus hands-on checks through a sponsor. Study time and pay.'
  },
  'exams/ase-t7-truck-hvac': {
    title: 'ASE T7 Truck HVAC Test: 50 Questions, Cost & Format',
    description: 'ASE T7 Medium-Heavy Truck HVAC certification: 50 questions (40 scored) in 60 minutes; ~$34 registration plus ~$62 per test. Topics and how to register.'
  },
  'exams/epa-609-mvac-certification': {
    title: 'EPA Section 609 Certification: 25-Question Test, Steps',
    description: 'EPA 609 certification is required to service vehicle A/C refrigerant. Take a 25-question test (~60 min) through an EPA-approved program. Steps and costs.'
  },
  'exams/hazwoper-40-hour': {
    title: 'HAZWOPER 40-Hour Training: Cost, Who Needs It & Format',
    description: 'OSHA 1910.120 HAZWOPER 40-hour training: 40 hours of instruction plus 3 days of supervised field work, about $200–$600. Who needs it and annual refreshers.'
  },
  'exams/hazwoper-8-hour-refresher': {
    title: 'HAZWOPER 8-Hour Refresher: Annual Requirement & Cost',
    description: 'OSHA requires HAZWOPER workers to complete an 8-hour refresher every year. Typical cost $50–$150 online, with a short course test. Who needs it and how.'
  },

  // ── /paths national guides ───────────────────────────────────────────
  'paths/california-real-estate-license': {
    title: 'California Real Estate License: Requirements, Cost & Steps',
    description: 'How to get a California real estate salesperson license: 135 hours of DRE-approved courses, a 150-question state exam, and about $600–$1,200 in total costs.'
  },
  'paths/florida-real-estate-license': {
    title: 'Florida Real Estate License: 63-Hour Course, Exam & Cost',
    description: 'Become a Florida sales associate: a 63-hour pre-license course, the state exam (~$36.75) and FREC licensing. Total ~$350–$700 in 4–8 weeks.'
  },
  'paths/texas-real-estate-license': {
    title: 'Texas Real Estate License: 180 Hours, Exam & Cost (2026)',
    description: 'Get a Texas sales agent license: 180 hours of TREC-approved courses, a 125-question exam ($43) and a $205 license fee. Total ~$400–$800 in 4–8 weeks.'
  },
  'paths/cpa-exam': {
    title: 'CPA Exam & License Requirements: Sections, Cost, Timeline',
    description: 'How to become a CPA: education and experience rules, 4-hour exam sections with ~45–55% pass rates, total cost of ~$1,500–$4,000 and a 12–18 month timeline.'
  },
  'paths/enrolled-agent': {
    title: 'Enrolled Agent (EA) Exam: 3 Parts, Fees & Pass Rates',
    description: 'Become an IRS Enrolled Agent: pass the 3-part SEE (3.5 hours each, ~70% pass rate), then apply. Total cost ~$800–$1,500 over 3–9 months. Steps and fees.'
  },
  'paths/epa-608-certification': {
    title: 'EPA 608 Certification: Type I, II, III & Universal Exam',
    description: 'EPA Section 608 certification is required to handle refrigerants. Pass the Core plus Type I, II or III (all three = Universal). Cost ~$25–$150.'
  },
  'paths/osha-10-construction': {
    title: 'OSHA 10 Construction: Cost ($25–$89), Time & DOL Card',
    description: 'OSHA 10-Hour Construction is a training course, not a license, that earns a DOL wallet card. 10 hours online for $25–$89. How long it takes and who needs it.'
  }
};
