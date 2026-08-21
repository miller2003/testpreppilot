const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers Microsoft and other IT certifications. Exam structure, fees and rules come from the vendor certification pages, which are revised and sometimes retired on fixed schedules; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against Microsoft\'s AZ-400 exam page and study guide, and BLS OOH Software Developers (SOC 15-1252), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$132,270 median for software developers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "AZ-400" — the Azure DevOps Engineer Expert certification validates DevOps engineering skill on Azure, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Software Developers, SOC 15-1252, which had a May 2024 median wage of $132,270, with the lowest 10 percent under $84,060 and the highest 10 percent above $208,500. The fit is deliberate: AZ-400 holders work as DevOps engineers, platform engineers and release engineers who design and run CI/CD pipelines and infrastructure as code on Azure, and the DevOps-engineering role sits inside the developer-series labour market. BLS counted 1,684,900 software developer jobs in 2024 and projects 17 percent growth from 2024 to 2034, far faster than the average for all occupations, with about 150,000 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the certification\'s value is as a hiring signal for DevOps roles in Azure shops, where employers require or prefer the Expert-level credential. Read the number as the market for the occupation the credential serves.',
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
    headline: 'Microsoft publishes no pass rate — the AZ-400 is an Expert-level exam with 40-60 questions in 210 minutes, passing 700 of 1000',
    summary: 'Microsoft does not publish cohort pass rates for its certification exams, and third-party surveys are not official data, so we do not treat them as authoritative. What Microsoft does publish is the format and the passing standard: the AZ-400 exam has 40-60 questions with a 210-minute time limit, and a passing score of 700 on the 100-1000 scale. The exam is delivered at Pearson VUE centres or through online proctoring, and the Azure DevOps Engineer Expert certification is valid for one year and renewed by passing the renewal assessment. The exam content follows the published study guide: designing a DevOps strategy; implementing DevOps development processes; implementing continuous integration; implementing continuous delivery; implementing dependency management; implementing application infrastructure; and implementing continuous feedback. The absence of a published pass rate is not an absence of standards: the 700 line on an Expert-level exam is a demanding bar, and the exam rewards hands-on knowledge of Azure DevOps, GitHub Actions, ARM/Bicep and the CI/CD toolchain. The practical reading: target 80 percent-plus on practice, use Microsoft\'s official learning path, and note the one-year renewal cycle when planning.',
    source: { label: 'Microsoft Learn - AZ-400: Designing and Implementing Microsoft DevOps Solutions', url: 'https://learn.microsoft.com/en-us/credentials/certifications/devops-engineer/' },
    caveat: 'Microsoft publishes the passing score and format but no pass rate; the Expert certification renews annually.'
  },
  studyPlan: {
    summary: 'The AZ-400 is a 40-60 question, 210-minute Expert-level exam with a 700/1000 passing score, built on the published study guide: DevOps strategy design, development processes, continuous integration, continuous delivery, dependency management, application infrastructure and continuous feedback. A defensible plan runs 100 to 150 hours over 8 to 10 weeks. Weeks 1-2: the DevOps strategy and development-process domains — the DevOps culture, the source-control strategies (Git branching and workflows) and the work-item integration. Weeks 3-4: continuous integration — Azure Pipelines and GitHub Actions, the build pipelines, and the quality gates. Weeks 5-6: continuous delivery — the release pipelines, the deployment patterns (blue-green, canary, feature flags) and the infrastructure as code with ARM/Bicep. Weeks 7-8: dependency management and feedback — Artifacts feeds, and the monitoring and feedback loops with Application Insights. Weeks 9-10: scenario drilling and two full timed practice exams at the real format. The plan is hands-on-heavy because the Expert exam rewards real pipeline experience; building pipelines in a lab environment accelerates every phase.',
    totalHours: '100-150 hours over 8-10 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Strategy and development processes', tasks: ['DevOps culture and strategy design', 'Git branching and workflow strategies', 'Work-item integration with Azure Boards'], hours: 30 },
      { label: 'Weeks 3-4', focus: 'Continuous integration', tasks: ['Azure Pipelines and GitHub Actions', 'Build pipelines and quality gates', 'Hands-on pipeline labs'], hours: 35 },
      { label: 'Weeks 5-6', focus: 'Continuous delivery', tasks: ['Release pipelines and deployment patterns', 'Infrastructure as code with ARM and Bicep', 'Feature flags and rollout strategies'], hours: 35 },
      { label: 'Weeks 7-8', focus: 'Dependencies and feedback', tasks: ['Azure Artifacts and dependency management', 'Application Insights and monitoring', 'Feedback loops'], hours: 25 },
      { label: 'Weeks 9-10', focus: 'Drill and mocks', tasks: ['Scenario drilling in volume', 'Two full timed practice exams', 'Review weak domains'], hours: 30 }
    ],
    variants: [
      { label: 'Working DevOps engineer', detail: 'The pipeline work accelerates the plan; focus study on the exam domains outside your daily work and the format.' },
      { label: 'From development or admin', detail: 'Add 2 weeks of CI/CD and Git fundamentals before the full plan.' }
    ]
  },
  prepStrategies: {
    summary: 'The AZ-400 rewards hands-on DevOps experience, so the dominant strategy is building real pipelines in a lab: create Azure Pipelines and GitHub Actions workflows, deploy with Bicep, and set up monitoring, because the exam items test the toolchain in practice. Second, master the deployment patterns and the infrastructure-as-code material: blue-green, canary and feature-flag deployments, and ARM/Bicep, are distinct domains that candidates new to DevOps often under-prepare. Third, learn the Azure DevOps and GitHub Actions service boundaries precisely — which tool does what and how they integrate — because the exam asks tool-selection questions. Fourth, use Microsoft\'s official learning path and the study guide as the scope map, and hold yourself to 80 percent-plus on practice because the Expert-level 700 line leaves little margin. Finally, remember the one-year renewal cycle: the Expert certification renews annually, so plan the renewal assessment from the start.',
    items: [
      { title: 'Build real pipelines', detail: 'Azure Pipelines, GitHub Actions and Bicep in a lab — the exam tests the toolchain.' },
      { title: 'Master deployment patterns', detail: 'Blue-green, canary and feature flags are distinct tested domains.' },
      { title: 'Learn the tool boundaries', detail: 'Which tool does what and how they integrate is the exam\'s pattern.' },
      { title: 'Hold to 80%+ on practice', detail: 'The Expert-level 700 line leaves little margin.' },
      { title: 'Plan the annual renewal', detail: 'The Expert certification renews yearly; schedule the assessment.' }
    ]
  },
  resourceComparison: {
    summary: 'AZ-400 prep spans official Microsoft resources and third-party courses. Microsoft\'s own materials — the study guide (free), the learning path and the Microsoft Learn practice assessments — are the authoritative source at no cost. Third-party providers sell AZ-400 courses and practice exams at $50-$400, and the market is mature because the Expert certification is popular. Hands-on practice needs an Azure subscription; the free tier and the free DevOps trial support pipeline labs at low cost. A realistic total budget is $150 to $700 including the $165 exam fee. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn study guide + learning path', values: ['Free', 'Official online modules', 'The authoritative scope; the primary resource'] },
      { label: 'Microsoft practice assessment', values: ['Free', 'Official online practice', 'The closest official item style'] },
      { label: 'Third-party courses', values: ['$50-$400', 'Video courses and labs', 'Structured walkthrough of the domains'] },
      { label: 'Azure free tier + DevOps trial', values: ['$0', 'Real cloud environment', 'Building the pipelines the exam rewards'] },
      { label: 'AZ-400 exam', values: ['~$165', 'Computer-based exam', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the AZ-400 exam fee is about $165; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common AZ-400 mistake is studying theory without building pipelines: candidates who read about Azure DevOps but never create a pipeline meet the hands-on scenario items without the practical intuition they reward. The fix is lab work from the start. The second mistake is under-preparing the deployment patterns and infrastructure-as-code material, distinct domains that candidates new to DevOps often miss. Third, candidates confuse the tool boundaries — Azure Pipelines vs GitHub Actions vs ARM — which the exam tests with selection questions. Fourth, many candidates never run a full timed practice exam and misjudge the 210-minute Expert-level format. Finally, some candidates overlook the one-year renewal cycle and plan only for the exam itself.',
    items: [
      { mistake: 'Studying without building', fix: 'Create real pipelines in a lab; the exam tests the toolchain.' },
      { mistake: 'Under-preparing deployment patterns', fix: 'Blue-green, canary and Bicep are distinct domains; drill them.' },
      { mistake: 'Confusing the tool boundaries', fix: 'Learn which tool does what and when to use each.' },
      { mistake: 'Skipping timed mocks', fix: '210 minutes at Expert level; run two full timed exams.' },
      { mistake: 'Ignoring the annual renewal', fix: 'The Expert certification renews yearly; plan the assessment.' }
    ]
  },
  questionTypes: {
    summary: 'The AZ-400 is a 40-60 question multiple-choice, case-study and scenario-based exam in 210 minutes. The items test the published study guide: DevOps strategy, development processes, CI, CD, dependency management, application infrastructure and continuous feedback — with many scenario items asking which tool or practice fits a described pipeline need. Samples below are editor-written illustrations of the published study guide, not live exam items; they show the DevOps-toolchain style of the real items.',
    types: [
      { name: 'Tool-selection scenario items', share: 'Largest block', detail: 'Which DevOps tool or practice fits a described need.' },
      { name: 'Pipeline and deployment items', share: 'Large block', detail: 'CI/CD pipelines, deployment patterns and Bicep.' },
      { name: 'Monitoring and feedback items', share: 'Meaningful block', detail: 'Application Insights and continuous feedback.' }
    ],
    samples: [
      {
        prompt: 'A team wants to automate the build and deployment of an application on every push to the main branch. The most appropriate solution is:',
        options: ['A. A CI/CD pipeline triggered by the repository, such as Azure Pipelines or GitHub Actions', 'B. Manual deployment steps', 'C. A scheduled overnight build only', 'D. Copying files by hand'],
        answer: 'A',
        explanation: 'Repository-triggered CI/CD pipelines automate build and deployment on every push — the standard DevOps pattern. Manual steps, scheduled-only builds or file copying each fail the automation requirement.'
      },
      {
        prompt: 'A team must deploy a new version gradually to a subset of users to limit risk. The most appropriate deployment strategy is:',
        options: ['A. A canary deployment with staged rollout and monitoring', 'B. Deploying to all users at once', 'C. Rolling back without monitoring', 'D. Skipping the deployment'],
        answer: 'A',
        explanation: 'Canary deployments release to a subset, monitor and then expand — the standard gradual-rollout strategy. Full-at-once deployment, unmonitored rollback or skipping each fail the risk-limited rollout requirement.'
      },
      {
        prompt: 'To define Azure infrastructure as declarative code that can be versioned and reviewed, the most appropriate tool is:',
        options: ['A. ARM templates or Bicep', 'B. The Azure portal click-through', 'C. Manual configuration', 'D. A spreadsheet'],
        answer: 'A',
        explanation: 'ARM templates and Bicep define Azure infrastructure as declarative, versionable code — the infrastructure-as-code standard. Portal clicks, manual configuration and spreadsheets cannot be versioned or reviewed as code.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published study guide, not live exam items.'
  },
  examDay: {
    summary: 'The AZ-400 is a 40-60 question, 210-minute computer-based exam at a Pearson VUE centre or through online proctoring, with a mix of multiple-choice, case-study and scenario items. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at roughly 3.5-5 minutes per item given the case studies, flag uncertain items for review, and budget time for the reading-heavy scenarios. You receive your score on screen immediately, with the official result following; Microsoft reports your scaled score against the 700 line. If you fail, you may retake after a waiting period. On a pass, the Expert certification is valid for one year and renewed by passing the free renewal assessment. The afterwards matters: schedule the renewal assessment before the expiry, and record the renewal date.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '40-60 questions in 210 minutes; pace for the case studies, flag and review.' },
      { time: 'After submit', detail: 'Scaled score appears on screen against the 700/1000 passing line.' },
      { time: 'Next', detail: 'Schedule the annual renewal assessment and record the date.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '210 minutes for 40-60 questions; the clock does not pause',
      'The Expert certification renews annually via the renewal assessment'
    ],
    afterwards: 'On a pass, your AZ-400 is valid for one year; pass the renewal assessment before expiry. On a fail, retake after additional study.'
  }
};

export default data;
