// Depth content for: praxis-health-education-5551
// See examDepth.mjs for the full schema. All figures verified 2026-08.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Teacher licensure & Praxis desk',
    bio: 'This guide is compiled and maintained by our teacher-licensure desk. The Praxis tests are administered by ETS, and we take the exam structure — question counts, timing, content areas and the scoring model — from the official ETS page for Health Education (5551), which is the authoritative source for this test. The content is based on the teacher-preparation standards of the Society of Health and Physical Educators (SHAPE America) and the Society for Public Health Education (SOPHE), which we state as the exam\u2019s foundation. Passing scores are set by each certifying state rather than by ETS, so we state the published mechanics and flag that the actual required score must be confirmed on the ETS state-requirements page. The registration fee comes from the ETS Praxis fee schedule, which distinguishes selected-response-only tests from tests containing constructed-response items; 5551 is selected-response only. Wage figures come from the Bureau of Labor Statistics occupation High School Teachers (SOC 25-2031), named by SOC code, with the caveat that BLS classifies by job duties and that the exam is a licensure step rather than an occupation. ETS does not publish Praxis pass rates, and we do not invent one.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Question counts, timing, the selected-response format and the SHAPE America and SOPHE standard basis were taken from the ETS Praxis page for Health Education (5551) and the ETS Praxis fee schedule.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$64,580 median for high school teachers (BLS SOC 25-2031, May 2024)',
    summary:
      'The Praxis Health Education test is a licensure test for teachers of health education in elementary, junior high and senior high schools, and the closest BLS occupation is High School Teachers under SOC code 25-2031, the standard comparison for this exam family on this site; the exam itself is a licensure step rather than an occupation, so the wage it affects is the teacher wage, set by district salary schedules rather than by certification. The May 2024 median was $64,580 a year, with the lowest 10 percent earning less than $47,330 and the highest 10 percent more than $104,670; the 25th percentile sat near $57,800 and the 75th near $83,010. BLS reported employment of 1,094,500 jobs in 2024 and projected a 2 percent decline from 2024 to 2034, with about 66,200 openings a year, a figure driven entirely by replacement need. Two things matter for a health-education candidate specifically. First, health education teachers are not a separate BLS occupation; they are classified within the general teaching occupations and paid on the same district schedules as other teachers, so there is no government-published health-education wage premium. Second, the demand for health education teachers is a local district staffing decision, and many districts fill the role with teachers who also hold other certifications, so the licensure combination matters more than the single test. The honest summary is that 5551 opens the door to a stable, schedule-driven teaching career whose pay varies widely by district, state and cost of living, and the exam does not change the wage — it creates eligibility, which is its entire career value. Middle school teachers as a separate BLS category earned a $62,970 median in May 2024, and we have used the 25-2031 series specified for this exam family.',
    rows: [
      { label: 'Median annual wage, high school teachers', value: '$64,580', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $47,330', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $104,670', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '1,094,500 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~66,200 per year', note: 'BLS OOH Job Outlook, 2024-34 - all from replacement need' }
    ],
    growth: '-2% projected change 2024-34 (decline), with about 66,200 openings a year, all from replacement need; health education teachers are paid on district schedules and are not a separate BLS wage category.',
    source: {
      label: 'BLS Occupational Outlook Handbook - High School Teachers',
      url: 'https://www.bls.gov/ooh/education-training-and-library/high-school-teachers.htm'
    }
  },

  passRate: {
    headline: 'ETS publishes no Praxis pass rate — for 5551, the published facts are the exam structure and a passing score set by each certifying state',
    summary:
      'ETS does not publish pass rates for Praxis tests, and it never has — anyone quoting a pass rate for 5551 is guessing, because the test is criterion-referenced and the passing score is set by each certifying state rather than by ETS. What is published and verifiable is the exam structure and the scoring model, and both are what this section covers. Health Education (5551) is 120 minutes long with 120 selected-response questions, delivered by computer, and the content is based largely on the teacher-preparation standards of SHAPE America and SOPHE, covering the professional knowledge a prospective teacher of health education in elementary, junior high and senior high schools needs. The exam\u2019s content areas span health education as a discipline, health promotion and prevention of injury and disease, community health and advocacy, healthy relationships and mental and emotional health, and health education pedagogy; the detailed content breakdown lives in the official ETS Study Companion for the test. Raw scores convert to a scaled score on the Praxis reporting scale, and each state sets its own required scaled score — typically in the 160s for content-knowledge Praxis tests but varying from state to state — so the effective passing bar is entirely local: the same scaled score can clear one state\u2019s threshold and fall short in another using the same test. ETS publishes the state requirements on its website, and the required score must be confirmed before studying. Because the exam is selected-response only, it is machine-scored and reported on the standard Praxis cycle, faster than tests with written sections. We have deliberately left the pass-rate table empty and covered the published structure, scoring model and state-set standard instead.',
    source: {
      label: 'ETS Praxis - Health Education (5551) and state requirements',
      url: 'https://www.ets.org/praxis/site/test-takers/resources/prep-materials.html?examId=5551'
    },
    caveat:
      'ETS publishes no Praxis pass rate. The passing score for 5551 is set by each certifying state, and ETS publishes the state requirements. We have not invented a pass rate and instead covered the published structure and scoring model.'
  },

  studyPlan: {
    summary:
      'A realistic study plan for Health Education (5551) is 40-60 hours over six to ten weeks, because the test is a 120-minute, 120-question selected-response paper covering a broad range of health content at the level a K-12 health education teacher needs, and the fastest gains come from covering the five content areas systematically while practising the applied-pedagogy items, which are the part of the paper that rewards classroom judgment rather than recall. The content areas, as ETS describes them, are health education as a discipline, health promotion and prevention of injury and disease, community health and advocacy, healthy relationships and mental and emotional health, and health education pedagogy; the exam is based largely on the SHAPE America and SOPHE teacher-preparation standards, so candidates who review those standards and the ETS Study Companion\u2019s detailed topic list have the authoritative scope map. The content spans both the science — nutrition, physical activity, disease prevention, substance use prevention, injury and violence prevention, and environmental health — and the profession — the history and philosophy of health education, health behaviour theory, planning and implementation of instruction, assessment, and advocacy and communication. Because the exam is selected-response only, the pacing is about one minute per question and there is no written section, so preparation should emphasise coverage and recognition speed rather than essay practice. Candidates with a health, physical education or nursing background should budget the lower end and weight time toward the pedagogy content and applied items; candidates from general education should budget the upper end and add structured coverage of the health-science content. The plan below covers the science areas first, then the profession and pedagogy, and reserves the final weeks for full 120-question practice exams, because breadth and pacing are what this exam tests.',
    totalHours: '40-60 hours over 6-10 weeks',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Health promotion and prevention of injury and disease',
        tasks: [
          'Nutrition, physical activity and weight management; the dietary guidelines and the risks of inactivity',
          'Chronic and infectious disease prevention: the major conditions and their modifiable risk factors',
          'Substance use prevention: tobacco, alcohol and drug misuse, and the prevention-education approaches',
          'Injury, violence and safety: unintentional injury prevention, violence prevention and safety education'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Healthy relationships and mental and emotional health',
        tasks: [
          'Mental and emotional health: stress, resilience, coping and the signs of mental health problems in students',
          'Healthy relationships: communication, conflict resolution, and the characteristics of healthy relationships',
          'Sexual health education: developmentally appropriate content, and the laws and policies governing it',
          'Family and community contexts that shape student health behaviour'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Health education as a discipline and community health and advocacy',
        tasks: [
          'The history, philosophy and role of health education in schools and communities',
          'Community health and advocacy: health disparities, public health approaches, and the advocacy role of the health educator',
          'Health behaviour theory: the models that explain and predict health behaviour, applied to teaching decisions',
          'Complete one full practice section and tag every miss to a content area'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 7-8',
        focus: 'Health education pedagogy',
        tasks: [
          'Planning standards-aligned health instruction, and selecting developmentally appropriate content and methods',
          'Instructional strategies, classroom management, and differentiation for diverse learners including English learners',
          'Assessment of student learning and the use of assessment data in health education',
          'Review the SHAPE America and SOPHE standards that anchor the exam\u2019s content'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 9-10',
        focus: 'Full practice exams and gap closing',
        tasks: [
          'Two full 120-question, 120-minute practice exams under real timing',
          'Re-tag every miss and re-drill the bottom two content areas',
          'Run the official ETS sample questions as the final calibration',
          'Confirm the registration, the state\u2019s required passing score, and the test-centre or at-home logistics'
        ],
        hours: '7-9 hrs/week'
      }
    ],
    variants: [
      { label: 'Health, physical education or nursing graduate', detail: 'Five to six weeks. The health-science content is familiar; spend the recovered time on the pedagogy items and the applied classroom scenarios, which are where well-prepared candidates still lose points.' },
      { label: 'General education teacher adding health', detail: 'Eight to ten weeks. Your teaching background covers the pedagogy; add structured coverage of the health-science content, especially disease prevention, nutrition and substance use, which general teacher preparation does not provide.' },
      { label: 'Career changer new to both health and teaching', detail: 'Ten to twelve weeks. Budget the full hour range and cover both the science and the profession with a structured review, because the exam assumes a teacher-preparation knowledge base in both directions.' }
    ]
  },

  prepStrategies: {
    summary:
      'The dominant preparation strategy for 5551 is to cover all five content areas systematically and to practise the applied-pedagogy items specifically, because the exam tests both health-science knowledge and the professional knowledge of how to teach it — the items describe classroom and community situations and ask what a health educator would do, so candidates who only review the science miss the pedagogy half of the paper. The content spans health education as a discipline, health promotion and prevention of injury and disease, community health and advocacy, healthy relationships and mental and emotional health, and health education pedagogy, anchored in the SHAPE America and SOPHE teacher-preparation standards, so the ETS Study Companion and those standards together form the scope map. The highest-yield habits are, first, learning the applied classroom judgement: the pedagogy items ask what a teacher would do with a described student, classroom or community situation, so study instructional planning, differentiation, assessment and advocacy as decisions with rationales rather than definitions. Second, master the prevention content — the major chronic and infectious diseases and their modifiable risk factors — because disease prevention is the scientific core of the exam and appears across multiple items. Third, know the health behaviour theories and how they translate into teaching strategies, because the items reward connecting theory to practice. Fourth, review the developmental appropriateness of content for elementary, junior high and senior high students, because the exam is a K-12 test and the same topic is taught differently at different levels. Fifth, run full 120-question, 120-minute practice exams so the one-minute-per-question pace is familiar, since the exam is selected-response only and machine-scored, making speed and coverage the whole game. Finally, confirm your state\u2019s required passing score before studying, because the target determines how much margin the harder content areas can afford.',
    items: [
      {
        title: 'Practise the applied-pedagogy items specifically',
        detail: 'A large share of the exam describes a student, classroom or community situation and asks what a health educator would do. Study instructional planning, differentiation, assessment and advocacy as decisions with rationales, because candidates who only review the science miss the pedagogy half of the paper.'
      },
      {
        title: 'Master the prevention content',
        detail: 'Chronic and infectious disease prevention — nutrition, physical activity, substance use, injury and violence prevention — is the scientific core of the exam. Learn the major conditions and their modifiable risk factors cold, because prevention items recur across the paper.'
      },
      {
        title: 'Connect health behaviour theory to practice',
        detail: 'The exam tests the theories that explain and predict health behaviour and how they translate into teaching strategies. Study each model as a tool a health educator would use — what it predicts, what it implies for instruction — because the items reward theory-to-practice reasoning.'
      },
      {
        title: 'Learn the developmental-appropriateness distinctions',
        detail: 'The test covers elementary, junior high and senior high health education, so the same topic is taught differently at each level. Review what content and methods are developmentally appropriate at each stage, because the items test that judgment directly.'
      },
      {
        title: 'Run full 120-question practice exams',
        detail: 'The exam is 120 questions in 120 minutes — one minute per question — and it is selected-response only, so speed and coverage are the whole game. Run at least two full-length practice exams before test day to build the pace and find the content areas that need work.'
      },
      {
        title: 'Confirm your state\u2019s required score before studying',
        detail: 'Each state sets its own passing scaled score for 5551, and ETS publishes the state requirements. Look yours up first, because the target determines how much margin the harder content areas must provide and where to draw the line on the more detailed science items.'
      }
    ]
  },

  resourceComparison: {
    summary:
      '5551 preparation is anchored by the free official ETS materials, because the ETS test page and Study Companion define the five content areas, the question counts and the SHAPE America and SOPHE standard basis, and the sample questions show the difficulty more honestly than most third-party products. The exam itself costs $130 under the ETS fee schedule for selected-response-only tests, computer-delivered at a test centre or at home, and is offered year-round; fee waivers are available to eligible students. Beyond the official set, the main paid options are review books from major publishers at roughly $30-50, which add structured coverage of the health-science and pedagogy content; online courses at roughly $50-200, which add video instruction in the content areas; and question banks or practice-test subscriptions at roughly $30-100, which add volume and pacing practice. The buying logic follows the exam structure: because the exam is a broad selected-response test with no written section, the resources that provide broad coverage and question volume are worth more than a resource focused on one narrow area, and most candidates need one review book or course for the content plus timed practice rather than a stack of materials. Candidates from health, PE or nursing backgrounds may find a question bank alone sufficient, while candidates from general education benefit more from a structured content review. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, we rank nothing by commission, and the free official materials should be the first download for every candidate. Confirm the state\u2019s required passing score before choosing how much to spend, since the target affects how much practice is enough.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ETS Praxis page and Study Companion (5551) official', values: ['Free', 'Web page + PDF: outline, sample questions', 'The authoritative scope map and format guide — download first'] },
      { label: 'Health Education exam (ETS)', values: ['$130', 'Computer-delivered, test centre or at home', 'The real exam; fee waivers available to eligible students'] },
      { label: 'Review book (major publisher)', values: ['~$30-50', 'Print + eBook with practice questions', 'Structured coverage of the health-science and pedagogy content'] },
      { label: 'Online course', values: ['~$50-200', 'Video instruction plus practice', 'Candidates wanting the content taught, especially from general education'] },
      { label: 'Question bank / practice-test subscription', values: ['~$30-100', 'Online timed practice', 'Volume and pacing practice close to the exam'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax and change frequently; we rank nothing by commission. The ETS fee for selected-response-only Praxis tests is $130, and fee waivers are available to eligible students. Confirm the state-required passing score before choosing how much to spend.'
  },

  commonMistakes: {
    summary:
      'The failures on 5551 are rarely about lacking health knowledge — they are about studying only the science and ignoring the profession, or vice versa, when the exam tests both at the level a K-12 health education teacher needs. The single most common mistake is treating the exam as a health-science test: candidates with a health, PE or nursing background review nutrition and disease prevention and then miss the pedagogy items, which describe a classroom or community situation and ask what a health educator would do — planning, differentiation, assessment and advocacy as applied decisions. The second is the mirror image: general education teachers who know instruction well but skip the health-science content, especially disease prevention and substance use, and lose the scientific core of the paper. The third is ignoring the developmental-appropriateness dimension, since the exam covers elementary, junior high and senior high and the same topic is taught differently at each level; candidates who study one grade band guess on the others. The fourth is memorising definitions without learning the health behaviour theories and how they translate into teaching strategies, when the items reward theory-to-practice reasoning. The fifth is never running a full 120-question, 120-minute practice exam, so the one-minute-per-question pace surprises them on test day. And the sixth is never checking the state\u2019s required passing score, so a candidate aims at the wrong target entirely. None of these are knowledge gaps in health education per se; every one is correctable with balanced coverage of the five content areas and full-length rehearsal, which is why candidates who close the specific gap pass on the retake.',
    items: [
      {
        mistake: 'Treating the exam as a health-science test only',
        fix: 'The exam tests both the science and the profession. Study planning, differentiation, assessment and advocacy as applied classroom and community decisions alongside the content, because the pedagogy items reward judgment that content review alone does not provide.'
      },
      {
        mistake: 'Skipping the health-science content',
        fix: 'Disease prevention, nutrition, substance use, and injury and violence prevention are the scientific core of the paper. General education teachers who know instruction well still need structured coverage of the health content, because the items test it directly.'
      },
      {
        mistake: 'Ignoring the developmental-appropriateness dimension',
        fix: 'The exam covers elementary, junior high and senior high health education. Learn what content and methods are appropriate at each level, because the same topic is taught differently across the grade bands and the items test that judgment.'
      },
      {
        mistake: 'Memorising definitions without theory-to-practice reasoning',
        fix: 'Learn the health behaviour theories as tools — what each predicts and what it implies for instruction — because the items reward connecting theory to teaching strategies, not reciting definitions.'
      },
      {
        mistake: 'Never running a full timed practice exam',
        fix: 'The exam is 120 questions in 120 minutes — one minute per question — and selected-response only, so speed and coverage are the whole game. Run at least two full-length practice exams before test day to build the pace and find the weak areas.'
      },
      {
        mistake: 'Never checking the state\u2019s required passing score',
        fix: 'Each state sets its own passing scaled score for 5551, and ETS publishes the state requirements. Look yours up before studying, because the target determines how much margin the harder content areas must provide.'
      }
    ]
  },

  questionTypes: {
    summary:
      'Health Education (5551) is a 120-minute, computer-delivered test of 120 selected-response questions, scored on the Praxis reporting scale with a passing score set by each certifying state. The exam is selected-response only — every question is multiple choice or a selected-response variant — so it is machine-scored and reported on the standard Praxis cycle, and the practical pace is about one minute per question. The content is based largely on the teacher-preparation standards of SHAPE America and SOPHE and covers five broad areas: health education as a discipline, health promotion and prevention of injury and disease, community health and advocacy, healthy relationships and mental and emotional health, and health education pedagogy. Within those areas, the questions split into two broad styles: content-knowledge items, which test the health science itself — nutrition, physical activity, chronic and infectious disease prevention, substance use prevention, mental and emotional health, and injury prevention — and applied-professional items, which present a student, classroom or community situation and ask what a health educator would do, testing planning, instructional methods, differentiation, assessment, advocacy and communication. A recurring sub-theme is developmental appropriateness: the same topic appears at the elementary, junior high and senior high level, and the correct teaching move depends on the grade band. A further recurring style connects health behaviour theory to practice, asking which model or strategy best addresses a described situation. Some questions may require selecting more than one answer, and the test may include unscored pretest questions, so every item should be answered. Because the exam has no written section, the score is purely the product of selected-response accuracy under a one-minute-per-question pace. The three samples below illustrate a content-knowledge item, an applied-pedagogy item, and a developmental-appropriateness item; they are editor-written to the published blueprint and are not live test items.',
    types: [
      { name: 'Content-knowledge items', share: 'The scientific core', detail: 'Nutrition, physical activity, disease prevention, substance use, mental and emotional health, and injury prevention. Facts and concepts a K-12 health education teacher must know.' },
      { name: 'Applied professional items', share: 'A large share', detail: 'A student, classroom or community situation is described and you choose the health educator\u2019s move — planning, instruction, differentiation, assessment, advocacy or communication.' },
      { name: 'Developmental-appropriateness items', share: 'Recurring across the test', detail: 'The same topic at elementary, junior high or senior high level; the correct content and method depend on the grade band, and the item tests that judgment.' },
      { name: 'Theory-to-practice items', share: 'A recurring minority', detail: 'A health behaviour theory or model is applied to a described situation, testing whether you can connect theory to teaching strategies.' }
    ],
    samples: [
      {
        prompt: 'A school health education program wants to reduce tobacco use among middle school students. Which approach is most consistent with evidence-based prevention practice?',
        options: [
          'A. A single assembly featuring graphic images of smoking-related illness once per year',
          'B. A multi-session, skills-based curriculum that teaches refusal skills and social-norms correction across several grades',
          'C. Distribution of informational brochures at a school health fair',
          'D. A punitive policy that suspends students caught with tobacco products'
        ],
        answer: 'B',
        explanation: 'Evidence-based substance-use prevention in schools relies on multi-session, skills-based curricula delivered across grades that teach refusal skills, correct perceived norms about peer use, and build the social-emotional competencies that predict non-use; one-shot assemblies and passive information are the least effective formats. A is a single, passive exposure that does not change behaviour, the classic non-evidence-based approach the item is written to reject. C is passive information distribution with no skill building. D is a punitive policy that does not constitute health education and can be counterproductive. The item tests the prevention-content and pedagogy standard that effective health education is sequential, skills-based and delivered across grade levels — a high-frequency concept on this exam.'
      },
      {
        prompt: 'A health education teacher is planning a lesson on nutrition for a class that includes several English learners and a student with a reading disability. Which approach best ensures all students can access the content?',
        options: [
          'A. Assign the textbook chapter for homework and give a written quiz the next day',
          'B. Use visuals, vocabulary pre-teaching and cooperative learning, and assess with multiple formats',
          'C. Reduce the nutrition content to the simplest level so all students can read it independently',
          'D. Have the English learners complete a separate worksheet while the rest of the class discusses'
        ],
        answer: 'B',
        explanation: 'Visuals, pre-teaching of key vocabulary and cooperative learning scaffold access to grade-level content without lowering expectations, and multiple assessment formats let students demonstrate understanding in more than one way — the defining practice of differentiating instruction for English learners and students with reading disabilities. A provides no in-class support and assesses in one written format that penalises exactly the students who need support. C lowers the content, denying access to the curriculum and the other students\u2019 learning opportunity. D separates the English learners and gives them a different task, reducing both access and the chance to learn with peers. The item tests the pedagogy content — varied pathways to the same content, not different content or lower standards — which is a core principle of this exam\u2019s instruction standards.'
      },
      {
        prompt: 'A health educator is teaching about the risks of substance use. For which grade band is teaching refusal skills through role-play and peer scenarios most developmentally appropriate?',
        options: [
          'A. Kindergarten through grade 2',
          'B. Grades 3 through 5',
          'C. Middle school (grades 6-8)',
          'D. High school only'
        ],
        answer: 'C',
        explanation: 'Middle school is the developmental sweet spot for refusal-skills training through role-play and peer scenarios: students at this age are beginning to face peer pressure around substance use, are capable of abstract reasoning about consequences, and are at the age where prevention programs show the greatest effect, which is why the strongest evidence-based curricula target middle grades. A and B are too early for peer-pressure-specific refusal role-plays in the same way, though elementary programs introduce the foundations; D is too late, because by high school many prevention programs have less effect and the training should have already occurred. The item tests the developmental-appropriateness dimension of the exam — the same topic, taught at the right level for the grade band — which is exactly the judgment the 5551 items reward when they pair content with a student age group.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      'Health Education (5551) is a 120-minute, computer-delivered test taken at a Praxis test centre or at home through ETS online proctoring, and the direct exam-day answer is that you will sit 120 selected-response questions in 120 minutes, and because the exam is selected-response only, scores are machine-scored and reported on the standard Praxis cycle rather than on screen. Arrive with your admission ticket and a valid photo ID whose name matches your Praxis registration exactly; a mismatch means no test and a forfeited fee. At the test centre, personal items, phones and study materials go in a locker; for at-home testing, the ETS Secure Test Browser, a webcam and a private room are required, and the proctor verifies identity and scans the room before the exam begins. Pace the 120 minutes at about one minute per question, answer every question because there is no penalty for guessing and some items are unscored pretest questions, and flag uncertain items to return to if the interface allows. Some questions require selecting more than one answer, so read each instruction carefully. The entire test is one section, so manage the clock globally and resist spending more than a minute on any single item; the breadth of the content means the pacing plan is what carries you through the harder items. Expect a controlled environment and follow the proctor\u2019s instructions exactly, because ETS security rules are strict and violations can invalidate the score. Confirm your state\u2019s required passing score before the day, because that number, not the 120-minute format, defines what passing means for you. Candidates who have run full 120-question practice exams find the pace familiar, which is the single biggest advantage on a selected-response test of this breadth.',
    bring: [
      'Admission ticket from your ETS Praxis account',
      'A valid photo ID (driver\u2019s license, passport or school ID accepted per Praxis rules) with a name matching your registration',
      'For at-home testing: a computer with the ETS Secure Test Browser, a webcam, a microphone and a private room',
      'Prescription glasses if needed; the test centre provides a locker for everything else'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and any electronic device — locked at the centre, out of the room for at-home testing',
      'All notes, books and study materials; the centre provides note-taking material if any is allowed',
      'Bags, coats and food or drink beyond what the test centre permits',
      'For at-home testing: any other person, second monitor or unapproved device in the room'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm the test-centre address or at-home system requirements, the ID rule, and the state\u2019s required passing score on the ETS state-requirements page.' },
      { time: '30 minutes before', detail: 'Arrive at the centre and complete check-in with ticket and ID, or log in to the at-home session for the identity and room checks.' },
      { time: '0-120 minutes', detail: '120 selected-response questions at about a minute each. Answer everything, read multi-answer instructions carefully, and return to flagged items if the interface allows.' },
      { time: 'After the exam', detail: 'Submit and leave. Scores post to your ETS account on the standard machine-scored cycle, typically within a few weeks.' }
    ],
    rules: [
      '120 minutes for 120 selected-response questions.',
      'The passing score is set by the certifying state, not by ETS; confirm your state\u2019s required scaled score before the exam.',
      'Photo ID with a name matching your Praxis registration exactly is required, or you are turned away and the fee is forfeited.',
      'No personal items in the room; no calculators, notes or study materials.',
      'For at-home testing, the ETS Secure Test Browser, a webcam and a private room are required, and the room is scanned by the proctor.',
      'Some questions require selecting more than one answer, and some items are unscored pretest questions — answer everything.'
    ],
    afterwards:
      'Because 5551 is selected-response only, it is machine-scored and results post to your ETS Praxis account on the standard cycle, typically within a few weeks, and your score report shows your scaled score plus a performance breakdown by content area. On a score at or above your state\u2019s requirement, your score is sent to the designated recipients and becomes part of your licensure file — 5551 is a licensure step, not the license itself, so continue with the remaining certification steps in your state. On a score below the requirement, you can retake after ETS\u2019s 28-day waiting rule, paying the full $130 fee each time, and there is no limit on attempts. Use the score report as the diagnosis: it shows raw points earned versus available by category, so it tells you exactly whether the loss was in the health-science content or the professional-pedagogy content. If the pedagogy items dragged the score down, spend the retake window practising applied classroom and community decisions; if it was the science, re-drill the prevention and content areas specifically. Candidates who retake after closing the specific gap rather than re-reading everything are the ones who pass on the next attempt.'
  }
};

export default data;
