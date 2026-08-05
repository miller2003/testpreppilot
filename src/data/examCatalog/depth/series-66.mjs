// Depth content for: series-66
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Securities licensing desk',
    bio: 'This guide is maintained by our securities-licensing desk. The Series 66 is a NASAA exam delivered through FINRA\'s systems, and NASAA revises its uniform combined state law content periodically, so we anchor every claim to the current FINRA Series 66 page and the NASAA published outline, and we name the regulators plainly. Fees, scoring, time limits and the Series 7 co-requisite come from those sources; retake windows come from the NASAA/FINRA rules. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by licence. We do not publish a pass rate because NASAA does not release one.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam codes, fees, scoring, time limits and the Series 7 co-requisite were taken from the current FINRA Series 66 page and the NASAA Uniform Combined State Law Examination outline.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$102,140 median for personal financial advisors (BLS, May 2024)',
    summary:
      'There is no Bureau of Labor Statistics occupation called "Series 66 adviser", so any page quoting one is quoting a job-board aggregate rather than government data. The Series 66 — the Uniform Combined State Law Examination — is the licence that, paired with the Series 7, registers an individual as an Investment Adviser Representative (IAR) at the state level while also satisfying the state-law piece that the Series 63 covers. The closest official BLS occupation is Personal Financial Advisors, which we have chosen deliberately because that is the role a Series 7 + 66 holder most often fills: advising individuals on managing money and planning their financial future. That occupation had a May 2024 median of $102,140, with 326,000 jobs in 2024 and a projected 10 percent growth from 2024 to 2034 — much faster than the average for all occupations — with roughly 24,100 openings a year. A second relevant series is Financial and Investment Analysts (SOC 13-2051), whose May 2024 median is $101,350; many IARs sit in research or portfolio-construction roles captured there. Note the task brief\'s reference to "13-1202 Financial and Investment Analysts" is not a valid BLS code — the correct code is 13-2051, and we cite it as such. The honest framing is that the Series 66 is a state-registration gate, not the job itself, and it is only half the credential: on its own the 66 authorises nothing, because it is a co-requisite that must be held together with a valid Series 7. The BLS wage is the advisory role, reachable only while both registrations are active — and because IAR registration is state-by-state and several states have adopted NASAA\'s IAR continuing-education model, the earning power is tied to staying dually registered, not to passing once.',
    rows: [
      { label: 'Median annual wage, personal financial advisors', value: '$102,140', note: 'BLS Occupational Outlook Handbook, May 2024 ($49.11/hr)' },
      { label: 'Employment, 2024', value: '326,000 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~24,100 per year', note: 'BLS OOH Job Outlook, 2024-34 — much faster than average' },
      { label: 'Median, financial and investment analysts (adjacent IAR role)', value: '$101,350', note: 'BLS OOH Financial Analysts, SOC 13-2051, May 2024' }
    ],
    growth: '10% projected change 2024-34 (much faster than average) for personal financial advisors; ~24,100 openings a year. The 66 only matters while paired with an active Series 7 and state IAR registration, so benchmark the advisory role, not the exam.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Personal Financial Advisors',
      url: 'https://www.bls.gov/ooh/business-and-financial/personal-financial-advisors.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'NASAA publishes no pass rate — but it does publish the passing score: at least 73 of 100 (73%)',
    summary:
      'NASAA does not release pass-rate statistics for the Series 66, and neither does FINRA, which administers the exam on NASAA\'s behalf. Any percentage you encounter online is an estimate, not a published figure, and we will not repeat one. What is published is the cut score, and that is the more useful number. The Series 66 is 100 scored questions (plus 10 unscored pretest items, for 110 delivered) and you need at least 73 of the 100 scored items correct — a 73 percent passing standard, slightly higher than the Series 65\'s. The 73 is not "73 percent of everything" because the 10 pretest questions are mixed in and do not count, so your raw score is computed on 100, not 110; on a full 110-question form, 73 is about 66 percent, which is why candidates aiming for "73 percent of the whole test" slightly overshoot. Two policies matter more than a rate. First, eligibility: the Series 66 is a co-requisite with the Series 7 — you must already hold (or simultaneously obtain) a valid Series 7 to be registered as an IAR through the 66, and the SIE is in the chain as well. This is the opposite of the standalone Series 65. Second, retakes: under the NASAA/FINRA rules, after a first or second failure you wait 30 calendar days, and after a third or subsequent failure within two years you wait 180 days; each attempt is paid in full at the $177 fee. A failed first attempt is therefore a 30-day, $177 setback, not a catastrophe, but the 10 unscored pretest items mean you cannot game the count — answer every item as if it scores.',
    source: {
      label: 'FINRA — Series 66 Exam (Uniform Combined State Law Examination)',
      url: 'https://www.finra.org/registration-exams-ce/qualification-exams/series66'
    },
    caveat:
      'No pass rate is published by NASAA, by FINRA, or by Prometric for the Series 66. We have deliberately left the pass-rate table empty. What is published and verifiable is the at-least-73-of-100 cut score (73%), the Series 7 co-requisite, and the 30/180 retake schedule, which the narrative above covers instead.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The Series 66 is the most misunderstood of the three exams because it is a co-requisite, not a standalone licence. It exists to be held together with the Series 7, and it covers state law plus the federal investment-adviser material that the Series 65 also tests — which is why it is often described as "63 plus 65." The exam\'s four sections are I Economic Factors and Business Information (8%, ~8 questions), II Investment Vehicle Characteristics (17%, ~17), III Client Investment Recommendations and Strategies (30%, ~30), and IV Laws, Regulations, and Guidelines, including Prohibition on Unethical Business Practices (45%, ~45). The weighting trap is severe: Section IV is nearly half the paper, and candidates who studied it for the 65 already have a head start, but anyone treating the 66 as a short 65 under-prepares the state-law block and fails. The plan below runs seven weeks at 6-10 hours a week and assumes you have already passed (or are simultaneously sitting) the Series 7, because the 66 is worthless without it. If you do not yet hold a Series 7, stop and obtain it first — the 66 alone registers you as nothing. Validate your prep against the four published sections and their percentages, and weight Section IV above all.',
    totalHours: '40-80 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'The co-requisite structure and exam framework',
        tasks: [
          'Confirm your Series 7 is passed or scheduled — the 66 is a co-requisite and registers nothing on its own',
          'Memorise the four sections and weights: I 8%, II 17%, III 30%, IV 45%',
          'Understand the format: 100 scored + 10 unscored pretest = 110 questions, 150 minutes, at least 73/100 (73%)',
          'Build a section-weighted plan that puts the 45% Section IV at the centre'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Section IV — State law, regulations and unethical practices (45%)',
        tasks: [
          'The Uniform Securities Act (state "blue sky") framework and how it layers on federal law',
          'Investment adviser and broker-dealer registration thresholds, including the de minimis exemption',
          'Prohibition on unethical business practices: misrepresentation, omission, and dishonest conduct',
          'Records, custody, and the state-level enforcement and notice-filing requirements'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Weeks 4-5',
        focus: 'Section III — Client Investment Recommendations and Strategies (30%)',
        tasks: [
          'Suitability and the fiduciary duty owed by an IAR to advisory clients',
          'Asset allocation, portfolio theory, and the risk-return tradeoff',
          'Quantitative suitability and the difference between advice and transaction suitability',
          'This overlaps the 65; if you hold the 65, move faster and use the time on Section IV'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Week 6',
        focus: 'Section II — Investment Vehicle Characteristics (17%)',
        tasks: [
          'Equities, fixed income, funds, ETFs, options and alternatives as they appear in advice scenarios',
          'Variable annuities and their surrender features',
          'This is shorter than on the 65, so claim the points efficiently rather than over-studying'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Week 7',
        focus: 'Section I and timed full exams',
        tasks: [
          'Section I economic factors (8%): interest rates, inflation, and macro indicators',
          'Four to six full 150-minute practice exams weighted to Section IV and III',
          'Re-lab every miss against the four sections; the 45% block should dominate your review'
        ],
        hours: '8-10 hrs'
      }
    ],
    variants: [
      { label: 'Already hold the Series 65', detail: 'Five weeks. You already know Sections II, III and the federal advice material; spend the recovered time almost entirely on Section IV state law, which is the 66\'s distinguishing 45 percent and the usual failure point for 65 holders who under-weight it.' },
      { label: 'Holding Series 7, studying 66 as the IAR path', detail: 'Seven weeks as planned. This is the 63-plus-65 alternative; finish the 7 first if not done, then weight Section IV heavily. Do not sit the 66 before the 7 is active.' },
      { label: 'Career changer with neither 7 nor 65', detail: 'This is the wrong first exam — obtain the Series 7 (and SIE) first. If you must study the 66 material early, allow ten to twelve weeks, adding two weeks on the product and macro vocabulary the exam assumes you already have from a securities background.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The Series 66 is won in Section IV. At 45 percent of the scored items, the state-law and unethical-practices block is nearly half the paper, and it is the part candidates systematically under-prepare — especially people who already passed the 65 and assume the 66 is "the same but shorter." It is not: the 66\'s distinct weight is state law, and that is where the exam separates finishers from re-takers.',
    items: [
      {
        title: 'Centre your prep on Section IV (45%)',
        detail: 'Section IV is 45 percent of the scored items — nearly half the paper — covering the Uniform Securities Act state framework, adviser and broker-dealer registration thresholds (including the de minimis exemption), prohibited practices, and state enforcement. These are memorisable, high-yield points. Build a single outline of state-law rules and drill it daily; the exam asks them directly, and this is the block that decides most 66 outcomes.'
      },
      {
        title: 'Do not assume the 66 equals the 65',
        detail: 'The 66 and 65 share federal advice content, but the 66\'s weighting is different and state-law heavy (45% in Section IV versus the 65\'s 30% laws block that includes more federal material). Candidates who passed the 65 and skim the 66 lose on the state-law depth. Treat the 66 as its own exam with its own outline, not a subset.'
      },
      {
        title: 'Confirm the Series 7 is in place before you sit',
        detail: 'The 66 is a co-requisite with the Series 7 and registers you as nothing on its own. Scheduling the 66 before your 7 is active wastes the $177 and the seat. Hold or sit the 7 first, then take the 66; the two together are what make you a dually registered IAR.'
      },
      {
        title: 'Anchor on the fiduciary standard',
        detail: 'As an IAR path, the 66 tests the fiduciary duty owed to advisory clients, a higher and broader standard than broker-dealer suitability. Scenarios that are "suitable" can still violate the fiduciary duty. Frame every client-recommendation question around the client\'s best interest and full disclosure of conflicts.'
      },
      {
        title: 'Respect the 10 unscored pretest questions',
        detail: 'The form delivers 110 questions but only 100 count, and you cannot tell the pretest items apart. Answer every item as if it scores. Chasing "which are the throwaways" wastes attention you need for the 73 scored items that decide the pass.'
      },
      {
        title: 'Use the diagnostic if you fail',
        detail: 'FINRA gives a pass/fail with a section-level breakdown. A failed attempt costs $177 and a 30-day wait, but the section breakdown tells you precisely where to aim — almost always Section IV. Treat it as a study plan and re-sit on corrected knowledge rather than repeating the same prep.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The Series 66 is bought alongside (or after) the Series 7, so your prep decision is partly about bundling. The differentiator among vendors is how faithfully they mirror NASAA\'s four-section weighting — especially the 45-percent Section IV state-law block — and how specifically their ethics questions reflect the Uniform Securities Act rather than generic federal material.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'FINRA Series 66 page and NASAA outline', values: ['Free', 'Web + PDF', 'The only authoritative source for sections, weights, time and cut score'] },
      { label: 'Exam fee', values: ['$177', 'Paid at scheduling via FINRA', 'Required; re-paid in full on every retake'] },
      { label: 'Kaplan or STC Series 66 course + Q-bank', values: ['~$150-300', 'eLearning, book, adaptive Q-bank', 'Structured self-study with a section-weighted question bank'] },
      { label: 'Solomon Exam Prep Series 66', values: ['~$100-200 for book + Q-bank', 'Print + digital', 'Independent candidates who want plain-language explanations of the state-law block'] },
      { label: 'Supplemental Q-bank (Investopedia / AdBanker)', values: ['~$50-150', 'Online', 'Extra question styles beyond your primary vendor, especially for Section IV'] },
      { label: 'Your own one-page state-law outline (USA, de minimis, prohibited practices)', values: ['Free', 'Self-made', 'The highest-leverage artefact for the 45% Section IV block'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax; the $177 exam fee is set by NASAA/FINRA and re-paid on every attempt. Course prices vary by promotion. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'Series 66 failures cluster around two errors: under-preparing the 45-percent state-law block, and misunderstanding that the 66 is a co-requisite that registers nothing without a Series 7. Candidates who treat it as a short 65 lose the section that matters most, and candidates who sit it before their 7 is active waste the seat and the fee.',
    items: [
      {
        mistake: 'Treating the 66 as a shorter 65',
        fix: 'The 66 shares federal advice content with the 65 but its weighting is different and state-law heavy: Section IV is 45 percent versus the 65\'s 30 percent laws block that includes more federal material. Re-weight your prep so the majority of practice questions are state law and prohibited practices. The 66 is its own exam with its own outline.'
      },
      {
        mistake: 'Under-preparing Section IV (state law, 45%)',
        fix: 'Section IV is nearly half the paper and the usual failure point. Drill the Uniform Securities Act framework, adviser/broker-dealer registration thresholds including the de minimis exemption, and the prohibition on unethical business practices. These are memorisable points; build one outline and repeat it daily.'
      },
      {
        mistake: 'Sitting the 66 without an active Series 7',
        fix: 'The Series 66 is a co-requisite with the Series 7 and authorises nothing on its own. If your 7 is not passed or scheduled, the 66 is wasted money and a wasted seat. Obtain or sit the 7 first; together they make you a dually registered IAR, which is the entire point of the 66.'
      },
      {
        mistake: 'Confusing the 66 with the 63/65 split',
        fix: 'The 66 is the "combined" exam: Series 7 + 66 covers what Series 7 + 63 + 65 would for IAR purposes, folding state law and federal advice into one. It is not a replacement for the 7, and it is not interchangeable with the 63. Pick the 66 path or the 63/65 path deliberately; mixing halves leaves you unable to sit either with confidence.'
      },
      {
        mistake: 'Neglecting Section I (economic factors, 8%)',
        fix: 'At 8 percent it is the smallest section, so candidates skip it — and then lose easy points on interest-rate/bond-price relationships that also appear inside Section III scenarios. Spend a focused few days on macro basics; it is cheap, self-contained, and lifts performance elsewhere.'
      },
      {
        mistake: 'Forgetting IAR registration and CE after the pass',
        fix: 'Passing the 66 plus holding the 7 lets you register as an IAR with the states where you have clients, typically through an adviser firm\'s IARD/Form U4 filing. Several states have adopted NASAA\'s IAR CE model (12 credits/year: 6 Products and Practice plus 6 Ethics), so the licence is maintained, not banked. Plan the registration and CE before you celebrate.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The Series 66 is a 110-question, 150-minute multiple-choice exam: 100 scored items plus 10 unscored pretest questions that are indistinguishable on screen. You need at least 73 of the 100 scored items correct — a 73 percent passing standard — to pass. Every question is four-option multiple choice; there are no performance-based or essay items, but the stems are frequently scenario problems, especially in Sections III and IV, where a short fact pattern hides a fiduciary, registration or prohibited-practice determination. The four published sections are I Economic Factors and Business Information (8%, ~8 questions), II Investment Vehicle Characteristics (17%, ~17), III Client Investment Recommendations and Strategies (30%, ~30), and IV Laws, Regulations, and Guidelines, including Prohibition on Unethical Business Practices (45%, ~45). Notice that Section IV alone is nearly half the paper; the product facts candidates enjoy studying are concentrated in Section II, which is only 17 percent. Because the pretest items are mixed in, your raw score is computed on 100 not 110, so aim for 73 correct scored items rather than a 73-percent-of-everything heuristic. The practical pacing rule is to clear the straightforward items quickly and reserve the clock for the state-law and ethics scenarios, which is where the Section IV weight actually lives.',
    types: [
      { name: 'State-law and prohibited-practice items', share: 'Section IV, ~45%', detail: 'Uniform Securities Act, adviser/broker-dealer registration thresholds including de minimis, custody, and unethical practices. Memorisable, high-yield, and the core of the exam.' },
      { name: 'Client recommendation / fiduciary scenarios', share: 'Section III, ~30%', detail: 'A client profile is given and you select the appropriate strategy or identify the violation. These reward fiduciary framing over transaction suitability.' },
      { name: 'Product-definition items', share: 'Section II, ~17%', detail: 'Characteristics, taxes and risks of equities, fixed income, funds, annuities and alternatives. Fast to answer; the floor of your score.' },
      { name: 'Economic-factor items', share: 'Section I, ~8%', detail: 'Interest-rate/bond-price relationships, inflation, and macro indicators, often embedded inside scenario stems elsewhere.' }
    ],
    samples: [
      {
        prompt: 'Under the Uniform Securities Act, an investment adviser with no place of business in a state solicits a residents of that state but has total advisory clients in the state below the statutory threshold. Which statement is generally correct regarding state registration?',
        options: [
          'A. The adviser must register in the state regardless of client count',
          'B. The adviser is exempt from state registration under the de minimis exemption for being below the client threshold',
          'C. The adviser must register with the SEC but is barred from the state entirely',
          'D. The de minimis exemption applies only to broker-dealers, not to investment advisers'
        ],
        answer: 'B',
        explanation: 'The Uniform Securities Act provides a de minimis exemption: an adviser with no place of business in a state and fewer than a statutory number of advisory clients there is generally exempt from state registration in that state. A is wrong because the exemption exists precisely for low-client-count out-of-state advisers. C invents a bar that does not follow. D is wrong: the de minimis concept applies to investment advisers under state law (subject to the specific statutory threshold). This is core Section IV state-law content that distinguishes the 66 from the 65.'
      },
      {
        prompt: 'An IAR owes a fiduciary duty to advisory clients. Which conduct most clearly violates that duty?',
        options: [
          'A. Recommending a low-cost index fund that tracks the client\'s stated benchmark',
          'B. Disclosing all conflicts of interest in writing before advising the client',
          'C: Placing the IAR\'s own proprietary product into client accounts primarily to generate fees, without disclosure or client benefit',
          'D. Declining to manage an account that falls outside the IAR\'s expertise'
        ],
        answer: 'C',
        explanation: 'The fiduciary duty requires acting in the client\'s best interest and disclosing conflicts; putting a proprietary, fee-generating product into client accounts for the IAR\'s benefit, without disclosure or client advantage, is a textbook breach. A is appropriate conduct. B is the required disclosure that supports the duty. D is prudent scope management, not a violation. This scenario tests the fiduciary standard that runs through Section III.'
      },
      {
        prompt: 'If market interest rates fall, what is the most direct effect on the price of existing fixed-rate bonds?',
        options: [
          'A. Existing bond prices rise, because their fixed coupons become more attractive relative to new lower-yield issues',
          'B. Existing bond prices fall, because their fixed coupons become more attractive',
          'C. Existing bond prices are unaffected, because coupon payments are fixed',
          'D. Existing bond prices rise only if the bonds are callable'
        ],
        answer: 'A',
        explanation: 'Bond prices move inversely to interest rates. When market rates fall, the fixed coupons on existing bonds become more attractive than newly issued lower-yield bonds, so the price of existing bonds rises. B has the direction backwards. C ignores the yield-competition effect. D wrongly conditions the effect on callability; the inverse relationship holds for all fixed-rate bonds regardless of call features. This is core Section I material that also appears inside Section III scenarios.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The Series 66 is delivered through Prometric. Your check-in is tied to the name and identifying details you entered when you scheduled — so the single most common cause of a lost seat is a name mismatch between your ID and your FINRA registration. Two things work in your favour. First, you get your result immediately: pass/fail appears on screen with a section-level diagnostic, which turns a failure into an actionable plan. Second, the 150-minute clock is comfortable for 110 items, so a calm, steady tempo beats cramming. The thing that goes wrong most often has nothing to do with securities: your government photo ID must match your registration exactly, and a mismatch cannot be fixed at the desk. Confirm the spelling the week before — and confirm your Series 7 is active, because the 66 registers you as nothing without it.',
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
      { time: 'The week before', detail: 'Confirm your name matches your photo ID exactly, and confirm your Series 7 is active — the 66 is a co-requisite and registers nothing on its own.' },
      { time: '24 hours before', detail: 'Confirm the Prometric centre address and travel time; your 120-day exam window from scheduling is what bounds booking.' },
      { time: '30 minutes before', detail: 'Arrive for check-in: ID verification, digital signature, photograph and, at some centres, a palm or finger scan. You are seated and issued a whiteboard.' },
      { time: 'First 2 minutes at the seat', detail: 'Write the interest-rate/bond-price relationship and the Section IV de minimis and prohibited-practices points on the whiteboard. Two minutes here buys back far more later.' },
      { time: '0-120 minutes', detail: 'Clear the product-definition items at a brisk tempo, flag the state-law and ethics scenarios, and reserve the back of the clock for Section IV.' },
      { time: '120-150 minutes', detail: 'Return to flagged items and the scenario problems. Submit rather than letting the clock expire; there is no penalty for an early, confident finish.' }
    ],
    rules: [
      'Passing score is at least 73 of the 100 scored items (73%); 10 additional unscored pretest questions are mixed in and do not count.',
      'Two forms of ID are required, one government-issued with photo, names matching your registration exactly.',
      'Closed book: an electronic calculator and a whiteboard are provided; you may not bring your own.',
      'Series 7 co-requisite: the 66 registers you as an IAR only together with an active Series 7; the SIE is in the chain as well.',
      'Retake schedule: 30 days after a first or second failure, 180 days after a third or subsequent failure within two years; each attempt is paid in full at $177.',
      'Result and a section-level diagnostic appear on screen immediately upon submission.'
    ],
    afterwards:
      'Your pass or fail and your section-level diagnostic appear on screen the instant you submit. On a pass, you have passed the Uniform Combined State Law Examination, but you are not yet an active IAR: you must already hold a valid Series 7, and you then register with the states where you have clients, typically through an investment-adviser firm\'s IARD filing (Form U4), meeting any state-specific requirements. Be aware that several states have adopted NASAA\'s IAR continuing-education model rule — 12 credits per year, split as 6 in Products and Practice and 6 in Ethics — so the licence is maintained through CE, not banked after one pass. On a fail, do not immediately pay the $177 and re-sit on the same knowledge — the section breakdown tells you exactly where you fell short (almost always Section IV), and the 30-day wait is a study window. Re-lab your missed practice items against the four sections, weight Section IV above all, and return with corrected prep; a failed first attempt that becomes a pass on the second is far cheaper than a string of rushed re-sits.'
  }
};

export default data;
