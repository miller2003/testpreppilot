const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'College readiness & admissions assessments desk',
    bio: 'ACCUPLACER structure and placement policies come from College Board official pages and individual college placement catalogs, which vary by institution and are revised. Wage and education data come from the BLS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the ACCUPLACER Reading subtest structure, scoring bands, and content categories against College Board official pages; education-return context against BLS.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Placement outcome, not pay: your Reading score decides whether you enter credit-bearing English or developmental reading — and remedial load is one of the strongest predictors of degree completion and lifetime earnings',
    summary: 'The direct answer is that ACCUPLACER Reading is a placement test, not a job credential, so no BLS occupation corresponds to it and the salary story is about what the placement result unlocks. The test decides, usually before your first semester, whether you place directly into college-level English or are assigned to a developmental (non-credit) reading course — and that assignment is one of the strongest predictors of whether you graduate. Research published by the Community College Research Center (CCRC) has repeatedly found that a large share of community-college entrants are placed into developmental coursework and that students who skip remediation complete credentials at substantially higher rates. The reference point for interpreting this is BLS: the May 2024 median wage across all occupations was $49,500, while workers with an associate degree earned a median weekly wage of about $1,059 (2023 data) versus about $899 for high-school-diploma-only workers — the completion premium is real and compounding. A student placed into one or two semesters of non-credit reading is measurably more likely to drop out before earning any credential, while a student who clears the placement gate and completes a degree moves toward the higher half of the distribution. Colleges increasingly use multiple measures — high school GPA and course history alongside the placement score — precisely because a single cut score misplaces students at both margins. The practical takeaway: treat the Reading subtest as a high-stakes placement decision, prepare deliberately, and if the result assigns you to remediation, ask about retest policy and multiple-measures review rather than accepting the placement silently.',
    rows: [
      { label: 'Reference: median wage, all occupations', value: '$49,500', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Reference: associate degree, median weekly earnings', value: '$1,059', note: 'BLS Education Pays, 2023 ($55,068/yr equivalent)' },
      { label: 'Reference: high school diploma, median weekly earnings', value: '$899', note: 'BLS Education Pays, 2023 ($46,748/yr equivalent)' },
      { label: 'The exam itself', value: 'No direct occupation', note: 'A placement subtest, not a credential of record' }
    ],
    growth: 'BLS does not project growth for a placement test; relevant projections follow the occupations students are placed toward.',
    source: { label: 'BLS OOH — Pay overview', url: 'https://www.bls.gov/ooh/about/pay.htm' }
  },
  passRate: {
    headline: 'There is no official pass rate — ACCUPLACER Reading is a scaled placement instrument scored 200-300, and only your college\u2019s cut scores matter',
    summary: 'The core fact to internalize is that ACCUPLACER Reading has no pass/fail threshold at the national level, so any claim of a "pass rate" describes something that does not exist. Each subtest is scored on a 200-300 scale, and every college sets its own cut scores that determine placement into developmental reading, college-level English, or a specific composition course. Two students can receive identical scores at different institutions and be placed differently, which is exactly why practice vendors cannot quote a defensible pass rate. What is published is the score scale and, at many schools, the placement table that maps score bands onto course assignments; these tables are public on most college websites but differ by campus. The Reading subtest is a 20-question computer-adaptive test with no time limit by default (most colleges allow up to two hours), and it measures reading comprehension and analysis: identifying main ideas and supporting details, drawing inferences, understanding vocabulary in context, and analyzing the author\u2019s purpose and argument structure. Because the test is adaptive, your score reflects a statistical estimate of ability rather than a simple percentage correct, and early answers set the difficulty ceiling. The practical implication is that your preparation target must be defined locally: ask your specific institution for its placement chart and aim comfortably above the cut score for the course you want. Colleges also vary in retake policy, and some let you contest the placement through a multiple-measures review using high school GPA or transcripts.',
    source: { label: 'College Board — ACCUPLACER scoring', url: 'https://accuplacer.collegeboard.org/educators/student-score-reports' },
    caveat: 'No official pass rate exists; only per-college cut scores are published, and they vary by institution.'
  },
  studyPlan: {
    summary: 'Plan for two to four weeks and roughly 12 to 20 hours of study for the Reading subtest, and expect the exam to reward active reading and analysis skills — main ideas, inference, vocabulary in context, and author purpose — rather than memorized content. The Reading subtest is a 20-question adaptive test with no default time limit (most colleges allow up to two hours), built from short passages followed by multiple-choice items. Week one should be a diagnostic pass: take the official College Board practice test, log which question types you miss, and map each miss to a skill (main idea, inference, vocabulary in context, purpose and argument). Week two is targeted skill work on your weakest two or three areas, using the free official question bank and reading short nonfiction articles actively — annotating main ideas as you go. Week three, if you have it, is for full-length timed practice and stamina, even though the real exam is untimed by default. Week four is a light taper: one more official practice test, review of the error log, and rest. The single most useful habit is practising the "read for structure" approach: before looking at the questions, identify the passage\u2019s main claim and how each paragraph supports it, because most items test exactly that structure. Budget hours in proportion to your diagnostic score: someone near the bottom should expect the full 20 hours, while a student already reading at college level may need only 6 to 8.',
    totalHours: '12-20 hours (Reading subtest)',
    weeks: [
      { label: 'Week 1', focus: 'Diagnostic baseline', tasks: ['Take the official College Board Reading practice test', 'Log every missed item by skill', 'Map misses to the published test description'], hours: 4 },
      { label: 'Week 2', focus: 'Targeted skill repair', tasks: ['Drill main-idea and inference items', 'Practise vocabulary-in-context', 'Read short nonfiction actively with annotation'], hours: 7 },
      { label: 'Week 3', focus: 'Full-length stamina', tasks: ['Two full-length practice sessions in one sitting', 'Review the error log patterns', 'Confirm your college\u2019s cut scores'], hours: 6 },
      { label: 'Week 4', focus: 'Taper and confirm', tasks: ['One final official practice test', 'Light review of the error log', 'Check retest and multiple-measures policy'], hours: 3 }
    ],
    variants: [
      { label: 'WritePlacer', detail: 'The essay-based English placement test, scored on a 1-8 scale with a rubric.' },
      { label: 'ESL Reading Skills', detail: 'A companion subtest for English-language learners.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably moves Reading scores is "practise the read-for-structure approach on official items, then rehearse adaptive-order simulation," and the single highest-leverage move is obtaining your college\u2019s placement table before you study. Because the test is adaptive, practise in the same mode: use platforms that feed progressively harder items after correct answers. A second proven approach is mastering the main-idea question type, which appears on nearly every passage — practise writing a one-sentence summary of each passage you read before looking at the options. Third, drill inference items specifically: the correct answer is always the option that follows logically from the text without overreaching, and candidates who practise the "what must be true" test outperform those who pick plausible-but-unsupported options. Fourth, build vocabulary-in-context fluency by reading actively and noting how context clues signal meaning, since these items reward using the surrounding text. Fifth, keep an error log organized by skill category; patterns show up by category. Finally, never leave preparation until the week of registration; placement happens at orientation and retakes are often limited.',
    items: [
      { title: 'Get the placement table first', detail: 'Obtain your college\u2019s cut scores before studying so you calibrate difficulty to your target band.' },
      { title: 'Practise read-for-structure', detail: 'Identify the main claim and paragraph support before answering items.' },
      { title: 'Master inference with the must-be-true test', detail: 'The correct inference follows logically without overreaching.' },
      { title: 'Build vocabulary-in-context fluency', detail: 'Use context clues to signal meaning in unfamiliar words.' },
      { title: 'Protect the opening items', detail: 'Adaptive tests set difficulty from early answers; slow down at the start.' }
    ]
  },
  resourceComparison: {
    summary: 'The best-value ACCUPLACER Reading preparation is almost entirely free, because College Board publishes official practice questions and a full sample test that mirror the adaptive engine better than any third-party bank. The comparison below separates official resources from commercial practice banks and live tutoring, with prices current to this review.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'College Board official practice questions & sample test', values: ['Free', 'Web-based practice + downloadable PDF', 'The closest match to the real adaptive engine'] },
      { label: 'Free reading practice (Khan Academy SAT Reading passages)', values: ['Free', 'Video + practice', 'Passage-analysis practice'] },
      { label: 'ACCUPLACER prep books (e.g. Mometrix, Barron\u2019s)', values: ['~$25-45', 'Printed book + online bank', 'Structured review for self-studiers'] },
      { label: 'Commercial practice apps with adaptive mode', values: ['~$10-30/mo', 'Mobile drills', 'Daily short practice sessions'] },
      { label: 'College readiness tutors', values: ['~$40-90/hr', '1:1 sessions', 'Candidates stuck after self-study'] }
    ],
    footnote: 'Prices approximate and dated to this review; College Board official materials are free and updated with the current subtest set.'
  },
  commonMistakes: {
    summary: 'The most expensive mistake candidates make is reading passages passively and then re-reading them multiple times during the questions, which wastes the untimed session; the second is ignoring their college\u2019s cut scores entirely. A close third is overreaching on inference items — picking an option that is plausible but not strictly supported by the text, when the correct inference is always the option that must be true. Candidates also routinely struggle with vocabulary-in-context by treating it as a definition test instead of using the surrounding text, and many skip the main-idea question type practice despite it appearing on nearly every passage. Another recurring error is registering at orientation cold and then accepting a developmental placement without asking about retake policy or multiple-measures review. Finally, some students fail to confirm whether their school even uses ACCUPLACER or a competing placement test.',
    items: [
      { mistake: 'Passive reading and re-reading', fix: 'Practise read-for-structure: identify the main claim once, then answer.' },
      { mistake: 'Overreaching on inferences', fix: 'Apply the must-be-true test; the correct inference is strictly supported.' },
      { mistake: 'Treating vocabulary as definition recall', fix: 'Use context clues in the surrounding text.' },
      { mistake: 'Skipping main-idea practice', fix: 'Summarise each passage in one sentence before looking at options.' },
      { mistake: 'Registering cold at orientation', fix: 'Take one official practice test at least two weeks before placement.' }
    ]
  },
  questionTypes: {
    summary: 'The Reading subtest contains 20 adaptive multiple-choice questions with no default time limit, built from short passages and measuring reading comprehension and analysis: main ideas and supporting details, inferences, vocabulary in context, and author purpose and argument. Because the test is computer-adaptive, each candidate\u2019s question set is unique. The samples below are editor-written illustrations of the published blueprint, not live exam items.',
    types: [
      { name: 'Main idea & supporting details', share: '~35%', detail: 'Identifying the central claim and the evidence supporting it.' },
      { name: 'Inference', share: '~25%', detail: 'Drawing logical conclusions strictly supported by the text.' },
      { name: 'Vocabulary in context', share: '~20%', detail: 'Determining word meaning from surrounding context.' },
      { name: 'Author purpose & argument', share: '~20%', detail: 'Analyzing purpose, tone, and argument structure.' }
    ],
    samples: [
      {
        prompt: 'Which statement best expresses the main idea of a passage describing the decline of small farms in the United States?',
        options: ['A. Small farms are disappearing because of economic consolidation and market pressures', 'B. Small farms produce better food', 'C. Farmers enjoy a simple lifestyle', 'D. The government should abolish large farms'],
        answer: 'A',
        explanation: 'The main idea reflects the passage\u2019s central claim about the causes of small-farm decline.'
      },
      {
        prompt: 'A passage states that "the committee\u2019s decision was met with guarded optimism." Which is the most likely meaning of "guarded optimism"?',
        options: ['A. Enthusiastic certainty', 'B. Cautious hopefulness', 'C. Open hostility', 'D. Total indifference'],
        answer: 'B',
        explanation: 'Context signals a mix of hope and caution, matching "cautious hopefulness."'
      },
      {
        prompt: 'Which statement can be inferred from a passage reporting that graduation rates rise when colleges remove remedial placement barriers?',
        options: ['A. Placement practices affect student outcomes', 'B. All students fail remediation', 'C. Remediation is always unnecessary', 'D. Colleges never change placement policy'],
        answer: 'A',
        explanation: 'The reported relationship directly supports the inference that placement practices affect outcomes.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'ACCUPLACER Reading is administered at your college or a testing center, typically during orientation or a scheduled placement session, and is untimed by default — most colleges allow up to two hours per subtest. The core rules: bring a government-issued photo ID and your registration information, leave calculators at home (none are needed for Reading), and expect to store personal items. There is no cost at most colleges, and you will usually see your placement result before you leave. The biggest behavioural trap is reading passively and re-reading passages during the questions; instead, read each passage once with the read-for-structure approach, then answer. After the session, your score report shows the scaled score and placement recommendation; if the placement assigns you to developmental coursework and you believe it is wrong, immediately ask about the retest schedule and any multiple-measures review process.',
    bring: ['Government-issued photo ID', 'College registration/confirmation info', 'Confirmation of your target placement band', 'Patience for an untimed, adaptive session'],
    leave: ['Phone and smartwatch (stored with testing staff)', 'Notes or study materials'],
    timeline: [
      { time: 'Arrival', detail: 'Check in at the testing center; verify ID; store personal items.' },
      { time: 'Start', detail: 'The Reading subtest launches untimed (most colleges allow up to 2 hours).' },
      { time: 'Mid-session', detail: 'Read each passage once for structure; early items carry the most adaptive weight.' },
      { time: 'Finish', detail: 'Placement results typically display immediately; ask for the printed report.' },
      { time: 'After', detail: 'If placed into remediation, ask about retake policy and multiple-measures review.' }
    ],
    rules: ['Untimed by default — speed earns nothing', 'Photo ID required', 'Personal items and devices stored', 'Retakes may require a waiting period or fee'],
    afterwards: 'Your scaled score maps to your college\u2019s placement table; a low placement is not final — check retest windows and multiple-measures review before enrolling in non-credit coursework.'
  }
};

export default data;
