// Depth content for: nclex-pn
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Nursing & healthcare certifications desk',
    bio: 'This guide is compiled and maintained by our nursing desk. The NCLEX-PN is administered by NCSBN (the National Council of State Boards of Nursing) through Pearson VUE, and NCSBN publishes first-time pass rates by education type in its quarterly reports — the closest thing to an official pass-rate figure, which we cite with the caveat that it is a cohort statistic, not a per-candidate prediction. Exam structure, fees and registration come from NCSBN\'s official pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam structure, item count rules, passing-score methodology, fees and registration were taken from the official NCSBN NCLEX pages.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$62,340 median for licensed practical and licensed vocational nurses (BLS, May 2024)',
    summary:
      'The NCLEX-PN licenses the practical-nursing workforce, so the directly relevant occupation is Licensed Practical and Licensed Vocational Nurses, SOC 29-2061. That occupation had a May 2024 median annual wage of $62,340, with the distribution shaped by setting: LPNs/LVNs in skilled nursing facilities, home health and long-term care dominate the occupation, while those in hospitals and outpatient settings, and those working evening or weekend shifts with differentials, tend to sit higher. The LPN/LVN role sits between a certified nursing assistant and a registered nurse: the licence authorises basic medical care under the supervision of an RN or physician, and the wage reflects that position in the nursing hierarchy — below the roughly $86,000 median of registered nurses, but a clear step above aide-level work. BLS counted about 628,000 LPN/LVN jobs and projects a small employment change through 2034, with the majority of openings coming from replacement need as the existing workforce ages — a flat but steady market where the licence is the absolute entry requirement. The practical reading for an NCLEX-PN candidate is that the exam is a gate, not a lever: it authorises the role, and the wage outcome is then set by setting, shift, geography and experience. For candidates weighing LPN versus RN, the honest framing is that the LPN route is faster and cheaper to entry, with a lower ceiling — and many LPNs later bridge to RN, at which point the same study habits carry forward.',
    rows: [
      { label: 'Median annual wage, licensed practical and licensed vocational nurses', value: '$62,340', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Employment, 2024', value: '~628,000 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Entry requirement', value: 'Postsecondary nondegree award (practical-nursing program) + NCLEX-PN licence', note: 'BLS OOH, May 2024' }
    ],
    growth: 'BLS projects a small employment change for LPN/LVNs 2024-34, with most openings from replacement need. The licence is the entry requirement; pay is set by setting, shift, geography and experience.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Licensed Practical and Licensed Vocational Nurses',
      url: 'https://www.bls.gov/ooh/healthcare/licensed-practical-and-licensed-vocational-nurses.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'NCSBN reports cohort pass rates — the exam itself is scored to a fixed standard, not a curve',
    summary:
      'Unlike most vendors, NCSBN publishes pass-rate statistics: its quarterly reports give first-time pass rates by education type for NCLEX-PN, and the recent first-time rate for US-educated candidates has hovered around the high 80s to low 90s percent — the exact figure varies by quarter and education type, so we cite it as a range and point you to the latest report rather than pinning a stale number. Two things matter about that statistic. First, it is a cohort figure, not a per-candidate probability: it describes the share of first-time US-educated test-takers who passed in a given period, and your individual outcome depends on your preparation, not on the cohort. Second, and more important, the NCLEX is not graded on a curve — NCSBN sets a fixed passing standard, and the computer-adaptive test (CAT) presents items tailored to your ability and stops when it can determine, at the 95 percent confidence level, whether you are above or below that standard. That is why you cannot reliably predict your result from a raw percentage of questions answered: a candidate who answers 60 percent of a hard, high-level item set may pass, while one who answers 75 percent of an easy set may fail. The practical implications are: aim to perform above the passing standard across the client-needs categories rather than chasing a percentage, treat every item seriously (CAT punishes careless misses early), and know that a candidate who is performing well may see a longer test, not a shorter one.',
    source: {
      label: 'NCSBN — NCLEX-PN statistics and exam information',
      url: 'https://www.ncsbn.org/exams/statistics.page'
    },
    caveat:
      'NCSBN publishes first-time pass rates by education type in its quarterly reports (recent NCLEX-PN first-time US-educated rates have run in the high 80s-low 90s percent range; confirm the latest figure at ncsbn.org). The exam is scored to a fixed passing standard via computer-adaptive testing — not a curve and not a percentage of questions.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The NCLEX-PN is a computer-adaptive test (CAT) with a variable item count: NCSBN states the exam is 5 hours maximum, and the number of questions a candidate receives depends on performance — candidates who are clearly passing or failing may see fewer items, while those near the standard see more, with the maximum around 205 items. Every candidate must complete the minimum number of items to receive a result, and the exam can stop early when NCSBN is confident of the outcome. The content follows the test plan\'s four major client-needs categories: Safe and Effective Care Environment, Health Promotion and Maintenance, Psychosocial Integrity, and Physiological Integrity — with Physiological Integrity carrying the largest share, and within it the sub-categories of basic care and comfort, pharmacological therapies, and reduction of risk. The plan below runs ten weeks at roughly 10-12 hours a week, with the first six weeks building content by category and the final four weeks on adaptive-style practice and stamina. Two structural facts shape the schedule. First, the exam is integrated: most items present a clinical situation and require you to prioritise or make a nursing judgement, so practising scenario-based questions matters more than memorising facts. Second, the adaptive format means practice on a CAT-style platform is not optional — you need to rehearse the experience of questions getting harder when you are doing well, and the discipline of not panicking as the length grows.',
    totalHours: '110-140 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Diagnostic and test-plan map',
        tasks: [
          'Take a full-length NCLEX-PN practice exam to establish a baseline across the four client-needs categories',
          'Read the current NCLEX-PN test plan on the NCSBN site and write the category percentages down',
          'Confirm your state\'s registration and the ATT (Authorization to Test) process with your nursing board',
          'Decide the category allocation: your two weakest categories get roughly 60 percent of study time'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Weeks 2-4',
        focus: 'Physiological Integrity (largest category)',
        tasks: [
          'Basic care and comfort: mobility, elimination, nutrition, and comfort measures',
          'Pharmacological therapies: drug classifications, calculations, and safe administration',
          'Reduction of risk: safety, infection control, and emergency response',
          'Practise scenario items in this category daily — physiology is where the volume sits'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Safe and Effective Care + Health Promotion',
        tasks: [
          'Safe and Effective Care Environment: management of care, safety and infection control, and the nurse\'s legal/ethical duties',
          'Health Promotion and Maintenance: growth and development, prevention, and client education',
          'Drill the delegation and prioritisation items — who to assign, what to do first',
          'Tag every miss to a category and re-drill the tagged areas'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Week 7',
        focus: 'Psychosocial Integrity',
        tasks: [
          'Mental health concepts, coping and adaptation, and therapeutic communication',
          'Crisis intervention and the communication items — therapeutic responses are heavily tested',
          'Practise choosing the therapeutic response over the automatic one',
          'Re-test your original weakest category to confirm the repair took'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Weeks 8-9',
        focus: 'Adaptive-style practice and stamina',
        tasks: [
          'Full-length CAT-style practice exams on a platform that mirrors the adaptive format',
          'Three full simulated sittings, including the stamina of a long, hard test',
          'Re-drill the categories that cost points in the simulations',
          'Practise the prioritisation items until the "first, best, safest" logic is automatic'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Week 10',
        focus: 'Taper and logistics',
        tasks: [
          'Light review of category checklists and the drug-calculation formulas',
          'Confirm your ATT is valid, your ID name matches your registration, and your Pearson VUE seat',
          'Rehearse the CAT experience one last time with a timed half-exam',
          'One quiet day before the exam'
        ],
        hours: '8-10 hrs'
      }
    ],
    variants: [
      { label: 'Practical-nursing program graduate taking the exam soon after', detail: 'Six to seven weeks at 10-12 hrs/week. Your program covered the content; spend the time on CAT-style practice and the prioritisation items, which programs under-teach.' },
      { label: 'LPN bridging toward RN', detail: 'Treat the NCLEX-PN as a checkpoint, not a finish line: pass it with the same study discipline you will need for the NCLEX-RN, and start looking at LPN-to-RN bridge programs early.' },
      { label: 'Returning candidate, years since nursing school', detail: 'Twelve to fourteen weeks at 8-10 hrs/week. Rebuild the pharmacology and prioritisation base first, then the CAT stamina — the content is familiar but the adaptive format is not.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The NCLEX-PN rewards clinical judgement and prioritisation, not memorised facts, and the computer-adaptive format punishes careless early misses while rewarding consistent performance above the passing standard. The strategies below are ordered by what actually moves a candidate above that standard.',
    items: [
      {
        title: 'Practise the prioritisation logic daily',
        detail: 'A large share of NCLEX items ask what to do first, best or safest — airway, breathing, circulation; unstable before stable; acute before chronic. Drill the prioritisation frameworks until they are automatic, because the exam presents them constantly and the "first" answer is usually the one a nurse would act on immediately, not the thorough one.'
      },
      {
        title: 'Rehearse the adaptive experience, not just the content',
        detail: 'The CAT presents items tailored to your ability and can grow longer when you are performing well — candidates who are clearly above the standard may see more hard items, which is a good sign, not a bad one. Practise on a CAT-style platform so the experience of a lengthening, harder test does not panic you into careless answers.'
      },
      {
        title: 'Take every item seriously from the first minute',
        detail: 'CAT adapts to your performance continuously, so early careless misses steer the test toward easier items and a lower ceiling on your estimated ability. There is no "warm-up" section — the first items count as much as the last. Answer every item as if the result depends on it, because the adaptive algorithm behaves that way.'
      },
      {
        title: 'Master the therapeutic-communication items',
        detail: 'The psychosocial items test therapeutic communication heavily: the credited response is the one that acknowledges feelings, uses open-ended prompts, and avoids false reassurance, advice-giving or changing the subject. Practise choosing the therapeutic response over the automatic one — it is a distinct skill and a repeatable source of points.'
      },
      {
        title: 'Do the pharmacology math until it is reflex',
        detail: 'Drug calculations are a repeatable source of points within the largest category. Work dosage, drip-rate and conversion problems until you can do them without the formula in front of you; the exam provides a calculator, but the method must be automatic under time pressure.'
      },
      {
        title: 'Use the question-review after practice to tag categories',
        detail: 'Every practice item should be tagged to a client-needs category. After two weeks the tag list shows your real weaknesses, and you stop guessing where to drill. The same discipline applies to the exam itself: you cannot review items during the test, so the tagging happens in practice.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The buying decision for NCLEX-PN prep is dominated by two things: a review course or book aligned to the current test plan, and a CAT-style question bank for adaptive practice. Because the exam is scenario-heavy and adaptive, the highest-value resources are those that simulate the item style and the adaptive experience, not encyclopedic textbooks.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NCLEX-PN registration (NCSBN) + state fees', values: ['~$200 NCSBN plus state board and processing fees', 'Online registration; Pearson VUE test centre', 'Required — register only with a valid ATT from your state board' ], },
      { label: 'NCLEX-PN Review (Kaplan / Saunders / Lippincott)', values: ['~$60-200 depending on resource', 'Print + digital review with practice banks', 'Structured content review mapped to the current test plan' ], },
      { label: 'CAT-style question bank (UWorld / NursePlus / BoardVitals)', values: ['~$50-150 for 1-3 months', 'Adaptive online question banks with rationales', 'The closest thing to the real adaptive experience; the highest-yield purchase' ], },
      { label: 'NCSBN\'s own practice exam', values: ['~$50', 'Official computer-adaptive practice', 'The most authentic format — NCSBN\'s own platform' ], },
      { label: 'Pharmacology and drug-calculation drill apps', values: ['Free to ~$20', 'Mobile drill sets', 'Repetition for the calculation and drug-classification items' ]
      }
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; NCSBN and state fees are set by those bodies and vary, so confirm the current figures. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'NCLEX-PN candidates fail on exam dynamics more often than on knowledge: they study facts instead of clinical judgement, never rehearse the adaptive format, and misread the early items as a warm-up. The six traps below are the recurring ones, and all are fixable within one study cycle.',
    items: [
      {
        mistake: 'Treating the first items as a warm-up',
        fix: 'The CAT adapts to your performance from the first item, so early careless misses steer the test toward easier items and a lower ability ceiling. Answer every item as if the result depends on it — there is no warm-up section on an adaptive exam.'
      },
      {
        mistake: 'Studying facts instead of prioritisation',
        fix: 'The exam tests clinical judgement: what to do first, best or safest, in a described situation. Candidates who memorise facts and never practise the prioritisation logic score on the recall items and lose the scenario majority. Drill the "first, best, safest" frameworks until they are automatic.'
      },
      {
        mistake: 'Never rehearsing the adaptive experience',
        fix: 'A candidate performing well may see a longer, harder test — which feels like failing but is not. Candidates who only practised fixed-length exams panic when the test lengthens. Practise on a CAT-style platform so the adaptive experience is familiar.'
      },
      {
        mistake: 'Ignoring the therapeutic-communication items',
        fix: 'The psychosocial items test therapeutic communication heavily, and the credited answer is the therapeutic one — acknowledging feelings, open-ended, non-judgemental. Practise choosing it over the automatic response; it is a repeatable source of points.'
      },
      {
        mistake: 'Chasing a percentage instead of the standard',
        fix: 'The NCLEX is scored to a fixed standard, not a percentage: a candidate answering hard, high-level items can pass with fewer correct answers than one answering an easy set. Stop aiming at "80 percent on practice" and aim instead at performing consistently above the passing standard across all categories.'
      },
      {
        mistake: 'Letting a lengthening test raise anxiety',
        fix: 'More items can mean the adaptive algorithm is narrowing toward a pass at a high level — a good sign. The failure mode is letting that anxiety produce careless answers. Rehearse the long-hard-test experience in practice so it is a familiar condition, not a shock.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The NCLEX-PN is a computer-adaptive test with a variable item count up to about 205 items and a 5-hour maximum, scored to a fixed passing standard using item-response theory. Most items are multiple choice with four options, but the exam includes alternate-format items — select-all-that-apply, ordered response, fill-in-the-blank calculations, and hot-spot items — so the format is not exclusively traditional multiple choice. Every item is written to one of the four client-needs categories, and most embed a clinical situation that asks you to prioritise, delegate, identify the next action, or select the therapeutic response. Because the test adapts, there is no fixed question count and no fixed difficulty: your item sequence reflects your performance. The practical implications for pacing and strategy: there is no per-item time budget you can rely on (the count is variable), so the discipline is steady, careful answering from the first item; alternate-format items such as select-all-that-apply are all-or-nothing, so read the stem\'s instruction carefully; and calculation items require exact numeric answers. Candidates who treat every item as scored, answer steadily, and trust the adaptive process perform best.',
    types: [
      { name: 'Multiple choice (four options)', share: 'The majority of items', detail: 'Clinical scenarios with four options, asking for the correct nursing action, priority, or interpretation. Distractors are plausible but wrong in priority or safety.' },
      { name: 'Select-all-that-apply', share: 'A recurring alternate format', detail: 'Choose all correct options; scoring is all-or-nothing. Common for delegation, precautions, and assessment findings.' },
      { name: 'Ordered response / drag-and-drop', share: 'A recurring alternate format', detail: 'Sequence steps correctly — wound care, emergency response, or procedure order. All-or-nothing.' },
      { name: 'Calculation and fill-in-the-blank', share: 'A minority of items', detail: 'Drug-dosage and drip-rate calculations requiring an exact numeric answer.' }
    ],
    samples: [
      {
        prompt: 'A nurse is caring for a client who begins to choke while eating. The client cannot speak, cough, or breathe. Which action should the nurse take first?',
        options: [
          'A. Call for the charge nurse',
          'B. Perform abdominal thrusts (Heimlich manoeuvre)',
          'C. Document the incident',
          'D. Offer the client water'
        ],
        answer: 'B',
        explanation: 'Complete airway obstruction — the client cannot speak, cough or breathe — requires immediate abdominal thrusts (B). A and C are important but secondary to the life-threatening obstruction; documentation happens after the emergency. D is dangerous and would worsen the obstruction. The item tests the prioritisation logic the exam rewards: airway and breathing first, always.'
      },
      {
        prompt: 'A client\'s prescription reads 250 mg of a medication available as 500 mg per 5 mL. How many millilitres should the nurse administer?',
        options: [
          'A. 1 mL',
          'B. 2.5 mL',
          'C. 5 mL',
          'D. 10 mL'
        ],
        answer: 'B',
        explanation: 'Using the ratio: 500 mg is to 5 mL as 250 mg is to x mL. Cross-multiplying gives 500x = 1,250, so x = 2.5 mL (B). A (1 mL) would deliver only 100 mg. C (5 mL) delivers the full 500 mg — double the prescribed dose. D (10 mL) is double the full dose. Calculation items require exact answers; a fill-in-the-blank version would require typing 2.5.'
      },
      {
        prompt: 'A client who is tearful says, "I just can\'t cope with all of this anymore." Which response is most therapeutic?',
        options: [
          'A. "Don\'t worry, everything will be fine."',
          'B. "It sounds like you are feeling overwhelmed right now."',
          'C. "Many people feel this way; you will get through it."',
          'D. "Let\'s talk about something more positive."'
        ],
        answer: 'B',
        explanation: 'The therapeutic response acknowledges and reflects the client\'s feeling using an open, non-judgemental statement (B). A offers false reassurance. C minimises the client\'s experience with a cliché. D changes the subject, which blocks communication. Therapeutic-communication items reward acknowledging feelings over fixing or dismissing them — a repeatable and testable skill.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published test plan, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The NCLEX-PN is delivered through Pearson VUE at a test centre, with a variable item count up to about 205 items and a 5-hour maximum including scheduled breaks — the exam includes an optional break after the first two hours and a second break after another hour, and the clock stops for scheduled breaks. The single most important administrative gate is the Authorization to Test (ATT): your state board of nursing issues it after your application is approved, it has an expiry date, and you cannot sit without it — so confirm the ATT is valid, your ID name matches your registration exactly, and your seat is booked before the exam. At the centre you are checked in, photographed, and seated; you cannot bring personal items into the testing room. Inside the exam, there is no fixed question count, so there is no per-item countdown to lean on — the discipline is steady, careful answering from the first item, trusting that the adaptive algorithm will stop when it is confident. Use the scheduled breaks to reset, especially the second half of the exam, where fatigue sets in. When you finish, you do not get an on-screen pass/fail: the result is reported by your state board, typically within a few business days, and you can usually check it via your nursing board or the quick-results service Pearson VUE offers.',
    bring: [
      'Two forms of identification, both unexpired, with your name matching your registration exactly',
      'One must be a government-issued photo ID',
      'Your ATT information and confirmation of your Pearson VUE booking',
      'A clear plan for the scheduled breaks — the clock stops for them'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — secured in a locker',
      'All notes, textbooks and printed study materials',
      'Personal calculators and scratch paper; the exam provides a calculator and noteboard',
      'Bags, coats, food and drink beyond what the centre permits'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your ATT is valid and unexpired, your ID name matches your registration, and your Pearson VUE seat. Rehearse one timed CAT-style half-exam.' },
      { time: '30 minutes before', detail: 'Arrive at the centre for check-in — photo, ID verification, lockers.' },
      { time: 'First portion', detail: 'Answer steadily and carefully; the CAT adapts from the first item, so there is no warm-up.' },
      { time: 'Scheduled breaks', detail: 'Use the optional breaks to reset — the clock stops for them, and fatigue is a real factor in the second half.' },
      { time: 'After submission', detail: 'No on-screen result; your state board reports the outcome, typically within a few business days.' }
    ],
    rules: [
      'Computer-adaptive: item count varies up to ~205 items, 5-hour maximum, scored to a fixed passing standard.',
      'Scheduled breaks are provided (after two hours, then after another hour); the clock stops for them, and it does not stop for unscheduled breaks.',
      'An Authorization to Test (ATT) from your state board is required to sit; it has an expiry date.',
      'Two forms of ID are required, one government-issued with photo, names matching your registration exactly.',
      'The result is not shown on screen; your state board reports it, typically within a few business days.'
    ],
    afterwards:
      'The NCLEX-PN result is not delivered on screen — your state board of nursing reports it, typically within a few business days, and Pearson VUE offers a quick-results service for candidates who want the answer sooner. On a pass, your licence is issued by your state board and you can begin practice; log the renewal cycle your state requires (commonly every two years, with continuing-education or practice requirements). On a fail, the path is structured: your state board specifies a retake schedule (commonly a waiting period of 45-90 days), each attempt is paid at full price, and you must retake the whole exam — there is no partial-credit carryover. Use the waiting period for targeted repair: NCSBN\'s candidate performance report shows your relative performance by client-needs category, which tells you exactly where to aim. The most common failure pattern is not knowledge but exam dynamics — careless early answers on the adaptive test, panic at a lengthening test, or neglecting the prioritisation and therapeutic-communication items. Each of those is fixable in one targeted cycle, and the same study discipline carries directly into the NCLEX-RN if you bridge to registered nursing later.'
  }
};

export default data;
