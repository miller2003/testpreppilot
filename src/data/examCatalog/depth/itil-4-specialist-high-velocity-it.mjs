// Depth content for: itil-4-specialist-high-velocity-it
// ITIL 4 Specialist: High-velocity IT (HVIT), delivered by PeopleCert:
// 40 multiple-choice questions in 90 minutes (113 for non-native speakers),
// closed book, 70% pass mark (28/40). Prerequisite: ITIL 4 Foundation.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'IT service management & framework certifications desk',
    bio: 'This guide is compiled and maintained by our IT-service-management desk. ITIL 4 is owned by AXELOS and delivered through PeopleCert; exam structure, question formats, fees, prerequisites and renewal terms come from PeopleCert\u2019s ITIL 4 module pages and the published syllabi. ITIL is revised on a multi-year cycle, and the launch of ITIL (Version 5) in early 2026 is the single most important version fact for anyone buying material now — we state plainly that ITIL 4 remains valid and available but is scheduled for sunset, and we name the replacement and its date. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam structure, question types, fees, prerequisites and renewal terms were taken from PeopleCert\u2019s ITIL 4 High-velocity IT module page and the published syllabus; the ITIL (Version 5) launch and ITIL 4 sunset date were checked against PeopleCert announcements.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$103,790 median for computer systems analysts (BLS, May 2024)',
    summary:
      'There is no Bureau of Labor Statistics occupation called "high-velocity IT professional" — HVIT is an ITIL 4 specialist module, not a job, and its practitioners work as DevOps engineers, IT operations leads, service delivery managers, cloud and infrastructure managers, and digital-transformation specialists who run fast-moving IT delivery. BLS therefore classifies by job duties, and the closest official fit for the specialist-level practitioners who most often sit HVIT is Computer Systems Analysts, SOC 15-1211, which had a May 2024 median wage of $103,790 ($49.90 per hour), with the lowest 10 percent earning less than $63,160 and the highest 10 percent more than $166,030. The fit is honest rather than perfect: computer systems analysts study an organisation\u2019s current computer systems and design ways to improve efficiency, which overlaps the systems-thinking and delivery-improvement work HVIT teaches, and the occupation is a specialist-level technology role in the same band as the typical HVIT candidate; practitioners who move into management are counted under different SOC codes such as Computer and Information Systems Managers. BLS counted 521,100 computer systems analyst jobs in 2024 and projects 9 percent employment growth from 2024 to 2034, much faster than the average for all occupations, with about 34,200 openings a year. The limitation to state plainly is that BLS does not isolate ITIL holders, and the median covers all computer systems analysts regardless of certification, so read the figure as the relevant labour-market level for the typical HVIT candidate, not as a measure of the certificate\u2019s premium. The HVIT credential\u2019s value here is practical rather than a salary lever on its own: it signals that a delivery or operations professional understands the language of agile, Lean and DevOps inside the ITIL service value system, which is the vocabulary used by the fast-moving IT organisations they work in, and that helps in mobility toward DevOps-lead, service-delivery and platform roles that sit in and above the systems-analyst band.',
    rows: [
      { label: 'Median annual wage, computer systems analysts', value: '$103,790', note: 'BLS OOH, SOC 15-1211, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $63,160', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $166,030', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '521,100 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~34,200 per year', note: 'BLS OOH Job Outlook, 2024-34 — 9% growth, much faster than average' }
    ],
    growth: '+9% projected change 2024-34 (much faster than average) for computer systems analysts, ~34,200 openings a year; the BLS figure covers all systems analysts, not just ITIL holders, so treat it as the role\u2019s labour-market level',
    source: {
      label: 'BLS Occupational Outlook Handbook — Computer Systems Analysts',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-systems-analysts.htm'
    }
  },
  passRate: {
    headline: 'PeopleCert publishes no HVIT pass rate — the exam is 40 questions in 90 minutes with a published 70% pass mark (28/40)',
    summary:
      'PeopleCert, which delivers ITIL 4 on behalf of AXELOS, does not publish a pass rate for the ITIL 4 Specialist High-velocity IT exam or for any ITIL module, and it never has. It reports only a pass or fail outcome to the candidate, and while the passing score is published — 28 of 40, or 70 percent — the cohort pass rate is not, so we have deliberately left any pass-rate figure out rather than repeating the unverified percentages that float around training forums. What is published and verifiable is the exam shape: 40 multiple-choice questions in 90 minutes (113 minutes for candidates whose first language differs from the exam language), closed book, with a published pass mark of 28 correct answers out of 40 (70 percent). The closed-book nature is a key difference from many IT certifications: you cannot rely on looking anything up, so the syllabus must be memorised, not merely understood. The prerequisite is also published: candidates must hold ITIL 4 Foundation (or an equivalent such as an ITIL v3 certification or the ITIL 4 Managing Professional Transition certificate) before sitting HVIT, and PeopleCert requires accredited training through an Authorized Training Organization or the official eLearning for the higher-level modules, with exam results withheld without proof of completion. The practical implication for a candidate is that, because the standard is fixed at 70 percent and the items are scenario-based multiple choice drawn from a published syllabus, the exam is highly passable with disciplined preparation; the risk is not difficulty but complacency and version confusion. The version caveat matters here more than for most exams: ITIL (Version 5) launched in early 2026, and PeopleCert has scheduled the ITIL 4 modules for sunset on 31 December 2027, so a pass now is not wasted — but candidates buying material in 2026 must choose knowingly between the still-current ITIL 4 track and the newer V5 track, and not mix the two syllabi.',
    source: {
      label: 'PeopleCert — ITIL 4 Specialist High-velocity IT',
      url: 'https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-specialist-high-velocity-it-2814'
    },
    caveat:
      'No HVIT pass rate is published by PeopleCert, by AXELOS, or by the accrediting body. What is published and verifiable is the 40-question / 90-minute / 28-of-40 (70%) closed-book structure and the ITIL 4 Foundation prerequisite. The ITIL (Version 5) launch in early 2026 and the ITIL 4 sunset date of 31 December 2027 are separate version facts candidates must track.'
  },
  studyPlan: {
    summary:
      'ITIL 4 Specialist High-velocity IT (HVIT) is a practitioner-level module: it tests whether you understand how the ITIL 4 service value system supports high-velocity digital delivery — digital product lifecycle, agile, Lean and DevOps integration, the five HVIT objectives, and the supporting practices — and how to apply the guiding principles in fast-moving environments. It is a 40-question, 90-minute closed-book exam (113 minutes for non-native speakers) and you need 28 correct answers (70 percent) to pass, with ITIL 4 Foundation as a prerequisite and accredited training required before the result is released. The syllabus is published and stable, so the study plan is about concept discrimination and scenario application rather than hands-on labs. The plan below runs about four weeks at 6-8 hours a week (roughly 25-35 hours total), which matches the commonly cited prep time for a specialist module; many candidates coming from a DevOps or agile background sit it in two to three weeks. The single most important planning fact in 2026 is the version choice. ITIL (Version 5) launched in early 2026, and PeopleCert has scheduled the ITIL 4 modules for sunset on 31 December 2027, so studying ITIL 4 now is not wasted — but you must buy ITIL 4 material knowingly and not accidentally mix in V5 content, because the two syllabi differ. The biggest scheduling error is treating HVIT as a Foundation refresh: the exam is scenario-based, the distractors are drawn from near-neighbour concepts (fast development versus valuable investment versus resilient operations), and candidates who skim the five HVIT objectives fail on application, not recall. Build the plan around active recall of the five objectives and the digital product lifecycle, and rehearse the scenario style until the discriminations are instant.',
    totalHours: '25-35 hours (commonly cited for a specialist module)',
    weeks: [
      {
        label: 'Week 1',
        focus: 'High-velocity IT concepts and the digital product lifecycle',
        tasks: [
          'The characteristics of digital organisations and why high-velocity IT matters',
          'The digital product lifecycle and how it maps to the ITIL operating model',
          'Minimum viable products, product-market fit and continuous feedback loops',
          'The service value system as the frame for HVIT'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Week 2',
        focus: 'The five HVIT objectives and guiding principles',
        tasks: [
          'The five objectives: valuable investments, fast development, resilient operations, co-created value, assured conformance',
          'Techniques that support each objective — A/B testing, CI/CD, infrastructure as code, SRE, DevSecOps',
          'How the seven guiding principles apply in high-velocity contexts',
          'Drill the objective discriminations until they are automatic'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Week 3',
        focus: 'Agile, Lean, DevOps and supporting practices',
        tasks: [
          'How agile, Lean and DevOps practices integrate with ITIL 4',
          'The supporting practices: deployment management, software development, infrastructure and platform management, service validation and testing',
          'Technical practices: automation, cloud computing, microservices, containers',
          'Build a one-page glossary of near-neighbour concepts the exam confuses'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Week 4',
        focus: 'Mock exams and gap closing',
        tasks: [
          'Two or three timed 40-question mocks at 90 minutes (or 113 if you qualify for the language accommodation)',
          'Log every scenario you hesitated on as a miss, even if you got it right',
          'Re-read the five objectives and the digital product lifecycle daily',
          'Confirm your exam version (ITIL 4) and that your voucher matches it, not V5'
        ],
        hours: '5-7 hrs'
      }
    ],
    variants: [
      { label: 'DevOps or agile practitioner', detail: 'Two to three weeks at 6 hrs/week. The practices are familiar from the job; what you lack is the ITIL framing — the five objectives and the service value system — so protect the framework language rather than the agile and Lean concepts.' },
      { label: 'Traditional IT service management background', detail: 'Five to six weeks. Budget extra time on agile, Lean and DevOps mechanics and cloud-native practices, which traditional ITSM jobs do not cover, and rehearse the scenario items heavily.' },
      { label: 'Choosing between ITIL 4 and Version 5 in 2026', detail: 'If you need the credential soon, the ITIL 4 modules remain bookable through 31 December 2027 — sit ITIL 4. If you are starting a longer multi-module track and can wait, evaluate the V5 track deliberately. Either way, do not study a mixed syllabus.' }
    ]
  },
  prepStrategies: {
    summary:
      'ITIL 4 Specialist High-velocity IT rewards scenario application more than any other specialist module, because the exam is closed book and the items present real delivery situations and ask which objective, principle or practice applies, and the candidate who cannot map a scenario to the ITIL vocabulary under a 90-minute clock will fail regardless of how much agile or DevOps experience they bring. The candidate who can distinguish the five HVIT objectives on sight — fast development versus valuable investment versus resilient operations versus co-created value versus assured conformance — will pass comfortably, because the distractors in this exam are neighbour objectives, not absurd options, and the discriminations are what separate a pass from a fail. The strategies below are built around objective mastery, scenario rehearsal and version clarity, which are the three things that actually move the result, and the ordering matters: learn the five objectives before anything else, because every scenario item maps to one of them, then rehearse the scenario style until naming the objective is a reflex, and only then worry about the mocks. The version clarity strategy is specific to 2026, because ITIL (Version 5) launched in early 2026 and PeopleCert has scheduled the ITIL 4 modules for sunset on 31 December 2027, so a candidate must deliberately choose the ITIL 4 track and use only ITIL 4 material, or the alternative, deliberately plan for V5 — mixing the two syllabi is the avoidable error of the year. The candidate who skips the framework work and relies on general agile experience answers the scenario items from gut instinct and picks the plausible-sounding but wrong objective, while the candidate who rehearsed the discriminations reads each scenario, names the objective, and eliminates the neighbour distractors in the time the format allows. The final discipline is the logistics: book and rehearse at the correct time limit (90 minutes, or 113 if you qualify for the language accommodation), and confirm that your ITIL 4 Foundation certificate and accredited-training proof are attached to your PeopleCert account, because results are withheld without them.',
    items: [
      {
        title: 'Master the five HVIT objectives cold',
        detail: 'Valuable investments, fast development, resilient operations, co-created value and assured conformance are the backbone of the exam. For each, know what it means, why it matters, and which techniques support it — A/B testing for valuable investments, CI/CD for fast development, SRE for resilient operations, feedback loops for co-created value, DevSecOps and risk controls for assured conformance. The distractors are neighbour objectives, so the discriminations must be instant.'
      },
      {
        title: 'Map scenarios to the ITIL vocabulary, not general experience',
        detail: 'The scenario items ask which objective, principle or practice applies, and the right answer is framed in ITIL language. A candidate who answers from general agile experience picks the plausible-sounding but wrong objective. Rehearse by reading each practice scenario and naming the objective before looking at the options.'
      },
      {
        title: 'Learn the digital product lifecycle as a sequence',
        detail: 'The lifecycle — concept, definition, build, run, improve — and how it maps to the ITIL operating model appear in scenario and ordering items. Draw the lifecycle from memory and connect each stage to the value-chain activities, so sequence and mapping items are recall rather than reasoning.'
      },
      {
        title: 'Use official or syllabus-aligned mocks only',
        detail: 'Because the syllabus is published, good mocks are closely aligned to it. Avoid question banks that pad with Foundation terminology or, in 2026, that leak Version 5 content into an ITIL 4 voucher. Confirm the mock matches the ITIL 4 HVIT syllabus you are sitting; a mismatched bank teaches the wrong vocabulary.'
      },
      {
        title: 'Choose your version deliberately in 2026',
        detail: 'ITIL (Version 5) launched in early 2026 and PeopleCert has scheduled ITIL 4 for sunset on 31 December 2027. The ITIL 4 modules remain bookable through that date, so sitting HVIT now is not wasted — but decide knowingly and use only ITIL 4 material. Mixing V5 syllabus content into an ITIL 4 voucher is the avoidable error of the year for this exam.'
      },
      {
        title: 'Practise at the right time limit and book the training proof',
        detail: 'The exam is 90 minutes (113 for eligible non-native speakers). If you qualify for the accommodation, book and rehearse at 113; otherwise rehearse strictly at 90. Also keep proof of your accredited training and ITIL 4 Foundation certificate, because PeopleCert withholds results without them.'
      }
    ]
  },
  resourceComparison: {
    summary:
      'The decisive buying decision in 2026 is version: ITIL 4 material versus ITIL (Version 5) material, because PeopleCert scheduled ITIL 4 for sunset on 31 December 2027 while V5 is the new track, and a candidate who buys a mixed syllabus wastes both money and study time. The ITIL 4 modules remain valid and bookable through that date, so either is defensible — but buy one version\u2019s resources and use them, not a mix, and confirm the version on the cover of anything you purchase. The second decision is training: PeopleCert requires accredited training for the higher-level ITIL 4 modules — an Authorized Training Organization course or the PeopleCert Official eLearning — with exam results withheld without proof of completion, so the ATO course or official eLearning is effectively mandatory rather than optional, and that cost dominates the budget. PeopleCert\u2019s official eLearning with the exam typically runs well over $1,000 in the US, while ATO courses vary widely by provider and country, roughly $500 to $1,500; the exam voucher alone, for a candidate who takes the training through an ATO and buys only the exam, is around $495 in the US before regional tax, with bundle prices varying. The third decision is the supplement stack: the official AXELOS or PeopleCert HVIT publication, roughly $40-70, is the syllabus source and pairs with the course; free glossary and flashcard sets cover the five-objective and lifecycle discriminations that are the highest-yield free resource; and a PeopleCert Plus membership, roughly $133 per year, matters for renewal rather than the exam itself, because ITIL 4 certifications are kept current with 20 CPD points per year and Plus is the standard way to log them. Because the exam is scenario-based and the syllabus is published, good mocks aligned to the ITIL 4 HVIT syllabus are the readiness check, while banks that pad with Foundation terminology or leak V5 content teach the wrong vocabulary. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'PeopleCert Official eLearning + HVIT exam', values: ['Roughly $1,000+ with the exam (region-dependent)', 'Online self-paced with official content', 'Required — satisfies the accredited-training requirement'], },
      { label: 'HVIT exam voucher through an accredited training organization', values: ['~$495 USD base; bundle prices vary by provider', 'Online proctored or test centre', 'Candidates who take the ATO course; confirm the voucher covers the exam'], },
      { label: 'PeopleCert Plus membership', values: ['~$133/year (region-dependent)', 'Subscription', 'Annual renewal (20 CPD/yr) and member pricing on vouchers; worth it if you will sit more ITIL modules'], },
      { label: 'Official AXELOS / PeopleCert HVIT publication', values: ['~$40-70 retail', 'Print + eBook', 'The syllabus source; pairs with the training course'], },
      { label: 'Accredited HVIT classroom or live online course (ATO)', values: ['~$500-1,500 depending on provider', 'Instructor-led with mock exams', 'Structured path guaranteed aligned to the HVIT syllabus'], },
      { label: 'Free glossary / flashcard sets', values: ['Free', 'Web / app', 'Five-objective and lifecycle discrimination — the highest-yield free resource'], }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax and vary widely by region, provider and promotion; PeopleCert pricing changes frequently, and the accredited-training requirement means the course cost is part of the budget, not optional. Confirm every resource is ITIL 4 (not v3, not Version 5) unless you have deliberately chosen the V5 track. We do not rank by commission.'
  },
  commonMistakes: {
    summary:
      'ITIL 4 Specialist High-velocity IT is often underestimated by candidates who arrive with agile or DevOps experience and assume the exam rewards that experience directly, and that underestimation is the root of most failures — the exam is closed book with near-neighbour distractors drawn from the five HVIT objectives, so "I live this every day" is not the same as "I can name the ITIL objective under a 90-minute clock". The mistakes below are the reliable failure modes, and the version one is specific to 2026. The most damaging mistake is answering scenarios from general agile experience rather than the ITIL vocabulary: the items ask which objective, principle or practice applies, and a candidate who answers from gut instinct picks the plausible-sounding but wrong objective, while the candidate who rehearsed naming the objective before reading the options wins the discriminations. The second trap is confusing the five objectives, because valuable investments, fast development, resilient operations, co-created value and assured conformance are near-neighbours and the distractors trade on exactly that; the fix is to know which techniques support which objective — CI/CD is fast development, SRE is resilient operations, A/B testing is valuable investments — and drill until the mapping is instant. The third trap is assuming the exam is open book, when HVIT is closed book with nothing to consult, and candidates who plan to look things up run out of time. The fourth trap is the version mix in 2026, buying V5 content for an ITIL 4 voucher or leftover v3 material, which teaches vocabulary that does not match the exam. The fifth trap is ignoring the logistics — PeopleCert withholds results without proof of ITIL 4 Foundation and accredited training, so a candidate who sits without the paperwork finds a pass unreleased. The sixth is forgetting the renewal requirement, because the credential lapses without 20 CPD points per year, commonly logged through PeopleCert Plus.',
    items: [
      {
        mistake: 'Studying a mixed or wrong-version syllabus in 2026',
        fix: 'ITIL (Version 5) launched in early 2026 and PeopleCert scheduled ITIL 4 for sunset on 31 December 2027. The ITIL 4 modules stay valid and bookable and remain the V5 prerequisites, so either track is fine — but use only ITIL 4 material for an ITIL 4 voucher. Mixing V5 content, or buying leftover v3 material, teaches vocabulary that does not match your exam.'
      },
      {
        mistake: 'Answering scenarios from general agile experience',
        fix: 'The items ask which HVIT objective, guiding principle or practice applies, and the right answer is framed in ITIL vocabulary. A candidate who answers from gut agile experience picks the plausible-sounding but wrong objective. Rehearse by naming the objective before looking at the options.'
      },
      {
        mistake: 'Confusing the five HVIT objectives',
        fix: 'Valuable investments, fast development, resilient operations, co-created value and assured conformance are near-neighbours, and the distractors trade on exactly that. Know which techniques support which objective — CI/CD is fast development, SRE is resilient operations, A/B testing is valuable investments — and drill the discriminations until they are instant.'
      },
      {
        mistake: 'Assuming the exam is open book',
        fix: 'HVIT is closed book: 40 questions in 90 minutes (113 for eligible non-native speakers), no reference. Candidates who plan to "look it up" have no such option and run out of time. Memorise the five objectives, the digital product lifecycle and the practice names; there is nothing to consult on the day.'
      },
      {
        mistake: 'Ignoring the training and prerequisite proof requirement',
        fix: 'PeopleCert withholds exam results without proof of ITIL 4 Foundation and completion of accredited training. Candidates who sit without the paperwork find their pass unreleased. Collect the Foundation certificate and the ATO or eLearning completion proof before booking.'
      },
      {
        mistake: 'Forgetting the renewal / CPD requirement',
        fix: 'ITIL 4 certifications are renewed through PeopleCert\u2019s Continuing Professional Development scheme — 20 CPD points per year, commonly through a PeopleCert Plus membership (~$133/year). Candidates who ignore this find the credential lapsed when they need it. Diary the renewal the week you pass.'
      }
    ]
  },
  questionTypes: {
    summary:
      'ITIL 4 Specialist High-velocity IT is a single closed-book, multiple-choice exam: 40 questions in 90 minutes (113 minutes for candidates whose first language is not the exam language), and you need 28 correct answers out of 40 — a published 70 percent pass mark. There is no separate practical or essay component. PeopleCert uses the item styles drawn from its item-writing guidance: classical multiple choice (one correct answer from four), negative-choice (select the incorrect statement), "missing word" (complete a sentence from the syllabus), and "list" items (put options in the correct order or match them), and in a specialist module like HVIT the items are overwhelmingly scenario-based — a short delivery situation followed by the correct objective, principle or practice, with distractors that are plausible neighbour concepts rather than absurd ones. All are scored as straightforward right/wrong; there is no partial credit and the exam is closed book, so recall and discrimination are everything. The syllabus is published and stable, which means good mocks align closely to it and the distractors are predictable. The practical pacing implication is simple: with 40 items in 90 minutes you have over two minutes each, but the scenario items demand careful reading, so a candidate who has mastered the five objectives finishes comfortably while one who hesitates on every near-neighbour runs short. Because the standard is a fixed 70 percent and PeopleCert publishes no pass rate, your preparation competes with the syllabus, not a cohort. The 2026 version caveat still applies: these item styles describe ITIL 4 HVIT; the newer ITIL (Version 5) track uses a different exam and a different syllabus, so do not assume V5 item wording matches ITIL 4 when you sit the HVIT paper.',
    types: [
      { name: 'Scenario-based classical multiple choice', share: 'The majority of items', detail: 'A short delivery situation followed by the correct HVIT objective, guiding principle or practice. Distractors are neighbour concepts.' },
      { name: 'Negative-choice ("which is NOT...")', share: 'A regular minority', detail: 'Asks you to identify the incorrect statement about an objective or practice. Easy to misread under time pressure; the skill is the same discrimination, inverted.' },
      { name: 'Missing word', share: 'A regular minority', detail: 'A sentence from the syllabus with one term omitted; select the correct term. Rewards verbatim familiarity with the official wording.' },
      { name: 'List / ordering', share: 'Occasional', detail: 'Place items in the correct sequence (e.g. the digital product lifecycle) or match techniques to objectives.' }
    ],
    samples: [
      {
        prompt: 'A product team is analysing how users feel while interacting with a mobile banking application, including their emotions and satisfaction at each touchpoint, to improve the experience. Which high-velocity IT objective is being addressed?',
        options: [
          'A. Co-created value',
          'B. Fast development',
          'C. Resilient operations',
          'D. Assured conformance'
        ],
        answer: 'A',
        explanation: 'Co-created value is the HVIT objective about involving users and stakeholders in the value journey, including emotional connection and satisfaction at each touchpoint, rather than delivering value to passive customers. Fast development (B) is about speed, resilient operations (C) about continuity under disruption, and assured conformance (D) about governance and compliance. The scenario\u2019s focus on user feelings and satisfaction points to co-created value.'
      },
      {
        prompt: 'A delivery team wants to reduce the risk of a new service failing when it reaches production by testing small increments continuously. Which practice combination most directly supports this objective?',
        options: [
          'A. Continuous integration and continuous deployment (CI/CD) with automated testing',
          'B. Deploying the entire release once a year without testing',
          'C. Disabling monitoring to reduce alert noise',
          'D. Removing feedback loops to avoid delays'
        ],
        answer: 'A',
        explanation: 'Continuous integration and continuous deployment with automated testing are the practices that reduce production risk by testing small increments continuously — the fast-development and resilient-operations techniques the syllabus teaches. Annual untested deployments, disabling monitoring, and removing feedback each increase risk rather than reduce it. This reflects the techniques-and-practices items in the syllabus.'
      },
      {
        prompt: 'Which of the following is NOT one of the five high-velocity IT objectives?',
        options: [
          'A. Valuable investments',
          'B. Fast development',
          'C. Maximum documentation',
          'D. Assured conformance'
        ],
        answer: 'C',
        explanation: 'The five HVIT objectives are valuable investments, fast development, resilient operations, co-created value and assured conformance. "Maximum documentation" is not one of them — and in fact the ITIL guiding principle "keep it simple and practical" points the opposite way. This is a negative-choice item testing verbatim familiarity with the objective list; A, B and D are all genuine objectives.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published ITIL 4 HVIT syllabus, not live exam items. Item styles (classical, negative, missing word, list) follow PeopleCert\u2019s item-writing guidance for ITIL 4. Do not assume these match the separate ITIL (Version 5) module exams.'
  },
  examDay: {
    summary:
      'ITIL 4 Specialist High-velocity IT is delivered by PeopleCert either online with remote proctoring or at a test centre, as a single 40-question, 90-minute (or 113-minute) closed-book multiple-choice exam with a published pass mark of 28/40 (70 percent), and the exam-day risks are few but specific, which is what makes this exam day manageable for a well-prepared candidate. First, the closed-book rule: you may bring nothing to consult, so everything must be in memory — there is no noteboard strategy to lean on for the five objectives, only for the lifecycle sketch if the centre issues one. Second, the version: in 2026 you are sitting the ITIL 4 HVIT paper, which remains valid and bookable through 31 December 2027, so confirm at check-in that your voucher is the ITIL 4 module and not a V5 booking if you prepared for ITIL 4. Third, the identity and account logistics: your ID name must match your PeopleCert account exactly or you lose the seat, and the same account must hold your ITIL 4 Foundation certificate and accredited-training proof, because PeopleCert withholds results without them — candidates who ignore the paperwork find a pass unreleased. Fourth, the pacing: with 40 scenario items in 90 minutes you have over two minutes each, but the items demand careful reading, so work steadily, name the objective before reading the options, flag unsure items, and return to them, then submit rather than letting the clock expire. You receive a result on screen at the centre and by email, with a pass/fail and your score, and PeopleCert does not publish a pass rate, so the score report and your own mock trend are the only feedback you get. Because the standard is a fixed 70 percent and the items are scenario-based recall, the day is mostly about rested discrimination and steady pacing — the clock, not difficulty, is the only pressure.',
    bring: [
      'One government-issued photo ID whose name matches your PeopleCert account exactly',
      'Your PeopleCert exam booking confirmation',
      'For online proctoring: a phone for check-in, a clear desk, and a private room with a door',
      'For online proctoring: webcam, microphone and a connection already system-tested on the exact machine',
      'Your ITIL 4 Foundation certificate and training proof already linked to your PeopleCert account'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — away from the desk for both formats',
      'All notes, the official publication, and any printed ITIL reference — the exam is closed book',
      'Your own paper and pens unless the centre issues an erasable noteboard',
      'Bags, coats, hats, food and drink beyond what the centre permits',
      'Second monitors (unplugged and turned away for online) and any other person in the room'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your ID name matches your PeopleCert account exactly, that your Foundation certificate and training proof are attached, and that your voucher is the ITIL 4 HVIT paper (not V5).' },
      { time: '24 hours before', detail: 'For online proctoring, run the system test on the same machine and network. Light recall only — the five objectives and the lifecycle.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin online check-in (photograph of face, ID, and the room).' },
      { time: 'Check-in', detail: 'ID verification, photograph, locker for personal items. Seated; the exam interface loads with a short tutorial.' },
      { time: '0-2 min', detail: 'If a noteboard is issued, sketch the five objectives and the lifecycle. Otherwise, settle and begin; the clock is 90 min (or 113 if you qualified for the language accommodation).' },
      { time: 'First 60 min', detail: 'Work the 40 scenario items at a steady tempo. Name the objective before reading the options; eliminate neighbour distractors; flag unsure items rather than stalling.' },
      { time: 'Final 25-30 min', detail: 'Return to flagged items, then review. You need 28/40 (70%); submit rather than letting the clock expire.' },
      { time: 'On submission', detail: 'Pass/fail and score appear on screen (and by email). Save the result; PeopleCert does not publish a cohort pass rate.' }
    ],
    rules: [
      'The exam is closed book: 40 multiple-choice questions, 90 minutes (113 for eligible non-native speakers).',
      'Pass mark is published: 28 of 40 correct (70 percent).',
      'Prerequisite: ITIL 4 Foundation (or equivalent), plus accredited training proof — PeopleCert withholds results without them.',
      'ID name must match your PeopleCert account exactly or you will be denied the seat.',
      'Item styles include classical, negative-choice, missing word and list/ordering; all are right/wrong, no partial credit.',
      'PeopleCert publishes no pass rate; your preparation competes with the syllabus, not a cohort.',
      'The ITIL 4 modules remain valid and bookable through 31 December 2027 — confirm you are sitting the version you studied.',
      'Renewal requires 20 CPD points per year for three years, commonly via PeopleCert Plus (~$133/year).'
    ],
    afterwards:
      'Your pass/fail and score appear on screen at the centre and by email from PeopleCert; there is no published pass rate, so your own mock trend is the better preparation check. On a pass, the credential is valid for three years and renewed via PeopleCert\u2019s CPD scheme — 20 CPD points per year, typically through a PeopleCert Plus membership (~$133/year) — so diary the renewal the week you pass rather than discovering a lapse later. Importantly for 2026 candidates: the ITIL 4 modules stay valid and bookable through 31 December 2027 and continue to serve as the prerequisites for the ITIL (Version 5) track, so a pass now is not wasted even if you later move to V5. HVIT is also one of the four Managing Professional modules, so if you hold the others — CDS, DSV and DPI — you earn the ITIL 4 Managing Professional designation on completion, which is a strong reason to plan the next module before the sunset date. On a fail, the gap is almost always objective discrimination or scenario reading, not comprehension — re-drill the five objectives and the lifecycle, re-practise at the correct time limit, then re-sit; the failed attempt still cost the full voucher plus the training, so a clean first pass is also the cheap one. Whatever version you sat, protect the renewal clock immediately on a pass.'
  }
};

export default data;
