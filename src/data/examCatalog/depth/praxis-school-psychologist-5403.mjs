// Depth content for: praxis-school-psychologist-5403
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Teacher licensure & education certifications desk',
    bio: 'This guide is compiled and maintained by our teacher-licensure desk. Praxis tests are administered by ETS, and the passing scores are set by each state education agency rather than by ETS, so we track structure, question counts, timing and fees from the official ETS Praxis pages and study companions and state plainly where you must confirm a state-specific cut score. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Test structure, question count, timing, fee and content categories were taken from the official ETS Praxis page and Study Companion for School Psychologist (5403), aligned to the NASP 2020 practice model.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$94,310 median for psychologists (BLS, May 2024) — the broad occupation that includes school psychologists',
    summary:
      'The direct conclusion for a School Psychologist (5403) candidate is that the exam is the gate to school-psychologist certification and to the NCSP credential, and the closest BLS occupation, Psychologists, SOC 19-3033, had a May 2024 median annual wage of $94,310. The BLS classifies by job duties rather than by certificate, and it does not publish a separate school-psychologist median in the Occupational Outlook Handbook\u2019s headline figure, so the $94,310 is the occupation-wide median that includes school, clinical and counseling psychologists; school psychologists are paid on district salary schedules that typically follow a teacher-plus-extended-contract model, which means the school-specific number varies widely by district and state rather than tracking the clinical median. The distribution matters more than the median: BLS counted 204,300 psychologist jobs in 2024, projects about 6 percent growth from 2024 to 2034 — faster than average, driven by rising demand for mental-health services in schools and communities — and expects roughly 12,900 openings a year, many of them replacement need. The practical reading for a 5403 candidate is favourable: school psychology is a persistent shortage field in many regions, districts frequently advertise school-psychologist positions they cannot fill, and the NCSP credential plus state certification is the standard combination employers look for, so clearing the exam converts training into an immediately marketable license. One caveat anchors the picture: the 5403 passing score is set per state, and the National Association of School Psychologists requires a scaled score of 155 on the 5403 for NCSP eligibility, so a candidate should confirm both their state\u2019s cut and the NCSP threshold, because the two can differ and the higher one is the binding constraint for credential portability. For a candidate asking whether the credential pays, the answer is that the wage is competitive with the broader psychologist median and that the school setting adds schedule stability and district benefits that the headline number does not capture.',
    rows: [
      { label: 'Median annual wage, psychologists', value: '$94,310', note: 'BLS Occupational Outlook Handbook (SOC 19-3033), May 2024' },
      { label: 'Employment, 2024', value: '204,300 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~12,900 per year', note: 'BLS OOH Job Outlook, 2024-34' },
      { label: 'NCSP cut on 5403', value: 'Scaled score 155', note: 'NASP NCSP eligibility requirement; state licensure cuts vary' }
    ],
    growth: '6% projected change 2024-34 for psychologists (faster than average), with ~12,900 openings a year. School psychologists are a persistent shortage field; pay is district-schedule based and the NCSP credential adds portability.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Psychologists',
      url: 'https://www.bls.gov/ooh/life-physical-and-social-science/psychologists.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'ETS publishes no pass rate — the 5403 cut score is state-set, and NASP requires 155 for NCSP eligibility',
    summary:
      'ETS does not publish a pass-rate statistic for Praxis 5403 or any other Praxis test, and there is no single national passing score: each state education agency that accepts 5403 for school-psychologist certification sets its own cut on the 100-200 scaled score scale, while the National Association of School Psychologists sets a separate, uniform requirement of 155 for the Nationally Certified School Psychologist (NCSP) credential — and for many candidates the binding number is the higher of the two, so the first research step is to look up both the state cut and the NCSP threshold before planning. That means the same scaled score can clear a state license and fall short of the NCSP, or vice versa, and candidates who train to one number without checking the other can discover the mismatch after the fact. What is uniform and verifiable is the operational policy: the test is computer-delivered with 125 selected-response questions in 125 minutes, scored on the 100-200 scaled scale, ETS enforces a mandatory waiting period between attempts, there is no limit on attempts, and each attempt is paid at full price. A second structural fact matters for planning: the 5403 is aligned to the NASP 2020 Model for Comprehensive and Integrated School Psychological Services, and its four content categories are weighted — Professional Practices that Permeate All Aspects of Service Delivery is 32 percent — so the relevant comparison for a candidate is their own state\u2019s cut and the NCSP threshold against their practice scores by category. The correct planning question is therefore not what the pass rate is but what both required scores are and how far above them your practice scores sit, because a 125-question paper rewards targeted category repair. Treat any vendor-sourced pass-rate figure as a marketing artifact, and build the preparation around clearing the higher of your two required numbers with a deliberate margin.',
    source: {
      label: 'ETS — Praxis School Psychologist (5403)',
      url: 'https://praxis.ets.org/test/school-psychologist-5403.html'
    },
    caveat:
      'ETS publishes no pass rate by exam. The 5403 cut score is set by each state education agency, and NASP requires a scaled score of 155 for NCSP eligibility; confirm both requirements before registering.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The 5403 is a broad, scenario-heavy paper: 125 selected-response questions in 125 minutes, and the content map is four categories aligned to the NASP 2020 practice model — Professional Practices that Permeate All Aspects of Service Delivery (about 40 questions, 32 percent), Foundations of School Psychological Service Delivery (about 32 questions, 25 percent), Direct and Indirect Services for Children, Families, and Schools at the Student Level (about 28 questions, 23 percent), and Direct and Indirect Services at the Systems Level (about 25 questions, 20 percent). The structural fact that should shape the schedule is that the largest category is data-based decision making and consultation, which means the exam rewards the problem-solving process — gather information, analyze the problem, choose an evidence-based intervention, monitor progress — rather than isolated fact recall, and the plan must train that process explicitly. The plan below runs eight to ten weeks at roughly 8-10 hours a week. Candidates coming from a school-psychology graduate program should budget the lower end because the content is recent; candidates from related fields such as counseling or general education should budget the upper end and add a full pass on assessment principles, federal law and the NASP practice model. The final two weeks should be timed mock exams on the real format, because 125 questions in 125 minutes is exactly one minute per item and the scenario items run longer than the definitional ones, so pacing discipline decides the outcome. Before planning, confirm that 5403 is the test your state requires and confirm the NCSP threshold of 155, because the credential\u2019s portability depends on meeting the higher of the two numbers. The hours below are built for a graduate student or practicing professional with evenings and weekends; if you are studying full-time over a summer, you can compress the calendar but not the total hours.',
    totalHours: '80-110 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Diagnostic, state cut and NCSP threshold',
        tasks: [
          'Take one untimed diagnostic pass through all four content categories to rank your starting position',
          'Look up your state\u2019s exact 5403 cut score and the NASP NCSP threshold of 155, and write down the higher one',
          'Download the ETS Study Companion and map the four categories to the NASP 2020 practice model'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Data-based decision making and consultation (32%)',
        tasks: [
          'Work the problem-solving model: problem identification, problem analysis, intervention selection and progress monitoring',
          'Study assessment principles — reliability, validity, norms, fairness — and the selection and interpretation of measures',
          'Cover consultation and collaboration models and the school-family-community partnership strategies'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Week 4',
        focus: 'Student-level services (23%)',
        tasks: [
          'Study academic interventions and instructional support, including accommodations and modifications',
          'Work mental and behavioral health services: prevention tiers, counseling techniques and evidence-based interventions',
          'Cover child and adolescent psychopathology as it affects educational outcomes'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Foundations of service delivery (25%)',
        tasks: [
          'Study equitable practice for diverse learners, research and evidence-based practice, and program evaluation',
          'Drill legal, ethical and professional practice: IDEA, Section 504, FERPA, NASP ethics, consent and confidentiality',
          'One timed 40-question drill per week under 40 minutes to build pace'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Week 7',
        focus: 'Systems-level services (20%) and gap closing',
        tasks: [
          'Study schoolwide practices to promote learning, safe and supportive schools, and crisis response',
          'Cover family-school collaboration and interagency work',
          'Re-test the Week 2-3 items you missed to confirm the repair took'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Week 8',
        focus: 'Scenario-method drilling',
        tasks: [
          'Practise the decision-first method: identify the referral concern, what information is missing, and which measure or method fills that gap',
          'Drill the ethics and legal scenarios — confidentiality, consent, LRE, manifestation, fairness',
          'Build a miss log tagged to the four categories and to the mistake pattern'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Week 9',
        focus: 'Full-length timed mocks',
        tasks: [
          'Take two full 5403 mocks: 125 questions in 125 minutes under exam conditions',
          'Review both by content category — the pattern of misses matters more than the total score',
          'Drill the specific categories and scenario frames that cost points in the mocks'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Week 10',
        focus: 'Taper and logistics',
        tasks: [
          'Light review of category checklists and miss lists, plus one timed half-exam',
          'Confirm your state cut score and the NCSP threshold, and that your ID name matches your Praxis account',
          'Confirm your seat, travel or at-home system test, and take one quiet day before the exam'
        ],
        hours: '6-8 hrs'
      }
    ],
    variants: [
      { label: 'School psychology graduate student', detail: 'Seven to eight weeks at 8-10 hrs/week. Your program covers the practice model and assessment; spend the recovered time on the federal-law and ethics items and full-length mocks.' },
      { label: 'Related field (counseling, special education) adding school psych', detail: 'Ten to twelve weeks at 8-10 hrs/week. Add two weeks before Week 1 on assessment principles, the NASP practice model and the legal framework, which are not covered by a counseling license.' },
      { label: 'Practicing school psychologist seeking NCSP', detail: 'Five to six weeks at 8-10 hrs/week. Your daily work covers the service-delivery categories; concentrate the plan on the foundations, law and ethics items and on clearing the 155 NCSP threshold with a margin.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The 5403 rewards one skill above all: applying the data-based decision-making process that anchors the NASP practice model. Because the largest category, Professional Practices, is 32 percent of the paper and centres on problem identification, problem analysis, intervention selection and progress monitoring, the exam rewards candidates who can move from a referral concern to the right next step — which assessment fills this information gap, which evidence-based intervention matches this need, how to monitor whether it works. The single highest-yield planning decision is to weight study time by the published category shares, giving Professional Practices and Foundations the largest blocks, because a flat plan starves the two categories that together carry 57 percent of the paper. The second highest-yield decision is to drill the legal and ethical layer explicitly — IDEA, Section 504, FERPA, consent, confidentiality, LRE, manifestation determination and the NASP ethics code — because these items are highly predictable, fact-based and worth a reliable block of points that scenario fluency does not automatically supply. The third is to practise the decision-first method on scenarios, because the exam repeatedly presents a referral and several reasonable actions, and the best-practice response is the one that gathers the missing data before intervening. The strategies below are ordered by score impact, and the first two are the difference between a passing plan and a lucky one: they are not optional extras to add after content review, they are the plan. A candidate who skips the weighting and the legal layer is effectively betting that clinical intuition compensates for the two things the paper is deliberately built to measure, and this exam separates experience from the practice-model frame the same way the NASP standards separate a job description from a role definition.',
    items: [
      {
        title: 'Train the data-based decision-making process',
        detail: 'The largest category is Professional Practices — data-based decision making and consultation — and the exam rewards the problem-solving sequence: identify the concern, gather and analyze the missing data, choose an evidence-based intervention, monitor progress. For every practice scenario, ask what information is missing before you pick a response; the best-practice answer almost always gathers data before intervening.'
      },
      {
        title: 'Weight the categories by question count',
        detail: 'Professional Practices is about 40 of the 125 questions (32 percent) and Foundations about 32 (25 percent); together they carry 57 percent of the paper. A flat study plan starves both. Allocate hours in the same proportions, and give the assessment-principles and law-and-ethics content the block it earns.'
      },
      {
        title: 'Drill the legal and ethical layer as facts',
        detail: 'IDEA, Section 504, FERPA, consent, confidentiality, least-restrictive-environment, manifestation determination and the NASP ethics code are tested repeatedly and predictably. These are the most fact-coachable items on the paper and the most reliable points available. Drill them in spaced sessions until the legal terms and their applications are reflex.'
      },
      {
        title: 'Study assessment as decision-making, not test-name trivia',
        detail: 'The exam asks which measure or method best fills an information gap for a given referral, not just what tests exist. Study what each type of assessment does — cognitive, achievement, behavioral, adaptive, functional-behavioral — and when each is indicated, because the items reward matching the tool to the question.'
      },
      {
        title: 'Practise the systems-level and equity frames',
        detail: 'Systems-level services (20 percent) and the equitable-practice content test schoolwide practices, crisis response, family-school collaboration and the elimination of equity barriers. These items reward knowing the MTSS and PBIS frameworks and how a school psychologist operates beyond the individual case, and they are the categories candidates most often under-prepare.'
      },
      {
        title: 'Run full-length timed mocks at one-minute-per-item pace',
        detail: 'One hundred twenty-five questions in 125 minutes is exactly one minute per item, and the scenario items run longer than the definitional ones. Two full mocks in Week 9 tell you exactly where over-deliberation costs you and let you rehearse the flag-and-return discipline. Track the clock against question 40 and question 85 so pacing becomes a plan, not a surprise.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The highest-value resources for the 5403 are free: the ETS Study Companion, which contains the exact four-category blueprint, the NASP practice-model alignment and sample questions with explained answers, and the ETS Interactive Practice Test, which is the closest thing to the real item style and the best single readiness check available. The National Association of School Psychologists publishes the practice model and certification requirements directly, which is the authoritative source for the 155 NCSP threshold and the domains the exam follows. Third-party courses add structured drilling volume and are worth it mainly if a specific category needs systematic repair — the legal and ethical layer for everyone, because it is fact-heavy and highly testable, or assessment principles for candidates coming from related fields. The buying logic for this exam is that scenario-based tests respond best to volume: a candidate needs to see hundreds of realistic situations and read why the best-practice answer beats the defensible ones, so a question bank with explanations is closer to a necessity than an option, while a multi-hundred-dollar course library is usually overkill. The decision really is how much structured remediation your two weakest categories need, and that should be diagnosed before you spend anything, not after. One caution that applies to all paid materials: the 5403 is aligned to the NASP 2020 model, so verify that any course or bank reflects the current four-category blueprint and the 125-question format rather than the retired 5402 exam that had 140 questions. University programs are the hidden variable: many school-psychology programs build 5403 prep into their coursework or subsidise the registration fee, so asking your program director before buying anything is a free first step that candidates routinely skip. The table below lists current list prices as of mid-2026; we do not rank by commission and prices change frequently.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ETS Study Companion (5403)', values: ['Free', 'PDF content outline with sample questions', 'The authoritative four-category map', 'Download first — tag every miss to its categories' ] },
      { label: 'NASP practice model and certification pages', values: ['Free', 'Official web documents', 'The 2020 practice model and the NCSP 155 threshold', 'The authoritative source for domains and certification' ] },
      { label: 'ETS Praxis Interactive Practice Test (5403)', values: ['~$20', 'Timed online practice with immediate scoring', 'Closest scenario style to the real exam', 'The best single readiness check before booking' ] },
      { label: 'Praxis 5403 question bank', values: ['$60-150 subscription', 'Online bank with explanations and timed modes', 'Volume scenario drilling with answer logic', 'The core purchase for a scenario-based exam' ] },
      { label: 'School psychology review course', values: ['$100-300', 'Video lessons and study guides', 'Structured repair by category', 'Candidates needing the legal and assessment layer taught' ] },
      { label: 'University program materials', values: ['Often included in tuition', 'Coursework and program prep', 'Program-aligned review and scheduling', 'Candidates enrolled in a school-psychology program' ]
      },
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; ETS registration fees are set by ETS and state surcharges may apply. Passing scores are set by state and by NASP (155 for the NCSP) and are not included in any fee. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The 5403 failure modes cluster around four roots: under-preparing the two categories that carry 57 percent of the paper, training to one passing number when the state cut and the NCSP threshold of 155 can differ, answering scenarios from intuition instead of the data-based decision-making frame, and treating the legal and ethical layer as skimmable when it is the most fact-coachable block of points on the exam. Every one of the six traps below is fixable within a single ten-week cycle, and most are exactly the mistakes the scenario design is built to punish. The first trap is the weighting trap: Professional Practices (32 percent) and Foundations (25 percent) together carry more than half the paper, yet candidates from practice settings often under-prepare both because the daily work feels like coverage. The second is the two-numbers trap: a candidate who studies to their state\u2019s cut without checking the NCSP threshold of 155 can pass one requirement and miss the other, and the credential\u2019s portability depends on the higher one. The third is the intuition trap: answering a referral scenario with a clinically plausible but data-light response, when the best-practice answer gathers the missing information first. The fourth is the law-and-ethics skip, losing a reliable block of predictable points. The fifth is studying test names instead of assessment decision-making, and the sixth is a pacing trap — never running a full mock at the one-minute-per-item pace. Each trap has a concrete fix below, and the common thread is that the 5403 rewards the NASP practice-model frame over accumulated clinical experience, and that frame is exactly what targeted practice builds.',
    items: [
      {
        mistake: 'Studying the four categories evenly',
        fix: 'Professional Practices (32 percent) and Foundations (25 percent) carry 57 percent of the paper together. Allocate hours by weight and give the assessment, law, ethics and research content the block it earns, rather than studying evenly across all four categories.'
      },
      {
        mistake: 'Training to one passing number',
        fix: 'The state cut score and the NASP NCSP threshold of 155 can differ, and the credential\u2019s portability depends on the higher one. Look up both in Week 1 and require your practice mocks to beat the higher number by a margin.'
      },
      {
        mistake: 'Answering scenarios from intuition',
        fix: 'The exam rewards the data-based decision-making process: identify the concern, gather the missing information, choose an evidence-based intervention, monitor progress. The best-practice response almost always gathers data before intervening, so a clinically plausible but data-light answer is usually the wrong one.'
      },
      {
        mistake: 'Treating law and ethics as skimmable',
        fix: 'IDEA, Section 504, FERPA, consent, confidentiality, LRE, manifestation and the NASP ethics code are tested predictably and repeatedly. This is the most fact-coachable block of points on the paper — drill it in spaced sessions until the terms and applications are reflex.'
      },
      {
        mistake: 'Studying test names instead of assessment decisions',
        fix: 'The exam asks which measure or method best fills an information gap for a given referral. Study what each type of assessment does and when it is indicated — cognitive, achievement, behavioral, adaptive, FBA — because the items reward matching the tool to the question.'
      },
      {
        mistake: 'Never running a full-length mock',
        fix: 'One hundred twenty-five questions in 125 minutes is exactly one minute per item, and scenario items run longer. Candidates who only drill in short blocks over-deliberate on the real paper. Two full mocks in Week 9 turn pacing and scenario judgement from a surprise into a plan.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The 5403 is 125 selected-response questions in 125 minutes, scored on the 100-200 scaled scale against a state-set cut, with the NASP NCSP threshold at 155. The paper covers four content categories aligned to the NASP 2020 Model for Comprehensive and Integrated School Psychological Services — Professional Practices that Permeate All Aspects of Service Delivery (about 40 questions), Foundations of School Psychological Service Delivery (about 32), Direct and Indirect Services for Children, Families, and Schools at the Student Level (about 28), and Direct and Indirect Services at the Systems Level (about 25) — and the format is entirely selected-response, meaning single-answer multiple choice plus a minority of multiple-select items; ETS notes that some questions on a form are pretest items that do not count toward your score. The dominant item type is the scenario question: a referral or school situation followed by several actions, where more than one is defensible and the exam wants the best-practice response within the data-based decision-making frame. The category labels are also the content: Professional Practices is largely assessment, data and consultation; Foundations is equity, research and legal-ethical practice; the two Services categories are interventions at the student and systems levels. Pacing is the dominant tactical skill: exactly one minute per item, with the scenario items running longer than the definitional ones, so flag-and-return discipline matters. The answer logic is consistent: gather the missing data before intervening, prefer the evidence-based and legally compliant option, protect confidentiality and student rights, and match the tool to the question. The samples below illustrate the published scenario style across three of the categories — a data-based decision item, a legal-ethical item and a systems-level item.',
    types: [
      { name: 'Scenario-based single-answer items', share: 'The large majority of items', detail: 'A referral or school situation with several defensible actions; select the best-practice response within the data-based decision-making frame.' },
      { name: 'Definitional and fact items', share: 'A meaningful minority', detail: 'Legal, ethical, assessment and research items that test knowledge directly. Faster than the scenarios and the place to bank time.' },
      { name: 'Multiple-select items', share: 'A minority of items', detail: 'The stem states how many options to choose, and scoring is all-or-nothing. Common where several practices together constitute a correct plan.' }
    ],
    samples: [
      {
        prompt: 'A second-grade teacher refers a student for evaluation because the student struggles to sound out words. The school psychologist is asked which measure would be most useful to begin the problem-analysis step. Which is the best first choice?',
        options: [
          'A. A comprehensive intellectual assessment to determine overall ability',
          'B. A reading-specific assessment such as curriculum-based measurement of decoding',
          'C. A behavioral rating scale completed by the teacher',
          'D. A projective personality measure to explore emotional factors'
        ],
        answer: 'B',
        explanation: 'The problem-analysis step in the data-based decision-making model matches the measurement to the referral concern — the concern is decoding, so a reading-specific measure such as curriculum-based measurement of decoding directly measures the skill in question and provides progress-monitoring data (B). A comprehensive intellectual assessment (A) is broad and does not isolate the decoding skill. A behavioral rating scale (C) targets behavior, not a phonics deficit. A projective personality measure (D) is not indicated for a specific academic-skill concern. This item tests the Professional Practices category: the best-practice response gathers data that answers the referral question, which is the decision logic the exam rewards throughout.'
      },
      {
        prompt: 'A parent requests to see the school psychological report written about their child. The school psychologist has already reviewed the report with the parent and shared the conclusions. What does FERPA require?',
        options: [
          'A. The parent has the right to inspect and review the child\u2019s education records, including the report',
          'B. The parent may only receive a verbal summary and never the written record',
          'C. The report may be withheld because it is a professional opinion',
          'D. The parent must pay a fee before seeing the record'
        ],
        answer: 'A',
        explanation: 'FERPA grants parents the right to inspect and review their child\u2019s education records, and a school psychological report maintained as an education record is covered, so the parent must be allowed access (A). B contradicts the statute — verbal summaries do not replace the inspection right. C is wrong because professional opinions within an education record do not exempt it from FERPA. D is wrong because a fee may be charged for copies in some circumstances, but not as a condition of the right to inspect. This item tests the Foundations category: knowing exactly what FERPA requires in a school-psychology context is the fact-based, high-yield legal content the exam rewards.'
      },
      {
        prompt: 'A school is implementing a multi-tiered system of support and wants to reduce office discipline referrals. Which two practices best reflect a school psychologist\u2019s role at the systems level?',
        options: [
          'A. Training staff in evidence-based classroom management and analyzing discipline data to identify patterns',
          'B. Providing one-on-one counseling to every student who receives a referral',
          'C. Reviewing each referral individually with no analysis of schoolwide patterns',
          'D. Suspending the discipline program until the referral rate reaches zero'
        ],
        answer: 'A',
        explanation: 'At the systems level, the school psychologist works on schoolwide practices: training staff in evidence-based classroom management and analyzing discipline data to identify patterns are both systems-level actions that change the environment rather than one student at a time (A). B is a student-level response applied at scale, which is neither feasible nor systems practice. C ignores the pattern analysis that defines the systems-level role. D abandons the program instead of using data to improve it. This multiple-select item tests the Systems-Level Services category, and its all-or-nothing scoring rewards selecting both halves of the correct plan, which is exactly how the paper punishes partial understanding.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The 5403 is a single appointment of 125 minutes at a Prometric test centre or via ETS online proctoring, containing 125 selected-response questions in one sitting. The most common way a qualified candidate loses the seat is administrative: your government-issued photo ID must match your Praxis account name exactly, and for online proctoring you need a private room, working camera and microphone, and a clean desk. Check your account spelling, your state\u2019s cut score and the NCSP threshold of 155 the week before, because none of them can be fixed at the check-in desk. At the centre you are checked in, photographed, and seated at a computer; scratch paper is issued and collected. The testing interface allows flagging and review within the single section, and there are no separately timed subtests — the 125-minute clock runs continuously, so budget exactly one minute per item and keep moving. The practical pacing plan is: clear the definitional and fact items quickly, spend your working time on the scenario items using the decision-first method — identify the concern, gather the missing data, prefer the evidence-based and legally compliant option — flag genuine uncertainties, and use the final minutes to review flags rather than re-reading everything. There are no scheduled breaks in the sitting; unscheduled breaks may be taken but the clock does not stop, so use the restroom before check-in and keep a water bottle at the centre\u2019s discretion. The pretest items are indistinguishable from scored ones, so answer everything as if it counts. When you finish, your scaled score appears on screen, and the official score report follows in about five weeks to the recipients you selected at registration — typically your state agency, your preparation program, and NASP if you are pursuing the NCSP.',
    bring: [
      'Government-issued photo ID with your name matching your Praxis account exactly',
      'Your Praxis registration confirmation or candidate ID in case check-in cannot locate the booking',
      'For online proctoring: a phone for check-in, a private room, and a webcam and microphone already tested on the machine you will use',
      'Your state\u2019s 5403 cut score and the NCSP threshold of 155, so you can interpret the on-screen result correctly'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — secured in a locker at a centre',
      'All notes, textbooks and printed study materials — no personal scratch paper is allowed',
      'Bags, coats, food and drink beyond what the centre permits',
      'Diagnostic manuals or legal reference texts — everything you need is in the stems'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your state\u2019s 5403 cut score and the NCSP threshold, verify your ID name matches your Praxis account, and re-run one timed half-exam.' },
      { time: '24 hours before', detail: 'For online proctoring, run the system test on the same machine and network. For a centre, confirm the address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin online check-in, which includes a photo, ID capture, and (online) a room scan.' },
      { time: 'Check-in', detail: 'ID verification, signature, lockers. You are seated; the tutorial explains flagging before the timer starts.' },
      { time: '0-5 minutes', detail: 'Write your decision-first method on the noteboard — gather data, prefer the evidence-based and legally compliant option — then begin at a one-minute-per-item tempo.' },
      { time: '5-60 minutes', detail: 'Clear the definitional and fact items quickly and work the scenario items with the method; flag genuine uncertainties and never stall on a single stem.' },
      { time: '60-120 minutes', detail: 'Continue at the same tempo; this is where the longest scenario items live, so re-read stems to identify the referral concern before answering.' },
      { time: 'Final 5 minutes', detail: 'Review flagged items, then submit rather than letting the clock expire.' }
    ],
    rules: [
      '125 selected-response questions in one 125-minute session; scaled score on the 100-200 scale with a state-set cut and a 155 NASP NCSP threshold.',
      'The exam is aligned to the NASP 2020 practice model; scenario items reward the data-based decision-making response over the merely plausible one.',
      'You may flag items and review them within the single section; there are no separately timed subtests.',
      'No scheduled breaks in the sitting; unscheduled breaks may be taken but the clock does not stop.',
      'Scratch paper is issued at a test centre and collected; online proctoring uses a digital whiteboard only.',
      'Some questions on the form are pretest items that do not count toward your score.',
      'Retakes are subject to the ETS waiting-period policy after score release; each attempt is paid in full.'
    ],
    afterwards:
      'Your scaled score appears on screen when you finish, and the official report follows in about five weeks to the recipients you selected — typically your state education agency, your preparation program, and NASP if you are pursuing the NCSP. Because the cut score is state-set and the NCSP threshold is 155, read your result against the higher of the two numbers rather than against any number on the report. On a pass at or above 155, you clear both the state certification gate and the NCSP eligibility threshold, and you can complete the remaining NCSP application steps. On a pass above the state cut but below 155, you may hold state certification but must retake to earn the NCSP — plan accordingly before the credential is needed for portability. On a fail, wait out the ETS retake waiting period, but use the window deliberately: the most common failure pattern is not missing school psychology overall but a specific category — usually the legal and ethical layer, or the data-based decision-making frame — and that is fixable in one targeted cycle. Do not re-book the same knowledge; spend the window repairing the specific area your practice and the score report point to, and treat the retake as a different exam experience rather than a second roll of the same dice.'
  }
};

export default data;
