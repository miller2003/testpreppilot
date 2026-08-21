// Depth content for: cfe-exam
// Certified Fraud Examiner (CFE) Exam — ACFE
// Salary: BLS OOH Accountants and Auditors (SOC 13-2011), May 2024
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Accounting & forensic accounting certifications desk',
    bio: 'This guide is compiled and maintained by our accounting-and-fraud desk. The CFE Exam is administered by the Association of Certified Fraud Examiners (ACFE), and we track the section structure, question counts, the 75 percent per-section passing requirement, fees and the CPE renewal rule from the ACFE\u2019s own CFE Exam FAQs and credential pages. The ACFE does not publish an overall pass rate, and we state that plainly rather than quoting a fabricated figure. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'The four-section structure, 100 questions per section, 75 percent passing requirement, the $475 exam application fee, the $110 section retake fee and the 20-hour annual CPE rule were checked against the ACFE\u2019s CFE Exam FAQs and credential pages.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary
  salaryOutlook: {
    headline: '$81,680 median for accountants and auditors (BLS, May 2024)',
    summary:
      'The Certified Fraud Examiner is a specialization credential rather than an entry licence, so the directly relevant occupation is still Accountants and Auditors (SOC 13-2011), which paid a May 2024 median annual wage of $81,680. The distribution is what matters for a CFE candidate: the lowest 10 percent earned less than $52,780 and the highest 10 percent more than $141,420, and the median within finance and insurance industries was $87,980, the industry slice where anti-fraud and forensic roles cluster. BLS counted 1,579,800 accountants and auditors in 2024 and projects 5 percent growth from 2024 to 2034 with about 124,200 openings a year, most of them replacement need. The credential premium has to come from a different source than BLS, because BLS classifies by job duties and does not identify CFE holders in its wage data. The ACFE\u2019s own compensation research is the standard industry citation here: the Association reports that CFEs earn on the order of 34 percent more than non-certified colleagues, a figure drawn from member surveys rather than from BLS, and worth treating as directional rather than precise because survey populations differ from the full occupation. The honest planning reading is that the CFE pays through specialist positioning — internal audit, compliance, forensic accounting, investigations and litigation support roles recruit the designation as evidence of fraud expertise — and that the premium compounds with the experience requirement baked into the eligibility points system, so candidates are already mid-career when they sit. Geography and employer dominate the spread as much as the credential, with public accounting, financial services and government the heaviest employers.',
    rows: [
      { label: 'Median annual wage, accountants and auditors', value: '$81,680', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $52,780', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $141,420', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Median in finance and insurance', value: '$87,980', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'CFE wage premium (ACFE member survey)', value: '~34% over non-CFEs', note: 'ACFE compensation research — directional, not BLS data' },
      { label: 'Employment, 2024', value: '1,579,800 jobs', note: 'BLS OOH Quick Facts, 2024' }
    ],
    growth: '5% projected growth 2024-34 (faster than average), with ~124,200 openings a year; the CFE premium flows through specialist anti-fraud, compliance and forensic roles rather than through the base occupation.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Accountants and Auditors',
      url: 'https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'ACFE publishes no overall pass rate — what it publishes is the per-section passing requirement of 75%',
    summary:
      'The ACFE does not publish an overall CFE Exam pass rate, and we will not invent one: no audited national or global pass-rate series exists in the Association\u2019s public materials, and third-party estimates that circulate on prep sites are estimates, not official statistics. What the ACFE does publish, and what should drive your planning, is the criterion-referenced passing rule: you must correctly answer at least 75 percent of the questions in each of the four sections, and any unanswered question is marked incorrect. That per-section bar is higher than most professional credentials demand and it is unforgiving in one specific way — a strong performance in three sections cannot compensate for a weak fourth, because each section is scored and passed independently. In practical terms 75 percent on a 100-question section means no more than 25 questions lost, and because the pass line does not move with the cohort, a hard form and an easy form demand the same underlying competence. The structure that produces this is worth understanding: the exam is delivered by Prometric, in person or remotely proctored, as four separate two-hour sections of 100 multiple-choice and true/false questions, and the sections can be taken one at a time, which means most candidates sit them sequentially and can retake a single failed section rather than the whole exam. Retakes cost $110 per failed section and are subject to a waiting period. The practical implication of the missing pass rate is that you should not calibrate your preparation to any headline number: the only figure that decides a pass is your own per-section 75 percent, which is why practice scoring should be tracked section by section.',
    source: {
      label: 'ACFE — CFE Exam FAQs',
      url: 'https://testsc.acfe.com/cfe-credential/about-the-cfe-exam/cfe-exam-faqs'
    },
    caveat:
      'The ACFE publishes no overall CFE Exam pass rate. Third-party estimates of first-attempt pass rates cluster around 60-75 percent but are not official and should not be treated as such. What is official and verifiable is the criterion-referenced 75 percent passing requirement for each of the four sections, with unanswered questions marked incorrect.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'A realistic CFE Exam preparation cycle is ten to fourteen weeks at eight to ten hours a week, roughly 100-140 total hours, studied one section at a time rather than all four at once. The ACFE itself recommends on the order of 150 hours of preparation, and its own guidance is to prepare for and schedule each section separately, because the breadth across the four sections — Financial Transactions and Fraud Schemes, Law, Investigation, and Fraud Prevention and Deterrence — is too wide to hold in active memory simultaneously. The section order most candidates follow is financial transactions first when they come from an accounting background, and investigation first when they come from a law enforcement or security background, then the sections they expect to be hardest, with Fraud Prevention and Deterrence commonly last because it is the most conceptual. Each section is 100 questions in two hours, which is roughly 72 seconds per question, and the pass bar is 75 percent per section, so the pacing skill is the same as the pacing skill on the exam itself: answer, flag, return, and never leave an item blank because unanswered questions are marked incorrect. The schedule below runs eleven weeks and assumes one section per two-week block with a final integrated week, and it front-loads a diagnostic pass on the Financial Transactions section, which is where candidates with legal or investigative backgrounds typically underestimate the accounting content. Because the sections can be retaken individually at $110 each, a failed section is a setback rather than a reset, but the plan treats every section as first-attempt-serious because the waiting period between attempts costs calendar time.',
    totalHours: '100-140 hours over 10-14 weeks',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Eligibility check and diagnostic',
        tasks: [
          'Confirm you meet the ACFE eligibility points requirement and are an ACFE member in good standing',
          'Submit the CFE Exam application and supporting documentation — the approval process takes business days, so start early',
          'Take the ACFE diagnostic practice set once, untimed, across all four sections to rank your starting position',
          'Download the current CFE Exam Content Outline and map it to your study materials'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Section 1 — Financial Transactions and Fraud Schemes',
        tasks: [
          'Accounting fundamentals: the accounting equation, journal entries, the financial statements and how fraud distorts them',
          'Fraud schemes: asset misappropriation, corruption, and financial statement fraud, with the red flags for each',
          'Work the Fraud Examiners Manual chapters on financial transactions and schemes',
          'One timed 100-question practice set at the two-hour pace, scored against the 75 percent bar'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Weeks 4-5',
        focus: 'Section 2 — Law',
        tasks: [
          'The legal environment of fraud examination: civil versus criminal law, the rules of evidence, and legal privilege',
          'Key statutes and regulations relevant to fraud, including U.S. federal fraud statutes and whistleblower protections',
          'Trial procedure, testimony and expert witness roles',
          'Drill the statute and definition questions — this section rewards exact recall'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Week 6',
        focus: 'Section 1 exam window and Section 3 start',
        tasks: [
          'Take Section 1 as soon as you clear the 75 percent bar twice in practice — the application is time-limited',
          'Begin Section 3 — Investigation: interview skills, evidence gathering and preservation, and digital forensics',
          'Start building your interview question bank from the manual\u2019s model questions',
          'If Section 1 passed, close it out and move on; if not, book the $110 retake after the wait and repair the miss list'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Weeks 7-8',
        focus: 'Section 3 — Investigation, continued',
        tasks: [
          'Documentation and evidence: chain of custody, collecting and analysing documents and electronic evidence',
          'Fraud interviews and interrogation techniques, including planning interviews and evaluating deception',
          'Writing investigation reports and tracing illicit transactions',
          'One timed 100-question Investigation set at the two-hour pace'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Weeks 9-10',
        focus: 'Section 4 — Fraud Prevention and Deterrence',
        tasks: [
          'Why fraud occurs: the fraud triangle, criminological theories and organisational culture',
          'Fraud risk assessment, internal controls and the COSO framework, and designing anti-fraud programs',
          'Corporate governance, the audit committee, and the role of management in fraud prevention',
          'This is the most conceptual section — work the theory questions twice, because they reward understanding over recall'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Week 11',
        focus: 'Remaining sections and gap closing',
        tasks: [
          'Take the remaining sections as you clear their 75 percent bars in timed practice',
          'Re-lab every miss to a section and an error type',
          'Re-drill the exact-recall Law material and the Financial Transactions mechanics',
          'Confirm your Prometric appointments, remote-proctoring setup if applicable, and photo ID'
        ],
        hours: '10-12 hrs'
      }
    ],
    variants: [
      { label: 'Accountant or auditor with strong financial background', detail: 'Eight to ten weeks. Your work covers the Financial Transactions section; put the recovered time into Law and Fraud Prevention and Deterrence, which are the two sections accounting candidates historically underestimate.' },
      { label: 'Law enforcement or investigations background', detail: 'Twelve to fourteen weeks. The Investigation section is largely familiar; the Financial Transactions and Fraud Schemes section is the risk, because the accounting mechanics reward exact recall rather than experience.' },
      { label: 'Full-time working professional', detail: 'Fourteen to sixteen weeks at 6-8 hrs/week. Stretch the section blocks and add a review week after Section 1, because the sequential structure of the CFE rewards finishing what you start rather than studying all four in parallel.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The CFE Exam is unusual in one structural way that should shape the whole preparation: it is four separate, independently scored sections of 100 questions each with a 75 percent passing bar per section, so the exam cannot be passed on overall strength — a weak Law section fails you even if the other three are strong. That makes section-by-section preparation with per-section readiness checks the core strategy, and it makes the Fraud Examiners Manual the anchor resource, because the ACFE states that the manual is the source of the content tested and every exam question is derived from it. The second structural fact is the format: multiple-choice and true/false questions at roughly 72 seconds each, with unanswered questions marked incorrect, so the pacing discipline is to answer everything and to train with timed 100-question sets at the real two-hour pace. The third is the sequencing advantage the ACFE deliberately grants: sections may be taken in any order and retaken individually, so the preparation can be calibrated to a candidate\u2019s background instead of forced through a fixed order. A fourth practical constraint is that the exam is offered only in English, so non-native speakers should add time for the legal and technical vocabulary of the Law section in particular, where exact-recall wording carries most of the weight. The strategies below are ordered by score impact, and the first two — master the manual and prepare per section against the 75 percent bar — are the difference between a passing plan and a series of $110 retakes.',
    items: [
      {
        title: 'Make the Fraud Examiners Manual the spine of your study',
        detail: 'The ACFE says plainly that the manual, at more than 2,000 pages, is the source of all content tested on the exam. That means the fastest preparation is reading and actively drilling the manual\u2019s chapters in the order of the four sections, rather than jumping between third-party summaries. Use the ACFE\u2019s official prep course questions and the manual\u2019s end-of-chapter questions as the primary practice bank, and treat any third-party bank as supplementary volume only.'
      },
      {
        title: 'Prepare and score section by section, not as one exam',
        detail: 'Because each section is scored independently against a 75 percent bar, the only meaningful readiness check is a per-section timed set that clears 75 percent twice in a row. Do not average your four practice scores into one number — an average above 75 percent can still hide one failing section. Track every miss to its section and re-drill that section before booking the appointment.'
      },
      {
        title: 'Never leave a question unanswered',
        detail: 'Unanswered questions are marked incorrect, and there is no penalty for a wrong answer, so a blank response is the one answer you cannot afford. The pacing rule of thumb is 72 seconds per question: answer confidently, flag genuine uncertainties, return to flags at the end, and if time is running out, fill every remaining bubble with a considered guess rather than leaving it blank.'
      },
      {
        title: 'Match your section order to your background',
        detail: 'The ACFE allows the sections to be taken in any order, and most candidates sit them sequentially. Accountants should front-load the Financial Transactions section while the mechanics are warm and then attack Law, the section they historically underestimate. Investigators and legal professionals should invert the order and spend their strongest first sitting on their weakest section, because confidence carries the first exam and the calendar cost of a failed section is the same either way.'
      },
      {
        title: 'Use the eligibility window and the retake rule deliberately',
        detail: 'The CFE Exam application is reviewed before you can schedule, and retakes cost $110 per failed section with a waiting period, so the planning discipline is to book each section only when it has cleared the 75 percent bar twice in timed practice. A narrow practice fail is a signal to repair and retest, not to sit and hope the real form is easier — the real form will not be.'
      },
      {
        title: 'Drill the Law section for exact recall',
        detail: 'The Law section rewards precision: definitions, the elements of fraud statutes, rules of evidence, and the difference between civil and criminal procedures. This is the section where third-party summaries drift most from the manual, so drill it directly from the manual\u2019s language and build flashcards for the statute elements that the questions test word-for-word.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'CFE Exam prep is anchored by the ACFE\u2019s own materials because the Association states that the Fraud Examiners Manual is the source of all content tested, which means the manual and the official prep course are the closest thing to a guaranteed-content resource, while third-party products are supplementary volume with no access to real item content. The buying decision therefore differs from vendor-neutral exams: you can skip the official materials and still study the right topics, but you cannot replace the manual\u2019s authoritative treatment of the Law and Investigation sections with a condensed third-party summary without risking the exact-recall items. The official options range from the manual alone, which is the most economical route for an experienced accountant and is often included with membership at no extra cost, to the full CFE Exam Prep Course, which bundles lessons, review questions, flashcards and progress tracking at a substantially higher price. In-person review courses exist too and add structure and accountability for candidates who stall on self-study, at a price that commonly rivals the exam fees and prep course combined. The exam itself is the other budget line: the CFE Exam application fee is currently $475, which covers your first attempt at each section, with retakes at $110 per failed section, and ACFE membership is required to sit, so factor the annual membership into the total. Prices below are list prices as of 2026-08 in USD before tax and promotions, and the ACFE updates fees periodically, so confirm the current numbers on the ACFE store and CFE Exam FAQs before buying.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CFE Exam application fee', values: ['$475 (covers first attempt at each section)', 'Online application plus documentation review', 'Required — budget four sections plus $110 retakes' ] },
      { label: 'Fraud Examiners Manual', values: ['Included with membership or ~$300-400 standalone', '2,000+ page reference, print and online', 'The ACFE-declared source of all tested content — the anchor resource' ] },
      { label: 'CFE Exam Prep Course (self-paced online)', values: ['~$700-900 with materials', 'Online lessons, review questions, flashcards, progress tracking', 'Candidates who want the official guided path end to end' ] },
      { label: 'CFE Exam Review Course (instructor-led)', values: ['~$1,200-1,800', '3-4 day live or virtual classroom', 'Accountability and structured pacing for career changers' ] },
      { label: 'ACFE sample questions and practice sets', values: ['Often included with membership or prep', 'Online practice keyed to the exam', 'The per-section 75 percent readiness check' ] },
      { label: 'Third-party CFE question banks', values: ['~$50-200', 'Supplementary practice volume', 'Extra drilling after the official bank is exhausted' ] },
      { label: 'Your own section miss lists', values: ['Free', 'Personal notes keyed to the four sections', 'Targeted repair before each section appointment' ] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax and promotions; ACFE membership is required to sit the exam and to access member discounts on the prep products. Retakes cost $110 per failed section plus any waiting-period time. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The CFE Exam failure modes cluster around two structural features that candidates routinely underestimate: the exam is four independently scored sections with a 75 percent bar on each, so overall strength cannot rescue a weak section, and it is an open-topic breadth exam with no published pass rate, so there is no headline number to calibrate against and the only meaningful benchmark is your own per-section practice scores. A third feature compounds the first two: because the pass line is a fixed 75 percent per section rather than a curve, candidates who are strong in three sections and marginal in the fourth fail the fourth and pay a $110 retake plus a waiting period, which is the most common expensive surprise in the process. The six traps below are the recurring ones in candidate post-mortems and in the ACFE\u2019s own prep guidance, and every one of them is fixable within a single prep cycle. Notice that most of the traps are process errors rather than knowledge gaps — studying all four sections in parallel, scoring practice as a blended average, leaving questions blank, booking sections against an application window that has not been approved — which is encouraging, because process errors respond to a changed plan rather than to more hours. A candidate who prepares one section at a time, clears the 75 percent bar twice before booking, answers every question, and studies the Law section for exact recall from the manual has removed the five most common failure causes before the first appointment.',
    items: [
      {
        mistake: 'Studying all four sections at once',
        fix: 'The breadth across Financial Transactions, Law, Investigation and Fraud Prevention and Deterrence is too wide to hold in active memory, and the ACFE itself recommends preparing for and scheduling sections separately. Study one section, clear its 75 percent bar twice in timed practice, book and take it, then move to the next — the sequential structure is a feature, not a hurdle.'
      },
      {
        mistake: 'Scoring practice as one blended average',
        fix: 'Each section is scored independently against 75 percent, so a blended average can look healthy while one section sits below the bar. Track every practice miss by section and do not book a section until it has passed twice at the two-hour pace. The only number that decides a pass is the per-section percentage.'
      },
      {
        mistake: 'Leaving questions unanswered',
        fix: 'Unanswered questions are marked incorrect and there is no penalty for a wrong answer, so a blank response is strictly worse than a guess. At the 72-second-per-question pace, the discipline is to answer everything, flag genuine uncertainties, return to flags, and fill every remaining item before the clock ends.'
      },
      {
        mistake: 'Relying on third-party summaries for the Law section',
        fix: 'The Law section rewards exact recall of statute elements and legal definitions, and condensed third-party summaries drift from the manual\u2019s authoritative language. Drill the Law section directly from the Fraud Examiners Manual and build flashcards for the exact definitions and elements that the questions test word-for-word.'
      },
      {
        mistake: 'Booking appointments before the application clears',
        fix: 'The CFE Exam application is reviewed before you can schedule, the approval takes business days, and each registration is time-limited once active. Submit the application and documentation early, and book each section only when it clears the 75 percent bar in practice — otherwise you can pay for an appointment you are not ready for or that lands inside an unapproved window.'
      },
      {
        mistake: 'Ignoring the retake cost and waiting period in the plan',
        fix: 'A failed section costs $110 to retake plus a waiting period, and the sections can be retaken individually, which is forgiving compared with a whole-exam retake — but only if you use the wait to repair the one section rather than re-sitting on the same knowledge. Treat the first attempt at each section as serious, and treat a narrow practice fail as a signal to repair, not to hope.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The CFE Exam is four separate sections of 100 multiple-choice and true/false questions each, delivered by Prometric in person or remotely proctored, with two hours per section and a 75 percent passing requirement on each section, scored against the fraud examination body of knowledge in the Fraud Examiners Manual. The sections are Financial Transactions and Fraud Schemes, Law, Investigation, and Fraud Prevention and Deterrence, and they can be taken in any order and retaken individually. The item mix is direct-answer questions that test definitions, statute elements and accounting mechanics, plus scenario questions that present a fraud situation and ask for the correct judgment — the correct scheme, the right evidence-handling step, the legally permissible interview tactic. The format limits what the exam can do: true/false items are exact-recall checks, while the multiple-choice items carry the application weight, and there is no constructed response, so the whole paper is scored by machine and there is no essay section to compensate for weak recall. Because the pass bar is 75 percent per section and unanswered questions are marked incorrect, the tactical discipline is the same on every section: answer everything, flag genuine uncertainties, and use the final minutes to review flags. The scenario items reward the judgment that comes from studying the manual\u2019s case examples, which is why active practice with the official review questions outperforms passive reading. The exam is offered only in English, so candidates whose first language is not English should budget extra time for the legal vocabulary of the Law section, where exact wording carries most of the weight. The samples below are editor-written illustrations of the item style, not live items.',
    types: [
      { name: 'Direct-answer multiple choice', share: 'The majority of items across all four sections', detail: 'Definitions, statute elements, accounting mechanics and procedural rules. Exact-recall items concentrate in the Law section and in the scheme names in Financial Transactions.' },
      { name: 'Scenario-based judgment items', share: 'Heaviest in Investigation and Fraud Prevention', detail: 'A described fraud situation asking for the correct scheme classification, the right evidence step, or the proper investigative or prevention response.' },
      { name: 'True/false items', share: 'A meaningful minority', detail: 'Exact-recall checks that reward reading the manual\u2019s precise language — the wording of a false statement is usually a near-miss of a true one.' }
    ],
    samples: [
      {
        prompt: 'An employee who has check-signing authority issues a company check to a shell vendor the employee controls and then posts the payment to a legitimate vendor\u2019s account. This scheme is best classified as which type of fraud?',
        options: [
          'A. Billing scheme',
          'B. Check tampering',
          'C. Payroll scheme',
          'D. Expense reimbursement scheme'
        ],
        answer: 'B',
        explanation: 'The scheme is check tampering (B): the employee misuses legitimate check-signing authority to issue checks for a fraudulent purpose, here payable to a controlled shell vendor, and then conceals it in the accounting records. A billing scheme (A) involves generating false invoices to induce payment, whereas here the employee signs the check directly rather than submitting an invoice through a payables process. A payroll scheme (C) would add ghost employees or inflate hours, and an expense reimbursement scheme (D) would involve false employee expense claims. The item tests the classification distinctions that the Financial Transactions and Fraud Schemes section is built around.'
      },
      {
        prompt: 'During a fraud examination, an interviewer is planning a conversation with a suspect who is not cooperating. Which approach is most consistent with accepted fraud interviewing practice?',
        options: [
          'A. Begin the interview with an accusation and demand an admission',
          'B. Build rapport, allow the suspect to talk, and look for rationalization statements before moving toward the admission question',
          'C. Offer a reduced penalty in exchange for an immediate confession',
          'D. Threaten criminal referral unless the suspect signs a statement'
        ],
        answer: 'B',
        explanation: 'Accepted fraud interviewing practice builds rapport and lets the subject talk, then uses the subject\u2019s own rationalizations as the lever toward the direct admission question (B). Opening with an accusation (A) generally hardens the subject and produces a denial. Offering a deal in exchange for a confession (C) and threatening referral to coerce a signature (D) both violate the ethical and legal constraints on fraud interviews — interviewers cannot offer benefits or threats outside their authority, and coerced statements are both unreliable and legally unusable. The item tests the investigation-methods content of the Investigation section.'
      },
      {
        prompt: 'Which of the following is the most important reason a fraud risk assessment is considered a cornerstone of an anti-fraud program?',
        options: [
          'A. It satisfies the annual reporting requirement for all public companies',
          'B. It forces the organization to match its specific fraud risks with designed controls, so prevention resources are directed where exposure is real',
          'C. It transfers fraud risk to the external auditor',
          'D. It eliminates the fraud triangle by removing opportunity entirely'
        ],
        answer: 'B',
        explanation: 'A fraud risk assessment works because it links the organization\u2019s specific fraud risks to the controls designed to mitigate them, so prevention resources are allocated against real exposure rather than generic checklists (B). It is not a universal statutory filing (A) — the requirement to assess internal control over financial reporting applies to many but not all companies and is not a fraud-assessment filing per se. It does not transfer risk to the auditor (C), who evaluates controls but does not own the organization\u2019s fraud risk. And no assessment eliminates the fraud triangle (D): it reduces opportunity through controls, but pressure and rationalization remain management concerns. The item tests the prevention-and-deterrence reasoning that anchors the fourth section.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'A CFE Exam appointment is one section at a time: 100 multiple-choice and true/false questions in two hours, delivered by Prometric either at a testing centre or remotely with live proctoring, with a 75 percent passing requirement on that section and a separate appointment for each of the four. Because the sections are taken individually, exam day is lighter than most certification day-of experiences, but two administrative details decide whether you sit at all. First, the name on your government-issued photo ID must match your ACFE records exactly — a mismatch cannot be fixed at check-in. Second, for remote testing the room and machine requirements are strict: a private room with a door, a clean desk, a working webcam and microphone, and a device that passes the proctor\u2019s system check, with a room scan before the session starts. At a testing centre, personal items go into a locker and the centre supplies scratch material; remotely, no notes or devices beyond the testing device are permitted. Inside the exam the two-hour clock runs continuously with no scheduled break, and because unanswered questions are marked incorrect and there is no penalty for guessing, the pacing plan is to answer every item, flag genuine uncertainties, and reserve the final minutes for flagged items rather than re-reading everything. When you submit, the section ends and results are reported through the ACFE certification portal; whether a result is immediate or posted after review depends on the delivery mode, so plan around the portal rather than assuming an on-screen score.',
    bring: [
      'One valid, unexpired, government-issued photo ID with your name matching your ACFE records exactly',
      'Your appointment confirmation and ACFE eligibility ID',
      'For remote testing: a private room, a clean desk, and a webcam and microphone already tested on the machine you will use',
      'Any permitted testing materials per the current ACFE Candidate Handbook'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker storage at a centre, out of the room remotely',
      'All notes, books and printed materials — the exam is closed-book and closed-notes',
      'Bags, coats, food and drink beyond what the centre permits',
      'Any other person in the room for remote testing; the session is recorded'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your ACFE records match your ID exactly, verify the appointment and, for remote testing, run the system check on the same machine and network you will use.' },
      { time: '30 minutes before', detail: 'Arrive at the Prometric centre or begin the remote check-in, which includes photo and ID capture and, remotely, a room scan.' },
      { time: 'Check-in', detail: 'Identity verification and, remotely, the proctor\u2019s environment check. At a centre, personal items go into a locker.' },
      { time: '0-60 minutes', detail: 'Work the first half of the 100-question section at roughly 72 seconds per item: answer everything, flag genuine uncertainties.' },
      { time: '60-115 minutes', detail: 'Continue through the second half at the same tempo; re-read scenario stems carefully in the final stretch.' },
      { time: 'Final 5 minutes', detail: 'Review flagged items only, fill every remaining answer, then submit rather than letting the clock expire.' },
      { time: 'After submission', detail: 'The section ends and your result is reported through the ACFE certification portal; check the portal for the official score and the next section\u2019s booking.' }
    ],
    rules: [
      'One section per appointment: 100 questions, two hours, closed-book and closed-notes.',
      'Passing requires at least 75% correct on the section; unanswered questions are marked incorrect.',
      'One valid government-issued photo ID required, name matching your ACFE records.',
      'No scheduled break in the two-hour session; the clock does not stop if you leave.',
      'Remote sessions require a private room, a room scan, and a recorded session; no other person may be present.',
      'A failed section can be retaken individually at $110 per retake after the waiting period.',
      'Computer-delivered by Prometric in person or with live remote proctoring.'
    ],
    afterwards:
      'Your result is reported through the ACFE certification portal, and because the sections are independent, a pass closes that section and moves you to the next appointment — most candidates complete the four sections over a period of weeks rather than in one sitting. On completing all four at 75 percent or better, the ACFE\u2019s Certification Committee reviews your application and proctored sessions, and when approved you are awarded the CFE designation. Maintain it with 20 hours of continuing professional education in every 12-month period plus annual membership dues; the credential does not expire on a fixed cycle, but it lapses if the CPE and dues requirements are not met, so set the anniversary in your calendar the week you are certified. On a section fail, the path is mechanical and cheap relative to most exams: wait the waiting period, spend it repairing exactly the content the score report points to, and retake only that section for $110 — the structure of the CFE means a failed section is a setback, not a restart, which is precisely why the per-section 75 percent bar exists and why section-by-section preparation is the strategy that converts that structure into an advantage.'
  }
};

export default data;
