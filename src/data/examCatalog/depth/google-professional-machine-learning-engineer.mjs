const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud & machine-learning certifications desk',
    bio: 'We cover Google Cloud certifications. Format and fee facts come from Google Cloud official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the Google Professional ML Engineer exam structure, scoring and fees against Google Cloud official pages; verified BLS data-science wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Google ML Engineer certifies applied ML on Google Cloud: data scientists earned a $112,590 median in May 2024 (BLS)',
    summary: 'The Google Cloud Professional Machine Learning Engineer certification certifies the skills to design, build and productionize machine learning models on Google Cloud - including Vertex AI, BigQuery ML, model deployment and MLOps. It is a professional certification rather than a job license, so no single BLS SOC code attaches to it; the salary story belongs to the data and ML occupations it serves. BLS reported that data scientists (SOC 15-2051) earned a median of $112,590 in May 2024, projected to grow 22 percent from 2024 to 2034, and software developers (15-1252) about $127,260 (OEWS); ML engineering roles that use Google Cloud sit in these ranges, and the certification is common in job postings for ML engineer and applied-data roles at Google Cloud shops. The structural point is that the Google ML Engineer certification is the professional-level ML credential on Google Cloud (sitting above the Associate Cloud Engineer and the Data Practitioner entry tiers), and it is a scenario-application exam that tests real production skills - framing ML problems, architecting data pipelines, training and tuning models on Vertex AI, deploying to endpoints, and monitoring for drift and bias. BLS classifies workers by occupation, not certifications, so no certificate maps to a specific wage; the value is the platform-specific skill signal in a market where ML demand is strong. The exam is about 2 hours with 50-60 questions (verify the current format), passes at a threshold Google sets per exam (the Professional exams use a scaled passing score; verify the current details), and costs about $200.',
    rows: [
      { label: 'Data scientists median, May 2024', value: '$112,590', note: 'BLS OEWS, SOC 15-2051' },
      { label: 'Software developers median, May 2024', value: '~$127,260', note: 'BLS OEWS, SOC 15-1252' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'Google ML Engineer exam', value: '~2 hours / 50-60 Q (verify)', note: 'Google Cloud, professional level' }
    ],
    growth: 'Data-scientist employment is projected to grow 22 percent from 2024 to 2034; ML demand remains strong across the cloud market.',
    source: { label: 'BLS Occupational Outlook Handbook - Data Scientists', url: 'https://www.bls.gov/ooh/math/data-scientists.htm' }
  },
  passRate: {
    headline: 'Google Professional exams pass at a scaled threshold Google sets per exam; Google publishes no pass rates',
    summary: 'Google does not publish pass rates for its Professional certifications, and it does not publish a universal numeric passing score; the Professional ML Engineer exam passes at a scaled threshold Google sets for the exam (Google reports results as pass/fail, and candidates should verify the current scoring details on the exam page). The exam is a computer-based test of about 2 hours with 50-60 questions (verify the current question count and time on the Google Cloud certification page), delivered by Kryterion online or at test centers, and it is scenario-application in style - items present real ML situations and ask which Google Cloud service, architecture or MLOps approach applies. The exam covers the published sections: framing ML problems and choosing the right approach, architecting data and ML solutions (data pipelines, Vertex AI, BigQuery ML), developing ML models (training, tuning, evaluation), automating and orchestrating ML pipelines (Vertex AI Pipelines, CI/CD for ML), and productionizing ML (deployment, monitoring, drift and bias). Google recommends substantial experience - the exam guide states the target audience has 3+ years of industry experience including 1+ year building and productionizing ML on Google Cloud, and the recommended preparation includes the Google Cloud skills assessments and the official training courses. Results are available shortly after the exam, and the certification is valid two years, with renewal via the Google Cloud recertification process. The honest summary is that the exam is a professional-level scenario test with no published pass rate, substantial experience is expected, and the official exam guide is the authoritative blueprint.',
    source: { label: 'Google Cloud Professional ML Engineer certification', url: 'https://cloud.google.com/learn/certification/machine-learning-engineer' },
    caveat: 'Google publishes no pass rates; the exam passes at a scaled threshold Google sets, with ~50-60 questions in ~2 hours (verify current details).'
  },
  studyPlan: {
    summary: 'A realistic Google ML Engineer plan runs 150-250 hours over 2-4 months for candidates with ML experience and some Google Cloud exposure; the exam guide targets practitioners with 3+ years of industry experience including a year of production ML. Week 1: review the published exam guide and take the free Google Cloud skills assessment for ML to calibrate; candidates without Google Cloud fundamentals should first complete the free Cloud Digital Leader or Associate Cloud Engineer-level training to establish the platform vocabulary. Weeks 2-5: frame and architect - ML problem framing, the Vertex AI services (Vertex AI Workbench, Datasets, Training, Tuning, Model Registry, Endpoints, Pipelines), BigQuery ML, and the data-engineering services that feed ML (Dataflow, Pub/Sub, BigQuery); hands-on labs in a personal Google Cloud account are essential. Weeks 6-9: develop and productionize - training and tuning on Vertex AI, evaluation and explainability, deployment and inference, monitoring for drift and bias, and MLOps with Vertex AI Pipelines and CI/CD; these are the sections most candidates under-prepare. Weeks 10-12: full practice exams (the official practice questions and third-party question banks), targeted review, and the real exam. The dominant resources are the Google Cloud official training courses, the free exam guide and sample questions, hands-on labs (the free trial credit covers much), and the official practice exam; the exam fee is about $200.',
    totalHours: '150-250 hours over 2-4 months',
    weeks: [
      { label: 'Week 1', focus: 'Exam guide and calibration', tasks: ['Review the exam guide', 'Skills assessment; platform refresh'], hours: 10 },
      { label: 'Weeks 2-5', focus: 'Framing and architecture', tasks: ['Vertex AI services and BigQuery ML', 'Data pipelines; hands-on labs'], hours: 80 },
      { label: 'Weeks 6-9', focus: 'Development and production', tasks: ['Training, tuning, deployment', 'MLOps, monitoring, drift and bias'], hours: 100 },
      { label: 'Weeks 10-12', focus: 'Practice exams', tasks: ['Official practice questions', 'Targeted review; real exam'], hours: 40 }
    ],
    variants: [
      { label: 'Experience track', detail: 'The exam guide targets 3+ years of industry experience including 1+ year of production ML on Google Cloud; less experienced candidates need more prep.' },
      { label: 'Renewal', detail: 'The certification is valid 2 years; renewal follows the Google Cloud recertification process.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective Google ML Engineer strategies combine hands-on Vertex AI practice with the scenario-question style. Strategy one: practice in a personal Google Cloud account - the exam is scenario-based and rewards knowing where services live (Vertex AI Workbench, Training, Tuning, Model Registry, Endpoints, Pipelines), and hands-on labs embed that knowledge; the free trial credit covers much of the practice. Strategy two: use the published exam guide as the map - the sections define the scope, and the guide\u2019s recommended experience level sets the honest expectation that this is not an entry exam. Strategy three: master the ML lifecycle on Google Cloud - framing, data preparation, training and tuning, evaluation, deployment, monitoring - because the exam follows the lifecycle and the scenario items test the right stage and service for each situation. Strategy four: learn the service-selection logic - when to use Vertex AI vs BigQuery ML vs a custom pipeline, and when to use AutoML vs custom training - because service-selection items are the largest cluster. Strategy five: study the production concerns - monitoring for drift and bias, model retraining, and MLOps with Vertex AI Pipelines - because these differentiate the Professional-level exam. Strategy six: take the official practice exam and a reputable question bank in the final weeks, because the scenario style and the timing reward rehearsal.',
    items: [
      { title: 'Practice in a real account', detail: 'Hands-on Vertex AI labs embed the service knowledge.' },
      { title: 'Use the exam guide map', detail: 'The sections define the scope and the experience bar.' },
      { title: 'Master the ML lifecycle', detail: 'Framing to monitoring - the exam follows it.' },
      { title: 'Learn the service-selection logic', detail: 'When to use each Vertex AI and BigQuery ML service.' },
      { title: 'Weight production concerns', detail: 'Drift, bias, retraining and MLOps differentiate the exam.' }
    ]
  },
  resourceComparison: {
    summary: 'The Google ML Engineer resource market is anchored by Google Cloud\u2019s official content. The free exam guide, sample questions and skills assessment on the Google Cloud certification page define the scope; the official training courses (the Machine Learning Engineer learning path, partly free and partly paid on Google Cloud Skills Boost, roughly $29/month for a subscription) are the official study path. Hands-on practice requires a personal Google Cloud account (the free trial credit covers much of the basics). The official practice exam and third-party question banks ($100-$400) provide exam-condition repetition; the honest caveat is that only Google materials and hands-on practice match the scenario style. The exam fee is about $200. The honest ranking: the free exam guide and sample questions, the official training path, a personal account for hands-on labs, the official practice exam, and a question bank for volume. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Google Cloud exam guide and samples', values: ['Free', 'Online', 'The official blueprint'] },
      { label: 'Official ML Engineer training path', values: ['Free-paid (~$29/mo sub)', 'Online', 'The official study path'] },
      { label: 'Personal Google Cloud account', values: ['Free trial credit', 'Cloud console', 'Hands-on Vertex AI practice'] },
      { label: 'Official practice exam / question bank', values: ['$100-$400', 'Online', 'Exam-condition repetition'] }
    ],
    footnote: 'Prices dated 2025-26; the exam fee is ~$200. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common Google ML Engineer mistakes come from under-experience and service confusion. Mistake one: taking the exam without the recommended experience; the exam guide targets 3+ years including a year of production ML, and candidates below that level consistently underperform regardless of study hours - the honest plan is to build hands-on production experience first. Mistake two: studying services without practicing in a real account; the scenario items reward knowing where services live, and candidates who read without labs guess on the service-selection items. Mistake three: confusing the services; knowing when to use Vertex AI vs BigQuery ML, AutoML vs custom training, and the pipeline services is the largest cluster, and blurring them loses items. Mistake four: under-preparing MLOps and monitoring; drift, bias and pipeline automation differentiate the Professional-level exam, and candidates who focus only on training skip the sections that define the credential. Mistake five: using outdated content that reflects the older exam structure; Google has updated the certification, and the current exam guide should be the source. Mistake six: ignoring the two-year renewal; the certification expires and requires recertification.',
    items: [
      { mistake: 'Testing below the experience bar', fix: 'Build hands-on production ML experience first.' },
      { mistake: 'Reading without labs', fix: 'Practice in a personal Google Cloud account.' },
      { mistake: 'Confusing the services', fix: 'Learn the service-selection logic for each situation.' },
      { mistake: 'Under-preparing MLOps', fix: 'Drift, bias and pipelines define the Professional level.' },
      { mistake: 'Using outdated content', fix: 'Use the current exam guide as the source.' }
    ]
  },
  questionTypes: {
    summary: 'The Google Professional ML Engineer exam is a computer-based test of about 2 hours with 50-60 questions (verify the current format), scenario-application in style, delivered by Kryterion online or at test centers; Google sets the passing threshold per exam and publishes results as pass/fail. The content follows the ML lifecycle: framing ML problems, architecting data and ML solutions (Vertex AI, BigQuery ML, data pipelines), developing models (training, tuning, evaluation), automating pipelines (Vertex AI Pipelines, CI/CD), and productionizing (deployment, monitoring, drift and bias). The certification is valid two years. Samples below are editor-written illustrations of the published exam guide, not live exam items.',
    types: [
      { name: 'Framing and architecture', share: '~25% of items', detail: 'Problem framing and solution architecture.' },
      { name: 'Data and pipelines', share: '~20% of items', detail: 'Data preparation and feeding ML.' },
      { name: 'Model development', share: '~25% of items', detail: 'Training, tuning, evaluation on Vertex AI.' },
      { name: 'MLOps and production', share: '~30% of items', detail: 'Pipelines, deployment, monitoring, drift and bias.' }
    ],
    samples: [
      {
        prompt: 'A team needs to train a custom deep-learning model with a framework of their choice and scale training across GPUs on Google Cloud. Which service is most appropriate?',
        options: ['A. Vertex AI custom training with a custom container', 'B. BigQuery ML', 'C. AutoML tables', 'D. Looker'],
        answer: 'A',
        explanation: 'Vertex AI custom training with custom containers supports framework choice and GPU scaling; BigQuery ML is SQL-based, AutoML automates model building, and Looker is a BI tool.'
      },
      {
        prompt: 'A production model\u2019s predictions are degrading because the input data distribution has shifted since training. Which capability directly detects this?',
        options: ['A. Vertex AI Model Monitoring', 'B. Vertex AI Pipelines', 'C. BigQuery ML', 'D. Dataflow templates'],
        answer: 'A',
        explanation: 'Vertex AI Model Monitoring detects training-serving skew and drift in production input data, flagging the shift; the other services automate pipelines, run SQL ML, or process data.'
      },
      {
        prompt: 'A team needs to run SQL-based ML training directly on data in BigQuery without exporting it. Which service is most appropriate?',
        options: ['A. BigQuery ML', 'B. Vertex AI Workbench', 'C. Vertex AI Endpoints', 'D. Dataflow'],
        answer: 'A',
        explanation: 'BigQuery ML trains models with SQL directly on BigQuery data; Workbench is a notebook environment, Endpoints serve inference, and Dataflow is a data-processing pipeline service.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam guide, not live exam items.'
  },
  examDay: {
    summary: 'The Google Professional ML Engineer exam is delivered by Kryterion at test centers and online with a proctor. At a test center, arrive 30 minutes early with a valid ID; personal electronics are not permitted. The exam runs about 2 hours, and the passing threshold is set by Google per exam; results are available shortly after as pass/fail. For online delivery, complete the Kryterion system check ahead of time, use a quiet private room, and follow the proctor\u2019s rules. After passing, the certification is added to the Google Cloud certification profile with a badge and is valid two years; renewal follows the Google Cloud recertification process. Afterwards, add the badge to LinkedIn and your resume, note the expiry for renewal planning, and consider the adjacent Google Cloud certifications (such as the Professional Data Engineer or Cloud Architect) for the career path.',
    bring: ['Valid photo ID', 'Appointment confirmation', 'Online: verified system and quiet room', 'Google Cloud certification account sign-in'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials', 'Second monitors or devices for online delivery'],
    timeline: [
      { time: '30 min before', detail: 'Arrive and check in (test center) or launch the proctor session (online).' },
      { time: 'Exam', detail: '~2 hours; 50-60 questions; pass/fail per Google\u2019s threshold.' },
      { time: 'After the exam', detail: 'Result available shortly; badge added to the profile.' },
      { time: 'Within 2 years', detail: 'Renew via the Google Cloud recertification process.' }
    ],
    rules: [
      'Valid ID is mandatory; personal electronics are prohibited.',
      'The passing threshold is set by Google per exam.',
      'The certification is valid 2 years with recertification.',
      'Verify current exam details on the Google Cloud certification page.'
    ],
    afterwards: 'Add the badge to LinkedIn and your resume, note the 2-year expiry for renewal planning, and consider the adjacent Google Cloud certifications for the career path.'
  }
};

export default data;
