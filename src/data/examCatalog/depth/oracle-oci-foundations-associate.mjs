// Depth content for: oracle-oci-foundations-associate
// OCI Foundations Associate 2025 (1Z0-1085-25) is Oracle's entry-level cloud credential.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud & database certifications desk',
    bio: 'This guide is compiled by our cloud and database certifications desk. Oracle rewrites its OCI Foundations exam on a roughly annual cadence, and candidates frequently buy material for the previous exam version, so we state the current exam code and number of questions explicitly and warn when an older study guide will not match. Exam structure, passing scores, and pricing come from Oracle\u2019s education pages and the official exam PDF. Wage figures come from the Bureau of Labor Statistics occupational series closest to the developer and cloud roles this credential feeds, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam code, question count, duration, and passing score were verified against Oracle\u2019s official exam PDF and current exam-listing pages for the OCI Foundations Associate 2025 credential.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'No direct occupation \u2014 the reference is software developers at a $133,080 median (BLS, May 2024), and OCI Foundations is a very low-cost entry signal into the cloud-developer labour market',
    summary:
      'There is no Bureau of Labor Statistics occupation called "Oracle cloud professional", so the salary story is indirect and should be stated honestly. The closest official reference is Software Developers (SOC 15-1252), the occupational series that Oracle OCI job postings most commonly sit within, which had a May 2024 median of $133,080, with the lowest 10 percent earning less than $79,850 and the highest 10 percent more than $211,450. OCI Foundations Associate is an entry-level credential: it validates a working vocabulary of cloud concepts, OCI core services, security and identity basics, and pricing, and it is explicitly designed for candidates with no prior cloud experience. It does not gate any job title by itself \u2014 employers hiring cloud engineers, administrators, or architects look for hands-on OCI experience and higher-level certifications such as OCI Architect Associate or Professional \u2014 but it serves as a low-friction entry signal that can matter for new graduates, career changers, and non-technical professionals moving toward cloud roles. BLS projects 15 percent employment growth for software developers from 2024 to 2034, much faster than the average, with roughly 129,200 openings a year, which is the demand context that makes an entry credential in this space rational. The honest economic case is that the exam is one of the cheapest in the cloud market \u2014 around $95-125 at list price and frequently offered free through Oracle\u2019s MyLearn learning environment \u2014 and can be prepared for in a few weeks, so the downside is small and the upside is a verifiable first line on a resume plus a natural on-ramp to Oracle\u2019s deeper cloud certification path.',
    rows: [
      { label: 'Reference: median wage, software developers', value: '$133,080', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Reference: software developers, lowest 10 percent', value: 'less than $79,850', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Reference: software developers, highest 10 percent', value: 'more than $211,450', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'The certification itself', value: 'No direct occupation', note: 'An entry-level signal, not a job-title gate' }
    ],
    growth: 'BLS projects 15% growth for software developers 2024-34, much faster than average, with ~129,200 openings a year; the credential feeds into that labour market rather than occupying its own BLS code.',
    source: {
      label: 'BLS Occupational Outlook Handbook \u2014 Software Developers',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm'
    }
  },
  passRate: {
    headline: 'Oracle publishes no pass rate \u2014 but it publishes the bar: 65 percent, on a 40-question, 60-minute exam (2025 version), and the credential has lifetime validity',
    summary:
      'Oracle does not publish pass-rate statistics for the OCI Foundations Associate exam, and it never has, so any figure you see online is unverifiable. What is published and more useful is the scoring bar: the current 2025 exam (1Z0-1085-25) consists of 40 multiple-choice and multiple-response questions, must be completed in 60 minutes, and requires a passing score of 65 percent. Note that the previous 2020 version (1Z0-1085-20) had a different shape \u2014 60 questions in 105 minutes with a 68 percent pass mark \u2014 which is exactly why checking the exam code matters before you buy study material. The current exam is delivered online through Oracle MyLearn, and Oracle has frequently offered it at no cost to encourage cloud adoption, with a list price around $95-125 in markets where a fee applies. On the validity side, the OCI Foundations Associate certification is a lifetime credential, but Oracle\u2019s cloud-certification program works on version replacement: when Oracle releases a newer Foundations exam, the older version is retired, and candidates who want their credential to reflect the current product must pass the new version. The practical implication of a 65 percent bar on 40 questions is that the exam is genuinely entry-level: Oracle recommends no prior cloud experience, and the pass mark is set low enough that disciplined study of the official learning path is normally sufficient. Candidates who fail simply retake, paying the exam fee again where applicable, and because the exam is short and cheap, the cost of a retake is modest.',
    source: {
      label: 'Oracle University \u2014 OCI Foundations Associate 2025 exam',
      url: 'https://education.oracle.com/oracle-cloud-infrastructure-2025-foundations-associate/pexam_1Z0-1085'
    },
    caveat:
      'Oracle publishes no pass-rate figures for OCI Foundations. Published and verifiable are the 65% passing score, the 40-question/60-minute format of the 2025 version, and the lifetime validity with version replacement. We have deliberately left no pass-rate percentage in this table.'
  },
  studyPlan: {
    summary:
      'Plan for two to four weeks and 20 to 35 hours of study for the OCI Foundations Associate 2025 exam (1Z0-1085-25), and understand that this is a vocabulary-and-concepts exam, not a hands-on lab exam. The paper has 40 multiple-choice and multiple-response questions in 60 minutes with a 65 percent passing score. The official exam topics are getting started with OCI, the core services (compute, storage, networking), security and identity and governance, and pricing, billing, and support \u2014 and Oracle publishes a free learning path on Oracle MyLearn plus a free tier of OCI itself. Week one should cover cloud fundamentals and OCI architecture: regions, availability domains, fault domains, the shared responsibility model, and the IAM concepts of compartments, users, groups, and policies, because IAM and compartment design are where candidates most often lose points. Week two should cover the core services by category: compute (VM shapes, bare metal, dedicated hosts), storage (block, object, file, and archive), and networking (VCN, subnets, route tables, internet and NAT gateways, security lists, and network security groups) \u2014 for each service know what it is for and when you would choose it over the alternative. Week three should cover pricing, billing, cost management, and support, plus the database and platform services overview, and then shift into practice. Because the exam is unproctored and online through Oracle MyLearn in many markets, candidates sometimes treat it casually \u2014 but the 60-minute clock and 65 percent bar still require knowing the material cold. Finish with timed practice exams and re-study the domain weights you scored worst on.',
    totalHours: '20-35 hours over 2-4 weeks',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Cloud concepts, OCI architecture, and IAM',
        tasks: [
          'Study cloud fundamentals and the OCI regions, availability domains, and fault domains model',
          'Learn the shared responsibility model and who owns what under OCI',
          'Master IAM: compartments, users, groups, and policies \u2014 the highest-value topic area',
          'Provision a free OCI account and click through the console once to anchor the concepts'
        ],
        hours: '7-9 hrs'
      },
      {
        label: 'Week 2',
        focus: 'Core services by category',
        tasks: [
          'Compute: VM shapes, bare metal, dedicated hosts, and autoscaling \u2014 know what each is for',
          'Storage: block, object, file, and archive \u2014 learn the decision rule for choosing among them',
          'Networking: VCN, subnets, route tables, internet/NAT/service gateways, and security lists',
          'Test yourself with flashcards or quiz apps on "which service for this job" questions'
        ],
        hours: '7-9 hrs'
      },
      {
        label: 'Week 3',
        focus: 'Pricing, billing, support, and database/platform services',
        tasks: [
          'Learn the OCI pricing model, cost estimation, budgets, and cost analysis',
          'Understand OCI support tiers and the operational support model',
          'Cover the database and platform services overview, including Oracle Autonomous Database at a high level',
          'Review use cases and common deployment patterns for each service family'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Week 4',
        focus: 'Timed practice and gap closing',
        tasks: [
          'Take full-length practice exams under a 60-minute clock',
          'Re-study every domain you scored below the 65% bar on',
          'Re-drill IAM, storage choices, and networking gateways \u2014 the classic weak spots',
          'Confirm the current exam version and schedule or launch the exam'
        ],
        hours: '6-9 hrs'
      }
    ],
    variants: [
      { label: 'Working cloud professional cross-training from AWS or Azure', detail: 'Compress to 1-2 weeks at the same hourly load. You already know cloud concepts; the work is OCI vocabulary and naming \u2014 IAM compartments, security lists, and the specific OCI service names and choices.' },
      { label: 'Non-technical professional (sales, pre-sales, project management)', detail: 'Give yourself 4 weeks and lean on the official Oracle MyLearn learning path, which is built for this audience. The exam rewards vocabulary and service-selection reasoning more than depth.' },
      { label: 'No prior IT background at all', detail: 'Add a week of general cloud-computing fundamentals (IaaS/PaaS/SaaS, regions, availability) before starting the OCI-specific material, and budget extra time on IAM and networking.' }
    ]
  },
  prepStrategies: {
    summary:
      'The highest-yield strategy for OCI Foundations Associate is to treat it as a service-selection vocabulary exam: for every core OCI service, know what it is, what problem it solves, and when you would choose it over the nearest alternative, because the questions are overwhelmingly phrased as "which service for this requirement". Second, master IAM and compartment design, the topic area where candidates most often drop points, and the pricing model, because cost questions are common and formulaic. Third, use the free official resources first \u2014 the Oracle MyLearn learning path, the free OCI tier, and Oracle\u2019s own practice exam \u2014 before spending on third-party practice tests, and check that any third-party material is aligned to the current exam code 1Z0-1085-25, because the 2020 version had a different question count and passing score. Fourth, practise under the 60-minute clock so the pacing is not a surprise, and re-study the domains you miss in practice exams rather than re-reading material you already know. Fifth, watch for multiple-response items that require more than one correct answer \u2014 they are explicitly part of the format and punish candidates who stop at the first correct-looking option. Finally, since the exam can be taken online through Oracle MyLearn, set up your environment early, run any delivery pre-checks, and do not treat the convenience of an unproctored exam as a reason to underprepare.',
    items: [
      {
        title: 'Learn service selection, not just service names',
        detail: 'Questions are phrased as requirements: "which storage service for a long-term archive", "which gateway for outbound internet". For every core service, learn the decision rule against its nearest alternative \u2014 block vs object vs file vs archive, internet vs NAT vs service gateway.'
      },
      {
        title: 'Master IAM and compartments early',
        detail: 'Compartment structure, users, groups, policies, and the identity hierarchy are a perennial weak spot. Work them first and drill them repeatedly \u2014 they underpin a disproportionate share of the paper.'
      },
      {
        title: 'Use the free official path before paying for anything',
        detail: 'Oracle MyLearn\u2019s learning path, the free OCI tier, and Oracle\u2019s practice exam cover the blueprint at zero cost. Add third-party practice tests only after exhausting the official material, and verify they target exam 1Z0-1085-25.'
      },
      {
        title: 'Watch for multiple-response items',
        detail: 'The format includes questions with more than one correct answer. Read for "select all" instructions and check every option; a partially correct answer on a multiple-response item earns nothing.'
      },
      {
        title: 'Rehearse the 60-minute clock',
        detail: '40 questions in 60 minutes is comfortable only if you are not re-deriving answers. Run full-length timed practice exams and treat any domain below the 65% bar as a re-study target.'
      },
      {
        title: 'Beware outdated study material',
        detail: 'The 2020 version (1Z0-1085-20) had 60 questions, 105 minutes, and a 68% pass mark \u2014 a different exam. Check the code on anything you buy or use, and anchor to the current 2025 outline.'
      }
    ]
  },
  resourceComparison: {
    summary:
      'OCI Foundations Associate is one of the cheapest certifications in the cloud market, and most of the material you need is free, so the buying decision is about whether to spend anything at all. The exam itself is frequently free through Oracle MyLearn, with a list price around $95-125 in markets where a fee applies. Oracle\u2019s official learning path on MyLearn, the free OCI tier for hands-on clicking, and Oracle\u2019s own practice exam cover the full blueprint at zero cost, and for the majority of candidates that is genuinely sufficient \u2014 this is an entry-level vocabulary exam. Third-party resources exist in quantity \u2014 Udemy courses at sale prices of $15-30, practice-test sites, and study guides \u2014 but they are optional accelerators, not requirements, and you must verify they target the current exam code (1Z0-1085-25) rather than the retired 2020 version. The buying rule is: exhaust the free official path first, add one timed practice test for pacing calibration if you want independent confirmation, and spend on a course only if you want structured pacing. The biggest risk is not under-buying; it is buying material for the wrong version or over-preparing with depth the exam does not ask for.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'OCI Foundations Associate 2025 exam', values: ['~$95-125 list; frequently free via Oracle MyLearn', 'Online, 40 questions, 60 minutes', 'The required step \u2014 confirm the current version before booking'] },
      { label: 'Oracle MyLearn learning path', values: ['Free', 'Official online training modules', 'The authoritative syllabus \u2014 start here'] },
      { label: 'OCI free tier', values: ['Free', 'Hands-on cloud console access', 'Clicking through IAM, compute, storage, and networking to anchor concepts'] },
      { label: 'Oracle official practice exam', values: ['Usually free or low cost', 'Timed practice questions', 'Format calibration against Oracle\u2019s own wording'] },
      { label: 'Third-party courses (e.g. Udemy)', values: ['~$15-30 during sales', 'Video courses', 'Structured pacing \u2014 verify they target 1Z0-1085-25'] },
      { label: 'Third-party practice tests and study guides', values: ['~$10-30', 'Online or PDF', 'Extra timed reps \u2014 check the exam version before buying'] }
    ],
    footnote: 'Prices checked 2026-08 in USD and approximate. Oracle frequently offers the OCI Foundations exam free through MyLearn, and list pricing varies by market. Confirm the current exam code (1Z0-1085-25) on anything you buy. We do not rank by commission.'
  },
  commonMistakes: {
    summary:
      'The most common OCI Foundations mistakes are about studying the wrong version and the wrong depth. Candidates buy material for the retired 2020 exam (60 questions, 105 minutes, 68 percent) when the current 2025 exam is 40 questions in 60 minutes at 65 percent, and they over-prepare by studying deep architecture when the exam rewards service-selection vocabulary. A second cluster is structural: candidates lose points on multiple-response items by stopping at the first correct option, neglect IAM and compartment design \u2014 the perennial weak spot \u2014 and underestimate the pricing and billing domain because it seems simple, then miss the formulaic cost questions. A third error is preparation method: treating the exam as something to read about rather than practise under the 60-minute clock, and skipping the free official learning path in favour of third-party dumps that may not match the current blueprint. Finally, candidates misunderstand the credential\u2019s role: they expect OCI Foundations to qualify them for cloud jobs on its own, when it is explicitly an entry signal that works best as the first rung on Oracle\u2019s certification ladder, so the disappointment is usually a career-expectation problem, not an exam problem.',
    items: [
      {
        mistake: 'Studying for the retired 2020 version',
        fix: 'The current exam is 1Z0-1085-25: 40 questions, 60 minutes, 65% pass. The 2020 version was 60 questions, 105 minutes, 68%. Check the exam code on every course, book, and question bank before buying or studying it.'
      },
      {
        mistake: 'Over-preparing on deep architecture',
        fix: 'This is a foundations exam that rewards service-selection vocabulary and concepts, not detailed implementation. Learn what each service is for and when to choose it; leave deep architecture to the OCI Architect path.'
      },
      {
        mistake: 'Stopping at the first correct-looking option on multiple-response items',
        fix: 'The format includes "select all" questions. Read for the plural instruction, evaluate every option, and do not submit until you have checked all choices \u2014 a partial answer earns no credit.'
      },
      {
        mistake: 'Neglecting IAM and compartments',
        fix: 'Compartments, users, groups, and policies underpin a disproportionate share of the paper and are the classic weak spot. Work them first and re-drill them before the exam.'
      },
      {
        mistake: 'Reading instead of practising under the clock',
        fix: '40 questions in 60 minutes rewards rehearsal. Take full-length timed practice exams, score each domain against the 65% bar, and re-study the domains that miss.'
      },
      {
        mistake: 'Expecting the credential to qualify you for cloud jobs alone',
        fix: 'OCI Foundations is an entry-level signal and the first rung on Oracle\u2019s certification path. Pair it with hands-on OCI free-tier work and higher-level credentials (OCI Architect Associate/Professional) for job-market weight.'
      }
    ]
  },
  questionTypes: {
    summary:
      'The OCI Foundations Associate 2025 exam is a computer-based, multiple-choice and multiple-response test of 40 questions in 60 minutes, with a 65 percent passing score, delivered online through Oracle MyLearn in many markets. The official topic areas are getting started with OCI and cloud concepts, the core OCI services (compute, storage, and networking), security and identity and governance, and pricing, billing, and support. Questions are predominantly conceptual and service-selection based: they present a requirement and ask which OCI service or configuration meets it, rather than asking you to perform a task. A meaningful share are multiple-response items that require selecting more than one correct answer. The samples below are editor-written illustrations of the published topic areas, not live exam items. Because the exam is short and the pass bar is 65 percent, pacing is comfortable but not slack \u2014 roughly 90 seconds per question \u2014 and the discipline that matters is knowing the service catalogue cold rather than re-deriving answers during the test.',
    types: [
      { name: 'Service-selection multiple choice', share: 'The dominant format', detail: 'A requirement is described and you choose the OCI service or feature that fits \u2014 block vs object storage, internet vs NAT gateway, compute shape families.' },
      { name: 'Multiple-response items', share: 'A meaningful share', detail: 'Select all that apply across core concepts or service characteristics; partial credit is not given.' },
      { name: 'Concept and definition questions', share: 'A substantial share', detail: 'Cloud fundamentals, regions and availability domains, the shared responsibility model, and OCI-specific vocabulary.' },
      { name: 'Pricing and support scenario questions', share: 'A smaller but real share', detail: 'Cost estimation, budgets, free tier, support tiers, and how to get help \u2014 formulaic once the pricing model is understood.' }
    ],
    samples: [
      {
        prompt: 'A company must retain regulatory records for 10 years at the lowest possible storage cost. The records are never accessed during the retention period. Which OCI storage service is the best fit?',
        options: [
          'A. Block Volume',
          'B. Object Storage Archive tier',
          'C. File Storage',
          'D. Block Volume backups'
        ],
        answer: 'B',
        explanation: 'The Object Storage Archive tier is designed for long-term, low-cost retention of data that is rarely accessed \u2014 exactly this requirement. Block Volume (A) is high-performance storage attached to compute instances and far more expensive for archival data; File Storage (C) provides network file shares for active use; and block volume backups (D) protect block volumes rather than providing a low-cost archive tier. The decision rule is: frequently accessed, high performance \u2192 block or file; rarely accessed, long-term, lowest cost \u2192 object archive.'
      },
      {
        prompt: 'Which statement correctly describes the OCI shared responsibility model?',
        options: [
          'A. Oracle is responsible for securing everything, including the customer\u2019s application data',
          'B. The customer is responsible for everything, including the physical data centres',
          'C. Oracle secures the physical infrastructure and the underlying cloud services, while the customer secures what they build and configure on top, including their data and access controls',
          'D. Security responsibility is determined by a monthly fee, not by the service model'
        ],
        answer: 'C',
        explanation: 'The shared responsibility model splits duties: Oracle owns the physical data centres, the underlying hardware, and the cloud service platform, while the customer owns their data, identity and access configuration, and anything they deploy or configure on top. A over-allocates responsibility to Oracle and B to the customer \u2014 both are the classic wrong framings \u2014 and D invents a fee-based rule that does not exist. Candidates who memorise "shared = split by service layer" answer this correctly every time.'
      },
      {
        prompt: 'A network administrator needs to allow resources in a private subnet to reach the public internet for software updates. Which OCI component should be configured on the VCN?',
        options: [
          'A. A NAT gateway on the private subnet\u2019s route table',
          'B. An internet gateway on the private subnet\u2019s route table',
          'C. A service gateway to the internet',
          'D. A security list change that permits all outbound traffic on the public subnet'
        ],
        answer: 'A',
        explanation: 'A NAT gateway gives instances in a private subnet outbound-only access to the internet, which is precisely the software-update requirement without exposing inbound paths. An internet gateway (B) is for public subnets and would expose resources inbound; a service gateway (C) connects to Oracle cloud services, not the general internet; and D configures the wrong subnet and confuses security lists with routing. The decision rule: public subnet + internet gateway for inbound; private subnet + NAT gateway for outbound-only; service gateway for Oracle service endpoints.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published topic areas, not live exam items.'
  },
  examDay: {
    summary:
      'The OCI Foundations Associate 2025 exam is delivered online through Oracle MyLearn in many markets \u2014 an unproctored, browser-based test of 40 multiple-choice and multiple-response questions in 60 minutes, with a 65 percent passing score \u2014 though delivery options and fees vary by region, so confirm the current method when you book. Because it is online, the logistics are mostly about your environment: a stable internet connection, a supported browser, a quiet space, and a registered Oracle account with the exam properly launched. Have your Oracle sign-in details ready and verify that the exam you are launching is the current version. On the day, the pacing is roughly 90 seconds per question, which feels comfortable only if you know the service catalogue cold; skip-and-return navigation may not be available or worth it on a 40-question paper, so answer as you go and flag anything uncertain mentally rather than burning the clock. Watch the multiple-response items \u2014 read for "select all" and evaluate every option before submitting. Do not overuse the clock on a single question; if a question is genuinely unfamiliar, make the best service-selection call, mark it, and move on. Your result appears on completion, and a pass records the OCI Foundations Associate credential to your Oracle profile, with lifetime validity under the version-replacement model \u2014 meaning a future OCI Foundations exam update may require you to sit the new version to keep the credential current.',
    bring: [
      'Your Oracle account sign-in credentials',
      'A stable internet connection and a supported, up-to-date browser',
      'A quiet, distraction-free space for the 60-minute window',
      'For paid exam paths: the payment method and booking details used at registration'
    ],
    leave: [
      'Notes and study material \u2014 even an unproctored exam should be treated as closed-book',
      'Other browser tabs and applications that could interfere with the exam session',
      'Phones and notifications that break concentration during the 60-minute clock',
      'The temptation to look things up mid-exam \u2014 prepare first, then sit it seriously'
    ],
    timeline: [
      { time: 'Days before', detail: 'Confirm the current exam version, delivery method, and any system requirements; book or schedule the exam window.' },
      { time: 'Immediately before', detail: 'Close other applications, check the connection, and sign in to Oracle MyLearn to launch the exam.' },
      { time: 'The exam (60 min)', detail: '40 multiple-choice and multiple-response questions; 65% passing score; answer as you go and watch the select-all items.' },
      { time: 'After submission', detail: 'Your result is recorded to your Oracle profile; a pass awards the OCI Foundations Associate credential.' }
    ],
    rules: [
      '40 questions, 60 minutes, 65% passing score (2025 version 1Z0-1085-25).',
      'Multiple-choice and multiple-response formats; multiple-response items require every correct option.',
      'Delivery is online through Oracle MyLearn in many markets; method and fee vary by region.',
      'The credential is lifetime under Oracle\u2019s version-replacement model; newer exam versions supersede older ones.',
      'Oracle recommends no prior cloud experience \u2014 this is an entry-level exam.'
    ],
    afterwards:
      'Your result is recorded immediately on completion, and a passing score awards the OCI Foundations Associate credential to your Oracle profile with lifetime validity under Oracle\u2019s version-replacement model \u2014 meaning that when Oracle retires this exam version for a newer one, staying current may require sitting the new version. On a pass, add the credential to your resume and LinkedIn with the exam code and version, and treat it as the first rung of a deliberate ladder: the natural next steps are hands-on time in the OCI free tier and the OCI Architect Associate or OCI Database certifications, which carry the job-market weight this entry credential does not. On a fail, the cost of recovery is low \u2014 the exam is short and cheap, and often free through MyLearn \u2014 so review the domain weights from your score, re-study IAM, storage selection, and the pricing model specifically, and retake within a couple of weeks while the material is fresh. Because the exam is unproctored in many markets, resist the temptation to treat it casually; the credential is only worth what honest preparation makes it worth, and the skills it validates \u2014 knowing which OCI service fits which requirement \u2014 are exactly the vocabulary employers probe in the first cloud interview.'
  }
};

export default data;
