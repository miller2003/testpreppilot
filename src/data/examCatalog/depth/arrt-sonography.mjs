const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Medical imaging & sonography certifications desk',
    bio: 'ARDMS structure and requirements come from the American Registry for Diagnostic Medical Sonography official pages and are revised with each exam update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the ARDMS sonography exam pathway (SPI + specialty) and requirements against ARDMS official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect diagnostic-medical-sonographer pay at a May 2024 median of $89,340 (BLS) — the ARDMS credential gates the occupation, and the SPI plus specialty-exam pathway is the industry-standard route',
    summary: 'The direct answer is that the ARDMS (American Registry for Diagnostic Medical Sonography) credential is the professional gate for the occupation, diagnostic medical sonographers (SOC 29-2032), at a May 2024 median annual wage of $89,340, with the lowest 10 percent under about $61,000 and the highest 10 percent above about $126,000. The honest framing is that the credential is effectively required in practice: most employers and many states require ARDMS certification or an equivalent for sonography positions, so the credential is the hard gate to the occupation, and the pay is set by the healthcare labour market (hospital, outpatient, clinic) rather than by the credential itself. BLS counted about 72,000 diagnostic medical sonographers in 2024 and projects about 6 percent employment growth from 2024 to 2034, with roughly 4,500 annual openings. The credential path is two-part: candidates must first pass the Sonography Principles and Instrumentation (SPI) exam, then pass at least one specialty exam — abdomen (AB), obstetrics and gynecology (OB/GYN), vascular technology (RVT), or others — to earn the RDMS credential in that specialty. The practical read: sonography is a well-paid allied-health career with a structured credential path, and the SPI-plus-specialty sequence is the industry standard; candidates typically complete an accredited sonography program (2-year associate or 4-year degree) before the exams, and the credential renews with continuing education. For candidates deciding whether to pursue it, the sonography pathway is a structured educational commitment with a strong pay and growth profile behind it.',
    rows: [
      { label: 'Median annual wage, diagnostic medical sonographers', value: '$89,340', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 29-2032)' },
      { label: 'Lowest 10 percent', value: 'less than $61,000', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $126,000', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+6%', note: 'BLS Employment Projections' },
      { label: 'The credential path', value: 'Professional gate', note: 'SPI exam + specialty exam (e.g. abdomen, OB/GYN, vascular)' }
    ],
    growth: 'BLS projects about 6% growth for diagnostic medical sonographers from 2024 to 2034, with roughly 4,500 annual openings.',
    source: { label: 'BLS OOH — Diagnostic Medical Sonographers', url: 'https://www.bls.gov/ooh/healthcare/diagnostic-medical-sonographers.htm' }
  },
  passRate: {
    headline: 'ARDMS publishes pass rates — recent SPI and specialty exam pass rates have run in the 60-70% range for first-time candidates, and the SPI is a 110-question, 2-hour exam',
    summary: 'The core fact is that ARDMS does publish pass-rate data: the Registry reports pass rates for its exams, and the SPI and the sonography specialty exams have run in the 60 to 70 percent range for first-time candidates in recent years — a demanding but passable exam, with the exact figures varying by exam and cohort. The SPI exam itself is a computer-based test of 110 multiple-choice questions with 2 hours allowed, scored pass/fail through ARDMS\u2019s standard-setting process, covering ultrasound physics, instrumentation, and safety. The specialty exams (abdomen, OB/GYN, vascular, etc.) are separate, longer exams (typically 170 questions with about 3 hours) covering the specialty\u2019s anatomy, pathology, and scanning content. The credential requires passing the SPI plus at least one specialty exam, and candidates must meet ARDMS\u2019s prerequisites — typically graduation from an accredited sonography program with clinical hours, or an equivalent pathway. The published pass-rate pattern is useful for planning: candidates who complete an accredited program and follow a structured 6-to-12-week review with question-bank practice sit within the range of the published pass rates. The honest preparation implication is to treat the SPI as the physics foundation — candidates who pass it early build momentum for the specialty exam — and to use the ARDMS exam content outline and question banks as the calibration tools.',
    source: { label: 'ARDMS — exam pass rates', url: 'https://www.ardms.org/' },
    caveat: 'ARDMS publishes pass rates by exam; recent first-time pass rates have run in the 60-70% range.'
  },
  studyPlan: {
    summary: 'Plan for roughly 6 to 12 weeks per exam and 80 to 120 hours of study each for the SPI and your specialty exam, sequenced as SPI-first, with question-bank practice as the calibration tool. The SPI covers ultrasound physics and instrumentation — sound principles, transducers, instrumentation, image formation, and safety — and is the foundation every specialty builds on. The specialty exams (abdomen, OB/GYN, vascular) cover the specialty\u2019s anatomy, physiology, pathology, and scanning protocols. The most effective sequence is: first, complete the SPI content review with the physics text and question bank; second, take a full-length SPI practice exam and pass it before booking; third, pass the SPI; fourth, begin the specialty exam review, studying the anatomy and pathology content and drilling the case-style questions; and fifth, take full-length specialty practice exams before booking. The highest-yield habits are the question-bank drilling and the case-based specialty items, which mirror the real exam. Budget the physics foundation the most time — candidates who rush the SPI struggle on the specialty exam\u2019s instrumentation items. After certification, factor the continuing-education requirement — ARDMS credentials renew with CEUs every few years — and plan additional specialties, which many sonographers add to expand role options and pay.',
    totalHours: '80-120 hours per exam; SPI-first sequence',
    weeks: [
      { label: 'Weeks 1-4', focus: 'SPI content', tasks: ['Study ultrasound physics and instrumentation', 'Drill the SPI question bank', 'Take a full-length SPI practice exam'], hours: 50 },
      { label: 'Weeks 5-6', focus: 'SPI exam', tasks: ['Re-study weak physics areas', 'Take the SPI exam'], hours: 30 },
      { label: 'Weeks 7-10', focus: 'Specialty content', tasks: ['Study the specialty anatomy and pathology', 'Drill case-based specialty questions', 'Take full-length specialty practice exams'], hours: 60 },
      { label: 'Final weeks', focus: 'Specialty exam', tasks: ['Re-study weak areas', 'Book and take the specialty exam'], hours: 20 }
    ],
    variants: [
      { label: 'Specialty options', detail: 'Abdomen, OB/GYN, vascular technology, and other specialties, each with its own exam.' },
      { label: 'Post-primary pathway', detail: 'Radiologic technologists can add sonography credentials through ARDMS post-primary eligibility.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes the ARDMS exams is "pass the SPI first as the physics foundation, then drill the specialty case-based items with question banks," and the single biggest error is taking the specialty exam before solid physics grounding. A second proven approach is using the ARDMS exam content outlines as the syllabus, since the exams are built from them, and question banks as the calibration tool. Third, master the physics fundamentals — the SPI rewards precision on instrumentation and image-formation items, and candidates who rush it struggle across the specialty exam. Fourth, drill the specialty case-based questions, which mirror the real exam\u2019s anatomy-pathology-scenario format. Fifth, take full-length practice exams under real timing, since the 170-question specialty format is a stamina test. Finally, respect the continuing-education requirement from the start — ARDMS credentials renew with CEUs — and plan additional specialties, since multi-specialty sonographers are more employable and better paid.',
    items: [
      { title: 'Pass SPI first', detail: 'The physics foundation underpins every specialty exam.' },
      { title: 'Use the content outlines as the syllabus', detail: 'The exams are built from the ARDMS content outlines.' },
      { title: 'Drill the case-based items', detail: 'The specialty exams reward anatomy-pathology-scenario questions.' },
      { title: 'Run full-length practice exams', detail: 'The 170-question specialty format is a stamina test.' },
      { title: 'Plan the CEUs and extra specialties', detail: 'Multi-specialty sonographers are more employable and better paid.' }
    ]
  },
  resourceComparison: {
    summary: 'ARDMS exam preparation runs $200 to $600 per exam depending on the prep package, with question banks and full-length practice exams as the highest-value spend. The comparison below separates the exam fees, official resources, and the major prep options, with prices current to this review. The buying rule is to budget for a question bank plus full-length practice exams, since the exam format rewards the practice-anchored approach.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'SPI exam registration (ARDMS)', values: ['~$250', 'Computer-based at Pearson VUE', 'The SPI exam'] },
      { label: 'Specialty exam registration', values: ['~$250-300', 'Computer-based at Pearson VUE', 'The specialty exam'] },
      { label: 'ARDMS exam content outlines', values: ['Free', 'Official PDFs', 'The authoritative syllabus'] },
      { label: 'Question banks (e.g. Davies, ExamEdge)', values: ['~$100-250', 'Online practice questions', 'Question drilling'] },
      { label: 'Full-length practice exams', values: ['~$50-150', 'Online timed exams', 'Format calibration'] }
    ],
    footnote: 'Prices approximate and dated to this review; the credential requires CEUs for renewal.'
  },
  commonMistakes: {
    summary: 'The most common mistake is taking the specialty exam before solid physics grounding, which surfaces on the instrumentation items; the second is studying content without question-bank calibration, which the exam format punishes. A third recurring error is being weak on the case-based specialty items, which dominate the real exam. Candidates also routinely skip full-length practice exams and fail on stamina in the 170-question format, and many under-plan the continuing-education renewal. Finally, some candidates treat the credential as one-and-done, missing the multi-specialty expansion that drives employability and pay in the field.',
    items: [
      { mistake: 'Specialty before physics', fix: 'Pass the SPI first; it is the foundation of every specialty.' },
      { mistake: 'Content without question banks', fix: 'Calibrate with question-bank and full-length practice exams.' },
      { mistake: 'Weak on case-based items', fix: 'Drill the anatomy-pathology-scenario questions.' },
      { mistake: 'Skipping full-length mocks', fix: 'The 170-question format is a stamina test; rehearse it.' },
      { mistake: 'Missing CEUs and extra specialties', fix: 'Plan renewal and multi-specialty expansion.' }
    ]
  },
  questionTypes: {
    summary: 'The SPI exam contains 110 multiple-choice questions in 2 hours covering ultrasound physics, instrumentation, and safety. The specialty exams contain about 170 questions in about 3 hours covering the specialty\u2019s anatomy, physiology, pathology, and scanning protocols, with a large share of case-based items. The samples below are editor-written illustrations of the published content outlines, not live exam items.',
    types: [
      { name: 'Ultrasound physics & instrumentation', share: 'SPI: 100%', detail: 'Sound principles, transducers, instrumentation, image formation, and safety.' },
      { name: 'Specialty anatomy & physiology', share: '~40%', detail: 'Organ anatomy and normal variants for the specialty.' },
      { name: 'Specialty pathology', share: '~40%', detail: 'Disease appearance and differential considerations.' },
      { name: 'Scanning protocols & safety', share: '~20%', detail: 'Protocols, image optimisation, and patient safety.' }
    ],
    samples: [
      {
        prompt: 'What is the primary determinant of axial resolution in ultrasound imaging?',
        options: ['A. Pulse length', 'B. Beam width', 'C. Transducer frequency only', 'D. Image depth'],
        answer: 'A',
        explanation: 'Axial resolution is determined primarily by pulse length — shorter pulses give better axial resolution.'
      },
      {
        prompt: 'Which transducer frequency range is typically used for abdominal imaging?',
        options: ['A. 1-2 MHz', 'B. 2-5 MHz', 'C. 7-12 MHz', 'D. 15-20 MHz'],
        answer: 'B',
        explanation: 'Abdominal imaging typically uses 2-5 MHz transducers for adequate penetration at depth.'
      },
      {
        prompt: 'Which finding is most characteristic of a simple cyst on ultrasound?',
        options: ['A. Internal echoes and thick walls', 'B. Anechoic content, smooth walls, and posterior acoustic enhancement', 'C. Shadowing with no through-transmission', 'D. High vascularity on Doppler'],
        answer: 'B',
        explanation: 'A simple cyst appears anechoic with smooth walls and posterior acoustic enhancement.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published content outlines, not live exam items.'
  },
  examDay: {
    summary: 'The ARDMS exams are taken on computer at a Pearson VUE testing center: the SPI is 110 questions in 2 hours, and the specialty exams about 170 questions in about 3 hours, scored pass/fail through ARDMS\u2019s standard-setting, with results typically available within a few weeks. The core rules: bring valid photo ID, arrive early, and follow testing-center rules. After passing the SPI and a specialty exam, ARDMS issues the RDMS credential in that specialty, renewable with continuing education. The most useful exam-day habits: pace the SPI at about a minute per question, pace the specialty exam at about a minute per question with the case items weighted, and flag and return to hard items. If you do not pass, ARDMS allows retakes after a waiting period. After the credential, track the CEU cycle and plan additional specialties to expand employability.',
    bring: ['Valid photo ID', 'Arrival 30 minutes early', 'A full-exam mindset for the 2-3 hour format'],
    leave: ['Phone, smartwatch, and study materials (testing-center rules)', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Study', detail: 'SPI-first review with question banks and full-length practice exams.' },
      { time: 'SPI exam', detail: '110 questions in 2 hours; pass/fail via standard-setting.' },
      { time: 'Specialty exam', detail: '~170 questions in ~3 hours; pass/fail.' },
      { time: 'Credential', detail: 'RDMS issued in the specialty; CEUs maintain it.' }
    ],
    rules: ['SPI: 110 questions, 2 hours', 'Specialty: ~170 questions, ~3 hours', 'Computer-based at Pearson VUE', 'CEUs required for renewal'],
    afterwards: 'Passing the SPI plus a specialty exam earns the RDMS credential in that specialty, the industry-standard sonography certification, maintained with continuing education.'
  }
};

export default data;
