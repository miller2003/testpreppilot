const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Agile & project-delivery certifications desk',
    bio: 'This desk covers Scrum, SAFe and agile delivery credentials. Exam structure, fees and rules come from the certifying body\'s official pages (Scaled Agile, Scrum.org, PMI), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against Scaled Agile\'s SAFe Scrum Master (SSM) certification pages and BLS OOH Project Management Specialists (SOC 13-1082), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$100,750 median for project management specialists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "SAFe Scrum Master" — the SSM certification validates that you can facilitate Scrum at scale inside the Scaled Agile Framework, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Project Management Specialists, SOC 13-1082, which had a May 2024 median wage of $100,750, with the lowest 10 percent under $59,450 and the highest 10 percent above $170,380. The fit is deliberate: SAFe Scrum Masters work as Scrum Masters, agile team coaches and delivery leads in SAFe environments, all inside the project management specialist occupation. BLS counted 774,900 project management specialist jobs in 2024 and projects 9 percent growth from 2024 to 2034, faster than the average for all occupations, with about 111,600 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the certification\'s value is as a hiring signal for organisations running SAFe — the framework most commonly used by large enterprises adopting agile at scale. Read the number as the relevant market for the occupation, and note that SAFe expertise is most valued in the enterprise environments the framework targets.',
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
    headline: 'Scaled Agile publishes the passing standard — 77% (35 of 45) — and no cohort pass rate',
    summary: 'Scaled Agile does not publish cohort pass rates for the SAFe Scrum Master exam, and third-party estimates are not official data, so we do not treat them as authoritative. What Scaled Agile does publish is the format and the passing standard: the SSM exam has 45 multiple-choice questions with a 90-minute time limit, and a passing score of 77 percent — at least 35 correct answers. The exam is delivered online through Scaled Agile\'s proctored platform, and the exam fee is about $100 (for most candidates the fee is included in the SAFe Scrum Master course, which is the standard path because the certification requires completing the course first). The exam content follows the published learning objectives: the SAFe principles, the Scrum Master role in SAFe, facilitating team and program events, and applying Scrum within the larger SAFe configuration. The absence of a published pass rate is not an absence of standards: the 77 percent line is a meaningful bar, and the exam rewards understanding of SAFe-specific practices — how team-level Scrum connects to program-level events such as Program Increment (PI) Planning — rather than generic Scrum alone. The practical reading: attend the course, study the SSM exam guide and sample questions, and drill the SAFe-specific material, because candidates with only team-level Scrum experience routinely underestimate the SAFe layer.',
    source: { label: 'Scaled Agile - SAFe Scrum Master (SSM) certification', url: 'https://scaledagile.com/certification/ssm-safe-scrum-master/' },
    caveat: 'Scaled Agile publishes the 77% cut score but no cohort pass rate; the exam requires completing the SAFe Scrum Master course in the standard path.'
  },
  studyPlan: {
    summary: 'The SAFe Scrum Master exam is a 45-question, 90-minute exam with a 77 percent passing line, and the standard path requires completing the two-day SAFe Scrum Master course, which covers the framework: the SAFe principles, the Scrum Master role in SAFe, team and program events, and how Scrum operates inside the larger configuration. A defensible plan runs 20 to 40 hours of exam-focused study after the course, over 1 to 2 weeks. Days one to three: review the course materials and the SSM exam guide, and summarise the SAFe principles and the Scrum Master role. Days four to six: study the SAFe-specific material — PI Planning, the ART (Agile Release Train) and the program-level events and roles — because the exam tests the SAFe layer that generic Scrum study misses, and work the sample questions. Day seven: take a timed practice exam at the real 45-question, 90-minute format, then sit the real exam. The plan is short because the course carries the learning; the exam study is about consolidating the SAFe-specific vocabulary and the exam style.',
    totalHours: '20-40 hours over 1-2 weeks (after the two-day course)',
    weeks: [
      { label: 'Days 1-3', focus: 'Course consolidation', tasks: ['Review the course materials and exam guide', 'Summarise the SAFe principles and SSM role', 'Map team-level and program-level events'], hours: 12 },
      { label: 'Days 4-6', focus: 'SAFe-specific drilling', tasks: ['PI Planning and the ART structure', 'Program roles: RTE, Product Management and others', 'Work the sample questions'], hours: 15 },
      { label: 'Day 7', focus: 'Practice and sit', tasks: ['One timed 45-question, 90-minute practice exam', 'Review weak objectives', 'Sit the real exam'], hours: 8 }
    ],
    variants: [
      { label: 'Experienced Scrum Master', detail: 'Compress the Scrum review; the SAFe layer — PI Planning and the ART — is the new material.' },
      { label: 'New to Scrum', detail: 'Add the Scrum fundamentals before the course; the SAFe course assumes Scrum familiarity.' }
    ]
  },
  prepStrategies: {
    summary: 'The SSM exam rewards SAFe-specific understanding, so the dominant strategy is studying the SAFe layer deliberately: the exam tests how team-level Scrum operates inside the program-level configuration — the ART, PI Planning and the program roles — and candidates with only team-level Scrum experience routinely under-prepare it. Second, attend and engage with the two-day course, because it is both the eligibility path and the source of the framework vocabulary the exam uses. Third, use the SSM exam guide and sample questions as the scope map and item-style reference; Scaled Agile publishes them, and the exam is built from the course and guide content. Fourth, drill the framework\'s structure — the roles, events and artefacts at team and program level — until you can map them without hesitation, because the exam rewards knowing what connects to what in SAFe. Finally, take at least one timed practice exam at the real 45-question, 90-minute format; the 77 percent line leaves a small margin, and the SAFe-specific items need practice.',
    items: [
      { title: 'Study the SAFe layer', detail: 'ART, PI Planning and program roles are the SAFe-specific core the exam tests.' },
      { title: 'Engage with the course', detail: 'It is the eligibility path and the source of the framework vocabulary.' },
      { title: 'Use the exam guide and samples', detail: 'The published guide is the scope map and item-style reference.' },
      { title: 'Map the framework structure', detail: 'Roles, events and artefacts at team and program level must be automatic.' },
      { title: 'Run one timed practice exam', detail: '77% leaves a small margin; practise the format.' }
    ]
  },
  resourceComparison: {
    summary: 'The SSM path is dominated by the course cost: the SAFe Scrum Master course (two days, typically $500-$1,000) is the standard path because the certification requires it, and the exam fee is included in most course registrations or costs about $100 separately. Study materials are minimal beyond the course: Scaled Agile\'s exam guide and sample questions are free, and the SAFe website\'s framework resources are free. Third-party SSM question banks ($30-$100) add drilling volume but are optional, because the course plus the official materials cover the scope. A realistic total budget is $600 to $1,200 including the course and exam. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'SAFe Scrum Master course', values: ['$500-$1,000', 'Two-day instructor-led (often online)', 'The eligibility path and core learning'] },
      { label: 'SSM exam guide + sample questions', values: ['Free', 'Official PDF + practice items', 'The scope map and item style'] },
      { label: 'SAFe framework resources', values: ['Free', 'Official website content', 'The framework vocabulary'] },
      { label: 'Third-party question banks', values: ['$30-$100', 'Online practice items', 'Extra drilling volume (optional)'] },
      { label: 'SSM exam', values: ['~$100 (often included)', 'Proctored online exam', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; course pricing varies by provider; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common SSM mistake is preparing with generic Scrum material: candidates who study only team-level Scrum meet the SAFe-specific items — the ART, PI Planning and program roles — unprepared. The fix is deliberate SAFe-layer study. The second mistake is skipping the course\'s active engagement and treating it as a checkbox; the course is the eligibility path and the source of the framework vocabulary the exam uses. Third, candidates underestimate the small margin: at 77 percent on 45 questions, a handful of misses is the difference between pass and fail, so borderline practice scores should not be ignored. Fourth, some candidates meet the item style cold; work the official sample questions first. Finally, treating the certification as an end rather than a step misses the point: the SSM is one rung of the SAFe credential family, and organisations running SAFe typically value the broader SAFe certifications (such as the SAFe Agilist) alongside it, so plan the path.',
    items: [
      { mistake: 'Preparing with generic Scrum', fix: 'Study the SAFe layer: ART, PI Planning and program roles.' },
      { mistake: 'Treating the course as a checkbox', fix: 'Engage actively; it is the eligibility path and vocabulary source.' },
      { mistake: 'Ignoring the small margin', fix: '77% on 45 questions leaves no room for borderline practice scores.' },
      { mistake: 'Meeting the item style cold', fix: 'Work the official sample questions before the exam.' },
      { mistake: 'Treating SSM as the finish', fix: 'Plan the broader SAFe credential family as the next step.' }
    ]
  },
  questionTypes: {
    summary: 'The SSM exam is a 45-question multiple-choice exam in 90 minutes, delivered online under proctoring. The items test the SAFe Scrum Master role across the published learning objectives: the SAFe principles, team and program events, the Scrum Master\'s facilitation responsibilities in SAFe, and how Scrum operates inside the larger configuration. Many items are scenario-based — a described team or program situation followed by the correct SAFe practice — and a meaningful share test the SAFe-specific layer (PI Planning, the ART, program roles) that distinguishes this exam from generic Scrum certifications. Samples below are editor-written illustrations of the published learning objectives, not live exam items; they show the SAFe-specific style of the real items.',
    types: [
      { name: 'Scenario items', share: 'Majority', detail: 'Team and program situations with the correct SAFe practice.' },
      { name: 'SAFe-specific knowledge items', share: 'Large share', detail: 'ART, PI Planning and program roles.' },
      { name: 'Scrum role items', share: 'Minority', detail: 'The Scrum Master\'s facilitation responsibilities in SAFe.' }
    ],
    samples: [
      {
        prompt: 'During PI Planning, the teams break out to plan their iterations. What is the primary goal of the team breakout sessions?',
        options: ['A. To commit to the iteration goals and draft their plans for the Program Increment', 'B. To finalise the company\'s annual budget', 'C. To interview new team members', 'D. To review the previous program\'s metrics only'],
        answer: 'A',
        explanation: 'In PI Planning, teams break out to draft their iteration plans and commit to iteration goals for the upcoming Program Increment — the purpose of the breakout. Budget finalisation, hiring and retrospective-only reviews are not the goal of the breakout.'
      },
      {
        prompt: 'In SAFe, who facilitates the Program Increment Planning event for the Agile Release Train?',
        options: ['A. The Release Train Engineer', 'B. The Product Owner', 'C. The System Architect', 'D. The Scrum Master of each team, in sequence'],
        answer: 'A',
        explanation: 'The Release Train Engineer (RTE) facilitates PI Planning for the ART. Product Owners own the team backlog, the System Architect owns technical design, and the Scrum Masters facilitate their teams\' own events — not the program-level PI Planning.'
      },
      {
        prompt: 'A team\'s Scrum Master notices the team is committing to more work than they can deliver. The most appropriate SAFe-aligned response is to:',
        options: ['A. Facilitate the team setting realistic iteration goals and a sustainable plan', 'B. Commit on their behalf to protect the program', 'C. Escalate the overload to the customer', 'D. Ignore it until the retro'],
        answer: 'A',
        explanation: 'The Scrum Master facilitates the team\'s own commitment process — realistic iteration goals and a sustainable plan. Committing on the team\'s behalf, escalating overload to the customer or deferring to the retro each misread the facilitation role.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published learning objectives, not live exam items.'
  },
  examDay: {
    summary: 'The SSM exam is a 45-question, 90-minute online exam through Scaled Agile\'s proctored platform, taken after completing the SAFe Scrum Master course. Confirm your system meets the proctoring requirements — webcam, stable internet and a quiet space — and close unrelated applications before starting. The exam is closed book; pace at 2 minutes per item, and there is no scheduled break. Your result is reported immediately on completion, and the digital certificate follows. If you do not pass, Scaled Agile\'s policy defines the retake terms. On a pass, the certification does not expire in the traditional sense, but Scaled Agile periodically updates the framework — confirm the current validity and renewal policy on the Scaled Agile site, because it has changed across framework releases. The afterwards matters: add the certification to your profile, and consider the broader SAFe credential family (such as the SAFe Agilist) if your organisation runs SAFe at scale.',
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
    afterwards: 'On a pass, confirm the current validity policy on the Scaled Agile site and add the credential to your profile. On a fail, retake per the policy after additional SAFe-layer study.'
  }
};

export default data;
