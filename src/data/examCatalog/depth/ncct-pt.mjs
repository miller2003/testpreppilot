// Depth content for: ncct-pt
// NCCT National Certified Patient Care Technician (NCPCT / PCT). All figures verified 2026-08.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Allied-health & patient-care support certifications desk',
    bio: 'This guide is compiled and maintained by our allied-health desk. NCCT exam format, the 200-720 scaled scoring model, fees, retake policy and recertification requirements are verified against the NCCT detailed test plan and candidate materials, and NCCT\u2019s published route-specific first-time pass rates are cited as the official source where they exist. Wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook occupations closest to the role, named by SOC code, with the caveat that BLS classifies workers by job duties rather than by certificate. Fees and test plans change; we date everything we quote.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the exam format (150 total questions, 125 scored and 25 unscored pretest, in 3 hours), the $119 fee, the 575 pass point on the 200-720 scale, annual recertification with 12 CE hours, and the BLS May 2024 nursing-assistant median of $39,530 against NCCT and BLS materials.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$39,530 median for nursing assistants (BLS SOC 31-1131, May 2024) \u2014 the closest official fit for the patient care technician role',
    summary:
      'The salary case for the NCCT Patient Care Technician credential runs through the occupations it prepares you for, and the closest official fit is nursing assistants, which BLS classifies under SOC 31-1131 with a May 2024 median annual wage of $39,530, about $19.01 an hour. The honest framing is that the PCT credential does not change this occupation-level number; it improves your position in the hiring queue for patient-facing support jobs in hospitals, long-term care and clinics. There is no BLS occupation called "patient care technician," and the title sits between nursing assistants and medical assistants in practice, so we present both reference occupations: nursing assistants at $39,530, with the lowest 10 percent earning less than $31,390 and the highest 10 percent more than $50,140, and the related medical assistant occupation at $44,200. BLS counted roughly 1,495,400 nursing assistants and orderlies in 2024 and projects only 2 percent employment growth from 2024 to 2034, slower than the average for all occupations, but the replacement story is enormous: about 211,800 openings a year, almost entirely from turnover and retirement in a high-attrition occupation, which is exactly why entry-level credentials in this space keep producing jobs even when net growth is small. The distribution matters for an entry-level credential: earnings follow setting, region and experience, with government roles near $45,760, hospitals near $40,170 and skilled-nursing facilities near $39,170 in the May 2024 data, and the credential widens which of those doors you can enter. The practical economics are modest but real: the $119 exam fee buys eligibility for a large, stable, entry-accessible occupation with steady replacement demand, and many technicians use the role as the first rung on a ladder toward LPN or RN licensure, which is where the long-run wage story actually lives.',
    rows: [
      { label: 'Median annual wage, nursing assistants (SOC 31-1131)', value: '$39,530', note: 'BLS Occupational Outlook Handbook, May 2024 ($19.01/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $31,390', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $50,140', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Reference: median, medical assistants (SOC 31-9092)', value: '$44,200', note: 'BLS OOH, May 2024 \u2014 the related MA occupation' },
      { label: 'Employment, 2024 (nursing assistants and orderlies)', value: '1,495,400 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~211,800 per year', note: 'BLS OOH Job Outlook, 2024-34 \u2014 mostly replacement need' }
    ],
    growth: '+2% projected change 2024-34 for nursing assistants and orderlies (slower than average), but about 211,800 openings a year, almost all replacement need in a high-turnover occupation; the PCT credential is an entry ticket and a first rung toward LPN/RN.',
    source: {
      label: 'BLS Occupational Outlook Handbook \u2014 Nursing Assistants and Orderlies',
      url: 'https://www.bls.gov/ooh/healthcare/nursing-assistants.htm'
    }
  },

  passRate: {
    headline: 'NCCT publishes route-specific first-time pass rates in its annual reporting, not a single percentage \u2014 and the pass point on the current 200-720 scale is 575',
    summary:
      'The direct answer is that NCCT does publish pass-rate data, but it reports by eligibility route and as first-time rates rather than as one overall figure, so the honest way to quote it is route by route, in the same pattern as NCCT\u2019s other credentials: an education-route candidate coming straight from a training program and an experience-route candidate with a year on the job are different populations, and the published rates differ accordingly. Because the route-level numbers for the NCPCT are reported in NCCT\u2019s annual statistics rather than on a single always-visible page, a candidate should verify the current year\u2019s figures on the NCCT site rather than rely on any fixed percentage; what is stable and fully published is the scoring structure. NCCT scores the NCPCT on a 200-to-720 scale with a pass point of 575, the same standard restated from the older 0-100 reporting scale where the scaled pass point was 70. The exam itself is approximately 150 total questions \u2014 125 scored and 25 unscored pretest items \u2014 in 3 hours, with the largest content area Patient Intake and Care at 38 of the scored items, followed by Infection Prevention and Safety (25), Phlebotomy (26), ECG (21) and Law and Ethics (15). Retake policy is published too: candidates have up to four total attempts, each retake costs the full $119 fee, and there is roughly a 30-day wait after a first failed attempt. The practical planning rule is to read the route-based rates as cohort context, not personal probability, and to prepare against the published pass point by taking timed practice exams that report performance on the current scale, because the single most useful number is whether you are consistently clearing 575.',
    source: {
      label: 'NCCT \u2014 National Certified Patient Care Technician certification and test plan',
      url: 'https://www.ncctinc.com/certifications/pct'
    },
    caveat: 'NCCT reports first-time pass rates by eligibility route in its annual reporting rather than as a single overall percentage, and the route-level figures for the NCPCT should be verified on the NCCT site for the current year. The published pass point is 575 on NCCT\u2019s current 200-720 scale, and we have not invented a single pass rate NCCT does not publish.'
  },

  studyPlan: {
    summary:
      'A realistic NCPCT study plan is 6 to 10 weeks at 8 to 12 hours a week, weighted heavily to the patient-care and phlebotomy content that dominates the exam, because the NCCT test plan puts Patient Intake and Care at 38 of the 125 scored items and Phlebotomy at 26, so the paper is effectively decided by bedside care plus blood collection, with infection prevention, ECG and law-and-ethics making up the rest. The structure to plan against is published: approximately 150 total questions in 3 hours \u2014 125 scored and 25 unscored pretest \u2014 reported on a 200-720 scale with a 575 pass point. The most effective sequence: first, take a full timed practice exam to baseline, and log every miss by domain; second, work the patient-intake-and-care block hardest \u2014 vital signs and their normal ranges, activities of daily living, mobility and positioning, intake and output, wound and skin care, ostomy and catheter care, oxygen and nebulizer support, peripheral IV monitoring, and pre-and-post-operative and postmortem care \u2014 because that is where the majority of scored items live; third, master phlebotomy deliberately \u2014 the CLSI order of draw, tube additives by color, fill levels, site selection and complications \u2014 because these are exact, frequently tested and a common blind spot for candidates whose training underweighted blood collection; fourth, cover infection prevention and safety (standard versus transmission-based precautions, PPE order, OSHA bloodborne pathogen standards) and the ECG content (lead placement, waveform recognition, artifact troubleshooting), plus the law-and-ethics items on the Patient\u2019s Bill of Rights, HIPAA and scope of practice; and fifth, rehearse the full 3-hour format at least twice, because pacing under about 72 seconds per question across a long sitting needs to be trained. Budget the $119 exam fee and confirm your eligibility route and documents before studying hard.',
    totalHours: '60-100 hours over 6-10 weeks (roughly 8-12 hrs/week)',
    weeks: [
      { label: 'Week 1', focus: 'Baseline and blueprint map', tasks: ['Take a full timed practice exam and log every miss by domain', 'Confirm your eligibility route and submit any required documents', 'Get the NCCT detailed test plan and note the domain weights, led by Patient Intake and Care at 38 items'], hours: '8-10 hrs' },
      { label: 'Weeks 2-4', focus: 'Patient Intake and Care (38 items)', tasks: ['Master vital signs, normal ranges, ADLs, mobility, positioning and transfers', 'Cover wound and skin care, ostomy and catheter care, intake and output', 'Learn oxygen and nebulizer support, peripheral IV monitoring, and pre/post-op care'], hours: '10-12 hrs/week' },
      { label: 'Week 5', focus: 'Phlebotomy (26 items)', tasks: ['Memorise the CLSI order of draw and tube additives by color', 'Drill site selection, fill levels, special-needs precautions and complications', 'Practise the scenario items on post-phlebotomy care and specimen handling'], hours: '10-12 hrs' },
      { label: 'Weeks 6-7', focus: 'Infection prevention, ECG, and law and ethics', tasks: ['Cover standard vs transmission-based precautions, PPE order and OSHA bloodborne standards', 'Study ECG lead placement, waveform recognition and artifact troubleshooting', 'Drill the Patient\u2019s Bill of Rights, HIPAA and scope-of-practice items'], hours: '8-10 hrs/week' },
      { label: 'Weeks 8-9', focus: 'Full-format rehearsal and gap closing', tasks: ['Take two full 3-hour practice exams under real timing', 'Re-lab every miss by domain and re-study the weakest areas', 'Final pass over the order of draw, vital-sign ranges and infection-control steps'], hours: '8-10 hrs/week' },
      { label: 'Week 10', focus: 'Taper and logistics', tasks: ['One more full exam early in the week if needed', 'Light review of the error log only', 'Confirm exam scheduling, the $119 fee payment and ID requirements'], hours: '6-8 hrs' }
    ],
    variants: [
      { label: 'Currently working as a nursing assistant or PCT', detail: 'Four to six weeks. Your experience covers the ADL and patient-care content; focus on phlebotomy, ECG and law-and-ethics, then run two or three full timed exams.' },
      { label: 'Coming straight from a training program', detail: 'Six to eight weeks. Your content is fresh; the risk is underestimating the format \u2014 150 questions in 3 hours with unscored pretests \u2014 so weight the plan toward timed rehearsal.' },
      { label: 'Working full-time while studying', detail: 'Stretch to 10-12 weeks at 6-8 hours a week. Protect the weekly timed section and keep Patient Intake and Care the constant focus, because it is the largest block of scored items.' }
    ]
  },

  prepStrategies: {
    summary:
      'The strategy that reliably passes the NCPCT is "over-invest in patient care and phlebotomy, drill the exact order-of-draw rules, and rehearse the 3-hour format," because the NCCT test plan weights Patient Intake and Care at 38 scored items and Phlebotomy at 26, and the remaining domains are small enough that neglecting any one of them can be the margin between 575 and below. Start by baselining with a full timed practice exam and logging every miss by domain, so the plan targets the actual gap rather than a generic review. Second, master the patient-care block as scenarios rather than as facts: vital signs and normal ranges, activities of daily living, mobility and transfers, wound care, catheter and ostomy care, and oxygen support \u2014 because the exam tests these as clinical situations and scenario drilling converts knowledge into answers. Third, make phlebotomy a dedicated study block: the CLSI order of draw, tube additives by color, fill levels, site selection and complications are exact and heavily tested, and memorising the sequence cold is the single cheapest source of points on the paper. Fourth, do not skip infection prevention and safety \u2014 standard versus transmission-based precautions, the correct PPE donning and doffing order, and the OSHA bloodborne pathogen standards \u2014 because it is a 25-item domain that working assistants under-prepare because it feels like common sense. Fifth, rehearse the full 3-hour, approximately 150-question format at least twice, because pacing under about 72 seconds per question across a long sitting is trainable and surprises candidates who only drilled sections. Finally, read the route-based pass rates as cohort data rather than your odds, and treat the only number that matters as whether timed practice is consistently clearing 575 on the current scale.',
    items: [
      { title: 'Concentrate where the questions are', detail: 'Patient Intake and Care (38 items) plus Phlebotomy (26) is over half the scored exam. Weight your hours accordingly \u2014 over-preparing the small domains at the expense of these two is the most common structural mistake.' },
      { title: 'Drill the patient-care block as scenarios', detail: 'Vital signs, ADLs, mobility, wound care and oxygen support appear as clinical situations, not isolated facts. Practise scenario questions so the knowledge converts into answers under a clock.' },
      { title: 'Make phlebotomy a dedicated study block', detail: 'Memorise the CLSI order of draw, tube additives by color and fill levels cold; drill site selection and complications. Exact-sequence questions are the cheapest points on the paper.' },
      { title: 'Do not skip infection prevention and safety', detail: 'Standard vs transmission-based precautions, PPE order and OSHA bloodborne standards are a 25-item domain; a few focused hours converts it into reliable points.' },
      { title: 'Learn the ECG content even if your job underuses it', detail: 'Lead placement, waveform recognition and artifact troubleshooting are 21 scored items and a common blind spot for assistants who rarely run ECGs.' },
      { title: 'Rehearse the full 3-hour format', detail: 'Approximately 150 questions in 3 hours is under about 72 seconds per question. Take two or three full timed exams so the pacing and stamina of the real day are trained, not discovered.' }
    ]
  },

  resourceComparison: {
    summary:
      'NCCT NCPCT preparation splits into official NCCT materials, third-party practice products, and the training program most candidates already attended, and the buying logic is anchored by one fact: the NCCT detailed test plan and candidate handbook define the exact domains, the 125-scored-and-25-pretest format and the current 200-720 scale, so the official materials are the syllabus no matter what else you buy. The official set includes the candidate handbook, the test plan and sample questions, all available from NCCT, and NCCT also sells its own practice exam and an interactive review system, typically in the $50-100 range, which have the advantage of being built against the actual test plan. On the third-party side, NCPCT practice-exam banks and books run roughly $20-80 and are useful for volume drilling, with the caveat that some older products still describe the legacy 0-100 scale, so check that a product reflects the current format before buying. Online courses range from $50-200 and help candidates who want structure, especially around the phlebotomy and ECG content, but many candidates come through an NCCT-authorized training program whose tuition already includes review materials \u2014 in that case the marginal purchase is usually just the NCCT practice exam and a full-format timed rehearsal. The honest rule: buy the official test plan and one NCCT-aligned practice exam first, add a third-party question bank only if you need volume, and spend on a course only if self-study has not cleared 575 in practice. The exam fee itself \u2014 $119 \u2014 plus the annual recertification of 12 CE hours and roughly $89 a year should be budgeted separately. Prices below are approximate and dated to 2026; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NCCT candidate handbook, detailed test plan and sample questions', values: ['Free from NCCT', 'Official PDFs', 'The authoritative syllabus \u2014 domains, format and the current 200-720 scale'] },
      { label: 'NCCT practice exam and interactive review system', values: ['~$50-100', 'Online practice and review', 'Format-accurate drilling built against the actual test plan'] },
      { label: 'The NCPCT exam itself', values: ['$119 per attempt', 'Proctored at a testing centre or remote, 150 questions in 3 hours', 'Required \u2014 up to 4 total attempts with the full fee each time'] },
      { label: 'Third-party NCPCT practice banks and books', values: ['~$20-80', 'Online question banks or printed books', 'Volume drilling \u2014 check that the product reflects the current format'] },
      { label: 'Structured NCPCT online courses', values: ['~$50-200', 'Video course with practice', 'Candidates wanting a taught framework, especially for phlebotomy and ECG'] }
    ],
    footnote: 'Prices approximate and dated to 2026; the exam fee is $119 per attempt, retakes cost the full fee, and annual recertification requires 12 CE hours and about $89. Some older products still describe the legacy 0-100 scale \u2014 confirm a resource matches the current 200-720 format. We do not rank by commission.'
  },

  commonMistakes: {
    summary:
      'The most common NCPCT mistake is studying the exam as a broad multiple-choice test instead of the clinical-weighted test it is: candidates spread hours evenly across all five domains while Patient Intake and Care \u2014 38 of the 125 scored items \u2014 goes under-prepared, and the pass or fail is effectively decided there. The second is underweighting phlebotomy, because the CLSI order of draw, tube additives and fill levels are exact and heavily tested, and candidates who can insert a needle at work routinely miss the written rules they never memorised. A third recurring error is ignoring the 25 unscored pretest items in the pacing plan: they are indistinguishable from the scored ones, and a candidate who slows down on them loses the ~72-seconds-per-question pace needed to finish. Candidates also routinely underestimate the ECG content \u2014 lead placement, waveform recognition and artifact troubleshooting are 21 scored items and a common blind spot for assistants who rarely run ECGs \u2014 and the law-and-ethics domain, which is small but coachable. Another pattern is using out-of-date prep material that still describes the legacy 0-100 scoring scale, when the current scale is 200-720 with a 575 pass point, so candidates misread their practice performance entirely. Many candidates fail to check their eligibility route\u2019s document requirements and lose scheduling weeks to application back-and-forth. Finally, some candidates read the route-based pass rates \u2014 which run materially lower for education-route candidates than for experienced workers \u2014 as a personal probability instead of cohort context, and either over-prepare or under-prepare relative to their actual position; the number that matters is whether timed practice clears 575 on the current scale.',
    items: [
      { mistake: 'Spreading study time evenly across all five domains', fix: 'Patient Intake and Care is 38 scored items and Phlebotomy 26. Weight your hours to them and give the small domains a focused pass each rather than equal time.' },
      { mistake: 'Underweighting phlebotomy because you can draw blood at work', fix: 'The exam tests the written rules: CLSI order of draw, tube additives by color, fill levels, site selection and complications. Memorise the sequence cold regardless of your hands-on confidence.' },
      { mistake: 'Ignoring the pretest items in the pacing plan', fix: '25 of the 150 questions are unscored and indistinguishable. Answer every question at the same ~72-second pace and never use the pretests as a reason to slow down.' },
      { mistake: 'Skipping the ECG and law-and-ethics content', fix: 'ECG is 21 scored items and law-and-ethics 15; both are coachable and a common blind spot. Give each a dedicated block instead of skipping them.' },
      { mistake: 'Using material from the legacy scoring era', fix: 'The current NCPCT scale is 200-720 with a pass point of 575. Check that every practice product reflects the current scale and test plan, or you will misread your readiness.' },
      { mistake: 'Ignoring the eligibility-route paperwork', fix: 'Your route has specific document requirements. Submit them early, because application processing can push your exam date and compress your study window.' }
    ]
  },

  questionTypes: {
    summary:
      'The NCCT NCPCT exam is approximately 150 total questions in 3 hours \u2014 125 scored and 25 unscored pretest items \u2014 with standard four-option multiple choice as the dominant format, reported on a 200-720 scale with a pass point of 575. The content is dominated by clinical material: Patient Intake and Care is 38 of the scored items, Phlebotomy 26, Infection Prevention and Safety 25, ECG 21 and Law and Ethics 15, so the paper reads heavily as clinical scenarios \u2014 a patient situation, a procedure or a safety decision with the correct next action to choose \u2014 rather than as isolated recall. The standard multiple-choice items test both knowledge (normal vital-sign ranges, the order of draw, PPE sequence, ECG lead placement) and application (what to do next in a described clinical situation, which safety rule applies, what to document). The scenario style is what makes the exam feel applied: a patient presenting with a symptom, a phlebotomy situation with a complication, a catheter-care or wound-care decision, or an infection-control question about which precautions apply. The practical pacing is under about 72 seconds per question, with the 25 unscored pretest items indistinguishable from the scored ones, so every question should be answered at full effort. Because the weighting toward patient care and phlebotomy is so lopsided, a prepared candidate is answering about bedside decisions, blood-collection sequences and safety steps rather than recalling definitions, which is why scenario drilling converts study hours into pass points more efficiently than term-list review, and why the domain weights should shape the study plan rather than being treated as one topic among many. The samples below illustrate the scenario style; they are editor-written to the published content outline and are not live exam items.',
    types: [
      { name: 'Clinical scenario multiple choice', share: 'The bulk of the scored exam', detail: 'A patient, procedure or safety situation with a decision \u2014 vital-sign assessment, next action, correct technique. The Patient Intake and Care domain is tested mostly this way.' },
      { name: 'Phlebotomy knowledge and sequence items', share: '26 scored items', detail: 'CLSI order of draw, tube additives, fill levels, site selection and complications \u2014 exact-sequence questions that reward memorised rules.' },
      { name: 'Infection prevention and safety items', share: '25 scored items', detail: 'Standard vs transmission-based precautions, PPE order, OSHA bloodborne standards and biohazard handling.' },
      { name: 'ECG and monitoring items', share: '21 scored items', detail: 'Lead placement, waveform recognition, rhythm classification and artifact troubleshooting.' },
      { name: 'Law-and-ethics items', share: '15 scored items', detail: 'Patient\u2019s Bill of Rights, HIPAA, scope of practice, reportable incidents and abuse documentation.' }
    ],
    samples: [
      {
        prompt: 'A patient is about to have blood drawn for a coagulation study. Which tube should be filled first in the standard order of draw?',
        options: [
          'A. Light blue (citrate) tube',
          'B. Lavender (EDTA) tube',
          'C. Green (heparin) tube',
          'D. Grey (oxalate) tube'
        ],
        answer: 'A',
        explanation: 'The CLSI order of draw places the light-blue citrate tube first among additive tubes (after a discard tube where required), followed by serum, heparin, EDTA and fluoride tubes. Filling out of order risks additive carry-over that contaminates the specimen \u2014 for a coagulation study that contamination is a direct patient-safety failure. B, the lavender EDTA tube, is the most commonly chosen wrong answer because it is ubiquitous in practice, but it comes later in the sequence. This item tests the exact-sequence phlebotomy knowledge that is heavily weighted on the exam.'
      },
      {
        prompt: 'Which PPE sequence is correct for donning when caring for a patient on contact precautions?',
        options: [
          'A. Gown, then mask, then gloves',
          'B. Gloves, then gown, then mask',
          'C. Mask, then gloves, then gown',
          'D. Gown, then gloves, then mask'
        ],
        answer: 'A',
        explanation: 'The standard donning sequence is gown first, then mask or respirator, then gloves, so that the gloves go on last over the gown cuffs and nothing is adjusted after the hands are protected. D reverses the mask and gloves, B and C put the gloves on before the gown, which leaves the wrists and forearms exposed. The item tests the infection-prevention domain \u2014 the exact PPE order for contact precautions is a frequently repeated, easily scored question.'
      },
      {
        prompt: 'A patient on a medical-surgical unit reports new dizziness while getting out of bed. What is the patient care technician\u2019s most appropriate immediate action?',
        options: [
          'A. Help the patient sit back down safely and notify the nurse',
          'B. Encourage the patient to stand slowly and try again',
          'C. Leave the patient to get the walker',
          'D. Document the dizziness and move on'
        ],
        answer: 'A',
        explanation: 'New dizziness on getting out of bed is a fall risk and a reportable change of condition: the correct action is to keep the patient safe, help them sit back down, and notify the nurse. B ignores the risk, C leaves an unstable patient unattended, and D documents without escalating. The item tests the patient-intake-and-care scenario style \u2014 recognising when a change of condition warrants escalation and what the safe immediate steps are, which is the pattern that dominates the exam.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      'The NCCT NCPCT exam is a 3-hour, approximately 150-question computer-delivered test \u2014 125 scored and 25 unscored pretest items \u2014 taken at a proctored testing centre or through remote proctoring, reported on a 200-720 scale with a pass point of 575, with the result available immediately at the end at institution-based sites and within about 48 hours at PSI centres. The first thing to confirm is your eligibility-route documents, because your application must be approved and your scheduling authorisation issued before you can book \u2014 a step candidates underestimate and then lose weeks to \u2014 and the second is the $119 exam fee and the venue or remote-proctoring requirements. Bring a current, valid, unexpired government-issued photo ID whose name matches your application exactly, and your scheduling confirmation; leave phones, smartwatches, notes and personal calculators, because personal electronics are prohibited and the test provides its own on-screen tools where needed. Arrive at least 30 minutes early for a testing centre so check-in and the tutorial are complete before the clock starts, and for remote proctoring run the system check in advance and clear the room per the proctor\u2019s specifications. When the exam begins, pace for the long sit: approximately 150 questions in 180 minutes is under about 72 seconds per question, and the 25 unscored pretest items are indistinguishable from the scored ones, so answer every question at full effort \u2014 there is no way to identify and skip the pretests. Flag anything over about 80 seconds and budget the final minutes to revisit flagged items, then submit. Your pass or fail result appears on screen, and your official score report with domain-level performance follows through your NCCT account, which is the diagnostic tool to use if you have to retake.',
    bring: [
      'Current, valid, unexpired government-issued photo ID matching your application exactly',
      'Your scheduling authorisation and confirmation details',
      'For remote proctoring: a cleared, private room and a system that passed the proctor\u2019s check',
      'A pacing plan \u2014 under ~72 seconds per question across 150 questions and 3 hours'
    ],
    leave: [
      'Phones, smartwatches and all personal electronics',
      'All notes, cheat sheets and study materials',
      'Personal calculators \u2014 the test provides its own on-screen tools where needed',
      'For remote proctoring, any other person in the room'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your scheduling authorisation is issued, your ID spelling matches, and the venue or remote-proctoring requirements. Run one full timed practice exam and review the weakest domain.' },
      { time: '24 hours before', detail: 'Stop drilling. Review the error log and the high-yield facts \u2014 order of draw, vital signs, PPE sequence \u2014 then rest. For remote proctoring, run the system check.' },
      { time: '30 minutes before', detail: 'Arrive at the testing centre or begin remote check-in, which includes ID verification and a room scan for remote sessions.' },
      { time: '0-90 minutes', detail: 'The first half of the exam. Answer at ~72 seconds per question, flag anything over ~80 seconds, and never slow down on the pretest items.' },
      { time: '90-175 minutes', detail: 'The second half. Watch the clock against remaining questions and protect the pace; the harder scenario items cluster late.' },
      { time: '175-180 minutes', detail: 'Revisit your flagged items, then submit rather than letting the clock expire.' },
      { time: 'After submit', detail: 'Your pass or fail appears on screen; the official score report with domain-level performance follows through your NCCT account.' }
    ],
    rules: [
      'The exam is approximately 150 total questions \u2014 125 scored and 25 unscored pretest \u2014 in 3 hours.',
      'The pass point is 575 on NCCT\u2019s current 200-720 scale.',
      'The result is available immediately at institution-based sites and within ~48 hours at PSI centres.',
      'A current government-issued photo ID is required, with the name matching your application.',
      'Personal electronics and personal calculators are prohibited; the test provides its own on-screen tools where needed.',
      'Candidates have up to 4 total attempts; each retake costs the full $119 fee, with roughly a 30-day wait after a first failed attempt.'
    ],
    afterwards:
      'Your pass or fail appears on screen, and the official score report with domain-level performance follows through your NCCT account \u2014 on a pass, the certification is issued within a few business days, and the first thing to do is record the annual recertification cycle, because the NCPCT requires 12 continuing-education hours and about $89 every year to stay active, and it remains valid for five years only if maintained annually. On a fail, use the domain-level report as it is designed to be used: identify the one or two domains that dragged the result, re-study those specifically \u2014 for most candidates that is phlebotomy or the ECG content \u2014 and re-sit after timed practice clears 575, keeping in mind the retake policy of up to four total attempts with the full $119 fee each time and roughly a 30-day wait after a first fail. Either way, the occupation behind the credential is a large, entry-accessible market \u2014 nursing assistants earned a BLS median of $39,530 in May 2024 with about 211,800 openings a year \u2014 and the credential widens the patient-care openings you can apply for while serving as a common first rung toward LPN or RN licensure, which is where the long-run wage growth lives.'
  }
};

export default data;
