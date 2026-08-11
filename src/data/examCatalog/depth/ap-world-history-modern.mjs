// Depth content for: ap-world-history-modern
// AP exam structure and score data come from College Board official pages.
// Education-return wage data come from BLS series named by code.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'College admissions & AP assessments desk',
    bio: 'AP exam structure and score data come from the College Board official pages and are revised with each exam cycle. Wage and education data come from the BLS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the AP World History: Modern exam structure, digital Bluebook delivery, and published 2024 score distribution against College Board official pages; education-return context against BLS.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'No direct occupation — AP World History: Modern scores earn college credit and strengthen admissions, and the payoff is the degree-completion premium: bachelor\u2019s-degree holders earned a median of $1,493/week vs $899 for high-school-only workers (BLS, 2023)',
    summary:
      'The direct answer is that the AP World History: Modern exam has no BLS occupation of its own — it is a college-level assessment whose scores can earn college credit and strengthen admission applications — so the salary story is the education-return premium that AP credit accelerates. The relevant reference points from BLS: the May 2024 median wage across all occupations was $49,500; workers with a bachelor\u2019s degree earned a median weekly wage of about $1,493 in 2023, versus about $899 for workers with only a high school diploma; and associate-degree holders sat between them at about $1,059. A score of 3 or higher on an AP exam is accepted for credit by the vast majority of four-year colleges, which can shorten time-to-degree and reduce tuition — the practical financial value of AP World History is the credit hours it buys and the admissions signal it sends. AP World History: Modern is one of the most-taken history APs, with roughly 350,000 administrations a year, and its skills — reading primary and secondary sources across cultures, tracing continuity and change over time, and constructing an evidence-based written argument — transfer directly to college humanities and social-science courses and to careers in law, government, journalism, international affairs, and education, occupations whose earnings are generally above the all-occupation median, though no single BLS code corresponds to the exam. The honest framing is that AP\u2019s value is twofold: the admissions signal colleges reward for demonstrated college-level rigor, and the credit each qualifying score earns, often replacing a 3-credit world-history or humanities survey course. For students deciding whether to take the exam, the investment is the exam fee and preparation time, and the payoff is measured in credits, admissions advantage, and the comparative-analysis skills that carry into college and career.',
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
    headline: 'College Board publishes annual score distributions — about 64% of AP World History: Modern candidates scored 3 or higher in 2024, and the exam is scored 1-5 with 3 considered qualifying at most colleges',
    summary:
      'The core fact is that AP score data is published: the College Board reports annual score distributions for every AP subject, and the 2024 administration of AP World History: Modern saw roughly 64 percent of candidates score 3 or higher, with about 12 percent scoring 5, 32 percent scoring 4, and about 20 percent scoring 3. The exam is scored on a 1-5 scale, and a score of 3 or higher is considered "qualified" and accepted for credit by the majority of four-year institutions, though each college sets its own credit and placement policy — many require a 4 or 5, and credit amounts vary. The exam itself is 3 hours 15 minutes, delivered fully digital in the College Board Bluebook app: Section I Part A has 55 multiple-choice questions in 55 minutes (40 percent), Section I Part B has 3 short-answer questions in 40 minutes (20 percent), and Section II has the document-based question (DBQ) in 60 minutes including a 15-minute reading period (25 percent) plus the long essay in 40 minutes (15 percent). The published distributions are useful for planning: candidates who complete the AP course and a structured review with full-length timed practice sit within the range of the published qualifying rates. The honest advice is to treat the written sections as the differentiator — the DBQ and long essay together carry 40 percent of the score, and candidates who practise building evidence-based arguments from documents and their own knowledge outperform those who focus on multiple choice alone. Exams are offered once per year in May, and scores arrive in July.',
    source: { label: 'College Board — AP World History: Modern', url: 'https://apcentral.collegeboard.org/courses/ap-world-history-modern' },
    caveat: 'College Board publishes annual score distributions; the figures above are the 2024 administration and change each year.'
  },
  studyPlan: {
    summary: 'Plan for 8 to 12 weeks and 60 to 100 hours of study if the exam is outside an AP course, or a 4-to-6-week structured review if you are taking the AP course, weighted to the DBQ and long essay — they carry 40 percent of the score. The exam is 3 hours 15 minutes, fully digital in the Bluebook app: 55 multiple-choice questions in 55 minutes (40 percent), 3 short-answer questions in 40 minutes (20 percent), the document-based question in 60 minutes including a 15-minute reading period (25 percent), and one long essay in 40 minutes (15 percent). The course covers developments from roughly 1200 CE to the present across nine units, organised around six themes — humans and the environment, cultural developments, governance, economic systems, social interactions, and technology and innovation — and the exam rewards tracing continuity and change and making comparisons across regions. The most effective sequence is: first, take a full-length practice exam to baseline; second, master source analysis of primary and secondary texts, images, charts, and maps; third, drill the DBQ structure, the highest-weighted single item; fourth, practise the long essay with its three-option choice; and fifth, take two more full-length timed practice exams in the final two weeks. The highest-yield habit is timed DBQ practice: the rubric rewards a clear thesis, use of the documents as evidence, one outside piece of evidence, and sustained sourcing analysis. Note that the College Board has announced an update to the short-answer and long-essay questions of the AP history exams starting with the May 2027 administration — the course content will not change, but the question formats will, so confirm the blueprint for your exam year. The exam is offered once per year in May, so plan the review backward from the exam date and confirm your target colleges\u2019 credit policies.',
    totalHours: '60-100 study hours over 8-12 weeks (or 4-6 week review after the AP course)',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Baseline + source analysis', tasks: ['Take a full-length practice exam', 'Master reading sources across regions for point of view, purpose, and reliability', 'Log weak units and themes'], hours: 20 },
      { label: 'Weeks 3-5', focus: 'Chronological content sweep', tasks: ['Work the nine units from c. 1200 to the present in order', 'Build continuity-and-change charts across the six themes', 'Practise one DBQ per week with the published rubric'], hours: 35 },
      { label: 'Weeks 6-8', focus: 'DBQ and long essay mastery', tasks: ['Drill the DBQ: thesis, document use, outside evidence, sourcing analysis', 'Practise the long essay with the 3-option choice under 40-minute timing', 'Practise comparison and causation reasoning across regions'], hours: 30 },
      { label: 'Weeks 9-10', focus: 'Timed full exams', tasks: ['Take two full-length 3h15m practice exams in the Bluebook-style interface', 'Re-study only the units and question types where you missed points', 'Taper with light review of rubrics and essay planning'], hours: 15 }
    ],
    variants: [
      { label: 'AP United States History', detail: 'The parallel U.S.-focused exam with the identical 3h15m structure (55 MC, 3 SAQs, DBQ, LEQ), covering developments from 1491 to the present.' },
      { label: 'College credit policies', detail: 'Each college sets its own AP credit and placement policy; check your target schools\u2019 published AP charts.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably moves AP World History: Modern scores is "weight the two essays, master comparative source analysis, and run full-length timed exams," and the single biggest error is memorising events while the written sections carry 40 percent of the score. A second proven approach is learning the published rubrics for the document-based question and the long essay: the DBQ rewards a clear thesis, use of the documents as evidence, at least one outside piece of evidence, and sustained sourcing analysis, while the long essay rewards a defensible thesis supported by concrete historical evidence across the regions you know best. Third, practise the course\u2019s signature skill — tracing continuity and change over time and making cross-regional comparisons — since multiple-choice sets and essay prompts are built around those reasoning processes. Fourth, use the full-length practice exam as the calibration tool: the 3-hour-15-minute format is a stamina test, and practice scores are the honest readiness signal. Fifth, master the pacing: roughly a minute per multiple-choice question, about 13 minutes per short answer, 60 minutes for the DBQ including the 15-minute reading period, and 40 minutes for the long essay. Finally, confirm your target colleges\u2019 credit policies early so you know whether you need a 3, 4, or 5, and remember that candidates who practise writing full essays from blank are the ones who finish both essays with developed arguments.',
    items: [
      { title: 'Weight the DBQ and long essay', detail: 'The written sections carry 40 percent of the score; drill both essay formats every week.' },
      { title: 'Learn the published rubrics', detail: 'The DBQ rubric rewards thesis, document use, outside evidence, and sourcing analysis; the LEQ rewards a defensible thesis with concrete evidence.' },
      { title: 'Trace continuity, change, and comparison', detail: 'The course\u2019s signature skill; practise comparing regions and identifying what changed and what persisted over time.' },
      { title: 'Read sources actively', detail: 'Name the producer, purpose, and limits of every source you meet across regions and time periods.' },
      { title: 'Run full-length timed exams', detail: 'The 3h15m format is a stamina test; rehearse it at least twice in the final weeks.' },
      { title: 'Know your credit target', detail: 'Some colleges require a 4 or 5 for credit; confirm your target schools\u2019 AP charts before the exam.' }
    ]
  },
  resourceComparison: {
    summary: 'AP World History: Modern preparation is dominated by free official resources — the College Board exam page, the Course and Exam Description, past free-response questions with scoring guidelines, and released stimulus material — with the exam fee (about $98, with fee reductions available for qualifying students) as the main cost. The comparison below separates official and commercial resources, with prices current to this review. The buying rule is to use the free official resources first, especially the released DBQs and their scoring guidelines, and treat commercial review books as structured supplements for chronological content across the nine units rather than as the syllabus itself.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'College Board exam page & Course and Exam Description', values: ['Free', 'Official PDFs and sample questions', 'The authoritative syllabus and rubric definitions'] },
      { label: 'College Board past free-response questions & scoring guidelines', values: ['Free', 'PDF archive', 'DBQ and long-essay practice with official scoring'] },
      { label: 'AP exam registration', values: ['~$98', 'May exam administration', 'The exam itself'] },
      { label: 'Review books (e.g. AMSCO, Princeton Review, Barron\u2019s)', values: ['~$20-35', 'Printed book + online', 'Chronological content review across the nine units'] },
      { label: 'Full-length practice exams', values: ['~$10-40', 'Online or book', 'Format calibration under real timing'] },
      { label: 'Heimler\u2019s History or similar video reviews', values: ['Free tier; ~$20-30 for courses', 'Video + downloadable notes', 'Unit-by-unit review near the exam'] }
    ],
    footnote: 'Prices approximate and dated to this review (2026-08); the exam is offered once per year in May, with fee reductions available for qualifying students. The College Board has announced updates to the short-answer and long-essay formats starting May 2027.'
  },
  commonMistakes: {
    summary: 'The most common mistake is memorising names and dates while the DBQ and long essay carry 40 percent of the score; the second is writing essays without practising the published rubrics, losing points on thesis and evidence requirements. A third recurring error is mismanaging the 3-hour-15-minute clock — spending the whole DBQ time on reading and running out of writing time, or rushing the long essay. Candidates also routinely use documents without sourcing them, and many neglect the course\u2019s signature skill of comparison and continuity-and-change in favour of isolated facts, which the essays punish directly. Many skip the full-length practice exams and fail on stamina, and some ignore their target colleges\u2019 credit policies and aim for a 3 when their schools require a 4 or 5.',
    items: [
      { mistake: 'Memorising facts instead of practising writing', fix: 'The DBQ and long essay carry 40 percent of the score; weight practice accordingly.' },
      { mistake: 'Writing essays without the rubrics', fix: 'Learn what each rubric rewards: thesis, document use, outside evidence, and sourcing analysis.' },
      { mistake: 'Studying events in isolation', fix: 'Practise comparing regions and tracing continuity and change over time — the exam\u2019s core reasoning processes.' },
      { mistake: 'Poor essay pacing', fix: '60 minutes for the DBQ including the reading period, 40 minutes for the long essay; finish both.' },
      { mistake: 'Using documents without sourcing them', fix: 'In the DBQ, analyse point of view, purpose, and limits rather than merely citing the documents.' },
      { mistake: 'Ignoring college credit policies', fix: 'Check target schools; some require 4 or 5 for credit or award more credits for higher scores.' }
    ]
  },
  questionTypes: {
    summary: 'The AP World History: Modern exam is 3 hours 15 minutes, delivered fully digital in the College Board Bluebook app, and scored on the 1-5 scale with 3 considered qualifying at most colleges. Section I Part A is 55 multiple-choice questions in 55 minutes (40 percent), mostly grouped in sets of 3-4 questions built around a primary or secondary source, an image, a chart, or a map spanning the course from c. 1200 to the present; Section I Part B is 3 short-answer questions in 40 minutes (20 percent); and Section II (40 percent) is the document-based question in 60 minutes including a 15-minute reading period (25 percent) plus one long essay in 40 minutes (15 percent), chosen from three options. The multiple-choice section rewards historical reasoning skills — sourcing, causation, comparison, and continuity and change — rather than recall alone, and there is no penalty for wrong answers, so answer everything. The samples below are editor-written illustrations of the published question styles, not live exam items.',
    types: [
      { name: 'Multiple choice, source sets', share: '40%', detail: 'Sets of 3-4 questions tied to a source across regions and time periods; rewards sourcing, comparison, and continuity-and-change reasoning.' },
      { name: 'Short-answer questions (SAQs)', share: '20%', detail: 'Three brief written responses, often source-based; the first two are required and the third is chosen from two options.' },
      { name: 'Document-based question (DBQ)', share: '25%', detail: 'A 60-minute essay built on seven documents; rewarded for thesis, document use, outside evidence, and sourcing analysis.' },
      { name: 'Long essay (LEQ)', share: '15%', detail: 'A 40-minute essay chosen from three options on a common reasoning process; rewarded for a defensible thesis and concrete evidence.' }
    ],
    samples: [
      {
        prompt: 'A multiple-choice set pairs a Chinese state document from the 1600s with a European merchant\u2019s letter from the same period. Which historical reasoning move best explains why the two sources describe the same trade differently?',
        options: ['A. Sourcing — each author\u2019s position and purpose shapes what they notice and record', 'B. Counting — the source with more numbers is more reliable', 'C. Chronology — the older source is always more accurate', 'D. Removing both sources because they disagree'],
        answer: 'A',
        explanation: 'The exam rewards sourcing: identifying who produced each document and why explains why a state official and a merchant describe the same trade from different vantage points. B confuses specificity with reliability, C assumes age equals accuracy, which the exam never does, and D avoids the analysis the question demands.'
      },
      {
        prompt: 'In the document-based question, which of the following earns the point for "outside evidence"?',
        options: ['A. A fact not mentioned in the documents that supports your argument', 'B. A detail copied from one of the seven documents', 'C. A statement of your personal opinion', 'D. A summary of all seven documents'],
        answer: 'A',
        explanation: 'The DBQ rubric awards a point for bringing in relevant evidence beyond the documents — for example, specific knowledge of a ruler, event, or institution not included among the seven. B is document use, not outside evidence; C is opinion, which the rubric does not credit as evidence; and D is summary, which builds context but earns no separate point.'
      },
      {
        prompt: 'A long-essay prompt asks you to explain how trade networks changed between 1200 and 1450. The strongest thesis would:',
        options: ['A. List every trading city you can remember', 'B. State a defensible claim about the nature of the change and preview the evidence categories you will use', 'C. Argue that everything stayed the same', 'D. Focus only on one region and ignore others'],
        answer: 'B',
        explanation: 'The long-essay rubric rewards a defensible thesis that responds to the prompt and is supported with specific evidence. B makes a claim about the nature of change and sets up the essay\u2019s structure. A is a list without an argument, C fails to engage the historical record the prompt assumes, and D narrows the essay too far to answer a question about trade networks broadly.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published question styles, not live exam items.'
  },
  examDay: {
    summary: 'The AP World History: Modern exam is administered once per year in May and is now fully digital, delivered in the College Board Bluebook app, either on a school-issued device at your school or through the digital administration process. The total time is 3 hours 15 minutes, split into Section I Part A (55 multiple-choice questions in 55 minutes), Section I Part B (3 short-answer questions in 40 minutes), and Section II (the DBQ in 60 minutes including a 15-minute reading period, plus the long essay in 40 minutes), with a short break between the sections. The core rules: bring a photo ID and your admission ticket; a calculator is not needed for this exam. Scores are released in July on the 1-5 scale, and you will see your score in your College Board account. The most useful exam-day habits: pace the multiple choice at about a minute per question, spend about 13 minutes per short answer, give the DBQ the full hour including planning and reading time, and hold the long essay to 40 minutes — the two essay sections are where the highest-scoring candidates separate themselves. If you are aiming for credit, confirm your target schools\u2019 policies before the exam so you know the score you need, and note that AP scores can be sent to colleges through your College Board account after the July release.',
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
