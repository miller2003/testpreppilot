const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'CRM & Salesforce certifications desk',
    bio: 'Salesforce certification structure comes from Salesforce official Trailhead pages and is revised with each exam update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the Platform Developer I exam structure, passing score, and requirements against Salesforce official Trailhead pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect software-developer pay at a May 2024 median of $132,270 (BLS) — Platform Developer I is the Salesforce developer entry certification, and Salesforce developers sit in the well-compensated software occupations',
    summary: 'The direct answer is that the Salesforce Platform Developer I certification is the entry developer credential in the Salesforce ecosystem, and the occupation it serves, software developers (SOC 15-1252), earned a May 2024 median annual wage of $132,270, with the lowest 10 percent under about $83,000 and the highest 10 percent above about $188,000 — with Salesforce developers generally sitting within or above that range in many markets, though BLS has no Salesforce-specific code. The honest framing is that the certification does not set pay — developer salaries are driven by ecosystem demand, role, and experience — but the credential signals the Apex and Lightning development skills (Apex, Aura and Lightning Web Components, testing, and platform development patterns) that employers list for Salesforce developer roles, and the Salesforce ecosystem is a well-compensated software niche. BLS counted about 1.8 million software developers in 2024 and projects about 17 percent employment growth from 2024 to 2034. The exam itself is one of the most-taken Salesforce developer certifications: 60 multiple-choice and multiple-select questions, 105 minutes, with a passing score of about 68 percent, and a requirement to complete the free Apex specialist and developer superbadge coursework on Trailhead. The practical read: Platform Developer I is the credential that transitions Salesforce administrators and consultants into the developer track, and it signals the coding layer that the declarative App Builder certification does not cover. The credential\u2019s value compounds in the Salesforce career path: administrator to app builder to developer, with the developer credential opening the higher-paying roles and the trail toward Platform Developer II and technical architect.',
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
    headline: 'Salesforce publishes no pass rates — the Platform Developer I exam is 60 questions in 105 minutes with a ~68% passing score, and Salesforce reports pass/fail rather than cohort data',
    summary: 'The core fact is that Salesforce does not publish pass rates for the Platform Developer I exam, and none is available from an independent source, because Salesforce reports candidate pass/fail rather than cohort pass percentages. What is published is the exam structure: the exam contains 60 multiple-choice and multiple-select questions with 105 minutes allowed, and a passing score of approximately 68 percent (about 41 of 60 correct); candidates must complete the free Apex specialist and developer superbadge coursework on Trailhead before taking the exam. The exam covers the developer skills: Apex programming (classes, triggers, SOQL, and SOSL), Lightning development (Aura components and Lightning Web Components), testing and debugging, and platform development patterns and best practices. Because Salesforce publishes the exam guide and practice exam, the preparation is completing the Trailhead developer trails and calibrating with the practice exam; the classic failure mode is under-practising the Apex code-reading items, which reward the ability to read and reason about Apex code, a skill built only through coding practice. The certification is valid and must be maintained through Salesforce\u2019s release-based maintenance exams. The honest advice is to treat the exam guide as the syllabus, complete the required Trailhead superbadges, build actual Apex and Lightning code in a free Developer Edition org, and take the official practice exam before booking — the code-reading items are where candidates without hands-on practice lose the most points.',
    source: { label: 'Salesforce — Platform Developer I exam guide', url: 'https://trailhead.salesforce.com/credentials/platform-developer-i' },
    caveat: 'Salesforce publishes no pass rates; the passing score is approximately 68% with maintenance exams required.'
  },
  studyPlan: {
    summary: 'Plan for roughly 8 to 12 weeks and 80 to 150 hours of study for the Platform Developer I exam, structured around the exam guide\u2019s sections — Apex programming, Lightning development, testing, and platform patterns — with hands-on coding in a free Developer Edition org as the highest-yield tool. The exam\u2019s weight favours Apex programming, so allocate study time there first. The most effective sequence is: first, complete the required Trailhead superbadges (Apex specialist and developer) to unlock eligibility; second, learn Apex fundamentals — classes, triggers, SOQL, and SOSL — by writing real code in the org; third, study Lightning development, practising Aura and Lightning Web Components; fourth, work the testing and debugging content; and fifth, take the official practice exam to calibrate. The highest-yield habit is the hands-on coding: the exam\u2019s code-reading items reward candidates who can read and reason about Apex, a skill built only through practice. Budget the Apex and trigger content the most time, since it carries the largest question share. After passing, plan the maintenance exams — Salesforce requires release-based maintenance — and consider Platform Developer II and the technical-architect trail for the developer career path.',
    totalHours: '80-150 study hours over 8-12 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Superbadges + Apex', tasks: ['Complete the required Trailhead superbadges', 'Learn Apex classes and triggers', 'Practise SOQL and SOSL in the org'], hours: 45 },
      { label: 'Weeks 4-7', focus: 'Lightning + testing', tasks: ['Study Aura and Lightning Web Components', 'Work testing and debugging content', 'Take the official practice exam'], hours: 45 },
      { label: 'Weeks 8-10', focus: 'Patterns + practice', tasks: ['Study platform development patterns', 'Drill code-reading items', 'Re-study weak areas'], hours: 35 },
      { label: 'Final weeks', focus: 'Exam readiness', tasks: ['Take the practice exam again', 'Light code review', 'Book the exam'], hours: 15 }
    ],
    variants: [
      { label: 'Platform Developer II', detail: 'The advanced developer certification; requires PD1 and deeper Apex and integration work.' },
      { label: 'Technical Architect trail', detail: 'The highest Salesforce architect path, building on the developer certifications.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes Platform Developer I is "code every concept in a Developer Edition org, master the code-reading items, and calibrate with the official practice exam," and the single biggest error is studying Trailhead modules without writing code, which the code-reading exam punishes. A second proven approach is completing the required superbadges first, since eligibility requires them and the hands-on work they demand is the best Apex practice. Third, allocate study by exam weight — Apex programming carries the largest share — and practise SOQL and trigger patterns specifically, since those items dominate. Fourth, drill the code-reading items: the exam presents Apex code and asks what it does or where it fails, a skill built only through reading and writing real code. Fifth, use the official practice exam as the calibration tool and re-study until your score is comfortable. Finally, plan the maintenance exams from the start — Salesforce requires release-based maintenance, and letting a maintenance window lapse is the most common way developers lose the credential.',
    items: [
      { title: 'Code every concept', detail: 'The code-reading exam rewards hands-on Apex and Lightning practice.' },
      { title: 'Complete the superbadges first', detail: 'Eligibility requires them, and the hands-on work is the best practice.' },
      { title: 'Weight Apex programming', detail: 'The largest question share; practise SOQL and trigger patterns.' },
      { title: 'Drill the code-reading items', detail: 'Read and reason about Apex code; it is the exam\u2019s signature.' },
      { title: 'Plan the maintenance exams', detail: 'Release-based maintenance keeps the credential current.' }
    ]
  },
  resourceComparison: {
    summary: 'Platform Developer I preparation is dominated by free official resources — Trailhead trails, the required superbadges, and a free Developer Edition org — with the exam fee of $200. The comparison below separates the official resources, the exam, and commercial prep, with prices current to this review. The buying rule is to use the free official stack first; a commercial practice-exam subscription is optional reinforcement for candidates who want extra volume.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Salesforce Trailhead developer trails', values: ['Free', 'Online modules + challenges', 'The official learning path'] },
      { label: 'Required superbadges (Apex specialist, developer)', values: ['Free', 'Hands-on challenges', 'Eligibility + Apex practice'] },
      { label: 'Salesforce Developer Edition org', values: ['Free', 'Hands-on coding environment', 'Applied practice'] },
      { label: 'Platform Developer I exam', values: ['$200', 'Online proctored or test center', 'The exam itself'] },
      { label: 'Official practice exam / commercial Q-banks', values: ['~$20-50', 'Online practice exams', 'Readiness calibration'] }
    ],
    footnote: 'Prices approximate and dated to this review; maintenance exams are required to keep the certification current.'
  },
  commonMistakes: {
    summary: 'The most common mistake is studying Trailhead modules without writing code, which the code-reading exam punishes; the second is skipping the required superbadges and discovering the eligibility gap at registration. A third recurring error is being weak on SOQL and trigger patterns, the largest question block. Candidates also routinely misread the code-reading items by rushing, and many book the exam without the practice exam calibration. Finally, some candidates miss the maintenance-exam schedule, losing the credential after passing, and others treat the certification as the end, ignoring the PD2 and architect trail that the credential is designed to precede.',
    items: [
      { mistake: 'No hands-on coding', fix: 'Write Apex and Lightning code in a Developer Edition org.' },
      { mistake: 'Skipping the superbadges', fix: 'Complete the required superbadges to unlock eligibility.' },
      { mistake: 'Weak on SOQL and triggers', fix: 'Drill the Apex patterns that dominate the exam.' },
      { mistake: 'Rushing code-reading items', fix: 'Read the Apex code carefully; reason before answering.' },
      { mistake: 'Missing maintenance exams', fix: 'Track the release-based maintenance schedule.' }
    ]
  },
  questionTypes: {
    summary: 'The Platform Developer I exam contains 60 multiple-choice and multiple-select questions with 105 minutes, passing at approximately 68%, covering Apex programming, Lightning development, testing and debugging, and platform development patterns. The signature item format presents Apex code and asks what it does, where it fails, or which code snippet fits a requirement. The samples below are editor-written illustrations of the published exam guide, not live exam items.',
    types: [
      { name: 'Apex programming', share: '~40%', detail: 'Classes, triggers, SOQL, SOSL, and governor limits.' },
      { name: 'Lightning development', share: '~20%', detail: 'Aura components and Lightning Web Components.' },
      { name: 'Testing & debugging', share: '~20%', detail: 'Test classes, code coverage, and debugging.' },
      { name: 'Platform patterns', share: '~20%', detail: 'Development patterns, security, and best practices.' }
    ],
    samples: [
      {
        prompt: 'Which SOQL query returns all Account records with more than 100 employees?',
        options: ['A. SELECT Id FROM Account WHERE NumberOfEmployees > 100', 'B. SELECT Id FROM Account HAVING Employees > 100', 'C. FIND Accounts WHERE Employees > 100', 'D. SELECT Id FROM Contact WHERE Account.Employees > 100'],
        answer: 'A',
        explanation: 'SOQL uses WHERE with a comparison on the NumberOfEmployees field.'
      },
      {
        prompt: 'What is the minimum code coverage required to deploy Apex to production?',
        options: ['A. 50%', 'B. 75%', 'C. 100%', 'D. No minimum'],
        answer: 'B',
        explanation: 'Apex must have at least 75% code coverage to deploy to production.'
      },
      {
        prompt: 'Which Apex feature is used to handle governor-limit errors gracefully?',
        options: ['A. Exception handling with try-catch', 'B. Hardcoding limits', 'C. Ignoring the errors', 'D. Using synchronous-only code'],
        answer: 'A',
        explanation: 'Exception handling with try-catch manages limit errors gracefully in Apex.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam guide, not live exam items.'
  },
  examDay: {
    summary: 'The Platform Developer I exam is taken online proctored or at a test center: 60 multiple-choice and multiple-select questions with 105 minutes, passing at approximately 68 percent, with results reported immediately as pass or fail. The core rules: for online proctoring complete the environment check (quiet room, webcam, no second screens); for center delivery bring valid photo ID. The exam is closed-book. After passing, the certification requires maintenance exams at Salesforce\u2019s release cadence. The most useful exam-day habits: pace at under two minutes per question, read the code-reading items carefully before answering, and flag the multi-select items to return to. If you do not pass, Salesforce allows retakes after a waiting period (typically 14 days for the first retake). After passing, add the credential to your Trailhead profile and LinkedIn, and plan the PD2 and architect steps, since the developer career path continues past this entry credential.',
    bring: ['Valid photo ID (center) or proctoring-ready environment (online)', 'Salesforce account credentials', 'Arrival 15-30 minutes early'],
    leave: ['Phone, smartwatch, and study materials', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Study', detail: 'Complete superbadges, code in the org, take the practice exam.' },
      { time: 'Exam', detail: '60 questions in 105 minutes; ~68% to pass.' },
      { time: 'Result', detail: 'Immediate pass/fail.' },
      { time: 'Maintenance', detail: 'Complete release-based maintenance exams.' }
    ],
    rules: ['60 questions, 105 minutes', '~68% passing score', 'Online proctored or test center', 'Maintenance exams required'],
    afterwards: 'Passing the Platform Developer I exam earns the Salesforce Platform Developer I certification, the entry developer credential on the Salesforce career path, leading toward PD2 and the architect trail.'
  }
};

export default data;
