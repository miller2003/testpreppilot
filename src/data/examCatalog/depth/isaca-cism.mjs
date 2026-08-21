const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers ISACA and other IT certifications. Exam structure, fees and rules come from the certifying body\'s official pages (ISACA), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against ISACA\'s CISM program pages and BLS OOH Computer and Information Systems Managers (SOC 11-3021), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$182,510 median for computer and information systems managers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "CISM" — the Certified Information Security Manager credential validates information-security management and governance skill, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Computer and Information Systems Managers, SOC 11-3021, which had a May 2024 median wage of $182,510, with the lowest 10 percent under $105,680 and the highest 10 percent above $276,480, with Information Security Analysts (SOC 15-1212, $124,910) as the technical-side benchmark. The fit is deliberate: CISM holders work as security managers, security directors and information-security leadership, and the credential is positioned for the management tier — so the management series is the primary benchmark. BLS counted 610,800 computer and information systems manager jobs in 2024 and projects a 15 percent increase from 2024 to 2034, much faster than the average for all occupations, with about 38,900 openings a year. The limitation to state plainly: the BLS median covers the whole management occupation at all levels, credentialed or not, and the CISM\'s value is as a recognised security-management signal that employers use for leadership roles. Read the number as the market for the management roles the credential serves.',
    rows: [
      { label: 'Median annual wage, computer and information systems managers', value: '$182,510', note: 'BLS OOH, SOC 11-3021, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $105,680', note: 'BLS OOH, SOC 11-3021, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $276,480', note: 'BLS OOH, SOC 11-3021, May 2024' },
      { label: 'Median, information security analysts (technical-side benchmark)', value: '$124,910', note: 'BLS OOH, SOC 15-1212, May 2024' }
    ],
    growth: 'BLS projects a 15 percent increase for computer and information systems managers from 2024 to 2034, about 38,900 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Computer and Information Systems Managers', url: 'https://www.bls.gov/ooh/management/computer-and-information-systems-managers.htm' }
  },
  passRate: {
    headline: 'ISACA publishes pass rates — the reported CISM pass rate is around 50% in recent published data',
    summary: 'ISACA publishes pass-rate information for its certification exams, and the reported CISM pass rate has historically clustered around 50 percent in recent published cycles; we present it as the body\'s own reporting, noting the figure varies by exam window and candidate pool. What ISACA also publishes is the format: the CISM exam has 150 multiple-choice questions with a 4-hour time limit, delivered by computer at ISACA-approved test centres or through remote proctoring, and the result is reported as pass/fail. The exam content follows the published CISM job practice areas: information security governance; information risk management and compliance; the information security program development and management; and the information security incident management. The practical reading: the published pass rate reflects a demanding management-level exam, and the strongest predictor of success is structured preparation — candidates who complete the review course, work the question database and meet the experience requirement (5 years of security work, including 3 years of management, with waivers) pass at higher rates than the overall cohort.',
    source: { label: 'ISACA - Certified Information Security Manager (CISM)', url: 'https://www.isaca.org/credentialing/cism' },
    caveat: 'ISACA publishes pass-rate data that varies by window; the figure above is the recent reported range, not a fixed number.'
  },
  studyPlan: {
    summary: 'The CISM exam is a 150-question, 4-hour exam built on the four job practice areas: information security governance, information risk management and compliance, the security program development and management, and incident management. A defensible plan runs 150 to 250 hours over 3 to 6 months, built around the ISACA review materials and the 5-year management-experience requirement. Months 1-2: the governance and risk domains — the governance frameworks, the strategy and the alignment with business, then the risk-management process, the risk treatment and the compliance. Months 3-4: the program and incident domains — the security program development, the operations and the metrics, then the incident management lifecycle. Month 5: the question database and the full timed practice exams at the real 150-question, 4-hour format. The plan is management-framed because the CISM tests the leadership view of security, not the technical depth; candidates who study like engineers fail the governance and risk items.',
    totalHours: '150-250 hours over 3-6 months (plus the 5-year experience requirement)',
    weeks: [
      { label: 'Months 1-2', focus: 'Governance and risk', tasks: ['Security governance and strategy', 'The risk management process and compliance', 'Business alignment and the frameworks'], hours: 70 },
      { label: 'Months 3-4', focus: 'Program and incident', tasks: ['Security program development and management', 'Program operations and metrics', 'Incident management lifecycle'], hours: 70 },
      { label: 'Month 5', focus: 'Database and mocks', tasks: ['The ISACA question database', 'Two full timed practice exams', 'Review weak domains'], hours: 45 }
    ],
    variants: [
      { label: 'Security manager in practice', detail: 'The management view is familiar from the role; focus study on the exam format and the risk material.' },
      { label: 'Technical analyst adding management', detail: 'Add 2-4 weeks of governance and risk-management fundamentals before the full plan.' }
    ]
  },
  prepStrategies: {
    summary: 'The CISM rewards the management view of security, so the dominant strategy is studying the four job practice areas with a governance lens: the exam tests how security is governed, how risk is managed, how the program is built and run, and how incidents are managed — not the technical depth. Second, master the governance domain first — the frameworks, the strategy and the business alignment — because it anchors the credential\'s identity. Third, use the ISACA QAE (Questions and Answers Database) as the primary practice resource; it is the closest thing to the real item style and includes the rationales that build the reasoning. Fourth, confirm the experience requirement early: the CISM requires 5 years of security work including 3 years of management (with waivers), and certification cannot proceed without it. Finally, take at least two full timed practice exams at the real 150-question, 4-hour format; the length and stamina are part of the test.',
    items: [
      { title: 'Study the management view', detail: 'Governance, risk, program and incident — not technical depth.' },
      { title: 'Master the governance domain', detail: 'Frameworks, strategy and business alignment anchor the credential.' },
      { title: 'Use the ISACA QAE', detail: 'The closest item style, with the rationales that build the reasoning.' },
      { title: 'Confirm the experience requirement', detail: '5 years of security work incl. 3 of management (with waivers).' },
      { title: 'Run two full timed mocks', detail: '150 questions in 4 hours; the stamina is part of the test.' }
    ]
  },
  resourceComparison: {
    summary: 'CISM prep is dominated by ISACA\'s official materials. The ISACA CISM Review Manual ($100-$150) and the QAE database (about $200-$250, or included in the review course) are the standard stack; the review course runs roughly $500-$2,500 depending on format. Third-party books ($40-$100) and question banks ($50-$200) add alternatives. Free resources include the job practice areas outline and ISACA\'s sample questions. A realistic total budget is $600 to $3,000 including the exam fee (about $575 for ISACA members, $760 for non-members). Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CISM Review Manual', values: ['$100-$150', 'Printed or digital book', 'The authoritative domain coverage'] },
      { label: 'ISACA QAE database', values: ['$200-$250', 'Online question database', 'The closest item style and rationales'] },
      { label: 'ISACA review course', values: ['$500-$2,500', 'Self-paced, virtual or in-person', 'Structured preparation'] },
      { label: 'Third-party books and banks', values: ['$40-$200', 'Books and practice items', 'Alternatives and extra volume'] },
      { label: 'CISM exam', values: ['~$575 member / ~$760 non-member', 'Computer-based exam', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; ISACA fees vary by membership; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common CISM mistake is studying like an engineer: candidates with a technical security background focus on the technical depth and fail the governance, risk and program items, which are the majority of the exam. The fix is a management-lens study plan. The second mistake is treating the four job practice areas as separate lists instead of a connected system — the exam tests how governance, risk, program and incident management work together. Third, candidates under-prepare the risk-management and compliance material, a distinct domain. Fourth, some candidates ignore the management-experience requirement until after passing and then wait years for certification; confirm it early. Finally, candidates who never run a full timed exam underestimate the 150-question, 4-hour stamina.',
    items: [
      { mistake: 'Studying like an engineer', fix: 'The exam tests the management view; study governance and risk.' },
      { mistake: 'Treating the domains as lists', fix: 'Learn how governance, risk, program and incident connect.' },
      { mistake: 'Under-preparing risk and compliance', fix: 'A distinct domain; cover the risk process and compliance.' },
      { mistake: 'Ignoring the experience requirement', fix: 'Confirm the 5-year requirement incl. 3 of management early.' },
      { mistake: 'Skipping full timed mocks', fix: '150 questions in 4 hours; run two full timed practice exams.' }
    ]
  },
  questionTypes: {
    summary: 'The CISM exam is a 150-question multiple-choice exam in 4 hours. The items span the four job practice areas with a management and governance concentration — many items present a security-management situation and ask for the correct leadership decision, framework application or program action. Samples below are editor-written illustrations of the published job practice areas, not live exam items; they show the management-decision style of the real items.',
    types: [
      { name: 'Governance items', share: 'Largest block', detail: 'Strategy, frameworks, alignment and the security governance.' },
      { name: 'Risk and compliance items', share: 'Large block', detail: 'The risk process, treatment and compliance.' },
      { name: 'Program and incident items', share: 'Large block', detail: 'Program development, metrics and incident management.' }
    ],
    samples: [
      {
        prompt: 'A new security program must be aligned with the business strategy. The most appropriate first step for the security manager is to:',
        options: ['A. Understand the business objectives and translate them into the security strategy and roadmap', 'B. Deploy tools immediately', 'C. Hire more analysts', 'D. Skip the alignment'],
        answer: 'A',
        explanation: 'Governance starts with business alignment — understanding the objectives and translating them into the security strategy. Tool deployment, hiring or skipping alignment each bypass the governance first step.'
      },
      {
        prompt: 'After identifying a risk, the security manager should next:',
        options: ['A. Analyse and evaluate the risk, then select a treatment option aligned with the risk appetite', 'B. Accept every risk', 'C. Transfer every risk', 'D. Ignore the risk'],
        answer: 'A',
        explanation: 'The risk-management process analyses and evaluates the risk, then selects a treatment (accept, mitigate, transfer or avoid) aligned with the risk appetite — the structured step. Uniform acceptance, transfer or ignoring each fail the process.'
      },
      {
        prompt: 'An incident response plan is most effective when it:',
        options: ['A. Is tested regularly and integrated with the business continuity and communication plans', 'B. Is written once and never reviewed', 'C. Exists only in the security team\'s head', 'D. Is disconnected from the business'],
        answer: 'A',
        explanation: 'Effective incident management tests the plan regularly and integrates it with business continuity and communications — the management-level practice. Static, undocumented or disconnected plans each fail the incident-management domain.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published job practice areas, not live exam items.'
  },
  examDay: {
    summary: 'The CISM exam is a 150-question, 4-hour computer-based exam at an ISACA-approved test centre or through remote proctoring. Bring the required identification matching your registration and your exam confirmation; personal items go in the locker. Arrive early — late arrivals may forfeit the appointment and fee. Pace at about 1.6 minutes per item, flag uncertain items for review, and budget time for the reading-heavy scenario items. Your result is reported as pass/fail after the exam, with the official report following. If you do not pass, the retake policy and fee apply. On a pass, the CISM is valid for three years and is renewed by earning 120 continuing professional education (CPE) hours every three years. The afterwards matters: log your CPEs as you earn them, because ISACA audits renewals, and submit the certification application if you have not already completed it.',
    bring: ['Required identification matching your registration', 'Exam confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the appointment, ID requirements and delivery mode.' },
      { time: 'Exam', detail: '150 questions in 4 hours; pace ~1.6 minutes per item, flag and review.' },
      { time: 'After submit', detail: 'Pass/fail is reported; the official report follows.' },
      { time: 'Next', detail: 'Complete the certification application and start the CPE log.' }
    ],
    rules: [
      'The exam is computer-based and timed',
      '4 hours for 150 questions; the clock does not pause',
      'The certification renews every 3 years with 120 CPEs'
    ],
    afterwards: 'On a pass, complete the certification application and log 120 CPEs every three years. On a fail, retake per the ISACA policy after additional domain study.'
  }
};

export default data;
