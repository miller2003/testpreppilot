const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers Salesforce and other platform certifications. Exam structure, fees and rules come from the vendor certification pages, which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the Salesforce Administrator certification pages and BLS OOH Software Developers (SOC 15-1252) as the adjacent platform series, May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$132,270 median for software developers — the adjacent platform-role series (BLS, May 2024), used with an explicit caveat',
    summary: 'There is no Bureau of Labor Statistics occupation called "Salesforce Administrator" — the Salesforce Certified Administrator credential validates platform-administration skill, and the wage question belongs to the role you perform with it. Salesforce administrators are business-systems professionals who configure and maintain the CRM platform, and no single BLS occupation fits them perfectly; we use Software Developers, SOC 15-1252, as the adjacent platform-series benchmark, with a May 2024 median of $132,270, and Computer Systems Analysts as the business-systems alternative. The honest caveat: administrator roles span a wide range, from CRM-administration positions that sit below the developer median to senior platform roles at or above it, and the credential\'s value is as a hiring signal in the Salesforce ecosystem, where employers specifically require or prefer the administrator certification. BLS counted 1,684,900 software developer jobs in 2024 and projects 17 percent growth from 2024 to 2034, with about 150,000 openings a year, and the platform-ecosystem demand the Salesforce certification serves tracks that broader software market. Read the cited figure as context for the platform-role market, not as a precise administrator wage.',
    rows: [
      { label: 'Median annual wage, software developers (adjacent platform series)', value: '$132,270', note: 'BLS OOH, SOC 15-1252, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $84,060', note: 'BLS OOH, SOC 15-1252, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $208,500', note: 'BLS OOH, SOC 15-1252, May 2024' },
      { label: 'Median, computer systems analysts (business-systems alternative)', value: '$112,290', note: 'BLS OOH, SOC 15-1211, May 2024' }
    ],
    growth: 'BLS projects 17 percent growth for software developers from 2024 to 2034, about 150,000 openings per year — cited as context for the platform-role market.',
    source: { label: 'BLS Occupational Outlook Handbook - Software Developers', url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' }
  },
  passRate: {
    headline: 'Salesforce publishes no pass rate — the Administrator exam is 60 scored questions in 105 minutes, with the score reported as pass/fail',
    summary: 'Salesforce does not publish cohort pass rates for its certification exams, and third-party estimates are not official data, so we do not treat them as authoritative. What Salesforce does publish is the format and the passing standard: the Administrator exam has 60 scored multiple-choice questions (plus 5 unscored pretest items) with a 105-minute time limit, and the result is reported as pass/fail with a section breakdown. The exam is delivered through Salesforce\'s proctored online platform or at Kryterion test centres, and the certification is valid for three years, renewed by passing the current exam or the maintenance path. The exam content follows the published exam guide: configuration and setup, object manager, sales and marketing applications, activity management and collaboration, and reports and dashboards. The absence of a published pass rate is not an absence of standards: the 60-scored-question format rewards applied knowledge of the platform, and the section breakdown lets candidates see where they fell short. The practical reading: study the exam guide and use Trailhead and the practice exams, which are the closest thing to the real item style.',
    source: { label: 'Salesforce - Certified Administrator exam', url: 'https://trailhead.salesforce.com/credentials/administrator' },
    caveat: 'Salesforce publishes the format and pass/fail reporting but no cohort pass rate.'
  },
  studyPlan: {
    summary: 'The Salesforce Administrator exam is a 60-scored-question, 105-minute exam built on the published exam guide: configuration and setup, object manager, sales and marketing applications, activity management and collaboration, and reports and dashboards. A defensible plan runs 80 to 120 hours over 6 to 8 weeks, using Trailhead (Salesforce\'s free learning platform) as the primary resource. Weeks 1-2: the platform foundation — setup, the user and data model, and the security model — using Trailhead modules and a free developer org. Weeks 3-4: the object manager and automation — custom objects, fields, page layouts, and the automation tools (Workflow, Process Builder, Flow). Weeks 5-6: the applications — sales and marketing apps, activity management and collaboration — and the reports and dashboards. Weeks 7-8: practice exams and a full timed run at the real 105-minute format. The plan is hands-on-heavy because the exam rewards real platform experience; configuring a free developer org alongside the study is the highest-value preparation.',
    totalHours: '80-120 hours over 6-8 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Platform foundation', tasks: ['Setup, users and the security model', 'The data model and object basics', 'Hands-on in a free developer org'], hours: 30 },
      { label: 'Weeks 3-4', focus: 'Object manager and automation', tasks: ['Custom objects, fields and layouts', 'Workflow, Process Builder and Flow', 'Automation scenario practice'], hours: 35 },
      { label: 'Weeks 5-6', focus: 'Applications and reporting', tasks: ['Sales and marketing apps', 'Activity management and collaboration', 'Reports and dashboards'], hours: 30 },
      { label: 'Weeks 7-8', focus: 'Drill and mocks', tasks: ['Practice exams in volume', 'Full timed runs at the real format', 'Review weak sections'], hours: 25 }
    ],
    variants: [
      { label: 'Working Salesforce admin', detail: 'The daily work accelerates the plan; focus study on the exam sections outside your daily work and the format.' },
      { label: 'New to Salesforce', detail: 'Add 2 weeks of platform fundamentals on Trailhead before the full plan.' }
    ]
  },
  prepStrategies: {
    summary: 'The Administrator exam rewards applied platform knowledge, so the dominant strategy is hands-on practice in a free developer org: configure objects, build Flows and create reports alongside the study, because the exam items test what an administrator does. Second, use Trailhead as the primary learning resource — Salesforce\'s free platform includes the official administrator learning path and the practice exam, which is the closest thing to the real item style. Third, master the automation material deliberately: Flow and the older automation tools are a distinct and heavily weighted area, and candidates who under-prepare automation lose a real block. Fourth, learn the reports and dashboards domain, which is a full exam section. Finally, take at least two full timed practice runs at the real 60-scored-question, 105-minute format; the pace and the interface are part of the test, and the section breakdown on the real exam rewards balanced coverage.',
    items: [
      { title: 'Practise in a developer org', detail: 'Configure, automate and report alongside the study.' },
      { title: 'Use Trailhead', detail: 'The official learning path and practice exam are free and authoritative.' },
      { title: 'Master the automation material', detail: 'Flow and the automation tools are a distinct weighted area.' },
      { title: 'Cover reports and dashboards', detail: 'A full exam section; do not skip it.' },
      { title: 'Run two timed practice exams', detail: '105 minutes at the real format; the pace is part of the test.' }
    ]
  },
  resourceComparison: {
    summary: 'Salesforce Administrator prep is inexpensive because Trailhead provides the core resources free. The Trailhead administrator learning path, the practice exam and the free developer org cover the scope at no cost. Third-party providers sell administrator courses and question banks at $30-$300; many candidates use Trailhead plus a question bank. The exam fee is $200 per attempt, with a reduced $100 retake within the eligibility window. A realistic total budget is $250 to $600 including the exam fee and optional prep materials. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Trailhead administrator path', values: ['Free', 'Official online modules', 'The authoritative scope; the primary resource'] },
      { label: 'Salesforce practice exam', values: ['Free or included', 'Official online practice', 'The closest official item style'] },
      { label: 'Free developer org', values: ['$0', 'Real platform environment', 'The hands-on practice the exam rewards'] },
      { label: 'Third-party courses and banks', values: ['$30-$300', 'Video courses and practice items', 'Structured alternatives and extra volume'] },
      { label: 'Administrator exam', values: ['$200 (retake $100)', 'Proctored online or test centre', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the exam fee is $200 with a reduced retake; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common Administrator mistake is studying theory without configuring: candidates who read about Salesforce but never build objects or Flows meet the hands-on scenario items without the practical intuition they reward. The fix is developer-org practice. The second mistake is under-preparing the automation material, a distinct weighted area that candidates new to Flow under-prepare. Third, candidates skip the reports-and-dashboards section, treating it as minor when it is a full exam section. Fourth, some candidates never take a timed practice run and misjudge the 105-minute pace. Finally, candidates who do not use the free Trailhead practice exam meet the item style cold; it is the closest thing to the real exam.',
    items: [
      { mistake: 'Studying without configuring', fix: 'Build objects, Flows and reports in a developer org.' },
      { mistake: 'Under-preparing automation', fix: 'Flow and the automation tools are a distinct weighted area.' },
      { mistake: 'Skipping reports and dashboards', fix: 'A full exam section; cover it.' },
      { mistake: 'Never timing a practice run', fix: '105 minutes at the real format; run timed practice exams.' },
      { mistake: 'Skipping the Trailhead practice exam', fix: 'It is the closest thing to the real item style.' }
    ]
  },
  questionTypes: {
    summary: 'The Administrator exam is a 60-scored-question multiple-choice and multiple-select exam in 105 minutes. The items test the published exam guide: configuration and setup, object manager, sales and marketing applications, activity management and collaboration, and reports and dashboards — with many scenario items asking which configuration, automation tool or report fits a described business need. Samples below are editor-written illustrations of the published exam guide, not live exam items; they show the platform-configuration style of the real items.',
    types: [
      { name: 'Configuration scenario items', share: 'Largest block', detail: 'Which object, field, layout or setting fits a described need.' },
      { name: 'Automation items', share: 'Large block', detail: 'Flow and the automation tools for described processes.' },
      { name: 'Reporting items', share: 'Meaningful block', detail: 'Reports and dashboards for described needs.' }
    ],
    samples: [
      {
        prompt: 'A company must track a new "Project" entity with custom fields and relate it to accounts. The most appropriate first configuration step is:',
        options: ['A. Create a custom object with the fields and a lookup relationship to Account', 'B. Add the fields to the Account object', 'C. Use a standard object unchanged', 'D. Build the data in a spreadsheet'],
        answer: 'A',
        explanation: 'A new entity with custom fields and a relationship is a custom object with a lookup to Account — the standard data-model configuration. Adding fields to Account, using a standard object or a spreadsheet each fail the requirement.'
      },
      {
        prompt: 'A team must automate an approval process when a record meets certain criteria. The most appropriate tool is:',
        options: ['A. An approval process, or a Flow that handles the approval', 'B. A manual email', 'C. A report', 'D. A page layout'],
        answer: 'A',
        explanation: 'Approval processes, or Flows that orchestrate approvals, automate the criteria-based approval workflow — the standard approach. Manual emails, reports or layouts do not automate the approval.'
      },
      {
        prompt: 'A sales manager needs a summary of pipeline value by stage, updated as the data changes. The most appropriate tool is:',
        options: ['A. A dashboard with a report summarising opportunity value by stage', 'B. A static spreadsheet', 'C. A page layout change', 'D. An email template'],
        answer: 'A',
        explanation: 'A report summarising opportunity value by stage, displayed on a dashboard, delivers the live pipeline view — the standard reporting approach. Static spreadsheets, layouts or email templates do not produce the live summary.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam guide, not live exam items.'
  },
  examDay: {
    summary: 'The Salesforce Administrator exam is a 60-scored-question, 105-minute proctored exam delivered online or at a Kryterion test centre. Bring the required identification matching your registration and your exam confirmation; personal items go in the locker. Arrive early for a centre session or complete the online environment check. Pace at about 1.75 minutes per scored item, flag uncertain items for review, and budget time for the scenario items. Your result is reported as pass/fail after the exam, with the section breakdown. If you do not pass, the retake policy allows a reduced-fee retake within the window. On a pass, the certification is valid for three years and renewed by passing the current exam or the maintenance path. The afterwards matters: record the renewal date, and plan the next Salesforce credential — typically the Advanced Administrator or a consultant certification — while the platform knowledge is fresh.',
    bring: ['Required identification matching your registration', 'Exam confirmation', 'For online delivery: a working webcam and quiet space'],
    leave: ['Phone and other devices within the proctor\'s view', 'Notes and open browser tabs — the exam is closed book'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the delivery mode and complete check-in or the environment test.' },
      { time: 'Exam', detail: '60 scored questions in 105 minutes; pace ~1.75 minutes per item.' },
      { time: 'After submit', detail: 'Pass/fail is reported with the section breakdown.' },
      { time: 'Next', detail: 'Record the 3-year validity and plan the next credential.' }
    ],
    rules: [
      'The exam is proctored and closed book',
      '105 minutes for 60 scored questions; the clock does not pause',
      'The certification is valid 3 years, renewed by exam or maintenance'
    ],
    afterwards: 'On a pass, your Administrator certification is valid for three years; renew by exam or maintenance. On a fail, use the reduced-fee retake within the window after additional study.'
  }
};

export default data;
