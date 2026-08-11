// Depth content for: praxis-educational-leadership-administration-and-supervision-5412
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Teacher licensure & education certifications desk',
    bio: 'This guide is compiled and maintained by our teacher-licensure desk. Praxis tests are administered by ETS, and the passing scores are set by each state education agency rather than by ETS, so we track structure, question counts, timing and fees from the official ETS Praxis pages and study companions and state plainly where you must confirm a state-specific cut score. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Test structure, question count, timing, fee and content categories were taken from the official ETS Praxis page and Study Companion for Educational Leadership: Administration and Supervision (5412).',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$104,070 median for school principals (BLS, May 2024) — the administrator pay the 5412 unlocks',
    summary:
      'The direct conclusion for a 5412 candidate is that this exam is the principal-licensure gate, and the wage it unlocks is meaningfully higher than the classroom-teacher baseline: the closest BLS occupation is Elementary, Middle, and High School Principals, SOC 11-9032, which had a May 2024 median annual wage of $104,070, against the $64,580 median for high school teachers under SOC 25-2031. The 5412 does not itself set pay — salaries are set by district administrative contracts and schedules — but the credential converts a teacher into the applicant pool for assistant-principal and principal roles, which is the single biggest step change in pay and responsibility in a school career. The distribution matters more than the median: BLS counted 333,300 principal jobs in 2024 and reports that the lowest 10 percent earned below the median by a wide margin while the highest 10 percent exceed it substantially, with geography and school level driving the spread — high school principalships and large-district administrative roles pay more than elementary or small-school ones, and the highest-paying states are largely the highest-cost ones. BLS projects a 2 percent decline in principal employment from 2024 to 2034 while still expecting about 20,800 openings a year, almost all of them replacement need from retirement and turnover. The practical reading for a 5412 candidate is that principal licensure is a promotion credential: it requires prior teaching experience, and it moves a career onto an administrative track where the wage and the accountability both rise. One caveat anchors the picture: 5412 is only the exam component of a principalship, and most states also require a master\u2019s degree in educational leadership or administration plus the field experience that BLS lists as five years or more, so the credential should be treated as one gate in a longer licensure sequence rather than a standalone qualification.',
    rows: [
      { label: 'Median annual wage, school principals', value: '$104,070', note: 'BLS Occupational Outlook Handbook (SOC 11-9032), May 2024' },
      { label: 'Median annual wage, high school teachers (context)', value: '$64,580', note: 'BLS Occupational Outlook Handbook (SOC 25-2031), May 2024' },
      { label: 'Employment, 2024 (principals)', value: '333,300 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings (principals)', value: '~20,800 per year', note: 'BLS OOH Job Outlook, 2024-34 — all replacement need' }
    ],
    growth: '-2% projected change 2024-34 for principals (decline), with ~20,800 replacement openings a year. The 5412 unlocks the administrative track; pay is set by district contracts, with school level and geography driving the spread.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Elementary, Middle, and High School Principals',
      url: 'https://www.bls.gov/ooh/management/elementary-middle-and-high-school-principals.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'ETS publishes no pass rate — the 5412 cut score is set by each state, commonly around 150-160',
    summary:
      'ETS does not publish a pass-rate statistic for Praxis 5412 or any other Praxis test, and there is no single national passing score: each state education agency that accepts 5412 for principal licensure sets its own cut on the 100-200 scaled score scale, and for this exam the commonly cited state-set passing scores cluster in the 150 to 160 range, with some states conditioning the requirement on the type of administrative license — principal versus assistant principal versus central-office — being sought. That means the same scaled score clears licensure in one state and falls short in another, so the first research step before any prep purchase is to look up the exact 5412 cut score for your state on the ETS Praxis state requirements page or your state education agency site. What is uniform and verifiable is the operational policy: the test is computer-delivered with 120 selected-response questions in 165 minutes, scored on the 100-200 scaled scale, ETS enforces a mandatory waiting period between attempts, there is no limit on attempts, and each attempt is paid at full price. A second structural fact matters for planning: the 5412 is aligned to the 2015 Professional Standards for Educational Leaders, and its six content categories are weighted — Instructional Leadership alone is 23 percent — so the relevant comparison for a candidate is their own state\u2019s cut against their practice scores by category, not a national average that does not exist. The correct planning question is therefore not what the pass rate is but what your state\u2019s cut score is and how far above it your practice scores sit, because a 120-question scenario-based paper rewards targeted category repair far more than broad re-study. Treat any vendor-sourced pass-rate figure as a marketing artifact, and build the preparation around clearing your state\u2019s published cut with a deliberate margin.',
    source: {
      label: 'ETS — Praxis Educational Leadership: Administration and Supervision (5412)',
      url: 'https://praxis.ets.org/test/educational-leadership-administration-and-supervision-5412.html'
    },
    caveat:
      'ETS publishes no pass rate by exam. The 5412 cut score is set independently by each state education agency on the 100-200 scaled score scale; confirm your state\u2019s requirement before registering.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The 5412 is a scenario-heavy paper: 120 selected-response questions in 165 minutes, and the content map is six leadership categories — Instructional Leadership (about 27 questions, 23 percent), Climate and Cultural Leadership (about 22 questions, 18 percent), Strategic Leadership (about 20 questions, 17 percent), Ethical Leadership (about 19 questions, 16 percent), Organizational Leadership (about 16 questions, 13 percent), and Community Engagement Leadership (about 16 questions, 13 percent). The structural fact that should shape the schedule is that the exam is aligned to the 2015 Professional Standards for Educational Leaders, and nearly every question is a scenario that asks what an effective leader would do next — so the plan must train judgment and the language of the standards, not memorised facts. The largest category is Instructional Leadership, which rewards knowing how a principal develops teachers, shapes curriculum, and uses assessment data, and it is the most common weak spot among candidates who think of the job as management. The plan below runs eight to ten weeks at roughly 8-10 hours a week. Because the paper rewards choosing the best-practice response among several plausible options, the plan front-loads learning the six categories and the PSEL-aligned vocabulary, then shifts to timed scenario practice so the reasoning becomes reflex. The final two weeks should be timed mock exams on the real format, because 120 questions in 165 minutes is about 82 seconds per item and the scenario items — which typically present a situation and several defensible actions — run longer than definitional items. Before planning, confirm that 5412 is the test your state actually requires, because some states use the School Leaders Licensure Assessment (6990) instead, and the two share the PSEL framework but differ in format. The hours below are built for a practicing educator with a school-year schedule; if you are preparing over the summer, you can compress the calendar but not the total hours.',
    totalHours: '70-100 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Diagnostic, state cut score and PSEL map',
        tasks: [
          'Take one untimed diagnostic pass through all six content categories to rank your starting position',
          'Look up your state\u2019s exact 5412 cut score and confirm 5412 is the test your state requires (some use SLLA 6990)',
          'Download the ETS Study Companion and map the six categories to the 2015 PSEL standards'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Instructional Leadership (23%) and Strategic Leadership (17%)',
        tasks: [
          'Study how leaders develop teachers, shape curriculum, and use assessment data for continuous improvement',
          'Work the vision-and-goal items: mission, strategic planning, data use and change management',
          'One timed 40-question drill per week under 55 minutes to build pace'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Weeks 4-5',
        focus: 'Climate and Cultural Leadership (18%) and Ethical Leadership (16%)',
        tasks: [
          'Cover school culture, equity, safety, and the practices that make schools physically, mentally and emotionally safe',
          'Drill ethics scenarios: integrity, responsibility, role-model expectations, and handling unethical behaviour fairly',
          'Re-test the Week 2-3 items you missed to confirm the repair took'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Week 6',
        focus: 'Organizational Leadership (13%) and Community Engagement (13%)',
        tasks: [
          'Study operations, facilities, budgets, technology, and inclusive recruitment and management',
          'Work family- and community-engagement items: communication, partnerships, and stakeholder involvement',
          'One timed 40-question drill mixing all six categories'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Week 7',
        focus: 'Scenario-method drilling',
        tasks: [
          'Practise the next-best-action method: identify the role, the standard at issue, and the evidence-based best-practice response',
          'Drill the answer-choice logic — many scenarios have several defensible options, and the exam wants the best-practice one',
          'Build a miss log tagged to the six categories and to the mistake pattern (management vs instructional, reaction vs data-first)'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Week 8',
        focus: 'Full-length timed mocks',
        tasks: [
          'Take two full 5412 mocks: 120 questions in 165 minutes under exam conditions',
          'Review both by content category — the pattern of misses matters more than the total score',
          'Drill the specific categories and scenario patterns that cost points in the mocks'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Week 9',
        focus: 'Gap closing and a third mock',
        tasks: [
          'Take one more full mock and compare the category breakdown against your state cut plus a margin',
          'Re-lab the miss log categories until clean',
          'Drill the ethical-leadership and equity language, which is the highest-frequency scenario frame'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Week 10',
        focus: 'Taper and logistics',
        tasks: [
          'Light review of category checklists and miss lists',
          'Confirm your state cut score and that your ID name matches your Praxis account exactly',
          'Confirm your seat, travel or at-home system test, and take one quiet day before the exam'
        ],
        hours: '6-8 hrs'
      }
    ],
    variants: [
      { label: 'Assistant principal preparing for the principalship', detail: 'Seven to eight weeks at 8-10 hrs/week. Your daily work covers much of climate and organizational leadership; spend the recovered time on Instructional Leadership and the strategic vision items, which operational roles under-expose.' },
      { label: 'Teacher leader or coach with no administrative role', detail: 'Ten to twelve weeks at 8-10 hrs/week. Add two weeks before Week 1 on the PSEL framework and administrative vocabulary, because the scenario answers assume working knowledge of how schools are led and operated.' },
      { label: 'Principal candidate in a summer window', detail: 'Six to eight weeks full-time at 12-15 hrs/week. You can compress the calendar because the total hours stay the same, but keep the final two weeks for timed mocks rather than content review.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The 5412 rewards one skill above all: choosing the best-practice response in a scenario, rather than the merely defensible one. Because nearly every question is a situation with several plausible options, the difference between a passing and a failing candidate is usually the method they use to eliminate answers — not raw knowledge of leadership theory. The single highest-yield planning decision is to learn the six categories in weight order and to master the vocabulary of the 2015 Professional Standards for Educational Leaders, because scenario answers reward using the standards\u2019 language and priorities — data-first decisions, equity, safety, ethical role-model behaviour — over management-by-exception thinking. The second highest-yield decision is to practise the next-best-action method explicitly: identify the role you are playing in the stem, identify the standard or priority at issue, and then select the response that is evidence-based, feasible in a school, and moves toward the vision while protecting students and staff. The third is to build a miss log tagged not just by category but by mistake pattern, because candidates who miss the same scenario frame repeatedly — reacting before consulting data, choosing the punitive over the restorative option, picking the managerial over the instructional response — need to fix the pattern, not just re-read the topic. The strategies below are ordered by score impact, and the first two are the difference between a passing plan and a lucky one: they are not optional extras to add after content review, they are the plan. A candidate who skips the scenario method and the PSEL vocabulary is effectively betting that classroom or building experience alone translates into the exam\u2019s answer logic, and this paper is deliberately designed to separate experience from best-practice judgement.',
    items: [
      {
        title: 'Learn the PSEL-aligned vocabulary and priorities',
        detail: 'The 5412 is aligned to the 2015 Professional Standards for Educational Leaders, and scenario answers reward using the standards\u2019 priorities: data-informed decisions, instructional focus, equity and inclusion, safe and supportive culture, ethical role-modelling, and community partnership. Candidates who answer from personal instinct rather than the standards\u2019 frame consistently pick the plausible-but-wrong option. Drill the six categories until the standards\u2019 language is your default.'
      },
      {
        title: 'Use the next-best-action method on every scenario',
        detail: 'Work a fixed order on each scenario item: identify the role the stem assigns you, identify the standard or priority at issue, then eliminate options that react before consulting data, that bypass the instructional question, or that violate ethics or equity. The exam wants the best-practice response among several defensible ones, and this method converts judgement into a repeatable elimination process.'
      },
      {
        title: 'Weight study time by the category counts',
        detail: 'Instructional Leadership is about 27 of the 120 questions — 23 percent — and it is the most common weak spot among candidates who think of leadership as management. Climate and Cultural Leadership and Strategic Leadership together add another 35 percent. Allocate hours by weight, and give Instructional Leadership the largest block even if operational experience makes it feel familiar.'
      },
      {
        title: 'Tag your miss log by mistake pattern, not just category',
        detail: 'Candidates who miss the same scenario frame repeatedly — reacting before consulting data, choosing the punitive over the restorative option, picking the managerial over the instructional response — need to fix the pattern. Tag every miss with the mistake pattern as well as the category, and drill the top three patterns explicitly. This is the difference between studying and repairing.'
      },
      {
        title: 'Practise the equity and ethics frames in depth',
        detail: 'Ethical Leadership is 16 percent of the paper, and ethics-and-equity frames bleed into the instructional, climate and community scenarios as well. Drill the recurring judgement calls: confidentiality, role-model expectations, handling unethical behaviour with fairness and accountability, and eliminating equity barriers. The highest-frequency scenario frame on the exam is the one most candidates study least.'
      },
      {
        title: 'Run full-length timed mocks at the real pace',
        detail: 'One hundred twenty questions in 165 minutes is about 82 seconds per item, and the scenario items run longer than definitional ones. Two full mocks in Week 8 tell you exactly where over-deliberation costs you and let you rehearse the flag-and-return discipline. Track the clock against question 40 and question 80 so pacing becomes a plan, not a surprise.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The highest-value resources for the 5412 are free: the ETS Study Companion, which contains the exact six-category blueprint, the PSEL alignment and sample questions with explained answers, and the ETS Interactive Practice Test, which is the closest thing to the real scenario-item style and the best single readiness check available. Third-party courses add structured drilling volume and are worth it mainly if a specific category needs systematic repair — Instructional Leadership for candidates from operational roles, or the ethics-and-equity frames for everyone, because no school-district training covers the exam\u2019s answer logic directly. The buying logic for this exam is that scenario-based tests respond best to volume: a candidate needs to see hundreds of realistic situations and read why the best-practice answer beats the defensible ones, so a question bank with explanations is closer to a necessity than an option, while a multi-hundred-dollar course library is usually overkill. The decision really is how much structured remediation your two weakest categories need, and that should be diagnosed before you spend anything, not after. One caution that applies to all paid materials: some states use the School Leaders Licensure Assessment (6990) instead of the 5412, and the two share the PSEL framework but differ in format, so verify that any course is written for the 5412 selected-response format rather than the 6990 constructed-response one. School districts are the hidden variable: many districts that sponsor principal candidates pay for or reimburse the registration fee and prep materials, so asking before buying anything is a free first step that candidates routinely skip. The table below lists current list prices as of mid-2026; we do not rank by commission and prices change frequently.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ETS Study Companion (5412)', values: ['Free', 'PDF content outline with sample questions', 'The authoritative six-category map plus PSEL alignment', 'Download first — tag every miss to its categories' ] },
      { label: 'ETS Praxis Interactive Practice Test (5412)', values: ['~$20', 'Timed online practice with immediate scoring', 'Closest scenario style to the real exam', 'The best single readiness check before booking' ] },
      { label: 'Exam registration (5412)', values: ['~$130 (confirm at ets.org/praxis)', 'Prometric centre or online proctoring', 'Required to sit the exam', 'Book only after practice scores clear your state cut with a margin' ] },
      { label: 'Praxis 5412 question bank', values: ['$60-150 subscription', 'Online bank with explanations and timed modes', 'Volume scenario drilling with answer logic', 'The core purchase for a scenario-based exam' ] },
      { label: 'Kathleen Jasper or similar 5412 course', values: ['~$80-150', 'Digital study guide with practice tests', 'Structured repair by category with PSEL framing', 'Candidates wanting a focused leadership prep program' ] },
      { label: 'District or university leadership-prep materials', values: ['Often free or low-cost', 'Print and online from the sponsoring program', 'The PSEL standards and case-study practice', 'Candidates already enrolled in an administration program' ]
      },
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; ETS registration fees are set by ETS and state surcharges may apply. Passing scores are set by state and are not included in any fee. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The 5412 failure modes cluster around three roots: answering scenarios from personal experience instead of the PSEL best-practice frame, under-preparing Instructional Leadership because operational roles make it feel familiar, and treating the exam as a management-knowledge test when it is a judgement test. Every one of the six traps below is fixable within a single ten-week cycle, and most are exactly the mistakes the scenario design is built to punish. The first trap is the biggest: many candidates eliminate the best-practice answer because it looks slower or more consultative than what a busy building leader would actually do, and the exam consistently rewards the data-first, equity-aware, instructional-priority response over the expedient one. The second is the weighting trap: Instructional Leadership is 23 percent of the paper, yet candidates from operational roles under-prepare it because they assume their experience covers leadership. The third is the frame trap: answering ethics and equity scenarios with personal instinct rather than the standards\u2019 language and priorities. The fourth is a method trap — no elimination process, so several plausible options look equally good and the candidate guesses. The fifth is preparing for the wrong exam: some states use the SLLA 6990, which shares the PSEL framework but adds constructed-response items. The sixth is a pacing trap: never running a full mock, so the 165-minute clock and 82-seconds-per-item pace arrive as a surprise. Each trap has a concrete fix below, and the common thread is that the 5412 rewards trained judgement over accumulated experience, and trained judgement is exactly what targeted practice builds.',
    items: [
      {
        mistake: 'Answering from personal experience instead of the PSEL frame',
        fix: 'The 5412 rewards the best-practice response among several defensible options, and the best-practice response is consistently the one aligned to the 2015 Professional Standards for Educational Leaders — data-first, equity-aware, instructional-priority, ethical. Candidates who answer from instinct about what a busy leader would actually do routinely pick the plausible-but-wrong option. Drill the standards\u2019 priorities until they are your default filter.'
      },
      {
        mistake: 'Under-preparing Instructional Leadership',
        fix: 'Instructional Leadership is about 27 of the 120 questions — 23 percent, the largest category — and it is the most common weak spot among candidates who think of leadership as management. Operational experience does not cover how a principal develops teachers, shapes curriculum and uses assessment data. Give this category the largest study block and drill the instructional-scenario items explicitly.'
      },
      {
        mistake: 'Guessing among several plausible options',
        fix: 'Scenario items are built so that multiple answers are defensible; the exam wants the best-practice one. Work a fixed elimination method: identify the role, identify the standard at issue, then eliminate options that react before consulting data, bypass the instructional question, or violate ethics or equity. Build the method in practice so it runs on exam day.'
      },
      {
        mistake: 'Preparing for the wrong exam',
        fix: 'Some states use the School Leaders Licensure Assessment (6990) instead of the 5412; both align to the PSEL framework, but the 6990 adds a constructed-response component. Preparing for the wrong one wastes your money and study weeks. Confirm which test your state requires in Week 1 and download that exam\u2019s Study Companion.'
      },
      {
        mistake: 'Training to a national passing score that does not exist',
        fix: 'There is no single Praxis 5412 passing score; each state sets its own cut on the 100-200 scale, commonly in the 150-160 range, sometimes varying by the type of administrative license. Look up your state\u2019s requirement in Week 1 and require your practice mocks to beat it by a margin. A score that usually passes in forums can still fail your state.'
      },
      {
        mistake: 'Never running a full-length mock',
        fix: 'One hundred twenty questions in 165 minutes is about 82 seconds per item, and scenario items run longer than definitional ones. Candidates who only drill in short blocks over-deliberate on the real paper and rush the final section. Two full mocks in Week 8 turn pacing and scenario judgement from a surprise into a plan.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The 5412 is 120 selected-response questions in 165 minutes, scored on the 100-200 scaled scale against a state-set cut. The paper covers six content categories — Instructional Leadership (about 27 questions), Climate and Cultural Leadership (about 22), Strategic Leadership (about 20), Ethical Leadership (about 19), Organizational Leadership (about 16), and Community Engagement Leadership (about 16) — and it is aligned to the 2015 Professional Standards for Educational Leaders, so nearly every item tests the standards\u2019 knowledge and priorities rather than abstract leadership theory. The format is entirely selected-response, meaning single-answer multiple choice plus a minority of multiple-select items; ETS notes that some questions on a form are pretest items that do not count toward your score. The dominant item type is the scenario question: a brief situation in a school setting followed by several actions a leader could take, where more than one option is defensible and the exam wants the best-practice one. Because the scenario stems often do not state the category explicitly, the skill is recognising the standard at issue — an instructional item may look like a personnel problem, and an ethics item may look like an operations problem. Pacing is the dominant tactical skill: about 82 seconds per item, with the scenario items running longer than the definitional ones, so flag-and-return discipline matters. The answer logic is consistent: eliminate options that react before consulting data, bypass the instructional question, or violate ethics or equity, and select the response that is evidence-based, feasible in a school, and moves the school toward its vision while protecting students and staff. The samples below illustrate the published scenario style across three of the six categories.',
    types: [
      { name: 'Scenario-based single-answer items', share: 'The large majority of items', detail: 'A brief school situation with several defensible actions; select the best-practice response. The answer logic rewards the PSEL-aligned, data-first, ethics-aware option over the expedient one.' },
      { name: 'Definitional and standard-recognition items', share: 'A minority of items', detail: 'Items that test the meaning and application of a leadership concept or a PSEL standard directly. Faster than the scenario items and the place to bank time.' },
      { name: 'Multiple-select items', share: 'A minority of items', detail: 'The stem states how many options to choose, and scoring is all-or-nothing. Common where several practices together constitute effective leadership of a situation.' }
    ],
    samples: [
      {
        prompt: 'At a faculty meeting, teachers raise concerns that a new district pacing guide leaves no time for reteaching. The principal believes the guide is sound overall. What should the principal do first?',
        options: [
          'A. Suspend use of the pacing guide while the concern is investigated',
          'B. Direct teachers to follow the guide and raise concerns through the formal complaint process',
          'C. Examine the pacing data and classroom evidence with teachers to understand where the friction occurs',
          'D. Modify the pacing guide immediately to add reteaching time at every grade level'
        ],
        answer: 'C',
        explanation: 'The best-practice response is to engage with the evidence before acting: examining pacing data and classroom evidence with teachers respects the concern, keeps the instructional focus, and produces a decision grounded in information rather than reaction (C). A suspends the guide before any analysis and overreacts to the initial complaint. B dismisses the teachers\u2019 concern and escalates rather than collaborates, which weakens the instructional climate. D commits to a change before the evidence supports it and may undermine the district\u2019s curriculum integrity. This item tests the Instructional and Strategic Leadership categories: the effective leader consults data and stakeholders before deciding, which is the answer logic the exam rewards throughout.'
      },
      {
        prompt: 'A principal learns that a well-liked veteran teacher has made a series of inappropriate comments to students that a parent has documented. What should the principal do first?',
        options: [
          'A. Address the documented behaviour promptly through the district\u2019s formal process, with fairness and confidentiality for all parties',
          'B. Talk informally with the teacher and resolve the matter without documentation to protect the teacher\u2019s career',
          'C. Ignore the complaint because the teacher is well-liked and the parent has a history of complaints',
          'D. Ask the teacher to transfer to another grade level to remove the conflict without an investigation'
        ],
        answer: 'A',
        explanation: 'Ethical leadership requires holding individuals accountable fairly and promptly, and a documented pattern of inappropriate behaviour toward students must be addressed through the district\u2019s formal process with confidentiality and due process (A). B compromises the safety and integrity of the process by avoiding documentation, which protects the teacher at the expense of students and the school\u2019s ethical climate. C ignores a documented student-safety concern because of popularity and parent history, which is a clear ethical failure. D sidesteps accountability through a transfer, leaving the behaviour unaddressed. This item tests the Ethical Leadership category: the correct response protects students, follows process, and treats the teacher fairly, all at once.'
      },
      {
        prompt: 'Which two practices best demonstrate a principal\u2019s commitment to an equitable and inclusive school culture?',
        options: [
          'A. Analysing discipline and achievement data for disparities and adjusting practices to close them, and ensuring all students have access to advanced coursework',
          'B. Creating a separate discipline system for students with behavioural needs, and limiting advanced coursework to students with high prior scores',
          'C. Publishing a diversity statement, and leaving existing course-enrolment and discipline patterns unchanged',
          'D. Assigning the most experienced teachers to the highest-scoring classes, and postponing equity work until test scores improve'
        ],
        answer: 'A',
        explanation: 'Equitable leadership is demonstrated by examining the data for disparities and then changing practices — analysing discipline and achievement data, adjusting practices to close gaps, and ensuring all students can access advanced coursework (A). B does the opposite, institutionalising separation and gatekeeping. C stops at a statement without changing patterns, which is performative rather than substantive. D concentrates the strongest teachers on the strongest students and defers equity work, which entrenches the disparities the standard targets. This multiple-select item tests the Climate and Cultural Leadership category, and its scoring is all-or-nothing: both practices in A must be selected for credit, which is exactly how the paper punishes partial fluency.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The 5412 is a single appointment of 165 minutes at a Prometric test centre or via ETS online proctoring, containing 120 selected-response questions in one sitting. The most common way a qualified candidate loses the seat is administrative: your government-issued photo ID must match your Praxis account name exactly, and for online proctoring you need a private room, working camera and microphone, and a clean desk. Check your account spelling and your state\u2019s cut score the week before, because neither can be fixed at the check-in desk. At the centre you are checked in, photographed, and seated at a computer; scratch paper is issued and collected. The testing interface allows flagging and review within the single section, and there are no separately timed subtests — the 165-minute clock runs continuously, so budget roughly 82 seconds per item and keep moving. The practical pacing plan is: clear the definitional and standard-recognition items quickly, spend your working time on the scenario items using the next-best-action method — identify the role, identify the standard at issue, eliminate the reactive and ethics-violating options — flag genuine uncertainties, and use the final minutes to review flags rather than re-reading everything. There are no scheduled breaks in the sitting; unscheduled breaks may be taken but the clock does not stop, so use the restroom before check-in and keep a water bottle at the centre\u2019s discretion. The pretest items are indistinguishable from scored ones, so answer everything as if it counts. When you finish, your scaled score appears on screen, and the official score report follows in about five weeks to the recipients you selected at registration — typically your state agency and your preparation program. Because this exam is often the final academic gate on a principalship license, treat the day like the professional decision point it is: the scenario method you drilled is the method you use.',
    bring: [
      'Government-issued photo ID with your name matching your Praxis account exactly',
      'Your Praxis registration confirmation or candidate ID in case check-in cannot locate the booking',
      'For online proctoring: a phone for check-in, a private room, and a webcam and microphone already tested on the machine you will use',
      'Your state\u2019s 5412 cut score, so you can interpret the on-screen result correctly'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — secured in a locker at a centre',
      'All notes, textbooks and printed study materials — no personal scratch paper is allowed',
      'Bags, coats, food and drink beyond what the centre permits',
      'Printed standards documents or leadership frameworks — everything you need is in the stems'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your state\u2019s 5412 cut score, verify your ID name matches your Praxis account exactly, and re-run one timed half-exam.' },
      { time: '24 hours before', detail: 'For online proctoring, run the system test on the same machine and network. For a centre, confirm the address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin online check-in, which includes a photo, ID capture, and (online) a room scan.' },
      { time: 'Check-in', detail: 'ID verification, signature, lockers. You are seated; the tutorial explains flagging before the timer starts.' },
      { time: '0-5 minutes', detail: 'Write your next-best-action method on the noteboard — role, standard, eliminate the reactive and ethics-violating options — then begin at a steady 82-seconds-per-item tempo.' },
      { time: '5-80 minutes', detail: 'Clear the definitional items quickly and work the scenario items with the method; flag genuine uncertainties and never stall on a single stem.' },
      { time: '80-160 minutes', detail: 'Continue at the same tempo; this is where the longest scenario items live, so re-read stems to identify the role and the standard at issue before answering.' },
      { time: 'Final 5 minutes', detail: 'Review flagged items, then submit rather than letting the clock expire.' }
    ],
    rules: [
      '120 selected-response questions in one 165-minute session; scaled score on the 100-200 scale with a state-set cut.',
      'The exam is aligned to the 2015 Professional Standards for Educational Leaders; scenario items reward the best-practice response among several defensible ones.',
      'You may flag items and review them within the single section; there are no separately timed subtests.',
      'No scheduled breaks in the sitting; unscheduled breaks may be taken but the clock does not stop.',
      'Scratch paper is issued at a test centre and collected; online proctoring uses a digital whiteboard only.',
      'Some questions on the form are pretest items that do not count toward your score.',
      'Retakes are subject to the ETS waiting-period policy after score release; each attempt is paid in full.'
    ],
    afterwards:
      'Your scaled score appears on screen when you finish, and the official report follows in about five weeks to the recipients you selected — typically your state education agency and your preparation program. Because the cut score is state-set, read your result against your state\u2019s published 5412 requirement rather than against any number on the report, and note that some states set different cuts for principal versus assistant-principal licenses. On a pass, the exam gate on the administrative track is cleared and you move to the remaining licensure requirements, commonly the completion of your educational-leadership degree and any state-specific components. On a fail, the path is straightforward: wait out the ETS retake waiting period, but use the window deliberately. The most common failure pattern on 5412 is not missing leadership knowledge overall but a specific category — usually Instructional Leadership, or the ethics-and-equity frames — and that is fixable in one targeted cycle. Do not re-book the same knowledge; spend the window repairing the specific area your practice and the score report point to, and treat the retake as a different exam experience rather than a second roll of the same dice.'
  }
};

export default data;
