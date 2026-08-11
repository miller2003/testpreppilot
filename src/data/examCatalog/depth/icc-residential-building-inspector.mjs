// Depth content for: icc-residential-building-inspector
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Trades & construction certifications desk',
    bio: 'This guide is compiled and maintained by our construction and trades desk. ICC exam structure, content outlines and fees come from the International Code Council certification catalogue and the exam publisher materials that cite it, and we flag where the fee differs between members and non-members. Certification validity and renewal terms come from ICC policy pages. Wage figures come from the Bureau of Labor Statistics occupational series named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam structure, passing standard, fees and the three-year renewal cycle were checked against the ICC certification catalogue and current B1 exam guidance.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary
  salaryOutlook: {
    headline: '$72,120 median for construction and building inspectors (BLS, May 2024)',
    summary:
      'The Bureau of Labor Statistics occupation that maps directly onto this credential is Construction and Building Inspectors, SOC 47-4011, which had a May 2024 median annual wage of $72,120. That is the right number to cite because the B1 credential exists for exactly the work that occupation describes: inspecting one- and two-family dwellings and townhouses for compliance with the International Residential Code. The distribution is worth reading before you plan a career move. BLS reports the lowest 10 percent of construction and building inspectors earned less than $41,900 and the highest 10 percent more than $107,440, and the difference between those ends is mostly employer type and scope. Local government agencies — cities, counties and townships that employ inspectors on municipal building departments — sit at one end, and private third-party inspection firms and high-volume plan review work at the other. Because B1 is the entry-level building-inspection credential, most people start near the lower half of the band and move up by stacking credentials: a combination inspector or plans examiner credential, or the electrical, mechanical and plumbing specialist exams, is how inspectors climb the pay scale within the same occupation. The occupational outlook is mixed and should be stated plainly. BLS projects a 1 percent employment decline for construction and building inspectors from 2024 to 2034, with about 14,800 openings a year arising almost entirely from replacement need as the current workforce retires. The credential\u2019s practical value in that flat market is that it is a portability and preference signal: thousands of municipal and private inspection job postings name ICC certification, and specifically B1, as required or strongly preferred within a set time after hire. It does not create jobs on its own; it makes you eligible for the jobs that exist.',
    rows: [
      { label: 'Median annual wage, construction and building inspectors', value: '$72,120', note: 'BLS Occupational Outlook Handbook, May 2024 ($34.67/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $41,900', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $107,440', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '147,600 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~14,800 per year', note: 'BLS OOH Job Outlook, 2024-34 — almost all replacement need' }
    ],
    growth: '-1% projected change 2024-34 (slight decline), with ~14,800 replacement openings a year; ICC certification is the portability signal that municipal and private inspection postings name as required or preferred',
    source: {
      label: 'BLS Occupational Outlook Handbook — Construction and Building Inspectors',
      url: 'https://www.bls.gov/ooh/construction-and-extraction/construction-and-building-inspectors.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'ICC publishes no pass rate — the published standard is a scaled score of 75 on the 60-question B1 exam',
    summary:
      'ICC does not publish pass-rate statistics for the B1 Residential Building Inspector exam, and it never has, so any percentage a prep vendor quotes as a "B1 pass rate" is an estimate or a marketing number rather than an official figure. What ICC does publish, in its certification catalogue and exam guidance, is the passing standard, and it is a scaled score rather than a percentage: you need a scaled score of 75 on a 100-point scale. That distinction matters because the exam is criterion-referenced and open-book. The raw number of correct answers required to reach a 75 varies slightly from form to form because ICC equates exam forms so that a harder set of items demands the same demonstrated ability as an easier one; some third-party analyses estimate the effective raw threshold at roughly 70-72 percent of the 60 items, but ICC does not confirm a percentage and the scaled conversion is not linear. Two structural facts make the B1 unlike most exams and worth understanding before you study. First, it is open book: the permitted reference is the edition of the International Residential Code you selected at registration — the 2024 IRC or the 2021 IRC — and nothing else, so preparation is code-navigation skill as much as code knowledge. Second, the exam is 60 questions in 120 minutes, which is a deliberate pace of two minutes per question, but because most items require you to look a specific value up in the codebook, candidates routinely run short on time despite the generous allowance. The practical implication: practise timed code lookups until you can find a section in under thirty seconds, because the scaled score rewards candidates who can navigate the IRC efficiently far more than candidates who memorised chapters.',
    source: {
      label: 'ICC — Certification exam catalogue and B1 exam information',
      url: 'https://www.iccsafe.org/certification/exams/certification-exam-catalog/'
    },
    caveat:
      'No pass rate is published by ICC. The verifiable standard is a scaled score of 75 on a 100-point scale for the 60-question, 120-minute, open-book B1 exam; the raw threshold varies by form and is not published.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'Plan for eight weeks and roughly 60 to 80 hours, and understand from the start that this is a code-navigation exam wearing the costume of an inspection-knowledge exam. The B1 is 60 questions in 120 minutes, open book, with the International Residential Code as the only permitted reference, and the IRC edition you choose at registration — 2024 or 2021 — is the edition you must bring and the edition tested. The content outline is IRC Chapters 1 through 11, and the weights concentrate the paper: Wall Construction is the largest domain at about 27 percent, with Public Safety at about 17 percent, Footings and Foundations and Roof/Ceiling Construction each around 14-18 percent, and Floor Construction, Building Planning and Code Administration making up the rest. Wall construction and public safety alone are over 40 percent of the questions, so the plan weights study time accordingly. The most effective sequence is: first, buy and tab the IRC edition you will test on, because efficient lookup is the skill the exam actually rewards; second, study the highest-weight domains in order — walls, public safety, foundations, roof; third, drill the specific code values that recur constantly, such as stair dimensions, egress window sizes, guard heights, anchor bolt spacing and smoke alarm placement; and fourth, run timed practice exams that simulate the two-minute-per-question pace while looking answers up in the code. Candidates who treat this like a memorisation exam fail on time; candidates who treat it like a code-navigation drill pass. The plan below is built for the 2024 IRC edition, the current catalogue default, and the fee should be budgeted at roughly $210 for ICC members and $230 for non-members per attempt.',
    totalHours: '60-80 hours over 8 weeks',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Codebook setup and navigation system',
        tasks: [
          'Buy the exact IRC edition you will test on (2024 or 2021) and confirm it at registration',
          'Tab the chapters: foundations, floor, wall, roof, public safety, and the building-planning sections',
          'Practise using the table of contents, the index and keyword skimming to reach any topic in under thirty seconds',
          'Take one untimed practice exam to baseline and log which code sections you cannot find quickly'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Wall Construction (27%)',
        tasks: [
          'Study stud spacing, header sizing, wall bracing methods, fire separation between garage and dwelling, and sheathing requirements',
          'Tab the key tables: joist and header spans, stud and bracing provisions',
          'Practise answering wall-construction questions by locating the table or section, not from memory',
          'Work the section-specific question bank until wall questions take under ninety seconds each'
        ],
        hours: '12-14 hrs'
      },
      {
        label: 'Weeks 4-5',
        focus: 'Public Safety, Footings and Foundations, Roof (17% + 14-18% + 14%)',
        tasks: [
          'Public safety: smoke and CO alarm placement, guard and handrail dimensions, safety glazing, fire blocking, and the 4-inch sphere test for baluster spacing',
          'Foundations: footing sizes by storeys and soil bearing, foundation wall thickness, anchor bolt rules, drainage and waterproofing',
          'Roof: rafter spans, sheathing, underlayment, flashing, ventilation and fastening requirements',
          'Drill the specific numeric values repeatedly — these are the cheapest points on the paper'
        ],
        hours: '14-16 hrs'
      },
      {
        label: 'Week 6',
        focus: 'Floor Construction, Building Planning, Code Administration',
        tasks: [
          'Floor construction: joist spans, bearing requirements, notching and boring, crawlspace, vapour retarders and treated wood',
          'Building planning: unit separation, room dimensions, ceiling heights, doors, landings, egress windows and stairs',
          'Code administration: permits, inspections, certificates of occupancy, the building official\u2019s authority and code scope',
          'Run timed section drills with the clock — two minutes per question, code lookup only'
        ],
        hours: '12-14 hrs'
      },
      {
        label: 'Week 7',
        focus: 'Timed full practice exams',
        tasks: [
          'Two full 60-question, 120-minute practice exams under real timing, open book',
          'Re-lab every miss to its IRC section and re-drill the value you could not find',
          'Average your lookup speed; if you are over thirty seconds per lookup, go back to Week 1 drills',
          'Target 80%+ consistently, because the scaled 75 standard demands margin'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Week 8',
        focus: 'Gap closing and logistics',
        tasks: [
          'Drill your recorded weak sections until lookup is reflexive',
          'Final pass over the recurring values: stairs, egress, guards, alarms, anchors',
          'Confirm your exam appointment, the code edition on file and your test-centre logistics',
          'Rest the day before — this is a lookup-speed exam and fatigue is fatal'
        ],
        hours: '6-8 hrs'
      }
    ],
    variants: [
      { label: 'Already working as an inspector or in construction', detail: 'Five to six weeks. Your field experience covers much of the conceptual content; spend the recovered time on code-navigation speed, because experienced inspectors still fail when they cannot find the section under time pressure.' },
      { label: 'Home inspector converting to municipal authority', detail: 'Six to eight weeks. Your report-writing background transfers, but municipal inspection runs on code chapters, not general practice — treat IRC navigation as a new skill to build from zero.' },
      { label: 'Sitting both B1 and B2 or a combination credential', detail: 'Budget an extra two to three weeks per additional exam and expect the code-navigation skill to compound — the tabbing and lookup system you build for B1 transfers directly.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'Every high-yield strategy for the B1 comes back to one fact: the exam is open book and timed, so the person who wins is the person who can find code sections fastest, not the person who memorised the most. Reading the IRC cover to cover is the single least efficient way to prepare. The strategies below are the ones that reliably convert study time into lookup speed and correct answers.',
    items: [
      {
        title: 'Tab your codebook ruthlessly',
        detail: 'Mark the tables and sections that recur across the outline: footing sizes, joist and rafter spans, stair dimensions (7-3/4-inch max riser, 10-inch min tread), egress window sizes, guard heights, anchor bolt spacing and smoke alarm placement. A well-tabbed codebook is the difference between a thirty-second lookup and a two-minute hunt, and on a 60-question exam the cumulative difference is the pass.'
      },
      {
        title: 'Drill timed code lookups daily',
        detail: 'Set yourself a list of specific values and time each lookup: footing width for a two-storey house on a given soil, minimum egress window size for a bedroom, maximum riser height, required guard height at a stair. Thirty seconds per lookup should be the ceiling. This one drill converts the open-book format from a trap into your biggest advantage.'
      },
      {
        title: 'Answer by keyword, not by reading the whole section',
        detail: 'Read the question for the operative phrase — "egress", "riser", "anchor bolt", "fire separation" — then go straight to the index or your tabs for that phrase. Do not re-read the question once you have found the section. Candidates who skim the full section on every item are the ones who run out of clock.'
      },
      {
        title: 'Weight your study to the four heavy domains',
        detail: 'Wall Construction (27%), Public Safety (17%), Footings and Foundations (14-18%) and Roof/Ceiling Construction (14%) together dominate the paper. If you run low on time, those four domains come first. Do not spend equal hours on Code Administration, which is a small slice of the exam.'
      },
      {
        title: 'Memorise the values that appear in the outline',
        detail: 'Some questions are pure code knowledge — smoke alarms in every bedroom and outside sleeping areas, guards at 34 inches at stairs, the 4-inch sphere rule for balusters. Knowing those cold means you skip the lookup entirely and bank the two minutes you save toward the harder table questions.'
      },
      {
        title: 'Practise with the exact IRC edition you will test on',
        detail: 'The 2024 IRC and 2021 IRC are both offered and you pick at registration. Content shifts between editions — smoke and CO alarm changes, foundation updates and chapter renumbering are documented in the 2024 edition. If you train on the wrong edition, you will be tabbing a codebook that is not the one on the desk.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The B1 is unusual because the codebook is both the study material and the exam reference, so the first purchase is not a prep course but the correct edition of the International Residential Code. Beyond that, the market is dominated by small specialist vendors selling practice-question banks and tabbed-codebook guides, and prices vary widely. The exam fee itself is roughly $210 for ICC members and $230 for non-members, and membership pays for itself on the exam alone if you plan to pursue further ICC credentials. The buying rule: buy the correct IRC edition first, use free ICC exam-content information, then add a practice-question bank and, only if needed, a guided course.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ICC B1 exam', values: ['~$210 ICC member / ~$230 non-member per attempt', 'Pearson VUE or ICC remote proctoring, 60 questions / 120 min', 'Required — the fee itself'] },
      { label: 'The International Residential Code (2024 or 2021 edition)', values: ['~$110-150 for the codebook', 'Print or digital codebook', 'Both your study text and your only permitted exam reference'] },
      { label: 'ICC membership', values: ['Annual membership fee; pays for itself on one exam', 'Annual subscription with exam and renewal discounts', 'Anyone sitting multiple ICC exams or renewing credentials'] },
      { label: 'ICC exam content outline and catalogue', values: ['Free', 'Official PDF/web documents', 'The authoritative blueprint — start here'] },
      { label: 'Specialist practice-question banks (open-exam-prep, passICCexam and similar)', values: ['~$20-100 depending on vendor', 'Online question banks with explanations', 'Timed drill on the exact code sections and values that recur'] },
      { label: 'Video prep courses for the B1', values: ['~$100-300', 'Online video with demonstrations', 'Candidates who learn by watching codebook navigation demonstrated'] },
      { label: 'Free ICC practice questions and sample exams', values: ['Free', 'Web', 'A low-cost readiness check before spending on commercial banks'] }
    ],
    footnote: 'Prices checked 2026-08 in USD; ICC fees differ for members and non-members and change periodically, and the IRC edition you select at registration is the edition tested. Confirm pricing on the ICC catalogue before buying. We do not rank resources by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The mistakes that fail B1 candidates are almost all time-management or code-format errors rather than knowledge gaps. The exam gives 120 minutes for 60 open-book questions, which sounds generous and is not, because most items require a code lookup. Candidates who memorise instead of navigating, train on the wrong code edition, or fail to tab their codebook run out of time on a paper that rewards lookup speed.',
    items: [
      {
        mistake: 'Studying the wrong IRC edition',
        fix: 'The B1 is offered in both the 2024 and 2021 IRC editions and you pick at registration; the codebook on your desk must be that exact edition. The 2024 edition moved smoke and CO alarm requirements, reorganised seismic provisions and renumbered parts of Chapter 3. Confirm your registered edition before buying anything, because tabbing the wrong codebook is a total-prep failure.'
      },
      {
        mistake: 'Preparing by memorising the code',
        fix: 'This is an open-book exam; memorisation is the least efficient possible strategy. The scaled score of 75 is earned by finding the right section fast, not by knowing values cold. Convert your study time to timed code lookups and keyword-driven index drills, and reserve memorisation for the handful of values that appear constantly.'
      },
      {
        mistake: 'Not tabbing the codebook until the night before',
        fix: 'A well-tabbed IRC is your core exam tool and it cannot be assembled in one evening. Build tabs progressively as you study each domain — footing tables, span tables, stair and guard dimensions, alarm requirements. By exam day every section that recurs in the outline should be findable in under thirty seconds.'
      },
      {
        mistake: 'Spending too long per question on lookups',
        fix: 'Two minutes per question sounds generous until you add lookup time. If a lookup runs past sixty seconds, mark the question, move on and return if time remains. Candidates who chase a single hard table question for ten minutes lose five easy questions they could have banked.'
      },
      {
        mistake: 'Ignoring the exam fee difference and renewal cycle',
        fix: 'Budget $210 as an ICC member versus $230 as a non-member, and note the credential renews on a three-year cycle with continuing-education requirements — roughly 1.5 CEUs for a single ICC certification. Factor the renewal into the decision and diary the expiry the week you pass.'
      },
      {
        mistake: 'Neglecting the 10-day retake wait and full fee on retake',
        fix: 'ICC requires a wait of at least 10 days between attempts and charges the full exam fee each time. Treat the first attempt as the best attempt: arrive with a tabbed codebook and drilled lookup speed, because a retake costs the same and buys a harder exam day.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The B1 is 60 multiple-choice questions in 120 minutes, open book, with a scaled passing score of 75 on a 100-point scale. Every question has four options with a single best answer, and the practical exam format is dominated by code-lookup items: the stem states an inspection scenario or a requirement, and you must locate the applicable provision in the IRC and select the correct value or requirement. The seven content areas are Code Administration, Building Planning, Footings and Foundations, Floor Construction, Wall Construction, Roof/Ceiling Construction and Public Safety, with Wall Construction (about 27%) and Public Safety (about 17%) the heaviest. Because the exam is criterion-referenced and scaled, the exact number of correct answers needed for a 75 varies by form, but third-party analyses put the effective threshold near 70-72 percent of items. The practical pacing target is two minutes per question including lookup time, and because most items are scenario-plus-lookup rather than pure recall, the skill being tested is really efficient code navigation. The samples below are editor-written illustrations of the item styles in the published outline, not live exam items.',
    types: [
      { name: 'Direct code-value questions', share: 'A large share of the paper', detail: 'A requirement stated and the exact value requested — stair riser height, egress window size, guard height, anchor bolt spacing. These reward knowing the value or finding the table fast.' },
      { name: 'Scenario-and-application questions', share: 'Common throughout', detail: 'An inspection scenario with a code provision to apply — whether a condition complies, what the inspector should verify, which section governs the situation described.' },
      { name: 'Table lookup questions', share: 'Heaviest in wall, foundation and roof domains', detail: 'A structural requirement that requires reading a span, footing or fastening table in the IRC — the items that make the exam a navigation test.' },
      { name: 'Administration and authority questions', share: 'Small but present in Code Administration', detail: 'Permit authority, inspection sequencing, certificate of occupancy and the building official\u2019s scope — knowledge items that rarely need a lookup.' }
    ],
    samples: [
      {
        prompt: 'A residential inspector checks a stairway and measures the riser heights. Per the IRC, what is the maximum permitted riser height for a typical residential stair?',
        options: [
          'A. 7 inches',
          'B. 7-3/4 inches',
          'C. 8-1/4 inches',
          'D. 9 inches'
        ],
        answer: 'B',
        explanation: 'The IRC limits residential stair risers to a maximum of 7-3/4 inches, with treads at least 10 inches deep. This is a direct code-value question from the Building Planning/Public Safety content — one of the recurring values that should be known cold so no lookup is needed. A is a common distractor that quotes a stricter limit from memory. C and D exceed the code maximum and would fail inspection.'
      },
      {
        prompt: 'A bedroom on the second floor has a window measuring 20 inches wide by 24 inches high, installed 40 inches above the floor. For emergency egress, the IRC generally requires:',
        options: [
          'A. This window is compliant because it is 20 inches wide',
          'B. A minimum 5.7 sq ft opening area, a minimum width of 20 inches and a minimum height of 24 inches',
          'C. The opening must be at least 5.0 sq ft and the sill no higher than 44 inches',
          'D. Egress windows are required only in basements, not upper floors'
        ],
        answer: 'C',
        explanation: 'The IRC requires emergency egress windows in sleeping rooms on all floors, with a minimum net clear opening of 5.7 sq ft at grade or above grade (5.0 sq ft for below-grade), a minimum clear opening width of 20 inches and height of 24 inches, and a sill height no more than 44 inches above the floor. A misses the area requirement. B states the width and height correctly but omits the sill-height rule and the 5.7 sq ft area. D is wrong — egress is required in sleeping rooms on upper floors, not just basements.'
      },
      {
        prompt: 'During a framing inspection, an inspector must verify wall bracing in a braced wall line. Which of the following is the correct basis for the bracing requirement?',
        options: [
          'A. The contractor\u2019s discretion based on wind exposure',
          'B. The wall bracing provisions in the IRC, applied to the length of the braced wall line',
          'C. The footing size table alone',
          'D. A single brace at each end of the building regardless of length'
        ],
        answer: 'B',
        explanation: 'Wall bracing is governed by the IRC\u2019s bracing provisions, which specify the length and types of bracing required along each braced wall line based on factors such as seismic design category, wind speed and the building geometry. A leaves a structural requirement to contractor judgment, which the code does not allow. C confuses foundation sizing with lateral bracing. D ignores the length-of-wall-line basis that the provisions require — this is a scenario-and-application question from the heaviest domain on the exam.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The B1 is 60 questions in 120 minutes, open book, delivered by computer through Pearson VUE or ICC\u2019s remote proctoring, with a scaled passing score of 75. The most important thing to understand about the day is that the exam is a code-navigation race: 120 minutes for 60 questions is two minutes per question, and when most items require finding a provision or a table in the IRC, two minutes disappears fast. Arrive with a codebook that is the exact edition you selected at registration — 2024 or 2021 — and that you have tabbed during your preparation, because the codebook is your only permitted reference and a well-tabbed one is the difference between passing and running out of time. For remote proctoring, verify your webcam, microphone, connection and a clear desk on the same machine before exam day. At the seat, the discipline is simple: read each stem for the operative phrase, go straight to your tabs or the index, and if a lookup runs past sixty seconds, mark the question, move on and return. Bank the easy value questions — stairs, guards, egress, alarms — first, because they are the cheapest points and the pace is unforgiving. Two forms of ID with a matching name, a comfortable chair for two hours, and a water bottle for the breaks between sections round out the practical preparation. Results are typically available immediately for computer-based delivery, and on a pass your certificate prints or posts the same day, with the three-year renewal clock starting from that date.',
    bring: [
      'Two forms of identification, one a government-issued photo ID, names matching your exam registration exactly',
      'The correct International Residential Code edition you selected at registration, tabbed and ready — your only permitted reference',
      'Your exam confirmation and booking reference',
      'For remote proctoring: a webcam-equipped computer, private room, stable connection, and the proctoring software tested in advance',
      'Water for between sections (where the test centre allows)'
    ],
    leave: [
      'Phones, smartwatches and fitness trackers — locker or out of the room',
      'Any study notes, printed summaries, practice books or additional code references — only the IRC edition you registered is permitted',
      'Second monitors, which must be unplugged and turned away for remote proctoring',
      'Highlighters, pens and paper beyond what the centre provides or the proctor approves',
      'Any other person in the room during remote proctoring'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm the IRC edition on file matches the codebook you have been studying. Run the remote-proctoring system test on your actual machine, or confirm the test-centre address and travel time.' },
      { time: '24 hours before', detail: 'Light review of your tabbed sections and the recurring values. Do not re-read chapters — this exam is won on lookup speed, not fresh reading. Confirm the appointment.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin remote check-in, which includes ID, face and room scans and can take 15 minutes.' },
      { time: 'Check-in', detail: 'ID verification, agreement to the exam policies, and confirmation that the codebook is the registered edition. You are seated and the clock starts at 120 minutes.' },
      { time: '0-30 minutes', detail: 'Work the value and direct-knowledge questions first at a fast tempo. Bank the easy points before the table lookups eat the clock.' },
      { time: '30-100 minutes', detail: 'Work the scenario and table questions at two minutes each, using your tabs. If any lookup passes sixty seconds, mark the question and move on.' },
      { time: '100-120 minutes', detail: 'Return to flagged items, then review for careless errors. Submit rather than letting the clock expire — the scaled score depends on every answer you can bank.' }
    ],
    rules: [
      '60 questions in 120 minutes; passing standard is a scaled score of 75 on a 100-point scale.',
      'Open book: the only permitted reference is the edition of the IRC you selected at registration.',
      'Results are typically available immediately for computer-based delivery.',
      'The B1 credential is valid for three years and renews with continuing education units.',
      'ICC requires at least 10 days between retake attempts and charges the full exam fee each attempt.',
      'No experience, education or age prerequisite is required to sit the B1.',
      'State and local licensure may be required in addition to ICC certification — certification alone does not authorise inspection work everywhere.'
    ],
    afterwards:
      'On a pass, your B1 certificate is issued immediately and your credential is recorded in ICC\u2019s certification records, which employers verify directly. The credential is valid for three years and renews on a continuing-education cycle — roughly 1.5 CEUs for a single ICC certification — so diary the expiry the week you pass and plan the renewal credits from real inspection work rather than scrambling at the deadline. On a fail, you may retake after the 10-day wait, but pay the full exam fee again, so resist rebooking immediately. Use your score report to identify the weak domains — usually one or two — and spend two weeks drilling those specific code sections with timed lookups before spending the retake fee. For career progression, B1 is the entry credential; the combination inspector and plans examiner certifications build on it and are how inspectors move up the municipal pay scale.'
  }
};

export default data;
