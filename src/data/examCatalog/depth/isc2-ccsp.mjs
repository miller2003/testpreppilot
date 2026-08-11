const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud security certifications desk',
    bio: 'ISC2 certification structure comes from the ISC2 official pages and is revised with each exam update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the CCSP exam structure, domains, and requirements against ISC2 official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect information-security-analyst pay at a May 2024 median of $124,910 (BLS) — the CCSP is the cloud-security credential from ISC2, and cloud-security roles sit in the fastest-growing segment of the security occupations',
    summary: 'The direct answer is that the CCSP (Certified Cloud Security Professional) is the cloud-security credential from ISC2, and the occupation it serves, information security analysts (SOC 15-1212), earned a May 2024 median annual wage of $124,910, with the lowest 10 percent under about $73,000 and the highest 10 percent above about $170,000 — with cloud-security specialisation among the highest-demand and best-compensated segments of the security field, though BLS has no cloud-specific code. The honest framing is that the certification does not set pay — security salaries are set by market, employer, and experience — but the credential signals cloud-security architecture and operations competence (cloud concepts, architecture, governance, compliance, and security operations across the major cloud providers) that employers list for cloud-security roles, and it sits in the fastest-growing segment of IT: BLS projects about 30 percent employment growth for information security analysts from 2024 to 2034. The exam itself is 125 questions with 4 hours, scored pass/fail on a scale with a passing standard set by ISC2, and candidates must meet the experience requirement (typically five years of cumulative IT experience, three of which are in information security, with one year in one of the six CCSP domains — or the CISSP can substitute for the full requirement). The practical read: the CCSP is the advanced cloud-security credential, typically pursued by security professionals with cloud experience, and its value is the ISC2 cloud-security signal in a high-demand field. For candidates deciding whether to pursue it, the exam rewards applied cloud-security knowledge across the six domains, and the strongest preparation combines the ISC2 official materials with practice-exam calibration.',
    rows: [
      { label: 'Median annual wage, information security analysts', value: '$124,910', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 15-1212)' },
      { label: 'Lowest 10 percent', value: 'less than $73,000', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $170,000', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+30%', note: 'BLS Employment Projections' },
      { label: 'The certification itself', value: 'Advanced credential', note: '125 questions, 4 hours; 5-year experience requirement' }
    ],
    growth: 'BLS projects about 30% growth for information security analysts from 2024 to 2034, much faster than average.',
    source: { label: 'BLS OOH — Information Security Analysts', url: 'https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm' }
  },
  passRate: {
    headline: 'ISC2 publishes no pass rates — the CCSP is 125 questions in 4 hours with a pass standard set by ISC2, and ISC2 reports pass/fail rather than cohort data',
    summary: 'The core fact is that ISC2 does not publish pass rates for the CCSP exam, and none is available from an independent source, because ISC2 reports candidate pass/fail rather than cohort pass percentages. What is published is the exam structure: the CCSP is a computer-based test of 125 multiple-choice questions with 4 hours allowed, delivered at Pearson VUE testing centers, with a passing standard set by ISC2 through standard-setting; the exam covers six domains — cloud concepts, architecture and design; cloud data security; cloud platform and infrastructure security; cloud application security; cloud security operations; and legal, risk, and compliance — weighted across the paper. Candidates must meet the experience requirement: typically five years of cumulative IT experience with three years in information security and one year in a CCSP domain (the CISSP credential satisfies the entire requirement). Because ISC2 publishes the exam outline and official study materials, the preparation is studying the outline and calibrating with practice exams; the classic failure mode is under-practising the cloud-architecture and data-security items, which reward applied cloud knowledge. The certification is valid for three years and renews with continuing professional education (CPE) credits. The honest advice is to treat the exam outline as the syllabus, complete the ISC2 official materials or an approved course, and take practice exams before booking.',
    source: { label: 'ISC2 — CCSP certification', url: 'https://www.isc2.org/' },
    caveat: 'ISC2 publishes no pass rates; a pass standard is set by ISC2 and certification renews every 3 years with CPEs.'
  },
  studyPlan: {
    summary: 'Plan for roughly 10 to 14 weeks and 120 to 180 hours of study for the CCSP, structured around the six domains — cloud data security, architecture and design, and security operations carry the largest shares — with practice-exam calibration. The most effective sequence is: first, confirm the experience requirement and obtain the exam outline; second, study the cloud concepts and architecture domain, the conceptual foundation; third, work the cloud data security and platform/infrastructure security content; fourth, study application security, operations, and compliance; and fifth, take full-length practice exams under real timing in the final month. The highest-yield habits are the practice exams (the 125-question, 4-hour format is a stamina test) and drilling the applied scenario items, which dominate the paper. Budget the cloud data security and architecture domains the most time, since they carry the largest shares. After passing, note the three-year CPE renewal and consider the CISSP complement, since the CCSP and CISSP together form the ISC2 security-management profile.',
    totalHours: '120-180 study hours over 10-14 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Baseline + architecture', tasks: ['Confirm eligibility and get the outline', 'Study cloud concepts and architecture', 'Take a baseline practice exam'], hours: 40 },
      { label: 'Weeks 4-7', focus: 'Data + platform security', tasks: ['Study cloud data security', 'Work platform and infrastructure security', 'Take a second practice exam'], hours: 55 },
      { label: 'Weeks 8-11', focus: 'Operations + compliance', tasks: ['Study application security and operations', 'Review legal, risk, and compliance', 'Take full-length practice exams'], hours: 50 },
      { label: 'Final weeks', focus: 'Exam readiness', tasks: ['Light outline review', 'Confirm exam logistics', 'Book the exam'], hours: 20 }
    ],
    variants: [
      { label: 'Experience requirement', detail: 'Typically 5 years IT with 3 in security and 1 in a CCSP domain; the CISSP satisfies the requirement.' },
      { label: 'CISSP complement', detail: 'The CCSP and CISSP together form the ISC2 security-management profile.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes the CCSP is "anchor on the exam outline, weight cloud data security and architecture, and run full-length practice exams," and the single biggest error is studying cloud concepts without the applied scenario practice the exam rewards. A second proven approach is mastering the cloud data security domain, which carries a large question share and rewards applied encryption and data-protection knowledge. Third, drill the architecture and design items, which require reasoning about cloud design decisions. Fourth, use the full-length practice exams as the calibration tool — the 125-question, 4-hour format is a stamina test, and practice scores are the honest readiness signal. Fifth, confirm the experience requirement early, since eligibility is part of the certification gate. Finally, plan the three-year CPE renewal and the CISSP complement, since the ISC2 credentials form a career profile.',
    items: [
      { title: 'Anchor on the exam outline', detail: 'The exam is built from the six-domain outline.' },
      { title: 'Weight cloud data security', detail: 'Encryption and data-protection items carry a large share.' },
      { title: 'Drill architecture and design', detail: 'Cloud design-decision items reward applied reasoning.' },
      { title: 'Run full-length practice exams', detail: 'The 125-question, 4-hour format is a stamina test.' },
      { title: 'Confirm eligibility and plan CPEs', detail: 'The experience gate and 3-year renewal are part of the credential.' }
    ]
  },
  resourceComparison: {
    summary: 'CCSP preparation runs $400 to $1,000 depending on the package, with the ISC2 official study materials and practice exams as the core investment. The comparison below separates the exam fee, official resources, and the major prep options, with prices current to this review. The buying rule is to budget for the official materials and a practice-exam package, since the exam format rewards the calibrated approach.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CCSP exam registration', values: ['~$599', 'Computer-based at Pearson VUE', 'The exam itself'] },
      { label: 'ISC2 CCSP exam outline', values: ['Free', 'Official PDF', 'The authoritative syllabus'] },
      { label: 'ISC2 official study guide', values: ['~$60-120', 'Book or digital', 'The core content'] },
      { label: 'Prep courses and practice exams', values: ['~$300-800', 'Online courses + question banks', 'Structured review and calibration'] },
      { label: 'CPE renewal cycle', values: ['Included', 'Continuing professional education', 'The 3-year renewal'] }
    ],
    footnote: 'Prices approximate and dated to this review; the experience requirement applies and CPEs maintain the certification.'
  },
  commonMistakes: {
    summary: 'The most common mistake is studying cloud concepts without the applied scenario practice the exam rewards; the second is under-weighting the cloud data security domain. A third recurring error is being weak on the architecture and design reasoning items. Candidates also routinely skip full-length practice exams and fail on stamina in the 4-hour format, and many ignore the experience requirement until after the exam. Finally, some candidates treat the CCSP as an endpoint, missing the CISSP complement and the broader ISC2 profile.',
    items: [
      { mistake: 'Concept-only study', fix: 'Drill the applied scenario format with practice exams.' },
      { mistake: 'Under-weighting data security', fix: 'Cloud data security carries a large share; master it.' },
      { mistake: 'Weak on architecture reasoning', fix: 'Practise the design-decision items.' },
      { mistake: 'Skipping full-length mocks', fix: 'The 4-hour format is a stamina test.' },
      { mistake: 'Missing the CISSP complement', fix: 'Plan the broader ISC2 security profile.' }
    ]
  },
  questionTypes: {
    summary: 'The CCSP contains 125 multiple-choice questions in 4 hours, covering six domains — cloud concepts and architecture, cloud data security, cloud platform and infrastructure security, cloud application security, cloud security operations, and legal, risk, and compliance — with a large share of applied scenario items. The samples below are editor-written illustrations of the published exam outline, not live exam items.',
    types: [
      { name: 'Cloud concepts & architecture', share: '~17%', detail: 'Cloud design, architecture, and shared responsibility.' },
      { name: 'Cloud data security', share: '~19%', detail: 'Encryption, data protection, and lifecycle.' },
      { name: 'Platform & infrastructure security', share: '~17%', detail: 'Compute, network, and storage security.' },
      { name: 'Application & operations security', share: '~26%', detail: 'Application security and cloud operations.' },
      { name: 'Legal, risk & compliance', share: '~21%', detail: 'Governance, compliance, and risk management.' }
    ],
    samples: [
      {
        prompt: 'Which model defines the division of security responsibilities between a cloud provider and its customer?',
        options: ['A. The shared responsibility model', 'B. The OSI model', 'C. The waterfall model', 'D. The Pareto principle'],
        answer: 'A',
        explanation: 'The shared responsibility model defines which security tasks the provider and customer own.'
      },
      {
        prompt: 'Which practice best protects data at rest in a cloud environment?',
        options: ['A. Encryption with managed keys', 'B. No encryption', 'C. Storing keys with the data', 'D. Relying on physical security only'],
        answer: 'A',
        explanation: 'Encrypting data at rest with managed keys is the core protection practice.'
      },
      {
        prompt: 'Which compliance requirement commonly applies to cloud services handling personal data?',
        options: ['A. Data residency and privacy regulations', 'B. No requirements', 'C. Only industry marketing rules', 'D. Local building codes'],
        answer: 'A',
        explanation: 'Data residency and privacy regulations (e.g. GDPR) govern personal data in the cloud.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam outline, not live exam items.'
  },
  examDay: {
    summary: 'The CCSP is taken on computer at a Pearson VUE testing center: 125 multiple-choice questions with 4 hours, pass/fail via ISC2\u2019s pass standard, with results typically available within a few days. The core rules: bring valid photo ID, arrive early, and follow testing-center rules. After passing, complete the experience verification and plan the three-year CPE renewal. The most useful exam-day habits: pace at about 1.9 minutes per question, flag and return to the scenario items, and answer every question (no penalty for guessing). If you do not pass, ISC2 allows retakes after a waiting period. After the certification, plan the CPE cycle and the CISSP complement for the broader ISC2 profile.',
    bring: ['Valid photo ID', 'Arrival 30 minutes early', 'A 4-hour sitting mindset'],
    leave: ['Phone, smartwatch, and study materials (testing-center rules)', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Study', detail: '10-14 weeks; outline study with practice-exam calibration.' },
      { time: 'Exam', detail: '125 questions in 4 hours at Pearson VUE.' },
      { time: 'Results', detail: 'Pass/fail within days.' },
      { time: 'Renewal', detail: 'Experience verification + 3-year CPE cycle.' }
    ],
    rules: ['125 questions, 4 hours', 'Computer-based at Pearson VUE', 'Pass standard set by ISC2', '3-year CPE renewal'],
    afterwards: 'Passing the CCSP plus the experience verification earns the Certified Cloud Security Professional credential, ISC2\u2019s cloud-security certification, renewable every 3 years with CPEs.'
  }
};

export default data;
