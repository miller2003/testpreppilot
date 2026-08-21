const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Recreation, scuba & skills-certification desk',
    bio: 'We cover recreational certification programs including the PADI Open Water Diver course. Structure and fee facts come from PADI official pages and are revised; wage figures come from the BLS occupational series named by code, and we state plainly when a certification has no direct occupational mapping.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the PADI Open Water Diver course structure, prerequisites and knowledge-development assessment against PADI official pages; verified BLS recreation wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Open Water Diver is a recreational credential, not a job license: recreation workers earned a $34,500 median in May 2024 (BLS)',
    summary: 'The PADI Open Water Diver certification is a recreational scuba credential; it qualifies a person to dive without supervision to a maximum depth of 18 meters (60 feet) with a buddy, but it does not license any occupation. There is therefore no BLS SOC code that corresponds to the certificate itself, and no salary can be attributed to it. The honest framing has two parts. First, for the overwhelming majority of divers, the certification is a leisure credential whose value is personal - access to dive travel, ocean recreation and a global community - and BLS data on recreation workers (SOC 39-9032), which includes dive instructors and resort staff, showed a median annual wage of about $34,500 in May 2024; the occupation group is characterized by seasonal and part-time work, and a dive professional\u2019s income depends heavily on location, season and whether teaching is the primary or secondary job. Second, the certification is a prerequisite for professional pathways: PADI\u2019s career ladder runs from Open Water Diver through Divemaster and Instructor Development, and teaching roles (divemasters and instructors) typically earn hourly wages or per-course fees rather than a salaried median, so BLS\u2019s recreation-worker figure is a broad proxy rather than a dive-specialist wage. BLS classifies workers by job duty, not certifications, so the accurate statement is that the Open Water certificate is infrastructure for a hobby with an optional professional branch; the economic value is in the access it grants, and any income follows the job, not the card.',
    rows: [
      { label: 'Recreation workers median, May 2024', value: '~$34,500', note: 'BLS OEWS, SOC 39-9032 (includes seasonal/part-time)' },
      { label: 'Personal care and service occupations median, May 2024', value: '$35,110', note: 'BLS OEWS occupational group' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'Open Water Diver depth limit', value: '18 m / 60 ft', note: 'PADI standard, buddy diving' }
    ],
    growth: 'Recreation employment is projected to grow about 8 percent from 2024 to 2034 per BLS, with seasonal variation in dive-industry roles.',
    source: { label: 'BLS Occupational Outlook Handbook - Recreation Workers', url: 'https://www.bls.gov/ooh/personal-care-and-service/recreation-workers.htm' }
  },
  passRate: {
    headline: 'The Open Water Diver course has no published pass rate; certification requires passing knowledge reviews, a 50-question final, confined-water skills, and 4 open-water dives',
    summary: 'PADI does not publish a pass-rate statistic for the Open Water Diver course, and the structure of the course makes cohort pass rates inherently variable because much depends on the student and the instructor. Certification requires completing five components: knowledge development (study of the PADI Open Water Diver manual or eLearning, ending in knowledge reviews and a 50-question final assessment with a passing score of 75 percent), a confined-water session (pool or confined open water) where skill circuits are demonstrated and repeated until the instructor is satisfied, and four open-water dives conducted over at least two days, during which the student must demonstrate 20 core skills. The final assessment is closed-book in most delivery formats and must be completed to 75 percent before certification; the practical point is that skill demonstrations are mastery-based - students repeat a skill until they can perform it to the standard, rather than receiving a single pass/fail score. The knowledge final covers dive physics, dive physiology, equipment, dive planning, and safety procedures. Because the course is instructor-led and the skills are mastered through repetition, the realistic completion picture is that most students who complete the full course and the open-water dives certify, while those who struggle tend to drop out before the open-water phase or take more sessions to master skills; medical and comfort issues (ear clearing, water comfort) are the most common reasons students do not finish. The honest summary is that the bar is a 75 percent knowledge score plus demonstrated skill mastery, and the course is designed so that persistence, not aptitude, is the main predictor.',
    source: { label: 'PADI Open Water Diver course overview', url: 'https://www.padi.com/courses/open-water-diver' },
    caveat: 'PADI does not publish pass rates; certification requires 75% on the final assessment plus demonstrated skill mastery in confined and open water.'
  },
  studyPlan: {
    summary: 'The PADI Open Water Diver course is a structured program delivered through a PADI dive shop, and the study plan runs in parallel with the course schedule rather than before it. The course has three phases. Phase one, knowledge development: study the Open Water Diver manual or complete the PADI eLearning (about 8-12 hours of self-paced study), covering dive principles - pressure and buoyancy physics, ear and sinus equalization, equipment assembly and function, dive planning tables or dive computer use, and emergency procedures; the eLearning includes videos and quizzes, and the knowledge reviews prepare the student for the 50-question final. Phase two, confined water: typically 3-5 pool or confined-water sessions (or a structured day), during which the student learns 20 skills - mask clearing, regulator recovery, alternate air source use, buoyancy control, fin pivots, and emergency ascents - each practiced until mastered. Phase three, open water: four dives over at least two days at a local site (or a resort for vacation courses), in which the skills are demonstrated in real conditions. A realistic preparation plan is to complete the knowledge development before the confined-water sessions (2-3 weeks of study if eLearning is spread out), review the 20-skill list before each confined session, and arrive for open-water days well-rested and hydrated. Students who are not confident swimmers should take a swim-refresher before the course; PADI requires basic water comfort, and the medical statement must be completed before any water session.',
    totalHours: '~20-30 hours total course time (study + pool + 4 dives), often across 2-4 weeks',
    weeks: [
      { label: 'Before the course', focus: 'Medical and logistics', tasks: ['Complete the medical questionnaire', 'Book the course and confirm the schedule'], hours: 1 },
      { label: 'Weeks 1-2', focus: 'Knowledge development', tasks: ['Work the manual or eLearning', 'Complete knowledge reviews', 'Take the 50-question final (75%)'], hours: 10 },
      { label: 'Weeks 2-3', focus: 'Confined water', tasks: ['Attend pool sessions', 'Practice the 20-skill circuit to mastery'], hours: 6 },
      { label: 'Weeks 3-4', focus: 'Open water', tasks: ['Four dives over 2+ days', 'Demonstrate skills in real conditions'], hours: 10 }
    ],
    variants: [
      { label: 'Referral courses', detail: 'Students can complete knowledge and confined water at home, then open-water dives at a resort via a referral form.' },
      { label: 'eLearning vs manual', detail: 'eLearning adds video and interactive quizzes; the manual is the print alternative. Both end in the same final.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective Open Water Diver strategies are about preparation before the water and communication during it. Strategy one: complete all knowledge development before the first pool session, because the confined-water sessions move fast and students who are still learning equipment names and dive physics during pool time fall behind on skill practice. Strategy two: master ear equalization early - practice gentle equalization on land, learn to ascend slightly if equalization is blocked, and tell the instructor immediately if a sinus or ear issue persists, because ear discomfort is the most common reason students do not finish. Strategy three: learn the 20-skill list in advance and rehearse the sequence mentally, since each skill is demonstrated, practiced, and then evaluated during the course. Strategy four: trust the buddy system - communication signals, pre-dive checks, and staying with your buddy are taught and tested, and students who treat skills as solo exercises miss the course\u2019s core safety culture. Strategy five: practice buoyancy control deliberately, because it is the skill that makes every other skill easier and the one instructors most often ask students to repeat. Strategy six: on open-water days, manage exposure and hydration - arrive rested, avoid alcohol, and follow the surface-interval and dive-planning rules exactly, because the course evaluates judgment as much as skill. Finally, book the course with a PADI shop whose schedule matches your timeline; referral options exist if travel or time splits the course.',
    items: [
      { title: 'Finish knowledge first', detail: 'Complete eLearning/manual before the pool; water time is for skills.' },
      { title: 'Solve ear equalization early', detail: 'Practice gentle equalization; tell the instructor about any issue.' },
      { title: 'Rehearse the 20-skill list', detail: 'Each skill is demonstrated, practiced, and evaluated.' },
      { title: 'Embrace the buddy system', detail: 'Signals, pre-dive checks and staying together are core skills.' },
      { title: 'Prioritize buoyancy', detail: 'It makes every other skill easier and is the most-repeated skill.' }
    ]
  },
  resourceComparison: {
    summary: 'The Open Water Diver resource market is anchored by PADI\u2019s official materials, which are included in the course price at most shops. The course fee (typically $250-$500 for the full local course, or more with eLearning; resort courses run higher) generally includes the manual or eLearning access, pool/confined sessions, instructor time, the final assessment, and the certification card processing; rental equipment is often included in the local course price but may be extra at resorts. PADI eLearning (about $200 when purchased separately) adds videos and interactive quizzes to the manual content. The PADI Open Water Diver Manual (about $60-$80) is the print reference. Third-party prep apps and summary sites exist and are unnecessary: the course content is included, the final is drawn from the official materials, and third-party materials occasionally state outdated dive tables. Students should confirm what the quoted price includes - eLearning versus manual, equipment rental, and any extra costs for open-water transport - before booking, because shop pricing varies widely. The honest ranking: enroll in the official course with a reputable shop, use the included materials, and add nothing beyond possibly a swim refresher. Prices here are current as of 2025-26 and vary by shop and region.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'PADI Open Water Diver course (local)', values: ['$250-$500 typical', 'In-person + study', 'The complete certification path'] },
      { label: 'PADI eLearning', values: ['~$200 (if separate)', 'Online self-paced', 'Flexible knowledge development'] },
      { label: 'PADI Open Water Diver Manual', values: ['$60-$80', 'Print', 'Reference during and after the course'] },
      { label: 'Resort/referral course', values: ['$400-$800+', 'In-person', 'Vacation or travel-split training'] },
      { label: 'Third-party prep apps', values: ['Free-$20', 'Mobile', 'Unnecessary; stick to PADI materials'] }
    ],
    footnote: 'Prices dated 2025-26 and vary by shop; confirm what the course fee includes. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common mistakes in the Open Water Diver course are preparation and comfort issues rather than knowledge failures. Mistake one: arriving at the pool session without having started knowledge development; students who are still learning terminology during confined water lose practice time on the skills. Mistake two: ignoring the medical questionnaire; certain conditions (asthma that is not well controlled, cardiac conditions, ear and sinus problems, some medications) require physician sign-off, and failing to address it delays or ends the course. Mistake three: hiding ear or sinus trouble during the course; the correct move is to tell the instructor, because equalization issues are common and manageable with guidance, while pushing through can end the course and create a safety risk. Mistake four: treating the skills as a checklist to survive rather than mastery; skills are repeated until they are demonstrated to standard, so students who rush skill practice end up repeating sessions. Mistake five: skipping buoyancy practice and focusing on "cool" skills; buoyancy is the foundation and the most-evaluated skill, and weak buoyancy drags down every other demonstration. Mistake six: scheduling open-water dives immediately after confined water without rest or adequate surface intervals; fatigue and poor hydration cause most open-water-day problems. Finally, students who book the cheapest course without checking what it includes (rentals, eLearning, open-water transport) often pay more in the end.',
    items: [
      { mistake: 'Starting pool work without knowledge', fix: 'Complete eLearning/manual first.' },
      { mistake: 'Ignoring the medical questionnaire', fix: 'Answer honestly and get physician sign-off if needed.' },
      { mistake: 'Hiding ear or sinus trouble', fix: 'Tell the instructor; equalization issues are manageable.' },
      { mistake: 'Rushing skill practice', fix: 'Master each skill; repetition is the design.' },
      { mistake: 'Neglecting buoyancy', fix: 'It is the foundation of every other skill.' }
    ]
  },
  questionTypes: {
    summary: 'The Open Water Diver course\u2019s academic component is a 50-question multiple-choice final assessment with a passing score of 75 percent, preceded by knowledge reviews throughout the manual or eLearning. Content covers dive physics (pressure and buoyancy, gas laws in practical terms), dive physiology (equalization, lung overexpansion, decompression sickness basics), dive equipment (tanks, regulators, buoyancy compensators, exposure protection), dive planning (depth, time, air supply, dive tables or dive computers, surface intervals), and safety procedures (buddy checks, emergency ascents, lost-buddy procedures). Samples below are editor-written illustrations of the published course content, not live exam items.',
    types: [
      { name: 'Dive physics', share: '~25% of items', detail: 'Pressure, buoyancy, gas behavior in practical terms.' },
      { name: 'Dive physiology', share: '~25% of items', detail: 'Equalization, lung overexpansion, decompression basics.' },
      { name: 'Equipment', share: '~20% of items', detail: 'Tanks, regulators, BCD, exposure protection.' },
      { name: 'Dive planning and safety', share: '~30% of items', detail: 'Depth/time/air limits, tables or computers, emergency procedures.' }
    ],
    samples: [
      {
        prompt: 'A diver who cannot equalize the ears during descent should do which of the following?',
        options: ['A. Continue descending slowly', 'B. Ascend slightly until the ears clear, then descend again', 'C. Surface immediately and end the dive', 'D. Force equalization harder'],
        answer: 'B',
        explanation: 'The correct procedure is to ascend a small amount to reduce pressure, attempt gentle equalization, and continue only when the ears clear; forcing equalization can injure the ear.'
      },
      {
        prompt: 'Which statement about the alternate air source is correct?',
        options: ['A. It is used only by the instructor', 'B. It allows a buddy to breathe if their primary regulator fails', 'C. It replaces the surface marker buoy', 'D. It is checked only after the dive'],
        answer: 'B',
        explanation: 'The alternate air source is the second-stage regulator used by a buddy in an out-of-air emergency; it is part of the pre-dive buddy check.'
      },
      {
        prompt: 'During a pre-dive buddy check, which item is NOT part of the standard sequence?',
        options: ['A. Air supply turned on and verified', 'B. Releases and inflator checked', 'C. Final OK signal between buddies', 'D. Equipment purchase receipt shown'],
        answer: 'D',
        explanation: 'The buddy check verifies air, releases, inflators and a final OK; receipts are not part of the dive preparation.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published course content, not live exam items.'
  },
  examDay: {
    summary: 'The Open Water Diver course does not have a single exam day; it ends with the open-water dives, which are the certification event. Students complete knowledge development and the 50-question final assessment before the water sessions (or during the eLearning phase), demonstrate skills in confined water, and then complete four open-water dives over at least two days with their instructor. On open-water days, students arrive at the dive site with the gear included in the course (or their own), complete a pre-dive buddy check, and follow the instructor\u2019s dive plan; each dive has a specific skill focus, and the final dive typically includes a navigation exercise and a simulated emergency. Students must complete the medical statement before any water session, must not dive if they feel unwell or congested, and must follow the surface-interval rules between dives. After the four dives are completed to the instructor\u2019s satisfaction, the instructor submits the certification, and PADI issues the Open Water Diver card (digital and physical) - the first certifying dives are typically logged in the student\u2019s logbook. Afterwards, new divers should plan the next level (Adventure Diver or Advanced Open Water Diver) and, importantly, dive regularly or take a refresher course after any long gap, because skill decay is real and the certification does not expire but proficiency does.',
    bring: ['Completed medical statement', 'Course materials and logbook', 'Swimwear, towel, and exposure protection as the shop directs', 'Approved dive gear (usually included) or personal gear'],
    leave: ['Illness, congestion, or hangover - do not dive', 'Jewelry that interferes with mask seal', 'Valuables at the dive site'],
    timeline: [
      { time: 'Before the course', detail: 'Complete the medical questionnaire and book the schedule.' },
      { time: 'Weeks 1-2', detail: 'Knowledge development and the 50-question final (75%).' },
      { time: 'Weeks 2-3', detail: 'Confined-water sessions: the 20-skill circuit to mastery.' },
      { time: 'Weeks 3-4', detail: 'Open-water dives 1-4 over 2+ days.' },
      { time: 'After dive 4', detail: 'Instructor submits; PADI issues the certification card.' }
    ],
    rules: [
      'The medical statement must be completed before any water session.',
      'Never dive with congestion or illness; equalization issues get guidance, not silence.',
      'Buddy checks and dive plans are part of every open-water dive.',
      'The certification does not expire, but long gaps justify a refresher.'
    ],
    afterwards: 'Receive the Open Water Diver card (digital and physical), log the dives, and plan the next certification or a refresher after any long gap.'
  }
};

export default data;
