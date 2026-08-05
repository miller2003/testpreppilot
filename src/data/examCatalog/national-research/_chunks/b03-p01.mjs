export const programs = [
  {
    id: 'ets',
    body: 'ETS',
    bodyUrl: 'https://www.ets.org',
    about: 'Educational Testing Service (ETS) is a nonprofit that develops and administers high-stakes admissions and English-proficiency assessments used by universities and employers worldwide. Its credentials, including the GRE and TOEFL families, are among the most recognised signals of academic readiness and English ability in global higher education.',
    registrationSteps: [
      { title: 'Create or sign in to your ETS account', description: 'Set up a free ETS account at ets.org using a name that exactly matches your test-day identification.', duration: '10 minutes' },
      { title: 'Select your test and delivery', description: 'Choose the GRE or TOEFL product, then pick a test centre or the at-home option where available in your country.', duration: '15 minutes' },
      { title: 'Pay the registration fee', description: 'Fees are charged in USD and vary by location; some countries add a small international surcharge at checkout.', duration: '5 minutes' },
      { title: 'Prepare with official materials', description: 'Use free ETS prep plus PowerPrep or TOEFL Practice Online to learn the adaptive format before test day.', duration: 'varies' },
      { title: 'Check in and test', description: 'Arrive early with approved photo ID; at-home testers complete an equipment and room scan through the online proctor.', duration: 'test day' }
    ],
    proctoring: 'GRE and TOEFL are delivered at authorised ETS test centres and, in many countries, via the at-home option with live online proctoring. You must present a valid passport or government photo ID that exactly matches your account name.',
    retakePolicy: 'The GRE General Test may be taken once every 21 days, up to five times within any rolling 12-month period. TOEFL may be retaken every 12 days. Subject tests are offered on fixed dates and can be retaken at the next administration.',
    recertification: 'GRE scores are reportable for five years and TOEFL iBT scores for two years from the test date. Neither requires renewal, but older scores eventually age out of the reporting system.',
    scoreReporting: 'GRE General section scores run 130 to 170, Analytical Writing 0 to 6, and Subject Tests 200 to 990. TOEFL iBT totals 0 to 120 across four sections of 0 to 30 each. Official score reports are sent to the institutions you select at registration.',
    providersNote: 'Start with free official ETS prep and the PowerPrep and TOEFL Practice Online tools. Third-party publishers such as Kaplan and Magoosh are widely used for extra practice but are not affiliated with ETS.',
    comparison: {
      title: 'ETS admissions and English tests compared',
      columns: ['Test', 'Best for', 'Length', 'Score'],
      rows: [
        { label: 'GRE General', values: ['Graduate admission', '~2 hours', '130 to 170'] },
        { label: 'GRE Subject', values: ['Specific field admits', '~2h50m', '200 to 990'] },
        { label: 'TOEFL iBT', values: ['English proficiency', '~2 hours', '0 to 120'] }
      ]
    },
    orgFaqs: [
      { q: 'Can I send scores to more schools later?', a: 'Yes. You can order additional score reports through your ETS account for a per-recipient fee, even years after testing while the score remains valid.' },
      { q: 'Is the at-home test the same as the centre test?', a: 'The content and scoring are identical; only delivery and check-in differ. A few institutions state a preference, so confirm before booking.' }
    ],
    sourceUrl: 'https://www.ets.org',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'ibo',
    body: 'International Baccalaureate Organization',
    bodyUrl: 'https://www.ibo.org',
    about: 'The International Baccalaureate Organization (IBO) is a nonprofit foundation that offers four educational programmes for students aged 3 to 19 across thousands of schools in more than 150 countries. Its Diploma Programme is a pre-university qualification widely recognised by universities for admissions and course credit.',
    registrationSteps: [
      { title: 'Enrol at an IB World School', description: 'Students join an authorised IB school; individuals cannot register independently for IB assessment.', duration: 'per school year' },
      { title: 'Choose your subjects and core', description: 'With your coordinator, pick six subjects plus the Theory of Knowledge, Extended Essay and Creativity Activity Service core.', duration: 'weeks' },
      { title: 'Register for the exam session', description: 'Your school submits entries to the IBO for the May or November examination session on your behalf.', duration: 'set deadlines' },
      { title: 'Complete coursework and eAssessment', description: 'Submit internal assessments, ePortfolios and sit on-screen or written examinations as required by each component.', duration: 'exam period' },
      { title: 'Receive results', description: 'Diploma results are released in July for May session candidates and in January for November candidates.', duration: 'results day' }
    ],
    proctoring: 'IB examinations are administered by authorised IB World Schools under strict protocol, with external moderation of coursework and on-screen eAssessment for the Middle Years Programme. There is no public walk-in testing.',
    retakePolicy: 'Candidates may retake individual subjects or the full Diploma in a subsequent May or November session. Fees and rules are set by the school and the IBO, not paid directly by the student to the IBO.',
    recertification: 'The IB Diploma is a final qualification and does not expire or require renewal. University course credit based on IB scores follows each institution policy.',
    scoreReporting: 'Diploma subjects are graded 1 to 7, with a maximum of 45 points once the core bonus is added. Middle Years eAssessment reports up to 56 points; results are issued by the IBO to schools and candidates.',
    providersNote: 'Official subject guides, the IB Store and school-provided past papers are the legitimate preparation sources. Many publishers offer revision guides, but the IBO sets all syllabi and mark schemes.',
    comparison: {
      title: 'IB programmes compared',
      columns: ['Programme', 'Ages', 'Credential', 'Max points'],
      rows: [
        { label: 'Diploma (DP)', values: ['16 to 19', 'IB Diploma', '45'] },
        { label: 'Career-related (CP)', values: ['16 to 19', 'IB CP certificate', 'core only'] },
        { label: 'Middle Years (MYP)', values: ['11 to 16', 'MYP Certificate', '56'] }
      ]
    },
    orgFaqs: [
      { q: 'Can I take an IB exam without attending an IB school?', a: 'No. IB assessment is only available to students enrolled at an authorised IB World School that registers them for the relevant session.' },
      { q: 'Do US colleges give credit for IB?', a: 'Many US universities award course credit or advanced standing for Higher Level subjects scored 5 to 7, but policies vary by institution.' }
    ],
    sourceUrl: 'https://www.ibo.org',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'college-board',
    body: 'College Board',
    bodyUrl: 'https://accuplacer.collegeboard.org',
    about: 'The College Board is a nonprofit membership association that runs the ACCUPLACER placement suite used by more than 1,500 US colleges to place incoming students into the right math, writing and ESL courses. ACCUPLACER is a diagnostic placement system rather than an admission credential.',
    registrationSteps: [
      { title: 'Contact your college testing center', description: 'ACCUPLACER is scheduled through your institution; there is no public individual registration with the College Board.', duration: 'varies' },
      { title: 'Confirm which tests you need', description: 'Your advisor or testing center tells you which of the five main tests and any ESL or WritePlacer components to take.', duration: 'day' },
      { title: 'Prepare with the free app', description: 'Use the official ACCUPLACER study app and sample questions to review math and writing skills beforehand.', duration: '1 to 2 weeks' },
      { title: 'Test at the center or remotely', description: 'Sit the untimed, computer-adaptive tests at your school testing center or via an approved remote proctoring setup.', duration: '2 to 3 hours' },
      { title: 'Review placement with an advisor', description: 'Scores appear on screen immediately and your advisor uses them to enroll you in the correct course level.', duration: 'same day' }
    ],
    proctoring: 'ACCUPLACER is delivered at the institution testing center under staff supervision, or remotely where the college approves online proctoring. Bring a photo ID; personal calculators are not generally permitted.',
    retakePolicy: 'The College Board sets no national limit; each institution decides retake rules. A common policy allows a first retake after 24 hours and further attempts after about three months, with scores valid for two years.',
    recertification: 'Scores are valid for two years from the test date. Because placement is diagnostic, there is no renewal; you simply retest if your scores expire or your course plan changes.',
    scoreReporting: 'The five main multiple-choice tests report 200 to 300. The four ESL multiple-choice tests report 20 to 120, WritePlacer essays 1 to 8, and WritePlacer ESL 1 to 6. Results are shown immediately on screen.',
    providersNote: 'The official ACCUPLACER study app and the College Board sample questions are free and sufficient for most students. Paid third-party courses exist but are rarely necessary for placement.',
    comparison: {
      title: 'Next-Generation ACCUPLACER tests',
      columns: ['Test', 'Measures', 'Score'],
      rows: [
        { label: 'Arithmetic', values: ['Basic math', '200 to 300'] },
        { label: 'QAS', values: ['Quant reasoning and stats', '200 to 300'] },
        { label: 'AAF', values: ['Advanced algebra', '200 to 300'] },
        { label: 'Reading / Writing', values: ['Literacy skills', '200 to 300'] }
      ]
    },
    orgFaqs: [
      { q: 'Do I pay the College Board directly for ACCUPLACER?', a: 'Usually not. Your institution administers and may charge a fee of about 0 to 50 dollars, but the College Board does not bill students directly.' },
      { q: 'Is there a passing score?', a: 'No. Each college sets its own cut scores for course placement, so the same result can place different students into different courses.' }
    ],
    sourceUrl: 'https://accuplacer.collegeboard.org',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'aamc',
    body: 'Association of American Medical Colleges',
    bodyUrl: 'https://www.aamc.org',
    about: 'The Association of American Medical Colleges (AAMC) is a nonprofit that represents US and Canadian medical schools and runs the MCAT medical admissions exam and the PREview professional readiness exam. Its assessments are central to allopathic, osteopathic and many other health-professions admissions.',
    registrationSteps: [
      { title: 'Create an AAMC account', description: 'Register at aamc.org with a name matching your ID; this single account covers MCAT and PREview scheduling.', duration: '10 minutes' },
      { title: 'Register for the MCAT', description: 'Use the MCAT Registration System to pick a date and Pearson VUE test center, then pay the standard or international fee.', duration: '20 minutes' },
      { title: 'Register for PREview separately', description: 'PREview is booked through its own portal for a two-day testing window from April through October if a target school requires or recommends it.', duration: '15 minutes' },
      { title: 'Prepare with official prep', description: 'Use AAMC Official Prep products, free PREview practice scenarios and full-length MCAT practice exams.', duration: '3 to 6 months' },
      { title: 'Test and await scores', description: 'MCAT is taken at a Pearson VUE center; PREview is remotely proctored. Scores release about 30 days after the window.', duration: 'test day' }
    ],
    proctoring: 'The MCAT is delivered at Pearson VUE test centers under standard security. PREview is a remotely proctored online exam with check-in and identity verification through the AAMC portal.',
    retakePolicy: 'MCAT limits are three times in a testing year, four in two consecutive years and seven in a lifetime. PREview allows up to two attempts per testing year and four in a lifetime.',
    recertification: 'MCAT scores are valid for two to three years depending on the medical school; PREview scores are used for the application cycle and are not renewed. Neither requires continuing education.',
    scoreReporting: 'The MCAT totals 472 to 528, built from four sections each scored 118 to 132. PREview reports a total score of 1 to 9 with a confidence band and percentile rank.',
    providersNote: 'AAMC Official Prep is the only source of real MCAT questions and is strongly recommended. Third-party prep (Kaplan, UWorld, Blueprint) is popular but uses independent practice material.',
    comparison: {
      title: 'AAMC medical admissions exams',
      columns: ['Exam', 'Measures', 'Length', 'Score'],
      rows: [
        { label: 'MCAT', values: ['Science and reasoning', '7.5 hours', '472 to 528'] },
        { label: 'PREview', values: ['Professional judgment', '75 minutes', '1 to 9'] }
      ]
    },
    orgFaqs: [
      { q: 'Do I need both the MCAT and PREview?', a: 'The MCAT is required by virtually every US and Canadian MD program. PREview is required or recommended by roughly 30 schools, so check each admissions page.' },
      { q: 'Is there fee assistance?', a: 'Yes. The AAMC Fee Assistance Program cuts the MCAT fee to 145 dollars and waives the first PREview registration for eligible applicants.' }
    ],
    sourceUrl: 'https://www.aamc.org',
    verified: true,
    confidence: 'high'
  }
];

export const exams = [
  {
    slug: 'gre-biology-subject-test',
    body: 'ETS',
    tagline: 'A retired graduate biology subject test that once helped PhD and master programs gauge subject depth.',
    description: 'The GRE Biology Subject Test was a computer-delivered assessment of undergraduate biology knowledge that ETS discontinued after the May 2021 administration. It is no longer offered or scored, so new test takers cannot register for it. Applicants who previously sat it may still report valid five-year scores, but most programs now rely on transcripts, research experience and the GRE General Test instead of a dedicated subject exam.',
    quickAnswer: {
      summary: 'The GRE Biology Subject Test is retired and no longer administered; ETS ended it after May 2021. You cannot register for it today, and most biology graduate programs have dropped subject-test requirements in favour of the GRE General Test and research credentials.',
      advantages: [
        'Signalled deep undergraduate biology preparation to competitive PhD programs',
        'Scores remained valid and reportable for five years after testing',
        'Covered organismal, cellular and ecological breadth in one sitting',
        'Provided a common metric across very different undergraduate institutions'
      ]
    },
    roadmap: ['Confirm your program still accepts it', 'Locate valid prior scores', 'Report via ETS if within five years', 'Otherwise take the GRE General Test'],
    prerequisites: 'An undergraduate biology background was expected; there was no formal eligibility gate to register.',
    examMeta: {
      questions: 'Approximately 190 multiple-choice',
      time: '2 hours 50 minutes',
      pass: 'No pass mark; scaled 200 to 990',
      fee: 'Discontinued',
      format: 'Multiple-choice, computer-delivered',
      admin: 'ETS (retired)'
    },
    topics: [
      { name: 'Cellular and Molecular Biology' },
      { name: 'Organismal Biology' },
      { name: 'Ecology and Evolution' }
    ],
    examEssentials: [
      ['Status', 'Retired after the May 2021 administration'],
      ['Scoring', 'Scaled 200 to 990 in 10-point increments'],
      ['Validity', 'Scores were reportable for five years'],
      ['Replacement', 'Programs now use the GRE General Test and transcripts']
    ],
    timeline: [{ stage: 'Historical administration', duration: 'Through May 2021' }],
    costBreakdown: { items: [{ item: 'Former registration fee', fee: '$150' }], total: 'Discontinued', footnote: 'No longer bookable; last fee shown for reference only.' },
    difficulty: 'Challenging',
    audience: 'Former biology graduate applicants',
    time: 'Not currently offered',
    cost: 'Discontinued',
    faqs: [
      { q: 'Can I still take the GRE Biology Subject Test?', a: 'No. ETS retired the Biology Subject Test in May 2021 and no longer schedules it. Any score you earned before then is reportable only while inside its five-year validity window.' },
      { q: 'What should biology applicants use instead?', a: 'Most programs now evaluate biology preparation through the GRE General Test, undergraduate coursework, research experience and letters of recommendation rather than a subject test.' },
      { q: 'Are my old scores still valid?', a: 'ETS keeps GRE scores for five years from the test year. If your test date falls inside that window you can still send an official report, but many departments no longer request it.' },
      { q: 'Why was it discontinued?', a: 'ETS consolidated its subject-test portfolio, and several disciplines saw declining program requirements, leading to retirement of Biology, Chemistry and Literature in English.' }
    ],
    summaryPoints: [
      'Retired by ETS after May 2021 and no longer bookable',
      'Was scored 200 to 990 across cell, organismal and ecology content',
      'Modern biology applicants substitute the GRE General Test and research record'
    ],
    relatedSlugs: ['gre-general-test', 'gre-chemistry-subject-test'],
    sourceUrl: 'https://www.ets.org/gre/test-takers/subject-tests.html',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'gre-chemistry-subject-test',
    body: 'ETS',
    tagline: 'A retired chemistry subject test that previously strengthened chemistry and related graduate applications.',
    description: 'The GRE Chemistry Subject Test was a computer-delivered exam covering analytical, inorganic, organic and physical chemistry that ETS retired after the April 2023 administration. It is no longer available to new test takers, and most chemistry graduate programs have moved to evaluating preparation through the GRE General Test, upper-level coursework and research. Candidates with a still-valid score may report it, but it cannot be retaken.',
    quickAnswer: {
      summary: 'The GRE Chemistry Subject Test was discontinued after April 2023 and is no longer offered by ETS. You cannot register for it today; chemistry applicants should plan around the GRE General Test and their research and transcript record instead.',
      advantages: [
        'Once demonstrated mastery across all four chemistry subdisciplines',
        'Gave applicants a standardised subject metric for PhD admissions',
        'Scores were reportable for five years after testing',
        'Helped compensate for varied undergraduate lab exposure'
      ]
    },
    roadmap: ['Confirm program requirements', 'Look for valid prior scores', 'Otherwise use the GRE General Test', 'Highlight research and coursework'],
    prerequisites: 'An undergraduate chemistry background was expected; registration had no formal gate.',
    examMeta: {
      questions: 'Approximately 130 multiple-choice',
      time: '2 hours 50 minutes',
      pass: 'No pass mark; scaled 200 to 990',
      fee: 'Discontinued',
      format: 'Multiple-choice, computer-delivered',
      admin: 'ETS (retired)'
    },
    topics: [
      { name: 'Analytical Chemistry' },
      { name: 'Inorganic Chemistry' },
      { name: 'Organic Chemistry' },
      { name: 'Physical Chemistry' }
    ],
    examEssentials: [
      ['Status', 'Retired after the April 2023 administration'],
      ['Scoring', 'Scaled 200 to 990 in 10-point increments'],
      ['Validity', 'Scores were reportable for five years'],
      ['Replacement', 'GRE General Test plus coursework and research']
    ],
    timeline: [{ stage: 'Historical administration', duration: 'Through April 2023' }],
    costBreakdown: { items: [{ item: 'Former registration fee', fee: '$150' }], total: 'Discontinued', footnote: 'No longer bookable; last fee shown for reference only.' },
    difficulty: 'Challenging',
    audience: 'Former chemistry graduate applicants',
    time: 'Not currently offered',
    cost: 'Discontinued',
    faqs: [
      { q: 'Can I register for the GRE Chemistry Subject Test now?', a: 'No. ETS ended the Chemistry Subject Test after the April 2023 administration and has not announced a replacement subject exam for chemistry.' },
      { q: 'How do chemistry PhD programs evaluate applicants now?', a: 'They typically weigh the GRE General Test, upper-division coursework, research experience, publications and letters of recommendation more heavily than a retired subject score.' },
      { q: 'Will my old chemistry score still be sent?', a: 'ETS reports GRE scores for five years. If your test date is within that window you may still order a report, though few programs ask for it.' },
      { q: 'Are any GRE science subject tests still available?', a: 'Yes. As of 2026 the Mathematics, Physics and Psychology Subject Tests remain active, while Biology, Chemistry and Literature in English have been retired.' }
    ],
    summaryPoints: [
      'Retired by ETS after April 2023 and no longer bookable',
      'Covered analytical, inorganic, organic and physical chemistry',
      'Active alternatives include the GRE Math, Physics and Psychology subject tests'
    ],
    relatedSlugs: ['gre-general-test', 'gre-mathematics-subject-test'],
    sourceUrl: 'https://www.ets.org/gre/test-takers/subject-tests.html',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'gre-general-test',
    body: 'ETS',
    tagline: 'The standard US graduate admissions exam measuring verbal, quantitative and analytical writing skills.',
    description: 'The GRE General Test is ETS standardised admission assessment for master, doctoral and many business programs worldwide, measuring verbal reasoning, quantitative reasoning and analytical writing in a computer-adaptive format of just under two hours. It is accepted across thousands of graduate and professional schools, and applicants often use it to strengthen a transcript or to meet program minimums. The test adapts question difficulty to your performance, so no two candidates see an identical set of questions.',
    quickAnswer: {
      summary: 'The GRE General Test is a computer-delivered graduate admissions exam lasting about 1 hour 58 minutes and covering verbal reasoning, quantitative reasoning and one analytical writing essay. You register through ETS for a test centre or at-home appointment at a 220 dollar US fee, and scores are reportable for five years.',
      advantages: [
        'Accepted by thousands of graduate and professional programs globally',
        'Adaptive format shows you questions matched to your ability level',
        'Scores valid five years, giving flexibility across admission cycles',
        'Sends four free score reports to institutions of your choice',
        'One essay plus reasoning sections, with no memorised facts required'
      ]
    },
    roadmap: ['Create ETS account', 'Book centre or at-home slot', 'Practice with PowerPrep', 'Test in under two hours', 'Send scores to four schools free'],
    prerequisites: 'Open to anyone; most takers are applying to graduate or professional school, but there is no formal eligibility requirement to register.',
    examMeta: {
      questions: '54 multiple-choice plus one Analytical Writing essay',
      time: '1 hour 58 minutes',
      pass: 'No pass mark; programs set their own expectations',
      fee: '$220 (US); international fees vary',
      format: 'Computer-adaptive, multiple-choice and essay',
      admin: 'ETS test centres and at-home online proctoring'
    },
    topics: [
      { name: 'Verbal Reasoning' },
      { name: 'Quantitative Reasoning' },
      { name: 'Analytical Writing' }
    ],
    examEssentials: [
      ['Scoring', 'Verbal and Quant 130 to 170; Writing 0 to 6'],
      ['Score choice', 'Send only the attempt you choose at no extra cost'],
      ['Validity', 'Five years from the test year'],
      ['Retake', 'Once every 21 days, up to five times a year']
    ],
    timeline: [{ stage: 'Study', duration: '4 to 12 weeks' }, { stage: 'Test', duration: 'Under 2 hours' }, { stage: 'Scores', duration: '8 to 10 days' }],
    costBreakdown: { items: [{ item: 'Exam fee (US)', fee: '$220' }, { item: 'Additional score reports', fee: '$35 each' }], total: '$220 to $400', footnote: 'At-home testing may add a small regional fee in some countries.' },
    difficulty: 'Moderate',
    audience: 'Prospective graduate and professional-school applicants',
    time: '4 to 12 weeks typical prep',
    cost: '$220 to $400',
    faqs: [
      { q: 'How hard is the GRE General Test?', a: 'Most takers rate it moderate. The quantitative section is the main hurdle for humanities applicants, while the verbal section challenges non-native English speakers. Adaptive delivery means difficulty tracks your performance.' },
      { q: 'How long should I study?', a: 'A typical plan is four to twelve weeks of regular practice, with full-length PowerPrep exams in the final month to build stamina and timing.' },
      { q: 'Does the GRE expire?', a: 'Scores are valid for five years from the test year, which is usually long enough to cover multiple admission cycles.' },
      { q: 'Is the at-home GRE accepted by schools?', a: 'Yes, the at-home and test-centre versions use identical content and scoring. A small number of programs state a preference, so verify on each admissions page.' },
      { q: 'Can I retake the GRE?', a: 'You may retake it once every 21 days, up to five times in any rolling 12-month period, and choose which score to send to schools.' }
    ],
    summaryPoints: [
      'Computer-adaptive graduate admissions exam of about 1 hour 58 minutes',
      'Verbal and Quant scored 130 to 170; Analytical Writing 0 to 6',
      'Scores valid five years; four free score reports included'
    ],
    relatedSlugs: ['gre-mathematics-subject-test', 'gre-psychology-subject-test'],
    sourceUrl: 'https://www.ets.org/gre/test-takers/general-test/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'gre-literature-in-english-subject-test',
    body: 'ETS',
    tagline: 'A retired English literature subject test formerly used by doctoral programs to gauge reading breadth.',
    description: 'The GRE Literature in English Subject Test was a computer-delivered exam covering British and American literature from the Renaissance to the present, along with literary theory and criticism, that ETS retired in 2021. It is no longer offered, and English doctoral programs now weigh writing samples, course records and the GRE General Test far more heavily than a subject score. Candidates with a still-valid score may report it, but it cannot be retaken.',
    quickAnswer: {
      summary: 'The GRE Literature in English Subject Test was discontinued by ETS in 2021 and is no longer administered. English graduate applicants should rely on writing samples, transcripts and the GRE General Test, since the subject exam cannot be registered for today.',
      advantages: [
        'Once demonstrated wide reading across literary periods and genres',
        'Gave doctoral programs a standardised measure of literary preparation',
        'Scores were reportable for five years after testing',
        'Signalled serious commitment to literary study'
      ]
    },
    roadmap: ['Confirm program requirements', 'Locate any valid prior score', 'Otherwise use the GRE General Test', 'Lead with writing samples'],
    prerequisites: 'An undergraduate literature background was expected; registration had no formal gate.',
    examMeta: {
      questions: 'Approximately 230 multiple-choice',
      time: '2 hours 50 minutes',
      pass: 'No pass mark; scaled 200 to 990',
      fee: 'Discontinued',
      format: 'Multiple-choice, computer-delivered',
      admin: 'ETS (retired)'
    },
    topics: [
      { name: 'British and American Literature' },
      { name: 'Literary Theory and Criticism' },
      { name: 'Cultural and Historical Context' }
    ],
    examEssentials: [
      ['Status', 'Retired in 2021'],
      ['Scoring', 'Scaled 200 to 990 in 10-point increments'],
      ['Validity', 'Scores were reportable for five years'],
      ['Replacement', 'Writing samples and the GRE General Test']
    ],
    timeline: [{ stage: 'Historical administration', duration: 'Through 2021' }],
    costBreakdown: { items: [{ item: 'Former registration fee', fee: '$150' }], total: 'Discontinued', footnote: 'No longer bookable; last fee shown for reference only.' },
    difficulty: 'Challenging',
    audience: 'Former English graduate applicants',
    time: 'Not currently offered',
    cost: 'Discontinued',
    faqs: [
      { q: 'Can I take the GRE Literature in English Subject Test now?', a: 'No. ETS retired it in 2021 alongside the Biology Subject Test, and there is no active replacement for literature applicants.' },
      { q: 'How do English PhD programs evaluate applicants now?', a: 'They focus on the writing sample, letters of recommendation, coursework and the GRE General Test where required, rather than a subject score.' },
      { q: 'Are my old literature scores still valid?', a: 'ETS reports GRE scores for five years. A score from 2021 or later may still be sent if it falls inside that window, but programs rarely ask for it.' },
      { q: 'Which GRE subject tests survive?', a: 'As of 2026 the Mathematics, Physics and Psychology Subject Tests remain active; Literature in English, Biology and Chemistry have all been retired.' }
    ],
    summaryPoints: [
      'Retired by ETS in 2021 and no longer bookable',
      'Once covered British, American and critical-theory literature',
      'English applicants now lead with writing samples and the GRE General Test'
    ],
    relatedSlugs: ['gre-general-test', 'gre-psychology-subject-test'],
    sourceUrl: 'https://www.ets.org/gre/test-takers/subject-tests.html',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'gre-mathematics-subject-test',
    body: 'ETS',
    tagline: 'The active graduate math subject test covering calculus, algebra and advanced topics for PhD applicants.',
    description: 'The GRE Mathematics Subject Test is a computer-delivered exam of about 66 questions spanning calculus, algebra, and additional topics such as discrete math, geometry and topology, used by many doctoral mathematics and statistics programs. It remains one of the few active GRE subject tests after ETS retired Biology, Chemistry and Literature in English. Strong performance signals rigorous undergraduate preparation to competitive graduate departments.',
    quickAnswer: {
      summary: 'The GRE Mathematics Subject Test is an active ETS subject exam of about 66 multiple-choice questions in roughly 2 hours 50 minutes, scored 200 to 990. It is used by mathematics and statistics PhD programs and costs about 150 dollars, with scores valid for five years.',
      advantages: [
        'Required or recommended by many pure and applied math PhD programs',
        'Demonstrates proof-based preparation beyond routine coursework',
        'One standardised metric across very different undergraduate programs',
        'Scored 200 to 990, easy to compare against program norms'
      ]
    },
    roadmap: ['Confirm program subject-test policy', 'Review calculus and algebra', 'Register via ETS', 'Sit the 2h50m exam', 'Send scores to departments'],
    prerequisites: 'A strong undergraduate mathematics background is expected; there is no formal eligibility gate to register.',
    examMeta: {
      questions: 'About 66 multiple-choice',
      time: '2 hours 50 minutes',
      pass: 'No pass mark; scaled 200 to 990',
      fee: '$150',
      format: 'Multiple-choice, computer-delivered',
      admin: 'ETS test centres'
    },
    topics: [
      { name: 'Calculus (single and multivariate)' },
      { name: 'Algebra (linear and abstract)' },
      { name: 'Additional Topics (discrete, geometry, topology, complex)' }
    ],
    examEssentials: [
      ['Scoring', 'Scaled 200 to 990 in 10-point increments'],
      ['Validity', 'Five years from test year'],
      ['Administration', 'Fixed dates, usually in autumn and spring'],
      ['Status', 'Active; one of three remaining GRE subject tests']
    ],
    timeline: [{ stage: 'Study', duration: '2 to 4 months' }, { stage: 'Test', duration: '2h50m' }, { stage: 'Scores', duration: 'weeks' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$150' }, { item: 'Extra score reports', fee: '$35 each' }], total: '$150 to $250', footnote: 'Subject tests run on fixed dates rather than continuous scheduling.' },
    difficulty: 'Hard',
    audience: 'Mathematics and statistics graduate applicants',
    time: '2 to 4 months typical prep',
    cost: '$150 to $250',
    faqs: [
      { q: 'Is the GRE Math Subject Test still offered?', a: 'Yes. Unlike Biology, Chemistry and Literature in English, the Mathematics Subject Test remains active and is still required or recommended by many PhD programs.' },
      { q: 'How should I prepare?', a: 'Focus on calculus and linear and abstract algebra, then review discrete math, real analysis and topology. Timed practice with past formats builds the speed the 66-question limit demands.' },
      { q: 'What score do I need?', a: 'Top PhD programs often look for scaled scores in the high 700s to 900s, but each department publishes its own range and weighs the full application.' },
      { q: 'How long are scores valid?', a: 'GRE subject scores are reportable for five years from the test year, which covers a normal admissions timeline.' }
    ],
    summaryPoints: [
      'Active subject test of about 66 questions in 2 hours 50 minutes',
      'Scored 200 to 990; widely used by math PhD programs',
      'One of only three GRE subject tests still offered by ETS'
    ],
    relatedSlugs: ['gre-general-test', 'gre-physics-subject-test'],
    sourceUrl: 'https://www.ets.org/gre/test-takers/subject-tests/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'gre-physics-subject-test',
    body: 'ETS',
    tagline: 'The active graduate physics subject test covering classical and modern physics for PhD applicants.',
    description: 'The GRE Physics Subject Test is a computer-delivered exam of about 100 multiple-choice questions in roughly 2 hours 50 minutes, covering classical mechanics, electromagnetism, quantum mechanics, thermodynamics and statistical mechanics, and specialised topics such as optics and special relativity. It remains active and is used by many physics and astronomy graduate programs to compare applicants from different institutions.',
    quickAnswer: {
      summary: 'The GRE Physics Subject Test is an active ETS exam of about 100 questions in roughly 2 hours 50 minutes, scored 200 to 990. It is used by physics and astronomy PhD programs, costs about 150 dollars, and scores are valid for five years.',
      advantages: [
        'Expected by many US physics and astronomy PhD programs',
        'Covers the core undergraduate physics canon in one sitting',
        'Offers a standardised comparison across varied programs',
        'Scored 200 to 990 for easy benchmarking'
      ]
    },
    roadmap: ['Check program subject-test policy', 'Review core physics', 'Register via ETS', 'Sit the 2h50m exam', 'Send scores to departments'],
    prerequisites: 'A full undergraduate physics sequence is expected; there is no formal eligibility gate to register.',
    examMeta: {
      questions: 'About 100 multiple-choice',
      time: '2 hours 50 minutes',
      pass: 'No pass mark; scaled 200 to 990',
      fee: '$150',
      format: 'Multiple-choice, computer-delivered',
      admin: 'ETS test centres'
    },
    topics: [
      { name: 'Classical Mechanics' },
      { name: 'Electromagnetism' },
      { name: 'Quantum Mechanics' },
      { name: 'Thermodynamics and Statistical Mechanics' },
      { name: 'Specialised Topics (optics, relativity, lab methods)' }
    ],
    examEssentials: [
      ['Scoring', 'Scaled 200 to 990 in 10-point increments'],
      ['Validity', 'Five years from test year'],
      ['Administration', 'Fixed dates, usually in autumn and spring'],
      ['Status', 'Active; one of three remaining GRE subject tests']
    ],
    timeline: [{ stage: 'Study', duration: '2 to 4 months' }, { stage: 'Test', duration: '2h50m' }, { stage: 'Scores', duration: 'weeks' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$150' }, { item: 'Extra score reports', fee: '$35 each' }], total: '$150 to $250', footnote: 'Subject tests run on fixed dates rather than continuous scheduling.' },
    difficulty: 'Hard',
    audience: 'Physics and astronomy graduate applicants',
    time: '2 to 4 months typical prep',
    cost: '$150 to $250',
    faqs: [
      { q: 'Is the GRE Physics Subject Test still offered?', a: 'Yes. It remains active alongside the Mathematics and Psychology subject tests after ETS retired Biology, Chemistry and Literature in English.' },
      { q: 'What topics are emphasized?', a: 'Classical mechanics, electromagnetism and quantum mechanics make up the bulk, with thermodynamics, statistical mechanics, optics, relativity and laboratory methods rounding out the exam.' },
      { q: 'What score do strong programs expect?', a: 'Competitive physics PhD applicants often aim for scaled scores around 800 or higher, though each department publishes its own expectations.' },
      { q: 'How long are scores valid?', a: 'GRE subject scores are reportable for five years from the test year, which covers a normal admissions timeline.' }
    ],
    summaryPoints: [
      'Active subject test of about 100 questions in 2 hours 50 minutes',
      'Scored 200 to 990; used by physics and astronomy PhD programs',
      'One of only three GRE subject tests still offered by ETS'
    ],
    relatedSlugs: ['gre-general-test', 'gre-mathematics-subject-test'],
    sourceUrl: 'https://www.ets.org/gre/test-takers/subject-tests/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'gre-psychology-subject-test',
    body: 'ETS',
    tagline: 'The active graduate psychology subject test spanning the major subfields of the discipline.',
    description: 'The GRE Psychology Subject Test is a computer-delivered exam of about 144 multiple-choice questions in roughly 2 hours 50 minutes, covering biological, cognitive, social, developmental, clinical and measurement areas of psychology. It remains active and is used by many doctoral programs in psychology and related fields to assess breadth of preparation across subdisciplines.',
    quickAnswer: {
      summary: 'The GRE Psychology Subject Test is an active ETS exam of about 144 questions in roughly 2 hours 50 minutes, scored 200 to 990. It is used by psychology doctoral programs, costs about 150 dollars, and scores are valid for five years.',
      advantages: [
        'Used by many clinical and research psychology PhD programs',
        'Tests breadth across all major psychology subfields',
        'Provides a standardised metric for varied undergraduate programs',
        'Scored 200 to 990 for easy comparison'
      ]
    },
    roadmap: ['Confirm program subject-test policy', 'Review subfield content', 'Register via ETS', 'Sit the 2h50m exam', 'Send scores to programs'],
    prerequisites: 'An undergraduate psychology background is expected; there is no formal eligibility gate to register.',
    examMeta: {
      questions: 'About 144 multiple-choice',
      time: '2 hours 50 minutes',
      pass: 'No pass mark; scaled 200 to 990',
      fee: '$150',
      format: 'Multiple-choice, computer-delivered',
      admin: 'ETS test centres'
    },
    topics: [
      { name: 'Biological Bases of Behavior' },
      { name: 'Cognitive and Social Psychology' },
      { name: 'Developmental and Clinical Psychology' },
      { name: 'Measurement, Methodology and Other Areas' }
    ],
    examEssentials: [
      ['Scoring', 'Scaled 200 to 990 in 10-point increments'],
      ['Validity', 'Five years from test year'],
      ['Administration', 'Fixed dates, usually in autumn and spring'],
      ['Status', 'Active; one of three remaining GRE subject tests']
    ],
    timeline: [{ stage: 'Study', duration: '2 to 4 months' }, { stage: 'Test', duration: '2h50m' }, { stage: 'Scores', duration: 'weeks' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$150' }, { item: 'Extra score reports', fee: '$35 each' }], total: '$150 to $250', footnote: 'Subject tests run on fixed dates rather than continuous scheduling.' },
    difficulty: 'Challenging',
    audience: 'Psychology graduate applicants',
    time: '2 to 4 months typical prep',
    cost: '$150 to $250',
    faqs: [
      { q: 'Is the GRE Psychology Subject Test still offered?', a: 'Yes. It is one of three remaining active GRE subject tests, alongside Mathematics and Physics, after ETS retired Biology, Chemistry and Literature in English.' },
      { q: 'What content is covered?', a: 'The exam spans biological, cognitive, social, developmental and clinical psychology plus measurement and methodology, so broad rather than deep preparation matters most.' },
      { q: 'Do all psychology PhD programs require it?', a: 'No. Policies vary widely; some programs require or recommend it while others have dropped subject tests entirely, so check each admissions page.' },
      { q: 'How long are scores valid?', a: 'GRE subject scores are reportable for five years from the test year, which covers a normal admissions timeline.' }
    ],
    summaryPoints: [
      'Active subject test of about 144 questions in 2 hours 50 minutes',
      'Scored 200 to 990; used by psychology doctoral programs',
      'One of only three GRE subject tests still offered by ETS'
    ],
    relatedSlugs: ['gre-general-test', 'gre-mathematics-subject-test'],
    sourceUrl: 'https://www.ets.org/gre/test-takers/subject-tests/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'toefl-essentials',
    body: 'ETS',
    tagline: 'A shorter, adaptive English test mixing academic and everyday tasks for admissions and visas.',
    description: 'The TOEFL Essentials Test is a roughly 90-minute ETS English proficiency exam that pairs adaptive listening, reading, writing and speaking tasks with a short, unscheduled personal video statement. It is accepted by a narrower set of institutions than the TOEFL iBT, so candidates should confirm recognition before booking. The format blends academic and general-interest content and reports band scores of 1 to 12 for each section.',
    quickAnswer: {
      summary: 'TOEFL Essentials is a shorter, adaptive ETS English test of about 90 minutes covering listening, reading, writing and speaking, plus an unscored video statement. It reports 1 to 12 bands per section and costs roughly 100 to 120 dollars, but is accepted by fewer schools than the TOEFL iBT.',
      advantages: [
        'Shorter and lower-cost than the full TOEFL iBT',
        'Adaptive design keeps questions matched to your level',
        'Mixes academic and everyday English for a realistic measure',
        'Includes an unscored video statement to show personality'
      ]
    },
    roadmap: ['Confirm your institution accepts it', 'Register via ETS', 'Practice with official materials', 'Test in about 90 minutes', 'Send 1 to 12 band scores'],
    prerequisites: 'Open to any English learner; there is no formal eligibility requirement to register.',
    examMeta: {
      questions: 'Adaptive, four sections plus video statement',
      time: 'About 90 minutes',
      pass: 'No pass mark; institutions set their own bands',
      fee: '$100 to $120',
      format: 'Adaptive, computer-delivered with recorded responses',
      admin: 'ETS test centres and at-home online proctoring'
    },
    topics: [
      { name: 'Listening' },
      { name: 'Reading' },
      { name: 'Writing' },
      { name: 'Speaking' }
    ],
    examEssentials: [
      ['Scoring', '1 to 12 bands per section'],
      ['Video statement', 'Unscored, sent to institutions with scores'],
      ['Validity', 'Two years from test date'],
      ['Acceptance', 'Narrower than TOEFL iBT; confirm first']
    ],
    timeline: [{ stage: 'Study', duration: '2 to 6 weeks' }, { stage: 'Test', duration: '~90 minutes' }, { stage: 'Scores', duration: 'about 6 days' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$100 to $120' }, { item: 'Extra score reports', fee: 'per recipient' }], total: '$100 to $150', footnote: 'Exact fee varies by country of testing.' },
    difficulty: 'Moderate',
    audience: 'Students and immigrants needing a shorter English proof',
    time: '2 to 6 weeks typical prep',
    cost: '$100 to $150',
    faqs: [
      { q: 'Is TOEFL Essentials accepted everywhere TOEFL iBT is?', a: 'No. Essentials is accepted by a smaller group of institutions. Always check your university or visa office before booking, since many still prefer the iBT.' },
      { q: 'How is it different from TOEFL iBT?', a: 'Essentials is shorter, adaptive and blends general and academic English, while the iBT is a longer, fixed-form academic test with broader global acceptance.' },
      { q: 'What is the video statement?', a: 'It is a short, unscheduled spoken introduction that is not scored but is sent to institutions alongside your bands to add a human touch.' },
      { q: 'How long are scores valid?', a: 'Like other TOEFL scores, Essentials results are valid for two years from the test date.' }
    ],
    summaryPoints: [
      'Shorter adaptive English test of about 90 minutes',
      'Reports 1 to 12 bands; accepted by fewer schools than iBT',
      'Includes an unscored personal video statement'
    ],
    relatedSlugs: ['toefl-ibt', 'toefl-itp'],
    sourceUrl: 'https://www.ets.org/toefl/test-takers/essentials/',
    reviewed: '2026-08',
    confidence: 'medium'
  }
  ,
  {
    slug: 'toefl-ibt',
    body: 'ETS',
    tagline: 'The leading academic English test for university admission, scored 0 to 120 across four skills.',
    description: 'The TOEFL iBT is ETS internet-based academic English test lasting about two hours and measuring reading, listening, speaking and writing through integrated academic tasks. It is accepted by the vast majority of US universities and by institutions across more than 150 countries for admission and sometimes visa purposes. Each section contributes 0 to 30 points to a total of 0 to 120, and institutions set their own minimum requirements rather than a universal pass mark.',
    quickAnswer: {
      summary: 'The TOEFL iBT is a computer-delivered academic English test of about two hours covering reading, listening, speaking and writing, each scored 0 to 30 for a total of 0 to 120. The US registration fee is about 245 dollars and scores are valid for two years.',
      advantages: [
        'Accepted by most US universities and many schools worldwide',
        'Tests integrated academic skills, not isolated grammar',
        'Delivered at centres and at home with live proctoring',
        'Four free score reports included with registration',
        'Scores valid two years for admission and visa use'
      ]
    },
    roadmap: ['Confirm school minimums', 'Register via ETS', 'Practice with TOEFL Practice Online', 'Test in about two hours', 'Send four free reports'],
    prerequisites: 'Open to any English learner; there is no formal eligibility requirement to register.',
    examMeta: {
      questions: 'About 56 tasks across four sections',
      time: 'About 2 hours',
      pass: 'No pass mark; institutions set their own minimums',
      fee: '$245 (US); varies by country',
      format: 'Computer-delivered, integrated academic tasks',
      admin: 'ETS test centres and at-home online proctoring'
    },
    topics: [
      { name: 'Reading' },
      { name: 'Listening' },
      { name: 'Speaking' },
      { name: 'Writing' }
    ],
    examEssentials: [
      ['Scoring', '0 to 30 per section, 0 to 120 total'],
      ['Validity', 'Two years from test date'],
      ['Score reports', 'Four free; extra reports paid per recipient'],
      ['Retake', 'Every 12 days']
    ],
    timeline: [{ stage: 'Study', duration: '4 to 8 weeks' }, { stage: 'Test', duration: '~2 hours' }, { stage: 'Scores', duration: 'about 6 days' }],
    costBreakdown: { items: [{ item: 'Exam fee (US)', fee: '$245' }, { item: 'Extra score reports', fee: 'per recipient' }], total: '$245 to $350', footnote: 'Fees differ by country; at-home testing may add a small regional charge.' },
    difficulty: 'Moderate',
    audience: 'International applicants to English-medium universities',
    time: '4 to 8 weeks typical prep',
    cost: '$245 to $350',
    faqs: [
      { q: 'How hard is the TOEFL iBT?', a: 'Most test takers find it moderate, with speaking and integrated writing the trickiest parts. A score of 100-plus opens most US universities, while highly selective schools look for 110 or more.' },
      { q: 'How long should I prepare?', a: 'Plan four to eight weeks of regular practice, focusing on note-taking for listening and structured responses for speaking and writing.' },
      { q: 'Does the TOEFL iBT expire?', a: 'Scores are valid for two years from the test date, which is usually enough for one or two admission cycles.' },
      { q: 'Is the at-home TOEFL accepted?', a: 'Yes, the at-home and test-centre versions share content and scoring, though a few institutions state a delivery preference.' },
      { q: 'What score do I need?', a: 'There is no universal pass mark. Each school publishes its own minimum, commonly 80 to 100 for general admission and higher for competitive programs.' }
    ],
    summaryPoints: [
      'Computer-delivered academic English test of about two hours',
      'Scored 0 to 120; most US universities accept it',
      'Results valid two years; four free score reports included'
    ],
    relatedSlugs: ['toefl-essentials', 'toefl-itp'],
    sourceUrl: 'https://www.ets.org/toefl/test-takers/ibt/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'toefl-itp',
    body: 'ETS',
    tagline: 'An institutional paper and digital English test used for placement and progress, not admission.',
    description: 'The TOEFL ITP is an ETS English assessment administered by institutions for internal purposes such as placement, progress monitoring and exit testing, rather than for university admission. It uses academic listening and reading content in paper or digital form and is available in two levels with different lengths and score ranges. Because it is not a secure admission test, candidates register through a school or program rather than directly with ETS.',
    quickAnswer: {
      summary: 'The TOEFL ITP is an institutional English test from ETS used by schools for placement and progress monitoring, not for admission. It has two levels: Level 1 runs about 115 minutes and scores 310 to 677, while Level 2 runs about 70 minutes and scores 200 to 500.',
      advantages: [
        'Lets schools place students quickly into the right level',
        'Low-cost, easy to administer in paper or digital form',
        'Two levels match different proficiency ranges',
        'Familiar academic listening and reading content'
      ]
    },
    roadmap: ['Learn if your school uses ITP', 'Register through the institution', 'Review listening and reading', 'Sit the paper or digital test', 'Receive placement result'],
    prerequisites: 'Open to enrolled or affiliated students; registration is handled by the administering institution, not ETS directly.',
    examMeta: {
      questions: 'Level 1: 140; Level 2: 95 multiple-choice',
      time: 'Level 1: 115 min; Level 2: 70 min',
      pass: 'No pass mark; institutions set cut scores',
      fee: 'Set by the institution',
      format: 'Paper or digital, listening and structure plus reading',
      admin: 'Administered by institutions, not ETS directly'
    },
    topics: [
      { name: 'Listening Comprehension' },
      { name: 'Structure and Written Expression' },
      { name: 'Reading Comprehension' }
    ],
    examEssentials: [
      ['Level 1 scoring', '310 to 677'],
      ['Level 2 scoring', '200 to 500'],
      ['Purpose', 'Placement and progress, not admission'],
      ['Registration', 'Through the administering school']
    ],
    timeline: [{ stage: 'Administered', duration: 'Per school schedule' }, { stage: 'Results', duration: 'Same or next session' }],
    costBreakdown: { items: [{ item: 'Fee', fee: 'Set by institution' }], total: 'Varies', footnote: 'Individual candidates do not pay ETS directly for ITP.' },
    difficulty: 'Moderate',
    audience: 'Students in ITP-using schools and programs',
    time: 'Set by institution',
    cost: 'Varies by institution',
    faqs: [
      { q: 'Can I use TOEFL ITP for university admission?', a: 'Generally no. ITP is intended for internal placement and progress tracking. For admission you usually need the TOEFL iBT or another secure test accepted by the university.' },
      { q: 'What is the difference between Level 1 and Level 2?', a: 'Level 1 is longer (140 questions, 115 minutes) and scores 310 to 677, aimed at higher-proficiency students; Level 2 is shorter (95 questions, 70 minutes) and scores 200 to 500.' },
      { q: 'How do I register?', a: 'You register through the school, language center or exchange program that administers the test; ETS does not sell ITP seats to individuals.' },
      { q: 'How long are ITP scores valid?', a: 'Validity is set by the administering institution, which typically treats the result as current for its own placement decisions for one to two years.' }
    ],
    summaryPoints: [
      'Institutional English test for placement, not admission',
      'Two levels: 310 to 677 and 200 to 500',
      'Registered through a school, not directly with ETS'
    ],
    relatedSlugs: ['toefl-ibt', 'toefl-junior'],
    sourceUrl: 'https://www.ets.org/toefl/test-takers/itp/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'toefl-junior',
    body: 'ETS',
    tagline: 'English proficiency tests for students aged 11 and older, used for placement and progress.',
    description: 'The TOEFL Junior Tests are ETS English assessments for students aged 11 and older, used by secondary schools, language programs and some US boarding schools for placement and monitoring rather than university admission. The Standard test combines listening, language form and meaning, and reading across 126 questions in about 1 hour 55 minutes, scored 600 to 900. Separate Speaking and Writing tests add spoken and written measurement.',
    quickAnswer: {
      summary: 'TOEFL Junior is an ETS English test for ages 11 and up, used mainly for school placement. The Standard version has 126 questions in about 1 hour 55 minutes and scores 600 to 900, with separate Speaking and Writing tests available.',
      advantages: [
        'Built for younger learners aged 11 and older',
        'Helps schools place students into the right English level',
        'Standard, Speaking and Writing forms cover all four skills',
        'Clear 600 to 900 score scale for tracking growth'
      ]
    },
    roadmap: ['Confirm school requirement', 'Register via the school', 'Review the three Standard sections', 'Sit the test', 'Receive placement score'],
    prerequisites: 'Intended for students aged 11 and older; registration is arranged through the participating school or program.',
    examMeta: {
      questions: 'Standard: 126 multiple-choice',
      time: 'Standard: about 1 hour 55 minutes',
      pass: 'No pass mark; schools set their own levels',
      fee: 'Set by the administering school',
      format: 'Paper or digital, multiple-choice plus optional speaking and writing',
      admin: 'Administered by schools and programs'
    },
    topics: [
      { name: 'Listening Comprehension' },
      { name: 'Language Form and Meaning' },
      { name: 'Reading Comprehension' }
    ],
    examEssentials: [
      ['Scoring', '600 to 900 total'],
      ['Optional tests', 'Speaking and Writing available separately'],
      ['Age range', '11 and older'],
      ['Purpose', 'School placement and progress, not university admission']
    ],
    timeline: [{ stage: 'Administered', duration: 'Per school schedule' }, { stage: 'Results', duration: 'Set by school' }],
    costBreakdown: { items: [{ item: 'Fee', fee: 'Set by institution' }], total: 'Varies', footnote: 'Individual candidates do not pay ETS directly for TOEFL Junior.' },
    difficulty: 'Moderate',
    audience: 'Middle and secondary students in English programs',
    time: 'Set by institution',
    cost: 'Varies by institution',
    faqs: [
      { q: 'Is TOEFL Junior for university admission?', a: 'No. It is designed for younger students and used by schools for placement and progress. University admission requires the TOEFL iBT or a similar secure test.' },
      { q: 'What does the Standard test cover?', a: 'It has 126 questions across listening, language form and meaning, and reading, completed in about 1 hour 55 minutes and scored 600 to 900.' },
      { q: 'Are there speaking and writing parts?', a: 'Yes. TOEFL Junior offers separate Speaking and Writing tests so schools can measure all four skills when needed.' },
      { q: 'How do I register?', a: 'Registration is handled by the participating school or language program; ETS does not sell individual seats to the public.' }
    ],
    summaryPoints: [
      'English test for students aged 11 and older',
      'Standard: 126 questions, scored 600 to 900',
      'Used for school placement, not university admission'
    ],
    relatedSlugs: ['toefl-ibt', 'toefl-itp'],
    sourceUrl: 'https://www.ets.org/toefl/test-takers/junior/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'toeic-listening-and-reading',
    body: 'ETS',
    tagline: 'The workplace English test scored 10 to 990 that measures listening and reading ability.',
    description: 'The TOEIC Listening and Reading test is an ETS assessment of everyday business and professional English, with 200 multiple-choice questions across two sections completed in about two hours. It is widely used by employers and job seekers, especially in Asia, to certify workplace English ability, and it scores from 10 to 990. Unlike the TOEFL iBT, it focuses on general and business settings rather than academic study.',
    quickAnswer: {
      summary: 'The TOEIC Listening and Reading test is a 200-question ETS exam in about two hours measuring workplace English, scoring 10 to 990 across listening (5 to 495) and reading (5 to 495). It is used by employers for hiring and promotion rather than university admission.',
      advantages: [
        'Recognised by employers across many industries and regions',
        'Clear 10 to 990 score for benchmarking job candidates',
        'Two-hour, all-multiple-choice format is easy to schedule',
        'Signals practical business English, not just academic skill'
      ]
    },
    roadmap: ['Confirm employer requirement', 'Register via a test center or employer', 'Practice workplace English', 'Sit the two-hour test', 'Receive 10 to 990 score'],
    prerequisites: 'Open to any English learner or employee; there is no formal eligibility gate.',
    examMeta: {
      questions: '200 multiple-choice',
      time: 'About 2 hours',
      pass: 'No pass mark; employers set their own targets',
      fee: 'Set by local ETS licensee or employer',
      format: 'Paper or digital, two-section multiple-choice',
      admin: 'Administered by ETS licensees and employers'
    },
    topics: [
      { name: 'Listening (photographs, conversations, talks)' },
      { name: 'Reading (incomplete sentences, texts, documents)' }
    ],
    examEssentials: [
      ['Scoring', '10 to 990 total; 5 to 495 per section'],
      ['Validity', 'Two years from test date'],
      ['Purpose', 'Workplace hiring, promotion and benchmarking'],
      ['Registration', 'Through centers or employers']
    ],
    timeline: [{ stage: 'Study', duration: '4 to 8 weeks' }, { stage: 'Test', duration: '~2 hours' }, { stage: 'Scores', duration: 'per administrator' }],
    costBreakdown: { items: [{ item: 'Fee', fee: 'Set by local administrator' }], total: 'Varies by country', footnote: 'Pricing is handled by regional ETS licensees, not a single global fee.' },
    difficulty: 'Moderate',
    audience: 'Job seekers and employees needing workplace English proof',
    time: '4 to 8 weeks typical prep',
    cost: 'Varies by country',
    faqs: [
      { q: 'Is TOEIC for jobs or university?', a: 'Primarily for the workplace. Employers use it for hiring, promotion and benchmarking, while universities generally prefer the TOEFL iBT for admission.' },
      { q: 'What score do employers want?', a: 'There is no universal pass mark. Many office roles look for 600 to 700, while roles needing frequent English communication may ask for 800 or more.' },
      { q: 'How is it different from TOEFL?', a: 'TOEIC uses everyday and business English in a two-hour multiple-choice format, whereas TOEFL iBT uses academic English with speaking and writing tasks.' },
      { q: 'How long are TOEIC scores valid?', a: 'Scores are generally considered valid for two years, after which employers may ask for a refreshed result.' }
    ],
    summaryPoints: [
      'Workplace English test of 200 questions in about two hours',
      'Scored 10 to 990; used by employers not universities',
      'Focuses on business and everyday settings, not academia'
    ],
    relatedSlugs: ['toeic-speaking-and-writing', 'toefl-ibt'],
    sourceUrl: 'https://www.ets.org/toeic/test-takers/listening-reading/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'toeic-speaking-and-writing',
    body: 'ETS',
    tagline: 'Companion TOEIC assessments measuring spoken and written business English.',
    description: 'The TOEIC Speaking and Writing Tests are ETS companion assessments that measure productive business English through recorded spoken responses and written tasks. The Speaking test uses 11 tasks in about 20 minutes scored 0 to 200, and the Writing test uses 8 tasks in about 60 minutes also scored 0 to 200. Together with the Listening and Reading test they give a full picture of workplace English ability.',
    quickAnswer: {
      summary: 'The TOEIC Speaking and Writing tests are ETS companion exams measuring productive business English. Speaking has 11 tasks in about 20 minutes scored 0 to 200, and Writing has 8 tasks in about 60 minutes also scored 0 to 200.',
      advantages: [
        'Measures the spoken and written skills the Listening and Reading test misses',
        'Realistic business scenarios such as email and voice mail',
        'Each section scored 0 to 200 for clear benchmarking',
        'Useful for roles needing active English communication'
      ]
    },
    roadmap: ['Confirm which sections employers need', 'Register via a center', 'Practice spoken and written tasks', 'Complete both sections', 'Receive 0 to 200 scores'],
    prerequisites: 'Open to any English learner or employee; no formal eligibility gate.',
    examMeta: {
      questions: 'Speaking: 11 tasks; Writing: 8 tasks',
      time: 'Speaking: ~20 min; Writing: ~60 min',
      pass: 'No pass mark; employers set targets',
      fee: 'Set by local ETS licensee or employer',
      format: 'Computer-delivered recorded responses and typing',
      admin: 'Administered by ETS licensees and employers'
    },
    topics: [
      { name: 'Speaking (read-aloud, responses, conversations)' },
      { name: 'Writing (email, opinion essay, response)' }
    ],
    examEssentials: [
      ['Scoring', '0 to 200 per section'],
      ['Validity', 'Two years from test date'],
      ['Companion', 'Pairs with TOEIC Listening and Reading'],
      ['Delivery', 'Computer with headset and typed responses']
    ],
    timeline: [{ stage: 'Study', duration: '4 to 8 weeks' }, { stage: 'Test', duration: '~80 minutes total' }, { stage: 'Scores', duration: 'per administrator' }],
    costBreakdown: { items: [{ item: 'Fee', fee: 'Set by local administrator' }], total: 'Varies by country', footnote: 'Pricing is handled by regional ETS licensees.' },
    difficulty: 'Moderate',
    audience: 'Employees needing proof of spoken and written English',
    time: '4 to 8 weeks typical prep',
    cost: 'Varies by country',
    faqs: [
      { q: 'Should I take Speaking and Writing or just Listening and Reading?', a: 'If a role needs active communication, employers may ask for all four skills. The Speaking and Writing tests cover production that the multiple-choice test cannot.' },
      { q: 'How are the tests scored?', a: 'Speaking and Writing are each scored 0 to 200 by trained raters using ETS rubrics, separate from the 10 to 990 Listening and Reading score.' },
      { q: 'How long do they take?', a: 'Speaking is about 20 minutes with 11 tasks and Writing about 60 minutes with 8 tasks; they are usually scheduled separately.' },
      { q: 'Are scores valid as long as TOEIC L and R?', a: 'Yes, Speaking and Writing results are also generally valid for two years from the test date.' }
    ],
    summaryPoints: [
      'Companion TOEIC tests for spoken and written business English',
      'Speaking 0 to 200; Writing 0 to 200',
      'Fills the production-skills gap left by the multiple-choice test'
    ],
    relatedSlugs: ['toeic-listening-and-reading', 'toefl-ibt'],
    sourceUrl: 'https://www.ets.org/toeic/test-takers/speaking-writing/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ib-career-related-programme',
    body: 'International Baccalaureate Organization',
    tagline: 'An IB framework for 16 to 19 year olds blending Diploma courses with career study and a reflective core.',
    description: 'The IB Career-related Programme (CP) is a framework for students aged 16 to 19 that combines at least two Diploma Programme courses with a career-related study strand and a four-component core. The core covers personal and professional skills, service learning, language development and a reflective project, helping students build both academic and workplace readiness. It is offered by authorised IB World Schools and leads to an IB CP certificate rather than the full Diploma.',
    quickAnswer: {
      summary: 'The IB Career-related Programme is a 16 to 19 framework that pairs at least two IB Diploma courses with a career-related study and a four-part core of personal and professional skills, service learning, language development and a reflective project. It is delivered by IB World Schools and results in an IB CP certificate.',
      advantages: [
        'Blends rigorous IB study with a practical career focus',
        'Four-component core builds professional and life skills',
        'Recognised by universities, especially in applied fields',
        'Suited to students who want both academics and a vocation'
      ]
    },
    roadmap: ['Join an IB World School offering CP', 'Choose two DP courses plus career study', 'Complete the four core components', 'Sit DP exams and submit core work', 'Earn the IB CP certificate'],
    prerequisites: 'Open to students aged 16 to 19 at an authorised IB World School; the school sets entry to its CP cohort.',
    examMeta: {
      questions: 'Two DP courses plus career study and core',
      time: 'Two-year programme',
      pass: 'Set by the IBO and the school; DP courses graded 1 to 7',
      fee: 'Set by the school',
      format: 'Coursework, eAssessment and external exams',
      admin: 'Administered by IB World Schools'
    },
    topics: [
      { name: 'Diploma Programme Courses (at least two)' },
      { name: 'Career-related Study' },
      { name: 'Personal and Professional Skills' },
      { name: 'Service Learning' },
      { name: 'Language Development' },
      { name: 'Reflective Project' }
    ],
    examEssentials: [
      ['Ages', '16 to 19'],
      ['Credential', 'IB CP certificate'],
      ['Core', 'Four components plus career study'],
      ['Delivery', 'Through an IB World School only']
    ],
    timeline: [{ stage: 'Programme', duration: 'Two years' }, { stage: 'Results', duration: 'July or January session' }],
    costBreakdown: { items: [{ item: 'School and exam fees', fee: 'Set by school' }], total: 'Varies by school', footnote: 'The IBO bills schools; students pay school-set fees.' },
    difficulty: 'Moderate',
    audience: 'Teens wanting academics with a career focus',
    time: 'Two years',
    cost: 'Varies by school',
    faqs: [
      { q: 'How is the CP different from the Diploma?', a: 'The Diploma requires six subjects plus the core for up to 45 points, while the CP pairs two DP courses with a career strand and a distinct four-component core, ending in a CP certificate.' },
      { q: 'Can CP students still go to university?', a: 'Yes. Many universities recognise the CP, and the DP courses within it can earn credit, though the CP itself is less universally credited than the full Diploma.' },
      { q: 'What is the reflective project?', a: 'It is an in-depth piece of work, often an essay, in which the student reflects on an ethical dilemma linked to their career-related study.' },
      { q: 'Who can enrol?', a: 'Students aged 16 to 19 at an authorised IB World School that offers the CP; the school manages admission to the programme.' }
    ],
    summaryPoints: [
      'IB framework for ages 16 to 19 mixing DP courses and career study',
      'Four-part core plus reflective project and service learning',
      'Leads to an IB CP certificate, not the full Diploma'
    ],
    relatedSlugs: ['ib-diploma-programme', 'ib-creativity-activity-service'],
    sourceUrl: 'https://www.ibo.org/programmes/career-related-programme/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ib-creativity-activity-service',
    body: 'International Baccalaureate Organization',
    tagline: 'The mandatory ungraded Diploma core where students build a portfolio of experience outside the classroom.',
    description: 'Creativity, Activity, Service (CAS) is the mandatory, ungraded core component of the IB Diploma Programme, requiring students to engage in a sustained portfolio of creative, physical and service experiences over about 18 months. It is assessed only as complete or not, against seven learning outcomes, and is a graduation requirement rather than a scored subject. CAS balances academic study with real-world engagement and reflection.',
    quickAnswer: {
      summary: 'CAS is the required, ungraded core of the IB Diploma Programme, completed over roughly 18 months through creativity, activity and service experiences that meet seven learning outcomes. It is pass or fail for Diploma purposes and is not scored toward the 45 points.',
      advantages: [
        'Develops initiative, service mindset and well-being',
        'Ungraded, so it rewards genuine engagement over marks',
        'Builds a reflective portfolio valued by universities',
        'Compulsory for the Diploma but flexible in format'
      ]
    },
    roadmap: ['Plan a balanced CAS programme', 'Engage experiences over 18 months', 'Meet the seven outcomes', 'Reflect in a portfolio', 'Get signed off by your CAS coordinator'],
    prerequisites: 'Required of all Diploma Programme students at an IB World School; there is no separate registration.',
    examMeta: {
      questions: 'Portfolio against seven learning outcomes',
      time: 'About 18 months',
      pass: 'Complete or not; ungraded',
      fee: 'Included in DP enrolment',
      format: 'Experiential with reflections and coordinator review',
      admin: 'Administered by IB World Schools'
    },
    topics: [
      { name: 'Creativity' },
      { name: 'Activity' },
      { name: 'Service' },
      { name: 'Reflection and the seven learning outcomes' }
    ],
    examEssentials: [
      ['Status', 'Mandatory DP core, ungraded'],
      ['Duration', 'About 18 months'],
      ['Evidence', 'Portfolio meeting seven outcomes'],
      ['Outcome', 'Complete or incomplete for the Diploma']
    ],
    timeline: [{ stage: 'Engagement', duration: '~18 months' }, { stage: 'Review', duration: 'End of DP' }],
    costBreakdown: { items: [{ item: 'Cost', fee: 'Included in DP fees' }], total: 'None separate', footnote: 'No standalone fee; covered by school DP charges.' },
    difficulty: 'Easy',
    audience: 'All IB Diploma Programme students',
    time: 'About 18 months',
    cost: 'Included in DP enrolment',
    faqs: [
      { q: 'Does CAS affect my Diploma points?', a: 'No. CAS is ungraded and does not add to the 45 points, but you must complete it to be awarded the Diploma at all.' },
      { q: 'What are the seven learning outcomes?', a: 'They cover areas such as identifying strengths, undertaking new challenges, planning and initiating activities, working with others, showing perseverance, global engagement and ethical reflection.' },
      { q: 'How is CAS assessed?', a: 'Your coordinator reviews your portfolio and reflections against the seven outcomes and marks it complete or not; there is no numerical score.' },
      { q: 'Can CAS be done online or abroad?', a: 'Yes, experiences can be local, online or international, provided they are sustained, balanced and genuinely reflected upon.' }
    ],
    summaryPoints: [
      'Mandatory, ungraded Diploma core completed over 18 months',
      'Creativity, activity and service against seven outcomes',
      'Required to be awarded the IB Diploma'
    ],
    relatedSlugs: ['ib-diploma-programme', 'ib-theory-of-knowledge'],
    sourceUrl: 'https://www.ibo.org/programmes/diploma-programme/curriculum/cas/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ib-diploma-programme',
    body: 'International Baccalaureate Organization',
    tagline: 'The two-year pre-university qualification scored out of 45 and accepted by universities worldwide.',
    description: 'The IB Diploma Programme (DP) is a two-year pre-university course for students aged 16 to 19 taken at authorised IB World Schools. Candidates study six subjects, one from each of groups 1 to 5 plus a sixth subject or an extra from groups 1 to 4, alongside the core of Theory of Knowledge, the Extended Essay and Creativity Activity Service. Final grades of 1 to 7 per subject combine with the core bonus for a maximum of 45 points, and many US universities grant credit for Higher Level results.',
    quickAnswer: {
      summary: 'The IB Diploma Programme is a two-year course for ages 16 to 19 combining six subjects with the Theory of Knowledge, Extended Essay and CAS core. Each subject scores 1 to 7 for a maximum of 45 points, and a pass requires at least 24 points with conditions met.',
      advantages: [
        'Globally recognised pre-university qualification',
        'Breadth across six subjects plus a reflective core',
        'Higher Level work often earns US university credit',
        'Develops research, writing and critical-thinking skills'
      ]
    },
    roadmap: ['Join an IB World School', 'Choose six subjects and levels', 'Complete the three-part core', 'Sit May or November exams', 'Receive up to 45 points'],
    prerequisites: 'Open to students aged 16 to 19 at an authorised IB World School; the school sets admission to its DP cohort.',
    examMeta: {
      questions: 'Six subjects plus core; external and internal assessment',
      time: 'Two years',
      pass: 'Minimum 24 points with IBO conditions',
      fee: 'Set by the school',
      format: 'Written exams, coursework and eAssessment',
      admin: 'Administered by IB World Schools'
    },
    topics: [
      { name: 'Group 1: Studies in Language and Literature' },
      { name: 'Group 2: Language Acquisition' },
      { name: 'Group 3: Individuals and Societies' },
      { name: 'Group 4: Sciences' },
      { name: 'Group 5: Mathematics' },
      { name: 'Group 6: The Arts (or extra subject)' },
      { name: 'Core: TOK, Extended Essay, CAS' }
    ],
    examEssentials: [
      ['Scoring', '1 to 7 per subject, 45 maximum with core'],
      ['Pass mark', '24 points with conditions'],
      ['Levels', 'Three or four subjects at Higher Level'],
      ['Ages', '16 to 19']
    ],
    timeline: [{ stage: 'Programme', duration: 'Two years' }, { stage: 'Results', duration: 'July or January' }],
    costBreakdown: { items: [{ item: 'Registration and exam fees', fee: 'Set by school' }], total: 'Varies by school', footnote: 'The IBO bills schools; students pay school-set fees that vary widely by country.' },
    difficulty: 'Hard',
    audience: 'Pre-university students aged 16 to 19',
    time: 'Two years',
    cost: 'Varies by school',
    faqs: [
      { q: 'How many points do I need to pass?', a: 'The Diploma pass is at least 24 points subject to conditions: no grade 1, no more than two grade 2s at Higher Level, and completion of the core. The maximum is 45.' },
      { q: 'Do US colleges give credit for IB?', a: 'Many US universities award credit or advanced standing for Higher Level subjects scored 5 to 7, though policy varies by institution and subject.' },
      { q: 'What is the difference between SL and HL?', a: 'Standard Level covers the subject at a baseline depth, while Higher Level goes deeper with more teaching hours and assessment; most students take three HL and three SL subjects.' },
      { q: 'How long is the Diploma valid?', a: 'The Diploma is a final qualification and does not expire, though universities may set their own rules on how recent results must be for credit.' }
    ],
    summaryPoints: [
      'Two-year pre-university course for ages 16 to 19',
      'Six subjects plus TOK, EE and CAS core, max 45 points',
      'Widely accepted; HL results often earn US credit'
    ],
    relatedSlugs: ['ib-career-related-programme', 'ib-theory-of-knowledge'],
    sourceUrl: 'https://www.ibo.org/programmes/diploma-programme/',
    reviewed: '2026-08',
    confidence: 'high'
  }
  ,
  {
    slug: 'ib-extended-essay',
    body: 'International Baccalaureate Organization',
    tagline: 'The externally assessed 4000-word research paper that, with TOK, adds up to three Diploma points.',
    description: 'The Extended Essay (EE) is an independent, externally assessed research paper of up to 4000 words that every IB Diploma candidate completes in one of the approved subject areas. It develops university-style research and writing skills and, together with Theory of Knowledge, contributes up to three bonus points toward the 45-point Diploma total. The essay is marked against a 34-point rubric and converted to a grade of A to E.',
    quickAnswer: {
      summary: 'The IB Extended Essay is a self-directed research paper of up to 4000 words in a chosen subject, marked out of 34 and graded A to E. Combined with Theory of Knowledge it can add up to three points to the 45-point Diploma, and it is compulsory for Diploma candidates.',
      advantages: [
        'Builds genuine university-level research and citation skills',
        'Lets students explore a passion subject in depth',
        'Contributes up to three bonus Diploma points with TOK',
        'Produces a writing sample valued by university admissions'
      ]
    },
    roadmap: ['Pick a subject and research question', 'Meet with your supervisor', 'Draft and cite rigorously', 'Submit the 4000-word essay', 'Receive an A to E grade'],
    prerequisites: 'Required of all Diploma Programme students; the school assigns a supervisor and subject area.',
    examMeta: {
      questions: 'One essay up to 4000 words',
      time: 'Completed across the two-year DP',
      pass: 'Graded A to E; combined with TOK for bonus points',
      fee: 'Included in DP enrolment',
      format: 'Independent research essay with supervisor',
      admin: 'Administered by IB World Schools, externally marked'
    },
    topics: [
      { name: 'Research question and methodology' },
      { name: 'Critical analysis and argument' },
      { name: 'Use and citation of sources' },
      { name: 'Reflection on the process' }
    ],
    examEssentials: [
      ['Length', 'Maximum 4000 words'],
      ['Marking', 'Out of 34, graded A to E'],
      ['Bonus', 'Up to 3 points with TOK'],
      ['Status', 'Compulsory DP core component']
    ],
    timeline: [{ stage: 'Research and writing', duration: 'Across two years' }, { stage: 'Results', duration: 'July or January' }],
    costBreakdown: { items: [{ item: 'Cost', fee: 'Included in DP fees' }], total: 'None separate', footnote: 'No standalone fee; covered by school DP charges.' },
    difficulty: 'Moderate',
    audience: 'All IB Diploma Programme students',
    time: 'Across the two-year Diploma',
    cost: 'Included in DP enrolment',
    faqs: [
      { q: 'How many points can the EE add?', a: 'The EE is marked out of 34 and graded A to E. Together with Theory of Knowledge it contributes a matrix-based bonus of 0 to 3 points toward the 45-point Diploma.' },
      { q: 'What subjects can I write it in?', a: 'You may choose from the approved DP subject areas, and the essay must reflect that discipline research method rather than a general topic.' },
      { q: 'How long is the Extended Essay?', a: 'The limit is 4000 words including the body but excluding the bibliography and certain front matter; going over risks penalty.' },
      { q: 'Do I need a supervisor?', a: 'Yes. Your school assigns a supervisor who guides the process through check-ins, but the work must be independently produced and referenced.' }
    ],
    summaryPoints: [
      'Independent research essay of up to 4000 words',
      'Marked out of 34 and graded A to E',
      'With TOK contributes up to three Diploma bonus points'
    ],
    relatedSlugs: ['ib-theory-of-knowledge', 'ib-diploma-programme'],
    sourceUrl: 'https://www.ibo.org/programmes/diploma-programme/curriculum/extended-essay/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ib-group-1-studies-in-language-and-literature',
    body: 'International Baccalaureate Organization',
    tagline: 'The DP subject group for deep study of literature and language in a student best language.',
    description: 'IB Group 1, Studies in Language and Literature, is the first Diploma subject group and covers Language A: Literature and Language A: Language and Literature, studied in a student best or strongest academic language. Offered at Standard and Higher Level, it develops advanced literary analysis, critical reading and academic writing. Performance combines external examinations with internally assessed oral and written coursework.',
    quickAnswer: {
      summary: 'IB Group 1 is the Diploma subject group for literature and language study in a student strongest language, offered as Language A Literature or Language and Literature at Standard or Higher Level. It builds literary analysis and academic writing assessed through exams and coursework.',
      advantages: [
        'Deepens literary and analytical reading in a first language',
        'Strong preparation for university humanities writing',
        'Available at Standard and Higher Level',
        'Two course routes suit different interests'
      ]
    },
    roadmap: ['Choose Literature or Language and Literature', 'Pick Standard or Higher Level', 'Study set texts and concepts', 'Complete orals and written coursework', 'Sit the external papers'],
    prerequisites: 'Taken by Diploma candidates as one of six subjects; the school offers the languages available.',
    examMeta: {
      questions: 'External papers plus internal oral and written tasks',
      time: 'Two-year course',
      pass: 'Graded 1 to 7 per subject',
      fee: 'Set by the school',
      format: 'Exams, oral commentary and coursework',
      admin: 'Administered by IB World Schools'
    },
    topics: [
      { name: 'Literary analysis and close reading' },
      { name: 'Texts across genres, cultures and periods' },
      { name: 'Language in cultural context' },
      { name: 'Oral and written production' }
    ],
    examEssentials: [
      ['Levels', 'Standard and Higher'],
      ['Courses', 'Language A Literature; Language A Language and Literature'],
      ['Assessment', 'Exams plus internal oral and written work'],
      ['Score', '1 to 7 per subject']
    ],
    timeline: [{ stage: 'Course', duration: 'Two years' }, { stage: 'Results', duration: 'July or January' }],
    costBreakdown: { items: [{ item: 'Subject and exam fees', fee: 'Set by school' }], total: 'Varies by school', footnote: 'The IBO bills schools; students pay school-set fees.' },
    difficulty: 'Moderate',
    audience: 'Diploma students studying their best language',
    time: 'Two years',
    cost: 'Varies by school',
    faqs: [
      { q: 'What is the difference between the two Group 1 courses?', a: 'Literature focuses on literary texts, while Language and Literature adds non-literary and media texts and the role of language in context; both run at SL and HL.' },
      { q: 'Does Group 1 have an oral component?', a: 'Yes. An internally assessed individual oral is part of the assessment for both courses, alongside written coursework and external papers.' },
      { q: 'Can Group 1 be in a language other than English?', a: 'Yes. It is studied in a student strongest academic language, so schools offer it in many languages where demand exists.' },
      { q: 'How is it scored?', a: 'Like all DP subjects, Group 1 is graded 1 to 7, contributing to the 45-point Diploma maximum.' }
    ],
    summaryPoints: [
      'DP subject group for literature and language in a first language',
      'Two courses at Standard and Higher Level',
      'Assessed by exams, oral and written coursework, graded 1 to 7'
    ],
    relatedSlugs: ['ib-group-2-language-acquisition', 'ib-diploma-programme'],
    sourceUrl: 'https://www.ibo.org/programmes/diploma-programme/curriculum/language-and-literature/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ib-group-2-language-acquisition',
    body: 'International Baccalaureate Organization',
    tagline: 'The DP subject group for learning an additional language, from beginner to near-native.',
    description: 'IB Group 2, Language Acquisition, is the Diploma subject group for additional-language study, offered as Language B for students with prior experience, Language ab initio for beginners, and Classical languages such as Latin and Ancient Greek. It develops communicative competence and cultural understanding, with assessment blending exams, oral interviews and writing at Standard or Higher Level.',
    quickAnswer: {
      summary: 'IB Group 2 is the Diploma language-acquisition group, with Language B for experienced learners, ab initio for beginners and Classical languages for Latin or Greek. It builds communication and cultural understanding through exams and orals, graded 1 to 7.',
      advantages: [
        'Routes for every level from beginner to advanced',
        'Builds real communicative competence, not just grammar',
        'Classical option suits students of Latin or Greek',
        'Strengthens university language and cultural study'
      ]
    },
    roadmap: ['Choose ab initio, Language B or Classical', 'Pick Standard or Higher Level', 'Build speaking and writing skills', 'Complete oral and written tasks', 'Sit the external papers'],
    prerequisites: 'Taken by Diploma candidates as one of six subjects; level choice depends on prior study.',
    examMeta: {
      questions: 'External papers, oral interview and writing',
      time: 'Two-year course',
      pass: 'Graded 1 to 7 per subject',
      fee: 'Set by the school',
      format: 'Exams, oral and written assessment',
      admin: 'Administered by IB World Schools'
    },
    topics: [
      { name: 'Communicative language use' },
      { name: 'Cultural and thematic contexts' },
      { name: 'Receptive and productive skills' },
      { name: 'Classical language reading (Latin, Greek)' }
    ],
    examEssentials: [
      ['Routes', 'ab initio, Language B, Classical languages'],
      ['Levels', 'Standard and Higher'],
      ['Assessment', 'Exams plus oral and written work'],
      ['Score', '1 to 7 per subject']
    ],
    timeline: [{ stage: 'Course', duration: 'Two years' }, { stage: 'Results', duration: 'July or January' }],
    costBreakdown: { items: [{ item: 'Subject and exam fees', fee: 'Set by school' }], total: 'Varies by school', footnote: 'The IBO bills schools; students pay school-set fees.' },
    difficulty: 'Moderate',
    audience: 'Diploma students learning an additional language',
    time: 'Two years',
    cost: 'Varies by school',
    faqs: [
      { q: 'What is the difference between ab initio and Language B?', a: 'Ab initio is for true beginners with little prior study, while Language B is for students who already have some experience of the language; both come in SL, and B also in HL.' },
      { q: 'Are Classical languages part of Group 2?', a: 'Yes. Latin and Ancient Greek are offered as Classical languages within Group 2 for students focused on reading original texts.' },
      { q: 'Is there a speaking test?', a: 'Language B and ab initio include an internally assessed oral, whereas Classical languages are assessed through reading and writing rather than speech.' },
      { q: 'How is Group 2 scored?', a: 'It is graded 1 to 7 like every DP subject, contributing to the 45-point Diploma maximum.' }
    ],
    summaryPoints: [
      'DP group for additional languages at all levels',
      'Ab initio, Language B and Classical language routes',
      'Assessed by exams and orals, graded 1 to 7'
    ],
    relatedSlugs: ['ib-group-1-studies-in-language-and-literature', 'ib-diploma-programme'],
    sourceUrl: 'https://www.ibo.org/programmes/diploma-programme/curriculum/language-acquisition/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ib-group-3-individuals-and-societies',
    body: 'International Baccalaureate Organization',
    tagline: 'The DP humanities group covering history, economics, psychology and the social sciences.',
    description: 'IB Group 3, Individuals and Societies, is the Diploma humanities group that includes history, economics, geography, psychology, global politics, philosophy and digital society, among others. It develops critical thinking about people, societies and systems through case study, essay writing and data analysis, assessed by external papers and internal assessment at Standard or Higher Level. It is a required group for most Diploma candidates.',
    quickAnswer: {
      summary: 'IB Group 3 is the Diploma humanities group covering history, economics, psychology, geography, global politics, philosophy and digital society. Students build analytical and essay skills assessed by exams and internal assessment, graded 1 to 7 at Standard or Higher Level.',
      advantages: [
        'Wide choice of social-science and humanities subjects',
        'Builds essay, case-study and data-analysis skills',
        'Strong foundation for university social sciences',
        'Available at Standard and Higher Level'
      ]
    },
    roadmap: ['Pick a Group 3 subject', 'Choose Standard or Higher Level', 'Study cases and concepts', 'Complete internal assessment', 'Sit the external papers'],
    prerequisites: 'Taken by Diploma candidates as one of six subjects; the school offers the subjects available.',
    examMeta: {
      questions: 'External papers plus internal assessment',
      time: 'Two-year course',
      pass: 'Graded 1 to 7 per subject',
      fee: 'Set by the school',
      format: 'Exams and internally assessed work',
      admin: 'Administered by IB World Schools'
    },
    topics: [
      { name: 'History' },
      { name: 'Economics' },
      { name: 'Psychology' },
      { name: 'Geography, Global Politics, Philosophy, Digital Society' }
    ],
    examEssentials: [
      ['Subjects', 'History, economics, psychology and more'],
      ['Levels', 'Standard and Higher'],
      ['Assessment', 'Exams plus internal assessment'],
      ['Score', '1 to 7 per subject']
    ],
    timeline: [{ stage: 'Course', duration: 'Two years' }, { stage: 'Results', duration: 'July or January' }],
    costBreakdown: { items: [{ item: 'Subject and exam fees', fee: 'Set by school' }], total: 'Varies by school', footnote: 'The IBO bills schools; students pay school-set fees.' },
    difficulty: 'Moderate',
    audience: 'Diploma students interested in the social sciences',
    time: 'Two years',
    cost: 'Varies by school',
    faqs: [
      { q: 'Which subjects are in Group 3?', a: 'The group includes history, economics, geography, psychology, global politics, philosophy, digital society and related offerings, depending on what the school provides.' },
      { q: 'Is an internal assessment required?', a: 'Yes. Each Group 3 subject has an internally assessed component, such as a history essay or an economics commentary, alongside external papers.' },
      { q: 'Can I take two Group 3 subjects?', a: 'Yes. A common pattern is one Group 3 subject plus another subject from a different group, but students may take more than one Group 3 subject if they wish.' },
      { q: 'How is Group 3 scored?', a: 'It is graded 1 to 7 like all DP subjects, contributing to the 45-point Diploma maximum.' }
    ],
    summaryPoints: [
      'DP humanities group: history, economics, psychology and more',
      'Builds essay and data-analysis skills',
      'Assessed by exams and internal assessment, graded 1 to 7'
    ],
    relatedSlugs: ['ib-group-4-sciences', 'ib-diploma-programme'],
    sourceUrl: 'https://www.ibo.org/programmes/diploma-programme/curriculum/individuals-and-societies/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ib-group-4-sciences',
    body: 'International Baccalaureate Organization',
    tagline: 'The DP experimental sciences group spanning biology, chemistry, physics and more.',
    description: 'IB Group 4, Sciences, is the Diploma experimental-sciences group covering biology, chemistry, physics, computer science, design technology and sports, exercise and health science. It emphasises practical investigation and the Group 4 project, an interdisciplinary collaboration, alongside formal exams and individual internal assessment. Subjects are offered at Standard and Higher Level and graded 1 to 7.',
    quickAnswer: {
      summary: 'IB Group 4 is the Diploma sciences group with biology, chemistry, physics, computer science, design technology and sports science. It combines lab work and a collaborative Group 4 project with exams and internal assessment, graded 1 to 7 at Standard or Higher Level.',
      advantages: [
        'Covers the full range of experimental sciences',
        'Strong practical and investigative laboratory focus',
        'Group 4 project builds cross-discipline teamwork',
        'Available at Standard and Higher Level'
      ]
    },
    roadmap: ['Choose a Group 4 subject', 'Pick Standard or Higher Level', 'Do practical and project work', 'Complete internal assessment', 'Sit the external papers'],
    prerequisites: 'Taken by Diploma candidates as one of six subjects; the school offers available sciences.',
    examMeta: {
      questions: 'External papers, practical work and internal assessment',
      time: 'Two-year course',
      pass: 'Graded 1 to 7 per subject',
      fee: 'Set by the school',
      format: 'Exams, lab work and internally assessed investigation',
      admin: 'Administered by IB World Schools'
    },
    topics: [
      { name: 'Biology' },
      { name: 'Chemistry' },
      { name: 'Physics' },
      { name: 'Computer Science, Design Technology, Sports Science' }
    ],
    examEssentials: [
      ['Subjects', 'Biology, chemistry, physics and more'],
      ['Levels', 'Standard and Higher'],
      ['Project', 'Collaborative Group 4 project'],
      ['Score', '1 to 7 per subject']
    ],
    timeline: [{ stage: 'Course', duration: 'Two years' }, { stage: 'Results', duration: 'July or January' }],
    costBreakdown: { items: [{ item: 'Subject and exam fees', fee: 'Set by school' }], total: 'Varies by school', footnote: 'The IBO bills schools; students pay school-set fees.' },
    difficulty: 'Moderate',
    audience: 'Diploma students pursuing experimental sciences',
    time: 'Two years',
    cost: 'Varies by school',
    faqs: [
      { q: 'What subjects are in Group 4?', a: 'The group includes biology, chemistry, physics, computer science, design technology and sports, exercise and health science, depending on school provision.' },
      { q: 'What is the Group 4 project?', a: 'It is a collaborative, interdisciplinary practical activity that all Group 4 students complete together, emphasising teamwork and scientific communication rather than a graded score.' },
      { q: 'Is there lab work?', a: 'Yes. Practical investigation and lab skills are central, and an individual internal assessment is based on student-designed experimental work.' },
      { q: 'How is Group 4 scored?', a: 'Each subject is graded 1 to 7 like all DP subjects, contributing to the 45-point Diploma maximum.' }
    ],
    summaryPoints: [
      'DP experimental-sciences group with six subject options',
      'Emphasises lab work and a collaborative Group 4 project',
      'Assessed by exams and internal assessment, graded 1 to 7'
    ],
    relatedSlugs: ['ib-group-3-individuals-and-societies', 'ib-diploma-programme'],
    sourceUrl: 'https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ib-group-5-mathematics',
    body: 'International Baccalaureate Organization',
    tagline: 'The DP mathematics group split into Analysis and Approaches and Applications and Interpretation.',
    description: 'IB Group 5, Mathematics, is the Diploma mathematics group offered as Mathematics: Analysis and Approaches (AA) and Mathematics: Applications and Interpretation (AI), each at Standard and Higher Level. AA favours algebraic and theoretical depth, while AI emphasises modelling and technology, letting students match the course to their university plans. Both are graded 1 to 7 through exams and internal assessment.',
    quickAnswer: {
      summary: 'IB Group 5 offers two mathematics courses, Analysis and Approaches and Applications and Interpretation, each at Standard and Higher Level. AA suits theoretical and engineering paths, AI suits social and natural sciences using modelling, both graded 1 to 7 by exams and internal assessment.',
      advantages: [
        'Two routes match different university ambitions',
        'AA gives algebraic depth; AI gives practical modelling',
        'Both use technology and internal assessment',
        'Available at Standard and Higher Level'
      ]
    },
    roadmap: ['Choose AA or AI', 'Pick Standard or Higher Level', 'Build skills and use technology', 'Complete the internal assessment', 'Sit the external papers'],
    prerequisites: 'Taken by Diploma candidates as one of six subjects; the school advises on level and route.',
    examMeta: {
      questions: 'External papers plus internal assessment',
      time: 'Two-year course',
      pass: 'Graded 1 to 7 per subject',
      fee: 'Set by the school',
      format: 'Exams and internally assessed mathematical exploration',
      admin: 'Administered by IB World Schools'
    },
    topics: [
      { name: 'Analysis and Approaches (algebra, calculus, proof)' },
      { name: 'Applications and Interpretation (modelling, statistics, tech)' }
    ],
    examEssentials: [
      ['Courses', 'AA and AI'],
      ['Levels', 'Standard and Higher'],
      ['Assessment', 'Exams plus mathematical exploration'],
      ['Score', '1 to 7 per subject']
    ],
    timeline: [{ stage: 'Course', duration: 'Two years' }, { stage: 'Results', duration: 'July or January' }],
    costBreakdown: { items: [{ item: 'Subject and exam fees', fee: 'Set by school' }], total: 'Varies by school', footnote: 'The IBO bills schools; students pay school-set fees.' },
    difficulty: 'Moderate',
    audience: 'Diploma students needing a mathematics subject',
    time: 'Two years',
    cost: 'Varies by school',
    faqs: [
      { q: 'Which maths course should I choose?', a: 'Analysis and Approaches suits students heading to mathematics, engineering or physical sciences, while Applications and Interpretation suits those in social or natural sciences who prefer modelling and technology.' },
      { q: 'Is a calculator allowed?', a: 'Yes. Both courses integrate technology, and the internal assessment is a mathematical exploration rather than a timed test.' },
      { q: 'Can I take maths at Higher Level?', a: 'Both AA and AI are offered at HL as well as SL, with HL demanding more depth and teaching hours.' },
      { q: 'How is Group 5 scored?', a: 'It is graded 1 to 7 like all DP subjects, contributing to the 45-point Diploma maximum.' }
    ],
    summaryPoints: [
      'DP maths group with AA and AI routes',
      'AA for theory; AI for modelling and technology',
      'Assessed by exams and exploration, graded 1 to 7'
    ],
    relatedSlugs: ['ib-group-4-sciences', 'ib-diploma-programme'],
    sourceUrl: 'https://www.ibo.org/programmes/diploma-programme/curriculum/mathematics/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ib-group-6-the-arts',
    body: 'International Baccalaureate Organization',
    tagline: 'The DP arts group covering visual arts, music, theatre, film and dance, or a second subject instead.',
    description: 'IB Group 6, The Arts, is the Diploma arts group with visual arts, music, theatre, film and dance, assessed through a mix of practical portfolio, performance and written work at Standard and Higher Level. Candidates may take a Group 6 subject or substitute a second subject from groups 1 to 4 or an additional language, giving flexibility for students less focused on the arts. All Group 6 subjects are graded 1 to 7.',
    quickAnswer: {
      summary: 'IB Group 6 is the Diploma arts group with visual arts, music, theatre, film and dance, graded 1 to 7 through portfolios, performances and written work. Students may instead take a second subject from groups 1 to 4, so the arts are optional within the six-subject Diploma.',
      advantages: [
        'Choice of five creative disciplines',
        'Balances practical making with critical reflection',
        'Optional, since a second subject may replace it',
        'Available at Standard and Higher Level'
      ]
    },
    roadmap: ['Choose an arts subject or a replacement', 'Pick Standard or Higher Level', 'Build portfolio or rehearse', 'Complete performances and written work', 'Sit external and internal assessment'],
    prerequisites: 'Taken as one of six Diploma subjects; students may substitute a subject from groups 1 to 4.',
    examMeta: {
      questions: 'Portfolio, performance and written assessment',
      time: 'Two-year course',
      pass: 'Graded 1 to 7 per subject',
      fee: 'Set by the school',
      format: 'Practical, performance and written components',
      admin: 'Administered by IB World Schools'
    },
    topics: [
      { name: 'Visual Arts' },
      { name: 'Music' },
      { name: 'Theatre' },
      { name: 'Film' },
      { name: 'Dance' }
    ],
    examEssentials: [
      ['Subjects', 'Visual arts, music, theatre, film, dance'],
      ['Levels', 'Standard and Higher'],
      ['Flexibility', 'May be replaced by a second subject'],
      ['Score', '1 to 7 per subject']
    ],
    timeline: [{ stage: 'Course', duration: 'Two years' }, { stage: 'Results', duration: 'July or January' }],
    costBreakdown: { items: [{ item: 'Subject and exam fees', fee: 'Set by school' }], total: 'Varies by school', footnote: 'The IBO bills schools; students pay school-set fees.' },
    difficulty: 'Moderate',
    audience: 'Diploma students with an arts or performance focus',
    time: 'Two years',
    cost: 'Varies by school',
    faqs: [
      { q: 'Do I have to take an arts subject?', a: 'No. Group 6 is the only group a student may replace with a second subject from groups 1 to 4 or an additional language, so the arts are optional in the Diploma.' },
      { q: 'How are arts subjects assessed?', a: 'Assessment blends a practical portfolio or performance with written work and external moderation, varying by discipline and level.' },
      { q: 'Which arts are offered?', a: 'Schools may offer visual arts, music, theatre, film and dance, depending on staffing and facilities.' },
      { q: 'How is Group 6 scored?', a: 'Each subject is graded 1 to 7 like all DP subjects, contributing to the 45-point Diploma maximum.' }
    ],
    summaryPoints: [
      'DP arts group with five creative disciplines',
      'Optional; a second subject may replace it',
      'Assessed by portfolio, performance and writing, graded 1 to 7'
    ],
    relatedSlugs: ['ib-group-1-studies-in-language-and-literature', 'ib-diploma-programme'],
    sourceUrl: 'https://www.ibo.org/programmes/diploma-programme/curriculum/arts/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ib-middle-years-programme-eassessment',
    body: 'International Baccalaureate Organization',
    tagline: 'The on-screen MYP exams and ePortfolios that lead to the IB MYP Certificate.',
    description: 'The IB Middle Years Programme (MYP) eAssessment is the formal assessment at the end of the MYP for students aged about 14 to 16, combining on-screen examinations with ePortfolios in selected subjects. Strong performance leads to the IB MYP Certificate, scored up to 56 points across subjects, and provides a recognised milestone before the Diploma or Career-related Programme. It is delivered by authorised IB World Schools with external moderation.',
    quickAnswer: {
      summary: 'The MYP eAssessment is the end-of-programme IB assessment for students around ages 14 to 16, using on-screen exams and ePortfolios. It leads to the IB MYP Certificate scored up to 56 points, with a pass set around 28 points, and is delivered through IB World Schools.',
      advantages: [
        'Gives the MYP a recognised, externally moderated certificate',
        'On-screen exams test applied and inquiry skills',
        'Smooth bridge into the DP or CP',
        'Scored on a clear 1 to 7 per subject scale'
      ]
    },
    roadmap: ['Enrol in the MYP at an IB World School', 'Complete ePortfolios and coursework', 'Sit on-screen exams in the final year', 'Submit work for moderation', 'Receive the MYP Certificate up to 56 points'],
    prerequisites: 'Open to MYP students at an authorised IB World School in their final MYP year.',
    examMeta: {
      questions: 'On-screen exams plus ePortfolios',
      time: 'Final MYP year',
      pass: 'Around 28 points for the certificate',
      fee: 'Set by the school',
      format: 'On-screen examinations and ePortfolios',
      admin: 'Administered by IB World Schools'
    },
    topics: [
      { name: 'On-screen subject examinations' },
      { name: 'ePortfolio coursework' },
      { name: 'Interdisciplinary and personal project' }
    ],
    examEssentials: [
      ['Credential', 'IB MYP Certificate'],
      ['Scoring', 'Up to 56 points; 1 to 7 per subject'],
      ['Pass', 'Around 28 points'],
      ['Ages', 'About 14 to 16']
    ],
    timeline: [{ stage: 'Programme', duration: 'Final MYP year' }, { stage: 'Results', duration: 'After the session' }],
    costBreakdown: { items: [{ item: 'School and assessment fees', fee: 'Set by school' }], total: 'Varies by school', footnote: 'The IBO bills schools; students pay school-set fees.' },
    difficulty: 'Moderate',
    audience: 'Final-year MYP students',
    time: 'Final MYP year',
    cost: 'Varies by school',
    faqs: [
      { q: 'What is the MYP Certificate?', a: 'It is the formal credential awarded after MYP eAssessment, based on on-screen exams and ePortfolios, and scored up to 56 points across subjects.' },
      { q: 'How many points do I need to pass?', a: 'The certificate is generally awarded around 28 points, though the school and IBO set the exact threshold for the cohort.' },
      { q: 'Does MYP eAssessment lead to the Diploma?', a: 'It prepares students well and many continue into the DP or CP, but the MYP Certificate is a separate, earlier milestone.' },
      { q: 'How is it delivered?', a: 'Authorised IB World Schools run on-screen examinations and submit ePortfolios for external moderation by the IBO.' }
    ],
    summaryPoints: [
      'End-of-MYP assessment via on-screen exams and ePortfolios',
      'Leads to the MYP Certificate up to 56 points',
      'A recognised step before the DP or CP'
    ],
    relatedSlugs: ['ib-diploma-programme', 'ib-career-related-programme'],
    sourceUrl: 'https://www.ibo.org/programmes/middle-years-programme/assessment-and-events/eassessment/',
    reviewed: '2026-08',
    confidence: 'medium'
  }
  ,
  {
    slug: 'accuplacer-advanced-algebra-and-functions',
    body: 'College Board',
    tagline: 'The STEM-track placement test covering quadratics, functions, radicals, logs and trigonometry.',
    description: 'ACCUPLACER Advanced Algebra and Functions (AAF) is the Next-Generation computer-adaptive placement test for students heading into STEM and calculus-track math. It presents roughly 20 questions on linear and quadratic functions, radicals, rational expressions, trigonometry and logarithms, and is untimed so candidates can work at their own pace. The institution uses the 200 to 300 score to place students into college-level math or precalculus rather than assigning a pass or fail.',
    quickAnswer: {
      summary: 'ACCUPLACER Advanced Algebra and Functions is an untimed, computer-adaptive math placement test of about 20 questions covering quadratics, functions, radicals, logarithms and trigonometry. It scores 200 to 300 and is used by colleges to place you into the right math course; there is no pass or fail.',
      advantages: [
        'Targets STEM and calculus-track placement accurately',
        'Untimed, so you can reason through each problem',
        'Adaptive format zeroes in on your true level',
        'Can place you straight into college-level math'
      ]
    },
    roadmap: ['Check which tests your college requires', 'Review algebra and trig', 'Use the free ACCUPLACER app', 'Test at your college center', 'Review placement with an advisor'],
    prerequisites: 'No eligibility gate; your college selects AAF based on your program of study.',
    examMeta: {
      questions: 'About 20 multiple-choice, computer-adaptive',
      time: 'Untimed',
      pass: 'No pass mark; institution sets placement',
      fee: '$0 to $50, set by the institution',
      format: 'Computer-adaptive multiple-choice',
      admin: 'Administered by the institution testing center'
    },
    topics: [
      { name: 'Linear and quadratic functions' },
      { name: 'Radicals and rational expressions' },
      { name: 'Exponential and logarithmic functions' },
      { name: 'Trigonometry' }
    ],
    examEssentials: [
      ['Scoring', '200 to 300'],
      ['Timing', 'Untimed'],
      ['Calculator', 'On-screen calculator on eligible items'],
      ['Purpose', 'Course placement, not admission']
    ],
    timeline: [{ stage: 'Study', duration: '1 to 2 weeks' }, { stage: 'Test', duration: 'Untimed, often under 1 hour' }, { stage: 'Placement', duration: 'Same day' }],
    costBreakdown: { items: [{ item: 'Institution fee', fee: '$0 to $50' }], total: '$0 to $50', footnote: 'The College Board does not bill students directly; your school sets the fee.' },
    difficulty: 'Moderate',
    audience: 'Students entering STEM or calculus-track math',
    time: '1 to 2 weeks typical prep',
    cost: '$0 to $50',
    faqs: [
      { q: 'Is AAF timed?', a: 'No. ACCUPLACER is untimed, so you can take the time you need, though most students finish the math tests within about an hour.' },
      { q: 'What score do I need?', a: 'There is no universal cut. Each college sets its own AAF placement band, often around 263 or higher for direct entry into college-level math.' },
      { q: 'Can I use a calculator?', a: 'An on-screen calculator appears on questions where it is allowed; you may not bring your own handheld calculator.' },
      { q: 'How is AAF different from QAS?', a: 'QAS covers numeracy, algebra and statistics for general tracks, while AAF goes further into advanced algebra, functions and trigonometry for STEM placement.' }
    ],
    summaryPoints: [
      'Untimed adaptive math test of about 20 questions',
      'Scores 200 to 300 for STEM-track placement',
      'No pass or fail; your college sets the cut'
    ],
    relatedSlugs: ['accuplacer-quantitative-reasoning-algebra-statistics', 'accuplacer-arithmetic'],
    sourceUrl: 'https://accuplacer.collegeboard.org/students/prepare-for-accuplacer/next-generation',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'accuplacer-arithmetic',
    body: 'College Board',
    tagline: 'The foundational math placement test on whole numbers, fractions, decimals and percentages.',
    description: 'ACCUPLACER Arithmetic is the Next-Generation computer-adaptive placement test for basic math skills, covering whole numbers, fractions, decimals, percentages and comparisons of values in different formats. It uses about 20 questions, is untimed, and reports a 200 to 300 score that colleges use to decide whether a student needs remedial arithmetic support before college-level work. It is the most fundamental of the five main ACCUPLACER tests.',
    quickAnswer: {
      summary: 'ACCUPLACER Arithmetic is an untimed, computer-adaptive test of about 20 questions on whole numbers, fractions, decimals, percentages and value comparisons. It scores 200 to 300 and helps your college place you into the right starting math course rather than acting as a pass or fail exam.',
      advantages: [
        'Confirms foundational numeracy before college math',
        'Untimed and adaptive for a fair placement',
        'Quick, usually finished in well under an hour',
        'Flags remedial needs early so you save time'
      ]
    },
    roadmap: ['Ask your college which tests to take', 'Review fractions and percentages', 'Use the free study app', 'Test at the college center', 'Review placement with an advisor'],
    prerequisites: 'No eligibility gate; your institution assigns Arithmetic as part of placement.',
    examMeta: {
      questions: 'About 20 multiple-choice, computer-adaptive',
      time: 'Untimed',
      pass: 'No pass mark; institution sets placement',
      fee: '$0 to $50, set by the institution',
      format: 'Computer-adaptive multiple-choice',
      admin: 'Administered by the institution testing center'
    },
    topics: [
      { name: 'Whole number operations' },
      { name: 'Fractions' },
      { name: 'Decimals' },
      { name: 'Percentages and comparisons' }
    ],
    examEssentials: [
      ['Scoring', '200 to 300'],
      ['Timing', 'Untimed'],
      ['Level', 'Most foundational ACCUPLACER math test'],
      ['Purpose', 'Course placement, not admission']
    ],
    timeline: [{ stage: 'Study', duration: '1 to 2 weeks' }, { stage: 'Test', duration: 'Untimed' }, { stage: 'Placement', duration: 'Same day' }],
    costBreakdown: { items: [{ item: 'Institution fee', fee: '$0 to $50' }], total: '$0 to $50', footnote: 'The College Board does not bill students directly; your school sets the fee.' },
    difficulty: 'Easy',
    audience: 'Students establishing baseline math placement',
    time: '1 to 2 weeks typical prep',
    cost: '$0 to $50',
    faqs: [
      { q: 'Is the Arithmetic test hard?', a: 'It covers foundational skills, so most students find it straightforward, but brushing up on fractions and percentages helps avoid unnecessary remedial placement.' },
      { q: 'How long does it take?', a: 'ACCUPLACER is untimed and Arithmetic is about 20 questions, so most students finish in well under an hour.' },
      { q: 'What score do I need?', a: 'There is no universal pass mark. Your college sets the band, and a stronger Arithmetic result can move you out of remedial math.' },
      { q: 'Do I pay the College Board directly?', a: 'No. Your institution administers ACCUPLACER and may charge a small fee, typically between 0 and 50 dollars.' }
    ],
    summaryPoints: [
      'Untimed adaptive test of about 20 basic-math questions',
      'Scores 200 to 300 for foundational placement',
      'No pass or fail; college sets the cut'
    ],
    relatedSlugs: ['accuplacer-quantitative-reasoning-algebra-statistics', 'accuplacer-advanced-algebra-and-functions'],
    sourceUrl: 'https://accuplacer.collegeboard.org/students/prepare-for-accuplacer/next-generation',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'accuplacer-esl-language-use',
    body: 'College Board',
    tagline: 'The ESL placement test measuring English grammar and correct sentence construction.',
    description: 'ACCUPLACER ESL Language Use is a computer-adaptive placement test for English learners that measures command of standard written English grammar, usage and punctuation across 20 questions. It reports a score of 20 to 120 that institutions use to place students into the right language or credit-bearing courses. Like the other ESL tests it is untimed and is part of the ESL battery used alongside WritePlacer ESL.',
    quickAnswer: {
      summary: 'ACCUPLACER ESL Language Use is an untimed, computer-adaptive test of 20 questions on English grammar, usage and punctuation for English learners. It scores 20 to 120 and helps your college place you into appropriate language or writing courses.',
      advantages: [
        'Pinpoints grammar and sentence-structure level',
        'Untimed, so language learners can work calmly',
        'Adaptive format matches question difficulty to you',
        'Pairs with the rest of the ESL battery for full placement'
      ]
    },
    roadmap: ['Confirm the ESL battery with your college', 'Review grammar and punctuation', 'Use ACCUPLACER ESL prep', 'Test at the center', 'Review ESL placement with an advisor'],
    prerequisites: 'For English learners; your institution selects the ESL tests as part of placement.',
    examMeta: {
      questions: '20 multiple-choice, computer-adaptive',
      time: 'Untimed',
      pass: 'No pass mark; institution sets placement',
      fee: '$0 to $50, set by the institution',
      format: 'Computer-adaptive multiple-choice',
      admin: 'Administered by the institution testing center'
    },
    topics: [
      { name: 'Nouns, pronouns and agreement' },
      { name: 'Sentence structure' },
      { name: 'Verbs and modifiers' },
      { name: 'Punctuation and usage' }
    ],
    examEssentials: [
      ['Scoring', '20 to 120'],
      ['Timing', 'Untimed'],
      ['Battery', 'One of four ESL multiple-choice tests'],
      ['Purpose', 'ESL course placement']
    ],
    timeline: [{ stage: 'Study', duration: '1 to 2 weeks' }, { stage: 'Test', duration: 'Untimed' }, { stage: 'Placement', duration: 'Same day' }],
    costBreakdown: { items: [{ item: 'Institution fee', fee: '$0 to $50' }], total: '$0 to $50', footnote: 'The College Board does not bill students directly; your school sets the fee.' },
    difficulty: 'Moderate',
    audience: 'English learners needing grammar placement',
    time: '1 to 2 weeks typical prep',
    cost: '$0 to $50',
    faqs: [
      { q: 'What does ESL Language Use measure?', a: 'It checks your ability to identify and apply standard written English grammar, usage and punctuation across sentence structures.' },
      { q: 'How is it scored?', a: 'The 20-question adaptive test reports a single score from 20 to 120, which your college reads alongside the other ESL results.' },
      { q: 'Is it timed?', a: 'No. The ACCUPLACER ESL tests are untimed, letting you work at a comfortable pace.' },
      { q: 'Does it stand alone?', a: 'It is one part of the ESL battery; colleges usually combine it with Reading Skills, Sentence Meaning, Listening and WritePlacer ESL.' }
    ],
    summaryPoints: [
      'Untimed adaptive ESL test of 20 grammar questions',
      'Scores 20 to 120 for language placement',
      'Part of the ACCUPLACER ESL battery'
    ],
    relatedSlugs: ['accuplacer-esl-reading-skills', 'accuplacer-esl-sentence-meaning'],
    sourceUrl: 'https://accuplacer.collegeboard.org/students/prepare-for-accuplacer/esl',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'accuplacer-esl-listening',
    body: 'College Board',
    tagline: 'The ESL placement test measuring comprehension of spoken English in lectures and conversation.',
    description: 'ACCUPLACER ESL Listening is a computer-adaptive placement test for English learners that measures understanding of spoken English through lectures, conversations and everyday exchanges. It presents 20 questions in about 20 to 30 minutes, is untimed, and reports a 20 to 120 score used by colleges to place students into language courses. It needs no reading ability, assessing listening alone through audio items.',
    quickAnswer: {
      summary: 'ACCUPLACER ESL Listening is an untimed, computer-adaptive test of 20 audio questions measuring comprehension of spoken English in lectures and conversations. It scores 20 to 120 and helps your college place you into the right English-language course.',
      advantages: [
        'Measures real listening comprehension directly',
        'Needs no reading, isolating the listening skill',
        'Untimed for a calm testing experience',
        'Part of a complete ESL placement picture'
      ]
    },
    roadmap: ['Confirm the ESL battery with your college', 'Practice listening to academic English', 'Use ACCUPLACER ESL prep', 'Test at the center with headphones', 'Review ESL placement with an advisor'],
    prerequisites: 'For English learners; your institution selects the ESL tests as part of placement.',
    examMeta: {
      questions: '20 multiple-choice, computer-adaptive',
      time: 'Untimed',
      pass: 'No pass mark; institution sets placement',
      fee: '$0 to $50, set by the institution',
      format: 'Computer-adaptive audio items with headphones',
      admin: 'Administered by the institution testing center'
    },
    topics: [
      { name: 'Literal comprehension of spoken English' },
      { name: 'Inference from conversations and lectures' },
      { name: 'Academic and everyday contexts' }
    ],
    examEssentials: [
      ['Scoring', '20 to 120'],
      ['Timing', 'Untimed'],
      ['Format', 'Audio questions, needs no reading'],
      ['Purpose', 'ESL listening placement']
    ],
    timeline: [{ stage: 'Study', duration: '1 to 2 weeks' }, { stage: 'Test', duration: 'Untimed' }, { stage: 'Placement', duration: 'Same day' }],
    costBreakdown: { items: [{ item: 'Institution fee', fee: '$0 to $50' }], total: '$0 to $50', footnote: 'The College Board does not bill students directly; your school sets the fee.' },
    difficulty: 'Moderate',
    audience: 'English learners needing listening placement',
    time: '1 to 2 weeks typical prep',
    cost: '$0 to $50',
    faqs: [
      { q: 'Do I need to read for the Listening test?', a: 'No. It is a direct measure of listening; you hear conversations and lectures and answer questions, so reading ability is not required.' },
      { q: 'How is it scored?', a: 'The 20-question adaptive test reports a single score from 20 to 120 that your college combines with other ESL results.' },
      { q: 'Is it timed?', a: 'No. The ACCUPLACER ESL tests are untimed.' },
      { q: 'What contexts are covered?', a: 'Items draw on academic settings such as lectures and on everyday situations English learners are likely to meet.' }
    ],
    summaryPoints: [
      'Untimed adaptive ESL audio test of 20 questions',
      'Scores 20 to 120 for listening placement',
      'Needs no reading; isolates listening skill'
    ],
    relatedSlugs: ['accuplacer-esl-language-use', 'accuplacer-esl-sentence-meaning'],
    sourceUrl: 'https://accuplacer.collegeboard.org/students/prepare-for-accuplacer/esl',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'accuplacer-esl-reading-skills',
    body: 'College Board',
    tagline: 'The ESL placement test measuring comprehension of short English passages and inference.',
    description: 'ACCUPLACER ESL Reading Skills is a computer-adaptive placement test for English learners that measures the ability to read and comprehend short English passages, find main ideas and draw inferences. It uses 20 questions, is untimed, and reports a 20 to 120 score that colleges use to place students into language or credit-bearing reading courses. It is one of the four multiple-choice ESL tests in the battery.',
    quickAnswer: {
      summary: 'ACCUPLACER ESL Reading Skills is an untimed, computer-adaptive test of 20 questions on comprehension of short English passages, main ideas and inference. It scores 20 to 120 and helps your college place you into the right reading or language course.',
      advantages: [
        'Checks literal and inferential reading together',
        'Untimed for English learners',
        'Adaptive format matches your level',
        'Part of the full ESL placement battery'
      ]
    },
    roadmap: ['Confirm the ESL battery with your college', 'Practice reading short passages', 'Use ACCUPLACER ESL prep', 'Test at the center', 'Review ESL placement with an advisor'],
    prerequisites: 'For English learners; your institution selects the ESL tests as part of placement.',
    examMeta: {
      questions: '20 multiple-choice, computer-adaptive',
      time: 'Untimed',
      pass: 'No pass mark; institution sets placement',
      fee: '$0 to $50, set by the institution',
      format: 'Computer-adaptive multiple-choice',
      admin: 'Administered by the institution testing center'
    },
    topics: [
      { name: 'Literal comprehension' },
      { name: 'Main idea and inference' },
      { name: 'Vocabulary in context' }
    ],
    examEssentials: [
      ['Scoring', '20 to 120'],
      ['Timing', 'Untimed'],
      ['Battery', 'One of four ESL multiple-choice tests'],
      ['Purpose', 'ESL reading placement']
    ],
    timeline: [{ stage: 'Study', duration: '1 to 2 weeks' }, { stage: 'Test', duration: 'Untimed' }, { stage: 'Placement', duration: 'Same day' }],
    costBreakdown: { items: [{ item: 'Institution fee', fee: '$0 to $50' }], total: '$0 to $50', footnote: 'The College Board does not bill students directly; your school sets the fee.' },
    difficulty: 'Moderate',
    audience: 'English learners needing reading placement',
    time: '1 to 2 weeks typical prep',
    cost: '$0 to $50',
    faqs: [
      { q: 'What does ESL Reading Skills measure?', a: 'It checks how well you understand explicitly stated information and infer meaning from short passages across academic and everyday topics.' },
      { q: 'How is it scored?', a: 'The 20-question adaptive test reports a single score from 20 to 120, read with your other ESL results.' },
      { q: 'Is it timed?', a: 'No. The ACCUPLACER ESL tests are untimed.' },
      { q: 'How is it used?', a: 'Colleges combine it with the other ESL tests and WritePlacer ESL to decide language versus credit-bearing placement.' }
    ],
    summaryPoints: [
      'Untimed adaptive ESL test of 20 reading questions',
      'Scores 20 to 120 for reading placement',
      'Part of the ACCUPLACER ESL battery'
    ],
    relatedSlugs: ['accuplacer-esl-language-use', 'accuplacer-esl-listening'],
    sourceUrl: 'https://accuplacer.collegeboard.org/students/prepare-for-accuplacer/esl',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'accuplacer-esl-sentence-meaning',
    body: 'College Board',
    tagline: 'The ESL placement test measuring understanding of vocabulary and meaning within sentences.',
    description: 'ACCUPLACER ESL Sentence Meaning is a computer-adaptive placement test for English learners that measures the ability to understand vocabulary and meaning within single and paired English sentences. It uses 20 questions, is untimed, and reports a 20 to 120 score that institutions use alongside the other ESL tests to place students into language courses. It focuses on sentence-level meaning rather than passage reading.',
    quickAnswer: {
      summary: 'ACCUPLACER ESL Sentence Meaning is an untimed, computer-adaptive test of 20 questions on vocabulary and meaning within English sentences. It scores 20 to 120 and helps your college place you into the right language course as part of the ESL battery.',
      advantages: [
        'Targets sentence-level vocabulary and meaning',
        'Untimed for English learners',
        'Adaptive format matches your level',
        'Complements the other ESL placement tests'
      ]
    },
    roadmap: ['Confirm the ESL battery with your college', 'Build academic vocabulary', 'Use ACCUPLACER ESL prep', 'Test at the center', 'Review ESL placement with an advisor'],
    prerequisites: 'For English learners; your institution selects the ESL tests as part of placement.',
    examMeta: {
      questions: '20 multiple-choice, computer-adaptive',
      time: 'Untimed',
      pass: 'No pass mark; institution sets placement',
      fee: '$0 to $50, set by the institution',
      format: 'Computer-adaptive multiple-choice',
      admin: 'Administered by the institution testing center'
    },
    topics: [
      { name: 'Vocabulary in context' },
      { name: 'Word meaning and connotation' },
      { name: 'Sentence-level inference' }
    ],
    examEssentials: [
      ['Scoring', '20 to 120'],
      ['Timing', 'Untimed'],
      ['Battery', 'One of four ESL multiple-choice tests'],
      ['Purpose', 'ESL sentence-meaning placement']
    ],
    timeline: [{ stage: 'Study', duration: '1 to 2 weeks' }, { stage: 'Test', duration: 'Untimed' }, { stage: 'Placement', duration: 'Same day' }],
    costBreakdown: { items: [{ item: 'Institution fee', fee: '$0 to $50' }], total: '$0 to $50', footnote: 'The College Board does not bill students directly; your school sets the fee.' },
    difficulty: 'Moderate',
    audience: 'English learners needing vocabulary placement',
    time: '1 to 2 weeks typical prep',
    cost: '$0 to $50',
    faqs: [
      { q: 'What does ESL Sentence Meaning measure?', a: 'It checks your understanding of vocabulary and meaning within single and paired sentences, including context clues and connotation.' },
      { q: 'How is it scored?', a: 'The 20-question adaptive test reports a single score from 20 to 120, read with your other ESL results.' },
      { q: 'Is it timed?', a: 'No. The ACCUPLACER ESL tests are untimed.' },
      { q: 'How does it differ from ESL Reading Skills?', a: 'Sentence Meaning works at the sentence level on vocabulary and meaning, while Reading Skills uses longer passages and inference across texts.' }
    ],
    summaryPoints: [
      'Untimed adaptive ESL test of 20 sentence questions',
      'Scores 20 to 120 for vocabulary placement',
      'Part of the ACCUPLACER ESL battery'
    ],
    relatedSlugs: ['accuplacer-esl-reading-skills', 'accuplacer-esl-language-use'],
    sourceUrl: 'https://accuplacer.collegeboard.org/students/prepare-for-accuplacer/esl',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'accuplacer-quantitative-reasoning-algebra-statistics',
    body: 'College Board',
    tagline: 'The general-track math placement test on rational numbers, ratios, linear equations and stats.',
    description: 'ACCUPLACER Quantitative Reasoning, Algebra, and Statistics (QAS) is the Next-Generation computer-adaptive placement test for non-STEM tracks, covering rational numbers, ratios, proportions, linear equations, probability and statistics. It uses about 20 questions, is untimed, and reports a 200 to 300 score that colleges use to place students into the appropriate general-education math course. It sits between Arithmetic and Advanced Algebra and Functions in the math ladder.',
    quickAnswer: {
      summary: 'ACCUPLACER Quantitative Reasoning, Algebra, and Statistics (QAS) is an untimed, computer-adaptive test of about 20 questions on rational numbers, ratios, linear equations, probability and statistics. It scores 200 to 300 and places you into general math courses; there is no pass or fail.',
      advantages: [
        'Covers the math most general-education tracks need',
        'Untimed and adaptive for fair placement',
        'Solid bridge from Arithmetic to advanced math',
        'Can place you into college-level quantitative courses'
      ]
    },
    roadmap: ['Check which tests your college requires', 'Review ratios and linear equations', 'Use the free ACCUPLACER app', 'Test at your college center', 'Review placement with an advisor'],
    prerequisites: 'No eligibility gate; your college selects QAS based on your program of study.',
    examMeta: {
      questions: 'About 20 multiple-choice, computer-adaptive',
      time: 'Untimed',
      pass: 'No pass mark; institution sets placement',
      fee: '$0 to $50, set by the institution',
      format: 'Computer-adaptive multiple-choice',
      admin: 'Administered by the institution testing center'
    },
    topics: [
      { name: 'Rational numbers and ratios' },
      { name: 'Linear equations and algebra' },
      { name: 'Probability and statistics' },
      { name: 'Geometry and measurement' }
    ],
    examEssentials: [
      ['Scoring', '200 to 300'],
      ['Timing', 'Untimed'],
      ['Calculator', 'On-screen calculator on eligible items'],
      ['Purpose', 'Course placement, not admission']
    ],
    timeline: [{ stage: 'Study', duration: '1 to 2 weeks' }, { stage: 'Test', duration: 'Untimed' }, { stage: 'Placement', duration: 'Same day' }],
    costBreakdown: { items: [{ item: 'Institution fee', fee: '$0 to $50' }], total: '$0 to $50', footnote: 'The College Board does not bill students directly; your school sets the fee.' },
    difficulty: 'Moderate',
    audience: 'Students in non-STEM general-education tracks',
    time: '1 to 2 weeks typical prep',
    cost: '$0 to $50',
    faqs: [
      { q: 'How is QAS different from Arithmetic?', a: 'Arithmetic covers basics like fractions and percentages, while QAS adds ratios, linear equations, probability and statistics for general college math.' },
      { q: 'Is QAS timed?', a: 'No. ACCUPLACER is untimed, so you can work through the adaptive questions at your own pace.' },
      { q: 'What score do I need?', a: 'There is no universal cut. Each college sets its own QAS band, often around 250 or higher for college-level quantitative work.' },
      { q: 'Can I use a calculator?', a: 'An on-screen calculator appears on questions where it is allowed; personal handheld calculators are not permitted.' }
    ],
    summaryPoints: [
      'Untimed adaptive math test of about 20 questions',
      'Scores 200 to 300 for general-track placement',
      'No pass or fail; your college sets the cut'
    ],
    relatedSlugs: ['accuplacer-arithmetic', 'accuplacer-advanced-algebra-and-functions'],
    sourceUrl: 'https://accuplacer.collegeboard.org/students/prepare-for-accuplacer/next-generation',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'accuplacer-reading',
    body: 'College Board',
    tagline: 'The college placement test measuring comprehension, rhetoric and synthesis across passages.',
    description: 'ACCUPLACER Reading is the Next-Generation computer-adaptive placement test that measures comprehension, rhetoric, synthesis and vocabulary across single and paired passages. It uses about 20 multiple-choice questions, is untimed, and reports a 200 to 300 score that colleges use to place students into credit-bearing or developmental reading and English courses. It is one of the five main ACCUPLACER tests and pairs with WritePlacer for a full literacy picture.',
    quickAnswer: {
      summary: 'ACCUPLACER Reading is an untimed, computer-adaptive test of about 20 questions measuring comprehension, rhetoric and synthesis across single and paired passages. It scores 200 to 300 and helps your college place you into the right reading or English course.',
      advantages: [
        'Assesses both understanding and rhetorical analysis',
        'Untimed and adaptive for fair placement',
        'Uses paired passages like college reading',
        'Pairs with WritePlacer for full literacy placement'
      ]
    },
    roadmap: ['Check which tests your college requires', 'Practice reading paired passages', 'Use the free study app', 'Test at the college center', 'Review placement with an advisor'],
    prerequisites: 'No eligibility gate; your institution assigns Reading as part of placement.',
    examMeta: {
      questions: 'About 20 multiple-choice, computer-adaptive',
      time: 'Untimed',
      pass: 'No pass mark; institution sets placement',
      fee: '$0 to $50, set by the institution',
      format: 'Computer-adaptive multiple-choice',
      admin: 'Administered by the institution testing center'
    },
    topics: [
      { name: 'Information and ideas' },
      { name: 'Rhetoric' },
      { name: 'Synthesis of paired passages' },
      { name: 'Vocabulary' }
    ],
    examEssentials: [
      ['Scoring', '200 to 300'],
      ['Timing', 'Untimed'],
      ['Level', 'One of five main ACCUPLACER tests'],
      ['Purpose', 'Course placement, not admission']
    ],
    timeline: [{ stage: 'Study', duration: '1 to 2 weeks' }, { stage: 'Test', duration: 'Untimed' }, { stage: 'Placement', duration: 'Same day' }],
    costBreakdown: { items: [{ item: 'Institution fee', fee: '$0 to $50' }], total: '$0 to $50', footnote: 'The College Board does not bill students directly; your school sets the fee.' },
    difficulty: 'Moderate',
    audience: 'Students establishing reading-placement level',
    time: '1 to 2 weeks typical prep',
    cost: '$0 to $50',
    faqs: [
      { q: 'What does ACCUPLACER Reading cover?', a: 'It measures comprehension of information and ideas, rhetorical analysis, synthesis of paired passages and vocabulary across literary and informational texts.' },
      { q: 'Is it timed?', a: 'No. ACCUPLACER is untimed, and most students finish the Reading test within about an hour.' },
      { q: 'What score do I need?', a: 'There is no universal pass mark. Colleges set their own bands, often around 250 or higher for direct placement into credit-bearing English.' },
      { q: 'How is it used with WritePlacer?', a: 'Many colleges read the Reading score together with the WritePlacer essay to decide whether you enter college-level English or a support course.' }
    ],
    summaryPoints: [
      'Untimed adaptive reading test of about 20 questions',
      'Scores 200 to 300 for literacy placement',
      'No pass or fail; college sets the cut'
    ],
    relatedSlugs: ['accuplacer-writing', 'accuplacer-writeplacer'],
    sourceUrl: 'https://accuplacer.collegeboard.org/students/prepare-for-accuplacer/next-generation',
    reviewed: '2026-08',
    confidence: 'high'
  }
  ,
  {
    slug: 'accuplacer-writing',
    body: 'College Board',
    tagline: 'The placement test on revising and editing multiparagraph text for ideas and conventions.',
    description: 'ACCUPLACER Writing is the Next-Generation computer-adaptive placement test that measures your ability to revise and edit multiparagraph text for expression of ideas and standard English conventions. It uses about 25 multiple-choice questions, is untimed, and reports a 200 to 300 score that colleges use to place students into credit-bearing or developmental writing courses. It is one of the five main ACCUPLACER tests and pairs with the WritePlacer essay.',
    quickAnswer: {
      summary: 'ACCUPLACER Writing is an untimed, computer-adaptive test of about 25 questions asking you to revise and edit multiparagraph text for ideas and standard English conventions. It scores 200 to 300 and helps your college place you into the right writing course.',
      advantages: [
        'Tests real editing and revision, not isolated grammar',
        'Untimed and adaptive for fair placement',
        'Uses multiparagraph texts like college writing',
        'Pairs with WritePlacer for full writing placement'
      ]
    },
    roadmap: ['Check which tests your college requires', 'Practice editing multiparagraph drafts', 'Use the free study app', 'Test at the college center', 'Review placement with an advisor'],
    prerequisites: 'No eligibility gate; your institution assigns Writing as part of placement.',
    examMeta: {
      questions: 'About 25 multiple-choice, computer-adaptive',
      time: 'Untimed',
      pass: 'No pass mark; institution sets placement',
      fee: '$0 to $50, set by the institution',
      format: 'Computer-adaptive multiple-choice',
      admin: 'Administered by the institution testing center'
    },
    topics: [
      { name: 'Expression of ideas' },
      { name: 'Standard English conventions' },
      { name: 'Development and organization' }
    ],
    examEssentials: [
      ['Scoring', '200 to 300'],
      ['Timing', 'Untimed']
      ['Level', 'One of five main ACCUPLACER tests'],
      ['Purpose', 'Course placement, not admission']
    ],
    timeline: [{ stage: 'Study', duration: '1 to 2 weeks' }, { stage: 'Test', duration: 'Untimed' }, { stage: 'Placement', duration: 'Same day' }],
    costBreakdown: { items: [{ item: 'Institution fee', fee: '$0 to $50' }], total: '$0 to $50', footnote: 'The College Board does not bill students directly; your school sets the fee.' },
    difficulty: 'Moderate',
    audience: 'Students establishing writing-placement level',
    time: '1 to 2 weeks typical prep',
    cost: '$0 to $50',
    faqs: [
      { q: 'What does ACCUPLACER Writing measure?', a: 'It asks you to revise and edit passages for expression of ideas, organization and standard English conventions, mirroring college writing tasks.' },
      { q: 'Is it timed?', a: 'No. ACCUPLACER is untimed, and most students finish the Writing test within about an hour.' },
      { q: 'What score do I need?', a: 'There is no universal pass mark. Colleges set their own bands, often around 250 or higher for direct placement into credit-bearing English.' },
      { q: 'How is it different from WritePlacer?', a: 'Writing is a multiple-choice editing test, while WritePlacer is a written essay scored separately; many colleges use both.' }
    ],
    summaryPoints: [
      'Untimed adaptive writing test of about 25 questions',
      'Scores 200 to 300 for writing placement',
      'No pass or fail; college sets the cut'
    ],
    relatedSlugs: ['accuplacer-writeplacer', 'accuplacer-reading'],
    sourceUrl: 'https://accuplacer.collegeboard.org/students/prepare-for-accuplacer/next-generation',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'accuplacer-writeplacer',
    body: 'College Board',
    tagline: 'The ACCUPLACER essay scored 1 to 8 on a 300 to 600 word written response.',
    description: 'ACCUPLACER WritePlacer is the essay component of ACCUPLACER, in which students write a 300 to 600 word response to a prompt that is scored holistically from 1 to 8. Unlike the multiple-choice tests it is not adaptive and is typically given a time limit of about one hour. Colleges use the essay alongside the Reading and Writing scores to place students into credit-bearing or developmental English courses.',
    quickAnswer: {
      summary: 'ACCUPLACER WritePlacer is the essay part of ACCUPLACER: you write a 300 to 600 word response to a prompt, scored holistically from 1 to 8. It is usually timed at about one hour and is used with the multiple-choice tests for English placement.',
      advantages: [
        'Measures real writing, not just editing choices',
        'Clear 1 to 8 holistic score',
        'Shows development, organization and mechanics',
        'Combines with Reading and Writing for placement'
      ]
    },
    roadmap: ['Confirm your college uses WritePlacer', 'Practice timed 300 to 600 word essays', 'Use the WritePlacer guide', 'Write the essay at the center', 'Review placement with an advisor'],
    prerequisites: 'Assigned by your institution as part of ACCUPLACER placement.',
    examMeta: {
      questions: 'One essay, 300 to 600 words',
      time: 'About 1 hour',
      pass: 'No pass mark; scored 1 to 8',
      fee: '$0 to $50, set by the institution',
      format: 'Typed essay with holistic scoring',
      admin: 'Administered by the institution testing center'
    },
    topics: [
      { name: 'Purpose and focus' },
      { name: 'Organization and development' },
      { name: 'Sentence variety and word choice' },
      { name: 'Mechanical conventions' }
    ],
    examEssentials: [
      ['Scoring', '1 to 8 holistic'],
      ['Length', '300 to 600 words'],
      ['Timing', 'About 1 hour (not adaptive)'],
      ['Purpose', 'English course placement']
    ],
    timeline: [{ stage: 'Study', duration: '1 to 2 weeks' }, { stage: 'Test', duration: '~1 hour' }, { stage: 'Placement', duration: 'Same day' }],
    costBreakdown: { items: [{ item: 'Institution fee', fee: '$0 to $50' }], total: '$0 to $50', footnote: 'The College Board does not bill students directly; your school sets the fee.' },
    difficulty: 'Moderate',
    audience: 'Students completing ACCUPLACER English placement',
    time: '1 to 2 weeks typical prep',
    cost: '$0 to $50',
    faqs: [
      { q: 'How is WritePlacer scored?', a: 'A trained rater gives a holistic score from 1 to 8 based on focus, organization, development, sentence variety and mechanics.' },
      { q: 'How long should my essay be?', a: 'Aim for 300 to 600 words. Responses that are far too short to evaluate may receive a score of 0.' },
      { q: 'Is WritePlacer timed?', a: 'Yes, unlike the adaptive multiple-choice tests it is usually limited to about one hour.' },
      { q: 'Is it required?', a: 'Many but not all colleges include WritePlacer; check with your testing center, since some rely only on the multiple-choice Reading and Writing tests.' }
    ],
    summaryPoints: [
      'Essay component scored holistically 1 to 8',
      '300 to 600 words, usually about one hour',
      'Used with Reading and Writing for English placement'
    ],
    relatedSlugs: ['accuplacer-writing', 'accuplacer-reading'],
    sourceUrl: 'https://accuplacer.collegeboard.org/students/prepare-for-accuplacer/next-generation',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'accuplacer-writeplacer-esl',
    body: 'College Board',
    tagline: 'The ESL essay scored 1 to 6 used with the ACCUPLACER ESL battery for placement.',
    description: 'ACCUPLACER WritePlacer ESL is the essay component for English learners, in which students write a response to a prompt that is scored holistically from 1 to 6. It is used together with the ESL multiple-choice tests to place students into language courses or credit-bearing English. The essay is typically timed at about one hour, and a response that is too short or off topic may not be scorable.',
    quickAnswer: {
      summary: 'ACCUPLACER WritePlacer ESL is the essay component for English learners: you write a response to a prompt, scored holistically from 1 to 6. It is usually timed at about one hour and is combined with the ESL tests for placement into language or English courses.',
      advantages: [
        'Measures written English for language learners',
        'Clear 1 to 6 holistic score',
        'Pairs with the ESL battery for full placement',
        'Shows development and language control'
      ]
    },
    roadmap: ['Confirm the ESL battery with your college', 'Practice timed ESL essays', 'Use the WritePlacer ESL guide', 'Write the essay at the center', 'Review ESL placement with an advisor'],
    prerequisites: 'For English learners; your institution selects WritePlacer ESL as part of placement.',
    examMeta: {
      questions: 'One essay, typically 300 plus words',
      time: 'About 1 hour',
      pass: 'No pass mark; scored 1 to 6',
      fee: '$0 to $50, set by the institution',
      format: 'Typed essay with holistic scoring',
      admin: 'Administered by the institution testing center'
    },
    topics: [
      { name: 'Focus and supporting ideas' },
      { name: 'Language control and vocabulary' },
      { name: 'Organization' },
      { name: 'Mechanics' }
    ],
    examEssentials: [
      ['Scoring', '1 to 6 holistic'],
      ['Timing', 'About 1 hour'],
      ['Battery', 'Essay within the ESL placement set'],
      ['Purpose', 'ESL course placement']
    ],
    timeline: [{ stage: 'Study', duration: '1 to 2 weeks' }, { stage: 'Test', duration: '~1 hour' }, { stage: 'Placement', duration: 'Same day' }],
    costBreakdown: { items: [{ item: 'Institution fee', fee: '$0 to $50' }], total: '$0 to $50', footnote: 'The College Board does not bill students directly; your school sets the fee.' },
    difficulty: 'Moderate',
    audience: 'English learners completing ACCUPLACER placement',
    time: '1 to 2 weeks typical prep',
    cost: '$0 to $50',
    faqs: [
      { q: 'How is WritePlacer ESL scored?', a: 'A trained rater gives a holistic score from 1 to 6 based on focus, development, language control and mechanics.' },
      { q: 'How long should I write?', a: 'Aim for at least 300 words. A response that is too short, off topic or in another language may receive a score of 0 and not be scorable.' },
      { q: 'Is it timed?', a: 'Yes, it is usually limited to about one hour, unlike the untimed multiple-choice ESL tests.' },
      { q: 'How is it used?', a: 'Colleges combine the WritePlacer ESL score with the ESL multiple-choice results to place you into language or credit-bearing courses.' }
    ],
    summaryPoints: [
      'ESL essay component scored holistically 1 to 6',
      'About one hour, usually 300 plus words',
      'Used with the ESL battery for placement'
    ],
    relatedSlugs: ['accuplacer-esl-language-use', 'accuplacer-esl-reading-skills'],
    sourceUrl: 'https://accuplacer.collegeboard.org/students/prepare-for-accuplacer/esl',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ib-theory-of-knowledge',
    body: 'International Baccalaureate Organization',
    tagline: 'The DP core course assessed by an exhibition and a 1600-word essay, with TOK adding Diploma points.',
    description: 'Theory of Knowledge (TOK) is the Diploma Programme core course that asks students to reflect on how we know what we claim to know across areas of knowledge and ways of knowing. It is assessed through an exhibition of three real-world objects and a 1600-word essay on a prescribed title, together graded A to E. With the Extended Essay, TOK contributes up to three bonus points toward the 45-point Diploma, and it is compulsory for all Diploma candidates.',
    quickAnswer: {
      summary: 'Theory of Knowledge is the compulsory DP core course assessed by an exhibition of three objects and a 1600-word essay, graded A to E. Along with the Extended Essay it contributes up to three bonus points to the 45-point Diploma, and it is required of every Diploma candidate.',
      advantages: [
        'Builds critical reflection on knowledge and bias',
        'Develops essay and exhibition skills valued at university',
        'Contributes up to three bonus Diploma points with the EE',
        'Connects and unifies the six subject groups'
      ]
    },
    roadmap: ['Study the TOK framework', 'Build the exhibition of three objects', 'Draft the 1600-word essay', 'Submit both components', 'Receive an A to E grade'],
    prerequisites: 'Required of all Diploma Programme students; the school provides TOK as a core course.',
    examMeta: {
      questions: 'Exhibition plus 1600-word essay',
      time: 'About 100 teaching hours across two years',
      pass: 'Graded A to E; combined with EE for bonus points',
      fee: 'Included in DP enrolment',
      format: 'Exhibition and externally assessed essay',
      admin: 'Administered by IB World Schools'
    },
    topics: [
      { name: 'Ways of knowing' },
      { name: 'Areas of knowledge' },
      { name: 'Knowledge and the real world (exhibition)' },
      { name: 'Prescribed title essay' }
    ],
    examEssentials: [
      ['Assessment', 'Exhibition 33 percent; essay 67 percent'],
      ['Essay length', '1600 words on a prescribed title'],
      ['Grading', 'A to E'],
      ['Bonus', 'Up to 3 points with the Extended Essay']
    ],
    timeline: [{ stage: 'Course', duration: '~100 hours' }, { stage: 'Results', duration: 'July or January' }],
    costBreakdown: { items: [{ item: 'Cost', fee: 'Included in DP fees' }], total: 'None separate', footnote: 'No standalone fee; covered by school DP charges.' },
    difficulty: 'Moderate',
    audience: 'All IB Diploma Programme students',
    time: 'Across the two-year Diploma',
    cost: 'Included in DP enrolment',
    faqs: [
      { q: 'How is TOK assessed?', a: 'TOK has two parts: an exhibition of three real-world objects (about a third of the mark) and a 1600-word essay on a prescribed title (about two thirds), graded A to E.' },
      { q: 'How many points can TOK add?', a: 'With the Extended Essay, TOK contributes a matrix-based bonus of 0 to 3 points toward the 45-point Diploma.' },
      { q: 'What is the exhibition?', a: 'It is a commentary on three objects from everyday life that illustrate how knowledge is produced or used, showing TOK ideas in the real world.' },
      { q: 'Is TOK required?', a: 'Yes. Every Diploma candidate takes TOK, and completing it is necessary to be awarded the Diploma.' }
    ],
    summaryPoints: [
      'Compulsory DP core on the nature of knowledge',
      'Exhibition plus 1600-word essay, graded A to E',
      'With the EE adds up to three Diploma bonus points'
    ],
    relatedSlugs: ['ib-extended-essay', 'ib-diploma-programme'],
    sourceUrl: 'https://www.ibo.org/programmes/diploma-programme/curriculum/theory-of-knowledge/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'aamc-preview',
    body: 'Association of American Medical Colleges',
    tagline: 'The AAMC situational judgment exam assessing professional readiness for medical school.',
    description: 'The AAMC PREview Professional Readiness Exam is a situational judgment test used by participating medical schools to assess how applicants respond to pre-professional competency scenarios. It presents about 186 response items across hypothetical situations in 75 minutes and is scored 1 to 9, with no specific medical or scientific knowledge required. Roughly 30 medical schools require or recommend it for the 2026 to 2027 cycle, so applicants should check each program before registering.',
    quickAnswer: {
      summary: 'The AAMC PREview exam is a 75-minute situational judgment test with about 186 response items scoring 1 to 9. It measures professional readiness through scenarios, needs no medical knowledge, and is required or recommended by roughly 30 medical schools, with a 105 dollar registration fee.',
      advantages: [
        'Signals professional judgment to medical schools',
        'No content to memorise, only judgment to apply',
        'Accepted by about 30 medical programs',
        'Fee assistance waives the first attempt'
      ]
    },
    roadmap: ['Check if target schools require it', 'Register via the PREview portal', 'Review free practice scenarios', 'Sit the 75-minute online exam', 'Receive a 1 to 9 score'],
    prerequisites: 'Open to applicants to participating health-professions schools; no medical knowledge required.',
    examMeta: {
      questions: 'About 186 response items',
      time: '75 minutes exam time',
      pass: 'No pass mark; scored 1 to 9',
      fee: '$105 (first PREview free with fee assistance)',
      format: 'Online proctored situational judgment',
      admin: 'AAMC PREview portal with remote proctoring'
    },
    topics: [
      { name: 'Professional competencies in scenarios' },
      { name: 'Effective versus ineffective actions' },
      { name: 'Ethics, teamwork and communication' }
    ],
    examEssentials: [
      ['Scoring', '1 to 9 with confidence band and percentile'],
      ['Schedule', 'Two-day windows April to October'],
      ['Limits', '2 attempts per year, 4 lifetime'],
      ['Schools', 'Required or recommended by about 30']
    ],
    timeline: [{ stage: 'Study', duration: '1 to 3 weeks' }, { stage: 'Test', duration: '75 minutes' }, { stage: 'Scores', duration: '~30 days after window' }],
    costBreakdown: { items: [{ item: 'Registration', fee: '$105' }, { item: 'Reschedule', fee: '$25' }], total: '$105 to $130', footnote: 'Fee Assistance Program waives the first registration and discounts later ones.' },
    difficulty: 'Moderate',
    audience: 'Medical school applicants to participating schools',
    time: '1 to 3 weeks typical prep',
    cost: '$105 to $130',
    faqs: [
      { q: 'Do I need to take PREview?', a: 'Only if a target medical school requires or recommends it; about 30 schools use it for the 2026 to 2027 cycle. Always check each admissions page first.' },
      { q: 'What does the exam test?', a: 'It is a situational judgment test of professional competencies such as ethics, teamwork and communication. You rate the effectiveness of actions in scenarios; no science content is tested.' },
      { q: 'How is it scored?', a: 'Your total score runs 1 to 9, with a confidence band of plus or minus one point and a percentile rank, released about 30 days after the testing window.' },
      { q: 'How much does it cost?', a: 'Standard registration is 105 dollars, with a 25 dollar reschedule fee. The AAMC Fee Assistance Program waives the first registration for eligible applicants.' }
    ],
    summaryPoints: [
      'Situational judgment exam scored 1 to 9',
      '75 minutes, about 186 items, no medical knowledge',
      'Used by about 30 medical schools; 105 dollar fee'
    ],
    relatedSlugs: ['mcat-exam', 'gre-general-test'],
    sourceUrl: 'https://students-residents.aamc.org/aamc-preview',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'mcat-exam',
    body: 'Association of American Medical Colleges',
    tagline: 'The seven-and-a-half-hour medical school admissions exam scored 472 to 528 across four sections.',
    description: 'The Medical College Admission Test (MCAT) is the AAMC standardized exam required by virtually all US and Canadian medical schools, measuring biological, chemical, psychological and social foundations of behavior plus critical analysis and reasoning. It runs 7.5 hours with 230 multiple-choice questions across four sections, each scored 118 to 132 for a total of 472 to 528. The standard US fee is 355 dollars with a 130 dollar international surcharge, and scores are valid for two to three years depending on the school.',
    quickAnswer: {
      summary: 'The MCAT is the 7.5-hour medical school admissions exam with 230 questions across four sections, scored 472 to 528 (each section 118 to 132). The standard US fee is 355 dollars plus a 130 dollar international surcharge, and scores are valid for two to three years by school policy.',
      advantages: [
        'Required by nearly every US and Canadian MD program',
        'Tests science and reasoning, not just memorization',
        'Uniform metric across very different applicants',
        'Fee Assistance Program cuts the cost to 145 dollars'
      ]
    },
    roadmap: ['Build pre-med coursework', 'Register via the MCAT system', 'Study 3 to 6 months with AAMC prep', 'Test at a Pearson VUE center', 'Send 472 to 528 scores'],
    prerequisites: 'Intended for applicants to medical and other health-professions schools; a strong science background is expected but there is no formal gate to register.',
    examMeta: {
      questions: '230 multiple-choice',
      time: '7.5 hours total (about 6h15m testing)',
      pass: 'No pass mark; schools set expectations',
      fee: '$355 (US); plus $130 international',
      format: 'Computer-based at Pearson VUE centers',
      admin: 'Pearson VUE test centers'
    },
    topics: [
      { name: 'Chemical and Physical Foundations of Biological Systems' },
      { name: 'Critical Analysis and Reasoning Skills (CARS)' },
      { name: 'Biological and Biochemical Foundations of Living Systems' },
      { name: 'Psychological, Social and Biological Foundations of Behavior' }
    ],
    examEssentials: [
      ['Scoring', '472 to 528; 118 to 132 per section'],
      ['Median', 'About 500 (50th percentile)'],
      ['Limits', '3 per year, 4 in two years, 7 lifetime'],
      ['FAP fee', '145 dollars with fee assistance']
    ],
    timeline: [{ stage: 'Study', duration: '3 to 6 months' }, { stage: 'Test', duration: '7.5 hours' }, { stage: 'Scores', duration: '30 to 35 days' }],
    costBreakdown: { items: [{ item: 'Standard registration', fee: '$355' }, { item: 'International surcharge', fee: '$130' }, { item: 'AAMC Official Prep', fee: 'optional, ~$300 bundle' }], total: '$355 to $485', footnote: 'Reschedule and cancellation fees apply by deadline; FAP reduces the base fee to 145 dollars.' },
    difficulty: 'Hard',
    audience: 'Medical and health-professions school applicants',
    time: '3 to 6 months typical prep',
    cost: '$355 to $485',
    faqs: [
      { q: 'How hard is the MCAT?', a: 'It is widely considered hard because it combines broad science knowledge with data analysis and CARS reading under a long testing day. A competitive score is often 510 or higher, with top schools looking for 515 plus.' },
      { q: 'How long should I study?', a: 'Most applicants spend three to six months and 300 to 500 hours, finishing with full-length AAMC practice exams to build stamina for the 7.5-hour day.' },
      { q: 'What is a good MCAT score?', a: 'The median is about 500. A 510 is competitive for many MD programs, while 515 or above strengthens applications to selective schools.' },
      { q: 'How long are scores valid?', a: 'Medical schools generally accept MCAT scores for two to three years, though each sets its own policy, so time your test within the validity window for your applications.' },
      { q: 'Can I retake the MCAT?', a: 'Yes, up to three times in a testing year, four times within two consecutive years and seven times in a lifetime, with a 355 dollar fee each attempt unless fee assistance applies.' }
    ],
    summaryPoints: [
      '7.5-hour medical admissions exam, 230 questions',
      'Scored 472 to 528; median about 500',
      'Standard fee 355 dollars plus 130 international'
    ],
    relatedSlugs: ['aamc-preview', 'gre-general-test'],
    sourceUrl: 'https://www.aamc.org/students/applying/mcat/',
    reviewed: '2026-08',
    confidence: 'high'
  }
];

export default { programs, exams };
