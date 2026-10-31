// Flagship rewrite - PeopleCert ITIL 4 (5 pages) + PeopleCert program dossier.
// Sources read 2026-10-20 (all PeopleCert, peoplecert.org):
//   Product pages: ITIL 4 Foundation, ITIL 4 Specialist: Create, Deliver and Support, Drive Stakeholder Value,
//   High-velocity IT, ITIL 4 Leader: Digital and IT Strategy (format, pass mark, languages, prerequisites,
//   USD prices incl. VAT, 3-year renewal / 60 CPD points, rescheduling fees, topic lists).
//   Help centre: FAQ (results within 2 business days, 12-month voucher validity, Take2, refunds, 25% extra time),
//   ITIL FAQ (current plan to sunset ITIL 4 on 31 December 2027, ITIL 4 prerequisites for Version 5),
//   Web Based Exam Driver Guidelines (ID, room, equipment, reasonable adjustments), Keep your certifications current.
// Not published and therefore omitted: pass rates, unscored-item counts, topic weightings or per-topic question counts,
//   PeopleCert Plus subscription price, Take2 price.

const BODY = 'PeopleCert';
const ITIL_PAGE = 'https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1';

export const programs = [
  {
    id: 'peoplecert',
    body: BODY,
    bodyUrl: 'https://www.peoplecert.org',
    about:
      'PeopleCert delivers the ITIL 4 qualification scheme on behalf of the ITIL IP owner, alongside PRINCE2 and DevOps Institute exams. In the ITIL 4 scheme, ITIL 4 Foundation is the entry point (40 questions, 65% to pass), the Specialist modules and ITIL 4 Leader: Digital and IT Strategy are advanced modules (70% to pass) that require accredited training, and every exam is closed book. PeopleCert states that the current plan is to sunset all ITIL 4 modules on 31 December 2027 as ITIL (Version 5) rolls out in phases.',
    registrationSteps: [
      {
        title: 'Pick the module and check its prerequisites on peoplecert.org',
        description:
          'Open the module page under Browse certifications, then IT Governance and Service Management, then ITIL. ITIL 4 Foundation lists no prerequisites. The Specialist modules and ITIL 4 Leader: Digital and IT Strategy list any ITIL v3 certification, ITIL 4 Foundation or ITIL 4 Managing Professional, plus training through an Accredited Training Organization (ATO) or ITIL Official eLearning.',
        subSteps: ['Open the product page for the exact module', 'Read the Prerequisites and Exam details tabs', 'Check whether your language is one of the exam languages (12 for Foundation, 9 for the other four)'],
        duration: '',
        note: 'For advanced modules, exam results are not released without proof of the required training.'
      },
      {
        title: 'Buy a bundle from PeopleCert or an accredited training partner',
        description:
          'On the USD pages (prices include VAT, as of October 2026) the options are an exam bundle, eLearning, or eLearning+ for Foundation ($690, $1,029, $1,338), and for the advanced modules an exam bundle for retakes only ($865), eLearning ($1,338) or eLearning+ ($1,647). An ATO can sell a voucher together with its own course instead.',
        subSteps: ['Create or sign in to your PeopleCert account', 'Choose the bundle that includes the training the module requires', 'Optionally add Take2, a resit that applies only to online-proctored exams'],
        duration: '',
        note: 'An exam code is valid for 12 months from purchase; extending it carries administrative charges.'
      },
      {
        title: 'Book a proctored exam slot in your account',
        description:
          'Choose a date and time with a live proctor. Rescheduling is free up to 48 hours before the start, USD 60 from 48 down to 4 hours before, and USD 120 inside 4 hours. If you book an exam date, it must be at least 14 days after purchase if you want the cancellation right.',
        subSteps: ['Run the system compatibility check at least 24 hours before, on the same computer and room', 'Repeat the check about 2 hours before the exam', 'Request extra time or a reader at least 5 business days before; other adjustments need 10 business days'],
        duration: '',
        note: 'Candidates whose first language differs from the exam language get 25% more time without a separate form.'
      },
      {
        title: 'Complete onboarding with your ID and room check',
        description:
          'Onboarding covers accepting the nondisclosure agreement, reading the rules, scanning an original government-issued photo ID that shows your full date of birth in Latin characters, and showing the proctor your room. Electronic IDs are not accepted, and an invalid ID or name mismatch can end the session without a refund.',
        subSteps: ['Be alone in a private room with one visible doorway', 'Use one active screen of at least 15 inches and a rotatable webcam (a phone cannot serve as the webcam)', 'Keep the microphone on for the whole exam'],
        duration: '',
        note: 'ID and room checks do not use up exam time.'
      },
      {
        title: 'Take the exam and save the preliminary result',
        description:
          'Exams under two hours have no breaks. The result appears on screen when you finish and you can save it as HTML or PDF. Official results follow within 2 business days of submission, and your digital badge and e-certificate are issued to your PeopleCert account.',
        subSteps: ['Answer every question before time runs out', 'Submit before the timer ends', 'Download the preliminary result'],
        duration: '40 questions in 60 or 90 minutes, or 30 questions in 60 minutes for Leader',
        note: ''
      }
    ],
    proctoring:
      'Delivered through the PeopleCert Web Based Exam Driver with a live proctor who sees you and your desktop and can speak with you by two-way voice. You need a private quiet room, one 15-inch or larger screen at 1024 x 768 or better, a rotatable webcam, a Windows 10/11 or macOS 10.14+ computer, Chrome, Edge or Opera, and at least 4 Mbps. Note-taking is not allowed. If your connection drops, the proctor pauses the timer.',
    retakePolicy:
      'The product pages say the exam bundle on advanced modules is for retakes, and eLearning+ includes one free retake. Take2 is a paid resit add-on for the same exam, available only with online proctoring and only if the first result is a fail; it can be bought up to 15 minutes before the first exam. The FAQ states no waiting period and no maximum number of attempts.',
    recertification:
      'ITIL 4 certificates renew every 3 years and require 60 CPD points. PeopleCert Plus members log 20 CPD points per year for three consecutive years. Without membership, you renew by passing another certification in the same product suite (ITIL, PRINCE2 or DevOps Institute) or the same exam again. PeopleCert states that passing any ITIL (Version 5) certification also renews ITIL 4 certificates. The Plus subscription price is not listed on the renewal page.',
    scoreReporting:
      'A preliminary pass or fail result is shown on screen at the end of the exam. Official results are issued within 2 business days of submission, and the digital badge, official results and e-certificate are placed in your PeopleCert account. Hard-copy certificates take 4 to 6 weeks to Europe and 6 to 8 weeks elsewhere by standard delivery. Pass marks are percentages: 65% for Foundation and 70% for the advanced modules.',
    refundPolicy:
      'A written cancellation request must reach customerservice@peoplecert.org within 14 days of the initial payment, and a booked exam date must be at least 14 days away. Refunds go to the card used. Rescheduling is free up to 48 hours before the exam, USD 60 from 48 to 4 hours before, and USD 120 inside 4 hours (EUR 70/135, GBP 60/115 in other currencies).',
    providersNote:
      'PeopleCert sells its own Official eLearning, eBook, Learning Resource Kit and Official Mock Exam (Version A and B for Foundation). Accredited Training Organizations also sell instructor-led courses with vouchers. Advanced ITIL 4 modules require accredited training or Official eLearning, so independent books or question banks cannot replace it for exam release.',
    comparison: {
      title: 'ITIL 4 exams compared (PeopleCert USD list prices, October 2026)',
      columns: ['Exam', 'Format', 'Prerequisite', 'PeopleCert price'],
      rows: [
        { label: 'ITIL 4 Foundation', values: ['40 questions, 60 min, 65% (26/40)', 'None', '$690 exam bundle; $1,029 eLearning; $1,338 eLearning+'] },
        { label: 'ITIL 4 Specialist: Create, Deliver and Support', values: ['40 questions, 90 min, 70% (28/40)', 'ITIL v3 certificate, Foundation or Managing Professional, plus accredited training', '$865 retake bundle; $1,338 eLearning; $1,647 eLearning+'] },
        { label: 'ITIL 4 Specialist: Drive Stakeholder Value', values: ['40 questions, 90 min, 70% (28/40)', 'Same as above', '$865 retake bundle; $1,338 eLearning; $1,647 eLearning+'] },
        { label: 'ITIL 4 Specialist: High-velocity IT', values: ['40 questions, 90 min, 70% (28/40)', 'Same as above', '$865 retake bundle; $1,338 eLearning; $1,647 eLearning+'] },
        { label: 'ITIL 4 Leader: Digital and IT Strategy', values: ['30 questions, 60 min, 70% (21/30)', 'Same as above', '$865 retake bundle; $1,338 eLearning; $1,647 eLearning+'] }
      ]
    },
    orgFaqs: [
      {
        q: 'How much does a PeopleCert ITIL 4 exam cost?',
        a: 'On PeopleCert USD pages, as of October 2026, ITIL 4 Foundation is $690 as an exam bundle, and the advanced modules start at $1,338 as eLearning because training is required before results are released. The $865 exam bundle on advanced modules is for retakes only. Prices include VAT and differ by country and training partner.'
      },
      {
        q: 'Are PeopleCert ITIL 4 exams online or at a test centre?',
        a: 'PeopleCert ITIL 4 exams are taken online with a live remote proctor through its Web Based Exam Driver. You need a private room, one screen of at least 15 inches, a rotatable webcam and a 4 Mbps connection. The FAQ also mentions Prometric exams for some programs, so confirm the delivery options on your own module page.'
      },
      {
        q: 'Is ITIL 4 being retired?',
        a: 'PeopleCert says the current plan is to sunset all ITIL 4 modules on 31 December 2027, and exam voucher validity dates will be announced later. ITIL (Version 5) is rolling out in phases, ITIL 4 qualifications remain accepted prerequisites for higher ITIL (Version 5) certifications, and passing any ITIL (Version 5) certification renews ITIL 4 certificates.'
      }
    ],
    sourceUrl: 'https://www.peoplecert.org/help-and-support/faq-itil',
    confidence: 'high'
  }
];

// Facts shared by the four modules that sit on the Managing Professional / Strategic Leader pages.
const ADV_PRICE =
  'US$1,338 eLearning (exam voucher, eBook, Learning Resource Kit, interactive eLearning); US$1,647 eLearning+ (adds one free retake and the Official Mock Exam); US$865 exam bundle for retakes only. PeopleCert USD pages, incl. VAT, October 2026';
const ADV_COST_ITEMS = [
  { item: 'PeopleCert eLearning with exam voucher, eBook and Learning Resource Kit (first attempt)', fee: '$1,338' },
  { item: 'PeopleCert eLearning+ (adds one free exam retake and an Official Mock Exam)', fee: '$1,647' },
  { item: 'Exam bundle for a retake (requires prior accredited training)', fee: '$865' },
  { item: 'Reschedule 48 to 4 hours before the exam / inside 4 hours', fee: '$60 / $120' },
  { item: 'Accredited Training Organization course with voucher', fee: 'Set by the training partner' }
];
const ADV_RENEW = 'Renews every 3 years with 60 CPD points, or by passing another exam in the same product suite';

const RENEW_ANSWER =
  'An ITIL 4 certificate must be renewed every 3 years and needs 60 CPD points. PeopleCert Plus members log 20 CPD points per year for three years. Otherwise you can pass another exam in the same product suite or retake the same exam before the renewal date. Passing any ITIL (Version 5) certification also renews ITIL 4 certificates, per the ITIL FAQ.';
const SUNSET_ANSWER =
  'PeopleCert states that the current plan is to sunset all ITIL 4 modules on 31 December 2027, and voucher validity dates are still to be announced. ITIL (Version 5) is being released in phases. ITIL 4 qualifications remain recognized prerequisites for higher ITIL (Version 5) certifications, so an ITIL 4 pass keeps its value on the new path.';
const ADV_PREREQ_ANSWER =
  'The module page lists any ITIL v3 certification, ITIL 4 Foundation or ITIL 4 Managing Professional as the prerequisite. You must also complete training through an Accredited Training Organization or ITIL Official eLearning, and PeopleCert will not release exam results without proof of that training. Foundation alone is not enough without the course.';
const ADV_RETAKE_ANSWER =
  'The exam bundle at $865 is designed for retakes, and eLearning+ at $1,647 includes one free retake. PeopleCert also sells Take2, a resit add-on for online-proctored exams that is enabled only after a failed result. The help centre gives no waiting period or maximum number of attempts, so confirm the terms of your purchase.';
const EXTRA_TIME_90 =
  'Candidates whose first language differs from the exam language receive 25% more time, which turns a 90-minute exam into 112.5 minutes. Requests for extra time, a reader or a scribe are due at least 5 business days before the exam, and other adjustments need 10 business days. Confirm the exact minutes at booking.';
const RESULT_ANSWER =
  'Preliminary pass or fail appears on screen as soon as you submit, and you can save it as HTML or PDF. Official results follow within 2 business days of submission, and your digital badge and e-certificate are issued to your PeopleCert account. Hard-copy certificates take 4 to 8 weeks depending on region.';

export const exams = [
  {
    slug: 'itil-4-foundation',
    body: BODY,
    tagline: 'The entry-level ITIL 4 exam: 40 closed-book questions, 65% to pass, no prerequisites.',
    description:
      'The ITIL 4 Foundation exam has 40 multiple-choice questions in 60 minutes and a pass mark of 65% (26 correct), closed book. ITIL 4 Foundation is the entry point to the PeopleCert ITIL 4 scheme and the only ITIL 4 exam with no prerequisite, so IT support staff, project and product people, and managers all start here. It covers service management concepts, the service value system, the four dimensions, the seven guiding principles, the service value chain, ITIL practices and continual improvement. PeopleCert lists it in 12 languages. A Foundation pass is also recognized as a prerequisite for the higher-level ITIL (Version 5) certifications.',
    quickAnswer: {
      summary:
        'ITIL 4 Foundation is a closed-book PeopleCert exam of 40 multiple-choice questions in 60 minutes, and you need 65% (26 correct) to pass. There are no prerequisites. The exam bundle with voucher, eBook and Learning Resource Kit is $690 on the PeopleCert USD page as of October 2026, and the certificate renews every 3 years.',
      advantages: [
        'No prerequisite and no mandatory course: the exam bundle is $690 and the eLearning is about 9 hours.',
        'Opens the ITIL 4 ladder: Foundation (or an ITIL v3 certificate) is the prerequisite listed on every ITIL 4 Specialist and Leader module.',
        'Pass mark is a fixed 65% (26 of 40), published on the PeopleCert page, with 25% extra time for non-native speakers (75 minutes).',
        'Taken online with a live proctor, with preliminary pass or fail on screen and official results within 2 business days.'
      ]
    },
    roadmap: [
      'Read the Foundation page and syllabus topics on peoplecert.org',
      'Choose the $690 exam bundle, eLearning or eLearning+ (or an accredited course)',
      'Book a proctored slot and run the system check 24 hours before',
      'Sit the 40-question, 60-minute exam and save the preliminary result',
      'Collect the digital badge and diarize the 3-year renewal'
    ],
    prerequisites: 'None. PeopleCert lists no prerequisites for ITIL 4 Foundation and describes it as suitable for any career stage.',
    eligibility:
      'Anyone can register; there is no experience, education or training requirement. PeopleCert sells an exam bundle on its own, so training is optional for this exam. Candidates under 16 need a legal guardian present during onboarding. ID must be an original government-issued photo ID in Latin characters.',
    examMeta: {
      questions: '40 multiple-choice questions (PeopleCert lists no unscored items); 26 correct needed',
      time: '60 minutes (75 minutes with the 25% extra time for non-native speakers of the exam language)',
      pass: '65% (26 of 40 correct)',
      fee: 'US$690 exam bundle (voucher, eBook, Learning Resource Kit); US$1,029 eLearning; US$1,338 eLearning+ with a free retake. PeopleCert USD page incl. VAT, October 2026',
      format: 'Closed book, multiple choice, taken online with a live remote proctor; 12 languages',
      admin: 'PeopleCert (on behalf of the ITIL IP owner)'
    },
    topics: [
      { name: 'Service management concepts', weight: '', note: 'What a service is, its components and its value to stakeholders. PeopleCert publishes no per-topic weights or question counts on the product page.' },
      { name: 'Service value system', weight: '', note: 'Creating, delivering and managing services, including the service value chain, guiding principles and governance.' },
      { name: 'Four dimensions of service management', weight: '', note: 'Organizations and people, information and technology, partners and suppliers, and value streams and processes.' },
      { name: 'Seven guiding principles', weight: '', note: 'Used to adopt and adapt ITIL practices, for example focus on value and start where you are.' },
      { name: 'Service value chain', weight: '', note: 'Creating value by optimizing activities and resources.' },
      { name: 'ITIL practices', weight: '', note: 'Aligning working methods with business strategy and supporting users, such as incident, problem and change practices.' },
      { name: 'Continual improvement', weight: '', note: 'Iterating and adapting processes and services.' },
      { name: 'Service level management', weight: '', note: 'Service level agreements and key metrics and KPIs for measuring service performance.' }
    ],
    examEssentials: [
      ['Delivery', 'Online with a live proctor through the PeopleCert Web Based Exam Driver; no breaks for exams under two hours'],
      ['Pass mark', '65%, which is 26 of 40 correct answers'],
      ['Extra time', '25% more time (75 minutes) if your first language differs from the exam language'],
      ['Voucher validity', '12 months from purchase; extensions carry administrative charges'],
      ['Reschedule', 'Free up to 48 hours before; USD 60 from 48 to 4 hours; USD 120 inside 4 hours'],
      ['Results', 'Preliminary on screen; official results within 2 business days of submission'],
      ['Validity', '3 years; renew with 60 CPD points or by passing another exam in the same product suite']
    ],
    timeline: [
      { stage: 'Study', duration: 'The Official eLearning is about 9 hours of content; plan your own revision on top' },
      { stage: 'Booking', duration: 'Pick a proctored slot within the 12-month voucher validity; run the system check 24 hours before' },
      { stage: 'Exam', duration: '60 minutes (75 with extra time)' },
      { stage: 'Official result and badge', duration: 'Within 2 business days of submission' }
    ],
    costBreakdown: {
      items: [
        { item: 'Exam bundle: voucher, Official eBook, Learning Resource Kit', fee: '$690' },
        { item: 'eLearning (adds interactive course and auto-marked sample papers)', fee: '$1,029' },
        { item: 'eLearning+ (adds one free retake and an Official Mock Exam)', fee: '$1,338' },
        { item: 'Reschedule 48 to 4 hours before / inside 4 hours', fee: '$60 / $120' }
      ],
      total: '$690 to $1,338 depending on the bundle (as of October 2026, incl. VAT, PeopleCert USD page)',
      footnote: 'Prices differ by country and training partner. Renewal is by CPD or another exam; the PeopleCert Plus price is not listed on the renewal page.'
    },
    difficulty: 'Moderate',
    audience: 'IT support, service delivery, project and product staff, and managers who need a shared service management vocabulary.',
    time: '2 to 4 weeks of part-time study (the Official eLearning alone is about 9 hours)',
    cost: '$690 to $1,338',
    faqs: [
      { q: 'How many questions are on the ITIL 4 Foundation exam?', a: 'The ITIL 4 Foundation exam has 40 multiple-choice questions and you need 26 correct, which is the published 65% pass mark. You get 60 minutes, or 75 if your first language differs from the exam language. The exam is closed book, so definitions and terms must be memorized.' },
      { q: 'What is the passing score for ITIL 4 Foundation?', a: 'The passing score for ITIL 4 Foundation is 65%, equal to 26 correct answers out of 40. PeopleCert states this on its product page. There is no sectional minimum listed, and the score is not scaled, so every correct answer counts toward the 26 you need.' },
      { q: 'Is the ITIL 4 Foundation exam hard?', a: 'Most candidates find ITIL 4 Foundation moderate: it tests definitions and concepts rather than hands-on skills, and the pass mark is 65%. PeopleCert exam pages publish no pass rate, so no official difficulty figure exists. The closed-book format means you must recall exact terms such as incident, problem and change enablement.' },
      { q: 'How much does the ITIL 4 Foundation exam cost?', a: 'On the PeopleCert USD page, as of October 2026, the exam bundle is $690 and includes the exam voucher, Official eBook and Learning Resource Kit. eLearning is $1,029 and eLearning+ is $1,338 with one free retake. Prices include VAT and vary by country and training partner.' },
      { q: 'Do I need training to take ITIL 4 Foundation?', a: 'No. PeopleCert lists no prerequisites and sells the exam bundle without a course, so training is optional for Foundation. The advanced ITIL 4 modules are different: they require accredited training before results are released. An accredited Foundation course is still worth considering if you want guided preparation.' },
      { q: 'How long is ITIL 4 Foundation valid?', a: RENEW_ANSWER },
      { q: 'Is ITIL 4 Foundation still worth taking now that ITIL 5 exists?', a: SUNSET_ANSWER + ' Candidates who need the credential for work or for ITIL 4 modules can still sit it.' },
      { q: 'When do I get my ITIL 4 Foundation result?', a: RESULT_ANSWER }
    ],
    summaryPoints: [
      'ITIL 4 Foundation is 40 multiple-choice questions in 60 minutes, closed book, with a pass mark of 65% (26 of 40).',
      'The exam bundle is $690 and eLearning+ with a free retake is $1,338 on the PeopleCert USD page as of October 2026.',
      'There are no prerequisites; Foundation is the entry point for every ITIL 4 Specialist and Leader module.',
      'The certificate lasts 3 years, renewed with 60 CPD points or another exam from the same product suite.',
      'PeopleCert plans to sunset ITIL 4 modules on 31 December 2027; ITIL 4 qualifications remain accepted prerequisites for ITIL (Version 5).'
    ],
    relatedSlugs: ['itil-4-specialist-create-deliver-and-support', 'itil-4-managing-professional', 'prince2-foundation', 'itil-4-specialist-drive-stakeholder-value'],
    sourceUrl: 'https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-foundation-2565',
    reviewed: '2026-10',
    confidence: 'high'
  },

  {
    slug: 'itil-4-specialist-create-deliver-and-support',
    body: BODY,
    tagline: 'The ITIL 4 Managing Professional module on building, running and supporting services: 40 questions, 90 minutes, 70% to pass.',
    description:
      'The ITIL 4 Specialist: Create, Deliver and Support (CDS) exam has 40 multiple-choice questions in 90 minutes and a pass mark of 70% (28 correct), closed book. CDS is one of the four Managing Professional modules and the one aimed at people who build, run and support services day to day: service desk leads, operations and infrastructure managers, and delivery staff. PeopleCert lists nine topic areas, including service design and development, service delivery, service support, service performance metrics and service automation and technology. Accredited training is required before results are released.',
    quickAnswer: {
      summary:
        'ITIL 4 Specialist: Create, Deliver and Support is a closed-book PeopleCert exam of 40 multiple-choice questions in 90 minutes with a 70% pass mark (28 correct). It needs accredited training or Official eLearning, which is $1,338 on the PeopleCert USD page as of October 2026, plus an ITIL v3 certificate, Foundation or Managing Professional.',
      advantages: [
        'Counts toward the ITIL 4 Managing Professional designation alongside Drive Stakeholder Value, High-velocity IT and Direct, Plan and Improve.',
        'Covers the operational half of ITIL: service design and development, delivery, support, performance metrics and automation.',
        'Published format: 40 questions, 90 minutes, 70% pass mark, nine exam languages.',
        'Pass counts toward renewal of other ITIL certificates in the same product suite within the 3-year cycle.'
      ]
    },
    roadmap: [
      'Hold ITIL 4 Foundation, an ITIL v3 certificate or ITIL 4 Managing Professional',
      'Buy PeopleCert eLearning or an accredited course with the voucher',
      'Book a proctored slot and run the 24-hour system check',
      'Sit the 40-question, 90-minute exam',
      'Receive official results within 2 business days and log the certificate'
    ],
    prerequisites: 'Any ITIL v3 certification, ITIL 4 Foundation or ITIL 4 Managing Professional, plus training through an Accredited Training Organization or ITIL Official eLearning.',
    eligibility:
      'PeopleCert states that exam results will not be released without proof of completing the required training. The exam bundle at $865 is sold for retakes only and also requires prior accredited training. ID must be an original government-issued photo ID in Latin characters that matches your booking.',
    examMeta: {
      questions: '40 multiple-choice questions (PeopleCert lists no unscored items); 28 correct needed',
      time: '90 minutes (about 113 minutes with the 25% extra time for non-native speakers)',
      pass: '70% (28 of 40 correct)',
      fee: ADV_PRICE,
      format: 'Closed book, multiple choice, taken online with a live remote proctor; 9 languages',
      admin: 'PeopleCert (on behalf of the ITIL IP owner)'
    },
    topics: [
      { name: 'Service design and development', weight: '', note: 'One of nine topic areas on the PeopleCert page; no per-topic weights or counts are published.' },
      { name: 'Service delivery', weight: '', note: 'How services are delivered to users and customers.' },
      { name: 'Service support', weight: '', note: 'Supporting services and users through practices such as incident handling.' },
      { name: 'Service performance metrics', weight: '', note: 'Measuring and reporting how services perform.' },
      { name: 'Service automation and technology', weight: '', note: 'Using automation and tooling across delivery and support.' },
      { name: 'Culture and collaboration', weight: '', note: 'Working across teams to deliver and support services.' },
      { name: 'Continuous improvement', weight: '', note: 'Improving the services and the way they are delivered.' },
      { name: 'Customer and user experience', weight: '', note: 'Designing and supporting services around user needs.' },
      { name: 'ITIL 4 guiding principles', weight: '', note: 'Applying the guiding principles to creating, delivering and supporting services.' }
    ],
    examEssentials: [
      ['Delivery', 'Online with a live proctor; exams under two hours have no breaks'],
      ['Pass mark', '70%, which is 28 of 40 correct answers'],
      ['Prerequisite proof', 'Results are not released without proof of accredited training or ITIL Official eLearning'],
      ['Extra time', '25% more time if your first language differs from the exam language'],
      ['Voucher validity', '12 months from purchase'],
      ['Reschedule', 'Free up to 48 hours before; USD 60 from 48 to 4 hours; USD 120 inside 4 hours'],
      ['Validity', '3 years; renew with 60 CPD points or another exam from the same product suite']
    ],
    timeline: [
      { stage: 'Training', duration: 'Set by the training route you choose: PeopleCert eLearning or an accredited course' },
      { stage: 'Exam booking', duration: 'Within the 12-month voucher validity; system check 24 hours before' },
      { stage: 'Exam', duration: '90 minutes' },
      { stage: 'Official result and badge', duration: 'Within 2 business days of submission' }
    ],
    costBreakdown: {
      items: ADV_COST_ITEMS,
      total: '$1,338 to $1,647 for a first attempt through PeopleCert (as of October 2026, incl. VAT), plus $865 for any retake bundle',
      footnote: 'PeopleCert lists no exam-only voucher for a first attempt on this module; accredited training is required. Prices differ by country and partner.'
    },
    difficulty: 'Moderate',
    audience: 'Service desk, operations and support leads who build, run and support IT services and are working toward ITIL 4 Managing Professional.',
    time: '3 to 6 weeks including the required training',
    cost: '$1,338 to $1,647',
    faqs: [
      { q: 'How many questions are on the ITIL 4 Create, Deliver and Support exam?', a: 'The ITIL 4 Specialist: Create, Deliver and Support exam has 40 multiple-choice questions in 90 minutes. It is closed book, and the pass mark is 70%, which is 28 correct answers. PeopleCert publishes no sectional minimums or topic weights on the module page.' },
      { q: 'What is the passing score for ITIL 4 Create, Deliver and Support?', a: 'The passing score is 70% of the 40 questions, which equals 28 correct. This is higher than ITIL 4 Foundation at 65%. PeopleCert states the mark on the module page and publishes no pass rate, so the 28 correct answers are the only official benchmark.' },
      { q: 'What are the prerequisites for ITIL 4 Create, Deliver and Support?', a: ADV_PREREQ_ANSWER },
      { q: 'How much does the ITIL 4 Create, Deliver and Support exam cost?', a: 'On the PeopleCert USD page, as of October 2026, eLearning with the exam voucher is $1,338 and eLearning+ with a free retake and an Official Mock Exam is $1,647. The $865 exam bundle is for retakes only. Prices include VAT and differ by country and training partner.' },
      { q: 'Is the ITIL 4 Create, Deliver and Support exam hard?', a: 'It is harder than Foundation because it has a 70% pass mark and scenario-style questions on service delivery and support, in a closed-book exam. PeopleCert pages publish no pass rate. Candidates who finished the required accredited training and practiced the Official Mock Exam are best placed.' },
      { q: 'Can I retake ITIL 4 Create, Deliver and Support if I fail?', a: ADV_RETAKE_ANSWER },
      { q: 'How much extra time can I get on the ITIL 4 Create, Deliver and Support exam?', a: EXTRA_TIME_90 },
      { q: 'How long is the ITIL 4 Create, Deliver and Support certificate valid?', a: RENEW_ANSWER },
      { q: 'Should I still take an ITIL 4 Specialist module with ITIL 5 available?', a: SUNSET_ANSWER }
    ],
    summaryPoints: [
      'ITIL 4 Create, Deliver and Support is 40 multiple-choice questions in 90 minutes, closed book, with a pass mark of 70% (28 of 40).',
      'Accredited training or ITIL Official eLearning is required; eLearning is $1,338 and eLearning+ is $1,647 on the PeopleCert USD page as of October 2026.',
      'The exam bundle at $865 is for retakes only, and rescheduling costs $60 inside 48 hours and $120 inside 4 hours.',
      'It is one of the four ITIL 4 Managing Professional modules, and the certificate renews every 3 years with 60 CPD points.',
      'PeopleCert plans to sunset ITIL 4 modules on 31 December 2027.'
    ],
    relatedSlugs: ['itil-4-specialist-drive-stakeholder-value', 'itil-4-specialist-high-velocity-it', 'itil-4-managing-professional', 'itil-4-foundation'],
    sourceUrl: 'https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-specialist-create-deliver-and-support-2693',
    reviewed: '2026-10',
    confidence: 'high'
  },

  {
    slug: 'itil-4-specialist-drive-stakeholder-value',
    body: BODY,
    tagline: 'The ITIL 4 Managing Professional module on stakeholder relationships, customer journeys and value co-creation.',
    description:
      'The ITIL 4 Specialist: Drive Stakeholder Value (DSV) exam has 40 multiple-choice questions in 90 minutes and a pass mark of 70% (28 correct), closed book. DSV is the relationship-facing Managing Professional module, built for service managers, account and customer success staff, and business relationship managers who connect IT with customers, users and partners. PeopleCert lists nine topic areas: stakeholder needs and expectations, customer experience management, service relationships, value co-creation, service level management, service metrics and KPIs, customer journey mapping, service improvement, and communication and collaboration.',
    quickAnswer: {
      summary:
        'ITIL 4 Specialist: Drive Stakeholder Value has 40 closed-book multiple-choice questions in 90 minutes and a 70% pass mark (28 correct). Accredited training is required, so a first attempt costs $1,338 for eLearning or $1,647 for eLearning+ on the PeopleCert USD page as of October 2026.',
      advantages: [
        'The module for stakeholder engagement: customer journeys, service relationships, value co-creation and service level management.',
        'Counts toward ITIL 4 Managing Professional with Create, Deliver and Support, High-velocity IT and Direct, Plan and Improve.',
        'Published format of 40 questions, 90 minutes and a 70% pass mark makes pacing predictable (about 2 minutes 15 seconds per question).',
        'eLearning+ adds an Official Mock Exam and one free retake, which lowers the cost of a failed first attempt.'
      ]
    },
    roadmap: [
      'Confirm you hold ITIL 4 Foundation, an ITIL v3 certificate or Managing Professional',
      'Complete accredited training or ITIL Official eLearning',
      'Book a proctored slot and run the system check 24 hours before',
      'Sit the 40-question, 90-minute exam',
      'Keep proof of training on your account so results are released'
    ],
    prerequisites: 'Any ITIL v3 certification, ITIL 4 Foundation or ITIL 4 Managing Professional, plus training through an Accredited Training Organization or ITIL Official eLearning.',
    eligibility:
      'PeopleCert withholds exam results until it has proof of the required training. The exam bundle at $865 is for learners who already completed that training and are re-sitting. Name on your government-issued photo ID must match your booking in Latin characters, or the proctor can end the session without a refund.',
    examMeta: {
      questions: '40 multiple-choice questions (PeopleCert lists no unscored items); 28 correct needed',
      time: '90 minutes (about 113 minutes with the 25% extra time for non-native speakers)',
      pass: '70% (28 of 40 correct)',
      fee: ADV_PRICE,
      format: 'Closed book, multiple choice, taken online with a live remote proctor; 9 languages',
      admin: 'PeopleCert (on behalf of the ITIL IP owner)'
    },
    topics: [
      { name: 'Understanding stakeholder needs and expectations', weight: '', note: 'Identifying, assessing and prioritizing the needs of customers, employees, partners and regulators. PeopleCert publishes no topic weights.' },
      { name: 'Customer experience management', weight: '', note: 'Managing the experience stakeholders have of the service.' },
      { name: 'Service relationships', weight: '', note: 'Building and sustaining relationships between provider and consumer.' },
      { name: 'Value co-creation', weight: '', note: 'Creating value jointly with customers and partners.' },
      { name: 'Service level management', weight: '', note: 'Defining and managing agreed service levels.' },
      { name: 'Service metrics and KPIs', weight: '', note: 'Measuring service outcomes and reporting them to stakeholders.' },
      { name: 'Customer journey mapping', weight: '', note: 'Mapping the steps a customer takes through a service.' },
      { name: 'Service improvement', weight: '', note: 'Improving services based on stakeholder feedback and results.' },
      { name: 'Communication and collaboration', weight: '', note: 'Communicating and working with stakeholders across the value stream.' }
    ],
    examEssentials: [
      ['Delivery', 'Online with a live proctor; no breaks for exams under two hours'],
      ['Pass mark', '70%, which is 28 of 40 correct answers'],
      ['Prerequisite proof', 'Results are not released without proof of accredited training or ITIL Official eLearning'],
      ['Extra time', '25% more time for non-native speakers of the exam language; requests due 5 business days before'],
      ['Voucher validity', '12 months from purchase'],
      ['Reschedule', 'Free up to 48 hours before; USD 60 from 48 to 4 hours; USD 120 inside 4 hours'],
      ['Validity', '3 years; 60 CPD points or another exam from the same product suite']
    ],
    timeline: [
      { stage: 'Training', duration: 'Depends on the route: PeopleCert eLearning or an accredited course' },
      { stage: 'Exam booking', duration: 'Within the 12-month voucher validity; system check 24 hours before' },
      { stage: 'Exam', duration: '90 minutes' },
      { stage: 'Official result and badge', duration: 'Within 2 business days of submission' }
    ],
    costBreakdown: {
      items: ADV_COST_ITEMS,
      total: '$1,338 to $1,647 for a first attempt through PeopleCert (as of October 2026, incl. VAT), plus $865 for any retake bundle',
      footnote: 'PeopleCert lists no exam-only voucher for a first attempt on this module. Prices differ by country and training partner.'
    },
    difficulty: 'Moderate',
    audience: 'Service managers, customer success, account and business relationship staff working toward ITIL 4 Managing Professional.',
    time: '3 to 6 weeks including the required training',
    cost: '$1,338 to $1,647',
    faqs: [
      { q: 'How many questions are on the ITIL 4 Drive Stakeholder Value exam?', a: 'The ITIL 4 Specialist: Drive Stakeholder Value exam has 40 multiple-choice questions in 90 minutes. It is closed book and the pass mark is 70%, so you need 28 correct. PeopleCert lists nine syllabus topics but does not publish weights or question counts for each.' },
      { q: 'What is the passing score for ITIL 4 Drive Stakeholder Value?', a: 'The passing score is 70%, which is 28 of 40 correct answers. PeopleCert states this on the module page. Foundation uses 65%, so Specialist modules ask for slightly more. No pass rate is published, so the 28-answer threshold is the only official number.' },
      { q: 'What does ITIL 4 Drive Stakeholder Value cover?', a: 'ITIL 4 Drive Stakeholder Value covers understanding stakeholder needs and expectations, customer experience management, service relationships, value co-creation, service level management, service metrics and KPIs, customer journey mapping, service improvement, and communication and collaboration. Questions are scenario-style multiple choice, answered from the ITIL 4 guidance.' },
      { q: 'What are the prerequisites for ITIL 4 Drive Stakeholder Value?', a: ADV_PREREQ_ANSWER },
      { q: 'How much does the ITIL 4 Drive Stakeholder Value exam cost?', a: 'On the PeopleCert USD page, as of October 2026, eLearning with the exam voucher is $1,338, and eLearning+ is $1,647 with a free retake and an Official Mock Exam. The $865 exam bundle is only for retakes. Prices include VAT and vary by country and training partner.' },
      { q: 'Is the ITIL 4 Drive Stakeholder Value exam hard?', a: 'It is moderate for people who finished the required training, but harder than Foundation because it needs 70% and tests how concepts apply to stakeholder scenarios, with no notes allowed. PeopleCert pages publish no pass rate, so use the Official Mock Exam to test yourself.' },
      { q: 'Can I retake ITIL 4 Drive Stakeholder Value if I fail?', a: ADV_RETAKE_ANSWER },
      { q: 'How long does ITIL 4 Drive Stakeholder Value stay valid?', a: RENEW_ANSWER },
      { q: 'Is ITIL 4 Drive Stakeholder Value being retired?', a: SUNSET_ANSWER }
    ],
    summaryPoints: [
      'ITIL 4 Drive Stakeholder Value is 40 multiple-choice questions in 90 minutes, closed book, with a pass mark of 70% (28 of 40).',
      'eLearning with the voucher is $1,338 and eLearning+ is $1,647 on the PeopleCert USD page as of October 2026; the $865 bundle is for retakes.',
      'Prerequisite: any ITIL v3 certificate, ITIL 4 Foundation or Managing Professional, plus accredited training or Official eLearning.',
      'It is one of four ITIL 4 Managing Professional modules and the certificate renews every 3 years with 60 CPD points.',
      'PeopleCert plans to sunset ITIL 4 modules on 31 December 2027.'
    ],
    relatedSlugs: ['itil-4-specialist-create-deliver-and-support', 'itil-4-specialist-high-velocity-it', 'itil-4-managing-professional', 'itil-4-foundation'],
    sourceUrl: 'https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-specialist-drive-stakeholder-value-2812',
    reviewed: '2026-10',
    confidence: 'high'
  },

  {
    slug: 'itil-4-specialist-high-velocity-it',
    body: BODY,
    tagline: 'The ITIL 4 Managing Professional module on digital products, Agile, DevOps and automation.',
    description:
      'The ITIL 4 Specialist: High-velocity IT (HVIT) exam has 40 multiple-choice questions in 90 minutes and a pass mark of 70% (28 correct), closed book. HVIT is the digital-delivery module of the Managing Professional stream, written for product owners, DevOps and Agile team leads and IT managers running fast-moving digital services. PeopleCert lists nine topic areas: digital transformation strategies, Agile and DevOps principles, Lean and continuous improvement, automation including AI and ML, digital product management, service resilience, service performance metrics, customer-centric approaches and culture.',
    quickAnswer: {
      summary:
        'ITIL 4 Specialist: High-velocity IT has 40 closed-book multiple-choice questions in 90 minutes and a 70% pass mark (28 correct). It requires accredited training or Official eLearning, priced at $1,338 or $1,647 for eLearning+ on the PeopleCert USD page as of October 2026, and counts toward ITIL 4 Managing Professional.',
      advantages: [
        'Links ITIL to modern delivery: Agile, DevOps, Lean, automation including AI and ML, and digital product management.',
        'Counts toward ITIL 4 Managing Professional with Create, Deliver and Support, Drive Stakeholder Value and Direct, Plan and Improve.',
        'Published format of 40 questions, 90 minutes and 70% pass mark, available in nine languages.',
        'Rescheduling is free until 48 hours before the exam, which gives room to plan around a release schedule.'
      ]
    },
    roadmap: [
      'Hold ITIL 4 Foundation, an ITIL v3 certificate or Managing Professional',
      'Complete accredited training or ITIL Official eLearning',
      'Book a proctored slot and run the system check 24 hours before',
      'Sit the 40-question, 90-minute exam',
      'Check that training proof is on your account so results release'
    ],
    prerequisites: 'Any ITIL v3 certification, ITIL 4 Foundation or ITIL 4 Managing Professional, plus training through an Accredited Training Organization or ITIL Official eLearning.',
    eligibility:
      'PeopleCert will not release results without proof of completing the required training. The $865 exam bundle is for retakes only. ID must be an original government-issued photo ID with your full date of birth in Latin characters, and electronic IDs are not accepted.',
    examMeta: {
      questions: '40 multiple-choice questions (PeopleCert lists no unscored items); 28 correct needed',
      time: '90 minutes (about 113 minutes with the 25% extra time for non-native speakers)',
      pass: '70% (28 of 40 correct)',
      fee: ADV_PRICE,
      format: 'Closed book, multiple choice, taken online with a live remote proctor; 9 languages',
      admin: 'PeopleCert (on behalf of the ITIL IP owner)'
    },
    topics: [
      { name: 'Digital transformation strategies', weight: '', note: 'One of nine topic areas listed by PeopleCert; no weights or question counts are published.' },
      { name: 'Agile and DevOps principles', weight: '', note: 'How Agile and DevOps ways of working fit with ITIL 4.' },
      { name: 'Lean and continuous improvement', weight: '', note: 'Lean thinking and improvement in high-velocity delivery.' },
      { name: 'Automation (including AI and ML)', weight: '', note: 'Automation, AI and machine learning in service delivery.' },
      { name: 'Digital product management', weight: '', note: 'Managing digital products across their lifecycle.' },
      { name: 'Service resilience', weight: '', note: 'Keeping fast-changing services stable and recoverable.' },
      { name: 'Service performance metrics', weight: '', note: 'Measuring performance of digital services.' },
      { name: 'Customer-centric approaches', weight: '', note: 'Building products and services around customer outcomes.' },
      { name: 'Culture', weight: '', note: 'Culture needed for high-velocity delivery.' }
    ],
    examEssentials: [
      ['Delivery', 'Online with a live proctor; no breaks for exams under two hours'],
      ['Pass mark', '70%, which is 28 of 40 correct answers'],
      ['Prerequisite proof', 'Results are not released without proof of accredited training or ITIL Official eLearning'],
      ['Extra time', '25% more time for non-native speakers of the exam language'],
      ['Voucher validity', '12 months from purchase'],
      ['Reschedule', 'Free up to 48 hours before; USD 60 from 48 to 4 hours; USD 120 inside 4 hours'],
      ['Validity', '3 years; 60 CPD points or another exam from the same product suite']
    ],
    timeline: [
      { stage: 'Training', duration: 'Depends on the route: PeopleCert eLearning or an accredited course' },
      { stage: 'Exam booking', duration: 'Within the 12-month voucher validity; system check 24 hours before' },
      { stage: 'Exam', duration: '90 minutes' },
      { stage: 'Official result and badge', duration: 'Within 2 business days of submission' }
    ],
    costBreakdown: {
      items: ADV_COST_ITEMS,
      total: '$1,338 to $1,647 for a first attempt through PeopleCert (as of October 2026, incl. VAT), plus $865 for any retake bundle',
      footnote: 'PeopleCert lists no exam-only voucher for a first attempt on this module. Prices differ by country and training partner.'
    },
    difficulty: 'Moderate',
    audience: 'Product owners, DevOps and Agile leads, and IT managers running fast-moving digital services who are working toward ITIL 4 Managing Professional.',
    time: '3 to 6 weeks including the required training',
    cost: '$1,338 to $1,647',
    faqs: [
      { q: 'How many questions are on the ITIL 4 High-velocity IT exam?', a: 'The ITIL 4 Specialist: High-velocity IT exam has 40 multiple-choice questions in 90 minutes. It is closed book and requires 70%, which is 28 correct answers. PeopleCert lists nine syllabus areas but publishes no weights, so prepare across all of them.' },
      { q: 'What is the passing score for ITIL 4 High-velocity IT?', a: 'The passing score for ITIL 4 High-velocity IT is 70%, or 28 correct answers out of 40. PeopleCert states this on the module page. No pass rate is published, and the exam is not scaled, so every question counts equally toward the 28 required.' },
      { q: 'What does ITIL 4 High-velocity IT cover?', a: 'ITIL 4 High-velocity IT covers digital transformation strategies, Agile and DevOps principles, Lean and continuous improvement, automation including AI and ML, digital product management, service resilience, service performance metrics, customer-centric approaches and culture. Questions apply these ideas to delivery scenarios.' },
      { q: 'What are the prerequisites for ITIL 4 High-velocity IT?', a: ADV_PREREQ_ANSWER },
      { q: 'How much does the ITIL 4 High-velocity IT exam cost?', a: 'On the PeopleCert USD page, as of October 2026, eLearning with the exam voucher is $1,338, and eLearning+ is $1,647 with a free retake and an Official Mock Exam. The $865 exam bundle is only for retakes. Prices include VAT and vary by country and partner.' },
      { q: 'Is the ITIL 4 High-velocity IT exam hard?', a: 'It is moderate for candidates who completed the required training and have worked with Agile or DevOps, but harder than Foundation because the pass mark is 70% and the exam is closed book. PeopleCert publishes no pass rate, so no official difficulty figure exists.' },
      { q: 'Can I retake ITIL 4 High-velocity IT if I fail?', a: ADV_RETAKE_ANSWER },
      { q: 'How long does ITIL 4 High-velocity IT stay valid?', a: RENEW_ANSWER },
      { q: 'Is ITIL 4 High-velocity IT being retired?', a: SUNSET_ANSWER }
    ],
    summaryPoints: [
      'ITIL 4 High-velocity IT is 40 multiple-choice questions in 90 minutes, closed book, with a pass mark of 70% (28 of 40).',
      'eLearning with the voucher is $1,338 and eLearning+ is $1,647 on the PeopleCert USD page as of October 2026; the $865 bundle is for retakes.',
      'Prerequisite: any ITIL v3 certificate, ITIL 4 Foundation or Managing Professional, plus accredited training or Official eLearning.',
      'It is one of four ITIL 4 Managing Professional modules, valid for 3 years with 60 CPD points to renew.',
      'PeopleCert plans to sunset ITIL 4 modules on 31 December 2027.'
    ],
    relatedSlugs: ['itil-4-specialist-create-deliver-and-support', 'itil-4-specialist-drive-stakeholder-value', 'itil-4-managing-professional', 'itil-4-foundation'],
    sourceUrl: 'https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-specialist-high-velocity-it-2814',
    reviewed: '2026-10',
    confidence: 'high'
  },

  {
    slug: 'itil-4-leader-digital-and-it-strategy',
    body: BODY,
    tagline: 'The ITIL 4 Strategic Leader module on digital vision, strategy and disruption: 30 questions, 60 minutes, 70% to pass.',
    description:
      'The ITIL 4 Leader: Digital and IT Strategy (DITS) exam has 30 multiple-choice questions in 60 minutes and a pass mark of 70% (21 correct), closed book. DITS is the senior module of the ITIL 4 scheme, written for IT and business directors, heads of department and aspiring C-suite leaders, and it is one of the two modules behind the Strategic Leader designation. PeopleCert lists nine topics, including crafting a digital vision and strategy, assessing digital strategy, operationalising strategy, responding to digital disruption and strategic risk management in VUCA environments.',
    quickAnswer: {
      summary:
        'ITIL 4 Leader: Digital and IT Strategy is a closed-book PeopleCert exam with 30 multiple-choice questions in 60 minutes and a 70% pass mark (21 correct). Accredited training is required: eLearning is $1,338 and eLearning+ is $1,647 on the PeopleCert USD page as of October 2026, and the retake bundle is $865.',
      advantages: [
        'Shorter than the Specialist modules: 30 questions in 60 minutes, so about 2 minutes per question.',
        'Targets leadership topics: digital vision, strategy assessment, disruption, strategic risk and digital leadership.',
        'Counts toward the ITIL 4 Strategic Leader designation alongside the Direct, Plan and Improve module.',
        'Nine exam languages and a free reschedule up to 48 hours before the exam.'
      ]
    },
    roadmap: [
      'Hold ITIL 4 Foundation, an ITIL v3 certificate or Managing Professional',
      'Complete accredited training or ITIL Official eLearning',
      'Book a proctored slot and run the system check 24 hours before',
      'Sit the 30-question, 60-minute exam',
      'Pair it with Direct, Plan and Improve for the Strategic Leader designation'
    ],
    prerequisites: 'Any ITIL v3 certification, ITIL 4 Foundation or ITIL 4 Managing Professional, plus training through an Accredited Training Organization or ITIL Official eLearning.',
    eligibility:
      'The product page lists no managerial experience requirement for the exam itself, and results are withheld until proof of the required training is on file. The exam bundle at $865 is for retakes only. For the Strategic Leader designation you also need the Direct, Plan and Improve module.',
    examMeta: {
      questions: '30 multiple-choice questions (PeopleCert lists no unscored items); 21 correct needed',
      time: '60 minutes (75 minutes with the 25% extra time for non-native speakers)',
      pass: '70% (21 of 30 correct)',
      fee: ADV_PRICE,
      format: 'Closed book, multiple choice, taken online with a live remote proctor; 9 languages',
      admin: 'PeopleCert (on behalf of the ITIL IP owner)'
    },
    topics: [
      { name: 'Crafting a digital vision and strategy', weight: '', note: 'One of nine topics on the PeopleCert page; no per-topic weights or question counts are published.' },
      { name: 'Assessing digital strategy', weight: '', note: 'Evaluating whether the digital strategy is working.' },
      { name: 'Operationalising strategy', weight: '', note: 'Turning strategy into delivery.' },
      { name: 'Responding to digital disruption', weight: '', note: 'Reacting to disruptive change.' },
      { name: 'Strategic risk management in VUCA environments', weight: '', note: 'Managing risk in volatile, uncertain, complex and ambiguous settings.' },
      { name: 'Evolving service delivery models', weight: '', note: 'Changing how services are delivered.' },
      { name: 'Driving organisational change', weight: '', note: 'Leading change in the organization.' },
      { name: 'Optimising customer experience', weight: '', note: 'Improving the experience customers have.' },
      { name: 'Cultivating digital leadership', weight: '', note: 'Building leadership capability for digital work.' }
    ],
    examEssentials: [
      ['Delivery', 'Online with a live proctor; no breaks for exams under two hours'],
      ['Pass mark', '70%, which is 21 of 30 correct answers'],
      ['Prerequisite proof', 'Results are not released without proof of accredited training or ITIL Official eLearning'],
      ['Extra time', '25% more time (75 minutes) for non-native speakers of the exam language'],
      ['Voucher validity', '12 months from purchase'],
      ['Reschedule', 'Free up to 48 hours before; USD 60 from 48 to 4 hours; USD 120 inside 4 hours'],
      ['Validity', '3 years; 60 CPD points or another exam from the same product suite']
    ],
    timeline: [
      { stage: 'Training', duration: 'Depends on the route: PeopleCert eLearning or an accredited course' },
      { stage: 'Exam booking', duration: 'Within the 12-month voucher validity; system check 24 hours before' },
      { stage: 'Exam', duration: '60 minutes' },
      { stage: 'Official result and badge', duration: 'Within 2 business days of submission' }
    ],
    costBreakdown: {
      items: ADV_COST_ITEMS,
      total: '$1,338 to $1,647 for a first attempt through PeopleCert (as of October 2026, incl. VAT), plus $865 for any retake bundle',
      footnote: 'Some PeopleCert listings show other prices for this module, so confirm at checkout. Prices differ by country and training partner.'
    },
    difficulty: 'Moderate',
    audience: 'IT and business directors, heads of department and aspiring C-suite leaders leading digital strategy.',
    time: '3 to 6 weeks including the required training',
    cost: '$1,338 to $1,647',
    faqs: [
      { q: 'How many questions are on the ITIL 4 Leader Digital and IT Strategy exam?', a: 'The ITIL 4 Leader: Digital and IT Strategy exam has 30 multiple-choice questions in 60 minutes. It is closed book and the pass mark is 70%, which is 21 correct answers. This differs from the 40-question, 90-minute format of the Specialist modules.' },
      { q: 'What is the passing score for ITIL 4 Leader Digital and IT Strategy?', a: 'The passing score is 70%, equal to 21 correct answers out of 30. PeopleCert states the 70% mark and 30 questions on the module page. It publishes no pass rate, so 21 correct answers is the only official benchmark, and there is no sectional minimum listed.' },
      { q: 'Do I need management experience for ITIL 4 Leader DITS?', a: 'The PeopleCert product page lists no managerial experience requirement. It lists any ITIL v3 certification, ITIL 4 Foundation or ITIL 4 Managing Professional, plus accredited training or Official eLearning. The module is aimed at directors and senior leaders, so experience helps with scenario questions.' },
      { q: 'How much does the ITIL 4 Leader Digital and IT Strategy exam cost?', a: 'On the PeopleCert USD page, as of October 2026, eLearning with the exam voucher is $1,338, and eLearning+ is $1,647 with a free retake and an Official Mock Exam. The $865 exam bundle is only for retakes. Prices include VAT; some listings show other amounts.' },
      { q: 'Is the ITIL 4 Leader Digital and IT Strategy exam hard?', a: 'It is moderate for senior candidates who completed the required training, because it has only 30 questions but needs 70% and is closed book. PeopleCert pages publish no pass rate, so use the Official Mock Exam in eLearning+ to measure readiness.' },
      { q: 'What do I need for the ITIL 4 Strategic Leader designation?', a: 'The ITIL 4 Strategic Leader designation combines the Leader: Digital and IT Strategy module with the Strategist: Direct, Plan and Improve module. DITS alone gives you the module certificate. Check the Strategic Leader page on peoplecert.org for the current requirements before you book.' },
      { q: 'Can I retake ITIL 4 Leader Digital and IT Strategy if I fail?', a: ADV_RETAKE_ANSWER },
      { q: 'How long does ITIL 4 Leader Digital and IT Strategy stay valid?', a: RENEW_ANSWER },
      { q: 'Is ITIL 4 Leader Digital and IT Strategy being retired?', a: SUNSET_ANSWER }
    ],
    summaryPoints: [
      'ITIL 4 Leader: Digital and IT Strategy is 30 multiple-choice questions in 60 minutes, closed book, with a pass mark of 70% (21 of 30).',
      'eLearning with the voucher is $1,338 and eLearning+ is $1,647 on the PeopleCert USD page as of October 2026; the $865 bundle is for retakes.',
      'Prerequisite: any ITIL v3 certificate, ITIL 4 Foundation or Managing Professional, plus accredited training or Official eLearning.',
      'Together with Direct, Plan and Improve it leads to the ITIL 4 Strategic Leader designation; certificates renew every 3 years.',
      'PeopleCert plans to sunset ITIL 4 modules on 31 December 2027.'
    ],
    relatedSlugs: ['itil-4-strategist-direct-plan-and-improve', 'itil-4-strategic-leader', 'itil-4-managing-professional', 'itil-4-foundation'],
    sourceUrl: 'https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-leader-digital-it-strategy-2924',
    reviewed: '2026-10',
    confidence: 'high'
  }
];

export default { programs, exams };
