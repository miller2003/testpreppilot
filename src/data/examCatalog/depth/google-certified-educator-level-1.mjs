const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'EdTech & teacher-certification desk',
    bio: 'We cover Google for Education certifications and educator-technology credentials. Format and fee facts come from Google for Education official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the Google Certified Educator Level 1 exam structure, fees and delivery against Google for Education official pages; verified BLS teacher wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'The Level 1 certification evidences classroom tech skill: kindergarten and elementary teachers earned a $62,340 median in May 2024 (BLS)',
    summary: 'The Google Certified Educator Level 1 certification evidences a teacher\u2019s ability to use Google for Education tools (Google Classroom, Drive, Docs, Sheets, Slides, Gmail, Calendar, and Chrome) to improve teaching and learning. It is a professional-development credential, not a teaching license, so no BLS SOC code attaches to it; the salary story belongs to the teaching profession it serves. BLS reported that kindergarten and elementary school teachers (SOC 25-2021) earned a median of $62,340 in May 2024, and high school teachers (25-2031) about $64,580; teacher pay is set by district salary schedules driven by education and experience, not by certificates, which is the honest structural point. The value of the Google certification is therefore not a direct pay bump but professional positioning: many districts and schools run Google Workspace environments, value staff who can lead classroom-tech integration, and consider such credentials in hiring, curriculum leadership and professional-development roles; the certification also supports teachers applying for Google for Education Trainer status and for edtech-focused positions such as instructional technology coaches, where district pay schedules and stipends can reward specialized roles. BLS classifies workers by occupation, not certifications, so no certificate maps to a specific wage; the value is the professional-development signal in a field where districts weigh skills and leadership potential. The certification is exam-based (the Level 1 exam is about 3 hours with 40 questions), costs about $10 (as of recent pricing, with occasional changes), and is valid for 36 months.',
    rows: [
      { label: 'Kindergarten and elementary teachers median, May 2024', value: '$62,340', note: 'BLS OEWS, SOC 25-2021' },
      { label: 'High school teachers median, May 2024', value: '$64,580', note: 'BLS OEWS, SOC 25-2031' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'Certification validity', value: '36 months', note: 'Google for Education' }
    ],
    growth: 'Teacher employment is projected to grow about 1-2 percent from 2024 to 2034 with large replacement demand; edtech skill is a differentiator in hiring and leadership roles.',
    source: { label: 'BLS Occupational Outlook Handbook - Kindergarten and Elementary School Teachers', url: 'https://www.bls.gov/ooh/education-training-and-library/kindergarten-and-elementary-school-teachers.htm' }
  },
  passRate: {
    headline: 'The Level 1 exam requires a passing score of 80 percent on 40 questions (about 3 hours); Google publishes no pass rates',
    summary: 'Google does not publish pass-rate statistics for the Google Certified Educator exams, but the assessment mechanics are public. The Level 1 exam consists of 40 questions delivered through the Google for Education testing platform (Webassessor), with a time allowance of about 3 hours; the passing score is 80 percent, meaning at least 32 of 40 correct. The exam is performance-based in style: it includes scenario questions and, in some items, tasks set in the actual Google apps (the platform embeds tasks in the tools), so candidates must be able to use the applications, not just recall facts about them. The exam is proctored online, and the fee is approximately $10 (Google has historically priced the Level 1 exam at $10; verify the current fee on the Google for Education site, as pricing has occasionally changed). Candidates who do not pass can retake, and Google applies a waiting period before retakes. The certification is valid for 36 months; renewal requires passing the current Level 1 exam again (or completing the renewal pathway Google offers, which is the exam in most cases). The exam covers the Google for Education fundamentals: using Classroom, Drive and the Google Workspace apps, organizing workflow, communicating with students and families, and managing digital classrooms. The honest summary is that the passing bar is 32 of 40, the exam is performance-based in the apps themselves, and the certificate\u2019s value is the verifiable signal of classroom-tech proficiency.',
    source: { label: 'Google for Education - Certified Educator Level 1', url: 'https://edu.google.com/teacher-center/certification/' },
    caveat: 'Google publishes no pass rates; the Level 1 exam requires 80% (32/40) with a 36-month validity. Verify the current fee on the Google for Education site.'
  },
  studyPlan: {
    summary: 'A realistic Google Certified Educator Level 1 plan runs 20-40 hours over 2-6 weeks, depending on prior familiarity with Google Workspace. The exam is performance-based, so preparation is about using the tools, not reading about them. Week 1: take the official Google for Education training course (the free "Fundamentals Training" on the Google for Education Teacher Center), which walks through every tool and skill the exam covers, and take a baseline assessment of your hands-on skill. Weeks 2-4: work through the Fundamentals Training units with hands-on practice - set up a Google Classroom, create and organize Drive files, build a Slides presentation with collaboration, create a Sheet with formulas, and practice the communication tools (Gmail, Calendar, Meet) - because the exam includes tasks in the actual apps. Week 5: complete the official practice exam and the sample questions Google provides, and drill the areas the practice exam exposes. Week 6: take the real exam in a quiet, stable environment. The exam content clusters around: classroom management (Classroom setup, assignments, grading workflows), communication and collaboration (Drive sharing, Docs/Sheets/Slides collaboration, Gmail), organization and workflow (Drive structure, Calendar, task management), and digital citizenship and safety (Chrome settings, safe searching). Candidates with daily Workspace experience can compress the plan to 2-3 weeks; newcomers should budget the full path.',
    totalHours: '20-40 hours over 2-6 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Fundamentals Training start', tasks: ['Start the free Teacher Center training', 'Hands-on baseline in the apps'], hours: 6 },
      { label: 'Weeks 2-4', focus: 'Hands-on tool practice', tasks: ['Classroom, Drive, Docs, Sheets, Slides', 'Communication and collaboration tools'], hours: 20 },
      { label: 'Week 5', focus: 'Practice exam', tasks: ['Official practice exam', 'Drill exposed gaps'], hours: 6 },
      { label: 'Week 6', focus: 'Real exam', tasks: ['Take the proctored exam (80% passing)'], hours: 4 }
    ],
    variants: [
      { label: 'Level 2 and Trainer path', detail: 'Level 1 is the prerequisite for Level 2 and for the Google for Education Trainer certification; plan the ladder if relevant.' },
      { label: 'Experienced users', detail: 'Teachers who use Workspace daily can compress the plan and focus on the practice exam.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective Level 1 strategies are hands-on. Strategy one: practice in the actual tools rather than reading about them, because the exam includes tasks embedded in the apps and rewards knowing where features live - set up a practice classroom, build documents and slides, and use the sharing and commenting features until they are automatic. Strategy two: complete the official Fundamentals Training, because it is written to the exam\u2019s scope and is the free, authoritative study path. Strategy three: master the classroom workflow - creating assignments, attaching materials, grading, and returning work in Google Classroom - because classroom-management items form a large share of the exam. Strategy four: learn the sharing and collaboration mechanics precisely (viewer/commenter/editor roles, link sharing, version history), because scenario items test the correct sharing choice. Strategy five: review the organizational skills (Drive structure, Calendar, task management) and digital citizenship (safe searching, Chrome settings), which round out the skills measured. Strategy six: take the official practice exam under timed conditions before the real one, and use the performance breakdown to target the final days. Finally, schedule the exam for a quiet, stable window, because the proctored online format punishes interruptions.',
    items: [
      { title: 'Practice in the tools', detail: 'The exam embeds tasks in the actual apps.' },
      { title: 'Complete Fundamentals Training', detail: 'The free official path is written to the exam scope.' },
      { title: 'Master the Classroom workflow', detail: 'Assignments, grading and returning work are heavily tested.' },
      { title: 'Learn sharing mechanics precisely', detail: 'Roles, link sharing and version history drive scenario items.' }
    ]
  },
  resourceComparison: {
    summary: 'The Level 1 resource market is anchored by Google\u2019s free official content, which is unusually complete. The Google for Education Teacher Center provides the free Fundamentals Training (the official study path), the official practice exam, and sample questions - all free. The exam fee itself is about $10 (verify the current fee on the site, as pricing has occasionally changed). Hands-on practice requires a Google account with access to the Workspace apps, which is free. Third-party prep courses and question banks ($20-$200) exist and add practice volume, but the honest value ranking is low: the official training and practice exam cover the scope, the exam is performance-based (which only hands-on practice addresses), and third-party material can lag tool updates. Some districts provide training and reimburse the exam fee as part of professional development. The honest ranking: the free Teacher Center training, the official practice exam, hands-on practice in the tools, and nothing else for most candidates. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Google Fundamentals Training', values: ['Free', 'Online', 'The official study path'] },
      { label: 'Official practice exam', values: ['Free', 'Online', 'Format and gap identification'] },
      { label: 'Google Workspace apps', values: ['Free', 'Web', 'Hands-on practice surface'] },
      { label: 'Third-party prep courses', values: ['$20-$200', 'Online', 'Optional practice volume'] }
    ],
    footnote: 'Prices dated 2025-26; the Level 1 exam fee is ~$10 (verify current pricing). No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common Level 1 mistakes come from studying instead of practicing. Mistake one: reading about the tools without using them; the exam includes tasks in the actual apps, and candidates who know the concepts but not the interface lose the performance items. Mistake two: skipping the official Fundamentals Training and relying on third-party summaries; the training is written to the exam scope, and third-party material lags tool updates. Mistake three: neglecting the Classroom workflow; classroom-management items form a large share of the exam, and candidates who use Classroom rarely are surprised by the assignment-and-grading questions. Mistake four: guessing on sharing-role items; the viewer/commenter/editor distinctions and link-sharing behaviors are precise, and scenario items test the correct choice. Mistake five: ignoring the timing; the 3-hour window with 40 performance-based questions requires pacing, and candidates who spend too long on early items run out of time. Mistake six: letting the 36-month validity lapse; renewal requires passing the current exam again, and a lapsed certification disappears from the verifiable profile. Finally, candidates should take the practice exam before the real one, because the proctored format and the embedded tasks are best experienced in a rehearsal.',
    items: [
      { mistake: 'Studying without practicing', fix: 'Use the apps daily; the exam is performance-based.' },
      { mistake: 'Skipping Fundamentals Training', fix: 'The free official path is written to the scope.' },
      { mistake: 'Neglecting Classroom workflows', fix: 'Practice assignments, grading and returning.' },
      { mistake: 'Guessing on sharing roles', fix: 'Learn the exact viewer/commenter/editor behaviors.' },
      { mistake: 'Letting the validity lapse', fix: 'Renew within 36 months by passing the current exam.' }
    ]
  },
  questionTypes: {
    summary: 'The Google Certified Educator Level 1 exam consists of 40 performance-based questions delivered online with about 3 hours allowed, passing at 80 percent (32 of 40). The exam is proctored online through the Webassessor platform, and many items embed tasks in the actual Google apps (Classroom, Drive, Docs, Sheets, Slides, Gmail, Calendar, Meet, Chrome), requiring candidates to perform actions or answer scenario questions about them. Content clusters: classroom management (Classroom setup, assignments, grading), communication and collaboration (sharing, commenting, Meet), organization and workflow (Drive, Calendar, tasks), and digital citizenship and safety (Chrome, safe search). Samples below are editor-written illustrations of the published exam scope, not live exam items.',
    types: [
      { name: 'Classroom management', share: 'Largest cluster', detail: 'Classroom setup, assignments, grading workflows.' },
      { name: 'Communication and collaboration', share: 'Large cluster', detail: 'Sharing roles, Docs/Sheets/Slides collaboration, Meet.' },
      { name: 'Organization and workflow', share: 'Moderate cluster', detail: 'Drive structure, Calendar, task management.' },
      { name: 'Digital citizenship and safety', share: 'Moderate cluster', detail: 'Chrome settings, safe searching.' }
    ],
    samples: [
      {
        prompt: 'A teacher wants to share a Google Doc with a student so the student can edit it, but only that student should have access. Which sharing approach is most appropriate?',
        options: ['A. Share with "Anyone with the link" as editor', 'B. Share with the specific student as editor', 'C. Publish the doc to the web', 'D. Email the doc as an attachment'],
        answer: 'B',
        explanation: 'Sharing with the specific student restricts access to that account; "Anyone with the link" opens it more broadly, publishing exposes it publicly, and emailing an attachment loses the live collaboration.'
      },
      {
        prompt: 'In Google Classroom, where does a teacher create and manage an assignment for a class?',
        options: ['A. In the Classwork tab', 'B. In the People tab', 'C. In the Grades tab only', 'D. In Google Calendar only'],
        answer: 'A',
        explanation: 'Assignments are created and managed in the Classwork tab; the People tab manages rosters and the Grades tab views grading, while Calendar shows the class calendar.'
      },
      {
        prompt: 'A teacher needs to collect responses from 30 students in a structured form and view them in a spreadsheet. Which tool is most appropriate?',
        options: ['A. Google Forms with responses linked to Sheets', 'B. A shared Google Doc', 'C. An email chain', 'D. Google Slides'],
        answer: 'A',
        explanation: 'Google Forms collects structured responses and links them to a Google Sheet for analysis; a shared doc, email chain or slides deck does not structure the collection.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam scope, not live exam items.'
  },
  examDay: {
    summary: 'The Level 1 exam is delivered online through the Google for Education certification platform (Webassessor) with a proctor. Candidates register through the Google for Education Teacher Center, pay the fee (about $10, verify current pricing), and schedule the exam window. On the day, complete the system check ahead of time, use a quiet private room with a stable connection, and follow the proctor\u2019s rules (no notes, no second monitors, no assistance); the exam runs about 3 hours for 40 questions and is performance-based in the Google apps, so the candidate\u2019s Google account access is part of the environment. After passing at 80 percent, the certification is issued with a badge and is valid 36 months; the verifiable record appears on the Google for Education site. Afterwards, add the badge to your resume and district professional-development records, set the 36-month renewal reminder, and consider the Level 2 exam and the Google for Education Trainer certification for the next step.',
    bring: ['Google account sign-in', 'Verified system and quiet room for proctoring', 'Appointment confirmation', 'Stable internet connection'],
    leave: ['Notes or study materials (prohibited)', 'Second monitors or devices', 'Distractions - the exam is proctored'],
    timeline: [
      { time: 'Before', detail: 'Register, pay the fee, and complete the system check.' },
      { time: 'Exam', detail: '40 questions, ~3 hours, proctored online, performance-based.' },
      { time: 'After', detail: 'Result on screen; 80% (32/40) passes.' },
      { time: 'Within 36 months', detail: 'Renew by passing the current exam.' }
    ],
    rules: [
      'The exam is online, proctored, and performance-based in the Google apps.',
      'The passing score is 80% on 40 questions.',
      'No notes, second monitors, or assistance are permitted.',
      'The certification is valid 36 months with renewal by exam.'
    ],
    afterwards: 'Add the badge to your resume and district records, set the renewal reminder, and plan the Level 2 or Trainer certification for the next step.'
  }
};

export default data;
