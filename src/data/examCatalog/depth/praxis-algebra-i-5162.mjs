// Depth content for: praxis-algebra-i-5162
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
  reviewedBy: 'Test structure, question count, timing, fee and content categories were taken from the official ETS Praxis page and Study Companion for Algebra I (5162).',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$64,580 median for high school teachers (BLS, May 2024)',
    summary:
      'The direct conclusion for an Algebra I (5162) candidate is that this exam is a licensing toll gate rather than a pay lever: the credential qualifies a teacher to hold an Algebra I teaching assignment, and the wage that assignment pays is tracked by the closest BLS occupation, High School Teachers, SOC 25-2031, which had a May 2024 median annual wage of $64,580. The BLS classifies by job duties rather than by certificate, so no wage series isolates Algebra I teachers specifically, and secondary mathematics teachers are paid on district salary schedules where years of service and graduate credits drive progression far more than subject certification does. The distribution matters more than the median: geography dominates the spread, with state-level medians ranging from the high $40,000s to more than $90,000, and the highest-paying states are largely the highest-cost ones such as California, New York and Massachusetts. BLS counted 1,094,500 high school teachers in 2024 and projects a 2 percent decline in employment from 2024 to 2034, while still expecting about 66,200 openings a year, almost all of them replacement need from retirement and career change. The practical reading is that mathematics teachers remain chronically in demand in most regions, which gives a certified Algebra I teacher some negotiating leverage for stipends and workload, but the wage itself moves with the schedule, not with the credential. One nuance specific to 5162: the exam exists because many states issue a restricted or add-on endorsement limited to Algebra I, so a candidate taking it is often already employed or under contract, and the exam is a condition of the assignment rather than a career entry point. Because the financial stake is the assignment itself, the exam should be treated as a professional obligation to clear quickly and once, not as a career decision with wide salary consequences.',
    rows: [
      { label: 'Median annual wage, high school teachers', value: '$64,580', note: 'BLS Occupational Outlook Handbook (SOC 25-2031), May 2024' },
      { label: 'Employment, 2024', value: '1,094,500 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~66,200 per year', note: 'BLS OOH Job Outlook, 2024-34 — almost all replacement need' },
      { label: 'Algebra I teacher premium', value: 'Market-dependent', note: 'Math teachers are in persistent demand; stipends and salary credit vary by district, not by this exam' }
    ],
    growth: '-2% projected change 2024-34 (decline driven by falling secondary enrollment), with ~66,200 replacement openings a year. Pay is set by district salary schedules, so geography and experience matter more than the credential.',
    source: {
      label: 'BLS Occupational Outlook Handbook — High School Teachers',
      url: 'https://www.bls.gov/ooh/education-training-and-library/high-school-teachers.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'ETS publishes no pass rate — the 5162 cut score is set by each state, commonly in the 148-157 range',
    summary:
      'ETS does not publish a pass-rate statistic for Praxis 5162 or any other Praxis test, and there is no single national passing score: each state education agency that accepts 5162 sets its own cut on the 100-200 scaled score scale, and for Algebra I the commonly cited state-set passing scores cluster in the 148 to 157 range, with some states also conditioning the requirement on the certificate area or grade band. That means the same scaled score clears licensure in one state and falls short in another, so the first research step before any prep purchase is to look up the exact 5162 cut score for your state on the ETS Praxis state requirements page or your state education agency site. What is uniform and verifiable is the operational policy: the test is computer-delivered with 60 selected-response questions in 150 minutes, scored on the 100-200 scaled scale, ETS enforces a mandatory waiting period between attempts, there is no limit on attempts, and each attempt is paid at full price. A second structural fact matters for planning: because 5162 is a limited-endorsement exam, several states use it as an add-on rather than a full licensure test, so the candidate pool is mostly practicing or newly hired teachers, and the relevant comparison for a candidate is against their own state\u2019s cut, not against a national average that does not exist. The correct planning question is therefore not what the pass rate is but what your state\u2019s cut score is and how far above it your practice scores sit, because everything else, including prep-vendor pass-rate claims and forum anecdotes, is noise. Treat any number a vendor calls a pass rate as a marketing artifact, and instead build your preparation around clearing your state\u2019s published cut with a deliberate margin, because the difference between 155 and 160 scaled points can be a handful of items on a 60-question paper.',
    source: {
      label: 'ETS — Praxis Algebra I (5162)',
      url: 'https://praxis.ets.org/test/algebra-i-5162.html'
    },
    caveat:
      'ETS publishes no pass rate by exam. The 5162 cut score is set independently by each state education agency on the 100-200 scaled score scale; confirm your state\u2019s requirement before registering.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The 5162 is a compact paper: 60 selected-response questions in 150 minutes, with an on-screen graphing calculator provided, and the content map is three categories — Principles of Algebra (about 23 questions, 38 percent), Functions (about 18 questions, 30 percent), and Number and Quantity, Probability and Statistics (about 19 questions, 32 percent). The structural fact that should shape the schedule is that the exam is heavily weighted toward reasoning and justification rather than rote computation: the Principles of Algebra category explicitly includes mathematical reasoning and justification of the reasoning process used to solve equations, and the Functions category rewards understanding how linear, quadratic and exponential models differ, so a candidate who is fast at algebra but cannot explain why a step is valid has a real gap. The plan below runs six to eight weeks at roughly 8-10 hours a week. Because 5162 is a single-course endorsement exam, many candidates already teach or have recently taught the content, and for them the first diagnostic week usually exposes a narrow set of repair targets — often statistics and probability, or the reasoning-and-justification items, which are the most common weak spots for strong calculators. The final two weeks should be timed mock exams on the real format, because a 150-minute paper with an on-screen calculator rewards rehearsal of the exact tool you will have: candidates who practise only with a handheld calculator lose time fumbling with the interface on exam day. Before planning, confirm that 5162 is the test your state actually requires, because some states license Algebra I through the broader Mathematics: Content Knowledge (5165) instead, and preparing for the wrong exam wastes both weeks and money. The hours below are built for a practicing teacher with evenings and weekends; if you are not currently teaching, add two weeks of structured algebra review before Week 1.',
    totalHours: '50-80 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Diagnostic and state cut-score lookup',
        tasks: [
          'Take one untimed diagnostic pass through all three content categories to rank your starting position',
          'Look up your state\u2019s exact 5162 cut score on the ETS Praxis state requirements page and write it down',
          'Confirm 5162 is the exam your state requires (some states use 5165) before investing a week'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Principles of Algebra (38%)',
        tasks: [
          'Drill algebraic expressions, polynomial operations and equivalent forms, then equations and inequalities including systems',
          'Work the reasoning-and-justification items explicitly — why each step is valid, not just what the answer is',
          'One timed 30-question drill per week under 75 minutes to build pace'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Week 4',
        focus: 'Functions (30%)',
        tasks: [
          'Master function notation, domain and range, and analyzing behavior through varied representations',
          'Study how functions and relations model relationships, and the differences among linear, quadratic and exponential models',
          'Re-test the Principles of Algebra items you missed in Weeks 2-3 to confirm the repair took'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Number and Quantity; Probability and Statistics (32%)',
        tasks: [
          'Review exponents and radicals, rational and irrational numbers, and quantitative reasoning and units',
          'Work data summarization, interpretation and linear regression models, plus simple and compound probability',
          'Two timed 30-question half-exams per week, rotated across all three categories'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Week 7',
        focus: 'Full-length timed mocks',
        tasks: [
          'Take two full 5162 mocks: 60 questions in 150 minutes using only the on-screen graphing calculator',
          'Review both by content category — the pattern of misses matters more than the total score',
          'Drill the specific topics that cost points in the mocks, especially statistics and reasoning items'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Week 8',
        focus: 'Taper and logistics',
        tasks: [
          'Light review of category checklists and miss lists, plus one timed half-exam to keep the pace reflex fresh',
          'Confirm your state cut score and that your ID name matches your Praxis account exactly',
          'Confirm your seat, travel or at-home system test, and take one quiet day before the exam'
        ],
        hours: '6-8 hrs'
      }
    ],
    variants: [
      { label: 'Currently teaching Algebra I', detail: 'Five weeks at 8-10 hrs/week. Your daily work covers most of Principles of Algebra; spend the recovered time on statistics and probability plus the reasoning-and-justification items, which classroom fluency does not automatically supply.' },
      { label: 'Returning teacher or career changer', detail: 'Eight to ten weeks at 8-10 hrs/week. Add two weeks before Week 1 for a structured algebra refresher; the content is not advanced, but equation-solving speed decays badly with disuse.' },
      { label: 'Holding a broad math credential already', detail: 'Three to four weeks. The 5162 is narrower than 5165, so the gap is mostly the exam-specific emphasis on justification and the statistics category — work those and take two timed mocks.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The 5162 rewards three skills above all: fluent algebra, the ability to justify a reasoning step, and disciplined use of the on-screen graphing calculator under a 150-minute clock. Because the exam is a focused single-course endorsement test, breadth is a smaller problem than on the general mathematics Praxis tests — the risk is speed, justification and category balance, not coverage of a huge syllabus. The single highest-yield planning decision is to weight study time by the published question counts: Principles of Algebra is about 23 of the 60 questions, Functions about 18, and Number and Quantity, Probability and Statistics about 19, so a candidate who studies evenly across the three is under-preparing the largest category and over-preparing the smallest. The second highest-yield decision is to rehearse the on-screen calculator from the first week, because the tool is provided for the entire test and its interface is not the one most candidates carry in their pocket. The third is to treat the reasoning-and-justification items as their own question type rather than assuming that computational skill transfers to them, because the exam explicitly tests whether a candidate can name the property or rule that makes a step valid, which is a different skill from producing the answer. The strategies below are ordered by score impact, and the first two are the difference between a passing plan and a lucky one: they are not optional extras to tack on after content review, they are the plan. A candidate who skips the calculator rehearsal and the category-weighted schedule is effectively betting that raw algebra ability compensates for the two things the paper is deliberately built to measure.',
    items: [
      {
        title: 'Rehearse with the on-screen graphing calculator, not your own',
        detail: 'ETS provides an on-screen graphing calculator for the entire 5162 test, and its interface differs from any handheld device. Candidates who practise only with a physical calculator lose measurable time on exam day entering expressions and reading graphs. Spend at least two sessions working the official calculator tutorial and run your full-length mocks on the same tool, because calculator fluency is a pacing skill as much as a content one.'
      },
      {
        title: 'Learn to justify, not just to solve',
        detail: 'The Principles of Algebra category explicitly tests mathematical reasoning and the justification of the reasoning process used to solve equations and inequalities. That means items ask why a step is valid, whether a transformation preserves equivalence, and whether a conclusion follows from a claim. Build the habit of saying the reason out loud for every practice item you solve — candidates who skip this are routinely surprised by how many 5162 items are argument questions in computation clothing.'
      },
      {
        title: 'Weight study time by the published question counts',
        detail: 'Principles of Algebra is about 23 questions, Functions about 18, and Number and Quantity, Probability and Statistics about 19. A flat plan that studies a bit of everything starves the largest category and over-invests in the smallest. Diagnose in Week 1, give your weakest category the most hours, and re-test it before the exam — the 60-question paper makes category-level repair the highest-yield move.'
      },
      {
        title: 'Drill the statistics and probability category explicitly',
        detail: 'Data summarization, linear regression, and simple and compound probability are the most commonly neglected topics among strong algebra students, because they sit outside the equation-solving core of the subject. Build a short checklist from the Study Companion\u2019s statistics topics and drill it in spaced sessions; the volume is small and highly coachable, and it protects roughly a third of the paper\u2019s third category.'
      },
      {
        title: 'Distinguish the three function models cold',
        detail: 'The Functions category tests the differences among linear, quadratic and exponential models and how each is recognized from data, graphs or a formula. Master the tell-tale signatures — constant rate of change, constant second difference, constant multiplier — because discrimination questions are a staple of this category and reward exactly this kind of structured knowledge.'
      },
      {
        title: 'Run full-length timed mocks on the real format',
        detail: 'Sixty questions in 150 minutes is a comfortable pace — about 2.5 minutes per item — but only if you do not stall. Two full mocks in Week 7 tell you exactly where over-thinking costs you and let you rehearse the skip-and-return discipline the ETS interface supports. Track the clock against question 30 and question 45 so pacing becomes a plan, not a surprise.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The highest-value resources for the 5162 are free: the ETS Study Companion, which contains the exact content categories, sample questions and the on-screen calculator directions, and the ETS Interactive Practice Test, which is the closest thing to the real item style and is the best single readiness check available. Third-party courses add structured drilling volume and are worth it mainly if a specific category needs systematic repair — statistics and probability especially, because that is the category most algebra-strong candidates neglect. The buying logic for this exam is unusual because the paper is so compact: a 60-question, 150-minute test does not require a multi-hundred-dollar course library, and for most candidates the official set plus one good question bank is enough. The decision really is how much structured remediation your two weakest categories need, and that should be diagnosed before you spend anything, not after. One caution that applies to all paid materials: ETS revises Praxis blueprints on a published cycle, and some states changed which test they accept for the Algebra I endorsement, so verify that any course is current for 5162 and matches the three-category blueprint rather than the older five-category layout of the retired general mathematics tests. Employers and school districts are the hidden variable: many districts that require the Algebra I endorsement pay for or reimburse the registration fee and prep materials, so asking a principal or HR office before buying anything is a free first step that candidates routinely skip. The table below lists current list prices as of mid-2026; we do not rank by commission and prices change frequently.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ETS Study Companion (5162)', values: ['Free', 'PDF content outline with sample questions', 'The authoritative content map', 'Download first — tag every miss to its categories' ] },
      { label: 'ETS Praxis Interactive Practice Test (5162)', values: ['~$20', 'Timed online practice with immediate scoring', 'Closest question style to the real exam', 'The best single readiness check before booking' ] },
      { label: 'Exam registration (5162)', values: ['~$130 (confirm at ets.org/praxis)', 'Prometric centre or online proctoring', 'Required to sit the exam', 'Book only after practice scores clear your state cut with a margin' ] },
      { label: '240 Tutoring or similar Praxis 5162 course', values: ['~$80-100 subscription', 'Diagnostic plus content-area lessons and practice', 'Structured repair by category', 'Weakest-category remediation, especially statistics or reasoning' ] },
      { label: 'Khan Academy (free) + Mometrix flashcards', values: ['Free to ~$40', 'Video lessons and drill decks', 'Cheap algebra and statistics breadth review', 'Budget prep for returning candidates' ] },
      { label: 'Study.com official ETS partner course', values: ['~$59-79/month subscription', 'Video lessons with chapter quizzes and full practice tests', 'A paced, exam-aligned syllabus', 'Candidates who want external structure and progress tracking' ]
      },
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; ETS registration fees are set by ETS and state surcharges may apply. Passing scores are set by state and are not included in any fee. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The 5162 failure modes cluster around three roots: preparing for the wrong exam or the wrong cut score, treating a reasoning-and-justification paper as a pure computation drill, and never rehearsing the on-screen calculator under a full-length clock. Every one of the six traps below is fixable within a single eight-week cycle, and most are exactly the mistakes the question design is built to punish. The first trap is structural and costs the most: some states license the Algebra I assignment through the broader Mathematics: Content Knowledge (5165) test, so a candidate who assumes 5162 without checking the state requirement can study the wrong blueprint entirely. The second is targetless: because there is no national passing score, a candidate who trains to a forum-average number such as 155 may be aiming above or below their actual state cut, and the difference between a 148 and a 157 requirement is a handful of items on a 60-question paper. The third and fourth are content traps: skipping the justification layer and skipping the statistics and probability category, both of which are classic weak spots for fast calculators and both of which are directly rewarded by the blueprint. The fifth is a tool trap — never using the on-screen calculator during preparation — and the sixth is a pacing trap: never running a full-length mock, so the real paper\u2019s 150-minute clock and calculator-entry time arrive as a surprise. Each trap has a concrete fix below, and the common thread is that the 5162 is small enough that targeted repair beats broad re-study.',
    items: [
      {
        mistake: 'Preparing for the wrong exam',
        fix: '5162 is the limited Algebra I endorsement test; some states license the same assignment through the broader Mathematics: Content Knowledge (5165) instead, and a few use both for different certificate areas. Preparing for the wrong one wastes your money and your study weeks. Confirm which exam your state actually requires in Week 1 and download that exam\u2019s Study Companion rather than a generic Praxis math guide.'
      },
      {
        mistake: 'Training to a national passing score that does not exist',
        fix: 'There is no single Praxis 5162 passing score; each state sets its own cut on the 100-200 scale, commonly in the 148-157 range. Look up your state\u2019s requirement in Week 1 and require your practice mocks to beat it by a margin. A score that usually passes in forums can still fail your state.'
      },
      {
        mistake: 'Drilling computation and ignoring justification',
        fix: 'The Principles of Algebra category explicitly tests mathematical reasoning and justification of the steps used to solve equations. A candidate who can compute quickly but cannot say why a step is valid loses an entire class of items. For every practice problem, force yourself to state the reason out loud, and drill the reasoning-and-proof items as their own question type.'
      },
      {
        mistake: 'Treating statistics and probability as a skip category',
        fix: 'Number and Quantity, Probability and Statistics is about 19 of the 60 questions — nearly a third of the paper. Candidates who skip it to spend more time on equations lose a block of points that is highly coachable. Build a short checklist of the Study Companion\u2019s data and probability topics and drill it in spaced sessions.'
      },
      {
        mistake: 'Never using the on-screen calculator during prep',
        fix: 'The 5162 provides an on-screen graphing calculator for the whole test, and its interface is not your handheld. Candidates who only practise on a physical calculator lose time entering expressions and reading graphs on exam day. Run at least two sessions on the official calculator tutorial and all full-length mocks on the same tool.'
      },
      {
        mistake: 'Never running a full-length mock',
        fix: 'Sixty questions in 150 minutes is a comfortable but unforgiving pace when combined with calculator entry time. Candidates who only drill in short blocks mis-pace on the real paper and rush the final items. Two full mocks in Week 7 turn pacing from a surprise into a plan.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The 5162 is 60 selected-response questions in 150 minutes, scored on the 100-200 scaled scale against a state-set cut. The paper covers three content categories — Principles of Algebra (about 23 questions), Functions (about 18 questions), and Number and Quantity, Probability and Statistics (about 19 questions) — and every item is selected-response, meaning single-answer multiple choice plus a minority of multiple-select items where you choose more than one option; ETS notes that some questions on a form are pretest items that do not count toward your score. An on-screen graphing calculator is provided for the entire test, and a table of formulas and constants is available, so the paper does not test recall of arcane formulas; it tests whether you can use the tools to solve problems and justify your reasoning. There are no constructed-response items, so pacing is the dominant tactical skill: about 2.5 minutes per item sustained across the sitting, with eliminate-and-move as the core discipline — answer confidently, flag genuinely uncertain items for review, and never let a single question eat several minutes. The reasoning layer is what distinguishes this paper from a routine algebra quiz: items repeatedly ask whether a step is valid, whether a transformation preserves equivalence, and whether a conclusion follows from a claim, so candidates who can explain their mathematics collect points that pure calculators miss. The function-model discrimination items — recognizing linear, quadratic and exponential growth from data, graphs or formulas — are another staple, as are the data-interpretation items that ask what a correlation or a regression line does and does not support. The samples below illustrate the published item style across the three categories.',
    types: [
      { name: 'Single-answer multiple choice', share: 'The large majority of items', detail: 'Four answer choices across all three categories. Distractors are plausible near-misses — a sign error, a swapped domain and range, a misapplied regression reading — so partial fluency is punished.' },
      { name: 'Multiple-select items', share: 'A minority of items', detail: 'The stem states how many options to choose, and scoring is all-or-nothing. Common where several equivalent forms or several correct steps together complete a claim.' },
      { name: 'Reasoning and justification items', share: 'Concentrated in Principles of Algebra', detail: 'Items that ask why a step is valid, whether an operation preserves equivalence, or whether a conclusion follows. These reward articulating the mathematics, not just computing it.' }
    ],
    samples: [
      {
        prompt: 'A student solves 3(x + 4) = 21 by writing x + 4 = 7 and then x = 3. Which property justifies the first step?',
        options: [
          'A. The distributive property',
          'B. The division property of equality',
          'C. The associative property of addition',
          'D. The commutative property of multiplication'
        ],
        answer: 'B',
        explanation: 'Dividing both sides of the equation by 3, the same nonzero number, is exactly the division property of equality, and it produces the equivalent equation x + 4 = 7 (B). The distributive property (A) would justify expanding 3(x + 4) into 3x + 12, which the student did not do. The associative property of addition (C) governs regrouping terms in a sum, and the commutative property of multiplication (D) governs reordering factors — neither has anything to do with dividing both sides. This item is a classic reasoning-and-justification question: the arithmetic is trivial, and the point being tested is naming and recognizing the property that makes the step valid.'
      },
      {
        prompt: 'The number of bacteria in a culture doubles every 3 hours. If the culture starts with 500 bacteria, which function models the population P after t hours?',
        options: [
          'A. P(t) = 500 + 2t',
          'B. P(t) = 500(3)^t',
          'C. P(t) = 500(2)^(t/3)',
          'D. P(t) = 500(2)^(3t)'
        ],
        answer: 'C',
        explanation: 'Because the population doubles at a fixed rate of 2 every 3 hours, the growth is exponential with a base of 2 and a time constant of 3 hours, so P(t) = 500(2)^(t/3) (C); after 3 hours the exponent is 1 and the population is 1,000, which checks. A is linear and cannot represent doubling growth. B uses 3 as the base, which would describe tripling every hour rather than doubling every 3 hours. D grows far too fast, doubling 3 times per hour instead of once per 3 hours. This item tests the differences among linear, quadratic and exponential models that anchor the Functions category.'
      },
      {
        prompt: 'A teacher collects the number of hours students studied and their exam scores for 25 students and fits a least-squares regression line. The correlation coefficient is 0.85. Which conclusion is best supported?',
        options: [
          'A. Studying more hours caused the higher exam scores',
          'B. There is a strong positive linear association between study time and exam score',
          'C. Students who studied less than the average earned failing scores',
          'D. A student who studies 100 hours is guaranteed a perfect score'
        ],
        answer: 'B',
        explanation: 'A correlation coefficient of 0.85 indicates a strong positive linear association between the two variables, which is exactly what B states. A is the classic trap: correlation does not establish causation, and this observational classroom data cannot support a causal claim. C over-reads the data — a positive association does not imply that below-average study time produces failing scores. D confuses the strength of an association with prediction certainty; extrapolation to 100 hours and a guarantee of a perfect score are not supported by the model. This item tests the data-interpretation layer of the Number and Quantity, Probability and Statistics category.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The 5162 is a single appointment of 150 minutes at a Prometric test centre or via ETS online proctoring, containing 60 selected-response questions in one sitting with an on-screen graphing calculator provided. The most common way a qualified candidate loses the seat is administrative: your government-issued photo ID must match your Praxis account name exactly, and for online proctoring you need a private room, working camera and microphone, and a clean desk. Check your account spelling and your state\u2019s cut score the week before, because neither can be fixed at the check-in desk. At the centre you are checked in, photographed, and seated at a computer; scratch paper is issued and collected. The testing interface allows flagging and review within the single section, and there are no separately timed subtests — the 150-minute clock runs continuously, so budget roughly 2.5 minutes per item and keep moving. The practical pacing plan is: clear the items you are confident on, flag genuinely uncertain ones, and use the final minutes to review flags rather than re-reading everything. Spend the first two minutes confirming the on-screen calculator behaves as you rehearsed, and use it for tedious computation only, because the interface entry time is where candidates bleed minutes. There are no scheduled breaks in the sitting; unscheduled breaks may be taken but the clock does not stop, so use the restroom before check-in and keep a water bottle at the centre\u2019s discretion. The pretest items are indistinguishable from scored ones, so answer everything as if it counts. When you finish, your scaled score appears on screen, and the official score report follows in about five weeks to the recipients you selected at registration — typically your state agency and your employer or preparation program.',
    bring: [
      'Government-issued photo ID with your name matching your Praxis account exactly',
      'Your Praxis registration confirmation or candidate ID in case check-in cannot locate the booking',
      'For online proctoring: a phone for check-in, a private room, and a webcam and microphone already tested on the machine you will use',
      'Your state\u2019s 5162 cut score, so you can interpret the on-screen result correctly'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — secured in a locker at a centre',
      'All notes, textbooks and printed study materials — no personal scratch paper is allowed',
      'Bags, coats, food and drink beyond what the centre permits',
      'A handheld calculator — the exam provides an on-screen graphing calculator, and personal calculators are prohibited'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your state\u2019s 5162 cut score, verify your ID name matches your Praxis account exactly, and re-run one timed half-exam.' },
      { time: '24 hours before', detail: 'For online proctoring, run the system test on the same machine and network. For a centre, confirm the address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin online check-in, which includes a photo, ID capture, and (online) a room scan.' },
      { time: 'Check-in', detail: 'ID verification, signature, lockers. You are seated; the tutorial explains flagging and the on-screen calculator before the timer starts.' },
      { time: '0-5 minutes', detail: 'Verify the on-screen calculator matches what you rehearsed, then begin at a steady 2.5-minutes-per-item tempo.' },
      { time: '5-75 minutes', detail: 'Work through the paper: answer confidently, flag genuine uncertainties, never stall on a single item.' },
      { time: '75-145 minutes', detail: 'Continue at the same tempo; this is where fatigue bites, so re-read stems carefully on the reasoning and statistics items.' },
      { time: 'Final 5 minutes', detail: 'Review flagged items, then submit rather than letting the clock expire.' }
    ],
    rules: [
      '60 selected-response questions in one 150-minute session; scaled score on the 100-200 scale with a state-set cut.',
      'An on-screen graphing calculator is provided for the entire test; personal calculators are prohibited.',
      'You may flag items and review them within the single section; there are no separately timed subtests.',
      'No scheduled breaks in the sitting; unscheduled breaks may be taken but the clock does not stop.',
      'Scratch paper is issued at a test centre and collected; online proctoring uses a digital whiteboard only.',
      'Some questions on the form are pretest items that do not count toward your score.',
      'Retakes are subject to the ETS waiting-period policy after score release; each attempt is paid in full.'
    ],
    afterwards:
      'Your scaled score appears on screen when you finish, and the official report follows in about five weeks to the recipients you selected — typically your state education agency and your employer or preparation program. Because the cut score is state-set, read your result against your state\u2019s published 5162 requirement rather than against any number on the report. On a pass, the Algebra I endorsement hurdle is cleared and you can hold the assignment your license covers. On a fail, the path is straightforward: wait out the ETS retake waiting period, but use the window deliberately. The most common failure pattern on 5162 is not missing algebra overall but a specific category — usually statistics and probability, or the reasoning-and-justification items — and that is fixable in one targeted cycle. Do not re-book the same knowledge; spend the window repairing the specific area your practice and the score report point to, and treat the retake as a different exam experience rather than a second roll of the same dice.'
  }
};

export default data;
