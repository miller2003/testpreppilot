const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cybersecurity certifications desk',
    bio: 'ISC2 certification structure comes from the ISC2 official pages and is revised with each exam update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the SSCP exam structure, domains, and requirements against ISC2 official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect information-security-analyst pay at a May 2024 median of $124,910 (BLS) — the SSCP is the practitioner-level ISC2 credential, and the security-operations roles it serves sit in the fastest-growing segment of IT',
    summary: 'The direct answer is that the SSCP (Systems Security Certified Practitioner) is the practitioner-level credential from ISC2, and the occupation it serves, information security analysts (SOC 15-1212), earned a May 2024 median annual wage of $124,910, with the lowest 10 percent under about $73,000 and the highest 10 percent above about $170,000. The honest framing is that the certification does not set pay — security-analyst salaries are set by market, employer, and experience — but the credential signals hands-on security-operations competence (access controls, security operations, risk identification, and network security) that employers list for security-admin and analyst roles, and it sits in the fastest-growing segment of IT: BLS projects about 30 percent employment growth for information security analysts from 2024 to 2034, much faster than average, with roughly 18,000 annual openings. The exam itself is 125 questions with 3 hours, scored pass/fail on a scale with a passing standard set by ISC2, and candidates must meet the experience requirement (typically one year of relevant experience, or a degree waiver). The practical read: the SSCP is the step between entry-level security certifications and the CISSP — it targets security practitioners with hands-on roles rather than managers — and its value is the ISC2 security-operations signal in a high-demand field. For candidates deciding whether to pursue it, the exam rewards applied security knowledge across the seven domains, and the strongest preparation combines the ISC2 official study materials with practice-exam calibration.',
    rows: [
      { label: 'Median annual wage, information security analysts', value: '$124,910', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 15-1212)' },
      { label: 'Lowest 10 percent', value: 'less than $73,000', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $170,000', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+30%', note: 'BLS Employment Projections' },
      { label: 'The certification itself', value: 'Practitioner credential', note: '125 questions, 3 hours; 1-year experience requirement' }
    ],
    growth: 'BLS projects about 30% growth for information security analysts from 2024 to 2034, much faster than average.',
    source: { label: 'BLS OOH — Information Security Analysts', url: 'https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm' }
  },
  passRate: {
    headline: 'ISC2 publishes no pass rates — the SSCP is 125 questions in 3 hours with a pass standard set by ISC2, and ISC2 reports pass/fail rather than cohort data',
    summary: 'The core fact is that ISC2 does not publish pass rates for the SSCP exam, and none is available from an independent source, because ISC2 reports candidate pass/fail rather than cohort pass percentages. What is published is the exam structure: the SSCP is a computer-based test of 125 multiple-choice questions with 3 hours allowed, delivered at Pearson VUE testing centers, with a passing standard set by ISC2 through standard-setting; the exam covers seven domains — security operations and administration, access controls, risk identification, monitoring and analysis, cryptography and the PKI, network and communications security, and systems and application security — weighted across the paper. Candidates must meet the experience requirement: typically one year of cumulative relevant work experience in one or more domains, or a relevant degree that waives a portion. Because ISC2 publishes the exam outline and official study materials, the preparation is studying the outline and calibrating with practice exams; the classic failure mode is under-practising the applied scenario items, which reward hands-on security knowledge rather than memorised theory. The certification is valid for three years and renews with continuing professional education (CPE) credits. The honest advice is to treat the exam outline as the syllabus, complete the ISC2 official study materials or an approved course, and take practice exams before booking.',
    source: { label: 'ISC2 — SSCP certification', url: 'https://www.isc2.org/' },
    caveat: 'ISC2 publishes no pass rates; a pass standard is set by ISC2 and certification renews every 3 years with CPEs.'
  },
  studyPlan: {
    summary: 'Plan for roughly 8 to 12 weeks and 100 to 150 hours of study for the SSCP, structured around the seven domains — security operations, access controls, and risk identification carry the largest shares — with practice-exam calibration. The most effective sequence is: first, confirm the experience requirement and obtain the exam outline; second, study the security-operations and access-controls content, the core domains; third, work the risk, monitoring, and cryptography content; fourth, study the network and systems security domains; and fifth, take full-length practice exams under real timing in the final month. The highest-yield habits are the practice exams (the 125-question, 3-hour format is a stamina test) and drilling the applied scenario items, which dominate the paper. Budget the security-operations domain the most time, since it carries the largest question share. After passing, note the three-year CPE renewal and plan the CISSP step, since the SSCP is the practitioner-level credential that leads toward the manager-level CISSP.',
    totalHours: '100-150 study hours over 8-12 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Baseline + operations', tasks: ['Confirm eligibility and get the outline', 'Study security operations and administration', 'Take a baseline practice exam'], hours: 40 },
      { label: 'Weeks 4-7', focus: 'Access + risk + crypto', tasks: ['Study access controls and risk identification', 'Work monitoring and cryptography content', 'Take a second practice exam'], hours: 50 },
      { label: 'Weeks 8-10', focus: 'Network + systems', tasks: ['Study network and systems security', 'Drill applied scenario items', 'Take full-length practice exams'], hours: 40 },
      { label: 'Final weeks', focus: 'Exam readiness', tasks: ['Light outline review', 'Confirm exam logistics', 'Book the exam'], hours: 15 }
    ],
    variants: [
      { label: 'CISSP', detail: 'The manager-level ISC2 credential; the SSCP is the practitioner step before it.' },
      { label: 'Experience requirement', detail: 'Typically 1 year of relevant experience, or a degree waiver.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes the SSCP is "anchor on the exam outline, weight security operations and access controls, and run full-length practice exams," and the single biggest error is studying theory without the applied scenario practice the exam rewards. A second proven approach is mastering the security-operations domain, the largest question share, with the scenario format. Third, drill the access-controls content, which is both weighted and scenario-heavy. Fourth, use the full-length practice exams as the calibration tool — the 125-question, 3-hour format is a stamina test, and practice scores are the honest readiness signal. Fifth, confirm the experience requirement early, since eligibility is part of the certification gate. Finally, plan the three-year CPE renewal and the CISSP step, since the practitioner-to-manager path is the credential\u2019s career logic.',
    items: [
      { title: 'Anchor on the exam outline', detail: 'The exam is built from the seven-domain outline.' },
      { title: 'Weight security operations', detail: 'The largest domain share; drill the scenario format.' },
      { title: 'Master access controls', detail: 'Weighted and scenario-heavy content.' },
      { title: 'Run full-length practice exams', detail: 'The 125-question format is a stamina test.' },
      { title: 'Confirm eligibility and plan CPEs', detail: 'The experience gate and 3-year renewal are part of the credential.' }
    ]
  },
  resourceComparison: {
    summary: 'SSCP preparation runs $300 to $800 depending on the package, with the ISC2 official study materials and practice exams as the core investment. The comparison below separates the exam fee, official resources, and the major prep options, with prices current to this review. The buying rule is to budget for the official study materials and a practice-exam package, since the exam format rewards the calibrated approach.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'SSCP exam registration', values: ['~$250-275', 'Computer-based at Pearson VUE', 'The exam itself'] },
      { label: 'ISC2 SSCP exam outline', values: ['Free', 'Official PDF', 'The authoritative syllabus'] },
      { label: 'ISC2 official study guide', values: ['~$50-100', 'Book or digital', 'The core content'] },
      { label: 'Prep courses and practice exams', values: ['~$200-600', 'Online courses + question banks', 'Structured review and calibration'] },
      { label: 'CPE renewal cycle', values: ['Included', 'Continuing professional education', 'The 3-year renewal'] }
    ],
    footnote: 'Prices approximate and dated to this review; the experience requirement applies and CPEs maintain the certification.'
  },
  commonMistakes: {
    summary: 'The most common mistake is studying theory without the applied scenario practice the exam rewards; the second is under-weighting the security-operations domain, the largest share. A third recurring error is being weak on the access-controls items, which are both weighted and scenario-heavy. Candidates also routinely skip full-length practice exams and fail on stamina, and many ignore the experience requirement until after the exam. Finally, some candidates treat the SSCP as the endpoint, missing the CISSP step the practitioner credential is designed to precede.',
    items: [
      { mistake: 'Theory-only study', fix: 'Drill the applied scenario format with practice exams.' },
      { mistake: 'Under-weighting security operations', fix: 'The largest domain share; master it first.' },
      { mistake: 'Weak on access controls', fix: 'Access-control items are weighted and scenario-heavy.' },
      { mistake: 'Skipping full-length mocks', fix: 'The 125-question format is a stamina test.' },
      { mistake: 'Missing the CISSP step', fix: 'Plan the manager-level credential as the career path.' }
    ]
  },
  questionTypes: {
    summary: 'The SSCP contains 125 multiple-choice questions in 3 hours, covering seven domains — security operations and administration, access controls, risk identification, monitoring and analysis, cryptography, network and communications security, and systems and application security — with a large share of applied scenario items. The samples below are editor-written illustrations of the published exam outline, not live exam items.',
    types: [
      { name: 'Security operations & administration', share: '~15%', detail: 'Operations, administration, and compliance.' },
      { name: 'Access controls', share: '~15%', detail: 'Identification, authentication, and authorisation.' },
      { name: 'Risk identification & monitoring', share: '~15%', detail: 'Risk analysis, monitoring, and analysis.' },
      { name: 'Cryptography & PKI', share: '~10%', detail: 'Cryptographic concepts and the PKI.' },
      { name: 'Network, systems & application security', share: '~45%', detail: 'The technical security domains.' }
    ],
    samples: [
      {
        prompt: 'Which control provides the strongest defence against unauthorised access to a system?',
        options: ['A. Multifactor authentication', 'B. A complex password only', 'C. Physical locks only', 'D. No controls'],
        answer: 'A',
        explanation: 'Multifactor authentication combines multiple factors to strengthen access control.'
      },
      {
        prompt: 'Which cryptographic concept ensures that data has not been altered in transit?',
        options: ['A. Confidentiality', 'B. Integrity', 'C. Availability', 'D. Non-repudiation only'],
        answer: 'B',
        explanation: 'Integrity ensures data has not been modified; hashing provides integrity verification.'
      },
      {
        prompt: 'Which action is most appropriate when an anomaly is detected in security monitoring?',
        options: ['A. Investigate and escalate per the incident-response plan', 'B. Ignore it', 'C. Delete the logs', 'D. Disable monitoring'],
        answer: 'A',
        explanation: 'Anomalies are investigated and escalated through the incident-response process.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam outline, not live exam items.'
  },
  examDay: {
    summary: 'The SSCP is taken on computer at a Pearson VUE testing center: 125 multiple-choice questions with 3 hours, pass/fail via ISC2\u2019s pass standard, with results typically available within a few days. The core rules: bring valid photo ID, arrive early, and follow testing-center rules. After passing, complete the experience verification and plan the three-year CPE renewal. The most useful exam-day habits: pace at about 1.4 minutes per question, flag and return to the scenario items, and answer every question (no penalty for guessing). If you do not pass, ISC2 allows retakes after a waiting period. After the certification, plan the CPE cycle and the CISSP step, since the practitioner credential leads toward the manager-level credential.',
    bring: ['Valid photo ID', 'Arrival 30 minutes early', 'A 3-hour sitting mindset'],
    leave: ['Phone, smartwatch, and study materials (testing-center rules)', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Study', detail: '8-12 weeks; outline study with practice-exam calibration.' },
      { time: 'Exam', detail: '125 questions in 3 hours at Pearson VUE.' },
      { time: 'Results', detail: 'Pass/fail within days.' },
      { time: 'Renewal', detail: 'Experience verification + 3-year CPE cycle.' }
    ],
    rules: ['125 questions, 3 hours', 'Computer-based at Pearson VUE', 'Pass standard set by ISC2', '3-year CPE renewal'],
    afterwards: 'Passing the SSCP plus the experience verification earns the Systems Security Certified Practitioner credential, ISC2\u2019s practitioner-level certification, renewable every 3 years with CPEs.'
  }
};

export default data;
