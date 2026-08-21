const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'IT governance & risk certifications desk',
    bio: 'ISACA certification structure comes from the ISACA official pages and is revised with each exam update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the CRISC exam structure, domains, and passing standard against ISACA official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect information-security-analyst pay at a May 2024 median of $124,910 (BLS) — the CRISC is ISACA\u2019s risk-and-compliance credential, and the governance, risk, and compliance roles it serves sit at the top of the security occupations',
    summary: 'The direct answer is that the CRISC (Certified in Risk and Information Systems Control) is ISACA\u2019s risk-management and control credential, and the occupations it serves — information security analysts (SOC 15-1212), at a May 2024 median annual wage of $124,910, and the broader risk and compliance roles that sit within business and financial operations — place CRISC holders in the well-compensated tier of security and governance work, with senior risk and GRC roles earning above the occupation medians. The honest framing is that the certification does not set pay — GRC salaries are set by market, employer, and seniority — but the credential signals risk-management and control competence (risk identification, assessment, response, and monitoring; and IS control design and implementation) that employers list for risk, compliance, and audit roles, and it is one of ISACA\u2019s most-taken certifications after CISA. BLS counted about 185,000 information security analysts in 2024 and projects about 30 percent employment growth from 2024 to 2034, much faster than average. The exam itself is a computer-based test of 150 questions with 4 hours, scored on a 200-800 scale with a passing standard of 450, and candidates must meet the experience requirement (typically 3 years of relevant work experience in at least 3 of the 5 CRISC domains). The practical read: the CRISC is the risk-and-compliance complement to the CISA (audit) credential, valuable for security and IT professionals moving into GRC, and the credential\u2019s value is the ISACA risk-management signal in a high-demand governance field. For candidates deciding whether to pursue it, the exam rewards applied risk-management knowledge, and the strongest preparation combines the ISACA QAE (Question & Answer Database) with the review manual.',
    rows: [
      { label: 'Median annual wage, information security analysts', value: '$124,910', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 15-1212)' },
      { label: 'Lowest 10 percent', value: 'less than $73,000', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $170,000', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+30%', note: 'BLS Employment Projections' },
      { label: 'The certification itself', value: 'Professional credential', note: '150 questions, 4 hours, passing standard 450/800' }
    ],
    growth: 'BLS projects about 30% growth for information security analysts from 2024 to 2034, much faster than average.',
    source: { label: 'BLS OOH — Information Security Analysts', url: 'https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm' }
  },
  passRate: {
    headline: 'ISACA publishes no pass rates — the CRISC is 150 questions in 4 hours with a passing standard of 450/800, and ISACA reports pass/fail rather than cohort data',
    summary: 'The core fact is that ISACA does not publish pass rates for the CRISC exam, and none is available from an independent source, because ISACA reports candidate pass/fail rather than cohort pass percentages. What is published is the exam structure: the CRISC is a computer-based test of 150 multiple-choice questions with 4 hours allowed, scored on a 200-800 scale with a passing standard of 450; the exam covers four domains — IT risk identification, IT risk assessment, risk response and mitigation, and risk and control monitoring and reporting — weighted across the paper. Candidates must also meet the experience requirement: typically three years of relevant work experience across at least three of the four domains, with an education waiver option. Because ISACA publishes the exam content outline and the QAE (Question & Answer Database), the preparation is studying the review manual and calibrating with the QAE; the classic failure mode is under-practising the applied risk-scenario items, which reward the ISACA risk-management framework rather than general security knowledge. The certification is valid and requires continuing professional education for renewal. The honest advice is to treat the content outline as the syllabus, complete the ISACA review manual, and drill the QAE extensively before booking, since the exam rewards the ISACA framework\u2019s specific approach to risk.',
    source: { label: 'ISACA — CRISC certification', url: 'https://www.isaca.org/' },
    caveat: 'ISACA publishes no pass rates; the passing standard is 450/800 and an experience requirement applies.'
  },
  studyPlan: {
    summary: 'Plan for roughly 10 to 14 weeks and 100 to 150 hours of study for the CRISC, structured around the four domains — risk identification, risk assessment, risk response and mitigation, and risk monitoring — with the ISACA QAE as the primary calibration tool. The exam\u2019s weight favours risk response and risk assessment, so allocate study time there first. The most effective sequence is: first, confirm your experience requirement eligibility and obtain the content outline; second, complete the ISACA review manual in order, learning the risk-management framework; third, drill the QAE domain by domain, since the exam rewards the ISACA approach; fourth, take timed QAE-based practice exams; and fifth, re-study the weak domains and book the exam. The highest-yield habit is the QAE drilling — the exam\u2019s scenario items mirror the QAE style, and candidates who complete the full database score well above those who only read. Budget the risk-response domain the most time, since it carries the largest question share. After passing, complete the experience verification and plan the CPE cycle, since the certification renews with continuing professional education.',
    totalHours: '100-150 study hours over 10-14 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Review manual', tasks: ['Confirm eligibility and get the outline', 'Complete the ISACA review manual', 'Log weak domains'], hours: 35 },
      { label: 'Weeks 4-8', focus: 'QAE drilling', tasks: ['Drill the QAE domain by domain', 'Study risk response and assessment deeply', 'Take a timed QAE practice exam'], hours: 60 },
      { label: 'Weeks 9-12', focus: 'Practice + gaps', tasks: ['Complete remaining QAE questions', 'Re-study weak domains', 'Take timed practice exams'], hours: 40 },
      { label: 'Final weeks', focus: 'Exam readiness', tasks: ['Light QAE review', 'Confirm exam logistics', 'Book the exam'], hours: 15 }
    ],
    variants: [
      { label: 'Experience requirement', detail: 'Typically 3 years across 3 of the 4 domains, with education waivers available.' },
      { label: 'CISA complement', detail: 'The CRISC pairs with the CISA (audit) credential for the GRC profile.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes the CRISC is "learn the ISACA risk framework from the review manual, then drill the QAE to fluency," and the single biggest error is preparing with general risk or security knowledge instead of the ISACA framework the exam tests. A second proven approach is weighting the risk-response and risk-assessment domains, which carry the largest question shares. Third, treat the QAE as the exam rehearsal — the scenario items mirror its style, and completing the full database is the strongest readiness predictor. Fourth, master the risk-scenario items, which present an organisation situation and ask for the ISACA-framework answer about identification, assessment, response, or monitoring. Fifth, confirm the experience requirement early, since eligibility is part of the certification gate. Finally, plan the CPE cycle from the start, since the credential renews with continuing professional education and letting it lapse is the most common way ISACA professionals lose the credential.',
    items: [
      { title: 'Learn the ISACA framework', detail: 'The exam tests the ISACA risk approach, not general knowledge.' },
      { title: 'Weight risk response and assessment', detail: 'The largest question shares.' },
      { title: 'Drill the QAE to fluency', detail: 'The full database is the strongest readiness predictor.' },
      { title: 'Confirm the experience requirement', detail: 'Eligibility is part of the certification gate.' },
      { title: 'Plan the CPE cycle', detail: 'The credential renews with continuing professional education.' }
    ]
  },
  resourceComparison: {
    summary: 'CRISC preparation runs $400 to $1,000 depending on the package, with the ISACA review manual and QAE as the core investment. The comparison below separates the exam fee, official resources, and the prep options, with prices current to this review. The buying rule is to budget for the QAE — it is the strongest calibration tool — and the review manual as the syllabus.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CRISC exam registration', values: ['~$400-575', 'Computer-based at PSI/Pearson VUE', 'The exam itself'] },
      { label: 'ISACA review manual', values: ['~$100-150', 'Book or digital', 'The authoritative syllabus'] },
      { label: 'ISACA QAE (Question & Answer Database)', values: ['~$150-250', 'Online question bank', 'The primary calibration tool'] },
      { label: 'ISACA review courses', values: ['~$500-1,000', 'Instructor-led or online', 'Structured review'] },
      { label: 'Application fee (experience verification)', values: ['Included/varies', 'Online application', 'The certification gate'] }
    ],
    footnote: 'Prices approximate and dated to this review; the experience requirement applies and CPEs maintain the certification.'
  },
  commonMistakes: {
    summary: 'The most common mistake is preparing with general risk or security knowledge instead of the ISACA framework the exam tests; the second is under-using the QAE, the strongest calibration tool. A third recurring error is being weak on the risk-scenario items, which reward the ISACA approach to identification, assessment, response, and monitoring. Candidates also routinely ignore the experience requirement until after the exam, and many let the CPE cycle lapse, losing the credential. Finally, some candidates skip the review manual and study QAE answers alone, missing the framework the answers depend on.',
    items: [
      { mistake: 'General-knowledge preparation', fix: 'Learn the ISACA risk framework from the review manual.' },
      { mistake: 'Under-using the QAE', fix: 'Complete the full database; it is the strongest predictor.' },
      { mistake: 'Weak on risk scenarios', fix: 'Drill the identification-to-monitoring scenario items.' },
      { mistake: 'Ignoring the experience gate', fix: 'Confirm the 3-year experience requirement early.' },
      { mistake: 'Missing the CPE cycle', fix: 'Plan continuing professional education from the start.' }
    ]
  },
  questionTypes: {
    summary: 'The CRISC contains 150 multiple-choice questions in 4 hours, scored on a 200-800 scale with a passing standard of 450, covering four domains: IT risk identification, IT risk assessment, risk response and mitigation, and risk and control monitoring and reporting. The signature item format presents an organisational risk situation and asks for the ISACA-framework action. The samples below are editor-written illustrations of the published content outline, not live exam items.',
    types: [
      { name: 'Risk identification', share: '~30%', detail: 'Identifying and classifying IT risk.' },
      { name: 'Risk assessment', share: '~20%', detail: 'Analysing and evaluating risk.' },
      { name: 'Risk response & mitigation', share: '~35%', detail: 'Selecting and implementing responses.' },
      { name: 'Risk monitoring & reporting', share: '~15%', detail: 'Monitoring and communicating risk.' }
    ],
    samples: [
      {
        prompt: 'Which risk response is most appropriate for a high-impact risk the organisation accepts deliberately?',
        options: ['A. Mitigation', 'B. Acceptance with documented rationale', 'C. Avoidance', 'D. Transfer without review'],
        answer: 'B',
        explanation: 'Acceptance with documented rationale is the appropriate response when the organisation consciously accepts the risk.'
      },
      {
        prompt: 'Which process identifies emerging IT risks before they materialise?',
        options: ['A. Continuous risk monitoring', 'B. One-time assessment', 'C. Incident response only', 'D. Audit remediation'],
        answer: 'A',
        explanation: 'Continuous monitoring identifies emerging risks as the environment changes.'
      },
      {
        prompt: 'Which factor is most important when prioritising IT risks for response?',
        options: ['A. The risk\u2019s likelihood and impact', 'B. The cost of the assessment', 'C. The auditor\u2019s preference', 'D. The number of stakeholders'],
        answer: 'A',
        explanation: 'Risk prioritisation is driven by likelihood and impact.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published content outline, not live exam items.'
  },
  examDay: {
    summary: 'The CRISC is taken on computer at a PSI or Pearson VUE testing center: 150 multiple-choice questions with 4 hours, scored on a 200-800 scale with a passing standard of 450, with results typically available within a few days. The core rules: bring valid photo ID, arrive early, and follow testing-center rules. The certification requires the experience verification after the exam. The most useful exam-day habits: pace at about 1.6 minutes per question, flag and return to the scenario items, and answer every question (no penalty for guessing). If you do not pass, ISACA allows retakes after a waiting period. After passing, complete the experience verification, then plan the CPE cycle, since the credential renews with continuing professional education.',
    bring: ['Valid photo ID', 'Arrival 30 minutes early', 'A 4-hour sitting mindset'],
    leave: ['Phone, smartwatch, and study materials (testing-center rules)', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Study', detail: '10-14 weeks; review manual plus QAE drilling.' },
      { time: 'Exam', detail: '150 questions in 4 hours; 450/800 to pass.' },
      { time: 'Results', detail: 'Pass/fail within days.' },
      { time: 'Certification', detail: 'Complete experience verification; maintain with CPEs.' }
    ],
    rules: ['150 questions, 4 hours', 'Passing standard 450/800', 'Computer-based at PSI/Pearson VUE', 'Experience requirement + CPEs'],
    afterwards: 'Passing the CRISC plus the experience verification earns the Certified in Risk and Information Systems Control credential, ISACA\u2019s risk-and-compliance certification, maintained with CPEs.'
  }
};

export default data;
