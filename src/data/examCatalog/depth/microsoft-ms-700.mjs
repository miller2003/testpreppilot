const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & Microsoft certifications desk',
    bio: 'Microsoft certification structure comes from Microsoft Learn official pages and is revised with each exam update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the MS-700 exam structure, domains, and scoring against Microsoft Learn official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect network-and-systems-administrator pay at a May 2024 median of $96,800 (BLS) — MS-700 is the Teams Administrator Associate certification, a role-based credential for Microsoft 365 collaboration roles',
    summary: 'The direct answer is that the MS-700 (Managing Microsoft Teams) certification serves IT administration and collaboration roles that BLS classifies primarily under network and computer systems administrators (SOC 15-1244), at a May 2024 median annual wage of $96,800, with the lowest 10 percent under about $60,000 and the highest 10 percent above about $150,000. The honest framing is that the certification does not set pay — IT admin salaries are set by market, employer, and title — but the credential signals Teams administration competence (Teams deployment, management, and security) that employers list in Microsoft 365 and collaboration-admin roles, and it is one of the role-based certifications in the Microsoft 365 ecosystem, commonly paired with the MS-102 (Microsoft 365 Administrator). BLS projects about 4 percent employment decline for network and systems administrators from 2024 to 2034 as on-premises administration shifts to cloud, with the collaboration-admin skills the exam tests sitting in the cloud-adjacent part of the role that remains in demand. The exam itself is approximately 40 to 60 questions in 150 minutes, scored pass/fail around 700 on the 100-900 scale, covering planning and configuring Teams, managing Teams, managing meetings and calling, and managing Teams security and compliance. The practical read: MS-700 is the Microsoft Teams specialist certification, valuable for administrators in Microsoft-centric organisations where Teams is the collaboration backbone, and the credential\u2019s value is the Microsoft-ecosystem employability signal. For candidates deciding whether to pursue it, the exam rewards hands-on Teams administration experience, and the strongest preparation combines Microsoft Learn modules with a trial tenant.',
    rows: [
      { label: 'Median annual wage, network & systems administrators', value: '$96,800', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 15-1244)' },
      { label: 'Lowest 10 percent', value: 'less than $60,000', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $150,000', note: 'BLS OOH, May 2024' },
      { label: 'The certification itself', value: 'Role-based credential', note: 'Teams Administrator Associate; valid 1 year, renewable' }
    ],
    growth: 'BLS projects a 4% employment decline for network and systems administrators from 2024 to 2034 as on-premises administration shifts to cloud.',
    source: { label: 'BLS OOH — Network and Computer Systems Administrators', url: 'https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm' }
  },
  passRate: {
    headline: 'Microsoft publishes no pass rates — MS-700 is scored pass/fail around 700/900 with a ~40-60 question, 150-minute exam, and Microsoft reports scores rather than cohort pass data',
    summary: 'The core fact is that Microsoft does not publish pass rates for MS-700, and none is available from an independent source, because Microsoft reports candidate scores rather than cohort pass percentages. What is published is the exam structure: MS-700 is a role-based exam of approximately 40 to 60 questions with 150 minutes allowed, delivered at Pearson VUE testing centers or online proctored, with a passing score of 700 on the 100-900 scale. The exam covers four measured domains: plan and configure a Microsoft Teams environment; manage Teams; manage meetings and calling; and manage Teams security and compliance. Because Microsoft publishes the skills-measured document, the preparation is studying the official Microsoft Learn learning paths and validating with hands-on tenant experience; the classic failure mode is studying documentation without practising Teams administration in a tenant. The certification is valid for one year and renewable through Microsoft\u2019s short renewal assessment. The honest advice is to treat the skills-measured document as the syllabus, build a trial tenant to practise Teams configuration, guest access, meetings, and compliance policies, and take Microsoft\u2019s official practice assessment to calibrate before booking. The exam rewards applied administration, and candidates with tenant practice score well above those who only read.',
    source: { label: 'Microsoft Learn — MS-700 exam page', url: 'https://learn.microsoft.com/en-us/credentials/certifications/teams-administrator-associate/' },
    caveat: 'Microsoft publishes no pass rates; the passing score is 700/900 and certification renews annually.'
  },
  studyPlan: {
    summary: 'Plan for roughly 6 to 10 weeks and 60 to 100 hours of study for MS-700, structured around the four measured domains — Teams environment planning and configuration, Teams management, meetings and calling, and security and compliance — with a trial tenant as the highest-yield study tool. The most effective sequence is: first, complete the official Microsoft Learn learning paths for the exam in order; second, stand up a Microsoft 365 trial tenant and practise Teams administration — creating teams and channels, managing policies, configuring guest access, setting up meetings and calling, and applying compliance policies; third, take Microsoft\u2019s official practice assessment to calibrate; fourth, re-study the weak domains; and fifth, book the exam. The highest-yield habit is the hands-on tenant work: the exam rewards applied Teams administration, and candidates who practise the policies and configuration score well above those who only read. Budget the Teams policy management and security/compliance domains the most time, since they carry the largest question share and are where the exam is hardest. The final week should be a light review of the skills-measured document and the lab notes. After passing, plan the annual renewal assessment within 12 months, and consider pairing MS-700 with the MS-102 (Microsoft 365 Administrator) for the Microsoft 365 specialist profile.',
    totalHours: '60-100 study hours over 6-10 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Tenant planning', tasks: ['Complete the Learn paths for Teams environment planning', 'Stand up a trial tenant', 'Practise team and channel management'], hours: 25 },
      { label: 'Weeks 3-6', focus: 'Meetings, calling, security', tasks: ['Practise meetings and calling configuration', 'Study security and compliance policies', 'Take the official practice assessment'], hours: 35 },
      { label: 'Weeks 7-8', focus: 'Lab + gap closure', tasks: ['Repeat weak admin tasks in the tenant', 'Re-study weak domains', 'Take a second practice pass'], hours: 20 },
      { label: 'Final week', focus: 'Exam readiness', tasks: ['Review the skills-measured document', 'Light lab review', 'Book the exam'], hours: 10 }
    ],
    variants: [
      { label: 'Short-form exam option', detail: 'Microsoft offers a shortened version of some exams; check the MS-700 page for the current format.' },
      { label: 'MS-102 (Microsoft 365 Administrator)', detail: 'The companion flagship exam for the Microsoft 365 specialist profile.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes MS-700 is "study the official learning paths, then practise every Teams admin task in a trial tenant," and the single biggest error is reading documentation without hands-on administration, which the exam rewards heavily. A second proven approach is allocating study by domain weight — Teams policy management and security/compliance carry the largest shares — rather than studying the four domains evenly. Third, use the official practice assessment to calibrate: Microsoft\u2019s practice exams mirror the question style, and your score is the honest readiness signal. Fourth, master the guest-access and external-collaboration configuration, since those items are both numerous and scenario-heavy. Fifth, plan the annual renewal: the certification is valid 12 months, and the renewal assessment must be completed before expiry. Finally, confirm the exam delivery format — Pearson VUE center or online proctored — and practise the scheduling logistics, since online proctoring has its own environment requirements.',
    items: [
      { title: 'Lab every Teams admin task', detail: 'A trial tenant is the highest-yield study tool.' },
      { title: 'Weight policy and compliance', detail: 'The largest domain shares and the hardest items.' },
      { title: 'Calibrate with the practice assessment', detail: 'Practice scores are the honest readiness signal.' },
      { title: 'Master guest access', detail: 'External-collaboration items are numerous and scenario-heavy.' },
      { title: 'Plan the annual renewal', detail: 'Certification renews in 12 months via a short assessment.' }
    ]
  },
  resourceComparison: {
    summary: 'MS-700 preparation costs are modest: the exam fee is $165, Microsoft Learn learning paths are free, and a trial tenant is free, so the main optional spend is a practice-question bank. The comparison below separates the official resources, the exam, and commercial prep, with prices current to this review. The buying rule is to spend on the official practice assessment and any Q-bank that mirrors Microsoft\u2019s style, and to treat the free Learn paths as the syllabus.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn learning paths', values: ['Free', 'Online modules + labs', 'The official syllabus'] },
      { label: 'Microsoft 365 trial tenant', values: ['Free', 'Hands-on tenant', 'Applied admin practice'] },
      { label: 'MS-700 exam registration', values: ['$165', 'Pearson VUE or online proctored', 'The exam itself'] },
      { label: 'Microsoft official practice assessment', values: ['~$0-25', 'Online practice exam', 'Readiness calibration'] },
      { label: 'Commercial Q-banks', values: ['~$30-80', 'Online practice questions', 'Supplemental drilling'] }
    ],
    footnote: 'Prices approximate and dated to this review; the certification renews annually via a short assessment.'
  },
  commonMistakes: {
    summary: 'The most common mistake is studying documentation without tenant practice, which the exam\u2019s applied style punishes; the second is studying the four domains evenly and under-weighting policy management and compliance, where the hardest items live. A third recurring error is confusing Teams policy types — messaging, meeting, and app policies — on the scenario items. Candidates also routinely book the exam before taking the official practice assessment, and many forget the one-year renewal, letting the certification lapse. Finally, some candidates skip the guest-access and external-collaboration content, losing a dependable share of scenario points.',
    items: [
      { mistake: 'Reading without tenant practice', fix: 'Practise every Teams admin task in a trial tenant.' },
      { mistake: 'Even domain weighting', fix: 'Allocate study to policy and compliance first.' },
      { mistake: 'Confusing the policy types', fix: 'Master messaging, meeting, and app policy differences.' },
      { mistake: 'Booking without calibration', fix: 'Take the official practice assessment and read the score.' },
      { mistake: 'Missing the annual renewal', fix: 'Complete the renewal assessment within 12 months.' }
    ]
  },
  questionTypes: {
    summary: 'MS-700 contains approximately 40 to 60 questions in 150 minutes, scored pass/fail at 700/900, covering four domains: plan and configure a Teams environment, manage Teams, manage meetings and calling, and manage Teams security and compliance. Item formats include multiple-choice, case-study items, and scenario questions. The samples below are editor-written illustrations of the published skills-measured document, not live exam items.',
    types: [
      { name: 'Teams environment planning', share: '~25%', detail: 'Tenant and Teams rollout planning, licensing.' },
      { name: 'Teams management', share: '~30%', detail: 'Policies, teams, channels, and apps.' },
      { name: 'Meetings & calling', share: '~20%', detail: 'Meeting configuration, audio/video, and calling policies.' },
      { name: 'Security & compliance', share: '~25%', detail: 'Conditional Access, retention, and compliance policies.' }
    ],
    samples: [
      {
        prompt: 'Which policy controls who can create private channels in an organisation?',
        options: ['A. Messaging policy', 'B. Teams policy', 'C. App permission policy', 'D. Meeting policy'],
        answer: 'B',
        explanation: 'The Teams policy governs team and channel creation settings, including private channels.'
      },
      {
        prompt: 'Which feature allows external users to access Teams resources with a Microsoft account?',
        options: ['A. Guest access', 'B. Data loss prevention', 'C. Sensitivity labels', 'D. Retention policies'],
        answer: 'A',
        explanation: 'Guest access allows external users with Microsoft accounts to collaborate in Teams.'
      },
      {
        prompt: 'Which compliance feature prevents users from sharing sensitive content in Teams chats?',
        options: ['A. Conditional Access', 'B. Data loss prevention (DLP)', 'C. Meeting policies', 'D. Call queues'],
        answer: 'B',
        explanation: 'DLP policies prevent the sharing of sensitive content in chats and channels.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published skills-measured document, not live exam items.'
  },
  examDay: {
    summary: 'MS-700 is taken at a Pearson VUE testing center or online proctored: approximately 40 to 60 questions with 150 minutes, pass/fail at 700 on the 100-900 scale, with results typically available within a day or two. The core rules: bring valid photo ID for center delivery; for online proctoring complete the environment check with a quiet room, webcam, and no second screens. The exam is closed-book. After passing, the certification is valid for 12 months with a short renewal assessment. The most useful exam-day habits: pace at about 2.5 to 3 minutes per question, flag and return to case-study items, and on scenario questions match the policy or feature to the requirement rather than over-thinking. If you do not pass, Microsoft allows retakes after a 24-hour wait for the first retake. After the exam, plan the renewal and consider pairing MS-700 with the MS-102 for the Microsoft 365 specialist profile.',
    bring: ['Valid photo ID (center) or proctoring-ready environment (online)', 'Microsoft account credentials', 'Arrival 15-30 minutes early'],
    leave: ['Phone, smartwatch, and study materials', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Study', detail: 'Complete Learn paths, tenant labs, and the practice assessment.' },
      { time: 'Exam', detail: '40-60 questions in 150 minutes; 700/900 to pass.' },
      { time: 'Result', detail: 'Pass/fail in a day or two; certification valid 12 months.' },
      { time: 'Renewal', detail: 'Complete the renewal assessment before expiry.' }
    ],
    rules: ['~40-60 questions, 150 minutes', '700/900 passing score', 'Center or online proctored', 'Annual renewal assessment'],
    afterwards: 'Passing MS-700 earns the Teams Administrator Associate certification (valid 12 months), the Microsoft Teams specialist credential; renew annually and pair with MS-102 for a Microsoft 365 profile.'
  }
};

export default data;
