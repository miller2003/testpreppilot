const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'College admissions & AP assessments desk',
    bio: 'AP exam structure and score data come from the College Board official pages and are revised with each exam cycle. Wage and education data come from the BLS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the AP English Language exam structure, format, and score distribution reporting against College Board official pages; education-return context against BLS.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'No direct occupation — AP scores earn college credit and strengthen admissions, and the payoff is the degree-completion premium: associate-degree holders earn $1,059/week vs $899 for high-school-only (BLS, 2023)',
    summary: 'The direct answer is that the AP English Language and Composition exam has no BLS occupation of its own — it is a college-level assessment whose scores can earn college credit and strengthen admission applications — so the salary story is the education-return premium that AP credit accelerates. The relevant reference points from BLS: the May 2024 median wage across all occupations was $49,500; workers with an associate degree earned a median weekly wage of about $1,059 (2023 data) versus about $899 for high-school-diploma-only workers; and bachelor\u2019s-degree holders earn more still, with a median weekly wage around $1,493 (2023 data). A score of 3 or higher on an AP exam is accepted for credit by the vast majority of four-year colleges, which can shorten time-to-degree and reduce tuition — the practical financial value of AP is the credit hours it buys. AP English Language is one of the most-taken AP exams, with roughly half a million administrations each year, and its writing and rhetoric skills transfer directly to college composition requirements and to careers in writing, law, journalism, and communications — occupations with above-median earnings, though no single BLS code corresponds to the exam. The honest framing is that AP\u2019s value is twofold: the admissions signal it sends (colleges reward demonstrated college-level rigor) and the credit it earns (each qualifying score can replace a 3-credit composition course). For students deciding whether to take the exam, the investment is the exam fee and preparation time, and the payoff is measured in credits, admissions advantage, and the writing skills that transfer to college and career.',
    rows: [
      { label: 'Reference: median wage, all occupations', value: '$49,500', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Reference: bachelor\u2019s degree, median weekly earnings', value: '$1,493', note: 'BLS Education Pays, 2023 ($77,636/yr equivalent)' },
      { label: 'Reference: associate degree, median weekly earnings', value: '$1,059', note: 'BLS Education Pays, 2023 ($55,068/yr equivalent)' },
      { label: 'The exam itself', value: 'No direct occupation', note: 'A college-level credit exam, not a credential of record' }
    ],
    growth: 'BLS does not project growth for an AP exam; relevant projections follow the occupations the skills feed into.',
    source: { label: 'BLS Education Pays', url: 'https://www.bls.gov/emp/chart-unemployment-earnings-education.htm' }
  },
  passRate: {
    headline: 'College Board publishes score distributions — roughly half of AP English Language candidates score 3 or higher each year, and the exam is scored 1-5 with 3 considered qualifying for most colleges',
    summary: 'The core fact is that AP score data is published: the College Board reports annual score distributions, and in recent years roughly half of AP English Language and Composition candidates have scored 3 or higher, with about 10 percent scoring 5 and about 20 percent scoring 4. The exam is scored on a 1-5 scale, and a score of 3 or higher is considered "qualified" and is accepted for college credit by the majority of four-year institutions, though each college sets its own credit and placement policy — some require a 4 or 5, and some award more credits for higher scores. The exam itself is 3 hours and 15 minutes: one hour for the multiple-choice section (45 questions on reading and writing analysis) and 2 hours 15 minutes for the free-response section (three essays — a synthesis essay, a rhetorical analysis essay, and an argument essay). The score is a composite of the two sections weighted equally. The published score distributions are useful for planning: candidates who take the AP course and complete a structured review with full-length practice exams sit within the range of the published qualifying rates. The honest advice is to treat the free-response essays as the differentiator — the essays carry half the score, and candidates who practise the synthesis, rhetorical analysis, and argument formats outperform those who focus on multiple choice alone. Exams are offered once per year in May.',
    source: { label: 'College Board — AP English Language & Composition', url: 'https://apcentral.collegeboard.org/courses/ap-english-language-and-composition' },
    caveat: 'College Board publishes annual score distributions; roughly half of candidates score 3 or higher in recent years.'
  },
  studyPlan: {
    summary: 'Plan for 8 to 12 weeks and 60 to 100 hours of study if the exam is outside an AP course, or a 4-to-6-week structured review if you are taking the AP course, weighted to the free-response essays — they carry half the score. The exam is 3 hours 15 minutes: 45 multiple-choice questions in one hour (reading analysis and writing analysis) and three essays in 2 hours 15 minutes (synthesis, rhetorical analysis, and argument). The most effective sequence is: first, take a full-length practice exam to baseline; second, master the multiple-choice analysis skills — identifying the author\u2019s purpose, rhetorical strategies, and the effect of specific choices; third, drill the three essay formats, since the essays carry half the score; fourth, practise time management — roughly 40 minutes per essay; and fifth, take two more full-length practice exams under real timing in the final two weeks. The highest-yield habit is the timed essay practice: the synthesis essay requires integrating at least three of the provided sources, the rhetorical analysis requires close reading of a nonfiction passage, and the argument essay requires building a position with evidence. Budget the essays the most time, since candidates who practise them score measurably higher. The exam is offered once per year in May, so plan the review backward from the exam date, and confirm your target colleges\u2019 credit policies so you know the score you need.',
    totalHours: '60-100 study hours over 8-12 weeks (or 4-6 week review after the AP course)',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Baseline + analysis', tasks: ['Take a full-length practice exam', 'Master multiple-choice reading analysis', 'Log weak areas'], hours: 20 },
      { label: 'Weeks 3-6', focus: 'Essay formats', tasks: ['Drill the synthesis essay with sources', 'Practise rhetorical analysis and argument essays', 'Review scoring rubrics'], hours: 40 },
      { label: 'Weeks 7-10', focus: 'Timed practice', tasks: ['Take two full-length practice exams', 'Re-study weak areas', 'Practise 40-minute essay pacing'], hours: 30 },
      { label: 'Final weeks', focus: 'Taper', tasks: ['Light review of rubrics and analysis skills', 'Confirm exam logistics', 'Rest'], hours: 10 }
    ],
    variants: [
      { label: 'AP English Literature & Composition', detail: 'The literature-focused sibling exam, emphasising close reading of fiction, poetry, and drama.' },
      { label: 'College credit policies', detail: 'Each college sets its own AP credit and placement policy; check your target schools.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably moves AP English Language scores is "weight the three essays, practise the analysis multiple-choice, and run full-length timed exams," and the single biggest error is focusing on multiple choice while the essays carry half the score. A second proven approach is mastering the three essay formats with the published scoring rubrics: the synthesis essay rewards integrating at least three sources with your own argument, the rhetorical analysis rewards close reading of the passage\u2019s strategies, and the argument essay rewards a clear position with concrete evidence. Third, practise the analysis multiple-choice by reading nonfiction actively — identifying the author\u2019s purpose, audience, and rhetorical choices as you read. Fourth, use the full-length practice exams as the calibration tool: the 3-hour-15-minute format is a stamina test, and practice scores are the honest readiness signal. Fifth, master the 40-minute essay pacing, since candidates who finish all three essays with developed arguments score measurably higher. Finally, confirm your target colleges\u2019 credit policies early, so you know whether you need a 3, 4, or 5.',
    items: [
      { title: 'Weight the three essays', detail: 'The free-response section carries half the score; drill all three formats.' },
      { title: 'Learn the scoring rubrics', detail: 'The synthesis, rhetorical analysis, and argument rubrics define what earns points.' },
      { title: 'Read nonfiction actively', detail: 'Identify purpose, audience, and rhetorical choices as you read.' },
      { title: 'Run full-length timed exams', detail: 'The 3h15m format is a stamina test; rehearse it.' },
      { title: 'Master the 40-minute essay pace', detail: 'Finish all three essays with developed arguments.' }
    ]
  },
  resourceComparison: {
    summary: 'AP English Language preparation is dominated by free official resources — the College Board exam page, sample questions, scoring guidelines, and past free-response questions — with the exam fee (about $98, with fee reductions available) as the main cost. The comparison below separates official and commercial resources, with prices current to this review. The buying rule is to use the free official resources first, and treat commercial review books as structured supplements.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'College Board exam page & course description', values: ['Free', 'Official PDFs and sample questions', 'The authoritative syllabus'] },
      { label: 'College Board past free-response questions & scoring guidelines', values: ['Free', 'PDF archive', 'Essay-format practice'] },
      { label: 'AP exam registration', values: ['~$98', 'May exam administration', 'The exam itself'] },
      { label: 'Review books (e.g. Princeton Review, Barron\u2019s)', values: ['~$20-30', 'Printed book + online', 'Structured review'] },
      { label: 'Full-length practice exams', values: ['~$10-40', 'Online or book', 'Format calibration'] }
    ],
    footnote: 'Prices approximate and dated to this review; the exam is offered once per year in May, with fee reductions available for qualifying students.'
  },
  commonMistakes: {
    summary: 'The most common mistake is focusing on multiple choice while the essays carry half the score; the second is writing essays without practising the published rubrics, losing points on structure and evidence. A third recurring error is mismanaging the 2-hour-15-minute essay section — spending too long on the first essay and rushing the argument essay. Candidates also routinely write vague arguments without concrete evidence, and many skip the full-length practice exams and fail on stamina. Finally, some students ignore their target colleges\u2019 credit policies and aim for a 3 when their schools require a 4 or 5.',
    items: [
      { mistake: 'Multiple-choice focus', fix: 'The essays carry half the score; weight practice accordingly.' },
      { mistake: 'Writing without the rubrics', fix: 'Learn what each essay rubric rewards: thesis, evidence, and analysis.' },
      { mistake: 'Poor essay pacing', fix: 'Practise 40 minutes per essay; finish all three.' },
      { mistake: 'Vague arguments', fix: 'Build positions with concrete, specific evidence.' },
      { mistake: 'Ignoring college credit policies', fix: 'Check target schools; some require 4 or 5 for credit.' }
    ]
  },
  questionTypes: {
    summary: 'The AP English Language exam is 3 hours 15 minutes: a one-hour multiple-choice section with 45 questions (reading analysis and writing analysis) and a 2-hour-15-minute free-response section with three essays (synthesis, rhetorical analysis, and argument). The exam is scored 1-5 with 3 considered qualifying. The samples below are editor-written illustrations of the published question styles, not live exam items.',
    types: [
      { name: 'Multiple choice: reading analysis', share: '~25%', detail: 'Analyzing nonfiction passages for purpose, rhetoric, and effect.' },
      { name: 'Multiple choice: writing analysis', share: '~25%', detail: 'Revising and improving written passages.' },
      { name: 'Synthesis essay', share: '~17%', detail: 'Integrating provided sources with your own argument.' },
      { name: 'Rhetorical analysis essay', share: '~17%', detail: 'Analyzing a nonfiction passage\u2019s rhetorical strategies.' },
      { name: 'Argument essay', share: '~17%', detail: 'Building a position with evidence.' }
    ],
    samples: [
      {
        prompt: 'In a rhetorical analysis essay, the strongest thesis identifies the author\u2019s:',
        options: ['A. Personal biography', 'B. Purpose and the strategies used to achieve it', 'C. Grammar errors', 'D. Favorite sources'],
        answer: 'B',
        explanation: 'The rhetorical analysis essay rewards identifying the author\u2019s purpose and the strategies used to achieve it.'
      },
      {
        prompt: 'Which evidence most strengthens an argument essay claiming that public libraries are essential community resources?',
        options: ['A. A specific example of a library program and its measured impact', 'B. A vague statement about libraries being nice', 'C. An opinion from a family member', 'D. No evidence is needed'],
        answer: 'A',
        explanation: 'Concrete, specific evidence with measured impact builds a persuasive argument.'
      },
      {
        prompt: 'In the synthesis essay, the essay must:',
        options: ['A. Use only one source', 'B. Integrate at least three sources with your own argument', 'C. Ignore the sources', 'D. Quote every source equally'],
        answer: 'B',
        explanation: 'The synthesis essay requires integrating at least three of the provided sources into your own argument.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published question styles, not live exam items.'
  },
  examDay: {
    summary: 'The AP English Language exam is administered once per year in May, typically at your school, in two sections with a break: one hour for 45 multiple-choice questions and 2 hours 15 minutes for three essays. The core rules: bring a photo ID, your admission ticket, and black or dark-blue pens for the essays; calculators are not needed. The exam is 3 hours 15 minutes total. Scores are released in July, on the 1-5 scale, and you will see your score in your College Board account. The most useful exam-day habits: pace the multiple-choice at about 1.3 minutes per question, spend about 40 minutes per essay with the argument essay last, and save the last minutes of each essay to check the thesis and evidence. If you are aiming for credit, confirm your target schools\u2019 policies before the exam so you know the score you need, and note that AP scores can be sent to colleges through your College Board account after release.',
    bring: ['Photo ID', 'Admission ticket', 'Black or dark-blue pens', 'Water and snacks for the break (per school policy)'],
    leave: ['Phone and smartwatch (per testing rules)', 'Study materials (not allowed in the testing room)'],
    timeline: [
      { time: 'Section I (60 min)', detail: '45 multiple-choice questions on reading and writing analysis.' },
      { time: 'Break', detail: 'A short break between the sections.' },
      { time: 'Section II (2h15m)', detail: 'Three essays: synthesis, rhetorical analysis, and argument.' },
      { time: 'July', detail: 'Scores released on the 1-5 scale in your College Board account.' }
    ],
    rules: ['Once per year in May', '3 hours 15 minutes total', 'Scored 1-5; 3 considered qualifying', 'Pens required for the essays'],
    afterwards: 'Your AP score can earn college credit and strengthen applications; send scores to colleges through your College Board account after the July release.'
  }
};

export default data;
