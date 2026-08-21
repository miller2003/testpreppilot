// Depth content for: pance
// See examDepth.mjs for the full schema. All figures verified 2026-08.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Healthcare & clinical practitioner certification desk',
    bio: 'This guide is compiled and maintained by our healthcare-certifications desk. The PANCE is owned and administered by the National Commission on Certification of Physician Assistants (NCCPA), and we track the exam by its published content blueprint and passing standard; the current blueprint and passing standard became effective 1 January 2025, and we state the dates as published. Exam structure (300 questions, five 60-question blocks), the fee, eligibility limits and the published pass-rate statistics come from NCCPA\u2019s own pages and its five-year pass-rate report, which reports first-time and repeat performance separately. The passing score is the scaled 350 threshold on the 200-800 scale as published by NCCPA. Wage figures come from the Bureau of Labor Statistics occupation Physician Assistants (SOC 29-1071), named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam structure, the January 2025 blueprint and passing standard, the $550 fee, the six-year/six-attempt limit and the 2021-2025 pass-rate statistics were taken from the NCCPA website and the NCCPA five-year PANCE pass-rate report.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$133,260 median for physician assistants (BLS SOC 29-1071, May 2024)',
    summary:
      'The Bureau of Labor Statistics classifies physician assistants under SOC code 29-1071, and that is the occupation the PANCE unlocks — passing the exam is the certification step that all states require for PA licensure. The May 2024 median wage was $133,260 a year, about $64.07 an hour, with the lowest 10 percent earning less than $95,240 and the highest 10 percent more than $182,200, so the distribution is wide and worth reading carefully: a PA in primary care in a lower-cost region sits well below the median, while PAs in surgical specialties, high-cost metros and hospital settings sit well above it. BLS reported employment of 162,700 jobs in 2024, projected growth of 20 percent from 2024 to 2034 — much faster than the average for all occupations — and about 12,000 openings a year, most from replacement need. That growth outlook is one of the strongest of any clinical occupation, and it is the headline number in the career case for the PANCE: demand for PAs is projected to expand substantially while the certification gate remains the barrier to entry. The other side of the ledger is the investment: PA training is a master\u2019s degree following a bachelor\u2019s, and the PANCE is the final exam gate, so the salary is earned after years of education and the certification carries the weight of that pipeline. The certification itself — the PA-C credential — does not have a separate BLS wage, and NCCPA does not publish a salary premium for certification, so the honest statement is that the PANCE is the required key to an occupation with a $133,260 median, a 20 percent growth projection, and state-level variation that can swing the actual number by tens of thousands of dollars.',
    rows: [
      { label: 'Median annual wage, physician assistants', value: '$133,260', note: 'BLS Occupational Outlook Handbook, May 2024 ($64.07/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $95,240', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $182,200', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '162,700 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~12,000 per year', note: 'BLS OOH Job Outlook, 2024-34 - mostly replacement need' }
    ],
    growth: '+20% projected change 2024-34 (much faster than average), with about 12,000 openings a year — one of the strongest growth outlooks among clinical occupations.',
    source: {
      label: 'BLS Occupational Outlook Handbook - Physician Assistants',
      url: 'https://www.bls.gov/ooh/healthcare/physician-assistants.htm'
    }
  },

  passRate: {
    headline: 'NCCPA publishes first-time pass rates by year — 2025: 91.5% first-time (13,145 first-time takers), versus 88.4% across all administrations',
    summary:
      'NCCPA publishes pass-rate statistics for the PANCE, and it breaks them out in a way that matters: the five-year pass-rate report separates first-time test takers from all administrations, because repeat takers pass at materially lower rates and a blended number would flatter the odds for a new graduate. For 2025, the report shows 13,145 first-time test takers with a 91.5 percent pass rate and a mean first-time scaled score of 458.6, against an 88.4 percent pass rate across all 14,669 exams administered in the year; 12,963 PAs passed the PANCE in 2025. The trend is stable and high: first-time pass rates were 92.4 percent in 2024, 92.0 percent in 2023, 91.9 percent in 2022, and 93.2 percent in 2021. The practical read for a new graduate is genuinely good — roughly nine in ten first-time candidates pass — but the numbers deserve two caveats. First, the high rate reflects the selection pipeline: candidates come from ARC-PA-accredited master\u2019s programs that have already filtered for clinical competence, and NCCPA\u2019s pass rates by individual program vary meaningfully, which is why the data is also reported to programs. Second, the repeat-taker rate is much lower, and the six-attempt, six-year eligibility window means a failed first attempt is expensive in time and money; the guidance is to treat the first attempt as the one that counts. The passing standard itself is scaled: scores run 200-800 and the minimum passing score is 350, set through NCCPA\u2019s standard-setting process with a new blueprint and passing standard effective 1 January 2025. We have cited the published first-time figures rather than a blended national number.',
    source: {
      label: 'NCCPA - Five Year Pass Rates for PANCE (official PDF)',
      url: 'https://www.nccpa.net/wp-content/uploads/PANCEPassRates.pdf'
    },
    caveat:
      'NCCPA publishes first-time and all-administration pass rates separately. The 2025 first-time rate is 91.5% (13,145 takers); the all-administration rate is 88.4%. Repeat-taker rates are materially lower. The passing score is 350 on the 200-800 scale. No blended national figure is published, and we have not invented one.'
  },

  studyPlan: {
    summary:
      'A realistic PANCE plan runs six to eight weeks at roughly 30-40 hours a week for a recent graduate, because the exam is a 300-question, five-block marathon that assumes the clinical base of an entire PA program — the dedicated period is for organising, reviewing and drilling that base, not for learning medicine from scratch. The exam is five blocks of 60 questions with 60 minutes per block, so about five hours of testing time plus 45 minutes of break time and a tutorial, delivered by computer at Pearson VUE, with a passing standard of 350 on the 200-800 scaled scale. The current blueprint, effective January 2025, weights organ systems — cardiovascular 11 percent, pulmonary 9 percent, gastrointestinal and nutrition 8 percent, musculoskeletal 8 percent, infectious disease 7 percent, neurologic 7 percent, psychiatric and behavioural 7 percent, reproductive 7 percent, endocrine 6 percent, EENT 6 percent, hematologic 5 percent, renal 5 percent, dermatologic 4 percent, genitourinary 4 percent — plus 6 percent professional practice, layered over task categories such as formulating the diagnosis, history taking and physical examination, and clinical intervention. The plan below covers the heaviest systems first, then the cross-cutting tasks, then full-length simulations, because the exam rewards both breadth and the ability to sustain decision-making across five consecutive blocks. Recent graduates should schedule within the 180-day window after program completion, while clinical knowledge from rotations is still fresh, and should front-load question volume; candidates retaking after a fail should start from the score report and attack the systems that dragged them below 350 rather than re-reading everything.',
    totalHours: '180-300 hours over 6-8 weeks',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Baseline and blueprint mapping',
        tasks: [
          'Download the January 2025 PANCE content blueprint and map every organ system and task percentage',
          'Take one mixed timed question set (120-150 questions) and record your performance by system',
          'Build a weak-area tracker; every subsequent miss gets tagged to a system and a task',
          'Schedule the exam date within your 180-day eligibility window before the plan runs long'
        ],
        hours: '25-30 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Cardiovascular, pulmonary and GI-nutrition (28% of the exam)',
        tasks: [
          'Cardiovascular: chest pain and ACS, heart failure, dysrhythmias, hypertension, and the cardiac emergencies with their first-line management',
          'Pulmonary: asthma, COPD, pneumonia, PE and DVT, and respiratory failure recognition and management',
          'GI and nutrition: abdominal pain presentations, GI bleeding, pancreatitis, liver disease, and nutritional emergencies',
          'Drill the diagnosis-to-management pairs for each system — the exam asks for the most likely diagnosis, then the next step'
        ],
        hours: '30-40 hrs/week'
      },
      {
        label: 'Weeks 4-5',
        focus: 'MSK, neuro, psych, reproductive and infectious disease',
        tasks: [
          'Musculoskeletal: fractures and dislocations, joint infections, back pain red flags, and rheumatologic presentations',
          'Neurologic: stroke and TIA, seizures, headache red flags, neuropathy and neuromuscular emergencies',
          'Psychiatric and reproductive: depression, anxiety and psychosis basics; pregnancy care, gynecologic emergencies and contraception',
          'Infectious disease: sepsis, common bacterial and viral presentations, antimicrobial choices, and prophylaxis and vaccination'
        ],
        hours: '30-40 hrs/week'
      },
      {
        label: 'Week 6',
        focus: 'Endocrine, EENT, renal, hematologic, dermatologic, GU and professional practice',
        tasks: [
          'Endocrine: diabetes and its emergencies, thyroid disease, adrenal insufficiency and electrolyte disorders',
          'EENT, renal, hematologic, dermatologic and genitourinary: the high-yield presentations and their first-line management',
          'Professional practice: ethics, patient safety, legal responsibilities and health systems — the 6 percent category candidates skip',
          'Cover the cross-cutting task categories: diagnostic studies, pharmacologic therapeutics and health maintenance'
        ],
        hours: '30-35 hrs'
      },
      {
        label: 'Week 7',
        focus: 'Full-length simulations',
        tasks: [
          'Run two full five-block, 300-question simulations under real timing with the 60-minute-per-block rule',
          'Use the 45 minutes of break time exactly as you would on exam day and log your focus dips per block',
          'Re-tag every miss and attack the bottom three systems with targeted review',
          'Compare each simulated score against the 350 scaled threshold using the practice vendor\u2019s conversion'
        ],
        hours: '35-40 hrs'
      },
      {
        label: 'Week 8',
        focus: 'Gap closing, final exam and logistics',
        tasks: [
          'One more timed block set on your weakest systems until the misses clear',
          'Drill high-yield fact recall: antibiotic choices, lab values, and the guideline first-lines that recur',
          'Confirm the Pearson VUE appointment, the ID rule, and the 180-day window expiry',
          'Two quiet days before the exam; stop learning new content by mid-week'
        ],
        hours: '20-25 hrs'
      }
    ],
    variants: [
      { label: 'Recent graduate, full-time studier', detail: 'Six weeks. The clinical base is fresh; spend the recovered time on full-block simulations and question volume, which are the parts of the paper that program curricula prepare you for least.' },
      { label: 'Candidate retaking after a failed attempt', detail: 'Eight weeks starting from the score report. Do not re-read everything — identify the two or three systems that dragged the scaled score below 350 and drill those with a much higher question volume, then simulate full blocks.' },
      { label: 'Graduate who has been out of clinical rotations for months', detail: 'Eight to ten weeks. Your risk is content drift and block endurance; add a structured review of the four heaviest systems and at least three full-length simulations before the real exam.' }
    ]
  },

  prepStrategies: {
    summary:
      'The PANCE rewards two things above all: breadth across the organ systems, and the stamina to sustain clinical decision-making across five consecutive 60-minute blocks — so the dominant strategy is proportional coverage of the January 2025 blueprint plus regular full-length simulation, not selective over-studying of favourite systems. The blueprint weights cardiovascular at 11 percent, pulmonary at 9 percent, and GI-nutrition and musculoskeletal at 8 percent each, so candidates who cover the systems in proportion to their weight get more points per hour than candidates who study what they find interesting; at the same time, the task categories — formulating the most likely diagnosis (18 percent), history taking and physical examination (16 percent), and clinical intervention (16 percent) — show that most items ask you to move from a presentation to a diagnosis to a next step, so drill the diagnosis-to-management pair rather than isolated facts. Second, use the official NCCPA practice exam, which uses retired PANCE items and is the single most accurate readiness signal available. Third, do question volume daily in timed sets, because the exam is 300 questions in a day and the average item takes about a minute; recognition speed and the ability to clear a stem quickly are trainable skills. Fourth, run at least two full five-block simulations before test day, because the 60-minute-per-block pacing and the mental fatigue across five blocks are the two things candidates underestimate most. Fifth, review every rationale and tag every miss to a system and task, so the final week attacks real gaps. Finally, schedule the exam within the 180-day window while rotations are fresh — delaying measurably lowers first-time pass rates, which are already 91.5 percent for candidates who take the exam promptly.',
    items: [
      {
        title: 'Cover the systems in proportion to the blueprint',
        detail: 'Cardiovascular (11%), pulmonary (9%), GI-nutrition (8%) and musculoskeletal (8%) are the heaviest systems, but no system should be skipped — dermatologic and genitourinary at 4% each still appear. Study time allocated by the blueprint weights yields more points per hour than study time allocated by comfort or interest.'
      },
      {
        title: 'Drill the diagnosis-to-management pair',
        detail: 'The task categories — most likely diagnosis (18%), history and physical (16%), and clinical intervention (16%) — mean most items present a patient and ask what is going on and what you do next. Practise answering both halves of every scenario, because recognition without a management plan loses the second half of the item.'
      },
      {
        title: 'Use the official NCCPA practice exam for calibration',
        detail: 'The NCCPA practice exam uses retired PANCE items and is the most accurate predictor of readiness available. Take it once mid-preparation to locate real gaps and once near the end to confirm you are safely above the 350 scaled threshold rather than marginally near it.'
      },
      {
        title: 'Do timed daily question volume',
        detail: 'The exam is 300 items in a day at roughly a minute each. Recognition speed is trainable: daily timed sets of 30-60 questions build the pace and the stamina that content review alone cannot. Every miss gets tagged to a system so the final week is targeted.'
      },
      {
        title: 'Simulate the full five-block day',
        detail: 'Five 60-minute blocks with 45 minutes of breaks is a genuine endurance event. Run at least two full 300-question simulations before test day so the pacing, the break strategy and the back-half fatigue are familiar. Candidates who only do single blocks routinely fade in blocks four and five.'
      },
      {
        title: 'Schedule within the 180-day window',
        detail: 'First-time pass rates are highest for graduates who take the exam within roughly 60-90 days of finishing rotations, while the clinical base is fresh, and the 180-day eligibility window sets the deadline. Booking early also protects the retake window: the six-attempt, six-year limit starts counting from program completion.'
      }
    ]
  },

  resourceComparison: {
    summary:
      'PANCE preparation resources split into NCCPA\u2019s own materials, the major commercial question banks, review courses and books, and the question is not which single resource is best but which combination covers calibration, volume and content — with the official NCCPA practice exam anchoring the calibration piece because it uses retired PANCE items and is the most accurate readiness signal available. The exam itself costs $550 as the NCCPA application fee, paid at registration, with no separate test-centre charge; the cost of a retake is another $550, and candidates retaking within the six-year window pay each time. On preparation, the leading commercial question banks run roughly $100-300 for subscriptions covering the typical six-to-eight-week study window, and they are the main source of the high-volume, rationale-reviewed practice the exam demands; the best of them track the January 2025 blueprint and the 350 scaled passing standard. Review courses, live or recorded, run from several hundred dollars into the low thousands, and the decision on whether they add value depends on whether the candidate\u2019s gap is content or test-taking skill — recent graduates from strong programs usually benefit more from question volume than from another lecture series. Books and the NCCPA content blueprint are free or cheap and should anchor the content side of any plan. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, we rank nothing by commission, and many PA programs bundle or discount prep materials, so check what your program provides before buying anything. A common high-value combination is one official NCCPA practice exam, one major question bank, and the blueprint, which covers calibration, volume and scope for roughly the cost of one retake.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'PANCE application (NCCPA)', values: ['$550', 'Pearson VUE, computer-based', 'The real exam; each attempt costs the full fee'] },
      { label: 'NCCPA official practice exam', values: ['Fee-based on the NCCPA store', 'Retired PANCE items, computer-based', 'The single most accurate readiness calibration'] },
      { label: 'Major commercial question banks', values: ['~$100-300 for 1-3 month subscriptions', 'Online, timed, with rationales', 'High-volume drilling and miss tracking across systems'] },
      { label: 'PANCE review course (live or recorded)', values: ['~$300-2,000 depending on package', 'Lectures plus qbank access', 'Candidates whose gap is content coverage rather than test skill'] },
      { label: 'NCCPA content blueprint + textbooks', values: ['Free to low cost', 'PDF and print', 'The authoritative scope map for allocating study time'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax and change frequently; we rank nothing by commission. The NCCPA PANCE application fee is $550. Check whether your PA program bundles or discounts prep materials before buying a course, because many programs do.'
  },

  commonMistakes: {
    summary:
      'The PANCE failures we see most often are not knowledge failures — the first-time pass rate is 91.5 percent precisely because accredited programs prepare candidates well — they are planning and format failures that drag otherwise capable graduates below the 350 scaled threshold. The single most common error is scheduling the exam late: candidates who delay past the 180-day eligibility window or study for months while clinical knowledge from rotations fades measurably lower their odds, when the data shows first-time pass rates are highest for graduates who sit within roughly 60-90 days of finishing. The second is studying systems out of proportion, over-investing in favourite specialties while leaving the blueprint\u2019s real weights — cardiovascular 11 percent, pulmonary 9 percent — under-covered, and skipping the professional-practice category entirely. The third is preparing with untimed question sets, so the minute-per-question pace and the five-block endurance never get rehearsed, and the candidate fades in blocks four and five. The fourth is treating the practice score as the predictor without using the score report: candidates who pass a practice test but never compare against the 350 scaled standard, or who fail and then re-read everything instead of attacking the two or three systems that dragged the score down, repeat the same result. The fifth is ignoring the retake economics: each attempt is $550, the six-attempt, six-year window runs from program completion, and a failed attempt delays licensure and employment onboarding, so the first attempt should be treated as the one that counts. And the sixth is logistics — the Pearson VUE ID rule and the window expiry — where a turned-away candidate forfeits both the fee and a precious attempt.',
    items: [
      {
        mistake: 'Scheduling the exam late in the eligibility window',
        fix: 'First-time pass rates are highest within roughly 60-90 days of finishing rotations, while the clinical base is fresh, and the 180-day window sets a hard deadline. Book the exam early in the plan so the window expiry is never the reason for the date.'
      },
      {
        mistake: 'Studying systems out of proportion to the blueprint',
        fix: 'Allocate hours by the January 2025 blueprint weights — cardiovascular 11%, pulmonary 9%, GI-nutrition 8%, musculoskeletal 8% — and cover every system, including professional practice at 6%. Studying favourite specialties while leaving the weighted systems thin is the fastest way to lose a third of the paper.'
      },
      {
        mistake: 'Preparing with untimed question sets only',
        fix: 'The exam is 300 questions in five 60-minute blocks. Run timed sets daily and at least two full five-block simulations before test day, because pacing and back-half endurance are trainable and are the two things untimed practice never rehearses.'
      },
      {
        mistake: 'Ignoring the score report after a practice or real failure',
        fix: 'The PANCE score report breaks performance down by content area. Use it to identify the two or three systems below the passing standard and drill those specifically; re-reading everything after a fail produces the same result at another $550.'
      },
      {
        mistake: 'Treating the first attempt casually',
        fix: 'Each attempt costs $550, repeat pass rates are materially lower, and the six-attempt, six-year window runs from program completion. A failed first attempt delays licensure and onboarding, so prepare as if there is no retake, because there may not be time for one.'
      },
      {
        mistake: 'Losing the seat to an ID or window slip',
        fix: 'The name on your government-issued photo ID must match your NCCPA application exactly, and the exam must fall inside the 180-day window. Confirm both the week before; a turned-away candidate forfeits the fee and burns an attempt.'
      }
    ]
  },

  questionTypes: {
    summary:
      'The PANCE is a computer-based exam of 300 multiple-choice questions in five blocks of 60 questions, with 60 minutes per block — about five hours of testing time plus 45 minutes of breaks and a tutorial — scored on a 200-800 scale with a minimum passing score of 350. Every question is single-best-answer multiple choice: a clinical scenario with a patient history, findings or lab results, and four or five options from which you select the most appropriate answer; there are no essays, practicals, oral components or performance tasks. The content is organised along two overlapping dimensions: organ systems, weighted by the January 2025 blueprint (cardiovascular 11 percent, pulmonary 9 percent, GI-nutrition 8 percent, musculoskeletal 8 percent, infectious disease 7 percent, neurologic 7 percent, psychiatric 7 percent, reproductive 7 percent, endocrine 6 percent, EENT 6 percent, professional practice 6 percent, hematologic 5 percent, renal 5 percent, dermatologic 4 percent, genitourinary 4 percent), and task categories, which describe what the item asks you to do — formulate the most likely diagnosis (18 percent), take a history and perform a physical examination (16 percent), choose a clinical intervention (16 percent), select pharmacologic therapy (15 percent), apply health maintenance and prevention (11 percent), interpret diagnostic studies (10 percent), and apply basic science (8 percent). Roughly 8-10 percent of questions involve surgical topics and 12-15 percent involve pediatric patients, woven into the organ-system categories. A small number of questions are unscored pretest items. Because scoring is scaled and criterion-referenced, a 350 represents the same ability across forms, and no points are deducted for incorrect or blank answers, so answering every question is strictly better than skipping. The three samples below illustrate the diagnosis, management and diagnostic-study item styles; they are editor-written to the published blueprint and are not live exam items.',
    types: [
      { name: 'Most-likely-diagnosis items', share: 'Largest task category (18%)', detail: 'A clinical presentation with history and findings; select the most likely diagnosis. Distractors are real but less probable conditions, so the stem detail matters.' },
      { name: 'History, physical and diagnostic items', share: '~26% combined', detail: 'What to ask next, what to look for on exam, or which study to order. These reward a systematic approach to the presentation rather than pattern-matching a single diagnosis.' },
      { name: 'Management and pharmacologic items', share: '~31% combined', detail: 'The next intervention or the correct drug for the presented condition. First-line guidelines and antimicrobial choices recur, so the diagnosis-to-management pair is the unit of study.' },
      { name: 'Health maintenance, prevention and basic science', share: '~19% combined', detail: 'Screening, prophylaxis, vaccination and underlying science applied to clinical scenarios. Easier points that candidates who only study acute medicine leave on the table.' }
    ],
    samples: [
      {
        prompt: 'A 24-year-old woman presents with 3 days of dysuria, urinary frequency and suprapubic discomfort. She is afebrile. Urinalysis shows leukocyte esterase positive, nitrite positive and 25-50 white blood cells per high-power field. What is the most likely diagnosis?',
        options: [
          'A. Acute uncomplicated cystitis',
          'B. Pyelonephritis',
          'C. Asymptomatic bacteriuria',
          'D. Urethral trauma'
        ],
        answer: 'A',
        explanation: 'The presentation — dysuria, frequency, suprapubic discomfort in a young, non-pregnant woman, without fever or flank pain — is the classic picture of acute uncomplicated cystitis, and the urinalysis with positive leukocyte esterase and nitrite supports a urinary tract infection localised to the bladder. B, pyelonephritis, is suggested by fever, flank pain or costovertebral angle tenderness, none of which are present here. C, asymptomatic bacteriuria, requires no urinary symptoms by definition, so a symptomatic patient with a positive urinalysis is not classified this way. D has no mechanism in the history. The item is a straightforward most-likely-diagnosis question, and the discriminating detail is the absence of systemic signs that would move the infection upstream to the kidney.'
      },
      {
        prompt: 'A 62-year-old man with type 2 diabetes presents with sudden-onset severe headache, left-sided weakness and slurred speech that began 45 minutes ago. On exam, blood pressure is 178/102, heart rate 88, and he has left facial droop and left arm drift. What is the most appropriate next step?',
        options: [
          'A. Immediate non-contrast CT of the head',
          'B. Administer aspirin and observe',
          'C. Discharge with outpatient neurology follow-up',
          'D. Start oral antihypertensives and reassess in 1 hour'
        ],
        answer: 'A',
        explanation: 'This is an acute stroke presentation within the treatment window — sudden focal neurologic deficit with onset 45 minutes ago — and the next step is urgent non-contrast CT of the head to distinguish ischemic from hemorrhagic stroke before any antithrombotic or thrombolytic decision. B is dangerous before imaging because if the stroke is hemorrhagic, aspirin worsens the bleed; C dismisses a time-critical emergency; D treats a secondary finding without addressing the stroke. The item tests the immediate sequence for a suspected acute stroke: imaging first, then treatment decisions based on the result, which is exactly the guideline-driven, next-step reasoning the PANCE rewards across its management items.'
      },
      {
        prompt: 'A 45-year-old man presents with fever, cough productive of green sputum, and pleuritic chest pain. Chest radiograph shows a right lower lobe consolidation. Which finding would most strongly support a bacterial rather than viral etiology?',
        options: [
          'A. Gradual onset over 7 days with dry cough',
          'B. Leukocytosis with left shift on complete blood count',
          'C. Normal white blood cell count with relative lymphocytosis',
          'D. Bilateral interstitial infiltrates on radiograph'
        ],
        answer: 'B',
        explanation: 'In a patient with a lobar consolidation on chest radiograph, leukocytosis with a left shift — an elevated white blood cell count with an increased proportion of immature neutrophils — is the haematologic pattern that most strongly supports a bacterial etiology and drives the decision to use antibiotics. A describes a more typical viral picture of gradual onset and dry cough; C with relative lymphocytosis is more consistent with a viral infection; D, bilateral interstitial infiltrates, is the radiographic pattern commonly seen with viral pneumonia rather than the lobar consolidation of the classic bacterial presentation. The item tests the ability to pair a diagnostic finding with its clinical meaning — a diagnostic-study task category item in which the study results are the deciding evidence.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      'The PANCE is a computer-based exam delivered by appointment at a Pearson VUE test centre, and the direct exam-day answer is that you will sit five blocks of 60 questions with 60 minutes per block — 300 questions, about five hours of testing time — plus a 15-minute tutorial at the start and 45 minutes of break time you can use between blocks, for a total appointment of roughly six hours. The minimum passing score is 350 on the 200-800 scaled scale, and results are released online through your NCCPA account, typically within about two weeks but often faster. Arrive with a valid government-issued photo ID whose name matches your NCCPA application exactly; a mismatch means no exam and a forfeited $550 fee. The tutorial does not count against your exam time; use it to settle. Each block is fixed at 60 minutes, so the pacing discipline is per-block, not global: when the clock for a block starts, work steadily, answer every question — there is no penalty for guessing and no points deducted for wrong answers — and submit the block when done. Use the 45 minutes of break time deliberately: eat, hydrate and reset between blocks, but keep an eye on the total so you are back at the seat when the next block starts. Every question is single-best-answer multiple choice, so there is no partial credit and no essay writing; the skill tested is sustained clinical decision-making across five consecutive hours. Candidates who have simulated full five-block days are at a real advantage, because the mental fatigue of blocks four and five is the part of the exam that content review alone cannot prepare you for. Confirm the test-centre address, the ID and the 180-day window the week before, and treat the day as a six-hour event even though the testing time itself is five hours.',
    bring: [
      'A valid government-issued photo ID (passport or driver\u2019s license) with a name matching your NCCPA application exactly',
      'Your Pearson VUE appointment confirmation and NCCPA acknowledgement with the test-centre address',
      'Prescription glasses if needed; the test centre provides a locker for everything else',
      'Snacks and water for the 45 minutes of break time, stored in the locker until the breaks'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers, calculators and any electronic device — locked in the centre locker',
      'All notes, books, scratch paper and study materials; the centre provides a wipe-board or note-taking material',
      'Bags, coats and outerwear beyond what you can store in the locker',
      'Any food or drink inside the testing room; it stays in the locker until the breaks'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your ID name matches your NCCPA application exactly, confirm the exam falls inside the 180-day window, and check the Pearson VUE centre address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre; check-in includes ID verification, a photo, and locker assignment. Pearson VUE requires you to be at the centre before the scheduled start.' },
      { time: 'Start', detail: 'A 15-minute tutorial that does not count against exam time, then block one of 60 questions begins.' },
      { time: 'Blocks 1-3', detail: 'Three 60-minute blocks with breaks as you choose from the 45-minute bank. Pace per block, answer everything, and eat and hydrate in the breaks.' },
      { time: 'Blocks 4-5', detail: 'The endurance stretch. Candidates who have simulated full days hold their pace; use the remaining break time to reset before each block.' },
      { time: 'After the exam', detail: 'Submit the final block and leave. Results post to your NCCPA account, typically within about two weeks, with a score report showing performance by content area.' }
    ],
    rules: [
      '300 multiple-choice questions in five blocks of 60, with 60 minutes per block and 45 minutes of break time total.',
      'Minimum passing score is 350 on the 200-800 scaled scale; there is no partial credit and no essay component.',
      'No points are deducted for incorrect or blank answers, so answer every question.',
      'Valid government photo ID with a name matching your NCCPA application exactly is required, or you are turned away.',
      'No personal items in the room and no calculators; the centre provides note-taking material.',
      'The exam must fall within the 180-day eligibility window after program completion, and NCCPA limits never-certified graduates to six attempts within six years.'
    ],
    afterwards:
      'Results are released online through your NCCPA account, typically within about two weeks of the exam, and your score report shows overall performance and a breakdown by content area. On a pass, you become a Physician Assistant-Certified (PA-C), which is the certification all states require as part of PA licensure — the PANCE is the gateway, not the license itself, so watch for your state licensing board\u2019s notification and any additional steps such as a background check. Certification also starts your maintenance cycle: continuing medical education and, in time, the recertification exam, so log the cycle from the start. On a fail, you may retake the PANCE within the six-attempt, six-year window from program completion, with a 90-day wait between attempts, and each attempt costs the full $550 fee. Use the score report as the diagnosis: identify the two or three content areas that pulled the scaled score below 350, spend a focused block drilling those systems with a much higher question volume, run full five-block simulations, and re-sit. Most candidates who fail once pass on the next attempt when they close the specific gap rather than re-reading everything — and with the six-year clock running, the targeted approach is also the economical one.'
  }
};

export default data;
