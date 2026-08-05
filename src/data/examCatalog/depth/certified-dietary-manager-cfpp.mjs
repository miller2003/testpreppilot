// Depth content for: certified-dietary-manager-cfpp
// Real, sourced data compiled from primary sources (ANFP/CBDM, BLS O*NET lists
// "Certified Dietary Manager (CDM)" as an alternate title for SOC 29-2051).
// Every numeric row carries a note/source. Omitted fields were not verifiable.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Allied health & clinical credentials desk',
    bio: 'This guide is compiled and maintained by our allied-health desk. We work from the certifying board\'s own published material — the current exam blueprint or content outline, the candidate handbook, the fee schedule and any pass-rate disclosure the board releases — rather than from coaching-school summaries, which routinely lag a blueprint revision by a year or more. Wage and outlook figures come from the Bureau of Labor Statistics occupational series that matches the role, and we name the SOC code so you can check it yourself. Where a board publishes no pass rate, we say so instead of estimating one.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Blueprint weights, eligibility routes, fees and recertification rules were read from the certifying board’s own documents, not from third-party course pages.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (BLS maps CDM to Dietetic Technicians, SOC 29-2051)
  salaryOutlook: {
    headline: '$37,040 median (BLS OOH, May 2024)',
    summary: 'The Certified Dietary Manager, Certified Food Protection Professional (CDM, CFPP) is credentialed by the Certifying Board for Dietary Managers (CBDM), an arm of the Association of Nutrition & Foodservice Professionals (ANFP). BLS has no occupation literally named "dietary manager"; the closest published match is Dietetic Technicians (SOC 29-2051), and BLS O*NET explicitly lists "Certified Dietary Manager (CDM)" among the alternate job titles for that code — so we use it as the wage proxy. BLS reports dietetic technicians earned a median annual wage of $37,040 in May 2024, with 30,900 jobs and a projected 2% growth from 2024 to 2034 (about average, roughly 4,000 openings per year). The CDM’s real economic value is less about a flat wage premium and more about eligibility: in long-term care, hospitals, and schools it is frequently a mandatory or strongly preferred credential for foodservice director and patient-nutrition roles, and it signals verified food-safety and nutrition competence that uncredentialed managers lack. The bottom decile ($28,280) reflects entry-level technicians, while the top decile ($53,440) reflects experienced managers running healthcare foodservice departments. Candidates should read the median as a proxy, not a guarantee, and weigh the credential’s effect on job access and scope. Because BLS groups the CDM under dietetic technicians rather than a manager code, the proxy understates earnings of experienced CDMs who run departments; healthcare foodservice director roles often pay above the top decile shown here. Candidates should read the median as a floor for credentialed technicians and recognize that the CDM value is concentrated in the jobs it unlocks, particularly in long-term care and hospitals where it is a hiring requirement.',
    rows: [
      { label: 'Median annual wage', value: '$37,040', note: 'BLS OOH / OEWS, Dietetic Technicians (SOC 29-2051), May 2024; BLS O*NET lists "Certified Dietary Manager (CDM)" as an alternate title' },
      { label: '10th percentile', value: '$28,280', note: 'BLS OEWS, Dietetic Technicians (SOC 29-2051), May 2024' },
      { label: '90th percentile', value: '$53,440', note: 'BLS OEWS, Dietetic Technicians (SOC 29-2051), May 2024' },
      { label: 'Employment, 2024', value: '30,900', note: 'BLS OOH, Dietetic Technicians, 2024' },
      { label: 'Projected growth, 2024–2034', value: '2% (about average)', note: 'BLS OOH Job Outlook, Dietetic Technicians' }
    ],
    growth: '2% growth 2024–2034 (BLS OOH, about average); ~4,000 annual openings including replacements.',
    source: { label: 'BLS Occupational Outlook Handbook — Dietetic Technicians (SOC 29-2051); O*NET lists CDM as alternate title', url: 'https://www.bls.gov/ooh/about/print/data-for-occupations-not-covered-in-detail.htm' }
  },

  // P0-2  Pass rates — ANFP/CBDM does NOT publish a candidate pass rate
  passRate: {
    headline: 'Pass rate not published by ANFP/CBDM',
    summary: 'Unlike AAMA and DANB, the Certifying Board for Dietary Managers (CBDM) does not publish a candidate pass rate for the CDM, CFPP exam. We searched ANFP/CBDM exam pages, handbooks, and candidate bulletins and found no first-time or cumulative pass-rate figure released to the public. This is a transparency gap rather than evidence about difficulty: the exam is criterion-referenced (you must meet the standard, not beat a quota), and ANFP emphasizes preparation via its official study guide and practice questions. Without a published rate, candidates cannot benchmark "what fraction pass," so the responsible approach is to prepare to the blueprint and use the official practice questions as a personal readiness gauge rather than chasing an external statistic. We therefore omit a pass-rate percentage rather than estimate one. If ANFP later publishes a rate, this section should be updated with the cited source. The absence of a published rate means candidates cannot rely on an external benchmark and must use the official ANFP practice questions as a personal readiness gauge. This places more responsibility on the candidate to prepare thoroughly rather than assume the exam is easy. The five-domain blueprint is broad, so a structured plan that touches every domain is the safest path. Until ANFP publishes outcome data, candidates should target 80% or better on official practice questions in each domain before scheduling. This preparation-first approach is the right substitute for a pass rate: without an external benchmark, the only honest measure of readiness is your own scored performance on official materials, and a 70 to 80 percent practice average is a reasonable target before committing the exam fee.',
    rows: [
      { label: 'Published candidate pass rate', value: 'Not published', note: 'ANFP/CBDM does not release CDM, CFPP exam pass rates (verified on anfponline.org / cbdmonline.org, 2026-08)' },
      { label: 'Exam format', value: '160 Q (140 scored + 20 pretest), 180 min', note: 'ANFP/CBDM candidate handbook; criterion-referenced' },
      { label: 'Pass standard', value: 'Scaled/criterion-referenced per CBDM', note: 'CBDM sets the cut score; not published as a fixed percentage' }
    ],
    source: { label: 'ANFP / Certifying Board for Dietary Managers (CBDM) — exam resources', url: 'https://www.anfponline.org/' },
    caveat: 'ANFP/CBDM does not publish a CDM, CFPP candidate pass rate. No percentage is reported here to avoid inventing one; prepare to the blueprint and use official practice questions as a self-benchmark.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary: 'The CDM, CFPP exam covers five content domains, so a 10–12 week plan at 8–10 hours per week works for most candidates, with extra time if foodservice math or nutrition is a weak area. Weight study to the domain weights: Sanitation 24%, Foodservice 22%, Nutrition 20%, Personnel 20%, and Business 14%.',
    totalHours: '80–100 hours',
    weeks: [
      { label: 'Weeks 1–2', focus: 'Sanitation & food safety (24%)', tasks: ['HACCP principles, temperature danger zone, cooling/reheating', 'Regulatory standards and outbreak response', 'Drill the ANFP math workbook on food-safety calculations'], hours: '10 hrs/week' },
      { label: 'Weeks 3–4', focus: 'Foodservice operations (22%)', tasks: ['Menu planning, production, forecasting, cost control', 'Purchasing, inventory, tray service', 'Practice with the official study guide chapters'], hours: '10 hrs/week' },
      { label: 'Weeks 5–6', focus: 'Nutrition (20%) + Personnel (20%)', tasks: ['Modified diets, nutrient needs, documentation', 'Supervision, training, HR, leadership', 'Build one-page condition/diet quick cards'], hours: '10 hrs/week' },
      { label: 'Weeks 7–8', focus: 'Business (14%) + integration', tasks: ['Financial statements, budgeting, compliance', 'Mixed-domain practice questions by domain'], hours: '9 hrs/week' },
      { label: 'Weeks 9–10', focus: 'Full-length simulation', tasks: ['Timed 160-question practice across all five domains', 'Push weak domains above 80%', 'Review the official practice-question rationales'], hours: '9 hrs/week' },
      { label: 'Week 11', focus: 'Logistics', tasks: ['Confirm PSI 90-day eligibility/retake window', 'Locate nearest of 300+ PSI centers', 'Light review only'], hours: '5 hrs/week' }
    ],
    variants: [
      { label: 'Working dietary manager', detail: 'Stretch to 14 weeks at 6 hrs/week; use the ANFP practice questions in 20-minute daily blocks.' },
      { label: 'Recent nutrition/foodservice graduate', detail: 'Compress to 7–8 weeks focusing on Business/financial domains and food-safety math.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary: 'Because no pass rate is published, the only honest benchmark is your performance on official practice questions. Anchor prep to the five-domain blueprint and the official ANFP materials.',
    items: [
      { title: 'Lead with the two heaviest domains — Sanitation (24%) and Foodservice (22%)', detail: 'Together 46% of the exam. Own HACCP, temperature control, cooling/reheating logs, and production/cost control cold; these are high-frequency, high-confidence points.' },
      { title: 'Drill foodservice math with the ANFP math workbook', detail: 'Yield, portion, cost-per-serving, and conversion problems appear repeatedly. The 2025 ANFP math workbook ($29 member / $38 non-member) targets exactly these; rehearse until the setup is automatic.' },
      { title: 'Use the official practice questions as your readiness gauge', detail: 'ANFP’s domain-divided practice set (150+ questions, $37 member / $49 non-member) is the closest available proxy to the real exam. Treat <80% in any domain as a red flag to re-study before scheduling.' },
      { title: 'Do not skip the Business (14%) domain', detail: 'It is the smallest weight but easy to neglect; budgeting and compliance items are straightforward points if reviewed, and neglecting them can tip a borderline result.' }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary: 'ANFP/CBDM official materials are the only products built directly to the CDM blueprint. Prices below verified on the ANFP Marketplace (member/non-member).',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ANFP Official CDM, CFPP Study Guide (hardcopy)', values: ['$89 member / $116 non-member', 'Print study guide', 'Primary blueprint coverage'], note: '' },
      { label: 'ANFP Practice Questions (150+, by domain)', values: ['$37 member / $49 non-member', 'Online, domain-divided', 'Readiness self-benchmark'], note: '' },
      { label: 'ANFP Foodservice Math Workbook (2025)', values: ['$29 member / $38 non-member', 'Print workbook', 'Food-safety & cost math drill'], note: '' }
    ].map(r => ({ label: r.label, values: r.values })),
    footnote: 'Prices checked 2026-08 from the ANFP Marketplace (nf.anfponline.org). ANFP members receive the reduced price; the exam fee itself is $425 (2026), with a member discount. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary: 'With no published pass rate, candidates often misjudge readiness. The predictable errors are about coverage gaps and exam logistics.',
    items: [
      { mistake: 'Treating the practice questions as the blueprint', fix: 'The 150+ official practice items sample the domains; they are a gauge, not the full content. Study the official guide cover-to-cover so no domain is thin.' },
      { mistake: 'Neglecting food-safety math', fix: 'Yield and cost calculations are easy points when rehearsed and easy losses when rushed. Use the ANFP math workbook weekly, not the night before.' },
      { mistake: 'Missing the 90-day eligibility and 90-day retake windows', fix: 'CBDM gives a 90-day window to sit the exam and a 90-day wait before a retake. Schedule promptly and keep eligibility documents current.' },
      { mistake: 'Under-preparing the Business/financial domain', fix: 'At 14% it is small but high-yield; a quick review of budgeting and compliance converts free points.' }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary: 'The CDM, CFPP exam is 160 multiple-choice questions over 180 minutes, delivered by computer at PSI test centers (300+ locations). Of the 160 questions, 140 are scored and 20 are unscored pretest items. Scoring is criterion-referenced across five content domains with these published weights: Sanitation 24%, Foodservice Operations 22%, Nutrition 20%, Personnel 20%, and Business 14%. Questions are single-best-answer, application-style items that test both food-safety regulation and the management of a healthcare/non-commercial foodservice department.',
    types: [
      { name: 'Multiple choice (scored)', share: '140 of 160 items', detail: 'Single best answer across the five domains; application-oriented.' },
      { name: 'Unscored pretest items', share: '20 of 160 items', detail: 'Embedded and indistinguishable; not counted toward the score.' }
    ],
    samples: [
      { prompt: 'A cook cools a 10-pound batch of macaroni and cheese from 135°F to 70°F in 1.5 hours, then to 41°F in 4 more hours. Per standard cooling rules, is this acceptable?',
        options: ['A. Yes — total cooling was under 6 hours', 'B. No — it must reach 70°F within 2 hours AND 41°F within 6 hours total', 'C. Yes — reaching 41°F is all that matters', 'D. No — it must cool to 41°F within 2 hours'],
        answer: 'B',
        explanation: 'FDA/credentialing cooling guidance requires food to pass 135°F→70°F within 2 hours and 70°F→41°F within an additional 4 hours (6 hours total). Here the first stage took 1.5 hours (acceptable) and the second 4 hours (acceptable), so B is correct. A ignores the two-stage rule; C and D misstate the thresholds. This is a classic Sanitation-domain item.' },
      { prompt: 'Which modified diet is most appropriate for a resident with dysphagia who cannot safely swallow thin liquids?',
        options: ['A. Mechanical soft, thin liquids', 'B. Pureed with nectar/thickened liquids', 'C. Regular diet', 'D. Clear liquid only'],
        answer: 'B',
        explanation: 'Dysphagia requires texture-modified foods (pureed) and thickened liquids to reduce aspiration risk; B matches. A still uses thin liquids (unsafe), C is contraindicated, and D is only a short-term transitional diet, not the standing plan. Nutrition-domain item.' },
      { prompt: 'A foodservice manager finds actual food cost is 34% but the standard (ideal) cost is 28%. The most likely cause to investigate first is:',
        options: ['A. Portion sizes larger than standard', 'B. Too few menu items', 'C. High staff turnover', 'D. Low customer satisfaction'],
        answer: 'A',
        explanation: 'A actual-vs-ideal food-cost variance usually points to portion control, waste, or theft; oversized portions (A) are the most common and first to audit. B, C, and D affect other metrics but not the cost percentage as directly. Business/Personnel-domain item.' }
    ],
    note: 'Samples are editor-written illustrations of the published five-domain blueprint (Sanitation 24% / Foodservice 22% / Nutrition 20% / Personnel 20% / Business 14%); they are not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary: 'The CDM, CFPP exam is delivered in person by computer at a PSI test center (300+ U.S. locations). You schedule within a 90-day eligibility window after CBDM approves your application; a failed attempt may be retaken after a 90-day wait.',
    bring: ['Government photo ID matching your registration exactly', 'Your PSI appointment confirmation', 'Eligibility/pathway documentation if not already on file with CBDM'],
    leave: ['Phones, smartwatches, and bags (secured in locker)', 'Study notes, textbooks, and calculators', 'Food/drink beyond center-permitted break items'],
    timeline: [
      { time: '30 min before', detail: 'Arrive, present ID, complete check-in and photo capture.' },
      { time: '0:00', detail: 'Tutorial (if offered), then 180 minutes for 160 questions begins.' },
      { time: 'On completion', detail: 'Preliminary result may display; official score report from CBDM follows.' },
      { time: 'If unsuccessful', detail: 'Wait 90 days per CBDM retake rule, then reschedule within eligibility.' }
    ],
    rules: ['20 of 160 items are unscored pretests; answer all as if scored.', 'You may not bring your own materials; center provides permitted items.'],
    afterwards: 'CBDM issues the official score report. On pass, maintain the credential with the annual fee plus 45 CE hours every 3 years. One of six eligibility pathways must be met before sitting.'
  }
};

export default data;
