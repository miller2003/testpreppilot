const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'CRM & Salesforce certifications desk',
    bio: 'Salesforce certification structure comes from Salesforce official Trailhead pages and is revised with each exam update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the Salesforce Administrator exam structure, passing score, and requirements against Salesforce official Trailhead pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect software-developer and business-analyst pay at a May 2024 median of $132,270 for developers (BLS) — the Platform App Builder is one of the most-taken Salesforce certifications, and Salesforce professionals sit across the well-paid software and analyst occupations',
    summary: 'The direct answer is that the Salesforce Platform App Builder certification serves the Salesforce ecosystem — administrators, consultants, and developers building on the platform — and the occupations it touches sit across BLS categories including software developers (SOC 15-1252), at a May 2024 median annual wage of $132,270, and computer occupations more broadly, with Salesforce-specific roles generally paying above the software median in many markets, though BLS has no Salesforce-specific code. The honest framing is that the certification does not set pay — Salesforce salaries are driven by ecosystem demand, role (admin vs consultant vs developer), and experience — but the Salesforce ecosystem is a well-compensated niche: industry salary surveys consistently place Salesforce administrators and consultants above general business-software roles, and the Platform App Builder credential signals the declarative development skills (objects, fields, flows, process builder, and app configuration) that employers list for platform roles. BLS counted about 1.8 million software developers in 2024 and projects about 17 percent employment growth from 2024 to 2034. The exam itself is one of the most-taken Salesforce certifications: 60 multiple-choice and multiple-select questions, 105 minutes, with a passing score of about 68 percent, and no prerequisites beyond Trailhead learning. The practical read: the Platform App Builder is the natural second certification for Salesforce administrators and the entry credential for consultants and developers moving into platform work — it signals the declarative development layer that defines modern Salesforce administration. The credential\u2019s value compounds in the Salesforce career path: administrator to app builder to consultant and developer, with each rung expanding the role options and salary range.',
    rows: [
      { label: 'Median annual wage, software developers', value: '$132,270', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 15-1252)' },
      { label: 'Lowest 10 percent', value: 'less than $83,000', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $188,000', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+17%', note: 'BLS Employment Projections' },
      { label: 'The certification itself', value: 'Professional credential', note: '60 questions, 105 minutes, ~68% passing score' }
    ],
    growth: 'BLS projects about 17% growth for software developers from 2024 to 2034, much faster than average.',
    source: { label: 'BLS OOH — Software Developers', url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' }
  },
  passRate: {
    headline: 'Salesforce publishes no pass rates — the Platform App Builder exam is 60 questions in 105 minutes with a ~68% passing score, and Salesforce reports pass/fail rather than cohort data',
    summary: 'The core fact is that Salesforce does not publish pass rates for the Platform App Builder exam, and none is available from an independent source, because Salesforce reports candidate pass/fail rather than cohort pass percentages. What is published is the exam structure: the exam contains 60 multiple-choice and multiple-select questions with 105 minutes allowed, and a passing score of approximately 68 percent (about 41 of 60 correct), with no prerequisites; results are reported immediately as pass or fail. The exam covers the declarative platform skills: data model and management (objects, fields, relationships, record types, and security), business logic automation (Flows, Process Builder, and automation rules), user interface (apps, Lightning pages, and components), and app deployment (change sets and packaging). Because Salesforce publishes the exam guide and a practice exam, the preparation is studying the official Trailhead trails and calibrating with the practice exam; the classic failure mode is under-weighting the automation section, which carries a large question share and rewards hands-on Flow experience. The certification is valid and must be maintained through Salesforce\u2019s release-based maintenance exams (typically once or twice a year). The honest advice is to treat the exam guide as the syllabus, complete the recommended Trailhead trails, build sample apps in a free Developer Edition org to practise Flows and data modeling, and take the official practice exam before booking — the automation and data-model items are where candidates lose the most points.',
    source: { label: 'Salesforce — Platform App Builder exam guide', url: 'https://trailhead.salesforce.com/credentials/platform-app-builder' },
    caveat: 'Salesforce publishes no pass rates; the passing score is approximately 68% with maintenance exams required.'
  },
  studyPlan: {
    summary: 'Plan for roughly 4 to 8 weeks and 60 to 100 hours of study for the Platform App Builder exam, structured around the exam guide\u2019s sections — data model and management, business logic automation, user interface, and app deployment — with hands-on practice in a free Salesforce Developer Edition org as the highest-yield tool. The exam\u2019s weight favours the data model and automation sections, so allocate study time there first. The most effective sequence is: first, create a free Developer Edition org and learn the platform\u2019s objects, fields, and relationships by building a sample app; second, complete the official Trailhead trails for the exam, working the modules in order; third, master Flows and automation by building actual flows in the org; fourth, take the official practice exam to calibrate; fifth, re-study the weak areas and book the exam. The highest-yield habit is the hands-on org work: the exam rewards applied declarative skills, and candidates who build flows and data models score well above those who only read. Budget the automation section the most time, since it is the largest and hardest question block. After passing, plan the maintenance exams — Salesforce requires release-based maintenance to keep certifications current — and consider the next certification on the admin-to-consultant path.',
    totalHours: '60-100 study hours over 4-8 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Platform + data model', tasks: ['Create a Developer Edition org', 'Learn objects, fields, and relationships', 'Build a sample app'], hours: 30 },
      { label: 'Weeks 3-5', focus: 'Automation', tasks: ['Complete the Trailhead automation trails', 'Build Flows for real scenarios', 'Study Process Builder and automation rules'], hours: 40 },
      { label: 'Weeks 6-7', focus: 'UI + deployment + practice', tasks: ['Study Lightning apps and pages', 'Review change sets and packaging', 'Take the official practice exam'], hours: 20 },
      { label: 'Final week', focus: 'Exam readiness', tasks: ['Re-study weak sections', 'Light org practice', 'Book the exam'], hours: 10 }
    ],
    variants: [
      { label: 'Administrator certification', detail: 'The companion admin credential; App Builder is the natural next step after Administrator.' },
      { label: 'Consultant/developer track', detail: 'App Builder feeds the consultant and platform-developer certifications.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes the Platform App Builder exam is "build in a Developer Edition org, master Flows, and calibrate with the official practice exam," and the single biggest error is studying Trailhead modules without hands-on platform work, which the applied exam punishes. A second proven approach is allocating study by exam weight — the data model and automation sections carry the largest shares, and the automation items are both numerous and scenario-heavy. Third, build real Flows for real scenarios in the org, because the Flow-builder items test applied automation design, and candidates who only watch the Trailhead demos lose those points. Fourth, use the official practice exam as the calibration tool — Salesforce\u2019s practice exams mirror the question style, and your score is the honest readiness signal. Fifth, master the data-model items (object relationships, record types, security) since they underpin both the exam and the consultant interviews. Finally, plan the maintenance exams from the start: Salesforce certifications require release-based maintenance, and letting a maintenance window lapse is the most common way Salesforce professionals lose credentials.',
    items: [
      { title: 'Build in a Developer Edition org', detail: 'The applied exam rewards hands-on declarative development.' },
      { title: 'Master Flows and automation', detail: 'The largest and hardest question block; build real flows.' },
      { title: 'Calibrate with the official practice exam', detail: 'The question style is distinctive; practice scores are honest signals.' },
      { title: 'Own the data-model items', detail: 'Object relationships and security underpin the exam and interviews.' },
      { title: 'Plan the maintenance exams', detail: 'Release-based maintenance keeps the certification current.' }
    ]
  },
  resourceComparison: {
    summary: 'Platform App Builder preparation is dominated by free official resources — Trailhead trails, the exam guide, and a free Developer Edition org — with the exam fee of $200 (or $100 with a certification voucher program). The comparison below separates the official resources, the exam, and commercial prep, with prices current to this review. The buying rule is to use the free official stack first; a commercial practice-exam subscription is optional reinforcement for candidates who want extra volume.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Salesforce Trailhead trails', values: ['Free', 'Online modules', 'The official learning path'] },
      { label: 'Salesforce Developer Edition org', values: ['Free', 'Hands-on platform environment', 'Applied practice'] },
      { label: 'Platform App Builder exam', values: ['$200', 'Online proctored or test center', 'The exam itself'] },
      { label: 'Official practice exam', values: ['~$20', 'Online practice exam', 'Readiness calibration'] },
      { label: 'Commercial practice exams (e.g. Focus on Force)', values: ['~$25-50', 'Online question banks', 'Supplemental drilling'] }
    ],
    footnote: 'Prices approximate and dated to this review; maintenance exams are required to keep the certification current.'
  },
  commonMistakes: {
    summary: 'The most common mistake is studying Trailhead modules without hands-on org practice, which the applied exam punishes; the second is under-weighting the automation section, where Flows and Process Builder items carry a large share and are the hardest. A third recurring error is confusing data-model concepts — object relationships, record types, and security — on the exam\u2019s scenario items. Candidates also routinely book the exam without the official practice exam, converting a calibratable test into a gamble, and many miss the maintenance-exam schedule, losing the certification after passing. Finally, some candidates expect the credential to qualify them for developer roles without the coding path, ignoring that App Builder is the declarative layer and the developer track adds Apex.',
    items: [
      { mistake: 'No hands-on practice', fix: 'Build apps and flows in a Developer Edition org.' },
      { mistake: 'Under-weighting automation', fix: 'Master Flows; the automation block is the largest and hardest.' },
      { mistake: 'Mixing up data-model concepts', fix: 'Drill object relationships, record types, and security.' },
      { mistake: 'Skipping the practice exam', fix: 'Calibrate with the official practice exam before booking.' },
      { mistake: 'Missing maintenance exams', fix: 'Track the release-based maintenance schedule.' }
    ]
  },
  questionTypes: {
    summary: 'The Platform App Builder exam contains 60 multiple-choice and multiple-select questions with 105 minutes, passing at approximately 68%, covering the declarative platform: data model and management, business logic automation, user interface, and app deployment. Item formats include scenario questions about which configuration or automation approach fits a business requirement. The samples below are editor-written illustrations of the published exam guide, not live exam items.',
    types: [
      { name: 'Data model & management', share: '~30%', detail: 'Objects, fields, relationships, record types, and security.' },
      { name: 'Business logic automation', share: '~30%', detail: 'Flows, Process Builder, and automation rules.' },
      { name: 'User interface', share: '~20%', detail: 'Apps, Lightning pages, and components.' },
      { name: 'App deployment', share: '~20%', detail: 'Change sets and packaging.' }
    ],
    samples: [
      {
        prompt: 'A business needs a record type to show different picklist values for different user groups. Which feature supports this?',
        options: ['A. Flows', 'B. Record types', 'C. Validation rules', 'D. Custom fields'],
        answer: 'B',
        explanation: 'Record types control which picklist values and page layouts different user profiles see.'
      },
      {
        prompt: 'Which declarative tool would you use to automate a multi-step approval with branching logic?',
        options: ['A. A simple formula field', 'B. A Flow', 'C. A custom object', 'D. A list view'],
        answer: 'B',
        explanation: 'Flows provide the declarative automation for multi-step, branching business processes.'
      },
      {
        prompt: 'What is the purpose of a change set in Salesforce?',
        options: ['A. To back up data', 'B. To move configuration between orgs', 'C. To create users', 'D. To run reports'],
        answer: 'B',
        explanation: 'Change sets migrate configuration and metadata between Salesforce orgs.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam guide, not live exam items.'
  },
  examDay: {
    summary: 'The Platform App Builder exam is taken online proctored or at a test center: 60 multiple-choice and multiple-select questions with 105 minutes, passing at approximately 68 percent, with results reported immediately as pass or fail. The core rules: for online proctoring complete the environment check (quiet room, webcam, no second screens); for center delivery bring valid photo ID. The exam is closed-book. After passing, the certification requires maintenance exams at Salesforce\u2019s release cadence (typically once or twice a year) to stay current. The most useful exam-day habits: pace at under two minutes per question, flag and return to the multi-select items, and on scenario questions match the business requirement to the declarative tool rather than over-thinking. If you do not pass, Salesforce allows retakes after a waiting period (typically 14 days for the first retake). After passing, add the credential to your Trailhead profile and LinkedIn, and plan the next certification on the admin-to-consultant or developer path.',
    bring: ['Valid photo ID (center) or proctoring-ready environment (online)', 'Salesforce account credentials', 'Arrival 15-30 minutes early'],
    leave: ['Phone, smartwatch, and study materials', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Study', detail: 'Complete Trailhead trails, build in the org, take the practice exam.' },
      { time: 'Exam', detail: '60 questions in 105 minutes; ~68% to pass.' },
      { time: 'Result', detail: 'Immediate pass/fail.' },
      { time: 'Maintenance', detail: 'Complete release-based maintenance exams to stay current.' }
    ],
    rules: ['60 questions, 105 minutes', '~68% passing score', 'Online proctored or test center', 'Maintenance exams required'],
    afterwards: 'Passing the Platform App Builder exam earns the Salesforce Platform App Builder certification, the declarative-development credential that follows the Administrator certification on the Salesforce career path.'
  }
};

export default data;
