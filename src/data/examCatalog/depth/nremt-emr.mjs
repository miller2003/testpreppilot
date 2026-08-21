const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'EMS & prehospital certification desk',
    bio: 'NREMT-EMR structure and requirements come from the National Registry of Emergency Medical Technicians official pages and are revised with each exam update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the NREMT EMR cognitive exam format, skills requirements, and renewal policy against NREMT official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'EMR is the entry rung of the EMS ladder — the occupation it leads to, EMTs and paramedics, earns a May 2024 median of $46,350 (BLS), with advancement to paramedic paying substantially more',
    summary: 'The direct answer is that the EMR (Emergency Medical Responder) certification does not have its own BLS occupation — EMRs typically work in fire, security, or event roles while the occupation BLS tracks is EMTs and paramedics (SOC 29-2041), at a May 2024 median annual wage of $46,350, with the lowest 10 percent under about $30,000 and the highest 10 percent above about $78,000. The honest framing is that EMR is the entry certification in a ladder — EMR, EMT, AEMT, Paramedic — and most certified EMRs either hold it as a workplace requirement (police officers, firefighters, event medics) or use it as the step toward EMT certification, which is the more common paid EMS credential. The pay story that matters is the ladder: BLS projects about 6 percent employment growth for EMTs and paramedics from 2024 to 2034, with roughly 22,000 openings per year, and paramedic-level roles in fire departments and hospital-based systems pay meaningfully above the occupation median. Because the EMR scope of practice is limited (basic first response, oxygen, bleeding control, assisting higher-level providers), employers treat it as a gate for volunteer and first-response positions rather than a wage multiplier. The practical read: take the EMR course if your job requires it or you are building toward EMT, expect the pay to come from the EMT/paramedic roles the ladder leads to, and treat the certification as the first rung rather than a terminal credential. In many fire departments, the EMR certification is what lets a recruit ride on apparatus while completing the longer EMT course.',
    rows: [
      { label: 'Median annual wage, EMTs & paramedics', value: '$46,350', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 29-2041)' },
      { label: 'Lowest 10 percent', value: 'less than $30,160', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $78,040', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+6%', note: 'BLS Employment Projections' },
      { label: 'The certification itself', value: 'Entry rung', note: 'NREMT EMR is the first of the four-level EMS ladder' }
    ],
    growth: 'BLS projects about 6% growth for EMTs and paramedics from 2024 to 2034, with about 22,000 annual openings, largely from replacement.',
    source: { label: 'BLS OOH — EMTs and Paramedics', url: 'https://www.bls.gov/ooh/healthcare/emts-and-paramedics.htm' }
  },
  passRate: {
    headline: 'NREMT does not publish a pass rate by exam level — but it does publish first-attempt pass rates for EMR/EMT candidates by state, and the EMR cognitive exam uses the same adaptive CAT model as the other levels',
    summary: 'The core fact is that NREMT does not publish a single national pass rate for the EMR exam, but it does publish state-level first-attempt pass-rate statistics for the various levels, and the EMR exam is a computer-adaptive test (CAT) that stops when your ability is estimated with 95 percent confidence. What is published and useful: the EMR cognitive exam contains 90 to 110 questions, you have 1 hour 15 minutes, the cut point is derived from a criterion-referenced standard (not a percentage), and there is no stated "passing score" the way a fixed exam has one — your score is reported as pass/fail. The exam covers the EMR national standard curriculum: airway, respiration and ventilation; cardiology and resuscitation; trauma; medical, obstetrics and gynecology; and EMS operations. Because it is adaptive, the number of questions you see varies, and the exam ends early when your competency estimate is confident; most candidates finish with a pass/fail result available within about 24 hours. The practical preparation implication is to study the EMR curriculum breadth rather than trying to predict the cut score, and to take the exam soon after your course, since first-attempt pass rates are highest for candidates who test close to course completion. NREMT publishes pass-rate data by state and year on its website, so the honest preparation advice is to check your state\u2019s published first-attempt statistics for the EMR level and to use the official NREMT practice exams, which mirror the adaptive format.',
    source: { label: 'NREMT — EMR exam information', url: 'https://www.nremt.org/' },
    caveat: 'NREMT publishes state-level first-attempt pass rates but no single national pass rate for the EMR exam.'
  },
  studyPlan: {
    summary: 'Plan for the EMR course itself — typically 40 to 60 classroom hours across a few weeks to a semester — plus 10 to 15 hours of focused review before the cognitive exam, and schedule the exam within two to three weeks of course completion while the material is fresh. The EMR curriculum covers five areas weighted in the exam blueprint: airway/respiration/ventilation, cardiology and resuscitation, trauma, medical/obstetrics/gynecology, and EMS operations, with the psychomotor skills (bleeding control, splinting, oxygen administration, basic airway management) practised in class and assessed separately at the state level or by the training program. The most efficient study sequence is: first, master the airway and ventilation module, because it is the heaviest-weighted content area and the skills build on each other; second, drill the cardiac and resuscitation content — CPR quality, AED use, and the EMR\u2019s limited medication scope (aspirin and oxygen are within many state scopes); third, review the trauma section with the MARCH or standard first-response framework; and fourth, run practice exams in the adaptive format to build comfort with the CAT interface. Because the cognitive exam is adaptive, the highest-yield habit is taking official or official-format practice exams that stop and score like the real thing, rather than fixed-length quizzes. Budget the final week for scenario review — working through written scenarios aloud, deciding what you would do first, is the closest rehearsal for the exam\u2019s decision-style items. After passing the cognitive exam, complete the psychomotor requirements your state specifies, then apply for state certification through your state\u2019s EMS office.',
    totalHours: '40-60 course hours + 10-15 review hours before the exam',
    weeks: [
      { label: 'During the course', focus: 'Curriculum mastery', tasks: ['Attend all airway, cardiac, and trauma modules', 'Practise psychomotor skills to competency', 'Take module quizzes as you go'], hours: 50 },
      { label: 'Week before the exam', focus: 'Adaptive practice', tasks: ['Take NREMT-format practice exams', 'Review the five content areas by weight', 'Drill decision-style scenarios'], hours: 8 },
      { label: 'Exam week', focus: 'Test readiness', tasks: ['Light review of weak areas', 'Confirm exam logistics and ID requirements', 'Take the cognitive exam'], hours: 4 }
    ],
    variants: [
      { label: 'State-delivered psychomotor assessment', detail: 'Skills are evaluated by your training program or a state-approved evaluator; requirements vary by state.' },
      { label: 'EMT as the next rung', detail: 'Most EMRs advance to EMT certification, which has a broader scope and is the standard paid EMS credential.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes the EMR cognitive exam is "study the five content areas by their blueprint weight, then rehearse the adaptive format," and the single biggest error is treating the exam like a fixed-length knowledge test you can cram for. Because the CAT stops early when your ability estimate is confident, question pacing and early-answer quality matter — practise with adaptive-format tests so you are used to the exam ending before question 110. A second proven approach is mastering the airway module first and deepest, since it carries the largest content weight and its skills (oxygen administration, basic airway positioning) recur across trauma and medical scenarios. Third, drill the scope-of-practice boundary: EMRs do less than EMTs, and exam items reward knowing what an EMR may NOT do (most medication administration, advanced airway devices) as much as what they can. Fourth, run decision-style scenarios aloud — "what do you do first" — because the exam is heavy on prioritisation items, and the first-responder mindset (scene safety, then ABCs) is the framework examiners expect. Fifth, take the exam within weeks of course completion; NREMT\u2019s own published state pass-rate data shows first-attempt rates are highest close to training. Finally, complete the psychomotor skills to competency during the course, because they are a separate gate and cannot be crammed after.',
    items: [
      { title: 'Study by blueprint weight', detail: 'Airway/cardiac content carries the heaviest weight; allocate review time proportionally.' },
      { title: 'Rehearse the adaptive format', detail: 'Use practice exams that stop and score like the CAT so early stopping is not a shock.' },
      { title: 'Know the scope boundary', detail: 'Items reward knowing what an EMR may NOT do as much as what they can do.' },
      { title: 'Drill prioritisation scenarios', detail: 'Scene safety, then ABCs — run "what do you do first" scenarios aloud.' },
      { title: 'Test soon after the course', detail: 'NREMT state pass-rate data shows higher first-attempt rates close to training completion.' }
    ]
  },
  resourceComparison: {
    summary: 'EMR preparation is dominated by the course itself — the textbook and instructor-led skills labs are the core investment — with the NREMT official practice exam as the highest-value supplement at low cost. The comparison below separates the official exam registration and practice, course materials, and commercial question banks, with prices current to this review. The buying rule is to spend on course attendance and the official practice exam first, and treat commercial banks as optional reinforcement rather than replacements.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NREMT registration + cognitive exam', values: ['~$125 (registration varies)', 'Computer-adaptive exam at Pearson VUE', 'The exam itself'] },
      { label: 'NREMT official practice exam', values: ['~$40-55', 'Online adaptive practice', 'Format rehearsal before the real exam'] },
      { label: 'EMR course textbook (e.g. AAOS / Jones & Bartlett)', values: ['~$60-100', 'Printed + online', 'The required course curriculum'] },
      { label: 'Commercial Q-banks (e.g. MedicTests, EMTprep)', values: ['~$20-40/mo', 'Online practice', 'Supplemental drilling'] },
      { label: 'State EMS office materials', values: ['Free', 'State requirements', 'State-specific scope and psychomotor rules'] }
    ],
    footnote: 'Prices approximate and dated to this review; the NREMT registration fee is set by NREMT and is separate from any state fees.'
  },
  commonMistakes: {
    summary: 'The most common mistake is letting the exam drift weeks or months after the course ends, which measurably lowers first-attempt pass odds; the second is studying fixed-length quizzes and being surprised when the adaptive exam stops early. A third recurring error is over-reaching the scope: EMR candidates who rehearse EMT-level skills (advanced airways, medication administration) often misapply them on exam items that test scope boundaries. Candidates also routinely under-practise the psychomotor skills, treating them as a formality, and then fail the state skills assessment that is a separate gate from the cognitive exam. Finally, many candidates neglect the EMS operations content (scene safety, communication, legal issues), which is a small but dependable slice of the exam that costs easy points when skipped.',
    items: [
      { mistake: 'Delaying the exam after the course', fix: 'Schedule within 2-3 weeks of completion; first-attempt rates are highest close to training.' },
      { mistake: 'Practising fixed-length quizzes only', fix: 'Use adaptive-format practice so early exam stopping is familiar.' },
      { mistake: 'Over-reaching the EMR scope', fix: 'Learn the EMR scope boundary; items reward what an EMR may not do.' },
      { mistake: 'Skipping psychomotor practice', fix: 'Reach skills competency during the course; the skills gate is separate from the written exam.' },
      { mistake: 'Ignoring EMS operations content', fix: 'Review scene safety, communication, and legal items — a small but dependable slice of the exam.' }
    ]
  },
  questionTypes: {
    summary: 'The EMR cognitive exam contains 90 to 110 computer-adaptive multiple-choice questions in 1 hour 15 minutes, covering airway/respiration/ventilation, cardiology and resuscitation, trauma, medical/obstetrics/gynecology, and EMS operations. The item style is scenario-based: you are presented with a patient situation and asked to identify the priority action, the correct assessment step, or the appropriate treatment within the EMR scope. Because the exam is adaptive, question difficulty tracks your performance, and the exam ends when the scoring algorithm reaches 95 percent confidence. The samples below are editor-written illustrations of the published curriculum, not live exam items.',
    types: [
      { name: 'Airway, respiration & ventilation', share: '~25%', detail: 'Airway positioning, oxygen administration, breathing assessment.' },
      { name: 'Cardiology & resuscitation', share: '~22%', detail: 'CPR, AED use, cardiac arrest management within EMR scope.' },
      { name: 'Trauma', share: '~18%', detail: 'Bleeding control, splinting, trauma assessment priorities.' },
      { name: 'Medical, OB & gynecology', share: '~20%', detail: 'Medical emergencies, childbirth assistance, scene priorities.' },
      { name: 'EMS operations', share: '~15%', detail: 'Scene safety, communication, documentation, legal issues.' }
    ],
    samples: [
      {
        prompt: 'You arrive first at a scene where an adult is unresponsive and not breathing normally. What should you do first?',
        options: ['A. Take a blood pressure reading', 'B. Begin CPR and attach an AED as soon as available', 'C. Splint the patient\u2019s extremities', 'D. Administer oxygen at 15 lpm'],
        answer: 'B',
        explanation: 'For an unresponsive patient not breathing normally, begin CPR immediately and use an AED when available; other steps follow after resuscitation starts.'
      },
      {
        prompt: 'A patient has severe bleeding from a leg wound. Which action has the highest priority?',
        options: ['A. Splint the leg', 'B. Apply direct pressure to control bleeding', 'C. Check the blood glucose', 'D. Document the time of injury'],
        answer: 'B',
        explanation: 'Severe external bleeding is life-threatening; direct pressure to control it is the priority action.'
      },
      {
        prompt: 'Which intervention is within the EMR scope of practice in most states?',
        options: ['A. Administering intravenous fluids', 'B. Assisting with oxygen administration', 'C. Inserting an advanced airway', 'D. Giving epinephrine by injection'],
        answer: 'B',
        explanation: 'Oxygen administration and basic airway management are within the EMR scope; IV fluids, advanced airways, and injectable medications are not.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published curriculum, not live exam items.'
  },
  examDay: {
    summary: 'The EMR cognitive exam is taken at a Pearson VUE testing center on a computer, with 90 to 110 adaptive questions and 1 hour 15 minutes, and results are typically available within about 24 hours via your NREMT account. The core rules are standard computer-based testing rules: arrive with a valid government-issued photo ID, leave phones and personal items in the provided locker, and expect the exam to end when the adaptive algorithm reaches confidence — it may stop well before 110 questions. There is no negative scoring, so answer every question, but on the adaptive format the early answers carry the most weight, so do not rush the opening items. The exam is pass/fail with no numeric score reported; if you do not pass, NREMT sets a retake eligibility window (typically 15 days for the first retake, with additional windows after), and your first retake is commonly included in your registration fee. After passing, complete any state-required psychomotor assessment through your training program or state EMS office, then apply for state certification. The most useful exam-day habits: sleep normally, eat before the session, and treat the first ten questions as the highest-leverage minutes of the exam.',
    bring: ['Valid government-issued photo ID', 'Confirmation of your Pearson VUE appointment', 'NREMT account login for results'],
    leave: ['Phone, smartwatch, and personal items (stored at the center)', 'Study materials', 'The assumption that all 110 questions will appear'],
    timeline: [
      { time: 'Arrival', detail: 'Check in at Pearson VUE; verify ID; store personal items.' },
      { time: 'Exam', detail: '90-110 adaptive questions; up to 1h15m; ends early at 95% confidence.' },
      { time: 'After', detail: 'Results in ~24 hours via the NREMT portal; pass/fail only.' },
      { time: 'Next', detail: 'Complete state psychomotor assessment; apply for state certification.' }
    ],
    rules: ['Valid photo ID required', 'Personal items stored', 'Adaptive exam — early answers carry most weight', 'Retake window typically 15 days after first failure'],
    afterwards: 'Passing the cognitive exam plus the state psychomotor assessment yields state EMR certification; the credential is the entry rung toward EMT certification.'
  }
};

export default data;
