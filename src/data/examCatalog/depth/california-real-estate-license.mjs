// Depth content for: california-real-estate-license
// Sources verified 2026-08. Primary: California DRE (dre.ca.gov), DRE RE-149
// Comparative Production Statistics, BLS OOH/OES (May 2024). See examDepth.mjs.
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
    headline: "California agents average $77,430 — but the median is far lower at $66,050",
    summary: "California is a tale of two pay scales, and the DRE candidate needs to understand both. The Bureau of Labor Statistics reports a mean annual wage for Real Estate Sales Agents in California of $77,430 (May 2024) — among the highest in the nation — but the median is $66,050, and the spread between metro areas is huge. Coastal and luxury markets pull the mean up sharply: Oxnard-Thousand Oaks-Ventura averages $120,010, Napa $92,270, and San Diego $86,630, while the Inland Empire (Riverside-San Bernardino) sits near $55,390. That gap exists because California pay is almost entirely commission-based and concentrated in high-price coastal counties, so a strong year in San Francisco or Orange County can dwarf a steady year inland. The national median for brokers and sales agents combined is $58,960, and the top 10% of U.S. sales agents earn more than $125,140 — a band California's top producers clear comfortably in the priciest metros. Notably, California agents do not need a broker sponsor to hold the license (though they must hang it with a responsible broker to practice), and there is no state income-tax-free advantage like Texas offers; California's cost of living is high, which erodes real purchasing power despite the high nominal wage. The BLS projects 3% growth for the occupation from 2024 to 2034, about as fast as average.",
    rows: [
      { label: "U.S. median (brokers + sales agents)", value: "$58,960", note: "BLS OOH, Real Estate Brokers and Sales Agents, May 2024" },
      { label: "U.S. sales-agent top 10%", value: ">$125,140", note: "BLS OES SOC 41-9022, May 2024 (90th percentile)" },
      { label: "California mean annual wage", value: "$77,430", note: "BLS OES SOC 41-9022, May 2024" },
      { label: "California median annual wage", value: "$66,050", note: "BLS OES SOC 41-9022, May 2024" },
      { label: "Oxnard metro mean (highest CA)", value: "$120,010", note: "BLS OES SOC 41-9022, May 2024" }
    ],
    growth: "3% projected growth 2024-2034 (about as fast as average), BLS Employment Projections",
    source: { label: "BLS Occupational Employment and Wage Statistics, SOC 41-9022 (May 2024)", url: "https://www.bls.gov/oes/current/oes419022.htm" }
  },

  // P0-2  Pass rates
  passRate: {
    headline: "~53% attempt-based pass rate (DRE RE-149, Dec 2025)",
    summary: "California publishes its exam statistics in the DRE's monthly RE-149 Comparative Production Statistics report, and the headline number is tougher than many states imply. For the salesperson exam, RE-149 shows December 2025 at 53% (attempt-based), November 2025 at 52%, and December 2024 at 50%, with a fiscal-year-to-date figure around 53%. The critical detail is that RE-149 is attempt-based, not candidate-based: every exam administered counts, so a candidate who fails twice and passes on the third contributes two fails and one pass. That means the \"first-try\" experience is a bit better than the raw number suggests for well-prepared candidates, but the exam is still one of the harder state tests — 150 questions in a single combined section with no separate national/state split. First-time candidates who have just finished a strong prep course generally beat the statewide average. The DRE does not separate first-timers from retakers in RE-149, so the reported rate blends both; industry observation is that genuinely first-time, well-prepared candidates land closer to the mid-50s to low-60s. The pass rate also drifts with the market — when volume spikes, more under-prepared candidates sit, and the rate dips into the high-40s.",
    rows: [
      { label: "Salesperson pass rate (Dec 2025)", value: "53%", note: "DRE RE-149 Comparative Production Statistics, Dec 2025" },
      { label: "Salesperson pass rate (Nov 2025)", value: "52%", note: "DRE RE-149, Nov 2025" },
      { label: "Salesperson pass rate (Dec 2024)", value: "50%", note: "DRE RE-149, Dec 2024" },
      { label: "Required to pass", value: "105 / 150 (70%)", note: "DRE Candidate Information Bulletin" }
    ],
    source: { label: "California DRE RE-149 Comparative Production Statistics (monthly)", url: "https://www.dre.ca.gov/" },
    caveat: "RE-149 is attempt-based and does not isolate first-time vs retaker outcomes. The 53% is the statewide attempt-based baseline, not a first-attempt rate."
  },

  // P0-3  Study plan
  studyPlan: {
    summary: "California requires 135 hours of DRE-approved education across three 45-hour courses, and the DRE enforces a minimum 18-day-per-course pacing, so the fastest possible completion is about 54 days. Most candidates then take two to four weeks of exam prep. Because the exam is one combined 150-question section, the plan below blends national principles with California-specific law every week rather than separating them.",
    totalHours: "135 hours qualifying education + 25-35 hours exam prep",
    weeks: [
      { label: "Weeks 1-3", focus: "Real Estate Principles (45 hrs)", tasks: ["Cover ownership, land use, agency, contracts, finance foundations", "Respect the 18-day minimum pacing enforced by the DRE", "Build a California Civil Code / B&P Code citation notebook"], hours: "15 hrs/week" },
      { label: "Weeks 4-6", focus: "Real Estate Practice (45 hrs)", tasks: ["Study listings, escrow, disclosures, and closing mechanics", "Master the Transfer Disclosure Statement (TDS) and natural-hazard disclosures", "Note the implicit-bias and fair-housing role-play added in 2024"], hours: "15 hrs/week" },
      { label: "Weeks 7-9", focus: "Elective (45 hrs)", tasks: ["Pick Finance, Appraisal, Economics, Legal Aspects, or Property Management", "Tie elective content to the seven exam topic areas", "Keep a running list of weak topics"], hours: "15 hrs/week" },
      { label: "Weeks 10-11", focus: "Exam prep — high-weight topics", tasks: ["Drill Practice of Real Estate & Disclosures (25%) and Agency (17%)", "Take timed 150-question mocks at 72 sec/question pace", "Review every missed item against the DRE outline"], hours: "10-12 hrs/week" },
      { label: "Weeks 12-13", focus: "Exam prep — math and final mocks", tasks: ["Practice commission, proration, and capitalization-rate math", "Simulate the full 3-hour exam twice under test conditions", "Memorize disclosure timing rules"], hours: "10-12 hrs/week" }
    ],
    variants: [
      { label: "Working full-time", detail: "Spread the 135 hours over 10-14 weeks at 10 hrs/week, then a 3-week prep block." },
      { label: "Accelerated", detail: "Hit the 18-day-per-course floor to finish education in ~8 weeks, then 2 weeks of mocks." }
    ]
  },

  // P0-4  Prep strategies
  prepStrategies: {
    summary: "The California exam is a single combined section that blends national principles with California-specific statutes and DRE rules — there is no separate state portion to \"save\" you, and the seven weighted topic areas dictate where to spend time.",
    items: [
      { title: "Weight your study to the top two areas", detail: "Practice of Real Estate & Disclosures is 25% and Laws of Agency & Fiduciary Duties is 17% — together nearly half the exam. Master the TDS, natural-hazard disclosure, agency-disclosure timing, and trust-fund handling before anything else." },
      { title: "Know the disclosure timing cold", detail: "California tests WHEN each disclosure is given (agency disclosure before or at the first substantive contact; TDS early in escrow; natural-hazard near receipt). Scenario questions hinge on the timing, not just the existence of the form." },
      { title: "Memorize DRE trust-fund rules", detail: "The handling, depositing, and commingling rules for client trust funds appear constantly. Know the timeframes for depositing trust money and what constitutes prohibited commingling." },
      { title: "Practice at 72 seconds per question", detail: "150 questions in 3 hours is tight. Take full-length timed mocks so pacing — not knowledge — is never the failure. Flag-and-return is your friend on the computer-based test." },
      { title: "Quote the statutes, not just the concept", detail: "California scenario questions are built on Civil Code and Business & Professions Code citations. Prep that ties each rule to its code section prepares you for the exam's phrasing better than generic national material." }
    ]
  },

  // P0-5  Resource comparison
  resourceComparison: {
    summary: "California schools all deliver the same 135 hours of DRE-approved curriculum across three 45-hour courses, so the difference is price, format, and how much exam prep is bundled. Listed prices are typical published starting-to-top ranges for the 135-hour package (before frequent discounts).",
    columns: ["Provider", "Price (135-hr package)", "Format", "Best for"],
    rows: [
      { label: "The CE Shop", values: ["$97-$304", "Online self-paced", "Best budget option with Exam Prep Edge and pass guarantee"] },
      { label: "Colibri (Real Estate Express)", values: ["$120-$448", "Online + livestream", "Progress tracking and Pass or Don't Pay guarantee"] },
      { label: "AceableAgent", values: ["$119-$269", "Mobile + online", "Mobile-first learners with audio lessons"] },
      { label: "Kaplan Real Estate", values: ["$300-$840", "Online + live online", "Structured instructor-led courses"] },
      { label: "RealEstateU", values: ["$99-$650", "Online self-paced", "Lowest entry price, fewer bundled resources"] }
    ],
    footnote: "Prices checked 2026-08 from provider sites and aggregator comparisons. We do not rank providers by commission or affiliate payout. California fees (exam $100, license $350, Live Scan ~$49) are paid to the DRE, not the school — verify current DRE fee schedule before enrolling."
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary: "California failures cluster around underestimating the state-specific law and mismanaging the single combined exam format.",
    items: [
      { mistake: "Studying like a national exam", fix: "There is no separate state section — California law, Civil Code, and DRE rules are woven through all 150 questions. Generic national prep leaves the disclosure and agency scenarios under-covered." },
      { mistake: "Ignoring disclosure timing", fix: "Know precisely when each disclosure is required. Questions are written around the timing rule, and a correct form given at the wrong moment is still a violation." },
      { mistake: "Running out of clock", fix: "At 72 seconds per question, slow readers fail on pacing. Train with full 3-hour timed mocks; use flag-and-return instead of staring." },
      { mistake: "Skipping the math", detail: "Commission, proration, and capitalization-rate problems are guaranteed. Practice them so they are free points, not time sinks." },
      { mistake: "Rushing the 135 hours", fix: "The DRE enforces an 18-day minimum per course and tests depth. Finishing fast but shallowly is the classic path to a sub-50% score." }
    ]
  },

  // P0-7  Question types
  questionTypes: {
    summary: "The California salesperson exam is 150 multiple-choice questions in one combined section, 3 hours (180 minutes), computer-based at DRE exam centers. You need 105 correct (70%). There is no separate national/state split, and the seven topic areas are weighted. Below are editor-written samples mirroring the published outline — not live exam items.",
    types: [
      { name: "Multiple choice (combined)", share: "150 questions", detail: "Single blended section weighting Practice of Real Estate & Disclosures 25%, Agency 17%, Valuation 14%, Ownership 15%, Contracts 12%, Financing 9%, Transfer 8%. Need 105/150 (70%)." }
    ],
    samples: [
      { prompt: "Under California agency law, a listing agent must give the buyer the Agency Disclosure form:", options: ["A. At the first substantive communication with the buyer", "B. Only at close of escrow", "C. Within 3 business days of receiving an offer", "D. Never — it is given only to sellers"], answer: "A", explanation: "California requires the agency-disclosure relationship to be disclosed to a prospective buyer at the first substantive contact (or before, if earlier). B and C confuse it with TDS/offer timing, and D is wrong — both sides receive disclosure." },
      { prompt: "A California broker receives a $10,000 earnest-money check from a client. Under DRE trust-fund rules, the broker must:", options: ["A. Deposit it into the broker's personal account within 3 days", "B. Place it in a neutral escrow depository or the broker's trust account promptly and not commingle it", "C. Hold it uncashed until escrow closes", "D. Return it to the client immediately"], answer: "B", explanation: "Client funds must go into a neutral escrow depository or the broker's separate trust (clients') account and never be commingled with personal or general funds. A is the prohibited commingling; C/D are not the rule." },
      { prompt: "A property sells for $400,000. The commission is 5% and the listing broker and buyer's broker split it equally. How much does the buyer's broker receive?", options: ["A. $5,000", "B. $10,000", "C. $20,000", "D. $2,500"], answer: "B", explanation: "Total commission = $400,000 x 0.05 = $20,000. An equal split gives the buyer's broker $10,000. A is a quarter, C is the full commission, D is an eighth." }
    ],
    note: "Samples are written by our editors to match the published DRE salesperson outline; they are not real exam items and the DRE does not release its item bank."
  },

  // P0-8  Exam-day guide
  examDay: {
    summary: "California is different from Texas and Florida: the exam is administered directly by the DRE at its own state-run exam centers, NOT by Pearson VUE or PSI. You self-schedule through the DRE eLicensing portal. Bring valid ID and your exam authorization; results are on screen immediately.",
    bring: [
      "A valid government-issued photo ID (driver's license or passport) — name must match your DRE authorization exactly",
      "Your DRE exam authorization / notice (printed or on your phone)",
      "Your Live Scan confirmation if you have not yet submitted fingerprints (recommended before the exam to avoid license delays)"
    ],
    leave: [
      "Phones, smartwatches, and all personal electronics",
      "Notes, study materials, and personal calculators",
      "Bags and outerwear (stored in a provided locker)"
    ],
    timeline: [
      { time: "30 min before", detail: "Arrive at the DRE exam center (Sacramento, Oakland, La Palma, Fresno, or San Diego) for ID check and check-in." },
      { time: "At start", detail: "Begin the 150-question computer-based exam; 3 hours, single combined section." },
      { time: "On finish", detail: "Pass/fail appears on screen immediately; a diagnostic report shows weak areas if you fail." }
    ],
    rules: [
      "A basic calculator is provided in the DRE computer-based exam software; personal calculators and electronics are not permitted.",
      "You need 105 of 150 correct (70%) in the single combined section — there is no separate state portion to retake.",
      "If you fail, you must wait 18 days before a retake and pay the $100 re-examination fee again."
    ],
    afterwards: "Results display on screen the moment you finish. After passing, your license is processed once your Live Scan fingerprints clear and the $350 license fee is paid; you have two years from passing to complete licensing."
  }
};

export default data;
