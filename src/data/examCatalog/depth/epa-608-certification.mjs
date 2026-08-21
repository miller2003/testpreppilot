// Depth content for: epa-608-certification
// NOTE: Unlike the OSHA Outreach cards, EPA Section 608 IS a real, proctored
// technician certification under 40 CFR Part 82, Subpart F (refrigerant handling).
// Treat pass scores, structure, and exam day normally. Salary cites BLS OOH
// (May 2024) for HVAC mechanics (SOC 49-9021).
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Workplace safety & trades certifications desk',
    bio: 'This guide is compiled and maintained by our safety and trades desk. Federal programmes are described from the issuing agency’s own material — OSHA’s Outreach Training Program requirements and its published procedures, and the EPA’s Section 608 regulation and certifying-organisation rules. This matters more than usual here, because both areas are crowded with resellers whose claims about card validity, expiry and employer acceptance do not match the agency’s position. Where the agency deliberately publishes no figure — OSHA does not publish Outreach pass rates — we say that rather than invent one.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Programme requirements, card rules and certification categories were taken from the issuing federal agency’s own published material.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (BLS OOH May 2024, SOC 49-9021 HVAC Mechanics & Installers)
  salaryOutlook: {
    headline: '$59,810 median for HVAC mechanics (BLS, May 2024)',
    summary: 'EPA Section 608 certification is the federal gate to legal refrigerant handling, so it is effectively required for anyone working on air conditioners, heat pumps, refrigeration, and chillers — which makes it a core credential for the HVAC career path rather than an optional add-on. The BLS frames the relevant workforce as Heating, Air Conditioning, and Refrigeration Mechanics and Installers (SOC 49-9021). Median pay sits near the all-occupations median, but the credential unlocks the higher-paying commercial and industrial refrigeration segments where chiller (low-pressure, Type III) work commands a premium. Demand is structural: aging equipment, electrification and heat-pump adoption, and tightening refrigerant regulations keep the field busy through weather swings and retrofits. The highest 10% clear more than $91K, and technicians who stack Universal certification plus controls/controls-commissioning skills move fastest into lead and service-manager roles. For a new tech, 608 is the first box to check — without it you legally cannot connect gauges to most systems.',
    rows: [
      { label: 'Median annual wage', value: '$59,810', note: 'BLS OOH, HVAC Mechanics 49-9021, May 2024' },
      { label: 'Lowest 10%', value: 'Less than $39,130', note: 'BLS OOH, HVAC Mechanics 49-9021, May 2024' },
      { label: 'Highest 10%', value: 'More than $91,020', note: 'BLS OOH, HVAC Mechanics 49-9021, May 2024' },
      { label: 'Total employment', value: '425,200 jobs', note: 'BLS OOH, HVAC Mechanics 49-9021, May 2024' },
      { label: 'Projected openings/yr', value: '40,100', note: 'BLS OOH, 2024-2034, includes replacements' }
    ],
    growth: '8% growth 2024–2034 (faster than average)',
    source: { label: 'BLS Occupational Outlook Handbook — HVAC Mechanics', url: 'https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm' }
  },

  // P0-2  Pass rates — EPA sets a passing SCORE, not a published pass RATE
  passRate: {
    headline: '70% to pass (closed-book); 84% for mail-in Type I',
    summary: 'EPA Section 608 does not publish a national first-time pass rate, so the meaningful, regulatory number is the passing score set in the regulation itself. Under 40 CFR Part 82, Subpart F, Appendix D, the passing score for the closed-book Core, Type I, Type II, Type III, and Universal certification tests is 70 percent. The one exception is the mail-in (open-book) Type I format, which requires 84 percent. A technician earns a given type by passing that type’s test; Universal requires passing the Core plus all three types (I, II, and III). Because EPA certifies through multiple private test administrators rather than running one central exam, no single authoritative pass-rate statistic exists — and the figure some providers quote (~72%) is not the regulatory threshold, so we report the eCFR passing score instead of an invented rate.',
    rows: [
      { label: 'Closed-book passing score (Core, Type I, II, III, Universal)', value: '70%', note: '40 CFR 82 Subpart F, App. D' },
      { label: 'Mail-in / open-book Type I passing score', value: '84%', note: '40 CFR 82 Subpart F, App. D' },
      { label: 'Universal', value: 'Pass Core + Type I + II + III', note: '40 CFR 82 Subpart F, App. D' }
    ],
    source: { label: 'eCFR — 40 CFR Part 82, Subpart F, Appendix D', url: 'https://www.ecfr.gov/current/title-40/part-82/subpart-F/appendix-Appendix%20D%20to%20Subpart%20F%20of%20Part%2082' },
    caveat: 'EPA does not publish a national pass rate for Section 608. We report the regulatory passing score (70% closed-book; 84% mail-in Type I) rather than an invented statistic. The ~72% figure sometimes cited by vendors is not the regulatory threshold.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary: 'Section 608 has no required course — you study the refrigerant-handling material and sit the exam whenever ready. Most technicians prep for the Core plus the types matching their work. The plan below assumes a working tech studying for Universal (Core + I + II + III); a small-appliance tech targeting Type I only can cut this to a few days.',
    totalHours: '15–25 hours of self-study (varies by prior experience)',
    weeks: [
      { label: 'Days 1–3', focus: 'Core exam — Section 608 fundamentals', tasks: ['Study the Clean Air Act refrigerant rules, recovery/recycling/reclaim definitions', 'Memorize leak-repair triggers and the recovery requirements by appliance type', 'Drill Core sample questions (25 questions on the real test)'], hours: '6–8 hrs' },
      { label: 'Days 4–6', focus: 'Type I (small appliances) + Type II (high-pressure)', tasks: ['Small-appliance recovery (≤5 lb systems), no venting rules', 'High-pressure appliances: MVAC-like and residential/commercial A/C', 'Practice the 25-question type tests'], hours: '6–8 hrs' },
      { label: 'Days 7–8', focus: 'Type III (low-pressure) + full mock', tasks: ['Low-pressure chillers (centrifugal, R-11/R-123), purge and recovery', 'Take a full Universal-length mock (Core + I + II + III = 100 questions)', 'Review weak areas before booking the proctored exam'], hours: '4–6 hrs' }
    ],
    variants: [
      { label: 'Type I only (appliance tech)', detail: 'Small-appliance focus; 4–6 hours of study is usually enough.' },
      { label: 'Employer bootcamp', detail: 'Many contractors run a 1–2 day paid prep class then proctor on site.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary: 'Section 608 is memorization-heavy and rule-specific, so the winning strategies are drilling the exact regulatory numbers and matching each appliance type to its correct certification.',
    items: [
      { title: 'Memorize the appliance-to-type map cold', detail: 'Type I = small appliances (≤5 lb refrigerant); Type II = high-pressure (most A/C, heat pumps, MVAC); Type III = low-pressure (centrifugal chillers). Mixed appliances need Universal. This mapping is tested directly and is the easiest points to lose.' },
      { title: 'Drill the regulatory thresholds', detail: 'Know the leak-repair trigger rates, recovery levels, and the no-venting rule by heart — Core questions are built on these exact numbers, not approximations. Write them on a single cheat sheet and recite it daily.' },
      { title: 'Take full-length mocks at Universal length', detail: 'Universal is 100 questions (Core + three 25-question types). Build stamina with a full mock so the real sitting is not twice as long as your practice.' },
      { title: 'Confirm the Core is proctored for Universal', detail: 'To claim Universal you must pass a proctored Core plus all three types. If you only ever took an unproctored Core, your Universal may not be valid — verify the proctoring status with your administrator.' }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary: 'EPA approves several test administrators; you may also study free via EPA’s own materials. Prices below are typical exam fees (study guides often extra). We do not rank by commission.',
    columns: ['Provider', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ESCO Institute', values: ['~$25–$35 per section', 'Online proctored or in-person', 'Industry-standard; widely accepted'] },
      { label: 'Mainstream Engineering (498A)', values: ['~$20–$30 per section', 'Online or mail-in', 'Low-cost, mail-in Type I option'] },
      { label: 'HVAC Excellence', values: ['~$30–$40 per section', 'Online proctored / school admin', 'Career-tech and school programs'] },
      { label: 'EPA free study guide', values: ['Free', 'PDF / web', 'Self-study before any paid exam'] }
    ],
    footnote: 'Prices checked 2026-08. Universal typically costs the sum of Core + three type fees (often ~$50–$150 total). EPA’s own Section 608 study materials are free and sufficient for many candidates.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary: 'Section 608 failures are usually about scope and validity, not the difficulty of the questions.',
    items: [
      { mistake: 'Thinking Type I alone covers all A/C work', fix: 'Type I is only small appliances (≤5 lb). Residential/commercial A/C and heat pumps are high-pressure (Type II); chillers are low-pressure (Type III). Most field techs need Universal, not just Type I.' },
      { mistake: 'Venting refrigerant "by accident"', fix: 'The Core hammers the no-venting rule — knowingly releasing refrigerant is a violation with penalties. The exam and the field both treat recovery as mandatory; memorize when and to what level recovery is required.' },
      { mistake: 'Assuming the card expires', fix: 'EPA Section 608 certification does not expire. Once certified (Core + types), it is lifelong — though employers or state rules may require refreshers, the federal cert itself is permanent.' },
      { mistake: 'Booking Universal without a proctored Core', fix: 'Universal requires a proctored Core pass plus all three types. Verify your Core was proctored through an approved administrator or your "Universal" may not be recognized.' }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary: 'Each Section 608 exam section is a fixed multiple-choice test of 25 questions. The Core has 25 questions; Type I, II, and III each have 25; Universal combines them for 100 questions (Core + I + II + III). Most sections are closed-book at 70%; the mail-in Type I format is open-book at 84%.',
    types: [
      { name: 'Core (25 questions)', share: 'Required for any certification', detail: 'Covers Clean Air Act basics, refrigerant types, the no-venting rule, recovery/recycle/reclaim, leak-repair triggers, and safe handling. Closed-book, 70% to pass.' },
      { name: 'Type I (25 questions)', share: 'Small appliances', detail: 'Appliances containing ≤5 lb of refrigerant (e.g., fridges, window units). Closed-book 70%; mail-in open-book 84%.' },
      { name: 'Type II (25 questions)', share: 'High-pressure appliances', detail: 'Residential/commercial A/C, heat pumps, MVAC. Closed-book, 70% to pass.' },
      { name: 'Type III (25 questions)', share: 'Low-pressure appliances', detail: 'Centrifugal chillers (R-11/R-123). Closed-book, 70% to pass.' },
      { name: 'Universal (100 questions)', share: 'Core + I + II + III', detail: 'Passing Core plus all three types yields Universal certification — the broadest credential.' }
    ],
    samples: [
      { prompt: 'Which EPA Section 608 certification type covers the recovery and recycling of refrigerant from low-pressure appliances such as centrifugal chillers?', options: ['A. Type I', 'B. Type II', 'C. Type III', 'D. Core'], answer: 'C', explanation: 'C is correct: Type III certifies work on low-pressure appliances, typically centrifugal chillers using R-11 or R-123. Type I is small appliances, Type II is high-pressure, and Core is the foundational section required for any certification.' },
      { prompt: 'A technician must replace the compressor on a household refrigerator containing less than 5 lbs of refrigerant. Which certification is the minimum required to recover that refrigerant?', options: ['A. Type I', 'B. Type II', 'C. Core only', 'D. Universal only'], answer: 'A', explanation: 'A is correct: a household refrigerator is a small appliance (≤5 lb), so Type I is the minimum certification. Universal (Core + I + II + III) also qualifies, but Type I alone satisfies the requirement; Core alone does not authorize recovery.' }
    ],
    note: 'Samples are editor-written illustrations of the published Section 608 topics, not live exam items. Real exams are administered by EPA-approved private test administrators.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary: 'Section 608 is a genuine proctored exam, unlike the OSHA Outreach cards. You book a sitting through an EPA-approved administrator (online proctored or in-person at a test site). The Core must be proctored to count toward Universal.',
    bring: [
      'Government photo ID matching your registration exactly',
      'Confirmation number / login for the proctored session',
      'For in-person: any permitted scratch paper is usually provided — do not bring your own'
    ],
    leave: [
      'Phones, smartwatches, and bags — stored per the proctor’s rules',
      'Notes, books, and open materials (most sections are closed-book at 70%; only mail-in Type I is open-book)'
    ],
    timeline: [
      { time: '15 min before', detail: 'Check in, show ID, complete the proctor’s system/room scan (online) or badge-in (in person).' },
      { time: 'Start', detail: 'Begin the section(s) you booked; Core is 25 questions, each Type is 25, Universal is 100.' },
      { time: 'During', detail: 'Closed-book sections at 70%; pace yourself — there is no separate trick, just applied rules.' },
      { time: 'On finish', detail: 'Receive a provisional result; the official EPA certificate/card follows from the administrator.' }
    ],
    rules: [
      'Most sections are closed-book and require 70% to pass; the mail-in Type I format is open-book at 84%.',
      'To earn Universal, the Core must be passed in a proctored setting plus all three types.',
      'No venting/cheating policies are strictly enforced; a violation can void certification.'
    ],
    afterwards: 'Provisional result on screen (or by mail for paper tests); the official EPA Section 608 certificate arrives from the administrator. The certification does not expire.'
  }
};

export default data;
