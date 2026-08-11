const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Recreation, scuba & skills-certification desk',
    bio: 'We cover recreational certification programs including PADI professional-level dive courses. Structure and fee facts come from PADI official pages and are revised; wage figures come from the BLS occupational series named by code, and we state plainly when a certification has no direct occupational mapping.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the PADI Divemaster course structure, prerequisites and assessments against PADI official pages; verified BLS recreation wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Divemaster is the first professional dive rating: recreation workers earned about a $34,500 median in May 2024 (BLS)',
    summary: 'The PADI Divemaster rating is the first professional level in the PADI system: a divemaster supervises dive activities, assists instructors, leads certified divers, and works in dive operations. It is a professional rating rather than a job license for a single occupation, so no one BLS SOC code captures it; the salary story is structure-dependent. BLS reported that recreation workers (SOC 39-9032), the occupational group that includes dive staff, earned a median of about $34,500 in May 2024, with the occupation characterized by seasonal and part-time work; dive professionals in resort and liveaboard settings typically earn hourly wages or per-dive/per-course fees, with tips a meaningful part of income, and many divemasters work part-time or seasonally alongside other careers. The honest framing is that divemaster is a professional gateway rather than a high-paying job title: it qualifies a diver to work in the dive industry, is the prerequisite for the Instructor Development Course (which leads to the instructor rating and higher earning potential), and its income value is the entry into an industry where pay scales with certification level, location, season and employer. BLS classifies workers by job duty, not certifications, so no rating maps to a specific wage; the value is the professional access and the career ladder it opens. For a diver building toward a dive-industry career, divemaster is the standard second professional step (after Open Water and professional-level prerequisites), and the honest expectation is that full-time income typically comes at the instructor level or through owning/operating a dive business rather than at the divemaster level itself.',
    rows: [
      { label: 'Recreation workers median, May 2024', value: '~$34,500', note: 'BLS OEWS, SOC 39-9032 (seasonal/part-time)' },
      { label: 'Personal care and service occupations median, May 2024', value: '$35,110', note: 'BLS OEWS occupational group' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'PADI professional ladder', value: 'OWD -> Divemaster -> Instructor', note: 'PADI certification system' }
    ],
    growth: 'Recreation employment is projected to grow about 8 percent from 2024 to 2034 per BLS; dive-industry income varies by location, season and certification level.',
    source: { label: 'BLS Occupational Outlook Handbook - Recreation Workers', url: 'https://www.bls.gov/ooh/personal-care-and-service/recreation-workers.htm' }
  },
  passRate: {
    headline: 'The Divemaster course requires prerequisites (Advanced Open Water + Rescue + 40 logged dives), knowledge reviews, and skill demonstrations; PADI publishes no pass rates',
    summary: 'PADI does not publish a pass-rate statistic for the Divemaster course, and the certification is a mastery-based program rather than a single exam. The prerequisites are fixed: PADI Advanced Open Water Diver (or qualifying equivalent), PADI Rescue Diver, at least 40 logged dives (with documentation), current CPR and first aid certification within the past 24 months, and a medical statement. The course itself includes: knowledge development (the Divemaster manual with knowledge reviews and a final exam - commonly 50 questions with a passing line set by the course standards), a water-skills evaluation (including the 400-meter swim and an 800-meter snorkel swim with mask/fins/snorkel), stamina and rescue exercises, and practical training components (mapping a dive site, conducting dive briefings, supervising and assisting, and the divemaster practical application during real dive activities). The course is instructor-led, and skills are evaluated by demonstration to standard, so completion reflects demonstrated mastery rather than a cohort-based pass rate. The final exam passing line is set in the PADI Divemaster course standards (commonly 75 percent), and candidates who do not meet it can review and retake within the course. After certification, the divemaster can work in dive operations subject to PADI membership requirements. The honest summary is that the bar is a combination of prerequisites, a written final, water-skills standards and demonstrated practical performance, and the prerequisites (especially the logged dives and Rescue certification) are where most candidates who do not finish actually get stuck.',
    source: { label: 'PADI Divemaster course overview', url: 'https://www.padi.com/courses/divemaster' },
    caveat: 'PADI publishes no pass rates; certification requires prerequisites (AOW, Rescue, 40 logged dives, CPR/first aid), a written final, and demonstrated skill mastery.'
  },
  studyPlan: {
    summary: 'The Divemaster course is a professional program that typically runs 4-8 weeks part-time (or an intensive 2-3 week format at resorts), and the plan has two phases: meeting the prerequisites and completing the course. Prerequisite phase (before enrolling): complete the Advanced Open Water Diver course if not held, complete the Rescue Diver course, build the logged-dive count to 40 with quality logbook documentation, and complete current CPR/first aid training - these are fixed requirements and the realistic timeline for a diver without them is several months of diving. Course phase: knowledge development (study the Divemaster manual and complete the knowledge reviews, then the final exam), water skills (train the 400-meter swim and the 800-meter snorkel swim with mask/fins/snorkel, the stamina exercises, and the 20-skill circuit to demonstration standard), and the practical components (site mapping, briefings, supervising and assisting during real dive activities, and the practical application dives). A study plan around the course: before each session, review the relevant manual chapter so the water time is for skills, not learning; practice the swim standards on your own (the 400m swim and 800m snorkel are time standards that reward conditioning); and complete the knowledge reviews as you go rather than at the end. The course fee varies by shop (typically $400-$800 for the course plus materials and equipment; resort courses run higher), and the divemaster must join PADI as a professional member after certification.',
    totalHours: 'Prerequisites (months, if missing) + course (~4-8 weeks part-time)',
    weeks: [
      { label: 'Prerequisites', focus: 'Qualify for the course', tasks: ['Advanced Open Water (if needed)', 'Rescue Diver', '40 logged dives', 'CPR/first aid within 24 months'], hours: 'variable' },
      { label: 'Weeks 1-2', focus: 'Knowledge development', tasks: ['Divemaster manual and knowledge reviews', 'Final exam (commonly 75%)'], hours: 15 },
      { label: 'Weeks 3-5', focus: 'Water skills', tasks: ['400m swim and 800m snorkel standards', '20-skill circuit to standard'], hours: 12 },
      { label: 'Weeks 6-8', focus: 'Practical application', tasks: ['Site mapping and briefings', 'Supervising and assisting; practical dives'], hours: 20 }
    ],
    variants: [
      { label: 'Intensive resort format', detail: 'Resort-based courses compress the program into 2-3 weeks with a full-time schedule.' },
      { label: 'PADI membership', detail: 'After certification, working as a divemaster requires PADI professional membership.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective Divemaster strategies are physical conditioning, prerequisite management, and study discipline. Strategy one: complete the prerequisites early and verify them with the shop before enrolling - the logged-dive count and the Rescue certification are where most candidates stall, and a diver who enrolls without 40 documented dives cannot complete the program. Strategy two: train the physical standards in advance - the 400-meter swim and the 800-meter snorkel swim have time standards that reward conditioning, and the stamina exercises (including the 15-minute tread or float) are harder than they look; pool training before the course converts the water skills from a hurdle into a formality. Strategy three: study the manual chapter by chapter with the knowledge reviews as you go, because the final exam (commonly 75 percent) is drawn from the course materials and cramming at the end underperforms steady review. Strategy four: rehearse the skill circuit - the 20 skills are demonstrated, practiced and evaluated, and divers who practice buoyancy and the rescue scenarios between sessions finish faster. Strategy five: treat the practical components (site mapping, briefings, supervising) as the professional core rather than paperwork, because these are what employers actually evaluate when hiring divemasters. Strategy six: confirm the course fee\u2019s inclusions (materials, equipment, PADI fees) before booking, because shop pricing varies and surprise costs are common.',
    items: [
      { title: 'Verify prerequisites first', detail: 'AOW, Rescue, 40 logged dives, CPR - the common stall point.' },
      { title: 'Train the swim standards', detail: 'Conditioning turns the physical tests into a formality.' },
      { title: 'Study as you go', detail: 'Knowledge reviews each chapter beat final-week cramming.' },
      { title: 'Rehearse the skill circuit', detail: 'Buoyancy and rescue practice between sessions.' },
      { title: 'Confirm fee inclusions', detail: 'Materials, equipment and PADI fees vary by shop.' }
    ]
  },
  resourceComparison: {
    summary: 'The Divemaster resource market is organized around the PADI system and the dive shop delivering the course. The official materials - the PADI Divemaster manual, the eLearning program, the knowledge reviews and the course standards - are provided through the enrolling dive shop and are included in the course fee; the eLearning option (about $150-250 when purchased separately) adds video and interactive study. The course fee itself (typically $400-$800 for the course plus materials at local shops; resort courses run $800-$1,500+) varies by shop and by what is included (equipment rental, materials, PADI registration fees, water time); candidates should get an itemized quote before paying. The PADI professional membership after certification has its own annual fee. Third-party study materials add little because the course is standards-based and the materials are PADI-official. The most valuable "resource" is practice diving: building the logged dives and water time costs what it costs but is a hard prerequisite. The honest ranking: the official materials (included), the course at a reputable shop (the required purchase), and practice dives. Prices here are current as of 2025-26 and vary by shop and region.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Divemaster course (local)', values: ['$400-$800 + materials', 'In-person', 'The complete certification path'] },
      { label: 'PADI eLearning (optional)', values: ['$150-$250', 'Online', 'Self-paced knowledge development'] },
      { label: 'Resort course', values: ['$800-$1,500+', 'In-person intensive', 'Full-time 2-3 week format'] },
      { label: 'Practice dives and equipment', values: ['Varies', 'Diving', 'Building the 40 logged dives'] }
    ],
    footnote: 'Prices dated 2025-26 and vary by shop; confirm fee inclusions and PADI professional membership costs. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common Divemaster mistakes are prerequisite and conditioning failures rather than knowledge failures. Mistake one: enrolling without meeting the prerequisites - the Advanced Open Water, Rescue and 40-logged-dive requirements are fixed, and candidates who book before qualifying either stall or pay for a course they cannot finish. Mistake two: skipping the physical conditioning; the 400-meter swim, the 800-meter snorkel swim and the stamina exercises have standards, and divers who arrive untrained struggle with the water-skills phase. Mistake three: cramming the final exam; the knowledge reviews and final are drawn from the manual, and candidates who study as they go pass comfortably while last-minute crammers retake. Mistake four: treating the practical components (site mapping, briefings, supervising) as paperwork; these are the professional skills employers evaluate, and candidates who rush them miss the point of the rating. Mistake five: ignoring the PADI professional membership requirement; working as a divemaster requires membership with an annual fee, and the career step includes that cost. Mistake six: booking the cheapest course without an itemized quote; surprise costs for materials, equipment and PADI fees are common. Finally, candidates should have a realistic plan for how divemaster fits their income goals, because the rating is a gateway to the instructor level rather than a high-paying job title on its own.',
    items: [
      { mistake: 'Enrolling without prerequisites', fix: 'Complete AOW, Rescue, 40 dives and CPR first.' },
      { mistake: 'Arriving untrained physically', fix: 'Train the swim and stamina standards in advance.' },
      { mistake: 'Cramming the final exam', fix: 'Complete knowledge reviews as you go.' },
      { mistake: 'Rushing the practical components', fix: 'Site mapping, briefings and supervising are the professional core.' },
      { mistake: 'Forgetting PADI membership', fix: 'Working as a divemaster requires professional membership.' }
    ]
  },
  questionTypes: {
    summary: 'The Divemaster course\u2019s academic component is the Divemaster manual with knowledge reviews and a final exam (commonly 50 questions with a passing line set by the course standards, typically 75 percent). Content covers the role and responsibilities of the divemaster, dive supervision and risk management, assisting instructors, organizing dive activities (site selection, dive briefings, emergency assistance plans), equipment, and the business and legal aspects of the professional role. Water-skill and practical evaluations run alongside the academic work. Samples below are editor-written illustrations of the published course content, not live exam items.',
    types: [
      { name: 'Role and responsibilities', share: '~20% of items', detail: 'Supervision, assisting instructors, professional conduct.' },
      { name: 'Risk management and safety', share: '~25% of items', detail: 'Emergency assistance plans, incident prevention.' },
      { name: 'Dive organization', share: '~25% of items', detail: 'Site selection, briefings, dive planning.' },
      { name: 'Equipment and business', share: '~30% of items', detail: 'Equipment care, legal and business aspects.' }
    ],
    samples: [
      {
        prompt: 'A divemaster is leading a dive for certified divers at a site with a moderate current. Which action is most important before the divers enter the water?',
        options: ['A. A thorough dive briefing covering the plan, site, and emergency procedures', 'B. Collecting each diver\u2019s certification card', 'C. Checking the weather forecast only', 'D. Confirming the rental equipment is returned'],
        answer: 'A',
        explanation: 'The dive briefing - plan, site conditions, and emergency procedures - is the core supervision responsibility; the other actions are administrative or secondary.'
      },
      {
        prompt: 'A diver surfaces with symptoms of decompression illness during a supervised dive. What should the divemaster do first?',
        options: ['A. Have the diver breathe from a spare tank', 'B. Activate the emergency assistance plan and seek medical care', 'C. Ask the diver to describe the symptoms in detail before acting', 'D. Continue the dive with the rest of the group'],
        answer: 'B',
        explanation: 'Suspected decompression illness requires activating the emergency assistance plan and arranging medical care; delaying to gather details or continuing the dive is unsafe.'
      },
      {
        prompt: 'Which responsibility distinguishes the divemaster from a recreational diver with the same experience?',
        options: ['A. Supervising and leading other divers', 'B. Owning more equipment', 'C. Diving deeper than 18 meters routinely', 'D. Teaching courses independently'],
        answer: 'A',
        explanation: 'The divemaster\u2019s professional role is supervision and leadership of dive activities; teaching independently is the instructor role, and depth limits apply to all recreational divers.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published course content, not live exam items.'
  },
  examDay: {
    summary: 'The Divemaster course does not have a single exam day; it ends with the practical application dives, which are the certification event. Candidates complete the knowledge development and final exam during the course, pass the water-skills evaluations (including the 400m swim and 800m snorkel standards), and complete the practical components - site mapping, dive briefings, supervising and assisting during real dive activities - under the instructor\u2019s evaluation. On practical days, arrive prepared with the dive gear, follow the dive plan, and demonstrate the professional behaviors (briefing quality, group supervision, emergency readiness) that the instructor evaluates. After the final evaluations are completed to standard, the instructor submits the certification, and PADI issues the Divemaster certification; the new divemaster then joins PADI as a professional member to work in dive operations. Afterwards, build experience assisting instructors and leading dives, and plan the next step on the ladder - the Instructor Development Course - if the goal is a full-time dive career.',
    bring: ['Course materials and logbook', 'Dive gear (included or personal)', 'Completed prerequisites documentation', 'Professional demeanor for supervised dives'],
    leave: ['Unresolved prerequisites - they are fixed', 'Unconditioned physical fitness - the standards are real', 'Assumptions about fee inclusions'],
    timeline: [
      { time: 'Before the course', detail: 'Complete prerequisites (AOW, Rescue, 40 dives, CPR).' },
      { time: 'Weeks 1-2', detail: 'Knowledge development and final exam.' },
      { time: 'Weeks 3-5', detail: 'Water-skills evaluations and skill circuit.' },
      { time: 'Weeks 6-8', detail: 'Practical application dives and evaluations.' },
      { time: 'After certification', detail: 'Join PADI as a professional member; work in dive operations.' }
    ],
    rules: [
      'Prerequisites are fixed: AOW, Rescue, 40 logged dives, CPR/first aid.',
      'The final exam passing line is set in the course standards (commonly 75%).',
      'Water-skill and practical evaluations are to demonstration standard.',
      'Working as a divemaster requires PADI professional membership.'
    ],
    afterwards: 'Join PADI as a professional member, gain experience assisting instructors, and plan the Instructor Development Course for a full-time dive career.'
  }
};

export default data;
