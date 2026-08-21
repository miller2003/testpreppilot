const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Food safety & hospitality certifications desk',
    bio: 'This desk covers food-safety and hospitality credentials. Exam structure, fees and rules come from the certifying body\'s official pages (ServSafe/National Restaurant Association), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the ServSafe Food Protection Manager program pages and BLS OOH Food Service Managers (SOC 35-2021), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$66,860 median for food service managers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "ServSafe Manager" — the ServSafe Food Protection Manager certification validates food-safety knowledge, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Food Service Managers, SOC 35-2021, which had a May 2024 median wage of $66,860, with the lowest 10 percent under $41,450 and the highest 10 percent above $112,000. The fit is direct: the certification is the standard requirement for food-safety managers in restaurants, institutional kitchens and retail foodservice, and in many jurisdictions a certified manager must be on staff — so the credential is a gate to the manager role itself. BLS counted 286,100 food service manager jobs in 2024 and projects 3 percent growth from 2024 to 2034, with about 27,700 openings a year, nearly all replacement demand. The limitation to state plainly: the BLS median covers all food service managers, certified or not, and the certification carries no wage premium in government data; its value is employability — many employers require it for management positions, and health-department audits check for a certified manager. Read the number as the market for the role the credential unlocks, and note that front-line food workers earn substantially less, around the median for food preparation and serving workers.',
    rows: [
      { label: 'Median annual wage, food service managers', value: '$66,860', note: 'BLS OOH, SOC 35-2021, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $41,450', note: 'BLS OOH, SOC 35-2021, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $112,000', note: 'BLS OOH, SOC 35-2021, May 2024' },
      { label: 'Projected openings per year', value: '~27,700', note: 'BLS OOH, SOC 35-2021, 2024-2034' }
    ],
    growth: 'BLS projects 3 percent growth for food service managers from 2024 to 2034, about 27,700 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Food Service Managers', url: 'https://www.bls.gov/ooh/management/food-service-managers.htm' }
  },
  passRate: {
    headline: 'ServSafe publishes the format and the 75% passing standard, and reports that most candidates pass on the first attempt',
    summary: 'ServSafe (the National Restaurant Association) publishes the passing standard and describes the certification as passable by the large majority of prepared candidates, though it does not publish a precise cohort pass-rate statistic in its official materials; we treat the "most candidates pass" framing as the body\'s own characterization rather than a precise figure. What ServSafe does publish is the format: the Food Protection Manager exam has 90 questions with a 2-hour time limit, and a passing score of 75 percent — at least 68 correct answers. The exam is delivered on paper or by computer through ServSafe\'s proctored network, and the certification is valid for five years, renewable by retaking the exam. The exam content follows the ServSafe course: foodborne microorganisms and allergens, personal hygiene, time and temperature control, cross-contamination prevention, cleaning and sanitizing, and the food-safety management system. The practical reading: the 75 percent line on 90 questions is an achievable bar for candidates who complete the ServSafe course and study, and the bigger failure mode is administrative — arriving without the required identification or a valid exam voucher — rather than content failure.',
    source: { label: 'ServSafe - Food Protection Manager Certification', url: 'https://www.servsafe.com/ServSafe-Manager' },
    caveat: 'ServSafe publishes the 75% passing standard and course-pass framing but not a precise cohort pass rate.'
  },
  studyPlan: {
    summary: 'The ServSafe Food Protection Manager exam is a 90-question, 2-hour test with a 75 percent passing line, and its curriculum is the ServSafe Manager course: the six content areas of food safety — microorganisms and foodborne illness, personal hygiene, time and temperature control, cross-contamination, cleaning and sanitizing, and the food-safety management system. A defensible plan runs 12 to 20 hours over one to two weeks. Days one to three: work the course material on the pathogens — the Big Six illnesses, their sources and prevention — because foodborne-illness items are a large share of the exam. Days four to six: master time and temperature control — the temperature danger zone, minimum cooking temperatures, cooling and reheating rules, and holding requirements — the largest and most item-heavy content area. Days seven to nine: cover cross-contamination, cleaning and sanitizing (including the chemical sanitizers and their concentrations), and personal hygiene. Day ten: take the ServSafe practice exam, review weak areas, and schedule the certification. The plan is compact because the scope is focused and the exam is a professional requirement, not a competitive gate; most candidates pass with the course plus practice.',
    totalHours: '12-20 hours over 1-2 weeks',
    weeks: [
      { label: 'Days 1-3', focus: 'Pathogens and illness', tasks: ['The Big Six foodborne illnesses: sources and prevention', 'Food allergens and their management', 'Personal hygiene and handwashing rules'], hours: 6 },
      { label: 'Days 4-6', focus: 'Time and temperature', tasks: ['The temperature danger zone and holding rules', 'Minimum cooking temperatures by food', 'Cooling, reheating and thawing procedures'], hours: 6 },
      { label: 'Days 7-9', focus: 'Contamination, cleaning, sanitizing', tasks: ['Cross-contamination prevention and storage order', 'Cleaning vs sanitizing; sanitizer concentrations', 'The food-safety management system'], hours: 5 },
      { label: 'Day 10', focus: 'Practice and exam', tasks: ['Take the ServSafe practice exam', 'Review weak content areas', 'Sit the certification exam'], hours: 3 }
    ],
    variants: [
      { label: 'Experienced kitchen manager', detail: 'Compress the plan to 5-7 days; the time-and-temperature details and sanitizer concentrations are the highest-yield review.' },
      { label: 'New to foodservice', detail: 'Stretch to 3 weeks; the course readings matter more when the kitchen context is unfamiliar.' }
    ]
  },
  prepStrategies: {
    summary: 'The ServSafe Manager exam rewards applied food-safety reasoning, so the dominant strategy is learning the rules as a system rather than memorising isolated facts: the exam asks what to do in a described kitchen situation, so practice items are where the learning happens. Second, master time and temperature as the largest content block — the danger zone (41°F to 135°F), minimum cooking temperatures for poultry, ground meats, seafood and eggs, and the cooling and reheating procedures — because candidates who know these cold cover the biggest share of items. Third, learn the "Big Six" illnesses and their control points: the exam tests which food is linked to which pathogen and what prevents it. Fourth, study the sanitizer concentrations and the cleaning-versus-sanitizing distinction precisely, because those items reward exact numbers. Fifth, use the ServSafe practice exam, which closely mirrors the real item style, and hold yourself to 80 percent-plus on practice because the 75 percent line leaves little margin on a 90-question paper. Finally, remember the certification is valid five years; note your renewal date and plan the retake.',
    items: [
      { title: 'Drill applied scenarios', detail: 'The exam asks what to do in a kitchen situation; practise that decision style.' },
      { title: 'Master time and temperature', detail: 'The danger zone, cooking minimums and cooling rules are the largest block.' },
      { title: 'Learn the Big Six', detail: 'Pathogen-to-food links and their prevention are tested directly.' },
      { title: 'Know the sanitizer numbers', detail: 'Concentrations and the clean-versus-sanitize distinction reward exact recall.' },
      { title: 'Plan the five-year renewal', detail: 'The certification is valid 5 years; mark the retake date.' }
    ]
  },
  resourceComparison: {
    summary: 'ServSafe prep is inexpensive because the course and exam are bundled. The ServSafe Food Protection Manager course is offered in three formats — online, print and classroom — with pricing from roughly $100 to $300 depending on format and whether the exam voucher is included; the standard package is the online course plus the exam. The ServSafe practice exam and study guide are the key supplements, and the ServSafe website provides the content outline free. Third-party study guides ($20-$50) and question banks ($20-$60) add practice volume. Free resources include the ServSafe content outline, state food-code publications and the FDA Food Code, which is the regulatory reference behind the exam. A realistic total budget is $120 to $350 including the course and exam. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ServSafe content outline', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'ServSafe Manager course (online)', values: ['~$100-$200', 'Online course + exam voucher', 'The standard path; bundle the exam'] },
      { label: 'ServSafe classroom course', values: ['~$200-$300', 'Instructor-led class + exam', 'Learners who prefer live instruction'] },
      { label: 'ServSafe practice exam', values: ['~$30-$50', 'Online practice items', 'The closest thing to the real exam'] },
      { label: 'Third-party question banks', values: ['$20-$60', 'Online practice items', 'Extra drilling volume'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; ServSafe pricing varies by format and provider; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common ServSafe mistake is memorising facts without learning the applied rules: candidates who know what salmonella is but cannot answer what temperature poultry must reach miss the largest block of items. The fix is scenario drilling, especially on time and temperature. The second mistake is confusing cleaning with sanitizing, or misremembering the sanitizer concentrations — the exam tests the exact numbers, and a common failing is knowing the procedure but not the strength. Third, candidates mislearn the danger zone boundaries or the cooling rules, which are tested precisely (41°F-135°F, and cooling from 135°F to 70°F in two hours then to 41°F in four). Fourth, some candidates skip the practice exam and meet the item style cold; the applied phrasing is learnable, so practise it. Finally, administrative mistakes — missing ID, an expired voucher, or scheduling at the wrong site — are a real failure mode; confirm the logistics before exam day.',
    items: [
      { mistake: 'Memorising facts, not rules', fix: 'Drill what to do in described kitchen situations, especially temperatures.' },
      { mistake: 'Confusing cleaning and sanitizing', fix: 'Learn the distinction and the exact sanitizer concentrations.' },
      { mistake: 'Mislearning the cooling rules', fix: '135°F to 70°F in 2 hours, then to 41°F in 4 — tested precisely.' },
      { mistake: 'Skipping the practice exam', fix: 'The applied item style is learnable; take the official practice exam.' },
      { mistake: 'Administrative slip-ups', fix: 'Confirm ID, voucher and site before exam day.' }
    ]
  },
  questionTypes: {
    summary: 'The ServSafe Manager exam is a 90-question multiple-choice exam in 2 hours. The items are scenario-heavy: a described kitchen situation — a delivery, a storage problem, a cooling procedure, a cleaning task — followed by the correct food-safety action or rule. The exam covers the six content areas, with time and temperature the largest block. Samples below are editor-written illustrations of the published course content, not live exam items; they show the applied, kitchen-scenario style of the real items.',
    types: [
      { name: 'Time and temperature items', share: 'Largest block', detail: 'Danger zone, cooking minimums, cooling and holding rules.' },
      { name: 'Pathogen and hygiene items', share: 'Large block', detail: 'Foodborne illnesses, allergens, personal hygiene.' },
      { name: 'Contamination and cleaning items', share: 'Large block', detail: 'Cross-contamination, cleaning vs sanitizing, storage order.' }
    ],
    samples: [
      {
        prompt: 'A cook is preparing ground beef patties. To be safe, the patties must be cooked to an internal temperature of at least:',
        options: ['A. 155°F', 'B. 145°F', 'C. 165°F', 'D. 135°F'],
        answer: 'A',
        explanation: 'Ground meats (including ground beef) must reach 155°F for 15 seconds. Whole muscle meats are 145°F, poultry is 165°F, and 135°F is the holding temperature for hot food — mixing them up is the classic trap.'
      },
      {
        prompt: 'A food worker has diarrhea and reports to work. Under ServSafe rules, the manager should:',
        options: ['A. Restrict the worker from food-handling duties and exclude as required', 'B. Allow the worker to handle only pre-packaged food', 'C. Send the worker to work in the kitchen', 'D. Let the worker decide'],
        answer: 'A',
        explanation: 'A food worker with diarrhea must be excluded from the operation per food-safety rules (a diarrheal symptom triggers exclusion, not just restriction). Allowing any food handling, kitchen work or self-assessment misapplies the symptom-based policy.'
      },
      {
        prompt: 'To cool a large pot of chili safely, the first step per ServSafe is to:',
        options: ['A. Place it in shallow pans and refrigerate', 'B. Cover it tightly and leave it on the counter overnight', 'C. Add ice to the chili', 'D. Wait until morning to cool it'],
        answer: 'A',
        explanation: 'Shallow pans increase surface area and speed cooling, which is the first step of proper cooling. Leaving chili on the counter, covering it tightly at room temperature or waiting overnight each keep it in the danger zone and violate the cooling rules.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published course content, not live exam items.'
  },
  examDay: {
    summary: 'The ServSafe Food Protection Manager exam is a 90-question, 2-hour test delivered on paper or by computer through ServSafe\'s proctored network, typically at a training site or an approved testing location. Bring the required identification matching your registration and the exam voucher; without them you may be turned away. Arrive early — the site has check-in procedures. Pace at about 80 seconds per item and flag uncertain items for review; the 75 percent line (68 of 90) leaves a modest margin, so review flagged items carefully. Your result is reported after scoring, and ServSafe issues the certificate on a pass. If you do not pass, you retake per the program\'s policy, typically after additional study. On a pass, the certification is valid for five years and is renewed by retaking the exam. The afterwards matters: provide the certificate to your employer for the health-department requirement, note the renewal date, and keep a copy for audits.',
    bring: ['Required identification per the exam confirmation', 'Your exam voucher', 'Any materials the site requires'],
    leave: ['Phone, smartwatch and personal electronics', 'Notes and study materials — the exam is closed book'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the site, ID requirements and voucher; arrive early for check-in.' },
      { time: 'Exam', detail: '90 questions in 2 hours; pace ~80 seconds per item, flag and review.' },
      { time: 'After submit', detail: 'Result is reported; the certificate is issued on a pass.' },
      { time: 'Next', detail: 'Provide the certificate to your employer and note the 5-year renewal date.' }
    ],
    rules: [
      'The exam is closed book',
      '90 questions in 2 hours; the clock does not pause',
      'The certification is valid 5 years, renewed by retaking'
    ],
    afterwards: 'On a pass, your ServSafe Manager certification is valid for five years; provide it to your employer and mark the renewal date. On a fail, retake after additional course and practice-exam study.'
  }
};

export default data;
