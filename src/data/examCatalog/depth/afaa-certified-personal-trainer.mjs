// Depth content for: afaa-certified-personal-trainer
//
// PRIMARY SOURCES (all checked 2026-08):
//   - AFAA Personal Fitness Trainer page (afaa.com/courses/personal-fitness-trainer)
//   - NASM accreditation page (nasm.org/accreditation) — the certifying body that
//     OWNS AFAA. It lists ONLY NASM-CPT and AFAA-CGFI as NCCA-accredited; the
//     AFAA Personal Trainer (PFT) exam is NOT on that list.
//   - BLS OOH, Fitness Trainers and Instructors (SOC 39-9031), May 2024 wage data.
//
// IMPORTANT — NCCA ACCREDITATION STATUS (the single most important quality signal):
// The NASM accreditation governing-board page is the authoritative primary source
// because NASM owns AFAA. It lists the NCCA-accredited programs as NASM-CPT and
// AFAA-CGFI ONLY. The AFAA Personal Trainer (PFT) exam is NOT listed as NCCA-
// accredited. AFAA's marketing page has at times described the online PFT test as
// "NCCA-Accredited" and some third-party reviewers repeat that claim, but the
// certifying body\'s own accreditation board does not include AFAA-PFT. We therefore
// report AFAA-PFT as NOT NCCA-accredited per the primary source, and flag the
// discrepancy. Candidates whose employer requires an NCCA credential should choose
// NASM-CPT (or AFAA-CGFI for group fitness) instead.
//
// Every numeric row is sourced. Sample questions are editor-written illustrations of
// the published AFAA CPT blueprint, not live exam items.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Fitness & nutrition credentials desk',
    bio: 'This guide is compiled and maintained by our fitness-credentials desk. Certification marketing in this field is unusually aggressive, so we check accreditation claims against the accrediting body or the parent company’s own published register rather than repeating the seller’s wording, and we flag it plainly when the two disagree. Exam mechanics, renewal requirements and fees come from the issuer’s candidate handbook. Wage figures come from the Bureau of Labor Statistics series for fitness trainers and instructors, with the self-employment caveat stated rather than buried.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Accreditation claims were checked against the accrediting body’s register rather than the seller’s marketing copy.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$46,180 median annual wage for fitness trainers (BLS, May 2024)',
    summary: 'The AFAA Certified Personal Trainer maps to the federal occupational group "Fitness Trainers and Instructors" (SOC 39-9031), the correct category with published wage data. BLS reports a median annual wage of $46,180 (May 2024). The spread is wide and skewed upward: the lowest 10 percent earn under $27,580, while the highest 10 percent exceed $82,050. Unlike the bookkeeping credentials (which sit in a declining occupation), this group is projected to GROW about 12 percent from 2024 to 2034 — much faster than average — across roughly 370,100 jobs. A large share of trainers are self-employed or paid per session, so the wage series understates total earnings for successful independents who build client lists and online coaching. The AFAA CPT is widely accepted by gyms and studios as an entry credential, and it satisfies the documentation many liability insurers and municipal recreation departments ask for. One honesty point that matters for employer requirements: per NASM\'s own accreditation board (nasm.org/accreditation), the NCCA-accredited programs in the NASM/AFAA family are NASM-CPT and AFAA-CGFI ONLY — the AFAA Personal Trainer exam is NOT listed as NCCA-accredited, despite AFAA marketing that has described the online test as "NCCA-Accredited" and some third-party reviewers repeating that. If a job posting specifically requires an NCCA-accredited personal-trainer cert, NASM-CPT (or AFAA-CGFI for group fitness) is the safer pick; the AFAA CPT is best read as a respected but non-NCCA credential. Geography and setting move the number sharply — trainers in metro boutique studios, sports-performance centers, and private in-home coaching clear the upper percentiles, while big-box gym floor trainers cluster near the median. The credential itself does not set your rate, but it is the gate that lets you bill at all; specialization (corrective exercise, older-adult, youth) is what lifts trainers above the median once they are in the door.',
    rows: [
      { label: 'Median annual wage', value: '$46,180', note: 'BLS OOH, Fitness Trainers and Instructors (SOC 39-9031), May 2024' },
      { label: 'Lowest 10%', value: '< $27,580', note: 'BLS OOH, SOC 39-9031, May 2024' },
      { label: 'Highest 10%', value: '> $82,050', note: 'BLS OOH, SOC 39-9031, May 2024' },
      { label: 'Employment', value: '370,100', note: 'BLS OOH, SOC 39-9031, May 2024' },
      { label: 'Projected change 2024-2034', value: '+12% (faster than average)', note: 'BLS OOH — strong growth vs bookkeeping decline' }
    ],
    growth: 'Projected +12% growth 2024-2034 (BLS OOH, much faster than average) — a key contrast with the declining bookkeeping occupations. Many trainers are self-employed, so the wage series understates top-end earnings.',
    source: { label: 'BLS Occupational Outlook Handbook — Fitness Trainers and Instructors', url: 'https://www.bls.gov/ooh/personal-care-and-service/fitness-trainers.htm' }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'Pass mark: 70% scaled score (no published pass rate)',
    summary: 'AFAA does not publish a candidate pass rate for the CPT exam — there is no official first-time or cumulative percentage available, so any specific "X% of candidates pass" figure is unsourced. What AFAA publishes is the pass standard: a scaled score of 70 percent. The exam is 120 questions in 120 minutes, of which 100 are scored and 20 are unscored pretest items mixed in to evaluate future questions; your score is based only on the 100 scored items, scaled to 70 to pass. This is a criterion-referenced, not norm-referenced, test: there is no curve, so a "harder" form does not lower the pass threshold, and a more prepared cohort does not raise it. Retake rules: if you do not reach 70, you may retake the exam for the standalone/retake fee (about $199), and the AFAA self-study package includes the first exam attempt. Plan to clear 70 percent comfortably — target the low-80s in practice — because the scaled scoring means a few ambiguous pretest-style items will not sink you, but genuine gaps in programming, screening, or contraindication knowledge will. Treat 70 as the floor, not the goal.',
    source: { label: 'AFAA Personal Fitness Trainer materials (afaa.com) and NASM support KB', url: 'https://www.afaa.com/courses/personal-fitness-trainer' },
    caveat: 'AFAA publishes no candidate pass rate. Only the 70% scaled-score pass mark and the 120Q/120min (100 scored + 20 pretest) structure are official. Do not cite a specific percentage pass rate for this exam.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary: 'Most candidates budget roughly 80-120 total study hours, but the AFAA CPT is lighter on pure memorization than a bookkeeping exam and heavier on applied client programming, so the hours are best spent practicing scenario judgment, not re-reading. The schedule below assumes 6-10 hours per week over about 10-12 weeks. The blueprint clusters into human movement science, program design, screening/assessment, and professional/legal duties, with a heavy emphasis on contraindications and modifications — that is where the exam actually separates candidates. Front-load anatomy and the OPT-model-style program design, then drill client scenarios (the kind where you pick the safest progression or spot the red-flag symptom). Because the credential requires current CPR/AED before you can sit (and to keep) the cert, confirm your CPR/AED is active early — an expired card blocks the exam regardless of study. If you work full-time, stretch to 14-16 weeks at 5-7 hours per week; if you already train clients, compress to 6-8 weeks since the scenario logic is familiar.',
    totalHours: '80-120 hours total',
    weeks: [
      { label: 'Weeks 1-3 — Human movement science & anatomy', focus: 'Skeletal/muscular systems, planes, levers, posture', tasks: ['Learn major muscles and actions by plane', 'Drill posture/alignment and compensation patterns', 'Map movement assessments to findings'], hours: '8-10 hrs/week' },
      { label: 'Weeks 4-7 — Program design & the training continuum', focus: 'Phases, acute variables, cardio/RES flexibility', tasks: ['Build sample programs by client goal', 'Practice acute-variable selection (sets/reps/TUT)', 'Drill contraindications and regressions'], hours: '8-10 hrs/week' },
      { label: 'Weeks 8-10 — Screening, assessment & scenarios', focus: 'Health history, risk, red flags, modifications', tasks: ['Work client-scenario multiple-choice daily', 'Memorize absolute contraindications', 'Confirm CPR/AED card is current'], hours: '8-10 hrs/week' },
      { label: 'Weeks 11-12 — Full mock exams & weak-area repair', focus: 'Timed 120Q simulations', tasks: ['Two full timed mocks at 120 min', 'Repair the lowest domains cold', 'Book the PSI appointment'], hours: '6-8 hrs/week' }
    ],
    variants: [
      { label: 'Working full-time', detail: 'Stretch to 14-16 weeks at 5-7 hrs/week; prioritize scenario drills on weekends.' },
      { label: 'Currently training clients', detail: 'Compress to 6-8 weeks; the applied logic is familiar, so lean on mocks over reading.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary: 'The AFAA CPT rewards applied client judgment, so the highest-leverage habit is scenario drilling, not content re-reading. First, because 20 of the 120 questions are unscored pretest items, do not let one confusing question rattle you — you cannot tell which are pretest, so move on and protect the clock. Second, master contraindications and regressions; the exam repeatedly asks which exercise to swap for a client with a given limitation, and that is the most missed category. Third, practice the full 120-question / 120-minute block timed, because pacing (not difficulty) is the trap — running out of minutes at question 110 is the common failure. Fourth, learn the program-design framework (phases, acute variables, cardio/resistance/flexibility sequencing) well enough to build a plan from a goal statement, since several items test design, not recall. Fifth, keep CPR/AED current and book the PSI slot early; the credential is blocked without a valid card, and a procrastinated PSI date is the real deadline risk. None of this needs more hours — it needs scenario reps and one timed mock under your belt.',
    items: [
      { title: 'Drill client-scenario questions, not just content', detail: 'The exam separates candidates on "which progression/regression is safest" items. Daily scenario reps build the judgment the 70% scaled mark actually tests.' },
      { title: 'Master contraindications and regressions', detail: 'Questions asking which exercise to swap for a limitation are the most missed. Build a quick-reference of absolute contraindications by joint/condition.' },
      { title: 'Take at least one full 120-minute timed mock', detail: 'Pacing, not difficulty, sinks candidates. Simulate the full 120Q/120min block so you finish with time to review, not run out at Q110.' },
      { title: 'Do not panic over unscored pretest items', detail: '20 of 120 questions are unscored and indistinguishable. Skip the confusing ones and protect the clock; they do not count against your 70%.' },
      { title: 'Keep CPR/AED current and book PSI early', detail: 'A valid CPR/AED card is required to sit and to hold the cert. Confirm it is active and lock the PSI appointment before you finish studying.' }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary: 'AFAA sells its own CPT directly, and the headline option is the self-study package, which bundles the course and the first exam attempt. Pricing below is AFAA/NASM list, checked 2026-08. The $499 self-study includes the exam; a standalone exam (or retake) is about $199. Because AFAA is now in the NASM family, many candidates also consider NASM\'s CPT, which is the better-known sibling brand and carries a similar NCCA accreditation but at a higher price and with its own OPT-model emphasis. Third-party prep (study guides, flashcards, practice banks) exists but is unnecessary given AFAA\'s own materials cover the blueprint. Recertification is separate: every two years you need 1.5 AFAA CEUs, current CPR/AED, and a $99 renewal fee. We do not rank by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'AFAA CPT Self-Study (exam included)', values: ['$499', 'Online course + first exam attempt', 'Most candidates — all-in-one'],
      },
      { label: 'AFAA CPT standalone exam / retake', values: ['$199', 'Single exam attempt', 'Retakers or employer-sponsored'],
      },
      { label: 'NASM CPT (sibling brand)', values: ['Higher list price', 'Online course + exam', 'Those who prefer the NASM OPT brand'],
      },
      { label: 'AFAA recertification', values: ['$99 + 1.5 CEUs + CPR/AED', 'Every 2 years', 'Maintaining the credential'] }
    ],
    footnote: 'Prices checked 2026-08 from AFAA/NASM public storefronts (list). The $499 self-study price EXCLUDES the required textbook (AFAA lists the Personal Fitness Training text separately, about $79). Self-study includes the first exam; retakes are ~$199. Recert is $99 + 1.5 CEUs + current CPR/AED every 2 years. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary: 'AFAA CPT candidates fail in patterns that reflect the exam\'s applied nature. The dominant error is content-only study: candidates who re-read anatomy but never practice client scenarios cannot answer the "which regression is safest" items that the 70 percent bar actually hinges on. Second is contraindication neglect — the single most-missed category, because it requires knowing when NOT to prescribe an exercise, not just naming muscles. Third is poor pacing: running out of minutes on a 120-question, 120-minute test is common, since candidates linger on tricky items instead of moving on (made worse by not realizing 20 questions are unscored pretest). Fourth is letting CPR/AED lapse — an expired card blocks both sitting and renewing, independent of exam prep. Fifth is skipping the timed mock, so test-day pacing is untested. These are all fixable with scenario reps and one full simulation; candidates who fail usually knew the science but mismanaged the format, the clock, or the CPR prerequisite.',
    items: [
      { mistake: 'Assuming the AFAA CPT is NCCA-accredited', fix: 'It is not, per the primary source. NASM\'s own accreditation board (nasm.org/accreditation) lists only NASM-CPT and AFAA-CGFI as NCCA-accredited; AFAA-PFT is absent. AFAA marketing has called the online test "NCCA-Accredited" and some reviewers repeat it, but the certifying body\'s board does not include the PFT. If your employer requires NCCA status, choose NASM-CPT (or AFAA-CGFI for group fitness). Verify before you rely on it.' },
      { mistake: 'Studying content without scenario reps', fix: 'The 70% mark hinges on applied "safest progression/regression" judgment. Drill client scenarios daily, not just anatomy recall.' },
      { mistake: 'Neglecting contraindications', fix: 'The most-missed category is "when NOT to prescribe." Build a reference of absolute contraindications by joint/condition and test yourself on it.' },
      { mistake: 'Running out of time at Q110', fix: '120Q in 120min; skip the confusing ones (20 are unscored pretest) and protect the clock so you finish with review time.' },
      { mistake: 'Expired CPR/AED card', fix: 'A current CPR/AED card is required to sit and to hold the cert. Confirm it is active before booking PSI and before renewal.' },
      { mistake: 'No timed full mock', fix: 'Simulate the full 120-minute block once. Pacing, not difficulty, is the common failure; test it before exam day.' }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary: 'The AFAA CPT exam is 120 questions in 120 minutes; 100 are scored and 20 are unscored pretest items used to evaluate future forms, so your result rests only on the 100 scored questions, scaled to a 70 percent pass mark. It is a criterion-referenced (not curved) multiple-choice test delivered by PSI. The blueprint emphasizes four areas: (1) human movement science and anatomy (planes, levers, posture, compensation); (2) program design across the training continuum (phases, acute variables, cardio/resistance/flexibility); (3) client screening, assessment, and risk — including absolute contraindications and safe regressions; and (4) professional, legal, and scope-of-practice duties. The questions are applied: more "a client presents with X, what do you do" than "name the muscle." On accreditation — the key quality signal — NASM\'s own accreditation governing-board page (the authoritative primary source, as NASM owns AFAA) lists only NASM-CPT and AFAA-CGFI as NCCA-accredited; the AFAA Personal Trainer exam is NOT on that list. AFAA\'s marketing has at times called the online PFT test "NCCA-Accredited" and third-party reviewers repeat this, but the certifying body\'s own accreditation board does not include AFAA-PFT. We report it as not NCCA-accredited and advise verifying against any employer\'s stated requirement. Samples below are editor-written to match this blueprint and are not live exam items.',
    types: [
      { name: 'Multiple-choice (scored)', share: '100 questions', detail: 'Applied client scenarios across movement science, program design, screening/risk, and professional duties. Scored toward the 70% scaled pass mark.' },
      { name: 'Multiple-choice (unscored pretest)', share: '20 questions', detail: 'Mixed in to evaluate future forms; do not count toward your score and are indistinguishable from scored items.' }
    ],
    samples: [
      { prompt: 'A new client reports a history of shoulder dislocation and currently has anterior shoulder pain during overhead pressing. The MOST appropriate modification is:', options: ['A. Continue barbell overhead press with reduced load', 'B. Substitute neutral-grip dumbbell presses and avoid painful ranges', 'C. Add behind-the-neck press to build stability', 'D. Prescribe loaded dips for eccentric strength'], answer: 'B', explanation: 'B is correct: a prior dislocation with anterior pain is a red flag for overhead loading; neutral-grip dumbbell presses with pain-free range reduce anterior stress. A and C load the offending position; D (dips) increases anterior shoulder strain and is contraindicated here.' },
      { prompt: 'Which of the following is an ABSOLUTE contraindication to vigorous resistance training?', options: ['A. Mild low-back stiffness after sitting', 'B. Unstable angina', 'C. Previous ankle sprain, fully rehabilitated', 'D. Knock-knee posture'], answer: 'B', explanation: 'B is correct: unstable angina is an absolute contraindication to vigorous exercise until cleared medically. A, C, and D are relative considerations or past injuries, not absolute contraindications.' },
      { prompt: 'To improve muscular endurance in a beginner, the most appropriate acute-variable prescription is:', options: ['A. 1-2 reps at 95% 1RM', 'B. 12-20 reps at 50-70% 1RM', 'C. 3-5 reps at 85% 1RM', 'D. 5 reps at 100% 1RM'], answer: 'B', explanation: 'B is correct: muscular endurance is developed with higher reps (12-20) at lower loads (50-70% 1RM). A and C/D are strength/power ranges inappropriate for an endurance goal in a beginner.' }
    ],
    note: 'Samples are editor-written illustrations of the published AFAA CPT blueprint, not live exam items. Accreditation note: per NASM\'s own accreditation board (nasm.org/accreditation), AFAA-PFT is NOT NCCA-accredited — only NASM-CPT and AFAA-CGFI are listed. AFAA marketing has described the online PFT test as "NCCA-Accredited," which we flag as inconsistent with the primary source.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary: 'The AFAA CPT is delivered by PSI, either in person at a PSI test center or remotely via online proctoring — your choice at booking, which sets it apart from both the Prometric-based AIPB CB and the NACPB online center. For an in-person center, arrive 30 minutes early with two forms of ID (one government photo ID). For remote proctoring, set up in a private, clear room with a working webcam and upload your ID; phones, notes, and other people must be out of the session. A current CPR/AED card is required to sit, so have proof ready. The test is 120 minutes for 120 questions; scratch paper is provided (in-person) or a digital whiteboard is used (remote) and collected/cleared afterward. You get a preliminary result on screen at the end; official confirmation follows from AFAA/NASM. After passing, you must still hold current CPR/AED to be awarded and to maintain the credential, and you begin the 2-year recert clock (1.5 CEUs + $99).',
    bring: [
      'Two forms of ID, one government-issued photo ID (name must match registration)',
      'Proof of current CPR/AED certification (required to sit and to be awarded)',
      'PSI appointment confirmation'
    ],
    leave: [
      'Phones, smartwatches, notes, and bags (center locker; remote session requires a clear desk)',
      'Other people or secondary screens in the room during remote proctoring'
    ],
    timeline: [
      { time: '30 min before (center)', detail: 'Arrive for check-in: ID scan, photo, locker for belongings.' },
      { time: 'Start', detail: '120 questions / 120 minutes; 100 scored + 20 unscored pretest.' },
      { time: 'End', detail: 'Preliminary result on screen; official result from AFAA/NASM follows.' }
    ],
    rules: [
      'Delivered by PSI: in-person center or remote online proctoring (clear room, webcam, no notes).',
      'You keep credit on a pass at 70% scaled; retake is the ~$199 standalone/exam fee.'
    ],
    afterwards: 'Preliminary result on screen; official award requires current CPR/AED. Begin the 2-year recert clock: 1.5 AFAA CEUs + $99 + CPR/AED to renew.'
  }
};

export default data;
