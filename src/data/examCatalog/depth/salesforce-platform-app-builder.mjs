const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'CRM & Salesforce certifications desk',
    bio: 'Salesforce certification structure comes from Salesforce official Trailhead pages and is revised with each exam update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: "Verified against the Salesforce Certified Platform App Builder exam guide (SU 26 release), Salesforce Certification Exam Pricing, Retake Policy, Reschedule and Cancellation Policy and Expiration Overview on Salesforce Help, October 2026; wage context from BLS OOH Software Developers (SOC 15-1252), May 2024 data.",
  lastReviewed: '2026-10',
  salaryOutlook: {
    headline: 'Expect software-developer and business-analyst pay at a May 2024 median of $132,270 for developers (BLS) — the Platform App Builder is one of the most-taken Salesforce certifications, and Salesforce professionals sit across the well-paid software and analyst occupations',
    summary: 'The direct answer is that the Salesforce Platform App Builder certification serves the Salesforce ecosystem — administrators, consultants, and developers building on the platform — and the occupations it touches sit across BLS categories including software developers (SOC 15-1252), at a May 2024 median annual wage of $132,270, and computer occupations more broadly, with Salesforce-specific roles generally paying above the software median in many markets, though BLS has no Salesforce-specific code. The honest framing is that the certification does not set pay — Salesforce salaries are driven by ecosystem demand, role (admin vs consultant vs developer), and experience — but the Salesforce ecosystem is a well-compensated niche: industry salary surveys consistently place Salesforce administrators and consultants above general business-software roles, and the Platform App Builder credential signals the declarative development skills (objects, fields, Flow, formulas, validation rules and app configuration) that employers list for platform roles. BLS counted about 1.8 million software developers in 2024 and projects about 17 percent employment growth from 2024 to 2034. The exam itself is one of the most-taken Salesforce certifications: 60 multiple-choice and multiple-select questions, 105 minutes, with a passing score of 73 percent, and no prerequisite certification. The practical read: the Platform App Builder is the natural second certification for Salesforce administrators and the entry credential for consultants and developers moving into platform work — it signals the declarative development layer that defines modern Salesforce administration. The credential\u2019s value compounds in the Salesforce career path: administrator to app builder to consultant and developer, with each rung expanding the role options and salary range.',
    rows: [
      { label: 'Median annual wage, software developers', value: '$132,270', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 15-1252)' },
      { label: 'Lowest 10 percent', value: 'less than $83,000', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $188,000', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+17%', note: 'BLS Employment Projections' },
      { label: 'The certification itself', value: 'Professional credential', note: '60 scored questions, 105 minutes, 73% passing score (exam guide)' }
    ],
    growth: 'BLS projects about 17% growth for software developers from 2024 to 2034, much faster than average.',
    source: { label: 'BLS OOH — Software Developers', url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' }
  },
  passRate: {
    headline: "Salesforce publishes no pass rate, but the Platform App Builder exam sets a 73% passing score on 60 scored questions in 105 minutes",
    summary: "Salesforce does not publish cohort pass rates for its certification exams, so no official percentage of candidates who pass the Platform App Builder exam exists, and any figure you see online is a community survey or a prep-vendor estimate rather than data from Salesforce. What Salesforce does publish, in the Salesforce Certified Platform App Builder exam guide on Salesforce Help, is the passing standard and the format. The exam has 60 multiple-choice scored questions plus up to 5 unscored questions that are randomly mixed in and do not affect the result, with 105 minutes allowed. The passing score is 73%, which is about 44 correct answers out of 60 scored questions, and the guide aligns the questions to the SU 26 release. Older sources that quote 63% or 68% describe earlier versions of the exam. There is no prerequisite, and Salesforce describes the typical candidate as having six months to one year of experience building applications. The outline has five weighted sections: Business Logic and Process Automation (32%), Data Modeling and Management (20%), Salesforce Fundamentals (18%), User Interface (17%) and App Deployment (13%). The registration fee is US$200 plus applicable taxes and a retake costs US$100, with three attempts allowed per release cycle, a 24-hour wait after the first failure and a 14-day wait after the second. The certification is maintained by completing the Platform App Builder maintenance badge on Trailhead three times a year. The practical reading: with no published pass rate, treat 73% as the bar, build real Flows, formulas and validation rules in a free org, and put the most study time into the 32% business logic section.",
    source: { label: "Salesforce Help - Salesforce Certified Platform App Builder Exam Guide", url: "https://help.salesforce.com/s/articleView?id=005298964&language=en_US&type=1" },
    caveat: "Salesforce publishes the passing score (73%) and the format but no cohort pass rate."
  },
  studyPlan: {
    summary: 'Plan for roughly 4 to 8 weeks and 60 to 100 hours of study for the Platform App Builder exam, structured around the exam guide\u2019s five sections — Business Logic and Process Automation (32 percent), Data Modeling and Management (20 percent), Salesforce Fundamentals (18 percent), User Interface (17 percent) and App Deployment (13 percent) — with hands-on practice in a free Salesforce Developer Edition org as the highest-yield tool. The exam\u2019s weight favours business logic and automation, then the data model, so allocate study time there first. The most effective sequence is: first, create a free Developer Edition org and learn the platform\u2019s objects, fields, and relationships by building a sample app; second, complete the official Trailhead trails for the exam, working the modules in order; third, master Flows and automation by building actual flows in the org; fourth, take the official practice exam to calibrate; fifth, re-study the weak areas and book the exam. The highest-yield habit is the hands-on org work: the exam rewards applied declarative skills, and candidates who build flows and data models score well above those who only read. Budget the automation section the most time, since it is the largest and hardest question block. After passing, plan the Trailhead maintenance badge, due three times a year — a missed due date expires the certification — and consider the next certification on the admin-to-consultant path.',
    totalHours: '60-100 study hours over 4-8 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Platform + data model', tasks: ['Create a Developer Edition org', 'Learn objects, fields, and relationships', 'Build a sample app'], hours: 30 },
      { label: 'Weeks 3-5', focus: 'Automation', tasks: ['Complete the Trailhead automation trails', 'Build Flows for real scenarios', 'Study Flow types, formulas and validation rules'], hours: 40 },
      { label: 'Weeks 6-7', focus: 'UI + deployment + practice', tasks: ['Study Lightning apps and pages', 'Review change sets and packaging', 'Take the official practice exam'], hours: 20 },
      { label: 'Final week', focus: 'Exam readiness', tasks: ['Re-study weak sections', 'Light org practice', 'Book the exam'], hours: 10 }
    ],
    variants: [
      { label: 'Administrator certification', detail: 'The companion admin credential; App Builder is the natural next step after Administrator.' },
      { label: 'Consultant/developer track', detail: 'App Builder feeds the consultant and platform-developer certifications.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes the Platform App Builder exam is "build in a Developer Edition org, master Flows, and calibrate with the official practice exam," and the single biggest error is studying Trailhead modules without hands-on platform work, which the applied exam punishes. A second proven approach is allocating study by exam weight — business logic and process automation carries the largest share at 32 percent, data modeling follows at 20 percent, and the automation items are both numerous and scenario-heavy. Third, build real Flows for real scenarios in the org, because the Flow-builder items test applied automation design, and candidates who only watch the Trailhead demos lose those points. Fourth, use the official practice exam as the calibration tool — Salesforce\u2019s practice exams mirror the question style, and your score is the honest readiness signal. Fifth, master the data-model items (object relationships, record types, security) since they underpin both the exam and the consultant interviews. Finally, plan the maintenance badge from the start: the Platform App Builder certification is maintained by a Trailhead badge three times a year, and a missed due date expires it.',
    items: [
      { title: 'Build in a Developer Edition org', detail: 'The applied exam rewards hands-on declarative development.' },
      { title: 'Master Flows and automation', detail: 'The largest and hardest question block; build real flows.' },
      { title: 'Calibrate with the official practice exam', detail: 'The question style is distinctive; practice scores are honest signals.' },
      { title: 'Own the data-model items', detail: 'Object relationships and security underpin the exam and interviews.' },
      { title: 'Plan the maintenance badge', detail: 'A Trailhead badge three times a year keeps the certification current.' }
    ]
  },
  resourceComparison: {
    summary: 'Platform App Builder preparation is dominated by free official resources — Trailhead trails, the exam guide, and a free Developer Edition org — with the exam fee of $200 (or $100 with a certification voucher program). The comparison below separates the official resources, the exam, and commercial prep, with prices current to this review. The buying rule is to use the free official stack first; a commercial practice-exam subscription is optional reinforcement for candidates who want extra volume.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Salesforce Trailhead trails', values: ['Free', 'Online modules', 'The official learning path'], note: "Free on Trailhead; no commission or ranking implied" },
      { label: 'Salesforce Developer Edition org', values: ['Free', 'Hands-on platform environment', 'Applied practice'], note: "Free on Trailhead; no commission or ranking implied" },
      { label: 'Platform App Builder exam', values: ['$200', 'Online proctored or test center', 'The exam itself'], note: "Salesforce Certification Exam Pricing, October 2026; the retake is 50% of the exam price" },
      { label: 'Official practice exam', values: ['~$20', 'Online practice exam', 'Readiness calibration'], note: "Third-party list prices vary and are not official; check against the current exam guide" },
      { label: 'Commercial practice exams (e.g. Focus on Force)', values: ['~$25-50', 'Online question banks', 'Supplemental drilling'], note: "Third-party list prices vary and are not official; check against the current exam guide" }
    ],
    footnote: 'Prices approximate and dated to this review; maintenance badges on Trailhead are required to keep the certification current.'
  },
  commonMistakes: {
    summary: 'The most common mistake is studying Trailhead modules without hands-on org practice, which the applied exam punishes; the second is under-weighting the automation section, where Flow, formula and validation-rule items carry a large share and are the hardest. A third recurring error is confusing data-model concepts — object relationships, record types, and security — on the exam\u2019s scenario items. Candidates also routinely book the exam without the official practice exam, converting a calibratable test into a gamble, and many miss the maintenance-badge schedule, losing the certification after passing. Finally, some candidates expect the credential to qualify them for developer roles without the coding path, ignoring that App Builder is the declarative layer and the developer track adds Apex.',
    items: [
      { mistake: 'No hands-on practice', fix: 'Build apps and flows in a Developer Edition org.' },
      { mistake: 'Under-weighting automation', fix: 'Master Flows; the automation block is the largest and hardest.' },
      { mistake: 'Mixing up data-model concepts', fix: 'Drill object relationships, record types, and security.' },
      { mistake: 'Skipping the practice exam', fix: 'Calibrate with the official practice exam before booking.' },
      { mistake: 'Missing maintenance badges', fix: 'Track the Trailhead due dates, three times a year.' }
    ]
  },
  questionTypes: {
    summary: 'The Platform App Builder exam contains 60 multiple-choice and multiple-select questions with 105 minutes, passing at 73%, covering the declarative platform in five weighted sections: Business Logic and Process Automation, Data Modeling and Management, Salesforce Fundamentals, User Interface and App Deployment. Item formats include scenario questions about which configuration or automation approach fits a business requirement. The samples below are editor-written illustrations of the published exam guide, not live exam items.',
    types: [
      { name: 'Business Logic and Process Automation', share: '32%', detail: 'Formula fields, roll-up summary fields, validation rules, Flow Builder and Flow approvals.' },
      { name: 'Data Modeling and Management', share: '20%', detail: 'Data model choice, relationship types, field data types, import and export.' },
      { name: 'Salesforce Fundamentals', share: '18%', detail: 'Declarative versus programmatic boundaries, access, sharing, reports and dashboards.' },
      { name: 'User Interface', share: '17%', detail: 'Buttons, links and actions, declarative Lightning components, mobile layouts.' },
      { name: 'App Deployment', share: '13%', detail: 'Sandbox types, change sets, packages and deployment plans.' }
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
    summary: 'The Platform App Builder exam is taken online proctored or at a test center: 60 multiple-choice and multiple-select questions with 105 minutes, passing at 73 percent. The core rules: for online proctoring complete the environment check (quiet room, webcam, no second screens); for center delivery bring valid photo ID. The exam is closed-book. After passing, the certification stays current through the Platform App Builder maintenance badge on Trailhead, due three times a year. The most useful exam-day habits: pace at under two minutes per question, flag and return to the multi-select items, and on scenario questions match the business requirement to the declarative tool rather than over-thinking. If you do not pass, Salesforce allows three attempts per release cycle: wait 24 hours after the first failure, 14 days after the second, and until the next release cycle after the third. After passing, add the credential to your Trailhead profile and LinkedIn, and plan the next certification on the admin-to-consultant or developer path.',
    bring: ['Valid photo ID (center) or proctoring-ready environment (online)', 'Salesforce account credentials', 'Arrival 15-30 minutes early'],
    leave: ['Phone, smartwatch, and study materials', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Study', detail: 'Complete Trailhead trails, build in the org, take the practice exam.' },
      { time: 'Exam', detail: '60 scored questions in 105 minutes; 73% to pass.' },
      { time: 'Result', detail: 'Check the post-exam screen and your Trailhead credentials page.' },
      { time: 'Maintenance', detail: 'Complete the Trailhead maintenance badge three times a year.' }
    ],
    rules: ['60 questions, 105 minutes', '73% passing score', 'Online proctored or test center', 'Maintenance badge three times a year'],
    afterwards: 'Passing the Platform App Builder exam earns the Salesforce Platform App Builder certification, the declarative-development credential that follows the Administrator certification on the Salesforce career path.'
  }
};

export default data;
