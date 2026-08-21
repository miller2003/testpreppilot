const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Medical assisting credentialing desk',
    bio: 'AMT RMA structure and requirements come from the American Medical Technologists official pages and are revised with each exam update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the AMT RMA exam structure, eligibility, and passing policy against AMT official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect medical-assistant pay at a May 2024 median of $44,200 (BLS) — the RMA is one of the two major medical-assistant credentials, and certification is the hiring standard for the occupation',
    summary: 'The direct answer is that the AMT RMA (Registered Medical Assistant) is one of the two major medical-assistant credentials (alongside the AAMA CMA), and the occupation it serves, medical assistants (SOC 31-9092), earned a May 2024 median annual wage of $44,200, with the lowest 10 percent under about $32,000 and the highest 10 percent above about $58,000. The honest framing is that the certification does not set pay — medical-assistant wages are set by the healthcare labour market (physician offices, clinics, hospitals) — but it is the hiring standard: employers list CMA/RMA certification as a preferred or required qualification, and the occupation is large and growing. BLS counted about 760,000 medical assistants in 2024 and projects about 10 percent employment growth from 2024 to 2034, much faster than average, with roughly 72,000 annual openings. The exam itself is a computer-based test of 200 multiple-choice questions with about 3 hours, covering the medical-assistant domains — general, administrative, and clinical — with a scaled passing score set by AMT through standard-setting. The practical read: the RMA is accessible for candidates who complete an accredited medical-assistant program or the work-experience pathway (AMT allows eligibility through education, military, or supervised work experience), making it a reachable credential for a growing occupation. The certification renews with continuing education, and the credential compounds with specialisations — phlebotomy, EKG, and medical billing certifications broaden role options within the occupation.',
    rows: [
      { label: 'Median annual wage, medical assistants', value: '$44,200', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 31-9092)' },
      { label: 'Lowest 10 percent', value: 'less than $32,000', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $58,000', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+10%', note: 'BLS Employment Projections' },
      { label: 'The certification itself', value: 'Hiring standard', note: '200 questions, ~3 hours; one of the two major MA credentials' }
    ],
    growth: 'BLS projects about 10% growth for medical assistants from 2024 to 2034, much faster than average, with roughly 72,000 annual openings.',
    source: { label: 'BLS OOH — Medical Assistants', url: 'https://www.bls.gov/ooh/healthcare/medical-assistants.htm' }
  },
  passRate: {
    headline: 'AMT publishes no pass rates — the RMA exam is 200 questions in about 3 hours with a standard-set passing score, and AMT reports pass/fail rather than cohort data',
    summary: 'The core fact is that AMT does not publish pass rates for the RMA exam, and none is available from an independent source, because AMT reports candidate pass/fail rather than cohort pass percentages. What is published is the exam structure: the RMA exam is a computer-based test of 200 multiple-choice questions with about 3 hours allowed, scored pass/fail through AMT\u2019s standard-setting process; the exam covers the medical-assistant domains — general (communication, medical law and ethics, professional issues), administrative (insurance, billing, scheduling, records), and clinical (anatomy, physiology, patient care, laboratory procedures, pharmacology, EKG) — weighted across the paper. Eligibility is through one of AMT\u2019s pathways: graduation from an accredited medical-assistant program, military training, or supervised work experience (typically 5 years for the work pathway). Because AMT publishes the exam content outline and study resources, the preparation is studying the outline and calibrating with practice exams; the classic failure mode is under-weighting the clinical domain, which carries the largest question share. The certification is valid for a defined period and renews with continuing education. The honest advice is to treat the content outline as the syllabus, complete a review course or self-study plan, and take full-length practice exams before booking — the 200-question format rewards the practice-anchored approach.',
    source: { label: 'AMT — RMA exam information', url: 'https://www.americanmedtech.org/' },
    caveat: 'AMT publishes no pass rates; the passing score is set by standard-setting and certification renews with CEUs.'
  },
  studyPlan: {
    summary: 'Plan for roughly 6 to 10 weeks and 60 to 100 hours of study for the RMA exam, structured around the exam content outline — general, administrative, and clinical domains — with full-length practice exams as the calibration tool. The exam\u2019s weight favours the clinical domain, so allocate study time there first. The most effective sequence is: first, obtain the AMT content outline and take a practice exam to baseline; second, study the clinical content — anatomy and physiology, patient care, laboratory procedures, pharmacology, and EKG; third, work the administrative content — insurance, billing, scheduling, and records; fourth, review the general content — communication, law and ethics; and fifth, take two full-length practice exams under real timing in the final two weeks. The highest-yield habits are the practice exams (the 200-question, 3-hour format is a stamina test) and drilling the clinical and laboratory items, where the largest share of points sits. Budget the final week for light review of the content outline and rest. After passing, note the CEU renewal requirement and consider the specialisation certifications — phlebotomy, EKG, and billing — that broaden role options within the occupation.',
    totalHours: '60-100 study hours over 6-10 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Baseline + clinical', tasks: ['Get the content outline and take a practice exam', 'Study anatomy, physiology, and patient care', 'Log weak areas'], hours: 25 },
      { label: 'Weeks 3-6', focus: 'Clinical + administrative', tasks: ['Study laboratory procedures and pharmacology', 'Work insurance, billing, and records', 'Take a second practice exam'], hours: 40 },
      { label: 'Weeks 7-8', focus: 'Full-length mocks', tasks: ['Take two full-length practice exams', 'Re-study weak areas', 'Review the content outline'], hours: 25 },
      { label: 'Final week', focus: 'Taper', tasks: ['Light review', 'Confirm exam logistics', 'Rest'], hours: 10 }
    ],
    variants: [
      { label: 'AAMA CMA (the other major credential)', detail: 'The American Association of Medical Assistants credential, similar in scope; employers accept either.' },
      { label: 'Specialisation certifications', detail: 'Phlebotomy, EKG, and billing certifications broaden the medical-assistant role.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes the RMA exam is "anchor on the content outline, weight the clinical domain, and run full-length practice exams," and the single biggest error is studying the domains evenly and skipping the practice-exam calibration. A second proven approach is mastering the clinical and laboratory content, which carries the largest question share — anatomy, patient care, lab procedures, and pharmacology are the exam\u2019s core. Third, drill the administrative items (insurance, billing, coding basics), which are dependable points. Fourth, use the full-length practice exams as the calibration tool: the 200-question, 3-hour format is a stamina test, and practice scores are the honest readiness signal. Fifth, review the general content — communication, law and ethics — since it is a small but reliable block. Finally, plan the CEU renewal and the specialisation certifications, since the credential\u2019s career value compounds with the additional credentials that broaden the role.',
    items: [
      { title: 'Anchor on the content outline', detail: 'The exam is built from the AMT content outline.' },
      { title: 'Weight the clinical domain', detail: 'Anatomy, patient care, and lab procedures carry the largest share.' },
      { title: 'Drill the administrative items', detail: 'Insurance, billing, and records are dependable points.' },
      { title: 'Run full-length mocks', detail: 'The 200-question, 3-hour format is a stamina test.' },
      { title: 'Plan CEUs and specialisations', detail: 'The credential compounds with phlebotomy, EKG, and billing.' }
    ]
  },
  resourceComparison: {
    summary: 'RMA preparation runs $200 to $600 depending on the prep package, with the AMT study resources and full-length practice exams as the highest-value spend. The comparison below separates the exam fee, official resources, and the major prep options, with prices current to this review. The buying rule is to budget for a practice-exam package, since the 200-question format rewards the mock-anchored approach.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'AMT RMA exam registration', values: ['~$135-165', 'Computer-based at a testing center', 'The exam itself'] },
      { label: 'AMT exam content outline', values: ['Free', 'Official PDF', 'The authoritative syllabus'] },
      { label: 'Prep question banks (e.g. MedPreps, review books)', values: ['~$100-250', 'Online or book', 'Question drilling'] },
      { label: 'Full-length practice exams', values: ['~$50-150', 'Online timed exams', 'Format calibration'] },
      { label: 'Medical-assistant program review', values: ['Included in tuition', 'School review', 'Initial review after the program'] }
    ],
    footnote: 'Prices approximate and dated to this review; the certification renews with continuing education.'
  },
  commonMistakes: {
    summary: 'The most common mistake is studying the domains evenly and under-weighting the clinical domain, which carries the largest question share; the second is skipping full-length practice exams and failing on stamina in the 200-question format. A third recurring error is being weak on the laboratory and pharmacology items, which reward specific knowledge. Candidates also routinely neglect the administrative domain as "easy," losing dependable points, and many start studying too late, compressing the 6-to-10-week plan. Finally, some candidates confuse the RMA with the AAMA CMA and prepare with the wrong content, though the two exams are similar in scope.',
    items: [
      { mistake: 'Even domain weighting', fix: 'Allocate study to the clinical domain first.' },
      { mistake: 'Skipping full-length mocks', fix: 'The 200-question format is a stamina test; rehearse it.' },
      { mistake: 'Weak on lab and pharmacology', fix: 'Drill the specific clinical items that dominate the exam.' },
      { mistake: 'Neglecting the administrative domain', fix: 'Insurance, billing, and records are dependable points.' },
      { mistake: 'Preparing with the wrong content', fix: 'Use the AMT content outline; the scope is clear.' }
    ]
  },
  questionTypes: {
    summary: 'The AMT RMA exam contains 200 multiple-choice questions in about 3 hours, covering the general, administrative, and clinical medical-assistant domains. Item formats include direct knowledge, procedure-sequence, and clinical scenario questions. The samples below are editor-written illustrations of the published content outline, not live exam items.',
    types: [
      { name: 'Clinical procedures', share: '~35%', detail: 'Patient care, vital signs, and clinical assisting.' },
      { name: 'Laboratory & pharmacology', share: '~20%', detail: 'Specimen handling, lab basics, and medication administration.' },
      { name: 'Administrative', share: '~20%', detail: 'Insurance, billing, scheduling, and records.' },
      { name: 'Anatomy & physiology', share: '~15%', detail: 'Body systems and medical terminology.' },
      { name: 'General & law/ethics', share: '~10%', detail: 'Communication, law, and professional issues.' }
    ],
    samples: [
      {
        prompt: 'Which measurement is most appropriate for assessing a patient\u2019s body temperature in a clinic setting?',
        options: ['A. Oral temperature with a digital thermometer', 'B. Guessing from skin warmth', 'C. No measurement needed', 'D. Weight-based estimate'],
        answer: 'A',
        explanation: 'Oral temperature with a digital thermometer is the standard clinical measurement approach.'
      },
      {
        prompt: 'What is the correct order for venipuncture specimen collection with multiple tubes?',
        options: ['A. Random order', 'B. Follow the order of draw protocol', 'C. Collect the largest tube last', 'D. Collect all tubes simultaneously'],
        answer: 'B',
        explanation: 'The order of draw protocol prevents cross-contamination between tube additives.'
      },
      {
        prompt: 'Which legal document must a patient sign before a medical procedure?',
        options: ['A. Informed consent', 'B. A blank check', 'C. A lease agreement', 'D. A job application'],
        answer: 'A',
        explanation: 'Informed consent documents the patient\u2019s agreement to a procedure after understanding the risks.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published content outline, not live exam items.'
  },
  examDay: {
    summary: 'The AMT RMA exam is taken on computer at an AMT-authorized testing center: 200 multiple-choice questions with about 3 hours, scored pass/fail through AMT\u2019s standard-setting, with results typically available within a few weeks. The core rules: bring valid photo ID, arrive early, and follow testing-center rules. After passing, the certification is issued and renews with continuing education. The most useful exam-day habits: pace at under a minute per question, flag and return to hard items, and answer every question (no penalty for guessing). If you do not pass, AMT allows retakes after a waiting period. After the exam, complete the CEU renewal planning and consider the specialisation certifications — phlebotomy, EKG, and billing — that broaden the medical-assistant role and employability.',
    bring: ['Valid photo ID', 'Arrival 30 minutes early', 'A 3-hour sitting mindset'],
    leave: ['Phone, smartwatch, and study materials (testing-center rules)', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Study', detail: '6-10 weeks; content-outline study with full-length mocks.' },
      { time: 'Exam', detail: '200 questions in ~3 hours at the testing center.' },
      { time: 'Results', detail: 'Pass/fail within weeks; certification issued.' },
      { time: 'Renewal', detail: 'Renew with CEUs; add specialisation certifications.' }
    ],
    rules: ['200 questions, ~3 hours', 'Computer-based at AMT-authorized centers', 'Pass/fail via standard-setting', 'CEU renewal required'],
    afterwards: 'Passing the RMA exam earns the AMT Registered Medical Assistant certification, one of the two major medical-assistant credentials, maintained with continuing education.'
  }
};

export default data;
