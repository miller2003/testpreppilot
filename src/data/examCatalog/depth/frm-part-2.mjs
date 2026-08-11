const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Risk management & financial certifications desk',
    bio: 'We cover GARP certifications for financial risk. Format and fee facts come from GARP official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the FRM Part II exam structure, scoring, fees and pass-rate reporting against GARP official pages; verified BLS financial wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'FRM Part II completes the risk-management track: financial risk specialists earned about a $101,100 median in May 2024 (BLS)',
    summary: 'The FRM (Financial Risk Manager) Part II exam is the second of the two exams in the GARP certification program, covering the application of risk management - market risk measurement and management, credit risk, operational risk, liquidity and treasury risk, risk management and investment management, and current issues in financial markets. It is the final exam step on the path to the FRM designation (which also requires two years of relevant work experience), rather than a job license, so no single BLS SOC code attaches to it; the salary story belongs to the risk and finance occupations it serves. BLS reported that financial and investment analysts (SOC 13-2051) earned a median of $101,350 in May 2024, and financial risk specialists (13-2099) about $101,100 (OEWS May 2024); risk-management roles in banking, insurance, asset management and energy trading sit in these ranges, with senior risk and quantitative roles paying substantially more. The structural point is that the FRM designation (Part I + Part II + experience) is one of the two recognized risk-management credentials, and holding it is common in job postings for risk roles at financial institutions; Part II is the deeper, application-focused exam, and GARP publishes its pass rates (recently higher than Part I, often in the 50-60 percent range). BLS classifies workers by occupation, not certifications, so no certificate maps to a specific wage; the value is the domain signal in a market where risk expertise is specialized and well compensated.',
    rows: [
      { label: 'Financial and investment analysts median, May 2024', value: '$101,350', note: 'BLS OEWS, SOC 13-2051' },
      { label: 'Financial risk specialists median, May 2024', value: '~$101,100', note: 'BLS OEWS, SOC 13-2099' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'FRM structure', value: 'Part I + Part II + 2 yrs experience', note: 'GARP, full designation' }
    ],
    growth: 'Financial-analyst employment is projected to grow 7 percent from 2024 to 2034; risk roles follow financial-industry demand.',
    source: { label: 'BLS Occupational Outlook Handbook - Financial Analysts', url: 'https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm' }
  },
  passRate: {
    headline: 'GARP publishes FRM pass rates: Part II first-attempt pass rates have recently been approximately 50-60 percent',
    summary: 'GARP publishes exam pass rates by session. For FRM Part II, recent first-attempt pass rates have generally been in the 50-60 percent range (for example, 2023 and 2024 sessions were reported in the low-to-mid 50s in several administrations), which is typically higher than the recent Part I rates (approximately 40-50 percent). These are cohort statistics that vary by session. The Part II exam is computer-based, 80 multiple-choice questions in 4 hours, with single sittings in May and November. The exam covers five core areas plus current issues: market risk measurement and management (20 percent), credit risk measurement and management (20 percent), operational risk and resilience (20 percent), liquidity and treasury risk measurement and management (15 percent), risk management and investment management (15 percent), and current issues in financial markets (10 percent). Results are reported as pass/fail with quartile diagnostics by topic; GARP does not publish a numeric passing score, and candidates who fail may retake (no limit on attempts, but verify the current retake policy and fees). Because Part II builds on Part I, the honest preparation message is that candidates should pass Part I first and treat Part II as the application-focused half of the program, with the published pass rates as the realistic context for planning a serious study schedule.',
    source: { label: 'GARP FRM exam information and pass rates', url: 'https://www.garp.org/frm' },
    caveat: 'GARP publishes pass rates; recent FRM Part II first-attempt rates were approximately 50-60%. No numeric passing score is published - results are pass/fail with quartile diagnostics.'
  },
  studyPlan: {
    summary: 'A realistic FRM Part II plan runs 250-350 hours over 3-5 months, deeper than Part I because the content is application-focused. The exam is 80 questions in 4 hours covering: market risk (VaR methodologies, stress testing, backtesting), credit risk (default probability, credit VaR, counterparty risk, CVA), operational risk (measurement approaches, resilience, scenario analysis), liquidity and treasury risk (funding and market liquidity, ALM), risk management and investment management (portfolio risk, performance attribution, hedge funds), and current issues. Month 1: read the GARP curriculum books for market risk and credit risk, with practice questions after each chapter; these two areas are 40 percent of the exam. Months 2-3: complete operational risk, liquidity and treasury risk, and investment management, integrating daily practice questions (30-50 daily with full review), and read the current-issues section (which is drawn from recent published research). Month 4: two to three full practice exams under timed conditions, targeted review of the quartile diagnostics, and taper. The dominant resources are GARP\u2019s official books and practice exams (included with enrollment), a question bank, and optional third-party materials; many candidates take a prep course. The exam fee is roughly $1,100-$1,200 for Part II (early and standard tiers; verify current pricing), and candidates should register for the May or November sitting with lead time. Part I must be passed first, and the designation additionally requires two years of relevant work experience.',
    totalHours: '250-350 hours over 3-5 months',
    weeks: [
      { label: 'Month 1', focus: 'Market and credit risk', tasks: ['GARP books: market and credit risk', 'Chapter practice questions'], hours: 90 },
      { label: 'Months 2-3', focus: 'Operational, liquidity, investments', tasks: ['Remaining core areas', '30-50 Qs daily with full review; current issues'], hours: 180 },
      { label: 'Month 4', focus: 'Practice exams and taper', tasks: ['2-3 full timed practice exams', 'Quartile-targeted review'], hours: 70 }
    ],
    variants: [
      { label: 'Part I and Part II same window', detail: 'Some candidates sit both parts in the same window; most take Part I first and Part II in a later session.' },
      { label: 'Work-experience requirement', detail: 'The FRM designation requires two years of relevant work experience after passing both parts.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective FRM Part II strategies reflect its application focus. Strategy one: read the GARP curriculum as the primary source, because the exam is written against GARP\u2019s own readings and Part II especially tests application of the frameworks, not just definitions; the books are included with enrollment. Strategy two: weight the exam areas by percentage - market and credit risk are 40 percent combined, so the deepest study belongs there, with liquidity, operational and investment risk following; candidates who spread time evenly underweight the big areas. Strategy three: make daily practice questions the backbone (30-50 daily with full review), because the 80-question, 4-hour format demands speed and the question style is learned through volume; a question bank is the standard supplement. Strategy four: master the quantitative applications - VaR methodologies, credit risk models, and the stress-testing and backtesting concepts - because the application items are where candidates fail; practice the calculations, not just the concepts. Strategy five: read the current-issues section carefully, because it is drawn from recent published research and is a distinct testable area that self-study candidates often skip. Strategy six: use GARP\u2019s practice exams as the final checkpoint - they are the closest format match - and manage the retake plan honestly using the quartile diagnostics.',
    items: [
      { title: 'Read the GARP curriculum', detail: 'Part II tests application of the frameworks in the books.' },
      { title: 'Weight market and credit risk', detail: '40% of the exam combined; the deepest study belongs there.' },
      { title: 'Daily question volume', detail: '30-50 questions daily with full review.' },
      { title: 'Master the quantitative applications', detail: 'VaR, credit models, stress testing and backtesting.' },
      { title: 'Read the current issues', detail: 'A distinct testable area drawn from recent research.' }
    ]
  },
  resourceComparison: {
    summary: 'The FRM Part II resource market mirrors Part I: GARP\u2019s official materials are included with enrollment. GARP provides the full curriculum books, practice exams and study guides as part of the exam fee, which is roughly $1,100-$1,200 for Part II (early and standard registration tiers; verify current pricing). Question banks are the standard paid supplement (about $150-$400 for a subscription) and provide the practice volume the curriculum alone lacks. Third-party study guides, video courses and live classes ($300-$2,000) add structure and are popular, with the honest caveat that the exam is curriculum-based and third-party material must stay aligned with the current GARP readings. Free resources include GARP\u2019s practice questions and the published exam outline. The honest ranking: the GARP curriculum and practice exams (included), a question bank for volume, and a course only for structure or quantitative support. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'GARP curriculum books', values: ['Included with exam fee', 'Print/ebook', 'The primary source - the exam is based on them'] },
      { label: 'GARP practice exams', values: ['Included', 'Online', 'Format and timing rehearsal'] },
      { label: 'Question bank subscription', values: ['$150-$400', 'Online', 'Daily practice volume'] },
      { label: 'Prep course (live/online)', values: ['$300-$2,000', 'Live/on-demand', 'Structure and quantitative support'] }
    ],
    footnote: 'Prices dated 2025-26; the Part II exam fee is ~$1,100-$1,200 (verify tiers). No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common FRM Part II mistakes come from under-weighting the application content and the big areas. Mistake one: studying third-party summaries instead of the GARP curriculum; Part II tests application of the frameworks, and condensed material misses the depth the exam expects. Mistake two: spreading study time evenly across all six areas; market and credit risk are 40 percent combined, and candidates who under-weight them lose the biggest share of the exam. Mistake three: skipping the quantitative applications; the calculation items (VaR, credit models, stress testing) are where candidates fail, and practicing the math is essential. Mistake four: ignoring the current-issues section; it is a distinct testable area drawn from recent research, and self-study candidates who skip it leave points behind. Mistake five: low question volume; the 80-question, 4-hour format demands practiced speed. Mistake six: forgetting the designation requirements - Part I must be passed first, and the designation needs two years of relevant experience, so the roadmap should be planned from the start. Finally, candidates should register early for the lower fee tier and confirm the May/November window.',
    items: [
      { mistake: 'Skipping the GARP curriculum', fix: 'Part II tests application of the frameworks in the books.' },
      { mistake: 'Even time across all areas', fix: 'Weight market and credit risk (40% combined).' },
      { mistake: 'Avoiding the quantitative items', fix: 'Practice the VaR, credit and stress-test calculations.' },
      { mistake: 'Skipping the current issues', fix: 'A distinct testable area from recent research.' },
      { mistake: 'Forgetting the designation steps', fix: 'Part I first, then Part II, plus 2 years of experience.' }
    ]
  },
  questionTypes: {
    summary: 'The FRM Part II exam is 80 multiple-choice questions in 4 hours, computer-based, with single-sitting administrations in May and November. The six areas: market risk (20 percent), credit risk (20 percent), operational risk and resilience (20 percent), liquidity and treasury risk (15 percent), risk management and investment management (15 percent), and current issues in financial markets (10 percent). Results are pass/fail with quartile diagnostics; GARP publishes cohort pass rates (recently ~50-60 percent for Part II). Samples below are editor-written illustrations of the published exam topics, not live exam items.',
    types: [
      { name: 'Market risk', share: '20% of items', detail: 'VaR, stress testing, backtesting.' },
      { name: 'Credit risk', share: '20% of items', detail: 'Default probability, credit VaR, counterparty risk, CVA.' },
      { name: 'Operational, liquidity, investment', share: '50% combined', detail: 'Resilience, funding liquidity, portfolio risk.' },
      { name: 'Current issues', share: '10% of items', detail: 'Recent developments in financial markets.' }
    ],
    samples: [
      {
        prompt: 'A bank estimates that its 95 percent, one-day Value at Risk is $10 million. Which statement best interprets this measure?',
        options: ['A. The bank will lose exactly $10 million on 5% of days', 'B. There is a 5% chance the bank loses more than $10 million in a day', 'C. The bank loses at least $10 million every day', 'D. VaR is a measure of expected loss, not a tail measure'],
        answer: 'B',
        explanation: 'VaR at 95% over one day means there is a 5% chance the daily loss exceeds the VaR figure; it is a threshold for tail losses, not an expected loss.'
      },
      {
        prompt: 'Which concept most directly captures the risk that a counterparty defaults and the exposure is lost?',
        options: ['A. Credit default risk with exposure at default', 'B. Market risk from interest rates', 'C. Operational risk from system failures', 'D. Liquidity risk from funding runs'],
        answer: 'A',
        explanation: 'Credit risk measures the loss from counterparty default, captured through exposure at default and default probability; the other options describe different risk categories.'
      },
      {
        prompt: 'A fund\u2019s ability to meet withdrawal requests depends on selling assets quickly without moving prices. Which risk is this primarily about?',
        options: ['A. Market liquidity risk', 'B. Credit risk', 'C. Operational risk', 'D. Model risk'],
        answer: 'A',
        explanation: 'Market (asset) liquidity risk is the risk of selling assets at unfavorable prices when funds are needed; funding liquidity risk is the liability-side counterpart, and the other options describe different risks.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam topics, not live exam items.'
  },
  examDay: {
    summary: 'The FRM Part II exam is administered on a single date in May and November each year at authorized test centers worldwide (with some administrations online; verify the current delivery). Candidates register through GARP with early and standard fee tiers, and on the day arrive 30 minutes early with a valid ID; the exam runs 4 hours for 80 questions with a scheduled break, and personal electronics are not permitted; a GARP-approved calculator is permitted. Results are typically released within about six weeks, reported as pass/fail with quartile diagnostics by topic; GARP publishes the session pass rates. Candidates who fail may retake in a future session (verify the current retake policy and fees). The full FRM designation additionally requires passing Part I and two years of relevant work experience. Afterwards, successful candidates complete the work-experience requirement and apply for the designation, and all candidates should use the quartile diagnostics to plan any retake.',
    bring: ['Valid photo ID', 'Appointment confirmation', 'GARP-approved calculator', 'Registration and exam-day instructions'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials', 'Unofficial calculators not on the GARP list'],
    timeline: [
      { time: 'Registration', detail: 'Register for the May or November sitting (early tier saves cost).' },
      { time: 'Exam day', detail: 'Arrive early; 80 questions in 4 hours with a break.' },
      { time: '~6 weeks later', detail: 'Results: pass/fail with quartile diagnostics.' },
      { time: 'After passing', detail: 'Complete the 2-year experience requirement; apply for the designation.' }
    ],
    rules: [
      'Valid ID is mandatory; personal electronics are prohibited.',
      'Only GARP-approved calculators are permitted.',
      'Results are pass/fail with quartile diagnostics.',
      'The designation requires Part I, Part II, and 2 years of relevant experience.'
    ],
    afterwards: 'Use the quartile diagnostics to plan the next step - complete the experience requirement and apply for the designation if passed, or target a Part II retake.'
  }
};

export default data;
