// Depth content for: faa-ira-instrument-rating-airplane
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Aviation & maritime credentials desk',
    bio: 'This desk covers FAA pilot knowledge and practical tests. Exam structure, question counts, time allotments, passing scores and endorsement rules come from the FAA Airman Certification Standards (ACS) and the FAA Airman Knowledge Testing Matrix; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published or has changed, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the IRA knowledge test format (60 questions, 70% passing, endorsement requirements) against the FAA Instrument Rating Airplane ACS and the current FAA Airman Knowledge Testing Matrix; wage context against BLS OOH Airline and Commercial Pilots (SOC 53-2012), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$122,670 median for commercial pilots (BLS, May 2024)',
    summary:
      'The national median wage for commercial pilots was $122,670 in May 2024 (BLS, SOC 53-2012), and that is the right benchmark for an instrument-rating candidate because the rating is a building block on the path to commercial and airline flying — the knowledge test is one of three steps toward the instrument rating, which then unlocks the instrument-flight privileges and experience that commercial and airline careers require. The lowest 10 percent of commercial pilots earned less than $59,330 and the highest 10 percent more than $239,200 in the same period, and BLS counted 155,400 airline and commercial pilot jobs in 2024, projecting 4 percent growth from 2024 to 2034 for the group, with commercial pilots themselves projected to grow 5 percent and about 18,200 openings a year across the group, almost all tied to the airline pilot career pipeline that a professional pilot builds toward. Read the median with the standard pilot-market caveats: pay is heavily tiered by segment — airline pilots, copilots and flight engineers carried a far higher May 2024 median of $226,600, while commercial pilots working outside scheduled airlines sit at $122,670 — and an instrument rating is a credential that qualifies and trains rather than directly setting a wage, so its value is that it is effectively required for a professional flying career. The honest framing: the instrument rating is one of the most important steps in the pilot career path, the knowledge test is the academic gate into it, and the wage figures above are the destination of the path, not the immediate result of passing the test.',
    rows: [
      { label: 'Median annual wage, commercial pilots', value: '$122,670', note: 'BLS OOH, SOC 53-2012, May 2024' },
      { label: 'Lowest 10 percent, commercial pilots', value: 'Under $59,330', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent, commercial pilots', value: 'Above $239,200', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Median, airline pilots, copilots and flight engineers', value: '$226,600', note: 'BLS OOH, May 2024 — the career destination' },
      { label: 'Projected annual openings, airline and commercial pilots', value: '~18,200 per year', note: 'BLS OOH Job Outlook, 2024-34' }
    ],
    growth: 'BLS projects 4 percent growth for airline and commercial pilots from 2024 to 2034, with commercial pilots at 5 percent and about 18,200 openings a year for the group.',
    source: {
      label: 'BLS Occupational Outlook Handbook - Airline and Commercial Pilots',
      url: 'https://www.bls.gov/ooh/transportation-and-material-moving/airline-and-commercial-pilots.htm'
    }
  },
  passRate: {
    headline: 'The FAA publishes the passing standard, not a pass rate: 60 questions, 70% to pass (42 correct), and the score drives the checkride oral',
    summary:
      'The FAA does not publish pass-rate statistics for the Instrument Rating Airplane (IRA) knowledge test, and we state that plainly — no official percentage of candidates passing is released, so we do not present one as authoritative. What the FAA does publish, in the Airman Certification Standards and the Airman Knowledge Testing Matrix, is the complete mechanics of the test: the IRA consists of 60 multiple-choice questions, each with three choices, with a passing score of 70 percent, meaning at least 42 correct answers, and the knowledge areas tested span regulations, IFR en route and approach procedures, air traffic control, IFR navigation, weather and windshear, safe and efficient IFR operations, aeronautical decision-making and crew resource management. On the time allotment, note a recent change: the Airman Certification Standards historically listed 2.5 hours, and many study guides still cite it, but the current FAA Airman Knowledge Testing Matrix (revised October 2025) lists a 2.0-hour allotment for the IRA — confirm the current figure on the matrix when you schedule. Two structural facts matter more than a pass rate. First, the passing score is not the whole story: your score report lists the specific ACS codes of the questions you missed, and the examiner is required to probe those deficient areas during the checkride oral — so a 70 percent pass leads to a longer, harder oral than an 85 percent pass. Second, a passing knowledge test is valid for 24 calendar months; if the checkride is not completed within that window, the test must be retaken regardless of the score.',
    source: {
      label: 'FAA - Airman Knowledge Testing Matrix and Instrument Rating Airplane ACS',
      url: 'https://www.faa.gov/training_testing/testing/testing_matrix/'
    },
    caveat:
      'The FAA publishes no pass rate; it publishes the mechanics — 60 questions, 70% passing, 24-month validity, and a current time allotment of 2.0 hours on the matrix (2.5 hours per the older ACS). Confirm the current figure when scheduling.'
  },
  studyPlan: {
    summary:
      'The instrument rating is a three-part path — knowledge test, instrument flight training, and the checkride practical test — and the knowledge test is the academic gate, so a defensible study plan runs 40 to 60 hours over four to six weeks, timed so the test is taken while the material is fresh and well before the flight training ramps up. Week 1 is orientation: download the Instrument Rating Airplane ACS, read the knowledge-test blueprint with its question-weight ranges, and confirm the current time allotment on the FAA testing matrix; take a practice test to baseline. Weeks 2-3 cover the big knowledge areas — IFR regulations and the instruments and equipment required, IFR en route and approach procedures, IFR navigation and charts, air traffic control and clearances, and weather reports and forecasts — using the published FAA instrument rating knowledge materials and the test supplement figures the real exam references. Weeks 3-4 are applied: work the navigation and approach plate interpretation hard, because chart, SID, STAR and instrument approach procedure (IAP) items make up the largest single block of the paper, and practise the calculations the supplement supports, such as holding-pattern entries, course and fuel planning. Weeks 5-6 are rehearsal: two full timed practice tests at the real question count, then a pass over the ACS codes you miss, and study until you can score well above 70 percent — because the score report follows you to the checkride and a high score shortens the oral. The most common planning error is rushing to the test and then letting the 24-month validity lapse before the checkride, which wastes the entire effort.',
    totalHours: '40-60 hours over 4-6 weeks, coordinated with flight training and the checkride window',
    weeks: [
      { label: 'Week 1', focus: 'ACS and baseline', tasks: ['Download the Instrument Rating Airplane ACS and read the blueprint', 'Confirm the current test mechanics on the FAA matrix', 'Take a practice test to baseline'], hours: 6 },
      { label: 'Weeks 2-3', focus: 'Regulations, procedures and weather', tasks: ['IFR regulations, instruments and equipment; en route and approach procedures', 'Air traffic control, clearances, and IFR navigation', 'Weather reports, forecasts and windshear'], hours: 18 },
      { label: 'Weeks 3-4', focus: 'Charts and applied items', tasks: ['SIDs, STARs and instrument approach plate interpretation', 'Holding-pattern entries and course/fuel calculations', 'Work the test supplement figures the exam references'], hours: 15 },
      { label: 'Weeks 5-6', focus: 'Timed rehearsal', tasks: ['Two full timed practice tests at the real question count', 'Pass over the missed ACS codes', 'Target well above 70% to shorten the checkride oral'], hours: 12 }
    ],
    variants: [
      { label: 'Studying alongside instrument flight training', detail: 'The knowledge and flight training reinforce each other; take the knowledge test after the ground phase of your course but before the intensive approach work.' },
      { label: 'Trained under a part 141 school', detail: 'A part 141 instrument course includes a structured ground training component that can satisfy the knowledge-test endorsement; follow the school\u2019s syllabus.' },
      { label: 'Part 61 self-paced student', detail: 'You need a ground instructor\u2019s logbook endorsement or certificate of graduation before the test; build that into the schedule.' }
    ]
  },
  prepStrategies: {
    summary:
      'The IRA knowledge test rewards broad, applied knowledge, and the dominant strategy is to study to the ACS blueprint and rehearse under the real format. First, use the ACS as the scope map: it defines exactly what is testable and the weight ranges per knowledge area, and candidates who study outside it waste time on content the exam does not ask. Second, make chart and instrument approach procedure interpretation the priority, because navigation and approach items form the largest single block of the paper — drill SIDs, STARs, IAPs and the test supplement figures repeatedly rather than reading about them. Third, learn the weather material properly: weather reports, forecasts and windshear are a substantial tested area and one where candidates who only memorise definitions lose applied points. Fourth, rehearse with the exact test supplement the real exam provides, because many items cannot be answered without reading the figure the stem references, and practising without the figures leaves you unprepared for the format. Fifth, manage the endorsement requirement: you cannot sit the IRA without a ground-school certificate of graduation or a logbook endorsement from an authorized instructor, so line that up early. Finally, study for a score well above 70 percent, because your score report travels to the checkride and the examiner probes the ACS codes you missed — a high score is worth a shorter oral on the day that matters. A further strategy is to build the calculation skills the exam rewards: holding-pattern entries, course and fuel-planning arithmetic, and time-speed-distance problems are a recurring, testable cluster, and candidates who practise them with the E6B or electronic flight computer under the clock convert a common weak area into reliable points. Learn the airspace and communication structure as it applies to IFR — clearances, en route and approach services, and the phraseology the exam expects — because the air-traffic-control knowledge area is a meaningful share of the paper. Weather deserves depth rather than coverage: METARs, TAFs and the forecast products the exam references are applied items that reward being able to read the actual products, not just recall their definitions. Finally, schedule the test so its 24-month validity is usable: the knowledge test is valid for 24 calendar months, and the exam is wasted if the checkride does not happen inside that window, so coordinate the study plan with the flight-training timeline rather than passing early and letting the credit decay.',
    items: [
      { title: 'Study to the ACS blueprint', detail: 'The ACS defines the testable knowledge areas and weights; everything on the paper maps to it.' },
      { title: 'Make chart and approach interpretation the priority', detail: 'SIDs, STARs, IAPs and the supplement figures are the largest single block.' },
      { title: 'Learn weather beyond definitions', detail: 'Reports, forecasts and windshear carry applied items that rote study misses.' },
      { title: 'Rehearse with the real test supplement', detail: 'Many items require reading the figure the stem references; practise with the published supplement.' },
      { title: 'Line up the endorsement early', detail: 'A ground-school certificate or instructor logbook endorsement is required to sit the test.' },
      { title: 'Target well above 70 percent', detail: 'Your score report follows you to the checkride oral; a high score shortens it.' }
    ]
  },
  resourceComparison: {
    summary:
      'The IRA knowledge test prep market is well served by both official and commercial material, and the honest ordering is official FAA documents first. The Airman Certification Standards and the Airman Knowledge Testing Supplement are free official PDFs and are the authoritative scope map and figure set; the FAA also publishes instrument knowledge guidance at no cost. Commercial study guides from the major aviation training publishers (roughly $25-60) and instrument-specific practice-test software or apps (roughly $20-80) add structured review and realistic rehearsal, and their value is volume and question style rather than unique content. A ground school course — in-person or online — ranges from about $100 to $500 and can be the most efficient path because it also produces the required endorsement. The knowledge test itself typically costs around $175 at an authorized testing center (prices are set by the testing vendors and vary), and a passing result is valid 24 months, so the practical budget question is tied to the checkride timeline. The buying rule is to study the free FAA documents first and use the practice-test software in the final weeks, because rehearsal on the supplement figures and question style is what actually moves scores. Prices below are current as of mid-2026 and change frequently; we rank nothing by commission. The market is stable and well served, so the buying decision is mostly about format preference. The free FAA documents should come first for every candidate: the ACS defines the scope and the supplement is the exact figure set the exam references, and neither has a paid equivalent. The practice-test software is the one purchase that most candidates should make, because rehearsal on the three-choice item style and the supplement figures under a timer is what builds the score, and the major publishers\u2019 software tracks performance by ACS code, which converts practice misses into a targeted study list. A study guide is a structured alternative to the raw FAA text for candidates who want the knowledge organised, and a ground school is worth its price for candidates who also need the required endorsement or who learn better with an instructor. The knowledge test fee itself is set by the testing vendors and varies by location, and because a passing report is valid 24 months, the scheduling cost is best understood together with the checkride timeline. Candidates who already hold a part 141 school\u2019s ground training may find the endorsement included, which removes the need for a separate ground school purchase.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'FAA Instrument Rating Airplane ACS and Airman Knowledge Testing Supplement', values: ['Free', 'Official PDFs', 'The authoritative scope map and the figures the exam references'] },
      { label: 'Instrument knowledge study guide (e.g. ASA, Gleim)', values: ['~$25-60', 'Print or PDF', 'Structured ground knowledge review'] },
      { label: 'Practice test software / apps', values: ['~$20-80', 'Computer-based question banks', 'Rehearsal on question style and the supplement figures'] },
      { label: 'Ground school course (in-person or online)', values: ['~$100-500', 'Course with instructor', 'Structured learning plus the required endorsement'] },
      { label: 'IRA knowledge test', values: ['~$175 at authorized testing centres', 'Computer-based, three-choice items', 'The knowledge test itself'] }
    ],
    footnote: 'Prices current as of mid-2026 and subject to change; the FAA documents are free and should be studied first. No commission-based ranking.'
  },
  commonMistakes: {
    summary:
      'The most common IRA mistakes fall into four groups. First, studying without the test supplement: many IRA items cannot be answered without reading the figure the stem references, and candidates who practise only question banks never learn to use the supplement figures efficiently under the clock. Second, treating 70 percent as the goal: a bare pass is a pass, but the score report lists the ACS codes you missed, the checkride examiner is required to probe those areas in the oral, and a 72 percent pass produces a noticeably harder oral than an 85 percent one — so the target should be well above the minimum. Third, letting the 24-month validity lapse: a passing knowledge test is valid for 24 calendar months, and candidates who pass early and then stretch out flight training are forced to retake a test they already passed. Fourth, ignoring the endorsement requirement: the IRA cannot be sat without a ground-school certificate of graduation or an instructor logbook endorsement, and candidates who arrive without it lose the appointment. Fifth, candidates misread the current time allotment — the ACS historically cited 2.5 hours while the current testing matrix lists 2.0 — and build their pacing from an outdated figure. Finally, candidates memorise the chart legends instead of practising interpretation, which fails on the applied items that dominate the paper. A further mistake is poor time management on the figure-based items: candidates who read a stem, then hunt through the supplement for the referenced figure, can spend two or three minutes on a single item, and with 60 questions the budget is tight — the fix is to practise flipping to the referenced figure quickly and reading it methodically, which is a rehearsal skill just like any content item. Another common error is neglecting the calculation items: holding entries, course and fuel problems are a recurring cluster, and candidates who practise them under the clock bank reliable points while candidates who skip them surrender them. Finally, candidates underestimate the value of the score report as a diagnostic: on a fail, the report lists the exact ACS codes missed, and re-studying those areas — rather than re-reading the whole ground syllabus — is what turns the retake into a pass. The report is also the examiner\u2019s checklist for the oral, so studying the missed codes has a double payoff: it repairs the retake and shortens the checkride.',
    items: [
      { mistake: 'Studying without the test supplement', fix: 'Practise reading the supplement figures under the clock; many items require them.' },
      { mistake: 'Targeting a bare 70 percent', fix: 'The score report follows you to the checkride oral; aim well above the minimum.' },
      { mistake: 'Letting the 24-month validity lapse', fix: 'Coordinate the test with the checkride window so you never retake a passed test.' },
      { mistake: 'Skipping the endorsement', fix: 'Arrange the ground-school certificate or instructor endorsement before scheduling.' },
      { mistake: 'Pacing from an outdated time figure', fix: 'Confirm the current allotment on the FAA testing matrix (2.0 hours) when scheduling.' },
      { mistake: 'Memorising legends instead of interpreting', fix: 'The applied chart and approach items reward interpretation, not recall.' }
    ]
  },
  questionTypes: {
    summary:
      'The IRA knowledge test is 60 multiple-choice questions, each with three choices (A, B, C), delivered by computer at an FAA-authorized testing center, with a passing score of 70 percent — at least 42 correct — and a time allotment that the current FAA Airman Knowledge Testing Matrix lists at 2.0 hours (the older ACS cited 2.5 hours, so confirm the current figure when scheduling). Every item is objective and independent, and there is no penalty for guessing, so unanswered questions are the only guaranteed misses. The questions follow the ACS knowledge areas: IFR regulations; IFR en route and approach procedures; air traffic control and procedures; IFR navigation; weather reports, critical weather and windshear and forecasts; safe and efficient IFR operations; aeronautical decision-making; and crew resource management. Many items are reference-based: the stem references a figure, chart or legend in the Airman Knowledge Testing Supplement, and the question cannot be answered without reading it — which is why rehearsal with the published supplement is essential. The score report lists the ACS code of every missed question, and that report is both the diagnostic tool for a retake and the document the checkride examiner uses to probe deficiencies. The pacing logic follows from the format: with 60 questions and a time allotment that the current matrix lists at 2.0 hours, the budget averages two minutes per question, but the figure-based items legitimately take longer than the regulation items, so candidates should move quickly on the definitional questions to reserve time for the chart and calculation items. There is no penalty for guessing, and every question has a single correct answer, so the strategy of answering everything and using the review function for flagged items is strictly correct. The three-choice format matters for preparation: with only two distractors per item, the exam rewards precision about the correct fact rather than elimination skill, and candidates who studied to three-choice practice banks are better calibrated than those who practised only four-choice formats. The reference-based items, where the stem points to a supplement figure, are the single most distinctive feature of the exam, and rehearsal with the published supplement is the only way to prepare for them accurately. Samples below are editor-written illustrations of the published knowledge areas, not live exam items.',
    types: [
      { name: 'Regulation and equipment items', share: '5-15%', detail: 'IFR regulations under 14 CFR, instrument and equipment requirements, and currency rules.' },
      { name: 'IFR procedures and air traffic control', share: '10-35% combined', detail: 'En route and approach procedures, clearances, and ATC communications.' },
      { name: 'IFR navigation and charts', share: '5-20%', detail: 'SIDs, STARs, IAPs and navigation systems, answered with the test supplement figures.' },
      { name: 'Weather and windshear', share: '10-20%', detail: 'Reports, forecasts, critical weather and windshear, often applied to a flight decision.' },
      { name: 'Safe operations, ADM and CRM', share: '15-30% combined', detail: 'Safe and efficient IFR operations, aeronautical decision-making and crew resource management.' }
    ],
    samples: [
      {
        prompt: 'Under 14 CFR 91.167, an aircraft operated in IFR conditions must carry enough fuel to reach the first airport of intended landing, then to the alternate if one is required, and then for how long at normal cruising speed?',
        options: ['A. 45 minutes', 'B. 30 minutes', 'C. 20 minutes', 'D. 15 minutes'],
        answer: 'A',
        explanation: 'The IFR fuel requirement under 91.167 is fuel to the first airport of intended landing, then to the alternate when required, then 45 minutes at normal cruising speed. The 30-minute figure belongs to VFR night reserves, and 20 minutes is not an IFR reserve figure.'
      },
      {
        prompt: 'The weather forecast at a pilot\u2019s destination calls for a ceiling of 1,500 feet and visibility of 2 miles at the estimated time of arrival. Regarding the alternate airport requirement:',
        options: ['A. An alternate is required because the forecast does not meet the 2,000-foot ceiling / 3-mile visibility rule', 'B. No alternate is required because the ceiling and visibility are acceptable', 'C. An alternate is only required for jet aircraft', 'D. An alternate is required only when the visibility is below 1 mile'],
        answer: 'A',
        explanation: 'For most IFR flights, an alternate is required when the forecast at the destination from 1 hour before to 1 hour after ETA does not meet the standard of at least 2,000-foot ceiling and 3 statute miles visibility. At 1,500 overcast and 2 miles, the standard is not met, so an alternate is required.'
      },
      {
        prompt: 'A pilot receives a radar vector off the departure procedure. The controller assigns a heading that takes the aircraft away from the published route. The pilot should:',
        options: ['A. Follow the controller\u2019s vector and confirm the reason if it is unclear', 'B. Decline the vector and fly the published procedure regardless', 'C. Turn back toward the departure airport', 'D. Climb to a higher altitude without asking'],
        answer: 'A',
        explanation: 'Controllers may vector an aircraft in lieu of a published procedure, and a pilot is expected to comply; if the purpose of the vector is unclear, the pilot asks. Declining a lawful vector or turning back on one\u2019s own would conflict with ATC clearances.'
      },
      {
        prompt: 'A pilot\u2019s instrument currency has lapsed: within the last 6 months the pilot has not performed the required instrument approaches, holding and course-tracking tasks. To act as pilot-in-command under IFR again, the pilot must:',
        options: ['A. Pass an instrument proficiency check with an authorized instructor or examiner', 'B. Simply log 10 hours of instrument time', 'C. Re-take the IRA knowledge test', 'D. Complete a solo cross-country flight'],
        answer: 'A',
        explanation: 'Under 14 CFR 61.57(c), a pilot who is not current has a further 6-month period in which an instrument proficiency check (IPC) can be used to regain currency; after 12 months lapsed, the IPC is the only path (aside from further requirements). Logging hours or re-taking the knowledge test does not restore currency.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published ACS knowledge areas, not live exam items.'
  },
  examDay: {
    summary:
      'The IRA knowledge test is delivered by computer at an FAA-authorized testing center, and the practical rules are about documents and pacing. You cannot sit the test without the required authorization: a certificate of graduation from an FAA-certificated ground or pilot school, or a written statement or logbook endorsement from an authorized instructor certifying you are prepared, plus valid government-issued photo identification and your FAA tracking number or registration details. Arrive with time to spare; test centers run scheduled appointments and late arrivals can forfeit the slot and the fee. The exam is 60 three-choice questions at 70 percent to pass — at least 42 correct — with no penalty for guessing, so answer every question; on the time allotment, the current FAA Airman Knowledge Testing Matrix lists 2.0 hours (the older ACS cited 2.5, so confirm the figure when scheduling) and the countdown is on screen. You are given a paper copy of the Airman Knowledge Testing Supplement, and many stems reference its figures, so flip to the referenced figure before answering rather than answering from memory. Your score and the ACS codes of missed questions appear on the score report the moment you finish. On a pass, the report is valid for 24 calendar months — schedule the checkride well inside that window. The test-day pacing plan follows from the format: answer every question, because there is no penalty for guessing; move quickly on the regulation items so the figure-based and calculation items get the time they need; and read each stem before flipping to the supplement, because many questions cannot be answered without the referenced figure and hunting for it is time lost. Wear comfortable clothing and bring nothing beyond what is listed, because the testing room allows only the materials the centre issues. If a question is uncertain, flag it and return rather than dwelling, and remember that the score on the report is also the examiner\u2019s briefing for the checkride oral — a strong pass is the quieter oral. After the test, keep the report in a safe place, because it is both your authorization to continue toward the practical test and the document the examiner will reference, and start the flight training planning for the checkride immediately, because the 24-month clock is already running from the day you pass.',
    bring: [
      'The required authorization: ground-school certificate of graduation or an instructor logbook endorsement',
      'Valid government-issued photo identification',
      'Your FAA tracking number and appointment confirmation',
      'A plotter and flight computer (E6B) if you use them for the figure-based items',
      'Nothing else — the test center provides the computer and the test supplement'
    ],
    leave: [
      'Phones, smartwatches and all electronics — not permitted in the testing room',
      'Notes, books and study materials',
      'Personal bags beyond what the centre allows',
      'Any assumption that a missing endorsement can be waived at the desk',
      'The outdated 2.5-hour pacing figure, if the current matrix lists 2.0'
    ],
    timeline: [
      { time: 'Days before', detail: 'Confirm the endorsement is signed and dated, and the current time allotment on the FAA matrix.' },
      { time: '30-45 minutes before', detail: 'Arrive, complete check-in, present ID and the endorsement, and store personal items.' },
      { time: 'The exam', detail: '60 three-choice questions; flip to the supplement figures referenced in the stems; answer every item.' },
      { time: 'After submit', detail: 'Score and missed ACS codes appear on the score report immediately.' },
      { time: 'The next 24 months', detail: 'Complete the checkride within the 24-month validity of the passing report.' }
    ],
    rules: [
      'The endorsement or ground-school certificate is required to sit the test; it cannot be waived at the desk.',
      'The exam is 60 three-choice questions; 70 percent (42 correct) passes.',
      'There is no penalty for guessing; unanswered questions are the only guaranteed misses.',
      'The current FAA matrix lists a 2.0-hour allotment; confirm it when scheduling.',
      'A passing report is valid for 24 calendar months.',
      'After a failed attempt, retesting requires additional training and a new endorsement, typically after a wait.'
    ],
    afterwards:
      'Your IRA knowledge test score appears the moment you submit, and the score report is the document that drives the rest of the instrument path. On a pass, two things follow. First, the report is valid for 24 calendar months, and the checkride — the practical test of oral and flight — must be completed within that window or the knowledge test is retaken regardless of score, so coordinate your flight training so the checkride happens with time to spare. Second, the report lists the ACS codes of every question you missed, and the designated pilot examiner is required to probe those deficient areas during the checkride oral; that is why the target should be well above the 70 percent minimum — a high score means a shorter, easier oral. On a fail, the report tells you exactly which knowledge areas to study, and a retest requires additional training and a fresh instructor endorsement, typically after a waiting period, so plan the gap deliberately rather than re-booking blindly. The instrument rating itself, once the checkride is passed, is a permanent addition to your pilot certificate that must be kept current through the 6-month instrument currency tasks — six approaches, holding, and intercepting and tracking courses — and it is the stepping stone to the commercial and airline careers whose wage data appear on this page.'
  }
};

export default data;
