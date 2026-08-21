// Depth content for: nic-cosmetology-practical
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Beauty, trades & skilled-licensure desk',
    bio: 'This guide is compiled and maintained by our skilled-licensure desk, which covers exams that sit between a vocational program and a state licence. The NIC Cosmetology Practical Examination is the performance counterpart to the written theory exam, and it is the one candidates most often underestimate because they have done the services hundreds of times in school. The catch is that the exam grades a specific, written procedure — section order, timing, sanitation checkpoints and the mannequin-and-tool setup — not your salon intuition. We cite the NIC Candidate Information Bulletin and name the testing vendor and the state board where details differ, and we state plainly that some states have eliminated the practical entirely or replaced it with a different format. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam structure, section sequence and timing were taken from the NIC Cosmetology Practical Candidate Information Bulletin and cross-checked against state-board-hosted CIBs; wage data from the BLS Occupational Outlook Handbook.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$35,420 median for hairdressers, hairstylists and cosmetologists (BLS, May 2024)',
    summary:
      'The Bureau of Labor Statistics does not track a separate "cosmetologist" profession; the closest official classification is Hairdressers, Hairstylists and Cosmetologists, SOC 39-5012, and that is the occupation the NIC Cosmetology Practical Examination gates. Holding the licence the practical and theory exams together unlock is what lets you perform these services for pay in every U.S. state, so the practical is not a formality — it is half of the credential that makes the wage data below reachable, and treating it as the easy sibling of the written exam is the mistake that fails experienced stylists. The May 2024 median was $35,420 a year, or $17.03 an hour. The range is wide and shaped by how the work is paid: a large share of cosmetologists are on commission or booth-rent, so reported wages capture a part-time and entry-heavy workforce rather than a full-time median earner, and the highest 10 percent earned more than $33.76 an hour while the lowest 10 percent earned under $11.82. BLS counted 651,200 jobs in 2024 and projects 5 percent growth from 2024 to 2034, about average, with roughly 84,200 openings a year from both growth and replacement as workers leave personal-appearance work. The practical exam matters here because turnover is high and entry routes stay open, but the licence alone does not raise earnings — building a client book and, for many, specializing in colour, extensions or chemical texture is what moves you toward the top decile, and those specialties are exactly the services the practical scores. BLS lists the typical entry credential as a postsecondary nondegree award and notes every state licenses the occupation, which is why a hands-on practical, where your state still requires one, remains the gate rather than a paperwork step.',
    rows: [
      { label: 'Median annual wage, hairdressers/hairstylists/cosmetologists', value: '$35,420', note: 'BLS Occupational Outlook Handbook, May 2024 ($17.03/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $11.82/hr', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $33.76/hr', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '651,200 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~84,200 per year', note: 'BLS OOH Job Outlook, 2024-34' },
      { label: 'Projected employment change', value: '+5% (2024-2034)', note: 'BLS OOH Job Outlook, about average' }
    ],
    growth: '+5% projected 2024-34 (about average), with ~84,200 openings a year; the practical exam is half the licence that unlocks the occupation, but earnings track clientele and commission structure rather than the credential itself',
    source: {
      label: 'BLS Occupational Outlook Handbook — Barbers, Hairstylists, and Cosmetologists',
      url: 'https://www.bls.gov/ooh/personal-care-and-service/barbers-hairstylists-and-cosmetologists.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'NIC publishes no national pass rate — and some states no longer require a practical at all',
    summary:
      'The National-Interstate Council of State Boards of Cosmetology does not publish a national pass rate for its practical cosmetology examination, and neither do the testing vendors that deliver it. As with the written exam, this is structural rather than an oversight: NIC produces a model practical that states adopt, modify or replace, and each member board sets its own passing standard and reports its own outcomes, so there is no single figure that means "the cosmetology practical pass rate" the way a vendor-owned test might publish one. The model practical is scored section by section against a detailed rubric — work-area preparation, infection control checkpoints, and the technical execution of each service — and state boards set the overall cut, commonly near 75 percent of available points, with any single critical-safety failure (for example, a blood-exposure procedure done incorrectly, or a sanitation lapse) able to produce an automatic failure regardless of the accumulated score. What complicates any pass-rate figure further is that several states have moved away from a hands-on practical altogether: California, Massachusetts, Mississippi and Florida, among others, have at points eliminated or drastically restructured the practical portion, so the "NIC practical" a candidate faces in one state may not exist in another and the pool of comparable outcomes is small and inconsistent. The honest statement is that there is no single published pass-rate statistic for the NIC practical exam, and the numbers that actually govern you are your state board\'s scoring rubric, its critical-fail rules, and whether your state even requires the practical format at all — all of which you must confirm with your own board rather than assuming a national average applies to you.',
    source: {
      label: 'NIC Candidate Information Bulletin (cosmetology practical) and state-member board policies',
      url: 'https://www.nictesting.org/'
    },
    caveat:
      'No national or vendor-published pass rate exists for the NIC Cosmetology Practical Examination. We have deliberately left the pass-rate table empty and reported the verifiable facts instead: the exam is scored on a section rubric, state boards set the cut (commonly near 75 percent), a critical-safety failure can auto-fail the exam, and some states have eliminated the practical. Always confirm your own board\'s current requirement.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The NIC practical is a performance exam, and the planning mistake candidates make is rehearsing the services as if they were in a salon rather than executing a written procedure against a clock and a rubric. The model practical is organized into ten core domain sections performed on a mannequin (a full-size mannequin head, never a mini mannequin) with a defined work time for each: Work Area and Client Preparation (15 min), Thermal Curling (10 min), Haircutting (35 min), Work Area and New Client Preparation (15 min), Chemical Waving (20 min), Predisposition and Strand Test (10 min), Highlighting with Foil (15 min), Hair Colour Retouch (10 min), Virgin Hair Relaxer (15 min), and Blood Exposure Procedure (10 min). The section sequence is not arbitrary — the board interleaves a fresh work-area setup before the chemical services so that infection control is demonstrated repeatedly, and the exam is failed on sanitation lapses as readily as on technique, which is why a candidate who does beautiful hair but skips a disinfection checkpoint can still fail. The plan below runs six weeks at roughly 6-8 hours a week and assumes you have completed your state-mandated training, so this is procedure-and-timing rehearsal rather than skill acquisition; if you are still building the hands, your school clinic should carry that, and these weeks should reproduce the exact section order, timing and checkpoint routine the Candidate Information Bulletin specifies for your state. Note that your state may list a different section set or different timers, so treat the NIC model above as the common pattern and confirm the specifics with your own board before you lock in the schedule.',
    totalHours: '40-50 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Setup, mannequin and sanitation routine',
        tasks: [
          'Obtain your state board\'s practical CIB and write down the exact section order, per-section time limits, and the tools and products the exam supplies versus what you must bring',
          'Acquire the correct mannequin head (full-size, no mini) and mount it securely as the exam requires',
          'Drill the work-area and client-prep routine until disinfecting the station and implements is automatic and precedes every service',
          'Buy EPA-registered disinfectant WIPES — sprays are prohibited in the exam room, and this is a common, avoidable failure'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Haircutting and thermal curling under the clock',
        tasks: [
          'Haircutting (35 min): section, elevate and execute to a specified length and shape, and clean up the perimeter precisely within the time',
          'Thermal curling (10 min): place and heat-style within the short window, protecting the hair and the mannequin',
          'Run each service on a timer repeatedly; the practical fails candidates on time as often as on technique',
          'Re-disinfect the work area between services exactly as the rubric demands'
        ],
        hours: '7-9 hrs/week'
      },
      {
        label: 'Week 4',
        focus: 'Chemical services — waving, colour, relaxer, foil',
        tasks: [
          'Chemical waving (20 min) and virgin hair relaxer (15 min): mix, apply and time per the procedure, with correct sectioning',
          'Hair colour retouch (10 min) and highlighting with foil (15 min): apply at the correct points without overlapping or missing slices',
          'Predisposition and strand test (10 min): perform the skin test and strand test exactly as written — these are safety-critical and rubric-heavy',
          'Practice the fresh work-area and new-client prep (15 min) that the CIB inserts before the chemical block'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Week 5',
        focus: 'Blood exposure and full-run rehearsal',
        tasks: [
          'Blood exposure procedure (10 min): demonstrate the correct response to a cut or contamination — a critical-safety item that can auto-fail the exam if wrong',
          'Run the entire ten-section sequence in one sitting with the real per-section timers, taking only the breaks the format allows',
          'Have an instructor or peer score you against the CIB rubric, not against "did it look good"',
          'Log the sections where you drifted over time or skipped a sanitation checkpoint'
        ],
        hours: '7-9 hrs'
      },
      {
        label: 'Week 6',
        focus: 'Weakest sections and logistics',
        tasks: [
          'Re-run only the sections that lost points or time in the full rehearsal',
          'Confirm your vendor (PSI, Prov, or Prometric), location, ID rules, and what the exam supplies versus what you bring',
          'Pack your kit and wipes the night before; verify the mannequin meets spec',
          'One light walk-through of the section order, then rest'
        ],
        hours: '5-7 hrs'
      }
    ],
    variants: [
      { label: 'Still in cosmetology school', detail: 'Four weeks at 5 hrs/week. Your clinic builds the hands; use these weeks only to rehearse the CIB section order, the per-section timers and the sanitation checkpoints. Confirm your state\'s section list, because it may differ from the NIC model.' },
      { label: 'Graduate retaking after a gap', detail: 'Eight weeks at 6 hrs/week. The services are familiar but the procedural discipline has faded, and the practical fails on skipped checkpoints as readily as on technique. Weight early weeks to the sanitation routine and the short-timer sections (thermal curling, retouch, blood exposure).' },
      { label: 'Applicant in a state that dropped the practical', detail: 'Zero weeks of practical prep — verify with your board whether a hands-on practical is still required. Several states (e.g., California, Massachusetts, Mississippi, Florida at various points) have eliminated or restructured it; your effort belongs entirely to the written exam and any state-specific requirement instead.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The practical exam rewards procedural fidelity, not salon flair, and this is the point that experienced stylists most often miss. You are graded against a written rubric that repeats the same checkpoints — work-area setup, disinfection, client protection, correct product application and timing — across ten sections, and the candidates who fail are usually the ones who performed the service "their way" rather than the board\'s way, because a technically lovely haircut done in the wrong section order or without the required sanitation step still loses rubric points. Preparation should therefore be built around reproducing the exact Candidate Information Bulletin procedure and the clock, not around getting better at doing hair, and the most efficient habit is to rehearse the full ten-section sequence in the mandated order rather than practicing services in isolation. The disinfectant rule deserves special attention because it is a logistics failure that costs nothing to avoid: the exam room prohibits aerosol sprays, so only EPA-registered wipes satisfy the requirement, and a candidate who arrives with the wrong sanitizer can be forced to stop or fail before the first service. Equally, the short ten-minute sections — thermal curling, the predisposition and strand test, and the colour retouch — are where the clock quietly defeats people who are slow to start, so timed rehearsal of those sections matters more than another hour on haircutting. The blood-exposure procedure is critical-safety and can override an otherwise passing score, so it is drilled as automatic rather than improvised. The strategies below turn that discipline into a weekly routine.',
    items: [
      {
        title: 'Rehearse the section order, not just the services',
        detail: 'The NIC model interleaves a fresh work-area and new-client prep before the chemical block, and the sequence is part of the exam. Candidates who practice services in isolation but have never run them in the mandated order lose time reorienting and miss the sanitation checkpoint that opens the chemical section. Walk the full ten-section sequence repeatedly.'
      },
      {
        title: 'Use EPA-registered disinfectant WIPES, never spray',
        detail: 'The exam room prohibits aerosol disinfectants, and arriving with only a spray bottle is a real, documented way to fail before you begin. Bring EPA-registered disinfectant wipes for surfaces and wipes or the approved method for implements. This is a logistics item you control entirely in advance.'
      },
      {
        title: 'Train against the per-section timers',
        detail: 'Sections range from 10 minutes (thermal curling, predisposition/strand test, colour retouch) to 35 minutes (haircutting). The practical fails candidates on time as often as on technique. Run every service on its real timer until the pacing is reflexive, and protect the short sections especially — ten minutes disappears.'
      },
      {
        title: 'Treat the blood-exposure procedure as auto-fail territory',
        detail: 'The blood exposure procedure is a critical-safety item. An incorrect response to a cut or contamination can fail the entire exam regardless of your accumulated score. Drill the correct sequence — stop, protect, disinfect, dispose, document — until it is automatic, because you will not have time to think it through on the day.'
      },
      {
        title: 'Disinfect between every section, on cue',
        detail: 'The rubric awards infection control repeatedly, and the model inserts work-area prep before both the opening and the chemical block precisely to test it. Wiping the station and implements between services is not busywork; it is scored. Make the disinfect-step a habit that fires automatically at the start and end of every section.'
      },
      {
        title: 'Use the correct mannequin and mount',
        detail: 'The exam requires a full-size mannequin head, not a mini, and it must be mounted so you can work all angles. Practicing on the wrong setup means your angles, sectioning and tool reach are off on the day. Confirm the spec in your CIB and rehearse on the exact type you will be given or bring.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'For the practical, the highest-value "resource" is not a book — it is your state board\'s practical Candidate Information Bulletin and a correctly specified mannequin and kit that you rehearse on, because the exam grades a procedure and a setup, not a concept you can read about, and the CIB is the only document that tells you the exact section list, timers and tool specification you will face. Commercial practical-prep tends to be school-run or video-based rather than a single must-buy product, and the one purchase that actually matters is the full-size mannequin head and the EPA-registered disinfectant wipes that meet exam specification; everything else you likely already own from your training kit. Your school clinic, if you are still enrolled, is the cheapest and most realistic place to build the hands, because rehearsing on the exact mannequin type and under a timed, rubric-scored eye is closer to the real sitting than any video. The Milady or third-party practical-prep videos are useful for visualizing each section\'s procedure and timing, but they should be vetted against your own CIB, since a generic video may show a different section order or a different state\'s rules and quietly mislead you. The one thing not to economize on is the mannequin and wipes: arriving with a mini mannequin or with spray disinfectant only is a completely avoidable failure that no study guide can fix on the day. The table below compares the resources by what they are actually for, and we do not rank by commission, because the search results for "cosmetology practical prep" are dominated by vendors selling products you may not need.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'State board practical Candidate Information Bulletin (CIB)', values: ['Free', 'PDF from the state board or NIC site', 'The authoritative section list, timers, tool/supply spec and rubric for your state'] },
      { label: 'Full-size mannequin head + clamp', values: ['Varies; often $30-100+', 'Physical kit', 'The single non-negotiable supply that must meet exam spec — no mini mannequin'] },
      { label: 'EPA-registered disinfectant wipes', values: ['~$10-20', 'Physical supply', 'Required; sprays are prohibited in the exam room' ] },
      { label: 'School clinic / instructor graded rehearsal', values: ['Often included in tuition', 'In-person', 'Candidates still enrolled who need realistic, rubric-scored runs'] },
      { label: 'Practical-prep video courses (Milady / third-party)', values: ['~$20-80', 'Streaming video', 'Visual walk-through of each section\'s procedure and timing; vet against your CIB' ] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax; mannequin and supply prices vary by spec and retailer. We do not rank by commission. Your state board CIB is free and authoritative and should drive every purchasing decision.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'Practical-exam failures are rarely about not knowing how to do hair. They are about not following the board\'s written procedure, missing a sanitation checkpoint, or running out of time on a short section, and that is good news because those are the cheapest failures to prevent with a little advance planning. The six below are the recurring, avoidable errors, and almost all are logistics or discipline rather than skill, which means a candidate who addresses them in advance is far more likely to pass than one who simply practices more haircuts. The disinfectant mistake sits at the top because it is a pure logistics failure — sprays are prohibited and only EPA-registered wipes satisfy the rule, so arriving with the wrong sanitizer can end the attempt before it begins, and yet it is entirely within your control the night before. Performing services "your way" instead of the CIB procedure is the second, because the rubric rewards the board\'s sequence and checkpoints, not salon intuition, and a beautiful result achieved out of order still loses points. Running out of time on the ten-minute sections and skipping a sanitation checkpoint are both pacing and discipline failures that rehearsal fixes directly. Botching the blood-exposure procedure is the dangerous one, because it is critical-safety and can auto-fail the whole exam regardless of accumulated score, so it is drilled to automatic rather than advance. And assuming every state still requires a hands-on practical is a planning error that can send you rehearsing a format your board has eliminated. Each mistake below has a specific, pre-exam fix you can apply before you book.',
    items: [
      {
        mistake: 'Arriving without EPA-registered disinfectant wipes (or with spray only)',
        fix: 'The exam room prohibits aerosol disinfectants, and the CIB requires an EPA-registered disinfectant. Bring wipes for surfaces and the approved method for implements. This is a completely controllable pre-exam failure; check your kit the night before and again at check-in.'
      },
      {
        mistake: 'Performing services "your way" instead of the CIB procedure',
        fix: 'You are scored against the written rubric, not salon intuition. Sectioning patterns, application points, and the order of operations are specified. Rehearse the exact procedure in your state\'s CIB; a technically fine haircut done in the wrong sequence can still lose points on the rubric.'
      },
      {
        mistake: 'Running out of time on the 10-minute sections',
        fix: 'Thermal curling, the predisposition/strand test and the colour retouch are each only 10 minutes, and the practical fails on time as often as on technique. Practice every short section on its real timer until the pacing is reflexive, and protect those minutes in the full run.'
      },
      {
        mistake: 'Skipping or rushing a sanitation checkpoint',
        fix: 'Infection control is scored repeatedly and the model inserts work-area prep before both the opening and the chemical block. Wiping the station and implements between services is not optional busywork — it is on the rubric. Make the disinfect-step fire automatically at the start and end of every section.'
      },
      {
        mistake: 'Botching the blood-exposure procedure',
        fix: 'This is a critical-safety item that can auto-fail the entire exam regardless of your accumulated score. Drill the correct response to a cut or contamination — stop, protect, disinfect, dispose, document — until it is automatic. Do not improvise it on the day.'
      },
      {
        mistake: 'Assuming every state still requires a hands-on practical',
        fix: 'Several states have eliminated or restructured the practical (California, Massachusetts, Mississippi and Florida, among others, at various points). Confirm with your own board whether the hands-on practical is required before you spend weeks rehearsing it; your effort may belong entirely to the written exam and any state-specific alternative.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The NIC practical is not a question exam in the multiple-choice sense; it is a graded performance broken into ten core domain sections, each with a defined work time and a rubric, and the grade is built from how well you execute the board\'s written procedure rather than from how the result looks to a salon client. The model sequence is Work Area and Client Preparation (15 min), Thermal Curling (10 min), Haircutting (35 min), Work Area and New Client Preparation (15 min), Chemical Waving (20 min), Predisposition and Strand Test (10 min), Highlighting with Foil (15 min), Hair Colour Retouch (10 min), Virgin Hair Relaxer (15 min), and Blood Exposure Procedure (10 min). Scoring is criterion-referenced and section-by-section: you earn points for correct setup, infection control, application and finish, and your state board sets the overall cut, commonly near 75 percent of available points, so there is no curve and no advantage to other candidates doing poorly. The strategic reading is that the longest section (haircutting, 35 min) and the chemical block together are where most points sit, but the short sections and the sanitation checkpoints are where avoidable losses accumulate, because a candidate who rushes thermal curling or the colour retouch in ten minutes leaves points on the table that the haircutting time cannot recover. The blood-exposure procedure is treated as critical-safety and can override an otherwise passing score if performed incorrectly, which is why it is drilled to automatic rather than improvised. Because the exam is hands-on, "pacing" means protecting the ten-minute sections and never letting a single service eat the next one\'s clock, and the sample items below show how the rubric turns a procedure into scored steps.',
    types: [
      { name: 'Work-area and client-prep sections', share: '2 sections, 15 min each', detail: 'Set up the station, protect the client, and disinfect before service. Scored as infection-control checkpoints that recur throughout the exam.' },
      { name: 'Technical service sections', share: 'Haircutting, thermal curling, chemical waving, foil, retouch, relaxer', detail: 'Perform the service on the mannequin to a specified result within the per-section timer. Graded on procedure, sectioning, application and finish.' },
      { name: 'Safety-critical procedure', share: 'Blood exposure, 10 min', detail: 'Demonstrate the correct response to a cut or contamination. A wrong performance can auto-fail the exam regardless of accumulated points.' },
      { name: 'Predisposition and strand test', share: '10 min', detail: 'Perform the skin and strand tests exactly as written; rubric-heavy and safety-relevant, not a casual step.' }
    ],
    samples: [
      {
        prompt: 'During the practical, you accidentally cut the mannequin\'s "skin" and observe a blood-like exposure. Which action sequence does the rubric require?',
        options: [
          'A. Continue the service, then wipe the area at the end of the section',
          'B. Stop, protect the area, disinfect with an EPA-registered product, dispose of contaminated materials, and document the incident',
          'C. Apply product over the cut and keep working to stay on the timer',
          'D. Ask the proctor to handle it while you move to the next section'
        ],
        answer: 'B',
        explanation: 'The blood-exposure procedure is a critical-safety item, and the correct sequence is to stop, protect, disinfect with an EPA-registered product, properly dispose of contaminated materials, and document the incident. A and C continue working, which violates sanitation and safety rules and is exactly the kind of error that can auto-fail the exam. D abdicates the candidate\'s responsibility; the proctor observes but the candidate performs the procedure. The point of drilling this is that there is no time to improvise it on the day.'
      },
      {
        prompt: 'Before beginning the chemical-waving section, the CIB inserts a "Work Area and New Client Preparation" step. Its purpose is to:',
        options: [
          'A. Give the candidate a timed break between services',
          'B. Re-demonstrate infection control and reset the station before chemical services',
          'C. Let the candidate switch to a different mannequin',
          'D. Score the previous haircutting section a second time'
        ],
        answer: 'B',
        explanation: 'The inserted work-area and new-client prep is a sanitation checkpoint, not a break. The model practical repeats infection control before the chemical block precisely so the candidate demonstrates a disinfected station and proper setup again. A is wrong because it is a scored step, not rest. C is wrong; the same mannequin is used. D is wrong; it is a fresh preparation item, not a re-score of haircutting.'
      },
      {
        prompt: 'Which supply requirement is explicitly enforced for the practical exam room?',
        options: [
          'A. An EPA-registered disinfectant delivered as wipes',
          'B. A liquid disinfectant applied with a spray bottle',
          'C. A household cleaner kept at the station',
          'D. No disinfectant, since the proctor provides sanitation'
        ],
        answer: 'A',
        explanation: 'The exam requires an EPA-registered disinfectant and prohibits aerosol sprays in the room, so wipes are the accepted form for surfaces (with the approved method for implements). B is the trap — spray bottles are barred. C is inadequate; a household cleaner is not an EPA-registered disinfectant. D is wrong; the candidate is responsible for bringing and using the approved disinfectant, not the proctor.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published NIC practical blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The NIC Cosmetology Practical Examination is a hands-on sitting delivered by your state board\'s chosen vendor — commonly PSI, Prov, or Prometric — and, where your state still requires one, it is a separate appointment from the written theory exam with its own check-in, its own location and often its own date, so do not assume the two are bundled. You work on a full-size mannequin head through ten timed sections, and the clock is enforced per section as well as overall, so a single over-long service can compress the next one and a missed sanitation checkpoint between them costs points twice. The most common way candidates lose the practical has nothing to do with hairdressing: it is the disinfectant rule. Sprays are prohibited in the exam room and only EPA-registered wipes satisfy the requirement, so a candidate who arrives with the wrong sanitizer can fail before the first section or be forced to stop and correct it, which is a purely avoidable logistics failure. Confirm your vendor\'s ID rules and exactly what the exam supplies versus what you must bring the week before, because check-in is strict and a name mismatch forfeits the seat and the fee with no refund. Arrive early, expect a security screening that is applied without exception, and plan to use the full allotted time — rushing the short ten-minute sections is the usual cause of avoidable point loss, while protecting them is the easiest way to bank a passing score. The day is a timed performance of a written procedure, not a test of salon talent, and the guidance below keeps the avoidable failures off your result.',
    bring: [
      'A full-size mannequin head (not a mini) mounted to the exam spec, if the format requires you to supply it',
      'EPA-registered disinfectant WIPES — sprays are prohibited; bring wipes for surfaces and the approved method for implements',
      'Your complete kit: implements, combs, clips, thermal tools, caping and any products the CIB says you provide',
      'One or two forms of unexpired government-issued photo ID matching your registration exactly',
      'Your exam confirmation or authorization number from the state board or vendor'
    ],
    leave: [
      'Aerosol disinfectant sprays — explicitly prohibited in the exam room',
      'Phones, smartwatches, earbuds and electronics; these go in a locker',
      'Bags, coats, food and drink beyond what the vendor permits in the waiting area',
      'Personal cosmetic products not listed on your CIB supply list',
      'Notes or reference cards; none are permitted at the station'
    ],
    timeline: [
      { time: 'The week before', detail: 'Download your state practical CIB; confirm the vendor, ID rules, section list, timers and exactly what you must bring versus what is supplied.' },
      { time: 'The night before', detail: 'Pack the kit and wipes; verify the mannequin meets spec. Do not rehearse new technique — just walk the section order mentally.' },
      { time: '30 minutes before', detail: 'Arrive at the center. Check-in includes ID verification, a signature or biometric capture, and a locker for belongings.' },
      { time: 'Seated / setup', detail: 'You are given the mannequin and station. Perform the opening Work Area and Client Preparation within its 15-minute window before any service.' },
      { time: 'Through the sections', detail: 'Work the ten sections in the mandated order on their per-section timers. Disinfect between services. Protect the 10-minute sections (thermal curling, predisposition/strand test, colour retouch).' },
      { time: 'Blood-exposure step', detail: 'When cued, perform the correct procedure automatically — this is critical-safety and can auto-fail the exam if wrong.' },
      { time: 'Close', detail: 'Complete the final cleanup and submit per the proctor\'s instruction. Follow your board\'s result-notification process.' }
    ],
    rules: [
      'The practical is a performance exam of ten core sections with defined per-section work times; the clock is enforced per section and overall.',
      'EPA-registered disinfectant WIPES are required; aerosol sprays are prohibited in the exam room.',
      'A full-size mannequin head is required where the candidate supplies it; mini mannequins are not accepted.',
      'Infection control is scored repeatedly, including a work-area prep before the chemical block.',
      'The blood-exposure procedure is critical-safety; an incorrect performance can auto-fail the exam regardless of accumulated points.',
      'ID must match your registration exactly; a mismatch can forfeit the seat and fee. The practical is separate from the written theory exam.'
    ],
    afterwards:
      'Result delivery varies by state and vendor: some centers or boards notify you within days, while others route the outcome through your state board\'s licensing system. The practical is only one component — you must also pass the written theory examination (where your state requires both) and meet your board\'s training-hour and fee requirements before a licence is issued. If you do not pass, obtain the section-level feedback your board provides, identify whether the loss came from a short-timer section, a skipped sanitation checkpoint, or the blood-exposure procedure, and rebuild that specifically rather than redoing everything. Because scoring is criterion-referenced against the rubric, a narrow fail usually reflects a localized procedural gap, and a focused four-week re-rehearsal of the weak sections typically suffices. Before rebooking, confirm two things with your board: whether a hands-on practical is still required in your state, and the current retake waiting period and fee, because both differ by state and have changed as some states moved away from the practical format.'
  }
};

export default data;
