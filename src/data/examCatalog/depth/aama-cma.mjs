// Depth content for: aama-cma
// Real, sourced data compiled from primary sources (AAMA, BLS). Every numeric
// row carries a note/source. Omitted fields were not verifiable — not invented.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Allied health & clinical credentials desk',
    bio: 'This guide is compiled and maintained by our allied-health desk. We work from the certifying board\'s own published material — the current exam blueprint or content outline, the candidate handbook, the fee schedule and any pass-rate disclosure the board releases — rather than from coaching-school summaries, which routinely lag a blueprint revision by a year or more. Wage and outlook figures come from the Bureau of Labor Statistics occupational series that matches the role, and we name the SOC code so you can check it yourself. Where a board publishes no pass rate, we say so instead of estimating one.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Blueprint weights, eligibility routes, fees and recertification rules were read from the certifying board’s own documents, not from third-party course pages.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (BLS OOH/OEWS, SOC 31-9092)
  salaryOutlook: {
    headline: '$44,200 median (BLS OOH, May 2024)',
    summary: 'The Certified Medical Assistant (CMA, AAMA) credential sits on top of one of the fastest-growing support occupations in healthcare. According to the U.S. Bureau of Labor Statistics, medical assistants (SOC 31-9092) earned a median annual wage of $44,200 in May 2024, with employment of 811,000 and a projected 12% growth from 2024 to 2034 — "much faster than average" for all occupations and roughly 112,300 openings per year when replacements are included. The CMA does not automatically reset a graduate’s pay, but it is the credential most often required by hospital-based outpatient practices and large health systems, and it unlocks roles that are closed to uncredentialed or only on-the-job-trained assistants. Geography is the single largest pay lever: BLS shows the top of the range well above the median in outpatient care centers, hospitals, and physicians\' offices, and state wages vary sharply. Because the CMA validates both clinical and administrative competence, holders are harder to outsource and better positioned for lead or coordinator roles. Candidates should read the median as a national midpoint, not a promise — entry-level wages in the bottom decile are materially lower, and the top decile reflects experienced assistants in high-cost metro markets and specialized settings. For context, BLS OEWS shows pay varies by industry and state, with outpatient care centers and hospitals generally above the physician-office median, so candidates should benchmark against their local market rather than the single national figure. The CMA return on investment is best measured as expanded eligibility for roles that require the credential and resilience against offshoring of clinical-support work, not as an automatic raise.',
    rows: [
      { label: 'Median annual wage', value: '$44,200', note: 'BLS Occupational Outlook Handbook, Medical Assistants (SOC 31-9092), May 2024' },
      { label: 'Lowest 10% (bottom decile)', value: 'Less than $35,020', note: 'BLS OOH wage distribution, Medical Assistants, May 2024' },
      { label: 'Highest 10% (top decile)', value: 'More than $57,830', note: 'BLS OOH wage distribution, Medical Assistants, May 2024' },
      { label: 'Employment, 2024', value: '811,000', note: 'BLS OOH, Medical Assistants, 2024' },
      { label: 'Projected growth, 2024–2034', value: '12% (much faster than average)', note: 'BLS OOH Job Outlook, Medical Assistants' }
    ],
    growth: '12% growth 2024–2034 (BLS OOH, much faster than average); ~112,300 annual openings including replacements.',
    source: { label: 'BLS Occupational Outlook Handbook — Medical Assistants (SOC 31-9092)', url: 'https://www.bls.gov/ooh/healthcare/medical-assistants.htm' }
  },

  // P0-2  Pass rates (AAMA publishes an exam-statistics report)
  passRate: {
    headline: '69% first-time pass rate (Jul 2024–Apr 2025)',
    summary: 'The AAMA Certifying Board publishes exam statistics rather than hiding them, which is a genuine advantage for candidates building a study plan. For the testing window July 2024 through April 2025, AAMA reports 4,171 CMA exams administered, of which 2,680 were first-time candidates, and a 69% first-time pass rate. For the prior 12-month period (July 2023–July 2024), AAMA reported 6,575 exams administered, 5,984 first-time candidates, and a 76% first-time pass rate — so the published rate has softened by roughly seven points year over year. Two things matter for interpretation. First, the figure is a first-time pass rate, not a cumulative or eventual pass rate; candidates who retake after a structured prep cycle typically improve. Second, AAMA counts the exam as criterion-referenced and pass/fail on a scaled 200–800 score with a minimum passing score (MPS) of 405, so the rate reflects how many first-time testers cleared that standard, not a fixed quota. As of January 5, 2026, AAMA counted 68,495 active CMAs, a large enough pool that the rate is statistically stable rather than noisy. Treat 69% as the realistic bar: most first-time testers pass, but a meaningful minority do not, and the misses cluster in administrative/billing content that clinically trained candidates under-prepare. Read together, the two windows show the CMA is passable for the majority of first-time testers but not automatic, and the year-over-year dip argues for more deliberate prep. Because AAMA separates scored items from unscored pretest items and reports a scaled standard rather than a raw percentage, the published rate is the cleanest external signal candidates have for calibrating how much practice they need before scheduling.',
    rows: [
      { label: 'First-time pass rate (Jul 2024–Apr 2025)', value: '69%', note: 'AAMA Exam Statistics, testing window July 2024–April 2025 (2,680 first-time of 4,171 exams)' },
      { label: 'First-time pass rate (Jul 2023–Jul 2024)', value: '76%', note: 'AAMA Exam Statistics, prior 12-month window (5,984 first-time of 6,575 exams)' },
      { label: 'Minimum passing score (MPS)', value: '405 (scaled 200–800)', note: 'AAMA Certifying Board; published on aama-ntl.org/certification' },
      { label: 'Active CMAs (Jan 5, 2026)', value: '68,495', note: 'AAMA Exam Statistics, reported January 5, 2026' }
    ],
    source: { label: 'AAMA — CMA (AAMA) Exam Statistics & Certification pages', url: 'https://www.aama-ntl.org/certification' },
    caveat: ''
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary: 'A realistic CMA prep assumes roughly 10–12 weeks at 8–10 hours per week for a recent program graduate, or 14–16 weeks for a career-changer without a medical assisting background. The schedule below weights time to the blueprint: Clinical Competency is 59% of scored items, so it gets the largest block, but the 41% split between General (21%) and Administrative (20%) is where unprepared candidates lose points and must not be shortchanged.',
    totalHours: '80–120 hours',
    weeks: [
      { label: 'Weeks 1–2', focus: 'General domain — law, ethics, communication', tasks: ['Study HIPAA Privacy Rule, mandated reporting, and consent doctrine', 'Drill medical terminology roots/suffixes and A&P systems', 'Build a one-page legal/ethical quick reference'], hours: '10 hrs/week' },
      { label: 'Weeks 3–4', focus: 'Administrative domain — billing, coding, scheduling', tasks: ['Learn ICD-10-CM and CPT E/M coding and modifiers', 'Practice CMS-1500 / superbill and insurance coordination of benefits', 'Memorize scheduling methods (wave, open-access, cluster)'], hours: '10 hrs/week' },
      { label: 'Weeks 5–7', focus: 'Clinical A — workflow, vitals, infection control', tasks: ['Vital signs, OSHA, standard/transmission-based precautions, PPE donning/doffing', 'Phlebotomy order of draw and specimen handling', 'Safety data sheets and emergency preparedness'], hours: '12 hrs/week' },
      { label: 'Weeks 8–9', focus: 'Clinical B — pharmacology & procedures', tasks: ['Seven rights of med admin, routes, dosage/IV drip math', 'ECG lead placement, diagnostic testing, sterile technique', 'Practice 3–5 calculation problems per session'], hours: '12 hrs/week' },
      { label: 'Weeks 10–11', focus: 'Full-length simulation', tasks: ['Two 200-question timed exams in four 40-min blocks', 'Review every missed item against the blueprint', 'Target weak domains with focused re-drills'], hours: '10 hrs/week' },
      { label: 'Week 12', focus: 'Polish & exam logistics', tasks: ['Light review of high-yield lists only', 'Confirm PSI eligibility window and test-center location', 'Rest 24h before the exam'], hours: '6 hrs/week' }
    ],
    variants: [
      { label: 'Working full-time (no MA background)', detail: 'Stretch to 16 weeks at 6–8 hrs/week; protect two 2-hour weeknight blocks and one 4-hour weekend block.' },
      { label: 'Recent MA program graduate', detail: 'Compress to 6–8 weeks at 10 hrs/week, focusing on Administrative and law/ethics weak spots.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary: 'The CMA rewards application over recognition. Because 180 of 200 items are scored across three very different domains, the highest-yield strategies are blueprint-weighted repetition and timed practice, not passive re-reading of a textbook.',
    items: [
      { title: 'Weight study time to the 59% Clinical domain — but protect the 41%', detail: 'Spend about 55–60% of hours on Clinical Competency, yet deliberately schedule Administrative (20%) and General (21%) blocks. Clinically trained candidates most often fail on billing, coding, and scheduling items they assumed they knew. Build a weekly checklist that touches all three domains every week.' },
      { title: 'Drill dosage and IV math until it is automatic', detail: 'AAMA places 3–5 calculation items on the exam and they are easy points if rehearsed. Practice mg/kg, pediatric dosing, and unit conversions from memory; simulate the no-calculator, timed condition so the arithmetic does not cost you on exam day.' },
      { title: 'Take full-length, four-block simulations', detail: 'The exam is four 40-minute segments (160 minutes) with 20 unscored pretest items scattered throughout. Train your endurance by sitting two 200-question practice exams in four timed blocks, including the optional breaks, so pacing and fatigue are not surprises.' },
      { title: 'Turn every missed question into a blueprint tag', detail: 'After each practice set, log the item to its domain/topic and re-study the underlying rule, not the answer. AAMA notes its practice exam distribution does NOT mirror the real weighting, so use the official Content Outline to keep your coverage honest.' }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary: 'Official AAMA products are the only materials that mirror the certifying board’s own blueprint; third-party books add structure and alternate explanations. Prices below were verified on the publisher/retailer pages cited.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'AAMA CMA (AAMA) Certification Practice Exam', values: ['$30 (members & nonmembers)', 'Online, 200 Q in 10 modules, 90-day access, 2 attempts', 'Realistic pacing drill modeled on the exam'] },
      { label: 'AAMA CMA (AAMA) Review Exam', values: ['$30 member / $45 nonmember', 'Online, 200 Q, 30-day access, earns 3 CEUs', 'Diagnostic check + CEU credit'] },
      { label: 'Kaplan Medical Assistant Exam Prep', values: ['~$25.50 (Amazon, list varies)', 'Print/digital study guide + practice Qs', 'Structured textbook review for career-changers'] }
    ],
    footnote: 'Prices checked 2026-08 from aama-ntl.org and retailer listings; AAMA practice-exam price is flat for members and nonmembers. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary: 'Most CMA failures are predictable and concentrated in non-clinical content and test mechanics, not in hands-on clinical knowledge.',
    items: [
      { mistake: 'Starving the Administrative (20%) and General (21%) domains', fix: 'Clinically experienced candidates over-study procedures and under-study billing, CPT/ICD-10 coding, scheduling, and HIPAA. Block weekly time for these; they are 41% of the scored exam.' },
      { mistake: 'Treating pretest items as skippable', fix: 'Twenty of 200 items are unscored pretests that look identical to scored ones. Answer every item as if it counts; you cannot tell them apart.' },
      { mistake: 'Memorizing practice-question answers instead of rules', fix: 'AAMA’s practice exam distribution does not mirror the real blueprint. Learn the underlying standard (e.g., PPE sequence, order of draw) so you can apply it to novel stems.' },
      { mistake: 'Skipping full-length timed simulations', fix: 'Four 40-minute blocks over 160 minutes is a stamina test. Simulate it at least once or twice or risk a slow second half.' }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary: 'The CMA (AAMA) exam is 200 multiple-choice questions delivered by computer in four 40-minute segments (160 minutes total). Of the 200, 180 are scored and 20 are unscored pretest items. Scoring is criterion-referenced on a scaled 200–800, MPS 405. The blueprint divides scored items into three domains: Clinical Competency 59% (106 items), General 21% (38 items), and Administrative 20% (36 items). Questions are single-best-answer multiple choice that test application of the Content Outline, not rote recall, across topics such as pharmacology, infection control, billing/coding, and law/ethics.',
    types: [
      { name: 'Multiple choice (scored)', share: '90% of the 200 items (180 scored)', detail: 'Single best answer across Clinical, General, and Administrative domains; application-oriented stems.' },
      { name: 'Unscored pretest items', share: '20 of 200 items', detail: 'Embedded throughout to evaluate future items; indistinguishable from scored items and not counted.' }
    ],
    samples: [
      { prompt: 'A medical assistant is preparing to draw blood for a chemistry panel. Which tube should be drawn FIRST according to the standard order of draw?',
        options: ['A. Lavender-top (EDTA)', 'B. Light-blue top (sodium citrate)', 'C. Red/gold-top (serum separator)', 'D. Green-top (heparin)'],
        answer: 'B',
        explanation: 'The correct order of draw begins with blood cultures, then light-blue (sodium citrate) for coagulation, then serum/red/gold, then green (heparin), then lavender (EDTA), then gray. Light-blue must precede serum and EDTA tubes so anticoagulant contamination does not skew coagulation or CBC results. A (lavender) is a common distractor but comes later; C and D also follow the blue-top tube.' },
      { prompt: 'Under HIPAA, which of the following is a permissible disclosure of PHI WITHOUT the patient’s authorization?',
        options: ['A. Selling the patient list to a pharmacy for marketing', 'B. Reporting a suspected case of child abuse to the mandated agency', 'C. Sharing records with a friend who asks about a coworker', 'D. Posting anonymized photos to a personal social account'],
        answer: 'B',
        explanation: 'HIPAA permits disclosures required by law, including mandated reporting of abuse, neglect, and certain communicable diseases, without patient authorization. Selling PHI for marketing (A) and casual disclosure to a friend (C) are clear violations; even "anonymized" posts (D) risk re-identification and are not a permitted basis. This is a classic General-domain law/ethics item.' },
      { prompt: 'Which precaution requires a fit-tested N95 respirator and negative-pressure room?',
        options: ['A. Standard precautions', 'B. Contact precautions', 'C. Droplet precautions', 'D. Airborne precautions'],
        answer: 'D',
        explanation: 'Airborne precautions (e.g., for TB, measles, varicella) require N95 or higher respirators and a negative-pressure/airborne-infection isolation room. Standard precautions (A) are baseline; contact (B) needs gown/gloves; droplet (C) needs a surgical mask and private room but not N95 or negative pressure. Infection-control categorization is heavily tested in the Clinical domain.' }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint (Clinical 59% / General 21% / Administrative 20%); they are not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary: 'The CMA (AAMA) exam is delivered in person by computer at a PSI test center. You schedule within a 90-day eligibility window after AAMA approves your application. Plan to arrive early; the appointment includes a tutorial and optional breaks around the four 40-minute segments.',
    bring: ['Government photo ID that exactly matches your registration name', 'Your PSI appointment confirmation', 'Any required documentation if testing under a special accommodation'],
    leave: ['Phones, smartwatches, and bags (secured in a locker before entry)', 'Study notes, books, and scratch paper (center provides erasable materials)', 'Calculators and smart devices (not permitted)'],
    timeline: [
      { time: '30 min before', detail: 'Arrive, present ID, complete check-in and biometric/photo capture.' },
      { time: '0:00', detail: 'Optional tutorial, then four 40-minute segments (160 min) begin.' },
      { time: 'Between segments', detail: 'Optional breaks; the clock pauses only for scheduled breaks, not unscheduled exits.' },
      { time: 'On completion', detail: 'Preliminary pass/fail on screen; official score report follows from AAMA.' }
    ],
    rules: ['20 unscored pretest items are mixed into the 200; answer all as if scored.', 'You may not bring your own scratch paper; the center provides erasable materials collected at the end.'],
    afterwards: 'A preliminary pass/fail displays on screen. AAMA issues the official score report; if unsuccessful, review your domain performance and retest within the eligibility window per AAMA retake rules.'
  }
};

export default data;
