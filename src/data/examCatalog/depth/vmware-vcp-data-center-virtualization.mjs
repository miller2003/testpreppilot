// Depth content for: vmware-vcp-data-center-virtualization
// Sources: vmware.com/learning/certification/vcp-dcv.html (exam 2V0-21.23, vSphere 8.x
// Professional; 70 questions, 135 minutes, passing 300 scaled, $250), VMware certification
// program update of May 6, 2024 (certification by exam only, flat $250 exam fee, expiry
// removed for credentials earned after that date), VMware Learning blog, Broadcom program
// notes, bls.gov Occupational Outlook Handbook (May 2024 wage data). All facts checked 2026-08-05.
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
      'The direct salary answer for VCP-DCV is $96,800, the May 2024 median for Network and Computer Systems Administrators (SOC 15-1244), the closest Bureau of Labor Statistics occupation to the vSphere administrator role this certification validates. Two caveats belong with that number. First, BLS classifies by job duties rather than by certificate, so the median describes everyone doing server and network administration work — including administrators who have never touched a hypervisor — which means vSphere-focused candidates typically sit above it and first-year hires below it. Second, this occupation is projected to decline 4 percent from 2024 to 2034, with about 14,300 openings a year arising almost entirely from replacement need, and the reason is directly relevant to a VMware candidate: traditional server-room administration is being absorbed into cloud platforms, and within the VMware world specifically the product strategy has consolidated around VMware Cloud Foundation and vSphere Foundation, so the value is shifting toward administrators who can operate the modern stack and pair it with public-cloud skills. The distribution matters for expectations: the lowest 10 percent of this occupation earned less than $60,320 and the highest 10 percent more than $150,320, and VCP-DCV holders who combine the credential with automation, storage and networking depth cluster toward the top of that range. For comparison, computer network architects (SOC 15-1241) earned $130,390 at the median in the same release, which is the direction a VCP-DCV holder moving toward VCAP design work drifts over time, and software developers (SOC 15-1252) earned $133,080. The honest framing is that VCP-DCV is the entry professional credential for a shrinking-but-still-large on-premises and hybrid infrastructure market, and its wage value comes from keeping an administrator employable on the platform of record while the broader administrator occupation declines.',
    rows: [
      { label: 'Median annual wage — network and computer systems administrators (SOC 15-1244)', value: '$96,800', note: 'BLS Occupational Outlook Handbook, May 2024 wage data. Closest BLS occupation to a vSphere administrator.' },
      { label: 'Lowest 10 percent', value: 'less than $60,320', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $150,320', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Median — computer network architects (SOC 15-1241)', value: '$130,390', note: 'BLS OOH, May 2024. Reference for the VCAP design direction.' },
      { label: 'Employment, 2024 / projected change', value: '331,500 jobs / -4% (2024-34)', note: 'BLS OOH for SOC 15-1244; ~14,300 openings a year, nearly all replacement need' }
    ],
    growth: '-4% projected change 2024-34 for SOC 15-1244, with ~14,300 replacement openings a year (BLS OOH); modern-stack vSphere and VCF skills are what keep administrators on the employable side of this occupation',
    source: {
      label: 'BLS Occupational Outlook Handbook — Network and Computer Systems Administrators',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'VMware publishes no pass rate for VCP-DCV — but it does publish the cut score of 300 on a 100-500 scaled range',
    summary:
      'VMware does not publish pass-rate statistics for the VCP-DCV exam, and it never has; the percentages you will find attached to 2V0-21.23 on forums, blogs and bootcamp pages are anecdotes or vendor marketing, not official data. What VMware does publish is the scoring model, and understanding it is more useful than a rumoured pass rate. The exam is scored on a scaled range of 100 to 500 and you need a 300 to pass. That is deliberately not a simple percentage of questions answered correctly: VMware, like most vendors, equates exam forms so that a harder set of items requires the same underlying ability as an easier one, and the scaled conversion cannot be reverse-engineered from question counts. The practical implication is to stop counting questions in the exam and aim instead to be comfortable with every objective area unaided. One structural fact matters more than the scoring model: VMware does not disclose how many of the 70 questions are unscored pilot items, but candidates should assume some are, which means an impossible-looking question may not count toward the result. There is also no penalty for guessing, so every item should be answered. The retake and rescheduling rules come from the certification portal: failed attempts require a 14-day wait before retaking in most cases, and each attempt is charged the flat $250 exam fee. For a candidate weighing whether the credential is worth it, the honest answer about pass rates is that no official figure exists, and the published numbers that do exist — the 300 cut score, the 70-item, 135-minute format and the $250 fee — are the ones this page can verify.',
    source: {
      label: 'VMware (Broadcom) — VCP-DCV 2024 exam page',
      url: 'https://www.vmware.com/learning/certification/vcp-dcv.html'
    },
    caveat:
      'No pass rate is published by VMware or Broadcom for the VCP-DCV exam; we have deliberately left the pass-rate table empty. What is published and verifiable on the vendor page: 70 questions, 135 minutes, passing score of 300 on a 100-500 scaled range, and a flat USD $250 exam fee. Retake waits and rescheduling rules are handled through the Broadcom Certification Manager portal and can change without notice.'
  },

  // P0-3  Study plan
  studyPlan: {
    summary:
      'The study-plan answer for VCP-DCV is 100 to 140 hours over eight to twelve weeks for a candidate with the six to twelve months of hands-on vSphere experience the vendor recommends, and the first planning fact is that since May 6, 2024 you no longer need to complete a VMware training course before sitting the exam — the Broadcom-era program made certification by exam only the standard path, which removes the old $4,000-plus training prerequisite and makes a self-built lab the practical foundation of any plan. The current exam is 2V0-21.23, VMware vSphere 8.x Professional, which earns the VCP-DCV 2024 certification; it is 70 questions in 135 minutes with a passing score of 300 on a 100-500 scaled range and a flat $250 fee. The exam guide groups the objectives into five areas: Architecture and Technologies, Products and Solutions, Installing, Configuring and Setup, Performance-tuning, Optimization and Upgrades, and Administrative and Operational Tasks. The plan below assumes you can build a lab — at minimum two ESXi hosts and vCenter — because the exam is heavily operational and candidates who have actually performed the tasks answer the scenario items differently from candidates who have only read about them. Front-load installation and configuration, because it underpins everything else, then architecture and products, then administration and operations, and leave performance tuning and upgrades for the final weeks since they assume the rest. Note that the 2024 program changes also changed validity: certifications earned after May 6, 2024 do not expire, whereas earlier VCP credentials carried a two-year renewal cycle — so the schedule pressure for a new candidate is the exam content, not a countdown to expiry.',
    totalHours: '100-140 hours over 8-12 weeks',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Installing, configuring and setup',
        tasks: [
          'Install ESXi on two hosts and deploy vCenter Server Appliance; understand the deployment prerequisites and sizing',
          'Configure networking: vSphere Standard Switches, then a Distributed Switch with teaming and VLAN configuration',
          'Configure storage: vSAN, VMFS datastores, NFS and iSCSI targets, and understand the storage policy framework',
          'Create and configure VMs, templates, clones and content libraries'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Architecture and technologies + products and solutions',
        tasks: [
          'Learn the architecture: vSphere components, their roles and how they communicate — vCenter, ESXi, PSC-era services in vCenter, and the client',
          'Map products and solutions: vSAN, NSX, vSphere Replication, Site Recovery Manager and their relationships to vSphere',
          'Understand the licensed feature tiers and what each edition enables',
          'Practise answering architecture scenario questions in writing, not just recognising concepts'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 5-7',
        focus: 'Administrative and operational tasks',
        tasks: [
          'Manage the vSphere lifecycle: patching ESXi hosts, upgrades, and vCenter backup and restore',
          'Configure resource management: CPU and memory allocations, shares, reservations and limits',
          'Practise HA, DRS and vMotion end to end, including storage vMotion and the constraints that block a migration',
          'Troubleshoot from real breakage: disconnect a datastore, fail a host, break a cluster rule and fix it from symptoms'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 8-9',
        focus: 'Performance-tuning, optimization and upgrades',
        tasks: [
          'Learn performance metrics and tools: esxtop, performance charts, and the key counters for CPU, memory, storage and network',
          'Practise diagnosing a bottleneck scenario — is it CPU, memory, storage latency or network saturation',
          'Work through upgrade paths and prerequisites, and what breaks if they are skipped',
          'Run a full 135-minute practice exam and re-lab the two weakest objective areas'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Week 10',
        focus: 'Timed rehearsal and gap closing',
        tasks: [
          'Two full 135-minute practice exams under exam conditions',
          'Re-lab every miss rather than re-reading it',
          'Final pass over the exam guide objectives checklist',
          'Book through the Broadcom Certification Manager and Pearson VUE, and run the system test if testing online'
        ],
        hours: '10-12 hrs'
      }
    ],
    variants: [
      { label: 'Working vSphere administrator already', detail: 'Six to eight weeks. Your day job covers most of the operational objectives; spend the recovered time on the architecture, products and solutions area, which is where experienced admins lose marks to naming and mapping questions.' },
      { label: 'No hands-on vSphere experience', detail: 'Fourteen to sixteen weeks. Build the two-host lab in week one and do not advance until ESXi installation, networking and storage are routine; the exam rewards having performed the tasks.' },
      { label: 'Upgrading from VCP-DCV 2023', detail: 'Four to five weeks focused on what vSphere 8.x changed versus your version — vSAN improvements, the HTML5 client behaviour, new features and renamed components. The two-year renewal cycle no longer applies to credentials earned after May 2024.' }
    ]
  },

  // P0-4  Prep strategies
  prepStrategies: {
    summary:
      'The strategies that move a VCP-DCV score are the ones that force execution in a real environment, because the exam is operational and the scenario items punish candidates who have only read about the platform. The single highest-yield habit is to build a lab and use it destructively: two ESXi hosts and vCenter, then break things on purpose — fail a host, disconnect a datastore, misconfigure a Distributed Switch, exhaust a resource pool — and fix them from symptoms, because the exam rewards a fixed diagnostic sequence applied under pressure. Second, learn the exam guide objective list as a checklist rather than a syllabus: VMware publishes the objectives for 2V0-21.23, and candidates who tick off each one with a demonstrated task rather than a watched video go in measurably better prepared. Third, practise the naming and mapping questions deliberately, because the Architecture and Technologies plus Products and Solutions areas are where experienced administrators lose marks to items that ask which product does what and how components relate. Fourth, use the official VMware Hands-on Labs and the free evaluation software rather than paying for a course you no longer need — since May 6, 2024 there is no mandatory training prerequisite, so the money that used to go to a $4,000 course can go into lab time and practice tests instead. Fifth, rehearse the timing of a 70-question, 135-minute exam: that is under two minutes per question, which is comfortable until a long scenario item appears, so practise flagging and moving. Sixth, verify your study material matches vSphere 8.x and the current exam code — a course written for 2V0-21.20 teaches a superseded blueprint. Finally, remember the Broadcom portal is the source of truth for registration, rescheduling and results, and old VMware bookmarks may redirect.',
    items: [
      {
        title: 'Build a lab and break it on purpose',
        detail: 'Two ESXi hosts plus vCenter, then sabotage your own environment — fail a host, disconnect a datastore, misconfigure a switch, exhaust a resource pool — and diagnose from symptoms. The operational scenario items reward exactly this fixed diagnostic sequence.'
      },
      {
        title: 'Use the exam guide as a checklist',
        detail: 'VMware publishes the 2V0-21.23 objectives. Tick off each one with a demonstrated lab task rather than a watched video, and treat any objective you cannot perform unaided as a gap to close before booking.'
      },
      {
        title: 'Drill the architecture and products mapping',
        detail: 'The exam asks which product does what — vSAN, NSX, vSphere Replication, Site Recovery Manager — and how components relate. Experienced admins lose these marks to naming questions, so drill the relationships deliberately.'
      },
      {
        title: 'Spend the money you no longer have to spend',
        detail: 'The Broadcom-era program removed the mandatory training prerequisite on May 6, 2024. A self-built lab and practice tests now compete directly with a $4,000 course, and for most candidates the lab wins.'
      },
      {
        title: 'Rehearse the 70-question, 135-minute pace',
        detail: 'Under two minutes per question feels comfortable until a long scenario item appears. Practise flagging and moving on, and reserve the final minutes for marked items — there is no penalty for guessing.'
      },
      {
        title: 'Verify your material matches 2V0-21.23',
        detail: 'Material written for 2V0-21.20 or older teaches a superseded blueprint. Check the exam code and vSphere version on the cover of anything you buy, and confirm it reflects vSphere 8.x.'
      }
    ]
  },

  // P0-5  Study-resource comparison
  resourceComparison: {
    summary:
      'The buying decision for VCP-DCV changed fundamentally on May 6, 2024, when Broadcom removed the mandatory training prerequisite: the old program forced candidates to spend $4,000 or more on an official VMware course before they could sit the exam, and that requirement no longer exists, so the resource comparison today is between free official material plus a self-built lab versus paid courses and practice tests that must now justify themselves on quality alone. The official VMware exam guide for 2V0-21.23 is free and is the blueprint; the VMware Hands-On Labs are free interactive environments; and the evaluation software — ESXi and vCenter — runs on a home lab with supported hardware, so the entire content foundation can be free. The justified spend is therefore lab hardware or cloud-lab time, a practice-test bank, and optionally a course if you have no lab and no employer training budget. On the paid side, official VMware training still exists and is the reference-quality option, but at multi-thousand-dollar pricing it is hard to justify when the prerequisite is gone; practice tests from VMware-authorized providers like Pearson, MeasureUp and the usual Udemy market run from $20 to $130 and are the clearest per-dollar buy after the free material. Books written for vSphere 8.x cover the architecture and operational material well for $50-70, with the caveat that any book or course written for 2V0-21.20 teaches a superseded blueprint. The footnote anchoring the comparison: all prices are USD list checked 2026-08 and change; VMware certification exam fees are a flat $250 since May 2024; we take no commission and rank nothing by commercial relationship.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'VMware exam guide for 2V0-21.23 (official)', values: ['Free', 'PDF objectives checklist', 'The blueprint itself; tick each objective with a demonstrated task', 'Download first — tick each objective with a demonstrated lab task'] },
      { label: 'VMware Hands-On Labs (official)', values: ['Free', 'Hosted interactive environments', 'Practising vSphere tasks without owning hardware', 'Use these before buying any paid course'] },
      { label: 'ESXi and vCenter evaluation software on a home lab', values: ['Free (requires compatible hardware)', 'Self-built two-host lab', 'The highest-value resource for an operational exam — build it and break it', 'Build it in week one and break things on purpose'] },
      { label: 'Official VMware training courses', values: ['Multi-thousand dollars', 'Instructor-led or on-demand with labs', 'No longer a prerequisite since May 6, 2024; only worth it with employer funding', 'Employer-funded only — the prerequisite that made it mandatory is gone'] },
      { label: 'Practice tests (MeasureUp / Pearson VUE / Udemy)', values: ['$20-130 depending on provider', 'Timed question banks with explanations', 'Readiness checks and weak-area identification; confirm the 2V0-21.23 code', 'Confirm the 2V0-21.23 code on the cover before buying'] },
      { label: 'vSphere 8.x study books', values: ['~$50-70', 'Print + eBook', 'Reference coverage of architecture and operational topics', 'Confirm the book covers vSphere 8.x before buying'] },
      { label: 'Exam voucher (2V0-21.23)', values: ['$250 flat', 'Pearson VUE, test centre or online', 'Required — buy through the Broadcom Certification Manager portal', 'Buy through the Broadcom Certification Manager portal, not resellers'] }
    ],
    footnote: 'Prices checked 2026-08-05, USD list before tax, regional adjustment, sales or employer discounts. VMware certification exam fees are a flat USD $250 for VCTA, VCP and VCAP exams since May 6, 2024. Confirm any third-party course or bank is written for 2V0-21.23 and vSphere 8.x. We take no commission from any provider and order nothing by commercial relationship.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The most expensive VCP-DCV mistakes in 2026 are program-era errors that did not exist a few years ago. The first is assuming the old mandatory-training prerequisite still applies and paying thousands for an official course before the exam, when Broadcom removed the requirement on May 6, 2024 — certification by exam only is now the standard path, and that money is better spent on lab time. The second is studying the wrong exam version: material written for 2V0-21.20 or older teaches a superseded blueprint, and the current exam is 2V0-21.23 on vSphere 8.x; a candidate who studied the old version walks in with real gaps. The third is reading about the platform instead of operating it — the exam is operational, and candidates who have never failed a host or fixed a storage issue answer the scenario items from recognition rather than experience. The fourth is skipping the architecture and products mapping questions, which are where experienced administrators lose marks to naming items about vSAN, NSX, vSphere Replication and Site Recovery Manager. The fifth is misreading the scoring model: the 300 cut on a 100-500 scaled range is not a 60 percent-of-questions figure you can compute in your head, and assuming some questions are unscored pilot items is safer than assuming every question counts equally. The sixth is ignoring the flat $250 fee structure and the retake wait — failed attempts cost the full fee and most retakes carry a waiting period, so booking early without readiness is an expensive strategy. The seventh is relying on stale Broadcom portal information: old VMware bookmarks may redirect, and registration, rescheduling and results all flow through the current Certification Manager portal.',
    items: [
      {
        mistake: 'Paying for the mandatory training prerequisite that no longer exists',
        fix: 'Since May 6, 2024, VCP-DCV is certification by exam only — no official course is required. Redirect the thousands a course would cost into a two-host lab and practice tests, unless your employer is funding it.'
      },
      {
        mistake: 'Studying for the wrong exam version',
        fix: 'The current exam is 2V0-21.23 on vSphere 8.x. Confirm the exam code and version on the cover of any course or question bank; material written for 2V0-21.20 teaches a superseded blueprint.'
      },
      {
        mistake: 'Reading about the platform instead of operating it',
        fix: 'The exam is operational. Build a two-host lab and perform the tasks — install ESXi, configure networking and storage, fail a host, fix a broken datastore — until the sequence is reflex rather than recall.'
      },
      {
        mistake: 'Skipping the architecture and products mapping',
        fix: 'Items that ask which product does what — vSAN versus NSX, vSphere Replication versus Site Recovery Manager — are where experienced admins lose marks. Drill the relationships deliberately, even if they feel like vocabulary.'
      },
      {
        mistake: 'Misreading the scaled score',
        fix: 'The passing score is 300 on a 100-500 scaled range, which is not a percentage you can compute from question counts. Answer every item — there is no penalty for guessing — and stop doing arithmetic in the exam.'
      },
      {
        mistake: 'Booking before you are ready because the fee is flat',
        fix: 'The $250 fee applies to every attempt and retakes carry waiting periods. Treat each attempt as expensive; use a full 135-minute practice exam scoring above the cut before you book.'
      },
      {
        mistake: 'Trusting stale registration information',
        fix: 'Registration, rescheduling and results flow through the Broadcom Certification Manager portal, and old VMware bookmarks may redirect. Bookmark the current portal and verify voucher validity before buying from third parties.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The VCP-DCV exam, code 2V0-21.23, is 70 questions in 135 minutes, in English, delivered proctored through Pearson VUE either at a test centre or online, with a passing score of 300 on a 100-500 scaled range. VMware describes the format as single-choice and multiple-choice, with the multiple-choice items being the majority; there are no performance-based or hands-on-lab items on this exam — it is a knowledge exam that tests whether you know the platform well enough to make operational decisions, which is a different skill from executing the tasks live. The five objective areas from the exam guide are Architecture and Technologies, Products and Solutions, Installing, Configuring and Setup, Performance-tuning, Optimization and Upgrades, and Administrative and Operational Tasks, and the scenario items tend to be framed as real administrator situations: a symptom, a requirement, a constraint — and four plausible actions, only one of which is correct given the constraint. The pacing math matters: 70 questions in 135 minutes is under two minutes per item, which feels generous until a long scenario appears, so the winning rhythm is a brisk first pass with flagging, then a return to the flagged items. Because the passing score is scaled, do not try to convert the 300 cut into a percentage of questions, and because guessing carries no penalty, never leave an item blank. A small share of items may be unscored pilot questions included for statistical purposes, which means an impossible-looking question should not derail you. The samples below are editor-written illustrations of the published objective areas, not live exam items.',
    types: [
      { name: 'Single-choice multiple choice', share: 'The majority of the paper', detail: 'One correct answer from the options, often framed as an operational scenario — a symptom, a requirement and a constraint, with three plausible distractors that work in a different context.' },
      { name: 'Multiple-choice (single answer with best option)', share: 'Frequent', detail: 'Several options are technically capable of solving the problem and one best satisfies the stated constraint — cost, availability, least disruption. Underline the constraint before reading the options.' },
      { name: 'Architecture and mapping items', share: 'Concentrated in the architecture and products areas', detail: 'Questions that ask which product does what or how components relate — vSAN, NSX, vSphere Replication, Site Recovery Manager. These punish candidates who skipped the vocabulary.' },
      { name: 'Scenario-based troubleshooting items', share: 'Heaviest in the operations and performance areas', detail: 'A described fault with a symptom and four possible causes or next steps. These reward a fixed diagnostic order rather than pattern-matching to a remembered fix.' }
    ],
    samples: [
      {
        prompt: 'An administrator has a vSphere cluster of four ESXi hosts and needs to ensure that if a single host fails, the virtual machines that were running on it restart automatically on the surviving hosts. The solution must also protect VMs against a host failure inside a single rack. Which configuration best meets the requirement?',
        options: [
          'A. vSphere High Availability with a single master, admission control enabled, and no other settings',
          'B. vSphere High Availability with admission control disabled and all VMs restarted on any survivor',
          'C. vSphere High Availability with admission control configured so spare capacity covers one host, and hosts in the cluster placed so a rack loss does not take the whole cluster',
          'D. vSphere Replication replicating every VM to a second cluster every 15 minutes'
        ],
        answer: 'C',
        explanation: 'The stem has two requirements: restart on host failure and survive a single-rack loss. HA provides the restart-on-failure mechanism, and admission control configured with spare capacity for one host guarantees the restarts will have resources; placing hosts so a rack loss does not take the whole cluster — for example using anti-affinity across racks — addresses the rack-loss clause. A is a partial answer: default HA restarts VMs but without admission-control spare capacity the restarts can fail for lack of resources, and it does nothing about rack placement. B makes restarts worse by disabling admission control, which can overload the survivors. D provides recovery to a second cluster but with a recovery time objective, not the automatic host-failure restart HA provides, and it does not by itself solve resource availability in the same cluster. When the stem pairs an availability mechanism with a placement constraint, the correct option addresses both.'
      },
      {
        prompt: 'A VM is reporting unusually high storage latency, and the administrator must determine whether the constraint is the datastore, the storage array or the VM itself. Which tool or metric should be used first?',
        options: [
          'A. esxtop storage views to compare device, LUN and VM latency figures',
          'B. Restarting the VM to see if the latency clears',
          'C. A network packet capture on the VM',
          'D. Checking the VM\u2019s guest operating system uptime'
        ],
        answer: 'A',
        explanation: 'esxtop in its storage-related view presents the three latency figures that separate the layers of a storage bottleneck: guest/virtual-machine latency, device (the ESXi path to the storage) latency and the underlying LUN or datastore latency. Comparing them is the standard first diagnostic step because it tells you immediately whether the delay is inside the VM (guest latency high, device latency low), in the path or array (device or LUN latency high), or a queuing problem on the host. B is a blunt restart that may clear a symptom without diagnosing the cause and risks an unnecessary outage. C targets the network, which is the wrong layer for storage latency unless the storage is networked and the network is suspect — not the first step. D measures uptime, which is unrelated to I/O latency. The exam expects the fixed diagnostic order: identify the layer first, then the cause.'
      },
      {
        prompt: 'An organisation wants to migrate virtual machines between two datacentres without reconfiguring the guest operating systems, and the VMs must remain powered on during the move where possible. Which vSphere feature should the administrator use?',
        options: [
          'A. vSphere vMotion',
          'B. Cross-datacentre storage vMotion using shared storage between the two sites',
          'C. Site Recovery Manager with a planned migration',
          'D. vSphere Replication with a failover'
        ],
        answer: 'A',
        explanation: 'vSphere vMotion migrates a running VM between ESXi hosts without interruption, and when the two hosts are in different datacentres it performs a cross-datacentre vMotion provided the prerequisites — network connectivity, compatible CPU features or EVC, and storage reachable by both hosts — are met. That matches the two clauses: no guest reconfiguration and the VMs remain powered on. B names storage vMotion, which moves only the virtual disks and typically requires shared or replicated storage, and pairing it with the running-VM requirement leaves the compute migration unaddressed. C and D are disaster-recovery and migration tools with cutover and failover semantics, not live migration of a running workload without reconfiguration. When the stem asks for a live migration with no guest change, vMotion is the feature, and the exam expects you to know both what it does and which prerequisites it demands.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The VCP-DCV exam, code 2V0-21.23, is delivered through Pearson VUE, at a test centre or online, and the direct exam-day answer is 70 questions in 135 minutes with a passing score of 300 on a 100-500 scaled range, registration handled through the Broadcom Certification Manager portal. The test centre versus online decision is the first real choice. A centre gives you a supervised workstation and a physical erasable whiteboard — genuinely useful for sketching a cluster layout or a troubleshooting sequence — and no room scan; the online option gives you your own desk but a stricter environment, with a room scan, a clear desk, and no physical scratch paper unless it was explicitly approved for your booking. Check what your booking allows rather than assuming, because the rules have tightened across proctoring providers and an item that was acceptable a year ago can end your session now. Whichever you choose, arrive or launch check-in thirty minutes early; online check-in can take twenty minutes on a bad day, and a late check-in is a forfeited fee. Inside the exam, the pacing math is under two minutes per question, which is comfortable until a long scenario item appears, so the winning rhythm is a brisk first pass with flagging, then a return to the flagged items with the remaining time divided across them. There is no penalty for guessing, so never leave an item blank, and remember the passing score is scaled — do not spend time trying to convert 300 into a percentage of questions. After the exam, results are typically available quickly through the certification portal rather than on screen in the way some other vendors display them, so plan to check the portal for the official outcome.',
    bring: [
      'Government-issued photo ID with your name matching your certification account exactly — a mismatch is a common and expensive turn-away',
      'A second form of ID at the test centre if your primary is not a passport or driving licence; check your Pearson VUE confirmation for what your country requires',
      'Your Pearson VUE confirmation and exam registration number',
      'At a test centre: nothing else; everything else goes into a locker',
      'For online testing: the phone used for check-in photo upload — it goes out of reach once check-in completes',
      'For online testing: a physical whiteboard with an erasable marker, only if explicitly permitted on your booking'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker at a centre, out of the room entirely for online proctoring',
      'Your own paper, pens, notebooks and sticky notes',
      'Second monitors — online proctoring requires a single display, and a disconnected second monitor on the desk is still a violation',
      'Bags, coats, hats and any headwear not worn for religious reasons',
      'Food and drink beyond what the centre permits',
      'Anyone else in the room for online testing — the proctor ends the session if another person is heard or seen'
    ],
    timeline: [
      { time: '2-3 days before', detail: 'Run the online-proctoring system test on the exact machine, network and location you will use. Corporate laptops with locked-down security software are the single most common cause of a failed launch.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or start online check-in. Check-in is not the exam start, and starting late can cost the booking.' },
      { time: 'Check-in', detail: 'ID verification, photograph, and for online testing a room scan. Test centres add a locker and a pocket check.' },
      { time: 'First 5 minutes', detail: 'Candidate agreement and instructions. Confirm the question count and the 135-minute timer on the launch screen.' },
      { time: '0-110 minutes', detail: 'Brisk first pass: answer what you know, flag anything costing more than two minutes, and move on. Underline constraints in scenario stems before reading options.' },
      { time: '110-135 minutes', detail: 'Return to flagged items with the remaining time divided across them. Answer every item — there is no penalty for guessing.' },
      { time: 'After the exam', detail: 'Results are posted through the Broadcom Certification Manager portal; plan to check there for the official outcome.' }
    ],
    rules: [
      '70 questions in 135 minutes, single and multiple choice, delivered proctored through Pearson VUE.',
      'Passing score is 300 on a 100-500 scaled range; it is not a percentage of questions you can compute in the exam.',
      'No penalty for guessing — never leave an item blank.',
      'Some items may be unscored pilot questions; an impossible-looking item should not derail you.',
      'The exam is closed book; no external references or materials are permitted in the room.',
      'No scratch paper of your own — centres supply an erasable whiteboard; online candidates get no paper unless a physical whiteboard was explicitly approved on the booking.',
      'Registration, rescheduling and results flow through the Broadcom Certification Manager portal.',
      'Certifications earned after May 6, 2024 do not expire under the current program, so there is no post-exam renewal countdown for new candidates.'
    ],
    afterwards:
      'Results are posted through the Broadcom Certification Manager portal rather than displayed on screen at the test centre, so plan to check the portal for the official outcome and the detailed score breakdown across the objective areas once it is available. If you passed, you earn the VCP-DCV 2024 certification and can claim the digital badge from the certification portal; under the current program, credentials earned after May 6, 2024 do not expire, so there is no two-year renewal countdown as there was for older VMware certifications — the ongoing cost is keeping your skills current with platform releases, and Broadcom recommends staying aligned with the latest version when it becomes available. If you failed, the retake rules come from the certification portal and most retakes carry a waiting period, with the flat $250 fee charged for each attempt, so resist booking an immediate retry on the same knowledge. Use the score breakdown to identify the one or two objective areas that pulled you below the 300 cut — typically the architecture and products mapping or the operational scenarios — spend a fortnight labbing those specifically, then re-sit. A failed attempt on the same study plan is how a $250 voucher becomes a $500 one.'
  }
};

export default data;
