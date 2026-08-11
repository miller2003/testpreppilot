const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers Microsoft and other IT certifications. Exam structure, fees and rules come from the vendor certification pages, which are revised and sometimes retired on fixed schedules; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against Microsoft\'s SC-900 exam page and study guide, and BLS OOH Information Security Analysts (SOC 15-1212), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$124,910 median for information security analysts (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "SC-900" — the Microsoft Security, Compliance and Identity Fundamentals certification validates foundational security concepts on Microsoft\'s stack, and the wage question belongs to the role you perform with it. The closest official BLS occupation for the security careers the credential serves is Information Security Analysts, SOC 15-1212, which had a May 2024 median wage of $124,910, with the lowest 10 percent under $71,280 and the highest 10 percent above $173,780, with Computer Support Specialists (SOC 15-1231, $61,550) as the entry benchmark. The fit must be read with an honest caveat: SC-900 is an entry-level fundamentals credential, so the realistic benchmark for a new holder sits far below the analyst median — the credential typically appears on the resume of a student, a career-changer or an IT professional adding security literacy, and the analyst wage applies only after the experience the median describes. BLS counted 182,300 information security analyst jobs in 2024 and projects a striking 30 percent growth from 2024 to 2034, with about 17,500 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and an entry certificate carries no wage premium in government data. Read the number as the market for the occupation the certificate is a step toward.',
    rows: [
      { label: 'Median annual wage, information security analysts (destination market)', value: '$124,910', note: 'BLS OOH, SOC 15-1212, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $71,280', note: 'BLS OOH, SOC 15-1212, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $173,780', note: 'BLS OOH, SOC 15-1212, May 2024' },
      { label: 'Median, computer support specialists (entry benchmark)', value: '$61,550', note: 'BLS OOH, SOC 15-1231, May 2024' }
    ],
    growth: 'BLS projects 30 percent growth for information security analysts from 2024 to 2034, about 17,500 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Information Security Analysts', url: 'https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm' }
  },
  passRate: {
    headline: 'Microsoft publishes no pass rate — it publishes the passing score: 700 of 1000, with a 40-60 question, 45-minute exam',
    summary: 'Microsoft does not publish cohort pass rates for its certification exams, and third-party surveys are not official data, so we do not treat them as authoritative. What Microsoft does publish is the format and the passing standard: the SC-900 exam has 40-60 questions with a 45-minute time limit, and a passing score of 700 on the 100-1000 scale. The exam is delivered at Pearson VUE centres or through online proctoring, and Fundamentals certifications do not expire. The exam content follows the published study guide: the concepts of security, compliance and identity; the capabilities of Microsoft Entra ID (identity and access); the Microsoft security solutions (Microsoft Defender products and Microsoft Sentinel); and the compliance management and governance tools (the Purview portal and compliance capabilities). The absence of a published pass rate is not an absence of standards: the 700 line is a moderate bar for an entry-level fundamentals exam, and the exam rewards familiarity with the Microsoft security product family rather than deep configuration. The practical reading: target 80 percent-plus on practice, use Microsoft\'s free learning paths, and treat the credential as the entry rung toward the role-based security certifications (SC-200, SC-300, SC-100) that benchmark the analyst wages.',
    source: { label: 'Microsoft Learn - SC-900: Security, Compliance and Identity Fundamentals', url: 'https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-identity-fundamentals/' },
    caveat: 'Microsoft publishes the passing score and format but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The SC-900 exam is a 40-60 question, 45-minute exam with a 700/1000 passing score, built on the published study guide: security, compliance and identity concepts; the Microsoft Entra ID identity capabilities; the Microsoft security solutions; and the compliance and governance tools. The exam is an entry-level fundamentals test that rewards a working familiarity with the Microsoft security product family. A defensible plan runs 20 to 40 hours over 2 to 3 weeks. Week one: the concepts — the shared-responsibility model, the defence-in-depth layers, and the identity concepts — using Microsoft\'s free learning path. Week two: the product capabilities — Entra ID (identity and access), the Defender products and Sentinel (security operations), and the Purview compliance portal — learning what each solution is for. Week three: practice-question drilling and a timed practice exam at the real format. The plan is coverage-based because the exam rewards breadth across the product family; a candidate with basic security exposure moves quickly through the modules.',
    totalHours: '20-40 hours over 2-3 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Security, compliance, identity concepts', tasks: ['Shared responsibility and defence in depth', 'Identity and access concepts', 'Compliance and governance basics'], hours: 10 },
      { label: 'Week 2', focus: 'Microsoft solutions', tasks: ['Microsoft Entra ID capabilities', 'Defender products and Sentinel', 'Purview and compliance tools'], hours: 14 },
      { label: 'Week 3', focus: 'Drill and simulate', tasks: ['Practice-question drilling in volume', 'One timed practice exam', 'Review weak areas'], hours: 10 }
    ],
    variants: [
      { label: 'Working in IT', detail: 'Compress the concepts week; the Microsoft product names and purposes are the new content.' },
      { label: 'New to security', detail: 'Add a week of general security concepts before the product modules.' }
    ]
  },
  prepStrategies: {
    summary: 'The SC-900 exam rewards breadth across the Microsoft security product family, so the dominant strategy is systematic coverage with a product-purpose focus: learn what each solution is for — Entra ID for identity, the Defender products for protection, Sentinel for detection and response, Purview for compliance — because the exam asks purpose-level questions. Second, use Microsoft\'s free learning path and the official study guide as the primary resources; they are the authoritative scope and are free. Third, master the concept layer: the shared-responsibility model and the defence-in-depth layers are tested directly, and candidates who skip them miss the conceptual items. Fourth, drill the compliance and governance material, a distinct block that candidates focused on the security tools often miss. Finally, take at least one timed practice exam at the real 45-minute format; the short window rewards efficient reading, and the practice assessments mirror the item style.',
    items: [
      { title: 'Learn products by purpose', detail: 'Entra ID, Defender, Sentinel and Purview — what each is for.' },
      { title: 'Use the free official resources', detail: 'Microsoft Learn and the study guide are free and authoritative.' },
      { title: 'Master the concept layer', detail: 'Shared responsibility and defence in depth are tested directly.' },
      { title: 'Drill compliance and governance', detail: 'A distinct block; security-tool-only study misses it.' },
      { title: 'Run one timed practice exam', detail: '45 minutes rewards efficient reading; practise the pace.' }
    ]
  },
  resourceComparison: {
    summary: 'SC-900 prep is inexpensive because Microsoft provides the core resources free. The Microsoft Learn learning path and the official study guide cover the scope at no cost, and Microsoft\'s practice assessments are free. Third-party providers sell SC-900 courses and practice exams at roughly $30-$200; the free official stack is sufficient for a disciplined candidate. The exam fee is about $99. A realistic total budget is $100 to $300 including the exam fee. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn learning path', values: ['Free', 'Official online modules', 'The authoritative scope; the primary resource'] },
      { label: 'Official study guide', values: ['Free', 'Official PDF', 'The exam-scope reference'] },
      { label: 'Microsoft practice assessment', values: ['Free', 'Official online practice', 'The closest official item style'] },
      { label: 'Third-party video courses', values: ['$30-$150', 'Video courses and quizzes', 'Structured walkthrough of the scope'] },
      { label: 'Practice-exam products', values: ['$20-$80', 'Online simulated exams', 'Extra drilling volume'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the SC-900 exam fee is about $99; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common SC-900 mistake is studying one product deeply and skipping the breadth: candidates who learn Microsoft Defender but cannot place Sentinel, Purview or Entra ID miss the purpose-level items, which dominate the exam. The fix is balanced product coverage. The second mistake is studying configuration instead of concepts — the SC-900 tests what the solutions are for and the shared-responsibility model, not how to configure them. Third, candidates skip the compliance and governance block, a distinct tested area. Fourth, some candidates never take a timed practice exam and misjudge the 45-minute window. Finally, treating SC-900 as the destination misses the point: it is the entry rung of the Microsoft security track, and the role-based certifications (SC-200, SC-300, SC-100) are what employers hire on.',
    items: [
      { mistake: 'Studying one product deeply', fix: 'Cover the whole product family; the exam tests purpose-level breadth.' },
      { mistake: 'Studying configuration depth', fix: 'The SC-900 tests concepts and product purposes, not configuration.' },
      { mistake: 'Skipping compliance and governance', fix: 'A distinct tested block; cover it.' },
      { mistake: 'Never timing a practice exam', fix: '45 minutes rewards efficient reading; run one timed practice.' },
      { mistake: 'Treating SC-900 as the finish', fix: 'Plan the role-based track (SC-200, SC-300, SC-100).' }
    ]
  },
  questionTypes: {
    summary: 'The SC-900 exam is a 40-60 question multiple-choice exam in 45 minutes. The items test the published study guide: security, compliance and identity concepts; the Microsoft Entra ID capabilities; the security solutions; and the compliance and governance tools — with many items asking what a solution is for, which solution fits a described need, or which concept applies. Samples below are editor-written illustrations of the published study guide, not live exam items; they show the concept-and-purpose style of the real items.',
    types: [
      { name: 'Concept items', share: 'Largest block', detail: 'Shared responsibility, defence in depth, identity concepts.' },
      { name: 'Solution-purpose items', share: 'Large block', detail: 'Which Microsoft security solution fits a described need.' },
      { name: 'Compliance and governance items', share: 'Meaningful block', detail: 'Purview capabilities and compliance concepts.' }
    ],
    samples: [
      {
        prompt: 'A security team needs a cloud-native SIEM to analyse security data across the organisation. The most appropriate Microsoft solution is:',
        options: ['A. Microsoft Sentinel', 'B. Microsoft Entra ID', 'C. Microsoft Purview', 'D. Microsoft Defender for Cloud Apps'],
        answer: 'A',
        explanation: 'Sentinel is the cloud-native SIEM and SOAR for security-data analysis. Entra ID manages identity, Purview handles compliance and data governance, and Defender for Cloud Apps secures cloud apps — none is the SIEM.'
      },
      {
        prompt: 'Under the shared-responsibility model for an IaaS workload, the customer is generally responsible for:',
        options: ['A. Securing what they configure — the OS, applications and data', 'B. Physical security of the data centre', 'C. The hypervisor', 'D. The network hardware'],
        answer: 'A',
        explanation: 'For IaaS, the customer secures what they configure — the operating system, applications and data — while the provider secures the physical infrastructure and hypervisor. The other options are provider responsibilities.'
      },
      {
        prompt: 'Which Microsoft Entra ID capability provides multi-factor authentication for user sign-ins?',
        options: ['A. Microsoft Entra ID (Azure AD) with MFA', 'B. Microsoft Sentinel', 'C. Microsoft Purview', 'D. Microsoft Defender for Endpoint'],
        answer: 'A',
        explanation: 'Multi-factor authentication is an identity capability of Microsoft Entra ID. Sentinel is the SIEM, Purview is compliance, and Defender for Endpoint protects devices — none provides identity MFA.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published study guide, not live exam items.'
  },
  examDay: {
    summary: 'The SC-900 exam is a 40-60 question, 45-minute computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at under a minute per item, flag uncertain items for review, and finish with time to spare. You receive your score on screen immediately, with the official result following; Microsoft reports your scaled score against the 700 line. If you fail, you may retake after a waiting period. On a pass, the Fundamentals certification does not expire. The afterwards matters: add the credential to your Microsoft Learn profile, and plan the next rung of the Microsoft security track — typically the SC-200 security operations analyst — while the concepts are fresh.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '40-60 questions in 45 minutes; pace under a minute per item.' },
      { time: 'After submit', detail: 'Scaled score appears on screen against the 700/1000 passing line.' },
      { time: 'Next', detail: 'Add the credential to your profile and plan the next security rung.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '45 minutes for 40-60 questions; the clock does not pause',
      'Fundamentals certifications do not expire'
    ],
    afterwards: 'On a pass, your SC-900 is permanent. On a fail, retake after additional study. Plan the role-based track (typically SC-200) as the next step.'
  }
};

export default data;
