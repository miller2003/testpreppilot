const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'State licensing & insurance desk',
    bio: 'The Texas Life & Health insurance exam structure is drawn from the Texas Department of Insurance (TDI) exam program and the Pearson VUE testing information for the General Lines Life, Accident & Health exam, which is updated on a published revision cycle; TDI does not publish aggregate first-time pass rates, which we state plainly. Salary figures come from the BLS Occupational Outlook Handbook occupation pages named by SOC code (May 2024).',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against the TDI agent licensing program, the Pearson VUE Texas insurance exam outline, and the BLS OOH Insurance Sales Agents page (May 2024 data).',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Insurance sales agents earned a May 2024 BLS median of $60,370, and the Texas Life & Health exam is the licensure gate for selling life and health products in the state.',
    summary: 'The salary answer for the Texas Life & Health insurance exam is a licensing story: the BLS Occupational Outlook Handbook reports a May 2024 median annual wage of $60,370 for SOC 41-3021 Insurance Sales Agents, with the lowest 10 percent earning below $36,390 and the highest 10 percent above $135,660, and the exam score itself does not appear in wage data because the BLS classifies by job duty, not by certification. The exam is the gate to the Texas Life, Accident & Health agent license: candidates must pass the state exam with a 70 percent score, complete a criminal background check, and be appointed by an insurer before they can legally sell, solicit, or negotiate life, accident, and health products in Texas. Earnings in this occupation are heavily commission-driven, so the BLS median masks a wide spread between new agents and top producers, and income depends far more on the appointment, the agency, and the book of business than on the exam result. The BLS projects 4 percent employment growth for insurance sales agents from 2024 to 2034, about as fast as the average for all occupations, with about 47,000 openings per year driven largely by replacement demand, so the Texas licensing pipeline feeds a steady rather than explosive market. Two caveats anchor the picture: first, the license is a state requirement, not an employment credential, so its value is realized through the appointment and the sales role; second, many agents sell both life/health and property/casualty lines, which adds a second exam and a second license. For a candidate asking whether the Texas Life & Health exam pays, the direct answer is that it pays through the license and the sales career it enables, and the earnings follow the commission schedule rather than the score itself.',
    rows: [
      { label: 'Median annual wage', value: '$60,370', note: 'BLS OOH, Insurance Sales Agents (SOC 41-3021), May 2024' },
      { label: 'Lowest 10%', value: '$36,390', note: 'Entry-level and part-time producers' },
      { label: 'Highest 10%', value: '$135,660', note: 'Top producers, largely commission-driven' },
      { label: 'Job openings', value: '~47,000/year', note: 'Mostly replacement demand (BLS 2024-2034)' }
    ],
    growth: 'BLS projects 4 percent employment growth for insurance sales agents (2024-2034) with roughly 47,000 openings per year, driven by replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - Insurance Sales Agents', url: 'https://www.bls.gov/ooh/sales/insurance-sales-agents.htm' }
  },
  passRate: {
    headline: 'TDI does not publish official first-time pass rates for the Texas Life & Health exam — private providers cite roughly 60 percent, and the state-set passing score is 70 percent.',
    summary: 'The direct answer on pass rates is that the Texas Department of Insurance does not publish aggregate first-time pass-rate statistics for the General Lines Life, Accident & Health exam, so any percentage circulating online — such as the roughly 60 percent first-time figure cited by prep providers — is a private estimate rather than an official number, and we do not restate it as fact. What is published and stable is the scoring rule: Texas sets the passing score at 70 percent on the General Lines Life, Accident & Health exam, administered by Pearson VUE on behalf of TDI, and the candidate must clear that mark on the state exam to move forward with the license application. The exam itself, under the current TDI outline, is a computer-based test of 150 selected-response questions with a 150-minute time limit, covering national and general insurance concepts plus Texas-specific laws and regulations, with a mix of scored and pretest items — the exact question count and split should be confirmed on the current Pearson VUE Texas insurance page, because the outline is revised on a published cycle. The practical read on difficulty: the exam is broad rather than deep, and the highest failure driver is the Texas-specific law content, because candidates who study national insurance concepts and skim the Texas Insurance Code routinely miss the state-law items; candidates who drill a Texas-specific question bank and read the state chapter closely clear the 70 percent mark reliably. Because the retake rule is permissive — candidates may retake after a 24-hour wait and the applicable exam fee — the practical strategy is to schedule a retake window early and treat the first attempt as a diagnostic if the prep is thin.',
    source: { label: 'Pearson VUE Texas insurance licensing', url: 'https://home.pearsonvue.com/tx/insurance' },
    caveat: 'TDI publishes no official first-time pass rate for the Texas Life & Health exam; the state-set passing score is 70 percent, and retakes are allowed after 24 hours with the exam fee.'
  },
  studyPlan: {
    summary: 'An efficient Texas Life & Health study plan is 50-60 hours over 4-6 weeks, because the exam is broad across life and health products and heavily weighted toward Texas-specific law, and the fastest score gains come from covering the national concepts and the Texas Insurance Code in proportion to the outline while drilling a Texas-specific question bank. The TDI and Pearson VUE outline is the scope map: life insurance products, health insurance products, annuities and retirement products, Texas insurance laws and regulations, and ethics and general insurance, and studying the categories in proportion to their weight — with the state-law content receiving deliberate time because it is the highest failure driver — is the highest-yield planning decision. The study window should split into national concept coverage (weeks 1-3) and Texas law plus question-bank drilling (weeks 4-5), followed by a full practice test (week 6): the state-law items reward hands-on drilling against a Texas-specific bank, and candidates who rehearse the formats against a current bank score higher than candidates who only read general study texts. Candidates with sales or insurance backgrounds should budget the lower end; candidates new to insurance should budget the upper end and add product knowledge review. The final week should include at least one full timed practice test at the real format, because the 150-minute pacing and the state-law question mix are the two things candidates underestimate, and the 70 percent passing mark is best targeted when practice scores clear it with margin. The week-by-week plan below spends that budget in outline proportion, and the final week doubles as the moment to book the Pearson VUE exam and schedule fingerprints, which the licensing pipeline requires alongside the background check and the insurer appointment.',
    totalHours: '50-60 hours over 4-6 weeks',
    weeks: [
      { label: 'Week 1-2', focus: 'Life insurance products', tasks: ['Study term, whole, universal, and group life policies', 'Cover riders, provisions, and policy ownership', 'Review annuities and retirement products'], hours: 16 },
      { label: 'Week 3', focus: 'Health insurance products', tasks: ['Study individual and group health coverage', 'Cover disability income, long-term care, and Medicare products', 'Review Texas health insurance rules'], hours: 12 },
      { label: 'Week 4-5', focus: 'Texas law and drilling', tasks: ['Read the Texas Insurance Code chapters cited in the outline', 'Drill 500-800 items from a Texas-specific Life & Health bank', 'Log every miss and re-read the associated content'], hours: 18 },
      { label: 'Week 6', focus: 'Full test and readiness', tasks: ['Take a full timed practice test scoring above 70%', 'Re-drill the miss log until clean', 'Book the Pearson VUE exam and schedule fingerprints'], hours: 8 }
    ],
    variants: [
      { label: 'Insurance or sales background', detail: 'Budget the lower end and weight time toward the Texas state-law chapter and the question formats.' },
      { label: 'New to insurance', detail: 'Budget the upper end and add product-knowledge review before the drilling phase.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant prep strategy for the Texas Life & Health exam is studying the national concepts and the Texas Insurance Code in outline weight and drilling a Texas-specific question bank with a miss log, because the state-law items decide most failures and the 70 percent passing mark is best targeted with proportional coverage. First, download the current Pearson VUE Texas insurance outline and read the content categories and their approximate weights, because the outline defines exactly what is tested and the study plan should follow its proportions. Second, treat the Texas Insurance Code as a separate study subject, not an afterthought — the state chapter is heavily weighted and the highest failure driver, and candidates who read the TDI-referenced chapters and drill Texas-specific items clear the exam reliably. Third, cover the national concepts in weight order, with life and health products receiving the largest share and annuities and ethics receiving deliberate passes. Fourth, drill a Texas-specific question bank, 500-800 items with explanations, and build a miss log tied to the outline categories; the bank rehearsal converts the reading into recall and the explanations teach the state-law detail. Fifth, run at least two full timed practice tests, because the 150-minute pacing and the stamina of 150 questions are real, and schedule the real exam only when practice scores clear 70 percent with margin. Finally, manage the licensing pipeline in parallel — schedule fingerprints with IdentoGO and prepare the TDI application through Sircon — because the exam is one step in a process, and the background check and the insurer appointment take time. A further high-yield tactic is to build a one-page Texas-law cheat sheet during study — grace periods, notice deadlines, and the TDI rules the items reward — because the state-law recall items are the ones the cheat sheet consolidates.',
    items: [
      { title: 'Download the current outline first', detail: 'The Pearson VUE Texas outline defines the categories and weights; follow its proportions.' },
      { title: 'Treat Texas law as a separate subject', detail: 'The state chapter is heavily weighted and the highest failure driver.' },
      { title: 'Cover national concepts in weight order', detail: 'Life and health products carry the exam; annuities and ethics get deliberate passes.' },
      { title: 'Drill a Texas-specific bank with a miss log', detail: '500-800 items with explanations, tied to the outline categories.' },
      { title: 'Run full timed practice tests', detail: 'Schedule the real exam only when practice clears 70% with margin.' }
    ]
  },
  resourceComparison: {
    summary: 'Texas Life & Health prep resources split into the official outline, review courses, and Texas-specific question banks, and the buying logic is anchored by the official Pearson VUE outline because it defines the content categories and weights precisely, and by a Texas-specific bank because the state-law items are the highest failure driver. The official outline and TDI materials are free, and the Pearson VUE website also lists the exam details, fee, and retake rules — this is the foundation of every plan. Review courses from well-regarded providers, roughly $100-300, add structured video and reading coverage of the national concepts and the Texas chapter; the options that explicitly reference the current Texas outline are the ones to choose. Texas-specific question banks, roughly $40-100, add the state-law drilling and explanations that decide the exam; the banks that reference the current General Lines Life, Accident & Health outline are the ones to choose. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. The exam fee is $43 for the combined Life, Accident & Health exam (Pearson VUE on behalf of TDI), plus the fingerprinting and application fees, with the exact amounts on the TDI and Pearson VUE pages. A cheap readiness check is the official outline and a free practice test before buying anything, because candidates with insurance backgrounds often need only a Texas-specific bank, not a full course. For candidates new to insurance products, the review course is the purchase that closes the product-knowledge gap, while candidates with backgrounds can usually buy only the Texas-specific bank; in both cases the official outline remains the free, authoritative anchor for the plan.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official outline + TDI materials', values: ['Free', 'Official documents', 'The authoritative scope and exam rules'], note: '' },
      { label: 'Life & Health review course', values: ['$100-300', 'Online course with video and reading', 'Candidates new to insurance products'], note: '' },
      { label: 'Texas-specific question bank', values: ['$40-100', 'Online, state-law drilling', 'The state-law items that decide the exam'], note: '' },
      { label: 'Texas L&H exam registration', values: ['$43', 'Pearson VUE', 'The real exam'], note: '' }
    ],
    footnote: 'List prices as of mid-2026 and change frequently; we rank nothing by commission. The Texas Life, Accident & Health exam fee is $43, plus fingerprinting and application fees (confirm on the TDI and Pearson VUE pages).'
  },
  commonMistakes: {
    summary: 'The most common mistake on the Texas Life & Health exam is studying national insurance concepts and skimming the Texas Insurance Code, because the state-law items are heavily weighted and the highest failure driver, and candidates who treat Texas law as an afterthought lose the points that decide the 70 percent mark; the second is underestimating the volume, because the exam is broad across life, health, and annuity products and the 150-question session rewards breadth. A third recurring error is skipping full timed practice tests and sitting cold, when the 150-minute pacing is a real obstacle and practice tests are the cheapest readiness check. Candidates also routinely ignore the retake economics, treating the first attempt as disposable when the 24-hour retake rule means a diagnostic attempt is fine only if the second window is planned. Another pattern is using a generic national study guide without Texas content, when the state-law questions require a Texas-specific bank. Finally, some candidates neglect the licensing pipeline around the exam — fingerprints, the TDI application, and the insurer appointment — and pass the test only to stall on the background check. The volume mistake is amplified by the blueprint, which spans life insurance products, health insurance products, annuities and retirement products, Texas insurance laws and regulations, and ethics and general insurance, so studying one product line leaves most of the scope untouched. The pacing mistake matters because 150 questions run against a continuous 150-minute clock, which is exactly why timed rehearsal is the cheapest insurance against running short. The pipeline mistake is the costliest in time, because the fingerprint background check and the insurer appointment take time and the passing score feeds the TDI application through Sircon, so waiting until after the exam simply delays a license already earned.',
    items: [
      { mistake: 'Skipping the Texas law chapter', fix: 'Read the TDI-referenced chapters and drill Texas-specific items; they decide the exam.' },
      { mistake: 'Underestimating the volume', fix: 'Study life, health, and annuity products in outline weight; the exam is broad.' },
      { mistake: 'Skipping timed practice tests', fix: 'Run full 150-question practice tests; pacing is a real obstacle.' },
      { mistake: 'Using a generic national guide', fix: 'Choose a bank that references the current Texas General Lines outline.' },
      { mistake: 'Neglecting the pipeline', fix: 'Schedule fingerprints and prepare the TDI application in parallel with exam prep.' }
    ]
  },
  questionTypes: {
    summary: 'The Texas Life, Accident & Health exam is a computer-based test of 150 selected-response questions with a 150-minute time limit, administered by Pearson VUE on behalf of TDI, with a state-set passing score of 70 percent, and content spanning life insurance products, health insurance products, annuities and retirement, Texas insurance law, and ethics and general insurance — the exact question count and split should be confirmed on the current Pearson VUE outline. The item set mixes scored and pretest questions, so a small share of the 150 items you answer does not count toward the result, one more reason to answer everything and move forward. The item style is single-best-answer, with a mix of national concept items, product-knowledge items, and Texas-specific law items, and the state-law items are the highest failure driver. The samples below illustrate three of the content areas — a life product item, a health product item, and a Texas-law item. The life product items, which hold the largest share, cover policy types, riders, provisions, and ownership, and the first sample tests term coverage, which runs for a set period with no cash value, against the permanent policies that build cash value. The health product items, also the largest share, cover group and individual coverage, disability, long-term care, and Medicare products, and the second sample tests the cost-sharing vocabulary: the fixed-dollar copayment versus the deductible and the coinsurance percentage. The Texas law items form the core content that decides the exam, drawing on the Texas Insurance Code, its deadlines, and TDI rules, and the third sample tests the 30-day notice window for an address change, a state-law detail a generic national guide would not cover. The sample items are editor-written illustrations of the published blueprint, not live test items.',
    types: [
      { name: 'Life product items', share: 'Largest share', detail: 'Policy types, riders, provisions, and ownership.' },
      { name: 'Health product items', share: 'Largest share', detail: 'Group and individual coverage, disability, LTC, and Medicare.' },
      { name: 'Texas law items', share: 'Core content', detail: 'Texas Insurance Code, deadlines, and TDI rules; the highest failure driver.' }
    ],
    samples: [
      {
        prompt: 'Which life insurance policy type provides coverage for a set period and typically builds no cash value?',
        options: [
          'A. Term life insurance',
          'B. Whole life insurance',
          'C. Universal life insurance',
          'D. Variable life insurance'
        ],
        answer: 'A',
        explanation: 'Term life insurance covers a set period, such as 10, 20, or 30 years, and typically accumulates no cash value. Whole life, universal life, and variable life are permanent policies that build cash value.'
      },
      {
        prompt: 'An insured\u2019s health plan pays a fixed dollar amount for each covered service, such as a physician visit, and the insured pays the rest. This cost-sharing feature is best described as a:',
        options: [
          'A. Benefit schedule',
          'B. Deductible',
          'C. Copayment',
          'D. Coinsurance percentage'
        ],
        answer: 'C',
        explanation: 'A copayment is a fixed dollar amount the insured pays for a covered service, such as $25 for a physician visit, with the plan paying the balance per its schedule. A deductible is the amount paid before coverage begins, and coinsurance is a percentage split rather than a fixed dollar amount.'
      },
      {
        prompt: 'Under Texas rules, how long does an insured typically have to notify the insurer of a change of address to avoid a lapse in policy communications?',
        options: [
          'A. 30 days',
          'B. 60 days',
          'C. 90 days',
          'D. 180 days'
        ],
        answer: 'A',
        explanation: 'Texas rules commonly cite 30 days for an insured or agent to notify the insurer of an address change so that policy communications remain timely. The other intervals describe different notice periods in Texas insurance regulation.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'The Texas Life, Accident & Health exam is a computer-based test administered by Pearson VUE on behalf of TDI, and the direct exam-day answer is that you will sit 150 selected-response questions over 150 minutes (confirm the current outline on the Pearson VUE page), with a 70 percent passing score and the result reported immediately at the end of the appointment. Arrive at least 30 minutes early with two forms of valid signature-bearing identification, one government-issued with a photo, and follow the Pearson VUE check-in rules, because the center enforces strict identification and security procedures. The appointment begins with a tutorial on the testing software, then the exam clock starts; there are no scheduled breaks, so the timed-practice discipline matters. All items are single-best-answer, and the software supports flagging items for review — use the flag feature rather than leaving items blank. Expect a quiet, proctored environment with a visible countdown clock; pace at roughly 60 seconds per question to leave review margin. The official score report appears immediately after the exam, with a diagnostic breakdown of your performance if you do not pass, and the score report is a key part of the TDI license application. If the score falls short of 70 percent, the exam can be retaken after a 24-hour wait and the applicable exam fee, so confirm the current retake rules and re-study the miss log before the next attempt. Afterwards, the passing score supports the TDI license application through Sircon, which also requires the completed fingerprint background check and, for most new agents, an appointment with an insurer before any products can be sold.',
    bring: ['Two forms of valid signature-bearing ID, one government-issued with photo', 'Pearson VUE booking confirmation', 'Approved glasses or hearing aids if used', 'Snacks for before the test (not in the test room)'],
    leave: ['Phone, smartwatch, and other electronics (stored per center rules)', 'Study materials and notes', 'Personal stationery (the center provides materials)', 'Any item on the Pearson VUE prohibited list'],
    timeline: [
      { time: '30 min before', detail: 'Arrive, present ID and booking confirmation, and check in' },
      { time: '0-10 min', detail: 'Tutorial on the testing software; then the clock starts' },
      { time: '150 minutes', detail: 'Work the 150 multiple-choice items; flag for review and pace' },
      { time: 'After the test', detail: 'Immediate score report; diagnostic breakdown if you do not pass' }
    ],
    rules: ['Two valid signature-bearing IDs, one with photo, required', 'No scheduled breaks; the exam clock runs continuously', 'No personal electronics in the test room', 'Answer every item; flagging for review is supported'],
    afterwards: 'A passing score supports the TDI license application via Sircon. Complete the fingerprint background check and secure an insurer appointment before selling, and retake after 24 hours with targeted miss-log study if the score falls short of 70%.'
  }
};

export default data;
