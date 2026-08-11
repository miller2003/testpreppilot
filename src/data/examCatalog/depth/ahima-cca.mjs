const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Health-information & clinical-support certifications desk',
    bio: 'This desk covers health-information certifications. Exam structure, fees and rules come from the certifying body\'s official pages (AHIMA), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against AHIMA\'s Certified Coding Associate (CCA) program pages and BLS OOH Medical Records Specialists (SOC 29-2072), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$48,890 median for medical records specialists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "AHIMA CCA" — the Certified Coding Associate credential certifies entry-level medical coding skill, and the wage question belongs to the occupation you perform with it. The closest official BLS occupation is Medical Records Specialists, SOC 29-2072, which had a May 2024 median wage of $48,890, with the lowest 10 percent under $32,140 and the highest 10 percent above $79,260. The fit is deliberate: CCA holders work as entry-level medical coders, coding the diagnoses and procedures in patient records for billing and reporting, and BLS counted 198,100 medical records specialist jobs in 2024, projecting 7 percent growth from 2024 to 2034 with about 17,600 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the CCA is explicitly an entry-level credential, so the realistic benchmark for a new holder sits at or below the median, climbing with the CCS (Certified Coding Specialist) credential and experience. Read the number as the market for the occupation, with the credential as the entry ticket and the advanced credentials as the advancement path.',
    rows: [
      { label: 'Median annual wage, medical records specialists', value: '$48,890', note: 'BLS OOH, SOC 29-2072, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $32,140', note: 'BLS OOH, SOC 29-2072, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $79,260', note: 'BLS OOH, SOC 29-2072, May 2024' },
      { label: 'Projected openings per year', value: '~17,600', note: 'BLS OOH, SOC 29-2072, 2024-2034' }
    ],
    growth: 'BLS projects 7 percent growth for medical records specialists from 2024 to 2034, about 17,600 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Medical Records Specialists', url: 'https://www.bls.gov/ooh/healthcare/medical-records-and-health-information-technicians.htm' }
  },
  passRate: {
    headline: 'AHIMA publishes the passing standard and reports pass rates by credential; the CCA pass rate is not published as a single national figure',
    summary: 'AHIMA does not publish a single national pass rate for the CCA exam, and third-party estimates are not official data, so we do not treat them as authoritative. What AHIMA does publish is the format and the passing standard: the CCA exam is a computer-based exam of 100 questions with a 2-hour time limit, and the result is reported on AHIMA\'s scaled score system with a passing standard set by the credentialing program (AHIMA\'s exams report results on a scaled basis rather than a simple percentage). The exam content follows the published content outline, covering clinical classification systems (ICD-10-CM and CPT coding), the coding process, regulatory and compliance requirements, and health information management fundamentals. The absence of a published pass rate is not an absence of standards: the exam validates entry-level coding competency, and the scaled scoring means performance is judged against a fixed standard rather than a curve. The practical reading: complete an accredited coding education program (the typical eligibility path), study the current coding guidelines and the content outline, and prepare for a computer-based exam that tests applied coding decisions, not just book knowledge.',
    source: { label: 'AHIMA - Certified Coding Associate (CCA) certification', url: 'https://www.ahima.org/certification-careers/certifications/cca/' },
    caveat: 'AHIMA publishes the format and scaled scoring but no single national CCA pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The CCA exam is a 100-question, 2-hour computer-based exam, and its curriculum is the published content outline: clinical classification systems (ICD-10-CM and CPT), the coding process, regulatory and compliance requirements, and health information management fundamentals. Eligibility typically requires completion of an accredited coding education program, which is also where the hands-on coding practice happens. A defensible plan runs 60 to 120 hours of exam-focused study over 6 to 8 weeks, on top of the education program. Weeks 1-2: ICD-10-CM — the classification structure, coding conventions, and the official guidelines for diagnosis coding. Weeks 3-4: CPT — the procedure coding structure, modifiers and the coding process from documentation review to code assignment. Weeks 5-6: compliance and health information fundamentals — regulations, audits, data quality and health records. Weeks 7-8: coding-practice drilling in volume and timed practice exams at the real format. The plan is practice-heavy because the exam rewards applied coding decisions; code real scenarios from the guidelines, not just memorised rules.',
    totalHours: '60-120 hours of exam study over 6-8 weeks (after the accredited coding program)',
    weeks: [
      { label: 'Weeks 1-2', focus: 'ICD-10-CM', tasks: ['Classification structure and coding conventions', 'Official guidelines for diagnosis coding', 'Scenario coding practice'], hours: 25 },
      { label: 'Weeks 3-4', focus: 'CPT', tasks: ['Procedure coding structure and modifiers', 'The coding process from documentation to code', 'Scenario coding practice'], hours: 25 },
      { label: 'Weeks 5-6', focus: 'Compliance and fundamentals', tasks: ['Regulations, audits and compliance', 'Health records and data quality', 'Health information management basics'], hours: 25 },
      { label: 'Weeks 7-8', focus: 'Drill and simulate', tasks: ['Coding practice in volume', 'Timed practice exams at the real format', 'Review weak content areas'], hours: 25 }
    ],
    variants: [
      { label: 'Recent coding program graduate', detail: 'The coding skill is fresh; focus study on the exam format and the compliance block.' },
      { label: 'Career-changer with HIM background', detail: 'Add 1-2 weeks of ICD-10-CM and CPT refresher before the drill phase.' }
    ]
  },
  prepStrategies: {
    summary: 'The CCA exam rewards applied coding decisions, so the dominant strategy is coding practice: work real coding scenarios against the official ICD-10-CM and CPT guidelines, because the exam tests the decision process — reading the documentation, applying the conventions and guidelines, and selecting the correct code — not memorised code lists. Second, use the published content outline as the scope map and audit every study resource against it. Third, master the coding guidelines deliberately: the official guidelines are the authority the exam follows, and candidates who code from habit instead of the current guidelines lose points. Fourth, drill the compliance block — regulations, audits and data quality — which is a distinct content area that candidates focused on codes routinely under-prepare. Finally, take at least two timed practice exams at the real 100-question, 2-hour format; the pace is part of the test, and the computer-based delivery rewards comfort with the interface.',
    items: [
      { title: 'Code real scenarios', detail: 'The exam tests the decision process; practise against the current guidelines.' },
      { title: 'Audit against the content outline', detail: 'The published outline is the authoritative scope.' },
      { title: 'Master the current guidelines', detail: 'The official guidelines are the authority; code by them, not by habit.' },
      { title: 'Drill the compliance block', detail: 'Regulations, audits and data quality are a distinct content area.' },
      { title: 'Run two timed simulations', detail: '100 questions in 2 hours; the pace and interface are part of the test.' }
    ]
  },
  resourceComparison: {
    summary: 'CCA costs are dominated by the education program: accredited coding education programs range from roughly $1,500 to $5,000 depending on the institution and format, and they are the standard eligibility path and the source of hands-on coding practice. The AHIMA exam fee is about $199-$299 depending on membership status. AHIMA\'s official study materials — the CCA exam preparation products, the content outline (free) and the coding manuals (ICD-10-CM and CPT, roughly $100-$300) — are the core study stack. Third-party practice-exam products add $50-$150. A realistic total budget is $2,000 to $6,000 including the program. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'AHIMA content outline', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'Accredited coding program', values: ['$1,500-$5,000', 'Classroom or online + practice', 'The eligibility and coding-skill core'] },
      { label: 'ICD-10-CM and CPT manuals', values: ['$100-$300', 'Printed or digital manuals', 'The reference the exam follows'] },
      { label: 'AHIMA exam prep products', values: ['$100-$300', 'Online prep and practice', 'The official preparation path'] },
      { label: 'Third-party practice exams', values: ['$50-$150', 'Online simulated exams', 'Volume drilling before the exam'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; AHIMA fees vary by membership; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common CCA mistake is memorising code lists instead of learning the coding process: candidates who study codes without the guidelines and conventions fail the applied items, which test the decision from documentation to code. The fix is scenario coding practice from the start. The second mistake is using outdated guidelines — coding rules change annually, and candidates who code from old habits or old materials answer current questions wrong. Third, candidates under-prepare the compliance and health-information block, treating it as secondary when it is a distinct content area. Fourth, some candidates rush the eligibility path and arrive without the accredited program documentation; confirm it early. Finally, candidates who never run a timed simulation misjudge the 2-hour pace and the computer-based delivery; two simulations are the minimum.',
    items: [
      { mistake: 'Memorising code lists', fix: 'Learn the coding process — documentation to code, by the guidelines.' },
      { mistake: 'Using outdated guidelines', fix: 'Coding rules change annually; use current materials.' },
      { mistake: 'Under-preparing compliance', fix: 'Regulations and audits are a distinct content area; drill it.' },
      { mistake: 'Rushing the eligibility path', fix: 'Confirm the accredited program requirement early.' },
      { mistake: 'Skipping timed simulations', fix: '100 questions in 2 hours; run two timed simulations.' }
    ]
  },
  questionTypes: {
    summary: 'The CCA exam is a 100-question computer-based exam in 2 hours, and its items are coding-decision-focused: a described record, scenario or documentation excerpt followed by the correct code assignment, guideline application, or compliance action. The exam covers clinical classification systems, the coding process, regulatory and compliance requirements, and health information management fundamentals per the published content outline. Samples below are editor-written illustrations of the published content outline, not live exam items; they show the applied coding style of the real items.',
    types: [
      { name: 'Coding scenario items', share: 'Majority', detail: 'Documentation with the correct ICD-10-CM or CPT assignment.' },
      { name: 'Guideline application items', share: 'Large minority', detail: 'Applying conventions, sequencing and modifier rules.' },
      { name: 'Compliance and HIM items', share: 'Meaningful share', detail: 'Regulations, audits, data quality and health records.' }
    ],
    samples: [
      {
        prompt: 'A patient is admitted with pneumonia due to COVID-19, confirmed by test. Under the official coding guidelines, the correct sequencing is:',
        options: ['A. Code the pneumonia as the principal diagnosis with COVID-19 as a secondary diagnosis', 'B. Code COVID-19 as the principal diagnosis with the pneumonia as a manifestation', 'C. Code only the pneumonia', 'D. Code only COVID-19'],
        answer: 'B',
        explanation: 'Under the current guidelines, when COVID-19 causes pneumonia, COVID-19 is sequenced as the principal diagnosis and the pneumonia is coded as a manifestation (in this case with the combination code). Coding only one condition or sequencing the manifestation first misapplies the guideline.'
      },
      {
        prompt: 'Which CPT modifier indicates that a procedure was performed bilaterally?',
        options: ['A. Modifier 50', 'B. Modifier 51', 'C. Modifier 52', 'D. Modifier 59'],
        answer: 'A',
        explanation: 'Modifier 50 identifies bilateral procedures. Modifier 51 indicates multiple procedures, 52 reduced services, and 59 a distinct procedural service.'
      },
      {
        prompt: 'A coder discovers a discrepancy between the documented diagnosis and the code assigned by the previous coder. The appropriate action is to:',
        options: ['A. Follow the facility\'s coding and query process, including a physician query where appropriate', 'B. Change the code to match the previous coder', 'C. Ignore the discrepancy', 'D. Delete the code and leave it blank'],
        answer: 'A',
        explanation: 'Coding practice requires resolving discrepancies through the facility\'s process, including a physician query when the documentation is ambiguous — not silently matching, ignoring or deleting the code.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published content outline, not live exam items.'
  },
  examDay: {
    summary: 'The CCA exam is a 100-question, 2-hour computer-based exam taken at a Pearson VUE centre or through the approved testing platform. Bring the required identification matching your registration and your exam confirmation; arrive early — late arrivals may forfeit the appointment and fee. The exam is closed book: you cannot bring coding manuals, so the exam tests what you know, and the interface provides the tools you need. Pace at about 72 seconds per item and flag uncertain items for review. Your result is reported after the exam, with the official score report following. If you do not pass, AHIMA\'s retake policy defines the waiting period and reapplication. On a pass, the CCA credential requires continuing education to maintain — AHIMA credentials have an annual maintenance requirement, so plan it from the start. The afterwards matters: the CCA is the entry credential; the CCS (Certified Coding Specialist) is the common next step, and employers often pay a premium for the advanced credential.',
    bring: ['Required identification matching your registration', 'Exam confirmation'],
    leave: ['Coding manuals — the exam is closed book', 'Personal electronics and study materials'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the appointment, ID requirements and the testing centre or platform.' },
      { time: 'Exam', detail: '100 questions in 2 hours; pace ~72 seconds per item, flag and review.' },
      { time: 'After submit', detail: 'Result is reported; the official score report follows.' },
      { time: 'Next', detail: 'Plan the continuing-education maintenance and the CCS step.' }
    ],
    rules: [
      'The exam is closed book — no coding manuals may be brought in',
      '2 hours for 100 questions; the clock does not pause',
      'The credential has an annual maintenance requirement'
    ],
    afterwards: 'On a pass, maintain the CCA with the required continuing education. On a fail, follow the AHIMA retake policy after additional study. Plan the CCS as the advancement step.'
  }
};

export default data;
