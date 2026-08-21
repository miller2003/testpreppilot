const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Risk management & financial certifications desk',
    bio: 'We cover GARP certifications for financial risk. Format and fee facts come from GARP official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the FRM Part I exam structure, scoring, fees and pass-rate reporting against GARP official pages; verified BLS financial wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'FRM Part I is the first step on the risk-management track: financial and investment analysts earned a $101,350 median in May 2024 (BLS)',
    summary: 'The FRM (Financial Risk Manager) Part I exam is the first of two exams in the GARP certification program for financial risk professionals, covering the foundations of risk management, quantitative analysis, financial markets and products, and valuation and risk models. It is a professional certification pathway rather than a job license, so no single BLS SOC code attaches to it; the salary story belongs to the risk and finance occupations it serves. BLS reported that financial and investment analysts (SOC 13-2051) earned a median of $101,350 in May 2024, and financial risk specialists (13-2099) about $101,100 (OEWS May 2024); risk-management roles in banking, insurance, asset management and energy trading sit in these ranges, with senior risk officers and quantitative risk roles paying substantially more. The structural point is that the FRM is one of the two recognized risk-management designations (alongside the PRM), and it is common in job postings for risk analyst, market risk, credit risk and model-risk roles, particularly at banks and financial institutions; Part I establishes the common body of risk knowledge, and the full certification (Part I + Part II + two years of relevant work experience) is the credential employers recognize. BLS classifies workers by occupation, not certifications, so no certificate maps to a specific wage; the value is the domain signal in a market where risk expertise is specialized and well compensated. GARP publishes pass rates for the FRM exams - the honest difference from most certifications - and Part I pass rates in recent years have typically been in the 40-50 percent range.',
    rows: [
      { label: 'Financial and investment analysts median, May 2024', value: '$101,350', note: 'BLS OEWS, SOC 13-2051' },
      { label: 'Financial risk specialists median, May 2024', value: '~$101,100', note: 'BLS OEWS, SOC 13-2099' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'FRM structure', value: 'Part I + Part II + 2 yrs experience', note: 'GARP, full certification' }
    ],
    growth: 'Financial-analyst employment is projected to grow 7 percent from 2024 to 2034; risk roles follow financial-industry demand.',
    source: { label: 'BLS Occupational Outlook Handbook - Financial Analysts', url: 'https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm' }
  },
  passRate: {
    headline: 'GARP publishes FRM pass rates: Part I first-attempt pass rates have recently been approximately 40-50 percent',
    summary: 'GARP is one of the few major certification bodies that publishes exam pass rates, and it reports them by exam and session. For FRM Part I, recent years have shown first-attempt pass rates approximately in the 40-50 percent range (for example, the May and November 2024 administrations were reported around the low-to-mid 40s, and 2023 sessions similar), with some sessions higher; Part II pass rates have generally been higher than Part I. These are cohort statistics that vary by session, and GARP notes that candidates who complete a full course of study typically fare better. The Part I exam is computer-based, 100 multiple-choice questions in 4 hours, with a single sitting in May and November each year. The exam covers four areas: foundations of risk management (20 percent), quantitative analysis (20 percent), financial markets and products (30 percent), and valuation and risk models (30 percent). Scores are reported as pass/fail with a quartile breakdown by topic (GARP reports which quartiles the candidate scored in each area), which gives candidates a diagnostic for retakes; GARP does not publish a numeric passing score, and candidates who fail may retake (there is no limit on attempts, but candidates should verify the current retake policy and fees). Because GARP publishes the pass rates, the honest preparation message is direct: the exam is genuinely selective, and the ~40-50 percent recent Part I pass rate is the realistic context for planning a serious study schedule.',
    source: { label: 'GARP FRM exam information and pass rates', url: 'https://www.garp.org/frm' },
    caveat: 'GARP publishes pass rates; recent FRM Part I first-attempt rates were approximately 40-50%. No numeric passing score is published - results are pass/fail with quartile diagnostics.'
  },
  studyPlan: {
    summary: 'A realistic FRM Part I plan runs 200-300 hours over 3-4 months, and GARP\u2019s published pass rates (recently ~40-50 percent for Part I) make clear that this is a serious commitment. The exam is 100 questions in 4 hours covering four areas: foundations of risk management (risk types, governance, the role of risk management), quantitative analysis (probability, statistics, regression, time-series basics), financial markets and products (equities, bonds, derivatives, FX, and the markets they trade in), and valuation and risk models (option pricing, value at risk, and risk-model concepts). Month 1: read the GARP curriculum books (the exam is based on GARP\u2019s own readings) covering foundations and quantitative analysis, with practice questions after each chapter; establish a baseline with GARP\u2019s practice exams. Months 2-3: complete financial markets and products and valuation and risk models, integrating daily practice questions - the standard pattern is 30-50 questions daily with full answer review - and use a question bank for volume. Month 4: two to three full practice exams under timed conditions, targeted review of the quartile diagnostics, and taper. The dominant resources are GARP\u2019s official books and practice exams (included with enrollment), a question bank, and optional third-party study materials; many candidates also take a live or online prep course. The exam fee is roughly $1,100-$1,200 for Part I (early and standard registration tiers; verify current pricing), and candidates should register for the May or November sitting with enough lead time.',
    totalHours: '200-300 hours over 3-4 months',
    weeks: [
      { label: 'Month 1', focus: 'Foundations and quant', tasks: ['GARP books: foundations and quantitative analysis', 'Chapter practice questions'], hours: 70 },
      { label: 'Months 2-3', focus: 'Markets and valuation', tasks: ['Financial markets and products', 'Valuation and risk models; 30-50 Qs daily'], hours: 150 },
      { label: 'Month 4', focus: 'Practice exams and taper', tasks: ['2-3 full timed practice exams', 'Quartile-targeted review'], hours: 60 }
    ],
    variants: [
      { label: 'Part I and Part II strategy', detail: 'Some candidates sit Part I and Part II in the same window (Part II has 80 questions); most take Part I first and Part II in a later session.' },
      { label: 'Work-experience requirement', detail: 'The full FRM designation requires two years of relevant professional work experience after passing both parts.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective FRM Part I strategies treat it as a quant-heavy, curriculum-based exam. Strategy one: read the GARP curriculum books as the primary source, because the exam is written against GARP\u2019s own readings, and candidates who study only third-party summaries miss the framing and the specific terminology; the books are included with enrollment. Strategy two: make daily practice questions the backbone - 30-50 questions daily with full review of every answer, because the exam\u2019s 100 questions in 4 hours demand speed and the question style is learned through volume; a question bank is the standard supplement. Strategy three: master quantitative analysis early - probability, statistics and regression underpin the valuation and risk-model content, and candidates who rush the quant foundation struggle in the later topics; the quant area is also the most trainable. Strategy four: weight the two 30-percent areas (financial markets and products, valuation and risk models) appropriately; half the exam comes from them, and the option-pricing and value-at-risk concepts deserve the deepest study. Strategy five: use GARP\u2019s practice exams as the final checkpoint - they are the closest match to the format and the timed 4-hour endurance - and take at least two. Strategy six: manage the retake plan honestly, using the quartile diagnostics to target the weakest areas, because the ~40-50 percent pass rate means many candidates sit twice.',
    items: [
      { title: 'Read the GARP curriculum', detail: 'The exam is written against GARP\u2019s own books.' },
      { title: 'Daily question volume', detail: '30-50 questions daily with full review.' },
      { title: 'Master the quant foundation', detail: 'Probability, statistics and regression underpin the rest.' },
      { title: 'Weight the 30% areas', detail: 'Markets and valuation are half the exam.' },
      { title: 'Use GARP practice exams', detail: 'The closest format match; take 2-3 timed.' }
    ]
  },
  resourceComparison: {
    summary: 'The FRM Part I resource market is anchored by GARP\u2019s official materials, which are included with enrollment. GARP provides the full curriculum books (the official readings), practice exams and study guides as part of the exam fee, which is roughly $1,100-$1,200 for Part I (early and standard registration tiers; verify current pricing). Question banks are the standard paid supplement: the major FRM question banks cost about $150-$400 for a subscription and provide the practice volume that the curriculum alone lacks. Third-party study guides, video courses and live classes ($300-$2,000) add structure and are popular among candidates, with the honest caveat that the exam is curriculum-based and third-party material must stay aligned with the current GARP readings. The free resources include GARP\u2019s practice questions and the published exam outline. The honest ranking: the GARP curriculum and practice exams (included), a question bank for volume, and a course only for structure or for candidates whose quantitative foundation needs support. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'GARP curriculum books', values: ['Included with exam fee', 'Print/ebook', 'The primary source - the exam is based on them'] },
      { label: 'GARP practice exams', values: ['Included', 'Online', 'Format and timing rehearsal'] },
      { label: 'Question bank subscription', values: ['$150-$400', 'Online', 'Daily practice volume'] },
      { label: 'Prep course (live/online)', values: ['$300-$2,000', 'Live/on-demand', 'Structure and quant support'] }
    ],
    footnote: 'Prices dated 2025-26; the Part I exam fee is ~$1,100-$1,200 (verify tiers). No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common FRM Part I mistakes come from underestimating the quantitative depth and the curriculum basis. Mistake one: studying third-party summaries instead of the GARP curriculum; the exam is written against GARP\u2019s readings, and candidates who learn from condensed material miss the terminology and framing the exam expects. Mistake two: skipping the quantitative foundation; probability, statistics and regression underpin the valuation content, and candidates who rush the math struggle in the last two areas. Mistake three: low question volume; candidates who read without daily practice questions reach the 4-hour, 100-question exam unpracticed, and the ~40-50 percent pass rate reflects that. Mistake four: ignoring the 4-hour endurance; candidates who never take a full timed practice exam misjudge pacing. Mistake five: assuming the pass rate is like a "normal" certification; GARP publishes the real numbers (recently ~40-50 percent for Part I), and candidates who plan a 200-hour minimum study schedule are the realistic ones. Mistake six: forgetting the full-certification requirements; the FRM designation needs Part II and two years of relevant work experience, so the roadmap should be planned from the start. Finally, candidates should register early for the lower fee tier and confirm the May/November window that fits their study schedule.',
    items: [
      { mistake: 'Skipping the GARP curriculum', fix: 'The exam is based on GARP\u2019s own readings.' },
      { mistake: 'Rushing the quant foundation', fix: 'Probability and statistics underpin the later topics.' },
      { mistake: 'Low question volume', fix: 'Daily practice questions are essential.' },
      { mistake: 'Ignoring the 4-hour endurance', fix: 'Take full timed practice exams.' },
      { mistake: 'Under-planning the schedule', fix: 'The ~40-50% pass rate calls for 200+ hours.' }
    ]
  },
  questionTypes: {
    summary: 'The FRM Part I exam is 100 multiple-choice questions in 4 hours, computer-based, with single-sitting administrations in May and November. The four areas: foundations of risk management (20 percent), quantitative analysis (20 percent), financial markets and products (30 percent), and valuation and risk models (30 percent). Results are pass/fail with quartile diagnostics by topic; GARP publishes cohort pass rates (recently ~40-50 percent for Part I). Samples below are editor-written illustrations of the published exam topics, not live exam items.',
    types: [
      { name: 'Foundations of risk management', share: '20% of items', detail: 'Risk types, governance, role of risk management.' },
      { name: 'Quantitative analysis', share: '20% of items', detail: 'Probability, statistics, regression, time series.' },
      { name: 'Financial markets and products', share: '30% of items', detail: 'Equities, bonds, derivatives, FX.' },
      { name: 'Valuation and risk models', share: '30% of items', detail: 'Option pricing, value at risk, risk models.' }
    ],
    samples: [
      {
        prompt: 'A bank holds a portfolio of corporate bonds. Which risk best describes the potential for losses from a decline in the bonds\u2019 market value?',
        options: ['A. Credit risk', 'B. Market risk', 'C. Operational risk', 'D. Liquidity risk'],
        answer: 'B',
        explanation: 'Market risk is the risk of losses from adverse movements in market prices; credit risk is the risk of counterparty default, and the other options describe different risk categories.'
      },
      {
        prompt: 'Which measure expresses the worst expected loss over a given horizon at a specified confidence level?',
        options: ['A. Expected shortfall only', 'B. Value at Risk (VaR)', 'C. Beta', 'D. Sharpe ratio'],
        answer: 'B',
        explanation: 'Value at Risk (VaR) is the standard measure of the worst expected loss over a horizon at a confidence level; expected shortfall extends it, but VaR is the definitional answer.'
      },
      {
        prompt: 'A European call option\u2019s value increases when which input increases?',
        options: ['A. The strike price', 'B. The volatility of the underlying', 'C. The time to expiry, all else equal, for a positive-rate environment', 'D. The risk-free rate, in all cases'],
        answer: 'B',
        explanation: 'Higher volatility increases option value (both calls and puts gain from volatility); a higher strike decreases call value, and the rate effect depends on the position and is not universally increasing.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam topics, not live exam items.'
  },
  examDay: {
    summary: 'The FRM Part I exam is administered on a single date in May and November each year at authorized test centers worldwide (and, in some regions, online with proctoring for certain administrations; verify the current delivery). Candidates register through GARP with early and standard fee tiers, and on the day arrive 30 minutes early with a valid ID; the exam runs 4 hours for 100 questions with a scheduled break, and personal electronics are not permitted; a calculator from the GARP-approved list is permitted. Results are typically released within about six weeks, reported as pass/fail with quartile diagnostics by topic; GARP publishes the session pass rates. Candidates who fail may retake in a future session (verify the current retake policy and fees). The full FRM designation additionally requires passing Part II and two years of relevant work experience. Afterwards, successful candidates register for Part II with the same study discipline, and all candidates should use the quartile diagnostics to plan any retake.',
    bring: ['Valid photo ID', 'Appointment confirmation', 'GARP-approved calculator', 'Registration and exam-day instructions'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials', 'Unofficial calculators not on the GARP list'],
    timeline: [
      { time: 'Registration', detail: 'Register for the May or November sitting (early tier saves cost).' },
      { time: 'Exam day', detail: 'Arrive early; 100 questions in 4 hours with a break.' },
      { time: '~6 weeks later', detail: 'Results: pass/fail with quartile diagnostics.' },
      { time: 'Next step', detail: 'Register for Part II; the designation also needs 2 years of experience.' }
    ],
    rules: [
      'Valid ID is mandatory; personal electronics are prohibited.',
      'Only GARP-approved calculators are permitted.',
      'Results are pass/fail with quartile diagnostics.',
      'The full designation requires Part II and 2 years of relevant experience.'
    ],
    afterwards: 'Use the quartile diagnostics to plan the next step - Part II registration if passed, or a targeted Part I retake - and verify the current retake policy and fees.'
  }
};

export default data;
