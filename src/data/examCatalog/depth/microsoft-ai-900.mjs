// Depth content for: microsoft-ai-900
//
// EDITORIAL NOTE (2026-08-04) — READ BEFORE EDITING
// Exam AI-900 was RETIRED on 30 June 2026 and replaced by Exam AI-901. Verified on
// learn.microsoft.com/credentials/certifications/exams/ai-900/ ("The AI-900 exam was
// retired on June 30, 2026, and has been replaced by AI-901. To earn this certification,
// candidates must now pass AI-901.") and in the Microsoft announcement
// techcommunity.microsoft.com "The AI job boom is here. Are you ready to showcase your
// skills?" (retirement table: AI-900 → AI-901, cert retirement 30 June 2026).
// The CERTIFICATION (Microsoft Certified: Azure AI Fundamentals) still exists and is
// still awarded — it is now earned by passing AI-901.
//
// Sections deliberately OMITTED rather than filled: studyPlan, prepStrategies,
// resourceComparison, examDay. You cannot book, sit or prepare for this exam. Publishing
// a study timetable, a resource price table or an exam-day checklist for an exam that no
// longer exists would be actively misleading, so per the examDepth "omit rather than
// invent" rule they are left out. Sections retained below are the ones that remain true
// and useful: what the credential is worth to people who already hold it, the (absent)
// pass-rate picture, the mistakes people are making during the transition, and a
// historical record of how AI-900's format differed from AI-901's.
// This page should be redirected to /exams/microsoft-ai-901 or retired.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This guide is compiled and maintained by our IT-certifications desk. Vendor exams in this space are revised and retired frequently, so we track the objectives document by its published revision date and state plainly when an exam is being retired and what replaces it — the single most common way candidates waste money here is studying a superseded blueprint. Fees, scoring, retake rules and renewal terms come from the vendor’s own certification pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Objectives, exam codes, fees and retirement dates were taken from the vendor’s current certification pages and checked for the revision date shown there.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary — still meaningful for the ~hundreds of thousands who hold it
  salaryOutlook: {
    headline: 'Retired exam, but the credential still counts — no salary premium on its own',
    summary: "AI-900 retired on 30 June 2026, so nobody is earning this one any more. That does not make the credential worthless: Microsoft states plainly that retiring an exam does not revoke or invalidate certifications already earned, and Fundamentals certifications do not expire, so if you passed AI-900 at any point between 2021 and June 2026 you hold Microsoft Certified: Azure AI Fundamentals permanently. What is changing is what that badge signals to a reader in late 2026 and beyond. AI-900 was, by Microsoft's own audience profile, open to technical and non-technical candidates alike, required no data-science or software-engineering experience, and contained no code whatsoever. It certified AI literacy — the ability to describe machine-learning concepts, computer-vision and NLP workloads, and generative-AI capabilities, plus the responsible-AI principles. It was genuinely valuable for the population it targeted: analysts, project managers, presales staff and marketers who needed to talk credibly about AI without building it. Its replacement is a different proposition, and hiring managers who follow the certification programme will increasingly read AI-901 as the technical credential and AI-900 as the literacy one. If you hold AI-900 and your work is now hands-on, that distinction may eventually be worth the $99 to close. If your role is non-technical, it is not — you already hold the credential that was designed for you, and AI-901 with its Python requirement is not aimed at your job. On pay: there is no BLS occupation for AI literacy, and no fundamentals certificate on its own moves a salary. The figures below describe the occupations AI-900 holders sit in, not what the certificate pays.",
    rows: [
      { label: 'Median wage — computer and information technology occupations (group)', value: '$105,990', note: 'BLS Occupational Outlook Handbook, May 2024 wage data; group page last modified 28 August 2025. Used because no BLS occupation corresponds to "AI fundamentals".' },
      { label: 'Median wage — computer user support specialists (SOC 15-1232)', value: '$60,340', note: 'BLS OOH, May 2024. The realistic baseline for the non-technical population AI-900 was designed for.' },
      { label: 'Median wage — computer network support specialists (SOC 15-1231)', value: '$73,340', note: 'BLS OOH, May 2024.' },
      { label: 'Projected annual openings, all IT occupations, 2024-2034', value: '~317,700', note: 'BLS OOH, computer and information technology occupations group.' },
      { label: 'Self-reported average, Microsoft Certified: Azure AI Fundamentals holders', value: '$90,484', note: 'Skillsoft "30+ Top-Paying Microsoft Certifications" (2025), from its IT Skills and Salary survey — worldwide, self-reported respondent data, NOT government statistics. Respondents held multiple certifications and substantial experience, so this reflects the person rather than the badge.' }
    ],
    growth: 'Overall IT occupations projected to grow much faster than average, 2024-2034 (BLS OOH)',
    source: { label: 'BLS Occupational Outlook Handbook — Computer and Information Technology Occupations', url: 'https://www.bls.gov/ooh/computer-and-information-technology/home.htm' }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'Microsoft never published a pass rate for AI-900, and now never will',
    summary: "Across five years of delivery Microsoft published no pass rate for AI-900 — no first-time percentage, no attempt counts, no score distribution — and with the exam retired on 30 June 2026 no such figure will ever be released. This matters because AI-900 accumulated more circulating \"pass rate\" folklore than almost any other Microsoft exam, on the strength of being cheap, short and widely taken. Numbers in the eighties and nineties were quoted constantly. Every one of them originated with a training provider, a bootcamp, or a self-selecting poll of people who had already decided to post about their result online. None was ever validated by Microsoft, and a self-selected sample of forum users systematically over-represents people who passed. We are not reproducing any of them here. What Microsoft did publish, and what still applies to the successor exam, is the scoring mechanism. Results were reported on a 1-1,000 scale with 700 required to pass, and Microsoft states in its scoring documentation that this is a scaled score which \"may not equal 70% of the points\", because candidates see question sets of differing difficulty and the raw points needed move accordingly. There was no penalty for guessing, and an undisclosed subset of items on any form was unscored pilot content. The score report gave one overall number plus a bar chart of relative strength across the five skill areas — and Microsoft warns explicitly that those bars cannot be summed or read as percentages, which is why candidates regularly reported bars apparently above 70% alongside a fail.",
    caveat: "No official AI-900 pass rate ever existed, and the exam is now retired so none will appear. Any percentage still circulating online is vendor marketing or forum self-selection. If you are researching this because you are choosing between exams, note that the same is true of AI-901 and more so — it has only been generally available since June 2026, so no credible sample can exist for it either. The published facts that actually help you plan are unchanged: 700/1000 scaled rather than 70% correct, a score report showing relative strength by skill area rather than a mark scheme, a $99 fee payable again on every attempt, and a retake policy of 24 hours before the second attempt, 14 days between all subsequent attempts, and five attempts maximum per 12 months from the first sitting. Verified against Microsoft's exam scoring and retake policy pages, 2026-08-04.",
    source: { label: 'Microsoft Learn — Exam scoring and score reports', url: 'https://learn.microsoft.com/en-us/credentials/certifications/exam-scoring-reports' }
  },

  // P0-6  Common mistakes — reframed entirely around the retirement, which is the live risk
  commonMistakes: {
    summary: "The mistakes that matter for AI-900 in late 2026 are no longer study mistakes — the exam cannot be sat. They are transition mistakes: people booking an exam that no longer exists, buying courses for it, or panicking about a certification that is in fact perfectly safe.",
    items: [
      {
        mistake: 'Trying to book or study for AI-900',
        fix: "You cannot. Microsoft retired the exam on 30 June 2026 and Pearson VUE no longer schedules it. If you want Microsoft Certified: Azure AI Fundamentals, the only route is Exam AI-901. Redirect your preparation there and be aware it is a substantially different exam — two skill areas instead of five, built around Microsoft Foundry, and requiring Python literacy that AI-900 never asked for."
      },
      {
        mistake: 'Believing your existing AI-900 certification has been revoked or expired',
        fix: "It has not. Microsoft states that retirement of an exam does not revoke or invalidate certifications already earned, and separately that Fundamentals certifications do not expire. Your Azure AI Fundamentals credential remains valid indefinitely and continues to appear on your transcript and Credly badge. There is no renewal assessment to take and no deadline to miss."
      },
      {
        mistake: 'Paying $99 to re-earn a credential you already hold',
        fix: "Microsoft's guidance is explicit that existing holders need take no action. Sitting AI-901 gives you the same certification name you already have. The only reason to do it is if you specifically want the Foundry, agent and Python-adjacent skills reflected in your recent exam history — a defensible choice for a developer, a waste of money for a project manager."
      },
      {
        mistake: 'Buying an "AI-900" course in 2026',
        fix: "Check the exam code and the publication date before you pay. A large volume of AI-900 material remains indexed and on sale, and some of it has been relabelled for AI-901 without being rewritten. The tell is Microsoft Foundry: if a course marketed for the current Azure AI Fundamentals exam never mentions Foundry, or promises that no coding is required, it is AI-900 content in a new wrapper."
      },
      {
        mistake: 'Assuming AI-901 is the same exam with a new number',
        fix: "It is not. AI-900 had five roughly equal conceptual domains and Microsoft's audience profile said data-science and software-engineering experience were not required. AI-901's audience profile requires knowledge of Python coding syntax and programming techniques plus familiarity with provisioning Azure resources, and 55-60% of it is implementing solutions in Microsoft Foundry. The certification name is identical; the exam is not."
      },
      {
        mistake: 'Believing 700/1000 meant 70% correct',
        fix: "It never did, on this exam or any other in the programme. Microsoft states that the score is scaled and may not equal 70% of the points available. This misconception outlived the exam itself and is worth unlearning before you sit AI-901, where it applies identically."
      },
      {
        mistake: 'Treating AI-900 as a prerequisite you now need to replace',
        fix: "AI-900 was never a prerequisite for anything. Microsoft's own exam page said you could use Azure AI Fundamentals to prepare for role-based certifications such as Azure Data Scientist Associate or Azure AI Engineer Associate, \"but it's not a prerequisite for any of them\". The same remains true of AI-901. If your goal is a role-based AI certification, you may go straight there."
      }
    ]
  },

  // P0-7  Question types — retained as a historical record and a transition comparison
  questionTypes: {
    summary: "This section is kept as a historical record and as a comparison point for anyone deciding whether their AI-900 preparation transfers to AI-901. It largely does not. AI-900 was, by design, one of the most approachable exams Microsoft ever published: 45 minutes of exam time inside a 65-minute seat, $99, a 700/1000 scaled pass mark, and — crucially — not a single line of code anywhere on the paper. Microsoft's audience profile stated that data-science and software-engineering experience were not required, and the item formats reflected that. You saw multiple choice, multiple response, drag-and-drop matching, hot-area selections and the recurring three-statement true/false block, all applied to conceptual material. There were no case studies and no interactive labs; both belong to associate and expert role-based exams. There was also no in-exam Microsoft Learn panel, since Microsoft has never offered that resource on Fundamentals exams. The blueprint, last revised on 2 May 2025, split the paper into five near-equal parts: AI workloads and considerations (15-20%), fundamental principles of machine learning on Azure (15-20%), computer vision workloads (15-20%), natural language processing workloads (15-20%), and generative-AI workloads (20-25%). That symmetric five-domain structure is the fastest way to identify outdated study material: AI-901 has two domains, weighted 40-45% and 55-60%. The single biggest format change in the successor exam is the appearance of Python code-comprehension items, which AI-900 contained none of. If your preparation consisted of learning which Azure AI service does what, roughly the first domain of AI-901 will feel familiar and the larger Foundry implementation domain will not.",
    types: [
      { name: 'Multiple choice (single answer)', share: 'The majority', detail: 'A one- or two-sentence scenario and four options, typically asking which Azure AI service or which ML concept fits. Distractors were adjacent services rather than nonsense.' },
      { name: 'Multiple response (choose two/three)', share: 'Common', detail: 'Count stated in the stem and enforced. Used heavily for responsible-AI principles and for listing capabilities of a given workload type.' },
      { name: 'Drag and drop / matching', share: 'Regular', detail: 'Match workload descriptions to AI types, or services to capabilities. Scored per correct placement, so partial credit was available.' },
      { name: 'Hot area', share: 'Occasional', detail: 'Statements with embedded dropdowns, or a diagram region to select.' },
      { name: 'Yes/No statement blocks', share: 'Regular', detail: 'Three independent statements about one scenario, judged separately. A dependable partial-credit format.' },
      { name: 'Code-comprehension items', share: 'None — AI-900 contained no code', detail: 'This is the defining difference from AI-901, whose audience profile requires Python syntax knowledge and which presents snippets calling AI models and services. AI-900 asked nothing of the kind.' },
      { name: 'Case studies and interactive labs', share: 'Not used', detail: 'Both are features of associate and expert role-based exams. No Fundamentals exam has used them.' }
    ],
    samples: [
      {
        prompt: 'A retailer wants to automatically read the text printed on product packaging from photographs taken in its warehouses. Which type of AI workload does this requirement describe?',
        options: ['A. Natural language processing', 'B. Computer vision', 'C. Anomaly detection', 'D. Conversational AI'],
        answer: 'B',
        explanation: "Extracting printed text from an image is optical character recognition, which sits within computer vision — the workload category concerned with deriving meaning from images and video. Natural language processing (A) is the distractor most candidates picked, because the task involves text and the word \"read\" suggests language; but NLP operates on text that is already in machine-readable form, analysing sentiment, entities, translation or intent. The step of getting characters out of a photograph is vision. Anomaly detection (C) identifies unusual data points in a series and is unrelated. Conversational AI (D) covers bots and assistants. This workload-classification question shape was the backbone of AI-900's first domain (15-20%) and remains relevant to AI-901's conceptual domain, which is why we have kept it here."
      },
      {
        prompt: 'A hospital deploys a model that recommends treatment priorities. Clinicians report they cannot determine why any given recommendation was made and are unwilling to act on the output. Which responsible-AI principle does this failure most directly implicate?',
        options: ['A. Transparency', 'B. Fairness', 'C. Inclusiveness', 'D. Accountability'],
        answer: 'A',
        explanation: "Transparency concerns whether the behaviour of an AI system can be understood and explained to the people affected by it and the people relying on it. Clinicians unable to determine why a recommendation was produced is precisely a transparency failure. Accountability (D) is the closest distractor and the one that catches most candidates: it is about the humans and organisations remaining answerable for how the system operates and is governed, which is a related but distinct idea — you can have clear accountability for an opaque system. Fairness (B) would apply if recommendations differed systematically across patient groups; nothing in the stem says so. Inclusiveness (C) concerns AI serving people of all abilities and backgrounds. Responsible AI was examined by scenario rather than definition on AI-900 and continues to be on AI-901, so this reasoning pattern does transfer."
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items. AI-900 is retired; these are retained to illustrate how its conceptual question style differed from AI-901.'
  }

  // studyPlan, prepStrategies, resourceComparison and examDay intentionally omitted —
  // see the editorial note at the top of this file. The exam cannot be booked or sat.
};

export default data;
