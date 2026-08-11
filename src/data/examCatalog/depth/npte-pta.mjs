const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Physical therapy licensure desk',
    bio: 'NPTE-PTA structure and requirements come from the Federation of State Boards of Physical Therapy (FSBPT) official pages and are revised with each exam update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the NPTE-PTA structure, pass-rate reporting, and requirements against FSBPT official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect physical-therapist-assistant pay at a May 2024 median of $65,510 (BLS) — the NPTE-PTA is the licensure gate for the occupation, and the two-year PTA pathway offers strong pay relative to its education length',
    summary: 'The direct answer is that the NPTE-PTA (National Physical Therapy Examination for Physical Therapist Assistants) is the licensure exam required to practise as a physical therapist assistant, and the occupation it gates, physical therapist assistants (SOC 31-2021), earned a May 2024 median annual wage of $65,510, with the lowest 10 percent under about $44,000 and the highest 10 percent above about $90,000. The honest framing is that the exam does not set pay — PTA salaries are set by setting (hospital, outpatient, skilled nursing) and region — but the license is a hard gate: you cannot practise without passing the NPTE-PTA and meeting your state\u2019s other requirements (associate degree from an accredited PTA program, clinical hours, jurisprudence exam). The occupation is notable for its pay relative to the two-year associate-degree pathway, which makes the PTA one of the better education-to-income ratios in allied health. BLS counted about 98,000 physical therapist assistants in 2024 and projects about 17 percent employment growth from 2024 to 2034, much faster than average, with roughly 8,500 annual openings. The exam itself is a 200-question computer-based test (4 hours including break), with 4 scored sections mirroring the PT practice domains, and FSBPT publishes pass rates — recent first-time pass rates for U.S.-educated PTA candidates have run in the high 70s to low 80s percent range. The practical read: the NPTE-PTA is the final barrier of a two-year professional pathway, the pass-rate data supports a structured 6-to-10-week study plan, and the occupation behind it offers strong pay and faster-than-average growth.',
    rows: [
      { label: 'Median annual wage, physical therapist assistants', value: '$65,510', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 31-2021)' },
      { label: 'Lowest 10 percent', value: 'less than $44,000', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $90,000', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+17%', note: 'BLS Employment Projections' },
      { label: 'The exam itself', value: 'Licensure gate', note: 'FSBPT-administered; first-time pass rate ~high 70s-low 80s%' }
    ],
    growth: 'BLS projects about 17% growth for physical therapist assistants from 2024 to 2034, much faster than average.',
    source: { label: 'BLS OOH — Physical Therapist Assistants', url: 'https://www.bls.gov/ooh/healthcare/physical-therapist-assistants.htm' }
  },
  passRate: {
    headline: 'FSBPT publishes pass rates — recent first-time pass rates for U.S.-educated PTA candidates have run in the high 70s to low 80s percent range; the exam is 200 questions in 4 hours',
    summary: 'The direct answer is that the NPTE-PTA pass rates are published: FSBPT reports that first-time pass rates for U.S.-educated PTA candidates have run approximately in the high 70s to low 80s percent range in recent cycles, with all-candidate rates somewhat lower when international graduates are included. The exam itself is a computer-based test of 200 multiple-choice questions, with 4 hours allowed including a break, scored pass/fail using a scaled model that FSBPT calibrates through standard-setting; the content mirrors the PT practice domains — musculoskeletal, neuromuscular, cardiovascular and pulmonary, and integumentary systems, plus other systems — weighted toward the clinical-decision items that dominate the paper. The exam is administered in testing windows multiple times per year, and candidates must have graduated from an accredited PTA program (or be in the final term with approval) to sit. The published pass-rate pattern is stable and useful: candidates who complete the associate-degree curriculum and follow a structured 6-to-10-week review with full-length practice exams sit squarely in the range of the published pass rates. The honest preparation implication is to treat the NPTE-PTA as a distinct preparation project after graduation, using case-based drilling and full-length practice exams, since the exam rewards integrated clinical reasoning over isolated recall.',
    source: { label: 'FSBPT — NPTE-PTA pass rates', url: 'https://www.fsbpt.org/' },
    caveat: 'FSBPT publishes pass rates by cohort; recent first-time U.S.-educated PTA pass rates ~high 70s-low 80s%.'
  },
  studyPlan: {
    summary: 'Plan for 6 to 10 weeks and 100 to 150 hours of study after graduating from an accredited PTA program, structured around the exam\u2019s scored systems and anchored by full-length practice exams. The NPTE-PTA\u2019s content spans musculoskeletal, neuromuscular, cardiovascular and pulmonary, and integumentary systems, with the heaviest weight on musculoskeletal content and a dominant share of clinical-reasoning items. The most effective sequence is: first, take a full-length practice exam in week one to baseline; second, work the musculoskeletal and neuromuscular systems first, since they carry the largest shares; third, cover cardiovascular/pulmonary and integumentary content; fourth, drill case-based practice items daily; and fifth, take two to three full-length practice exams under real timing in the final month. The highest-yield habits are the full-length practice exams (the 200-question, 4-hour format is a stamina test) and daily case-based drilling. Budget the final week for light system-by-system review and rest. After the exam, factor the 90-day retake window into your timeline if needed, and note that most states also require a jurisprudence exam and background check alongside the NPTE-PTA.',
    totalHours: '100-150 study hours over 6-10 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Baseline + MSK', tasks: ['Take a full-length practice exam', 'Study musculoskeletal content', 'Begin neuromuscular review'], hours: 35 },
      { label: 'Weeks 3-6', focus: 'Full systems', tasks: ['Finish neuromuscular, cardio/pulm, integumentary', 'Start daily case-based drilling', 'Take a second practice exam'], hours: 55 },
      { label: 'Weeks 7-9', focus: 'Case-based + mocks', tasks: ['Drill case-based items daily', 'Take two full-length practice exams', 'Review misses by system'], hours: 50 },
      { label: 'Final week', focus: 'Taper', tasks: ['Light system review', 'Confirm exam logistics', 'Rest'], hours: 10 }
    ],
    variants: [
      { label: 'NPTE (PT version)', detail: 'The physical therapist version: 250 questions, longer format, separate pass-rate reporting.' },
      { label: 'Jurisprudence + background checks', detail: 'State requirements alongside the NPTE-PTA vary by jurisdiction.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes the NPTE-PTA is "integrated clinical reasoning over isolated recall, anchored by full-length practice exams and daily case drilling," and the single biggest error is reviewing content the way school tested it instead of practising the exam\u2019s decision-based format. A second proven approach is weighting musculoskeletal and neuromuscular content first, since they carry the largest question shares. Third, make case-based drilling a daily habit — the exam\u2019s signature item presents a patient situation and asks the best next action. Fourth, use the full-length practice exams as the calibration tool: your practice scores are the honest predictor of readiness. Fifth, manage the 90-day retake policy strategically — if a practice score is near the pass line, extend the plan rather than sitting early. Finally, treat the final weeks as stamina work: the 4-hour format rewards candidates who rehearse full-length sittings with the same break structure.',
    items: [
      { title: 'Practise clinical reasoning, not recall', detail: 'Drill case-based items daily; that is the exam format.' },
      { title: 'Weight MSK and neuromuscular first', detail: 'The largest content shares and the case-item base.' },
      { title: 'Anchor on full-length practice exams', detail: 'Practice scores are the honest readiness predictor.' },
      { title: 'Respect the 90-day retake window', detail: 'Extend the plan if practice scores are near the line.' },
      { title: 'Rehearse the 4-hour format', detail: 'Stamina is tested; run full-length sittings with breaks.' }
    ]
  },
  resourceComparison: {
    summary: 'NPTE-PTA preparation runs $300 to $900 depending on the prep package, with the highest-value spend on full-length practice exams and question banks that mirror the exam format. The comparison below separates the exam registration, official practice resources, and the major prep providers, with prices current to this review. The buying rule is to budget for a structured prep course with full-length mocks, since the published pass-rate data supports the mock-anchored approach.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NPTE-PTA registration (FSBPT)', values: ['~$400-485', 'Computer-based exam at testing center', 'The exam itself'] },
      { label: 'FSBPT practice exams', values: ['~$50-100', 'Online full-length exams', 'Official format calibration'] },
      { label: 'Prep courses (e.g. Scorebuilders, TherapyEd)', values: ['~$250-700', 'Book + question bank + mocks', 'Structured 6-10 week review'] },
      { label: 'Case-based question banks', values: ['~$50-200', 'Online daily drilling', 'Clinical-reasoning practice'] },
      { label: 'PTA program review resources', values: ['Varies', 'School-provided', 'Initial review after graduation'] }
    ],
    footnote: 'Prices approximate and dated to this review; retakes require a 90-day waiting period between attempts.'
  },
  commonMistakes: {
    summary: 'The most common mistake is reviewing content the way school tested it and skipping the case-based format, which is where the NPTE-PTA\u2019s difficulty lives; the second is under-using full-length practice exams and then failing on stamina in the 4-hour sitting. A third recurring error is studying the systems evenly instead of weighting musculoskeletal content. Candidates also routinely start too late after graduation, compressing a 10-week plan into weeks, and many ignore the 90-day retake policy and sit when practice scores are near the line. Finally, some candidates neglect the state jurisprudence and background-check requirements, passing the exam and then waiting on licensure paperwork.',
    items: [
      { mistake: 'Content-only review', fix: 'Drill case-based clinical-reasoning items daily.' },
      { mistake: 'Skipping full-length mocks', fix: 'The 4-hour format is a stamina test; rehearse it.' },
      { mistake: 'Even systems weighting', fix: 'Weight musculoskeletal content first.' },
      { mistake: 'Compressing the timeline', fix: 'Budget the full 6-10 weeks.' },
      { mistake: 'Forgetting state requirements', fix: 'Plan the jurisprudence exam and background check.' }
    ]
  },
  questionTypes: {
    summary: 'The NPTE-PTA contains 200 multiple-choice questions in a 4-hour computer-based sitting, distributed across the four scored systems plus other systems, with a dominant share of clinical-reasoning items that present a patient scenario and ask the best next action. The samples below are editor-written illustrations of the published exam content, not live exam items.',
    types: [
      { name: 'Musculoskeletal', share: '~30%', detail: 'Examination, evaluation, and intervention for MSK conditions.' },
      { name: 'Neuromuscular', share: '~25%', detail: 'Neurological conditions, motor control, and intervention.' },
      { name: 'Cardiovascular & pulmonary', share: '~15%', detail: 'Cardiopulmonary examination and intervention.' },
      { name: 'Integumentary', share: '~10%', detail: 'Wound care and tissue repair.' },
      { name: 'Other systems & non-system', share: '~20%', detail: 'Metabolic, endocrine, and foundational content.' }
    ],
    samples: [
      {
        prompt: 'A patient post-knee-replacement asks when they can resume walking. What is the best PTA response?',
        options: ['A. Walk as much as possible immediately', 'B. Follow the surgeon\u2019s protocol with progressive mobility', 'C. Avoid all walking for a month', 'D. Only walk in the pool'],
        answer: 'B',
        explanation: 'Progressive mobility per the surgeon\u2019s protocol guides safe recovery.'
      },
      {
        prompt: 'Which red-flag finding requires stopping exercise and notifying the supervising PT?',
        options: ['A. Mild muscle soreness', 'B. Chest pain or severe shortness of breath', 'C. Light sweating', 'D. Slight fatigue'],
        answer: 'B',
        explanation: 'Chest pain or severe dyspnea are red flags requiring immediate attention.'
      },
      {
        prompt: 'Which gait training cue is most appropriate for a patient with a right-sided weakness?',
        options: ['A. Ignore the weaker side', 'B. Use cues that encourage safe weight shift and balance', 'C. Move as quickly as possible', 'D. Avoid assistance devices'],
        answer: 'B',
        explanation: 'Safe weight-shift and balance cues support effective gait training.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam content, not live exam items.'
  },
  examDay: {
    summary: 'The NPTE-PTA is a computer-based exam at a Pearson VUE testing center: 200 multiple-choice questions with 4 hours including a scheduled break, reported pass/fail, with testing windows multiple times per year. The core rules: bring valid photo ID, arrive early, and follow testing-center rules. Scores are typically released within days, and the pass/fail result goes to your state licensing board. The most useful exam-day habits: pace the exam at about a minute per question, use the scheduled break to reset, and flag difficult items to return to. If you do not pass, the 90-day retake window applies. After passing, complete the state jurisprudence exam and background check, then receive your license.',
    bring: ['Valid photo ID', 'Arrival 30 minutes early', 'A 4-hour sitting mindset'],
    leave: ['Phone, smartwatch, and study materials (testing-center rules)', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Before', detail: 'Complete the structured prep plan and full-length mocks.' },
      { time: 'Exam', detail: '200 questions in 4 hours including a break.' },
      { time: 'Results', detail: 'Pass/fail within days; reported to the state board.' },
      { time: 'Licensure', detail: 'Complete jurisprudence and background check.' }
    ],
    rules: ['200 questions, 4 hours', 'Computer-based at Pearson VUE', 'Pass/fail reporting', '90-day retake wait'],
    afterwards: 'Passing the NPTE-PTA plus state requirements yields the physical therapist assistant license, the gate to a fast-growing allied-health occupation.'
  }
};

export default data;
