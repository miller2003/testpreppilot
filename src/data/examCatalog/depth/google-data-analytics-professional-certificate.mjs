// Depth content for: google-data-analytics-professional-certificate
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This guide is compiled and maintained by our IT-certifications desk. Google Career Certificates are completion-based programmes delivered on Coursera rather than proctored exams, so there is no exam pass rate to report and no cut score — we state that plainly and cover the real completion mechanics instead. Fees and structure come from Google\'s own certificate pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate, and that entry-level analyst work is a step below the data-scientist occupation we cite.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Program structure, course count, fee, and completion requirements were taken from Google\'s official Data Analytics certificate page and Coursera course listing.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$112,590 median for data scientists (BLS, May 2024) — with an entry-level caveat',
    summary:
      'The Google Data Analytics Professional Certificate feeds the data workforce, and the closest formal occupation in the Bureau of Labor Statistics taxonomy is Data Scientists, SOC 15-2051, which had a May 2024 median annual wage of $112,590, with the lowest 10 percent earning under $63,650 and the highest 10 percent over $194,410. The honest caveat must be stated plainly: this certificate produces entry-level data analysts, and the BLS data-scientist median reflects a senior, degree-heavy occupation that most certificate holders will not reach on day one — the realistic entry rungs for a fresh certificate holder are junior analyst roles that pay well below the $112,590 median, with the growth path toward that number coming from experience and further skills. BLS counted 245,900 data scientists in 2024 and projects 34 percent employment growth from 2024 to 2034 — one of the fastest-growing occupations tracked — with about 23,400 openings a year. The certificate\'s structural value is that the analyst funnel is large and the tools it teaches (spreadsheets, SQL, Tableau, R) are the actual daily tools of analyst work, so the credential functions as a skills proof point for entry roles rather than a licence. For candidates deciding between this and a degree path, the honest framing is that the certificate is the fast, low-cost way to qualify for analyst interviews, while the wage ceiling above the entry rung is set by years of experience, statistical depth and business domain — none of which the certificate alone provides.',
    rows: [
      { label: 'Median annual wage, data scientists', value: '$112,590', note: 'BLS Occupational Outlook Handbook, May 2024 — reflects a senior occupation; entry-level analyst roles pay below this' },
      { label: 'Lowest 10 percent', value: 'less than $63,650', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $194,410', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '245,900 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~23,400 per year', note: 'BLS OOH Job Outlook, 2024-34 — 34% growth, one of the fastest-growing occupations' }
    ],
    growth: '+34% projected change 2024-34 (much faster than average), ~23,400 openings a year. The certificate is an entry-analyst ramp; the cited median reflects a senior data-scientist occupation, so treat it as the ceiling trajectory, not the starting salary.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Data Scientists',
      url: 'https://www.bls.gov/ooh/math/data-scientists.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'No exam, no pass rate — this is a completion-based programme',
    summary:
      'The Google Data Analytics Professional Certificate is not a proctored exam and has no pass rate, no cut score and no retake policy in the traditional sense — it is a sequence of eight courses on Coursera, each assessed by graded quizzes, hands-on activities and a final graded assessment, and you earn the certificate by completing the courses. We state this plainly because it changes what "passing" means: there is no single high-stakes sitting to fail, and Google does not publish a verified statistic on what share of enrolled learners finish the programme. Google reports aggregate claims about its Career Certificates (for example, that a large share of graduates come from groups underrepresented in tech and that the certificate is accepted by a consortium of employers as meeting a job-qualification threshold), and the alumni-outcomes numbers Google publishes come from its own graduate surveys rather than from an independent audit — treat them as marketing-grade figures, not verified statistics. What is verifiable is the structure: roughly eight courses (Foundations of Data Analytics; Ask Questions to Make Data-Driven Decisions; Prepare Data for Exploration; Process Data from Dirty to Clean; Analyze Data to Answer Questions; Share Data Through the Art of Visualization; Data Analysis with R Programming; and a capstone project), each ending in graded assessments that require a passing score — typically 80 percent or the course\'s stated threshold — with unlimited retakes of individual quizzes. The practical implication is that the "exam strategy" here is consistency and project completion, not cramming: the failure mode is dropping out mid-programme, not failing a sitting.',
    source: {
      label: 'Google — Data Analytics Professional Certificate (Coursera)',
      url: 'https://www.coursera.org/professional-certificates/google-data-analytics'
    },
    caveat:
      'This is a completion-based certificate with no proctored exam, so no pass rate exists. Individual courses require a passing score on graded assessments (typically ~80%), with unlimited quiz retakes; Google\'s published graduate-outcome figures come from its own surveys, not an independent audit.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'Because the certificate is a sequence of eight graded courses rather than a single exam, the plan is about sequencing, hands-on practice and scheduling, not cramming. The full programme is roughly 180-200 hours of self-paced content, and the Coursera estimate is around six months at under 10 hours a week. The courses build in a deliberate order: foundations and asking good questions first, then data preparation and cleaning, then analysis and visualisation, then R programming, and finally a capstone project that applies everything — and the capstone is the point where learners who skimmed the tools hit a wall. The plan below runs twelve weeks at roughly 8-10 hours a week for someone in no particular hurry, with the first four weeks on the foundations-to-cleaning arc, the middle four weeks on analysis and visualisation, and the final four weeks on R programming plus the capstone. The single most important structural fact is that the programme is tool-heavy by design — spreadsheets, SQL, Tableau and R are taught and then used in graded activities — so the hands-on work is the actual curriculum; a learner who watches every video but never opens the tools will pass few graded activities and learn nothing interviewable. If you already use spreadsheets and SQL at work, you can compress the early courses substantially, but do not skip the R module or the capstone, because they are the differentiators that employers can probe in interviews.',
    totalHours: '180-200 hours',
    weeks: [
      {
        label: 'Weeks 1-3',
        focus: 'Courses 1-2 — Foundations and asking questions',
        tasks: [
          'Foundations of Data Analytics: the data lifecycle, roles, and the analyst mindset',
          'Ask Questions to Make Data-Driven Decisions: structured thinking, defining problems, stakeholder expectations',
          'Complete the module assessments as you go and practise framing real business questions',
          'Set the weekly cadence now — completion depends on consistency, not intensity'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Week 4',
        focus: 'Course 3 — Prepare Data for Exploration',
        tasks: [
          'Data types, data structures, databases and best practices for organising data',
          'Do the spreadsheet and database activities hands-on — the tools are the curriculum',
          'Take the graded assessments promptly after each module',
          'Start keeping a portfolio of the datasets you prepare'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Course 4 — Process Data from Dirty to Clean',
        tasks: [
          'Data cleaning: handling missing values, duplicates, inconsistent formatting, SQL cleaning queries',
          'Complete the SQL and spreadsheet cleaning exercises — this is a core interview skill',
          'Practise documenting every cleaning decision, as the course grades documentation',
          'Keep your own cleaning checklist you can reuse in the capstone'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 7-8',
        focus: 'Course 5 — Analyze Data to Answer Questions',
        tasks: [
          'Analysis workflows, aggregations, and drawing defensible conclusions from data',
          'SQL and spreadsheet analysis exercises hands-on',
          'Practise explaining what the numbers mean in plain language — the course grades communication',
          'Relate every technique back to the business questions from Course 2'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Week 9',
        focus: 'Course 6 — Share Data Through the Art of Visualization',
        tasks: [
          'Data visualisation principles and Tableau basics: building clear, honest charts and dashboards',
          'Complete the Tableau activities hands-on and build a portfolio dashboard',
          'Practise presenting a data story end to end',
          'Take the graded assessments on time'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Weeks 10-11',
        focus: 'Course 7 — Data Analysis with R Programming',
        tasks: [
          'R basics: data types, tidyverse workflows, and simple analysis and visualisation in R',
          'Complete the R exercises hands-on — many learners underestimate this module',
          'Replicate an analysis from the earlier courses in R to consolidate',
          'Do not skip this course even if SQL feels sufficient; it is a course gate and an interview differentiator'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Week 12',
        focus: 'Course 8 — Capstone project',
        tasks: [
          'Work a real analyst-style scenario end to end: define the question, prepare and clean the data, analyse, visualise, present',
          'Apply the full toolkit — spreadsheets or SQL plus Tableau and R where appropriate',
          'Finish the graded assessments and claim the certificate',
          'Polish the capstone into a portfolio piece for interviews and LinkedIn'
        ],
        hours: '9-11 hrs'
      }
    ],
    variants: [
      { label: 'Working analyst adding formal credentials', detail: 'Six to eight weeks at 8-10 hrs/week. Compress the early spreadsheet courses; invest the recovered time in R programming and a strong capstone portfolio.' },
      { label: 'Career changer, no data background', detail: 'Sixteen to eighteen weeks at 6-8 hrs/week. Add four weeks before Week 1 on spreadsheet fundamentals; protect the weekly cadence, which is the real success factor.' },
      { label: 'Full-time job-seeker, 15-20 hrs/week', detail: 'Eight to ten weeks. Keep the course order intact; the capstone cannot be rushed, and the tools must be practised, not watched.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The success levers for this programme are hands-on tool practice, portfolio building and sequencing — not test-prep tactics, because there is no single high-stakes exam. The strategies below are ordered by what actually completes the certificate and converts it into an interview-ready skill set.',
    items: [
      {
        title: 'Treat the tools as the curriculum, not the videos',
        detail: 'The programme teaches spreadsheets, SQL, Tableau and R, and the graded activities require using them. A learner who watches every video but never opens the tools passes few activities and learns nothing an interviewer can probe. Reproduce every demonstrated action in your own copy of the tool — the hands-on work is the actual credential.'
      },
      {
        title: 'Build a portfolio as you go, not at the end',
        detail: 'The capstone produces one portfolio piece, but the strongest candidates assemble several: a cleaning project from Course 4, a dashboard from Course 6, an R analysis from Course 7. Keep each graded project in a folder with a short write-up. Interviewers for analyst roles ask "show me something you built", and a multi-project portfolio answers that directly.'
      },
      {
        title: 'Protect the weekly cadence above all',
        detail: 'The certificate has no deadline pressure and no single failing point, so the dominant failure mode is dropout, not failure. Learners who schedule a fixed weekly block finish; learners who wait for motivation stall around course four. Treat the weekly block as non-negotiable.'
      },
      {
        title: 'Finish one course before starting the next',
        detail: 'The courses build on each other — cleaning assumes preparation, analysis assumes cleaning, R assumes the analysis mindset. Bouncing between courses leaves gaps the later activities expose. Complete each course\'s assessments before moving on.'
      },
      {
        title: 'Practise explaining findings in plain language',
        detail: 'The programme grades communication — turning numbers into a recommendation a stakeholder can act on. Practise writing one-paragraph summaries of each analysis you complete. This is the skill that separates certificate holders who get analyst jobs from those who do not.'
      },
      {
        title: 'Stack it deliberately toward a first analyst role',
        detail: 'The certificate is an entry credential whose value is proven in interviews through the portfolio and tool fluency. Pair it with a targeted job search for junior analyst titles and with SQL practice beyond the course if you are weak in it — SQL is the most-tested tool in analyst interviews.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The certificate itself is the curriculum, delivered on Coursera under a monthly subscription and including all required course materials, labs and assessments. The real decisions are (1) whether to pay the subscription for several months versus finishing within fewer billing cycles, and (2) which free supplements close the tool-practice gap — especially SQL and portfolio projects.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Google Data Analytics Certificate on Coursera', values: ['~$49/month subscription (typically 1-4 billing cycles at the recommended pace)', 'Self-paced video, hands-on activities and graded assessments', 'Required — the full curriculum, materials and certificate' ], },
      { label: 'Coursera financial aid', values: ['Free for approved applicants', 'Same course access, application required', 'Learners who cannot afford the subscription' ], },
      { label: 'Tableau Public (free) + RStudio', values: ['Free', 'Software for visualisation and R work', 'Reproducing the course tools hands-on and building portfolio pieces' ], },
      { label: 'SQL practice platforms (e.g., SQLZoo, LeetCode SQL)', values: ['Free to low-cost', 'Interactive SQL exercises', 'Closing the SQL gap beyond the course — the most-tested analyst skill' ], },
      { label: 'Kaggle datasets and competitions', values: ['Free', 'Real datasets and community projects', 'Portfolio building and applying the tools to real data' ]
      }
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; the Coursera subscription and programme structure change periodically, so confirm the current fee and course list on the official page. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'Because this credential fails by attrition rather than by a single exam, the mistakes that matter are behavioural and skill-based: dropping out mid-programme, watching instead of doing, skipping R, and failing to build a portfolio. The six traps below are the recurring ones in learner post-mortems.',
    items: [
      {
        mistake: 'Starting all eight courses at once',
        fix: 'The courses build on each other, and the later activities assume the base. Enroll one course at a time and complete its assessments before moving on. Bouncing between courses is how learners end up with several half-finished courses and no certificate.'
      },
      {
        mistake: 'Watching the videos without using the tools',
        fix: 'The graded activities require spreadsheets, SQL, Tableau and R — not video recall. Reproduce every demonstrated action in your own copy of the tool. A certificate earned by watching alone will not survive an analyst-interview skills test.'
      },
      {
        mistake: 'Skipping the R programming course',
        fix: 'R is a full course gate and one of the programme\'s differentiators. Learners who skip it or guess through it lose a course and an interview advantage. Do the R exercises hands-on, even if SQL feels sufficient — many analyst roles list R or Python, and the certificate covers R.'
      },
      {
        mistake: 'Never building a portfolio outside the capstone',
        fix: 'The capstone produces one project, which is the minimum. The strongest candidates keep a cleaning project, a dashboard and an R analysis from the earlier courses. Interviewers for analyst roles ask "show me something you built" — arrive with more than one answer.'
      },
      {
        mistake: 'Quoting Google\'s outcome statistics as verified facts',
        fix: 'Google\'s graduate-outcome figures come from its own surveys and marketing materials, not from an independent audit. In interviews and resumes, describe what you actually did — the tools you used, the projects you completed — not unaudited percentage claims.'
      },
      {
        mistake: 'Treating the certificate as a substitute for SQL and statistics depth',
        fix: 'The certificate is an entry ramp; SQL fluency and statistical judgement are what analyst interviews actually test beyond it. Pair the certificate with extra SQL practice and a portfolio, and be honest with yourself about which skills need more reps before applying.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'There is no single proctored exam, so "question types" here means the graded assessment formats across the eight courses: module quizzes (multiple choice, true/false, matching), hands-on activities in spreadsheets, SQL, Tableau and R with pass/fail grading, and course-final graded assessments. Individual quizzes allow retakes, but each course requires a passing score (typically 80 percent or the stated threshold) to progress. The hands-on activities are the distinctive part: you work in the actual tool — writing a SQL query, cleaning a dataset, building a chart or dashboard, running R code — and are graded on completing the task correctly. The capstone project synthesises the courses: you take a realistic analyst scenario, define the question, prepare and clean the data, analyse it, visualise the results, and present the findings. Because the grading is completion-based with retakes, the "tactics" that matter are doing the activities for real, keeping the sequence intact, and treating every graded project as portfolio material — not test-day strategy.',
    types: [
      { name: 'Module quizzes', share: 'Throughout every course', detail: 'Multiple choice, true/false and matching on the module\'s content. Retakeable; used to reinforce rather than gate.' },
      { name: 'Hands-on tool activities', share: 'Every course includes graded activities', detail: 'Real work in spreadsheets, SQL, Tableau or R; graded on completing the task correctly in the tool.' },
      { name: 'Course-final graded assessment', share: 'One per course', detail: 'The gate for each course; requires a passing score (typically ~80%) covering the whole course.' },
      { name: 'Capstone project', share: 'Final course', detail: 'An end-to-end analyst scenario: define the question, prepare and clean the data, analyse, visualise, present.' }
    ],
    samples: [
      {
        prompt: 'A dataset of customer orders contains 30 rows with a NULL value in the "customer_id" column, and several orders appear twice with identical values. What is the correct first step in cleaning this data?',
        options: [
          'A. Delete the NULL rows immediately so the data is complete',
          'B. Investigate the source of the NULLs and duplicates before deciding how to handle them',
          'C. Replace every NULL with the number zero',
          'D. Leave the data unchanged because cleaning changes the meaning'
        ],
        answer: 'B',
        explanation: 'The course\'s cleaning methodology is investigate before decide: understand why values are missing or duplicated — data-entry errors, a broken import, a join that multiplied rows — before choosing a fix (B). A deletes data without understanding it, risking a systematic data-entry cause going unaddressed. C fabricates values and corrupts the analysis. D mistakes the goal; cleaning is expected, but it must be informed by investigation and documented. The course grades both the cleaning and the documentation of each decision.'
      },
      {
        prompt: 'Which SQL clause filters rows to only those meeting a condition?',
        options: [
          'A. SELECT',
          'B. WHERE',
          'C. ORDER BY',
          'D. GROUP BY'
        ],
        answer: 'B',
        explanation: 'WHERE filters rows by a condition before aggregation (B). SELECT (A) chooses columns. ORDER BY (C) sorts results. GROUP BY (D) aggregates rows into groups. This is the level of SQL recall the course\'s graded activities and analyst interviews test directly — the discriminator is which clause restricts the row set.'
      },
      {
        prompt: 'A bar chart comparing monthly sales shows a spike in December that dwarfs every other bar. Before concluding "sales exploded in December", which check is most appropriate?',
        options: [
          'A. Assume the spike is real and highlight it',
          'B. Investigate the December data for entry errors, returns, or a data-processing issue before interpreting',
          'C. Remove December from the chart so the trend looks consistent',
          'D. Double the other months\' values so the chart looks balanced'
        ],
        answer: 'B',
        explanation: 'An outlier that dominates a visual warrants verification before interpretation — a data-entry error, a duplicated import, or a processing issue (such as a return being counted as a sale) could explain it (B). A interprets without verification. C and D manipulate the visual, which is exactly the kind of misleading chart the visualisation course teaches against. The course grades honest, documented analysis over dramatic findings.'
      }
    ],
    note: 'Samples are editor-written illustrations of the programme\'s assessment style, not actual graded items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'There is no single exam day for this certificate — the "day" is the schedule you keep across the programme and the moment you complete the capstone. Practically, that means the equivalents of exam-day preparation are: (1) protecting the final capstone week, because it applies every tool and cannot be rushed; (2) making sure your software environment works before the graded tool activities — spreadsheets, a SQL environment, Tableau and RStudio — since the activities require executing real work; and (3) confirming your Coursera account and billing are in order so the certificate issues cleanly when you finish. The common pitfalls on "completion day" are administrative: an expired subscription that pauses access mid-course, a missing course-final assessment that blocks progression, or an R environment that fails to install packages during the graded exercises. On the day you complete the final course, the certificate is issued on Coursera and appears in your profile; you can share it to LinkedIn and download it for your resume. Unlike a proctored exam, there is no score report and no retake policy — if a course assessment falls short, you review the relevant modules and retake it. The credential is earned entirely through the platform, has no expiry, and is permanent as long as you retain access to the record.',
    bring: [
      'A reliable computer with the course tools installed (spreadsheets, SQL environment, Tableau, RStudio)',
      'Your Coursera account credentials and an active subscription',
      'A project folder for portfolio pieces as you complete each graded project',
      'A fixed weekly schedule — the real "exam-day" discipline for a completion-based certificate'
    ],
    leave: [
      'The mindset that you can binge the capstone in one weekend — it applies every tool and needs a week',
      'Unfinished module assessments — they block the course-final gate',
      'The temptation to watch the videos and skip the hands-on activities'
    ],
    timeline: [
      { time: 'At enrollment', detail: 'Confirm the current course count, fee and subscription billing cycle on the official page; set the weekly schedule.' },
      { time: 'Each week', detail: 'Complete one module\'s content and its assessment — do not batch.' },
      { time: 'Each course', detail: 'Pass the course-final graded assessment (~80% or the stated threshold) before moving on.' },
      { time: 'Final course', detail: 'Budget a full week for the capstone: define the question, prepare and clean the data, analyse, visualise, present.' },
      { time: 'Completion', detail: 'Claim the certificate on Coursera, share to LinkedIn, and update your resume with the specific tools the projects used.' }
    ],
    rules: [
      'Completion-based: no proctored exam, no cut score, no retake policy — each course requires passing its graded assessments.',
      'Course-final assessments are the gate; module quizzes are retakeable and reinforce rather than gate.',
      'Hands-on tool activities are graded on completing the task correctly in the actual tool.',
      'An active Coursera subscription is required to keep access; an expired subscription pauses your progress.',
      'The certificate is lifetime once issued; there is no renewal or continuing-education requirement.'
    ],
    afterwards:
      'When you complete the final course, the certificate is issued on Coursera and appears in your profile, ready to share to LinkedIn and attach to applications. There is no score report because there is no exam — your evidence is the completed programme and, more importantly, the portfolio of projects you built along the way and the tool fluency you can demonstrate. The credential has no expiry, which is both a convenience and a caution: nothing forces you to keep the skills fresh, so the next step matters. The strongest moves after completion are to deepen SQL fluency (the most-tested analyst skill), polish your portfolio into interview-ready pieces, and target junior analyst roles with applications that show the projects rather than just the certificate. In interviews, expect skills tests and "show me what you built" questions — answer with the tools and projects, and be honest about which areas you are still building. If you aimed the programme at a specific industry, the follow-up is to learn that domain\'s data (e.g., marketing, finance, healthcare) so your portfolio speaks the interviewer\'s language.'
  }
};

export default data;
