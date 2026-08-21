// Depth content for: cfa-level-1
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Finance, accounting & professional-designation desk',
    bio: 'This guide is compiled and maintained by our finance-certifications desk. The CFA Program is owned and operated by CFA Institute, and its fees, topic weights, calculator policy and pass-rate reporting are taken from the Institute’s own candidate and exam pages. We track the published exam structure by exam window and state plainly when a figure is historical versus current. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by charter. CFA charterholders work across many BLS occupations, so the salary section names the closest fit and explains the mismatch rather than implying the charter is a single job title.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam structure, topic weights, fees, calculator rules and pass-rate reporting were taken from the CFA Institute candidate and exam pages and checked against the published Level I exam information.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$101,350 median for financial and investment analysts (BLS, May 2024)',
    summary:
      'There is no Bureau of Labor Statistics occupation called "CFA charterholder" — the charter is a credential, not a job, and its holders work across portfolio management, equity and credit research, risk, wealth management and corporate finance. BLS therefore cannot classify by designation, and any salary page that quotes a "CFA salary" from government data is misrepresenting what the government measures. The closest official fit by job duties is Financial and Investment Analysts, SOC 13-2051, and we have chosen it deliberately over the broader financial-manager categories. That occupation had a May 2024 median wage of $101,350, with the lowest 10 percent under $62,410 and the highest 10 percent over $180,550. The spread is wide for a reason: financial and investment analyst work ranges from junior reporting roles to senior buy-side and sell-side analysis, and the charter tends to matter most at the upper end of that distribution, where it is either required or strongly preferred for portfolio-manager and research tracks. BLS counted 368,500 such jobs in 2024 and projects 6 percent growth to 389,600 by 2034, faster than the average for all occupations, with about 29,900 openings a year arising from both growth and replacement. The limitation to state plainly is that this median covers everyone in the occupation, chartered or not; the charter’s wage premium is documented in CFA Institute member compensation surveys, which we have not quoted as a single government figure because they are member self-reports rather than a BLS series. Read the BLS number as the floor of the relevant labour market, not the charter’s value.',
    rows: [
      { label: 'Median annual wage, financial and investment analysts', value: '$101,350', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $62,410', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $180,550', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '368,500 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~29,900 per year', note: 'BLS OOH Job Outlook, 2024-34' }
    ],
    growth: '+6% projected change 2024-34 (faster than average), ~29,900 openings a year from growth and replacement; the BLS figure covers all financial and investment analysts, not just charterholders, so treat it as the relevant labour-market floor',
    source: {
      label: 'BLS Occupational Outlook Handbook — Financial and Investment Analysts',
      url: 'https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'CFA Level I publishes pass rates — roughly 40% over the decade, 43-45% in recent windows',
    summary:
      'CFA Institute is unusual among the credential bodies covered on this site in that it does publish pass rates, and it does so transparently by exam level and by window. That makes Level I the one exam here where you can anchor your expectations to a real historical figure rather than a rumour. CFA Institute reports a long-run Level I pass rate in the low 40s percent; over the ten-year period the Institute has repeatedly cited an approximate 40 percent average. Recent published windows illustrate the range: the February 2025 Level I pass rate was 45 percent, and the August 2025 Level I pass rate was 43 percent, each with its own trailing ten-year average (around 40-41 percent depending on the window). Two things must be said plainly so the number is not misused. First, a roughly 40 percent pass rate means the exam is a genuine filter, not a formality; candidates who treat Level I as a lighter version of Level II or III do so at their peril. Second, the rate is not split by candidate type, so it blends first-time candidates with repeat sitters and full-time students with working professionals who are studying at the margin of their weeks. The published figure is the pass rate of the cohort that actually sat, not of the cohort that registered. CFA Institute does not publish a pass rate stratified by preparation method, and no board of the exam is graded on a curve against a fixed quota — the standard is absolute and set by the grading process, so the cohort pass rate moves with candidate readiness rather than with a fixed cut intended to fail a set share.',
    source: {
      label: 'CFA Institute — Level I exam pass rate history',
      url: 'https://www.cfainstitute.org/en/programs/cfa/exam/level-i'
    },
    caveat:
      'Pass rates are published by CFA Institute by window (e.g. Feb 2025 45%, Aug 2025 43%) with a roughly 40% ten-year average. These are cohort pass rates, not a curve; they are not split by candidate background. We have not invented a figure for any window CFA Institute has not released.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'Level I is the entry examination of a three-level program owned by CFA Institute, and it is a breadth exam: it surveys ten topic areas at an introductory-to-intermediate level rather than going deep on any one. In 2026 the Level I exam is delivered on computer at a Prometric centre and consists of 180 multiple-choice questions split across two sessions of 135 minutes each, 90 questions per session, which works out to about 90 seconds per question. The ten topics and their current weight bands are Ethics 15-20 percent, Quantitative Methods 6-9 percent, Economics 6-9 percent, Financial Statement Analysis 11-14 percent, Corporate Issuers 6-9 percent, Equity Investments 11-14 percent, Fixed Income 11-14 percent, Derivatives 5-8 percent, Alternative Investments 7-10 percent, and Portfolio Management 8-12 percent. Ethics deserves special attention for two reasons: it carries the single largest weight band, and CFA Institute applies its Ethics Adjustment, where a borderline candidate scoring strongly on the Ethics section may receive a favourable nudge in the final result. The plan below runs about sixteen weeks at 18-20 hours a week, which lands near the commonly cited 300-plus-hour total that CFA Institute and most prep providers recommend for Level I. The assumption is that you are working full time and studying around your job; a full-time student can compress the calendar but should not cut the hours. The single biggest scheduling error is front-loading the quantitative and financial-statement material and leaving Ethics, Portfolio Management and Alternative Investments to a rushed final fortnight, because Ethics in particular rewards repeated, spaced exposure rather than cramming.',
    totalHours: '300+ hours (CFA Institute’s published guideline)',
    weeks: [
      {
        label: 'Weeks 1-3',
        focus: 'Quantitative Methods (6-9%)',
        tasks: [
          'Time value of money, discounted cash flow, and annuity mechanics on the approved calculator',
          'Descriptive statistics: mean, variance, standard deviation, and skewness',
          'Probability, distributions, and sampling — know the normal and lognormal distinction',
          'Hypothesis testing: the p-value logic and Type I/Type II errors, which recur in later levels'
        ],
        hours: '18-20 hrs/week'
      },
      {
        label: 'Weeks 4-6',
        focus: 'Financial Statement Analysis (11-14%)',
        tasks: [
          'Income statement, balance sheet and cash-flow statement mechanics and the links between them',
          'Inventory and long-lived asset accounting (IFRS vs US GAAP differences are tested directly)',
          'Ratios: liquidity, solvency, profitability and activity, and what each one actually reveals',
          'Working capital and the quality-of-earnings red flags CFA Institute emphasises'
        ],
        hours: '18-20 hrs/week'
      },
      {
        label: 'Weeks 7-9',
        focus: 'Equity, Fixed Income, Corporate Issuers (11-14% / 11-14% / 6-9%)',
        tasks: [
          'Equity: valuation models, the three major indexes, and market organisation',
          'Fixed income: bond features, yield measures, duration and convexity — draw the price-yield curve',
          'Corporate Issuers: capital structure, cost of capital, and the dividend decision',
          'Work the calculations on the approved calculator until they are automatic; these topics are calculation-heavy'
        ],
        hours: '18-20 hrs/week'
      },
      {
        label: 'Weeks 10-11',
        focus: 'Derivatives, Alternatives, Portfolio Management (5-8% / 7-10% / 8-12%)',
        tasks: [
          'Derivatives: forward, futures, swap and option payoffs and the basic pricing relationships',
          'Alternatives: real estate, private equity, hedge funds, commodities and infrastructure characteristics',
          'Portfolio Management: risk and return, the CAPM, and the portfolio-construction framework',
          'These are lower-weight individually but together are nearly a third of the paper; do not skip them'
        ],
        hours: '18-20 hrs/week'
      },
      {
        label: 'Weeks 12-13',
        focus: 'Economics (6-9%) and Ethics start (15-20%)',
        tasks: [
          'Economics: demand and supply, firm and market structures, macroeconomic indicators, monetary and fiscal policy',
          'Begin Ethics now and treat it as a standing subject through to exam day — start the Standards of Practice',
          'Work Ethics every week from here; it is weighted highest and benefits from repetition, not cramming',
          'Build a one-page Ethics decision tree for the Standards you keep confusing'
        ],
        hours: '18-20 hrs/week'
      },
      {
        label: 'Weeks 14-15',
        focus: 'Full mock exams under timed conditions',
        tasks: [
          'Two full 4.5-hour mocks (two 135-minute sessions with a break) on consecutive weeks',
          'Sit them at the same time of day as your real exam to train stamina',
          'Grade strictly and log every question you got right by luck as a miss',
          'Re-sit the Ethics Standards weekly on a spaced schedule'
        ],
        hours: '20+ hrs/week'
      },
      {
        label: 'Week 16',
        focus: 'Gap closing and light review',
        tasks: [
          'Drill the two or three topic areas your mocks exposed as weakest',
          'Re-derive the formulas you memorised but do not understand',
          'Final Ethics pass and a quiet 48 hours before the exam',
          'Confirm your calculator is an approved model and clear the memory of any forbidden programmes'
        ],
        hours: '15-18 hrs'
      }
    ],
    variants: [
      { label: 'Full-time student or career-break candidate', detail: 'Compress to ten to twelve weeks at 30+ hrs/week. You save the fatigue tax of studying around a job, but you lose the spaced-repetition advantage of a longer calendar — protect Ethics by scheduling it across the whole timeline rather than in a block.' },
      { label: 'Working professional in a related role', detail: 'Sixteen to twenty weeks at 18-20 hrs/week. FSA and Equity feel familiar; Derivatives, Alternatives and the Economics macro material are where the job rarely prepares you, so protect those weeks.' },
      { label: 'Candidate planning to sit Levels I, II and III', detail: 'Do not over-optimise Level I. The depth exams are II and III; Level I is the breadth foundation, so aim to pass it cleanly and bank the conceptual vocabulary (especially Quant, FSA and Ethics) that Levels II and III assume you already hold.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'Level I rewards two things that counter-intuitive study habits undermine: breadth of coverage and repeated, spaced exposure to Ethics. It is a multiple-choice exam on a fixed computer, so the skill being tested is recognition and calculation under a steady 90-second-per-question clock, not essay writing or synthesis. Most failures come from either leaving topics uncovered or from studying passively.',
    items: [
      {
        title: 'Cover all ten topics; do not chase a perfect subset',
        detail: 'Because the exam is breadth-first and weights are expressed as bands, skipping a low-weight topic to over-master a high-weight one is a losing trade. A missed Alternative Investments question and a missed Equity question are each a lost point, and the Ethics adjustment only helps candidates near the line. Build a plan that touches every topic, then weight review time by band rather than by interest.'
      },
      {
        title: 'Learn the approved calculator before you learn the formulas',
        detail: 'CFA Institute permits only the Texas Instruments BA II Plus (including the Professional) and the Hewlett-Packard 12C (including the Platinum and the 12C Platinum 25th Anniversary). The exam room checks the model. Candidates who can do TVM, cash-flow and bond-yield calculations reflexively on the BA II Plus save seconds per quant question; those who fumble the key sequence lose time across dozens of items. Practise every calculation on the physical device, not in a spreadsheet.'
      },
      {
        title: 'Study Ethics continuously, not in a block',
        detail: 'The Standards of Practice are the highest-weighted topic and the subject of the Ethics Adjustment, yet most candidates leave them to the final fortnight. Spaced repetition beats cramming here because the Standards are about applying judgement to scenarios, not recalling a definition. Schedule a standing weekly Ethics block from the first month and keep it through exam week; the marginal hour on Ethics is among the highest-value hours you will spend.'
      },
      {
        title: 'Drill with item sets, not passive reading',
        detail: 'Level I questions are vignette-style multiple choice: a short scenario followed by items testing it. Reading notes produces recognition without retrieval. Work practice questions actively, and whenever you answer correctly by elimination rather than understanding, mark it as a miss and re-study the underlying reading. The 300-hour guideline assumes a large share of those hours is active question practice, not re-reading.'
      },
      {
        title: 'Simulate the two-session stamina',
        detail: 'The exam is two 135-minute sessions with a break. Candidates who only ever study in one-hour blocks underestimate the cognitive fatigue of a 4.5-hour day and make avoidable errors in the second session. Take at least two full-length mocks in the real two-session format, at the same time of day as your booking, so the fatigue is familiar rather than a surprise.'
      },
      {
        title: 'Know that the standard is absolute, not curved',
        detail: 'CFA Institute sets the minimum passing score through its grading process; there is no fixed quota of failures. This means your preparation competes with the material, not with other candidates, so comparing yourself to a cohort pass rate is less useful than measuring your own mock trend. Treat the published ~40 percent rate as a warning about difficulty, not as a cap on your odds.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The decision here is less "which provider" than "how much of CFA Institute’s own material to buy versus a third-party condensed course". CFA Institute includes the curriculum and a mock with registration, so the baseline is set. Providers such as Kaplan Schweser and Wiley exist to compress that curriculum for time-poor candidates. Check that any third-party material is mapped to the current exam year, because topic weights and emphasis shift between cycles.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CFA Program enrollment + Level I exam fee (2026)', values: ['Early $1,140 / standard $1,490; the one-time program enrollment fee was eliminated', 'Computer-based at Prometric', 'Required — registration includes the official curriculum and a mock exam'] },
      { label: 'CFA Institute official curriculum (included)', values: ['Included with registration', 'Digital + optional print', 'The source of truth; read it if you have the hours'] },
      { label: 'Kaplan SchweserNotes + QBank', values: ['Roughly $500-1,000 depending on package', 'Print + online QBank + mocks', 'Condensing the curriculum when you cannot read all of it'] },
      { label: 'Wiley / UWorld CFA Level I', values: ['Roughly $400-900 depending on package', 'Online video + QBank + mocks', 'Video-led study with a large adaptive question bank'] },
      { label: 'Approved calculator (TI BA II Plus or HP 12C)', values: ['~$30-50', 'Physical device', 'Mandatory; the exam room checks the model — practise on the exact one you will bring'] },
      { label: 'CFA Institute Candidate Resource Center mocks', values: ['Included', 'Online timed mocks', 'The closest thing to the live interface and item style'] },
      { label: 'Mark Meldrum video course', values: ['Subscription-based, often a few hundred USD', 'Video with problem solving', 'Candidates who learn from worked examples rather than prose'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax; CFA Institute fee tiers (early vs standard) depend on your registration date, and third-party bundle prices change with promotions — confirm at the source before buying. We do not rank by commission. The one-time program enrollment fee that previously applied has been eliminated, so the figures above are exam fees only.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'Most Level I failures are not knowledge failures; they are coverage and pacing failures. The exam’s breadth means a single skipped topic can cost several points, and the fixed 90-second cadence means a candidate who cannot move on from a hard item loses several more. The mistakes below are the ones prep providers report most often, and several are specific to the CFA format.',
    items: [
      {
        mistake: 'Skipping low-weight topics to save time',
        fix: 'Topics at 5-10 percent still contribute real points, and the Ethics Adjustment only rescues candidates near the line. Cover every topic in the study plan; weight your review by band rather than abandoning a subject. A candidate who is strong everywhere and expert nowhere generally out-performs one who is expert in two areas and blank in three.'
      },
      {
        mistake: 'Leaving Ethics to the final fortnight',
        fix: 'Ethics is the highest-weighted topic and the subject of the Ethics Adjustment, yet it is scenario-judgement material that rewards spaced repetition. Start a standing weekly Ethics block in month one and keep it through exam week. Candidates who cram the Standards misapply them under time pressure, which is exactly when the adjustment would have helped.'
      },
      {
        mistake: 'Not mastering the approved calculator',
        fix: 'Only the TI BA II Plus (including Professional) and HP 12C (including Platinum) are permitted, and the model is checked. Candidates who calculate TVM, cash flows and bond yields in a spreadsheet and only meet the device at the exam lose seconds per quant item and risk key-sequence errors. Do every calculation on the physical approved calculator from week one.'
      },
      {
        mistake: 'Studying passively instead of practising items',
        fix: 'Reading the curriculum produces recognition without retrieval. Level I is a multiple-choice test of application; the 300-hour guideline assumes a large share is active question practice. Whenever you answer by elimination, mark it a miss and re-study the reading. Passive study is the gap between "I understood it" and "I passed".'
      },
      {
        mistake: 'Mismanaging the 90-second cadence',
        fix: 'With 180 items across two 135-minute sessions, the clock is the constraint. Candidates who stall on a hard quant item sacrifice several easier points elsewhere. Practise a hard-stop rule: flag, guess if needed, and move. The two-session format gives a break to reset, but it does not pause the per-session clock, so pace each session independently.'
      },
      {
        mistake: 'Forgetting Level I is one of three and over-investing',
        fix: 'Level I is the breadth foundation; Levels II and III are where depth and essay-style constructed response appear. Passing Level I cleanly and banking the Quant, FSA and Ethics vocabulary it builds is the goal. Candidates who chase a perfect Level I score at the cost of burnout endanger the multi-year program; aim to pass, then carry the concepts forward.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'Level I is entirely multiple choice, delivered on computer at a Prometric centre across two 135-minute sessions with a break between them, 90 questions per session for 180 total and roughly 90 seconds per question. Every item is vignette-style: a short scenario, exhibit or set of data followed by a question with three answer choices (A, B, C). There are no essays at Level I — constructed-response appears only at Level III — and there is no penalty for a wrong answer, so guessing strategically is always better than leaving a blank. CFA Institute states the ten topic-weight bands rather than fixed percentages, so the exact mix shifts slightly by form. The Ethics Adjustment is the one structural quirk worth knowing: a candidate near the minimum passing score who performed strongly on Ethics may receive a favourable adjustment in the final result, which is why Ethics is weighted and practised as it is. Because grading is on an absolute standard rather than a curve, your performance is measured against the material, not against other candidates. The practical pacing implication is that multiple-choice items should be answered at a steady tempo with a hard-stop on any that stall, because the clock is the binding constraint and there is no partial credit to recover by over-investing in one item.',
    types: [
      { name: 'Vignette multiple choice', share: '100% of Level I', detail: 'A short scenario or exhibit followed by a three-choice (A/B/C) question. Topics range from pure calculation (Quant, FSA, Fixed Income) to judgement (Ethics, Portfolio Management).' },
      { name: 'Calculation items', share: 'Heaviest in Quant, FSA, Equity, Fixed Income, Corporate Issuers', detail: 'Require working the approved calculator; the distractors are usually plausible miscalculations (wrong sign, wrong rate, wrong period), so a clean setup matters more than elimination.' },
      { name: 'Conceptual / definitional items', share: 'Heaviest in Ethics, Economics, Alternatives, Portfolio Management', detail: 'Test understanding of a definition or framework; these reward spaced study over cramming and are where the Ethics Adjustment bites.' },
      { name: 'Ethics scenario items', share: 'Within the 15-20% Ethics band', detail: 'Apply the Standards of Practice to a described situation; the Ethics Adjustment makes consistent strength here disproportionately valuable near the pass line.' }
    ],
    samples: [
      {
        prompt: 'An analyst is told by a client to delay recording a material loss until next quarter so the client’s current-quarter earnings look stronger. The analyst complies. Which CFA Institute Standard of Professional Conduct is most clearly violated?',
        options: [
          'A. Standard I(A) — Knowledge of the Law',
          'B. Standard I(C) — Misrepresentation',
          'C. Standard III(D) — Performance Presentation'
        ],
        answer: 'A',
        explanation: 'Causing or aiding the misstatement of financial information to mislead is a breach of the duty to comply with applicable law and to not knowingly participate in any violation; the directive to misreport earnings squarely engages Standard I(A) Knowledge of the Law, and the act of complying makes the analyst a participant. B is too narrow — the deeper issue is the illegal misstatement, not merely how results were portrayed. C concerns how past performance is presented to clients, which is not what happened here; the violation is in the recording itself, not in a presentation of results. A candidate near the pass line who is strong on Ethics may benefit from the Ethics Adjustment on items like this.'
      },
      {
        prompt: 'A bond has a face value of $1,000, an annual coupon of 6% paid once a year, three years to maturity, and a yield to maturity of 5%. Using the approved calculator convention, which is closest to the bond’s price?',
        options: [
          'A. $1,027.23',
          'B. $972.77',
          'C. $1,060.00'
        ],
        answer: 'A',
        explanation: 'With a coupon rate (6%) above the yield (5%), the bond must trade at a premium to par, so the price exceeds $1,000 and A is the only premium choice. On the BA II Plus you enter N=3, I/Y=5, PMT=60, FV=1000 and compute PV, which returns -1,027.23 (the sign reflects cash-flow direction). B is the price of a discount bond and would arise if the yield exceeded the coupon; C is simply par plus one coupon and ignores discounting entirely. The item rewards a clean calculator setup and a sanity check that a premium bond prices above par.'
      },
      {
        prompt: 'An investor holds a portfolio with an expected return of 10% and a standard deviation of 15%. The risk-free rate is 2%. Which statement about the portfolio’s Sharpe ratio is correct?',
        options: [
          'A. The Sharpe ratio is 0.53 and measures excess return per unit of total risk',
          'B. The Sharpe ratio is 0.13 and measures excess return per unit of systematic risk',
          'C. The Sharpe ratio is 1.20 and measures excess return per unit of total risk'
        ],
        answer: 'A',
        explanation: 'Sharpe ratio = (portfolio return - risk-free rate) / standard deviation = (10% - 2%) / 15% = 8% / 15% = 0.533. It uses total risk (standard deviation), not systematic risk, which is the Treynor ratio’s denominator. A is therefore correct. B uses the wrong formula (and confuses Sharpe with Treynor, which uses beta), and C divides the wrong way (15%/8%? or misstates the inputs). This is a core Portfolio Management calculation that recurs at Levels II and III, so the concept is worth mastering rather than memorising.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published Level I blueprint, not live exam items. Figures are rounded; the live exam uses the approved calculator conventions.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'Level I is a computer-based exam taken at a Prometric centre, structured as two 135-minute sessions with an optional break between them, 90 multiple-choice questions per session for 180 total. The room is quiet, the interface is fixed, and the only physical tools you control are your approved calculator and the provided scratch materials. The most common avoidable failure on the day is a calculator problem — either bringing a non-approved model or arriving with one loaded with forbidden programs — because CFA Institute checks the device at check-in and a rejected calculator cannot be substituted mid-exam. The second is stamina: a 4.5-hour exam day with a break still demands that you have practised the two-session format, or the second session degrades. Arrive with your passport or government-issued ID exactly as it appears on your CFA Institute account, because the name match is enforced at check-in and a mismatch loses the seat. You receive your result by email from CFA Institute, not on screen the way a CompTIA candidate would; Level I results are typically released within about 60 days of the close of the exam window, so plan your Level II decision around that lag rather than expecting an instant outcome.',
    bring: [
      'Your approved calculator only — TI BA II Plus (including Professional) or HP 12C (including Platinum); clear any forbidden programs from its memory',
      'A valid passport or government-issued photo ID whose name matches your CFA Institute account exactly',
      'Your CFA Institute exam appointment confirmation',
      'A layer you can remove; test-centre temperature is not under your control',
      'Nothing else is permitted at the desk — scratch paper and writing tools are provided and collected'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and any internet-connected device — secured in the centre’s locker',
      'Personal calculators beyond the approved model, and any calculator with stored programs or notes',
      'Books, notes, study sheets and printed curriculum',
      'Bags, coats, food and drink beyond what the centre permits in the locker area',
      'Any writing materials of your own; the centre issues its own and collects them at the end'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your ID name matches your CFA Institute account exactly. Confirm your calculator model is approved and wipe any forbidden programs. Plan the journey to the Prometric centre with buffer.' },
      { time: '24 hours before', detail: 'Light review only — Ethics and your weakest two topics. Do not start new material. Pack the approved calculator and ID.' },
      { time: '30 minutes before', detail: 'Arrive at the Prometric centre. Check-in includes ID verification, a photograph and the calculator inspection.' },
      { time: 'Check-in', detail: 'ID scan, biometric/photo capture, locker for personal items, calculator check. You are seated and given the exam interface and provided scratch materials.' },
      { time: 'Session 1 (0-135 min)', detail: '90 multiple-choice items. Hold a hard-stop on any item that stalls; flag and move. Do not sacrifice easy points later for a hard one now.' },
      { time: 'Break', detail: 'Optional. Reset, eat or drink something from the locker area, use the restroom. The second session clock starts when you resume, not when the first ends.' },
      { time: 'Session 2 (0-135 min)', detail: 'The remaining 90 items. Treat it as a fresh session with its own pacing; fatigue is the main risk, which is why full two-session mocks matter in prep.' },
      { time: 'After submission', detail: 'You do not get an on-screen result. CFA Institute emails the outcome, typically within about 60 days of the window close. Log it and plan Level II timing around that lag.' }
    ],
    rules: [
      'Only the TI BA II Plus (including Professional) and HP 12C (including Platinum) calculators are permitted; the model is checked at check-in.',
      'The exam is two 135-minute sessions with a break; 90 multiple-choice questions per session, 180 total, ~90 seconds per item.',
      'No penalty for a wrong answer — never leave a blank; strategic guessing beats omission.',
      'Your ID name must match your CFA Institute account exactly or you will be denied the seat.',
      'No personal writing materials; the centre provides and collects its own scratch paper.',
      'Grading is on an absolute standard, with the Ethics Adjustment applied near the pass line.',
      'Results are released by CFA Institute by email, typically within about 60 days of the window close, not on screen at the centre.'
    ],
    afterwards:
      'Your Level I result arrives by email from CFA Institute, typically within about 60 days of the close of the exam window — not on screen at the desk, which is the main difference from a same-day computer exam from a vendor like CompTIA. On a pass, the result unlocks your path to Level II; CFA Institute’s three-level structure means Level I is the breadth foundation and Levels II and III build depth, with Level III introducing the essay-style constructed-response format. Log the outcome and decide your Level II window immediately, because the curriculum assumes the Level I vocabulary (especially Quant, FSA and Ethics) is current, and a long gap erodes it. On a fail, CFA Institute does not publish a detailed topic-level diagnostic in the same way some vendors do, so your own mock trend is the better post-mortem: identify the two or three topic bands where you were weakest and re-plan around them rather than re-sitting on the same study pattern. Note the published ~40 percent cohort pass rate as a measure of difficulty, not a quota — the standard is absolute, so your odds are a function of your own preparation against the material, not of how many others sat. The enrollment fee has been eliminated, but each Level I attempt still carries the exam fee, so a clean first pass is also the cheap pass.'
  }
};

export default data;
