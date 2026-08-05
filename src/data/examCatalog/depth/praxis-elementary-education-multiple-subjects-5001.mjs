// Depth content for: praxis-elementary-education-multiple-subjects-5001
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Teacher licensure & education certifications desk',
    bio: 'This guide is compiled and maintained by our teacher-licensure desk. Praxis tests are administered by ETS, and the passing scores are set by each state education agency rather than by ETS, so we track structure and fees from the official ETS Praxis pages and state plainly where you must confirm a state-specific cut score. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Subtest structure, question counts, timing, fees and scoring were taken from the official ETS Praxis Study Companion for Elementary Education: Multiple Subjects (5001) and the companion pages for subtests 5002-5005.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$62,340 median for elementary school teachers (BLS, May 2024)',
    summary:
      'The Elementary Education: Multiple Subjects (5001) exam licenses the generalist elementary teacher — the person who teaches reading, writing, mathematics, social studies and science to children in grades K-6 — so the directly relevant occupation is Elementary School Teachers, Except Special Education, SOC 25-2021. That occupation had a May 2024 median annual wage of $62,340, with the lowest 10 percent earning under $46,440 and the highest 10 percent over $102,010. Reading the distribution carefully matters because elementary teaching pay is set overwhelmingly by district salary schedules rather than market pressure: pay advances with years of service and education credits, not with test scores or scarcity, which is why the credential gates entry to the profession but does not, by itself, move your starting salary. Geography dominates the spread — BLS state data shows median elementary-teacher wages ranging from roughly $47,000 in the lowest-paying states to more than $90,000 in states like California, New York and Massachusetts, and the highest-paying districts tend to be high-cost ones where the real purchasing power gap narrows. BLS counted 1,539,800 kindergarten and elementary school teachers in 2024 and projects a 2 percent decline in employment from 2024 to 2034, driven largely by falling elementary enrollment, while still expecting about 103,800 openings a year — almost all of them replacement need from retirement and career change. The practical reading for a 5001 candidate is that the exam is a necessary toll gate on a stable, schedule-driven career rather than a lever on your pay: pass it efficiently, and let your district\'s salary schedule, additional endorsements and experience do the wage work over time.',
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
      'ETS does not publish a pass-rate statistic for the Elementary Education: Multiple Subjects test or any other Praxis exam, and no single national passing score exists: each state education agency sets its own cut score for each of the four subtests, and the ranges differ by subtest and by state. In practice you will see state-set passing scores for these subtests spread across the low-to-mid 150s to the low 170s on the 100-200 scaled score scale, with some states setting the same cut for all four subtests and others requiring different scores for Reading and Language Arts versus Science. That means the same set of subtest scores can satisfy licensure in one state and fall short in another, which is why the first research task — before buying any prep product — is to look up the four cut scores for the state where you intend to be licensed, on the ETS Praxis state requirements page or your state\'s educator-certification site. What is uniform and verifiable nationwide is the operational policy: each subtest is scored independently on a scaled scale, you must meet the state cut on each subtest, a partial pass lets you retake only the failed subtest(s), ETS enforces a 21-day waiting period after score release before any retake, and there is no limit on attempts. The two traps that follow from this design are (1) treating the four subtests as one exam and studying evenly, when a candidate who is strong in math and weak in science has exactly one problem to fix, and (2) assuming a score that "usually passes" passes everywhere. Neither trap costs money — they cost study weeks aimed at the wrong target.',
    source: {
      label: 'ETS — Praxis Elementary Education: Multiple Subjects (5001)',
      url: 'https://www.ets.org/praxis/prepare/materials/5001'
    },
    caveat:
      'ETS publishes no pass rate by exam. Cut scores are set independently by each state on the 100-200 scaled score scale for each of the four subtests; confirm your state\'s four cut scores before registering.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The 5001 is not one exam but four separately timed and separately scored subtests: Reading and Language Arts (5002, 80 selected-response questions, 90 minutes), Mathematics (5003, 50 questions including numeric-entry items, 65 minutes), Social Studies (5004, 60 questions, 60 minutes), and Science (5005, 55 questions, 60 minutes) — about 245 questions and 4 hours 35 minutes in total when taken together, with a scientific on-screen calculator provided for the Mathematics subtest. Because each subtest has its own state-set cut score and can be retaken independently, the single most important planning decision is diagnostic: take one timed subtest of each kind in the first week, rank them, and give the two weakest subtests roughly 60 percent of your study time. The plan below runs ten weeks at 8-10 hours a week and assumes you are a general-education candidate — that is, you already read and write English fluently, so the Reading and Language Arts subtest needs strategy rather than remediation, while math and science need genuine content review if they have decayed since school. A structural fact shapes the schedule: the Mathematics subtest covers number and operations, algebraic thinking, geometry and measurement, and data, statistics and probability at the K-8 level, and the Science subtest covers earth, life and physical science including the nature of science — both are breadth exams, so the study plan front-loads the breadth review in the middle weeks and reserves the final week for a full-length combined mock of all four subtests in one sitting, because stamina across 4.5 hours is itself a scored factor.',
    totalHours: '85-105 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Diagnostic and state cut-score lookup',
        tasks: [
          'Take one timed subtest of each kind (5002-5005) to rank your four starting positions',
          'Look up your state\'s four cut scores on the ETS Praxis state requirements page and write them where you can see them daily',
          'Allocate study time by weakness: the two weakest subtests get roughly 60 percent',
          'Download the 5001 Study Companion and its four subtest companions as your content map'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Weakest subtest — breadth repair',
        tasks: [
          'Work the content categories of the weakest subtest against the Study Companion objectives',
          'For math: drill number and operations, algebra, geometry/measurement, and data/statistics with the on-screen calculator',
          'For science: review earth, life and physical science facts and the nature-of-science items',
          'Tag every miss to a category so the repair list stays short'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Week 4',
        focus: 'Second-weakest subtest',
        tasks: [
          'Repeat the breadth-repair loop on the second-weakest subtest',
          'Keep the weakest subtest alive with 30-45 minutes of spaced category drills',
          'For social studies: build a timeline and concept map for US history, government, geography and economics',
          'Re-test the original weakest subtest once to confirm the repair took'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Strong subtests and integrated timing',
        tasks: [
          'Give the two stronger subtests their first structured pass — Reading and Language Arts strategy items, and the remaining content areas',
          'Two full timed subtests per week, rotated so all four stay warm',
          'Drill numeric-entry math items and eliminate rounding slips',
          'Read the constructed-response-free format carefully: all four subtests are selected-response, so speed and discrimination matter more than writing'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Week 7',
        focus: 'Full-length combined rehearsal',
        tasks: [
          'One full 5001 mock: all four subtests in one sitting, ~4.5 hours, with the real break schedule',
          'Use only the on-screen calculator for math; no phone; replicate centre conditions',
          'Review by subtest and category — the pattern of misses under fatigue matters more than the total',
          'Drill the specific categories that cost points'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Weeks 8-9',
        focus: 'Weak-subtest second repair',
        tasks: [
          'Re-run the breadth review on any subtest still below your state cut in the mock',
          'Two more full timed subtests per week plus one combined timed half-session',
          'For math: re-drill geometry and measurement formulas and data interpretation',
          'For science: re-drill the factual categories that slip under time pressure'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Week 10',
        focus: 'Taper and logistics',
        tasks: [
          'Light review only: category checklists, formula sheets, and miss lists',
          'Confirm your state\'s four cut scores, your ID name matches your Praxis account, and your seat',
          'Rehearse the on-screen calculator one last time in a timed math block',
          'One quiet day before the exam'
        ],
        hours: '6-8 hrs'
      }
    ],
    variants: [
      { label: 'Current education major mid-program', detail: 'Six to seven weeks at 8-10 hrs/week. Your methods courses cover much of the pedagogy-adjacent content; spend the recovered time on the math and science breadth subtests, which are the most common failure points for strong readers.' },
      { label: 'Career changer with a math or science degree', detail: 'Six to eight weeks at 8-10 hrs/week. Your strength inverts the typical profile: protect the math subtest with light review and put the bulk of the time into Reading and Language Arts strategy, social studies breadth, and elementary-level pedagogy content.' },
      { label: 'Returning adult out of school for years', detail: 'Twelve to fourteen weeks at 7-9 hrs/week. Add three weeks before Week 1 for math and science remediation — the K-8 content is not hard but it decays badly with disuse, and the breadth is larger than you remember.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The 5001 is a breadth exam with no essays and no constructed-response items — every question is selected-response or numeric entry — which makes it unusually trainable if you use the right tactics: learn the four content maps, drill under per-subtest timing, and rehearse the full 4.5-hour sitting. The strategies below are ordered by score impact, and the first two are the difference between a passing plan and a lucky one.',
    items: [
      {
        title: 'Repair by subtest, not by topic across the whole exam',
        detail: 'The four subtests are independently scored against four separate state cut scores, so your plan should be built from your weakest subtest, not from a flat content list. Spend roughly 60 percent of your study time on the two weakest subtests, repair them first, and confirm with a re-test before the exam. A candidate who studies "a bit of everything" is really studying to miss everywhere at the margin.'
      },
      {
        title: 'Drill math with the on-screen calculator from day one',
        detail: 'The Mathematics subtest (5003) provides a scientific on-screen calculator and does not permit personal devices, and it mixes numeric-entry items where you must type the exact value. Practising with a handheld or phone calculator trains a workflow you cannot use on the day. From the first timed block, use only the on-screen tool and drill numeric-entry items specifically until rounding and transcription slips disappear.'
      },
      {
        title: 'Learn the reading-and-language-arts strategy layer',
        detail: 'The 5002 subtest covers reading foundations, comprehension, writing and speaking/listening — and much of it is strategy, not knowledge: phonemic awareness versus phonics, the five pillars of reading, text structure, and the writing process. Candidates who treat it as "I already know how to read" lose the strategy items. Work the Study Companion\'s category list explicitly; this subtest is where fluent readers underperform most.'
      },
      {
        title: 'Build timelines and concept maps for social studies',
        detail: 'The 5004 subtest spans US history, government and citizenship, geography, and economics — a lot of breadth in 60 questions. Timeline and concept-map reviews (major eras, amendments, branches of government, geographic concepts, supply/demand) compress the breadth into a recallable structure and are far more efficient than reading a textbook chapter by chapter.'
      },
      {
        title: 'Rehearse the full four-and-a-half-hour sitting at least once',
        detail: 'All four subtests in one appointment is a stamina problem as much as a knowledge problem: candidates are measurably sloppier in subtest four. One full-length combined mock in Week 7, under the same break and no-phone conditions, exposes where fatigue costs you and lets you pace accordingly — for example, treating each subtest\'s clock as sacred rather than stealing time to review earlier sections (which is not allowed anyway).'
      },
      {
        title: 'Know your four cut scores, not an average',
        detail: 'Because passing scores are set per subtest and per state, a candidate who studies to "beat a 160" may be over- or under-preparing by subtest. Look up your state\'s requirement for all four subtests in Week 1, aim at each target plus a small margin, and re-check the list the week before the exam in case your state changed a cut score.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The highest-value resources for a breadth exam like the 5001 are the free ETS Study Companions (which contain the exact content categories for each subtest and sample questions) and ETS\'s own Interactive Practice Test, which is the closest thing to the real item style. Third-party subscription courses add structure and drilling volume and are worth it mainly if a specific subtest needs systematic repair — math and science especially. The buying decision is really: how much structured remediation do your two weakest subtests need?',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ETS Study Companion (5001) + subtest companions (5002-5005)', values: ['Free', 'PDF content outlines with sample questions', 'The authoritative content map — tag every miss to these categories' ], },
      { label: 'ETS Praxis Interactive Practice Test (5001)', values: ['~$20', 'Timed online practice with immediate scoring', 'Closest question style to the real exam; best single readiness check' ], },
      { label: 'Combined test registration (5001)', values: ['$180 (vs. $64 per subtest taken alone)', 'Prometric centre or online proctoring', 'Required — the combined booking covers all four subtests in one sitting' ], },
      { label: '240 Tutoring or similar Praxis 5001 course', values: ['~$80-100 subscription', 'Diagnostic plus subtest-by-subtest lessons and practice', 'Structured repair for the weakest subtest, especially math or science' ], },
      { label: 'Khan Academy (free) + Mometrix flashcards', values: ['Free to ~$40', 'Video lessons and drill decks', 'Cheap math and science breadth review' ], },
      { label: 'District or university Praxis prep course', values: ['Often free or low-cost', 'In-person or live online with an instructor', 'Accountability and structured pacing for career changers' ]
      }
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; ETS registration fees are set by ETS and state surcharges may apply. Passing scores are set by state and are not included in any fee. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'Because the 5001 is four separate exams wearing one name, almost every recurring failure mode comes from treating it as a single content test: studying evenly across subtests, ignoring per-subtest cut scores, neglecting the on-screen calculator, and skipping the full-length rehearsal. The six traps below are the ones we see most often in candidate reports and forum post-mortems, and all of them are fixable in one study cycle.',
    items: [
      {
        mistake: 'Studying the four subtests evenly',
        fix: 'Each subtest is scored independently against its own state cut and can be retaken independently, so a flat plan wastes your strongest subtest\'s time and shortchanges your weakest. Diagnose in Week 1, give the two weakest subtests about 60 percent of your hours, and re-test them before the exam.'
      },
      {
        mistake: 'Training to a national passing score that does not exist',
        fix: 'There is no single Praxis passing score; each state sets its own cut for each subtest, commonly spread across the 150s and 160s. Look up your state\'s four cuts in Week 1 and aim at each one plus a margin. A score that "usually passes" can still fail your state.'
      },
      {
        mistake: 'Practising math with a handheld calculator',
        fix: 'The Mathematics subtest provides an on-screen scientific calculator and allows no personal devices, and numeric-entry items require typing the exact value. Practising with a physical calculator trains a workflow that is unavailable on exam day. Use only the on-screen tool from the first timed block.'
      },
      {
        mistake: 'Treating Reading and Language Arts as "free points"',
        fix: 'Fluent readers routinely underperform on 5002 because it tests literacy-instruction concepts — phonemic awareness versus phonics, the five pillars of reading, text structure, the writing process — not just reading ability. Work the category list explicitly instead of assuming your reading skill carries the subtest.'
      },
      {
        mistake: 'Skipping the combined rehearsal',
        fix: 'Four subtests in one ~4.5-hour appointment is a stamina test. Candidates who never run the full sitting are visibly sloppier in subtest four. One full combined mock in Week 7, with the real break schedule, turns fatigue from a surprise into a planned pacing input.'
      },
      {
        mistake: 'Ignoring the 21-day retake wait and per-subtest retake',
        fix: 'ETS enforces a 21-day wait after score release, each retake is paid at full price, and — the good news — a partial pass means you only re-sit the failed subtest(s). Plan the first attempt seriously, but do not panic-fail the whole 5001: a pass on three subtests and a retake on one is a normal, cheap outcome, not a disaster.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The 5001 is about 245 selected-response and numeric-entry questions across four separately timed subtests — roughly 80 questions in 90 minutes for Reading and Language Arts (5002), 50 in 65 minutes for Mathematics (5003, with an on-screen scientific calculator), 60 in 60 minutes for Social Studies (5004), and 55 in 60 minutes for Science (5005) — with a total time of about 4 hours 35 minutes when taken together. Every subtest is scored independently on the 100-200 scaled scale against a state-set cut, and ETS notes that some questions on a form are pretest items that do not count toward your score. The item styles are single-selection multiple choice with four answer choices plus a handful of innovative formats — multiple selection, order matching and grids — and numeric-entry questions on the math subtest. Because all four subtests are selected-response, pacing is the dominant tactical skill: roughly 65-70 seconds per reading item, about 75 seconds per math item, 60 seconds per social-studies item, and about 65 seconds per science item. There are no essays and no constructed-response tasks, which distinguishes this exam from the Praxis PLT and from the Core Writing subtest — the payoff of preparation is content breadth plus discrimination under time, not essay craft. The subtest format also means you cannot carry time from a strong subtest into a weak one: each clock is fixed and sections are not cross-navigable, so the only pacing strategy that works is per-subtest budgeting.',
    types: [
      { name: 'Selected-response, single answer', share: 'The large majority of items across all four subtests', detail: 'Four answer choices; the correct response rests on the content categories of the specific subtest. Distractors are plausible near-misses from adjacent topics.' },
      { name: 'Multiple-selection and order-matching items', share: 'A minority of items (ETS: at least four innovative formats)', detail: 'Select more than one correct option or place items in the correct sequence. Scoring is all-or-nothing on these formats, so read the stem\'s instruction carefully.' },
      { name: 'Numeric-entry items (Mathematics only)', share: 'Part of the 50-item Math subtest', detail: 'Type the exact numeric value rather than choosing a letter; rounding and transcription slips are the classic failure mode, and the on-screen calculator is your tool.' }
    ],
    samples: [
      {
        prompt: 'A first-grade teacher works with a student who can orally blend and segment sounds in spoken words but cannot yet connect those sounds to printed letters. According to the science of reading, which skill is this student developing that will most directly support later phonics instruction?',
        options: [
          'A. Phonemic awareness',
          'B. Print concepts',
          'C. Morphological awareness',
          'D. Reading fluency'
        ],
        answer: 'A',
        explanation: 'Phonemic awareness is the ability to hear, identify and manipulate the individual sounds (phonemes) in spoken words — exactly what blending and segmenting sounds orally tests — and it is a prerequisite that supports phonics, which connects sounds to printed letters (A). Print concepts (B) concern how a book works — directionality, title, spacing — not sound manipulation. Morphological awareness (C) is about meaningful word parts like prefixes and roots. Reading fluency (D) requires decoding and automaticity, which come after the sound-to-letter connection this student has not yet made.'
      },
      {
        prompt: 'A rectangular garden measures 8 feet by 12 feet. A path 2 feet wide is built around the outside of the garden. What is the area, in square feet, of the path alone?',
        options: [
          'A. 96',
          'B. 64',
          'C. 88',
          'D. 192'
        ],
        answer: 'A',
        explanation: 'The 2-foot path adds 2 feet on each side, so the outer rectangle is (8 + 4) by (12 + 4), or 12 by 16 feet, with an area of 12 × 16 = 192 square feet. The garden itself is 8 × 12 = 96 square feet. The path alone is the difference: 192 - 96 = 96 square feet (A). D (192) is the outer rectangle only — the classic error of forgetting to subtract the garden. B (64) confuses the added perimeter (2 × 4 = 8 added feet, or 8 × 8) with area. C (88) comes from subtracting 8 rather than 96, treating the added dimension rather than the whole garden as what must be removed. Numeric-entry versions of this item would require typing 96 exactly.'
      },
      {
        prompt: 'Which of the following was a direct consequence of the Industrial Revolution in the United States during the nineteenth century?',
        options: [
          'A. The rapid growth of cities and an industrial working class',
          'B. The immediate end of agricultural production',
          'C. The abolition of state-chartered banks',
          'D. A sharp decline in immigration from Europe'
        ],
        answer: 'A',
        explanation: 'Industrialization drew workers from farms into factory towns and cities, creating rapid urban growth and an industrial working class (A). B is false in degree — agriculture continued and even expanded, and the share of farm labour fell gradually. C never happened; state-chartered banks persisted through the era (the free-banking era expanded them). D is the reverse of the historical record: immigration from Europe surged during industrialisation to supply factory labour.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items. Numeric-entry variants of the math sample would require typing the exact value rather than choosing a letter.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The Combined 5001 is one appointment of about 4 hours 35 minutes at a Prometric test centre or via online proctoring, containing all four subtests in sequence — Reading and Language Arts (90 minutes), Mathematics (65 minutes), Social Studies (60 minutes), and Science (60 minutes) — with scheduled breaks between sections. The subtests are separately timed and separately scored, and you cannot return to a section whose clock has expired or carry time across sections. The most common way a qualified candidate loses the seat is administrative: your government-issued photo ID must match your Praxis account name exactly, and for online proctoring you need a private room, working camera and microphone, and a clean desk. Check your account spelling and your state\'s four cut scores the week before. At the centre you are checked in, photographed and seated at a computer; scratch paper is issued and collected. A scientific on-screen calculator is provided for the Mathematics subtest and no personal calculator is allowed. Pace each subtest by its own clock — roughly a minute per item across the board, with math numeric-entry items warranting a little more — and use the scheduled breaks to reset rather than to worry about a subtest already finished, because it cannot be revisited. When you finish, your four subtest scores appear on screen, and official score reports follow in about five weeks, auto-sent to the recipients you selected at registration.',
    bring: [
      'Government-issued photo ID with your name matching your Praxis account exactly',
      'Your Praxis registration confirmation or candidate ID in case check-in cannot locate the booking',
      'For online proctoring: a phone for check-in, a private room, and a webcam and microphone already tested on the machine you will use',
      'Your state\'s four cut scores, so you can interpret the on-screen results correctly at the desk'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — secured in a locker at a centre',
      'All notes, textbooks and printed study materials — no personal scratch paper is allowed',
      'Personal calculators; the Mathematics subtest provides an on-screen calculator only',
      'Bags, coats, food and drink beyond what the centre permits',
      'Any other person in the room for online proctoring; the session is recorded'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your state\'s four cut scores, verify your ID name matches your Praxis account exactly, and re-run one timed math block on the on-screen calculator.' },
      { time: '24 hours before', detail: 'For online proctoring, run the system test on the same machine and network. For a centre, confirm the address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin online check-in, which includes a photo, ID capture, and (online) a room scan.' },
      { time: 'Check-in', detail: 'ID verification, signature, lockers. You are seated; the tutorial explains flagging and the on-screen calculator before the first subtest.' },
      { time: 'Reading & Language Arts (90 min)', detail: '80 items. Work the strategy layer — phonemic awareness, phonics, text structure, writing process — at roughly 65-70 seconds per item.' },
      { time: 'Scheduled break', detail: 'Reset and hydrate; the Reading subtest cannot be revisited, so leave it behind.' },
      { time: 'Mathematics (65 min)', detail: '50 items including numeric entry. Use the on-screen calculator, type exact values, and watch rounding.' },
      { time: 'Break', detail: 'Second scheduled break before Social Studies.' },
      { time: 'Social Studies (60 min)', detail: '60 items across history, government, geography and economics at ~60 seconds each.' },
      { time: 'Break', detail: 'Final scheduled break before Science.' },
      { time: 'Science (60 min)', detail: '55 items across earth, life and physical science. This is the subtest where fatigue bites — pace it deliberately.' },
      { time: 'After submission', detail: 'Four subtest scores appear on screen; official reports follow in about five weeks to your selected recipients.' }
    ],
    rules: [
      'Four subtests, each separately timed and separately scored on the 100-200 scale; passing scores are set by each state.',
      'You cannot return to a subtest whose time has expired, and time does not carry between subtests.',
      'Scheduled breaks are provided between subtests; unscheduled breaks may be taken but the clock does not stop.',
      'A scientific on-screen calculator is provided for the Mathematics subtest; personal calculators are not permitted.',
      'Scratch paper is issued at a test centre and collected; online proctoring uses a digital whiteboard only.',
      'Retake: ETS requires a 21-day wait after score release; a partial pass means you only re-sit the failed subtest(s); no limit on attempts.',
      'Scores are valid for 10 years, subject to your state\'s acceptance window.'
    ],
    afterwards:
      'Your four subtest scores appear on screen when you finish, and official reports are released in about five weeks to the recipients you selected — typically your state education agency and teacher-preparation program. Because cut scores are state-set, read each subtest score against your state\'s published requirement rather than against any number printed on the report. On a full pass, you clear the content-knowledge hurdle and move to the remaining licensure requirements — commonly a pedagogy test such as the PLT and a state-specific component. On a partial pass, the policy is forgiving: you re-sit only the failed subtest(s), at the individual $64 rate, after the 21-day wait, not the whole combined test. Do not re-book the same week out of frustration; the 21-day window is long enough to run a targeted repair on the failed subtest, and the four-subtest design means you have a precise list of what to fix. The most common failure pattern is not knowledge but execution — a rounding slip on numeric entry, fatigue in the final Science subtest, or over-thinking the strategy layer of Reading and Language Arts — and each of those is fixable within one retake cycle.'
  }
};

export default data;
