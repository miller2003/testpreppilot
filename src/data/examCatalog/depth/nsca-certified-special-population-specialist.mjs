const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Fitness & special-populations certification desk',
    bio: 'This guide is compiled and maintained by our fitness and allied-health-exercise desk. NSCA CSPS exam structure, domain weights, question count, timing, scoring, fees, pass-rate data and renewal requirements come from the official NSCA certification pages, and NSCA publishes exam pass-rate data for the CSPS, which we cite directly. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam structure, domain weights, question count, timing, scaled passing score, fees, pass-rate data, eligibility and the three-year CEU cycle were checked against the official NSCA CSPS exam description and certification pages.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$46,180 median for fitness trainers and instructors (SOC 39-9031, BLS May 2024) — the occupation the CSPS credential specialises within',
    summary:
      'The closest official occupation to the Certified Special Population Specialist role is Fitness Trainers and Instructors, SOC 39-9031, which had a May 2024 median wage of $46,180, with the lowest 10 percent earning less than $27,580 and the highest 10 percent more than $82,050. That fit is deliberate: the CSPS is NSCA\u2019s credential for fitness professionals who design exercise programs for clients with chronic or temporary health conditions — cardiovascular disease, cancer, diabetes, perinatal and post-rehabilitation clients, older adults and others — and those professionals work inside the fitness-trainer occupation that BLS describes, across medical fitness centres, community health organisations, corporate wellness programs and private training facilities. BLS projects 12 percent employment growth for fitness trainers and instructors from 2024 to 2034, much faster than the 3 percent all-occupations average, with about 74,200 openings a year — a strong tailwind driven by the emphasis on exercise to combat chronic disease and the growth of an older population seeking active living. The caveats matter. First, the wage distribution reflects all fitness trainers, many of whom are not CSPS-certified; the credential\u2019s realistic value is the specialisation signal — employers in medical-fitness and healthcare settings routinely prefer or require it for roles working with special populations — but BLS does not measure a certificate premium, and we will not invent one. Second, the CSPS is a niche specialisation on top of an eligibility base (a degree in exercise science or a related field, a current NSCA credential, or another NCCA-accredited personal-trainer certification), so the realistic candidate is already an established fitness professional; the salary story is about specialising and moving toward clinical and community settings rather than entering the occupation. Third, income for this occupation is unusually variable because many trainers work part-time or independently, so the median understates what full-time, specialisation-driven practice can earn.',
    rows: [
      { label: 'Median annual wage, fitness trainers and instructors', value: '$46,180', note: 'BLS OOH, SOC 39-9031, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $27,580', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $82,050', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '370,100 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~74,200 per year', note: 'BLS OOH Job Outlook, 2024-34' }
    ],
    growth: '12% projected change 2024-34 (much faster than average), with ~74,200 openings a year; the CSPS specialisation targets medical-fitness and community-health settings within this occupation',
    source: {
      label: 'BLS Occupational Outlook Handbook — Fitness Trainers and Instructors',
      url: 'https://www.bls.gov/ooh/personal-care-and-service/fitness-trainers-and-instructors.htm'
    }
  },

  passRate: {
    headline: 'NSCA publishes CSPS pass-rate data — 59% of candidates passed in 2022, on the official NSCA exam description page',
    summary:
      'NSCA publishes exam pass-rate data for the CSPS, and the official exam description page states that in 2022, 59 percent of candidates passed the CSPS exam — a figure worth taking seriously as the credential is genuinely difficult, with a scaled passing score of 70 on NSCA\u2019s 1-to-100 scaled scale. The exam itself is 110 total multiple-choice questions — 100 scored plus 10 non-scored pretest items — completed in 2.5 hours at a Pearson VUE test centre, and the passing standard is a scaled score of 70, which is not a percentage of questions correct; NSCA equates exam forms so the scaled 70 represents the same standard across different versions. The published content outline weights the four domains as Basic Pathophysiology and Science of Health Status, Condition, Disorder, or Disease at 40 percent, Client Consultation at 19 percent, Program Planning at 31 percent, and Safety, Emergency Procedures, and Legal Issues at 10 percent — so more than two-thirds of the paper lives in pathophysiology and program planning, which is the clinical reasoning the credential exists to test. The exam fee is $340 for NSCA members and $475 for non-members. Because NSCA publishes the 59 percent figure, the honest reading is that roughly four in ten first attempts do not pass, and the margin between pass and fail is a scaled score, not a raw percentage — which argues for preparing against the domain weights and aiming well above the threshold rather than at it.',
    source: {
      label: 'NSCA — Certified Special Population Specialist exam description',
      url: 'https://www.nsca.com/certification/csps/certified-special-population-specialist-exam-description/'
    },
    caveat:
      'NSCA publishes pass-rate data on its official exam description page — 59% of CSPS candidates passed in 2022. The 110-question/2.5-hour structure, the scaled passing score of 70, the $340/$475 fees and the domain weights are the published figures this narrative relies on alongside it.'
  },

  studyPlan: {
    summary:
      'Plan for ten to twelve weeks and 80 to 120 hours of study, and weight it to the published outline — Basic Pathophysiology is 40 percent and Program Planning is 31 percent, so more than two-thirds of the paper is clinical reasoning and program design rather than general fitness knowledge, which is exactly what the CSPS exists to test. The exam is 110 total questions — 100 scored plus 10 non-scored pretest items — in 2.5 hours, with a scaled passing score of 70, and NSCA\u2019s published figure that 59 percent of candidates passed in 2022 should shape your seriousness, not your confidence. The four domains are Basic Pathophysiology and Science of Health Status, Condition, Disorder, or Disease at 40 percent (cardiovascular, pulmonary, metabolic, immunologic and hematologic, musculoskeletal and orthopedic, neuromuscular, post-rehabilitation, cancer, female-specific conditions, behavioural and psychological disorders, older adults, and children and adolescents), Client Consultation at 19 percent (role, health appraisal, fitness evaluation), Program Planning at 31 percent (SMART goals, program design, motivational and coaching techniques, client outcomes, referrals), and Safety, Emergency Procedures, and Legal Issues at 10 percent (scope of practice, safety and emergency procedures, professional and legal responsibilities, HIPAA). The plan below assumes you meet the eligibility base — a bachelor\u2019s degree in exercise science or a related field, or a current NSCA or NCCA-accredited certification, plus current CPR/AED and 250 hours of practical experience. If you have not logged the 250 hours, that is the gate to clear first, because the exam\u2019s case-based reasoning assumes you have actually worked with special populations.',
    totalHours: '80-120 hours over 10-12 weeks',
    weeks: [
      {
        label: 'Weeks 1-3',
        focus: 'Basic pathophysiology (40%)',
        tasks: [
          'Work the largest domain methodically: cardiovascular, pulmonary, metabolic, immunologic and hematologic conditions',
          'Cover musculoskeletal and orthopedic conditions, neuromuscular conditions and post-rehabilitation populations',
          'Learn cancer, female-specific conditions, behavioural and psychological disorders, older adults, and children and adolescents',
          'Build a condition-by-condition sheet: pathophysiology, exercise considerations, contraindications and red flags'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Weeks 4-6',
        focus: 'Program planning (31%)',
        tasks: [
          'Master program design: SMART goals, exercise selection, intensity, progression and outcomes for special populations',
          'Learn motivational and coaching techniques and how to structure behaviour-change support',
          'Cover referrals: when and how to refer a client to other healthcare professionals',
          'Practise case-style items that pair a condition with a program-design decision'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Weeks 7-8',
        focus: 'Client consultation and safety/legal (29% combined)',
        tasks: [
          'Cover Client Consultation at 19%: the professional role, health appraisal and fitness evaluation',
          'Cover Safety, Emergency Procedures, and Legal Issues at 10%: scope of practice, emergency response, professional and legal responsibilities, HIPAA',
          'Learn the pre-exercise screening and evaluation flow every case is anchored to',
          'Drill the scope-of-practice and legal items — they are small in count but cheap to secure'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 9-10',
        focus: 'Timed rehearsal',
        tasks: [
          'Take two or three full 2.5-hour timed practice exams',
          'Re-lab every miss to a domain — most errors will cluster in pathophysiology by design',
          'Re-drill the case-style program-planning items',
          'Final pass over contraindications, red flags and the referral decision rules'
        ],
        hours: '8-10 hrs/week'
      }
    ],
    variants: [
      { label: 'Clinical exercise professional already', detail: 'Six to eight weeks. Your day job covers pathophysiology and screening; spend the recovered time on the program-planning and coaching domain, which clinical settings under-exercise, and on the exam\u2019s case-style format.' },
      { label: 'Personal trainer adding the specialisation', detail: 'Full twelve weeks at 8 hrs/week. The pathophysiology domain is the gap — front-load the condition-by-condition sheet and the case reasoning before touching program design.' },
      { label: 'Coming from the CSCS or NSCA-CPT', detail: 'Six to eight weeks. NSCA exam style, scaled scoring and Pearson VUE delivery are familiar; the new material is the depth of special-populations pathophysiology, which neither the CSCS nor NSCA-CPT tests at this level.' }
    ]
  },

  prepStrategies: {
    summary:
      'The strategy that reliably moves a CSPS score is "learn the pathophysiology as decision rules, practise the case-style program-design items, and rehearse the 2.5-hour clock", and the single biggest error is studying the exam like a general fitness test when the published outline puts 40 percent on Basic Pathophysiology and 31 percent on Program Planning — more than two-thirds of the paper is clinical reasoning. NSCA\u2019s published figure that 59 percent of candidates passed in 2022 should be read as the exam being genuinely selective, which argues for depth over breadth. The second proven approach is condition-by-condition learning: for each condition in the outline — cardiovascular disease, diabetes, cancer, osteoporosis, depression, post-rehabilitation — build a decision sheet covering the pathophysiology, the safe exercise considerations, the contraindications and the red flags, because the exam\u2019s case items pair a condition with a program decision and reward having that sheet in your head. Third, practise the referral and scope-of-practice judgement, because CSPS work sits at the boundary of fitness and healthcare, and items test when to refer and what is outside your scope. Fourth, use the official NSCA exam-prep materials and the certification handbook, which define the detailed content outline you should study from. Finally, rehearse timing with full 2.5-hour practice exams, because 110 questions including the 10 non-scored pretest items against a scaled-70 cut is a stamina event, and the pretest items are indistinguishable from scored ones.',
    items: [
      {
        title: 'Learn the pathology as decision rules',
        detail: 'Basic Pathophysiology is 40% of the paper. For each condition in the outline build a decision sheet — pathophysiology, safe exercise considerations, contraindications and red flags — because the case items pair a condition with a program decision and reward having that sheet in your head.'
      },
      {
        title: 'Practise the case-style program-design items',
        detail: 'Program Planning is 31%. Practise items that describe a client with a condition and ask for the correct program decision — goals, exercise selection, progression and outcomes — because that applied reasoning is the credential\u2019s entire reason to exist.'
      },
      {
        title: 'Drill scope of practice and referrals',
        detail: 'The CSPS sits at the boundary of fitness and healthcare. Learn when to refer a client to a physician or other professional and what is outside your scope — these items are small in count but cheap to secure and high-stakes in practice.'
      },
      {
        title: 'Study from the official NSCA materials',
        detail: 'The NSCA certification handbook and official exam-prep materials define the detailed content outline. Study from those before third-party resources, because the domain weights and terminology are the exam\u2019s source of truth.'
      },
      {
        title: 'Rehearse the 2.5-hour clock',
        detail: '110 questions in 2.5 hours against a scaled-70 cut is a stamina event, and the 10 non-scored pretest items are indistinguishable from scored ones. Run full timed practice exams so pacing and endurance are trained, not just content.'
      }
    ]
  },

  resourceComparison: {
    summary:
      'The CSPS buying decision is dominated by the exam fee — $340 for NSCA members and $475 for non-members, a $135 difference that makes membership a meaningful saving — and by the eligibility base, which requires a relevant degree or certification plus current CPR/AED and 250 hours of practical experience, so the total outlay includes whatever it cost to build that base. The official NSCA study materials, the certification handbook and the detailed content outline are the authoritative syllabus, and NSCA membership discounts exam registration, study materials and continuing education. The table below compares the main options with prices current to this review. The one category to treat with suspicion is braindump-style question banks: NSCA rotates and refreshes item pools, and the case-based, clinical-reasoning format rewards genuine understanding of the pathology and program-design domains rather than memorised questions.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CSPS exam registration', values: ['$340 member / $475 non-member', 'Computer-based at Pearson VUE', 'The exam itself — required'] },
      { label: 'NSCA membership', values: ['~$130-170/year depending on category', 'Member association', 'The $135 exam saving alone can cover most of the membership cost'] },
      { label: 'NSCA CSPS exam-prep materials and certification handbook', values: ['~$40-100', 'Printed and digital study materials', 'The authoritative syllabus and detailed content outline'] },
      { label: 'Exercise-science textbooks (physiology, special populations)', values: ['~$80-200', 'Textbook', 'Depth on the 40% pathophysiology domain'] },
      { label: 'Practice-exam providers and question banks', values: ['~$50-150', 'Online timed practice', 'Rehearsing the 2.5-hour format and the case-style items'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax; NSCA membership pricing varies by category, the exam fee does not include preparation materials, and candidates must hold the eligibility base — a relevant degree or certification, current CPR/AED and 250 hours of practical experience — before registering.'
  },

  commonMistakes: {
    summary:
      'The most common CSPS mistakes come from treating a clinical-reasoning exam like a general fitness test: studying exercise science broadly when the published outline puts 40 percent on Basic Pathophysiology, and under-practising the case-style program-design items that are the credential\u2019s core. Candidates also routinely underestimate the passing standard — NSCA\u2019s published 59 percent pass figure for 2022 is a real signal — and some sit without meeting the eligibility base of 250 hours of practical experience, which the case reasoning assumes. Scope-of-practice and referral items, though small in count, are an avoidable source of lost points when skipped.',
    items: [
      {
        mistake: 'Studying it like a general fitness exam',
        fix: 'The published outline puts 40% on Basic Pathophysiology and 31% on Program Planning — more than two-thirds of the paper is clinical reasoning and program design. Weight your calendar to the pathology and case-style items, not to general exercise science.'
      },
      {
        mistake: 'Under-practising case-style program design',
        fix: 'Program Planning is 31%, and the exam\u2019s case items pair a client\u2019s condition with a program decision. Practise that exact format until the decision flow — goals, exercise selection, progression, outcomes, referral — is reflexive.'
      },
      {
        mistake: 'Underestimating the passing standard',
        fix: 'NSCA publishes that 59% of candidates passed in 2022, and the cut is a scaled 70, not a percentage. Prepare to clear the threshold comfortably with practice scores well above it, rather than aiming at it.'
      },
      {
        mistake: 'Sitting before the eligibility base is real',
        fix: 'The CSPS requires a relevant degree or certification, current CPR/AED and 250 hours of practical experience with the populations the exam tests. If your practical hours are thin, extend the timeline — the case reasoning is unlearnable without real exposure to special populations.'
      },
      {
        mistake: 'Skipping the scope-of-practice and referral items',
        fix: 'Safety, Emergency Procedures, and Legal Issues is 10%, and its scope-of-practice and referral items are cheap to secure once learned. Skipping them gives away a whole block of earnable points on an exam where the pass margin is a scaled score.'
      }
    ]
  },

  questionTypes: {
    summary:
      'The CSPS exam is 110 total multiple-choice questions — 100 scored plus 10 non-scored pretest items — completed in 2.5 hours at a Pearson VUE test centre, with a scaled passing score of 70 on NSCA\u2019s 1-to-100 scale, and NSCA\u2019s published figure is that 59 percent of candidates passed in 2022. The paper is organised around four domains, with Basic Pathophysiology and Science of Health Status, Condition, Disorder, or Disease the largest at 40 percent, Program Planning at 31 percent, Client Consultation at 19 percent, and Safety, Emergency Procedures, and Legal Issues at 10 percent. The dominant question style is case-based and applied: a client with a stated condition and a clinical situation, followed by a question about the appropriate exercise program, the correct progression, the red flag that warrants referral, or the safe screening decision. Single-answer items dominate, with the case reasoning concentrated in the pathophysiology and program-planning domains, and the 10 non-scored pretest items are randomly distributed and indistinguishable from scored items, so every question must be treated as if it counts. Because the passing standard is a scaled score rather than a percentage, candidates should aim to answer accurately across all four domains rather than target a raw count, and the 40-percent pathophysiology weight means a candidate who is strong there has already covered the largest share of the paper. The samples below are editor-written illustrations of the published blueprint\u2019s question styles, not live exam items.',
    types: [
      { name: 'Pathophysiology case items', share: '~40%', detail: 'A client with a stated condition — cardiovascular disease, diabetes, cancer, osteoporosis, depression and others — and a question about the physiology, safe exercise considerations, contraindications or red flags. The largest single domain.' },
      { name: 'Program-design items', share: '~31%', detail: 'Given the client and condition, select the correct program decision — SMART goals, exercise selection, intensity, progression and outcomes. The applied reasoning the credential exists to test.' },
      { name: 'Client-consultation items', share: '~19%', detail: 'The professional role, health appraisal and fitness evaluation — the screening and evaluation flow that every case is anchored to.' },
      { name: 'Safety, emergency and legal items', share: '~10%', detail: 'Scope of practice, emergency procedures, professional and legal responsibilities and HIPAA. Small in count but cheap to secure once learned.' },
      { name: 'Unscored pretest items', share: '10 of 110', detail: 'Randomly distributed pilot items with no effect on the result, indistinguishable from scored items — treat every question as if it counts.' }
    ],
    samples: [
      {
        prompt: 'A 58-year-old client with type 2 diabetes is starting an exercise program and currently controls the condition with oral medication. Which is the most appropriate exercise-program consideration?',
        options: [
          'A. Avoid all aerobic exercise to prevent hypoglycemia',
          'B. Include regular aerobic and resistance training with blood-glucose monitoring and a plan for hypoglycemia management',
          'C. Restrict the client to low-intensity stretching only',
          'D. Recommend exercise only after a supervised glucose challenge every session'
        ],
        answer: 'B',
        explanation: 'For a client with type 2 diabetes, the evidence-based approach is regular aerobic and resistance training, with blood-glucose monitoring and a plan to recognise and treat hypoglycemia — exercise is beneficial for glucose control and the risk is managed, not avoided. A is wrong because avoiding aerobic exercise denies the client the primary benefit. C is wrong because stretching alone is insufficient for the metabolic goals. D is wrong because a supervised glucose challenge every session is not a standard requirement for a client whose condition is controlled with oral medication.'
      },
      {
        prompt: 'During a session, a client with known cardiovascular disease reports new chest discomfort that is not relieved by rest. What is the correct immediate action?',
        options: [
          'A. Continue at a reduced intensity to finish the session',
          'B. Stop the exercise, activate the emergency response plan and contact emergency medical services',
          'C. Ask the client to perform light stretching to see if it resolves',
          'D. Document the report and adjust the next session\u2019s plan'
        ],
        answer: 'B',
        explanation: 'New chest discomfort in a client with known cardiovascular disease, not relieved by rest, is a red-flag emergency: stop the exercise, activate the facility emergency response plan and contact emergency medical services. A is wrong because continuing at any intensity ignores a potentially life-threatening sign. C is wrong because testing whether stretching resolves cardiac-sounding discomfort delays emergency care. D is wrong because documenting and adjusting the next session does nothing about the current emergency.'
      },
      {
        prompt: 'A client recovering from a knee replacement asks to begin a strength program. Which exercise-selection consideration is most appropriate early in the program?',
        options: [
          'A. High-intensity, heavy-load knee flexion with full weight bearing immediately',
          'B. Low-impact, progressive exercise respecting the surgical precautions and clearance from the physician',
          'C. Only upper-body training until the physician clears any lower-extremity work',
          'D. Plyometric exercises to restore function quickly'
        ],
        answer: 'B',
        explanation: 'Early post-rehabilitation strength work for a client after joint replacement should be low-impact and progressive, respecting the surgeon\u2019s precautions and the physician\u2019s clearance — exercise progression is guided by the surgical protocol, not by an arbitrary timeline. A is wrong because high-intensity, heavy loading immediately after surgery risks the reconstruction. C is wrong because upper-body-only work ignores the lower-extremity rehabilitation the client needs, subject to precautions. D is wrong because plyometrics are advanced loading, inappropriate early in the recovery window.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      'The CSPS exam is 110 total multiple-choice questions — 100 scored plus 10 non-scored pretest items — in 2.5 hours at a Pearson VUE test centre, scored on NSCA\u2019s 1-to-100 scaled scale with a passing score of 70, and NSCA\u2019s published figure that 59 percent of candidates passed in 2022 is the honest context for the day. Exam day means travelling to a Pearson VUE centre with a valid, government-issued photo ID matching your registration, arriving early for check-in and the secure-room process, and leaving phones, smartwatches and all personal items in a locker — the exam is closed-book, and the only permitted aid is the whiteboard or scratch material the centre provides. The 2.5-hour clock starts when the exam loads, and the pacing plan must account for the paper\u2019s shape: the pathophysiology case items in the 40-percent domain take more reasoning time than recall items, so the practical approach is to work steadily, flag case items you cannot resolve quickly, and protect time for the final stretch. The 10 non-scored pretest items are randomly distributed and indistinguishable from scored ones, so every question must be treated as if it counts. You receive a pass or fail decision and your scaled score at the centre after the exam. On a pass, the credential is maintained on NSCA\u2019s three-year cycle with continuing education units and a current CPR/AED certification.',
    bring: [
      'A valid, government-issued photo ID matching your registration name exactly',
      'Your exam confirmation and scheduling details',
      'Water and a snack for before the exam, per the centre\u2019s rules',
      'Transport plan that gets you to the centre 30-45 minutes early for check-in'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker at the centre',
      'All notes, study materials and printed references — the exam is fully closed-book',
      'Bags, coats, food and drink beyond what the centre permits',
      'Loose paper — the centre provides any permitted scratch material',
      'Any assumption that the 10 unscored pretest items can be identified — treat every question as scored'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm the test centre address, check-in time and ID requirements, and verify your NSCA/Pearson VUE registration details are correct.' },
      { time: '24 hours before', detail: 'Lay out your ID and confirmation, plan the travel route, and do a final pass over the pathophysiology red-flag log.' },
      { time: '45 minutes before', detail: 'Arrive early for check-in: expect ID verification, a face photograph and a locker before you are seated.' },
      { time: '0-10 minutes', detail: 'Start with the consultation and safety items at a steady pace to build rhythm; flag the long pathophysiology cases rather than dwelling.' },
      { time: '10-130 minutes', detail: 'Work through the paper in domain proportion, giving the pathophysiology and program-design cases the time their 71% combined weight justifies.' },
      { time: 'Final 20 minutes', detail: 'Return to flagged case items, apply the decision rules to any remaining doubts, and submit — you receive the pass/fail decision and scaled score at the centre.' }
    ],
    rules: [
      '110 total multiple-choice questions — 100 scored plus 10 non-scored pretest items — in 2.5 hours; the clock does not stop.',
      'A scaled score of 70 on the 1-to-100 scale is required to pass; it is not a percentage of questions correct.',
      'The exam is computer-based at Pearson VUE test centres and fully closed-book.',
      'The 10 non-scored pretest items are indistinguishable from scored items — treat every question as if it counts.',
      'The exam fee is $340 for NSCA members and $475 for non-members.',
      'Candidates must meet the eligibility base — a relevant degree or certification, current CPR/AED and 250 hours of practical experience.',
      'The credential is renewed on NSCA\u2019s three-year cycle with continuing education units and a current CPR/AED certification.'
    ],
    afterwards:
      'You receive a pass or fail decision and your scaled score at the testing centre, so you know the outcome immediately. On a pass, the CSPS is maintained on NSCA\u2019s three-year recertification cycle: earn the required continuing education units across the cycle — 6.0 CEUs for a full three-year cycle under the current reporting framework, pro-rated for certifications earned mid-cycle — report them through your NSCA account, keep a current CPR/AED certification and pay the recertification fee. On a fail, NSCA\u2019s retake process requires a new registration at the full fee, so the correct response is a deliberate gap-closing sprint: re-drill the 40-percent pathophysiology domain and the 31-percent program-planning cases, take full timed practice exams until scores clear the scaled threshold comfortably, and re-sit. The credential sits in a growing niche of the fitness occupation — BLS projects 12 percent growth for fitness trainers and instructors through 2034 with a $46,180 median — and the CSPS is the specialisation signal that medical-fitness centres, community health organisations and healthcare-adjacent settings use to identify professionals qualified to work with clients who have chronic or temporary health conditions, so the pass translates into eligibility for the clinical-end roles in the fitness labor market.'
  }
};

export default data;
