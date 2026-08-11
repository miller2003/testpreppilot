// Depth content for: ap-psychology
// AP exam structure and score data come from College Board official pages.
// Education-return wage data come from BLS series named by code.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'College admissions & AP assessments desk',
    bio: 'AP exam structure and score data come from the College Board official pages and are revised with each exam cycle. Wage and education data come from the BLS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the redesigned AP Psychology exam format (first administered May 2025), digital Bluebook delivery, and published score distributions against College Board official pages; education-return context against BLS.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'No direct occupation — AP Psychology scores earn college credit and strengthen admissions, and the payoff is the degree-completion premium: bachelor\u2019s-degree holders earned a median of $1,493/week vs $899 for high-school-only workers (BLS, 2023)',
    summary:
      'The direct answer is that the AP Psychology exam has no BLS occupation of its own — it is a college-level assessment whose scores can earn college credit and strengthen admission applications — so the salary story is the education-return premium that AP credit accelerates. The relevant reference points from BLS: the May 2024 median wage across all occupations was $49,500; workers with a bachelor\u2019s degree earned a median weekly wage of about $1,493 in 2023, versus about $899 for workers with only a high school diploma; and associate-degree holders sat between them at about $1,059. A score of 3 or higher on an AP exam is accepted for credit by the vast majority of four-year colleges, which can shorten time-to-degree and reduce tuition — the practical financial value of AP Psychology is the credit hours it buys and the admissions signal it sends. AP Psychology is among the most-taken AP exams in the country, with roughly 300,000 administrations a year, and its skills — evaluating research methods, interpreting data, and applying concepts to scenarios — transfer directly to introductory college psychology and to careers in psychology, counseling, education, healthcare, and human resources, occupations whose earnings generally sit above the all-occupation median, though no single BLS code corresponds to the exam. The honest framing is that AP\u2019s value is twofold: the admissions signal colleges reward for demonstrated college-level rigor, and the credit each qualifying score earns, often replacing a 3-credit introductory psychology course. For students deciding whether to take the exam, the investment is the exam fee and preparation time, and the payoff is measured in credits, admissions advantage, and the research-literacy skills that carry into college and career.',
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
    headline: 'College Board publishes annual score distributions — about 70% of candidates scored 3 or higher on the redesigned AP Psychology exam in 2025, its first new-format administration, and the exam is scored 1-5 with 3 considered qualifying at most colleges',
    summary:
      'The core fact is that AP score data is published: the College Board reports annual score distributions for every AP subject, and the 2025 administration of AP Psychology — the first under the redesigned format — saw roughly 70 percent of candidates score 3 or higher, with about 22 percent scoring 5, 26 percent scoring 4, and 23 percent scoring 3. Distributions changed when the format changed: the redesigned exam moved from 100 multiple-choice questions to 75 and shifted a larger share of the score toward multiple choice, and first-year results ran higher than the previous format\u2019s qualifying rates, so do not compare 2025 directly to earlier years. The exam is scored on a 1-5 scale, and a score of 3 or higher is considered "qualified" and accepted for credit by the majority of four-year institutions, though each college sets its own credit and placement policy — many require a 4 or 5. The redesigned exam is 2 hours 40 minutes and fully digital in the Bluebook app: Section I has 75 multiple-choice questions in 90 minutes (66.7 percent), and Section II has 2 free-response questions in 70 minutes (33.3 percent) — an Article Analysis Question and an Evidence-Based Question, both built around summarized peer-reviewed research. The published distributions are useful for planning: candidates who complete the AP course and structured review with full-length timed practice sit within the range of the published qualifying rates. The honest advice is to treat research methods and data interpretation as the differentiator, since roughly a third of the multiple-choice section tests those skills and both free-response questions are anchored to studies.',
    source: { label: 'College Board — AP Psychology', url: 'https://apcentral.collegeboard.org/courses/ap-psychology' },
    caveat: 'College Board publishes annual score distributions; the 2025 figures above are the first administration of the redesigned exam, so they are not directly comparable to earlier years.'
  },
  studyPlan: {
    summary: 'Plan for 8 to 10 weeks and 50 to 80 hours of study if the exam is outside an AP course, or a 4-to-6-week structured review if you are taking the AP course, weighted to research methods and the two free-response questions — they are the differentiators on the redesigned exam. The exam is 2 hours 40 minutes, fully digital in the Bluebook app: 75 multiple-choice questions in 90 minutes (66.7 percent) and 2 free-response questions in 70 minutes (33.3 percent) — the Article Analysis Question, worth up to 7 points and asking you to analyse a summarized study across parts like method, variables, statistics, ethics, and generalizability, and the Evidence-Based Question, worth up to 7 points and asking you to make a claim and support it with three summarized sources. The course content sits in five equally weighted units: Biological Bases of Behavior, Cognition, Development and Learning, Social Psychology and Personality, and Mental and Physical Health, with science practices — concept application, research methods and design, data interpretation, and argumentation — tested throughout. The most effective sequence is: first, take a full-length practice exam to baseline; second, build the concept-application habit, since roughly two-thirds of the multiple-choice questions apply theories to scenarios; third, drill the free-response formats with the published rubrics; and fourth, take two more timed full exams in the final two weeks. The highest-yield habit is timed free-response practice: each part of the AAQ and EBQ is scored independently, so answering every part matters more than polishing any single one. Budget the 90-minute multiple-choice section for roughly 72 seconds per question and bank time on recall items for the scenario sets.',
    totalHours: '50-80 study hours over 8-10 weeks (or 4-6 week review after the AP course)',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Baseline + concept application', tasks: ['Take a full-length practice exam', 'Practise applying concepts to scenarios rather than recalling definitions', 'Log weak units across the five units'], hours: 15 },
      { label: 'Weeks 3-5', focus: 'Unit content sweep', tasks: ['Work all five units: biological bases, cognition, development and learning, social and personality, mental and physical health', 'Study research methods and data interpretation alongside each unit', 'Learn the DSM-5-framed disorder content for the mental health unit'], hours: 25 },
      { label: 'Weeks 6-7', focus: 'Free-response mastery', tasks: ['Drill the Article Analysis Question: method, variables, statistics, ethics, generalizability', 'Drill the Evidence-Based Question: claim, two pieces of evidence, reasoning', 'Practise answering every part under the 70-minute clock'], hours: 20 },
      { label: 'Weeks 8', focus: 'Timed full exams', tasks: ['Take two full-length 2h40m practice exams in the Bluebook-style interface', 'Re-study only the units and question types where you missed points', 'Taper with light review of the science practices'], hours: 10 }
    ],
    variants: [
      { label: 'AP Psychology before the redesign', detail: 'The pre-2025 exam had 100 multiple-choice questions in 70 minutes plus two different free-response types; retired practice material is not a reliable guide to the current format.' },
      { label: 'College credit policies', detail: 'Each college sets its own AP credit and placement policy; check your target schools\u2019 published AP charts.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably moves AP Psychology scores is "apply concepts, read research critically, and answer every free-response part," and the single biggest error is treating the exam as a vocabulary test — the redesigned format rewards scenario application and data interpretation, not definition recall. A second proven approach is learning the two free-response question types cold: the Article Analysis Question rewards identifying the research method, variables, statistics, ethical guidelines, and generalizability of one summarized study, while the Evidence-Based Question rewards a defensible claim supported by evidence from three sources with reasoning tied to course concepts. Third, practise interpreting the graphs, charts, tables, and figures that appear throughout the multiple-choice section, because research methods and data interpretation account for roughly a third of the section\u2019s questions. Fourth, use the full-length practice exam as the calibration tool: the 2-hour-40-minute digital format is a stamina test, and practice scores are the honest readiness signal. Fifth, master the pacing — about 72 seconds per multiple-choice question, and within the free-response section, about 25 minutes on the AAQ with a 10-minute reading period and about 45 minutes on the EBQ with a 15-minute reading period. Finally, remember that every part of each free-response question is scored independently, so a weak answer never drags down the rest — writing something for every part is the single cheapest way to bank points.',
    items: [
      { title: 'Apply, do not just recall', detail: 'About two-thirds of the multiple-choice section applies concepts to scenarios; practise that move daily.' },
      { title: 'Learn the two free-response formats', detail: 'The AAQ analyses one study across method, variables, statistics, ethics, and generalizability; the EBQ makes a claim supported by three sources.' },
      { title: 'Read research and data actively', detail: 'Interpret the graphs, charts, and figures in the multiple-choice section; research methods and data interpretation are roughly a third of it.' },
      { title: 'Run full-length timed exams', detail: 'The 2h40m digital format is a stamina test; rehearse it at least twice.' },
      { title: 'Answer every free-response part', detail: 'Each part is scored independently; a weak part never drags down the others.' },
      { title: 'Know your credit target', detail: 'Some colleges require a 4 or 5 for credit; confirm your target schools\u2019 AP charts before the exam.' }
    ]
  },
  resourceComparison: {
    summary: 'AP Psychology preparation is dominated by free official resources — the College Board exam page, the Course and Exam Description, sample questions, and scoring guidelines for the two free-response types — with the exam fee (about $98, with fee reductions available for qualifying students) as the main cost. The comparison below separates official and commercial resources, with prices current to this review. The buying rule is to use the free official resources first, especially the AAQ and EBQ scoring materials, and treat commercial review books as structured supplements — and to check that anything you buy is written for the redesigned 2025-and-later format, because pre-redesign material drills the old 100-question exam.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'College Board exam page & Course and Exam Description', values: ['Free', 'Official PDFs and sample questions', 'The authoritative syllabus for the redesigned exam'] },
      { label: 'College Board sample questions & scoring guidelines', values: ['Free', 'PDF archive', 'AAQ and EBQ practice with official scoring'] },
      { label: 'AP exam registration', values: ['~$98', 'May exam administration', 'The exam itself'] },
      { label: 'Review books written for the new format (e.g. Barron\u2019s, Princeton Review)', values: ['~$20-35', 'Printed book + online', 'Structured review — verify the edition covers the 2025 redesign'] },
      { label: 'Full-length practice exams', values: ['~$10-40', 'Online or book', 'Format calibration under real timing'] }
    ],
    footnote: 'Prices approximate and dated to this review (2026-08); the exam is offered once per year in May, with fee reductions available for qualifying students. Pre-2025 review materials drill the retired exam format and are not a reliable syllabus.'
  },
  commonMistakes: {
    summary: 'The most common mistake is studying the retired pre-2025 format — memorising 100-question practice banks — when the redesigned exam has 75 questions and completely different free-response types; the second is treating the exam as a vocabulary test, when the new format rewards applying concepts to scenarios and reading research. A third recurring error is mismanaging the free-response section by skipping parts, even though each part is scored independently and every answered part banks points. Candidates also routinely gloss over research methods and data interpretation, which account for roughly a third of the multiple-choice section, and many skip the full-length digital practice exams and fail on stamina. Finally, some students ignore their target colleges\u2019 credit policies and aim for a 3 when their schools require a 4 or 5.',
    items: [
      { mistake: 'Studying pre-2025 material for the redesigned exam', fix: 'The current exam has 75 multiple-choice questions and the AAQ/EBQ free-response types; verify anything you buy covers the 2025 redesign.' },
      { mistake: 'Treating the exam as a vocabulary test', fix: 'About two-thirds of the multiple-choice section applies concepts to scenarios; drill application, not just definitions.' },
      { mistake: 'Skipping free-response parts', fix: 'Each part of the AAQ and EBQ is scored independently; answer every part even if brief.' },
      { mistake: 'Glossing over research methods and data', fix: 'Research methods and data interpretation are roughly a third of the multiple-choice section; study them deliberately.' },
      { mistake: 'Skipping full-length practice exams', fix: 'The 2h40m digital format is a stamina test; take at least two timed full exams.' },
      { mistake: 'Ignoring college credit policies', fix: 'Check target schools; some require 4 or 5 for credit or award more credits for higher scores.' }
    ]
  },
  questionTypes: {
    summary: 'The redesigned AP Psychology exam is 2 hours 40 minutes, delivered fully digital in the College Board Bluebook app, and scored on the 1-5 scale with 3 considered qualifying at most colleges. Section I is 75 multiple-choice questions in 90 minutes, worth 66.7 percent of the score, with each question carrying four answer choices and no penalty for guessing; questions mix standalone items and sets built around a short study, graph, or data table, and roughly two-thirds test concept application while the rest test research methods and data interpretation. Section II is 2 free-response questions in 70 minutes, worth 33.3 percent: the Article Analysis Question, worth up to 7 points across six parts and built around one summarized peer-reviewed study, and the Evidence-Based Question, worth up to 7 points across three parts and built around three summarized sources on a common topic. The samples below are editor-written illustrations of the published question styles, not live exam items.',
    types: [
      { name: 'Multiple choice: concept application', share: '~44%', detail: 'Scenario-based items that ask you to apply a theory, term, or perspective to a described situation; the dominant item type on the redesigned exam.' },
      { name: 'Multiple choice: research methods and data interpretation', share: '~22%', detail: 'Items asking you to evaluate study design, identify variables, and interpret graphs, charts, and tables; set-based items often hang off a short study.' },
      { name: 'Article Analysis Question (AAQ)', share: '~17%', detail: 'One summarized peer-reviewed study with up to 7 points across six parts: method, variable, statistic interpretation, ethical guideline, generalizability, and application.' },
      { name: 'Evidence-Based Question (EBQ)', share: '~17%', detail: 'Three summarized sources with up to 7 points across three parts: make a claim, provide two pieces of evidence, and justify the reasoning with course concepts.' }
    ],
    samples: [
      {
        prompt: 'A student in a noisy dorm room performs better on a memorisation task than a student in a quiet library, and the researcher concludes that noise improves memory. Which concept is most likely the problem with this conclusion?',
        options: ['A. Random sampling', 'B. The confound of individual differences between the two students', 'C. Inferential statistics', 'D. Operational definitions'],
        answer: 'B',
        explanation: 'Because students were not randomly assigned to the two conditions, any pre-existing difference between them — motivation, skill, fatigue — is a confound that competes with noise as an explanation of the result. The redesigned exam rewards identifying design weaknesses like this. A is about how participants are selected, not assigned; C and D are real concepts but do not address the causal attribution problem described.'
      },
      {
        prompt: 'In an Article Analysis Question, you are asked to identify the independent variable of a study that measured whether caffeine affects reaction time by giving one group coffee and another group decaffeinated coffee. The independent variable is:',
        options: ['A. The reaction time measured', 'B. Whether the participant received caffeine', 'C. The participants\u2019 ages', 'D. The laboratory setting'],
        answer: 'B',
        explanation: 'The independent variable is the factor the researcher manipulates — here, caffeine versus no caffeine. A is the dependent variable, which is measured rather than manipulated. C is a participant characteristic that would be a confound if uncontrolled, and D is a constant, not a manipulated variable.'
      },
      {
        prompt: 'For the Evidence-Based Question, a claim is strongest when it is:',
        options: ['A. The most common opinion in the sources', 'B. Supported by specific evidence from the sources with reasoning tied to course concepts', 'C. Worded to be broad enough to avoid being wrong', 'D. Based only on your own experience'],
        answer: 'B',
        explanation: 'The EBQ rubric rewards a defensible claim supported by evidence from the provided sources, with reasoning that connects the evidence to AP Psychology concepts. B describes exactly that structure. A is popularity rather than evidence, C avoids the specificity the rubric rewards, and D ignores the sources the task requires you to use.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published question styles, not live exam items.'
  },
  examDay: {
    summary: 'The AP Psychology exam is administered once per year in May and is fully digital, delivered in the College Board Bluebook app on a school-issued device, with responses submitted automatically when time ends. The total time is 2 hours 40 minutes, split into Section I (75 multiple-choice questions in 90 minutes) and Section II (2 free-response questions in 70 minutes), with a short break between the sections. The core rules: bring a photo ID and your admission ticket; no calculator is needed, and no external reference materials are allowed. Scores are released in July on the 1-5 scale, and you will see your score in your College Board account. The most useful exam-day habits: pace the multiple-choice section at about 72 seconds per question and answer every item, since there is no guessing penalty; give the free-response section its full 70 minutes, roughly 25 minutes on the Article Analysis Question (with its 10-minute reading period) and 45 minutes on the Evidence-Based Question (with its 15-minute reading period); and write something for every part of each free-response question, because each part is scored independently. If you are aiming for credit, confirm your target schools\u2019 policies before the exam so you know the score you need, and note that AP scores can be sent to colleges through your College Board account after the July release.',
    bring: ['Photo ID', 'Admission ticket', 'A charged school-issued device with the Bluebook app installed (per your school\u2019s digital administration policy)', 'Water and snacks for the break (per school policy)'],
    leave: ['Phone and smartwatch (per testing rules)', 'Study materials (not allowed in the testing room)', 'Notes or reference sheets (not permitted on the digital exam)'],
    timeline: [
      { time: 'Section I (90 min)', detail: '75 multiple-choice questions; answer every item, since there is no guessing penalty.' },
      { time: 'Break', detail: 'A short break between the sections.' },
      { time: 'Section II (70 min)', detail: 'Article Analysis Question and Evidence-Based Question, each built around summarized research.' },
      { time: 'July', detail: 'Scores released on the 1-5 scale in your College Board account.' }
    ],
    rules: ['Once per year in May', '2 hours 40 minutes total', 'Fully digital in the College Board Bluebook app', 'Scored 1-5; 3 considered qualifying at most colleges', 'No penalty for wrong answers on multiple choice', 'Each free-response part is scored independently'],
    afterwards: 'Your AP score can earn college credit and strengthen applications; send scores to colleges through your College Board account after the July release. Because the exam was redesigned in 2025, use only current-format practice material when preparing for a retake.'
  }
};

export default data;
