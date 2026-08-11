// Depth content for: clep-principles-of-microeconomics
// See examDepth.mjs for the full schema. All figures verified 2026-08.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'College credit-by-exam desk',
    bio: 'This guide is compiled and maintained by our college-credit desk. CLEP is a program of the College Board, and we take the exam structure (question count, timing, content percentages) from the College Board fact sheet for Principles of Microeconomics, which is revised on a published cycle. The credit recommendation comes from the American Council on Education (ACE), which reviews CLEP exams, while the score a college actually accepts is set by each institution, so we state the ACE figure and flag that the individual school decides. The exam fee is the College Board fee effective for the 2025-26 academic year. The College Board does not publish CLEP pass rates, and we do not invent one. Wage context, where it appears, comes from the Bureau of Labor Statistics education-level earnings data rather than from a CLEP-specific occupation, because no such occupation exists.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against the College Board CLEP Principles of Microeconomics fact sheet and the CLEP fee schedule effective for the 2025-26 academic year.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: 'No BLS occupation exists for a CLEP score — the value is college credit, and the earnings impact flows through the bachelor\u2019s-degree wage premium.',
    summary:
      'The direct answer is that no CLEP score has a salary attached to it. The Bureau of Labor Statistics does not classify workers by CLEP results, because CLEP is a credit-by-examination program rather than a credential for a named occupation, and anyone who quotes a wage for a CLEP exam is quoting job-board aggregates or invented figures. The earnings story runs through the education-access premium that the exam supports: a qualifying score (typically 50 or higher on the 20-80 scale, though the individual college sets the bar) earns college credit that can reduce time to degree and tuition cost, and BLS education-level earnings data — bachelor\u2019s degree holders earn substantially more over a career than high-school-only workers — is the real wage context for every CLEP exam. The concrete arithmetic makes the point: the Principles of Microeconomics exam is approximately 80 multiple-choice questions in 90 minutes, costs $97 from the College Board, and commonly earns three semester hours of credit toward an introductory economics or social-science requirement, against which a semester of the equivalent course can cost hundreds to thousands of dollars in tuition depending on the school. That gap is the entire economic case for the exam, and it is why the College Board publishes credit recommendations rather than wage data. The honest caveat is that the value depends on the specific institution: most colleges accept a 50 for full credit, some require a higher score, a few decline CLEP credit for introductory economics, and economics majors at selective schools often prefer to take the course in-house. Before banking on the credit, check the target school\u2019s CLEP policy through the College Board\u2019s credit-granting search tool, because that policy, not the score alone, determines what the exam is worth.',
    rows: [
      { label: 'Exam fee (College Board)', value: '$97', note: '2025-26 academic year; test centres may add their own proctoring fee' },
      { label: 'Format', value: '~80 multiple-choice questions in 90 minutes', note: 'Some items are unscored pretest questions' },
      { label: 'Score scale', value: '20-80', note: 'ACE recommends credit for a score of 50 or higher' },
      { label: 'Typical credit', value: '3 semester hours', note: 'Each college sets its own required score' },
      { label: 'Salary impact', value: 'Indirect', note: 'Credit shortens time to degree; value depends on the school\u2019s CLEP policy' }
    ],
    growth: 'CLEP is a credit-by-examination program rather than an occupation. The College Board reports millions of CLEP administrations across the program, and Principles of Microeconomics is one of the most commonly taken economics CLEP exams.',
    source: {
      label: 'College Board — CLEP Principles of Microeconomics fact sheet',
      url: 'https://clep.collegeboard.org/clep/pdf/principles-of-microeconomics-fact-sheet.pdf'
    }
  },

  passRate: {
    headline: 'The College Board publishes no pass rate for this CLEP exam — it publishes a score scale (20-80) and an ACE credit recommendation (50 or higher) instead.',
    summary:
      'The College Board does not publish a pass rate for CLEP Principles of Microeconomics, and it never has. Anyone quoting one is guessing, because the program is scored on a 20-80 scaled scale with no published cut score — the recommendation comes from the American Council on Education, which suggests that colleges grant credit for a score of 50 or higher, and the individual institution decides where its own threshold sits. That design means the only published numbers are the score range and the ACE recommendation, and both are what this section covers. Raw scores convert to the 20-80 scale to equalize difficulty across exam forms, so a 50 is not 50 percent of questions correct and cannot be reverse-engineered from a practice score. In practice, most colleges and universities accept a 50 for three semester hours of credit, some require 55 or 60, and a minority decline CLEP credit for the introductory microeconomics course outright or accept it only as elective credit, so the effective "passing score" for any given candidate is the number their own school demands. A useful consequence of the design: a failed CLEP attempt leaves no mark on a transcript — CLEP reports only the score you choose to send — and you may retake the same exam after a three-month waiting period, at full fee each time. The practical read is that you are not chasing a passing standard but a target score set by your institution, which is why the first step in preparation is looking up the school\u2019s required score and credit award before studying a single topic. We have deliberately left the pass-rate table empty and covered the published cut-score and score-scale information instead.',
    source: {
      label: 'College Board — CLEP Principles of Microeconomics fact sheet and CLEP fee information',
      url: 'https://clep.collegeboard.org/clep/pdf/principles-of-microeconomics-fact-sheet.pdf'
    },
    caveat:
      'The College Board publishes no CLEP pass rate. What is published is the 20-80 score scale and the ACE recommendation of 50 for credit; each college sets its own required score. We have not invented a pass rate.'
  },

  studyPlan: {
    summary:
      'A realistic CLEP Principles of Microeconomics plan is 30 to 50 hours over four to eight weeks, because the exam is a single 90-minute, roughly 80-question multiple-choice paper in which one content area — the nature and functions of product markets — carries 55 to 70 percent of the items, so the fastest score gains come from concentrating there while keeping the other three areas above water. The four official categories are Basic Economic Concepts (10-16%), The Nature and Functions of Product Markets (55-70%), Factor Markets (6-12%), and Market Failure and the Role of Government (8-14%). Within product markets, the largest single block is firm behavior and market structure at 23-33 percent, which means the four market structures — perfect competition, monopoly, oligopoly, and monopolistic competition — and the profit-maximization rule where marginal revenue equals marginal cost are the single most efficient study targets on the entire paper, followed by supply and demand at 15-20 percent. The plan below splits the window into content coverage, then graph and calculation drilling, then full practice exams. The exam is graph-heavy: production possibilities curves, supply-and-demand shifts, cost curves, and the deadweight-loss triangles from price controls and taxation appear constantly, and the ability to read a graph is tested more than the ability to draw one. No calculator is provided and none is needed, because the arithmetic stays simple — elasticity with the midpoint method and total-revenue checks, surplus areas, and MR equals MC output are the calculation ceiling. Candidates with any recent economics coursework should budget the lower end and collapse the first weeks; candidates starting cold should budget the upper end and add a structured course or textbook. The final two weeks should be full 80-question, 90-minute practice exams, because pacing at roughly 67 seconds per question is the constraint most candidates underestimate.',
    totalHours: '30-50 hours over 4-8 weeks',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Product markets — supply, demand and elasticity (15-20% of the exam)',
        tasks: [
          'Market equilibrium, determinants of supply and demand, and the difference between a shift of the curve and a movement along it',
          'Price and quantity controls with their surplus and deadweight-loss consequences on a graph',
          'Price elasticity of demand using the midpoint method, plus the total-revenue test and cross-price and income elasticities',
          'Consumer surplus, producer surplus, tax incidence and deadweight loss, reading them directly off a graph'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Firm behavior and market structure (23-33% — the single largest block)',
        tasks: [
          'Accounting versus economic profit, normal profit, and the MR = MC profit-maximization rule across structures',
          'Perfect competition: short-run and long-run equilibrium, the shut-down decision, and efficiency',
          'Monopoly: sources of market power, inefficiency, price discrimination and natural monopoly',
          'Oligopoly and monopolistic competition: game theory and payoff matrices, cartels and Nash equilibrium, product differentiation and excess capacity'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Week 5',
        focus: 'Production, costs, consumer choice and the smaller categories',
        tasks: [
          'Production functions, marginal product and diminishing returns, and the cost curves built on them',
          'Short-run and long-run costs, economies of scale, and the long-run cost-minimizing input combination',
          'Total and marginal utility, diminishing marginal utility, and the utility-maximizing rule of equalizing marginal utility per dollar',
          'Factor markets: derived demand, marginal revenue product, and the hiring rule; then externalities, public goods, and income distribution for the 8-14% government category'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Week 6',
        focus: 'Basic concepts and graph fluency',
        tasks: [
          'Scarcity, opportunity cost, the production possibilities curve, comparative advantage and gains from trade',
          'Marginal analysis, economic systems, and property rights as incentives',
          'Graph drills: draw and shift every curve tested, and label equilibrium, surplus and deadweight loss by hand',
          'Take one full 80-question timed practice exam and tag every miss to a content category'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Weeks 7-8',
        focus: 'Full practice exams and gap closing',
        tasks: [
          'Two more full 90-minute practice exams scored against your target school\u2019s required CLEP score',
          'Re-lab every miss and re-drill the four market structures and the graph types that produced the misses',
          'Run the free College Board sample questions for this exam as a final calibration',
          'Confirm the registration, ticket, ID and test-centre or remote-proctoring logistics the week before'
        ],
        hours: '7-9 hrs/week'
      }
    ],
    variants: [
      { label: 'Current college student with recent coursework', detail: 'Three to four weeks at the lower hour band. Collapse weeks 1-4 into a fast review and spend the recovered time on graph fluency and full practice exams, which are the part of the paper that surprises course-takers most.' },
      { label: 'Self-studier starting from scratch', detail: 'Eight to ten weeks at 6-8 hrs/week. Add a structured course or textbook before the plan above and extend the market-structure block, because the 23-33 percent firm-behavior category assumes comfort with cost curves that beginners lack.' },
      { label: 'Adult returner with work experience but no econ background', detail: 'Eight to ten weeks. Prioritise the supply-and-demand model and market structures first — they are more than half the exam — and use every worked example as a chance to practise reading graphs rather than memorising definitions.' }
    ]
  },

  prepStrategies: {
    summary:
      'The dominant strategy for CLEP Principles of Microeconomics is to let the content percentages drive the study time, because roughly 55 to 70 percent of the paper comes from one area — the nature and functions of product markets — and candidates who study the four categories proportionally rather than equally leave the biggest pool of points half-prepared. The highest-yield individual skills are reading graphs and applying the MR = MC profit-maximization rule across the four market structures, because firm behavior and market structure alone is 23-33 percent of the exam and the supply-and-demand model is another 15-20 percent. Second, practise the specific graph types that recur — production possibilities curves, supply-and-demand diagrams with surplus and deadweight-loss labels, and the cost curves — until you can interpret a shift, identify equilibrium, and locate the inefficiency without hesitation; the exam rewards graph literacy far more than definition recall. Third, drill the elasticity formulas with the midpoint method and the total-revenue test until they are reflex, because calculation items appear but stay simple and a slip on one is an avoidable, expensive miss. Fourth, use the free College Board sample questions and the official fact sheet as the baseline before buying anything, because they define the format and the difficulty more honestly than third-party question banks. Fifth, practise with timed full exams of roughly 80 questions in 90 minutes, because the pacing constraint of about 67 seconds per question is real and most candidates who finish comfortably in practice miss on speed. Finally, anchor every study session to the target score your college requires — look it up first — because CLEP has no national passing bar and the number that matters is the one your school demands, which changes both how many practice points you need and how much leeway you have on the harder items.',
    items: [
      {
        title: 'Weight study time by the published percentages',
        detail: 'Product markets are 55-70 percent of the exam, and within it firm behavior and market structure is 23-33 percent. Studying the four categories proportionally — not equally — puts the hours where the points are. A candidate who can compare the four market structures cold is already most of the way to the score.'
      },
      {
        title: 'Become fluent at reading graphs',
        detail: 'Production possibilities curves, supply-and-demand shifts, cost curves, and deadweight-loss triangles appear throughout. Practise drawing each graph and labelling equilibrium, surplus and loss by hand, then test yourself by covering the labels and reconstructing them. Graph literacy, not memorised definitions, is what the exam actually rewards.'
      },
      {
        title: 'Drill the profit-maximization rule and the four structures',
        detail: 'The MR = MC rule and how each of the four market structures applies it — with their predictions for price, output, profit and efficiency — is the single highest-density body of content on the paper. Learn to state each structure\u2019s characteristics in one sentence and to recognise its inefficiency on a graph.'
      },
      {
        title: 'Memorise the elasticity formulas with the total-revenue test',
        detail: 'Elasticity items use the midpoint method and the relationship between elasticity and total revenue. The arithmetic is simple and the exam provides no calculator, so the only way to miss is by hesitating or misapplying the formula. Ten minutes of formula drill most days removes a whole category of cheap losses.'
      },
      {
        title: 'Use the official sample questions early and late',
        detail: 'The College Board publishes sample questions and a fact sheet for this exam free of charge. Take them before buying anything to calibrate difficulty, and again in the final week as a readiness check. They are closer to the real items than most commercial banks and they cost nothing.'
      },
      {
        title: 'Anchor preparation to your college\u2019s required score',
        detail: 'CLEP has no national passing bar; your school\u2019s credit policy sets the effective target. Look it up before you start, because a candidate aiming at a school that demands 60 needs more margin than one whose school accepts 50, and the difference changes how much of the hard content deserves your time.'
      }
    ]
  },

  resourceComparison: {
    summary:
      'CLEP Principles of Microeconomics preparation is cheap relative to almost every other exam on this site, and the buying logic is anchored by the official College Board materials, because the fact sheet and sample questions are free, define the format precisely, and cost nothing. The paid decisions are the exam itself, a review book, and optionally a question bank or video course. The exam fee is $97 from the College Board for the 2025-26 academic year, with test centres commonly adding their own proctoring or administration fee of roughly $30-50, so the true out-of-pocket cost is usually around $130-150 — still a fraction of a semester of tuition. Review books from major publishers run roughly $20-45 and add structured coverage of the four content categories plus practice exams, which suits self-studiers and anyone who needs the graph conventions explained slowly. Online courses and question banks, $20-100 depending on subscription, add video instruction and timed drilling; the free Modern States course is notable because it pairs full video instruction with a program that can cover the exam fee for eligible students, which removes nearly all the cost. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, we rank nothing by commission, and the single best value is the free official set — a candidate who takes the College Board sample questions, one good review book, and two or three full practice exams has spent less than $70 on preparation. Confirm the school\u2019s CLEP credit policy before spending on any paid resource, because the credit decision, not the prep cost, determines whether the exam is worth taking at all.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'College Board official fact sheet and sample questions', values: ['Free', 'PDF + online samples', 'The authoritative format, content percentages and difficulty — use first and last'] },
      { label: 'CLEP exam registration (College Board)', values: ['$97 (2025-26)', 'Computer-based, test centre or remote', 'The exam itself; test centres may add their own proctoring fee'] },
      { label: 'Modern States free course', values: ['Free course; voucher may cover the fee for eligible students', 'Online video course', 'Self-studiers wanting structure with zero prep spend'] },
      { label: 'CLEP review book (major publisher)', values: ['$20-45', 'Print + eBook with practice tests', 'Ordered coverage of the four categories plus graph explanations'] },
      { label: 'Question bank / online course', values: ['$20-100 for short subscriptions', 'Online, timed practice', 'Extra volume and pacing work close to the exam'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax and change frequently; we rank nothing by commission. The College Board CLEP fee is $97 for the 2025-26 academic year, and individual test centres set their own administration fees, so confirm the total at registration.'
  },

  commonMistakes: {
    summary:
      'The failures on CLEP Principles of Microeconomics are predictable, and almost none of them are about failing to understand economics at a deep level — they are about studying the wrong proportions, ignoring the graphs, and treating the exam as a definitions test when it is an application test. The single most common error is studying all four content categories equally, which wastes hours on the 6-14 percent factor-market and government categories while leaving the 55-70 percent product-markets block half-prepared; the firm-behavior-and-market-structure sub-category alone is worth 23-33 percent, more than the other three categories combined. The second is memorising definitions instead of practising graphs, because most items present a scenario or a curve and ask you to predict the outcome — a candidate who can define a monopoly but cannot identify its deadweight loss on a graph loses the item. The third is neglecting the elasticity calculations and the total-revenue test, a small but purely avoidable source of cheap points. The fourth is never running a full 80-question, 90-minute practice exam, so the 67-seconds-per-question pacing constraint surprises them on test day. The fifth is failing to check the college\u2019s CLEP credit policy and required score before studying, so a candidate aims at the wrong number entirely — or takes the exam for a school that will not grant the credit. And the sixth is overlooking the three-month retake rule and the fact that a canceled or failed attempt forfeits the fee, which turns a miscalculated test date into a $97 lesson. None of these are conceptual gaps in economics; every one of them is fixable with a few hours of properly targeted practice before the exam.',
    items: [
      {
        mistake: 'Studying the four categories equally',
        fix: 'Product markets are 55-70 percent of the paper and firm behavior and market structure is 23-33 percent of it. Weight your hours by the published percentages, not by how comfortable the content feels. A candidate who knows the four market structures cold has covered more of the exam than one who studied all categories evenly.'
      },
      {
        mistake: 'Memorising definitions instead of practising graphs',
        fix: 'Most items are scenario- or graph-based. Practise reading and shifting production possibilities curves, supply-and-demand diagrams, and cost curves until surplus, deadweight loss and equilibrium are visual, not verbal. Definition recall alone will not answer the application items that dominate the paper.'
      },
      {
        mistake: 'Skipping the elasticity calculations',
        fix: 'Elasticity with the midpoint method and the total-revenue test are simple, purely avoidable points. Drill the formulas daily until they are reflex. The exam gives no calculator, so a hesitation or a misapplied formula is the only way to miss.'
      },
      {
        mistake: 'Never running a full timed practice exam',
        fix: 'The real constraint is pacing at roughly 67 seconds per question. Run at least two full 80-question, 90-minute practice exams and tag every miss to a category. Candidates who have only done untimed practice routinely run out of clock in the back third.'
      },
      {
        mistake: 'Taking the exam without checking the college\u2019s credit policy',
        fix: 'The school decides the effective passing score and whether it grants credit at all. Look up the target college\u2019s CLEP credit table before studying — if the school requires 60 or declines the credit, your plan changes completely.'
      },
      {
        mistake: 'Forgetting the three-month retake rule and fee forfeiture',
        fix: 'The same CLEP exam cannot be retaken within three months, and a canceled or failed attempt forfeits the fee. Treat the registration as a scheduled commitment and confirm the ticket, ID and logistics the week before, because a forfeited attempt is a $97 lesson.'
      }
    ]
  },

  questionTypes: {
    summary:
      'CLEP Principles of Microeconomics is approximately 80 multiple-choice questions in 90 minutes, scored on a 20-80 scale with an ACE-recommended credit threshold of 50, and the paper is a pure selected-response exam — there are no essays, no constructed-response items, and no performance tasks, which makes it one of the most format-simple exams on this site. A handful of the 80 items are unscored pretest questions that you cannot identify, so answering everything is the only safe approach. The questions break into four overlapping styles: definition and concept items, which ask you to identify the characteristic of a market structure or define elasticity; graph-interpretation items, which show a supply-and-demand diagram, a cost curve, or a production possibilities curve and ask what a shift or a label means; scenario items, which describe a firm or consumer decision and ask you to predict the outcome; and calculation items, which apply the midpoint elasticity formula, the MR = MC rule, or a surplus area on a graph. The four content categories are Basic Economic Concepts (10-16%), The Nature and Functions of Product Markets (55-70%), Factor Markets (6-12%), and Market Failure and the Role of Government (8-14%). Because scoring is scaled and College Board equates forms, a 50 is not a percentage of items correct and cannot be converted into one. The practical pacing rule is under a minute per item, which leaves the graph-heavy product-markets questions time to breathe. The three samples below illustrate the concept, graph and calculation styles; they are editor-written to the published fact sheet and are not live exam items.',
    types: [
      { name: 'Concept and definition items', share: 'A recurring minority', detail: 'Identify the characteristic of a market structure, define elasticity or deadweight loss, or recognise an economic concept from a description. Straightforward, but only if the terminology is solid.' },
      { name: 'Graph-interpretation items', share: 'Heavy — the exam is graph-centric', detail: 'A curve or diagram is shown and a shift, a label or an equilibrium is tested — production possibilities, supply and demand with surplus and loss, and the cost curves. Reading the graph correctly is the whole item.' },
      { name: 'Scenario and application items', share: 'The largest share', detail: 'A consumer or firm faces a described decision — a price change, a utility choice, a tax — and you predict the outcome. These reward the analytical model, not recall.' },
      { name: 'Calculation items', share: 'A small but pure-credit minority', detail: 'Midpoint elasticity, total-revenue checks, MR = MC output, and surplus areas. The arithmetic is simple and no calculator is provided, so precision under time pressure is the only skill tested.' }
    ],
    samples: [
      {
        prompt: 'A firm in a competitive market is producing where price equals average variable cost but is covering neither average total cost nor its fixed costs. In the short run, the firm should',
        options: [
          'A. continue producing, because price covers variable costs and any loss above that is unavoidable',
          'B. shut down, because producing any output adds to the firm\u2019s losses',
          'C. raise price above marginal cost to restore profitability',
          'D. increase output until price equals marginal cost again'
        ],
        answer: 'B',
        explanation: 'The shut-down rule compares price with average variable cost. When price equals average variable cost, the firm covers its variable costs but not its fixed costs; at that boundary each unit produced contributes nothing toward fixed cost, so continuing to produce adds no contribution and the firm is indifferent between producing and shutting down. Where price is at or below minimum average variable cost, the short-run rational choice is to shut down and limit losses to fixed costs. A misreads the rule: covering variable cost is the condition for staying open, not a reason to stay open when price only equals it. C is impossible for a price-taking competitive firm, which cannot raise price without losing all customers. D ignores that output is already at the loss-minimizing point; expanding would lower price to marginal cost? no — for a price taker, expanding output past the point where price equals marginal cost lowers profit. The distinction between the shutdown point and the break-even point is a classic CLEP discriminator.'
      },
      {
        prompt: 'The government imposes a binding price ceiling below the equilibrium price in a competitive market. Which of the following will result?',
        options: [
          'A. A shortage, with the quantity demanded exceeding the quantity supplied at the ceiling price',
          'B. A surplus, with the quantity supplied exceeding the quantity demanded at the ceiling price',
          'C. A new equilibrium with a lower equilibrium quantity and a higher price',
          'D. No effect, because price ceilings apply only to monopoly markets'
        ],
        answer: 'A',
        explanation: 'A binding price ceiling is set below the market-clearing price. At that price, the quantity demanded rises along the demand curve and the quantity supplied falls along the supply curve, so the quantity demanded exceeds the quantity supplied — the definition of a shortage. The classic examples are rent control and wartime price controls. B describes a price floor set above equilibrium, which produces a surplus, and is the most commonly chosen wrong answer because candidates conflate ceiling with floor. C confuses a ceiling with the market process; the ceiling blocks the market from reaching equilibrium. D is simply false — price controls apply to competitive markets, and a competitive market is precisely where they bind. Reading the direction of the gap on the supply-and-demand graph is the whole skill, and it is a recurring CLEP item pattern.'
      },
      {
        prompt: 'A monopolist is currently producing where marginal revenue equals marginal cost. Which of the following is true at that output?',
        options: [
          'A. Price equals marginal cost, so the market is allocatively efficient',
          'B. Price exceeds marginal cost, so consumer surplus is not maximised',
          'C. The firm must be earning economic profit',
          'D. Total revenue is maximised'
        ],
        answer: 'B',
        explanation: 'Profit maximization for any firm, monopoly included, occurs where marginal revenue equals marginal cost. At that output the monopolist charges the highest price the demand curve will bear, which is above marginal revenue and therefore above marginal cost. Price above marginal cost is the definition of allocative inefficiency, so the monopoly restricts output below the efficient level and consumer surplus is not maximized — the deadweight-loss triangle that candidates must be able to locate. A states the perfectly competitive result, where price equals marginal cost at the efficient output; it is wrong for a monopoly and is the classic trap. C overstates the rule: MR = MC maximizes profit, but the maximum can be negative, zero, or positive depending on demand; economic profit is not guaranteed. D confuses profit maximization with revenue maximization, which occurs where marginal revenue equals zero. This item combines the profit rule with the efficiency comparison across structures, and both are high-frequency CLEP content.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      'CLEP Principles of Microeconomics is a computer-based, approximately 80-question, 90-minute exam taken at a CLEP test centre or remotely through the College Board\u2019s proctored platform, and the direct exam-day answer is that you will sit one uninterrupted multiple-choice section, see your score on a 20-80 scale before you leave, and then decide whether to send it. The tutorial and personal-information screens are in addition to the 90-minute testing time, so arrive logged in and ready at the scheduled start; no calculators, phones, smartwatches or study materials are permitted in the testing room. In-person candidates must bring a government-issued photo ID whose name matches the CLEP registration exactly, plus the printed registration ticket, and should arrive 15-30 minutes early because late arrivals are not admitted and the fee is forfeited. Remote candidates need a Windows PC (Macs, Chromebooks and tablets are not supported for this program), the ETS online test application, a camera and microphone, and a private room; the proctor verifies identity and scans the room before the exam begins. Pace the 90 minutes at under a minute per question and answer every item, because some are unscored pretest questions you cannot identify and a blank answer is always wrong. Scores for this exam are delivered immediately after completion, and you may choose to cancel your score on screen — a canceled score cannot be reinstated, counts toward the three-month retake wait, and does not refund the fee. If you want the credit, ensure the target college is named as a score recipient, and check the institution\u2019s credit policy before sending the score, because the school, not the College Board, decides what a 50 or any other score is worth.',
    bring: [
      'Government-issued photo ID with your name spelled exactly as it appears on the CLEP registration',
      'Printed CLEP registration ticket with the ticket ID',
      'For remote testing: a Windows desktop or laptop with the ETS online test application installed, a webcam and microphone, and a private room'
      ,
      'Any permitted personal identification your test centre requires in addition to the ticket'
    ],
    leave: [
      'Calculators, phones, smartwatches, fitness trackers and earbuds — prohibited in the testing room',
      'Study materials, notes and scratch paper; the test centre provides a whiteboard or scratch material if any is allowed',
      'Bags, coats and food or drink beyond what the test centre permits',
      'For remote testing: any second person, second monitor, or unapproved device in the room'
    ],
    timeline: [
      { time: 'The week before', detail: 'Check the target college\u2019s CLEP credit policy and required score, confirm the test centre address or the remote-proctoring system requirements, and verify your name matches your ID.' },
      { time: '30 minutes before', detail: 'Arrive at the centre with ticket and ID, or log in to the remote session and complete the identity and room checks.' },
      { time: 'Start', detail: 'Complete the tutorial and personal-information screens — they do not count against the 90 minutes — then begin the exam.' },
      { time: '0-90 minutes', detail: 'Answer approximately 80 multiple-choice items at under a minute each. Flag and return to uncertain items if the interface allows, and answer every question.' },
      { time: 'After the exam', detail: 'Your 20-80 scaled score appears immediately. Choose whether to send it to the named score recipients or to cancel it, then collect your score report.' }
    ],
    rules: [
      'Approximately 80 multiple-choice questions in 90 minutes; the tutorial and personal-information screens are extra.',
      'Some items are unscored pretest questions that cannot be identified — answer everything.',
      'Scored 20-80; ACE recommends credit for 50 or higher, and each college sets its own required score.',
      'No calculators, notes or electronic devices; the exam provides no calculator and none is needed.',
      'Name on the government-issued ID must match the CLEP registration exactly, or you will not be admitted and the fee is forfeited.',
      'The same exam cannot be retaken within three months, and a canceled score cannot be reinstated and does not refund the fee.'
    ],
    afterwards:
      'Your scaled score appears on screen immediately after the exam, and most scores post to the My CLEP portal within roughly a day. On a score that meets the target college\u2019s requirement, the credit is granted by the institution when it receives the score — CLEP itself awards no credit, so the transcript and credit decision live with the school, and you should confirm that the college was named as a score recipient or order an official transcript. On a score below the target, a failed attempt leaves no record on any transcript unless you choose to send it, and you may retake the same exam after a three-month waiting period at full fee — the wait, not a score cap, is the constraint, and there is no limit on retakes. Treat the interval between attempts as the real remediation window: use the practice-exam score to identify the content categories that dragged the scaled score down, re-drill the four market structures and the graph types, and confirm the school\u2019s required score again before re-registering, because a $97 retake on the same weak areas is how a cheap exam becomes an expensive habit.'
  }
};

export default data;
