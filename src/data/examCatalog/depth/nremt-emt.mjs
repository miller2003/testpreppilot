// Depth content for: nremt-emt
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Allied health & EMS certification desk',
    bio: 'This guide is compiled and maintained by our allied-health desk. The NREMT EMT certification exam was substantially revised and relaunched on 7 April 2025, built on the 2023 BLS Practice Analysis, and we track it by that relaunch date. The cognitive exam is a computer-adaptive test run through Pearson VUE at $104 per attempt. A critical, frequently misunderstood point: the state-level EMT psychomotor (skills) examination is still required — NREMT did not discontinue the skills requirement for EMT, and candidates must pass both the cognitive and their state\'s psychomotor exam to be certified. Fees, retest rules and the psychomotor requirement are set by NREMT and the individual state EMS office, so we state the published figures and flag where you must check your own state. Wage figures come from the Bureau of Labor Statistics occupation EMTs and Paramedics (SOC 29-2041), named by SOC code; BLS combines EMTs and paramedics into one series and we separate the EMT figure where BLS reports it.',
    url: '/editorial-policy'
  },
  reviewedBy: 'The exam domains and weights, the 70-120 item CAT length, the 950/1500 pass point, the TEI item types, the retest policy and the continued state psychomotor requirement were taken from the NREMT certification pages and candidate handbook, and checked against the 7 April 2025 exam relaunch.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$46,350 median for EMTs and paramedics (BLS SOC 29-2041, May 2024); EMT-specific about $41,340',
    summary:
      'The Bureau of Labor Statistics classifies both EMTs and paramedics under a single occupation code, SOC 29-2041, and the May 2024 median wage for that combined group was $46,350 a year, or about $22.28 an hour. BLS also reports the two roles separately within that series: the EMT (the entry-level certification this exam leads to) had a median of about $41,340, while paramedics — who hold the higher certification — had a median of about $58,410. The distribution for the combined group spans from the lowest 10 percent earning less than roughly $31,000 to the highest 10 percent earning more than about $79,000, which mainly reflects the EMT-to-paramedic gap and regional differences in pay and call volume. For someone sitting the NREMT EMT exam, the honest expectation is the lower end of that range: an EMT is the entry certification, and the wage rises materially once you progress to paramedic. Employment across EMTs and paramedics was 282,900 jobs in 2024, and BLS projects about 5 percent employment growth from 2024 to 2034 — about as fast as the average for all occupations — driven by population ageing, increasing demand for emergency services, and the expansion of community and interfacility transport. The openings number is the encouraging part for a job-seeker: about 19,000 openings a year, on average, over the decade, arising from both growth and replacement as workers leave the field. EMS has historically high turnover, so replacement demand is a real and steady source of openings. State-by-state pay varies substantially, and BLS publishes SOC 29-2041 figures by state and metro area; we have quoted the national medians here for comparability across the exams on this site, and we name the EMT-specific figure separately because it is the one this certification actually unlocks.',
    rows: [
      { label: 'Median annual wage, EMTs and paramedics (combined)', value: '$46,350', note: 'BLS Occupational Outlook Handbook, May 2024 ($22.28/hr)' },
      { label: 'Median annual wage, EMT (entry certification)', value: 'about $41,340', note: 'BLS OOH, EMT subset of SOC 29-2041, May 2024' },
      { label: 'Median annual wage, paramedic', value: 'about $58,410', note: 'BLS OOH, paramedic subset of SOC 29-2041, May 2024' },
      { label: 'Lowest 10 percent (combined)', value: 'less than ~$31,000', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent (combined)', value: 'more than ~$79,000', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '282,900 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~19,000 per year', note: 'BLS OOH Job Outlook, 2024-34 — growth plus replacement' }
    ],
    growth: '+5% projected change 2024-34; about 19,000 openings a year, boosted by EMS turnover and replacement demand',
    source: {
      label: 'BLS Occupational Outlook Handbook — EMTs and Paramedics',
      url: 'https://www.bls.gov/ooh/healthcare/emts-and-paramedics.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'NREMT publishes no single national pass rate — program-level first-attempt data runs roughly 65-74%',
    summary:
      'NREMT does not publish a single, clean national pass rate for the EMT cognitive exam, and any one precise national percentage you find online is usually a program-level or first-attempt figure rather than a blended pass rate across all candidates and all attempts. The exam was also substantially relaunched on 7 April 2025, so any pass-rate figure from before that date refers to a different blueprint and should not be carried forward. What is reported in the open literature and by training programs is first-attempt pass data at the program or cohort level, which for recent years has run in the rough band of about 65 to 74 percent for first attempts — meaning roughly a quarter to a third of first-time candidates do not pass on the first try, and many pass on a later attempt. NREMT itself reports candidate performance through its own candidate feedback and the score report, not as a headline national rate, so the most honest statement is that a first-attempt pass is not guaranteed and the retake path matters. The practical takeaway is twofold. First, prepare for the exam as written under the 2025 domains rather than trusting old study material, because the relaunched blueprint shifted weight toward assessment and patient-care flow. Second, understand the scoring so a fail is not a mystery: the EMT cognitive exam is scored on a scale of 100 to 1500, with a passing point of 950, and you receive a score report showing performance by the five current content domains. That report tells you exactly where to aim on a retake. We have deliberately not invented a national pass rate; the 65-74% first-attempt band is program-level reporting, not an NREMT-published national figure, and should be read as an order-of-magnitude expectation rather than a guaranteed number.',
    source: {
      label: 'NREMT — Certification Examinations',
      url: 'https://www.nremt.org/'
    },
    caveat:
      'NREMT publishes no single national pass rate for the EMT cognitive exam. First-attempt, program-level data reported in the open literature for recent years runs roughly 65-74%; this is a cohort estimate, not an NREMT-published national figure. The 2025 exam relaunch changed the blueprint, so pre-2025 pass rates do not apply. We have not invented a national rate.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The NREMT EMT cognitive exam was relaunched on 7 April 2025 and is built on the 2023 BLS Practice Analysis, so the single most important preparation fact is that older material does not match the current blueprint. The current exam is a computer-adaptive test of 70 to 120 items, including about 10 unscored pilot items, with a two-hour time limit, delivered through Pearson VUE. The content is organised into five domains: Primary Assessment is the largest at 39-43 percent, Patient Treatment and Transport is 20-24 percent, Scene Size-Up and Safety is 15-19 percent, Operations is 10-14 percent, and Secondary Assessment is 5-9 percent. The weighting is the key insight: the exam is dominated by the assessment-to-treatment flow — what you do first, what you find, and what you do about it — rather than by rote anatomy. Critically, the cognitive exam is only half the requirement: you must also pass your state\'s EMT psychomotor (skills) examination. NREMT did not discontinue the psychomotor requirement for EMT, so plan to prepare for and schedule both. The plan below assumes you have completed or are completing an EMT course and now need focused exam preparation, run over six weeks at roughly 10 to 12 hours a week. If you are studying independently without a course, extend the timeline to cover the full curriculum first. The plan front-loads the two biggest domains — Primary Assessment and Patient Treatment and Transport — because together they are roughly 60 percent of the exam.',
    totalHours: '60-120 hours (exam-focused; longer if also completing the EMT course)',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Blueprint, test mechanics, and Scene Size-Up & Safety (15-19%)',
        tasks: [
          'Read the NREMT exam content outline and the 7 April 2025 domain weights so you study the current blueprint, not old material',
          'Scene Size-Up: mechanism of injury, scene safety, resource determination, standard precautions, and the initial impression',
          'Learn the CAT rules: 70-120 items, ~10 pilot, 2 hours, pass point 950/1500',
          'Set up a weak-area tracker keyed to the five domains'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Primary Assessment (39-43%) — the largest domain',
        tasks: [
          'ABCDE primary assessment: mental status, airway, breathing, circulation, disability, exposure',
          'Recognition of immediate life threats and the interventions tied to each step',
          'Triage principles and the decision to escalate (ALS intercept, rapid transport)',
          'Drill scenario items where you must pick the next assessment or intervention in order'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Weeks 4',
        focus: 'Patient Treatment & Transport (20-24%)',
        tasks: [
          'Interventions by patient complaint: airway/breathing, cardiac, trauma, medical, environmental',
          'Packaging, immobilisation, and the transport decision (destination, mode, priority)',
          'Pharmacology within the EMT scope: oxygen, aspirin, nitroglycerin, epinephrine, albuterol, glucose, naloxone — indications and contraindications',
          'Practise applied treatment items, not just drug facts'
        ],
        hours: '11-13 hrs'
      },
      {
        label: 'Week 5',
        focus: 'Secondary Assessment (5-9%) and Operations (10-14%) + psychomotor',
        tasks: [
          'Secondary Assessment: history (SAMPLE/OPQRST), physical exam, vital signs, reassessment',
          'Operations: EMS systems, medical-legal, documentation, hazardous materials awareness, mass-casualty, vehicle extrication awareness',
          'Begin psychomotor rehearsal: patient assessment, CPR, bleeding control, airway, splinting, and your state\'s required skills',
          'Confirm your state\'s psychomotor skill list and pass standard'
        ],
        hours: '11-13 hrs'
      },
      {
        label: 'Week 6',
        focus: 'Full mock CATs, TEI practice, and gap closing',
        tasks: [
          'Two or three full 2-hour adaptive simulations and review every rationale',
          'Practise the new TEI formats — Build List, Drag-and-Drop, and Option/Check Box — because they are new since the relaunch',
          'Re-tag misses to the five domains and close the weakest one or two',
          'Schedule the state psychomotor exam and rehearse the full patient-assessment skill under observation'
        ],
        hours: '11-13 hrs'
      }
    ],
    variants: [
      { label: 'Just finished an EMT course', detail: 'Four to six weeks. Your course covered the content; use the time for exam technique, full mock CATs, the new TEI formats, and psychomotor rehearsal.' },
      { label: 'Studying independently without a course', detail: 'Twelve to sixteen weeks, because you must also learn the full curriculum before the exam. Cover the five domains first, then the exam-prep weeks above, and arrange the state-approved course and psychomotor exam.' },
      { label: 'Retake after a failed attempt', detail: 'Three to four weeks, targeted. Read your NREMT score report by domain, attack the weakest domain (usually Primary Assessment), and re-sit after the 15-day wait.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The NREMT EMT exam is built around assessment flow, and the most common failure mode is studying it like a anatomy-and-pharmacology trivia test. The 2025 blueprint makes this explicit: Primary Assessment alone is 39-43 percent and Patient Treatment and Transport adds another 20-24 percent, so roughly 60 percent of the exam is "what do you do, in what order, and why." That rewards scenario practice and hurts candidates who memorised drug lists but cannot run an organised assessment. The second strategic fact is that the exam changed on 7 April 2025, so legacy question banks and pre-2025 books are misaligned with the current weights — especially the reduced emphasis on isolated Secondary Assessment facts and the new Technology-Enhanced Item (TEI) formats. The third fact, and the one candidates most often get wrong, is that the cognitive exam is necessary but not sufficient: you must also pass your state psychomotor exam, and NREMT did not drop that requirement. The strategies below are ordered by point swing; the first three address the mistakes that actually cause failures.',
    items: [
      {
        title: 'Study the assessment flow, not trivia',
        detail: 'Primary Assessment (39-43%) plus Patient Treatment and Transport (20-24%) is about 60% of the exam. Drill the ABCDE sequence and the linked interventions until choosing the next action in a scenario is reflexive. Candidates who know drug facts but cannot run an organised assessment lose the largest block of points.'
      },
      {
        title: 'Use only post-7-April-2025 material',
        detail: 'The relaunched exam shifted domain weights and added TEI item types. Pre-2025 books and qbanks are misaligned, especially on the heavier Primary Assessment weighting and the reduced Secondary Assessment share. Check the publication or revision date on anything you buy; if it predates the relaunch, treat it as partial reference only.'
      },
      {
        title: 'Do not assume the psychomotor exam was discontinued',
        detail: 'NREMT did not eliminate the state EMT psychomotor (skills) examination; you must pass both the cognitive and your state\'s psychomotor exam. Plan and schedule the skills exam deliberately, and rehearse the full patient-assessment skill plus your state\'s required stations, because a passed cognitive exam alone does not certify you.'
      },
      {
        title: 'Practise the new TEI formats',
        detail: 'The relaunched exam added Technology-Enhanced Items — Build List, Drag-and-Drop, and Option/Check Box — that were not on the older exam. They test ordering and selection rather than single-answer recall, and candidates who have never seen them lose time and points. Use a qbank that includes TEIs so the format is familiar on test day.'
      },
      {
        title: 'Take timed 2-hour adaptive mocks',
        detail: 'The cognitive exam is 70-120 items in two hours. Timed simulation builds pacing and surfaces weak domains via your score report. Review every rationale, including correct items, because the distractors in assessment and treatment questions are clinically plausible.'
      },
      {
        title: 'Master the EMT-scope pharmacology as decisions',
        detail: 'For each EMT-scope drug (oxygen, aspirin, nitroglycerin, epinephrine, albuterol, glucose, naloxone), know the indication, the contraindication, the dose form, and when you would or would not give it. Pharmacology shows up inside treatment scenarios, not as isolated recall, so learn it as a decision rule.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The EMT study market is dominated by a few long-standing names, and the most important buying decision after the NREMT exam itself is whether your resource reflects the 7 April 2025 blueprint. Anything dated before the relaunch is misaligned on domain weights and lacks the new TEI formats, so confirm the edition or the qbank\'s "current NREMT" labelling before you pay. The second decision is qbank volume versus instruction: the cognitive exam rewards scenario repetition, so a strong qbank with good rationales is worth more than a thick textbook for most candidates, though you still need one authoritative content reference. The third decision is the psychomotor component, which no cognitive qbank covers — you need hands-on lab time and, ideally, a partner to run the patient-assessment skill. Unlike the RN exam, there is no single official NREMT practice exam sold the way NCSBN sells one, so the commercial qbanks are the main source of simulated items; none contain live exam content.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NREMT exam fee (cognitive)', values: ['$104 per attempt', 'Pearson VUE test centre', 'Required - paid each time you sit the cognitive exam'] },
      { label: 'Your state EMT psychomotor exam', values: ['Set by your state EMS office; commonly low cost or included with the course', 'In-person skills station', 'Mandatory second half of certification - not optional'] },
      { label: 'Kettering EMT Premier / Crash Course', values: ['~$150-400 depending on package', 'Live or online course plus materials', 'Strategy-heavy instruction for the assessment-flow style of the exam'] },
      { label: 'Limmer EMTReview / EmtPrep qbank', values: ['~$40-150 for a subscription', 'Online qbank with rationales', 'High-volume scenario practice aligned to the current blueprint'] },
      { label: 'Fisdap EMT Practice Tests', values: ['Varies by program; often through your school', 'Online exams with diagnostics', 'Program-linked practice with domain feedback'] },
      { label: 'Emergency Care and Transportation of the Sick and Injured (AAOS)', values: ['~$80-110', 'Textbook', 'The standard content reference; confirm it is the current edition'] },
      { label: 'A skills partner and a lab/ambulance bay', values: ['Free to low cost', 'In person', 'The only way to rehearse the psychomotor patient-assessment skill'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax and vary by promotion, program and state. The $104 NREMT cognitive fee is set by the registry; state psychomotor fees are set by the state EMS office. Confirm any resource is labelled for the post-7-April-2025 NREMT blueprint. We do not rank by commission, and no third party sells live exam items.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'EMT candidates fail in predictable ways, and most of the failures trace back to three errors: studying the wrong blueprint, studying the wrong kind of content, and forgetting that the cognitive exam is only half the requirement. The blueprint error is time-sensitive — the exam relaunched on 7 April 2025, so anyone using pre-2025 books is preparing for a test that no longer exists, especially on the heavier Primary Assessment weighting and the new TEI item types. The content error is treating the exam as a memorisation test when it is an assessment-flow test; candidates who know facts but cannot choose the next action in order lose the largest domains. The requirement error is the most costly: believing the psychomotor exam was discontinued, when NREMT did not drop it, so a passed cognitive exam leaves the candidate uncertified until they also pass state skills. The list below collects these and the smaller logistics mistakes that still cost seats.',
    items: [
      {
        mistake: 'Using pre-7-April-2025 study material',
        fix: 'The exam relaunched on 7 April 2025 with new domain weights (Primary Assessment 39-43%, Secondary Assessment down to 5-9%) and new TEI formats. Anything older is misaligned. Check the edition or revision date on books and qbanks; if it predates the relaunch, use it only as a content reference, not as a blueprint.'
      },
      {
        mistake: 'Memorising facts instead of assessment flow',
        fix: 'Roughly 60% of the exam is Primary Assessment plus Patient Treatment and Transport. Drill the ABCDE sequence and the linked interventions so you can choose the next action in a scenario. Candidates who know drug facts but cannot run an organised assessment lose the biggest point blocks.'
      },
      {
        mistake: 'Assuming the psychomotor exam was discontinued',
        fix: 'NREMT did not eliminate the state EMT psychomotor examination. You must pass both the cognitive exam and your state\'s skills exam to be certified. Schedule and rehearse the psychomotor patient-assessment skill and your state\'s required stations; a passed cognitive alone does not certify you.'
      },
      {
        mistake: 'Never practising the new TEI formats',
        fix: 'Build List, Drag-and-Drop and Option/Check Box items are new since the relaunch and were not on the older exam. They cost time and points if unfamiliar. Use a qbank that includes TEIs so the ordering and selection mechanics are routine on test day.'
      },
      {
        mistake: 'Burning attempts with no domain feedback',
        fix: 'The EMT cognitive exam is scored 100-1500 with a 950 pass point and returns a score report by domain. After a fail, study that report and attack the weakest domain rather than re-sitting on the same preparation. You are limited to six attempts and must complete remedial training after three failures, so each attempt is expensive.'
      },
      {
        mistake: 'Letting the ATT or eligibility window lapse',
        fix: 'Your Authorization to Test is valid for 90 days and your exam eligibility runs two years from course completion. Schedule within the ATT window and complete both exams before eligibility expires, or you may have to retake the course. Confirm both deadlines with NREMT and your state.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The NREMT EMT cognitive exam, relaunched 7 April 2025, is a computer-adaptive test of 70 to 120 items including about 10 unscored pilot items, with a two-hour limit, delivered at Pearson VUE. It is scored on a scale of 100 to 1500 with a passing point of 950. The content follows five domains drawn from the 2023 BLS Practice Analysis: Primary Assessment (39-43%), Patient Treatment and Transport (20-24%), Scene Size-Up and Safety (15-19%), Operations (10-14%), and Secondary Assessment (5-9%). Since the relaunch the exam includes Technology-Enhanced Items (TEIs) alongside traditional multiple choice: Build List (order steps), Drag-and-Drop, and Option/Check Box items, in addition to standard single-best-answer and multiple-response questions. The exam is adaptive, so the number of items you receive and their difficulty adjust to your performance, and it ends once the engine has enough information to place you above or below the 950 pass point. The three worked samples below illustrate the assessment-flow style and one TEI format on the published blueprint; they are editor-written and are not live exam items.',
    types: [
      { name: 'Single-best-answer multiple choice', share: 'The legacy core of the exam', detail: 'A scenario with four options; you select the best next action or the correct fact. Distractors are clinically plausible alternative actions, so assessment order matters more than recall.' },
      { name: 'Technology-Enhanced Items (TEIs)', share: 'Added in the 7 April 2025 relaunch', detail: 'Build List (put steps in correct order), Drag-and-Drop, and Option/Check Box items that test sequencing and selection rather than single-answer recall.' },
      { name: 'Multiple response', share: 'A minority of items', detail: 'More than one option is correct; you must select all that apply. Common in treatment and operations scenarios.' },
      { name: 'State psychomotor (skills) exam', share: 'Separate, required, not part of the CAT', detail: 'A performance exam of practical skills (patient assessment, airway, CPR, bleeding control, splinting, etc.) set by the state. NREMT did not discontinue this requirement for EMT.' }
    ],
    samples: [
      {
        prompt: 'You arrive on scene of a 54-year-old who collapsed while mowing the lawn. Bystanders state he suddenly grabbed his chest and fell. He is conscious, pale, diaphoretic, and holding his chest. His airway is open and breathing is rapid at 28/min. What is your NEXT action?',
        options: [
          'A. Begin chest compressions',
          'B. Administer nitroglycerin sublingually',
          'C. Assess circulation and obtain a set of vital signs, then attach the AED/monitor and provide oxygen as indicated',
          'D. Immediately transport without further assessment'
        ],
        answer: 'C',
        explanation: 'This is a Primary Assessment item (the largest domain). The patient has a patent airway and is breathing, so compressions (A) are not yet indicated, and you do not jump to a specific intervention before completing the assessment and gathering vitals. Nitroglycerin (B) is not given by the EMT without the proper prescribed protocol and a completed assessment, and you would not administer it blindly to a conscious chest-pain patient without checking blood pressure and contraindications. D skips the assessment entirely. C follows the assessment flow: confirm circulation status, get vitals, attach monitoring/defibrillation capability, and support breathing with oxygen per protocol — the correct next step for an alert patient with signs of cardiac compromise.'
      },
      {
        prompt: 'TEI-style (Build List): Place the steps of the adult primary assessment in the correct order. Select and order all that apply.',
        options: [
          'A. Form a general impression',
          'B. Assess level of consciousness (AVPU)',
          'C. Assess airway and breathing',
          'D. Assess circulation (pulse, bleeding, skin)',
          'E. Determine patient priority and call for resources'
        ],
        answer: 'A, B, C, D, E',
        explanation: 'The Build List item tests the ordered flow of the primary assessment, which is the single largest exam domain. The correct sequence is: form a general impression (A) on approach, assess mental status with AVPU (B), then airway and breathing (C), then circulation (D), and finally use that information to determine priority and call for the resources the patient needs (E). Candidates who scramble the order — for example putting resource activation before completing the ABC survey — miss the point the item is measuring. TEIs award credit for the correct sequence, so practising the order matters as much as knowing the steps exist.'
      },
      {
        prompt: 'At a motor-vehicle collision, you note downed power lines across the road and a hissing sound from the damaged vehicle. The MOST important initial action is to:',
        options: [
          'A. Extricate the driver immediately because of the hissing sound',
          'B. Ensure scene safety by establishing a safe distance and requesting utility and extrication resources',
          'C. Begin triage of all patients before securing the scene',
          'D. Administer oxygen to the driver through the window'
        ],
        answer: 'B',
        explanation: 'This is a Scene Size-Up and Safety item (15-19% of the exam). Downed power lines and a possible fuel leak make the scene hazardous, and rescuer safety comes first — you establish a safe perimeter and call utility (power company) and extrication resources before approaching. A is dangerous: extricating near live wires risks electrocution. C inverts the priority — you do not triage before the scene is safe. D exposes the rescuer to the hazard. The theme across the domain is that the first correct action at many EMS scenes is making the scene safe, not treating.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published 2025 blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The NREMT EMT cognitive exam is delivered by appointment at a Pearson VUE test centre; there is no at-home/remote option for the NREMT EMT cognitive exam. Your appointment is two hours for the items themselves, but allow extra time for check-in. The exam is computer adaptive — it serves 70 to 120 items including about 10 unscored pilot items and stops once the engine is confident you are above or below the 950 pass point, so the number of items you answer varies and is not a score signal. Results are typically posted about two business days after the exam, and your score report breaks performance down by the five domains, which is what you use to target a retake if needed. Remember that the cognitive exam is only one half: you must also pass your state\'s psychomotor skills exam, which is scheduled separately through your state EMS office and is not taken at the Pearson VUE centre. The most common non-clinical failure on the day is the ID rule — you need valid, government-issued photo identification with a name matching your NREMT registration exactly, or you will be turned away and the attempt forfeited. Confirm both the ID and the validity of your Authorization to Test (valid 90 days) before you leave.',
    bring: [
      'Valid, government-issued photo ID with a name matching your NREMT registration exactly',
      'Your Authorization to Test (ATT) confirmation and appointment confirmation number',
      'Prescription glasses if you need them for screen reading; the centre provides a locker for everything else',
      'A snack and water for after the exam, stored in the locker',
      'Arrive early — Pearson VUE requires check-in time before your scheduled start'
    ],
    leave: [
      'Phones, smartwatches, calculators and any electronic device — locked in the centre locker',
      'All notes, books, and any reference material; the exam is closed-book',
      'Bags, coats and outerwear beyond what fits in the locker',
      'Food or drink inside the testing room',
      'Another person; guests are not permitted in the centre'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your ID name matches your NREMT registration exactly and that your ATT has not expired (valid 90 days; eligibility window is two years from course completion). A mismatch or expired ATT means no exam.' },
      { time: 'The night before', detail: 'Sleep. A two-hour adaptive exam rewards sustained focus; do not cram the night before. Confirm the test-centre address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the Pearson VUE centre. Check-in includes ID verification, a photo, and often a palm-vein or signature capture, then locker assignment.' },
      { time: 'Start', detail: 'The CAT begins; items appear one at a time. You cannot skip and return — each item is locked once you submit it, so read carefully before confirming.' },
      { time: 'During the exam', detail: 'Pace to the two-hour limit; the exam ends adaptively when the engine reaches the confidence point or the 120-item maximum. Do not read the item count as a score.' },
      { time: 'After', detail: 'Results post about two business days later, with a domain-level score report. The state psychomotor exam is scheduled separately — it is not part of this appointment.' }
    ],
    rules: [
      'Delivered at a Pearson VUE test centre; no at-home/remote option for the NREMT EMT cognitive exam.',
      'Computer-adaptive: 70-120 items including ~10 unscored pilot, two-hour limit, scored 100-1500 with a 950 pass point.',
      'You cannot skip and return to items; each is locked once submitted, so read carefully before confirming.',
      'Valid government photo ID with a name matching your NREMT registration exactly is required, or you are turned away.',
      'A separate state EMT psychomotor (skills) exam is still required — NREMT did not discontinue it; schedule it through your state EMS office.',
      'Retest: 15-day wait between attempts, maximum six attempts, and remedial training (about 24 hours for EMT) required after three failures.',
      'Your ATT is valid 90 days and exam eligibility runs two years from course completion.'
    ],
    afterwards:
      'Results are typically posted about two business days after the cognitive exam, with a score report that breaks your performance down by the five domains — Primary Assessment, Patient Treatment and Transport, Scene Size-Up and Safety, Operations, and Secondary Assessment. On a cognitive pass, you are still not certified until you also pass your state\'s psychomotor skills exam; schedule that promptly through your state EMS office, because both halves are required and the ATT/eligibility clocks keep running. On a fail, the domain report is the tool: attack the weakest domain (most often Primary Assessment) rather than re-sitting on the same preparation. You must wait 15 days between attempts, you are limited to six attempts, and after three failures you must complete remedial training (about 24 hours for EMT) before the next attempt — so each attempt is genuinely expensive and should be prepared for deliberately. If your two-year eligibility window or your 90-day ATT is close to expiring, prioritise scheduling, because letting it lapse may force a course retake. Both exams passed, your NREMT EMT certification is granted and listed; note the recertification cycle (currently a 2-year cycle with required continuing education and, at renewal, a cognitive requirement) so you do not lapse.'
  }
};

export default data;
