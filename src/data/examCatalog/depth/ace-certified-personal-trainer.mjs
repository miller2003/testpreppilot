// Depth content for: ace-certified-personal-trainer
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Health, fitness & recreation certifications desk',
    bio: 'This guide is compiled and maintained by our fitness-certifications desk. ACE revises the CPT exam content outline periodically, so we track it by the current published domain structure and state plainly when a number is ACE-published versus an industry estimate. Fees, format, scoring and retake rules come from the American Council on Exercise certification pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam domains, weights, format, fees and retake schedule were taken from ACE’s current Certified Personal Trainer exam content outline and candidate handbook.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$46,180 median for fitness trainers and instructors (BLS, May 2024)',
    summary:
      'As with every personal-training credential, there is no Bureau of Labor Statistics occupation literally named "personal trainer", so any precise figure tied to that title is a job-board aggregate rather than government data. The correct official fit is Fitness Trainers and Instructors, because the ACE CPT authorizes exactly that work: one-on-one and small-group training, client assessment, and program design. That occupation had a May 2024 median wage of $46,180, with the lowest 10 percent under $27,580 and the highest 10 percent over $82,050. The distribution is genuinely wide and worth reading carefully: an ACE-certified trainer at a corporate gym on hourly floor time sits near the bottom, while a trainer who builds a private client roster, adds a specialization, or runs their own studio moves toward the top decile — the credential is the entry requirement, not the income ceiling. BLS counted 370,100 such jobs in 2024 and projects 12 percent growth from 2024 to 2034, much faster than the average for all occupations, driven by preventive-health and active-aging demand. That growth is expected to generate roughly 74,200 openings a year, almost all replacement and expansion rather than brand-new employers. The honest takeaway for an ACE candidate is the same as for any CPT candidate: the certificate gets you past the employer minimum, but the wage gap above the median is earned through client retention, business skill, and stacked specializations, not by the pass alone. ACE is NCCA-accredited and broadly equivalent in standing to the NASM CPT, so the labor-market profile is the same occupation — choose between them on curriculum and delivery fit, not on a different salary outcome, because BLS does not separate them.',
    rows: [
      { label: 'Median annual wage, fitness trainers and instructors', value: '$46,180', note: 'BLS Occupational Outlook Handbook, May 2024 ($22.20/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $27,580', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $82,050', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '370,100 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~74,200 per year', note: 'BLS OOH Job Outlook, 2024-34 — replacement and growth openings' }
    ],
    growth: '12% projected growth 2024-34 (much faster than average); ~74,200 openings a year. ACE and NASM sit in the same BLS occupation, so pick between them on curriculum fit rather than salary, which BLS does not split by certificate.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Fitness Trainers and Instructors',
      url: 'https://www.bls.gov/ooh/personal-care-and-service/fitness-trainers-and-instructors.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'ACE does not publish a pass rate at all',
    summary:
      'The American Council on Exercise does not publish any pass-rate statistic for the CPT exam — not an audited one and not even a marketing claim in the way NASM floats an ~85 percent figure. We state this plainly: there is no official number to cite, and any percentage you encounter in forums or from prep vendors is an estimate, not an ACE figure, so we have left it out rather than repeat it. What ACE does publish is the structural detail that actually matters for planning. The exam is pass/fail against a scaled cut score of 500 on a 700-800 scale (ACE scales from 200 to 800, with 500 the minimum to pass), built from 125 scored items plus 25 unscored pretest items embedded invisibly among the 150 questions. Because the pretest items are indistinguishable, you cannot tell which questions count, so the only safe strategy is to treat every item as scored. The retake schedule is the other published fact: a failed first attempt may be re-sat after a one-day wait, and the retake fee is $249 unless your study package bundled one. ACE also offers a 90-day eligibility window from the date you purchase the exam to actually sit it, which is tighter than some competitors’ windows and is a planning input in its own right. The practical reading is that the exam is eminently passable on a single prepared attempt — the item style rewards applied judgement about client onboarding, programming and risk management — and that the cost of under-preparing is a paid retake plus the waiting-period tax, so the incentive to prepare once and properly is high.',
    source: {
      label: 'ACE — Certified Personal Trainer exam information and candidate handbook',
      url: 'https://www.acefitness.org/certified-personal-trainer-exam/'
    },
    caveat:
      'ACE publishes no pass rate of any kind — not audited, not marketing. We have deliberately left the pass-rate field empty and report only the published 500/800 cut score, the 25 unscored pretest items, and the retake schedule instead.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'Two eligibility gates and one tight window shape the plan before any studying begins. ACE requires candidates to be at least 18, to hold a high school diploma or equivalent, and to hold a current CPR/AED certification with a live skills component — that CPR/AED card is mandatory to sit and is not taught inside the curriculum. Separately, once you purchase the exam you have a 90-day window to take it, which is shorter than several competitors’ windows, so the schedule below assumes you buy the exam only when you are ready to commit the hours, not as a vague future intention. The current ACE CPT exam content outline has four domains: Client Onboarding and Assessments (23%), Program Design and Implementation (31%), Program Modification and Progression (27%), and Risk Management, Professional Conduct and Ethical Business Practices (19%). The weighting is the planning key: Program Design and Implementation plus Program Modification and Progression together are 58 percent of the exam, so the candidate who spends their time on anatomy trivia and skims the programming decisions will lose the most cheap points. ACE frames training through its Integrated Fitness Training (IFT) model — a progressive system moving clients from stability and mobility, through movement load, to performance — which is the conceptual backbone of the two large domains. The plan runs eight weeks at roughly 11-13 hours a week, comfortably inside the 90-day window, and assumes you can practise movements and assessments on a real or simulated client; if you cannot, use a mirror and recorded reps, because ACE items are scenario-based and hinge on recognising movement quality.',
    totalHours: '90-110 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Eligibility, IFT model and domain map',
        tasks: [
          'Confirm age, education and CPR/AED status; book the CPR/AED skills course if you lack it',
          'Map the four domains to 23/31/27/19 and set a study budget that follows those numbers',
          'Learn the ACE Integrated Fitness Training (IFT) model end to end: stability/mobility, movement, load and performance',
          'Build a glossary of ACE-specific terms (functional movement, movement system categories, adherence) you will meet throughout'
        ],
        hours: '11-13 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Domain 1 — Client Onboarding and Assessments (23%)',
        tasks: [
          'The client interview, health-history and risk stratification, including when to refer to a physician',
          'Static and dynamic posture assessment, movement screens, and cardiorespiratory and body-composition methods',
          'Goal setting and building the trainer-client relationship and rapport',
          'Turn an assessment finding into the first programming decision — ACE links onboarding directly to design'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Weeks 4-5',
        focus: 'Domain 2 — Program Design and Implementation (31%)',
        tasks: [
          'Apply the IFT model to write phase-appropriate programs: exercise selection, order, sets, reps, rest',
          'Resistance, cardiorespiratory, balance, core and flexibility programming within one coherent plan',
          'Cueing and instruction for major movement patterns; regressions and progressions',
          'Build complete sample programs for a beginner, an intermediate and a senior client so the model is automatic'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Week 6',
        focus: 'Domain 3 — Program Modification and Progression (27%)',
        tasks: [
          'Recognise when and how to progress load, volume and complexity along the IFT continuum',
          'Modify for special populations: older adults, youth, pregnancy, and common orthopedic limitations',
          'Troubleshoot a stalled client and adjust the plan rather than restarting it',
          'Practise "client plateaus — what do you change first" scenarios, which ACE asks heavily'
        ],
        hours: '11-13 hrs'
      },
      {
        label: 'Week 7',
        focus: 'Domain 4 — Risk Management, Professional Conduct and Ethics (19%)',
        tasks: [
          'Scope of practice: what a trainer may advise on nutrition (general guidance only) and when to refer out',
          'Informed consent, liability, documentation and emergency response',
          'Professional conduct, client confidentiality and the business-ethics line items ACE tests',
          'Drill the ethics and referral items — they are easy points and frequently overstepped from habit'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Week 8',
        focus: 'Timed full exams and gap closing',
        tasks: [
          'Three timed 150-question practice exams completed in one 3-hour sitting',
          'Re-drill every IFT progression and modification decision you missed, not just the concept name',
          'Final pass over scope-of-practice and risk-management items — the cheapest points on the paper',
          'Confirm CPR/AED card is current and ID matches your ACE account; leave one light review day'
        ],
        hours: '10-12 hrs'
      }
    ],
    variants: [
      { label: 'Kinesiology or exercise-science student', detail: 'Four to five weeks. Your assessment and physiology knowledge is solid, but ACE tests its own IFT model and the onboarding-to-design link, so do not coast on generic science — candidates who do lose points treating the blueprint as general knowledge.' },
      { label: 'Career changer with no fitness background', detail: 'Ten to twelve weeks at 9 hrs/week. Add two weeks before Week 1 on movement literacy; you must name movements and read posture fluently, and ACE scenario items assume that vocabulary is automatic. Pair study with gym time to watch real coaching.' },
      { label: 'Already NASM- or ACSM-certified, adding ACE', detail: 'Five to six weeks. You know the science and the cueing; the gap is ACE’s IFT framework and its four-domain weighting, plus the specific ethics and risk-management phrasing. Learn the model and the terminology and you will convert quickly.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'ACE writes a scenario exam in the same spirit as NASM but with its own framework, and the highest-leverage preparation is learning to think in the IFT model rather than memorising definitions. The exam rewards applied judgement about onboarding, programming and modification, so the strategies below are ordered by score impact, and the top two cost nothing.',
    items: [
      {
        title: 'Internalise the IFT model as a progression map',
        detail: 'ACE’s Integrated Fitness Training model underpins the two largest domains (Program Design 31% and Modification 27%, together 58%). You must move a client from stability and mobility, through loaded movement, to performance without hesitation, and know which variable to change at each step. Drill the order and the decision rule — given a client’s status, identify the correct IFT stage and the next program adjustment — because items routinely give you the client and ask "what now".'
      },
      {
        title: 'Practise the onboarding-to-design link',
        detail: 'ACE deliberately connects Domain 1 (onboarding and assessment, 23%) to Domain 2 (design, 31%). An assessment finding should drive the first programming choice, not sit as isolated trivia. Build a table: each assessment, the implication, and the resulting first exercise or regression. This single connection covers a large share of applied items and is where rote learners lose points.'
      },
      {
        title: 'Secure the scope-of-practice and ethics points',
        detail: 'Domain 4 (19%) is the easiest points on the paper and the most often dropped from habit. A trainer gives general healthy-eating guidance and refers out for individualized meal plans or medical nutrition therapy; the "helpful" answer that writes a diet is wrong. Memorise the referral and consent lines — they appear across the ethics domain and are pure, cheap marks.'
      },
      {
        title: 'Rehearse one- or two-sentence coaching answers',
        detail: 'ACE scenario items are compact and implication-heavy. Practise stating a fault and its correction, or a progression and its rationale, aloud in a single sentence using precise vocabulary. This exposes the gaps passive reading hides and matches the scoring style on test day.'
      },
      {
        title: 'Use ACE’s own practice exam for wording',
        detail: 'ACE item phrasing favours "most appropriate", "first", and "best describes", and leans on applied judgement. Third-party banks vary in fidelity. Spend at least one of your three practice exams on ACE’s own platform so the real wording is not a surprise, while using third-party banks for volume and speed.'
      },
      {
        title: 'Respect the 90-day window and CPR/AED gate',
        detail: 'You have 90 days from exam purchase to sit, and a current CPR/AED card with a live skills component is mandatory. Buy the exam when you are ready to commit the hours, and verify the card is current and your ID matches your ACE account the week you schedule — both are hard gates that cost seats.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'ACE sells the exam on its own or bundled with study packages, so the buying decision is whether to buy the standalone voucher or add a study track — and, if bundled, whether to include the exam at the $99 add-on price or pay $499 for the exam separately later. The decision that actually moves your pass probability is whether you need ACE’s structured curriculum or can self-pace with a third-party question bank; degree holders often self-pace, while career changers benefit from a guided track plus a good bank.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ACE CPT study packages (Essential/Plus/Pro)', values: ['Bundled pricing at acefitness.org; the exam is often a ~$99 add-on', 'Digital and/or print curriculum plus practice exam', 'Candidates who want ACE’s own structured path mapped to the four domains'] },
      { label: 'ACE CPT exam voucher alone', values: ['~$499 standalone', 'Meazure Learning test centre or online proctor', 'Candidates who already have a curriculum and only need the seat'] },
      { label: 'ACE CPT retake', values: ['$249 per attempt', 'Same delivery as the first sit', 'Budget for it only if you under-prepare; the 90-day window is tight'], },
      { label: 'ACE Candidate Handbook (free)', values: ['Free from ACE', 'PDF rules and format reference', 'The authoritative source for domains, weights and retake policy'], },
      { label: 'Third-party practice banks (e.g., Pocket Prep, Trainer Academy)', values: ['~$15-40/month', 'Mobile and web quiz banks', 'Volume drilling and speed; pair with ACE’s own practice exam for wording'], },
      { label: 'CPR/AED course with live skills', values: ['~$50-100', 'In-person or blended', 'Mandatory eligibility requirement, taught outside the curriculum'], } 
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; ACE runs periodic discounts, so confirm at acefitness.org before buying. We do not rank by commission. Renewal is $129 for one credential and requires 20 CECs over the two-year cycle.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'ACE is passable, but the failure modes are predictable and almost all come from treating ACE as generic fitness knowledge rather than its own IFT-framed blueprint. The six below cover the recurring traps; the theme is that candidates lose the most where ACE’s framework differs from what they already "know" from another cert or from the gym floor.',
    items: [
      {
        mistake: 'Studying science instead of the IFT model',
        fix: 'Domains 2 and 3 are 58 percent of the paper and are built entirely on the Integrated Fitness Training model. Candidates with a strong science background over-invest in physiology and under-invest in the IFT progression logic — exactly where ACE concentrates applied items. Budget study time by the published 23/31/27/19 weightings, and drill "given this client, what is the next IFT step" until it is reflexive.'
      },
      {
        mistake: 'Treating scenario items as definitions',
        fix: 'ACE asks what you do next for a described client, not what a term means. Practise the decision, not the definition. When you miss an item, write the one-sentence action it wanted, not the concept name, and the ACE pattern becomes visible.'
      },
      {
        mistake: 'Overstepping scope of practice on nutrition',
        fix: 'A trainer gives general healthy-eating guidance and refers out for individualized meal plans or medical nutrition therapy. Items test this line precisely, and the over-helping answer is the classic trap. Lock the boundary and collect easy Domain-4 points.'
      },
      {
        mistake: 'Blowing the 90-day exam window',
        fix: 'Unlike longer competitor windows, ACE gives you 90 days from exam purchase to sit. Candidates who buy the voucher "to lock in a price" and study loosely blow the window and pay again. Buy the exam only when your eight-week plan is about to start, so the deadline paces you.'
      },
      {
        mistake: 'Arriving without a current CPR/AED card',
        fix: 'The CPR/AED certification with a live skills component is a hard eligibility gate, outside the curriculum. Candidates who let it lapse or take an online-only version without the skills check are turned away. Verify the card is current and skills-checked before you book.'
      },
      {
        mistake: 'Forgetting the invisible unscored items',
        fix: 'Twenty-five of the 150 questions are unscored pretest items mixed in indistinguishably. You cannot identify them, so treating any item as "probably experimental" risks dropping real points. Answer every item as if it scores, and do not waste time guessing which are pretest.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The exam is 150 questions in a 3-hour sitting, of which 125 are scored and 25 are unscored pretest items embedded without identification. It is pass/fail against a scaled cut score of 500 on ACE’s 200-800 scale, delivered through Meazure Learning either at a test centre or via online proctoring. The items are almost entirely scenario-based multiple choice: ACE gives you a client — age, assessment findings, goals, training history — and asks for the most appropriate action, regression, progression, or identification of a movement fault, very much in the same spirit as NASM but framed through ACE’s Integrated Fitness Training model. There is no practical or performance component in the written exam; hands-on skill is assessed by employers, not by this test, which is why rehearsing the decision in words matters more than rehearsing the lift. The four current domains and weights are Client Onboarding and Assessments (23%), Program Design and Implementation (31%), Program Modification and Progression (27%), and Risk Management, Professional Conduct and Ethical Business Practices (19%). Because the unscored items are invisible, pacing is simple: move steadily, answer every item as if it counts, and flag uncertainties to review if time allows rather than freezing on any single scenario. Three hours for 150 items is a comfortable pace, so the risk is second-guessing, not running out of clock.',
    types: [
      { name: 'Scenario-based multiple choice', share: 'The large majority of the paper', detail: 'A described client with assessment or goal context, asking for the next best action, regression, progression, or fault identification. Distractors are plausible coach responses that skip a step or overstep scope.' },
      { name: 'IFT-model applied items', share: 'Heavy in Program Design and Modification (58% combined)', detail: 'Given a client status, identify the correct IFT stage or the next program variable to change. Requires the IFT progression to be reflexive.' },
      { name: 'Scope-of-practice and ethics items', share: 'Distributed across Domain 4 (19%)', detail: 'Asks where the trainer’s authority ends — nutrition advice, medical referral, consent, documentation. The over-helping answer is the classic trap.' },
      { name: 'Onboarding-to-design items', share: 'Bridges Domains 1 and 2', detail: 'An assessment finding leads to the first programming decision, testing the link ACE builds deliberately between onboarding and design.' }
    ],
    samples: [
      {
        prompt: 'A 68-year-old client with controlled hypertension and no resistance-training history wants to improve daily function. Using ACE’s Integrated Fitness Training model, the most appropriate starting emphasis is:',
        options: [
          'A. Maximal-strength loading at 3-5 reps to build bone density',
          'B. Stability and mobility training to establish movement quality first',
          'C. High-intensity metabolic circuits for cardiovascular health',
          'D. Olympic lifts for power development'
        ],
        answer: 'B',
        explanation: 'ACE’s IFT model begins older or deconditioned clients in the stability and mobility phase to establish safe, quality movement before load is added. A (maximal strength), C (high-intensity circuits) and D (Olympic lifts) all skip that foundation and raise risk for a 68-year-old novice, even one medically controlled. The exam repeatedly tests that the first IFT step is always movement quality before load or performance, regardless of the client’s goal.'
      },
      {
        prompt: 'During a movement screen, a client’s shoulders round forward and the head juts forward in standing posture. According to ACE principles, which pair of tissues is most likely overactive and should be inhibited first?',
        options: [
          'A. Lower traps and rhomboids',
          'B. Pectorals and upper trapezius/neck extensors',
          'C. Gluteus maximus and rectus abdominis',
          'D. Hamstrings and erector spinae'
        ],
        answer: 'B',
        explanation: 'Rounded shoulders with forward head posture reflects an overactive (shortened) pectorals and upper trapezius/neck extensors, with underactive lower traps and deep neck flexors. ACE’s correction sequence is inhibit the overactive tissue first (B), then activate and integrate the underactive tissue (the lower traps and rhomboids in A are the underactive ones to strengthen, not inhibit). C and D describe posterior-chain muscles not primary drivers of this upper-body pattern.'
      },
      {
        prompt: 'A client asks you to create a detailed daily meal plan with specific calorie and macronutrient targets for fat loss. Within ACE’s defined scope of practice, you should:',
        options: [
          'A. Provide the detailed plan because the client asked for it',
          'B. Decline all nutrition talk and refer out completely',
          'C. Offer general healthy-eating guidance but refer out for individualized prescription',
          'D. Prescribe macronutrient targets only, since that is not "medical"'
        ],
        answer: 'C',
        explanation: 'A CPT may give general, science-based healthy-eating education but must refer clients to a registered dietitian or physician for individualized meal plans, calorie prescription or medical nutrition therapy. C is exactly that boundary. A oversteps scope. B is too absolute — general guidance is allowed. D still crosses into individualized prescription. ACE tests this line heavily, and the instinct to "help" is the wrong answer.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'Three hours, 150 questions, delivered through Meazure Learning at a test centre or via online proctoring. The format is pass/fail against a scaled 500 on ACE’s 200-800 scale, with 25 unscored pretest items mixed invisibly into the form. As with every CPT exam, the most common reason a qualified candidate loses the seat is administrative, not technical: ACE requires a current CPR/AED certification with a live skills component to be eligible, and the name on your government ID must match your ACE account exactly. Confirm both the week before you schedule, not the morning of. At the centre you are checked in, seated, and given the full three hours; the clock does not stop for unscheduled breaks, so use the restroom first. The exam is computer-delivered and you can flag items to review before submitting — clear the items you are confident on, flag the scenario items that need a second read, and come back if time remains. Three hours for 150 items is a generous pace, so the failure mode is not the clock but second-guessing well-rehearsed IFT and assessment items; trust your first read on those.',
    bring: [
      'Two forms of identification, one a government-issued photo ID, with the name matching your ACE account exactly',
      'Your current CPR/AED card showing a live skills component — eligibility is checked',
      'Your ACE confirmation number or candidate ID in case check-in cannot locate the booking',
      'For online proctoring: a private room, working webcam and microphone, and a phone for check-in',
      'A removable layer; centre temperatures vary and you cannot leave for a jacket'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — secured in a locker at a centre',
      'All notes, textbooks, flashcards and printed study aids',
      'Your own paper and pens; the centre provides an erasable noteboard if one is permitted',
      'Bags, coats (beyond what you wear), food and drink beyond what the centre allows',
      'Any other person in the room for online proctoring; the session is recorded'
    ],
    timeline: [
      { time: 'The week before', detail: 'Verify your CPR/AED card is current with a live skills component and that your ID name matches your ACE account spelling exactly — both are hard gates.' },
      { time: '24 hours before', detail: 'For online proctoring, run the system check on the machine and network you will use. For a centre, confirm the address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin online check-in, which includes ID capture and a room scan.' },
      { time: 'Check-in', detail: 'ID verification, signature, locker for belongings, seating. Use the restroom now — the three-hour clock will not pause.' },
      { time: '0-5 minutes', detail: 'Read the tutorial screens; confirm flagging and review behaviour. Do not start answering until settled.' },
      { time: '5-170 minutes', detail: 'Work confident items first and flag scenario items for review. At ~150 items you have over a minute each before review — keep moving.' },
      { time: '170-180 minutes', detail: 'Review flagged items, then submit rather than letting the clock expire. The result is delivered on screen at submission.' }
    ],
    rules: [
      'Pass/fail against a scaled 500 on ACE’s 200-800 scale; 125 scored items plus 25 unscored pretest items mixed invisibly.',
      'Two forms of ID required, one government-issued with photo, names matching your ACE account exactly.',
      'A current CPR/AED certification with a live skills component is mandatory eligibility, checked before seating.',
      'You may flag items and review them before submitting; the clock does not stop for unscheduled breaks.',
      'Retake: a failed first attempt may be re-sat after a one-day wait; the retake fee is $249 unless bundled.',
      'NCCA-accredited; maintain with 20 CECs over the two-year cycle ($129 renewal for one credential).'
    ],
    afterwards:
      'Your pass or fail is delivered on screen when you submit. On a pass, ACE issues the CPT credential and you can claim the digital badge; the certification must be maintained with 20 CECs over a two-year cycle at a $129 renewal for one credential, so log the renewal date the day you pass and bank CECs from real work rather than scrambling at expiry. On a fail, the retake schedule is the key fact: you may re-sit after only a one-day wait, but each attempt costs $249 unless your package bundled one, and the 90-day window from original exam purchase may already be exhausted — you will likely need to repurchase the exam. Do not book the immediate retake out of frustration; instead identify whether you missed the IFT progression logic, the onboarding-to-design link, or the scope-of-practice lines, and drill that specific gap for a few days. The most common single weakness is over-investing in physiology and under-investing in the IFT model and modification decisions, which together are 58 percent of the exam — re-balance your study time by the published domain weights before you pay to sit again.'
  }
};

export default data;
