const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Mortgage & financial services licensing desk',
    bio: 'This desk covers mortgage and financial-licensing exams. Exam structure, fees and rules come from the regulator\'s official pages (NMLS, SAFE Act, state agencies), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the NMLS SAFE Mortgage Loan Originator national test page and BLS OOH Loan Officers (SOC 13-2072), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$72,590 median for loan officers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "MLO" — the SAFE Mortgage Loan Originator national test is the licensing gate for mortgage loan originators, and the wage question belongs to the occupation you perform with it. The closest official BLS occupation is Loan Officers, SOC 13-2072, which had a May 2024 median wage of $72,590, with the lowest 10 percent under $41,090 and the highest 10 percent above $160,300. The fit is direct: passing the SAFE test and the state components licenses you to originate mortgages, and loan-officer income is dominated by commissions, so the BLS median understates what producing originators earn in active markets. BLS counted 298,300 loan officer jobs in 2024 and projects a 2 percent decline from 2024 to 2034, with about 22,400 openings a year — the modest headline reflecting the interest-rate cycle, which swings origination volume dramatically. The limitation to state plainly: the BLS median covers all loan officers, licensed or not, and the licence produces no wage by itself; its value is market access — you cannot originate mortgages for compensation without it. Read the number as the market for the occupation the licence unlocks, and note that origination income varies enormously with the rate environment.',
    rows: [
      { label: 'Median annual wage, loan officers', value: '$72,590', note: 'BLS OOH, SOC 13-2072, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $41,090', note: 'BLS OOH, SOC 13-2072, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $160,300', note: 'BLS OOH, SOC 13-2072, May 2024' },
      { label: 'Projected openings per year', value: '~22,400', note: 'BLS OOH, SOC 13-2072, 2024-2034' }
    ],
    growth: 'BLS projects a 2 percent decline for loan officers from 2024 to 2034, about 22,400 openings per year, with volume swinging with the rate cycle.',
    source: { label: 'BLS Occupational Outlook Handbook - Loan Officers', url: 'https://www.bls.gov/ooh/business-and-financial/loan-officers.htm' }
  },
  passRate: {
    headline: 'NMLS publishes no official pass rate — the national test requires 75% (102 of 136 scored questions), with state components reported separately',
    summary: 'The NMLS does not publish official cohort pass rates for the SAFE national test, and third-party estimates are not authoritative, so we do not treat them as official data. What the NMLS does publish is the format and the passing standard: the national test with uniform state content has 140 questions — 136 scored and 4 unscored — with a 190-minute time limit, and a passing score of 75 percent, which is at least 102 of the 136 scored questions correct. The exam is delivered by computer at approved test centers, and the national component plus the state component together satisfy the SAFE Act testing requirement. The exam content follows the published national test outline: federal mortgage-related laws (RESPA, TILA, ECOA, HMDA, the Fair Housing Act, the SAFE Act itself), general mortgage knowledge (loan products, the mortgage process, underwriting), and mortgage fraud and ethics. The absence of a published pass rate is not an absence of standards: the 75 percent line on 136 scored questions is a demanding bar, and the exam is widely considered one of the harder licensing tests because of its breadth across federal law. The practical reading: target 80 percent-plus on practice exams, and drill the federal-law distinctions, which are the most commonly missed content.',
    source: { label: 'NMLS - SAFE Mortgage Loan Originator National Test', url: 'https://mortgage.nationwidelicensingsystem.org/Pages/default.aspx' },
    caveat: 'NMLS publishes the 75% passing standard but no official pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The SAFE national test is a 140-question (136 scored), 190-minute exam with a 75 percent passing line, and its curriculum is the published national test outline: federal mortgage-related laws (RESPA, TILA, ECOA, HMDA, Fair Housing, SAFE Act), general mortgage knowledge (products, process, underwriting, servicing), and mortgage fraud and ethics. A defensible plan runs 60 to 100 hours over 4 to 6 weeks. Weeks 1-2: the federal laws — RESPA (settlement and disclosure rules), TILA (truth in lending, APR, rescission), ECOA (fair lending and adverse action), HMDA (data reporting) and the Fair Housing Act — building a comparison chart of what each law regulates, because the exam tests the distinctions. Weeks 3-4: general mortgage knowledge — loan products (fixed, ARM, FHA, VA, USDA), the origination process, underwriting, appraisal and closing. Week 5: fraud and ethics — the red flags, the prohibited practices and the ethical duties. Week 6: question-bank drilling and full timed practice exams at the real format. The plan is law-heavy because the federal-law items are where candidates lose the most points; the state component is studied separately with your state\'s specific outline.',
    totalHours: '60-100 hours over 4-6 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Federal mortgage laws', tasks: ['RESPA, TILA, ECOA, HMDA and Fair Housing', 'Build a what-each-law-regulates comparison chart', 'The SAFE Act and licensing rules'], hours: 30 },
      { label: 'Weeks 3-4', focus: 'General mortgage knowledge', tasks: ['Loan products: fixed, ARM, FHA, VA, USDA', 'The origination process and underwriting', 'Appraisal, closing and servicing basics'], hours: 30 },
      { label: 'Week 5', focus: 'Fraud and ethics', tasks: ['Mortgage fraud red flags and schemes', 'Prohibited practices and ethical duties', 'Professional conduct scenarios'], hours: 15 },
      { label: 'Week 6', focus: 'Drill and simulate', tasks: ['Question-bank drilling in volume', 'Two full timed practice exams', 'Review weak outline areas and schedule'], hours: 20 }
    ],
    variants: [
      { label: 'Working in mortgage operations', detail: 'Compress the general-knowledge phase; the federal-law distinctions and fraud content are the highest-yield study.' },
      { label: 'Career-changer', detail: 'Add 2 weeks of mortgage-industry basics before the outline work.' }
    ]
  },
  prepStrategies: {
    summary: 'The SAFE test rewards precise knowledge of which federal law governs which practice, so the dominant strategy is building a law-comparison framework: the exam asks which law applies to a described practice — RESPA for settlement and disclosure, TILA for credit terms and rescission, ECOA for fair lending and adverse action, HMDA for reporting — and candidates who confuse the boundaries miss the largest cluster of items. Second, drill the 75-percent-relevant practice volume: 136 scored questions means about 1.4 minutes per item, and the exam is long, so two full timed practice exams are essential. Third, master the fraud and ethics block deliberately: the red flags and prohibited practices are tested precisely, and it is a distinct content area. Fourth, plan the state component: the national test is one half of the requirement, and each state adds its own test content, so study your state\'s outline before the state exam. Finally, use current materials — the federal rules and the outline are updated — and confirm the exact test format at registration, because item counts can change.',
    items: [
      { title: 'Build a law-comparison chart', detail: 'Which law governs which practice is the highest-yield framework.' },
      { title: 'Run two full timed exams', detail: '136 scored questions in 190 minutes; the length is part of the test.' },
      { title: 'Drill fraud and ethics', detail: 'Red flags and prohibited practices are a distinct tested block.' },
      { title: 'Plan the state component', detail: 'The national test is half the requirement; study your state\'s outline.' },
      { title: 'Use current materials', detail: 'The federal rules and outline are updated; confirm the format at registration.' }
    ]
  },
  resourceComparison: {
    summary: 'SAFE test prep is a mature market with three tiers. The NMLS test content outline (free) is the authoritative scope, and the NMLS practice test and tutorial are the closest official materials. The major prep providers — including the well-known mortgage test-prep companies — sell courses, books and test simulators from roughly $100 for a book to $400-$600 for a full course with simulated exams; the test simulators are the most valuable component because the exam rewards timing and question volume. Free resources include the outline, the NMLS practice test and mortgage-industry glossaries. A realistic total budget is $200 to $700 including the exam fee (about $110 for the national test, with the state component and fingerprinting adding more). Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NMLS test content outline', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'NMLS practice test + tutorial', values: ['Free', 'Official online practice', 'The closest official item style'] },
      { label: 'Prep provider courses', values: ['$300-$600', 'Online courses + test simulators', 'Structured learners wanting the full suite'] },
      { label: 'Study guide books', values: ['$100-$200', 'Printed or digital book', 'Self-directed law and product coverage'] },
      { label: 'Test simulators', values: ['$50-$200', 'Online timed practice exams', 'The timing and volume the exam demands'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the national test fee is about $110 plus state fees; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common SAFE test mistake is confusing the federal laws: candidates who memorise the law names but not their boundaries miss the items that ask which law governs a described practice — the exam\'s largest cluster. The fix is a comparison chart drilled until the boundaries are reflexive. The second mistake is underestimating the length: 136 scored questions in 190 minutes with reading-heavy items punishes candidates who never ran a full simulation; run two. Third, candidates under-prepare fraud and ethics, treating it as common sense when the red flags and prohibited practices are tested precisely. Fourth, some candidates study only the national content and forget the state component is a separate exam with its own outline; plan both. Finally, using outdated materials costs points on the federal rules, which are updated; confirm the outline version at registration.',
    items: [
      { mistake: 'Confusing the federal laws', fix: 'Drill which law governs which practice until the boundaries are reflexive.' },
      { mistake: 'Underestimating the length', fix: '136 scored questions in 190 minutes; run two full simulations.' },
      { mistake: 'Skipping fraud and ethics', fix: 'Red flags and prohibited practices are tested precisely.' },
      { mistake: 'Forgetting the state component', fix: 'The state exam has its own outline; study both.' },
      { mistake: 'Using outdated materials', fix: 'The federal rules are updated; confirm the outline version.' }
    ]
  },
  questionTypes: {
    summary: 'The SAFE national test is a 140-question (136 scored) multiple-choice exam in 190 minutes. The items test the published outline: federal mortgage laws, general mortgage knowledge, and mortgage fraud and ethics, with a large share of scenario items asking which law applies, which disclosure is required, or which practice is prohibited. The exam rewards precise legal knowledge and industry fluency. Samples below are editor-written illustrations of the published outline, not live exam items; they show the law-distinction style of the real items.',
    types: [
      { name: 'Federal-law items', share: 'Largest block', detail: 'Which law applies, which disclosure is required, which practice is prohibited.' },
      { name: 'General knowledge items', share: 'Large block', detail: 'Products, underwriting, the origination process, closing.' },
      { name: 'Fraud and ethics items', share: 'Meaningful block', detail: 'Red flags, schemes and ethical duties.' }
    ],
    samples: [
      {
        prompt: 'A lender must provide a Loan Estimate within three business days of a completed application. Which federal law establishes this requirement?',
        options: ['A. RESPA (with TILA disclosure rules)', 'B. HMDA', 'C. ECOA', 'D. The Fair Housing Act'],
        answer: 'A',
        explanation: 'The Loan Estimate requirement comes from the integrated TILA-RESPA disclosure rules under RESPA and TILA. HMDA covers data reporting, ECOA covers fair-lending and adverse-action rules, and the Fair Housing Act prohibits housing discrimination — none establishes the disclosure timing.'
      },
      {
        prompt: 'Under ECOA, when a lender denies a loan application, the lender must provide:',
        options: ['A. An adverse action notice stating the reasons, within the required time frame', 'B. A verbal explanation only', 'C. No notice for first-time applicants', 'D. A notice only if the applicant asks'],
        answer: 'A',
        explanation: 'ECOA requires an adverse action notice with the specific reasons for the denial within the required time frame. Verbal explanations, no notice, or notice-on-request each violate the fair-lending rules.'
      },
      {
        prompt: 'An originator notices a borrower\'s income documents are inconsistent with the stated income and the loan is urgent. The most appropriate action is:',
        options: ['A. Verify the income with the documentation and escalate suspected fraud', 'B. Proceed to keep the deal on schedule', 'C. Adjust the income figure to match', 'D. Ignore the inconsistency'],
        answer: 'A',
        explanation: 'Income-document inconsistencies are a classic mortgage-fraud red flag; the originator must verify and escalate rather than proceed. Proceeding for the schedule, adjusting the figure or ignoring the inconsistency each facilitate potential fraud.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published outline, not live exam items.'
  },
  examDay: {
    summary: 'The SAFE national test is a 140-question (136 scored), 190-minute computer-based exam taken at an approved test center. Bring the required identification matching your NMLS record and your test confirmation; personal items go in the locker. Arrive early — late arrivals may forfeit the appointment and fee. Pace at about 1.4 minutes per scored item, flag uncertain items for review, and budget extra time for the reading-heavy federal-law scenarios. Your score is reported on completion, with the official result following; a passing score is 75 percent (102 of 136 scored). If you fail, the NMLS rules define the retake timing and the waiting period. On a pass, you still need the state test component, the pre-licensing education, the credit report and the criminal background check before you receive an MLO licence. The afterwards matters: complete the remaining licensing steps within the validity windows, because the national test score and education expire if you do not complete the licence.',
    bring: ['Required identification matching your NMLS record', 'Test confirmation', 'The test-center requirements from your scheduling notice'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the center allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in and complete the test-center security steps.' },
      { time: 'Exam', detail: '140 questions (136 scored) in 190 minutes; pace ~1.4 minutes per item.' },
      { time: 'After submit', detail: 'Score is reported; the official result follows.' },
      { time: 'Next', detail: 'Complete the state test, education, credit and background steps.' }
    ],
    rules: [
      'The exam is computer-based at an approved test center',
      '190 minutes for 140 questions (136 scored); the clock does not pause',
      'A 75% score (102 of 136) is required to pass'
    ],
    afterwards: 'On a pass, complete the state component, pre-licensing education, credit and background checks to receive the MLO licence. On a fail, retake per NMLS rules after additional study.'
  }
};

export default data;
