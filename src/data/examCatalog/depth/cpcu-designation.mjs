const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Insurance industry credentialing desk',
    bio: 'CPCU program structure comes from The Institutes official pages and is revised with each course update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the CPCU designation structure, exam format, and requirements against The Institutes official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect underwriting and insurance-specialist pay at a May 2024 median of $77,860 for underwriters (BLS) — the CPCU is the industry\u2019s premier designation, and holders typically advance into the higher-paying risk and management tiers',
    summary: 'The direct answer is that the CPCU (Chartered Property Casualty Underwriter) designation is the property-casualty insurance industry\u2019s most recognised professional credential, and the occupations it serves — insurance underwriters (SOC 13-2053), at a May 2024 median annual wage of $77,860, and insurance sales agents (SOC 41-3021), at $60,370 — sit below what experienced CPCU holders typically earn, because the designation is the documented pathway to senior underwriting, risk management, and management roles that sit at the top of those occupations. The honest framing is that BLS has no CPCU-specific pay data, and industry surveys consistently associate the designation with higher earnings and faster promotion, but the pay effect comes from the roles it unlocks — senior underwriter, risk manager, claims executive, broker principal — rather than from the credential itself. BLS counted about 119,000 insurance underwriters in 2024 and projects about 6 percent employment growth from 2024 to 2034. The designation itself is a substantial commitment: candidates complete eight required courses and exams (the CPCU 500-level suite covering insurance operations, commercial and personal lines, and risk management, plus electives), typically over two to four years, with each exam a computer-based, multiple-choice assessment with a passing score that The Institutes sets. The practical read: the CPCU is a career investment for working insurance professionals — most candidates are sponsored by their employers, the cost runs several thousand dollars across the eight exams, and the payoff is the credential\u2019s weight in underwriting, claims, and broking careers. For candidates deciding whether to pursue it, the designation makes the most sense mid-career, when the eight-exam commitment can translate into the promotion track it is designed to unlock.',
    rows: [
      { label: 'Median annual wage, insurance underwriters', value: '$77,860', note: 'BLS OEWS, May 2024 (SOC 13-2053)' },
      { label: 'Median annual wage, insurance sales agents', value: '$60,370', note: 'BLS OEWS, May 2024 (SOC 41-3021)' },
      { label: 'Projected growth, underwriters, 2024-34', value: '+6%', note: 'BLS Employment Projections' },
      { label: 'The designation itself', value: 'Professional designation', note: '8 exams over 2-4 years, typically employer-sponsored' }
    ],
    growth: 'BLS projects about 6% growth for insurance underwriters from 2024 to 2034, with several thousand annual openings.',
    source: { label: 'BLS OEWS — Insurance Underwriters (13-2053)', url: 'https://www.bls.gov/oes/current/oes132053.htm' }
  },
  passRate: {
    headline: 'The Institutes publishes no cohort pass rates — each CPCU exam is a computer-based multiple-choice assessment with a passing score The Institutes sets, and completion data is not released',
    summary: 'The core fact is that The Institutes do not publish pass rates for CPCU exams, and none is available from an independent source, because the program reports candidate completion rather than cohort pass percentages. What is published is the exam structure: each CPCU course ends with a computer-based exam of 100 to 150 multiple-choice questions (the format varies by course), about 3 hours, delivered at a Pearson VUE testing center, with a passing score set by The Institutes through a standard-setting process; candidates must pass each of the eight required exams to earn the designation. The exams test the course content — CPCU 500 (Foundations of Risk Management and Insurance), CPCU 520 (Business Operations, Insurance Operations, and Law), CPCU 530 (Financial Decisions and Risk), CPCU 540 (Insurance Operations, Law, and Regulation), and the commercial/personal lines and elective courses — with a mix of conceptual and application questions. Because the exams are course-anchored, the preparation is studying the assigned course materials (the exam draws from the course text and study guide) and the key facts, concepts, and application questions The Institutes provide. The practical pass reality is that candidates who complete the course materials and the practice questions pass at solid rates, and the common failure mode is under-studying the application items after relying on multiple-choice familiarity. Exams can be retaken after a waiting period. The honest advice is to treat each exam as a 6-to-10-week study project using the official materials, and to plan the designation as a multi-year commitment rather than a sprint.',
    source: { label: 'The Institutes — CPCU program', url: 'https://www.theinstitutes.org/' },
    caveat: 'No cohort pass rates are published; each exam has a passing score set by The Institutes.'
  },
  studyPlan: {
    summary: 'Plan for 6 to 10 weeks and 40 to 60 hours of study per CPCU exam, working one course at a time across the eight-exam, two-to-four-year designation path, with the official course materials as the authoritative source. The curriculum sequence typically starts with the foundational courses (CPCU 500/520/530) before the commercial and personal lines electives, and candidates commonly pace one to three exams per year while working. The most effective study sequence per exam is: first, read the official course text and study guide, underlining the key concepts; second, work the official key-facts and application questions as you go; third, take the official practice exam mid-course to calibrate; fourth, re-study the weak areas; and fifth, take the exam at the Pearson VUE center. Because the exams are course-anchored, the study source matters: use The Institutes\u2019 materials rather than third-party summaries. The highest-yield habits are the official practice exams (the format and difficulty mirror the real exam) and daily study blocks that keep the material current. Budget the designation timeline around your work schedule — employer sponsorship is common in the industry, and most candidates complete one course per quarter while working. After each pass, track the remaining exams and plan the elective sequence around your career direction (underwriting, claims, broking, risk management).',
    totalHours: '40-60 hours per exam; 8 exams across 2-4 years',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Course reading', tasks: ['Read the official course text and study guide', 'Note key concepts and definitions', 'Start the key-facts questions'], hours: 20 },
      { label: 'Weeks 4-6', focus: 'Application + practice', tasks: ['Work the application questions', 'Take the official practice exam', 'Re-study weak areas'], hours: 20 },
      { label: 'Weeks 7-8', focus: 'Exam readiness', tasks: ['Final practice pass', 'Review formulas and definitions', 'Take the computer-based exam'], hours: 15 }
    ],
    variants: [
      { label: 'CPCU 500-level suite', detail: 'The eight required courses combine the 500-level foundations with commercial/personal lines and electives.' },
      { label: 'Associated designations', detail: 'The Institutes offer related designations (e.g. AINS, ARM) that can count toward CPCU electives.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes CPCU exams is "study the official course materials and calibrate with the official practice exams, working one course at a time," and the single biggest error is relying on multiple-choice familiarity without doing the application questions. A second proven approach is treating the key-concepts definitions as memorisation targets, since a dependable share of items tests terminology precisely. Third, master the application items — the exams present real insurance scenarios and ask you to apply the course concepts — by working the official application questions repeatedly. Fourth, pace the designation as a multi-year commitment: one course per quarter while working is the sustainable rhythm, and cramming multiple exams in a compressed window is a documented failure mode. Fifth, use the official practice exam\u2019s score to decide readiness — if you are not passing it, you are not ready for the real exam. Finally, confirm employer sponsorship early: most insurance employers fund CPCU materials and exams, and the industry\u2019s sponsorship culture is part of the designation\u2019s practical value.',
    items: [
      { title: 'Use the official materials', detail: 'The exams are course-anchored; third-party summaries are supplements.' },
      { title: 'Memorise the key concepts', detail: 'Terminology items are dependable points; drill the definitions.' },
      { title: 'Work the application questions', detail: 'Real-scenario items reward applying the course content.' },
      { title: 'Pace the designation', detail: 'One course per quarter is the sustainable multi-year rhythm.' },
      { title: 'Confirm employer sponsorship', detail: 'Most insurers fund materials and exams; ask early.' }
    ]
  },
  resourceComparison: {
    summary: 'CPCU course costs run roughly $300 to $700 per course including the exam, with the full eight-exam path several thousand dollars — and employer sponsorship is common, so the out-of-pocket cost is often lower. The comparison below separates the official course, the exam, and optional study aids, with prices current to this review. The buying rule is to use the official course package first, and to confirm sponsorship before paying.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official CPCU course + exam (per course)', values: ['~$300-700', 'Text + study guide + computer exam', 'The required course'] },
      { label: 'Official practice exams', values: ['Included/varies', 'Online', 'Format calibration'] },
      { label: 'Employer-sponsored enrollment', values: ['Often free', 'Sponsored program', 'Working insurance professionals'] },
      { label: 'Third-party CPCU study aids', values: ['~$50-150', 'Book or online', 'Optional reinforcement'] }
    ],
    footnote: 'Prices approximate and dated to this review; the designation requires 8 exams plus the ethics requirement.'
  },
  commonMistakes: {
    summary: 'The most common mistake is cramming one exam and then stalling the multi-year designation; the second is skipping the official application questions and failing the scenario items that dominate the exams. A third recurring error is using third-party summaries instead of the official course text, which the exams are built from. Candidates also routinely under-memorise the key-concept definitions, losing dependable points, and many sit for exams before passing the official practice exam, converting a winnable course into a retake. Finally, some candidates ignore the elective sequencing and take courses in an order that does not match their career direction or the prerequisites.',
    items: [
      { mistake: 'Cramming and stalling', fix: 'Pace one course per quarter; the designation is a 2-4 year commitment.' },
      { mistake: 'Skipping application questions', fix: 'Scenario items dominate; work the official application sets.' },
      { mistake: 'Relying on third-party summaries', fix: 'The exams are built from the official course text.' },
      { mistake: 'Under-memorising key concepts', fix: 'Drill the definitions; terminology items are dependable points.' },
      { mistake: 'Wrong course order', fix: 'Plan the sequence around prerequisites and your career direction.' }
    ]
  },
  questionTypes: {
    summary: 'Each CPCU exam is a computer-based multiple-choice assessment of 100 to 150 questions, about 3 hours, testing the course\u2019s concepts with a mix of terminology, application, and calculation items. The samples below are editor-written illustrations of the published course content, not live exam items.',
    types: [
      { name: 'Risk management & insurance foundations', share: '~25%', detail: 'Risk, exposure, and insurance fundamentals.' },
      { name: 'Insurance operations & law', share: '~25%', detail: 'Policy structure, underwriting, claims, and legal principles.' },
      { name: 'Commercial & personal lines', share: '~25%', detail: 'Coverage analysis and application to insured scenarios.' },
      { name: 'Financial & business concepts', share: '~15%', detail: 'Financial decisions, business operations, and analytics.' },
      { name: 'Ethics & professionalism', share: '~10%', detail: 'Professional responsibilities and ethical standards.' }
    ],
    samples: [
      {
        prompt: 'Which coverage would respond to a customer\u2019s injury on a business\u2019s premises?',
        options: ['A. Commercial property', 'B. Commercial general liability', 'C. Boiler and machinery', 'D. Crime coverage'],
        answer: 'B',
        explanation: 'Commercial general liability covers third-party bodily injury on the insured\u2019s premises.'
      },
      {
        prompt: 'Which principle requires the insured to have an insurable interest in the subject of the policy?',
        options: ['A. Indemnity', 'B. Insurable interest', 'C. Utmost good faith', 'D. Subrogation'],
        answer: 'B',
        explanation: 'Insurable interest requires that the insured would suffer a financial loss if the insured property is damaged.'
      },
      {
        prompt: 'A risk manager identifies a high-frequency, low-severity loss and decides to fund it internally. Which risk-control technique is this?',
        options: ['A. Avoidance', 'B. Retention', 'C. Transfer', 'D. Reduction'],
        answer: 'B',
        explanation: 'Retention is the decision to absorb losses internally, appropriate for high-frequency, low-severity exposures.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published course content, not live exam items.'
  },
  examDay: {
    summary: 'Each CPCU exam is taken on computer at a Pearson VUE testing center: 100 to 150 multiple-choice questions with about 3 hours, with a passing score set by The Institutes; results are typically available within a few weeks. The core rules: bring valid photo ID, arrive early, and follow testing-center rules; no personal items in the testing room. The designation requires passing all eight exams plus the ethics requirement, and exams can be retaken after a waiting period. The most useful exam-day habits: pace at about a minute per question, flag and return to hard items, and trust the course materials\u2019 answers over outside insurance knowledge. After each pass, update your designation progress and plan the next course; after the eighth pass, complete the ethics requirement and receive the CPCU designation. Most candidates are employer-sponsored, so coordinate exam dates with your manager and keep the course cadence sustainable alongside your work.',
    bring: ['Valid photo ID', 'Arrival at the Pearson VUE center', 'Course notes for pre-exam review'],
    leave: ['Phone, smartwatch, and study materials (testing-center rules)', 'Outside insurance habits where the course differs'],
    timeline: [
      { time: 'Course', detail: '6-10 weeks of official materials and practice exams.' },
      { time: 'Exam', detail: '100-150 questions in ~3 hours at Pearson VUE.' },
      { time: 'Results', detail: 'Pass/fail within weeks; retake after a wait if needed.' },
      { time: 'Designation', detail: 'Pass all 8 exams + ethics requirement.' }
    ],
    rules: ['Computer-based at Pearson VUE', '100-150 questions, ~3 hours', 'Passing score set by The Institutes', '8 exams + ethics requirement'],
    afterwards: 'Passing all eight CPCU exams plus the ethics requirement earns the CPCU designation, the property-casualty industry\u2019s premier professional credential.'
  }
};

export default data;
