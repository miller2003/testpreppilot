// Depth content for: scrum-alliance-certified-scrummaster
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Agile, securities & cybersecurity certifications desk',
    bio: 'This guide is compiled and maintained by our certifications desk. Scrum Alliance exam rules, the prerequisite course requirement, fee and renewal terms come from Scrum Alliance’s own certification pages and are revised by them, so we cite the figure as published and flag it when it changes. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate — there is no BLS occupation named for a ScrumMaster.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam code, question count, time limit, prerequisite course and renewal terms were taken from the current Scrum Alliance certification pages; wage data from the BLS Occupational Outlook Handbook.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$100,750 median for project management specialists (BLS, May 2024)',
    summary:
      'There is no Bureau of Labor Statistics occupation called "ScrumMaster", and any salary page that quotes one is quoting a job-board aggregate rather than government data. The closest official fit is Project Management Specialists (SOC 13-1082), and we have chosen it deliberately because the CSM is an entry-level Agile role credential, not a senior management certificate. A Certified ScrumMaster typically works embedded in a delivery team facilitating the Scrum framework, removing impediments and coaching the product owner and developers — the day-to-day duties land squarely inside the project-management-specialist occupation, even though the title on the business card says otherwise. That occupation had a May 2024 median wage of $100,750, with the lowest 10 percent earning under $59,830 and the highest 10 percent earning more than $165,790. The spread matters here because the CSM sits at the lower edge of it early in a career and climbs as the holder pairs it with delivery experience and subsequent credentials such as the Advanced CSM or the Product Owner tracks. BLS projects 6 percent employment growth for project management specialists from 2024 to 2034, about as fast as the average for all occupations, with roughly 78,200 openings a year arising from both growth and replacement. The single most important caveat for a CSM candidate is that the certificate does not in itself create a job title in the labour market; employers list "Scrum Master" as a role and treat the CSM as evidence the candidate understands the framework the team runs. The wage figure above therefore measures the whole project-management-specialist occupation, not CSM holders narrowly, and should be read that way rather than as a CSM premium.',
    rows: [
      { label: 'Median annual wage, project management specialists', value: '$100,750', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $59,830', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $165,790', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '1,046,300 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~78,200 per year', note: 'BLS OOH Job Outlook, 2024-34' }
    ],
    growth: '6% projected change 2024-34 (about as fast as average), with ~78,200 openings a year from growth and replacement; the CSM is an entry Agile credential rather than a guarantee of the higher deciles',
    source: {
      label: 'BLS Occupational Outlook Handbook — Project Management Specialists',
      url: 'https://www.bls.gov/ooh/business-and-financial/project-management-specialists.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'Scrum Alliance does not publish a pass rate — but the bar is 74% (37 of 50 questions)',
    summary:
      'Scrum Alliance does not publish a pass-rate statistic for the CSM assessment, and because the assessment is gated behind a mandatory two-day approved course, the population that sits it is already filtered: nobody reaches the exam without first completing a Scrum Alliance-licensed Certified Scrum Trainer (CST) course. That makes a public pass rate of limited meaning even if it were published, and it is the reason you should ignore any "CSM pass rate" figure quoted on a blog. What is published and verifiable is the scoring rule. The CSM exam is 50 multiple-choice questions in 60 minutes, and you must answer at least 37 of 50 correctly, which is a 74 percent threshold. The assessment is open-book and taken online, unproctored, through your Scrum Alliance account after the course — so the difficulty is not the recall under invigilation but the precision of the Scrum Guide definitions, and the most common failure mode is reading more into a question than the text supports. You are allowed two attempts within a 90-day window at no extra charge, and only after those two free attempts does each further attempt cost $25. That generous retake structure is itself a reason not to cram: the first attempt is effectively a free diagnostic. The course fee, not the exam, is the real cost barrier — approved CSM courses range from roughly $250 to $2,495 depending on the trainer, format and employer subsidy, and that fee includes the exam eligibility. We have left the pass-rate table empty deliberately, because no authoritative figure exists, and any number you see circulating is an estimate at best.',
    source: {
      label: 'Scrum Alliance — Certified ScrumMaster certification',
      url: 'https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster'
    },
    caveat:
      'No pass rate is published by Scrum Alliance. What is published and verifiable is the 50-question / 60-minute format and the 74% (37/50) passing threshold, plus the two-free-attempts-then-$25 retake rule. We have not invented a pass-rate figure.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The CSM has a structural quirk that reshapes any study plan: you cannot sit the exam at all without first completing a two-day (16-hour) in-person or live-online course led by a Certified Scrum Trainer. There is no self-study path to eligibility. That means the plan below is really about what to do before, during and immediately after the course — the course itself is the core of your preparation, and the exam is the capstone. Most candidates should treat the mandatory course as the single biggest block of study time and the two weeks after it as the window to pass while the material is fresh, because you get two free attempts only within 90 days of course completion. The current Scrum framework is the basis of the exam, and the assessment draws directly on the official Scrum Guide, so the most efficient plan is to read the Scrum Guide end to end before the course, absorb the trainer’s worked examples and Q&A during the two days, then sit the first attempt within a week of finishing. The exam is open-book, so the goal is not to memorise every sentence but to know where each concept lives in the framework and to be fluent in the defined accountabilities, events and artefacts. Six weeks at a light pace is more than enough if the course is attended; someone trying to prepare without the course cannot, and should not, attempt the exam. The plan below assumes you have booked the course and treats it as Weeks 1-2.',
    totalHours: '16 hours of mandatory course + ~20-30 hours of reading and exam prep',
    weeks: [
      {
        label: 'Before the course',
        focus: 'Read the Scrum Guide and learn the vocabulary',
        tasks: [
          'Read the current Scrum Guide in full, twice, and note the exact definitions of the three accountabilities (Product Owner, Scrum Master, Developers)',
          'Memorise the purpose, timebox and attendees of the five events: Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective',
          'Be able to list the three artefacts (Product Backlog, Sprint Backlog, Increment) and their associated commitments',
          'Skim the Scrum Alliance CSM learning objectives so you know what the assessment covers'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Weeks 1-2',
        focus: 'The mandatory 16-hour CST course',
        tasks: [
          'Attend the two-day course (in person or live online) and ask questions about anything the Guide states ambiguously',
          'Take the trainer’s worked scenarios seriously — they mirror the judgement calls the exam tests',
          'Note the exact wording Scrum Alliance uses for each term, because the assessment rewards the official phrasing',
          'Confirm your exam eligibility is activated in your Scrum Alliance account before leaving the course'
        ],
        hours: '16 hrs (fixed)'
      },
      {
        label: 'Week 3',
        focus: 'First exam attempt (free)',
        tasks: [
          'Sit the 50-question / 60-minute open-book assessment online within days of the course while recall is highest',
          'Have the Scrum Guide open in a second window — the open-book format rewards fast lookup, not rote memory',
          'Read each question for what the Guide actually says, not what "agile in general" suggests',
          'If you fall short of 37/50, note the areas you missed — you have one more free attempt within 90 days'
        ],
        hours: '4-6 hrs'
      },
      {
        label: 'Weeks 4-6 (if needed)',
        focus: 'Second attempt and gap closing',
        tasks: [
          'Re-read the specific Scrum Guide sections tied to your missed questions',
          'Drill the definitions of events, artefacts and accountabilities until they are instant',
          'Sit the second free attempt well before the 90-day window closes',
          'Only after both free attempts are used does a further attempt cost $25 — avoid reaching that point'
        ],
        hours: '4-8 hrs'
      }
    ],
    variants: [
      { label: 'Experienced agile team member', detail: 'Three to four weeks total. You already live the framework; read the Scrum Guide once, attend the course, and pass on the first free attempt. Spend the saved time on exact wording rather than concepts.' },
      { label: 'New to Scrum entirely', detail: 'Six weeks. Add a week before the course purely on vocabulary and the five events, because the course moves fast and assumes you have seen the terms. The exam is open-book, so concept fluency matters more than memorisation.' },
      { label: 'PMP or PRINCE2 background switching to agile', detail: 'Four weeks, but watch the trap: predictive frameworks teach a different vocabulary and the exam punishes "waterfall-flavoured" answers. Re-learn the terms as Scrum defines them, not as your prior method approximates them.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The CSM is unusual among the exams on this site because the examination is open-book and gated behind a mandatory course, so preparation strategy is less about cramming facts and more about knowing the framework well enough to answer precisely under a 60-minute clock. The single most useful habit is reading the Scrum Guide as a contract: the exam rewards the exact official wording, and the distractors are usually plausible agile-sounding statements that contradict the Guide on a detail. Candidates with unrelated prior experience are the most at risk, because they answer from habit rather than from the text.',
    items: [
      {
        title: 'Read the Scrum Guide as the only source of truth',
        detail: 'The assessment is built from the official Scrum Guide, and the open-book format exists precisely so you can look up the exact definition rather than guess. Read it end to end, then read it again, and internalise the precise phrasing of the three accountabilities, the five events and the three artefacts with their commitments. When two answers both sound agile, the one that matches the Guide’s wording is the correct one.'
      },
      {
        title: 'Attend the course as your core study, not a formality',
        detail: 'You cannot sit the exam without the 16-hour CST course, so treat it as the centrepiece of preparation rather than a checkbox. The trainer’s worked examples and Q&A mirror the judgement calls the assessment makes, and the questions you ask there are the ones you will face later. Arrive having already read the Guide so you can go deep rather than catching up.'
      },
      {
        title: 'Sit the first attempt immediately after the course',
        detail: 'You get two free attempts only within 90 days of course completion. The material is freshest in the first week, and the open-book format means you lose little by going early — the first attempt is effectively a free diagnostic that tells you exactly which Guide sections to revisit. Do not wait months and let the detail fade.'
      },
      {
        title: 'Use the open-book format as a lookup exercise',
        detail: 'Because the assessment is unproctored and open-book, have the Scrum Guide open beside you and practise fast lookup during prep. The clock is the real constraint — 50 questions in 60 minutes is 72 seconds each — so the skill to build is finding the exact clause quickly, not reciting it. Timed open-book practice with the Guide on screen is the closest rehearsal to the real thing.'
      },
      {
        title: 'Beware the "agile general knowledge" trap',
        detail: 'Many candidates have picked up a loose version of Scrum from past teams that quietly deviates from the framework — skipping retrospectives, merging product owner and scrum master, lengthening sprints. The exam tests the canonical framework, not your team’s variation. When an answer feels right from experience but contradicts the Guide, the Guide wins. Reset to the text.'
      },
      {
        title: 'Learn the commitments, not just the artefacts',
        detail: 'The three artefacts each have a commitment — the Product Goal, the Sprint Goal and the Definition of Done. Questions routinely ask which commitment belongs to which artefact, and this triad is an easy, cheap source of marks that rote learners drop. Pair each artefact with its commitment and its purpose in one sentence and you cover a recurring question pattern.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The buying decision for the CSM is fundamentally different from a self-study certification: the course is mandatory and it is what you pay for, while the exam itself is included and the retakes are free within the window. So the resource table is dominated by the choice of course provider, not by books or question banks. Course prices vary enormously — from budget online cohorts around $250 to premium in-person bootcamps near $2,495 — and the exam eligibility, not the-branded workbook, is what you are buying. The Scrum Guide is free and is the only document the exam tests, so no paid study material is strictly required.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Approved 16-hour CST course (mandatory)', values: ['~$250 to $2,495 depending on trainer and format', 'In person or live online, two days', 'Everyone — it is the only path to exam eligibility'] },
      { label: 'The Scrum Guide (official)', values: ['Free', 'PDF / web', 'The sole source document the exam is built from'] },
      { label: 'Scrum Alliance CSM learning objectives', values: ['Free', 'Web', 'Checking what the assessment covers before you sit it'] },
      { label: 'Open-book timed practice with the Guide', values: ['Free', 'Self-run, 60-minute timer', 'Building fast-lookup speed under the clock'] },
      { label: 'Third-party CSM practice-question banks', values: ['~$20-60', 'Web / app', 'Supplementary drill only — verify every answer against the Guide'] },
      { label: 'Recommended reading such as "Scrum: The Art of Doing Twice the Work in Half the Time"', values: ['~$15-20', 'Book / audiobook', 'Context and motivation, never exam-source material'] }
    ],
    footnote: 'Course prices checked 2026-08 in USD before tax and vary widely by trainer, city and employer subsidy; the exam and two attempts within 90 days are included in course eligibility. Scrum Alliance does not license a single official paid textbook for the CSM. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'Most CSM failures are not knowledge failures — they are process and framing failures. Candidates either sit the exam too late and let the detail fade, answer from a corrupted mental model of Scrum picked up on a past team, or over-invest in paid materials the exam never draws from. A handful of mistakes account for the large majority of first-attempt shortfalls, and all of them are avoidable.',
    items: [
      {
        mistake: 'Sitting the exam long after the course, once the detail has faded',
        fix: 'Your two free attempts are valid only within 90 days of course completion, and recall is by far best in the first week. Book the first attempt for within days of finishing the course. The open-book format means going early costs you almost nothing and lets a shortfall become a free diagnostic rather than a paid retry at $25.'
      },
      {
        mistake: 'Answering from a past team’s "Scrum" that deviates from the Guide',
        fix: 'Many teams run a quietly modified Scrum — no retros, combined PO/SM, variable sprint length. The exam tests the canonical framework. When your experience and the Scrum Guide disagree, the Guide is correct. Re-learn the terms as defined, especially the separation of the three accountabilities.'
      },
      {
        mistake: 'Over-buying study material the exam never uses',
        fix: 'The assessment is built solely from the free Scrum Guide plus the course. Paid practice banks and books are supplementary at best and sometimes contradictory. Spend the budget on a good course (mandatory anyway) and the time on the Guide, not on a shelf of agile literature the exam will not cite.'
      },
      {
        mistake: 'Memorising artefacts without their commitments',
        fix: 'Each artefact carries a commitment — Product Goal, Sprint Goal, Definition of Done. Questions asking which commitment belongs to which artefact are common and cheap, and rote learners who know only the artefact names drop them. Pair each artefact with its commitment and purpose in a single sentence.'
      },
      {
        mistake: 'Reading more into a question than the Guide supports',
        fix: 'The distractors are usually agile-plausible but Guide-contradicting. Under the 72-seconds-per-question clock, candidates who overthink and import general agile wisdom pick the attractive wrong answer. Read for what the framework actually states, use the open-book Guide to confirm, and resist adding nuance the text does not contain.'
      },
      {
        mistake: 'Forgetting the renewal obligation',
        fix: 'The CSM is valid for two years and renewed by earning 20 Scrum Education Units (SEUs) and paying a $100 renewal fee. Candidates often treat it as permanent. Diary the expiry on the day you certify and bank SEUs from real agile work rather than scrambling at the end of year two.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The CSM assessment is 50 multiple-choice questions in 60 minutes, taken online and unproctored, and it is open-book — you may refer to the Scrum Guide during the test. The passing threshold is 37 of 50 correct, a 74 percent bar. Because the exam is gated behind a mandatory 16-hour CST course and is open-book, the question set is not a recall test; it is a precision test of whether you can apply the framework’s exact definitions under time pressure. Questions are single-answer multiple choice drawn from the Scrum Guide and the CSM learning objectives, covering the accountabilities, the five events, the three artefacts and their commitments, and the empirical pillars and values. There are no performance-based or simulation items as you would find on a technical exam; the challenge is purely the speed and accuracy of mapping a scenario to the canonical answer. The open-book nature means the clock, not memory, is the constraint — 72 seconds per question — so the skill to build is fast, accurate lookup and the discipline to accept the Guide’s wording over your intuition. You receive your result immediately on submission, and within the 90-day eligibility window you may retake at no charge twice before the $25-per-attempt fee applies.',
    types: [
      { name: 'Single-answer multiple choice', share: 'The entire 50-question exam', detail: 'Each item presents a Scrum scenario or definition question with one correct answer drawn from the Scrum Guide. Distractors are typically agile-plausible but framework-contradicting statements.' },
      { name: 'Definition / terminology items', share: 'A large recurring block', detail: 'Asks for the exact purpose, timebox or attendees of an event, or the commitment attached to an artefact. Reward precise Guide wording over general agile knowledge.' },
      { name: 'Scenario application items', share: 'A meaningful share', detail: 'A described team situation asking what the Scrum Master, Product Owner or Developers should do. Correct answers follow the framework even when a "real team" might do otherwise.' }
    ],
    samples: [
      {
        prompt: 'Which statement about the Sprint Retrospective is correct according to the Scrum Guide?',
        options: [
          'A. It is facilitated by the Product Owner to inspect the product increment',
          'B. It is the final event of the Sprint and is used to plan how to become more effective',
          'C. It is timeboxed to a maximum of two hours for a one-month Sprint and led by stakeholders',
          'D. It is optional when the team is performing well'
        ],
        answer: 'B',
        explanation: 'The Sprint Retrospective is the last event of the Sprint, where the Scrum Team inspects how the last Sprint went and plans ways to increase quality and effectiveness. A is wrong because the Scrum Master facilitates it, and it inspects the team’s process rather than the product. C is wrong on both timebox (it is three hours for a one-month Sprint, not two) and facilitator (it is the Scrum Team, with the Scrum Master serving, not stakeholders). D is wrong because no Scrum event is optional; the retrospective is mandatory regardless of team performance.'
      },
      {
        prompt: 'Who is accountable for maximizing the value of the product resulting from the work of the Scrum Team?',
        options: [
          'A. The Developers',
          'B. The Scrum Master',
          'C. The Product Owner',
          'D. The Scrum Team as a whole, with no individual accountable'
        ],
        answer: 'C',
        explanation: 'The Scrum Guide assigns the single accountability for maximizing the value of the product to the Product Owner. A is incorrect because Developers are accountable for creating a usable Increment each Sprint. B is incorrect because the Scrum Master is accountable for the effectiveness of the Scrum Team and for proper Scrum practice, not product value. D contradicts the framework, which deliberately places this accountability with one person rather than diffusing it.'
      },
      {
        prompt: 'What is the commitment associated with the Product Backlog?',
        options: [
          'A. The Definition of Done',
          'B. The Sprint Goal',
          'C. The Product Goal',
          'D. The Release Plan'
        ],
        answer: 'C',
        explanation: 'Each artefact has a commitment that helps it deliver value and provides focus. The Product Backlog’s commitment is the Product Goal, the long-term objective the Scrum Team is working toward. A is the commitment of the Increment, B is the commitment of the Sprint Backlog, and D is not a Scrum Guide commitment at all — a common distractor drawn from older or non-Scrum vocabulary.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published CSM learning objectives and Scrum Guide, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The CSM exam is taken online, unproctored and open-book, through your Scrum Alliance account, after you have completed the mandatory 16-hour CST course. There is no test centre, no proctor and no ID-check ritual of the kind a Pearson VUE technical exam imposes — you simply log in within your 90-day eligibility window and start the 60-minute, 50-question assessment with the Scrum Guide open beside you. The practical risks on the day are therefore not about logistics but about pacing and discipline: with 72 seconds per question and an open book, the temptation is to look up everything, which bleeds the clock. Prepare a tabbed, bookmarked Scrum Guide so the common definitions are one click away. You receive your pass or fail immediately on submission, and a scaled sense of performance, and you may retake free of charge twice within the window before the $25 fee applies. The real exam-day-adjacent task is renewal discipline two years out: the CSM lapses after 24 months unless you log 20 SEUs and pay $100, and that is the obligation candidates most often forget.',
    bring: [
      'A device with a stable internet connection and a browser you can keep open alongside the assessment',
      'The Scrum Guide open in a second tab or window — the exam is open-book and this is permitted',
      'Your Scrum Alliance login, confirming your exam eligibility is active within the 90-day window',
      'A quiet 60-minute block with no interruptions, since the clock runs continuously once started'
    ],
    leave: [
      'Do not rely on unverified third-party "exam dumps" — they contradict the Guide and are the wrong source',
      'Do not open forums or generative AI during the assessment if that would violate the honour terms of your attempt',
      'Do not start without having read the Guide; the open-book format rewards preparation, not improvisation',
      'Do not wait until day 89 of eligibility — a technical hiccup then leaves no room for a free retake'
    ],
    timeline: [
      { time: 'Before the window opens', detail: 'Complete the 16-hour CST course; your eligibility is activated in your Scrum Alliance account afterward.' },
      { time: 'Within a week of the course', detail: 'Read the Scrum Guide again and bookmark the sections you expect to look up. Book the first attempt while recall is freshest.' },
      { time: 'The day of the attempt', detail: 'Open the Scrum Guide in a second window, silence distractions, and start the 60-minute timer when you begin.' },
      { time: '0-50 minutes', detail: 'Work through 50 questions at ~72 seconds each. For any uncertain item, look it up in the open Guide rather than guessing, but keep moving.' },
      { time: 'On submission', detail: 'Your result appears immediately. Note any weak areas — you have a second free attempt within 90 days if needed.' },
      { time: 'After passing', detail: 'Your certification is valid for two years; diary the renewal and begin banking 20 SEUs plus the $100 fee.' }
    ],
    rules: [
      'The assessment is online, unproctored and open-book; you may consult the Scrum Guide during the test.',
      '50 multiple-choice questions in 60 minutes; pass at 37 correct (74%).',
      'Two free attempts are allowed within 90 days of course completion; each further attempt costs $25.',
      'The exam is available only after completing a Scrum Alliance-approved 16-hour CST course.',
      'The result is shown immediately on submission.',
      'The CSM is valid for two years and renewed with 20 SEUs and a $100 fee.'
    ],
    afterwards:
      'Your pass or fail appears on screen the moment you submit, and if you pass your Certified ScrumMaster credential is recorded in your Scrum Alliance account, from which you can download the certificate and claim the digital badge. The certification is valid for two years. Treat the result, pass or fail, as information: on a pass, diary the renewal date immediately and start collecting Scrum Education Units from real agile work so the 20-SEU, $100 renewal at month 24 is painless; on a fail, use the second free attempt within the 90-day window rather than paying $25, revisit the specific Scrum Guide sections your misses exposed, and remember the open-book format means a retake is as much about lookup speed as about knowledge. The CSM is an entry credential, not a terminal one — most holders move on to the Advanced CSM, the Certified Scrum Professional or a Product Owner track, and the renewal cycle is a useful prompt to plan that next step rather than let the certificate lapse.'
  }
};

export default data;
