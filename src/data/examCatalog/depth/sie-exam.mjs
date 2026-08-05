// Depth content for: sie-exam
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Agile, securities & cybersecurity certifications desk',
    bio: 'This guide is compiled and maintained by our certifications desk. Exam structure, the passing score, fees, retake waits and the pretest-question policy come from FINRA’s own SIE pages and are revised by FINRA, so we cite the figure as published and flag it when it changes — the exam fee, for example, rose from $80 to $100 in January 2026. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Question count, time limit, passing score, fee, retake schedule and content weights were taken from the current FINRA SIE page and FINRA’s SIE content outline; wage data from the BLS Occupational Outlook Handbook.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$101,350 median for financial and investment analysts (BLS, May 2024)',
    summary:
      'There is no Bureau of Labor Statistics occupation called "SIE candidate" or "securities industry entrant", and the SIE itself is not a job — it is a knowledge exam that opens the door to representative and principal qualifying exams. The closest official wage fit for the careers the SIE feeds is Financial and Investment Analysts (SOC 13-2051), and we have chosen it deliberately because the SIE is the foundational securities-industry exam taken before, or alongside, the role-specific qualifying exams such as the Series 7 or Series 6. A candidate who clears the SIE is typically heading into a registered representative, analyst or operations role where the duties BLS describes — studying financial data, assessing investment products, supporting client accounts — are the daily work. That occupation had a May 2024 median wage of $101,350, with the lowest 10 percent earning under $62,410 and the highest 10 percent earning more than $180,550. The spread is wide because the SIE is a floor credential: it qualifies you to sit for, or work toward, the exams that lead to both junior support roles and senior advisory careers, and the wage figure above measures the whole analyst occupation rather than SIE holders narrowly. BLS projects 6 percent employment growth for financial and investment analysts from 2024 to 2034, about as fast as the average, with roughly 29,900 openings a year from both growth and replacement, and a numeric employment change of about 21,100 over the decade. The most important caveat for an SIE candidate is that passing the SIE alone does not confer a job title or a registration; it is valid for four years and must be paired with a sponsor-backed qualifying exam to become active. Read the wage figure as the destination occupation’s, not as a guaranteed SIE outcome.',
    rows: [
      { label: 'Median annual wage, financial and investment analysts', value: '$101,350', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $62,410', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $180,550', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '368,500 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~29,900 per year', note: 'BLS OOH Job Outlook, 2024-34' }
    ],
    growth: '6% projected change 2024-34 (about as fast as average), ~29,900 openings a year, +21,100 net employment; the SIE is a foundational exam for this occupation, not a standalone job credential',
    source: {
      label: 'BLS Occupational Outlook Handbook — Financial and Investment Analysts',
      url: 'https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'FINRA publishes no current SIE pass rate — but the passing score is 70',
    summary:
      'FINRA does not publish a current pass rate for the Securities Industry Essentials exam, and candidates should treat any "SIE pass rate" percentage circulating on forums with suspicion. What is published and verifiable is the scoring rule. The SIE is scored on a 0 to 100 scale and you must achieve a 70 to pass; there is no published percentage-of-questions figure because the exam includes unscored pretest questions, so a raw count of correct answers does not map linearly to the 70 cut. FINRA includes a small number of unscored pretest questions — historically around five of the roughly 75 items presented — that are being evaluated for future use and do not count toward your score; you cannot tell them apart from scored items, so you must answer every question as if it counts. On retakes, the wait structure is fixed and worth knowing before you sit: after a first or second failed attempt you must wait 30 calendar days before retesting, and after a third or subsequent failure the wait lengthens to 180 calendar days. There is a historical, frequently cited disclosure from FINRA noting that roughly 74 percent of first-time SIE candidates passed in a sample of about 58,000 candidates, but FINRA does not present this as a live, maintained statistic, and the figure is several years old and should not be relied on as today’s rate. We have therefore left the pass-rate table empty and reported only the verifiable 70 passing score and the retake schedule. The practical implication is to study to clear 70 with margin rather than to chase a passing rate that may not describe the current candidate pool.',
    source: {
      label: 'FINRA — Securities Industry Essentials (SIE) Exam',
      url: 'https://www.finra.org/registration-exams-ce/qualification-exams/securities-industry-essentials-exam'
    },
    caveat:
      'FINRA publishes no maintained current SIE pass rate. A historical disclosure cited ~74% of first-time candidates passing in a ~58,000-candidate sample, but it is not a live statistic. What is published and verifiable is the 70 passing score (0-100 scale) and the 30/180-day retake waits. We have not invented a current pass rate.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The SIE is unusual among the exams on this site because it requires no sponsor and no industry experience — anyone 18 or older may sit it, which makes it the natural first step for career-changers and students before they have a firm behind them. That same openness means there is no employer-driven study schedule to lean on, so a self-imposed timetable matters. The exam presents about 75 multiple-choice questions in 105 minutes (one hour and forty-five minutes), of which a handful are unscored pretest items, and you pass at a scaled 70. The content is weighted across four areas: Knowledge of Capital Markets at 16 percent, Understanding Products and Their Risks at 44 percent, Understanding Trading, Customer Accounts and Prohibited Activities at 31 percent, and the Regulatory Framework at 9 percent. Two structural facts should drive your plan. First, the Products and Risks domain alone is nearly half the exam, so it deserves close to half your study time. Second, the SIE is a breadth exam testing recognition of definitions and concepts rather than deep calculation, so spaced repetition across all four areas beats obsessive depth on one. A realistic self-study window is four to six weeks at 8 to 10 hours a week, which is enough to read the outline, drill terminology and sit two or three full timed practice exams. Because the SIE is valid for four years, many candidates take it early — even while still in school — to pair later with a sponsor-backed qualifying exam, and the plan below supports that "pass it and bank it" approach.',
    totalHours: '35-50 hours of self-study',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Domain foundation and capital markets',
        tasks: [
          'Work the Regulatory Framework (9%) and Knowledge of Capital Markets (16%) first — they are the conceptual base the other domains build on',
          'Learn the structure of the securities markets: issuers, underwriters, broker-dealers, exchanges, and the role of FINRA and the SEC',
          'Memorise the basic product types at a definitional level before their risks are introduced',
          'Build a glossary of terms; the SIE is heavily definitional and recognition is the skill being tested'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Products and risks (44%) — the heaviest domain',
        tasks: [
          'Cover equities, fixed income, packaged products (mutual funds, ETFs, UITs), options and the characteristics of each',
          'Learn the risk profile of every product category — this domain pairs product with risk and is ~44% of the paper',
          'Drill the suitability and risk-matching logic rather than memorising numbers',
          'Use flashcards for product definitions; this is the highest-leverage block of the whole exam'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Week 5',
        focus: 'Trading, accounts and prohibited activities (31%)',
        tasks: [
          'Study order types, trade execution, customer account openings and the books-and-records expectations',
          'Learn the prohibited activities and unethical practices section carefully — it is tested sharply and is easy to under-prepare',
          'Connect the regulatory framework from Week 1 to the conduct rules here',
          'Do a first full timed practice exam at 105 minutes to establish a baseline'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Week 6',
        focus: 'Full exams, retake-rule awareness and gap closing',
        tasks: [
          'Sit two more full timed practice exams and review every miss against the outline',
          'Re-drill the Products and Risks domain, which is where most points are won or lost',
          'Confirm you understand the 30/180-day retake waits so a first-attempt miss is not a surprise',
          'Book the exam and aim to clear 70 with a comfortable margin, accounting for unscored pretest items'
        ],
        hours: '8-10 hrs'
      }
    ],
    variants: [
      { label: 'Finance student or career-changer with no sponsor', detail: 'Six weeks self-study. You can sit the SIE at 18 with no firm, so start early and "bank" the pass — it is valid four years and pairs later with a sponsor-backed qualifying exam.' },
      { label: 'Working in a firm that will sponsor a Series 7 next', detail: 'Four weeks. Take the SIE first as the prerequisite, concentrate on Products and Risks (44%) since the 7 builds on it, and schedule the SIE close to your 7 study so the product knowledge stays warm.' },
      { label: 'Experienced in a non-securities finance role', detail: 'Three to four weeks. Your capital-markets intuition transfers; spend the saved time on the precise FINRA/SEC regulatory definitions and the prohibited-activities list, which trip up people who "know finance" but not the rulebook.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The SIE rewards breadth and recognition over calculation and depth. It is a definitional exam: most items ask you to identify the correct term, the correct regulatory body, or the risk that attaches to a product, rather than to solve a quantitative problem. The single highest-leverage strategy is therefore to weight your time to match the content weights — the Products and Their Risks domain is 44 percent of the paper and should absorb close to half your effort — and to build fluent recognition of terms across all four areas. Candidates who study evenly across domains, or who over-invest in the small Regulatory Framework slice because it feels foundational, systematically under-prepare the half of the exam that actually delivers the marks.',
    items: [
      {
        title: 'Weight study time to the content outline, not your comfort',
        detail: 'The four areas are weighted 16% / 44% / 31% / 9%. Products and Their Risks alone is 44%, so it deserves close to half your time even if capital markets feels more intuitive. Map every study hour to the outline percentages and resist the urge to over-polish the 9% regulatory slice at the expense of the 44% product domain.'
      },
      {
        title: 'Build a term-recognition system, not a calculation system',
        detail: 'The SIE is overwhelmingly definitional. Make flashcards that pair a term with its exact regulatory meaning — issuer vs underwriter, market maker vs specialist, callable vs puttable bond. Recognition under a 105-minute clock is the skill; there is little arithmetic. Drill the glossary until the right term surfaces without thought.'
      },
      {
        title: 'Learn products together with their risks',
        detail: 'The 44% domain is structured as product-plus-risk, so study each product type and then immediately its risk profile and suitable-investor fit. The exam asks which risk attaches to which instrument constantly. Treating products and risks as one combined block, rather than two passes, is the difference between a marginal and a comfortable pass.'
      },
      {
        title: 'Treat every question as scored, including pretest items',
        detail: 'FINRA includes roughly five unscored pretest questions among the ~75 presented, and you cannot identify them. They do not count, but skipping or rushing them on the assumption they are "the throwaways" risks a scored item by mistake. Answer all 75 as if every one counts, and pace for the full set rather than for 70.'
      },
      {
        title: 'Use full timed practice exams to build the 105-minute endurance',
        detail: 'With about 75 questions in 105 minutes you have roughly 84 seconds each — generous, but the volume means mental fatigue in the final third costs cheap points. Sit at least three full-length timed exams in one sitting so the endurance and the steady pace are trained, not discovered on exam day. Review every miss against the outline rather than just noting it.'
      },
      {
        title: 'Know the retake clock before you sit',
        detail: 'A first or second fail triggers a 30-day wait; a third or later failure triggers a 180-day wait. This changes strategy: a marginal first attempt is worth a careful, unhurried prep rather than a rushed resit, because the waits are real and the four-year validity means there is no urgency to rush. Plan your first attempt as if it is the only one that should count.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The SIE is a self-study exam with no mandatory course, so the resource decision is about which question bank and outline-aligned material to buy rather than about a gatekept class. The exam fee itself is the fixed cost — $100 as of January 2026, up from $80 — paid to FINRA when you register through a FINRA-member firm or, for unsponsored candidates, through the standard enrollment process. Free official material exists: FINRA publishes the SIE content outline and a handbook, and these are the authoritative blueprint. Paid providers differentiate mainly on practice-question quality and explanations, which matter because the exam is definitional and good distractors teach the boundaries of each term.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'FINRA SIE content outline & handbook', values: ['Free', 'PDF / web', 'The authoritative blueprint — study against it, not instead of it'] },
      { label: 'Exam enrollment (FINRA fee)', values: ['$100 (rose from $80 in Jan 2026)', 'Paid at registration', 'Mandatory — the fixed cost to sit the exam'] },
      { label: 'Kaplan SIE prep (book + QBank)', values: ['~$100-250 depending on package', 'Print/eBook + online QBank', 'Structured reading plus a large practice-question bank'] },
      { label: 'Achievable SIE course', values: ['~$75-150', 'Adaptive online course', 'Budget self-study with spaced-retention built in'] },
      { label: 'STC (Securities Training Corporation) SIE', values: ['~$100-200', 'Online course + exams', 'Candidates who want a guided sequence with progress tracking'] },
      { label: 'Knopman or comparable boutique QBank', values: ['~$80-180', 'Online QBank + videos', 'Extra question drill and video explanation of weak areas'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax. The FINRA exam fee is $100 as of January 2026 (previously $80) and is set by FINRA, not by prep vendors. Free official outline material exists, so no paid resource is strictly required to pass. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'SIE failures cluster around four predictable errors: mis-weighting study time, underestimating the regulatory and prohibited-activities detail, misunderstanding the scoring and retake rules, and treating the exam as a math test when it is a recognition test. None of these is a knowledge gap that the outline does not cover; they are allocation and framing mistakes, and all are cheap to avoid once named.',
    items: [
      {
        mistake: 'Studying evenly instead of by content weight',
        fix: 'The four areas are 16% / 44% / 31% / 9%. Candidates who give the 9% regulatory slice as much time as the 44% product domain systematically lose marks where they are densest. Allocate hours to the outline percentages: roughly half your time on Products and Their Risks, a third on Trading/Accounts/Prohibited, and the remainder split between Capital Markets and Regulatory.'
      },
      {
        mistake: 'Underestimating the prohibited-activities and conduct rules',
        fix: 'The Trading, Customer Accounts and Prohibited Activities domain (31%) is tested sharply and trips up people who "know finance" but not the rulebook. Learn the prohibited and unethical practices explicitly rather than assuming they follow from common sense — the exam asks precisely where conduct rules draw the line.'
      },
      {
        mistake: 'Assuming the passing score is a percentage of questions answered',
        fix: 'The SIE is scored 0-100 with a 70 cut, and it includes unscored pretest questions, so your raw correct count does not equal your score. Study to clear 70 with margin rather than aiming to "get 70% right", and answer all ~75 items as if scored, because you cannot identify the pretest ones.'
      },
      {
        mistake: 'Not knowing the retake wait before sitting',
        fix: 'After a first or second fail you wait 30 days; after a third or later failure you wait 180 days. Candidates who treat the SIE as a low-stakes throwaway and rush a marginal first attempt can lock themselves into a long wait. Plan the first attempt as the one that should count, especially since the pass is valid four years.'
      },
      {
        mistake: 'Treating the SIE as a calculation exam',
        fix: 'The exam is overwhelmingly definitional and conceptual, not quantitative. Candidates who drill formulas waste time the outline does not reward and under-drill the term recognition that actually appears. Build flashcards and recognition drills; only a light familiarity with a few quantitative concepts is needed.'
      },
      {
        mistake: 'Forgetting the SIE is only a foundation, not a registration',
        fix: 'Passing the SIE alone does not make you registered or employable as a representative; it is valid four years and must be paired with a sponsor-backed qualifying exam (e.g., Series 7 or 6) to become active. Plan the SIE as step one of a sequence, not as a terminal credential, and time it so the four-year window aligns with your sponsor-backed exam.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The SIE presents about 75 multiple-choice questions in 105 minutes (one hour and forty-five minutes), scored on a 0 to 100 scale with a passing score of 70. A small number of those ~75 items are unscored pretest questions being evaluated for future use; they are indistinguishable from scored items, so every question must be answered as if it counts, and your raw correct count does not map directly to the 70 cut. The questions are single-answer multiple choice drawn from the four content areas: Knowledge of Capital Markets (16%), Understanding Products and Their Risks (44%), Understanding Trading, Customer Accounts and Prohibited Activities (31%), and the Regulatory Framework (9%). Unlike some FINRA qualifying exams, the SIE has no sponsor requirement and no industry experience prerequisite — any candidate aged 18 or older may sit it. The item style is definitional and conceptual: identify the correct term, the correct regulator, the risk that attaches to a product, or the conduct rule that applies to a scenario. There is little arithmetic. The practical pacing implication is that with roughly 84 seconds per question the clock is comfortable, but the volume means the final third of the exam is where fatigue silently costs recognition points, so full-length timed practice is the right preparation rather than topic-by-topic drilling alone.',
    types: [
      { name: 'Single-answer multiple choice', share: 'The entire ~75-question exam', detail: 'Each item has one correct answer drawn from the content outline. Distractors are plausible alternative terms or regulators that test the boundary of each definition.' },
      { name: 'Product-and-risk identification', share: 'Densest in the 44% Products domain', detail: 'Asks which risk or suitable-investor fit attaches to a given instrument — equities, fixed income, packaged products, options. Recognition of the pairing is the skill.' },
      { name: 'Regulatory and conduct scenario items', share: 'Heavy in the 31% Trading/Accounts/Prohibited domain', detail: 'A described situation asking which rule, prohibited practice or regulator applies. Rewards precise knowledge of the FINRA/SEC framework over general finance intuition.' },
      { name: 'Unscored pretest items', share: 'Approximately 5 pretest questions among the ~75', detail: 'Indistinguishable from scored items; included to evaluate future content. Answer all as if scored, since you cannot tell them apart.' }
    ],
    samples: [
      {
        prompt: 'Which of the following best describes a characteristic of a municipal bond?',
        options: [
          'A. It is issued by a corporation to raise capital and is backed by the issuer’s general credit',
          'B. It is issued by a state or local government and interest is often exempt from federal income tax',
          'C. It represents ownership in a company and pays dividends',
          'D. It is a derivative whose value is based on an underlying equity index'
        ],
        answer: 'B',
        explanation: 'Municipal bonds are debt securities issued by states, cities and other local government entities, and the interest they pay is frequently exempt from federal (and sometimes state) income tax — the defining attraction for certain investors. A describes a corporate bond, C describes equity/stock, and D describes a derivative such as an index option. The SIE repeatedly tests the issuer and tax character of each product type, which is why knowing the product-plus-characteristic pairing is worth heavy study time.'
      },
      {
        prompt: 'Under the regulatory framework, which entity is primarily responsible for enforcing federal securities laws and overseeing the SEC’s rulemaking?',
        options: [
          'A. FINRA',
          'B. The Municipal Securities Rulemaking Board (MSRB)',
          'C. The Securities and Exchange Commission (SEC)',
          'D. The Federal Reserve'
        ],
        answer: 'C',
        explanation: 'The SEC is the federal agency charged with administering and enforcing the federal securities laws and overseeing the self-regulatory organizations, including FINRA. FINRA (A) is a self-regulatory organization that writes and enforces rules for broker-dealers, not the federal overseer. The MSRB (B) writes rules for municipal securities but does not enforce them. The Federal Reserve (D) sets monetary policy and regulates banks, not the securities laws generally. Distinguishing the roles of these bodies is a recurring SIE item.'
      },
      {
        prompt: 'An associated person recommends a high-risk options strategy to an elderly, risk-averse customer with a fixed income. Under conduct rules, this is most likely a violation of:',
        options: [
          'A. Suitability obligations',
          'B. The anti-money-laundering program',
          'C. Books-and-records requirements',
          'D. The net capital rule'
        ],
        answer: 'A',
        explanation: 'Recommendations must be suitable for the customer’s profile, objectives and risk tolerance; steering a risk-averse, fixed-income elderly customer into a high-risk strategy breaches the suitability obligation, a core conduct rule in the Trading/Customer Accounts/Prohibited domain. B, C and D are real regulatory obligations but unrelated to matching a recommendation to a customer profile. The SIE tests the boundary of conduct rules precisely this way — knowing which rule applies to which fact pattern.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published FINRA SIE content outline, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The SIE is delivered by Prometric, typically at a test centre, though some candidates enrol through a FINRA-member firm that may offer alternative delivery; confirm your mode when you register. Unlike the open-book CSM, the SIE is a closed-book, proctored exam: about 75 multiple-choice questions in 105 minutes, scored 0-100 with a 70 pass. The logistics therefore resemble a standard certification exam rather than a take-at-home assessment. The risks on the day are mostly about identification and pacing: Prometric requires two forms of ID with a name matching your FINRA registration exactly, and a mismatch can forfeit the sitting. The 105-minute clock is comfortable at ~84 seconds per question, so the discipline to maintain a steady pace and not burn the comfortable buffer early is what protects the final third from fatigue. You receive a preliminary result at the centre, with the official score report following through your FINRA account. Because the SIE requires no sponsor, an unsponsored 18-year-old books and sits it independently, which makes personal calendar and ID discipline the candidate’s own responsibility rather than an employer’s. Plan the attempt as the one that should count, since a third failure triggers a 180-day wait.',
    bring: [
      'Two forms of valid identification, one government-issued with photo, names matching your FINRA/SIE registration exactly',
      'Your SIE exam confirmation and any appointment number from Prometric',
      'For centre delivery: nothing else — personal items are stored in a locker',
      'A calm 105-minute block; the exam is closed-book, so no study materials are permitted inside'
    ],
    leave: [
      'Phones, smartwatches, calculators (none needed) and any study notes — stored in the locker',
      'Any reference material; the SIE is closed-book and proctored',
      'Second monitors or unauthorised devices; the testing workstation is provided',
      'Relying on a nickname or mismatched name on your ID — it must match the registration exactly'
    ],
    timeline: [
      { time: 'Before registration', detail: 'Confirm you are 18 or older (no sponsor needed) and that your legal name matches what you will present on ID.' },
      { time: '24 hours before', detail: 'Re-confirm the Prometric appointment time and location, and re-check your ID names against the registration.' },
      { time: '30 minutes before', detail: 'Arrive at the centre for check-in: ID verification, photograph, locker storage of personal items.' },
      { time: 'At the seat', detail: 'The ~75-question, 105-minute exam launches. Set a steady pace of roughly 80-90 seconds per question, leaving a buffer for review.' },
      { time: 'Final 15 minutes', detail: 'Use the buffer to revisit flagged items; do not leave questions blank, since there is no penalty for a wrong answer beyond the lost point.' },
      { time: 'On submission', detail: 'A preliminary result appears; the official score report posts to your FINRA account. A 70 or above passes.' }
    ],
    rules: [
      'The exam is closed-book and proctored, delivered by Prometric.',
      'About 75 multiple-choice questions in 105 minutes; pass at a scaled 70 on a 0-100 scale.',
      'A small number of items are unscored pretest questions indistinguishable from scored ones.',
      'Two forms of ID are required, one government-issued with photo, names matching registration exactly.',
      'No sponsor or industry experience is required; candidates must be at least 18.',
      'Retake waits: 30 days after a first or second fail, 180 days after a third or later failure. The SIE is valid four years.'
    ],
    afterwards:
      'A preliminary pass or fail appears at the centre, and the official score report follows in your FINRA account. On a pass, the SIE is recorded and remains valid for four years — but note it is only a foundation: to become an active registered representative you must still pair it with a sponsor-backed qualifying exam such as the Series 7 or Series 6 within that window. Diary the four-year validity and plan the sponsored exam while the SIE knowledge is fresh. On a fail, the retake clock is what matters: a first or second failure means a 30-day wait, a third or later means 180 days, so use the wait to re-drill the outline — especially the 44% Products and Their Risks domain — rather than re-sitting on the same preparation. Because FINRA publishes no current pass rate, judge your readiness by full timed practice exams in which you clear 70 with margin, not by comparison to a pass-rate figure that is not maintained. The SIE is the cheapest, most accessible securities exam on this site precisely because it needs no sponsor; treat that independence as a reason for personal discipline, not a reason to rush.'
  }
};

export default data;
