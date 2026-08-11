const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers cloud and IT certifications. Exam structure, fees and rules come from the vendor certification pages (AWS, Google, CompTIA, Cisco, ISC2), which are revised and sometimes retired on fixed schedules; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against AWS\'s Developer - Associate exam guide (DVA-C02) and BLS OOH Software Developers (SOC 15-1252), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$132,270 median for software developers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "AWS Developer" — the certification validates cloud development skill, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Software Developers, SOC 15-1252, which had a May 2024 median wage of $132,270, with the lowest 10 percent under $84,060 and the highest 10 percent above $208,500. The fit is direct: AWS Certified Developer - Associate holders work as cloud application developers, backend engineers and DevOps-minded developers who build and deploy on AWS. BLS counted 1,684,900 software developer jobs in 2024 and projects 17 percent growth from 2024 to 2034, far faster than the average for all occupations, with about 150,000 openings a year. The limitation to state plainly: the BLS median covers the whole occupation, credentialed or not, and an Associate-level certification is an early-to-mid career signal, so the realistic benchmark for a new holder sits around or below the median, climbing with experience. Read the number as the market for the occupation, and note that developer pay varies strongly by location, stack and seniority.',
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
    headline: 'AWS publishes no pass rate — it publishes the passing score: 720 of 1000, with a 65-question, 130-minute exam',
    summary: 'AWS does not publish cohort pass rates for its certification exams, and third-party surveys are not official data, so we do not treat them as authoritative. What AWS does publish is the format and the passing standard: the Developer - Associate exam (DVA-C02) has 65 questions, a 130-minute time limit, and a passing score of 720 on the 100-1000 scale. The exam is delivered at Pearson VUE centres or through online proctoring, and the certification is valid for three years. The exam content follows the official exam guide, with domains covering development with AWS services, deployment (CI/CD and infrastructure as code), debugging and optimisation, and security. The absence of a published pass rate is not an absence of standards: the Developer exam is a hands-on-flavoured test that rewards working knowledge of Lambda, API Gateway, DynamoDB, S3, the SDK and CloudFormation, and the 720 line on 65 questions requires consistent performance across the domains. The practical reading: target 80 percent-plus on practice exams and use AWS\'s official exam guide and sample questions, the closest thing to the real item style.',
    source: { label: 'AWS - Developer Associate certification (DVA-C02)', url: 'https://aws.amazon.com/certification/certified-developer-associate/' },
    caveat: 'AWS publishes the passing score and format but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The DVA-C02 is a 65-question, 130-minute exam with a 720/1000 passing score, built on domains that follow the exam guide: development with AWS services, deployment (CI/CD and infrastructure as code), debugging and optimisation, and security for developers. The exam rewards working knowledge of the developer toolkit — Lambda, API Gateway, DynamoDB, S3, IAM, the AWS SDK, CloudFormation and the CI/CD services — and it is one of the most hands-on Associate exams. A defensible plan runs 80 to 120 hours over 8 to 10 weeks. Weeks 1-3 build the service foundation: compute and serverless (Lambda, API Gateway), storage (S3), databases (DynamoDB), and the SDK patterns for each. Weeks 4-5 cover deployment: CodeCommit/CodeBuild/CodeDeploy/CodePipeline, CloudFormation and infrastructure as code. Weeks 6-7 cover debugging, optimisation and security: CloudWatch, X-Ray, IAM and the shared-responsibility model applied to developer choices. Weeks 8-10 add scenario drilling and two full timed practice exams at the real format. The plan is hands-on-heavy because the exam rewards experience; running the services yourself, even at a small scale, converts service knowledge into the applied judgement the items test.',
    totalHours: '80-120 hours over 8-10 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Service foundation', tasks: ['Lambda, API Gateway and serverless patterns', 'S3 and DynamoDB with SDK patterns', 'Build small hands-on exercises in each'], hours: 35 },
      { label: 'Weeks 4-5', focus: 'Deployment', tasks: ['CodeCommit, CodeBuild, CodeDeploy, CodePipeline', 'CloudFormation and infrastructure as code', 'CI/CD hands-on lab'], hours: 25 },
      { label: 'Weeks 6-7', focus: 'Debug, optimise, secure', tasks: ['CloudWatch and X-Ray patterns', 'IAM and security for developers', 'Error-log drill against the exam guide'], hours: 25 },
      { label: 'Weeks 8-10', focus: 'Timed simulations', tasks: ['Two full 65-question, 130-minute practice exams', 'Review every miss; re-study weak domains', 'Schedule the exam'], hours: 25 }
    ],
    variants: [
      { label: 'Working cloud developer', detail: 'Compress the service foundation; spend the extra time on CI/CD and debugging scenarios.' },
      { label: 'Coming from general development', detail: 'Add 2 weeks of AWS fundamentals before the developer-specific domains.' }
    ]
  },
  prepStrategies: {
    summary: 'The DVA-C02 rewards hands-on developer experience, so the dominant strategy is to build small real projects in the core services rather than only studying: a Lambda function behind API Gateway writing to DynamoDB, deployed through a CodePipeline with CloudFormation, covers a large share of the exam\'s content in one exercise. Second, learn the SDK and CLI patterns, because the exam tests how developers interact with services in code — permissions, retries, pagination and error handling. Third, master the deployment domain: CI/CD and infrastructure as code are a distinct block, and candidates with no pipeline experience routinely under-prepare it. Fourth, use AWS\'s official exam guide and sample questions, the closest thing to the real item style, and hold yourself to 80 percent-plus on practice because the 720 line leaves little margin. Fifth, take at least two full timed simulations; 65 questions in 130 minutes is exactly 2 minutes per item, and the scenario items are reading-heavy. Finally, practise the "fewest changes / most efficient" reasoning, because the exam frequently asks for the option that meets the requirement with the least modification.',
    items: [
      { title: 'Build real mini-projects', detail: 'A Lambda-API-DynamoDB pipeline covers a large share of the exam in one exercise.' },
      { title: 'Learn the SDK patterns', detail: 'The exam tests how developers interact with services in code — permissions, retries, errors.' },
      { title: 'Master the deployment domain', detail: 'CI/CD and CloudFormation are a distinct block; candidates without pipelines under-prepare it.' },
      { title: 'Hold to 80%+ on practice', detail: 'The 720/1000 line on 65 questions leaves little margin.' },
      { title: 'Drill the fewest-changes reasoning', detail: 'The exam rewards the option that meets the requirement with the least modification.' }
    ]
  },
  resourceComparison: {
    summary: 'DVA-C02 prep spans official AWS materials and third-party courses. AWS\'s own resources — the exam guide, sample questions, skill builder digital courses and labs — are the authoritative source and range from free to a few hundred dollars. Third-party video courses run from roughly $30/month subscriptions to several-hundred-dollar packages, and practice-exam products are essential given the scenario-heavy format. Hands-on practice is non-negotiable: AWS\'s free tier supports realistic developer experiments at low cost, and the AWS free tier budget is the highest-value line item in most study plans. A realistic total budget is $250 to $800 including the exam fee ($150) and one to three months of a course subscription. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'AWS exam guide + sample questions', values: ['Free', 'Official PDF + practice items', 'The authoritative scope; read it first'] },
      { label: 'AWS Skill Builder courses', values: ['$29-$99/month', 'Digital courses and labs', 'Official learning aligned to the exam'] },
      { label: 'Third-party video courses', values: ['$30-$300', 'Video subscriptions or packages', 'Structured walkthrough of the domains'] },
      { label: 'Practice-exam products', values: ['$30-$120', 'Online simulated exams', 'The scenario format is essential to drill'] },
      { label: 'AWS free tier', values: ['$0', 'Hands-on environment', 'Building the developer projects the exam rewards'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the DVA-C02 exam fee is $150; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common DVA-C02 mistake is studying services without building: candidates who read about Lambda and DynamoDB but never write a function miss the SDK and error-handling items that the exam concentrates on. The fix is hands-on projects from the start. The second mistake is under-preparing the deployment domain — candidates with no CI/CD or CloudFormation experience routinely lose that block; build one pipeline end to end. Third, many candidates study like architects and under-weight the developer-specific mechanics: IAM permissions in code, retries, pagination and error handling, which the Developer exam tests more than the Architect exam. Fourth, candidates skip full timed simulations and misjudge the 2-minutes-per-item pace on reading-heavy scenarios. Fifth, some candidates rely on a single third-party course without ever reading the official exam guide, losing the exact scope and weighting. Finally, ignoring the three-year validity clock is a quiet mistake; plan recertification early.',
    items: [
      { mistake: 'Studying without building', fix: 'Write real Lambda-API-DynamoDB code; the exam rewards hands-on experience.' },
      { mistake: 'Under-preparing deployment', fix: 'Build one CI/CD pipeline with CloudFormation end to end.' },
      { mistake: 'Studying like an architect', fix: 'Master the developer mechanics: SDK, IAM in code, retries, pagination, errors.' },
      { mistake: 'Skipping timed simulations', fix: '65 questions in 130 minutes; run two full simulations.' },
      { mistake: 'Ignoring the validity clock', fix: 'The certification expires in three years; plan recertification.' }
    ]
  },
  questionTypes: {
    summary: 'The DVA-C02 is a 65-question multiple-choice and multiple-response exam in 130 minutes. The items are scenario-heavy: a described application or development task — building an API, debugging a Lambda, deploying through a pipeline, securing an SDK call — followed by the correct service choice, code pattern, or the "fewest changes" option. The exam tests the developer toolkit across the exam guide domains: development with AWS services, deployment, debugging and optimisation, and security. Samples below are editor-written illustrations of the published exam guide, not live exam items; they show the hands-on, code-flavoured style of the real items.',
    types: [
      { name: 'Development scenario items', share: 'Majority', detail: 'Building and integrating applications with AWS services.' },
      { name: 'Deployment and CI/CD items', share: 'Meaningful share', detail: 'Pipelines, infrastructure as code and deployment strategy.' },
      { name: 'Debugging and security items', share: 'Meaningful share', detail: 'CloudWatch, X-Ray, IAM and error-handling patterns.' }
    ],
    samples: [
      {
        prompt: 'A developer must expose a REST API backed by AWS Lambda with per-user access control. The most appropriate combination is:',
        options: ['A. API Gateway with Lambda authorizers and IAM policies', 'B. A public API Gateway with no authentication', 'C. An EC2 instance running a web server', 'D. S3 static website hosting'],
        answer: 'A',
        explanation: 'API Gateway fronting Lambda with authorizers and IAM delivers a serverless REST API with per-user access control. A public gateway, an EC2 web server, or S3 static hosting each miss the serverless-plus-authorization combination the requirement specifies.'
      },
      {
        prompt: 'A Lambda function intermittently fails when calling a downstream API that returns throttling errors. The most appropriate fix is:',
        options: ['A. Implement exponential backoff with retries for throttled calls', 'B. Increase the Lambda memory', 'C. Deploy the function to another region', 'D. Change the timeout to one second'],
        answer: 'A',
        explanation: 'Throttling errors are transient; exponential backoff with retries is the standard client pattern for handling them gracefully. Increasing memory, changing regions or shrinking the timeout do not address throttled downstream calls.'
      },
      {
        prompt: 'A developer must deploy application changes automatically when code is merged to the main branch. The most appropriate service is:',
        options: ['A. AWS CodePipeline triggered by the repository', 'B. A manual CloudFormation deploy', 'C. Copying code to an EC2 instance by hand', 'D. S3 event notifications to Lambda'],
        answer: 'A',
        explanation: 'CodePipeline can be triggered by repository events, orchestrating build and deploy automatically on merge — the standard CI/CD pattern. Manual deploys, hand-copying code or event-driven copying each lack the automated pipeline the requirement specifies.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam guide, not live exam items.'
  },
  examDay: {
    summary: 'The DVA-C02 is a 65-question, 130-minute computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the $150 fee. Pace at exactly 2 minutes per item, flag uncertain items for review, and budget extra time for the reading-heavy scenario items. You receive your score immediately on screen, with the official result and score report following; AWS does not reveal a pass rate, only your 100-1000 scaled score against the 720 line. If you fail, you may retake after a 14-day waiting period. On a pass, the certification is valid for three years; recertify by passing the current exam again or the recertification path. The afterwards matters: record the expiration date and plan recertification early.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '65 questions in 130 minutes; pace 2 minutes per item, flag and review.' },
      { time: 'After submit', detail: 'Scaled score appears on screen against the 720/1000 passing line.' },
      { time: 'Next', detail: 'Record the three-year validity date and plan recertification.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '130 minutes for 65 questions; the clock does not pause',
      'A 14-day wait applies before retaking after a fail'
    ],
    afterwards: 'On a pass, your certification is valid for three years; recertify by passing the current exam or the recertification path. On a fail, wait 14 days and retake after additional domain study.'
  }
};

export default data;
