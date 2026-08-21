const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Aquatics & lifeguard certification desk',
    bio: 'Lifeguard course structure and skill requirements come from the American Red Cross official training pages and are revised with each program update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified Red Cross lifeguard course prerequisites, skill stations, written exam, and recertification policy against official Red Cross training pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect around $33,720 at the median for lifeguards and ski patrol (BLS, May 2024) — a part-time, seasonal entry job whose certification is a prerequisite, not a wage multiplier',
    summary: 'The direct answer is that the Red Cross lifeguard certification leads to an occupation BLS reports at a May 2024 median annual wage of $33,720 for lifeguards, ski patrol, and other recreational protective service workers (SOC 33-9092), with the lowest 10 percent under about $24,900 and the highest 10 percent above about $44,600. The honest framing is that most lifeguard jobs are part-time and seasonal — pools, beaches, water parks, and camps — so the annual figure overstates what a typical seasonal hire actually earns, while hourly rates in the mid-teens are common in many regions. The certification itself is a gate for employment, not a pay boost: employers require a current certification to hire you, but the wage is set by the facility, minimum-wage dynamics, and local labour markets rather than by holding the credential. BLS counted about 143,000 lifeguards nationally in 2024 and projects employment to grow a bit faster than average (roughly 6 percent from 2024 to 2034), with about 42,700 openings per year, most from seasonal turnover and workers leaving the occupation. The career-relevant detail is that the certification is also the on-ramp to higher-paying aquatics roles: head lifeguard, waterfront director, swim instructor, and ultimately aquatic facility manager positions, which sit in occupation categories with higher medians. For a teenager or young adult, the practical financial calculus is about stacking the credential across seasons and facilities rather than expecting one seasonal job to support a year; many certified guards work multiple facilities in a summer or combine guarding with instruction shifts. The takeaway: take the course for employability and safety skill, expect seasonal part-time pay in the mid-teens per hour, and use the credential as a step toward supervisory aquatics roles if you want more income.',
    rows: [
      { label: 'Median annual wage, lifeguards & ski patrol', value: '$33,720', note: 'BLS OEWS, May 2024 (SOC 33-9092)' },
      { label: 'Lowest 10 percent', value: '~$24,860', note: 'BLS OEWS, May 2024' },
      { label: 'Highest 10 percent', value: '~$44,600', note: 'BLS OEWS, May 2024' },
      { label: 'Employment, 2024', value: '~143,600 jobs', note: 'BLS Employment Projections, 2024' },
      { label: 'Projected change, 2024-34', value: '+6%', note: 'BLS Employment Projections' }
    ],
    growth: 'BLS projects lifeguard employment to grow about 6 percent from 2024 to 2034, with roughly 42,700 openings per year, most from seasonal turnover.',
    source: { label: 'BLS OEWS — Lifeguards, Ski Patrol, and Other Recreational Protective Service Workers (33-9092)', url: 'https://www.bls.gov/oes/current/oes339092.htm' }
  },
  passRate: {
    headline: 'No official pass rate is published — the real gates are the 300-yard swim, 2-minute tread, and timed brick retrieval, which fail more candidates than the written exam',
    summary: 'The core fact is that the American Red Cross does not publish a pass rate for lifeguard certification, and none is available from a national source, so any percentage you see quoted is anecdotal. What is published and matters far more is the prerequisite skill screening and the graded skill stations, because in practice more candidates fail the physical skills than the written knowledge test. To enter the course you must pass a pre-course skills evaluation that includes swimming 300 yards continuously, treading water for two minutes using only the legs, and completing a timed brick retrieval — retrieving a 10-pound brick from the bottom of the pool and swimming 20 yards with it within a time limit (typically 1 minute 40 seconds). The course then teaches and grades a set of rescue and first-aid skill stations — entries, approaches, active-victim rescues, spinal-injury management, and CPR/AED — with a written exam (commonly 40 to 50 questions, about 80 percent required to pass) and a final skills scenario. Because the physical prerequisites are set at the start, candidates who cannot complete the 300-yard swim or the timed brick retrieval do not continue, which is why honest advice centres on physical preparation before the course, not on memorising answers. The practical preparation plan is to be able to swim the prerequisite distances comfortably before day one, then let the course teach the rescue mechanics. If you are using the certification for employment, note that the Red Cross certification is the most widely recognised in the industry and is accepted by most facilities, but the physical standards are the actual differentiator between candidates who finish and those who do not.',
    source: { label: 'American Red Cross — Lifeguarding course prerequisites', url: 'https://www.redcross.org/take-a-class/lifeguarding' },
    caveat: 'No official pass rate is published; the physical pre-course skills evaluation is the main selection gate.'
  },
  studyPlan: {
    summary: 'Plan for the course itself — roughly 25 to 30 hours total, typically delivered over two to three days in person — plus two to four weeks of swim conditioning before it, because the physical prerequisites decide whether you complete the course at all. The written-knowledge portion of the Red Cross lifeguarding course covers the lifeguard mindset and responsibilities, facility rules and patron surveillance (the 10/20 rule — scanning your zone every 10 seconds and reaching the victim within 20 seconds), rescue techniques for active and passive victims, spinal injury management, first aid, and CPR/AED for adults, children, and infants. Most providers run a condensed schedule: day one focuses on surveillance, rescues, and spinal management; day two on first aid and CPR/AED plus the written exam and final scenario. The highest-yield preparation before day one is twofold: build your swim fitness so the prerequisites are comfortable, and preview the 10/20 surveillance rule and rescue terminology, since these appear throughout the exam. Study the skill-station sequences as ordered procedures — each graded station has a set order of actions (entry, approach, rescue, removal, care), and graders mark the order as much as the technique. Between sessions, practise the rescue flow in your head and review the provided manual; the written exam rewards knowing the specific steps and the rule numbers. After certification, many guards let the knowledge decay, but employers increasingly run their own in-service drills — treating the certification as a starting point rather than a one-time pass is what actually keeps you employable.',
    totalHours: '25-30 course hours + 2-4 weeks of pre-course swim conditioning',
    weeks: [
      { label: 'Weeks 1-2 (before course)', focus: 'Swim conditioning', tasks: ['Swim 300+ yards continuously without stopping', 'Practise treading water using legs only for 2 minutes', 'Work on timed sprints and underwater comfort'], hours: 6 },
      { label: 'Week 3 (course days)', focus: 'Skills + knowledge', tasks: ['Complete all rescue and spinal skill stations', 'Learn the 10/20 surveillance rule cold', 'Take the written exam and final scenario'], hours: 26 },
      { label: 'After certification', focus: 'Employment readiness', tasks: ['Apply to facilities with the certification in hand', 'Prepare for facility-specific in-service drills', 'Note the 2-year certification validity'], hours: 2 }
    ],
    variants: [
      { label: 'Lifeguard Instructor course', detail: 'A separate train-the-trainer course for those who want to teach lifeguarding; requires prior certification and instructor-candidate screening.' },
      { label: 'Waterfront / waterpark add-ons', detail: 'Additional modules for non-pool settings, adding skills for open water or waterpark environments.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably gets candidates through Red Cross lifeguard certification is "train the physical prerequisites before the course, then learn the skill-station sequences as ordered procedures." The single biggest cause of course failure is arriving unable to complete the 300-yard swim or the timed brick retrieval, so conditioning first is non-negotiable. A second proven approach is memorising the 10/20 rule and the surveillance scan pattern, because both the written exam and the in-course scenarios test whether you can articulate and apply it. Third, practise each rescue as a fixed sequence — entry, approach, rescue, removal, care — rather than as isolated techniques, since graders score the order and flow of the skill stations. Fourth, review the CPR/AED ratios and compression depths for adult, child, and infant separately; mixing these up is the most common written-exam error. Fifth, when practising the brick retrieval, focus on your water entry and streamline — candidates who dive cleanly and swim efficiently save the seconds the timed test demands. Finally, treat the final scenario as a graded performance: narrate what you are doing as you do it, because instructors score decision-making and communication, not just physical execution.',
    items: [
      { title: 'Condition the swim first', detail: 'The 300-yard swim and timed brick retrieval fail more candidates than any written question.' },
      { title: 'Learn the 10/20 rule', detail: 'Surveillance every 10 seconds, victim reached within 20 — it appears on the written exam and scenarios.' },
      { title: 'Practise rescues as sequences', detail: 'Graders score entry-approach-rescue-removal-care order, not isolated techniques.' },
      { title: 'Separate the CPR tables', detail: 'Adult, child, and infant compression ratios and depths are distinct; mixing them up is a classic error.' },
      { title: 'Narrate the final scenario', detail: 'Instructors score decision-making and communication in the graded scenario.' }
    ]
  },
  resourceComparison: {
    summary: 'Red Cross lifeguard certification pricing typically runs $250 to $350 for the full course, with the manual and materials included, and the official course is the industry standard that most facilities recognise without question. The comparison below separates the Red Cross course, other nationally recognised providers, facility-sponsored training, and free study references, with prices current to this review. The key buying rule is to confirm the provider is Red Cross-authorized if you want the widely accepted certification, and to ask facilities whether they sponsor training before paying out of pocket.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'American Red Cross Lifeguarding course', values: ['~$250-350', 'In-person course (2-3 days)', 'The industry-standard certification'] },
      { label: 'Facility-sponsored training', values: ['Often free', 'Employer-run course', 'Hiring-season candidates'] },
      { label: 'Red Cross Lifeguarding manual', values: ['Included in course', 'Printed + online', 'Course-day reference and skill review'] },
      { label: 'YMCA / Ellis lifeguard programs', values: ['~$200-350', 'In-person course', 'Candidates targeting those facilities'] },
      { label: 'Swim-coaching clinics', values: ['~$20-60', 'Sessions', 'Building the prerequisite swim skills before the course'] }
    ],
    footnote: 'Prices approximate and dated to this review; Red Cross certification is valid 2 years and requires renewal.'
  },
  commonMistakes: {
    summary: 'The most common mistake is enrolling without the swim fitness, arriving unable to complete the 300-yard continuous swim or the timed brick retrieval and losing the course fee on day one. The second is treating the course as a written-knowledge test and under-practising the skill stations, which are graded on sequence and flow. A third recurring error is confusing the CPR/AED tables for adults, children, and infants — a leading cause of written-exam misses. Candidates also routinely under-practise the rescue-narration habit and freeze in the final scenario, losing points on decision-making and communication rather than technique. Finally, many newly certified guards assume the credential guarantees a job and skip facility-specific in-service drills, then are surprised when employers test their skills again at hiring.',
    items: [
      { mistake: 'Enrolling without swim fitness', fix: 'Complete the 300-yard swim and timed brick retrieval comfortably in practice before day one.' },
      { mistake: 'Ignoring skill-station sequencing', fix: 'Drill each rescue as an ordered procedure; graders score order and flow.' },
      { mistake: 'Mixing up CPR tables', fix: 'Review adult, child, and infant compression ratios and depths as separate tables.' },
      { mistake: 'Freezing in the final scenario', fix: 'Narrate your decisions aloud during practice scenarios so communication is automatic.' },
      { mistake: 'Skipping facility in-service drills', fix: 'Treat certification as the start; employers re-test skills at hiring and in-service.' }
    ]
  },
  questionTypes: {
    summary: 'The Red Cross lifeguard written exam typically contains 40 to 50 multiple-choice questions covering surveillance and the 10/20 rule, rescue techniques, spinal injury management, first aid, and CPR/AED for all age groups, with about 80 percent required to pass. Question formats include direct knowledge items, scenario items asking what you would do first in a described situation, and sequence items asking the correct order of steps. The graded skill stations are the practical half of the assessment: entries, approaches, active and passive victim rescues, spinal management, and a final scenario. The samples below are editor-written illustrations of the standard curriculum, not live exam items.',
    types: [
      { name: 'Surveillance & prevention', share: '~25%', detail: 'The 10/20 rule, scan patterns, facility rules, and drowning recognition.' },
      { name: 'Rescue techniques', share: '~25%', detail: 'Active and passive victim rescues, entries and approaches, equipment use.' },
      { name: 'Spinal injury management', share: '~15%', detail: 'Recognition, immobilisation, and removal sequences.' },
      { name: 'First aid', share: '~15%', detail: 'Injuries, illnesses, and emergency action steps.' },
      { name: 'CPR/AED', share: '~20%', detail: 'Adult, child, and infant CPR and AED use.' }
    ],
    samples: [
      {
        prompt: 'A lifeguard scans a swimming zone every 10 seconds and can reach a victim within 20 seconds. Which rule does this describe?',
        options: ['A. The 10/20 rule', 'B. The rescue sequence rule', 'C. The zone protection rule', 'D. The 3-minute rule'],
        answer: 'A',
        explanation: 'The 10/20 rule: scan your zone every 10 seconds and reach a victim within 20 seconds.'
      },
      {
        prompt: 'An active drowning victim is thrashing in the water. Which rescue should a lifeguard use first?',
        options: ['A. A reach rescue from the deck', 'B. An active-victim front rescue', 'C. A passive-victim rescue', 'D. A spinal-management rescue'],
        answer: 'B',
        explanation: 'For an active victim in the water, the lifeguard performs an active-victim rescue using an appropriate entry and approach.'
      },
      {
        prompt: 'What compression-to-breath ratio does the Red Cross teach for one-rescuer CPR on an adult?',
        options: ['A. 15:2', 'B. 30:2', 'C. 20:2', 'D. 40:2'],
        answer: 'B',
        explanation: 'For an adult, one-rescuer CPR uses 30 compressions to 2 breaths, at about 100-120 compressions per minute.'
      }
    ],
    note: 'Samples are editor-written illustrations of the standard curriculum, not live exam items.'
  },
  examDay: {
    summary: 'Certification day is the final day of the course: you will complete the written exam and the final skills scenario after all skill stations are graded, and you must pass both to earn certification. The core rules are physical — wear comfortable swim attire, goggles, and a towel; the pre-course evaluation happens on day one, and every skill station is performed in the water. Bring your manual for review before the written exam and expect the day to be structured: stations in the morning, written exam mid-day, final scenario last. Most providers require about an 80 percent score on the written exam and a passing grade on every graded skill station, and skills are not "averaged" — failing one critical station means repeating the course section. After passing, you receive a certification card valid for two years, after which you must take a recertification course (shorter than the original). The most useful habit on exam day is narrating your actions during the scenario, since instructors score decision-making as much as execution. If you do not pass a station, ask the instructor exactly which steps were missed so you can correct them on the retry rather than repeating the same sequence.',
    bring: ['Swim attire, goggles, and towel', 'Photo ID', 'Course manual for pre-exam review', 'Comfort with the pre-course swim prerequisites'],
    leave: ['Jewelry or anything that can catch on rescue equipment', 'The assumption that skills are averaged — critical stations must each pass'],
    timeline: [
      { time: 'Day 1', detail: 'Pre-course swim skills evaluation; surveillance and rescue skill stations begin.' },
      { time: 'Day 2', detail: 'Spinal management, first aid, and CPR/AED stations; written exam.' },
      { time: 'Final', detail: 'Graded final scenario combining surveillance, rescue, and care.' },
      { time: 'After passing', detail: 'Receive the 2-year certification card; ask about facility in-service requirements.' }
    ],
    rules: ['~80% required on the written exam', 'Every critical skill station must pass', 'Pre-course swim evaluation on day one', 'Certification valid 2 years, then recertification'],
    afterwards: 'Passing both the written exam and all skill stations earns the Red Cross Lifeguarding certification (2 years); then pursue employment and facility in-service drills, and renew before expiry.'
  }
};

export default data;
