// Depth content for: series-7
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Securities licensing desk',
    bio: 'This guide is maintained by our securities-licensing desk. FINRA representative-level exams are revised on FINRA\'s own publication schedule and the content outlines change without much fanfare, so we anchor every claim to the current FINRA qualification-exam page, the published content outline, and the relevant FINRA rule text, and we name the regulator plainly. Fees, scoring, retake windows and sponsorship rules come from FINRA and from FINRA Rule 1210. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by licence. We do not publish a pass rate because FINRA does not release one.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam codes, fees, scoring, time limits and sponsorship requirements were taken from the current FINRA qualification-exams pages and the published Series 7 content outline, and cross-checked against FINRA Rule 1210.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$78,140 median for securities, commodities and financial services sales agents (BLS, May 2024)',
    summary:
      'There is no Bureau of Labor Statistics occupation called "Series 7 representative", and anyone quoting such a figure is quoting a job-board aggregate rather than government data. The closest official BLS occupation to a Series 7 General Securities Representative is Securities, Commodities, and Financial Services Sales Agents, and we have chosen it deliberately because the Series 7 is the licence that lets a sponsored individual solicit and handle retail brokerage business for a FINRA member firm — that is sales-agent work. That occupation had a May 2024 median of $78,140, with 514,500 jobs in 2024 and a projected 3 percent growth from 2024 to 2034, about as fast as the average for all occupations; BLS expects roughly 38,100 openings a year, almost all from replacement need. Read the median carefully. Total cash compensation for a producing registered rep is heavily commission- and bonus-driven, so the BLS wage base understates the top of the field, and the distribution is wide: a rep who builds a book and moves into fee-based or advisory work pulls away from the median quickly. For that reason we also show the Financial and Investment Analysts series (SOC 13-2051), because many Series 7 holders settle into research, trading-support or advisory roles where the May 2024 median is $101,350. The honest framing is that the Series 7 is a licence gate, not the job itself: it is what makes the BLS sales-agent (or analyst) wage accessible at a member firm, and it expires the moment you leave the industry, so the wage you are benchmarking is the role, earned only while the licence is active and sponsored.',
    rows: [
      { label: 'Median annual wage, securities/commodities/financial-services sales agents', value: '$78,140', note: 'BLS Occupational Outlook Handbook, May 2024 ($37.57/hr)' },
      { label: 'Employment, 2024', value: '514,500 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~38,100 per year', note: 'BLS OOH Job Outlook, 2024-34 — mostly replacement' },
      { label: 'Median, financial and investment analysts (a common adjacent role)', value: '$101,350', note: 'BLS OOH Financial Analysts, SOC 13-2051, May 2024' }
    ],
    growth: '3% projected change 2024-34 (about as fast as average); ~38,100 replacement openings a year. The licence only pays while sponsored and active, so benchmark the role, not the exam.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Securities, Commodities, and Financial Services Sales Agents',
      url: 'https://www.bls.gov/ooh/sales/securities-commodities-and-financial-services-sales-agents.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'FINRA publishes no pass rate — but it does publish the passing score: 72% (90 of 125 scored items)',
    summary:
      'FINRA does not release pass-rate statistics for the Series 7 or for any of its qualification exams, and it never has. Unlike some vendors that publish a first-time rate, FINRA treats that as firm- and candidate-specific and keeps it internal, so any percentage you see circulating online is an estimate, not a published figure, and we will not repeat one. What FINRA does publish is the cut score, and that is more useful than a rumoured rate. The Series 7 is 125 scored questions (plus 5 unscored pretest items, for 130 delivered) and you need 72 percent of the scored items — 90 correct — to pass. The 72 percent is not "get 72 percent on your practice bank" in a clean sense, because the 5 unscored pretest questions are mixed in and do not count, so a 90/125 raw score is what matters; on a full 130-question form, 90 is about 69 percent, which is why candidates who aim for "72 percent of everything" are slightly off. Two policies matter more than a rate. First, eligibility: you cannot sit the Series 7 without a FINRA member firm sponsoring you through Form U4, and the SIE is a co-requisite — you must pass the SIE (or hold a comparable qualification) to earn the Series 7. Second, retakes: under FINRA Rule 1210.06, after a first or second failure you wait 30 calendar days before the next attempt, and after a third or subsequent failure within two years you wait 180 days. FINRA has proposed shortening the wait for its own exams, but the operative rule as of this review is still 30/180, and you are re-paying the full $395 each time, so a failed first attempt is expensive.',
    source: {
      label: 'FINRA — Series 7 Exam and Qualification Exams',
      url: 'https://www.finra.org/registration-exams-ce/qualification-exams/series7'
    },
    caveat:
      'No pass rate is published by FINRA, by Prometric, or by any accrediting body for the Series 7. We have deliberately left the pass-rate table empty. What is published and verifiable is the 72% cut score (90 of 125 scored), the eligibility/sponsorship rule, and the 30/180 retake schedule, which the narrative above covers instead.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The single fact that reshapes how you should study for the Series 7 is the weighting: of the 125 scored questions, 73 percent fall in Function 3 — Opens, Transfers, and Closes Accounts; Processes, Maintains, and Services Customer Accounts. Most candidates come from a products, options or sales background and over-invest in Function 1 (Seeks Business, 7 percent) and Function 4 (Solicits, Reviews and Places Orders, 11 percent), then get surprised that the exam is really an operations-and-account-maintenance test. Function 2 (Evaluates Customers\' Financial Profiles and Investment Objectives, 9 percent) feeds directly into the suitability questions that sit inside Function 3, so the practical split is roughly: 90 questions on accounts, suitability and servicing, and 35 on business development and order handling combined. The plan below runs ten weeks at 8-16 hours a week and assumes you are studying while sponsored, because you cannot schedule the exam otherwise. If you are not yet sponsored by a member firm, the first task is not studying — it is getting hired or affiliated, since the Form U4 is what opens your 120-day exam window. Validate your knowledge against the four published functions, not against a question bank\'s topic tags, because banks vary in how they bucket the operations content.',
    totalHours: '80-160 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Eligibility, SIE co-requisite, and the exam framework',
        tasks: [
          'Confirm your firm has filed Form U4 and that your SIE is passed or scheduled — the Series 7 will not be awarded without both',
          'Memorise the four functions and their weights: F1 7%, F2 9%, F3 73%, F4 11%',
          'Understand the exam format: 125 scored + 5 unscored pretest = 130 questions, 225 minutes, 72% (90/125) to pass',
          'Build a topic map that puts 90 of your 125 study questions under Function 3 from day one'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Weeks 2-4',
        focus: 'Function 3 — Accounts, suitability and servicing (73%)',
        tasks: [
          'Account opening and types: cash vs margin, TOD, joint, corporate, trust, and the documentation each requires',
          'Suitability: the customer profile, KYC, and the orders-tests — quantitative, qualitative and the firm\'s obligation to document',
          'Transfers and disbursements: ACATS, the 30-day transfer process, and frozen/blocked accounts',
          'Margin: Regulation T initial 50%, maintenance, and the math for long and short positions — drill the calculations cold'
        ],
        hours: '12-16 hrs/week'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Function 2 — Customer profiles and investment objectives',
        tasks: [
          'Risk tolerance, time horizon, liquidity needs and tax status as inputs to recommendations',
          'Investment objectives: growth, income, preservation of capital, speculation',
          'The intersection with Function 3: how a documented profile defends a suitability determination',
          'Senior and vulnerable-investor protections and the paperwork they trigger'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Weeks 7-8',
        focus: 'Function 4 — Orders and Function 1 — Business solicitation',
        tasks: [
          'Order types: market, limit, stop, stop-limit, day vs GTC, and opening vs closing transactions',
          'Options basics at the rep level: long/short calls and puts, covered vs uncovered, and suitability constraints',
          'Communications with the public: retail communications, correspondence, and the principal-approval rules',
          'MSRB and municipal considerations that appear as a minority of items'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Weeks 9-10',
        focus: 'Timed full exams and gap closing',
        tasks: [
          'Six to eight full 225-minute practice exams, weighted so the bulk hits Function 3',
          'Re-lab every miss against the four functions rather than re-reading it',
          'Drill the margin and suitability math until the calculations are automatic under a clock',
          'One quiet day before the exam; the 225-minute clock rewards pacing, not cramming'
        ],
        hours: '12-16 hrs/week'
      }
    ],
    variants: [
      { label: 'Studying inside a member firm training program', detail: 'Six to eight weeks. Your firm provides its own curriculum and a sponsored exam window; use this plan to find the 73% Function-3 gap your vendor material under-covers, which is usually operations and margin math rather than products.' },
      { label: 'Career changer with no securities background', detail: 'Fourteen to sixteen weeks at 8 hrs/week. Add two weeks before Week 2 purely on the language of accounts, orders and margin, because the exam assumes you already think in those terms; the math is learnable, the vocabulary is not optional.' },
      { label: 'Already SIE-ready and operations-experienced', detail: 'Five to six weeks. You likely live in Function 3 already; spend the recovered time on Function 4 order/options detail and on the communications-with-the-public rules, which trip up experienced ops staff more than the account questions do.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The Series 7 rewards candidates who treat it as a 73-percent operations exam rather than a products exam. The most common failure mode is studying the wrong 70 percent of the blueprint: people who know options and mutual funds inside out, then lose the licence on account-transfer timelines and margin maintenance math they never drilled. Weight your effort at the exam\'s weight.',
    items: [
      {
        title: 'Build your study map around Function 3',
        detail: 'Seventy-three percent of the scored items sit in Function 3. That is roughly 91 of 125 questions on opening, transferring, closing, maintaining and servicing accounts and on suitability. If your question bank is giving you equal-length quizzes on every topic, re-weight it yourself so the majority of your reps are account- and suitability-driven, and track your misses by function number, not by vendor tag.'
      },
      {
        title: 'Drill the margin and suitability math cold',
        detail: 'Regulation T, initial and maintenance margin, long and short equity, and the quantitative suitability test are the highest-density source of cheap, repeatable points — and the highest-density source of avoidable failures. These are calculations, not concepts, so they respond to repetition. Write out every formula on one page, then do twenty problems a day until the arithmetic is automatic under a clock.'
      },
      {
        title: 'Respect the 5 unscored pretest questions',
        detail: 'The form delivers 130 questions but only 125 count, and you cannot tell the pretest items apart. Do not try to game the count; answer every item as if it scores. Candidates who obsess over "which are the throwaways" waste attention they should spend on the 90 they need for the 72% cut.'
      },
      {
        title: 'Lock in eligibility before you study the hard parts',
        detail: 'The Series 7 is unavailable without a member-firm Form U4 sponsorship and a passed SIE. Confirm both are in place before investing 100+ hours, because no amount of preparation lets you sit the exam unsponsored, and the 120-day window from registration is real.'
      },
      {
        title: 'Pace the 225-minute clock deliberately',
        detail: 'You have 225 minutes for 130 items — about 1:40 per question, with margin to spare. Move through the multiple-choice at a steady tempo, flag what you are unsure of, and reserve time for the longest word-problem items, which concentrate in suitability and margin. Running out of clock on a 73%-operations exam is almost always a pacing problem, not a knowledge problem.'
      },
      {
        title: 'Use the diagnostic report if you fail',
        detail: 'FINRA gives a pass/fail on screen with a section-level breakdown by function. A failed attempt is expensive given the $395 re-sit and the 30-day wait, but the function breakdown tells you precisely where to aim. Treat it as a study plan, not a verdict, and re-sit on corrected knowledge rather than repeating the same prep.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The decisive buying decision for the Series 7 is sponsorship, not course choice: you cannot take the exam without a member firm\'s Form U4, and most firms hand you a paid training vendor (Kaplan, STC, Pass Perfect or similar) as part of affiliation. If you are self-funding, the market is mature and the differentiators are question-bank quality and how well the vendor mirrors FINRA\'s four-function weighting.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'FINRA Series 7 page and content outline', values: ['Free', 'Web + PDF', 'The only authoritative source for functions, weights, time and cut score'], },
      { label: 'Firm-provided training (Kaplan / STC / Pass Perfect)', values: ['Typically paid by your member firm', 'eLearning, books, question bank', 'Sponsored candidates — use what your firm bought; it is mapped to the outline'] },
      { label: 'Exam fee', values: ['$395 (FINRA Section 4 fee)', 'Paid via your firm at registration', 'Required; you re-pay in full on every retake'] },
      { label: 'Knopman Marks or similar boutique Q-bank', values: ['~$200-400 for a full course', 'Video + adaptive Q-bank', 'Candidates who want a second question style beyond the firm default'] },
      { label: 'Solomon Exam Prep (Series 7)', values: ['~$100-250 for book + Q-bank', 'Print + digital', 'Self-sponsored study of the operations and suitability content'] },
      { label: 'Your own one-page formula sheet (margin, Reg T, suitability)', values: ['Free', 'Self-made', 'The single highest-leverage artefact for the math-heavy Function 3 items'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax; the $395 exam fee is set by FINRA Section 4 and re-paid on every attempt. Course prices vary by promotion and by whether your firm covers them. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'Most Series 7 failures are not knowledge failures — they are weighting and eligibility failures. Candidates study the topics they already know from a sales or products background, neglect the 73-percent operations core, or discover too late that they cannot sit the exam at all without a sponsor.',
    items: [
      {
        mistake: 'Studying products and options instead of the Function 3 core',
        fix: 'Function 3 is 73 percent of the scored items. Re-weight your prep so the majority of practice questions are account opening, transfers, servicing, suitability and margin. Options and products are real but they are a minority; a candidate who is brilliant on options and weak on ACATS and maintenance margin will fail.'
      },
      {
        mistake: 'Assuming you can self-register for the Series 7',
        fix: 'The Series 7 requires a FINRA member firm to file Form U4 and sponsor you; there is no self-sponsored path. If you are between firms, you cannot sit the exam, and the licence goes inactive if you leave the industry. Confirm sponsorship and the SIE co-requisite are in place before committing study hours.'
      },
      {
        mistake: 'Treating the SIE as the same exam',
        fix: 'The SIE is a co-requisite, not a substitute. It covers foundational securities knowledge with no sponsorship requirement, while the Series 7 is the firm-specific representative licence. You need both; passing the SIE alone gives you nothing to sell or handle. Schedule them so the SIE is done before or alongside Series 7 prep, not assumed.'
      },
      {
        mistake: 'Under-drilling the margin and suitability math',
        fix: 'Regulation T, initial and maintenance margin, and quantitative suitability appear as scored calculations worth more than any single fact. Practice them as problems, not as read-alouds. The candidates who "understand margin" but cannot compute maintenance on a short position are the ones who miss the 72% cut by a few questions.'
      },
      {
        mistake: 'Mispacing the 225-minute exam',
        fix: 'With 130 items and 225 minutes you have ample time, so the failure mode is the opposite of a vendor timed test: candidates dawdle on early word problems and then rush the back third. Set a tempo of well under two minutes per item, flag the long ones, and bank time for the suitability and margin scenarios.'
      },
      {
        mistake: 'Forgetting the licence lapses when you leave the firm',
        fix: 'The Series 7 is tied to industry affiliation. It becomes inactive if you leave a member firm and must generally be re-activated (or, after two years, re-taken) if you return. Plan your study as the first step of a continuous registration, not a one-off certificate you can bank indefinitely.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The Series 7 is a 130-question, 225-minute multiple-choice exam: 125 scored items plus 5 unscored pretest questions that are indistinguishable on screen. You need 72 percent of the scored items — 90 correct — to pass. Every question is four-option multiple choice; there are no performance-based or essay items, but the stems are frequently long scenario problems, especially in suitability and margin, where a short question hides a calculation. The four published functions are F1 Seeks Business (7%, ~9 questions), F2 Evaluates Customers\' Financial Profiles and Investment Objectives (9%, ~11), F3 Opens, Transfers and Closes Accounts and Processes, Maintains and Services Customer Accounts (73%, ~91), and F4 Solicits, Reviews and Places Customer Orders (11%, ~14). Notice that F3 carries nearly three-quarters of the paper; the product and order-handling material that candidates enjoy studying is concentrated in F1 and F4, which together are only 18 percent. Because the pretest items are mixed in, your raw score is computed on 125 not 130, so aim for 90 correct scored items rather than a 72-percent-of-everything heuristic. The practical pacing rule is to clear the straightforward definitions quickly and reserve the clock for the scenario-based suitability and margin items, which is where the F3 weight actually lives.',
    types: [
      { name: 'Straightforward knowledge items', share: 'A sizeable minority', detail: 'Definitions, registration facts and rule recall — account types, communications rules, MSRB basics. Fast to answer; the floor of your score.' },
      { name: 'Suitability scenario items', share: 'Concentrated in Function 3', detail: 'A customer profile is given and you must select the appropriate recommendation or identify the violation. These reward documented KYC and the orders-tests rather than product trivia.' },
      { name: 'Calculation items (margin, Reg T, returns)', share: 'Scattered but high-value', detail: 'Long and short margin, initial vs maintenance, and quantitative suitability. Pure repetition payoff; the math is fixed and learnable.' },
      { name: 'Order and account-operation items', share: 'The bulk of Function 3 and 4', detail: 'Order types, transfers (ACATS), disbursements, account documentation and servicing procedures — the operational core that decides most passes.' }
    ],
    samples: [
      {
        prompt: 'A customer\'s margin account shows the following: market value $20,000, debit balance $8,000, and Regulation T initial requirement of 50%. What is the customer\'s equity, and is the account above or below the initial requirement?',
        options: [
          'A. Equity $12,000; account is above the initial requirement',
          'B. Equity $8,000; account is below the initial requirement',
          'C. Equity $12,000; account is below the initial requirement',
          'D. Equity $28,000; account is above the initial requirement'
        ],
        answer: 'A',
        explanation: 'Equity equals market value minus the debit balance: $20,000 − $8,000 = $12,000. The initial Regulation T requirement is 50% of market value, or $10,000 of equity; the customer\'s $12,000 equity exceeds it, so the account is above the initial requirement. B miscomputes equity as the debit; C computes equity correctly but wrongly calls it below requirement; D adds rather than subtracts the debit. This is the kind of Function 3 calculation that appears repeatedly and is worth drilling cold.'
      },
      {
        prompt: 'Under FINRA rules, which statement about the Securities Industry Essentials (SIE) exam and the Series 7 is correct?',
        options: [
          'A. The SIE alone qualifies an individual to solicit securities business for a member firm',
          'B. The Series 7 can be taken and awarded without the SIE',
          'C. The SIE is a co-requisite of the Series 7; both are required to be registered as a general securities representative',
          'D. The SIE requires a member-firm sponsorship, while the Series 7 does not'
        ],
        answer: 'C',
        explanation: 'The SIE is a co-requisite of the Series 7: passing both (with a firm\'s Form U4 sponsorship) is what registers someone as a General Securities Representative. A is wrong because the SIE alone grants no representative authority. B is wrong because the Series 7 is not awarded without the SIE. D inverts reality: the SIE has no sponsorship requirement, while the Series 7 requires member-firm sponsorship.'
      },
      {
        prompt: 'A customer instructs a registered representative to transfer 100 shares of a publicly traded stock from one brokerage firm to another. Which process and approximate timeline apply?',
        options: [
          'A. A wire transfer completed within one business day',
          'B. An ACATS transfer, generally completed within approximately 30 days',
          'C. A physical certificate re-issue completed within 5 business days',
          'D. An internal journal entry completed the same day'
        ],
        answer: 'B',
        explanation: 'Customer-initiated transfers of securities between broker-dealers are handled through ACATS (Automated Customer Account Transfer Service) and are generally completed within about 30 days under the standard timeline. A is wrong because securities positions are not moved by wire (that moves cash). C describes a largely obsolete certificate process and an incorrect timeline. D applies only to transfers within the same firm, not between firms. This is core Function 3 account-servicing content.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The Series 7 is delivered at Prometric test centres; FINRA qualification exams are not offered by remote proctoring, so plan to travel to a centre. Check-in is strict and tied to your Form U4 registration, so the single most common cause of a lost seat is a name mismatch between your ID and your CRD record. Two things work in your favour. First, you get your result immediately: pass/fail appears on screen when you finish, with a section-level diagnostic by function that turns a failure into an actionable plan. Second, the 225-minute clock is generous for 130 items, so a calm, steady tempo beats last-minute cramming. The thing that goes wrong most often has nothing to do with securities: your government photo ID must match your FINRA registration exactly, and a mismatch cannot be fixed at the desk. Confirm the spelling on your CRD record the week before.',
    bring: [
      'Two forms of identification, both unexpired, with the name matching your FINRA/Form U4 registration exactly',
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
      { time: 'The week before', detail: 'Confirm the name on your CRD/Form U4 matches your photo ID exactly. Mismatches are the most common cause of a lost seat and cannot be fixed at the desk.' },
      { time: '24 hours before', detail: 'Confirm the Prometric centre address and travel time; your 120-day exam window from registration is what bounds scheduling.' },
      { time: '30 minutes before', detail: 'Arrive for check-in: ID verification, digital signature, photograph and, at some centres, a palm or finger scan. You are seated and issued a whiteboard.' },
      { time: 'First 2 minutes at the seat', detail: 'Write your margin and Reg T formulas on the whiteboard. Two minutes here buys back far more during the Function 3 calculations.' },
      { time: '0-180 minutes', detail: 'Work the straightforward definitions at a brisk tempo, flag the long suitability and margin scenarios, and reserve the back of the clock for them. You have ~1:40 per item with margin to spare.' },
      { time: '180-225 minutes', detail: 'Return to flagged items and the scenario problems. Submit rather than letting the clock expire; there is no penalty for an early, confident finish.' }
    ],
    rules: [
      'Passing score is 72% of the 125 scored items — 90 correct; 5 additional unscored pretest questions are mixed in and do not count.',
      'Two forms of ID are required, one government-issued with photo, names matching your FINRA registration exactly.',
      'Closed book: an electronic calculator and a whiteboard are provided; you may not bring your own.',
      'FINRA qualification exams are delivered at Prometric centres; remote proctoring is not offered — confirm your centre when you schedule.',
      'Retake schedule under FINRA Rule 1210.06: 30 days after a first or second failure, 180 days after a third or subsequent failure within two years; each attempt is paid in full.',
      'Result and a function-level diagnostic appear on screen immediately upon submission.'
    ],
    afterwards:
      'Your pass or fail and your function-level diagnostic appear on screen the instant you submit. On a pass, your qualification is recorded in CRD and your firm completes the registration so you can act as a General Securities Representative — the licence is active only while you are affiliated with a member firm and goes inactive if you leave, with re-activation (or, after two years, a re-take) required to return. You also enter FINRA\'s continuing-education cycle: the Firm Element annually and the Regulatory Element every three years, or the registration lapses. On a fail, do not immediately pay the $395 and re-sit on the same knowledge — FINRA\'s function breakdown tells you exactly where you fell short, and the 30-day wait is a study window, not a penalty. Target the weak function (almost always Function 3), re-lab your missed practice items against the four functions, and return with corrected prep; a failed first attempt that becomes a pass on the second is far cheaper than a string of rushed re-sits.'
  }
};

export default data;
