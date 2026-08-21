// Depth content for: ap-united-states-history
// AP exam structure and score data come from College Board official pages.
// Education-return wage data come from BLS series named by code.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'College admissions & AP assessments desk',
    bio: 'AP exam structure and score data come from the College Board official pages and are revised with each exam cycle. Wage and education data come from the BLS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the AP United States History exam structure, digital Bluebook delivery, and published 2024 score distribution against College Board official pages; education-return context against BLS.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'No direct occupation — AP U.S. History scores earn college credit and strengthen admissions, and the payoff is the degree-completion premium: bachelor\u2019s-degree holders earned a median of $1,493/week vs $899 for high-school-only workers (BLS, 2023)',
    summary:
      'The direct answer is that the AP United States History exam has no BLS occupation of its own — it is a college-level assessment whose scores can earn college credit and strengthen admission applications — so the salary story is the education-return premium that AP credit accelerates. The relevant reference points from BLS: the May 2024 median wage across all occupations was $49,500; workers with a bachelor\u2019s degree earned a median weekly wage of about $1,493 in 2023, versus about $899 for workers with only a high school diploma; and associate-degree holders sat between them at about $1,059. A score of 3 or higher on an AP exam is accepted for credit by the vast majority of four-year colleges, which can shorten time-to-degree and reduce tuition — the practical financial value of AP U.S. History is the credit hours it buys and the admissions signal it sends. AP U.S. History is one of the most-taken AP exams in the country, with hundreds of thousands of administrations each year, and its skills — reading primary and secondary sources, weighing evidence, constructing a written argument under time pressure — transfer directly to college humanities and social-science courses and to careers in law, government, journalism, and education, occupations whose earnings are generally above the all-occupation median, though no single BLS code corresponds to the exam. The honest framing is that AP\u2019s value is twofold: the admissions signal colleges reward for demonstrated college-level rigor, and the credit each qualifying score earns, often replacing a 3-credit introductory survey course. For students deciding whether to take the exam, the investment is the exam fee and preparation time, and the payoff is measured in credits, admissions advantage, and the analytical writing skills that carry into college and career.',
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
    headline: 'College Board publishes annual score distributions — about 72% of AP U.S. History candidates scored 3 or higher in 2024, and the exam is scored 1-5 with 3 considered qualifying at most colleges',
    summary:
      'The core fact is that AP score data is published: the College Board reports annual score distributions for every AP subject, and the 2024 administration of AP United States History saw roughly 72 percent of candidates score 3 or higher, with about 13 percent scoring 5, 33 percent scoring 4, and 26 percent scoring 3. The exam is scored on a 1-5 scale, and a score of 3 or higher is considered "qualified" and accepted for credit by the majority of four-year institutions, though each college sets its own credit and placement policy — many require a 4 or 5, and credit amounts vary. The exam itself is 3 hours 15 minutes, delivered fully digital in the College Board Bluebook app: Section I Part A has 55 multiple-choice questions in 55 minutes (40 percent), Section I Part B has 3 short-answer questions in 40 minutes (20 percent), and Section II has the document-based question (DBQ) in 60 minutes including a 15-minute reading period (25 percent) plus the long essay in 40 minutes (15 percent). The published distributions are useful for planning: candidates who complete the AP course and a structured review with full-length timed practice sit within the range of the published qualifying rates. The honest advice is to treat the written sections as the differentiator — the DBQ and long essay together carry 40 percent of the score, and candidates who practise building evidence-based arguments from primary and secondary sources outperform those who focus on multiple choice alone. Exams are offered once per year in May, and scores arrive in July.',
    source: { label: 'College Board — AP United States History', url: 'https://apcentral.collegeboard.org/courses/ap-united-states-history' },
    caveat: 'College Board publishes annual score distributions; the figures above are the 2024 administration and change each year.'
  },
  studyPlan: {
    summary: 'Plan for 8 to 12 weeks and 60 to 100 hours of study if the exam is outside an AP course, or a 4-to-6-week structured review if you are taking the AP course, weighted to the DBQ and long essay — they carry 40 percent of the score. The exam is 3 hours 15 minutes, fully digital in the Bluebook app: 55 multiple-choice questions in 55 minutes (40 percent), 3 short-answer questions in 40 minutes (20 percent), the document-based question in 60 minutes including a 15-minute reading period (25 percent), and one long essay in 40 minutes (15 percent). The most effective sequence is: first, take a full-length practice exam to baseline; second, master source analysis — reading primary and secondary texts, images, charts, and maps for point of view, purpose, and reliability; third, drill the DBQ structure, since it is the single highest-weighted item on the paper; fourth, practise the long essay with the three-option choice and the 40-minute clock; and fifth, take two more full-length timed practice exams in the final two weeks. The highest-yield habit is timed DBQ practice: the rubric rewards a clear thesis, the use of at least six of the seven documents as evidence, an additional outside piece of evidence, and sustained sourcing analysis. Budget the written sections the most time, because candidates who rehearse them score measurably higher. Note that the College Board has announced an update to the short-answer and long-essay questions of the AP history exams starting with the May 2027 administration — the course content will not change, but the question formats will, so confirm the blueprint for your exam year. The exam is offered once per year in May, so plan the review backward from the exam date and confirm your target colleges\u2019 credit policies so you know the score you need.',
    totalHours: '60-100 study hours over 8-12 weeks (or 4-6 week review after the AP course)',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Baseline + source analysis', tasks: ['Take a full-length practice exam', 'Master reading primary and secondary sources for point of view and purpose', 'Log weak time periods by unit'], hours: 20 },
      { label: 'Weeks 3-5', focus: 'Chronological content sweep', tasks: ['Work the nine course units from 1491 to the present in order', 'Build a timeline of themes: identity, work and exchange, politics, migration', 'Learn the document-based question rubric and practise one DBQ per week'], hours: 35 },
      { label: 'Weeks 6-8', focus: 'DBQ and long essay mastery', tasks: ['Drill the DBQ: thesis, six-document use, outside evidence, sourcing analysis', 'Practise the long essay with the 3-option choice under 40-minute timing', 'Review scoring guidelines and Chief Reader feedback'], hours: 30 },
      { label: 'Weeks 9-10', focus: 'Timed full exams', tasks: ['Take two full-length 3h15m practice exams in the Bluebook-style interface', 'Re-study only the units and question types where you missed points', 'Taper with light review of rubrics and essay planning'], hours: 15 }
    ],
    variants: [
      { label: 'AP World History: Modern', detail: 'The parallel world-history exam with the identical 3h15m structure (55 MC, 3 SAQs, DBQ, LEQ), covering developments from c. 1200 to the present.' },
      { label: 'College credit policies', detail: 'Each college sets its own AP credit and placement policy; check your target schools\u2019 published AP charts.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably moves AP U.S. History scores is "weight the two essays, master source analysis, and run full-length timed exams," and the single biggest error is memorising facts while the written sections carry 40 percent of the score. A second proven approach is learning the published rubrics for the document-based question and the long essay: the DBQ rewards a clear thesis, use of the documents as evidence, at least one outside piece of evidence, and sustained sourcing analysis of point of view or purpose, while the long essay rewards a defensible thesis supported by concrete historical evidence. Third, practise reading sources actively — when you meet a primary or secondary text, an image, a chart, or a map, name who produced it, why, and what it can and cannot tell you, because the multiple-choice section is built around exactly that skill. Fourth, use the full-length practice exam as the calibration tool: the 3-hour-15-minute format is a stamina test, and practice scores are the honest readiness signal. Fifth, master the pacing: roughly a minute per multiple-choice question, about 13 minutes per short answer, 60 minutes for the DBQ (including the 15-minute reading period), and 40 minutes for the long essay. Finally, confirm your target colleges\u2019 credit policies early so you know whether you need a 3, 4, or 5, and remember that candidates who practise writing full essays from blank are the ones who finish both essays with developed arguments.',
    items: [
      { title: 'Weight the DBQ and long essay', detail: 'The written sections carry 40 percent of the score; drill both essay formats every week.' },
      { title: 'Learn the published rubrics', detail: 'The DBQ rubric rewards thesis, document use, outside evidence, and sourcing analysis; the LEQ rewards a defensible thesis with concrete evidence.' },
      { title: 'Read sources actively', detail: 'Name the producer, purpose, and limits of every primary and secondary source you meet — that is the multiple-choice skill.' },
      { title: 'Run full-length timed exams', detail: 'The 3h15m format is a stamina test; rehearse it at least twice in the final weeks.' },
      { title: 'Master essay pacing', detail: '60 minutes on the DBQ including reading time, 40 minutes on the long essay; finish both.' },
      { title: 'Know your credit target', detail: 'Some colleges require a 4 or 5 for credit; confirm your target schools\u2019 AP charts before the exam.' }
    ]
  },
  resourceComparison: {
    summary: 'AP U.S. History preparation is dominated by free official resources — the College Board exam page, the Course and Exam Description, past free-response questions with scoring guidelines, and released stimulus material — with the exam fee (about $98, with fee reductions available for qualifying students) as the main cost. The comparison below separates official and commercial resources, with prices current to this review. The buying rule is to use the free official resources first, especially the released DBQs and their scoring guidelines, and treat commercial review books as structured supplements for chronological content rather than as the syllabus itself.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'College Board exam page & Course and Exam Description', values: ['Free', 'Official PDFs and sample questions', 'The authoritative syllabus and rubric definitions'] },
      { label: 'College Board past free-response questions & scoring guidelines', values: ['Free', 'PDF archive', 'DBQ and long-essay practice with official scoring'] },
      { label: 'AP exam registration', values: ['~$98', 'May exam administration', 'The exam itself'] },
      { label: 'Review books (e.g. AMSCO, Princeton Review, Barron\u2019s)', values: ['~$20-35', 'Printed book + online', 'Chronological content review and drill sets'] },
      { label: 'Full-length practice exams', values: ['~$10-40', 'Online or book', 'Format calibration under real timing'] },
      { label: 'Heimler\u2019s History or similar video reviews', values: ['Free tier; ~$20-30 for courses', 'Video + downloadable notes', 'Unit-by-unit review near the exam'] }
    ],
    footnote: 'Prices approximate and dated to this review (2026-08); the exam is offered once per year in May, with fee reductions available for qualifying students. The College Board has announced updates to the short-answer and long-essay formats starting May 2027.'
  },
  commonMistakes: {
    summary: 'The most common mistake is memorising names and dates while the DBQ and long essay carry 40 percent of the score; the second is writing essays without practising the published rubrics, losing points on thesis and evidence requirements. A third recurring error is mismanaging the 3-hour-15-minute clock — spending the whole DBQ time on reading and running out of writing time, or rushing the long essay. Candidates also routinely use documents without sourcing them, treating the DBQ as a summary exercise rather than an argument, and many skip the full-length practice exams and fail on stamina. Finally, some students ignore their target colleges\u2019 credit policies and aim for a 3 when their schools require a 4 or 5.',
    items: [
      { mistake: 'Memorising facts instead of practising writing', fix: 'The DBQ and long essay carry 40 percent of the score; weight practice accordingly.' },
      { mistake: 'Writing essays without the rubrics', fix: 'Learn what each rubric rewards: thesis, document use, outside evidence, and sourcing analysis.' },
      { mistake: 'Poor essay pacing', fix: '60 minutes for the DBQ including the reading period, 40 minutes for the long essay; finish both.' },
      { mistake: 'Using documents without sourcing them', fix: 'In the DBQ, analyse point of view, purpose, and limits rather than merely citing the documents.' },
      { mistake: 'Skipping full-length practice exams', fix: 'The 3h15m format is a stamina test; take at least two timed full exams.' },
      { mistake: 'Ignoring college credit policies', fix: 'Check target schools; some require 4 or 5 for credit or award more credits for higher scores.' }
    ]
  },
  questionTypes: {
    summary: 'The AP United States History exam is 3 hours 15 minutes, delivered fully digital in the College Board Bluebook app, and scored on the 1-5 scale with 3 considered qualifying at most colleges. Section I Part A is 55 multiple-choice questions in 55 minutes (40 percent), mostly grouped in sets of 3-4 questions built around a primary or secondary source, an image, a chart, or a map; Section I Part B is 3 short-answer questions in 40 minutes (20 percent) asking for brief written analysis of sources or general propositions; and Section II (40 percent) is the document-based question in 60 minutes including a 15-minute reading period (25 percent) plus one long essay in 40 minutes (15 percent), chosen from three options. The samples below are editor-written illustrations of the published question styles, not live exam items. Because the exam is fully digital, every section is answered in the Bluebook app, and there is no penalty for wrong answers on the multiple-choice questions, so answer everything.',
    types: [
      { name: 'Multiple choice, source sets', share: '40%', detail: 'Sets of 3-4 questions tied to a primary or secondary text, image, chart, or map; rewards analysis of point of view, purpose, and historical context.' },
      { name: 'Short-answer questions (SAQs)', share: '20%', detail: 'Three brief written responses, often source-based; the first two are required and the third is chosen from two options.' },
      { name: 'Document-based question (DBQ)', share: '25%', detail: 'A 60-minute essay built on seven documents; rewarded for thesis, six-document use, one outside piece of evidence, and sourcing analysis.' },
      { name: 'Long essay (LEQ)', share: '15%', detail: 'A 40-minute essay chosen from three options on a common reasoning process; rewarded for a defensible thesis and concrete evidence.' }
    ],
    samples: [
      {
        prompt: 'An AP U.S. History multiple-choice set includes a political cartoon from the 1890s and a contemporary editorial. Which analytical move best demonstrates historical reasoning about both sources together?',
        options: ['A. Listing every person and symbol in the cartoon', 'B. Comparing the point of view of each source and explaining how context shapes it', 'C. Judging which source is "more correct" about the facts', 'D. Summarising both sources without connecting them'],
        answer: 'B',
        explanation: 'The multiple-choice section rewards historical thinking skills: placing sources in context, identifying point of view, and making connections. B is the only option that analyses both sources analytically. A is description, C imports a modern judgment the exam does not reward, and D is summary, which earns no credit for analysis.'
      },
      {
        prompt: 'In the document-based question, which of the following earns credit for "sourcing" a document?',
        options: ['A. Quoting a long passage from the document', 'B. Identifying the document\u2019s author, point of view, purpose, or historical context', 'C. Noting the document exists without using it', 'D. Summarising the document in your own words'],
        answer: 'B',
        explanation: 'The DBQ rubric awards a sourcing point for explaining the significance of a document\u2019s point of view, purpose, audience, or historical context. B names the move directly. A is quotation without analysis, C is unused evidence, and D is summary, which helps build an argument but does not itself earn the sourcing point.'
      },
      {
        prompt: 'A long-essay prompt asks you to explain the causes of the Civil War. The strongest thesis would:',
        options: ['A. List every cause you can remember', 'B. Present a defensible claim and preview the categories of evidence you will use', 'C. State that historians disagree without taking a position', 'D. Focus on a single anecdote and end there'],
        answer: 'B',
        explanation: 'The long-essay rubric rewards a defensible thesis that responds to the prompt and is supported with specific evidence. B builds the roadmap the rubric wants. A is a list without an argument, C avoids the claim the prompt demands, and D provides too little scope for a 40-minute essay.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published question styles, not live exam items.'
  },
  examDay: {
    summary: 'The AP United States History exam is administered once per year in May and is now fully digital, delivered in the College Board Bluebook app, either on a school-issued device at your school or through the digital administration process. The total time is 3 hours 15 minutes, split into Section I Part A (55 multiple-choice questions in 55 minutes), Section I Part B (3 short-answer questions in 40 minutes), and Section II (the DBQ in 60 minutes including a 15-minute reading period, plus the long essay in 40 minutes), with a short break between the sections. The core rules: bring a photo ID and your admission ticket; a calculator is not needed for this exam. Scores are released in July on the 1-5 scale, and you will see your score in your College Board account. The most useful exam-day habits: pace the multiple choice at about a minute per question, spend about 13 minutes per short answer, give the DBQ the full hour including planning and reading time, and hold the long essay to 40 minutes — the two essay sections are where the highest-scoring candidates separate themselves. If you are aiming for credit, confirm your target schools\u2019 policies before the exam so you know the score you need, and note that AP scores can be sent to colleges through your College Board account after the July release.',
    bring: ['Photo ID', 'Admission ticket', 'A charged school-issued device with the Bluebook app installed (per your school\u2019s digital administration policy)', 'Water and snacks for the break (per school policy)'],
    leave: ['Phone and smartwatch (per testing rules)', 'Study materials (not allowed in the testing room)'],
    timeline: [
      { time: 'Section I, Part A (55 min)', detail: '55 multiple-choice questions, mostly in sets built around sources.' },
      { time: 'Section I, Part B (40 min)', detail: '3 short-answer questions; the third is chosen from two options.' },
      { time: 'Break', detail: 'A short break between the sections.' },
      { time: 'Section II (1h40m)', detail: 'The DBQ (60 min including a 15-minute reading period) and the long essay (40 min).' },
      { time: 'July', detail: 'Scores released on the 1-5 scale in your College Board account.' }
    ],
    rules: ['Once per year in May', '3 hours 15 minutes total', 'Fully digital in the College Board Bluebook app', 'Scored 1-5; 3 considered qualifying at most colleges', 'No penalty for wrong answers on multiple choice'],
    afterwards: 'Your AP score can earn college credit and strengthen applications; send scores to colleges through your College Board account after the July release. Note that the short-answer and long-essay formats of the AP history exams are being updated starting with the May 2027 administration.'
  }
};

export default data;
