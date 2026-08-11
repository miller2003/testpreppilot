const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Fitness & wellness credentialing desk',
    bio: 'Yoga Alliance registration requirements come from the Yoga Alliance official pages and are revised with each standards update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the RYT-200 training-hour requirements and registration process against Yoga Alliance official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect yoga-teacher earnings in the fitness-instructor range — $46,180 median (BLS, May 2024) — with most RYT-200 teachers combining classes with other income, and pay heavily dependent on studio revenue share and private clients',
    summary: 'The direct answer is that an RYT-200 (Registered Yoga Teacher, 200-hour) credential does not have its own BLS occupation, but the closest category, fitness trainers and instructors (SOC 39-9031), earned a May 2024 median annual wage of $46,180, with the lowest 10 percent under about $23,000 and the highest 10 percent above about $77,000. The honest framing is that the yoga-teaching income distribution is wide and right-skewed: most RYT-200 teachers teach part-time — a few classes a week at $30 to $60 per class at studios, or $15 to $30 per head in revenue-share models — while full-time teachers build private-client books, workshops, and retreats that can push earnings well above the median. BLS counted about 856,000 fitness trainers and instructors in 2024 and projects about 13 percent employment growth from 2024 to 2034, much faster than average, reflecting continued demand for fitness instruction. The credential\u2019s role is positional: Yoga Alliance registration is the industry-standard baseline that studios and employers check when hiring, but it is a registry, not a licence — it certifies that you completed a 200-hour training from a registered yoga school, not that you are a licensed professional. The practical read is to treat the 200-hour training as the entry investment (typically $2,000 to $4,000 over several months), expect earnings to be modest at first and highly variable, and plan the income stack — studio classes, privates, workshops, and corporate or online offerings — before you quit a day job. The 200-hour credential is also the prerequisite for the 300-hour advanced training that leads to RYT-500 and higher-rate teaching, so the long-term income path runs through continued training and specialisation.',
    rows: [
      { label: 'Median annual wage, fitness trainers & instructors', value: '$46,180', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 39-9031)' },
      { label: 'Lowest 10 percent', value: 'less than $23,500', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $77,000', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+13%', note: 'BLS Employment Projections' },
      { label: 'The credential itself', value: 'Registry, not a licence', note: 'Yoga Alliance registers completed 200-hour trainings' }
    ],
    growth: 'BLS projects about 13% growth for fitness trainers and instructors from 2024 to 2034, much faster than average, with roughly 90,000 annual openings.',
    source: { label: 'BLS OOH — Fitness Trainers and Instructors', url: 'https://www.bls.gov/ooh/personal-care-and-service/fitness-trainers-and-instructors.htm' }
  },
  passRate: {
    headline: 'There is no pass rate — RYT-200 is a training-hour credential, not an exam; completion of a Yoga Alliance-registered 200-hour program is what registers you, and no national test exists',
    summary: 'The core fact is that there is no RYT-200 exam and therefore no pass rate: the Registered Yoga Teacher credential is a registration, not a certification earned by testing. To register as RYT-200 you must complete a 200-hour teacher training at a Yoga Alliance-registered yoga school (RYS), covering the organisation\u2019s curriculum standards — techniques, training and practice; teaching methodology; anatomy and physiology; yoga philosophy, lifestyle, and ethics; and practicum — and the school assesses your completion through its own in-training evaluations, including teaching practice, rather than through any national examination. Because Yoga Alliance is a voluntary registry (not a government licence), "passing" means your training provider confirms you completed the hours and met its requirements, and then you pay the registration fee to be listed. What is published and matters instead is the standards document: the 200-hour curriculum breakdown, the requirement that trainings include supervised teaching practice, and the ethics expectations. The practical implication is that your choice of training school is the single decision that determines your credential\u2019s quality — a well-regarded school with rigorous teaching practice prepares you to actually teach, while a fast, low-contact "certification" may leave you registered but unemployable. The honest advice is to vet the RYS (check the lead trainer\u2019s experience, observe a class, ask about teaching-practice hours) as seriously as you would vet a professional exam prep, because the credential\u2019s value lives in the training itself. Note also that Yoga Alliance registration is a registry of trainings completed, and its standards evolve — check the current requirements on the official site before enrolling, since curriculum hour allocations have been revised in recent years.',
    source: { label: 'Yoga Alliance — RYT 200 requirements', url: 'https://www.yogaalliance.org/' },
    caveat: 'No exam or pass rate exists; registration is based on completing a 200-hour training at a registered school.'
  },
  studyPlan: {
    summary: 'Plan for a 200-hour training program spread over 3 to 6 months (the standard formats are multi-weekend intensives, 8-to-10-week evening courses, or month-long immersions), plus 20 to 40 hours of independent practice between sessions, and expect the training itself to be the credential — there is no final exam to cram for. The Yoga Alliance 200-hour curriculum allocates hours across five categories: techniques, training and practice (asana, pranayama, meditation); teaching methodology (sequencing, cueing, adjustments); anatomy and physiology; yoga philosophy, lifestyle, and ethics; and practicum (teaching practice with feedback). The most effective study approach is to treat the training as apprenticeship: practise daily, teach mock classes as early as the program allows, and journal your teaching feedback. Before the training starts, build a baseline practice of 2 to 3 sessions per week so you can engage with the physical material rather than chase it; the single biggest cause of student struggle is arriving under-practised. During the training, keep a teaching log — every sequence you practise teaching, every adjustment you try, every piece of cueing feedback — because the practicum hours are what employers ask about in interviews. After graduation, register with Yoga Alliance (registration is separate from the training and carries its own fee and annual renewal), then start the income-building phase: sub classes at studios, teach free community classes to build references, and set up a private-client and online offering. Budget the first 6 to 12 months as the ramp where earnings are thin, because that is the phase most new teachers underestimate.',
    totalHours: '200 training hours over 3-6 months + daily personal practice',
    weeks: [
      { label: 'Before training', focus: 'Practice baseline', tasks: ['Practise yoga 2-3x per week', 'Attend classes at the school you plan to train with', 'Read one anatomy or philosophy book'], hours: 15 },
      { label: 'Training months', focus: '200-hour curriculum', tasks: ['Complete all technique and methodology modules', 'Log teaching-practice hours with feedback', 'Practise daily and journal feedback'], hours: 200 },
      { label: 'After graduation', focus: 'Registration + income', tasks: ['Register with Yoga Alliance', 'Sub classes and teach community classes', 'Build private and online offerings'], hours: 20 }
    ],
    variants: [
      { label: 'RYT-300 / RYT-500', detail: 'Advanced registrations requiring additional training hours (300 or 500 total), typically for teachers specialising or teaching teacher trainings.' },
      { label: 'Specialty certifications', detail: 'Yin, prenatal, restorative, and other niche trainings that stack on the 200-hour base.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that makes a 200-hour training worth its cost is "practise before, teach early, and log everything," and the single biggest error is choosing a school for convenience or price without vetting the lead trainer and teaching-practice component. A second proven approach is starting the teaching habit inside the training: volunteer for mock teaching from week one, because the practicum hours and feedback loops are where the skill is built, and employers hire from demonstrated teaching ability, not the certificate. Third, build a personal practice journal and teaching log — sequences, cueing language, adjustments, and student questions — because those notes become your lesson library for your first years of teaching. Fourth, study the anatomy and philosophy modules rather than coasting through them; employers and students both probe these in interviews, and the difference between a well-prepared new teacher and a certificate-holder shows exactly there. Fifth, use the training to define a niche (restorative, vinyasa, beginners, seniors) so you graduate with a marketable identity instead of "generic yoga teacher." Finally, treat registration as the beginning: Yoga Alliance registration is an annual renewal with continuing-education expectations, and studios increasingly ask about continuing education, so plan your first advanced or specialty training within the first two years.',
    items: [
      { title: 'Vet the school, not just the price', detail: 'The lead trainer\u2019s experience and teaching-practice hours determine the credential\u2019s real value.' },
      { title: 'Teach from week one', detail: 'Mock teaching and feedback loops build the skill employers actually hire for.' },
      { title: 'Keep a teaching log', detail: 'Sequences, cueing, and adjustments become your first lesson library.' },
      { title: 'Study anatomy and philosophy deeply', detail: 'Employers and students probe both; the gap shows in interviews.' },
      { title: 'Graduate with a niche', detail: 'A defined specialisation makes you marketable instead of generic.' }
    ]
  },
  resourceComparison: {
    summary: 'The 200-hour training is the dominant cost — typically $2,000 to $4,000 — and the registry fee is a smaller recurring cost, so the comparison below separates the training itself, the registration, and the continuing-education stack, with prices current to this review. The buying rule is to spend the budget on a rigorous registered school with real teaching practice, and treat the registry fee as the small ongoing cost of being listed.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: '200-hour teacher training (RYS)', values: ['~$2,000-4,000', '3-6 month program', 'The credential itself'] },
      { label: 'Yoga Alliance registration', values: ['~$50-115/yr', 'Online registry', 'Being listed as RYT-200'] },
      { label: 'Continuing education workshops', values: ['~$100-500 each', 'Workshops/short trainings', 'Renewal requirements + specialisation'] },
      { label: '300-hour advanced training', values: ['~$3,000-6,000', 'Long-form program', 'RYT-500 pathway'] },
      { label: 'Business/marketing courses for teachers', values: ['~$50-300', 'Online courses', 'Building private and online income'] }
    ],
    footnote: 'Prices approximate and dated to this review; only trainings at Yoga Alliance-registered schools qualify for registration.'
  },
  commonMistakes: {
    summary: 'The most common mistake is choosing a 200-hour program on price or convenience and discovering the teaching-practice component is thin — the credential registers you, but the training determines whether anyone hires you. The second is treating graduation as the finish line rather than the start of the income ramp, then quitting when the first months pay little. A third recurring error is neglecting the practicum and feedback process, graduating without real teaching reps, and freezing in a first studio sub. Candidates also routinely skip the business side — no private-client pipeline, no online presence, no niche — and then compete with generic teachers for the same low-rate studio classes. Finally, many new teachers let registration lapse or skip continuing education, losing the RYT listing that studios check.',
    items: [
      { mistake: 'Buying the cheapest training', fix: 'Vet the school\u2019s teaching-practice hours and lead trainer before enrolling.' },
      { mistake: 'Expecting immediate income', fix: 'Plan a 6-12 month ramp: subs, community classes, privates, online.' },
      { mistake: 'Skipping the practicum reps', fix: 'Teach mock classes from week one; hire happens from demonstrated ability.' },
      { mistake: 'Ignoring the business side', fix: 'Build a niche, private pipeline, and online presence during training.' },
      { mistake: 'Letting registration lapse', fix: 'Keep registration current and plan continuing education for renewal.' }
    ]
  },
  questionTypes: {
    summary: 'There is no written exam for RYT-200, so "question types" here describe what training schools actually assess: teaching-practice demonstrations (you sequence and teach a class to peers), written assignments on sequencing and philosophy, anatomy quizzes, and feedback-based practical evaluations during the practicum. The standards define what schools must cover, and a rigorous school will test your ability to cue, adjust, and sequence, not just your attendance. The samples below are editor-written illustrations of the kinds of assessment common in 200-hour trainings, not live exam items.',
    types: [
      { name: 'Teaching practicum', share: '~40%', detail: 'Teaching a full or partial class to peers with trainer feedback.' },
      { name: 'Sequencing assignments', share: '~20%', detail: 'Designing class sequences for defined goals and populations.' },
      { name: 'Anatomy & physiology', share: '~15%', detail: 'Quizzes on movement, alignment, and contraindications.' },
      { name: 'Philosophy & ethics', share: '~15%', detail: 'Written reflection on philosophy and professional ethics.' },
      { name: 'Technique practice', share: '~10%', detail: 'Assessment of asana, pranayama, and meditation practice.' }
    ],
    samples: [
      {
        prompt: 'Which teaching cue is most appropriate for guiding students into a safe forward fold?',
        options: ['A. "Force your forehead to your knees"', 'B. "Lengthen the spine on the inhale, hinge from the hips"', 'C. "Bounce aggressively at the end range"', 'D. "Hold the breath while folding"'],
        answer: 'B',
        explanation: 'Lengthening the spine on the inhale and hinging from the hips protects the lower back — the core of safe cueing.'
      },
      {
        prompt: 'A student reports a wrist injury. Which adjustment is most appropriate?',
        options: ['A. Remove wrist-bearing poses or modify with fists', 'B. Increase time in wrist balance poses', 'C. Have the student leave class', 'D. Apply deep pressure to the wrist'],
        answer: 'A',
        explanation: 'Modifying or removing wrist-bearing poses respects the injury and keeps the student practising safely.'
      },
      {
        prompt: 'What is the primary purpose of the practicum component in a 200-hour training?',
        options: ['A. To fill training hours', 'B. To practise teaching with feedback', 'C. To test flexibility', 'D. To memorise Sanskrit names'],
        answer: 'B',
        explanation: 'The practicum exists to build teaching skill through supervised teaching practice and feedback.'
      }
    ],
    note: 'Samples are editor-written illustrations of common training assessments, not live exam items.'
  },
  examDay: {
    summary: 'There is no single exam day for RYT-200 — the credential is earned through the training program\u2019s ongoing assessments, ending typically in a final teaching practicum where you teach a full class to peers and trainers, plus any written components your school requires. The core expectations: attend the training\u2019s required hours (attendance records matter to the school and to Yoga Alliance), complete the practicum teaching hours with feedback, and satisfy the school\u2019s final assessments. On final-practicum day, arrive with a prepared sequence, arrive early to set up, and expect to teach the full class as your trainer evaluates cueing, adjustments, pacing, and student safety. After the school confirms completion, you register with Yoga Alliance: create an account, pay the registration fee, and submit your training credentials for listing as RYT-200. Keep your training certificate and any transcripts, since studios and employers ask for proof. The most useful habits: rehearse your final sequence twice in the week before, practise the cueing aloud, and on the day, teach the class rather than narrate it — presence is what the evaluator grades.',
    bring: ['Your prepared sequence and class plan', 'Comfortable teaching attire', 'Training log and practicum records'],
    leave: ['Notes you plan to read during the final practicum', 'The assumption that attendance alone completes the credential'],
    timeline: [
      { time: 'Training', detail: 'Complete the 200-hour curriculum and practicum over 3-6 months.' },
      { time: 'Final practicum', detail: 'Teach a full class to peers with trainer evaluation.' },
      { time: 'Registration', detail: 'Submit credentials and pay the fee to register as RYT-200.' },
      { time: 'After', detail: 'Start the income ramp: subs, community classes, privates.' }
    ],
    rules: ['Training must be at a Yoga Alliance-registered school', 'Practicum hours required with feedback', 'Registration carries an annual renewal'],
    afterwards: 'Completing the training and registering yields RYT-200 status; the listing is renewable annually and is the baseline studios check when hiring.'
  }
};

export default data;
