// Depth content for: microsoft-ai-901
// VERIFICATION NOTE (2026-08-04): AI-901 is a REAL, LIVE Microsoft exam. It went to
// beta in April 2026 and became the sole route to Microsoft Certified: Azure AI
// Fundamentals after AI-900 retired on 30 June 2026. Verified on
// learn.microsoft.com/credentials/certifications/exams/ai-901 and on the certification
// page learn.microsoft.com/credentials/certifications/azure-ai-fundamentals
// (Required exams: AI-901; Retirement date: none). Announcement:
// techcommunity.microsoft.com "Evolving the Microsoft Certified: Azure AI Fundamentals
// Certification". Skills measured as of 15 April 2026.
// One correction to the main page data: AI-901 is a FUNDAMENTALS certification and
// therefore does NOT expire. The main page currently states "12 months (free annual
// renewal)", which applies to associate/expert/specialty certifications only.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This guide is compiled and maintained by our IT-certifications desk. Vendor exams in this space are revised and retired frequently, so we track the objectives document by its published revision date and state plainly when an exam is being retired and what replaces it — the single most common way candidates waste money here is studying a superseded blueprint. Fees, scoring, retake rules and renewal terms come from the vendor’s own certification pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Objectives, exam codes, fees and retirement dates were taken from the vendor’s current certification pages and checked for the revision date shown there.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary
  salaryOutlook: {
    headline: 'No SOC code exists for "AI fundamentals" — the honest anchor is the IT occupations group at $105,990 (BLS, May 2024)',
    summary: "There is no Bureau of Labor Statistics occupation called AI engineer, prompt engineer or AI developer, and pretending otherwise would be the easiest way to mislead you on this page. The BLS occupational structure predates the generative-AI job titles now appearing on job boards, and the roles AI-901 points toward are currently distributed across Software Developers, Computer Occupations All Other, and Computer Support Specialists depending on how much code the job actually involves. We therefore give you the group-level figure for computer and information technology occupations as the honest anchor, plus the software developer figure as the upper marker for where the AI-901 audience is heading, and we label both for what they are. What makes AI-901 different from its predecessor is worth stating in salary terms. AI-900, which it replaced, was explicitly open to non-technical candidates and required no coding at all — it was a literacy badge for salespeople, project managers and analysts. AI-901 is not that exam. Microsoft's own audience profile now says you need knowledge of Python coding syntax and programming techniques and familiarity with provisioning Azure resources, and the certification is filed under the AI Engineer job role. The credential has moved from the business side of the house to the developer side. That repositioning is the single most useful thing to know about its career value: it is now a genuine on-ramp to a junior developer track rather than a conversation-starter for non-technical staff, but it is also no longer the frictionless credential a non-coder could pick up in a weekend. As with every fundamentals-tier certification, AI-901 alone will not move your salary. What it does is make you a credible applicant for junior roles where the employer wants evidence you have actually deployed a model rather than read about one.",
    rows: [
      { label: 'Median wage — computer and information technology occupations (group)', value: '$105,990', note: 'BLS Occupational Outlook Handbook, May 2024 wage data; group page last modified 28 August 2025. Used as the honest anchor because no BLS occupation matches "AI fundamentals".' },
      { label: 'Median wage — software developers (SOC 15-1252)', value: '$133,080', note: 'BLS OOH, May 2024. The upper marker: where the AI-901 audience is aiming once they can actually ship code, not what the certificate itself pays.' },
      { label: 'Median wage — computer network support specialists (SOC 15-1231)', value: '$73,340', note: 'BLS OOH, May 2024. The realistic entry point for an AI-901 holder without a development background.' },
      { label: 'Projected annual openings, all IT occupations, 2024-2034', value: '~317,700', note: 'BLS OOH, computer and information technology occupations group.' },
      { label: 'Self-reported average, Microsoft Certified: Azure AI Fundamentals holders', value: '$90,484', note: 'Skillsoft "30+ Top-Paying Microsoft Certifications" (2025), from its IT Skills and Salary survey — worldwide, self-reported respondent data, NOT government statistics. The figure predates the AI-901 transition and describes AI-900 holders, who were a different and less technical population.' }
    ],
    growth: 'Overall IT occupations projected to grow much faster than average 2024-2034; software developers specifically +15% (BLS OOH, 2024-2034 projections)',
    source: { label: 'BLS Occupational Outlook Handbook — Computer and Information Technology Occupations', url: 'https://www.bls.gov/ooh/computer-and-information-technology/home.htm' }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'No published pass rate — and for AI-901 specifically, nobody has one yet',
    summary: "Microsoft publishes no pass rates for any certification exam, and AI-901 is a case where the absence is even more absolute than usual. The exam only went to beta in April 2026 and reached general availability in June 2026, so any figure you encounter is not merely unofficial — it is arithmetically impossible for a credible sample to exist. Treat every \"AI-901 pass rate\" claim as fabricated. Course sellers have a direct commercial incentive to publish an encouraging number for a brand-new exam precisely because nobody can contradict them. What Microsoft does publish is the scoring mechanism, and it is the same across the programme. Scores are reported on a 1-1,000 scale with 700 required to pass, and Microsoft states in writing that because this is a scaled score it \"may not equal 70% of the points\". The scaling exists because candidates receive question sets of differing difficulty; an easier form requires more raw points to clear the bar and a harder one requires fewer. There is no guessing penalty, and an undisclosed subset of items on your form is unscored pilot content that you must still answer as though it counts. There is one AI-901-specific wrinkle worth planning for. Because the exam is new, its item bank is smaller and its pilot-question proportion is likely higher than on a mature exam, which means more of your form may be unscored. That is not something you can act on during the exam — you cannot tell which items those are — but it is a reason not to read too much into a narrow miss. Finally, note that the practice assessment for AI-901 has moved: it now lives on AI Skills Navigator rather than in the usual Microsoft Learn practice-assessment slot, and you must be signed in to launch it.",
    caveat: "No official pass rate exists for AI-901 and no credible unofficial one can exist yet — the exam has been generally available since June 2026. Any percentage you see is invented or extrapolated from AI-900, a materially different exam with a non-technical audience and no Python requirement. Plan against the published facts instead: 700/1000 scaled rather than 70% correct; a score report that gives one overall number plus a bar chart of relative strength across the two skill areas; and a retake policy of 24 hours before your second attempt, 14 days between all subsequent attempts, and a hard ceiling of five attempts in the 12 months following your first sitting. The $99 fee is payable in full on every attempt. Verified against Microsoft's exam retake policy and exam scoring pages, 2026-08-04.",
    source: { label: 'Microsoft Learn — Exam AI-901', url: 'https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-901/' }
  },

  // P0-3  Study plan
  studyPlan: {
    summary: "Do not plan AI-901 the way people planned AI-900. This is the mistake that will cost candidates the most this year, and it is entirely understandable: the certification name is identical, the price is identical, the fundamentals tier is identical, and every study guide written before mid-2026 describes the old exam. The content is not the same. AI-900 was five roughly equal domains of conceptual material — AI workloads, machine-learning principles, computer vision, NLP and generative AI — none of which required you to write or read a line of code. AI-901 has two domains, and the larger one, at 55-60%, is \"Implement AI solutions by using Microsoft Foundry\". More than half the exam is now about actually doing something in a specific product. Microsoft's audience profile changed to match: you now need Python coding syntax and programming techniques, familiarity with provisioning Azure resources, and awareness of REST APIs, SDKs and CLIs. The plan below therefore allocates roughly a third of the time to concepts and two thirds to Foundry, which mirrors the blueprint weighting, and it assumes you will actually deploy a model rather than read about deployment. If you cannot currently read a twenty-line Python script that calls an SDK and explain what it does, add a preliminary week for that before you start — it is a prerequisite for the second domain, not an optional extra. Four to six weeks is realistic for someone with basic programming exposure; a non-coder should budget eight to ten weeks and accept that the Python gap, not the AI content, is the long pole.",
    totalHours: '35-55 hours (add 15-20 more if you do not currently read Python)',
    weeks: [
      {
        label: 'Week 0 (only if you do not code)',
        focus: 'Python literacy floor',
        tasks: [
          'Get to the point where you can read a script that imports an SDK, instantiates a client, calls a method and handles the response',
          'You do not need to write Python from scratch — the exam asks you to understand code examples that call AI models and services',
          'Skip this week entirely if you already program in any language'
        ],
        hours: '10-15 hrs'
      },
      {
        label: 'Weeks 1-2',
        focus: 'Identify AI concepts and capabilities (40-45%)',
        tasks: [
          'Work the Microsoft Learn path "AI concepts for developers and technology professionals" — it is written specifically for AI-901 and did not exist for AI-900',
          'Cover AI workload types, model components and configurations, and when an AI solution is the right answer at all',
          'Learn the six Microsoft responsible-AI principles by name and be able to attach each to a concrete failure mode, not just recite the list',
          'Understand core cloud concepts as they apply here: services, resource deployment, and how an AI resource is provisioned'
        ],
        hours: '10-14 hrs'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Implement AI solutions by using Microsoft Foundry (55-60%) — the majority of the exam',
        tasks: [
          'Work the Microsoft Learn path "Get started with AI applications and agents on Azure"',
          'Actually open the Microsoft Foundry portal and deploy a model. Reading about the portal is not sufficient for a domain worth 55-60%',
          'Build one single-agent solution end to end, however trivial — the blueprint explicitly covers implementing single-agent solutions',
          'Cover the four solution families named in the objectives: generative-AI apps and agents; text and speech; computer vision and image generation; information extraction',
          'Read the Python quickstart samples for each service and be able to say what each call does'
        ],
        hours: '14-20 hrs'
      },
      {
        label: 'Week 5',
        focus: 'Consolidation, practice assessment, and change-log check',
        tasks: [
          'Take the practice assessment on AI Skills Navigator — note it is NOT in the usual Microsoft Learn practice-assessment location and requires you to be signed in',
          'Re-read the study guide and confirm it still says "Skills measured as of April 15, 2026"; if that date has moved, read the change log before sitting',
          'Review how client applications consume AI models and services — this framing question recurs across both domains',
          'Rehearse the responsible-AI principles against scenarios rather than definitions'
        ],
        hours: '6-10 hrs'
      }
    ],
    variants: [
      { label: 'You already hold AI-900', detail: "You do not need AI-901. Microsoft states that existing Azure AI Fundamentals holders need take no action and the certification remains valid — retirement of an exam does not revoke a certification already earned. Sit AI-901 only if you want your transcript to reflect the Foundry and agent skill set." },
      { label: 'Non-technical and considering this for AI literacy', detail: "Reconsider. AI-901 now assumes Python and Azure resource provisioning. The frictionless non-coder AI literacy exam was AI-900 and it retired on 30 June 2026. If literacy is genuinely your goal, the free Microsoft Learn AI concepts path gives you that without the exam fee." },
      { label: 'Heading to AI-103 or a role-based AI certification', detail: "Compress to three weeks. AI-901 is not a prerequisite for any role-based certification — Microsoft says so explicitly — so treat it purely as structured revision on your way to the associate tier." }
    ]
  },

  // P0-4  Prep strategies
  prepStrategies: {
    summary: "The defining feature of AI-901 preparation is that most of the material you will find online is about a different exam. AI-900 dominated search results for five years and its content is still indexed everywhere; AI-901 has existed since April 2026. Your first job is source hygiene — filtering out anything that describes five conceptual domains, promises no coding, or never mentions Microsoft Foundry. Your second job is accepting that a fundamentals exam now expects you to have deployed something.",
    items: [
      {
        title: 'Verify every resource post-dates April 2026',
        detail: "If a course, video or blog describes AI-900's five domains (AI workloads, machine-learning principles, computer vision, NLP, generative AI) or promises that no coding is required, it is describing the retired exam. AI-901 has two domains and requires Python literacy. Check the publication date before you invest a single hour, and prefer the two official Microsoft Learn paths, which were built for this exam."
      },
      {
        title: 'Weight your time to Foundry, not to concepts',
        detail: "Implementing AI solutions with Microsoft Foundry carries 55-60% of the marks — more than the conceptual domain and the largest single block in the fundamentals tier of any Microsoft AI exam. Candidates instinctively over-study the concepts because that is what fundamentals exams traditionally were. Spend roughly two hours in Foundry for every hour on concepts and you will be correctly calibrated."
      },
      {
        title: 'Deploy a model and build one agent, however small',
        detail: "The objectives include using Foundry to deploy models and implement single-agent solutions. You cannot reliably answer implementation questions from reading. Provision a Foundry resource, deploy one model, call it from a Python snippet, and stand up one trivial agent. Half a day of this is worth more than a week of video on this exam."
      },
      {
        title: 'Read Python, do not write it',
        detail: "Microsoft's phrasing is that you should understand \"Python code examples that call AI models and services\". That is a reading skill, not an authoring skill. Practise looking at a fifteen-line snippet and answering: which client is this, what is it calling, what comes back, and what would break if a parameter changed. You will not be asked to compose a program from a blank file."
      },
      {
        title: 'Treat responsible AI as scenario matching, not recitation',
        detail: "Microsoft's responsible-AI principles appear in the conceptual domain and are examined by scenario rather than definition. The question shape is a described failure — a hiring model that under-selects one group, a medical assistant that cannot explain a recommendation — and you must name the principle at stake. Build a mapping from failure mode to principle rather than memorising the list in order."
      },
      {
        title: 'Know that you cannot look anything up',
        detail: "The in-exam Microsoft Learn panel is available on associate and expert role-based exams only. Microsoft states it is not available on Fundamentals exams, and AI-901 is a Fundamentals exam despite its technical content. Every SDK name, service name and Foundry concept must come from memory. This catches people who reason \"it requires coding, so surely it is open book\"."
      },
      {
        title: 'Use the AI Skills Navigator practice assessment — not the usual location',
        detail: "Microsoft moved the practice assessment for this certification to AI Skills Navigator with what it calls an upgraded experience, and you must be signed in to launch it. If you look in the normal Microsoft Learn practice-assessment slot on the exam page you may conclude none exists. It does; it is just somewhere else."
      },
      {
        title: 'Expect preview features to be examinable',
        detail: "Microsoft's standard note says most questions cover generally available features but that preview features may appear if commonly used — and on a Foundry-centred exam in 2026, a meaningful share of the surface area is moving fast. Do not assume something in preview is out of scope, and do not panic if you meet a capability that was not in a course recorded three months ago."
      }
    ]
  },

  // P0-5  Study-resource comparison
  resourceComparison: {
    summary: "The resource market for AI-901 is thin, and that is genuinely useful information rather than a gap in our research. The exam is a few months old, so the mature third-party ecosystem that exists for AZ-104 or AZ-900 simply has not been built yet. What exists is largely Microsoft's own material, which for this exam is the correct place to be anyway — the two Learn paths were written for this blueprint. Be actively suspicious of any third-party AI-901 course claiming comprehensive coverage; check whether it mentions Microsoft Foundry at all.",
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn — "AI concepts for developers and technology professionals"', values: ['Free', 'Self-paced modules', 'The first domain (40-45%). Built for AI-901 specifically; did not exist for AI-900.'] },
      { label: 'Microsoft Learn — "Get started with AI applications and agents on Azure"', values: ['Free', 'Self-paced modules with hands-on exercises', 'The second and larger domain (55-60%). This is the one that matters most.'] },
      { label: 'Course AI-901: Introduction to AI in Azure (instructor-led)', values: ['Varies by Microsoft Training Services Partner', 'Live instructor-led classroom or virtual', 'Candidates whose employer funds training, or who need the Python-adjacent material explained live.'] },
      { label: 'Practice assessment on AI Skills Navigator', values: ['Free (sign-in required)', 'Online question bank', 'The only official practice questions. Note it is NOT in the usual Microsoft Learn location — you must go to AI Skills Navigator.'] },
      { label: 'Microsoft Foundry portal + Azure free account', values: ['Free tier, then consumption-based', 'Hands-on environment', 'Non-negotiable for the 55-60% domain. Deploy a model, build one agent, and watch your spend.'] },
      { label: 'Microsoft Learn exam sandbox', values: ['Free', 'Interactive demo of the exam UI', 'Seeing the item formats, timer and review screen before exam day. Ten minutes well spent.'] },
      { label: "John Savill's Technical Training (YouTube)", values: ['Free', 'Long-form video', "Savill's Azure AI and Foundry content is excellent and free, and he is the best free video source across the Azure family — but check upload dates, as much of his AI catalogue predates AI-901."] },
      { label: 'Microsoft Applied Skills', values: ['Free', 'Scenario-based lab assessments', 'A free, hands-on complement to a fundamentals certificate. Worth pairing with AI-901 precisely because AI-901 itself contains no labs.'] },
      { label: 'MeasureUp / Whizlabs / Udemy AI-901 titles', values: ['Not verified as available at time of writing', 'Practice tests / video', 'We could not confirm current, AI-901-specific products from these vendors on 2026-08-04. Anything sold under this exam code should be checked for whether it actually covers Microsoft Foundry before purchase — several listings appear to be relabelled AI-900 material.'] }
    ],
    footnote: 'Prices and availability checked 2026-08-04; USD list prices before regional adjustment or discount. We take no commission from any provider listed. The thinness of this table reflects the exam being new, not incomplete research — where we could not verify a product exists for AI-901, we say so rather than list it.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary: "Nearly every avoidable AI-901 failure in 2026 comes from one root cause: preparing for AI-900 by accident. The exam code changed, the audience changed, the domain structure changed and the coding requirement appeared, but the certification name did not — so the internet's five years of AI-900 material still looks current.",
    items: [
      {
        mistake: 'Studying AI-900 material because the certification name is unchanged',
        fix: "Both exams award Microsoft Certified: Azure AI Fundamentals, which is exactly why this is so easy to get wrong. AI-900 retired on 30 June 2026. AI-901 has two skill areas instead of five, is built around Microsoft Foundry, and requires Python literacy. If your study material has a computer-vision domain and an NLP domain as separate blocks, you are revising a retired exam."
      },
      {
        mistake: 'Assuming a fundamentals exam means no coding',
        fix: "It used to. It no longer does. Microsoft's audience profile for AI-901 states you need knowledge of Python coding syntax and programming techniques and familiarity with Azure resources. You will not write programs, but you will be shown Python that calls AI models and services and asked what it does. Build that reading skill before you book."
      },
      {
        mistake: 'Believing 700/1000 is 70% correct',
        fix: "Microsoft states explicitly that the passing score is scaled and \"may not equal 70% of the points\". Question sets vary in difficulty and the raw points required move with them. This misconception is particularly damaging on a new exam, where a higher-than-usual share of items may be unscored pilot content — so counting your way to a target is doubly futile."
      },
      {
        mistake: 'Expecting the certification to expire and planning a renewal',
        fix: "It will not expire. Microsoft states that Fundamentals certifications do not expire, and only associate, expert and specialty certifications require the free annual renewal assessment. If you have seen AI-901 described as valid for 12 months with annual renewal, that is incorrect — it conflates the fundamentals tier with the role-based tiers."
      },
      {
        mistake: 'Retaking AI-901 when you already hold AI-900',
        fix: "Microsoft is explicit that existing holders need take no action and that retirement of an exam does not revoke or invalidate a certification already earned. Your Azure AI Fundamentals credential stands. Sit AI-901 only if you specifically want the Foundry and agent skills on your transcript — do not pay $99 to re-earn something you have."
      },
      {
        mistake: 'Skipping hands-on Foundry work because fundamentals exams are conceptual',
        fix: "Implementing AI solutions with Microsoft Foundry is 55-60% of the marks. Provision a Foundry resource, deploy a model, call it from Python, and build one single-agent solution. A candidate who has done that afternoon of work and a candidate who has only read will not sit the same exam."
      },
      {
        mistake: 'Treating AI-901 as a prerequisite for AI-103 or another role-based AI certification',
        fix: "It is not a prerequisite for anything. Microsoft states that earning it can help prepare you for role-based certifications but is not required before taking them. If you already develop professionally, going straight to the associate tier is a defensible choice and saves you $99."
      },
      {
        mistake: 'Not checking the change log on a fast-moving exam',
        fix: "The English version of AI-901 was updated on 15 April 2026 and the certification page carries the same date. On an exam built around a product evolving as quickly as Foundry, revisions will come faster than on AZ-900. Open the study guide's change log the week you book, and remember localised versions follow the English one by roughly eight weeks."
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary: "AI-901 draws on Microsoft's standard item formats: multiple choice, multiple response, drag-and-drop matching, hot area, build list and the recurring three-statement true/false block. Case studies and interactive labs — the multi-question tabbed scenario blocks and live environments used on associate and expert role-based exams such as AZ-104 and AZ-305 — do not appear on Fundamentals exams, and AI-901 is a Fundamentals exam despite its technical content. What genuinely distinguishes AI-901 from every other fundamentals paper in the Microsoft catalogue is code. Because Microsoft's audience profile requires you to understand Python that calls AI models and services, you should expect items that present a short snippet and ask what it does, which client or method is correct, or what a given parameter changes. That is a format shift from AI-900, which never showed you code. It is still a recognition task rather than an authoring one — you will not be dropped into an editor — but a candidate who cannot follow an SDK call will lose marks that no amount of conceptual revision recovers. Two mechanical points. Multi-part questions award one point per correctly answered component, so a drag-and-drop with one wrong placement still banks the rest; never leave a row blank, and remember there is no penalty for guessing anywhere. And the exam is closed-book: the split-screen Microsoft Learn panel offered on associate and expert exams is explicitly unavailable on Fundamentals exams, so every SDK and service name must come from memory. The paper runs 45 minutes inside a 65-minute seat. You may flag items and sweep them on the review screen at the end, but if you start an unscheduled break through the exam UI you lose access to everything you have already seen, flagged items included.",
    types: [
      { name: 'Multiple choice (single answer)', share: 'The largest share', detail: 'A short scenario and four or five options. On the Foundry domain the distractors are usually neighbouring Azure AI services, so partial recognition of a name is not enough to separate them.' },
      { name: 'Multiple response (choose two/three)', share: 'Common', detail: 'The stem states how many to pick and the count is enforced. Used heavily for responsible-AI principles and for "which two capabilities does this service provide".' },
      { name: 'Code-comprehension items', share: 'Distinctive to AI-901', detail: 'A short Python snippet calling an SDK, followed by a question about what it returns, which client it uses, or what a parameter controls. New to the Azure AI Fundamentals exam with AI-901 — AI-900 contained none.' },
      { name: 'Drag and drop / matching', share: 'Regular', detail: 'Match capabilities to services, or workload descriptions to AI types. Scored per correct placement, so fill every slot even when unsure.' },
      { name: 'Hot area', share: 'Occasional', detail: 'A rendered portal screenshot or a statement with embedded dropdowns. Frequently used for Foundry portal navigation and configuration choices.' },
      { name: 'Yes/No statement blocks', share: 'Regular', detail: 'Three independent statements about one scenario. A dependable source of partial credit — assess each row on its own rather than looking for a pattern.' },
      { name: 'Build list / ordering', share: 'Occasional', detail: 'Sequence the steps to deploy a model or stand up an agent in Foundry. More prominent here than on AZ-900 because AI-901 has genuinely procedural objectives.' },
      { name: 'Case studies and labs', share: 'Not used', detail: 'Both belong to associate and expert role-based exams. AI-901 has neither, which is why the seat time is 65 minutes rather than 120 or 140.' }
    ],
    samples: [
      {
        prompt: 'A recruitment team deploys a generative-AI assistant that summarises candidate applications. During review the team finds that the assistant consistently produces less favourable summaries for applicants who attended non-traditional institutions, mirroring patterns in the historical hiring data used during evaluation. Which Microsoft responsible-AI principle is most directly at stake?',
        options: ['A. Reliability and safety', 'B. Fairness', 'C. Transparency', 'D. Privacy and security'],
        answer: 'B',
        explanation: "Fairness concerns AI systems allocating outcomes differently across groups of people, and a model that systematically disadvantages one cohort because historical data encoded that disadvantage is the textbook case. Reliability and safety (A) is the most common wrong answer here and it is a reasonable instinct — the system is behaving badly — but that principle addresses whether a system performs consistently and safely under expected and unexpected conditions, not whether its outputs are equitably distributed. Transparency (C) would be the answer if the complaint were that nobody could explain how a summary was produced; here the mechanism is understood and the problem is the outcome. Privacy and security (D) is unrelated to the described harm. The exam tests responsible AI by scenario rather than by definition, so build a mapping from failure mode to principle rather than memorising the list. This sits in the \"Identify AI concepts and capabilities\" domain (40-45%)."
      },
      {
        prompt: 'A developer is starting a project in Microsoft Foundry and needs a model endpoint that their Python application can call for text generation. Which sequence of actions is required before the application can successfully issue its first request?',
        options: ['A. Write the client code, then provision an Azure resource, then deploy a model', 'B. Provision a Foundry resource, deploy a model to create an endpoint, then configure the client with the endpoint and credentials', 'C. Deploy a model, then provision a Foundry resource, then configure the client', 'D. Configure the client with credentials, which provisions the resource and deploys a model automatically'],
        answer: 'B',
        explanation: "The dependency order is fixed and the exam tests it because candidates who have only read about Foundry get it wrong. You must have a resource before you can deploy into it, and you must have a deployment before an endpoint exists for a client to call; only then can the application be pointed at that endpoint with valid credentials. Option C inverts the first two steps, which is impossible — there is nowhere to deploy to. Option A puts client code first, which is a plausible development sequence but does not answer the question asked, which is what must exist before the first request succeeds. Option D describes automatic provisioning that Foundry does not perform. This is precisely the kind of item that separates candidates who spent an afternoon in the portal from those who did not, and it belongs to the largest domain, \"Implement AI solutions by using Microsoft Foundry\" (55-60%)."
      },
      {
        prompt: 'A logistics company wants to process scanned delivery notes and pull out the supplier name, date and total value into structured fields for its finance system. Which category of AI capability best describes this requirement?',
        options: ['A. Information extraction', 'B. Image generation', 'C. Speech synthesis', 'D. Single-agent orchestration'],
        answer: 'A',
        explanation: "Information extraction is the named solution family on the AI-901 blueprint for pulling structured values out of unstructured or semi-structured documents, which is exactly what turning scanned delivery notes into supplier, date and total fields requires. Image generation (B) is the tempting distractor for candidates who see \"scanned\" and reach for anything vision-shaped, but generation produces new images rather than reading existing ones. Speech synthesis (C) converts text to audio and has no bearing on document processing. Single-agent orchestration (D) describes coordinating an AI agent to perform tasks; an agent might invoke extraction as one of its tools, but it does not describe the capability itself, and the question asks which category the requirement falls into. Knowing the four solution families named in the objectives — generative-AI apps and agents, text and speech, computer vision and image generation, and information extraction — and being able to sort a described business need into one is high-yield for the Foundry domain."
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary: "AI-901 is delivered through Pearson VUE, either in a physical test centre or online via OnVUE, and students and educators may also sit it through Certiport. The exam runs 45 minutes inside a 65-minute seat, which puts it in the same short bracket as AZ-900 and DP-900 — the check-in can genuinely take longer than the paper. If you sit online, begin the OnVUE check-in 30 minutes before your slot. You will photograph your face, both sides of your ID and your workspace from four angles using a phone, and by registering you consent to Pearson VUE using facial-comparison technology to match you to your ID; if you are not comfortable with that, book a test centre instead. The name on your ID must match your Microsoft certification profile exactly, and Microsoft is clear that legal name-change paperwork and ID renewal forms are not accepted as substitutes for online exams. Your workspace must be genuinely clear. Books, notepads, sticky notes, printed material and every writing implement — pens, pencils, markers, whiteboard markers — must be out of arm's reach, not simply set aside. Additional monitors must be unplugged and turned away, and other computers in the room shut down. There is no scratch paper on OnVUE and no physical whiteboard: candidates sometimes arrive expecting the erasable-whiteboard-in-a-sleeve allowance that some other certification vendors grant, and Microsoft's online-exam guidance permits neither. Roll up long sleeves, turn out pockets, tie back long hair and remove watches, headphones and earbuds. A drink is permitted in a clear, sealed, leak-proof container. Your phone stays in the room but out of reach and audible so the proctor can call you. On a 45-minute exam there is no sensible reason to take a break, and doing so locks you out of every question you have already seen — including flagged ones.",
    bring: [
      'One current, valid government-issued photo ID whose name matches your Microsoft certification profile character for character',
      'A second ID if your primary one carries no signature — check Pearson VUE ID requirements for your country in advance',
      'A phone for the OnVUE check-in photographs (headshot, ID, and four workspace angles), which then goes out of reach',
      'A mobile number in your certification profile that includes the correct country code',
      'A drink in a clear, sealed, leak-proof container if you want one',
      'For Certiport delivery as a student: whatever ID your test centre specifies, which may differ from the standard Pearson VUE list'
    ],
    leave: [
      'All notes, books, printed material and sticky notes — for OnVUE these must be out of arm\u2019s reach, not merely closed or face down',
      'Every writing implement, including whiteboard markers',
      'Scratch paper and physical whiteboards — Microsoft permits neither for online-proctored exams',
      'Additional monitors (unplug and turn away) and any other running computers in the room',
      'Watches, smartwatches, fitness trackers, hats and head coverings other than religious dress, bags, coats and wallets',
      'All headphones and earbuds, wired or Bluetooth',
      'Any AI assistant, second device or open browser tab — Microsoft explicitly prohibits AI tool assistance, and no other person may be present or view your screen'
    ],
    timeline: [
      { time: '48 hours before', detail: 'Run the OnVUE system test on the exact machine and network you will use on the day. Use a personal machine; corporate endpoint-protection software routinely blocks the OnVUE client and there is no fixing it fifteen minutes before your slot.' },
      { time: '30 minutes before', detail: 'Launch check-in and submit your photographs. A greeter reviews them for security risks and raises any problem before the clock starts.' },
      { time: '15 minutes before (test centre)', detail: 'Arrive, present ID, lock everything in a locker, complete the digital signature and photograph.' },
      { time: 'Minute 0', detail: 'The Candidate Agreement and non-disclosure terms appear. These sit inside your 65-minute seat allocation but outside the 45-minute exam clock.' },
      { time: 'Minutes 0-45', detail: '45 minutes for roughly 40-60 items. Budget extra thinking time for the code-comprehension items, which take longer to read than a conceptual stem — this is the one place AI-901 is tighter on time than other fundamentals exams.' },
      { time: 'Immediately after', detail: 'An optional comment survey, then your preliminary pass/fail on screen within minutes. AI-901 contains no labs, so there is no 30-minute scoring delay.' }
    ],
    rules: [
      'The passing score is 700 on a 1-1,000 scale and is scaled — Microsoft states it may not equal 70% of the points available',
      'No penalty for guessing: answer every item, including those you suspect are unscored pilot content (likely a higher share than usual on a new exam)',
      'Multi-part questions award one point per correct component, so complete every row of a drag-and-drop or statement block',
      'The in-exam Microsoft Learn panel is NOT available on Fundamentals exams — AI-901 is closed-book despite requiring code comprehension',
      'You may flag items and return via the review screen, but starting an unscheduled break locks you out of every question already seen',
      'Preview features may be examined where they are commonly used, which on a Foundry-based exam is a live consideration',
      'Recording, transcribing or sharing exam content voids your result and can bar you from the certification programme',
      'OnVUE sessions are audio and video recorded, and Pearson VUE may use automated analysis to flag anomalies for human review'
    ],
    afterwards: "Your preliminary pass/fail appears on screen within minutes of submitting; there are no labs on AI-901, so nothing delays scoring. The full report — one overall numeric score, pass/fail status, and a bar chart showing relative performance across the two skill areas — reaches your Microsoft Learn profile under Past exams within 24 hours, and is also available on the Pearson VUE dashboard. Because AI-901 has only two skill areas rather than the five AI-900 had, the bar chart is blunter than candidates expect: a weak bar tells you \"concepts\" or \"Foundry\" and little more. Microsoft is clear that the bars cannot be summed or read as percentages, and that it will not disclose which individual questions you answered incorrectly. If you failed, the retake rules are 24 hours before a second attempt, 14 days between every attempt thereafter, and a maximum of five attempts in the 12 months from your first sitting, with the $99 fee payable each time. If you passed, Microsoft Certified: Azure AI Fundamentals appears in your Learn profile and your Credly badge follows. Nothing further is required of you: Fundamentals certifications do not expire, so there is no annual renewal assessment and no window to miss — a point worth stressing, because AI-901 is frequently and incorrectly described online as valid for twelve months."
  }
};

export default data;
