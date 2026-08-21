const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Behavioral health credentialing desk',
    bio: 'BCBA structure and requirements come from the Behavior Analyst Certification Board (BACB) official pages and are revised with each standards update. Wage figures come from the BLS OEWS series named by code, with the occupational fit noted since BLS has no BCBA-specific code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the BCBA exam structure, eligibility, and pass-rate reporting against BACB official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect behavioral-analyst pay well above the counseling median — the closest BLS occupation, substance abuse and behavioral disorder counselors, earns $59,190 (May 2024), while applied-behavior-analyst roles typically pay $75,000-100,000+',
    summary: 'The direct answer is that the BCBA (Board Certified Behavior Analyst) certification is the professional credential for applied behavior analysis, and the closest BLS occupation, substance abuse, behavioral disorder, and mental health counselors (SOC 21-1013), earned a May 2024 median annual wage of $59,190 — but the honest framing is that BLS has no BCBA-specific code, and BCBA salaries are widely reported by industry surveys (including the BACB\u2019s own salary reporting and third-party surveys) in the $75,000 to $100,000+ range, with clinical directors and independent practitioners earning more, driven by the high demand for ABA services in autism treatment. The credential is the gate for supervising ABA practice in most settings: the BACB certifies BCBAs who design and supervise behavior-intervention programs, and employers — especially ABA clinics and school districts — require the credential for the roles that pay the occupation\u2019s upper range. The pathway is substantial: a master\u2019s degree, verified coursework in behavior analysis, 1,500 supervised fieldwork hours, and the exam, followed by ongoing supervision requirements. BLS projects about 17 percent growth for substance abuse and behavioral disorder counselors from 2024 to 2034, much faster than average, reflecting the broader behavioral-health demand that drives ABA. The practical read: the BCBA is a significant professional investment — years of education and supervised hours plus a demanding exam — with a strong pay and demand profile behind it, and the credential is the standard gate for behavior-analyst careers.',
    rows: [
      { label: 'Median annual wage, substance abuse & behavioral disorder counselors', value: '$59,190', note: 'BLS OEWS, May 2024 (SOC 21-1013)' },
      { label: 'Projected growth, 2024-34', value: '+17%', note: 'BLS Employment Projections' },
      { label: 'The certification itself', value: 'Professional gate', note: 'BACB credential: master\u2019s + verified coursework + 1,500 supervised hours + exam' }
    ],
    growth: 'BLS projects about 17% growth for substance abuse and behavioral disorder counselors from 2024 to 2034, much faster than average.',
    source: { label: 'BLS OOH — Substance Abuse, Behavioral Disorder, and Mental Health Counselors', url: 'https://www.bls.gov/ooh/community-and-social-service/substance-abuse-behavioral-disorder-and-mental-health-counselors.htm' }
  },
  passRate: {
    headline: 'BACB publishes pass rates — recent BCBA exam pass rates have run around 60-70% for first-time candidates; the exam is 160 questions in 4 hours with a pass point set by the BACB',
    summary: 'The core fact is that the BACB does publish pass rates: the Board reports quarterly and annual pass rates by exam type, and recent BCBA exam pass rates have run approximately in the 60 to 70 percent range for first-time candidates, with some variation by cohort. The exam itself is a computer-based test of 160 multiple-choice questions with 4 hours allowed, administered at Pearson VUE testing centers, with a pass point (passing score) set by the BACB through a standard-setting process; the exam covers the BCBA task list — behaviorism and philosophical foundations, concepts and principles, measurement and data analysis, experimental design, ethics, and behavior-change procedures. Eligibility requires a master\u2019s degree, completion of verified course sequence in behavior analysis, and 1,500 hours of supervised fieldwork. The published pass-rate pattern is useful for planning: candidates who complete the verified coursework and fieldwork, then follow a structured 8-to-12-week review with practice-exam calibration, sit within the range of the published pass rates. The honest preparation implication is to treat the exam as a distinct preparation project — the task list is the syllabus, and the practice exams (including the BACB\u2019s official practice test) are the calibration tools.',
    source: { label: 'BACB — BCBA exam pass rates', url: 'https://www.bacb.com/' },
    caveat: 'BACB publishes pass rates by cohort; recent first-time BCBA pass rates ~60-70%.'
  },
  studyPlan: {
    summary: 'Plan for roughly 8 to 12 weeks and 120 to 180 hours of study for the BCBA exam after completing the verified coursework and supervised fieldwork, structured around the task list — concepts and principles, measurement, experimental design, behavior-change procedures, and ethics — with practice-exam calibration. The exam\u2019s weight favours the concepts-and-principles and behavior-change-procedure content, so allocate study time there first. The most effective sequence is: first, obtain the task list and take a practice exam to baseline; second, master the concepts and principles content, the conceptual foundation; third, study measurement, data analysis, and experimental design; fourth, drill the behavior-change procedures, the largest applied block; fifth, study the ethics content; and sixth, take full-length practice exams under real timing in the final month. The highest-yield habits are the practice exams (the 160-question, 4-hour format is a stamina test) and drilling the applied scenario items, which dominate the paper. Budget the final week for light task-list review and rest. After passing, complete the supervision requirement for maintenance and plan the continuing-education cycle.',
    totalHours: '120-180 study hours over 8-12 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Baseline + concepts', tasks: ['Get the task list and take a practice exam', 'Study concepts and principles', 'Log weak areas'], hours: 45 },
      { label: 'Weeks 4-7', focus: 'Measurement + procedures', tasks: ['Study measurement and experimental design', 'Drill behavior-change procedures', 'Take a second practice exam'], hours: 60 },
      { label: 'Weeks 8-10', focus: 'Ethics + mocks', tasks: ['Study the ethics content', 'Take full-length practice exams', 'Re-study weak areas'], hours: 45 },
      { label: 'Final weeks', focus: 'Exam readiness', tasks: ['Light task-list review', 'Confirm exam logistics', 'Rest'], hours: 20 }
    ],
    variants: [
      { label: 'BCaBA', detail: 'The bachelor\u2019s-level assistant credential, with a shorter exam and lighter eligibility.' },
      { label: 'RBT', detail: 'The registered behavior technician credential for direct-service staff, requiring a shorter exam.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes the BCBA exam is "anchor on the task list, weight concepts and behavior-change procedures, and run full-length practice exams," and the single biggest error is reviewing coursework content instead of preparing for the exam\u2019s applied scenario format. A second proven approach is mastering the concepts-and-principles foundation, since the scenario items build on it. Third, drill the behavior-change procedure items, the largest applied block, with the scenario format. Fourth, use the full-length practice exams as the calibration tool — the 160-question, 4-hour format is a stamina test, and practice scores are the honest readiness signal. Fifth, master the ethics content, a dependable block that the BACB weighs heavily. Finally, plan the fieldwork documentation and the maintenance requirements from the start, since eligibility and renewal are part of the credential\u2019s structure.',
    items: [
      { title: 'Anchor on the task list', detail: 'The exam is built from the BCBA task list.' },
      { title: 'Weight concepts and procedures', detail: 'The conceptual foundation and the largest applied block.' },
      { title: 'Drill the scenario format', detail: 'Applied scenario items dominate the paper.' },
      { title: 'Run full-length practice exams', detail: 'The 160-question format is a stamina test.' },
      { title: 'Master the ethics content', detail: 'A dependable block the BACB weighs heavily.' }
    ]
  },
  resourceComparison: {
    summary: 'BCBA preparation runs $400 to $1,500 depending on the package, with the task list as the free authoritative syllabus and the practice exams as the calibration tool. The comparison below separates the exam fee, official resources, and the major prep options, with prices current to this review. The buying rule is to budget for a structured prep course with full-length mocks, since the exam format rewards the mock-anchored approach.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'BCBA exam registration', values: ['~$175', 'Computer-based at Pearson VUE', 'The exam itself'] },
      { label: 'BACB task list', values: ['Free', 'Official PDF', 'The authoritative syllabus'] },
      { label: 'BACB official practice exam', values: ['~$60-90', 'Online practice exam', 'Official format calibration'] },
      { label: 'Prep courses (e.g. BDS, FIT, Pass the Big ABA)', values: ['~$300-1,200', 'Online courses + question banks', 'Structured 8-12 week review'] },
      { label: 'Verified course sequence + fieldwork', values: ['Included in master\u2019s', 'Graduate coursework + supervision', 'The eligibility requirements'] }
    ],
    footnote: 'Prices approximate and dated to this review; eligibility requires the master\u2019s, verified coursework, and 1,500 supervised hours.'
  },
  commonMistakes: {
    summary: 'The most common mistake is reviewing coursework content instead of preparing for the exam\u2019s applied scenario format; the second is under-weighting the concepts-and-principles foundation, which the scenario items build on. A third recurring error is being weak on the behavior-change procedure items, the largest applied block. Candidates also routinely skip full-length practice exams and fail on stamina in the 4-hour format, and many neglect the ethics content, losing a dependable block. Finally, some candidates underestimate the fieldwork documentation, discovering eligibility gaps after the exam.',
    items: [
      { mistake: 'Coursework-style review', fix: 'Prepare for the applied scenario format with practice exams.' },
      { mistake: 'Weak concepts foundation', fix: 'Master concepts and principles; scenarios build on them.' },
      { mistake: 'Under-drilling procedures', fix: 'The behavior-change block is the largest applied share.' },
      { mistake: 'Skipping full-length mocks', fix: 'The 160-question, 4-hour format is a stamina test.' },
      { mistake: 'Neglecting fieldwork documentation', fix: 'Document the 1,500 supervised hours as you go.' }
    ]
  },
  questionTypes: {
    summary: 'The BCBA exam contains 160 multiple-choice questions in 4 hours, covering the task list areas — concepts and principles, measurement and data analysis, experimental design, behavior-change procedures, and ethics — with a dominant share of applied scenario items. The samples below are editor-written illustrations of the published task list, not live exam items.',
    types: [
      { name: 'Concepts & principles', share: '~25%', detail: 'Behaviorism, reinforcement, and stimulus control.' },
      { name: 'Behavior-change procedures', share: '~30%', detail: 'Interventions and their applications.' },
      { name: 'Measurement & design', share: '~20%', detail: 'Data analysis and experimental design.' },
      { name: 'Ethics & professionalism', share: '~15%', detail: 'The ethics code and professional conduct.' },
      { name: 'Philosophical foundations', share: '~10%', detail: 'The conceptual basis of ABA.' }
    ],
    samples: [
      {
        prompt: 'A behavior increases immediately after a stimulus is removed. Which principle is demonstrated?',
        options: ['A. Positive reinforcement', 'B. Negative reinforcement', 'C. Punishment', 'D. Extinction'],
        answer: 'B',
        explanation: 'Negative reinforcement is the increase in behavior following the removal of a stimulus.'
      },
      {
        prompt: 'Which schedule of reinforcement produces a steady rate of responding?',
        options: ['A. Fixed ratio', 'B. Variable ratio', 'C. Fixed interval', 'D. Continuous only'],
        answer: 'B',
        explanation: 'Variable-ratio schedules produce steady, high rates of responding.'
      },
      {
        prompt: 'Which ethical consideration is paramount when designing a behavior intervention?',
        options: ['A. Client dignity and assent', 'B. Speed of implementation', 'C. Cost of materials', 'D. Parent convenience'],
        answer: 'A',
        explanation: 'The ethics code prioritises client dignity, assent, and humane intervention.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published task list, not live exam items.'
  },
  examDay: {
    summary: 'The BCBA exam is taken on computer at a Pearson VUE testing center: 160 multiple-choice questions with 4 hours, with a pass point set by the BACB, with results typically available within a few days. The core rules: bring valid photo ID, arrive early, and follow testing-center rules. After passing, complete the certification application and plan the ongoing supervision and continuing-education requirements. The most useful exam-day habits: pace at about 1.5 minutes per question, flag and return to the scenario items, and answer every question (no penalty for guessing). If you do not pass, the BACB allows retakes after a waiting period. After certification, complete the maintenance requirements — ongoing supervision and CEUs — and consider the BCBA-D or other advanced credentials for the career path.',
    bring: ['Valid photo ID', 'Arrival 30 minutes early', 'A 4-hour sitting mindset'],
    leave: ['Phone, smartwatch, and study materials (testing-center rules)', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Eligibility', detail: 'Complete the master\u2019s, verified coursework, and 1,500 supervised hours.' },
      { time: 'Exam', detail: '160 questions in 4 hours at Pearson VUE.' },
      { time: 'Results', detail: 'Pass/fail within days.' },
      { time: 'Maintenance', detail: 'Ongoing supervision and CEUs.' }
    ],
    rules: ['160 questions, 4 hours', 'Computer-based at Pearson VUE', 'Pass point set by the BACB', 'Supervision + CEU maintenance'],
    afterwards: 'Passing the BCBA exam plus completing the eligibility requirements earns the Board Certified Behavior Analyst credential, the standard gate for ABA practice.'
  }
};

export default data;
