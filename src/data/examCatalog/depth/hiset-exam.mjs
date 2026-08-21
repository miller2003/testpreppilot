// Depth content for: hiset-exam
// HiSET structure and scoring come from ETS (the HiSET program) and named
// state adult-education agencies; education-return wage data come from BLS.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'High school equivalency & adult education desk',
    bio: 'This guide is compiled and maintained by our adult-education desk. HiSET structure and scoring come from ETS, which develops and administers the HiSET program, and from named state adult-education agencies that set fees and credential rules, so we state the ETS baseline and flag anything a state sets on its own. Wage data come from the BLS Education Pays series, which reports median weekly earnings by education level. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the five-subtest structure, the 1-20 scoring scale, the 8-per-subtest and 45-total passing requirements, and the essay requirement against ETS HiSET materials and state agency pages.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'No direct occupation — the HiSET is the high-school-equivalency key to jobs and college, and the payoff is the credential gap: workers with a high school diploma earned a median of $899/week vs $706 for those without one (BLS, 2023)',
    summary:
      'The direct answer is that the HiSET is not a job credential with its own BLS occupation — it is one of the accepted pathways to a high school equivalency credential that is recognised in place of a high school diploma by employers, colleges, and the military — so the salary story is the education-return gap that the credential closes. The relevant reference points from BLS Education Pays: in 2023 workers with a high school diploma earned a median weekly wage of about $899, versus about $706 for workers with less than a high school diploma — a roughly $10,000-a-year gap that an equivalency credential is designed to close — and the earnings ladder continues upward, with associate-degree holders at about $1,059 and bachelor\u2019s-degree holders at about $1,493 per week. The HiSET, developed by ETS, has been operating since January 2014 and is accepted by the states and jurisdictions that offer it as a high school equivalency pathway; ETS reports on the order of 50,000 HiSET exam attempts per year, a smaller footprint than the GED because fewer states and jurisdictions use it. Because the credential stands in for a high school diploma, its financial value is best read as the difference between the earnings of high-school completers and non-completers, plus the door it opens to postsecondary education, apprenticeship, and occupational training programs. The honest framing is that the HiSET itself does not create the wage premium — the follow-on step does. A holder who stops there captures only the high-school-completer premium; one who uses the credential to enter college or training captures the larger returns of the next credential. The HiSET\u2019s own scoring adds a useful benchmark: a subtest score of 15 or higher with a 4 or better on the writing essay indicates college and career readiness, meaning the credential carries a built-in signal about whether you are ready for credit-bearing coursework.',
    rows: [
      { label: 'Reference: high school diploma, median weekly earnings', value: '$899', note: 'BLS Education Pays, 2023 ($46,748/yr equivalent)' },
      { label: 'Reference: less than high school diploma, median weekly earnings', value: '$706', note: 'BLS Education Pays, 2023 ($36,712/yr equivalent)' },
      { label: 'Reference: associate degree, median weekly earnings', value: '$1,059', note: 'BLS Education Pays, 2023 ($55,068/yr equivalent)' },
      { label: 'Reference: bachelor\u2019s degree, median weekly earnings', value: '$1,493', note: 'BLS Education Pays, 2023 ($77,636/yr equivalent)' },
      { label: 'The credential itself', value: 'No direct occupation', note: 'A high school equivalency credential, not a licence or certification' }
    ],
    growth: 'BLS does not project growth for an equivalency credential; the relevant projections follow the education and training the HiSET unlocks.',
    source: { label: 'BLS Education Pays', url: 'https://www.bls.gov/emp/chart-unemployment-earnings-education.htm' }
  },
  passRate: {
    headline: 'ETS publishes the passing rules but no recent national pass rate — the five subtests require a score of 8+ on each (on a 1-20 scale), 2+ on the writing essay (out of 6), and a combined total of 45+ across the battery',
    summary:
      'The core fact is that the HiSET\u2019s passing rules are fully published while its pass rate is not: ETS sets the cut scores and reports program statistics in its annual statistical reports, but it has not published a current national pass rate for recent cycles, so any number quoted by a third-party site is not an official HiSET figure. What is verifiable is the scoring rule, which has three independent requirements you must meet on the same test date: a score of at least 8 on each of the five subtests, at least 2 out of 6 on the essay portion of the writing subtest, and a combined score of at least 45 out of 100 across the full battery. Each subtest is scored on a 1-20 scale, and some states set higher passing scores than the ETS minimum, so check your state. The five subtests are Language Arts-Reading (40 multiple-choice questions, 65 minutes), Language Arts-Writing (50 multiple-choice questions plus one essay, 120 minutes), Mathematics (50 questions, 90 minutes), Science (50 questions, 80 minutes), and Social Studies (50 questions, 70 minutes), for roughly 240 questions across about 7.5 hours; the test is available on computer and, in most jurisdictions, paper. ETS also publishes a college and career readiness benchmark: a score of 15 or higher on a subtest and 4 or higher on the essay indicates readiness for credit-bearing college coursework. The practical reading of the three-part passing rule is that it is exacting: a total of 45 with one subtest at 7 still fails, and the writing essay has its own floor, so candidates must prepare all five areas rather than leaning on strengths.',
    source: { label: 'ETS HiSET — scores and passing requirements', url: 'https://hiset.ets.org/scores' },
    caveat: 'ETS publishes passing cut scores and program-level statistical reports but no current single national pass rate; the 8/45/2 essay rules above are the published passing requirements.'
  },
  studyPlan: {
    summary: 'Plan for 8 to 14 weeks and 40 to 80 hours of study for the full battery, or a 2-to-4-week sprint per subtest if you are sitting them one at a time, weighted to the writing subtest — it is the one with an essay floor (2 of 6) that many candidates underestimate. The HiSET has five subtests — Language Arts-Reading (40 questions, 65 minutes), Language Arts-Writing (50 multiple-choice questions plus one essay, 120 minutes), Mathematics (50 questions, 90 minutes), Science (50 questions, 80 minutes), and Social Studies (50 questions, 70 minutes) — each scored 1-20, and you must score at least 8 on every subtest, at least 2 of 6 on the essay, and 45 or more combined. The most effective sequence is: first, take a full-length practice test or a released subtest set to baseline; second, study the lowest-scoring subtest first, because the 8-per-subtest floor means a single weak area fails the battery; third, drill the writing essay, since the 2-of-6 essay floor is where candidates unexpectedly lose the credential; fourth, build the cross-cutting skills the exam rewards — reading informational text and interpreting graphs, charts, and tables, which appear across science, social studies, and mathematics; and fifth, take timed full-length practice subtests in the final weeks. The highest-yield habit is practising the essay: ETS scores it out of 6 against a writing rubric, and a practised essay structure reliably clears the 2-point floor. Budget time to every subtest rather than to your favourite subjects, because the combined 45-point floor and the individual 8-point floors work together to punish uneven preparation.',
    totalHours: '40-80 hours over 8-14 weeks for the full battery (or 10-20 hours per subtest)',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Baseline + writing', tasks: ['Take practice subtests across all five areas to baseline', 'Drill the writing essay structure — the 2-of-6 essay floor fails many candidates', 'Log weak subtests'], hours: 12 },
      { label: 'Weeks 3-5', focus: 'Mathematics and Reading', tasks: ['Drill arithmetic, algebra, geometry, and data analysis', 'Practise reading-comprehension items across prose and informational text', 'Practise calculator-free and calculator-permitted math pacing'], hours: 15 },
      { label: 'Weeks 6-8', focus: 'Science and Social Studies', tasks: ['Practise interpreting graphs, tables, charts, and maps', 'Review life, physical, and earth/space science content', 'Practise analysing primary and secondary source documents'], hours: 15 },
      { label: 'Weeks 9-10', focus: 'Writing and full-length practice', tasks: ['Write one timed essay per week and self-score against the rubric', 'Take timed full-length practice subtests', 'Re-study only the areas where you miss points'], hours: 12 },
      { label: 'Weeks 11-14', focus: 'Subtest-by-subtest test-taking', tasks: ['Schedule subtests one at a time in your strongest-to-weakest order', 'Retake any failed subtest — check your state\u2019s retake rules', 'Confirm your state\u2019s age, residency, and fee rules before booking'], hours: 10 }
    ],
    variants: [
      { label: 'Taking the paper-based format', detail: 'Several states still offer the HiSET on paper; check your state, and confirm the longer score-posting timeline (several business days).' },
      { label: 'English-language learner', detail: 'The HiSET is available in English and Spanish; allow extra time for the reading-heavy subtests and the essay.' },
      { label: 'Test-taker under 18', detail: 'Most states require an age waiver and prior approval; start the process early because it can take weeks.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably earns the HiSET is "practise the essay, protect every subtest\u2019s 8-point floor, and use the official practice materials," and the single biggest error is over-preparing the subjects you like while a weak area silently fails the battery. A second proven approach is treating the reading-heavy subtests as reading comprehension: the science, social studies, and mathematics subtests all reward interpreting graphs, tables, charts, and passages, so building that skill lifts three subtests at once. Third, master the writing essay deliberately — ETS scores it out of 6 with a published rubric, and a practised structure reliably clears the 2-point floor, while an unpractised candidate often scores 1 and fails the writing subtest outright. Fourth, use the official practice tests and released items as the calibration tool, since third-party apps do not always match the item style. Fifth, respect the three-part passing rule when scheduling: because the 8-per-subtest, essay, and 45-total requirements must all be met, sit each subtest only when a practice run shows it above the floor. Finally, manage the logistics — fees and retake rules are set by your state, most states allow you to take subtests on separate days, and confirm whether your state uses the computer or paper format before booking.',
    items: [
      { title: 'Practise the essay', detail: 'The writing subtest has a 2-of-6 essay floor; a practised structure reliably clears it, an unpractised one often scores 1.' },
      { title: 'Protect every subtest\u2019s 8-point floor', detail: 'The passing rule demands 8+ on all five subtests, so study your weakest area first rather than your favourite.' },
      { title: 'Build the graph-and-chart skill', detail: 'Interpreting tables, graphs, charts, and maps lifts the science, social studies, and mathematics subtests together.' },
      { title: 'Use official practice materials', detail: 'ETS practice tests and released items are the reliable calibration tool; third-party apps vary in item style.' },
      { title: 'Respect the three-part passing rule', detail: 'All three requirements — 8+ per subtest, 2+ essay, 45+ total — must be met; sit each subtest only when a practice run clears the floor.' },
      { title: 'Confirm your state\u2019s format and fees', detail: 'Fees, retake rules, and the computer-versus-paper format are set by your state; confirm before booking.' }
    ]
  },
  resourceComparison: {
    summary: 'HiSET preparation is dominated by official and low-cost resources — ETS provides the HiSET program site, a practice test, and the Test at a Glance documents for each subtest — with the subtest fees (commonly $10-20 each, set by your state) as the main cost. The comparison below separates official and commercial resources, with prices current to this review. The buying rule is to use the official practice materials first, especially the free practice test and Test at a Glance documents, and treat commercial apps and books as supplements for repetition and content review.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ETS HiSET practice test', values: ['Free to low-cost', 'Online, official', 'The reliable calibration tool for the real format'] },
      { label: 'ETS Test at a Glance documents', values: ['Free', 'PDF for each subtest', 'Authoritative descriptions of content, item counts, and timing'] },
      { label: 'HiSET subtest fees', values: ['~$10-20 per subtest by state', 'Computer-based or paper, at an approved centre', 'The five subtests — full battery commonly $50-100'] },
      { label: 'Adult education classes (often free)', values: ['Free to low-cost via state programs', 'Classroom or online', 'Structure, a teacher, and funded practice testing'] },
      { label: 'HiSET prep books and apps', values: ['~$15-30', 'Print or mobile app', 'Extra repetition and content review once the official materials are clean'] }
    ],
    footnote: 'Prices approximate and dated to this review (2026-08); subtest fees are set by each state and commonly run $10-20 each. Many states subsidise or waive fees through adult education programs — check with your local program before paying.'
  },
  commonMistakes: {
    summary: 'Nearly every avoidable failure on the HiSET comes from one of three roots: underestimating the writing essay, preparing the strong subjects and neglecting a weak subtest, or missing the interaction between the three passing requirements. Candidates also routinely treat the reading-heavy subtests as pure content exams and ignore the graph-and-chart items, and many skip the official practice materials in favour of apps whose item style does not match. Finally, some test-takers ignore the state-set logistics — age waivers, fees, the computer-versus-paper format, and retake rules — and lose a booking to paperwork.',
    items: [
      { mistake: 'Underestimating the writing essay', fix: 'The 2-of-6 essay floor fails many candidates; practise the essay structure against the published rubric.' },
      { mistake: 'Preparing only the strong subjects', fix: 'The passing rule demands 8+ on all five subtests; study the weakest subtest first.' },
      { mistake: 'Ignoring the three-part passing rule', fix: '8+ per subtest, 2+ on the essay, and 45+ total must all be met on the same test date; schedule around all three.' },
      { mistake: 'Treating science and social studies as pure content', fix: 'Much of each subtest is reading comprehension and graph-and-table interpretation; practise those skills.' },
      { mistake: 'Relying on non-official apps', fix: 'Use the ETS practice test and Test at a Glance documents as the baseline; third-party items vary in style.' },
      { mistake: 'Ignoring state logistics', fix: 'Fees, age waivers, format, and retake rules are set by your state; confirm them before paying, especially if you are under 18.' }
    ]
  },
  questionTypes: {
    summary: 'The HiSET is five subtests — Language Arts-Reading, Language Arts-Writing, Mathematics, Science, and Social Studies — totalling roughly 240 questions over about 7.5 hours, available on computer and, in most jurisdictions, paper. Each subtest is scored on a 1-20 scale, and you must score at least 8 on each, at least 2 of 6 on the writing essay, and 45 or more combined. The item mix is almost entirely multiple choice — 40 questions on the reading subtest and 50 each on writing (plus the essay), mathematics, science, and social studies — with the writing essay the only open-response item. There is no penalty for wrong answers, so answer everything. The samples below are editor-written illustrations of the published item styles, not live exam items.',
    types: [
      { name: 'Multiple choice', share: '~99% of items', detail: 'The dominant format on all five subtests; the science and social studies versions are heavily reading comprehension over content, with many items built around graphs, charts, tables, or maps.' },
      { name: 'Essay (Language Arts-Writing)', share: '1 item, scored 1-6', detail: 'A single writing task scored against the ETS rubric; a 2-of-6 floor applies, and the essay score contributes to the writing subtest\u2019s 1-20 scale.' },
      { name: 'Scenario and data-interpretation items', share: 'Heavy in science and social studies', detail: 'Items that present a passage, graph, or table and ask you to draw a conclusion or identify the correct interpretation.' },
      { name: 'Mathematics word and computation items', share: 'The mathematics subtest', detail: 'Arithmetic, algebra, geometry, and data analysis in both computation and applied form; a calculator is permitted on part of the subtest.' }
    ],
    samples: [
      {
        prompt: 'A subtest presents a table of a city\u2019s monthly rainfall. A question asks which month had the least rain. The correct approach is to:',
        options: ['A. Estimate from memory of the weather', 'B. Find the lowest value in the table and confirm its month label', 'C. Average all twelve months', 'D. Skip the table and guess'],
        answer: 'B',
        explanation: 'The HiSET science and social studies subtests reward extracting information directly from the presented graphic or table. Locating the minimum value and reading its label answers the question exactly. A ignores the evidence provided, C answers a different question, and D forfeits a question the table answers directly.'
      },
      {
        prompt: 'For the Language Arts-Writing essay, a response that earns the top score band would:',
        options: ['A. Present a clear position with organised, developed support', 'B. Write a single long paragraph with no clear position', 'C. Copy the prompt and add a few opinions', 'D. Leave the essay blank to save time'],
        answer: 'A',
        explanation: 'The ETS writing rubric rewards a focused response: a clear position, organised structure, and developed support with control of language. A matches that description. B lacks organisation and a clear claim, C provides no developed argument, and D forfeits the essay floor entirely, which fails the writing subtest regardless of the multiple-choice score.'
      },
      {
        prompt: 'On the mathematics subtest, a problem asks for the area of a rectangle 6 units long and 4 units wide. The correct calculation is:',
        options: ['A. 6 + 4 = 10', 'B. 6 x 4 = 24', 'C. 6 / 4 = 1.5', 'D. 2 x (6 + 4) = 20'],
        answer: 'B',
        explanation: 'Area of a rectangle is length times width, so 6 x 4 = 24 square units. A computes the sum of the sides, D computes the perimeter, and C computes the ratio — each is a real but different quantity, which is exactly how the distractors are built on the HiSET.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published item styles, not live exam items.'
  },
  examDay: {
    summary: 'The HiSET is taken at an approved test centre — a school, college, or adult education site — either on a computer or on paper, depending on your state, and the five subtests can be scheduled across different days. Each subtest is scored 1-20, and your results post to your HiSET account, typically within about three business days for multiple-choice subtests and five for the writing subtest. The two things that go wrong most often are paperwork and essay neglect: candidates either arrive without the identity documents and age-waiver approval their state requires, or they reach the writing subtest unpractised and fall below the 2-of-6 essay floor. Build your day around confirming your booking, bringing a valid unexpired government-issued photo ID, and budgeting time — 65 minutes for reading, 120 for writing, 90 for mathematics, 80 for science, and 70 for social studies. On the mathematics subtest, check whether your state permits a calculator and which model; on paper-based administrations, bring the permitted calculator. On a pass of all five, your state issues the high school equivalency credential; on a fail of a single subtest, check your state\u2019s retake rules and rebook after targeted study.',
    bring: ['Valid, unexpired government-issued photo ID (name must match your HiSET account)', 'Confirmation of your booking and any state-required age-waiver approval', 'A permitted calculator for the mathematics subtest, if your state allows one', 'Corrective lenses if you need them for reading'],
    leave: ['Phones, smartwatches, and earbuds — secured before entering the testing area', 'Notes and study materials (not allowed in the testing room)', 'Bags and coats beyond what the centre permits'],
    timeline: [
      { time: 'The week before', detail: 'Confirm your booking, your state\u2019s fee, format (computer or paper), and ID requirements, and any age waiver.' },
      { time: 'Day before', detail: 'Re-run a timed practice subtest for the subject you are sitting; confirm the centre address and check-in time.' },
      { time: 'At the centre', detail: 'Check in with photo ID, secure your belongings, and proceed to the assigned seat.' },
      { time: 'During the subtest', detail: 'Work the quick items first and answer everything — there is no guessing penalty; on the writing subtest, reserve time for the essay.' },
      { time: 'After testing', detail: 'Scores post to your HiSET account within about 3-5 business days depending on the subtest and format.' }
    ],
    rules: ['Five subtests scored 1-20; passing requires 8+ on each, 2+ of 6 on the essay, and 45+ combined', 'Subtests can be scheduled on separate days', 'Computer-based in most states, with paper-based administrations still available in some', 'No penalty for wrong answers', 'Valid government-issued photo ID required, matching your HiSET account', 'College and career readiness benchmark: 15+ on a subtest and 4+ on the essay'],
    afterwards: 'On a pass of all five subtests, your state issues the high school equivalency credential, and your comprehensive score report is your official record. On a fail, check your state\u2019s retake rules and rebook the failed subtest after targeted study — the 8-point per-subtest floor means a single weak area fails the battery, so study the failed subtest specifically. If your scores reach the college and career readiness benchmark (15+ on a subtest, 4+ on the essay), mention it when you talk to colleges, since it signals readiness for credit-bearing coursework.'
  }
};

export default data;
