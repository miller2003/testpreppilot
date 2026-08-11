// Depth content for: praxis-physics-5266
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
  reviewedBy: 'Test structure, question count, timing, fee and content categories were taken from the official ETS Praxis page and Study Companion for Physics: Content Knowledge (5266).',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$64,580 median for high school teachers (BLS, May 2024)',
    summary:
      'The direct conclusion for a Physics (5266) candidate is that this exam is the content-knowledge gate for a secondary physics teaching license, and the wage it unlocks is captured by the closest BLS occupation, High School Teachers, SOC 25-2031, which had a May 2024 median annual wage of $64,580. The BLS classifies by job duties rather than by certificate, so no wage series isolates physics teachers specifically, and secondary science teachers are paid on district salary schedules where years of service and graduate credit hours drive progression far more than the subject endorsement does. The distribution matters more than the median: geography dominates the spread, with state-level medians ranging from the high $40,000s to more than $90,000, and the highest-paying states are largely the highest-cost ones such as California, New York and Massachusetts. BLS counted 1,094,500 high school teachers in 2024 and projects a 2 percent decline in employment from 2024 to 2034, while still expecting about 66,200 openings a year, almost all of them replacement need from retirement and career change. The practical reading for a 5266 candidate is more favourable than the aggregate suggests: physics teachers are among the hardest secondary positions to fill, districts routinely hire physics teachers with out-of-field or provisional licenses, and schools in most regions offer signing bonuses, stipends and tuition support to credentialed physics candidates, so the 5266 is a credential that converts chronic shortage into real bargaining power. The base wage still moves with the schedule, but the physics endorsement shortens the job search, protects the assignment, and is a prerequisite for the state licensure that most districts require for permanent placement. One caveat anchors the picture: because the exam is a full content-knowledge test rather than a single-course endorsement, candidates are often career changers from engineering or the sciences, and for them the exam is the final academic hurdle before student teaching or a residency — the wage work is done by the license, and the license is done by this test.',
    rows: [
      { label: 'Median annual wage, high school teachers', value: '$64,580', note: 'BLS Occupational Outlook Handbook (SOC 25-2031), May 2024' },
      { label: 'Employment, 2024', value: '1,094,500 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~66,200 per year', note: 'BLS OOH Job Outlook, 2024-34 — almost all replacement need' },
      { label: 'Physics teacher premium', value: 'Market-dependent', note: 'Physics is a persistent shortage field; stipends, bonuses and tuition support vary by district' }
    ],
    growth: '-2% projected change 2024-34 (decline driven by falling secondary enrollment), with ~66,200 replacement openings a year. Pay is set by district salary schedules, but physics teachers command shortage-field leverage in most regions.',
    source: {
      label: 'BLS Occupational Outlook Handbook — High School Teachers',
      url: 'https://www.bls.gov/ooh/education-training-and-library/high-school-teachers.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'ETS publishes no pass rate — the 5266 cut score is set by each state on the 100-200 scale',
    summary:
      'ETS does not publish a pass-rate statistic for Praxis 5266 or any other Praxis test, and there is no single national passing score: each state education agency that accepts 5266 sets its own cut on the 100-200 scaled score scale, and for content-knowledge exams like this one the state-set passing scores commonly sit in the 140s and 150s, with some states also setting different requirements depending on the grade band or on whether the candidate holds a related endorsement. That means the same scaled score clears licensure in one state and falls short in another, so the first research step before any prep purchase is to look up the exact 5266 cut score for your state on the ETS Praxis state requirements page or your state education agency site. What is uniform and verifiable is the operational policy: the test is computer-delivered with 125 selected-response questions in 150 minutes, scored on the 100-200 scaled scale, ETS enforces a mandatory waiting period between attempts, there is no limit on attempts, and each attempt is paid at full price. A second structural fact matters for planning: 5266 is a full content-knowledge test for beginning physics teachers, and its candidates are often science or engineering graduates, which means the relevant comparison for a candidate is their own state\u2019s cut against their practice scores, not a national average that does not exist. The correct planning question is therefore not what the pass rate is but what your state\u2019s cut score is and how far above it your practice scores sit, because a 125-question paper with five weighted categories rewards targeted repair far more than broad re-study. Treat any vendor-sourced pass-rate figure as a marketing artifact, and build the preparation around clearing your state\u2019s published cut with a deliberate margin, because a handful of missed items across the weighted categories is what separates a comfortable pass from a narrow fail.',
    source: {
      label: 'ETS — Praxis Physics: Content Knowledge (5266)',
      url: 'https://praxis.ets.org/test/physics-content-knowledge-5266.html'
    },
    caveat:
      'ETS publishes no pass rate by exam. The 5266 cut score is set independently by each state education agency on the 100-200 scaled score scale; confirm your state\u2019s requirement before registering.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The 5266 is a broad, content-heavy paper: 125 selected-response questions in 150 minutes, and the content map is five categories — Mechanics (about 44 questions, 35 percent), Electricity and Magnetism (about 26 questions, 21 percent), Waves (about 21 questions, 17 percent), Principles and Models of Matter and Energy (about 19 questions, 15 percent), and Nature and Impact of Science and Engineering (about 15 questions, 12 percent). The structural fact that should shape the schedule is that Mechanics alone is more than a third of the paper, and Mechanics plus Electricity and Magnetism together are more than half, so a candidate who studies the five categories evenly is under-preparing the largest block by a wide margin. The second structural fact is the redesign layer: half or more of the questions integrate a Science and Engineering Practice from the Next Generation Science Standards, and roughly one-quarter to one-third apply physics content inside a teaching scenario or instructional task, so the exam is not a pure recall test — it rewards applying physics knowledge to the decisions a teacher makes. The plan below runs eight to ten weeks at roughly 8-10 hours a week, which is longer than the single-course endorsement exams because the syllabus is the full physics curriculum. Candidates coming from a physics or engineering degree should budget the lower end; candidates from other science fields should budget the upper end and add review of mechanics and E&M fundamentals. The final two weeks should be timed mock exams on the real format, because 125 questions in 150 minutes is about 72 seconds per item and the SEP-integrated and teaching-scenario items run longer than the pure recall items, so pacing discipline decides the outcome. Before planning, confirm that 5266 is the test your state actually requires, because the retired 5265 covered a different six-category blueprint.',
    totalHours: '80-110 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Diagnostic and state cut-score lookup',
        tasks: [
          'Take one untimed diagnostic pass through all five content categories to rank your starting position',
          'Look up your state\u2019s exact 5266 cut score on the ETS Praxis state requirements page and write it down',
          'Download the ETS Study Companion for 5266 and map the five categories plus the Science and Engineering Practices layer'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Weeks 2-4',
        focus: 'Mechanics (35%)',
        tasks: [
          'Work kinematics, Newton\u2019s laws, circular motion, gravitation, energy, momentum, and rotational motion in depth',
          'Practise fluid mechanics and simple harmonic motion, which are the most commonly skipped mechanics topics',
          'One timed 40-question drill per week under 48 minutes to build pace'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Electricity and Magnetism (21%)',
        tasks: [
          'Study electrostatics, current, capacitance, circuits, and the relationship between electric and magnetic fields',
          'Work magnetic fields and forces, and the generation of electric potential, with circuit diagrams',
          'Re-test the mechanics items you missed in Weeks 2-4 to confirm the repair took'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Week 7',
        focus: 'Waves (17%) and matter-and-energy models (15%)',
        tasks: [
          'Cover sound, wave phenomena, the electromagnetic spectrum, and geometric optics',
          'Review atomic structure, forms of energy, thermodynamics, nuclear processes and basic quantum physics',
          'One timed 40-question drill to keep the earlier categories warm'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Week 8',
        focus: 'Nature of science, engineering and teaching scenarios (12%)',
        tasks: [
          'Work experimental design, data analysis and lab-procedure items',
          'Practise the teaching-scenario items — applying physics content to the decisions a teacher makes',
          'Drill the periodic-table and constants help screen so you know what the test provides you'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Week 9',
        focus: 'Full-length timed mocks',
        tasks: [
          'Take two full 5266 mocks: 125 questions in 150 minutes, no calculator, using the provided help screens',
          'Review both by content category — the pattern of misses matters more than the total score',
          'Drill the specific topics that cost points in the mocks, especially mechanics and the teaching-scenario items'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Week 10',
        focus: 'Taper and logistics',
        tasks: [
          'Light review of category checklists and miss lists, plus one timed 62-question half-exam',
          'Confirm your state cut score and that your ID name matches your Praxis account exactly',
          'Confirm your seat, travel or at-home system test, and take one quiet day before the exam'
        ],
        hours: '6-8 hrs'
      }
    ],
    variants: [
      { label: 'Physics or engineering degree holder', detail: 'Six to seven weeks at 8-10 hrs/week. Mechanics and E&M are largely review; spend the recovered time on the nature-of-science category, the teaching-scenario items and the SEP-integrated questions, which a degree does not automatically supply.' },
      { label: 'Chemistry or biology teacher adding physics', detail: 'Ten to twelve weeks at 8-10 hrs/week. Add two weeks before Week 1 for mechanics and E&M fundamentals; the mathematics is modest, but the physics concepts require a full pass rather than a refresher.' },
      { label: 'Career changer with strong quantitative background', detail: 'Eight weeks at 8-10 hrs/week. Your quantitative skills carry the computation items, so weight the plan toward conceptual understanding, lab-procedure knowledge and the teaching-scenario layer.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The 5266 rewards two things above all: weight-ordered category coverage and fluency with the exam\u2019s distinctive layers — the Science and Engineering Practices integration and the teaching-scenario items. Because 125 questions span the whole physics curriculum, the risk is not depth but the classic breadth failure: studying every category evenly and under-preparing Mechanics, which is 35 percent of the paper on its own. The single highest-yield planning decision is to allocate hours in the same proportions as the question counts — Mechanics first, then Electricity and Magnetism, then Waves, then the matter-and-energy models, then nature of science — because a flat study plan starves the largest category by construction. The second highest-yield decision is to rehearse the SEP-integrated and teaching-scenario items deliberately, because half or more of the paper integrates a Science and Engineering Practice and roughly a quarter to a third applies physics inside an instructional task, and neither layer is covered by a standard physics textbook review. The third is to master the provided help screens: the periodic table and the table of physical constants are available on screen, so a candidate who memorises the test as closed-book is wasting memory that the exam itself provides. There is no calculator on this test, so the arithmetic is designed to be manageable by hand and the point is physics understanding, not number-crunching speed. The strategies below are ordered by score impact, and the first two are the difference between a passing plan and a lucky one: they are not optional extras to add after content review, they are the plan. A candidate who skips the weighting and the SEP layer is effectively betting that raw physics recall compensates for the two things the paper is deliberately built to measure.',
    items: [
      {
        title: 'Weight the five categories by question count',
        detail: 'Mechanics is about 44 of the 125 questions, Electricity and Magnetism about 26, Waves about 21, matter-and-energy models about 19, and nature of science about 15. A flat study plan under-prepares the largest block by construction. Allocate hours in the same proportions — Mechanics first, then E&M, then Waves — and re-test each category before moving on.'
      },
      {
        title: 'Drill the Science and Engineering Practices layer',
        detail: 'Half or more of the questions integrate one or more Science and Engineering Practices from the Next Generation Science Standards — experimental design, data analysis, modelling, argument from evidence. A standard physics review does not cover these. Work the Study Companion\u2019s SEP list explicitly, because this layer is where broad-but-shallow candidates lose a block of points.'
      },
      {
        title: 'Practise the teaching-scenario items',
        detail: 'Roughly one-quarter to one-third of the paper applies physics content to the decisions and evaluations a teacher makes during instruction — choosing an analogy, anticipating a misconception, evaluating a student\u2019s reasoning. These are not pedagogy questions; they are physics questions inside a classroom frame. Drill them as their own type so the frame does not surprise you.'
      },
      {
        title: 'Learn the help screens the test provides',
        detail: 'The periodic table and a table of physical constants and conversion factors are available as on-screen Help, and additional constants are given in the text of questions. There is no calculator on this test. A candidate who studies as if the exam were closed-book is wasting effort — learn what the tool provides and use it, and keep the arithmetic-handling simple enough to do without a calculator.'
      },
      {
        title: 'Cover the most-skipped mechanics subtopics',
        detail: 'Fluid mechanics, simple harmonic motion, gravitation and rotational motion are the mechanics subtopics candidates skip when they assume mechanics is kinematics and Newton\u2019s laws. The blueprint lists them explicitly and the category is the largest on the paper, so the skipped subtopics are exactly where a 35-percent block loses points. Cover them in Weeks 2-4 rather than hoping they do not appear.'
      },
      {
        title: 'Run full-length timed mocks at the real 72-seconds-per-item pace',
        detail: 'One hundred twenty-five questions in 150 minutes is about 72 seconds per item, and the SEP-integrated and teaching-scenario items run longer than recall items. Two full mocks in Week 9 tell you exactly where over-thinking costs you and let you rehearse the skip-and-return discipline. Track the clock against question 40 and question 85 so pacing becomes a plan, not a surprise.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The highest-value resources for the 5266 are free: the ETS Study Companion, which contains the exact five-category blueprint, the Science and Engineering Practices list and sample questions, and the ETS Interactive Practice Test, which is the closest thing to the real item style and the best single readiness check available. Third-party courses add structured drilling volume and are worth it mainly if a specific category needs systematic repair — mechanics for non-physics science teachers, or the SEP and teaching-scenario layers for everyone, because no standard textbook covers them. The buying logic for this exam differs from the single-course endorsement tests: at 125 questions across the full physics curriculum, the 5266 is a breadth exam, so a serious question bank with explanations is closer to a necessity than an option, while a multi-hundred-dollar course library is still usually overkill. The decision really is how much structured remediation your two weakest categories need, and that should be diagnosed before you spend anything, not after. One caution that applies to all paid materials: ETS redesigned the physics test from 5265 to 5266, moving from six categories to five and adding the required SEP-integration layer, so verify that any course is current for 5266 and matches the five-category blueprint rather than the retired format. School districts and alternative-certification programs are the hidden variable: many that recruit physics teachers pay for or reimburse the registration fee and prep materials, so asking before buying anything is a free first step that candidates routinely skip. The table below lists current list prices as of mid-2026; we do not rank by commission and prices change frequently.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ETS Study Companion (5266)', values: ['Free', 'PDF content outline with sample questions', 'The authoritative five-category map plus SEP list', 'Download first — tag every miss to its categories' ] },
      { label: 'ETS Praxis Interactive Practice Test (5266)', values: ['~$20', 'Timed online practice with immediate scoring', 'Closest question style to the real exam', 'The best single readiness check before booking' ] },
      { label: 'Exam registration (5266)', values: ['~$130 (confirm at ets.org/praxis)', 'Prometric centre or online proctoring', 'Required to sit the exam', 'Book only after practice scores clear your state cut with a margin' ] },
      { label: 'Praxis 5266 question bank', values: ['$60-150 subscription', 'Online bank with explanations and timed modes', 'Volume drilling across five categories', 'The core purchase for a 125-question breadth exam' ] },
      { label: '240 Tutoring or similar Praxis 5266 course', values: ['~$80-100 subscription', 'Diagnostic plus content-area lessons and practice', 'Structured repair by category', 'Weakest-category remediation, especially mechanics or E&M' ] },
      { label: 'Khan Academy physics (free) + university review texts', values: ['Free to ~$60', 'Video lessons and problem sets', 'Conceptual repair in mechanics and E&M', 'Career changers refreshing physics fundamentals' ]
      },
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; ETS registration fees are set by ETS and state surcharges may apply. Passing scores are set by state and are not included in any fee. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The 5266 failure modes cluster around four roots: studying the five categories evenly instead of by weight, preparing against the retired 5265 blueprint, ignoring the Science and Engineering Practices and teaching-scenario layers, and never running a full-length mock at the real 72-seconds-per-item pace. Every one of the six traps below is fixable within a single ten-week cycle, and most are exactly the mistakes the question design is built to punish. The first trap is structural and costs the most: the retired 5265 covered six categories with different weights, and material still on sale describes that older exam, so a candidate who studies the old layout meets a paper that has been re-weighted and re-layered. The second is the weighting trap: Mechanics is 35 percent of the paper, so an even five-way study plan starves the largest block while over-preparing the 12-percent nature-of-science category. The third is the layer trap: half or more of the questions integrate a Science and Engineering Practice, and a quarter to a third are set inside teaching tasks, so a candidate who studies only straight physics content misses a large share of the paper\u2019s distinctive items. The fourth is the recall trap: treating the exam as closed-book and memorising constants and the periodic table that the on-screen Help provides for free. The fifth is a subtopic trap — skipping fluids, simple harmonic motion, gravitation and rotational motion because they sit outside the core mechanics narrative — and the sixth is a pacing trap: never running a full mock, so the 150-minute clock arrives as a surprise. Each trap has a concrete fix below, and the common thread is that the 5266 is a breadth exam where targeted, weight-ordered repair beats broad re-study.',
    items: [
      {
        mistake: 'Studying the retired 5265 layout',
        fix: 'The 5266 redesigned the physics test from six categories to five, changed the weights, and added a required layer where half or more of the questions integrate a Science and Engineering Practice. Books and courses still on sale describe the older exam. Verify that any material is current for 5266 and matches the five-category blueprint before buying.'
      },
      {
        mistake: 'Studying the five categories evenly',
        fix: 'Mechanics is about 44 of the 125 questions — 35 percent — and mechanics plus electricity and magnetism is more than half the paper. A flat study plan starves the largest block by construction. Allocate hours in the same proportions as the question counts and re-test each category before moving on.'
      },
      {
        mistake: 'Ignoring the Science and Engineering Practices layer',
        fix: 'Half or more of the questions integrate an SEP from the Next Generation Science Standards — experimental design, data analysis, modelling, argument from evidence. A standard physics review does not cover these. Work the SEP list from the Study Companion explicitly, because this layer is where broad-but-shallow candidates lose a block of points.'
      },
      {
        mistake: 'Skipping the teaching-scenario items',
        fix: 'Roughly one-quarter to one-third of the paper applies physics content to the decisions a teacher makes during instruction. These are physics questions inside a classroom frame, not pedagogy questions, and they are not covered by textbook review. Drill them as their own type so the frame does not surprise you on exam day.'
      },
      {
        mistake: 'Studying the test as closed-book',
        fix: 'The periodic table and a table of physical constants and conversion factors are available as on-screen Help, with additional constants given in question text, and there is no calculator on this test. A candidate who memorises what the test provides is wasting memory and time. Learn what the help screens offer, use them, and keep the hand arithmetic simple.'
      },
      {
        mistake: 'Never running a full-length mock',
        fix: 'One hundred twenty-five questions in 150 minutes is about 72 seconds per item, and the SEP and teaching-scenario items run longer than recall items. Candidates who only drill in short blocks mis-pace on the real paper. Two full mocks in Week 9 turn pacing from a surprise into a plan.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The 5266 is 125 selected-response questions in 150 minutes, scored on the 100-200 scaled scale against a state-set cut. The paper covers five content categories — Mechanics (about 44 questions), Electricity and Magnetism (about 26), Waves (about 21), Principles and Models of Matter and Energy (about 19), and Nature and Impact of Science and Engineering (about 15) — and every item is selected-response, meaning single-answer multiple choice plus a minority of multiple-select items where you choose more than one option; ETS notes that some questions on a form are pretest items that do not count toward your score. No calculator is provided or needed, but the periodic table and a table of physical constants and conversion factors are available as on-screen Help, and additional constants are included in question text when required. The distinctive structural feature is the layering: half or more of the questions integrate one or more Science and Engineering Practices from the Next Generation Science Standards, and roughly one-quarter to one-third apply physics content inside a teaching scenario or instructional task, so the paper measures applied physics reasoning rather than pure recall. Pacing is the dominant tactical skill: about 72 seconds per item sustained across the sitting, with the SEP-integrated and teaching-scenario items running longer than the recall items, so eliminate-and-move is the core discipline. The content weighting rewards breadth with a heavy mechanics bias: a candidate who is strong in mechanics and E&M and knows the SEP layer collects the majority of points, while a candidate who studied every category shallowly loses the weighted block. The samples below illustrate the published item style across three of the five categories.',
    types: [
      { name: 'Single-answer multiple choice', share: 'The large majority of items', detail: 'Four answer choices across all five categories. Distractors are plausible near-misses — a sign error, a swapped formula, a misread unit — so partial fluency is punished.' },
      { name: 'Multiple-select items', share: 'A minority of items', detail: 'The stem states how many options to choose, and scoring is all-or-nothing. Common where several conditions or several correct steps together complete a claim.' },
      { name: 'Science and Engineering Practice items', share: 'Half or more of all questions integrate one', detail: 'Experimental design, data analysis, modelling and argument-from-evidence items that ask you to apply a practice, not just a formula. The distinctive 5266 layer.' },
      { name: 'Teaching-scenario items', share: 'Roughly one-quarter to one-third', detail: 'Physics content applied to the decisions a teacher makes — evaluating a student\u2019s reasoning, choosing a demonstration, anticipating a misconception.' }
    ],
    samples: [
      {
        prompt: 'A 2 kg object is moving at 4 m/s when a constant net force of 8 N acts on it in the direction of motion for 3 seconds. What is the object\u2019s final speed?',
        options: [
          'A. 6 m/s',
          'B. 8 m/s',
          'C. 10 m/s',
          'D. 16 m/s'
        ],
        answer: 'D',
        explanation: 'The impulse-momentum theorem gives F(Δt) = m(v_f - v_i). The net force of 8 N acting for 3 seconds gives an impulse of 24 kg·m/s, so the change in velocity is 24 / 2 = 12 m/s, and the final speed is 4 + 12 = 16 m/s (D). A (6 m/s) comes from dividing the force by the mass and ignoring the time. B (8 m/s) confuses the force value with a velocity. C (10 m/s) divides the impulse by 3 m/s in a misapplication of units. This item tests the mechanics core, and the correct approach is the impulse-momentum theorem, which is exactly the reasoning the blueprint rewards in its largest category.'
      },
      {
        prompt: 'A student states that a rock and a feather, dropped from the same height in air, fall at different speeds because the rock is heavier. Which response best addresses the misconception?',
        options: [
          'A. In the absence of air resistance, both objects fall with the same acceleration regardless of mass',
          'B. Heavier objects always accelerate faster in every situation',
          'C. The feather falls more slowly because it contains less gravity',
          'D. The rock accelerates faster because air pushes it downward'
        ],
        answer: 'A',
        explanation: 'The student\u2019s claim is the classic mass-and-falling-speed misconception. The correct physics is that in the absence of air resistance, all objects fall with the same acceleration due to gravity regardless of mass (A), and in air the feather falls more slowly because of drag, not because it is lighter. B affirms the misconception and is false once air resistance is removed. C is nonsensical — gravity is not contained in objects. D misidentifies the cause of the rock\u2019s faster fall, which is the feather\u2019s larger drag-to-weight ratio, not air pushing the rock. This item is a teaching-scenario question: the physics is applied to how a teacher would correct a student\u2019s reasoning, which is the layer the blueprint explicitly tests.'
      },
      {
        prompt: 'A student sets up an experiment to test how the length of a pendulum affects its period, keeping the amplitude and the bob mass constant. Which variable is the dependent variable?',
        options: [
          'A. The length of the pendulum',
          'B. The period of the pendulum',
          'C. The mass of the bob',
          'D. The amplitude of the swing'
        ],
        answer: 'B',
        explanation: 'In an experimental-design item, the dependent variable is the one being measured in response to the change, and here the student measures the period as the length changes, so the period is the dependent variable (B). A (the length) is the independent variable, the one the student deliberately varies. C (the mass) and D (the amplitude) are held constant as controlled variables. This item tests the Science and Engineering Practices layer — identifying variables is a data-analysis skill, not a physics formula, and it is exactly the kind of question the redesigned 5266 rewards.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The 5266 is a single appointment of 150 minutes at a Prometric test centre or via ETS online proctoring, containing 125 selected-response questions in one sitting. The most common way a qualified candidate loses the seat is administrative: your government-issued photo ID must match your Praxis account name exactly, and for online proctoring you need a private room, working camera and microphone, and a clean desk. Check your account spelling and your state\u2019s cut score the week before, because neither can be fixed at the check-in desk. At the centre you are checked in, photographed, and seated at a computer; scratch paper is issued and collected. The testing interface allows flagging and review within the single section, and there are no separately timed subtests — the 150-minute clock runs continuously, so budget roughly 72 seconds per item and keep moving. There is no calculator, which is intentional: the arithmetic is designed to be handled by hand, and the periodic table and a table of physical constants and conversion factors are available as on-screen Help, so use them instead of taxing memory. The practical pacing plan is: clear the recall items quickly, spend your working time on the Science and Engineering Practice and teaching-scenario items, flag genuine uncertainties, and use the final minutes to review flags rather than re-reading everything. There are no scheduled breaks in the sitting; unscheduled breaks may be taken but the clock does not stop, so use the restroom before check-in and keep a water bottle at the centre\u2019s discretion. The pretest items are indistinguishable from scored ones, so answer everything as if it counts. When you finish, your scaled score appears on screen, and the official score report follows in about five weeks to the recipients you selected at registration — typically your state agency and your preparation program.',
    bring: [
      'Government-issued photo ID with your name matching your Praxis account exactly',
      'Your Praxis registration confirmation or candidate ID in case check-in cannot locate the booking',
      'For online proctoring: a phone for check-in, a private room, and a webcam and microphone already tested on the machine you will use',
      'Your state\u2019s 5266 cut score, so you can interpret the on-screen result correctly'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — secured in a locker at a centre',
      'All notes, textbooks and printed study materials — no personal scratch paper is allowed',
      'Bags, coats, food and drink beyond what the centre permits',
      'A calculator — this test does not provide or permit one, and the arithmetic is designed to be done by hand'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your state\u2019s 5266 cut score, verify your ID name matches your Praxis account exactly, and re-run one timed half-exam.' },
      { time: '24 hours before', detail: 'For online proctoring, run the system test on the same machine and network. For a centre, confirm the address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin online check-in, which includes a photo, ID capture, and (online) a room scan.' },
      { time: 'Check-in', detail: 'ID verification, signature, lockers. You are seated; the tutorial explains flagging and the on-screen Help screens before the timer starts.' },
      { time: '0-5 minutes', detail: 'Open the on-screen Help once to confirm the periodic table and constants table behave as you rehearsed, then begin at a steady 72-seconds-per-item tempo.' },
      { time: '5-75 minutes', detail: 'Clear the recall items quickly and work the mechanics items with care; flag genuine uncertainties and never stall on a single item.' },
      { time: '75-145 minutes', detail: 'Continue at the same tempo; this is where the SEP-integrated and teaching-scenario items live, so re-read stems carefully and apply the practices you drilled.' },
      { time: 'Final 5 minutes', detail: 'Review flagged items, then submit rather than letting the clock expire.' }
    ],
    rules: [
      '125 selected-response questions in one 150-minute session; scaled score on the 100-200 scale with a state-set cut.',
      'No calculator is provided or permitted; the periodic table and a table of physical constants are available as on-screen Help.',
      'You may flag items and review them within the single section; there are no separately timed subtests.',
      'No scheduled breaks in the sitting; unscheduled breaks may be taken but the clock does not stop.',
      'Scratch paper is issued at a test centre and collected; online proctoring uses a digital whiteboard only.',
      'Some questions on the form are pretest items that do not count toward your score.',
      'Retakes are subject to the ETS waiting-period policy after score release; each attempt is paid in full.'
    ],
    afterwards:
      'Your scaled score appears on screen when you finish, and the official report follows in about five weeks to the recipients you selected — typically your state education agency and your preparation program. Because the cut score is state-set, read your result against your state\u2019s published 5266 requirement rather than against any number on the report. On a pass, the physics content-knowledge hurdle is cleared and you move to the remaining licensure requirements, commonly a pedagogy test and any state-specific components. On a fail, the path is straightforward: wait out the ETS retake waiting period, but use the window deliberately. The most common failure pattern on 5266 is not missing physics overall but a specific category — usually mechanics subtopics such as fluids and harmonic motion, or the Science and Engineering Practices layer — and that is fixable in one targeted cycle. Do not re-book the same knowledge; spend the window repairing the specific area your practice and the score report point to, and treat the retake as a different exam experience rather than a second roll of the same dice.'
  }
};

export default data;
