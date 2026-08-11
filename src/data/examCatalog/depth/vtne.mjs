const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Veterinary technology credentialing desk',
    bio: 'VTNE structure and requirements come from the American Association of Veterinary State Boards (AAVSB) official pages and are revised with each exam update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the VTNE structure, pass-rate reporting, and requirements against AAVSB official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect veterinary-technician pay at a May 2024 median of $45,980 (BLS) — the VTNE is the credential most states require for credentialed veterinary technicians, and the occupation is growing faster than average',
    summary: 'The direct answer is that the VTNE (Veterinary Technician National Examination) is the credential most states require for credentialed veterinary technicians, and the occupation it serves, veterinary technologists and technicians (SOC 29-2056), earned a May 2024 median annual wage of $45,980, with the lowest 10 percent under about $33,000 and the highest 10 percent above about $62,000. The honest framing is that the exam does not set pay — veterinary-technician wages are set by the veterinary-practice labour market, a field widely acknowledged to underpay relative to demand — but the credential is the professional gate: employers and state boards require VTNE-based credentialing for the roles, and the occupation is growing. BLS counted about 115,000 veterinary technologists and technicians in 2024 and projects about 15 percent employment growth from 2024 to 2034, much faster than average, with roughly 8,500 annual openings — demand driven by expanding veterinary services and specialty care. The exam itself is a computer-based test of 170 multiple-choice questions with 3 hours, covering nine domains — pharmacology, surgical preparation, dentistry, laboratory procedures, animal care and nursing, diagnostic imaging, anesthesia, emergency and critical care, and pain management — and the AAVSB publishes pass rates, with recent first-attempt pass rates running in the 60 to 70 percent range. The practical read: the VTNE is the final barrier of a two-year accredited veterinary-technology program pathway, the pass-rate data supports a structured 6-to-10-week study plan, and the occupation behind it offers growing demand in a mission-driven field.',
    rows: [
      { label: 'Median annual wage, veterinary technologists & technicians', value: '$45,980', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 29-2056)' },
      { label: 'Lowest 10 percent', value: 'less than $33,000', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $62,000', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+15%', note: 'BLS Employment Projections' },
      { label: 'The exam itself', value: 'Credential gate', note: 'AAVSB-administered; first-time pass rate ~60-70%' }
    ],
    growth: 'BLS projects about 15% growth for veterinary technologists and technicians from 2024 to 2034, much faster than average.',
    source: { label: 'BLS OOH — Veterinary Technologists and Technicians', url: 'https://www.bls.gov/ooh/healthcare/veterinary-technologists-and-technicians.htm' }
  },
  passRate: {
    headline: 'AAVSB publishes pass rates — recent VTNE first-attempt pass rates have run around 60-70%; the exam is 170 questions in 3 hours',
    summary: 'The core fact is that the AAVSB does publish VTNE pass rates: the association reports annual pass-rate data by candidate type, and recent first-attempt pass rates have run approximately in the 60 to 70 percent range, with variation by cohort and by the candidate\u2019s program of origin (graduates of accredited programs typically pass at higher rates). The exam itself is a computer-based test of 170 multiple-choice questions with 3 hours allowed, delivered at PSI testing centers, with a pass point set through the AAVSB\u2019s standard-setting process; the exam covers nine domains — pharmacology, surgical preparation and assisting, dentistry, laboratory procedures, animal care and nursing, diagnostic imaging, anesthesia, emergency and critical care, and pain management — weighted across the paper. Eligibility requires graduation from an American Veterinary Medical Association (AVMA)-accredited veterinary technology program, or an equivalent approved pathway. The published pass-rate pattern is useful for planning: candidates who complete the accredited program and follow a structured 6-to-10-week review with question-bank practice sit within the range of the published pass rates. The honest preparation implication is to treat the exam as a distinct preparation project after graduation, using the AAVSB content domains and question-bank practice as the calibration tools.',
    source: { label: 'AAVSB — VTNE pass rates', url: 'https://www.aavsb.org/' },
    caveat: 'AAVSB publishes pass rates by cohort; recent first-attempt VTNE pass rates ~60-70%.'
  },
  studyPlan: {
    summary: 'Plan for 6 to 10 weeks and 100 to 150 hours of study for the VTNE after graduating from an accredited veterinary-technology program, structured around the nine content domains — pharmacology, anesthesia, and animal care carry the largest shares — with question-bank practice as the calibration tool. The most effective sequence is: first, take a practice exam in week one to baseline; second, study the pharmacology and anesthesia content, which candidates commonly find hardest; third, work the animal care and nursing content, the largest share; fourth, cover dentistry, laboratory procedures, imaging, surgery, and emergency content; and fifth, take full-length practice exams under real timing in the final month. The highest-yield habits are the question-bank drilling (the exam rewards breadth across the nine domains) and the full-length practice exams (the 170-question, 3-hour format is a stamina test). Budget the pharmacology and anesthesia domains extra time, since they are both weighted and difficult. After the exam, factor the retake window into your timeline if needed, and note that most states require the VTNE-based credential for the credentialed-technician title.',
    totalHours: '100-150 study hours over 6-10 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Baseline + pharmacology', tasks: ['Take a practice exam', 'Study pharmacology and anesthesia', 'Log weak domains'], hours: 30 },
      { label: 'Weeks 3-6', focus: 'Core domains', tasks: ['Study animal care and nursing', 'Work dentistry, lab, and imaging content', 'Take a second practice exam'], hours: 55 },
      { label: 'Weeks 7-9', focus: 'Full coverage + mocks', tasks: ['Cover surgery, emergency, and pain management', 'Take full-length practice exams', 'Re-study weak domains'], hours: 50 },
      { label: 'Final week', focus: 'Taper', tasks: ['Light domain review', 'Confirm exam logistics', 'Rest'], hours: 10 }
    ],
    variants: [
      { label: 'State credentialing', detail: 'Most states require the VTNE-based credential for the credentialed-technician title; requirements vary.' },
      { label: 'Specialty credentials', detail: 'Veterinary technician specialists (VTS) add advanced credentials in specialty areas.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes the VTNE is "study across the nine domains by weight, drill pharmacology and anesthesia, and run full-length practice exams," and the single biggest error is studying the domains evenly or over-weighting the topics you enjoy. A second proven approach is mastering the pharmacology and anesthesia content early, since those domains are both weighted and the hardest for most candidates. Third, use question-bank practice as the daily calibration tool — the exam rewards breadth, and the question banks mirror the style. Fourth, drill the applied scenario items, which present a patient situation and ask the best nursing action. Fifth, run full-length practice exams under real timing, since the 170-question, 3-hour format is a stamina test. Finally, plan the state credentialing paperwork after the exam, since the title and state requirements vary.',
    items: [
      { title: 'Study by domain weight', detail: 'Pharmacology, anesthesia, and animal care carry the largest shares.' },
      { title: 'Drill pharmacology early', detail: 'The hardest domain for most candidates; master it first.' },
      { title: 'Calibrate with question banks', detail: 'Daily question-bank practice mirrors the exam style.' },
      { title: 'Run full-length practice exams', detail: 'The 170-question format is a stamina test.' },
      { title: 'Plan state credentialing', detail: 'State requirements for the title vary; plan the paperwork.' }
    ]
  },
  resourceComparison: {
    summary: 'VTNE preparation runs $200 to $600 depending on the package, with question banks as the highest-value spend. The comparison below separates the exam fee, official resources, and the major prep options, with prices current to this review. The buying rule is to budget for a question bank plus full-length practice exams, since the exam format rewards the practice-anchored approach.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'VTNE registration (AAVSB)', values: ['~$300-360', 'Computer-based at PSI', 'The exam itself'] },
      { label: 'AAVSB content domains', values: ['Free', 'Official PDF', 'The authoritative syllabus'] },
      { label: 'Question banks (e.g. VetTechPrep, VTNE prep apps)', values: ['~$100-250', 'Online practice questions', 'Question drilling'] },
      { label: 'Full-length practice exams', values: ['~$50-150', 'Online timed exams', 'Format calibration'] },
      { label: 'Program-provided review', values: ['Included in tuition', 'School review', 'Initial review after graduation'] }
    ],
    footnote: 'Prices approximate and dated to this review; retakes and state requirements vary.'
  },
  commonMistakes: {
    summary: 'The most common mistake is studying the domains evenly and over-weighting familiar content, which flips the exam\u2019s point distribution; the second is under-drilling the pharmacology and anesthesia domains, the hardest for most candidates. A third recurring error is being weak on the applied nursing-scenario items. Candidates also routinely skip full-length practice exams and fail on stamina, and many start too late after graduation, compressing the 6-to-10-week plan. Finally, some candidates neglect the state credentialing paperwork, passing the exam and then waiting on the title.',
    items: [
      { mistake: 'Even domain weighting', fix: 'Allocate study by question share; pharmacology and anesthesia first.' },
      { mistake: 'Under-drilling pharmacology', fix: 'Master the hardest domain early with dedicated study.' },
      { mistake: 'Weak on nursing scenarios', fix: 'Drill the applied patient-care items.' },
      { mistake: 'Skipping full-length mocks', fix: 'The 170-question format is a stamina test; rehearse it.' },
      { mistake: 'Forgetting state credentialing', fix: 'Plan the state paperwork after the pass.' }
    ]
  },
  questionTypes: {
    summary: 'The VTNE contains 170 multiple-choice questions in 3 hours, covering nine domains — pharmacology, surgical preparation, dentistry, laboratory procedures, animal care and nursing, diagnostic imaging, anesthesia, emergency and critical care, and pain management — with a mix of direct knowledge and applied scenario items. The samples below are editor-written illustrations of the published content domains, not live exam items.',
    types: [
      { name: 'Animal care & nursing', share: '~20%', detail: 'Patient care, restraint, and nursing procedures.' },
      { name: 'Pharmacology', share: '~15%', detail: 'Drug classes, dosing, and administration.' },
      { name: 'Anesthesia', share: '~10%', detail: 'Anesthetic protocols and monitoring.' },
      { name: 'Laboratory procedures', share: '~15%', detail: 'Sample handling and lab testing.' },
      { name: 'Surgery, dentistry, imaging, emergency & pain', share: '~40%', detail: 'The remaining clinical domains.' }
    ],
    samples: [
      {
        prompt: 'Which route of drug administration has the most rapid onset?',
        options: ['A. Oral', 'B. Intravenous', 'C. Subcutaneous', 'D. Topical'],
        answer: 'B',
        explanation: 'Intravenous administration delivers the drug directly to the circulation for the fastest onset.'
      },
      {
        prompt: 'Which blood collection site is most appropriate for a canine patient?',
        options: ['A. Jugular vein', 'B. Tail vein only', 'C. Ear vein', 'D. Wing vein'],
        answer: 'A',
        explanation: 'The jugular vein is a standard and appropriate collection site in dogs.'
      },
      {
        prompt: 'Which parameter is most critical to monitor during anesthesia recovery?',
        options: ['A. Airway and ventilation', 'B. Coat condition', 'C. Food intake only', 'D. Grooming behaviour'],
        answer: 'A',
        explanation: 'Airway and ventilation are the priority during anesthetic recovery.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published content domains, not live exam items.'
  },
  examDay: {
    summary: 'The VTNE is taken on computer at a PSI testing center: 170 multiple-choice questions with 3 hours, with a pass point set by the AAVSB, with results typically available within a few days. The core rules: bring valid photo ID, arrive early, and follow testing-center rules. After passing, complete the state credentialing paperwork and plan the continuing-education requirements. The most useful exam-day habits: pace at about a minute per question, flag and return to hard items, and answer every question (no penalty for guessing). If you do not pass, retakes are permitted after a waiting period. After the credential, consider the veterinary technician specialist (VTS) pathways for specialty careers and the continuing-education cycle.',
    bring: ['Valid photo ID', 'Arrival 30 minutes early', 'A 3-hour sitting mindset'],
    leave: ['Phone, smartwatch, and study materials (testing-center rules)', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Study', detail: '6-10 weeks; domain-weighted study with question-bank practice.' },
      { time: 'Exam', detail: '170 questions in 3 hours at PSI.' },
      { time: 'Results', detail: 'Pass/fail within days.' },
      { time: 'Credential', detail: 'State credentialing paperwork; CEUs maintain it.' }
    ],
    rules: ['170 questions, 3 hours', 'Computer-based at PSI', 'Pass point set by the AAVSB', 'State credentialing + CEUs'],
    afterwards: 'Passing the VTNE plus state requirements yields the credentialed veterinary technician title, the standard gate for the occupation.'
  }
};

export default data;
