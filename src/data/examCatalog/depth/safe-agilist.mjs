const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Agile & project-delivery certifications desk',
    bio: 'This desk covers Scrum, SAFe and agile delivery credentials. Exam structure, fees and rules come from the certifying body\'s official pages (Scaled Agile), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against Scaled Agile\'s SAFe Agilist (SA) certification pages and BLS OOH Project Management Specialists (SOC 13-1082), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$100,750 median for project management specialists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "SAFe Agilist" — the SA credential certifies that you understand the Scaled Agile Framework at the enterprise level, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Project Management Specialists, SOC 13-1082, which had a May 2024 median wage of $100,750, with the lowest 10 percent under $59,450 and the highest 10 percent above $170,380. The fit is deliberate: SAFe Agilists work as agile leaders, program managers, portfolio stakeholders and transformation leads in organisations running SAFe — the framework most commonly used by large enterprises scaling agile — and BLS counted 774,900 project management specialist jobs in 2024, projecting 9 percent growth from 2024 to 2034 with about 111,600 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the certification\'s value is as a leadership signal in SAFe environments, where the framework literacy it certifies is a hiring filter for program and transformation roles. Read the number as the market for the delivery-leadership occupation the credential serves.',
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
    headline: 'Scaled Agile publishes the passing standard — 73% (33 of 45) — and no cohort pass rate',
    summary: 'Scaled Agile does not publish cohort pass rates for the SAFe Agilist exam, and third-party estimates are not official data, so we do not treat them as authoritative. What Scaled Agile does publish is the format and the passing standard: the SA exam has 45 multiple-choice questions with a 90-minute time limit, and a passing score of 73 percent — at least 33 correct answers. The exam is delivered online through Scaled Agile\'s proctored platform, and the exam fee is about $100 (for most candidates the fee is included in the Leading SAFe course, which is the standard path because the certification requires completing the course first). The exam content follows the published learning objectives: the SAFe principles, the business agility value stream, the essential SAFe configuration (the ART, PI Planning, the program roles), and the leadership practices for scaling agile across the enterprise. The absence of a published pass rate is not an absence of standards: the 73 percent line is a meaningful bar, and the exam rewards understanding the framework\'s structure at the leadership level — how the value streams, trains and portfolios connect. The practical reading: attend the course, study the exam guide, and drill the SAFe-structure material, because candidates who know team-level Scrum but not the portfolio layer routinely under-prepare the enterprise items.',
    source: { label: 'Scaled Agile - SAFe Agilist (SA) certification', url: 'https://scaledagile.com/certification/sa-safe-agilist/' },
    caveat: 'Scaled Agile publishes the 73% cut score but no cohort pass rate; the exam requires completing the Leading SAFe course in the standard path.'
  },
  studyPlan: {
    summary: 'The SAFe Agilist exam is a 45-question, 90-minute exam with a 73 percent passing line, and the standard path requires completing the two-day Leading SAFe course, which covers the framework: the SAFe principles, the business-agility value stream, the essential SAFe configuration and the leadership practices for enterprise scaling. A defensible plan runs 15 to 30 hours of exam-focused study after the course, over one to two weeks. Days one to three: review the course materials and the SA exam guide, and summarise the four SAFe values, the ten principles and the essential configuration (value streams, the ART, PI Planning, and the roles of RTE, Product Management and System Architect). Days four to six: study the enterprise layer — the portfolio, program and solution levels, the Lean budget and the leadership practices — because the exam tests the framework beyond team-level Scrum, and work the sample questions. Day seven: take a timed practice exam at the real 45-question, 90-minute format, then sit the real exam. The plan is short because the course carries the learning; the exam study is about consolidating the enterprise vocabulary and the exam style.',
    totalHours: '15-30 hours over 1-2 weeks (after the two-day course)',
    weeks: [
      { label: 'Days 1-3', focus: 'Course consolidation', tasks: ['Review the course materials and exam guide', 'Summarise the values, principles and essential configuration', 'Map the value streams, trains and portfolio'], hours: 10 },
      { label: 'Days 4-6', focus: 'Enterprise layer and drilling', tasks: ['Portfolio, program and solution levels', 'Lean budgets and leadership practices', 'Work the sample questions'], hours: 12 },
      { label: 'Day 7', focus: 'Practice and sit', tasks: ['One timed 45-question, 90-minute practice exam', 'Review weak objectives', 'Sit the real exam'], hours: 6 }
    ],
    variants: [
      { label: 'SAFe Scrum Master already earned', detail: 'The essential configuration is familiar; focus study on the portfolio and leadership layer.' },
      { label: 'New to SAFe', detail: 'Spend extra time on the course and the enterprise-structure vocabulary before drilling.' }
    ]
  },
  prepStrategies: {
    summary: 'The SAFe Agilist exam rewards framework literacy at the enterprise level, so the dominant strategy is mastering the SAFe structure deliberately: the exam tests how value streams, Agile Release Trains, the portfolio and the roles connect, and candidates with only team-level agile experience routinely under-prepare the enterprise layer. Second, attend and engage with the Leading SAFe course, because it is both the eligibility path and the source of the framework vocabulary the exam uses. Third, use the SA exam guide and sample questions as the scope map and item-style reference; Scaled Agile publishes them, and the exam is built from the course and guide content. Fourth, learn the business-agility framing — how SAFe connects strategy to execution through value streams and Lean budgets — because the exam tests the leadership perspective that distinguishes the Agilist from the team-level credentials. Finally, take at least one timed practice exam at the real 45-question, 90-minute format; the 73 percent line leaves room for review but not for rushing.',
    items: [
      { title: 'Master the framework structure', detail: 'Value streams, trains, portfolio and roles must connect without hesitation.' },
      { title: 'Engage with the course', detail: 'It is the eligibility path and the vocabulary source.' },
      { title: 'Use the exam guide and samples', detail: 'The published guide is the scope map and item-style reference.' },
      { title: 'Learn the business-agility framing', detail: 'Strategy-to-execution through value streams is the Agilist distinction.' },
      { title: 'Run one timed practice exam', detail: '73% on 45 questions; practise the format.' }
    ]
  },
  resourceComparison: {
    summary: 'The SA path is dominated by the course cost: the Leading SAFe course (two days, typically $500-$1,000) is the standard path because the certification requires it, and the exam fee is included in most course registrations or costs about $100 separately. Study materials are minimal beyond the course: Scaled Agile\'s exam guide and sample questions are free, and the SAFe website\'s framework resources are free. Third-party SA question banks ($30-$100) add drilling volume but are optional, because the course plus the official materials cover the scope. A realistic total budget is $600 to $1,200 including the course and exam. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Leading SAFe course', values: ['$500-$1,000', 'Two-day instructor-led (often online)', 'The eligibility path and core learning'] },
      { label: 'SA exam guide + sample questions', values: ['Free', 'Official PDF + practice items', 'The scope map and item style'] },
      { label: 'SAFe framework resources', values: ['Free', 'Official website content', 'The framework vocabulary'] },
      { label: 'Third-party question banks', values: ['$30-$100', 'Online practice items', 'Extra drilling volume (optional)'] },
      { label: 'SA exam', values: ['~$100 (often included)', 'Proctored online exam', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; course pricing varies by provider; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common SAFe Agilist mistake is preparing with team-level agile material: candidates who study Scrum deeply but never learn the enterprise layer meet the portfolio, value-stream and leadership items unprepared. The fix is deliberate enterprise-framework study. The second mistake is treating the course as a checkbox rather than the source of the framework vocabulary; the exam uses the course\'s exact language. Third, candidates underestimate the 73 percent line and sit at borderline practice scores; on 45 questions, a handful of misses is the difference. Fourth, some candidates meet the item style cold; work the official sample questions first. Finally, treating the SA as the end of the path misses the point: the SA is the flagship entry to the SAFe credential family, and organisations running SAFe often value the role-based certifications (SAFe Scrum Master, RTE, Product Management) alongside it, so plan the path.',
    items: [
      { mistake: 'Preparing with team-level agile', fix: 'Study the enterprise layer: value streams, portfolio and leadership.' },
      { mistake: 'Treating the course as a checkbox', fix: 'The exam uses the course\'s vocabulary; engage actively.' },
      { mistake: 'Sitting at borderline scores', fix: '73% on 45 questions leaves no room for missed practice.' },
      { mistake: 'Meeting the item style cold', fix: 'Work the official sample questions before the exam.' },
      { mistake: 'Treating SA as the finish', fix: 'Plan the SAFe role-based certifications as the next step.' }
    ]
  },
  questionTypes: {
    summary: 'The SAFe Agilist exam is a 45-question multiple-choice exam in 90 minutes, delivered online under proctoring. The items test the framework at the enterprise level: the SAFe principles, the business-agility value stream, the essential configuration (value streams, ARTs, PI Planning, program roles) and the leadership practices. Many items are scenario-based — a described enterprise situation followed by the correct SAFe practice — and a meaningful share test the structure and vocabulary that distinguish the Agilist from team-level credentials. Samples below are editor-written illustrations of the published learning objectives, not live exam items; they show the enterprise-level style of the real items.',
    types: [
      { name: 'Framework-structure items', share: 'Majority', detail: 'Value streams, ARTs, portfolio and role connections.' },
      { name: 'Scenario items', share: 'Large share', detail: 'Enterprise situations with the correct SAFe practice.' },
      { name: 'Leadership and values items', share: 'Meaningful share', detail: 'SAFe values, principles and business-agility leadership.' }
    ],
    samples: [
      {
        prompt: 'In SAFe, which construct organises the people, processes and technology that deliver continuous value to customers?',
        options: ['A. The value stream', 'B. The sprint', 'C. The daily stand-up', 'D. The backlog item'],
        answer: 'A',
        explanation: 'Value streams organise the people, processes and technology that deliver continuous value — the fundamental organising construct of SAFe. Sprints, stand-ups and backlog items are team-level mechanics, not the organising construct.'
      },
      {
        prompt: 'PI Planning is a program-level event that serves which primary purpose?',
        options: ['A. Aligning teams to a shared vision and plan for the Program Increment', 'B. Reviewing individual performance', 'C. Finalising the annual budget', 'D. Onboarding new employees'],
        answer: 'A',
        explanation: 'PI Planning aligns the Agile Release Train to a shared vision and plan for the upcoming Program Increment — the core alignment event of SAFe. Performance reviews, budget finalisation and onboarding are not its purpose.'
      },
      {
        prompt: 'Which role is accountable for the program backlog and the Program Increment objectives in SAFe?',
        options: ['A. Product Management', 'B. The Scrum Master', 'C. The System Architect', 'D. The Release Train Engineer'],
        answer: 'A',
        explanation: 'Product Management owns the program backlog and the PI objectives at the program level. The RTE facilitates the ART, the System Architect owns technical design, and the Scrum Master serves the team — none owns the program backlog.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published learning objectives, not live exam items.'
  },
  examDay: {
    summary: 'The SAFe Agilist exam is a 45-question, 90-minute online exam through Scaled Agile\'s proctored platform, taken after completing the Leading SAFe course. Confirm your system meets the proctoring requirements — webcam, stable internet and a quiet space — and close unrelated applications before starting. The exam is closed book; pace at 2 minutes per item, and there is no scheduled break. Your result is reported immediately on completion, and the digital certificate follows. If you do not pass, Scaled Agile\'s policy defines the retake terms. On a pass, confirm the current validity and renewal policy on the Scaled Agile site, because it has changed across framework releases. The afterwards matters: add the certification to your profile, and consider the role-based SAFe certifications (SAFe Scrum Master, Release Train Engineer, Product Management) if your organisation runs SAFe at scale.',
    bring: ['Computer with webcam and stable internet', 'A quiet, private testing space', 'Your Scaled Agile account login'],
    leave: ['Phone and other devices within the proctor\'s view', 'Notes and open browser tabs — the exam is closed book'],
    timeline: [
      { time: 'Before start', detail: 'Run the proctoring environment check; clear the desk and screen.' },
      { time: 'Exam', detail: '45 questions in 90 minutes; pace 2 minutes per item.' },
      { time: 'After submit', detail: 'Result shows immediately; the digital certificate follows.' },
      { time: 'Next', detail: 'Confirm the current validity policy and plan the SAFe family.' }
    ],
    rules: [
      'Closed-book online exam under proctoring',
      '90 minutes for 45 questions; the clock does not pause',
      'The course must be completed before the exam in the standard path'
    ],
    afterwards: 'On a pass, confirm the current validity policy on the Scaled Agile site and add the credential to your profile. On a fail, retake per the policy after additional framework study.'
  }
};

export default data;
