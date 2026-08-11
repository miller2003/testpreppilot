// Depth content for: ap-english-literature-and-composition
// AP exam structure and score data come from College Board official pages.
// Education-return wage data come from BLS series named by code.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'College admissions & AP assessments desk',
    bio: 'AP exam structure and score data come from the College Board official pages and are revised with each exam cycle. Wage and education data come from the BLS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the AP English Literature and Composition exam structure, digital Bluebook delivery, and published 2024 score distribution against College Board official pages; education-return context against BLS.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'No direct occupation — AP English Literature scores earn college credit and strengthen admissions, and the payoff is the degree-completion premium: bachelor\u2019s-degree holders earned a median of $1,493/week vs $899 for high-school-only workers (BLS, 2023)',
    summary:
      'The direct answer is that the AP English Literature and Composition exam has no BLS occupation of its own — it is a college-level assessment whose scores can earn college credit and strengthen admission applications — so the salary story is the education-return premium that AP credit accelerates. The relevant reference points from BLS: the May 2024 median wage across all occupations was $49,500; workers with a bachelor\u2019s degree earned a median weekly wage of about $1,493 in 2023, versus about $899 for workers with only a high school diploma; and associate-degree holders sat between them at about $1,059. A score of 3 or higher on an AP exam is accepted for credit by the vast majority of four-year colleges, which can shorten time-to-degree and reduce tuition — the practical financial value of AP English Literature is the credit hours it buys and the admissions signal it sends. AP English Literature is one of the most-taken AP exams in the country, with hundreds of thousands of administrations each year, and its skills — close reading of fiction, poetry, and drama, building a textually supported interpretation, and writing an analytical essay under a deadline — transfer directly to college humanities courses and to careers in writing, law, publishing, teaching, and communications, occupations with above-median earnings, though no single BLS code corresponds to the exam. The honest framing is that AP\u2019s value is twofold: the admissions signal colleges reward for demonstrated college-level rigor, and the credit each qualifying score earns, often replacing a 3-credit literature or composition course. For students deciding whether to take the exam, the investment is the exam fee and preparation time, and the payoff is measured in credits, admissions advantage, and the analytical writing skills that transfer to college and career.',
    rows: [
      { label: 'Reference: median wage, all occupations', value: '$49,500', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Reference: bachelor\u2019s degree, median weekly earnings', value: '$1,493', note: 'BLS Education Pays, 2023 ($77,636/yr equivalent)' },
      { label: 'Reference: high school diploma only, median weekly earnings', value: '$899', note: 'BLS Education Pays, 2023' },
      { label: 'Reference: associate degree, median weekly earnings', value: '$1,059', note: 'BLS Education Pays, 2023 ($55,068/yr equivalent)' },
      { label: 'The exam itself', value: 'No direct occupation', note: 'A college-level credit exam, not a credential of record' }
    ],
    growth: 'BLS does not project growth for an AP exam; relevant projections follow the occupations the skills feed into.',
    source: { label: 'BLS Education Pays', url: 'https://www.bls.gov/emp/chart-unemployment-earnings-education.htm' }
  },
  passRate: {
    headline: 'College Board publishes annual score distributions — about 72% of AP English Literature candidates scored 3 or higher in 2024, and the exam is scored 1-5 with 3 considered qualifying at most colleges',
    summary:
      'The core fact is that AP score data is published: the College Board reports annual score distributions for every AP subject, and the 2024 administration of AP English Literature and Composition saw roughly 72 percent of candidates score 3 or higher, with about 13 percent scoring 5, 27 percent scoring 4, and 32 percent scoring 3. The exam is scored on a 1-5 scale, and a score of 3 or higher is considered "qualified" and accepted for credit by the majority of four-year institutions, though each college sets its own credit and placement policy — many require a 4 or 5, and credit amounts vary. The exam itself is 3 hours, delivered fully digital in the College Board Bluebook app: Section I has 55 multiple-choice questions in 1 hour (45 percent), built around five sets of 8-13 questions tied to passages of prose fiction, drama, or poetry, and Section II has 3 free-response essays in 2 hours (55 percent) — a poetry analysis, a prose fiction analysis, and a literary argument in which you choose a work to write about. The published distributions are useful for planning: candidates who complete the AP course and a structured review with full-length timed practice sit within the range of the published qualifying rates. The honest advice is to treat the essays as the differentiator — they carry 55 percent of the score, and candidates who practise the three essay formats with the published analytic rubrics outperform those who focus on multiple choice alone. Exams are offered once per year in May, and scores arrive in July.',
    source: { label: 'College Board — AP English Literature and Composition', url: 'https://apcentral.collegeboard.org/courses/ap-english-literature-and-composition' },
    caveat: 'College Board publishes annual score distributions; the figures above are the 2024 administration and change each year.'
  },
  studyPlan: {
    summary: 'Plan for 8 to 12 weeks and 60 to 100 hours of study if the exam is outside an AP course, or a 4-to-6-week structured review if you are taking the AP course, weighted to the three essays — they carry 55 percent of the score. The exam is 3 hours, delivered fully digital in the Bluebook app: 55 multiple-choice questions in 1 hour (45 percent) and 3 essays in 2 hours (55 percent): a poetry analysis, a prose fiction analysis, and a literary argument in which you choose a work from the published list or your own reading. The most effective sequence is: first, take a full-length practice exam to baseline; second, master the multiple-choice analysis skills — identifying how characters, setting, structure, narration, word choice, imagery, and symbolism create meaning across prose, drama, and poetry; third, drill the three essay formats, since the essays carry the majority of the score and are scored with analytic rubrics rather than the old holistic ones; fourth, practise the 40-minute essay pacing and essay planning; and fifth, take two more full-length timed practice exams in the final two weeks. The highest-yield habit is timed essay practice: the poetry analysis rewards a thesis that presents an interpretation backed by textual evidence, the prose analysis does the same for a fiction passage, and the literary argument rewards selecting an appropriate work and building an evidence-based analysis of the given concept. Budget the essays the most time, since candidates who practise them score measurably higher. The exam is offered once per year in May, so plan the review backward from the exam date and confirm your target colleges\u2019 credit policies so you know the score you need.',
    totalHours: '60-100 study hours over 8-12 weeks (or 4-6 week review after the AP course)',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Baseline + close reading', tasks: ['Take a full-length practice exam', 'Master multiple-choice close reading across prose, drama, and poetry', 'Log weak question types'], hours: 20 },
      { label: 'Weeks 3-6', focus: 'Essay formats', tasks: ['Drill the poetry analysis essay', 'Practise the prose fiction analysis essay', 'Build a list of literary works for the literary argument essay'], hours: 40 },
      { label: 'Weeks 7-10', focus: 'Timed practice', tasks: ['Take two full-length practice exams', 'Re-study weak areas and question types', 'Practise 40-minute essay pacing and planning'], hours: 30 },
      { label: 'Final weeks', focus: 'Taper', tasks: ['Light review of rubrics and close-reading skills', 'Confirm exam logistics and device readiness', 'Rest'], hours: 10 }
    ],
    variants: [
      { label: 'AP English Language & Composition', detail: 'The rhetoric-and-nonfiction sibling exam, focusing on argument and rhetorical analysis rather than literary interpretation.' },
      { label: 'College credit policies', detail: 'Each college sets its own AP credit and placement policy; check your target schools\u2019 published AP charts.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably moves AP English Literature scores is "weight the three essays, practise close reading, and run full-length timed exams," and the single biggest error is focusing on multiple choice while the essays carry 55 percent of the score. A second proven approach is learning the three essay formats with the published analytic rubrics: the poetry analysis rewards a thesis that presents a poetic interpretation backed by textual evidence, the prose analysis does the same for a passage of fiction, and the literary argument rewards choosing an appropriate work and building an evidence-based analysis of the given concept. Third, practise close reading deliberately — as you read, name how the narrator or speaker, word choice, imagery, symbolism, and structure create meaning, because the multiple-choice section and both analysis essays reward exactly that skill. Fourth, use the full-length practice exam as the calibration tool: the 3-hour format is a stamina test, and practice scores are the honest readiness signal. Fifth, master the pacing: roughly a minute per multiple-choice question and about 40 minutes per essay, with a few minutes of planning built into each. Finally, prepare a short list of substantial literary works you know deeply for the literary argument essay, and confirm your target colleges\u2019 credit policies early so you know whether you need a 3, 4, or 5.',
    items: [
      { title: 'Weight the three essays', detail: 'The free-response section carries 55 percent of the score; drill all three formats.' },
      { title: 'Learn the analytic rubrics', detail: 'The poetry analysis, prose analysis, and literary argument rubrics define what earns points.' },
      { title: 'Practise close reading', detail: 'Name how narrator, word choice, imagery, symbolism, and structure create meaning as you read.' },
      { title: 'Build your literary argument list', detail: 'Know a handful of substantial works deeply so you can handle the open essay promptly.' },
      { title: 'Run full-length timed exams', detail: 'The 3-hour format is a stamina test; rehearse it at least twice.' },
      { title: 'Master the 40-minute essay pace', detail: 'Finish all three essays with developed arguments; plan for a few minutes before writing.' }
    ]
  },
  resourceComparison: {
    summary: 'AP English Literature preparation is dominated by free official resources — the College Board exam page, the Course and Exam Description, sample questions, past free-response questions with scoring guidelines, and the published list of works for the literary argument — with the exam fee (about $98, with fee reductions available for qualifying students) as the main cost. The comparison below separates official and commercial resources, with prices current to this review. The buying rule is to use the free official resources first, and treat commercial review books as structured supplements; for the literary argument essay, the best "resource" is the list of works you have actually read closely in your AP course.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'College Board exam page & Course and Exam Description', values: ['Free', 'Official PDFs and sample questions', 'The authoritative syllabus'] },
      { label: 'College Board past free-response questions & scoring guidelines', values: ['Free', 'PDF archive', 'Essay-format practice with official rubrics'] },
      { label: 'AP exam registration', values: ['~$98', 'May exam administration', 'The exam itself'] },
      { label: 'Review books (e.g. Princeton Review, Barron\u2019s)', values: ['~$20-35', 'Printed book + online', 'Structured review and close-reading practice'] },
      { label: 'Full-length practice exams', values: ['~$10-40', 'Online or book', 'Format calibration under real timing'] }
    ],
    footnote: 'Prices approximate and dated to this review (2026-08); the exam is offered once per year in May, with fee reductions available for qualifying students.'
  },
  commonMistakes: {
    summary: 'The most common mistake is focusing on multiple choice while the essays carry 55 percent of the score; the second is writing essays without practising the published analytic rubrics, losing points on thesis and evidence requirements. A third recurring error is mismanaging the 2-hour essay section — spending too long on the first essay and rushing the literary argument. Candidates also routinely write interpretations without tying them to textual evidence, and many choose a work for the literary argument that they remember vaguely rather than one they know deeply. Finally, many skip the full-length practice exams and fail on stamina, and some ignore their target colleges\u2019 credit policies and aim for a 3 when their schools require a 4 or 5.',
    items: [
      { mistake: 'Multiple-choice focus', fix: 'The essays carry 55 percent of the score; weight practice accordingly.' },
      { mistake: 'Writing without the rubrics', fix: 'Learn what each analytic rubric rewards: thesis, textual evidence, and interpretation.' },
      { mistake: 'Poor essay pacing', fix: 'Practise 40 minutes per essay; finish all three.' },
      { mistake: 'Interpretation without evidence', fix: 'Anchor every claim about meaning to specific textual evidence.' },
      { mistake: 'Choosing a work you barely remember', fix: 'Build a short list of substantial works you have read closely and can analyse from memory.' },
      { mistake: 'Ignoring college credit policies', fix: 'Check target schools; some require 4 or 5 for credit.' }
    ]
  },
  questionTypes: {
    summary: 'The AP English Literature and Composition exam is 3 hours, delivered fully digital in the College Board Bluebook app, and scored on the 1-5 scale with 3 considered qualifying at most colleges. Section I is 55 multiple-choice questions in 1 hour (45 percent), built around five sets of 8-13 questions, each set tied to a passage of prose fiction, drama, or poetry — the section always includes at least 2 prose fiction passages (which may include drama) and at least 2 poetry passages. Section II is 3 free-response essays in 2 hours (55 percent): a poetry analysis, a prose fiction analysis, and a literary argument in which you select a work from the published list or your own reading. The essays are scored with analytic rubrics, and there is no penalty for wrong answers on the multiple-choice section, so answer everything. The samples below are editor-written illustrations of the published question styles, not live exam items.',
    types: [
      { name: 'Multiple choice: prose and drama passages', share: '~23%', detail: 'Sets of questions tied to a prose fiction or drama passage; rewards analysis of narration, character, structure, and word choice.' },
      { name: 'Multiple choice: poetry passages', share: '~22%', detail: 'Sets of questions tied to a poem; rewards analysis of speaker, imagery, symbolism, form, and sound.' },
      { name: 'Poetry analysis essay', share: '~18%', detail: 'A thesis-driven interpretation of a given poem backed by textual evidence.' },
      { name: 'Prose fiction analysis essay', share: '~18%', detail: 'A thesis-driven interpretation of a given prose passage backed by textual evidence.' },
      { name: 'Literary argument essay', share: '~18%', detail: 'An analysis of a given concept applied to a literary work the student selects.' }
    ],
    samples: [
      {
        prompt: 'When analysing a poem for the poetry analysis essay, the strongest thesis would:',
        options: ['A. Restate the poem\u2019s plot in your own words', 'B. Present a defensible interpretation of the poem\u2019s meaning and preview the poetic techniques you will examine', 'C. Judge whether the poem is good or bad', 'D. Focus on the poet\u2019s biography'],
        answer: 'B',
        explanation: 'The poetry analysis rubric rewards a thesis that presents a poetic interpretation and is supported by analysis of the poem\u2019s techniques and textual evidence. B does both. A is summary, which earns no interpretation credit; C imports a value judgment the rubric does not reward; and D substitutes biography for the close reading the prompt demands.'
      },
      {
        prompt: 'A multiple-choice question asks how the phrase "as if carved from oak" affects the description of a character. The best answer identifies that it:',
        options: ['A. Adds a simile that conveys rigidity and endurance', 'B. Makes the character sound taller', 'C. Proves the character is made of wood', 'D. Adds nothing meaningful'],
        answer: 'A',
        explanation: 'The phrase "as if carved from oak" is a simile, and the exam rewards naming the literary technique and its effect — here, conveying rigidity, strength, or endurance. B is a literal misreading, C confuses figurative language with fact, and D denies the analytical work the question asks for.'
      },
      {
        prompt: 'For the literary argument essay, which of the following is the best basis for choosing a text?',
        options: ['A. A work you have read closely and can analyse in depth', 'B. The longest book you can think of', 'C. A plot summary you read online', 'D. Any work, since the content does not matter'],
        answer: 'A',
        explanation: 'The literary argument rewards selecting an appropriate work and building an evidence-based analysis of the given concept; the published list of roughly 40 works is a guide, and a general rule is to use a work similar in quality to those read in an AP course. A is the only option that describes deep knowledge. B optimises for length rather than suitability, C relies on summary rather than analysis, and D ignores that the work must support a real argument.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published question styles, not live exam items.'
  },
  examDay: {
    summary: 'The AP English Literature and Composition exam is administered once per year in May and is fully digital, delivered in the College Board Bluebook app on a school-issued device, with responses submitted automatically when time ends. The total time is 3 hours, split into Section I (55 multiple-choice questions in 1 hour) and Section II (3 essays in 2 hours), with a 10-minute scheduled break between the sections. The core rules: bring a photo ID and your admission ticket; no calculator is needed, and no outside texts or notes are permitted. Scores are released in July on the 1-5 scale, and you will see your score in your College Board account. The most useful exam-day habits: pace the multiple choice at about a minute per question and answer everything, since there is no guessing penalty; give the essay section its full 2 hours, roughly 40 minutes per essay with a few minutes of planning before each; and make sure every essay has a clear thesis tied to textual evidence, because the analytic rubrics reward that structure. If you are aiming for credit, confirm your target schools\u2019 policies before the exam so you know the score you need, and note that AP scores can be sent to colleges through your College Board account after the July release.',
    bring: ['Photo ID', 'Admission ticket', 'A charged school-issued device with the Bluebook app installed (per your school\u2019s digital administration policy)', 'Water and snacks for the break (per school policy)'],
    leave: ['Phone and smartwatch (per testing rules)', 'Study materials and notes (not allowed in the testing room)', 'Outside books or texts (the exam provides all passages)'],
    timeline: [
      { time: 'Section I (60 min)', detail: '55 multiple-choice questions on prose, drama, and poetry passages.' },
      { time: 'Break (10 min)', detail: 'A scheduled 10-minute break between the sections.' },
      { time: 'Section II (2h)', detail: 'Three essays: poetry analysis, prose fiction analysis, and literary argument.' },
      { time: 'July', detail: 'Scores released on the 1-5 scale in your College Board account.' }
    ],
    rules: ['Once per year in May', '3 hours total', 'Fully digital in the College Board Bluebook app', 'Scored 1-5; 3 considered qualifying at most colleges', 'No penalty for wrong answers on multiple choice', 'Essays scored with analytic rubrics'],
    afterwards: 'Your AP score can earn college credit and strengthen applications; send scores to colleges through your College Board account after the July release. If you plan a retake, practise with current-format digital material, since the exam moved fully to the Bluebook app in 2025.'
  }
};

export default data;
