const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Teacher licensure & education certifications desk',
    bio: 'This desk covers ETS Praxis exams and teacher-licensure credentials. Exam structure, fees and passing-score rules come from the ETS Praxis official pages and vary by state; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the ETS Praxis 5624 study companion structure, the PLT 7-12 content categories, and BLS OOH High School Teachers (SOC 25-2031), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$64,580 median for high school teachers (BLS, May 2024)',
    summary: 'The Praxis PLT 7-12 (5624) is the pedagogy gate for secondary teacher licensure in many states, and the wage question belongs to the occupation you enter with it: high school teaching. The closest official BLS occupation is High School Teachers, SOC 25-2031, which had a May 2024 median wage of $64,580, with the lowest 10 percent under $47,460 and the highest 10 percent above $107,520. BLS counted 1,084,100 high school teacher jobs in 2024 and projects 1 percent growth from 2024 to 2034, with about 65,300 openings a year, almost all from replacement demand as veteran teachers retire. Read the median with two important caveats. First, BLS classifies by job duty, not by licence or exam: the figure covers every high school teacher regardless of how they were certified, so the PLT result itself carries no wage. Second, teacher pay varies enormously by state, district and union status, and many states pay on step-and-lane schedules where a master\'s degree and seniority matter more than any credential; the national median is an average across very different labour markets. The honest framing: the 5624 is a licence gate, and the benchmark it unlocks is the high-school-teacher wage in your specific state and district, not a national number that applies everywhere.',
    rows: [
      { label: 'Median annual wage, high school teachers', value: '$64,580', note: 'BLS OOH, SOC 25-2031, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $47,460', note: 'BLS OOH, SOC 25-2031, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $107,520', note: 'BLS OOH, SOC 25-2031, May 2024' },
      { label: 'Projected openings per year', value: '~65,300', note: 'BLS OOH, SOC 25-2031, 2024-2034' }
    ],
    growth: 'BLS projects 1 percent growth for high school teachers from 2024 to 2034, about 65,300 openings per year, mostly replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - High School Teachers', url: 'https://www.bls.gov/ooh/education-training-and-library/high-school-teachers.htm' }
  },
  passRate: {
    headline: 'ETS does not publish a single national pass rate — it publishes scaled scores, and each state sets its own passing line',
    summary: 'ETS does not publish one national pass rate for the Praxis PLT 7-12 (5624), and any single percentage you see online is either a state-specific report or a third-party estimate, so we do not present one as authoritative. What ETS does publish is the reporting model: the 5624 produces a scaled score, and the passing score is set by each state education agency — the same exam has different pass lines in different states, which is precisely why no national pass rate exists. That structure is the single most important planning fact for this exam. Your target is not a national benchmark but your state\'s published passing score, which you should look up on your state\'s department-of-education page or the ETS state requirements tool before you study. The exam itself is a 2-hour test of 70 selected-response questions plus four case-based constructed-response questions, and the constructed-response portion is scored by trained raters against rubrics. Because state cut scores typically sit around the mid-150s to mid-160s scaled, a candidate who can sustain a strong essay section and solid selected-response performance clears the line in most states — but verify your state\'s number, because the difference between 155 and 165 changes how much margin you need.',
    source: { label: 'ETS - Praxis Principles of Learning and Teaching: Grades 7-12 (5624)', url: 'https://praxis.ets.org/test/5624.html' },
    caveat: 'ETS reports scaled scores and each state sets its own passing score; there is no single national pass rate to quote.'
  },
  studyPlan: {
    summary: 'The PLT 7-12 (5624) is a 2-hour exam: 70 selected-response questions and four constructed-response items built around student case studies, drawn from the ETS content categories — students as learners (adolescent development, motivation and the learning process), the instructional process (planning, strategies, assessment and communication), professional development, leadership and community (the professional role, legal and ethical requirements, and the school community). A defensible plan runs 40 to 60 hours over three to four weeks. Week one: build the adolescent-development and learning-theory foundation — the cognitive, social and emotional characteristics of secondary students — because the case studies reward knowing how a 14- or 17-year-old learns. Week two: work the instructional-process material: lesson planning, differentiated instruction for mixed-ability secondary classes, and the formative and summative assessment cycle. Week three: study the professional-role content — legal and ethical duties, special-education and IEP processes, and school-community engagement — and begin essay practice. Week four: take two timed practice exams and write at least six constructed responses against the rubrics. The plan is essay-heavy because the four constructed responses are worth a large share of the score and are the most trainable part of the exam.',
    totalHours: '40-60 hours over 3-4 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Learners and learning', tasks: ['Adolescent cognitive, social and emotional development', 'Motivation and the learning process for secondary students', 'Learning theory applied to classroom scenarios'], hours: 12 },
      { label: 'Week 2', focus: 'Instructional process', tasks: ['Lesson planning and differentiation for mixed-ability classes', 'Instructional strategies and classroom communication', 'The assessment cycle: formative, summative, feedback'], hours: 15 },
      { label: 'Week 3', focus: 'Professional role', tasks: ['Legal and ethical requirements for teachers', 'Special education, IEPs and accommodations', 'School-community collaboration and professionalism'], hours: 12 },
      { label: 'Week 4', focus: 'Practice and essays', tasks: ['Two timed practice exams', 'Six constructed responses written against the rubrics', 'Review weak categories and schedule the exam'], hours: 15 }
    ],
    variants: [
      { label: 'Practicing teacher', detail: 'Compress the theory weeks; the professional-role material and essay timing are the highest-yield focus.' },
      { label: 'Career-changer, no classroom time', detail: 'Add 2 weeks observing or tutoring in secondary classrooms; the case studies reward real classroom familiarity.' }
    ]
  },
  prepStrategies: {
    summary: 'The highest-yield strategy for the 5624 is to treat the constructed-response section as a trainable skill: the four case-based essays are scored against published rubrics, and candidates who practise writing them against those rubrics measurably outperform those who only review theory. Write in the structure the rubrics reward — name the principle you are applying, connect it to the case facts, and give a concrete classroom action — and keep each answer around 150-200 words. Second, learn the adolescent-development content deeply enough to apply it: the cases describe secondary students, and the correct answers turn on knowing how adolescent motivation, peer influence and cognitive development operate. Third, use the ETS content categories as your scope map and the free Study Companion (with its sample questions and sample essay responses) as the item-style reference; the rubrics in the Study Companion show exactly how essays are scored. Fourth, take at least two timed practice exams, because the 2-hour window with four essays is a pacing test as much as a knowledge test. Finally, look up your state\'s passing score early and target practice scores comfortably above it, because the state cut line, not a national average, is the number that matters.',
    items: [
      { title: 'Train the essay structure', detail: 'Name the principle, connect it to the case, give a concrete action — against the rubric.' },
      { title: 'Apply adolescent development', detail: 'The cases turn on how secondary students learn, motivate and develop.' },
      { title: 'Use the Study Companion', detail: 'Content categories, sample questions and scored essay examples.' },
      { title: 'Run two timed practice exams', detail: 'Four essays in 2 hours is a pacing test as much as a knowledge test.' },
      { title: 'Target your state\'s cut score', detail: 'Look up your state\'s passing line early; aim practice comfortably above it.' }
    ]
  },
  resourceComparison: {
    summary: 'Praxis PLT 7-12 prep is inexpensive because ETS publishes the authoritative materials at low or no cost. The free Study Companion is the single most important resource: it lists the content categories, provides sample selected-response questions and, crucially, shows sample constructed-response answers with the scores they received, which is the closest available window into the essay grading. ETS also sells the official Praxis PLT study product (roughly $20-$50) with additional practice questions. Third-party options include PLT study guides ($20-$50) and question banks ($20-$80), and teacher-education programs often provide materials to enrolled candidates. Free resources — the Study Companion, the ETS sample items and state department-of-education requirement pages — are sufficient for a disciplined candidate. The exam fee is roughly $130 (confirm at ets.org/praxis), and fees can vary by state. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ETS Study Companion (5624)', values: ['Free', 'Official PDF', 'The authoritative scope and essay rubrics'] },
      { label: 'ETS official PLT study product', values: ['$20-$50', 'Online practice questions', 'Official item-style practice'] },
      { label: 'PLT study guides', values: ['$20-$50', 'Printed or digital book', 'Structured content review'] },
      { label: 'Question banks', values: ['$20-$80', 'Online practice items', 'Selected-response volume'] },
      { label: 'State DOE requirement pages', values: ['Free', 'Official state resources', 'Your state\'s passing score and rules'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the 5624 exam fee is roughly $130; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common PLT 7-12 mistake is studying pedagogy theory and ignoring the constructed-response section: candidates who can define every concept but have never written a case-based essay meet the four essays unprepared and lose a large block of points. The fix is essay practice from week one. The second mistake is studying the wrong level of content: candidates prepare with elementary-focused PLT materials, but the 5624 cases describe secondary classrooms, and adolescent-development reasoning is what the answers reward. Third, many candidates answer the essays with generic advice instead of applying the case facts; the rubrics credit answers that connect principles to the specific student described. Fourth, candidates treat the exam as a knowledge test and neglect pacing — 70 questions plus four essays in 2 hours runs long for the unpractised. Finally, some candidates never look up their state\'s passing score and study toward a vague national target; your state\'s cut line is the number that decides pass or fail, so know it before exam day.',
    items: [
      { mistake: 'Studying theory, not essays', fix: 'Write case-based responses against the rubrics from week one.' },
      { mistake: 'Using elementary-level materials', fix: 'The 5624 cases are secondary classrooms; study adolescent development.' },
      { mistake: 'Giving generic essay advice', fix: 'Connect every answer to the specific facts of the case.' },
      { mistake: 'Neglecting the pacing', fix: '70 questions plus four essays in 2 hours; rehearse the timing.' },
      { mistake: 'Ignoring your state\'s cut score', fix: 'Find your state\'s passing line and target practice above it.' }
    ]
  },
  questionTypes: {
    summary: 'The 5624 is a 2-hour exam with two item formats: 70 selected-response questions and four constructed-response questions. The selected-response items test the content categories directly — adolescent learners, the instructional process, and the professional role. The constructed-response items present student case studies (often a paragraph describing a secondary classroom situation) followed by multi-part questions asking you to identify the issue, apply a principle and propose a response; these are scored by trained raters against the published rubrics. Samples below are editor-written illustrations of the ETS content categories, not live exam items; they show both formats and the secondary-classroom framing of the real items.',
    types: [
      { name: 'Selected-response items', share: '70 of the 74 scored points', detail: 'Direct questions across the learners, instruction and professional-role categories.' },
      { name: 'Constructed-response items', share: 'Four case-based essays', detail: 'Student case studies with multi-part, rubric-scored written answers.' }
    ],
    samples: [
      {
        prompt: 'A high school teacher notices that several students who participate actively in small-group work are reluctant to answer questions in whole-class discussion. The most likely factor is:',
        options: ['A. Social and peer-related concerns that are common during adolescence', 'B. A complete lack of content knowledge', 'C. A hearing impairment that affects all settings equally', 'D. Disinterest in the subject matter'],
        answer: 'A',
        explanation: 'Adolescent social development makes peer evaluation salient; students who engage in small groups may avoid whole-class risk-taking for social reasons. The pattern across settings points to social factors, not knowledge, impairment or interest.'
      },
      {
        prompt: 'A teacher assigns a complex reading and then models a think-aloud, showing how to identify the main argument. This instructional strategy is best described as:',
        options: ['A. Scaffolding the skill through explicit modelling', 'B. Summative assessment of reading', 'C. Classroom management', 'D. Grade-level remediation'],
        answer: 'A',
        explanation: 'Modelling the thinking process of a complex task is explicit scaffolding — it supports students in developing a skill they cannot yet perform independently. It is an instructional strategy, not an assessment, a management technique or remediation.'
      },
      {
        prompt: 'A teacher discovers that a student\'s IEP requires extended time on assessments. The teacher\'s most appropriate action is to:',
        options: ['A. Provide the documented accommodation consistently across assessments', 'B. Apply extended time only on major exams', 'C. Ask the student whether they need the accommodation each time', 'D. Modify the grade for the affected assessments'],
        answer: 'A',
        explanation: 'An IEP is a legal document, and its accommodations must be provided consistently and as written. Applying it selectively, making it conditional on the student asking, or altering grades misreads the teacher\'s legal and ethical obligation.'
      }
    ],
    note: 'Samples are editor-written illustrations of the ETS content categories, not live exam items.'
  },
  examDay: {
    summary: 'The Praxis PLT 7-12 (5624) is a 2-hour computer-based exam taken at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and fee. The exam presents the 70 selected-response items first, then the four constructed-response items; budget roughly 55 minutes for the selected-response block and about 65 minutes for the essays, leaving buffer for review. Type your essays directly into the exam interface; the rubrics reward focused, organised answers, so plan each in a few seconds before writing. Your scaled score appears on screen immediately, with the official score report following. If you do not pass, the retake wait is 21 days. On a pass, the score is valid for 10 years, subject to your state\'s acceptance window, and your state education agency applies its own passing line. The afterwards matters: forward your score to your state\'s licensure system through the ETS score-reporting tools, and keep the score report for your records.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Selected-response block', detail: '70 items; budget ~55 minutes, flag and review.' },
      { time: 'Constructed-response block', detail: 'Four case-based essays; budget ~65 minutes, ~15 minutes each.' },
      { time: 'After submit', detail: 'Scaled score appears on screen; the official report follows.' },
      { time: 'Next', detail: 'Send your score to your state licensure system; note the 10-year validity.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '2 hours for 70 selected-response items and four constructed responses',
      'Retakes require a 21-day wait'
    ],
    afterwards: 'On a pass, your score is valid 10 years subject to your state\'s window; report it to your state education agency. On a fail, wait 21 days and retake after additional essay and category study.'
  }
};

export default data;
