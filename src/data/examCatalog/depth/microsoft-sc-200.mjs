const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'Microsoft certification structure comes from Microsoft Learn official pages and is revised with each exam update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the SC-200 exam structure, domains, and scoring against Microsoft Learn official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect information-security-analyst pay at a May 2024 median of $124,910 (BLS) — SC-200 is the Security Operations Analyst Associate certification, a role-based credential for the SOC and security-operations track',
    summary: 'The direct answer is that the SC-200 (Microsoft Security Operations Analyst) certification serves security-operations roles that BLS classifies under information security analysts (SOC 15-1212), at a May 2024 median annual wage of $124,910, with the lowest 10 percent under about $73,000 and the highest 10 percent above about $170,000. The honest framing is that the certification does not set pay — security-analyst salaries are set by market, employer, and experience — but the credential signals Microsoft security-operations competence (Microsoft 365 Defender, Defender for Cloud, Microsoft Sentinel, and incident response) that employers list for SOC and security-operations roles, and it sits in the fastest-growing segment of IT: BLS projects about 30 percent employment growth for information security analysts from 2024 to 2034, much faster than average, with roughly 18,000 annual openings. The exam itself is approximately 40 to 60 questions in 150 minutes, scored pass/fail around 700 on the 100-900 scale, covering mitigation of threats using Microsoft 365 Defender, mitigation of threats using Defender for Cloud, mitigation of threats using Microsoft Sentinel, and hunting and responding to threats. The practical read: SC-200 is the Microsoft security-operations certification, valuable for analysts in Microsoft-centric SOCs, and the credential\u2019s value is the Microsoft-security employability signal in a high-demand field. For candidates deciding whether to pursue it, the exam rewards hands-on security-tool experience, and the strongest preparation combines Microsoft Learn modules with a trial tenant and lab exercises.',
    rows: [
      { label: 'Median annual wage, information security analysts', value: '$124,910', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 15-1212)' },
      { label: 'Lowest 10 percent', value: 'less than $73,000', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $170,000', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+30%', note: 'BLS Employment Projections' },
      { label: 'The certification itself', value: 'Role-based credential', note: 'Security Operations Analyst Associate; valid 1 year, renewable' }
    ],
    growth: 'BLS projects about 30% growth for information security analysts from 2024 to 2034, much faster than average.',
    source: { label: 'BLS OOH — Information Security Analysts', url: 'https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm' }
  },
  passRate: {
    headline: 'Microsoft publishes no pass rates — SC-200 is scored pass/fail around 700/900 with a ~40-60 question, 150-minute exam, and Microsoft reports scores rather than cohort pass data',
    summary: 'The core fact is that Microsoft does not publish pass rates for SC-200, and none is available from an independent source, because Microsoft reports candidate scores rather than cohort pass percentages. What is published is the exam structure: SC-200 is a role-based exam of approximately 40 to 60 questions with 150 minutes allowed, delivered at Pearson VUE testing centers or online proctored, with a passing score of 700 on the 100-900 scale. The exam covers four measured domains: mitigate threats using Microsoft 365 Defender; mitigate threats using Microsoft Defender for Cloud; mitigate threats using Microsoft Sentinel; and hunt for and respond to threats. Because Microsoft publishes the skills-measured document, the preparation is studying the official Microsoft Learn learning paths and validating with hands-on lab experience; the classic failure mode is studying documentation without practising in the security tools. The certification is valid for one year and renewable through Microsoft\u2019s short renewal assessment. The honest advice is to treat the skills-measured document as the syllabus, work through the Microsoft security labs (Microsoft 365 Defender, Sentinel, and Defender for Cloud), and take Microsoft\u2019s official practice assessment to calibrate before booking. The exam rewards applied security-operations knowledge, and candidates with lab practice score well above those who only read.',
    source: { label: 'Microsoft Learn — SC-200 exam page', url: 'https://learn.microsoft.com/en-us/credentials/certifications/security-operations-analyst/' },
    caveat: 'Microsoft publishes no pass rates; the passing score is 700/900 and certification renews annually.'
  },
  studyPlan: {
    summary: 'Plan for roughly 8 to 12 weeks and 80 to 140 hours of study for SC-200, structured around the four measured domains — Microsoft 365 Defender, Defender for Cloud, Microsoft Sentinel, and threat hunting and response — with hands-on lab practice as the highest-yield study tool. The most effective sequence is: first, complete the official Microsoft Learn learning paths for the exam in order; second, work through the Microsoft security lab environments — configuring Microsoft 365 Defender, Defender for Cloud, and Sentinel, and practising detections and incident response; third, take Microsoft\u2019s official practice assessment to calibrate; fourth, re-study the weak domains; and fifth, book the exam. The highest-yield habit is the hands-on lab work: the exam rewards applied security-operations knowledge, and candidates who practise the tools score well above those who only read. Budget the Sentinel and threat-hunting content the most time, since it carries a large question share and is where the exam is hardest. The final week should be a light review of the skills-measured document and the lab notes. After passing, plan the annual renewal assessment within 12 months.',
    totalHours: '80-140 study hours over 8-12 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Microsoft 365 Defender', tasks: ['Complete the Learn paths for Defender', 'Configure the lab environment', 'Practise detections and responses'], hours: 40 },
      { label: 'Weeks 4-7', focus: 'Sentinel + Defender for Cloud', tasks: ['Practise Sentinel analytics and incidents', 'Study Defender for Cloud posture', 'Take the official practice assessment'], hours: 45 },
      { label: 'Weeks 8-10', focus: 'Hunting + gap closure', tasks: ['Practise threat hunting queries', 'Re-study weak domains', 'Take a second practice pass'], hours: 35 },
      { label: 'Final weeks', focus: 'Exam readiness', tasks: ['Review the skills-measured document', 'Light lab review', 'Book the exam'], hours: 15 }
    ],
    variants: [
      { label: 'Short-form exam option', detail: 'Microsoft offers a shortened version of some exams; check the SC-200 page for the current format.' },
      { label: 'SC-900 fundamentals', detail: 'The entry-level security fundamentals exam, a common precursor to SC-200.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes SC-200 is "study the official learning paths, then practise every tool in a lab environment," and the single biggest error is reading documentation without hands-on security-tool practice, which the exam rewards heavily. A second proven approach is allocating study by domain weight — Sentinel and threat hunting carry the largest shares and are the hardest — rather than studying the four domains evenly. Third, use the official practice assessment to calibrate: your score is the honest readiness signal. Fourth, master the incident-response flow — how detections become incidents and how analysts respond in Microsoft 365 Defender and Sentinel — since those scenario items dominate. Fifth, plan the annual renewal: the certification is valid 12 months, and the renewal assessment must be completed before expiry. Finally, confirm the exam delivery format and practise the scheduling logistics, since online proctoring has its own environment requirements.',
    items: [
      { title: 'Lab every security tool', detail: 'Hands-on practice in the Microsoft security tools is the highest-yield study.' },
      { title: 'Weight Sentinel and hunting', detail: 'The largest domain shares and the hardest items.' },
      { title: 'Calibrate with the practice assessment', detail: 'Practice scores are the honest readiness signal.' },
      { title: 'Master the incident-response flow', detail: 'Detection-to-response scenario items dominate.' },
      { title: 'Plan the annual renewal', detail: 'Certification renews in 12 months via a short assessment.' }
    ]
  },
  resourceComparison: {
    summary: 'SC-200 preparation costs are modest: the exam fee is $165, Microsoft Learn paths are free, and Microsoft\u2019s lab environments are available through free trials and the Learn sandbox, so the main optional spend is a practice-question bank. The comparison below separates the official resources, the exam, and commercial prep, with prices current to this review. The buying rule is to spend on the official practice assessment and a Q-bank that mirrors Microsoft\u2019s style, and to treat the free Learn paths and labs as the syllabus.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn learning paths', values: ['Free', 'Online modules + sandbox labs', 'The official syllabus'] },
      { label: 'Microsoft 365 / Azure trial tenants', values: ['Free', 'Hands-on security tools', 'Applied lab practice'] },
      { label: 'SC-200 exam registration', values: ['$165', 'Pearson VUE or online proctored', 'The exam itself'] },
      { label: 'Microsoft official practice assessment', values: ['~$0-25', 'Online practice exam', 'Readiness calibration'] },
      { label: 'Commercial Q-banks (e.g. MeasureUp, Whizlabs)', values: ['~$30-80', 'Online practice questions', 'Supplemental drilling'] }
    ],
    footnote: 'Prices approximate and dated to this review; the certification renews annually via a short assessment.'
  },
  commonMistakes: {
    summary: 'The most common mistake is studying documentation without lab practice, which the exam\u2019s applied style punishes; the second is studying the four domains evenly and under-weighting Sentinel and threat hunting, where the hardest items live. A third recurring error is confusing the tool boundaries — what Microsoft 365 Defender does versus Sentinel versus Defender for Cloud — on scenario items. Candidates also routinely book the exam before taking the official practice assessment, and many forget the one-year renewal. Finally, some candidates skip the KQL (query language) basics, arriving weak on the threat-hunting items that the modern exam rewards.',
    items: [
      { mistake: 'Reading without lab practice', fix: 'Practise every tool in the Microsoft security lab environments.' },
      { mistake: 'Even domain weighting', fix: 'Allocate study to Sentinel and hunting first.' },
      { mistake: 'Confusing the tool boundaries', fix: 'Master what each tool does in the security-operations stack.' },
      { mistake: 'Booking without calibration', fix: 'Take the official practice assessment and read the score.' },
      { mistake: 'Skipping KQL basics', fix: 'Learn the query fundamentals the threat-hunting items test.' }
    ]
  },
  questionTypes: {
    summary: 'SC-200 contains approximately 40 to 60 questions in 150 minutes, scored pass/fail at 700/900, covering four domains: mitigate threats using Microsoft 365 Defender, mitigate threats using Defender for Cloud, mitigate threats using Microsoft Sentinel, and hunt for and respond to threats. Item formats include multiple-choice, case-study items, and scenario questions. The samples below are editor-written illustrations of the published skills-measured document, not live exam items.',
    types: [
      { name: 'Microsoft 365 Defender', share: '~30%', detail: 'Email, endpoint, identity, and cloud app detections.' },
      { name: 'Microsoft Sentinel', share: '~30%', detail: 'Analytics rules, incidents, and automation.' },
      { name: 'Defender for Cloud', share: '~20%', detail: 'Cloud posture, workload protection, and recommendations.' },
      { name: 'Threat hunting & response', share: '~20%', detail: 'KQL queries, investigation, and remediation.' }
    ],
    samples: [
      {
        prompt: 'Which Microsoft security tool provides a SIEM and SOAR platform for centralised detection and response?',
        options: ['A. Microsoft 365 Defender', 'B. Microsoft Sentinel', 'C. Defender for Cloud', 'D. Intune'],
        answer: 'B',
        explanation: 'Sentinel is the cloud-native SIEM and SOAR platform for centralised security operations.'
      },
      {
        prompt: 'An analyst receives a phishing alert from email protection. Which tool generated the detection?',
        options: ['A. Microsoft Defender for Office 365', 'B. Microsoft Sentinel', 'C. Defender for Cloud', 'D. Microsoft Purview'],
        answer: 'A',
        explanation: 'Defender for Office 365 detects email-borne threats including phishing.'
      },
      {
        prompt: 'Which query language is used to hunt for threats in Microsoft Sentinel?',
        options: ['A. SQL', 'B. KQL', 'C. PowerShell', 'D. Python'],
        answer: 'B',
        explanation: 'KQL (Kusto Query Language) is used to query data in Sentinel and Microsoft 365 Defender.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published skills-measured document, not live exam items.'
  },
  examDay: {
    summary: 'SC-200 is taken at a Pearson VUE testing center or online proctored: approximately 40 to 60 questions with 150 minutes, pass/fail at 700 on the 100-900 scale, with results typically available within a day or two. The core rules: bring valid photo ID for center delivery; for online proctoring complete the environment check with a quiet room, webcam, and no second screens. The exam is closed-book. After passing, the certification is valid for 12 months with a short renewal assessment. The most useful exam-day habits: pace at about 2.5 to 3 minutes per question, flag and return to case-study items, and on scenario questions match the tool to the threat rather than over-thinking. If you do not pass, Microsoft allows retakes after a 24-hour wait for the first retake. After the exam, plan the renewal and consider the wider security certification path — SC-300 (identity) and SC-100 (architect) — for a security specialisation profile.',
    bring: ['Valid photo ID (center) or proctoring-ready environment (online)', 'Microsoft account credentials', 'Arrival 15-30 minutes early'],
    leave: ['Phone, smartwatch, and study materials', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Study', detail: 'Complete Learn paths, lab practice, and the practice assessment.' },
      { time: 'Exam', detail: '40-60 questions in 150 minutes; 700/900 to pass.' },
      { time: 'Result', detail: 'Pass/fail in a day or two; certification valid 12 months.' },
      { time: 'Renewal', detail: 'Complete the renewal assessment before expiry.' }
    ],
    rules: ['~40-60 questions, 150 minutes', '700/900 passing score', 'Center or online proctored', 'Annual renewal assessment'],
    afterwards: 'Passing SC-200 earns the Security Operations Analyst Associate certification (valid 12 months), the Microsoft security-operations credential; renew annually and extend into the SC series for a security specialisation.'
  }
};

export default data;
