const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Finance & investment certifications desk',
    bio: 'This desk covers the CFA Program and related investment credentials. Exam structure, fees and pass rates come from CFA Institute\'s published program pages and candidate resources, which are revised each year; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against CFA Institute\'s Level III exam pages, the 2026 Level III curriculum weighting, and BLS OOH Financial Analysts (SOC 13-2051), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$101,350 median for financial and investment analysts (BLS, May 2024)',
    summary: 'Level III is the final exam gate before the CFA charter, and the wage question at this level is really a question about charterholders. There is no BLS occupation called "CFA charterholder", and the closest official occupation is Financial and Investment Analysts, SOC 13-2051, which had a May 2024 median of $101,350, with the lowest 10 percent under $62,410 and the highest 10 percent over $180,550. Level III candidates are typically already working in investment roles, so the more relevant framing is the distribution: the charter tends to matter most at the upper end of the analyst and portfolio-management market, where it is required or strongly preferred for portfolio-manager, research and senior advisory tracks. BLS counted 368,500 financial analyst jobs in 2024 and projects 6 percent growth from 2024 to 2034, about 29,900 openings a year. The limitation to state plainly: the BLS median covers everyone in the occupation, chartered or not, and the charter\'s wage premium comes from CFA Institute member compensation surveys, which are member self-reports rather than a BLS series, so we do not quote them as government data. For a candidate at Level III, the practical reading is that passing the exam unlocks access to roles and career ladders where the analyst-median series is the relevant benchmark — the exam itself produces no wage.',
    rows: [
      { label: 'Median annual wage, financial and investment analysts', value: '$101,350', note: 'BLS OOH, SOC 13-2051, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $62,410', note: 'BLS OOH, SOC 13-2051, May 2024' },
      { label: 'Highest 10 percent', value: 'Over $180,550', note: 'BLS OOH, SOC 13-2051, May 2024' },
      { label: 'Projected openings per year', value: '~29,900', note: 'BLS OOH, SOC 13-2051, 2024-2034' }
    ],
    growth: 'BLS projects 6 percent growth for financial analysts from 2024 to 2034, about 29,900 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Financial Analysts', url: 'https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm' }
  },
  passRate: {
    headline: 'CFA Level III publishes pass rates — roughly 47-49% in recent windows (2024-2025)',
    summary: 'CFA Institute publishes cohort pass rates for every Level III window. Recent reported figures have clustered in the high-40s: the February 2024 window reported about 49 percent, the August 2024 window about 47 percent, and later 2024-2025 windows have stayed in the mid-to-high 40s. Historically Level III has often posted the highest pass rate of the three levels, which makes sense: candidates who reach it have already survived Level I and Level II, and the exam rewards the applied, portfolio-level thinking that working investment professionals practise daily. The pass line is a fixed, psychometrically calibrated standard — CFA Institute sets the minimum passing score through standard setting, and the pass rate fluctuates with the candidate pool. The unique feature of Level III is the constructed-response (essay) component, and CFA Institute publishes guidance that candidates who do not practise writing answers to past essay questions materially underperform those who do. The most useful numbers for preparation are therefore not the cohort pass rates but the internal comparisons: candidates who complete the mock programme and who practise constructed responses pass at substantially higher rates than the overall cohort, per CFA Institute\'s own candidate surveys.',
    source: { label: 'CFA Institute - Level III exam results and pass rates', url: 'https://www.cfainstitute.org/en/programs/cfa/exam/results' },
    caveat: 'Pass rates are published per window and fluctuate; the figures above are 2024-2025 reported windows, not a guarantee of future rates.'
  },
  studyPlan: {
    summary: 'Level III shifts from analysis to synthesis: the curriculum covers portfolio management and wealth planning at the level of constructing, managing and explaining portfolios, and the exam is the only CFA level with constructed-response questions. The exam has two sessions of 2 hours 12 minutes each; one session is item sets (vignettes with multiple-choice questions) and the other is constructed response, with about 44 questions in total across the two formats. The dominant topic is Portfolio Management, which carries by far the largest curriculum weight, followed by Fixed Income, Derivatives, Equity and the other topic areas, with Ethics again a mandatory block. A defensible plan runs 250 to 350 hours over 12 to 16 weeks. The first phase (weeks 1-6) builds the portfolio-management framework through the curriculum readings; the second phase (weeks 7-10) adds deliberate constructed-response practice — writing out full answers to essay-style questions and comparing them to the official guideline answers, which is the skill that most distinguishes passers; the third phase (weeks 11-14) is two or three full mocks plus final Ethics and formula review. The essay component is the reason this level feels different, and it must be trained as a writing skill, not just a knowledge test.',
    totalHours: '250-350 hours over 12-16 weeks',
    weeks: [
      { label: 'Weeks 1-6', focus: 'Portfolio framework', tasks: ['Work the portfolio-management and wealth-planning readings', 'Do end-of-chapter and online questions by topic', 'Build the asset-allocation and IPS frameworks'], hours: 140 },
      { label: 'Weeks 7-10', focus: 'Constructed-response practice', tasks: ['Write full answers to past essay questions', 'Compare against official guideline answers and re-write weak ones', 'Drill Ethics with the Code and Standards'], hours: 90 },
      { label: 'Weeks 11-14', focus: 'Mocks and final review', tasks: ['Two to three full mocks under timed conditions', 'Review every miss against the learning outcome statements', 'Final formula sheet and Ethics pass'], hours: 80 }
    ],
    variants: [
      { label: 'Working full time in investments', detail: 'The day job accelerates the portfolio material; protect the essay-practice phase, which the job does not cover.' },
      { label: 'Long gap since Level II', detail: 'Add two weeks of item-set refresher before the essay phase; the format returns quickly.' }
    ]
  },
  prepStrategies: {
    summary: 'The defining strategy at Level III is to train constructed-response writing deliberately: read the question, decide the answer, then write a concise, structured response that names the decision and the reason, and compare it to the official guideline answer. Candidates who only read sample essays — or who outline answers in their heads — consistently underperform those who write full answers, because the exam awards points for the reasoning chain, not just the conclusion. Second, master the investment policy statement (IPS) and asset-allocation framework, since portfolio-level questions dominate and the same frameworks recur across sessions. Third, keep the answer structure tight: the guideline answers reward the key decision plus two or three supporting points, so practise writing to that shape rather than long prose. Fourth, do the official questions and past constructed-response items even if you use a provider, because the exam is built from the curriculum. Fifth, schedule two full mocks, ideally one with the essay session written out in full under the 2-hour-12-minute clock, so the physical stamina and time allocation of writing under pressure are no longer unknown on exam day.',
    items: [
      { title: 'Write full essay answers', detail: 'Points go to the reasoning chain; outline-only practice underperforms written practice.' },
      { title: 'Master the IPS framework', detail: 'Portfolio-level questions dominate; the IPS structure recurs in nearly every session.' },
      { title: 'Keep answers tight', detail: 'Decision plus two or three supporting points matches the guideline-answer shape.' },
      { title: 'Use official materials', detail: 'The exam is built from the curriculum and past essay items; providers drift.' },
      { title: 'Simulate the essay clock', detail: 'One full mock with the constructed-response session written under the real time limit.' }
    ]
  },
  resourceComparison: {
    summary: 'Level III prep mirrors Level II with one addition: a constructed-response practice component. The official curriculum and its digital ecosystem come with registration and are the source of truth for item construction. Kaplan Schweser, Wiley and Mark Meldrum are the major third-party options; Schweser and Wiley offer condensed notes, videos, question banks and mocks from roughly $400 to $1,200, while Mark Meldrum\'s video-based offering is popular for its depth and lower price point. Because the essay is unique to this level, look for a provider that includes a constructed-response grader or detailed guideline-answer comparisons — practice without feedback is half as useful. Free options include the official mock included with registration, past constructed-response items circulated in the candidate forum, and YouTube topic reviews. Total cost including the registration fee (roughly $1,000 to $1,600 by window) runs about $1,400 to $2,800. Prices below are list prices as of mid-2026 and change annually; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CFA Institute curriculum + ecosystem', values: ['Included with registration', 'Digital readings + official questions + mock', 'The source of truth; do the official questions regardless'] },
      { label: 'Kaplan Schweser Level III', values: ['$500-$1,200', 'Condensed notes + video + QBank + mocks', 'Structured learners wanting the standard compression'] },
      { label: 'Wiley Level III', values: ['$400-$1,000', 'Video + notes + question bank', 'Video-first learners'] },
      { label: 'Mark Meldrum Level III', values: ['$300-$700', 'Video lectures + mock exams', 'Candidates who learn well from deep video treatment'] },
      { label: 'Free forum past essays', values: ['$0', 'Candidate forum, past constructed-response items', 'Essay-format practice between paid blocks'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; registration fees vary by window; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most damaging Level III mistake is treating the constructed-response session like an essay exam for a humanities class: candidates write long prose, bury the decision in the middle, and lose points that the guideline answer would have awarded for a clear, structured response. The fix is to write decision-first answers with two or three supporting points, and to practise that shape repeatedly. The second mistake is skipping written practice entirely and only reading sample answers, which never trains the timing or the retrieval under pressure. Third, candidates under-weight Ethics because of its smaller curriculum share, forgetting that it is the only topic guaranteed to appear in both sessions. Fourth, many candidates over-focus on the newest curriculum topics and neglect the portfolio-management core that carries the largest weight. Fifth, ignoring the physical demands of the exam — two long sessions, one of which is writing — leaves stamina untrained; the mock programme must include the written session under the real clock. Finally, last-week reading of new material instead of reviewing frameworks and Ethics loses more points than it gains.',
    items: [
      { mistake: 'Writing prose instead of structured answers', fix: 'Lead with the decision, then two or three supporting points; match the guideline shape.' },
      { mistake: 'Only reading sample essays', fix: 'Write full answers and compare against guideline answers; reading does not train timing.' },
      { mistake: 'Under-weighting Ethics', fix: 'Ethics appears in both sessions; it is the most reliable points block.' },
      { mistake: 'Chasing new topics over the core', fix: 'Portfolio management carries the largest weight; master the core before the edges.' },
      { mistake: 'Never simulating the essay clock', fix: 'One full mock with the constructed-response session written under the real time limit.' }
    ]
  },
  questionTypes: {
    summary: 'Level III combines two formats across two sessions of 2 hours 12 minutes each. One session is item sets: vignettes followed by multiple-choice questions, testing applied portfolio analysis. The other session is constructed response: open-ended questions requiring written answers, often structured as several sub-parts under one scenario — build an IPS, recommend an allocation, evaluate a fixed-income strategy, or identify and correct an error in a portfolio decision. Constructed-response items are scored against guideline answers that award credit for the decision and the reasoning. Ethics appears in both sessions, usually as scenario questions asking you to identify violations. Samples below are editor-written illustrations of the published blueprint, not live exam items; they show the decision-plus-reason shape the essay answers require.',
    types: [
      { name: 'Item sets (multiple choice)', share: 'One full session', detail: 'Vignettes with multiple-choice items on applied portfolio analysis.' },
      { name: 'Constructed response', share: 'One full session', detail: 'Open-ended, multi-part questions scored against guideline answers.' },
      { name: 'Ethics items', share: 'Both sessions', detail: 'Scenario questions on Code and Standards violations.' }
    ],
    samples: [
      {
        prompt: 'A client with a 10-year horizon and moderate risk tolerance asks you to recommend an asset allocation. Using the IPS framework, the most appropriate first step is to:',
        options: ['A. Recommend a 60/40 equity/bond split immediately', 'B. Establish the client\'s objectives and constraints, then derive the allocation', 'C. Compare allocations from the firm\'s model library', 'D. Defer the decision until markets stabilise'],
        answer: 'B',
        explanation: 'The IPS framework derives the allocation from the client\'s stated objectives (return needs, time horizon) and constraints (risk tolerance, liquidity, tax, legal), so establishing those first is the correct sequence. Recommending a split before the IPS work, copying model portfolios, or deferring entirely each skip the required analytical step.'
      },
      {
        prompt: 'Under the CFA Institute Code and Standards, when a member learns that a colleague has committed a material violation of applicable law, the member should:',
        options: ['A. Report it to the appropriate regulatory authority directly and immediately', 'B. Dissociate from the activity and report it through the firm\'s compliance procedures first', 'C. Ignore it unless the member is personally involved', 'D. Document it and take no further action'],
        answer: 'B',
        explanation: 'The Standards require members to report suspected violations through their firm\'s internal compliance procedures, and to dissociate from the activity. Directly contacting regulators is expected in certain circumstances, but the standard pathway begins with internal reporting; ignoring or merely documenting the violation is not compliant.'
      },
      {
        prompt: 'An investor in a rising-rate environment asks about the interest-rate risk of her bond portfolio. The most direct measure of price sensitivity is:',
        options: ['A. Yield to maturity', 'B. Modified duration', 'C. Convexity alone', 'D. The coupon rate'],
        answer: 'B',
        explanation: 'Modified duration directly measures the approximate percentage price change for a 100-basis-point change in yield, making it the standard sensitivity measure. Yield to maturity and coupon describe the return and cash-flow profile, and convexity refines the duration estimate rather than standing alone.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'Level III is a computer-based exam at a Pearson VUE centre during set windows (February and August in most years). You sit two sessions of 2 hours 12 minutes each with a scheduled break, on roughly 44 questions in two formats. Bring your valid passport — the only accepted ID for CFA exams — an approved calculator (TI BA II Plus or HP 12C families), and your appointment confirmation; everything else goes in the locker. Arrive 30 minutes early; late arrivals cannot enter. During the constructed-response session, type your answers into the exam software, which includes a basic word processor; plan time per question and leave the longest questions for last. Results post to your CFA Institute account roughly 6 to 8 weeks after the window, with banded topic performance. On a pass, you complete the work-experience requirement (typically four years of qualified investment work) and the ethics acknowledgement to be awarded the charter. On a fail, retake in a later window. The afterwards matters: Level III is the final exam, but the charter and the career market it unlocks arrive only after the experience requirement is verified.',
    bring: ['Valid passport (the only accepted ID for CFA exams)', 'Approved calculator (TI BA II Plus or HP 12C family) and batteries', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes, books and formula sheets', 'Bags and personal items beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Check in with passport, store belongings, complete security checks.' },
      { time: 'Session 1', detail: '2h12m in one format (item set or constructed response, per your seat assignment).' },
      { time: 'Break', detail: 'Scheduled break; do not discuss the exam content in the waiting area.' },
      { time: 'Session 2', detail: '2h12m in the other format; confirm submission before leaving.' },
      { time: 'Afterwards', detail: 'Results post 6-8 weeks later with banded topic performance.' }
    ],
    rules: [
      'Passport required; other IDs are not accepted',
      'Only approved calculators may be brought into the room',
      'Constructed responses are typed into the exam software'
    ],
    afterwards: 'On a pass, complete the work-experience and ethics requirements to receive the charter. On a fail, retake in a later window. The charter is awarded only after all three levels plus the experience requirement are complete.'
  }
};

export default data;
