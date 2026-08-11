const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Workforce readiness & career-certification desk',
    bio: 'We cover ACT WorkKeys and the National Career Readiness Certificate. Format and fee facts come from ACT official pages and are revised; wage and employment figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the WorkKeys assessment structure, NCRC tiers and scoring against ACT official pages; verified BLS education-and-earnings data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'NCRC is a skills signal, not a job license: median weekly earnings for full-time workers with a high-school diploma were $998 in 2024 (BLS)',
    summary: 'The ACT WorkKeys system produces the National Career Readiness Certificate (NCRC), a portable credential that certifies foundational workplace skills rather than a specific occupation. Because the NCRC is not tied to a single job, there is no BLS SOC code that maps directly to it, and no salary figure can be attributed to the certificate alone. What the research evidence does show is that employers treat the NCRC as a screening signal: many large employers, staffing agencies and state workforce systems require or prefer it for entry-level roles, and states including Indiana, South Carolina and Kansas have integrated WorkKeys into their economic-development and school-accountability programs. The honest salary framing has two parts. First, BLS data show that full-time workers age 25 and older with a high-school diploma earned median weekly wages of $998 in 2024, which is the baseline population that most NCRC holders come from; the certificate is most valuable at the hiring margin, where it can distinguish a candidate for a job that pays closer to the occupation median than to the 10th percentile. Second, for specific occupations, the wage that a qualified candidate can expect is the occupation\u2019s own BLS median: for example, customer service representatives (43-4051) had a May 2024 median of about $41,000, and general office clerks and material movers sit near the overall office-and-administrative-support median of $46,320. The NCRC does not change those numbers; it changes the probability of being hired for them, and some programs tie it to tuition-free training pathways that lead to higher-paying licensed trades.',
    rows: [
      { label: 'High-school diploma median weekly earnings, 2024', value: '$998', note: 'BLS, workers 25+, full time' },
      { label: 'Office and administrative support occupations median, May 2024', value: '$46,320', note: 'BLS OEWS occupational group' },
      { label: 'Customer service representatives median, May 2024', value: '~$41,000', note: 'BLS OEWS, SOC 43-4051' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' }
    ],
    growth: 'Employment in office and administrative support is projected to decline slightly by 2034, so credentials that sharpen hireability at the entry level have added weight.',
    source: { label: 'BLS Occupational Outlook Handbook - Pay & Education', url: 'https://www.bls.gov/ooh/education/education-pays.htm' }
  },
  passRate: {
    headline: 'WorkKeys is scored on a 1-7 scale per assessment; the NCRC tiers (Bronze/Silver/Gold/Platinum) are the recognized outcomes',
    summary: 'ACT does not publish a single national pass rate for WorkKeys because there is no single passing score. Each of the three core assessments - Applied Math, Graphic Literacy, and Workplace Documents - is scored on a scale of 1 to 7, and the NCRC is awarded in four tiers based on the lowest of the three scores. A Bronze certificate requires at least a score of 3 on all three assessments; Silver requires 4; Gold requires 5; and Platinum requires 6. For context, ACT publishes score descriptors: a 3 indicates ability to apply a limited number of basic skills, a 4 indicates the ability to apply broader problem-solving skills to more complex situations, a 5 indicates the ability to apply additional reasoning to work-related problems, and 6-7 indicate progressively advanced application. Because the certificate is defined by minimum scores rather than a percentage of a cohort, pass-rate-style statistics are not meaningful in the way they are for licensure exams. What ACT does publish is usage data: the assessments are administered in all 50 states and to several million examinees per year through schools, workforce boards and employer testing centers. Test takers receive a score report with per-assessment scores, an NCRC tier when earned, and a personal skills profile; retaking a single assessment to raise one low score is common and is the fastest way to upgrade a tier from Silver to Gold. The practical takeaway is to target a tier that matches the hiring requirements of the employers in your region, because regional demand for Bronze versus Silver varies.',
    source: { label: 'ACT WorkKeys official NCRC tiers', url: 'https://www.act.org/workkeys/' },
    caveat: 'ACT does not publish a cohort pass rate; outcomes are tier-based (Bronze through Platinum).'
  },
  studyPlan: {
    summary: 'WorkKeys preparation is unusually tractable because the three assessments test applied skills rather than memorized content, and ACT publishes official practice materials with realistic item styles. A focused plan runs 15-25 hours over 4-6 weeks for an adult learner, and less for a student who has recently taken algebra and done workplace reading. Applied Math is the most studied assessment: it covers basic arithmetic, fractions, decimals, percentages, ratios, unit conversion, area and perimeter, and interpreting data in tables and charts, all in workplace scenarios such as inventory counts, invoicing, and measurement on a job site. Graphic Literacy tests reading of workplace graphics: charts, graphs, forms, diagrams, floor plans and instrument displays, at levels from finding a single value to synthesizing multiple data series. Workplace Documents tests reading of memos, emails, policies, manuals and notices, with items that move from locating information to drawing conclusions and applying instructions to new situations. The plan: week 1 take the official practice tests for all three assessments to establish a baseline score in the 1-7 scale for each; weeks 2-4 drill the lowest assessment first using ACT\u2019s official sample questions and the free WorkKeys curriculum, with 30-minute daily sessions; week 5 retest; week 6 focus on the single lowest score because one assessment caps the tier. Test takers should be aware that the assessments are timed (55 minutes for Applied Math, 55 minutes for Graphic Literacy, 50-55 minutes for Workplace Documents depending on the form) and computer-delivered at ACT-authorized centers.',
    totalHours: '15-25 hours over 4-6 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Baseline all three assessments', tasks: ['Take official practice tests for Applied Math, Graphic Literacy, Workplace Documents', 'Record 1-7 scores for each'], hours: 4 },
      { label: 'Weeks 2-4', focus: 'Drill the weakest assessment', tasks: ['Official sample questions daily', 'Focus on workplace-scenario problem types'], hours: 9 },
      { label: 'Week 5', focus: 'Retest and verify tier', tasks: ['Retake the practice battery', 'Confirm which single score caps your NCRC tier'], hours: 4 },
      { label: 'Week 6', focus: 'Target the capping score', tasks: ['Intensive work on the lowest assessment only', 'Take the real assessments at an authorized center'], hours: 8 }
    ],
    variants: [
      { label: 'School-administered', detail: 'Many high schools administer WorkKeys as part of career-readiness programs; pacing follows the school calendar.' },
      { label: 'Adult/job-seeker path', detail: 'Workforce boards often offer free or subsidized testing and prep classes tied to state programs.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective WorkKeys strategy is to identify which single assessment caps your NCRC tier and put most of your effort there, because the certificate is awarded at the lowest of the three scores. Strategy one: take all three official practice assessments before studying anything, and accept the uncomfortable baseline; effort is wasted when it goes to an assessment you already pass at the target tier. Strategy two: practice with official ACT materials only for question style, because the workplace-scenario phrasing is distinctive and third-party banks drift from it. Strategy three: in Applied Math, always convert the scenario into a labeled arithmetic setup before calculating, because most errors come from misreading what the question asks (total versus per unit, net versus gross). Strategy four: in Graphic Literacy, read the axes and units before the question; items deliberately test whether you can extract the right value from a chart with multiple series or a floor plan with mixed units. Strategy five: in Workplace Documents, answer from the document text rather than workplace intuition, and practice "apply the instruction to a new case" items, which are the highest-difficulty type. Strategy six: manage the timing by checking the question count before starting each section and setting checkpoints; the assessments are paced for comfortable completion, so a systematic read-then-answer rhythm prevents careless late-section errors.',
    items: [
      { title: 'Find the capping score first', detail: 'The tier is the lowest of three scores; target the weakest assessment.' },
      { title: 'Use official materials', detail: 'ACT item phrasing is distinctive; third-party banks misrepresent it.' },
      { title: 'Label setups in Applied Math', detail: 'Write the units and quantities before calculating.' },
      { title: 'Read axes before questions', detail: 'Graphic Literacy rewards careful data reading over speed.' },
      { title: 'Answer from the document', detail: 'Workplace Documents tests text evidence, not intuition.' }
    ]
  },
  resourceComparison: {
    summary: 'The WorkKeys resource market is dominated by ACT itself, which is good news for cost control. The official ACT WorkKeys practice tests are available for a small fee on the ACT website and are the single most accurate preparation resource; the free WorkKeys curriculum materials and sample questions published by ACT and by state workforce partners cover the skill content thoroughly. Many public workforce development boards and community colleges offer free WorkKeys prep classes, free testing vouchers, and one-on-one coaching through state programs such as Indiana\u2019s WorkOne or South Carolina\u2019s readySC; job seekers should check with the local American Job Center before paying for anything. Commercial prep books and courses exist from the major test-prep publishers and cost roughly $20-$300, but their value is practice volume rather than unique content, since the skill domains are publicly documented. Some employers administer WorkKeys on-site as part of hiring, in which case the assessment is free to the candidate; in that situation, prepare with the official practice tests and skip paid courses entirely. The honest ranking: free state-provided prep first, official ACT practice tests second, commercial courses only for accountability. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ACT official practice tests', values: ['~$10-$20 per assessment', 'Online timed tests', 'The most accurate format and scoring'] },
      { label: 'State workforce prep programs', values: ['Free (many states)', 'In-person/online classes', 'Subsidized testing and coaching'] },
      { label: 'ACT sample questions and curriculum', values: ['Free', 'PDF/web materials', 'Skill review before paid practice'] },
      { label: 'Commercial prep book/course', values: ['$20-$300', 'Print/online', 'Practice volume and structure'] }
    ],
    footnote: 'Prices dated 2025-26; ACT is the only official source of items. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common WorkKeys mistake is spreading preparation evenly across all three assessments when a single low score caps the certificate. Test takers who enter at Gold on Applied Math and Workplace Documents but Bronze on Graphic Literacy spend weeks polishing the two strong areas and never move the tier; the correct move is to ignore the strong areas and grind the capping assessment. Mistake two: doing third-party practice exclusively. The workplace-scenario phrasing in official items is distinctive, and candidates who train on generic math or reading questions are surprised by the applied format. Mistake three: in Applied Math, reading the question once and calculating immediately; a large share of errors come from missing the unit conversion (feet to inches, dozens to units) or answering the wrong quantity. Mistake four: in Graphic Literacy, jumping to the chart before reading its title, axes and legend, then selecting a plausible but wrong series. Mistake five: treating the assessments as speed tests and rushing; the pacing is generous, and careless errors on a 1-7 scale can drop a score a full point, which can cost a tier. Mistake six: assuming the NCRC is accepted everywhere; hiring managers and programs vary, so candidates should confirm the tier their target employers actually require before aiming at Platinum over Gold.',
    items: [
      { mistake: 'Studying all three assessments equally', fix: 'Find the capping score and put 70% of effort there.' },
      { mistake: 'Training only on third-party questions', fix: 'Use official ACT items for question style.' },
      { mistake: 'Calculating before labeling units', fix: 'Write units and target quantity before doing math.' },
      { mistake: 'Reading charts without axes and legend', fix: 'Read title, axes, units, legend before answering.' },
      { mistake: 'Rushing like a speed test', fix: 'Pace for accuracy; one point can change the tier.' }
    ]
  },
  questionTypes: {
    summary: 'Each WorkKeys assessment is multiple choice with four answer options, delivered on a computer. Applied Math contains 34 questions to answer in 55 minutes; items present workplace scenarios (ordering supplies, calculating pay, measuring materials) that require arithmetic, ratios, percentages, unit conversion, and interpreting data in tables. Graphic Literacy contains 35 questions in 55 minutes; items reference charts, graphs, forms, diagrams, floor plans and instrument displays, with difficulty rising from locating a single value to synthesizing information across multiple displays. Workplace Documents contains 35 questions in 50-55 minutes; items present memos, emails, policies, manuals, bulletins and notices, and ask test takers to locate information, identify meaning, and apply instructions to new situations. Scores run 1-7 per assessment. Samples below are editor-written illustrations of the published skill levels, not live exam items.',
    types: [
      { name: 'Applied Math', share: '34 questions / 55 min', detail: 'Workplace arithmetic, ratios, percentages, unit conversion.' },
      { name: 'Graphic Literacy', share: '35 questions / 55 min', detail: 'Reading charts, graphs, forms, diagrams, displays.' },
      { name: 'Workplace Documents', share: '35 questions / 50-55 min', detail: 'Reading memos, policies, manuals; applying instructions.' }
    ],
    samples: [
      {
        prompt: 'A warehouse ships cases of bottled water in cartons that hold 24 bottles each. An order requires 720 bottles. How many cartons are needed?',
        options: ['A. 25', 'B. 28', 'C. 30', 'D. 36'],
        answer: 'C',
        explanation: 'Divide the total bottles by bottles per carton: 720 / 24 = 30 cartons.'
      },
      {
        prompt: 'The bar chart shows monthly sales for two store locations from January through March. The chart title reads "First-Quarter Sales by Location." Which statement is best supported by the chart?',
        options: ['A. Location A outsold Location B in every month shown', 'B. Location B outsold Location A in February only', 'C. Combined sales peaked in March', 'D. Sales were equal in January'],
        answer: 'C',
        explanation: 'This item type tests reading the aggregate across series. The correct reading of the displayed data is that the two series together peak in March; distractors misstate per-month comparisons.'
      },
      {
        prompt: 'Company policy states: "All expense reports must be submitted within 10 business days of the travel end date. Reports submitted later require a written supervisor approval." An employee traveled May 1-3. By which date must the report normally be submitted?',
        options: ['A. May 13', 'B. May 17', 'C. May 20', 'D. June 3'],
        answer: 'B',
        explanation: 'Travel ended May 3; counting 10 business days forward from May 3 (skipping weekends) lands on May 17. The item tests applying a stated instruction to a new case.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published skill levels, not live exam items.'
  },
  examDay: {
    summary: 'WorkKeys assessments are administered at ACT-authorized test centers, which include community colleges, workforce development offices, high schools and employer sites; testing is computer-based and most centers allow scheduling by appointment. On the day, bring a valid government-issued photo ID and any authorization or voucher number provided by the sponsoring program; arrive 15 minutes early. Calculators are allowed for Applied Math (a four-function or scientific calculator is typical; check the center policy), but phone calculators are never allowed, and phones and smartwatches must be stowed. The three assessments may be taken in any order and can be scheduled on separate days, which is a practical advantage: many candidates take them in separate visits to concentrate preparation. Each assessment runs 50-55 minutes with a maximum of 35 questions, so the total testing time for all three is about three hours when taken together, plus breaks. Scores are reported electronically; official score reports are usually available within a few days to two weeks, and the NCRC tier is issued once scores are recorded by ACT. If a candidate wants to raise a tier, ACT allows retaking individual assessments - and only the capping assessment needs to be retaken. Afterwards, the candidate should obtain the official score report and NCRC certificate (electronic and printed), and note that many employers verify the NCRC electronically through the ACT WorkKeys National Registry, so the candidate should not need to provide paper proof in most hiring processes.',
    bring: ['Valid government-issued photo ID', 'Authorization or voucher number', 'Approved calculator for Applied Math', 'Any required masking or site-specific documents'],
    leave: ['Phone, smartwatch, and personal electronics', 'Study notes or formula sheets', 'Unofficial score printouts from practice tests'],
    timeline: [
      { time: 'Arrival', detail: 'Check in at the testing center; confirm your scheduled assessments.' },
      { time: 'Assessment 1', detail: 'Usually Applied Math or your scheduled first assessment (55 minutes).' },
      { time: 'Break', detail: 'Short break between assessments as the center allows.' },
      { time: 'Assessment 2', detail: 'Graphic Literacy or next scheduled assessment (55 minutes).' },
      { time: 'Assessment 3', detail: 'Workplace Documents or next scheduled assessment (50-55 minutes).' },
      { time: 'After testing', detail: 'Scores post electronically; NCRC issued once all three are recorded.' }
    ],
    rules: [
      'Photo ID required; testing is by appointment at authorized centers.',
      'Phone calculators and personal electronics are not allowed.',
      'Assessments may be taken on separate days; retakes are per-assessment.',
      'The NCRC tier is set by your lowest score.'
    ],
    afterwards: 'Scores post in days to two weeks; ACT issues the NCRC tier electronically, and employers can verify it through the WorkKeys National Registry. Retake only the capping assessment to upgrade the tier.'
  }
};

export default data;
