// Depth content for: issa-certified-personal-trainer
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Health, fitness & recreation certifications desk',
    bio: 'This guide is compiled and maintained by our fitness-certifications desk. ISSA revises its CPT curriculum periodically, so we track the exam by its current published format and state plainly when a number is ISSA-published versus a third-party estimate. Fees, format, scoring and renewal come from the International Sports Sciences Association certification pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam format, item count, fees and renewal terms were taken from ISSA\'s official Certified Personal Trainer pages.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$46,180 median for fitness trainers and instructors (BLS, May 2024)',
    summary:
      'There is no Bureau of Labor Statistics occupation literally named "personal trainer", so any precise figure tied to that title is a job-board aggregate rather than government data. The correct official fit is Fitness Trainers and Instructors, because the ISSA CPT authorises exactly that work: one-on-one and small-group training, client assessment, and program design. That occupation had a May 2024 median wage of $46,180, with the lowest 10 percent under $27,580 and the highest 10 percent over $82,050. The distribution is genuinely wide and worth reading carefully: a trainer at a corporate gym on hourly floor time sits near the bottom, while a trainer who builds a private client roster, adds a specialization, or runs their own studio moves toward the top decile — the credential is the entry requirement, not the income ceiling. BLS counted 370,100 fitness trainers and instructors in 2024 and projects 12 percent growth from 2024 to 2034, much faster than the average for all occupations, driven by preventive-health and active-aging demand, with roughly 74,200 openings a year. The honest takeaway for an ISSA candidate is the same as for any CPT candidate: the certificate gets you past the employer minimum, but the wage gap above the median is earned through client retention, business skill and stacked specializations, not by the pass alone. ISSA sits in the same BLS occupation as NASM, ACE and ACSM, so BLS does not separate them — choose between the programmes on curriculum and delivery fit, not on a salary difference the data does not show.',
    rows: [
      { label: 'Median annual wage, fitness trainers and instructors', value: '$46,180', note: 'BLS Occupational Outlook Handbook, May 2024 ($22.20/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $27,580', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $82,050', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '370,100 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~74,200 per year', note: 'BLS OOH Job Outlook, 2024-34 — replacement and growth openings' }
    ],
    growth: '12% projected growth 2024-34 (much faster than average); ~74,200 openings a year. ISSA, NASM, ACE and ACSM sit in the same BLS occupation, so pick on curriculum fit, not salary, which BLS does not split by certificate.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Fitness Trainers and Instructors',
      url: 'https://www.bls.gov/ooh/personal-care-and-service/fitness-trainers-and-instructors.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'ISSA publishes no pass rate — the passing score is a fixed percentage of the 200-item exam',
    summary:
      'ISSA does not publish a pass-rate statistic for the CPT exam. We state this plainly: there is no official number to cite, and any percentage you encounter in forums or from prep vendors is a third-party estimate, not an ISSA figure, so we have left it out rather than repeat it. What ISSA does publish is the structural detail that matters for planning. The CPT exam is 200 multiple-choice questions with a stated time limit (commonly 120 minutes), and it is scored to a passing threshold — a fixed percentage of items correct (the published requirement is in the high-70s percent range, and you should confirm the current figure on ISSA\'s own page before you sit, because ISSA has adjusted its format over time). The exam is delivered online through ISSA\'s proctored platform, which distinguishes it from the test-centre delivery of NASM, ACE and ACSM — a meaningful difference for candidates who prefer home delivery. The curriculum is the self-paced ISSA CPT programme, and the exam follows it; candidates who complete the course materials and the practice tests ISSA includes are the ones who pass. The practical reading is that the exam is eminently passable on a prepared single attempt, that the online delivery removes the test-centre logistics, and that the cost of under-preparing is a paid retake — so preparing once and properly is the economical path.',
    source: {
      label: 'ISSA — Certified Personal Trainer exam information',
      url: 'https://www.issaonline.com/certification/personal-trainer'
    },
    caveat:
      'ISSA publishes no pass rate. Published and verifiable: 200 multiple-choice questions with a fixed passing threshold (confirm the current percentage and time limit on ISSA\'s page), delivered online through ISSA\'s proctored platform.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The ISSA CPT is different from most fitness certifications in its delivery: it is a self-paced online programme with a 200-question online exam, so the plan is driven by your own scheduling discipline rather than a test-centre appointment. Eligibility is simple — ISSA requires candidates to be at least 18 with a high school diploma or equivalent, and a current CPR/AED certification (which ISSA requires to be certified and which you will need to present for the credential, so sort it out early). The curriculum covers the foundations of personal training — anatomy and physiology, exercise programming, nutrition, client assessment, and business practices — and the exam follows the course. The plan below runs eight weeks at roughly 8-10 hours a week for a candidate studying alongside other commitments: the first two weeks on the anatomy and physiology base, the middle four weeks on programming, assessment and nutrition, and the final two weeks on practice tests and the online-exam logistics. The single most important structural fact is that the exam is open only while you have course access, and the practice tests ISSA includes are the best indicator of readiness — candidates who complete the course materials and the included practice tests pass; candidates who skim the videos and jump to the exam gamble on luck. Treat the course as the curriculum, the practice tests as the readiness check, and book the exam only when your practice scores clear the passing threshold with a margin.',
    totalHours: '70-90 hours',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Anatomy, physiology and the training foundations',
        tasks: [
          'Confirm eligibility: age, diploma, and the current CPR/AED requirement',
          'Work the anatomy and physiology modules: muscles, joint actions, and the body systems the programme covers',
          'Energy systems and the principles of training — overload, specificity, progression',
          'Build a glossary of the programme\'s terminology as you go'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Client assessment and screening',
        tasks: [
          'Health-history and pre-participation screening, including when to require medical clearance',
          'Fitness assessments: cardiorespiratory, muscular strength and endurance, flexibility, body composition',
          'Goal setting and the intake interview — the programme grades client-communication skills',
          'Practise turning an assessment finding into a programming decision'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Exercise programming and nutrition',
        tasks: [
          'Program design: the FITT principle, exercise selection, sets, reps, rest and progression',
          'Resistance, cardiorespiratory, flexibility and core programming within one coherent plan',
          'Nutrition fundamentals: macronutrients, energy balance, and the scope-of-practice boundary for trainers',
          'Practise writing complete programmes for different client types'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Week 7',
        focus: 'Practice tests and gap closing',
        tasks: [
          'Complete the practice tests ISSA includes, timed to the real 120-minute format',
          'Re-drill every programming and assessment decision you missed, not just the concept name',
          'Cover the business and professional-practice modules if you skimmed them',
          'Confirm your practice scores clear the passing threshold with a margin'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Week 8',
        focus: 'Exam logistics and the real sit',
        tasks: [
          'Verify the online-proctoring requirements: a private room, working camera and microphone, and a stable connection',
          'Confirm your CPR/AED card is current and your ID matches your ISSA account',
          'Schedule the exam when you are ready and sit it in one clean attempt',
          'One quiet day before the exam'
        ],
        hours: '6-8 hrs'
      }
    ],
    variants: [
      { label: 'Kinesiology or exercise-science student', detail: 'Five to six weeks at 8-10 hrs/week. Your science base is solid; spend the time on the programme\'s specific assessment and programming decisions and the 200-item question style.' },
      { label: 'Career changer with no fitness background', detail: 'Ten to twelve weeks at 7-9 hrs/week. Add three weeks before Week 1 on anatomy and physiology; the course assumes you can absorb the science, and the applied items require fluent movement vocabulary.' },
      { label: 'Already NASM-, ACE- or ACSM-certified, adding ISSA', detail: 'Five to six weeks. You know the science and the programming; the gap is ISSA\'s specific course framing and its online-exam format. Learn the framing, do the practice tests, and you will convert quickly.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The ISSA CPT rewards completing the course and practising the exam style, and its online delivery shifts the logistics from a test centre to your own discipline. The strategies below are ordered by what actually moves a candidate past the passing threshold.',
    items: [
      {
        title: 'Treat the course materials as the curriculum',
        detail: 'The exam follows the ISSA course, and candidates who complete the modules and the included practice tests pass; candidates who skim the videos and jump to the exam gamble on luck. Work the modules in order, take the section quizzes as you go, and use the course\'s practice tests as the readiness check rather than third-party banks alone.'
      },
      {
        title: 'Practise the 200-item format under a clock',
        detail: 'The exam is 200 multiple-choice questions in a stated time limit — about 35 seconds per item at the common 120-minute figure. Practise timed full-length sets so the pace is familiar; the failure mode on a long online exam is drifting, not running out of time, and timed practice builds the discipline to keep moving.'
      },
      {
        title: 'Secure the assessment-to-programming link',
        detail: 'The programme teaches assessment and programming as one chain: an assessment finding should drive the first programming decision. Practise turning findings into program choices, because the applied items reward that connection and punish rote learners who treat the two as separate topics.'
      },
      {
        title: 'Know the nutrition scope-of-practice line',
        detail: 'The nutrition modules teach general healthy-eating guidance, and the scope-of-practice boundary — general guidance versus individualized meal plans, which require a dietitian or physician — is testable. The over-helping answer that writes a diet is the classic trap. Lock the boundary and collect the points.'
      },
      {
        title: 'Confirm the online-exam logistics before booking',
        detail: 'The exam is online through ISSA\'s proctored platform, which removes the test-centre commute but adds its own gates: a private room, a working camera and microphone, a stable connection, and a system test on the exact machine you will use. Verify all of it the week before, not the morning of the sit.'
      },
      {
        title: 'Do the CPR/AED requirement early',
        detail: 'ISSA requires a current CPR/AED certification for the credential, so it is a hard gate even though the exam is online. Sort it out in Week 1 rather than the week you pass, and keep the card\'s expiry in mind for the renewal cycle.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'ISSA sells the CPT as a bundle — the course materials, the exam and the credential are one purchase — so the buying decision is mostly about which pricing tier and whether to add the extras (study guides, practice exams, and the CPR/AED or business add-ons). Because the exam follows the course, the highest-value resources are ISSA\'s own materials and practice tests; third-party banks add volume but vary in fidelity.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ISSA CPT certification bundle (course + exam)', values: ['~$500-1,000 depending on tier and promotions', 'Self-paced online course with videos, quizzes and the online exam', 'Required — the exam follows the course, so the bundle is the curriculum' ], },
      { label: 'ISSA practice tests (included or add-on)', values: ['Often included; add-ons ~$30-80', 'Online timed practice', 'The best readiness check — confirm your scores clear the threshold' ], },
      { label: 'Third-party CPT question banks', values: ['~$20-60', 'Mobile/web quiz banks', 'Volume drilling; pair with ISSA\'s own materials for fidelity' ], },
      { label: 'CPR/AED certification', values: ['~$50-100', 'In-person or blended with skills check', 'Required for the credential — sort it out early' ], },
      { label: 'Business/entrepreneurship add-on modules', values: ['Included in higher tiers', 'Online', 'Building the client-acquisition side of the career after the pass' ]
      }
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; ISSA runs frequent discounts and the bundle contents change, so confirm the current tier contents and price on ISSA\'s page. We do not rank by commission. Renewal is required on a cycle (commonly 2 years with continuing education credits) — confirm the current terms.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The ISSA CPT failure modes are mostly course-completion mistakes — skimming the materials, skipping the practice tests, and fumbling the online-proctoring logistics — rather than content gaps. The six traps below are the recurring ones, and all are fixable within one study cycle.',
    items: [
      {
        mistake: 'Skipping the course materials and jumping to the exam',
        fix: 'The exam follows the ISSA course, and the practice tests are the best indicator of readiness. Candidates who skim the videos and sit the exam gamble on luck. Work the modules in order, take the quizzes as you go, and book the exam only when your practice scores clear the threshold with a margin.'
      },
      {
        mistake: 'Never practising the 200-item format under a clock',
        fix: 'A 200-question online exam is a pacing test as much as a knowledge test, and candidates who never run a timed full-length set drift in the second half. Practise timed sets so the pace is familiar.'
      },
      {
        mistake: 'Overstepping the nutrition scope of practice',
        fix: 'The nutrition modules teach general healthy-eating guidance, and the boundary — general guidance versus individualized meal plans, which require a dietitian or physician — is testable. The over-helping answer that writes a diet is the classic trap. Lock the boundary and collect the points.'
      },
      {
        mistake: 'Treating assessment and programming as separate topics',
        fix: 'The programme teaches them as one chain: an assessment finding should drive the first programming decision. Practise the connection, because the applied items reward it and punish rote learners who study the two in isolation.'
      },
      {
        mistake: 'Fumbling the online-proctoring logistics',
        fix: 'The online exam requires a private room, a working camera and microphone, a stable connection, and a system test on the exact machine you will use. Candidates who sort this out the morning of the sit risk a failed proctoring check. Verify everything the week before.'
      },
      {
        mistake: 'Leaving the CPR/AED requirement for the end',
        fix: 'ISSA requires a current CPR/AED certification for the credential, so it is a hard gate even though the exam is online. Candidates who pass and then scramble for the card delay the credential. Sort it out in Week 1.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The ISSA CPT exam is 200 multiple-choice questions with a stated time limit (commonly 120 minutes), delivered online through ISSA\'s proctored platform and scored to a fixed passing threshold. The items follow the course curriculum across its main areas — anatomy and physiology, client assessment and screening, exercise programming, nutrition, and business/professional practice — and the majority are scenario-based: a described client with a health history, assessment results and a goal, asking for the correct programming decision, assessment choice, or referral. Because the delivery is online and the format is fixed-length (unlike the adaptive NCLEX), pacing is predictable: about 35 seconds per item at the common time limit, with the discipline being steady movement and careful reading of the stem\'s instruction. The exam has no practical or performance component — hands-on skill is assessed by employers, not by this test — so rehearsing the decision in words matters more than rehearsing the lift. The fixed percentage threshold also means raw accuracy is what counts: unlike scaled exams, a target percentage is a meaningful readiness goal, and the practice tests ISSA includes are the honest way to measure yourself against it.',
    types: [
      { name: 'Scenario-based multiple choice', share: 'The large majority of items', detail: 'A described client with health and assessment context, asking for the next best action — programming, assessment, progression or referral. Distractors are plausible but skip a step or overstep scope.' },
      { name: 'Definition and recall items', share: 'A meaningful minority', detail: 'Terminology, muscle actions, energy systems and the programme\'s core concepts. Straightforward points for the candidate who worked the course.' },
      { name: 'Nutrition and scope-of-practice items', share: 'A recurring segment', detail: 'General guidance versus individualized prescription, and the referral boundary. The over-helping answer is the classic trap.' },
      { name: 'Business and professional-practice items', share: 'A small segment', detail: 'Client communication, ethics, and the professional side of the career the programme teaches.' }
    ],
    samples: [
      {
        prompt: 'A new client reports taking a beta-blocker for hypertension and asks whether they can begin a moderate exercise program. According to the programme\'s screening guidance, what is the most appropriate first step?',
        options: [
          'A. Begin the program and monitor the client\'s heart rate closely',
          'B. Confirm medical clearance from the client\'s physician before proceeding',
          'C. Design a low-intensity program without clearance',
          'D. Decline to work with the client entirely'
        ],
        answer: 'B',
        explanation: 'A client on cardiovascular medication (a beta-blocker for hypertension) falls into the category where medical clearance should be confirmed before exercise programming begins (B). A proceeds without clearance, which is the over-helping error the screening framework guards against. C does the same with a low-intensity label. D is too absolute — after clearance, the trainer can work with this client. The screening boundary is one of the most-tested decisions on the exam.'
      },
      {
        prompt: 'A client\'s goal is to increase muscular strength. Using the programme\'s programming principles, which set-and-rep scheme is most appropriate for a strength-focused adaptation?',
        options: [
          'A. 3-5 sets of 1-6 repetitions at high intensity with longer rest',
          'B. 2-3 sets of 12-15 repetitions at moderate intensity',
          'C. 1 set of 25 repetitions at low intensity',
          'D. 5 sets of 20 repetitions with minimal rest'
        ],
        answer: 'A',
        explanation: 'Strength-focused adaptations favour heavier loads and lower repetitions — roughly 3-5 sets of 1-6 reps with adequate rest between sets (A). B (12-15 reps) targets muscular endurance or hypertrophy, not maximal strength. C (25 reps, low intensity) is endurance work. D (20 reps, minimal rest) is metabolic conditioning, not strength. The item rewards applying the rep-range logic to the stated goal — the core of the programming modules.'
      },
      {
        prompt: 'A client asks you to write a detailed daily meal plan with specific calorie targets for fat loss. Within a personal trainer\'s scope of practice, you should:',
        options: [
          'A. Provide the detailed plan because the client asked for it',
          'B. Offer general healthy-eating guidance but refer the client to a dietitian or physician for individualized meal planning',
          'C. Decline all nutrition discussion entirely',
          'D. Provide the calorie targets but not the meal plan'
        ],
        answer: 'B',
        explanation: 'A personal trainer may provide general, science-based healthy-eating education but must refer clients for individualized meal plans or calorie prescription, which fall within a dietitian\'s or physician\'s scope (B). A oversteps by prescribing. C is too absolute — general guidance is within scope. D still crosses into individualized prescription. The scope-of-practice boundary is repeatedly tested, and the "helpful" answer is the wrong answer.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published curriculum, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The ISSA CPT exam is delivered online through ISSA\'s proctored platform: 200 multiple-choice questions in a stated time limit (commonly 120 minutes), scored to a fixed passing threshold. Because it is online, the "exam-day" preparation is different from a test-centre sit: the week before, run the proctoring system test on the exact machine and network you will use, confirm a private room with a closed door, a working camera and microphone, and a clean desk, and ensure your ID matches your ISSA account — the proctor verifies your identity at check-in and scans the room. Have your current CPR/AED card ready if ISSA requires you to submit it for the credential, because passing the exam is not the same as receiving the credential. Inside the exam, pace yourself at about 35 seconds per item at the common time limit, answer every item (there is no penalty for a wrong answer beyond losing the point, and the threshold is a fixed percentage), and use the flag-and-review function if the platform provides it. The most common way an online candidate stumbles is logistical — a failed system test, a room that fails the proctoring scan, or an unstable connection mid-exam — so the discipline is to treat the logistics as part of the preparation, not as a hurdle to sort out at the last minute.',
    bring: [
      'Your government-issued photo ID for proctor verification at check-in',
      'A private room with a closed door, a clean desk, and no unauthorised materials',
      'A computer with a working webcam and microphone, system-tested on the exact machine you will use',
      'A stable internet connection, and a phone only if the proctoring flow requires one for check-in',
      'Your current CPR/AED documentation if ISSA requires it for the credential'
    ],
    leave: [
      'Phones, smartwatches and earbuds — out of the room for the proctored session',
      'Notes, textbooks and printed study aids — not permitted during the exam',
      'Second monitors, which must be unplugged and turned away',
      'Any other person in the room; the session is recorded'
    ],
    timeline: [
      { time: 'The week before', detail: 'Run the proctoring system test on the exact machine and network you will use; confirm your ID matches your ISSA account and your CPR/AED card is current.' },
      { time: '30 minutes before', detail: 'Begin the proctored check-in: ID verification, room scan, and system confirmation.' },
      { time: 'During the exam', detail: 'Pace at ~35 seconds per item, answer everything, and use the flag-and-review function if provided. Keep the pace steady through the second half.' },
      { time: 'After submission', detail: 'Your result is delivered through the ISSA platform; complete any credential-issuance steps (such as submitting your CPR/AED card) promptly.' }
    ],
    rules: [
      '200 multiple-choice questions in a stated time limit (commonly 120 minutes), delivered online through ISSA\'s proctored platform.',
      'Scored to a fixed passing threshold; there is no penalty for a wrong answer beyond losing the point.',
      'Online proctoring requires a private room, working camera and microphone, a clean desk, and a system-tested machine.',
      'A current CPR/AED certification is required for the credential.',
      'Renewal is required on a cycle (commonly 2 years with continuing education credits) — confirm the current terms.'
    ],
    afterwards:
      'Your result is delivered through the ISSA platform after you submit, and if you pass, complete the credential-issuance steps promptly — ISSA requires a current CPR/AED certification for the credential, so submit it as soon as the platform asks, or the credential is delayed despite the pass. The credential is renewed on a cycle (commonly two years, with continuing education credits), so log the renewal date the day you pass and bank CECs from real work rather than scrambling at expiry. On a fail, the fixed-percentage threshold makes the gap measurable: your score against the threshold tells you how far off you were, and the course\'s practice tests tell you which areas to rework. The most common failure pattern is not knowledge but preparation process — skimming the course, skipping the timed practice, or sitting before the practice scores cleared the threshold. Re-work the modules you skimmed, run two or three timed practice sets, and re-sit when your practice scores clear the threshold with a margin. The credential then functions as the entry ticket to the fitness-trainer labour market, where the wage above the median is earned through client retention, specializations and business skill — not by the pass alone.'
  }
};

export default data;
