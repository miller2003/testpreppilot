const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'College readiness & admissions assessments desk',
    bio: 'ACCUPLACER WritePlacer structure and placement policies come from College Board official pages and individual college placement catalogs, which vary by institution and are revised. Wage and education data come from the BLS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the ACCUPLACER WritePlacer essay format, rubric, and scoring bands against College Board official pages; education-return context against BLS.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Placement outcome, not pay: your WritePlacer essay score decides whether you enter credit-bearing composition or developmental writing — and remedial load is one of the strongest predictors of degree completion and lifetime earnings',
    summary: 'The direct answer is that ACCUPLACER WritePlacer is a placement test, not a job credential, so no BLS occupation corresponds to it and the salary story is about what the placement result unlocks. The essay-based test decides, usually before your first semester, whether you place into college-level composition or a developmental writing course — and that assignment is one of the strongest predictors of whether you graduate. Research published by the Community College Research Center (CCRC) has repeatedly found that a large share of community-college entrants are placed into developmental coursework and that students who skip remediation complete credentials at substantially higher rates. The reference point for interpreting this is BLS: the May 2024 median wage across all occupations was $49,500, while workers with an associate degree earned a median weekly wage of about $1,059 (2023 data) versus about $899 for high-school-diploma-only workers. A student placed into one or two semesters of non-credit writing is measurably more likely to drop out before earning any credential, while a student who clears the placement gate and completes a degree moves toward the higher half of the distribution. Colleges increasingly use multiple measures — high school GPA and course history alongside the essay score — precisely because a single cut score misplaces students at both margins. The practical takeaway: treat WritePlacer as a high-stakes placement decision, prepare deliberately, and if the result assigns you to remediation, ask about retest policy and multiple-measures review rather than accepting the placement silently.',
    rows: [
      { label: 'Reference: median wage, all occupations', value: '$49,500', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Reference: associate degree, median weekly earnings', value: '$1,059', note: 'BLS Education Pays, 2023 ($55,068/yr equivalent)' },
      { label: 'Reference: high school diploma, median weekly earnings', value: '$899', note: 'BLS Education Pays, 2023 ($46,748/yr equivalent)' },
      { label: 'The exam itself', value: 'No direct occupation', note: 'An essay-based placement test, not a credential of record' }
    ],
    growth: 'BLS does not project growth for a placement test; relevant projections follow the occupations students are placed toward.',
    source: { label: 'BLS OOH — Pay overview', url: 'https://www.bls.gov/ooh/about/pay.htm' }
  },
  passRate: {
    headline: 'There is no official pass rate — WritePlacer essays are scored on a 1-8 rubric, and only your college\u2019s cut scores matter',
    summary: 'The core fact to internalize is that WritePlacer has no pass/fail threshold at the national level, so any claim of a "pass rate" describes something that does not exist. Essays are scored holistically on a 1-8 scale using a published rubric that evaluates focus and organization, development and support, sentence structure, and mechanical conventions, and every college sets its own cut score that determines placement into developmental writing or college composition. Two students can receive the same essay score at different institutions and be placed differently, which is exactly why practice vendors cannot quote a defensible pass rate. What is published is the rubric and the score bands, and at many schools the placement table that maps scores onto course assignments. WritePlacer presents a single writing prompt — typically a topic statement with a question asking you to take a position and support it — and you have 60 minutes to write an essay of 300 to 500 words. Two independent readers or an automated scoring engine score the essay against the rubric. The practical implication is that your preparation target must be defined locally: ask your specific institution for its placement chart and aim comfortably above the cut score for the course you want. Because the essay is scored on a holistic rubric, the highest-yield preparation is practising the five-paragraph argument structure and mechanical conventions, not memorizing content. Colleges also vary in retake policy, and some let you contest the placement through a multiple-measures review.',
    source: { label: 'College Board — WritePlacer rubric', url: 'https://accuplacer.collegeboard.org/educators/student-score-reports' },
    caveat: 'No official pass rate exists; essays are scored 1-8 and only per-college cut scores are published.'
  },
  studyPlan: {
    summary: 'Plan for two to four weeks and roughly 10 to 18 hours of study for WritePlacer, and expect the exam to reward a clear argument structure, developed support, and clean mechanics — not memorized content. The test presents a single prompt, usually a topic statement with a position question, and you have 60 minutes to write a 300-to-500-word essay that is scored on the 1-8 rubric across focus, organization, development, sentence structure, and conventions. Week one should be a baseline: write one practice essay under 60 minutes using an official College Board prompt, then self-score it against the published rubric and log the weak areas. Week two is targeted work on the weakest rubric categories — for most students, development and organization — by outlining essays before writing and adding concrete supporting examples. Week three is full-length practice: write two more timed essays, one per sitting, and review them against the rubric. Week four is a light taper: one final practice essay, review of the error log, and rest. The single most useful habit is the five-minute outline: before writing, spend five minutes planning the thesis and three supporting points, because essays with a clear structure score measurably higher on the holistic rubric. Budget hours in proportion to your baseline: a student scoring 3-4 should expect the full 18 hours, while a student already scoring 6-7 may need only 6 to 8.',
    totalHours: '10-18 hours (WritePlacer)',
    weeks: [
      { label: 'Week 1', focus: 'Baseline essay', tasks: ['Write a practice essay under 60 minutes', 'Self-score against the published rubric', 'Log weak rubric categories'], hours: 4 },
      { label: 'Week 2', focus: 'Targeted skill repair', tasks: ['Practise the five-minute outline method', 'Develop concrete supporting examples', 'Review mechanical conventions'], hours: 6 },
      { label: 'Week 3', focus: 'Full-length practice', tasks: ['Write two timed practice essays', 'Review each against the rubric', 'Confirm your college\u2019s cut score'], hours: 6 },
      { label: 'Week 4', focus: 'Taper and confirm', tasks: ['One final practice essay', 'Light review of the error log', 'Check retest and multiple-measures policy'], hours: 2 }
    ],
    variants: [
      { label: 'WritePlacer ESL', detail: 'A companion essay test designed for English-language learners, with modified prompts.' },
      { label: 'ACCUPLACER Writing subtest', detail: 'The multiple-choice writing placement subtest used by some colleges instead of or alongside the essay.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably moves WritePlacer scores is "practise the five-minute outline and the five-paragraph argument structure, then self-score against the published rubric," and the single highest-leverage move is obtaining your college\u2019s cut score before you study. A second proven approach is mastering the thesis-and-support structure: every prompt asks for a position, and essays that state the thesis in the introduction and devote one paragraph to each supporting point score measurably higher on the holistic rubric. Third, practise development specifically — adding concrete examples, reasons, and evidence to each body paragraph, since under-developed support is the most common reason essays stall below the college-level band. Fourth, review mechanical conventions: the rubric rewards essays that are largely free of sentence-structure and grammar errors, so proofreading practice is high-yield. Fifth, keep an error log organized by rubric category; patterns show up by category. Finally, never leave preparation until the week of registration; placement happens at orientation and retakes are often limited.',
    items: [
      { title: 'Get the cut score first', detail: 'Obtain your college\u2019s placement chart so you know the essay score you need.' },
      { title: 'Master the thesis-and-support structure', detail: 'State the thesis up front; one paragraph per supporting point.' },
      { title: 'Practise development', detail: 'Add concrete examples and reasons to every body paragraph.' },
      { title: 'Review mechanical conventions', detail: 'Proofread; the rubric rewards clean sentence structure and grammar.' },
      { title: 'Self-score against the rubric', detail: 'Score your practice essays on the 1-8 bands to track progress.' }
    ]
  },
  resourceComparison: {
    summary: 'The best-value WritePlacer preparation is almost entirely free, because College Board publishes the rubric, sample prompts, and scored sample essays that show what each score band looks like. The comparison below separates official resources from commercial writing courses and tutoring, with prices current to this review.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'College Board WritePlacer rubric & sample essays', values: ['Free', 'PDF with scored examples', 'Understanding what each score band requires'] },
      { label: 'College Board sample prompts', values: ['Free', 'PDF prompt set', 'Timed essay practice'] },
      { label: 'Khan Academy SAT Writing & Language', values: ['Free', 'Video + practice', 'Grammar and convention review'] },
      { label: 'ACCUPLACER prep books with essay scoring', values: ['~$25-45', 'Printed book + online', 'Structured essay practice'] },
      { label: 'Writing tutors', values: ['~$40-90/hr', '1:1 sessions', 'Feedback on your practice essays'] }
    ],
    footnote: 'Prices approximate and dated to this review; College Board official materials are free and updated with the current essay format.'
  },
  commonMistakes: {
    summary: 'The most expensive mistake candidates make is writing without an outline, producing an essay that meanders and scores low on organization; the second is ignoring their college\u2019s cut score entirely. A close third is under-developing support — stating claims without concrete examples or reasons, which is the most common reason essays stall below the college-level band. Candidates also routinely neglect mechanical conventions, losing points on fixable grammar and sentence-structure errors, and many run out of time by writing the introduction first and the body last under pressure. Another recurring error is registering at orientation cold and accepting a developmental placement without asking about retake policy or multiple-measures review. Finally, some students fail to confirm whether their school even uses WritePlacer or a competing placement test.',
    items: [
      { mistake: 'Writing without an outline', fix: 'Spend five minutes planning the thesis and three supporting points.' },
      { mistake: 'Under-developed support', fix: 'Add a concrete example or reason to every body paragraph.' },
      { mistake: 'Neglecting mechanics', fix: 'Proofread; clean conventions are part of the rubric.' },
      { mistake: 'Poor time allocation', fix: 'Write the body before polishing the introduction.' },
      { mistake: 'Registering cold at orientation', fix: 'Write one timed practice essay at least two weeks before placement.' }
    ]
  },
  questionTypes: {
    summary: 'WritePlacer presents a single essay prompt — typically a topic statement followed by a question asking you to take a position and support it — with 60 minutes to write a 300-to-500-word essay. The essay is scored holistically on the 1-8 rubric across focus, organization, development, sentence structure, and mechanical conventions. The samples below are editor-written illustrations of the published prompt style, not live exam prompts.',
    types: [
      { name: 'Persuasive/position essay', share: '~100%', detail: 'Take a position on a topic statement and support it with reasons and examples.' }
    ],
    samples: [
      {
        prompt: 'Some people believe that students should take a gap year between high school and college, while others believe they should enroll immediately. Take a position and support it with reasons and examples.',
        options: ['A. Argue for the gap year with concrete benefits', 'B. Argue for immediate enrollment with concrete benefits', 'C. Present both sides without a clear position', 'D. Write an essay unrelated to the topic'],
        answer: 'C',
        explanation: 'The strongest essays take a clear position; presenting both sides without a thesis is the most common weakness on the rubric\u2019s focus dimension.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published prompt style, not live exam prompts.'
  },
  examDay: {
    summary: 'WritePlacer is administered at your college or a testing center, typically during orientation or a scheduled placement session, with 60 minutes to write a 300-to-500-word essay. The core rules: bring a government-issued photo ID and your registration information, and expect to store personal items; the essay is typed into a simple word-processing interface with basic editing tools. There is no cost at most colleges, and you will usually see your placement result within a short window. The biggest behavioural trap is spending the first 15 minutes staring at the prompt; instead, spend five minutes outlining, then write the body, then the introduction, and save the final five minutes for proofreading. After the session, your score report shows the essay score (1-8) and placement recommendation; if the placement assigns you to developmental writing and you believe it is wrong, immediately ask about the retest schedule and any multiple-measures review process.',
    bring: ['Government-issued photo ID', 'College registration/confirmation info', 'Confirmation of your target essay score', 'A 60-minute writing mindset'],
    leave: ['Phone and smartwatch (stored with testing staff)', 'Notes or study materials (the essay is written in-session)'],
    timeline: [
      { time: 'Arrival', detail: 'Check in at the testing center; verify ID; store personal items.' },
      { time: 'Plan (5 min)', detail: 'Read the prompt and outline the thesis and three supporting points.' },
      { time: 'Write (45 min)', detail: 'Write the body paragraphs, then the introduction and conclusion.' },
      { time: 'Proofread (10 min)', detail: 'Check structure, development, and mechanical conventions.' },
      { time: 'After', detail: 'Placement result within a short window; ask about retake and multiple-measures review.' }
    ],
    rules: ['60 minutes for the essay', '300-500 words', 'Scored 1-8 on the published rubric', 'Retakes may require a waiting period or fee'],
    afterwards: 'Your essay score maps to your college\u2019s placement table; a low placement is not final — check retest windows and multiple-measures review before enrolling in non-credit coursework.'
  }
};

export default data;
