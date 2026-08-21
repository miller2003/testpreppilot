// Depth content for: faa-cax-commercial-pilot-airplane
// FAA Commercial Pilot — Airplane (CAX). Fill ONLY the sections you have real,
// sourced data for. Each prose section needs >=250 words of exam-specific narrative.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Aviation & FAA certification desk',
    bio: 'This guide is compiled and maintained by our aviation desk. FAA knowledge-test structure comes from the FAA Airman Knowledge Testing Matrix and the Commercial Pilot Airplane Airman Certification Standards (ACS), which we track by edition. The FAA publishes no pass-rate statistics, and we state that plainly rather than repeating industry guesses. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam code, question count, time allotment and passing grade were taken from the current FAA Airman Knowledge Testing Matrix (revised 10/22/25) and the Commercial Pilot Airplane ACS; salary from the BLS Occupational Outlook Handbook May 2024 release.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$122,670 median for commercial pilots (BLS, May 2024) — SOC 53-2012',
    summary:
      'The direct answer is that commercial pilots earned a median of $122,670 per year in May 2024, the most recent BLS Occupational Employment and Wage Statistics survey, and the figure belongs to SOC 53-2012, Commercial Pilots. That number needs two careful readings before it is used to plan a career. First, the OOH page that carries it is titled "Airline and Commercial Pilots" and covers both the airline side (airline pilots, copilots and flight engineers, median $226,600) and the commercial side ($122,670); the commercial-pilot median is the one relevant to a newly certificated CAX holder, and it is roughly half the airline figure because the airline number is dominated by senior, degree-holding captains at the majors. Second, the commercial-pilot median itself is pulled upward by high-time charter, air-ambulance and corporate pilots, so the typical first-year commercial pilot working as a flight instructor or entry charter pilot is below the median, not at it. The realistic distribution is a long, steep ladder: the lowest 10 percent of commercial pilots earned less than $56,260 and the highest 10 percent more than $168,700 in the same survey family, and the climb from one end to the other is largely a function of flight hours, instrument currency and turbine time rather than the certificate itself. The CAX knowledge test is therefore best understood as a gate into a flight-hour-building career rather than a wage catalyst: it is what you pass on the way to the commercial checkride, and the pay follows the hours and the type ratings you accumulate afterward. Overall employment of airline and commercial pilots is projected to grow 4 percent from 2024 to 2034, about as fast as the average for all occupations, with roughly 18,200 openings a year driven mostly by retirements and transfers. The demand pattern favours pilots who build hours efficiently and move toward the airline seats, which is why the practical advice around the CAX is to pair passing the knowledge test with an efficient time-building plan rather than treating the written as an end in itself.',
    rows: [
      { label: 'Median annual wage, commercial pilots', value: '$122,670', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 53-2012)' },
      { label: 'Reference: airline pilots, copilots, and flight engineers', value: '$226,600', note: 'Same OOH page, May 2024 — the commercial figure is the relevant one for a new CAX holder' },
      { label: 'Lowest 10 percent, commercial pilots', value: 'less than $56,260', note: 'BLS OEWS May 2023 release; May 2024 percentile cut points are not published separately for 53-2012' },
      { label: 'Highest 10 percent, commercial pilots', value: 'more than $168,700', note: 'BLS OEWS May 2023 release; driven by charter, air-ambulance and corporate roles' },
      { label: 'Employment, airline and commercial pilots combined, 2024', value: '155,400 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~18,200 per year', note: 'BLS OOH Job Outlook, 2024-34 — mostly replacement need' }
    ],
    growth: '4% projected change 2024-34 (about as fast as average), with ~18,200 openings a year dominated by retirements; earnings climb steeply with flight hours, instrument currency and turbine time, not with the certificate itself',
    source: {
      label: 'BLS Occupational Outlook Handbook — Airline and Commercial Pilots',
      url: 'https://www.bls.gov/ooh/transportation-and-material-moving/airline-and-commercial-pilots.htm'
    }
  },

  passRate: {
    headline: 'The FAA publishes no pass rate for the CAX — what it publishes is the passing grade (70%) and the test format (100 questions, 2.5 hours)',
    summary:
      'There is no published pass rate for the FAA Commercial Pilot Airplane (CAX) knowledge test, because the FAA does not release aggregate pass statistics for any airman knowledge test, and we are not going to supply an invented one. What the FAA does publish — in the Airman Knowledge Testing Matrix, revised 10/22/25, which is the authoritative current document — is the complete test specification: test code CAX, 100 questions, minimum age 16, 2.5 hours allotted, and a passing grade of 70 percent. That 70 percent is a raw percentage, not a scaled score: each question is worth one point, there is no penalty for guessing, and you need at least 70 correct answers out of 100. Older references that list 3.0 hours for the CAX predate the current matrix, and the 2.5-hour figure above is the one printed on the FAA page as of this review. Two surrounding policies matter more to a candidate than any pass statistic. First, the retest rule under 14 CFR § 61.49: a failed applicant must normally wait 30 days before retesting, but that waiting period is waived when an authorized instructor signs a statement that they have given additional instruction in the subjects failed and considers the applicant ready. In practice that means a genuinely prepared candidate is rarely blocked by the clock — the endorsement requirement is the real control on careless retakes. Second, the score report itself: the printed Airman Knowledge Test Report (AKTR) carries your score plus the ACS knowledge-area codes for every question you missed, and the designated pilot examiner is expected to probe those same areas in the oral portion of the checkride. A 70 percent pass therefore does not mean you are done learning — the oral will revisit everything below the threshold — which is why the practical target for the written is well above 70, and why the pass-rate question is best redirected to the only number the FAA publishes: the 70 percent passing grade.',
    source: {
      label: 'FAA Airman Knowledge Testing Matrix (revised 10/22/25)',
      url: 'https://www.faa.gov/training_testing/testing/testing_matrix/'
    },
    caveat: 'The FAA publishes no pass-rate statistics for airman knowledge tests. The only official figures are the passing grade (70 percent), the 100-question count and the 2.5-hour time allotment shown in the current testing matrix, all of which we verified on the FAA page.'
  },

  studyPlan: {
    summary:
      'Plan 6 to 10 weeks for the CAX knowledge test, working from the premise that it is a gate, not the destination: the certificate it feeds requires a private pilot certificate and 250 hours of flight time for the airplane category before the commercial checkride, so the written should be timed to stay valid — the knowledge test report is good for 24 calendar months — rather than taken years before the flight experience is complete. The test itself is computer-delivered at PSI testing centres, presents 100 questions in 2.5 hours, and draws every item from the Airman Certification Standards, FAA-S-ACS-7A, the current Commercial Pilot Airplane ACS; the knowledge column of each ACS task defines exactly what can be asked. Start with the FAA\'s own material because it is free and authoritative: the Pilot\'s Handbook of Aeronautical Knowledge, the Airplane Flying Handbook, and the Commercial Pilot Airplane ACS document itself. Work the ground school in the order the ACS organizes it — regulations and commercial pilot privileges, aerodynamics and performance (with particular weight on the complex-aircraft and performance-chart questions that are absent from the private written), weather, weight and balance, cross-country planning, and aeromedical factors — and then switch to a current question bank for two to three weeks of repetition, because the FAA written rewards pattern recognition of the fixed question bank even while it tests understanding of the underlying concepts. Aim to score 85 percent or better on consecutive practice exams before scheduling, not the 70 percent minimum, because the DPE will probe every ACS area you missed on the report. The one scheduling constraint is the endorsement: under § 61.35 you must present either a graduation certificate from an FAA-approved ground school or a written statement from an authorized instructor that you completed a ground training or home-study course and are prepared, so line that up before booking the seat. Budget roughly $175 for the knowledge test itself, plus the ground-school course or book and question-bank costs, and remember the real money in this certification is the flight time and the checkride, not the written.',
    totalHours: '40-70 hours of ground study over 6-10 weeks',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Regulations, privileges, and the ACS structure',
        tasks: [
          'Download and read the Commercial Pilot Airplane ACS (FAA-S-ACS-7A) cover to cover — the knowledge column is the test blueprint',
          'Study 14 CFR Parts 61, 91 and the commercial-relevant sections of 119 and 135, focusing on commercial privileges and limitations',
          'Take a full-length practice exam cold to establish your baseline and weak ACS codes',
          'Set up the free FAA handbooks as your reference layer'
        ],
        hours: '6-8 hrs/week'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Aerodynamics, aircraft systems, and performance',
        tasks: [
          'Study the aerodynamics chapters of the Pilot\'s Handbook of Aeronautical Knowledge — this is where commercial written items get harder than the private written',
          'Learn complex-aircraft systems: retractable gear, constant-speed propellers, manifold pressure, and their failure modes',
          'Drill performance charts, takeoff and landing distance, density altitude, and weight and balance calculations',
          'Work every calculation problem twice — once for understanding, once for speed'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Weather, navigation, and cross-country planning',
        tasks: [
          'Study weather theory and services, including how to read the aviation weather products used on the test',
          'Practise cross-country flight planning items: time, fuel, and checkpoints for a commercial-style trip',
          'Cover airspace and ATC procedures at the depth the ACS requires for commercial operations',
          'Begin timed practice-exam sessions on the sections you have completed'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 7-8',
        focus: 'Question-bank mastery and weak-code closure',
        tasks: [
          'Work the question bank daily, logging every miss against its ACS code',
          'Return to the handbook chapters behind any code you miss more than twice',
          'Take full-length timed practice exams; hold yourself to 85% or better before scheduling',
          'Memorise the fixed facts (weather minimums, oxygen and equipment requirements, currency rules) that recur verbatim'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Final week',
        focus: 'Endorsement, scheduling, and taper',
        tasks: [
          'Obtain the required § 61.35 instructor endorsement or ground-school graduation certificate',
          'Schedule the test at a PSI centre; confirm the fee and the exact start time',
          'Two more timed practice exams scored 85%+; review every miss',
          'One light review day, then rest — the written rewards a fresh mind over a crammed one'
        ],
        hours: '6-8 hrs'
      }
    ],
    variants: [
      { label: 'Already flying and current in the private certificate', detail: 'Four to six weeks. Your experience covers weather, regulations and navigation; spend the recovered time on the complex-aircraft systems and performance-chart items that are new at the commercial level, and on getting practice scores comfortably above 85%.' },
      { label: 'Long gap since the private written', detail: 'Ten to twelve weeks at 6 hrs/week. Add a full week of ground refresher on aerodynamics and weather before touching the question bank, and treat the FAA handbooks as the primary source rather than a supplement.' },
      { label: 'Working a full-time job outside aviation', detail: 'Ten to twelve weeks at 5-6 hrs/week. Keep the bank work short and daily rather than weekend marathons; the repetition that drives written scores degrades badly when compressed.' }
    ]
  },

  prepStrategies: {
    summary:
      'The strategy that reliably moves a CAX score is "learn the ACS, drill the bank, and aim far above the 70 percent minimum," because the FAA written rewards pattern recognition of a fixed question bank while the checkride that follows will probe every weak code on your score report. The single biggest error is scheduling the test at 70 percent readiness — the oral portion of the commercial checkride revisits everything you missed, so a bare pass simply moves the pain into the cockpit where it is more expensive to fix. The structural facts that should drive every decision are the ones the FAA actually publishes: the test is 100 questions in 2.5 hours under the current Airman Knowledge Testing Matrix, each question is worth exactly one point, there is no penalty for guessing, and the Airman Knowledge Test Report prints the ACS knowledge-area codes for every item you missed — which the designated pilot examiner is expected to use as a probe list in the oral. That report is the most useful artefact in the entire process: on a pass it is your checkride study list, and on a fail it is your retest plan, because the FAA\'s 30-day retest wait is waived when an instructor signs a statement of additional instruction in the failed subjects, and the report tells you exactly which subjects to fix. The highest-yield study order is to read the Commercial Pilot Airplane ACS (FAA-S-ACS-7A) first, then the free FAA handbooks for depth, then a current question bank for the repetition the written rewards, and to hold practice scores at 85 percent or better for at least two consecutive full-length timed exams before booking. The endorsement logistics matter more than candidates expect: under 14 CFR 61.35 you cannot sit without either a ground-school graduation certificate or a signed instructor statement, so line that up early. Finally, plan the timing against the 24-month validity of the knowledge test report and the 250-hour flight-time requirement of 61.129, so the written does not expire while you are still building hours — the single most expensive scheduling error in this certification, and the one this desk sees most often.',
    items: [
      {
        title: 'Treat the ACS as the test blueprint, not a suggestion',
        detail: 'Every CAX question traces to the knowledge column of the Commercial Pilot Airplane ACS, FAA-S-ACS-7A. Read it before any other material, and when a question bank item confuses you, go back to the specific ACS learning statement it tests. Candidates who study from a commercial course alone are often surprised by items the course skipped because the author assumed the ACS section was obvious.'
      },
      {
        title: 'Score 85%+ on consecutive practice exams before booking',
        detail: 'The passing grade is 70 percent, but the Airman Knowledge Test Report prints the ACS codes for everything you missed, and the designated pilot examiner is required to probe those areas in the oral. A 78 percent pass can buy you a 2-to-3-hour oral dominated by your weak spots. Hold yourself to 85 percent or better on at least two full-length timed exams, then book.'
      },
      {
        title: 'Memorise the recurring fixed facts',
        detail: 'Commercial pilot privileges and limitations, oxygen requirements, equipment and instrument requirements, weather minimums, and currency rules appear in near-identical form again and again. These are free points if you drill them, and the exact wording matters — the FAA test is notorious for distractors that are true statements except for one word.'
      },
      {
        title: 'Learn the calculation items for understanding, then for speed',
        detail: 'Weight and balance and performance items are the slow ones. Work each calculation slowly the first time, then repeat the identical problem under a stopwatch until it is reflex. The 2.5-hour clock for 100 questions is generous on average, but only if the computations do not eat it; candidates who have never timed a dense calculation set routinely run out of minutes on the last twenty questions.'
      },
      {
        title: 'Get your § 61.35 endorsement before scheduling',
        detail: 'You cannot sit the test without either a graduation certificate from an FAA-approved ground school or a signed statement from an authorized instructor certifying you completed a ground training or home-study course and are prepared. Flight instructors are used to signing these, but only after they are confident you are ready — ask early, and ask your instructor to quiz you first, which doubles as a free readiness check.'
      },
      {
        title: 'Schedule the written to match your checkride timeline',
        detail: 'The knowledge test report is valid for 24 calendar months, and the CAX is a prerequisite for the commercial checkride, which itself requires the 250 hours of flight time under § 61.129. Time the written for when the flight experience will be complete, not for when the ground course ends, so you do not pay for a retake that an early pass would have forced.'
      }
    ]
  },

  resourceComparison: {
    summary:
      'The buying decision here is unusual because the single most authoritative source is free: the FAA publishes the Pilot\'s Handbook of Aeronautical Knowledge, the Airplane Flying Handbook, and the Commercial Pilot Airplane ACS, and every test question traces to the ACS, so a candidate can build the entire study foundation without spending anything. The money should go to a current question bank and, if you are not using a flight school\'s ground course, a structured ground-school course — and the critical check before any purchase is currency, because the FAA rotates the question bank and updates the ACS by edition, so a book that has not been updated in the last year or two will teach you retired questions and wrong emphases, which is the most common way candidates waste money in this certification. Prices below are list prices in USD checked at the time of writing: the FAA knowledge test itself is about $175 at a PSI centre, ground-school courses run roughly $200-500, current question banks run about $40-120, CFI ground sessions run about $50-80 an hour, and the checkride fee charged by the designated pilot examiner is separate and substantially larger than everything on this table combined. The comparison that matters most is the value-per-hour one: the free FAA handbooks and the free ACS deliver the majority of the score, the question bank delivers the repetition that converts knowledge into a written pass, and the paid course is mainly a convenience for candidates who need structure rather than a necessity. Budget for the $175 test fee and a realistic retest possibility rather than the full course stack, and remember that the real money in the commercial certification sits in the flight time and the checkride — a candidate should spend on hours in the aircraft before spending on premium prep bundles.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'FAA handbooks (PHAK, AFH) and the Commercial ACS', values: ['Free', 'Official FAA PDFs (free) or print', 'The authoritative study layer every candidate should read first'] },
      { label: 'FAA knowledge test at a PSI centre', values: ['~$175', 'Computer-based test, 100 questions, 2.5 hrs', 'The exam itself — required'] },
      { label: 'Flight-school or online ground school (e.g. Sporty\'s, King Schools, ASA)', values: ['~$200-500', 'Video + written course', 'Structured coverage of every ACS area, especially for self-study students'] },
      { label: 'Current question bank (e.g. ASA Prepware, Sheppard Air)', values: ['~$40-120', 'Desktop/mobile question bank', 'The repetition engine — two to three weeks of daily drilling'] },
      { label: 'Practice exams', values: ['Included in most banks', 'Timed full-length simulations', 'Readiness calibration against the 85% target'] },
      { label: 'CFI ground sessions', values: ['~$50-80 per hour', 'One-on-one', 'Targeted weak-code closure and the § 61.35 endorsement'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax; FAA test fees and question-bank prices change, and DPE checkride fees are set by the examiner. Confirm currency of any book or bank against the current ACS edition before buying. We do not rank by commission.'
  },

  commonMistakes: {
    summary:
      'The mistakes that cost CAX candidates fall into two families: scheduling errors, which are entirely avoidable, and study errors, which come from treating a fixed question bank as if it were a reasoning test. The most expensive single error is taking the written years before the flight time is complete and then watching the 24-month validity expire, which converts one $175 test into two and quietly resets the checkride timeline. The most common score-killer is memorising the bank without the underlying concepts, which produces a pass in the low 70s and a brutal oral exam — because the Airman Knowledge Test Report prints the ACS codes for everything you missed and the designated pilot examiner is required to probe exactly those areas, so a bare pass does not hide weak knowledge, it itemises it for the examiner. The third pattern is the version error: studying an outdated book or question bank that was current for an earlier ACS edition or an older bank rotation, which wastes the study hours entirely and trains the wrong emphasis. The fourth is logistical — failing to line up the 61.35 endorsement or the PSI booking until the last minute, or discovering an ID-name mismatch at check-in, all of which forfeit the seat and the fee. Each of these errors shares one root cause: treating the written as a test to be passed rather than as the first gate of a certification whose later costs — the oral and the checkride — are far higher than the $175 written. The correct posture is to treat the written as cheap insurance on an expensive process, to invest the study hours in the concepts the ACS requires rather than the patterns the bank rewards, and to schedule the test against the flight-hour plan so nothing expires. Candidates who adopt that posture are the ones who walk into the oral with a score report that has nothing embarrassing on it, and who treat the written pass as the solid foundation of the checkride rather than the last time they study aviation theory.',
    items: [
      {
        mistake: 'Taking the CAX before the flight-time plan is realistic',
        fix: 'The knowledge test report is valid for 24 calendar months and the commercial checkride needs 250 hours under § 61.129. If you cannot finish that flight time inside two years, the written expires and you pay for it again. Plan the written to land roughly 2-4 months before checkride readiness, not at the end of ground school.'
      },
      {
        mistake: 'Scheduling at 70 percent readiness',
        fix: 'A 70 percent pass is a pass, but the score report prints the ACS codes for every area you missed and the DPE probes exactly those areas in the oral. Aim for 85 percent or better on two consecutive full-length practice exams before booking; the extra three weeks of drilling are cheaper than a two-hour oral spent defending gaps.'
      },
      {
        mistake: 'Studying an outdated book or question bank',
        fix: 'The FAA rotates the question bank and updates the ACS by edition, and third-party material lags behind. Confirm the Commercial Pilot Airplane ACS edition (FAA-S-ACS-7A as of this review) and buy material published or updated within the last year. Old banks teach retired questions and missing emphasis — check the publication date on the box before the price.'
      },
      {
        mistake: 'Memorising answers instead of the underlying systems',
        fix: 'The bank is finite and the questions recur, but the ACS is the blueprint and the oral will probe the concepts behind the answers. When you miss an item, read the handbook chapter behind its ACS code before re-testing the item; candidates who drill the bank alone score in the low 70s and then face a lengthy oral on subjects they only recognise, not understand.'
      },
      {
        mistake: 'Skipping the flight-hour and endorsement logistics until the last minute',
        fix: 'You cannot sit the test without a § 61.35 endorsement — a ground-school graduation certificate or a signed instructor statement — and the only authorised delivery is a PSI testing centre. Ask your instructor for the endorsement early, confirm the nearest PSI centre accepts the test and has seats, and verify your full legal name matches the ID you will present. The FAA treats ID mismatches as a lost seat.'
      }
    ]
  },

  questionTypes: {
    summary:
      'The CAX is a computer-delivered, closed-book test of 100 multiple-choice questions with exactly three answer choices each, allotted 2.5 hours under the current FAA testing matrix, and scored at 70 percent correct with no penalty for guessing. Every question traces to the knowledge column of the Commercial Pilot Airplane ACS (FAA-S-ACS-7A), and the score report maps each miss to its ACS code. The items break into three practical families: direct-knowledge questions that test a fixed regulation, weather minimum, or equipment requirement; calculation questions that demand weight-and-balance, performance, or time-and-fuel arithmetic (often with an E6-B or CX-3 flight computer); and scenario questions that describe a flight situation and ask for the correct decision or next action. The direct-knowledge items are the free points and should be answered briskly; the calculations are the time sinks and should be flagged and worked deliberately; the scenario items reward having a real decision-making framework rather than a memorised rule. Because every question is equally weighted at one point, a candidate who rushes the last twenty questions to protect time on the first ten has made an arithmetic error: 70 correct answers out of 100 is the pass line, and an unanswered question scores identically to a wrong one, so the discipline is to leave nothing blank. The practical pacing target is roughly one minute per question with a reserve for the calculation items, and the report you leave with — the AKTR with its ACS codes — is the single most useful study artefact if you must retake, because it tells you exactly which learning statements to repair.',
    types: [
      { name: 'Direct-knowledge multiple choice', share: 'The bulk of the paper', detail: 'A fixed fact — a regulation, weather minimum, equipment requirement, or privilege — with two true-but-wrong distractors. Distractors are commonly real statements altered by a single word, so exact phrasing matters.' },
      { name: 'Calculation items', share: 'A meaningful minority', detail: 'Weight and balance, density altitude, takeoff and landing distance, fuel planning, and time-speed-distance. Each is worth one point like everything else, but consumes several minutes, so they drive pacing more than any other item type.' },
      { name: 'Scenario-based items', share: 'Present across the paper', detail: 'A described flight situation — a weather report, an aircraft discrepancy, an airspace question — asking for the correct decision or next action. These reward a systematic ADM framework over pattern-matching.' }
    ],
    samples: [
      {
        prompt: 'A commercial pilot is asked to fly a charter and discovers the flight would exceed the aircraft\'s maximum certificated takeoff weight unless one bag is left behind. Under 14 CFR Part 61, which of the following is correct regarding commercial pilot privileges and limitations?',
        options: [
          'A. The pilot may accept the flight and compute a new weight and balance en route',
          'B. The pilot must decline the flight or arrange for the load to be reduced',
          'C. The pilot may carry the load if a copilot is aboard to share responsibility',
          'D. The pilot may accept the flight if the customer signs a waiver'
        ],
        answer: 'B',
        explanation: 'A commercial pilot must operate within the aircraft\'s limitations, including weight and balance; the privilege to fly for compensation does not extend to exceeding certificated limits, so the correct action is to refuse or get the load reduced. A is wrong because weight and balance is computed before flight, not "en route" — the phrasing encodes the trap. C invents a privilege that does not exist in the regulations. D is wrong because a customer waiver cannot override an aircraft operating limitation.'
      },
      {
        prompt: 'During the oral portion of the commercial checkride, the examiner asks about the pilot\'s obligations regarding the Airman Knowledge Test Report. Which statement is correct?',
        options: [
          'A. The report must be surrendered to the examiner at the end of the oral',
          'B. The report is valid for 24 calendar months and must be presented to the examiner for the practical test',
          'C. The report is valid indefinitely once a passing grade is achieved',
          'D. The report may be renewed by retaking only the failed subject areas'
        ],
        answer: 'B',
        explanation: 'A passing Airman Knowledge Test Report is valid for 24 calendar months from the date of the test and must be presented to the designated pilot examiner to take the practical test. A is wrong — you present it, you do not surrender it. C contradicts the 24-month rule. D is wrong because the FAA does not offer subject-area retakes; you retake the entire test.'
      },
      {
        prompt: 'A pilot must meet the flight-time requirements of § 61.129 before the commercial practical test. Which requirement is correct for the airplane category?',
        options: [
          'A. At least 150 hours of total flight time, including 50 hours of solo',
          'B. At least 250 hours of flight time, including 100 hours of pilot-in-command time and 50 hours of cross-country',
          'C. At least 500 hours of total flight time, no cross-country requirement',
          'D. At least 100 hours of total flight time, all dual instruction'
        ],
        answer: 'B',
        explanation: 'For the airplane category, § 61.129 requires at least 250 hours of flight time that includes 100 hours of pilot-in-command time and 50 hours of cross-country flight (among other components). A understates the total. C overstates it and drops the cross-country requirement. D is wrong both in total and in the dual-only restriction — the regulation requires substantial pilot-in-command and solo experience.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      'The CAX is a 2.5-hour, 100-question computer test taken at a PSI testing centre, and the entire morning is governed by one document — the FAA Airman Knowledge Testing Matrix — and one prerequisite you must already hold: the § 61.35 endorsement on your application, either a ground-school graduation certificate or a signed instructor statement. The centre check-in follows the standard pattern: photo identification matching your legal name, an electronic signature, and a search of pockets and personal items, which go into a locker. At the workstation you get an erasable noteboard and a calculator in software or hardware form depending on the centre, and you work through the 100 three-option questions with the clock running; there is no scheduled break, and the timer does not stop. Two habits make the session run well. First, write down the fixed facts you drilled before the first question — oxygen and equipment requirements, weather minimums, and the recurring regulation numbers — so they are on the noteboard rather than competing for working memory. Second, use the flag-and-return feature aggressively: answer the direct-knowledge items immediately, flag every calculation for a second pass, and never leave anything blank, because an unanswered question scores exactly like a wrong one and there is no penalty for guessing. Your score is computed the moment you submit, and the proctor prints the Airman Knowledge Test Report with your percentage and the ACS codes for every question you missed; keep that report, because it is both your proof of currency for the checkride and your study list if you must retake. If you pass, hold the report — it is valid for 24 calendar months — and book the practical test while the material is fresh. If you fail below 70, you are blocked by the 30-day retest rule unless your instructor signs the additional-instruction statement, so go straight from the centre to your CFI with the AKTR in hand and target exactly the codes on it.',
    bring: [
      'Government-issued photo ID with your legal name exactly as registered',
      'The § 61.35 endorsement — ground-school graduation certificate or the signed instructor statement, in whatever form the testing centre requires',
      'A second form of identification if your centre requests it (check your confirmation)',
      'The exam confirmation with the test code CAX, the date, and the centre address',
      'A note of your flight-hours progress so you can confirm the 24-month validity window still matches your checkride plan'
    ],
    leave: [
      'Phones, smartwatches, earbuds and all electronics — stored in the centre locker',
      'Notes, books, and question-bank printouts — the test is closed-book',
      'Your own paper and pens; the centre provides an erasable noteboard and the software calculator',
      'Bags, coats, and food or drink beyond what the centre allows',
      'Anyone accompanying you — PSI centres do not allow guests in the testing area'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your registration, the test code (CAX), the centre address, and that your ID name matches your registration exactly. Mismatches are the classic cause of a forfeited seat.' },
      { time: '24 hours before', detail: 'Do a light review of the fixed facts and one timed practice session if you want it; get a full night of sleep. The written rewards a fresh mind.' },
      { time: '30 minutes before', detail: 'Arrive with your ID, endorsement documentation, and confirmation. Check-in includes an electronic signature and a personal-items search.' },
      { time: 'At the workstation', detail: 'Write the fixed facts you drilled onto the noteboard before the first question, then start the timer. 100 questions, three options each, 2.5 hours.' },
      { time: 'First pass', detail: 'Answer the direct-knowledge items briskly and flag the calculations. Do not sit on a hard item; the flag lets you return.' },
      { time: 'Second pass', detail: 'Work every flagged calculation carefully with the time you saved. Then sweep any remaining flagged items and answer everything — blank answers score as wrong.' },
      { time: 'After submit', detail: 'Your score appears immediately and the proctor prints the AKTR with your percentage and the ACS codes of every miss. Keep it for the checkride or the retest.' }
    ],
    rules: [
      'Passing grade is 70 percent — at least 70 of 100 correct — with no penalty for guessing; unanswered questions score as incorrect.',
      'The test is closed-book; only the on-screen supplement, the erasable noteboard, and the provided calculator are available.',
      'No scheduled break; the clock runs continuously for the full 2.5 hours.',
      'A § 61.35 endorsement is required to sit: a ground-school graduation certificate or an instructor\'s signed statement of readiness.',
      'After a failure, retesting normally requires a 30-day wait unless an authorized instructor signs a statement of additional instruction in the failed subjects.',
      'The AKTR is valid for 24 calendar months from the test date and must be presented to take the practical test.'
    ],
    afterwards:
      'Your result and percentage appear on screen the instant you submit, and the proctor hands you the Airman Knowledge Test Report, which prints the ACS knowledge-area codes for every question you missed. On a pass, keep that report safe and valid — it must be presented at the checkride and is good for 24 calendar months — and book the practical test while the material is fresh, because the examiner will re-probe the weak codes on your report during the oral. On a fail, do not simply re-book in 30 days: take the AKTR to your instructor, who can sign the additional-instruction statement that waives the waiting period, and study precisely the codes on the report, retaking a full-length practice exam until you are back above the 85 percent target. Either way, treat the written as the first gate of a flight-hour-building career: the certificate it unlocks pays off through the hours, instrument currency and turbine time that follow, and the 2.5 hours at the computer are the cheapest test of the entire pathway.'
  }
};

export default data;
