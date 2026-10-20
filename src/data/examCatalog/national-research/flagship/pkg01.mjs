// Flagship rewrite - College Board package pkg01 (ACCUPLACER x6, AP Biology).
// Sources read 2026-10-20:
//   ACCUPLACER Program Manual 2025-26 (secure-media.collegeboard.org .../accuplacer-program-manual.pdf)
//   ACCUPLACER Consolidated Skills Insight Statements (score bands), ATB Overview (2024)
//   accuplacer.collegeboard.org: What's on the Tests, Get Ready for Test Day, Understand My Scores, How is ACCUPLACER scored
//   AP Central / AP Students: AP Biology exam page and course page (2027 exam), AP Biology score distributions,
//   AP exam fees 2026-27, AP score scale.
// Not published by College Board and therefore omitted: ACCUPLACER student test price (institutions buy test
// units and set student fees), per-category question counts or weights, institution cut scores, pass rates.

const CB = 'College Board';
const MANUAL = 'https://secure-media.collegeboard.org/digitalServices/pdf/accuplacer/accuplacer-program-manual.pdf';
const ON_TESTS = 'https://accuplacer.collegeboard.org/students/prepare-for-accuplacer/whats-on-tests';

export const programs = [
  {
    id: 'college-board',
    body: CB,
    bodyUrl: 'https://www.collegeboard.org',
    about: `College Board is the nonprofit that runs the Advanced Placement (AP) Program, the ACCUPLACER placement suite, CLEP and the SAT suite. Its AP exams are scored 1-5 and are offered through high schools in May, while ACCUPLACER tests are bought by colleges, schools and approved test centers and are used to place students into courses. Because each college sets its own credit and placement rules, College Board scores are inputs to local decisions rather than pass-or-fail credentials.`,
    registrationSteps: [
      {
        title: `Find out which College Board test your school or college requires`,
        description: `AP exams are ordered by your school, and ACCUPLACER tests are bought by the institution that will place you, so the first step is to ask your AP coordinator or the college testing office which test applies. ACCUPLACER placement tests are Reading, Writing, Arithmetic, Quantitative Reasoning, Algebra, and Statistics, Advanced Algebra and Functions, and the WritePlacer essay.`,
        subSteps: [`Ask the admissions or testing office which ACCUPLACER tests your placement needs`, `Ask your AP coordinator which AP exams your school orders`, `Ask whether your institution accepts multiple measures such as high school GPA`],
        duration: ``,
        note: `College Board does not publish a student price for ACCUPLACER because institutions buy test units and set what students pay.`
      },
      {
        title: `Sign in to a College Board account and, for AP, register through your school`,
        description: `AP students join their course sections with a College Board account and the school's AP coordinator orders the exams. For the 2026-27 year, the order deadline for full-year and fall courses is November 13, 2026, and orders placed from November 14, 2026 through March 12, 2027 add a $40 late-order fee per exam.`,
        subSteps: [`Create or sign in to your College Board account`, `Join your AP class section using the code from your teacher`, `Confirm your exam order and payment with the AP coordinator before the deadline`],
        duration: `Order by November 13, 2026 to avoid the late fee`,
        note: `Unused or canceled exams after the November 13 deadline carry a $40 per-exam fee.`
      },
      {
        title: `Book an ACCUPLACER session with the institution or an approved proctor`,
        description: `ACCUPLACER can be given in person at a college or test center, remotely through an approved remote proctoring vendor, or through a video conference with a certified proctor. Remote testing requires a private quiet room, a stable internet connection, a computer and a webcam, and the proctor checks your ID next to your face and scans the room on camera.`,
        subSteps: [`Choose in-person or remote testing with the institution`, `Check that your computer, webcam and room meet the remote rules if testing at home`, `Ask about any accommodation request deadline`],
        duration: ``,
        note: ``
      },
      {
        title: `Bring acceptable photo ID on test day`,
        description: `For ACCUPLACER, acceptable photo ID includes a driver's license, state or federal ID, military ID, middle school, high school or college ID, a U.S. or foreign passport with the name in the Western alphabet, a tribal ID, or a naturalization card or certificate of citizenship. Student IDs must show your name and a recognizable photo and must be validated before testing.`,
        subSteps: [`Check the ID list on the Get Ready for Test Day page`, `Leave phones, tablets, watches, food and drink outside the testing room`],
        duration: ``,
        note: `Physical calculators are not allowed on any ACCUPLACER math test unless an approved accommodation allows one; an on-screen calculator appears on some questions.`
      },
      {
        title: `Test, then read your score report and plan any retest`,
        description: `Placement tests report a 200-300 scaled score and the essay reports a 1-8 holistic score. AP exams report a 1-5 score after the May exam window. For ACCUPLACER, College Board recommends a retest no sooner than 14 days after the first attempt and a third attempt only after 90 days, but your institution may set its own rule.`,
        subSteps: [`Compare your score band with the college placement table`, `Ask about multiple-measures review if you disagree with a placement`, `Send AP scores to colleges through your College Board account`],
        duration: ``,
        note: ``
      }
    ],
    proctoring: `ACCUPLACER placement tests are computer adaptive and delivered online, in person or through approved remote proctoring or video-chat proctoring. AP Biology is a hybrid digital exam in which students answer multiple-choice questions and view free-response questions in the Bluebook app and handwrite free-response answers in paper booklets at school.`,
    retakePolicy: `ACCUPLACER: College Board recommends a first retest 14 days after the initial test and a second retest only after 90 days, then 30-day gaps, but institutions may set their own policy, and the recommendation is mandatory for Ability to Benefit testing. AP: each exam is given once a year in May, so a retake means sitting the exam again the following year.`,
    recertification: `Neither ACCUPLACER scores nor AP scores expire as credentials, but colleges set how long they accept a placement score, and they decide which AP scores earn credit. There are no continuing education requirements. Use the AP credit policy search tool on the AP Students site to check a specific college.`,
    scoreReporting: `ACCUPLACER multiple-choice placement tests are scored on a 200-300 scale in seven bands (200-220, 221-230, 231-240, 241-250, 251-260, 261-270, 271-300). WritePlacer essays are scored 1-8. AP exams are scored 1-5, where 5 is extremely well qualified, 4 very well qualified, 3 qualified, 2 possibly qualified and 1 no recommendation.`,
    refundPolicy: `AP exam fees follow the school's order: the 2026-27 base fee is $99 per exam at U.S. schools (U.S. territories, Canada and DoDEA schools included) and $129 at other schools, with a $37 College Board fee reduction for eligible students. Exams canceled in AP Registration and Ordering after November 13 and by March 12 incur a $40 unused or canceled fee. ACCUPLACER refunds depend on the institution.`,
    providersNote: `College Board's own ACCUPLACER practice downloads and AP course and exam descriptions, past free-response questions and scoring guidelines are the closest match to the real tests. Commercial prep books and apps are supplements. Check that any ACCUPLACER material covers the current Reading, Writing, Arithmetic, QAS and AAF tests rather than older versions.`,
    comparison: {
      title: `College Board AP and ACCUPLACER compared`,
      columns: [`Test family`, `Who arranges it`, `Fee`, `Score and use`, `Typical prep time`],
      rows: [
        { label: `AP exams (e.g. AP Biology)`, values: [`School AP coordinator`, `$99 per exam (2026-27, U.S. schools); $129 elsewhere; $37 fee reduction for eligible students`, `1-5; colleges decide credit and placement`, `A full school year of coursework`] },
        { label: `ACCUPLACER placement tests`, values: [`College, school or approved test center`, `Set by the institution; College Board publishes no student price`, `200-300 scaled; colleges set cut scores`, `College Board suggests at least one week of practice per test subject`] }
      ]
    },
    orgFaqs: [
      {
        q: `Do College Board test scores expire?`,
        a: `College Board does not put an expiry date on ACCUPLACER or AP scores, but colleges decide how long they accept a placement score and which AP scores earn credit. Ask the testing office how recent an ACCUPLACER score must be, and use the AP credit policy search tool to see what each college grants for each AP score.`
      },
      {
        q: `Who sets the passing score on an ACCUPLACER test?`,
        a: `No one passes or fails an ACCUPLACER test. College Board reports a 200-300 scaled score and each college sets its own cut scores for placing students into courses. The only College Board passing scores are the Ability to Benefit values for federal financial aid: Reading 233, Writing 235 and Arithmetic 230.`
      },
      {
        q: `How much does an AP exam cost?`,
        a: `The base fee for 2026-27 is $99 per AP exam at schools in the U.S., U.S. territories, Canada and DoDEA schools, and $129 at schools elsewhere. Eligible students get a $37 College Board fee reduction. Schools can add their own charges, and late orders between November 14, 2026 and March 12, 2027 add a $40 fee.`
      }
    ],
    sourceUrl: `https://apcentral.collegeboard.org/exam-administration-ordering-scores/ordering-fees/exam-fees`,
    verified: true,
    confidence: 'medium'
  }
];

// ---------- shared ACCUPLACER building blocks ----------
const ACC_ESSENTIALS_COMMON = [
  [`Score scale`, `Multiple-choice placement tests are scored 200-300 in seven bands; no one passes or fails, and colleges set their own cut scores`],
  [`Time limit`, `College Board lists no time limit for ACCUPLACER tests; your test center confirms its session rules`],
  [`Retest`, `College Board recommends 14 days before a first retest and 90 days before a second, then 30-day gaps; institutions may set their own rule`],
  [`Delivery`, `Computer adaptive, in person or remotely proctored; students must answer every question`],
  [`ID`, `Photo ID such as a driver's license, passport, military ID or school ID validated before testing`]
];

const ACC_COST = (extra) => ({
  items: [
    { item: `Test fee charged to the student`, fee: `Set by your institution; College Board publishes no student price` },
    { item: `Retest fee`, fee: `Set by the institution; College Board recommends waiting 14 days before the first retest` },
    { item: `Official practice materials from College Board`, fee: `Downloadable from the ACCUPLACER site` },
    ...(extra ? [extra] : [])
  ],
  total: `Set by your institution; College Board publishes no student price`,
  footnote: `Institutions buy ACCUPLACER test units from College Board and decide whether to pass the cost to students, so confirm the price and retest fee with the testing office before you book.`
});

const ACC_TIMELINE = (study, session) => ([
  { stage: `Contact the testing office and book a session`, duration: `Days to a few weeks, set by the institution` },
  { stage: study, duration: `College Board suggests at least one week of practice per test subject` },
  { stage: session, duration: `No time limit listed by College Board; one sitting` },
  { stage: `Read the score report and ask about retest or multiple-measures review`, duration: `Retest earliest 14 days after the first attempt (College Board recommendation)` }
]);

function accRecord(o) {
  return {
    slug: o.slug,
    body: CB,
    tagline: o.tagline,
    description: o.description,
    quickAnswer: { summary: o.summary, advantages: o.advantages },
    roadmap: o.roadmap,
    prerequisites: o.prerequisites,
    eligibility: o.eligibility,
    examMeta: {
      questions: o.questions,
      time: o.time,
      pass: o.pass || `No pass or fail score; scaled 200-300 and each college sets its own placement cut scores`,
      fee: `Not published by College Board; your institution sets the student price and any retest fee`,
      format: o.format,
      admin: `ACCUPLACER (College Board), delivered by colleges, schools and approved test centers in person or by remote proctoring`
    },
    topics: o.topics,
    examEssentials: [...(o.essentials || []), ...ACC_ESSENTIALS_COMMON],
    timeline: ACC_TIMELINE(o.studyStage, o.sessionStage),
    costBreakdown: ACC_COST(o.costExtra),
    difficulty: o.difficulty,
    audience: o.audience,
    time: `About one week of practice per test subject plus your institution's scheduling time`,
    cost: `Set by your institution`,
    faqs: o.faqs,
    summaryPoints: o.summaryPoints,
    relatedSlugs: o.relatedSlugs,
    sourceUrl: o.sourceUrl || MANUAL,
    reviewed: '2026-10',
    confidence: 'medium'
  };
}

export const exams = [
  accRecord({
    slug: 'accuplacer-advanced-algebra-and-functions',
    tagline: `The top ACCUPLACER math test: factoring, functions, logarithms and trigonometry in 20 adaptive questions.`,
    description: `The ACCUPLACER Advanced Algebra and Functions test has 20 adaptive questions, no listed time limit and a 200-300 scaled score. It is the highest of the five ACCUPLACER placement tests and spans eleven published content categories, from Linear Equations and Factoring to Polynomial Equations, Exponential and Logarithmic Equations and Trigonometry. Colleges use the score to decide whether a student can start in precalculus-level or STEM-track math, and each college sets its own cut score because College Board publishes none. It sits above Quantitative Reasoning, Algebra, and Statistics and Arithmetic.`,
    summary: `ACCUPLACER Advanced Algebra and Functions is a 20-question computer-adaptive test scored 200-300 with no pass mark; your college sets the cut score for courses such as precalculus. It covers eleven categories from Linear Equations to Trigonometry. Book it through your college testing office, which also sets the student price and retest fee.`,
    advantages: [
      `Eleven official content categories are published, so you can study exactly what is tested, including Factoring, Quadratics, Functions and Trigonometry.`,
      `Score bands are public: a 271-300 reflects fluency with function notation for transformations, trigonometric ratios in the unit circle, inverse functions and logarithmic expressions.`,
      `An on-screen calculator is built into some questions, so you do not need to bring a handheld calculator.`,
      `College Board lists no time limit and recommends a retest no sooner than 14 days after the first attempt.`
    ],
    roadmap: [`Ask your college whether AAF is part of your placement`, `Download the official practice materials and note your weak categories`, `Book an in-person or remote session`, `Take the 20-question adaptive test`, `Compare your 200-300 score with the college placement table`],
    prerequisites: `None set by College Board. Your college decides which students are assigned this test, usually those whose program of study needs math beyond introductory algebra.`,
    eligibility: `College Board sets no eligibility rules for ACCUPLACER tests. The institution that bought the test units decides who takes Advanced Algebra and Functions, how it is combined with the Quantitative Reasoning, Algebra, and Statistics result, and whether other measures such as high school grades can override a score.`,
    questions: `20 multiple-choice questions in the standard adaptive form (College Board does not disclose how many pretest items are embedded; they do not affect your score)`,
    time: `No time limit listed by College Board; completed in one sitting or saved with Save and Finish Later`,
    format: `Computer adaptive; all items are discrete multiple choice; on-screen calculators appear on some questions`,
    topics: [
      { name: `Linear Equations`, weight: ``, note: `Creating and solving linear equations in one or two variables, inequalities and systems of two linear equations. Category weights are not published.` },
      { name: `Linear Applications and Graphs`, weight: ``, note: `Real-life linear models, elementary linear functions, graphing lines, parallel and perpendicular lines.` },
      { name: `Factoring`, weight: ``, note: `Factoring methods applied to quadratics, cubics and polynomials.` },
      { name: `Quadratics`, weight: ``, note: `Creating and solving quadratic equations by factoring or the quadratic formula, and systems that involve a quadratic.` },
      { name: `Functions`, weight: ``, note: `Function notation, evaluating linear and quadratic functions, graphing and interpreting functions in context.` },
      { name: `Radical and Rational Equations`, weight: ``, note: `Domain and range, graphing and simplifying radical and rational expressions.` },
      { name: `Polynomial Equations`, weight: ``, note: `Creating, solving and graphing polynomial equations and functions.` },
      { name: `Exponential and Logarithmic Equations`, weight: ``, note: `Creating, solving, graphing and interpreting exponential and logarithmic functions.` },
      { name: `Geometry Concepts for Algebra 1`, weight: ``, note: `Area, perimeter and volume expressions, distance formula, Pythagorean theorem and transformations.` },
      { name: `Geometry Concepts for Algebra 2`, weight: ``, note: `Volume of non-prism objects, intersecting line theorems, triangle similarity and congruency, circle equations.` },
      { name: `Trigonometry`, weight: ``, note: `Right-triangle trigonometry, radians and arc length, trigonometric equations, Law of Sines and Law of Cosines.` }
    ],
    essentials: [
      [`Test length`, `20 questions in the standard adaptive form; the COMPANION (non-adaptive) accommodated forms are longer`],
      [`Score bands`, `271-300 band adds evaluating inverse functions and logarithmic expressions; 221-230 starts with factoring quadratics`]
    ],
    studyStage: `Review the eleven categories and practice with official materials`,
    sessionStage: `Take the adaptive test`,
    difficulty: `Challenging`,
    audience: `Students headed for precalculus, calculus or other STEM-track math who need a college placement score.`,
    faqs: [
      { q: `How many questions are on the ACCUPLACER Advanced Algebra and Functions test?`, a: `The standard computer-adaptive form of ACCUPLACER Advanced Algebra and Functions has 20 multiple-choice questions, according to the 2025-26 ACCUPLACER Program Manual. College Board says new questions are pretested at undisclosed positions and do not affect your score, but it does not publish how many of the 20 are scored versus pretest items.` },
      { q: `What is a good score on ACCUPLACER Advanced Algebra and Functions?`, a: `A good score is the one your college requires for the course you want, because College Board publishes no pass mark and each college sets its own cut score. Scores run 200-300 in seven bands. The 271-300 band reflects fluency with logarithms, inverse functions and unit-circle trigonometry, while 221-230 starts with factoring quadratics.` },
      { q: `Is the ACCUPLACER Advanced Algebra and Functions test hard?`, a: `It is the most advanced ACCUPLACER math test, and it is adaptive, so correct answers lead to harder items on factoring, functions, logarithms and trigonometry. Difficulty depends on your preparation and on the course you are targeting. Practicing the eleven published categories with official materials is the most direct way to be ready for it.` },
      { q: `Can I use a calculator on ACCUPLACER Advanced Algebra and Functions?`, a: `You cannot bring a handheld calculator, but some questions provide an on-screen calculator marked by an icon in the top-right corner of the screen. Physical calculators are not allowed on any ACCUPLACER math test unless an approved accommodation permits one. Practice with the calculator on the official student portal before test day.` },
      { q: `How long do I have to finish ACCUPLACER Advanced Algebra and Functions?`, a: `College Board lists no time limit for ACCUPLACER tests, and the test-day page says most are untimed, but your test center confirms its own rules. Because the test is adaptive, you must answer every question, and you cannot skip ahead. Work carefully rather than fast, since there is no speed bonus.` },
      { q: `Can I retake ACCUPLACER Advanced Algebra and Functions?`, a: `Yes, if your institution allows it. College Board recommends a retest at least 14 days after the first attempt and a second retest only after 90 days, then 30-day gaps. Institutions can set stricter or looser rules, so ask the testing office about its retest policy and fee before you register for another session.` },
      { q: `How much does ACCUPLACER Advanced Algebra and Functions cost?`, a: `College Board does not publish a student price. Institutions buy ACCUPLACER test units and decide what, if anything, to charge students, including for retests. Ask your college testing office for the fee, whether remote proctoring costs extra, and whether a previous score from another college can be accepted.` }
    ],
    summaryPoints: [
      `ACCUPLACER Advanced Algebra and Functions has 20 adaptive multiple-choice questions and no time limit listed by College Board.`,
      `Scores run 200-300 in seven bands, and there is no national pass mark; colleges set their own cut scores.`,
      `The content outline has 11 categories, ending with Geometry Concepts for Algebra 2 and Trigonometry.`,
      `College Board recommends waiting 14 days before a first retest and 90 days before a second.`,
      `The student price is set by your institution, not by College Board.`
    ],
    relatedSlugs: [`accuplacer-quantitative-reasoning-algebra-statistics`, `accuplacer-arithmetic`, `ap-precalculus`, `clep-precalculus`]
  }),

  accRecord({
    slug: 'accuplacer-arithmetic',
    tagline: `The foundation ACCUPLACER math test: whole numbers, fractions, decimals and percent.`,
    description: `The ACCUPLACER Arithmetic test has 20 adaptive questions on five skill areas and reports a 200-300 scaled score with no pass mark. Its categories are Whole Number Operations, Fraction Operations, Decimal Operations, Percentage, and Number Comparisons and Equivalents, so there is no algebra on it. Colleges and adult-education programs use the score to place students into developmental math or toward the next test in the ladder, and the Ability to Benefit financial aid pathway sets a federal passing score of 230 for Arithmetic. It is the lowest-level of the three ACCUPLACER math tests.`,
    summary: `ACCUPLACER Arithmetic is a 20-question adaptive test scored 200-300 on whole numbers, fractions, decimals, percent and number comparisons. No national pass mark exists; each college sets cut scores, and only the federal Ability to Benefit pathway uses a fixed 230. Your institution sets the student price.`,
    advantages: [
      `The five content categories are published, so preparation can focus on whole-number, fraction, decimal and percent skills with no algebra.`,
      `The 200-220 band starts with adding and subtracting integers, so the test can place students who need basic review accurately.`,
      `It is the only math placement test with a published federal passing score (230) for Ability to Benefit financial aid.`,
      `Results can show whether you should move up to Quantitative Reasoning, Algebra, and Statistics.`
    ],
    roadmap: [`Confirm with your college that Arithmetic is on your placement list`, `Review fractions, decimals and percent with official practice items`, `Book an in-person or remote session`, `Answer all 20 adaptive questions`, `Compare your score with the college table or the 230 Ability to Benefit score`],
    prerequisites: `None. The institution decides who takes it, and many students take it only when a higher math test is not assigned.`,
    eligibility: `College Board sets no eligibility rules. For federal Ability to Benefit use, students taking ACCUPLACER for ATB purposes must take Reading, Writing and Arithmetic, and the mandatory ATB retest policy applies.`,
    questions: `20 multiple-choice questions in the standard adaptive form (pretest items are embedded at undisclosed positions and do not affect scores)`,
    time: `No time limit listed by College Board; one sitting or Save and Finish Later`,
    format: `Computer adaptive; stand-alone multiple-choice questions, some with an on-screen calculator`,
    topics: [
      { name: `Whole Number Operations`, weight: ``, note: `Addition, subtraction, multiplication and division, order of operations, estimation and rounding, real-life contexts. Category weights are not published.` },
      { name: `Fraction Operations`, weight: ``, note: `Operations with fractions and mixed numbers, including order of operations and applications.` },
      { name: `Decimal Operations`, weight: ``, note: `Operations with decimals, estimation and rounding, real-life contexts.` },
      { name: `Percentage`, weight: ``, note: `Percentage increase and decrease, percent of a number and real-life applications.` },
      { name: `Number Comparisons and Equivalents`, weight: ``, note: `Ordering values, the number line, inequality symbols and equivalent number statements.` }
    ],
    essentials: [
      [`Test length`, `20 questions in the standard adaptive form`],
      [`Ability to Benefit`, `Federal passing score on Arithmetic is 230 (Reading 233, Writing 235) per the College Board ATB Overview; the mandatory ATB retest policy applies`]
    ],
    studyStage: `Review the five categories and practice with official materials`,
    sessionStage: `Take the adaptive test`,
    difficulty: `Easy`,
    audience: `Students starting college math, adult learners and workforce-program applicants who need an Arithmetic placement score.`,
    costExtra: { item: `Ability to Benefit testing`, fee: `Test price set by the institution; ATB retest policy is mandatory` },
    faqs: [
      { q: `How many questions are on the ACCUPLACER Arithmetic test?`, a: `The standard computer-adaptive ACCUPLACER Arithmetic test has 20 multiple-choice questions, per the 2025-26 ACCUPLACER Program Manual. Every question is stand-alone, and the five categories are Whole Number Operations, Fraction Operations, Decimal Operations, Percentage, and Number Comparisons and Equivalents. College Board does not publish the split between scored and pretest items.` },
      { q: `What is a passing score on the ACCUPLACER Arithmetic test?`, a: `There is no general passing score, because College Board says no one passes or fails ACCUPLACER and colleges set their own cut scores. The one fixed figure is for federal Ability to Benefit financial aid, where the passing Arithmetic score is 230 on the 200-300 scale. Ask your college for its placement table.` },
      { q: `Is the ACCUPLACER Arithmetic test hard?`, a: `It is the easiest ACCUPLACER math test, but adaptive scoring means harder items appear as you answer correctly. The 261-270 band includes converting a fraction to a percent and dividing by a fraction or decimal between 0 and 1. Review those skills before you test.` },
      { q: `Can I use a calculator on ACCUPLACER Arithmetic?`, a: `Handheld calculators are not allowed on any ACCUPLACER math test unless an approved accommodation permits one, but some Arithmetic questions show an on-screen calculator, marked by an icon in the top-right corner. Questions where a calculator would give away the answer do not provide one. Practice mental math and written methods as well.` },
      { q: `What score do I need on ACCUPLACER Arithmetic to skip developmental math?`, a: `That depends entirely on your college, because College Board publishes no national cut score. Ask the testing office for its placement table, which maps score bands to courses. Some colleges also assign Quantitative Reasoning, Algebra, and Statistics or weigh high school grades, so read the multiple-measures policy.` },
      { q: `How long before I can retake ACCUPLACER Arithmetic?`, a: `College Board recommends waiting 14 days before a first retest, 90 days before a second, and 30 days between later attempts, but your institution can set its own policy. For Ability to Benefit testing, College Board says this retest policy is mandatory, so ask your financial aid office which rules apply.` },
      { q: `How much does the ACCUPLACER Arithmetic test cost?`, a: `College Board does not publish a student price for ACCUPLACER Arithmetic. Institutions buy the test units and decide whether to charge students and what a retest costs. Contact your college testing office for the exact fee, and ask if remote proctoring or an ID-validation step adds anything.` }
    ],
    summaryPoints: [
      `ACCUPLACER Arithmetic has 20 adaptive questions and five published categories, with no algebra.`,
      `Scores run 200-300 in seven bands; the lowest band starts with adding and subtracting integers.`,
      `The federal Ability to Benefit passing score for Arithmetic is 230; ordinary placement cut scores are set by colleges.`,
      `College Board recommends a 14-day wait before the first retest.`,
      `Physical calculators are not allowed; some questions have an on-screen calculator.`
    ],
    relatedSlugs: [`accuplacer-quantitative-reasoning-algebra-statistics`, `accuplacer-advanced-algebra-and-functions`, `accuplacer-reading`, `accuplacer-writing`]
  }),

  accRecord({
    slug: 'accuplacer-quantitative-reasoning-algebra-statistics',
    tagline: `The middle ACCUPLACER math test: ratios, linear equations, probability, statistics and geometry.`,
    description: `The ACCUPLACER Quantitative Reasoning, Algebra, and Statistics test, known as QAS, has 20 adaptive questions across ten content categories. It is the middle math test: it begins with Rational Numbers and Ratio and Proportional Relationships, moves through Linear Equations, Exponents and Algebraic Expressions, and adds Probability and Sets, Descriptive Statistics and two geometry categories. Colleges use the 200-300 score to place students into college algebra, statistics or quantitative reasoning courses, and each college sets its own cut score. It sits between Arithmetic and Advanced Algebra and Functions.`,
    summary: `ACCUPLACER Quantitative Reasoning, Algebra, and Statistics is a 20-question adaptive test scored 200-300 across ten categories, including Probability and Sets and Descriptive Statistics. College Board publishes no pass mark; your college maps score bands to courses and sets the student price through its testing office.`,
    advantages: [
      `It is the only ACCUPLACER math test that covers Probability and Sets and Descriptive Statistics, so it suits statistics-track placement.`,
      `All ten content categories are published, including two geometry categories.`,
      `The 251-260 band is described as solving systems of linear equations and finding slope and y-intercept, which helps you set a target.`,
      `On-screen calculators are available on some questions, so no handheld calculator is needed.`
    ],
    roadmap: [`Check with your college which math test you are assigned`, `Work through the ten categories with official practice items`, `Book an in-person or remote session`, `Take the 20-question adaptive test`, `Use the score band to plan the next course or retest`],
    prerequisites: `None set by College Board. Your college decides which students are assigned QAS, often after or instead of Arithmetic.`,
    eligibility: `College Board sets no eligibility rules. The institution chooses whether to assign QAS, Arithmetic or Advanced Algebra and Functions, and some colleges consider high school GPA or course history before or alongside the score.`,
    questions: `20 multiple-choice questions in the standard adaptive form (pretest items do not affect scores; the split is not published)`,
    time: `No time limit listed by College Board; one sitting or Save and Finish Later`,
    format: `Computer adaptive; stand-alone multiple-choice items, some with an on-screen calculator`,
    topics: [
      { name: `Rational Numbers`, weight: ``, note: `Calculating and applying rational numbers, including absolute value. Category weights are not published.` },
      { name: `Ratio and Proportional Relationships`, weight: ``, note: `Rates, ratios, proportions and unit conversions.` },
      { name: `Exponents`, weight: ``, note: `Exponents, radicals, fractional exponents and scientific notation.` },
      { name: `Algebraic Expressions`, weight: ``, note: `Creating and evaluating expressions, combining like terms, identifying equivalent expressions.` },
      { name: `Linear Equations`, weight: ``, note: `Creating and solving linear equations and inequalities and systems of two linear equations.` },
      { name: `Linear Applications and Graphs`, weight: ``, note: `Linear models in real-life contexts, graphing lines and inequalities.` },
      { name: `Probability and Sets`, weight: ``, note: `Simple, compound and conditional probability and set notation.` },
      { name: `Descriptive Statistics`, weight: ``, note: `Histograms, box plots, scatterplots, shape, spread and measures of center.` },
      { name: `Geometry Concepts for Prealgebra`, weight: ``, note: `Area and perimeter, circle area and circumference, volume of prisms.` },
      { name: `Geometry Concepts for Algebra 1`, weight: ``, note: `Area, perimeter and volume expressions, distance formula, Pythagorean theorem, transformations.` }
    ],
    essentials: [
      [`Test length`, `20 questions in the standard adaptive form`],
      [`Score bands`, `231-240 adds one-step rate, ratio, proportion and unit conversion; 261-270 adds slope of parallel and perpendicular lines`]
    ],
    studyStage: `Review the ten categories and practice with official materials`,
    sessionStage: `Take the adaptive test`,
    difficulty: `Moderate`,
    audience: `Students placing into college algebra, statistics or quantitative reasoning courses.`,
    faqs: [
      { q: `How many questions are on ACCUPLACER Quantitative Reasoning, Algebra, and Statistics?`, a: `The standard adaptive form of ACCUPLACER Quantitative Reasoning, Algebra, and Statistics has 20 multiple-choice questions, according to the 2025-26 ACCUPLACER Program Manual. All items are stand-alone, drawn from ten categories. College Board does not disclose how many pretest items are mixed in, and those do not affect your score.` },
      { q: `What does QAS stand for on ACCUPLACER?`, a: `QAS stands for Quantitative Reasoning, Algebra, and Statistics, the middle ACCUPLACER math test. It sits above Arithmetic and below Advanced Algebra and Functions and covers ten categories, including Linear Equations, Probability and Sets and Descriptive Statistics. Colleges often use it to place students into college algebra or statistics-level courses.` },
      { q: `What is a good score on ACCUPLACER Quantitative Reasoning, Algebra, and Statistics?`, a: `A good score is the one that meets your college's cut score, because College Board publishes no pass mark. Scores run 200-300 in seven bands. The 251-260 band typically shows solving two-variable linear systems and finding slope and y-intercept, and 271-300 adds connecting nonlinear equations with graphs.` },
      { q: `Is ACCUPLACER QAS harder than Arithmetic?`, a: `Yes, it adds algebra, exponents, probability, statistics and geometry that Arithmetic does not include. Both are 20-question adaptive tests. QAS is below Advanced Algebra and Functions, which adds factoring, logarithms and trigonometry. Your assigned test depends on your college and program, so confirm which one you need first.` },
      { q: `Can I use a calculator on ACCUPLACER QAS?`, a: `Not a handheld one. ACCUPLACER math tests provide an on-screen calculator on some questions, marked by an icon in the top-right corner, and College Board bans physical calculators unless an approved accommodation allows one. A basic, square-root or graphing calculator may appear depending on the question, so learn to use the on-screen tools in the practice portal.` },
      { q: `How soon can I retake ACCUPLACER Quantitative Reasoning, Algebra, and Statistics?`, a: `College Board recommends a first retest 14 days after the initial test, a second after 90 days, and later attempts every 30 days. Institutions may set their own policy, including limits or fees. Use the waiting period to work on your weakest categories rather than retesting immediately.` },
      { q: `How much does ACCUPLACER QAS cost?`, a: `College Board does not publish a student price for ACCUPLACER QAS. The institution that administers it buys test units and decides what to charge, if anything, including for retests. Ask the testing office about the fee, remote-proctoring costs, and whether a score from another college is accepted.` }
    ],
    summaryPoints: [
      `ACCUPLACER QAS has 20 adaptive multiple-choice questions across ten published content categories.`,
      `It is the only ACCUPLACER math test with Probability and Sets and Descriptive Statistics.`,
      `Scores run 200-300 in seven bands, with no national pass mark.`,
      `Physical calculators are not allowed; some questions provide an on-screen calculator.`,
      `College Board recommends waiting 14 days before the first retest.`
    ],
    relatedSlugs: [`accuplacer-arithmetic`, `accuplacer-advanced-algebra-and-functions`, `clep-college-algebra`, `ap-statistics`]
  }),

  accRecord({
    slug: 'accuplacer-reading',
    tagline: `The ACCUPLACER reading placement test: single and paired passages in 20 adaptive questions.`,
    description: `The ACCUPLACER Reading test has 20 adaptive multiple-choice questions on single and paired passages and a 200-300 scaled score. It measures four categories, Information and Ideas, Rhetoric, Synthesis and Vocabulary, using passages from literature and literary nonfiction, careers, history and social studies, humanities and science. Colleges use the score to decide whether students enter credit-bearing English or reading support, and the Ability to Benefit pathway sets a federal passing score of 233. It is the reading counterpart to the multiple-choice Writing test and the WritePlacer essay.`,
    summary: `ACCUPLACER Reading is a 20-question computer-adaptive test scored 200-300, built on single and paired passages in four categories: Information and Ideas, Rhetoric, Synthesis and Vocabulary. No national pass mark exists; colleges set cut scores, and the federal Ability to Benefit score is 233. Your institution sets the student price.`,
    advantages: [
      `The four categories are published, so you can practice inference, central ideas, text structure and vocabulary in context.`,
      `Score bands describe what each range means; the 231-240 band starts with identifying the main purpose of a paragraph.`,
      `It uses both authentic and commissioned passages across literature, social studies, humanities and science.`,
      `No calculator or formula knowledge is required, and College Board lists no time limit.`
    ],
    roadmap: [`Check which English placement tests your college requires`, `Read a variety of passages and practice with official sample questions`, `Book an in-person or remote session`, `Answer all 20 adaptive questions`, `Compare your score with the college table or the 233 Ability to Benefit score`],
    prerequisites: `None set by College Board. The college decides which students are assigned Reading.`,
    eligibility: `College Board sets no eligibility rules. For Ability to Benefit financial aid, students taking ACCUPLACER for ATB purposes must take Reading, Writing and Arithmetic and meet the federal passing scores, and the mandatory ATB retest policy applies.`,
    questions: `20 multiple-choice questions in the standard adaptive form, discrete or in sets built around one passage or a pair of passages`,
    time: `No time limit listed by College Board; one sitting or Save and Finish Later`,
    format: `Computer adaptive; single and paired passages with multiple-choice questions`,
    topics: [
      { name: `Information and Ideas`, weight: ``, note: `Reading closely, determining central ideas and themes, summarizing, understanding relationships. Category weights are not published.` },
      { name: `Rhetoric`, weight: ``, note: `Word choice, text structure, point of view, purpose and arguments.` },
      { name: `Synthesis`, weight: ``, note: `Analyzing multiple texts and connecting information across passages.` },
      { name: `Vocabulary`, weight: ``, note: `Word and phrase meaning in short and extended contexts.` }
    ],
    essentials: [
      [`Test length`, `20 questions in the standard adaptive form`],
      [`Ability to Benefit`, `Federal passing score on Reading is 233 per the College Board ATB Overview; the mandatory ATB retest policy applies`],
      [`Passage content`, `Literature and literary nonfiction, careers/history/social studies, humanities and science, in informative, argument and narrative modes`]
    ],
    studyStage: `Practice with official passages and review the four categories`,
    sessionStage: `Take the adaptive test`,
    difficulty: `Moderate`,
    audience: `Students and adult learners who need a reading placement score for English or general education courses.`,
    costExtra: { item: `Ability to Benefit testing`, fee: `Test price set by the institution; ATB retest policy is mandatory` },
    faqs: [
      { q: `How many questions are on the ACCUPLACER Reading test?`, a: `The standard computer-adaptive ACCUPLACER Reading test has 20 multiple-choice questions, per the 2025-26 ACCUPLACER Program Manual. Questions are discrete or built around a single passage or a pair of passages. College Board does not publish how many of the 20 are pretest items, which do not affect your score.` },
      { q: `What is a passing score on ACCUPLACER Reading?`, a: `There is no general passing score; College Board says no one passes or fails ACCUPLACER, and colleges set their own cut scores on the 200-300 scale. For federal Ability to Benefit financial aid, the passing Reading score is 233. Ask your college for its placement table to know the score you need.` },
      { q: `Is the ACCUPLACER Reading test hard?`, a: `Difficulty depends on your reading level and practice. The test is adaptive, so strong performance leads to more complex passages; the 271-300 band reflects highly complex, lower-division undergraduate texts and subtle inference. Reading widely, summarizing passages and practicing vocabulary in context are the most direct ways to prepare.` },
      { q: `What kind of passages are on ACCUPLACER Reading?`, a: `ACCUPLACER Reading passages come from literature and literary nonfiction, careers, history and social studies, humanities and science. They are informative, argument or narrative, range from relatively easy to very challenging, and include both published excerpts and commissioned texts. Some questions use a pair of passages and ask you to connect information across them.` },
      { q: `Is ACCUPLACER Reading timed?`, a: `College Board lists no time limit for ACCUPLACER Reading, and the test-day page says most ACCUPLACER tests are untimed, though your test center confirms its own session rules. You must answer every question, and you can use Save and Finish Later to pause and resume the test, so pace yourself instead of rushing.` },
      { q: `How soon can I retake ACCUPLACER Reading?`, a: `College Board recommends waiting 14 days before a first retest, 90 days before a second, then 30 days between later attempts. The institution sets its own policy and may add fees or limits. For Ability to Benefit testing, College Board says the recommended retest schedule is mandatory.` },
      { q: `How much does ACCUPLACER Reading cost?`, a: `College Board does not publish a student price. Colleges and schools buy ACCUPLACER test units and decide what to charge students, including for retests and remote proctoring. Contact your testing office for the current fee, and ask whether your high school GPA could exempt you from testing.` }
    ],
    summaryPoints: [
      `ACCUPLACER Reading has 20 adaptive questions built on single and paired passages.`,
      `The four categories are Information and Ideas, Rhetoric, Synthesis and Vocabulary.`,
      `Scores run 200-300; the federal Ability to Benefit passing score is 233, and college placement cut scores are set locally.`,
      `College Board lists no time limit and recommends a 14-day wait before a first retest.`,
      `The student price is set by your institution, not by College Board.`
    ],
    relatedSlugs: [`accuplacer-writing`, `accuplacer-writeplacer`, `accuplacer-esl-reading-skills`, `clep-college-composition`]
  }),

  accRecord({
    slug: 'accuplacer-writeplacer',
    tagline: `The ACCUPLACER essay test: one prompt, about 300 to 600 words, scored 1-8 by automated scoring.`,
    description: `ACCUPLACER WritePlacer is one essay of roughly 300 to 600 words, scored automatically on a 1-8 holistic scale. You write in an on-screen text box in one sitting, with no Save and Finish Later option, and the position you take on the prompt does not affect your score. The essay is rated on six dimensions: Purpose and Focus, Organization and Structure, Development and Support, Sentence Variety and Style, Mechanical Conventions, and Critical Thinking. Colleges combine the result with other ACCUPLACER tests to place students into composition courses, and it is the only ACCUPLACER placement test that is not computer adaptive.`,
    summary: `ACCUPLACER WritePlacer asks for one essay of about 300 to 600 words, scored 1-8 by an automated system on six dimensions. It must be completed in one sitting, it is not adaptive, and College Board lists no time limit. No pass mark exists; your college sets the cut score and the student price.`,
    advantages: [
      `The six scoring dimensions are public, so you can self-score practice essays against the same rubric.`,
      `The prompt rewards reasoned argument, not a particular opinion; the position you take does not affect your score.`,
      `Scoring is automated, and the score report can include feedback on each of the six dimensions.`,
      `College Board publishes a WritePlacer guide with a sample essay at each of the eight score points.`
    ],
    roadmap: [`Ask whether your college requires WritePlacer or the multiple-choice Writing test`, `Download the WritePlacer guide and read the sample essays`, `Practice planning and drafting an essay of 300 to 600 words`, `Take the test in one sitting`, `Compare the 1-8 score and dimension feedback with the college table`],
    prerequisites: `None set by College Board. The college decides whether WritePlacer is required, and some colleges use it instead of or alongside the multiple-choice Writing test.`,
    eligibility: `College Board sets no eligibility rules. The institution decides who takes WritePlacer and how the score is combined with ACCUPLACER Writing, Reading or other measures. WritePlacer ESL is a separate test for English language learners scored 1-6.`,
    questions: `1 essay prompt (a response of about 300 to 600 words)`,
    time: `No time limit listed by College Board; must be completed in one sitting (Save and Finish Later is not available)`,
    format: `Essay typed into an on-screen text box and scored by an automated system; not computer adaptive`,
    pass: `No pass or fail score; holistic score 1-8, and each college sets its own placement cut score`,
    topics: [
      { name: `Purpose and Focus`, weight: ``, note: `How unified and coherent the essay is and how clearly it addresses the issue.` },
      { name: `Organization and Structure`, weight: ``, note: `How the writer orders and connects ideas.` },
      { name: `Development and Support`, weight: ``, note: `How well ideas are developed and supported.` },
      { name: `Sentence Variety and Style`, weight: ``, note: `Control of vocabulary, voice, sentence and paragraph structure.` },
      { name: `Mechanical Conventions`, weight: ``, note: `Standard English grammar, usage and punctuation.` },
      { name: `Critical Thinking`, weight: ``, note: `Whether the writer communicates a point of view and shows reasoned relationships among ideas.` }
    ],
    essentials: [
      [`Essay length`, `Approximately 300 to 600 words, typed in an on-screen text box`],
      [`Score`, `Holistic 1-8 plus feedback on six dimensions; WritePlacer ESL is scored 1-6 on four dimensions`],
      [`Cost to institution`, `WritePlacer uses 2 ACCUPLACER test units, twice the usual 1 unit`]
    ],
    studyStage: `Study the six dimensions and write practice essays`,
    sessionStage: `Write the essay in one sitting`,
    difficulty: `Moderate`,
    audience: `Students who need a writing placement score for composition courses and whose college requires an essay.`,
    costExtra: { item: `Institution cost`, fee: `Institutions pay 2 test units per WritePlacer; student price is set locally` },
    faqs: [
      { q: `How long is the ACCUPLACER WritePlacer essay?`, a: `The WritePlacer prompt asks for an essay of approximately 300 to 600 words, according to the 2025-26 ACCUPLACER Program Manual. That range helps ensure the essay is long enough to be evaluated on all six dimensions. You type your response into an on-screen text box and must finish in one sitting.` },
      { q: `How is the ACCUPLACER WritePlacer scored?`, a: `WritePlacer returns a holistic score from 1 to 8 from an automated scoring system, plus feedback on six dimensions: Purpose and Focus, Organization and Structure, Development and Support, Sentence Variety and Style, Mechanical Conventions, and Critical Thinking. The position you take on the topic does not affect the score.` },
      { q: `What is a passing score on WritePlacer?`, a: `There is no national passing score. College Board reports a 1-8 holistic score and says no one passes or fails ACCUPLACER, so each college sets the score it needs for a composition course. Ask the testing office for its placement table and whether a WritePlacer score is combined with other measures.` },
      { q: `Is WritePlacer timed?`, a: `College Board lists no time limit for ACCUPLACER tests, and the test-day page says most are untimed, but your test center confirms its session rules. WritePlacer cannot be paused: Save and Finish Later is not available, so you must complete the essay in one sitting. Plan your outline and draft before you start typing.` },
      { q: `What is the difference between WritePlacer and ACCUPLACER Writing?`, a: `WritePlacer is a single essay scored 1-8 by an automated system, while ACCUPLACER Writing is a 25-question computer-adaptive multiple-choice test of revising and editing, scored 200-300. Some colleges require one, some the other, and some both. Ask your testing office which combination your placement uses.` },
      { q: `Can I retake WritePlacer?`, a: `If your institution allows it. College Board recommends a first retest 14 days after the initial test, a second after 90 days, and later attempts every 30 days. Institutions can set stricter or looser policies, and retests may carry a fee, so ask the testing office before scheduling another session.` },
      { q: `How much does WritePlacer cost?`, a: `College Board does not publish a student price. Institutions buy test units from College Board, and WritePlacer uses 2 units, double a standard test, so some colleges charge more for it. Contact your testing office for the exact fee and any remote proctoring cost.` }
    ],
    summaryPoints: [
      `ACCUPLACER WritePlacer is one essay of about 300 to 600 words, typed on screen.`,
      `Scores are holistic from 1 to 8, with feedback on six dimensions.`,
      `It must be completed in one sitting; Save and Finish Later is not available.`,
      `It is the only ACCUPLACER placement test that is not computer adaptive.`,
      `The student price and cut score are set by your college, not by College Board.`
    ],
    relatedSlugs: [`accuplacer-writing`, `accuplacer-reading`, `accuplacer-writeplacer-esl`, `clep-college-composition`]
  }),

  accRecord({
    slug: 'accuplacer-writing',
    tagline: `The ACCUPLACER revising and editing test: 25 adaptive questions on passages built to contain errors.`,
    description: `The ACCUPLACER Writing test has 25 adaptive revision and editing questions and reports a 200-300 scaled score. Every question belongs to a set built around an extended commissioned passage, so there are no stand-alone grammar items; you choose the best revision or decide that no change is needed. It measures Expression of Ideas (development, organization, effective language use) and Standard English Conventions (sentence structure, usage, punctuation). Colleges use the score to place students into composition courses, and the federal Ability to Benefit passing score is 235. It is longer than the 20-question Reading and math tests.`,
    summary: `ACCUPLACER Writing is a 25-question computer-adaptive test scored 200-300, where every question follows an extended passage and asks for the best revision. It covers Expression of Ideas and Standard English Conventions. No national pass mark exists; the federal Ability to Benefit score is 235, and colleges set their own cut scores.`,
    advantages: [
      `It is the longest ACCUPLACER multiple-choice test at 25 questions, which gives a finer reading of your editing skill.`,
      `Passages are all commissioned for the test, so errors are planted deliberately and rule knowledge pays off.`,
      `Score bands are specific; the 221-230 band starts with correcting a simple sentence-structure or punctuation error.`,
      `No calculator or outside knowledge of a topic is needed, and College Board lists no time limit.`
    ],
    roadmap: [`Ask whether your college uses Writing, WritePlacer or both`, `Practice revising passages with official sample questions`, `Book an in-person or remote session`, `Answer all 25 adaptive questions`, `Compare your score with the college table or the 235 Ability to Benefit score`],
    prerequisites: `None set by College Board. The college decides which students take Writing.`,
    eligibility: `College Board sets no eligibility rules. For Ability to Benefit financial aid, students taking ACCUPLACER for ATB purposes must take Reading, Writing and Arithmetic and the mandatory ATB retest policy applies. Some colleges use WritePlacer instead of this test.`,
    questions: `25 multiple-choice questions in the standard adaptive form, all in sets built around extended passages (pretest items do not affect scores)`,
    time: `No time limit listed by College Board; one sitting or Save and Finish Later`,
    format: `Computer adaptive; passage-based revision and editing questions, with a no-change option`,
    topics: [
      { name: `Development`, weight: ``, note: `Expression of Ideas: revising proposition, support and focus in relation to rhetorical purpose. Category weights are not published.` },
      { name: `Organization`, weight: ``, note: `Expression of Ideas: logical sequence, introductions, conclusions and transitions.` },
      { name: `Effective Language Use`, weight: ``, note: `Expression of Ideas: precision, concision, style and tone, and syntax.` },
      { name: `Sentence Structure`, weight: ``, note: `Standard English Conventions: sentence boundaries, subordination and coordination, parallel structure, modifier placement, shifts in verb tense, voice and mood.` },
      { name: `Conventions of Usage`, weight: ``, note: `Standard English Conventions: pronoun clarity, agreement, frequently confused words and logical comparison.` },
      { name: `Conventions of Punctuation`, weight: ``, note: `Standard English Conventions: end-of-sentence and within-sentence punctuation.` }
    ],
    essentials: [
      [`Test length`, `25 questions in the standard adaptive form, longer than the 20-question Reading and math tests`],
      [`Ability to Benefit`, `Federal passing score on Writing is 235 per the College Board ATB Overview; the mandatory ATB retest policy applies`],
      [`Question design`, `All passages are commissioned and every question is part of a passage set; there are no stand-alone items`]
    ],
    studyStage: `Practice revising passages and review grammar conventions`,
    sessionStage: `Take the adaptive test`,
    difficulty: `Moderate`,
    audience: `Students and adult learners who need a multiple-choice writing placement score for composition courses.`,
    costExtra: { item: `Ability to Benefit testing`, fee: `Test price set by the institution; ATB retest policy is mandatory` },
    faqs: [
      { q: `How many questions are on the ACCUPLACER Writing test?`, a: `The standard computer-adaptive ACCUPLACER Writing test has 25 multiple-choice questions, five more than the 20 on Reading and the math tests, according to the 2025-26 ACCUPLACER Program Manual. Every question is part of a set built around an extended passage. College Board does not publish how many items are pretest questions.` },
      { q: `What is a passing score on ACCUPLACER Writing?`, a: `There is no general passing score; College Board says no one passes or fails ACCUPLACER, and colleges set their own cut scores on the 200-300 scale. For federal Ability to Benefit financial aid, the passing Writing score is 235. Ask your college for its placement table to see the score you need.` },
      { q: `Is ACCUPLACER Writing hard?`, a: `It tests revising and editing rather than essay writing, so strong grammar and clear-writing habits matter most. The test is adaptive, and the 261-270 band includes eliminating redundancy and wordiness and correcting subtle errors such as nonrestrictive clause punctuation. Practicing with passage-based questions helps you spot errors faster.` },
      { q: `What is on the ACCUPLACER Writing test?`, a: `ACCUPLACER Writing measures Expression of Ideas, covering development, organization and effective language use, and Standard English Conventions, covering sentence structure, usage and punctuation. You read an extended passage and choose the best revision or editing decision, or decide that no change is needed. Passages cover literary nonfiction, social studies, humanities and science.` },
      { q: `Is ACCUPLACER Writing timed?`, a: `College Board lists no time limit for ACCUPLACER tests, and the test-day page says most are untimed, but your test center confirms its session rules. You must answer every question, and Save and Finish Later lets you pause and resume. Read each passage fully before choosing a revision.` },
      { q: `Do I need WritePlacer if I take ACCUPLACER Writing?`, a: `That depends on your college. ACCUPLACER Writing is a multiple-choice revising test scored 200-300, while WritePlacer is a single essay scored 1-8. Some colleges require one, some use both, and some accept either. Ask your testing office which score your composition placement uses before you register.` },
      { q: `How much does ACCUPLACER Writing cost?`, a: `College Board does not publish a student price. Institutions buy ACCUPLACER test units and decide what, if anything, to charge, including for retests, which College Board recommends waiting at least 14 days to take. Contact your testing office for the exact fee and any remote-proctoring cost.` }
    ],
    summaryPoints: [
      `ACCUPLACER Writing has 25 adaptive questions, all in passage sets built around commissioned passages.`,
      `It measures Expression of Ideas and Standard English Conventions.`,
      `Scores run 200-300; the federal Ability to Benefit passing score is 235, and placement cut scores are set by colleges.`,
      `College Board recommends waiting 14 days before a first retest.`,
      `Some colleges require WritePlacer instead of or in addition to this test.`
    ],
    relatedSlugs: [`accuplacer-writeplacer`, `accuplacer-reading`, `accuplacer-esl-language-use`, `clep-college-composition`]
  }),

  {
    slug: 'ap-biology',
    body: CB,
    tagline: `A 3-hour, 60-question plus 6-free-response exam that turns a year of biology into a 1-5 score colleges may convert to credit.`,
    description: `The AP Biology exam has 60 multiple-choice and 6 free-response questions in 3 hours and is scored 1-5; the 2027 exam is Monday, May 3, 2027, Session 2. Half the score comes from 60 multiple-choice questions in 90 minutes and half from two 9-point long free-response questions and four 4-point short ones in 90 minutes. The course covers eight units, from Chemistry of Life and Cellular Energetics to Heredity, Natural Selection and Ecology, and the free-response section emphasizes interpreting experimental data, graphing and predicting the effect of changes in a biological system. Colleges decide whether a 3, 4 or 5 earns credit toward an introductory biology course for majors.`,
    quickAnswer: {
      summary: `AP Biology is a hybrid digital College Board exam with 60 multiple-choice questions (90 minutes, 50% of the score) and 6 free-response questions (90 minutes, 50%), reported as a 1-5 score. The 2026-27 exam fee is $99 at U.S. schools. You register through your school's AP coordinator, and colleges set what score earns credit.`,
      advantages: [
        `The eight units and their exam weightings are published, from 8-11% for Chemistry of Life and Heredity up to 13-20% for Natural Selection.`,
        `Official past free-response questions and scoring guidelines show exactly how the 34 free-response points are earned.`,
        `A qualifying score can earn credit or placement at colleges that accept it; College Board's AP credit policy search tool shows each college's rule.`,
        `Recent score distributions are public: in 2025, 70.4% of 287,232 test takers scored 3 or higher.`
      ]
    },
    roadmap: [`Ask your school's AP coordinator to order the exam by the November 13, 2026 deadline`, `Cover the eight units with the course and exam description`, `Practice graphing, data analysis and the long free-response format`, `Take the hybrid digital exam on May 3, 2027 (Session 2)`, `Send your score to colleges and check each credit policy`],
    prerequisites: `College Board recommends high school biology and chemistry courses before AP Biology. The course is designed to match a college two-semester introductory biology course for biology majors.`,
    eligibility: `Any student can take an AP exam, but students order and pay for it through their school's AP coordinator, and the school usually offers the AP Biology course. Ask the coordinator about ordering if your school does not offer the course.`,
    examMeta: {
      questions: `60 multiple-choice questions plus 6 free-response questions (2 long at 9 points each, 4 short at 4 points each; 34 free-response points)`,
      time: `3 hours total: 90 minutes multiple choice, 90 minutes free response`,
      pass: `Scored 1-5; no national pass mark, and each college decides which score earns credit (3 is labeled qualified)`,
      fee: `$99 per exam at U.S. schools, U.S. territories, Canada and DoDEA schools (2026-27); $129 elsewhere; $37 fee reduction for eligible students`,
      format: `Hybrid digital: multiple-choice questions and free-response prompts appear in the Bluebook app, and free-response answers are handwritten in paper booklets`,
      admin: `College Board AP Program, administered at your school or an authorized test center`
    },
    topics: [
      { name: `Chemistry of Life`, weight: ``, note: `Unit 1; 8-11% of the exam score. Weights are published as ranges, so none is shown as a single percentage.` },
      { name: `Cells`, weight: ``, note: `Unit 2; 10-13% of the exam score.` },
      { name: `Cellular Energetics`, weight: ``, note: `Unit 3; 12-16% of the exam score.` },
      { name: `Cell Communication and Cell Cycle`, weight: ``, note: `Unit 4; 10-15% of the exam score.` },
      { name: `Heredity`, weight: ``, note: `Unit 5; 8-11% of the exam score.` },
      { name: `Gene Expression and Regulation`, weight: ``, note: `Unit 6; 12-16% of the exam score.` },
      { name: `Natural Selection`, weight: ``, note: `Unit 7; 13-20% of the exam score, the largest range.` },
      { name: `Ecology`, weight: ``, note: `Unit 8; 10-15% of the exam score.` }
    ],
    examEssentials: [
      [`Exam date`, `Monday, May 3, 2027, Session 2 (your AP coordinator confirms time and location)`],
      [`Section I`, `60 multiple-choice questions in 90 minutes, 50% of the score; discrete or in sets of about 4-5 questions with a shared stimulus`],
      [`Section II`, `6 free-response questions in 90 minutes, 50% of the score: 2 long (9 points each) and 4 short (4 points each)`],
      [`Calculator and references`, `Calculators are permitted; reference materials are provided in print and in Bluebook`],
      [`Score scale`, `1-5: 5 extremely well qualified, 4 very well qualified, 3 qualified, 2 possibly qualified, 1 no recommendation`],
      [`Retake`, `Exams are given once a year in May, so a retake means sitting the exam again the next year`],
      [`Order deadline`, `November 13, 2026 for full-year and fall courses; a $40 late fee applies from November 14, 2026 to March 12, 2027`]
    ],
    timeline: [
      { stage: `Course and unit coverage (school year)`, duration: `A full school year of AP Biology coursework` },
      { stage: `Exam order and payment through the AP coordinator`, duration: `Order by November 13, 2026 to avoid the $40 late fee` },
      { stage: `Free-response and data-analysis practice`, duration: `Last 6-8 weeks before the May 3, 2027 exam (plan, not an official figure)` },
      { stage: `Exam day`, duration: `3 hours of testing plus check-in and a break` },
      { stage: `Scores released and sent to colleges`, duration: `Summer after the May exam window` }
    ],
    costBreakdown: {
      items: [
        { item: `AP exam fee, U.S. schools (2026-27)`, fee: `$99` },
        { item: `AP exam fee, schools outside the U.S. and Canada`, fee: `$129` },
        { item: `College Board fee reduction for eligible students`, fee: `$37 off per exam` },
        { item: `Late order fee (orders placed November 14, 2026 to March 12, 2027)`, fee: `$40 per exam` },
        { item: `Unused or canceled exam fee after November 13`, fee: `$40 per exam` }
      ],
      total: `$99 at U.S. schools ($129 elsewhere), less $37 if eligible, plus any school or state charges`,
      footnote: `Schools may add their own administrative fees, and some states subsidize AP exam fees for eligible students. Fees are for the 2026-27 administration per the AP Central exam fees page.`
    },
    difficulty: `Challenging`,
    audience: `High school students who want college biology credit or placement and a challenging science course, especially for pre-health and life-science paths.`,
    time: `A full school year of AP Biology plus 3 hours on exam day`,
    cost: `$99 at U.S. schools ($129 elsewhere)`,
    faqs: [
      { q: `How many questions are on the AP Biology exam?`, a: `The AP Biology exam has 60 multiple-choice questions in 90 minutes and 6 free-response questions in 90 minutes. The free-response section has 2 long questions worth 9 points each and 4 short questions worth 4 points each, for 34 points. Each section is 50% of your exam score, per AP Central.` },
      { q: `What is a passing score on the AP Biology exam?`, a: `AP exams are scored 1-5 with no official pass mark. College Board labels a 3 as qualified, a 4 as very well qualified and a 5 as extremely well qualified. Whether a score earns credit depends on each college, so check its policy using the AP credit policy search tool before you decide what you need.` },
      { q: `Is AP Biology hard?`, a: `AP Biology is challenging because it combines eight units of content with data analysis and experimental design. In 2025, 70.4% of 287,232 test takers scored 3 or higher and 18.9% scored a 5; the preliminary 2026 figures show 71% at 3 or higher and 15% at 5. Practicing graphs and free-response questions matters as much as content review.` },
      { q: `How is the AP Biology exam delivered?`, a: `AP Biology is a hybrid digital exam: you answer multiple-choice questions and view the free-response questions in the Bluebook app, then handwrite your free-response answers in paper booklets that are returned for scoring. Calculators are permitted, and reference materials are available in print and in Bluebook, per the AP Central exam page.` },
      { q: `How much does the AP Biology exam cost?`, a: `The 2026-27 AP exam fee is $99 per exam at U.S. schools, U.S. territories, Canada and DoDEA schools, and $129 at schools elsewhere. Students with financial need can get a $37 College Board fee reduction. Orders placed after November 13, 2026 carry a $40 late fee, and schools may add their own charges.` },
      { q: `When is the AP Biology exam in 2027?`, a: `The AP Biology exam is on Monday, May 3, 2027, in Session 2. Your school's AP coordinator confirms the exact start time and room. Exams are ordered by the school, and the deadline for full-year and fall courses is November 13, 2026, so tell your coordinator early if you plan to test.` },
      { q: `What is the AP Biology score distribution?`, a: `In 2025, College Board reported 18.9% earned a 5, 24.1% a 4, 27.4% a 3, 21.0% a 2 and 8.6% a 1, with a mean score of 3.24 for 287,232 test takers. The 2026 percentages posted so far are 15%, 25%, 31%, 21% and 8%. College Board publishes these distributions, not pass rates.` },
      { q: `Which units are most heavily weighted on AP Biology?`, a: `Unit 7, Natural Selection, has the largest weighting range at 13-20% of the exam score. Cellular Energetics and Gene Expression and Regulation are each 12-16%, Cell Communication and Cell Cycle and Ecology are 10-15%, Cells is 10-13%, and Chemistry of Life and Heredity are each 8-11%.` }
    ],
    summaryPoints: [
      `AP Biology has 60 multiple-choice questions (90 minutes, 50%) and 6 free-response questions (90 minutes, 50%).`,
      `The free-response section has 2 long questions at 9 points and 4 short questions at 4 points, 34 points in all.`,
      `The 2027 exam is Monday, May 3, 2027, Session 2, as a hybrid digital exam using the Bluebook app and paper booklets.`,
      `The 2026-27 fee is $99 at U.S. schools and $129 elsewhere, with a $37 fee reduction for eligible students.`,
      `In 2025, 70.4% of 287,232 test takers scored 3 or higher and 18.9% scored a 5.`
    ],
    relatedSlugs: [`ap-chemistry`, `ap-environmental-science`, `clep-biology`, `ap-statistics`],
    sourceUrl: `https://apcentral.collegeboard.org/courses/ap-biology/exam`,
    reviewed: '2026-10',
    confidence: 'high'
  }
];

export default { programs, exams };
