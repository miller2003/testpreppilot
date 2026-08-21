const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Human resources & people-operations certifications desk',
    bio: 'This desk covers HR certification programs. Exam structure, fees and rules come from the certifying body\'s official pages (HRCI, SHRM), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against HRCI\'s PHR program pages and certification handbook, and BLS OOH Human Resources Specialists (SOC 13-1071), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$71,320 median for human resources specialists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "PHR" — the Professional in Human Resources credential certifies that you know the technical, operational side of HR, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Human Resources Specialists, SOC 13-1071, which had a May 2024 median wage of $71,320, with the lowest 10 percent under $43,380 and the highest 10 percent above $119,380. The fit is deliberate: PHR holders work as HR generalists, recruiters, benefits specialists, compensation analysts and employee-relations staff — the operational HR roles this credential targets. BLS counted 690,900 human resources specialist jobs in 2024 and projects 7 percent growth from 2024 to 2034, faster than the average for all occupations, with about 64,900 openings a year. The limitation to state plainly: the BLS median covers the whole occupation, credentialed or not, and the PHR\'s value is as a competency and compliance signal that employers use in hiring and promotion; HR jobs that require or prefer the PHR tend to sit at or above the occupation median, but that is a market observation, not a BLS figure. Read the number as the benchmark for operational HR work, and note that the senior HR management track is reported separately by BLS at a higher median.',
    rows: [
      { label: 'Median annual wage, human resources specialists', value: '$71,320', note: 'BLS OOH, SOC 13-1071, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $43,380', note: 'BLS OOH, SOC 13-1071, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $119,380', note: 'BLS OOH, SOC 13-1071, May 2024' },
      { label: 'Median, human resources managers (senior track)', value: '$141,690', note: 'BLS OOH, SOC 11-3121, May 2024' }
    ],
    growth: 'BLS projects 7 percent growth for human resources specialists from 2024 to 2034, about 64,900 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Human Resources Specialists', url: 'https://www.bls.gov/ooh/business-and-financial/human-resources-specialists.htm' }
  },
  passRate: {
    headline: 'HRCI reports pass rates — roughly 72% for the PHR in recent published data — with the caveat that they combine first-time and repeat takers',
    summary: 'HRCI publishes pass-rate figures in its annual reports, and the most recent published PHR figure is roughly 72 percent, with the caveat that it combines first-time and repeat candidates rather than isolating first-time test takers. We present it as the regulator\'s own reporting, with that caveat stated. What HRCI also publishes is the format: the PHR exam contains 115 questions — 90 scored and 25 unscored pretest items — with a 2-hour time limit (plus about 30 minutes of administrative time), delivered by computer at Pearson VUE centres or through remote proctoring. Scoring is scaled on a 200-700 scale with a passing score of 500, set using the modified Angoff method, a standard industry approach to cut-score setting. The exam content follows the HRCI exam content outline, organised around functional areas including Business Management, Talent Planning and Acquisition, Learning and Development, Total Rewards, Employee and Labor Relations, and Employee Engagement, with the legal/compliance emphasis that distinguishes the PHR from competency-style alternatives. The practical reading: the 72 percent published rate is informative but not a planning tool; what drives outcomes is coverage of the functional areas and the compliance depth the PHR is known for.',
    source: { label: 'HRCI - Professional in Human Resources (PHR) program', url: 'https://www.hrci.org/our-programs/our-certifications/phr' },
    caveat: 'HRCI\'s published pass rates combine first-time and repeat takers; treat the figure as directional reporting rather than a first-attempt probability.'
  },
  studyPlan: {
    summary: 'The PHR is a 2-hour, 115-question exam (90 scored) with a scaled passing score of 500, and its curriculum is HRCI\'s functional-area outline: Business Management, Talent Planning and Acquisition, Learning and Development, Total Rewards, Employee and Labor Relations, and Employee Engagement, with heavy emphasis on U.S. employment law and operational compliance. A defensible plan runs 80 to 120 hours over 8 to 12 weeks. Weeks 1-3 build the framework: work each functional area through a study guide, and build a compliance timeline of the major federal laws (FLSA, FMLA, Title VII, ADA, ADEA, COBRA, HIPAA, ERISA) with their key thresholds. Weeks 4-7 shift to application: work practice questions in volume by functional area, and drill the law-heavy areas — Employee and Labor Relations is historically the largest block — until the rules are reflexive. Weeks 8-10 add timed practice exams at the real format, at least two full simulations, reviewing every miss against the outline. The final two weeks are targeted re-study of weak areas plus a final mock. Because the exam tests the law in effect at testing, use current-year materials and confirm the outline version at registration.',
    totalHours: '80-120 hours over 8-12 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Functional-area framework', tasks: ['Work all six functional areas from the HRCI outline', 'Build a federal employment-law timeline with thresholds', 'Take notes organised by functional area'], hours: 35 },
      { label: 'Weeks 4-7', focus: 'Volume practice by area', tasks: ['Work practice questions per functional area', 'Drill Employee and Labor Relations and Total Rewards', 'Fill gaps surfaced by practice'], hours: 40 },
      { label: 'Weeks 8-10', focus: 'Timed simulations', tasks: ['Two full timed practice exams at the real format', 'Review every miss against the outline', 'Re-study weak functional areas'], hours: 30 },
      { label: 'Weeks 11-12', focus: 'Final polish', tasks: ['One final full mock', 'Final pass over the law timeline and thresholds', 'Schedule the exam'], hours: 15 }
    ],
    variants: [
      { label: 'Experienced HR professional', detail: 'Compress the framework phase; spend extra time on law-heavy practice volume.' },
      { label: 'Meeting eligibility via degree only', detail: 'Add an employment-law primer; the compliance depth rewards it.' }
    ]
  },
  prepStrategies: {
    summary: 'The PHR is a compliance-heavy, recall-oriented exam, so the dominant strategy is systematic coverage of the functional areas with heavy drilling of the employment-law material, which the exam rewards with precise-threshold questions — dollar amounts, time limits, coverage rules and penalty provisions. Second, build a law timeline: most candidates who fail do so on the legal items, not the conceptual ones, and the fix is organised memorisation of the federal statutes with their thresholds. Third, use current materials: the exam tests the law in effect at testing, and a study guide from a prior year will answer questions wrong. Fourth, take at least two full timed simulations, because the 2-hour window for 90 scored items is tight — about 80 seconds per item — and the pretest items must be answered at the same pace. Fifth, use the official HRCI resources: the exam content outline is free and is the authoritative scope, and HRCI\'s own practice exams are the closest thing to the real item style. Finally, do not treat the 25 pretest questions as identifiable — they are distributed randomly, so answer all 115 as if scored.',
    items: [
      { title: 'Drill the law thresholds', detail: 'The exam rewards precise legal facts — amounts, time limits, coverage rules; build a timeline.' },
      { title: 'Cover all six functional areas', detail: 'Employee and Labor Relations is the largest block, but every area appears.' },
      { title: 'Use current-year materials', detail: 'The exam tests the law in effect at testing; old guides answer wrong.' },
      { title: 'Run two timed simulations', detail: '90 scored items in 2 hours; pace is part of the test.' },
      { title: 'Use the official outline and practice exams', detail: 'Free, authoritative scope, and the closest item style.' }
    ]
  },
  resourceComparison: {
    summary: 'PHR prep splits between official HRCI resources and third-party providers. The HRCI exam content outline is free and authoritative; HRCI also sells practice exams and a digital study bundle. The dominant third-party options are the major HR prep companies (such as SHRM\'s competitors in HR exam prep and independent trainers), selling courses, books and question banks from roughly $100 for a bank to several hundred for a full course, and the well-known HR certification study guides in book form. Because the PHR is compliance-heavy and recall-oriented, a book-plus-question-bank combination often matches a video course for outcomes at lower cost. Free resources include the outline, HRCI sample questions, and HR-community study groups. A realistic total budget is $300 to $1,500 including the exam fee ($395) and the application fee ($100, nonrefundable). Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'HRCI exam content outline', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'HRCI practice exams', values: ['$50-$150', 'Online practice items', 'The closest official item style'] },
      { label: 'Major prep provider courses', values: ['$300-$900', 'Live or self-paced courses + materials', 'Structured learners who want instruction'] },
      { label: 'Study guide books', values: ['$50-$150', 'Printed or digital book', 'Self-directed coverage of the outline'] },
      { label: 'Question banks', values: ['$100-$300', 'Online practice items with explanations', 'Volume drilling between study blocks'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the PHR exam fee is $395 plus a $100 application fee; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common PHR mistake is under-preparing the legal material: candidates who study concepts and skip the law thresholds find the exam\'s compliance items — dollar figures, time limits, coverage rules — impossible to guess. The fix is a law timeline drilled to reflex. The second mistake is using outdated materials: the exam tests the law in effect at testing, and prior-year guides answer current questions wrong. Third, candidates waste effort trying to identify the 25 pretest questions; they are indistinguishable, so answer all 115 as scored. Fourth, many candidates skip full timed simulations and then misjudge the pace — 90 scored items in 2 hours is about 80 seconds per item, and slow readers run out of time on the law blocks. Fifth, some candidates treat the PHR like the competency-style alternatives and study judgement scenarios instead of the operational compliance content the PHR actually tests. Finally, under-budgeting the application: the $100 application fee is nonrefundable, and late or incomplete applications cause avoidable delays — start the application early.',
    items: [
      { mistake: 'Under-preparing employment law', fix: 'Build and drill a law timeline with thresholds; compliance items dominate.' },
      { mistake: 'Using prior-year materials', fix: 'The exam tests the law in effect at testing; confirm current-year content.' },
      { mistake: 'Trying to spot pretest items', fix: '25 of 115 are unscored but indistinguishable; answer all as scored.' },
      { mistake: 'Skipping timed simulations', fix: '90 scored items in 2 hours; run two full simulations.' },
      { mistake: 'Studying judgement instead of compliance', fix: 'The PHR is operational and legal; cover the outline\'s compliance depth.' }
    ]
  },
  questionTypes: {
    summary: 'The PHR is a multiple-choice exam with two dominant item styles: knowledge items that test definitions, requirements and legal rules at a precise level — thresholds, time limits, coverage and penalties — and scenario items that describe an HR situation and ask for the correct operational action. The exam emphasises U.S. employment law and day-to-day HR operations, so a large share of items are compliance-flavoured: which law applies, what the requirement is, what the correct process is. A minority of items test business management concepts such as budgeting and organizational structure. Samples below are editor-written illustrations of the published HRCI outline, not live exam items; they show the precision and compliance emphasis of the real items.',
    types: [
      { name: 'Knowledge / compliance items', share: 'Majority', detail: 'Legal requirements, thresholds, definitions and operational rules.' },
      { name: 'Scenario items', share: 'Large minority', detail: 'HR situations with the correct operational response.' },
      { name: 'Business management items', share: 'Minority', detail: 'Budgeting, structure and workforce-planning concepts.' }
    ],
    samples: [
      {
        prompt: 'Under the FLSA, which of the following is generally required for non-exempt employees?',
        options: ['A. Overtime pay at one and one-half times the regular rate for hours worked over 40 in a workweek', 'B. Compensatory time in lieu of overtime in the private sector', 'C. A written employment contract', 'D. Rest breaks of at least 30 minutes every four hours'],
        answer: 'A',
        explanation: 'The FLSA requires overtime pay at one and one-half times the regular rate for hours over 40 in a workweek for non-exempt employees. Comp time in lieu of overtime is generally not permitted in the private sector, and the other options misstate FLSA requirements.'
      },
      {
        prompt: 'A company with 55 employees receives a request for leave under the FMLA. The employee has worked there for nine months and 1,200 hours. Which statement is correct?',
        options: ['A. The employee is eligible; the company is covered', 'B. The employee is not eligible because they have not worked 12 months', 'C. The company is not covered because it has fewer than 50 employees', 'D. Eligibility cannot be determined from these facts'],
        answer: 'B',
        explanation: 'FMLA eligibility requires 12 months of employment and 1,250 hours in the preceding 12 months; a nine-month employee is not yet eligible. The 50-employee threshold applies to coverage, not eligibility, and the facts are sufficient to answer.'
      },
      {
        prompt: 'An HR professional is asked to reduce the risk of discrimination claims in a reduction in force. The best practice is to:',
        options: ['A. Base selection on documented, job-related criteria applied consistently', 'B. Ask managers to choose the lowest performers informally', 'C. Select the most recently hired employees regardless of performance', 'D. Offer a severance without any documentation'],
        answer: 'A',
        explanation: 'A defensible reduction in force uses documented, job-related and consistently applied selection criteria, minimising disparate-impact risk. Informal manager choice, last-in-first-out without business justification, and undocumented severance all increase legal risk.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published HRCI outline, not live exam items.'
  },
  examDay: {
    summary: 'The PHR is a computer-based exam at a Pearson VUE centre or through remote proctoring, with 115 questions (90 scored) and a 2-hour testing window plus roughly 30 minutes of administrative time. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at about 80 seconds per scored item, flag uncertain items for review, and answer the 25 pretest items at the same pace — they are indistinguishable. You receive your score immediately for computer-based delivery (scaled 200-700, passing 500), with official results following. If you fail, you may retake after the HRCI retake rules; HRCI allows retakes within a year at a reduced rate in some cases. On a pass, the credential is valid for three years and requires 60 recertification credits (including a minimum in business management and HR law) or a retake to renew. The afterwards matters: start logging recertification credits as you earn them, because HRCI audits renewals.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '115 questions in 2 hours; pace ~80 seconds per scored item, flag and review.' },
      { time: 'After submit', detail: 'Scaled score appears on screen; official results follow.' },
      { time: 'Next', detail: 'Log your recertification credits as you earn them over the three-year cycle.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '2 hours for 115 questions; the clock does not pause',
      '25 of 115 questions are pretest items and do not count'
    ],
    afterwards: 'On a pass, your PHR is valid for three years; earn 60 recertification credits (or retake) to renew. On a fail, retake per HRCI rules after additional outline-focused study.'
  }
};

export default data;
