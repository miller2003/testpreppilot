// Flagship rewrite — ARRT disciplines (11 released pages).
// Every number here was read from an ARRT primary source on 2026-10-20:
//   Content specifications (per-discipline PDFs, scored-question counts per category/subcategory)
//   Primary and Postprimary Eligibility Pathway Handbooks (exam length, attempts, exam window)
//   arrt.org pages: Exam Scoring, Application Fees, Preparing For Your Exam, After the Exam,
//   Continuing Education (CE requirements), Exam Duration and Length.
// Fields ARRT does not publish in those sources (renewal fee amount, retake fee amount,
// national first-attempt pass rates) are omitted, not estimated.

const ARRT_BODY = 'American Registry of Radiologic Technologists (ARRT)';
const SPEC_PAGE = 'https://www.arrt.org/pages/arrt-reference-documents/by-document-type/examination-content-specifications/';
const HANDBOOK_PAGE = 'https://www.arrt.org/pages/arrt-reference-documents/by-document-type/handbooks';
const SCORE_PAGE = 'https://www.arrt.org/pages/resources/exam-information/after-the-exam/exam-scoring';

export const programs = [
  {
    id: 'american-registry-of-radiologic-technologists-arrt-',
    body: ARRT_BODY,
    bodyUrl: 'https://www.arrt.org',
    about: 'The American Registry of Radiologic Technologists certifies and registers medical imaging and radiation therapy professionals. Each discipline has its own content specification, its own exam length and its own eligibility route: a primary pathway for entry-level credentials and a postprimary pathway for advanced ones such as CT, MRI and mammography. ARRT sets the passing standard on a 1-99 scaled score, and some states use ARRT credentials for licensure.',
    registrationSteps: [
      {
        title: 'Establish eligibility on the primary or postprimary pathway',
        description: 'Confirm which handbook covers your discipline. Primary pathway candidates complete an ARRT-recognized education program. Postprimary candidates must already hold the supporting credential the handbook matrix requires, and some routes accept a supporting credential earned through NMTCB or ARDMS in place of ARRT.',
        subSteps: ['Open the Primary Eligibility Pathway Handbook or the Postprimary Eligibility Pathway Handbook', 'Find your discipline in the eligibility matrix', 'Note any supporting-credential footnote that applies to you'],
        duration: '',
        note: 'Postprimary candidates whose supporting credential comes from NMTCB or ARDMS pay the higher application fee.'
      },
      {
        title: 'Create an ARRT online account and submit the application',
        description: 'Applications are submitted through the ARRT online account. Include any ADA accommodation request at the same time, because ARRT assigns your exam window after the application is processed and will not accept an accommodation request after that point.',
        subSteps: ['Create or sign in to your ARRT online account', 'Select your discipline and eligibility pathway', 'Pay the application fee for one exam attempt'],
        duration: '',
        note: 'Each exam attempt needs its own application and fee.'
      },
      {
        title: 'Receive your Candidate Status Report and exam window',
        description: 'After ARRT approves the application, your Candidate Status Report shows your exam window. The window runs for 365 calendar days from its start date. If it closes without a scheduled and taken exam, the application fee is forfeited and you must reapply.',
        subSteps: ['Check the start and end dates of your exam window', 'Note the three-attempts-in-three-years limit that starts when the first window opens'],
        duration: 'Up to 365 calendar days',
        note: ''
      },
      {
        title: 'Schedule your appointment with Pearson VUE',
        description: 'Exams are taken at Pearson VUE test centers. You can schedule once ARRT has released your candidate information, which the handbook says is about 24 hours after you receive it. Cancel or reschedule at least 24 hours before the appointment, because Pearson charges a fee each time you change it.',
        subSteps: ['Book a test center through the Pearson VUE site or phone line listed in the handbook', 'Check the time allowed for the tutorial, nondisclosure agreement and survey', 'Plan to arrive 30 minutes early'],
        duration: '',
        note: 'Pearson charges a fee for each reschedule.'
      },
      {
        title: 'Sit the exam and read the preliminary result',
        description: 'The exam is computer-based and begins with a tutorial. You receive a preliminary scaled score at the test center, which is not the final result. The official result follows in your online account.',
        subSteps: ['Bring the required identification', 'Accept the nondisclosure agreement before the exam begins', 'Use the on-screen timer and flag questions you want to review'],
        duration: 'Tutorial and agreement add about 10 minutes to the exam itself',
        note: ''
      },
      {
        title: 'Receive the official score report and, if you pass, your certificate',
        description: 'ARRT emails when official results are available in your online account, normally within about 10 business days. A passing candidate receives a certificate packet by mail about two weeks after that notice.',
        subSteps: ['Log in to your online account to read the section breakdown', 'Watch for the email notice, which is also copied to the Message Center'],
        duration: 'About 10 business days, then about two weeks for the mailed packet',
        note: 'Results can be delayed up to six months if fees are unpaid or information is incomplete.'
      }
    ],
    proctoring: 'Computer-based exams delivered at Pearson VUE test centers. The exam begins with a tutorial, and you must accept the nondisclosure agreement before testing starts.',
    retakePolicy: 'Three attempts to pass an ARRT exam within three years of the date your first exam window opens. Each attempt needs a new application and fee, and the reapplication fee is listed on the ARRT website. After the limit, you must requalify.',
    recertification: 'Maintenance has two parts: an annual renewal each year and continuing education each biennium. Radiologic technologists must report 24 approved CE credits per biennium, with 16 of those credits sonography-specific for sonographers. Registered Radiologist Assistants must report 50 credits. Renewal fees are set by ARRT and should be checked on its website.',
    scoreReporting: 'A preliminary scaled score is shown at the test center. The official score report appears in your online account within about 10 business days. The scale runs from 1 to 99 and a scaled score of 75 passes. Sonography and MRI add section minimums of 7.5 in specific sections.',
    refundPolicy: 'ARRT does not refund fees and does not transfer them to another discipline. Fees also apply to reschedules made through Pearson VUE.',
    providersNote: 'ARRT does not endorse specific study materials. Its content specifications are the official outline for each discipline, and programs use them as the study guide. Study products that claim to contain ARRT content should be checked against those specifications.',
    comparison: null,
    orgFaqs: [
      {
        q: 'What is the difference between the primary and postprimary pathways?',
        a: 'The primary pathway is for entry-level credentials such as Radiography, Nuclear Medicine, Radiation Therapy and Sonography, and it requires completion of an ARRT-recognized education program. The postprimary pathway is for advanced credentials such as CT, MRI, Mammography, Cardiac Interventional and Vascular Interventional Radiography. Postprimary candidates must hold a supporting credential, and the handbook matrix shows which one each discipline requires.'
      },
      {
        q: 'How many attempts do I get?',
        a: 'You have three attempts to pass an ARRT exam within three years of the date your first exam window opens. Each attempt requires its own application and fee. If you do not pass within those limits, you must requalify before you can test again.'
      }
    ],
    sourceUrl: HANDBOOK_PAGE,
    confidence: 'high'
  }
];

// Shared FAQ answers that are true for every ARRT discipline.
const SHARED = {
  score: 'You receive a preliminary scaled score at the test center. ARRT then emails that official results are in your online account, normally within about 10 business days. If you pass, a certificate packet arrives by mail about two weeks after that notice.',
  attempts: 'You have three attempts to pass an ARRT exam within three years of the date your first exam window opens. Each attempt requires a separate application and fee, so a failed attempt has a direct cost as well as a time cost. Plan your study before you apply.',
  renewal: 'Your ARRT credential is kept current through an annual renewal and biennial continuing education, not by a one-time pass. Radiologic technologists must report 24 approved CE credits per biennium. Renewal fees are set by ARRT, so check its current fee schedule each year rather than relying on an older figure.',
  prep: 'ARRT does not endorse specific study materials, but it publishes the content specification for each discipline, and most programs use it as the study guide. Start from that outline, identify the subcategories where you are weakest, and use study products as supplements rather than as official content.',
  passRate: 'The passing standard is a scaled score of 75 on a 1 to 99 scale, and it is not a percentage. The number of correct answers needed changes from one exam version to another. Pass-rate figures also change year to year, so check ARRT for the current published figure before relying on any number from an older article.'
};

function arrtRecord(o) {
  return {
    slug: o.slug,
    body: ARRT_BODY,
    tagline: o.tagline,
    description: o.description,
    quickAnswer: {
      summary: o.summary,
      advantages: o.advantages
    },
    roadmap: [
      'Confirm the eligibility route for your discipline in the ARRT handbook',
      'Create your ARRT online account and submit the application',
      'Schedule your Pearson VUE appointment within the exam window',
      'Sit the exam and read the preliminary scaled score',
      'Read your official score report and maintain the credential'
    ],
    prerequisites: o.prerequisites,
    eligibility: o.eligibility,
    examMeta: {
      questions: o.questions,
      time: o.time,
      pass: 'Scaled score of 75 on a 1-99 scale',
      fee: '$225 application fee per exam attempt (postprimary routes that use an NMTCB or ARDMS supporting category: $450)',
      format: o.format,
      admin: 'ARRT (eligibility and scoring); Pearson VUE (test centers)'
    },
    topics: o.topics,
    examEssentials: [
      ['Content specification', o.spec],
      ['Scoring', 'Scaled 1-99; scaled score of 75 passes'],
      ['Attempts', 'Three attempts within three years of the first exam window opening'],
      ['Exam window', '365 calendar days from the window start date'],
      ['Score report', 'Preliminary at the test center; official in the online account within about 10 business days'],
      ['Maintenance', o.maintenance]
    ],
    timeline: [
      { stage: 'Eligibility and application', duration: 'Depends on your education route; ARRT assigns your exam window after approval' },
      { stage: 'Exam window', duration: 'Up to 365 calendar days from the window start date' },
      { stage: 'Official score report', duration: 'About 10 business days after the exam' },
      { stage: 'Certificate by mail (if passed)', duration: 'About two weeks after the results notice' }
    ],
    costBreakdown: {
      items: [
        { item: 'Application fee, one exam attempt (primary or standard postprimary route)', fee: '$225' },
        { item: 'Postprimary application using an NMTCB or ARDMS supporting category', fee: '$450' },
        { item: 'Reapplication fee for a retake', fee: 'Listed on the ARRT website; each attempt needs a new application and fee' },
        { item: 'Pearson VUE reschedule or cancellation', fee: 'Charged by Pearson each time you change the appointment' }
      ],
      total: '$225 per attempt (up to $450 on routes that use an NMTCB or ARDMS supporting category), plus reschedule and CE costs',
      footnote: 'Continuing education costs are set by the CE provider. The renewal fee is set by ARRT and changes, so check the current schedule.'
    },
    difficulty: o.difficulty,
    audience: o.audience,
    time: 'Set by your education route; once your exam window opens you have 365 calendar days to test',
    cost: '$225 per attempt (application fee)',
    faqs: [
      { q: 'How hard is the ' + o.short + ' exam?', a: 'Difficulty depends on your preparation and your background. ' + SHARED.passRate },
      { q: 'How long is the ' + o.short + ' exam?', a: o.lengthSentence + ' Your appointment also includes a tutorial, a nondisclosure agreement and a survey, so allow the full appointment time on exam day.' },
      { q: 'How many times can I take the ' + o.short + ' exam?', a: SHARED.attempts },
      { q: 'Does the ' + o.short + ' credential expire?', a: SHARED.renewal },
      { q: 'How long until I know whether I passed?', a: SHARED.score },
      { q: 'How should I study for the ' + o.short + ' exam?', a: o.study + ' ' + SHARED.prep }
    ],
    summaryPoints: o.summaryPoints,
    relatedSlugs: o.relatedSlugs,
    sourceUrl: SPEC_PAGE,
    reviewed: '2026-10',
    confidence: o.confidence
  };
}

export const exams = [
  arrtRecord({
    slug: 'arrt-radiography',
    short: 'Radiography',
    tagline: 'The ARRT R credential: the entry-level license to perform diagnostic X-ray imaging.',
    description: 'The ARRT Radiography (R) credential certifies entry-level radiographers who perform general diagnostic X-ray examinations. The exam is built from the Radiography content specification, which divides 200 scored questions across Patient Care (33), Safety (50), Image Production (51) and Procedures (66). It is taken on a computer at a Pearson VUE test center after completing an ARRT-recognized radiography program. The credential is the usual starting point for radiologic technologists and is the prerequisite for most postprimary credentials.',
    summary: 'The ARRT Radiography exam has 200 scored questions plus 30 unscored pilot items, 230 minutes of test time and a scaled passing score of 75 on a 1-99 scale. You apply through the ARRT online account for $225 per attempt after completing an ARRT-recognized radiography program, then test at a Pearson VUE center within your 365-day exam window.',
    advantages: [
      'The credential is the entry-level standard for radiographers and is the base for most postprimary ARRT credentials.',
      'The content outline is public: 33 Patient Care, 50 Safety, 51 Image Production and 66 Procedures scored questions.',
      'The exam is 200 scored questions plus 30 pilot items in 230 minutes of test time, so pacing can be planned in advance.',
      'Maintenance is clear: annual renewal plus 24 approved CE credits per biennium.'
    ],
    prerequisites: 'Completion of an ARRT-recognized radiography education program, which the Primary Eligibility Pathway Handbook sets out.',
    eligibility: 'The primary pathway requires completion of an ARRT-recognized radiography education program. Confirm the current pathway details in the 2026 Primary Eligibility Pathway Handbook before you apply, because program requirements are set out there rather than summarized here.',
    questions: '200 scored questions plus 30 unscored pilot items (230 total)',
    time: '230 minutes of test time; appointment about 4 hours 10 minutes',
    lengthSentence: 'The exam has 200 scored questions and 30 unscored pilot items, for 230 total, with 230 minutes of test time and an appointment of about 4 hours and 10 minutes.',
    format: 'Computer-based. Items include multiple choice and related formats such as selecting several answers, ordering options and selecting an image.',
    spec: 'Radiography content specification, implementation January 1, 2022; valid through February 28, 2027. A revised specification takes effect March 1, 2027.',
    maintenance: 'Annual renewal and 24 approved CE credits per biennium',
    topics: [
      { name: 'Patient Interactions and Management', weight: '', note: 'Patient Care: 33 scored questions. Ethics, legal aspects, communication, patient monitoring and transfers.' },
      { name: 'Radiation Physics and Radiobiology', weight: '', note: 'Safety: 50 scored questions across two subcategories. Units, interactions and biological effects.' },
      { name: 'Radiation Protection', weight: '', note: 'Safety: 29 scored questions. Protecting patients, staff and the public from exposure.' },
      { name: 'Image Acquisition and Evaluation', weight: '', note: 'Image Production: 51 scored questions across two subcategories. Exposure technique and image quality.' },
      { name: 'Equipment Operation and Quality Assurance', weight: '', note: 'Image Production: 25 scored questions. Equipment, testing and quality control.' },
      { name: 'Head, Spine and Pelvis Procedures', weight: '', note: 'Procedures: 66 scored questions across three subcategories (18 here).' },
      { name: 'Thorax and Abdomen Procedures', weight: '', note: 'Procedures: 20 scored questions in this subcategory.' },
      { name: 'Extremity Procedures', weight: '', note: 'Procedures: 28 scored questions in this subcategory.' }
    ],
    audience: 'Students completing an ARRT-recognized radiography program and working radiographers who need the entry-level credential.',
    difficulty: 'Moderate',
    study: 'Work from the Radiography content outline, then drill the Procedures and Image Production subcategories, which carry the most scored questions.',
    relatedSlugs: ['arrt-nuclear-medicine', 'arrt-radiation-therapy', 'arrt-computed-tomography'],
    summaryPoints: [
      'ARRT Radiography is 200 scored questions plus 30 pilot items in 230 minutes, with a scaled passing score of 75.',
      'The content outline has four categories: Patient Care 33, Safety 50, Image Production 51 and Procedures 66 scored questions.',
      'Apply through the ARRT online account for $225 per attempt; three attempts are allowed within three years.',
      'Maintain the credential with annual renewal and 24 approved CE credits per biennium.'
    ],
    confidence: 'high'
  }),
  arrtRecord({
    slug: 'arrt-nuclear-medicine',
    short: 'Nuclear Medicine Technology',
    tagline: 'The ARRT N credential for technologists who prepare and image radiopharmaceuticals.',
    description: 'The ARRT Nuclear Medicine Technology (N) credential certifies technologists who prepare radiopharmaceuticals and perform nuclear medicine imaging. The Nuclear Medicine Technology content specification places 200 scored questions across Patient Care (24), Safety (25), Image Production (33) and Procedures (118). Procedures is the largest category, so cardiac, endocrine and oncology, gastrointestinal and genitourinary, and other imaging procedures account for most of the exam. The exam is 230 minutes of test time for 200 scored and 30 pilot items.',
    summary: 'The ARRT Nuclear Medicine Technology exam has 200 scored questions plus 30 pilot items in 230 minutes of test time, with a scaled passing score of 75. Procedures makes up 118 of the 200 scored questions, so procedure content is the largest study area.',
    advantages: [
      'The content specification gives exact counts, so study time can follow the official weighting by question count.',
      'Procedures carries 118 of 200 scored questions, which makes the subcategories with the most items clear.',
      'The same 230-minute structure as Radiography makes pacing practice transferable.',
      'Renewal and CE requirements are the same as other ARRT credentials.'
    ],
    prerequisites: 'Completion of an ARRT-recognized nuclear medicine technology education program, as set out in the Primary Eligibility Pathway Handbook.',
    eligibility: 'Nuclear medicine technology is a primary-pathway credential. Confirm the education and clinical requirements in the 2026 Primary Eligibility Pathway Handbook before applying.',
    questions: '200 scored questions plus 30 unscored pilot items (230 total)',
    time: '230 minutes of test time; appointment about 4 hours 10 minutes',
    lengthSentence: 'The exam has 200 scored questions and 30 unscored pilot items, for 230 total, with 230 minutes of test time and an appointment of about 4 hours and 10 minutes.',
    format: 'Computer-based, with the same item formats as other ARRT exams, including multiple selection, ordering and image-based items.',
    spec: 'Nuclear Medicine Technology content specification, implementation January 1, 2022; valid through January 31, 2027. A revised specification takes effect February 1, 2027.',
    maintenance: 'Annual renewal and 24 approved CE credits per biennium',
    topics: [
      { name: 'Patient Interactions and Management', weight: '', note: 'Patient Care: 24 scored questions.' },
      { name: 'Radiation Physics, Radiobiology, and Regulations', weight: '', note: 'Safety: 25 scored questions.' },
      { name: 'Instrumentation', weight: '', note: 'Image Production: 33 scored questions.' },
      { name: 'Radionuclides and Radiopharmaceuticals', weight: '', note: 'Procedures: 28 scored questions.' },
      { name: 'Cardiac Procedures', weight: '', note: 'Procedures: 25 scored questions.' },
      { name: 'Endocrine and Oncology Procedures', weight: '', note: 'Procedures: 25 scored questions.' },
      { name: 'Gastrointestinal and Genitourinary Procedures', weight: '', note: 'Procedures: 18 scored questions.' },
      { name: 'Other Imaging Procedures', weight: '', note: 'Procedures: 22 scored questions.' }
    ],
    audience: 'Students in an ARRT-recognized nuclear medicine technology program and working technologists who need the N credential.',
    difficulty: 'Moderate',
    study: 'Study radionuclides and radiopharmaceuticals alongside the procedure subcategories, since together they make up most of the scored questions.',
    relatedSlugs: ['arrt-radiography', 'arrt-radiation-therapy', 'arrt-computed-tomography'],
    summaryPoints: [
      'ARRT Nuclear Medicine Technology has 200 scored questions plus 30 pilot items in 230 minutes.',
      'Procedures carries 118 of the 200 scored questions, more than the other three categories combined.',
      'Apply for $225 per attempt; three attempts are allowed within three years of the first window.',
      'Maintain with annual renewal and 24 approved CE credits per biennium.'
    ],
    confidence: 'high'
  }),
  arrtRecord({
    slug: 'arrt-radiation-therapy',
    short: 'Radiation Therapy',
    tagline: 'The ARRT T credential for technologists who deliver prescribed radiation treatments.',
    description: 'The ARRT Radiation Therapy (T) credential certifies technologists who deliver radiation treatments under a physician\'s prescription. The content specification divides 200 scored questions across Patient Care (46), Safety (51) and Procedures (103). Procedures covers treatment sites and tumors, volume localization, prescription and dose calculation, and treatments. The exam uses 200 scored and 30 pilot items in 230 minutes of test time.',
    summary: 'The ARRT Radiation Therapy exam has 200 scored questions plus 30 pilot items in 230 minutes, with a scaled passing score of 75. Procedures accounts for 103 scored questions, and dose calculation and treatment delivery are the largest subcategories within it.',
    advantages: [
      'The Procedures category covers the whole treatment chain: sites and tumors, localization, dose calculation and treatment delivery.',
      'Patient Care (46 scored questions) reflects the patient-facing role of the technologist.',
      'Exact subcategory counts make it possible to plan study around the largest blocks.',
      'The same maintenance rules apply as for other ARRT credentials.'
    ],
    prerequisites: 'Completion of an ARRT-recognized radiation therapy education program, as set out in the Primary Eligibility Pathway Handbook.',
    eligibility: 'Radiation therapy is a primary-pathway credential. Confirm the education and clinical requirements in the 2026 Primary Eligibility Pathway Handbook before applying.',
    questions: '200 scored questions plus 30 unscored pilot items (230 total)',
    time: '230 minutes of test time; appointment about 4 hours 10 minutes',
    lengthSentence: 'The exam has 200 scored questions and 30 unscored pilot items, for 230 total, with 230 minutes of test time and an appointment of about 4 hours and 10 minutes.',
    format: 'Computer-based, with the same item formats as other ARRT exams, including multiple selection, ordering and image-based items.',
    spec: 'Radiation Therapy content specification, implementation January 1, 2022; valid through January 31, 2027. A revised specification takes effect February 1, 2027.',
    maintenance: 'Annual renewal and 24 approved CE credits per biennium',
    topics: [
      { name: 'Patient Interactions and Management', weight: '', note: 'Patient Care: 29 scored questions.' },
      { name: 'Patient and Medical Record Management', weight: '', note: 'Patient Care: 17 scored questions.' },
      { name: 'Radiation Physics and Radiobiology', weight: '', note: 'Safety: 21 scored questions.' },
      { name: 'Radiation Protection, Equipment Operation, and Quality Assurance', weight: '', note: 'Safety: 30 scored questions.' },
      { name: 'Treatment Sites and Tumors', weight: '', note: 'Procedures: 26 scored questions.' },
      { name: 'Treatment Volume Localization', weight: '', note: 'Procedures: 18 scored questions.' },
      { name: 'Prescription and Dose Calculation', weight: '', note: 'Procedures: 24 scored questions.' },
      { name: 'Treatments', weight: '', note: 'Procedures: 35 scored questions.' }
    ],
    audience: 'Students in an ARRT-recognized radiation therapy program and working therapists who need the T credential.',
    difficulty: 'Moderate',
    study: 'Give the dose calculation and treatment subcategories the most time, since they carry the largest share of Procedures questions.',
    relatedSlugs: ['arrt-radiography', 'arrt-nuclear-medicine', 'arrt-mri'],
    summaryPoints: [
      'ARRT Radiation Therapy has 200 scored questions plus 30 pilot items in 230 minutes, with a scaled passing score of 75.',
      'Procedures is the largest category at 103 scored questions, and Safety has 51.',
      'Apply for $225 per attempt; three attempts are allowed within three years.',
      'Maintain with annual renewal and 24 approved CE credits per biennium.'
    ],
    confidence: 'high'
  }),
  arrtRecord({
    slug: 'arrt-mri',
    short: 'Magnetic Resonance Imaging',
    tagline: 'The ARRT MR credential for technologists who image with magnetic resonance.',
    description: 'The ARRT Magnetic Resonance Imaging (MR) credential is a postprimary credential for technologists who perform MRI exams. The MRI content specification places 200 scored questions across Patient Care (16), Safety (21), Image Production (106) and Procedures (57). Image Production is the largest block, covering physical principles, sequence parameters and data acquisition. Candidates must reach a scaled score of 75 overall and a section score of 7.5 or greater in MRI Screening and Safety.',
    summary: 'The ARRT MRI exam has 200 scored questions plus 30 pilot items in 230 minutes, with a scaled passing score of 75 overall. You also need a section score of 7.5 or greater in MRI Screening and Safety. The postprimary route needs a supporting credential, and each attempt costs $225 or $450 depending on that credential.',
    advantages: [
      'Image Production carries 106 of 200 scored questions, so physics and sequencing deserve the most study time.',
      'The MRI Screening and Safety section has its own minimum score, so safety preparation cannot be left until the end.',
      'The content specification gives exact counts for every subcategory.',
      'The 230-minute test time is the same length as the primary Radiography exam.'
    ],
    prerequisites: 'Postprimary eligibility. A supporting credential is required, and the handbook matrix shows which one applies. Some routes accept a supporting credential earned through NMTCB or ARDMS.',
    eligibility: 'Confirm the supporting-credential requirement in the 2026 Postprimary Eligibility Pathway Handbook. The handbook footnotes state which supporting credentials can come from ARRT, NMTCB or ARDMS.',
    questions: '200 scored questions plus 30 unscored pilot items (230 total)',
    time: '230 minutes of test time; appointment about 4 hours 10 minutes',
    lengthSentence: 'The exam has 200 scored questions and 30 unscored pilot items, for 230 total, with 230 minutes of test time and an appointment of about 4 hours and 10 minutes.',
    format: 'Computer-based, with multiple selection, ordering and image-based items. Section minimums apply in addition to the overall score.',
    spec: 'MRI content specification, approved January 2024 and implemented February 1, 2025. ARRT has published proposed MRI revisions for a later date, so check the discipline page before scheduling.',
    maintenance: 'Annual renewal and 24 approved CE credits per biennium',
    topics: [
      { name: 'Patient Interactions and Management', weight: '', note: 'Patient Care: 16 scored questions.' },
      { name: 'MRI Screening and Safety', weight: '', note: 'Safety: 21 scored questions. Requires a section score of 7.5 or greater to pass.' },
      { name: 'Physical Principles of Image Formation', weight: '', note: 'Image Production: 40 scored questions.' },
      { name: 'Sequence Parameters and Options', weight: '', note: 'Image Production: 36 scored questions.' },
      { name: 'Data Acquisition, Processing, and Storage', weight: '', note: 'Image Production: 30 scored questions.' },
      { name: 'Neurological Procedures', weight: '', note: 'Procedures: 25 scored questions.' },
      { name: 'Body Procedures', weight: '', note: 'Procedures: 15 scored questions.' },
      { name: 'Musculoskeletal Procedures', weight: '', note: 'Procedures: 17 scored questions.' }
    ],
    audience: 'Postprimary candidates with a supporting credential who want the MR credential for MRI practice.',
    difficulty: 'Challenging',
    study: 'Treat MRI Screening and Safety as a must-pass section, and spend most of the remaining time on the three Image Production subcategories.',
    relatedSlugs: ['arrt-computed-tomography', 'arrt-radiography', 'arrt-mammography'],
    summaryPoints: [
      'ARRT MRI has 200 scored questions plus 30 pilot items in 230 minutes, with a scaled passing score of 75.',
      'MRI Screening and Safety has a section minimum of 7.5 in addition to the overall passing score.',
      'Image Production carries 106 of the 200 scored questions.',
      'The postprimary route needs a supporting credential; the application fee is $225, or $450 on some routes.'
    ],
    confidence: 'high'
  }),
  arrtRecord({
    slug: 'arrt-sonography',
    short: 'Sonography',
    tagline: 'The ARRT sonography credential for diagnostic ultrasound in abdominal, obstetric, gynecologic and superficial imaging.',
    description: 'The ARRT Sonography credential certifies diagnostic medical sonographers. The content specification places 360 scored questions across Patient Care (26), Image Production (118) and Procedures (216). Procedures covers abdomen, obstetrics in each trimester, gynecology, and superficial structures. The exam is delivered in two sessions, with 40 pilot items in addition to the scored items.',
    summary: 'The ARRT Sonography exam has 360 scored questions and 40 pilot items across two test sessions. Procedures accounts for 216 scored questions, and abdomen alone is 75. Sonography also has a section requirement: you must reach a section score of 7.5 on the abdomen and OB-GYN sections in addition to the 75 overall.',
    advantages: [
      'Procedures carries 216 of the 360 scored questions, so abdomen and obstetrics deserve the most study time.',
      'The content specification names each procedure subcategory with its question count.',
      'Section requirements for abdomen and OB-GYN are stated in advance, so they can be prepared for specifically.',
      'The credential is the foundation for several other ARRT and ARDMS sonography pathways.'
    ],
    prerequisites: 'Completion of an ARRT-recognized sonography education program, as set out in the Primary Eligibility Pathway Handbook.',
    eligibility: 'Sonography is a primary-pathway credential. Confirm the education and clinical requirements in the 2026 Primary Eligibility Pathway Handbook before applying.',
    questions: '360 scored questions plus 40 unscored pilot items (400 total), delivered in two sessions',
    time: 'Two test sessions; confirm session timing in the 2026 Primary Eligibility Pathway Handbook',
    lengthSentence: 'The exam has 360 scored questions and 40 unscored pilot items, for 400 total, delivered in two test sessions. Procedures is in the first session, and the handbook gives the session timing.',
    format: 'Computer-based, with multiple selection, ordering and image-based items. Section minimums apply in addition to the overall score.',
    spec: 'Sonography content specification, approved January 2023 and implemented January 1, 2024.',
    maintenance: 'Annual renewal and 24 approved CE credits per biennium, with 16 sonography-specific credits for sonographers',
    topics: [
      { name: 'Patient Interactions and Management', weight: '', note: 'Patient Care: 26 scored questions.' },
      { name: 'Basic Principles of Ultrasound', weight: '', note: 'Image Production: 45 scored questions.' },
      { name: 'Image Formation', weight: '', note: 'Image Production: 47 scored questions.' },
      { name: 'Evaluation and Selection of Representative Images', weight: '', note: 'Image Production: 26 scored questions.' },
      { name: 'Abdomen', weight: '', note: 'Procedures: 75 scored questions. Requires a section score of 7.5 or greater.' },
      { name: 'First Trimester Obstetrics', weight: '', note: 'Procedures: 20 scored questions.' },
      { name: 'Second/Third Trimester and High Risk Obstetrics', weight: '', note: 'Procedures: 57 scored questions. OB-GYN section requires a score of 7.5 or greater together with gynecology.' },
      { name: 'Gynecology', weight: '', note: 'Procedures: 32 scored questions.' },
      { name: 'Superficial Structures and Other Sonographic Procedures', weight: '', note: 'Procedures: 32 scored questions.' }
    ],
    audience: 'Students in an ARRT-recognized sonography program and sonographers who need the ARRT credential.',
    difficulty: 'Challenging',
    study: 'Study abdomen and obstetrics first, because both carry section minimums and together make up most of Procedures.',
    relatedSlugs: ['arrt-vascular-sonography', 'arrt-breast-sonography', 'arrt-radiography'],
    summaryPoints: [
      'ARRT Sonography has 360 scored questions plus 40 pilot items across two test sessions.',
      'Procedures carries 216 scored questions, and abdomen alone carries 75.',
      'The overall passing score is 75, and abdomen and OB-GYN each need a section score of 7.5.',
      'Maintain with annual renewal and 24 CE credits per biennium, 16 of them sonography-specific.'
    ],
    confidence: 'medium'
  }),
  arrtRecord({
    slug: 'arrt-vascular-sonography',
    short: 'Vascular Sonography',
    tagline: 'The ARRT vascular sonography credential for arterial and venous ultrasound.',
    description: 'The ARRT Vascular Sonography (VS) credential is a postprimary credential for sonographers who image blood vessels. The content specification places 175 scored questions across Patient Care (20), Image Production (70) and Procedures (85). Procedures covers abdominal and pelvic, arterial peripheral, venous peripheral, and extracranial cerebral vasculature. The exam has 50 pilot items on top of the scored items, for 225 minutes of test time.',
    summary: 'The ARRT Vascular Sonography exam has 175 scored questions plus 50 pilot items in 225 minutes of test time, with a scaled passing score of 75. Procedures accounts for 85 scored questions, and arterial and venous peripheral vasculature carry 25 each.',
    advantages: [
      'Procedures carries 85 of 175 scored questions, split across four vascular subcategories with exact counts.',
      'The 225-minute test time is published in the handbook, so pacing can be trained in advance.',
      'The postprimary route is clearly tied to a supporting sonography credential, through ARRT or ARDMS.',
      'The credential sits alongside ARRT sonography and breast sonography for a complete ultrasound pathway.'
    ],
    prerequisites: 'Postprimary eligibility with a supporting sonography credential. The handbook footnote allows that credential to be earned through ARRT or ARDMS.',
    eligibility: 'Confirm the supporting-credential requirement in the 2026 Postprimary Eligibility Pathway Handbook. Routes that use an ARDMS supporting credential carry the higher application fee.',
    questions: '175 scored questions plus 50 unscored pilot items (225 total)',
    time: '225 minutes of test time',
    lengthSentence: 'The exam has 175 scored questions and 50 unscored pilot items, for 225 total, with 225 minutes of test time.',
    format: 'Computer-based, with multiple selection, ordering and image-based items.',
    spec: 'Vascular Sonography content specification, approved January 2023 and implemented January 1, 2024.',
    maintenance: 'Annual renewal and 24 approved CE credits per biennium',
    topics: [
      { name: 'Patient Interactions and Management', weight: '', note: 'Patient Care: 20 scored questions.' },
      { name: 'Basic Principles of Ultrasound', weight: '', note: 'Image Production: 23 scored questions.' },
      { name: 'Image Formation', weight: '', note: 'Image Production: 12 scored questions.' },
      { name: 'Evaluation and Selection of Representative Images', weight: '', note: 'Image Production: 35 scored questions.' },
      { name: 'Abdominal/Pelvic Vasculature', weight: '', note: 'Procedures: 19 scored questions.' },
      { name: 'Arterial Peripheral Vasculature', weight: '', note: 'Procedures: 25 scored questions.' },
      { name: 'Venous Peripheral Vasculature', weight: '', note: 'Procedures: 25 scored questions.' },
      { name: 'Extracranial Cerebral Vasculature and Other Sonographic Procedures', weight: '', note: 'Procedures: 16 scored questions.' }
    ],
    audience: 'Postprimary candidates who hold a sonography supporting credential and want the vascular credential.',
    difficulty: 'Moderate',
    study: 'Give the three vascular procedure subcategories most of your time, and practice image evaluation, which carries 35 questions.',
    relatedSlugs: ['arrt-sonography', 'arrt-breast-sonography', 'arrt-vascular-interventional'],
    summaryPoints: [
      'ARRT Vascular Sonography has 175 scored questions plus 50 pilot items in 225 minutes.',
      'Procedures carries 85 scored questions across four vascular subcategories.',
      'The postprimary route needs a sonography supporting credential, through ARRT or ARDMS.',
      'Maintain with annual renewal and 24 approved CE credits per biennium.'
    ],
    confidence: 'high'
  }),
  arrtRecord({
    slug: 'arrt-breast-sonography',
    short: 'Breast Sonography',
    tagline: 'The ARRT breast sonography credential for ultrasound of the breast.',
    description: 'The ARRT Breast Sonography (BS) credential is a postprimary credential for sonographers who image the breast. The content specification places 185 scored questions across Patient Care (16), Image Production (105) and Procedures (64). Procedures covers anatomical layers and breast tissues, pathology and sonographic features, and breast interventions. The postprimary route also requires an active Mammography credential.',
    summary: 'The ARRT Breast Sonography exam has 185 scored questions, with Image Production the largest block at 105. The route is postprimary and requires an active Mammography credential in addition to the supporting sonography credential. The current content specification took effect September 1, 2026.',
    advantages: [
      'The content specification is current, with implementation on September 1, 2026.',
      'Image Production carries 105 of 185 scored questions, so acquisition and evaluation technique deserve time.',
      'Pathology and sonographic features (32 questions) is a clearly defined study block.',
      'The credential pairs with Mammography for a breast imaging pathway.'
    ],
    prerequisites: 'Postprimary eligibility, an active Mammography credential, and the supporting sonography credential the handbook matrix requires.',
    eligibility: 'Confirm the Mammography and sonography supporting-credential requirements in the 2026 Postprimary Eligibility Pathway Handbook before applying.',
    questions: '185 scored questions per the current content specification',
    time: 'Confirm pilot items and appointment length in the 2026 Postprimary Eligibility Pathway Handbook',
    lengthSentence: 'The content specification lists 185 scored questions. The pilot-item count and appointment length are set out in the 2026 Postprimary Eligibility Pathway Handbook, which should be checked before you schedule.',
    format: 'Computer-based, with multiple selection, ordering and image-based items.',
    spec: 'Breast Sonography content specification, approved July 2025 and implemented September 1, 2026.',
    maintenance: 'Annual renewal and 24 approved CE credits per biennium',
    topics: [
      { name: 'Patient Interactions and Management', weight: '', note: 'Patient Care: 16 scored questions.' },
      { name: 'Basic Principles of Ultrasound', weight: '', note: 'Image Production: 32 scored questions.' },
      { name: 'Image Formation', weight: '', note: 'Image Production: 37 scored questions.' },
      { name: 'Evaluation and Selection of Representative Images', weight: '', note: 'Image Production: 36 scored questions.' },
      { name: 'Anatomical Layers and Breast Tissues', weight: '', note: 'Procedures: 17 scored questions.' },
      { name: 'Pathology and Sonographic Features', weight: '', note: 'Procedures: 32 scored questions.' },
      { name: 'Breast Interventions and Other Imaging', weight: '', note: 'Procedures: 15 scored questions.' }
    ],
    audience: 'Sonographers and mammographers pursuing breast ultrasound, who hold the supporting credentials the handbook requires.',
    difficulty: 'Moderate',
    study: 'Spend the most time on Image Production, then on pathology and sonographic features.',
    relatedSlugs: ['arrt-mammography', 'arrt-sonography', 'arrt-vascular-sonography'],
    summaryPoints: [
      'ARRT Breast Sonography has 185 scored questions under the specification effective September 1, 2026.',
      'Image Production carries 105 of the 185 scored questions.',
      'The route requires an active Mammography credential and a supporting sonography credential.',
      'Maintain with annual renewal and 24 approved CE credits per biennium.'
    ],
    confidence: 'medium'
  }),
  arrtRecord({
    slug: 'arrt-cardiac-interventional',
    short: 'Cardiac Interventional Radiography',
    tagline: 'The ARRT CI credential for technologists who assist with cardiac catheterization and intervention.',
    description: 'The ARRT Cardiac Interventional Radiography (CI) credential is a postprimary credential for technologists who assist in cardiac catheterization and interventional procedures. The content specification places 145 scored questions across Patient Care (40), Image Production (20) and Procedures (85). Procedures splits into diagnostic and electrophysiology procedures (35) and interventional procedures (50). The exam has 40 pilot items, for 185 total items and 195 minutes of test time.',
    summary: 'The ARRT Cardiac Interventional exam has 145 scored questions plus 40 pilot items, with 195 minutes of test time and a scaled passing score of 75. Interventional procedures carry 50 scored questions, and the postprimary route needs a supporting credential.',
    advantages: [
      'Interventional procedures (50 scored questions) are the single largest subcategory, so they should anchor the study plan.',
      'The 195-minute test time and the 3-hour-35-minute appointment are published in the handbook.',
      'Patient Care carries 40 questions, which is high for a postprimary exam.',
      'The content specification counts make the exam structure easy to map.'
    ],
    prerequisites: 'Postprimary eligibility with the supporting credential the Postprimary Eligibility Pathway Handbook requires for Cardiac Interventional Radiography.',
    eligibility: 'Confirm the supporting-credential requirement in the 2026 Postprimary Eligibility Pathway Handbook, including any footnote that allows a credential earned through NMTCB or ARDMS.',
    questions: '145 scored questions plus 40 unscored pilot items (185 total)',
    time: '195 minutes of test time; appointment about 3 hours 35 minutes',
    lengthSentence: 'The exam has 145 scored questions and 40 unscored pilot items, for 185 total, with 195 minutes of test time and an appointment of about 3 hours and 35 minutes.',
    format: 'Computer-based, with multiple selection, ordering and image-based items.',
    spec: 'Cardiac Interventional Radiography content specification, approved July 2022 and implemented July 1, 2023.',
    maintenance: 'Annual renewal and 24 approved CE credits per biennium',
    topics: [
      { name: 'Patient Interactions and Management', weight: '', note: 'Patient Care: 40 scored questions.' },
      { name: 'Image Acquisition and Equipment', weight: '', note: 'Image Production: 20 scored questions.' },
      { name: 'Diagnostic and Electrophysiology Procedures', weight: '', note: 'Procedures: 35 scored questions.' },
      { name: 'Interventional Procedures', weight: '', note: 'Procedures: 50 scored questions.' }
    ],
    audience: 'Postprimary candidates with a supporting credential who work in cardiac catheterization labs.',
    difficulty: 'Challenging',
    study: 'Interventional procedures is the largest subcategory, so study it first, then diagnostic and electrophysiology procedures, then patient care.',
    relatedSlugs: ['arrt-vascular-interventional', 'arrt-computed-tomography', 'arrt-radiography'],
    summaryPoints: [
      'ARRT Cardiac Interventional has 145 scored questions plus 40 pilot items, in 195 minutes of test time.',
      'Interventional Procedures carries 50 scored questions, the largest single subcategory.',
      'Patient Care carries 40 scored questions, a large share for a postprimary exam.',
      'Maintain with annual renewal and 24 approved CE credits per biennium.'
    ],
    confidence: 'high'
  }),
  arrtRecord({
    slug: 'arrt-computed-tomography',
    short: 'Computed Tomography',
    tagline: 'The ARRT CT credential for technologists who perform computed tomography.',
    description: 'The ARRT Computed Tomography (CT) credential is a postprimary credential for technologists who perform CT exams. The current content specification, which takes effect September 1, 2026, places 165 scored questions across Patient Care (21), Safety (21), Image Production (52) and Procedures (71). Procedures covers the head, spine and musculoskeletal system, the neck and chest, and the abdomen and pelvis. The exam has 30 pilot items on top of the scored items, for 195 minutes of test time.',
    summary: 'The ARRT CT exam has 165 scored questions plus 30 pilot items, with 195 minutes of test time and a scaled passing score of 75. Procedures carries 71 scored questions. The current content specification takes effect September 1, 2026, so check its dates before you schedule.',
    advantages: [
      'The current specification is dated September 1, 2026, so you prepare for the version you will actually sit.',
      'Procedures carries 71 scored questions across three anatomical groups.',
      'Image Production (52 questions) splits clearly into image formation and image evaluation and archiving.',
      'The 195-minute test time is published in the handbook.'
    ],
    prerequisites: 'Postprimary eligibility with the supporting credential the handbook matrix requires for CT.',
    eligibility: 'Confirm the supporting-credential requirement in the 2026 Postprimary Eligibility Pathway Handbook, including any footnote for an NMTCB or ARDMS credential.',
    questions: '165 scored questions plus 30 unscored pilot items (195 total)',
    time: '195 minutes of test time; appointment about 3 hours 35 minutes',
    lengthSentence: 'The exam has 165 scored questions and 30 unscored pilot items, for 195 total, with 195 minutes of test time and an appointment of about 3 hours and 35 minutes.',
    format: 'Computer-based, with multiple selection, ordering and image-based items.',
    spec: 'Computed Tomography content specification, approved July 2025 and implemented September 1, 2026.',
    maintenance: 'Annual renewal and 24 approved CE credits per biennium',
    topics: [
      { name: 'Patient Interactions and Management', weight: '', note: 'Patient Care: 21 scored questions.' },
      { name: 'Radiation Safety and Dose', weight: '', note: 'Safety: 21 scored questions.' },
      { name: 'Image Formation', weight: '', note: 'Image Production: 30 scored questions.' },
      { name: 'Image Evaluation and Archiving', weight: '', note: 'Image Production: 22 scored questions.' },
      { name: 'Head, Spine, and Musculoskeletal', weight: '', note: 'Procedures: 25 scored questions.' },
      { name: 'Neck and Chest', weight: '', note: 'Procedures: 22 scored questions.' },
      { name: 'Abdomen and Pelvis', weight: '', note: 'Procedures: 24 scored questions.' }
    ],
    audience: 'Postprimary candidates with a supporting credential who perform or plan to perform CT imaging.',
    difficulty: 'Moderate',
    study: 'Give Image Formation the most time, since it is the largest Image Production subcategory.',
    relatedSlugs: ['arrt-mri', 'arrt-cardiac-interventional', 'arrt-radiography'],
    summaryPoints: [
      'ARRT CT has 165 scored questions plus 30 pilot items in 195 minutes of test time.',
      'The current specification takes effect September 1, 2026.',
      'Procedures carries 71 scored questions across head, neck, chest, abdomen and pelvis.',
      'Maintain with annual renewal and 24 approved CE credits per biennium.'
    ],
    confidence: 'high'
  }),
  arrtRecord({
    slug: 'arrt-mammography',
    short: 'Mammography',
    tagline: 'The ARRT mammography credential for breast imaging technologists.',
    description: 'The ARRT Mammography credential is a postprimary credential for technologists who perform breast imaging. The content specification places 115 scored questions across Patient Care (20), Image Production (30) and Procedures (65). Procedures covers anatomy, physiology and pathology (26 questions) and mammographic positioning and procedures (39). The exam has 30 pilot items on top of the scored items, for 150 minutes of test time.',
    summary: 'The ARRT Mammography exam has 115 scored questions plus 30 pilot items, with 150 minutes of test time and a scaled passing score of 75. Mammographic positioning and procedures is the largest subcategory at 39 questions.',
    advantages: [
      'Mammographic positioning and procedures (39 scored questions) is the largest subcategory, so positioning technique should anchor the plan.',
      'The exam is the shortest of the ARRT postprimary exams at 150 minutes, per the handbook.',
      'The content specification gives counts for each subcategory.',
      'The credential is also required for ARRT Breast Sonography.'
    ],
    prerequisites: 'Postprimary eligibility with the supporting credential the Postprimary Eligibility Pathway Handbook requires for Mammography.',
    eligibility: 'Confirm the supporting-credential requirement in the 2026 Postprimary Eligibility Pathway Handbook. The handbook footnotes state which supporting credentials can come from ARRT or NMTCB.',
    questions: '115 scored questions plus 30 unscored pilot items (145 total)',
    time: '150 minutes of test time; appointment about 2 hours 50 minutes',
    lengthSentence: 'The exam has 115 scored questions and 30 unscored pilot items, for 145 total, with 150 minutes of test time and an appointment of about 2 hours and 50 minutes.',
    format: 'Computer-based, with multiple selection, ordering and image-based items.',
    spec: 'Mammography content specification, approved July 2024 and implemented September 1, 2025.',
    maintenance: 'Annual renewal and 24 approved CE credits per biennium',
    topics: [
      { name: 'Patient Interactions and Management', weight: '', note: 'Patient Care: 20 scored questions.' },
      { name: 'Image Acquisition and Quality Assurance', weight: '', note: 'Image Production: 30 scored questions.' },
      { name: 'Anatomy, Physiology, and Pathology', weight: '', note: 'Procedures: 26 scored questions.' },
      { name: 'Mammographic Positioning and Procedures', weight: '', note: 'Procedures: 39 scored questions.' }
    ],
    audience: 'Postprimary candidates with a supporting credential who perform mammography.',
    difficulty: 'Moderate',
    study: 'Practice positioning and procedures first, then anatomy and pathology, since they are the two largest Procedures blocks.',
    relatedSlugs: ['arrt-breast-sonography', 'arrt-radiography', 'arrt-computed-tomography'],
    summaryPoints: [
      'ARRT Mammography has 115 scored questions plus 30 pilot items in 150 minutes.',
      'Mammographic positioning and procedures is the largest subcategory at 39 questions.',
      'The route needs a supporting credential; the application fee is $225, or $450 on some routes.',
      'Maintain with annual renewal and 24 approved CE credits per biennium.'
    ],
    confidence: 'high'
  }),
  arrtRecord({
    slug: 'arrt-vascular-interventional',
    short: 'Vascular Interventional Radiography',
    tagline: 'The ARRT VI credential for technologists who assist in vascular and nonvascular interventional procedures.',
    description: 'The ARRT Vascular Interventional Radiography (VI) credential is a postprimary credential for technologists who assist in vascular and interventional procedures. The content specification places 160 scored questions across Patient Care (22), Image Production (26) and Procedures (112). Procedures splits into vascular diagnostic procedures (41), vascular interventional procedures (41) and nonvascular procedures (30). The exam has 50 pilot items, for 210 total items and 210 minutes of test time.',
    summary: 'The ARRT Vascular Interventional exam has 160 scored questions plus 50 pilot items in 210 minutes of test time, with a scaled passing score of 75. Procedures carries 112 scored questions, split evenly between vascular diagnostic and vascular interventional work.',
    advantages: [
      'Procedures carries 112 of 160 scored questions, so vascular procedure content deserves most of the study time.',
      'Vascular diagnostic and vascular interventional procedures carry 41 questions each, a balanced split.',
      'The 210-minute test time and 3-hour-50-minute appointment are published in the handbook.',
      'The credential sits alongside Cardiac Interventional Radiography for an interventional pathway.'
    ],
    prerequisites: 'Postprimary eligibility with the supporting credential the Postprimary Eligibility Pathway Handbook requires for Vascular Interventional Radiography.',
    eligibility: 'Confirm the supporting-credential requirement in the 2026 Postprimary Eligibility Pathway Handbook before applying.',
    questions: '160 scored questions plus 50 unscored pilot items (210 total)',
    time: '210 minutes of test time; appointment about 3 hours 50 minutes',
    lengthSentence: 'The exam has 160 scored questions and 50 unscored pilot items, for 210 total, with 210 minutes of test time and an appointment of about 3 hours and 50 minutes.',
    format: 'Computer-based, with multiple selection, ordering and image-based items.',
    spec: 'Vascular Interventional Radiography content specification, approved July 2022 and implemented July 1, 2023.',
    maintenance: 'Annual renewal and 24 approved CE credits per biennium',
    topics: [
      { name: 'Patient Interactions and Management', weight: '', note: 'Patient Care: 22 scored questions.' },
      { name: 'Image Acquisition and Equipment', weight: '', note: 'Image Production: 26 scored questions.' },
      { name: 'Vascular Diagnostic Procedures', weight: '', note: 'Procedures: 41 scored questions.' },
      { name: 'Vascular Interventional Procedures', weight: '', note: 'Procedures: 41 scored questions.' },
      { name: 'Nonvascular Procedures', weight: '', note: 'Procedures: 30 scored questions.' }
    ],
    audience: 'Postprimary candidates with a supporting credential who work in vascular and interventional labs.',
    difficulty: 'Challenging',
    study: 'Split study time evenly between the two vascular subcategories, then cover nonvascular procedures.',
    relatedSlugs: ['arrt-cardiac-interventional', 'arrt-vascular-sonography', 'arrt-radiography'],
    summaryPoints: [
      'ARRT Vascular Interventional has 160 scored questions plus 50 pilot items in 210 minutes.',
      'Procedures carries 112 of the 160 scored questions.',
      'Vascular diagnostic and vascular interventional procedures carry 41 questions each.',
      'Maintain with annual renewal and 24 approved CE credits per biennium.'
    ],
    confidence: 'high'
  })
];

export default { programs, exams };
