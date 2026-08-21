// Depth content for: nasm-certified-personal-trainer
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Health, fitness & recreation certifications desk',
    bio: 'This guide is compiled and maintained by our fitness-certifications desk. NASM revises the CPT curriculum and exam blueprint periodically, so we track the objectives by their current published domain structure and we state plainly when a number is a NASM-published figure versus an industry estimate. Fees, format, scoring and retake rules come from the National Academy of Sports Medicine certification pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate — a CPT holder may work under several BLS occupations.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam domains, weights, format, fees and retake schedule were taken from NASM’s current Certified Personal Trainer exam information and cross-checked against the NASM-CPT candidate handbook.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$46,180 median for fitness trainers and instructors (BLS, May 2024)',
    summary:
      'There is no Bureau of Labor Statistics occupation called "personal trainer", so any figure attached to that exact title is a job-board aggregate rather than government data. The closest official fit is Fitness Trainers and Instructors, and it is the correct one to use because the CPT describes exactly that work: leading individual and group exercise, assessing client fitness, and designing programs. That occupation had a May 2024 median wage of $46,180, with the lowest 10 percent under $27,580 and the highest 10 percent over $82,050. The spread matters because the distribution is bimodal in practice — a part-time trainer working floor hours at a big-box gym sits near the bottom, while a trainer with a private client book, a specialization, or a studio of their own sits well above the median and toward the top decile. BLS counts 370,100 jobs in 2024 and projects 12 percent growth from 2024 to 2034 — much faster than the average for all occupations — driven by aging populations, rising chronic-disease prevention emphasis, and continued interest in personal fitness. That growth is expected to open about 74,200 positions a year, almost all of which are replacement and expansion openings rather than new distinct employers. The honest reading for a candidate is that the certification is an entry ticket to a large, growing, but wage-dispersed field: the credential gets you past the employer’s minimum, but the income gap above the median is earned by client retention, sales skill, and stacking specializations — not by the CPT alone. BLS also publishes related occupations a CPT holder may later move into, such as exercise physiologists and athletic trainers, but those usually require additional credentials and are out of scope here.',
    rows: [
      { label: 'Median annual wage, fitness trainers and instructors', value: '$46,180', note: 'BLS Occupational Outlook Handbook, May 2024 ($22.20/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $27,580', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $82,050', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '370,100 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~74,200 per year', note: 'BLS OOH Job Outlook, 2024-34 — replacement and growth openings' }
    ],
    growth: '12% projected growth 2024-34 (much faster than average); ~74,200 openings a year. The credential is an entry requirement, not the income ceiling — client retention and specialization drive the top decile.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Fitness Trainers and Instructors',
      url: 'https://www.bls.gov/ooh/personal-care-and-service/fitness-trainers-and-instructors.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'NASM does not publish an audited pass rate; a commonly cited ~85% first-attempt figure is a marketing claim',
    summary:
      'NASM does not publish an official, audited pass-rate statistic for the CPT exam, and you should treat any precise percentage you see online with suspicion. The figure most often quoted — roughly 85 percent of candidates passing on the first attempt — originates from NASM’s own promotional materials, not from a published, methodology-disclosed examination report, so we treat it here as a marketing claim rather than a verifiable fact. That distinction matters for study planning: a self-reported pass rate tells you nothing about the difficulty you will personally face, because it folds in candidates who took a full preparatory course, candidates who arrived with a kinesiology degree, and candidates who guessed their way through. The numbers that are genuinely published and useful are the structural ones. The exam is pass/fail against a scaled cut score of 70 on a 0-100 scale, built from 100 scored items plus 20 unscored pretest items that are mixed invisibly into the 120-question form. Because the unscored items are indistinguishable, you cannot tell which questions count, so the only rational strategy is to treat every item as scored. The retake schedule is the other published fact worth internalising: a first failure can be re-sat after a one-week wait, a second failure after 30 days, and a third failure after a full year — and each retake is a paid event unless your enrollment package bundled a retake. The practical takeaway is that the exam is passable on a single, well-prepared attempt far more often than not for candidates who actually complete the curriculum, and that the cost of under-preparing is both a lost seat and a waiting-period tax.',
    source: {
      label: 'NASM — Certified Personal Trainer exam information and candidate handbook',
      url: 'https://www.nasm.org/certified-personal-trainer/exam-info'
    },
    caveat:
      'No audited pass rate is published by NASM or by the NCCA accreditation under which the CPT is granted. The commonly cited ~85% first-attempt figure is a NASM marketing claim; we have deliberately not presented it as a measured statistic, and we report only the published 70/100 cut score and retake schedule instead.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'Before any study happens, sort out eligibility and the exam window, because both catch people out. NASM requires candidates to be at least 18, to hold a high school diploma or equivalent, and to hold a current CPR/AED certification with a live skills component — the CPR/AED must be in hand before you can sit, and it is not taught inside the CPT curriculum. You also have a 180-day window from enrollment to take the exam; the clock starts when you register, not when you feel ready, so the plan below assumes a self-paced candidate who begins promptly. The current blueprint has six domains: Basic and Applied Sciences and Nutritional Concepts (15%), Client Relations and Behavioral Coaching (15%), Assessment (16%), Program Design (20%), Exercise Technique and Training Instruction (24%), and Professional Development and Responsibility (10%). The weighting is the single most important planning input here: Exercise Technique and Program Design together are 44 percent of the exam, so a candidate who over-invests in anatomy trivia and under-invests in program design and cueing will lose cheap points. The plan runs eight weeks at roughly 10-12 hours a week, which fits inside the 180-day window with room to spare and assumes you can practise movements on a real or simulated client. If you cannot get a body to coach, use a mirror and a phone recording — NASM’s questions are scenario-based and lean on recognising movement faults, which you can rehearse solo.',
    totalHours: '80-100 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Foundations and eligibility',
        tasks: [
          'Confirm you meet the age, education and CPR/AED requirements and book your CPR/AED course if you lack it',
          'Map the six domains to the 15/15/16/20/24/10 weighting and set a study budget that follows those numbers',
          'Work through Basic and Applied Sciences: the OPT model overview, the kinetic chain, and the three movement-system categories',
          'Build a one-page glossary of NASM-specific terms (stabilization, strength, power; neutral spine; relative flexibility) you will meet everywhere'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Domain 1 — Basic and Applied Sciences and Nutritional Concepts (15%)',
        tasks: [
          'Anatomy and physiology enough to locate and describe major muscles and joints; you need application, not a textbook',
          'The principles of alignment, center of gravity, and base of support',
          'Fundamental nutrition concepts and the role the trainer is and is not allowed to play — scope of practice is repeatedly tested',
          'The OPT model in full: the Stabilization, Strength and Power blocks and the five phases'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Week 4',
        focus: 'Domain 3 — Assessment (16%)',
        tasks: [
          'Postural and movement assessments: overhead squat, single-leg squat, pushing and pulling screens',
          'Cardiorespiratory and body-composition assessment methods and when each is appropriate',
          'Risk stratification and when a client must be referred to a physician before training',
          'Turn an assessment finding into a program-modification decision — that linkage is the exam’s favourite move'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Domains 4 & 5 — Program Design (20%) and Exercise Technique (24%)',
        tasks: [
          'Design by OPT phase: repetition ranges, tempo, rest intervals and volume for stabilization, strength and power',
          'Exercise selection and regressions/progressions across the five phases',
          'Cueing and spotting for major lifts; recognise and correct a valgus knee, excessive lumbar flexion, and anterior pelvic tilt',
          'Practice describing a fault and its correction in one or two sentences — the scenario items ask exactly that'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Week 7',
        focus: 'Domain 2 — Client Relations and Behavioral Coaching (15%)',
        tasks: [
          'Behaviour-change models: the stages of change, self-efficacy, and intrinsic versus extrinsic motivation',
          'The client interview, goal setting, and adherence strategies',
          'Professional communication and managing the trainer-client boundary',
          'Tie coaching to program design — NASM frames adherence as a program-design input, not a soft extra'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Week 8',
        focus: 'Domain 6, full exams and gap closing',
        tasks: [
          'Professional Development and Responsibility (10%): scope of practice, legal and ethical duties, business basics',
          'Three timed, 120-question practice exams completed in one 2-hour sitting',
          'Re-drill every assessment-to-program link you missed rather than re-reading it',
          'One light review day; confirm your CPR/AED card is current and your ID matches your NASM account'
        ],
        hours: '10-12 hrs'
      }
    ],
    variants: [
      { label: 'Kinesiology or exercise-science student', detail: 'Four to five weeks. Your Domain 1 and Domain 3 knowledge is already solid, but do not skip the OPT model and the assessment-to-program link — NASM tests its own framework, not generic physiology, and students routinely lose points treating the blueprint as general knowledge.' },
      { label: 'Career changer with no fitness background', detail: 'Ten to twelve weeks at 8 hrs/week. Add two weeks before Week 1 on movement literacy — you must be able to name muscles and describe faults, and the scenario items assume that vocabulary is automatic. Pair study with a gym membership to watch real coaching.' },
      { label: 'Current group-fitness instructor adding the CPT', detail: 'Six weeks. You already have cueing and group leadership; the gap is one-on-one assessment, the OPT model, and scope-of-practice limits on nutrition advice, which are tested heavily and are easy to overstep from habit.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The CPT is a scenario exam, not a terminology exam, and the single biggest mistake candidates make is studying it like a vocabulary test. NASM writes items that describe a client — an assessment result, a compensation pattern, a goal — and ask what you do next. That means your preparation has to be about decisions, not definitions. The strategies below are ordered by how much they move your score, and the top two are free.',
    items: [
      {
        title: 'Learn the OPT model as a decision tree, not a list',
        detail: 'NASM’s Optimum Performance Training model is the spine of the Program Design and Exercise Technique domains, which together are 44 percent of the paper. You must be able to take "novice client, no training history" and land on Phase 1 Stabilization Endurance with its 12-20 reps, 4-2-1 tempo, 0-90 second rest, and then progress through Strength Endurance, Hypertrophy, Maximal Strength and Maximal Power without hesitating. Drill the rep ranges, tempos and rest intervals per phase until they are reflexive, because items routinely invert the question — given the variables, identify the phase.'
      },
      {
        title: 'Drill the assessment-to-program link',
        detail: 'The exam loves giving you an overhead-squat fault and asking for the corrective strategy or the appropriate regression. A valgus knee collapse points to weak gluteus medius and overactive adductors; the fix is a regression that reinforces neutral alignment, not simply "go lighter". Build a table: each major assessment, the common fault, the likely overactive/underactive muscles, and the first program adjustment. This single table covers a large share of applied items.'
      },
      {
        title: 'Rehearse answering in one or two sentences',
        detail: 'NASM scenario items are short on words and long on implication. Practise stating a fault and its correction aloud in a single sentence — "the client’s knees cave in, indicating weak hip abductors; cue them to push the knees outward and regress to a goblet squat." This forces the precise vocabulary the scoring expects and exposes the gaps that passive reading hides.'
      },
      {
        title: 'Respect scope of practice on nutrition',
        detail: 'A CPT may offer general healthy-eating guidance but must not prescribe meal plans or treat medical nutrition issues; items test exactly where that line is, and overstepping is a favourite wrong answer. Memorise the boundary: general guidance and referral, not individualized diet prescription. This appears across Domains 1 and 6 and is an easy, cheap point to secure.'
      },
      {
        title: 'Use NASM’s own practice exams, not just third-party banks',
        detail: 'The phrasing of NASM items is distinctive — heavy on "most appropriate", "first", and "best describes". Third-party banks vary in how faithfully they imitate that style. Spend at least one of your three practice exams on NASM’s own platform so the real item wording is not a surprise on test day, while using third-party banks for volume and speed drill.'
      },
      {
        title: 'Confirm CPR/AED and ID before you book',
        detail: 'You cannot sit without a current CPR/AED card with a live skills component, and the name on your ID must match your NASM account exactly. Candidates lose seats over both. Verify the card is in date and the account spelling is correct the week you schedule, not the day of the exam.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'NASM sells the exam only as part of a study package, so the real buying decision is which tier, not whether to buy the exam alone. The Self-Study package is the floor; Premium and All-Inclusive add coaching, a retake, and a guided study plan. The decision that actually affects your pass probability is whether you need the structure of a higher tier or can self-pace — most career changers benefit from at least the guided plan, while degree holders often do fine on Self-Study plus a good third-party question bank.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NASM CPT Self-Study package', values: ['~$679 list (frequent promotions lower it)', 'Digital content, textbook, practice exam', 'Self-disciplined candidates who already coach or study exercise'] },
      { label: 'NASM CPT Premium package', values: ['~$899 list', 'Self-Study plus guided study plan and extra practice', 'Career changers who want pacing but not live coaching'] },
      { label: 'NASM CPT All-Inclusive package', values: ['~$1,099-2,499 depending on promotions and add-ons', 'Premium plus a retake and sometimes live workshops', 'Candidates who want a bundled retake and maximum support'] },
      { label: 'NASM-CPT Candidate Handbook (free)', values: ['Free from NASM', 'PDF rules and format reference', 'The authoritative source for domains, weights and retake policy'] },
      { label: 'NASM CPT Study Guide (print/textbook)', values: ['Included in packages; sold separately', 'Textbook with chapter reviews', 'A single ordered reference mapped to the six domains'] },
      { label: 'Third-party practice-question banks (e.g., Pocket Prep, Trainer Academy)', values: ['~$15-40/month', 'Mobile and web quiz banks', 'Volume drilling and speed work; pair with NASM’s own practice exam'] },
      { label: 'CPR/AED course with live skills', values: ['~$50-100', 'In-person or blended', 'Mandatory eligibility requirement, not part of the curriculum'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; NASM runs frequent sales that can cut list price substantially, so confirm at nasm.org before buying. We do not rank by commission. The retake fee outside a bundled package is $199 per attempt.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The CPT is passable, but the failure modes are predictable and almost all of them are about treating NASM as generic fitness knowledge. The six below cover the version-agnostic traps; the unifying theme is that candidates lose the most points where NASM’s own framework differs from what they already "know".',
    items: [
      {
        mistake: 'Studying anatomy instead of the OPT model',
        fix: 'Domain 1 is only 15 percent, while Program Design and Exercise Technique are 44 percent combined, and both are built on the OPT model. Candidates with a strong science background over-invest in muscle origins and insertions and under-invest in rep ranges, tempo and phase progressions — exactly where NASM concentrates its applied items. Budget study time by the published weightings, not by your comfort zone.'
      },
      {
        mistake: 'Treating scenario items as definition items',
        fix: 'NASM asks what you do next for a described client, not what a term means. Practise the decision, not the definition. When you review a missed item, write the one-sentence action it was looking for, not the concept name, and you will start seeing the pattern NASM uses.'
      },
      {
        mistake: 'Overstepping scope of practice on nutrition',
        fix: 'A CPT gives general healthy-eating guidance and refers clients out for individualized diet prescription or medical nutrition therapy. Items test this line precisely, and the "helpful" answer that writes a meal plan is wrong. Lock the boundary and you collect easy points across two domains.'
      },
      {
        mistake: 'Letting the 180-day window expire',
        fix: 'Your exam eligibility starts at enrollment, not at readiness. Candidates who buy a package "for later" and study sporadically blow the window and pay to re-enroll. The eight-week plan above fits comfortably inside 180 days; schedule the exam at the start so the deadline does the pacing for you.'
      },
      {
        mistake: 'Arriving without a current CPR/AED card',
        fix: 'The CPR/AED certification with a live skills component is a hard eligibility gate, taught outside the curriculum. Candidates who let it lapse or take an online-only version without the skills check are turned away at check-in. Verify the card is current and skills-checked before you book the seat.'
      },
      {
        mistake: 'Forgetting the invisible unscored items',
        fix: 'Twenty of the 120 questions are unscored pretest items mixed in indistinguishably. You cannot identify them, so treating any item as "probably not counted" is a way to drop real points. Answer every item as if it scores, and do not waste time trying to guess which ones are experimental.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The exam is 120 questions in a 2-hour sitting, of which 100 are scored and 20 are unscored pretest items embedded without identification. It is pass/fail against a scaled cut score of 70 on a 0-100 scale, delivered by PSI either at a test centre or through live online proctoring. The items are almost entirely scenario-based multiple choice: NASM gives you a client description — age, assessment findings, goal, training history — and asks for the most appropriate next action, regression, progression, or identification of a movement fault. There is no performance or practical component in the exam itself; the hands-on skill is assessed separately by employers, not by this written test, which is why rehearsing the decision in words matters more than rehearsing the lift. The six current domains and their weights are Basic and Applied Sciences and Nutritional Concepts (15%), Client Relations and Behavioral Coaching (15%), Assessment (16%), Program Design (20%), Exercise Technique and Training Instruction (24%), and Professional Development and Responsibility (10%). Because the unscored items are invisible, pacing strategy is simple: move steadily, answer every item as if it counts, and flag uncertainties to review if time allows rather than freezing on any single scenario.',
    types: [
      { name: 'Scenario-based multiple choice', share: 'The large majority of the paper', detail: 'A described client with assessment or goal context, asking for the next best action, regression, progression, or fault identification. Distractors are plausible coach responses that overstep scope or skip a step.' },
      { name: 'Applied multiple choice on the OPT model', share: 'Heavy in Program Design and Exercise Technique', detail: 'Given reps, tempo, rest or phase, identify the training phase, or given a client, select the correct phase and variables. Requires the OPT model to be reflexive.' },
      { name: 'Scope-of-practice and professional-responsibility items', share: 'Distributed across Domains 1 and 6', detail: 'Asks where the trainer’s authority ends — particularly nutrition advice, medical referral, and documentation. The over-helping answer is the classic trap.' },
      { name: 'Assessment-to-intervention items', share: 'Heavy in the Assessment domain', detail: 'An overhead-squat or single-leg-squat fault leads to identification of overactive/underactive muscles and the corrective strategy.' }
    ],
    samples: [
      {
        prompt: 'A new client performs an overhead squat assessment and shows the knees caving inward (valgus collapse) at the bottom of the movement, with the feet turning out. According to NASM’s principles, which muscle is most likely underactive and should be the focus of corrective activation?',
        options: [
          'A. Adductor complex',
          'B. Gluteus medius',
          'C. Soleus',
          'D. Tensor fasciae latae'
        ],
        answer: 'B',
        explanation: 'Knee valgus during the overhead squat is classically driven by an underactive gluteus medius (hip abductor) combined with overactive adductors, so the corrective first step is to activate and strengthen the gluteus medius and cue the client to push the knees outward. A is wrong because the adductors are typically overactive, not weak, in this pattern. C (soleus) relates more to ankle and calf compensation and is not the primary driver of valgus. D (tensor fasciae latae) is frequently overactive in this pattern and would be released, not activated. NASM frames the fix as inhibit the overactive tissue, then activate and integrate the underactive tissue.'
      },
      {
        prompt: 'A healthy 25-year-old client with no resistance-training history wants general fitness and modest muscle tone. Using the OPT model, which phase and repetition range is most appropriate as a starting point?',
        options: [
          'A. Phase 1 Stabilization Endurance, 12-20 reps',
          'B. Phase 3 Hypertrophy, 6-12 reps',
          'C. Phase 4 Maximal Strength, 1-5 reps',
          'D. Phase 5 Maximal Power, 1-5 reps at explosive tempo'
        ],
        answer: 'A',
        explanation: 'A beginner with no training history starts in Phase 1 Stabilization Endurance at 12-20 repetitions with a slow 4-2-1 tempo and 0-90 second rest, building a movement and stabilization base before load. Jumping to Phase 3 hypertrophy (B), Phase 4 maximal strength (C), or Phase 5 power (D) skips the stabilization foundation NASM requires and raises injury and compensation risk. The exam repeatedly tests phase selection from client profile, so matching "no history" to Phase 1 is a core competency.'
      },
      {
        prompt: 'A client asks you to design a detailed weekly meal plan that specifies exact calorie and macronutrient targets to support fat loss. Within NASM’s defined scope of practice, your correct response is to:',
        options: [
          'A. Provide the detailed meal plan because the client requested it',
          'B. Decline and refer the client to a registered dietitian or physician',
          'C. Give general healthy-eating guidance but refer out for individualized prescription',
          'D. Prescribe macronutrient targets only, since that is not "medical"'
        ],
        answer: 'C',
        explanation: 'A CPT may offer general, science-based healthy-eating guidance and education, but must refer clients to a registered dietitian, physician or qualified professional for individualized meal plans, calorie prescription or medical nutrition therapy. C captures exactly that boundary. A oversteps scope. B is too absolute — a trainer is not forbidden from general guidance, only from individualized prescription. D still crosses into individualized prescription, which is outside scope. Items like this reward candidates who know the line rather than the instinct to "help".'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'Two hours, 120 questions, delivered by PSI at a test centre or via PSI’s live online proctoring. The format is pass/fail against a scaled 70 on a 0-100 scale, with 20 unscored pretest items mixed invisibly into the form. The most common reason a qualified candidate loses the seat has nothing to do with fitness knowledge: NASM requires a current CPR/AED certification with a live skills component to be eligible, and the name on your government ID must match your NASM account exactly. Confirm both the week before you schedule, not the morning of. At the centre you are checked in, seated, and given the full two hours; the clock does not stop for unscheduled breaks, so use the restroom first. The exam is computer-delivered and you can flag items to review before submitting, which is the one navigation affordance worth using — clear the items you are confident on, flag the scenario items that need a second read, and come back if time remains. Because pacing is generous relative to item count, the failure mode is not running out of time but second-guessing; trust your first read on well-rehearsed OPT-model and assessment items.',
    bring: [
      'Two forms of identification, one a government-issued photo ID, with the name matching your NASM account exactly',
      'Your current CPR/AED card showing a live skills component — eligibility is checked',
      'Your NASM candidate ID or confirmation number in case check-in cannot locate the booking',
      'For online proctoring: a private room, a working webcam and microphone, and a phone for check-in',
      'A layer you can remove; test-centre temperatures vary and you cannot leave for a jacket'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — secured in a locker at a centre',
      'All notes, textbooks, flashcards and printed study aids',
      'Your own paper and pens; the centre provides an erasable noteboard if one is permitted',
      'Bags, coats (beyond what you wear), food and drink beyond what the centre allows',
      'Any other person in the room for online proctoring; the session is recorded'
    ],
    timeline: [
      { time: 'The week before', detail: 'Verify your CPR/AED card is current with a live skills component and that your ID name matches your NASM account spelling exactly — both are hard gates.' },
      { time: '24 hours before', detail: 'For online proctoring, run the system check on the machine and network you will use. For a centre, confirm the address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin online check-in, which includes ID capture and a room scan.' },
      { time: 'Check-in', detail: 'ID verification, signature, locker for belongings, and seating. Use the restroom now — the two-hour clock will not pause.' },
      { time: '0-5 minutes', detail: 'Read the tutorial screens; confirm you understand flagging and review. Do not start answering until you are settled.' },
      { time: '5-95 minutes', detail: 'Work the confident items first and flag scenario items for review. Keep moving; with 120 items you have about one minute each before review.' },
      { time: '95-120 minutes', detail: 'Review flagged items, then submit rather than letting the clock expire. The result is delivered on screen at submission.' }
    ],
    rules: [
      'Pass/fail against a scaled 70 on a 0-100 scale; 100 scored items plus 20 unscored pretest items mixed invisibly.',
      'Two forms of ID required, one government-issued with photo, names matching your NASM account exactly.',
      'A current CPR/AED certification with a live skills component is mandatory eligibility, checked before seating.',
      'You may flag items and review them before submitting; the clock does not stop for unscheduled breaks.',
      'Retake waits: one week after a first fail, 30 days after a second, one year after a third; each retake is paid unless bundled.',
      'NCCA-accredited; maintain with 2.0 CEUs over the two-year cycle to keep the credential active.'
    ],
    afterwards:
      'Your pass or fail is delivered on screen when you submit. On a pass, NASM issues the CPT credential and you can claim the digital badge; remember the certification must be maintained with 2.0 CEUs over a two-year cycle, so log the renewal date the day you pass and bank CEUs from real work rather than scrambling at expiry. On a fail, the retake schedule is the key fact: you may re-sit after a one-week wait for your second attempt, a 30-day wait for your third, and a full year after a third failure — and each attempt is paid at $199 unless your package bundled a retake. Do not book the immediate retake out of frustration; instead identify whether you missed the OPT-model variables, the assessment-to-program links, or the scope-of-practice lines, and drill that specific gap for a week. The most common single weakness is over-investing in anatomy and under-investing in program design and cueing, which together are 44 percent of the exam — re-balance your study time by the published domain weights before you pay to sit again.'
  }
};

export default data;
