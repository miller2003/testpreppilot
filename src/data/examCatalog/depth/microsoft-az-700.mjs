// Depth content for: microsoft-az-700
// Sources: learn.microsoft.com/credentials (AZ-700 study guide "Skills measured as of
// July 27, 2026" with change log; Azure Network Engineer Associate certification page,
// Last Updated 07/29/2026, renewal frequency 12 months, "You will have 100 minutes to
// complete this assessment", languages list, single AZ-700 learning path of 6 hr 29 min
// across 8 modules; exam duration & exam experience support page; exam scoring and
// score reports; exam retake policy), bls.gov Occupational Outlook Handbook (May 2024
// wage data), Skillsoft IT Skills and Salary material (2025). No retirement notice
// exists for AZ-700 as of this review. All facts checked 2026-08-04.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This guide is compiled and maintained by our IT-certifications desk. Vendor exams in this space are revised and retired frequently, so we track the objectives document by its published revision date and state plainly when an exam is being retired and what replaces it — the single most common way candidates waste money here is studying a superseded blueprint. Fees, scoring, retake rules and renewal terms come from the vendor’s own certification pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Objectives, exam codes, fees and retirement dates were taken from the vendor’s current certification pages and checked for the revision date shown there.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary
  salaryOutlook: {
    headline: '$130,390 median for computer network architects (BLS, May 2024) — the most literal SOC match of any Azure exam',
    summary: "Of all the exams covered on this site, AZ-700 is the one where the BLS occupation and the certification describe almost the same person. The Bureau of Labor Statistics defines Computer Network Architects (SOC 15-1241) as people who design and implement data communication networks, and the AZ-700 audience profile describes someone who plans, implements and manages Azure networking solutions including core infrastructure, hybrid connectivity, application delivery, private access and network security. That is the same sentence written twice. The median is $130,390 as of May 2024, employment is projected to grow 12% through 2034 — much faster than average — and BLS notes that entry to the occupation typically requires five or more years of prior experience in a related role such as network and computer systems administration. That last detail is the honest framing for AZ-700. It is not an entry-level credential and it does not function as one. Its value shows up in a specific and well-paid transition: the enterprise network engineer with a CCNA or CCNP and a decade of switches, routing and MPLS behind them who needs to prove they can carry that competence into Azure. Organisations running hybrid connectivity — ExpressRoute into a colocation facility, a hub-and-spoke topology with forced tunnelling, an on-premises datacenter that is not going away — pay for exactly this and struggle to hire it, because the population that understands both BGP and Azure resource manager is small. Two caveats. If you have no networking background at all, AZ-700 is the wrong first exam and the salary figure above will not describe you; start with AZ-104. And note the Skillsoft self-reported figure below is the lowest in the Azure family, which almost certainly reflects survey respondent mix rather than anything real about network engineer pay — it is a good illustration of why we anchor on BLS and label survey data as survey data.",
    rows: [
      { label: 'Median annual wage — computer network architects (SOC 15-1241)', value: '$130,390', note: 'BLS Occupational Outlook Handbook, May 2024 wage data. The most direct BLS match for the AZ-700 audience profile.' },
      { label: 'Projected employment growth, 2024-2034', value: '12% (much faster than average)', note: 'BLS OOH, with employment rising from 179,200 in 2024 by about 21,400.' },
      { label: 'Projected annual openings, 2024-2034', value: '~11,200 per year', note: 'BLS OOH. A small occupation in absolute terms, which is part of why the skill commands a premium.' },
      { label: 'Typical prior experience required to enter the occupation', value: '5 years or more', note: 'BLS OOH. Confirms AZ-700 is a mid-career credential rather than an entry point; BLS names network and computer systems administration as the usual feeder role.' },
      { label: 'Median annual wage — network and computer systems administrators (SOC 15-1244)', value: '$96,800', note: 'BLS OOH, May 2024. The feeder occupation, included so you can see the size of the step AZ-700 sits on.' },
      { label: 'Self-reported average, Azure Network Engineer Associate holders', value: '$77,436', note: 'Skillsoft "top-paying Microsoft certifications" material from its IT Skills and Salary survey (2025) — worldwide, self-reported, NOT government data. The lowest figure in the Azure family and far below the US BLS median for the occupation, which tells you more about the survey population than about network engineer pay.' }
    ],
    growth: '12% projected growth 2024-2034 for computer network architects — much faster than average, with about 11,200 openings a year (BLS OOH)',
    source: { label: 'BLS Occupational Outlook Handbook — Computer Network Architects', url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-network-architects.htm' }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'No published pass rate — and AZ-700 has a smaller candidate pool than any figure would represent',
    summary: "Microsoft publishes no pass rate for AZ-700, releases no attempt counts and no score distributions, and has never done so for any exam in its programme. There is an additional reason to distrust the numbers floating around for this particular exam: AZ-700 has a far smaller candidate population than AZ-104 or AZ-900, so even the informal community sentiment that fills the gap elsewhere is thinner here, drawn from a few dozen forum posts rather than a few thousand. A percentage derived from that is noise wearing a decimal point. What is worth knowing is how the scoring behaves on a narrow, deep exam. The pass mark is 700 on a 1-1,000 scale, and Microsoft is explicit that this is a scaled score which may not equal 70% of the available points, because candidates receive question sets of differing difficulty. On a broad exam that scaling averages out across many topics. On AZ-700, where five closely related domains all sit inside the same discipline, a genuine weakness in one area is harder to compensate for elsewhere — the whole exam is networking, so there is no unrelated domain to carry you. The published weights are relatively even by Azure standards: core networking infrastructure 25-30%, connectivity services 20-25%, application delivery 15-20%, network security 15-20%, private access 10-15%. Nothing dominates and nothing is safely skippable. Your score report gives one overall number plus a bar chart of relative strength across those five areas, which Microsoft states cannot be summed or read as percentages. Expect the chart to be less dramatic than on other exams precisely because the domains are so closely related: candidates who are weak on this exam tend to be evenly weak, and candidates who are strong tend to be evenly strong.",
    caveat: "No official pass rate exists for AZ-700 and none ever will. Any figure you find is a training vendor's marketing or a handful of self-selecting forum reports. Plan against the mechanics instead: 700 out of 1,000 scaled and not equal to 70% of the questions, no penalty for guessing so never leave anything blank, an unidentifiable subset of items on your form is unscored pilot content, a preliminary pass or fail on screen within minutes, and a score report broken out across the five skill areas. The exam is 100 minutes of exam time. The retake ladder is 24 hours after a first failure, 14 days between every attempt after that, five attempts maximum in the 12 months following your first sitting, and the full USD $165 is charged each time. Verified against the AZ-700 study guide, the Azure Network Engineer Associate certification page, the exam scoring page and the exam retake policy, 2026-08-04.",
    source: { label: 'Microsoft Learn — Exam scoring and score reports', url: 'https://learn.microsoft.com/en-us/credentials/certifications/exam-scoring-reports' }
  },

  // P0-3  Study plan
  studyPlan: {
    summary: "There is a trap in the official material for this exam and you should know about it before you plan anything. The Microsoft Learn course for AZ-700 is a single learning path of eight modules running to roughly six and a half hours — by far the smallest official content set of any exam on this site, less than a third of what AZ-104 offers. It would be easy to read that as evidence that AZ-700 is a small exam. It is not. The path is a skeleton, and the depth the exam actually tests lives in the Azure networking product documentation, not in the modules. Candidates who work the learning path, score well on the practice assessment and book immediately are the most reliable failure group for this exam. Budget 60 to 90 hours if you have a genuine networking background, and treat the Learn path as a table of contents that tells you which documentation sections to read properly. The second planning reality is ExpressRoute. It is a substantial part of the connectivity domain, it is the topic candidates find hardest, and you almost certainly cannot lab it — a circuit costs real money and requires a connectivity provider. That means ExpressRoute has to be learned conceptually and precisely: peering types, routing domains, gateway SKUs and their bandwidth ceilings, FastPath, Global Reach, and the difference between what the circuit does and what the gateway does. Give it disproportionate reading time to compensate for the absent hands-on. Everything else on the blueprint you can and should build. The plan below assumes AZ-104-level Azure familiarity and real networking fundamentals — name resolution, protocols, address management — which the audience profile explicitly requires.",
    totalHours: '60-90 hours',
    weeks: [
      {
        label: 'Week 0 — baseline',
        focus: 'Establish where you actually are before spending hours',
        tasks: [
          'Take the free official Practice Assessment cold to get a bar chart across the five skill areas',
          'Read the change log on the study guide: the current blueprint is "Skills measured as of July 27, 2026", with minor revisions to IP addressing, network monitoring and network security groups',
          'Create a subscription with a spending limit and a budget alert — you will build a lot of small, cheap resources and a few expensive ones (gateways) that must be deleted the same day',
          'Refresh the non-Azure fundamentals the audience profile assumes: subnetting and CIDR arithmetic, DNS resolution order, TCP versus UDP, and BGP path selection basics'
        ],
        hours: '5-7 hrs'
      },
      {
        label: 'Weeks 1-2',
        focus: 'Design and implement core networking infrastructure (25-30%)',
        tasks: [
          'Do CIDR arithmetic by hand until it is fast — the exam gives you address spaces and asks whether a subnet fits, and mental arithmetic under time pressure is a real constraint',
          'Build VNets and subnets, then peer them within a region and across regions; prove to yourself that peering is non-transitive and understand gateway transit and the allow-forwarded-traffic settings',
          'Public and private IP addressing: Basic versus Standard SKU behaviour, static versus dynamic, prefixes, and the default outbound access changes',
          'Azure DNS: public zones, private zones, VNet links with and without auto-registration, and the 168.63.129.16 resolver — private DNS resolution is one of the most heavily tested topics on the exam',
          'Azure DNS Private Resolver: inbound and outbound endpoints and forwarding rulesets, which is how hybrid name resolution is now expected to be done',
          'Routing: system routes, user-defined routes, route tables, BGP route propagation, and the precedence order when they conflict',
          'Network monitoring: Network Watcher, connection troubleshoot, NSG flow logs, and the objectives flagged as minor changes in July 2026'
        ],
        hours: '12-15 hrs/week'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Design, implement, and manage connectivity services (20-25%) — including the ExpressRoute reading block',
        tasks: [
          'Build a site-to-site VPN with a virtual network gateway and, if you can, a second on-premises simulation to see active-active and BGP over VPN',
          'Point-to-site VPN: certificate authentication versus Microsoft Entra ID authentication, tunnel types, and address pool design',
          'Virtual WAN: hubs, hub-to-hub connectivity, secured virtual hub with Azure Firewall, and when Virtual WAN replaces a hand-built hub-and-spoke',
          'ExpressRoute — read, do not lab. Private peering versus Microsoft peering, circuit SKU and gateway SKU and which limits which, FastPath, Global Reach, ExpressRoute Direct, and coexistence with a site-to-site VPN as a failover path',
          'Draw the hybrid topology from memory three times across the fortnight: which resource holds the circuit, which holds the connection, which holds the gateway, and where routes are exchanged'
        ],
        hours: '12-15 hrs/week'
      },
      {
        label: 'Week 5',
        focus: 'Design and implement application delivery services (15-20%)',
        tasks: [
          'Build all four and compare them side by side: Azure Load Balancer, Application Gateway, Azure Front Door, Traffic Manager',
          'Nail the two axes the exam decides on — global versus regional, and layer 4 versus layer 7. Nearly every question in this domain resolves on those two',
          'Load Balancer detail: SKUs, health probes, inbound NAT rules, outbound rules and SNAT port exhaustion',
          'Application Gateway detail: listeners, rules, backend pools, path-based and multi-site routing, WAF policies, autoscaling',
          'Front Door detail: routing rules, caching, origin groups, WAF at the edge, and why it is not a drop-in replacement for Traffic Manager'
        ],
        hours: '12-15 hrs'
      },
      {
        label: 'Week 6',
        focus: 'Private access (10-15%) + network security services (15-20%)',
        tasks: [
          'Private endpoints and Private Link: build one, then follow the DNS chain end to end — the private DNS zone, the A record, and what an on-premises client needs in order to resolve it',
          'Service endpoints and service endpoint policies, and be able to state the difference from private endpoints in terms of consequence rather than definition',
          'Private Link Service: publishing your own service behind a Standard Load Balancer for consumers in other tenants',
          'Network security groups and application security groups: rule priority evaluation, effective rules, and the July 2026 minor revision to this objective',
          'Azure Firewall and Firewall Manager: policy hierarchy, application versus network versus NAT rules, threat intelligence, forced tunnelling, and the premium features',
          'WAF policies on Application Gateway and Front Door, and DDoS Protection tiers'
        ],
        hours: '14-18 hrs'
      },
      {
        label: 'Week 7',
        focus: 'Consolidation and format rehearsal',
        tasks: [
          'Draw a complete hub-and-spoke topology from memory with firewall, gateway, UDRs, private endpoints and DNS — then do it again as Virtual WAN',
          'Work through the Azure Architecture Center networking reference architectures and, for each, identify the requirement that forced each choice',
          'Re-take the official Practice Assessment and compare with your Week 0 baseline; spend remaining hours on the two weakest areas only',
          'Run one session in the free exam sandbox at aka.ms/examdemo so no item format is unfamiliar on the day'
        ],
        hours: '10-14 hrs'
      }
    ],
    variants: [
      { label: 'CCNA/CCNP holder new to Azure', detail: 'Six weeks is realistic and your routing, BGP and load-balancing instincts transfer almost completely. Your gap is Azure-specific: the resource model, private DNS zones, private endpoints, and the fact that Azure gives you no control over the underlay. Front-load core infrastructure and private access.' },
      { label: 'AZ-104 holder with no networking background', detail: 'Add three to four weeks and spend them on fundamentals rather than Azure. Subnetting arithmetic, DNS resolution order and BGP behaviour are assumed knowledge on this exam, not taught by it, and no amount of portal familiarity substitutes.' },
      { label: 'Working full-time', detail: 'Stretch to twelve or fourteen weeks at 6 hrs/week. The one thing not to compress is the ExpressRoute block — because you cannot lab it, it needs repeated reading across weeks rather than one intense session.' },
      { label: 'Already hold AZ-305', detail: 'You know which service to recommend; AZ-700 asks you to configure it. Roughly four to five weeks, spent almost entirely on implementation detail: rule priorities, probe configuration, gateway SKUs, DNS record chains. The design-level knowledge you have will not answer a hot-area question about a health probe.' }
    ]
  },

  // P0-4  Prep strategies
  prepStrategies: {
    summary: "AZ-700 rewards drawing and building over reading. These are ordered by what actually changes a score on a narrow, deep exam.",
    items: [
      {
        title: 'Draw every topology by hand, repeatedly',
        detail: "Azure networking is a set of relationships between resources — a circuit, a connection, a gateway, a VNet, a route table, a private DNS zone — and the exam constantly asks which resource holds which property. Reading about that produces recognition; drawing it produces recall. Draw hub-and-spoke with forced tunnelling, then Virtual WAN with a secured hub, then an ExpressRoute plus VPN coexistence design, and do each from memory at least three times across your study period. At a test centre you will have a whiteboard, and the candidates who use it well on this exam are the ones who have already drawn these diagrams fifty times."
      },
      {
        title: 'Treat the Learn path as a contents page, not a course',
        detail: "The official AZ-700 learning path is one path, eight modules, roughly six and a half hours — the thinnest official content of any exam we cover, and nowhere near the depth of the questions. Use it to enumerate the topics, then read the actual product documentation for each: the Azure Firewall rule processing logic, the Application Gateway health probe reference, the ExpressRoute circuit and gateway SKU tables, the private DNS zone naming conventions. The gap between the path and the exam is where most failures live."
      },
      {
        title: 'Learn ExpressRoute conceptually because you cannot lab it',
        detail: "A circuit costs real money and needs a connectivity provider, so essentially no self-funded candidate builds one. Compensate deliberately. Learn the split of responsibility between the circuit (provisioned with a provider, has a service key, has peerings) and the gateway (an Azure resource in your VNet with its own SKU and throughput ceiling). Learn private peering versus Microsoft peering and what each carries. Learn Global Reach, FastPath and ExpressRoute Direct as three distinct things solving three distinct problems. Then learn the coexistence scenario with a site-to-site VPN as backup, because it appears repeatedly."
      },
      {
        title: 'Resolve every load-balancing question on two axes',
        detail: "Global or regional, and layer 4 or layer 7. Front Door is global and layer 7. Traffic Manager is global and DNS-based, which means it does not sit in the data path at all — a distinction the exam loves. Application Gateway is regional and layer 7. Azure Load Balancer is regional and layer 4. Write that 2x2 on paper, add the deciding features to each cell (WAF, SSL offload, path-based routing, session affinity, outbound rules), and this entire 15-20% domain becomes mechanical."
      },
      {
        title: 'Follow the private endpoint DNS chain end to end, once, in a real subscription',
        detail: "Private Link questions are rarely about creating the endpoint; they are about why a client cannot resolve it. Build one, then trace the whole chain: the private endpoint's network interface and private IP, the privatelink DNS zone, the A record created inside it, the VNet link to that zone, and — for on-premises clients — the conditional forwarder or Private Resolver inbound endpoint that gets the query to Azure DNS. Once you have watched a resolution fail because the VNet link was missing, you will never miss that question again."
      },
      {
        title: 'Practise CIDR arithmetic under time pressure',
        detail: "The exam gives you address spaces and asks whether a subnet fits, how many hosts remain, or which of four proposed ranges overlaps. Under a 100-minute clock this is pure speed. Drill until you can do /24 through /29 splits in your head, and remember Azure reserves five addresses per subnet — the network address, the broadcast address, and three for the platform — so a /29 gives you three usable hosts, not six. That reservation is a favourite question."
      },
      {
        title: 'Learn rule evaluation order for NSGs and Azure Firewall separately',
        detail: "They are different systems and candidates blend them. NSGs evaluate by priority number, lowest first, with separate inbound and outbound chains and default rules at the bottom; a subnet NSG and a NIC NSG both apply and traffic must pass both. Azure Firewall processes DNAT rules first, then network rules, then application rules, with threat intelligence able to intervene before any of them. Write both orders out and test yourself on a scenario where the answer differs depending on which system is in play."
      },
      {
        title: 'Use the in-exam Learn panel for tables, not concepts',
        detail: "AZ-700 is an associate role-based exam, so the Microsoft Learn panel is available: the learn.microsoft.com domain minus Q&A, practice assessments and your profile, split-screen, clock running, no extra time. Its best use on this exam is looking up a table you knew existed but could not memorise — gateway SKU throughput, Firewall SKU feature differences, DDoS tier inclusions. It is a poor tool for a scenario question. Two or three lookups in 100 minutes is the right budget."
      }
    ]
  },

  // P0-5  Study-resource comparison
  resourceComparison: {
    summary: "The AZ-700 market is small and that cuts both ways: fewer options, but the good ones are easy to identify. The official learning path is unusually thin for this exam, which raises the value of documentation and of the free video content relative to paid courses.",
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn AZ-700 path (official)', values: ['Free', 'One learning path, 8 modules, ~6 hr 29 min', 'Enumerating the blueprint. Genuinely necessary and genuinely insufficient — treat it as a contents page and read the product docs behind each module.'] },
      { label: 'Azure networking product documentation (official)', values: ['Free', 'Reference documentation', 'Where the exam-level depth actually lives: Firewall rule processing, Application Gateway probe reference, ExpressRoute SKU tables, private DNS zone naming. The single most important free resource for this exam.'] },
      { label: 'Microsoft official Practice Assessment for AZ-700', values: ['Free', 'Unlimited timed question bank on Microsoft Learn', 'Per-domain diagnostics across the five areas. Its weakness on this exam is that it is easier than the real thing — a strong score here is necessary but not sufficient.'] },
      { label: 'Azure subscription for labs', values: ['Pay per use; budget roughly $40-90 across seven weeks, gateways being the main cost', 'Live environment', 'Essential for everything except ExpressRoute. VPN gateways and Application Gateways are the expensive items — build them, test them, and delete them the same day.'] },
      { label: "John Savill's Technical Training — AZ-700 study cram and networking deep dives (YouTube)", values: ['Free', 'Long-form whiteboard video', 'The best free resource for this exam by a wide margin. Savill is a Microsoft MVP and his networking whiteboards cover the hybrid connectivity and routing material more clearly than anything paid we have seen.'] },
      { label: 'Azure Architecture Center — networking reference architectures (official)', values: ['Free', 'Reference architectures with design rationale', 'Seeing the topologies assembled correctly, with the reasoning written out. Particularly good for hub-and-spoke and Virtual WAN comparisons.'] },
      { label: 'Alan Rodrigues AZ-700 course (Udemy)', values: ['~$15-30 on sale, $90+ list', 'Video course with guided labs', 'The main paid video option with substantial hands-on content. Verify the last-updated date — the blueprint moved on 27 July 2026.'] },
      { label: 'MeasureUp AZ-700 practice test (official Microsoft practice test partner)', values: ['~$99-129 list, frequently discounted', 'Practice test in certification and study modes with explanations', 'Worth considering because the free assessment under-represents the exam\'s difficulty, and the worked explanations fill a real gap on the connectivity domain.'] },
      { label: 'Whizlabs AZ-700 practice tests', values: ['~$20-30', 'Question bank', 'A cheap volume supplement. Coverage of ExpressRoute detail is patchy in our reading — cross-check against the docs rather than trusting an explanation that surprises you.'] },
      { label: 'Pluralsight / A Cloud Guru', values: ['~$29-45/month', 'Video library plus sandboxes', 'The sandboxes let you build gateways without your own bill, which matters more here than on most exams because gateway hours are the expensive part of AZ-700 lab work.'] },
      { label: 'Microsoft official instructor-led course AZ-700T00', values: ['Typically $1,500-2,500 through a Microsoft Learning Partner', 'Three to four-day instructor-led class with labs', 'Employer-funded territory, and a better value proposition than on most exams because an instructor can answer ExpressRoute questions you cannot lab your way to.'] },
      { label: 'Free exam sandbox (aka.ms/examdemo)', values: ['Free', 'Interactive demo of the exam interface', 'One session removes format surprise. Cheap insurance on a 100-minute exam.'] }
    ],
    footnote: 'Prices checked 2026-08-04 and expressed as USD list prices before regional adjustment, sales, employer discounts or student pricing. Udemy list prices are close to fictional; the sale price is the real price. We take no commission from any provider listed and the ordering reflects our editorial judgement of usefulness for this specific exam, not any commercial relationship.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary: "AZ-700 failures cluster around two things: underestimating the exam because the official course is short, and arriving without the networking fundamentals the audience profile assumes you already have.",
    items: [
      {
        mistake: 'Judging the exam by the size of the official learning path',
        fix: "The AZ-700 Learn path is one path, eight modules, about six and a half hours — the smallest official content set of any exam we cover, and roughly a third of what AZ-104 provides. The exam is not proportionally smaller. The depth is in the Azure networking documentation and the path barely gestures at it. Plan 60 to 90 hours and use the modules to identify which documentation sections to read properly."
      },
      {
        mistake: 'Sitting AZ-700 without networking fundamentals',
        fix: "The audience profile states that you should understand name resolution, network protocols and network address management. The exam takes that literally: it will hand you address spaces and expect CIDR arithmetic, hand you a DNS scenario and expect you to know resolution order, and hand you a BGP situation and expect you to know how routes are selected. Azure portal familiarity does not substitute. If you are coming from AZ-104 with no networking background, spend three weeks on fundamentals before you touch the Azure-specific material."
      },
      {
        mistake: 'Assuming 700 out of 1,000 means 70% of the questions',
        fix: "It does not. Microsoft states the score is scaled and may not equal 70% of the available points, because different candidates receive forms of differing difficulty. On a 100-minute exam, time spent doing mental arithmetic about your likely score is time not spent on the remaining questions."
      },
      {
        mistake: 'Skipping ExpressRoute because you cannot lab it',
        fix: "This is the single most common content-level mistake. ExpressRoute sits inside the connectivity domain at 20-25% and it is unavoidable. You cannot build one, so read it instead — deliberately and repeatedly. Learn the circuit-versus-gateway split, private versus Microsoft peering, the SKU and bandwidth ceilings, FastPath, Global Reach, and coexistence with a site-to-site VPN. Spread that reading over several weeks rather than one session."
      },
      {
        mistake: 'Confusing private endpoints with service endpoints',
        fix: "The most reliable wrong answer in the private-access domain. A service endpoint leaves the service on its public IP and extends your VNet identity to it over the Azure backbone; a private endpoint places a private IP for the service inside your subnet and allows public network access to be disabled entirely, with a DNS chain you must configure correctly. The exam asks about the consequences — DNS resolution, on-premises reachability over ExpressRoute, whether public access can be turned off — not the definitions."
      },
      {
        mistake: 'Blending NSG and Azure Firewall rule evaluation',
        fix: "They are separate systems with separate orders. NSGs evaluate by priority number lowest-first, with separate inbound and outbound chains, and both a subnet NSG and a NIC NSG apply so traffic must clear both. Azure Firewall processes DNAT rules, then network rules, then application rules, with threat intelligence able to act first. Learn each order in isolation and then practise a scenario where they interact, because that is how the exam presents it."
      },
      {
        mistake: 'Forgetting Azure reserves five addresses in every subnet',
        fix: "A /29 gives you three usable addresses in Azure, not six: the network address, the broadcast address, and three reserved by the platform for the default gateway and DNS mapping. This shows up in subnet-sizing questions and in gateway subnet sizing, and it is an easy mark either way depending on whether you know it. Related: the GatewaySubnet must be named exactly that, and /27 or larger is the practical recommendation."
      },
      {
        mistake: 'Studying against material recorded before 27 July 2026',
        fix: "The current blueprint is \"Skills measured as of July 27, 2026\", with minor revisions flagged to IP addressing for Azure resources, network monitoring, and implementing and managing network security groups. The certification page was last updated 29 July 2026. Third-party courses lag by months. Read the change log and cross-check each flagged objective against the current documentation."
      },
      {
        mistake: 'Letting the certification lapse',
        fix: "Azure Network Engineer Associate has a 12-month renewal frequency. Renewal is free, unproctored and taken online on Microsoft Learn, with the window opening six months before expiry. Miss it and you re-sit the full proctored exam at USD $165. Set a reminder at the ten-month mark on the day your badge arrives."
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary: "AZ-700 is an associate role-based exam with 100 minutes of exam time, and it uses Microsoft's full item library: multiple choice and multiple response, drag-and-drop and build-list, hot area, active screen, repeated-scenario yes/no sets, possible case studies, and on some forms a live lab. Microsoft does not publish a question count and it varies by form; forms that may include a lab carry 120 minutes of exam time and 140 of seat time rather than 100 and 120, and you are told which you have when the exam launches. Two things distinguish this exam's feel from its Azure siblings. The first is topological reasoning: a large share of items describe a network shape in prose — a hub, two spokes, an on-premises site, a firewall, a route table — and ask what a packet does. You are effectively being asked to build a diagram in your head and trace a path through it, which is why we push drawing so hard in the study plan. The second is precision about resource properties. Where AZ-305 asks which service to recommend, AZ-700 asks which SKU, which peering type, which probe protocol, which priority number. Hot-area items rendering an NSG rule table, an Application Gateway listener configuration or a gateway SKU picker are common, and they are unforgiving of vague knowledge. Because this is associate role-based, the Microsoft Learn panel is available — learn.microsoft.com minus Q&A, practice assessments and your profile, split-screen, clock running, no extra time — which makes it genuinely useful for the SKU comparison tables this exam loves. Rehearse every format free at aka.ms/examdemo. Most items cover generally available features; preview features appear only where commonly used.",
    types: [
      { name: 'Multiple choice (single answer)', share: 'The largest share of items', detail: 'Typically a topology described in prose with a stated requirement — throughput, resilience, no public exposure, on-premises reachability — where two options are plausible and one property decides.' },
      { name: 'Multiple response', share: 'Common', detail: 'Select the components required to complete a connectivity design, or the settings that must be configured for a scenario to work. Judge each independently.' },
      { name: 'Hot area', share: 'Heavily used on this exam', detail: 'Rendered configuration screens — NSG rule tables, Application Gateway listeners and rules, gateway SKU selection, private DNS zone records — with drop-downs to complete. Precision about property values converts directly into marks.' },
      { name: 'Drag and drop / build list', share: 'Frequent', detail: 'Order the steps to establish hybrid connectivity, place components into a topology, or match load-balancing services to requirements. Distractors are routinely included.' },
      { name: 'Repeated-scenario yes/no sets', share: 'Common', detail: 'One topology, three proposed changes, judged independently. Used heavily for peering, routing and NSG evaluation, where a change can be individually correct or individually useless. You cannot return to a statement once you pass it.' },
      { name: 'Case study', share: 'On some forms', detail: 'A multi-tab organisation with an existing network estate, requirements and constraints, followed by linked questions. Read the existing-environment tab carefully — an already-deployed gateway SKU or address space often constrains several answers at once. No return once you move past.' },
      { name: 'Interactive lab', share: 'On some forms; Microsoft does not publish which', detail: 'A real Azure environment with networking tasks. Grading assesses end state. A form containing a lab carries 120 minutes of exam time rather than 100.' },
      { name: 'Mark for review + review screen', share: 'Available within a section', detail: 'Flag and return within your current section. An unscheduled break taken through the exam interface ends access to everything already seen, so plan not to need one on a 100-minute exam.' }
    ],
    samples: [
      {
        prompt: "A company has a hub virtual network containing an Azure Firewall, and two spoke virtual networks peered to the hub. Spoke A must be able to reach a virtual machine in Spoke B, and all traffic between the spokes must be inspected by the firewall. Peering between the spokes is not permitted. What must you configure?",
        options: [
          'A. Enable "Allow gateway transit" on the hub peerings and "Use remote gateways" on the spoke peerings',
          'B. A user-defined route in each spoke subnet with address prefix set to the other spoke and next hop type Virtual appliance pointing to the firewall private IP',
          'C. Enable "Allow forwarded traffic" on the spoke-to-hub peerings only',
          'D. A service endpoint for Microsoft.Network on both spoke subnets'
        ],
        answer: 'B',
        explanation: "VNet peering is non-transitive, so Spoke A has no route to Spoke B via the hub by default — and even if it did, the traffic would not pass through the firewall. What forces both behaviours is a user-defined route in each spoke pointing the other spoke's prefix at the firewall's private IP with next hop type Virtual appliance. A is about hybrid connectivity: gateway transit lets spokes use the hub's VPN or ExpressRoute gateway, which is unrelated to spoke-to-spoke inspection. C is necessary but not sufficient, and this is the trap — allow forwarded traffic permits the hub to pass traffic that did not originate in it, so you will need it, but on its own it creates no route and nothing will flow. An option that is a genuine prerequisite but not the answer is one of the exam's favourite constructions. D is not a real mechanism for this: service endpoints extend VNet identity to PaaS services and have nothing to do with VNet-to-VNet routing."
      },
      {
        prompt: "An application is deployed in three Azure regions. The requirement is to route users to the closest healthy regional deployment, terminate TLS at the edge, inspect requests with a web application firewall before they reach any backend, and cache static content globally. Which service should you recommend as the entry point?",
        options: [
          'A. Azure Traffic Manager with the performance routing method',
          'B. Azure Front Door Premium',
          'C. A Standard public Load Balancer in each region with cross-region load balancing',
          'D. Azure Application Gateway with WAF in each region'
        ],
        answer: 'B',
        explanation: "Four requirements are stated and only one service satisfies all four. Azure Front Door is global, operates at layer 7, terminates TLS at the edge, supports WAF policies at the edge and caches static content — that is the complete list. A fails on three of the four: Traffic Manager is DNS-based, which means it hands the client an IP address and then steps out of the data path entirely; it cannot terminate TLS, cannot inspect anything and cannot cache, because no traffic passes through it. That distinction is the single most tested idea in this domain. C operates at layer 4, so no TLS termination, no WAF and no caching. D would satisfy TLS termination and WAF but Application Gateway is a regional service, so it cannot perform the global closest-healthy-region routing, and it does not cache. A useful habit: as soon as a question says \"global\" and \"layer 7\" in the same breath, Front Door is the default hypothesis and you are checking whether anything disqualifies it."
      },
      {
        prompt: "You create a private endpoint for an Azure Storage account in a virtual network and disable public network access on the account. Azure VMs in the same virtual network can reach the storage account by name. On-premises servers connected over ExpressRoute private peering receive a public IP address when they resolve the storage account name and cannot connect. What should you configure?",
        options: [
          'A. A service endpoint for Microsoft.Storage on the on-premises gateway subnet',
          'B. A conditional forwarder on the on-premises DNS servers sending the privatelink zone queries to an Azure DNS Private Resolver inbound endpoint',
          'C. A public DNS A record for the storage account pointing to the private endpoint IP',
          'D. An additional private endpoint in the on-premises network'
        ],
        answer: 'B',
        explanation: "The symptom tells you exactly where the failure is: name resolution, not connectivity. Azure VMs work because the VNet is linked to the privatelink private DNS zone and the platform resolver returns the private IP. On-premises servers use their own DNS, which knows nothing about that zone, so they get the storage account's public CNAME chain and a public IP that is now unreachable. The fix is to get on-premises queries into Azure DNS — a conditional forwarder for the privatelink zone pointing at an Azure DNS Private Resolver inbound endpoint (or a DNS forwarder VM in the VNet) does exactly that. A is the wrong technology entirely and service endpoints have no on-premises story. C would technically resolve but publishing a private RFC 1918 address in public DNS is a documented anti-pattern, leaks internal topology and breaks for anyone off the network. D is not a thing — private endpoints are Azure resources inside an Azure subnet and cannot be created on-premises. Whenever a Private Link question describes connectivity working from Azure and failing from on-premises, the answer is almost always DNS forwarding."
      }
    ],
    note: "Samples are written by our editors to illustrate the published AZ-700 skills outline (skills measured as of 27 July 2026). They are not real exam items, are not drawn from any question bank, and no live Microsoft exam content is reproduced anywhere on this page. Microsoft's free exam sandbox at aka.ms/examdemo is the authoritative place to rehearse the interface."
  },

  // P0-8  Exam-day guide
  examDay: {
    summary: "AZ-700 is delivered by Pearson VUE at a test centre or online through OnVUE, and for this exam specifically we would steer most candidates to a test centre. The reason is the whiteboard. More than any other exam in the Azure family, AZ-700 asks you to hold a network topology in your head — a hub, two spokes, a gateway, a firewall, a route table, an on-premises site — and trace a packet through it. Being able to sketch that in ten seconds is a material advantage, and a test centre provides an erasable whiteboard or laminated sheet and a marker as standard. Under OnVUE you get nothing to write on unless a physical whiteboard has been explicitly approved on your booking, and the room scan means nothing else can be within reach. Check what your booking permits rather than assuming; the rules have tightened over the years. Plan around seat time, not exam time. Microsoft's certification page states you have 100 minutes to complete the assessment, and the published seat time for associate role-based exams without labs is 120 minutes covering check-in, the NDA, instructions, the exam and the survey; a form that may contain a lab carries 120 minutes of exam time and 140 of seat time instead, and you learn which you have when the exam launches. Arrive or start OnVUE check-in thirty minutes early — check-in alone can take twenty minutes at a busy hour and a late arrival forfeits the USD $165.",
    bring: [
      'Government-issued photo ID whose name matches your Microsoft Learn certification profile exactly, including middle initials',
      'A second form of ID at a test centre if your primary is not a passport or driving licence — check the requirement in your Pearson VUE confirmation',
      'Your Pearson VUE confirmation and exam registration number',
      'At a test centre: nothing else. Everything goes into a locker and the whiteboard is waiting at the workstation',
      'For OnVUE: the phone you booked with, for the check-in photo upload, which then goes out of reach',
      'For OnVUE: a physical whiteboard and erasable marker only if explicitly permitted on your booking'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker at a test centre, out of the room entirely for OnVUE',
      'All personal paper, notebooks, printed topology diagrams and sticky notes; nothing handwritten may be visible in an OnVUE room',
      'Second monitors — OnVUE requires a single display, and an unplugged monitor still on the desk is not acceptable',
      'Bags, coats, hats and non-religious headwear',
      'Food and drink unless covered by an approved accommodation',
      'Anyone else — an OnVUE proctor will end the session if another person is seen or heard'
    ],
    timeline: [
      { time: '2-3 days before', detail: 'If testing online, run the OnVUE system test on the exact machine, network and room you will use. Corporate laptops with endpoint-security agents are the most common launch failure.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin OnVUE check-in. Check-in is not the exam start and lateness can forfeit the booking.' },
      { time: 'Check-in', detail: 'ID verification and photograph; OnVUE adds a 360-degree room scan of the desk, underneath it and the walls. Test centres add a locker, a pocket check and sometimes a palm-vein scan.' },
      { time: 'First 5 minutes', detail: 'NDA and instructions — inside seat time, outside exam time. The launch screen tells you your duration and therefore whether a lab may be present.' },
      { time: 'First 2 minutes of the exam', detail: 'Note the question count against the clock and set a pace. At 100 minutes the margin is thinner than on most Azure exams, so decide your per-question budget explicitly.' },
      { time: 'On any topology question', detail: 'Sketch it before reading the options. Ten seconds of drawing routinely saves a minute of re-reading, and the wrong answers are usually designed to be plausible if you are holding the topology loosely.' },
      { time: 'Throughout', detail: 'Mark for review anything over 90 seconds and move. Do not take an unscheduled break through the exam interface — it ends access to every question already seen.' },
      { time: 'Final 10 minutes', detail: 'Clear marked items and confirm nothing is blank. There is no guessing penalty.' },
      { time: 'On submission', detail: 'A short survey, then a preliminary pass or fail on screen within a few minutes.' }
    ],
    rules: [
      'The pass mark is 700 on a 1-1,000 scale and it is scaled — it does not correspond to 70% of the questions.',
      'No penalty for incorrect answers, so never leave an item unanswered.',
      'Exam time is 100 minutes unless your form may contain a lab, in which case it is 120.',
      'The Microsoft Learn panel is available because AZ-700 is associate role-based. It covers learn.microsoft.com but excludes Q&A, practice assessments and your signed-in profile, blocks other domains, and grants no extra time — useful for SKU tables, useless for topology reasoning.',
      'Ctrl+F (Command+F on Mac) searches only within the Learn panel page you are viewing; closing the panel resets search history.',
      'You cannot return to a case study or a completed section once you have moved past it.',
      'An unscheduled break taken through the exam interface ends access to all previously seen questions.',
      'No personal scratch paper. Test centres provide and collect an erasable whiteboard or laminated sheet; OnVUE candidates get nothing to write on unless a physical whiteboard was explicitly approved on the booking.',
      'AZ-700 is offered in English, German, Spanish, French, Italian, Japanese, Korean, Brazilian Portuguese, Simplified Chinese and Traditional Chinese. If your preferred language is unavailable you may request an additional 30 minutes when booking.',
      'Accommodations for assistive devices or extra time must be requested and approved by Microsoft before scheduling.'
    ],
    afterwards: "A preliminary pass or fail appears on screen within minutes of submitting, and the official result posts to your Microsoft Learn certification profile, usually within a few hours. The score report gives one overall number against the 700 threshold plus a bar chart of relative performance across the five skill areas, and Microsoft states explicitly that the bars cannot be summed or read as percentages because the areas contain different numbers of questions. Expect the chart to look flatter than on broader exams — because every domain on AZ-700 is networking, weakness tends to be distributed rather than concentrated, and a genuinely low bar in one area usually signals a specific gap such as ExpressRoute or private DNS rather than a general one. If you passed, the Azure Network Engineer Associate certification appears in your dashboard with a 12-month validity and a free unproctored renewal assessment window that opens six months before expiry; set the reminder at ten months. If you failed, the retake ladder applies: 24 hours before a second attempt, 14 days between every attempt after that, five attempts maximum in the 12 months from your first sitting, and USD $165 charged each time. Use the five-area chart to aim the retake — on this exam a single weak area is usually one identifiable topic, and two focused weeks beats a full restudy."
  }
};

export default data;
