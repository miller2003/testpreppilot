// Depth content for: aws-certified-advanced-networking-specialty
// Sources: aws.amazon.com/certification/certified-advanced-networking-specialty (exam
// ANS-C01: 65 questions, 170 minutes, $300, valid 3 years, retiring August 25, 2026),
// AWS exam guide and pricing pages, exam retake policy (14-day wait, full fee per
// attempt), bls.gov Occupational Outlook Handbook (May 2024 wage data).
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
    headline: '$130,390 median for computer network architects (BLS, May 2024) — the closest occupation to the advanced networking role',
    summary:
      'The direct salary answer for the AWS Certified Advanced Networking – Specialty is $130,390, the May 2024 median for Computer Network Architects (SOC 15-1241), the closest Bureau of Labor Statistics occupation to the senior networking architect role this specialty exam validates. That is the honest headline, and two caveats belong next to it. First, BLS classifies by job duties rather than by certificate, so the median describes everyone doing network architecture and design work, including architects with no AWS experience; candidates who combine the credential with real cloud and hybrid networking delivery tend to sit above it. Second, the distribution is broad and useful to read: the lowest 10 percent of computer network architects earned less than $79,520 and the highest 10 percent more than $198,030, and a specialty-certified architect with Direct Connect, Transit Gateway and BGP depth moves toward the top of that range. The growth picture is solid: BLS projects computer network architect employment to grow 12 percent from 2024 to 2034, much faster than the all-occupations average, with about 11,200 openings a year, driven by continued network expansion and the shift of enterprise networking toward cloud and hybrid architectures — which is precisely the world this exam covers. Where the credential shows its value most concretely is in AWS customer organisations, managed service providers and network-heavy enterprises that use it as a hiring filter for senior network engineering and cloud networking roles, and AWS\u2019s own guidance recommends five or more years of networking experience with two or more years of cloud and hybrid networking experience before attempting it. The honest framing is that this is a specialist credential for experienced network architects, and its wage value comes from documenting that a candidate can design and operate complex AWS and hybrid networks rather than from the certificate alone.',
    rows: [
      { label: 'Median annual wage — computer network architects (SOC 15-1241)', value: '$130,390', note: 'BLS Occupational Outlook Handbook, May 2024 wage data. Closest BLS occupation to the advanced networking role.' },
      { label: 'Lowest 10 percent', value: 'less than $79,520', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $198,030', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Median — all computer and IT occupations', value: '$105,990', note: 'BLS OOH, May 2024' },
      { label: 'Employment, 2024 / projected change (SOC 15-1241)', value: '179,200 jobs / +12% (2024-34)', note: 'BLS OOH; ~11,200 openings a year' }
    ],
    growth: '+12% projected change 2024-34 for computer network architects (SOC 15-1241, BLS OOH), with ~11,200 openings a year — steady demand for senior networking skills as enterprise networks move to cloud and hybrid architectures',
    source: {
      label: 'BLS Occupational Outlook Handbook — Computer Network Architects',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-network-architects.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'AWS publishes no pass rate for the Advanced Networking – Specialty exam — the 750/1000 cut score is the only official number',
    summary:
      'There is no published pass rate for the AWS Certified Advanced Networking – Specialty exam, and AWS has never released pass-rate statistics, first-time pass percentages, attempt counts or score distributions for any certification; the percentages you will see attached to ANS-C01 on forums, blogs and bootcamp pages are anecdote, inference or marketing rather than data, and AWS explicitly does not publish them. What AWS does publish is the scoring model and the cut score, and for this exam that is 750 on a scale of 100 to 1,000. That is a scaled score, not a percentage of questions answered correctly: AWS equates exam forms so that a harder set of items requires the same underlying ability as an easier one, and the raw-to-scaled conversion cannot be reverse-engineered from the 65-question count. Two structural facts from the exam guide matter more than any rumoured pass rate. First, of the 65 questions on the paper, AWS states that a portion are unscored experimental items included to validate future questions — candidates cannot identify which items they are and must answer them anyway, so an impossible-looking question should not derail you. Second, there is no penalty for guessing, so an unanswered question is strictly worse than a guess. The scoring is compensatory across the four domains — Network Design, Network Implementation, Network Management and Operation, and Network Security, Compliance, and Governance — meaning you do not need to pass any individual domain, only the overall scaled score. The retake policy is published: a 14-day waiting period after a failed attempt, with the full $300 fee charged each time. For a candidate weighing the exam, the honest answer is that no pass rate exists, and the numbers that do exist — 65 questions, 170 minutes, 750/1000, $300, 14-day retake wait — are the ones this page can verify.',
    source: {
      label: 'AWS — Advanced Networking – Specialty exam guide and pricing',
      url: 'https://aws.amazon.com/certification/certified-advanced-networking-specialty/'
    },
    caveat:
      'No pass rate is published by AWS for the Advanced Networking – Specialty exam or for any AWS certification; we have deliberately left the pass-rate table empty. What is published and verifiable: 65 questions in 170 minutes, a scaled passing score of 750 out of 1,000, $300 per attempt, a 14-day wait after a failed attempt, and three-year certification validity with recertification by passing the current exam. Note the exam retires August 25, 2026.'
  },

  // P0-3  Study plan
  studyPlan: {
    summary:
      'The study-plan answer for the AWS Advanced Networking – Specialty exam is a calendar decision first: ANS-C01 retires on August 25, 2026, and AWS will not award new certifications under this exam after that date, so any study plan must be anchored to that deadline and a decision made now about whether to complete the specialty before retirement or redirect to a current networking credential. Assuming you proceed, budget 120 to 180 hours over ten to fourteen weeks for a candidate with the recommended five-plus years of networking experience and two-plus years of cloud and hybrid networking experience, and add two weeks if BGP, MPLS or enterprise routing is not part of your daily work. The exam is 65 questions in 170 minutes with a scaled passing score of 750 out of 1,000, and the four domains from the exam guide are Network Design at 30 percent, Network Implementation at 26 percent, Network Management and Operation at 20 percent, and Network Security, Compliance, and Governance at 24 percent. Note that design and security together are more than half the paper, so a plan that front-loads the design domain and the security domain — AWS WAF, Network Firewall, IDS/IPS, DDoS protection and the compliance angle — matches the weight distribution. The plan below runs from the foundational AWS networking services outward: VPC design and subnets, routing and gateways, DNS and hybrid connectivity with Direct Connect and VPN, then automation with CloudFormation and the AWS CLI, then security and monitoring with VPC Flow Logs, Reachability Analyzer and Network Firewall, finishing with full timed rehearsal. The lab is non-negotiable: this is a design-and-implement exam, and candidates who have actually built a multi-VPC transit architecture and debugged a BGP session answer the scenario items differently from candidates who have only read about them.',
    totalHours: '120-180 hours over 10-14 weeks',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Network design fundamentals',
        tasks: [
          'Master VPC design: CIDR planning, subnets, route tables, internet and NAT gateways, and multi-AZ architecture',
          'Learn Transit Gateway, VPC peering, gateway and interface endpoints, and when each fits',
          'Cover load balancing at layer 4 and layer 7: NLB, ALB, Global Accelerator and CloudFront',
          'Build a two-VPC architecture with Transit Gateway in your AWS account'
        ],
        hours: '13-15 hrs/week'
      },
      {
        label: 'Weeks 3-5',
        focus: 'Network implementation (26%)',
        tasks: [
          'Learn hybrid connectivity: AWS Site-to-Site VPN, Direct Connect and Direct Connect Gateway, and the trade-offs between them',
          'Master routing protocols: BGP fundamentals, AS numbers, route propagation and failover behaviour',
          'Cover DNS: Route 53 architectures, private hosted zones and hybrid name resolution',
          'Practise implementing a hybrid network with a VPN and a Direct Connect virtual interface, then break the BGP session and observe failover'
        ],
        hours: '13-15 hrs/week'
      },
      {
        label: 'Weeks 6-8',
        focus: 'Network security, compliance and governance (24%)',
        tasks: [
          'Learn security controls: security groups, network ACLs, AWS WAF, AWS Network Firewall and Shield DDoS protection',
          'Cover traffic inspection architectures, including transit gateway traffic inspection with third-party appliances',
          'Learn the compliance angle: logging, encryption in transit, and how network architecture maps to compliance requirements',
          'Practise reading VPC Flow Logs and using Reachability Analyzer to diagnose a blocked path'
        ],
        hours: '13-15 hrs/week'
      },
      {
        label: 'Weeks 9-10',
        focus: 'Network management and operation (20%)',
        tasks: [
          'Learn automation and infrastructure as code: CloudFormation, the AWS CDK, the CLI and APIs for networking',
          'Cover monitoring: VPC Flow Logs, CloudWatch metrics, Network Manager and Traffic Mirroring',
          'Practise troubleshooting a network fault from symptoms — a connectivity failure, a routing loop, a security-group block',
          'Run a full 170-minute practice exam and log the domains you miss'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 11-12',
        focus: 'Timed rehearsal and gap closing',
        tasks: [
          'Two full 170-minute practice exams under exam conditions',
          'Re-build the scenarios you got wrong rather than re-reading them',
          'Final pass over BGP failover behaviour, Transit Gateway routing and the security-control decision rules',
          'Book before the August 25, 2026 retirement and run the Pearson VUE system test if testing online'
        ],
        hours: '12-14 hrs/week'
      }
    ],
    variants: [
      { label: 'Senior network engineer with BGP and enterprise routing depth', detail: 'Compress to eight to ten weeks. Your routing and design knowledge transfers; spend the recovered time on the AWS service map — Transit Gateway, Gateway Load Balancer, Network Firewall — and the security domain, which is where experienced on-premises engineers lose marks.' },
      { label: 'AWS-focused architect with lighter network depth', detail: 'Fourteen to sixteen weeks, with three extra weeks on BGP, routing protocols and Direct Connect before the AWS material; the exam assumes enterprise networking fluency.' },
      { label: 'Deadline-driven candidate after August 25, 2026', detail: 'Do not race a retiring exam. AWS will not award the certification under ANS-C01 after that date; redirect the plan to a current AWS networking credential and avoid studying a blueprint you cannot sit.' }
    ]
  },

  // P0-4  Prep strategies
  prepStrategies: {
    summary:
      'The strategies that move an Advanced Networking – Specialty score are the ones that force design and implementation in a real AWS account, because the exam is a design-and-implement paper and the scenario items punish candidates who have only read about the services. The single highest-yield habit is to build a multi-VPC architecture end to end in your own AWS account — VPCs, Transit Gateway, a VPN or Direct Connect hybrid leg, security controls and flow logs — and then break it: fail a BGP session, block a path with an ACL, misroute a subnet and diagnose from symptoms, because the exam rewards a fixed diagnostic sequence applied to unfamiliar faults. Second, learn the service-selection decision rules rather than the service menus: the exam frequently asks which connectivity or security service fits a described requirement — Transit Gateway versus VPC peering, Gateway Load Balancer versus Network Load Balancer, Network Firewall versus WAF versus Shield — and candidates who have rehearsed those trade-offs answer faster and more accurately. Third, drill BGP and routing behaviour deliberately, because hybrid connectivity items recur and the correct answers hinge on failover, route propagation and AS-path behaviour rather than on remembering menu items. Fourth, learn the security domain as decision rules too: which control stops which attack, where inspection traffic must flow, and how the compliance angle changes the architecture — security is 24 percent of the paper and the most common place experienced engineers lose marks. Fifth, rehearse the 65-question, 170-minute pacing: that is roughly 2.6 minutes per question, which is comfortable until a long multi-part scenario appears, so practise flagging and moving, and remember the scoring is compensatory across domains. Finally, anchor your plan to the August 25, 2026 retirement date from week zero.',
    items: [
      {
        title: 'Build a multi-VPC architecture and break it',
        detail: 'Build VPCs, Transit Gateway, a hybrid leg and security controls in your own account, then fail a BGP session, block a path with an ACL, misroute a subnet and diagnose from symptoms. The exam rewards a fixed diagnostic sequence applied to unfamiliar faults.'
      },
      {
        title: 'Learn the service-selection decision rules',
        detail: 'Transit Gateway versus VPC peering, Gateway Load Balancer versus NLB, Network Firewall versus WAF versus Shield. The scenario items ask which service fits a requirement, and rehearsed trade-offs beat remembered menus.'
      },
      {
        title: 'Drill BGP and routing behaviour',
        detail: 'Hybrid connectivity items hinge on failover, route propagation and AS-path behaviour. Practise the BGP fundamentals until you can predict what happens when a session drops or a route is withdrawn.'
      },
      {
        title: 'Study security as decision rules, not feature lists',
        detail: 'Security is 24 percent of the paper. Learn which control stops which attack, where inspection traffic must flow, and how compliance changes the architecture — this is where experienced engineers lose the most marks.'
      },
      {
        title: 'Rehearse the 65-question, 170-minute pacing',
        detail: 'Roughly 2.6 minutes per question is comfortable until a long multi-part scenario appears. Practise flagging and moving, and remember the scoring is compensatory — you only need the overall 750 scaled score.'
      },
      {
        title: 'Anchor your plan to the retirement date',
        detail: 'ANS-C01 retires August 25, 2026. Work backwards from that date in week zero, and if the arithmetic does not fit, redirect to a current AWS networking credential rather than studying an exam you cannot sit.'
      }
    ]
  },

  // P0-5  Study-resource comparison
  resourceComparison: {
    summary:
      'The buying logic for the Advanced Networking – Specialty exam is dominated by the retirement date and by AWS\u2019s own free material: the official exam guide, sample questions, AWS Skill Builder courses and the exam prep plan are free, and they are the blueprint — so the base programme costs nothing, and the exam itself is $300. The justified spend for most candidates is lab time in a real AWS account, because the exam is a design-and-implement paper and the hands-on scenarios are where the marks are; a pay-as-you-go account with budget alerts typically costs $30-80 across a study window if you delete resources between sessions. On the paid side, AWS Skill Builder offers both free and subscription tiers, with the subscription (roughly $29-49 a month) unlocking additional practice exams and labs that are well-calibrated to the real exam; the official AWS practice exam is the closest available readiness gate and costs $40 per attempt. Third-party practice tests range from $20 to $100 depending on provider, with the caveat that no third-party bank is as well-calibrated as the AWS official practice exam, so treat third-party scores as weak signals. Video courses on the major cloud-training platforms run $15-40 on sale and help most with the hybrid-connectivity and security material. Because the exam retires August 25, 2026, confirm any third-party material is written for the current ANS-C01 blueprint and vouch for the price before buying. The footnote anchoring the comparison: prices below are USD list checked 2026-08 and change by provider, region and sale status; AWS exam pricing is $300 with a 50 percent discount voucher for candidates who already hold an active AWS certification; we take no commission from any provider and rank nothing by commercial relationship.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official exam guide, sample questions and prep plan (AWS)', values: ['Free', 'Exam guide PDF, sample items, exam prep plan on AWS Skill Builder', 'The blueprint itself; confirm it is the current ANS-C01 version'] },
      { label: 'AWS official practice exam', values: ['$40 per attempt', 'Timed practice exam on AWS Skill Builder', 'The readiness gate — closest proxy for real item style and difficulty'] },
      { label: 'AWS Skill Builder subscription', values: ['~$29-49/month', 'Course library plus labs and practice exams', 'Candidates who want structured AWS courses and more practice volume'] },
      { label: 'Personal AWS account for labs', values: ['$30-80 across a study window if you delete resources', 'Live cloud environment with budget alerts', 'The hands-on backbone — multi-VPC, Transit Gateway and hybrid scenarios need real infrastructure'] },
      { label: 'Third-party practice tests', values: ['~$20-100 by provider', 'Question banks', 'Supplementary volume; treat scores as weaker signals than the official practice exam'] },
      { label: 'Third-party video course', values: ['~$15-40 on sale', 'Video instruction', 'A structured narrative; confirm it covers the current blueprint'] },
      { label: 'Exam voucher (ANS-C01)', values: ['$300; 50% discount voucher if you hold an active AWS certification', 'Pearson VUE, test centre or online', 'Required — schedule before the August 25, 2026 retirement'] }
    ],
    footnote: 'Prices checked 2026-08-05, USD list before tax and regional adjustment; AWS Skill Builder subscription and practice-exam pricing can change. ANS-C01 retires August 25, 2026 — confirm any material is current before buying, and book the exam well before the date. We take no commission from any provider and rank nothing by commercial relationship.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The dominant mistakes around the Advanced Networking – Specialty exam in 2026 are calendar errors, preparation errors and scoring misreads, and the first one is the most expensive: candidates study for months without noticing that ANS-C01 retires on August 25, 2026, and either miss the deadline or race an exam they are not ready for in the final weeks. The second is preparing from documentation and video without building in a real AWS account, which fails the design-and-implement scenarios — this is a paper where candidates who have never wired a Transit Gateway or debugged a BGP session answer from recognition rather than experience. The third is misreading the scoring model: 750 out of 1,000 is a scaled score, not 75 percent of the 65 questions, and because the raw-to-scaled conversion cannot be reverse-engineered, doing question-count arithmetic in the exam is wasted effort. The fourth is leaving questions blank; there is no penalty for guessing, and some questions are unscored experimental items anyway, so an unanswered item is strictly worse than a guess. The fifth is ignoring the domain weights and studying all four domains evenly, when Network Design at 30 percent and Network Security at 24 percent together are more than half the paper and deserve proportionally more hours than Network Management and Operation at 20 percent. The sixth is underestimating the security domain, which is where experienced engineers lose the most marks — the exam is as much about WAF, Network Firewall, inspection architectures and compliance as it is about routing. The seventh is failing to account for the 14-day retake wait and the full $300 fee per attempt, which makes a rushed first attempt an expensive mistake. Finally, some candidates treat the certification as permanent, when it is valid for three years and requires recertification by passing the current exam.',
    items: [
      {
        mistake: 'Studying without noticing the retirement date',
        fix: 'ANS-C01 retires August 25, 2026. Put the date on your calendar in week zero, verify the current blueprint, and decide early whether to complete the exam before retirement or redirect to a current AWS networking credential.'
      },
      {
        mistake: 'Preparing from docs and video without building',
        fix: 'The exam is a design-and-implement paper. Build a multi-VPC architecture with Transit Gateway and a hybrid leg in your own AWS account, and diagnose real faults, because the scenario items reward executed experience.'
      },
      {
        mistake: 'Misreading the scoring model',
        fix: '750 out of 1,000 is a scaled score, not a percentage of the 65 questions, and AWS equates forms so the conversion cannot be reverse-engineered. Stop counting questions and aim to answer correctly across all four domains.'
      },
      {
        mistake: 'Leaving questions blank',
        fix: 'There is no penalty for guessing, and some questions are unscored experimental items. An unanswered question is strictly worse than a guess, so never leave a blank.'
      },
      {
        mistake: 'Studying all four domains evenly',
        fix: 'Network Design (30%) and Network Security (24%) together are more than half the paper and deserve proportionally more hours than Network Management and Operation (20%). Weight your study to the published domain weights.'
      },
      {
        mistake: 'Underestimating the security domain',
        fix: 'Security, compliance and governance is 24 percent of the paper and where experienced engineers lose the most marks. Study WAF, Network Firewall, inspection architectures and the compliance angle with the same rigour as routing.'
      },
      {
        mistake: 'Rushing a first attempt into the retake wait',
        fix: 'A failed attempt costs the full $300 fee and triggers a 14-day wait. Use the official practice exam as the readiness gate and only book when you pass it consistently.'
      },
      {
        mistake: 'Treating the certification as permanent',
        fix: 'The certification is valid for three years and requires recertification by passing the current exam version before it expires. Diary the expiry; recertification by exam is the only path.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The Advanced Networking – Specialty exam (ANS-C01) is 65 questions in 170 minutes, delivered through Pearson VUE either at a test centre or online-proctored, with a scaled passing score of 750 out of 1,000, and AWS states that a portion of the questions are unscored experimental items. The question formats are multiple choice with a single correct answer and multiple response with two or more correct answers, and the four domains from the exam guide are Network Design at 30 percent, Network Implementation at 26 percent, Network Security, Compliance, and Governance at 24 percent, and Network Management and Operation at 20 percent. The distinguishing feature of the paper is that most items are long scenario questions: a described enterprise network situation — a hybrid connectivity requirement, a routing problem, a security constraint, a compliance obligation — followed by which service, architecture or configuration the engineer should choose, and the answer usually hinges on the trade-offs between AWS networking services rather than on remembering a specific flag or endpoint. Expect items that ask you to choose between Transit Gateway and VPC peering for a described traffic pattern, between Direct Connect and VPN for a hybrid requirement, between Network Firewall, WAF and Shield for a security control, and between architecture options under constraints like cost, latency, availability or compliance. Because the scoring is compensatory, you do not need to pass any individual domain, only the overall 750 scaled score, and because guessing carries no penalty, no item should be left blank. The pacing math is roughly 2.6 minutes per question, which is comfortable until a long multi-part scenario appears, so a steady sweep with flagging is the winning rhythm. The samples below are editor-written illustrations of the published format and domains, not live exam items.',
    types: [
      { name: 'Multiple choice (single answer)', share: 'The majority of items', detail: 'Long scenario stems asking which networking service, architecture or configuration fits a described requirement. The answer usually hinges on service trade-offs rather than recall.' },
      { name: 'Multiple response', share: 'A significant minority', detail: 'Items requiring two or more correct answers. No partial credit, so evaluate each option independently.' },
      { name: 'Architecture-decision scenario items', share: 'Heaviest in the design and security domains', detail: 'Choose between Transit Gateway and peering, Direct Connect and VPN, Network Firewall, WAF and Shield under stated constraints of cost, latency, availability or compliance.' },
      { name: 'Troubleshooting and operation items', share: 'Concentrated in the management domain', detail: 'A described symptom — a failed BGP session, a blocked path, a routing loop — followed by the cause or next diagnostic step. These reward a fixed diagnostic sequence.' }
    ],
    samples: [
      {
        prompt: 'A company operates VPCs in several AWS Regions and on-premises sites that must all communicate. The solution must simplify management by providing a central hub for inter-VPC and hybrid traffic, support incremental connectivity without full mesh peering, and allow centralised inspection of traffic between VPCs. Which architecture should be used?',
        options: [
          'A. AWS Transit Gateway with attachments for each VPC and the on-premises sites, with centralised traffic inspection through a gateway route table',
          'B. Full-mesh VPC peering between every VPC, with inspection done per VPC',
          'C. A single large VPC containing all workloads and a Direct Connect connection',
          'D. Internet-based communication between VPCs through NAT gateways and public endpoints'
        ],
        answer: 'A',
        explanation: 'AWS Transit Gateway is the hub-and-spoke service purpose-built for this requirement: each VPC and on-premises site connects as an attachment to a central hub, new VPCs are added without full-mesh peering, and route tables can direct traffic through inspection appliances for centralised security. A supplies all three clauses — central hub, incremental connectivity, and centralised inspection. B is the classic anti-pattern the stem rules out: full-mesh peering grows quadratically and provides no central inspection point. C collapses multiple environments into one VPC, which breaks the isolation and multi-account patterns the stem implies. D sends traffic over the internet, violating the private-connectivity intent and adding inspection complexity. When the stem pairs many-to-many connectivity with centralised inspection, Transit Gateway with inspection routing is the answer.'
      },
      {
        prompt: 'A workload is served from an Application Load Balancer in one VPC, and traffic from a second VPC must reach it over a private path. The team must minimise administrative overhead and there is no requirement for transitive routing to other VPCs. Which connectivity option best meets the requirement?',
        options: [
          'A. VPC peering between the two VPCs',
          'B. AWS Transit Gateway with a single attachment pair',
          'C. A public-facing load balancer with internet access',
          'D. An AWS Site-to-Site VPN between the two VPCs'
        ],
        answer: 'A',
        explanation: 'VPC peering is the right tool when exactly two VPCs need private connectivity and there is no transitive routing requirement: it is a direct, private connection with minimal administrative overhead, and the stem explicitly rules out transit. B introduces Transit Gateway where the requirement is a one-to-one connection, adding a hub and more configuration than the workload needs. C routes traffic over the internet, violating the private-path requirement. D is for connecting a VPC to an on-premises network, not for VPC-to-VPC connectivity, and would be both misapplied and higher-overhead. When the stem describes exactly two VPCs with no transit requirement, peering is the answer — this is one of the most frequently tested selection rules on the paper.'
      },
      {
        prompt: 'A security team must detect and block common web attacks and bot traffic before it reaches an application behind a load balancer, while also providing DDoS protection at the network layer. Which combination of AWS services should be deployed?',
        options: [
          'A. AWS WAF for web-layer filtering and AWS Shield for DDoS protection',
          'B. AWS Network Firewall alone for all filtering',
          'C. Security groups only, applied to the load balancer',
          'D. Amazon GuardDuty alone for detection'
        ],
        answer: 'A',
        explanation: 'The requirement has two distinct layers: web-layer filtering for common web attacks and bot traffic, and network-layer DDoS protection. AWS WAF is the web application firewall that filters HTTP traffic with managed and custom rules, and AWS Shield (standard at no extra cost, Advanced as a paid service) provides DDoS protection — the combination maps one-for-one to the stem. B applies Network Firewall as the sole control, but it is a stateful firewall for network traffic and is not the tool for web-layer WAF-style filtering of HTTP attack signatures. C uses security groups as stateless traffic filters at the network boundary, which is necessary but not sufficient for web-layer attack detection. D detects threats from logs but does not actively filter web traffic or stop DDoS. When the stem separates web-layer attacks from network-layer DDoS, the answer is the pairing of WAF and Shield, and the exam expects you to know the boundary between the two services.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The Advanced Networking – Specialty exam (ANS-C01) is delivered through Pearson VUE, at a test centre or online-proctored, and the direct exam-day answer is 65 questions in 170 minutes with a scaled passing score of 750 out of 1,000 — and in 2026 there is a date that overrides all other planning: the exam retires on August 25, 2026, so your booking must be completed before that date. The test centre versus online decision is the first real choice. A centre gives you a supervised workstation and a physical erasable whiteboard — genuinely useful for sketching a Transit Gateway topology or a CIDR plan — and no room scan; the online option gives you your own desk but a stricter environment, with a room scan, a clear desk, no second monitors, and no physical scratch paper unless it was explicitly approved for your booking. Check what your booking allows rather than assuming, because the rules have tightened across proctoring providers and an item that was acceptable a year ago can end your session now. Whichever you choose, arrive or launch check-in thirty minutes early; online check-in can take twenty minutes on a bad day, and a late check-in is a forfeited fee. Inside the exam, the pacing math is roughly 2.6 minutes per question, so the winning rhythm is a steady sweep with flagging, using the service-selection and diagnostic sequences you rehearsed — underline the constraint in each long scenario stem before reading the options, and remember the scoring is compensatory, so a weak domain can be offset by a strong one and no item should be left blank because guessing carries no penalty.',
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
      { time: 'Before booking', detail: 'Confirm your booking is scheduled before the August 25, 2026 retirement date; after that date AWS will not offer the exam.' },
      { time: '2-3 days before', detail: 'Run the online-proctoring system test on the exact machine, network and location you will use. Corporate laptops with locked-down security software are the single most common cause of a failed launch.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or start online check-in. Check-in is not the exam start, and starting late can cost the booking.' },
      { time: 'Check-in', detail: 'ID verification, photograph, and for online testing a room scan. Test centres add a locker and a pocket check.' },
      { time: 'First 5 minutes', detail: 'Instructions and the non-disclosure agreement. Confirm the question count and the 170-minute timer on the launch screen.' },
      { time: '0-140 minutes', detail: 'Steady sweep at roughly 2.6 minutes per question: underline constraints in scenario stems, answer what you know, flag anything costing more than two and a half minutes, and move on.' },
      { time: '140-170 minutes', detail: 'Return to flagged items with the remaining time divided across them. Answer every item — guessing carries no penalty and some questions are unscored.' },
      { time: 'After the exam', detail: 'Results are typically available within five business days through your AWS Certification account.' }
    ],
    rules: [
      '65 questions in 170 minutes; multiple choice and multiple response.',
      'Scaled passing score of 750 out of 1,000; the scoring is compensatory across the four domains.',
      'A portion of the questions are unscored experimental items; you cannot identify them and must answer them anyway.',
      'No penalty for guessing — never leave an item blank.',
      'Registration fee is $300 per attempt, with a 14-day waiting period after a failed attempt.',
      'No scratch paper of your own — centres supply an erasable whiteboard; online candidates get no paper unless a physical whiteboard was explicitly approved on the booking.',
      'The certification is valid for three years and requires recertification by passing the current exam.',
      'ANS-C01 retires August 25, 2026; the exam cannot be taken after that date.'
    ],
    afterwards:
      'Results are typically available within five business days through your AWS Certification account, delivered as a pass or fail with a score report showing performance across the four domains — and because AWS publishes no pass rate, the domain breakdown on a failed attempt is the most useful artefact the exam produces. If you passed, the certification is valid for three years and you can claim the digital badge and certificate from your AWS Certification account; recertification before expiry means passing the current version of the exam, so diary the expiry date. If you failed, the published rule is a 14-day wait before the next attempt with the full $300 fee charged again, so resist the impulse to re-sit as soon as the window opens on the same preparation — and remember the larger deadline: ANS-C01 retires on August 25, 2026, so a retake plan must fit inside that calendar. Use the domain breakdown to identify the one or two areas that pulled you below 750 — typically the design or security domains — and spend the 14 days rebuilding those scenarios in a real AWS account before the retake, because a repeated attempt on the same knowledge is how a $300 exam becomes a $600 one.'
  }
};

export default data;
