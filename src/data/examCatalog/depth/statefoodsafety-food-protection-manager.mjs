const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Food safety & hospitality certifications desk',
    bio: 'This desk covers food-safety and hospitality credentials. Exam structure, fees and rules come from the certifying body\'s official pages (StateFoodSafety), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the StateFoodSafety Food Protection Manager pages and BLS OOH Food Service Managers (SOC 35-2021), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$66,860 median for food service managers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "StateFoodSafety Manager" — the Food Protection Manager certification validates food-safety knowledge, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Food Service Managers, SOC 35-2021, which had a May 2024 median wage of $66,860, with the lowest 10 percent under $41,450 and the highest 10 percent above $112,000. The fit is direct: the certification is an ANSI-accredited food-safety manager credential used by restaurants and foodservice operations to satisfy health-department manager requirements, and it is the same role the ServSafe and NEHA credentials serve. BLS counted 286,100 food service manager jobs in 2024 and projects 3 percent growth from 2024 to 2034, with about 27,700 openings a year, nearly all replacement demand. The limitation to state plainly: the BLS median covers all food service managers, certified or not, and the certification carries no wage premium in government data; its value is employability and compliance — many employers require a certified manager on staff, and the credential satisfies the inspection requirement. Read the number as the market for the role the credential unlocks.',
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
    headline: 'StateFoodSafety publishes the format and the 75% passing standard — and does not publish a cohort pass rate',
    summary: 'StateFoodSafety does not publish cohort pass rates for its Food Protection Manager exam, and third-party estimates are not official data, so we do not treat them as authoritative. What StateFoodSafety does publish is the format and the passing standard: the Food Protection Manager exam has 90 questions with a 2-hour time limit, and a passing score of 75 percent — at least 68 correct answers. The exam is delivered online through the StateFoodSafety platform with proctoring, and the certification is ANSI-accredited, which is what health departments look for when they require a certified food-safety manager. The exam content follows the FDA Food Code: foodborne microorganisms and allergens, personal hygiene, time and temperature control, cross-contamination prevention, cleaning and sanitizing, and the food-safety management system. The absence of a published pass rate is not an absence of standards: the 75 percent line on 90 questions is an achievable bar for candidates who complete the training and study, and the ANSI accreditation is the structural guarantee that the exam meets the industry standard. The practical reading: prepare with the StateFoodSafety training course, hold yourself to 80 percent-plus on practice, and confirm the certification satisfies your employer\'s and health department\'s requirements.',
    source: { label: 'StateFoodSafety - Food Protection Manager Certification', url: 'https://www.statefoodsafety.com/food-manager' },
    caveat: 'StateFoodSafety publishes the 75% passing standard but no cohort pass rate; the exam is ANSI-accredited.'
  },
  studyPlan: {
    summary: 'The StateFoodSafety Food Protection Manager exam is a 90-question, 2-hour test with a 75 percent passing line, and its curriculum is the FDA Food Code-based training: foodborne microorganisms and allergens, personal hygiene, time and temperature control, cross-contamination, cleaning and sanitizing, and the food-safety management system. A defensible plan runs 10 to 16 hours over one week. Days one to two: the training course on the pathogens — the Big Six illnesses, their sources and prevention — because foodborne-illness items are a large share of the exam. Days three to four: time and temperature control — the danger zone (41°F to 135°F), minimum cooking temperatures, cooling and reheating, and holding — the largest content area. Days five to six: cross-contamination, cleaning versus sanitizing (including the sanitizer concentrations), and personal hygiene. Day seven: the practice exam, review of weak areas, then the proctored exam. The plan is compact because the scope is focused and the training course carries the content; most candidates pass with the course plus practice.',
    totalHours: '10-16 hours over 1 week',
    weeks: [
      { label: 'Days 1-2', focus: 'Pathogens and hygiene', tasks: ['The Big Six foodborne illnesses', 'Food allergens', 'Personal hygiene and handwashing'], hours: 4 },
      { label: 'Days 3-4', focus: 'Time and temperature', tasks: ['The danger zone and holding', 'Minimum cooking temperatures', 'Cooling, reheating and thawing'], hours: 4 },
      { label: 'Days 5-6', focus: 'Contamination and cleaning', tasks: ['Cross-contamination prevention', 'Cleaning vs sanitizing and concentrations', 'The food-safety management system'], hours: 4 },
      { label: 'Day 7', focus: 'Practice and exam', tasks: ['Take the practice exam', 'Review weak areas', 'Sit the proctored exam'], hours: 3 }
    ],
    variants: [
      { label: 'Experienced kitchen manager', detail: 'Compress to 4-5 days; the time-and-temperature details and sanitizer numbers are the highest-yield review.' },
      { label: 'New to foodservice', detail: 'Stretch to 10 days; the training course readings matter more without kitchen context.' }
    ]
  },
  prepStrategies: {
    summary: 'The StateFoodSafety exam rewards applied food-safety reasoning, so the dominant strategy is learning the rules as a system rather than memorising isolated facts: the exam asks what to do in a described kitchen situation, so the practice items are where the learning happens. Second, master time and temperature as the largest content block — the danger zone, the minimum cooking temperatures and the cooling and reheating procedures — because candidates who know these cold cover the biggest share of items. Third, learn the Big Six illnesses and their control points, and the sanitizer concentrations precisely, because those items reward exact numbers. Fourth, use the StateFoodSafety practice exam, which mirrors the real item style, and hold yourself to 80 percent-plus on practice because the 75 percent line leaves little margin on 90 questions. Finally, confirm the certification\'s acceptance before you commit: the ANSI-accredited credential satisfies most health-department manager requirements, but your jurisdiction and employer are the authority on whether it meets their specific rule.',
    items: [
      { title: 'Drill applied scenarios', detail: 'The exam asks what to do in a kitchen situation; practise that decision style.' },
      { title: 'Master time and temperature', detail: 'The danger zone, cooking minimums and cooling rules are the largest block.' },
      { title: 'Learn the Big Six and sanitizers', detail: 'Pathogen-to-food links and the exact sanitizer concentrations are tested.' },
      { title: 'Hold to 80%+ on practice', detail: 'The 75% line leaves little margin on 90 questions.' },
      { title: 'Confirm acceptance first', detail: 'Check your jurisdiction\'s and employer\'s requirements for the credential.' }
    ]
  },
  resourceComparison: {
    summary: 'StateFoodSafety prep is inexpensive because the course and exam are bundled in the provider\'s package. The Food Protection Manager package — online training plus the proctored exam — runs roughly $100-$150, and the provider\'s practice exam is included or low-cost. The StateFoodSafety training is the primary resource, and the FDA Food Code (free) is the regulatory reference behind the content. Third-party food-safety study guides ($20-$50) and question banks ($20-$60) add volume but are optional, because the provider\'s course covers the scope. A realistic total budget is $120 to $250 including the exam. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'StateFoodSafety training + exam package', values: ['~$100-$150', 'Online training + proctored exam', 'The standard path'] },
      { label: 'Practice exam', values: ['Often included', 'Online practice items', 'The closest item style'] },
      { label: 'FDA Food Code', values: ['Free', 'Official reference', 'The regulatory basis of the content'] },
      { label: 'Third-party study guides and banks', values: ['$20-$60', 'Books and online practice', 'Extra drilling volume (optional)'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; StateFoodSafety pricing varies by package; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common StateFoodSafety mistake is memorising facts without learning the applied rules: candidates who know what salmonella is but not the temperature rules miss the largest block of items. The fix is scenario drilling, especially on time and temperature. The second mistake is confusing cleaning with sanitizing or misremembering the sanitizer concentrations, which are tested precisely. Third, candidates mislearn the danger zone and cooling rules, which are tested exactly (41°F-135°F, and 135°F to 70°F in two hours then to 41°F in four). Fourth, some candidates skip the practice exam and meet the item style cold. Finally, administrative mistakes — not confirming the certification is accepted by the local health department or employer — create rework; verify acceptance before you commit the time and fee.',
    items: [
      { mistake: 'Memorising facts, not rules', fix: 'Drill what to do in described kitchen situations, especially temperatures.' },
      { mistake: 'Confusing cleaning and sanitizing', fix: 'Learn the distinction and the exact sanitizer concentrations.' },
      { mistake: 'Mislearning the cooling rules', fix: '135°F to 70°F in 2 hours, then to 41°F in 4 — tested precisely.' },
      { mistake: 'Skipping the practice exam', fix: 'The applied item style is learnable; take the practice exam.' },
      { mistake: 'Not confirming acceptance', fix: 'Verify the certification meets your jurisdiction\'s and employer\'s requirement.' }
    ]
  },
  questionTypes: {
    summary: 'The StateFoodSafety Food Protection Manager exam is a 90-question multiple-choice exam in 2 hours, delivered online under proctoring. The items are scenario-heavy: a described kitchen situation followed by the correct food-safety action or rule, covering the FDA Food Code-based content with time and temperature the largest block. Samples below are editor-written illustrations of the published content, not live exam items; they show the applied, kitchen-scenario style of the real items.',
    types: [
      { name: 'Time and temperature items', share: 'Largest block', detail: 'Danger zone, cooking minimums, cooling and holding.' },
      { name: 'Pathogen and hygiene items', share: 'Large block', detail: 'Foodborne illnesses, allergens, personal hygiene.' },
      { name: 'Contamination and cleaning items', share: 'Large block', detail: 'Cross-contamination, cleaning vs sanitizing, storage.' }
    ],
    samples: [
      {
        prompt: 'A cook is preparing poultry. To be safe, the poultry must reach an internal temperature of at least:',
        options: ['A. 165°F', 'B. 155°F', 'C. 145°F', 'D. 135°F'],
        answer: 'A',
        explanation: 'Poultry must reach 165°F for 15 seconds. Ground meats are 155°F, whole muscle meats 145°F, and 135°F is the hot-holding temperature — mixing them up is the classic trap.'
      },
      {
        prompt: 'A food worker reports vomiting. The manager should:',
        options: ['A. Exclude the worker from the operation', 'B. Allow work with gloves only', 'C. Transfer the worker to the cash register', 'D. Let the worker continue if they feel able'],
        answer: 'A',
        explanation: 'Vomiting is an exclusion symptom — the worker must be excluded from the operation. Glove-only work, front-of-house transfer or self-assessment each violate the symptom-based exclusion policy.'
      },
      {
        prompt: 'To cool hot food quickly, the first step per the Food Code-based rules is to:',
        options: ['A. Reduce the food to shallow pans to speed cooling', 'B. Cover it and leave it out', 'C. Add warm water', 'D. Place it in a closed cooler immediately'],
        answer: 'A',
        explanation: 'Shallow pans increase surface area and speed cooling — the first step of proper cooling. Leaving food out, adding water or closing it in a cooler each keep the food in the danger zone.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published content, not live exam items.'
  },
  examDay: {
    summary: 'The StateFoodSafety Food Protection Manager exam is a 90-question, 2-hour online exam with proctoring, taken at a time you schedule. Confirm your system meets the proctoring requirements — webcam, stable internet and a quiet space — and close unrelated applications before starting. Pace at about 80 seconds per item, flag uncertain items for review, and finish with time to spare; the 75 percent line (68 of 90) leaves a modest margin, so review flagged items carefully. Your result is reported on completion, and the certificate is issued on a pass. If you do not pass, the retake policy defines the terms. On a pass, the certification is valid for five years and is renewed by retaking. The afterwards matters: provide the certificate to your employer for the health-department requirement, note the renewal date, and keep a copy for audits.',
    bring: ['Computer with webcam and stable internet', 'A quiet, private testing space', 'Your StateFoodSafety account login'],
    leave: ['Phone and other devices within the proctor\'s view', 'Notes and open browser tabs — the exam is closed book'],
    timeline: [
      { time: 'Before start', detail: 'Run the proctoring environment check; clear the desk and screen.' },
      { time: 'Exam', detail: '90 questions in 2 hours; pace ~80 seconds per item, flag and review.' },
      { time: 'After submit', detail: 'Result is reported; the certificate is issued on a pass.' },
      { time: 'Next', detail: 'Provide the certificate to your employer and note the 5-year renewal.' }
    ],
    rules: [
      'Closed-book online exam under proctoring',
      '90 questions in 2 hours; the clock does not pause',
      'The certification is valid 5 years, renewed by retaking'
    ],
    afterwards: 'On a pass, your certification is valid for five years; provide it to your employer and mark the renewal date. On a fail, retake after additional training review.'
  }
};

export default data;
