// Depth content for: microsoft-az-801
// Sources: learn.microsoft.com AZ-801 exam page and study guide ("Skills measured as of
// October 6, 2025"; retirement September 30, 2026; track consolidating to single exam
// AZ-802), Microsoft exam duration & experience page, exam scoring and retake policy,
// bls.gov Occupational Outlook Handbook (May 2024 wage data).
// All facts checked 2026-08-05.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This guide is compiled and maintained by our IT-certifications desk. Vendor exams in this space are revised and retired frequently, so we track the objectives document by its published revision date and state plainly when an exam is being retired and what replaces it — the single most common way candidates waste money here is studying a superseded blueprint. Fees, scoring, retake rules and renewal terms come from the vendor\u2019s own certification pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Objectives, exam codes, fees and retirement dates were taken from the vendor\u2019s current certification pages and checked for the revision date shown there.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary
  salaryOutlook: {
    headline: '$96,800 median for network and computer systems administrators (BLS, May 2024)',
    summary:
      'The direct salary answer for AZ-801 is $96,800, the May 2024 median for Network and Computer Systems Administrators (SOC 15-1244), the closest Bureau of Labor Statistics occupation to the senior Windows Server hybrid administrator this exam certifies. Two caveats belong with that number. First, BLS classifies by job duties rather than by certificate, so the median describes everyone doing server and network administration work, including veterans with no Azure skills, which means cloud-fluent candidates typically sit above it and first-year hires below it. Second, this occupation is projected to decline 4 percent from 2024 to 2034, with about 14,300 openings a year arising almost entirely from replacement need, and the reason is directly relevant to AZ-801: routine administration is being automated and absorbed into cloud platforms, so the value in the labour market is shifting toward the advanced material this exam covers — securing hybrid infrastructure, high availability, disaster recovery and workload migration, which are exactly the skills that keep an administrator employed while lower-level tasks shrink. The distribution matters for realistic expectations: the lowest 10 percent earned less than $60,320 and the highest 10 percent more than $150,320, and AZ-801 holders who combine the credential with Azure Arc, Defender for Cloud and PowerShell automation cluster toward the top of that range. For comparison, software developers (SOC 15-1252) earned $133,080 at the median in the same release, which is the direction the automation-heavy parts of the senior infrastructure role drift over time, and Database Administrators and Architects (SOC 15-1245) earned $123,100. The realistic framing for a candidate is that AZ-801 is the credential that moves an on-premises senior administrator onto the modern hybrid platform rather than a wage bump attached to a title.',
    rows: [
      { label: 'Median annual wage — network and computer systems administrators (SOC 15-1244)', value: '$96,800', note: 'BLS Occupational Outlook Handbook, May 2024 wage data. Closest BLS occupation to a senior Windows Server hybrid administrator.' },
      { label: 'Lowest 10 percent', value: 'less than $60,320', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $150,320', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Median — software developers (SOC 15-1252)', value: '$133,080', note: 'BLS OOH, May 2024. Reference for the automation-heavy direction of the role.' },
      { label: 'Employment, 2024 / projected change', value: '331,500 jobs / -4% (2024-34)', note: 'BLS OOH for SOC 15-1244; ~14,300 openings a year, nearly all replacement need' }
    ],
    growth: '-4% projected change 2024-34 for SOC 15-1244, with ~14,300 replacement openings a year (BLS OOH); security, HA/DR and migration skills are what keep senior administrators on the growing side of the role',
    source: {
      label: 'BLS Occupational Outlook Handbook — Network and Computer Systems Administrators',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'Microsoft publishes no pass rate for AZ-801 — plan against the scoring mechanics, the retake policy and the September 30, 2026 retirement',
    summary:
      'There is no published pass rate for AZ-801, because Microsoft does not release pass-rate statistics, first-time pass percentages, attempt counts or score distributions for any certification exam, and any percentage attached to AZ-801 on a forum or bootcamp page is anecdote or marketing rather than data. What Microsoft does publish is the scoring model, and it operates identically to AZ-800. The pass mark is 700 on a scale of 1 to 1,000, and Microsoft states explicitly that this is a scaled score which may not equal 70 percent of the available points, because candidates receive question sets of different difficulty and an easier form demands more raw points to reach 700. Counting questions in the exam and converting them to a percentage is therefore a wasted exercise that mostly generates panic. Two more published mechanics matter. First, an unknown subset of items on your form is unscored pilot content: you cannot identify which items they are and must answer them anyway, so an impossible-looking question may not count at all. Second, there is no penalty for guessing, so an unanswered question is strictly worse than a guess and nothing should be left blank. The retake policy adds real cost structure: you must wait 24 hours after a first failure before re-sitting, then 14 days between every subsequent attempt, with a maximum of five attempts in the 12 months following your first sitting, and the full $165 fee is charged each time — which makes a third attempt more expensive than the entire official study path. The scheduling fact that overrides everything in 2026 is the retirement: AZ-801 retires on September 30, 2026, and the Windows Server Hybrid Administrator Associate track consolidates into a single AZ-802 exam, so candidates must decide before starting whether to complete the AZ-800 plus AZ-801 pair by that date or switch to the successor.',
    source: {
      label: 'Microsoft Learn — Exam scoring and score reports',
      url: 'https://learn.microsoft.com/en-us/credentials/certifications/exam-scoring-reports'
    },
    caveat:
      'No official pass rate exists for AZ-801 or for any Microsoft certification exam; treat every percentage you see as unverified. What is published and verifiable: 700 out of 1,000 scaled (not 70 percent of questions); unscored pilot items may be present; no penalty for guessing; 24-hour wait after the first failure and 14 days between subsequent attempts, maximum five attempts in 12 months; $165 per attempt. Exam retires September 30, 2026, with the track moving to a single AZ-802 exam.'
  },

  // P0-3  Study plan
  studyPlan: {
    summary:
      'The planning answer for AZ-801 is that it is a 110 to 150 hour project over ten to twelve weeks for a candidate who has passed AZ-800 or has equivalent hybrid Windows experience, and the single most important planning fact is the September 30, 2026 retirement — you either complete the AZ-800 and AZ-801 pair before that date or you switch your plan to the consolidated AZ-802 exam. AZ-801 is the advanced half of the Windows Server Hybrid Administrator Associate certification and the blueprint, updated October 6, 2025, reflects that: Secure Windows Server on-premises and hybrid infrastructures carries 25-30 percent, Implement and manage Windows Server high availability 10-15 percent, Implement disaster recovery 10-15 percent, Migrate servers and workloads 20-25 percent, and Monitor and troubleshoot Windows Server environments 20-25 percent. Note the profile: this is not a beginner paper, and the blueprint assumes several years of Windows Server experience plus familiarity with the toolset the exam names — Windows Admin Center, PowerShell, Azure Arc, Azure Policy, Azure Monitor, Azure Update Manager, Microsoft Defender for Identity, Microsoft Defender for Cloud and IaaS VM administration. The plan below front-loads security because the hardening domain is the heaviest and because security choices — Defender for Identity deployment, credential protection, privileged access — reappear inside the migration and monitoring domains. It then moves through high availability and disaster recovery as a pair, since they are mechanically linked, leaves migration for after you can secure and replicate workloads, and finishes with monitoring and troubleshooting, which is partly the other domains under fault conditions. The lab is non-negotiable: security, HA/DR and migration questions on the exam reward having executed these tasks in a real environment, and a candidate who has actually failed over a workload understands the material differently from one who has only read about it.',
    totalHours: '110-150 hours over 10-12 weeks',
    weeks: [
      {
        label: 'Week 0',
        focus: 'Lab build and baseline',
        tasks: [
          'Stand up a two-domain-controller lab with a workload VM, then attach the servers to Azure Arc',
          'Deploy an Azure subscription with a budget alert and a storage account for later migration practice',
          'Take the free official practice assessment cold for a per-domain baseline',
          'Confirm the AZ-801 retirement date and decide AZ-800+AZ-801 versus AZ-802'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Weeks 1-3',
        focus: 'Domain 1 — Secure Windows Server on-premises and hybrid (25-30%)',
        tasks: [
          'Harden the environment: credential protection, LAPS, privilege escalation mitigations and the principle of least privilege',
          'Deploy Microsoft Defender for Identity, Microsoft Defender for Cloud and Microsoft Defender for Servers across on-premises and Azure workloads',
          'Configure Windows Server security features such as Credential Guard, Just Enough Administration and Just-in-Time access',
          'Apply Azure Policy and security baselines, then deliberately break a control and verify it is detected'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 4-5',
        focus: 'Domain 2 + 3 — High availability and disaster recovery (10-15% each)',
        tasks: [
          'Implement Windows Server failover clustering and understand cluster-aware storage and networking requirements',
          'Configure Hyper-V Replica, Storage Replica and site failover so a workload actually comes back on the replica',
          'Set up Azure Site Recovery and Azure Backup for a hybrid workload and run a test failover',
          'Document the RPO and RTO of each solution you build — the exam frames HA and DR questions in those terms'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Weeks 6-8',
        focus: 'Domain 4 — Migrate servers and workloads (20-25%)',
        tasks: [
          'Plan and perform an on-premises to Azure IaaS migration for a Windows Server VM, including prerequisites and cutover',
          'Practise with Azure Migrate: discovery, assessment and dependency analysis before the move',
          'Migrate workload types that appear in the blueprint, including files, web workloads and Active Directory roles',
          'Rehearse the rollback path — the exam rewards knowing what to do when a migration goes wrong'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 9-10',
        focus: 'Domain 5 — Monitor and troubleshoot (20-25%) + consolidation',
        tasks: [
          'Configure Azure Monitor, Log Analytics and Azure Update Manager across hybrid servers, and write a few basic KQL queries',
          'Practise a fixed diagnostic order: is the service running, is it reachable, are firewall and Defender controls interfering, is storage or capacity the constraint',
          'Diagnose from real breakage — have a script sabotage your lab, then fix it from symptoms',
          'Two full timed practice exams, then re-lab the two weakest domains'
        ],
        hours: '11-13 hrs/week'
      }
    ],
    variants: [
      { label: 'Already certified in AZ-800 or holding the old MCSA/70-series background', detail: 'Compress to eight weeks. Your networking, storage and Windows Server foundations transfer; spend the recovered time on security hardening and the Azure migration tooling, which are the parts of the blueprint most on-premises veterans have not done.' },
      { label: 'Azure-focused engineer with lighter Windows Server depth', detail: 'Fourteen weeks at 10 hrs/week, with two extra weeks on failover clustering and Storage Replica — the HA domain assumes hands-on Windows Server experience.' },
      { label: 'Deadline-driven candidate after September 30, 2026', detail: 'Do not race a retiring exam. The track consolidates to AZ-802; redirect the plan there and avoid paying twice.' }
    ]
  },

  // P0-4  Prep strategies
  prepStrategies: {
    summary:
      'The strategies that move an AZ-801 score are the ones that force execution in a real hybrid environment, because the blueprint is written in verbs — secure, implement, migrate, troubleshoot — and the exam rewards candidates who have actually done the work. The single highest-yield habit is to build the security domain by breaking things: deploy Microsoft Defender for Identity, apply a credential-protection control, then deliberately exploit or disable a control and watch what Defender reports, because the exam tests whether you understand the tooling\u2019s behaviour rather than its menu structure. Second, treat high availability and disaster recovery as an executed pair rather than two topics: build a failover cluster, configure Hyper-V Replica or Storage Replica, then test failover and measure the actual RPO and RTO, because every HA question on the exam is really a question about what is lost when a failure occurs. Third, do at least one real migration end to end with Azure Migrate — discovery, assessment, dependency analysis, cutover and rollback — because migration is 20-25 percent of the paper and it is the domain where candidates with strong security knowledge but no migration experience lose the most marks. Fourth, learn the monitoring and troubleshooting domain as a fixed diagnostic order rather than a list of tools; when a scenario presents a symptom, the exam wants the next diagnostic step, and a rehearsed sequence — is it running, is it reachable, is a security control interfering, is capacity exhausted — carries you through unfamiliar faults. Fifth, use the free practice assessment three times as a diagnostic and chase the two weakest domain bars, and rehearse at least one multi-step task with a fifteen-minute clock and no documentation, because the lab and case-study formats punish slow navigation. Finally, remember the retirement date is part of the strategy: put September 30, 2026 on your calendar, and if the schedule does not fit, pivot to AZ-802 early rather than late.',
    items: [
      {
        title: 'Learn security by breaking things',
        detail: 'Deploy Defender for Identity, enable Credential Guard or Just-in-Time access, then deliberately trigger a detection or disable a control and observe the telemetry. The exam tests tooling behaviour, and there is no substitute for having seen the alerts your own actions generate.'
      },
      {
        title: 'Execute HA and DR as one practised scenario',
        detail: 'Build the cluster, configure replication, then fail over and measure the result. Candidates who have actually failed over a workload answer the RPO and RTO scenario questions differently from candidates who have only read about them.'
      },
      {
        title: 'Do one real migration with Azure Migrate',
        detail: 'Run discovery and assessment, review dependency analysis, migrate a workload, then practise rollback. Migration is 20-25 percent of the paper and punishes candidates who have never performed a cutover.'
      },
      {
        title: 'Turn troubleshooting into a fixed diagnostic order',
        detail: 'The scenario questions ask for the next diagnostic step, not the final fix. Rehearse a sequence — is it running, is it reachable, is a security control interfering, is capacity the constraint — until it is reflex.'
      },
      {
        title: 'Use the practice assessment as a diagnostic, not a mock exam',
        detail: 'It is free, unlimited and has no labs, so a high score overstates readiness. Take it cold, mid-study and the week before; each time, spend the next week only on the two weakest domain bars.'
      },
      {
        title: 'Rehearse a task under a clock with no documentation',
        detail: 'Microsoft does not publish which sittings include a lab. Prepare as if you will get one: complete a multi-step security, migration or DR task in fifteen minutes with only your own knowledge, because navigation speed is the real constraint in labs.'
      },
      {
        title: 'Plan against the retirement date from day one',
        detail: 'AZ-801 retires September 30, 2026 and the track consolidates to AZ-802. Work backwards from that date; if the arithmetic does not fit, switch to AZ-802 instead of racing an exam you cannot sit.'
      }
    ]
  },

  // P0-5  Study-resource comparison
  resourceComparison: {
    summary:
      'The buying logic for AZ-801 resources is anchored by the official free materials and complicated by the September 30, 2026 retirement: the Microsoft Learn learning paths for this exam are the blueprint, are kept current with the October 6, 2025 objective update, and cost nothing, so the base programme is free. What is genuinely worth paying for is lab access and migration practice — the security, HA/DR and migration domains cannot be learned from reading, and an Azure subscription (typically $20-60 across a study window if you delete resource groups) plus Windows Server evaluation VMs covers the execution gap that video cannot. The free official practice assessment is the second non-negotiable resource: it is drawn from the exam domain, unlimited, and gives per-domain diagnostics no third-party bank can match for accuracy. Beyond those, paid practice tests from MeasureUp (~$99-129 list, frequently discounted) add question volume and worked explanations and are the clearest justification for a spend after a failed attempt, while Whizlabs tests (~$20-30) are a cheap second opinion whose explanations should be cross-checked against current docs. Video fills specific gaps well: John Savill\u2019s free Azure content on YouTube is strong on the hybrid and security material, and Udemy courses at the $15-30 sale price give a structured narrative for candidates who do not hold attention with text. Formal instructor-led AZ-801T00 training runs $1,500-2,500 through Microsoft Learning Partners and is rarely worth self-funding given the free Learn path, though it is a legitimate employer-funded option. Because the exam retires in September 2026, confirm any third-party course covers the current Windows Server version and objectives before buying, and treat older MCSA-era material as historical reference only.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn AZ-801 learning paths (official)', values: ['Free', 'Learning paths across security, HA/DR, migration and monitoring', 'The blueprint itself; kept current with the October 6, 2025 objective update', 'Start here — the paths are updated when the exam is updated'] },
      { label: 'Microsoft official practice assessment', values: ['Free', 'Unlimited online question bank on Microsoft Learn', 'Per-domain diagnostics — take it cold, mid-study and the week before', 'Take it three times and chase the two weakest domain bars'] },
      { label: 'Windows Server evaluation VMs + Azure subscription', values: ['Free evaluation VMs; $20-60 Azure spend if you delete resources', 'Self-built hybrid lab', 'The execution gap — security hardening, failover and migration all need a real environment', 'Set a budget alert on day one and delete resource groups between sessions'] },
      { label: 'Microsoft exam sandbox (aka.ms/examdemo)', values: ['Free', 'Interactive exam-interface demo', 'Learning the case-study, hot-area and lab formats before exam day', 'Run it once before booking — the formats cost more time than the content'] },
      { label: 'John Savill\u2019s Technical Training (YouTube)', values: ['Free', 'Long-form whiteboard video', 'The Azure hybrid security and migration material, explained by a Microsoft MVP', 'Best free whiteboard coverage of the hybrid security and migration material'] },
      { label: 'MeasureUp AZ-801 practice test', values: ['~$99-129 list, frequently discounted', 'Timed practice exam with explanations', 'Question volume with worked explanations, especially after a failed attempt', 'The clearest buy after a failed attempt'] },
      { label: 'Whizlabs AZ-801 practice tests', values: ['~$20-30', 'Question bank', 'Cheap readiness checks; cross-check explanations against current docs', 'Cross-check anything surprising against the docs'] },
      { label: 'Udemy AZ-801 course', values: ['~$15-30 on sale, $90+ list', 'Video course', 'A structured narrative if self-paced text does not hold your attention', 'Buy on sale; confirm it covers the October 2025 objectives'] },
      { label: 'Official instructor-led AZ-801T00', values: ['$1,500-2,500 via Learning Partners', 'Four-day class with labs', 'Employer-funded candidates who want a schedule and an instructor', 'Employer-funded only; the free Learn path covers the same ground'] }
    ],
    footnote: 'Prices checked 2026-08-05, USD list before tax, regional adjustment, sales or employer discounts. Udemy list prices are close to fictional; the sale price is the real price. Because AZ-801 retires September 30, 2026, confirm any third-party course is written for the current Windows Server and the October 2025 objectives. We take no commission from any provider and order nothing by commercial relationship.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The most expensive AZ-801 mistake in 2026 is the calendar: studying for an exam that retires on September 30, 2026 without realising it, or buying material written for an older Windows Server version, which wastes both money and the window you have left. The second is treating security as a list of features to memorise rather than behaviour to understand — candidates who can name Credential Guard but have never seen it block an attack lose the scenario items that dominate the heaviest domain. The third is reading about high availability instead of building it: failover clustering, Hyper-V Replica and Storage Replica are execution topics, and a candidate who has never performed a failover cannot reliably answer the RPO and RTO questions the exam asks. The fourth is approaching migration without having done one — migration is 20-25 percent of the paper, and the cutover, rollback and dependency questions punish anyone who has only watched a demo. The fifth is skipping the monitoring and troubleshooting domain because it sounds like a rounding error, when it is 20-25 percent and is where the fixed diagnostic order separates prepared candidates from the rest. The sixth is mismanaging the scoring model: treating 700 as 70 percent of questions when it is a scaled score, leaving items blank when there is no penalty for guessing, or wasting time doing arithmetic in the exam. The seventh is planning to rely on the in-exam Microsoft Learn panel as a safety net; the panel is real but the clock does not stop, and candidates who browse end up with unanswered questions. Finally, some candidates re-sit immediately after a failure on the same knowledge, ignoring the retake policy\u2019s cost structure and the score report\u2019s diagnostic value.',
    items: [
      {
        mistake: 'Studying without checking the retirement date',
        fix: 'AZ-801 retires September 30, 2026 and the track consolidates into AZ-802. Put the date in your calendar in week zero, verify you are studying the October 6, 2025 objectives, and decide early whether to finish the two-exam pair or switch to AZ-802.'
      },
      {
        mistake: 'Memorising security features instead of understanding their behaviour',
        fix: 'The exam asks what happens when a control is deployed or defeated. Lab the tools — Defender for Identity, Credential Guard, Just-in-Time access — and generate your own detections so the behaviour, not the menu, is what you know.'
      },
      {
        mistake: 'Reading about HA and DR instead of building it',
        fix: 'Failover clustering, Hyper-V Replica, Storage Replica and Azure Site Recovery are execution topics. Build them, fail a workload over, and measure the RPO and RTO — the scenario questions are built around those numbers.'
      },
      {
        mistake: 'Approaching migration without having performed one',
        fix: 'Run a real Azure Migrate discovery-to-cutover cycle, including rollback. Migration is 20-25 percent of the paper and the dependency and cutover questions punish demo-only candidates.'
      },
      {
        mistake: 'Skipping the monitoring domain as a rounding error',
        fix: 'Monitor and troubleshoot is 20-25 percent. Build a fixed diagnostic order and practise it against deliberately broken workloads; it is also where prepared candidates pick up cheap points.'
      },
      {
        mistake: 'Misreading the scoring model',
        fix: '700 is a scaled score, not 70 percent of questions; some items are unscored pilot content; guessing is free. Never leave a blank and stop doing percentage arithmetic in the exam.'
      },
      {
        mistake: 'Treating the Learn panel as a safety net',
        fix: 'The panel is available on role-based exams but the clock keeps running. Use it for two or three precise lookups only; candidates who browse run out of time on a 120-minute exam.'
      },
      {
        mistake: 'Re-sitting on the same knowledge after a fail',
        fix: 'The 24-hour rule permits a fast retake but the $165 fee and 14-day wait make it expensive. Use the skill-area bars on the score report, target the weakest areas for two weeks, then re-sit.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'AZ-801 is an associate role-based exam, which means it uses Microsoft\u2019s full item library and your form mixes standard multiple choice with interactive formats, and on some sittings includes a case study or a live lab. Microsoft does not publish a question count for AZ-801 and the number varies by form, but exam time is 120 minutes — 140 minutes of seat time including the NDA, instructions and survey — and most forms run roughly 40-60 items. Because it is an associate role-based exam, the Microsoft Learn panel is available inside the exam: the full learn.microsoft.com domain minus Q&A, practice assessments and your profile, with the clock running while you use it. Navigation rules matter as much as item format. Within a case study you answer a set of questions attached to a shared scenario and cannot return to the case study once you move past it, and taking an unscheduled break through the exam interface locks you out of every question already seen. The formats below are the standard role-based set, and the free exam sandbox at aka.ms/examdemo lets you handle every one before exam day — that single rehearsal is worth more than an extra practice test because the formats, not the content, are where candidates lose avoidable time. Most items cover generally available features, with preview features appearing only when they are in common use. The scoring rules to internalise: 700 scaled on a 1-1,000 scale, no penalty for guessing, and an unknown subset of items is unscored pilot content you cannot identify and must answer anyway. The scenario stems on this exam tend to be longer and more layered than on AZ-800, so underline the constraint clause — must remain available, must minimise downtime, must preserve compliance — before reading the options.',
    types: [
      { name: 'Multiple choice (single answer)', share: 'The largest share of items on a typical form', detail: 'Scenario stems with a constraint — least downtime, must survive a single site failure, must not require reconfiguration — where several options technically work and one satisfies the constraint.' },
      { name: 'Multiple response', share: 'Common', detail: 'Select all that apply, sometimes with the required number stated. No partial credit, so evaluate each option independently.' },
      { name: 'Drag and drop / build list', share: 'Frequent', detail: 'Order the steps of a migration or failover, or match controls to requirements. Unused items may be present as distractors.' },
      { name: 'Hot area', share: 'Frequent', detail: 'A rendered console, portal blade or PowerShell snippet with selectable regions. Console and portal familiarity converts directly into marks.' },
      { name: 'Case study', share: 'On some forms', detail: 'Multi-tab scenario — existing environment, requirements, technical constraints — followed by several questions. Read the requirements tab twice; you cannot return once you move past it.' },
      { name: 'Interactive lab', share: 'On some forms; Microsoft does not publish which', detail: 'A real environment in which you perform tasks, graded on end state. Labs can be removed at short notice for outages. If your form has one, you get the full 120 minutes of exam time.' },
      { name: 'Yes/No repeated-scenario sets', share: 'Occasional', detail: 'The same scenario restated with a different proposed solution each time. All three can be yes, or all three no — evaluate each independently.' },
      { name: 'Mark for review + review screen', share: 'Available throughout, subject to section rules', detail: 'Flag uncertain items and return before submitting a section; an unscheduled break through the interface ends access to everything already seen.' }
    ],
    samples: [
      {
        prompt: 'An organisation runs a mission-critical virtualised workload on a two-node Windows Server failover cluster and must keep it available if an entire rack is lost. The solution must minimise failover time and cannot rely on storage that is local to one node. Which configuration satisfies the requirement?',
        options: [
          'A. Failover clustering with a single shared SAS-attached storage array',
          'B. Failover clustering with Storage Replica asynchronously replicating between the two nodes',
          'C. Hyper-V Replica replicating to a standalone host in the same rack',
          'D. Azure Backup with daily restore points and manual failover'
        ],
        answer: 'B',
        explanation: 'Storage Replica provides block-level replication so the cluster can fail the workload over to the surviving node even though storage is not shared, and it removes the single-array dependency that option A keeps. A is the classic distractor: a shared SAS array is conventional for failover clustering but creates a single point of failure at the storage layer, so losing the rack loses the storage and the workload. C replicates to a host in the same rack, which does not survive the rack loss the stem requires. D restores data but is a backup mechanism, not high availability — recovery time is measured in hours, not seconds, and it does not fail a running workload over automatically. When the stem pairs availability with a storage constraint, the answer is the replication technology that removes the shared dependency, not the traditional shared-array cluster.'
      },
      {
        prompt: 'An administrator is migrating an on-premises Windows Server VM to Azure IaaS and must minimise downtime. The migration must preserve the server\u2019s hostname, IP configuration on the new virtual network, and all installed roles. Which approach best meets the requirement?',
        options: [
          'A. Agent-based replication with Azure Migrate to an Azure VM, then a controlled cutover',
                   'B. Export the VHD, upload it as a blob, and create a VM from the uploaded disk',
          'C. Rebuild the server manually in Azure and reinstall the roles from scratch',
          'D. Use Azure Site Recovery to replicate the VM and perform a planned failover'
        ],
        answer: 'D',
        explanation: 'Azure Site Recovery is the migration tool built for minimise-downtime cutovers: it replicates the VM continuously to Azure and a planned failover brings the workload up in a controlled switch with a short interruption window, preserving the replicated disk contents. A is a distractor that conflates tools: Azure Migrate handles discovery and assessment, while agent-based replication to an Azure VM for cutover is more commonly executed through Site Recovery or the Azure Migrate migration tooling — and even then, for a controlled, low-downtime cutover Site Recovery\u2019s planned failover is the direct mechanism. B works for a one-shot migration but the downtime includes the VHD upload and VM provisioning, which is not minimised. C guarantees the longest downtime and the highest risk of drift, and it is not a migration. The stem\u2019s minimise-downtime clause plus preserve-state requirement points to continuous replication with a planned failover.'
      },
      {
        prompt: 'A hybrid environment has several on-premises Windows Server VMs connected to Azure Arc. The security team needs a central view of security findings, compliance status and recommended hardening actions for those servers, integrated with the organisation\u2019s Azure subscription. Which service should be used?',
        options: [
          'A. Microsoft Defender for Cloud with the Arc-enabled servers as a connected cloud resource',
          'B. Windows Admin Center on a single management server',
          'C. Azure Update Manager alone, reviewing update compliance',
          'D. Microsoft Entra Domain Services with security reporting'
        ],
        answer: 'A',
        explanation: 'Microsoft Defender for Cloud is the central console that surfaces security findings, regulatory compliance status and hardening recommendations, and Azure Arc-enabled servers register as connected cloud resources that Defender for Cloud can assess — exactly the central-view requirement. B gives a local administration tool with per-server views and no central security scoring across the fleet. C covers only update compliance, which is a subset of what the stem asks for. D provides a managed domain service for authentication, not a security-findings console for existing servers. When the stem asks for central security posture across hybrid machines, the Defender for Cloud plus Arc combination is the answer, and this pairing recurs throughout the security domain of the exam.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'AZ-801 is delivered through Pearson VUE, at a test centre or online through OnVUE, and the direct exam-day answer is 120 minutes of exam time inside 140 minutes of seat time — the extra 20 minutes cover the NDA, instructions and post-exam survey — with a scaled pass mark of 700 on a 1-1,000 scale and no penalty for guessing. The test centre versus OnVUE choice is the first real decision. A centre gives you a supervised workstation, a physical erasable whiteboard genuinely useful for multi-step failover and migration scenarios, and no room scan; OnVUE gives you your own desk but a stricter environment — a 360-degree room scan, a clear desk, no second monitors, and no physical scratch paper unless it was explicitly approved on the booking. Check what your booking allows rather than assuming, because the rules have tightened and an item that was acceptable a year ago can end your session now. Whichever you choose, arrive or launch check-in thirty minutes early; OnVUE check-in can take twenty minutes on a bad day, and a late check-in is a forfeited fee. Inside the exam, the layered scenario stems on this exam reward a deliberate method: underline the constraint clause before reading the options, flag anything costing more than ninety seconds, and do not take an unscheduled break through the exam interface because it locks you out of everything already seen. If your form includes a case study, decide before the clock starts whether to work it first while fresh or last with a known budget, and read the requirements tab twice. The Microsoft Learn panel is available on this exam — use it for two or three precise lookups, never as a safety net, because the clock does not stop while you browse.',
    bring: [
      'Government-issued photo ID with your name matching your Microsoft Learn certification profile exactly — a middle-initial mismatch is a common and expensive turn-away',
      'A second form of ID for the test centre if your primary is not a passport or driving licence; check your Pearson VUE confirmation for what your country requires',
      'Your Pearson VUE confirmation and exam registration number',
      'At a test centre: nothing else; everything else goes into a locker',
      'For OnVUE: the phone used for check-in photo upload — it goes out of reach once check-in completes',
      'For OnVUE: a physical whiteboard with an erasable marker, only if explicitly permitted on your booking'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker at a centre, out of the room entirely for OnVUE',
      'Your own paper, pens, notebooks and sticky notes',
      'Second monitors — OnVUE requires a single display, and a disconnected second monitor on the desk is still a violation',
      'Bags, coats, hats and any headwear not worn for religious reasons',
      'Food and drink beyond what the centre permits; a clear water bottle is sometimes allowed at centres but is not guaranteed',
      'Anyone else in the room for OnVUE — the proctor ends the session if another person is heard or seen'
    ],
    timeline: [
      { time: '2-3 days before', detail: 'Run the OnVUE system test on the exact machine, network and location you will use. Corporate laptops with locked-down security software are the single most common cause of a failed launch.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or start OnVUE check-in. Check-in is not the exam start, and starting late can cost the booking.' },
      { time: 'Check-in', detail: 'ID verification, photograph, and for OnVUE a 360-degree room scan. Test centres add a locker, a pocket check and sometimes a palm-vein scan.' },
      { time: 'First 5 minutes', detail: 'NDA and instructions inside seat time but outside exam time. The launch screen tells you your exam duration.' },
      { time: 'First 2 minutes of the exam', detail: 'Note the question count and duration and set a per-question pace. If there is a case study or lab, decide immediately whether to work it first or last.' },
      { time: 'Throughout', detail: 'Underline constraints in scenario stems, mark anything costing more than 90 seconds, and move on. Do not take an unscheduled break through the interface.' },
      { time: 'Final 10 minutes', detail: 'Return to marked items and make sure nothing is blank; a guess beats an empty response because there is no penalty.' },
      { time: 'On submission', detail: 'A short survey, then a preliminary pass or fail on screen within a few minutes.' }
    ],
    rules: [
      'Pass mark is 700 on a 1-1,000 scale, and it is a scaled score that may not equal 70 percent of the questions.',
      'No penalty for incorrect answers — never leave an item blank.',
      'The Microsoft Learn panel is available because this is an associate role-based exam; it covers learn.microsoft.com minus Q&A, practice assessments and your profile, and the clock keeps running while you use it.',
      'You cannot return to a case study or completed section once you move past it, and an unscheduled break through the exam interface ends access to everything already seen.',
      'No breaks are scheduled; if you take one via the interface it carries the same navigation penalty.',
      'No scratch paper of your own — centres supply an erasable whiteboard; OnVUE candidates get no paper unless a physical whiteboard was explicitly approved on the booking.',
      'If the exam is not offered in your preferred language you can request an additional 30 minutes when booking; this must be requested in advance, not on the day.',
      'Assistive-device or extra-time accommodations must be requested and approved through Microsoft before you schedule.'
    ],
    afterwards:
      'You get a preliminary pass or fail on screen within minutes of submitting, and the official result posts to your Microsoft Learn certification profile within a few hours, occasionally a couple of business days if a lab needs grading. The score report shows one overall number against the 700 threshold plus a bar chart of relative performance across the five skill areas; Microsoft is explicit that those bars cannot be summed or read as percentages because the areas contain different numbers of questions, so treat them as relative diagnostics. If you passed, AZ-801 completes the Windows Server Hybrid Administrator Associate certification alongside AZ-800, which is valid for 12 months and renewed free via an online assessment whose window opens six months before expiry — set the reminder now, and note the whole track consolidates to a single AZ-802 exam after September 30, 2026. If you failed, the retake rules apply: 24 hours before a second attempt, 14 days between subsequent attempts, five attempts maximum in the 12 months from your first sitting, and the full $165 fee each time. Use the skill-area chart to target the retake rather than restudying everything, and change your question source — repeating the same practice bank mostly measures how well you have memorised that bank.'
  }
};

export default data;
