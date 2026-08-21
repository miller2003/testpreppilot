// Depth content for: aws-certified-solutions-architect-associate
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This guide is compiled and maintained by our IT-certifications desk. Cloud exams are revised on a two-to-three-year cycle and the exam series code is the only reliable way to tell current material from stale material, so we track the AWS exam guide by its code — SAA-C03 here — and say plainly when a version is likely to be replaced. Fees, question counts, scoring, retake rules and recertification terms come from AWS’s own exam guide and certification policy pages rather than from training vendors. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies workers by job duties rather than by certificate. Where a number is not published — AWS releases no pass rate — we state that instead of estimating one.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Question count, scored versus unscored items, duration, fee, scaled scoring range, passing score and the four domain weightings were taken from the AWS Certified Solutions Architect - Associate (SAA-C03) exam guide and the AWS certification product page; retake, results and recertification terms from AWS Certification policy pages; wages from the BLS Occupational Outlook Handbook, May 2024 data.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$130,390 median for computer network architects, SOC 15-1241 (BLS Occupational Outlook Handbook, May 2024)',
    summary:
      'Start with a correction you will not find on most salary pages: the Bureau of Labor Statistics does not publish an occupation called cloud engineer, cloud architect or solutions architect. There is no SOC code for any of those titles, so every "average AWS Solutions Architect salary" you see quoted is a job-board aggregate of self-reported figures, not government data, and it is usually built from a self-selecting sample of people who bothered to report. Since BLS classifies by job duty rather than by job title or certificate, the honest approach is to name the official series whose duties actually match the SAA-C03 blueprint and read it carefully. The closest fit is Computer Network Architects, SOC 15-1241, which covers designing and implementing data communication infrastructure — the work that Domain 1 (secure architectures), Domain 2 (resilient architectures) and Domain 3 (high-performing architectures) describe in AWS terms. That occupation had a May 2024 median annual wage of $130,390, or $62.69 an hour, with the lowest 10 percent under $79,520 and the highest 10 percent above $198,030, across 179,200 jobs. Two adjacent series bracket it and are worth knowing. Software Developers, SOC 15-1252, had a May 2024 median of $133,080, and a large share of people who hold SAA-C03 are developers who architect as part of the job rather than full-time architects. Network and Computer Systems Administrators, SOC 15-1244, sat at $96,800, and that is the realistic classification for someone who passes SAA-C03 without prior design responsibility. AWS states the exam targets candidates with at least one year of hands-on experience designing AWS solutions; BLS notes that network architects typically need five or more years of related experience. The certificate does not close that gap on its own — it gets you into the conversation.',
    rows: [
      { label: 'Median annual wage, computer network architects (15-1241)', value: '$130,390', note: 'BLS Occupational Outlook Handbook, May 2024 ($62.69/hr)' },
      { label: 'Lowest 10 percent (15-1241)', value: 'less than $79,520', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent (15-1241)', value: 'more than $198,030', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024 (15-1241)', value: '179,200 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Adjacent series — software developers (15-1252)', value: '$133,080 median', note: 'BLS OOH Pay tab, May 2024; many SAA-C03 holders are classified here rather than as architects' },
      { label: 'Realistic classification without design responsibility — network and computer systems administrators (15-1244)', value: '$96,800 median', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Best-paying industry for 15-1241', value: '$137,770 (management of companies and enterprises)', note: 'BLS OOH, May 2024; computer systems design $131,040, telecommunications $108,400' }
    ],
    growth: '+12% projected change 2024-34 for computer network architects (much faster than average, +21,400 jobs) with about 11,200 openings a year; software developers are projected +15% with about 129,200 annual openings across that broader group',
    source: {
      label: 'BLS Occupational Outlook Handbook — Computer Network Architects (15-1241)',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-network-architects.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'AWS publishes no pass rate — it publishes the cut score: 720 on a 100-1,000 scale, from 50 scored questions',
    summary:
      'AWS does not release pass-rate statistics for SAA-C03 or for any other certification, and neither does Pearson VUE. The percentages that circulate on forums and course landing pages are marketing estimates or survey artefacts; none of them is sourced, and we are not going to add another. What AWS does publish is the scoring mechanics, and those are more actionable than a pass rate would be. The exam presents 65 questions, of which 50 are scored and 15 are unscored pretest items that AWS is trialling for future forms. The unscored items are not identified, which has a real consequence for exam-day psychology: a question that looks unfamiliar or unreasonably obscure may simply not count, so time spent agonising over it is time taken from questions that do. Results are reported as a scaled score from 100 to 1,000 and the minimum passing score for an Associate-level exam is 720. That is not 72 percent of items correct. AWS sets the standard using a modified Angoff process — a panel of subject-matter experts rates the difficulty of each item relative to a minimally qualified candidate — and then equates every subsequent form statistically so that harder forms require fewer raw correct answers than easier ones. Scoring is compensatory, meaning you do not need to pass each domain individually; only the overall score matters. The retake rule is fixed and published: fail, and you must wait 14 calendar days before you are eligible to sit again, with no limit on attempts but the full $150 fee payable each time. Pass, and you cannot retake the same exam code for two years unless AWS releases a new exam guide and series code.',
    source: {
      label: 'AWS Certification — After Testing policies (scoring, passing standard and retakes) and the SAA-C03 exam guide',
      url: 'https://aws.amazon.com/certification/policies/after-testing/'
    },
    caveat:
      'No pass rate is published by AWS or by Pearson VUE, so we have left that figure blank rather than estimating it. The verifiable numbers are 65 questions (50 scored, 15 unscored), 130 minutes, a 100-1,000 scaled score, a 720 passing standard, a 14-calendar-day retake wait and a $150 USD fee per attempt.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The current exam is SAA-C03, which replaced SAA-C02 on 30 August 2022 and remains the version in market. AWS has not announced a successor at the time of review, but the practical warning is the same as for any cloud exam: check the code on every course, book and question bank you buy, because SAA-C02 material is still circulating and it predates several services that now appear regularly. The SAA-C03 blueprint has four domains — Design Secure Architectures 30 percent, Design Resilient Architectures 26 percent, Design High-Performing Architectures 24 percent and Design Cost-Optimized Architectures 20 percent — and the ordering matters. Security is the largest single domain, which surprises candidates who expect an architecture exam to be dominated by compute and storage selection. Cost optimisation at 20 percent is also larger than most people study for, and it is the domain where the question wording does the work: "MOST cost-effective" and "LEAST operational overhead" are the qualifiers that separate two technically correct answers. AWS states the target candidate has at least one year of hands-on experience designing AWS solutions; the plan below assumes some cloud exposure but not that year, and runs ten weeks at 11 to 14 hours a week. Build it around a real AWS account within the Free Tier from day one, with a billing alarm set before you launch anything. Clicking through a VPC build once teaches you more about subnets, route tables and NAT charges than three chapters will, and the cost domain becomes concrete the first time you see a NAT gateway line item on your own bill.',
    totalHours: '110-140 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Orientation, account setup and the Well-Architected Framework',
        tasks: [
          'Read the SAA-C03 exam guide end to end, including the in-scope and out-of-scope service lists — the out-of-scope list saves you weeks',
          'Open an AWS account, enable MFA on the root user, create an admin IAM user, and set a billing alarm and a budget before launching anything',
          'Read the AWS Well-Architected Framework whitepaper; the exam is explicitly built on its pillars',
          'Learn the global infrastructure vocabulary properly: Region, Availability Zone, Local Zone, edge location, and what each implies for latency and blast radius'
        ],
        hours: '11-13 hrs'
      },
      {
        label: 'Week 2',
        focus: 'Domain 1 — Design Secure Architectures, part one: identity (30%)',
        tasks: [
          'IAM in depth: users, groups, roles, policy evaluation logic, and why an EC2 instance role beats an access key every time',
          'AWS Organizations, service control policies, and multi-account landing-zone patterns',
          'Federation and identity: IAM Identity Center, SAML, Cognito user pools versus identity pools',
          'Hands-on: assume a cross-account role, then write a resource policy that grants access to a bucket from another account'
        ],
        hours: '12-14 hrs'
      },
      {
        label: 'Week 3',
        focus: 'Domain 1 — Design Secure Architectures, part two: network and data protection (30%)',
        tasks: [
          'Build a VPC by hand: public and private subnets, route tables, internet gateway, NAT gateway, security groups versus network ACLs (stateful versus stateless)',
          'Gateway and interface VPC endpoints, and when each removes both an internet path and a NAT charge',
          'Encryption: KMS keys and key policies, envelope encryption, SSE-S3 versus SSE-KMS, ACM, Secrets Manager versus Parameter Store',
          'Edge and detective controls: WAF, Shield, GuardDuty, Security Hub, CloudTrail, Config, Macie — know what each one is for in one sentence'
        ],
        hours: '12-14 hrs'
      },
      {
        label: 'Week 4',
        focus: 'Domain 2 — Design Resilient Architectures, part one (26%)',
        tasks: [
          'Multi-AZ as the default answer for availability: EC2 Auto Scaling groups across AZs, Application versus Network versus Gateway Load Balancers',
          'RDS Multi-AZ versus read replicas — the classic exam discrimination between availability and read scaling',
          'Route 53 routing policies (simple, weighted, latency, failover, geolocation, multivalue) and health checks',
          'Hands-on: put an ASG behind an ALB across two AZs, then terminate an instance and watch it heal'
        ],
        hours: '12-14 hrs'
      },
      {
        label: 'Week 5',
        focus: 'Domain 2 — Design Resilient Architectures, part two: decoupling and DR (26%)',
        tasks: [
          'Decoupling: SQS standard versus FIFO, visibility timeout, dead-letter queues, SNS fan-out, EventBridge rules, Step Functions',
          'The four DR strategies by RPO and RTO: backup and restore, pilot light, warm standby, multi-site active-active',
          'Data durability: S3 versioning, cross-Region replication, AWS Backup, EBS snapshots, Aurora global databases',
          'Practise reading a requirement and converting "RPO of 5 minutes, RTO of 1 hour" into a named strategy'
        ],
        hours: '11-13 hrs'
      },
      {
        label: 'Week 6',
        focus: 'Domain 3 — Design High-Performing Architectures: storage and data (24%)',
        tasks: [
          'S3 storage classes and their retrieval characteristics; EBS volume types (gp3, io2, st1, sc1) and when each is right',
          'EFS versus FSx for Windows File Server versus FSx for Lustre — the shared-storage discrimination the exam loves',
          'Databases: RDS, Aurora, DynamoDB (partition key design, on-demand versus provisioned, DAX, global tables), ElastiCache for Redis and Memcached',
          'Analytics touchpoints: Athena, Glue, Kinesis Data Streams versus Firehose, Redshift'
        ],
        hours: '12-14 hrs'
      },
      {
        label: 'Week 7',
        focus: 'Domain 3 — Design High-Performing Architectures: compute and network (24%)',
        tasks: [
          'EC2 instance families and placement groups; Lambda concurrency, timeouts and event sources; ECS versus EKS versus Fargate',
          'CloudFront behaviours, origins and cache policies; Global Accelerator and how it differs from CloudFront',
          'Hybrid and interconnect: Transit Gateway, VPC peering, Site-to-Site VPN, Direct Connect and Direct Connect with VPN backup',
          'Migration and transfer: DataSync, Transfer Family, Snowball, Storage Gateway, DMS'
        ],
        hours: '12-14 hrs'
      },
      {
        label: 'Week 8',
        focus: 'Domain 4 — Design Cost-Optimized Architectures (20%)',
        tasks: [
          'Purchase options: On-Demand, Spot, Savings Plans, Reserved Instances — and which workload characteristics justify each',
          'S3 lifecycle policies, Intelligent-Tiering, and the retrieval-time trade-off across Glacier tiers',
          'The costs candidates forget: cross-AZ and cross-Region data transfer, NAT gateway hourly plus per-GB charges, idle load balancers, unattached EIPs and EBS volumes',
          'Cost tooling: Cost Explorer, Budgets, Cost and Usage Report, Compute Optimizer, Trusted Advisor'
        ],
        hours: '11-13 hrs'
      },
      {
        label: 'Week 9',
        focus: 'Question technique and timed practice',
        tasks: [
          'Take the AWS Certification Official Practice Question Set, then a full official practice exam under 130-minute conditions',
          'Drill the qualifiers: MOST cost-effective, LEAST operational overhead, MOST secure, HIGHEST availability — build the habit of finding the qualifier before reading the options',
          'For every miss, write one sentence explaining why the correct answer beat the one you chose; the gap is almost always a qualifier, not a service',
          'Review the AWS service short-name list published for the exam so an abbreviation never costs you a question'
        ],
        hours: '11-13 hrs'
      },
      {
        label: 'Week 10',
        focus: 'Gap closing and consolidation',
        tasks: [
          'Two more timed full-length practice exams, weighted 30/26/24/20 to the real domains',
          'Rebuild from memory the three architectures the exam returns to most: a three-tier VPC, a decoupled queue-worker pipeline, and a static site on S3 behind CloudFront',
          'Final pass over the discriminations that decide borderline results: Multi-AZ versus read replica, security group versus NACL, gateway versus interface endpoint, SQS versus SNS versus EventBridge',
          'One quiet day before the exam'
        ],
        hours: '11-13 hrs'
      }
    ],
    variants: [
      { label: 'Already working on AWS daily', detail: 'Five to six weeks. Your gaps will not be in the services you use but in the ones your employer does not: FSx, Global Accelerator, Transit Gateway, Storage Gateway and the migration family. Spend the recovered time on Domain 4, because production experience teaches you what works, not what is cheapest, and the exam asks the second question.' },
      { label: 'On-premises infrastructure or network engineer', detail: 'Twelve to fourteen weeks at 9 hrs/week. Your instincts about redundancy, subnetting and security zones transfer well; your instincts about capacity, licensing and standing infrastructure actively mislead. Add two extra weeks around Weeks 4 and 8 to internalise elasticity and consumption pricing, which are the two ideas that break on-prem intuition.' },
      { label: 'Cloud Practitioner (CLF-C02) already passed', detail: 'Eight to nine weeks. CLF-C02 gives you the vocabulary and most of Domain 4’s billing content, but it explicitly excludes designing architectures, so Weeks 2 through 7 are all new work. Do not let familiarity with service names convince you that you know the design trade-offs between them — that difference is the entire exam.' },
      { label: 'Developer moving toward architecture', detail: 'Seven to eight weeks. Lambda, DynamoDB, SQS and API Gateway are already yours. The weak spots are almost always VPC networking and IAM policy evaluation. Give Week 3 double time and build the VPC by hand rather than with a wizard.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'SAA-C03 is a reading exam disguised as a technical one. Almost every question describes a scenario in one or two lines, adds a qualifier, and offers four options of which two or three would genuinely work. The skill being tested is not "do you know what Amazon SQS is" — it is "given this constraint, which of these three workable designs is the one AWS considers correct". Candidates who study by memorising service definitions plateau around the cut score and cannot explain why. The strategies below are all aimed at the same thing: converting service knowledge into trade-off judgement.',
    items: [
      {
        title: 'Find the qualifier before you read the options',
        detail: 'MOST cost-effective, LEAST operational overhead, MOST secure, MINIMAL downtime, HIGHEST availability. That single word or phrase is what eliminates the two technically correct distractors, and reading the answers first primes you to pick the design you like rather than the one the question asked for. Train the habit deliberately: on every practice question, underline the qualifier, then predict the answer before looking at the options.'
      },
      {
        title: 'Treat "least operational overhead" as a preference for managed services',
        detail: 'When a question penalises operational overhead, the intended answer almost always moves work onto AWS: Fargate over self-managed EC2 clusters, Aurora over self-managed database replication, S3 lifecycle policies over a cron job, Secrets Manager rotation over a custom Lambda. Conversely, when the qualifier is cost, the managed option is frequently the wrong answer. Learning that these two qualifiers usually point in opposite directions resolves a large share of the paper.'
      },
      {
        title: 'Build the three canonical architectures by hand, twice',
        detail: 'A three-tier VPC with public ALB, private application subnets and a Multi-AZ database; a decoupled producer-queue-worker pipeline with a dead-letter queue; and a static site in S3 behind CloudFront with OAC. Between them these cover a startling proportion of the scenarios. Build each from the console once and from the CLI or CloudFormation once, then tear them down. The second build is where the details stick.'
      },
      {
        title: 'Learn the discriminations, not the services',
        detail: 'The exam repeatedly tests pairs: RDS Multi-AZ (availability, synchronous, automatic failover) versus read replica (read scaling, asynchronous, manual promotion); security group (stateful, allow only) versus NACL (stateless, allow and deny); gateway endpoint (S3 and DynamoDB, free, route-table based) versus interface endpoint (PrivateLink, ENI, hourly charge); SQS versus SNS versus EventBridge. Write these as two-column comparisons rather than as separate notes.'
      },
      {
        title: 'Use the free official material before you buy anything',
        detail: 'AWS publishes the exam guide, the Official Practice Question Set, Exam Prep Review videos and Exam Prep Practice on Skill Builder at no cost, and the AWS documentation and FAQ pages for the core services are the primary source the questions are written from. A Skill Builder subscription at $29 monthly or $449 annually adds the full Official Practice Exams and Builder Labs, which is worth it in the final fortnight — but paying for it in Week 1 usually just buys you material you will not open.'
      },
      {
        title: 'Set a billing alarm and then actually spend a little',
        detail: 'Domain 4 is 20 percent of the exam and it is the hardest domain to learn from reading, because cost is an emotional lesson rather than an intellectual one. Leave a NAT gateway running for a week and look at the charge. Compare it with the cost of an S3 gateway endpoint, which is free. Candidates who have paid for their own idle resources answer the cost-optimisation questions faster and more confidently than candidates who have only read about pricing models.'
      },
      {
        title: 'Ignore the 15 unscored questions you cannot identify',
        detail: 'Fifteen of the 65 items do not count and AWS does not mark them. That means roughly one question in four that feels unreasonable may be a pretest item. Practically: allocate two minutes as a hard ceiling per question, flag anything beyond it, and move on. Candidates lose more marks by over-investing in one strange question than by guessing on it, and there is no penalty for a wrong answer.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The SAA-C03 market is the most crowded in cloud certification, and the quality spread is enormous. Two structural facts should shape your spending. First, AWS itself gives away more than most candidates realise: the exam guide, the Exam Prep Review video series, Exam Prep Practice, flashcards and the Official Practice Question Set are all available on a free Skill Builder account, and the AWS documentation and service FAQ pages are the primary source the questions are written from. Second, the paid resource with the clearest evidence base is a good question bank, because SAA-C03 is a question-technique exam as much as a knowledge exam and no amount of video watching builds the habit of hunting for the qualifier. The AWS Skill Builder subscription at $29 monthly or $449 annually is the only paid option that includes the Official Practice Exams written by the people who write the real items, and it also unlocks AWS Builder Labs and the Certification Maintenance path that extends a certification by a year. Third-party video courses are largely interchangeable in coverage; pick one instructor whose pace you can tolerate and finish it rather than sampling four. The single most important check is the exam code: SAA-C03 replaced SAA-C02 on 30 August 2022, and SAA-C02 courses and question banks are still on sale. Prices below were checked at review time in USD. Udemy list prices are close to meaningless because the platform runs near-continuous sales, so the number you should compare against is the sale price, not the strikethrough. We take no affiliate payment and do not rank by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Exam registration (SAA-C03)', values: ['$150 USD plus tax (AWS Associate-tier price; also published in EUR, AUD, JPY, KRW, CNY and INR)', 'Pearson VUE test centre or online proctored', 'Required. AWS certification holders get a 50% discount voucher for a future exam in their account'] },
      { label: 'AWS Skill Builder — free account', values: ['Free', 'Digital courses, Exam Prep Review videos, Exam Prep Practice, flashcards, Official Practice Question Set', 'The correct starting point before you spend anything'] },
      { label: 'AWS Skill Builder subscription', values: ['$29/month or $449/year', 'Adds Official Practice Exams and Pretests, AWS Builder Labs, Industry Quest and Certification Maintenance', 'The final four to six weeks — official practice exams are the most representative readiness signal available'] },
      { label: 'AWS documentation, service FAQs and the Well-Architected whitepaper', values: ['Free', 'Written reference', 'The primary source; the FAQ pages for S3, EC2, VPC, RDS and IAM repay reading directly'] },
      { label: 'Your own AWS account within the Free Tier', values: ['Free tier plus a few dollars if you experiment properly', 'Live console and CLI', 'Domains 1-3 by construction, and Domain 4 the first time you see a NAT gateway on your own bill'] },
      { label: 'Third-party video course (Stephane Maarek, Adrian Cantrill, Digital Cloud Training and similar)', values: ['Roughly $15-30 on Udemy during a sale; standalone platforms typically $40-80 for lifetime access', 'Long-form video with demonstrations', 'A single structured spine if you want one — verify SAA-C03 on the listing, not SAA-C02'] },
      { label: 'Third-party practice exams (Tutorials Dojo, Maarek and similar)', values: ['~$15-30 on sale', 'Timed sets with per-option explanations', 'Volume practice and explanation quality; use alongside, not instead of, the official practice exam'] },
      { label: 'AWS Certification Official Pretest', values: ['Included with a Skill Builder subscription', 'Full-length diagnostic in the real question style', 'A calibrated readiness check about two weeks out'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax. The $150 exam fee is AWS’s published Associate-tier price and AWS notes it updates local-currency pricing at least annually for exchange rates. Third-party course and practice-test prices move constantly and Udemy list prices are meaningless outside a sale — confirm at the source before buying. We do not rank by commission and take no affiliate payment for placement.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The failures on SAA-C03 cluster tightly, and only one of the six below is really about not knowing enough AWS. The rest are about reading, about studying the wrong domain balance, and about mistaking familiarity with service names for judgement about trade-offs between them. If you have failed once, the domain-level classifications on your score report will almost always point at Domain 1 or Domain 4 — the largest and the least-studied respectively.',
    items: [
      {
        mistake: 'Studying SAA-C02 material for an SAA-C03 exam',
        fix: 'SAA-C03 replaced SAA-C02 on 30 August 2022 and restructured the blueprint into four design domains weighted 30/26/24/20, with security promoted to the largest. SAA-C02 courses and question banks are still on sale and still rank in search. Check the exam code on every purchase, and cross-check the in-scope and out-of-scope service lists in the current exam guide — the out-of-scope list alone will save you from studying several service families that cannot appear.'
      },
      {
        mistake: 'Reading the answer options before finding the qualifier',
        fix: 'Most questions offer more than one design that works. The qualifier — MOST cost-effective, LEAST operational overhead, MOST secure, MINIMAL downtime — is what makes exactly one of them correct. Candidates who read the options first anchor on the architecture they would build at work and then rationalise it. Underline the qualifier, predict the answer, then read the options. This is the highest-return single habit change available on this exam.'
      },
      {
        mistake: 'Under-studying cost optimisation because it feels like accounting',
        fix: 'Domain 4 is 20 percent of the scored content and it is the domain technical candidates skip. You need the purchase options cold (On-Demand, Spot, Savings Plans, Reserved Instances and the workload profile each suits), the S3 storage classes with their retrieval characteristics, and the charges that do not appear in an architecture diagram: cross-AZ and cross-Region data transfer, NAT gateway hourly plus per-GB, idle load balancers, unattached Elastic IPs and orphaned EBS volumes. A fifth of the paper is a lot to concede.'
      },
      {
        mistake: 'Confusing RDS Multi-AZ with read replicas',
        fix: 'This is the single most reliably tested discrimination on the exam and it appears in several disguises. Multi-AZ is a synchronous standby in another Availability Zone for availability and automatic failover — it serves no read traffic in the classic configuration. A read replica is asynchronous, exists to scale reads, and must be promoted manually. If the requirement says minimal downtime or automatic failover, the answer is Multi-AZ; if it says the reporting workload is slowing the primary, the answer is a read replica. Learn the pair, not the two services separately.'
      },
      {
        mistake: 'Passing the exam without ever building anything',
        fix: 'It is possible to pass SAA-C03 from video and question banks alone, and people do. They then fail the interview, because the first practical question exposes that they have never created a route table or debugged a security group. The exam guide describes a candidate with a year of hands-on design experience for a reason. Build the three canonical architectures yourself; it costs a few dollars inside the Free Tier and it is the difference between a certificate and a capability.'
      },
      {
        mistake: 'Forgetting the certification expires and how renewal actually works',
        fix: 'AWS certifications are valid for three years. SAA-C03 can be renewed by passing the current version of the same exam, by passing the AWS Certified Solutions Architect - Professional exam, or — an option AWS added recently — by completing selected Skill Builder courses and labs under Certification Maintenance, which extends validity by one year at a time rather than three. Note also that once you pass, you cannot retake the same exam code for two years unless AWS publishes a new one, so you cannot simply re-sit early. Diary the expiry, and remember your account holds a 50 percent discount voucher for your next exam.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'SAA-C03 is 65 questions in 130 minutes — 50 scored plus 15 unidentified unscored pretest items — with a scaled score of 100 to 1,000 and a passing standard of 720. There are exactly two question formats and no performance-based tasks, no labs and no simulations. Multiple-choice items have one correct response and three distractors; multiple-response items have two or more correct responses among five or more options and the stem tells you how many to select. Unanswered questions are scored as incorrect and there is no penalty for guessing, so leaving anything blank is strictly worse than a guess. The domain weightings are Design Secure Architectures 30 percent, Design Resilient Architectures 26 percent, Design High-Performing Architectures 24 percent and Design Cost-Optimized Architectures 20 percent, and scoring is compensatory — you pass on the overall scaled score, not domain by domain. The house style is consistent enough to prepare for: one or two lines of scenario, a qualifier in capitals, then four options of which two are usually workable and one is usually a service that does not do what the option claims. Pacing works out at roughly two minutes per question, which is generous by certification standards, but the generosity is deliberate — the questions are long enough that careless reading, not time pressure, is the main failure mode. The exam also uses short service names, and AWS publishes the abbreviation list in advance and makes it available through the Help button during the exam.',
    types: [
      { name: 'Single-answer multiple choice', share: 'The majority of the paper', detail: 'One correct response and three distractors. Distractors are typically real services applied to the wrong problem, or the right service at the wrong tier — plausible enough that partial knowledge picks them.' },
      { name: 'Multiple response', share: 'A minority of items', detail: 'Two or more correct responses among five or more options, with the number to select stated in the stem. Common for defence-in-depth security answers and for multi-step migration or cost designs. Scored all-or-nothing.' },
      { name: 'Qualifier-driven trade-off scenarios', share: 'Cuts across all four domains', detail: 'Not a separate format but the dominant question pattern: several workable designs, one qualifier — MOST cost-effective, LEAST operational overhead, MOST secure, MINIMAL downtime — deciding the answer.' },
      { name: 'Unscored pretest items', share: '15 of the 65 questions', detail: 'Not identified on the exam and not counted toward your score. AWS uses them to trial future items. Their existence is a good reason to cap the time you spend on any question that feels unreasonably obscure.' }
    ],
    samples: [
      {
        prompt: 'A company runs an application on Amazon EC2 instances in private subnets. The application writes several terabytes of objects to an Amazon S3 bucket in the same Region each month. Traffic currently reaches S3 through a NAT gateway. A solutions architect must keep the traffic off the public internet and reduce cost. Which solution meets these requirements MOST cost-effectively?',
        options: [
          'A. Create a gateway VPC endpoint for Amazon S3 and add it to the private subnet route tables',
          'B. Create an interface VPC endpoint for Amazon S3 in each private subnet',
          'C. Provision an AWS Direct Connect connection between the VPC and Amazon S3',
          'D. Move the EC2 instances to public subnets and assign Elastic IP addresses'
        ],
        answer: 'A',
        explanation: 'A gateway VPC endpoint for S3 is added to a route table, keeps traffic on the AWS network, and carries no hourly charge and no per-GB data processing charge — so it both satisfies the security requirement and removes the NAT gateway’s per-GB processing fee on several terabytes a month. B is the strongest distractor and is not wrong technically: an interface endpoint also keeps traffic private, but it is billed per hour per Availability Zone plus per GB processed, so it is materially more expensive than the free gateway endpoint for this pattern. Gateway endpoints exist only for S3 and DynamoDB, which is exactly why the exam pairs them with an interface endpoint distractor. C misunderstands Direct Connect, which connects an on-premises network to AWS, not a VPC to a Regional service. D would work but exposes the instances to the internet, breaking the stated requirement, and Elastic IP plus internet egress is not cheaper.'
      },
      {
        prompt: 'A production application uses a single-AZ Amazon RDS for PostgreSQL instance. The business requires that a failure of the Availability Zone hosting the database cause no more than a few minutes of downtime and require no manual intervention. Reporting load is not a concern. Which change should the solutions architect make?',
        options: [
          'A. Create a read replica in a second Availability Zone and update the application to fail over to it',
          'B. Convert the instance to a Multi-AZ deployment',
          'C. Increase the automated backup retention period and enable point-in-time recovery',
          'D. Take manual snapshots hourly and copy them to a second Availability Zone'
        ],
        answer: 'B',
        explanation: 'A Multi-AZ deployment maintains a synchronous standby replica in a second Availability Zone and fails over automatically, with the database endpoint redirected to the standby — which is precisely a few minutes of downtime with no manual intervention. A is the classic wrong answer: read replicas are asynchronous, exist to scale read traffic, and must be promoted manually, so they meet neither the automation requirement nor the recovery-point expectation. The question rules out the read-scaling motive explicitly by noting reporting load is not a concern, which is the exam signalling which of the two you are being tested on. C and D both improve recoverability but describe backup and restore, which is measured in hours rather than minutes and is entirely manual — they answer a durability requirement, not an availability requirement.'
      },
      {
        prompt: 'A media company stores rendered video files in Amazon S3 Standard. Files are downloaded frequently during the first 30 days after upload. After that, access is unpredictable — some files are never retrieved again while others are pulled without warning and must be available within milliseconds. Which approach meets these requirements at the LOWEST cost?',
        options: [
          'A. Apply a lifecycle rule that transitions objects to S3 Glacier Flexible Retrieval after 30 days',
          'B. Apply a lifecycle rule that transitions objects to S3 One Zone-Infrequent Access after 30 days',
          'C. Configure S3 Intelligent-Tiering for the bucket',
          'D. Leave the objects in S3 Standard and enable S3 Transfer Acceleration'
        ],
        answer: 'C',
        explanation: 'S3 Intelligent-Tiering is designed for exactly this case: unknown or changing access patterns. It moves objects automatically between a frequent and an infrequent access tier based on observed usage, charges a small monitoring fee per object, and — critically for this requirement — retrieval from both of those tiers is in milliseconds with no retrieval fee. A fails the millisecond requirement outright; Glacier Flexible Retrieval is measured in minutes to hours. B is cheaper per gigabyte than Standard-IA and does deliver millisecond access, but One Zone stores data in a single Availability Zone, and it also charges a per-GB retrieval fee that makes it a poor fit when retrieval is unpredictable — the classic trap of optimising storage cost while ignoring retrieval cost. D changes nothing about storage cost; Transfer Acceleration speeds long-distance uploads and adds a charge rather than removing one.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'One hundred and thirty minutes, 65 questions, delivered through Pearson VUE at a test centre or online with proctoring. Compared with a CompTIA exam, three things are different and all three matter. First, there are no performance-based tasks — it is entirely multiple choice and multiple response, so pacing is uniform at roughly two minutes a question and you can flag and review freely before submitting. Second, you do not get your result on screen. Most AWS exams show no pass or fail at the end; the outcome and the downloadable score report post to your AWS Certification Account within five business days, and you may well receive the Credly badge email before the report appears. Plan for that gap emotionally, because walking out of a two-hour exam with no answer is genuinely unsettling if you are not expecting it. Third, the ID and scheduling rules are AWS’s rather than CompTIA’s: you need a valid, unexpired government-issued ID whose name matches your AWS Certification Account exactly, and if you are testing in a country where you are not a national you will generally need your passport as the primary ID. You can cancel or reschedule without a fee up to 24 hours before the appointment, but an appointment can only be rescheduled twice before you must cancel and rebook, and missing the slot forfeits the full $150. If English is not your first language, request the ESL +30 minutes accommodation in your certification account before you register — you only need to do it once and it applies to every future booking.',
    bring: [
      'A valid, unexpired government-issued photo ID with a name matching your AWS Certification Account exactly',
      'Your passport as the primary ID if you are testing in a country where you are not a national (EU-issued IDs excepted)',
      'A second form of ID carrying your name and signature — Pearson VUE test centres commonly ask for one, so check your confirmation email',
      'For online proctoring: a phone for check-in photographs, a completely clear desk and a private room with a door you can close',
      'For online proctoring: a webcam, microphone and connection already system-tested on the exact machine you will use'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker at a centre, out of reach for an online exam',
      'All notes, printed architecture diagrams and service cheat sheets',
      'Your own paper and pens; test centres issue an erasable noteboard and the online delivery provides a digital whiteboard only',
      'Bags, coats, hats, food and drink beyond what the centre permits',
      'Second monitors, which must be unplugged and turned away for an online exam, and any other person in the room'
    ],
    timeline: [
      { time: 'Before you first register', detail: 'If English is your second language, request the ESL +30 minutes accommodation in your AWS Certification Account. It is a one-time request that applies to all future exams; it cannot be added on the day.' },
      { time: 'The week before', detail: 'Confirm the name on your AWS Certification Account matches your ID character for character, and review the AWS service short-name list so an abbreviation never costs you a question.' },
      { time: 'More than 24 hours before', detail: 'This is your last window to cancel or reschedule without forfeiting the fee. Note that an appointment can only be rescheduled twice — after that you must cancel and rebook.' },
      { time: '24 hours before', detail: 'For an online exam, run the system test on the same machine and network you will use. For a test centre, confirm the address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre, or begin online check-in, which takes roughly 15 minutes for photographs of your face, your ID and the whole room.' },
      { time: 'First 2 minutes at the seat', detail: 'Write the four domain weightings and your two-minute-per-question checkpoints on the noteboard — question 33 at the halfway mark is the one to watch.' },
      { time: '0-110 minutes', detail: 'Work straight through at roughly two minutes a question. Answer everything, flag anything you are unsure of, and never leave a question blank — unanswered items are scored as incorrect and there is no guessing penalty.' },
      { time: '110-128 minutes', detail: 'Review flagged questions only. Change an answer solely when you can name the qualifier you misread the first time; second-guessing a considered answer costs more marks than it saves.' },
      { time: '128-130 minutes', detail: 'Submit deliberately. There is no on-screen result, so expect the survey and then nothing.' }
    ],
    rules: [
      'Two question formats only — multiple choice and multiple response — with no performance-based tasks; you may flag and review before submitting.',
      '65 questions of which 50 are scored and 15 are unidentified unscored pretest items.',
      'Scaled score of 100-1,000 with a passing standard of 720 for Associate-level exams; scoring is compensatory across the four domains.',
      'Unanswered questions are scored as incorrect and there is no penalty for guessing.',
      'A valid, unexpired government-issued ID matching your AWS Certification Account name is required; a passport is generally required if you test outside your country of nationality.',
      'No scheduled break in a 130-minute exam, and the clock does not stop if you leave.',
      'Cancel or reschedule at least 24 hours ahead or forfeit the fee; a maximum of two reschedules per appointment.',
      'Retakes: 14 calendar days must pass after a failed attempt, there is no limit on attempts, and the full $150 fee applies every time. After you pass, you cannot retake the same exam code for two years unless AWS issues a new exam guide and code.'
    ],
    afterwards:
      'You will not see a result on screen. Final results post to your AWS Certification Account within five business days, under Exam History, and you can download the score report as a PDF from there. The report gives your scaled score and a table of section-level classifications showing relative strength across the four domains — AWS cautions against over-interpreting it, but it is enough to tell you whether Domain 1 or Domain 4 sank you. On a pass, the Credly digital badge email often arrives before the score report itself, and your account gains a 50 percent discount voucher toward a future exam plus access to AWS Certified benefits. The certification is valid for three years. You can renew it for another three by passing the current version of SAA-C03, or by passing the AWS Certified Solutions Architect - Professional exam, or extend it a year at a time through Certification Maintenance on AWS Skill Builder by completing selected courses and hands-on labs. Diary the expiry date the week you pass. On a fail, the 14-day waiting period is genuinely useful rather than an obstacle: spend it on the two domains your section classifications flagged rather than re-watching a full course, and take an Official Practice Exam under timed conditions before you rebook. Each attempt costs the full $150, and the most common reason for a second failure is that the candidate treated the first one as bad luck rather than as a diagnosis of how they read questions.'
  }
};

export default data;
