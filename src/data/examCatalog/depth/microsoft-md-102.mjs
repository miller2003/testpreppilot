const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers Microsoft and other IT certifications. Exam structure, fees and rules come from the vendor certification pages, which are revised and sometimes retired on fixed schedules; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against Microsoft\'s MD-102 exam page and study guide, and BLS OOH Network and Computer Systems Administrators (SOC 15-1244), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$96,900 median for network and computer systems administrators (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "MD-102" — the Microsoft 365 Endpoint Administrator certification validates endpoint-management skill, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Network and Computer Systems Administrators, SOC 15-1244, which had a May 2024 median wage of $96,900, with the lowest 10 percent under $56,190 and the highest 10 percent above $157,420, with Computer Support Specialists (SOC 15-1231, $61,550) as the entry benchmark. The fit is deliberate: MD-102 holders work as endpoint administrators, systems administrators and IT-support leads who manage Windows endpoints, Intune, and the Microsoft 365 device stack, and the role sits between the support and administrator series in the labour market. BLS counted 217,500 network and computer systems administrator jobs in 2024 and projects 1 percent growth from 2024 to 2034, with about 15,100 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the certification\'s value is as a hiring signal for endpoint-management roles in Microsoft shops. Read the number as the market for the occupation the credential serves.',
    rows: [
      { label: 'Median annual wage, network and computer systems administrators', value: '$96,900', note: 'BLS OOH, SOC 15-1244, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $56,190', note: 'BLS OOH, SOC 15-1244, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $157,420', note: 'BLS OOH, SOC 15-1244, May 2024' },
      { label: 'Median, computer support specialists (entry benchmark)', value: '$61,550', note: 'BLS OOH, SOC 15-1231, May 2024' }
    ],
    growth: 'BLS projects 1 percent growth for network and computer systems administrators from 2024 to 2034, about 15,100 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Network and Computer Systems Administrators', url: 'https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm' }
  },
  passRate: {
    headline: 'Microsoft publishes no pass rate — the MD-102 exam has 40-60 questions in 120 minutes, passing 700 of 1000',
    summary: 'Microsoft does not publish cohort pass rates for its certification exams, and third-party surveys are not official data, so we do not treat them as authoritative. What Microsoft does publish is the format and the passing standard: the MD-102 exam has 40-60 questions with a 120-minute time limit, and a passing score of 700 on the 100-1000 scale. The exam is delivered at Pearson VUE centres or through online proctoring, and the Microsoft 365 Endpoint Administrator Associate certification is valid for one year and renewed by passing the renewal assessment. The exam content follows the published study guide: deploying Windows endpoints; managing identities; managing compliance and security; and managing, maintaining and protecting devices with Intune. The absence of a published pass rate is not an absence of standards: the 700 line on an Associate-level exam is a real bar, and the exam rewards hands-on knowledge of Windows deployment, Intune, Entra ID device management and the endpoint-security stack. The practical reading: target 80 percent-plus on practice, use Microsoft\'s official learning path, and note the one-year renewal cycle.',
    source: { label: 'Microsoft Learn - MD-102: Endpoint Administrator', url: 'https://learn.microsoft.com/en-us/credentials/certifications/m365-endpoint-administrator/' },
    caveat: 'Microsoft publishes the passing score and format but no pass rate; the Associate certification renews annually.'
  },
  studyPlan: {
    summary: 'The MD-102 is a 40-60 question, 120-minute exam with a 700/1000 passing score, built on the published study guide: deploying Windows endpoints, managing identities, managing compliance and security, and managing and protecting devices with Intune. A defensible plan runs 80 to 120 hours over 6 to 8 weeks. Weeks 1-2: Windows deployment — the deployment methods (Windows Autopilot, imaging), the Windows Update rings and the device lifecycle. Weeks 3-4: identity management — Entra ID join, device registration and the identity policies. Weeks 5-6: Intune — the device configuration profiles, the compliance policies, the app deployment and the endpoint protection. Weeks 7-8: scenario drilling and two full timed practice exams at the real format. The plan is hands-on-heavy because the exam rewards real Intune and deployment experience; a Microsoft 365 developer tenant supports the labs.',
    totalHours: '80-120 hours over 6-8 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Windows deployment', tasks: ['Windows Autopilot and imaging methods', 'Update rings and the device lifecycle', 'Hands-on deployment labs'], hours: 25 },
      { label: 'Weeks 3-4', focus: 'Identity management', tasks: ['Entra ID join and device registration', 'Identity and device policies', 'Conditional access basics'], hours: 25 },
      { label: 'Weeks 5-6', focus: 'Intune management', tasks: ['Device configuration profiles', 'Compliance policies and app deployment', 'Endpoint protection and Defender'], hours: 30 },
      { label: 'Weeks 7-8', focus: 'Drill and mocks', tasks: ['Scenario drilling in volume', 'Two full timed practice exams', 'Review weak domains'], hours: 25 }
    ],
    variants: [
      { label: 'Working endpoint admin', detail: 'The daily work accelerates the plan; focus study on the exam domains outside your daily work and the format.' },
      { label: 'From help-desk support', detail: 'Add 2 weeks of Windows administration and Intune fundamentals before the full plan.' }
    ]
  },
  prepStrategies: {
    summary: 'The MD-102 rewards hands-on endpoint-management experience, so the dominant strategy is lab work in a Microsoft 365 developer tenant: enroll test devices in Intune, create configuration and compliance profiles, and deploy apps, because the exam items test the management stack in practice. Second, master the Intune material deliberately — the device configuration, the compliance policies and the endpoint protection are the core of the exam, and candidates new to Intune under-prepare it. Third, learn the deployment methods: Autopilot vs imaging and when each fits is a distinct tested domain. Fourth, use Microsoft\'s official learning path and the study guide as the scope map, and hold yourself to 80 percent-plus on practice because the 700 line leaves little margin. Finally, remember the one-year renewal cycle: the Associate certification renews annually, so plan the renewal assessment from the start.',
    items: [
      { title: 'Practise in a developer tenant', detail: 'Intune enrollment, profiles and app deployment — the exam tests the stack.' },
      { title: 'Master the Intune material', detail: 'Configuration, compliance and protection are the core of the exam.' },
      { title: 'Learn the deployment methods', detail: 'Autopilot vs imaging and when each fits is a distinct domain.' },
      { title: 'Hold to 80%+ on practice', detail: 'The 700/1000 line leaves little margin.' },
      { title: 'Plan the annual renewal', detail: 'The Associate certification renews yearly; schedule the assessment.' }
    ]
  },
  resourceComparison: {
    summary: 'MD-102 prep spans official Microsoft resources and third-party courses. Microsoft\'s own materials — the study guide (free), the learning path and the practice assessments — are the authoritative source at no cost. Third-party providers sell MD-102 courses and practice exams at $50-$300. A Microsoft 365 developer tenant (free) supports the hands-on labs the exam rewards. A realistic total budget is $150 to $600 including the $165 exam fee. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn study guide + learning path', values: ['Free', 'Official online modules', 'The authoritative scope; the primary resource'] },
      { label: 'Microsoft practice assessment', values: ['Free', 'Official online practice', 'The closest official item style'] },
      { label: 'Third-party courses', values: ['$50-$300', 'Video courses and labs', 'Structured walkthrough of the domains'] },
      { label: 'Microsoft 365 developer tenant', values: ['$0', 'Real cloud environment', 'The Intune labs the exam rewards'] },
      { label: 'MD-102 exam', values: ['~$165', 'Computer-based exam', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the MD-102 exam fee is about $165; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common MD-102 mistake is studying theory without Intune practice: candidates who read about endpoint management but never enroll a device or build a profile meet the hands-on scenario items without the practical intuition they reward. The fix is developer-tenant lab work. The second mistake is under-preparing the deployment methods — Autopilot vs imaging — a distinct tested domain. Third, candidates confuse the identity and compliance pieces, which the exam tests with precise configuration choices. Fourth, many candidates never run a full timed practice exam and misjudge the 120-minute format. Finally, some candidates overlook the one-year renewal cycle and plan only for the exam itself.',
    items: [
      { mistake: 'Studying without Intune practice', fix: 'Enroll devices and build profiles in a developer tenant.' },
      { mistake: 'Under-preparing deployment methods', fix: 'Autopilot vs imaging is a distinct tested domain.' },
      { mistake: 'Confusing identity and compliance', fix: 'The exam tests precise configuration choices in both.' },
      { mistake: 'Skipping timed mocks', fix: '120 minutes for 40-60 questions; run two full timed exams.' },
      { mistake: 'Ignoring the annual renewal', fix: 'The Associate certification renews yearly; plan the assessment.' }
    ]
  },
  questionTypes: {
    summary: 'The MD-102 is a 40-60 question multiple-choice, case-study and scenario-based exam in 120 minutes. The items test the published study guide: Windows deployment, identity management, compliance and security, and Intune device management — with many scenario items asking which configuration, policy or tool fits a described endpoint-management need. Samples below are editor-written illustrations of the published study guide, not live exam items; they show the endpoint-management style of the real items.',
    types: [
      { name: 'Configuration scenario items', share: 'Largest block', detail: 'Which Intune profile, policy or tool fits a described need.' },
      { name: 'Deployment items', share: 'Large block', detail: 'Autopilot, imaging and update management.' },
      { name: 'Identity and security items', share: 'Meaningful block', detail: 'Entra ID device management and endpoint protection.' }
    ],
    samples: [
      {
        prompt: 'A company must deploy Windows to new devices with minimal manual effort and no custom imaging. The most appropriate method is:',
        options: ['A. Windows Autopilot with a configuration profile', 'B. A custom captured image deployed manually', 'C. Hand-built devices', 'D. Skipping the deployment'],
        answer: 'A',
        explanation: 'Windows Autopilot provisions new devices with minimal effort and no custom imaging — the standard modern-deployment method. Custom images, hand-built devices or skipping deployment each fail the automation requirement.'
      },
      {
        prompt: 'To enforce that only compliant devices can access corporate resources, the most appropriate control is:',
        options: ['A. Intune compliance policies with Conditional Access in Entra ID', 'B. A shared password', 'C. No access controls', 'D. A firewall rule'],
        answer: 'A',
        explanation: 'Intune compliance policies feed Conditional Access, which blocks non-compliant devices — the standard endpoint-access control. Shared passwords, no controls or firewalls each fail the compliance-gated access requirement.'
      },
      {
        prompt: 'A team must deploy a line-of-business app to a defined group of Windows devices automatically. The most appropriate approach is:',
        options: ['A. An Intune app deployment assigned to the device group', 'B. Manual installation on each device', 'C. Email the installer to users', 'D. A USB drive'],
        answer: 'A',
        explanation: 'Intune app deployment assigns the app to a device group and installs it automatically — the standard enterprise method. Manual installation, emailed installers or USB drives each fail the automated deployment requirement.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published study guide, not live exam items.'
  },
  examDay: {
    summary: 'The MD-102 is a 40-60 question, 120-minute computer-based exam at a Pearson VUE centre or through online proctoring, with a mix of multiple-choice, case-study and scenario items. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at roughly 2-3 minutes per item given the case studies, flag uncertain items for review, and budget time for the reading-heavy scenarios. You receive your score on screen immediately, with the official result following; Microsoft reports your scaled score against the 700 line. If you fail, you may retake after a waiting period. On a pass, the Associate certification is valid for one year and renewed by passing the free renewal assessment. The afterwards matters: schedule the renewal assessment before the expiry, and record the renewal date.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '40-60 questions in 120 minutes; pace for the case studies, flag and review.' },
      { time: 'After submit', detail: 'Scaled score appears on screen against the 700/1000 passing line.' },
      { time: 'Next', detail: 'Schedule the annual renewal assessment and record the date.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '120 minutes for 40-60 questions; the clock does not pause',
      'The Associate certification renews annually via the renewal assessment'
    ],
    afterwards: 'On a pass, your MD-102 is valid for one year; pass the renewal assessment before expiry. On a fail, retake after additional study.'
  }
};

export default data;
