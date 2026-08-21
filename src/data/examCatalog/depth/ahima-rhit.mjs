const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Health information & coding certifications desk',
    bio: 'The AHIMA RHIT exam structure (question count, time, passing score) and pass rates are drawn directly from AHIMA\u2019s official RHIT pages and the AHIMA exam specifications, which are updated on a published revision cycle. Wage figures come from the BLS Occupational Outlook Handbook occupation pages named by SOC code (May 2024). Where AHIMA or BLS does not publish a figure, we say so plainly rather than estimating.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against AHIMA\u2019s official RHIT exam specifications and certified-professionals pass-rate table (2022-2025), and the BLS OOH Medical Records Specialists page (May 2024 data).',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Medical records specialists earned a May 2024 BLS median of $50,250, and the RHIT is the standard associate-level credential for health-information roles.',
    summary: 'The salary conclusion for the RHIT is a solid middle-skill story: the BLS Occupational Outlook Handbook reports a May 2024 median annual wage of $50,250 for SOC 29-2072 Medical Records Specialists, which is the occupation the BLS uses for health-information technicians, with the lowest 10 percent earning below $31,850 and the highest 10 percent above $91,070. The BLS classifies by job duty rather than certificate, so the RHIT designation does not appear as its own wage line, but employers treat it as the standard associate-level qualification for health-information-management roles — record completeness and auditing, release-of-information processing, master patient index maintenance, basic ICD-10 and CPT coding or coding review, and revenue-cycle support — and RHIT holders consistently land at or above the occupation median. Hospitals, physician practices, long-term care, ambulatory surgery centers, payers, and consulting firms all hire RHITs, and the rise of remote coding and data-quality roles has widened the geographic reach of the job. The BLS projects about 9 percent growth for medical records specialists from 2024 to 2034, which is faster than the average occupation, with roughly 15,800 openings per year driven by the digitization of health records, growing data-reporting requirements, and the aging population\u2019s rising volume of care. Two caveats anchor the picture: first, the RHIT is an associate-degree-level credential — candidates must complete an accredited Health Information Management program — so the earnings path starts with that education investment; second, advancement into management roles typically requires the baccalaureate-level RHIA credential, which many RHITs pursue later. For a candidate asking whether the RHIT pays, the direct answer is that it pays a dependable middle-class wage with strong employment growth, and it is the fastest structured entry into the health-information field.',
    rows: [
      { label: 'Median annual wage', value: '$50,250', note: 'BLS OOH, Medical Records Specialists (SOC 29-2072), May 2024' },
      { label: 'Lowest 10%', value: '$31,850', note: 'Entry-level records roles' },
      { label: 'Highest 10%', value: '$91,070', note: 'Senior HIM specialists and managers' },
      { label: 'Projected growth', value: 'About 9% (2024-2034)', note: 'Faster than the average occupation; ~15,800 openings/year' }
    ],
    growth: 'BLS projects about 9 percent growth for medical records specialists (2024-2034), with roughly 15,800 openings per year from growth plus replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - Medical Records Specialists', url: 'https://www.bls.gov/ooh/healthcare/medical-records-and-health-information-technicians.htm' }
  },
  passRate: {
    headline: 'AHIMA-reported first-time pass rates for the RHIT were 84% (2023), 78% (2024), and 74% (2025); the passing score is 300 on the 100-400 scale.',
    summary: 'The direct answer on pass rates is well documented because AHIMA publishes certified-professionals pass-rate tables: the first-time pass rates for the RHIT were 71 percent in 2022, 84 percent in 2023, 78 percent in 2024, and 74 percent in 2025, with 1,630 first-time testers in 2025 — so roughly three of every four first-time candidates pass, and the recent trend has been gently declining from the 2023 peak. The passing standard is fixed: the RHIT uses a scaled score from 100 to 400, and 300 is the passing mark on every exam form, with scaling adjusting for small form-to-form difficulty differences so there is no raw percentage cut to aim at. The exam itself contains 150 four-option multiple-choice questions — 130 scored items plus 20 unscored pretest items that are indistinguishable from scored ones — delivered by computer at Pearson VUE centers, with a 3.5-hour appointment (3 hours 25 minutes of test time plus the certification agreement and instructions). The content follows the six-domain blueprint: Data Content, Structure, and Information Governance (19-25%), Access, Disclosure, Privacy, and Security (14-18%), Data Analytics and Use (12-18%), Revenue Cycle Management (19-25%), Compliance (13-17%), and Leadership (9-12%). With 29,243 RHITs certified as of the end of 2025, the credential is the standard associate-level HIM certification, and the pass-rate profile — three-quarters of first-timers passing, with the mean close to the passing mark — tells candidates that proportional, blueprint-driven study is decisive. The read for a candidate: the majority pass, the exam rewards breadth across six domains, and the two heavyweights — data content/governance and revenue cycle — deserve the largest share of study time.',
    source: { label: 'AHIMA official RHIT page - exam specifications and certified-professionals pass rates', url: 'https://ahima.org/certification/RHIT' },
    caveat: 'Pass rates are AHIMA-published and vary by year; the passing score of 300 on the 100-400 scale is fixed. Confirm the current report on the AHIMA website.'
  },
  studyPlan: {
    summary: 'An efficient RHIT study plan is 6-10 weeks of about 80-120 total hours, because the exam is a six-domain breadth test and candidates arrive from an accredited HIM program with much of the material already covered — the study window should refresh, weight by domain, and drill the item style. The two heaviest domains, Data Content/Governance (19-25%) and Revenue Cycle Management (19-25%), deserve the largest share of time, followed by Access/Privacy/Security (14-18%), Compliance (13-17%), Data Analytics (12-18%), and Leadership (9-12%). Recent HIM graduates should budget the lower end because the curriculum tracks the blueprint; candidates several years out of school should budget the upper end because ICD-10, CPT, and regulatory content drifts with annual code updates. The 3.5-hour appointment with 20 pretest items rewards rehearsal: two or three full-length timed mocks at 150 questions build the pacing discipline the exam demands. A note on sequencing: the exam is computer-based at Pearson VUE, and AHIMA requires a 30-day wait before a retake application can be approved, so candidates should schedule the first attempt when the mock scores are consistently clearing the scaled 300 mark rather than treating the first appointment as a practice run. The final two weeks should be pure question-bank work with a miss log tied to the six domains, because the exam\u2019s breadth makes targeted re-study of weak domains the highest-yield final move.',
    totalHours: '80-120 hours over 6-10 weeks',
    weeks: [
      { label: 'Week 1-2', focus: 'Domain review part 1', tasks: ['Refresh Data Content, Structure, and Governance: record components, MPI, EHR workflows', 'Work Revenue Cycle: coding support, DNFB, denials, payment methodologies', 'Review payer guidelines and query processes'], hours: 30 },
      { label: 'Week 3-4', focus: 'Domain review part 2', tasks: ['Study Access, Disclosure, Privacy, and Security: PHI, release of information, retention', 'Cover Compliance: quality assessments, audits, regulatory monitoring', 'Review Data Analytics and Leadership: metrics, reporting, project management'], hours: 30 },
      { label: 'Week 5-6', focus: 'Question-bank drilling', tasks: ['Drill 600-1,000 items from a current RHIT bank', 'Log every miss and re-read the associated domain content', 'Take one full 150-question timed mock'], hours: 30 },
      { label: 'Week 7-8', focus: 'Mocks and targeted re-study', tasks: ['Take two more full-length timed mocks scoring above 300 scaled', 'Re-drill the miss log by domain until clean', 'Confirm Pearson VUE booking and photo ID requirements'], hours: 25 }
    ],
    variants: [
      { label: 'Recent HIM graduates', detail: 'Fastest path; the program curriculum tracks the blueprint, so weight time toward question-bank drilling and full mocks.' },
      { label: 'Experienced RHITs re-certifying or career-changers', detail: 'Budget the upper end and refresh the annual code updates (ICD-10, CPT) before studying the full blueprint.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant prep strategy for the RHIT is studying the six-domain blueprint in weight order and drilling a current question bank with a miss log, because the 130 scored items follow the published domain percentages and the fixed passing mark of scaled 300 rewards proportional coverage. First, download the current AHIMA RHIT exam content outline and use it as the master checklist; allocate time by domain weight, which puts Data Content/Governance and Revenue Cycle first at roughly 20 percent each. Second, refresh the annual code-update content deliberately — ICD-10-CM, ICD-10-PCS, and CPT — because the coding and revenue-cycle items assume current codes, and candidates who studied an older edition lose those items. Third, drill a current question bank, 600-1,000 items with explanations, and build a miss log tied to the six domains; the bank rehearsal converts the outline into recall, and the explanations fix the regulatory and workflow distinctions the exam tests. Fourth, run at least three full-length timed mocks at 150 questions, because the 3.5-hour appointment with 20 mixed pretest items surprises candidates who only drill in short blocks. Fifth, memorise the high-frequency fact clusters — the components of the designated record set, the retention and release-of-information rules, the revenue-cycle sequence, and the privacy/security roles — because the exam repeats those patterns across items. Finally, schedule the first attempt when mocks consistently clear scaled 300, and protect the 30-day retake wait by not burning the first attempt on an unprepared sitting. A further high-yield tactic is to study the AHIMA practice exams and the official RHIT exam-prep guidance first, because AHIMA\u2019s own materials define the item style and the domain percentages more precisely than any third-party source.',
    items: [
      { title: 'Study the blueprint in weight order', detail: 'Data Content/Governance and Revenue Cycle carry ~40% combined; allocate time proportionally.' },
      { title: 'Refresh current code sets', detail: 'ICD-10-CM, ICD-10-PCS, and CPT change annually; study the current edition.' },
      { title: 'Drill a current bank with a miss log', detail: '600-1,000 items with explanations, tied to the six domains.' },
      { title: 'Run full-length timed mocks', detail: 'Three mocks at 150 questions build the pacing the 3.5-hour appointment demands.' },
      { title: 'Use AHIMA\u2019s own prep materials first', detail: 'The official exam-prep guidance and practice exams define the item style and domain weights.' }
    ]
  },
  resourceComparison: {
    summary: 'RHIT prep resources split into the AHIMA official set, current question banks, and review courses, and the buying logic is dominated by the official anchor: AHIMA publishes the exam content outline, practice exams, and an exam-prep guide, and those official materials define the domain weights and item style more precisely than anything third-party, so they should be the foundation of every plan. The free or low-cost AHIMA set — the content outline, the FAQ pages, and the certified-professionals data — covers the scope definition; the official RHIT exam-prep package with two practice exams and 850 practice questions is the benchmark purchase at roughly $100-200 depending on membership. Third-party question banks run $50-150 and add volume and explanations, which helps candidates who need more reps than the official set provides. Structured review courses run $200-500 and add video instruction, which helps candidates who are weak in coding or revenue-cycle content or who want external pacing. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. Employers are the hidden variable: many health systems reimburse RHIT exam fees and prep materials because the credential is a job requirement, so candidates should ask their employer before buying anything. A cheap readiness check is taking the free sample items or one practice exam before purchasing, because recent graduates often score closer to the passing mark than they expect and need only a bank, not a course. Candidates should also note the exam fee itself: $229 for AHIMA members and $299 for non-members, per attempt, with the same fee on retakes.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'AHIMA content outline + FAQs (official)', values: ['Free', 'Official documents', 'The authoritative scope map'], note: '' },
      { label: 'AHIMA RHIT exam prep package', values: ['$100-200', '2 practice exams + 850 questions', 'Official item style and domain weights'], note: '' },
      { label: 'Third-party question bank', values: ['$50-150', 'Online, high volume', 'Extra reps beyond the official set'], note: '' },
      { label: 'Structured review course', values: ['$200-500', 'Video + live sessions', 'Candidates wanting external pacing'], note: '' }
    ],
    footnote: 'List prices as of mid-2026 and change frequently; we rank nothing by commission. Exam fee is $229 (AHIMA members) or $299 (non-members) per attempt.'
  },
  commonMistakes: {
    summary: 'The most common mistake on the RHIT exam is studying an outdated edition of the code sets or review materials, because ICD-10-CM, ICD-10-PCS, and CPT update annually and the coding and revenue-cycle items assume the current edition — candidates who prepared with last year\u2019s codes lose items they could otherwise answer; the second is studying the six domains in book order instead of weight order, which starves Data Content/Governance and Revenue Cycle, the two domains that together carry about 40 percent of the scored items. A third recurring error is treating the scaled 300 passing mark as 75 percent correct: candidates aim at a raw percentage and misjudge their readiness, when the scaled conversion means the required raw performance varies by form. Candidates also routinely skip the full-length mock, so the 150-question, 3.5-hour appointment with 20 mixed pretest items surprises them on pacing. Another pattern is ignoring the pretest items\u2019 existence and panicking about unfamiliar questions, when AHIMA clearly states that 20 items are unscored pilot questions that are indistinguishable from scored ones — every question still deserves an answer, but not a spiral of doubt. Finally, some candidates burn the first attempt without preparing, forgetting that AHIMA requires a 30-day wait before a retake application can be approved, which compresses the second attempt\u2019s study window.',
    items: [
      { mistake: 'Studying outdated code sets', fix: 'Use the current ICD-10-CM, ICD-10-PCS, and CPT editions; the exam assumes the current annual update.' },
      { mistake: 'Studying domains in book order', fix: 'Allocate time by weight: Data Content/Governance and Revenue Cycle first, then the remaining four domains.' },
      { mistake: 'Treating scaled 300 as a raw percentage', fix: 'Understand that 300 is a scaled mark and the raw equivalent varies by form; aim at mock scores above 300.' },
      { mistake: 'Skipping full-length mocks', fix: 'Run three 150-question timed mocks; the 3.5-hour appointment with pretest items is a pacing test.' },
      { mistake: 'Burning the first attempt unprepared', fix: 'Schedule only when mocks clear scaled 300; a failed attempt costs the fee plus a 30-day retake wait.' }
    ]
  },
  questionTypes: {
    summary: 'The RHIT exam contains 150 four-option, single-best-answer multiple-choice questions — 130 scored plus 20 unscored pretest items — delivered by computer at Pearson VUE centers over a 3.5-hour appointment, with a scaled passing score of 300. The items follow the six-domain blueprint, and the style is applied-knowledge: many items present a scenario — a release-of-information request, a record-completeness question, a coding or denial situation — and ask which action, document, or process applies, which is why the exam rewards workflow knowledge over isolated facts. The sample items below illustrate the published style across three domains: data governance, privacy/access, and revenue cycle. The sample items are editor-written illustrations of the published blueprint, not live exam items.',
    types: [
      { name: 'Scenario-based single-best-answer', share: 'Majority of scored items', detail: 'Present an HIM workflow situation and ask which action or process applies.' },
      { name: 'Knowledge-recall items', share: 'Substantial minority', detail: 'Direct questions on record components, retention rules, and regulatory terms.' },
      { name: 'Coding and revenue-cycle items', share: 'Within Revenue Cycle domain', detail: 'Coding support, DNFB, denials, and payment-methodology questions.' }
    ],
    samples: [
      {
        prompt: 'A patient requests a copy of their complete medical record. Which elements may the facility withhold from the copy in most jurisdictions?',
        options: [
          'A. Psychotherapy notes, when separately maintained and clearly not part of the designated record set',
          'B. Laboratory results and radiology reports',
          'C. The history and physical examination documentation',
          'D. Medication administration records'
        ],
        answer: 'A',
        explanation: 'Psychotherapy notes, when maintained separately from the medical record, are excluded from the right of access under HIPAA, unlike the other listed items, which are part of the designated record set and must generally be provided.'
      },
      {
        prompt: 'Which metric is most directly used to monitor the revenue cycle for incomplete documentation?',
        options: [
          'A. Discharged Not Final Billed (DNFB)',
          'B. Master Patient Index error rate',
          'C. Release-of-information turnaround time',
          'D. Physician satisfaction survey score'
        ],
        answer: 'A',
        explanation: 'DNFB tracks the volume and value of discharged accounts not yet billed, which is the direct indicator of incomplete documentation and coding lag in the revenue cycle. The other metrics measure record quality, ROI efficiency, and staff satisfaction, not billing lag.'
      },
      {
        prompt: 'Under HIPAA, which of the following is the minimum standard for disclosing PHI for treatment, payment, and operations purposes?',
        options: [
          'A. The minimum necessary standard',
          'B. Written patient consent for every disclosure',
          'C. A business associate agreement for every transaction',
          'D. State approval before each disclosure'
        ],
        answer: 'A',
        explanation: 'The minimum necessary standard requires limiting uses and disclosures of PHI to the minimum needed for the purpose. Treatment, payment, and operations disclosures generally do not require individual written consent, and business associate agreements apply to business associates, not every transaction.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'The RHIT exam is a computer-based appointment at a Pearson VUE testing center, and the direct exam-day answer is that you will sit 150 four-option multiple-choice questions (130 scored plus 20 unscored pretest items) with a 3.5-hour appointment, and a scaled score of 300 on the 100-400 scale is required to pass. Arrive with two forms of government-issued photo ID, because Pearson VUE enforces the two-ID rule strictly; check the AHIMA authorization-to-test letter and the center\u2019s booking confirmation for any additional instructions. The appointment begins with the AHIMA certification agreement (about 5 minutes), then the test clock starts on the 3 hours 25 minutes of exam time; there are no scheduled breaks, and the clock does not pause, so the full-length mock discipline matters. Candidates may navigate back and forth between items and flag questions for review, which the exam software supports — use the flag feature rather than leaving items blank. Pilot items are indistinguishable from scored ones, so answer every question as if it counts. Expect a quiet, proctored environment with a visible countdown clock; pace at roughly 40 questions per hour to leave review margin. A preliminary result is not typically displayed on screen for AHIMA exams — the official score report follows within about two weeks, with domain-level feedback for candidates who do not pass. If you do not pass, you may reapply after a 30-day waiting period with a new application and the exam fee ($229 members / $299 non-members); AHIMA keeps transcripts on file so eligibility documentation does not need to be resubmitted.',
    bring: ['Two forms of government-issued photo ID', 'AHIMA authorization-to-test letter and booking confirmation', 'Approved glasses or hearing aids if used', 'Snacks for before the appointment (not in the test room)'],
    leave: ['Phone, smartwatch, and other electronics (stored per center rules)', 'Study materials and notes', 'Scratch paper from home (the center supplies its own)', 'Any item on the Pearson VUE prohibited list'],
    timeline: [
      { time: '15-30 min before', detail: 'Arrive, present two IDs, sign in, and store personal items in a locker' },
      { time: '0-5 min', detail: 'Complete the AHIMA certification agreement' },
      { time: '0-3h25m', detail: 'Work the 150 items; flag for review and navigate freely — pretest items are mixed in' },
      { time: 'After submission', detail: 'Official score report within ~2 weeks; domain-level feedback if you did not pass' }
    ],
    rules: ['Two forms of government-issued photo ID required', 'No scheduled breaks; the clock does not pause', 'No personal electronics in the test room', 'Answer every item; 20 of the 150 are unscored pretest items'],
    afterwards: 'A scaled score of 300 passes the RHIT. Maintain the credential with AHIMA\u2019s continuing-education cycle (CEUs on a recurring cycle). If you fail, wait 30 days, reapply with a new application and fee, and use the domain-level feedback to re-target study.'
  }
};

export default data;
