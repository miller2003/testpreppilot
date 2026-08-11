const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Medical coding & health-information certifications desk',
    bio: 'This desk covers medical-coding certifications. Exam structure, fees and rules come from the certifying body\'s official pages (AAPC), which are revised annually with the code updates; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the AAPC CPC exam pages and BLS OOH Medical Records Specialists (SOC 29-2072), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$48,890 median for medical records specialists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "CPC" — the AAPC Certified Professional Coder credential validates outpatient medical-coding skill, and the wage question belongs to the occupation you perform with it. The closest official BLS occupation is Medical Records Specialists, SOC 29-2072, which had a May 2024 median wage of $48,890, with the lowest 10 percent under $32,140 and the highest 10 percent above $79,260. The fit is direct: CPC holders work as outpatient medical coders in physician practices, clinics and billing companies, coding diagnoses and procedures for reimbursement, and BLS counted 198,100 medical records specialist jobs in 2024, projecting 7 percent growth from 2024 to 2034 with about 17,600 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and coding pay rises with the credential tier and specialty — certified coders with experience and specialty certifications (surgical, anesthesia, evaluation-and-management) earn above the median, while entry-level coders earn below it. Read the number as the market for the occupation, with the CPC as the standard entry credential for outpatient coding.',
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
    headline: 'AAPC publishes pass rates by year — historically around 50-60% for first-time CPC candidates, with prep courses lifting the pass rate substantially',
    summary: 'The AAPC publishes annual pass-rate information for its certification exams, and the reported CPC pass rate has historically sat in the roughly 50-60 percent range, with the AAPC\'s own framing that candidates who complete structured preparation programs pass at materially higher rates than the overall average. We present the published figure as the body\'s own reporting and note that it reflects all candidates, including those who sit without formal preparation. What the AAPC also publishes is the format: the CPC exam has 100 multiple-choice questions with a 4-hour time limit, delivered by computer at AAPC test sites or through online proctoring, and the exam is open book — candidates may bring the current ICD-10-CM, CPT and HCPCS code books. The exam covers the full outpatient coding scope: evaluation and management coding, anesthesia, surgery (integumentary, musculoskeletal, cardiovascular, and the other surgery sections), radiology, pathology and laboratory, and medicine. The practical reading: the pass rate is a signal to prepare seriously — a structured prep course plus practice exams is the standard path, and the open-book format means knowing how to use the code books matters as much as knowing the codes.',
    source: { label: 'AAPC - Certified Professional Coder (CPC) exam', url: 'https://www.aapc.com/certification/cpc/' },
    caveat: 'AAPC publishes annual pass-rate data and reports that prepared candidates pass at higher rates; the exact figure varies by year and candidate pool.'
  },
  studyPlan: {
    summary: 'The CPC exam is a 100-question, 4-hour open-book exam covering the full outpatient coding scope, and its curriculum is the current coding systems — ICD-10-CM for diagnoses and CPT for procedures, with HCPCS for supplies and services. A defensible plan runs 80 to 140 hours over 8 to 12 weeks, typically built around an AAPC prep course or an equivalent structured program. Weeks 1-2: the foundations — medical terminology, anatomy and the coding guidelines — because the exam assumes clinical fluency. Weeks 3-4: ICD-10-CM coding — the guidelines, the conventions and diagnosis-coding practice. Weeks 5-8: CPT — the sections in order (evaluation and management, anesthesia, surgery, radiology, pathology/lab, medicine), with heavy practice on the surgery sections, which carry the largest weight. Weeks 9-10: HCPCS, modifier rules and coding scenarios, plus practice exams. Weeks 11-12: timed practice exams at the real 100-question, 4-hour format and targeted review. The plan is practice-heavy because the exam rewards applied coding decisions and book navigation; coding real scenarios under the open-book format is the core skill.',
    totalHours: '80-140 hours over 8-12 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Foundations', tasks: ['Medical terminology and anatomy', 'The coding guidelines and conventions', 'Clinical documentation review basics'], hours: 25 },
      { label: 'Weeks 3-4', focus: 'ICD-10-CM', tasks: ['Diagnosis coding guidelines', 'Coding practice in volume', 'Documentation-to-code decision drills'], hours: 25 },
      { label: 'Weeks 5-8', focus: 'CPT sections', tasks: ['E/M, anesthesia and the surgery sections', 'Radiology, pathology/lab and medicine', 'Modifier application practice'], hours: 50 },
      { label: 'Weeks 9-10', focus: 'HCPCS and scenarios', tasks: ['HCPCS codes and supplies', 'Coding scenarios in volume', 'First full practice exam'], hours: 25 },
      { label: 'Weeks 11-12', focus: 'Timed mocks', tasks: ['Two full timed practice exams', 'Review weak sections', 'Schedule the exam'], hours: 20 }
    ],
    variants: [
      { label: 'Recent coding-program graduate', detail: 'Compress the foundations; the CPT surgery sections and timed practice are the highest-yield focus.' },
      { label: 'Career-changer without clinical background', detail: 'Add 3-4 weeks of medical terminology and anatomy before the coding phases.' }
    ]
  },
  prepStrategies: {
    summary: 'The CPC is open book, so the dominant strategy is mastering code-book navigation: the exam rewards knowing where to find a code, how the guidelines apply, and how to use the index and tabular lists quickly — candidates who practise with the physical code books outperform those who only study summaries. Second, cover the CPT surgery sections deliberately: they carry the largest weight, and candidates who under-prepare them lose the biggest block of items. Third, drill the modifier rules and the E/M guidelines, which are tested precisely and are a common source of error. Fourth, use the AAPC prep materials and practice exams, the closest thing to the real item style, and hold yourself to 80 percent-plus on practice because the pass line is a real filter. Fifth, take at least two full timed practice exams at the real 100-question, 4-hour format; the stamina and book-handling rhythm are part of the test. Finally, remember the annual code updates: study with the current-year code books, because the exam is built on the codes in effect at testing.',
    items: [
      { title: 'Master book navigation', detail: 'The open-book format rewards knowing where to find codes fast.' },
      { title: 'Cover the surgery sections', detail: 'CPT surgery carries the largest weight; under-preparing it is the top failure driver.' },
      { title: 'Drill modifiers and E/M', detail: 'Both are tested precisely and are common error sources.' },
      { title: 'Use current-year code books', detail: 'The exam is built on the codes in effect at testing.' },
      { title: 'Run two full timed mocks', detail: '100 questions in 4 hours; the stamina and book rhythm are part of the test.' }
    ]
  },
  resourceComparison: {
    summary: 'CPC prep costs are dominated by the course and the code books. The AAPC\'s official CPC preparation course runs roughly $1,500-$3,000 depending on format (self-paced, instructor-led or the bundle with the exam); the AAPC also sells standalone study guides and practice exams. The current-year code books — ICD-10-CM, CPT and HCPCS — cost roughly $100-$250 in total and are essential because the exam is open book. Alternative prep includes community-college coding programs ($1,500-$5,000) that also provide the clinical foundation. A realistic total budget is $1,500 to $4,000 including the exam fee (about $399 for AAPC members, $499 for non-members) and the code books. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'AAPC CPC prep course', values: ['$1,500-$3,000', 'Self-paced or instructor-led + exam', 'The standard structured path'] },
      { label: 'ICD-10-CM, CPT and HCPCS books', values: ['$100-$250 total', 'Current-year code books', 'Essential for the open-book exam'] },
      { label: 'AAPC study guides and practice exams', values: ['$100-$300', 'Books and online practice', 'Applied coding practice'] },
      { label: 'Community-college coding program', values: ['$1,500-$5,000', 'Classroom or online', 'Clinical foundation plus coding'] },
      { label: 'CPC exam', values: ['~$399 member / ~$499 non-member', 'Computer-based, open book', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; AAPC fees vary by membership; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common CPC mistake is studying code lists instead of learning to navigate the code books and apply the guidelines: candidates who memorise codes fail the open-book items, which test finding the code and applying the rules under time pressure. The fix is book-based practice from the start. The second mistake is under-preparing the surgery sections, the largest weight on the exam. Third, candidates misapply the modifier rules or the E/M guidelines, which are tested precisely. Fourth, some candidates use prior-year code books and answer items from outdated codes; the exam is built on the current year\'s codes. Finally, candidates who never run a full timed practice exam underestimate the 4-hour stamina and the book-handling pace; two timed mocks are the minimum.',
    items: [
      { mistake: 'Memorising code lists', fix: 'Practise navigating the books and applying the guidelines under time.' },
      { mistake: 'Under-preparing surgery', fix: 'The CPT surgery sections carry the largest weight; drill them.' },
      { mistake: 'Misapplying modifiers and E/M', fix: 'Both are tested precisely; build a modifier and E/M checklist.' },
      { mistake: 'Using prior-year code books', fix: 'The exam is built on the current year\'s codes.' },
      { mistake: 'Skipping timed mocks', fix: '100 questions in 4 hours; run two full timed practice exams.' }
    ]
  },
  questionTypes: {
    summary: 'The CPC exam is a 100-question multiple-choice exam in 4 hours, open book. The items are coding-decision-focused: a clinical documentation excerpt followed by the correct ICD-10-CM diagnosis code, CPT procedure code, HCPCS code, modifier, or the correct coding decision. The exam covers the full outpatient scope with the surgery sections weighted most heavily. Samples below are editor-written illustrations of the published exam content, not live exam items; they show the applied coding style of the real items.',
    types: [
      { name: 'CPT coding items', share: 'Largest block', detail: 'Procedure codes, modifiers and surgical coding.' },
      { name: 'ICD-10-CM coding items', share: 'Large block', detail: 'Diagnosis codes, guidelines and conventions.' },
      { name: 'E/M and HCPCS items', share: 'Meaningful block', detail: 'Evaluation-and-management levels and supplies.' }
    ],
    samples: [
      {
        prompt: 'A patient undergoes a repair of a 3.0 cm laceration on the forearm with layered closure. The appropriate CPT code family and modifier consideration would be based primarily on:',
        options: ['A. The repair type (intermediate or complex) and the anatomical site and length', 'B. The patient\'s age only', 'C. The number of sutures used', 'D. The time spent in the emergency department'],
        answer: 'A',
        explanation: 'Repair codes are selected by the repair type (simple, intermediate or complex), the anatomical site and the total wound length. Age, suture count and time are not the primary determinants of the repair code.'
      },
      {
        prompt: 'When the physician documents "probable pneumonia" without confirmation, the ICD-10-CM coding rule is to:',
        options: ['A. Code the probable condition as if confirmed at the encounter', 'B. Not code the condition', 'C. Code it only if hospitalised', 'D. Code it as a history of pneumonia'],
        answer: 'A',
        explanation: 'For outpatient coding, uncertain diagnoses such as "probable" or "rule out" are coded as if they were confirmed at that encounter. Not coding, hospitalisation-only coding or history coding each misapply the outpatient coding guideline.'
      },
      {
        prompt: 'A procedure is performed on both the left and right kidneys during the same operative session. The appropriate modifier to report the bilateral procedure is:',
        options: ['A. Modifier 50', 'B. Modifier 51', 'C. Modifier 59', 'D. Modifier 25'],
        answer: 'A',
        explanation: 'Modifier 50 reports bilateral procedures performed during the same session. Modifier 51 indicates multiple procedures, 59 a distinct procedural service, and 25 a separately identifiable E/M service.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam content, not live exam items.'
  },
  examDay: {
    summary: 'The CPC exam is a 100-question, 4-hour computer-based, open-book exam delivered at AAPC test sites or through online proctoring. Bring the required identification matching your registration and your current-year code books (ICD-10-CM, CPT and HCPCS); personal electronics and phones go in the locker or are prohibited. Arrive early for a test-site session or complete the environment check for online delivery. Pace at about 2.4 minutes per item and budget time for book navigation on the coding items. Your score is reported after the exam, with the official result following. If you do not pass, the AAPC retake policy defines the waiting period and the reduced retake fee. On a pass, the CPC is valid for one year of AAPC membership and is maintained with 36 continuing education units (CEUs) every two years (or the annual member update). The afterwards matters: keep the CEU log, because the AAPC audits renewals, and plan specialty certifications as the next step.',
    bring: ['Required identification matching your registration', 'Current-year ICD-10-CM, CPT and HCPCS code books', 'Exam confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials — the code books are the only reference', 'Personal bags beyond what the site allows'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the site or online-proctoring requirements and ID.' },
      { time: 'Exam', detail: '100 questions in 4 hours; pace ~2.4 minutes per item with book navigation.' },
      { time: 'After submit', detail: 'Score is reported; the official result follows.' },
      { time: 'Next', detail: 'Keep the CEU log for the two-year renewal cycle.' }
    ],
    rules: [
      'The exam is open book — only the current-year code books may be used',
      'No personal electronics in the testing room',
      'The credential renews with 36 CEUs every two years'
    ],
    afterwards: 'On a pass, your CPC is maintained with 36 CEUs every two years (or the annual update); log them, because the AAPC audits. On a fail, retake per the AAPC policy after additional coding practice.'
  }
};

export default data;
