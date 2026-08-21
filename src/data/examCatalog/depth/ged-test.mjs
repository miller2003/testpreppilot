// Depth content for: ged-test
// GED structure, scoring, and volume data come from GED Testing Service and
// named state agencies; education-return wage data come from BLS.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'High school equivalency & adult education desk',
    bio: 'This guide is compiled and maintained by our adult-education desk. GED structure, scoring, and program volume come from GED Testing Service materials and named state adult-education agencies, and they change as states revise their contracts and fees, so we state the federal program baseline and flag anything a state sets on its own. Wage data come from the BLS Education Pays series, which reports median weekly earnings by education level. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the four-subtest structure, the 145 passing score, the 100-200 scaled-score range, and program volume against GED Testing Service materials and named state agency pages.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'No direct occupation — the GED is the high-school-equivalency key to jobs and college, and the payoff is the credential gap: workers with a high school diploma earned a median of $899/week vs $706 for those without one (BLS, 2023)',
    summary:
      'The direct answer is that the GED is not a job credential with its own BLS occupation — it is the pathway to a high school equivalency credential that is accepted in place of a high school diploma by virtually all U.S. colleges, employers, and the military — so the salary story is the education-return gap that the credential closes. The relevant reference points from BLS Education Pays: in 2023 workers with a high school diploma earned a median weekly wage of about $899, versus about $706 for workers with less than a high school diploma — a roughly $10,000-a-year gap that the GED is designed to close — and the earnings ladder continues upward, with associate-degree holders at about $1,059 and bachelor\u2019s-degree holders at about $1,493 per week. The GED is the most widely recognised high school equivalency credential in the United States: the program has operated since 1942, more than 21 million people have earned it, and GED Testing Service reports it serves over 700,000 learners a year across more than 100 countries. Because the credential stands in for a high school diploma, its financial value is best read as the difference between the earnings of high-school completers and non-completers, plus the door it opens to postsecondary education and training programs that feed higher-paying occupations. The honest framing is that the GED itself does not create the wage premium — the follow-on step does. A GED holder who stops there captures only the high-school-completer premium; one who uses the credential to enter college, an apprenticeship, or occupational training captures the larger returns of the next credential. For the roughly 40 million U.S. adults without a high school diploma, the GED is the cheapest and most portable gateway to both paths.',
    rows: [
      { label: 'Reference: high school diploma, median weekly earnings', value: '$899', note: 'BLS Education Pays, 2023 ($46,748/yr equivalent)' },
      { label: 'Reference: less than high school diploma, median weekly earnings', value: '$706', note: 'BLS Education Pays, 2023 ($36,712/yr equivalent)' },
      { label: 'Reference: associate degree, median weekly earnings', value: '$1,059', note: 'BLS Education Pays, 2023 ($55,068/yr equivalent)' },
      { label: 'Reference: bachelor\u2019s degree, median weekly earnings', value: '$1,493', note: 'BLS Education Pays, 2023 ($77,636/yr equivalent)' },
      { label: 'The credential itself', value: 'No direct occupation', note: 'A high school equivalency credential, not a licence or certification' }
    ],
    growth: 'BLS does not project growth for an equivalency credential; the relevant projections follow the education and training the GED unlocks.',
    source: { label: 'BLS Education Pays', url: 'https://www.bls.gov/emp/chart-unemployment-earnings-education.htm' }
  },
  passRate: {
    headline: 'GED Testing Service reports roughly 75% of candidates who complete the four-subject battery pass it, on a 100-200 scale with 145 the passing score on each subtest',
    summary:
      'The core fact is that the GED is passed subject by subject, and the published program-level numbers show roughly three-quarters of candidates who complete all four subtests earning the credential. In its FY 2022-23 program data, GED Testing Service reported 272,598 test-takers, 863,746 individual subtest sittings, 165,373 completers who finished all four subtests, and 123,830 passers — a 75 percent pass rate calculated against completers. The rate is calculated against completers, not test-takers, because many candidates sit subtests one at a time and some never finish the battery, so a "GED pass rate" computed against all test-takers would look much lower and would be measuring persistence as much as achievement. Each subtest is scored on a 100-200 scale and requires a minimum of 145 to pass; scores of 165-174 earn the "GED College Ready" designation, and 175-200 earn "GED College Ready + Credit," which some colleges treat as worth up to three credits in each subject. The four subtests are Reasoning Through Language Arts (about 150 minutes), Mathematical Reasoning (about 115 minutes), Science (about 90 minutes), and Social Studies (about 70 minutes), all computer-based. The honest reading of the volume data is that the GED is a persistence test as much as a knowledge test: candidates who space the subtests, use the official GED Ready practice tests to know whether they are prepared, and retake a failed subtest rather than abandoning the battery sit comfortably within the published completion-and-pass band. There is no waiting period before the first three attempts on a subject; after three attempts, a 60-day wait applies.',
    source: { label: 'GED Testing Service — official site', url: 'https://www.ged.com/' },
    caveat: 'GED Testing Service publishes program-level volume and pass data rather than a simple national pass rate; the 75 percent figure is FY 2022-23 passers divided by completers and changes each year.'
  },
  studyPlan: {
    summary: 'Plan for 8 to 14 weeks and 40 to 80 hours of study for the full battery, or a 2-to-4-week sprint per subject if you are sitting subtests one at a time, weighted to your weakest subject as shown by the official GED Ready practice tests. The GED has four computer-based subtests — Reasoning Through Language Arts (about 150 minutes), Mathematical Reasoning (about 115 minutes), Science (about 90 minutes), and Social Studies (about 70 minutes) — each scored 100-200 with a 145 passing minimum. The most effective sequence is: first, take the official GED Ready practice tests for all four subjects to baseline and identify which subjects are exam-ready; second, study the lowest-scoring subjects first, because you must pass all four to earn the credential; third, build the two cross-cutting skills the test actually rewards — reading informational text and extracting data from tables, graphs, and charts, which appear across the science and social studies subtests; fourth, master the mathematical reasoning skills (algebra, geometry, data analysis, and calculator use on the embedded TI-30XS); and fifth, retake GED Ready in the week before each subtest until you are scoring above 145. The highest-yield habit is timed practice in the actual test format: the RLA subtest includes an extended response (essay), and practising it matters because many candidates lose the subtest to pacing rather than to reading ability. Budget your time toward the subtests you have not yet passed — GED Testing Service data shows candidates who complete all four subtests pass about 75 percent of the time, so the difference between earning the credential and not is usually persistence across the four sittings.',
    totalHours: '40-80 hours over 8-14 weeks for the full battery (or 10-20 hours per subject)',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Baseline + RLA', tasks: ['Take the four official GED Ready practice tests', 'Study the two weakest subjects first', 'Master reading informational text and the RLA extended response'], hours: 12 },
      { label: 'Weeks 3-5', focus: 'Mathematical Reasoning', tasks: ['Drill algebra, geometry, and data analysis', 'Practise with the embedded TI-30XS calculator', 'Work the grid and drop-down item formats'], hours: 15 },
      { label: 'Weeks 6-8', focus: 'Science and Social Studies', tasks: ['Practise reading passages and interpreting graphs, tables, and charts', 'Review life, physical, and earth/space science content', 'Learn to locate information and understand source documents in social studies'], hours: 15 },
      { label: 'Weeks 9-10', focus: 'Full-length timed practice', tasks: ['Take timed full-length practice subtests', 'Re-study only the areas where you miss points', 'Retake GED Ready on subjects that still sit near 145'], hours: 12 },
      { label: 'Weeks 11-14', focus: 'Subject-by-subject test-taking', tasks: ['Schedule subtests one at a time in your strongest-to-weakest order', 'Retake any failed subject promptly — no waiting before the third attempt', 'Confirm your state\u2019s age, residency, and fee rules before booking'], hours: 10 }
    ],
    variants: [
      { label: 'High school graduate retaking a failed subject', detail: 'A focused 2-4 weeks on the single subject. GED Ready is the diagnostic; retest once you score comfortably above 145.' },
      { label: 'English-language learner', detail: 'The GED is offered in English and Spanish, with accommodations available; allow extra time for the reading-heavy RLA and social studies subtests.' },
      { label: 'Test-taker under 18', detail: 'Most states require an age waiver and prior approval; start the waiver process early because it can take weeks.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably earns the GED is "use the official practice tests, study your weakest subjects first, and space the four subtests," and the single biggest error is cramming all four subjects at once and sitting them back-to-back. A second proven approach is building the cross-cutting skills the exam actually rewards: the science and social studies subtests are largely reading comprehension over content, so practising informational-text reading and graph-and-table interpretation lifts scores across three subtests at once. Third, master the mathematical reasoning subtest with the embedded TI-30XS calculator — the calculator is built into the testing software, so practise with an equivalent tool rather than doing everything by hand. Fourth, take the official GED Ready practice tests as the calibration tool: they are the closest predictor of your real score and cost a fraction of a full subtest. Fifth, treat the RLA extended response seriously — it is scored as part of the subtest, and practising the essay structure prevents a pacing failure on an otherwise passing subtest. Finally, manage the logistics: fees and retake rules are set by your state, most states allow you to take subtests on separate days, and after three attempts on one subject a 60-day wait applies, so scheduling each subtest when you are actually ready is cheaper than rushing.',
    items: [
      { title: 'Use GED Ready, not guesswork', detail: 'The official practice test is the closest predictor of your real score; take it for each subject before booking.' },
      { title: 'Study your weakest subjects first', detail: 'You must pass all four subtests, so attack the lowest GED Ready score first rather than the easiest subject.' },
      { title: 'Build the cross-cutting skills', detail: 'Informational-text reading and graph-and-table interpretation lift the science and social studies subtests together.' },
      { title: 'Practise with the embedded calculator', detail: 'The TI-30XS is built into the software; rehearse with an equivalent tool so calculator use is not a first-time event.' },
      { title: 'Practise the RLA extended response', detail: 'The essay is scored as part of the subtest; practising it prevents a pacing failure on an otherwise passing subtest.' },
      { title: 'Space the four subtests', detail: 'Sit subjects one at a time as you pass GED Ready; most states allow separate days, and the 60-day retest wait applies after three attempts on a subject.' }
    ]
  },
  resourceComparison: {
    summary: 'GED preparation is dominated by free and low-cost official resources — GED.com hosts the official study tools, the GED Ready practice tests, and free study guides for each subtest — with the test fees (commonly $30-40 per subtest, set by your state) as the main cost. The comparison below separates official and commercial resources, with prices current to this review. The buying rule is to use the official practice tests first and treat commercial apps and books as supplements for repetition and content review, not as the syllabus.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'GED.com study tools & free guides', values: ['Free', 'Web, official', 'The authoritative baseline for every subtest'] },
      { label: 'GED Ready official practice test', values: ['~$7 per subject (varies)', 'Online, official', 'The closest predictor of your real score'] },
      { label: 'GED subtest fees', values: ['~$30-40 per subtest by state', 'Computer-based at an authorised test centre or online proctored', 'The four subtests — full battery commonly $120-160'] },
      { label: 'Adult education classes (often free)', values: ['Free to low-cost via state programs', 'Classroom or online', 'Structure, a teacher, and funded GED Ready vouchers'] },
      { label: 'Commercial prep apps (e.g. Essential Education, GED Academy)', values: ['Free tier; ~$10-25/mo', 'Mobile app with practice questions', 'Extra repetition and spaced practice'] },
      { label: 'GED review books (e.g. Kaplan, McGraw-Hill)', values: ['~$20-30', 'Print + eBook', 'Portable structured content review'] }
    ],
    footnote: 'Prices approximate and dated to this review (2026-08); subtest fees are set by each state and commonly run $30-40 per subject. Many states subsidise or waive fees through adult education programs — check with your local program before paying.'
  },
  commonMistakes: {
    summary: 'Nearly every avoidable failure on the GED comes from one of three roots: sitting a subtest before the official practice test says you are ready, treating the four subjects as one giant exam, or neglecting the cross-cutting skills. Candidates also routinely skip the RLA extended response practice and fail that subtest on pacing, and many misunderstand the score scale, confusing a GED score with a percentage. Finally, some test-takers ignore the state-set logistics — age waivers, fees, and retake waits — and lose a booking to paperwork.',
    items: [
      { mistake: 'Booking a subtest before GED Ready says you are ready', fix: 'Take the official GED Ready practice test for the subject first; rebook only once you score above 145.' },
      { mistake: 'Cramming all four subjects at once', fix: 'The GED is four separate subtests you must all pass; space them and study the weakest first.' },
      { mistake: 'Skipping the RLA extended response practice', fix: 'The essay is scored as part of the subtest; practise the structure under timing or lose the subtest to pacing.' },
      { mistake: 'Misreading the score scale', fix: 'A 145 is a scaled passing score on a 100-200 range, not a percentage; aim for GED Ready "likely to pass" before booking.' },
      { mistake: 'Ignoring state logistics', fix: 'Fees, age waivers, and retake rules are set by your state; confirm them before paying, especially if you are under 18.' },
      { mistake: 'Neglecting the 60-day retest wait', fix: 'After three attempts on one subject, a 60-day wait applies; use GED Ready between attempts rather than burning retries.' }
    ]
  },
  questionTypes: {
    summary: 'The GED is four computer-based subtests, each scored 100-200 with 145 passing, administered through Pearson VUE at authorised test centres or, in many states, online with remote proctoring. Reasoning Through Language Arts runs about 150 minutes and includes multiple-choice items plus an extended response; Mathematical Reasoning runs about 115 minutes with a section where a calculator is not allowed on the first questions; Science runs about 90 minutes; and Social Studies about 70 minutes. Item formats include standard multiple choice, drag-and-drop, fill-in-the-blank, hot spot (selecting an area of a graphic), drop-down, and the short-answer/extended response, and the calculator (TI-30XS) is embedded in the software for the subjects that use it. There is no penalty for wrong answers, so answer everything. The samples below are editor-written illustrations of the published item styles, not live exam items.',
    types: [
      { name: 'Multiple choice', share: 'The dominant format on every subtest', detail: 'A stem with one correct answer; the science and social studies versions are largely reading comprehension over content.' },
      { name: 'Fill-in-the-blank and drop-down', share: 'Common on Mathematical Reasoning', detail: 'Type or select the correct number or phrase; scoring is exact, so transcription errors cost the item.' },
      { name: 'Hot spot', share: 'Occasional on science and social studies', detail: 'Select a region of a graphic, table, or chart in response to the question.' },
      { name: 'Drag-and-drop', share: 'Common on science and social studies', detail: 'Move items into a sequence or category; scoring is all-or-nothing for the arrangement.' },
      { name: 'Extended response', share: 'Part of Reasoning Through Language Arts', detail: 'A scored essay on a given prompt; practising the structure prevents a pacing failure on the subtest.' }
    ],
    samples: [
      {
        prompt: 'A town\u2019s population grew from 10,000 in 2010 to 12,000 in 2020. What was the percentage increase over the decade?',
        options: ['A. 12 percent', 'B. 20 percent', 'C. 2 percent', 'D. 22 percent'],
        answer: 'B',
        explanation: 'Percentage change is the change divided by the original value: (12,000 - 10,000) / 10,000 = 2,000 / 10,000 = 0.20 = 20 percent. A confuses the new total with the change, C drops a zero from the arithmetic, and D adds the growth rate to the original 10 percent denominator incorrectly.'
      },
      {
        prompt: 'The science subtest presents a bar chart of rainfall by month. A question asks which month had the highest rainfall. The best strategy is to:',
        options: ['A. Estimate from memory without looking at the chart', 'B. Read the tallest bar on the chart and confirm its month label', 'C. Average all twelve bars', 'D. Guess, since charts cannot be measured'],
        answer: 'B',
        explanation: 'The science subtest rewards extracting information directly from the presented graphic. The tallest bar represents the highest value, so locating it and reading its label answers the question. A ignores the evidence provided, C answers a different question, and D is false — charts are precisely the data source the question expects you to use.'
      },
      {
        prompt: 'For the Reasoning Through Language Arts extended response, the strongest essay will:',
        options: ['A. State a clear position and support it with evidence from the provided passages', 'B. Restate the prompt and stop', 'C. Offer only personal opinion with no reference to the passages', 'D. Summarise both passages without taking a position'],
        answer: 'A',
        explanation: 'The RLA extended response is scored on building an argument: a clear claim, evidence from the provided source texts, and organised reasoning. A does exactly that. B provides no argument, C ignores the evidence the task supplies, and D summarises without analysing, which cannot earn a developed-response score.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published item styles, not live exam items.'
  },
  examDay: {
    summary: 'The GED is taken on a computer at an authorised Pearson VUE test centre or, in participating states, online with remote proctoring, and the four subtests can be scheduled on separate days. Each subtest is scored 100-200 with 145 passing, and you receive your score at the end of each sitting. The two things that go wrong most often are paperwork and pacing: candidates either arrive without the photo ID and age-waiver documents their state requires, or they run out of time on the RLA extended response and the math subtest. Build your day around confirming your booking, bringing a valid unexpired government-issued photo ID, and budgeting time — roughly 150 minutes for RLA, 115 for math, 90 for science, and 70 for social studies. On the math subtest, the first questions are answered without a calculator and the TI-30XS is embedded in the software for the rest, so do not bring your own. On a pass, your credential is issued by your state; on a fail, you can retake the single failed subtest, with no waiting before your third attempt and a 60-day wait after three attempts on the same subject. Scores are available quickly, typically at the end of each subtest sitting.',
    bring: ['Valid, unexpired government-issued photo ID (name must match your GED.com account)', 'Confirmation of your booking and any state-required age-waiver approval', 'Corrective lenses if you need them for reading the screen', 'Water and a snack for between subtests (per test centre policy)'],
    leave: ['Phones, smartwatches, and earbuds — stored before entering the testing area', 'Notes, study materials, and your own calculator (the TI-30XS is embedded in the software)', 'Bags and coats beyond what the centre permits'],
    timeline: [
      { time: 'The week before', detail: 'Confirm your booking, your state\u2019s fee and ID requirements, and any age waiver; retake GED Ready on any subject that sits near 145.' },
      { time: 'Day before', detail: 'Re-run a timed practice subtest for the subject you are sitting; confirm the test centre address and check-in time.' },
      { time: 'At the centre', detail: 'Check in with photo ID, secure your belongings, and proceed to the assigned workstation.' },
      { time: 'During the subtest', detail: 'Work the quick items first and answer everything — there is no guessing penalty; on RLA, reserve time for the extended response.' },
      { time: 'At the end', detail: 'Your score appears when the subtest ends; on a pass you are one step closer to the credential, on a fail you may retake promptly.' }
    ],
    rules: ['Four computer-based subtests, scored 100-200 with 145 passing', 'Subtests can be scheduled on separate days', 'Calculator is embedded in the software; a non-calculator section opens the math subtest', 'No penalty for wrong answers', 'No waiting period before the third attempt on a subject; 60-day wait after three attempts', 'Valid government-issued photo ID required, matching your GED.com account'],
    afterwards: 'On a pass of all four subtests, your state issues the high school equivalency credential, and GED Testing Service offers the transcript and diploma ordering through your MyGED account. On a fail of a single subject, retake it promptly — the no-wait rule before your third attempt makes the credential a persistence problem more than a knowledge one. Use the GED College Ready (165-174) and College Ready + Credit (175-200) score bands when you talk to colleges, since some award placement or credit on those bands.'
  }
};

export default data;
