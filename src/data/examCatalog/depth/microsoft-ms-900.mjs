const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers Microsoft and other IT certifications. Exam structure, fees and rules come from the vendor certification pages, which are revised and sometimes retired on fixed schedules; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against Microsoft\'s MS-900 exam page and study guide, and BLS OOH Computer Support Specialists (SOC 15-1231), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$61,550 median for computer support specialists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "MS-900" — the Microsoft 365 Fundamentals certification validates foundational knowledge of Microsoft 365 cloud services, and the wage question belongs to the role you perform with it. The closest official BLS occupation for the typical MS-900 holder is Computer Support Specialists, SOC 15-1231, which had a May 2024 median wage of $61,550, with the lowest 10 percent under $37,670 and the highest 10 percent above $101,440. The fit is deliberate: MS-900 is an entry-level fundamentals credential commonly earned by IT support staff, help-desk professionals and business users who work with Microsoft 365, and BLS counted 614,800 computer support specialist jobs in 2024, projecting 6 percent growth from 2024 to 2034 with about 62,900 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and a fundamentals certification carries no wage premium in government data; its value is as a structured introduction to the Microsoft cloud ecosystem and a stepping stone to the role-based certifications (such as the MD-102 endpoint administrator) that benchmark higher. Read the number as the market for the entry IT roles the credential serves.',
    rows: [
      { label: 'Median annual wage, computer support specialists', value: '$61,550', note: 'BLS OOH, SOC 15-1231, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $37,670', note: 'BLS OOH, SOC 15-1231, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $101,440', note: 'BLS OOH, SOC 15-1231, May 2024' },
      { label: 'Median, network and computer systems administrators (senior track)', value: '$96,900', note: 'BLS OOH, SOC 15-1244, May 2024' }
    ],
    growth: 'BLS projects 6 percent growth for computer support specialists from 2024 to 2034, about 62,900 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Computer Support Specialists', url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm' }
  },
  passRate: {
    headline: 'Microsoft publishes no pass rate — it publishes the passing score: 700 of 1000, with a 40-60 question, 45-minute exam',
    summary: 'Microsoft does not publish cohort pass rates for its certification exams, and third-party surveys are not official data, so we do not treat them as authoritative. What Microsoft does publish is the format and the passing standard: the MS-900 exam has 40-60 questions with a 45-minute time limit, and a passing score of 700 on the 100-1000 scale. The exam is delivered at Pearson VUE centres or through online proctoring, and the certification does not expire in the traditional sense (Microsoft Fundamentals certifications have no renewal requirement). The exam content follows the published study guide: cloud concepts and the Microsoft 365 value proposition; core Microsoft 365 services (Exchange Online, SharePoint, Teams, and the productivity apps); security, compliance, privacy and trust in Microsoft 365; and Microsoft 365 pricing, licensing and support. The absence of a published pass rate is not an absence of standards: the 700 line is a moderate bar for an entry-level fundamentals exam, and the exam rewards familiarity with the Microsoft 365 product family rather than deep technical depth. The practical reading: target 80 percent-plus on practice, use Microsoft\'s free learning paths and the official study guide, and treat the credential as the entry rung of the Microsoft 365 certification track.',
    source: { label: 'Microsoft Learn - MS-900: Microsoft 365 Fundamentals', url: 'https://learn.microsoft.com/en-us/credentials/certifications/microsoft-365-fundamentals/' },
    caveat: 'Microsoft publishes the passing score and format but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The MS-900 exam is a 40-60 question, 45-minute exam with a 700/1000 passing score, built on the published study guide: cloud concepts and the Microsoft 365 value proposition; the core Microsoft 365 services; security, compliance, privacy and trust; and pricing, licensing and support. The exam is an entry-level fundamentals test that rewards a working familiarity with the Microsoft 365 product family. A defensible plan runs 20 to 40 hours over 2 to 3 weeks. Week one: cloud concepts and the Microsoft 365 value proposition, using Microsoft\'s free learning path and the official study guide; understand the differences between the Microsoft 365 plans. Week two: the core services — Exchange Online, SharePoint, Teams, OneDrive and the productivity apps — learning what each service is for and how they connect; then security and compliance, including Microsoft Entra ID basics, the compliance portal and the trust principles. Week three: pricing, licensing and support models, then practice-question drilling and a timed practice exam at the real format. The plan is coverage-based because the exam rewards breadth across the product family; a candidate with everyday Microsoft 365 exposure moves quickly through the service modules.',
    totalHours: '20-40 hours over 2-3 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Cloud concepts and value', tasks: ['Microsoft Learn learning path', 'Cloud concepts and the M365 value proposition', 'The Microsoft 365 plan options'], hours: 10 },
      { label: 'Week 2', focus: 'Core services and security', tasks: ['Exchange, SharePoint, Teams and OneDrive', 'Microsoft Entra ID and identity basics', 'Compliance, privacy and trust principles'], hours: 14 },
      { label: 'Week 3', focus: 'Pricing and drill', tasks: ['Pricing, licensing and support models', 'Practice-question drilling in volume', 'One timed practice exam at the real format'], hours: 10 }
    ],
    variants: [
      { label: 'Daily Microsoft 365 user', detail: 'Compress the services week; the security/compliance and licensing material is the new content.' },
      { label: 'New to Microsoft 365', detail: 'Add a week of product tours and free trials before the study guide.' }
    ]
  },
  prepStrategies: {
    summary: 'The MS-900 exam rewards breadth across the Microsoft 365 product family, so the dominant strategy is systematic coverage of the study guide with a product-purpose focus: learn what each service is for and how the pieces connect, because the exam asks purpose-level questions rather than deep configuration. Second, use Microsoft\'s free learning path and the official study guide as the primary resources — they are the authoritative scope and are free, which makes the MS-900 one of the cheapest certifications to prepare for. Third, drill the security and compliance material deliberately: identity (Microsoft Entra ID), the compliance portal and the trust principles are a distinct block, and candidates who focus only on the productivity apps routinely lose those items. Fourth, understand the licensing and pricing models — which plan includes which service — because the exam tests plan comparisons. Finally, take at least one timed practice exam at the real 45-minute format; the short window rewards efficient reading, and the practice exams available from Microsoft and third parties mirror the item style.',
    items: [
      { title: 'Learn services by purpose', detail: 'The exam asks what each service is for, not deep configuration.' },
      { title: 'Use the free official resources', detail: 'Microsoft Learn and the study guide are free and authoritative.' },
      { title: 'Drill security and compliance', detail: 'Entra ID, the compliance portal and trust are a distinct block.' },
      { title: 'Learn the licensing models', detail: 'Which plan includes which service is tested directly.' },
      { title: 'Run one timed practice exam', detail: '45 minutes rewards efficient reading; practise the pace.' }
    ]
  },
  resourceComparison: {
    summary: 'MS-900 prep is inexpensive because Microsoft provides the core resources free. The Microsoft Learn learning path and the official study guide cover the scope at no cost, and Microsoft\'s own practice assessments are free. Third-party providers sell MS-900 courses and practice exams at roughly $30-$200, with many candidates using a video course plus a practice bank; the free official stack is sufficient for a disciplined candidate. The exam fee is about $99. A realistic total budget is $100 to $300 including the exam fee. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn learning path', values: ['Free', 'Official online modules', 'The authoritative scope; the primary resource'] },
      { label: 'Official study guide', values: ['Free', 'Official PDF', 'The exam-scope reference'] },
      { label: 'Microsoft practice assessment', values: ['Free', 'Official online practice', 'The closest official item style'] },
      { label: 'Third-party video courses', values: ['$30-$150', 'Video courses and quizzes', 'Structured walkthrough of the scope'] },
      { label: 'Practice-exam products', values: ['$20-$80', 'Online simulated exams', 'Extra drilling volume'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the MS-900 exam fee is about $99; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common MS-900 mistake is going too deep on the productivity apps and skipping the security and compliance block: candidates who know Teams and SharePoint cold but cannot answer identity or compliance items lose a distinct share of the exam. The fix is balanced coverage. The second mistake is studying for a role-based exam instead of a fundamentals exam — the MS-900 tests what services are for, not how to configure them, so configuration-depth study wastes time. Third, candidates skip the licensing material, which the exam tests with plan-comparison items. Fourth, some candidates never take a timed practice exam and misjudge the 45-minute window; run one. Finally, treating the MS-900 as the destination misses the point: it is the entry rung of the Microsoft 365 track, and the role-based certifications (such as the MD-102) are what employers hire on, so plan the path while the fundamentals are fresh.',
    items: [
      { mistake: 'Skipping security and compliance', fix: 'Identity, compliance and trust are a distinct tested block.' },
      { mistake: 'Studying configuration depth', fix: 'The MS-900 tests what services are for, not how to configure them.' },
      { mistake: 'Ignoring the licensing material', fix: 'Plan-comparison items are a real share of the exam.' },
      { mistake: 'Never timing a practice exam', fix: '45 minutes rewards efficient reading; run one timed practice.' },
      { mistake: 'Treating MS-900 as the finish', fix: 'Plan the role-based track (MD-102 and beyond).' }
    ]
  },
  questionTypes: {
    summary: 'The MS-900 exam is a 40-60 question multiple-choice exam in 45 minutes. The items test the published study guide: cloud concepts, the Microsoft 365 value proposition, the core services, security and compliance, and pricing and licensing — with many items asking what a service is for, which service fits a described need, or which plan includes a capability. The exam rewards breadth and product familiarity rather than configuration depth. Samples below are editor-written illustrations of the published study guide, not live exam items; they show the purpose-level style of the real items.',
    types: [
      { name: 'Service-purpose items', share: 'Largest block', detail: 'What each Microsoft 365 service is for and when to use it.' },
      { name: 'Security and compliance items', share: 'Large block', detail: 'Identity, compliance portal and trust principles.' },
      { name: 'Licensing and pricing items', share: 'Meaningful block', detail: 'Which plan includes which capability.' }
    ],
    samples: [
      {
        prompt: 'A company wants a service for real-time collaboration on documents with version history and co-authoring. The most appropriate Microsoft 365 service is:',
        options: ['A. SharePoint Online with OneDrive', 'B. Exchange Online', 'C. Microsoft Entra ID', 'D. Power BI'],
        answer: 'A',
        explanation: 'SharePoint Online and OneDrive provide document storage with co-authoring and version history — the collaboration-and-document service. Exchange Online is email, Entra ID is identity, and Power BI is analytics.'
      },
      {
        prompt: 'Which Microsoft 365 service is primarily responsible for identity and access management?',
        options: ['A. Microsoft Entra ID', 'B. Exchange Online', 'C. Microsoft Teams', 'D. Yammer'],
        answer: 'A',
        explanation: 'Microsoft Entra ID (formerly Azure AD) provides identity and access management across Microsoft 365. Exchange, Teams and Yammer are messaging and collaboration services, not identity services.'
      },
      {
        prompt: 'A user asks which Microsoft 365 plan tier includes the Microsoft 365 Apps (Word, Excel, PowerPoint). The general answer is:',
        options: ['A. All Microsoft 365 plans that include the desktop apps', 'B. Only the Enterprise plans', 'C. No Microsoft 365 plan includes them', 'D. Only the free web versions'],
        answer: 'A',
        explanation: 'The desktop Microsoft 365 Apps are included in the plans that bundle them — the Business and Enterprise tiers that include the apps, while some lower tiers offer only the web versions. The exam tests this plan-capability distinction.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published study guide, not live exam items.'
  },
  examDay: {
    summary: 'The MS-900 exam is a 40-60 question, 45-minute computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at under a minute per item, flag uncertain items for review, and finish with time to spare — the short window rewards efficient reading. You receive your score on screen immediately, with the official result and score report following; Microsoft reports your scaled score against the 700 line. If you fail, you may retake after a waiting period. On a pass, the Fundamentals certification does not expire and needs no renewal. The afterwards matters: add the credential to your Microsoft Learn profile, and plan the next rung of the Microsoft 365 track — typically the MD-102 endpoint administrator for support careers — while the fundamentals are fresh.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '40-60 questions in 45 minutes; pace under a minute per item.' },
      { time: 'After submit', detail: 'Scaled score appears on screen against the 700/1000 passing line.' },
      { time: 'Next', detail: 'Add the credential to your profile and plan the next Microsoft rung.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '45 minutes for 40-60 questions; the clock does not pause',
      'Fundamentals certifications do not expire'
    ],
    afterwards: 'On a pass, your MS-900 is permanent. On a fail, retake after additional study. Plan the role-based track (typically MD-102) as the next step.'
  }
};

export default data;
