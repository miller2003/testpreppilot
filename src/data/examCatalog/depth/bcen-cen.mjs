// Depth content for: bcen-cen
// See examDepth.mjs for the full schema. All figures verified 2026-08.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Nursing & healthcare certification desk',
    bio: 'This guide is compiled and maintained by our healthcare-certifications desk. The CEN credential is owned and administered by the Board of Certification for Emergency Nursing (BCEN), and we track the exam by its published content outline and passing point. The 2026 CEN content outline takes effect on 6 July 2026, with a passing score set by the 2026 CEN Passing Point Study, and we state both as published by BCEN. Exam length, item counts, the pass-fail reporting model and the fee schedule come from BCEN\u2019s own CEN pages and candidate materials; the fee differs by Emergency Nurses Association membership status, which we flag. Pass-rate information comes from BCEN\u2019s published certification exam statistics, which report exams passed and failed rather than a first-time breakout, so we present the published numbers and say plainly what they do and do not show. Wage figures come from the Bureau of Labor Statistics occupation Registered Nurses (SOC 29-1141), named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam length, the 150-scored-item format, the 2026 passing score of 99/150, the fee schedule, the four-year renewal cycle and the published 2025 certification exam statistics were taken from BCEN\u2019s CEN pages, the BCEN 2026 passing point announcement, and the BCEN certification exam statistics page.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$93,600 median for registered nurses (BLS SOC 29-1141, May 2024)',
    summary:
      'The CEN is a specialty certification held on top of an active RN license, so the salary it affects is the registered nurse wage, and BLS classifies that occupation under SOC code 29-1141. The May 2024 median was $93,600 a year, about $45.00 an hour, with the lowest 10 percent earning less than $66,030 and the highest 10 percent more than $135,320; the 25th percentile sat near $78,610 and the 75th near $107,960, so a typical RN is earning in the low six figures once past the early years. BLS reported mean annual pay of about $98,430, employment of 3,391,000 jobs in 2024, and projected growth of 5 percent from 2024 to 2034, with about 189,100 openings a year, most from replacement need as experienced nurses retire. Two points matter when reading these numbers against the CEN specifically. First, BLS does not publish a wage for certified emergency nurses, so the certification premium is not in the government data — the evidence for a premium is industry surveys and hospital pay practice rather than BLS, and the commonly cited figures vary widely, from small hourly differentials to a few thousand dollars a year, depending on the employer and region. Second, emergency nursing is a specialty within a large occupation, and the CEN functions as a differentiator for charge-nurse roles, clinical educator positions and flight-nursing applications more than as a ticket to a separate wage band. BCEN reports over 41,000 active CEN certificants, which tells you the credential is common enough to be expected in some emergency departments rather than rare enough to command a large premium on its own. The honest summary is that the CEN supports a stable, well-paid occupation with strong replacement demand, but the certification itself is a career-advancement credential whose financial return depends on the employer, not a government-reported pay bump.',
    rows: [
      { label: 'Median annual wage, registered nurses', value: '$93,600', note: 'BLS Occupational Outlook Handbook, May 2024 ($45.00/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $66,030', note: 'BLS OOH Pay tab, May 2024' },
      { label: '25th percentile', value: 'about $78,610', note: 'BLS OOH Pay tab, May 2024' },
      { label: '75th percentile', value: 'about $107,960', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $135,320', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '3,391,000 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~189,100 per year', note: 'BLS OOH Job Outlook, 2024-34 - mostly replacement need' }
    ],
    growth: '+5% projected change 2024-34; about 189,100 openings a year, mostly replacement as experienced nurses retire. BLS does not publish a separate wage or outlook for certified emergency nurses, so the CEN premium must come from employer pay practice rather than government data.',
    source: {
      label: 'BLS Occupational Outlook Handbook - Registered Nurses',
      url: 'https://www.bls.gov/ooh/healthcare/registered-nurses.htm'
    }
  },

  passRate: {
    headline: 'BCEN publishes pass and fail counts, not a first-time rate — for 2025, 4,198 of 8,889 CEN exams delivered passed (~47%), and third-party analyses put first-time around 49-51%.',
    summary:
      'BCEN publishes certification exam statistics as an ABSNC accreditation requirement, and the honest way to read them is that they report exams passed and failed by calendar year, not a first-time pass rate — the figures mix first-time candidates and repeaters, so the number candidates usually search for is not the number BCEN publishes. For calendar year 2025, BCEN reported 8,889 CEN exams delivered, 4,198 passed and 3,974 failed, which is about a 47 percent pass rate on administrations delivered; the total CEN certificants stood at 41,636. Because the published table does not separate first-time from repeat candidates, we cannot state an official first-time rate from BCEN\u2019s own data, and we will not invent one. Independent prep vendors that have analysed BCEN\u2019s data cite a first-time pass rate in the 49-51 percent range for recent years — for example, about 49 percent for 2024, down slightly from about 51 percent in 2021 — which is materially lower than the 60-70 percent figures sometimes quoted online and roughly half the first-time pass rate of the NCLEX-RN. That is not a reason to be discouraged; it is a reason to prepare seriously, because the CEN is a criterion-referenced specialty exam for working emergency nurses and the pool is highly self-selected. The passing standard itself is published: the CEN is scored against 150 scored items (175 total, with 25 unscored pretest items), and following the 2026 Passing Point Study the passing score is 99 of 150, effective 6 July 2026 with the new content outline. We have used BCEN\u2019s published counts and the 99/150 standard rather than any rumoured rate.',
    source: {
      label: 'BCEN - Certification Exam Statistics',
      url: 'https://bcen.org/about-us/certification-exam-statistics/'
    },
    caveat:
      'BCEN publishes exam-passed and exam-failed counts by calendar year, not a first-time pass rate. The 2025 CEN figures imply roughly 47% of exams delivered passed (4,198/8,889); independent analyses of BCEN data put first-time rates near 49-51%. The current passing score is 99/150 scored items, effective 6 July 2026. We have not invented a first-time rate BCEN does not publish.'
  },

  studyPlan: {
    summary:
      'A realistic CEN study plan runs ten to twelve weeks at roughly 8-10 hours a week, because the exam assumes two years of emergency nursing experience and tests applied clinical judgment across ten content areas rather than textbook recall, so the plan must spend as much time on question practice and case review as on content coverage. The exam is 175 questions in three hours, of which 150 are scored, delivered by computer at a PSI test centre or through Live Remote Proctoring, and the passing standard is 99 of the 150 scored items under the 2026 Passing Point Study. The content outline reorganises the clinical material into areas spanning the emergency spectrum — cardiovascular, respiratory, neurological, gastrointestinal, genitourinary and gynecologic-obstetric, maxillofacial and ocular and ENT, orthopedic and wound, psychiatric and psychosocial, toxicology and environmental, systemic and infectious — plus professional issues, and the items are scenario-based, asking what you would do next with a presented patient. That scenario design is the defining feature: candidates who read the clinical areas as lists of facts under-prepare, because the exam rewards rapid prioritization, recognition of time-critical emergencies such as stroke, STEMI and major trauma, and knowledge of current emergency guidelines. The plan below covers the clinical areas in the first eight weeks, then pivots to timed full-length practice and gap closing in the final weeks, because endurance across a three-hour, 175-item paper is real and the hardest items cluster late. Experienced ED nurses should compress the clinical weeks and start question volume early; nurses new to the ED should extend the plan and lean on the official BCEN practice exam, which mirrors the real format and gives the most honest readiness signal.',
    totalHours: '80-120 hours over 10-12 weeks',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Cardiovascular and respiratory emergencies',
        tasks: [
          'Cardiovascular: STEMI recognition and reperfusion timelines, ACS presentations, dysrhythmias and emergency treatment, shock states, and aortic emergencies',
          'Respiratory: airway management, asthma and COPD exacerbations, pulmonary embolism, pneumothorax and tension physiology, and respiratory failure',
          'Drill the time-critical presentations — STEMI, stroke, sepsis, trauma — until the first intervention for each is reflex',
          'Take the free BCEN sample questions or one section-length practice set and tag every miss to a content area'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Neurological, psychiatric and toxicological emergencies',
        tasks: [
          'Neurological: stroke syndromes and the stroke timeline, seizures and status epilepticus, headache red flags, and altered mental status',
          'Psychiatric: suicide risk, agitated and violent patients, substance withdrawal, and de-escalation within scope',
          'Toxicology and environmental: common overdoses and antidotes, envenomations, heat and cold injuries, and chemical exposures',
          'Practise the prioritization item type: given four patients, who do you see first — and why the answer is usually the airway or the instability'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Weeks 5-6',
        focus: 'GI, GU, obstetric-gynecologic, and maxillofacial-ocular-ENT emergencies',
        tasks: [
          'Gastrointestinal: abdominal catastrophes, GI bleeding, pancreatitis, and the surgical abdomen',
          'Genitourinary and gynecologic-obstetric: ectopic pregnancy and ruptured-aneurysm equivalents, ovarian torsion, and pregnancy emergencies including preeclampsia',
          'Maxillofacial, ocular and ENT: facial trauma, eye emergencies such as chemical injury and acute angle-closure glaucoma, and airway-threatening ENT conditions',
          'Study the high-frequency antidotes and reversal agents, because pharmacology appears inside the scenario items rather than as a separate section'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 7-8',
        focus: 'Orthopedic-wound, systemic-infectious and professional issues',
        tasks: [
          'Orthopedic and wound: fracture and dislocation presentations, compartment syndrome, wound care and tetanus prophylaxis',
          'Systemic and infectious: sepsis bundles, common infections, and the febrile presentations that are emergencies',
          'Professional issues: triage principles, disaster preparedness, legal and ethical duties, and patient advocacy',
          'Run the official BCEN practice exam and compare your scaled readiness against the 99/150 standard rather than a percentage'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 9-10',
        focus: 'Full-length timed practice and gap closing',
        tasks: [
          'Three full 175-question, three-hour practice exams under real timing, breaks excluded',
          'Re-tag every miss to a content area and attack the bottom two areas with focused review',
          'Drill the priority-and-triage item style until the framework (ABCs, then unstable versus stable) is automatic',
          'Stop learning new content; consolidate, correct and re-test instead'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Weeks 11-12',
        focus: 'Final review and logistics',
        tasks: [
          'Light mixed review of the highest-yield time-critical emergencies and the antidotes list',
          'Confirm the exam date, the PSI test-centre or Live Remote Proctoring logistics, and the ID rule',
          'Check the BCEN application approval and the testing window before you schedule',
          'One rest day before the exam'
        ],
        hours: '6-8 hrs/week'
      }
    ],
    variants: [
      { label: 'Experienced ED nurse with 5+ years', detail: 'Six to eight weeks. Compress the clinical coverage and start full practice exams early; your gap is likely the professional-issues content and the specific item style rather than clinical knowledge.' },
      { label: 'Nurse with 1-2 years in the ED', detail: 'Twelve to fourteen weeks at 8-10 hrs/week. BCEN recommends about two years of emergency experience before sitting; give yourself the full clinical coverage and at least two full practice exams.' },
      { label: 'Working nurse studying around shifts', detail: 'Fourteen to sixteen weeks at 6-8 hrs/week. Use shift-based spacing — short daily question sets and longer weekend blocks — because the scenario format rewards distributed practice over cramming.' }
    ]
  },

  prepStrategies: {
    summary:
      'The CEN is a scenario-based, criterion-referenced specialty exam, so the dominant preparation strategy is to practise the decision-making format rather than accumulate clinical facts — the exam presents a patient and asks what you do next, and candidates who study the ten content areas as lists of facts under-prepare for items that reward rapid prioritization and recognition of time-critical emergencies. The highest-yield habits are, first, learning the time-critical emergency timelines cold — stroke, STEMI, sepsis, major trauma, and the respiratory and airway emergencies — because a large share of items test whether you recognise the emergency and act within the window. Second, practise the priority-and-triage item style specifically, because many items present several patients or several actions and ask which is first; a stable framework of airway, breathing, circulation and then stable-versus-unstable beats improvising a new rationale per item. Third, use the official BCEN practice exam, because it is built to the real content outline and item format and gives the most honest readiness signal of anything on the market. Fourth, review every rationale, right and wrong, and tag each miss to a content area so the last weeks target real gaps rather than comfort topics. Fifth, run full 175-question, three-hour simulations, because endurance across the paper is real and the harder items cluster in the back half. Finally, respect the professional-issues content — triage, disaster preparedness, legal and ethical duties — which working nurses often skip because it feels like non-clinical padding, even though it is a scored content area. The strategies below are ordered roughly by the size of the point swing they produce, and the first three address the mistakes that actually cause CEN failures.',
    items: [
      {
        title: 'Learn the time-critical emergency timelines cold',
        detail: 'Stroke, STEMI, sepsis, trauma and respiratory emergencies dominate the items that separate passing from failing. Know the recognition signs and the first intervention and the window for each, because many items present a patient and ask what you do next — and the distractor is usually a real but later intervention. Speed and order are the skill being tested.'
      },
      {
        title: 'Practise the priority-and-triage item style',
        detail: 'A large share of items ask which patient to see first or which action comes first. Rely on stable frameworks — airway, breathing, circulation, then unstable versus stable, then acuity — rather than improvising a new rationale each time. Candidates who improvise are the ones who fall for the plausible-but-not-urgent distractor.'
      },
      {
        title: 'Use the official BCEN practice exam for calibration',
        detail: 'BCEN\u2019s practice exam mirrors the real content outline, item format and difficulty better than any third-party product. Take it mid-preparation to find your real gaps, and again near the end as a readiness check against the 99/150 standard. Third-party banks are useful for volume; the official exam is the honest signal.'
      },
      {
        title: 'Review every rationale and tag every miss',
        detail: 'For each item you get right, confirm you were right for the right reason; the CEN inverts scenarios and tests the same principle from the other side, so pattern-matching fails the moment the stem changes. Keep a miss log by content area and let it drive the final weeks instead of re-reading your strongest topics.'
      },
      {
        title: 'Simulate the full three-hour paper',
        detail: '175 questions in 180 minutes is a genuine endurance test. Run at least two full-length timed practice exams before test day so the pacing and the back-half fatigue are familiar. Candidates who have only done short sets routinely fade exactly where the harder items cluster.'
      },
      {
        title: 'Do not skip the professional-issues content',
        detail: 'Triage principles, disaster preparedness, legal and ethical duties and patient advocacy are a scored content area, not padding. Working nurses routinely under-prepare it because it feels non-clinical; a few hours of focused review turns it into some of the cheapest points on the paper.'
      }
    ]
  },

  resourceComparison: {
    summary:
      'The CEN resource market splits into BCEN\u2019s own materials, third-party question banks, review courses, and the reference texts you already use at work, and the buying logic is anchored by BCEN\u2019s official practice exam because it is the only product built to the real content outline and item format. The exam itself costs $380 for non-members and $285 for Emergency Nurses Association members, with a reduced military rate, and retest pricing applies if you use BCEN\u2019s test-assurance option; the recertification fee is $280. On preparation, BCEN sells an official practice exam and a CEN review course that also earns continuing-education credit toward recertification, and both are the calibration gold standard even if they cost more than a third-party subscription. The major commercial question banks run roughly $100-300 for subscriptions of one to three months and are the main source of volume for the scenario item style; the best of them track the current content outline and the 2026 format, which matters because the passing standard moved to 99/150 in July 2026 and older materials written to the previous standard are still on sale. Review books and courses, $50-200, add structured coverage of the ten content areas and are most useful to nurses coming from outside the ED. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, we rank nothing by commission, and the single most cost-effective decision for most candidates is one official BCEN practice exam plus one commercial question bank, because the combination covers calibration and volume without stacking courses. Confirm the membership discount before paying the full $380, since ENA membership can cut the exam fee by $95.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'BCEN official practice exam', values: ['Priced on the BCEN store (fee-based)', 'Computer-based, real outline and format', 'The calibration gold standard — use mid-prep and near the end'] },
      { label: 'CEN exam (BCEN)', values: ['$380 non-member; $285 ENA member; ~$200 retest option', 'PSI test centre or Live Remote Proctoring', 'The real exam; membership cuts $95 off the fee'] },
      { label: 'Commercial question banks', values: ['~$100-300 for 1-3 month subscriptions', 'Online, scenario-based practice with rationales', 'High-volume drilling of the prioritization item style'] },
      { label: 'CEN review course (BCEN or major vendor)', values: ['~$150-500 depending on package', 'Live or recorded course, often with CE credit', 'Structured coverage for nurses new to the ED'] },
      { label: 'Emergency nursing reference text (work)', values: ['Free or already owned', 'Print or digital', 'The clinical foundation — reorganise it by the ten content areas'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax and change frequently; we rank nothing by commission. The CEN exam fee is $380 for non-members and $285 for ENA members per BCEN, and the recertification fee is $280. Confirm current pricing and the ENA membership discount at the source before paying.'
  },

  commonMistakes: {
    summary:
      'CEN failures are strikingly patternable, and almost none of them are about not knowing emergency nursing — they are about preparing for the wrong test, skipping the prioritization item style, and under-preparing the professional-issues content. The single most common error is studying the ten content areas as lists of facts, when the exam presents scenario items that reward rapid recognition of time-critical emergencies and selection of the next action; a candidate who can define a STEMI but cannot pick the first intervention within the window loses the item. The second is improvising prioritization instead of using a stable framework, which is how candidates fall for the plausible-but-not-urgent distractor on the many items that ask which patient to see first. The third is preparing entirely with short question sets and never running a full 175-question, three-hour simulation, so the back-half fatigue and pacing surprise them on test day. The fourth is ignoring the professional-issues content — triage, disaster preparedness, legal and ethical duties — because it feels like non-clinical padding even though it is scored. The fifth is relying on materials written to the previous passing standard, which matters because BCEN updated the content outline and set the passing score at 99/150 effective 6 July 2026. And the sixth is a logistics failure: a mismatched ID or an unapproved application means no exam and a forfeited fee. None of these are knowledge gaps in emergency medicine; every one is correctable with the right practice format and a few hours of targeted review, which is why most candidates who retake after closing the specific gap pass on the next attempt.',
    items: [
      {
        mistake: 'Studying content areas as lists of facts',
        fix: 'The CEN is scenario-based: it presents a patient and asks what you do next. Convert most of your hours into answered, reviewed items in the scenario style, and drill the time-critical timelines — stroke, STEMI, sepsis, trauma — until the first intervention for each is reflex.'
      },
      {
        mistake: 'Improvising prioritization on the fly',
        fix: 'Many items ask which patient to see first or which action comes first. Use a fixed framework — airway, breathing, circulation, then unstable versus stable — instead of a new rationale per item. The plausible-but-not-urgent distractor is exactly what the framework filters out.'
      },
      {
        mistake: 'Never running a full three-hour simulation',
        fix: '175 questions in 180 minutes is a real endurance test. Run at least two full-length timed practice exams before test day so pacing and back-half fatigue are familiar. Candidates who have only done short sets fade where the harder items cluster.'
      },
      {
        mistake: 'Skipping the professional-issues content',
        fix: 'Triage, disaster preparedness, legal and ethical duties and advocacy are a scored content area. A few hours of focused review converts them into cheap points that working nurses routinely drop.'
      },
      {
        mistake: 'Using materials written to the old standard',
        fix: 'BCEN updated the CEN content outline with a passing score of 99/150 effective 6 July 2026. Check that your books and question bank track the current outline and passing standard; older material is still on sale and leaves you aiming at the wrong target.'
      },
      {
        mistake: 'Losing the seat to an ID or application slip',
        fix: 'Your government-issued photo ID must match your BCEN registration name exactly, and your application must be approved with a valid testing window. Confirm both the week before, because a turned-away candidate forfeits the fee and the seat.'
      }
    ]
  },

  questionTypes: {
    summary:
      'The CEN is a computer-based exam of 175 multiple-choice questions in three hours, of which 150 are scored and 25 are unscored pretest items, scored pass-fail against a published standard of 99 of 150 under the 2026 Passing Point Study. Every item is multiple choice, but the dominant style is the clinical scenario: a patient presentation — often with vital signs, a history and a chief complaint — followed by a question asking for the next assessment, the priority action, the likely cause, or the correct intervention. That scenario design is what makes the exam feel hard even for experienced nurses, because the distractors are real, plausible interventions that are simply not the first or most urgent one. A second recurring style is the prioritization item, which presents several patients or several actions and asks which is first; these reward a stable framework of airway, breathing, circulation and then unstable versus stable rather than content recall. A smaller share of items test discrete facts inside a clinical context — an antidote, a stroke timeline, a triage category — but even these are usually framed with a patient stem. The content is organised around the emergency spectrum: cardiovascular, respiratory, neurological, gastrointestinal, genitourinary and gynecologic-obstetric, maxillofacial and ocular and ENT, orthopedic and wound, psychiatric and psychosocial, toxicology and environmental, systemic and infectious, plus professional issues covering triage, disaster preparedness and legal-ethical duties. Because scoring is criterion-referenced against the 99/150 standard, you do not compete against other candidates, and there is no partial credit — an item is right or wrong, which is why pacing and the prioritization framework carry so much weight. The three samples below illustrate the scenario, prioritization and discrete-in-context styles; they are editor-written to the published content outline and are not live exam items.',
    types: [
      { name: 'Clinical scenario items', share: 'The dominant style', detail: 'A patient presentation with vitals and history, asking for the next assessment, the priority action, the likely cause or the correct intervention. Distractors are real but later or less urgent interventions.' },
      { name: 'Prioritization and triage items', share: 'A large recurring share', detail: 'Several patients or several actions, one correct first move. These reward the ABCs-then-stability framework and punish improvisation.' },
      { name: 'Discrete knowledge in context', share: 'A smaller share', detail: 'A fact tested inside a patient stem — an antidote, a stroke window, a triage category. Still multiple choice, still single-answer, but the stem adds clinical framing.' },
      { name: 'Professional issues items', share: 'Scored and often skipped', detail: 'Triage principles, disaster preparedness, legal and ethical duties and patient advocacy. Working nurses under-prepare these and give away cheap points.' }
    ],
    samples: [
      {
        prompt: 'A 58-year-old man presents with sudden, severe headache described as "the worst of my life", neck stiffness and photophobia. He is alert and oriented. Vital signs are blood pressure 168/96, heart rate 104, respiratory rate 18, temperature 38.9\u00b0C. Which is the priority action?',
        options: [
          'A. Obtain a computed tomography (CT) scan of the head before lumbar puncture',
          'B. Administer antipyretics and reassess in 30 minutes',
          'C. Discharge with a migraine headache plan and neurology follow-up',
          'D. Begin a full sepsis workup including blood cultures and urinalysis'
        ],
        answer: 'A',
        explanation: 'The classic "worst headache of my life" with meningismus and fever is the presentation of subarachnoid hemorrhage and bacterial meningitis until proven otherwise, and both are time-critical. For suspected subarachnoid hemorrhage, a non-contrast CT scan is the first study, and for suspected meningitis, imaging before lumbar puncture is the standard when the patient is at risk of herniation or has focal findings — the combination of fever and meningismus makes this the priority. B waits on a headache and fever pattern that demands imaging; C is dangerously wrong because it dismisses an emergency presentation; D tests the wrong hypothesis when the presentation points to the central nervous system. The item rewards recognising the emergency and sequencing the workup, which is exactly the clinical judgment the CEN tests.'
      },
      {
        prompt: 'The nurse is caring for four patients in the emergency department. Which patient should the nurse assess FIRST?',
        options: [
          'A. A patient with a distal radius fracture reporting pain of 7/10 who is awaiting splinting',
          'B. A patient 6 hours post thrombolytic for stroke who reports the headache is now 8/10',
          'C. A patient with gastroenteritis who has vomited once and is tolerating sips of water',
          'D. A patient with a laceration awaiting suturing who reports mild anxiety'
        ],
        answer: 'B',
        explanation: 'This is a prioritization item, and the framework resolves it: airway, breathing, circulation, then unstable versus stable, then acuity. The patient 6 hours post thrombolytic with a sudden severe headache is the one most likely to be unstable — new or worsening headache after thrombolysis is a red flag for intracranial hemorrhage, a true emergency that requires immediate assessment and imaging. A is a stable fracture with controlled pain, C is a stable, minimally dehydrated patient, and D is a stable minor wound with anxiety — all real needs, none urgent. Candidates who pick A are choosing the patient with the loudest complaint rather than the one with the highest risk, which is exactly the distractor design of this item type.'
      },
      {
        prompt: 'A patient with a known allergy to peanuts is having an acute anaphylactic reaction with stridor, hypotension and facial swelling. Which is the priority intervention?',
        options: [
          'A. Administer intramuscular epinephrine immediately',
          'B. Obtain a 12-lead electrocardiogram first',
          'C. Place the patient in a cool environment to reduce swelling',
          'D. Prepare for a chest radiograph to rule out a foreign body'
        ],
        answer: 'A',
        explanation: 'Anaphylaxis with airway compromise and hypotension is a time-critical emergency, and the first-line intervention is intramuscular epinephrine given immediately — it is both the correct medication and the correct timing, because delay is the main cause of preventable death in anaphylaxis. B misprioritises a diagnostic study that does not treat the reaction; C is not a recognised intervention for anaphylaxis and confuses swelling with heat-related oedema; D investigates an alternative cause and wastes the treatment window. This item pairs the recognition of the emergency with the specific first intervention, the two skills the CEN tests together throughout the paper.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      'The CEN is a computer-based exam delivered by appointment through PSI, either at a PSI test centre or through Live Remote Proctoring (LRP) on your own computer, and the direct exam-day answer is that you will sit 175 multiple-choice questions in three hours — 150 scored, 25 unscored — with the passing standard at 99 of 150 scored items under the 2026 Passing Point Study, and you will get a pass-fail result at the end of the appointment. At a test centre, arrive early enough to complete check-in, which requires a valid government-issued photo ID with a name matching your BCEN registration exactly; a mismatch means no exam and a forfeited fee. For LRP, complete the system check on the exact machine and network you will use, and clear the room — the proctor scans it before you begin. Personal items, phones, smartwatches and study materials are not permitted in the testing room, and you cannot bring your own scratch paper; the centre provides a whiteboard or note-taking material if any is allowed. The three hours pass quickly at roughly one question per minute, so pace the paper and keep moving past items you are unsure of rather than dwelling, because there is no penalty for answering and the clock does not pause for breaks. A small number of the 175 items are unscored pretest questions that you cannot identify, so answer everything. You will not know during the exam whether you are passing; the result is delivered at the end. If you pass, your CEN is valid for four years, renewed by completing 100 continuing-education contact hours or by retaking the exam, with a recertification fee — so diary the renewal date the week you pass, because the four-year cycle is the part candidates forget first.',
    bring: [
      'A valid government-issued photo ID (passport or driver\u2019s license) with a name matching your BCEN registration exactly',
      'Your BCEN application approval and appointment confirmation with the PSI test-centre address or LRP session link',
      'Prescription glasses if needed; the test centre provides a locker for everything else',
      'For LRP: the system-tested computer, webcam, microphone and a completely clear, private room'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers, calculators and any electronic device — locked at the centre, out of the room for LRP',
      'All notes, books, cheat sheets and scratch paper; the centre provides note-taking material if allowed',
      'Bags, coats and outerwear beyond what you can store in the locker',
      'Any other person in the room for LRP, and any second monitor or unapproved device'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your ID name matches your BCEN registration exactly, confirm the testing window is valid, and for LRP run the system test on the same machine and network you will use.' },
      { time: '30 minutes before', detail: 'Arrive at the PSI centre for check-in, or log in to the LRP session and complete the identity and room scans.' },
      { time: 'Start', detail: 'Tutorial, then the 175-item exam begins. Pacing target: roughly one question per minute across three hours.' },
      { time: 'During the exam', detail: 'Answer everything and keep moving; there is no penalty for guessing, no partial credit, and the clock does not pause. Flag uncertain items if the interface allows review.' },
      { time: 'At the end', detail: 'The pass-fail result is delivered at the end of the appointment, along with the score report.' }
    ],
    rules: [
      '175 multiple-choice questions in three hours; 150 are scored and 25 are unscored pretest items.',
      'Passing standard is 99 of the 150 scored items under the 2026 Passing Point Study, effective 6 July 2026.',
      'Valid government photo ID with a name matching your BCEN registration exactly is required, or you are turned away and the fee is forfeited.',
      'No personal items in the room; no calculators; the centre provides note-taking material if any is allowed.',
      'No scheduled breaks in the three-hour appointment, and the clock does not stop if you leave.',
      'For LRP, the room must be private and clear, and the system must pass the check on the exact machine you will use.'
    ],
    afterwards:
      'You receive a pass-fail result at the end of the appointment, and BCEN provides a score report that shows how you performed relative to the content areas of the exam — read it, because on a pass it tells you where your continuing-education hours are best spent, and on a fail it is the diagnosis for the retake. On a pass, your CEN credential is valid for four years; renewal is by completing 100 contact hours of emergency-nursing continuing education or by retaking the exam, with a recertification fee, so log the expiry date immediately and start banking CE from real work rather than scrambling in year four. On a fail, you may retake the exam after the BCEN waiting rules apply, so plan the retake deliberately: use the score report to identify the one or two content areas that dragged you below 99 of 150, spend a focused block drilling those areas with scenario practice, run a full timed simulation, and re-sit. Candidates who close the specific gap rather than re-reading everything are the ones who pass on the next attempt, which is why the score report is the most valuable document you will receive after either outcome.'
  }
};

export default data;
