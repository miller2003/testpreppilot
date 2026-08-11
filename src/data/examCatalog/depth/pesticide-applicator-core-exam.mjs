const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Agricultural & environmental credentialing desk',
    bio: 'Pesticide applicator certification structure comes from state agriculture departments and the EPA, and requirements vary by state and are revised. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the core-exam model and state certification requirements against state agriculture department pages and EPA resources; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect the pesticide-applicator occupation at a May 2024 median of $45,200 (BLS) — the certification is the licence gate for the job, and commercial-applicator categories within turf and structural work pay more',
    summary: 'The direct answer is that the core pesticide applicator exam is the licence gate for work BLS reports at a May 2024 median annual wage of $45,200 for pesticide handlers, sprayers, and applicators, vegetation (SOC 37-3012), with the lowest 10 percent under about $34,600 and the highest 10 percent above about $58,900. The honest framing is that the "core" exam is the foundation of every state\u2019s certification system: virtually all states require passing the general (core) exam plus category-specific exams — turf and ornamental, agricultural plant, structural, right-of-way, and others — and the certification is what legally allows you to apply restricted-use pesticides. Pay varies meaningfully by category and employer: structural pest-control technicians and lawn-care applicators often earn above the vegetation-applicator median, while the BLS code captures the broader field. BLS counted about 25,000 to 30,000 workers in the occupation in 2024 and projects growth of about 4 percent from 2024 to 2034, with a few thousand openings per year. The practical read is that the core exam is the entry cost of a stable, skills-based trade: study time is modest (typically 10 to 20 hours for the core), the exam fee is low compared with most professional licences, and the certification unlocks the commercial-applicator roles that pay from the mid-$40,000s upward. Because the certification requires renewal (typically every three years, with continuing education credits in most states), the credential also functions as a career lock-in: certified applicators are the people employers must keep, since re-certification carries time and cost. For candidates deciding whether to pursue it, the core exam is the cheapest and fastest professional licence in the trades, and the category exams that follow let you specialise toward the higher-paying segments.',
    rows: [
      { label: 'Median annual wage, pesticide handlers, sprayers & applicators', value: '$45,200', note: 'BLS OEWS, May 2024 (SOC 37-3012)' },
      { label: 'Lowest 10 percent', value: '~$34,600', note: 'BLS OEWS, May 2024' },
      { label: 'Highest 10 percent', value: '~$58,900', note: 'BLS OEWS, May 2024' },
      { label: 'Employment, 2024', value: '~25,000-30,000 jobs', note: 'BLS Employment Projections' },
      { label: 'Projected change, 2024-34', value: '+4%', note: 'BLS Employment Projections' }
    ],
    growth: 'BLS projects about 4% growth for pesticide applicators from 2024 to 2034, with a few thousand annual openings.',
    source: { label: 'BLS OEWS — Pesticide Handlers, Sprayers, and Applicators, Vegetation (37-3012)', url: 'https://www.bls.gov/oes/current/oes373012.htm' }
  },
  passRate: {
    headline: 'No national pass rate is published — each state sets its own core-exam structure and cut score, typically around 70%, and most states allow retakes with a waiting period',
    summary: 'The core fact is that there is no published national pass rate for the pesticide core exam, because certification is state-administered: each state\u2019s department of agriculture designs or procures its own exam (many use the general standards manual published by the National Pesticide Applicator Certification Core Manual, developed with the EPA and land-grant universities), sets its own passing score — commonly about 70 percent — and controls retake policy. What is consistent across states is the structure: the core exam is a multiple-choice test covering the general principles of pesticide application — label comprehension, pesticide safety and handling, personal protective equipment, environmental fate, integrated pest management, and laws and regulations — and it is the prerequisite for the category exams. Most states report the passing standard and retake rules publicly: retakes are typically allowed after a waiting period (often 14 to 30 days) and may require re-registration with a small fee. The practical implication is to check your state\u2019s specific cut score and retake window before studying, since the standards manual is the authoritative study source and the exam draws from it directly. Because the core manual is a shared national document, candidates who study it thoroughly pass the core exam at high rates; the category exams are where field-specific knowledge matters more. The honest advice is to treat the core exam as a study-to-the-manual exercise: read the core manual, take the sample questions available from your state or university extension, and schedule the exam only after you can comfortably answer the practice sets, since the retake waiting period costs time in the field.',
    source: { label: 'National Pesticide Applicator Certification Core Manual', url: 'https://www.epa.gov/pesticide-applicator-certification' },
    caveat: 'No national pass rate is published; passing scores and retake rules are set by each state, typically around 70%.'
  },
  studyPlan: {
    summary: 'Plan for roughly 10 to 20 hours of study for the core exam, spread over two to three weeks, using the National Pesticide Applicator Certification Core Manual as the primary source — the exam draws from it — plus a category-specific study block afterward if you are also taking a category exam. The core manual covers six major sections: pesticide labels and labelling, pesticide safety and handling, personal protective equipment, environmental concerns, integrated pest management, and pesticide laws and regulations. The most efficient study sequence is: first, read the core manual in order, underlining the label-comprehension and safety chapters, which carry the heaviest exam weight; second, use your state or university extension\u2019s practice questions to find weak areas; third, re-study the sections where you miss items; and fourth, schedule the exam with your state\u2019s testing office. Because the core manual is shared nationally, candidates who complete it cover nearly the entire exam surface. If you are pursuing a commercial licence, plan a second study block for the category exam (turf, structural, agricultural plant, etc.), typically another 5 to 10 hours using the category manual. Budget the final week for review of the label and safety chapters rather than new material, and note that most states require renewal every three years with continuing-education credits, so keep your training records after you are certified.',
    totalHours: '10-20 hours for the core exam (+5-10 for a category exam)',
    weeks: [
      { label: 'Week 1', focus: 'Core manual read-through', tasks: ['Read the core manual cover to cover', 'Underline label and safety content', 'Start practice questions'], hours: 7 },
      { label: 'Week 2', focus: 'Targeted review', tasks: ['Complete state/university practice sets', 'Re-study missed sections', 'Review environmental and IPM chapters'], hours: 6 },
      { label: 'Week 3', focus: 'Exam readiness', tasks: ['Final practice pass at 70%+', 'Confirm state retake policy', 'Take the core exam'], hours: 4 }
    ],
    variants: [
      { label: 'Category exams', detail: 'Commercial licences add category exams (turf, structural, agricultural plant, right-of-way) after the core.' },
      { label: 'Private applicator certification', detail: 'A distinct certification for farmers applying restricted-use pesticides on their own land; typically a lighter core-focused exam.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes the core exam is "study to the national core manual and verify with practice questions, then confirm your state\u2019s cut score and retake rules," and the single biggest error is studying from general internet content instead of the manual the exam is built from. A second proven approach is mastering the label-comprehension section first, because label questions — signal words, restricted-entry intervals, PPE requirements, first aid statements — appear across the paper and reward precision. Third, learn the safety-handling sequence (storage, mixing, loading, disposal) as ordered steps, since the exam tests the correct order of operations. Fourth, use the practice questions from your state or university extension as the calibration tool: if you are not scoring at or above the state\u2019s pass line on practice sets, you are not ready. Fifth, pay attention to the environmental-fate and IPM chapters, which are often under-studied but reliably tested. Finally, confirm the exam logistics — where, how much it costs (typically $50 to $150), and how retakes work — before booking, so a surprise retake window does not delay your certification timeline.',
    items: [
      { title: 'Study the core manual', detail: 'The exam is built from the national core manual; other sources are supplements.' },
      { title: 'Master the label section', detail: 'Signal words, REIs, PPE, and first aid statements reward precision and recur across items.' },
      { title: 'Learn safety handling as steps', detail: 'Storage, mixing, loading, and disposal sequences are tested as ordered operations.' },
      { title: 'Calibrate with practice questions', detail: 'Score at or above your state\u2019s pass line on practice sets before booking.' },
      { title: 'Confirm logistics and retakes', detail: 'Fees, testing sites, and retake windows vary by state; check before booking.' }
    ]
  },
  resourceComparison: {
    summary: 'Pesticide core exam preparation is nearly free: the National Pesticide Applicator Certification Core Manual is the authoritative public source, and state agriculture departments and university extension services provide free practice materials. The comparison below separates the official manual, state materials, and optional commercial study aids, with prices current to this review. The buying rule is to spend study time on the core manual first and treat paid courses as optional reinforcement.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'National core manual (NCAPCM)', values: ['~$20-40 or free PDF via extension', 'Printed manual / PDF', 'The authoritative study source'] },
      { label: 'State agriculture department pages', values: ['Free', 'State rules + practice questions', 'Cut scores, fees, and retake policy'] },
      { label: 'University extension practice sets', values: ['Free', 'Online quizzes', 'Calibrating readiness'] },
      { label: 'Commercial prep courses', values: ['~$50-200', 'Online course', 'Optional structured review'] },
      { label: 'Category manuals', values: ['~$20-50', 'Printed / PDF', 'Commercial category exams'] }
    ],
    footnote: 'Prices approximate and dated to this review; state fees and retake rules vary, so confirm with your state agriculture department.'
  },
  commonMistakes: {
    summary: 'The most common mistake is studying from general internet content instead of the core manual, which leaves candidates unprepared for the label and safety questions that dominate the paper; the second is ignoring the state\u2019s specific cut score and retake rules until after a failed attempt. A third recurring error is skipping the environmental and IPM chapters as "soft" content, then losing a dependable share of points. Candidates also routinely rush the safety-handling sequence items, treating steps as interchangeable when the exam tests exact order. Finally, many applicants book the exam before scoring at the pass line on practice sets, converting a study-to-the-manual exercise into a gamble with a retake waiting period attached.',
    items: [
      { mistake: 'Studying non-manual sources', fix: 'Work the national core manual first; it is the source the exam is built from.' },
      { mistake: 'Ignoring state-specific rules', fix: 'Confirm your state\u2019s cut score, fee, and retake window before studying.' },
      { mistake: 'Skipping environmental/IPM chapters', fix: 'These are reliably tested; give them their share of study time.' },
      { mistake: 'Mixing up safety sequences', fix: 'Storage, mixing, loading, and disposal are tested as ordered steps.' },
      { mistake: 'Booking before practice passes', fix: 'Score at the pass line on practice sets before scheduling the exam.' }
    ]
  },
  questionTypes: {
    summary: 'The core exam is a multiple-choice test, typically 50 to 100 questions depending on the state, drawn from the national core manual, covering labels, safety and handling, PPE, environmental fate, integrated pest management, and laws and regulations. Item formats include direct knowledge questions, label-interpretation scenarios, and sequence questions on handling procedures. The samples below are editor-written illustrations of the published core manual content, not live exam items.',
    types: [
      { name: 'Label comprehension', share: '~25%', detail: 'Signal words, REIs, PPE statements, and first aid instructions.' },
      { name: 'Safety & handling', share: '~20%', detail: 'Storage, mixing, loading, transport, and disposal sequences.' },
      { name: 'Personal protective equipment', share: '~15%', detail: 'Selecting and using PPE by label requirements.' },
      { name: 'Environmental concerns', share: '~15%', detail: 'Runoff, drift, groundwater, and non-target effects.' },
      { name: 'IPM & laws', share: '~25%', detail: 'Integrated pest management and pesticide regulations.' }
    ],
    samples: [
      {
        prompt: 'Which signal word on a pesticide label indicates the highest acute toxicity to humans?',
        options: ['A. Caution', 'B. Warning', 'C. Danger', 'D. Notice'],
        answer: 'C',
        explanation: '"Danger" indicates the highest acute toxicity category; "Warning" and "Caution" indicate lower categories.'
      },
      {
        prompt: 'According to label instructions, what is the restricted-entry interval (REI) for?',
        options: ['A. The time to wait before re-entering a treated area without PPE', 'B. The shelf life of the pesticide', 'C. The time between mixing and spraying', 'D. The storage temperature range'],
        answer: 'A',
        explanation: 'The REI is the minimum time that must pass before people may re-enter a treated area without the required PPE.'
      },
      {
        prompt: 'Which action should you take FIRST when a pesticide is spilled on clothing during mixing?',
        options: ['A. Continue mixing to finish the job', 'B. Remove contaminated clothing immediately', 'C. Wash the clothing while wearing it', 'D. Report the spill at the end of the day'],
        answer: 'B',
        explanation: 'Remove contaminated clothing immediately and wash the affected skin; safety handling begins with stopping exposure.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published core manual content, not live exam items.'
  },
  examDay: {
    summary: 'The core exam is administered by your state\u2019s agriculture department or its contracted testing provider, typically at a state office or testing center, with a multiple-choice format and a state-set passing score (commonly about 70 percent). The core rules: bring photo ID and your registration confirmation, arrive on time, and expect standard test-center rules on phones and materials. Fees typically range from $50 to $150 for the exam, and retake rules vary by state — commonly a 14-to-30-day waiting period with re-registration. After passing the core exam, you receive your certification or are cleared to complete the category exams for a commercial licence; the certification is typically valid for three years with continuing-education requirements. The most useful exam-day habits: read each question for the manual\u2019s exact wording rather than general knowledge, answer every item (there is no penalty for guessing), and watch the label and sequence questions for the trap of "almost right" answers. After certification, keep your training and CE records organised, since renewal depends on documenting them.',
    bring: ['Photo ID', 'Registration confirmation', 'State fee payment (if not pre-paid)'],
    leave: ['Study materials (closed-book exam)', 'Phone and personal items (test-center rules)'],
    timeline: [
      { time: 'Register', detail: 'Book with your state agriculture department or testing provider.' },
      { time: 'Exam', detail: 'Multiple-choice core exam, state-set cut score (~70%).' },
      { time: 'Result', detail: 'Pass clears you for certification or category exams.' },
      { time: 'Renewal', detail: 'Typically 3-year validity with continuing-education credits.' }
    ],
    rules: ['State-administered exam', 'Passing score set by state (~70% common)', 'Retake waiting period typically 14-30 days', '3-year certification with CEUs'],
    afterwards: 'Passing the core exam earns the base pesticide applicator certification; commercial work then requires passing the relevant category exams.'
  }
};

export default data;
