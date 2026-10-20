// Flagship rewrite - NHA (National Healthcareer Association), package pkg38.
// Sources read 2026-10-20:
//   NHA Candidate Handbook, updated 10/05/2026 (eligibility, registration, rescheduling, scoring,
//   retakes, recertification, reinstatement, cut scores).
//   Official NHA test-plan PDFs: CCMA (2022 job analysis), CEHRS (2019), CMAA (2021), CPCT/A (2018),
//   ExCPT (2023). Each header gives scored items, pretest items and exam time; summary outlines
//   give item counts per domain.
//   AMCA Mental Health Technician Certification Program Outline 2027 (the only published exam
//   that matches the "mental health technician" search intent; NHA does not offer one).
// Not published by NHA in any source reachable here: per-exam fee amounts (shown only in the NHA
// store at checkout), the recertification fee amount, and national pass rates. They are omitted,
// not estimated.

const NHA_BODY = `National Healthcareer Association (NHA)`;
const HANDBOOK = `https://www.nhanow.com/docs/default-source/test-plans/candidate_handbook.pdf`;
const CERT_HOME = `https://www.nhanow.com/certification/nha-certifications`;

export const programs = [
  {
    id: `nha`,
    body: NHA_BODY,
    bodyUrl: `https://www.nhanow.com`,
    about: `The National Healthcareer Association certifies entry-level allied health workers through eight NCCA-accredited exams: CCMA, CPT, CET, CBCS, CEHRS, CMAA, CPCT/A and the ExCPT Certified Pharmacy Technician (CPhT). Every exam is multiple choice, computer-based and scored on one scale of 200 to 500 with a passing scaled score of 390. NHA has awarded more than 1.25 million certifications since 1989, and its Candidate Handbook (updated October 5, 2026) is the governing document for eligibility, retakes and recertification.`,
    registrationSteps: [
      {
        title: `Check eligibility for your exam`,
        description: `Every NHA exam except the ExCPT requires a high school diploma or equivalent plus either a training program completed within the past 5 years or supervised work experience (1 year in the last 3, or 2 years in the last 5). The ExCPT work route is 1,200 hours of supervised pharmacy work in one year within the last 3 years. Phlebotomy and EKG add skills minimums (CPT: 30 venipunctures and 10 capillary sticks; CET: 10 EKGs).`,
        subSteps: [`Confirm your diploma or GED status`, `Match yourself to Pathway 1 (training) or Pathway 2 (work experience)`, `California CCMA candidates on the work route need 2 years of medical assistant experience in the last 5 years`],
        duration: ``,
        note: `Students may sit up to 18 months before graduating (12 months for the ExCPT) and receive a Provisional Certification.`
      },
      {
        title: `Create your NHA account and candidate profile`,
        description: `Register at nhanow.com. You must complete your own application because parents, teachers and school officials cannot register for you. If your school is an NHA-authorized testing institution you apply for a specific exam date through the school; otherwise you choose to register individually.`,
        subSteps: [`Create the candidate profile with your name exactly as it appears on your government ID`, `Choose institution-based or individual registration`, `Read and accept the Attestation Agreement`],
        duration: ``,
        note: `Answering "Disagree" on the attestation puts the application in contingency status until an exception appeal is approved.`
      },
      {
        title: `Apply for the exam and pay within 2 hours`,
        description: `Select the certification under Apply for Exam in your NHA account and pay the exam fee shown at checkout, unless an institution or employer pays for you. You have 2 hours to finish payment after applying, or the application is voided and you must start again. NHA prints no fee amounts in its Candidate Handbook; the price appears in the NHA store.`,
        subSteps: [`Open Apply for Exam in your NHA account`, `Decide whether to share scores with your school`, `Finish payment inside the 2-hour window and keep the confirmation email`],
        duration: `Payment window: 2 hours`,
        note: `Study guides and practice tests are optional and are not required to become eligible.`
      },
      {
        title: `Schedule PSI or Live Remote Proctoring`,
        description: `Individual registrants take the exam at a PSI testing center or through Live Remote Proctoring (LRP), which needs a computer that meets the proctor system requirements and an internet connection that supports Voice over IP. You can reschedule without repaying within 6 months of the original date, but only if you change it at least 24 hours before the appointment.`,
        subSteps: [`Choose a PSI center or LRP in your NHA account`, `Run the system check if you chose LRP`, `Reschedule inside your account at least 24 hours ahead if needed`],
        duration: `Reschedule window: 6 months from the original date`,
        note: `Missing the 24-hour deadline forfeits the fee. PSI candidate support is 1.833.537.1330.`
      },
      {
        title: `Verify your identity and sit the exam`,
        description: `Proctors, including remote proctors, check a current government-issued photo ID that shows your signature and permanent address. If the address on the ID differs from the one you registered, bring proof of address such as a current utility bill. You may be asked to re-attest to eligibility at the site.`,
        subSteps: [`Bring a driver license, passport or similar ID that matches your NHA profile name`, `Expect an ID check and roster initialing before testing`, `Answer every question; pretest items are not identifiable`],
        duration: `Exam time depends on the exam, from 125 minutes to 3 hours`,
        note: ``
      },
      {
        title: `Read your score report and download your certificate`,
        description: `Candidates who test at PSI or by LRP see the final score report in their NHA account within 48 hours; exams taken at an institution give a preliminary report immediately. A passing score triggers an email telling you to print the certificate under My Achievements. Passing candidates are listed in the NHA online Verification Tool, which never shows scores or failed attempts.`,
        subSteps: [`Log in and open the score report for pass or fail and domain feedback`, `Print the certificate from My Achievements`, `Share your score with employers only through the certificate or verification tool, not preliminary results`],
        duration: `Within 48 hours at PSI or LRP`,
        note: `Scores are never given by phone.`
      }
    ],
    proctoring: `Every NHA exam is computer-based and proctored, either at a PSI testing center or by Live Remote Proctoring, or at an NHA-authorized school or employer site. A current government-issued photo ID is verified before entry, and the address on the ID must match your registration or be backed by proof of address. Instructors cannot test at their own institution and must register individually.`,
    retakePolicy: `After a failed attempt you must wait 30 days before retaking. You get three attempts with at least 30 days between each, and every failure after the third attempt requires a 1-year wait. Each retake means re-registering and paying the full exam price. Hand rescoring requests must be received within 60 days of the exam date and NHA may charge a fee.`,
    recertification: `Certifications last 2 years and renew with 10 continuing education credits (2 CE hours equal 1 credit) plus a recertification fee; the ExCPT pharmacy technician credential instead needs 20 CE hours, including at least 1 hour of pharmacy law and 1 hour of patient safety. NHA allows a one-month grace period. A lapsed credential can be reinstated within 1 year with 15 credits (20 hours for ExCPT) plus renewal and reinstatement fees; after that you must retake the exam. NHA frames renewal as about $8 per month but does not print a fee in its handbook.`,
    scoreReporting: `NHA reports one scaled score from 200 to 500 and a passing standard of 390 on every exam, set by an Angoff-based standard-setting study so the same standard applies to every exam form. The report shows pass or fail plus Above, Near or Below the passing standard for each major content area; areas with 5 or fewer questions show N/A. When a new test plan launches, NHA can hold results briefly during a pilot scoring period.`,
    refundPolicy: `NHA refunds an exam fee only when NHA, PSI or another remote proctoring provider cancels your exam and you do not reschedule. If severe weather closes a PSI site, PSI reschedules at no charge. Otherwise the fee is forfeited when you miss the 24-hour reschedule deadline or reschedule to a date more than 6 months after the original.`,
    providersNote: `NHA sells its own study guides and practice assessments but states that buying them is not required and does not guarantee a pass. The free test plan for each exam, linked from every certification page, is the official outline. ACE has evaluated a number of NHA exams and resources for college credit recommendations.`,
    comparison: {
      title: `NHA certifications in this guide compared`,
      columns: [`Credential`, `Scored items and time`, `Largest domain`, `Renewal`],
      rows: [
        { label: `CCMA (clinical medical assistant)`, values: [`150 scored plus 30 pretest, 3 hours`, `Clinical Patient Care, 84 items`, `10 CE credits every 2 years`] },
        { label: `CMAA (medical administrative assistant)`, values: [`110 scored plus 25 pretest, 2 hours 15 minutes`, `Communication and Professionalism and Patient Encounter, 21 items each`, `10 CE credits every 2 years`] },
        { label: `CEHRS (electronic health records)`, values: [`100 scored plus 25 pretest, 125 minutes`, `Clinical Operations, 32 items`, `10 CE credits every 2 years`] },
        { label: `CPCT/A (patient care technician)`, values: [`100 scored plus 20 pretest, 2 hours`, `Patient Care, 45 items`, `10 CE credits every 2 years`] },
        { label: `ExCPT CPhT (pharmacy technician)`, values: [`100 scored plus 20 pretest, 2 hours 10 minutes`, `Dispensing Process, 43 items`, `20 CE hours every 2 years`] }
      ]
    },
    orgFaqs: [
      {
        q: `What is the passing score on NHA certification exams?`,
        a: `The passing score on every NHA certification exam is a scaled score of 390 on a 200 to 500 scale. NHA uses scaled scores because each exam has multiple forms, and scaling keeps the 390 standard consistent whichever form you receive. The score is not a percentage of questions correct, and NHA does not publish the raw-score conversion.`
      },
      {
        q: `How long must I wait to retake an NHA exam?`,
        a: `You must wait 30 days after a failed NHA attempt before retaking. You are allowed three attempts with at least 30 days between them, and each failure after the third requires a 1-year wait. Every retake needs a new registration and the full exam price, so use the Above, Near or Below feedback on your score report to focus your study.`
      },
      {
        q: `Do NHA certifications expire?`,
        a: `NHA certifications are valid for 2 years and must be renewed with 10 continuing education credits plus a recertification fee. ExCPT pharmacy technicians complete 20 CE hours instead, including 1 hour of pharmacy law and 1 hour of patient safety. A lapsed credential can be reinstated within 1 year; after that you must retake the exam.`
      }
    ],
    sourceUrl: HANDBOOK,
    verified: true,
    confidence: `medium`
  }
];

const SHARED = {
  retake: `You can retake an NHA exam 30 days after a failed attempt. NHA allows three attempts with at least 30 days between each, and every failure after the third requires waiting 1 year. Each retake means registering again and paying the full exam price, so study the Above, Near and Below feedback on your score report before booking.`,
  results: `Results appear in your NHA account within 48 hours when you test at a PSI center or by Live Remote Proctoring. Tests taken at an authorized school give a preliminary report immediately. If you pass, NHA emails you to print the certificate under My Achievements. NHA never gives scores by phone and treats preliminary results as non-final.`,
  renewal: `Your NHA credential is valid for 2 years and renews with 10 continuing education credits, where 2 hours of CE equal 1 credit, plus a recertification fee. NHA allows a one-month grace period. An expired credential can be reinstated within 1 year with 15 credits and reinstatement fees; after 1 year you must retake the exam.`,
  hard: `NHA does not publish exam pass rates in its Candidate Handbook, so no official figure exists to quote. NHA does publish the passing standard: a scaled score of 390 on a 200 to 500 scale, set by subject matter experts using a modified Angoff method. Difficulty therefore depends on your training and how closely you study the free test plan.`
};

function nhaRecord(o) {
  return {
    slug: o.slug,
    body: NHA_BODY,
    tagline: o.tagline,
    description: o.description,
    quickAnswer: { summary: o.summary, advantages: o.advantages },
    roadmap: o.roadmap,
    prerequisites: o.prerequisites,
    eligibility: o.eligibility,
    examMeta: {
      questions: o.questions,
      time: o.time,
      pass: o.pass || `Scaled score of 390 on a 200-500 scale`,
      fee: o.fee,
      format: o.format,
      admin: o.admin || `NHA (eligibility, scoring, certification); PSI (test centers and Live Remote Proctoring)`
    },
    topics: o.topics,
    examEssentials: o.essentials || [
      [`Test plan`, o.plan],
      [`Scoring`, `Scaled 200-500; 390 passes. Scores come from scored items only; pretest items do not count`],
      [`Retakes`, `30-day wait; three attempts; 1-year wait after each failure past the third; full exam price each time`],
      [`Rescheduling`, `Free within 6 months of the original date if changed at least 24 hours before the appointment`],
      [`Score report`, `Final report in the NHA account within 48 hours at PSI or Live Remote Proctoring`],
      [`Validity`, o.validity]
    ],
    timeline: o.timeline || [
      { stage: `Meet eligibility (training or work route)`, duration: o.eligTime },
      { stage: `Apply in the NHA account and pay`, duration: `Pay within 2 hours of applying or the application is voided` },
      { stage: `Schedule PSI or Live Remote Proctoring and take the exam`, duration: o.time },
      { stage: `Final score report`, duration: `Within 48 hours of testing at PSI or Live Remote Proctoring` },
      { stage: `Retake if needed`, duration: `At least 30 days after a failed attempt` }
    ],
    costBreakdown: {
      items: [
        { item: `Exam fee, one attempt (set by NHA; shown in the NHA store at checkout)`, fee: `Paid at application; an institution or employer may cover it` },
        { item: `Retake after a failed attempt`, fee: `Full exam price again; no discounted retake is described in the Candidate Handbook` },
        { item: `Reschedule at least 24 hours ahead, within 6 months`, fee: `$0; missing the deadline forfeits the fee` },
        { item: o.extraCostItem, fee: o.extraCostFee },
        { item: `Recertification after 2 years`, fee: o.renewFee }
      ],
      total: `One exam fee per attempt (amount set in the NHA store), plus ${o.renewTotal}`,
      footnote: `NHA prints no fee amounts in the Candidate Handbook, so confirm the current price at checkout. Prep materials are optional.`
    },
    difficulty: o.difficulty,
    audience: o.audience,
    time: o.studyTime,
    cost: `Exam fee set by NHA and shown at checkout; full price again for each retake`,
    faqs: o.faqs,
    summaryPoints: o.summaryPoints,
    relatedSlugs: o.relatedSlugs,
    sourceUrl: o.sourceUrl,
    reviewed: `2026-10`,
    confidence: o.confidence || `medium`
  };
}

const RENEW_FEE = `10 CE credits plus a recertification fee that NHA frames as about $8 per month; no amount is printed in the handbook`;
const RENEW_TOTAL = `10 CE credits and a recertification fee every 2 years`;

export const exams = [
  nhaRecord({
    slug: `nha-ccma`,
    tagline: `The NHA CCMA: 180 questions in 3 hours, with 84 of 150 scored items in Clinical Patient Care.`,
    description: `The NHA CCMA exam has 150 scored questions plus 30 pretest items in 3 hours, and you pass with a scaled score of 390 on a 200-500 scale. The Certified Clinical Medical Assistant exam is built on NHA's 2022 job analysis and puts 84 of its 150 scored items into Clinical Patient Care, with smaller blocks for Foundational Knowledge and Basic Science (15), Anatomy and Physiology (8), Patient Care Coordination and Education (12), Administrative Assisting (12), Communication and Customer Service (12) and Medical Law and Ethics (7). Medical assistants in clinics, hospitals and urgent care take it, and employers use it as proof of clinical skill across vitals, injections, phlebotomy and EKG.`,
    summary: `The NHA CCMA exam has 180 multiple-choice questions in 3 hours: 150 scored and 30 unscored pretest. A scaled score of 390 on the 200-500 scale passes. You qualify with a diploma or GED plus a medical assistant program from the last 5 years or supervised work experience, then test at PSI or by remote proctoring.`,
    advantages: [
      `Clinical Patient Care alone is 84 of the 150 scored items (56%), so study priorities are unusually clear.`,
      `Pathway 2 lets experienced medical assistants qualify with 1 year of supervised work in the last 3 years, or 2 years in the last 5, without a program.`,
      `Results post to your NHA account within 48 hours at PSI or Live Remote Proctoring.`,
      `The free NHA test plan lists exact item counts for six clinical subdomains, including Phlebotomy (12) and EKG and Cardiovascular Testing (6).`
    ],
    roadmap: [
      `Confirm Pathway 1 (training within 5 years) or Pathway 2 (supervised work) in the Candidate Handbook`,
      `Download the free CCMA test plan and map your weakest domains`,
      `Apply in your NHA account and pay within 2 hours`,
      `Schedule PSI or Live Remote Proctoring and take the 3-hour exam`,
      `Read your score report within 48 hours and print the certificate`
    ],
    prerequisites: `High school diploma or equivalent, plus completion of a medical assistant training program within the past 5 years, or supervised medical assistant work experience.`,
    eligibility: `Pathway 1 is a medical assistant training program, a DOL-registered apprenticeship or formal military medical training completed within the past 5 years. Pathway 2 is 1 year of supervised work experience in the last 3 years or 2 years in the last 5. California residents on the work route need at least 2 years as a medical assistant within the 5 years before the exam.`,
    questions: `180 total: 150 scored plus 30 unscored pretest items`,
    time: `3 hours (180 minutes), one sitting`,
    fee: `Set by NHA and shown in the NHA store at checkout; paid per attempt, full price again for each retake; free reschedule if 24+ hours ahead`,
    format: `Computer-based, multiple choice, NCCA-accredited; PSI test center or Live Remote Proctoring`,
    topics: [
      { name: `Foundational Knowledge and Basic Science`, weight: ``, note: `15 scored items: health care systems, medical terminology, basic pharmacology.` },
      { name: `Anatomy and Physiology`, weight: ``, note: `8 scored items.` },
      { name: `Clinical Patient Care`, weight: ``, note: `84 scored items: Patient Intake and Vitals (14), General Patient Care (28), Infection Control and Safety (15), Point of Care Testing and Laboratory Procedures (9), Phlebotomy (12), EKG and Cardiovascular Testing (6).` },
      { name: `Patient Care Coordination and Education`, weight: ``, note: `12 scored items.` },
      { name: `Administrative Assisting`, weight: ``, note: `12 scored items.` },
      { name: `Communication and Customer Service`, weight: ``, note: `12 scored items.` },
      { name: `Medical Law and Ethics`, weight: ``, note: `7 scored items.` }
    ],
    plan: `CCMA test plan based on the 2022 job analysis: 150 scored items, 30 pretest items, 3 hours`,
    validity: `2 years; renew with 10 CE credits (California CCMAs who train other medical assistants need 60 CE hours every 5 years)`,
    eligTime: `Training must be completed within the past 5 years; work experience window is 3 or 5 years`,
    extraCostItem: `Optional NHA study guide or practice assessment`,
    extraCostFee: `Sold separately; not required for eligibility`,
    renewFee: RENEW_FEE,
    renewTotal: RENEW_TOTAL,
    difficulty: `Moderate`,
    audience: `Medical assistant students and working clinical assistants who need a national credential accepted by many clinics and hospitals.`,
    studyTime: `Plan study around the 84-item Clinical Patient Care domain; allow the full 3-hour sitting`,
    faqs: [
      { q: `How many questions are on the NHA CCMA exam?`, a: `The NHA CCMA exam has 180 questions: 150 scored items and 30 unscored pretest items, per the CCMA test plan. You cannot tell which are pretest, and pretest items do not affect your score. Of the 150 scored items, 84 fall in Clinical Patient Care, so most of your preparation should target that domain.` },
      { q: `What is a passing score on the CCMA exam?`, a: `A passing score on the CCMA exam is a scaled score of 390 on NHA's 200 to 500 scale. NHA converts raw scores to a scaled score so every exam form has the same standard, and it does not publish the number of correct answers needed. Your score report shows Above, Near or Below the passing standard for each domain.` },
      { q: `How long is the NHA CCMA exam?`, a: `The NHA CCMA exam allows 3 hours, or 180 minutes, for all 180 questions in a single sitting. That works out to about one minute per question. The test plan lists the time limit at the top, and approved accommodations can change it. Practise full-length timed sets so you finish both scored and pretest items.` },
      { q: `Is the CCMA exam hard?`, a: `${SHARED.hard} For the CCMA, the heavy weight on Clinical Patient Care means weak clinical knowledge is more costly than weak administrative knowledge.` },
      { q: `Can I take the CCMA exam without going to school?`, a: `Yes. NHA Pathway 2 lets you qualify with a high school diploma or GED plus 1 year of supervised medical assistant work experience in the last 3 years, or 2 years in the last 5. California residents on this route need at least 2 years of medical assistant experience in the last 5 years.` },
      { q: `How long until I get my CCMA results?`, a: SHARED.results },
      { q: `How often does the CCMA certification need renewal?`, a: `The CCMA must be renewed every 2 years with 10 continuing education credits and a recertification fee. California CCMA holders who train other medical assistants need 60 CE hours every 5 years instead. NHA allows a one-month grace period, and an expired credential can be reinstated within 1 year with 15 credits and fees.` },
      { q: `How soon can I retake the CCMA exam after failing?`, a: SHARED.retake }
    ],
    summaryPoints: [
      `The NHA CCMA has 150 scored and 30 pretest questions in 3 hours.`,
      `Clinical Patient Care is 84 of 150 scored items; Phlebotomy is 12 and EKG is 6.`,
      `A scaled score of 390 on the 200-500 scale passes.`,
      `Retake after 30 days; three attempts, then a 1-year wait after each further failure.`,
      `Renew every 2 years with 10 CE credits.`
    ],
    relatedSlugs: [`nha-cmaa`, `aama-cma`, `amt-rma`, `ncct-ncma`],
    sourceUrl: `https://www.nhanow.com/docs/default-source/test-plans/nha_ccma_test_plan_2022.pdf`,
    confidence: `medium`
  }),

  nhaRecord({
    slug: `nha-cehrs`,
    tagline: `The NHA CEHRS: 100 scored items across five EHR domains in 125 minutes.`,
    description: `The NHA CEHRS exam has 100 scored questions plus 25 pretest items in 125 minutes, with a passing scaled score of 390 on a 200-500 scale. The Certified Electronic Health Records Specialist test plan, based on a 2019 job analysis, is led by Clinical Operations (32 items) and Non-Clinical Operations (28), followed by Revenue Cycle/Finance (15), Regulatory Compliance (15) and Reporting (10). It suits people who register patients, document encounters and move data in electronic health record systems, and it is the NHA credential closest to health information work rather than hands-on patient care.`,
    summary: `The NHA CEHRS exam has 125 questions in 125 minutes: 100 scored and 25 pretest. A scaled score of 390 passes. Clinical Operations (32 items) and Non-Clinical Operations (28) make up 60 of the 100 scored items. You qualify with a diploma or GED plus EHR training or work experience.`,
    advantages: [
      `The exam is only 100 scored items, with exact counts for all five domains in the free test plan.`,
      `Clinical Operations (32) and Non-Clinical Operations (28) cover most of the paper, so EHR workflow knowledge pays off most.`,
      `Eligibility includes a work route: 1 year of supervised EHR work in the last 3 years, or 2 years in the last 5.`,
      `The same 390 passing standard and 30-day retake rule as every other NHA exam.`
    ],
    roadmap: [
      `Confirm EHR training within 5 years or supervised EHR work experience`,
      `Download the CEHRS test plan and note the five domains`,
      `Apply in your NHA account and pay within 2 hours`,
      `Schedule PSI or Live Remote Proctoring for the 125-minute exam`,
      `Check your score report within 48 hours`
    ],
    prerequisites: `High school diploma or equivalent, plus an electronic health records training program within the past 5 years, or supervised EHR work experience.`,
    eligibility: `Pathway 1 is a training program in the field, a DOL-registered apprenticeship or formal military training completed within 5 years. Pathway 2 is supervised work in the field: 1 year in the last 3 years or 2 years in the last 5. School-affiliated candidates may take the exam before an externship ends under the pre-externship route, then have 90 days to finish.`,
    questions: `125 total: 100 scored plus 25 unscored pretest items`,
    time: `125 minutes (2 hours 5 minutes), one sitting`,
    fee: `Set by NHA and shown in the NHA store at checkout; paid per attempt, full price again for each retake; free reschedule if 24+ hours ahead`,
    format: `Computer-based, multiple choice, NCCA-accredited; PSI test center or Live Remote Proctoring`,
    topics: [
      { name: `Non-Clinical Operations`, weight: ``, note: `28 scored items: patient identifiers, collecting and updating patient information, encounter documentation, patient flow, EHR hardware and user training.` },
      { name: `Clinical Operations`, weight: ``, note: `32 scored items, the largest domain.` },
      { name: `Revenue Cycle/Finance`, weight: ``, note: `15 scored items.` },
      { name: `Regulatory Compliance`, weight: ``, note: `15 scored items.` },
      { name: `Reporting`, weight: ``, note: `10 scored items.` }
    ],
    plan: `CEHRS test plan based on the 2019 job analysis: 100 scored items, 25 pretest items, 125 minutes`,
    validity: `2 years; renew with 10 CE credits plus a recertification fee`,
    eligTime: `Training within the past 5 years, or 1 year of work in the last 3 or 2 years in the last 5`,
    extraCostItem: `Optional NHA study guide or practice assessment`,
    extraCostFee: `Sold separately; not required for eligibility`,
    renewFee: RENEW_FEE,
    renewTotal: RENEW_TOTAL,
    difficulty: `Moderate`,
    audience: `Medical records and registration staff, billing assistants and students in health information programs who work inside EHR systems.`,
    studyTime: `Plan around Clinical Operations and Non-Clinical Operations, then allow 125 minutes on exam day`,
    faqs: [
      { q: `How many questions are on the NHA CEHRS exam?`, a: `The NHA CEHRS exam has 125 questions in total: 100 scored items and 25 unscored pretest items, according to the CEHRS test plan. Pretest items look identical to scored ones and do not count toward your result. The scored items split 32 Clinical Operations, 28 Non-Clinical Operations, 15 Revenue Cycle/Finance, 15 Regulatory Compliance and 10 Reporting.` },
      { q: `What is a passing score on the CEHRS exam?`, a: `A passing score on the CEHRS exam is a scaled score of 390 on NHA's 200 to 500 scale. NHA uses scaling so the standard holds across exam forms, and it does not publish how many raw items you need. Your score report places each domain Above, Near or Below the passing standard.` },
      { q: `How long is the NHA CEHRS exam?`, a: `The NHA CEHRS exam is 125 minutes, or 2 hours and 5 minutes, for all 125 questions. That is one minute per item, including the 25 pretest questions you cannot identify. The test plan states the time limit, and an approved accommodation may extend it. Practise a full timed set before exam day.` },
      { q: `Is the CEHRS exam hard?`, a: `${SHARED.hard} The CEHRS is a shorter paper than the CCMA, but Regulatory Compliance and Revenue Cycle questions can surprise candidates who only know the software screens.` },
      { q: `Can I take the CEHRS exam without a training program?`, a: `Yes, if you have supervised work experience in electronic health records. NHA requires a high school diploma or GED plus 1 year of supervised work in the last 3 years, or 2 years in the last 5. Otherwise you need completion of a relevant training program within the past 5 years.` },
      { q: `How long until I get my CEHRS results?`, a: SHARED.results },
      { q: `Does the CEHRS certification expire?`, a: SHARED.renewal },
      { q: `How soon can I retake the CEHRS exam after failing?`, a: SHARED.retake }
    ],
    summaryPoints: [
      `The NHA CEHRS has 100 scored and 25 pretest questions in 125 minutes.`,
      `Clinical Operations is 32 scored items and Non-Clinical Operations is 28.`,
      `A scaled score of 390 on the 200-500 scale passes.`,
      `Retake after 30 days; three attempts before a 1-year wait applies.`,
      `Renew every 2 years with 10 CE credits.`
    ],
    relatedSlugs: [`nha-cmaa`, `nha-ccma`, `ahima-rhit`, `ahima-cca`],
    sourceUrl: `https://www.nhanow.com/docs/default-source/test-plans/nha_cehrs-test-plan.pdf`,
    confidence: `medium`
  }),

  nhaRecord({
    slug: `nha-cmaa`,
    tagline: `The NHA CMAA: front-office medical administration, 110 scored items in 2 hours 15 minutes.`,
    description: `The NHA CMAA exam has 110 scored questions plus 25 pretest items in 2 hours 15 minutes, and a scaled score of 390 passes. The Certified Medical Administrative Assistant test plan, based on a 2021 job analysis, spreads 110 scored items over seven domains: Communication and Professionalism (21), Patient Encounter (21), Medical Law, Ethics, and Compliance (17), Scheduling (16), Medical Practice Administrative Procedures and Logistics (14), Billing and Revenue Cycle (11) and Foundational Knowledge (10). Front-desk staff, schedulers and medical office coordinators take it to show they can run the administrative side of a clinic.`,
    summary: `The NHA CMAA exam has 135 questions in 2 hours 15 minutes: 110 scored and 25 pretest. A scaled score of 390 passes. Communication and Professionalism and Patient Encounter carry 21 scored items each. You qualify with a diploma or GED plus a medical administrative training program or supervised work experience.`,
    advantages: [
      `No clinical skills are tested, so the exam fits front-office staff with no hands-on patient care.`,
      `Two domains, Communication and Professionalism and Patient Encounter, are 42 of 110 scored items.`,
      `Scheduling has its own domain with 16 items, so appointment-system questions are predictable.`,
      `The work route needs 1 year of supervised administrative experience in the last 3 years, or 2 in the last 5.`
    ],
    roadmap: [
      `Confirm your training program or supervised administrative experience`,
      `Download the CMAA test plan and rank the seven domains by item count`,
      `Apply in your NHA account and pay within 2 hours`,
      `Schedule PSI or Live Remote Proctoring for the 135-minute exam`,
      `Check your score report within 48 hours`
    ],
    prerequisites: `High school diploma or equivalent, plus a medical administrative assistant training program within the past 5 years, or supervised work experience in the field.`,
    eligibility: `Pathway 1 is a training program, a DOL-registered apprenticeship or formal military training in the field completed within 5 years. Pathway 2 is supervised work experience: 1 year in the last 3 years or 2 years in the last 5. Students may test before finishing an externship if their school has an NHA agreement, then have 90 days to complete it.`,
    questions: `135 total: 110 scored plus 25 unscored pretest items`,
    time: `2 hours 15 minutes (135 minutes), one sitting`,
    fee: `Set by NHA and shown in the NHA store at checkout; paid per attempt, full price again for each retake; free reschedule if 24+ hours ahead`,
    format: `Computer-based, multiple choice, NCCA-accredited; PSI test center or Live Remote Proctoring`,
    topics: [
      { name: `Foundational Knowledge`, weight: ``, note: `10 scored items: health care organizations, record types, medical terminology.` },
      { name: `Communication and Professionalism`, weight: ``, note: `21 scored items.` },
      { name: `Medical Law, Ethics, and Compliance`, weight: ``, note: `17 scored items.` },
      { name: `Scheduling`, weight: ``, note: `16 scored items.` },
      { name: `Patient Encounter`, weight: ``, note: `21 scored items.` },
      { name: `Billing and Revenue Cycle`, weight: ``, note: `11 scored items.` },
      { name: `Medical Practice Administrative Procedures and Logistics`, weight: ``, note: `14 scored items.` }
    ],
    plan: `CMAA test plan based on the 2021 job analysis (revision dated 01/22/2022): 110 scored items, 25 pretest items, 2 hours 15 minutes`,
    validity: `2 years; renew with 10 CE credits plus a recertification fee`,
    eligTime: `Training within the past 5 years, or 1 year of work in the last 3 or 2 years in the last 5`,
    extraCostItem: `Optional NHA study guide or practice assessment`,
    extraCostFee: `Sold separately; not required for eligibility`,
    renewFee: RENEW_FEE,
    renewTotal: RENEW_TOTAL,
    difficulty: `Moderate`,
    audience: `Receptionists, schedulers, patient access staff and medical office assistants who run the front desk of a practice.`,
    studyTime: `Plan around Communication and Professionalism, Patient Encounter and Medical Law, then allow 135 minutes`,
    faqs: [
      { q: `How many questions are on the NHA CMAA exam?`, a: `The NHA CMAA exam has 135 questions: 110 scored items and 25 unscored pretest items, per the CMAA test plan. Pretest items cannot be identified and do not affect your score. The 110 scored items cover seven domains, with Communication and Professionalism and Patient Encounter at 21 items each.` },
      { q: `What is a passing score on the CMAA exam?`, a: `A passing score on the CMAA exam is a scaled score of 390 on NHA's 200 to 500 scale. NHA scales scores so every form of the exam applies the same standard, and the raw number of correct answers needed is not published. The score report shows Above, Near or Below the standard for each domain.` },
      { q: `How long is the NHA CMAA exam?`, a: `The NHA CMAA exam gives you 2 hours and 15 minutes, or 135 minutes, to answer all 135 questions. That is one minute per question, including the unmarked pretest items. The time is printed at the top of the CMAA test plan and may be extended by an approved accommodation.` },
      { q: `Is the CMAA exam hard?`, a: `${SHARED.hard} For the CMAA, expect scenario questions about scheduling, patient communication and compliance rather than clinical procedures.` },
      { q: `Can I take the CMAA exam without a training program?`, a: `Yes. NHA accepts a high school diploma or GED plus supervised work experience in medical administration: 1 year in the last 3 years, or 2 years in the last 5. If you finished a program more than 5 years ago, you must use the work-experience route instead.` },
      { q: `How long until I get my CMAA results?`, a: SHARED.results },
      { q: `How often must I renew the CMAA credential?`, a: SHARED.renewal },
      { q: `How soon can I retake the CMAA exam after failing?`, a: SHARED.retake }
    ],
    summaryPoints: [
      `The NHA CMAA has 110 scored and 25 pretest questions in 2 hours 15 minutes.`,
      `Communication and Professionalism and Patient Encounter are 21 scored items each.`,
      `A scaled score of 390 on the 200-500 scale passes.`,
      `Retake after 30 days; three attempts before a 1-year wait applies.`,
      `Renew every 2 years with 10 CE credits.`
    ],
    relatedSlugs: [`nha-ccma`, `nha-cehrs`, `amt-cmas`, `ncct-ncma`],
    sourceUrl: `https://www.nhanow.com/docs/default-source/test-plans/nha_cmaa_test_plan_2021.pdf`,
    confidence: `medium`
  }),

  nhaRecord({
    slug: `nha-cpct`,
    tagline: `The NHA CPCT/A: 100 scored items, 45 of them in basic patient care, in 2 hours.`,
    description: `The NHA CPCT/A exam has 100 scored questions plus 20 pretest items in 2 hours, with a passing scaled score of 390 on a 200-500 scale. The Certified Patient Care Technician/Assistant test plan, based on a 2018 job analysis, gives Patient Care 45 items, Compliance, Safety, and Professional Responsibility 20, Phlebotomy 14, Infection Control 11 and EKG 10. Nursing assistants, hospital patient care technicians and students in PCT programs take it because it combines bedside care with phlebotomy and EKG skills in one credential.`,
    summary: `The NHA CPCT/A exam has 120 questions in 2 hours: 100 scored and 20 pretest. A scaled score of 390 passes. Patient Care is 45 of the 100 scored items, with Phlebotomy at 14 and EKG at 10. You qualify with a diploma or GED plus a patient care program or supervised work experience.`,
    advantages: [
      `One exam covers bedside care, phlebotomy and EKG, which suits hospital PCT job postings.`,
      `Patient Care is 45% of the 100 scored items, so the largest block is a familiar nursing-assistant skill set.`,
      `Experienced aides can qualify through 1 year of supervised work in the last 3 years or 2 in the last 5.`,
      `The exam is a single 2-hour sitting for 120 questions, about one minute per question.`
    ],
    roadmap: [
      `Confirm a patient care technician program within 5 years or supervised work experience`,
      `Download the CPCT/A test plan and study the five domains by item count`,
      `Apply in your NHA account and pay within 2 hours`,
      `Schedule PSI or Live Remote Proctoring for the 2-hour exam`,
      `Check your score report within 48 hours`
    ],
    prerequisites: `High school diploma or equivalent, plus a patient care technician or similar training program within the past 5 years, or supervised work experience.`,
    eligibility: `Pathway 1 is a training program, a DOL-registered apprenticeship or formal military training in patient care completed within 5 years. Pathway 2 is supervised work experience: 1 year in the last 3 years or 2 years in the last 5. Candidates still in high school or a GED program may sit up to 18 months before graduation and receive a Provisional Certification.`,
    questions: `120 total: 100 scored plus 20 unscored pretest items`,
    time: `2 hours (120 minutes), one sitting`,
    fee: `Set by NHA and shown in the NHA store at checkout; paid per attempt, full price again for each retake; free reschedule if 24+ hours ahead`,
    format: `Computer-based, multiple choice, NCCA-accredited; PSI test center or Live Remote Proctoring`,
    topics: [
      { name: `Patient Care`, weight: ``, note: `45 scored items: basic care under nursing direction such as bathing, positioning, catheter care and activities of daily living.` },
      { name: `Compliance, Safety, and Professional Responsibility`, weight: ``, note: `20 scored items.` },
      { name: `Infection Control`, weight: ``, note: `11 scored items.` },
      { name: `Phlebotomy`, weight: ``, note: `14 scored items.` },
      { name: `EKG`, weight: ``, note: `10 scored items.` }
    ],
    plan: `CPCT/A test plan based on the 2018 job analysis: 100 scored items, 20 pretest items, 2 hours`,
    validity: `2 years; renew with 10 CE credits plus a recertification fee`,
    eligTime: `Training within the past 5 years, or 1 year of work in the last 3 or 2 years in the last 5`,
    extraCostItem: `Optional NHA study guide or practice assessment`,
    extraCostFee: `Sold separately; not required for eligibility`,
    renewFee: RENEW_FEE,
    renewTotal: RENEW_TOTAL,
    difficulty: `Moderate`,
    audience: `Nursing assistants, patient care technicians and PCT program students who need bedside, phlebotomy and EKG skills certified together.`,
    studyTime: `Plan around the 45-item Patient Care domain, then phlebotomy and EKG`,
    faqs: [
      { q: `How many questions are on the NHA CPCT/A exam?`, a: `The NHA CPCT/A exam has 120 questions: 100 scored items and 20 unscored pretest items, according to the CPCT/A test plan. Pretest items are indistinguishable from scored ones and do not count toward your result. Patient Care alone accounts for 45 of the 100 scored items.` },
      { q: `What is a passing score on the CPCT/A exam?`, a: `A passing score on the CPCT/A exam is a scaled score of 390 on NHA's 200 to 500 scale. The scaled score keeps the standard identical across exam forms, and NHA does not publish the raw number of items required. Each domain is rated Above, Near or Below the passing standard on your report.` },
      { q: `How long is the NHA CPCT/A exam?`, a: `The NHA CPCT/A exam allows 2 hours, or 120 minutes, for all 120 questions. That is one minute per question, counting the 20 pretest items you cannot spot. Older sources quote 1 hour 50 minutes; the current NHA test plan states 2 hours. Approved accommodations can adjust the limit.` },
      { q: `Is the CPCT/A exam hard?`, a: `${SHARED.hard} For the CPCT/A, candidates with nursing assistant experience usually find Patient Care familiar, while phlebotomy order of draw and EKG lead placement need deliberate study.` },
      { q: `Do I need clinical hours to take the CPCT/A exam?`, a: `NHA does not set a clinical-hours minimum for the CPCT/A. You need a high school diploma or GED plus a patient care program completed within 5 years, or supervised patient care experience: 1 year in the last 3 years or 2 years in the last 5. The CPT and CET have separate skills minimums.` },
      { q: `How long until I get my CPCT/A results?`, a: SHARED.results },
      { q: `Does the CPCT/A certification expire?`, a: SHARED.renewal },
      { q: `How soon can I retake the CPCT/A exam after failing?`, a: SHARED.retake }
    ],
    summaryPoints: [
      `The NHA CPCT/A has 100 scored and 20 pretest questions in 2 hours.`,
      `Patient Care is 45 scored items; Phlebotomy 14, Compliance and Safety 20, Infection Control 11, EKG 10.`,
      `A scaled score of 390 on the 200-500 scale passes.`,
      `Retake after 30 days; three attempts before a 1-year wait applies.`,
      `Renew every 2 years with 10 CE credits.`
    ],
    relatedSlugs: [`nha-ccma`, `nnaap-cna`, `ncct-pt`, `aab-phlebotomy`],
    sourceUrl: `https://info.nhanow.com/hubfs/Test%20Plans/nha-2018-cpct-test-plan-1.pdf`,
    confidence: `medium`
  }),

  nhaRecord({
    slug: `nha-cpht`,
    tagline: `The NHA ExCPT CPhT: 100 scored items, 43 in the Dispensing Process, in 2 hours 10 minutes.`,
    description: `The NHA ExCPT exam for the Certified Pharmacy Technician (CPhT) credential has 100 scored questions plus 20 pretest items in 2 hours 10 minutes, and a scaled score of 390 passes. The 2023 test plan gives the Dispensing Process 43 items, Drugs and Drug Therapy 13, Laws 15, Medication and Patient Safety and Quality Assurance 14, and Role, Responsibilities, and General Duties of the Pharmacy Technician 15. Retail and hospital pharmacy staff take it; it is NHA's alternative to the PTCB CPhT, and some states or employers accept only one of the two.`,
    summary: `The NHA ExCPT exam has 120 questions in 2 hours 10 minutes: 100 scored and 20 pretest. A scaled score of 390 passes. The Dispensing Process is 43 of the 100 scored items, including 7 calculations questions. You qualify with a diploma or GED plus a pharmacy technician program or 1,200 hours of supervised pharmacy work.`,
    advantages: [
      `Calculations are only 7 scored items inside the 43-item Dispensing Process, so math is a bounded risk.`,
      `The work route is clear: 1,200 hours of supervised pharmacy work within one year in the last 3 years.`,
      `Laws is 15 scored items, split into Laws and Regulations (9) and Controlled Substances (6).`,
      `The credential renews on 20 CE hours every 2 years, with law and patient safety hours required.`
    ],
    roadmap: [
      `Confirm a pharmacy technician program within 5 years or 1,200 hours of supervised pharmacy work`,
      `Check your state board accepts the NHA ExCPT, not only PTCB`,
      `Apply in your NHA account and pay within 2 hours`,
      `Schedule PSI or Live Remote Proctoring for the 130-minute exam`,
      `Check your score report within 48 hours`
    ],
    prerequisites: `High school diploma or equivalent, plus a pharmacy technician training program within the past 5 years, or 1,200 hours of supervised pharmacy work in one year within the last 3 years.`,
    eligibility: `Pathway 1 is an accredited or state-approved pharmacy technician program, a DOL-registered apprenticeship, military pharmacy technician training, or an employer or national pharmacy association program, completed within 5 years. Pathway 2 is 1,200 hours of supervised pharmacy-related work during one year within the last 3 years. Provisional certification lasts 12 months for the ExCPT.`,
    questions: `120 total: 100 scored plus 20 unscored pretest items`,
    time: `2 hours 10 minutes (130 minutes), one sitting`,
    fee: `Set by NHA and shown in the NHA store at checkout; paid per attempt, full price again for each retake; free reschedule if 24+ hours ahead`,
    format: `Computer-based, multiple choice, NCCA-accredited; PSI test center or Live Remote Proctoring`,
    topics: [
      { name: `Role, Responsibilities, and General Duties of the Pharmacy Technician`, weight: ``, note: `15 scored items.` },
      { name: `Laws`, weight: ``, note: `15 scored items: Laws and Regulations (9) and Controlled Substances (6).` },
      { name: `Drugs and Drug Therapy`, weight: ``, note: `13 scored items: Drug Classification (8) and Frequently Prescribed Medications (5).` },
      { name: `Dispensing Process`, weight: ``, note: `43 scored items: Prescription and Medication Order Intake and Entry (13), Preparing and Dispensing Prescriptions (13), Calculations (7), Sterile and Non-Sterile Products, Compounding, Unit Dose, and Repackaging (10).` },
      { name: `Medication and Patient Safety and Quality Assurance`, weight: ``, note: `14 scored items.` }
    ],
    plan: `ExCPT test plan based on the 2023 job analysis: 100 scored items, 20 pretest items, 2 hours 10 minutes`,
    validity: `2 years; renew with 20 CE hours (at least 1 hour pharmacy law and 1 hour patient safety) plus a recertification fee`,
    eligTime: `Training within the past 5 years, or 1,200 supervised hours in one year within the last 3 years`,
    extraCostItem: `Optional NHA study guide or practice assessment`,
    extraCostFee: `Sold separately; not required for eligibility`,
    renewFee: `20 CE hours (shown on the NHA site as 10 credits) plus a recertification fee; no amount is printed in the handbook`,
    renewTotal: `20 CE hours and a recertification fee every 2 years`,
    difficulty: `Moderate`,
    audience: `Pharmacy technicians in retail, hospital and mail-order settings, and trainees whose state or employer accepts the NHA ExCPT.`,
    studyTime: `Plan around the 43-item Dispensing Process domain, then Laws and Role`,
    faqs: [
      { q: `How many questions are on the NHA ExCPT exam?`, a: `The NHA ExCPT exam has 120 questions: 100 scored items and 20 unscored pretest items, per the 2023 ExCPT test plan. Pretest questions cannot be identified and do not count. The Dispensing Process holds 43 of the 100 scored items, followed by Laws and Role at 15 each.` },
      { q: `What is a passing score on the ExCPT exam?`, a: `A passing score on the ExCPT exam is a scaled score of 390 on NHA's 200 to 500 scale, the same standard as NHA's other exams. Scaling adjusts for form difficulty, and NHA does not publish the raw items required. Your report rates each domain Above, Near or Below the passing standard.` },
      { q: `How long is the NHA ExCPT exam?`, a: `The NHA ExCPT exam is 2 hours and 10 minutes, or 130 minutes, for 120 questions. That is about 65 seconds per question including pretest items. The test plan prints the time limit, and approved accommodations may change it, so practise at that pace.` },
      { q: `Is the ExCPT harder than the PTCB exam?`, a: `NHA does not publish ExCPT pass rates, so no official comparison with the PTCB exam exists. The two differ in format: the ExCPT has 100 scored plus 20 pretest items, 2 hours 10 minutes and a 390 scaled standard. Study the exam your state board or employer names, not both.` },
      { q: `Can I take the ExCPT without a pharmacy technician program?`, a: `Yes. NHA allows a high school diploma or GED plus at least 1,200 hours of supervised pharmacy-related work during one year within the last 3 years. If you completed a training program more than 5 years ago, you must use this work-experience route.` },
      { q: `How long until I get my ExCPT results?`, a: SHARED.results },
      { q: `How often must pharmacy technicians renew the ExCPT credential?`, a: `The ExCPT CPhT credential lasts 2 years and needs 20 continuing education hours to renew, including at least 1 hour of pharmacy law and 1 hour of patient safety, plus a recertification fee. On the NHA site those hours appear as 10 credits. Reinstatement within 1 year after expiry needs 20 hours and fees.` },
      { q: `How soon can I retake the ExCPT exam after failing?`, a: SHARED.retake }
    ],
    summaryPoints: [
      `The NHA ExCPT has 100 scored and 20 pretest questions in 2 hours 10 minutes.`,
      `Dispensing Process is 43 scored items, including 7 calculations questions.`,
      `A scaled score of 390 on the 200-500 scale passes.`,
      `Work route requires 1,200 supervised pharmacy hours in one year within the last 3 years.`,
      `Renew every 2 years with 20 CE hours including law and patient safety.`
    ],
    relatedSlugs: [`ptcb-cpht`, `ptcb-cspt`, `nha-ccma`, `nha-cpct`],
    sourceUrl: `https://info.nhanow.com/hubfs/Test%20Plans/2023%20ExCPT%20Test%20Plan.pdf`,
    confidence: `medium`
  }),

  nhaRecord({
    slug: `nha-mental-health-tech`,
    tagline: `NHA does not offer a Mental Health Technician exam; AMCA's 75-question MHTC is the closest published match.`,
    description: `NHA does not offer a Mental Health Technician certification; the Candidate Handbook updated October 5, 2026 lists eight NHA exams and none is a mental health technician exam. The closest published credential is the American Medical Certification Association (AMCA) Mental Health Technician Certification (MHTC): 75 questions in 2 hours, covering Psychological Development, Process and Procedure, Pharmacology, Medical Office/Patient Care Skills and Practice Settings. Candidates searching for an NHA mental health credential should confirm which body their employer or program accepts, and NHA's CPCT/A is its nearest direct-care option.`,
    summary: `NHA has no Mental Health Technician exam, so there is no NHA fee, question count or pass rate to report. AMCA's MHTC is the best-documented alternative: 75 questions in 2 hours for $119 per its 2027 program outline. NHA's own direct-care option is the CPCT/A, with 100 scored items in 2 hours.`,
    advantages: [
      `Knowing up front that NHA offers no mental health technician exam saves you from paying for the wrong credential.`,
      `AMCA publishes weights: Psychological Development 27%, Process and Procedure 23%, Pharmacology 22%, Medical Office/Patient Care Skills 21%, Practice Settings 7%.`,
      `AMCA's MHTC can be taken online, on paper or with live remote proctoring, per its outline.`,
      `The NHA CPCT/A is a real NHA exam that covers patient care, phlebotomy and EKG for direct-care roles.`
    ],
    roadmap: [
      `Ask your employer or program which body issues the mental health technician credential it accepts`,
      `If it is AMCA, download the MHTC program outline and blueprint`,
      `If you want an NHA credential, compare the CPCT/A or CCMA test plans`,
      `Register only with the body that issues the exam you need`,
      `Confirm renewal rules with that body before you pay`
    ],
    prerequisites: `None from NHA, because NHA has no Mental Health Technician exam. Eligibility for AMCA's MHTC is set by AMCA.`,
    eligibility: `NHA publishes no eligibility rules for a mental health technician credential because it does not offer one. Eligibility for the AMCA MHTC is defined by AMCA, and its program outline does not state a prerequisite. For NHA's direct-care alternative, the CPCT/A, you need a diploma or GED plus a training program within 5 years or supervised work experience.`,
    questions: `NHA: no exam exists. AMCA MHTC (closest published match): 75 questions`,
    time: `NHA: not applicable. AMCA MHTC: 2 hours`,
    fee: `NHA: no fee because no exam exists. AMCA MHTC: $119 per its 2027 program outline`,
    format: `NHA: not applicable. AMCA MHTC: online or paper-and-pencil, with live remote proctoring available`,
    topics: [
      { name: `Process & Procedure`, weight: `23%`, note: `AMCA MHTC blueprint: 18 of 75 items. This is AMCA content, not an NHA outline.` },
      { name: `Psychological Development`, weight: `27%`, note: `AMCA MHTC blueprint: 20 of 75 items.` },
      { name: `Pharmacology`, weight: `22%`, note: `AMCA MHTC blueprint: 16 of 75 items.` },
      { name: `Medical Office/Patient Care Skills`, weight: `21%`, note: `AMCA MHTC blueprint: 16 of 75 items.` },
      { name: `Practice Settings`, weight: `7%`, note: `AMCA MHTC blueprint: 5 of 75 items.` }
    ],
    pass: `No NHA passing score exists because NHA has no such exam; AMCA states 70% or higher for its MHTC, while every NHA exam passes at a scaled 390 on 200-500`,
    admin: `AMCA (MHTC, the closest published exam); NHA issues no mental health technician credential`,
    essentials: [
      [`NHA exam status`, `None: the NHA Candidate Handbook updated October 5, 2026 lists 8 certifications and no mental health technician exam`],
      [`Closest published exam`, `AMCA Mental Health Technician Certification (MHTC): 75 questions, 2 hours, per the 2027 program outline`],
      [`AMCA cost`, `$119 per the AMCA 2027 program outline; confirm at registration`],
      [`AMCA delivery`, `Online or paper-and-pencil, with live remote proctoring available`],
      [`NHA direct-care alternative`, `CPCT/A: 100 scored plus 20 pretest items, 2 hours, scaled 390 to pass`],
      [`Retakes and renewal`, `Set by the issuing body; NHA rules (30-day wait, 2-year renewal) apply only to NHA exams`]
    ],
    timeline: [
      { stage: `Confirm which credential your employer or program accepts`, duration: `One phone call or email before you pay` },
      { stage: `Review the issuing body's outline and blueprint`, duration: `Study period set by you; AMCA lists 75 questions in 2 hours` },
      { stage: `Register and sit the exam with the issuing body`, duration: `2 hours for the AMCA MHTC` },
      { stage: `Consider an NHA exam instead`, duration: `CPCT/A: 2 hours, results within 48 hours` }
    ],
    plan: `No NHA test plan exists. AMCA MHTC Certification Program Outline 2027: 75 questions, 2 hours, five weighted domains`,
    validity: `NHA: not applicable. Confirm renewal terms with the issuing body of any credential you choose`,
    eligTime: `Not applicable to NHA; set by the credential body you choose`,
    extraCostItem: `AMCA MHTC exam, if you choose it (per AMCA's 2027 outline)`,
    extraCostFee: `$119`,
    renewFee: `Not applicable to NHA; check the issuing body`,
    renewTotal: `any renewal fee set by the body that issues your credential`,
    difficulty: `Not applicable (NHA offers no exam)`,
    audience: `Job seekers and students who searched for an NHA mental health technician exam and need to find the credential employers actually accept.`,
    studyTime: `Starts with confirming the issuing body; AMCA MHTC prep then follows its five-domain blueprint`,
    faqs: [
      { q: `Does NHA offer a Mental Health Technician certification?`, a: `No. NHA does not offer a Mental Health Technician exam. The NHA Candidate Handbook updated October 5, 2026 lists eight certifications: CCMA, CPT, CET, CBCS, CEHRS, CMAA, CPCT/A and the ExCPT pharmacy technician. If a job posting asks for a CMHT, check which organization issues the version the employer accepts.` },
      { q: `What is the closest mental health technician exam?`, a: `The American Medical Certification Association (AMCA) offers a Mental Health Technician Certification (MHTC). Its 2027 program outline lists 75 questions in 2 hours, a $119 cost, and five domains: Psychological Development, Process and Procedure, Pharmacology, Medical Office/Patient Care Skills, and Practice Settings. Other organizations also issue CMHT-titled credentials.` },
      { q: `How many questions are on the mental health technician exam?`, a: `It depends on the issuing body, because NHA has no such exam. AMCA's MHTC has 75 questions and allows 2 hours. By comparison, NHA's CPCT/A, its nearest direct-care exam, has 100 scored plus 20 pretest questions in 2 hours. Always check the test plan of the specific exam you register for.` },
      { q: `What is the passing score for a mental health technician exam?`, a: `NHA has no mental health technician passing score because it has no such exam; its other exams all pass at a scaled 390 on a 200 to 500 scale. AMCA states a passing score of 70 percent or higher on its exams. Do not assume a score from one body applies to another.` },
      { q: `Is there an NHA exam for behavioral health or psychiatric technicians?`, a: `No. NHA's catalog does not include a behavioral health or psychiatric technician exam. The nearest NHA options are the CPCT/A for patient care technicians and the CCMA for clinical medical assistants. Employers hiring psychiatric technicians often set their own training requirements, so ask the hiring facility which credential it prefers.` },
      { q: `Should I take the NHA CPCT/A instead?`, a: `The NHA CPCT/A may be worth taking if you want a national direct-care credential, but it does not cover mental health content in its test plan. Its five domains are Patient Care, Compliance, Safety, and Professional Responsibility, Phlebotomy, Infection Control and EKG. Choose it only if employers in your area ask for it.` },
      { q: `How do I avoid paying for the wrong mental health credential?`, a: `Ask the employer or program for the exact credential name and issuing organization before paying anyone. Titles such as CMHT and MHTC are used by different bodies with different questions, fees and renewal rules. Register through the issuing body directly, not through a site that merely mentions NHA.` }
    ],
    summaryPoints: [
      `NHA lists eight certifications and none is a Mental Health Technician exam.`,
      `AMCA's MHTC has 75 questions in 2 hours at $119 per its 2027 outline.`,
      `The AMCA blueprint weights are 27%, 23%, 22%, 21% and 7% across five domains.`,
      `NHA's nearest direct-care exam, the CPCT/A, is 100 scored plus 20 pretest items in 2 hours.`
    ],
    relatedSlugs: [`nha-cpct`, `nha-ccma`, `nnaap-cna`],
    sourceUrl: `https://www.amcaexams.com/wp-content/uploads/2026/08/MHTC-Certification-Program-Outline-2027.pdf`,
    confidence: `medium`
  })
];

export default { programs, exams };
