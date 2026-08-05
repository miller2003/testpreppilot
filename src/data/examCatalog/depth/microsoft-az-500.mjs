// Depth content for: microsoft-az-500
//
// TIME-CRITICAL EDITORIAL NOTE — REVIEWED 2026-08-04.
// The Microsoft Certified: Azure Security Engineer Associate certification page carries
// the warning: "This certification, related exam, and renewal assessments will retire on
// August 31, 2026. You will no longer be able to earn or renew this certification after
// this date." The AZ-500 study guide adds the precise cut-off: "This exam will retire on
// August 31, 2026, at 11:59 PM Central Standard Time."
//
// At the date of this review that leaves under four weeks. The exam is still bookable
// and the credential is still earnable, so we have kept every section — but the study
// plan is written for the calendar that actually exists rather than a generic eight-week
// schedule, and the whole page is framed around the decision of whether to sit AZ-500 at
// all or go straight to its successor, Exam SC-500 (Microsoft Certified: Cloud and AI
// Security Engineer Associate).
//
// Sources: learn.microsoft.com/credentials (AZ-500 study guide with retirement warning
// and "Skills measured as of January 22, 2026"; Azure Security Engineer Associate
// certification page, Last Updated 01/22/2026, renewal frequency 12 months; Cloud and AI
// Security Engineer Associate certification page showing Exam SC-500 and stating the
// practice assessment is not currently available; exam duration & exam experience;
// exam scoring and score reports; exam retake policy), bls.gov Occupational Outlook
// Handbook (May 2024 wage data), Skillsoft IT Skills and Salary material (2025).
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
    headline: '$124,910 median for information security analysts, 29% projected growth (BLS, May 2024)',
    summary: "The occupation behind AZ-500 has the strongest outlook of any exam covered on this site, and that remains true even though the exam itself is being retired. Information Security Analysts (SOC 15-1212) reported a median of $124,910 in May 2024 and are projected to grow 29% between 2024 and 2034 — roughly six times the average across all occupations — with about 16,000 openings a year against a 2024 base of 182,800 jobs. Nothing about Microsoft reorganising its certification catalogue changes that demand curve. Two points of honesty belong here. The first is about the credential rather than the field. BLS notes that employers in this occupation may prefer candidates with professional certification, which is a rare thing for BLS to say and it is genuinely favourable to AZ-500's population — but the certifications that carry the most weight in hiring for senior security roles are still the vendor-neutral ones, and an Azure-specific credential is read as platform depth rather than as a security qualification in its own right. It pays best when it is stacked on top of something broader, or when the employer is specifically an Azure shop. The second point is about timing. Because the certification and its renewal assessment both retire on 31 August 2026, an AZ-500 earned in August 2026 will run for twelve months and then simply stop being renewable. That does not make it worthless — it is a dated, verifiable statement that you demonstrated these skills — but if your motivation is a credential to put on a CV for the next three years, the successor SC-500 is the better purchase of the same USD $165. If your motivation is that your employer's partner status or a contract clause requires the current credential now, AZ-500 still does that job for the next few weeks.",
    rows: [
      { label: 'Median annual wage — information security analysts (SOC 15-1212)', value: '$124,910', note: 'BLS Occupational Outlook Handbook, May 2024 wage data. The occupation AZ-500 maps to most directly.' },
      { label: 'Projected employment growth, 2024-2034', value: '29% (much faster than average)', note: 'BLS OOH. The fastest-growing occupation behind any exam covered on this site.' },
      { label: 'Employment, 2024', value: '182,800 jobs', note: 'BLS OOH base-year employment, with a projected increase of 52,100 by 2034.' },
      { label: 'Projected annual openings, 2024-2034', value: '~16,000 per year', note: 'BLS OOH.' },
      { label: 'Self-reported average, Azure Security Engineer Associate holders', value: '$86,156', note: 'Skillsoft "top-paying Microsoft certifications" material from its IT Skills and Salary survey (2025) — worldwide, self-reported respondent data, NOT government statistics. Well below the US BLS median for the occupation, which is what you should expect from a worldwide self-selecting survey.' }
    ],
    growth: '29% projected growth 2024-2034 for information security analysts — much faster than average, with roughly 16,000 openings a year (BLS OOH)',
    source: { label: 'BLS Occupational Outlook Handbook — Information Security Analysts', url: 'https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm' }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'No official pass rate — and now a hard deadline that matters more than any rate would',
    summary: "Microsoft publishes no pass rate for AZ-500 and never has, in common with every exam in its programme. No attempt counts, no first-time pass percentages, no score distributions. What makes the absence more consequential than usual here is the retirement date: with the exam retiring on 31 August 2026 at 11:59 PM Central Standard Time, the retake ladder has become a real constraint rather than a theoretical one, and a candidate deciding whether to book needs to reason about the mechanics rather than about a folklore percentage. Work it through. If you fail a first attempt you must wait 24 hours before a second. If you fail the second, you must wait 14 days before a third — and 14 days from mid-August lands you past the cut-off. In practical terms, as of early August 2026 you have one realistic retake and possibly a second if you sit very early in the month; after that the exam is gone and the certification cannot be earned. That reshapes the sensible strategy: book earlier than you feel ready rather than later, because a first attempt on 10 August with a retake on the 11th is a far better position than a single confident attempt on the 29th. On scoring itself, the standard model applies. Pass is 700 on a 1-1,000 scale, and Microsoft states plainly that this is scaled and may not equal 70% of the available points, because forms differ in difficulty. There is no guessing penalty, an unidentifiable subset of items is unscored pilot content, and the score report gives one overall number plus a bar chart of relative strength across the four skill areas which cannot be summed or read as percentages. Given that Defender for Cloud and Sentinel alone carry 30-35%, a weak bar there is worth substantially more than a weak bar in identity and access at 15-20%.",
    caveat: "No official AZ-500 pass rate exists; any figure you find is vendor marketing or a self-selecting poll. The number that genuinely matters for planning is the retirement date. AZ-500 retires 31 August 2026 at 11:59 PM CST, and the certification and its renewal assessment retire with it — Microsoft's certification page states you will no longer be able to earn or renew this certification after that date. The retake policy is unchanged (24 hours after a first failure, 14 days between subsequent attempts, five attempts maximum in the 12 months after your first sitting, full USD $165 each time) but the 14-day interval now collides with the deadline. If you are not confident of passing within one retake, the rational move is to redirect to Exam SC-500, which leads to Microsoft Certified: Cloud and AI Security Engineer Associate and carries no such deadline. Verified against the AZ-500 study guide, the Azure Security Engineer Associate certification page, the Cloud and AI Security Engineer Associate certification page, the exam scoring page and the exam retake policy, 2026-08-04.",
    source: { label: 'Microsoft Learn — Study guide for Exam AZ-500 (retirement warning and skills measured)', url: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-500' }
  },

  // P0-3  Study plan
  studyPlan: {
    summary: "Every other study plan on this site is a schedule. This one has to start as a decision, because the exam disappears on 31 August 2026 and a plan that ignores that is worse than no plan. Be blunt with yourself about which of three positions you are in. If you are starting from zero — no Azure administration background, no Defender for Cloud exposure — you are not going to be ready, and the honest advice is to stop reading this timetable and open the SC-500 study guide instead; there is no prize for failing an exam that then ceases to exist. If you have solid Azure administration experience and have already been studying, you can realistically make it, and the compressed plan below is the shape it should take. If you have been operating Azure security in production for a year or more, three focused weekends is a plausible run at it and your risk is unfamiliarity with exam format rather than with content. The official Microsoft Learn course for AZ-500 runs to roughly 23 hours of module content across four learning paths, which is content-consumption time only. The blueprint from 22 January 2026 is lopsided in a way that should drive your sequencing: Defender for Cloud and Sentinel together carry 30-35%, more than any other area and more than identity and access at 15-20%. Most candidates instinctively start with identity because it feels foundational, then run out of runway on the posture-management and SIEM material that is worth the most. Invert that. Start with Defender and Sentinel, and give them more time than feels proportionate.",
    totalHours: '55-80 hours if you have Azure administration experience; substantially more if you do not, in which case sit SC-500 instead',
    weeks: [
      {
        label: 'Day 0 — the decision',
        focus: 'Decide whether to sit AZ-500 at all, then book immediately if the answer is yes',
        tasks: [
          'Check the calendar honestly against the 31 August 2026, 11:59 PM CST cut-off and the retake intervals — 24 hours after a first failure, 14 days after a second',
          'If you decide to go, book now and book early in the month so that one retake still fits inside the window',
          'Take the free official Practice Assessment cold; if you are below roughly half on Defender for Cloud and Sentinel with no production exposure, seriously consider redirecting to SC-500',
          'Confirm you have a subscription with Defender for Cloud enablement available and a Log Analytics workspace you can attach Sentinel to — you cannot learn either from documentation alone'
        ],
        hours: '2-3 hrs'
      },
      {
        label: 'Week 1',
        focus: 'Secure Azure using Microsoft Defender for Cloud and Microsoft Sentinel (30-35%) — the heaviest area, deliberately first',
        tasks: [
          'Enable Defender for Cloud on a subscription, work through Secure Score, and understand how recommendations map to the Microsoft Cloud Security Benchmark',
          'Turn on at least two Defender plans (servers and storage are cheap and instructive) and read what they actually alert on',
          'Configure regulatory compliance standards in Defender for Cloud and generate a compliance report',
          'Stand up Microsoft Sentinel on a Log Analytics workspace, connect two data connectors, and run analytics rules from a template',
          'Write and read basic KQL — the exam expects you to interpret a hunting query and say what it returns, and to know which table holds which signal',
          'Configure a workbook, an incident, and an automation rule with a playbook so the Sentinel vocabulary is concrete rather than abstract'
        ],
        hours: '18-24 hrs'
      },
      {
        label: 'Week 2',
        focus: 'Secure networking (20-25%)',
        tasks: [
          'Network security groups and application security groups: write rules, read effective rules, and understand priority evaluation cold',
          'Azure Firewall and Firewall Manager, including DNAT, application rules versus network rules, and where a firewall sits in a hub-and-spoke topology',
          'Private endpoints and Private Link versus service endpoints — this distinction appears on almost every form and candidates routinely conflate them',
          'Web Application Firewall on Application Gateway and on Front Door, including managed rule sets and custom rules',
          'DDoS Protection tiers, and securing VNet-to-VNet and hybrid connectivity'
        ],
        hours: '16-20 hrs'
      },
      {
        label: 'Week 3',
        focus: 'Secure compute, storage, and databases (20-25%)',
        tasks: [
          'Compute: Azure Bastion, just-in-time VM access, disk encryption options, secure boot and vTPM, and container security for ACR and AKS',
          'Storage: shared access signatures and stored access policies, storage firewalls, encryption scopes, customer-managed keys, and immutable blob storage for compliance',
          'Databases: Azure SQL authentication modes, Always Encrypted, Transparent Data Encryption with customer-managed keys, dynamic data masking, and SQL auditing',
          'Key Vault as the spine of all of it: access policies versus Azure RBAC, soft delete and purge protection, key rotation, and managed HSM',
          'Note the January 2026 change: the objective now reads "Plan and implement advanced security for compute" — read the current module rather than an older course'
        ],
        hours: '16-20 hrs'
      },
      {
        label: 'Week 4',
        focus: 'Secure identity and access (15-20%) + final consolidation',
        tasks: [
          'Microsoft Entra ID: users, groups, administrative units, external identities, and Entra Domain Services',
          'Conditional Access as a design tool — build policies with named locations, device state and sign-in risk, and understand report-only mode',
          'Privileged Identity Management: eligible versus active assignments, approval workflows, access reviews',
          'Managed identities and application access — the January 2026 blueprint renamed this objective to "Manage Microsoft Entra application access and managed identities", so cover managed identities explicitly',
          'Re-take the official Practice Assessment, compare with your Day 0 baseline, and spend every remaining hour on the weakest of the four areas',
          'Rehearse the interface in the free sandbox at aka.ms/examdemo so no format costs you time'
        ],
        hours: '16-20 hrs'
      }
    ],
    variants: [
      { label: 'Starting from scratch in August 2026', detail: 'Do not. There is not enough runway before the 31 August cut-off, and a failed attempt with no room for a meaningful retake is USD $165 for nothing. Open the SC-500 study guide at aka.ms/SC500-StudyGuide and study for the successor, which covers most of this material plus AI workload security.' },
      { label: 'Already hold AZ-104', detail: 'Roughly a third of the networking, storage and identity content overlaps with what you already know. Four focused weeks on the plan above is realistic. Your gap is Defender for Cloud and Sentinel, which AZ-104 never touches — give them half your total hours.' },
      { label: 'Operating Azure security in production', detail: 'Three weekends is a plausible run. Your risk is format rather than knowledge: hot-area configuration screens, repeated-scenario yes/no sets and possible case studies. Spend a disproportionate share of your limited time in the practice assessment and the exam sandbox rather than on content.' },
      { label: 'Holding a lapsing AZ-500 you hoped to renew', detail: 'Read the certification page warning carefully — the renewal assessments retire on 31 August 2026 alongside the exam, so a renewal window opening after that date will not exist. If your renewal window is open now, take it now. If it is not, plan for SC-500.' }
    ]
  },

  // P0-4  Prep strategies
  prepStrategies: {
    summary: "With a hard deadline, prioritisation is the whole strategy. These are ordered by return on the hours you have left.",
    items: [
      {
        title: 'Weight your hours to the blueprint, not to your comfort',
        detail: "Defender for Cloud and Microsoft Sentinel carry 30-35% of the exam — more than identity and access at 15-20%, and more than any other single area. Security professionals coming from an identity background almost always invert this, because Conditional Access and PIM feel like the core of the discipline. On this exam they are the smallest domain. Allocate your hours in proportion to the published weights and revisit that allocation weekly; with four weeks available there is no room to over-invest in a favourite topic."
      },
      {
        title: 'Enable the products rather than reading about them',
        detail: "Defender for Cloud and Sentinel are the two areas where documentation study fails most visibly, because the exam asks about things you only notice by using them — what Secure Score actually recommends, what an incident looks like when it arrives, which connector produces which table, what an automation rule can and cannot trigger. Enable Defender plans on a throwaway subscription, connect two Sentinel data sources, and let alerts arrive. Budget for the cost, set a spending limit, and delete the resource group afterwards; a week of it will cost less than a practice test."
      },
      {
        title: 'Learn Private Link versus service endpoints properly, once',
        detail: "This single distinction produces more wrong answers in the networking domain than anything else. A service endpoint extends your VNet identity to the service over the Azure backbone but the service keeps its public IP; a private endpoint gives the service a private IP inside your subnet and lets you disable public access entirely. The exam tests the consequence — DNS behaviour, whether on-premises clients over ExpressRoute can reach it, whether you can turn off public network access — not the definition. Draw both, in both directions, until it is automatic."
      },
      {
        title: 'Get comfortable reading KQL, not writing it',
        detail: "Sentinel questions frequently show you a query and ask what it returns or which table it should target. You are not being asked to author complex analytics. Learn the shape — table, then pipe, then where, summarize, project, join — and learn which table holds which signal: SigninLogs, AuditLogs, SecurityAlert, SecurityIncident, Heartbeat, AzureActivity. An hour spent on table names returns more marks than a day spent on advanced operators."
      },
      {
        title: 'Book early enough that one retake still fits',
        detail: "This is exam strategy rather than study strategy but it is the highest-value item on this list. The retake ladder gives you 24 hours after a first failure and 14 days after a second. A first attempt in the first half of August leaves room for a second attempt the next day and, if necessary, a third before the cut-off. A single attempt on 29 August leaves nothing. Book before you feel ready — the deadline is a harder constraint than your confidence."
      },
      {
        title: 'Use the in-exam Microsoft Learn panel for product limits only',
        detail: "AZ-500 is an associate role-based exam, so you get the Learn panel: the learn.microsoft.com domain minus Q&A, practice assessments and your profile, split-screen and resizable, with the clock still running. It is genuinely good for confirming which Defender plan covers which resource type or which SKU includes a WAF feature. It cannot help with a scenario judgement. Two or three lookups, no more."
      },
      {
        title: 'Study against the 22 January 2026 blueprint',
        detail: "The current skills outline is \"Skills measured as of January 22, 2026\". The change log flags minor revisions to three objectives — application access was renamed to include managed identities, advanced security for compute was revised, and threat protection via Defender for Cloud was revised — while the domain weights themselves did not change. Minor changes still move questions. Read the current Microsoft Learn module for each flagged objective even if your course covered the topic under its old name."
      },
      {
        title: 'Read the SC-500 study guide even if you are sitting AZ-500',
        detail: "The successor exam covers most of the AZ-500 surface plus AI workload security and Security Copilot. Reading its study guide costs an hour and does two useful things: it shows you which parts of your AZ-500 revision have a future beyond August, and it gives you a running start if the retirement date beats you. Microsoft's own SC-500 course content runs to roughly thirty hours of modules, so knowing which ones you have already effectively covered is worth having."
      }
    ]
  },

  // P0-5  Study-resource comparison
  resourceComparison: {
    summary: "Buy nothing with a long payback period. With the exam retiring on 31 August 2026, a subscription you would need six months to exploit is a bad purchase, and any AZ-500 product still being sold on an annual licence should be weighed against the fact that the exam will not exist for most of that licence. The free official material plus a live subscription is the right core.",
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn AZ-500 paths (official)', values: ['Free', 'Four learning paths, ~23 hours of modules', 'The blueprint. Sequence them by exam weight rather than in listed order — Defender and Sentinel first.'] },
      { label: 'Microsoft official Practice Assessment for AZ-500', values: ['Free', 'Unlimited timed question bank on Microsoft Learn', 'Your Day 0 go/no-go diagnostic and your weekly progress check across the four areas. Note the contrast with the successor: SC-500 has no practice assessment yet.'] },
      { label: 'Azure subscription with Defender plans and a Sentinel workspace', values: ['Pay per use; budget roughly $30-80 for a four-week run if you delete afterwards', 'Live environment', 'Non-negotiable for the 30-35% Defender and Sentinel domain. Set a spending limit and a budget alert, and delete the resource group the day after your exam.'] },
      { label: "John Savill's Technical Training — AZ-500 study cram (YouTube)", values: ['Free', 'Long-form whiteboard video', 'The best free video resource for Azure certifications. Particularly strong on the networking domain, which is 20-25% here.'] },
      { label: 'Microsoft Cloud Security Benchmark documentation (official)', values: ['Free', 'Reference documentation', 'The standard the audience profile explicitly names. Reading the control families gives you the mental model Defender for Cloud recommendations are generated from.'] },
      { label: 'MeasureUp AZ-500 practice test (official Microsoft practice test partner)', values: ['~$99-129 list, frequently discounted', 'Practice test in certification and study modes with explanations', 'Only if you are sitting in the next fortnight and want volume with worked explanations. Check the licence term before buying — a twelve-month licence for an exam that retires in four weeks is poor value.'] },
      { label: 'Whizlabs AZ-500 practice tests', values: ['~$20-30', 'Question bank', 'A cheap volume supplement with the usual caveat that explanation quality is inconsistent. At this price the short shelf life matters less.'] },
      { label: 'Pluralsight / A Cloud Guru', values: ['~$29-45/month', 'Video library plus sandboxes', 'Hard to justify starting a subscription now for AZ-500 alone. Reasonable if you already hold one, or if you intend to continue straight into SC-500 material.'] },
      { label: 'Microsoft official instructor-led course AZ-500T00', values: ['Typically $1,500-2,500 through a Microsoft Learning Partner', 'Four-day instructor-led class with labs', 'Employer-funded only, and check the course is still being scheduled — partners stop running courses for retiring exams well before the retirement date.'] },
      { label: 'SC-500 study guide (aka.ms/SC500-StudyGuide)', values: ['Free', 'Official study guide for the successor exam', 'Read this regardless. It tells you which of your AZ-500 revision transfers, and it is the fallback if the deadline beats you. Note Microsoft states the SC-500 practice assessment is not currently available.'] },
      { label: 'Free exam sandbox (aka.ms/examdemo)', values: ['Free', 'Interactive demo of the exam interface', 'One session removes format surprise. Worth more than an extra hour of content when your time is this constrained.'] }
    ],
    footnote: 'Prices checked 2026-08-04 and expressed as USD list prices before regional adjustment, sales, employer discounts or student pricing. Given the 31 August 2026 retirement, weigh licence length as heavily as price on anything AZ-500 specific. We take no commission from any provider listed and the ordering reflects our editorial judgement of usefulness, not any commercial relationship.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary: "Half the AZ-500 mistakes on this list did not exist a year ago. The retirement has changed what the expensive errors are.",
    items: [
      {
        mistake: 'Not knowing the exam retires on 31 August 2026',
        fix: "It does, at 11:59 PM Central Standard Time, and the certification and its renewal assessments retire with it — Microsoft's certification page states you will no longer be able to earn or renew this certification after that date. Check the date before you buy a course, a practice licence or a voucher. If you are reading this after 31 August 2026, AZ-500 is gone and the path is Exam SC-500, leading to Microsoft Certified: Cloud and AI Security Engineer Associate."
      },
      {
        mistake: 'Assuming you can renew an AZ-500 earned in August 2026',
        fix: "You cannot. The renewal assessment retires alongside the exam. A certification earned in August 2026 will be valid for its twelve months and will then expire with no renewal path. That is not a reason to avoid sitting it if you need the credential now — a dated credential is still a verifiable statement of demonstrated skill — but plan on SC-500 as the thing you actually maintain."
      },
      {
        mistake: 'Leaving your first attempt until the last week',
        fix: "The retake ladder is 24 hours after a first failure and 14 days after a second. Sitting on 29 August leaves room for exactly one retake on the 30th and nothing else. Sitting in the first half of the month leaves room for a genuine recovery. When a deadline is fixed, book earlier than your confidence suggests — the calendar is less forgiving than the exam."
      },
      {
        mistake: 'Starting with identity because it feels like the foundation',
        fix: "Secure identity and access is 15-20% — the smallest of the four areas. Defender for Cloud and Sentinel together are 30-35%, the largest by a wide margin, and they are the areas most people have least production exposure to. Sequence your study by published weight, not by disciplinary instinct. This single reallocation is worth more than any study technique on this page."
      },
      {
        mistake: 'Assuming 700 out of 1,000 means 70% of the questions',
        fix: "It does not. Microsoft states the score is scaled and may not equal 70% of the available points, because different candidates receive question sets of differing difficulty. Counting questions mid-exam wastes time you do not have and produces panic. Answer everything — there is no penalty for a wrong answer — and let the scaling resolve."
      },
      {
        mistake: 'Confusing service endpoints with private endpoints',
        fix: "The most reliable wrong answer in the networking domain. A service endpoint keeps the service on its public IP and extends your VNet identity to it; a private endpoint places a private IP for the service inside your subnet and lets you disable public network access entirely, with the DNS consequences that follow. The exam tests the consequence rather than the definition. Draw both before you sit."
      },
      {
        mistake: 'Studying Defender for Cloud and Sentinel from documentation only',
        fix: "These two products are learnable from documentation at a vocabulary level and not at the level the exam asks about. You need to have seen a Secure Score recommendation, an incident, a data connector's tables and an automation rule fire. Enable them on a throwaway subscription with a spending limit for a week. It is the highest-yield spend available for this exam."
      },
      {
        mistake: 'Working from a course recorded before 22 January 2026',
        fix: "The current outline is \"Skills measured as of January 22, 2026\". The change log flags revisions to Microsoft Entra application access and managed identities, advanced security for compute, and threat protection via Defender for Cloud. The domain weights did not change but the objectives did. Read the current Microsoft Learn module for each flagged objective regardless of what your course covered."
      },
      {
        mistake: 'Treating the in-exam Learn panel as a safety net',
        fix: "It is available on AZ-500 because this is an associate role-based exam, and it is useful for confirming a product limit or which Defender plan covers a resource type. The clock keeps running and you get no extra time. On a 100- or 120-minute exam it is worth two or three deliberate lookups; using it habitually will leave questions unanswered."
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary: "AZ-500 is an associate role-based exam and draws on Microsoft's full item library: multiple choice and multiple response, drag-and-drop and build-list, hot area, active screen, repeated-scenario yes/no sets, possible case studies, and on some forms a live lab. Microsoft does not publish a question count and it varies by form; published duration for associate role-based exams is 100 minutes without a lab and 120 minutes with one, with 120 or 140 minutes of seat time respectively, and you learn which applies when the exam launches. What distinguishes AZ-500 from its Azure siblings is not the format list but where the formats land. Hot-area items on this exam are frequently rendered blades from Defender for Cloud, Microsoft Sentinel, Key Vault or a network security group rule set, and they reward having genuinely used the product rather than having read about it — a Sentinel analytics rule configuration screen is not something you can reason your way through from first principles. Expect at least one item that puts a KQL query in front of you and asks what it returns or which table it should target. Expect the repeated-scenario yes/no format to be used for Conditional Access and NSG rule evaluation, where three plausible-sounding proposed solutions are judged independently and all three can be wrong. Because this is an associate role-based exam the Microsoft Learn panel is available — the learn.microsoft.com domain minus Q&A, practice assessments and your profile, split-screen, clock running, no extra time. Rehearse every format free at aka.ms/examdemo. Most items cover generally available features; preview features appear only where commonly used, which in a security context means you are not expected to track every Defender plan announced last quarter.",
    types: [
      { name: 'Multiple choice (single answer)', share: 'The largest share of items', detail: 'Short security scenarios with a deciding constraint — least privilege, least administrative effort, must not expose a public endpoint, must satisfy a named compliance standard. Two options usually work technically.' },
      { name: 'Multiple response', share: 'Common', detail: 'Select the controls that together satisfy a requirement, or the set of Defender plans that cover a stated resource estate. Judge each option independently.' },
      { name: 'Hot area', share: 'Heavily used on this exam', detail: 'Rendered configuration screens — Defender for Cloud plan settings, a Sentinel analytics rule, Key Vault access configuration, an NSG rule table — with drop-downs or selectable regions. Product familiarity converts directly into marks here and documentation study does not.' },
      { name: 'KQL interpretation items', share: 'Expect at least one', detail: 'A Sentinel query is shown and you identify what it returns, which table it should run against, or which line is wrong. Reading fluency and table-name recall matter far more than the ability to author queries.' },
      { name: 'Drag and drop / build list', share: 'Frequent', detail: 'Order the steps to onboard a data connector, configure just-in-time access, or apply a set of Conditional Access conditions. Distractor items are routinely included in the source list.' },
      { name: 'Repeated-scenario yes/no sets', share: 'Common on this exam', detail: 'One scenario restated three times with a different proposed control each time, judged independently. Used heavily for Conditional Access and NSG evaluation. All three can be correct or all three wrong, and you cannot return to a statement once you pass it.' },
      { name: 'Case study', share: 'On some forms', detail: 'A multi-tab organisation with an existing environment, compliance requirements and technical constraints, followed by linked questions. Read the compliance tab twice — a named standard in the scenario usually determines several answers at once. No return once you move past.' },
      { name: 'Interactive lab', share: 'On some forms; Microsoft does not publish which', detail: 'A real Azure environment with security tasks to complete. Grading assesses end state. A form containing a lab carries 120 minutes of exam time rather than 100.' }
    ],
    samples: [
      {
        prompt: "A company stores customer records in an Azure Storage account. Security policy requires that the storage account must not be reachable from the public internet, that on-premises servers connected over ExpressRoute must be able to reach it, and that no storage account keys may be distributed to application teams. Which combination should you recommend?",
        options: [
          'A. A service endpoint for Microsoft.Storage on the application subnet, plus shared access signatures issued to each team',
          'B. A private endpoint for the storage account with public network access disabled, plus managed identities with Azure RBAC data-plane roles',
          'C. A storage account firewall allowing only the corporate public IP ranges, plus stored access policies',
          'D. A service endpoint plus a customer-managed key in Azure Key Vault'
        ],
        answer: 'B',
        explanation: "Take the requirements one at a time. \"Must not be reachable from the public internet\" is the discriminator that kills A, C and D: a service endpoint leaves the storage account on its public IP and simply restricts which networks may use it, and an IP-based firewall is still public reachability with an allow list. Only a private endpoint gives the account a private IP inside your VNet and lets you set public network access to disabled. The ExpressRoute requirement is the second half of the same point — private endpoints are reachable from on-premises over ExpressRoute private peering with the right DNS forwarding, which is exactly the scenario private endpoints exist for. \"No storage account keys distributed\" then eliminates any answer built on SAS or keys, because both derive from the account key; managed identities with data-plane RBAC roles such as Storage Blob Data Reader remove the secret entirely. D also fails the key requirement in a subtler way: a customer-managed key protects encryption at rest and says nothing about access control."
      },
      {
        prompt: "Your organisation uses Microsoft Sentinel. The SOC lead asks for an alert whenever a user account successfully signs in from a country the organisation does not operate in, and wants the alert to automatically disable the account and open a ticket. Which combination of Sentinel features should you configure?",
        options: [
          'A. A hunting query and a workbook',
          'B. A scheduled analytics rule and an automation rule invoking a playbook',
          'C. A data connector and a watchlist',
          'D. A near-real-time (NRT) analytics rule and a bookmark'
        ],
        answer: 'B',
        explanation: "Two capabilities are being requested — detection and response — and the answer needs one of each. A scheduled analytics rule runs a KQL query on a cadence and generates an incident when it matches, which is the detection half. An automation rule triggers on incident creation and invokes a Logic Apps playbook, which is what performs the account disable and the ticket creation; Sentinel itself does not take those actions. A fails on both counts: a hunting query is run manually by an analyst and produces no incident, and a workbook is visualisation only. C names the plumbing rather than the logic — a data connector brings SigninLogs in and a watchlist could hold the country list, but neither detects or responds. D gets the detection half plausibly (NRT rules are a real rule type) but a bookmark is an analyst's manual annotation during hunting, not an automated response. If a Sentinel question asks for automated action, the word you are looking for is playbook, and the thing that invokes it is an automation rule."
      },
      {
        prompt: "A subscription hosts 40 virtual machines. Auditors require evidence that management ports are not permanently exposed, that administrative access is time-bound and approved, and that no VM has a public IP address. Which controls should you recommend?",
        options: [
          'A. Network security groups denying inbound RDP and SSH, plus a jump box with a public IP',
          'B. Azure Bastion for connectivity, just-in-time VM access in Microsoft Defender for Cloud, and an Azure Policy denying public IP creation',
          'C. Azure Firewall with DNAT rules for RDP, plus Privileged Identity Management on the subscription',
          'D. Just-in-time VM access alone, since it opens ports only on request'
        ],
        answer: 'B',
        explanation: "Three requirements, three controls, and the exam wants you to map them one to one. Azure Bastion provides RDP and SSH over TLS through the portal without any VM needing a public IP, which satisfies the third requirement. Just-in-time VM access in Defender for Cloud opens management ports only for an approved, time-boxed request and logs it, which satisfies the first two and produces exactly the audit evidence described. Azure Policy with a deny effect prevents anyone creating a public IP in the first place, which turns the third requirement from an intention into an enforced control. A fails immediately because it introduces a jump box with a public IP. C is a reasonable-sounding distractor: DNAT for RDP is permanent exposure through the firewall rather than time-bound access, and PIM governs Entra role activation rather than network access to a VM — a classic conflation of identity elevation with network reachability. D is incomplete: JIT alone does nothing about the public IP requirement. Questions that list three auditor requirements almost always want three named controls, and an option offering fewer is usually wrong on completeness rather than on correctness."
      }
    ],
    note: "Samples are written by our editors to illustrate the published AZ-500 skills outline (skills measured as of 22 January 2026). They are not real exam items, are not drawn from any question bank, and no live Microsoft exam content is reproduced anywhere on this page. AZ-500 retires on 31 August 2026; the item formats carry over to Exam SC-500."
  },

  // P0-8  Exam-day guide
  examDay: {
    summary: "AZ-500 is delivered by Pearson VUE at a test centre or online through OnVUE, and with a retirement deadline in play the logistics deserve more attention than usual — a botched OnVUE launch in late August is not something you can simply rebook past the cut-off. That alone is an argument for a test centre this month: a supervised room, a workstation you did not have to configure, no dependency on your home broadband, and a physical erasable whiteboard that is genuinely useful when you are working through NSG rule priorities or a Conditional Access evaluation order. Under OnVUE you get no paper of any kind unless a physical whiteboard was explicitly approved on your booking, your room is scanned before you start, and any technical failure eats into a window that is closing. Whichever you choose, plan around seat time rather than exam time: Microsoft publishes 100 minutes of exam time for associate role-based exams without labs and 120 minutes for those that may contain one, with seat time of 120 or 140 minutes respectively covering check-in, the NDA, instructions, the exam and the survey. You are told which applies when the exam launches. Arrive or begin OnVUE check-in thirty minutes early — check-in can take twenty minutes at a busy hour, and a late check-in forfeits both the USD $165 and, in August 2026, possibly your last realistic attempt.",
    bring: [
      'Government-issued photo ID with the name matching your Microsoft Learn certification profile exactly, including middle initials',
      'A second form of ID at a test centre if your primary is not a passport or driving licence — your Pearson VUE confirmation states your country\'s requirement',
      'Your Pearson VUE confirmation and exam registration number',
      'At a test centre: nothing else. Everything goes in a locker and the whiteboard is at the workstation',
      'For OnVUE: the phone used for booking, for the check-in photo upload, which then goes out of reach',
      'For OnVUE: a physical whiteboard and erasable marker only if explicitly permitted on your booking'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker at a test centre, out of the room for OnVUE',
      'All personal paper, notes, printed KQL cheat sheets and sticky notes; nothing handwritten may be visible in an OnVUE room',
      'Second monitors — OnVUE requires a single display and an unplugged monitor still on the desk is not sufficient',
      'Bags, coats, hats and non-religious headwear',
      'Food and drink unless covered by an approved accommodation',
      'Everyone else — an OnVUE proctor will end the session if another person is seen or heard'
    ],
    timeline: [
      { time: 'When you book', detail: 'Book early in August. The 24-hour and 14-day retake intervals mean a late-month first attempt leaves no meaningful recovery before the 31 August cut-off.' },
      { time: '2-3 days before', detail: 'Run the OnVUE system test on the exact machine, network and room you will use, if testing online. Corporate laptops with endpoint-security agents are the most common cause of a failed launch.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or start OnVUE check-in. Check-in is not the exam start and lateness can forfeit the booking.' },
      { time: 'Check-in', detail: 'ID verification and photograph; OnVUE adds a 360-degree room scan including the desk, underneath it and the walls. Test centres add a locker, pocket check and sometimes a palm-vein scan.' },
      { time: 'First 5 minutes', detail: 'NDA and instructions — inside seat time, outside exam time. The launch screen tells you your duration and therefore whether a lab may be present.' },
      { time: 'First 2 minutes of the exam', detail: 'Note the question count and section list. If a case study or lab is present, decide immediately whether to take it first while fresh or last against a known clock.' },
      { time: 'Throughout', detail: 'Mark for review anything over 90 seconds and move on. Avoid unscheduled breaks through the exam interface — one ends access to every question already seen.' },
      { time: 'Final 10 minutes', detail: 'Clear marked items and confirm nothing is blank. There is no guessing penalty.' },
      { time: 'On submission', detail: 'Short survey, then preliminary pass or fail on screen within a few minutes.' }
    ],
    rules: [
      'The pass mark is 700 on a 1-1,000 scale and it is scaled — it does not equal 70% of the questions.',
      'No penalty for incorrect answers, so never leave an item unanswered.',
      'The Microsoft Learn panel is available because AZ-500 is associate role-based. It covers learn.microsoft.com but excludes Q&A, practice assessments and your signed-in profile, blocks other domains, and grants no extra time.',
      'Ctrl+F (Command+F on Mac) searches only the Learn panel page you are viewing; closing the panel resets search history.',
      'You cannot return to a case study or a completed section once you have moved past it.',
      'An unscheduled break taken through the exam interface ends access to all previously seen questions.',
      'No personal scratch paper. Test centres provide and collect an erasable whiteboard or laminated sheet; OnVUE candidates get nothing to write on unless a physical whiteboard was explicitly approved on the booking.',
      'Additional time for a non-native language must be requested when booking, not on the day.',
      'Accommodations for assistive devices or extra time must be requested and approved by Microsoft before scheduling.',
      'Hard deadline: the last possible sitting is 31 August 2026, 11:59 PM Central Standard Time. After that the exam, the certification and the renewal assessment are all retired.'
    ],
    afterwards: "A preliminary pass or fail appears on screen within minutes and the official result posts to your Microsoft Learn certification profile, usually within a few hours. The score report shows one overall number against the 700 threshold plus a bar chart of relative performance across the four skill areas, and Microsoft states explicitly that the bars cannot be summed or read as percentages because the areas contain different numbers of questions. If you passed, the Azure Security Engineer Associate certification issues to your dashboard with a 12-month validity — but note carefully that the renewal assessment retires on 31 August 2026 alongside the exam, so this credential cannot be renewed when it expires. Download your certificate and transcript link now. If you failed, apply the retake ladder against the calendar rather than against your feelings: 24 hours to a second attempt, 14 days to a third, USD $165 each time, and nothing at all after 31 August 2026. Use the four-area bar chart to aim a single focused retake within days rather than a broad restudy over weeks. If the deadline has passed or is too close to clear, the path forward is Exam SC-500 (Microsoft Certified: Cloud and AI Security Engineer Associate), which covers most of this ground plus AI workload security — its study guide is at aka.ms/SC500-StudyGuide, and Microsoft notes that its practice assessment is not yet available."
  }
};

export default data;
