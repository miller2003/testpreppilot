// Depth content for: ase-t7-truck-hvac
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Beauty, trades & skilled-licensure desk',
    bio: 'This guide is compiled and maintained by our skilled-licensure desk, which covers exams that sit between a vocational program and a state licence or industry certification. ASE (the National Institute for Automotive Service Excellence) is the dominant certification body for vehicle technicians in the United States, and its Medium-Heavy Truck series (T2 through T8) is the credential track for class 4-8 truck and bus technicians. We cite ASE\'s own test pages and study guides for exam structure, question counts, time limits and fees, and we name the testing vendor (Prometric) and the recertification rules. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate — and we are deliberate that the correct SOC for a medium-heavy truck HVAC technician is Bus and Truck Mechanics and Diesel Engine Specialists (49-3031), not the Automotive Service Technicians category used for light vehicles.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam structure, question counts, time limits, content weightings, fees and recertification rules were taken from ASE\'s own medium-heavy truck test pages and study guides and cross-checked against the ASE FAQ.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$60,640 median for bus and truck mechanics and diesel engine specialists (BLS, May 2024)',
    summary:
      'The Bureau of Labor Statistics does not track a "truck HVAC technician" as a distinct profession, so any salary page quoting one is a job-board aggregate rather than government data. The correct official classification for a medium-heavy truck technician — including the heating, ventilation, air-conditioning and engine-cooling work that ASE T7 covers — is Bus and Truck Mechanics and Diesel Engine Specialists, SOC 49-3031. This is a deliberate and important choice: the Automotive Service Technicians and Mechanics category (49-3023) is for light vehicles and carries a lower May 2024 median of about $49,670; a T7 candidate works on class 4-8 trucks and buses, not passenger cars, so 49-3031 is the honest match. The May 2024 median for 49-3031 was $60,640 a year, or $29.15 an hour, with the lowest 10 percent under $41,670 and the highest 10 percent over $85,980. The distribution is worth reading because truck and diesel work pays a premium over light-vehicle repair, and the top decile reflects technicians who combine multiple ASE truck certifications (T2-T8) with field experience on proprietary systems. BLS counted 319,900 jobs in 2024 and projects about 2 percent growth from 2024 to 2034 — slower than average, but with roughly 26,500 openings a year arising from both modest growth and replacement as experienced technicians retire. The replacement demand is the real story for a T7 candidate: the diesel and truck workforce is ageing, and employers specifically value ASE-certified technicians because the systems are complex and warranty and fleet work increasingly requires certification. BLS lists the typical entry as a postsecondary nondegree award plus on-the-job training.',
    rows: [
      { label: 'Median annual wage, bus and truck mechanics and diesel specialists', value: '$60,640', note: 'BLS Occupational Outlook Handbook, May 2024 ($29.15/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $41,670', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $85,980', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '319,900 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~26,500 per year', note: 'BLS OOH Job Outlook, 2024-34' },
      { label: 'Projected employment change', value: '+2% (2024-2034)', note: 'BLS OOH Job Outlook, slower than average; replacement-dominated' }
    ],
    growth: '+2% projected 2024-34 (slower than average), with ~26,500 openings a year; an ageing diesel/truck workforce makes ASE-certified technicians especially valued for replacement hiring',
    source: {
      label: 'BLS Occupational Outlook Handbook — Diesel Service Technicians and Mechanics',
      url: 'https://www.bls.gov/ooh/installation-maintenance-and-repair/diesel-service-technicians-and-mechanics.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'ASE publishes no pass rate — and does not even publish the passing score',
    summary:
      'ASE does not release pass-rate statistics for T7 or any of its certification tests, and it goes further than most vendors by also not publishing the passing score. The exams are criterion-referenced: each form is built to a fixed standard of competence rather than ranked against other candidates, and ASE converts raw performance to a scaled score on a 100 to 900 scale. What ASE does publish is that you must reach a passing scaled score to certify, but it does not say what that number is, and it does not publish how many candidates clear it. This is a meaningful contrast with exams like CompTIA\'s Linux+, which at least publishes the cut score. For a T7 candidate the practical implication is that you cannot reverse-engineer "the percentage I need" from any official source, and you should not trust third-party blogs that quote a specific passing percentage — ASE has not released one. What is verifiable and useful is the structure: T7 is 50 questions in 60 minutes, of which 40 are scored operational items and 10 are unscored research items used to validate future forms. Because the exam is criterion-referenced and the cut is hidden, the only rational strategy is to prepare to a standard of being able to diagnose and repair each content area unaided, rather than to chase a rumoured score line. Plan also for the retake rule: if you fail, ASE requires a 30-day wait before you may retest the same certification, and each attempt is paid.',
    source: {
      label: 'ASE — certification testing policies and FAQ',
      url: 'https://www.ase.com/Tests/Test-Policies-and-FAQ'
    },
    caveat:
      'No pass rate and no passing score are published by ASE for T7 or any ASE test. We have deliberately left the pass-rate table empty. What is verifiable is the criterion-referenced 100-900 scaled scoring, the 50-question/60-minute structure, and the 30-day retake wait. Do not rely on any published "passing percentage" you find elsewhere — ASE has not released one.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'Before planning a single hour, be clear about what T7 is and is not. T7 is one test in ASE\'s Medium-Heavy Truck series (T2-T8), and it certifies the Heating, Ventilation and Air Conditioning content area specifically — not general truck repair. The exam is 50 questions in 60 minutes: 40 scored operational items and 10 unscored research items, so you are effectively answering 40 graded questions against the clock with no way to tell which 10 are unscored. The published content breakdown is A. HVAC Systems Diagnosis (6 questions, 15 percent), B. A/C System and Component (20 questions, 50 percent), C. Heating and Engine Cooling (6 questions, 15 percent), and D. Operating Systems and Controls (8 questions, 20 percent). Notice that Section B alone is half the exam — the A/C system and its components (compressor, condenser, evaporator, receiver-drier or accumulator, orifice tube or expansion valve, refrigerant handling) is where most of the marks live, and it is also where the refrigeration and electrical knowledge must combine. The plan below runs six weeks at roughly 6-8 hours a week and assumes you have hands-on truck experience or are currently working toward the ASE experience requirement (typically two years in the truck category, or a combination of training and experience, documented through myASE). If you are still an apprentice, weight the plan toward the theory you have not yet performed; if you are an experienced tech, weight it toward the A/C refrigerant and electrical-diagnosis material that experienced mechanical techs often understudy.',
    totalHours: '40-50 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Blueprint, refrigeration theory and safety',
        tasks: [
          'Read the ASE T7 test specifications and the Medium-Heavy Truck study guide outline; write down the four sections and their question counts',
          'Learn the refrigeration cycle (compression, condensation, expansion, evaporation) and what each component does',
          'Study refrigerant types and handling: R-134a and R-1234yf in truck applications, recovery/recycle/recharge discipline',
          'Note that T7 does NOT satisfy EPA Section 609 (MVAC) certification — they are separate credentials'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Section B — A/C System and Component (50%)',
        tasks: [
          'Compressor types and operation, clutches, and diagnosis of noise, seizure and cycling faults',
          'Condenser and evaporator function, airflow, and restrictions; receiver-drier/accumulator and orifice tube/expansion valve roles',
          'Refrigerant circuit diagnosis: static vs running pressures, high-side vs low-side readings, and what each fault pattern indicates',
          'Electrical supply to the A/C system: relays, pressure switches, and the control inputs that enable the compressor'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Week 4',
        focus: 'Sections A and C — diagnosis and heating/cooling',
        tasks: [
          'Section A (15%): systematic HVAC diagnosis — symptom to cause, using gauges, scan data and visual inspection',
          'Section C (15%): heating and engine cooling — heater core, valves, coolant circuit, radiator, fan and thermostat diagnosis',
          'Cross-link heating and A/C: why the two share a blower and a temperature-blend system',
          'Practice reading pressure/temperature scenarios and naming the fault'
        ],
        hours: '7-9 hrs'
      },
      {
        label: 'Week 5',
        focus: 'Section D — operating systems and controls (20%)',
        tasks: [
          'Blower motor circuits, resistors/modules, and speed control',
          'Blend-door, mode-door and recirculation actuators — vacuum, cable and electric types',
          'Climate-control modules, sensors (in-car temp, ambient, evaporator temp) and scan-tool data',
          'Wiring and ground diagnostics specific to truck HVAC controls'
        ],
        hours: '7-9 hrs'
      },
      {
        label: 'Week 6',
        focus: 'Timed practice and recertification awareness',
        tasks: [
          'Take timed 60-minute practice sets weighted to the blueprint (B 50%, D 20%, A and C 15% each)',
          'Log misses by section; re-study the weak area, not the whole guide',
          'Confirm the 2026 fee structure ($34 registration per order + $62 per test, recert capped at $186/order) and Prometric delivery',
          'Confirm your work experience is logged in myASE if you plan to claim the certification on passing'
        ],
        hours: '6-8 hrs'
      }
    ],
    variants: [
      { label: 'Experienced medium-heavy truck tech', detail: 'Four weeks at 6 hrs/week. You know the mechanical systems; the gap is usually A/C refrigerant diagnosis and the electrical/controls material in Sections B and D. Weight early weeks to refrigeration theory and pressure-pattern diagnosis, and skim heating/cooling.' },
      { label: 'Light-vehicle (A-series) tech crossing to trucks', detail: 'Eight weeks at 7 hrs/week. The A/C principles transfer, but truck systems, refrigerant quantities and component layouts differ. Add two weeks on truck-specific A/C architecture and on the T-series experience requirement before you schedule.' },
      { label: 'Recertifying (T7R)', detail: 'Two to three weeks. Recert is 20 questions in 30 minutes and covers the same domain at a recert standard; you already hold the knowledge. Drill the current study guide for any updated refrigerant or control content, and note recert is delivered remotely online while initial T7 is Prometric test-center.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'T7 is a criterion-referenced, knowledge-and-diagnosis exam, not a hands-on performance test, and the winning preparation is building the ability to read a fault scenario and name the failed component or circuit — repeatedly, under a one-minute-per-question clock. The exam\'s structure rewards candidates who know the A/C system cold, because Section B is half the paper, and it punishes candidates who can "do the job" but cannot explain the refrigeration cycle or interpret pressure readings on paper, which is exactly the skill the test measures. The most efficient study habit is to convert hands-on familiarity into diagnostic language: be able to state what the compressor, condenser, evaporator, receiver-drier or accumulator, and orifice tube or expansion valve each do, and be able to map a gauge pattern — high-side versus low-side, static versus running — to a root cause without touching a wrench. Because ASE hides the passing score, you cannot aim at a known percentage, so the only rational target is unaided competence on every content area, and that reframes preparation from "memorize facts" to "practice diagnosis until it is reflexive." Timed practice matters more than many technicians expect: with 50 items in 60 minutes, about 72 seconds each including the ten unscored research questions, the candidate who never practices under the clock knows the material but cannot deploy it fast enough across the scenario items that dominate Sections A and B. Use the official ASE study guide as the syllabus above all third-party quizzes, and drill pressure-pattern recognition daily, because that single skill carries the largest share of the exam. The strategies below turn that approach into a weekly routine.',
    items: [
      {
        title: 'Own the refrigeration cycle and component roles',
        detail: 'Half the exam (Section B) is the A/C system. You must be able to state, without hesitation, what the compressor, condenser, evaporator, receiver-drier/accumulator, orifice tube and expansion valve each do and how a failure in one shows up in pressures or symptoms. This is foundational, not optional, and it underpins both B and the diagnosis in A.'
      },
      {
        title: 'Practice interpreting pressure and temperature readings',
        detail: 'T7 diagnosis questions give you static vs running pressures, high-side vs low-side values, and temperatures, then ask for the fault. Drill pressure-pattern recognition: restricted condenser, low charge, failed compressor, blocked orifice, icing. The ability to map a gauge pattern to a root cause is the single highest-leverage skill for Sections A and B.'
      },
      {
        title: 'Separate T7 from EPA Section 609',
        detail: 'A common and costly confusion: passing T7 does NOT grant EPA Section 609 MVAC certification, and holding 609 does not satisfy T7. If you handle refrigerant for pay you need 609 separately. Study T7 as an ASE diagnostic certification and treat 609 as a distinct credential you may also need.'
      },
      {
        title: 'Weight study to the blueprint, not your comfort',
        detail: 'The four sections are not equal: B is 50 percent, D is 20 percent, A and C are 15 percent each. Candidates who over-study heating/cooling (intuitively familiar) and under-study A/C components lose points where they are cheapest to gain. Allocate time to match the question counts.'
      },
      {
        title: 'Use the official ASE study guide and sample items',
        detail: 'ASE publishes a Medium-Heavy Truck study guide that includes sample T7 questions and the content outline. Because ASE hides the passing score, the study guide is the closest thing to a syllabus and the only place you will see the question style. Work its sample items thoroughly rather than relying on generic truck-A/C quizzes.'
      },
      {
        title: 'Prepare for the unscored research items',
        detail: 'Ten of the 50 items are unscored research questions used to validate future forms. You cannot identify them, so answer all 50 as if they count, and do not waste time trying to spot them. The 60-minute limit applies to the full 50.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The one resource that is effectively mandatory is the official ASE Medium-Heavy Truck study guide, because ASE publishes neither the passing score nor a public question bank, so the study guide is the only authoritative window onto the T7 question style, content outline and sample items, and everything else is an interpretation of it at best. Textbooks, employer training and third-party practice apps are supplementary, and the exam fee itself is the non-negotiable cost: for 2026 that is a $34 registration fee per order plus $62 per test, with recertification orders capped at $186 per order, which is worth knowing if you are renewing several T-series tests in a single booking. The study guide matters so much precisely because ASE hides the passing scaled score, so you have no external target to aim at and must infer the standard from the guide\'s outline and sample questions; a generic truck A/C quiz found online cannot tell you the weighting (B is 50 percent, D is 20 percent, A and C are 15 percent each) or the diagnostic framing ASE uses. Employer or OEM training is genuinely valuable if you work for a dealership or fleet that trains on its own trucks, and it is often free to employees, but it may not map cleanly to the T7 blueprint, so use it to reinforce the guide rather than replace it. Third-party practice apps are cheap and useful for extra drill, but vet them against the ASE outline because their quality varies and none are official. The table below compares resources by what they are actually for, and we do not rank by commission; the ASE store fee schedule and study guide are the two items no candidate should skip.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ASE Medium-Heavy Truck study guide (T2-T8, includes T7 sample items)', values: ['Priced through the ASE store', 'Print or digital', 'The only authoritative syllabus and sample-question source; near-mandatory'] },
      { label: 'ASE test fee (2026)', values: ['$34 registration per order + $62 per test; recert capped at $186/order', 'Paid at booking via Prometric', 'Required to sit; the registration fee is per order, not per test'] },
      { label: 'Employer / OEM truck HVAC training', values: ['Often free to employees', 'In-person or online', 'Candidates with a dealership or fleet that trains on its own trucks'] },
      { label: 'Medium/heavy truck A/C textbooks and manuals', values: ['~$30-80', 'Print or digital', 'Deep reference on refrigeration and component theory; vet against the ASE outline'] },
      { label: 'Third-party ASE practice test apps', values: ['~$10-40', 'Mobile/web', 'Extra question drill; quality varies and they are not official — use after the study guide'] }
    ],
    footnote: 'Fees checked 2026-08 from ASE\'s published fee schedule: $34 registration fee per order plus $62 per test, with recertification orders capped at $186 per order. Older ASE pages show lower figures ($36 + $43, recert $20/test); the 2026 figures supersede them. Prices before tax; we do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'T7 failures are usually structural misunderstandings rather than lack of truck knowledge, and that distinction is encouraging because structural errors are fixed in the study plan rather than on the test. Candidates study the wrong credential, misjudge the 60-minute clock, or treat the A/C section as one topic among equals instead of half the exam, and each of those mistakes is made weeks before the sitting rather than on the day. The most damaging is confusing T7 with EPA Section 609: passing T7 does not grant the federal MVAC refrigerant-handling credential, and holding 609 does not satisfy T7, yet technicians routinely assume one covers the other and then discover a licensing gap only when they try to work on refrigerant for pay. Underweighting Section B — the A/C System and Component section that is 20 of 40 scored questions, or half the paper — is the second, because candidates spread study evenly or over-invest in the familiar heating and cooling material and lose the cheapest points on the exam. Misjudging the clock and treating T7 as hands-on rather than diagnostic are pacing and orientation errors that untimed, wrench-focused prep produces. Forgetting that ASE hides the passing score and requires a 30-day retake wait, and neglecting to log the two-year work-experience requirement through myASE, are the two administrative mistakes that leave a passing candidate uncertified. Assuming a single T7 pass makes you "ASE Master Truck" is the final one, because Master status requires the full T2-T8 combination. The six mistakes below each have a specific, pre-exam fix.',
    items: [
      {
        mistake: 'Confusing T7 with EPA Section 609 certification',
        fix: 'T7 is an ASE diagnostic certification for truck HVAC; EPA Section 609 is the federal MVAC refrigerant-handling credential. Passing one does not grant the other, and you may need both to work legally on truck A/C for pay. Study and, if needed, sit 609 separately, and do not assume your T7 pass covers refrigerant licensing.'
      },
      {
        mistake: 'Underweighting Section B (50% of the exam)',
        fix: 'The A/C System and Component section is 20 of 40 scored questions. Candidates who spread study evenly across the four sections, or over-invest in familiar heating/cooling, lose the cheapest points on the paper. Allocate study time to the question counts: B 50%, D 20%, A and C 15% each.'
      },
      {
        mistake: 'Treating T7 as hands-on rather than diagnostic',
        fix: 'T7 is a written, criterion-referenced knowledge-and-diagnosis exam delivered at a Prometric center (initial) or online (recert). It tests whether you can name the failed component or circuit from a scenario, not whether you can wrench. Prepare by interpreting pressure/temperature/symptom patterns, not by practicing physical repairs.'
      },
      {
        mistake: 'Not knowing the hidden passing score and retake wait',
        fix: 'ASE publishes neither the pass rate nor the passing scaled score, and requires a 30-day wait before retesting a failed certification, with each attempt paid. Do not chase a rumoured percentage; prepare to a standard of unaided diagnosis. And book the retake with the wait in mind so a fail does not stall your certification timeline.'
      },
      {
        mistake: 'Forgetting the ASE work-experience requirement',
        fix: 'Passing the test is necessary but not sufficient — ASE requires documented experience (typically two years in the truck category, or a training-plus-experience combination) logged through myASE before the certification is awarded. Candidates who ace T7 but never document experience are not certified. Log your hours before or right after testing.'
      },
      {
        mistake: 'Assuming T7 alone makes you "ASE Master Truck"',
        fix: 'ASE Master Medium-Heavy Truck requires certification across T2 through T8 (T1 is not part of the Master truck requirement). A single T7 pass is one of seven needed. Plan the full series if Master status is your goal, and track each toward the combination rather than treating T7 as a standalone trophy.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'T7 is 50 questions in 60 minutes, of which 40 are scored operational items and 10 are unscored research items, and every item is selected-response — there is no performance component on the written test, because hands-on repair is reserved for the job, not the exam. ASE scores it on a scaled 100-900 basis and is criterion-referenced, so your result reflects a fixed standard of competence rather than your rank against other candidates, and ASE does not publish the passing scaled score, which is precisely why you cannot aim at a known percentage and must prepare to a standard of unaided diagnosis. The content is split four ways: A. HVAC Systems Diagnosis (6 questions, 15%), B. A/C System and Component (20 questions, 50%), C. Heating and Engine Cooling (6 questions, 15%), and D. Operating Systems and Controls (8 questions, 20%). Because Section B is half the exam and its questions are diagnostic, the practical pacing implication is that you should be fast on the straightforward component-identification items so you have time for the scenario-based pressure-and-symptom diagnosis that dominates B and A, where a single item may describe gauge readings and ask for the failed part. The 60-minute limit across 50 items is about 72 seconds each including the ten unscored research questions, so untimed practice will quietly sink you, and the candidate who lingers on one ambiguous refrigeration-cycle item loses the clock on the scenario items that decide the result. The ten research items are indistinguishable on the day, so answer all 50 as if each counts and never waste time trying to spot them. The item types below show how the blueprint is actually expressed in questions, and the sample items are drawn directly from the diagnostic style ASE uses.',
    types: [
      { name: 'Single-answer multiple choice', share: 'The entire exam', detail: 'One correct response from four options. Distractors are usually plausible alternative faults or components, so partial understanding is punished — especially in pressure-pattern diagnosis.' },
      { name: 'Component identification and theory', share: 'Heavy in Section B', detail: 'What each A/C component does, where it sits in the circuit, and how its failure presents. Foundational to half the paper.' },
      { name: 'Diagnostic scenario items', share: 'Heavy in Sections A and B', detail: 'A symptom plus gauge pressures, temperatures or scan data, asking for the root cause. These reward pressure-pattern recognition over rote fact recall.' },
      { name: 'Unscored research items', share: '10 of the 50 items', detail: 'Embedded for form validation and not counted; indistinguishable on the day. Answer all 50 as if they count.' }
    ],
    samples: [
      {
        prompt: 'A truck\'s A/C system shows low suction-side pressure, high discharge-side pressure, and the condenser outlet feels cool while the inlet is hot. The most likely cause is:',
        options: [
          'A. A restricted condenser',
          'B. A failed compressor clutch',
          'C. An orifice tube or expansion valve restriction',
          'D. Low refrigerant charge'
        ],
        answer: 'C',
        explanation: 'A restriction at the orifice tube or expansion valve blocks flow into the evaporator, so the low side drops below normal and the high side rises as refrigerant backs up ahead of the restriction; the condenser inlet is hot and the outlet (downstream of the restriction) is cool, matching the described pattern. A (restricted condenser) raises high-side pressure but does not typically produce a cool condenser outlet with a hot inlet in this way. B (failed clutch) means the compressor is not engaging, giving little to no pressure differential at all. D (low charge) drops both sides rather than raising the high side, so it does not fit.'
      },
      {
        prompt: 'Which statement about ASE T7 and EPA Section 609 certification is correct?',
        options: [
          'A. Passing T7 automatically grants EPA Section 609 MVAC certification',
          'B. T7 and Section 609 are the same credential issued by different agencies',
          'C. T7 is an ASE diagnostic certification; Section 609 is a separate federal refrigerant-handling credential',
          'D. Section 609 is required before you may sit T7'
        ],
        answer: 'C',
        explanation: 'T7 certifies HVAC diagnostic competency under ASE\'s Medium-Heavy Truck series, while EPA Section 609 is the federal certification to handle mobile A/C refrigerant for pay; they are distinct credentials from different authorities, and one does not confer the other. A is the common trap and is false. B conflates two separate programs. D is false — Section 609 is not a prerequisite to sit T7, though you may need it separately to work on refrigerant legally.'
      },
      {
        prompt: 'A technician recovers, evacuates and recharges a truck A/C system but finds the cabin never reaches target temperature and the low-side gauge reads near zero. Before condemning the compressor, the technician should first verify:',
        options: [
          'A. That the orifice tube or expansion valve is not restricted and the system is not undercharged',
          'B. That the blower motor resistor is faulty',
          'C. That the heater core is leaking',
          'D. That the thermostat is stuck open'
        ],
        answer: 'A',
        explanation: 'A near-zero low-side reading with poor cooling points first to a restriction (orifice tube/expansion valve) or an undercharge — both produce low low-side pressure and weak cooling and are far more common than compressor failure after a proper recover/evacuate/recharge. B affects airflow, not low-side pressure. C and D are heating-system faults and would not produce a near-zero low-side gauge reading. Verifying the restriction/charge first follows the efficient diagnostic order the exam rewards.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published ASE T7 blueprint and study-guide style, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'ASE T7 is delivered through Prometric for the initial certification, while recertification (T7R, 20 questions in 30 minutes) is available online remotely, and it is a 60-minute, 50-question sitting with no scheduled break — the clock does not stop once it starts, and there is no pausing to collect your thoughts. The most common way candidates lose T7 has nothing to do with trucks: Prometric enforces strict ID and check-in rules, and a name mismatch or missing ID forfeits the seat and the fee, which is rarely refunded, so confirming the exact ID requirements for your Prometric appointment the week before is the highest-leverage exam-day action you can take. Arrive early, expect a security screening that is applied without exception, and plan to use the full 60 minutes — leaving early is allowed but the time is yours, and a rushed first pass on the diagnostic scenarios is the usual cause of avoidable misses on the Section B pressure-pattern items that carry the exam. Remember that 10 of the 50 items are unscored research questions you cannot identify, so answer every item as if it counts and do not try to game which are which; the 72-seconds-per-item pace is real and the diagnostic scenarios are where that pace is won or lost. For the online recert, run the system test on the exact machine and network you will use, because a failed equipment check on the day forfeits the attempt. Bring only what Prometric permits; notes, phones and tools stay out of the room, because this is a written diagnostic exam, not a bench test, and the terminal gives you nothing beyond the questions.',
    bring: [
      'One or two forms of unexpired government-issued photo ID matching your ASE/Prometric registration exactly',
      'Your ASE confirmation or authorization number from myASE or the booking email',
      'If recertifying online: a compatible computer, webcam, microphone and a private room, system-tested in advance',
      'Any required documentation of your work experience is logged in myASE beforehand, not brought to the seat',
      'Layers you can remove; testing rooms are cool and you may not bring outerwear, bags or notes to the seat'
    ],
    leave: [
      'All notes, study guides, flashcards and printed references — none permitted at the seat',
      'Phones, smartwatches, earbuds and any electronic device; locker or out of the room',
      'Bags, coats, food and drink beyond what the center permits in the waiting area',
      'Tools or any physical A/C components; this is a written diagnostic exam, not a bench test',
      'A calculator or writing materials unless the center provides them'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm the Prometric location (initial) or the online proctor system test (recert). Verify ID matches your registration exactly — mismatches forfeit the seat.' },
      { time: 'The night before', detail: 'Pack ID and confirmation; do one light review of refrigeration-cycle and pressure-pattern diagnosis only. Do not cram new material.' },
      { time: '30 minutes before', detail: 'Arrive at the Prometric center (initial). Check-in includes ID verification, a signature or biometric capture, and a locker for belongings.' },
      { time: 'Seated', detail: 'You are assigned a terminal; a short tutorial may precede the timed section. The 60-minute clock starts with the exam, not the tutorial.' },
      { time: '0-50 minutes', detail: 'Work the 50 items at about 72 seconds each. Answer the component-identification items briskly to bank time for the B-section diagnostic scenarios; flag uncertainties and return if time remains.' },
      { time: '50-60 minutes', detail: 'Review flagged items; submit before the clock expires rather than letting it run out.' },
      { time: 'After submission', detail: 'Prometric/ASE delivers the result per their process. Log it in myASE and confirm your experience record is complete so certification can be awarded.'
      }
    ],
    rules: [
      'The exam is 50 questions in 60 minutes, including 10 unscored research items; the clock does not stop for breaks.',
      'Scoring is criterion-referenced on a 100-900 scaled score; ASE does not publish the passing score or any pass rate.',
      'ID must match your registration exactly; a mismatch can forfeit the seat and the fee with no refund.',
      'No personal materials, electronics or notes at the seat; the center provides any permitted items.',
      'Initial T7 is Prometric test-center; recertification (T7R, 20 questions/30 min) is available online remotely.',
      'A failed test requires a 30-day wait before retesting, and each attempt is paid at the current fee.'
    ],
    afterwards:
      'ASE delivers your result through Prometric and myASE. Passing T7 is necessary but not sufficient for the certification: ASE requires documented work experience — typically two years in the medium-heavy truck category, or a combination of training and experience — logged through myASE before the credential is awarded, so confirm your experience record is complete. T7 is valid for five years and is renewed by passing the recertification test (T7R, 20 questions in 30 minutes, available online), with recert orders capped at $186 per order alongside the standard $34 registration plus $62 per test for initial sittings. If you do not pass, note the 30-day retake wait and use the interval to rebuild the weak section — because the exam is criterion-referenced and Section B is half the paper, a narrow fail almost always traces to A/C system and component diagnosis, and a focused three-to-four-week rebuild of that area is typically enough. If your goal is ASE Master Medium-Heavy Truck, schedule the remaining T2-T8 tests (T1 is not required for the truck Master) and track each toward the combination; a single T7 pass is one of seven.'
  }
};

export default data;
