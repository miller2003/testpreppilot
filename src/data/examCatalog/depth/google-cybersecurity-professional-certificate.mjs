const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers Google Career Certificates and IT credentials. Exam structure, fees and rules come from the provider\'s official pages (Google/Coursera), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the Google Cybersecurity Professional Certificate pages and BLS OOH Information Security Analysts (SOC 15-1212), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$124,910 median for information security analysts (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "Google Cybersecurity Certificate" — the program is a career certificate that prepares learners for entry-level cybersecurity roles, and the wage question belongs to the occupation you enter with it. The closest official BLS occupation is Information Security Analysts, SOC 15-1212, which had a May 2024 median wage of $124,910, with the lowest 10 percent under $71,280 and the highest 10 percent above $173,780. The fit must be read with an honest caveat: the BLS median describes experienced information-security analysts, and a career-certificate holder is entering the bottom of that market — security support, SOC and junior analyst roles that pay well below the median until experience accumulates. BLS counted 182,300 information security analyst jobs in 2024 and projects a striking 30 percent growth from 2024 to 2034, with about 17,500 openings a year, and that growth is precisely the demand the career certificate targets. The limitation to state plainly: the certificate carries no wage premium in government data, and employers hire on the combination of the credential, hands-on skills and demonstrated projects; read the BLS figure as the destination market, not the entry wage.',
    rows: [
      { label: 'Median annual wage, information security analysts (destination market)', value: '$124,910', note: 'BLS OOH, SOC 15-1212, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $71,280', note: 'BLS OOH, SOC 15-1212, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $173,780', note: 'BLS OOH, SOC 15-1212, May 2024' },
      { label: 'Projected openings per year', value: '~17,500', note: 'BLS OOH, SOC 15-1212, 2024-2034' }
    ],
    growth: 'BLS projects 30 percent growth for information security analysts from 2024 to 2034, about 17,500 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Information Security Analysts', url: 'https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm' }
  },
  passRate: {
    headline: 'Google publishes no pass rate — each course ends with a graded assessment, and the certificate requires completing all courses',
    summary: 'Google does not publish cohort pass rates for the Cybersecurity Professional Certificate, and third-party estimates are not official data, so we do not treat them as authoritative. What Google does publish is the structure: the certificate is a sequence of courses — typically eight, covering security foundations, network security, the Linux operating system and SQL, assets-threats-and-vulnerabilities, detection and response, and automation with Python — each ending with a graded assessment, and the certificate is awarded when all courses are completed. The assessments are project-based and hands-on: learners complete labs and practical tasks (such as using a SIEM, analysing logs and scripting responses) rather than a single proctored exam, and the final course includes a capstone portfolio project. The absence of a published pass rate is not an absence of standards: the graded assessments require genuine skill demonstration, and the certificate is only as credible as the work behind it. The practical reading: because the path is course-based, preparation is about consistent progress and hands-on practice rather than a single test, and the real filter is your ability to demonstrate the skills in interviews after you finish.',
    source: { label: 'Google - Cybersecurity Professional Certificate', url: 'https://grow.google/cybersecurity/' },
    caveat: 'Google publishes the course structure but no pass rate; the certificate requires completing all graded courses and the capstone.'
  },
  studyPlan: {
    summary: 'The Google Cybersecurity Professional Certificate is a sequence of roughly eight courses on Coursera, each ending in graded assessments, with no single proctored exam — so the plan is a schedule, not a cram plan. A defensible plan runs 120 to 180 hours over 3 to 6 months of part-time study (the program is self-paced; Google suggests about 6 months at under 10 hours a week). Months one to two: the foundations — the cybersecurity fundamentals course, then network security (TCP/IP, network attacks and defences) and the Linux and SQL course, which build the technical base. Months two to three: the core analyst skills — assets, threats and vulnerabilities, and the detection-and-response courses, which include the SIEM labs that define the SOC analyst job. Months three to four: the automation-with-Python course and the capstone, which tie the skills together in a portfolio project. The plan is hands-on because the graded assessments reward doing the labs and projects, and the portfolio is what you show employers; treat every lab as a portfolio artifact, not a checkbox.',
    totalHours: '120-180 hours over 3-6 months (self-paced)',
    weeks: [
      { label: 'Months 1-2', focus: 'Foundations and technical base', tasks: ['Cybersecurity fundamentals course', 'Network security: TCP/IP, attacks and defences', 'Linux and SQL for analysts'], hours: 60 },
      { label: 'Months 2-3', focus: 'Core analyst skills', tasks: ['Assets, threats and vulnerabilities', 'Detection and response with SIEM labs', 'Incident-handling practice'], hours: 55 },
      { label: 'Months 3-4', focus: 'Automation and capstone', tasks: ['Python for security automation', 'The capstone portfolio project', 'Resume and interview preparation'], hours: 45 }
    ],
    variants: [
      { label: 'IT professional cross-training', detail: 'The Linux and networking courses accelerate; spend the extra time on the SIEM and Python content.' },
      { label: 'Complete beginner', detail: 'Stretch to 6 months; the fundamentals course matters most before the technical courses.' }
    ]
  },
  prepStrategies: {
    summary: 'The Google Cybersecurity Certificate rewards hands-on skill demonstration, so the dominant strategy is doing every lab and project fully and treating them as portfolio artifacts: the graded assessments test real tasks — SIEM analysis, log review, Linux commands, Python scripting — and the work you produce is what you will show employers. Second, keep the schedule steady: the program is self-paced and course-based, and the most common failure mode is stalling between courses, so set a weekly hour target and protect it. Third, build the portfolio deliberately: the capstone and the best lab projects should be collected into a documented portfolio with write-ups, because entry-level cybersecurity hiring weighs demonstrable skills heavily. Fourth, pair the certificate with the recognised entry certifications (such as the CompTIA Security+ or the ISC2 CC) if your target employers require them, because the certificate and the certifications reinforce each other. Finally, use the career resources Google provides — the interview prep and the employer network — because the certificate\'s value is realised in the job search, not at completion.',
    items: [
      { title: 'Treat labs as portfolio artifacts', detail: 'The graded work is what you show employers; do it fully and document it.' },
      { title: 'Protect the weekly schedule', detail: 'Self-paced programs fail by stalling; set a weekly hour target.' },
      { title: 'Build a documented portfolio', detail: 'The capstone and best labs need write-ups for the job search.' },
      { title: 'Stack recognised certifications', detail: 'Pair the certificate with Security+ or ISC2 CC for employer requirements.' },
      { title: 'Use the career resources', detail: 'Interview prep and the employer network realise the certificate\'s value.' }
    ]
  },
  resourceComparison: {
    summary: 'The Google Cybersecurity Certificate costs are subscription-based: it is delivered on Coursera, and learners pay roughly $49-$99 per month until completion, with the total typically $200-$500 over three to six months; financial aid is available through Coursera for eligible learners. The program includes all its labs and projects, so there are no separate study-material costs. Optional additions are the recognised entry certifications (Security+ at about $392, ISC2 CC at about $199) and their prep materials ($50-$200), which many candidates add for employer requirements. A realistic total budget is $200 to $800 including the certificate subscription and an optional certification. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Google Cybersecurity Certificate', values: ['~$49-$99/month (typically $200-$500 total)', 'Coursera courses + labs + capstone', 'The program itself'] },
      { label: 'Coursera financial aid', values: ['Free application', 'Sponsored access', 'Eligible learners who need it'] },
      { label: 'CompTIA Security+ (optional stack)', values: ['~$392 exam + $50-$200 prep', 'Exam + prep materials', 'Employers that require a recognised cert'] },
      { label: 'ISC2 CC (optional stack)', values: ['~$199 exam', 'Exam + free training', 'A low-cost recognised entry cert'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; Coursera pricing varies by plan; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common mistake with the Google Cybersecurity Certificate is treating it as a passive video course: learners who watch the lessons without doing the labs and projects finish with a certificate but no demonstrable skill, and the job search exposes the gap. The fix is hands-on work in every course. The second mistake is stalling mid-program — the self-paced structure has no external deadline, and the most common failure is simply stopping; protect the weekly schedule. Third, some learners assume the certificate alone qualifies them for analyst roles; pairing it with a recognised certification and a documented portfolio is what clears employer filters. Fourth, candidates neglect the career resources — the interview prep and employer network — which are part of the program\'s value. Finally, treating completion as the finish line instead of the start of the job search misses the point; the certificate is a market-access credential, and the search is where it pays off.',
    items: [
      { mistake: 'Watching without doing', fix: 'Complete every lab and project; the skills are the credential.' },
      { mistake: 'Stalling mid-program', fix: 'Self-paced means self-managed; protect the weekly schedule.' },
      { mistake: 'Assuming the certificate alone suffices', fix: 'Pair it with a recognised cert and a documented portfolio.' },
      { mistake: 'Ignoring the career resources', fix: 'Interview prep and the employer network are part of the program.' },
      { mistake: 'Stopping at completion', fix: 'The job search is where the certificate pays off.' }
    ]
  },
  questionTypes: {
    summary: 'The Google Cybersecurity Certificate has no single proctored exam; each course ends with graded assessments that are largely hands-on and project-based — completing tasks such as analysing SIEM alerts, reviewing logs, applying Linux commands and writing Python scripts — plus quizzes and peer-reviewed projects, with a capstone portfolio in the final course. Samples below are editor-written illustrations of the kind of assessment tasks the courses use, not live test items; they show the practical, task-based style of the program.',
    types: [
      { name: 'Hands-on lab tasks', share: 'Every course', detail: 'SIEM analysis, log review, Linux and Python tasks.' },
      { name: 'Knowledge quizzes', share: 'Every course', detail: 'Security concepts, network and vulnerability material.' },
      { name: 'Capstone and projects', share: 'Final course', detail: 'The portfolio project tying the skills together.' }
    ],
    samples: [
      {
        prompt: 'A security analyst reviews a SIEM alert showing repeated failed logins to a workstation from a foreign IP. The most appropriate first step is to:',
        options: ['A. Assess the alert for a true positive, then investigate the source and follow the incident-response process', 'B. Ignore it as routine noise', 'C. Disconnect the entire network', 'D. Delete the logs'],
        answer: 'A',
        explanation: 'Alert triage starts with assessing whether the alert is a true positive, then investigating the source and following the incident-response process. Ignoring it, overreacting by disconnecting the network or deleting logs each fail the analyst\'s core duty.'
      },
      {
        prompt: 'Which Linux command displays the contents of a file?',
        options: ['A. cat', 'B. cd', 'C. pwd', 'D. mkdir'],
        answer: 'A',
        explanation: 'cat displays file contents. cd changes directories, pwd prints the working directory and mkdir creates directories — the exam-style Linux tasks test these command distinctions.'
      },
      {
        prompt: 'A vulnerability scanner reports an open port on a server that should be closed. The most appropriate next step is to:',
        options: ['A. Verify the finding, assess the risk and remediate or document the port', 'B. Close the port immediately without verification', 'C. Ignore the scanner report', 'D. Restart the server'],
        answer: 'A',
        explanation: 'Vulnerability findings should be verified, risk-assessed and remediated or documented — the standard handling process. Acting without verification, ignoring the report or restarting the server each skip the structured response.'
      }
    ],
    note: 'Samples are editor-written illustrations of the program\'s assessment style, not live test items — the certificate has no single proctored exam.'
  },
  examDay: {
    summary: 'There is no single "exam day" for the Google Cybersecurity Certificate — the credential is earned by completing the course sequence and its graded assessments on Coursera. The practical checklist is a completion plan: keep the subscription active until you finish, complete every graded assessment and lab, and finish the capstone. The afterwards is where the program pays off: build the portfolio with your best labs and the capstone, update your resume and LinkedIn with the credential, use Google\'s career resources (interview prep and the employer network), and pair the certificate with a recognised certification if your target roles require one. Treat the certificate as market access, and put the demonstrated skills at the centre of your job search.',
    bring: ['A consistent study schedule and a working computer', 'A Coursera account with an active subscription', 'A portfolio folder for your labs and capstone'],
    leave: ['The assumption that the certificate alone lands the job — the skills and search matter'],
    timeline: [
      { time: 'Throughout', detail: 'Complete courses, labs and graded assessments at a steady pace.' },
      { time: 'Final course', detail: 'Finish the capstone portfolio project.' },
      { time: 'After completion', detail: 'Receive the certificate; build the portfolio and update your profiles.' },
      { time: 'Job search', detail: 'Use the career resources; pair with recognised certs if required.' }
    ],
    rules: [
      'The certificate requires completing all courses and the capstone',
      'The program is self-paced; keep the subscription until completion',
      'The value is realised in the job search, not at completion'
    ],
    afterwards: 'On completion, build the portfolio, update your profiles and use the career resources. Pair the certificate with recognised entry certifications if your target employers require them.'
  }
};

export default data;
