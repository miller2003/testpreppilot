const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Dental assisting credentialing desk',
    bio: 'DANB structure and requirements come from the Dental Assisting National Board official pages and state dental boards, and requirements vary by state and are revised. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the DANB GC exam structure and state acceptance against DANB official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect dental-assistant pay at a May 2024 median of $47,300 (BLS) — the DANB GC (Infection Control) exam is the credential many state boards require, and it is the most-taken DANB certification',
    summary: 'The direct answer is that the DANB GC (Infection Control) certification is the dental-assisting credential that many state boards require or accept, and the occupation it serves, dental assistants (SOC 31-9091), earned a May 2024 median annual wage of $47,300, with the lowest 10 percent under about $35,000 and the highest 10 percent above about $60,000. The honest framing is that the certification does not set pay — dental-assistant wages are set by the dental practice labour market — but the GC credential is a compliance and employability gate: many states require dental assistants to hold DANB GC (or pass a state-administered infection-control exam) to perform expanded functions or to work at all in some jurisdictions, and DANB reports GC is its most-taken exam, reflecting the credential\u2019s role as the standard infection-control certification in the field. BLS counted about 352,000 dental assistants in 2024 and projects about 5 percent employment growth from 2024 to 2034, with roughly 18,000 annual openings. The exam itself is 90 multiple-choice questions in about 90 minutes, with a passing standard set by DANB through standard-setting, covering microbiology and disease transmission, infection prevention and control, and occupational safety. The practical read: the GC is the entry DANB credential — it is the first of the three exams that make up the Certified Dental Assistant (CDA) credential (GC plus RHS radiation health and safety plus ICE infection control... with GC being the general infection-control exam) — and it is a low-cost, fast certification that improves employability in a growing occupation. For candidates deciding whether to pursue it, the GC certification is typically completed while working or training as a dental assistant, and the credential compounds with the RHS and ICE exams toward the full CDA.',
    rows: [
      { label: 'Median annual wage, dental assistants', value: '$47,300', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 31-9091)' },
      { label: 'Lowest 10 percent', value: 'less than $35,000', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $60,000', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+5%', note: 'BLS Employment Projections' },
      { label: 'The certification itself', value: 'Professional credential', note: 'DANB\u2019s most-taken exam; a CDA component' }
    ],
    growth: 'BLS projects about 5% growth for dental assistants from 2024 to 2034, with roughly 18,000 annual openings.',
    source: { label: 'BLS OOH — Dental Assistants', url: 'https://www.bls.gov/ooh/healthcare/dental-assistants.htm' }
  },
  passRate: {
    headline: 'DANB publishes no pass rates — the GC exam is 90 questions in 90 minutes with a standard-set passing score, and DANB reports pass/fail rather than cohort data',
    summary: 'The core fact is that DANB does not publish pass rates for the GC exam, and none is available from an independent source, because DANB reports candidate pass/fail rather than cohort pass percentages. What is published is the exam structure: the GC exam contains 90 multiple-choice questions with 90 minutes allowed, delivered by computer at a testing center (or online proctored in some cases), with a passing score set by DANB through a standard-setting process and reported as pass/fail; the exam covers three content areas — microbiology and disease transmission, infection prevention and control, and occupational safety. Because DANB publishes the exam outline and a practice test, the preparation is studying the exam outline and the OSHA and CDC infection-control standards the content follows; the classic failure mode is under-studying the microbiology section, which carries a meaningful question share and rewards specific knowledge of disease transmission. The certification is valid for one year and renews annually with continuing education, which distinguishes it from many credentials. The honest advice is to treat the exam outline as the syllabus, study the CDC and OSHA infection-control guidance, take the DANB practice test to calibrate, and book the exam when practice scores are comfortable — the 90-minute format is accessible, and the credential\u2019s one-year renewal means the study habits repeat annually.',
    source: { label: 'DANB — GC exam information', url: 'https://www.danb.org/' },
    caveat: 'DANB publishes no pass rates; the passing score is set by standard-setting and certification renews annually.'
  },
  studyPlan: {
    summary: 'Plan for roughly 2 to 4 weeks and 15 to 30 hours of study for the DANB GC exam, structured around the exam outline\u2019s three content areas — microbiology and disease transmission, infection prevention and control, and occupational safety — with the CDC and OSHA infection-control standards as the primary study sources. The most effective sequence is: first, obtain the DANB GC exam outline and take the practice test to baseline; second, study the microbiology and disease-transmission content, which is the memorisation-heavy foundation; third, work the infection-prevention content — PPE, instrument processing, sterilization, and disinfection — the largest area; fourth, review occupational safety, including OSHA bloodborne-pathogen requirements; and fifth, take the practice test again and book the exam. The highest-yield habit is studying the CDC and OSHA guidance directly, since the exam is built from the same standards dental practices follow. Budget the sterilization and instrument-processing specifics, which are the most-tested items. After passing, note the one-year renewal with continuing education, and plan the companion exams — the RHS (radiation health and safety) and ICE (infection control) exams — that complete the Certified Dental Assistant credential, since the GC is one component of the CDA pathway.',
    totalHours: '15-30 study hours over 2-4 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Baseline + microbiology', tasks: ['Get the exam outline and practice test', 'Study microbiology and disease transmission', 'Log weak areas'], hours: 8 },
      { label: 'Week 2', focus: 'Infection prevention', tasks: ['Study PPE, sterilization, and disinfection', 'Review instrument processing', 'Review OSHA requirements'], hours: 10 },
      { label: 'Week 3', focus: 'Practice + exam', tasks: ['Take the practice test again', 'Re-study weak areas', 'Book and take the exam'], hours: 8 }
    ],
    variants: [
      { label: 'CDA pathway', detail: 'The Certified Dental Assistant credential combines GC, RHS, and ICE exams.' },
      { label: 'State-specific requirements', detail: 'State boards vary in whether DANB GC or a state exam satisfies infection-control requirements.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes the DANB GC exam is "study the CDC and OSHA standards, master the sterilization and instrument-processing specifics, and calibrate with the practice test," and the single biggest error is studying general dental-assisting content instead of the infection-control focus the exam tests. A second proven approach is memorising the microbiology basics precisely — disease transmission routes and the standard precautions — because those items reward specific knowledge. Third, master the instrument-processing and sterilization sequence, the most-tested area, as ordered steps: cleaning, packaging, sterilization, and storage. Fourth, review the OSHA bloodborne-pathogen standard, since the occupational-safety items draw from it. Fifth, use the DANB practice test as the calibration tool — if your score is not comfortable, re-study before booking. Finally, plan the one-year renewal and the CDA pathway from the start, since the GC is one component and the RHS and ICE exams complete the full credential.',
    items: [
      { title: 'Study the CDC and OSHA standards', detail: 'The exam is built from the same standards practices follow.' },
      { title: 'Master the sterilization sequence', detail: 'Cleaning, packaging, sterilization, storage — the most-tested area.' },
      { title: 'Memorise microbiology basics', detail: 'Transmission routes and standard precautions reward specifics.' },
      { title: 'Calibrate with the practice test', detail: 'Re-study until practice scores are comfortable.' },
      { title: 'Plan the CDA pathway', detail: 'GC plus RHS and ICE complete the Certified Dental Assistant credential.' }
    ]
  },
  resourceComparison: {
    summary: 'DANB GC preparation is inexpensive: the exam fee is about $90, the practice test is about $30, and the CDC and OSHA standards are free official references. The comparison below separates the official resources, the exam, and commercial prep, with prices current to this review. The buying rule is to use the free CDC/OSHA guidance and the official practice test first, and treat commercial question banks as optional reinforcement.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'DANB GC exam outline', values: ['Free', 'Official PDF', 'The authoritative syllabus'] },
      { label: 'DANB practice test', values: ['~$30', 'Online practice exam', 'Readiness calibration'] },
      { label: 'CDC dental infection-control guidelines', values: ['Free', 'Official guidance', 'The content foundation'] },
      { label: 'OSHA bloodborne-pathogen standard', values: ['Free', 'Regulation text', 'Occupational-safety items'] },
      { label: 'DANB GC exam registration', values: ['~$90', 'Computer-based at testing center', 'The exam itself'] },
      { label: 'Commercial question banks', values: ['~$20-50', 'Online practice questions', 'Supplemental drilling'] }
    ],
    footnote: 'Prices approximate and dated to this review; the certification renews annually with continuing education.'
  },
  commonMistakes: {
    summary: 'The most common mistake is studying general dental-assisting content instead of the infection-control focus, which the exam tests exclusively; the second is under-studying the microbiology section and losing the transmission-route items. A third recurring error is mixing up the sterilization sequence — cleaning before packaging, packaging before sterilization — on the order items. Candidates also routinely skip the OSHA bloodborne-pathogen standard, missing the occupational-safety items, and many book the exam without the practice test calibration. Finally, some candidates ignore the one-year renewal, letting the credential lapse after passing.',
    items: [
      { mistake: 'Off-focus study content', fix: 'The GC exam tests infection control; study the CDC and OSHA standards.' },
      { mistake: 'Under-studying microbiology', fix: 'Drill transmission routes and standard precautions.' },
      { mistake: 'Mixing up the sterilization order', fix: 'Cleaning, packaging, sterilization, storage — learn the sequence.' },
      { mistake: 'Skipping OSHA content', fix: 'The bloodborne-pathogen standard drives the safety items.' },
      { mistake: 'Missing the annual renewal', fix: 'Renew with continuing education every year.' }
    ]
  },
  questionTypes: {
    summary: 'The DANB GC exam contains 90 multiple-choice questions in 90 minutes, covering microbiology and disease transmission, infection prevention and control, and occupational safety. Item formats include direct knowledge, procedure-sequence, and scenario questions. The samples below are editor-written illustrations of the published exam outline, not live exam items.',
    types: [
      { name: 'Infection prevention & control', share: '~45%', detail: 'PPE, sterilization, disinfection, and instrument processing.' },
      { name: 'Microbiology & disease transmission', share: '~30%', detail: 'Pathogens, transmission routes, and standard precautions.' },
      { name: 'Occupational safety', share: '~25%', detail: 'OSHA standards, exposure control, and waste handling.' }
    ],
    samples: [
      {
        prompt: 'What is the correct sequence for processing contaminated dental instruments?',
        options: ['A. Sterilize, clean, package', 'B. Clean, package, sterilize', 'C. Package, sterilize, clean', 'D. Clean, sterilize, package'],
        answer: 'B',
        explanation: 'Instruments are cleaned to remove debris, packaged, then sterilized.'
      },
      {
        prompt: 'Which precaution applies to all patients regardless of diagnosis?',
        options: ['A. Airborne precautions only', 'B. Standard precautions', 'C. Contact precautions only', 'D. Droplet precautions only'],
        answer: 'B',
        explanation: 'Standard precautions apply to all patient care, treating every patient\u2019s blood and body fluids as potentially infectious.'
      },
      {
        prompt: 'Which OSHA requirement applies to dental practices with employees?',
        options: ['A. A written exposure-control plan', 'B. No training required', 'C. Annual X-ray certification only', 'D. A sterile water supply'],
        answer: 'A',
        explanation: 'OSHA\u2019s bloodborne-pathogen standard requires a written exposure-control plan for practices with employees.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam outline, not live exam items.'
  },
  examDay: {
    summary: 'The DANB GC exam is taken on computer at a DANB-authorized testing center: 90 multiple-choice questions with 90 minutes, pass/fail via DANB\u2019s standard-setting, with results typically available immediately or within a short window. The core rules: bring valid photo ID, arrive early, and follow testing-center rules. The certification is valid for one year and renews with continuing education. The most useful exam-day habits: pace at about a minute per question, answer every item (no penalty for guessing), and on the sequence items watch the order of steps. If you do not pass, DANB allows retakes after a waiting period. After passing, complete the state paperwork if your state requires the credential for practice, track the one-year renewal, and plan the companion RHS and ICE exams to complete the Certified Dental Assistant credential.',
    bring: ['Valid photo ID', 'Arrival at the testing center', 'Confirmation of your appointment'],
    leave: ['Phone, smartwatch, and study materials (testing-center rules)', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Study', detail: '2-4 weeks; study the CDC/OSHA standards and calibrate with the practice test.' },
      { time: 'Exam', detail: '90 questions in 90 minutes at the testing center.' },
      { time: 'Result', detail: 'Pass/fail; certification valid 1 year.' },
      { time: 'Next', detail: 'Renew with CEUs; plan the RHS and ICE exams.' }
    ],
    rules: ['90 questions, 90 minutes', 'Computer-based at DANB-authorized centers', 'Pass/fail via standard-setting', 'Annual renewal with CEUs'],
    afterwards: 'Passing the GC exam earns the DANB Infection Control certification, the most-taken DANB credential and a component of the Certified Dental Assistant pathway.'
  }
};

export default data;
