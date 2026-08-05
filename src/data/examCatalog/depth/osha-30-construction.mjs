// Depth content for: osha-30-construction
// IMPORTANT: OSHA 30 Construction is a DOL/OSHA Outreach TRAINING course aimed at
// supervisors and foremen, NOT a proctored certification exam. No national pass
// rate exists. Completion is module-quiz based (~70% to advance, retries allowed)
// plus a final assessment; the DOL issues a completion card. Sources: osha.gov,
// the Outreach Construction procedures, and BLS OOH (May 2024).
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Workplace safety & trades certifications desk',
    bio: 'This guide is compiled and maintained by our safety and trades desk. Federal programmes are described from the issuing agency’s own material — OSHA’s Outreach Training Program requirements and its published procedures, and the EPA’s Section 608 regulation and certifying-organisation rules. This matters more than usual here, because both areas are crowded with resellers whose claims about card validity, expiry and employer acceptance do not match the agency’s position. Where the agency deliberately publishes no figure — OSHA does not publish Outreach pass rates — we say that rather than invent one.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Programme requirements, card rules and certification categories were taken from the issuing federal agency’s own published material.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (BLS OOH May 2024, SOC 11-9021 Construction Managers)
  salaryOutlook: {
    headline: '$106,980 median for construction managers (BLS, May 2024)',
    summary: 'The OSHA 30 Construction card is the supervisory-tier sibling of OSHA 10: it is the credential contractors expect of foremen, leads, and superintendents who must understand not just hazards but the management systems behind them. Its pay effect is therefore tied to promotion, not just site access. The BLS frames the relevant career step under Construction Managers (SOC 11-9021) — the role OSHA 30 most directly supports. Median pay is more than double that of general laborers, reflecting the responsibility of planning, staffing, and owning safety outcomes on a job. Importantly, many public-works andunion projects and several state rules require a supervisor-level card (OSHA 30) rather than the 10, so the card can be the literal gate to a foreman wage. Geographic and sector spread is wide: heavy/civil and large commercial GCs pay the top of the range, and the highest 10% clear well past $175K. For the worker moving from boots to boss, OSHA 30 is the cheapest credential on the path.',
    rows: [
      { label: 'Median annual wage', value: '$106,980', note: 'BLS OOH, Construction Managers 11-9021, May 2024' },
      { label: 'Lowest 10%', value: 'Less than $65,160', note: 'BLS OOH, Construction Managers 11-9021, May 2024' },
      { label: 'Highest 10%', value: 'More than $176,990', note: 'BLS OOH, Construction Managers 11-9021, May 2024' },
      { label: 'Total employment', value: '550,300 jobs', note: 'BLS OOH, Construction Managers 11-9021, May 2024' },
      { label: 'Projected openings/yr', value: '46,800', note: 'BLS OOH, 2024-2034, includes replacements' }
    ],
    growth: '9% growth 2024–2034 (faster than average)',
    source: { label: 'BLS Occupational Outlook Handbook — Construction Managers', url: 'https://www.bls.gov/ooh/management/construction-managers.htm' }
  },

  // P0-2  Pass rates — completion-based, no national rate
  passRate: {
    headline: 'No published pass rate — completion-based training',
    summary: 'OSHA 30 Construction belongs to the same DOL/OSHA Outreach Training Program as the 10-hour card, so the same logic applies: it is voluntary awareness training, not a proctored exam, and the Department of Labor publishes no national pass rate. Learners progress by passing per-module quizzes (authorized providers commonly require about 70%, with retakes) and a final assessment, after which the trainer requests the DOL completion card. Because every authorized provider runs its own non-proctored quizzes, any "pass rate" would be a vendor metric, not a DOL statistic, and we do not publish one. The 30-hour version is heavier on management content (Managing Safety and Health, competent-person concepts), but the completion bar remains low by design — the card documents that a supervisor sat through and engaged with the fuller curriculum, which is why it is treated as a supervisory baseline rather than proof of expertise.',
    rows: [],
    source: { label: 'OSHA Outreach Training Program', url: 'https://www.osha.gov/training/outreach' },
    caveat: 'OSHA/Outreach is completion-based with no national pass rate. Module quizzes are typically ~70% to pass with retries; DOL publishes no aggregate pass statistics. We omit numeric pass-rate rows rather than fabricate them.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary: 'OSHA 30 is a fixed 30 contact-hour curriculum with a mandated topic mix, so the schedule is really about fitting the hours around the 7.5-hour/day online cap. The curriculum splits into 14 mandatory hours, 12 elective hours, and 4 optional hours. Self-paced online learners usually spread it over a week or two; instructor-led cohorts run it as four 7.5-hour days.',
    totalHours: '30 contact hours (14 mandatory + 12 elective + 4 optional)',
    weeks: [
      { label: 'Block 1 — Mandatory (14h)', focus: 'Intro OSHA (1h), Managing Safety & Health (2h), Focus Four (6h), PPE (2h), Health Hazards (2h), Stairways & Ladders (1h)', tasks: ['Work the Managing Safety and Health module — the material that separates 30 from 10', 'Complete the expanded Focus Four block (falls get the longest single slot)', 'Pass each mandatory module quiz at ~70%'], hours: 'Spread across 2 online days (7.5h cap)' },
      { label: 'Block 2 — Electives (12h)', focus: 'Choose from scaffolds, excavation, cranes, concrete/masonry, powered industrial trucks, ergonomics, etc.', tasks: ['Select electives aligned to your trade (e.g., scaffolds for steel/roofing crews)', 'Complete 12 hours of elective content and quizzes'], hours: '~2 online days' },
      { label: 'Block 3 — Optional + final (4h)', focus: 'Optional topics (e.g., safety leadership, recordkeeping) and the final assessment', tasks: ['Finish 4 optional hours', 'Pass the final assessment to unlock the completion certificate'], hours: '~1 online day' }
    ],
    variants: [
      { label: 'Instructor-led cohort', detail: 'Four 7.5-hour classroom days; no per-day online cap, but total is still 30 contact hours.' },
      { label: 'Working supervisor', detail: 'Spread across 3–4 weeks at ~8 hrs/week around shift work; the daily cap is rarely the constraint.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary: 'OSHA 30 rewards supervisors who study it as management content, not just hazard trivia. The graded moments are still the module quizzes, but the material now asks you to think like the person responsible for the program — not the person being protected.',
    items: [
      { title: 'Lean into Managing Safety and Health', detail: 'This 2-hour module (absent from OSHA 10) is where 30 diverges: safety responsibilities, recordkeeping, and the "why" behind programs. Supervisors are tested on owning the system, so treat it as the core, not an intro.' },
      { title: 'Pick electives that match your trade', detail: 'You control 12 of 30 hours. A scaffold foreman should take scaffolds and fall-protection-adjacent electives; an excavator supervisor should take excavation/trenching. The quizzes you actually care about are the ones you will use Monday.' },
      { title: 'Use the retry loop as spaced practice', detail: 'Module quizzes at ~70% with retries are the real graded points. Spread sessions out rather than bingeing so each wrong-answer explanation is revisited — retention beats speed here.' },
      { title: 'Pre-stage identity verification', detail: 'Online providers must verify identity before issuing the DOL card. Match your name exactly to your ID and complete any webcam check early so completion is not blocked at the end.' }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary: 'All providers below are OSHA-authorized Outreach trainers. Course fees are for the 30-hour Construction class and generally include the DOL card (expedited shipping may cost extra). We do not rank by commission.',
    columns: ['Provider', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ClickSafety', values: ['~$189', '100% online, self-paced', 'Brand-name provider, strong LMS and mobile'] },
      { label: '360training / OSHA.com', values: ['~$159–$179', '100% online, self-paced', 'Lowest-common-price, frequent promos'] },
      { label: 'Summit Training Source', values: ['~$175', 'Online + in-person', 'Contractors enrolling supervisor cohorts'] },
      { label: 'OSHAcademy', values: ['Free course / ~$20 card', 'Online, free training', 'Budget supervisors; card fee separate'] },
      { label: 'Pure Safety', values: ['~$169', '100% online', 'Mid-size GC supervisor groups'] }
    ],
    footnote: 'Prices checked 2026-08 and vary with promotions. Confirm the provider appears on OSHA’s authorized-trainer list — only authorized trainers issue the valid DOL 30-hour card.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary: 'As with OSHA 10, most OSHA 30 problems are administrative: the card is delayed or rejected over provider authorization, identity, or record issues — not an academic failure.',
    items: [
      { mistake: 'Assuming OSHA 30 equals a "certification"', fix: 'It is a DOL completion card documenting 30 hours of training, not a license or a competency certification. It does not replace trade licensing or a competent-person designation required by specific standards.' },
      { mistake: 'Buying from a non-authorized seller', fix: 'Only OSHA-authorized trainers can issue the valid DOL 30-hour card. Verify against OSHA’s authorized-trainer list before paying; unauthorized "cards" are worthless to employers and inspectors.' },
      { mistake: 'Ignoring the 7.5-hour/day online cap', fix: 'Federal Outreach rules limit online training to 7.5 hours per calendar day. You cannot finish all 30 hours in three straight 10-hour sittings online — plan at least four session-days.' },
      { mistake: 'Letting the 90-day card window lapse', fix: 'Trainers must request your DOL card within 90 days of completion, and cards are replaceable for only up to 5 years. Finish identity verification promptly and save your temporary certificate.' }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary: 'There is no single proctored OSHA 30 exam. Assessment is per-module quizzes (commonly ~70% to pass, with retries) plus a final cumulative check. Questions are scenario-based multiple choice drawn from the 30-hour curriculum, with明显高于 the 10-hour version an emphasis on supervisory duties, the Focus Four, and Managing Safety and Health.',
    types: [
      { name: 'Module quiz (multiple choice)', share: '~75% of graded items', detail: 'One quiz per topic (Intro OSHA, Managing Safety and Health, each Focus Four hazard, PPE, Health Hazards, Stairways & Ladders, electives). Usually 5–10 questions; ~70% to advance, retries allowed.' },
      { name: 'Final assessment', share: '~25%', detail: 'A brief cumulative multiple-choice check over the full 30 hours; commonly ~70% to pass. Passing releases the completion certificate and triggers the DOL card request.' }
    ],
    samples: [
      { prompt: 'As a supervisor, you observe crews using extension cords with missing ground prongs on a wet concrete pour. Under OSHA’s construction standards, your primary obligation is to:', options: ['A. Issue a warning and let the crew finish the pour', 'B. Stop the hazardous use and ensure grounded/GFCI-protected equipment is used', 'C. Document it in the weekly log only', 'D. Assign a spotter to watch the cord'], answer: 'B', explanation: 'B is correct: a supervisor must eliminate the electrocution hazard (the Focus Four item) by stopping unsafe use and requiring proper grounded/GFCI protection. A, C, and D fail to control the hazard and would not satisfy the employer’s duty.' },
      { prompt: 'Which activity best illustrates the "Managing Safety and Health" responsibility covered in the 30-hour (but not 10-hour) curriculum?', options: ['A. Wearing a hard hat', 'B. Establishing a written hazard-communication and training program for the crew', 'C. Using a harness at height', 'D. Reporting a near-miss to a peer'], answer: 'B', explanation: 'B is correct: Managing Safety and Health is the supervisory module unique to the 30-hour course — it covers program ownership, training, and recordkeeping. A, C, and D are individual worker-level actions also taught in OSHA 10.' }
    ],
    note: 'Samples are editor-written illustrations of the published OSHA 30 blueprint, not live exam items. Real quizzes are administered privately by each authorized provider.'
  },

  // P0-8  Exam-day guide — reframed as course-completion realities
  examDay: {
    summary: 'There is no test center or exam day. "Exam day" for OSHA 30 is the day you complete the final module. The real constraints are the federal training rules and the post-completion card process.',
    bring: [
      'Government photo ID matching your registration exactly (required for identity verification)',
      'A device with stable internet for online delivery',
      'Webcam ready if your provider uses photo/liveness identity checks'
    ],
    leave: [
      'No proctor, locker, or banned-items list — this is self-paced online training',
      'Do not plan to finish all 30 hours in one sitting: the federal online cap is 7.5 training hours per calendar day'
    ],
    timeline: [
      { time: 'Before you start', detail: 'Confirm the provider is OSHA-authorized and your name/ID match exactly.' },
      { time: 'Per module', detail: 'Complete content, then pass the ~70% quiz; retry as allowed before advancing.' },
      { time: 'Day you finish', detail: 'Pass the final assessment; download your temporary completion certificate immediately.' },
      { time: 'Weeks later', detail: 'The official DOL 30-hour plastic card arrives by mail from the trainer.' }
    ],
    rules: [
      'Online training is capped at 7.5 hours per calendar day under federal Outreach rules — the 30 hours span at least four session-days online.',
      'Identity must be verified before a DOL card can be issued; name mismatches can block it.',
      'Trainers must request cards within 90 days of completion; DOL cards are replaceable for up to 5 years only.'
    ],
    afterwards: 'You get a temporary completion certificate immediately — that is what you show an employer or inspector. The official DOL 30-hour card is mailed weeks later. The card proves training only; it is not a license and some employers/states may require refreshers.'
  }
};

export default data;
