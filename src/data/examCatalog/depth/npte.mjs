const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Physical therapy licensure desk',
    bio: 'NPTE structure and requirements come from the Federation of State Boards of Physical Therapy (FSBPT) official pages and are revised with each exam update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the NPTE structure, pass-rate reporting, and requirements against FSBPT official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect physical-therapist pay at a May 2024 median of $101,020 (BLS) — the NPTE is the licensure gate for the occupation, and pass rates of ~78% reflect a demanding but passable exam',
    summary: 'The direct answer is that the NPTE (National Physical Therapy Examination) is the licensure exam required to practise as a physical therapist, and the occupation it gates, physical therapists (SOC 29-1123), earned a May 2024 median annual wage of $101,020, with the lowest 10 percent under about $73,000 and the highest 10 percent above about $133,000. The honest framing is that the exam does not set pay — PT salaries are set by setting (hospital, outpatient, home health, skilled nursing) and region — but the license is a hard gate: you cannot practise without passing the NPTE and meeting your state\u2019s other requirements (DPT degree, clinical hours, jurisprudence exam). BLS counted about 240,000 physical therapists in 2024 and projects about 13 percent employment growth from 2024 to 2034, much faster than average, with about 17,000 annual openings. The NPTE itself is a 250-question computer-based exam (5 hours including break), with 4 scored sections covering the PT practice domains: musculoskeletal, neuromuscular, cardiovascular/pulmonary, and integumentary systems, plus other systems; the exam uses a scaled scoring model with pass/fail reported, and FSBPT publishes pass rates — recent first-time pass rates for U.S. educated candidates have run around 78 to 80 percent. The practical read: the NPTE is the final barrier of a doctoral-level professional pathway, the pass-rate data supports a structured 8-to-12-week study plan, and the occupation behind it offers strong pay and faster-than-average growth. For candidates who pass, the license is portable across states through the PT compact in many jurisdictions.',
    rows: [
      { label: 'Median annual wage, physical therapists', value: '$101,020', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 29-1123)' },
      { label: 'Lowest 10 percent', value: 'less than $73,000', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $133,000', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+13%', note: 'BLS Employment Projections' },
      { label: 'The exam itself', value: 'Licensure gate', note: 'FSBPT-administered; first-time pass rate ~78-80%' }
    ],
    growth: 'BLS projects about 13% growth for physical therapists from 2024 to 2034, much faster than average, with about 17,000 annual openings.',
    source: { label: 'BLS OOH — Physical Therapists', url: 'https://www.bls.gov/ooh/healthcare/physical-therapists.htm' }
  },
  passRate: {
    headline: 'FSBPT publishes pass rates — recent first-time pass rates for U.S.-educated PT candidates have run about 78-80%; the NPTE is a 250-question, 5-hour computer-based exam',
    summary: 'The direct answer is that the NPTE pass rates are published: the Federation of State Boards of Physical Therapy reports that first-time pass rates for U.S.-educated candidates have run approximately 78 to 80 percent in recent cycles, with all-candidate rates somewhat lower when international graduates are included. The exam itself is a computer-based test of 250 multiple-choice questions, with 5 hours allowed including a break, and scores are reported as pass/fail using a scaled model that FSBPT calibrates through standard-setting; the content is distributed across the four scored systems (musculoskeletal, neuromuscular, cardiovascular and pulmonary, integumentary) plus a section on other systems and non-system-specific content, all weighted toward the clinical-decision items that dominate the paper. The exam is administered in testing windows four times per year, and candidates must have graduated from an accredited DPT program (or be in their final term with approval) to sit. The published pass-rate pattern is stable and useful: candidates who complete the DPT curriculum and follow a structured 8-to-12-week review with full-length practice exams sit squarely in the range of the published pass rates, and retakes are permitted with a 90-day waiting period between attempts. The honest preparation implication is that the pass-rate data supports treating the NPTE as a distinct preparation project after graduation — the exam rewards integrated clinical reasoning over isolated recall, and candidates who drill case-based items outperform those who only review content.',
    source: { label: 'FSBPT — NPTE pass rates', url: 'https://www.fsbpt.org/' },
    caveat: 'FSBPT publishes pass rates by cohort; recent first-time U.S.-educated pass rates ~78-80%.'
  },
  studyPlan: {
    summary: 'Plan for 8 to 12 weeks and 150 to 250 hours of study after graduating from an accredited DPT program, structured around the exam\u2019s four scored systems and anchored by full-length practice exams. The NPTE\u2019s content spans musculoskeletal, neuromuscular, cardiovascular and pulmonary, and integumentary systems plus other systems, with the heaviest weight on musculoskeletal and neuromuscular content and a dominant share of clinical-reasoning items. The most effective sequence is: first, take a full-length practice exam in week one to baseline; second, work the musculoskeletal and neuromuscular systems first, since they carry the largest shares and build the clinical reasoning base; third, cover cardiovascular/pulmonary and integumentary content, which are more memorisation-driven; fourth, drill case-based practice items daily, because the exam rewards integrated decision-making; and fifth, take two to three full-length practice exams under real timing in the final month, reviewing the missed items by system. The highest-yield habits are the full-length practice exams (the 250-question, 5-hour format is a stamina test) and daily case-based drilling. Budget the final week for light system-by-system review and rest. After the exam, factor the 90-day retake window into your timeline if needed, and note that most states also require a jurisprudence exam and background check alongside the NPTE.',
    totalHours: '150-250 study hours over 8-12 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Baseline + MSK/neuro', tasks: ['Take a full-length practice exam', 'Study musculoskeletal content', 'Begin neuromuscular review'], hours: 40 },
      { label: 'Weeks 3-6', focus: 'Full systems', tasks: ['Finish neuromuscular, cardio/pulm, integumentary', 'Start daily case-based drilling', 'Take a second practice exam'], hours: 80 },
      { label: 'Weeks 7-10', focus: 'Case-based + mocks', tasks: ['Drill case-based items daily', 'Take two full-length practice exams', 'Review misses by system'], hours: 80 },
      { label: 'Final weeks', focus: 'Taper', tasks: ['Light system review', 'Confirm exam logistics', 'Rest and sleep normally'], hours: 20 }
    ],
    variants: [
      { label: 'NPTE-PTA', detail: 'The physical therapist assistant version: 200 questions, shorter format, separate pass-rate reporting.' },
      { label: 'Jurisprudence + background checks', detail: 'State requirements alongside the NPTE vary by jurisdiction.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes the NPTE is "integrated clinical reasoning over isolated recall, anchored by full-length practice exams and daily case drilling," and the single biggest error is reviewing content the way you did in school instead of practising the exam\u2019s decision-based format. A second proven approach is weighting musculoskeletal and neuromuscular content first, since they carry the largest question shares and the case items build on them. Third, make case-based drilling a daily habit — the exam\u2019s signature item presents a patient situation and asks the best next action, and candidates who rehearse that format outperform content-only reviewers. Fourth, use the full-length practice exams as the calibration tool: FSBPT and major prep providers offer exams that mirror the 250-question format, and your practice scores are the honest predictor of readiness. Fifth, manage the 90-day retake policy strategically — if a practice score is near the pass line, extend the plan rather than sitting early, since a failed attempt costs 90 days. Finally, treat the final weeks as stamina work: the 5-hour format rewards candidates who rehearse full-length sittings with the same break structure.',
    items: [
      { title: 'Practise clinical reasoning, not recall', detail: 'The exam rewards integrated decisions; drill case-based items daily.' },
      { title: 'Weight MSK and neuromuscular first', detail: 'The largest content shares and the case-item base.' },
      { title: 'Anchor on full-length practice exams', detail: 'Practice scores are the honest readiness predictor.' },
      { title: 'Respect the 90-day retake window', detail: 'Extend the plan if practice scores are near the line.' },
      { title: 'Rehearse the 5-hour format', detail: 'Stamina is tested; run full-length sittings with breaks.' }
    ]
  },
  resourceComparison: {
    summary: 'NPTE preparation runs $300 to $1,500 depending on the prep package, with the highest-value spend on full-length practice exams and question banks that mirror the exam format. The comparison below separates the exam registration, official practice resources, and the major prep providers, with prices current to this review. The buying rule is to budget for a structured prep course with full-length mocks, since the published pass-rate data supports the mock-anchored approach.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NPTE registration (FSBPT)', values: ['~$400-485', 'Computer-based exam at testing center', 'The exam itself'] },
      { label: 'FSBPT practice exams', values: ['~$50-100', 'Online full-length exams', 'Official format calibration'] },
      { label: 'Prep courses (e.g. Scorebuilders, TherapyEd)', values: ['~$300-900', 'Book + question bank + mocks', 'Structured 8-12 week review'] },
      { label: 'Case-based question banks', values: ['~$50-200', 'Online daily drilling', 'Clinical-reasoning practice'] },
      { label: 'DPT program review resources', values: ['Varies', 'School-provided', 'Initial review before prep courses'] }
    ],
    footnote: 'Prices approximate and dated to this review; retakes require a 90-day waiting period between attempts.'
  },
  commonMistakes: {
    summary: 'The most common mistake is reviewing content the way school tested it and skipping the case-based format, which is where the NPTE\u2019s difficulty lives; the second is under-using full-length practice exams and then failing on stamina and pacing in the 5-hour sitting. A third recurring error is studying the four systems evenly instead of weighting musculoskeletal and neuromuscular content. Candidates also routinely start too late after graduation, compressing a 12-week plan into weeks, and many ignore the 90-day retake policy and sit when practice scores are near the line, converting a winnable exam into a delay. Finally, some candidates neglect the state jurisprudence and background-check requirements, passing the NPTE and then waiting on licensure paperwork.',
    items: [
      { mistake: 'Content-only review', fix: 'Drill case-based clinical-reasoning items daily; that is the exam format.' },
      { mistake: 'Skipping full-length mocks', fix: 'Run two to three full-length exams; the 5-hour format is a stamina test.' },
      { mistake: 'Even systems weighting', fix: 'Weight musculoskeletal and neuromuscular content first.' },
      { mistake: 'Compressing the timeline', fix: 'Budget the full 8-12 weeks; pass rates reward the structured plan.' },
      { mistake: 'Forgetting state requirements', fix: 'Plan the jurisprudence exam and background check alongside the NPTE.' }
    ]
  },
  questionTypes: {
    summary: 'The NPTE contains 250 multiple-choice questions in a 5-hour computer-based sitting, distributed across the four scored systems plus other systems, with a dominant share of clinical-reasoning items that present a patient scenario and ask the best next action. The samples below are editor-written illustrations of the published exam content, not live exam items.',
    types: [
      { name: 'Musculoskeletal', share: '~30%', detail: 'Examination, evaluation, and intervention for MSK conditions.' },
      { name: 'Neuromuscular', share: '~25%', detail: 'Neurological conditions, motor control, and intervention.' },
      { name: 'Cardiovascular & pulmonary', share: '~15%', detail: 'Cardiopulmonary examination, exercise testing, and intervention.' },
      { name: 'Integumentary', share: '~10%', detail: 'Wound care, tissue repair, and skin conditions.' },
      { name: 'Other systems & non-system', share: '~20%', detail: 'Metabolic, endocrine, and foundational practice content.' }
    ],
    samples: [
      {
        prompt: 'A patient with a total knee replacement on post-operative day 1 asks about the expected course of recovery. What is the best response?',
        options: ['A. Reassure that full recovery is immediate', 'B. Explain that recovery follows the surgeon\u2019s protocol with progressive exercise', 'C. Advise against all movement for a month', 'D. Promise pain-free mobility within a week'],
        answer: 'B',
        explanation: 'Recovery follows the surgeon\u2019s protocol with progressive, supervised exercise; setting realistic expectations is part of the plan.'
      },
      {
        prompt: 'Which finding is most important to report when screening a patient before beginning aerobic exercise?',
        options: ['A. Mild muscle soreness', 'B. Chest pain with exertion', 'C. Occasional sneezing', 'D. History of a cold last month'],
        answer: 'B',
        explanation: 'Chest pain with exertion is a red-flag finding requiring physician consultation before exercise.'
      },
      {
        prompt: 'A patient with a spinal cord injury at T6 reports a sudden headache and flushing. What is the priority action?',
        options: ['A. Begin passive stretching', 'B. Check for autonomic dysreflexia triggers', 'C. Administer pain medication', 'D. Continue the current treatment'],
        answer: 'B',
        explanation: 'Sudden headache and flushing in a patient with a T6 or higher injury suggest autonomic dysreflexia; identifying and removing the trigger is the priority.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam content, not live exam items.'
  },
  examDay: {
    summary: 'The NPTE is a computer-based exam at a Pearson VUE testing center: 250 multiple-choice questions with 5 hours including a scheduled break, reported pass/fail, with testing windows four times per year. The core rules: bring valid photo ID, arrive early, and follow testing-center rules; no personal items in the testing room. Scores are typically released within days, and the pass/fail result goes to your state licensing board. The most useful exam-day habits: pace the exam at about a minute per question, use the scheduled break to reset, and flag difficult items to return to rather than dwelling. If you do not pass, the 90-day retake window applies, and the score report (available in some jurisdictions) can guide the retake plan. After passing, complete the state jurisprudence exam and background check, then receive your license; many states participate in the PT compact, which simplifies interstate practice.',
    bring: ['Valid photo ID', 'Arrival 30 minutes early', 'A full-day mindset for the 5-hour sitting'],
    leave: ['Phone, smartwatch, and study materials (testing-center rules)', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Before', detail: 'Complete the structured prep plan and full-length mocks.' },
      { time: 'Exam', detail: '250 questions in 5 hours including a break.' },
      { time: 'Results', detail: 'Pass/fail within days; reported to the state board.' },
      { time: 'Licensure', detail: 'Complete jurisprudence and background check; license issued.' }
    ],
    rules: ['250 questions, 5 hours', 'Computer-based at Pearson VUE', 'Pass/fail reporting', '90-day retake wait'],
    afterwards: 'Passing the NPTE plus state requirements (jurisprudence, background check) yields the physical therapist license; the PT compact eases interstate practice.'
  }
};

export default data;
