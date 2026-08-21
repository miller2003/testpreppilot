// Depth content for: texas-real-estate-license
// Sources verified 2026-08. Primary: TREC (trec.texas.gov), Pearson VUE Texas
// Real Estate Candidate Handbook, BLS OOH/OES (May 2024). See examDepth.mjs.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Real estate licensing desk',
    bio: 'This guide is compiled and maintained by our licensing desk. Real estate rules are set state by state, so everything here traces to that state’s own commission or department — the licensing statute and rules, the approved education requirement, the fee schedule, and the examination provider’s candidate handbook for that jurisdiction. Pass rates are quoted only where the state or its exam vendor publishes them, split into national and state-law portions where the report separates the two, because the combined figure hides which half candidates actually fail.',
    url: '/editorial-policy'
  },
  lastReviewed: "2026-08",

  // P0-1  Career outlook & salary
  salaryOutlook: {
    headline: "Texas agents earn a mean $77,320 a year — above the $58,960 national median",
    summary: "Texas is one of the most rewarding large markets in the country for new sales agents, and the pay story is genuinely different from what a national average implies. The Bureau of Labor Statistics puts the mean annual wage for Real Estate Sales Agents in Texas at $77,320 (May 2024), roughly a third above the combined national median of $58,960 for brokers and sales agents. Two structural facts drive that premium. First, Texas has no state income tax, so a larger share of every commission check stays in the agent's pocket than in coastal states. Second, the population inflow into Dallas-Fort Worth, Houston, Austin, and San Antonio keeps transaction volume — and therefore commission opportunity — high even when rates wobble. Pay is almost entirely commission-based, so the gap between a slow first year and a strong one is enormous: BLS shows the top 10% of U.S. sales agents earning more than $125,140, while the bottom 10% earn under $31,940. In Texas metros the spread is even wider — Houston agents average $80,830 and Dallas-Fort Worth $79,210. Because Texas requires the heaviest pre-license education in the nation (180 hours) and a sponsoring broker to activate, new agents enter with stronger contract and agency knowledge than peers in lighter-requirement states, which tends to shorten the ramp to the first closing.",
    rows: [
      { label: "U.S. median (brokers + sales agents)", value: "$58,960", note: "BLS OOH, Real Estate Brokers and Sales Agents, May 2024" },
      { label: "U.S. sales-agent top 10%", value: ">$125,140", note: "BLS OES SOC 41-9022, May 2024 (90th percentile)" },
      { label: "Texas mean annual wage", value: "$77,320", note: "BLS OES SOC 41-9022, May 2024" },
      { label: "Texas employment", value: "27,710 agents", note: "BLS OES SOC 41-9022, May 2024" },
      { label: "Houston metro mean", value: "$80,830", note: "BLS OES SOC 41-9022, May 2024" }
    ],
    growth: "3% projected growth 2024-2034 (about as fast as average), BLS Employment Projections",
    source: { label: "BLS Occupational Employment and Wage Statistics, SOC 41-9022 (May 2024)", url: "https://www.bls.gov/oes/current/oes419022.htm" }
  },

  // P0-2  Pass rates
  passRate: {
    headline: "~56% first-time pass rate (TREC, Nov 30 2025)",
    summary: "Texas is unusual and fortunate: it is one of the only states where the regulator publishes exam pass rates broken down by education provider, so candidates can see which schools actually produce first-time passes. TREC's statewide first-time pass rate for the sales-agent exam sits near 56%. One widely cited TREC-derived figure (as of November 30, 2025) shows 16,824 first-time passes out of 29,980 first attempts — about 56%. That number is honest about how demanding the test is: the exam is split into two independently scored sections (national and state), and you must clear 70% on BOTH, so a strong national score cannot rescue a weak state score. The published per-provider numbers matter here more than the statewide average. TREC-reported first-attempt rates ranged from the mid-50s for the largest online schools up to the mid-60s for the top mobile provider, while some classroom brands trailed the average. Candidates who complete their 180 hours through a provider with a strong TREC pass rate and then drill the state section specifically tend to land well above the 56% line. Retakers are not separated in the headline figure, but the independent-section rule means a candidate who fails only one part retakes just that part rather than the whole exam.",
    rows: [
      { label: "Statewide first-time pass rate", value: "~56%", note: "TREC-derived, 16,824 / 29,980 first attempts as of Nov 30 2025" },
      { label: "National section required", value: "56 / 85 (70%)", note: "Pearson VUE TX Candidate Handbook" },
      { label: "State section required", value: "21 / 40 (70%)", note: "Pearson VUE TX Candidate Handbook" },
      { label: "Top provider first-time rate", value: "~66%", note: "TREC Education Provider Exam Passage report, Nov 2025" }
    ],
    source: { label: "TREC Education Provider Exam Passage Reports (via Pearson VUE candidate handbook)", url: "https://www.trec.texas.gov/" },
    caveat: "TREC publishes attempt-based and provider-level rates; it does not publish a separate \"first-timer vs retaker\" combined rate the way Florida DBPR does. Verify the latest monthly figures on TREC's education-standards page before relying on a specific percentage."
  },

  // P0-3  Study plan
  studyPlan: {
    summary: "Texas requires 180 hours of TREC-approved qualifying education across six specific 30-hour courses, and most candidates then spend four to six weeks on dedicated exam prep before sitting with Pearson VUE. The schedule below assumes roughly 12-15 study hours per week, which finishes the coursework in about three months and leaves a full month of prep. Build in the fact that TREC enforces pacing rules (a course cannot be rushed in under about three days), so a calendar-based plan beats a cram.",
    totalHours: "180 hours qualifying education + 30-40 hours exam prep",
    weeks: [
      { label: "Weeks 1-3", focus: "Principles of Real Estate I & II (60 hrs)", tasks: ["Work through property rights, land use, valuation, and fair housing", "Take each course's final exam while the material is fresh", "Start a glossary of Texas-specific terms"], hours: "12-15 hrs/week" },
      { label: "Weeks 4-5", focus: "Law of Agency (30 hrs) + Law of Contracts (30 hrs)", tasks: ["Map fiduciary duties and the Information About Brokerage Services (IABS) rule", "Drill offer, acceptance, consideration, and contingency mechanics", "Note how Texas intermediary relationships differ from dual agency"], hours: "12-15 hrs/week" },
      { label: "Weeks 6", focus: "Promulgated Contract Forms (30 hrs)", tasks: ["Handle the TREC-promulgated forms end to end — this is the single most-tested state topic", "Practice filling out the One to Four Family Residential Contract", "Memorize which forms are mandatory vs optional"], hours: "12-15 hrs/week" },
      { label: "Weeks 7", focus: "Real Estate Finance (30 hrs)", tasks: ["Learn loan types, qualifying ratios, and Texas lending quirks", "Drill commission, proration, and closing math daily", "Flag formulas you keep getting wrong"], hours: "12-15 hrs/week" },
      { label: "Weeks 8-9", focus: "Exam prep — national section (85 Q)", tasks: ["Take timed 85-question national mocks", "Review every missed question with the rationale", "Re-read the TREC Rules & Regulations weighting"], hours: "10-12 hrs/week" },
      { label: "Weeks 10-11", focus: "Exam prep — state section (40 Q) + full mocks", tasks: ["Take full 125-question timed exams (150 + 90 min)", "Over-index study time on promulgated forms and state law", "Simulate test-day ID check and calculator policy"], hours: "10-12 hrs/week" }
    ],
    variants: [
      { label: "Working full-time", detail: "Stretch to 5-6 months at 8 hrs/week; finish coursework first, then a focused 6-week prep block." },
      { label: "Accelerated", detail: "Dedicate 25+ hrs/week to clear all 180 hours in ~7 weeks, then 3 weeks of mock exams." }
    ]
  },

  // P0-4  Prep strategies
  prepStrategies: {
    summary: "The Texas exam is hard in a specific way: two sections scored independently at 70%, with the state section leaning heavily on promulgated contract forms and TREC rules that national prep materials under-cover. The strategies that move the needle are about targeting that state content and respecting the section split.",
    items: [
      { title: "Treat the two sections as two different exams", detail: "You must score 70% on both the 85-question national and the 40-question state portions. A 90% national score does not save a 65% state score. Allocate study time in proportion to your weak section, and when you book Pearson VUE you can even take one section at a time." },
      { title: "Live inside the TREC promulgated forms", detail: "The Promulgated Contract Forms course is the most state-specific and most-missed content. Practice completing the One to Four Family Residential Contract, the Seller's Temporary Residential Lease, and the addenda from memory. The state section tests recognition of which form applies, not just definitions." },
      { title: "Drill Texas agency and intermediary rules", detail: "Texas does not use ordinary dual agency; it uses intermediary relationships with written permission. Know the IABS notice, the Consumer Protection Notice, and when each must be given. These appear constantly in state-section scenario questions." },
      { title: "Make real-estate math automatic", detail: "Commission splits, prorations across closing dates, loan-to-value, and area calculations show up in both sections. Do ten timed math problems a day until the formulas are reflexive — the clock pressure in the national section is real." },
      { title: "Use TREC's published provider pass rates to pick your school", detail: "Texas is rare in publishing first-attempt pass rates by provider. Before enrolling, check TREC's education-standards report; a 10-point gap between providers is the difference between roughly one extra pass in ten." }
    ]
  },

  // P0-5  Resource comparison
  resourceComparison: {
    summary: "All six Texas providers deliver the identical 180 hours of TREC-mandated curriculum, so price and pass rate — not content — are the real differentiators. Listed prices are typical published ranges for the full 180-hour package (before coupons; most schools discount 20-40% regularly).",
    columns: ["Provider", "Price (180-hr package)", "Format", "Best for"],
    rows: [
      { label: "AceableAgent", values: ["$359-$535", "Mobile + online self-paced", "Highest TREC first-attempt pass rate (~66%)"] },
      { label: "The CE Shop", values: ["$360-$818", "Online self-paced", "Best value with built-in exam prep + pass guarantee"] },
      { label: "Colibri (Real Estate Express)", values: ["$317-$599", "Online self-paced", "Mid-tier packages with Pass or Don't Pay guarantee"] },
      { label: "Kaplan Real Estate", values: ["$399-$699", "Online + live online", "Instructor-led structure and live classes"] },
      { label: "Champions School of Real Estate", values: ["$980", "Classroom + live online", "In-person instruction and Texas broker-name recognition"] }
    ],
    footnote: "Prices checked 2026-08 from provider sites and aggregator comparisons. We do not rank providers by commission or affiliate payout; the \"Best for\" notes reflect published TREC pass rates and format. Discounts change weekly — verify at enrollment."
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary: "Most Texas failures trace to a handful of repeatable errors, almost all of them about the state section and the independent scoring rule rather than raw intelligence.",
    items: [
      { mistake: "Assuming one combined score", fix: "The exam is two sections scored separately at 70% each. If you bomb the state portion, your national score is irrelevant — study both deliberately." },
      { mistake: "Under-preparing promulgated contract forms", fix: "This is the most-tested state content and the easiest to skip. Complete and recognize each TREC form cold, including addenda and notices." },
      { mistake: "Treating national math as optional", fix: "Prorations and commission math eat clock time. Practice daily so you do not burn minutes on a calculator during the 150-minute national block." },
      { mistake: "Skipping TREC rules and intermediary law", fix: "Texas intermediary relationships, IABS, and the Consumer Protection Notice are state-section staples. Generic national prep will not cover them." },
      { mistake: "Choosing a school by price alone", fix: "Texas publishes per-provider pass rates. A cheaper course that trails the 56% average can cost you a retake and weeks of delay." }
    ]
  },

  // P0-7  Question types
  questionTypes: {
    summary: "The Texas sales-agent exam is 125 multiple-choice questions split into an 85-question national section (150 minutes) and a 40-question state section (90 minutes). Both are computer-based at Pearson VUE and scored independently at 70%. There are no essays or simulations; the challenge is the breadth and the state-specific weighting, not the question format. Below are editor-written samples that mirror the published content weights — they are not live exam items.",
    types: [
      { name: "Multiple choice — National section", share: "85 questions", detail: "Covers property ownership, valuation, finance, agency, contracts, and fair housing at a national level. You need 56 correct (70%)." },
      { name: "Multiple choice — State section", share: "40 questions", detail: "Covers TRELA, TREC rules and promulgated forms, Texas agency/intermediary law, and the Texas Property Code. You need 21 correct (70%)." }
    ],
    samples: [
      { prompt: "Under TRELA, a broker may act as an intermediary between the buyer and seller ONLY IF:", options: ["A. The broker obtains oral consent from both parties at closing", "B. Written consent is obtained from each party before acting as intermediary", "C. The listing broker and the selling broker agree verbally", "D. The parties waive the right to confidentiality in writing after closing"], answer: "B", explanation: "Texas does not permit ordinary dual agency; a broker may act as an intermediary only with the written consent of each party obtained before assuming that role. Oral consent (A) and post-closing waivers (D) are invalid, and C confuses the consent requirement with inter-broker agreement." },
      { prompt: "A seller accepts a buyer's offer on Tuesday. The TREC-promulgated contract requires the buyer's earnest-money deposit to be delivered to the escrow agent within 3 days. The last party signed on Tuesday. By end of day on which date must the deposit be delivered?", options: ["A. Thursday", "B. Friday", "C. The following Monday", "D. Whenever the broker remembers"], answer: "B", explanation: "Three days means three calendar days after the contract is executed by the last party (Tuesday). Wednesday, Thursday, Friday = day 3 is Friday. \"Whenever the broker remembers\" (D) is never correct — TREC contracts set a fixed delivery deadline." },
      { prompt: "A property sells for $320,000. The commission is 6%, split 50/50 between listing and buyer's brokers, and the seller's agent is on a 60% share of the listing side. How much does the seller's agent earn?", options: ["A. $5,760", "B. $9,600", "C. $19,200", "D. $11,520"], answer: "A", explanation: "Total commission = $320,000 x 0.06 = $19,200. Listing side gets half = $9,600. The agent's 60% share of that = $5,760. Answers B/C are the listing-side and total commission; D mis-applies the split." }
    ],
    note: "Samples are written by our editors to match the published TREC/Pearson VUE blueprint; they are not real exam items and TREC does not release its item bank."
  },

  // P0-8  Exam-day guide
  examDay: {
    summary: "The Texas exam is delivered by Pearson VUE on behalf of TREC at testing centers across the state (and via online proctoring in some cases). Check in early, bring two IDs, and expect your result on screen the moment you finish.",
    bring: [
      "A valid government-issued photo ID (driver's license or passport) — the name must match your Pearson VUE registration exactly",
      "A second form of ID (e.g., a signed debit/credit card or another government ID)",
      "Your Pearson VUE appointment confirmation (printed or on your phone, shown at check-in)"
    ],
    leave: [
      "Phones, smartwatches, and all personal electronics",
      "Study materials, notes, and personal calculators",
      "Outerwear, bags, and food (stored in a provided locker)"
    ],
    timeline: [
      { time: "30 min before", detail: "Arrive for check-in: ID scan, digital signature, and palm-vein or photograph verification." },
      { time: "At start", detail: "Choose to take national (150 min) and state (90 min) together or separately; each clock runs independently." },
      { time: "On finish", detail: "Pass/fail appears on screen immediately; an official score report prints and TREC is notified." }
    ],
    rules: [
      "A basic calculator is built into the Pearson VUE testing software — personal calculators are NOT permitted.",
      "You must pass BOTH sections at 70% (56/85 national, 21/40 state); fail one and you retake only that section for $54.",
      "Unscheduled breaks are allowed but the section clock keeps running."
    ],
    afterwards: "Preliminary pass/fail shows on screen the instant you finish, and Pearson VUE reports the score to TREC. You then have one year to be sponsored by a Texas broker to activate the license; without a sponsor the license issues in inactive status."
  }
};

export default data;
