const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Occupational safety & health training desk',
    bio: 'This desk covers OSHA Training Institute courses. Course structure, contact hours and completion requirements come from the OSHA Training Institute Education Center course pages, which are administered by regional centers rather than a single national body; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When no national pass rate or fee is published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the OSHA 3115 course structure, contact hours and completion requirements against multiple OSHA Training Institute Education Center listings, and wage context against BLS OOH Occupational Health and Safety Specialists and Technicians, May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$83,910 median for occupational health and safety specialists (BLS, May 2024)',
    summary:
      'The direct answer is that the closest official occupation to the OSHA 3115 student profile — Occupational Health and Safety Specialists, SOC 19-5011 — had a May 2024 median wage of $83,910, and the broader Specialists and Technicians group (19-5011 and 19-5012 combined) had a median of $78,900. OSHA 3115 is a specialist-level course: it is an OSHA Training Institute (OTI) Education Center course on the Fall Protection Standard for construction, typically taken by safety managers, competent persons, trainers and compliance staff who go on to assess fall protection compliance and develop fall protection programs — which is specialist work, not technician work, so the $83,910 specialist figure is the right benchmark. The distribution is wide and setting-sensitive: BLS puts the lowest 10 percent of specialists below $50,610 and the highest 10 percent above $130,460, and pay varies by industry, with hospitals at the high end and construction and manufacturing in the middle. BLS counted 163,700 jobs in the combined specialists-and-technicians occupation in 2024 and projects 12 percent growth from 2024 to 2034 — much faster than the 3 percent average — with about 18,300 openings a year, and the agency explicitly notes the continued emphasis on worker safety and wellness as a demand driver. The course itself is one credential in a larger safety-career stack — it does not change your BLS classification, it deepens your competence within an occupation that is growing faster than average. The honest framing is that the wage you benchmark is the role, not the course, and the course is a step on a ladder that also includes the OSHA 510/511 and the trainer-level credentials.',
    rows: [
      { label: 'Median annual wage, occupational health and safety specialists', value: '$83,910', note: 'BLS OOH, SOC 19-5011, May 2024' },
      { label: 'Median annual wage, specialists and technicians combined', value: '$78,900', note: 'BLS OOH, SOC 19-5011/19-5012, May 2024' },
      { label: 'Lowest 10 percent, specialists', value: 'Below $50,610', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent, specialists', value: 'Above $130,460', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '163,700 jobs', note: 'BLS OOH Quick Facts, 2024' }
    ],
    growth: 'BLS projects 12 percent growth for occupational health and safety specialists and technicians from 2024 to 2034, with about 18,300 openings a year.',
    source: {
      label: 'BLS Occupational Outlook Handbook - Occupational Health and Safety Specialists and Technicians',
      url: 'https://www.bls.gov/ooh/healthcare/occupational-health-and-safety-specialists-and-technicians.htm'
    }
  },
  passRate: {
    headline: 'OSHA publishes no national pass rate for 3115 — the completion standard is full attendance plus a written knowledge assessment',
    summary:
      'The direct answer is that no national pass rate exists for OSHA 3115 Fall Protection, because the course is administered independently by OSHA Training Institute Education Centers across the country rather than by a single national examining body, and OSHA does not collect or publish a nationwide pass statistic. What is published, and consistent across centers, is the completion standard: students must attend the course in full — OTI attendance policy requires 100 percent attendance, with make-up work only for less than 20 percent missed and a full re-attend beyond that — and complete a written knowledge assessment at the end of the course. Some centers publish their own passing threshold for that assessment: the Chesapeake Region Safety Council, which runs 3115 and a companion Fall Protection Trainer course, states that students must pass the exam with an 80 percent or higher to attend the trainer course. But that is a center-specific requirement, not a national standard, and it applies to the trainer add-on rather than to 3115 completion itself. The course is typically delivered over three days — most centers list 18 contact hours — though the framing of the "trainer course" in some marketing reflects pairing the 3-day 3115 with the separate 1-day Fall Protection Trainer course. The honest headline is therefore the published cut that does exist: full attendance plus the written assessment, with an 80 percent threshold published at some centers for progressing to trainer-level work. Because no pass-rate data is published anywhere, we have left the rate itself unstated rather than quoting a number.',
    source: {
      label: 'OSHA Training Institute Education Centers - OSHA 3115 Fall Protection course listings',
      url: 'https://www.osha.gov/otiec'
    },
    caveat:
      'No national pass rate is published for OSHA 3115. The published completion standard is full attendance plus a written knowledge assessment; some centers require 80 percent or higher on that assessment to progress to the Fall Protection Trainer course.'
  },
  studyPlan: {
    summary:
      'OSHA 3115 is a three-day, 18-contact-hour course rather than a self-study exam, so the "study plan" is really a preparation plan: arrive able to absorb a dense regulatory course and leave able to pass the written assessment and apply the standard. Because attendance is a hard completion requirement — OTI policy requires 100 percent attendance with make-up work only for under 20 percent missed — the first priority is clearing three consecutive days and arriving rested. The course covers the OSHA Fall Protection Standard for construction (29 CFR 1926 Subpart M) plus an overview of fall protection methods: principles of fall protection, components and limitations of fall arrest systems, OSHA standards and policies, workshops on inspecting and using fall protection equipment, residential construction fall protection, training requirements, and developing a fall protection program. Preparation should include reading 29 CFR 1926 Subpart M before the course so the classroom material lands on a framework rather than from scratch, reviewing the difference between fall prevention systems (guardrails, safety nets) and fall arrest systems, and knowing the competent person concept — because the course builds on the 510/511 standard-and-training baseline that many centers recommend as a prerequisite even though 3115 lists no formal prerequisite. The written assessment at the end is based on the course content, so the highest-yield in-course habit is to review each day\u2019s material the same evening rather than letting it accumulate. Centers deliver the course in person or as live instructor-led online sessions, and fees run roughly $680 to $800 at most centers.',
    totalHours: '18 contact hours over 3 days, plus 6-10 hours of pre-course reading',
    weeks: [
      {
        label: 'Before the course (1-2 weeks)',
        focus: 'Pre-course foundation',
        tasks: [
          'Read 29 CFR 1926 Subpart M — the fall protection standard the course is built around',
          'Review the difference between fall prevention (guardrails, safety nets) and fall arrest systems',
          'Learn the competent person concept and how it appears in the standard',
          'Clear three consecutive days for full attendance — attendance is a hard completion requirement'
        ],
        hours: '6-10 hrs total'
      },
      {
        label: 'Day 1',
        focus: 'Principles and the standard',
        tasks: [
          'Attend the full session covering principles of fall protection and the scope and application of the standard',
          'Take detailed notes on system components and the limitations of fall arrest systems',
          'Ask how each topic applies to the construction scenarios you see at work',
          'Review the day\u2019s material the same evening'
        ],
        hours: '6 hrs'
      },
      {
        label: 'Day 2',
        focus: 'Equipment, workshops and residential',
        tasks: [
          'Participate in the equipment inspection and use workshops — these feed the written assessment and the practical skills',
          'Cover residential construction fall protection and the training requirements of the standard',
          'Connect the passive and active system content to developing a fall protection program',
          'Review the day\u2019s material and practice the assessment format'
        ],
        hours: '6 hrs'
      },
      {
        label: 'Day 3',
        focus: 'Programs and written assessment',
        tasks: [
          'Attend the fall protection program development content and the final review',
          'Take the written knowledge assessment at the end of the course',
          'If your center sets an 80 percent threshold for the trainer add-on, aim well above it',
          'Collect your certificate of completion and any CEUs the center reports'
        ],
        hours: '6 hrs'
      }
    ],
    variants: [
      { label: 'No 510/511 background', detail: 'Add reading of the OSHA 510 construction standards fundamentals before the course; 3115 lists no formal prerequisite but builds on the standards baseline.' },
      { label: 'Adding the Fall Protection Trainer course', detail: 'Some centers pair the 3-day 3115 with a separate 1-day Trainer course and require an 80 percent or higher on the 3115 assessment to attend it; register for both if your goal is trainer-level work.' },
      { label: 'Live online delivery', detail: 'Many centers offer 3115 as live instructor-led online sessions; attendance requirements and the written assessment still apply, so plan for the same three-day commitment.' }
    ]
  },
  prepStrategies: {
    summary:
      'The strategy that reliably gets students through OSHA 3115 is "arrive with the standard read, treat attendance as non-negotiable, and review daily", because the course is a three-day, 18-contact-hour delivery where the written assessment tests the material covered in the classroom and attendance is a hard requirement. Second, read 29 CFR 1926 Subpart M before the course — the classroom lectures move at a pace that assumes some familiarity, and students who have seen the standard absorb the course material far better than those encountering it cold. Third, focus your preparation on the distinction the course is built around: fall prevention systems (guardrails, safety nets, warning lines) versus fall arrest systems (full-body harnesses, lanyards, anchorage), including the components and limitations of each — these are the conceptual spine of the assessment. Fourth, do not treat the equipment workshops as optional; the inspection-and-use workshops are where the practical content that appears on the written assessment is taught. Fifth, review each day\u2019s material the same evening, because the assessment covers all three days and the third day\u2019s program-development content builds on the first two. Finally, if your goal is trainer-level work, confirm your center\u2019s 80 percent threshold on the assessment and aim well above it, and verify the center\u2019s fee and delivery format — fees run roughly $680 to $800 and formats include in-person and live online.',
    items: [
      {
        title: 'Read the standard before the course',
        detail: 'Read 29 CFR 1926 Subpart M in the weeks before. The classroom moves at a pace that assumes familiarity, and prior reading is the strongest predictor of absorbing the course.'
      },
      {
        title: 'Treat attendance as non-negotiable',
        detail: 'OTI policy requires 100 percent attendance. Clear three consecutive days; make-up work is only available for under 20 percent missed.'
      },
      {
        title: 'Master prevention vs arrest',
        detail: 'The course is built around fall prevention (guardrails, safety nets, warning lines) versus fall arrest (harnesses, lanyards, anchorage), including the components and limitations of each.'
      },
      {
        title: 'Engage in the equipment workshops',
        detail: 'The inspection-and-use workshops teach the practical content that appears on the written assessment. Participate fully rather than observing.'
      },
      {
        title: 'Review daily, not at the end',
        detail: 'The written assessment covers all three days. Review each day\u2019s material the same evening so the third day builds on a settled foundation.'
      },
      {
        title: 'Confirm your center\u2019s thresholds',
        detail: 'Some centers require 80 percent on the assessment to progress to the Fall Protection Trainer course. Verify the threshold, fee and delivery format at registration.'
      }
    ]
  },
  resourceComparison: {
    summary:
      'OSHA 3115 is a course, not a self-study exam, so the resource comparison is about choosing a delivery center rather than buying prep materials — the course fee, format and location are the meaningful variables. The course is taught by OSHA Training Institute Education Centers, and each center sets its own schedule, delivery format and fee: listings we reviewed run roughly $680 to $800 for the three-day course, with some centers including lunch and student materials and others charging separately. Delivery formats include in-person classroom and live instructor-led online sessions; the online format removes travel cost but still requires the same three-day attendance commitment and a proctored written assessment. The authoritative resource is the standard itself, 29 CFR 1926 Subpart M, which is free from OSHA and worth reading before the course. OSHA\u2019s own fall protection training materials and the OTI course description are free and useful orientation. There is no meaningful commercial prep course for 3115 because the assessment is written from the course content — the highest-yield "resource" is the center\u2019s own course materials, which are included in the fee. Some employers pay for 3115 as part of a safety professional\u2019s development, and the course feeds the OSHA Construction Safety and Health certificate programs, so confirm reimbursement before registering. Prices below are representative listings as of mid-2026 and vary by center.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'OSHA 3115 Fall Protection (OTI Education Center course)', values: ['~$680-$800 (varies by center)', '3-day, 18-contact-hour course, in-person or live online', 'The course itself — attendance plus written assessment'] },
      { label: '29 CFR 1926 Subpart M (the standard)', values: ['Free', 'Federal regulation text', 'Pre-course reading — the framework the course builds on'] },
      { label: 'OSHA fall protection training materials', values: ['Free', 'OSHA web pages and publications', 'Orientation before the course'] },
      { label: 'Fall Protection Trainer course (companion)', values: ['Additional fee set by center', '1-day trainer add-on', 'Trainer-level work after passing 3115 with the center\u2019s threshold'] },
      { label: 'OSHA 510/511 construction standards', values: ['Course fee per center', '4-day standards courses', 'The standards baseline many 3115 students already hold'] }
    ],
    footnote:
      'Course fees and schedules are set independently by each OSHA Training Institute Education Center and vary by location and delivery format; prices listed are representative as of mid-2026. We rank nothing by commission.'
  },
  commonMistakes: {
    summary:
      'The most common mistake on OSHA 3115 is treating it as a self-study certification and skipping the attendance requirement: the course credit is earned by attending all three days in full, and OTI policy requires make-up work only for under 20 percent missed — candidates who arrive late or leave early lose the completion. The second mistake is arriving without reading the standard, which leaves the classroom material landing on no framework and makes the written assessment harder than it needs to be. Third, students confuse fall prevention with fall arrest systems on the assessment, mixing up guardrails and safety nets with harnesses and anchorage — the core distinction the course is built around. Fourth, candidates treat the equipment workshops as optional when they teach the practical content the assessment draws from. Fifth, students assume the written assessment is a formality; at centers that set an 80 percent threshold for the trainer add-on, a passing-but-mediocre score blocks trainer-level progression. Finally, candidates register for the "trainer course" without checking whether they are enrolling in the 3-day 3115 plus the separate 1-day Trainer course — they are independent registrations at most centers, and the trainer course has its own attendance and threshold requirements.',
    items: [
      { mistake: 'Missing the attendance requirement', fix: 'OTI policy requires 100 percent attendance. Clear three full days and arrive on time every day; late arrival risks the completion.' },
      { mistake: 'Arriving without reading the standard', fix: 'Read 29 CFR 1926 Subpart M before the course so the classroom material lands on a framework rather than from scratch.' },
      { mistake: 'Confusing prevention and arrest systems', fix: 'Learn the distinction cold: prevention (guardrails, safety nets, warning lines) versus arrest (harnesses, lanyards, anchorage) and the limitations of each.' },
      { mistake: 'Skipping the equipment workshops', fix: 'The inspection-and-use workshops teach the practical content the written assessment draws from. Participate fully.' },
      { mistake: 'Assuming the assessment is a formality', fix: 'Some centers require 80 percent or higher to progress to the trainer course. Aim well above the threshold, not at it.' },
      { mistake: 'Confusing 3115 with the trainer course', fix: 'The 3-day 3115 and the 1-day Fall Protection Trainer course are independent registrations at most centers — register for both separately if you want trainer-level work.' }
    ]
  },
  questionTypes: {
    summary:
      'OSHA 3115 does not publish a national question-type breakdown because it is a course with a written knowledge assessment written by each OTI Education Center from its own curriculum, delivered at the end of the three-day, 18-contact-hour course. What is consistent across centers is the shape: the assessment tests the course content — principles of fall protection, the components and limitations of fall arrest systems, the OSHA Fall Protection Standard and policies, equipment inspection and use, residential construction fall protection, training requirements, and fall protection program development — with multiple-choice and applied items drawn from the classroom material and workshops. The samples below are editor-written illustrations of the kind of applied item the course supports, written from the published course description, not live assessment items from any center. The honest guidance is to treat the assessment as a test of whether you can apply the standard to real construction situations — identify the hazard, select the compliant control, and explain what the standard requires — rather than a recall exercise, and to review each day\u2019s material the same evening because the assessment covers the full three days.',
    types: [
      { name: 'Knowledge items', share: 'A core share', detail: 'The standard, system components, and the limitations of fall arrest systems drawn from the course content.' },
      { name: 'Applied items', share: 'The distinguishing style', detail: 'A construction scenario with a fall hazard; the item asks for the compliant control or what the standard requires.' },
      { name: 'Equipment items', share: 'From the workshops', detail: 'Inspection and use of fall protection equipment — what to look for and how a system is correctly configured.' },
      { name: 'Program items', share: 'From the program-development content', detail: 'Elements of a compliant fall protection program and the training requirements of the standard.' }
    ],
    samples: [
      {
        prompt: 'Workers are performing framing on a residential roof where the eave height exceeds the threshold the standard requires fall protection. Which approach is the primary means the standard contemplates for protecting them?',
        options: [
          'A. A warning line system alone',
          'B. Conventional fall protection such as guardrails, safety nets or a personal fall arrest system',
          'C. A safety monitor alone',
          'D. No protection because residential construction is exempt'
        ],
        answer: 'B',
        explanation:
          'The standard requires conventional fall protection — guardrails, safety nets or a personal fall arrest system — for workers exposed to falls above the threshold height, including residential construction since the residential exemption was removed. A is wrong because a warning line alone does not protect workers who must work beyond it. C is wrong because a safety monitor alone is a fallback for specific low-slope work, not the primary means. D is wrong because residential construction is no longer exempt.'
      },
      {
        prompt: 'During an inspection, a worker\u2019s full-body harness is found with a frayed lanyard and a bent snap hook. What is the correct action?',
        options: [
          'A. Continue using it until the end of the shift',
          'B. Remove the harness from service immediately and tag it out of use',
          'C. Repair the lanyard with tape',
          'D. Use it only for short-duration work'
        ],
        answer: 'B',
        explanation:
          'Damaged fall protection equipment must be removed from service immediately and tagged or taken out of use; frayed lanyards and bent snap hooks are defects that defeat the system. A is wrong because continued use exposes the worker to a failed system. C is wrong because field repairs with tape are not an acceptable fix for damaged components. D is wrong because the equipment is defective regardless of the duration of use.'
      },
      {
        prompt: 'A fall protection program must include, at minimum, which elements under the standard\u2019s training and program requirements?',
        options: [
          'A. Training for workers exposed to fall hazards and the specific fall protection system in use',
          'B. A written policy that lists every possible fall hazard on every site',
          'C. A safety monitor at all times on every job',
          'D. Annual equipment replacement'
        ],
        answer: 'A',
        explanation:
          'The program must ensure workers exposed to fall hazards are trained on the hazards and on the specific fall protection system they use. B is wrong because the standard requires training tied to the system in use, not an exhaustive written hazard inventory. C is wrong because a safety monitor is not universally required. D is wrong because the standard requires inspection and maintenance of equipment, not blanket annual replacement.'
      }
    ],
    note: 'Samples are editor-written illustrations of the applied item style the OSHA 3115 written assessment supports, based on the published course description; they are not live assessment items from any OTI Education Center.'
  },
  examDay: {
    summary:
      'On the final day of OSHA 3115 you attend the program-development content and take the written knowledge assessment that completes the course, at the same OTI Education Center venue or live-online session you attended the first two days. The completion standard is the assessment at the end of the third day plus full attendance across the course; OTI policy requires 100 percent attendance, with make-up work available only for under 20 percent missed and a full re-attend beyond that, so the "exam day" pressure is really about the whole three-day attendance record. Bring photo identification, which centers require for check-in, and any course materials you used across the first two days. The assessment is written from the course content, so the highest-yield in-course habit is reviewing each evening rather than letting material accumulate. After the assessment, completing the course earns a certificate of completion, and the course carries continuing-education credit — typically reported as IACET CEUs or similar — that feeds safety credential requirements such as the OSHA Construction Safety and Health certificate programs. If your center requires 80 percent or higher to progress to the Fall Protection Trainer course, your score on this assessment determines eligibility, so aim well above the threshold. The afterwards matters: record the completion, bank the CEUs, and confirm any trainer-course registration you planned alongside 3115.',
    bring: [
      'Photo identification for check-in',
      'Your course materials and notes from the first two days',
      'Any registration confirmation the center requires'
    ],
    leave: [
      'Phones and personal devices during the assessment session',
      'The assumption that attendance alone completes the course — the written assessment is part of the standard',
      'Study materials from before the course, which are not relevant to the assessment content'
    ],
    timeline: [
      { time: 'Before the course', detail: 'Read 29 CFR 1926 Subpart M and confirm your center\u2019s fee, delivery format and any 80 percent trainer threshold.' },
      { time: 'Days 1-2', detail: 'Attend in full, participate in the equipment workshops, and review each day\u2019s material the same evening.' },
      { time: 'Day 3', detail: 'Attend the program-development content, then take the written knowledge assessment at the end of the course.' },
      { time: 'After the assessment', detail: 'Completion earns the certificate and CEUs; a score at or above your center\u2019s trainer threshold also unlocks the Fall Protection Trainer course.' }
    ],
    rules: [
      '100 percent attendance is required; make-up work is available only for under 20 percent missed',
      'A written knowledge assessment completes the course',
      'Some centers require 80 percent or higher on the assessment to progress to the trainer course',
      'Photo identification is required at check-in',
      'The 3-day 3115 and the 1-day Trainer course are independent registrations'
    ],
    afterwards:
      'On completion, record the certificate and bank the CEUs, and confirm any planned trainer-course registration. The course strengthens your ability to assess fall protection compliance and build fall protection programs — the specialist work the occupation demands — and it feeds the OSHA Construction Safety and Health certificate programs if you are on that ladder.'
  }
};

export default data;
