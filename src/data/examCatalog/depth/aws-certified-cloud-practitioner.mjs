// Depth content for: aws-certified-cloud-practitioner
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This guide is compiled and maintained by our IT-certifications desk. Cloud exams are revised on a two-to-three-year cycle and the exam series code is the only reliable way to separate current material from stale material, so we track the AWS exam guide by its code — CLF-C02 here — and say plainly when a version is likely to be replaced. Fees, question counts, scoring, retake rules and recertification terms come from AWS’s own exam guide and certification policy pages rather than from training vendors. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies workers by job duties rather than by certificate — a point that matters more for a foundational credential than for any other exam we cover. Where a number is not published, and AWS publishes no pass rate, we say so rather than estimating one.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Question count, scored versus unscored items, duration, fee, scaled scoring range, passing score, the four domain weightings and the explicit out-of-scope job tasks were taken from the AWS Certified Cloud Practitioner (CLF-C02) exam guide and the AWS certification product page; retake, results and recertification terms from AWS Certification policy and recertification pages; wages from the BLS Occupational Outlook Handbook, May 2024 data.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$96,800 median for network and computer systems administrators, SOC 15-1244 — the destination, not what CLF-C02 pays on its own (BLS, May 2024)',
    summary:
      'This section needs a blunt opening, because the salary claims attached to this certification are the least reliable in the industry. There is no Bureau of Labor Statistics occupation called cloud practitioner, cloud engineer or cloud associate. BLS classifies workers by the duties they perform, not by the certificates they hold, and CLF-C02 is explicitly not a job-duty credential: the AWS exam guide states the target candidate has up to six months of exposure to AWS and lists coding, designing cloud architecture, troubleshooting, implementation, and load and performance testing as tasks the candidate is not expected to perform. A credential that excludes all of those is a literacy credential. It is genuinely useful — for a salesperson who needs to talk about the platform credibly, for a project manager scoping cloud work, for a finance analyst reading a bill, and as the first rung for a career changer — but it does not by itself create an entry-level cloud job, and any figure quoting an "average AWS Cloud Practitioner salary" is a job-board aggregate of people whose pay comes from what they do, not from the badge. The two occupational anchors worth knowing are the floor and the target. The floor for a technical career changer is Computer Support Specialists, SOC 15-1231 and 15-1232, with May 2024 medians of $73,340 for network support specialists and $60,340 for user support specialists across 882,300 jobs. The target, once you have real administration duties, is Network and Computer Systems Administrators, SOC 15-1244, at a $96,800 median with the top 10 percent above $150,320. Computer occupations overall had a $105,990 median, against $49,500 for all occupations — the gap that makes the ladder worth climbing. Treat CLF-C02 as the first rung and plan the next one before you sit it.',
    rows: [
      { label: 'Median annual wage, network and computer systems administrators (15-1244) — the realistic target role', value: '$96,800', note: 'BLS Occupational Outlook Handbook, May 2024 ($46.54/hr); top 10 percent above $150,320' },
      { label: 'Computer network support specialists (15-1231)', value: '$73,340 median', note: 'BLS OOH Pay tab, May 2024; lowest 10 percent under $46,010' },
      { label: 'Computer user support specialists (15-1232)', value: '$60,340 median', note: 'BLS OOH Pay tab, May 2024; lowest 10 percent under $38,780 — a common first job for career changers' },
      { label: 'Computer support specialists overall, employment 2024', value: '882,300 jobs', note: 'BLS OOH Quick Facts, 2024; overall median $61,550' },
      { label: 'Computer occupations as a group', value: '$105,990 median', note: 'BLS OOH, May 2024, against $49,500 for all occupations' },
      { label: 'Occupation matching "cloud practitioner"', value: 'None published', note: 'BLS publishes no SOC code for cloud practitioner, cloud engineer or cloud architect; wage claims for this certificate are job-board aggregates, not government data' }
    ],
    growth: '-3% projected change 2024-34 for computer support specialists (a decline of 24,200 jobs) with about 50,500 openings a year, all from replacement need; network and computer systems administrators are projected -4% with about 14,300 annual openings, so the openings exist but the growth is in the roles above these two',
    source: {
      label: 'BLS Occupational Outlook Handbook — Network and Computer Systems Administrators (15-1244); see also Computer Support Specialists (15-1231, 15-1232)',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'AWS publishes no pass rate — it publishes the cut score: 700 on a 100-1,000 scale, from 50 scored questions',
    summary:
      'AWS does not publish pass-rate statistics for CLF-C02 or for any other certification, and Pearson VUE does not publish them on AWS’s behalf. CLF-C02 attracts more "the pass rate is around X percent" claims than any other AWS exam, largely because it is the one most people take first, but none of those numbers is sourced and we will not add one. What is published is the scoring mechanism, which tells you more. The exam presents 65 questions, of which only 50 are scored; the other 15 are unscored pretest items that AWS is evaluating for future forms, and they are not identified. Results are reported as a scaled score from 100 to 1,000, and the passing standard for a Foundational-level exam is 700 — lower than the 720 required at Associate level and the 750 required for Professional and Specialty exams. That 700 is not 70 percent of items correct. AWS establishes the standard with a modified Angoff process in which subject-matter experts rate each item against a minimally qualified candidate, then equates every later form statistically so that a harder form needs fewer raw correct answers. Scoring is compensatory: you pass on the overall scaled score, and a weak domain can be offset by a strong one. Two published policies are worth planning around. Unanswered questions are scored as incorrect and there is no guessing penalty, so a blank is strictly worse than a guess. And if you fail, you must wait 14 calendar days before you are eligible to sit again; there is no cap on attempts, but the full $100 fee is payable every time. Once you pass, you cannot retake the same exam code for two years unless AWS publishes a new one.',
    source: {
      label: 'AWS Certification — After Testing policies (scoring, passing standard and retakes) and the CLF-C02 exam guide',
      url: 'https://aws.amazon.com/certification/policies/after-testing/'
    },
    caveat:
      'No pass rate is published by AWS or by Pearson VUE, so that figure is deliberately left blank here rather than estimated. The verifiable numbers are 65 questions (50 scored, 15 unscored), 90 minutes, a 100-1,000 scaled score, a 700 passing standard for Foundational-level exams, a 14-calendar-day retake wait and a $100 USD fee per attempt.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The current exam is CLF-C02, which replaced CLF-C01 in 2023. Check the code on anything you buy — CLF-C01 courses are still in circulation and were written to a different domain structure. The CLF-C02 blueprint has four domains: Cloud Concepts 24 percent, Security and Compliance 30 percent, Cloud Technology and Services 34 percent, and Billing, Pricing and Support 12 percent. Read those weights before you plan, because the two most common study mistakes both come from ignoring them. First, Security and Compliance is 30 percent — nearly a third of the exam — and it is not an afterthought bolted onto a services tour; the shared responsibility model alone justifies several days. Second, Cloud Technology and Services at 34 percent tempts people into depth they do not need, and this is where candidates waste weeks. The exam guide explicitly lists coding, designing cloud architecture, troubleshooting, implementation, and load and performance testing as out of scope for the target candidate, who is described as having up to six months of exposure to AWS. You need to know what roughly forty services are for in one sentence each and which problem each solves. You do not need to know how to build any of them. Four to five weeks at eight to twelve hours a week is realistic for someone with no cloud background; a working IT professional can compress this to two. Set up a free AWS account and a free AWS Skill Builder account in Week 1: the free tier of Skill Builder includes the Cloud Practitioner roles of AWS Cloud Quest and SimuLearn plus the Cloud Foundations Builder Labs, which is unusually generous and is aimed squarely at this exam.',
    totalHours: '40-55 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Domain 1 — Cloud Concepts (24%)',
        tasks: [
          'Read the CLF-C02 exam guide, including the out-of-scope job tasks — that list is what stops you over-studying',
          'The six advantages of cloud computing, and the difference between elasticity, scalability, high availability and fault tolerance, which the exam tests as a set of near-synonyms',
          'The AWS Well-Architected Framework pillars and the AWS Cloud Adoption Framework perspectives, by name',
          'Migration vocabulary: the common migration strategies, plus the cloud economics ideas — capex versus opex, economies of scale, total cost of ownership'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Week 2',
        focus: 'Domain 2 — Security and Compliance (30%)',
        tasks: [
          'The shared responsibility model until you can sort any task into AWS or customer instantly — this is the highest-yield topic on the exam',
          'IAM basics: root user protection and MFA, users, groups, roles, policies, and why least privilege is the expected answer',
          'Security services by purpose in one line each: GuardDuty, Inspector, Macie, Shield, WAF, Security Hub, KMS, Secrets Manager, Certificate Manager',
          'Governance and compliance: AWS Artifact, AWS Config, CloudTrail, AWS Organizations and service control policies'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Week 3',
        focus: 'Domain 3 — Cloud Technology and Services, part one (34%)',
        tasks: [
          'Global infrastructure: Regions, Availability Zones, edge locations and Local Zones, and what each means for latency and resilience',
          'Compute: EC2 and instance types at a conceptual level, Lambda, ECS and EKS, Fargate, Elastic Beanstalk, Auto Scaling',
          'Storage: S3 and its storage classes, EBS, EFS, S3 Glacier tiers, Storage Gateway, Snow Family',
          'Databases: RDS, Aurora, DynamoDB, Redshift, ElastiCache — relational versus non-relational versus warehouse versus cache'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Week 4',
        focus: 'Domain 3 part two plus Domain 4 — Billing, Pricing and Support (12%)',
        tasks: [
          'Networking and delivery: VPC, subnets, security groups, Route 53, CloudFront, Direct Connect, VPN — concepts only, no configuration',
          'Management and monitoring: CloudWatch versus CloudTrail versus Config versus Trusted Advisor versus the Health Dashboard, and how to tell them apart from a description',
          'Pricing: On-Demand, Spot, Reserved Instances, Savings Plans, the Free Tier, and consolidated billing under AWS Organizations',
          'Cost tooling and support: Cost Explorer, Budgets, the Cost and Usage Report, Pricing Calculator, plus the support plan tiers and what each adds — Basic, Developer, Business, Enterprise On-Ramp and Enterprise'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Week 5',
        focus: 'Practice, gaps and the service one-liners',
        tasks: [
          'Take the free AWS Certification Official Practice Question Set, then a full timed 90-minute practice exam',
          'Build a single-page table of every service you have met with a one-sentence purpose, and drill it until you can go from description to service name',
          'Re-drill the shared responsibility model and the support plan comparison — the two topics with the best marks-per-hour ratio on this exam',
          'Play the Cloud Practitioner role of AWS Cloud Quest on the Skill Builder free tier for the concrete grounding that pure reading does not give'
        ],
        hours: '9-11 hrs'
      }
    ],
    variants: [
      { label: 'No IT background at all', detail: 'Six to eight weeks at 7 hrs/week. Add a week before Week 1 on general computing vocabulary — servers, virtualisation, networks, databases — because CLF-C02 assumes those words mean something to you even though it assumes nothing about AWS. Use the Skill Builder free tier heavily; the Cloud Practitioner Cloud Quest role and Cloud Foundations labs make abstract services concrete faster than any book.' },
      { label: 'Working IT professional', detail: 'Two weeks. Domains 1 and 3 are largely translation from vocabulary you already have. Spend the time on Domain 4 instead — support plan tiers, pricing models and consolidated billing are commercial knowledge that technical experience does not give you, and they are the most common source of avoidable losses for experienced candidates.' },
      { label: 'Sales, finance, marketing or project management', detail: 'Five to six weeks. Domain 4 will feel natural and Domain 1 is mostly business framing. Domain 3 is the work: budget extra time to attach a concrete purpose to each service name, and resist the temptation to learn how they are configured, which is explicitly out of scope.' },
      { label: 'Planning to go straight on to an Associate exam', detail: 'Three weeks, then move immediately. If your real target is Solutions Architect - Associate, treat CLF-C02 as a four-week warm-up rather than a destination, and note that passing any Associate exam also renews Cloud Practitioner for three years — so the sequencing works in your favour.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The defining risk with CLF-C02 is not failing it — it is spending three months on a four-week exam. Because the AWS service catalogue is effectively bottomless, and because most available courses were built by instructors who also teach Associate-level material, it is very easy to drift into depth the exam guide explicitly rules out. Everything below is aimed at keeping the scope correct and the study time proportionate to a foundational credential, while making sure the 30 percent security domain and the 12 percent billing domain get the attention their weightings deserve rather than the attention they intuitively feel like they deserve.',
    items: [
      {
        title: 'Use the out-of-scope list as a stop sign',
        detail: 'The CLF-C02 exam guide states that coding, designing cloud architecture, troubleshooting, implementation, and load and performance testing are all out of scope for the target candidate. Print that list. Whenever a course starts walking you through building a VPC by hand or writing an IAM policy document, you have left the blueprint. Knowing that a security group controls instance-level traffic is in scope; configuring one is not.'
      },
      {
        title: 'Make the shared responsibility model your spine',
        detail: 'Security and Compliance is 30 percent of the scored content and the shared responsibility model underpins most of it. AWS is responsible for security of the cloud — hardware, the global infrastructure, the hypervisor, physical facilities. You are responsible for security in the cloud — guest operating systems, patching your instances, IAM configuration, security group rules, data encryption and classification. Drill it by sorting tasks into two columns until it is instant, because the exam asks the same question a dozen different ways.'
      },
      {
        title: 'Learn every service as a one-sentence purpose',
        detail: 'Cloud Technology and Services is 34 percent of the paper and it is breadth, not depth. Build a single-page table: service name, one sentence on what problem it solves, one sentence on what it is most often confused with. CloudWatch monitors metrics and logs; CloudTrail records API calls; Config records resource configuration and compliance; Trusted Advisor makes recommendations. Those four are confused constantly and are worth more than any deep dive.'
      },
      {
        title: 'Memorise the support plan tiers as a table',
        detail: 'Domain 4 is only 12 percent, but support plans are near-guaranteed marks and take an hour to learn. Know what Basic, Developer, Business, Enterprise On-Ramp and Enterprise each include, particularly where 24/7 phone and chat access to Cloud Support Engineers begins, where full Trusted Advisor checks appear, and which tiers include a Technical Account Manager. Exam questions usually ask for the least expensive plan meeting a requirement, so the boundaries between tiers matter more than the contents of any one tier.'
      },
      {
        title: 'Exploit the Skill Builder free tier before paying for anything',
        detail: 'A free AWS Skill Builder account includes the Exam Prep Review videos, Exam Prep Practice questions and flashcards, the Escape Room exam-prep experience, and — unusually — the full Cloud Practitioner roles of AWS Cloud Quest and SimuLearn plus Cloud Foundations Builder Labs. Those free entitlements are more generous at this level than at any other, precisely because AWS wants people to start here. A $29 monthly subscription adds the full Official Practice Exams, which is worth one month in the final fortnight, not four months from the start.'
      },
      {
        title: 'Answer every question, and cap your time per item',
        detail: 'Unanswered questions are scored as incorrect and there is no penalty for guessing, so leaving anything blank is a pure loss. With 65 questions in 90 minutes you have about 80 seconds each, which is comfortable for foundational content. Flag anything that runs past two minutes and come back — remember that 15 of the 65 items are unscored pretest questions you cannot identify, so the strange one you are agonising over may not count at all.'
      },
      {
        title: 'Decide your next exam before you sit this one',
        detail: 'CLF-C02 is worth most as a step, and the renewal rules reward treating it that way: passing any Associate-level exam renews Cloud Practitioner for three years automatically, as does any Professional-level exam. If Solutions Architect - Associate is your real target, book CLF-C02 as a confidence checkpoint and start the Associate material the week after, while the service vocabulary is fresh.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'CLF-C02 is the cheapest certification worth holding in the cloud market and it can be prepared for almost entirely free, which changes what a sensible spend looks like. The $100 exam fee is the only compulsory cost. AWS gives away a great deal at this level deliberately: a free AWS Skill Builder account includes the Exam Prep Review video series, Exam Prep Practice questions and flashcards, the exam-prep Escape Room, and the Cloud Practitioner roles of both AWS Cloud Quest and SimuLearn, plus the Cloud Foundations Builder Labs. That is a complete study path at zero cost, and it is written by the organisation that writes the exam. The single paid resource with a clear case is a good question bank, because CLF-C02 rewards breadth of recognition and the fastest way to find the forty services you cannot yet describe is to be asked about all of them. A Skill Builder subscription at $29 monthly unlocks the Official Practice Exams and Pretests; buying one month in your final fortnight is better value than an annual plan for an exam this size. Third-party video courses are competent and interchangeable, and during a Udemy sale they cost less than lunch — but check the exam code, because CLF-C01 material is still listed and predates the current four-domain structure. Avoid anything marketed as a brain dump; besides violating the AWS candidate agreement and risking your certification, dumps teach recognition of stale items rather than the service vocabulary the exam actually tests. Prices below were checked at review time in USD, before tax, and third-party prices move constantly.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Exam registration (CLF-C02)', values: ['$100 USD plus tax (AWS Foundational-tier price; also published in EUR, AUD, JPY, KRW, CNY and INR)', 'Pearson VUE test centre or online proctored', 'Required. Existing AWS certification holders have a 50% discount voucher in their account'] },
      { label: 'AWS Skill Builder — free account', values: ['Free', 'Exam Prep Review videos, Exam Prep Practice, flashcards, Escape Room, Official Practice Question Set', 'The complete free study path, written by AWS — start here before spending anything'] },
      { label: 'AWS Cloud Quest: Cloud Practitioner and AWS SimuLearn', values: ['Free on the Skill Builder free tier for the Cloud Practitioner roles', 'Game-based, hands-on 3D role-play in a live AWS environment', 'Beginners who need services to become concrete rather than staying as names on a slide'] },
      { label: 'AWS Skill Builder subscription', values: ['$29/month or $449/year', 'Adds Official Practice Exams and Pretests, full Builder Labs, Certification Maintenance', 'One month in the final fortnight for a calibrated readiness check'] },
      { label: 'Your own AWS account within the Free Tier', values: ['Free tier; set a billing alarm on day one', 'Live console', 'Making the billing dashboard, the Free Tier and the support plan pages real rather than theoretical'] },
      { label: 'Third-party video course (Stephane Maarek, Neal Davis, freeCodeCamp and similar)', values: ['~$15-25 on Udemy during a sale; some full courses are free on YouTube', 'Long-form video', 'A single structured spine if you prefer one voice — verify CLF-C02 on the listing, not CLF-C01'] },
      { label: 'Third-party practice exams (Tutorials Dojo, Maarek and similar)', values: ['~$15-25 on sale', 'Timed sets with per-option explanations', 'Finding the services you cannot describe; the explanations matter more than the score'] },
      { label: 'AWS service FAQ pages and the Well-Architected whitepaper', values: ['Free', 'Written reference', 'The primary source; the S3, EC2, RDS and IAM FAQ pages cover most of Domain 3 at exactly the right depth'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax. The $100 exam fee is AWS’s published Foundational-tier price and AWS notes it updates local-currency pricing at least annually to reflect exchange rates. Third-party prices move constantly and Udemy list prices are meaningless outside a sale — confirm at the source before buying. We do not rank by commission and take no affiliate payment for placement.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'Almost every CLF-C02 failure or wasted month traces back to a scope error in one direction or the other: studying at Associate depth for a foundational exam, or skipping the two domains that are not about technology at all. The exam is not hard. It is specific, and it is unforgiving about the difference between services that sound similar. The six below are what we see most.',
    items: [
      {
        mistake: 'Studying at Solutions Architect depth',
        fix: 'The exam guide says the target candidate has up to six months of AWS exposure and explicitly excludes coding, architecture design, troubleshooting, implementation, and load and performance testing. You need to say what a service is for, not how to configure it. If you find yourself learning route table syntax or IAM policy JSON, you have drifted into SAA-C03 territory. Print the out-of-scope list and use it as a boundary — this single correction saves most candidates a month.'
      },
      {
        mistake: 'Treating security as a small topic',
        fix: 'Security and Compliance is 30 percent of the scored content, second only to Cloud Technology and Services. Most of it hangs off the shared responsibility model, which the exam tests relentlessly and from every angle: patch the guest OS, that is yours; patch the hypervisor, that is AWS; configure the security group, yours; secure the data centre, AWS. Sorting tasks into two columns for an hour a day for a week is the highest-return activity available on this exam.'
      },
      {
        mistake: 'Skipping billing, pricing and support because it is only 12 percent',
        fix: 'Twelve percent is six scored questions, and they are among the easiest marks on the paper because the content is finite and factual. Learn the support plan tiers and their boundaries, the four purchase options and which workload each suits, consolidated billing under AWS Organizations, and the difference between Cost Explorer, Budgets, the Pricing Calculator and the Cost and Usage Report. Technical candidates skip this domain most often and lose the most to it.'
      },
      {
        mistake: 'Confusing the monitoring and governance services',
        fix: 'CloudWatch, CloudTrail, Config and Trusted Advisor are asked about constantly and are described in near-identical language by careless courses. CloudWatch collects metrics, logs and alarms about how resources are performing. CloudTrail records who called which API and when. Config records resource configuration over time and evaluates compliance rules. Trusted Advisor inspects your account and recommends improvements across cost, performance, security, fault tolerance and service limits. Learn them as a contrast set, never individually.'
      },
      {
        mistake: 'Buying a CLF-C01 course',
        fix: 'CLF-C02 replaced CLF-C01 in 2023 and restructured the blueprint into four domains weighted 24/30/34/12. CLF-C01 courses, books and question banks are still listed on the major platforms and still rank in search results. Check the exam code on the listing before you buy — not the publication year, the code — and if a course will not say which code it targets, that is your answer.'
      },
      {
        mistake: 'Expecting the certificate to produce a job offer by itself',
        fix: 'CLF-C02 is a foundational literacy credential and BLS publishes no occupation that corresponds to it. It is genuinely valuable for non-technical staff who need to speak about the platform credibly and as a first rung for career changers, but the hiring signal comes from what you do next. Pair it with something demonstrable — a small project in a free-tier account, a Cloud Quest badge, or an Associate exam — and note that passing any Associate-level exam renews Cloud Practitioner for three years, so moving up is also the cheapest way to maintain it.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'CLF-C02 is 65 questions in 90 minutes — 50 scored plus 15 unidentified unscored pretest items — reported as a scaled score from 100 to 1,000 with a passing standard of 700. There are two formats and nothing else: multiple choice, with one correct response and three distractors, and multiple response, with two or more correct responses among five or more options and the number to select stated in the stem. There are no performance-based tasks, no simulations and no labs. Unanswered questions are scored as incorrect and there is no penalty for guessing. Scoring is compensatory, so a weak domain can be offset by a strong one; you need only the overall 700. The domain weightings are Cloud Concepts 24 percent, Security and Compliance 30 percent, Cloud Technology and Services 34 percent, and Billing, Pricing and Support 12 percent. The house style is short. Most questions are one or two sentences with no filler, and the discrimination is usually between services or concepts that sit next to each other rather than between right and absurd — elasticity against scalability, CloudWatch against CloudTrail, Business support against Enterprise support, Reserved Instances against Savings Plans. Pacing works out at roughly 80 seconds per question, which is generous for content at this level; the practical risk is over-thinking a simple question by importing architectural considerations the exam is not asking about. The exam is offered in Arabic, English, French, German, Italian, Japanese, Korean, Portuguese (Brazil), Spanish (Latin America and Spain), Simplified Chinese and Traditional Chinese, and AWS has announced the retirement of the Indonesian version after 16 July 2026.',
    types: [
      { name: 'Single-answer multiple choice', share: 'The large majority of the paper', detail: 'One correct response and three distractors, typically other real AWS services applied to the wrong problem. Short stems, minimal scenario, and discrimination between adjacent services is the point.' },
      { name: 'Multiple response', share: 'A minority of items', detail: 'Two or more correct responses among five or more options, with the number to select stated. Common for "select TWO benefits of the AWS Cloud" or "select TWO customer responsibilities under the shared responsibility model". Scored all-or-nothing.' },
      { name: 'Shared-responsibility classification items', share: 'Concentrated in the 30% security domain', detail: 'Not a separate format but the most repeated question pattern on the exam: a task is described and you decide whether it belongs to AWS or to the customer. Reliably worth several marks.' },
      { name: 'Unscored pretest items', share: '15 of the 65 questions', detail: 'Not identified and not counted. AWS uses them to evaluate items for future forms. Their existence is a good reason to cap the time you spend on any question that feels unexpectedly obscure.' }
    ],
    samples: [
      {
        prompt: 'An online retailer automatically adds Amazon EC2 instances during a seasonal sales peak and removes them when traffic returns to normal, so the company pays only for the capacity it uses. Which AWS Cloud benefit does this describe?',
        options: [
          'A. Elasticity',
          'B. High availability',
          'C. Fault tolerance',
          'D. Agility'
        ],
        answer: 'A',
        explanation: 'Elasticity is the ability to acquire resources as demand rises and release them as demand falls, paying only for what is used — exactly the behaviour described. B, high availability, means the system stays reachable despite component failure, which is about redundancy rather than about matching capacity to demand. C, fault tolerance, is the stronger property of continuing to operate correctly even while a component has failed; neither B nor C says anything about cost following usage. D, agility, is the broader benefit of being able to experiment and deploy quickly, and it is the most tempting distractor because scaling quickly feels agile — but the question specifically describes capacity expanding and contracting with demand, which is the textbook definition of elasticity. CLF-C02 tests these four terms as a contrast set, so learn them together rather than separately.'
      },
      {
        prompt: 'Under the AWS shared responsibility model, which task is the responsibility of the customer?',
        options: [
          'A. Applying operating system patches to the guest OS on Amazon EC2 instances',
          'B. Maintaining the physical security of AWS data centres',
          'C. Patching the hypervisor that hosts EC2 instances',
          'D. Replacing failed storage hardware in the AWS infrastructure'
        ],
        answer: 'A',
        explanation: 'The dividing line is security of the cloud versus security in the cloud. AWS is responsible for the infrastructure that runs its services — the physical facilities, the hardware, the network and the virtualisation layer. The customer is responsible for everything they put on top of it, which for EC2 explicitly includes the guest operating system, its patching, the security group rules, IAM configuration and data encryption. B, C and D all describe the infrastructure layer and belong to AWS. The one to watch is C, because candidates who know that AWS patches "the platform" sometimes over-generalise and assume that includes the operating system on their instances. It does not — EC2 is an infrastructure service, and the more managed a service is, the more of that stack AWS takes on, which is why the same question about a fully managed service can have a different answer.'
      },
      {
        prompt: 'A company wants to move an existing MySQL database to AWS while minimising the administrative effort of provisioning, patching, backups and failover. Which AWS service should the company use?',
        options: [
          'A. Install MySQL on Amazon EC2 instances',
          'B. Amazon RDS for MySQL',
          'C. Amazon DynamoDB',
          'D. Amazon Redshift'
        ],
        answer: 'B',
        explanation: 'Amazon RDS is the managed relational database service: AWS handles provisioning, operating system and database patching, automated backups and, with a Multi-AZ deployment, failover — which is precisely the administrative burden the company wants to shed, while keeping MySQL compatibility. A works and preserves full control, but it leaves every one of those tasks with the customer, so it fails the stated requirement; it is the distractor for candidates who think only about compatibility. C, DynamoDB, is a managed NoSQL key-value database and is not MySQL-compatible, so an existing relational schema and its SQL queries would have to be rewritten. D, Redshift, is a data warehouse built for analytical queries across large datasets, not a transactional replacement for an operational MySQL database. The exam repeatedly rewards recognising both what kind of database is being described and how much operational work the requirement is trying to remove.'
      },
      {
        prompt: 'A company requires 24/7 access to AWS Cloud Support Engineers by phone, email and chat for production system issues, but does not need a designated Technical Account Manager. Which is the LEAST expensive AWS Support plan that meets this requirement?',
        options: [
          'A. AWS Basic Support',
          'B. AWS Developer Support',
          'C. AWS Business Support',
          'D. AWS Enterprise Support'
        ],
        answer: 'C',
        explanation: 'Business Support is the entry point for round-the-clock access to Cloud Support Engineers by phone, email and chat, and it also unlocks the full set of Trusted Advisor checks. A, Basic Support, is included with every account but provides no technical case support beyond account and billing enquiries and only a limited set of Trusted Advisor checks. B, Developer Support, provides business-hours access by email to Cloud Support Associates — it is aimed at non-production experimentation, and its exclusion of 24/7 phone and chat is the distinction the question is testing. D, Enterprise Support, does meet the requirement but adds a designated Technical Account Manager and other services the company has explicitly said it does not need, making it more expensive than necessary. Note the qualifier: CLF-C02 support-plan questions almost always ask for the least expensive plan that satisfies a stated need, so the boundaries between tiers matter more than the full contents of any one tier.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'Ninety minutes, 65 questions, delivered through Pearson VUE at a test centre or online with proctoring, for $100 plus tax. Everything is multiple choice or multiple response — no labs, no simulations, no performance-based tasks — so pacing is uniform at about 80 seconds a question and you can flag items and review them freely before you submit. The single biggest surprise for first-time AWS candidates is that there is no result on screen. Most AWS exams show no pass or fail at the end; your outcome and a downloadable score report post to your AWS Certification Account within five business days, and the Credly badge email often arrives before the report does. Know that in advance so the anticlimax does not read as a bad sign. The rules that actually cost people their seats are administrative. You need a valid, unexpired government-issued photo ID whose name matches your AWS Certification Account exactly, and if you are testing in a country where you are not a national you will generally need your passport as the primary ID. You can cancel or reschedule without a fee up to 24 hours before the appointment, but any single appointment can only be rescheduled twice before you have to cancel and rebook, and a no-show forfeits the whole fee. If English is not your first language, request the ESL +30 minutes accommodation in your certification account before you register — it is a one-time request that then applies automatically to every future booking.',
    bring: [
      'A valid, unexpired government-issued photo ID with a name matching your AWS Certification Account exactly',
      'Your passport as the primary ID if you are testing in a country where you are not a national (EU-issued IDs excepted)',
      'A second form of ID carrying your name and signature — Pearson VUE test centres commonly ask for one, so read your confirmation email',
      'For online proctoring: a phone for check-in photographs, a completely clear desk and a private room with a door you can close',
      'For online proctoring: a webcam, microphone and connection already system-tested on the exact machine you will use'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker at a centre, out of reach for an online exam',
      'All notes, printed service lists and support-plan comparison tables',
      'Your own paper and pens; test centres issue an erasable noteboard and the online delivery provides a digital whiteboard only',
      'Bags, coats, hats, food and drink beyond what the centre permits',
      'Second monitors, which must be unplugged and turned away for an online exam, and any other person in the room'
    ],
    timeline: [
      { time: 'Before you first register', detail: 'If English is your second language, request the ESL +30 minutes accommodation in your AWS Certification Account. One request covers all future exams and it cannot be granted on the day.' },
      { time: 'The week before', detail: 'Check that the name on your AWS Certification Account matches your ID character for character, and take one full timed practice exam so 90 minutes for 65 questions feels routine.' },
      { time: 'More than 24 hours before', detail: 'Last window to cancel or reschedule without forfeiting the fee. Remember an appointment can only be rescheduled twice before you must cancel and rebook.' },
      { time: '24 hours before', detail: 'For an online exam, run the system test on the same machine and network you will use. For a test centre, confirm the address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre, or begin online check-in, which takes around 15 minutes for photographs of your face, your ID and the entire room.' },
      { time: 'First minute at the seat', detail: 'Write the shared-responsibility split — AWS owns the facilities, hardware, network and hypervisor; you own the guest OS, IAM, security groups and data — on the noteboard. It is the most repeated pattern on the paper.' },
      { time: '0-75 minutes', detail: 'Work straight through at roughly 80 seconds a question. Answer everything, flag anything you are unsure of, and never leave a question blank — unanswered items score as incorrect and there is no guessing penalty.' },
      { time: '75-88 minutes', detail: 'Review flagged items only. Change an answer solely when you can articulate what you misread the first time.' },
      { time: '88-90 minutes', detail: 'Submit deliberately. Expect a survey and then no result — that is normal.' }
    ],
    rules: [
      'Two question formats only — multiple choice and multiple response; no labs, simulations or performance-based tasks. You may flag and review before submitting.',
      '65 questions of which 50 are scored and 15 are unidentified unscored pretest items.',
      'Scaled score of 100-1,000 with a passing standard of 700 for Foundational-level exams; scoring is compensatory across the four domains.',
      'Unanswered questions are scored as incorrect and there is no penalty for guessing.',
      'A valid, unexpired government-issued ID matching your AWS Certification Account name is required; a passport is generally required if you test outside your country of nationality.',
      'No scheduled break in a 90-minute exam, and the clock does not stop if you leave.',
      'Cancel or reschedule at least 24 hours ahead or forfeit the fee; a maximum of two reschedules per appointment.',
      'Retakes: 14 calendar days must pass after a failed attempt, there is no limit on attempts, and the full $100 fee applies each time. After you pass, you cannot retake the same exam code for two years unless AWS issues a new exam guide and code.'
    ],
    afterwards:
      'There is no result on screen. Your outcome posts to your AWS Certification Account within five business days under Exam History, where you can download a PDF score report showing your scaled score and a table of section-level classifications across the four domains. AWS cautions against over-reading that table, but it is enough to tell you whether Security and Compliance or Cloud Technology and Services was the weak side. On a pass, the Credly badge email frequently lands before the score report, and your account gains a 50 percent discount voucher toward a future exam. The certification is valid for three years, and the renewal options here are the most generous AWS offers: you can renew for another three years free of charge by completing the AWS Cloud Quest: Recertify Cloud Practitioner game-based training with no exam and no prep required, or by passing the current version of CLF-C02, or by passing any Associate-level or Professional-level exam. That last route is the one to plan for — if you are moving up the stack anyway, your Cloud Practitioner renewal takes care of itself. Diary the expiry date the week you pass. On a fail, the 14-day wait is useful rather than punitive: read the section classifications, rebuild the domain that dragged you down, and take a full timed practice exam before rebooking. Each attempt costs the full $100, and the usual cause of a second failure is having studied more services rather than having studied the four domains in their published proportions.'
  }
};

export default data;
