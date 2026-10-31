// Flagship rewrite - CompTIA (pkg23): A+, AI Essentials, Cloud+, CySA+, Data+, ITF+ (retired), Linux+.
// Primary sources read 2026-10-20:
//   comptia.org certification pages: A+ Core 1 V15 and Core 2 V15 (220-1201 / 220-1202), Cloud+ (CV0-004),
//   CySA+ V4 (CS0-004), Data+ (DA0-002), Linux+ (XK0-006), Tech+ (FC0-U71), AI Essentials,
//   CompTIA Certification Retake Policy, Continuing Education renewal-fee and CEU pages, CompTIA FAQ and Tech+ FAQ blogs,
//   CompTIA student direct pricing sheet, CompTIA help-center voucher articles.
// Not published by CompTIA in the sources read (stated as such, never estimated): full-price voucher amounts per exam,
// pass rates, AI Essentials assessment question count and passing score, exact ITF+ last-exam date.

const BODY = 'CompTIA';
const RETAKE_URL = 'https://www.comptia.org/en-us/resources/test-policies/comptia-certification-retake-policy/';
const CE_URL = 'https://www.comptia.org/en-us/resources/ce/learn/continuing-education-renewal-fees/';

const RETAKE = 'CompTIA allows an immediate retake after a first failed attempt, but you must wait at least 14 calendar days before a third or later attempt. You pay the full exam price every time, because CompTIA offers no free retests or retake discounts, although bundles sold with Retake Assurance include a second voucher. A passed exam cannot be retaken under the same exam code.';
const PRICE_NOTE = 'CompTIA sets voucher prices in its store and publishes no static price table; its FAQ says exam vouchers range from $130 to $480 depending on the exam.';

export const programs = [
  {
    id: 'comptia',
    body: BODY,
    bodyUrl: 'https://www.comptia.org',
    about: 'CompTIA is the Computing Technology Industry Association, a vendor-neutral IT certification body whose exams are delivered by Pearson VUE at test centers and through online proctoring (OnVUE). Its catalog runs from the Tech+ and AI Essentials entry credentials through A+, Network+ and Security+ to advanced exams such as CySA+, Linux+, Cloud+ and SecurityX. Most professional CompTIA certifications sit in a Continuing Education (CE) program with a three-year renewal cycle, and the A+ exams are listed against U.S. DoD 8140 work roles.',
    registrationSteps: [
      {
        title: 'Choose the exam and the current version',
        description: 'Match the exam code to the current series on the CompTIA certification page before you buy anything: A+ is 220-1201 and 220-1202, Cloud+ is CV0-004, CySA+ is CS0-004, Data+ is DA0-002, Linux+ is XK0-006 and Tech+ is FC0-U71. Vouchers and study products are tied to exam versions, and a retiring version stops being offered on a published date.',
        subSteps: ['Open the certification page on comptia.org', 'Read the exam series code, launch date and estimated retirement', 'Download the free exam objectives PDF'],
        duration: '',
        note: 'A+ requires both Core exams from the same version; mixing versions is not allowed.'
      },
      {
        title: 'Create a CompTIA account and buy a voucher',
        description: 'Sign in or create an account at comptia.org and buy an exam voucher in the CompTIA Store. Bundles pair CertMaster training with a voucher and can include Retake Assurance. Students who verify through SheerID get CompTIA student direct pricing, which for example lists the Cloud+ voucher at $189 and A+ at $122 per exam as of the 2025-2026 sheet.',
        subSteps: ['Select the exam and the voucher-only or bundle option', 'Pay in the CompTIA Store', 'Copy the voucher code from your account'],
        duration: 'Same day',
        note: 'Vouchers expire 12 months from the purchase date and are non-refundable.'
      },
      {
        title: 'Schedule with Pearson VUE',
        description: 'Pearson VUE delivers every CompTIA certification exam. Enter your voucher code in the Pearson VUE scheduling flow and choose a test center or OnVUE online proctoring, then pick a date. Reschedule at least 24 hours before an in-person appointment or the exam fee can be forfeited; check the Pearson VUE confirmation for the online rule.',
        subSteps: ['Open the CompTIA page on pearsonvue.com', 'Choose test center or OnVUE', 'Run the OnVUE system test if testing at home'],
        duration: 'Usually same week',
        note: 'Your Pearson VUE profile name must match your government ID exactly.'
      },
      {
        title: 'Check in with identification',
        description: 'Bring valid government-issued photo identification that matches your registration name, as set out in the CompTIA Candidate ID Policy. Online candidates photograph their ID and room during OnVUE check-in and need a webcam, a clear desk and a private room.',
        subSteps: ['Arrive or begin check-in about 30 minutes early', 'Store phones, notes and watches as instructed', 'Accept the candidate agreement on screen'],
        duration: 'About 30 minutes',
        note: ''
      },
      {
        title: 'Take the exam and read the result',
        description: 'Exams are computer-based. Most CompTIA professional exams contain multiple-choice and performance-based questions, are scored on a 100 to 900 scale, and show a pass or fail on screen at the end. Passing scores differ by exam, from 650 for Tech+ to 750 for Cloud+ and CySA+.',
        subSteps: ['Use the on-screen flag and review tools', 'Submit before the timer ends', 'Review your domain-level score report'],
        duration: '60 to 165 minutes depending on the exam',
        note: ''
      },
      {
        title: 'Claim the credential and track renewal',
        description: 'Passing exams appear in your CompTIA account, where you can download the certificate and digital badge. CE-program certifications such as A+, Data+, Linux+, Cloud+ and CySA+ expire three years after you pass unless you submit CEUs and pay the CE fee before the expiration date.',
        subSteps: ['Open your CompTIA certification record', 'Note the expiration date', 'Start logging CEU activities'],
        duration: 'Within a few days',
        note: 'Tech+ is not part of the paid CE fee schedule: CompTIA lists its CE fee as $0.'
      }
    ],
    proctoring: 'Exams are delivered by Pearson VUE at test centers or online through OnVUE with a live remote proctor. OnVUE needs a webcam, microphone, stable internet, a clear desk and a private room, and CompTIA publishes online-proctored exam guidelines and a Candidate ID Policy.',
    retakePolicy: 'No waiting period applies between the first and second attempt. A third or later attempt requires at least 14 calendar days after your previous attempt. Every attempt costs the full exam price, and CompTIA offers no free retests. If you have passed an exam you cannot retake it under the same exam code without CompTIA consent; you wait for a new series. Beta exams can be taken once.',
    recertification: 'Professional CompTIA certifications run on a three-year CE cycle. Required CEUs and the total CE fee for that cycle (as of October 2026): A+ 20 CEUs and $75, Data+ 20 CEUs and $75, Linux+ 50 CEUs and $150, Cloud+ 50 CEUs and $150, CySA+ 60 CEUs and $150. CE tokens cost $25 or $50 and do not expire. Passing the current exam version or a higher-level CompTIA certification can also renew. Tech+ and its predecessor ITF+ are good for life.',
    scoreReporting: 'The exam result shows on screen when you submit, and CompTIA exams use a 100 to 900 scaled score with a different passing score for each exam. Candidates receive a score report showing performance by domain, and the credential is posted to the CompTIA account.',
    refundPolicy: 'Exam vouchers are non-refundable and cannot be returned or exchanged, and they expire 12 months after purchase with no extension. If a certification retires, the retirement date overrides the voucher expiration date. A cancelled appointment reinstates the voucher, provided you reschedule before it expires.',
    providersNote: 'CompTIA sells official CertMaster Learn, Practice, Labs and Perform products and publishes free exam objectives for every exam. Third-party courses and question banks are optional; check that any product names the current exam code before you buy.',
    comparison: {
      title: 'CompTIA exams covered here, compared',
      columns: ['Exam', 'Format and passing score', 'Recommended experience', 'Renewal (3-year cycle)'],
      rows: [
        { label: 'Tech+ (FC0-U71; replaced ITF+)', values: ['70 questions, 60 minutes, 650', 'None required', 'Good for life'] },
        { label: 'AI Essentials', values: ['2-3 hour course plus about 15-minute competency assessment', 'None required', 'CompCert; validity not published'] },
        { label: 'A+ (220-1201 and 220-1202)', values: ['Two exams, 90 questions and 90 minutes each, 675 and 700', '12 months of IT support', '20 CEUs, $75'] },
        { label: 'Data+ (DA0-002)', values: ['90 questions, 90 minutes, 675', '18 to 24 months in a data analyst role', '20 CEUs, $75'] },
        { label: 'Linux+ (XK0-006)', values: ['90 questions, 90 minutes, 720', '12 months of Linux server work', '50 CEUs, $150'] },
        { label: 'Cloud+ (CV0-004)', values: ['90 questions, 90 minutes, 750', '2 to 3 years as sysadmin or cloud engineer', '50 CEUs, $150'] },
        { label: 'CySA+ (CS0-004)', values: ['85 questions, 165 minutes, 750', 'About 4 years as SOC or vulnerability analyst', '60 CEUs, $150'] }
      ]
    },
    orgFaqs: [
      {
        q: 'How long are CompTIA certifications valid?',
        a: 'Most professional CompTIA certifications, including A+, Data+, Linux+, Cloud+ and CySA+, are valid for three years and must be renewed through the Continuing Education program before they expire. Tech+ and the older ITF+ never expire. CompTIA also lists a Tech+ CE version of the exam series, FC0-U71-CE, with a five-year validity, so check which exam series code you hold.'
      },
      {
        q: 'Where do I take a CompTIA exam?',
        a: 'Every CompTIA certification exam is delivered by Pearson VUE, either at a Pearson VUE test center or online through OnVUE with a live remote proctor. You buy a voucher from the CompTIA Store, then redeem the voucher code when you schedule. Online testing requires a webcam, a private room, a clear desk and government-issued photo identification.'
      },
      {
        q: 'Can I get a CompTIA exam discount?',
        a: 'Yes. CompTIA student direct pricing is available to students verified through SheerID, and its sheet lists the A+ voucher at $122 and the Cloud+ voucher at $189 per exam. CompTIA also sells bundles that combine CertMaster training with a voucher and Retake Assurance. Full-price vouchers are priced in the CompTIA Store, and the CompTIA FAQ says vouchers range from $130 to $480.'
      }
    ],
    sourceUrl: 'https://www.comptia.org/en-us/resources/test-policies/',
    confidence: 'medium'
  }
];

export const exams = [
  /* ------------------------------------------------------------------ A+ */
  {
    slug: 'comptia-a-plus',
    body: BODY,
    tagline: 'The two-exam entry credential for IT support: Core 1 for devices and networks, Core 2 for operating systems and security.',
    description: 'The CompTIA A+ certification requires two exams, Core 1 (220-1201) and Core 2 (220-1202), each with up to 90 questions in 90 minutes. Core 1 needs 675 and Core 2 needs 700 on a 900-point scale. A+ V15 launched on March 25, 2025 and covers hardware, networking, mobile devices, virtualization and cloud, operating systems, security, software troubleshooting and operational procedures. It is aimed at help desk and desktop support technicians, is mapped to three DoD 8140 work roles, and is the usual first rung before Network+ or Security+.',
    quickAnswer: {
      summary: 'CompTIA A+ is earned by passing two exams from the same version, Core 1 (220-1201, pass at 675) and Core 2 (220-1202, pass at 700). Each has a maximum of 90 questions in 90 minutes, mixing multiple-choice and performance-based items. You pay for each exam voucher separately, and the certification renews every three years with 20 CEUs and a $75 fee.',
      advantages: [
        'A+ is the entry credential for help desk and desktop support, with a published blueprint for both exams.',
        'Core 1 and Core 2 can be taken in either order, and results show on screen when you finish.',
        'CompTIA lists A+ against three DoD 8140 work roles: technical support specialist, system administrator and cyber defense infrastructure support specialist.',
        'Renewal is light: 20 CEUs and a $75 total CE fee every three years, or pass a higher CompTIA certification.'
      ]
    },
    roadmap: [
      'Confirm you are studying V15 (220-1201 and 220-1202)',
      'Buy vouchers or a bundle in the CompTIA Store',
      'Schedule Core 1 and Core 2 with Pearson VUE',
      'Pass both exams from the same version',
      'Log CEUs inside the three-year cycle'
    ],
    prerequisites: 'None required. CompTIA recommends about 12 months of hands-on experience as an IT support specialist.',
    eligibility: 'Anyone can register. There is no age or degree requirement published on the Core 1 or Core 2 exam pages, and both exams must come from the same version, so a passed V14 Core 1 (220-1101) does not combine with a V15 Core 2.',
    examMeta: {
      questions: 'Up to 90 questions per exam (Core 1 and Core 2); CompTIA does not publish a scored versus unscored split',
      time: '90 minutes per exam (180 minutes across both exams)',
      pass: 'Core 1 (220-1201): 675 on a 100-900 scale. Core 2 (220-1202): 700 on a 100-900 scale',
      fee: 'Priced per exam in the CompTIA Store. CompTIA last published $253 per exam (February 2024); 2026 listings show about $274. Students: $122, or $175 with retake. Retake: full price again, or a Retake Assurance bundle',
      format: 'Computer-based: single-response and multiple-response multiple choice, drag-and-drop and performance-based questions. English, German and Japanese.',
      admin: 'CompTIA (certification); Pearson VUE (test centers and OnVUE online)'
    },
    topics: [
      { name: 'Hardware', weight: '', note: 'Core 1 domain, 25%.' },
      { name: 'Networking', weight: '', note: 'Core 1 domain, 23%.' },
      { name: 'Mobile devices', weight: '', note: 'Core 1 domain, 13%.' },
      { name: 'Virtualization and cloud computing', weight: '', note: 'Core 1 domain, 11%.' },
      { name: 'Hardware and network troubleshooting', weight: '', note: 'Core 1 domain, 28%, the largest Core 1 domain.' },
      { name: 'Operating systems', weight: '', note: 'Core 2 domain, 28%.' },
      { name: 'Security', weight: '', note: 'Core 2 domain, 28%.' },
      { name: 'Software troubleshooting', weight: '', note: 'Core 2 domain, 23%.' },
      { name: 'Operational procedures', weight: '', note: 'Core 2 domain, 21%.' }
    ],
    examEssentials: [
      ['Exam series', 'V15: 220-1201 (Core 1) and 220-1202 (Core 2), launched March 25, 2025; CompTIA estimates retirement around 2028'],
      ['Passing scores', 'Core 1: 675 of 900. Core 2: 700 of 900'],
      ['Version rule', 'Core 1 and Core 2 must come from the same version, no mixing'],
      ['Retake rule', 'No wait after a first failure; 14 calendar days before a third or later attempt; full price each time'],
      ['Voucher validity', 'Vouchers expire 12 months after purchase and are non-refundable'],
      ['Renewal', 'Three-year CE cycle: 20 CEUs and $75 total CE fee'],
      ['Recommended experience', '12 months of hands-on IT support specialist experience']
    ],
    timeline: [
      { stage: 'Study the V15 objectives', duration: '8 to 12 weeks for most beginners' },
      { stage: 'Sit Core 1 (220-1201)', duration: '90 minutes; result shown on screen' },
      { stage: 'Sit Core 2 (220-1202)', duration: '90 minutes; any order, same version' },
      { stage: 'Certification posts to your CompTIA account', duration: 'Within a few days of the second pass' }
    ],
    costBreakdown: {
      items: [
        { item: 'Core 1 voucher (220-1201)', fee: 'About $274 in 2026 listings (CompTIA last published $253 in February 2024); student price $122' },
        { item: 'Core 2 voucher (220-1202)', fee: 'About $274 in 2026 listings; student price $122' },
        { item: 'Retake of either exam', fee: 'Full voucher price again, or buy a bundle with Retake Assurance (student sheet: $175 per exam including retake)' },
        { item: 'CE renewal fee, per three-year cycle', fee: '$75 with 20 CEUs' }
      ],
      total: 'Roughly $548 for two vouchers at 2026 listings, plus $75 per renewal cycle; students about $244',
      footnote: 'Confirm the current voucher price at checkout in the CompTIA Store. CertMaster training is priced separately.'
    },
    difficulty: 'Moderate',
    audience: 'Career changers, students and help desk staff pursuing a first IT support job.',
    time: 'Two exams of 90 minutes; most candidates study 8 to 12 weeks',
    cost: 'Two vouchers; about $548 at 2026 listings',
    faqs: [
      { q: 'How many questions are on the CompTIA A+ exam?', a: 'Each of the two A+ exams, Core 1 (220-1201) and Core 2 (220-1202), has a maximum of 90 questions and runs 90 minutes. The questions include single- and multiple-response multiple choice, drag-and-drop and performance-based items. CompTIA states the maximum rather than an exact count, so the number you see can be lower than 90.' },
      { q: 'What is a passing score on CompTIA A+?', a: 'A passing score is 675 on Core 1 (220-1201) and 700 on Core 2 (220-1202), both on a scale of 100 to 900. These are scaled scores, not percentages of questions correct, so you cannot convert them to a fixed number of right answers. You must pass both exams, from the same version, to earn the A+ certification.' },
      { q: 'Is the CompTIA A+ exam hard?', a: 'Most candidates rate A+ moderate. The challenge is breadth: Core 1 spans five domains and Core 2 four, with Hardware and network troubleshooting at 28% of Core 1 and Operating systems and Security each at 28% of Core 2. Performance-based questions test hands-on tasks, so build and troubleshoot a real or virtual PC rather than only reading.' },
      { q: 'Do I need to pass both Core 1 and Core 2?', a: 'Yes. A+ certification requires passing both Core 1 (220-1201) and Core 2 (220-1202), and the two exams must be from the same version. You can take them in either order and on different days. Each exam needs its own voucher, so plan for two exam fees, plus a retake fee if you do not pass one on the first attempt.' },
      { q: 'How much does the CompTIA A+ exam cost?', a: 'CompTIA sets A+ voucher prices in its store and does not publish a static table. Its last published figure was $253 per exam in February 2024, and 2026 listings show about $274, so the two exams cost roughly $548 in total. CompTIA student direct pricing lists a voucher at $122, or $175 with retake. Check the CompTIA Store at checkout.' },
      { q: 'How long is CompTIA A+ valid?', a: 'CompTIA A+ is valid for three years from the date you pass. To renew, submit 20 continuing education units (CEUs) and pay the $75 CE fee before the expiration date, or pass a higher-level CompTIA certification that renews it. Paying the fee alone does not renew the certification, and you also have the option to pay annually.' },
      { q: 'Can I retake the A+ exam if I fail?', a: RETAKE },
      { q: 'What is the difference between 220-1201 and the older 220-1101 exams?', a: 'The 220-1201 and 220-1202 exams are the current A+ V15, launched March 25, 2025, and replace the 220-1101 and 220-1102 exams. Core exams must come from the same version, so V14 and V15 results cannot be combined. CompTIA estimates V15 stays current until about 2028, so confirm the exam code before you buy study material.' }
    ],
    summaryPoints: [
      'A+ needs two exams: Core 1 (220-1201, pass 675) and Core 2 (220-1202, pass 700), each up to 90 questions in 90 minutes.',
      'Core 1 domains: Hardware 25%, Networking 23%, Mobile devices 13%, Virtualization and cloud 11%, Hardware and network troubleshooting 28%.',
      'Core 2 domains: Operating systems 28%, Security 28%, Software troubleshooting 23%, Operational procedures 21%.',
      'Retake: no wait after the first failure, 14 days before a third attempt, full price each time.',
      'Renewal every three years with 20 CEUs and a $75 CE fee.'
    ],
    relatedSlugs: ['comptia-network-plus', 'comptia-security-plus', 'comptia-tech-plus', 'comptia-server-plus'],
    sourceUrl: 'https://www.comptia.org/en-us/certifications/a/core-1-v15/',
    reviewed: '2026-10',
    confidence: 'medium'
  },

  /* ------------------------------------------------------- AI Essentials */
  {
    slug: 'comptia-ai-essentials',
    body: BODY,
    tagline: 'A short workplace AI course with a competency assessment that earns a CompCert, not a proctored certification exam.',
    description: 'CompTIA AI Essentials is a 2 to 3 hour course ending in a competency assessment that earns a CompTIA CompCert, not a proctored Pearson VUE exam. The course teaches workers to use AI assistants: generative AI and chatbots, effective prompts, hallucinations, conversational loops, responsible use and practical use cases. It requires no prior experience and targets knowledge workers who are expected to use tools such as ChatGPT, Copilot or Gemini. CompTIA states a roughly 15-minute assessment length in its launch announcement, and it does not publish a question count or passing score.',
    quickAnswer: {
      summary: 'CompTIA AI Essentials is a self-paced course of about 2 to 3 hours followed by the AI Essentials Competency Assessment, which CompTIA announced as roughly 15 minutes long. Passing earns a downloadable CompCert. It is not a Pearson VUE certification exam, requires no experience, and CompTIA does not publish a passing score. Student direct pricing lists the course at $50.',
      advantages: [
        'The whole path takes about 2 to 3 hours of instruction plus a short assessment, so it fits into a work week.',
        'No prior experience is required, and experienced AI users can take the assessment to test out of the core material.',
        'Passing earns a downloadable CompTIA CompCert that you can show to an employer.',
        'Content is practical: prompt writing, checking hallucinations, prompt chaining and data privacy rules.'
      ]
    },
    roadmap: [
      'Buy the AI Essentials course in the CompTIA Store',
      'Complete the interactive course (about 2 to 3 hours)',
      'Take the AI Essentials Competency Assessment',
      'Download your CompCert after passing'
    ],
    prerequisites: 'None. CompTIA states that no prior experience is required.',
    eligibility: 'Open to anyone. CompTIA positions the course for beginners who use AI assistants in a professional context; employees with AI experience can take the assessment to test out of the core material.',
    examMeta: {
      questions: 'Not published by CompTIA; a competency assessment, not a certification exam with a stated item count',
      time: 'Course about 2 to 3 hours; assessment announced as about 15 minutes',
      pass: 'Not published by CompTIA. Passing the assessment earns the CompCert',
      fee: 'Course priced in the CompTIA Store; CompTIA student direct pricing lists $50 (SheerID-verified students). No separate exam voucher is listed',
      format: 'Online scenario-based course (short videos, brief readings, interactive activities) followed by an online competency assessment',
      admin: 'CompTIA (CertMaster platform); not delivered through Pearson VUE'
    },
    topics: [
      { name: 'Generative AI and chatbots', weight: '', note: 'What generative AI is, how large language models power AI assistants, and their strengths, limitations and uncertainty.' },
      { name: 'Effective prompts', weight: '', note: 'Stating purpose, context, personas and constraints in concise, focused prompts.' },
      { name: 'Hallucinations', weight: '', note: 'Why AI tools produce inaccurate information and how to verify and refine outputs.' },
      { name: 'Conversational loops', weight: '', note: 'Prompt chaining and iteration that build on previous responses.' },
      { name: 'Responsible use', weight: '', note: 'Risks of entering sensitive, personal or proprietary data and alignment with AI policies, privacy and security.' },
      { name: 'Practical use cases', weight: '', note: 'Finding high-value tasks, streamlining routine work and supporting decisions.' }
    ],
    examEssentials: [
      ['Credential type', 'CompTIA CompCert (Competency Certificate), earned by passing the built-in assessment; CompTIA community staff note these courses are not tied to a certification exam'],
      ['Course length', 'About 2 to 3 hours of instructional content'],
      ['Assessment length', 'About 15 minutes per CompTIA launch announcement; format details not published'],
      ['Passing score and question count', 'Not published by CompTIA'],
      ['Validity', 'CompTIA does not state a validity period for the CompCert'],
      ['Student price', '$50 on the CompTIA student direct pricing sheet'],
      ['Delivery', 'Online through CompTIA CertMaster; no test center visit']
    ],
    timeline: [
      { stage: 'Enroll in the course', duration: 'Same day after purchase' },
      { stage: 'Complete the interactive modules', duration: 'About 2 to 3 hours' },
      { stage: 'Take the competency assessment', duration: 'About 15 minutes' },
      { stage: 'Download the CompCert', duration: 'After a passing result' }
    ],
    costBreakdown: {
      items: [
        { item: 'AI Essentials course with assessment', fee: 'Priced in the CompTIA Store; students verified through SheerID pay $50' },
        { item: 'Exam voucher', fee: 'None listed; CompTIA describes a competency assessment inside the course, not a voucher exam' },
        { item: 'Pearson VUE test center or proctoring fee', fee: '$0, because the assessment is not delivered by Pearson VUE' },
        { item: 'Renewal or CE fee', fee: 'None published; CompTIA does not list AI Essentials in the CE program' }
      ],
      total: '$50 for verified students; the non-student price is shown only at checkout in the CompTIA Store',
      footnote: 'Employers can add AI Essentials titles to a CertMaster account through a CompTIA representative.'
    },
    difficulty: 'Easy',
    audience: 'Office and knowledge workers who must use AI assistants safely and effectively at work.',
    time: 'About 2 to 3 hours of course plus a short assessment',
    cost: '$50 student price; store price at checkout',
    faqs: [
      { q: 'Is CompTIA AI Essentials an exam or a course?', a: 'CompTIA AI Essentials is a course of about 2 to 3 hours followed by the AI Essentials Competency Assessment. It is not a Pearson VUE certification exam. Passing the assessment earns a downloadable CompTIA CompCert, a competency certificate, rather than a proctored professional certification such as A+ or Security+.' },
      { q: 'How many questions are on the CompTIA AI Essentials assessment?', a: 'CompTIA does not publish how many questions the AI Essentials Competency Assessment contains, nor a passing score. Its launch announcement describes the assessment as about 15 minutes long. Any exam code or 50-question figure you see on third-party practice sites is not an official CompTIA specification, so rely on the course page.' },
      { q: 'What does the CompTIA AI Essentials course cover?', a: 'The course covers generative AI and chatbots, effective prompts, hallucinations, conversational loops, responsible use and practical use cases. In plain terms you learn how large language models power AI assistants, write prompts with purpose, context, personas and constraints, verify outputs, chain prompts, and avoid entering sensitive or proprietary data against organizational AI policies.' },
      { q: 'Who is CompTIA AI Essentials for?', a: 'CompTIA AI Essentials is for beginners and knowledge workers who are expected to use AI assistants such as ChatGPT, Copilot or Gemini but are new to them. No prior experience is required. People who already use AI tools can take the assessment to test out of the core material instead of working through every module.' },
      { q: 'How much does CompTIA AI Essentials cost?', a: 'CompTIA shows the price at checkout in its store rather than on the certification page. Its student direct pricing sheet lists AI Essentials at $50 for students verified through SheerID. Because the assessment is part of the course, there is no separate exam voucher to buy, and no test center or proctoring fee applies.' },
      { q: 'How long is the AI Essentials CompCert valid?', a: 'CompTIA does not state a validity period for the AI Essentials CompCert on its course page, and the credential is not part of the Continuing Education program that governs A+ and Security+. Treat it as a record of a passed assessment on a given date, and check your CompTIA account for any expiry shown on the certificate.' },
      { q: 'Is CompTIA AI Essentials worth it?', a: 'It is worth it if you need quick, verifiable proof that you can use AI assistants responsibly. The course is short and practical, and passing gives you a CompCert for a resume or training record. It is a literacy credential, so it does not replace technical certifications such as Data+ or the SecAI+ exam for specialist roles.' }
    ],
    summaryPoints: [
      'AI Essentials is a roughly 2 to 3 hour course plus a competency assessment, not a Pearson VUE certification exam.',
      'The assessment was announced as about 15 minutes; CompTIA publishes no question count and no passing score.',
      'Passing earns a downloadable CompTIA CompCert; no validity period is stated.',
      'Student direct pricing lists the course at $50, and the store price is shown at checkout.',
      'Six topic areas: generative AI, prompts, hallucinations, conversational loops, responsible use, use cases.'
    ],
    relatedSlugs: ['comptia-tech-plus', 'comptia-secai-plus', 'comptia-data-plus', 'comptia-a-plus'],
    sourceUrl: 'https://www.comptia.org/en-us/certifications/ai-essentials/',
    reviewed: '2026-10',
    confidence: 'medium'
  },

  /* -------------------------------------------------------------- Cloud+ */
  {
    slug: 'comptia-cloud-plus',
    body: BODY,
    tagline: 'Vendor-neutral cloud operations for sysadmins and cloud engineers: CV0-004.',
    description: 'The CompTIA Cloud+ exam (CV0-004) has a maximum of 90 questions in 90 minutes and a passing score of 750 on a 100-900 scale. Cloud+ V4 launched on September 24, 2024 and covers Cloud architecture 23%, Deployment 19%, Operations 17%, Security 19%, DevOps fundamentals 10% and Troubleshooting 12%. CompTIA recommends 2 to 3 years of hands-on experience as a systems administrator or cloud engineer. It is vendor-neutral, so it tests cloud concepts across AWS, Azure and Google Cloud rather than one platform.',
    quickAnswer: {
      summary: 'CompTIA Cloud+ (CV0-004) is one exam of up to 90 multiple-choice and performance-based questions in 90 minutes, passed at 750 out of 900. It suits people with 2 to 3 years of systems administration or cloud engineering work. The certification lasts three years and renews with 50 CEUs and a $150 CE fee.',
      advantages: [
        'Vendor-neutral coverage means the credential applies to any public, private or hybrid cloud.',
        'One exam with a clear six-domain blueprint, led by Cloud architecture at 23%.',
        'DevOps fundamentals and Troubleshooting domains test practical operations skills.',
        'Renewal is defined: 50 CEUs and $150 per three-year cycle, or pass a higher CompTIA certification.'
      ]
    },
    roadmap: [
      'Download the CV0-004 exam objectives',
      'Buy a voucher in the CompTIA Store',
      'Schedule with Pearson VUE at a center or OnVUE',
      'Sit the 90-minute exam and read the on-screen result',
      'Log 50 CEUs in the three-year cycle'
    ],
    prerequisites: 'No formal prerequisite. CompTIA recommends 2 to 3 years of hands-on experience as a systems administrator or cloud engineer.',
    eligibility: 'Open to any candidate. The exam page lists recommended experience rather than required credentials, so Network+ or Server+ is helpful but not mandatory.',
    examMeta: {
      questions: 'Maximum of 90 questions; CompTIA does not publish a scored versus unscored split',
      time: '90 minutes',
      pass: '750 on a 100-900 scale',
      fee: 'Set in the CompTIA Store. Student price $189, or $285 with retake; association price lists show about $390. Retake: full price again, or a Retake Assurance bundle',
      format: 'Computer-based: multiple-choice and performance-based questions',
      admin: 'CompTIA (certification); Pearson VUE (test centers and OnVUE online)'
    },
    topics: [
      { name: 'Cloud architecture', weight: '23%', note: 'Largest domain: designing cloud solutions and choosing deployment models.' },
      { name: 'Deployment', weight: '19%', note: 'Provisioning and deploying cloud resources and workloads.' },
      { name: 'Operations', weight: '17%', note: 'Running, monitoring and maintaining cloud environments.' },
      { name: 'Security', weight: '19%', note: 'Identity, encryption, compliance and securing cloud workloads.' },
      { name: 'DevOps fundamentals', weight: '10%', note: 'CI/CD concepts and automation.' },
      { name: 'Troubleshooting', weight: '12%', note: 'Diagnosing cloud deployment, connectivity and performance problems.' }
    ],
    examEssentials: [
      ['Exam series', 'CV0-004 (V4), launched September 24, 2024; CompTIA estimates retirement about three years after launch'],
      ['Passing score', '750 on a 100-900 scale; scaled, not a percentage'],
      ['Retake rule', 'No wait after a first failure; 14 calendar days before a third or later attempt'],
      ['Voucher validity', '12 months from purchase; non-refundable'],
      ['Renewal', 'Three-year CE cycle: 50 CEUs and $150 total CE fee'],
      ['Recommended experience', '2 to 3 years as a systems administrator or cloud engineer'],
      ['Delivery', 'Pearson VUE test center or OnVUE online proctoring']
    ],
    timeline: [
      { stage: 'Study the six CV0-004 domains', duration: '6 to 8 weeks for an experienced sysadmin' },
      { stage: 'Buy voucher and schedule', duration: 'Same week; voucher valid 12 months' },
      { stage: 'Sit the exam', duration: '90 minutes; result shown on screen' },
      { stage: 'Certification posts to your CompTIA account', duration: 'Within a few days' }
    ],
    costBreakdown: {
      items: [
        { item: 'Exam voucher (CV0-004)', fee: 'Set in the CompTIA Store; about $390 on 2026 association price lists; students $189' },
        { item: 'Retake', fee: 'Full price again, or student bundle with retake at $285' },
        { item: 'CertMaster Learn, Practice or Labs', fee: 'Optional; priced in the CompTIA Store' },
        { item: 'CE renewal fee, per three-year cycle', fee: '$150 with 50 CEUs' }
      ],
      total: 'About $390 for the exam at list, plus $150 per renewal cycle; students $189',
      footnote: 'Confirm the voucher price at checkout; CompTIA does not publish a static price table.'
    },
    difficulty: 'Moderate to hard',
    audience: 'Systems administrators and cloud engineers who run workloads across more than one cloud platform.',
    time: '90 minutes; 6 to 8 weeks of study for most candidates',
    cost: 'About $390 at list; students $189',
    faqs: [
      { q: 'How many questions are on the CompTIA Cloud+ exam?', a: 'The CompTIA Cloud+ exam, CV0-004, has a maximum of 90 questions and a 90-minute time limit. The questions are a mix of multiple-choice and performance-based items. CompTIA states a maximum rather than an exact count, and it does not say how many items are unscored, so plan for up to one minute per question.' },
      { q: 'What is a passing score on CompTIA Cloud+?', a: 'The passing score on CompTIA Cloud+ (CV0-004) is 750 on a scale of 100 to 900. The score is scaled across exam forms, so it does not equal a fixed percentage of correct answers. This is higher than the 675 needed for Data+ and A+ Core 1, and it matches the 750 needed for CySA+.' },
      { q: 'Is the CompTIA Cloud+ exam hard?', a: 'Cloud+ is harder than entry-level CompTIA exams because CompTIA recommends 2 to 3 years of systems administration or cloud engineering experience. The exam spans six domains, with Cloud architecture at 23% and Security at 19%, and includes performance-based tasks. Candidates who have only used a single cloud vendor often struggle with the vendor-neutral questions.' },
      { q: 'How much does the CompTIA Cloud+ exam cost?', a: 'CompTIA sets the Cloud+ voucher price in its store and does not publish a static table. Association price lists in 2026 show about $390, and CompTIA student direct pricing lists $189, or $285 with retake. Each retake costs the full price again unless you bought a bundle with Retake Assurance, so confirm the amount at checkout.' },
      { q: 'How long is CompTIA Cloud+ valid?', a: 'CompTIA Cloud+ is valid for three years. To renew, earn 50 continuing education units (CEUs) and pay the $150 CE fee for the cycle before your expiration date. You can also renew by passing the current version of the exam or a higher-level CompTIA certification that CompTIA lists as renewing it.' },
      { q: 'What is the difference between Cloud+ and Cloud Essentials+?', a: 'Cloud+ (CV0-004) is a technical, hands-on exam for systems administrators and cloud engineers, with 90 questions, a 750 pass mark and a three-year CE cycle. Cloud Essentials+ is the business-oriented entry exam for people who need to understand cloud concepts and costs. Choose Cloud+ if you deploy, secure and troubleshoot cloud workloads.' },
      { q: 'Can I retake CompTIA Cloud+ if I fail?', a: RETAKE }
    ],
    summaryPoints: [
      'Cloud+ (CV0-004): up to 90 questions in 90 minutes, passing score 750 on a 100-900 scale.',
      'Six domains: Cloud architecture 23%, Deployment 19%, Operations 17%, Security 19%, DevOps fundamentals 10%, Troubleshooting 12%.',
      'CompTIA recommends 2 to 3 years as a systems administrator or cloud engineer.',
      'Valid three years; renew with 50 CEUs and a $150 CE fee.',
      'V4 launched September 24, 2024 and is estimated to retire around 2027.'
    ],
    relatedSlugs: ['comptia-cloud-essentials-plus', 'comptia-linux-plus', 'comptia-server-plus', 'comptia-cloudnetx'],
    sourceUrl: 'https://www.comptia.org/en-us/certifications/cloud/',
    reviewed: '2026-10',
    confidence: 'medium'
  },

  /* -------------------------------------------------------------- CySA+ */
  {
    slug: 'comptia-cysa-plus',
    body: BODY,
    tagline: 'The blue-team analyst exam: SIEM triage, vulnerability management and incident response. CS0-004 is the current version.',
    description: 'The CompTIA CySA+ exam (CS0-004) has a maximum of 85 questions in 165 minutes and a passing score of 750 on a 100-900 scale. CS0-004 launched on June 23, 2026 and the older CS0-003 English exam retires on December 22, 2026. Its four domains are Security Operations 34%, Vulnerability Management 26%, Incident Response and Management 24% and Reporting and Communication 16%. CompTIA recommends about 4 years in a SOC analyst or vulnerability analyst role, so CySA+ typically sits after Security+.',
    quickAnswer: {
      summary: 'CompTIA CySA+ V4 (CS0-004) is a single exam of up to 85 questions in 165 minutes, passed at 750 out of 900. It tests Security Operations (34%), Vulnerability Management (26%), Incident Response and Management (24%) and Reporting and Communication (16%). The certification renews every three years with 60 CEUs and a $150 CE fee.',
      advantages: [
        'At 165 minutes it is the longest of the CompTIA exams in this group, giving time for log-analysis and SIEM scenarios.',
        'Security Operations is a third of the blueprint, so day-to-day SOC skills carry the most weight.',
        'CS0-004 adds explicit AI-in-security-operations content as the newest change to the objectives.',
        'Renewal needs 60 CEUs and $150 over three years, the heaviest CEU count among these exams.'
      ]
    },
    roadmap: [
      'Confirm you are studying CS0-004, not CS0-003',
      'Download the CS0-004 objectives and buy a voucher',
      'Schedule with Pearson VUE',
      'Sit the 165-minute exam',
      'Log 60 CEUs in the three-year cycle'
    ],
    prerequisites: 'No formal prerequisite. CompTIA recommends about 4 years of experience in a SOC analyst or vulnerability analyst role.',
    eligibility: 'Open to any candidate. Security+ or equivalent knowledge is the usual preparation, but the exam page lists recommended experience rather than a required credential.',
    examMeta: {
      questions: 'Maximum of 85 questions; CompTIA does not publish a scored versus unscored split',
      time: '165 minutes (2 hours 45 minutes)',
      pass: '750 on a 100-900 scale',
      fee: 'Set in the CompTIA Store; third-party listings show about $425 to $439. Retake: full price again, or a Retake Assurance bundle',
      format: 'Computer-based; CompTIA describes performance-based questions on SIEM alerts, logs, indicators of compromise and remediation. English at launch, other languages announced as coming',
      admin: 'CompTIA (certification); Pearson VUE (test centers and OnVUE online)'
    },
    topics: [
      { name: 'Security Operations', weight: '34%', note: 'Largest domain: monitoring, log analysis, threat intelligence and the new AI-in-security-operations content.' },
      { name: 'Vulnerability Management', weight: '26%', note: 'Scanning, prioritizing and remediating vulnerabilities.' },
      { name: 'Incident Response and Management', weight: '24%', note: 'Detecting, containing and recovering from incidents.' },
      { name: 'Reporting and Communication', weight: '16%', note: 'Reporting findings and communicating with stakeholders.' }
    ],
    examEssentials: [
      ['Exam series', 'CS0-004 (V4), launched June 23, 2026'],
      ['Version retirement', 'CS0-003 English exam retires December 22, 2026; English learning products retire November 22, 2026; translations retire March 23, 2027'],
      ['Passing score', '750 on a 100-900 scale'],
      ['Retake rule', 'No wait after a first failure; 14 calendar days before a third or later attempt'],
      ['Voucher validity', '12 months from purchase; non-refundable'],
      ['Renewal', 'Three-year CE cycle: 60 CEUs and $150 total CE fee'],
      ['Recommended experience', 'About 4 years as a SOC analyst or vulnerability analyst']
    ],
    timeline: [
      { stage: 'Study the four CS0-004 domains', duration: '8 to 12 weeks if you already hold Security+ knowledge' },
      { stage: 'Buy voucher and schedule', duration: 'Same week; voucher valid 12 months' },
      { stage: 'Sit the exam', duration: '165 minutes; result shown on screen' },
      { stage: 'Certification posts to your CompTIA account', duration: 'Within a few days' }
    ],
    costBreakdown: {
      items: [
        { item: 'Exam voucher (CS0-004)', fee: 'Set in the CompTIA Store; third-party listings show about $425 to $439' },
        { item: 'Retake', fee: 'Full price again unless you bought a bundle with Retake Assurance' },
        { item: 'CertMaster Learn, Practice or Perform', fee: 'Optional; CompTIA sells Practice, Learn and Complete bundles with retake' },
        { item: 'CE renewal fee, per three-year cycle', fee: '$150 with 60 CEUs' }
      ],
      total: 'About $425 to $439 for the exam, plus $150 per renewal cycle',
      footnote: 'Confirm the voucher price at checkout; the CompTIA page lists bundles but no price.'
    },
    difficulty: 'Hard',
    audience: 'SOC analysts, vulnerability analysts and incident responders moving beyond Security+.',
    time: '165 minutes; 8 to 12 weeks of study for most candidates',
    cost: 'About $425 to $439 per third-party listings',
    faqs: [
      { q: 'How many questions are on the CompTIA CySA+ exam?', a: 'The CompTIA CySA+ exam, CS0-004, has a maximum of 85 questions and a time limit of 165 minutes. CompTIA says performance-based questions can ask you to analyze SIEM alerts, review logs, investigate indicators of compromise, prioritize vulnerabilities and recommend remediation. It does not publish how many questions are unscored.' },
      { q: 'What is a passing score on CompTIA CySA+?', a: 'The passing score on CompTIA CySA+ (CS0-004) is 750 on a scale of 100 to 900. This is a scaled score and not a percentage, so it does not correspond to a fixed number of correct answers. The score report shows your performance by domain, which helps if you need to retake.' },
      { q: 'Is the CompTIA CySA+ exam hard?', a: 'CySA+ is among the harder CompTIA exams because CompTIA recommends about 4 years in a SOC or vulnerability analyst role and the exam runs 165 minutes. Security Operations alone is 34% of the blueprint, and performance-based tasks involve reading logs and alerts. Expect scenario analysis rather than recall of definitions.' },
      { q: 'What is the difference between CS0-003 and CS0-004?', a: 'CS0-004 is CySA+ V4, launched June 23, 2026, and replaces CS0-003. The CS0-003 English exam retires on December 22, 2026, English learning products on November 22, 2026 and translations on March 23, 2027. CS0-004 keeps the 750 passing score and adds content on AI in security operations. Study the CS0-004 objectives for any new booking.' },
      { q: 'How much does the CompTIA CySA+ exam cost?', a: 'CompTIA does not show the CySA+ voucher price on its certification page, only bundles with Retake Assurance. Third-party listings give about $425 to $439 for the exam, which you should confirm at checkout in the CompTIA Store. A retake costs the full voucher price again unless you bought a retake bundle.' },
      { q: 'How long is CompTIA CySA+ valid?', a: 'CompTIA CySA+ is valid for three years. Renewal requires 60 continuing education units (CEUs) and the $150 CE fee for the cycle, paid before the expiration date. Passing the current exam version or a higher-level CompTIA certification such as SecurityX can also renew it. Paying the fee alone does not renew the certification.' },
      { q: 'Should I take Security+ before CySA+?', a: 'CompTIA does not require Security+ before CySA+, but it recommends about 4 years in a SOC or vulnerability analyst role, so Security+ is the usual first step for most people. Security+ covers general security knowledge, while CySA+ focuses on analyzing alerts, managing vulnerabilities and responding to incidents. Take Security+ first if you are new to security.' }
    ],
    summaryPoints: [
      'CySA+ V4 (CS0-004): up to 85 questions in 165 minutes, passing score 750 on a 100-900 scale.',
      'Domains: Security Operations 34%, Vulnerability Management 26%, Incident Response and Management 24%, Reporting and Communication 16%.',
      'CS0-004 launched June 23, 2026; the CS0-003 English exam retires December 22, 2026.',
      'CompTIA recommends about 4 years as a SOC analyst or vulnerability analyst.',
      'Valid three years; renew with 60 CEUs and a $150 CE fee.'
    ],
    relatedSlugs: ['comptia-security-plus', 'comptia-pentest-plus', 'comptia-securityx', 'comptia-secai-plus'],
    sourceUrl: 'https://www.comptia.org/en-us/certifications/cybersecurity-analyst/v4/',
    reviewed: '2026-10',
    confidence: 'medium'
  },

  /* -------------------------------------------------------------- Data+ */
  {
    slug: 'comptia-data-plus',
    body: BODY,
    tagline: 'Vendor-neutral data analytics: DA0-002 tests acquisition, analysis, visualization and governance.',
    description: 'The CompTIA Data+ exam (DA0-002) has a maximum of 90 questions in 90 minutes and a passing score of 675 on a 100-900 scale. Data+ V2 launched on October 14, 2025 and covers Data concepts and environments 20%, Data acquisition and preparation 22%, Data analysis 24%, Visualization and reporting 20% and Data governance 14%. CompTIA recommends 18 to 24 months in a data analyst or similar role, with exposure to databases, analytical tools, basic statistics and data visualization.',
    quickAnswer: {
      summary: 'CompTIA Data+ (DA0-002) is a single exam of up to 90 multiple-choice and performance-based questions in 90 minutes, passed at 675 out of 900. Data analysis is the largest domain at 24%, followed by Data acquisition and preparation at 22%. The certification renews every three years with 20 CEUs and a $75 CE fee.',
      advantages: [
        'The 675 passing score matches A+ Core 1, so Data+ is the more approachable analytics credential.',
        'Five domains with published weights make study time easy to allocate.',
        'Vendor-neutral, so it is not tied to a single BI tool or database.',
        'Renewal is the lightest in the professional range: 20 CEUs and $75 per three years.'
      ]
    },
    roadmap: [
      'Download the DA0-002 objectives',
      'Buy a voucher in the CompTIA Store',
      'Schedule with Pearson VUE',
      'Sit the 90-minute exam',
      'Log 20 CEUs in the three-year cycle'
    ],
    prerequisites: 'No formal prerequisite. CompTIA recommends 18 to 24 months in a data analyst or similar role with exposure to databases, analytical tools, basic statistics and data visualization.',
    eligibility: 'Open to any candidate. The recommendation is experience-based and nothing on the CompTIA page requires a degree or earlier certification.',
    examMeta: {
      questions: 'Maximum of 90 questions; CompTIA does not publish a scored versus unscored split',
      time: '90 minutes',
      pass: '675 on a 100-900 scale',
      fee: 'Set in the CompTIA Store; CompTIA publishes no static price for DA0-002 (its FAQ range for all vouchers is $130 to $480). Retake: full price again, or a Retake Assurance bundle',
      format: 'Computer-based: multiple-choice and performance-based questions',
      admin: 'CompTIA (certification); Pearson VUE (test centers and OnVUE online)'
    },
    topics: [
      { name: 'Data concepts and environments', weight: '20%', note: 'Data types, structures, databases and the environments where data lives.' },
      { name: 'Data acquisition and preparation', weight: '22%', note: 'Collecting, cleaning and transforming data for analysis.' },
      { name: 'Data analysis', weight: '24%', note: 'Largest domain: descriptive and inferential statistics and analytical techniques.' },
      { name: 'Visualization and reporting', weight: '20%', note: 'Building dashboards and reports that communicate findings.' },
      { name: 'Data governance', weight: '14%', note: 'Quality, privacy, security and compliance for data.' }
    ],
    examEssentials: [
      ['Exam series', 'DA0-002 (V2), launched October 14, 2025; CompTIA estimates retirement about three years after launch (2028)'],
      ['Passing score', '675 on a 100-900 scale'],
      ['Retake rule', 'No wait after a first failure; 14 calendar days before a third or later attempt'],
      ['Voucher validity', '12 months from purchase; non-refundable'],
      ['Renewal', 'Three-year CE cycle: 20 CEUs and $75 total CE fee'],
      ['Recommended experience', '18 to 24 months in a data analyst or similar role'],
      ['Delivery', 'Pearson VUE test center or OnVUE online proctoring']
    ],
    timeline: [
      { stage: 'Study the five DA0-002 domains', duration: '6 to 10 weeks depending on statistics background' },
      { stage: 'Buy voucher and schedule', duration: 'Same week; voucher valid 12 months' },
      { stage: 'Sit the exam', duration: '90 minutes; result shown on screen' },
      { stage: 'Certification posts to your CompTIA account', duration: 'Within a few days' }
    ],
    costBreakdown: {
      items: [
        { item: 'Exam voucher (DA0-002)', fee: 'Set in the CompTIA Store; no static price published (CompTIA FAQ range $130 to $480)' },
        { item: 'Retake', fee: 'Full price again unless you bought a bundle with Retake Assurance' },
        { item: 'CertMaster Learn or Practice', fee: 'Optional; priced in the CompTIA Store' },
        { item: 'CE renewal fee, per three-year cycle', fee: '$75 with 20 CEUs' }
      ],
      total: 'Voucher price at checkout, plus $75 per renewal cycle',
      footnote: 'The CompTIA Data+ page links to a Buy Now section but does not list a number.'
    },
    difficulty: 'Moderate',
    audience: 'Junior data and business analysts who need a vendor-neutral analytics credential.',
    time: '90 minutes; 6 to 10 weeks of study for most candidates',
    cost: 'Voucher price at checkout; $75 CE per cycle',
    faqs: [
      { q: 'How many questions are on the CompTIA Data+ exam?', a: 'The CompTIA Data+ exam, DA0-002, has a maximum of 90 questions and a 90-minute time limit. The questions are multiple-choice and performance-based. CompTIA states a maximum rather than an exact count and does not publish an unscored-item number, so plan to average about one minute per question.' },
      { q: 'What is a passing score on CompTIA Data+?', a: 'The passing score on CompTIA Data+ (DA0-002) is 675 on a scale of 100 to 900. It is a scaled score, so 675 does not mean 75% of questions correct. Data+ shares its 675 line with A+ Core 1, and it is lower than the 750 needed for Cloud+ and CySA+.' },
      { q: 'Is the CompTIA Data+ exam hard?', a: 'Data+ is moderate. The questions apply concepts to scenarios, and Data analysis (24%) plus Data acquisition and preparation (22%) make up nearly half the exam. People without basic statistics or hands-on spreadsheet and SQL work find the performance-based items harder. CompTIA recommends 18 to 24 months in a data analyst or similar role.' },
      { q: 'What is the difference between DA0-001 and DA0-002?', a: 'DA0-002 is Data+ V2, launched October 14, 2025, and replaces DA0-001. The domains and weights changed: V2 lists Data concepts and environments, Data acquisition and preparation, Data analysis, Visualization and reporting and Data governance. Study material must name DA0-002, because DA0-001 content follows a retired blueprint.' },
      { q: 'How long is CompTIA Data+ valid?', a: 'CompTIA Data+ is valid for three years. Renewal requires 20 continuing education units (CEUs) and the $75 CE fee for the cycle, paid before the expiration date. You can also renew by passing the current Data+ exam or a higher-level CompTIA certification that CompTIA lists as renewing it. Paying the fee alone is not enough.' },
      { q: 'How much does the CompTIA Data+ exam cost?', a: 'CompTIA sets the Data+ voucher price in its store and the DA0-002 certification page shows no number. CompTIA says voucher prices across its catalog range from $130 to $480. Retakes cost the full voucher price again unless a bundle includes Retake Assurance, so check the amount in the CompTIA Store before you buy.' },
      { q: 'Is Data+ worth it for a data analyst?', a: 'Data+ is worth it if you want vendor-neutral proof of analytics fundamentals, because it covers acquisition, analysis, visualization and governance rather than one tool. It is a mid-entry credential that pairs well with tool skills in SQL, spreadsheets or BI software. It does not replace a degree, and employers still look for demonstrated projects.' }
    ],
    summaryPoints: [
      'Data+ (DA0-002): up to 90 questions in 90 minutes, passing score 675 on a 100-900 scale.',
      'Domains: Data analysis 24%, Data acquisition and preparation 22%, Data concepts and environments 20%, Visualization and reporting 20%, Data governance 14%.',
      'DA0-002 launched October 14, 2025 and is estimated to retire around 2028.',
      'CompTIA recommends 18 to 24 months in a data analyst or similar role.',
      'Valid three years; renew with 20 CEUs and a $75 CE fee.'
    ],
    relatedSlugs: ['comptia-datasys-plus', 'comptia-datax', 'comptia-tech-plus', 'comptia-ai-essentials'],
    sourceUrl: 'https://www.comptia.org/en-us/certifications/data/',
    reviewed: '2026-10',
    confidence: 'medium'
  },

  /* ----------------------------------------------------------------- ITF+ */
  {
    slug: 'comptia-it-fundamentals',
    body: BODY,
    tagline: 'ITF+ (FC0-U61) has been replaced by CompTIA Tech+ (FC0-U71); the credential never expires.',
    description: 'CompTIA IT Fundamentals (ITF+, exam FC0-U61) was retired in 2025 and replaced by CompTIA Tech+ (FC0-U71), so new candidates now take Tech+. Tech+ has a maximum of 70 questions in 60 minutes and a passing score of 650 on a 900-point scale. CompTIA says ITF+ and Tech+ are both good for life, and an ITF+ holder does not need to take Tech+. The Tech+ domains are Infrastructure, Applications and software, Security, Tech concepts and terminology, Software development concepts, and Data and database fundamentals.',
    quickAnswer: {
      summary: 'CompTIA ITF+ (FC0-U61) was retired in 2025 and replaced by Tech+ (FC0-U71). Tech+ is one exam of up to 70 multiple-choice questions in 60 minutes, passed at 650 out of 900, with no experience required. ITF+ and Tech+ credentials never expire, and an existing ITF+ holder does not need to retake as Tech+.',
      advantages: [
        'No prerequisite or recommended experience, so it is the lowest-barrier CompTIA exam.',
        'Neither ITF+ nor Tech+ needs renewal; both are good for life.',
        'Tech+ adds hands-on practice and emerging-technology coverage over ITF+.',
        'It leads naturally to A+ for people moving into IT support.'
      ]
    },
    roadmap: [
      'Confirm you want Tech+ (FC0-U71), the current exam',
      'Buy a Tech+ voucher in the CompTIA Store',
      'Schedule with Pearson VUE',
      'Sit the 60-minute exam',
      'Move on to A+ for IT support roles'
    ],
    prerequisites: 'None. CompTIA lists no recommended experience for Tech+.',
    eligibility: 'Open to anyone, including students and career changers. Holders of the retired ITF+ keep their credential for life and do not need to take Tech+.',
    examMeta: {
      questions: 'Tech+ FC0-U71: maximum of 70 multiple-choice questions. Retired ITF+ FC0-U61 had 75 questions',
      time: '60 minutes for Tech+ (and for the retired ITF+)',
      pass: '650 on a 900-point scale for Tech+ (and for the retired ITF+)',
      fee: 'Tech+ voucher set in the CompTIA Store; student direct pricing lists $103, or $137 with retake. Retake: full price again, or a Retake Assurance bundle',
      format: 'Computer-based, multiple choice. Tech+ is offered in English and Japanese',
      admin: 'CompTIA (certification); Pearson VUE (test centers and OnVUE online)'
    },
    topics: [
      { name: 'Infrastructure', weight: '24%', note: 'Tech+ domain: hardware, networking and operating-system fundamentals.' },
      { name: 'Applications and software', weight: '18%', note: 'Tech+ domain: installing and managing software and applications.' },
      { name: 'Security', weight: '19%', note: 'Tech+ domain: threats, safe computing and data protection.' },
      { name: 'Tech concepts and terminology', weight: '13%', note: 'Tech+ domain: core IT vocabulary and concepts.' },
      { name: 'Software development concepts', weight: '13%', note: 'Tech+ domain: programming logic and development basics.' },
      { name: 'Data and database fundamentals', weight: '13%', note: 'Tech+ domain: data types and database concepts.' }
    ],
    examEssentials: [
      ['Status', 'ITF+ (FC0-U61) was retired in 2025 per CompTIA; Tech+ (FC0-U71) launched July 16, 2024'],
      ['Exam series codes', 'FC0-U71 (no expiration) and FC0-U71-CE (valid for 5 years)'],
      ['Passing score', '650 on a 900-point scale'],
      ['Validity', 'ITF+ and Tech+ are good for life; Tech+ CE fee is $0'],
      ['Retake rule', 'No wait after a first failure; 14 calendar days before a third or later attempt'],
      ['Voucher validity', '12 months from purchase; non-refundable'],
      ['Recommended experience', 'None required']
    ],
    timeline: [
      { stage: 'Study the Tech+ objectives', duration: '3 to 5 weeks for most beginners' },
      { stage: 'Buy voucher and schedule', duration: 'Same week; voucher valid 12 months' },
      { stage: 'Sit the exam', duration: '60 minutes; result shown on screen' },
      { stage: 'Credential posts to your CompTIA account', duration: 'Within a few days' }
    ],
    costBreakdown: {
      items: [
        { item: 'Tech+ exam voucher (FC0-U71)', fee: 'Set in the CompTIA Store; student price $103' },
        { item: 'Retake', fee: 'Full price again, or student bundle with retake at $137' },
        { item: 'CertMaster training', fee: 'Optional; student sheet lists Tech+ CertMaster Practice at $41' },
        { item: 'Renewal fee', fee: '$0; CompTIA lists the Tech+ CE fee as $0 and the credential never needs renewal' }
      ],
      total: 'Voucher price at checkout (student $103); no renewal cost',
      footnote: 'Unexpired ITF+ vouchers are reported to work for Tech+ exams; confirm with CompTIA before relying on one.'
    },
    difficulty: 'Easy',
    audience: 'Students, career changers and non-IT staff who want to prove foundational technology literacy.',
    time: '60 minutes; 3 to 5 weeks of study for most beginners',
    cost: 'Student voucher $103; no renewal fee',
    faqs: [
      { q: 'Is the CompTIA ITF+ exam still available?', a: 'No. CompTIA retired IT Fundamentals (ITF+, FC0-U61) in 2025 and replaced it with CompTIA Tech+ (FC0-U71), which launched July 16, 2024. New candidates should book Tech+. If you already hold ITF+, CompTIA says the credential remains valid for life and you do not need to take Tech+.' },
      { q: 'How many questions are on the CompTIA Tech+ exam that replaced ITF+?', a: 'The CompTIA Tech+ exam (FC0-U71) has a maximum of 70 multiple-choice questions and a 60-minute time limit. The retired ITF+ exam (FC0-U61) had 75 questions in the same 60 minutes. CompTIA states a maximum for Tech+ and does not publish how many questions are unscored.' },
      { q: 'What is a passing score on CompTIA Tech+ and ITF+?', a: 'The passing score on CompTIA Tech+ (FC0-U71) is 650 on a scale of 900, and the retired ITF+ (FC0-U61) also used 650. It is a scaled score, not a percentage of questions correct. Tech+ is the lowest passing line among the CompTIA exams covered here, reflecting its entry-level scope.' },
      { q: 'Is the CompTIA ITF+ or Tech+ exam hard?', a: 'No, it is the easiest CompTIA exam. Tech+ has no recommended experience and covers six broad domains, with Infrastructure the largest at 24%. The difficulty is breadth of vocabulary and basic concepts rather than technical depth. Most beginners prepare in 3 to 5 weeks, and many use it as a stepping stone to A+.' },
      { q: 'Does CompTIA ITF+ expire?', a: 'No. CompTIA states that both ITF+ and Tech+ are good for life and do not require renewal or continuing education. The Tech+ exam series FC0-U71 has no expiration, while a separate series, FC0-U71-CE, is valid for 5 years. Check which series code is on your score report.' },
      { q: 'What is the difference between ITF+ and Tech+?', a: 'Tech+ is the upgrade to ITF+. CompTIA says Tech+ covers more material and adds hands-on practice, including simulated environments for configuring equipment and troubleshooting, plus emerging technologies such as AI, robotics and quantum computing. Both are vendor-neutral, have no prerequisites and never expire, but only Tech+ is currently offered.' },
      { q: 'How much does the Tech+ exam cost?', a: 'CompTIA shows the Tech+ voucher price at checkout in its store rather than on the certification page. Its student direct pricing sheet lists $103 per voucher, or $137 with a retake. A retake without a bundle costs the full voucher price again, and there is no renewal fee because the credential never expires.' }
    ],
    summaryPoints: [
      'ITF+ (FC0-U61) was retired in 2025 and replaced by Tech+ (FC0-U71), which launched July 16, 2024.',
      'Tech+: up to 70 multiple-choice questions in 60 minutes, passing score 650 of 900.',
      'Tech+ domains: Infrastructure 24%, Security 19%, Applications and software 18%, and three domains at 13% each.',
      'ITF+ and Tech+ are good for life; the Tech+ CE fee is $0.',
      'Student direct pricing lists the Tech+ voucher at $103, or $137 with retake.'
    ],
    relatedSlugs: ['comptia-tech-plus', 'comptia-a-plus', 'comptia-ai-essentials', 'comptia-network-plus'],
    sourceUrl: 'https://www.comptia.org/certifications/it-fundamentals',
    reviewed: '2026-10',
    confidence: 'medium'
  },

  /* ---------------------------------------------------------------- Linux+ */
  {
    slug: 'comptia-linux-plus',
    body: BODY,
    tagline: 'Hands-on Linux administration with automation and troubleshooting: XK0-006 (V8).',
    description: 'The CompTIA Linux+ exam (XK0-006) has a maximum of 90 questions in 90 minutes and a passing score of 720 on a 100-900 scale. Linux+ V8 launched on July 15, 2025 and covers System Management 23%, Services and User Management 20%, Security 18%, Automation, Orchestration and Scripting 17% and Troubleshooting 22%. CompTIA recommends 12 months of hands-on experience with Linux servers, plus A+, Network+ or Server+ or comparable knowledge. Questions are multiple-choice and performance-based.',
    quickAnswer: {
      summary: 'CompTIA Linux+ (XK0-006) is one exam of up to 90 multiple-choice and performance-based questions in 90 minutes, passed at 720 out of 900. It tests five domains led by System Management (23%) and Troubleshooting (22%). The certification renews every three years with 50 CEUs and a $150 CE fee.',
      advantages: [
        'Performance-based questions test real command-line administration, not memorized trivia.',
        'Automation, Orchestration and Scripting is its own domain at 17%, reflecting modern Linux work.',
        'A 720 passing score is a published, fixed target, not a percentage.',
        'Renewal is defined: 50 CEUs and $150 per three-year cycle.'
      ]
    },
    roadmap: [
      'Download the XK0-006 exam objectives',
      'Build a Linux lab and practice at the command line',
      'Buy a voucher and schedule with Pearson VUE',
      'Sit the 90-minute exam',
      'Log 50 CEUs in the three-year cycle'
    ],
    prerequisites: 'No formal prerequisite. CompTIA recommends 12 months of hands-on experience with Linux servers, plus A+, Network+ or Server+, or comparable knowledge.',
    eligibility: 'Open to any candidate. The recommendations on the CompTIA page are experience-based and nothing requires an earlier certification.',
    examMeta: {
      questions: 'Maximum of 90 questions; CompTIA does not publish a scored versus unscored split',
      time: '90 minutes',
      pass: '720 on a 100-900 scale',
      fee: 'Set in the CompTIA Store; association price lists show about $390 for Linux+. Retake: full price again, or a Retake Assurance bundle',
      format: 'Computer-based: multiple-choice and performance-based questions',
      admin: 'CompTIA (certification); Pearson VUE (test centers and OnVUE online)'
    },
    topics: [
      { name: 'System Management', weight: '23%', note: 'Largest domain: storage, boot process, packages, kernel and processes.' },
      { name: 'Services and User Management', weight: '20%', note: 'Services, accounts, permissions and networking basics.' },
      { name: 'Security', weight: '18%', note: 'Hardening, access control, encryption and firewall configuration.' },
      { name: 'Automation, Orchestration, and Scripting', weight: '17%', note: 'Shell scripting, containers, configuration management and version control.' },
      { name: 'Troubleshooting', weight: '22%', note: 'Diagnosing system, service, performance and security problems.' }
    ],
    examEssentials: [
      ['Exam series', 'XK0-006 (V8), launched July 15, 2025; CompTIA estimates retirement about 2028'],
      ['Passing score', '720 on a 100-900 scale'],
      ['Retake rule', 'No wait after a first failure; 14 calendar days before a third or later attempt'],
      ['Voucher validity', '12 months from purchase; non-refundable'],
      ['Renewal', 'Three-year CE cycle: 50 CEUs and $150 total CE fee'],
      ['Recommended experience', '12 months of hands-on Linux server experience'],
      ['Delivery', 'Pearson VUE test center or OnVUE online proctoring']
    ],
    timeline: [
      { stage: 'Study the five XK0-006 domains and build a lab', duration: '8 to 12 weeks for most candidates' },
      { stage: 'Buy voucher and schedule', duration: 'Same week; voucher valid 12 months' },
      { stage: 'Sit the exam', duration: '90 minutes; result shown on screen' },
      { stage: 'Certification posts to your CompTIA account', duration: 'Within a few days' }
    ],
    costBreakdown: {
      items: [
        { item: 'Exam voucher (XK0-006)', fee: 'Set in the CompTIA Store; about $390 on 2026 association price lists' },
        { item: 'Retake', fee: 'Full price again unless you bought a bundle with Retake Assurance' },
        { item: 'CertMaster Learn, Labs or Practice', fee: 'Optional; priced in the CompTIA Store' },
        { item: 'CE renewal fee, per three-year cycle', fee: '$150 with 50 CEUs' }
      ],
      total: 'About $390 for the exam at list, plus $150 per renewal cycle',
      footnote: 'Confirm the voucher price at checkout; CompTIA does not publish a static price table.'
    },
    difficulty: 'Moderate to hard',
    audience: 'Linux and systems administrators and DevOps staff who run Linux servers.',
    time: '90 minutes; 8 to 12 weeks of study for most candidates',
    cost: 'About $390 at list; $150 CE per cycle',
    faqs: [
      { q: 'How many questions are on the CompTIA Linux+ exam?', a: 'The CompTIA Linux+ exam, XK0-006, has a maximum of 90 questions and a 90-minute time limit. The questions are multiple-choice and performance-based, and the performance-based items put you at a simulated command line. CompTIA states a maximum rather than an exact count and does not publish an unscored-item number.' },
      { q: 'What is a passing score on CompTIA Linux+?', a: 'The passing score on CompTIA Linux+ (XK0-006) is 720 on a scale of 100 to 900. It is a scaled score rather than a percentage of correct answers. This sits between the 675 needed for Data+ and A+ Core 1 and the 750 needed for Cloud+ and CySA+.' },
      { q: 'Is the CompTIA Linux+ exam hard?', a: 'Linux+ is moderately hard because it expects about 12 months of hands-on Linux server experience and includes performance-based questions at the command line. System Management (23%) and Troubleshooting (22%) are the largest domains, and Automation, Orchestration and Scripting (17%) rewards shell scripting practice. Candidates who only read, without a lab, struggle most.' },
      { q: 'What is the difference between XK0-005 and XK0-006?', a: 'XK0-006 is Linux+ V8, launched July 15, 2025, and replaces XK0-005. V8 organizes the exam into System Management, Services and User Management, Security, Automation, Orchestration and Scripting, and Troubleshooting, and the passing score is 720. Books and courses written for XK0-005 leave gaps, so buy material that names XK0-006.' },
      { q: 'How long is CompTIA Linux+ valid?', a: 'CompTIA Linux+ is valid for three years. Renewal requires 50 continuing education units (CEUs) and the $150 CE fee for the cycle, paid before the expiration date. Passing the current Linux+ exam or a higher-level CompTIA certification that CompTIA lists as renewing it also works. Paying the fee without submitting CEUs does not renew it.' },
      { q: 'How much does the CompTIA Linux+ exam cost?', a: 'CompTIA sets the Linux+ voucher price in its store and does not publish a static table on the certification page. Association price lists in 2026 show about $390, and CompTIA says voucher prices range from $130 to $480 across its catalog. A retake costs the full price again unless a bundle includes Retake Assurance.' },
      { q: 'Do I need A+ or Network+ before Linux+?', a: 'No. CompTIA recommends 12 months of hands-on Linux server experience and says A+, Network+ or Server+, or comparable knowledge, is helpful, but it does not require any earlier certification. If you are new to IT, A+ and Network+ build the hardware and networking base that the Linux+ troubleshooting domain assumes.' }
    ],
    summaryPoints: [
      'Linux+ (XK0-006): up to 90 questions in 90 minutes, passing score 720 on a 100-900 scale.',
      'Domains: System Management 23%, Troubleshooting 22%, Services and User Management 20%, Security 18%, Automation 17%.',
      'XK0-006 launched July 15, 2025 and is estimated to retire around 2028.',
      'CompTIA recommends 12 months of hands-on Linux server experience.',
      'Valid three years; renew with 50 CEUs and a $150 CE fee.'
    ],
    relatedSlugs: ['comptia-network-plus', 'comptia-server-plus', 'comptia-cloud-plus', 'comptia-security-plus'],
    sourceUrl: 'https://www.comptia.org/en-us/certifications/linux/',
    reviewed: '2026-10',
    confidence: 'medium'
  }
];

export default { programs, exams };
