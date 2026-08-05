// Depth content for: microsoft-az-305
// Sources: learn.microsoft.com/credentials (AZ-305 study guide "Skills measured as of
// April 17, 2026"; Azure Solutions Architect Expert certification page confirming the
// Azure Administrator Associate certification is a hard prerequisite and that the
// English version was updated 17 April 2026; exam duration & exam experience support
// page; exam scoring and score reports; exam retake policy; certification renewal page),
// bls.gov Occupational Outlook Handbook (May 2024 wage data), Skillsoft IT Skills and
// Salary material (2025). No retirement notice exists for AZ-305 as of this review.
// All facts checked 2026-08-04.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This guide is compiled and maintained by our IT-certifications desk. Vendor exams in this space are revised and retired frequently, so we track the objectives document by its published revision date and state plainly when an exam is being retired and what replaces it — the single most common way candidates waste money here is studying a superseded blueprint. Fees, scoring, retake rules and renewal terms come from the vendor’s own certification pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Objectives, exam codes, fees and retirement dates were taken from the vendor’s current certification pages and checked for the revision date shown there.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary
  salaryOutlook: {
    headline: '$130,390 median for computer network architects; $171,200 for IT managers (BLS, May 2024)',
    summary: "AZ-305 sits at the point where the Azure certification ladder stops mapping onto a single job title. \"Cloud solutions architect\" is not a BLS occupation, and the honest thing to say is that architects get counted in two different places depending on how their employer structures the role. Where architecture is a senior individual-contributor track — you design, you write the reference architecture, you advise, you do not hold a budget — the closest fit is Computer Network Architects (SOC 15-1241) at a $130,390 median. Where the architect also owns strategy, headcount or spend, people land in Computer and Information Systems Managers (SOC 11-3021) at $171,200. That $40,000 spread is not measurement noise; it is the actual fork in the road that AZ-305 holders face, and it is worth being deliberate about which side of it you are aiming for. Both occupations are projected to grow much faster than average, which is a genuine contrast with the administrator occupation behind AZ-104. There is a second thing worth saying plainly, because it undercuts a lot of certification marketing. The self-reported Skillsoft figure for Solutions Architect Expert holders sits *below* the figure the same survey reports for Azure Administrator Associate holders. That is not evidence that the expert credential pays less. It is evidence that a worldwide, self-selecting, self-reported salary survey is a weak instrument, that respondent mix varies wildly between credentials, and that you should not plan a career around it. We include it for completeness and label it accordingly. The realistic case for AZ-305 is not a salary table at all: it is that it is the credential recruiters filter on for architect-titled roles, that Microsoft partner organisations need certified architects to hold their designations, and that the design vocabulary it forces you to learn — Well-Architected Framework pillars, Cloud Adoption Framework landing zones, RPO and RTO as numbers rather than adjectives — is the vocabulary senior stakeholders actually use.",
    rows: [
      { label: 'Median annual wage — computer network architects (SOC 15-1241)', value: '$130,390', note: 'BLS Occupational Outlook Handbook, May 2024. The closest BLS occupation for a senior individual-contributor cloud architect.' },
      { label: 'Median annual wage — computer and information systems managers (SOC 11-3021)', value: '$171,200', note: 'BLS OOH, May 2024. Where architects who also own budget, strategy or headcount are typically counted.' },
      { label: 'Projected growth, computer network architects, 2024-2034', value: '12% (much faster than average)', note: 'BLS OOH, with about 11,200 openings a year and employment rising from 179,200 in 2024.' },
      { label: 'Median annual wage — all computer and IT occupations', value: '$105,990', note: 'BLS OOH occupational group, May 2024. Both architect occupations sit well above the group median.' },
      { label: 'Self-reported average, Azure Solutions Architect Expert holders', value: '$82,280', note: 'Skillsoft "top-paying Microsoft certifications" material from its IT Skills and Salary survey (2025) — worldwide, self-reported, NOT government data. Note it sits below the same survey\'s figure for Azure Administrator Associate holders, which is a good illustration of why self-selecting worldwide surveys should not be used for US salary planning.' }
    ],
    growth: '12% projected growth 2024-2034 for computer network architects and 15% for computer and information systems managers — both much faster than average (BLS OOH)',
    source: { label: 'BLS Occupational Outlook Handbook — Computer Network Architects', url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-network-architects.htm' }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'No official pass rate — and the expert-level reputation is anecdote, not data',
    summary: "Microsoft publishes no pass rate for AZ-305, has never published one for any certification exam, and releases no attempt counts or score distributions. AZ-305 attracts an unusual amount of pass-rate folklore because it is expert-tier and because it feels qualitatively different from the associate exams — but a widely repeated impression is still not a measurement, and putting a number in a table would give it a credibility it has not earned. Here is what is actually true and actually useful. The pass mark is 700 on a 1-1,000 scale and Microsoft states explicitly that this is a scaled score which may not equal 70% of the available points, because candidates receive question sets of differing difficulty. There is no penalty for guessing. An unidentifiable subset of items on your form is unscored pilot content. AZ-305 also has a structural feature that makes score prediction genuinely harder than on AZ-104: case studies carry disproportionate weight. A case study block presents an existing environment, a set of business requirements and a set of technical constraints across several tabs, then attaches multiple questions to it. Misreading one requirement in the scenario can cost you three or four linked questions at once, which is why candidates who feel they \"knew the material\" sometimes fail. The corollary is that the reverse is also true — reading the requirements tab properly can win you a whole block. Your score report gives one overall number plus a bar chart of relative strength across the four design areas, and Microsoft is explicit that those bars cannot be summed or read as percentages because the areas contain different numbers of questions. On an exam this heavily weighted toward infrastructure design (30-35%), a weak bar in a small area matters much less than most candidates assume.",
    caveat: "There is no official AZ-305 pass rate and there never has been. Every figure you will find is a training provider's marketing or a poll of self-selecting forum users. Note also a prerequisite that changes the economics of failure here: to earn the Microsoft Certified: Azure Solutions Architect Expert certification you must already hold the Microsoft Certified: Azure Administrator Associate certification. Passing AZ-305 without that prerequisite gives you a passed exam and no certification. The retake ladder is the standard one — 24 hours after a first failure, then 14 days between every subsequent attempt, five attempts maximum in the 12 months following your first sitting — and the full USD $165 is charged every time. Verified against the Microsoft AZ-305 study guide, the Azure Solutions Architect Expert certification page, the exam scoring page and the exam retake policy, 2026-08-04.",
    source: { label: 'Microsoft Learn — Exam scoring and score reports', url: 'https://learn.microsoft.com/en-us/credentials/certifications/exam-scoring-reports' }
  },

  // P0-3  Study plan
  studyPlan: {
    summary: "Read the April 2026 objective list and count the verbs, because they tell you everything about how to study. Every single one is \"recommend\", \"design\", \"specify\" or \"evaluate\". There is not one \"configure\", \"deploy\" or \"create\" anywhere on the AZ-305 blueprint. That is the exact inverse of AZ-104, and it means the study method that got you through AZ-104 will actively mislead you here. You are not being asked whether you can build a hub-and-spoke network; you are being asked to choose between hub-and-spoke and Virtual WAN given a stated bandwidth requirement, a stated compliance constraint and a stated budget. Lab time is still valuable — you cannot recommend Azure SQL Managed Instance over Azure SQL Database credibly if you have never touched either — but the marginal hour is better spent on comparison than on construction. The plan below assumes you already hold Azure Administrator Associate, because Microsoft requires it for the certification, and it therefore assumes you know what the services are. Budget 70 to 100 hours. That is fewer than AZ-104 in raw hours but the hours are harder, because the material is a decision matrix rather than a procedure list. Two disciplines run through every week. First, learn the Azure Well-Architected Framework's five pillars — reliability, security, cost optimisation, operational excellence, performance efficiency — as a lens you apply to every scenario, because the exam is essentially a Well-Architected assessment in question form. Second, get numeric about business continuity: RPO and RTO are quantities on this exam, and the difference between a four-hour RTO and a fifteen-minute RTO is the difference between two different answers.",
    totalHours: '70-100 hours',
    weeks: [
      {
        label: 'Week 0 — framing',
        focus: 'Confirm the prerequisite and install the design lens before touching services',
        tasks: [
          'Confirm your Azure Administrator Associate certification is current — it is a hard prerequisite for the Solutions Architect Expert certification, not a suggestion',
          'Work the Well-Architected Framework learning path and be able to name the five pillars and the tension between them without prompting',
          'Read the Cloud Adoption Framework landing zone conceptual material — management group hierarchy, subscription vending, policy-driven governance',
          'Take the free official Practice Assessment cold for a baseline across the four design areas',
          'Read the change log on the study guide: the current blueprint is "Skills measured as of April 17, 2026" and the audience profile itself was revised'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Weeks 1-2',
        focus: 'Design infrastructure solutions (30-35%) — the heaviest area, so start here',
        tasks: [
          'Build a decision table for compute: when VMs, when Virtual Machine Scale Sets, when App Service, when Container Apps, when AKS, when Functions, when Batch. Write the deciding constraint in each cell',
          'Do the same for application architecture: Service Bus vs Event Grid vs Event Hubs vs Queue Storage, and API Management vs direct exposure, and Azure Cache for Redis vs Front Door caching',
          'Learn the migration tooling as a decision set: Azure Migrate, Database Migration Service, Data Box, AzCopy, and which Cloud Adoption Framework phase each belongs to',
          'Network design at recommendation level: hub-and-spoke vs Virtual WAN, ExpressRoute vs site-to-site VPN vs both, Front Door vs Traffic Manager vs Application Gateway vs Load Balancer — global vs regional and layer 4 vs layer 7 decide most of these'
        ],
        hours: '12-15 hrs/week'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Design identity, governance, and monitoring solutions (25-30%)',
        tasks: [
          'Design authentication: Microsoft Entra ID, hybrid identity options, B2B vs B2C, Conditional Access as a design control rather than a checkbox',
          'Design authorization: RBAC scope strategy, custom roles, Privileged Identity Management, managed identities over service principals with secrets',
          'Design governance: management group hierarchy for a stated org shape, subscription strategy, Azure Policy and initiatives, resource tagging strategy tied to cost attribution',
          'Design logging and monitoring: what goes to Log Analytics, what goes to a storage account for retention, what goes to Event Hubs for a third-party SIEM, and how you route logs across subscriptions and tenants',
          'Practise the recurring question shape: "recommend a solution that minimises administrative effort" almost always means a managed or built-in capability, not a custom one'
        ],
        hours: '12-15 hrs/week'
      },
      {
        label: 'Week 5',
        focus: 'Design data storage solutions (20-25%)',
        tasks: [
          'Relational: Azure SQL Database vs Managed Instance vs SQL on a VM vs PostgreSQL/MySQL flexible server — decided by compatibility surface, control and operational overhead',
          'Service and compute tiers: DTU vs vCore, serverless vs provisioned, Hyperscale, and when elastic pools are the answer',
          'Semi-structured and unstructured: Cosmos DB API choice and consistency levels, Blob Storage tiers and lifecycle, Azure Files vs Blob vs NetApp Files',
          'Data integration and analysis: Data Factory, Synapse, Fabric, Stream Analytics — at recommendation level only',
          'Build one page that maps every storage option to cost, durability and latency, because the exam trades those three off constantly'
        ],
        hours: '12-15 hrs'
      },
      {
        label: 'Week 6',
        focus: 'Design business continuity solutions (15-20%) — the area candidates under-prepare',
        tasks: [
          'Get numeric: for every option, know roughly what RPO and RTO it delivers. Azure Backup, Site Recovery, zone-redundant vs geo-redundant storage, SQL auto-failover groups, Cosmos DB multi-region writes',
          'Design HA for compute: availability sets vs availability zones vs multi-region active-active, and the cost of each',
          'Design HA for relational data: read replicas, failover groups, and what a business-critical tier actually buys',
          'Practise reading a stated recovery objective out of a paragraph of prose and eliminating options that cannot meet it — this single skill decides most of this domain'
        ],
        hours: '12-15 hrs'
      },
      {
        label: 'Week 7',
        focus: 'Case-study rehearsal and consolidation',
        tasks: [
          'Work through published Azure Architecture Center reference architectures and, for each, write down which requirement forced each service choice',
          'Rehearse case-study technique: read the requirements tab twice and the technical constraints tab twice before opening question one, and note that you cannot return to a case study once you move past it',
          'Re-take the official Practice Assessment and compare against your Week 0 baseline; spend remaining hours only on the weakest two design areas',
          'Do a timed dry run of the interface in the free exam sandbox at aka.ms/examdemo so no format is new on the day'
        ],
        hours: '10-14 hrs'
      }
    ],
    variants: [
      { label: 'Straight from a recent AZ-104 pass', detail: 'Seven to eight weeks is realistic and your service knowledge transfers directly. The work is retraining your instinct from "how do I build this" to "which of these should be built". Spend disproportionate time on business continuity and data storage, which AZ-104 barely touches.' },
      { label: 'Practising architect without the AZ-104 certification', detail: 'You may find AZ-305 itself straightforward and still end up with nothing, because the Azure Administrator Associate certification is a hard prerequisite for the expert certification. Sit AZ-104 first even if you find it beneath your level — passing AZ-305 alone earns a passed exam and no credential.' },
      { label: 'Coming from AWS or GCP architecture', detail: 'Add three weeks. Your architectural reasoning transfers almost entirely; the service-name mapping does not, and the governance model — management groups, subscriptions, Azure Policy, Entra tenancy — has no clean AWS or GCP equivalent. Front-load the identity and governance domain.' },
      { label: 'Working full-time', detail: 'Stretch to fourteen weeks at 6-7 hrs/week. AZ-305 rewards spaced repetition of decision tables more than most exams, because what you are building is recall of trade-offs rather than procedural fluency.' }
    ]
  },

  // P0-4  Prep strategies
  prepStrategies: {
    summary: "AZ-305 punishes people who study it like an associate exam. These are the techniques that shift a design-tier score.",
    items: [
      {
        title: 'Build decision tables, not service summaries',
        detail: "A summary of what Azure Front Door does will not answer an AZ-305 question, because the question already assumes you know. What you need is a table whose rows are candidate services and whose columns are the constraints the exam uses: global vs regional, layer 4 vs layer 7, cost, RPO/RTO, administrative effort, compliance boundary. Build one per domain and populate it by hand — the act of filling in the cells is the learning. When you sit the exam you will be running exactly this lookup, and the candidates who fail are the ones running a definition lookup instead."
      },
      {
        title: 'Treat the Well-Architected Framework as the answer key',
        detail: "Almost every AZ-305 stem is a Well-Architected trade-off wearing a costume. \"Must minimise cost\" is the cost-optimisation pillar; \"must survive a regional outage\" is reliability; \"with the least administrative effort\" is operational excellence. Learn the five pillars and, more importantly, learn where they conflict, because the exam's favourite construction is a scenario where two pillars pull in opposite directions and the stem tells you which one wins. Once you can name the pillar a question is testing, the option set usually collapses to two."
      },
      {
        title: 'Make RPO and RTO numeric',
        detail: "Business continuity is 15-20% of the exam and it is the domain where vague knowledge fails hardest, because the questions state recovery objectives as numbers. \"Recovery point objective of 15 minutes\" eliminates a nightly backup outright, regardless of how good the rest of the option looks. Build a cheat sheet of every backup, replication and redundancy option against the approximate RPO and RTO it delivers, then practise eliminating on the number before you evaluate anything else."
      },
      {
        title: 'Work case studies backwards from the requirements tab',
        detail: "Case studies attach several questions to one scenario, so a misread requirement compounds. The technique that works is to read the requirements and technical-constraints tabs twice, write the three or four hard constraints on your whiteboard as a list, and only then open the first question. Every option you evaluate gets checked against the list. Remember the navigation rule: once you move past the case study you cannot return to it, so do not plan to \"come back and re-read\"."
      },
      {
        title: 'Read the Azure Architecture Center like a textbook',
        detail: "Microsoft's Architecture Center publishes reference architectures with the design rationale written out — why this messaging service, why this redundancy tier, why this network topology. That rationale is precisely what AZ-305 tests, and it is free. Read two or three architectures a week and, for each, cover the rationale and try to reconstruct it from the requirements. This is the single most under-used free resource for this exam."
      },
      {
        title: 'Use the in-exam Microsoft Learn panel for facts, never for judgement',
        detail: "AZ-305 is an expert role-based exam so the Learn panel is available: the full learn.microsoft.com domain minus Q&A, practice assessments and your profile, in a resizable split screen, with the clock running. It is excellent for confirming a service limit or a tier's feature boundary. It is useless for a design question, because no document tells you which trade-off this fictional company should make. Budget two or three lookups on a 120-minute exam and no more."
      },
      {
        title: 'Learn the cost dimension properly',
        detail: "Cost is the constraint AZ-305 uses most often and the one candidates study least. You do not need to memorise prices, but you do need the ordinal relationships: reserved instances and savings plans versus pay-as-you-go, spot versus on-demand, cool and archive tiers versus hot, zone-redundant versus geo-redundant, serverless versus provisioned, and the fact that ExpressRoute has a fixed monthly cost that a site-to-site VPN does not. Open the Pricing Calculator and price two competing designs for the same workload once — it fixes the ordering permanently."
      },
      {
        title: 'Plan the annual renewal and stack the prerequisite renewal too',
        detail: "Azure Solutions Architect Expert renews every 12 months via a free unproctored assessment on Microsoft Learn, with the window opening six months before expiry. What people forget is that the prerequisite matters here: keeping your architect credential current is a separate task from keeping Azure Administrator Associate current, and both sit in your dashboard with their own dates. Put both reminders in at the ten-month mark. Letting the expert credential lapse means re-sitting AZ-305 at USD $165."
      }
    ]
  },

  // P0-5  Study-resource comparison
  resourceComparison: {
    summary: "The resource market for AZ-305 is thinner and more variable in quality than for AZ-104, because design content is harder to produce than click-through demos. The free official material is unusually strong here — the Architecture Center in particular — and several paid options add less than their price suggests.",
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn AZ-305 paths (official)', values: ['Free', 'Five learning paths including the architect design prerequisites path', 'The blueprint. Updated when the exam is updated, which is worth more on an exam that changed on 17 April 2026 than any third-party polish.'] },
      { label: 'Azure Architecture Center (official)', values: ['Free', 'Reference architectures with written design rationale', 'The best free resource for this exam and the most under-used. The rationale sections are effectively worked answers to AZ-305 questions.'] },
      { label: 'Azure Well-Architected Framework learning path (official)', values: ['Free', 'Six modules', 'The lens the entire exam is built on. Do this before the domain content, not after.'] },
      { label: 'Microsoft official Practice Assessment for AZ-305', values: ['Free', 'Unlimited timed question bank on Microsoft Learn', 'Per-domain diagnostics across the four design areas. Its weakness is that it under-represents case studies, so do not read a high score as readiness.'] },
      { label: "John Savill's Technical Training — AZ-305 study cram (YouTube)", values: ['Free', 'Long-form whiteboard video', 'The best free video for this exam. Savill is a Microsoft MVP and his design-trade-off whiteboards are closer to the exam\'s actual reasoning than most paid courses.'] },
      { label: 'Scott Duffy AZ-305 course (Udemy)', values: ['~$15-30 on sale, $90+ list', 'Video course + quizzes', 'A structured narrative through the four domains for candidates who will not self-direct. Verify the last-updated date before buying — the blueprint moved in April 2026.'] },
      { label: 'MeasureUp AZ-305 practice test (official Microsoft practice test partner)', values: ['~$99-129 list, frequently discounted', 'Practice test in certification and study modes with explanations', 'The explanations are the product. Most justifiable after a first failure, when you need unfamiliar scenarios rather than more repetitions of the ones you already know.'] },
      { label: 'Whizlabs AZ-305 practice tests', values: ['~$20-30', 'Question bank', 'A cheap volume supplement. Design-question quality is materially harder to get right than fact-recall quality, and it shows — cross-check anything that contradicts the Architecture Center.'] },
      { label: 'Pluralsight / A Cloud Guru', values: ['~$29-45/month', 'Video library plus sandboxes', 'Reasonable if you already subscribe. The sandboxes matter less for AZ-305 than for AZ-104, because this exam does not ask you to build.'] },
      { label: 'Microsoft official instructor-led course AZ-305T00', values: ['Typically $1,500-2,500 through a Microsoft Learning Partner', 'Four-day instructor-led class', 'Employer-funded territory. The value is discussion of trade-offs with an experienced instructor, which is genuinely hard to get from self-study — but the material itself is free.'] },
      { label: 'Free exam sandbox (aka.ms/examdemo)', values: ['Free', 'Interactive demo of the exam interface', 'Rehearsing case-study navigation before the day. Costs nothing and removes the format surprise that catches expert-exam candidates out.'] }
    ],
    footnote: 'Prices checked 2026-08-04 and expressed as USD list prices before regional adjustment, sales, employer discounts or student pricing. Udemy list prices are close to fictional; the sale price is the real price. We take no commission from any provider listed and the ordering reflects our editorial judgement of usefulness for this specific exam, not any commercial relationship.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary: "AZ-305 has a distinctive failure profile: capable practitioners who study the wrong way, and well-prepared candidates who trip over the certification rules rather than the exam.",
    items: [
      {
        mistake: 'Sitting AZ-305 without holding Azure Administrator Associate',
        fix: "This is the most expensive mistake on this page. The Microsoft Certified: Azure Solutions Architect Expert certification lists the Microsoft Certified: Azure Administrator Associate certification as a prerequisite. Pass AZ-305 without it and you have a passed exam and no certification — the credential does not issue until the prerequisite is in place. Check your Microsoft Learn certification dashboard before you book, and check that the prerequisite has not silently expired, because associate certifications lapse after 12 months."
      },
      {
        mistake: 'Studying AZ-305 the way you studied AZ-104',
        fix: "Every verb on the AZ-305 blueprint is recommend, design, specify or evaluate. There is not one configure or deploy. Building things in a subscription is useful background but it is not the exam, and hours spent perfecting a deployment are hours not spent on the comparison tables the exam actually tests. Flip your study output from \"I built it\" to \"I can state the constraint under which I would choose it\"."
      },
      {
        mistake: 'Assuming 700 out of 1,000 means 70% of the questions',
        fix: "It does not. Microsoft states that the score is scaled and may not equal 70% of the available points, because forms differ in difficulty. This matters more on AZ-305 than elsewhere because case studies bundle several questions to one scenario, so your intuitive sense of \"how many did I get\" is unusually unreliable. Stop counting and answer the next question."
      },
      {
        mistake: 'Opening a case study question before reading the constraints',
        fix: "Case studies attach multiple questions to one multi-tab scenario, and you cannot return to them once you move past. Read the requirements and technical-constraints tabs twice, write the hard constraints down, then start. A single misread requirement — a stated RTO, a data-residency rule, a stated maximum spend — can cost you the entire block rather than one mark."
      },
      {
        mistake: 'Treating business continuity as the small domain you can skip',
        fix: "It is 15-20% and it is the most mechanically scorable domain on the exam, because the answers turn on numbers rather than judgement. Know the approximate RPO and RTO of every backup, replication and redundancy option and you can eliminate two options in most of these questions before reading them properly. Candidates who spend six weeks on infrastructure design and one evening on business continuity leave the easiest marks on the table."
      },
      {
        mistake: 'Studying against material recorded before 17 April 2026',
        fix: "The current blueprint is \"Skills measured as of April 17, 2026\" and the certification page confirms the English version was updated on that date, with the audience profile itself revised. Third-party courses lag. Read the change log on the official study guide and cross-check every objective flagged as changed against the current Microsoft Learn module, regardless of what your video course says."
      },
      {
        mistake: 'Letting the expert certification — or the prerequisite — lapse',
        fix: "Azure Solutions Architect Expert renews annually via a free unproctored assessment on Microsoft Learn, with the window opening six months before expiry. Two dates matter, not one: the expert credential and the Azure Administrator Associate prerequisite each carry their own expiry. Put both reminders in at the ten-month mark. Missing the expert renewal means re-sitting AZ-305 at USD $165."
      },
      {
        mistake: 'Chasing depth on services the exam only asks you to recommend',
        fix: "AZ-305 asks you to recommend a data-integration solution, not to build a Synapse pipeline. Candidates lose weeks going deep on Fabric, Synapse or AKS internals that the exam never reaches, because depth feels like progress. Use the objective bullets as a scope fence: if the bullet says \"recommend a solution for data integration\", you need to know which service fits which shape of problem, and nothing beneath that."
      },
      {
        mistake: 'Expecting the in-exam Learn panel to rescue a design question',
        fix: "The panel is available on this exam and it is good for a service limit or a tier boundary. It cannot tell you which trade-off a fictional company should make, and the clock does not stop while you read. Candidates who plan to look things up finish with unanswered questions. Use it two or three times, deliberately."
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary: "AZ-305 is an expert role-based exam and it uses Microsoft's full item library, but the distribution feels different from AZ-104 in a way that matters. Where the administrator exam leans on hot-area portal screens and command syntax, the architect exam leans on prose scenarios and case studies — because you are being assessed on judgement rather than execution. Expect standard multiple choice and multiple response, drag-and-drop and build-list, hot area, repeated-scenario yes/no sets, and — reliably, in our experience and consistent with how Microsoft describes expert-tier delivery — at least one case study block. Microsoft does not publish a fixed question count for AZ-305 and it varies by form; the published duration for associate and expert role-based exams is 100 minutes without a lab and 120 minutes with one, with seat time of 120 or 140 minutes respectively, and you are told which you have when the exam launches. Two rules dominate your tactics. First, navigation: within a case study the scenario tabs stay available while you work its questions, but once you move past the block you cannot return, and taking an unscheduled break through the exam interface ends access to everything you have already seen. Microsoft does permit breaks during case studies, but the navigation consequence is the same, so plan not to need one. Second, the Microsoft Learn panel is available because this is an expert role-based exam. It excludes Q&A, practice assessments and your signed-in profile, it blocks navigation off the learn.microsoft.com domain, and it grants no extra time. Rehearse all of this free at aka.ms/examdemo. Note also that most items cover generally available features; preview features appear only where commonly used, so you are not expected to track every announcement.",
    types: [
      { name: 'Scenario multiple choice (single answer)', share: 'The largest share of items', detail: 'A paragraph of business context ending in a recommendation request. Typically two options are technically capable and one constraint in the stem — cost, RTO, administrative effort, data residency — decides between them.' },
      { name: 'Multiple response', share: 'Common', detail: 'Select the components of a design, or the set of services that together satisfy a requirement. Treat each option as an independent judgement; do not assume a tidy number of correct answers.' },
      { name: 'Case study', share: 'Expect at least one block', detail: 'Multi-tab scenario — existing environment, business requirements, technical requirements, sometimes existing problems — with several questions attached. The defining feature of this exam. Read the constraint tabs twice before question one; you cannot return once you move past.' },
      { name: 'Drag and drop / build list', share: 'Frequent', detail: 'Match requirements to services, place components into a topology, or order the phases of a migration against the Cloud Adoption Framework. Distractor items are routinely included.' },
      { name: 'Hot area', share: 'Occasional', detail: 'A design diagram or configuration summary with drop-downs to complete. Used less than on AZ-104 because there are fewer portal screens to reason about at design level.' },
      { name: 'Repeated-scenario yes/no sets', share: 'Occasional', detail: 'One scenario, three proposed solutions, judged independently. All three may be correct or all three wrong. You cannot return to a previous statement in the set.' },
      { name: 'Interactive lab', share: 'Rare on a design exam but possible', detail: 'Microsoft does not publish which forms include labs and can remove them at short notice for outages. If your form has one, exam time is 120 minutes rather than 100.' },
      { name: 'Mark for review + review screen', share: 'Available within a section', detail: 'Flag and return within the section you are in. Once you submit a section or leave a case study, the flag no longer helps you.' }
    ],
    samples: [
      {
        prompt: "A financial services company runs a customer-facing application in Azure. Regulation requires that the application continue operating with a recovery time objective of 15 minutes if the primary Azure region becomes unavailable, and that customer data never leaves the country. The company operates in a single country with two Azure regions available. Cost should be minimised subject to those requirements. Which approach should you recommend?",
        options: [
          'A. Deploy to a single region across three availability zones and use zone-redundant storage',
          'B. Deploy an active-passive design across the two in-country regions with Azure Site Recovery replication and a Traffic Manager profile',
          'C. Deploy an active-active design across the two in-country regions with Azure Front Door and geo-redundant storage',
          'D. Deploy to a single region and use geo-redundant storage replicating to a paired region in a neighbouring country'
        ],
        answer: 'B',
        explanation: "Three constraints are stated and each eliminates something. The 15-minute RTO plus \"if the primary region becomes unavailable\" rules out A outright — availability zones protect against datacenter loss inside a region, not against losing the region. Data residency rules out D, because the paired region is in another country; this is a favourite AZ-305 trap because geo-redundant storage sounds like the responsible choice and quietly violates a residency requirement. That leaves B and C, and the deciding word is cost. C is active-active, which meets the RTO comfortably but runs full duplicate capacity continuously. B is active-passive with replication, which can meet a 15-minute RTO while paying for standby rather than duplicate production. When a stem gives you a recovery objective and then says minimise cost, it is asking for the cheapest design that clears the objective — not the most resilient one available."
      },
      {
        prompt: "An enterprise has 14 subscriptions across three business units. Security requires that no virtual machine in any subscription may be created in a region outside the European Union, that the rule cannot be bypassed by subscription owners, and that adding a fifteenth subscription must not require anyone to reapply the control. What should you recommend?",
        options: [
          'A. An Azure Policy definition with a deny effect assigned at each of the 14 subscriptions',
          'B. An Azure Policy definition with a deny effect assigned at a management group containing all subscriptions',
          'C. A ReadOnly resource lock applied to each subscription',
          'D. A custom RBAC role that excludes virtual machine write permissions in non-EU regions'
        ],
        answer: 'B',
        explanation: "Three requirements again, and the third one is the discriminator. Policy assigned at a management group is inherited by every subscription beneath it, including subscriptions added later, which satisfies \"adding a fifteenth must not require reapplying the control\". A would work today and fail the moment subscription fifteen appears — it is the correct mechanism at the wrong scope, which is the most common wrong answer shape in this domain. C is the wrong tool entirely: a ReadOnly lock would block all changes, not just non-EU deployments, and would break normal operations. D misunderstands RBAC, which grants or denies actions on resource types and scopes but does not evaluate a property value such as the region in a deployment request — that is exactly the gap Azure Policy exists to fill. Whenever a stem contains \"cannot be bypassed by owners\" and \"must apply to future subscriptions\", the answer is almost always policy at management-group scope."
      },
      {
        prompt: "A retailer is migrating a 4 TB SQL Server 2016 database to Azure. The application uses SQL Server Agent jobs, cross-database queries and CLR assemblies. The team wants to eliminate operating-system patching and wants the smallest possible code change. Which target should you recommend?",
        options: [
          'A. Azure SQL Database, single database, Hyperscale tier',
          'B. Azure SQL Managed Instance, Business Critical tier',
          'C. SQL Server on an Azure virtual machine',
          'D. Azure Database for PostgreSQL flexible server'
        ],
        answer: 'B',
        explanation: "This is the canonical AZ-305 relational-migration question and the three named features are the whole point. SQL Server Agent jobs, cross-database queries and CLR are all supported by Azure SQL Managed Instance and are precisely the instance-scoped features that Azure SQL Database does not provide, which eliminates A regardless of how well Hyperscale handles 4 TB. C would support everything but fails the explicit requirement to eliminate OS patching — infrastructure as a service keeps you responsible for the operating system. D is a different database engine entirely and would require rewriting the application, which contradicts \"smallest possible code change\". The tier choice in B is secondary here; the exam is testing whether you can recognise the instance-scoped feature set. Learn those three features as a trigger phrase and this question type becomes automatic."
      }
    ],
    note: "Samples are written by our editors to illustrate the published AZ-305 skills outline (skills measured as of 17 April 2026). They are not real exam items, are not drawn from any question bank, and no live Microsoft exam content is reproduced anywhere on this page. Microsoft's free exam sandbox at aka.ms/examdemo is the authoritative place to rehearse the interface, including case-study navigation."
  },

  // P0-8  Exam-day guide
  examDay: {
    summary: "AZ-305 is delivered through Pearson VUE, at a test centre or online via OnVUE, and the choice deserves more thought here than on any other Azure exam. The reason is case studies. A case study gives you several tabs of requirements and several linked questions, and being able to write the hard constraints down in a list transforms your accuracy on the block. At a test centre you get a physical erasable whiteboard or laminated sheet and a marker, provided and collected. Under OnVUE you get nothing to write on unless a physical whiteboard was explicitly approved on your booking — no paper of any kind, and the room is scanned before you start. For an exam whose central skill is holding four constraints in mind while evaluating four options, that is a real handicap, and we would steer most candidates toward a test centre for AZ-305 specifically even though we are neutral about it for the fundamentals exams. Plan around seat time rather than exam time. Microsoft publishes 100 minutes of exam time for associate and expert role-based exams without labs and 120 minutes for those that may contain one; seat time — check-in, NDA, instructions, exam and survey — is 120 or 140 minutes respectively, and you learn which applies when the exam launches. Arrive or start OnVUE check-in thirty minutes early. OnVUE check-in can consume twenty minutes when the queue is long, and a late check-in forfeits the USD $165.",
    bring: [
      'Government-issued photo ID whose name matches your Microsoft Learn certification profile exactly — including middle initials and hyphenation',
      'A second form of ID for the test centre if your primary is not a passport or driving licence; your Pearson VUE confirmation states the requirement for your country',
      'Your Pearson VUE confirmation and exam registration number',
      'At a test centre: nothing else — everything you carry in goes into a locker, and the provided whiteboard is waiting at the workstation',
      'For OnVUE: the phone you used to book, for the check-in photo upload; it goes out of reach once check-in completes',
      'For OnVUE: a physical whiteboard and erasable marker only if explicitly permitted on your booking — verify rather than assume'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker at a test centre, out of the room entirely for OnVUE',
      'All personal paper, notebooks, printed architecture diagrams and sticky notes; nothing handwritten may be visible in an OnVUE room',
      'Second monitors — OnVUE requires a single display and an unplugged monitor still on the desk is not acceptable',
      'Bags, coats, hats and non-religious headwear',
      'Food and drink unless covered by an approved accommodation',
      'Other people — an OnVUE proctor will terminate the session if anyone else is seen or heard in the room'
    ],
    timeline: [
      { time: '2-3 days before', detail: 'If testing online, run the OnVUE system test on the exact machine, network and room you will use. Corporate laptops with endpoint-security agents are the most common launch failure; a personal machine is safer.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin OnVUE check-in. Check-in is not the exam start; arriving late can forfeit the booking and the fee.' },
      { time: 'Check-in', detail: 'ID verification and photograph. OnVUE adds a 360-degree room scan including the desk surface, underneath it and the walls. Test centres add a locker, a pocket check and sometimes a palm-vein scan.' },
      { time: 'First 5 minutes', detail: 'NDA and instructions — inside seat time, outside exam time, so read them properly. The launch screen tells you your exam duration and therefore whether your form may include a lab.' },
      { time: 'First 2 minutes of the exam', detail: 'Check the question count and note whether a case study appears in the section list. Decide immediately whether to take the case study first while fresh or last against a known clock, and set a per-question pace for the rest.' },
      { time: 'On reaching a case study', detail: 'Read the requirements and technical-constraints tabs twice and write the hard constraints on your whiteboard before opening question one. Answer every question in the block before moving on — you cannot return.' },
      { time: 'Throughout', detail: 'Mark for review anything costing more than 90 seconds and move. Avoid unscheduled breaks through the exam interface: taking one ends your access to every question already seen.' },
      { time: 'Final 10 minutes', detail: 'Clear your marked items and confirm nothing is blank. There is no guessing penalty, so an answered question always beats an empty one.' },
      { time: 'On submission', detail: 'A short survey, then a preliminary pass or fail on screen within a few minutes.' }
    ],
    rules: [
      'The pass mark is 700 on a 1-1,000 scale and it is scaled — it does not correspond to 70% of the questions.',
      'No penalty for wrong answers. Never leave an item blank.',
      'The Microsoft Learn panel is available because AZ-305 is an expert role-based exam. It covers learn.microsoft.com but excludes Q&A, practice assessments and your signed-in profile, blocks navigation to other domains, and grants no additional time.',
      'Ctrl+F (Command+F on Mac) searches only within the Learn panel page you are viewing, not the exam; closing the panel resets your search history.',
      'You cannot return to a case study or a completed section once you have moved past it.',
      'Breaks are permitted during case studies, but any unscheduled break taken through the exam interface ends access to all previously seen questions.',
      'No personal scratch paper. Test centres supply and collect an erasable whiteboard or laminated sheet; OnVUE candidates get nothing to write on unless a physical whiteboard was explicitly approved on the booking.',
      'If the exam is not offered in your preferred language you may request an additional 30 minutes — AZ-305 is offered in English, Japanese, Simplified and Traditional Chinese, Korean, German, French, Spanish, Brazilian Portuguese and Italian. Requests must be made when booking.',
      'Accommodations for assistive devices or extra time must be requested and approved by Microsoft before scheduling.',
      'Passing AZ-305 does not by itself award the certification: the Azure Administrator Associate certification must already be held.'
    ],
    afterwards: "You get a preliminary pass or fail on screen within minutes, and the official result posts to your Microsoft Learn certification profile, usually within a few hours. The score report shows one overall number against the 700 threshold plus a bar chart of relative performance across the four design areas; Microsoft states explicitly that those bars cannot be added together or read as percentages, because the areas hold different numbers of questions. If you passed and already hold Azure Administrator Associate, the Solutions Architect Expert certification issues automatically and appears in your dashboard with a 12-month validity and a free renewal assessment window opening at the six-month mark. If you passed but the prerequisite is missing or lapsed, the exam result is recorded and the certification is not awarded until you resolve it — so check this before you celebrate. If you failed, the retake ladder applies: 24 hours before a second attempt, 14 days between each attempt after that, five attempts maximum in the 12 months from your first sitting, and USD $165 charged each time. Use the four-area chart to aim the retake, and change your question source rather than repeating the bank you have already memorised — on a design exam, unfamiliar scenarios are the point."
  }
};

export default data;
