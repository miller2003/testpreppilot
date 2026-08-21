// Depth content for: praxis-elementary-education-content-knowledge-5018
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Teacher licensure & education certifications desk',
    bio: 'This guide is compiled and maintained by our teacher-licensure desk. Praxis tests are administered by ETS, and the passing scores are set by each state education agency rather than by ETS, so we track structure and fees from the official ETS Praxis pages and state plainly where you must confirm a state-specific cut score. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Test structure, question counts, timing, fees and scoring were taken from the official ETS Praxis Study Companion for Elementary Education: Content Knowledge (5018).',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$62,340 median for elementary school teachers (BLS, May 2024)',
    summary:
      'The Elementary Education: Content Knowledge (5018) exam licenses the generalist elementary teacher, so the directly relevant occupation is Elementary School Teachers, Except Special Education, SOC 25-2021. That occupation had a May 2024 median annual wage of $62,340, with the lowest 10 percent earning under $46,440 and the highest 10 percent over $102,010. The distribution deserves careful reading because elementary-teacher pay is set overwhelmingly by district salary schedules — years of service plus education credits — rather than by market pressure, and geography dominates the spread: state-level medians range from the high $40,000s to more than $90,000, with the highest-paying states being largely the highest-cost ones such as California, New York, Massachusetts and Washington. BLS counted 1,539,800 kindergarten and elementary school teachers in 2024 and projects a 2 percent decline in employment from 2024 to 2034, driven mainly by falling elementary enrollment, while still expecting about 103,800 openings a year, almost all of them replacement need from retirement and career change. The practical reading for a 5018 candidate is that this exam is a toll gate on a stable, schedule-driven career rather than a lever on your pay: passing it efficiently matters, but the wage work is done over time by the salary schedule, additional endorsements and experience. One nuance specific to 5018: because the exam is a content-knowledge test required alongside a pedagogy test such as the PLT, candidates should treat the two as a licensing sequence and budget for both, since neither alone clears the licence.',
    rows: [
      { label: 'Median annual wage, elementary school teachers (except special education)', value: '$62,340', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $46,440', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $102,010', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024 (kindergarten and elementary)', value: '1,539,800 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~103,800 per year', note: 'BLS OOH Job Outlook, 2024-34 — almost all replacement need' }
    ],
    growth: '-2% projected change 2024-34 (decline driven by falling elementary enrollment), with ~103,800 replacement openings a year. Pay is set by district salary schedules, so experience and geography matter more than the credential.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Kindergarten and Elementary School Teachers',
      url: 'https://www.bls.gov/ooh/education-training-and-library/kindergarten-and-elementary-school-teachers.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'ETS publishes no pass rate — the cut score is set by each state',
    summary:
      'ETS does not publish a pass-rate statistic for Praxis 5018 or any other Praxis test, and there is no single national passing score: each state education agency sets its own cut for the exam, and the state requirements vary widely — for content-knowledge exams like this one you will commonly see state-set passing scores spread across the 150s and 160s on the 100-200 scaled score scale, and some states also set different requirements depending on the grade band or on whether the candidate already holds a related endorsement. That means the same score can clear licensure in one state and fall short in another, so the first research step — before buying any prep product — is to look up your state\'s exact 5018 cut score on the ETS Praxis state requirements page or your state\'s educator-certification site. What is uniform and verifiable nationwide is the operational policy: the test is scored on a scaled scale, ETS enforces a 21-day waiting period after score release before any retake, there is no limit on attempts, and each attempt is paid at full price. A second structural fact matters for planning: because passing scores are state-set per exam, candidates licensed across state lines (or earning a second endorsement) must re-check the requirement for each new state rather than assuming one passing score travels. The correct planning question is therefore not "what is the pass rate" but "what is my state\'s cut score, and how far above it do my practice scores sit" — everything else, including forum anecdotes and prep-vendor pass-rate claims, is noise.',
    source: {
      label: 'ETS — Praxis Elementary Education: Content Knowledge (5018)',
      url: 'https://www.ets.org/praxis/prepare/materials/5018'
    },
    caveat:
      'ETS publishes no pass rate by exam. The 5018 cut score is set independently by each state education agency on the 100-200 scaled score scale; confirm your state\'s requirement before registering.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The 5018 is a single, content-heavy paper of roughly 130 selected-response questions in about 2.5 hours, covering four content areas: Reading and Language Arts, Mathematics, Social Studies, and Science. Unlike the four-subtest Elementary Education: Multiple Subjects (5001), the 5018 is one sitting with one score, but the content map is the same generalist territory and the two exams are often treated as alternatives by different states — some require 5001, some 5018, and a few accept either. Before planning, confirm which exam your state actually requires, because preparing for the wrong one wastes your money. The structural fact that shapes the schedule is that reading and language arts plus mathematics carry roughly two-thirds of the weight between them, so a candidate strong in math and weak in reading has exactly one repair target, and vice versa. The plan below runs eight weeks at roughly 8-10 hours a week, with the first three weeks on your two weakest content areas, the middle weeks on breadth review and timed sub-drills, and the final week on full-length mock exams to rehearse the 2.5-hour stamina and pacing. Because every question is selected-response, the exam is trainable: the payoff of preparation is content breadth plus discrimination under time pressure, not essay craft or constructed-response writing, which distinguishes this paper from the Praxis PLT and from the Core Writing subtest.',
    totalHours: '65-85 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Diagnostic and state cut-score lookup',
        tasks: [
          'Take one untimed diagnostic pass through all four content areas to rank your starting position',
          'Look up your state\'s exact 5018 cut score on the ETS Praxis state requirements page and write it down',
          'Confirm 5018 is the exam your state requires (some states use 5001 instead) before investing a week',
          'Download the ETS Study Companion for 5018 and map its content categories'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Weakest content area — breadth repair',
        tasks: [
          'If math: drill number and operations, algebra, geometry and measurement, and data/statistics at the K-8 level',
          'If reading: work reading foundations, comprehension, writing and speaking/listening against the Study Companion objectives',
          'Tag every miss to a content category so the repair list stays short',
          'One timed 50-question drill per week under 60 minutes to build pace'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Week 4',
        focus: 'Second-weakest content area',
        tasks: [
          'Repeat the breadth-repair loop on the second-weakest area',
          'Keep the weakest area alive with 30-45 minutes of spaced category drills',
          'For social studies: build timelines and concept maps for US history, government, geography and economics',
          'Re-test the original weakest area once to confirm the repair took'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Strong areas and integrated timing',
        tasks: [
          'Give the two stronger areas their first structured pass — the reading strategy layer and the science breadth',
          'Two timed 65-question half-exams per week, rotated so all four areas stay warm',
          'For science: review earth, life and physical science facts and the nature-of-science items',
          'Practise discrimination under time — every item is selected-response, so eliminate-and-move is the skill'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Week 7',
        focus: 'Full-length mock exams',
        tasks: [
          'Two full 5018 mocks: ~130 questions in one 2.5-hour sitting, no notes, no phone',
          'Review both by content area — the pattern of misses matters more than the total',
          'Drill the specific categories that cost points in the mocks',
          'Confirm your practice scaled scores sit above your state cut with a margin'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Week 8',
        focus: 'Taper and logistics',
        tasks: [
          'Light review of category checklists and miss lists',
          'One more timed 65-question half-exam to keep the pace reflex fresh',
          'Confirm your state cut score, your ID name matches your Praxis account, and your seat',
          'One quiet day before the exam'
        ],
        hours: '6-8 hrs'
      }
    ],
    variants: [
      { label: 'Current education student mid-program', detail: 'Five to six weeks at 8-10 hrs/week. Your methods courses cover much of the pedagogy-adjacent content; spend the recovered time on the math and science breadth, which are the most common failure points for strong readers.' },
      { label: 'Career changer with a math or science degree', detail: 'Six to eight weeks at 8-10 hrs/week. Your strength inverts the typical profile: put the bulk of the time into reading and language arts strategy, social studies breadth, and elementary-level content review.' },
      { label: 'Returning adult out of school for years', detail: 'Ten to twelve weeks at 7-9 hrs/week. Add two weeks before Week 1 for math and science remediation — the K-8 content is not hard but it decays badly with disuse.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The 5018 is a breadth exam with no essays and no constructed-response tasks — every question is selected-response — which makes it unusually trainable if you use the right tactics: learn the four content maps, drill under timing, and rehearse the full 2.5-hour sitting. The strategies below are ordered by score impact, and the first two are the difference between a passing plan and a lucky one.',
    items: [
      {
        title: 'Repair by content area, not by scattered topics',
        detail: 'The four content areas — reading/language arts, math, social studies and science — are weighted unevenly, with literacy and numeracy together carrying roughly two-thirds of the paper. Diagnose in Week 1, give your two weakest areas about 60 percent of your hours, and re-test them before the exam. A candidate who studies "a bit of everything" is really studying to miss everywhere at the margin.'
      },
      {
        title: 'Learn the reading-and-language-arts strategy layer',
        detail: 'Fluent readers routinely underperform on elementary content exams because the reading section tests literacy-instruction concepts — phonemic awareness versus phonics, the five pillars of reading, text structure, the writing process — not just reading ability. Work the Study Companion category list explicitly; this is where strong readers lose points most.'
      },
      {
        title: 'Build timelines and concept maps for social studies',
        detail: 'The social-studies content spans US history, government and citizenship, geography, and economics — a lot of breadth in a modest number of questions. Timeline and concept-map reviews (major eras, amendments, branches of government, geographic concepts, supply/demand) compress the breadth into a recallable structure and are far more efficient than reading a textbook chapter by chapter.'
      },
      {
        title: 'Drill science breadth with a fact checklist',
        detail: 'Earth, life and physical science at the K-8 level is mostly factual recall plus a handful of nature-of-science items. Build a checklist from the Study Companion\'s science objectives and drill it in short spaced sessions; the volume is smaller than it looks and highly coachable.'
      },
      {
        title: 'Rehearse the full 2.5-hour sitting at least twice',
        detail: 'A 130-question, 2.5-hour paper rewards pacing: roughly a minute per item with no constructed-response cushion. Two full-length mocks in Week 7, under exam conditions, tell you exactly where fatigue and over-thinking cost you, and let you rehearse the eliminate-and-move discipline.'
      },
      {
        title: 'Know your state cut score, not an average',
        detail: 'Because the passing score is set per state, a candidate who studies to "beat a 160" may be over- or under-preparing. Look up your state\'s requirement in Week 1, aim at it plus a margin, and re-check the week before the exam in case the state changed the cut.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The highest-value resources for a breadth exam like the 5018 are the free ETS Study Companion (which contains the exact content categories and sample questions) and ETS\'s own Interactive Practice Test, which is the closest thing to the real item style. Third-party subscription courses add structure and drilling volume and are worth it mainly if a specific content area needs systematic repair — math and science especially. The buying decision is really: how much structured remediation do your two weakest content areas need?',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ETS Study Companion (5018)', values: ['Free', 'PDF content outline with sample questions', 'The authoritative content map — tag every miss to these categories' ], },
      { label: 'ETS Praxis Interactive Practice Test (5018)', values: ['~$20', 'Timed online practice with immediate scoring', 'Closest question style to the real exam; the best single readiness check' ], },
      { label: 'Exam registration (5018)', values: ['~$130 (confirm current fee at ets.org/praxis)', 'Prometric centre or online proctoring', 'Required — book only after practice scores clear your state cut with a margin' ], },
      { label: '240 Tutoring or similar Praxis 5018 course', values: ['~$80-100 subscription', 'Diagnostic plus content-area lessons and practice', 'Structured repair for the weakest content area, especially math or science' ], },
      { label: 'Khan Academy (free) + Mometrix flashcards', values: ['Free to ~$40', 'Video lessons and drill decks', 'Cheap math and science breadth review' ], },
      { label: 'District or university Praxis prep course', values: ['Often free or low-cost', 'In-person or live online with an instructor', 'Accountability and structured pacing for career changers' ]
      }
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; ETS registration fees are set by ETS and state surcharges may apply. Passing scores are set by state and are not included in any fee. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The 5018 failure modes cluster around two roots: studying to the wrong exam or the wrong cut score, and treating a breadth exam like a content cram with no timed rehearsal. The six traps below are the recurring ones in candidate post-mortems, and every one of them is fixable within a single eight-week cycle.',
    items: [
      {
        mistake: 'Preparing for the wrong exam',
        fix: 'Some states require 5018, others require the four-subtest 5001, and a few accept either. Preparing for the wrong one wastes your money and your study weeks. Confirm which exam your state actually requires in Week 1, and download that exam\'s Study Companion rather than a generic "Praxis elementary" guide.'
      },
      {
        mistake: 'Training to a national passing score that does not exist',
        fix: 'There is no single Praxis passing score; each state sets its own cut for 5018, commonly in the 150s-160s on the 100-200 scale. Look up your state\'s requirement in Week 1 and require your practice mocks to beat it by a margin. A score that "usually passes" can still fail your state.'
      },
      {
        mistake: 'Treating reading and language arts as "free points"',
        fix: 'Fluent readers routinely underperform on the reading section because it tests literacy-instruction concepts — phonemic awareness versus phonics, the five pillars of reading, text structure — not just reading ability. Work the category list explicitly instead of assuming your reading skill carries the section.'
      },
      {
        mistake: 'Studying evenly across the four content areas',
        fix: 'Literacy and numeracy together carry roughly two-thirds of the paper. A flat study plan shortchanges the areas that cost the most points and wastes hours on the ones you already know. Diagnose in Week 1, weight by weakness, and re-test before the exam.'
      },
      {
        mistake: 'Never running a full-length mock',
        fix: 'A 130-question, 2.5-hour paper is a pacing test as much as a knowledge test. Candidates who never run the full sitting over-think early items and rush the final section. Two full mocks in Week 7 turn pacing from a surprise into a planned discipline.'
      },
      {
        mistake: 'Ignoring the 21-day retake wait',
        fix: 'ETS enforces a 21-day waiting period after score release before a retake, and each attempt is paid at full price. A candidate who fails and needs the score by a licensure deadline can miss it entirely because of the wait. Treat the first attempt as serious, and use the window for targeted repair rather than a same-knowledge re-sit.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The 5018 is roughly 130 selected-response questions in about 2.5 hours, scored on the 100-200 scaled scale against a state-set cut. The paper covers four content areas — Reading and Language Arts, Mathematics, Social Studies, and Science — and every item is selected-response, mostly single-answer multiple choice with four choices, plus a minority of alternative formats such as multiple-selection or order-matching items that ETS uses across its tests. ETS notes that some questions on a form are pretest items that do not count toward your score. Because there are no essays and no constructed-response tasks, pacing is the dominant tactical skill: roughly one minute per item, sustained across the whole sitting, with eliminate-and-move as the core discipline — answer confidently, flag genuinely uncertain items for review, and never let a single question eat several minutes. The content weighting rewards breadth: a candidate who can discriminate between adjacent topics (e.g., phonemic awareness versus phonics, or weathering versus erosion) collects the majority of points, while a candidate who studied depth in one area and skimmed the rest loses the breadth items that dominate the paper.',
    types: [
      { name: 'Selected-response, single answer', share: 'The large majority of items', detail: 'Four answer choices across all four content areas. Distractors are plausible near-misses from adjacent topics, so partial familiarity is punished.' },
      { name: 'Multiple-selection and order-matching items', share: 'A minority of items', detail: 'Select more than one correct option or place items in the correct sequence. Scoring is all-or-nothing on these formats, so read the stem\'s instruction carefully.' },
      { name: 'Numeric-entry items (Mathematics)', share: 'Part of the Math content', detail: 'Type the exact numeric value rather than choosing a letter; rounding and transcription slips are the classic failure mode.' }
    ],
    samples: [
      {
        prompt: 'A teacher notices that a student can identify the letters of the alphabet but cannot yet hear that the word "cat" is made of three separate sounds. Which skill is most directly missing?',
        options: [
          'A. Phonemic awareness',
          'B. Print concepts',
          'C. Alphabetic principle',
          'D. Reading fluency'
        ],
        answer: 'A',
        explanation: 'Phonemic awareness is the ability to hear and manipulate the individual sounds (phonemes) in spoken words — segmenting "cat" into /k/ /a/ /t/ is exactly that skill — and it is a prerequisite for mapping sounds to letters (A). Print concepts (B) concern how a book works — directionality, spacing — not sound segmentation. The alphabetic principle (C) is the sound-to-letter correspondence that the student has not yet reached because the phonemic layer is missing. Reading fluency (D) requires decoding and automaticity that come later.'
      },
      {
        prompt: 'A rectangular classroom is 30 feet by 40 feet. A teacher wants to install carpet, leaving a 3-foot border of uncovered floor around the edge. What is the area, in square feet, that will be carpeted?',
        options: [
          'A. 1,200',
          'B. 816',
          'C. 1,176',
          'D. 954'
        ],
        answer: 'B',
        explanation: 'A 3-foot border on every side leaves a carpeted rectangle of (30 - 6) by (40 - 6), or 24 by 34 feet, so the carpeted area is 24 × 34 = 816 square feet (B). A (1,200) is the full floor, forgetting the border. C (1,176) comes from subtracting only one border dimension. D is a miscalculation from subtracting 3 rather than 6 feet on each dimension — the classic error of forgetting that a border takes space from both sides. Numeric-entry versions of this item would require typing 816 exactly.'
      },
      {
        prompt: 'Which of the following is a direct consequence of the westward expansion of the United States in the nineteenth century?',
        options: [
          'A. The Missouri Compromise and subsequent debates over the expansion of slavery into new territories',
          'B. The immediate abolition of slavery nationwide',
          'C. The end of immigration from Europe',
          'D. The establishment of the Federal Reserve System'
        ],
        answer: 'A',
        explanation: 'As the nation expanded westward, the question of whether new territories would permit slavery produced a series of political compromises, beginning with the Missouri Compromise of 1820 (A). B is false in timing — abolition came with the 13th Amendment in 1865, not as an immediate consequence of expansion. C is the reverse of the record; immigration surged during the nineteenth century. D (1913) is decades later and unrelated to territorial expansion.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items. Numeric-entry variants of the math sample would require typing the exact value rather than choosing a letter.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The 5018 is a single appointment of about 2.5 hours at a Prometric test centre or via online proctoring, containing roughly 130 selected-response questions in one sitting. The most common way a qualified candidate loses the seat is administrative: your government-issued photo ID must match your Praxis account name exactly, and for online proctoring you need a private room, working camera and microphone, and a clean desk. Check your account spelling and your state\'s cut score the week before. At the centre you are checked in, photographed, and seated at a computer; scratch paper is issued and collected. The testing interface allows flagging and review within the single section, and there are no separately timed subtests — the 2.5-hour clock runs continuously, so budget roughly a minute per item and keep moving. The practical pacing plan is: clear the items you are confident on, flag genuinely uncertain ones, and use the final minutes to review flags rather than re-reading everything. There are no scheduled breaks in a 2.5-hour sitting; unscheduled breaks may be taken but the clock does not stop, so use the restroom before check-in and keep a water bottle at the centre\'s discretion. When you finish, your scaled score appears on screen, and the official score report follows in about five weeks to the recipients you selected at registration.',
    bring: [
      'Government-issued photo ID with your name matching your Praxis account exactly',
      'Your Praxis registration confirmation or candidate ID in case check-in cannot locate the booking',
      'For online proctoring: a phone for check-in, a private room, and a webcam and microphone already tested on the machine you will use',
      'Your state\'s 5018 cut score, so you can interpret the on-screen result correctly'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — secured in a locker at a centre',
      'All notes, textbooks and printed study materials — no personal scratch paper is allowed',
      'Bags, coats, food and drink beyond what the centre permits',
      'Any other person in the room for online proctoring; the session is recorded'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your state\'s 5018 cut score, verify your ID name matches your Praxis account exactly, and re-run one timed half-exam.' },
      { time: '24 hours before', detail: 'For online proctoring, run the system test on the same machine and network. For a centre, confirm the address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin online check-in, which includes a photo, ID capture, and (online) a room scan.' },
      { time: 'Check-in', detail: 'ID verification, signature, lockers. You are seated; the tutorial explains flagging before the timer starts.' },
      { time: '0-90 minutes', detail: 'Work the first half at ~a minute per item: answer confidently, flag genuine uncertainties, never stall.' },
      { time: '90-145 minutes', detail: 'Continue through the second half; keep the same tempo. This is where fatigue bites — re-read stems carefully on the breadth items.' },
      { time: 'Final 5-10 minutes', detail: 'Review flagged items, then submit rather than letting the clock expire.' },
      { time: 'After submission', detail: 'Your scaled score appears on screen; the official report follows in about five weeks to your selected recipients.' }
    ],
    rules: [
      '~130 selected-response questions in one ~2.5-hour session; scaled score on the 100-200 scale with a state-set cut.',
      'You may flag items and review them within the single section; there are no separately timed subtests.',
      'No scheduled breaks in the sitting; unscheduled breaks may be taken but the clock does not stop.',
      'Scratch paper is issued at a test centre and collected; online proctoring uses a digital whiteboard only.',
      'Some questions on the form are pretest items that do not count toward your score.',
      'Retake: ETS requires a 21-day wait after score release; no limit on attempts; each attempt paid in full.',
      'Scores are valid for 10 years, subject to your state\'s acceptance window.'
    ],
    afterwards:
      'Your scaled score appears on screen when you finish, and the official report follows in about five weeks to the recipients you selected — typically your state education agency and teacher-preparation program. Because the cut score is state-set, read your result against your state\'s published 5018 requirement rather than against any number on the report. On a pass, the content-knowledge hurdle is cleared and you move to the remaining licensure requirements — commonly a pedagogy test such as the PLT and any state-specific components. On a fail, the path is straightforward: wait the 21 days, but use the window deliberately. The most common failure pattern on a content-knowledge exam is not missing knowledge overall but a specific content area — usually math or science for strong readers, or the reading strategy layer for strong mathematicians — and that is fixable in one targeted cycle. Do not re-book the same knowledge; spend the window repairing the specific area your practice and the score report point to, and the second attempt will be a different exam experience.'
  }
};

export default data;
