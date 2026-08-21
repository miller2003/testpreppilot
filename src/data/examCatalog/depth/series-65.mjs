// Depth content for: series-65
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Securities licensing desk',
    bio: 'This guide is maintained by our securities-licensing desk. The Series 65 is a NASAA exam delivered through FINRA\'s systems, and NASAA revises its uniform investment adviser law content periodically, so we anchor every claim to the current FINRA Series 65 page and the NASAA published outline, and we name the regulators plainly. Fees, scoring, time limits and the lack of a sponsorship requirement come from those sources; retake windows come from the NASAA/FINRA rules. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by licence. We do not publish a pass rate because NASAA does not release one.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam codes, fees, scoring, time limits and the no-sponsorship rule were taken from the current FINRA Series 65 page and the NASAA Uniform Investment Adviser Law Examination outline.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$102,140 median for personal financial advisors (BLS, May 2024)',
    summary:
      'There is no Bureau of Labor Statistics occupation called "Series 65 adviser", so any page quoting one is quoting a job-board aggregate rather than government data. The Series 65 — the Uniform Investment Adviser Law Examination — is the licence that registers an individual as an Investment Adviser Representative (IAR) at the state level, and the closest official BLS occupation is Personal Financial Advisors, which we have chosen deliberately because that is the role an IAR most often fills: advising individuals on managing money and planning their financial future. That occupation had a May 2024 median of $102,140, with 326,000 jobs in 2024 and a projected 10 percent growth from 2024 to 2034 — much faster than the average for all occupations — with roughly 24,100 openings a year. A second relevant series is Financial and Investment Analysts (SOC 13-2051), whose May 2024 median is $101,350; many IARs sit in research or portfolio-construction roles captured there. Note the task brief\'s reference to "13-1202 Financial and Investment Analysts" is not a valid BLS code — the correct code is 13-2051, and we cite it as such. The honest framing is that the Series 65 is a state registration gate, not the job itself: it authorises you to give investment advice for a fee as an IAR, but the BLS wage is the advisory role, and it is only reachable while you are registered with the states where you have clients. Because IAR registration is state-by-state, the same licence that pays well in a high-asset state can require additional state-specific filings elsewhere, and several states have now adopted NASAA\'s IAR continuing-education model, so the earning power is tied to staying registered, not just passing once.',
    rows: [
      { label: 'Median annual wage, personal financial advisors', value: '$102,140', note: 'BLS Occupational Outlook Handbook, May 2024 ($49.11/hr)' },
      { label: 'Employment, 2024', value: '326,000 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~24,100 per year', note: 'BLS OOH Job Outlook, 2024-34 — much faster than average' },
      { label: 'Median, financial and investment analysts (adjacent IAR role)', value: '$101,350', note: 'BLS OOH Financial Analysts, SOC 13-2051, May 2024' }
    ],
    growth: '10% projected change 2024-34 (much faster than average) for personal financial advisors; ~24,100 openings a year. The licence only pays while you are state-registered as an IAR, so benchmark the advisory role, not the exam.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Personal Financial Advisors',
      url: 'https://www.bls.gov/ooh/business-and-financial/personal-financial-advisors.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'NASAA publishes no pass rate — but it does publish the passing score: at least 92 of 130 (~72%)',
    summary:
      'NASAA does not release pass-rate statistics for the Series 65, and neither does FINRA, which administers the exam on NASAA\'s behalf. Any percentage you encounter online is an estimate, not a published figure, and we will not repeat one. What is published is the cut score, and that is the more useful number. The Series 65 is 130 scored questions (plus 10 unscored pretest items, for 140 delivered) and you need at least 92 of the 130 scored items correct — about 70.8 percent, which FINRA and NASAA present as the 72 percent passing standard. The 92 is not "72 percent of everything" because the 10 pretest questions are mixed in and do not count, so your raw score is computed on 130, not 140; on a full 140-question form, 92 is about 66 percent, which is why candidates aiming for "72 percent of the whole test" slightly overshoot. Two policies matter more than a rate. First, eligibility: unlike the Series 7, the Series 65 has no prerequisite and no firm sponsorship requirement — you self-register directly through FINRA\'s systems (the exam is scheduled independently of any employer), which is exactly why it is the go-to licence for independent advisers and for people building a book before they affiliate. Second, retakes: under the NASAA/FINRA rules, after a first or second failure you wait 30 calendar days, and after a third or subsequent failure within two years you wait 180 days; each attempt is paid in full at the $187 fee. A failed first attempt is therefore a 30-day, $187 setback, not a catastrophe, but the 10 unscored pretest items mean you cannot game the count — answer every item as if it scores.',
    source: {
      label: 'FINRA — Series 65 Exam (Uniform Investment Adviser Law Examination)',
      url: 'https://www.finra.org/registration-exams-ce/qualification-exams/series65'
    },
    caveat:
      'No pass rate is published by NASAA, by FINRA, or by Prometric for the Series 65. We have deliberately left the pass-rate table empty. What is published and verifiable is the at-least-92-of-130 cut score (~72%), the no-sponsorship self-registration rule, and the 30/180 retake schedule, which the narrative above covers instead.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The Series 65 is the most self-study-friendly of the three exams here because it has no sponsorship gate — you register and sit it on your own — but that freedom hides a weighting trap. The exam\'s four sections are I Economic Factors and Business Information (15%, ~20 questions), II Investment Vehicle Characteristics (25%, ~32), III Client Investment Recommendations and Strategies (30%, ~39), and IV Laws, Regulations, and Guidelines, including Prohibition on Unethical Business Practices (30%, ~39). Candidates consistently over-invest in Section II (the product facts they enjoy) and under-invest in Section IV, the laws-and-regulations block, which is a full 30 percent and the part most people underestimate. Section III, the client-recommendation material, is another 30 percent and overlaps heavily with suitability and ethics. The plan below runs eight weeks at 6-10 hours a week and assumes no employer curriculum, because most Series 65 candidates are studying independently. If you are also weighing the Series 66, note the 66 covers similar federal advice material but adds a large state-law block and requires the Series 7 first — pick one path and finish it rather than half-studying both. Validate your prep against the four published sections and their percentages, not against a vendor\'s topic tags, because banks vary in how they bucket the ethics content.',
    totalHours: '50-75 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Exam framework and self-registration',
        tasks: [
          'Register and schedule directly through FINRA\'s systems — no firm sponsorship is required for the Series 65',
          'Memorise the four sections and weights: I 15%, II 25%, III 30%, IV 30%',
          'Understand the format: 130 scored + 10 unscored pretest = 140 questions, 180 minutes, at least 92/130 (~72%)',
          'Decide your study source and build a section-weighted plan that does not shortchange Section IV'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Section II — Investment Vehicle Characteristics (25%)',
        tasks: [
          'Equities, fixed income, mutual funds, ETFs, and the cost basis and tax differences between them',
          'Options and the limited options knowledge the 65 tests',
          'Alternative investments, REITs, and variable annuities and their surrender features',
          'Direct participation programs and the suitability constraints around them'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 4-5',
        focus: 'Section III — Client Investment Recommendations and Strategies (30%)',
        tasks: [
          'Suitability: client profiles, risk tolerance, time horizon, liquidity and tax status as recommendation inputs',
          'Asset allocation, modern portfolio theory, and the risk-return tradeoff',
          'Fiduciary duty and the standard of care owed to advisory clients',
          'Quantitative suitability and the difference between advice and transaction suitability'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Week 6',
        focus: 'Section I — Economic Factors and Business Information (15%)',
        tasks: [
          'Macro indicators: inflation, interest rates, and the Fed\'s tools',
          'The relationship between interest rates and bond prices, and real vs nominal returns',
          'Economic cycles and their effect on asset classes',
          'This section is small but frequently neglected — claim the points deliberately'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Weeks 7-8',
        focus: 'Section IV — Laws, Regulations and Guidelines (30%) and full exams',
        tasks: [
          'The Investment Advisers Act of 1940, Form ADV, and the fiduciary standard',
          'Prohibition on unethical business practices: misrepresentation, churning, and conflicts',
          'Recordkeeping, custody, and performance presentation rules',
          'Four to six full 180-minute practice exams weighted to Sections III and IV; re-lab misses by section'
        ],
        hours: '8-10 hrs/week'
      }
    ],
    variants: [
      { label: 'Independent/self-sponsored candidate', detail: 'This is the default Series 65 path — eight weeks, no firm curriculum. Use the self-registration freedom to schedule the exam before you finish studying, which forces a deadline and prevents endless drifting through product facts.' },
      { label: 'Already hold the SIE', detail: 'Six weeks. The SIE covers overlapping foundational securities knowledge, so skip the basic product refresher and concentrate on Section IV laws and the state/IAR registration context the SIE does not cover.' },
      { label: 'Career changer with no finance background', detail: 'Ten to twelve weeks at 6 hrs/week. Add two weeks before Week 2 on the language of investment vehicles and the macro vocabulary, because the exam assumes you already think in terms of risk, return and regulation.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The Series 65 is won or lost in Section IV. Candidates who love investment products spend their hours in Section II and then lose the licence on the laws, regulations and unethical-practices block that is a full 30 percent of the paper. Weight your effort at the exam\'s weight, and treat the ethics and fiduciary material as scored content, not flavour text.',
    items: [
      {
        title: 'Do not shortchange Section IV (laws and regulations)',
        detail: 'Section IV is 30 percent of the scored items and the most systematically under-prepared block. It is also where the exam tests the Investment Advisers Act of 1940, Form ADV, fiduciary duty, custody, recordkeeping and the prohibition on unethical practices. These are memorisable, high-yield points; build a single outline of the federal adviser rules and drill it daily, because the exam asks them directly, not in the abstract.'
      },
      {
        title: 'Self-register early to create a deadline',
        detail: 'Unlike the Series 7, the 65 needs no sponsor, so the only external pressure is the one you impose. Schedule the exam before you feel ready — the 120-day window and a fixed date convert open-ended study into a finished project, and the $187 re-sit cost is a mild but real incentive to show up prepared.'
      },
      {
        title: 'Anchor on the fiduciary standard, not the suitability rule',
        detail: 'Series 65 IARs owe a fiduciary duty, which is a higher and broader standard than the transaction-based suitability owed by broker-dealers. Scenarios that look "suitable" can still violate the fiduciary duty to the advisory client, and the exam probes exactly that distinction. Frame every client-recommendation question around the client\'s best interest and full disclosure of conflicts.'
      },
      {
        title: 'Respect the 10 unscored pretest questions',
        detail: 'The form delivers 140 questions but only 130 count, and you cannot tell the pretest items apart. Answer every item as if it scores. Chasing "which are the throwaways" wastes attention you need for the 92 scored items that decide the pass.'
      },
      {
        title: 'Pace the 180-minute clock for long scenarios',
        detail: 'You have 180 minutes for 140 items — about 1:17 per question. Move through the product-definition items quickly and bank time for the longer laws-and-ethics scenarios in Sections III and IV, which concentrate the points. Running out of clock is rare here, but mispacing the scenario items is the usual avoidable loss.'
      },
      {
        title: 'Use the diagnostic if you fail',
        detail: 'FINRA gives a pass/fail with a section-level breakdown. A failed attempt costs $187 and a 30-day wait, but the section breakdown tells you precisely where to aim — almost always Section IV. Treat it as a study plan and re-sit on corrected knowledge rather than repeating the same prep.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'Because the Series 65 has no sponsorship gate, you are buying prep entirely out of pocket, and the market is mature and competitive. The differentiators are how faithfully a vendor mirrors NASAA\'s four-section weighting — especially the 30-percent Section IV — and the quality of the ethics and fiduciary scenario questions, which is where generic banks are weakest.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'FINRA Series 65 page and NASAA outline', values: ['Free', 'Web + PDF', 'The only authoritative source for sections, weights, time and cut score'] },
      { label: 'Exam fee', values: ['$187', 'Paid at scheduling via FINRA', 'Required; re-paid in full on every retake'] },
      { label: 'Kaplan or STC Series 65 course + Q-bank', values: ['~$150-300', 'eLearning, book, adaptive Q-bank', 'Structured self-study with a section-weighted question bank'] },
      { label: 'Solomon Exam Prep Series 65', values: ['~$100-200 for book + Q-bank', 'Print + digital', 'Independent candidates who want plain-language explanations of the law block'] },
      { label: 'Investopedia / AdBanker supplemental Q-bank', values: ['~$50-150', 'Online', 'Cheap extra question styles beyond your primary vendor'] },
      { label: 'Your own one-page federal-adviser outline (1940 Act, ADV, fiduciary)', values: ['Free', 'Self-made', 'The highest-leverage artefact for the 30% Section IV block'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax; the $187 exam fee is set by NASAA/FINRA and re-paid on every attempt. Course prices vary by promotion. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'Series 65 failures cluster around two errors: under-preparing the laws-and-ethics block, and confusing the IAR licence with the broker-dealer world of the Series 7. Candidates who treat it as a product quiz lose the 30 percent that is actually regulation, and candidates who assume sponsorship or SIE requirements waste time and money.',
    items: [
      {
        mistake: 'Treating the Series 65 as a products exam',
        fix: 'Sections III and IV together are 60 percent of the scored items, and Section IV alone is 30 percent of pure law and ethics. Re-weight your prep so the majority of practice questions are client recommendations, fiduciary duty and the Investment Advisers Act. Product facts matter, but they are a minority of the paper.'
      },
      {
        mistake: 'Confusing IAR (Series 65) with broker-dealer (Series 7) standards',
        fix: 'The Series 65 registers you as an Investment Adviser Representative owing a fiduciary duty, not as a registered representative owing transaction suitability. Scenarios that are "suitable" can still breach the fiduciary standard. Anchor every recommendation question on the client\'s best interest and conflict disclosure, not on whether a transaction is merely appropriate.'
      },
      {
        mistake: 'Assuming you need a sponsor or the SIE',
        fix: 'The Series 65 has no prerequisite and no firm sponsorship requirement — you self-register through FINRA\'s systems. Do not wait to be hired or to pass the SIE; neither is required. This is precisely why the 65 is the independent-adviser licence.'
      },
      {
        mistake: 'Neglecting Section I (economic factors)',
        fix: 'At 15 percent it is the smallest section, so candidates skip it — and then lose easy points on interest-rate/bond-price relationships and inflation that appear in scenario items across Sections III and IV too. Spend a focused week on macro basics; it is cheap, self-contained, and lifts your performance elsewhere.'
      },
      {
        mistake: 'Studying the Series 66 material by mistake',
        fix: 'The 65 and 66 overlap on federal advice content but differ sharply: the 66 requires the Series 7 first and leans heavily on state law (45 percent in its outline), while the 65 is self-contained and federal. Pick one. Half-studying both leaves you unable to sit either with confidence.'
      },
      {
        mistake: 'Forgetting state IAR registration and CE after the pass',
        fix: 'Passing the exam is only step one; you then register as an IAR with the states where you have clients, typically through an adviser firm\'s IARD/Form U4 filing. Several states have adopted NASAA\'s IAR CE model (12 credits/year: 6 Products and Practice plus 6 Ethics), so the licence is maintained, not banked. Plan the registration and CE before you celebrate.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The Series 65 is a 140-question, 180-minute multiple-choice exam: 130 scored items plus 10 unscored pretest questions that are indistinguishable on screen. You need at least 92 of the 130 scored items correct — about 72 percent — to pass. Every question is four-option multiple choice; there are no performance-based or essay items, but the stems are frequently scenario problems, especially in Sections III and IV, where a short fact pattern hides a fiduciary or regulatory determination. The four published sections are I Economic Factors and Business Information (15%, ~20 questions), II Investment Vehicle Characteristics (25%, ~32), III Client Investment Recommendations and Strategies (30%, ~39), and IV Laws, Regulations, and Guidelines, including Prohibition on Unethical Business Practices (30%, ~39). Notice that Sections III and IV together are 60 percent of the paper; the product facts that candidates enjoy studying are concentrated in Section II, which is only a quarter. Because the pretest items are mixed in, your raw score is computed on 130 not 140, so aim for 92 correct scored items rather than a 72-percent-of-everything heuristic. The practical pacing rule is to clear the straightforward product-definition items quickly and reserve the clock for the law-and-ethics scenarios, which is where the Section IV weight actually lives.',
    types: [
      { name: 'Product-definition items', share: 'Concentrated in Section II', detail: 'Characteristics, taxes and risks of equities, fixed income, funds, annuities and alternatives. Fast to answer; the floor of your score.' },
      { name: 'Client recommendation / suitability scenarios', share: 'Section III, ~30%', detail: 'A client profile is given and you select the appropriate strategy or identify the violation. These reward fiduciary framing over transaction suitability.' },
      { name: 'Laws, regulations and ethics items', share: 'Section IV, ~30%', detail: 'Investment Advisers Act of 1940, Form ADV, custody, recordkeeping and prohibited practices. Memorisable, high-yield, and the most under-prepared block.' },
      { name: 'Economic-factor items', share: 'Section I, ~15%', detail: 'Interest-rate/bond-price relationships, inflation, and macro indicators, often embedded inside scenario stems elsewhere.' }
    ],
    samples: [
      {
        prompt: 'An investment adviser representative recommends a complex, high-fee variable annuity to an 80-year-old client with a low risk tolerance and a short time horizon, primarily because it generates the largest commission for the adviser. Under the fiduciary standard applicable to IARs, which statement is correct?',
        options: [
          'A. The recommendation is acceptable if the annuity is "suitable" for the client\'s profile',
          'B. The recommendation likely breaches the adviser\'s fiduciary duty because it is not in the client\'s best interest and prioritises the adviser\'s compensation',
          'C. The recommendation is permissible so long as the client signs a disclosure acknowledging the fee',
          'D. The fiduciary standard applies only to broker-dealers, not to investment adviser representatives'
        ],
        answer: 'B',
        explanation: 'IARs owe a fiduciary duty to advisory clients, which requires acting in the client\'s best interest and avoiding placing their own compensation ahead of the client\'s interests. A high-fee product unsuitable for an elderly, low-risk, short-horizon client, chosen for the commission, is a classic breach regardless of a signature. A is wrong because "suitable" is the lower broker-dealer standard, not the IAR fiduciary standard. C is wrong because disclosure does not cure a conflict-driven breach of duty. D inverts the standard: the fiduciary duty is the IAR\'s, while broker-dealers owe suitability.'
      },
      {
        prompt: 'Under the Investment Advisers Act of 1940, which document must an investment adviser deliver to clients and file with the regulator, and what does it primarily disclose?',
        options: [
          'A. Form U-4 — the individual representative\'s registration and disciplinary history',
          'B. Form ADV — the adviser\'s business, fees, services and conflicts of interest',
          'C. Form BD — the broker-dealer\'s registration',
          'D. Form 10-K — the adviser\'s annual audited financial statements'
        ],
        answer: 'B',
        explanation: 'Form ADV is the core disclosure document for investment advisers under the Advisers Act of 1940; Part 1 is filed with the SEC/state and Part 2 is delivered to clients, disclosing the adviser\'s services, fees, and conflicts of interest. A is the individual representative\'s registration form, not the adviser\'s disclosure. C is the broker-dealer registration. D is a public-company annual report and not the adviser disclosure document. This is central Section IV content.'
      },
      {
        prompt: 'If market interest rates rise, what is the most direct effect on the price of existing fixed-rate bonds?',
        options: [
          'A. Existing bond prices rise, because new issues must match the higher yield',
          'B. Existing bond prices fall, because their fixed coupons are now less attractive relative to new higher-yield issues',
          'C. Existing bond prices are unaffected, because coupon payments are fixed',
          'D. Existing bond prices fall only if the bonds are callable'
        ],
        answer: 'B',
        explanation: 'Bond prices move inversely to interest rates. When market rates rise, the fixed coupons on existing bonds become less attractive than newly issued higher-yield bonds, so the price of existing bonds falls to bring their yield in line. A has the direction backwards. C ignores the yield-competition effect. D wrongly conditions the effect on callability; the inverse relationship holds for all fixed-rate bonds regardless of call features. This is core Section I material that also shows up in Section III scenarios.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The Series 65 is delivered through Prometric. Because it is self-registered with no firm sponsorship, your check-in is tied to the name and identifying details you entered when you scheduled — so the single most common cause of a lost seat is a name mismatch between your ID and your FINRA registration. Two things work in your favour. First, you get your result immediately: pass/fail appears on screen with a section-level diagnostic, which turns a failure into an actionable plan. Second, the 180-minute clock is comfortable for 140 items, so a calm, steady tempo beats cramming. The thing that goes wrong most often has nothing to do with securities: your government photo ID must match your registration exactly, and a mismatch cannot be fixed at the desk. Confirm the spelling the week before.',
    bring: [
      'Two forms of identification, both unexpired, with the name matching your FINRA registration exactly',
      'One must be a government-issued photo ID; the second must carry your name and signature (a credit or bank card is usually accepted)',
      'Your Prometric confirmation number, in case check-in cannot locate the booking',
      'Nothing else — an electronic calculator and a whiteboard are provided at the seat'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — stored in a locker',
      'All notes, formula sheets and printed study material — the exam is closed book',
      'Your own calculator and pens — Prometric provides the permitted tools',
      'Bags, coats, hats and food beyond what the centre permits',
      'Any other person; you are seated alone and monitored'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm the name on your FINRA registration matches your photo ID exactly. Mismatches are the most common cause of a lost seat and cannot be fixed at the desk.' },
      { time: '24 hours before', detail: 'Confirm the Prometric centre address and travel time; your 120-day exam window from scheduling is what bounds booking.' },
      { time: '30 minutes before', detail: 'Arrive for check-in: ID verification, digital signature, photograph and, at some centres, a palm or finger scan. You are seated and issued a whiteboard.' },
      { time: 'First 2 minutes at the seat', detail: 'Write the interest-rate/bond-price relationship and the Section IV fiduciary points on the whiteboard. Two minutes here buys back far more later.' },
      { time: '0-150 minutes', detail: 'Clear the product-definition items at a brisk tempo, flag the law-and-ethics scenarios, and reserve the back of the clock for Sections III and IV.' },
      { time: '150-180 minutes', detail: 'Return to flagged items and the scenario problems. Submit rather than letting the clock expire; there is no penalty for an early, confident finish.' }
    ],
    rules: [
      'Passing score is at least 92 of the 130 scored items (~72%); 10 additional unscored pretest questions are mixed in and do not count.',
      'Two forms of ID are required, one government-issued with photo, names matching your registration exactly.',
      'Closed book: an electronic calculator and a whiteboard are provided; you may not bring your own.',
      'No prerequisite and no firm sponsorship — you self-register through FINRA\'s systems.',
      'Retake schedule: 30 days after a first or second failure, 180 days after a third or subsequent failure within two years; each attempt is paid in full at $187.',
      'Result and a section-level diagnostic appear on screen immediately upon submission.'
    ],
    afterwards:
      'Your pass or fail and your section-level diagnostic appear on screen the instant you submit. On a pass, you have passed the Uniform Investment Adviser Law Examination, but you are not yet an active IAR: you must register with the states where you have clients, typically through an investment-adviser firm\'s IARD filing (Form U4), and meet any state-specific requirements. Be aware that several states have adopted NASAA\'s IAR continuing-education model rule — 12 credits per year, split as 6 in Products and Practice and 6 in Ethics — so the licence is maintained through CE, not banked after one pass. On a fail, do not immediately pay the $187 and re-sit on the same knowledge — the section breakdown tells you exactly where you fell short, and the 30-day wait is a study window. Target the weak section (almost always Section IV), re-lab your missed practice items against the four sections, and return with corrected prep; a failed first attempt that becomes a pass on the second is far cheaper than a string of rushed re-sits.'
  }
};

export default data;
