const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Agile & project-delivery certifications desk',
    bio: 'This desk covers project-management and delivery credentials. Exam structure, fees and rules come from the certifying body\'s official pages (PeopleCert/AXELOS), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the AXELOS/PeopleCert PRINCE2 Foundation pages and BLS OOH Project Management Specialists (SOC 13-1082), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$100,750 median for project management specialists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "PRINCE2" — the PRINCE2 Foundation certification validates structured project-management methodology knowledge, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Project Management Specialists, SOC 13-1082, which had a May 2024 median wage of $100,750, with the lowest 10 percent under $59,450 and the highest 10 percent above $170,380. The fit is deliberate: PRINCE2 Foundation holders work as project managers, project support staff and delivery team members in organisations running PRINCE2 — the methodology most widely used in the UK and Commonwealth markets, and increasingly global — all inside the project management specialist occupation. BLS counted 774,900 project management specialist jobs in 2024 and projects 9 percent growth from 2024 to 2034, with about 111,600 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the certification\'s value is as a methodology signal that employers in PRINCE2-standard organisations use as a hiring filter; the US BLS series is the best available benchmark, though PRINCE2 adoption is strongest outside the US. Read the number as the market for the occupation the credential serves.',
    rows: [
      { label: 'Median annual wage, project management specialists', value: '$100,750', note: 'BLS OOH, SOC 13-1082, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $59,450', note: 'BLS OOH, SOC 13-1082, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $170,380', note: 'BLS OOH, SOC 13-1082, May 2024' },
      { label: 'Projected openings per year', value: '~111,600', note: 'BLS OOH, SOC 13-1082, 2024-2034' }
    ],
    growth: 'BLS projects 9 percent growth for project management specialists from 2024 to 2034, about 111,600 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Project Management Specialists', url: 'https://www.bls.gov/ooh/management/project-management-specialists.htm' }
  },
  passRate: {
    headline: 'PeopleCert/AXELOS publishes no pass rate — the Foundation exam is 60 questions in 60 minutes, passing 33 (55%), with results reported as pass/fail',
    summary: 'PeopleCert, which administers the PRINCE2 exams for AXELOS, does not publish cohort pass rates, and third-party estimates are not official data, so we do not treat them as authoritative. What PeopleCert does publish is the format and the passing standard: the PRINCE2 Foundation exam has 60 multiple-choice questions with a 60-minute time limit, and a passing score of 33 out of 60 — 55 percent. The exam is delivered by computer through PeopleCert\'s proctored platform or at an accredited test centre, and it is closed book. The exam content follows the PRINCE2 syllabus: the seven principles, the seven themes (business case, organisation, quality, plans, risk, change, progress) and the seven processes (starting up, directing, initiating, controlling, managing product delivery, managing a stage boundary, closing), plus the management products and the tailored application of the method. The absence of a published pass rate is not an absence of standards: the 55 percent line is a deliberately accessible pass mark for a Foundation-level exam, and the exam rewards recall and understanding of the method\'s structure. The practical reading: the Foundation is a knowledge exam, and candidates who study the syllabus and work practice questions pass at high rates; the Practitioner exam is the applied follow-on.',
    source: { label: 'AXELOS - PRINCE2 Foundation certification', url: 'https://www.axelos.com/certifications/project-management/prince2' },
    caveat: 'PeopleCert publishes the 55% passing standard but no cohort pass rate; the Foundation is a closed-book knowledge exam.'
  },
  studyPlan: {
    summary: 'The PRINCE2 Foundation exam is a 60-question, 60-minute closed-book exam with a 33-of-60 passing line, and its curriculum is the method itself: the seven principles, the seven themes, the seven processes, the management products and the tailoring guidance. A defensible plan runs 25 to 45 hours over two to three weeks. Week one: the principles and themes — the business case, organisation, quality, plans, risk, change and progress — learning what each theme governs and its management products, because the exam tests the structure precisely. Week two: the processes — starting up, directing, initiating, controlling, managing product delivery, managing a stage boundary and closing — learning which process does what and which management products it produces. Week three: practice-question drilling in volume, the official sample exams, and a timed run at the real 60-question, 60-minute format. The plan is structure-heavy because the Foundation rewards knowing the method\'s components and their relationships; candidates who read the manual once without drilling the product-to-process mapping lose the items that test those connections.',
    totalHours: '25-45 hours over 2-3 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Principles and themes', tasks: ['The seven principles and their meaning', 'The seven themes and what each governs', 'The management products per theme'], hours: 12 },
      { label: 'Week 2', focus: 'Processes', tasks: ['The seven processes in order', 'Which products each process produces', 'Roles and responsibilities mapping'], hours: 12 },
      { label: 'Week 3', focus: 'Drill and simulate', tasks: ['Practice-question drilling in volume', 'Official sample exams', 'One timed 60-question run'], hours: 10 }
    ],
    variants: [
      { label: 'Experienced project manager', detail: 'The method structure is familiar from practice; focus study on the exact terminology and product mapping.' },
      { label: 'New to PRINCE2', detail: 'Add a week reading the official manual before the plan; the method\'s vocabulary is specific.' }
    ]
  },
  prepStrategies: {
    summary: 'The PRINCE2 Foundation rewards precise knowledge of the method\'s structure, so the dominant strategy is learning the components as a connected system: which principle, theme and process interact, and which management products each produces, because the exam tests those relationships directly. Second, use the official syllabus and the AXELOS manual as the scope map, and the official sample exams as the item-style reference — they are the closest thing to the real exam and are free or included with registration. Third, drill the management products deliberately: the exam asks which product belongs to which theme or process, a common item type that rewards organised study. Fourth, take at least one timed practice run at the real 60-question, 60-minute format; the pace is tight at one minute per question. Finally, plan the path: the Foundation is the entry credential, and the Practitioner exam — the applied, scenario-based follow-on — is what employers in PRINCE2-standard organisations value for senior roles, so treat the Foundation as structured momentum.',
    items: [
      { title: 'Learn the components as a system', detail: 'Principles, themes, processes and products connect; the exam tests the map.' },
      { title: 'Use the official syllabus and samples', detail: 'The authoritative scope and the closest item style.' },
      { title: 'Drill the management products', detail: 'Which product belongs to which theme or process is a common item type.' },
      { title: 'Run one timed practice exam', detail: '60 questions in 60 minutes is a tight pace; rehearse it.' },
      { title: 'Plan the Practitioner step', detail: 'The Foundation is the entry; the Practitioner is the applied credential.' }
    ]
  },
  resourceComparison: {
    summary: 'PRINCE2 Foundation prep is inexpensive because the official materials are accessible. The AXELOS PRINCE2 manual ("Managing Successful Projects with PRINCE2") costs roughly $50-$70 and is the authoritative reference; the official syllabus and sample exams are free. Third-party training ranges from roughly $30 self-paced video courses to $1,500 classroom courses; many candidates use the manual plus a question bank ($30-$100). The exam fee is about $250-$400 depending on region and purchase path, and PeopleCert occasionally bundles exam plus training. A realistic total budget is $300 to $900 including the exam fee and materials. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official PRINCE2 manual', values: ['$50-$70', 'Printed or digital book', 'The authoritative reference'] },
      { label: 'Official syllabus + sample exams', values: ['Free', 'Official PDFs', 'The scope map and item style'] },
      { label: 'Self-paced video courses', values: ['$30-$200', 'Video courses and quizzes', 'Low-cost structured study'] },
      { label: 'Question banks', values: ['$30-$100', 'Online practice items', 'Drilling volume'] },
      { label: 'Foundation exam', values: ['~$250-$400', 'Proctored computer exam', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; exam fees vary by region and path; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common PRINCE2 Foundation mistake is reading the manual without drilling the structure: candidates who read once but never practise the product-to-process mapping miss the items that test the method\'s relationships. The fix is practice-question drilling from the start. The second mistake is confusing the seven processes — which process does what and which products it produces — a common failure pattern. Third, candidates mislearn the roles: who is responsible for which management product, which the exam tests precisely. Fourth, some candidates skip the timed practice run and misjudge the 60-questions-in-60-minutes pace. Finally, candidates treat the Foundation as the destination; the Practitioner exam is the applied credential employers value for senior roles, so plan the path.',
    items: [
      { mistake: 'Reading without drilling', fix: 'Practise the product-to-process mapping; the exam tests relationships.' },
      { mistake: 'Confusing the processes', fix: 'Learn which process does what and which products it produces.' },
      { mistake: 'Mislearning the roles', fix: 'Who owns which management product is tested precisely.' },
      { mistake: 'Skipping the timed run', fix: '60 questions in 60 minutes; rehearse the pace.' },
      { mistake: 'Stopping at Foundation', fix: 'The Practitioner is the applied credential; plan the path.' }
    ]
  },
  questionTypes: {
    summary: 'The PRINCE2 Foundation exam is a 60-question multiple-choice exam in 60 minutes, closed book. The items test the method\'s structure: the principles, themes, processes, management products and roles, with many items asking which component belongs where or what a component governs. The exam rewards precise recall of the method\'s vocabulary and relationships. Samples below are editor-written illustrations of the published syllabus, not live exam items; they show the structure-testing style of the real items.',
    types: [
      { name: 'Structure items', share: 'Largest block', detail: 'Principles, themes, processes and their relationships.' },
      { name: 'Management-product items', share: 'Large block', detail: 'Which product belongs to which theme or process.' },
      { name: 'Role items', share: 'Meaningful block', detail: 'Who is responsible for which product or activity.' }
    ],
    samples: [
      {
        prompt: 'Which PRINCE2 theme provides a mechanism to assess whether a project remains desirable, viable and achievable?',
        options: ['A. The business case theme', 'B. The organisation theme', 'C. The progress theme', 'D. The risk theme'],
        answer: 'A',
        explanation: 'The business case theme establishes and maintains the justification for the project — whether it remains desirable, viable and achievable. Organisation defines roles, progress monitors against plans, and risk manages uncertainty.'
      },
      {
        prompt: 'Which PRINCE2 process covers the activities of the project board in directing the project?',
        options: ['A. Directing a Project', 'B. Controlling a Stage', 'C. Managing Product Delivery', 'D. Closing a Project'],
        answer: 'A',
        explanation: 'Directing a Project is the process for the project board\'s direction — authorising initiation, stage plans and closure. Controlling a Stage and Managing Product Delivery are team-level processes, and Closing a Project is the final process.'
      },
      {
        prompt: 'The project manager\'s role in PRINCE2 includes:',
        options: ['A. Managing the project on a day-to-day basis within the constraints set by the project board', 'B. Approving the project mandate', 'C. Chairing the project board', 'D. Providing user requirements exclusively'],
        answer: 'A',
        explanation: 'The project manager runs the project day to day within the board\'s constraints. The project board owns approval and direction, the executive chairs the board, and the senior user represents user requirements.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published syllabus, not live exam items.'
  },
  examDay: {
    summary: 'The PRINCE2 Foundation exam is a 60-question, 60-minute closed-book computer exam through PeopleCert\'s proctored platform or at an accredited test centre. Confirm the delivery mode, bring the required identification matching your registration, and arrive early or complete the online environment check. Pace at one minute per item and flag uncertain items for review; the 33-of-60 passing line gives some margin, but the pace is tight. Your result is reported on completion, with the official certificate following. If you do not pass, the retake policy and fee apply. On a pass, the Foundation certification does not expire in the traditional sense (PeopleCert\'s digital credential has no mandatory renewal). The afterwards matters: add the credential to your profile and plan the Practitioner exam, the applied scenario-based credential that employers in PRINCE2-standard organisations value for senior roles.',
    bring: ['Required identification matching your registration', 'A quiet space and working webcam for online delivery', 'Your PeopleCert account login'],
    leave: ['Phone and other devices within the proctor\'s view', 'Notes and open browser tabs — the exam is closed book'],
    timeline: [
      { time: 'Before start', detail: 'Confirm the delivery mode and complete check-in or the environment test.' },
      { time: 'Exam', detail: '60 questions in 60 minutes; pace 1 minute per item, flag and review.' },
      { time: 'After submit', detail: 'Result is reported; the certificate follows on a pass.' },
      { time: 'Next', detail: 'Plan the Practitioner exam and add the credential to your profile.' }
    ],
    rules: [
      'The exam is closed book',
      '60 minutes for 60 questions; the clock does not pause',
      'A pass requires 33 of 60 (55%)'
    ],
    afterwards: 'On a pass, your Foundation credential is permanent; add it to your profile and plan the Practitioner exam. On a fail, retake per the policy after additional syllabus study.'
  }
};

export default data;
