// Depth content for: pmi-pmp
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Project management & business certifications desk',
    bio: 'This guide is compiled and maintained by our project-management desk. The PMP is owned by the Project Management Institute (PMI) and its exam structure, domain weights, fees and renewal terms come from PMI’s own certification pages and Exam Content Outline (ECO). Vendor exams in this space are revised on a multi-year cycle, and PMI does change the ECO and the exam experience between cycles, so we state plainly which version a figure belongs to and what changed at the cutover. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam structure, domain weights, fees and renewal terms were taken from PMI’s certification pages and the current PMP Exam Content Outline, and checked against the July 2026 exam update announced by PMI.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$100,750 median for project management specialists (BLS, May 2024)',
    summary:
      'There is no Bureau of Labor Statistics occupation called "PMP holder" — the PMP is a credential granted by PMI, not a job title, and its holders work across industries as project, program and portfolio managers and in related delivery roles. BLS therefore classifies by job duties, and the closest official fit for someone whose primary work is running projects is Project Management Specialists, SOC 13-1082, which we have chosen deliberately over the older general-management categories sometimes cited for this credential. That occupation had a May 2024 median wage of $100,750, with the lowest 10 percent under $59,830 and the highest 10 percent over $165,790. The distribution is wide because project-management work spans small internal initiatives to large programs with budget authority, and the credential tends to carry the most weight where organisations formally require it for mid- and senior-level delivery roles. BLS counted 1,046,300 such jobs in 2024 and projects 6 percent growth to about 1,105,000 by 2034, with roughly 78,200 openings a year from both growth and replacement. By industry, BLS reports the highest pay concentration in finance and insurance (about $111,350 median), which is consistent with where PMP requirements are most often enforced. The limitation to state plainly is that this median covers all project management specialists, chartered or not, and that the PMP’s wage effect is studied by PMI’s own salary surveys rather than isolated by BLS — so read the BLS figure as the relevant labour-market level for the role, not as a measure of the credential’s premium. Where you sit in that distribution is driven more by industry and scope of responsibility than by the letters after your name alone.',
    rows: [
      { label: 'Median annual wage, project management specialists', value: '$100,750', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $59,830', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $165,790', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '1,046,300 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~78,200 per year', note: 'BLS OOH Job Outlook, 2024-34' },
      { label: 'Top-paying industry (finance & insurance)', value: '~$111,350 median', note: 'BLS OOH Pay tab, May 2024' }
    ],
    growth: '+6% projected change 2024-34, ~78,200 openings a year from growth and replacement; BLS covers all project management specialists, not just PMP holders, so treat it as the role’s labour-market level',
    source: {
      label: 'BLS Occupational Outlook Handbook — Project Management Specialists',
      url: 'https://www.bls.gov/ooh/business-and-financial/project-management-specialists.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'PMI publishes no PMP pass rate',
    summary:
      'PMI does not release pass-rate statistics for the PMP, and it never has. Unlike CFA Institute, which publishes cohort pass rates by window, PMI treats the passing standard as proprietary and reports only a pass or fail outcome to the candidate, with no published percentage of candidates who clear it. We have therefore deliberately left any pass-rate figure out of this guide rather than repeating the unverified percentages that circulate in forums and on some prep sites. What is published and verifiable is the shape of the exam — the domain structure, the question count, the time limit and the scoring model — and that is what the narrative here covers instead. The PMP is scored on a pass/fail basis against PMI’s established proficiency standard; candidates receive a report indicating proficiency (below proficient, proficient, above proficient) per domain rather than a numeric score, and the precise cut line is not disclosed. The single most useful implication for a candidate is practical rather than statistical: because the standard is absolute and the same for everyone, your preparation competes with the content outline, not with a cohort, so the unpublished pass rate is a weaker planning input than your own mock-exam trend. The one version caveat that does matter for your odds is the 2026 exam update. PMI changed the PMP exam effective 9 July 2026 — new question formats (including case-study style items), reweighted domains, and references to the then-current PMBOK Guide and the Agile Practice Guide — so a candidate studying pre-cutover material after that date is preparing for a paper that no longer exists. Track which version you are sitting for and study the matching ECO; the absence of a published pass rate makes version discipline the closest thing to a reliability edge you have.',
    source: {
      label: 'PMI — PMP certification and exam information',
      url: 'https://www.pmi.org/certifications/project-management-pmp'
    },
    caveat:
      'No PMP pass rate is published by PMI, by Pearson VUE, or by the accrediting body. We have deliberately left the pass-rate table empty. What is published and verifiable is the pass/fail outcome with per-domain proficiency, the domain weights, the question count and the time limit — and the July 2026 exam change, which candidates must track by version.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The PMP is PMI’s flagship credential and is a scenario-based exam: almost every item describes a project situation and asks you to choose the best action, often in the spirit of PMI’s stated mindset rather than a single textbook rule. The version you sit determines the structure, and this is the single most important fact to anchor before you plan. Through 8 July 2026 the exam was 180 questions (175 scored plus 5 pretest, unscored) in 230 minutes, across three domains weighted People 42 percent, Process 50 percent and Business Environment 8 percent. From 9 July 2026 PMI updated the exam to 180 questions (170 scored plus 10 pretest) in 240 minutes, with reweighted domains — People 33 percent, Process 41 percent and Business Environment 26 percent — and new case-study style items, referencing the current PMBOK Guide and the Agile Practice Guide. Both versions use the same three-domain ECO; the difference is the weights, the timing, the item types and the references. The plan below runs about twelve weeks at 12-15 hours a week (roughly 150-180 hours), which sits in the commonly cited range for a working professional. The assumption is that you already meet PMI’s eligibility (35 contact hours / 23 hours of project management education, plus the project-leadership experience requirement) before you start — if you do not, that is a separate prerequisite, not part of study time. The biggest scheduling error is mixing the two versions: studying a pre-cutover ECO after the change leaves you over-practised on People/Process at the old weights and under-prepared for the heavier Business Environment and case-study items of the new exam. Pick your exam date, read which ECO applies, and build the whole plan around that one version.',
    totalHours: '150-180 hours (commonly cited range for eligible working professionals)',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Eligibility confirmation + Process domain foundations',
        tasks: [
          'Confirm you meet PMI’s experience and education requirements before booking the exam',
          'Study predictive (waterfall) process flow: initiating, planning, executing, monitoring/controlling, closing',
          'Learn the key documents: charter, scope statement, WBS, schedule, budget, risk register',
          'Read the current PMBOK Guide and Agile Practice Guidesections that map to your exam version'
        ],
        hours: '12-15 hrs/week'
      },
      {
        label: 'Weeks 3-4',
        focus: 'People domain (33% or 42% by version)',
        tasks: [
          'Leadership vs management, servant leadership, and the team-development stages',
          'Conflict resolution, emotional intelligence, and stakeholder engagement',
          'The PMI mindset: servant leadership, collaboration, value delivery over process compliance',
          'Practise scenario items — most People questions test judgement, not recall'
        ],
        hours: '12-15 hrs/week'
      },
      {
        label: 'Weeks 5-7',
        focus: 'Process domain (41% or 50% by version)',
        tasks: [
          'Schedule network diagrams, critical path, float, and schedule compression (crashing/fast-tracking)',
          'Cost: earned value management (CV, SV, CPI, SPI, EAC, ETC, TCPI) — drill the formulas',
          'Quality, risk (qualitative/quantitative), procurement and communications planning',
          'Agile and hybrid process flow: iterations, backlogs, burndown, retrospectives'
        ],
        hours: '13-15 hrs/week'
      },
      {
        label: 'Weeks 8-9',
        focus: 'Business Environment domain (26% or 8% by version)',
        tasks: [
          'Compliance, governance, and organisational change drivers',
          'Benefits realisation and alignment to strategy — weighted far more heavily from July 2026',
          'If sitting the new exam, over-invest here; if sitting the old, keep it lighter but do not skip it',
          'Case-study style items if you are on the post-cutover version'
        ],
        hours: '12-15 hrs/week'
      },
      {
        label: 'Weeks 10-11',
        focus: 'Full-length mock exams',
        tasks: [
          'Two full mocks at your version’s exact time limit (230 or 240 min) and question count',
          'Grade by domain and log every scenario you answered by gut feel as a miss',
          'Drill earned value and schedule math until it is automatic under a clock',
          'Re-read the PMI mindset and apply it to every ambiguous scenario'
        ],
        hours: '15+ hrs/week'
      },
      {
        label: 'Week 12',
        focus: 'Gap closing and light review',
        tasks: [
          'Target the two weakest domains from your mocks',
          'Re-do ten scenario items you got wrong and explain the distractors',
          'Confirm exam version, ID, and Pearson VUE appointment',
          'A quiet 48 hours before the exam'
        ],
        hours: '10-12 hrs'
      }
    ],
    variants: [
      { label: 'Experienced agile practitioner', detail: 'Eight to ten weeks. You already live the People and Agile content; protect the predictive Process math (critical path, earned value) and, for the new exam, the heavier Business Environment weighting, which agile practitioners often under-rate.' },
      { label: 'Traditional/waterfall project manager', detail: 'Twelve to fourteen weeks. Predictive process is familiar; the People mindset, servant leadership and agile/hybrid items are where the waterfall habit fights the exam. Over-practise scenario judgement, not document recall.' },
      { label: 'Sitting just after the 9 July 2026 cutover', detail: 'Use only post-cutover material. The reweighted domains, 240-minute clock, case-study items and PMBOK/Agile references are all new; pre-cutover courses will under-state Business Environment and mis-state the timing. Verify the ECO edition on every resource you buy.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The PMP is a scenario exam, not a recall exam, and the single adjustment that most improves scores is learning to answer in PMI’s mindset rather than from personal habit. Almost every item presents a project situation and asks what the project manager should do; the correct choice is usually the one that protects the team, engages stakeholders, follows a defined process, and delivers value — in that spirit — even when a candidate’s real-world shortcut would differ. Candidates who memorise ITTOs (inputs, tools, techniques, outputs) and then meet a judgement scenario freeze, because the exam rarely asks "what is the output of X" and almost always asks "what do you do next".',
    items: [
      {
        title: 'Study the PMI mindset, not just the processes',
        detail: 'The mindset — servant leadership, collaboration, transparent communication, value over compliance, adaptive over rigid — is the lens for the majority of scenario items. When two answers both look feasible, the one that empowers the team and follows the process wins. Drill this by reviewing every wrong mock answer and asking which choice best fits the mindset, not which one you would do at work.'
      },
      {
        title: 'Drill earned value and schedule math until automatic',
        detail: 'The Process domain is the only place formula questions appear, and they are cheap, reliable points if you are fluent. CV, SV, CPI, SPI, EAC, ETC, TCPI, critical path, float, crashing and fast-tracking must be computable under a clock without reference. Candidates who skip the math to focus on soft topics lose the most predictable marks on the paper.'
      },
      {
        title: 'Match your study version to your exam date',
        detail: 'PMI changed the exam on 9 July 2026: new weights (People 33 / Process 41 / Business Environment 26), a 240-minute clock, case-study items, and current PMBOK/Agile references. Studying pre-cutover material after that date over-weights the old mix and misses the heavier Business Environment and new item types. Confirm which ECO applies to your booking and use only matching resources.'
      },
      {
        title: 'Practise full-length timed mocks in one sitting',
        detail: 'The exam is 230 or 240 minutes depending on version, and cognitive fatigue in the back third is where scenario judgement degrades. Two full mocks at the exact time limit train stamina and reveal whether you are over-spending on early items. The new 240-minute version especially rewards pacing practice, because the case-study items take longer to read than a standard scenario.'
      },
      {
        title: 'Learn to eliminate by mindset, not by keyword',
        detail: 'Distractors are written to be plausible real-world actions that violate the mindset — e.g. "do it yourself to save time" or "escalate immediately to avoid blame". Train yourself to reject any option that bypasses the team, skips a defined process, or ignores a stakeholder. Elimination by mindset gets you to the right answer faster than re-deriving from first principles under time pressure.'
      },
      {
        title: 'Know the eligibility and audit process before you book',
        detail: 'PMI requires 35 contact hours (or the CAPM/PMP equivalent) plus project-leadership experience; applications can be selected for audit, and you must supply documentation. Candidates who book the exam before confirming eligibility risk a withdrawn application and a forfeit. Treat eligibility and the audit packet as prerequisites that sit outside study time, not as part of week one.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The main buying decision is whether to use PMI’s own materials or a third-party course that condenses the ECO into exam-focused practice. PMI members pay less for the exam and get the PMBOK Guide and Agile Practice Guide free, which is a real saving if you were going to buy them anyway. For the post-July-2026 exam, confirm any resource is mapped to the new ECO weights, the 240-minute format and the case-study items; much material still on sale reflects the older structure.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'PMP exam fee', values: ['PMI member $405 / non-member $555; rises to $445 / $675 from 6 Aug 2026', 'Pearson VUE, test centre or online', 'Required — membership pays for itself if you also buy PMI standards'] },
      { label: 'PMP retake fee', values: ['Member $275 / non-member $375', 'Pearson VUE', 'Re-sit cost if you fail; max 3 attempts in a 12-month eligibility period'] },
      { label: 'PMBOK Guide + Agile Practice Guide', values: ['Free to PMI members; ~$70-100 retail', 'Digital + print', 'The referenced standards; needed for the current exam version'] },
      { label: 'PMI Authorized PMP Course (ATP providers)', values: ['~$500-1,500 depending on provider', 'Live online / self-paced with official practice', 'Guaranteed alignment to the current ECO; taught by Authorized Training Partners'] },
      { label: 'Andrew Ramdayal / Joseph Phillips PMP course (Udemy)', values: ['~$15-30 during Udemy sales', 'Video + practice exams', 'Low-cost entry; verify it covers your exam version’s weights and item types'] },
      { label: 'Third-party mock exam packs (e.g. PMI-style QBanks)', values: ['~$30-100', 'Timed online mocks', 'Scenario drilling; pick one updated for the July 2026 exam if you sit after the cutover'] },
      { label: 'Study Hall (PMI official practice)', values: ['PMI member pricing, ~$40-80', 'Official-style mock exams and mini exams', 'The closest item style to the live exam; strongest for mindset calibration'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax. The exam fee rises to $445 (member) / $675 (non-member) from 6 August 2026. Udemy list prices are near-meaningless outside a sale. Confirm every resource matches the ECO version you are sitting (pre- or post-9 July 2026). We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'PMP failures cluster around three themes: answering from personal habit instead of the PMI mindset, mismanaging the version change, and underestimating the scenario-math. Because PMI publishes no pass rate, candidates cannot benchmark against a cohort, so the mistakes below are the reliable failure modes reported by prep providers and are version-specific where it matters.',
    items: [
      {
        mistake: 'Studying pre-cutover material after 9 July 2026',
        fix: 'The July 2026 update reweighted domains (People 33 / Process 41 / Business Environment 26), extended the clock to 240 minutes, added case-study items, and references the current PMBOK/Agile guides. Pre-cutover courses over-state the old weights, under-state Business Environment, and omit the new item types. Verify the ECO edition on every resource; if your exam is after the cutover, use only post-cutover material.'
      },
      {
        mistake: 'Answering from real-world habit, not the PMI mindset',
        fix: 'The exam rewards servant leadership, stakeholder engagement, process discipline and value delivery. Options that "get it done fast" by bypassing the team or skipping a process are usually wrong. For every mock item, ask which choice best fits the mindset; this is the highest-leverage correction available and it applies to both exam versions.'
      },
      {
        mistake: 'Skipping the earned value and schedule math',
        fix: 'Formula questions are the most predictable points on the paper and sit almost entirely in the Process domain. Candidates who avoid the math to focus on soft topics lose cheap marks. Drill CV/SV/CPI/SPI, EAC/ETC/TCPI, critical path, float and compression until computable under a clock without reference.'
      },
      {
        mistake: 'Booking before confirming eligibility or risking audit',
        fix: 'PMI requires 35 contact hours plus project-leadership experience, and applications can be audited requiring documentation. Candidates who book first and then fail audit lose the fee. Confirm eligibility and prepare the audit packet before paying for the exam.'
      },
      {
        mistake: 'Under-practising full-length timed mocks',
        fix: 'The 230- or 240-minute format induces back-third fatigue that degrades scenario judgement. Candidates who only study in short blocks meet the live clock unprepared. Two full mocks at the exact time limit of your version are the minimum; the new 240-minute version makes this more, not less, important because case-study items read longer.'
      },
      {
        mistake: 'Misreading the Business Environment weight',
        fix: 'On the post-cutover exam Business Environment jumps to 26 percent from 8 percent — a third of the paper is now strategy, compliance and benefits alignment, not delivery mechanics. Candidates who treat it as a minor domain lose a large, predictable block of points. Even on the old exam it is 8 percent and not skippable; on the new one it is a primary study area.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The PMP is a scenario-driven, pass/fail exam delivered through Pearson VUE, and the structure depends on which version you sit. Through 8 July 2026: 180 questions (175 scored plus 5 pretest/unscored) in 230 minutes, across three domains weighted People 42 percent, Process 50 percent and Business Environment 8 percent. From 9 July 2026: 180 questions (170 scored plus 10 pretest) in 240 minutes, reweighted People 33 percent, Process 41 percent, Business Environment 26 percent, with new case-study style items and references to the current PMBOK Guide and Agile Practice Guide. In both versions the items are overwhelmingly situational multiple choice — a described project scenario followed by the best action — plus some matching and multiple-response formats, and the new version adds longer case-study passages. PMI reports only pass/fail with per-domain proficiency (below proficient / proficient / above proficient); there is no numeric score and no published pass rate, and the precise cut line is proprietary. The practical implication for pacing is that scenario items reward a fast first read and mindset-based elimination, while the new case-study items need more reading time, so the 240-minute clock exists precisely because the items are longer. Because the standard is absolute, your preparation competes with the ECO, not with a cohort; the unpublished pass rate is a weaker planning input than your own mock trend.',
    types: [
      { name: 'Situational multiple choice', share: 'The bulk of the paper in both versions', detail: 'A project scenario followed by "what should the project manager do". Correct answers follow the PMI mindset; distractors are plausible real-world shortcuts that bypass team, process or stakeholder.' },
      { name: 'Multiple response / matching', share: 'A minority of items', detail: 'Select all that apply, or match items to categories. All-or-nothing scoring; common where several practices together complete a process.' },
      { name: 'Case-study items (new from 9 July 2026)', share: 'New format on the post-cutover exam', detail: 'A longer passage with several linked questions; reads more slowly, which is why the clock moved to 240 minutes. Tests sustained judgement across a scenario.' },
      { name: 'Pretest (unscored) items', share: '5 items pre-cutover / 10 post-cutover', detail: 'Embedded and indistinguishable from scored items; they do not count. You cannot identify them, so answer every item as if it counts.' }
    ],
    samples: [
      {
        prompt: 'A project manager notices that two team members have been openly disagreeing in daily standups, and the conflict is slowing the iteration. Using the PMI mindset, what should the project manager do first?',
        options: [
          'A. Reassign one of the members to another team to remove the conflict',
          'B. Facilitate a discussion with both members to understand the source and coach them toward resolution',
          'C. Escalate the conflict to the sponsor immediately so it is no longer the manager’s problem',
          'D. Let the team self-organise and take no action unless delivery slips'
        ],
        answer: 'B',
        explanation: 'The PMI mindset favours servant leadership, addressing conflict directly through coaching and collaboration, and empowering the team to resolve its own issues — so facilitating the discussion is the best first step. A removes a person rather than resolving the underlying issue and bypasses the team. C escalates prematurely instead of leading. D abdicates the manager’s responsibility for a conflict that is already affecting delivery. This is a classic People-domain scenario present in both exam versions.'
      },
      {
        prompt: 'A project has a BAC of $200,000. At a review point the earned value (EV) is $80,000 and the actual cost (AC) is $100,000. Which statement about cost performance is correct?',
        options: [
          'A. CPI = 0.80, meaning the project is over budget',
          'B. CPI = 1.25, meaning the project is under budget',
          'C. CV = $20,000, meaning the project is over budget by that amount',
          'D. SPI = 0.80, meaning cost performance is on plan'
        ],
        answer: 'A',
        explanation: 'CPI = EV / AC = 80,000 / 100,000 = 0.80. A CPI below 1.0 means the project is over budget for the work accomplished, so A is correct. B inverts the ratio. C computes CV = EV - AC = -20,000 (over budget by $20k), but states it as +$20,000, and the sign is wrong. D mixes in SPI, which measures schedule, not cost, and is irrelevant to the cost-performance question asked. This is the deterministic Process-domain math that appears in both versions.'
      },
      {
        prompt: 'On the post-9 July 2026 exam, a case-study passage describes a program whose benefits have not been realised six months after go-live, and asks which action best addresses the gap. Which domain does this primarily test, and what is the best action?',
        options: [
          'A. Business Environment — establish benefits realisation tracking and reconnect delivery to strategic goals',
          'B. Process — re-baseline the schedule to hide the shortfall',
          'C. People — replace the project sponsor',
          'D. Business Environment — close the program and report success to avoid reputational damage'
        ],
        answer: 'A',
        explanation: 'Benefits realisation and alignment to strategy are squarely Business Environment, now weighted 26 percent on the post-cutover exam — a large jump from 8 percent. The best action is to track benefits against the realised value and reconnect delivery to the stated strategic goals, which is exactly what the heavier weighting tests. B falsifies the record, C is a disproportionate people action with no evidence, and D is both dishonest and contrary to the mindset. This item type (case-study + Business Environment) is specific to the new version.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published PMP Exam Content Outline, not live exam items. The third sample reflects the post-9 July 2026 exam version and would not appear on the pre-cutover paper.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The PMP is delivered through Pearson VUE either at a test centre or online with OnVUE proctoring, and the timing depends on your version: 230 minutes through 8 July 2026, or 240 minutes from 9 July 2026, each with two optional 10-minute breaks bookending a scheduled mid-exam pause on the computer-based format. Two things go wrong most often and both are avoidable. First, the ID and name must match your PMI account exactly, or you lose the seat — and PMI enforces this at check-in. Second, the version mismatch: if your appointment is after the 9 July 2026 cutover, you are sitting the reweighted, case-study, 240-minute exam, so arrive expecting longer items and the new domain weights; candidates who studied the old structure under-prepare for Business Environment and the case-study reading load. You receive a pass/fail result on screen at the centre (and by email), with a per-domain proficiency report rather than a numeric score — PMI does not publish the cut line or a pass rate. Because there is no partial-credit nuance to game, the day is mostly about stamina and mindset: read each scenario once, eliminate by mindset, and keep moving, because the clock (not a curve) is the constraint.',
    bring: [
      'One government-issued photo ID whose name matches your PMI account exactly',
      'Your Pearson VUE appointment confirmation and PMI candidate ID',
      'For OnVUE: a phone for check-in, a clear desk, and a private room with a closable door',
      'For OnVUE: webcam, microphone and a connection already system-tested on the exact machine',
      'A layer you can remove; centre temperature is not under your control'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker at a centre, out of the room for OnVUE',
      'All notes, study sheets, the PMBOK Guide and any printed reference',
      'Your own paper and pens; the centre issues an erasable noteboard (or digital whiteboard for OnVUE)',
      'Bags, coats, hats, food and drink beyond what the centre permits',
      'Second monitors (unplugged and turned away for OnVUE) and any other person in the room'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your ID name matches your PMI account exactly. If your exam is after 9 July 2026, re-confirm you studied the post-cutover ECO (weights, 240-min clock, case-study items).' },
      { time: '24 hours before', detail: 'For OnVUE, run the system test on the same machine and network. Light review only — mindset and earned-value formulas. Pack ID.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin OnVUE check-in (photograph of face, ID, and whole room, about 15 minutes).' },
      { time: 'Check-in', detail: 'ID verification, digital signature, biometric/photo capture, locker. Seated with an erasable noteboard; the exam interface loads with the tutorial.' },
      { time: '0-10 min', detail: 'Use the tutorial and write the earned-value formulas and the mindset rules on the noteboard. Two minutes here buys back far more later.' },
      { time: 'First half', detail: 'Work scenario items at a steady tempo. Eliminate by mindset; flag unsure items rather than stalling. On the new exam, budget extra read time for case-study passages.' },
      { time: 'Mid-exam break', detail: 'A scheduled pause plus your optional 10-minute breaks. Reset; do not review items — the clock on the next segment starts when you resume.' },
      { time: 'Second half', detail: 'Continue with the remaining items; fatigue is the main risk, which is why full-length mocks matter. Submit rather than letting the clock expire.' },
      { time: 'On submission', detail: 'Pass/fail appears on screen with per-domain proficiency. Save or photograph the result if permitted; PMI also emails it.' }
    ],
    rules: [
      'ID name must match your PMI account exactly or you will be denied the seat.',
      'Timing is 230 minutes through 8 July 2026, or 240 minutes from 9 July 2026, with scheduled and optional breaks.',
      'Result is pass/fail with per-domain proficiency; no numeric score and no published pass rate.',
      'Max three attempts in a 12-month eligibility period; retake fees apply ($275 member / $375 non-member).',
      'Navigation is permitted within each section; answer every item, including indistinguishable pretest items.',
      'Erasable noteboard at a centre; digital whiteboard only for OnVUE — no personal writing materials.',
      'Renewal requires 60 PDUs per 3-year cycle; the exam version you sat does not affect renewal terms.'
    ],
    afterwards:
      'Your pass/fail result and per-domain proficiency appear on screen at the centre and by email from PMI; there is no numeric score and PMI does not publish a pass rate or the cut line, so the proficiency report is your only diagnostic and you should read it carefully. On a pass, you are certified for three years and must earn 60 professional development units (PDUs) per cycle to renew — log real project work and learning as you go rather than scrambling in year three. On a fail, the proficiency bands tell you which domains dragged you down; because the standard is absolute, re-sit on the same version’s ECO and target those domains rather than changing providers blindly. Note the attempt limit: a maximum of three tries in a 12-month eligibility period, each paid at the retake fee, so a clean first pass is also the cheap one. Whatever version you sat, protect your eligibility window and PDU clock immediately on a pass, and if you sat just after the 9 July 2026 cutover, remember your certification is the same credential regardless of version — only the exam you prepared for differs, and the version does not change renewal terms.'
  }
};

export default data;
