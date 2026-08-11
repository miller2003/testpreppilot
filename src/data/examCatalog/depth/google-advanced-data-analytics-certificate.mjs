const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & data certifications desk',
    bio: 'Google Career Certificate structure comes from Google official program pages and is revised with each course update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the Google Advanced Data Analytics Certificate structure and course assessments against Google official program pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect data-scientist pay at a May 2024 median of $112,590 (BLS) — the Google Advanced Data Analytics Certificate is an entry-to-mid credential for the analytics field, where the occupation median sits high but entry salaries start lower',
    summary: 'The direct answer is that the Google Advanced Data Analytics Certificate is an entry-level credential on Coursera, and the occupation it prepares for, data scientists (SOC 15-2051), earned a May 2024 median annual wage of $112,590, with the lowest 10 percent under about $70,000 and the highest 10 percent above about $167,000 — but the honest framing is that the median reflects the full occupation, and entry analytics roles (analyst, junior data analyst) sit in the lower half of the distribution until experience builds. The certificate is the advanced tier of the Google data-analytics family: it requires completion of (or equivalent knowledge to) the Google Data Analytics Certificate, and it teaches Python for data analysis, statistics and hypothesis testing, regression models, and machine-learning fundamentals through seven courses with hands-on projects. BLS counted about 212,000 data scientists in 2024 and projects about 30 percent employment growth from 2024 to 2034, much faster than average, with roughly 23,000 annual openings — one of the strongest growth stories in the economy. The credential\u2019s role is positional: Google reports that the certificate prepares learners for entry analytics roles, and employers treat the certificate plus portfolio as evidence of applied skills, but the pay effect compounds with the portfolio and interview performance rather than the certificate alone. The practical read: the certificate costs about $49 to $79 per month on Coursera and takes roughly six months at 10 hours per week, making it an affordable analytics on-ramp, and the career payoff comes from pairing the credential with a portfolio and targeting the analyst-to-data-scientist progression the field offers.',
    rows: [
      { label: 'Median annual wage, data scientists', value: '$112,590', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 15-2051)' },
      { label: 'Lowest 10 percent', value: 'less than $70,000', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $167,000', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+30%', note: 'BLS Employment Projections' },
      { label: 'The credential itself', value: 'Entry-level certificate', note: '~6 months on Coursera; builds on the Data Analytics Certificate' }
    ],
    growth: 'BLS projects about 30% growth for data scientists from 2024 to 2034, much faster than average, with roughly 23,000 annual openings.',
    source: { label: 'BLS OOH — Data Scientists', url: 'https://www.bls.gov/ooh/math/data-scientists.htm' }
  },
  passRate: {
    headline: 'No pass rate is published — the certificate is graded on course assessments and projects, and completion requires passing each course\u2019s graded work, which Google does not report as a cohort statistic',
    summary: 'The core fact is that Google does not publish pass or completion rates for the Advanced Data Analytics Certificate, and none is available from an independent source, because the credential is earned through course completion rather than a single exam. What is published is the structure: the certificate on Coursera consists of seven courses — an introduction to advanced data analytics, Python for data analysis, statistics and hypothesis testing, regression analysis, machine-learning foundations, capstone, and a Google data analytics career-preparation course — each with graded quizzes, labs, and projects that must be passed to advance; the capstone project is the final requirement, and completion of all seven courses with passing grades earns the certificate. The assessments are auto-graded and project-based, and because they are completion-style rather than a high-stakes gate, the practical pass rate is high for learners who keep pace, with the common failure mode being stalling on the Python and statistics courses rather than failing a quiz. The numbers that matter publicly are the program logistics: the ~$49 to $79 per month Coursera subscription, the roughly six-month timeline at 10 hours per week, the requirement to complete the prior Google Data Analytics Certificate or demonstrate equivalent knowledge, and Google\u2019s statement that the program prepares learners for entry-level analytics roles. The honest advice is to treat the projects as the credential — the portfolio you build in the capstone is what employers and recruiters actually evaluate — and to keep the weekly pace, since the completion-based design rewards consistency.',
    source: { label: 'Google Career Certificates — Advanced Data Analytics', url: 'https://grow.google/certificates/' },
    caveat: 'No official pass or completion rate is published; the certificate is earned through graded course assessments.'
  },
  studyPlan: {
    summary: 'Plan for roughly six months at 8 to 12 hours per week — the certificate is seven courses on Coursera with graded projects — and treat the Python, statistics, and capstone courses as the core investment, since they carry the skill weight the field actually rewards. The course sequence is: introduction to advanced data analytics; Python for data analysis; statistics and hypothesis testing; regression analysis; machine-learning foundations; capstone; and career preparation. The most effective study rhythm is weekly: complete each week\u2019s lessons, then do the labs hands-on rather than watching, because the graded projects test applied skill. The highest-yield habits are coding along with the Python labs, running the statistics exercises in notebooks, and building the capstone portfolio project with real polish, since the capstone is the artifact you present in interviews. If you are coming from the Google Data Analytics Certificate, the Python and statistics courses will be the new weight; if you are starting fresh, budget extra weeks for the Python fundamentals. After completion, plan the portfolio packaging — the capstone, plus the other course projects in a GitHub portfolio — and target analyst-to-data-scientist roles, since the certificate is the on-ramp and the portfolio plus interviews decide the actual offer. Note the subscription cost structure: completing faster costs less, so the weekly pace also controls the budget.',
    totalHours: '~250-300 hours across ~6 months (10 hrs/week)',
    weeks: [
      { label: 'Months 1-2', focus: 'Python + statistics', tasks: ['Complete the intro and Python courses', 'Work the statistics and hypothesis-testing modules', 'Do every lab hands-on'], hours: 80 },
      { label: 'Months 3-4', focus: 'Modeling', tasks: ['Finish regression analysis', 'Work machine-learning foundations', 'Begin the capstone planning'], hours: 80 },
      { label: 'Months 5-6', focus: 'Capstone + career', tasks: ['Complete the capstone project', 'Package the portfolio', 'Finish the career-preparation course'], hours: 80 }
    ],
    variants: [
      { label: 'Google Data Analytics Certificate', detail: 'The entry-level prerequisite certificate; the advanced tier builds on its content.' },
      { label: 'Advanced tier standalone', detail: 'Coursera allows direct enrollment with demonstrated equivalent knowledge.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that makes the Advanced Data Analytics Certificate career-relevant is "code hands-on, build the portfolio, and treat the capstone as the deliverable," and the single biggest error is watching the videos and skimming the labs, which leaves the projects — the actual assessment — underpowered. A second proven approach is coding along with every Python lab in your own notebook, because the graded projects test applied skill, and interviewers probe real code, not certificate possession. Third, invest the extra time in the statistics course: hypothesis testing and regression are the analytical core the field expects, and they are where certificate-completers are weakest. Fourth, treat the capstone as a portfolio project from week one — choose a dataset you care about, document the process, and polish the output, since this is the artifact you present. Fifth, keep the weekly pace to control the subscription cost — the ~$49-79/month structure means faster completion is cheaper completion. Finally, plan the post-certificate step: a GitHub portfolio, targeted applications to analyst roles, and a realistic timeline to the data-scientist progression, since the certificate opens the door and the portfolio and interviews close the offer.',
    items: [
      { title: 'Code along with every lab', detail: 'The graded projects test applied skill; interviews probe real code.' },
      { title: 'Invest in the statistics course', detail: 'Hypothesis testing and regression are the field\u2019s analytical core.' },
      { title: 'Make the capstone portfolio-grade', detail: 'The capstone is the artifact you present in interviews.' },
      { title: 'Keep the pace to control cost', detail: 'The subscription structure rewards faster completion.' },
      { title: 'Plan the post-certificate step', detail: 'A GitHub portfolio and targeted analyst applications follow the credential.' }
    ]
  },
  resourceComparison: {
    summary: 'The certificate\u2019s cost is the Coursera subscription — about $49 to $79 per month, so roughly $300 to $500 total at the standard pace — and all course materials are included. The comparison below separates the certificate itself, the prerequisite, and the optional supplements, with prices current to this review. The buying rule is to complete the certificate on the subscription (it is the cheapest credentialed path to the content) and treat paid supplemental courses as optional depth.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Google Advanced Data Analytics Certificate', values: ['~$49-79/mo (total ~$300-500)', '7 courses on Coursera', 'The credential itself'] },
      { label: 'Google Data Analytics Certificate (prerequisite)', values: ['~$49-79/mo', 'Coursera courses', 'The entry-level foundation'] },
      { label: 'GitHub portfolio hosting', values: ['Free', 'Public repositories', 'Showcasing the capstone'] },
      { label: 'Kaggle datasets & competitions', values: ['Free', 'Online', 'Capstone data and extra practice'] },
      { label: 'Structured analytics courses (e.g. DataCamp)', values: ['~$13-40/mo', 'Online interactive', 'Optional reinforcement'] }
    ],
    footnote: 'Prices approximate and dated to this review; the subscription cost scales with completion time.'
  },
  commonMistakes: {
    summary: 'The most common mistake is watching the videos without coding along, which leaves the graded projects — the actual assessment — underpowered; the second is stalling on the Python or statistics courses and letting the subscription cost mount. A third recurring error is treating the capstone as a checkbox instead of a portfolio project, graduating without the artifact employers actually evaluate. Candidates also routinely skip the career-preparation course content and the portfolio packaging, and many underestimate the statistics depth, passing the courses but arriving at interviews weak on hypothesis testing. Finally, some learners expect the certificate alone to command data-scientist salaries, ignoring the analyst-entry reality and the portfolio-plus-interview path the credential is designed to start.',
    items: [
      { mistake: 'Watching without coding', fix: 'Do every lab hands-on; the projects are the assessment.' },
      { mistake: 'Letting the pace slip', fix: 'The subscription rewards consistent weekly progress.' },
      { mistake: 'Treating the capstone as a checkbox', fix: 'Build a portfolio-grade project; it is the interview artifact.' },
      { mistake: 'Weak on statistics', fix: 'Invest in hypothesis testing and regression; it is the analytical core.' },
      { mistake: 'Expecting the certificate alone to pay', fix: 'Target analyst-entry roles with the portfolio; the data-scientist median comes with experience.' }
    ]
  },
  questionTypes: {
    summary: 'The certificate is assessed through auto-graded quizzes, coding labs, and project submissions in each of the seven courses, with the capstone project as the final deliverable. The samples below are editor-written illustrations of the course content, not live exam items.',
    types: [
      { name: 'Python data analysis', share: '~25%', detail: 'Pandas, NumPy, and data-wrangling in Python.' },
      { name: 'Statistics & hypothesis testing', share: '~25%', detail: 'Distributions, tests, and inference.' },
      { name: 'Regression analysis', share: '~20%', detail: 'Building and interpreting regression models.' },
      { name: 'Machine-learning foundations', share: '~15%', detail: 'Basic models and evaluation.' },
      { name: 'Capstone & career', share: '~15%', detail: 'Applied project and career preparation.' }
    ],
    samples: [
      {
        prompt: 'Which Python library is most commonly used for tabular data manipulation?',
        options: ['A. Matplotlib', 'B. Pandas', 'C. Scikit-learn', 'D. Seaborn'],
        answer: 'B',
        explanation: 'Pandas is the standard library for tabular data manipulation and analysis.'
      },
      {
        prompt: 'A p-value of 0.03 in a hypothesis test at the 0.05 significance level indicates:',
        options: ['A. Accept the null hypothesis', 'B. Reject the null hypothesis', 'C. The test is invalid', 'D. The sample is too small'],
        answer: 'B',
        explanation: 'A p-value below 0.05 provides evidence to reject the null hypothesis at that significance level.'
      },
      {
        prompt: 'Which metric best evaluates a regression model\u2019s predictive fit?',
        options: ['A. Accuracy', 'B. R-squared', 'C. Precision', 'D. Recall'],
        answer: 'B',
        explanation: 'R-squared measures the proportion of variance explained by the regression model.'
      }
    ],
    note: 'Samples are editor-written illustrations of the course content, not live exam items.'
  },
  examDay: {
    summary: 'There is no single exam day — the certificate is earned by passing the graded quizzes, labs, and projects in all seven courses and completing the capstone, all online through Coursera. The core rhythm is weekly progress: complete each course\u2019s graded work, then move to the next, with the capstone as the final requirement. There are no proctored exams; the assessments are auto-graded and project-based. After completing all seven courses, Coursera issues the certificate, which links to your Google Career Certificate record and your LinkedIn profile. The most useful habits throughout: keep the weekly pace to control the subscription cost, do the labs hands-on, and spend the final weeks polishing the capstone into a portfolio-grade artifact. After the certificate, package the portfolio on GitHub, update your resume with the applied projects, and target analyst roles — the certificate is the on-ramp, and the portfolio plus interview performance decide the offer. Budget the analytics skill build after the certificate (SQL depth, more machine learning) as you progress toward the data-scientist roles the occupation\u2019s median reflects.',
    bring: ['A consistent 8-12 hours/week study block', 'A GitHub account for the portfolio', 'The capstone dataset and notebook'],
    leave: ['The assumption of a single proctored exam — it is completion-based', 'Passive video watching'],
    timeline: [
      { time: 'Month 1-2', detail: 'Python and statistics courses with hands-on labs.' },
      { time: 'Month 3-4', detail: 'Regression and machine-learning foundations.' },
      { time: 'Month 5-6', detail: 'Capstone project and career-preparation course.' },
      { time: 'After', detail: 'Certificate issued; package the portfolio and apply.' }
    ],
    rules: ['Completion-based: pass every course\u2019s graded work', 'Capstone is the final requirement', 'No proctored exams', 'Subscription cost scales with pace'],
    afterwards: 'Completing all seven courses and the capstone earns the Google Advanced Data Analytics Certificate, the entry-to-mid credential for analytics roles.'
  }
};

export default data;
