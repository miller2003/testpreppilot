// Depth content for: cia-part-1
// CIA Part 1: Essentials of Internal Auditing / Internal Audit Fundamentals
// Salary: BLS OOH Accountants and Auditors (SOC 13-2011), May 2024
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Accounting & internal audit certifications desk',
    bio: 'This guide is compiled and maintained by our accounting-and-audit desk. The CIA exam is administered by The Institute of Internal Auditors (IIA), and we track question counts, timing, fees, scoring and renewal from the IIA\u2019s own certification pages, including the 2025 syllabus revision that aligned the exam with the new Global Internal Audit Standards. We state plainly where a figure is published and where it is an industry estimate. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam structure, question counts, fees, the 600/750 passing score, the 30-day retake rule and the three-year program window were checked against the IIA\u2019s current CIA certification pages and the 2025 CIA syllabus.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary
  salaryOutlook: {
    headline: '$81,680 median for accountants and auditors (BLS, May 2024)',
    summary:
      'Passing CIA Part 1 does not by itself move a salary line: it is the first of three parts a candidate must clear for the Certified Internal Auditor designation, and that designation is what gates advancement into professional internal audit roles. The relevant wage benchmark is therefore the Bureau of Labor Statistics occupation Accountants and Auditors (SOC 13-2011), which paid a May 2024 median annual wage of $81,680. The distribution matters more than the headline: the lowest 10 percent earned less than $52,780 and the highest 10 percent more than $141,420, and the median within finance and insurance industries was $87,980, which is where many internal audit shops sit. The occupation employed 1,579,800 people in 2024, and BLS projects 5 percent growth from 2024 to 2034 with about 124,200 openings a year, most of them replacement need. For a CIA candidate the honest reading is that Part 1 is a toll gate on an already-solid accounting career rather than a pay lever on its own: BLS positions internal auditing as one pathway within the accounting occupation, but it does not single out CIAs, and no certification-specific wage is published in the OOH. The IIA and ACFE conduct their own member surveys that report certification premiums, and those are the right source for a credential premium, but we have not quoted a figure from them here because the survey populations and methodologies differ from BLS and the numbers are not directly comparable. The practical planning implication is that the credential pays through promotion into specialist audit, risk and compliance roles over time, and that pay follows the three-part completion rather than any single part, so candidates should budget Part 1 as the entry cost of a larger career step.',
    rows: [
      { label: 'Median annual wage, accountants and auditors', value: '$81,680', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $52,780', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $141,420', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Median in finance and insurance', value: '$87,980', note: 'BLS OOH Pay tab, May 2024 — top industry for this occupation' },
      { label: 'Employment, 2024', value: '1,579,800 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~124,200 per year', note: 'BLS OOH Job Outlook, 2024-34 — mostly replacement need' }
    ],
    growth: '5% projected growth 2024-34 (faster than average), with ~124,200 openings a year; the CIA pays through promotion into specialist audit, risk and compliance roles rather than as a standalone salary bump.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Accountants and Auditors',
      url: 'https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'IIA-reported global pass rate for Part 1 is roughly 44% — the lowest of the three CIA parts — with a scaled 600 of 750 as the pass line',
    summary:
      'The IIA reports a global pass rate for CIA Part 1 of roughly 44 percent in recent published figures, which makes it the lowest of the three exam parts, and the pass line is a scaled score of 600 on a 250-750 scale. The number needs careful framing: it is a reported global pass rate across all languages and administrations, it is updated periodically rather than annually for every market, and it measures all candidates rather than only well-prepared ones, so a candidate who follows a structured syllabus should expect to do materially better than the headline. The second part of the picture is the scoring model. Part 1 is 125 multiple-choice questions in 150 minutes, and your raw count of correct answers is converted to the 250-750 scale through a standard-setting process, which means 600 is not a percentage of items correct and cannot be reverse-engineered into one; the number of correct items required varies by the difficulty of the form you draw. The exam is non-disclosed, so no live items are published and prep products work from IIA-published sample questions and retired practice items. Two operational rules matter for planning. A registration for an exam part is valid for 180 days, and if you fail you must wait 30 days before retaking, with no limit on the number of attempts. Since the April 2026 policy change, candidates receive one official result within roughly three weeks of sitting, and the old instant on-screen score report no longer appears. Read the 44 percent as the reason to prepare seriously rather than as a forecast of your own odds, and treat the scaled 600 as the only number that actually decides a pass.',
    source: {
      label: 'The IIA — Certified Internal Auditor certification pages',
      url: 'https://www.theiia.org/en/certifications/cia/'
    },
    caveat:
      'The ~44% figure is the IIA-reported global pass rate for Part 1, which is updated periodically and can shift; we have not found a single audited national pass-rate series. What is fixed and verifiable is the 600/750 scaled pass line, the 125-question/150-minute format and the 30-day retake wait. Confirm the current reported rate on theiia.org before relying on it.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'A realistic CIA Part 1 preparation cycle is ten to twelve weeks at eight to ten hours a week, roughly 90-110 total hours, and the single most important fact to establish before buying anything is which syllabus you are preparing for. The IIA released a revised CIA syllabus on 28 May 2025, renamed Part 1 from Essentials of Internal Auditing to Internal Audit Fundamentals, and re-mapped the content onto the Global Internal Audit Standards (GIAS), which replaced the legacy International Professional Practices Framework (IPPF) on 9 January 2025. Any study book printed before that change is built on the old six-topic structure and the old Standards, and a candidate who studies from it will be tested against the wrong framework. The current Part 1 blueprint has four domains: Foundations of Internal Auditing at 35 percent, Governance, Risk Management, and Control at 30 percent, Ethics and Professionalism at 20 percent, and Fraud Risks at 15 percent. Notice that governance, risk and control plus foundations together are nearly two-thirds of the paper, and that fraud risk is a named domain rather than a topic buried inside another. The schedule below assumes you have some exposure to audit or accounting concepts, which the IIA\u2019s eligibility requirements largely assume, and it front-loads the two heavy domains before touching ethics and fraud. Because the exam is non-disclosed, your practice loop is the IIA\u2019s own sample and practice questions plus a current-syllabus course, and the final weeks should be timed 125-question sets at the real 150-minute pace, because stamina and pacing are where Part 1 candidates lose most points.',
    totalHours: '90-110 hours over 10-12 weeks',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Syllabus check and the GIAS baseline',
        tasks: [
          'Download the official 2025 CIA Part 1 syllabus and confirm your prep materials are GIAS-based, not IPPF-based',
          'Read the Global Internal Audit Standards structure: five domains, fifteen principles, fifty-two standards, plus the Implementation Guidance',
          'Take the IIA sample questions once, untimed, to see the item style',
          'Confirm your application is approved in the CCMS and your registration window is open'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Weeks 2-4',
        focus: 'Domain 1 — Foundations of Internal Auditing (35%)',
        tasks: [
          'Internal audit mandate, purpose, authority and responsibility, and the difference between assurance and advisory services',
          'The IIA Mission, core principles of the professional practice of internal auditing, and the Code of Ethics',
          'The structure of the Standards and when mandatory guidance versus recommended guidance applies',
          'Quality assurance and improvement programme: internal and external assessments, their frequency and who may conduct them'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Weeks 5-7',
        focus: 'Domain 3 — Governance, Risk Management, and Control (30%)',
        tasks: [
          'Governance frameworks, the three lines model, and the relationship between the board, senior management and internal audit',
          'Risk management: risk appetite, risk assessment processes, and COSO ERM concepts',
          'Internal control: the COSO internal control framework, control types, and evaluating control design and operation',
          'Build answer banks for the scenario questions — this domain is where most scenario items are drawn from'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Week 8',
        focus: 'Domain 2 — Ethics and Professionalism (20%)',
        tasks: [
          'The Code of Ethics: the four principles and the rules of conduct, plus how violations are reported and resolved',
          'Independence and objectivity: impairments, safeguards, and prohibited conditions such as operating a control',
          'Due professional care, competence and continuing professional development',
          'Work through every ethics scenario in your question bank twice — the distractors are subtle'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Week 9',
        focus: 'Domain 4 — Fraud Risks (15%)',
        tasks: [
          'Fraud triangle and fraud schemes: asset misappropriation, corruption and financial statement fraud',
          'Red flags and fraud risk assessment, and the internal auditor\u2019s role versus management\u2019s role in fraud',
          'The relationship between the fraud risk domain and the Standards on consulting services',
          'Drill the smaller, higher-density domain so it does not leak points on exam day'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Week 10',
        focus: 'Timed sets and gap closing',
        tasks: [
          'Two timed 125-question sets at 150 minutes each, under exam conditions with no notes',
          'Re-lab every miss to a domain and an error type — recall failure, scenario misread, or rule confusion',
          'Re-drill the two heaviest domains from your miss list',
          'Confirm the retake policy and the 180-day registration window you are working inside'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Week 11',
        focus: 'Scenario rehearsal',
        tasks: [
          'Do nothing but scenario-based items: independence conflicts, control evaluation, assurance versus consulting',
          'Write one-line rationales for every answer you get wrong',
          'Re-read the Code of Ethics rules of conduct one final time — ethics items are cheap points',
          'One full timed set as a final readiness check'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Week 12',
        focus: 'Taper and logistics',
        tasks: [
          'Light review of your answer bank and the GIAS domain structure',
          'Confirm your Pearson VUE appointment, the test centre location and your photo ID',
          'Check your name in the CCMS matches your ID exactly',
          'One quiet day before the exam'
        ],
        hours: '6-8 hrs'
      }
    ],
    variants: [
      { label: 'Working auditor or accountant with COSO exposure', detail: 'Seven to eight weeks at 8-10 hrs/week. Your work covers much of the governance, risk and control domain; spend the recovered time on the GIAS structure, the Code of Ethics rules and the fraud domain, which are the areas working accountants know least well.' },
      { label: 'Career changer from a non-audit role', detail: 'Fourteen to sixteen weeks at 8-10 hrs/week. Add three weeks before Week 1 on the basic vocabulary of internal control, risk and audit engagements; the blueprint assumes familiarity that you will otherwise chase through the whole schedule.' },
      { label: 'IAP holder already waiving Part 1', detail: 'If you hold the Internal Audit Practitioner designation, you receive a waiver for Part 1 and sit Part 2 and Part 3 directly — do not spend money on Part 1 prep, but do review the GIAS foundations because Parts 2 and 3 assume them.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The dominant prep decision for CIA Part 1 is not which study course but which syllabus the course covers, because the May 2025 revision replaced the IPPF with the Global Internal Audit Standards and restructured the exam, and a large stock of pre-2025 materials is still on sale — a candidate who starts with the wrong framework is effectively preparing for a different exam. After that, the highest-yield tactics are to learn the GIAS structure rather than isolated facts, to treat ethics and fraud as drillable domains rather than afterthoughts, and to rehearse the 125-question, 150-minute format under a clock, because the exam is non-disclosed and timed practice is the only realistic rehearsal of the pacing. The weighting should drive the plan: Foundations of Internal Auditing at 35 percent and Governance, Risk Management, and Control at 30 percent together are nearly two-thirds of the paper, so a candidate who gives those two domains roughly 60 percent of total hours and drills Ethics and Professionalism and Fraud Risks to near-perfection is allocating time exactly where the points are. Scenario items dominate the heavy domains, which is why answer-bank building — writing down why an answer is correct and why each distractor is wrong — outperforms passive re-reading. The same judgement practice is what separates a mid-500s score from a passing 600, because the scaled line is a standard, not a curve, and it does not move to accommodate a weak cohort. The strategies below are ordered by score impact, and the first two are the difference between a passing plan and an expensive guess.',
    items: [
      {
        title: 'Confirm your materials are GIAS-based before Week 1',
        detail: 'The 2025 CIA syllabus re-mapped Part 1 onto the Global Internal Audit Standards, which replaced the IPPF on 9 January 2025. Books and question banks built on the old framework still rank highly in search results and still use the old six-topic structure and old Standards language. Check the publication date and the syllabus reference before buying, and if a course does not explicitly say 2025 CIA syllabus, treat it as a partial reference rather than your primary source.'
      },
      {
        title: 'Learn the Standards architecture, not scattered standards',
        detail: 'The GIAS is organized into five domains and fifteen principles, with the standards grouped under them, and Part 1 scenario questions are much easier when you can place a rule in its structural home. Build a one-page map of the framework and drill against it, because the exam rewards knowing how the pieces relate — mandate, independence, proficiency, due professional care, quality — more than recalling any single clause.'
      },
      {
        title: 'Drill the Code of Ethics and independence rules separately',
        detail: 'Ethics and Professionalism is a full 20 percent of the paper and it is the most distinctly memorizable content on the exam: four principles, the rules of conduct under each, and the reporting of violations. Independence and objectivity items are scenario-heavy and the distractors are subtle — operating controls, accepting gifts, auditing an area you previously managed. Work every ethics and independence scenario in your bank at least twice.'
      },
      {
        title: 'Treat governance, risk and control as the deep-water domain',
        detail: 'At 30 percent plus a 35 percent foundations domain, governance, risk and control is where the paper is won. Study COSO internal control and COSO ERM concepts, the three lines model, risk appetite and risk assessment, and the auditor\u2019s role in evaluating controls. This is also the domain where scenario questions concentrate, so answer bank building here pays the most.'
      },
      {
        title: 'Do not let the 15 percent fraud domain leak points',
        detail: 'Fraud Risks is smaller than the other domains but the material is self-contained: the fraud triangle, the main fraud schemes, red flags and the boundary between the auditor\u2019s role and management\u2019s role. A focused week of drilling it is cheap points that a candidate who studies only foundations and control will drop.'
      },
      {
        title: 'Rehearse the full 150-minute format under a clock',
        detail: '125 questions in 150 minutes is roughly 72 seconds an item, and the exam is non-disclosed, so your only realistic rehearsal is timed sets of IIA practice questions. Run at least three full-length timed sets in the final three weeks, answer every question even when unsure — there is no penalty for a wrong answer — and review misses by domain and by error type, not just by total score.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'CIA Part 1 prep resources split into the IIA\u2019s own materials, which are the only source of retired real items, and the commercial review courses, which add structure and question volume. The buying logic is different from many exams: because the exam is non-disclosed, no third party has real item content, and because the syllabus changed in 2025, the first check on any purchase is the publication date and the GIAS alignment. The official IIA practice questions are built from retired exam items and are the closest thing to the real test, while the big commercial courses bundle videos, adaptive practice and the official practice questions into a single subscription that costs roughly as much as the exam fee itself. Candidates who already work in audit often need only the official questions plus a current syllabus guide, while career changers benefit from the structured course, and the difference between those two profiles is the difference between spending $50 and spending $700. The exam fees themselves are the other budget line: the Part 1 exam is $310 for IIA members and $445 for non-members, with a $120 or $240 application fee depending on membership, and IIA membership itself carries an annual fee, so a non-member who fails and retakes is paying full price each time. Note that the IIA has partnered with Becker on an official review product, and that Gleim, Surgent and others maintain GIAS-aligned courses; we do not rank by commission and we recommend confirming syllabus alignment on the product page rather than trusting the box. The table below lists list prices as of 2026-08 in USD before tax and promotions, and they move frequently with sales and regional pricing.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'IIA exam registration (Part 1) + application', values: ['$310 member / $445 non-member, plus $120/$240 application', 'Pearson VUE, test centre only (online testing ended 2025)', 'Required — budget the full three-part path, not just Part 1' ] },
      { label: 'IIA CIA Practice Questions', values: ['Included with membership or small add-on (check the IIA store)', 'Online retired items with rationales', 'The only real-item source; anchor every plan on it' ] },
      { label: 'Becker — The IIA CIA Exam Review', values: ['~$700-900 for the full three-part bundle', 'Videos, adaptive practice, simulated exams, digital text', 'Candidates who want a single vendor-aligned program' ] },
      { label: 'Gleim CIA Review (2025 syllabus edition)', values: ['~$400-600 per part or bundle', 'Study units plus thousands of practice questions', 'Self-paced, question-heavy preparation' ] },
      { label: 'Surgent CIA Review', values: ['~$400-500 per part', 'Video and question bank with a pass guarantee', 'Working candidates who need condensed video coverage' ] },
      { label: 'IIA 2025 CIA Exam Syllabus and sample questions', values: ['Free', 'Official PDF blueprint plus sample items', 'The scope map — download before buying anything else' ] },
      { label: 'Your own answer bank from practice sets', values: ['Free', 'Personal notes keyed to the four domains', 'Targeted gap closing in the final weeks' ] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax and vary by region, promotion and whether you buy parts separately or as a bundle; IIA membership is required or discounted for every line above. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The CIA Part 1 failure modes cluster around two roots: preparing against the wrong syllabus, which is a 2025-specific trap with a large stock of outdated materials still on sale, and studying content without rehearsing the exam mechanics of a non-disclosed, 125-question, 150-minute paper. A third root is structural — candidates underestimate how scenario-heavy the two large domains are and treat them as recall content, when governance, risk and control plus foundations together carry nearly two-thirds of the paper and reward judgment practice over memorisation. The 44 percent reported global pass rate reads intimidating until you notice what it measures: all candidates, including the entirely unprepared, under a criterion-referenced standard set so that the same underlying ability passes every form. The six traps below are the recurring ones in candidate post-mortems, and every one of them is fixable within a single ten-to-twelve-week cycle. Notice that most of them are process errors rather than knowledge gaps — buying the wrong edition, skipping timed sets, ignoring the retake clock, leaning on the headline rate — which is the encouraging part of the analysis, because process errors are corrected by changing behaviour rather than by studying more content. A candidate who confirms the syllabus, weights hours by domain, drills ethics and fraud to near-perfection, runs at least three timed 125-question sets, and respects the 30-day retake wait has removed the five most common failure causes before sitting, and the sixth — relying on the pass rate instead of a plan — disappears the moment the first timed set produces a score to work from.',
    items: [
      {
        mistake: 'Studying a pre-2025, IPPF-based course for the current exam',
        fix: 'The May 2025 revision replaced the IPPF with the Global Internal Audit Standards and restructured Part 1 from six topics into four domains. Old books still rank in search results. Check the publication date and the syllabus reference on everything you buy, and prefer materials that explicitly name the 2025 CIA syllabus and the GIAS.'
      },
      {
        mistake: 'Treating ethics and fraud as minor topics',
        fix: 'Ethics and Professionalism is 20 percent and Fraud Risks is 15 percent of the paper — a third of the exam between them, and both are self-contained enough to drill to near-perfection. Candidates who study only foundations and control leave 35 percent of the exam poorly prepared and then fail near the 600 line.'
      },
      {
        mistake: 'Memorizing standards without learning the architecture',
        fix: 'The exam rewards knowing how the GIAS hangs together — domains, principles and the standards grouped under them — because scenario questions test relationships such as when a safeguard restores objectivity. A one-page framework map beats flashcards of isolated clauses.'
      },
      {
        mistake: 'Never running a timed 125-question set',
        fix: '125 items in 150 minutes is roughly 72 seconds a question, and the exam is non-disclosed, so pacing is only rehearsed with timed practice sets. Candidates who never run the full sitting over-think early items, run out of clock on the final domain, and fail despite knowing the material.'
      },
      {
        mistake: 'Ignoring the 30-day retake wait and the 180-day registration window',
        fix: 'A failed part cannot be re-sat for 30 days, and each exam registration is only valid for 180 days before it expires at full cost. A candidate who fails in the middle of a tight three-year program window can lose both the attempt fee and calendar time. Treat the first sitting seriously and schedule with the window in mind.'
      },
      {
        mistake: 'Basing the decision to sit on the headline pass rate',
        fix: 'The roughly 44 percent reported global pass rate measures all candidates, including the unprepared. Candidates who work a structured GIAS-based course and run timed sets beat it by a wide margin, while candidates who read the rate as "too low" or "too high" and skip planning on that basis are exactly the ones the number describes.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'CIA Part 1 is 125 multiple-choice questions in 150 minutes, computer-delivered at Pearson VUE test centres, scored on a 250-750 scaled scale with a 600 pass line. The current syllabus has four domains — Foundations of Internal Auditing (35%), Governance, Risk Management, and Control (30%), Ethics and Professionalism (20%) and Fraud Risks (15%) — and the exam is non-disclosed, so no live items are published. Items are overwhelmingly single-answer multiple choice with four options, mixing direct recall of Standards requirements with scenario questions that present a situation and ask for the correct judgment, and with the IIA\u2019s own practice questions being the closest thing to real item style. Because the scaled score is standard-set rather than a percentage, the number of correct answers needed varies by form difficulty, and there is no penalty for guessing, so every question should be answered even when uncertain. The four option choices in scenario items are typically plausible-sounding rules misapplied — the most common wrong answers swap independence, objectivity, due professional care and confidentiality against each other — which is why candidates who learn the distinctions between those concepts score far higher than candidates who memorize isolated facts. Pacing matters as much as knowledge: 125 items in 150 minutes is roughly 72 seconds per question, so the discipline is to answer confidently, flag genuine uncertainties, and reserve the final minutes for flagged scenario items rather than re-reading everything. That pacing habit is trainable, and it is the difference between finishing the paper and leaving the last domain half-answered. The samples below are editor-written illustrations of that style, not live items.',
    types: [
      { name: 'Single-answer multiple choice', share: 'The large majority of the 125 items', detail: 'Four options testing Standards requirements, the Code of Ethics rules of conduct, and definitions of risk and control concepts. Distractors are usually real rules applied to the wrong situation.' },
      { name: 'Scenario-based judgment items', share: 'Heaviest in the governance, risk and control and ethics domains', detail: 'A described situation — a gift, a prior role, a control weakness, an assurance-versus-consulting choice — with a question asking for the auditor\u2019s correct action or the governing standard.' },
      { name: 'Recall of Standards structure', share: 'A minority of items', detail: 'Direct questions about the GIAS domains, principles, mandatory versus recommended guidance, and the frequency and conduct of quality assessments.' }
    ],
    samples: [
      {
        prompt: 'An internal auditor is assigned to audit a procurement process that the auditor personally designed and operated until six months ago. Which action best maintains objectivity under the Standards?',
        options: [
          'A. Proceed with the audit but omit the auditor\u2019s name from the report',
          'B. Disclose the prior role to the chief audit executive and accept a restriction on that area of the engagement',
          'C. Request that the engagement be assigned to another auditor or that the affected area be excluded from the auditor\u2019s work',
          'D. Proceed without disclosure because the auditor knows the process best'
        ],
        answer: 'C',
        explanation: 'Objectivity requires that auditors avoid engagements where they have a real or perceived impairment, and having personally designed and operated a process within the previous year is a direct impairment. The correct response is to decline or reassign the work (C). Disclosing but proceeding anyway (B) converts an impairment into a disclosed one but does not remove it, and restricting the report (A) misrepresents the work performed. Proceeding without disclosure (D) violates both the Standards and the Code of Ethics. The item is designed to test the distinction between transparency and actual removal from the conflict.'
      },
      {
        prompt: 'Under the Global Internal Audit Standards, which of the following is a mandatory component of the internal audit charter?',
        options: [
          'A. The authority and responsibility of the internal audit activity, including its access to records and personnel',
          'B. The performance appraisal system used for internal audit staff',
          'C. The internal audit activity\u2019s annual training budget',
          'D. The names of the internal audit activity\u2019s external co-sourced providers'
        ],
        answer: 'A',
        explanation: 'The charter is the formal document defining the internal audit activity\u2019s purpose, authority and responsibility, including access to records and personnel, and it is a mandatory element under the Standards (A). Performance appraisal methods (B), training budgets (C) and external provider names (D) are operational matters that may be documented elsewhere but are not required charter content. The item tests the mandatory-versus-recommended distinction that runs through the foundations domain.'
      },
      {
        prompt: 'Which combination of conditions is most consistent with an increased risk of fraudulent financial reporting?',
        options: [
          'A. Pressure to meet earnings targets, opportunity created by weak controls, and rationalization that the reporting is temporary',
          'B. Strong tone at the top, segregation of duties, and a whistleblower hotline',
          'C. High turnover in the internal audit activity with unchanged financial controls',
          'D. Routine reconciliation of accounts and independent board oversight'
        ],
        answer: 'A',
        explanation: 'The fraud triangle names pressure, opportunity and rationalization as the conditions that converge to produce fraud, and fraudulent financial reporting typically combines management pressure to meet targets, control weaknesses that create the opportunity, and a rationalization that justifies the act (A). Strong tone at the top, segregation of duties and a hotline (B) are controls that reduce risk. High internal audit turnover (C) is a process concern but does not by itself signal reporting fraud, and strong reconciliation plus board oversight (D) is a protective environment. The item ties the fraud-risk domain to the governance and control concepts tested elsewhere on the paper.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'CIA Part 1 is a 125-question, 150-minute computer-based exam delivered at a Pearson VUE test centre — online at-home testing was discontinued by the IIA from 28 May 2025, so plan for a physical centre. The pass line is a scaled 600 on the 250-750 scale, and the exam is non-disclosed, so nothing about the content may be discussed afterwards. The single most common way a prepared candidate loses the seat is identity paperwork: you need one valid, government-issued photo ID, and the name on it must match your name in the IIA\u2019s Certification Candidate Management System (CCMS) exactly, because a mismatch cannot be repaired at the check-in desk. Arrive with enough time for check-in, which includes identity verification and a digital signature; personal items such as phones, smartwatches and notes go into a locker, and test centres provide their own erasable noteboard and pen. Inside the exam, the 150-minute clock runs continuously, there are no scheduled breaks in the appointment, and you may flag questions and return to them within the section, so the pacing plan is to answer every item — there is no penalty for guessing — and to spend any saved time on flagged scenario items rather than re-reading everything. Because results now arrive within about three weeks rather than on screen, budget that delay before your retake window calculations. On finishing, the system confirms your submission, and the official result follows by email and in the CCMS, with a score report that shows your scaled score against the 600 pass line.',
    bring: [
      'One valid, unexpired, government-issued photo ID with your name matching your CCMS account exactly',
      'Your appointment confirmation or CCMS account number in case check-in cannot locate the booking',
      'A second form of identification if your primary ID is non-standard or expired',
      'Nothing else — the test centre provides an erasable noteboard and pen'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker storage',
      'All notes, study materials, calculators and electronic devices',
      'Bags, coats, food and drink beyond what the centre permits',
      'Any other person in the testing room'
    ],
    timeline: [
      { time: 'The week before', detail: 'Verify your name in the CCMS matches your ID exactly, confirm the test centre address and travel time, and re-run one timed 125-question set.' },
      { time: '24 hours before', detail: 'Confirm the appointment time in the CCMS and your Pearson VUE confirmation email; plan to arrive at the centre with margin.' },
      { time: '30 minutes before', detail: 'Arrive for check-in: identity verification, digital signature, locker storage of personal items.' },
      { time: 'Check-in', detail: 'Photo ID check, palm-or-photo capture per centre procedure, seating and the computer tutorial before the timer starts.' },
      { time: '0-75 minutes', detail: 'Work the first half of the paper at roughly a minute per item: answer every question, flag genuine uncertainties, never stall.' },
      { time: '75-145 minutes', detail: 'Continue through the second half at the same tempo; this is where fatigue bites, so re-read scenario stems carefully.' },
      { time: 'Final 5 minutes', detail: 'Review flagged items only, then submit rather than letting the clock expire.' },
      { time: 'After submission', detail: 'Confirm the submission on screen. The official result follows within roughly three weeks by email and in the CCMS — there is no on-screen score under the current policy.' }
    ],
    rules: [
      '125 questions, 150 minutes, computer-delivered at a Pearson VUE test centre; online testing is no longer available.',
      'Passing score is a scaled 600 on the 250-750 scale; it is not a percentage of items correct.',
      'One valid government-issued photo ID required, name matching your CCMS account exactly.',
      'No scheduled breaks in the appointment; the clock does not stop if you leave the room.',
      'The exam is non-disclosed — discussing live item content violates the non-disclosure agreement.',
      'You may flag questions and return to them within the section; there is no penalty for guessing.',
      'A failed part can be retaken after a 30-day wait with no limit on attempts; each exam registration is valid for 180 days.'
    ],
    afterwards:
      'Your official result arrives within roughly three weeks, by email and through the CCMS, rather than on screen at the test centre. On a pass, that part of the CIA program is banked, and the realistic next step is to schedule Part 2, Internal Audit Engagement, while the GIAS architecture you just learned is still fresh — Part 2 builds directly on the foundations and standards tested here. Remember the structural clock: you have three years from program acceptance to pass all three parts and complete the experience requirement, and each exam registration is only valid for 180 days, so plan the sequence against those two deadlines rather than part by part. On a fail, the path is mechanical: wait the 30 days, but use the window deliberately. The score report shows your scaled score against the 600 line, and your own timed-set history will tell you which of the four domains dragged the result — most failing candidates are weak in exactly one domain, usually governance, risk and control or ethics, and that is fixable in a targeted two-week pass before the retake. Do not re-sit on the same knowledge; repair the one domain, re-run a timed set, and treat the retake as a different exam.'
  }
};

export default data;
