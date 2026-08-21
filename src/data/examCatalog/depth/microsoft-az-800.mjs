// Depth content for: microsoft-az-800
// Sources: learn.microsoft.com AZ-800 exam page and study guide ("Skills measured as of
// January 21, 2026"; retirement September 30, 2026, track consolidating to single exam
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
      'The direct salary answer for AZ-800 is $96,800, the May 2024 median for Network and Computer Systems Administrators (SOC 15-1244), the closest Bureau of Labor Statistics occupation to the Windows Server hybrid administrator role this exam certifies. That is the honest headline, and two caveats belong next to it. First, BLS classifies by job duties rather than by certificate, so the median describes every person doing on-premises and hybrid server administration work — including veteran on-premises admins with no Azure skills — which means cloud-fluent candidates tend to sit above it and first-year hires below it. Second, this is an occupation BLS projects to decline 4 percent from 2024 to 2034, with roughly 14,300 openings a year arising almost entirely from replacement need, and the reason for the decline is precisely the skills gap AZ-800 closes: traditional per-server administration is being absorbed by cloud platforms, and the people who stay employed are the ones who manage servers as workloads inside Azure rather than as boxes in a server room. That makes the credential\u2019s value strategic rather than ornamental — it is the certification that repositions an administrator from running the thing being replaced to running the thing that replaced it. The wage distribution matters too: the lowest 10 percent of this occupation earned less than $60,320 and the highest 10 percent more than $150,320, and AZ-800 holders cluster toward the top of that range when they pair the credential with Azure Arc, Entra ID and PowerShell automation. For comparison, software developers (SOC 15-1252) earned a $133,080 median in the same release, which is the direction the automation-heavy parts of the hybrid administrator role drift toward over time.',
    rows: [
      { label: 'Median annual wage — network and computer systems administrators (SOC 15-1244)', value: '$96,800', note: 'BLS Occupational Outlook Handbook, May 2024 wage data. Closest BLS occupation to a Windows Server hybrid administrator.' },
      { label: 'Lowest 10 percent', value: 'less than $60,320', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $150,320', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Median — software developers (SOC 15-1252)', value: '$133,080', note: 'BLS OOH, May 2024. The direction hybrid administrators move toward as automation work grows.' },
      { label: 'Employment, 2024 / projected change', value: '331,500 jobs / -4% (2024-34)', note: 'BLS OOH for SOC 15-1244; ~14,300 openings a year, nearly all replacement need' }
    ],
    growth: '-4% projected change 2024-34 for SOC 15-1244, with ~14,300 replacement openings a year (BLS OOH); hybrid and cloud administration is the migration path off the shrinking side of this occupation',
    source: {
      label: 'BLS Occupational Outlook Handbook — Network and Computer Systems Administrators',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'Microsoft publishes no pass rate for AZ-800 — plan against the scoring mechanics and the September 30, 2026 retirement date',
    summary:
      'There is no published pass rate for AZ-800. Microsoft does not release pass-rate statistics, first-time pass percentages, attempt counts or score distributions for any certification exam, and any percentage you see attached to AZ-800 on a forum or bootcamp page is anecdote or marketing, not data. What Microsoft does publish is the scoring model, and it matters in a specific way on this exam. The pass mark is 700 on a scale of 1 to 1,000, and Microsoft states plainly that this is a scaled score that may not equal 70 percent of the available points, because candidates receive question sets of different difficulty and easier forms demand more raw points to reach 700. Doing mental arithmetic on question counts in the exam is therefore a waste of time that mostly produces panic. Two more scoring mechanics matter. First, an unknown subset of items on your form is unscored pilot content — you cannot identify which items they are and must answer them anyway, so an impossible-looking question may not count at all. Second, there is no penalty for guessing, so an unanswered question is strictly worse than a guess. The retake policy adds a cost structure: you must wait 24 hours after a first failure before re-sitting, then 14 days between every subsequent attempt, with a maximum of five attempts in the 12 months after your first sitting, and the full $165 fee is charged each time. The most important scheduling fact is not scoring at all: AZ-800 retires on September 30, 2026, when the Windows Server Hybrid Administrator track consolidates into a single AZ-802 exam, so any AZ-800 study plan must be anchored to that date and a decision made now about which exam to target.',
    source: {
      label: 'Microsoft Learn — Exam scoring and score reports',
      url: 'https://learn.microsoft.com/en-us/credentials/certifications/exam-scoring-reports'
    },
    caveat:
      'No official pass rate exists for AZ-800 or for any Microsoft certification exam; treat every percentage you see as unverified. What is published and verifiable: 700 out of 1,000 scaled (not 70 percent of questions); unscored pilot items may be present; no penalty for guessing; 24-hour wait after the first failure and 14 days between subsequent attempts, maximum five attempts in 12 months; $165 per attempt. Exam retires September 30, 2026, with the track moving to a single AZ-802 exam.'
  },

  // P0-3  Study plan
  studyPlan: {
    summary:
      'The first planning decision for AZ-800 is a calendar decision, not a study decision: the exam retires on September 30, 2026, and Microsoft is consolidating the Windows Server Hybrid Administrator Associate track into a single AZ-802 exam, so you either commit to passing AZ-800 and its companion AZ-801 before that date or you switch your study to the new track. Assuming you choose AZ-800, budget 100 to 140 hours over ten to twelve weeks for a candidate coming from an on-premises Windows Server background, and add two to three weeks if Azure hybrid services are new to you. This is a hands-on exam and the plan below assumes you can build a lab — at minimum a Windows Server evaluation VM joined to Active Directory plus an Azure subscription with Azure Arc connected, and ideally a second site for replication scenarios. The five current domains, per the study guide updated January 21, 2026, are Deploy and manage AD DS in on-premises and cloud environments at 30-35 percent — by far the heaviest area and the one to start with — Manage Windows Servers and workloads in a hybrid environment at 10-15 percent, Manage virtual machines and containers at 15-20 percent, Implement and manage an on-premises and hybrid networking infrastructure at 15-20 percent, and Manage storage and file services at 15-20 percent. Note that AD DS dominates: a candidate who under-invests there is giving up roughly a third of the paper. The sequencing below front-loads AD DS and identity because everything else — Arc onboarding, DNS, hybrid networking, DFS — depends on domain and identity concepts, and it deliberately leaves the lightest domain, hybrid workload management, for the final weeks. Each week assumes roughly 10-12 hours of mixed reading and lab time, and the performance-based and case-study formats on the exam reward repeated hands-on sessions over cramming.',
    totalHours: '100-140 hours over 10-12 weeks',
    weeks: [
      {
        label: 'Week 0',
        focus: 'Lab build and baseline',
        tasks: [
          'Deploy two Windows Server evaluation VMs, promote one to a domain controller, and confirm the second can join the domain',
          'Create an Azure subscription with a budget alert, and deploy a small Windows Server VM in Azure',
          'Take the free official practice assessment cold to get a per-domain baseline',
          'Verify the AZ-800 retirement date and your personal exam deadline before buying any material'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Weeks 1-3',
        focus: 'Domain 1 — Deploy and manage AD DS (30-35%)',
        tasks: [
          'Deploy domain controllers on-premises and in Azure; promote, demote and remove; manage FSMO roles and their transfer',
          'Configure multi-site, multi-domain and multi-forest environments: sites, replication, trusts, RODCs',
          'Create and manage users, groups, service accounts and group policy, including the choice between GPO and GPO preferences',
          'Implement hybrid identity: Microsoft Entra Connect Sync, Cloud Sync, Entra Domain Services and Connect Health'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 4-5',
        focus: 'Domain 3 — Virtual machines and containers (15-20%)',
        tasks: [
          'Create and configure Windows Server Azure VMs, including sizing, disks, NICs and availability options',
          'Manage VM extensions, Azure Update Manager and Azure Automation for hybrid workloads',
          'Deploy and manage Windows containers: images, Dockerfile basics, container runtime, and containers on Windows Server',
          'Run through a PowerShell remoting second-hop scenario and Just Enough Administration configuration'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Weeks 6-7',
        focus: 'Domain 4 — Hybrid networking (15-20%)',
        tasks: [
          'Build a site-to-site VPN and connect on-premises and Azure networks end to end',
          'Configure DNS: conditional forwarders, zones, and Azure DNS private zones for name resolution across the boundary',
          'Set up IPAM, DHCP failover and network policies, then break them deliberately and diagnose',
          'Practise traffic flows: NSGs, UDRs, and routing decisions between on-premises and Azure'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Weeks 8-9',
        focus: 'Domain 5 — Storage and file services (15-20%) + Domain 2 — Hybrid workload management (10-15%)',
        tasks: [
          'Configure Storage Spaces, Storage Replica, and Azure File Sync with a server endpoint and cloud tiering',
          'Set up data deduplication and understand where it pays and where it does not',
          'Install the Azure Connected Machine agent, verify Azure Arc registration, and apply Azure Machine Configuration',
          'Use Windows Admin Center on-premises and in Azure, and manage a hybrid workload end to end'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Week 10',
        focus: 'Timed full exams and gap closing',
        tasks: [
          'Two full timed practice exams weighted to the current five domains',
          'Re-lab every miss; convert mistakes into lab scenarios you have not done before',
          'Final pass over FSMO roles, GPO vs GPO preferences, and Azure Arc endpoints',
          'Confirm your Pearson VUE booking and run the OnVUE system test if testing online'
        ],
        hours: '10-12 hrs'
      }
    ],
    variants: [
      { label: 'Experienced on-premises Windows Server admin', detail: 'Compress to seven weeks. Your AD DS, DNS, networking and storage knowledge transfers directly; the genuinely new material is the Azure integration — Arc, Entra Connect Sync, Azure File Sync, Azure Update Manager — which you should front-load and lab heavily.' },
      { label: 'Azure-focused admin with light Windows Server exposure', detail: 'Fourteen weeks at 10 hrs/week. Add two weeks purely on AD DS before Week 1, because a third of the paper assumes you can deploy and manage domain controllers without guidance.' },
      { label: 'Deadline-driven candidate close to September 30, 2026', detail: 'Consider switching to AZ-802 planning instead of racing AZ-800 and AZ-801; one exam fee and one sitting may be the faster route to the same credential.' }
    ]
  },

  // P0-4  Prep strategies
  prepStrategies: {
    summary:
      'The strategies that move an AZ-800 score are the ones that force you to do the work with the actual tools, because this exam measures whether you can operate a hybrid Windows environment, not whether you can recognise it in a list. The single highest-yield habit is to build every lab scenario in the tools the blueprint names — Windows Admin Center, PowerShell, Azure Arc, Azure Policy, Azure Monitor, Azure Update Manager, Microsoft Defender for Identity and Microsoft Defender for Cloud — because those specific products recur throughout the paper and candidates who only know them from video lose items they could otherwise answer. Second, do every identity task three ways where possible: the GUI, PowerShell, and the relevant Azure blade, because the exam freely mixes all three surfaces. Third, treat AD DS as the anchor of the whole exam: FSMO roles, replication, trusts, sites, RODCs and hybrid identity integration are the difference between a pass and a fail, and they reward being able to narrate a deployment rather than recognise a concept. Fourth, use the free official practice assessment as a diagnostic three times across your study window — cold before Week 0, at the halfway point, and the week before — and chase the two weakest domain bars each time rather than grinding it to a high score, because it does not include labs and can flatter you. Fifth, rehearse a case-study and lab rhythm under a clock, because Microsoft does not publish which sittings include a lab and you must be ready either way; completing a multi-step Arc-and-PowerShell scenario in fifteen minutes with no documentation is the closest rehearsal to the real constraint. Finally, learn the Microsoft Learn in-exam panel now by studying with search restricted to learn.microsoft.com, so on the day you can find an exact cmdlet parameter in seconds without burning your clock.',
    items: [
      {
        title: 'Lab in the actual toolset the blueprint names',
        detail: 'Windows Admin Center, PowerShell remoting, Azure Arc, Azure Policy, Azure Monitor and Azure Update Manager recur across the paper. Practise each one until you can drive it without a tutorial open — the exam assumes you have seen the blades, the commands and the error messages, not just the slides.'
      },
      {
        title: 'Do identity tasks three ways: GUI, PowerShell, Azure',
        detail: 'Create a user, reset a password and add a group membership in Server Manager, then in PowerShell, then via the relevant Entra or Azure surface. The exam mixes surfaces within a single form, and cross-surface familiarity is what converts recognition into marks.'
      },
      {
        title: 'Anchor your study in AD DS',
        detail: 'AD DS is 30-35 percent of the paper and underpins the other domains. Be able to narrate a domain controller deployment, a trust configuration, a replication topology and an Entra Connect Sync setup from memory before you consider yourself exam-ready.'
      },
      {
        title: 'Use the practice assessment as a diagnostic, three times',
        detail: 'It is free, unlimited and drawn from the exam domain, but it has no labs, so a high score overstates readiness. Take it cold for a baseline, again mid-study, and again the week before; each time, spend the following week only on the two weakest bars.'
      },
      {
        title: 'Rehearse a lab under a clock',
        detail: 'Microsoft does not publish which sittings include a live lab, and labs can be pulled at short notice for outages. Prepare as if you will get one: pick a multi-step scenario — Arc-connect a server, apply a policy, verify with Monitor — and complete it in fifteen minutes with no documentation.'
      },
      {
        title: 'Know the retirement deadline and plan backwards',
        detail: 'AZ-800 retires September 30, 2026 and the track consolidates to AZ-802. Put the date on a calendar the day you start, subtract your intended study weeks, and if the arithmetic does not fit, switch to AZ-802 rather than racing an exam you cannot sit.'
      }
    ]
  },

  // P0-5  Study-resource comparison
  resourceComparison: {
    summary:
      'The buying decision for AZ-800 resources is dominated by two realities: the official free materials cover the exam well, and the exam retires on September 30, 2026, so third-party content written for an earlier Windows Server version is the main waste risk. The Microsoft Learn AZ-800 learning paths — five paths spanning identity, workload management, virtualization and containers, networking, and storage and file services — are the blueprint itself, are kept current with the January 2026 objective update, and are free; a candidate who works through them and builds the labs they link to has a complete programme. The free official practice assessment is the second non-negotiable resource because it is drawn from the exam domain and gives per-domain diagnostics that no third-party bank can match for accuracy. Beyond those, the only clearly justified spend is a live lab: a Windows Server evaluation VM is free, but an Azure subscription for Arc, Azure File Sync and Azure Update Manager scenarios typically costs $20-60 across a study window if you delete resource groups promptly. Paid practice tests from MeasureUp or Whizlabs add question volume and explanation depth, but treat their per-question accuracy as lower than the official assessment and cross-check anything surprising against the docs. Video courses — John Savill\u2019s free Azure content on YouTube, or Udemy courses in the $15-30 sale range — help most for the hybrid identity and Arc material where watching an experienced operator matters. Formal instructor-led AZ-800 training runs $1,500-2,500 through Microsoft Learning Partners and is rarely worth self-funding given the free Learn path, though it is a legitimate employer-funded option. The footnote that anchors the comparison: prices below are US list prices checked 2026-08 and change; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn AZ-800 learning paths (official)', values: ['Free', 'Five learning paths with modules and knowledge checks', 'The blueprint itself; kept current with the January 21, 2026 objective update', 'Start here — the paths are updated when the exam is updated'] },
      { label: 'Microsoft official practice assessment', values: ['Free', 'Unlimited online question bank on Microsoft Learn', 'Per-domain diagnostics — take it cold, mid-study and the week before', 'Take it three times and chase the two weakest domain bars'] },
      { label: 'Windows Server evaluation VMs + Azure subscription', values: ['Free evaluation VMs; $20-60 Azure spend if you delete resources', 'Self-built hybrid lab', 'The highest-value spend — Arc, Azure File Sync, Update Manager and DNS scenarios need a real environment', 'Set a budget alert on day one and delete resource groups between sessions'] },
      { label: 'Microsoft exam sandbox (aka.ms/examdemo)', values: ['Free', 'Interactive exam-interface demo', 'Learning the case-study, hot-area and lab formats before exam day', 'Run it once before booking — the formats cost more time than the content'] },
      { label: 'John Savill\u2019s Technical Training (YouTube)', values: ['Free', 'Long-form whiteboard video', 'The Azure hybrid and identity material, explained by a Microsoft MVP', 'Best free whiteboard coverage of the hybrid identity and Arc material'] },
      { label: 'MeasureUp AZ-800 practice test', values: ['~$99-129 list, frequently discounted', 'Timed practice exam with explanations', 'Second-opinion question volume after a failed attempt', 'The clearest buy after a failed attempt'] },
      { label: 'Whizlabs AZ-800 practice tests', values: ['~$20-30', 'Question bank', 'Cheap readiness checks; cross-check explanations against current docs', 'Cross-check anything surprising against the docs'] },
      { label: 'Udemy AZ-800 course', values: ['~$15-30 on sale, $90+ list', 'Video course', 'Structured narrative if self-paced text does not hold your attention', 'Buy on sale; confirm it covers the January 2026 objectives'] },
      { label: 'Official instructor-led AZ-800T00', values: ['$1,500-2,500 via Learning Partners', 'Four-day class with labs', 'Employer-funded candidates who want a schedule and an instructor', 'Employer-funded only; the free Learn path covers the same ground'] }
    ],
    footnote: 'Prices checked 2026-08-05, USD list before tax, regional adjustment, sales or employer discounts. Udemy list prices are close to fictional; the sale price is the real price. Because AZ-800 retires September 30, 2026, confirm any third-party course is written for the current Windows Server and the January 2026 objectives. We take no commission from any provider and order nothing by commercial relationship.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The dominant AZ-800 mistakes in 2026 are planning errors rather than knowledge gaps, and the first one is the calendar: candidates study for an exam that retires on September 30, 2026 without noticing, or buy material written for an older Windows Server version and waste their whole prep budget on a superseded blueprint. The second is treating AD DS as optional background when it is 30-35 percent of the paper — candidates who skim Active Directory because they manage small domains lose roughly a third of the marks available. The third is studying Azure concepts from video without ever opening a subscription, which fails the lab and case-study items and produces candidates who recognise the right answer in a list but cannot execute a task. The fourth is ignoring the distinction between the GUI, PowerShell and Azure surfaces, when the exam deliberately mixes them. The fifth is planning to look everything up in the in-exam Microsoft Learn panel, which is a real feature of role-based exams but does not stop the clock; candidates who treat it as an open-book pass run out of time. The sixth is mismanaging the scoring model — doing mental arithmetic to estimate a percentage when the 700 mark is scaled, or leaving questions blank when there is no penalty for guessing. The seventh is letting the retake policy compound a bad day: failing once and re-sitting immediately on the same knowledge, when the 24-hour rule allows it but the $165 fee and 14-day wait for subsequent attempts make a two-week targeted retake plan the cheaper route. Finally, some candidates forget the certification expires and treat it as permanent, only to discover the 12-month renewal window six months in.',
    items: [
      {
        mistake: 'Studying without checking the retirement date',
        fix: 'AZ-800 retires September 30, 2026 and the track consolidates into AZ-802. Put the date on your calendar in week zero, verify the objectives you are studying are the January 21, 2026 update, and decide immediately whether to race the two-exam track or switch to AZ-802.'
      },
      {
        mistake: 'Skimming AD DS because it feels like background',
        fix: 'AD DS is 30-35 percent of the paper. Deploy domain controllers on-premises and in Azure, transfer FSMO roles, configure trusts, sites and replication, and set up Entra Connect Sync until you can narrate each without notes.'
      },
      {
        mistake: 'Learning Azure from video only',
        fix: 'Open a real subscription and lab the hybrid material — Azure Arc onboarding, Azure File Sync, Azure Update Manager, DNS private zones. The exam\u2019s lab and case-study formats punish candidates who have never clicked the blades.'
      },
      {
        mistake: 'Learning one surface only',
        fix: 'The exam mixes Server Manager, Windows Admin Center, PowerShell and Azure surfaces in one form. Practise each task in the GUI, then PowerShell, then the Azure blade, so no surface surprises you.'
      },
      {
        mistake: 'Planning to look everything up in the Learn panel',
        fix: 'The panel is available on role-based exams but the clock keeps running. Use it for two or three precise lookups, not as a safety net — candidates who browse end up with unanswered questions.'
      },
      {
        mistake: 'Misreading the scoring model',
        fix: '700 is a scaled score that may not equal 70 percent of questions, some items are unscored pilot content, and guessing costs nothing. Never leave a question blank, and stop doing percentage arithmetic in the exam.'
      },
      {
        mistake: 'Re-sitting immediately after a fail on the same knowledge',
        fix: 'The retake policy permits a fast second attempt, but the $165 fee makes it expensive. Use the score report\u2019s skill-area bars, target the weakest areas for two weeks, and only then re-sit.'
      },
      {
        mistake: 'Forgetting the certification expires',
        fix: 'Windows Server Hybrid Administrator Associate renews annually via a free online assessment on Microsoft Learn, with the window opening six months before expiry. Set a reminder at the ten-month mark the day you pass.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'AZ-800 is an associate role-based exam, which means it draws on Microsoft\u2019s full item library and your form mixes standard multiple choice with interactive formats, and on some sittings a case study or a live lab. Microsoft does not publish a question count for AZ-800 and the number varies by form, but the exam time is 120 minutes (140 minutes of seat time including the NDA, instructions and survey), and most forms run roughly 40-60 items. Because this is an associate role-based exam, the Microsoft Learn panel is available inside the exam — the full learn.microsoft.com domain minus Q&A, practice assessments and your profile — and the clock keeps running while you use it. Navigation rules matter more than item format: within a case study you work through a set of questions attached to a shared scenario and cannot return to the case study once you move past it, and taking an unscheduled break through the exam interface locks you out of every question you have already seen. The formats below are the ones Microsoft has used across role-based exams for years, and the free exam sandbox at aka.ms/examdemo lets you handle every one before exam day — doing that once is worth more than an extra practice test, because the formats, not the content, are where candidates lose avoidable time. Most items cover generally available features; preview features appear only when they are in common use, so you do not need to chase every announcement from the last quarter. The scoring rule to internalise: 700 scaled on a 1-1,000 scale, no penalty for guessing, and an unknown subset of items is unscored pilot content.',
    types: [
      { name: 'Multiple choice (single answer)', share: 'The largest share of items on a typical form', detail: 'Short scenarios with a constraint in the stem — least administrative effort, must survive a failure, must minimise cost — where more than one option would technically work and only one satisfies the constraint.' },
      { name: 'Multiple response', share: 'Common', detail: 'Select all that apply, sometimes with the required number stated. No partial credit, so treat each option as an independent true/false decision.' },
      { name: 'Drag and drop / build list', share: 'Frequent', detail: 'Order the steps to promote a domain controller, or match services to requirements. Unused items may be present as distractors.' },
      { name: 'Hot area', share: 'Frequent', detail: 'A rendered console, portal blade or PowerShell snippet with selectable regions or drop-downs. Portal and console familiarity converts directly into marks here.' },
      { name: 'Case study', share: 'On some forms', detail: 'Multi-tab scenario — existing environment, requirements, technical constraints — followed by several questions. Read the requirements tab twice before the first question; you cannot return once you move past it.' },
      { name: 'Interactive lab', share: 'On some forms; Microsoft does not publish which', detail: 'A real environment in which you perform tasks, graded on end state. Labs can be removed at short notice for outages, which is why Microsoft publishes no list. If your form has one you get 120 minutes of exam time.' },
      { name: 'Yes/No repeated-scenario sets', share: 'Occasional', detail: 'The same scenario restated with a different proposed solution each time. All three can be yes, or all three no — assume nothing.' },
      { name: 'Mark for review + review screen', share: 'Available throughout, subject to section rules', detail: 'Flag uncertain items and return before submitting a section; but note an unscheduled break through the interface ends access to everything already seen.' }
    ],
    samples: [
      {
        prompt: 'An organisation has a single on-premises Active Directory domain and wants to extend identity to Azure. They need password hash synchronisation, seamless single sign-on for domain-joined devices, and the ability to synchronise a filtered set of organisational units. Which tool should an administrator configure?',
        options: [
          'A. Microsoft Entra Connect Sync with password hash sync and OU filtering',
          'B. Microsoft Entra Cloud Sync with password writeback',
          'C. Microsoft Entra Domain Services with a new managed domain',
          'D. Active Directory Federation Services with a custom rule set'
        ],
        answer: 'A',
        explanation: 'Microsoft Entra Connect Sync is the tool that synchronises on-premises AD DS objects to Entra ID, supports password hash synchronisation, provides seamless SSO, and applies OU-level filtering during configuration. B is the classic distractor: Cloud Sync is a lighter agent-based option for smaller or merger-and-acquisition scenarios and does not deliver the full filtered-OU control with the same feature set here, and the stem asks for a synchronisation tool rather than writeback. C creates a separate managed domain, which is for legacy apps needing Kerberos without maintaining domain controllers — it does not synchronise the existing identity. D would work for SSO federation but is heavier than the requirement and does not perform directory synchronisation by itself. When the stem lists a specific set of synchronisation requirements, Connect Sync with the matching features is the answer.'
      },
      {
        prompt: 'A server is a member of a domain named contoso.com. An administrator promotes it to a domain controller in the existing domain by running a new forest install command by mistake. Which command was most likely run, and what must the administrator do?',
        options: [
          'A. Install-ADDSForest contoso.com — a new forest was created and the server is now a root domain controller of a second contoso.com',
          'B. Install-ADDSDomain — a child domain was added to the existing forest',
          'C. Install-ADDSDomainController contoso.com — the server was correctly promoted as an additional domain controller',
          'D. Add-ADDSReadOnlyDomainControllerAccount — a read-only domain controller was staged'
        ],
        answer: 'A',
        explanation: 'Install-ADDSForest creates a brand-new forest and domain, so running it against contoso.com when a contoso.com forest already exists fails or, in a sandbox scenario, creates a separate forest with the same name. The stem describes the classic mistake of running the forest command when the correct action is an additional-domain-controller promotion. B installs a child domain, which is a different topology change and not what the stem describes. C is the command that should have been run — Install-ADDSDomainController joins an existing domain — and is therefore the intended correct action, not the mistake. D stages an RODC account in AD, which is an operational step, not a promotion. The practical takeaway: the four install commands for AD DS are Install-ADDSForest, Install-ADDSDomain, Install-ADDSDomainController and the RODC staging path, and the exam expects you to know which topology change each one performs.'
      },
      {
        prompt: 'An administrator needs to keep local files available on a file server synchronised with the cloud so that branch offices can access them over the internet, while automatically tiering rarely used data to cloud storage. Which technology should be configured?',
        options: [
          'A. Azure File Sync with a server endpoint and cloud tiering enabled',
          'B. Storage Replica between the two sites',
          'C. DFS Replication with a standalone namespace',
          'D. Storage Spaces with a tiered virtual disk'
        ],
        answer: 'A',
        explanation: 'Azure File Sync synchronises on-premises file servers with Azure file shares, keeps files available locally through server endpoints, and its cloud tiering automatically moves cold files to the cloud while leaving placeholders — exactly the stated requirements. B is the distractor candidates choose on naming alone: Storage Replica provides block-level synchronous or asynchronous replication for disaster recovery and does not tier to the cloud or provide internet access for branch offices. C replicates files between servers but has no cloud tiering and no cloud presence. D is a local storage technology that combines media types within a server and does not synchronise anywhere. The stem\u2019s two clauses — synchronised with the cloud, and automatically tiering rarely used data — map one-for-one to Azure File Sync server endpoints and cloud tiering.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'AZ-800 is delivered through Pearson VUE, either at a test centre or online through OnVUE, and the direct exam-day answer is 120 minutes of exam time inside 140 minutes of seat time — the extra 20 minutes cover the NDA, instructions and the post-exam survey — with a scaled pass mark of 700 on a 1-1,000 scale and no penalty for guessing. Test centre versus OnVUE is the first real decision. A centre gives you a supervised workstation, a physical erasable whiteboard you can actually use for subnet arithmetic and multi-step scenarios, and no room-scan. OnVUE gives you your own desk but a stricter environment: the proctor requires a 360-degree room scan, a clear desk, no second monitors, and no physical scratch paper unless it was explicitly approved on the booking — check what your booking allows rather than assuming, because the rules have tightened and an item that was fine a year ago can end your session now. Whichever you choose, arrive or launch check-in thirty minutes early; OnVUE check-in can take twenty minutes on a bad day, and a late check-in is a forfeited fee. The exam itself rewards a deliberate pacing plan: sweep the multiple-choice and interactive items at a brisk tempo, flag anything costing more than ninety seconds, and do not take an unscheduled break through the exam interface because it locks you out of everything already seen. If your form includes a case study, decide before the clock starts whether to work it first while fresh or last with a known budget, and read the requirements tab twice before the first question. The Microsoft Learn panel is available on this exam — use it for two or three precise lookups, never as a safety net.',
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
      { time: '2-3 days before', detail: 'Run the OnVUE system test on the exact machine, network and location you will use. Corporate laptops with locked-down security software are the single most common cause of a failed launch — use a personal machine if you can.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or start OnVUE check-in. Check-in is not the exam start, and starting late can cost the booking.' },
      { time: 'Check-in', detail: 'ID verification, photograph, and for OnVUE a 360-degree room scan. Test centres add a locker, a pocket check and sometimes a palm-vein scan.' },
      { time: 'First 5 minutes', detail: 'NDA and instructions inside your seat time but outside exam time. The launch screen tells you your exam duration.' },
      { time: 'First 2 minutes of the exam', detail: 'Note the question count and duration on screen and set a per-question pace. If there is a case study or lab, decide immediately whether to work it first or last.' },
      { time: 'Throughout', detail: 'Mark anything costing more than 90 seconds and move on. Do not take an unscheduled break through the interface — it locks you out of everything already seen.' },
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
      'You get a preliminary pass or fail on screen within minutes of submitting, and the official result posts to your Microsoft Learn certification profile within a few hours, occasionally a couple of business days if a lab needs grading. The score report shows one overall number against the 700 threshold plus a bar chart of relative performance across the five skill areas; Microsoft is explicit that those bars cannot be summed or read as percentages because the areas contain different numbers of questions, so treat them as relative diagnostics, not scores. If you passed, AZ-800 is one of two exams — with AZ-801 — that earns the Windows Server Hybrid Administrator Associate certification, which is valid for 12 months and renewed free via an online assessment whose window opens six months before expiry; set the reminder now, and remember the whole track consolidates to a single AZ-802 exam after September 30, 2026. If you failed, the retake rules apply: 24 hours before a second attempt, 14 days between subsequent attempts, five attempts maximum in the 12 months from your first sitting, and the full $165 fee each time. Use the skill-area chart to target the retake rather than restudying everything, and change your question source — repeating the same practice bank mostly measures how well you have memorised that bank.'
  }
};

export default data;
