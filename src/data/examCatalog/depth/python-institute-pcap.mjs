// Depth content for: python-institute-pcap
// Python Institute PCAP — Certified Associate in Python Programming (PCAP-31-03 / 31-04).
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Programming-language & developer certification desk',
    bio: 'This guide is compiled and maintained by our developer-certifications desk. PCAP exam structure, pricing, validity and the current exam-version status come from the Python Institute (OpenEDG) official certification pages, which we verified directly — including the retirement date of the current exam version, which is exactly the kind of fact a prep guide must not get wrong. Wage figures come from the BLS occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the PCAP-31-03 format (40 questions, 65 minutes, 70% passing), the $295 price, the lifetime validity of 31-03, and the scheduled retirement of 31-03 with the 31-04 successor against the Python Institute official pages.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$133,080 median for software developers (BLS, May 2024) — SOC 15-1252',
    summary:
      'The direct answer is that software developers, SOC 15-1252, earned a median of $133,080 per year in May 2024, the most recent BLS Occupational Employment and Wage Statistics survey, and it is the correct series to cite for a PCAP because BLS classifies by job duties and Python-skilled software developers sit inside this occupation. That median deserves two honest readings before a PCAP candidate plans around it. First, the distribution is wide and the credential is an associate-level marker, not a wage catalyst: the lowest 10 percent of software developers earned less than $79,850 and the highest 10 percent more than $211,450, and a new associate-level Python programmer entering the field is competing near the bottom of that band, not the top — the PCAP signals that you can read, trace and reason about intermediate Python, which qualifies you for junior-developer and Python-focused entry roles, and the six-figure median is earned with experience, not with the certificate. Second, the Python-specific story is unusually strong: Python is consistently one of the highest-demand languages in the developer labour market, and the Python Institute\'s own materials cite six-figure salary ranges for Python programmers and note a large, chronic shortfall of qualified candidates — a claim we repeat as the vendor\'s marketing, not as an independent statistic. The employment picture is robust across the occupation: BLS projects software developer employment to grow 15 percent from 2024 to 2034, much faster than the average for all occupations, with about 129,200 openings a year, driven by continued expansion in software across AI, IoT, robotics and automation. Where the PCAP sits in that picture is precise: it is the second rung of the Python Institute\'s three-level pathway — PCEP entry, PCAP associate, PCPP professional — and its realistic value is as a verifiable, vendor-neutral signal of intermediate Python competence for junior roles, internships and professional-portfolio building, alongside — not instead of — a GitHub history and real project work. The honest framing is that the PCAP is a small, well-defined investment that moves a candidate toward the bottom of a high-paying occupation\'s ladder, and the credential\'s worth compounds when it is followed by the PCPP and by shipped projects.',
    rows: [
      { label: 'Median annual wage, software developers', value: '$133,080', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 15-1252)' },
      { label: 'Lowest 10 percent', value: 'less than $79,850', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $211,450', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, software developers, QA analysts, and testers, 2024', value: '1,895,500 jobs', note: 'BLS OOH Quick Facts, 2024 (combined series)' },
      { label: 'Projected annual openings', value: '~129,200 per year', note: 'BLS OOH Job Outlook, 2024-34 — 15% growth' }
    ],
    growth: '15% projected change 2024-34 (much faster than average) with ~129,200 openings a year; the PCAP is the associate rung of a three-level Python pathway whose value compounds with the PCPP and real project work',
    source: {
      label: 'BLS Occupational Outlook Handbook — Software Developers',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm'
    }
  },

  passRate: {
    headline: 'The Python Institute publishes no pass rate — what it publishes is the passing score (70%) and a format that rewards reasoning over recall (40 questions, 65 minutes)',
    summary:
      'There is no published pass rate for the PCAP exam, because the Python Institute does not release pass statistics for its certifications, and we are not going to supply an invented one — third-party sites advertise pass rates around 95 percent, but those figures have no official source and are contradicted by the exam\'s own design, which is an intermediate-level test of genuine programming ability. What the Python Institute does publish is the complete exam specification, and the numbers that matter are these: the current exam version, PCAP-31-03, is 40 questions in 65 minutes (plus a 10-minute NDA/tutorial), with a passing score of 70 percent — 28 of 40 questions — and a mix of single- and multiple-select, interactive and scenario-based items. The 70 percent line is demanding in a way the multiple-choice formats of certification exams are not, because the scenario-based and code-tracing items cannot be passed on pattern recognition: they require reading a multi-class program, predicting its output, and reasoning about inheritance, exception chains and module imports, which is exactly the skill an associate-level Python credential should certify. Two structural facts matter more than any pass statistic. First, the exam is not a linear trivia test — the blueprint weights object-oriented programming heaviest, followed by strings, exceptions, modules and packages, and miscellaneous topics like generators, lambdas, closures and file I/O — so the 70 percent is earned by depth in the OOP content, not by spreading effort evenly. Second, there is no published aggregate to compare against, so the only legitimate calibration is the official practice test and Python Institute\'s free aligned courses, Python Essentials 1 and 2, which are designed to bring a candidate to exam readiness. The practical planning number is therefore the 70 percent cut itself: score 80 percent or better on the official practice questions and be able to trace multi-class programs by hand before booking, and treat the 65-minute clock as the second test — the candidates who fail are the ones who can write code but cannot reason about code under time pressure.',
    source: {
      label: 'Python Institute — PCAP exam information',
      url: 'https://pythoninstitute.org/pcap'
    },
    caveat: 'The Python Institute publishes no pass-rate statistics. The published figures are the format (40 questions, 65 minutes), the passing score (70%), and the price, all verified on the official page. Third-party pass-rate claims are unofficial and not reproduced here.'
  },

  studyPlan: {
    summary:
      'Plan six to ten weeks and roughly 60 to 100 hours of study, and start from the premise that the PCAP is a reasoning exam over a weighted blueprint, not a vocabulary test: 40 questions in 65 minutes with a 70 percent passing score, and the blueprint weights object-oriented programming at roughly a third of the paper, with strings, exceptions, and modules and packages each taking substantial shares and miscellaneous topics — comprehensions, lambdas, closures, generators, and file I/O — rounding it out. The current exam version is PCAP-31-03, which is active but scheduled for retirement on August 31, 2026, with the successor PCAP-31-04 in development; candidates preparing in this window should confirm which version their voucher buys and study the syllabus for that version, because the objectives are versioned. The official preparation path is the Python Institute\'s own free curriculum: Python Essentials 1 covers the entry-level material (and aligns to PCEP), and Python Essentials 2 is the course aligned to the PCAP — work it in full, including its labs and quizzes, because it was built specifically to bring a candidate to this exam. Structure the plan in three phases: weeks one to two on the fundamentals refresher and modules and packages — importing, standard library modules, and pip — plus exceptions, which are easy points for candidates who rehearse the try-except-else-finally flow and the exception hierarchy; weeks three to five on strings (encoding, ASCII/UNICODE/UTF-8, string methods, slicing) and the miscellaneous block (comprehensions, lambdas, closures, generators, file I/O); and weeks six to eight on object-oriented programming in depth — classes, attributes, methods, inheritance, polymorphism, encapsulation and introspection — because the blueprint weights it heaviest and the scenario items lean on it. The final two weeks are for exam mode: the official practice test and the free aligned courses\' assessments, timed 65-minute sessions, and hand-tracing multi-class programs until predicting output is reflexive. Budget $295 for the exam voucher (with options for exam-plus-retake at $345 and a practice-test bundle at $359), and note the delivery channels — Pearson VUE centres and OnVUE online proctoring, or the OpenEDG Testing Service via TestNow.',
    totalHours: '60-100 hours over 6-10 weeks',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Fundamentals, modules, packages, and exceptions',
        tasks: [
          'Work Python Essentials 2 in full — the official PCAP-aligned course',
          'Master importing and using modules and packages, pip, and the math, random and platform standard-library modules',
          'Drill exceptions: the try-except-else-finally flow, the exception hierarchy, and assertions',
          'Hand-trace every example until output prediction is reflexive'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 3-5',
        focus: 'Strings and the miscellaneous block',
        tasks: [
          'Study character encoding: ASCII, UNICODE and UTF-8, and how Python handles them',
          'Master string methods, slicing, and basic string processing',
          'Cover comprehensions, lambdas, closures and generators',
          'Learn file and stream input-output operations and their common failure modes'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 6-8',
        focus: 'Object-oriented programming — the heaviest weight',
        tasks: [
          'Master classes, objects, attributes and methods, including class and instance scoping',
          'Cover inheritance, polymorphism, encapsulation and introspection in depth',
          'Drill the scenario items: given a multi-class program, predict the output or the AttributeError',
          'Write small OOP programs from scratch to internalise the mechanics the exam assumes'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Weeks 9-10',
        focus: 'Exam mode — practice, timing, and version confirmation',
        tasks: [
          'Take the official practice test and the course assessments until you score 80%+',
          'Run timed 65-minute practice sessions under exam conditions',
          'Hand-trace multi-class programs until output prediction is automatic',
          'Confirm which exam version your voucher buys and its delivery channel — Pearson VUE or TestNow'
        ],
        hours: '8-10 hrs/week'
      }
    ],
    variants: [
      { label: 'PCEP holder moving up', detail: 'Five to seven weeks. The entry-level course already covers your fundamentals; spend the recovered time on OOP depth and the scenario-based tracing items, and on the modules and packages content the PCEP under-covers.' },
      { label: 'Experienced Python developer, no certification', detail: 'Three to five weeks. You can likely trace the code; the exam still demands exact knowledge of the specific blueprint — exception hierarchy names, string method behaviour, and module specifics — so work the official course assessments to close the certification-shaped gaps.' }
    ]
  },

  prepStrategies: {
    summary:
      'The strategy that reliably passes the PCAP is "learn to trace code, weight the OOP block, and rehearse the 65-minute clock," because the exam tests genuine programming reasoning — predicting output, following inheritance and exception chains, and reading code the examiners wrote — rather than recognition. The single biggest error is preparing with multiple-choice practice questions alone, when the scenario-based and code-tracing items demand a skill that only hand-tracing real code builds. The design that should drive the plan is the one the Python Institute publishes: 40 questions in 65 minutes, a 70 percent passing score (28 of 40), and a format mixing single- and multiple-select items with interactive and scenario-based forms, delivered through Pearson VUE or the OpenEDG Testing Service. The blueprint weights object-oriented programming as the largest share, with strings, exceptions, and modules and packages each taking substantial shares and a miscellaneous block — comprehensions, lambdas, closures, generators, file I/O — rounding it out, so the study hours should follow that weighting rather than spread evenly. Hand-tracing is the core rehearsal: the scenario items present a multi-class program and ask for its printed output or the exception it raises, and a candidate who covers the output of every example in Python Essentials 2, predicts it in their head, and then runs it to check, has built the one skill the paper actually tests. The official aligned courses matter because they were built for this exam: Python Essentials 1 covers the entry-level material and Python Essentials 2 is the PCAP-aligned curriculum, both free, and their quizzes and labs are the closest rehearsal outside the practice test itself. The 65-minute clock is the second test: 40 questions in 65 minutes is under 100 seconds per question, and a candidate who rehearses the timed format learns to flag the long trace-and-predict items and return to them rather than letting one hard program consume the paper. A candidate who traces by hand, weights the OOP block, and rehearses the clock is the one for whom the 70 percent line is a formality.',
    items: [
      {
        title: 'Practise hand-tracing multi-class programs',
        detail: 'The scenario items present a program and ask for its output or the error it raises — a skill that multiple-choice practice does not build. Take every example in Python Essentials 2, cover the output, predict it in your head, then run it. Candidates who can trace code by hand are the ones who find the exam comfortable.'
      },
      {
        title: 'Weight object-oriented programming heaviest',
        detail: 'The blueprint gives OOP the largest single share — roughly a third — and the hardest scenario items live there: inheritance, polymorphism, encapsulation, and introspection. Study OOP until you can predict an AttributeError from a mis-scoped attribute and follow a method-resolution chain across a multi-class hierarchy, because that is what the paper actually asks.'
      },
      {
        title: 'Rehearse the 65-minute clock specifically',
        detail: '40 questions in 65 minutes is under 100 seconds per question, and the code-tracing items eat far more than that if you let them. Run timed 65-minute practice sessions with the official practice test and the course assessments, and learn to flag the long trace-and-predict items and return to them, rather than letting one hard program consume the paper.'
      },
      {
        title: 'Know the exact names and behaviours the blueprint tests',
        detail: 'The exam rewards precision: the exception hierarchy names, the exact behaviour of string methods, the semantics of the standard-library modules, and the difference between a generator and a comprehension. Work the official aligned course and its quizzes until the precise vocabulary is reflex — the item writers test the specific terms, not general ideas.'
      },
      {
        title: 'Confirm the exam version before you study',
        detail: 'PCAP-31-03 is active but scheduled for retirement on August 31, 2026, with PCAP-31-04 in development, and the objectives are versioned. Before buying vouchers or studying for weeks, confirm which version your voucher buys and download the syllabus for that version — studying the wrong version\'s objectives is the most expensive mistake available in this exam.'
      }
    ]
  },

  resourceComparison: {
    summary:
      'The buying decision for the PCAP is dominated by official and free resources: the Python Institute\'s Python Essentials 1 and 2 courses are free and are the curriculum the exam is built from, the official practice test is the right readiness tool, and the exam voucher is the main cost. The current pricing is $295 for the exam alone, $345 for the exam-plus-retake bundle, and $359 for the exam-plus-retake-plus-practice-test bundle, with the practice test sold separately at $49; the exam-plus-retake bundle is the sensible default for most candidates because the 70 percent cut on a reasoning exam makes a retake a realistic possibility, and the $50 difference between the single-shot and the bundle is cheap insurance. The buying order that makes sense: work the free Python Essentials 2 course first, because it is the official PCAP-aligned curriculum and its quizzes and labs are the primary preparation; then buy the practice test, either alone or in the bundle, because it is the only resource that calibrates readiness against the real 65-minute format and the 70 percent line; then buy the voucher, choosing the bundle that includes the retake if there is any doubt about readiness. Third-party books and question banks exist and can supplement, but they are not the exam, and the candidates who pass are the ones who worked the official aligned curriculum rather than the ones who bought the most prep products. One purchase-time check matters more than all the others combined: the current exam version, PCAP-31-03, is active but scheduled for retirement on August 31, 2026, with PCAP-31-04 in development, so the voucher should be confirmed against the version you intend to study before money changes hands.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'PCAP exam voucher (PCAP-31-03 / 31-04)', values: ['$295 exam; $345 exam + retake; $359 exam + retake + practice', 'Pearson VUE / OnVUE or OpenEDG TestNow', 'The exam itself — confirm the version your voucher buys'] },
      { label: 'Python Essentials 1 & 2 (Python Institute)', values: ['Free', 'Online courses with labs and quizzes', 'The official curriculum the exam is built from'] },
      { label: 'Official practice test', values: ['~$49 alone, or bundled', 'Online, exam-style', 'Readiness calibration against the 70% cut'] },
      { label: 'Edube Interactive platform', values: ['Free for the courses', 'Online code editor and labs', 'Hands-on tracing and coding practice'] },
      { label: 'PCAP study guides and question banks', values: ['~$30-100', 'Print or digital', 'Supplemental drilling — not a substitute for the official course'] }
    ],
    footnote: 'Prices checked 2026-08 in USD and approximate; Python Institute pricing is set on the official site and the exam-plus-retake bundle is a realistic default given the 70% cut on a reasoning exam. Confirm the exam version (31-03 vs 31-04) before purchasing. We do not rank by commission.'
  },

  commonMistakes: {
    summary:
      'The mistakes that cost PCAP candidates the credential are almost all reasoning-process errors rather than Python-knowledge gaps: preparing with recognition-style multiple-choice practice while the exam demands code tracing, studying the blueprint evenly when OOP carries roughly a third of the weight, ignoring the 65-minute clock, and missing the exam-version transition that is under way. Each one is avoidable, and each one maps directly onto the exam\'s published design. The recognition-practice error is the most common because it feels like preparation: the exam\'s scenario-based and code-tracing items present a program and ask for its output or the exception it raises, a skill that recognition practice does not build, so a candidate who only selected answers on third-party banks meets the trace-and-predict items cold. The even-weight error is the most wasteful because the blueprint is published: object-oriented programming carries the largest single share and the hardest scenario items live there, while a single string-method behaviour carries one item each, so hours spent evenly across the blueprint are hours under-invested where the marks are densest. The clock error is the most mechanical: 40 questions in 65 minutes is under 100 seconds per question, and a candidate who never ran a timed session lets one long trace-and-predict item consume the paper and rushes the final quarter. The version-transition error is the most expensive because it is time-sensitive: PCAP-31-03 is active but scheduled for retirement on August 31, 2026, with PCAP-31-04 in development and a different validity term, so a candidate who studies the wrong version\'s objectives or buys a voucher for a version that has moved has invested weeks in the wrong paper. Add the validity error — assuming the credential expires on a fixed 3-year cycle when the Python Institute states PCAP-31-03 has lifetime validity and the successor carries 7 years — and the list covers the gap between prepared and unprepared candidates. Every one of these is fixed by hand-tracing, blueprint weighting, timed rehearsal, and a version check before purchase.',
    items: [
      {
        mistake: 'Preparing only with multiple-choice practice questions',
        fix: 'The exam\'s scenario-based and code-tracing items present a program and ask for its output or its error — a skill recognition practice does not build. Hand-trace every example in Python Essentials 2, predict output before running it, and treat "explain this program" as the core rehearsal, because that is what the paper actually is.'
      },
      {
        mistake: 'Studying the blueprint evenly',
        fix: 'Object-oriented programming carries the largest weight — roughly a third — and the hardest scenario items live there, while small corners like a single string method behaviour carry one item each. Weight the plan to the blueprint: OOP depth first, then strings, exceptions, and modules, with the miscellaneous block last.'
      },
      {
        mistake: 'Ignoring the 65-minute clock',
        fix: '40 questions in 65 minutes is under 100 seconds per question, and a long trace-and-predict item can eat five minutes. Run timed practice sessions with the official practice test, and rehearse the flag-and-return habit — the candidates who fail are often the ones who can write Python but cannot reason about code under time pressure.'
      },
      {
        mistake: 'Buying vouchers without confirming the exam version',
        fix: 'PCAP-31-03 is active but scheduled for retirement on August 31, 2026, with PCAP-31-04 in development, and the objectives are versioned. Before spending $295 or studying for weeks, confirm which version your voucher buys and download that version\'s syllabus — the retirement date is the single most important current fact about this exam.'
      },
      {
        mistake: 'Assuming the credential expires on a fixed cycle',
        fix: 'The Python Institute states that PCAP-31-03 has lifetime validity — it does not expire on a 3-year cycle — while the successor PCAP-31-04 carries a 7-year validity under the Institute\'s newer policy. Check the validity term on the version you sit rather than repeating the old 3-year claim, and log what the credential page actually says.'
      }
    ]
  },

  questionTypes: {
    summary:
      'The PCAP (PCAP-31-03) is a computer-delivered exam of 40 questions in 65 minutes, with a passing score of 70 percent (28 of 40) and a format that mixes single- and multiple-select items with interactive and scenario-based items — the interactive and scenario forms being the exam\'s defining feature. The blueprint weights the content as roughly: object-oriented programming the largest share, then strings, then exceptions, then modules and packages, with a miscellaneous block covering comprehensions, lambdas, closures, generators, and file I/O — so the paper is deliberately weighted, and a candidate who reads the blueprint before studying knows where the marks sit. Practically, the paper breaks into three families: direct-knowledge items that test a specific behaviour or term precisely — the name in the exception hierarchy, the result of a string method, the semantics of a standard-library function; code-tracing items that present a snippet or a multi-class program and ask for the printed output or the exception raised, which reward hand-tracing practice and are the family that separates recognition from understanding; and scenario items that describe a requirement and ask which construct, ordering or design achieves it, which lean on the OOP block and its inheritance, encapsulation and method-resolution questions. Because every question is equal and there is no penalty for guessing, the pacing rule is to answer everything and flag the long tracing items for a second pass; the discipline that separates passing from failing is the ability to reason about code under time pressure, not vocabulary. The 65-minute clock and the 70 percent line together mean a candidate should rehearse the timed format at least once before sitting the real paper, and the official practice test is the only resource that reports readiness in the same terms. The note below is the standing one for this site: the samples are editor-written illustrations of the published blueprint, not live items, and the same study advice — trace by hand, weight the blueprint, rehearse the clock — applies regardless of which exam version a candidate sits.',
    types: [
      { name: 'Direct-knowledge items', share: 'A meaningful share', detail: 'A specific behaviour or term tested precisely — the name in the exception hierarchy, the result of a string method, or the semantics of a standard-library module function.' },
      { name: 'Code-tracing items', share: 'The defining family', detail: 'A code snippet or multi-class program asking for the printed output or the exception raised — the skill that recognition-style practice does not build and hand-tracing does.' },
      { name: 'Scenario and interactive items', share: 'Heaviest in the OOP block', detail: 'A requirement or a partly built program asking which construct, ordering, or design is correct — inheritance, encapsulation, and method resolution under pressure.' }
    ],
    samples: [
      {
        prompt: 'What is the output of the following code? (Legacy-format illustration.) class A: def greet(self): return "A" class B(A): pass class C(B): def greet(self): return super().greet() + "C" print(C().greet())',
        options: [
          'A. "A"',
          'B. "C"',
          'C. "AC"',
          'D. AttributeError'
        ],
        answer: 'C',
        explanation: 'C inherits from B, which inherits from A, and super() inside C.greet() resolves up the method resolution chain to A.greet(), returning "A", which is concatenated with "C" to give "AC". A ignores the concatenation, B ignores the super() call, and D is wrong because greet() is defined up the chain — the item rewards tracing inheritance and super() resolution, which is exactly the scenario family the exam uses.'
      },
      {
        prompt: 'Which keyword or construct correctly completes a try block so that a cleanup action runs whether or not an exception was raised?',
        options: [
          'A. else',
          'B. finally',
          'C. except',
          'D. raise'
        ],
        answer: 'B',
        explanation: 'The finally clause always executes — on normal completion, after an exception is handled, and even if an exception propagates — which is the correct home for cleanup. The else clause runs only when no exception occurred, except handles specific exceptions, and raise deliberately throws one. The item tests the exact semantics of the try-except-else-finally flow, a precision the exam\'s direct-knowledge family demands.'
      },
      {
        prompt: 'Which of the following creates a generator rather than a list?',
        options: [
          'A. [x**2 for x in range(10)]',
          'B. (x**2 for x in range(10))',
          'C. {x**2 for x in range(10)}',
          'D. list(x**2 for x in range(10))'
        ],
        answer: 'B',
        explanation: 'Parentheses around a comprehension create a generator object, which yields values lazily, while square brackets create a list and curly braces create a set — C is a set comprehension. D explicitly wraps a generator in list(), producing a list. The item tests the exact syntactic distinction between comprehensions and generators, a recurring precision point in the miscellaneous block.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      'The PCAP is a 65-minute, 40-question computer exam, delivered through Pearson VUE (at a test centre or online via OnVUE) or through the OpenEDG Testing Service via TestNow, with a 70 percent passing score, and the session follows the delivery channel you chose. At a Pearson VUE centre, arrive 30 minutes early, present a government-issued photo ID matching your registration, store your phone, watch, bag and notes in the locker, and expect the standard check-in; the exam itself adds a short NDA and tutorial before the timer starts, and the 65 minutes is the test clock alone. For OnVUE or TestNow online proctoring, the week before is the critical window: run the system check on the exact machine you will use, clear the desk, close the door, and have your phone ready for the check-in photographs of your face, your ID and the whole room — a second monitor must be unplugged and turned away. Once the clock starts, the 40 items run in mixed order, so the pacing plan is the thing that matters most: under 100 seconds per question on average, with the long trace-and-predict items flagged and returned to rather than sat on, and every question answered because there is no penalty for guessing. The practical discipline is to do a fast first pass through the direct-knowledge items, then spend the remaining time carefully on the code-tracing and scenario items, which are where the 70 percent line is actually decided. Your result appears at the end of the session in the pass/fail form the delivery channel provides. On a pass, your certification is recorded in your Test Candidate account and delivered according to the OpenEDG process; on a fail, the retake terms depend on the voucher you bought — the exam-plus-retake bundle exists precisely for this — and the second attempt should follow targeted review of the blueprint areas the first attempt exposed.',
    bring: [
      'Government-issued photo ID matching your registration exactly',
      'Your scheduling confirmation with the test-centre address or the online proctoring link',
      'For online proctoring: the system-tested computer, webcam, microphone and stable connection, and a private room with a door you can close',
      'A phone for the online check-in photos of your face, ID and room',
      'Your Test Candidate or Pearson VUE login details in case check-in needs to verify the booking'
    ],
    leave: [
      'Phones, smartwatches, earbuds and all electronics — locker at a centre, out of the room for online proctoring',
      'All notes, books and code references — the exam is closed-book',
      'Your own scratch paper; centres provide a noteboard and online proctoring uses a digital whiteboard',
      'Bags, coats, food and drink beyond what the centre or proctor permits',
      'Second monitors and any other person in the room for online proctoring'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your exam version (31-03 vs 31-04), your ID name matches your registration, and for online proctoring run the system check on the exact machine you will use.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin the online check-in — NDA, tutorial, then the 65-minute test clock starts.' },
      { time: 'First pass', detail: 'Answer the direct-knowledge items briskly and flag the long trace-and-predict items rather than sitting on them.' },
      { time: 'Second pass', detail: 'Work the flagged code-tracing and scenario items carefully — this is where the 70% line is decided — then answer everything.' },
      { time: 'After submit', detail: 'Your result appears at the end of the session; on a pass, the certification records in your Test Candidate account, and on a fail, the retake terms follow the voucher you bought.' }
    ],
    rules: [
      '40 questions in 65 minutes, with a 70% passing score (28 of 40).',
      'Format: single- and multiple-select, interactive, and scenario-based items; there is no penalty for guessing, so answer everything.',
      'The exam is closed-book and computer-delivered through Pearson VUE or the OpenEDG Testing Service (TestNow).',
      'A government-issued photo ID matching your registration is required; online proctoring adds a room scan and live monitoring.',
      'PCAP-31-03 has lifetime validity per the Python Institute; the successor PCAP-31-04 carries a 7-year validity under the newer policy.'
    ],
    afterwards:
      'Your result appears at the end of the session, and the pass line is 70 percent — on a pass, the PCAP is recorded in your Test Candidate account and the credential is yours, with the Python Institute stating that PCAP-31-03 has lifetime validity, so there is no renewal cycle to plan and the natural next step is the PCPP (Certified Professional in Python Programming) or, for the 31-04 generation, its 7-year validity window. On a fail, the exam-plus-retake voucher you may have bought covers the second attempt, and the correct response is targeted review: re-drill the blueprint areas the first attempt exposed — for most candidates the OOP tracing and the scenario items — then re-sit with a defined target rather than hope. Either way the credential sits at the associate rung of a Python pathway that feeds a $133,080-median occupation (BLS, May 2024) with 15 percent projected growth, and the practical advice is to treat the pass as the floor: pair it with shipped projects and the PCPP, because the credential signals competence while the portfolio and the professional certification are what convert that competence into the premium end of the salary band.'
  }
};

export default data;
