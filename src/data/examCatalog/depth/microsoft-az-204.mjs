// Depth content for: microsoft-az-204
//
// EDITORIAL NOTE — THIS EXAM IS RETIRED.
// Microsoft's official AZ-204 study guide carries the warning: "This exam was retired
// on July 31, 2026, at 11:59 PM Central Standard Time." The Microsoft Certified: Azure
// Developer Associate certification page carries a broader warning: "This certification
// AND the renewal assessment are retired" — meaning existing holders cannot renew it
// either. The successor path for the developer role is Exam AI-200, leading to
// Microsoft Certified: Azure AI Cloud Developer Associate (USD $165, 120 minutes,
// currently English only, no practice assessment published yet).
//
// Because AZ-204 can no longer be booked or sat, we have deliberately OMITTED
// studyPlan, prepStrategies, resourceComparison and examDay. Publishing an eight-week
// study plan and a priced resource table for an exam nobody can take would be
// actively misleading. What remains is the historical record, the career context that
// still applies to the people who hold the credential, and honest guidance on what to
// do next.
//
// Sources: learn.microsoft.com/credentials (AZ-204 study guide with retirement warning
// and "Skills measured as of January 14, 2026"; Azure Developer Associate certification
// page, Last Updated 01/14/2026, with certification + renewal retirement warning; Azure
// AI Cloud Developer Associate certification page showing Exam AI-200 at USD $165 /
// 120 minutes; exam scoring and score reports; exam retake policy), bls.gov
// Occupational Outlook Handbook (May 2024 wage data), Skillsoft IT Skills and Salary
// material (2025). All checked 2026-08-04.
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
    headline: '$133,080 median for software developers (BLS, May 2024) — but AZ-204 itself is no longer obtainable',
    summary: "The occupation behind AZ-204 is in excellent shape even though the exam is not. The credential mapped to software developers who build on Azure — Functions, App Service, Container Apps, Cosmos DB, Key Vault, Service Bus, API Management — and the honest Bureau of Labor Statistics occupation for that work is Software Developers (SOC 15-1252), reported at a median of $133,080 in May 2024. That is the highest-paying occupation behind any exam in the Azure family covered on this site, and unlike the administrator occupations it is projected to grow strongly: 15% from 2024 to 2034, much faster than the average for all occupations, with about 129,200 openings a year across the broader developer, QA analyst and tester group. Two things follow from that, and they pull in different directions. First, if you already hold the Azure Developer Associate credential, nothing about your market has weakened. The demand for people who can build production services on Azure is the same demand it was before Microsoft reorganised its certification catalogue, and a lapsed or retired credential does not un-teach you Container Apps and managed identities. Second, be realistic about what the badge itself was worth. Developer salaries are driven overwhelmingly by demonstrated shipped work, language depth and system-design ability; the certification functioned as a filter for recruiters and a procurement requirement for Microsoft partner organisations rather than as a pay lever. That is why the Skillsoft self-reported figure below sits *below* the BLS median for the occupation — the survey population skews toward infrastructure-adjacent and consulting roles rather than product engineering. Anyone weighing what to do next should be choosing between AI-200 and simply building things, not treating the retirement as a career problem.",
    rows: [
      { label: 'Median annual wage — software developers (SOC 15-1252)', value: '$133,080', note: 'BLS Occupational Outlook Handbook, May 2024 wage data. The occupation AZ-204 mapped to most directly.' },
      { label: 'Median annual wage — software developers, QA analysts and testers (combined group)', value: '$131,450', note: 'BLS OOH quick facts, 2024 median pay for the combined occupational group.' },
      { label: 'Employment, 2024 (combined group)', value: '1,895,500 jobs', note: 'BLS OOH, 2024 base-year employment.' },
      { label: 'Projected annual openings, 2024-2034', value: '~129,200 per year', note: 'BLS OOH, combined developer/QA/tester group.' },
      { label: 'Self-reported average, Microsoft Certified: Azure Developer Associate holders', value: '$100,998', note: 'Skillsoft "top-paying Microsoft certifications" material drawn from its IT Skills and Salary survey (2025) — worldwide, self-reported respondent data, NOT government statistics. Note it sits well below the US BLS developer median, which is a good illustration of why a worldwide self-reported survey and a US government wage series are not comparable.' }
    ],
    growth: '15% projected growth 2024-2034 for software developers, QA analysts and testers — much faster than average (BLS OOH)',
    source: { label: 'BLS Occupational Outlook Handbook — Software Developers, Quality Assurance Analysts, and Testers', url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'No official pass rate was ever published — and now no further attempts are possible',
    summary: "Microsoft never published a pass rate for AZ-204, for the same reason it publishes none for any of its certification exams: it does not release attempt counts, first-time pass percentages or score distributions. AZ-204 attracted more \"pass rate\" speculation than most Azure exams because it had a reputation as the hardest of the associate tier — a reputation built on the fact that it assumed at least two years of programming experience, expected proficiency with the Azure SDKs, and asked candidates to read code rather than describe architecture. That reputation may well have been deserved, but it was never a measurement, and we are not going to convert forum sentiment into a table row. For the historical record, the scoring model applied exactly as it does across the programme. The pass mark was 700 on a scale of 1 to 1,000, and Microsoft states explicitly that this is a scaled score which may not equal 70% of the available points, because candidates receive question sets of differing difficulty. There was no penalty for guessing. An unidentifiable subset of items on any form was unscored pilot content. Candidates received a preliminary pass or fail on screen within minutes and a score report showing relative strength across the five skill areas as a bar chart, with Microsoft explicit that those bars could not be summed or converted into a percentage. The retake ladder was the standard one — 24 hours after a first failure, 14 days between subsequent attempts, five attempts maximum in the 12 months after the first sitting, full USD $165 fee each time. None of that is actionable now; it is here because people arriving on this page mid-preparation deserve to understand what they were preparing for, and because the identical mechanics apply to AI-200.",
    caveat: "Microsoft published no pass rate for AZ-204 at any point, and the exam retired on 31 July 2026 at 11:59 PM CST, so no new data will ever exist. Any percentage you encounter for this exam is vendor marketing or a self-selecting poll. If you are researching AZ-204 because you were mid-preparation, the mechanics above carry over unchanged to Exam AI-200 (Azure AI Cloud Developer Associate), which is the successor for the developer role: 700/1,000 scaled, no guessing penalty, unscored pilot items, preliminary result on screen, and the same retake ladder at the same USD $165 fee. Verified against the Microsoft AZ-204 study guide retirement warning, the Azure Developer Associate certification page, the Azure AI Cloud Developer Associate certification page, the exam scoring page and the exam retake policy, 2026-08-04.",
    source: { label: 'Microsoft Learn — Study guide for Exam AZ-204 (retirement warning and skills measured)', url: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-204' }
  },

  // P0-6  Common mistakes
  // Reframed for a retired exam: the mistakes that matter now are about the transition,
  // not about how to revise for a paper nobody can sit.
  commonMistakes: {
    summary: "The mistakes worth warning about here are not study errors. AZ-204 cannot be booked. These are the errors people are actually making in August 2026 as they work out what the retirement means for them.",
    items: [
      {
        mistake: 'Buying an AZ-204 course or practice bundle in 2026',
        fix: "Check the retirement date before you pay. Several large training platforms still list AZ-204 courses, some with countdown-timer pricing, and the search results have not caught up with a retirement that only took effect on 31 July 2026. There is no sitting to book. If a provider is still selling AZ-204 exam preparation as a route to certification, that is a reason to distrust the provider, not a sign the exam is available. If you have already paid, most platforms have a refund window — use it."
      },
      {
        mistake: 'Assuming the certification you already hold has been revoked',
        fix: "It has not. A retired exam does not invalidate credentials already earned. Your Azure Developer Associate badge, transcript and certificate remain in your Microsoft Learn certification dashboard and remain verifiable by employers. What changes is the future: because Microsoft has retired the renewal assessment as well as the exam, the credential will run to its existing expiry date and cannot be extended. Download your certificate and transcript link now and put them somewhere you will find them in two years."
      },
      {
        mistake: 'Waiting for the renewal assessment window to open',
        fix: "It will not open. This is the detail most people miss, because it is unusual. The Azure Developer Associate certification page warns that the certification and the renewal assessment are both retired — not just the proctored exam. Under the normal model an associate certification expires after 12 months and you renew free via an unproctored online assessment on Microsoft Learn. That path is closed here. If your expiry date is approaching and you want a current developer credential, the action is to sit AI-200, not to wait."
      },
      {
        mistake: 'Treating AI-200 as AZ-204 with a new number',
        fix: "It is a different exam with a different centre of gravity. The Azure AI Cloud Developer Associate is assessed on developing containerized solutions on Azure, developing AI solutions using Azure data management services, connecting to and consuming Azure services, and securing, monitoring and troubleshooting Azure solutions. The overlap with AZ-204 is real — containers, messaging, storage, security, monitoring — but the AI and vector-database material is new, and Microsoft's stated prerequisites now include Python proficiency and familiarity with vector databases. If your AZ-204 work was all C# and App Service, budget for the gap rather than assuming a fortnight of revision."
      },
      {
        mistake: 'Expecting AI-200 to have the same support ecosystem AZ-204 had',
        fix: "It does not yet. As of August 2026 the exam is offered in English only, and Microsoft's own certification page states that the practice assessment is not currently available and that practice assessments generally appear within eight weeks of an exam leaving beta. That means no free official question bank, and any third-party AI-200 practice test on sale right now was written against a study guide rather than against experience of the live exam. Weight the official study guide and hands-on work far more heavily than you would have for a mature exam."
      },
      {
        mistake: 'Missing that this is a catalogue-wide reorganisation, not a one-off',
        fix: "AZ-204 did not retire in isolation. The Azure AI Engineer Associate credential behind AI-102 carries the same certification-and-renewal retirement warning, and Microsoft has introduced a new AI-centred family for these roles — Azure AI Cloud Developer Associate (AI-200), Azure AI Apps and Agents Developer Associate, AI Agent Builder Associate, and a Multi-Agent AI Solutions Expert (Exam AI-500) at advanced level. Before you plan a certification path around any Azure developer credential, open the current browse page and confirm it is still live. The catalogue moved a long way in 2026."
      },
      {
        mistake: 'Assuming 700 out of 1,000 meant 70% — and carrying that assumption into AI-200',
        fix: "It never did, and it still does not. Microsoft states that the score is scaled and may not equal 70% of the points available, because different candidates see question sets of different difficulty. This tripped up AZ-204 candidates in particular, because a code-heavy exam invites you to count the questions you are confident about. Doing arithmetic mid-exam produces panic and costs time. The same scoring model applies to AI-200."
      },
      {
        mistake: 'Discarding the AZ-204 material you already studied',
        fix: "Most of it is still directly employable and much of it is still examinable under a different code. Container Registry, Container Instances, Container Apps, managed identities, Key Vault, App Configuration, Event Grid, Event Hubs, Service Bus, Queue Storage, API Management policies, Cosmos DB consistency levels and change feed, blob lifecycle management, and Application Insights instrumentation all appear in one form or another in the successor blueprint or in the day job. Keep your notes and your lab repos. What genuinely goes stale is the exam-specific drilling, not the platform knowledge."
      }
    ]
  },

  // P0-7  Question types & worked examples
  // Retained as a historical record and because the same item formats carry over to
  // the successor exam, AI-200.
  questionTypes: {
    summary: "This section is a historical record of how AZ-204 was constructed, kept for two reasons: people arriving here mid-preparation deserve to know what they were working toward, and the item formats carry over essentially unchanged to Exam AI-200, which is the successor for the developer role. AZ-204 was an associate role-based exam, so it drew on Microsoft's full item library rather than the reduced fundamentals set: standard multiple choice and multiple response, plus drag-and-drop and build-list, hot area, active screen, repeated-scenario yes/no sets, and on some forms a case study block or a live lab in a real Azure environment. Duration was 100 minutes without a lab and 120 with one, and Microsoft did not publish which forms contained labs because labs are pulled at short notice during outages. Because it was associate role-based, AZ-204 also carried the in-exam Microsoft Learn panel — the full learn.microsoft.com domain minus Q&A, practice assessments and your signed-in profile, in a resizable split screen, with the clock running and no extra time granted. What made AZ-204 feel different from its sibling exams was not the format list but the content inside the formats. This was the only Azure associate exam that routinely put code on the screen and asked you to reason about it: a C# or Python snippet using an Azure SDK client with one argument wrong, a `host.json` or binding configuration with a missing property, an API Management policy XML fragment to complete from a drop-down. Candidates who came from AZ-104 and expected portal screenshots found something closer to a code review. Microsoft's public exam sandbox at aka.ms/examdemo still demonstrates every one of these formats and remains the right place to rehearse the interface before AI-200.",
    types: [
      { name: 'Multiple choice (single answer)', share: 'The largest share of items on a typical form', detail: 'Usually a short development scenario with a deciding constraint — cost, latency, throughput, "without storing credentials in code" — where more than one option was technically workable.' },
      { name: 'Multiple response', share: 'Common', detail: 'Select all that apply. Frequently used for SDK capabilities, binding types and the set of steps required to configure a service.' },
      { name: 'Code-completion drop-downs', share: 'The format most characteristic of AZ-204', detail: 'A code block — commonly C#, sometimes Python — with two or three drop-downs embedded in it. You selected the correct class, method, parameter or enum value in each. This is why AZ-204 was hard to pass on video study alone: it required having actually written against the SDKs.' },
      { name: 'Drag and drop / build list', share: 'Frequent', detail: 'Order the deployment steps, match triggers to bindings, or assemble a sequence of CLI commands. Distractor items were routinely included, so the list you were given was longer than the answer.' },
      { name: 'Hot area', share: 'Frequent', detail: 'A rendered configuration screen, portal blade or configuration file with selectable regions or drop-downs — deployment slot settings, Function App configuration, API Management policy scopes.' },
      { name: 'Repeated-scenario yes/no sets', share: 'Occasional', detail: 'The same scenario restated three times with a different proposed solution each time, judged independently. All three could be correct or all three wrong. Once you moved past one you could not return to it.' },
      { name: 'Case study', share: 'On some forms', detail: 'A multi-tab scenario — existing environment, requirements, technical constraints — followed by several linked questions. On AZ-204 these typically described an application architecture and asked you to choose services and configurations that satisfied stated non-functional requirements. You could not return to a case study after moving past it.' },
      { name: 'Interactive lab', share: 'On some forms; Microsoft never published which', detail: 'A real Azure environment with tasks to complete. Grading looked at end state rather than method. A form with a lab carried 120 minutes of exam time and 140 minutes of seat time instead of 100 and 120.' }
    ],
    samples: [
      {
        prompt: "You are building an Azure Function that must read a connection secret at runtime from Azure Key Vault. The function runs on a Premium plan. Security policy states that no credential, certificate or secret may be stored in application settings, in source control, or in the deployment pipeline. Which approach should you use?",
        options: [
          'A. Store the Key Vault access key in an application setting and read it with Environment.GetEnvironmentVariable',
          'B. Enable a system-assigned managed identity on the Function App, grant it access to the vault, and reference the secret with a Key Vault reference',
          'C. Register an app registration in Microsoft Entra ID and store its client secret in the local.settings.json file',
          'D. Generate a shared access signature for the Key Vault and embed it in the function code'
        ],
        answer: 'B',
        explanation: "A system-assigned managed identity is created and rotated by the platform, is never visible to you as a value, and therefore cannot be stored anywhere — which is exactly what the policy demands. Grant the identity get/list on secrets and the runtime resolves the reference for you. A and C both fail the stated constraint outright: they simply move a secret into a different place where it is still a secret you hold. C additionally puts it in a file that commonly ends up committed. D is not a real mechanism — shared access signatures belong to Storage, not to Key Vault, and this kind of plausible-sounding cross-service distractor was a recurring AZ-204 device. The phrase \"no credential may be stored\" was the tell: it almost always pointed to managed identity."
      },
      {
        prompt: "An Azure Cosmos DB for NoSQL container backs a multi-region shopping-cart service. The team requires that a user always reads their own most recent write, including immediately after switching between regions, while keeping write latency and cost as low as the requirement allows. Which consistency level should you configure?",
        options: [
          'A. Strong',
          'B. Bounded staleness',
          'C. Session',
          'D. Eventual'
        ],
        answer: 'C',
        explanation: "Session consistency guarantees read-your-own-writes within a session, which is precisely the stated requirement, and it is markedly cheaper in request units and lower in write latency than the stronger levels. It is also the Cosmos DB default. A satisfies the requirement but over-delivers: Strong consistency in a multi-region account forces synchronous replication, raising write latency and RU cost, which the question explicitly asked you to minimise. B provides a bounded lag guarantee that is stronger than needed and still costlier than Session. D provides no read-your-own-writes guarantee at all and would let a user add an item and not see it. The pattern to notice: consistency-level questions almost always give you a correctness requirement plus a cost or latency constraint, and the answer is the weakest level that still satisfies the correctness requirement."
      }
    ],
    note: "Samples are written by our editors to illustrate the final published AZ-204 skills outline (skills measured as of 14 January 2026). They are not real exam items, are not drawn from any question bank, and no live Microsoft exam content is reproduced anywhere on this page. AZ-204 retired on 31 July 2026; these are retained as an illustration of the item styles, which carry over to Exam AI-200."
  }

  // studyPlan, prepStrategies, resourceComparison and examDay are intentionally omitted.
  // AZ-204 retired on 31 July 2026 and cannot be scheduled, so a study timetable, a
  // priced resource table and an exam-day guide would all be advice about something
  // that cannot happen. Candidates should work from the Exam AI-200 study guide
  // (https://aka.ms/AI200-StudyGuide) instead.
};

export default data;
