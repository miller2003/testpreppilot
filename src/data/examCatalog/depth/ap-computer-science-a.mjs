const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Advanced Placement & college-credit desk',
    bio: 'The AP Computer Science A exam structure (question counts, timing, scoring) is drawn from the College Board official AP Computer Science A course and exam description, which is revised on a published cycle; the College Board publishes annual AP score distributions, and we cite that practice. College-credit outcomes and the exam fee are stated as of the current College Board program page.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against the College Board official AP Computer Science A course and exam description (current edition), the annual AP score distribution report, and the current College Board exam-day policy pages.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'AP Computer Science A has no direct salary outcome — its value is college credit, placement and early exposure to the Java programming skills that feed the highest-earning bachelor\u2019s-level fields in the BLS data.',
    summary: 'The direct salary answer for AP Computer Science A is the college-credit story shared by every AP exam: the BLS does not publish a wage for AP scores because the AP program is a college-credit and placement system, not a job credential, so the earnings context is the education-return premium plus the specific labor-market weight of programming ability — software developers and related computer occupations consistently sit among the highest median wages of any bachelor\u2019s-level field, with BLS reporting six-figure medians for many of the roles the course points toward. A qualifying score of 3 or higher commonly earns credit toward or placement out of an introductory Java-based computer science course, which matters for students heading into computer science, software engineering, data science and other quantitative majors where the first programming course is a gatekeeper. The exam itself is 3 hours: 40 multiple-choice questions in 90 minutes (50 percent of the score) and 4 free-response questions in 90 minutes (50 percent), all in Java, scored 1-5, and in the current administration it is fully digital, with all multiple-choice and free-response work completed in the Bluebook testing app. The honest caveat is the usual one: credit policies vary by college, with some selective computer-science programs capping or declining AP credit and requiring their own placement assessment, and a few majors expecting a 4 or 5 rather than a 3, so the score\u2019s value depends on the specific institution\u2019s AP credit table, which candidates should check before banking on credit. For a candidate deciding whether to invest a semester in the course, the payoff is usually three to four semester hours of credit plus the placement into the next course in the sequence, which keeps a CS major on schedule.',
    rows: [
      { label: 'Score scale', value: '1-5', note: '3+ typically qualifies for credit; 4-5 at selective schools' },
      { label: 'Exam length', value: '3 hours', note: '40 MC (90 min) + 4 FRQs (90 min), Java' },
      { label: 'Format', value: 'Fully digital', note: 'All multiple-choice and free-response work in Bluebook' },
      { label: 'Salary impact', value: 'Indirect', note: 'College credit and placement; early exposure to programming careers' }
    ],
    growth: 'AP Computer Science A volume tracks AP program growth and the expansion of CS enrollment; the College Board reports multi-million total AP administrations per year, and the course feeds the fastest-growing bachelor\u2019s-level occupational groups in the BLS projections.',
    source: { label: 'College Board AP Computer Science A course page', url: 'https://apstudents.collegeboard.org/courses/ap-computer-science-a' }
  },
  passRate: {
    headline: 'The College Board publishes AP Computer Science A score distributions, not pass rates; in the 2025 administration 67% of test-takers scored 3 or higher, with 25% scoring 5 and a notably large 1 band.',
    summary: 'The direct answer on pass rates requires precision: the College Board does not publish a "pass rate" for AP exams because scores are reported on a 1-5 scale and each college defines what score qualifies for credit, but it does publish the annual score distribution, and that is the closest published statistic. For AP Computer Science A, the 2025 distribution was 25% scoring 5, 22% scoring 4, 20% scoring 3, 10% scoring 2 and 23% scoring 1, which puts 67% of test-takers at 3 or higher — a qualifying rate with an unusual shape, because the exam splits into a large top group and a large bottom group with a thin middle, reflecting a paper where candidates either handle the Java free-response questions or struggle badly on them. The structure is fixed and published: 3 hours total, with 40 multiple-choice questions in 90 minutes (50 percent) and 4 free-response questions in 90 minutes (50 percent), all in Java, and in the current administration the exam is fully digital, with every response typed in the Bluebook testing app. The practical read on difficulty: the free-response section is where the score is decided, because it rewards writing working Java methods and classes by hand without an IDE or compiler, so candidates who practise writing code from a blank screen score far higher than candidates who only read code. Because the credit value depends on the college\u2019s policy, check the target institutions\u2019 AP credit tables before deciding whether a 3 suffices or a 4 or 5 is required, and drill the past free-response questions with their scoring guidelines, since the four FRQs carry half the exam.',
    source: { label: 'College Board AP score distribution report and AP Computer Science A exam description', url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam' },
    caveat: 'The College Board publishes score distributions, not pass rates; whether a 3, 4, or 5 "passes" depends on each college\u2019s AP credit policy. The 2025 figures above are 25/22/20/10/23 with 67% at 3+, and percentages shift by year — the College Board\u2019s annual report is authoritative.'
  },
  studyPlan: {
    summary: 'An efficient AP Computer Science A study plan is 60-90 hours over 10-14 weeks, because the exam is a hands-on Java-writing test where the fastest score gains come from writing code by hand on paper and typing complete methods without an IDE, and the free-response questions that carry half the score are exactly the skill most candidates never rehearse. The College Board course and exam description is the scope map: the course covers Java from primitive types and objects through Boolean logic, iteration, writing classes, arrays, ArrayLists, 2D arrays, inheritance and recursion, with the exam splitting into 40 multiple-choice questions in 90 minutes and 4 free-response questions in 90 minutes. The study window should split into language fundamentals (weeks 1-5), data structures and class design (weeks 6-9), and free-response writing (weeks 10-14): candidates who already program in another language can compress the fundamentals block, while beginners need the full sequence, because the exam expects fluency with Java syntax and the standard library, not just concepts. The single highest-yield habit is writing every free-response question from a blank screen under a timer — no IDE, no autocomplete, no compiler feedback — because that is exactly what the exam demands, and candidates who practise that way find the FRQ section predictable rather than alarming. The final four weeks should be full practice exams at the real format, with the four FRQs weighted like the real paper, because the pace of 40 multiple-choice questions in 90 minutes and the writing load of four full Java problems are the two things candidates underestimate most.',
    totalHours: '60-90 hours over 10-14 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Java fundamentals', tasks: ['Master primitive types, variables, arithmetic and String operations', 'Learn objects, methods, parameters, return values and class construction', 'Practice Boolean expressions, if statements and the compound conditionals'], hours: '7-9 hrs/week' },
      { label: 'Weeks 4-5', focus: 'Iteration and classes', tasks: ['Master while, for and enhanced-for loops and the standard loop patterns', 'Learn writing classes: fields, constructors, accessors, mutators and methods', 'Practise the class-design questions that recur on the FRQ section'], hours: '8-10 hrs/week' },
      { label: 'Weeks 6-9', focus: 'Data structures and inheritance', tasks: ['Master arrays, ArrayLists and the standard algorithms over each', 'Learn 2D arrays: traversal, row-major and column-major order', 'Cover inheritance, polymorphism and recursion plus the standard search and sort algorithms'], hours: '8-10 hrs/week' },
      { label: 'Weeks 10-12', focus: 'Free-response writing', tasks: ['Write each past FRQ from a blank screen under a 22-minute timer', 'Type complete, compilable methods with correct signatures and returns', 'Score your answers against past guidelines and re-drill weak question types'], hours: '8-10 hrs/week' },
      { label: 'Weeks 13-14', focus: 'Full exams and readiness', tasks: ['Take two full practice exams at the real 3-hour format in Bluebook', 'Re-lab every missed topic and re-type the weakest FRQ types', 'Confirm exam-day logistics, the device and registration'], hours: '6-8 hrs/week' }
    ],
    variants: [
      { label: 'Already programs in another language', detail: 'Eight weeks. Fundamentals transfer quickly; spend the recovered time on Java-specific syntax, the standard library and writing FRQs from a blank screen, since syntax slips cost points on the typed free responses.' },
      { label: 'Beginner with no programming', detail: 'Fourteen to sixteen weeks. Budget extra time on the fundamentals block, because the exam assumes working Java fluency, and start writing code from week two rather than reading about it.' },
      { label: 'Taking the course in school', detail: 'Budget the lower end and weight time toward the four FRQ types and full practice exams, which classroom work covers least.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant prep strategy for AP Computer Science A is writing Java code by hand under a timer, because the exam is a fully digital, Java-writing test where the four free-response questions carry half the score and reward producing working methods without an IDE, a compiler or autocomplete. First, use the College Board course and exam description as the checklist: the Java topics, the Java Quick Reference provided on the exam, and the four FRQ types — methods and control structures, classes, Array/ArrayList, and 2D arrays — are all published, and the past free-response questions with scoring guidelines show exactly how the written code is graded. Second, practise writing every past FRQ from a blank screen on a timer, because the exam environment gives you no feedback loop and candidates who rehearse that constraint find the FRQ section far more manageable. Third, memorise the standard algorithms and loop patterns — finding the maximum, counting matches, summing, traversing 2D arrays, and the standard search and sort methods — because the FRQs are built from these building blocks, and knowing them cold frees the working memory the problems demand. Fourth, get the Java syntax right every time: correct method signatures, return types and the standard-library calls in the Quick Reference are the difference between a working solution and a near-miss. Fifth, run full practice exams at the real timing, because the pace of 40 questions in 90 minutes and the typing load of four full programs are the constraints candidates underestimate. Finally, confirm the target colleges\u2019 AP credit and placement policies, because whether the goal is a 3 or a 5 depends on where the score is being sent.',
    items: [
      { title: 'Write code from a blank screen', detail: 'The exam gives no IDE, compiler or autocomplete. Rehearse every past FRQ on paper or in a plain editor under a timer until writing working Java from nothing is routine.' },
      { title: 'Memorise the standard algorithms', detail: 'Finding maxes, counting matches, summing, traversing 2D arrays and the standard search and sort methods are the building blocks of the FRQs; know them cold.' },
      { title: 'Get the syntax exactly right', detail: 'Correct method signatures, return types and standard-library calls are the difference between a working solution and a near-miss on the typed free responses.' },
      { title: 'Use past FRQs and scoring guidelines', detail: 'The four FRQ types and their point distributions are published; score your practice against the guidelines to see where partial credit is won and lost.' },
      { title: 'Run full practice exams at real timing', detail: '40 questions in 90 minutes plus four typed programs is a stamina test; rehearse the full format in the Bluebook-like environment.' }
    ]
  },
  resourceComparison: {
    summary: 'AP Computer Science A prep resources split into the College Board official set, review books, online courses and coding platforms, and the buying logic is anchored by the official materials because the College Board publishes the course and exam description, past free-response questions, scoring guidelines and the Java Quick Reference for free. The official free set — the CED, the Java Quick Reference and the past FRQs with scoring guidelines — defines the syntax and the grading standards precisely and should anchor every plan. Review books from major publishers, roughly $20-40, add structured topic coverage and practice exams, which helps both course-takers and self-studiers. Online courses and question banks, $30-100, add video instruction and interactive coding practice, which helps beginners who need a guided sequence; some platforms simulate the free-response environment, which is the most valuable feature. Free coding platforms such as Replit and similar browser-based Java editors are genuinely useful for daily practice, though the exam itself must be rehearsed without them. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. The exam fee is about $99 per AP exam, with fee reductions available for eligible students. A cheap readiness check is the free sample questions and one past FRQ set from the College Board before buying anything. Candidates should also verify the school\u2019s AP registration process and deadline, since late-registration fees are a common avoidable cost, and confirm whether the target college requires a placement assessment in addition to the AP score, since some CS programs use their own exam to decide entry into the major.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'College Board official materials', values: ['Free', 'CED + Java Quick Reference + past FRQs + scoring guides', 'The authoritative syntax and grading standards'] },
      { label: 'AP Computer Science A review book', values: ['$20-40', 'Book with topic coverage and practice', 'Structured coverage for any candidate'] },
      { label: 'Online course / coding platform', values: ['$30-100 (some free)', 'Video + interactive Java practice', 'Beginners wanting a guided sequence and FRQ simulation'] },
      { label: 'AP exam registration', values: ['~$99', 'School/College Board', 'The real exam; fee reductions available'] }
    ],
    footnote: 'List prices as of mid-2026 and change frequently; we rank nothing by commission. The AP exam fee is about $99 with reductions for eligible students.'
  },
  commonMistakes: {
    summary: 'The most common mistake on AP Computer Science A is preparing by reading code instead of writing it, because the four free-response questions reward producing working Java methods and classes from a blank screen, and candidates who have only read code run out of time and points on the typed FRQ section. The second is mis-writing method signatures and return types, when the scoring awards points for correct signatures and standard-library calls even before the logic is evaluated. A third recurring error is off-by-one mistakes in loops and array traversal, which the scoring punishes across multiple parts of a solution. Candidates also routinely skip the 2D-array FRQ in their practice, treating it as optional, when it is one of the four fixed question types and recurs every year. Another pattern is over-relying on a compiler or IDE during study, so the exam\u2019s no-feedback environment comes as a shock. Finally, some candidates never run a full practice exam at the real 3-hour format, so the pace of 40 multiple-choice questions in 90 minutes and the writing load of four full programs surprise them on test day. A further recurring error is not reading the past free-response scoring guidelines, so they do not know which parts of a solution earn partial credit, and some spend so long on the first FRQ that the remaining three are rushed. A few candidates also sit without checking the target college\u2019s credit policy, assuming a 3 is enough when the CS program they plan to attend requires a 4 or 5 or declines AP credit for the major entirely.',
    items: [
      { mistake: 'Reading code instead of writing it', fix: 'The FRQs reward producing working Java from a blank screen. Write every past FRQ by hand under a timer; do not just read solutions.' },
      { mistake: 'Mis-writing signatures and return types', fix: 'Correct method signatures, parameters and return types earn points before the logic is graded; drill them until they are automatic.' },
      { mistake: 'Off-by-one errors in loops', fix: 'Practise the loop-boundary patterns for arrays, ArrayLists and 2D arrays until the indices are correct the first time.' },
      { mistake: 'Skipping the 2D-array FRQ type', fix: 'The four FRQ types are fixed and the 2D-array question recurs every year; rehearse it like the others.' },
      { mistake: 'Over-relying on a compiler during study', fix: 'The exam gives no feedback loop. Rehearse writing code without a compiler so the environment does not surprise you.' }
    ]
  },
  questionTypes: {
    summary: 'The AP Computer Science A exam is 3 hours and scored 1-5, fully digital in the current administration, with all responses typed in the Bluebook testing app. Section I is 40 multiple-choice questions in 90 minutes (50 percent of the score), testing Java topics from primitives and objects through iteration, classes, arrays, ArrayLists, 2D arrays, inheritance and recursion, with some items asking you to trace a code segment and others asking you to select the correct code to complete a task. Section II is 4 free-response questions in 90 minutes (50 percent), each worth 9 points and each tied to a fixed type: methods and control structures, classes, Array/ArrayList, and 2D arrays; candidates write complete Java solutions that the scoring rubric awards partial credit for by parts. The Java Quick Reference with the standard-library declarations is provided on the exam. The samples below illustrate three formats: a code-tracing MC item, a class-design FRQ and an Array/ArrayList FRQ. The sample items are editor-written illustrations of the published format, not live test items. Because the exam is fully digital, candidates should rehearse typing solutions in the Bluebook-like environment, and those who practise the four FRQ types against the past-FRQ materials with scoring guidelines find the written section predictable on test day. The multiple-choice section also rewards efficient tracing: learning to read a loop or recursive method quickly and track the key variables saves the time needed for the harder items, and candidates who rehearse under the two-minutes-per-question budget report that the section is a pacing challenge rather than a knowledge challenge.',
    types: [
      { name: 'Multiple choice on code', share: '40 questions, 50%', detail: 'Trace a given code segment or select the correct segment to complete a task; topics span the full Java syllabus.' },
      { name: 'Methods and control structures FRQ', share: '1 of 4 FRQs, 9 points', detail: 'Write a method using conditionals, loops and the standard algorithm patterns.' },
      { name: 'Class design FRQ', share: '1 of 4 FRQs, 9 points', detail: 'Write a class with fields, constructor and methods, often extending or using another class.' },
      { name: 'Array and ArrayList FRQ', share: '1 of 4 FRQs, 9 points', detail: 'Implement methods over a 1D array or ArrayList, and over a 2D array in the fourth FRQ.' }
    ],
    samples: [
      {
        prompt: 'What is printed when the following code segment runs? int x = 0; for (int i = 0; i < 4; i++) { x += i; } System.out.println(x);',
        options: [
          'A. 0',
          'B. 4',
          'C. 6',
          'D. 10'
        ],
        answer: 'C',
        explanation: 'The loop runs for i equal to 0, 1, 2 and 3, adding each value to x, so x becomes 0 + 1 + 2 + 3 = 6, which is option C. Option A is the initial value, chosen by candidates who misread the loop bounds. B, 4, is the number of iterations rather than the accumulated sum. D, 10, would be the answer if the loop also added i = 4, which it does not, because the condition i < 4 stops at 3. This tracing item is the most common multiple-choice format on the exam.'
      },
      {
        prompt: 'Class-design FRQ (illustrated): "Write a complete class named Book with a String title, an int pages, a constructor that initializes both, and a method isLong that returns true if pages is greater than 500."',
        options: [
          'A. Write only the constructor and leave the method out',
          'B. Write the fields, a two-parameter constructor, and a method with a boolean return type and the correct condition',
          'C. Write a method that prints the number of pages',
          'D. Declare the class without any fields'
        ],
        answer: 'B',
        explanation: 'The class-design FRQ is scored on the complete structure: private fields for title and pages, a constructor that initializes both, and a public method with the correct signature — boolean isLong() — returning pages > 500. Option B is that complete solution. A loses the method credit. C uses the wrong return type and behaviour, since the method must return a boolean, not print. D earns almost no credit because the fields are the foundation the other parts depend on.'
      },
      {
        prompt: 'Array FRQ (illustrated): "Write a method that returns the average of all positive integers in an int[] array. If there are no positive integers, return 0."',
        options: [
          'A. Sum only the positive values, count them, and divide, returning 0 when the count is zero',
          'B. Sum every value and divide by the array length',
          'C. Return the maximum positive value',
          'D. Sum the positive values without dividing by their count'
        ],
        answer: 'A',
        explanation: 'The correct solution tracks a running sum and a count of positive values, divides the sum by the count, and returns 0 when the count is zero — which is option A, and the guard for division by zero is exactly the edge case the rubric rewards. B averages all values including negatives and zero, which is not what the prompt asks. C returns the wrong quantity. D never computes the average. Practising these standard-algorithm FRQs — sum, count, average, maximum — is the fastest way to prepare for the written section.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'The AP Computer Science A exam is a fully digital test administered at your school on the College Board\u2019s May AP schedule, and the direct exam-day answer is that you will complete 40 multiple-choice questions in 90 minutes and 4 free-response questions in 90 minutes — all in Java, all typed in the Bluebook testing app — for a 3-hour exam scored 1-5, with scores released in July. Arrive with your school-issued AP admission ticket, a government-issued or school photo ID, and the permitted materials; because the exam is fully digital, every response is typed in Bluebook, and notes and electronic devices other than the testing device are not permitted. Confirm with your AP coordinator whether you bring your own device for Bluebook or use a school-provided one, and charge whatever device you will use; the proctor distributes scratch paper for planning. The Java Quick Reference with the standard-library declarations is available in the exam interface, and no calculator is required. In the multiple-choice section, pace to about 2 minutes per question and answer the tracing items quickly, saving review margin; in the free-response section, budget about 22 minutes per question and read the prompt carefully, since the scoring rubric awards points part by part and a solution that addresses every part earns far more than a polished first part. Expect a controlled testing environment with other AP candidates, and follow the proctor\u2019s instructions exactly, because the College Board\u2019s security rules are strict. Scores are released online in July through the College Board account and can be sent to colleges; if the score falls short of the target colleges\u2019 credit policy, the exam can be retaken the following year, since AP exams are offered once per year.',
    bring: [
      'School-issued AP admission ticket',
      'Photo ID (school or government issued)',
      'A fully charged device if your school requires you to bring one for Bluebook',
      'Confirm the current College Board rules for scratch paper and any permitted materials'
    ],
    leave: [
      'Notes, electronic devices and study materials (prohibited)',
      'Personal stationery — scratch paper is provided by the proctor',
      'Any item on the College Board prohibited list',
      'Pre-written code or templates'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm the delivery mode and device requirements with your AP coordinator and run the Bluebook test preview.' },
      { time: '30 min before', detail: 'Arrive, present the admission ticket and ID, and check in with the proctor.' },
      { time: '90 min', detail: 'Multiple-choice section: 40 questions in Bluebook; pace to about 2 minutes each.' },
      { time: '90 min', detail: 'Free-response section: 4 Java questions typed in Bluebook; budget about 22 minutes each.' },
      { time: 'July', detail: 'Scores released online through the College Board account.' }
    ],
    rules: [
      'Fully digital exam: all responses are completed and typed in the Bluebook testing app',
      'No notes, electronic devices or study materials in the testing room',
      'The Java Quick Reference is provided in the exam interface',
      'Scratch paper for planning is provided by the proctor',
      'Strict proctor-enforced timing on both sections'
    ],
    afterwards: 'Receive the 1-5 score in July, send it to colleges through the College Board, and check each college\u2019s AP credit and CS-placement policy. The exam can be retaken the following year if the score falls short.'
  }
};

export default data;
