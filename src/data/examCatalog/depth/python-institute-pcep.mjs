const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Developer & systems certifications desk',
    bio: 'This desk covers developer and IT certifications. Exam structure, fees and rules come from the certifying body\'s official pages (Python Institute, LPI, AHIMA), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the Python Institute\'s PCEP exam page and exam syllabus (PCEP-30-02), and BLS OOH Software Developers (SOC 15-1252), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$132,270 median for software developers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "PCEP" — the PCEP-30-02 certifies entry-level Python programming skill, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Software Developers, SOC 15-1252, which had a May 2024 median wage of $132,270, with the lowest 10 percent under $84,060 and the highest 10 percent above $208,500. The fit is direct but must be read with an honest caveat: PCEP is an entry-level literacy credential, so the realistic benchmark for a new holder is far below the developer median — the credential typically appears on the resume of a student, a career-changer or an IT professional adding scripting skill, and the developer wage applies only after the experience that the median describes. BLS counted 1,684,900 software developer jobs in 2024 and projects 17 percent growth from 2024 to 2034, far faster than the average for all occupations, with about 150,000 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and an entry-level certificate carries no wage premium in BLS data. Read the number as the market for the occupation the certificate is a step toward.',
    rows: [
      { label: 'Median annual wage, software developers', value: '$132,270', note: 'BLS OOH, SOC 15-1252, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $84,060', note: 'BLS OOH, SOC 15-1252, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $208,500', note: 'BLS OOH, SOC 15-1252, May 2024' },
      { label: 'Projected openings per year', value: '~150,000', note: 'BLS OOH, SOC 15-1252, 2024-2034' }
    ],
    growth: 'BLS projects 17 percent growth for software developers from 2024 to 2034, about 150,000 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Software Developers', url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' }
  },
  passRate: {
    headline: 'The Python Institute publishes the passing standard — 70% (21 of 30) — and no cohort pass rate',
    summary: 'The Python Institute (OpenEDG) does not publish cohort pass rates for the PCEP exam, and third-party estimates are not official data, so we do not treat them as authoritative. What the Python Institute does publish is the format and the passing standard: the PCEP-30-02 exam has 30 questions with a 45-minute time limit, and a passing score of 70 percent — at least 21 correct answers. The exam is delivered online through the OpenEDG Testing Service with proctoring, and the fee varies by region and purchasing channel, typically around $59 in the US at the time of writing. The exam content follows the published syllabus: computer programming and Python fundamentals, control flow, data collections (sequences, dictionaries, sets), functions and exceptions, and the basics of Python modules and packages. The absence of a published pass rate is not an absence of standards: the 70 percent line is an accessible bar for a genuinely entry-level exam, and the syllabus is narrow and clearly published. The practical reading: a beginner with a few weeks of consistent practice passes comfortably, and the credential\'s value is as a structured first step — the PCEP feeds directly into the PCAP (Certified Associate in Python Programming), which is the more career-relevant credential.',
    source: { label: 'Python Institute - PCEP Certified Entry-Level Python Programmer (PCEP-30-02)', url: 'https://pythoninstitute.org/pcep' },
    caveat: 'The Python Institute publishes the 70% cut score but no cohort pass rate; the fee varies by region and channel.'
  },
  studyPlan: {
    summary: 'The PCEP-30-02 is a 30-question, 45-minute exam with a 70 percent passing line, and its syllabus is narrow: computer programming and Python fundamentals, control flow, data collections (sequences, dictionaries, sets), functions and exceptions, and the basics of modules and packages. The exam is genuinely entry-level — no prior programming is required — and the Python Institute\'s free course, "Python Essentials 1", covers the entire syllabus. A defensible plan runs 30 to 60 hours over 3 to 4 weeks. Week one: work the Python Essentials 1 course and the fundamentals — variables, operators, data types and input/output. Week two: control flow — conditionals, loops and the logic the exam tests with code-tracing items. Week three: collections, functions, exceptions and modules, writing small programs to practise each. Week four: drill the sample questions and practice exams, then schedule the online exam. The plan is code-heavy because the exam includes code-tracing items — you must read code and determine its output — so typing the examples and experimenting with variations is the core practice.',
    totalHours: '30-60 hours over 3-4 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Fundamentals', tasks: ['Python Essentials 1 course material', 'Variables, operators, data types', 'Input/output and basic programs'], hours: 12 },
      { label: 'Week 2', focus: 'Control flow', tasks: ['Conditionals and loops', 'Code-tracing practice', 'Logic and comparison operators'], hours: 12 },
      { label: 'Week 3', focus: 'Collections, functions, modules', tasks: ['Sequences, dictionaries and sets', 'Functions, exceptions and modules', 'Small programs for each topic'], hours: 14 },
      { label: 'Week 4', focus: 'Drill and exam', tasks: ['Sample questions and practice exams', 'Review weak syllabus sections', 'Schedule and sit the online exam'], hours: 10 }
    ],
    variants: [
      { label: 'Experienced programmer, new to Python', detail: 'Compress to 2 weeks; focus on Python-specific syntax and the exam style.' },
      { label: 'Complete beginner', detail: 'Stretch to 5-6 weeks; the exam rewards writing and tracing code, not just reading.' }
    ]
  },
  prepStrategies: {
    summary: 'The PCEP exam rewards code literacy, so the dominant strategy is writing and tracing code: type every example from the course, run it, and predict the output before you run it, because the exam includes code-tracing items that test exactly that skill. Second, use the free Python Essentials 1 course as the primary resource — it is the official syllabus in course form, and the exam is built from it. Third, master the exam\'s item style through the sample questions and practice exams the Python Institute publishes; the 70 percent line is accessible, but the code-tracing format should not be met cold. Fourth, learn the specific Python details the exam tests — how slice notation works, how range() behaves, the difference between lists and tuples, and how exceptions propagate — because entry exams concentrate on the language\'s exact behaviour. Finally, plan the path: the PCEP is the first rung, and the PCAP (associate-level) is the credential that matters for employment; treat the PCEP as structured momentum, not the destination.',
    items: [
      { title: 'Write and trace code', detail: 'Predict output before running; the exam tests code tracing.' },
      { title: 'Use the free official course', detail: 'Python Essentials 1 is the syllabus in course form.' },
      { title: 'Learn the exact language details', detail: 'Slices, range(), list-vs-tuple and exception behaviour are tested precisely.' },
      { title: 'Practise the item style', detail: 'Sample questions and practice exams prevent a cold first meeting.' },
      { title: 'Plan for the PCAP', detail: 'The PCEP is the first rung; the associate credential matters for jobs.' }
    ]
  },
  resourceComparison: {
    summary: 'PCEP prep is inexpensive because the primary resource is free: the Python Institute\'s Python Essentials 1 course covers the whole syllabus at no cost, and the published sample questions and practice exams are free or low-cost. The exam fee itself is typically about $59 in the US, varying by region and purchasing channel. Third-party options — Python books ($30-$60), Udemy-style courses ($10-$50) and practice-question sites — add value but are optional; the free official stack is sufficient for a disciplined beginner. A realistic total budget is $60 to $150 including the exam fee. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Python Essentials 1 course', values: ['Free', 'Official online course', 'The entire syllabus; the primary resource'] },
      { label: 'Published sample questions', values: ['Free', 'Official practice items', 'The item style before the exam'] },
      { label: 'Python books', values: ['$30-$60', 'Printed or digital books', 'Reference and depth beyond the course'] },
      { label: 'Video courses', values: ['$10-$50', 'Online video courses', 'Alternate explanations for beginners'] },
      { label: 'PCEP exam', values: ['~$59 (US)', 'Proctored online exam', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the exam fee varies by region and channel; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common PCEP mistake is reading about Python instead of writing it: candidates who watch courses but never type code meet the code-tracing items unable to predict output. The fix is typing and running every example. The second mistake is memorising syntax without learning the language\'s exact behaviour — slice bounds, range() endpoints and exception propagation are tested precisely, and fuzzy understanding costs points. Third, beginners skip the sample questions and meet the item style cold; the format is learnable, so practise it. Fourth, some candidates over-prepare for a 30-question entry exam and under-prepare the career step: the PCEP is the first rung, and the time is better invested with the PCAP in mind. Finally, underestimating the exam because it is entry-level is a quiet trap — the 70 percent line is accessible but not free, and code-tracing items punish candidates who never ran the code.',
    items: [
      { mistake: 'Reading instead of coding', fix: 'Type and run every example; predict output before running.' },
      { mistake: 'Fuzzy language details', fix: 'Learn slice bounds, range() and exception behaviour exactly.' },
      { mistake: 'Skipping the sample questions', fix: 'Practise the item style; do not meet it cold.' },
      { mistake: 'Under-planning the career step', fix: 'Treat the PCEP as momentum toward the PCAP.' },
      { mistake: 'Underestimating the exam', fix: 'The 70% line is accessible but not free; code-tracing rewards practice.' }
    ]
  },
  questionTypes: {
    summary: 'The PCEP-30-02 is a 30-question multiple-choice exam in 45 minutes, delivered online under proctoring. The items mix knowledge questions — Python syntax and language behaviour — with code-tracing items that present a short program and ask for the output, and code-completion items that ask for the correct expression. The exam covers the published syllabus: fundamentals, control flow, data collections, functions and exceptions, and modules. Samples below are editor-written illustrations of the published syllabus, not live exam items; they show the code-tracing style of the real items.',
    types: [
      { name: 'Code-tracing items', share: 'Large share', detail: 'Short programs with the correct output or behaviour.' },
      { name: 'Knowledge items', share: 'Large share', detail: 'Syntax, operators and language rules.' },
      { name: 'Code-completion items', share: 'Minority', detail: 'The correct expression or construct for a described result.' }
    ],
    samples: [
      {
        prompt: 'What is the output of the following code? print(2 ** 3 + 1)',
        options: ['A. 9', 'B. 8', 'C. 7', 'D. 16'],
        answer: 'A',
        explanation: 'The exponentiation operator binds before addition: 2 ** 3 = 8, then 8 + 1 = 9. Answer B forgets the addition, and the others misapply the precedence.'
      },
      {
        prompt: 'Which expression returns the last character of the string s?',
        options: ['A. s[-1]', 'B. s[1]', 'C. s[len(s)]', 'D. s[0]'],
        answer: 'A',
        explanation: 'Negative indexing counts from the end, so s[-1] is the last character. s[1] is the second, s[len(s)] is out of range, and s[0] is the first.'
      },
      {
        prompt: 'What is the output of the following code? for i in range(1, 4): print(i, end=" ")',
        options: ['A. 1 2 3', 'B. 1 2 3 4', 'C. 0 1 2 3', 'D. 4 3 2 1'],
        answer: 'A',
        explanation: 'range(1, 4) produces the values 1, 2 and 3 — the stop value is exclusive. Answer B includes 4, C starts at 0, and D reverses the order.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published syllabus, not live exam items.'
  },
  examDay: {
    summary: 'The PCEP exam is taken online through the OpenEDG Testing Service with proctoring, at a time you schedule. Confirm your system meets the proctoring requirements — webcam, stable internet and a quiet space — and close unrelated applications; the proctor monitors the session. The exam is 30 questions in 45 minutes, so pace at 90 seconds per item; there is no scheduled break. Your result is reported immediately on completion, and the Python Institute issues the digital certificate on a pass. If you do not pass, you can retake per the program\'s retake policy after additional study. On a pass, the certification is permanent — it does not expire — and you can proceed directly to the PCAP (associate) level. The afterwards matters: the credential is a foundation, so move to the PCAP while the language is fresh, and add your work to a portfolio of small programs that demonstrates the skill behind the certificate.',
    bring: ['Computer with webcam and stable internet', 'A quiet, private testing space', 'Your OpenEDG account login'],
    leave: ['Phone and other devices within the proctor\'s view', 'Notes and open browser tabs — the exam is closed book'],
    timeline: [
      { time: 'Before start', detail: 'Run the proctoring environment check; clear the desk and screen.' },
      { time: 'Exam', detail: '30 questions in 45 minutes; pace ~90 seconds per item.' },
      { time: 'After submit', detail: 'Result shows immediately; the certificate is issued on a pass.' },
      { time: 'Next', detail: 'Move to the PCAP and build a small-program portfolio.' }
    ],
    rules: [
      'Closed-book online exam under proctoring',
      '45 minutes for 30 questions; the clock does not pause',
      'The certification does not expire'
    ],
    afterwards: 'On a pass, your PCEP is permanent; proceed to the PCAP. On a fail, retake per the policy after additional code practice.'
  }
};

export default data;
