// Depth content for: nha-cehrs
// NHA Certified Electronic Health Records Specialist (CEHRS).
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Allied-health certification desk',
    bio: 'This guide is compiled and maintained by our allied-health desk. CEHRS exam structure, fees, eligibility and renewal terms come from the National Healthcareer Association (NHA) official pages and the NHA Candidate Handbook; pass rates come from NHA\'s published annual pass-rate reports, which are the authoritative source. Wage figures come from the BLS occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the CEHRS 100-question format, 390/500 scaled passing score, exam fee, two-year renewal with 10 CE credits, and the 2024 pass rate of 68.81% against NHA\'s official pages and published pass-rate report.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$50,250 median for medical records specialists (BLS, May 2024) — SOC 29-2072',
    summary:
      'The direct answer is that the occupation a CEHRS actually performs — medical records specialists, SOC 29-2072 — earned a median of $50,250 per year in May 2024, the most recent BLS Occupational Employment and Wage Statistics survey, and it is the correct BLS series to cite because BLS classifies by job duties rather than by certificate, and the CEHRS credential is one of several certifications that feed this occupation. That figure needs context before it is used for planning. The lowest 10 percent of medical records specialists earned less than $35,780 and the highest 10 percent more than $80,950, so the credential is an entry-and-mobility signal inside a working-class occupation rather than a wage multiplier on its own; employers pay for the certified holder partly because certification is the most common way a candidate demonstrates EHR competence without years on the job. The occupational headwind is favourable: BLS projects employment of medical records specialists to grow 7 percent from 2024 to 2034, much faster than the average for all occupations, with roughly 14,200 openings a year, most from replacement need. The growth is driven by an aging population\'s record volume, the continuing digitisation of health records, and the regulatory pressure for accurate, auditable clinical documentation. Where the CEHRS sits in that picture is worth being precise about: the credential is entry-to-mid level, focused on EHR use, HIPAA compliance, basic coding for reimbursement, and the revenue cycle, which positions a holder for roles like health information clerk, medical records coordinator, patient registrar, or a step onto an EHR implementation or health information management track. The honest caveat is that a dedicated health information management degree or an RHIT-class credential moves a career further than CEHRS alone, and the real value of the NHA credential is the speed with which it can be earned — the exam is a single 100-question sitting a trained candidate takes after weeks, not years — and the verification it gives a first EHR job.',
    rows: [
      { label: 'Median annual wage, medical records specialists', value: '$50,250', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 29-2072, $24.16/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $35,780', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $80,950', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '194,800 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~14,200 per year', note: 'BLS OOH Job Outlook, 2024-34 — mostly replacement need' }
    ],
    growth: '7% projected change 2024-34 (much faster than average) with ~14,200 openings a year; growth is driven by record digitisation, an aging population, and regulatory demands for auditable documentation',
    source: {
      label: 'BLS Occupational Outlook Handbook — Medical Records Specialists',
      url: 'https://www.bls.gov/ooh/healthcare/medical-records-and-health-information-technicians.htm'
    }
  },

  passRate: {
    headline: '68.8% of CEHRS candidates passed in 2024 — NHA publishes annual pass rates, and the passing score is 390 on a 200-500 scale',
    summary:
      'The direct answer is that NHA\'s published pass-rate report shows 68.81 percent of the 1,834 CEHRS examinations administered in 2024 resulted in a passing score, and 65.18 percent of 1,746 in 2023 — the credential is close to a two-in-three pass, notably lower than the flagship clinical-assistant credentials on the same board (CCMA passed at 81.38 percent and CPT at 75.96 percent in 2024). That difference matters because it reflects the exam\'s content, not its difficulty as a trick: the CEHRS sits in a smaller candidate pool and leans harder on regulatory compliance, basic coding, and revenue-cycle concepts that a purely clerical background does not teach. NHA also publishes the scoring model, which is more useful than the rate: every NHA exam is scored on a scaled 200-to-500 scale and the passing score is 390, which is not a percentage of items correct — the raw-to-scaled conversion is set psychometrically so that equivalent ability passes regardless of which form of the test you draw. The exam is 100 questions (the official NHA description says a 100-question exam) with a 2-hour time limit, delivered at PSI testing centres or through live remote proctoring, with no scheduled break, and results are posted to your NHA account within about two days of scoring. There is no penalty for wrong answers, so the practical advice is to answer every item. The retake policy is published and lenient at the first two failures — a 30-day wait after the first and second failed attempts, and a 12-month wait after a third — with the full exam fee due each time. Read those two numbers together: a roughly 69 percent pass rate and a 390 cut on a 200-500 scale mean a well-prepared candidate should treat the exam as demanding but winnable, and a failing candidate has a defined, fee-bounded path back.',
    source: {
      label: 'NHA 2024 Annual Pass Rates report',
      url: 'https://www.nhanow.com/docs/default-source/annual-pass-rates/nha-annual-pass-rates.pdf'
    },
    caveat: 'NHA publishes annual pass rates and the 390/500 scaled passing score for all its exams. The 2024 CEHRS pass rate is 68.81% (1,834 administrations); the 2023 figure was 65.18%. NHA\'s official description of the exam is 100 questions.'
  },

  studyPlan: {
    summary:
      'Plan four to eight weeks at 5 to 10 hours a week for the CEHRS, and start from the premise that the exam rewards the language of regulation and reimbursement as much as EHR mechanics — HIPAA terms, ICD-10 and CPT basics, and the revenue cycle are where candidates who trained only on software screens lose points. The exam is 100 questions in 2 hours, scored on a 200-500 scale with a 390 passing standard, delivered at PSI centres or by live remote proctoring, and built from the NHA job-task analysis that was refreshed for the exam update launched June 17, 2020, so the five content areas — intake and patient registration, clinical documentation, clinical support, the revenue cycle, and regulatory compliance — should structure your study. Begin with the NHA CEHRS Online Study Guide or the published outline, because the official materials define the actual scope, and pair it with the NHA practice test once you are halfway through the content. A practical weekly rhythm works best: two weeks on intake, registration and patient demographics; two weeks on clinical documentation, including the medical chart, SOAP notes, e-prescribing and how records flow through a visit; one week on clinical support such as referrals, lab results and immunisation records; one week on the revenue cycle — ICD-10 and CPT basics, claim submission and billing audits — which is the most commonly cited weak area; and one week on regulatory compliance, dominated by HIPAA privacy and security, HITECH, and data-security practice. Use the last two weeks for timed practice tests and gap closure on the two areas that hurt most, and spend one session drilling answer-every-question discipline, because there is no wrong-answer penalty. If your employer or school is sponsoring the exam, confirm that through your NHA account before paying the fee yourself, and note that eligibility requires a high school diploma or GED plus either an EHR training programme completed within the last five years or one year of supervised EHR work experience within the last three years (or two years within five).',
    totalHours: '40-80 hours over 4-8 weeks',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Intake, registration, and the EHR workflow',
        tasks: [
          'Study patient intake: registration, insurance verification, consent forms, and demographic collection',
          'Map how a record moves from intake through a visit to discharge — the CEHRS is a workflow exam as much as a software exam',
          'Learn the medical chart and its components, including SOAP notes and progress notes',
          'Set up your NHA account and confirm your eligibility pathway and exam sponsorship'
        ],
        hours: '5-10 hrs/week'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Clinical documentation and clinical support',
        tasks: [
          'Study documentation standards: accurate, complete and timely charting and the common errors auditors look for',
          'Cover e-prescribing, medication lists, and how controlled information flows through the EHR',
          'Study clinical support: referrals, lab results, immunisation records, and communication with physicians',
          'Start the NHA practice test to baseline your position against the 390 scaled passing score'
        ],
        hours: '5-10 hrs/week'
      },
      {
        label: 'Week 5',
        focus: 'Revenue cycle and basic coding',
        tasks: [
          'Learn the revenue cycle end to end: registration, charge capture, coding, claim submission, and billing audits',
          'Cover ICD-10 and CPT at the level the exam requires — recognition and application, not professional coder depth',
          'Drill insurance and reimbursement terminology, including the common denial reasons',
          'Practise translating a documented visit into the correct billing codes'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Week 6',
        focus: 'Regulatory compliance — HIPAA and HITECH',
        tasks: [
          'Study the HIPAA Privacy and Security Rules, the minimum necessary standard, and permitted disclosures',
          'Cover HITECH, meaningful-use concepts, and breach-notification basics',
          'Drill security practice: access controls, passwords, audit trails, and what a specialist must never do',
          'This is the highest-miss content area — give it a full week, not a long weekend'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Weeks 7-8',
        focus: 'Timed practice and gap closure',
        tasks: [
          'Take two full-length timed practice exams under the 2-hour limit',
          'Return to the outline for every missed item and re-drill that content area',
          'Sweep the revenue-cycle and compliance terminology once more — the two most common weak areas',
          'Schedule the exam at a PSI centre or via remote proctoring and rest the day before'
        ],
        hours: '6-8 hrs/week'
      }
    ],
    variants: [
      { label: 'Working in a medical office already', detail: 'Three to four weeks. Your daily work covers intake, documentation and records flow; spend the recovered time on the two areas office work under-trains — basic coding and the fine print of HIPAA compliance — and on the NHA practice test.' },
      { label: 'Coming from a general administrative background', detail: 'Eight to ten weeks at 5 hrs/week. Add two weeks on medical terminology and the basics of insurance and coding before touching the domain-specific content; the exam assumes you can read a chart and a claim.' }
    ]
  },

  prepStrategies: {
    summary:
      'The strategy that moves a CEHRS score is "study the official outline, drill the revenue cycle and compliance domains hardest, and take timed practice exams against the 390 scaled cut," because the exam tests applied workflow knowledge — HIPAA judgement, code recognition, and documentation standards — rather than EHR software buttons, and the two domains candidates most often under-prepare are the ones the pass rate suggests are hardest. The single biggest error is treating the exam like a software test and studying a specific EHR product, when NHA tests the profession, not the vendor. The pass-rate evidence points the same way: 68.81 percent of the 1,834 CEHRS candidates passed in 2024, a rate several points below the flagship clinical-assistant credentials on the same board, and the gap is best explained by content, not by trick questions — the paper leans on regulatory compliance, basic ICD-10 and CPT recognition, and revenue-cycle decisions, all of which a purely clerical or software-trained background does not teach. The study plan should therefore follow the five content domains from the current job-task analysis in a deliberate order: intake and registration first, then clinical documentation, then clinical support, then a full week on the revenue cycle, and a full week on regulatory compliance, because those last two are where the losses concentrate. The second pillar is calibration: the passing score is 390 on the NHA scaled 200-to-500 range, not a percentage a candidate can compute from a raw practice mark, so the official NHA practice test — scored on the real scale — is the only honest readiness check, and it should be taken mid-plan and again in the final week. The third pillar is the exam-day discipline the format demands: 100 questions in 2 hours with no break and no penalty for guessing means a candidate should answer everything, flag the hard items, and rehearse the full-length timing at least once, because the common failure is spending five minutes on one HIPAA scenario and then rushing the final twenty questions. The candidate who builds the plan around the domains, calibrates against the 390 cut, and rehearses the 2-hour clock is the one the 68.8 percent pass rate stops being a worry for.',
    items: [
      {
        title: 'Study the official outline and study guide, not a software manual',
        detail: 'NHA publishes the CEHRS outline and an interactive study guide built from the current job-task analysis (the exam was updated June 17, 2020). A candidate who studies a specific EHR product learns buttons; the exam tests intake, documentation, coding, compliance and revenue-cycle decisions that transfer across every system. The official outline defines exactly what can be asked.'
      },
      {
        title: 'Give regulatory compliance a full week',
        detail: 'HIPAA privacy and security, minimum necessary, permitted disclosures, and breach basics are the highest-density source of lost points, and they are the questions that feel unfamiliar to someone whose training was purely clerical. Drill the scenarios — when a disclosure is permitted, what an audit trail records, what a specialist may never do — until the rules are reflexive.'
      },
      {
        title: 'Learn basic coding as recognition, not fluency',
        detail: 'The CEHRS does not ask you to be a professional coder, but it does expect you to recognise ICD-10 and CPT categories and apply them to a documented visit for reimbursement. Learn the structure of the code sets, the common codes for the services you see daily, and how a documentation error produces a denial. This domain overlaps the revenue cycle and repays every hour.'
      },
      {
        title: 'Score the practice test against the real cut',
        detail: 'The passing score is 390 on a scaled 200-500 range, not a percentage you can compute from a practice test\'s raw marks. Use the NHA practice test as the calibration tool: it reports your readiness on the same scale, so you know whether you are above or below the line, and you can re-drill the weakest reported domains before paying the exam fee.'
      },
      {
        title: 'Answer every question and manage the 2-hour clock',
        detail: 'There is no penalty for wrong answers and no scheduled break, so a blank item is a guaranteed miss. Run at least one timed full-length session to confirm you can finish 100 items in 2 hours, and use the flag-and-return feature on the hardest compliance or coding items rather than sitting on them.'
      }
    ]
  },

  resourceComparison: {
    summary:
      'The buying decision for the CEHRS is dominated by official and near-free resources: the NHA CEHRS page, the online study guide, and the practice test define the actual scope, and the exam fee itself is the main cost. The exam runs about $117 (confirm the current figure in your NHA account, since it can vary by site and promotion), with a roughly $75-150 price band for optional study materials, and the renewal costs about $185 every two years plus 10 continuing education credits — which is a small, predictable lifetime cost that a candidate should budget for at the start, not discover after passing. The buying rule is to spend on the official practice test before anything else, because it is the only resource scored on the real 390/500 scale and therefore the only one that tells a candidate whether they are above or below the line before paying the exam fee; the online study guide is worth the money for the official scope it enforces, especially for candidates training outside an accredited programme. Textbooks such as The Electronic Health Record for the Physician\'s Office are useful supplements for documentation depth, but they are supplements — the outline and the practice test are the curriculum. Commercial flashcard apps and third-party question banks exist and can help with terminology, but their accuracy varies, their scoring does not map onto the NHA scaled scale, and none of them is the exam; the official outline stays the source of truth. NHA itself states that buying prep materials is not required to sit the exam and does not guarantee a pass, which is the right caveat: the highest-value preparation is a structured study plan against the official outline, and the practice test as the calibration point, with paid products in their proper secondary role.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NHA CEHRS exam', values: ['~$117 (confirm current fee in your NHA account)', 'PSI test centre or live remote proctoring', 'The exam itself — 100 questions, 2 hours, 390/500 to pass'] },
      { label: 'NHA CEHRS Online Study Guide', values: ['~$75-150 depending on package', 'Interactive online course', 'The official scope, built from the current job-task analysis'] },
      { label: 'NHA practice test', values: ['~$30-60 depending on bundle', 'Online, scored on the real 390/500 scale', 'Readiness calibration against the actual passing standard'] },
      { label: 'EHR textbook (e.g. The Electronic Health Record for the Physician\'s Office, Elsevier)', values: ['~$80-120', 'Print or eBook', 'Supplemental depth on documentation and workflow'] },
      { label: 'Free NHA resources and CE library', values: ['Free', 'Web pages, outlines, and renewal CE content', 'Scope-checking and post-certification renewal'] }
    ],
    footnote: 'Prices checked 2026-08 in USD and approximate; NHA exam and study-material pricing varies by package and promotion, so confirm in your NHA account before purchase. NHA states that buying prep materials is not required to sit the exam and does not guarantee a pass. We do not rank by commission.'
  },

  commonMistakes: {
    summary:
      'The mistakes that cost CEHRS candidates points cluster around three themes: studying a software product instead of the profession, under-preparing the regulatory-compliance and revenue-cycle domains, and walking into the exam without a timed rehearsal against the 390 scaled cut. The 2024 pass rate of 68.8 percent shows the exam is winnable but not trivial, and every one of these errors is exactly the kind a focused study plan removes. The software-study error is the most insidious because it feels like preparation: a candidate who learns the buttons of a specific EHR product has trained for a vendor, while the exam tests intake, documentation, coding, compliance and revenue-cycle decisions that transfer across every system, so the hours spent on product familiarity are largely wasted against the paper. The under-preparation error is the most consequential because it targets the highest-miss content: HIPAA privacy and security, HITECH, minimum necessary, permitted disclosures, and breach basics are the most commonly dropped items, and the revenue cycle — ICD-10 and CPT recognition plus the billing workflow — is the domain where clerical-trained candidates lose points, so both deserve dedicated study blocks rather than being folded into a general review. The rehearsal error is the most mechanical: 100 questions in 2 hours with no scheduled break and no penalty for guessing is a pacing test as much as a knowledge test, and a candidate who has never run the full-length timing meets the clock for the first time on the scored attempt, typically rushing the final quarter of the paper. Add the two administrative mistakes — paying the retake fee without using the domain breakdown to target the gaps, and ignoring the two-year renewal with its 10 CE credits until the certificate lapses — and the list covers most of the difference between the roughly 69 percent who pass and the third who do not. Every one of these is fixable with the official outline, the practice test, and a plan.',
    items: [
      {
        mistake: 'Studying one EHR software instead of the professional role',
        fix: 'NHA tests the profession — intake, documentation, coding, compliance and revenue-cycle decisions that apply across every EHR system — not the buttons of a specific product. Build your study around the official CEHRS outline and study guide, and treat any software familiarity as a side benefit rather than the curriculum.'
      },
      {
        mistake: 'Under-preparing regulatory compliance',
        fix: 'HIPAA privacy and security questions are among the hardest on the paper and the most commonly missed. Give compliance a dedicated study block, drill the scenario questions — when a disclosure is permitted, what the minimum-necessary standard means, what an audit trail shows — until the rules are reflexive rather than recognisable.'
      },
      {
        mistake: 'Skipping basic coding and the revenue cycle',
        fix: 'ICD-10 and CPT recognition and the billing workflow are a full content area, and office training often skips them. Learn the code-set structure, the common codes for daily services, and how documentation drives claims; this domain overlaps with compliance and repays every hour you give it.'
      },
      {
        mistake: 'Taking the exam without a timed practice run',
        fix: '100 questions in 2 hours with no break is a pacing test as much as a knowledge test. Run at least one full-length timed session and score it against the 390 scaled standard so you know where you stand; then re-drill the reported weak domains before paying the exam fee.'
      },
      {
        mistake: 'Ignoring the retake and renewal rules',
        fix: 'A failed attempt costs the full fee and a 30-day wait (12 months after a third failure), and the certification itself must be renewed every two years with 10 continuing education credits plus the renewal fee. Log the expiry date the week you pass, and bank CE credits from real work rather than scrambling in year two.'
      }
    ]
  },

  questionTypes: {
    summary:
      'The CEHRS is a computer-delivered exam of 100 questions — single-answer multiple choice, mostly scenario-based — with a 2-hour time limit, no scheduled break, no penalty for wrong answers, and a passing standard of 390 on the NHA scaled 200-to-500 range. The content is organised into five domains from the current job-task analysis: intake and patient registration; clinical documentation; clinical support; the revenue cycle; and regulatory compliance, with HIPAA and HITECH carrying heavy weight. Practically, the paper breaks into three families: direct-knowledge items on terminology, requirements, and documentation standards; application items that present a patient or record scenario and ask what a specialist should do next; and compliance-judgement items that ask whether an action, disclosure or record change is permitted — the family with the highest miss rate, because the HIPAA scenarios invert the comfortable answer and reward knowing the principle behind the rule. Because every question is equal and there is no penalty for guessing, the pacing rule is simple: answer everything, flag the hard compliance or coding items for a second pass, and keep the whole paper moving at about 72 seconds per question, which is achievable only if a candidate has rehearsed the full-length timing at least once. The five-domain structure has a diagnostic payoff that candidates underuse: the NHA score report shows performance against the exam domains, so a failing candidate can read exactly where the 390 line was lost — most often the revenue cycle and regulatory compliance — and a passing candidate knows where the first job should concentrate. The samples below are editor-written illustrations of the published styles, not live items, and the same standing note applies: study the official outline, calibrate against the practice test, and treat the 390 cut as the number that matters.',
    types: [
      { name: 'Intake and patient registration', share: 'One of the five content domains', detail: 'Patient registration, insurance verification, consent forms, and demographic collection; scenario items about what must be verified or documented at registration.' },
      { name: 'Clinical documentation', share: 'One of the five content domains', detail: 'The medical chart, SOAP notes, progress notes, e-prescribing, and documentation standards — accuracy, completeness, and the errors auditors detect.' },
      { name: 'Clinical support', share: 'One of the five content domains', detail: 'Referrals, lab results, immunisation records, and how clinical information flows between the EHR and physicians or other departments.' },
      { name: 'Revenue cycle', share: 'One of the five content domains', detail: 'Charge capture, ICD-10 and CPT recognition, claim submission, and billing audits; the domain where clerical-trained candidates most often drop points.' },
      { name: 'Regulatory compliance', share: 'One of the five content domains — carries heavy weight', detail: 'HIPAA Privacy and Security Rules, HITECH, minimum necessary, permitted disclosures, and data-security practice; the highest-miss area.' }
    ],
    samples: [
      {
        prompt: 'A certified EHR specialist receives a request for a patient\'s complete medical record from a family member who is not listed on the patient\'s authorization. The patient is an adult who is conscious and competent. What is the correct action?',
        options: [
          'A. Release the record because the family member is related to the patient',
          'B. Refuse the request and refer it to the appropriate authorization process',
          'C. Release only the recent visit notes to avoid delaying care',
          'D. Provide the record after noting the request in the chart'
        ],
        answer: 'B',
        explanation: 'Under the HIPAA Privacy Rule, a competent adult patient\'s protected health information is not released simply because a family member asks for it; the request must go through the patient\'s authorization or a permitted disclosure pathway. A assumes a relationship grants access, which the rule does not. C invents a partial-release discretion that does not exist. D is wrong because documenting the request does not make the disclosure permitted.'
      },
      {
        prompt: 'Which of the following best describes the minimum necessary standard under the HIPAA Privacy Rule?',
        options: [
          'A. Use and disclose only the minimum protected health information needed for the purpose',
          'B. Keep all patient records for the minimum time the law requires',
          'C. Share information only with the patient\'s minimum-wage staff',
          'D. Collect the minimum number of identifiers at registration'
        ],
        answer: 'A',
        explanation: 'The minimum necessary standard requires covered entities to make reasonable efforts to limit uses and disclosures of protected health information to the minimum needed to accomplish the intended purpose. B confuses it with record-retention rules, C misreads the word "necessary" as a staffing rule, and D confuses it with data-collection minimisation at intake.'
      },
      {
        prompt: 'A claim is returned as denied because the procedure code on the claim does not match the documented service in the chart. What is the most likely cause from the specialist\'s perspective?',
        options: [
          'A. The patient\'s insurance was not verified before the visit',
          'B. The documented service and the submitted CPT code disagree — a coding or documentation error',
          'C. The claim was submitted before the patient\'s deductible reset',
          'D. The physician forgot to sign the chart'
        ],
        answer: 'B',
        explanation: 'When a denied claim reflects a mismatch between the documented service and the submitted CPT code, the root cause is a coding or documentation error — the chart does not support the code, or the code does not describe the service. A refers to eligibility, C to plan benefits, and D to physician signature requirements, none of which explains a code-to-service mismatch on the claim.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      'The CEHRS is a 2-hour, 100-question computer test with a 390 passing standard on the NHA 200-500 scale, delivered either at a PSI testing centre or through live remote proctoring, and the whole session is governed by one NHA rule: no scheduled break, no personal items, and no way back after submit. At a centre, arrive 30 minutes early, present a government-issued photo ID whose name matches your NHA account exactly, and put your phone, watch, earbuds, bags and notes in the locker — you will be issued an erasable noteboard and a computer workstation, and the timer starts when you begin. For remote proctoring, the week before is the critical window: run NHA\'s system check on the exact machine you will use, clear your desk, close the door, and have your phone ready for the check-in photographs of your face, your ID and the whole room; a second monitor must be unplugged and turned away. Once the clock starts, the 100 items are single-answer multiple choice with the domains mixed, so use the flag-and-return feature on the hard compliance and coding items rather than sitting on them, and answer every question — there is no wrong-answer penalty, and a blank scores as a miss. Budget roughly 72 seconds per question and check your pace at the halfway mark; the common failure is spending five minutes on one hard HIPAA scenario and then rushing the final twenty items. Results are posted to your NHA account within about two days of scoring for online candidates, and the score report against the five domains tells you exactly where you stand. If you pass, your certification is active from that date and expires two years later, so diary the renewal immediately. If you fail, you are allowed a retake after 30 days (12 months after a third failure) at the full fee — use the domain breakdown to target the specific gaps rather than re-sitting on the same knowledge.',
    bring: [
      'Government-issued photo ID matching your NHA account name exactly',
      'Your confirmation with the test date, time and site or remote-proctoring link',
      'For remote proctoring: a phone for check-in photos, a fully cleared desk, and a private room with a door you can close',
      'For remote proctoring: the system-tested computer, webcam, microphone and stable connection you will actually use',
      'Nothing else — NHA provides the noteboard and the workstation'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers, earbuds and all electronics — locker at a centre, out of the room for remote proctoring',
      'All notes, study guides and cheat sheets — the exam is closed-book',
      'Your own paper and pens; a test centre issues an erasable noteboard and remote proctoring provides a digital whiteboard only',
      'Bags, coats, food and drink beyond what the centre or proctor permits',
      'Second monitors and any other person in the room for remote proctoring'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your NHA account name matches your ID exactly; for remote proctoring, run the system check on the exact machine you will use.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin remote check-in; photo ID, digital signature, and for remote, the room scan.' },
      { time: 'At the workstation', detail: 'Erasable noteboard issued, tutorial completed, then the timer starts: 100 questions, 2 hours, no scheduled break.' },
      { time: 'First half', detail: 'Work the direct-knowledge items briskly and flag the hard compliance and coding scenarios; check your pace at the halfway mark.' },
      { time: 'Second half', detail: 'Return to the flagged items, then sweep the remaining questions — never leave one blank, because there is no penalty for guessing.' },
      { time: 'After submit', detail: 'Results post to your NHA account within about two days; the score report shows your performance by domain for retake or career planning.' }
    ],
    rules: [
      'Passing score is 390 on the NHA scaled 200-500 range; it is not a percentage of items correct.',
      '100 questions, 2 hours, single-answer multiple choice, no scheduled break, and the timer does not stop.',
      'No penalty for wrong answers — answer every question; blanks score as misses.',
      'Government-issued photo ID matching your NHA account name exactly is required; a mismatch loses the seat.',
      'Closed-book at a centre (erasable noteboard provided) and a clean room plus digital whiteboard only for remote proctoring.',
      'Retakes: 30-day wait after the first and second failures, 12 months after a third, with the full exam fee due each time.'
    ],
    afterwards:
      'Your scaled result and pass/fail status post to your NHA account within about two days of scoring, along with a domain-level performance breakdown that is genuinely diagnostic — on a pass, use it to target your first job hunt, and on a fail, use it to re-drill the exact domains that dragged you under the 390 line before the 30-day retake window opens. On a pass you can add the CEHRS credential to your title immediately, claim the digital badge, and expect the certificate in the mail within weeks; the certification is valid for two years, renewed with 10 NHA-approved continuing education credits plus the renewal fee (about $185), and NHA\'s CE library is free to active holders, so log the expiry date now and bank credits from real work. The credential sits at the entry-to-mid level of the medical-records occupation — median $50,250 (BLS, May 2024) — and the domain report doubles as a roadmap for the next step, whether that is the health-information-management track, an RHIT-class credential, or simply a stronger first EHR role.'
  }
};

export default data;
