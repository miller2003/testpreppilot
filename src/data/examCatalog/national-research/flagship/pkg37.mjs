// Flagship rewrite - Google Cloud certifications (pkg37, 7 pages + body program).
// Every number was read on 2026-10-20 from Google Cloud primary sources:
//   Per-exam certification pages on cloud.google.com/learn/certification (length, questions, fee, languages, recommended experience, renewal options)
//   Official exam guide PDFs on services.google.com (section names and approximate percentages)
//   Google Cloud Exam Terms and Conditions (cloud.google.com/certification/terms, last modified Nov 27, 2025): validity, renewal windows, retake policy
//   Cloud Certification Help (support.google.com/cloud-certification): retake policy, program policies, renewal rules, testing requirements, Pearson transition notice, FAQs
// Fields Google does not publish (numeric passing score, pass rates, late-reschedule fee amount, renewal exam price
// for Associate Data Practitioner, Professional Cloud Developer and Professional Machine Learning Engineer) are omitted, not estimated.

const BODY = 'Google Cloud';
const CERT_HOME = 'https://cloud.google.com/learn/certification';
const TERMS = 'https://cloud.google.com/certification/terms';
const RETAKE_PAGE = 'https://support.google.com/cloud-certification/answer/9749448';
const RENEWAL_PAGE = 'https://support.google.com/cloud-certification/answer/9907853';

export const programs = [
  {
    id: 'google-cloud',
    body: BODY,
    bodyUrl: 'https://cloud.google.com/learn/certification',
    about: 'Google Cloud runs a role-based certification program with three levels: Foundational (Cloud Digital Leader), Associate (Associate Cloud Engineer, Associate Data Practitioner) and Professional (Cloud Architect, Cloud Developer, Data Engineer, Machine Learning Engineer and others). Every exam has no formal prerequisite and is open to anyone aged 18 or older, but Google lists recommended experience for each: 6+ months of hands-on work for Associate exams and 3+ years of industry experience, including 1+ years on Google Cloud, for Professional exams. Results are reported as pass or fail only, and employers read the credential as proof of role-level skill on Google Cloud rather than a score.',
    registrationSteps: [
      {
        title: 'Create or sign in to your CM Connect account',
        description: 'Google Cloud exams are booked through CM Connect at cp.certmetrics.com/google. Your legal first and last name in CM Connect must match your government-issued photo ID exactly, and the legal name field requires Romanized characters so the exam can be scheduled with Pearson. A mismatch on exam day means you cannot test and the fee can be forfeited.',
        subSteps: ['Open cp.certmetrics.com/google/en/login and sign in or register', 'Enter your legal name exactly as it appears on your ID', 'Confirm you are at least 18 years old, the minimum age for any Google Cloud certification exam'],
        duration: '10 minutes',
        note: 'Use the same email on Google Skills and CM Connect if you plan to renew through learning activities.'
      },
      {
        title: 'Choose the exam and read its official exam guide',
        description: 'Each exam page on cloud.google.com/learn/certification lists the length, number of questions, fee, languages and recommended experience, and links the exam guide PDF with section percentages. Read the guide first, because it is the only official statement of scope and it is revised when products are renamed.',
        subSteps: ['Open the exam page and download the exam guide', 'Check the exam languages (English and Japanese for most exams)', 'Try the official sample questions before booking'],
        duration: '1 hour',
        note: 'Several exam pages note an upcoming update for product renaming, so confirm the exam guide date before you rely on older study notes.'
      },
      {
        title: 'Select Schedule / Launch an Exam and pick a delivery mode',
        description: 'Inside CM Connect choose Schedule / Launch an Exam. You are signed in to Pearson VUE automatically, with no separate Pearson account. Google moved from Kryterion to Pearson in 2026, and the first Pearson test date was March 2, 2026. You can test at a Pearson test center or online with Pearson OnVUE.',
        subSteps: ['Select a test center or online proctoring', 'Pay the exam fee with a major credit or debit card, voucher or coupon code', 'Request an accommodation through CM Connect before you book if you need one'],
        duration: '15 minutes',
        note: 'Vouchers are sold in the Pearson store at googlecloudexamstore.pearsonvue.com.'
      },
      {
        title: 'Prepare your ID and, for online exams, your room',
        description: 'Bring two forms of identification, at least one of them a government-issued photo ID. At a test center, arrive at least 15 minutes before your appointment. For OnVUE, run the system test and install the OnVUE application at least 24 hours ahead, expect a room scan and a clear workspace, and stay in view of the camera for the whole session.',
        subSteps: ['Run the OnVUE system test 24 hours before the exam', 'Clear the desk and room for the scan', 'Do not use a managed work laptop, because corporate security software and VPNs can interfere'],
        duration: '30 minutes',
        note: 'Remote exams can be suspended or invalidated for poor audio or video, another person in the room or an invalid keystroke such as Print Screen, with no refund.'
      },
      {
        title: 'Take the exam and read the provisional result',
        description: 'You see a provisional pass or fail on the screen immediately after you submit. Google asks you to allow 7-10 days to confirm the result, after which you receive a digital certificate and badge. A failed candidate can see a section-level breakdown under Exam History in the candidate portal.',
        subSteps: ['Flag long scenario questions and return to them', 'Submit and record the provisional result', 'Watch your email for the confirmed result and Credly badge'],
        duration: '1.5 to 2 hours of testing',
        note: 'Reschedule or cancel at least 24 hours before the appointment; later changes or a no-show forfeit the fee.'
      }
    ],
    proctoring: 'Exams are delivered by Pearson VUE at test centers worldwide or online through Pearson OnVUE, which replaced Kryterion in 2026. Two IDs are required, one a government-issued photo ID with a name matching CM Connect. Online exams require a room scan, a clear workspace and continuous camera view with no breaks.',
    retakePolicy: 'Associate and Professional exams allow a maximum of four attempts in a two-year period. After a first failure you can retake after 14 days, after a second failure you must wait 60 days, and after a third failure you must wait 365 days. The Foundational Cloud Digital Leader exam allows ten attempts in one year with at least 14 days between failed attempts. Every attempt counts regardless of language or delivery method, and the full fee is charged each time.',
    recertification: 'Foundational and Associate certifications are valid for three years and Professional certifications for two years from the date of issue, per the Google Cloud Exam Terms and Conditions, unless an exam description says otherwise. The renewal window opens 180 days before expiry for Foundational and Associate and 60 days before expiry for Professional, with a 30-day grace period after expiry. Shorter renewal exams cost $60 to $100 where published, and Google Skills learning activities add one year for Cloud Digital Leader, Associate Cloud Engineer, Professional Cloud Architect and Professional Data Engineer.',
    scoreReporting: 'Google reports pass or fail only and does not publish a numeric score or passing percentage. A provisional result shows on screen right after submission, Google asks you to allow 7-10 days to confirm it, and a passing candidate receives a digital certificate and badge. A failed candidate can see a section-level breakdown in the candidate portal.',
    refundPolicy: 'Payment is required each time you register. Appointments must be rescheduled or cancelled at least 24 hours before the start time; a later change incurs a late fee and a missed exam forfeits the fee with no refund. Exams suspended for online-proctoring violations are not refunded.',
    providersNote: 'Google publishes the exam guide, sample questions and learning paths for each exam at no cost, and Google Skills offers a Pro subscription at $29 per month with a free starter tier. Third-party courses and practice tests exist, but none is official, so check the topics they cover against the current exam guide.',
    comparison: {
      title: 'Google Cloud certification ladder compared',
      columns: ['Certification', 'Recommended experience', 'Exam fee', 'Length and questions', 'Validity'],
      rows: [
        { label: 'Cloud Digital Leader (Foundational)', values: ['Experience collaborating with technical professionals', '$99', '90 minutes, 50-60 questions', '3 years'] },
        { label: 'Associate Cloud Engineer', values: ['6+ months hands-on with Google Cloud', '$125', '2 hours, 50-60 questions', '3 years'] },
        { label: 'Associate Data Practitioner', values: ['6+ months working with data on Google Cloud', '$125', '2 hours, 50-60 questions', '3 years under the Associate rule in the Exam Terms'] },
        { label: 'Professional Cloud Architect', values: ['3+ years industry, 1+ years designing on Google Cloud', '$200', '2 hours, 50-60 questions', '2 years'] },
        { label: 'Professional Cloud Developer', values: ['3+ years industry, 1+ years on Google Cloud', '$200', '2 hours, 50-60 questions', '2 years under the Professional rule in the Exam Terms'] },
        { label: 'Professional Data Engineer', values: ['3+ years industry, 1+ years on Google Cloud', '$200', '2 hours, 40-50 questions', '2 years'] },
        { label: 'Professional Machine Learning Engineer', values: ['3+ years industry, 1+ years on Google Cloud', '$200', '2 hours, 50-60 questions', '2 years under the Professional rule in the Exam Terms'] }
      ]
    },
    orgFaqs: [
      {
        q: 'Do Google Cloud certifications have prerequisites?',
        a: 'No. Google Cloud states that none of its certification exams have prerequisites, and anyone who is at least 18 years old can take them. Google does publish recommended experience for each exam: 6+ months of hands-on work for Associate exams and 3+ years of industry experience, including 1+ years designing and managing solutions on Google Cloud, for Professional exams.'
      },
      {
        q: 'How do Google Cloud exams get delivered and proctored?',
        a: 'Google Cloud exams are delivered by Pearson VUE, either at a test center or online with Pearson OnVUE, which replaced Kryterion in March 2026. You book through CM Connect with Schedule / Launch an Exam, and Pearson signs you in automatically. Bring two IDs, one a government-issued photo ID, with your legal name matching your CM Connect profile.'
      },
      {
        q: 'Do Google Cloud certifications show a score?',
        a: 'No. Google Cloud reports pass or fail only, because its exams determine whether a candidate meets a minimum passing standard. You see a provisional result on screen after submitting, and Google asks you to allow 7-10 days to confirm it. A failed candidate can view a section-level breakdown under Exam History in the candidate portal.'
      }
    ],
    sourceUrl: RETAKE_PAGE,
    confidence: 'high'
  }
];

// ---------------------------------------------------------------------------
// Shared FAQ builders: the facts are identical for every exam at the same level,
// but each answer names the exam's own fee, level and renewal route.
// ---------------------------------------------------------------------------

function retakeFaq(short, fee, foundational) {
  if (foundational) {
    return {
      q: 'How many times can I retake the ' + short + ' exam?',
      a: 'Google Cloud classes the ' + short + ' exam as a Foundational certification, so you may attempt it up to ten times in a one-year period, waiting at least 14 days between failed attempts. Payment is required each time you register, so a retake costs another ' + fee + ' plus tax where it applies, and every attempt counts whatever language you test in.'
    };
  }
  return {
    q: 'How many times can I retake the ' + short + ' exam?',
    a: 'You can attempt the ' + short + ' exam up to four times in a two-year period. After a first failure you wait 14 days, after a second failure you wait 60 days, and after a third failure you wait 365 days. Each attempt needs a new registration at the full ' + fee + ' fee, and attempts in different exam languages all count toward the limit.'
  };
}

function resultsFaq(short) {
  return {
    q: 'How long does it take to get ' + short + ' exam results?',
    a: 'You see a provisional pass or fail on the screen as soon as you submit the ' + short + ' exam. Google asks you to allow 7-10 days to confirm the result, and then issues the digital certificate and badge. Google reports pass or fail only, with no numeric score, and a failed candidate can open a section-level breakdown under Exam History in the candidate portal.'
  };
}

function registerFaq(short, extra) {
  return {
    q: 'How do I register for the ' + short + ' exam?',
    a: 'Sign in to CM Connect at cp.certmetrics.com/google, choose Schedule / Launch an Exam and pick a Pearson test center or online proctoring with OnVUE. ' + extra + ' Appointments must be rescheduled or cancelled at least 24 hours ahead, or the fee is forfeited.'
  };
}

function record(o) {
  return {
    slug: o.slug,
    body: BODY,
    tagline: o.tagline,
    description: o.description,
    quickAnswer: { summary: o.summary, advantages: o.advantages },
    roadmap: o.roadmap,
    prerequisites: o.prerequisites,
    eligibility: o.eligibility,
    examMeta: {
      questions: o.questions,
      time: o.time,
      pass: o.pass,
      fee: o.fee,
      format: o.format,
      admin: 'Google Cloud (exam and certification); Pearson VUE test centers or Pearson OnVUE online proctoring (delivery); register in CM Connect'
    },
    topics: o.topics,
    examEssentials: o.essentials,
    timeline: o.timeline,
    costBreakdown: o.costBreakdown,
    difficulty: o.difficulty,
    audience: o.audience,
    time: o.totalTime,
    cost: o.cost,
    faqs: o.faqs,
    summaryPoints: o.summaryPoints,
    relatedSlugs: o.relatedSlugs,
    sourceUrl: o.sourceUrl,
    reviewed: '2026-10',
    confidence: 'high'
  };
}

const PASS_NOTE = 'Pass or fail only. Google does not publish a numeric passing score or pass rate; a provisional result shows on screen and is confirmed in 7-10 days.';

export const exams = [
  // -------------------------------------------------------------------------
  record({
    slug: 'google-associate-cloud-engineer',
    tagline: 'The hands-on Associate credential for people who deploy, secure and operate workloads on Google Cloud.',
    description: 'The Google Cloud Associate Cloud Engineer exam has 50-60 questions in 2 hours, costs $125 and certifies you for 3 years. The current exam guide splits the content into four sections: Setting up a cloud solution environment (about 20%), Planning and implementing a cloud solution (about 30%), Ensuring the successful operation of a cloud solution (about 30%) and Configuring access and security (about 20%). It targets cloud administrators, DevOps staff and junior engineers who already work in the console and the gcloud CLI, and it sits between Cloud Digital Leader and the Professional exams.',
    summary: 'The Google Cloud Associate Cloud Engineer exam has 50-60 multiple choice and multiple select questions in 2 hours for a $125 fee, delivered by Pearson VUE at a test center or online. Google reports pass or fail only, and a pass is valid for 3 years. There are no prerequisites; Google recommends 6+ months of hands-on Google Cloud experience.',
    advantages: [
      'The exam guide publishes approximate section weights (20%, 30%, 30% and 20%), so study time can follow the official split.',
      'The $125 fee is $75 less than any Professional exam, and a pass stays valid for 3 years.',
      'A 1-hour, 20-question renewal exam at $75 lets you recertify without sitting the full 2-hour exam.',
      'The scope now includes Cloud Run, GKE Autopilot, Terraform and Helm, and AI-assisted tooling such as Gemini CLI and Gemini Cloud Assist.'
    ],
    roadmap: [
      'Read the Associate Cloud Engineer exam guide and the four section outline',
      'Build hands-on practice in a Google Cloud project for 6+ months or an equivalent lab load',
      'Create your CM Connect account and book with Pearson at a test center or online',
      'Pass 50-60 questions in 2 hours for a provisional result, confirmed in 7-10 days',
      'Renew within the 180-day window before the 3-year expiry'
    ],
    prerequisites: 'None. Google recommends 6+ months of hands-on experience with Google Cloud, and candidates must be at least 18 years old.',
    eligibility: 'Anyone aged 18 or older can sit the Associate Cloud Engineer exam; no prior certification is required. Google describes the target candidate as someone who deploys and secures applications, services and infrastructure, monitors operations across multiple projects and keeps solutions meeting performance targets, with experience in public clouds or on-premises environments.',
    questions: '50-60 multiple choice and multiple select questions (Google does not state how many are unscored)',
    time: '2 hours for the standard exam; renewal exam 1 hour',
    pass: PASS_NOTE,
    fee: '$125 plus tax where applicable per attempt; renewal exam $75; the retake fee is the same $125',
    format: 'Computer-based multiple choice and multiple select, offered in English, Japanese, Spanish and Portuguese; the renewal exam is 20 questions in English or Japanese.',
    topics: [
      { name: 'Setting up a cloud solution environment', weight: '20%', note: 'Resource hierarchy, organization policies, IAM roles, Cloud Identity, quotas, billing accounts, budgets, alerts and exports.' },
      { name: 'Planning and implementing a cloud solution', weight: '30%', note: 'Compute Engine, GKE, Cloud Run and functions; Cloud SQL, BigQuery, Firestore, Spanner and Bigtable; VPCs, firewalls and load balancers; Terraform, Helm and AI-assisted tooling.' },
      { name: 'Ensuring the successful operation of a cloud solution', weight: '30%', note: 'Managing instances, GKE node pools and autoscaling, Cloud Run traffic splitting, storage lifecycle, backups, Cloud Monitoring, Cloud Logging and Active Assist.' },
      { name: 'Configuring access and security', weight: '20%', note: 'IAM policies and custom roles, service accounts, impersonation, short-lived credentials, Workload Identity Federation and GKE workload access.' }
    ],
    essentials: [
      ['Delivery', 'Pearson VUE test center or Pearson OnVUE online proctoring; two IDs, one government-issued photo ID'],
      ['Retake rule', 'Up to 4 attempts in 2 years; wait 14 days, then 60 days, then 365 days after successive failures'],
      ['Validity', '3 years from issue; renewal window opens 180 days before expiry, with a 30-day grace period after'],
      ['Renewal options', 'Renewal exam: 1 hour, 20 questions, $75; or Google Skills learning activities, which add 1 year'],
      ['Score reporting', 'Provisional pass or fail on screen; confirmed in 7-10 days; no numeric score is published'],
      ['Languages', 'English, Japanese, Spanish and Portuguese for the standard exam'],
      ['Reschedule rule', 'Change or cancel at least 24 hours before the appointment or the fee is forfeited']
    ],
    timeline: [
      { stage: 'Hands-on study in a Google Cloud project', duration: '6-8 weeks at 80-120 hours in total (editorial plan; Google recommends 6+ months of experience)' },
      { stage: 'Booking and ID setup in CM Connect', duration: '1 day; run the OnVUE system test 24 hours before an online exam' },
      { stage: 'Exam sitting', duration: '2 hours' },
      { stage: 'Result confirmation and badge', duration: '7-10 days after the provisional result' },
      { stage: 'Earliest retake after a failure', duration: '14 days' }
    ],
    costBreakdown: {
      items: [
        { item: 'Standard exam fee (one attempt)', fee: '$125 plus tax where applicable' },
        { item: 'Retake after a failed attempt', fee: '$125 each time you register' },
        { item: 'Renewal exam (1 hour, 20 questions)', fee: '$75' },
        { item: 'Google Skills Pro subscription (optional labs)', fee: '$29 per month' },
        { item: 'Exam guide and sample questions', fee: 'Free' }
      ],
      total: '$125 for one attempt, $250 with one retake, plus optional lab subscription',
      footnote: 'Certified holders receive a 50% renewal discount code in their CM Connect profile. A late reschedule fee applies inside 24 hours; Google does not state the amount.'
    },
    difficulty: 'Moderate',
    audience: 'Cloud administrators, DevOps and operations staff and junior engineers who deploy and run workloads on Google Cloud.',
    totalTime: '6-8 weeks of study, then a 2-hour exam',
    cost: '$125 per attempt',
    faqs: [
      { q: 'How many questions are on the Google Associate Cloud Engineer exam?', a: 'The Associate Cloud Engineer exam has 50-60 multiple choice and multiple select questions to answer in 2 hours. Google does not say how many are unscored. The guide weights the content about 20% environment setup, 30% planning and implementing, 30% operations and 20% access and security, so planning and operations questions together make up about 60% of the exam.' },
      { q: 'Is the Google Associate Cloud Engineer exam hard?', a: 'Moderately hard for people without console practice. Google recommends 6+ months of hands-on experience and the questions describe tasks such as sizing a GKE node pool, setting a Cloud Storage lifecycle rule or choosing a firewall rule. Google publishes no pass rate, so difficulty reports are anecdotal. Practice in a real project and the exam guide bullets are the best preparation.' },
      { q: 'What is the passing score for the Associate Cloud Engineer exam?', a: 'Google does not publish a passing score for the Associate Cloud Engineer exam. Results are pass or fail only, because the exam determines whether a candidate meets a minimum standard. Percentages such as 70% that circulate online are third-party estimates, not Google figures, so aim to be confident across all four sections rather than chasing a number.' },
      { q: 'How long is the Associate Cloud Engineer certification valid?', a: 'The Associate Cloud Engineer certification is valid for 3 years from the date of issue. You can renew in the window that opens 180 days before expiry and runs 30 days past it. Renewal options are a 1-hour, 20-question exam at $75 or Google Skills learning activities that add 1 year. After the grace period you must retake the standard exam.' },
      { q: 'How much does the Google Associate Cloud Engineer exam cost?', a: 'The Associate Cloud Engineer exam costs $125 plus tax where applicable, charged on every attempt. A retake costs the same $125. The renewal exam costs $75, and certified holders get a 50% renewal discount code in CM Connect. Study materials such as the exam guide and sample questions are free, and Google Skills Pro lab access is $29 per month.' },
      retakeFaq('Associate Cloud Engineer', '$125', false),
      registerFaq('Associate Cloud Engineer', 'The exam is offered in English, Japanese, Spanish and Portuguese, and there is no prerequisite certification.'),
      resultsFaq('Associate Cloud Engineer')
    ],
    summaryPoints: [
      'The Associate Cloud Engineer exam is 50-60 questions in 2 hours for $125, with a pass valid for 3 years.',
      'Section weights are about 20% environment setup, 30% planning and implementing, 30% operations and 20% access and security.',
      'You may attempt the exam 4 times in 2 years, waiting 14, 60 and then 365 days after successive failures.',
      'Renew with a 1-hour, 20-question exam at $75 or Google Skills learning activities, inside the 180-day window before expiry.'
    ],
    relatedSlugs: ['google-cloud-digital-leader', 'google-professional-cloud-architect', 'google-professional-cloud-developer', 'google-professional-cloud-devops-engineer'],
    sourceUrl: 'https://cloud.google.com/learn/certification/cloud-engineer'
  }),
  // -------------------------------------------------------------------------
  record({
    slug: 'google-associate-data-practitioner',
    tagline: 'The Associate credential for people who prepare, analyze and manage data with BigQuery and the Google Cloud data stack.',
    description: 'The Google Cloud Associate Data Practitioner exam has 50-60 questions in 2 hours, costs $125 and is split across four weighted data sections. Data Preparation and Ingestion carries about 30%, Data Analysis and Presentation about 27%, Data Management about 25% and Data Pipeline Orchestration about 18%. It is aimed at analysts, junior data engineers and data-adjacent staff who load data into BigQuery, query it with SQL, build Looker dashboards and run BigQuery ML models, and it leads toward the Professional Data Engineer exam.',
    summary: 'The Google Cloud Associate Data Practitioner exam has 50-60 multiple choice and multiple select questions in 2 hours for $125. It covers data ingestion, analysis with BigQuery and Looker, pipeline orchestration and data governance. There are no prerequisites; Google recommends 6+ months working with data on Google Cloud, and results are pass or fail only.',
    advantages: [
      'The exam guide publishes approximate section weights of about 30%, 27%, 18% and 25%, so a study plan can follow them.',
      'It is the only Google Cloud Associate exam centered on data work, including SQL in BigQuery, Looker dashboards and BigQuery ML.',
      'The $125 fee matches Associate Cloud Engineer and is $75 below the Professional Data Engineer exam.',
      'The guide asks about governance basics such as least-privilege IAM, Cloud Storage lifecycle rules and encryption key types, which suit analysts moving into data engineering.'
    ],
    roadmap: [
      'Read the Associate Data Practitioner exam guide and its four sections',
      'Practice SQL in BigQuery, a Looker dashboard and one pipeline in Dataflow or Cloud Composer',
      'Create a CM Connect account and book with Pearson',
      'Pass 50-60 questions in 2 hours and watch for confirmation in 7-10 days',
      'Plan the move to Professional Data Engineer'
    ],
    prerequisites: 'None. Google recommends 6+ months of experience working with data on Google Cloud, and candidates must be at least 18 years old.',
    eligibility: 'Anyone aged 18 or older can sit the Associate Data Practitioner exam. Google describes the candidate as someone who secures and manages data on Google Cloud and has used its data services for ingestion, transformation, pipeline management, analysis, machine learning and visualization, with a basic understanding of IaaS, PaaS and SaaS. The exam page notes that the exam will soon be updated for product renaming, so check the guide date before booking.',
    questions: '50-60 multiple choice and multiple select questions (Google does not state how many are unscored)',
    time: '2 hours',
    pass: PASS_NOTE,
    fee: '$125 plus tax where applicable per attempt; the retake fee is the same $125; the exam page does not list a renewal exam price',
    format: 'Computer-based multiple choice and multiple select, offered in English and Japanese.',
    topics: [
      { name: 'Data Preparation and Ingestion', weight: '30%', note: 'ETL versus ELT, data quality and cleaning, Storage Transfer Service, file formats such as Parquet and Avro, and choosing between Cloud Storage, BigQuery, Cloud SQL, Bigtable, Spanner and AlloyDB.' },
      { name: 'Data Analysis and Presentation', weight: '27%', note: 'BigQuery SQL, Jupyter notebooks in Colab Enterprise, Looker versus Looker Studio, basic LookML parameters, BigQuery ML and AutoML use cases.' },
      { name: 'Data Pipeline Orchestration', weight: '18%', note: 'Choosing Dataflow, Dataproc, Cloud Data Fusion, Cloud Composer or Dataform; scheduled queries; Dataflow job monitoring; Pub/Sub to BigQuery ingestion; Eventarc triggers.' },
      { name: 'Data Management', weight: '25%', note: 'Least-privilege IAM, Cloud Storage access control, Analytics Hub, storage classes and lifecycle rules, backup and replication, CMEK, CSEK and GMEK.' }
    ],
    essentials: [
      ['Delivery', 'Pearson VUE test center or Pearson OnVUE online proctoring; two IDs, one government-issued photo ID'],
      ['Retake rule', 'Up to 4 attempts in 2 years; wait 14 days, then 60 days, then 365 days after successive failures'],
      ['Validity', '3 years under the Associate rule in the Exam Terms; the exam page does not give a separate figure'],
      ['Renewal window', 'Opens 180 days before expiry, with a 30-day grace period afterward'],
      ['Score reporting', 'Provisional pass or fail on screen; confirmed in 7-10 days; no numeric score is published'],
      ['Languages', 'English and Japanese'],
      ['Scope note', 'Google says the exam will soon be updated for product renaming; the exam guide is the reference for current names']
    ],
    timeline: [
      { stage: 'Study plan across ingestion, SQL, orchestration and governance', duration: '6-8 weeks at 60-100 hours (editorial plan; Google recommends 6+ months of data work)' },
      { stage: 'Booking and ID setup in CM Connect', duration: '1 day' },
      { stage: 'Exam sitting', duration: '2 hours' },
      { stage: 'Result confirmation and badge', duration: '7-10 days after the provisional result' },
      { stage: 'Earliest retake after a failure', duration: '14 days' }
    ],
    costBreakdown: {
      items: [
        { item: 'Standard exam fee (one attempt)', fee: '$125 plus tax where applicable' },
        { item: 'Retake after a failed attempt', fee: '$125 each time you register' },
        { item: 'Google Skills Pro subscription (optional labs)', fee: '$29 per month' },
        { item: 'Exam guide, learning path and sample questions', fee: 'Free' }
      ],
      total: '$125 for one attempt, $250 with one retake, plus optional lab subscription',
      footnote: 'Google does not list a renewal exam price for this certification on its exam page. A late reschedule fee applies inside 24 hours.'
    },
    difficulty: 'Moderate',
    audience: 'Data analysts, junior data engineers and business intelligence staff who work with BigQuery, Looker and basic pipelines on Google Cloud.',
    totalTime: '6-8 weeks of study, then a 2-hour exam',
    cost: '$125 per attempt',
    faqs: [
      { q: 'How many questions are on the Google Associate Data Practitioner exam?', a: 'The Associate Data Practitioner exam has 50-60 multiple choice and multiple select questions in 2 hours. Google does not state how many are unscored. By the exam guide, about 30% of the content is data preparation and ingestion, 27% analysis and presentation, 25% data management and 18% pipeline orchestration, so ingestion and analysis together account for more than half.' },
      { q: 'Is the Google Associate Data Practitioner exam hard?', a: 'It is a beginner-to-intermediate exam, harder if you have never written SQL or chosen between data services. Google recommends 6+ months of data work on Google Cloud and publishes no pass rate, so any difficulty claim is anecdotal. The questions test which service fits a scenario, so practice with BigQuery, Looker and a Dataflow or Composer pipeline.' },
      { q: 'What is the passing score for the Associate Data Practitioner exam?', a: 'Google does not publish a passing score for the Associate Data Practitioner exam. Results are pass or fail only. Third-party sites quote about 70%, but that is an unofficial estimate. Because the four sections carry about 30%, 27%, 18% and 25%, a weak section can cost you, so cover all four rather than relying on one strong area.' },
      { q: 'How long is the Associate Data Practitioner certification valid?', a: 'The Google Exam Terms and Conditions give Associate certifications a validity of 3 years from issue, unless an exam description says otherwise, and the exam page states no different figure. The renewal window opens 180 days before expiry with a 30-day grace period afterward. Google does not list a renewal exam price for this exam.' },
      { q: 'Do I need to know Python or coding for the Associate Data Practitioner exam?', a: 'The exam guide centers on SQL rather than general programming. Candidates should define and run SQL queries in BigQuery, create and evaluate models with BigQuery ML using SQL, and manipulate simple LookML parameters. Jupyter notebooks in Colab Enterprise are in scope, so basic Python reading helps, but the guide does not require writing application code.' },
      { q: 'Should I take the Associate Data Practitioner or the Professional Data Engineer exam first?', a: 'Take the Associate Data Practitioner first if you are new to Google Cloud data tools. It costs $125 against $200 for the Professional Data Engineer, which expects 3+ years of industry experience including 1+ years on Google Cloud. The associate exam covers analysis and governance basics, while the Professional exam tests designing and operating complete data platforms.' },
      retakeFaq('Associate Data Practitioner', '$125', false),
      resultsFaq('Associate Data Practitioner')
    ],
    summaryPoints: [
      'The Associate Data Practitioner exam is 50-60 questions in 2 hours for $125, in English and Japanese.',
      'Section weights are about 30% ingestion, 27% analysis and presentation, 25% data management and 18% pipeline orchestration.',
      'Associate certifications are valid for 3 years under the Exam Terms; the renewal window opens 180 days before expiry.',
      'Up to 4 attempts in 2 years, with waits of 14, 60 and 365 days after successive failures.'
    ],
    relatedSlugs: ['google-professional-data-engineer', 'google-cloud-digital-leader', 'google-associate-cloud-engineer', 'google-professional-machine-learning-engineer'],
    sourceUrl: 'https://cloud.google.com/learn/certification/data-practitioner'
  }),
  // -------------------------------------------------------------------------
  record({
    slug: 'google-cloud-digital-leader',
    tagline: 'The non-technical Foundational credential that explains what Google Cloud does for a business.',
    description: 'The Google Cloud Digital Leader exam has 50-60 questions in 90 minutes, costs $99 and needs no technical prerequisites. The exam guide launched on August 12, 2026 and weights five sections at about 18% each (digital transformation, data transformation, AI, infrastructure and application modernization, and trust and security) plus about 10% for operations. It is a Foundational credential for managers, sales, finance and project staff who talk to engineers, and it is the entry rung below Associate Cloud Engineer.',
    summary: 'The Google Cloud Digital Leader exam has 50-60 multiple choice and multiple select questions in 90 minutes for $99. It tests business-level knowledge of Google Cloud products, AI, data, security and cost control, not hands-on configuration. A pass is valid for 3 years, results are pass or fail only, and no prerequisites apply.',
    advantages: [
      'At $99 and 90 minutes it is the cheapest and shortest Google Cloud exam, with no prerequisite and no hands-on lab requirement.',
      'The guide launched on August 12, 2026 adds agentic AI, Gemini Enterprise Agent Platform and AI security topics, so current study material matters.',
      'Foundational retakes allow up to 10 attempts in one year with 14 days between failures, far more generous than Associate and Professional exams.',
      'Renewal is cheap: a 45-minute, 20-question exam for $60, or Google Skills activities that add 1 year.'
    ],
    roadmap: [
      'Read the Cloud Digital Leader exam guide that launched August 12, 2026',
      'Work through the six sections on digital transformation, data, AI, infrastructure, security and operations',
      'Create a CM Connect account and book a 90-minute slot with Pearson',
      'Pass and wait 7-10 days for confirmation',
      'Renew within the 180-day window before the 3-year expiry'
    ],
    prerequisites: 'None. Google recommends experience collaborating with technical professionals, and candidates must be at least 18 years old.',
    eligibility: 'Anyone aged 18 or older can sit the Cloud Digital Leader exam. Google describes it as for anyone who wants to show knowledge of cloud computing basics and how Google Cloud products and services serve an organization\u2019s goals, so business roles, sales, product and project managers and students are all eligible. No coding or administration experience is required.',
    questions: '50-60 multiple choice and multiple select questions (Google does not state how many are unscored)',
    time: '90 minutes for the standard exam; renewal exam 45 minutes',
    pass: PASS_NOTE,
    fee: '$99 plus tax where applicable per attempt; renewal exam $60; the retake fee is the same $99',
    format: 'Computer-based multiple choice and multiple select, offered in English, Japanese, Spanish, Portuguese and French; the renewal exam is 20 questions in English or Japanese.',
    topics: [
      { name: 'Digital Transformation with Google Cloud', weight: '18%', note: 'Cloud benefits, agentic AI definitions, Google Cloud differentiators, private, hybrid and multicloud, regions and zones, and IaaS, PaaS and SaaS tradeoffs.' },
      { name: 'Exploring Data Transformation with Google Cloud', weight: '18%', note: 'Databases versus data warehouses versus data lakes, data governance, choosing between Cloud Storage, Spanner, Cloud SQL, AlloyDB, Bigtable, BigQuery and Firestore, Looker and streaming analytics.' },
      { name: 'Innovating with Google Cloud Artificial Intelligence', weight: '18%', note: 'AI, ML and generative AI concepts, data quality dimensions, responsible AI, Gemini Enterprise Agent Platform, pre-trained APIs, BigQuery ML and AI Hypercomputer.' },
      { name: 'Modernize Infrastructure and Applications with Google Cloud', weight: '18%', note: 'Migration terms such as rehost and refactor, VMs, containers and serverless, Compute Engine, GKE, Cloud Run, hybrid products and Apigee API management.' },
      { name: 'Trust and Security with Google Cloud', weight: '18%', note: 'Threats, least privilege, zero trust, encryption states, Security Command Center, Google Security Operations, Model Armor and compliance concepts.' },
      { name: 'Scaling with Google Cloud Operations', weight: '10%', note: 'CapEx versus OpEx, financial governance, resource hierarchy, budgets and quotas, Cloud Monitoring and Logging, and SLIs, SLOs and SLAs.' }
    ],
    essentials: [
      ['Delivery', 'Pearson VUE test center or Pearson OnVUE online proctoring; two IDs, one government-issued photo ID'],
      ['Retake rule', 'Foundational: up to 10 attempts in 1 year, with at least 14 days between failed attempts'],
      ['Validity', '3 years from issue; renewal window opens 180 days before expiry, with a 30-day grace period after'],
      ['Renewal options', 'Renewal exam: 45 minutes, 20 questions, $60; or Google Skills activities, which add 1 year (window opens 365 days before the inactive date)'],
      ['Score reporting', 'Provisional pass or fail on screen; confirmed in 7-10 days; no numeric score is published'],
      ['Languages', 'English, Japanese, Spanish, Portuguese and French for the standard exam'],
      ['Current version', 'The exam guide states it launched on August 12, 2026']
    ],
    timeline: [
      { stage: 'Study across the six guide sections', duration: '2-3 weeks at 15-30 hours (editorial plan)' },
      { stage: 'Booking and ID setup in CM Connect', duration: '1 day' },
      { stage: 'Exam sitting', duration: '90 minutes' },
      { stage: 'Result confirmation and badge', duration: '7-10 days after the provisional result' },
      { stage: 'Earliest retake after a failure', duration: '14 days' }
    ],
    costBreakdown: {
      items: [
        { item: 'Standard exam fee (one attempt)', fee: '$99 plus tax where applicable' },
        { item: 'Retake after a failed attempt', fee: '$99 each time you register' },
        { item: 'Renewal exam (45 minutes, 20 questions)', fee: '$60' },
        { item: 'Exam guide and Google Skills learning path content', fee: 'Free or low cost; Skills Pro is $29 per month' }
      ],
      total: '$99 for one attempt, $198 with one retake',
      footnote: 'Certified holders receive a 50% renewal discount code in their CM Connect profile. A late reschedule fee applies inside 24 hours.'
    },
    difficulty: 'Easy',
    audience: 'Business, sales, finance, product and project staff, plus students, who need to explain Google Cloud products and AI to technical teams.',
    totalTime: '2-3 weeks of study, then a 90-minute exam',
    cost: '$99 per attempt',
    faqs: [
      { q: 'How many questions are on the Google Cloud Digital Leader exam?', a: 'The Cloud Digital Leader exam has 50-60 multiple choice and multiple select questions to finish in 90 minutes. Google does not say how many are unscored. Five of the six sections carry about 18% each and the operations section about 10%, so the exam spreads questions broadly across the business case, data, AI, infrastructure, security and cost control.' },
      { q: 'Is the Google Cloud Digital Leader exam hard?', a: 'It is the easiest Google Cloud exam because it tests business reasoning rather than configuration. Google recommends only experience collaborating with technical professionals and publishes no pass rate. The challenge is the breadth: you need to match business scenarios to products across data, AI, security and operations, and the guide launched on August 12, 2026 with new AI content.' },
      { q: 'What is a passing score on the Cloud Digital Leader exam?', a: 'Google does not publish a passing score for the Cloud Digital Leader exam. It reports pass or fail only, after a provisional result on screen and 7-10 days of confirmation. Figures such as 70% or scaled scores on third-party sites are unofficial guesses, so prepare against the six section outline in the official guide.' },
      { q: 'How long is the Cloud Digital Leader certification valid?', a: 'The Cloud Digital Leader certification is valid for 3 years. The renewal window for the shorter exam opens 180 days before expiry and runs 30 days past it. The renewal exam is 45 minutes with 20 questions for $60, and Google Skills learning activities add 1 year instead. After the grace period you must retake the standard exam.' },
      { q: 'How much does the Google Cloud Digital Leader exam cost?', a: 'The Cloud Digital Leader exam costs $99 plus tax where applicable, which is $26 less than Associate exams and $101 less than Professional exams. A retake costs the same $99 each time. The renewal exam costs $60, and certified holders receive a 50% renewal discount code in CM Connect. The exam guide itself is free.' },
      { q: 'Does the Cloud Digital Leader exam cover generative AI?', a: 'Yes. Section 3, Innovating with Google Cloud Artificial Intelligence, carries about 18% of the exam. The August 12, 2026 guide covers generative and agentic AI concepts, responsible and explainable AI, data quality, Gemini Enterprise Agent Platform, pre-trained APIs, AI Hypercomputer and BigQuery ML, and it adds AI security tools such as Model Armor under the security section.' },
      retakeFaq('Cloud Digital Leader', '$99', true),
      resultsFaq('Cloud Digital Leader')
    ],
    summaryPoints: [
      'The Cloud Digital Leader exam is 50-60 questions in 90 minutes for $99, and a pass is valid for 3 years.',
      'The exam guide launched on August 12, 2026 and weights five sections at about 18% each and operations at about 10%.',
      'Foundational retakes allow up to 10 attempts in 1 year with at least 14 days between failures.',
      'Renewal is a 45-minute, 20-question exam at $60 or Google Skills activities that add 1 year.'
    ],
    relatedSlugs: ['google-associate-cloud-engineer', 'google-associate-data-practitioner', 'google-cloud-generative-ai-leader', 'aws-certified-cloud-practitioner'],
    sourceUrl: 'https://cloud.google.com/learn/certification/cloud-digital-leader'
  }),
  // -------------------------------------------------------------------------
  record({
    slug: 'google-professional-cloud-architect',
    tagline: 'The flagship Professional credential for designing, migrating and governing enterprise solutions on Google Cloud.',
    description: 'The Google Cloud Professional Cloud Architect exam has 50-60 questions in 2 hours, costs $200 and uses two case studies per sitting. Those case studies make up 20-30% of the questions, and the guide lists four that may appear: Altostrat Media, Cymbal Retail, EHR Healthcare and KnightMotives Automotive. Six sections cover solution design (about 25%), provisioning, security and compliance, process optimization, implementation and operations, all framed by the Google Cloud Well-Architected Framework. It is the senior design exam above Associate Cloud Engineer.',
    summary: 'The Google Cloud Professional Cloud Architect exam has 50-60 multiple choice and multiple select questions in 2 hours for $200, and two case studies make up 20-30% of the questions. A pass is valid for 2 years, results are pass or fail only, and Google recommends 3+ years of industry experience including 1+ years designing on Google Cloud.',
    advantages: [
      'The guide publishes six section weights (25%, 17.5%, 17.5%, 15%, 12.5%, 12.5%) and names the four possible case studies in advance.',
      'Case studies show on a split screen during the exam, so you read business context once and answer several questions against it.',
      'A 1-hour, 25-question renewal exam at $100 centered on a generative AI case study is available when it is time to renew.',
      'Google Cloud Well-Architected Framework pillars (operational excellence, security, reliability, performance, cost and sustainability) are woven through the objectives.'
    ],
    roadmap: [
      'Read the exam guide and the four published case studies',
      'Practice design trade-offs across compute, storage, networking and security',
      'Create a CM Connect account and book 2 hours with Pearson',
      'Pass and confirm the result within 7-10 days',
      'Renew inside the 60-day window before the 2-year expiry'
    ],
    prerequisites: 'None. Google recommends 3+ years of industry experience, including 1+ years designing and managing solutions on Google Cloud, and candidates must be at least 18 years old.',
    eligibility: 'Anyone aged 18 or older can book the Professional Cloud Architect exam; no Associate certification is required first. Google describes the role as proficient in enterprise cloud strategy, solution design, migration, deployment, optimization and architectural best practice, with open-source and multitier distributed application experience across legacy, multicloud or hybrid environments.',
    questions: '50-60 multiple choice and multiple select questions, with 2 case studies that make up 20-30% of questions',
    time: '2 hours for the standard exam; renewal exam 1 hour',
    pass: PASS_NOTE,
    fee: '$200 plus tax where applicable per attempt; renewal exam $100; the retake fee is the same $200',
    format: 'Computer-based multiple choice and multiple select with case study questions on a split screen, offered in English and Japanese; the renewal exam is 25 questions with 1 generative AI case study.',
    topics: [
      { name: 'Designing and planning a cloud solution architecture', weight: '25%', note: 'Business and technical requirements, high availability, network, storage and compute choices, migration plans and the Well-Architected Framework.' },
      { name: 'Managing and provisioning a cloud solution infrastructure', weight: '17.5%', note: 'Network topologies, storage and compute configuration, Gemini Enterprise Agent Platform ML workflows and prebuilt AI APIs.' },
      { name: 'Designing for security and compliance', weight: '17.5%', note: 'IAM, resource hierarchy, VPC Service Controls, Cloud KMS, supply chain security, securing AI and regulatory requirements such as health and children privacy.' },
      { name: 'Analyzing and optimizing technical and business processes', weight: '15%', note: 'SDLC and CI/CD, root cause analysis, disaster recovery, stakeholder and change management, and CapEx versus OpEx.' },
      { name: 'Managing implementation', weight: '12.5%', note: 'Advising development and operations teams, API management with Apigee, testing frameworks, SDKs, Terraform and client libraries.' },
      { name: 'Ensuring solution and operations excellence', weight: '12.5%', note: 'Operational excellence pillar, observability, deployment and release management, and reliability practices such as chaos and load testing.' }
    ],
    essentials: [
      ['Delivery', 'Pearson VUE test center or Pearson OnVUE online proctoring; two IDs, one government-issued photo ID'],
      ['Case studies', '2 per exam, 20-30% of questions; the guide lists Altostrat Media, Cymbal Retail, EHR Healthcare and KnightMotives Automotive'],
      ['Retake rule', 'Up to 4 attempts in 2 years; wait 14 days, then 60 days, then 365 days after successive failures'],
      ['Validity', '2 years from issue; renewal window opens 60 days before expiry, with a 30-day grace period after'],
      ['Renewal options', 'Renewal exam: 1 hour, 25 questions, $100, with 1 generative AI case study; or Google Skills activities, which add 1 year'],
      ['Score reporting', 'Provisional pass or fail on screen; confirmed in 7-10 days; no numeric score is published'],
      ['Languages', 'English and Japanese']
    ],
    timeline: [
      { stage: 'Study across the six sections and the case studies', duration: '10-14 weeks at 120-180 hours (editorial plan)' },
      { stage: 'Booking and ID setup in CM Connect', duration: '1 day' },
      { stage: 'Exam sitting', duration: '2 hours' },
      { stage: 'Result confirmation and badge', duration: '7-10 days after the provisional result' },
      { stage: 'Earliest retake after a failure', duration: '14 days' }
    ],
    costBreakdown: {
      items: [
        { item: 'Standard exam fee (one attempt)', fee: '$200 plus tax where applicable' },
        { item: 'Retake after a failed attempt', fee: '$200 each time you register' },
        { item: 'Renewal exam (1 hour, 25 questions)', fee: '$100' },
        { item: 'Google Skills Pro subscription (optional labs)', fee: '$29 per month' },
        { item: 'Exam guide and case studies', fee: 'Free' }
      ],
      total: '$200 for one attempt, $400 with one retake, plus optional lab subscription',
      footnote: 'Certified holders receive a 50% renewal discount code in their CM Connect profile. A late reschedule fee applies inside 24 hours.'
    },
    difficulty: 'Hard',
    audience: 'Solution architects, senior cloud engineers and consultants who design and migrate enterprise workloads on Google Cloud.',
    totalTime: '10-14 weeks of study, then a 2-hour exam',
    cost: '$200 per attempt',
    faqs: [
      { q: 'How many questions are on the Google Professional Cloud Architect exam?', a: 'The Professional Cloud Architect exam has 50-60 multiple choice and multiple select questions in 2 hours. Two case studies appear in each exam and account for 20-30% of the questions, shown on a split screen. Google does not say how many questions are unscored, so plan for roughly two minutes per question including the case study reading.' },
      { q: 'Is the Google Professional Cloud Architect exam hard?', a: 'Yes, it is among the harder Google Cloud exams, mainly because several answers can be technically valid and you must pick the best fit for stated business requirements. Google recommends 3+ years of industry experience and 1+ years on Google Cloud and publishes no pass rate, so difficulty reports are anecdotal. Practice trade-offs, not service trivia.' },
      { q: 'What is the passing score for the Professional Cloud Architect exam?', a: 'Google does not publish a passing score for the Professional Cloud Architect exam. It reports pass or fail only after a provisional on-screen result and 7-10 days of confirmation. Estimates such as 70% to 75% come from candidate reports and third-party sites, not Google, so treat them as unverified and study all six weighted sections.' },
      { q: 'Which case studies appear on the Professional Cloud Architect exam?', a: 'The exam guide lists four case studies that may appear: Altostrat Media, Cymbal Retail, EHR Healthcare and KnightMotives Automotive. Each exam uses two, and they make up 20-30% of the questions. Several describe fictitious businesses using Google Cloud generative AI. Read all four before the exam, since the case text is also available on screen.' },
      { q: 'How long is the Professional Cloud Architect certification valid?', a: 'The Professional Cloud Architect certification is valid for 2 years. The renewal window opens 60 days before expiry and runs 30 days past it. Renewal options are a 1-hour, 25-question exam at $100 that includes one generative AI case study, Google Skills learning activities that add 1 year, or the standard exam. After the grace period you must retake the standard exam.' },
      { q: 'How much does the Google Professional Cloud Architect exam cost?', a: 'The Professional Cloud Architect exam costs $200 plus tax where applicable, charged on every attempt, so a retake costs another $200. The renewal exam costs $100, and certified holders receive a 50% renewal discount code in CM Connect. The exam guide and sample questions are free, and Google Skills Pro lab access is $29 per month.' },
      retakeFaq('Professional Cloud Architect', '$200', false),
      resultsFaq('Professional Cloud Architect')
    ],
    summaryPoints: [
      'The Professional Cloud Architect exam is 50-60 questions in 2 hours for $200, with a pass valid for 2 years.',
      'Two case studies per exam make up 20-30% of the questions; four are listed in the guide.',
      'Section weights are 25%, 17.5%, 17.5%, 15%, 12.5% and 12.5% across six sections.',
      'The renewal exam is 1 hour, 25 questions at $100, available in the 60-day window before expiry.'
    ],
    relatedSlugs: ['google-associate-cloud-engineer', 'google-professional-cloud-developer', 'google-professional-cloud-security-engineer', 'google-professional-cloud-devops-engineer'],
    sourceUrl: 'https://cloud.google.com/learn/certification/cloud-architect'
  }),
  // -------------------------------------------------------------------------
  record({
    slug: 'google-professional-cloud-developer',
    tagline: 'The Professional credential for developers who build, test, deploy and integrate cloud-native applications on Google Cloud.',
    description: 'The Google Cloud Professional Cloud Developer exam has 50-60 questions in 2 hours, costs $200 and puts 32% of its weight on designing cloud-native applications. The four guide sections are Designing highly scalable, secure, and reliable cloud-native applications (about 32%), Building and testing applications (about 23%), Configuring cloud-native applications for deployment (about 24%) and Integrating applications with Google Cloud services (about 21%). It targets software engineers who ship to Cloud Run and GKE, and the guide now includes AI coding assistants.',
    summary: 'The Google Cloud Professional Cloud Developer exam has 50-60 multiple choice and multiple select questions in 2 hours for $200, available in English and Japanese. Four sections cover design, building and testing, deployment to Cloud Run and GKE, and integration. Results are pass or fail only, and Google recommends 3+ years of industry experience including 1+ years on Google Cloud.',
    advantages: [
      'The guide publishes section weights (32%, 23%, 24% and 21%) and every section is application-development focused, not infrastructure administration.',
      'It covers Cloud Run, GKE, Pub/Sub, Eventarc, Cloud Build, Artifact Registry, Secret Manager and Binary Authorization, the stack developers actually ship with.',
      'The guide includes AI-powered development tools such as AI coding assistants and AI-assisted observability, matching current developer workflows.',
      'It pairs with Professional Cloud Architect: the developer exam goes deeper on code, APIs and pipelines than the architect exam.'
    ],
    roadmap: [
      'Read the Professional Cloud Developer exam guide and its four sections',
      'Containerize a service, deploy it to Cloud Run and GKE, and wire Pub/Sub triggers',
      'Create a CM Connect account and book 2 hours with Pearson',
      'Pass and confirm the result within 7-10 days',
      'Renew inside the 60-day window before expiry'
    ],
    prerequisites: 'None. Google recommends 3+ years of industry experience, including 1+ years designing and managing solutions on Google Cloud, and candidates must be at least 18 years old.',
    eligibility: 'Anyone aged 18 or older can book the Professional Cloud Developer exam; no prior Google Cloud certification is required. Google describes the candidate as proficient across the full development lifecycle, from architecting cloud-native applications to integrating machine learning and generative AI APIs, and using AI coding assistants, context engineering and automated debugging agents.',
    questions: '50-60 multiple choice and multiple select questions (Google does not state how many are unscored)',
    time: '2 hours',
    pass: PASS_NOTE,
    fee: '$200 plus tax where applicable per attempt; the retake fee is the same $200; the exam page does not list a renewal exam price',
    format: 'Computer-based multiple choice and multiple select, offered in English and Japanese.',
    topics: [
      { name: 'Designing highly scalable, secure, and reliable cloud-native applications', weight: '32%', note: 'Choosing Compute Engine, GKE or Cloud Run; APIs with Apigee; caching; asynchronous design with Eventarc and Pub/Sub; secrets, authentication and Binary Authorization; schema and consistency choices.' },
      { name: 'Building and testing applications', weight: '23%', note: 'Local emulation, Cloud Code, Cloud Shell, Cloud Workstations, Cloud Build, Artifact Registry, build provenance and AI-assisted unit tests.' },
      { name: 'Configuring cloud-native applications for deployment', weight: '24%', note: 'Cloud Run deployments from source with triggers, GKE deployments, Kubernetes health checks and Horizontal Pod Autoscaler settings.' },
      { name: 'Integrating applications with Google Cloud services', weight: '21%', note: 'Connecting to Cloud SQL, Firestore and Cloud Storage; Cloud Client Libraries, REST and gRPC calls with exponential backoff; logs, metrics and traces; Error Reporting.' }
    ],
    essentials: [
      ['Delivery', 'Pearson VUE test center or Pearson OnVUE online proctoring; two IDs, one government-issued photo ID'],
      ['Retake rule', 'Up to 4 attempts in 2 years; wait 14 days, then 60 days, then 365 days after successive failures'],
      ['Validity', '2 years under the Professional rule in the Exam Terms; the renewal window opens 60 days before expiry, with a 30-day grace period after'],
      ['Renewal exam price', 'Not stated on the exam page; Google refers candidates to its renewal FAQs'],
      ['Score reporting', 'Provisional pass or fail on screen; confirmed in 7-10 days; no numeric score is published'],
      ['Languages', 'English and Japanese'],
      ['Scope note', 'Google says the exam was updated for recent product renaming; the guide is the reference for current product names']
    ],
    timeline: [
      { stage: 'Study and build practice services across the four sections', duration: '8-12 weeks at 90-140 hours (editorial plan)' },
      { stage: 'Booking and ID setup in CM Connect', duration: '1 day' },
      { stage: 'Exam sitting', duration: '2 hours' },
      { stage: 'Result confirmation and badge', duration: '7-10 days after the provisional result' },
      { stage: 'Earliest retake after a failure', duration: '14 days' }
    ],
    costBreakdown: {
      items: [
        { item: 'Standard exam fee (one attempt)', fee: '$200 plus tax where applicable' },
        { item: 'Retake after a failed attempt', fee: '$200 each time you register' },
        { item: 'Google Skills Pro subscription (optional labs)', fee: '$29 per month' },
        { item: 'Exam guide and sample questions', fee: 'Free' }
      ],
      total: '$200 for one attempt, $400 with one retake, plus optional lab subscription',
      footnote: 'Google does not list a renewal exam price for this certification on its exam page. A late reschedule fee applies inside 24 hours.'
    },
    difficulty: 'Challenging',
    audience: 'Software engineers and backend developers who build, containerize and deploy applications on Cloud Run and GKE.',
    totalTime: '8-12 weeks of study, then a 2-hour exam',
    cost: '$200 per attempt',
    faqs: [
      { q: 'How many questions are on the Google Professional Cloud Developer exam?', a: 'The Professional Cloud Developer exam has 50-60 multiple choice and multiple select questions in 2 hours. Google does not state how many are unscored. The largest block is designing scalable, secure and reliable cloud-native applications at about 32%, followed by deployment configuration at about 24%, building and testing at about 23% and integration at about 21%.' },
      { q: 'Is the Google Professional Cloud Developer exam hard?', a: 'It is challenging for developers who have not deployed on Cloud Run or GKE. Google recommends 3+ years of industry experience and 1+ years on Google Cloud and publishes no pass rate. The questions are scenario-based and test choices such as authentication methods, traffic splitting, retry behavior and Secret Manager use, so building a small service end to end is the best preparation.' },
      { q: 'What is the passing score for the Professional Cloud Developer exam?', a: 'Google does not publish a passing score for the Professional Cloud Developer exam. Results are pass or fail only, and the 70% figure that circulates online is a third-party estimate. A failed candidate can open a section-level breakdown under Exam History in the candidate portal, which shows where to aim the retake.' },
      { q: 'Does the Professional Cloud Developer exam require coding?', a: 'The exam is multiple choice and multiple select rather than a coding test, so you do not write code during it. You do need to read and reason about code and configuration, including API calls with batching, pagination and exponential backoff, Kubernetes health checks, and authentication using Application Default Credentials, OAuth 2.0 and service accounts.' },
      { q: 'How long is the Professional Cloud Developer certification valid?', a: 'The Google Exam Terms and Conditions give Professional certifications 2 years from issue, unless an exam description says otherwise, and the exam page states no different figure. The renewal window opens 60 days before expiry with a 30-day grace period afterward. Google does not list a renewal exam price on the exam page.' },
      { q: 'How much does the Google Professional Cloud Developer exam cost?', a: 'The Professional Cloud Developer exam costs $200 plus tax where applicable on every attempt, so a retake costs another $200. Google does not list a renewal exam price on the exam page. The exam guide and sample questions are free, and Google Skills Pro lab access is $29 per month if you want hands-on labs.' },
      retakeFaq('Professional Cloud Developer', '$200', false),
      resultsFaq('Professional Cloud Developer')
    ],
    summaryPoints: [
      'The Professional Cloud Developer exam is 50-60 questions in 2 hours for $200, in English and Japanese.',
      'Section weights are about 32% design, 23% building and testing, 24% deployment and 21% integration.',
      'Professional certifications are valid for 2 years under the Exam Terms; the renewal window opens 60 days before expiry.',
      'Up to 4 attempts in 2 years, with waits of 14, 60 and 365 days after successive failures.'
    ],
    relatedSlugs: ['google-associate-cloud-engineer', 'google-professional-cloud-architect', 'google-professional-cloud-devops-engineer', 'google-professional-cloud-security-engineer'],
    sourceUrl: 'https://cloud.google.com/learn/certification/cloud-developer'
  }),
  // -------------------------------------------------------------------------
  record({
    slug: 'google-professional-data-engineer',
    tagline: 'The Professional credential for designing, building and operating data pipelines and analytics platforms on Google Cloud.',
    description: 'The Google Cloud Professional Data Engineer exam has 40-50 questions in 2 hours, costs $200 and is valid for 2 years. Five weighted sections cover Designing data processing systems (about 22%), Ingesting and processing the data (about 25%), Storing the data (about 20%), Preparing and using data for analysis (about 15%) and Maintaining and automating data workloads (about 18%). It targets data engineers who run BigQuery, Dataflow, Pub/Sub and Dataproc workloads, and it sits above Associate Data Practitioner.',
    summary: 'The Google Cloud Professional Data Engineer exam has 40-50 multiple choice and multiple select questions in 2 hours for $200. That is fewer questions than the 50-60 on other Google professional exams. A pass is valid for 2 years, results are pass or fail only, and Google recommends 3+ years of industry experience including 1+ years on Google Cloud.',
    advantages: [
      'The guide publishes five section weights (22%, 25%, 20%, 15% and 18%) and ingestion and processing is the single largest at about 25%.',
      'The scope covers batch and streaming pipelines with Dataflow and Apache Beam, BigQuery sharing with Analytics Hub, and data for AI, embeddings and RAG.',
      'A 1-hour, 20-question renewal exam at $100 lets you recertify without sitting the full exam.',
      'The exam is one of the few Google professional exams with 40-50 questions rather than 50-60, so each question carries slightly more weight.'
    ],
    roadmap: [
      'Read the Professional Data Engineer exam guide and its five sections',
      'Build a batch and a streaming pipeline with Pub/Sub, Dataflow and BigQuery',
      'Create a CM Connect account and book 2 hours with Pearson',
      'Pass and confirm the result within 7-10 days',
      'Renew inside the 60-day window before the 2-year expiry'
    ],
    prerequisites: 'None. Google recommends 3+ years of industry experience, including 1+ years designing and managing solutions on Google Cloud, and candidates must be at least 18 years old.',
    eligibility: 'Anyone aged 18 or older can book the Professional Data Engineer exam; Associate Data Practitioner is not required first. Google describes the role as collecting, transforming, storing and delivering data, designing robust data infrastructure, evaluating solutions against business and regulatory needs and administering data platforms. Renewing candidates may use the shorter renewal exam; first-time and expired candidates must take the standard exam.',
    questions: '40-50 multiple choice and multiple select questions (Google does not state how many are unscored)',
    time: '2 hours for the standard exam; renewal exam 1 hour',
    pass: PASS_NOTE,
    fee: '$200 plus tax where applicable per attempt; renewal exam $100; the retake fee is the same $200',
    format: 'Computer-based multiple choice and multiple select, offered in English and Japanese; the renewal exam is 20 questions.',
    topics: [
      { name: 'Designing data processing systems', weight: '22%', note: 'Security, compliance and privacy, reliability and fidelity, ACID decisions, portability and data residency, and migrations with Database Migration Service and Datastream.' },
      { name: 'Ingesting and processing the data', weight: '25%', note: 'Planning pipelines, Dataflow and Apache Beam, Dataproc, Cloud Data Fusion, Pub/Sub, windowing and late-arriving data, Cloud Composer and CI/CD.' },
      { name: 'Storing the data', weight: '20%', note: 'Choosing BigQuery, BigLake, AlloyDB, Bigtable, Spanner, Cloud SQL, Cloud Storage or Firestore; data warehouse modeling; data lakes; Dataplex and federated governance.' },
      { name: 'Preparing and using data for analysis', weight: '15%', note: 'BI Engine, materialized views, query performance, data masking and Cloud DLP, BigQuery ML data prep, embeddings and RAG, and Analytics Hub sharing.' },
      { name: 'Maintaining and automating data workloads', weight: '18%', note: 'Cost minimization, persistent versus job-based Dataproc clusters, Composer DAGs, BigQuery Editions and reservations, monitoring and multi-region failure planning.' }
    ],
    essentials: [
      ['Delivery', 'Pearson VUE test center or Pearson OnVUE online proctoring; two IDs, one government-issued photo ID'],
      ['Retake rule', 'Up to 4 attempts in 2 years; wait 14 days, then 60 days, then 365 days after successive failures'],
      ['Validity', '2 years from issue; renewal window opens 60 days before expiry, with a 30-day grace period after'],
      ['Renewal options', 'Renewal exam: 1 hour, 20 questions, $100; or Google Skills activities, which add 1 year; expired candidates take the standard exam'],
      ['Score reporting', 'Provisional pass or fail on screen; confirmed in 7-10 days; no numeric score is published'],
      ['Languages', 'English and Japanese'],
      ['Scope note', 'Google says the exam will soon be updated for product renaming; the guide is the reference for current names']
    ],
    timeline: [
      { stage: 'Study and pipeline practice across the five sections', duration: '10-14 weeks at 120-180 hours (editorial plan)' },
      { stage: 'Booking and ID setup in CM Connect', duration: '1 day' },
      { stage: 'Exam sitting', duration: '2 hours' },
      { stage: 'Result confirmation and badge', duration: '7-10 days after the provisional result' },
      { stage: 'Earliest retake after a failure', duration: '14 days' }
    ],
    costBreakdown: {
      items: [
        { item: 'Standard exam fee (one attempt)', fee: '$200 plus tax where applicable' },
        { item: 'Retake after a failed attempt', fee: '$200 each time you register' },
        { item: 'Renewal exam (1 hour, 20 questions)', fee: '$100' },
        { item: 'Google Skills Pro subscription (optional labs)', fee: '$29 per month' }
      ],
      total: '$200 for one attempt, $400 with one retake, plus optional lab subscription',
      footnote: 'Certified holders receive a 50% renewal discount code in their CM Connect profile. A late reschedule fee applies inside 24 hours.'
    },
    difficulty: 'Challenging',
    audience: 'Data engineers, analytics engineers and platform engineers who build pipelines and warehouses on BigQuery, Dataflow and Pub/Sub.',
    totalTime: '10-14 weeks of study, then a 2-hour exam',
    cost: '$200 per attempt',
    faqs: [
      { q: 'How many questions are on the Google Professional Data Engineer exam?', a: 'The Professional Data Engineer exam has 40-50 multiple choice and multiple select questions in 2 hours, which is fewer than the 50-60 on the Architect, Developer and Machine Learning Engineer exams. Google does not say how many are unscored. Ingesting and processing the data is the largest section at about 25%, followed by designing systems at about 22%.' },
      { q: 'Is the Google Professional Data Engineer exam hard?', a: 'Yes, it is challenging without production data engineering practice. Google recommends 3+ years of industry experience and 1+ years on Google Cloud and publishes no pass rate. The questions ask you to pick between BigQuery, Bigtable, Spanner and Cloud SQL, or batch versus streaming designs, under cost, latency and governance constraints, so trade-off reasoning matters more than syntax.' },
      { q: 'What is the passing score for the Professional Data Engineer exam?', a: 'Google does not publish a passing score for the Professional Data Engineer exam. Results are pass or fail only, so percentage targets seen on third-party sites are unofficial estimates. A failed candidate can open a section-level breakdown under Exam History in the candidate portal and use it to target the five weighted sections on the retake.' },
      { q: 'How long is the Professional Data Engineer certification valid?', a: 'The Professional Data Engineer certification is valid for 2 years. The renewal window opens 60 days before expiry and runs 30 days past it. You can take the 1-hour, 20-question renewal exam at $100 or complete Google Skills learning activities for 1 additional year. After the grace period you must retake the standard 40-50 question exam.' },
      { q: 'How much does the Google Professional Data Engineer exam cost?', a: 'The Professional Data Engineer exam costs $200 plus tax where applicable, charged on every attempt, so a retake costs another $200. The renewal exam costs $100, and certified holders receive a 50% renewal discount code in CM Connect. The exam guide is free, and Google Skills Pro lab access is $29 per month.' },
      { q: 'Does the Professional Data Engineer exam cover AI and machine learning?', a: 'Yes, in a data-preparation role. Section 4 covers preparing data for feature engineering, training and serving models with BigQuery ML, and preparing unstructured data for embeddings and retrieval-augmented generation. The guide also mentions AI data enrichment in pipelines and LLM prompting for query generation, but model building belongs to the Professional Machine Learning Engineer exam.' },
      retakeFaq('Professional Data Engineer', '$200', false),
      resultsFaq('Professional Data Engineer')
    ],
    summaryPoints: [
      'The Professional Data Engineer exam is 40-50 questions in 2 hours for $200, with a pass valid for 2 years.',
      'Section weights are about 22%, 25%, 20%, 15% and 18% across five sections, led by ingesting and processing the data.',
      'The renewal exam is 1 hour, 20 questions at $100, available in the 60-day window before expiry.',
      'Up to 4 attempts in 2 years, with waits of 14, 60 and 365 days after successive failures.'
    ],
    relatedSlugs: ['google-associate-data-practitioner', 'google-professional-machine-learning-engineer', 'google-professional-cloud-architect', 'google-professional-cloud-database-engineer'],
    sourceUrl: 'https://cloud.google.com/learn/certification/data-engineer'
  }),
  // -------------------------------------------------------------------------
  record({
    slug: 'google-professional-machine-learning-engineer',
    tagline: 'The Professional credential for building, serving and monitoring traditional and generative AI solutions on Google Cloud.',
    description: 'The Google Cloud Professional Machine Learning Engineer exam has 50-60 questions in 2 hours, costs $200 and tests no coding directly. Six weighted sections run from Architecting low-code AI solutions (about 13%) and Scaling prototypes into ML models (about 21%) to Serving and scaling models (about 20%), Automating and orchestrating ML pipelines (about 18%) and Monitoring AI solutions (about 13%). The guide covers both traditional ML and generative AI on Gemini Enterprise Agent Platform, for ML engineers who move models into production.',
    summary: 'The Google Cloud Professional Machine Learning Engineer exam has 50-60 multiple choice and multiple select questions in 2 hours for $200. The exam does not directly assess coding, but candidates should read Python and SQL snippets. A pass is valid for 2 years under the Exam Terms, and results are pass or fail only.',
    advantages: [
      'The guide publishes six section weights (13%, 16%, 21%, 20%, 18% and 13%), with model scaling, serving and pipelines making up most of the exam.',
      'It covers both classic ML (BigQuery ML, AutoML, custom training, TPU and GPU choices) and generative AI (Model Garden, Gemini tuning, LLM evaluation).',
      'The guide states the exam does not directly assess coding skills; minimum Python and SQL proficiency is enough to interpret code snippets.',
      'Responsible AI and security topics such as Model Armor, bias monitoring, drift and training-serving skew are explicit objectives.'
    ],
    roadmap: [
      'Read the Professional Machine Learning Engineer exam guide and its six sections',
      'Train and serve a model with BigQuery ML or custom training, then build a pipeline',
      'Create a CM Connect account and book 2 hours with Pearson',
      'Pass and confirm the result within 7-10 days',
      'Renew inside the 60-day window before the 2-year expiry'
    ],
    prerequisites: 'None. Google recommends 3+ years of industry experience, including 1+ years designing and managing solutions on Google Cloud, and candidates must be at least 18 years old.',
    eligibility: 'Anyone aged 18 or older can book the Professional Machine Learning Engineer exam. Google describes the role as building, evaluating, productionizing and optimizing AI solutions using Google Cloud, handling large datasets, designing solutions on foundational models and applying responsible AI practices. The guide notes that candidates need minimum proficiency in Python and SQL to interpret code snippets.',
    questions: '50-60 multiple choice and multiple select questions (Google does not state how many are unscored)',
    time: '2 hours',
    pass: PASS_NOTE,
    fee: '$200 plus tax where applicable per attempt; the retake fee is the same $200; the exam page does not list a renewal exam price',
    format: 'Computer-based multiple choice and multiple select, offered in English and Japanese; the exam does not directly assess coding skills.',
    topics: [
      { name: 'Architecting low-code AI solutions', weight: '13%', note: 'BigQuery ML and AutoML on Gemini Enterprise Agent Platform, Model Garden, Document AI, Vision and Translate APIs, and tuning and optimizing Gemini-based applications.' },
      { name: 'Collaborating within and across teams to manage data and models', weight: '16%', note: 'Data exploration and preprocessing, Feature Store, handling PII, notebooks in Workbench and Colab Enterprise, experiment tracking and LLM-as-a-judge evaluation.' },
      { name: 'Scaling prototypes into ML models', weight: '21%', note: 'Choosing model types and products, custom training SDKs, Kubeflow on GKE, hyperparameter tuning, fine-tuning foundation models, and CPU, GPU and TPU hardware with distributed training.' },
      { name: 'Serving and scaling models', weight: '20%', note: 'Batch and online inference, prebuilt and custom containers, Model Registry, A/B and canary rollouts, public and private endpoints and scaling the serving backend.' },
      { name: 'Automating and orchestrating ML pipelines', weight: '18%', note: 'Validating data and models, Gemini Enterprise Agent Platform Pipelines, Managed Service for Apache Airflow and Ray, retraining policies and CI/CD/CT with Cloud Build.' },
      { name: 'Monitoring AI solutions', weight: '13%', note: 'Model Armor, safety filters, bias and responsible AI, explainability, Model Monitoring and training-serving skew, data drift, concept drift and feature attribution drift.' }
    ],
    essentials: [
      ['Delivery', 'Pearson VUE test center or Pearson OnVUE online proctoring; two IDs, one government-issued photo ID'],
      ['Retake rule', 'Up to 4 attempts in 2 years; wait 14 days, then 60 days, then 365 days after successive failures'],
      ['Validity', '2 years under the Professional rule in the Exam Terms; the renewal window opens 60 days before expiry, with a 30-day grace period after'],
      ['Renewal exam price', 'Not stated on the exam page; Google refers candidates to its renewal FAQs'],
      ['Score reporting', 'Provisional pass or fail on screen; confirmed in 7-10 days; no numeric score is published'],
      ['Languages', 'English and Japanese'],
      ['Coding note', 'The exam guide says the exam does not directly assess coding skills; Python and SQL proficiency is needed to interpret snippets']
    ],
    timeline: [
      { stage: 'Study and hands-on ML practice across the six sections', duration: '2-4 months at 150-250 hours (editorial plan)' },
      { stage: 'Booking and ID setup in CM Connect', duration: '1 day' },
      { stage: 'Exam sitting', duration: '2 hours' },
      { stage: 'Result confirmation and badge', duration: '7-10 days after the provisional result' },
      { stage: 'Earliest retake after a failure', duration: '14 days' }
    ],
    costBreakdown: {
      items: [
        { item: 'Standard exam fee (one attempt)', fee: '$200 plus tax where applicable' },
        { item: 'Retake after a failed attempt', fee: '$200 each time you register' },
        { item: 'Google Skills Pro subscription (optional labs)', fee: '$29 per month' },
        { item: 'Exam guide and sample questions', fee: 'Free' }
      ],
      total: '$200 for one attempt, $400 with one retake, plus optional lab subscription',
      footnote: 'Google does not list a renewal exam price for this certification on its exam page. Training compute for hands-on practice is billed separately. A late reschedule fee applies inside 24 hours.'
    },
    difficulty: 'Hard',
    audience: 'Machine learning engineers, applied data scientists and MLOps engineers who deploy and monitor models and generative AI applications on Google Cloud.',
    totalTime: '2-4 months of study, then a 2-hour exam',
    cost: '$200 per attempt',
    faqs: [
      { q: 'How many questions are on the Google Professional Machine Learning Engineer exam?', a: 'The Professional Machine Learning Engineer exam has 50-60 multiple choice and multiple select questions in 2 hours. Google does not state how many are unscored. Scaling prototypes into ML models is the largest section at about 21%, followed by serving and scaling models at about 20% and automating and orchestrating ML pipelines at about 18%.' },
      { q: 'Is the Google Professional Machine Learning Engineer exam hard?', a: 'Yes, it is one of the harder Google Cloud exams because it spans data, training, serving, pipelines and monitoring for both traditional and generative AI. Google recommends 3+ years of industry experience and 1+ years on Google Cloud and publishes no pass rate. The exam is scenario-based, so production ML experience helps more than memorizing services.' },
      { q: 'What is the passing score for the Professional Machine Learning Engineer exam?', a: 'Google does not publish a passing score for the Professional Machine Learning Engineer exam. Results are pass or fail only, and the 70% figure online is a third-party estimate. A failed candidate can view a section-level breakdown under Exam History, which is the most useful official signal for deciding which of the six sections to restudy.' },
      { q: 'Does the Professional Machine Learning Engineer exam require coding?', a: 'No. The exam guide states that the exam does not directly assess coding skills. It does expect minimum proficiency in Python and SQL so you can interpret questions that include code snippets, such as BigQuery ML statements or training configuration. You should still be able to reason about frameworks such as PyTorch, scikit-learn and JAX.' },
      { q: 'How long is the Professional Machine Learning Engineer certification valid?', a: 'The Google Exam Terms and Conditions give Professional certifications 2 years from issue, unless an exam description says otherwise, and the exam page states no different figure. The renewal window opens 60 days before expiry with a 30-day grace period afterward. Google does not list a renewal exam price on the exam page.' },
      { q: 'How much does the Google Professional Machine Learning Engineer exam cost?', a: 'The Professional Machine Learning Engineer exam costs $200 plus tax where applicable on every attempt, so a retake costs another $200. Google does not list a renewal exam price on its exam page. The exam guide and sample questions are free, and Google Skills Pro lab access is $29 per month, plus any compute you use for training practice.' },
      retakeFaq('Professional Machine Learning Engineer', '$200', false),
      resultsFaq('Professional Machine Learning Engineer')
    ],
    summaryPoints: [
      'The Professional Machine Learning Engineer exam is 50-60 questions in 2 hours for $200, in English and Japanese.',
      'Section weights are about 13%, 16%, 21%, 20%, 18% and 13% across six sections, led by scaling prototypes into ML models.',
      'The exam guide says the exam does not directly assess coding skills, but Python and SQL are needed to read snippets.',
      'Professional certifications are valid for 2 years under the Exam Terms; the renewal window opens 60 days before expiry.'
    ],
    relatedSlugs: ['google-professional-data-engineer', 'google-associate-data-practitioner', 'google-professional-cloud-architect', 'google-cloud-generative-ai-leader'],
    sourceUrl: 'https://cloud.google.com/learn/certification/machine-learning-engineer'
  })
];

export default { programs, exams };
