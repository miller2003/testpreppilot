const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Firearms education & recreation credentials desk',
    bio: 'We cover NRA education programs and instructor certifications. Format and fee facts come from NRA official pages and are revised; wage figures come from the BLS occupational series named by code, and we state plainly when a certification has no direct occupational mapping.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the NRA Certified Instructor program structure and requirements against NRA official pages; verified BLS recreation wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Instructor certification is a credential for part-time and range-based work: recreation workers earned about a $34,500 median in May 2024 (BLS)',
    summary: 'The NRA Certified Instructor credential qualifies a person to teach NRA courses in a specific discipline (such as Basic Pistol, Personal Protection, Rifle, Shotgun, or Home Firearm Safety) and to issue NRA completion certificates to students. It is a teaching credential, not a job license for one occupation, so no single BLS SOC code attaches to it; most NRA instructors teach part-time - on weekends at ranges, in gun stores, for clubs and community programs - alongside primary careers, and full-time firearms instruction is a small segment of the market. The salary story is therefore modest and structure-dependent: BLS reported that recreation workers (SOC 39-9032), which includes range and instruction staff, earned a median of about $34,500 in May 2024, with the occupation characterized by seasonal and part-time work; instructors who run their own businesses earn per-student fees (courses commonly charge $100-$200 per student, split with the range or facility) and their income scales with volume and reputation. The honest framing is that instructor certification is a market-access credential for a side-income and community-education activity rather than a salaried career path; it does not map to a BLS wage because BLS classifies workers by job duty, not certificates, and the income follows the courses taught, not the credential itself. For a person who already shoots regularly and wants to teach, the certification is the standard entry credential, and its value is the ability to run NRA courses and issue certificates that range facilities and clubs recognize.',
    rows: [
      { label: 'Recreation workers median, May 2024', value: '~$34,500', note: 'BLS OEWS, SOC 39-9032 (seasonal/part-time)' },
      { label: 'Security guards median, May 2024', value: '$38,390', note: 'BLS OEWS, SOC 33-9032 (a related side-use context)' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'Typical instructor income model', value: 'Per-student course fees', note: 'Courses commonly $100-$200 per student; income varies with volume' }
    ],
    growth: 'Recreation employment is projected to grow about 8 percent from 2024 to 2034 per BLS; firearms-instruction income is driven by course volume and facility arrangements.',
    source: { label: 'BLS Occupational Outlook Handbook - Recreation Workers', url: 'https://www.bls.gov/ooh/personal-care-and-service/recreation-workers.htm' }
  },
  passRate: {
    headline: 'NRA instructor certification requires completing the Instructor Training (BIT) and discipline-specific training; there is no published pass rate',
    summary: 'The NRA does not publish a pass-rate statistic for instructor certification, and the program is training-and-evaluation based rather than a single licensure exam. The certification path requires: completing the prerequisite NRA Basic course in the discipline you want to teach (e.g., Basic Pistol), completing the NRA Instructor Training (BIT) - a course in instructional methodology that covers how to teach, using the training materials, and the NRA\u2019s policies - and then completing the discipline-specific Instructor course, which includes a written test and a practical teaching evaluation (each candidate teaches portions of the course to the class). The instructor must also have a current NRA membership and complete a background check as part of the application; some states add their own requirements for paid instruction. The written tests in the courses use passing lines set by the NRA training materials (commonly 90 percent for the instructor-level knowledge requirements in some components), and the practical evaluation is graded by the Training Counselor; candidates who do not meet the standard can typically re-take components. Certification remains valid while the instructor maintains NRA membership and, in many disciplines, stays current; some disciplines require periodic recertification or additional training. The honest summary is that the program evaluates both knowledge and teaching performance, and the practical bar is completing the training sequence with the course evaluations passed; the NRA\u2019s training counselor network administers the process locally.',
    source: { label: 'NRA Instructor certification program', url: 'https://firearmtraining.nra.org/instructor/' },
    caveat: 'No published pass rate; certification requires the BIT course, discipline training, written tests and a practical teaching evaluation, plus NRA membership and a background check.'
  },
  studyPlan: {
    summary: 'Preparing to become an NRA Certified Instructor is a sequence of courses rather than a self-study exam, and the plan runs 2-4 weeks depending on course availability. Step one: complete the NRA Basic course in your chosen discipline (Basic Pistol is the most common starting point) - typically 8-10 hours over one or two days, covering firearm safety, operation, maintenance and live-fire practice - because the instructor path requires the Basic course as a prerequisite. Step two: complete the NRA Instructor Training (BIT), typically 6 hours, which teaches instructional methodology: how to present lessons, use the training materials, manage students, and comply with NRA policies; this is the pedagogy course and is required for every discipline. Step three: complete the discipline-specific Instructor course (typically 8-10 hours), which reviews the curriculum in depth, includes a written test on the material, and ends with each candidate teaching portions of the course in a practical evaluation graded by the Training Counselor. A study plan around the courses: before the BIT, review the NRA training materials for the discipline (the student manuals and lesson plans, available through the training counselor); between courses, practice presenting the lessons aloud to a friend or to a camera, because the teaching evaluation rewards prepared delivery; and after certification, arrange with a local range or club to co-teach with an experienced instructor before running solo courses. The NRA\u2019s training counselor network schedules the courses, and candidates should contact a local counselor for dates and fees.',
    totalHours: '~25-30 hours of courses over 2-4 weeks',
    weeks: [
      { label: 'Step 1', focus: 'Basic course (prerequisite)', tasks: ['Complete the NRA Basic course in the discipline', 'Safety, operation, maintenance, live fire'], hours: 10 },
      { label: 'Step 2', focus: 'Instructor Training (BIT)', tasks: ['Instructional methodology', 'NRA policies and materials'], hours: 6 },
      { label: 'Step 3', focus: 'Discipline Instructor course', tasks: ['Curriculum review and written test', 'Practical teaching evaluation'], hours: 10 },
      { label: 'After certification', focus: 'Mentored teaching', tasks: ['Co-teach with an experienced instructor', 'Arrange range/facility partnerships'], hours: 'ongoing' }
    ],
    variants: [
      { label: 'Multiple disciplines', detail: 'Each additional discipline adds its own Instructor course; BIT is required once.' },
      { label: 'State requirements', detail: 'Some states impose additional requirements for paid instruction; check your state before teaching for compensation.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective strategies for NRA instructor certification focus on the teaching evaluation and the knowledge tests. Strategy one: prepare the teaching portion seriously - the practical evaluation has each candidate present parts of the curriculum to the class, and candidates who practice the lesson presentations aloud (to a friend or a camera) with the lesson plans in hand score measurably better than those who improvise; the evaluation rewards prepared, organized delivery and correct use of the NRA materials. Strategy two: study the training materials for the discipline as if for a student exam - the written tests draw on the student manual content, and instructors must know the curriculum cold because students will ask questions. Strategy three: master the safety rules and the NRA\u2019s three fundamental rules of firearm safety, because safety content dominates both the tests and the teaching evaluation. Strategy four: attend the BIT with attention to the policies - how to issue completion certificates, record-keeping, and the NRA\u2019s conduct standards - because compliance questions appear in the evaluation and the instructor\u2019s administrative duties are part of the role. Strategy five: network with the Training Counselor and other instructors in your area, because course scheduling, facility partnerships and mentoring all run through the local training community. Strategy six: confirm the NRA membership and background-check requirements before starting, because certification is contingent on both.',
    items: [
      { title: 'Rehearse the teaching portion', detail: 'Practice lesson presentations aloud with the lesson plans.' },
      { title: 'Learn the curriculum cold', detail: 'Written tests draw on the student manuals.' },
      { title: 'Master the safety rules', detail: 'Safety dominates the tests and the teaching evaluation.' },
      { title: 'Learn the administrative duties', detail: 'Certificates, records and NRA policies are part of the role.' }
    ]
  },
  resourceComparison: {
    summary: 'The NRA instructor resource market is organized around the NRA\u2019s official training system. The NRA website (firearmtraining.nra.org) provides the instructor program overview, course descriptions and the training counselor directory - free. The course materials (student manuals, lesson plans and instructor guides for each discipline) are provided through the training counselors and are included in the course fees; the NRA also sells the manuals for reference. The course fees themselves are set by the Training Counselor and vary by region, typically totaling several hundred dollars across the BIT and the discipline course (commonly $200-$400 total in many areas). Third-party prep materials add little because the certification is course-based and the materials are NRA-official. For the practical teaching skills, the most valuable "resource" is practice and mentoring with an experienced instructor. The honest ranking: the NRA program materials (included), a local Training Counselor\u2019s courses (the required purchase), and mentored teaching after certification. Prices here are current as of 2025-26 and vary by counselor and region.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NRA instructor program info', values: ['Free', 'Web', 'Program overview and counselor directory'] },
      { label: 'BIT course', values: ['Varies (~$75-$150)', 'In-person with counselor', 'The required instructional-methodology course'] },
      { label: 'Discipline Instructor course', values: ['Varies (~$150-$300)', 'In-person with counselor', 'Curriculum mastery and teaching evaluation'] },
      { label: 'NRA training manuals', values: ['$10-$30 each', 'Print', 'Reference and study'] },
      { label: 'Mentored teaching', values: ['Arranged locally', 'In-person', 'Post-certification experience'] }
    ],
    footnote: 'Prices dated 2025-26 and set by local Training Counselors; NRA membership and background check are required. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common mistakes in the NRA instructor path come from underestimating the teaching evaluation and the administrative requirements. Mistake one: treating the written tests as the whole hurdle; the practical teaching evaluation is where candidates actually fail, and those who skip rehearsing the lesson presentations are the ones who struggle. Mistake two: skipping the prerequisite Basic course assumption - the instructor path requires completing the Basic course first, and candidates who expect to start at the BIT are turned away. Mistake three: overlooking the NRA membership and background-check requirements; certification is contingent on both, and a candidate who completes the courses without membership cannot be certified. Mistake four: ignoring the administrative duties (issuing certificates, record-keeping, NRA policies); instructors who run courses without following the administration requirements lose their standing. Mistake five: starting to teach solo immediately; the standard advice is to co-teach or mentor with an experienced instructor first, and candidates who skip this misjudge the demands of running a course. Mistake six: missing state-level requirements for paid instruction - some states add licensing, insurance or business requirements - and candidates should verify their state\u2019s rules before charging for courses.',
    items: [
      { mistake: 'Underestimating the teaching evaluation', fix: 'Rehearse the lesson presentations in advance.' },
      { mistake: 'Skipping the Basic-course prerequisite', fix: 'Complete the discipline\u2019s Basic course first.' },
      { mistake: 'Missing membership and background checks', fix: 'Both are required for certification.' },
      { mistake: 'Ignoring administrative duties', fix: 'Learn certificate issuance and record-keeping.' },
      { mistake: 'Teaching solo immediately', fix: 'Co-teach with an experienced instructor first.' }
    ]
  },
  questionTypes: {
    summary: 'The NRA instructor certification uses written tests within the courses plus a practical teaching evaluation; there is no single standardized national exam. The BIT covers instructional methodology and NRA policies; the discipline-specific Instructor course includes a written test on the curriculum (commonly with a high passing line, in many components 90 percent) and the practical evaluation in which each candidate teaches portions of the course. Content areas: the three fundamental rules of firearm safety, firearm handling and operation for the discipline, teaching methods and lesson delivery, range safety and course administration, and NRA program policies. Samples below are editor-written illustrations of the published course content, not live exam items.',
    types: [
      { name: 'Firearm safety fundamentals', share: 'Core component', detail: 'The three fundamental rules and safe handling.' },
      { name: 'Discipline curriculum', share: 'Core component', detail: 'Operation, maintenance, and course content.' },
      { name: 'Instructional methodology', share: 'BIT component', detail: 'Lesson delivery, materials use, student management.' },
      { name: 'Practical teaching evaluation', share: 'Discipline course', detail: 'Each candidate teaches portions of the course.' }
    ],
    samples: [
      {
        prompt: 'Which of the following is one of the three fundamental rules of firearm safety taught across NRA courses?',
        options: ['A. Always keep the firearm pointed in a safe direction', 'B. Never clean a firearm indoors', 'C. Load the firearm only at the range', 'D. Keep the safety on at all times'],
        answer: 'A',
        explanation: 'The three fundamental rules are: keep the firearm pointed in a safe direction, keep your finger off the trigger until ready to fire, and keep the firearm unloaded until ready to use.'
      },
      {
        prompt: 'During the teaching evaluation, the candidate instructor is expected to ______.',
        options: ['A. Read the manual word-for-word', 'B. Present the lesson using the NRA materials with prepared, organized delivery', 'C. Skip the safety review to save time', 'D. Answer questions only at the end'],
        answer: 'B',
        explanation: 'The evaluation rewards prepared, organized delivery using the NRA lesson materials, including the safety content; reading verbatim or skipping safety fails the standard.'
      },
      {
        prompt: 'An instructor completes a Basic Pistol course. Which administrative step is required for the students?',
        options: ['A. Issuing NRA completion certificates and maintaining the course records', 'B. Sending students to the range alone', 'C. Collecting the students\u2019 firearms', 'D. Posting the course online'],
        answer: 'A',
        explanation: 'Instructors issue NRA completion certificates and maintain the required course records; the other options are not part of the administrative duties.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published course content, not live exam items.'
  },
  examDay: {
    summary: 'NRA instructor certification has no single exam day; it is a sequence of courses scheduled with a local NRA Training Counselor. Candidates complete the discipline\u2019s Basic course, the BIT, and the discipline-specific Instructor course - typically over a few weekends - with the written tests and the practical teaching evaluation occurring during the final course. On the day of the teaching evaluation, arrive prepared with the lesson materials and any required presentation aids; the Training Counselor grades the presentation against the evaluation criteria. Candidates must have current NRA membership and complete the background check as part of the application. After passing, the NRA issues the instructor credential for the discipline, and the instructor can run NRA courses and issue completion certificates; maintaining membership keeps the credential current. Afterwards, new instructors should arrange mentored teaching with an experienced instructor, verify any state requirements for paid instruction, and build facility partnerships for course venues.',
    bring: ['NRA membership confirmation', 'Course materials and lesson plans', 'Any presentation aids the counselor requests', 'Photo ID'],
    leave: ['Assumptions about state rules - verify paid-instruction requirements', 'Improvised presentations - prepare the lessons', 'Administrative shortcuts - record-keeping is part of the role'],
    timeline: [
      { time: 'Prerequisite', detail: 'Complete the discipline\u2019s NRA Basic course.' },
      { time: 'BIT', detail: 'Complete the Instructor Training course (methodology).' },
      { time: 'Discipline course', detail: 'Curriculum review, written test, and practical teaching evaluation.' },
      { time: 'After passing', detail: 'NRA issues the instructor credential; maintain membership.' }
    ],
    rules: [
      'NRA membership and a background check are required.',
      'The BIT is required once; each discipline adds its own Instructor course.',
      'The teaching evaluation is a required component.',
      'Some states add requirements for paid instruction.'
    ],
    afterwards: 'Maintain NRA membership, co-teach with an experienced instructor before solo courses, and verify state requirements for paid instruction.'
  }
};

export default data;
