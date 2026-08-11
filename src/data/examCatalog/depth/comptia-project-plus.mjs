const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers CompTIA and other IT certifications. Exam structure, fees and rules come from the vendor certification pages, which are revised and sometimes retired on fixed schedules; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against CompTIA\'s Project+ certification page (PK0-005) and BLS OOH Project Management Specialists (SOC 13-1082), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$100,750 median for project management specialists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "Project+" — the CompTIA Project+ certification validates project-management knowledge for IT professionals, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Project Management Specialists, SOC 13-1082, which had a May 2024 median wage of $100,750, with the lowest 10 percent under $59,450 and the highest 10 percent above $170,380. The fit must be read with an honest caveat: Project+ is an entry-level, vendor-neutral project-management certification often earned by IT professionals, project coordinators and team members who take on project duties, so the realistic benchmark for a new holder sits below the project-manager median, climbing with responsibility. BLS counted 774,900 project management specialist jobs in 2024 and projects 9 percent growth from 2024 to 2034, with about 111,600 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the certification\'s value is as a foundational project-management signal that employers use for coordinator and junior-manager roles. Read the number as the market for the occupation the credential serves.',
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
    headline: 'CompTIA publishes no pass rate — the Project+ exam (PK0-005) has up to 90 questions in 90 minutes, passing 710 of 900',
    summary: 'CompTIA does not publish cohort pass rates for its certification exams, and third-party surveys are not official data, so we do not treat them as authoritative. What CompTIA does publish is the format and the passing standard: the Project+ exam (PK0-005) has a maximum of 90 questions with a 90-minute time limit, and a passing score of 710 on the 100-900 scale. The exam is delivered at Pearson VUE centres or through online proctoring, and the certification is valid for three years, renewable through CompTIA\'s continuing education program. The exam content follows the published exam objectives: project management concepts; project life cycle phases; tools and documentation; and the basics of IT, governance and compliance in projects. The absence of a published pass rate is not an absence of standards: the 710 line on the 100-900 scale is a moderate bar for an entry-level project-management exam, and the exam rewards applied knowledge of the project lifecycle and the tools. The practical reading: target well above 710 on practice — 80 percent-plus — and use CompTIA\'s official exam objectives and CertMaster practice materials, the closest thing to the real item style.',
    source: { label: 'CompTIA - Project+ certification', url: 'https://www.comptia.org/certifications/project' },
    caveat: 'CompTIA publishes the passing score and format but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The Project+ exam (PK0-005) has up to 90 questions in 90 minutes with a 710/900 passing score, built on the published exam objectives: project management concepts, the project life cycle phases, the tools and documentation, and the basics of IT, governance and compliance. A defensible plan runs 60 to 90 hours over 5 to 7 weeks. Weeks 1-2: the project-management concepts — the project vs operations, the roles and the constraints (scope, schedule, cost, quality), and the project management processes. Weeks 3-4: the life cycle — initiation, planning, execution, monitoring and controlling, and closing — learning what happens in each phase and the key documents. Weeks 5-6: the tools and documentation — the work breakdown structure, the schedules, the risk register, the change control and the communication plan. Week 7: the IT, governance and compliance basics, then question-bank drilling and a full timed practice exam at the real format. The plan is lifecycle-heavy because the exam rewards knowing the phases and their outputs; candidates who study general PM theory instead of the specific lifecycle structure miss the exam\'s core.',
    totalHours: '60-90 hours over 5-7 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Project concepts', tasks: ['Projects vs operations and the roles', 'The constraints and processes', 'Stakeholder and communication basics'], hours: 20 },
      { label: 'Weeks 3-4', focus: 'Life cycle phases', tasks: ['Initiation and planning', 'Execution and monitoring/controlling', 'Closing and the phase outputs'], hours: 25 },
      { label: 'Weeks 5-6', focus: 'Tools and documentation', tasks: ['WBS, schedules and estimates', 'Risk register and change control', 'Communication and documentation'], hours: 25 },
      { label: 'Week 7', focus: 'IT, governance, drill', tasks: ['IT and compliance basics', 'Question-bank drilling', 'One full timed practice exam'], hours: 15 }
    ],
    variants: [
      { label: 'Working with projects', detail: 'The concepts are familiar from practice; focus study on the exact lifecycle structure and the exam format.' },
      { label: 'New to project management', detail: 'Add 1-2 weeks of project-management fundamentals before the full plan.' }
    ]
  },
  prepStrategies: {
    summary: 'The Project+ exam rewards applied knowledge of the project lifecycle, so the dominant strategy is learning the phases and their outputs as a sequence: what happens in initiation, planning, execution, monitoring and closing, and which documents each phase produces, because the exam tests the structure directly. Second, use the published exam objectives as the scope map and audit every study resource against them; CompTIA publishes them for free. Third, master the tools and documentation — the WBS, the schedule, the risk register and the change-control process — a distinct and heavily weighted area. Fourth, use CompTIA\'s official CertMaster practice materials, the closest thing to the real item style, and hold yourself to 80 percent-plus on practice because the 710 line leaves no margin. Finally, take at least one full timed practice exam; 90 questions in 90 minutes is exactly one minute per item, and the pacing matters.',
    items: [
      { title: 'Learn the lifecycle sequence', detail: 'What each phase does and which documents it produces is the exam\'s core.' },
      { title: 'Audit against the objectives', detail: 'The free official objectives are the scope map.' },
      { title: 'Master the tools and documentation', detail: 'WBS, schedules, risk and change control are a weighted area.' },
      { title: 'Hold to 80%+ on practice', detail: 'The 710/900 line leaves no margin.' },
      { title: 'Run one timed practice exam', detail: '90 questions in 90 minutes; the pacing matters.' }
    ]
  },
  resourceComparison: {
    summary: 'Project+ prep spans official CompTIA resources and third-party courses. CompTIA\'s own products — the exam objectives (free), CertMaster Learn and CertMaster Practice — are the authoritative source, typically $200-$500 for the bundles. Third-party providers sell Project+ courses and question banks from roughly $50 to $400; the market is smaller than for A+ or Security+, so prices and quality vary more. Free resources include the objectives and CompTIA sample questions. A realistic total budget is $300 to $800 including the exam fee (about $358). Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CompTIA exam objectives', values: ['Free', 'Official PDF', 'The authoritative scope; audit every resource against it'] },
      { label: 'CertMaster Learn + Practice', values: ['$200-$500', 'Online learning + practice', 'The official learning path'] },
      { label: 'Third-party courses', values: ['$50-$400', 'Video courses and question banks', 'Structured walkthrough of the objectives'] },
      { label: 'Free sample questions', values: ['$0', 'CompTIA practice items', 'Orientation before committing'] },
      { label: 'Project+ exam', values: ['~$358', 'Computer-based exam', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the PK0-005 exam fee is about $358; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common Project+ mistake is studying general project-management theory instead of the exam\'s lifecycle structure: candidates who know PM concepts but not which document each phase produces miss the structural items, which dominate the exam. The fix is lifecycle-first study. The second mistake is under-preparing the tools and documentation area, a distinct weighted block. Third, candidates ignore the IT, governance and compliance objectives, treating them as minor when they are a tested area. Fourth, some candidates misjudge the pace — 90 questions in 90 minutes is exactly a minute per item, so a timed simulation is essential. Finally, candidates who do not audit their study materials against the official objectives risk studying the wrong scope.',
    items: [
      { mistake: 'Studying general theory', fix: 'Learn the lifecycle phases and their document outputs.' },
      { mistake: 'Under-preparing tools and documentation', fix: 'WBS, schedules, risk and change control are a weighted area.' },
      { mistake: 'Skipping IT and governance', fix: 'A tested objective area; cover it.' },
      { mistake: 'Misjudging the pace', fix: '90 questions in 90 minutes; run a timed simulation.' },
      { mistake: 'Studying the wrong scope', fix: 'Audit every resource against the official objectives.' }
    ]
  },
  questionTypes: {
    summary: 'The Project+ exam has up to 90 questions in 90 minutes, with multiple-choice, drag-and-drop and performance-based items. The items test the published objectives: project-management concepts, the life cycle phases, the tools and documentation, and IT, governance and compliance — with many items asking which document, tool or process fits a described project situation. Samples below are editor-written illustrations of the published objectives, not live exam items; they show the lifecycle-structure style of the real items.',
    types: [
      { name: 'Lifecycle items', share: 'Largest block', detail: 'Which phase, process or document fits a described situation.' },
      { name: 'Tools and documentation items', share: 'Large block', detail: 'WBS, schedules, risk and change-control questions.' },
      { name: 'IT and governance items', share: 'Meaningful block', detail: 'Compliance and IT-project basics.' }
    ],
    samples: [
      {
        prompt: 'During which project phase is the project charter typically created and the project formally authorised?',
        options: ['A. Initiation', 'B. Planning', 'C. Execution', 'D. Closing'],
        answer: 'A',
        explanation: 'The project charter is created in initiation, which formally authorises the project. Planning develops the detailed plans, execution performs the work, and closing finalises the project.'
      },
      {
        prompt: 'A team member proposes a change to the project scope. The correct process is to:',
        options: ['A. Submit the change through the change-control process for evaluation', 'B. Implement the change immediately', 'C. Ignore the request', 'D. Ask the team to decide informally'],
        answer: 'A',
        explanation: 'Scope changes go through the change-control process — evaluation of impact, approval and documentation. Immediate implementation, ignoring or informal decisions each bypass the control the exam rewards.'
      },
      {
        prompt: 'Which document breaks the project work into manageable components for estimating and tracking?',
        options: ['A. The work breakdown structure (WBS)', 'B. The project charter', 'C. The risk register', 'D. The communication plan'],
        answer: 'A',
        explanation: 'The WBS decomposes the work into manageable components for estimating and tracking. The charter authorises the project, the risk register tracks risks, and the communication plan governs communications.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published objectives, not live exam items.'
  },
  examDay: {
    summary: 'The Project+ exam is a 90-question, 90-minute computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at exactly one minute per item, flag uncertain items for review, and budget extra time for the performance-based items. You receive your score on screen immediately, with the official result following; CompTIA reports your scaled score against the 710 line. If you fail, CompTIA allows retakes after a waiting period. On a pass, the certification is valid for three years, renewable through continuing education units (CEUs) or by retaking. The afterwards matters: log your CEUs as you earn them, because CompTIA audits renewals, and record the expiration date.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '90 questions in 90 minutes; pace 1 minute per item, flag and review.' },
      { time: 'After submit', detail: 'Scaled score appears on screen against the 710/900 passing line.' },
      { time: 'Next', detail: 'Record the 3-year validity date and start logging CEUs.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '90 minutes for up to 90 questions; the clock does not pause',
      'The certification is valid 3 years, renewed with CEUs or a retake'
    ],
    afterwards: 'On a pass, your Project+ is valid for three years; earn CEUs (or retake) to renew. On a fail, retake after additional objectives-focused study.'
  }
};

export default data;
