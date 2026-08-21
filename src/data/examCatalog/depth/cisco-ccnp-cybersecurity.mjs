// Depth content for: cisco-ccnp-cybersecurity
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This guide is compiled and maintained by our IT-certifications desk. Vendor exams in this space are revised and retired frequently, so we track the objectives document by its published revision date and state plainly when an exam is being retired and what replaces it — the single most common way candidates waste money here is studying a superseded blueprint. Fees, scoring, retake rules and renewal terms come from the vendor’s own certification pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Objectives, exam codes, fees and retirement dates were taken from the vendor’s current certification pages and checked for the revision date shown there.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$124,910 median for information security analysts (BLS, May 2024); $168,159 self-reported average for CCNP Security holders',
    summary:
      'CCNP Security is the point on the Cisco ladder where the credential stops being a hiring filter and starts being a pricing signal. The occupation that fits is Information Security Analysts, where BLS reports a May 2024 median of $124,910 and a top decile above $186,420 — and unlike an associate-level candidate, a professional-level holder with real Firepower or ISE deployment experience is competing in the upper half of that distribution rather than the bottom decile. The comparison that makes the case is the rung below. Network and computer systems administrators, the job family most CCNP Security candidates are leaving, had a May 2024 median of $96,800 and a projected 4 percent employment decline through 2034. Information security analysts, by contrast, are projected to grow 29 percent over the same decade. Moving from network administration into security engineering is therefore both a pay move and a hedge against an occupation that BLS expects to shrink. Self-reported survey data reinforces this: Skillsoft\'s IT Skills and Salary Report has consistently ranked CCNP Security among its top-paying certifications, with a US average around $168,159. That figure deserves a clear health warning — it is self-reported by respondents who chose to complete a training vendor\'s survey, it does not control for years of experience, seniority or region, and holders of a professional-level security certification skew senior by definition. Treat it as evidence that the credential travels with well-paid roles, not as evidence that passing two exams produces a $168,000 offer. The BLS distribution is the more defensible planning number.',
    rows: [
      { label: 'Median annual wage, information security analysts', value: '$124,910', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $186,420', note: 'BLS OOH Pay tab, May 2024 — the band experienced CCNP Security engineers compete in' },
      { label: 'Lowest 10 percent', value: 'less than $69,660', note: 'BLS OOH Pay tab, May 2024 — included for honesty; not where a professional-level holder should land' },
      { label: 'Baseline being left behind: network and computer systems administrators (median)', value: '$96,800', note: 'BLS OOH, May 2024 — the occupation most CCNP Security candidates transition out of' },
      { label: 'CCNP Security average (self-reported)', value: '$168,159', note: 'Skillsoft IT Skills and Salary Report, US self-reported average; uncontrolled for experience or region. Checked 2026-08.' }
    ],
    growth: '29% projected growth 2024-34 for information security analysts, against a 4% projected decline for network and computer systems administrators',
    source: {
      label: 'BLS Occupational Outlook Handbook — Information Security Analysts',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'No pass rate is published for 350-701 or for any concentration exam',
    summary:
      'Cisco publishes neither pass rates nor cut scores at professional level, and the reason is more interesting here than at entry level: CCNP Security is not one exam but two, so even if a per-exam rate existed it would not tell you the number that actually matters, which is the proportion of candidates who complete both papers. Anecdotally the attrition is on the second exam rather than the first — people pass SCOR, feel finished, and let the clock run. That clock is the rule worth knowing: Cisco gives you three years from passing your first exam to pass the second, and if you miss that window the first result expires and you sit it again. Cisco\'s published scoring position is simply that grading is pass/fail and results are available online within 48 hours, on both the 120-minute SCOR core and the 90-minute concentration exams. Scores are scaled against the live item pool and the cut point is set by standard-setting, not fixed at a percentage, which is precisely why no percentage is published. The retake policy is documented and unforgiving in cost terms: fail a professional-level exam and you wait five calendar days from the day after the attempt, then pay the full fee again — $400 for SCOR, $300 for a concentration. A single failed SCOR attempt therefore takes the cost of the credential from $700 to $1,100 before any training. Budget for that possibility rather than assuming a favourable rate you cannot verify.',
    source: {
      label: 'Cisco Exam, Testing, and Certification Policies (retake, scoring and recertification)',
      url: 'https://cisco.com/go/exampolicy'
    },
    caveat:
      'Cisco does not release pass-rate statistics for 350-701 or for any of the concentration exams, and no independent body audits them. We have deliberately left the pass-rate table empty. Where third-party sites quote a figure for "the SCOR pass rate", it is inferred from self-selected forum polls at best.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'CCNP Security is two exams, and the biggest planning error is treating it as one long study block. The core, 350-701 SCOR, is 120 minutes and covers six areas at implementation depth across a genuinely wide product surface: security concepts, network security, cloud security, content security, endpoint protection and detection, and secure network access with visibility and enforcement. The concentration is a separate 90-minute exam on one product family, and your choice of concentration completely changes the second half of your preparation — 300-710 SNCF is Firepower and FMC policy work, 300-715 SISE is identity, posture and TrustSec, 300-730 SVPN is IPsec and remote access tunnelling, 300-740 SCAZT is secure cloud access and zero trust. There is a timing decision to make right now. SCOR v1.1 is testable through 26 August 2026, with v2.0 going live on 27 August 2026, and 300-720 SESA and 300-725 SWSA both retire on 26 August 2026. If you are more than a few weeks from ready, study v2.0 and do not pick a retiring concentration. The plan below assumes 200-260 hours across roughly eighteen weeks with lab access, split into a SCOR block and a concentration block.',
    totalHours: '200-260 hours across both exams',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'SCOR — security concepts and the threat surface',
        tasks: [
          'Read the current 350-701 exam topics document from Cisco and confirm which version you are sitting before buying anything',
          'Common attack vectors at implementation depth: on-path, DoS/DDoS, injection, DNS-layer attacks, endpoint compromise chains',
          'Cryptography for engineers, not for definitions: PKI, certificate chains, TLS inspection trade-offs, IPsec transform sets',
          'API security and the Cisco security API surface — this is a genuine SCOR topic candidates routinely skip'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 3-5',
        focus: 'SCOR — network security and firewalls',
        tasks: [
          'Build a Firepower Management Center lab in a DevNet Sandbox or dCloud session and deploy an access control policy end to end',
          'Understand the FTD policy hierarchy: prefilter, access control, intrusion, malware and file, and the order they evaluate in',
          'ASA versus FTD: where each still fits, and what a migration actually changes',
          'Site-to-site and remote-access VPN as SCOR covers them, at concept-plus-configuration depth'
        ],
        hours: '13-15 hrs/week'
      },
      {
        label: 'Weeks 6-7',
        focus: 'SCOR — cloud security and content security',
        tasks: [
          'The shared responsibility model applied to IaaS, PaaS and SaaS, and what changes in each',
          'Cisco Umbrella DNS-layer enforcement, roaming clients, and where it sits relative to a web proxy',
          'Email and web security controls: SPF, DKIM, DMARC, URL filtering, TLS inspection placement',
          'Cloud workload protection and the visibility problem in ephemeral infrastructure'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 8-9',
        focus: 'SCOR — endpoint protection, plus secure access, visibility and enforcement',
        tasks: [
          'Cisco Secure Endpoint concepts: retrospective detection, file trajectory, outbreak control',
          'Deploy ISE in a sandbox and configure 802.1X, MAB and a posture policy',
          'TrustSec and SGT-based segmentation versus VLAN-based segmentation',
          'NetFlow, Stealthwatch-style flow analytics, and where telemetry gaps appear'
        ],
        hours: '13-15 hrs/week'
      },
      {
        label: 'Week 10',
        focus: 'SCOR — timed drilling and sit the exam',
        tasks: [
          'Three full 120-minute timed practice exams under forward-only conditions',
          'Re-lab anything you got wrong rather than re-reading it',
          'Book and sit 350-701',
          'Note your concentration choice deadline: you now have three years to finish, but plan for three months'
        ],
        hours: '14-16 hrs'
      },
      {
        label: 'Weeks 11-13',
        focus: 'Concentration block — product depth, chosen exam',
        tasks: [
          'Build the specific lab for your chosen concentration and use it daily, not weekly',
          'For 300-710: FMC policy design, NAT, routing on FTD, high availability, troubleshooting deploy failures',
          'For 300-715: policy sets, authorisation profiles, posture, TrustSec, guest and BYOD flows',
          'For 300-730: IKEv2, DMVPN, FlexVPN, remote access with AnyConnect/Secure Client, and troubleshooting phase 1 versus phase 2'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 14-16',
        focus: 'Concentration — troubleshooting depth',
        tasks: [
          'Deliberately break your lab and fix it: bad certificate, mismatched proposal, policy not deploying, authorisation matching the wrong rule',
          'Learn the diagnostic commands for the product cold; concentration exams reward knowing where to look',
          'Work through the official cert guide for your concentration and lab every configuration example',
          'Cross-check the exam topics document objective by objective and mark anything you have not physically done'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 17-18',
        focus: 'Concentration — timed drilling and sit the exam',
        tasks: [
          'Timed 90-minute practice runs — the concentration clock is tighter per item than SCOR',
          'Final pass over troubleshooting scenarios, which is where concentration papers concentrate their difficulty',
          'Book and sit the concentration exam',
          'On passing, record your recertification date: three years, 80 CE credits or a qualifying exam'
        ],
        hours: '12-14 hrs'
      }
    ],
    variants: [
      { label: 'Already working on Cisco security products daily', detail: 'Twelve weeks is achievable. Your concentration block collapses to three or four weeks because you already have the product depth; keep the full SCOR block intact, because SCOR punishes specialists — the engineer who lives in Firepower all day tends to lose points on cloud, content and endpoint.' },
      { label: 'Strong networking background but no security products', detail: 'Twenty-two to twenty-four weeks. Add four weeks before Week 1 on security fundamentals, and do not economise on lab time. Reading about ISE authorisation policy is close to worthless; the objectives are written in implementation verbs.' },
      { label: 'Cannot get lab access at work', detail: 'Use Cisco DevNet Sandbox and dCloud, which offer reservable FTD, FMC and ISE environments at no cost with a Cisco account. This is the single biggest cost lever available. Add two weeks to the schedule to account for reservation windows and the fact that a shared sandbox resets.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'At professional level the exam stops asking what a technology is and starts asking which one you would deploy and how you would configure it. That shift is what catches out candidates who passed CCNA on reading alone. Two structural features of CCNP Security should drive your whole strategy: SCOR is broad across products you may never have touched, and the concentration is narrow but deep on one you had better have touched.',
    items: [
      {
        title: 'Check which SCOR version you are sitting before you buy a single book',
        detail: 'SCOR v1.1 is testable through 26 August 2026 and v2.0 goes live on 27 August 2026. If your exam date falls after that boundary, a v1.1-aligned cert guide and question bank will have you studying a retired blueprint. Download the current exam topics PDF from Cisco, check the version number on the cover, and match your resources to it. This is a five-minute check that regularly saves people a wasted $400.'
      },
      {
        title: 'Choose your concentration for your job, then check it is not retiring',
        detail: 'The concentration you pick changes months of preparation and the value of the credential to your employer. 300-720 SESA and 300-725 SWSA both retire on 26 August 2026, so starting either now is a bad bet. If you run firewalls, take 300-710 SNCF. If you own identity and network access control, take 300-715 SISE. If you build tunnels, take 300-730 SVPN. If your organisation is moving to zero trust and secure cloud access, look at 300-740 SCAZT. Always confirm the current concentration list on Cisco\'s CCNP Security exams page before booking, because it changes.'
      },
      {
        title: 'Lab everything, on free infrastructure if necessary',
        detail: 'Cisco DevNet Sandbox and dCloud provide reservable FTD, FMC and ISE environments free with a Cisco account, which removes the historical excuse that CCNP Security requires expensive kit. Note that Cisco Modeling Labs is excellent for routing and switching topologies but does not ship the security product images, so it is not a substitute here. Deploy a policy, break it, read the deploy error, fix it. Exam items describe symptoms, and symptoms only mean something to someone who has caused them.'
      },
      {
        title: 'Treat SCOR breadth as the real threat, not depth',
        detail: 'Most candidates come from one product silo and quietly under-study the other five areas. Score yourself honestly against all six SCOR areas at the start and put your first month into your two weakest. Firewall engineers typically bleed points on endpoint and cloud; identity engineers bleed on content security. The exam does not care that your day job is narrow.'
      },
      {
        title: 'Learn the product decision boundaries, not the feature lists',
        detail: 'SCOR items repeatedly present a requirement and ask which Cisco control meets it. The discriminating knowledge is where each product stops: Umbrella enforces at DNS and works off-network without a VPN, a secure web appliance inspects HTTP payload but needs traffic steered to it, ISE decides who gets on and in what state, Secure Endpoint sees what happened on the host after the fact. Write those boundary statements out in your own words and you will answer a whole class of questions correctly.'
      },
      {
        title: 'Book the second exam before you feel ready for it',
        detail: 'Cisco gives you three years from your first pass to complete the second exam, and the most common way to fail CCNP Security is to never sit the concentration. Momentum is the asset. Put a date in the calendar within a fortnight of passing SCOR, even if you move it once — an unbooked exam expands to fill the available three years.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'This is the most expensive credential of the four on this site before you spend a penny on training: $400 for SCOR plus $300 for a concentration is $700 in vouchers alone. The good news is that the single most valuable resource — real product access — is available free through Cisco\'s own sandbox programmes, so the sensible budget puts money into question banks and cert guides and nothing into hardware.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: '350-701 SCOR exam voucher', values: ['$400 USD, or Cisco Learning Credits', 'Pearson VUE, 120 minutes', 'Required core exam'] },
      { label: 'Concentration exam voucher (e.g. 300-710 SNCF)', values: ['$300 USD, or Cisco Learning Credits', 'Pearson VUE, 90 minutes', 'Required second exam'] },
      { label: 'CCNP Security SCOR 350-701 Official Cert Guide (Cisco Press)', values: ['~$70-80 list', 'Print + eBook with practice engine', 'Ordered coverage of all six SCOR areas'] },
      { label: 'Concentration Official Cert Guide (Cisco Press, per exam)', values: ['~$60-70 list', 'Print + eBook', 'Product depth for your chosen second exam'] },
      { label: 'Boson ExSim-Max for Cisco 350-701', values: ['$99 per exam title', 'Practice-exam engine', 'Explanation quality and readiness signalling'] },
      { label: 'Cisco DevNet Sandbox and dCloud', values: ['Free with a Cisco account', 'Reservable hosted labs (FTD, FMC, ISE)', 'The highest-value resource on this list — real product access'] },
      { label: 'Cisco U.', values: ['Free tier; paid subscriptions extra', 'Video, labs, practice assessments', 'Cisco-authored coverage aligned to the current blueprint version'] },
      { label: 'INE security learning paths', values: ['Annual subscription — check current tier pricing', 'Video plus hands-on labs', 'Candidates who want structured lab progressions rather than a book'] },
      { label: 'Cisco Modeling Labs — Personal', values: ['~$199/year list', 'Local topology simulator', 'Routing and switching underlay only — it does not include the security product images'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax; Cisco exam fees vary by country and Learning Credit rates differ, and subscription tiers change frequently — confirm at the vendor before buying. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The mistakes here cost more than on any other exam on this site, because a wrong turn is a $300-400 voucher plus a month. Three of the six below are timing errors rather than knowledge errors.',
    items: [
      {
        mistake: 'Confusing CCNP Security with the newly renamed CCNP Cybersecurity',
        fix: 'As of February 2026 Cisco renamed CyberOps Professional to CCNP Cybersecurity, built on 350-201 CBRCOR plus a concentration. That is a detection-and-response certification for SOC engineers. CCNP Security is a different track built on 350-701 SCOR plus a security concentration, and it is about implementing and operating security infrastructure. The names are now one word apart and the exam numbers are not. Confirm the exam code on your voucher before you pay.'
      },
      {
        mistake: 'Studying a SCOR version you will not sit',
        fix: 'SCOR v1.1 can be taken through 26 August 2026; v2.0 is live from 27 August 2026. Work out your realistic exam date first, then buy resources matched to that version. Candidates who bought a v1.1 cert guide in the spring and drifted their exam date into the autumn end up covering a blueprint that no longer exists.'
      },
      {
        mistake: 'Choosing a concentration that is about to retire',
        fix: '300-720 SESA and 300-725 SWSA both retire on 26 August 2026. Starting a three-month study block on either is throwing the block away. Before committing, open the CCNP Security exams and training page on cisco.com and read the current concentration list and any posted retirement notices. This changes more often than any other fact on this page.'
      },
      {
        mistake: 'Passing SCOR and stalling on the concentration',
        fix: 'This is the single most common way people fail to earn CCNP Security. Your first pass is valid for three years and then expires, and life fills three years easily. Book the concentration within two weeks of passing SCOR, choose the product you already work with so the block is short, and treat the second exam as the finish line rather than a bonus.'
      },
      {
        mistake: 'Assuming CCNA is a prerequisite',
        fix: 'It is not. Cisco removed prerequisites from the professional level when it restructured the programme, so you may book 350-701 as your first Cisco exam. Whether you should is a different question — SCOR assumes you can reason about routing, NAT and TLS without help — but do not spend $300 on an associate exam you do not need because a forum post told you it was mandatory.'
      },
      {
        mistake: 'Preparing entirely from video and cert guides with no lab',
        fix: 'Professional-level objectives are written in implementation and troubleshooting verbs, and the exam presents symptoms. Someone who has never watched an FMC deploy fail, or an ISE authorisation rule match earlier than intended, cannot reason about the symptom. Free DevNet Sandbox and dCloud access removes the cost barrier entirely, so the only reason to skip labs is time — and it is the wrong place to save it.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'Two papers with different shapes. SCOR is 120 minutes, delivered in English and Japanese, and tests breadth across six areas — expect a lot of "here is a requirement, which control and which configuration" items and comparatively fewer deep troubleshooting scenarios. The concentration exam is 90 minutes on one product family and inverts that balance: fewer product-selection questions, far more configuration detail and symptom-to-cause troubleshooting. Both are graded pass/fail with results available online within 48 hours, and both present items one at a time with no backward navigation, which matters more at 90 minutes than at 120. Item formats across both include single-answer multiple choice, multiple response with a stated count, drag-and-drop matching and ordering, and exhibit-based items where a topology, policy table or CLI output is shown. Cisco professional exams may also include simulation-style items on some tracks; do not assume their absence, and make sure you can navigate a real FMC or ISE interface rather than only recognising screenshots.',
    types: [
      { name: 'Single-answer multiple choice', share: 'Bulk of both papers', detail: 'Requirement-to-control items on SCOR, configuration-detail items on the concentration. Distractors are real Cisco products or real commands that solve an adjacent problem, so the discrimination is about scope and placement.' },
      { name: 'Multiple response', share: 'A minority of items', detail: 'The stem states the count and scoring is all-or-nothing. Frequent on design-requirement and prerequisite-checklist objectives.' },
      { name: 'Drag and drop / matching and ordering', share: 'A minority of items', detail: 'Match features to products, place policy evaluation stages in order, or map protocol exchanges to phases. The FTD policy evaluation order and IKEv2 exchange sequence are classic targets.' },
      { name: 'Exhibit-based configuration and troubleshooting', share: 'Heavier on the concentration paper', detail: 'A policy table, topology or CLI excerpt is shown and you identify the fault or the next configuration step. These are time sinks; the 90-minute concentration clock is where candidates most often run out of road.' }
    ],
    samples: [
      {
        prompt: 'A company issues laptops that spend most of their time off the corporate network and are not required to keep a VPN tunnel up. Security needs to block connections to known malicious domains regardless of where the laptop is, without backhauling traffic. Which Cisco control meets the requirement?',
        options: [
          'A. Cisco Secure Web Appliance in explicit proxy mode, with a PAC file pushed to the endpoints',
          'B. Cisco Umbrella with the roaming security module installed on the endpoints',
          'C. An access control policy on the perimeter Cisco Secure Firewall with URL filtering enabled',
          'D. Cisco Secure Email Gateway with URL rewriting and outbreak filters'
        ],
        answer: 'B',
        explanation: 'Umbrella enforces at the DNS layer and the roaming module keeps that enforcement with the endpoint wherever it connects, with no tunnel and no backhaul, which is exactly the stated constraint. A is the strongest distractor because a secure web appliance genuinely does block malicious sites — but traffic has to reach it, and a PAC file on a laptop in a coffee shop either forces a backhaul or is trivially bypassed. C only inspects traffic that traverses the perimeter, and the requirement explicitly describes devices that mostly do not. D protects the email vector only and does nothing for a user typing a URL.'
      },
      {
        prompt: 'An engineer must ensure that corporate laptops connecting through 802.1X are checked for an up-to-date antimalware agent before they are granted full network access, and are placed in a remediation VLAN if the check fails. Which Cisco Identity Services Engine capability provides this?',
        options: [
          'A. Profiling, because it identifies the device type and applies a matching authorisation profile',
          'B. Posture assessment, because it evaluates endpoint compliance and drives a conditional authorisation result',
          'C. MAC Authentication Bypass, because it authenticates endpoints that cannot run a supplicant',
          'D. TrustSec, because it applies a Security Group Tag that governs downstream enforcement'
        ],
        answer: 'B',
        explanation: 'Posture assessment is the ISE function that inspects the state of a connecting endpoint — patch level, antimalware presence and currency, registry or file conditions — and returns compliant, non-compliant or unknown, which authorisation policy then acts on by granting access or redirecting to remediation. A is the classic confusion: profiling answers "what kind of device is this?" using DHCP, HTTP and other attributes, not "is this device healthy?". C is an authentication method for devices with no supplicant such as printers, and performs no health check. D is a segmentation and enforcement mechanism applied after an authorisation decision; it does not evaluate endpoint compliance.'
      },
      {
        prompt: 'Three days after a file was allowed onto several endpoints, threat intelligence reclassifies its hash as malicious. The security team needs to identify every host that received the file and when. Which Cisco Secure Endpoint capability provides this?',
        options: [
          'A. Signature-based scanning, because a definition update will find the file on the next scheduled scan',
          'B. Application allow-listing, because only approved executables can run',
          'C. Retrospective detection with file trajectory, because the disposition change is applied to historical telemetry',
          'D. Host-based firewall logging, because outbound connections from the file would be recorded'
        ],
        answer: 'C',
        explanation: 'Retrospective security is precisely the capability for this scenario: the platform continuously records file activity, so when a disposition changes from clean to malicious it can retroactively apply the new verdict and show file trajectory — which hosts saw the file, when it arrived, and what it did. A is the tempting answer because updating definitions is the traditional response, but a scheduled scan only tells you where the file is now, not where it went three days ago or what it executed. B would have prevented execution if it had been in place, but it answers nothing retrospectively. D captures network connections without linking them to a specific file hash across the estate.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'You will do this twice, and the two days are not the same. SCOR is 120 minutes across six product areas, delivered in English or Japanese through Pearson VUE at a test centre or via OnVUE. The concentration is 90 minutes on one product family, and the shorter clock combined with exhibit-heavy troubleshooting items makes pacing the dominant risk — engineers who found SCOR comfortable are frequently the ones who run out of time on 300-710 or 300-715 because they read a policy table three times. Neither paper has a scheduled break and the timer does not stop, so plan fluids accordingly. The one habit worth building before either sitting is forward-only discipline: Cisco presents items one at a time and does not let you return, so the correct behaviour on an exhibit item you cannot resolve in ninety seconds is to make the best-supported choice and move. Practise that, because every commercial practice engine trains the opposite instinct. Book both exams for a time of day when you are genuinely alert, and if you are testing online, run the OnVUE system test on the same machine and network beforehand rather than assuming last time\'s setup still passes.',
    bring: [
      'A valid, unexpired government-issued photo ID with signature, name matching your Cisco registration exactly',
      'A second form of ID with your name and signature',
      'Your Cisco ID and Pearson VUE username',
      'For OnVUE: a phone for check-in photos, a cleared desk, and a private room you can close',
      'For OnVUE: a webcam and connection you have system-tested on that exact machine'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds',
      'All notes and printouts — including the topology diagrams you have been drawing for weeks',
      'Your own paper and pens; centres issue an erasable noteboard and OnVUE provides a digital whiteboard only',
      'Bags, coats, hats and food',
      'Second monitors, which must be unplugged and turned away for an OnVUE session'
    ],
    timeline: [
      { time: '24-48 hours before', detail: 'Stop labbing. Do one light pass over your own notes on the areas you scored worst in, and confirm the exam version and start time on your Pearson VUE booking.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin OnVUE check-in, which takes around 15 minutes for face, ID and full room photographs.' },
      { time: 'Check-in', detail: 'ID verification, digital signature, biometric capture, lockers. You are seated and issued an erasable noteboard.' },
      { time: 'First 3 minutes at the seat', detail: 'Write down the sequences you do not want to reconstruct under pressure: FTD policy evaluation order, IKEv2 phase exchanges, the ISE authentication-to-authorisation flow, and your product boundary statements.' },
      { time: 'SCOR, 0-120 minutes', detail: 'Six areas, broad coverage. Bank time on the concept and product-selection items so you can afford the exhibits. Check your position against the clock every fifteen minutes.' },
      { time: 'Concentration, 0-90 minutes', detail: 'Tighter. Exhibit-based troubleshooting items dominate the second half. Set a hard personal limit of about two minutes on any single exhibit; there is no review pass to save you.' },
      { time: 'Immediately after', detail: 'Surrender the noteboard and leave. You accepted an NDA on screen; do not discuss items with colleagues, however tempting after a professional-level paper.' }
    ],
    rules: [
      'No backward navigation on either paper — items are presented one at a time and cannot be revisited.',
      'Grading is pass/fail and Cisco states results are available online within 48 hours; cut scores are not published.',
      'SCOR is 120 minutes; concentration exams are 90 minutes. Both are offered in English and Japanese.',
      'No scheduled breaks, and the clock continues if you leave the room.',
      'Erasable noteboard only at a test centre; digital whiteboard only for OnVUE, with no physical writing materials permitted.',
      'Fail either exam and you wait five calendar days from the day after the attempt, then pay the full fee again — $400 for SCOR, $300 for a concentration.',
      'Your first pass is valid for three years; the second exam must be completed within that window or the first result expires.'
    ],
    afterwards:
      'Cisco grades both papers pass/fail with results available online within 48 hours, so treat the walk out of the centre as the moment to capture your own impressions rather than waiting for a report that will not be granular. Check the Cisco Certification Tracking System for official status, and claim the Credly badge once posted. Passing SCOR alone earns you the Cisco Certified Specialist – Security Core certification, which is a genuine, listable credential in its own right and worth putting on your profile immediately rather than waiting for the full CCNP. Passing a concentration earns a second specialist certification; together they award CCNP Security, valid for three years. Renewal is 80 Continuing Education credits, a qualifying exam, or a combination, and note that both SCOR and the concentration exams can themselves be used toward recertifying other Cisco credentials. If you fail, the five-day wait begins the day after your attempt. Use it to lab the weakest area rather than re-reading the guide — at professional level the gap that failed you is almost always something you had read about but never configured, and the fastest correction is to spin up a DevNet Sandbox and build the thing that beat you.'
  }
};

export default data;
