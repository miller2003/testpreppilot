// Flagship rewrite - Salesforce (pkg33): Platform Administrator, Platform Administrator II,
// Business Analyst, Platform App Builder.
// Every number was read on 2026-10-20 from Salesforce primary sources on help.salesforce.com:
//   Exam guides (articles 005298966, 005298969, 005298939, 005298964), Certification Exam Pricing (005298916),
//   Retake Policy (005298880), Reschedule and Cancellation Policy (005298917), Expiration Overview (005298919),
//   Schedule a Salesforce Certification Exam (005298999), Exam Day guide (005298827), Certification Overview (005298929).
// Not published in those sources and therefore omitted: cohort pass rates, results turnaround time.

const SF = 'Salesforce';
const SCHEDULE = 'https://help.salesforce.com/s/articleView?id=005298999&language=en_US&type=1';

export const programs = [
  {
    id: 'salesforce',
    body: SF,
    bodyUrl: 'https://trailhead.salesforce.com/credentials/certification-overview',
    about: `Salesforce certifies administrators, consultants, developers, architects, business analysts and marketers on its CRM platform. Exams are proctored by Pearson VUE, either at a testing center or online through Pearson OnVUE, and are booked through Trailhead Academy. Every Salesforce exam guide lists 60 scored questions plus up to 5 unscored items, a percentage passing score, and a maintenance badge on Trailhead that must be completed by its due date or the certification expires.`,
    registrationSteps: [
      {
        title: `Choose the exam and read its exam guide`,
        description: `Each Salesforce exam has an exam guide on help.salesforce.com that lists the weighted outline, passing score, prerequisite and the release the questions are aligned to. Read it first, because passing scores differ by exam: 68% for Platform Administrator, 65% for Platform Administrator II, 72% for Business Analyst and 73% for Platform App Builder.`,
        subSteps: [`Open the exam guide on Salesforce Help`, `Note the prerequisite, if any (Platform Administrator II requires Platform Administrator)`, `Check the release the questions align to`],
        duration: ``,
        note: `Exam guides are updated periodically, so re-check the guide before you book.`
      },
      {
        title: `Check your ID and legal name`,
        description: `Your government-issued photo ID must match your booking name exactly, and the name cannot be changed once you finish booking. Salesforce publishes a Certification Exam ID Requirements article listing the ID types Pearson VUE accepts; expired, copied and digital IDs are refused.`,
        subSteps: [`Compare the name on your ID with your Trailhead profile`, `Read the Exam ID Requirements article`],
        duration: ``,
        note: ``
      },
      {
        title: `Book through Trailhead Academy`,
        description: `Log in to Trailhead Academy at trailheadacademy.salesforce.com, select the exam, choose either the online-proctored option or the onsite testing-center option, pick a date and time (or a venue and slot), and check out. The registration fee is US$200 for Administrator, Business Analyst and Developer-category exams, plus applicable taxes.`,
        subSteps: [`Select the delivery type`, `Pick a date and time`, `Pay at checkout (taxes are collected by Pearson)`],
        duration: `About 10 minutes`,
        note: `If online proctoring is not offered on your account, you can test at a center or open a support case to have it enabled.`
      },
      {
        title: `Run the Pearson OnVUE system test (online delivery)`,
        description: `For online delivery, run the Pearson VUE system test at home.pearsonvue.com/salesforce/systemtest at least 24 hours before the exam and disable all VPN software before launching. Your room must be quiet and clear, and you must be alone.`,
        subSteps: [`Run the system test on the exact machine you will use`, `Review the Windows or Mac online-proctoring requirements`, `Close other applications and disable VPN`],
        duration: `At least 24 hours before the exam`,
        note: ``
      },
      {
        title: `Check in and take the exam`,
        description: `At a testing center, arrive at least 15 minutes early and bring a valid government-issued photo ID that matches your booking; phones, notes and watches stay out of the exam room. You must accept the Certification Program Agreement and Code of Conduct at the start of each exam, and no hard-copy or online references are allowed.`,
        subSteps: [`Present your ID`, `Accept the Code of Conduct`, `Answer 60 scored questions plus up to 5 unscored items in 105 minutes`],
        duration: `105 minutes of exam time`,
        note: ``
      },
      {
        title: `Complete the maintenance badge on schedule`,
        description: `After you pass, keep the certification active by completing its maintenance badge on Trailhead by the due date. The Platform Administrator and Business Analyst guides call for the badge once a year; the Platform Administrator II and Platform App Builder guides call for it three times a year. Missing a due date expires every certification that badge maintains.`,
        subSteps: [`Note the due date for your certification`, `Complete the release-specific badge on Trailhead`],
        duration: ``,
        note: `Expiry cascades: if Platform Administrator lapses, Platform Administrator II and other dependent certifications lapse with it.`
      }
    ],
    proctoring: `Proctored by Pearson VUE, either online through Pearson OnVUE (remote proctor and webcam) or at a Pearson VUE testing center. No hard-copy or online materials may be referenced. Arrive 15 minutes early at a center; online candidates run the system test 24 hours ahead, disable VPNs, and test alone in a clear room.`,
    retakePolicy: `Salesforce allows three attempts at the same exam in each release cycle. After a first failure you wait 24 hours, after a second failure you wait 14 days, and after a third failure you wait until the next release cycle begins. Retakes cost 50% of the original price: US$100 for Administrator, Business Analyst and Developer exams. Attempt counts reset when the next release cycle starts.`,
    recertification: `Certifications are maintained, not renewed by re-testing. You complete a release-specific maintenance badge on Trailhead by its due date: once a year for Platform Administrator and Business Analyst, three times a year for Platform Administrator II and Platform App Builder, per their exam guides. Salesforce Help does not list a maintenance fee. If a due date is missed the certification expires, and an expired certification is re-earned by taking its full exam; reinstatement requests are reviewed case by case and are not guaranteed.`,
    scoreReporting: `Each exam guide states a passing percentage (68%, 65%, 72% and 73% for the four exams in this group). The Salesforce Help pages used for this review do not state how quickly results are released or whether a numeric score is shown, so check the post-exam screen and your Trailhead credentials page.`,
    refundPolicy: `Reschedule or cancel at least 48 hours before a testing-center exam or at least 24 hours before an online exam; changes before that point are free in your Pearson account. A no-show without contacting Salesforce Help before the start time is charged the full exam fee and forfeits any voucher. Reschedules are not allowed beyond one year from the original purchase date.`,
    providersNote: `Salesforce publishes free Trailmixes and Trailhead modules for each exam, and each exam guide links to them, plus Trailhead Academy instructor-led courses such as CRT101 for the Platform Administrator exam. Salesforce lists a Platform Administrator Practice Test at US$20. Third-party question banks exist but are not official; check them against the current exam guide, because question content is aligned to a specific Salesforce release.`,
    comparison: {
      title: `Salesforce Administrator, Business Analyst and App Builder credentials compared`,
      columns: [`Credential`, `Prerequisite and recommended experience`, `Exam fee / retake`, `Passing score`],
      rows: [
        { label: `Platform Administrator`, values: [`No prerequisite; 6+ months as a Salesforce administrator`, `US$200 / US$100`, `68% (English)`] },
        { label: `Platform Administrator II`, values: [`Platform Administrator certification required`, `US$200 / US$100`, `65%`] },
        { label: `Business Analyst`, values: [`No prerequisite; 2 years business analysis and 2 years on Salesforce`, `US$200 / US$100`, `72%`] },
        { label: `Platform App Builder`, values: [`No prerequisite; 6 months to 1 year building applications`, `US$200 / US$100`, `73%`] }
      ]
    },
    orgFaqs: [
      {
        q: `Where do I register for a Salesforce certification exam?`,
        a: `You register through Trailhead Academy. Log in, select the exam, choose online-proctored (Pearson OnVUE) or onsite testing center (Pearson VUE), pick a time, and pay at checkout. Pearson VUE delivers both options. Run the Pearson system test at least 24 hours before an online exam and make sure the name on your ID matches your booking exactly.`
      },
      {
        q: `How many times can I retake a Salesforce exam?`,
        a: `You get three attempts at the same exam in each release cycle. You wait 24 hours after the first failure, 14 days after the second, and until the next release cycle begins after the third. Retakes are generally half price, which is US$100 for Administrator, Business Analyst and Developer exams. Attempt counts reset when a new release cycle starts.`
      },
      {
        q: `What happens if my Salesforce certification expires?`,
        a: `A missed Trailhead maintenance due date expires every certification that badge maintains, and dependent certifications expire with a prerequisite. An expired certification is re-earned by taking its full proctored exam again. Recently expired holders can open a support case asking for reinstatement, but Salesforce reviews those case by case and does not guarantee approval.`
      }
    ],
    sourceUrl: SCHEDULE,
    verified: true,
    confidence: `high`
  }
];

const RETAKE = `Salesforce allows three attempts per release cycle. You wait 24 hours after a first failure, 14 days after a second, and until the next release cycle begins after a third. Retakes cost US$100, which is 50% of the US$200 exam fee, and attempt counts reset with each new release cycle.`;
const CANCEL = `Cancel or reschedule at least 48 hours before a testing-center exam or at least 24 hours before an online-proctored exam to avoid a charge. A no-show without contacting Salesforce Help first is charged the full US$200 fee.`;

export const exams = [
  {
    slug: `salesforce-administrator`,
    body: SF,
    tagline: `The entry credential for people who configure and maintain a Salesforce org.`,
    description: `The Salesforce Certified Platform Administrator exam has 60 scored questions in 105 minutes and a passing score of 68% (English). Salesforce now titles the exam Platform Administrator, and its current guide, aligned to the Summer '25 release, weights eight sections: Configuration and Setup, Object Manager and Lightning App Builder, Sales and Marketing Applications, Service and Support Applications, Productivity and Collaboration, Data and Analytics Management, Automation and Agentforce. It suits people with about six months of hands-on administration, there is no prerequisite, and it is the gateway to Platform Administrator II and several consultant exams.`,
    quickAnswer: {
      summary: `The Salesforce Certified Platform Administrator exam is 60 scored multiple-choice questions plus up to 5 unscored items in 105 minutes, with a 68% passing score for the English version. It costs US$200 (US$100 to retake), has no prerequisite, and is booked through Trailhead Academy for Pearson VUE delivery online or at a center.`,
      advantages: [
        `No prerequisite, and the entry point to Platform Administrator II, which requires this certification.`,
        `The outline is public and weighted: Data and Analytics Management is largest at 17%, and Agentforce is 8%.`,
        `Exam fee is US$200 and a retake is US$100, with three attempts per release cycle.`,
        `Maintained by a Trailhead badge once a year rather than by re-sitting the exam.`
      ]
    },
    roadmap: [
      `Read the Platform Administrator exam guide and note the eight weighted sections`,
      `Work through the Prepare for Your Salesforce Platform Administrator Certification Trailmix in a free org`,
      `Book through Trailhead Academy, online or at a Pearson VUE center`,
      `Sit the 105-minute exam and review your result`,
      `Complete the yearly maintenance badge on Trailhead`
    ],
    prerequisites: `None. Salesforce lists 6+ months as a Salesforce Platform Administrator as the recommended experience.`,
    eligibility: `Anyone can register. The exam guide describes the candidate as someone with general knowledge of end-user features and admin configuration options, able to maintain an org, handle common business requirements and perform admin tasks using current features. Candidates must accept the Certification Program Agreement and Code of Conduct at the start of the exam.`,
    examMeta: {
      questions: `60 scored multiple-choice questions plus up to 5 unscored questions mixed in at random`,
      time: `105 minutes in total (no separate section timers)`,
      pass: `68% for the English exam (65% for the Japanese exam)`,
      fee: `US$200 registration plus applicable taxes; US$100 retake fee; JPY 30,000 / 15,000 in Japan`,
      format: `Multiple-choice, proctored, closed book (no hard-copy or online references), aligned to Summer '25`,
      admin: `Salesforce (exam guide, content, maintenance); Pearson VUE (delivery, online via OnVUE or at a testing center); booked through Trailhead Academy`
    },
    topics: [
      { name: `Configuration and Setup`, weight: `15%`, note: `Company settings, user setup, org security controls, sharing model, custom profiles and permission sets.` },
      { name: `Object Manager and Lightning App Builder`, weight: `15%`, note: `Standard object architecture, relationships, fields, page layouts, record types, quick and global actions.` },
      { name: `Sales and Marketing Applications`, weight: `10%`, note: `Leads, opportunities, Path, forecasting, territory management, lead assignment and campaigns.` },
      { name: `Service and Support Applications`, weight: `10%`, note: `Case management, queues, assignment rules, support processes, auto-response and escalation rules.` },
      { name: `Productivity and Collaboration`, weight: `10%`, note: `Tasks and events, Chatter, the Salesforce mobile app, AppExchange packages.` },
      { name: `Data and Analytics Management`, weight: `17%`, note: `Data import and export, duplicate and validation rules, reports, dashboards and their sharing impact.` },
      { name: `Automation`, weight: `15%`, note: `Choosing automation tools, Flow types, order of execution, approval processes.` },
      { name: `Agentforce`, weight: `8%`, note: `Agentforce capabilities and use cases, agent permissions, maintaining prompts and instructions in Agent Builder.` }
    ],
    examEssentials: [
      [`Delivery`, `Proctored by Pearson VUE: online (OnVUE) or at a testing center; no references allowed`],
      [`Question count`, `60 scored plus up to 5 unscored; unscored items do not affect the result`],
      [`Passing score`, `68% English, 65% Japanese; about 41 of 60 scored questions at 68%`],
      [`Retake rule`, `3 attempts per release cycle; wait 24 hours, then 14 days, then until the next cycle`],
      [`Reschedule window`, `48 hours before a center exam, 24 hours before an online exam`],
      [`Maintenance`, `Platform Administrator maintenance badge on Trailhead once a year; missing the due date expires the certification`],
      [`Name rule`, `Government photo ID must match the booking name exactly; it cannot be changed after booking`]
    ],
    timeline: [
      { stage: `Study with the Trailmix and a free org (suggested)`, duration: `6 to 8 weeks at roughly 80 to 120 hours` },
      { stage: `Booking through Trailhead Academy`, duration: `About 10 minutes; book at least 24 hours ahead to run the OnVUE system test` },
      { stage: `Exam appointment`, duration: `105 minutes, plus 15 minutes early check-in at a center` },
      { stage: `Maintenance badge after passing`, duration: `Once a year on the Trailhead due date` }
    ],
    costBreakdown: {
      items: [
        { item: `Exam registration fee (one attempt)`, fee: `US$200 plus applicable taxes` },
        { item: `Retake fee after a failed attempt`, fee: `US$100 plus applicable taxes` },
        { item: `Platform Administrator Practice Test (listed by Salesforce)`, fee: `US$20` },
        { item: `Trailhead Trailmix, modules and a free developer org`, fee: `Free` }
      ],
      total: `US$200 if you pass first time; US$300 with one retake`,
      footnote: `Fees as of October 2026 from Salesforce Certification Exam Pricing. Salesforce Help does not list a maintenance fee.`
    },
    difficulty: `Moderate`,
    audience: `New and working Salesforce administrators, career changers moving into CRM administration, and business users who manage an org.`,
    time: `Typically 6 to 8 weeks of study; the exam itself runs 105 minutes`,
    cost: `US$200 per attempt (US$100 retake)`,
    faqs: [
      { q: `How many questions are on the Salesforce Platform Administrator exam?`, a: `The Salesforce Certified Platform Administrator exam has 60 scored multiple-choice questions plus up to 5 unscored questions that are randomly mixed in. The unscored items do not affect your result and are not marked as unscored, so answer every question as if it counts. You have 105 minutes in total.` },
      { q: `What is the passing score for the Salesforce Administrator exam?`, a: `The passing score is 68% for the English exam, per the current Platform Administrator exam guide, and 65% for the Japanese exam. At 68% that is about 41 of the 60 scored questions. Older articles quoting 65% describe a previous version of the exam, so check the current guide before you rely on a number.` },
      { q: `Is the Salesforce Administrator exam hard?`, a: `The exam is moderately hard for candidates without hands-on experience and fair for working administrators. Salesforce recommends 6 or more months as an administrator, and questions are scenario-based. Salesforce publishes no pass rate, so no official figure exists. The largest section is Data and Analytics Management at 17%, and Automation, Configuration and Setup and Object Manager are 15% each.` },
      { q: `How much does the Salesforce Administrator certification cost?`, a: `The exam costs US$200 plus applicable taxes, and a retake costs US$100, according to Salesforce Certification Exam Pricing. There is no prerequisite certification fee. Salesforce Help does not list a maintenance fee, and Trailhead learning content and a free developer org cost nothing. Salesforce lists a Platform Administrator Practice Test at US$20.` },
      { q: `How long is the Salesforce Administrator certification valid?`, a: `The certification stays valid as long as you complete the Platform Administrator maintenance badge on Trailhead once a year, per the exam guide. If you miss the due date the certification expires, and Platform Administrator II, which depends on it, expires too. An expired certification is re-earned by passing the full exam again.` },
      { q: `How many times can I retake the Salesforce Administrator exam?`, a: RETAKE },
      { q: `Can I take the Salesforce Administrator exam online?`, a: `Yes. You can take the exam online through Pearson OnVUE from home or an office, or at a Pearson VUE testing center. Book through Trailhead Academy, run the Pearson system test at least 24 hours ahead, disable VPN software, and use a quiet room alone. ` + CANCEL },
      { q: `What does the new Agentforce section on the Administrator exam cover?`, a: `Agentforce is 8% of the current Platform Administrator exam. It covers Agentforce capabilities and use cases, including when AI is appropriate, security, and troubleshooting agent permissions, plus maintaining prompts and instructions in Agent Builder with light testing and conversation preview. It is the smallest section, but it is new, so study it deliberately.` }
    ],
    summaryPoints: [
      `The Salesforce Platform Administrator exam has 60 scored questions plus up to 5 unscored in 105 minutes.`,
      `The English passing score is 68%, which is about 41 of 60 scored questions.`,
      `The exam fee is US$200 and a retake is US$100, with 3 attempts per release cycle.`,
      `Eight weighted sections: Data and Analytics Management leads at 17%, Agentforce is 8%.`,
      `Maintain the credential with the Trailhead maintenance badge once a year.`
    ],
    relatedSlugs: [`salesforce-advanced-administrator`, `salesforce-platform-app-builder`, `salesforce-sales-cloud-consultant`, `salesforce-business-analyst`],
    sourceUrl: `https://help.salesforce.com/s/articleView?id=005298966&language=en_US&type=1`,
    reviewed: `2026-10`,
    confidence: `high`
  },
  {
    slug: `salesforce-advanced-administrator`,
    body: SF,
    tagline: `The second-tier administrator exam for security, complex automation and deployment.`,
    description: `The Salesforce Certified Platform Administrator II exam has 60 scored questions in 105 minutes and a passing score of 65%. It requires the Platform Administrator certification first and is the credential the catalog lists as Advanced Administrator. Seven weighted sections push past setup into Security and Access (20%), Process Automation (20%), Objects and Applications (19%), Data and Analytics Management (13%), Cloud Applications (11%), Auditing and Monitoring (10%) and Environment Management and Deployment (7%). Employers use it to separate senior administrators from entry-level ones.`,
    quickAnswer: {
      summary: `Platform Administrator II is a 60-question, 105-minute proctored exam with a 65% pass mark and up to 5 extra unscored items. Only holders of the Platform Administrator certification can sit it. It costs US$200 (US$100 to retake), tests sharing, security and complex Flow scenarios, and is maintained by a Trailhead badge three times a year.`,
      advantages: [
        `Signals senior administrator depth: Security and Access and Process Automation are 20% each.`,
        `The pass mark is 65%, the lowest of the four Salesforce exams in this group.`,
        `The outline names tools directly: change sets, sandboxes, debug logs, Setup Audit Trail and Data Loader.`,
        `Builds on Platform Administrator, so knowledge and the Trailhead account carry straight over.`
      ]
    },
    roadmap: [
      `Confirm you hold the active Platform Administrator certification`,
      `Read the Platform Administrator II exam guide and its seven weighted sections`,
      `Practice sharing, permission and Flow scenarios in a free org`,
      `Book through Trailhead Academy and sit the 105-minute exam`,
      `Complete the Platform Administrator II maintenance badge on its Trailhead due date`
    ],
    prerequisites: `Salesforce Certified Platform Administrator certification, per the exam guide. If that certification expires, Platform Administrator II expires with it.`,
    eligibility: `Only holders of an active Platform Administrator certification should register. The guide describes the exam for certified administrators who manage configuration well, know best practices, and can use advanced features to solve business problems. Accept the Certification Program Agreement and Code of Conduct at the start of the exam.`,
    examMeta: {
      questions: `60 scored multiple-choice and multiple-select questions plus up to 5 unscored questions`,
      time: `105 minutes in total (no separate section timers)`,
      pass: `65%, which is 39 of 60 scored questions`,
      fee: `US$200 registration plus applicable taxes; US$100 retake fee; JPY 30,000 / 15,000 in Japan`,
      format: `Multiple-choice and multiple-select, proctored, closed book; exam guide version aligned to Summer '22`,
      admin: `Salesforce (exam guide, maintenance); Pearson VUE (delivery, online via OnVUE or at a testing center); booked through Trailhead Academy`
    },
    topics: [
      { name: `Security and Access`, weight: `20%`, note: `Sharing model, controlled by parent, hierarchy access, profiles vs permission sets, authentication, person accounts and Territory Management.` },
      { name: `Objects and Applications`, weight: `19%`, note: `Master-detail, lookup and junction objects, record types, Schema Builder, App Manager, Dynamic Forms, Lightning App Builder.` },
      { name: `Auditing and Monitoring`, weight: `10%`, note: `Debug logs, Setup Audit Trail, sensitive data in sandboxes, reviewing security settings.` },
      { name: `Cloud Applications`, weight: `11%`, note: `Products, price books, quotes, forecasting vs territories, Knowledge, entitlements, Omni-Channel, Experience Cloud.` },
      { name: `Data and Analytics Management`, weight: `13%`, note: `Duplicate management, custom report types, joined reports, dynamic dashboards, big objects, Data Loader, external IDs.` },
      { name: `Environment Management and Deployment`, weight: `7%`, note: `Change sets, sandboxes, managed and unmanaged packages.` },
      { name: `Process Automation`, weight: `20%`, note: `Choosing among declarative tools, troubleshooting automation, limits of each tool, order of execution.` }
    ],
    examEssentials: [
      [`Prerequisite`, `Salesforce Certified Platform Administrator certification required`],
      [`Question count`, `60 scored plus up to 5 unscored, in 105 minutes`],
      [`Passing score`, `65%, equal to 39 of 60 scored questions`],
      [`Retake rule`, `3 attempts per release cycle; wait 24 hours, then 14 days, then until the next cycle`],
      [`Maintenance`, `Trailhead maintenance badge three times a year per the exam guide; missing a due date expires the certification`],
      [`Dependency`, `If Platform Administrator expires, Platform Administrator II expires too`],
      [`References`, `None allowed, including hard-copy or online materials`]
    ],
    timeline: [
      { stage: `Hold or earn Platform Administrator first`, duration: `Required before registering` },
      { stage: `Study scenarios in a practice org (suggested)`, duration: `6 to 8 weeks at roughly 80 to 120 hours` },
      { stage: `Exam appointment`, duration: `105 minutes, plus 15 minutes early check-in at a center` },
      { stage: `Maintenance badge after passing`, duration: `Three times a year on the Trailhead due dates` }
    ],
    costBreakdown: {
      items: [
        { item: `Exam registration fee (one attempt)`, fee: `US$200 plus applicable taxes` },
        { item: `Retake fee after a failed attempt`, fee: `US$100 plus applicable taxes` },
        { item: `Prerequisite Platform Administrator exam, if not yet held`, fee: `US$200` },
        { item: `Trailmix, Trailhead modules and a free developer org`, fee: `Free` }
      ],
      total: `US$200 if you pass first time; US$300 with one retake (add US$200 if you still need Platform Administrator)`,
      footnote: `Fees as of October 2026 from Salesforce Certification Exam Pricing. Salesforce Help does not list a maintenance fee.`
    },
    difficulty: `Challenging`,
    audience: `Certified administrators with a year or more of org experience who handle sharing design, complex automation, data quality and sandbox deployments.`,
    time: `Typically 6 to 8 weeks of study after earning Platform Administrator`,
    cost: `US$200 per attempt (US$100 retake)`,
    faqs: [
      { q: `What is the passing score for the Salesforce Platform Administrator II exam?`, a: `The passing score is 65%, which equals 39 of the 60 scored questions, according to the Platform Administrator II exam guide. Up to 5 additional unscored questions are mixed in and do not count. The guide version is aligned to the Summer '22 release, so confirm the current figure on Salesforce Help before booking.` },
      { q: `Is the Salesforce Advanced Administrator exam hard?`, a: `It is harder than the base Administrator exam because questions are scenario-based and assume working-administrator depth. Security and Access and Process Automation together make up 40% of the outline. Salesforce publishes no pass rate, so no official difficulty statistic exists. Candidates who have only studied definitions struggle with sharing edge cases and order-of-execution questions.` },
      { q: `Do I need Platform Administrator before Platform Administrator II?`, a: `Yes. The exam guide lists the Salesforce Certified Platform Administrator certification as the prerequisite. Salesforce also ties the two together after you pass: if Platform Administrator expires because a maintenance due date was missed, Platform Administrator II expires with it, and each must be re-earned through its own full exam.` },
      { q: `How many questions are on the Platform Administrator II exam?`, a: `The exam has 60 multiple-choice and multiple-select scored questions, plus up to 5 unscored questions that are randomly placed and do not affect your result. You have 105 minutes. No hard-copy or online references are allowed. That works out to about 1.75 minutes per scored question, with scenario questions taking longer to read.` },
      { q: `How much does the Platform Administrator II exam cost?`, a: `Registration costs US$200 plus applicable taxes and a retake costs US$100, per Salesforce Certification Exam Pricing as of October 2026. If you do not yet hold Platform Administrator, add its US$200 exam fee. Salesforce Help does not list a maintenance fee, and Trailhead study content and a free developer org are free.` },
      { q: `How often must I maintain Platform Administrator II?`, a: `The exam guide says to complete the Platform Administrator II maintenance badge on Trailhead three times a year, and that missing the due date expires the certification. Because it depends on Platform Administrator, you must also keep that certification current. Check Trailhead for the exact release-specific due dates each cycle.` },
      { q: `What are the biggest topics on the Platform Administrator II exam?`, a: `Security and Access and Process Automation are the largest, at 20% each, followed by Objects and Applications at 19%. Data and Analytics Management is 13%, Cloud Applications 11%, Auditing and Monitoring 10%, and Environment Management and Deployment 7%. Start with sharing model, profiles versus permission sets, and Flow order of execution.` },
      { q: `How many times can I retake Platform Administrator II?`, a: RETAKE }
    ],
    summaryPoints: [
      `Platform Administrator II has 60 scored questions plus up to 5 unscored in 105 minutes.`,
      `The passing score is 65%, which is 39 of 60 scored questions.`,
      `Security and Access and Process Automation are 20% each; Objects and Applications is 19%.`,
      `It requires the Platform Administrator certification and expires if that one expires.`,
      `The fee is US$200 per attempt and US$100 per retake.`
    ],
    relatedSlugs: [`salesforce-administrator`, `salesforce-sales-cloud-consultant`, `salesforce-service-cloud-consultant`, `salesforce-platform-app-builder`],
    sourceUrl: `https://help.salesforce.com/s/articleView?id=005298969&language=en_US&type=1`,
    reviewed: `2026-10`,
    confidence: `high`
  },
  {
    slug: `salesforce-business-analyst`,
    body: SF,
    tagline: `The credential for analysts who gather requirements and write user stories for Salesforce projects.`,
    description: `The Salesforce Certified Business Analyst exam has 60 scored questions in 105 minutes and a passing score of 72%, the second-highest pass mark among Salesforce's administrator-track exams. It tests analysis technique rather than configuration: Collaboration with Stakeholders (23%), Requirements (18%), User Stories (18%), Customer Discovery (17%), Business Process Mapping (12%) and Development Support and User Acceptance (12%). Salesforce recommends 2 years as a business analyst plus 2 years on the platform, and no prerequisite certification has been needed since May 2, 2023.`,
    quickAnswer: {
      summary: `Business Analyst is a 60-question, 105-minute exam with a 72% pass mark and up to 5 unscored items. It costs US$200 (US$100 retake) and has no prerequisite. Content is six analysis domains weighted from 12% to 23%, and the credential is maintained with a Trailhead badge once a year.`,
      advantages: [
        `Tests requirements, user stories and UAT rather than clicks, so it fits analysts and product owners as well as admins.`,
        `No prerequisite since May 2, 2023, so it can be a first Salesforce credential.`,
        `The six-domain outline is public with exact percentages that add to 100%.`,
        `Salesforce lists business analyst, product owner and business systems analyst among typical roles.`
      ]
    },
    roadmap: [
      `Read the Business Analyst exam guide and its candidate profile`,
      `Complete the Salesforce Business Analyst Certification Prep module and Trailmix`,
      `Practice writing user stories with acceptance criteria and mapping a process`,
      `Book through Trailhead Academy and sit the 105-minute exam`,
      `Complete the Business Analyst maintenance badge each year`
    ],
    prerequisites: `None. The Platform Administrator prerequisite was removed effective May 2, 2023. Recommended: 2 years of business analyst work and 2 years on the Salesforce Platform.`,
    eligibility: `Open to anyone, though the guide targets business analysts who understand business needs, gather requirements and work with stakeholders on Salesforce solutions. Salesforce says you are not expected to know change management, project management, ROI, custom code, technical solution design or legal and compliance issues.`,
    examMeta: {
      questions: `60 scored multiple-choice questions plus up to 5 unscored questions mixed in at random`,
      time: `105 minutes in total (no separate section timers)`,
      pass: `72%, which is about 44 of 60 scored questions`,
      fee: `US$200 registration plus applicable taxes; US$100 retake fee; JPY 30,000 / 15,000 in Japan`,
      format: `Scenario-based multiple-choice, proctored, closed book; aligned to Winter '25`,
      admin: `Salesforce (exam guide, maintenance); Pearson VUE (delivery, online via OnVUE or at a testing center); booked through Trailhead Academy`
    },
    topics: [
      { name: `Customer Discovery`, weight: `17%`, note: `Scoping a project, assessing the current state, BA roles across the implementation lifecycle, matching Salesforce capabilities to needs.` },
      { name: `Collaboration with Stakeholders`, weight: `23%`, note: `Planning discovery, trusted-advisor relationships, choosing elicitation techniques, managing competing priorities.` },
      { name: `Business Process Mapping`, weight: `12%`, note: `Scoping complex processes, documenting current and future state, version-controlled storage.` },
      { name: `Requirements`, weight: `18%`, note: `Distinguishing scope, requirements and user stories; validating and prioritizing requirements.` },
      { name: `User Stories`, weight: `18%`, note: `Components of a user story and acceptance criteria that are ready for development.` },
      { name: `Development Support and User Acceptance`, weight: `12%`, note: `Validating delivery against requirements and supporting user acceptance testing.` }
    ],
    examEssentials: [
      [`Prerequisite`, `None since May 2, 2023; recommended 2 years business analysis plus 2 years on Salesforce`],
      [`Question count`, `60 scored plus up to 5 unscored, in 105 minutes`],
      [`Passing score`, `72%, about 44 of 60 scored questions`],
      [`Retake rule`, `3 attempts per release cycle; wait 24 hours, then 14 days, then until the next cycle`],
      [`Maintenance`, `Business Analyst maintenance badge on Trailhead once a year; a missed due date expires the certification`],
      [`Largest domain`, `Collaboration with Stakeholders at 23% of the outline`],
      [`References`, `None allowed, including hard-copy or online materials`]
    ],
    timeline: [
      { stage: `Cert Prep module and Trailmix (suggested)`, duration: `6 to 8 weeks at roughly 60 to 100 hours` },
      { stage: `Booking through Trailhead Academy`, duration: `About 10 minutes; reschedule free up to 24 hours (online) or 48 hours (center) ahead` },
      { stage: `Exam appointment`, duration: `105 minutes, plus 15 minutes early check-in at a center` },
      { stage: `Maintenance badge after passing`, duration: `Once a year on the Trailhead due date` }
    ],
    costBreakdown: {
      items: [
        { item: `Exam registration fee (one attempt)`, fee: `US$200 plus applicable taxes` },
        { item: `Retake fee after a failed attempt`, fee: `US$100 plus applicable taxes` },
        { item: `Cert Prep module and Trailmix on Trailhead`, fee: `Free` }
      ],
      total: `US$200 if you pass first time; US$300 with one retake`,
      footnote: `Fees as of October 2026 from Salesforce Certification Exam Pricing; the Business Analyst FAQ lists the registration price as US$200. Salesforce Help does not list a maintenance fee.`
    },
    difficulty: `Moderate to challenging`,
    audience: `Business analysts, business systems analysts, product owners, CRM managers and consultants who define requirements for Salesforce projects.`,
    time: `Typically 6 to 8 weeks of study`,
    cost: `US$200 per attempt (US$100 retake)`,
    faqs: [
      { q: `What is the passing score for the Salesforce Business Analyst exam?`, a: `The passing score is 72%, per the Salesforce Certified Business Analyst exam guide, which is about 44 of the 60 scored questions. Up to 5 extra unscored questions are randomly mixed in and do not affect your result. The guide is aligned to the Winter '25 release, so check Salesforce Help for the current figure before you book.` },
      { q: `Is the Salesforce Business Analyst exam hard?`, a: `It is demanding because the pass mark is 72% and questions are scenarios about stakeholders, requirements and user stories, not menu clicks. Salesforce publishes no pass rate. Candidates with two years of business analysis experience tend to find the reasoning familiar; those without it should rehearse writing acceptance criteria and choosing elicitation techniques. The 23% Collaboration with Stakeholders domain is the biggest.` },
      { q: `Do I need Platform Administrator to take the Business Analyst exam?`, a: `No. Salesforce removed the Platform Administrator prerequisite effective May 2, 2023, and the current exam guide lists no prerequisite. Salesforce does recommend 2 years of business analyst experience, including owning and delivering process improvements, and 2 years on the Salesforce Platform.` },
      { q: `How many questions are on the Salesforce Business Analyst exam?`, a: `The exam has 60 scored multiple-choice questions plus up to 5 unscored questions, in 105 minutes. The unscored items are placed randomly to gather data and are not identified. That gives roughly 1.75 minutes per scored item. No hard-copy or online materials may be referenced during the proctored exam.` },
      { q: `What topics are on the Salesforce Business Analyst exam?`, a: `Six domains: Collaboration with Stakeholders 23%, Requirements 18%, User Stories 18%, Customer Discovery 17%, Business Process Mapping 12%, and Development Support and User Acceptance 12%. Salesforce says it does not expect you to know change management, project management, ROI, custom code or technical solution design.` },
      { q: `How much does the Salesforce Business Analyst certification cost?`, a: `The exam costs US$200 plus applicable taxes, and a retake costs US$100, per Salesforce Certification Exam Pricing in October 2026. The Business Analyst FAQ confirms the US$200 registration price. Trailhead's Business Analyst Certification Prep module and Trailmix are free, and Salesforce Help lists no maintenance fee.` },
      { q: `How do I keep the Business Analyst certification active?`, a: `Complete the Salesforce Certified Business Analyst maintenance badge on Trailhead once a year, per the exam guide. If you miss the due date, the certification expires, and you must pass the full exam again to re-earn it. Salesforce reviews reinstatement requests for recently expired certifications case by case without a guarantee.` },
      { q: `How many times can I retake the Salesforce Business Analyst exam?`, a: RETAKE }
    ],
    summaryPoints: [
      `The Business Analyst exam has 60 scored questions plus up to 5 unscored in 105 minutes.`,
      `The passing score is 72%, about 44 of 60 scored questions.`,
      `Collaboration with Stakeholders is the largest domain at 23%; Requirements and User Stories are 18% each.`,
      `There is no prerequisite since May 2, 2023; the fee is US$200 and a retake is US$100.`,
      `Maintain it with a Trailhead badge once a year.`
    ],
    relatedSlugs: [`salesforce-administrator`, `salesforce-platform-app-builder`, `salesforce-sales-cloud-consultant`, `salesforce-solution-architect`],
    sourceUrl: `https://help.salesforce.com/s/articleView?id=005298939&language=en_US&type=1`,
    reviewed: `2026-10`,
    confidence: `high`
  },
  {
    slug: `salesforce-platform-app-builder`,
    body: SF,
    tagline: `The declarative-build credential: data models, Flow, UI and deployment without code.`,
    description: `The Salesforce Certified Platform App Builder exam has 60 scored questions in 105 minutes and a passing score of 73%, the highest of the four exams in this group. Business Logic and Process Automation is the largest section at 32% (formulas, roll-up summary fields, validation rules, Flow Builder and approvals), followed by Data Modeling and Management (20%), Salesforce Fundamentals (18%), User Interface (17%) and App Deployment (13%). The guide is aligned to the SU '26 release and targets people with 6 months to 1 year of building applications.`,
    quickAnswer: {
      summary: `Platform App Builder is a 60-question, 105-minute exam with a 73% pass mark, plus up to 5 unscored items. It has no prerequisite, costs US$200 (US$100 retake) and is maintained by a Trailhead badge three times a year. Roughly one third of the exam is Flow, formulas, validation rules and other business logic.`,
      advantages: [
        `The 32% Business Logic and Process Automation section rewards hands-on Flow, formula and validation-rule skill.`,
        `No prerequisite, so builders who skipped Platform Administrator can sit it directly.`,
        `The guide is aligned to the recent SU '26 release, so its content is current.`,
        `Salesforce lists platform admins, declarative builders, business analysts and architects as primary roles.`
      ]
    },
    roadmap: [
      `Read the Platform App Builder exam guide and its five weighted sections`,
      `Work through the Prepare for Your Salesforce Platform App Builder Certification Trailmix`,
      `Complete the Object Relationships, Formulas and Flow Fundamentals superbadge units`,
      `Book through Trailhead Academy and sit the 105-minute exam`,
      `Complete the maintenance badge three times a year`
    ],
    prerequisites: `None. Salesforce describes the typical candidate as having 6 months to 1 year of experience building applications on the platform or a similar one.`,
    eligibility: `Open to anyone. The guide describes someone who can design, build and deploy custom applications with declarative tools and manage data models, application security, business logic and process automation. Primary roles are experienced Platform Administrator, declarative application builder, business analyst, product or ISV developer and Salesforce architect.`,
    examMeta: {
      questions: `60 scored multiple-choice questions plus up to 5 unscored questions mixed in at random`,
      time: `105 minutes in total (no separate section timers)`,
      pass: `73%, which is about 44 of 60 scored questions`,
      fee: `US$200 registration plus applicable taxes; US$100 retake fee; JPY 30,000 / 15,000 in Japan`,
      format: `Multiple-choice, proctored, closed book; questions aligned to SU '26`,
      admin: `Salesforce (exam guide, maintenance); Pearson VUE (delivery, online via OnVUE or at a testing center); booked through Trailhead Academy`
    },
    topics: [
      { name: `Salesforce Fundamentals`, weight: `18%`, note: `Declarative vs programmatic boundaries, AgentExchange, object, record and field access, sharing, reports and dashboards.` },
      { name: `Data Modeling and Management`, weight: `20%`, note: `Choosing a data model, relationship types, field data types, importing and exporting data.` },
      { name: `Business Logic and Process Automation`, weight: `32%`, note: `Formula fields, roll-up summary fields, validation rules, Flow Builder, Flow approvals, Agentforce for automation.` },
      { name: `User Interface`, weight: `17%`, note: `UI customization, buttons, links and actions, declarative Lightning components, mobile actions and layouts.` },
      { name: `App Deployment`, weight: `13%`, note: `Application lifecycle management, sandbox types, change sets, packages and deployment plans.` }
    ],
    examEssentials: [
      [`Prerequisite`, `None; recommended 6 months to 1 year building applications`],
      [`Question count`, `60 scored plus up to 5 unscored, in 105 minutes`],
      [`Passing score`, `73%, about 44 of 60 scored questions`],
      [`Retake rule`, `3 attempts per release cycle; wait 24 hours, then 14 days, then until the next cycle`],
      [`Maintenance`, `Platform App Builder maintenance badge on Trailhead three times a year; a missed due date expires the certification`],
      [`Largest section`, `Business Logic and Process Automation at 32%`],
      [`References`, `None allowed, including hard-copy or online materials`]
    ],
    timeline: [
      { stage: `Trailmix and superbadge units in a free org (suggested)`, duration: `6 to 8 weeks of study` },
      { stage: `Booking through Trailhead Academy`, duration: `About 10 minutes; run the OnVUE system test 24 hours ahead for online delivery` },
      { stage: `Exam appointment`, duration: `105 minutes, plus 15 minutes early check-in at a center` },
      { stage: `Maintenance badge after passing`, duration: `Three times a year on the Trailhead due dates` }
    ],
    costBreakdown: {
      items: [
        { item: `Exam registration fee (one attempt)`, fee: `US$200 plus applicable taxes` },
        { item: `Retake fee after a failed attempt`, fee: `US$100 plus applicable taxes` },
        { item: `Trailmix, superbadge units and a free developer org`, fee: `Free` }
      ],
      total: `US$200 if you pass first time; US$300 with one retake`,
      footnote: `Fees as of October 2026 from Salesforce Certification Exam Pricing. Salesforce Help does not list a maintenance fee.`
    },
    difficulty: `Moderate to challenging`,
    audience: `Declarative builders, administrators moving toward solution design, business analysts and developers who build apps with clicks rather than code.`,
    time: `Typically 6 to 8 weeks of study`,
    cost: `US$200 per attempt (US$100 retake)`,
    faqs: [
      { q: `What is the passing score for the Salesforce Platform App Builder exam?`, a: `The passing score is 73%, per the current Platform App Builder exam guide, which is about 44 of 60 scored questions. Up to 5 extra unscored questions are mixed in and do not count. Older sources quoting 63% or 68% describe earlier versions. The guide aligns the exam to the SU '26 release.` },
      { q: `How many questions are on the Platform App Builder exam?`, a: `The exam has 60 scored multiple-choice questions plus up to 5 unscored questions, and you have 105 minutes. The unscored items are randomly placed to gather performance data and do not affect your result. No hard-copy or online references are allowed, so practice Flow, formulas and validation rules until you do not need to look anything up.` },
      { q: `Is the Salesforce Platform App Builder exam hard?`, a: `It is challenging because the pass mark is 73% and 32% of the exam is business logic: formulas, roll-up summaries, validation rules and Flow. Salesforce publishes no pass rate. Candidates with 6 to 12 months of building experience tend to find it fair, while people who have only read about Flow struggle with the scenario questions.` },
      { q: `Do I need Platform Administrator before Platform App Builder?`, a: `No. The Platform App Builder exam guide lists no prerequisite. Salesforce recommends 6 months to 1 year of experience building applications on the platform or a similar one, and lists experienced Platform Administrators as one of the primary audiences, but holding that certification is not required to register.` },
      { q: `What topics are on the Platform App Builder exam?`, a: `Five sections: Business Logic and Process Automation 32%, Data Modeling and Management 20%, Salesforce Fundamentals 18%, User Interface 17% and App Deployment 13%. Business logic covers formula fields, roll-up summary fields, validation rules, Flow Builder, Flow approvals and using Agentforce to automate processes.` },
      { q: `How much does the Platform App Builder certification cost?`, a: `The exam costs US$200 plus applicable taxes, and a retake costs US$100, per Salesforce Certification Exam Pricing as of October 2026. Trailhead's Trailmix, superbadge units and a free developer org cost nothing, and Salesforce Help does not list a maintenance fee for keeping the certification active.` },
      { q: `How often does Platform App Builder need maintenance?`, a: `The exam guide says to complete the Platform App Builder maintenance badge on Trailhead three times a year to keep the certification active. If a due date is missed, the certification expires and you must pass the full exam again. Reinstatement requests are reviewed case by case and are not guaranteed.` },
      { q: `How many times can I retake the Platform App Builder exam?`, a: RETAKE }
    ],
    summaryPoints: [
      `Platform App Builder has 60 scored questions plus up to 5 unscored in 105 minutes.`,
      `The passing score is 73%, about 44 of 60 scored questions.`,
      `Business Logic and Process Automation is 32%, Data Modeling and Management 20%, Fundamentals 18%.`,
      `There is no prerequisite; the fee is US$200 and a retake is US$100.`,
      `Maintain it with a Trailhead badge three times a year.`
    ],
    relatedSlugs: [`salesforce-administrator`, `salesforce-platform-developer-i`, `salesforce-advanced-administrator`, `salesforce-business-analyst`],
    sourceUrl: `https://help.salesforce.com/s/articleView?id=005298964&language=en_US&type=1`,
    reviewed: `2026-10`,
    confidence: `high`
  }
];

export default { programs, exams };
