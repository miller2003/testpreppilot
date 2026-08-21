// Depth content for: praxis-plt-grades-k-6-5622
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Teacher licensure & education certifications desk',
    bio: 'This guide is compiled and maintained by our teacher-licensure desk. Praxis tests are administered by ETS, and the passing scores for the PLT are set by each state education agency rather than by ETS, so we track structure and fees from the official ETS Praxis pages and state plainly where you must confirm a state-specific cut score. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Test structure, question counts, timing, fees and scoring were taken from the official ETS Praxis Study Companion for Principles of Learning and Teaching: Grades K-6 (5622).',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$62,340 median for elementary school teachers (BLS, May 2024)',
    summary:
      'The PLT: Grades K-6 (5622) is the pedagogy half of elementary licensure — it tests how you think about teaching, not what you teach — so the directly relevant occupation is Elementary School Teachers, Except Special Education, SOC 25-2021. That occupation had a May 2024 median annual wage of $62,340, with the lowest 10 percent earning under $46,440 and the highest 10 percent over $102,010. Teacher pay is set overwhelmingly by district salary schedules — years of service plus education credits — rather than by market pressure, which is why the distribution is wide and geography dominates it: state-level medians for elementary teachers range from the high $40,000s to more than $90,000, with the highest-paying states being largely the highest-cost ones. BLS counted 1,539,800 kindergarten and elementary school teachers in 2024 and projects a 2 percent decline in employment from 2024 to 2034, driven mainly by falling elementary enrollment, while still expecting about 103,800 openings a year, almost all from replacement need. For a 5622 candidate the salary picture has one specific implication: because pay advances with experience and additional credentials rather than with test performance, the exam is a toll gate on a stable, schedule-driven career, and the economically sensible approach is to pass it efficiently and let the salary schedule do the wage work. The PLT itself adds no salary premium and appears on no employer pay scale — it is simply one of the licence requirements your state checks before you can be hired, which is why preparation should be targeted and short rather than a long campaign.',
    rows: [
      { label: 'Median annual wage, elementary school teachers (except special education)', value: '$62,340', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $46,440', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $102,010', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024 (kindergarten and elementary)', value: '1,539,800 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~103,800 per year', note: 'BLS OOH Job Outlook, 2024-34 — almost all replacement need' }
    ],
    growth: '-2% projected change 2024-34 (decline driven by falling elementary enrollment), with ~103,800 replacement openings a year. Pay is set by district salary schedules; the PLT itself adds no salary premium.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Kindergarten and Elementary School Teachers',
      url: 'https://www.bls.gov/ooh/education-training-and-library/kindergarten-and-elementary-school-teachers.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'ETS publishes no pass rate — the cut score is set by each state',
    summary:
      'ETS does not publish a pass-rate statistic for the PLT or any other Praxis test, and there is no single national passing score: each state education agency sets its own cut score for 5622, and the published state requirements vary widely — commonly in the range of roughly 157 to 175 on the 100-200 scaled score scale, depending on the state and sometimes on the grade band. The practical consequence is that the same paper can pass in one state and fail in another, so the first research step — before any prep purchase — is to look up your state\'s exact 5622 cut score on the ETS Praxis state requirements page or your state\'s educator-certification site. What is uniform and verifiable nationwide is the operational policy: the test is scored on a scaled scale, the state cut is the pass line, ETS enforces a 21-day waiting period after score release before a retake, there is no limit on attempts, and each attempt is paid at full price. A further scoring nuance matters for this particular exam: 5622 includes constructed-response questions (case-study analysis), and ETS reports your selected-response score and your constructed-response performance separately while combining them into the single scaled score — so a candidate who neglects the written portion is giving up a scored component, not just "an essay extra". Because the cut score is state-specific, the correct planning question is not "what is the pass rate" but "what is my state\'s cut, and how far above it do my practice scores sit". Everything else — forum pass-rate anecdotes, prep-vendor claims — is noise you should ignore.',
    source: {
      label: 'ETS — Praxis PLT: Grades K-6 (5622)',
      url: 'https://www.ets.org/praxis/prepare/materials/5622'
    },
    caveat:
      'ETS publishes no pass rate by exam. The 5622 cut score is set independently by each state education agency on the 100-200 scaled score scale; confirm your state\'s requirement before registering.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The PLT: Grades K-6 (5622) is a 2-hour test of 70 selected-response questions plus 4 constructed-response questions, the latter being short written analyses of teaching scenarios. The content map has five areas: Students as Learners (about 22 percent), Instructional Process (about 23 percent), Assessment (about 15 percent), Professional Development, Leadership and Community (about 15 percent), and the constructed-response Analysis of Instructional Scenarios (about 25 percent of the scaled score weight). Two structural facts drive the plan. First, this is a pedagogy exam, not a content exam: the selected-response items test educational psychology, learning theory, instruction, assessment literacy and professional ethics at the level of a beginning teacher, and most education-major candidates already know a meaningful share of it — so the plan is shorter than for a content-heavy exam and leans on drilling question style. Second, the four constructed-response questions are scored by trained raters and count for roughly a quarter of the weight, yet they are the most neglected part of preparation: candidates who have never written a timed case-study analysis arrive and produce unstructured paragraphs. The plan below runs six weeks at 6-8 hours a week, with the first two weeks on the selected-response content areas, the middle two weeks on writing the constructed responses under a timer, and the final two weeks on integrated timed practice against your state\'s cut score.',
    totalHours: '40-50 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Diagnostic and content map',
        tasks: [
          'Take one untimed diagnostic pass through all five content areas to see which are already familiar',
          'Look up your state\'s 5622 cut score on the ETS Praxis state requirements page',
          'Read the Study Companion\'s content categories for Students as Learners and Instructional Process',
          'Build a glossary of the pedagogy vocabulary the test assumes (scaffolding, formative assessment, differentiation, IEP, wait time)'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Week 2',
        focus: 'Selected-response content areas',
        tasks: [
          'Work Students as Learners and Instructional Process in depth — learning theories (behaviourism, cognitivism, constructivism), development, motivation, instructional strategies',
          'Cover Assessment (formative versus summative, validity, reliability, data use) and Professional Development, Leadership and Community',
          'Tag every miss to a content area and re-drill the tagged areas',
          'Complete one timed 70-question selected-response-only practice set'
        ],
        hours: '7-9 hrs'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Constructed-response writing',
        tasks: [
          'Write the four case-study analyses under a timer — 30 minutes for the whole set, mirroring the real structure',
          'Learn the response formula the rubric rewards: name the relevant principle, apply it to the specific scenario, give a concrete classroom strategy, and state the expected outcome',
          'Score your own responses against the published rubric dimensions (knowledge of students, instructional practice, assessment, reflection)',
          'Write at least two full constructed-response sets per week — volume is the highest-yield activity on this exam'
        ],
        hours: '7-9 hrs/week'
      },
      {
        label: 'Week 5',
        focus: 'Integrated full-length practice',
        tasks: [
          'Two full 5622 mocks: all 70 selected-response plus the 4 constructed-response questions in one 2-hour sitting',
          'Replicate the real conditions: no notes, no phone, written responses typed as they will be on exam day',
          'Review both the selected-response misses by content area and the constructed responses against the rubric',
          'Confirm your practice scaled scores sit above your state cut with a margin'
        ],
        hours: '7-9 hrs'
      },
      {
        label: 'Week 6',
        focus: 'Taper and logistics',
        tasks: [
          'Light review of the glossary and the constructed-response formula',
          'One more constructed-response set, timed, to keep the writing reflex fresh',
          'Confirm your state cut score, your ID name matches your Praxis account, and your seat',
          'One quiet day before the exam'
        ],
        hours: '5-7 hrs'
      }
    ],
    variants: [
      { label: 'Current education student in a methods or student-teaching term', detail: 'Three to four weeks at 6-8 hrs/week. Your coursework covers most of the content; spend the time on constructed-response writing under a timer, which coursework rarely forces you to do.' },
      { label: 'Career changer with a classroom-adjacent job (tutor, paraprofessional)', detail: 'Six to eight weeks at 6-8 hrs/week. Your practical knowledge is real but unsystematic; work the content categories in order and learn the professional vocabulary the test assumes.' },
      { label: 'Returning teacher adding a K-6 endorsement', detail: 'Three to four weeks at 5-7 hrs/week. Focus on the assessment and professional-development categories and on refreshing the constructed-response format — the classroom experience makes the scenarios familiar, but the scoring rubric still rewards structured answers.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The 5622 rewards a specific skill that most candidates have never trained: writing structured case-study analyses under a clock, in the vocabulary of the profession. Selected-response preparation is straightforward — learn the content areas and drill question style — but the constructed-response portion is where candidates lose points they could have banked, and the strategies below are ordered by that score impact.',
    items: [
      {
        title: 'Master the constructed-response formula',
        detail: 'The four case-study questions are scored against a rubric that rewards naming the relevant principle, applying it to the specific scenario, giving a concrete classroom strategy, and stating the expected outcome. A response that says "the teacher should differentiate instruction" without saying how, for which students, and why it addresses the scenario scores lower than a structured answer that does all four. Write every practice response in that four-part shape until it is automatic.'
      },
      {
        title: 'Write the constructed responses under a timer weekly',
        detail: 'The constructed-response set is the single most neglected scored component, and it cannot be rehearsed by reading. From Week 3, write at least two full timed sets per week — 30 minutes for the four scenarios — and score them against the rubric. Candidates who have written ten practice sets go into the exam with a workflow; candidates who have not, improvise, and the score difference is visible.'
      },
      {
        title: 'Learn the professional vocabulary explicitly',
        detail: 'The selected-response items assume fluency in the language of education: scaffolding, formative and summative assessment, differentiation, IEP and 504 plans, zone of proximal development, wait time, classroom management models. Candidates who know the concepts but not the labels lose items where the label is the discriminator. Build a glossary in Week 1 and drill it weekly.'
      },
      {
        title: 'Answer from the role of a reflective beginning teacher',
        detail: 'The PLT tests the mindset of a professional educator, not a contestant or an expert: the "best" answer is usually the one that is student-centred, uses assessment data, involves families appropriately, and follows school policy and ethics. Items that offer an answer like "remove the student from the room" versus "investigate the cause and adjust instruction" almost always reward the latter. Practise choosing the option a school administrator would endorse.'
      },
      {
        title: 'Know your state cut score and rehearse above it',
        detail: 'State cut scores for 5622 commonly sit in the 157-175 range on the 100-200 scale, and the exact number is state-specific. Look yours up in Week 1 and require your practice mocks to beat it by a margin of at least a few points before you book the real attempt, so a bad day still lands above the line.'
      },
      {
        title: 'Rehearse the two-hour sitting once',
        detail: 'A full 5622 mock — all 70 selected-response questions plus the 4 constructed responses in one 2-hour block — tells you exactly how to split your time between the multiple-choice portion and the writing portion. Candidates who never run the full sitting typically overrun the selected response and rush the constructed responses, which is the worst possible trade.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The PLT is short and its content overlaps heavily with what education students already studied, so the buying decision is different from a content-heavy exam: pay for timed practice and structured writing feedback, not for encyclopedic courses. The free ETS Study Companion contains the full content map, sample selected-response items and constructed-response prompts with scoring guidance, and ETS\'s Interactive Practice Test is the closest thing to the real format.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ETS Study Companion (5622)', values: ['Free', 'PDF content categories, sample items, constructed-response prompts', 'The authoritative content map — start here and tag every miss to these categories' ], },
      { label: 'ETS Praxis Interactive Practice Test (5622)', values: ['~$20', 'Timed online practice with immediate scoring', 'Closest question style to the real exam; the best single readiness check' ], },
      { label: 'Exam registration (5622)', values: ['~$130 (confirm current fee at ets.org/praxis)', 'Prometric centre or online proctoring', 'Required — book only after practice scores clear your state cut with a margin' ], },
      { label: '240 Tutoring or similar PLT course', values: ['~$80-100 subscription', 'Lessons plus practice questions by content area', 'Structured review of the selected-response content areas' ], },
      { label: 'University teacher-ed program resources', values: ['Often included in your program', 'Course notes, methods textbooks, sample case studies', 'The most aligned content for candidates still in a preparation program' ], },
      { label: 'Study.com or Mometrix PLT study guide', values: ['~$40-80', 'Video lessons, flashcards, practice sets', 'Glossary building and vocabulary drilling for career changers' ]
      }
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; ETS registration fees are set by ETS and state surcharges may apply. The 5622 fee can change, so confirm the current price at ets.org/praxis. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The 5622 failure modes cluster around one root cause: treating a pedagogy exam like a content cram and neglecting the constructed-response portion, which carries roughly a quarter of the scaled-score weight. The six traps below are the recurring ones in candidate post-mortems, and every one of them is fixable within a single six-week cycle.',
    items: [
      {
        mistake: 'Never writing a constructed response under a timer',
        fix: 'The four case-study questions are scored by raters against a rubric and make up a substantial share of the scaled score. Candidates who outline answers in their heads or skip them entirely on practice mocks arrive without a writing workflow. From Week 3, write at least two full timed sets per week and score them against the rubric — this is the highest-yield activity on the exam.'
      },
      {
        mistake: 'Answering case studies with general advice instead of named principles',
        fix: 'A response that says "the teacher should support the student" without naming the relevant principle (for example, scaffolding, formative assessment, or zone of proximal development) and connecting it to the scenario scores lower than a structured answer. Use the four-part formula: name the principle, apply it to the scenario, give a concrete strategy, state the expected outcome.'
      },
      {
        mistake: 'Choosing the "expert" answer over the professional-educator answer',
        fix: 'PLT items reward the reflective-teacher perspective: student-centred, data-informed, policy-compliant, family-inclusive. Options that punish students, bypass the process, or ignore school policy are almost never the credited answer, even when they look decisive. Practise selecting the option an administrator would endorse.'
      },
      {
        mistake: 'Ignoring the assessment and professional-development categories',
        fix: 'Assessment (formative versus summative, validity, data use) and Professional Development, Leadership and Community together are about 30 percent of the selected-response weight, and candidates who study only Students as Learners and Instructional Process leave those points on the table. Cover all four selected-response content areas explicitly.'
      },
      {
        mistake: 'Studying to a national passing score that does not exist',
        fix: 'State cut scores for 5622 commonly sit in the 157-175 range and differ by state, so a score that "usually passes" can fail yours. Look up your state\'s exact cut in Week 1 and require practice mocks to beat it by a margin before you book.'
      },
      {
        mistake: 'Ignoring the 21-day retake wait',
        fix: 'ETS enforces a 21-day waiting period after score release before a retake, and each attempt is paid at full price. A candidate who fails and needs the score by a licensure deadline can miss it entirely because of the wait. Treat the first attempt as serious, and if you do fail, use the 21 days for targeted constructed-response practice rather than a same-knowledge re-sit.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The 5622 is a 2-hour test of 70 selected-response questions plus 4 constructed-response questions. The selected-response portion covers Students as Learners (about 22 percent), Instructional Process (about 23 percent), Assessment (about 15 percent), and Professional Development, Leadership and Community (about 15 percent), while the constructed-response portion — the Analysis of Instructional Scenarios (about 25 percent of the scaled-score weight) — presents classroom case studies and asks you to write short analyses. The selected-response items are single-answer multiple choice in the standard four-option format, sometimes with a scenario or classroom vignette in the stem. The constructed-response items are the distinguishing feature: each presents a realistic teaching situation — a struggling reader, a behavioural issue, an assessment decision, a family conference — and asks you to identify the relevant principle, analyse the situation, and propose concrete actions, with responses scored by trained raters against a published rubric. Because both portions combine into a single scaled score against a state-set cut, pacing is the tactical core: roughly 90 seconds per selected-response item, leaving about 30 minutes for the four written responses. The classic pacing failure is spending too long on the multiple choice and rushing the writing; the constructed responses are worth too much to leave to the last ten minutes.',
    types: [
      { name: 'Selected response, single answer', share: '70 items', detail: 'Four-option multiple choice across the four content areas. Many stems embed a classroom vignette; the credited answer rewards the reflective-educator perspective.' },
      { name: 'Constructed response — case-study analysis', share: '4 items, about 25% of scaled-score weight', detail: 'Short written analyses of realistic teaching scenarios, scored by raters against a rubric. Reward naming the principle, applying it to the scenario, proposing concrete strategies, and stating expected outcomes.' }
    ],
    samples: [
      {
        prompt: 'A third-grade teacher notices that a student who reads fluently aloud frequently fails to answer comprehension questions about the same text. Which of the following is the most appropriate initial instructional response?',
        options: [
          'A. Assign the student more challenging texts to increase engagement',
          'B. Assess whether the student is monitoring comprehension while reading and model fix-up strategies such as rereading and self-questioning',
          'C. Reduce the student\'s reading workload until fluency improves',
          'D. Refer the student for special education evaluation immediately'
        ],
        answer: 'B',
        explanation: 'Fluency without comprehension is a classic sign of weak comprehension monitoring, and the research-aligned first move is to teach self-monitoring and fix-up strategies — rereading, self-questioning, summarising — while assessing where the breakdown occurs (B). A assumes motivation is the issue when the profile points to comprehension strategy. C addresses fluency, which is not the deficit. D skips the instructional-intervention steps that should precede a referral; schools are expected to try evidence-based classroom interventions first. The item rewards the diagnostic, student-centred, incremental response — exactly the reflective-teacher mindset the PLT tests.'
      },
      {
        prompt: 'A teacher uses a short quiz at the start of a new unit to find out which prerequisite skills the students have already mastered. This use of assessment is best described as:',
        options: [
          'A. Summative assessment',
          'B. Formative assessment',
          'C. Standardised assessment',
          'D. Placement assessment'
        ],
        answer: 'B',
        explanation: 'A quiz administered at the start of a unit to gather information that will shape upcoming instruction is a formative use of assessment — assessment for learning — regardless of where in the unit it occurs (B). Summative assessment (A) judges learning at the end of instruction. Standardised assessment (C) refers to uniform, norm-referenced instruments. Placement assessment (D) is a narrower label usually applied to sorting students into tracks or courses. The discriminating word in the stem is "will shape upcoming instruction", which points to formative use.'
      },
      {
        prompt: 'During a parent-teacher conference, a parent expresses concern that a student\'s homework grades do not reflect the student\'s strong performance on classroom assignments. Which of the following is the most professional initial response by the teacher?',
        options: [
          'A. Explain that the homework policy is school policy and not open to discussion',
          'B. Acknowledge the discrepancy, review the student\'s homework and classroom performance data together, and propose examining the reasons for the difference',
          'C. Agree to change the student\'s homework grades to match the classroom grades',
          'D. Suggest the parent contact the principal to request a grade change'
        ],
        answer: 'B',
        explanation: 'The professional response treats the parent as a partner: acknowledge the concern, look at the evidence together, and investigate the discrepancy — which might be missing homework, late submissions, or a misunderstanding of the rubric (B). A is defensive and shuts down collaboration. C abandons grading integrity to appease the parent. D escalates a problem the teacher should first engage with directly. PLT items consistently reward collaboration, data use and professional ownership of the issue.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items. The constructed-response items on the real exam require written analyses of case studies; the multiple-choice samples above illustrate the selected-response style only.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The PLT: Grades K-6 (5622) is a 2-hour test delivered at a Prometric test centre or via online proctoring: 70 selected-response questions followed by 4 constructed-response case-study analyses, scored on the 100-200 scale against a state-set cut. The most common way a qualified candidate loses the seat is administrative — your government-issued photo ID must match your Praxis account name exactly, and online proctoring requires a private room, working camera and microphone, and a clean desk — so verify your account spelling and your state\'s cut score the week before. At the centre you are checked in, photographed, and seated; scratch paper is issued and collected. The testing interface presents the selected-response items first, then the constructed-response prompts, and you type your written responses into the interface — so practise typing your case-study answers in the final week rather than handwriting them. Pace the paper deliberately: roughly 90 seconds per selected-response item leaves about 30 minutes for the four written responses, and those written responses carry a substantial share of the scaled-score weight, so protecting their time is a scored decision, not a stylistic one. Flag difficult selected-response items and return to them rather than stalling; the constructed responses should each follow the four-part shape — name the principle, apply it to the scenario, propose concrete strategies, state the expected outcome. When you finish, your scaled score appears on screen, and the official score report follows in about five weeks to the recipients you selected at registration.',
    bring: [
      'Government-issued photo ID with your name matching your Praxis account exactly',
      'Your Praxis registration confirmation or candidate ID in case check-in cannot locate the booking',
      'For online proctoring: a phone for check-in, a private room, and a webcam and microphone already tested on the machine you will use',
      'Your state\'s 5622 cut score, so you can interpret the on-screen result correctly'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — secured in a locker at a centre',
      'All notes, textbooks and printed study materials — no personal scratch paper is allowed',
      'Bags, coats, food and drink beyond what the centre permits',
      'Any other person in the room for online proctoring; the session is recorded'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your state\'s 5622 cut score, verify your ID name matches your Praxis account, and write one more timed constructed-response set.' },
      { time: '24 hours before', detail: 'For online proctoring, run the system test on the same machine and network. For a centre, confirm the address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin online check-in, which includes a photo, ID capture, and (online) a room scan.' },
      { time: 'Check-in', detail: 'ID verification, signature, lockers. You are seated; the tutorial explains flagging before the timer starts.' },
      { time: '0-70 minutes (selected response)', detail: 'Work the 70 items at ~90 seconds each, flagging hard items to revisit. Keep the constructed-response time budget sacred.' },
      { time: '70-120 minutes (constructed response)', detail: 'Four case-study analyses, typed into the interface. Use the four-part formula on each: principle, application, strategies, expected outcome.' },
      { time: 'After submission', detail: 'Your scaled score appears on screen; the official report follows in about five weeks to your selected recipients.' }
    ],
    rules: [
      '70 selected-response questions plus 4 constructed-response case-study analyses in 2 hours; scaled score on the 100-200 scale with a state-set cut.',
      'The constructed responses are scored by trained raters and combine into the single scaled score with the selected-response portion.',
      'Unscheduled breaks may be taken, but the clock does not stop; the test is one continuous 2-hour session.',
      'Scratch paper is issued at a test centre and collected; online proctoring uses a digital whiteboard only.',
      'Constructed responses are typed into the testing interface, so typing skill is part of the exam-day workflow.',
      'Retake: ETS requires a 21-day wait after score release; no limit on attempts; each attempt paid in full.',
      'Scores are valid for 10 years, subject to your state\'s acceptance window.'
    ],
    afterwards:
      'Your scaled score appears on screen when you finish, and the official report follows in about five weeks to the recipients you selected — typically your state education agency and teacher-preparation program. Because the cut score is state-set, read your result against your state\'s published 5622 requirement rather than against any number on the report. On a pass, the pedagogy requirement is cleared and you move to whatever remains in your licensure pathway — commonly the content-knowledge test such as the Elementary Education: Multiple Subjects (5001) and any state-specific components. On a fail, the path is straightforward: wait the 21 days, but use that window deliberately. The most common failure pattern on 5622 is not missing pedagogy knowledge but under-performing on the constructed responses — unstructured answers, rushed writing, or general advice instead of named principles — and that is fixable in a single targeted cycle of timed practice. Do not re-book the same knowledge; spend the window writing two or three full constructed-response sets a week, scoring them against the rubric, and your second attempt will be a different exam experience.'
  }
};

export default data;
