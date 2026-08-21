// Depth content for: acsm-certified-personal-trainer
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Health, fitness & recreation certifications desk',
    bio: 'This guide is compiled and maintained by our fitness-certifications desk. ACSM revises the CPT exam content outline periodically, so we track it by the current published Job Task Analysis and state plainly when a number is ACSM-published versus a third-party estimate. Fees, format, scoring and retake rules come from the American College of Sports Medicine certification pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam domains, weights, format, fees and scoring were taken from ACSM\'s official Certified Personal Trainer Exam Content Outline (effective July 10, 2025) and ACSM certification FAQ.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$46,180 median for fitness trainers and instructors (BLS, May 2024)',
    summary:
      'There is no Bureau of Labor Statistics occupation literally named "personal trainer", so any precise figure tied to that title is a job-board aggregate rather than government data. The correct official fit is Fitness Trainers and Instructors, because the ACSM CPT authorizes exactly that work: one-on-one and small-group training, client assessment, and program design for apparently healthy clients and those with medical clearance. That occupation had a May 2024 median wage of $46,180, with the lowest 10 percent under $27,580 and the highest 10 percent over $82,050. The distribution is genuinely wide and worth reading carefully: a trainer at a corporate gym on hourly floor time sits near the bottom, while a trainer who builds a private client roster, adds a specialization, or runs their own studio moves toward the top decile — the credential is the entry requirement, not the income ceiling. BLS counted 370,100 fitness trainers and instructors in 2024 and projects 12 percent growth from 2024 to 2034, much faster than the average for all occupations, driven by preventive-health and active-aging demand, with roughly 74,200 openings a year. The honest takeaway for an ACSM candidate is the same as for any CPT candidate: the certificate gets you past the employer minimum, but the wage gap above the median is earned through client retention, business skill and stacked specializations, not by the pass alone. ACSM sits in the same BLS occupation as NASM, ACE and ISSA, so BLS does not separate them — choose between the programmes on curriculum and delivery fit, not on a salary difference that the data does not show.',
    rows: [
      { label: 'Median annual wage, fitness trainers and instructors', value: '$46,180', note: 'BLS Occupational Outlook Handbook, May 2024 ($22.20/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $27,580', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $82,050', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '370,100 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~74,200 per year', note: 'BLS OOH Job Outlook, 2024-34 — replacement and growth openings' }
    ],
    growth: '12% projected growth 2024-34 (much faster than average); ~74,200 openings a year. ACSM, NASM, ACE and ISSA sit in the same BLS occupation, so pick on curriculum fit, not salary, which BLS does not split by certificate.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Fitness Trainers and Instructors',
      url: 'https://www.bls.gov/ooh/personal-care-and-service/fitness-trainers-and-instructors.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'ACSM publishes no pass rate — the passing score is a scaled 550 on a 200-800 scale',
    summary:
      'ACSM does not publish a pass-rate statistic for the CPT exam. We state this plainly: there is no official number to cite, and the pass-rate percentages you will see quoted in forums and prep-vendor blogs are third-party estimates, not ACSM figures, so we have left them out rather than repeat them. What ACSM does publish is the structural detail that matters for planning. The exam is 135 items in a 150-minute seat time, of which 120 are scored and 15 are unscored pretest items embedded indistinguishably, and it is pass/fail against a scaled passing score of 550 on a 200-800 scale — a scaled, equated standard, not a raw percentage of items correct. Because the pretest items are indistinguishable, you cannot tell which questions count, so the only safe strategy is to treat every item as scored. The exam content follows the current Job Task Analysis with four performance domains: Initial Client Consultation and Assessment (25 percent), Exercise Programming and Implementation (43 percent), Exercise Leadership and Client Education (22 percent), and Legal and Professional Responsibilities (10 percent) — and the weighting is the planning key: Exercise Programming alone is 43 percent of the paper, so program-design items dominate. Eligibility is also published and matters early: you must be at least 18, hold a high school diploma or equivalent, and hold a current adult CPR/AED certification, which you must present at the exam or within 90 days of passing. The practical reading is that the exam is passable on a prepared first attempt and that the cost of under-preparing is a paid retake, so preparing once and properly is the economical path.',
    source: {
      label: 'ACSM — CPT exam content outline and certification FAQ',
      url: 'https://www.acsm.org/certification/get-certified'
    },
    caveat:
      'ACSM publishes no pass rate. Published and verifiable: 135 items (120 scored + 15 unscored pretest) in 150 minutes; scaled passing score 550 on a 200-800 scale; eligibility requires age 18+, a high school diploma or equivalent, and a current adult CPR/AED certification.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'Three eligibility gates shape the plan before any studying begins: ACSM requires candidates to be at least 18, to hold a high school diploma or equivalent, and to hold a current adult CPR/AED certification — and that CPR/AED card must be presented at the exam or within 90 days of passing, so it is not something to sort out the week of your test. The current ACSM-CPT exam has four performance domains from the Job Task Analysis: Initial Client Consultation and Assessment (25%), Exercise Programming and Implementation (43%), Exercise Leadership and Client Education (22%), and Legal and Professional Responsibilities (10%). The weighting is the planning key: Exercise Programming and Implementation is 43 percent of the paper, so the candidate who spends their time on anatomy trivia and skims the programming decisions will lose the most cheap points; conversely, a candidate who masters the FITT-principle application and progression logic has secured the largest single chunk of the exam. ACSM items are written at three cognitive levels — recall, application, and synthesis — and the applied and synthesis items (given a client, decide the correct next step) dominate the weight, so rote memorisation is not a viable strategy. The plan below runs eight weeks at roughly 10-12 hours a week, with the first two weeks on the science foundation, the middle three weeks on assessment and programming (the 68 percent of the exam that decides the outcome), and the final three weeks on leadership, legal topics, and timed full-length practice.',
    totalHours: '85-105 hours',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Science foundation — anatomy, physiology, kinesiology',
        tasks: [
          'Confirm eligibility: age, diploma, and current adult CPR/AED card; renew the card if it will lapse before your exam window',
          'Anatomy and kinesiology: major muscles and actions, joint types, planes of motion, muscle contraction types',
          'Exercise physiology: energy systems (ATP-PC, glycolytic, oxidative), cardiorespiratory responses, VO2max concepts',
          'Metabolic calculations basics — the exam provides a calculator and exhibits, but you must know the methods'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Week 3',
        focus: 'Domain I — Initial Client Consultation and Assessment (25%)',
        tasks: [
          'Pre-participation screening: PAR-Q+, health-history questionnaires, and when to require medical clearance',
          'Risk stratification and the ACSM screening framework — the referral lines are testable',
          'Fitness assessments: cardiorespiratory (including the 12-minute walk test), muscular strength and endurance, flexibility, body composition',
          'Behavioural readiness and goal setting — adherence strategies are scored in this domain'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Weeks 4-5',
        focus: 'Domain II — Exercise Programming and Implementation (43%)',
        tasks: [
          'FITT principle applied to cardiorespiratory, resistance, flexibility and neuromotor programming',
          'Program design decisions: exercise selection, order, sets, reps, rest, intensity and progression',
          'Special populations and medical conditions: hypertension, diabetes, obesity, older adults, pregnancy — with medical clearance',
          'Practise "given this client, what is the next program decision" scenarios until the logic is automatic'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Week 6',
        focus: 'Domain III — Exercise Leadership and Client Education (22%)',
        tasks: [
          'Cueing, demonstration and instruction for major movement patterns',
          'Motivation and adherence: communication strategies, behavioural change models, goal setting',
          'Educating clients with evidence-based, science-backed resources',
          'Rehearse teaching movements aloud — the exam grades applied instruction logic'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Week 7',
        focus: 'Domain IV — Legal and Professional Responsibilities (10%)',
        tasks: [
          'Scope of practice, code of ethics, confidentiality, informed consent and documentation',
          'Emergency procedures and risk management in the training environment',
          'Referral pathways and collaboration with healthcare professionals',
          'Drill the ethics and scope items — they are easy points and frequently overstepped from habit'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Week 8',
        focus: 'Timed full exams and gap closing',
        tasks: [
          'Three timed 135-item practice exams completed in a single 150-minute sitting each',
          'Re-drill every programming and assessment decision you missed, not just the concept name',
          'Final pass over the referral lines, FITT applications and ethics items — the cheapest points on the paper',
          'Confirm the CPR/AED card is current and will be presentable at the exam or within 90 days of passing'
        ],
        hours: '10-12 hrs'
      }
    ],
    variants: [
      { label: 'Kinesiology or exercise-science student', detail: 'Five to six weeks at 10-12 hrs/week. Your science base is solid; spend the time on the ACSM JTA\'s applied and synthesis items and the programming domain, where rote knowledge alone does not score.' },
      { label: 'Career changer with no fitness background', detail: 'Ten to twelve weeks at 9 hrs/week. Add three weeks before Week 1 on anatomy and physiology; the exam assumes a college-level science base, and the applied items require fluent movement vocabulary.' },
      { label: 'Already NASM- or ACE-certified, adding ACSM', detail: 'Five to six weeks. You know the science and cueing; the gap is ACSM\'s specific JTA weighting (programming at 43%), its screening-and-clearance framework, and its scaled 550 scoring. Learn the framework and the phrasing and you will convert quickly.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'ACSM writes an applied exam: the Job Task Analysis weights application and synthesis heavily, and the largest domain — Exercise Programming and Implementation at 43 percent — is almost entirely applied. The highest-leverage preparation is therefore learning to make program decisions from a client profile, not memorising definitions, and the strategies below are ordered by score impact.',
    items: [
      {
        title: 'Drill the "given this client, what next" decision logic',
        detail: 'The exam\'s application and synthesis items hand you a client — age, health history, medications, assessment results, goals — and ask for the correct next step: the right FITT prescription, the right assessment, or the right referral. Practise this decision shape until it is reflexive, because the programming domain (43%) and the assessment domain (25%) are built on it. Rote learners answer the recall items and lose the applied majority.'
      },
      {
        title: 'Master the screening-and-clearance framework',
        detail: 'Domain I scores pre-participation screening: PAR-Q+, health-history review, risk stratification, and the referral lines — when a client needs medical clearance before you proceed. The "helpful" answer that proceeds without clearance is the classic trap. Lock the framework and you collect easy points across assessment and programming items that reference it.'
      },
      {
        title: 'Know the 15 unscored items are invisible',
        detail: 'Fifteen of the 135 items are unscored pretest items embedded indistinguishably. You cannot identify them, so treating any item as "probably experimental" risks dropping real points. Answer every item as if it scores, and do not waste time guessing which are pretest.'
      },
      {
        title: 'Secure the legal and professional items',
        detail: 'Domain IV (10%) is the easiest points on the paper: scope of practice, ethics, confidentiality, informed consent, documentation, and emergency response. The over-helping answer — advising beyond scope — is the recurring trap. Memorise the boundaries and collect the domain.'
      },
      {
        title: 'Use ACSM\'s own JTA as the study map',
        detail: 'The Job Task Analysis is the authoritative blueprint, and the exam questions are all based on it. Work through its task statements as a checklist rather than studying generic personal-trainer material; candidates who study outside the JTA routinely waste hours on topics the exam does not weight.'
      },
      {
        title: 'Practise with a 150-minute clock',
        detail: '135 items in 150 minutes is about 66 seconds per item — comfortable for the recall items and tight for the applied scenarios. Timed practice builds the discipline to move past a hard item and return to it, which is the difference between finishing and rushing the final domain.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'ACSM sells the exam through Pearson VUE registration and publishes its own study materials; the buying decision is whether to use ACSM\'s official resources (the exam-content outline is free and authoritative), add ACSM\'s prep products, or supplement with third-party question banks. Because the exam is JTA-based and applied, the highest-value resources are the official outline plus timed practice banks that mimic the applied-item style.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ACSM CPT Exam Content Outline (JTA)', values: ['Free', 'PDF from ACSM', 'The authoritative blueprint — study to its task statements' ], },
      { label: 'ACSM Resources for the Personal Trainer (textbook)', values: ['~$80-100', 'Print + digital', 'The official companion text mapped to the exam content' ], },
      { label: 'ACSM Guidelines for Exercise Testing and Prescription', values: ['~$90-120', 'Print + digital', 'The reference the exam is drawn from; strongest for assessment and programming depth' ], },
      { label: 'Exam registration (Pearson VUE)', values: ['~$310-410 (member/non-member pricing; confirm at acsm.org)', 'Pearson VUE centre or online proctoring', 'Required — book after practice scores clear a comfortable margin' ], },
      { label: 'Third-party practice banks (e.g., Pocket Prep, Mometrix)', values: ['~$30-100', 'Mobile/web timed question banks', 'Volume drilling and applied-item practice; pair with the official outline' ], },
      { label: 'Adult CPR/AED course', values: ['~$50-100', 'In-person or blended with skills check', 'Mandatory eligibility — must be presentable at the exam or within 90 days of passing' ]
      }
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; ACSM fee and exam-pricing details can change, so confirm at acsm.org and Pearson VUE before buying. We do not rank by commission. Renewal is every 3 years via continuing education credits or re-examination.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'ACSM is passable, but the failure modes are predictable and almost all come from treating it as generic fitness knowledge rather than its own JTA-weighted, applied blueprint. The six below cover the recurring traps; the theme is that candidates lose the most where ACSM\'s framework differs from what they already "know" from another cert or from the gym floor.',
    items: [
      {
        mistake: 'Studying outside the Job Task Analysis',
        fix: 'The exam questions are all based on the JTA, and programming plus assessment carry 68 percent of the weight. Candidates who study generic personal-trainer material waste hours on topics the exam does not weight. Work the JTA\'s task statements as a checklist and budget study time by the published domain percentages.'
      },
      {
        mistake: 'Treating applied items as definitions',
        fix: 'ACSM asks what you do next for a described client — the correct FITT prescription, the correct assessment, or the correct referral — not what a term means. Practise the decision, not the definition. When you miss an item, write the one-sentence action it wanted, and the ACSM pattern becomes visible.'
      },
      {
        mistake: 'Overstepping scope of practice and clearance lines',
        fix: 'Screening-and-clearance items test when a client needs medical approval before you proceed, and the over-helping answer — exercising a client who should be referred — is the classic trap. The same logic runs through the legal-and-professional domain. Lock the referral boundaries and collect easy points.'
      },
      {
        mistake: 'Ignoring the invisible unscored items',
        fix: 'Fifteen of the 135 items are unscored pretest items mixed in indistinguishably. You cannot identify them, so treating any item as "probably experimental" risks dropping real points. Answer every item as if it scores.'
      },
      {
        mistake: 'Arriving without a current adult CPR/AED card',
        fix: 'The adult CPR/AED certification is a hard eligibility gate — it must be presented at the exam or within 90 days of passing. Candidates who let it lapse or take a version without the skills check are turned away or risk a lapsed credential. Verify the card\'s currency and skills component before you book.'
      },
      {
        mistake: 'Ignoring the programming-domain weight',
        fix: 'Exercise Programming and Implementation is 43 percent of the paper and almost entirely applied. Candidates who spend their time on anatomy recall and skim program-design decisions lose the largest single chunk of the exam. Budget by the JTA percentages, not by what feels interesting.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The ACSM-CPT exam is 135 items in a 150-minute seat time, of which 120 are scored and 15 are unscored pretest items embedded without identification. It is pass/fail against a scaled passing score of 550 on a 200-800 scale, delivered through Pearson VUE at a test centre or via online proctoring, with a calculator provided inside the exam for the calculation items. ACSM writes items at three cognitive levels — recall, application, and synthesis — and the applied majority dominate the weight: a described client with a health history, assessment results and a goal, asking for the correct next step in screening, assessment, programming or referral. The four performance domains are Initial Client Consultation and Assessment (25%), Exercise Programming and Implementation (43%), Exercise Leadership and Client Education (22%), and Legal and Professional Responsibilities (10%). Because the pretest items are invisible, pacing is simple: move steadily at about 66 seconds per item, answer everything as if it scores, and flag uncertainties to review rather than freezing on any single scenario. The exam has no practical or performance component — hands-on skill is assessed by employers, not by this test — which is why rehearsing the decision in words matters more than rehearsing the lift.',
    types: [
      { name: 'Recall items', share: 'A minority of the paper', detail: 'Basic facts and steps — screening forms, definitions, assessment protocols. Straightforward points for the prepared candidate.' },
      { name: 'Application items', share: 'The largest share', detail: 'Given a client profile, select the correct FITT prescription, assessment, progression or referral. Distractors are plausible coach responses that skip a step or overstep scope.' },
      { name: 'Synthesis items', share: 'A substantial minority', detail: 'Analyse a fuller scenario and make a judgement — critique a plan, decide the next action across domains. Heaviest in the programming and leadership domains.' },
      { name: 'Calculation items', share: 'Present, with an in-exam calculator', detail: 'Metabolic and prescription calculations; the calculator is provided, but the method must be known.' }
    ],
    samples: [
      {
        prompt: 'During a pre-participation screening, a new client reports high blood pressure, is on medication, and has not had a physical examination in over a year. According to ACSM screening guidelines, what is the most appropriate next step?',
        options: [
          'A. Begin a moderate-intensity program immediately to lower the blood pressure',
          'B. Refer the client for medical clearance before starting exercise testing or programming',
          'C. Proceed with a low-intensity program and monitor closely',
          'D. Complete a maximal exercise test to assess risk'
        ],
        answer: 'B',
        explanation: 'A client with known cardiovascular risk factors, current medication and no recent medical evaluation falls into the category where ACSM screening requires medical clearance before exercise testing or programming begins (B). A and C proceed with exercise, which is exactly the over-helping error the screening framework guards against. D runs a maximal test, which requires clearance and is inappropriate pre-clearance. The discriminator is knowing when the screening framework stops you — the most-tested decision in Domain I.'
      },
      {
        prompt: 'A healthy 35-year-old client wants to improve cardiorespiratory fitness. Using the FITT principle, which prescription is most appropriate for the initial phase?',
        options: [
          'A. 5-7 days per week at vigorous intensity for 60 minutes',
          'B. 3-5 days per week at moderate intensity, 30-60 minutes per session',
          'C. 1 day per week at any intensity',
          'D. Daily high-intensity interval training with no rest days'
        ],
        answer: 'B',
        explanation: 'ACSM\'s cardiorespiratory recommendations for apparently healthy adults start at 3-5 days per week, moderate intensity, 30-60 minutes per session (B). A over-prescribes frequency and intensity for the initial phase, risking adherence and safety. C under-prescribes and will not produce the desired adaptation. D ignores recovery and progression, the opposite of the programming logic the exam tests. The item rewards knowing the published FITT ranges and applying them to the described client.'
      },
      {
        prompt: 'A client\'s health-history form indicates they have a diagnosed heart condition. The client asks you to design a program anyway. Within ACSM\'s scope of practice, you should:',
        options: [
          'A. Design the program and monitor the client closely',
          'B. Refer the client to their physician for medical clearance before any testing or programming',
          'C. Design a low-intensity program only',
          'D. Decline to work with the client entirely'
        ],
        answer: 'B',
        explanation: 'A diagnosed heart condition places the client in the category requiring medical clearance before exercise testing or programming (B). A and C proceed without clearance, violating the screening framework. D is too absolute — the CPT can work with the client after clearance is obtained; the referral is a gate, not a refusal. ACSM tests this boundary precisely, and the "helpful" answer is the wrong answer.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'One hundred thirty-five items in 150 minutes, delivered through Pearson VUE at a test centre or via online proctoring, pass/fail against a scaled 550 on a 200-800 scale, with 15 unscored pretest items mixed invisibly into the form. As with every CPT exam, the most common reason a qualified candidate loses the seat is administrative, not technical: ACSM requires a current adult CPR/AED certification, which must be presented at the exam or within 90 days of passing, and the name on your government ID must match your ACSM account exactly. Confirm both the week before you schedule, not the morning of. At the centre you are checked in, photographed, and seated; a calculator is provided inside the exam interface for the calculation items, and no personal materials are allowed. The 150-minute clock runs continuously — there are no scheduled breaks, so use the restroom first. The exam is computer-delivered and you can flag items to review before submitting: clear the recall items you are confident on, flag the applied scenarios that need a second read, and come back if time remains. At about 66 seconds per item, the failure mode is not the clock but second-guessing well-rehearsed screening and programming decisions — trust your first read on those, because the applied items reward the framework answer, not the over-thought one.',
    bring: [
      'Two forms of identification, one a government-issued photo ID, with the name matching your ACSM account exactly',
      'Your current adult CPR/AED certification — must be presented at the exam or within 90 days of passing',
      'Your Pearson VUE confirmation or candidate ID in case check-in cannot locate the booking',
      'For online proctoring: a private room, working webcam and microphone, and a phone for check-in',
      'A removable layer; centre temperatures vary and you cannot leave for a jacket'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — secured in a locker at a centre',
      'All notes, textbooks, flashcards and printed study aids',
      'Personal calculators and scratch paper; the exam provides an in-interface calculator',
      'Bags, coats (beyond what you wear), food and drink beyond what the centre allows',
      'Any other person in the room for online proctoring; the session is recorded'
    ],
    timeline: [
      { time: 'The week before', detail: 'Verify your adult CPR/AED card is current and presentable, and that your ID name matches your ACSM account spelling exactly — both are hard gates.' },
      { time: '24 hours before', detail: 'For online proctoring, run the system check on the machine and network you will use. For a centre, confirm the address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin online check-in, which includes ID capture and a room scan.' },
      { time: 'Check-in', detail: 'ID verification, signature, locker for belongings, seating. Use the restroom now — the 150-minute clock will not pause.' },
      { time: '0-5 minutes', detail: 'Read the tutorial screens; confirm flagging and review behaviour. Do not start answering until settled.' },
      { time: '5-140 minutes', detail: 'Work confident items first and flag applied scenarios for review. At ~66 seconds per item, keep moving; trust the framework answers on first read.' },
      { time: '140-150 minutes', detail: 'Review flagged items, then submit rather than letting the clock expire. The result is delivered on screen at submission.' }
    ],
    rules: [
      '135 items (120 scored + 15 unscored pretest) in 150 minutes; pass/fail against a scaled 550 on a 200-800 scale.',
      'Two forms of ID required, one government-issued with photo, names matching your ACSM account exactly.',
      'A current adult CPR/AED certification is mandatory eligibility, presented at the exam or within 90 days of passing.',
      'A calculator is provided inside the exam interface; personal calculators and materials are not allowed.',
      'You may flag items and review them before submitting; the clock does not stop for unscheduled breaks.',
      'Credential valid 3 years; renew via continuing education credits or re-examination.'
    ],
    afterwards:
      'Your pass or fail is delivered on screen when you submit, and ACSM emails your score report with instructions for accessing it. On a pass, the credential is valid for three years and is renewed with continuing education credits or by re-examination, so log the renewal date the day you pass and bank CECs from real work rather than scrambling at expiry. On a fail, the scaled-score report tells you how you performed relative to the passing standard; use the domain-level information to decide where to aim the retake — for most candidates the gap is the applied programming and screening decisions, not the recall items, so re-drill "given this client, what next" scenarios rather than re-reading definitions. The credential is ACSM-published as scaled, equated and consistent across forms, so a narrow fail is a signal to practise decisions, not to doubt your knowledge. Do not book the immediate retake out of frustration; the most common single weakness is under-investing in the 68 percent of the exam made up by assessment and programming, so re-balance your study time by the JTA percentages before you pay to sit again.'
  }
};

export default data;
