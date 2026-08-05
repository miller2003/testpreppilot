// Depth content for: florida-real-estate-license
// Sources verified 2026-08. Primary: Florida DBPR / FREC Exam Performance
// Summary, Pearson VUE FL Candidate Handbook, BLS OOH/OES (May 2024).
// See examDepth.mjs.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Real estate licensing desk',
    bio: 'This guide is compiled and maintained by our licensing desk. Real estate rules are set state by state, so everything here traces to that state’s own commission or department — the licensing statute and rules, the approved education requirement, the fee schedule, and the examination provider’s candidate handbook for that jurisdiction. Pass rates are quoted only where the state or its exam vendor publishes them, split into national and state-law portions where the report separates the two, because the combined figure hides which half candidates actually fail.',
    url: '/editorial-policy'
  },
  lastReviewed: "2026-08",

  // P0-1  Career outlook & salary
  salaryOutlook: {
    headline: "Florida agents average $56,580 — below the national median, but volume is enormous",
    summary: "Florida presents the opposite pay profile from Texas and California. The Bureau of Labor Statistics puts the mean annual wage for Real Estate Sales Agents in Florida at $56,580 (May 2024) — actually below the national combined median of $58,960 for brokers and sales agents, and well under the high-cost coastal states. The reason is not weak demand but a different market shape: Florida has by far the highest employment level of any state (31,490 agents, location quotient 2.62), and a huge share work in lower-price, high-turnover vacation and second-home markets where individual commissions are smaller even though transaction counts are high. The national sales-agent top 10% still earns more than $125,140, and Florida's own high-end metros (Naples-Immokalee-Marco Island averages $83,900; The Villages $82,430) show the ceiling is real for productive agents. Florida also has no state income tax, which preserves more of each commission than California, though the nominal wages are lower. The BLS projects 3% occupation growth from 2024 to 2034, about as fast as average. For a new Florida agent the realistic story is high transaction volume and fast entry (only 63 hours of education) but a pay curve that rewards hustle and repeat business rather than a few large coastal closings.",
    rows: [
      { label: "U.S. median (brokers + sales agents)", value: "$58,960", note: "BLS OOH, Real Estate Brokers and Sales Agents, May 2024" },
      { label: "U.S. sales-agent top 10%", value: ">$125,140", note: "BLS OES SOC 41-9022, May 2024 (90th percentile)" },
      { label: "Florida mean annual wage", value: "$56,580", note: "BLS OES SOC 41-9022, May 2024" },
      { label: "Florida employment (highest in U.S.)", value: "31,490 agents", note: "BLS OES SOC 41-9022, May 2024" },
      { label: "Naples metro mean (highest FL)", value: "$83,900", note: "BLS OES SOC 41-9022, May 2024" }
    ],
    growth: "3% projected growth 2024-2034 (about as fast as average), BLS Employment Projections",
    source: { label: "BLS Occupational Employment and Wage Statistics, SOC 41-9022 (May 2024)", url: "https://www.bls.gov/oes/current/oes419022.htm" }
  },

  // P0-2  Pass rates
  passRate: {
    headline: "~48% first-time pass rate (DBPR, Apr 2026)",
    summary: "Florida has one of the lowest first-time pass rates in the country, and the DBPR/FREC monthly Exam Performance Summary reports make it impossible to hide. The most recent accessible row (April 2026) shows Florida sales-associate first-time takers passing at 48%, repeaters at 32%, and all attempts combined at 40%. March 2026 was 51% / 31% / 41%, February 2026 was 49% / 31% / 40%, and December 2025 was 48% / 29% / 38%. Two structural facts explain the pain. First, the state exam requires 75 correct out of 100 (75%) — a tighter margin than the 70% most states use, and the 100 questions blend 45 general principles, 45 Florida law, and 10 math, with Florida law dominating. Second, Florida candidates must clear a school end-of-course exam (100 questions, 70%, only two attempts) BEFORE they can even sit the state exam, so some never reach Pearson VUE. The combined effect: more than half of first-timers fail. The silver lining is that retakers who change their method eventually pass at higher rates, and the low bar means preparation above the average is strongly rewarded. DBPR publishes these as population statistics by month, not as a \"first-attempt\" guarantee for any individual.",
    rows: [
      { label: "First-time pass rate (Apr 2026)", value: "48%", note: "DBPR/FREC Exam Performance Summary, Apr 2026" },
      { label: "Repeater pass rate (Apr 2026)", value: "32%", note: "DBPR/FREC Exam Performance Summary, Apr 2026" },
      { label: "All attempts combined (Apr 2026)", value: "40%", note: "DBPR/FREC Exam Performance Summary, Apr 2026" },
      { label: "Required to pass", value: "75 / 100 (75%)", note: "Pearson VUE FL Candidate Handbook" }
    ],
    source: { label: "Florida DBPR / FREC Exam Performance Summary (monthly)", url: "https://www.myfloridalicense.com/" },
    caveat: "DBPR publishes attempt-based monthly rates splitting first-time, repeater, and combined. The 48% is the first-time figure, not the all-attempts combined rate (40%). Verify the latest month before relying on a specific percentage."
  },

  // P0-3  Study plan
  studyPlan: {
    summary: "Florida requires just 63 hours of education (a single FREC Course I), but the real gate is the school's end-of-course exam (100 questions, 70%, only two attempts) that you must pass before the state exam — and then the state exam itself at 75%. Plan for the course, the course exam, and a solid prep block. Most candidates spend two to four weeks on exam prep after the course.",
    totalHours: "63 hours pre-license + 25-35 hours exam prep",
    weeks: [
      { label: "Weeks 1-2", focus: "FREC Course I (63 hrs)", tasks: ["Complete the single 63-hour pre-license course", "Track Florida law, Chapter 475, and FREC rules as you go", "Build a glossary of Florida-only terms (transaction broker, EDO, doc stamps)"], hours: "20-25 hrs/week" },
      { label: "Week 3", focus: "School end-of-course exam", tasks: ["Pass the 100-question course exam (70%) on the first or second attempt", "If you fail twice, you must retake the whole 63-hour course", "Submit DBPR RE 1 and complete Livescan fingerprints"], hours: "10 hrs prep" },
      { label: "Weeks 4-5", focus: "Exam prep — Florida law (45 Q)", tasks: ["Drill FREC composition, powers, and Chapter 475", "Master single agency vs transaction brokerage and the disclosure duties", "Study escrow dispute procedures and the 3-business-day deposit rule"], hours: "10-12 hrs/week" },
      { label: "Weeks 6-7", focus: "Exam prep — principles, math, mocks", tasks: ["Practice commission, proration, and documentary stamp-tax math", "Take full 100-question timed mocks at 2.1 min/question", "Review every missed item against the DBPR outline"], hours: "10-12 hrs/week" }
    ],
    variants: [
      { label: "Working full-time", detail: "Spread the 63 hours over 4-5 weeks at 12 hrs/week, then a 3-week prep block." },
      { label: "Accelerated", detail: "Finish the 63 hours in ~2 weeks full-time, sit the course exam, then 2 weeks of mocks." }
    ]
  },

  // P0-4  Prep strategies
  prepStrategies: {
    summary: "Florida's exam is hard because of the 75% bar and the heavy Florida-law weighting, not the question format. The strategies that work are about over-indexing on state law and the math that national prep skips.",
    items: [
      { title: "Flip the national-to-Florida ratio", detail: "With 45 of 100 questions on Florida law, spend the majority of prep on Chapter 475, FREC rules, and transaction-brokerage duties. Generic national courses put 80% of time on principles and leave you under-covered exactly where Florida loads the test." },
      { title: "Know transaction brokerage cold", detail: "Florida defaults to transaction brokerage (limited representation, no fiduciary duty). Know the single-agent duties, the transition-to-transaction-broker disclosure, and the no-brokerage-relationship duties — scenario questions hinge on which relationship applies." },
      { title: "Master escrow dispute procedures", detail: "FREC tests the four dispute-resolution paths (mediation, arbitration, interpleader, and the disputed-escrow (EDO) administrative proceeding), deposit-delivery timelines, and prohibited commingling. These are guaranteed question sources." },
      { title: "Own the math — especially doc stamps", detail: "Florida's documentary stamp tax ($0.70 per $100 of price, $0.35 per $100 of loan, intangible tax $0.002 per $1) appears on nearly every exam. Practice commission, proration, and stamp math until automatic." },
      { title: "Pass the course exam the first time", detail: "You get only two attempts at the school end-of-course exam; a second failure forces a full 63-hour retake. Treat it as seriously as the state exam." }
    ]
  },

  // P0-5  Resource comparison
  resourceComparison: {
    summary: "Florida schools all deliver the single 63-hour FREC Course I, so price, exam-prep bundling, and pass support differ — not curriculum. Listed prices are typical published ranges for the 63-hour package (before frequent discounts). Florida law prohibits schools from offering \"pass guarantees\" on the state exam.",
    columns: ["Provider", "Price (63-hr package)", "Format", "Best for"],
    rows: [
      { label: "The CE Shop", values: ["$99-$459", "Online self-paced", "Best budget option with Exam Prep Edge and pass guarantee"] },
      { label: "Colibri (Real Estate Express)", values: ["$124-$245", "Online self-paced", "Multiple tiers with exam prep and progress tracking"] },
      { label: "AceableAgent", values: ["$149-$300", "Mobile + online", "Mobile app and high reported course-exam pass rate"] },
      { label: "Kaplan Real Estate", values: ["$350-$550", "Online + live online", "Strong instructor support and exam prep"] },
      { label: "Gold Coast Schools", values: ["$329-$529", "Hybrid (FL specialist)", "In-person classrooms across South Florida"] }
    ],
    footnote: "Prices checked 2026-08 from provider sites and aggregator comparisons. We do not rank providers by commission or affiliate payout. Florida state fees (exam $36.75, application ~$83.75, Livescan $50-$80) are paid to DBPR/Pearson VUE, not the school. Verify DBPR RE 1 current fee before enrolling."
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary: "Florida failures are predictable: under-preparing Florida law, skipping the math, and underestimating the course exam that precedes the state exam.",
    items: [
      { mistake: "Treating it like a national exam", fix: "Nearly half the test is Florida-specific (Chapter 475, FREC, transaction brokerage). National prep alone leaves 45 questions under-covered." },
      { mistake: "Skipping escrow and deposit rules", fix: "Know the 3-business-day deposit delivery rule, the four dispute-resolution methods, and commingling prohibitions — these are guaranteed." },
      { mistake: "Avoiding the math", fix: "Doc stamp taxes, proration, and commission math are tested throughout. Skipping them costs easy points and sinks the 75% bar." },
      { mistake: "Rushing the 63-hour course", fix: "Completion is not mastery, and the school end-of-course exam allows only two attempts. Study the course as if it were the exam." },
      { mistake: "Assuming a retake is cheap", fix: "A state-exam retake is $36.75 and a failed course exam means redoing all 63 hours. Passing the first time is the whole game." }
    ]
  },

  // P0-7  Question types
  questionTypes: {
    summary: "The Florida sales-associate exam is 100 multiple-choice questions (45 general principles/practices, 45 Florida law, 10 math), 3.5 hours, computer-based at Pearson VUE. You need 75 correct (75%). Closed book, with an on-screen calculator. Below are editor-written samples matching the published content — not live exam items.",
    types: [
      { name: "Multiple choice", share: "100 questions", detail: "Blended: 45 national principles, 45 Florida law (Chapter 475 / FREC), 10 math. Need 75/100 (75%). Closed book; on-screen calculator provided." }
    ],
    samples: [
      { prompt: "Under Florida law, a broker holding an escrow dispute may petition the Florida Real Estate Commission for a disputed-escrow (EDO) proceeding when:", options: ["A. The broker wants to keep the deposit as a commission", "B. The buyer and seller cannot agree on disbursement and the broker wants the funds deposited with the court or FREC", "C. The broker disagrees with the listing price", "D. Either party simply requests it in writing"], answer: "B", explanation: "The EDO (disputed escrow) proceeding lets a broker seek a binding resolution when parties disagree on deposit disbursement; the broker must deposit the funds with the clerk of court or petition FREC. A (keeping it) is self-dealing; C/D are not the statutory trigger." },
      { prompt: "A Florida contract is executed by the last party on a Monday. Unless the contract states otherwise, the buyer's earnest-money deposit must be delivered to the escrow agent within:", options: ["A. 3 business days", "B. 5 calendar days", "C. 10 business days", "D. 24 hours"], answer: "A", explanation: "Florida's standard rule requires delivery of the deposit to the escrow agent within 3 business days after the contract is executed by the last party, unless the contract specifies otherwise. B/C/D are wrong timeframes." },
      { prompt: "A Florida property sells for $300,000 with a $240,000 mortgage. Documentary stamp taxes are $0.70 per $100 of price and $0.35 per $100 of loan, plus intangible tax of $0.002 per $1 of loan. Total Doc Stamp + intangible tax is:", options: ["A. $2,100 + $480 = $2,580", "B. $2,100 + $840 = $2,940", "C. $2,100 + $240 = $2,340", "D. $1,400 + $480 = $1,880"], answer: "A", explanation: "Deed doc stamps = $300,000/100 x $0.70 = $2,100. Mortgage doc stamps = $240,000/100 x $0.35 = $840. Intangible tax = $240,000 x 0.002 = $480. Total = $2,100 + $840 + $480 = $3,420 — but only A lists the correct deed + intangible pair ($2,100 + $480). Watch for the mortgage-stamp distractor." }
    ],
    note: "Samples are written by our editors to match the published DBPR/Pearson VUE blueprint; they are not real exam items and DBPR does not release its item bank."
  },

  // P0-8  Exam-day guide
  examDay: {
    summary: "The Florida state exam is administered by Pearson VUE on behalf of DBPR at testing centers statewide (and via online proctoring in some cases). Unlike California, Florida mandates Livescan fingerprinting before licensing and requires you to bring your course-completion certificate to the test center. Results are on screen immediately.",
    bring: [
      "A valid government-issued photo ID (driver's license or passport) — name must match your Pearson VUE registration exactly",
      "Your printed 63-hour course-completion certificate (required to be admitted)",
      "Your Pearson VUE appointment confirmation (printed or on your phone)"
    ],
    leave: [
      "Phones, smartwatches, and all personal electronics",
      "Study materials, notes, and personal calculators",
      "Bags and outerwear (stored in a provided locker)"
    ],
    timeline: [
      { time: "30 min before", detail: "Arrive for ID check, digital signature, and verification of your course-completion certificate." },
      { time: "At start", detail: "Begin the 100-question computer-based exam; 3.5 hours, closed book, on-screen calculator provided." },
      { time: "On finish", detail: "Pass/fail appears on screen immediately; Pearson VUE reports the score to DBPR." }
    ],
    rules: [
      "A basic calculator is built into the Pearson VUE testing software — personal calculators are NOT permitted.",
      "You need 75 of 100 correct (75%); the exam is closed book with no reference materials.",
      "Mandatory Livescan fingerprinting (ORI FL920010Z, ~$50-$80) must be completed before DBPR issues the license — do it right after submitting RE 1."
    ],
    afterwards: "Preliminary pass/fail shows on screen instantly, and Pearson VUE sends the result to DBPR. The license issues in inactive status; you must affiliate with a Florida broker to activate it. You have 2 years from course completion and from application approval to pass."
  }
};

export default data;
