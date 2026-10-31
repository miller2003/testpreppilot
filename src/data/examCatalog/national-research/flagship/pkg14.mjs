// Flagship rewrite - pkg14, Microsoft (6 pages: AI-102, AI-900, AI-901, AZ-104, AZ-140, AZ-204).
// Every number was read on 2026-10-20 from Microsoft Learn primary pages:
//   Study guides (ai-102, ai-900, ai-901, az-104, az-140, az-204) with percent ranges and change logs
//   Certification pages (azure-ai-engineer, azure-ai-fundamentals, azure-administrator,
//     azure-virtual-desktop-specialty, azure-developer, azure-ai-apps-and-agents-developer-associate,
//     azure-ai-cloud-developer-associate)
//   Exam duration and exam experience, Exam scoring and score reports, Exam retake policy,
//   Reschedule and cancellation policy, Exam FAQ (price, 90-day scheduling window, two-exam limit),
//   Certification renewal page.
// Not published by Microsoft and therefore omitted: exact question counts, pass rates, score
// distributions, a per-exam fee on the AI-901 page (shown by country at checkout).
// The US$99 Fundamentals list price is shown on Microsoft Learn Fundamentals certification pages;
// AI-901 and AI-900 records state it with that caveat.

const MS = 'Microsoft';
const EXAM_FAQ = 'https://learn.microsoft.com/en-us/credentials/certifications/frequently-asked-questions';
const DURATION = 'https://learn.microsoft.com/en-us/credentials/support/exam-duration-exam-experience';

export const programs = [
  {
    id: 'microsoft',
    body: MS,
    bodyUrl: 'https://learn.microsoft.com/en-us/credentials/',
    about: 'Microsoft Credentials publishes role-based certifications for Azure, Microsoft 365, Dynamics 365, Power Platform and security, and delivers them through Pearson VUE. Fundamentals certifications never expire, while associate, expert and specialty certifications must be renewed every 12 months through a free online assessment. Exams are scored on a scaled 1 to 1,000 range with 700 as the passing mark, and Microsoft publishes a skills-measured study guide with percent ranges for each exam.',
    registrationSteps: [
      {
        title: 'Sign in with a personal Microsoft account and open your Learn profile',
        description: 'Microsoft strongly recommends registering with a personal Microsoft account (MSA) rather than a work or school account, because exam records tied to an organizational account are lost and unrecoverable if you leave that organization. Connect your certification profile to your Microsoft Learn profile so you can schedule, renew and print certificates.',
        subSteps: ['Sign in at learn.microsoft.com with a personal MSA', 'Connect your certification profile to your Learn profile', 'Confirm the legal name matches your government ID'],
        duration: '10-15 minutes',
        note: 'Use the exact name on your ID; a mismatch can cost you the appointment and the fee.'
      },
      {
        title: 'Choose the exam and schedule through Pearson VUE',
        description: 'From the exam page on Microsoft Learn, select Schedule exam and you are redirected to Pearson VUE. You can book up to 90 days in advance and can hold a maximum of two Microsoft Certification exams on the schedule at one time. The price shown depends on the country or region where you will be proctored.',
        subSteps: ['Open the exam page, for example learn.microsoft.com/credentials/certifications/exams/az-104', 'Select a test center or online proctoring through Pearson VUE OnVUE', 'Pay and confirm the appointment time'],
        duration: '10 minutes',
        note: 'Associate and expert exams typically cost US$165; Fundamentals exams list at US$99 in the United States.'
      },
      {
        title: 'Reschedule or cancel at least 24 hours ahead if plans change',
        description: 'Reschedule or cancel through your Learn profile, which redirects to Pearson VUE. A change made less than 24 hours before the appointment forfeits the fee, and a company voucher is forfeited as well. Microsoft does not refund fees for failed exams or missed appointments.',
        subSteps: ['Open Profile, then Credentials, then Certifications on Microsoft Learn', 'Select Reschedule or Cancel beside the appointment', 'Complete the change on the Pearson VUE site'],
        duration: '5 minutes',
        note: 'Rescheduling inside the 24-hour window forfeits the exam fee.'
      },
      {
        title: 'Check in and sit the exam',
        description: 'Take the exam at a Pearson VUE test center or through online proctoring, with government photo ID. Fundamentals exams give 45 minutes of exam time (65-minute seat time); associate and expert exams give 100 minutes (120-minute seat time), or 120 minutes (140-minute seat time) when labs may appear. Five minutes of unscheduled break time are built in, but the clock keeps running during a break.',
        subSteps: ['Arrive early for a test center or complete the OnVUE check-in', 'Read the introduction screen for case study and lab counts', 'Use the Microsoft Learn button on the left navigation pane for role-based exams'],
        duration: '65 minutes (Fundamentals) to 140 minutes (associate/expert with labs) seat time',
        note: 'Learn access during the exam is allowed on associate and expert exams, not on Fundamentals exams.'
      },
      {
        title: 'Read your score report and, if you pass, claim the certification',
        description: 'Most results appear within minutes of finishing; exams with labs take about 30 minutes to score. The score report shows a numeric score from 1 to 1,000, pass or fail, and a bar chart by skill area. Scores post to your Learn profile within 24 hours.',
        subSteps: ['Open Profile, Credentials, Certifications, then Past exams', 'Select View details on provider site to open the Pearson VUE score report', 'Claim your badge and certificate from the Learn profile'],
        duration: 'Minutes after the exam; up to 24 hours to post',
        note: 'The bar chart cannot be summed into a percentage.'
      }
    ],
    proctoring: 'Delivered by Pearson VUE at test centers or by OnVUE online proctoring. The exam is closed book apart from the Microsoft Learn window, which is available on associate and expert exams but not on Fundamentals exams. Exams with labs are restricted to test centers that meet connectivity requirements.',
    retakePolicy: 'If you do not pass, you must wait 24 hours before the second attempt, then 14 days between every later attempt. You may not take the same exam more than five times in 12 months from your first attempt; after five failures you are eligible again 12 months from the date of the first attempt. You pay for every attempt, and you cannot retake an exam you passed unless the certification has expired.',
    recertification: 'Associate, expert and specialty certifications expire 12 months after you earn them, and renewal is free: pass an unproctored, open-book online assessment on Microsoft Learn during the six months before expiry, and the certification extends one year from the expiration date. There is no limit on renewal assessment attempts. Fundamentals certifications, including Azure AI Fundamentals, do not expire. Retired certifications and their renewal assessments can no longer be renewed.',
    scoreReporting: 'Scores are scaled from 1 to 1,000 and 700 or higher passes; the scale compensates for question difficulty, so 700 does not equal 70 percent of the points. Results usually appear within minutes (about 30 minutes for exams with labs) and post to your Learn profile within 24 hours. There is no penalty for guessing, and some questions are unscored pilot items you cannot identify.',
    refundPolicy: 'Microsoft does not refund fees for exams you fail or appointments you miss. Reschedule or cancel at least 24 hours before the appointment or the fee is forfeited. If a technical failure interrupts your exam and Pearson VUE opens a case, you can ask Microsoft Credentials support to waive the retake waiting period.',
    providersNote: 'Microsoft Learn offers free learning paths, a free Practice Assessment for many exams, a free exam sandbox, and instructor-led courses from Microsoft training partners. Microsoft does not review third-party study materials. Pearson-published MeasureUp practice tests are offered on some exam pages as a paid option.',
    comparison: {
      title: 'Azure certifications in this group compared',
      columns: ['Exam', 'Level', 'Exam time', 'Renewal'],
      rows: [
        { label: 'AI-901 Azure AI Fundamentals', values: ['Fundamentals', '45 minutes', 'Does not expire'] },
        { label: 'AZ-104 Azure Administrator Associate', values: ['Associate', '100 minutes', 'Free every 12 months'] },
        { label: 'AZ-140 Azure Virtual Desktop Specialty', values: ['Specialty', '100 minutes', 'Free every 12 months'] },
        { label: 'AI-102 Azure AI Engineer Associate', values: ['Associate (retired)', '100 minutes', 'Retired 30 June 2026'] },
        { label: 'AZ-204 Azure Developer Associate', values: ['Associate (retired)', 'Retired 31 July 2026', 'Retired 31 July 2026'] }
      ]
    },
    orgFaqs: [
      {
        q: 'Do Microsoft certifications expire?',
        a: 'Associate, expert and specialty Microsoft certifications expire after 12 months unless renewed, but Fundamentals certifications never expire. Renewal is free: you pass an unproctored, open-book online assessment on Microsoft Learn during the six months before expiry, and Microsoft extends the certification one year from the expiration date. You can retake the renewal assessment as many times as needed.'
      },
      {
        q: 'What is the Microsoft exam retake policy?',
        a: 'After a failed attempt you wait 24 hours, then 14 days between every later attempt, with a maximum of five attempts in 12 months from your first. You pay the full exam fee each time. Microsoft grants a waiver of the waiting period only when internet or equipment failure interrupted the exam and Pearson VUE created a case.'
      },
      {
        q: 'How is a Microsoft certification exam scored?',
        a: 'Technical exam scores run from 1 to 1,000 and 700 is the passing score. It is a scaled score, so it does not equal 70 percent of the points. There is no penalty for guessing, and unscored pilot questions are mixed in without being identified. Your report shows an overall score and a bar chart by skill area.'
      }
    ],
    sourceUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/exam-scoring-reports',
    verified: true,
    confidence: 'high'
  }
];

const SHARED = {
  retake: 'After a failed attempt you must wait 24 hours before the second try, then 14 days between every later attempt. You may not sit the same exam more than five times in 12 months from your first attempt, and each attempt carries the full exam fee. Microsoft lifts the waiting period only when a connectivity or equipment failure interrupted the exam and Pearson VUE opened a case.',
  score: 'Microsoft scores technical exams from 1 to 1,000 and 700 or higher passes. Most results appear within minutes of finishing, exams with labs take about 30 minutes to score, and the result posts to your Microsoft Learn profile within 24 hours. The report shows pass or fail, your overall score and a bar chart by skill area, but never which questions you missed.',
  passRate: 'Microsoft does not publish pass rates, attempt counts or score distributions for any exam, so any percentage you see online is a training vendor estimate. The published mechanic is a scaled score of 700 on a 1 to 1,000 scale, which compensates for question difficulty and does not equal 70 percent correct.'
};

function rec(o) {
  return {
    slug: o.slug,
    body: MS,
    tagline: o.tagline,
    description: o.description,
    quickAnswer: { summary: o.summary, advantages: o.advantages },
    roadmap: o.roadmap,
    prerequisites: o.prerequisites,
    eligibility: o.eligibility,
    examMeta: o.examMeta,
    topics: o.topics,
    examEssentials: o.essentials,
    timeline: o.timeline,
    costBreakdown: o.costBreakdown,
    difficulty: o.difficulty,
    audience: o.audience,
    time: o.timeShort,
    cost: o.cost,
    faqs: o.faqs,
    summaryPoints: o.summaryPoints,
    relatedSlugs: o.relatedSlugs,
    sourceUrl: o.sourceUrl,
    reviewed: '2026-10',
    confidence: o.confidence
  };
}

export const exams = [
  rec({
    slug: 'microsoft-ai-102',
    tagline: 'The retired Azure AI Engineer Associate exam: no longer bookable since 30 June 2026.',
    description: 'Exam AI-102 for the Azure AI Engineer Associate was retired on June 30, 2026 at 11:59 PM Central, and the certification and its renewal assessment are retired too. The final version covered six areas, led by Plan and manage an Azure AI solution (20-25%) and a new agentic solution domain (5-10%). Existing holders keep the credential on their transcript but cannot renew it. The same AI Engineer role is now served by AI-103, the Azure AI Apps and Agents Developer Associate exam, which Microsoft lists with 120 minutes of exam time.',
    summary: 'AI-102 (Azure AI Engineer Associate) was retired on June 30, 2026 and cannot be scheduled. Its final blueprint, dated December 23, 2025, split into six areas with a 700 of 1,000 passing score and 100 minutes of exam time. New candidates for the AI engineer role should look at AI-103 instead.',
    advantages: [
      'The final AI-102 skills outline (December 23, 2025) is still public, so it works as a map of Azure AI services: Foundry, Azure OpenAI, Vision, Language, Speech, Search and Document Intelligence.',
      'Holders keep the Azure AI Engineer Associate credential on their Microsoft transcript and it stays verifiable online.',
      'The retired exam pointed to AI-103 for new candidates, which carries the generative AI and agent skills forward.',
      'Knowing the retirement date prevents paying for a study guide or a voucher that can no longer be used.'
    ],
    roadmap: [
      'Confirm AI-102 is retired and cannot be scheduled',
      'Choose the successor path for the AI Engineer role, AI-103',
      'Use the final AI-102 skills outline as a service checklist',
      'Keep the credential on your transcript if you earned it before retirement'
    ],
    prerequisites: 'None are enforceable now, because the exam cannot be booked. Microsoft described the audience as engineers with Python or C# experience who use REST APIs and SDKs and can apply responsible AI principles.',
    eligibility: 'No one can newly earn Microsoft Certified: Azure AI Engineer Associate through AI-102. Microsoft states that the certification and the renewal assessment are retired, so holders cannot extend the credential either; it remains on the transcript and stays verifiable.',
    examMeta: {
      questions: 'Not published by Microsoft; Microsoft states most exams have 40-60 questions (retired exam)',
      time: '100 minutes of exam time per the certification page (retired exam)',
      pass: '700 on a 1 to 1,000 scaled score',
      fee: 'US$165 typical for associate exams (exam retired; cannot be purchased)',
      format: 'Multiple choice, case studies and other interactive question types, delivered by Pearson VUE',
      admin: 'Microsoft Credentials, delivered by Pearson VUE (retired June 30, 2026)'
    },
    topics: [
      { name: 'Plan and manage an Azure AI solution', weight: '', note: 'Official range 20-25%. Selecting Foundry services, deploying models, monitoring, securing keys and implementing responsible AI.' },
      { name: 'Implement generative AI solutions', weight: '', note: 'Official range 15-20%. Foundry projects, prompt flow, RAG, Azure OpenAI in Foundry Models, tracing and fine-tuning.' },
      { name: 'Implement an agentic solution', weight: '', note: 'Official range 5-10%. Foundry Agent Service, Microsoft Agent Framework and multi-agent orchestration.' },
      { name: 'Implement computer vision solutions', weight: '', note: 'Official range 10-15%. Image analysis, custom vision models and video analysis.' },
      { name: 'Implement natural language processing solutions', weight: '', note: 'Official range 15-20%. Text analysis, translation, speech and custom language models.' },
      { name: 'Implement knowledge mining and information extraction solutions', weight: '', note: 'Official range 15-20%. Azure AI Search, Document Intelligence and Content Understanding.' }
    ],
    essentials: [
      ['Status', 'Exam AI-102 retired June 30, 2026 at 11:59 PM Central Standard Time; the certification and renewal assessment are retired'],
      ['Final blueprint', 'Skills measured as of December 23, 2025, six areas with percent ranges'],
      ['Exam time', '100 minutes per the Learn certification page'],
      ['Passing score', '700 on a scaled 1 to 1,000 range'],
      ['Languages', 'Ten listed: English, Japanese, Chinese (Simplified), Korean, German, French, Spanish, Portuguese (Brazil), Chinese (Traditional), Italian'],
      ['Successor', 'AI-103 for Microsoft Certified: Azure AI Apps and Agents Developer Associate']
    ],
    timeline: [
      { stage: 'Final exam update', duration: 'December 23, 2025 skills outline took effect' },
      { stage: 'Retirement', duration: 'June 30, 2026 at 11:59 PM Central' },
      { stage: 'Successor path, AI-103', duration: 'Microsoft lists 120 minutes of exam time' }
    ],
    costBreakdown: {
      items: [
        { item: 'AI-102 exam fee while available', fee: 'US$165 typical for associate exams' },
        { item: 'Renewal assessment while available', fee: 'Free' },
        { item: 'AI-102 today', fee: 'Cannot be purchased; retired June 30, 2026' }
      ],
      total: 'No cost applies now; plan for the AI-103 exam fee shown at checkout',
      footnote: 'Associate exams typically cost US$165 in the United States, priced by country. Check the AI-103 page for the current fee.'
    },
    difficulty: 'Challenging',
    audience: 'Existing holders and developers deciding whether the AI-102 outline or the AI-103 successor fits their Azure AI career.',
    timeShort: 'Not applicable: retired June 30, 2026',
    cost: 'Not purchasable (retired); was US$165 typical',
    faqs: [
      { q: 'Is the AI-102 exam retired?', a: 'Yes. Microsoft retired Exam AI-102 on June 30, 2026 at 11:59 PM Central Standard Time. The Azure AI Engineer Associate certification and its renewal assessment are also retired, so neither can be taken or renewed. The study guide still shows the December 23, 2025 skills outline for reference.' },
      { q: 'What replaced the AI-102 exam?', a: 'Microsoft now lists AI-103 for the Azure AI Apps and Agents Developer Associate certification, aimed at AI engineers who build agents and AI solutions with Microsoft Foundry using Python. Its Learn page shows 120 minutes of exam time and assessed areas that cover generative AI, agentic solutions, computer vision, text analysis and information extraction.' },
      { q: 'What was the AI-102 passing score?', a: 'The AI-102 passing score was 700 on a scale of 1 to 1,000, the same standard Microsoft uses for all technical exams. It is a scaled score, so it does not equal 70 percent of the questions. The scale compensates for question difficulty, and the report showed a bar chart by skill area.' },
      { q: 'How many questions were on AI-102?', a: 'Microsoft did not publish an AI-102 question count. It states that most certification exams contain 40 to 60 questions, and the number can vary. The certification page gave 100 minutes of exam time, and some questions on any exam are unscored pilot items that are not identified.' },
      { q: 'Does my Azure AI Engineer Associate certification still count?', a: 'Yes, an earned certification stays on your Microsoft transcript and remains verifiable online. However, the renewal assessment is retired, so the credential cannot be extended and it expires 12 months after your last pass or renewal. Passing the successor exam is the only way to earn the new certification.' },
      { q: 'What topics did AI-102 cover?', a: 'The final AI-102 outline had six areas: Plan and manage an Azure AI solution (20-25%), Implement generative AI solutions (15-20%), Implement an agentic solution (5-10%), Implement computer vision solutions (10-15%), Implement natural language processing solutions (15-20%), and Implement knowledge mining and information extraction solutions (15-20%).' },
      { q: 'Can I still take a practice assessment for AI-102?', a: 'The Learn certification page for the Azure AI Engineer Associate still links the AI-102 practice assessment and exam sandbox, but Microsoft lists no training for the retired exam. For current preparation, use the AI-103 study guide and the practice assessment on AI Skills Navigator instead of studying a retired blueprint.' }
    ],
    summaryPoints: [
      'AI-102 retired on June 30, 2026 at 11:59 PM Central and cannot be scheduled.',
      'The certification and its renewal assessment are retired, so holders cannot renew it.',
      'The final blueprint (December 23, 2025) had six areas, with Plan and manage an Azure AI solution at 20-25%.',
      'The passing score was 700 on a 1 to 1,000 scale with 100 minutes of exam time.',
      'AI-103 now serves the AI engineer role with 120 minutes of exam time.'
    ],
    relatedSlugs: ['microsoft-ai-103', 'microsoft-ai-200', 'microsoft-ai-901', 'microsoft-ai-300'],
    sourceUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-102',
    confidence: 'high'
  }),

  rec({
    slug: 'microsoft-ai-900',
    tagline: 'The retired AI-900 fundamentals exam, replaced by AI-901 on June 30, 2026.',
    description: 'Exam AI-900 for Azure AI Fundamentals was retired on June 30, 2026 at 11:59 PM Central, and AI-901 is now the exam for the same certification. The final AI-900 outline weighted Describe features of generative AI workloads on Azure highest at 20-25%, with four other areas at 15-20% each. The credential is a Fundamentals certification, so it does not expire. Anyone who earned it keeps it, and new candidates now sit AI-901, which adds Python-based work in Microsoft Foundry.',
    summary: 'AI-900 was retired on June 30, 2026 and cannot be scheduled. The Azure AI Fundamentals certification still exists and is now earned by passing AI-901, which weights Microsoft Foundry implementation at 55-60%. Fundamentals certifications never expire, and the pass mark on both exams is 700 out of 1,000.',
    advantages: [
      'The certification did not disappear: Microsoft Certified: Azure AI Fundamentals is still awarded, through AI-901.',
      'Anyone who passed AI-900 keeps the credential, and Fundamentals certifications do not expire.',
      'The final AI-900 outline (May 2, 2025) shows exactly which concepts moved into the new exam: responsible AI and the core AI workloads.',
      'Knowing the change avoids buying AI-900 practice tests that no longer match the live exam.'
    ],
    roadmap: [
      'Confirm AI-900 is retired and cannot be booked',
      'Move to AI-901 for Azure AI Fundamentals',
      'Study Identify AI concepts and capabilities, then Implement AI solutions by using Microsoft Foundry',
      'Add basic Python practice, which AI-901 expects'
    ],
    prerequisites: 'None for the retired exam. Microsoft said no data science or software engineering experience was required, though basic cloud concepts and client-server applications helped. The replacement AI-901 recommends Python syntax knowledge.',
    eligibility: 'AI-900 is no longer available. The final study guide said the exam suited both technical and non-technical candidates, and that it was not a prerequisite for the Azure Data Scientist Associate or Azure AI Engineer Associate certifications.',
    examMeta: {
      questions: 'Not published by Microsoft; Microsoft states most exams have 40-60 questions (retired exam)',
      time: '45 minutes of exam time (65 minutes seat time) for Fundamentals exams',
      pass: '700 on a 1 to 1,000 scaled score',
      fee: 'US$99 list price for Fundamentals exams in the United States (exam retired; cannot be purchased)',
      format: 'Multiple choice and other interactive question types, delivered by Pearson VUE',
      admin: 'Microsoft Credentials, delivered by Pearson VUE (retired June 30, 2026)'
    },
    topics: [
      { name: 'Describe Artificial Intelligence workloads and considerations', weight: '', note: 'Official range 15-20%. Common AI workloads and the six responsible AI principles.' },
      { name: 'Describe fundamental principles of machine learning on Azure', weight: '', note: 'Official range 15-20%. Regression, classification, clustering, deep learning, the Transformer architecture and Azure Machine Learning.' },
      { name: 'Describe features of computer vision workloads on Azure', weight: '', note: 'Official range 15-20%. Image classification, object detection, OCR, Azure AI Vision and Azure AI Face.' },
      { name: 'Describe features of Natural Language Processing (NLP) workloads on Azure', weight: '', note: 'Official range 15-20%. Key phrases, entities, sentiment, speech, translation, Azure AI Language and Azure AI Speech.' },
      { name: 'Describe features of generative AI workloads on Azure', weight: '', note: 'Official range 20-25%. Generative models, Azure OpenAI, Azure AI Foundry and its model catalog.' }
    ],
    essentials: [
      ['Status', 'Exam AI-900 retired June 30, 2026 at 11:59 PM Central Standard Time'],
      ['Replacement', 'AI-901 is the required exam for Microsoft Certified: Azure AI Fundamentals'],
      ['Final blueprint', 'Skills measured as of May 2, 2025, five areas with percent ranges'],
      ['Exam time', '45 minutes of exam time and 65 minutes of seat time for Fundamentals exams'],
      ['Passing score', '700 on a scaled 1 to 1,000 range'],
      ['Validity', 'Fundamentals certifications do not expire']
    ],
    timeline: [
      { stage: 'Final AI-900 blueprint update', duration: 'May 2, 2025' },
      { stage: 'AI-901 English update', duration: 'April 15, 2026' },
      { stage: 'AI-900 retirement', duration: 'June 30, 2026 at 11:59 PM Central' }
    ],
    costBreakdown: {
      items: [
        { item: 'AI-900 exam fee while available', fee: 'US$99 list price for Fundamentals exams in the United States' },
        { item: 'Microsoft Learn learning paths and sandbox', fee: 'Free' },
        { item: 'AI-900 today', fee: 'Cannot be purchased; retired June 30, 2026' }
      ],
      total: 'No cost applies now; the AI-901 fee is shown by country at checkout',
      footnote: 'Fundamentals exams list at US$99 in the United States. Taxes and country pricing vary.'
    },
    difficulty: 'Easy',
    audience: 'Candidates and holders sorting out the move from the retired AI-900 to AI-901.',
    timeShort: 'Not applicable: retired June 30, 2026',
    cost: 'Not purchasable (retired); Fundamentals exams list at US$99',
    faqs: [
      { q: 'Is the AI-900 exam retired?', a: 'Yes. Microsoft retired Exam AI-900 on June 30, 2026 at 11:59 PM Central Standard Time. The Azure AI Fundamentals certification is not retired: it is now earned by passing AI-901. Anyone who already passed AI-900 keeps the certification on their transcript.' },
      { q: 'What replaced AI-900?', a: 'AI-901 replaced AI-900 as the exam for Microsoft Certified: Azure AI Fundamentals. Its English version was updated on April 15, 2026 and splits into Identify AI concepts and capabilities (40-45%) and Implement AI solutions by using Microsoft Foundry (55-60%). It expects some knowledge of Python syntax.' },
      { q: 'Does the Azure AI Fundamentals certification expire?', a: 'No. Microsoft states that Fundamentals certifications do not expire, so Azure AI Fundamentals needs no annual renewal. Only associate, expert and specialty certifications must be renewed every 12 months through the free online assessment. The retirement of AI-900 does not remove the credential.' },
      { q: 'What was the AI-900 passing score?', a: 'The AI-900 passing score was 700 on a scale of 1 to 1,000, and AI-901 uses the same standard. It is a scaled score, not 70 percent of the questions. Microsoft adjusts for question difficulty, so the number of correct answers needed can differ between exam forms.' },
      { q: 'What topics were on the final AI-900 blueprint?', a: 'The May 2, 2025 outline had five areas: AI workloads and considerations (15-20%), machine learning principles on Azure (15-20%), computer vision (15-20%), natural language processing (15-20%) and generative AI workloads on Azure (20-25%). The generative AI share had grown while machine learning was reduced.' },
      { q: 'Is AI-900 or AI-901 easier?', a: 'AI-900 was a concept-only exam with no coding expected, while AI-901 puts 55-60% of its weight on implementing solutions with Microsoft Foundry and assumes Python syntax familiarity. AI-901 is therefore more hands-on. Both are Fundamentals exams with 45 minutes of exam time and a 700 pass mark.' }
    ],
    summaryPoints: [
      'AI-900 retired June 30, 2026 at 11:59 PM Central and cannot be scheduled.',
      'AI-901 is now the only exam that earns Microsoft Certified: Azure AI Fundamentals.',
      'The final AI-900 blueprint had five areas, with generative AI at 20-25% and the rest at 15-20%.',
      'Fundamentals certifications do not expire, so existing holders need no renewal.',
      'Both exams pass at 700 on a 1 to 1,000 scale with 45 minutes of exam time.'
    ],
    relatedSlugs: ['microsoft-ai-901', 'microsoft-az-900', 'microsoft-dp-900', 'microsoft-ai-103'],
    sourceUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-900',
    confidence: 'medium'
  }),

  rec({
    slug: 'microsoft-ai-901',
    tagline: 'The current Azure AI Fundamentals exam, now built around Microsoft Foundry and Python.',
    description: 'Exam AI-901 for Microsoft Certified: Azure AI Fundamentals gives 45 minutes of exam time and passes at 700 of 1,000, with 55-60% of the weight on Microsoft Foundry. It is aimed at people at the start of an AI solution development career who know Python syntax and Azure resources. The two areas are Identify AI concepts and capabilities (40-45%) and Implement AI solutions by using Microsoft Foundry (55-60%). It replaced AI-900 on June 30, 2026, and the certification never expires.',
    summary: 'AI-901 is the exam for Microsoft Certified: Azure AI Fundamentals. It runs 45 minutes of exam time, passes at 700 of 1,000 and weights Microsoft Foundry implementation at 55-60%. Fundamentals certifications never expire, there is no prerequisite, and Python syntax knowledge is expected.',
    advantages: [
      'The credential never expires, so there is no annual renewal assessment.',
      'The 55-60% Foundry weighting makes it a hands-on exam covering agents, text, speech, vision and information extraction.',
      'It is the entry point to the AI role-based path that leads to AI-103 and AI-200.',
      'Microsoft publishes the full skills outline, effective April 15, 2026, and a free practice assessment on AI Skills Navigator.'
    ],
    roadmap: [
      'Learn AI concepts and responsible AI principles',
      'Practice Python syntax and Azure resource basics',
      'Build small apps in Microsoft Foundry',
      'Take the free practice assessment on AI Skills Navigator',
      'Schedule AI-901 through Pearson VUE and pass at 700'
    ],
    prerequisites: 'No formal prerequisite. Microsoft expects conceptual knowledge of AI solutions in Azure, knowledge of Python coding syntax and programming techniques, and familiarity with Azure resources.',
    eligibility: 'Open to anyone. Microsoft describes the candidate as at the beginning of a career in AI solution development. There is no experience requirement, but the exam assumes you can read and write basic Python.',
    examMeta: {
      questions: 'Not published by Microsoft; Microsoft states most exams have 40-60 questions',
      time: '45 minutes of exam time (65 minutes seat time) for Fundamentals exams',
      pass: '700 on a 1 to 1,000 scaled score',
      fee: 'US$99 list price for Fundamentals exams in the United States; the AI-901 page shows the price by country at checkout',
      format: 'Multiple choice and other interactive question types; no Microsoft Learn access during Fundamentals exams',
      admin: 'Pearson VUE test center or online proctoring (OnVUE)'
    },
    topics: [
      { name: 'Identify AI concepts and capabilities', weight: '', note: 'Official range 40-45%. Responsible AI principles, model components and configurations, and common AI workloads such as generative and agentic AI, text analysis, speech, vision and information extraction.' },
      { name: 'Implement AI solutions by using Microsoft Foundry', weight: '', note: 'Official range 55-60%. Deploy models, write prompts, build chat clients with the Foundry SDK and create single-agent solutions.' },
      { name: 'Implement AI solutions for text and speech by using Foundry', weight: '', note: 'Subarea of the Foundry domain: text analysis apps, spoken prompts with multimodal models and Azure Speech in Foundry Tools.' },
      { name: 'Implement AI solutions with computer vision and image-generation capabilities by using Foundry', weight: '', note: 'Subarea of the Foundry domain: visual input in prompts, generating images and lightweight vision apps.' },
      { name: 'Implement AI solutions for information extraction by using Foundry', weight: '', note: 'Subarea of the Foundry domain: extracting data from documents, images, audio and video with Azure Content Understanding.' }
    ],
    essentials: [
      ['Version', 'English skills outline updated April 15, 2026; localized versions follow about eight weeks later'],
      ['Exam time', '45 minutes of exam time and 65 minutes of seat time'],
      ['Passing score', '700 on a scaled 1 to 1,000 range'],
      ['Languages', 'Thirteen listed, including English, Arabic, Chinese, French, German, Indonesian, Italian, Japanese, Korean, Portuguese, Russian and Spanish'],
      ['Validity', 'Fundamentals certifications do not expire; no renewal assessment'],
      ['Retake rule', '24 hours after the first failure, then 14 days between later attempts, up to five in 12 months']
    ],
    timeline: [
      { stage: 'Concepts and responsible AI', duration: '1-2 weeks' },
      { stage: 'Foundry labs and Python practice', duration: '2-4 weeks' },
      { stage: 'Practice assessment and booking', duration: '1 week' }
    ],
    costBreakdown: {
      items: [
        { item: 'Exam fee', fee: 'US$99 list price in the United States; priced by country' },
        { item: 'Microsoft Learn paths, practice assessment and sandbox', fee: 'Free' },
        { item: 'Retake', fee: 'Full exam fee again; 24-hour wait, then 14 days' }
      ],
      total: 'US$99 for a first attempt, plus tax where applicable',
      footnote: 'Microsoft states that pricing is subject to change and excludes taxes. Confirm the price at Pearson VUE checkout.'
    },
    difficulty: 'Easy',
    audience: 'Students and career starters entering AI solution development who can read basic Python.',
    timeShort: '3-6 weeks of part-time study',
    cost: 'US$99 list price (United States)',
    faqs: [
      { q: 'What is the AI-901 exam?', a: 'AI-901 is the Microsoft Azure AI Fundamentals exam and the only exam that earns Microsoft Certified: Azure AI Fundamentals. It replaced AI-900 on June 30, 2026. It splits into Identify AI concepts and capabilities (40-45%) and Implement AI solutions by using Microsoft Foundry (55-60%), and it expects Python syntax knowledge.' },
      { q: 'What is the passing score for AI-901?', a: 'The AI-901 passing score is 700 on a scale of 1 to 1,000. It is a scaled score, so it does not equal 70 percent of the questions. Microsoft adjusts for question difficulty across exam forms, there is no penalty for guessing, and your report includes a bar chart by skill area.' },
      { q: 'How long is the AI-901 exam?', a: 'AI-901 allows 45 minutes of exam time, and Microsoft advises allowing 65 minutes of seat time for the instructions, candidate agreement and optional comments. Five minutes of unscheduled break time are included, but the clock keeps running during a break. Microsoft does not publish the exact number of questions.' },
      { q: 'Does the Azure AI Fundamentals certification expire?', a: 'No. Microsoft states that Fundamentals certifications do not expire, so Azure AI Fundamentals needs no yearly renewal assessment. Associate, expert and specialty certifications are the ones that expire after 12 months and renew free through an online assessment on Microsoft Learn.' },
      { q: 'Is AI-901 hard?', a: 'AI-901 is rated Easy for a Fundamentals exam, but it is harder than AI-900 because 55-60% of it covers building with Microsoft Foundry and assumes basic Python. Candidates with no coding practice should spend extra time on the Foundry SDK and agent items. Microsoft publishes no pass rate.' },
      { q: 'Do I need to know Python for AI-901?', a: 'Yes, at a basic level. Microsoft says candidates need knowledge of Python coding syntax and programming techniques and should be familiar with Azure resources. The exam asks about lightweight chat clients, agent clients and text, speech and vision apps built with the Foundry SDK, so you should be able to read short Python snippets.' },
      { q: 'How much does the AI-901 exam cost?', a: 'Microsoft lists Fundamentals exams at US$99 in the United States, but the AI-901 page states that the price depends on the country or region where you are proctored and excludes taxes. Pricing can change without notice, so confirm the amount at Pearson VUE checkout before paying. A retake costs the full fee again.' }
    ],
    summaryPoints: [
      'AI-901 replaced AI-900 on June 30, 2026 as the exam for Azure AI Fundamentals.',
      'It has two areas: Identify AI concepts and capabilities 40-45%, and Microsoft Foundry implementation 55-60%.',
      'The exam gives 45 minutes and passes at 700 of 1,000.',
      'The certification never expires and has no renewal assessment.',
      'Basic Python syntax is expected, but there is no formal prerequisite.'
    ],
    relatedSlugs: ['microsoft-ai-900', 'microsoft-az-900', 'microsoft-dp-900', 'microsoft-ai-103'],
    sourceUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901',
    confidence: 'medium'
  }),

  rec({
    slug: 'microsoft-az-104',
    tagline: 'The core Azure administrator exam: identity, storage, compute, networking and monitoring.',
    description: 'The Microsoft AZ-104 exam for Azure Administrator Associate gives 100 minutes of exam time and passes at 700 of 1,000 on its April 17, 2026 outline. Candidates administer an Azure environment across five areas: Manage Azure identities and governance (20-25%), Implement and manage storage (15-20%), Deploy and manage Azure compute resources (20-25%), Implement and manage virtual networking (15-20%), and Monitor and maintain Azure resources (10-15%). It targets cloud administrators with PowerShell, Azure CLI and Bicep experience and renews free every 12 months.',
    summary: 'AZ-104 is the exam for Microsoft Certified: Azure Administrator Associate. It allows 100 minutes of exam time, passes at 700 of 1,000 and costs US$165 in the United States. The certification must be renewed every 12 months through a free online assessment.',
    advantages: [
      'The April 17, 2026 skills outline is public with percent ranges, so study can follow the weights.',
      'Role-based exams allow access to Microsoft Learn during the exam, which helps with CLI and Bicep syntax.',
      'Renewal is free and unproctored: pass an open-book assessment in the six months before expiry.',
      'The credential is the standard Azure administration step after AZ-900 and a base for AZ-500, AZ-700 and AZ-305.'
    ],
    roadmap: [
      'Review the five skill areas and weights',
      'Build labs for identity, storage, VMs, networking and monitoring',
      'Practice Bicep, ARM templates, Azure CLI and PowerShell',
      'Take the free practice assessment on Microsoft Learn',
      'Schedule AZ-104 and renew each year'
    ],
    prerequisites: 'No formal prerequisite. Microsoft expects subject matter expertise in implementing, managing and monitoring an Azure environment, plus familiarity with operating systems, networking, servers and virtualization.',
    eligibility: 'Open to anyone. Microsoft recommends experience with PowerShell, Azure CLI, the Azure portal, ARM templates or Bicep files, and Microsoft Entra ID. AZ-900 is not required.',
    examMeta: {
      questions: 'Not published by Microsoft; Microsoft states most exams have 40-60 questions, and labs may appear',
      time: '100 minutes of exam time per the certification page (120-minute seat time); up to 120 minutes if labs are included',
      pass: '700 on a 1 to 1,000 scaled score',
      fee: 'US$165 typical for associate exams in the United States; priced by country; renewal is free',
      format: 'Multiple choice, case studies, other interactive items and possible hands-on labs',
      admin: 'Pearson VUE test center or online proctoring (OnVUE)'
    },
    topics: [
      { name: 'Manage Azure identities and governance', weight: '', note: 'Official range 20-25%. Microsoft Entra users and groups, Azure roles, Azure Policy, locks, tags, subscriptions, management groups and cost alerts.' },
      { name: 'Implement and manage storage', weight: '', note: 'Official range 15-20%. Storage firewalls, SAS tokens, redundancy, Azure Files, Blob Storage tiers and lifecycle management.' },
      { name: 'Deploy and manage Azure compute resources', weight: '', note: 'Official range 20-25%. ARM templates and Bicep, virtual machines, Container Registry, Container Instances, Container Apps and App Service.' },
      { name: 'Implement and manage virtual networking', weight: '', note: 'Official range 15-20%. Virtual networks, peering, NSGs, Azure Bastion, private endpoints, Azure DNS and load balancing.' },
      { name: 'Monitor and maintain Azure resources', weight: '', note: 'Official range 10-15%. Azure Monitor metrics and logs, alerts, Network Watcher, Azure Backup and Site Recovery.' }
    ],
    essentials: [
      ['Outline version', 'Skills measured as of April 17, 2026; the audience profile and several subareas received minor changes'],
      ['Exam time', '100 minutes of exam time and 120 minutes of seat time; labs may extend this to 120 and 140'],
      ['Passing score', '700 on a scaled 1 to 1,000 range'],
      ['Languages', 'Ten listed, including English, Chinese, Korean, Japanese, French, Spanish, German, Portuguese (Brazil) and Italian'],
      ['Validity', '12 months; renew free with an online assessment in the six months before expiry'],
      ['Retake rule', '24 hours after the first failure, then 14 days between later attempts, up to five in 12 months'],
      ['Exam aids', 'Microsoft Learn is available in a split screen during associate and expert exams']
    ],
    timeline: [
      { stage: 'Study and labs', duration: '6-10 weeks for candidates with some Azure experience' },
      { stage: 'Practice assessment and booking', duration: '1 week; schedule up to 90 days ahead' },
      { stage: 'Exam and result', duration: '120 minutes of seat time; result in minutes, labs about 30 minutes' },
      { stage: 'Renewal', duration: 'Every 12 months, free, six-month window' }
    ],
    costBreakdown: {
      items: [
        { item: 'Exam fee', fee: 'US$165 typical for associate exams in the United States' },
        { item: 'Microsoft Learn paths, practice assessment, sandbox', fee: 'Free' },
        { item: 'Azure subscription for labs', fee: 'Free trial credit or pay-as-you-go usage; set a budget alert' },
        { item: 'Annual renewal assessment', fee: 'Free' }
      ],
      total: 'US$165 for a first attempt plus any lab spend',
      footnote: 'Price depends on the country where you are proctored and excludes taxes. A retake costs the full fee again.'
    },
    difficulty: 'Challenging',
    audience: 'Cloud and systems administrators who manage Azure subscriptions, identities, storage, VMs and networks.',
    timeShort: '6-10 weeks',
    cost: 'US$165 plus lab costs',
    faqs: [
      { q: 'How many questions are on the AZ-104 exam?', a: 'Microsoft does not publish an AZ-104 question count. It says most certification exams contain 40 to 60 questions, though the number varies and labs may be included. You get 100 minutes of exam time, or up to 120 minutes if labs appear, and the introduction screen states the case study and lab counts.' },
      { q: 'What is the passing score for AZ-104?', a: 'The AZ-104 passing score is 700 on a scale of 1 to 1,000. It is scaled rather than 70 percent of the points, so harder exam forms need fewer correct answers. There is no penalty for guessing, and the score report shows pass or fail plus a bar chart by skill area.' },
      { q: 'Is the AZ-104 exam hard?', a: 'AZ-104 is rated Challenging because it tests hands-on administration across identity, storage, compute, networking and monitoring, and labs may require real portal or CLI work. Candidates who build the labs do better than those who only read. Microsoft publishes no pass rate, so there is no official difficulty figure.' },
      { q: 'How long is the AZ-104 valid?', a: 'Azure Administrator Associate is valid for 12 months. You renew by passing a free, unproctored, open-book online assessment on Microsoft Learn during the six months before it expires, which extends it one year from the expiration date. You can attempt the renewal assessment as many times as needed.' },
      { q: 'How much does the AZ-104 exam cost?', a: 'Microsoft says associate and expert exams typically cost US$165, priced by country, and taxes may apply. You pay the full fee for every attempt, and there is no refund for failed exams or missed appointments. Renewal is free, and the Learn practice assessment and exam sandbox are also free.' },
      { q: 'What changed in AZ-104 in April 2026?', a: 'The study guide dated April 17, 2026 made minor updates to the audience profile and to Azure Files and Blob Storage, virtual machines, containers, virtual networks and Azure Monitor subareas. The five domain names and percent ranges did not change, so earlier preparation still maps to the current outline.' },
      { q: 'Can I use Microsoft Learn during the AZ-104 exam?', a: 'Yes. Associate and expert exams include a Microsoft Learn button on the left navigation pane that opens learn.microsoft.com in a split screen, except Q&A, practice assessments and your profile. No extra time is added and the timer keeps running, so use it for syntax lookups rather than for most questions.' }
    ],
    summaryPoints: [
      'AZ-104 allows 100 minutes of exam time and passes at 700 of 1,000.',
      'Five areas: identities and governance 20-25%, compute 20-25%, storage 15-20%, networking 15-20%, monitoring 10-15%.',
      'US$165 typical fee in the United States; each retake costs the full fee.',
      'The certification expires after 12 months and renews free with an online assessment.',
      'Microsoft Learn is available during the exam, and labs may appear.'
    ],
    relatedSlugs: ['microsoft-az-900', 'microsoft-az-305', 'microsoft-az-500', 'microsoft-az-700'],
    sourceUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104',
    confidence: 'high'
  }),

  rec({
    slug: 'microsoft-az-140',
    tagline: 'The Azure Virtual Desktop specialty: host pools, FSLogix, identity and RemoteApps.',
    description: 'The Microsoft AZ-140 exam for Azure Virtual Desktop Specialty gives 100 minutes of exam time and puts 40-45% of its weight on infrastructure planning and implementation. Its July 20, 2026 outline has four areas: infrastructure (40-45%), identity and security (15-20%), user environments and apps (20-25%), and monitoring and maintenance (10-15%). It targets server and desktop administrators who run host pools, FSLogix profile containers and RemoteApps, and it renews free every 12 months.',
    summary: 'AZ-140 is the exam for Microsoft Certified: Azure Virtual Desktop Specialty. It allows 100 minutes, passes at 700 of 1,000 and has one dominant area: Plan and implement an Azure Virtual Desktop infrastructure at 40-45%. The certification renews free every 12 months.',
    advantages: [
      'It is a one-exam specialty certification that proves Azure Virtual Desktop skills without an associate prerequisite.',
      'The July 20, 2026 outline gives exact percent ranges, with infrastructure at 40-45% so study time can be prioritized.',
      'FSLogix, RDP Shortpath, Private Link, App attach and Start VM on Connect are all named in the published skills list.',
      'Renewal is free: pass an open-book online assessment in the six months before expiry.'
    ],
    roadmap: [
      'Review the four skill areas and the 40-45% infrastructure weight',
      'Build a host pool with session hosts, FSLogix and an image',
      'Practice identity: Entra ID, Conditional Access and single sign-on',
      'Take the free practice assessment on Microsoft Learn',
      'Schedule AZ-140 and renew each year'
    ],
    prerequisites: 'No formal prerequisite. Microsoft expects server or desktop administrator experience with Azure compute, networking, identity, storage and resiliency, plus use of the Azure portal, templates, scripting and command-line tools.',
    eligibility: 'Open to anyone, but Microsoft frames the candidate as a server or desktop administrator who works with Azure administrators, architects, Microsoft 365 administrators, security engineers and Azure Local administrators.',
    examMeta: {
      questions: 'Not published by Microsoft; Microsoft states most exams have 40-60 questions, and interactive components may appear',
      time: '100 minutes of exam time per the certification page (120-minute seat time)',
      pass: '700 on a 1 to 1,000 scaled score',
      fee: 'Associate and expert exams typically cost US$165; the AZ-140 specialty price is shown by country at checkout; renewal is free',
      format: 'Multiple choice, case studies and other interactive items; may include hands-on components',
      admin: 'Pearson VUE test center or online proctoring (OnVUE)'
    },
    topics: [
      { name: 'Plan and implement an Azure Virtual Desktop infrastructure', weight: '', note: 'Official range 40-45%. Networking, FSLogix storage, host pool and session host planning and implementation, and session host images.' },
      { name: 'Plan and implement identity and security', weight: '', note: 'Official range 15-20%. AD DS, Entra ID and Entra Domain Services scenarios, RBAC, Conditional Access, Defender, Bastion and Trusted Launch.' },
      { name: 'Plan and implement user environments and apps', weight: '', note: 'Official range 20-25%. FSLogix profile containers, Cloud Cache, client settings, RemoteApp, Microsoft 365 Apps, Teams and App attach.' },
      { name: 'Monitor and maintain an Azure Virtual Desktop infrastructure', weight: '', note: 'Official range 10-15%. Azure Monitor, Insights workbooks, autoscaling, update strategy, disaster recovery and backup.' }
    ],
    essentials: [
      ['Outline version', 'Skills measured as of July 20, 2026, with minor changes to identity, security, FSLogix, client settings and apps'],
      ['Exam time', '100 minutes of exam time and 120 minutes of seat time'],
      ['Passing score', '700 on a scaled 1 to 1,000 range'],
      ['Languages', 'Seven listed: English, German, Spanish, French, Japanese, Portuguese (Brazil) and Chinese (Simplified)'],
      ['Validity', '12 months; renew free with an online assessment in the six months before expiry'],
      ['Retake rule', '24 hours after the first failure, then 14 days between later attempts, up to five in 12 months'],
      ['Weighting', 'Infrastructure planning and implementation alone carries 40-45% of the exam']
    ],
    timeline: [
      { stage: 'Study and AVD lab practice', duration: '6-10 weeks, with most time on host pools, images and FSLogix' },
      { stage: 'Practice assessment and booking', duration: '1 week; schedule up to 90 days ahead' },
      { stage: 'Exam and result', duration: '120 minutes of seat time; result in minutes' },
      { stage: 'Renewal', duration: 'Every 12 months, free, six-month window' }
    ],
    costBreakdown: {
      items: [
        { item: 'Exam fee', fee: 'Shown by country at checkout; associate and expert exams typically US$165' },
        { item: 'Microsoft Learn paths, practice assessment, sandbox', fee: 'Free' },
        { item: 'Azure subscription for AVD labs', fee: 'Pay-as-you-go; session hosts are billed VMs, so deallocate after each session' },
        { item: 'Annual renewal assessment', fee: 'Free' }
      ],
      total: 'About US$165 for a first attempt plus lab spend',
      footnote: 'Confirm the specialty price at Pearson VUE checkout; taxes are extra and a retake costs the full fee.'
    },
    difficulty: 'Challenging',
    audience: 'Desktop, server and EUC administrators who deliver virtual desktops and RemoteApps on Azure.',
    timeShort: '6-10 weeks',
    cost: 'About US$165 plus AVD lab costs',
    faqs: [
      { q: 'How long is the AZ-140 exam?', a: 'AZ-140 gives 100 minutes of exam time, and Microsoft advises 120 minutes of seat time for the instructions and agreement. The certification page warns you may have interactive components. Microsoft does not publish an exact question count; it says most exams have 40 to 60 questions.' },
      { q: 'What is the passing score for AZ-140?', a: 'The AZ-140 passing score is 700 on a scale of 1 to 1,000. It is a scaled score and does not equal 70 percent of the points. Because infrastructure carries 40-45% of the exam, a weak result in that one area is hard to offset with the other three.' },
      { q: 'What does the AZ-140 exam cover?', a: 'AZ-140 covers four areas: infrastructure (40-45%), identity and security (15-20%), user environments and apps (20-25%), and monitoring and maintenance (10-15%). Named topics include RDP Shortpath, Private Link, FSLogix, host pools, VM Image Builder, Conditional Access, Defender, App attach, autoscaling and disaster recovery.' },
      { q: 'How long is the AZ-140 certification valid?', a: 'Azure Virtual Desktop Specialty is valid for 12 months. You renew for free by passing an unproctored, open-book online assessment on Microsoft Learn during the six months before expiry, and the certification extends one year from the expiration date. There is no limit on renewal attempts.' },
      { q: 'Is the AZ-140 exam hard?', a: 'AZ-140 is Challenging because it mixes Azure infrastructure, Windows multi-session behaviour, identity join models and FSLogix storage in one narrow exam. Candidates from Citrix backgrounds usually find Azure plumbing hardest, and AZ-104 holders find profile management hardest. Microsoft publishes no pass rate.' },
      { q: 'Do I need AZ-104 before AZ-140?', a: 'No. Microsoft lists no prerequisite exam for the Azure Virtual Desktop Specialty. It does expect Azure experience with compute, networking, identity, storage and resiliency, which is the ground AZ-104 covers, so many candidates take AZ-104 or study its outline first.' },
      { q: 'What changed in the July 2026 AZ-140 update?', a: 'The July 20, 2026 study guide revised the audience profile and made minor changes to identity integration, security, FSLogix, user experience and client settings, and installing and configuring apps on a session host. The four domain names and percent ranges did not change.' }
    ],
    summaryPoints: [
      'AZ-140 allows 100 minutes of exam time and passes at 700 of 1,000.',
      'Four areas: infrastructure 40-45%, user environments and apps 20-25%, identity and security 15-20%, monitoring 10-15%.',
      'The certification expires after 12 months and renews free through an online assessment.',
      'No prerequisite exam, but Azure compute, networking, identity and storage experience is expected.',
      'The outline was updated July 20, 2026, with no domain percent changes.'
    ],
    relatedSlugs: ['microsoft-az-104', 'microsoft-az-800', 'microsoft-az-500', 'microsoft-az-700'],
    sourceUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-140',
    confidence: 'medium'
  }),

  rec({
    slug: 'microsoft-az-204',
    tagline: 'The retired Azure Developer Associate exam: no longer bookable since 31 July 2026.',
    description: 'Exam AZ-204 for the Azure Developer Associate was retired on July 31, 2026 at 11:59 PM Central, and the certification and its renewal assessment are retired too. The final outline from January 14, 2026 weighted Develop Azure compute solutions highest at 25-30%. Existing holders keep it on their transcript but cannot renew it. Microsoft now points developers to AI-200 and the Azure AI Cloud Developer Associate, which lists 120 minutes of exam time.',
    summary: 'AZ-204 was retired on July 31, 2026 and cannot be scheduled. Its final outline, dated January 14, 2026, passed at 700 of 1,000 across five areas. Developers now look to AI-200, which earns the Azure AI Cloud Developer Associate and lists 120 minutes of exam time.',
    advantages: [
      'The final AZ-204 outline (January 14, 2026) is still public and doubles as a checklist of Azure developer services.',
      'Holders keep the Azure Developer Associate credential on their transcript, verifiable online.',
      'The successor path, AI-200, targets back-end AI services, containers, data management and vector databases.',
      'Knowing the retirement date avoids paying for a voucher that can no longer be used.'
    ],
    roadmap: [
      'Confirm AZ-204 is retired and cannot be scheduled',
      'Review the AI-200 outline for the successor developer path',
      'Use the AZ-204 outline as a service checklist for Azure development',
      'Keep the credential on your transcript if you earned it before retirement'
    ],
    prerequisites: 'None are enforceable now because the exam cannot be booked. Microsoft described the audience as developers with at least two years of programming experience, Azure SDK proficiency and Azure CLI or PowerShell skills.',
    eligibility: 'No one can newly earn Microsoft Certified: Azure Developer Associate through AZ-204. Microsoft states that the certification and the renewal assessment are retired, so holders cannot extend the credential; it remains on the transcript.',
    examMeta: {
      questions: 'Not published by Microsoft; Microsoft states most exams have 40-60 questions (retired exam)',
      time: 'Not shown on the retired AZ-204 page; Microsoft lists 100 minutes for associate exams without labs and 120 with labs',
      pass: '700 on a 1 to 1,000 scaled score',
      fee: 'US$165 typical for associate exams (exam retired; cannot be purchased)',
      format: 'Multiple choice, case studies and other interactive items, delivered by Pearson VUE',
      admin: 'Microsoft Credentials, delivered by Pearson VUE (retired July 31, 2026)'
    },
    topics: [
      { name: 'Develop Azure compute solutions', weight: '', note: 'Official range 25-30%. Container images, Azure Container Registry, Container Instances, Container Apps, App Service Web Apps and Azure Functions.' },
      { name: 'Develop for Azure storage', weight: '', note: 'Official range 15-20%. Azure Cosmos DB operations, consistency levels, change feed and Azure Blob Storage.' },
      { name: 'Implement Azure security', weight: '', note: 'Official range 15-20%. Microsoft identity platform, Entra ID, SAS, Microsoft Graph, Key Vault, App Configuration and managed identities.' },
      { name: 'Monitor and troubleshoot Azure solutions', weight: '', note: 'Official range 5-10%. Azure Monitor Application Insights, availability tests and alerts.' },
      { name: 'Connect to and consume Azure services and third-party services', weight: '', note: 'Official range 20-25%. API Management, Event Grid, Event Hubs, Service Bus and Queue Storage.' }
    ],
    essentials: [
      ['Status', 'Exam AZ-204 retired July 31, 2026 at 11:59 PM Central Standard Time; the certification and renewal assessment are retired'],
      ['Final blueprint', 'Skills measured as of January 14, 2026, five areas with percent ranges'],
      ['Passing score', '700 on a scaled 1 to 1,000 range'],
      ['Languages', 'Ten listed, including English, Japanese, Chinese, Korean, French, German, Spanish, Portuguese (Brazil) and Italian'],
      ['Successor', 'AI-200 for Microsoft Certified: Azure AI Cloud Developer Associate, 120 minutes of exam time'],
      ['Existing holders', 'The credential remains on the transcript but cannot be renewed']
    ],
    timeline: [
      { stage: 'Final AZ-204 blueprint update', duration: 'January 14, 2026' },
      { stage: 'AZ-204 retirement', duration: 'July 31, 2026 at 11:59 PM Central' },
      { stage: 'Successor path, AI-200', duration: 'Microsoft lists 120 minutes of exam time' }
    ],
    costBreakdown: {
      items: [
        { item: 'AZ-204 exam fee while available', fee: 'US$165 typical for associate exams' },
        { item: 'Renewal assessment while available', fee: 'Free' },
        { item: 'AZ-204 today', fee: 'Cannot be purchased; retired July 31, 2026' }
      ],
      total: 'No cost applies now; plan for the AI-200 exam fee shown at checkout',
      footnote: 'Associate exams typically cost US$165 in the United States, priced by country. Check the AI-200 page for its current fee.'
    },
    difficulty: 'Challenging',
    audience: 'Existing holders and Azure developers deciding between the retired AZ-204 outline and the AI-200 successor.',
    timeShort: 'Not applicable: retired July 31, 2026',
    cost: 'Not purchasable (retired); was US$165 typical',
    faqs: [
      { q: 'Is the AZ-204 exam retired?', a: 'Yes. Microsoft retired Exam AZ-204 on July 31, 2026 at 11:59 PM Central Standard Time. The Azure Developer Associate certification and its renewal assessment are retired as well, so neither can be taken or renewed. The study guide still shows the January 14, 2026 skills outline for reference.' },
      { q: 'What replaced the AZ-204 exam?', a: 'Microsoft now lists AI-200 for the Azure AI Cloud Developer Associate certification, focused on back-end AI services, scalable architectures and the full development lifecycle. It lists 120 minutes of exam time and four assessed areas: containerized solutions, data management, connecting to Azure services, and securing, monitoring and troubleshooting.' },
      { q: 'What was the AZ-204 passing score?', a: 'The AZ-204 passing score was 700 on a scale of 1 to 1,000. It was a scaled score rather than 70 percent of the questions, so the number of correct answers needed varied by exam form. There was no penalty for guessing, and reports showed a bar chart by skill area.' },
      { q: 'Does my Azure Developer Associate certification still count?', a: 'It stays on your Microsoft transcript and remains verifiable online. The renewal assessment is retired, though, so the credential cannot be extended and it becomes expired 12 months after your last pass or renewal. Passing a replacement exam is the only way to earn a new certification.' },
      { q: 'What topics were on the final AZ-204 outline?', a: 'The January 14, 2026 outline had five areas: Develop Azure compute solutions (25-30%), Develop for Azure storage (15-20%), Implement Azure security (15-20%), Monitor and troubleshoot Azure solutions (5-10%), and Connect to and consume Azure services and third-party services (20-25%). Microsoft updated the guide on that date.' },
      { q: 'Is AZ-204 still worth studying?', a: 'As a booked exam, no, because it cannot be scheduled. As a skills checklist, parts of it still apply: containers, App Service, Functions, Cosmos DB, Key Vault and Service Bus are the services developers use on Azure. For a credential, follow the AI-200 outline instead.' }
    ],
    summaryPoints: [
      'AZ-204 retired on July 31, 2026 at 11:59 PM Central and cannot be scheduled.',
      'The certification and its renewal assessment are retired, so holders cannot renew it.',
      'The final outline (January 14, 2026) had five areas, led by compute at 25-30%.',
      'It passed at 700 on a 1 to 1,000 scale.',
      'AI-200 now serves the Azure developer path with 120 minutes of exam time.'
    ],
    relatedSlugs: ['microsoft-ai-200', 'microsoft-ai-103', 'microsoft-az-104', 'microsoft-az-400'],
    sourceUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-204',
    confidence: 'medium'
  })
];

export default { programs, exams };
