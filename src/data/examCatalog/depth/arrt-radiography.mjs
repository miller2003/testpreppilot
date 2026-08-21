const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Medical imaging & ARRT certifications desk',
    bio: 'ARRT structure and requirements come from the American Registry of Radiologic Technologists official pages and are revised with each exam update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the ARRT radiography exam structure, passing standard, and requirements against ARRT official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect radiologic-technologist pay at a May 2024 median of $77,660 (BLS) — the ARRT certification and state licensure gate the occupation, and radiography is the entry certification for the imaging career ladder',
    summary: 'The direct answer is that the ARRT certification in radiography is the professional credential that gates the occupation, radiologic technologists (SOC 29-2034), at a May 2024 median annual wage of $77,660, with the lowest 10 percent under about $48,000 and the highest 10 percent above about $100,000. The honest framing is that the ARRT credential is not optional in practice: most states require ARRT certification or an equivalent for state licensure, and virtually all employers require it to hire — so the certification is the hard gate to the occupation, and the pay is set by the healthcare labour market (hospital, outpatient, imaging center) rather than by the credential itself. BLS counted about 200,000 radiologic technologists in 2024 and projects about 5 percent employment growth from 2024 to 2034, with roughly 12,000 annual openings. The exam itself is the entry certification: ARRT radiography requires completion of an accredited radiography program, 220 multiple-choice questions in about 4 hours, with a passing standard set by ARRT\u2019s standard-setting process (reported as a scaled score), and the credential is renewable with continuing education every two years. The practical read: radiography is the base of the imaging ladder — after certification, technologists commonly add post-primary certifications (mammography, CT, MRI, sonography) that expand role options and pay — and the ARRT credential is the foundation of that career path. For candidates deciding whether to pursue it, the radiography pathway is a structured 2-year associate or 4-year program plus the exam, and the occupation behind it offers stable, well-paid, growing employment.',
    rows: [
      { label: 'Median annual wage, radiologic technologists', value: '$77,660', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 29-2034)' },
      { label: 'Lowest 10 percent', value: 'less than $48,000', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $100,000', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+5%', note: 'BLS Employment Projections' },
      { label: 'The certification itself', value: 'Professional gate', note: 'Required by most states for licensure and by employers for hiring' }
    ],
    growth: 'BLS projects about 5% growth for radiologic technologists from 2024 to 2034, with roughly 12,000 annual openings.',
    source: { label: 'BLS OOH — Radiologic Technologists', url: 'https://www.bls.gov/ooh/healthcare/radiologic-technologists.htm' }
  },
  passRate: {
    headline: 'ARRT publishes pass rates — recent first-attempt pass rates for radiography have run in the mid-80s percent range, and the exam is 220 questions in about 4 hours with a standard-set passing score',
    summary: 'The core fact is that ARRT does publish pass-rate data: the Registry reports first-attempt pass rates for its exams, and radiography has run in the mid-80s percent range in recent years — a strong pass-rate story relative to many professional exams, though the exact figure varies by cohort and year. The exam itself is a computer-based test of 220 multiple-choice questions with about 4 hours allowed, scored through ARRT\u2019s standard-setting process and reported as pass/fail on a scaled basis; the content follows the radiography content specifications, weighted across patient care, safety, image production, and procedures. The exam is taken after completing an accredited radiography program (2-year associate or 4-year bachelor\u2019s, with clinical education hours), and candidates must also meet ARRT\u2019s ethics requirements. The published pass-rate pattern is useful for planning: candidates who complete the accredited program and follow a structured 4-to-8-week review with full-length practice exams sit comfortably in the range of the published pass rates. The honest preparation implication is to treat the exam as a distinct preparation project after graduation — the exam rewards the content-specification coverage and the image-quality and safety items that dominate the paper — and to use the ARRT\u2019s official content specifications and practice questions as the calibration tools. Retakes are permitted after a waiting period, and the credential requires biennial continuing education to stay current.',
    source: { label: 'ARRT — Radiography exam information', url: 'https://www.arrt.org/' },
    caveat: 'ARRT publishes pass rates by cohort; recent first-attempt radiography pass rates have run in the mid-80s percent range.'
  },
  studyPlan: {
    summary: 'Plan for roughly 4 to 8 weeks and 80 to 120 hours of study after completing an accredited radiography program, structured around the ARRT content specifications — patient care, safety, image production, and procedures — with full-length practice exams as the calibration tool. The exam\u2019s weight favours the procedures and image-production sections, so allocate study time there first. The most effective sequence is: first, take a full-length practice exam in week one to baseline; second, review the patient-care and safety content, which is the memorisation-heavy foundation; third, study image production and equipment, where the physics and technique items live; fourth, drill the procedures section, the largest content block; and fifth, take two full-length practice exams under real timing in the final two weeks. The highest-yield habits are the full-length practice exams (the 220-question, 4-hour format is a stamina test) and daily image-quality review. Budget the final week for light review of the content specifications and rest. After the exam, factor the continuing-education requirement — ARRT certification requires biennial CEUs — and plan the post-primary certifications (CT, MRI, mammography) that expand the career path, since radiography is the base of the imaging ladder.',
    totalHours: '80-120 study hours over 4-8 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Baseline + patient care/safety', tasks: ['Take a full-length practice exam', 'Review patient care and safety content', 'Study radiation protection'], hours: 30 },
      { label: 'Weeks 3-5', focus: 'Image production + procedures', tasks: ['Study image production and equipment', 'Drill the procedures section', 'Take a second practice exam'], hours: 50 },
      { label: 'Weeks 6-7', focus: 'Full-length mocks', tasks: ['Take two full-length practice exams', 'Re-study weak content areas', 'Review the content specifications'], hours: 30 },
      { label: 'Final week', focus: 'Taper', tasks: ['Light review', 'Confirm exam logistics', 'Rest'], hours: 10 }
    ],
    variants: [
      { label: 'Post-primary certifications', detail: 'CT, MRI, mammography, and sonography certifications build on the radiography base.' },
      { label: 'State licensure', detail: 'Most states require ARRT certification or an equivalent for licensure; requirements vary.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes the ARRT radiography exam is "anchor on the content specifications, drill the procedures and image-production sections, and run full-length mocks," and the single biggest error is reviewing content without the practice-exam calibration, which the 220-question format punishes. A second proven approach is mastering the procedures section — the largest content block — with the positioning and image-quality specifics, since those items dominate the paper. Third, study the safety and radiation-protection content as a dedicated block; it is memorisation-heavy and reliably tested. Fourth, use the ARRT\u2019s official content specifications as the syllabus, since the exam is built from them, and the official practice questions as the calibration tool. Fifth, rehearse the 4-hour format with full-length mocks, because stamina and pacing are part of the exam. Finally, respect the continuing-education requirement from the start — ARRT certification renews biennially with CEUs — and plan the post-primary certifications that extend the career path.',
    items: [
      { title: 'Anchor on the content specifications', detail: 'The exam is built from the ARRT content specifications.' },
      { title: 'Drill procedures and image production', detail: 'The largest content blocks and the hardest items.' },
      { title: 'Master radiation safety', detail: 'A memorisation-heavy, reliably tested block.' },
      { title: 'Run full-length mocks', detail: 'The 220-question, 4-hour format is a stamina test.' },
      { title: 'Plan the CEUs and next certifications', detail: 'Biennial CEUs keep it current; CT/MRI expand the career.' }
    ]
  },
  resourceComparison: {
    summary: 'ARRT radiography preparation runs $200 to $800 depending on the prep package, with the highest-value spend on full-length practice exams and question banks that mirror the 220-question format. The comparison below separates the exam registration, official resources, and the major prep options, with prices current to this review. The buying rule is to budget for a prep package with full-length mocks, since the exam format rewards the mock-anchored approach.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ARRT radiography exam registration', values: ['~$225', 'Computer-based at Pearson VUE', 'The exam itself'] },
      { label: 'ARRT content specifications', values: ['Free', 'Official PDF', 'The authoritative syllabus'] },
      { label: 'Prep question banks (e.g. RadReview, Lange)', values: ['~$150-400', 'Online or book', 'Question drilling'] },
      { label: 'Full-length practice exams', values: ['~$50-150', 'Online timed exams', 'Format calibration'] },
      { label: 'Program-provided review', values: ['Included in tuition', 'School review course', 'Initial review after graduation'] }
    ],
    footnote: 'Prices approximate and dated to this review; the credential requires biennial continuing education.'
  },
  commonMistakes: {
    summary: 'The most common mistake is reviewing content without full-length practice-exam calibration, which the 220-question format punishes on pacing; the second is under-weighting the procedures section, the largest content block. A third recurring error is mixing up the positioning and image-quality specifics on procedure items. Candidates also routinely treat safety content as reviewable from work experience and skip the memorisation, and many start studying too late after graduation, compressing the 4-to-8-week plan. Finally, some candidates ignore the continuing-education and state-licensure requirements, passing the exam and then discovering the credential maintenance and licensure paperwork.',
    items: [
      { mistake: 'Skipping mock calibration', fix: 'Run full-length practice exams; pacing is part of the test.' },
      { mistake: 'Under-weighting procedures', fix: 'The largest content block; drill positioning and image quality.' },
      { mistake: 'Mixing up positioning specifics', fix: 'Review procedure items with the positioning details.' },
      { mistake: 'Skipping safety memorisation', fix: 'Radiation protection is reliably tested; study it as a block.' },
      { mistake: 'Forgetting CEUs and licensure', fix: 'Plan biennial CEUs and state licensure paperwork.' }
    ]
  },
  questionTypes: {
    summary: 'The ARRT radiography exam contains 220 multiple-choice questions in about 4 hours, scored through ARRT\u2019s standard-setting process and reported pass/fail, covering patient care, safety, image production, and procedures. Item formats include direct knowledge, positioning and image-quality items, and clinical scenario questions. The samples below are editor-written illustrations of the published content specifications, not live exam items.',
    types: [
      { name: 'Procedures', share: '~35%', detail: 'Positioning, anatomy, and image evaluation.' },
      { name: 'Image production', share: '~25%', detail: 'Physics, equipment, and technique.' },
      { name: 'Safety & radiation protection', share: '~20%', detail: 'Patient and operator protection, ALARA.' },
      { name: 'Patient care', share: '~20%', detail: 'Communication, infection control, and patient handling.' }
    ],
    samples: [
      {
        prompt: 'Which projection best demonstrates the carpal tunnel of the wrist?',
        options: ['A. PA wrist', 'B. Carpal canal (tunnel) projection', 'C. Lateral wrist', 'D. Oblique wrist'],
        answer: 'B',
        explanation: 'The carpal canal projection (tangential) demonstrates the carpal tunnel region.'
      },
      {
        prompt: 'What is the primary purpose of the ALARA principle in radiography?',
        options: ['A. To maximise image contrast', 'B. To keep radiation doses as low as reasonably achievable', 'C. To reduce exam time', 'D. To improve patient comfort'],
        answer: 'B',
        explanation: 'ALARA (as low as reasonably achievable) is the core radiation-protection principle.'
      },
      {
        prompt: 'Which personal protective practice is most important when imaging a patient with a suspected airborne infection?',
        options: ['A. Gloves only', 'B. A respirator or surgical mask with the facility\u2019s protocol', 'C. Goggles only', 'D. No protection if the exam is quick'],
        answer: 'B',
        explanation: 'Airborne precautions require respiratory protection per the facility\u2019s infection-control protocol.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published content specifications, not live exam items.'
  },
  examDay: {
    summary: 'The ARRT radiography exam is taken on computer at a Pearson VUE testing center: 220 multiple-choice questions with about 4 hours, reported pass/fail through ARRT\u2019s standard-setting process, with results typically available within a week or two. The core rules: bring valid photo ID, arrive early, and follow testing-center rules; no personal items in the testing room. After passing, the certification requires biennial continuing education to stay current, and most states require the credential for licensure. The most useful exam-day habits: pace at about a minute per question, flag and return to hard items, and use the scheduled break to reset. If you do not pass, ARRT allows retakes after a waiting period. After the exam, complete the state licensure paperwork, track the CEU cycle, and plan the post-primary certifications (CT, MRI, mammography) that expand the imaging career path.',
    bring: ['Valid photo ID', 'Arrival 30 minutes early', 'A 4-hour sitting mindset'],
    leave: ['Phone, smartwatch, and study materials (testing-center rules)', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Study', detail: 'Complete the program and the 4-8 week review with mocks.' },
      { time: 'Exam', detail: '220 questions in ~4 hours at Pearson VUE.' },
      { time: 'Results', detail: 'Pass/fail within a week or two.' },
      { time: 'Credential', detail: 'State licensure + biennial CEUs.' }
    ],
    rules: ['220 questions, ~4 hours', 'Computer-based at Pearson VUE', 'Pass/fail via standard-setting', 'Biennial CEUs required'],
    afterwards: 'Passing the ARRT radiography exam plus the ethics requirement earns ARRT certification, the professional gate for state licensure and the base of the imaging career ladder.'
  }
};

export default data;
