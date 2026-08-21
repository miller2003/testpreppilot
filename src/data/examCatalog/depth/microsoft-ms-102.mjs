const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'Microsoft certification structure comes from Microsoft Learn official pages and is revised with each exam update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the MS-102 exam structure, domains, and scoring against Microsoft Learn official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect network-and-systems-administrator pay at a May 2024 median of $96,800 (BLS) — MS-102 is the Microsoft 365 administrator certification, and the admin roles it serves sit across the IT administration occupations',
    summary: 'The direct answer is that the MS-102 (Microsoft 365 Administrator) certification serves IT administration roles that BLS classifies primarily under network and computer systems administrators (SOC 15-1244), at a May 2024 median annual wage of $96,800, with the lowest 10 percent under about $60,000 and the highest 10 percent above about $150,000. The honest framing is that the certification does not set pay — IT admin salaries are set by market, employer, and title — but the credential signals Microsoft 365 tenant administration competence (identity, security, compliance, and deployment) that employers list in Microsoft-centric admin roles, and it sits in the growth segment of IT: BLS projects about 4 percent employment decline for network and systems administrators from 2024 to 2034 as on-premises administration shifts to cloud, while the cloud-adjacent skills the exam tests are the part of the role that remains in demand. The exam itself is the Microsoft 365 Administrator certification path: MS-102 requires passing the exam (approximately 40 to 60 questions, 150 minutes, with a passing score around 700 on the 100-900 scale), and it is the successor to the older MS-100/MS-101 exams, covering tenant management, identity and access (Entra ID), security and compliance, and Microsoft 365 services. The practical read: MS-102 is the flagship Microsoft 365 admin credential, commonly paired with the MS-700 (Teams) or other role-based exams, and the certification\u2019s value is the Microsoft-ecosystem employability signal — Microsoft-centric admin and cloud roles list it as a preferred credential. For candidates deciding whether to pursue it, the exam rewards hands-on tenant experience, and the strongest preparation combines Microsoft Learn modules with a trial-tenant lab.',
    rows: [
      { label: 'Median annual wage, network & systems administrators', value: '$96,800', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 15-1244)' },
      { label: 'Lowest 10 percent', value: 'less than $60,000', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $150,000', note: 'BLS OOH, May 2024' },
      { label: 'The certification itself', value: 'Role-based credential', note: 'Microsoft 365 Administrator; valid 1 year, renewable' }
    ],
    growth: 'BLS projects a 4% employment decline for network and systems administrators from 2024 to 2034 as on-premises administration shifts to cloud, with ~14,300 annual openings from replacement.',
    source: { label: 'BLS OOH — Network and Computer Systems Administrators', url: 'https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm' }
  },
  passRate: {
    headline: 'Microsoft publishes no pass rates — MS-102 is scored pass/fail around 700/900 with a ~40-60 question, 150-minute exam, and Microsoft reports scores rather than cohort pass data',
    summary: 'The core fact is that Microsoft does not publish pass rates for MS-102, and none is available from an independent source, because Microsoft reports candidate scores rather than cohort pass percentages. What is published is the exam structure: MS-102 is a role-based exam of approximately 40 to 60 questions with 150 minutes allowed, delivered at Pearson VUE testing centers or online proctored, with a passing score of 700 on the 100-900 scale; the exam is adaptive in the sense that Microsoft\u2019s exams use a variable question set, and Microsoft publishes the passing score policy (some exams have a short form). The exam covers four measured domains: deploy and manage a Microsoft 365 tenant; implement and manage identity and access (Microsoft Entra ID); manage security and threats; and manage compliance. Because Microsoft publishes the exam skills-measured document, the preparation is studying the official Microsoft Learn learning paths and validating with hands-on tenant experience; Microsoft\u2019s exams reward applied knowledge, and the classic failure mode is studying documentation without lab practice. The certification is valid for one year and renewable through Microsoft\u2019s renewal exam (a short online assessment), which is a distinctive feature of Microsoft\u2019s current certification model. The honest advice is to treat the skills-measured document as the syllabus, build a trial tenant to practise the administration tasks, and take Microsoft\u2019s official practice assessment (free in some cases) to calibrate readiness before booking.',
    source: { label: 'Microsoft Learn — MS-102 exam page', url: 'https://learn.microsoft.com/en-us/credentials/certifications/m365-administrator/' },
    caveat: 'Microsoft publishes no pass rates; the passing score is 700/900 and certification renews annually.'
  },
  studyPlan: {
    summary: 'Plan for roughly 6 to 10 weeks and 60 to 100 hours of study for MS-102, structured around the four measured domains — tenant deployment, identity and access, security, and compliance — with a trial-tenant lab as the highest-yield study tool. The exam\u2019s domain weights favour identity and access and security management, so study time should be allocated there first. The most effective sequence is: first, complete the official Microsoft Learn learning paths for the exam, working the modules in order; second, stand up a Microsoft 365 developer or trial tenant and practise every admin task the modules cover — user provisioning, role management, Conditional Access, security defaults, and compliance policies; third, take Microsoft\u2019s official practice assessment to calibrate; fourth, re-study the weak domains; and fifth, book the exam. The highest-yield habit is the hands-on tenant work: Microsoft\u2019s exams reward applied administration, and candidates with tenant practice score well above those who only read. Budget the identity and security domains the most time, since they carry the largest question share and are where the exam is hardest. The final week should be a light review of the skills-measured document and the lab notes. After passing, plan the annual renewal assessment within 12 months, and consider pairing MS-102 with a role-based exam like MS-700 for the Microsoft 365 specialist profile.',
    totalHours: '60-100 study hours over 6-10 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Tenant + identity', tasks: ['Complete the Microsoft Learn paths for tenant and identity', 'Stand up a trial tenant', 'Practise user and role management'], hours: 25 },
      { label: 'Weeks 3-6', focus: 'Security + compliance', tasks: ['Work the security and threat-management modules', 'Practise Conditional Access and compliance policies', 'Take the official practice assessment'], hours: 35 },
      { label: 'Weeks 7-8', focus: 'Lab + gap closure', tasks: ['Repeat weak admin tasks in the tenant', 'Re-study weak domains', 'Take a second practice pass'], hours: 20 },
      { label: 'Final week', focus: 'Exam readiness', tasks: ['Review the skills-measured document', 'Light lab review', 'Book the exam'], hours: 10 }
    ],
    variants: [
      { label: 'Short-form exam option', detail: 'Microsoft offers a shortened version of some exams; check the MS-102 page for the current format.' },
      { label: 'MS-700 (Teams Administrator)', detail: 'The companion role-based exam for the Microsoft 365 specialist profile.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes MS-102 is "study the official learning paths, then practise every task in a trial tenant," and the single biggest error is reading Microsoft documentation without hands-on administration, which the exam rewards heavily. A second proven approach is allocating study by domain weight — identity and security carry the largest shares, and the exam is hardest there — rather than studying the four domains evenly. Third, use the official practice assessment to calibrate: Microsoft\u2019s practice tests mirror the question style, and your score is the honest readiness signal. Fourth, master the Conditional Access and Entra ID tasks specifically, since identity and access items are both numerous and scenario-heavy. Fifth, plan the annual renewal: the certification is valid 12 months, and the renewal assessment is a short online exam that must be completed before expiry. Finally, confirm the exam delivery format — Pearson VUE center or online proctored — and practise the scheduling logistics, since online proctoring has its own environment requirements.',
    items: [
      { title: 'Lab every task', detail: 'A trial tenant is the highest-yield study tool; the exam rewards applied admin.' },
      { title: 'Weight identity and security', detail: 'The largest domain shares and the hardest items.' },
      { title: 'Use the official practice assessment', detail: 'The question style and readiness signal before booking.' },
      { title: 'Master Conditional Access and Entra ID', detail: 'Identity items are numerous and scenario-heavy.' },
      { title: 'Plan the annual renewal', detail: 'Certification renews in 12 months via a short assessment.' }
    ]
  },
  resourceComparison: {
    summary: 'MS-102 preparation costs are modest: the exam fee is $165, Microsoft Learn learning paths are free, and a trial tenant is free, so the main optional spend is a practice-question bank. The comparison below separates the official resources, the exam, and commercial prep, with prices current to this review. The buying rule is to spend on the official practice assessment and any subscription-based Q-bank that mirrors Microsoft\u2019s style, and to treat the free Learn paths as the syllabus.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn learning paths', values: ['Free', 'Online modules + labs', 'The official syllabus'] },
      { label: 'Microsoft 365 trial/developer tenant', values: ['Free', 'Hands-on tenant', 'Applied admin practice'] },
      { label: 'MS-102 exam registration', values: ['$165', 'Pearson VUE or online proctored', 'The exam itself'] },
      { label: 'Microsoft official practice assessment', values: ['~$0-25', 'Online practice exam', 'Readiness calibration'] },
      { label: 'Commercial Q-banks (e.g. MeasureUp, Whizlabs)', values: ['~$30-80', 'Online practice questions', 'Supplemental drilling'] }
    ],
    footnote: 'Prices approximate and dated to this review; the certification renews annually via a short assessment.'
  },
  commonMistakes: {
    summary: 'The most common mistake is studying documentation without tenant practice, which the exam\u2019s applied style punishes; the second is studying the four domains evenly and under-weighting identity and security, where the hardest items live. A third recurring error is booking the exam before taking the official practice assessment, converting a calibratable exam into a gamble. Candidates also routinely underestimate the Conditional Access and Entra ID depth, and many forget the one-year renewal, letting the certification lapse. Finally, some candidates skip the skills-measured document and study broad Microsoft 365 content, missing the specific domains the exam tests.',
    items: [
      { mistake: 'Reading without lab practice', fix: 'Practise every admin task in a trial tenant.' },
      { mistake: 'Even domain weighting', fix: 'Allocate study to identity and security first.' },
      { mistake: 'Booking without calibration', fix: 'Take the official practice assessment and read the score.' },
      { mistake: 'Underestimating identity depth', fix: 'Master Conditional Access and Entra ID scenarios.' },
      { mistake: 'Missing the annual renewal', fix: 'Complete the renewal assessment within 12 months.' }
    ]
  },
  questionTypes: {
    summary: 'MS-102 contains approximately 40 to 60 questions in 150 minutes, scored pass/fail at 700/900, covering four domains: deploy and manage a Microsoft 365 tenant, implement and manage identity and access, manage security and threats, and manage compliance. Item formats include multiple-choice, case-study items, and scenario questions. The samples below are editor-written illustrations of the published skills-measured document, not live exam items.',
    types: [
      { name: 'Tenant deployment & management', share: '~25%', detail: 'Tenant setup, licensing, and service configuration.' },
      { name: 'Identity & access (Entra ID)', share: '~30%', detail: 'Users, roles, Conditional Access, and authentication.' },
      { name: 'Security & threat management', share: '~25%', detail: 'Security defaults, Defender policies, and threat response.' },
      { name: 'Compliance', share: '~20%', detail: 'Compliance policies, retention, and sensitivity labels.' }
    ],
    samples: [
      {
        prompt: 'Which feature enforces sign-in policies based on user, location, and device signals?',
        options: ['A. Sensitivity labels', 'B. Conditional Access', 'C. Data loss prevention', 'D. Retention policies'],
        answer: 'B',
        explanation: 'Conditional Access evaluates signals to enforce access policies in Microsoft Entra ID.'
      },
      {
        prompt: 'A user is being assigned the least privilege needed to reset passwords. Which role fits?',
        options: ['A. Global Administrator', 'B. Password Administrator', 'C. Security Administrator', 'D. Compliance Administrator'],
        answer: 'B',
        explanation: 'The Password Administrator role can reset passwords without full global administrative rights.'
      },
      {
        prompt: 'Which tool is used to classify and protect documents with labels?',
        options: ['A. Microsoft Entra ID', 'B. Sensitivity labels', 'C. Intune', 'D. Microsoft Bookings'],
        answer: 'B',
        explanation: 'Sensitivity labels classify and protect documents and emails.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published skills-measured document, not live exam items.'
  },
  examDay: {
    summary: 'MS-102 is taken at a Pearson VUE testing center or online proctored: approximately 40 to 60 questions with 150 minutes, pass/fail at 700 on the 100-900 scale, with results typically available within a day or two. The core rules: bring valid photo ID, arrive early for center delivery, and for online proctoring complete the environment check — a quiet room, working webcam, and no second screens. The exam is closed-book with no personal items. After passing, the certification is active for 12 months, and Microsoft emails a renewal reminder before the renewal assessment window; the renewal is a short online assessment that must be passed before expiry. The most useful exam-day habits: pace at about 2.5 to 3 minutes per question, flag and return to case-study items, and read scenario questions for the Microsoft-tested answer rather than general admin habits. If you do not pass, Microsoft allows retakes after a 24-hour wait for the first retake (longer waits after subsequent attempts).',
    bring: ['Valid photo ID (center) or proctoring-ready environment (online)', 'Microsoft account credentials', 'Arrival 15-30 minutes early'],
    leave: ['Phone, smartwatch, and study materials', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Study', detail: 'Complete Learn paths, tenant labs, and the practice assessment.' },
      { time: 'Exam', detail: '40-60 questions in 150 minutes; 700/900 to pass.' },
      { time: 'Result', detail: 'Pass/fail in a day or two; certification valid 12 months.' },
      { time: 'Renewal', detail: 'Complete the renewal assessment before expiry.' }
    ],
    rules: ['~40-60 questions, 150 minutes', '700/900 passing score', 'Center or online proctored', 'Annual renewal assessment'],
    afterwards: 'Passing MS-102 earns the Microsoft 365 Administrator certification (valid 12 months), the flagship Microsoft 365 admin credential; renew annually and pair with role-based exams for a specialist profile.'
  }
};

export default data;
