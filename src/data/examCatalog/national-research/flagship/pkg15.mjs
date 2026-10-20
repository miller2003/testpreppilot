// Flagship rewrite - pkg15, Microsoft (6 pages: AZ-305, AZ-400, AZ-500, AZ-700, AZ-800, AZ-801).
// Every number was read on 2026-10-20 from Microsoft Learn primary pages:
//   Study guides az-305 (skills as of Apr 17 2026), az-400 (Jul 27 2026), az-500 (Jan 22 2026, retirement warning),
//   az-700 (Jul 27 2026), az-800 (Jan 21 2026, retirement warning), az-801 (Oct 6 2025, retirement warning), az-802.
//   Exam pages az-305 and az-400 (languages, passing score 700, retirement date "none").
//   Certification pages azure-solutions-architect, devops-engineer, azure-network-engineer-associate (100 minutes),
//   azure-security-engineer (retired Aug 31 2026), windows-server-hybrid-administrator (AZ-802, 120 minutes).
// Shared mechanics (retake, scoring, renewal, USD 165 typical associate/expert price, 100/120 minute exam time)
// come from the Microsoft exam FAQ, retake policy and exam duration pages already cited by pkg14.
// Not published by Microsoft and therefore omitted: exact question counts, pass rates, score distributions.
// Programs are owned by pkg14, so this package exports programs = [].

const MS = 'Microsoft';

export const programs = [];

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
    slug: 'microsoft-az-305',
    tagline: 'The Azure architect design exam: identity, data, continuity and infrastructure decisions.',
    description: 'The Microsoft AZ-305 exam for Azure Solutions Architect Expert passes at 700 of 1,000, and 30-35% of its April 2026 outline is infrastructure design. It is a design exam, not a build exam: candidates recommend solutions across four areas, Design identity, governance, and monitoring solutions (25-30%), Design data storage solutions (20-25%), Design business continuity solutions (15-20%) and Design infrastructure solutions (30-35%). It targets architects who translate business requirements into designs aligned with the Azure Well-Architected Framework and Cloud Adoption Framework. The expert credential requires the Azure Administrator Associate certification first, and Microsoft lists no retirement date for AZ-305.',
    summary: 'AZ-305 is the single exam for Microsoft Certified: Azure Solutions Architect Expert. It passes at 700 of 1,000 and its outline was updated on April 17, 2026, with infrastructure design the heaviest area at 30-35%. You must already hold Azure Administrator Associate, and the expert credential renews free every 12 months.',
    advantages: [
      'The April 17, 2026 outline publishes four percent ranges, so study time can follow the weights, with infrastructure design at 30-35%.',
      'AZ-305 is a one-exam path: Microsoft lists AZ-305 as the only required exam for Azure Solutions Architect Expert, and lists no retirement date for it.',
      'The skills list covers messaging, event-driven design, caching, API integration, migration with the Cloud Adoption Framework and network design in one exam.',
      'Renewal is free: pass an open-book online assessment on Microsoft Learn during the six months before expiry.',
      'It is the standard architect step after AZ-104 and pairs with AZ-400, AZ-700 and the security exam path.'
    ],
    roadmap: [
      'Hold or earn Azure Administrator Associate (AZ-104)',
      'Review the four design areas and their percent ranges',
      'Work through the Azure Well-Architected Framework and Azure Architecture Center scenarios',
      'Take the free Microsoft Learn practice assessment',
      'Schedule AZ-305 and renew each year'
    ],
    prerequisites: 'To earn Microsoft Certified: Azure Solutions Architect Expert you must first earn Microsoft Certified: Azure Administrator Associate, according to the certification page. Microsoft describes the candidate as having advanced experience in IT operations: networking, virtualization, identity, security, business continuity, disaster recovery, data platforms and governance, plus Azure administration, Azure development and DevOps experience.',
    eligibility: 'Open to anyone who can register with Pearson VUE. The Azure Administrator Associate prerequisite applies to the certification, so check that your AZ-104 credential has not lapsed (associate certifications expire after 12 months) before you book. Ten languages are listed, and a 30-minute extension can be requested when the exam is not offered in your language.',
    examMeta: {
      questions: 'Not published by Microsoft; Microsoft states most exams have 40-60 questions, and case studies may appear',
      time: '100 minutes of exam time for role-based exams per the exam duration page (120-minute seat time), or 120 minutes (140 seat) when labs may appear; the introduction screen states which applies',
      pass: '700 on a 1 to 1,000 scaled score',
      fee: 'US$165 typical for associate and expert exams in the United States, priced by country; each retake is the full fee; renewal is free',
      format: 'Multiple choice, case studies and other interactive item types; design recommendations rather than portal tasks',
      admin: 'Pearson VUE test center or online proctoring (OnVUE)'
    },
    topics: [
      { name: 'Design identity, governance, and monitoring solutions', weight: '', note: 'Official range 25-30%. Logging and monitoring, authentication and authorization, secrets, certificates and keys, management groups, subscriptions, tagging, compliance and identity governance.' },
      { name: 'Design data storage solutions', weight: '', note: 'Official range 20-25%. Relational, semi-structured and unstructured data stores, service and compute tiers, scalability, data protection, data integration and analysis.' },
      { name: 'Design business continuity solutions', weight: '', note: 'Official range 15-20%. Backup and disaster recovery for compute, databases and unstructured data, recovery objectives, and high availability for compute and data.' },
      { name: 'Design infrastructure solutions', weight: '', note: 'Official range 30-35%. Compute (VM, container, serverless, batch), application architecture (messaging, events, API integration, caching), migrations and network solutions.' }
    ],
    essentials: [
      ['Outline version', 'Skills measured as of April 17, 2026; the audience profile received a minor change and the four area names and ranges were kept'],
      ['Exam time', '100 minutes of exam time and 120 minutes of seat time for role-based exams; labs would extend this to 120 and 140'],
      ['Passing score', '700 on a scaled 1 to 1,000 range; no penalty for guessing'],
      ['Prerequisite', 'Azure Administrator Associate must be earned for the Azure Solutions Architect Expert certification'],
      ['Languages', 'Ten listed: English, Japanese, Chinese (Simplified), Korean, German, French, Spanish, Portuguese (Brazil), Chinese (Traditional) and Italian'],
      ['Validity', '12 months; renew free with an online assessment in the six months before expiry'],
      ['Retake rule', '24 hours after the first failure, then 14 days between later attempts, up to five attempts in 12 months'],
      ['Retirement', 'Microsoft lists no retirement date for AZ-305']
    ],
    timeline: [
      { stage: 'Confirm AZ-104 status and read the April 2026 outline', duration: '1 week' },
      { stage: 'Study design areas and Azure Architecture Center scenarios', duration: '6-10 weeks for candidates with Azure administration experience' },
      { stage: 'Practice assessment and booking', duration: '1 week; schedule up to 90 days ahead' },
      { stage: 'Exam and result', duration: '120 minutes of seat time; result in minutes' },
      { stage: 'Renewal', duration: 'Every 12 months, free, six-month window' }
    ],
    costBreakdown: {
      items: [
        { item: 'AZ-305 exam fee', fee: 'US$165 typical for expert exams in the United States, priced by country' },
        { item: 'Prerequisite AZ-104 exam if not yet held', fee: 'US$165 typical' },
        { item: 'Microsoft Learn paths, Architecture Center, practice assessment, sandbox', fee: 'Free' },
        { item: 'Annual renewal assessment', fee: 'Free' }
      ],
      total: 'US$165 for AZ-305, or about US$330 if AZ-104 is also needed',
      footnote: 'Price depends on the country where you are proctored and excludes taxes. A retake costs the full fee again.'
    },
    difficulty: 'Challenging',
    audience: 'Azure administrators and engineers moving into solution architecture who must justify design trade-offs.',
    timeShort: '6-10 weeks after AZ-104',
    cost: 'US$165 typical',
    faqs: [
      { q: 'How many questions are on the AZ-305 exam?', a: 'Microsoft does not publish an AZ-305 question count. It says most certification exams contain 40 to 60 questions and that the number varies by form, with case studies likely. Role-based exams list 100 minutes of exam time, so pacing matters more than the exact count. The introduction screen states how many case studies appear.' },
      { q: 'What is the passing score for AZ-305?', a: 'The AZ-305 passing score is 700 on a scale of 1 to 1,000. It is scaled, so it does not equal 70 percent of the questions, and harder forms need fewer correct answers. There is no penalty for guessing. Your report shows a bar chart by area that cannot be summed into a percentage.' },
      { q: 'Is the AZ-305 exam hard?', a: 'AZ-305 is rated Challenging because it asks you to choose between valid Azure services under cost, resilience and security constraints, and several answers can look correct. Candidates who only memorise features struggle. Microsoft publishes no pass rate, so there is no official difficulty figure, only the 700 scaled threshold.' },
      { q: 'Do I need AZ-104 before AZ-305?', a: 'You can sit AZ-305 without AZ-104, but the Azure Solutions Architect Expert certification requires you to hold Azure Administrator Associate. Microsoft lists that single prerequisite on the certification page. Check the associate has not expired, because associate certifications lapse after 12 months unless renewed.' },
      { q: 'How long is the Azure Solutions Architect Expert valid?', a: 'Azure Solutions Architect Expert is valid for 12 months. You renew for free by passing an unproctored, open-book online assessment on Microsoft Learn during the six months before expiry, which extends the certification one year from the expiration date. You may attempt the renewal assessment as many times as needed.' },
      { q: 'How much does the AZ-305 exam cost?', a: 'Microsoft says associate and expert exams typically cost US$165 in the United States, with the final price set by the country where you are proctored and taxes extra. Every attempt costs the full fee, and failed or missed exams are not refunded. Renewal, practice assessments and the sandbox are free.' },
      { q: 'What changed in AZ-305 in April 2026?', a: 'The study guide dated April 17, 2026 lists a minor change to the audience profile. The four skill areas keep their names and ranges: identity, governance and monitoring 25-30%, data storage 20-25%, business continuity 15-20% and infrastructure 30-35%. Preparation built on the earlier outline still maps to the current one.' }
    ],
    summaryPoints: [
      'AZ-305 passes at 700 of 1,000 and Microsoft lists no retirement date.',
      'Four areas: infrastructure 30-35%, identity, governance and monitoring 25-30%, data storage 20-25%, business continuity 15-20%.',
      'Azure Administrator Associate must be earned for the expert credential.',
      'US$165 typical fee in the United States; each retake costs the full fee.',
      'The certification renews free every 12 months through an online assessment.'
    ],
    relatedSlugs: ['microsoft-az-104', 'microsoft-az-400', 'microsoft-az-700', 'microsoft-sc-500'],
    sourceUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-305',
    confidence: 'medium'
  }),

  rec({
    slug: 'microsoft-az-400',
    tagline: 'The DevOps expert exam: half of the blueprint is build and release pipelines.',
    description: 'The Microsoft AZ-400 exam for DevOps Engineer Expert puts 50-55% of its July 27, 2026 outline on build and release pipelines and passes at 700 of 1,000. The five areas are Design and implement processes and communications (10-15%), Design and implement a source control strategy (10-15%), Design and implement build and release pipelines (50-55%), Develop a security and compliance plan (10-15%) and Implement an instrumentation strategy (5-10%). It targets developers and infrastructure administrators who run GitHub Actions and Azure DevOps delivery, and it needs Azure Administrator Associate or Azure Developer Associate first.',
    summary: 'AZ-400 is the exam for Microsoft Certified: DevOps Engineer Expert. It passes at 700 of 1,000, its blueprint was updated July 27, 2026, and build and release pipelines alone carry 50-55%. The certification page requires Azure Administrator Associate or Azure Developer Associate first, and the expert credential renews free every 12 months.',
    advantages: [
      'Pipelines carry 50-55% of the July 27, 2026 outline, so one skill area decides the result and study time can be concentrated there.',
      'The published skills list covers both GitHub (Actions, Advanced Security, Dependabot) and Azure DevOps (Pipelines, Boards, Artifacts), reflecting how teams really work.',
      'It is a one-exam expert credential; Microsoft lists no retirement date for AZ-400.',
      'Workload identity federation, Azure Key Vault, deployment strategies and infrastructure as code with Bicep are all named topics, so labs map directly to the exam.',
      'Renewal is free and unproctored: pass an online assessment in the six months before expiry.'
    ],
    roadmap: [
      'Confirm you hold Azure Administrator Associate or Azure Developer Associate',
      'Build YAML pipelines in both Azure Pipelines and GitHub Actions',
      'Practice deployment strategies, Bicep and secretless authentication',
      'Take the free Microsoft Learn practice assessment',
      'Schedule AZ-400 and renew each year'
    ],
    prerequisites: 'The DevOps Engineer Expert certification page says you must earn at least one of Microsoft Certified: Azure Administrator Associate or Microsoft Certified: Azure Developer Associate. Because AZ-204 retired on July 31, 2026, candidates who do not already hold the Developer credential go through AZ-104. Microsoft expects experience both administering and developing in Azure, plus GitHub and Azure DevOps delivery.',
    eligibility: 'Open to anyone who can register with Pearson VUE; the prerequisite applies to the certification. Microsoft frames the candidate as a developer or infrastructure administrator working with developers, site reliability engineers, Azure administrators and security engineers, with strong skills in at least one of administering or developing in Azure.',
    examMeta: {
      questions: 'Not published by Microsoft; Microsoft states most exams have 40-60 questions, and case studies or labs may appear',
      time: '100 minutes of exam time for role-based exams per the exam duration page (120-minute seat time), or 120 minutes (140 seat) when labs may appear',
      pass: '700 on a 1 to 1,000 scaled score',
      fee: 'US$165 typical for associate and expert exams in the United States, priced by country; each retake is the full fee; renewal is free',
      format: 'Multiple choice, case studies, other interactive items and possible hands-on labs',
      admin: 'Pearson VUE test center or online proctoring (OnVUE)'
    },
    topics: [
      { name: 'Design and implement processes and communications', weight: '', note: 'Official range 10-15%. Traceability and flow of work, GitHub Flow, DevOps metrics and dashboards, wikis, release notes and webhooks.' },
      { name: 'Design and implement a source control strategy', weight: '', note: 'Official range 10-15%. Trunk-based, feature and release branching, pull request policies, Git LFS, Scalar, repository permissions and tags.' },
      { name: 'Design and implement build and release pipelines', weight: '', note: 'Official range 50-55%. Package management, testing strategy, YAML pipelines, runners and agents, deployment strategies, infrastructure as code and pipeline maintenance.' },
      { name: 'Develop a security and compliance plan', weight: '', note: 'Official range 10-15%. Managed identities and service principals, Key Vault, secretless authentication, GitHub Advanced Security, Dependabot and Defender for Cloud DevOps Security.' },
      { name: 'Implement an instrumentation strategy', weight: '', note: 'Official range 5-10%. Azure Monitor, Application Insights, VM and Container Insights, alerts for pipelines and basic KQL queries.' }
    ],
    essentials: [
      ['Outline version', 'Skills measured as of July 27, 2026, with minor changes to traceability, security scanning and monitoring subareas'],
      ['Exam time', '100 minutes of exam time and 120 minutes of seat time for role-based exams; labs would extend this to 120 and 140'],
      ['Passing score', '700 on a scaled 1 to 1,000 range; no penalty for guessing'],
      ['Prerequisite', 'Azure Administrator Associate or Azure Developer Associate, per the certification page'],
      ['Languages', 'Ten listed, including English, Japanese, Chinese (Simplified and Traditional), Korean, German, French, Spanish, Portuguese (Brazil) and Italian'],
      ['Validity', '12 months; renew free with an online assessment in the six months before expiry'],
      ['Retake rule', '24 hours after the first failure, then 14 days between later attempts, up to five attempts in 12 months'],
      ['Retirement', 'Microsoft lists no retirement date for AZ-400']
    ],
    timeline: [
      { stage: 'Confirm prerequisite credential and read the July 2026 outline', duration: '1 week' },
      { stage: 'Pipeline labs in Azure Pipelines and GitHub Actions', duration: '8-10 weeks for candidates with some CI/CD experience' },
      { stage: 'Practice assessment and booking', duration: '1 week; schedule up to 90 days ahead' },
      { stage: 'Exam and result', duration: '120 minutes of seat time; labs would add time and about 30 minutes to score' },
      { stage: 'Renewal', duration: 'Every 12 months, free, six-month window' }
    ],
    costBreakdown: {
      items: [
        { item: 'AZ-400 exam fee', fee: 'US$165 typical for expert exams in the United States, priced by country' },
        { item: 'Prerequisite AZ-104 exam if no qualifying associate credential', fee: 'US$165 typical' },
        { item: 'Microsoft Learn paths, practice assessment, sandbox, GitHub free tier, Azure DevOps free tier', fee: 'Free for lab scale use' },
        { item: 'Annual renewal assessment', fee: 'Free' }
      ],
      total: 'US$165 for AZ-400, or about US$330 if AZ-104 is also needed',
      footnote: 'Price depends on the country where you are proctored and excludes taxes. A retake costs the full fee again.'
    },
    difficulty: 'Challenging',
    audience: 'Developers and infrastructure administrators who own CI/CD, release strategy and delivery security on Azure and GitHub.',
    timeShort: '8-10 weeks',
    cost: 'US$165 typical',
    faqs: [
      { q: 'How many questions are on the AZ-400 exam?', a: 'Microsoft does not publish an AZ-400 question count. It says most exams contain 40 to 60 questions, that the number varies and that labs or case studies may appear. Role-based exams list 100 minutes of exam time, or up to 120 minutes if labs are included, so check the introduction screen for the lab count.' },
      { q: 'What is the passing score for AZ-400?', a: 'The AZ-400 passing score is 700 on a scale of 1 to 1,000. It is a scaled score, not 70 percent of the questions, and there is no penalty for guessing. Because pipelines carry 50-55% of the outline, a weak result in that single area is difficult to offset with the other four.' },
      { q: 'Is the AZ-400 exam hard?', a: 'AZ-400 is rated Challenging because it expects real pipeline experience: YAML syntax, deployment strategies, agents, permissions and secret handling across both GitHub and Azure DevOps. Candidates who have never built a multi-stage pipeline find it harder. Microsoft publishes no pass rate, so there is no official difficulty figure.' },
      { q: 'What are the prerequisites for the DevOps Engineer Expert certification?', a: 'Microsoft lists two certifications as the option set: Azure Administrator Associate or Azure Developer Associate, and you need at least one. The Developer exam AZ-204 retired on July 31, 2026, so most new candidates go through AZ-104. You can sit AZ-400 itself without the prerequisite, but the expert credential requires it.' },
      { q: 'How long is DevOps Engineer Expert valid?', a: 'DevOps Engineer Expert is valid for 12 months. You renew for free by passing an unproctored, open-book online assessment on Microsoft Learn in the six months before it expires, which extends the certification one year from the expiration date. There is no limit on how many times you attempt the renewal assessment.' },
      { q: 'What changed in AZ-400 in July 2026?', a: 'The blueprint dated July 27, 2026 made minor changes to traceability and flow of work, to security and compliance scanning, and to the two instrumentation subareas. The five area names and percent ranges did not change. Build and release pipelines remain 50-55% of the exam, the largest by a wide margin.' },
      { q: 'How much does the AZ-400 exam cost?', a: 'Microsoft says associate and expert exams typically cost US$165 in the United States, priced by country and before taxes. Each attempt costs the full fee, and failed or missed exams are not refunded. Renewal is free, and the Microsoft Learn practice assessment and exam sandbox cost nothing.' }
    ],
    summaryPoints: [
      'AZ-400 passes at 700 of 1,000; build and release pipelines carry 50-55%.',
      'Other areas: processes 10-15%, source control 10-15%, security and compliance 10-15%, instrumentation 5-10%.',
      'Azure Administrator Associate or Azure Developer Associate is required for the expert credential.',
      'US$165 typical fee in the United States; each retake costs the full fee.',
      'The outline was updated July 27, 2026 and the certification renews free every 12 months.'
    ],
    relatedSlugs: ['microsoft-az-104', 'microsoft-az-204', 'microsoft-az-305', 'microsoft-sc-500'],
    sourceUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-400',
    confidence: 'medium'
  }),

  rec({
    slug: 'microsoft-az-500',
    tagline: 'The retired Azure Security Engineer Associate exam: Defender for Cloud and Sentinel carried 30-35%.',
    description: 'Exam AZ-500 for Azure Security Engineer Associate retired on August 31, 2026 at 11:59 PM Central; the certification can no longer be earned or renewed. Its final outline, dated January 22, 2026, had four areas led by Secure Azure using Microsoft Defender for Cloud and Microsoft Sentinel (30-35%), with Secure networking and Secure compute, storage, and databases at 20-25% each and Secure identity and access at 15-20%. Existing holders keep the credential on their transcript until it expires. New security engineers are pointed to SC-500, Cloud and AI Security Engineer Associate.',
    summary: 'AZ-500 was retired on August 31, 2026 and cannot be scheduled. The Azure Security Engineer Associate certification and its renewal assessment retired with it, so the credential cannot be extended. The final blueprint passed at 700 of 1,000 and weighted Defender for Cloud and Sentinel at 30-35%. SC-500 is the current security engineer path.',
    advantages: [
      'The final January 22, 2026 outline is still public and doubles as a checklist of Azure security services: Entra PIM, Private Link, Azure Firewall, WAF, Key Vault, Defender for Cloud and Sentinel.',
      'Holders keep Azure Security Engineer Associate on their Microsoft transcript until the 12-month expiry arrives.',
      'The retirement notice means no voucher, study guide or practice test for AZ-500 should be bought now.',
      'The identity, network and data security material carries into SC-500, so AZ-500 study time is not wasted.'
    ],
    roadmap: [
      'Confirm AZ-500 is retired and cannot be scheduled',
      'Note the expiry date of any AZ-500 credential you hold, because it cannot be renewed',
      'Use the final AZ-500 outline as a service checklist',
      'Plan SC-500, Cloud and AI Security Engineer Associate, as the current path'
    ],
    prerequisites: 'None are enforceable now because the exam cannot be booked. Microsoft described the candidate as having practical experience administering Azure and hybrid environments and strong familiarity with Microsoft Entra ID, plus compute, network and storage in Azure.',
    eligibility: 'No one can newly earn Azure Security Engineer Associate. Microsoft states that the certification, the exam and the renewal assessments retired on August 31, 2026 and that you can no longer earn or renew it. An AZ-500 credential earned before the cutoff stays visible on the transcript until its own expiry date.',
    examMeta: {
      questions: 'Not published by Microsoft; Microsoft states most exams have 40-60 questions (retired exam)',
      time: 'Not shown on the retired AZ-500 page; Microsoft lists 100 minutes of exam time for role-based exams without labs and 120 minutes with labs',
      pass: '700 on a 1 to 1,000 scaled score',
      fee: 'US$165 typical for associate exams (exam retired; cannot be purchased)',
      format: 'Multiple choice, case studies and other interactive items, delivered by Pearson VUE (retired)',
      admin: 'Microsoft Credentials, delivered by Pearson VUE (retired August 31, 2026)'
    },
    topics: [
      { name: 'Secure identity and access', weight: '', note: 'Official range 15-20%. Azure role assignments, custom roles, Entra Privileged Identity Management, MFA, Conditional Access, app registrations, service principals and managed identities.' },
      { name: 'Secure networking', weight: '', note: 'Official range 20-25%. NSGs and ASGs, Virtual Network Manager, UDRs, Virtual WAN, VPN, Private Link and endpoints, Azure Firewall, Application Gateway, Front Door and WAF.' },
      { name: 'Secure compute, storage, and databases', weight: '', note: 'Official range 20-25%. Bastion and JIT access, AKS security, Azure Disk Encryption, storage access control and immutability, SQL auditing, masking, TDE and Always Encrypted.' },
      { name: 'Secure Azure using Microsoft Defender for Cloud and Microsoft Sentinel', weight: '', note: 'Official range 30-35%. Azure Policy, Key Vault, Secure Score, multicloud connectors, Defender plans, DevOps security, data collection rules, Sentinel connectors, analytics rules and automation.' }
    ],
    essentials: [
      ['Status', 'Exam AZ-500 retired August 31, 2026 at 11:59 PM Central Standard Time; the certification and renewal assessments retired with it'],
      ['Final blueprint', 'Skills measured as of January 22, 2026, four areas with percent ranges'],
      ['Passing score', '700 on a scaled 1 to 1,000 range'],
      ['Languages', 'Ten listed, including English, Japanese, Chinese (Simplified and Traditional), Korean, German, French, Spanish, Portuguese (Brazil) and Italian'],
      ['Successor', 'SC-500, Microsoft Certified: Cloud and AI Security Engineer Associate'],
      ['Existing holders', 'The credential stays on the transcript until it expires and cannot be renewed']
    ],
    timeline: [
      { stage: 'Final AZ-500 blueprint update', duration: 'January 22, 2026' },
      { stage: 'AZ-500, certification and renewal assessments retired', duration: 'August 31, 2026 at 11:59 PM Central' },
      { stage: 'Expiry of any held credential', duration: '12 months after it was earned, with no renewal path' },
      { stage: 'Current path, SC-500', duration: 'Check the exam page for current duration and fee' }
    ],
    costBreakdown: {
      items: [
        { item: 'AZ-500 exam fee while available', fee: 'US$165 typical for associate exams' },
        { item: 'AZ-500 renewal assessment while available', fee: 'Free' },
        { item: 'AZ-500 today', fee: 'Cannot be purchased; retired August 31, 2026' }
      ],
      total: 'No cost applies now; plan for the SC-500 exam fee shown at checkout',
      footnote: 'Associate exams typically cost US$165 in the United States, priced by country. Confirm the SC-500 fee on its Microsoft Learn page.'
    },
    difficulty: 'Challenging',
    audience: 'Existing AZ-500 holders and Azure security engineers deciding between the retired blueprint and SC-500.',
    timeShort: 'Not applicable: retired August 31, 2026',
    cost: 'Not purchasable (retired); was US$165 typical',
    faqs: [
      { q: 'Is the AZ-500 exam retired?', a: 'Yes. Microsoft retired Exam AZ-500 on August 31, 2026 at 11:59 PM Central Standard Time. The Azure Security Engineer Associate certification and its renewal assessments retired on the same date, so the credential can no longer be earned or renewed. The study guide still shows the January 22, 2026 outline for reference.' },
      { q: 'What replaces the AZ-500 exam?', a: 'Microsoft Certified: Cloud and AI Security Engineer Associate, earned through Exam SC-500, is the current security engineer certification for Azure. There is no automatic conversion from AZ-500, so SC-500 is a separate exam and fee. Much of the identity, network, data and Defender material carries across.' },
      { q: 'Can I still renew my AZ-500 certification?', a: 'No. Microsoft states that the renewal assessments retired with the exam on August 31, 2026, so an Azure Security Engineer Associate credential cannot be extended. It stays on your transcript until its 12-month validity ends. Check the expiry date on your Microsoft Learn profile and plan SC-500 before then.' },
      { q: 'What was the passing score for AZ-500?', a: 'The AZ-500 passing score was 700 on a scale of 1 to 1,000. The score was scaled, so it did not equal 70 percent of the points, and there was no penalty for guessing. Microsoft never published an AZ-500 pass rate, so any percentage you see online is not official.' },
      { q: 'What did the final AZ-500 blueprint cover?', a: 'The January 22, 2026 blueprint had four areas: Secure identity and access (15-20%), Secure networking (20-25%), Secure compute, storage, and databases (20-25%) and Secure Azure using Microsoft Defender for Cloud and Microsoft Sentinel (30-35%). Defender for Cloud and Sentinel together made the biggest block.' },
      { q: 'Was the AZ-500 exam hard?', a: 'AZ-500 was rated Challenging because it spans identity, networking, compute, storage, SQL and security operations, and the largest area, Defender for Cloud and Sentinel, rewards hands-on portal practice. Microsoft published no pass rate, so there is no official difficulty figure beyond the 700 scaled threshold.' }
    ],
    summaryPoints: [
      'AZ-500 retired on August 31, 2026 at 11:59 PM Central and cannot be scheduled.',
      'The certification and renewal assessments retired too; existing credentials cannot be renewed.',
      'The final outline (January 22, 2026) put Defender for Cloud and Sentinel at 30-35%.',
      'The pass mark was 700 of 1,000 and the typical associate fee was US$165.',
      'SC-500, Cloud and AI Security Engineer Associate, is the current path.'
    ],
    relatedSlugs: ['microsoft-sc-500', 'microsoft-az-104', 'microsoft-az-700', 'microsoft-sc-200'],
    sourceUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-500',
    confidence: 'medium'
  }),

  rec({
    slug: 'microsoft-az-700',
    tagline: 'The Azure networking exam: VNets, hybrid connectivity, load balancing, Private Link and firewalls.',
    description: 'The Microsoft AZ-700 exam for Azure Network Engineer Associate gives 100 minutes and its July 27, 2026 outline spreads weight across five networking areas. The largest is Design and implement core networking infrastructure (25-30%), followed by Design, implement, and manage connectivity services (20-25%), Design and implement application delivery services (15-20%), Design and implement Azure network security services (15-20%) and Design and implement private access to Azure services (10-15%). It targets network engineers who run ExpressRoute, VPN, Virtual WAN, Front Door and Azure Firewall, and it renews free every 12 months.',
    summary: 'AZ-700 is the exam for Microsoft Certified: Azure Network Engineer Associate. Microsoft states 100 minutes to complete it, it passes at 700 of 1,000, and its July 27, 2026 outline has five areas with no area above 30%. The certification renews free every 12 months.',
    advantages: [
      'The certification page states 100 minutes, and the July 27, 2026 outline publishes percent ranges for five areas.',
      'Weight is spread evenly: no area exceeds 25-30%, so gaps in ExpressRoute, Virtual WAN or Front Door cannot be hidden behind one strong area.',
      'The skills list names concrete features: Azure Route Server, NAT Gateway, Azure DNS Private Resolver, Virtual Network Manager and virtual network flow logs.',
      'Renewal is free: pass an open-book online assessment on Microsoft Learn during the six months before expiry.',
      'It is a natural second Azure step after AZ-104 and a base for architect-level design in AZ-305.'
    ],
    roadmap: [
      'Review the five networking areas and their ranges',
      'Build hub-and-spoke, VPN, ExpressRoute concepts and Private Link in a lab',
      'Practice Application Gateway, Front Door, Load Balancer and WAF configuration',
      'Take the free Microsoft Learn practice assessment',
      'Schedule AZ-700 and renew each year'
    ],
    prerequisites: 'No formal prerequisite exam. Microsoft expects experience creating and managing compute, storage and networking resources in Azure, and an understanding of networking fundamentals: name resolution, network protocols and network address management.',
    eligibility: 'Open to anyone who can register with Pearson VUE. Microsoft frames the candidate as a network engineer who works with solution architects, cloud administrators, security engineers, application developers and DevOps engineers. AZ-104 or AZ-900 is not required, but the exam assumes working Azure administration skills.',
    examMeta: {
      questions: 'Not published by Microsoft; Microsoft states most exams have 40-60 questions, and interactive components or labs may appear',
      time: '100 minutes to complete the assessment per the certification page (120-minute seat time); labs would extend this to 120 minutes of exam time',
      pass: '700 on a 1 to 1,000 scaled score',
      fee: 'US$165 typical for associate exams in the United States, priced by country; each retake is the full fee; renewal is free',
      format: 'Multiple choice, case studies, other interactive items and possible hands-on components',
      admin: 'Pearson VUE test center or online proctoring (OnVUE)'
    },
    topics: [
      { name: 'Design and implement core networking infrastructure', weight: '', note: 'Official range 25-30%. IP addressing and subnetting, DNS and Private Resolver, VNet peering, UDRs, Route Server, NAT Gateway and monitoring with Network Watcher.' },
      { name: 'Design, implement, and manage connectivity services', weight: '', note: 'Official range 20-25%. Site-to-site and point-to-site VPN, ExpressRoute models, peering, Global Reach and FastPath, and Virtual WAN.' },
      { name: 'Design and implement application delivery services', weight: '', note: 'Official range 15-20%. Load Balancer, Traffic Manager, Application Gateway and Front Door.' },
      { name: 'Design and implement private access to Azure services', weight: '', note: 'Official range 10-15%. Private Link, private endpoints with DNS integration, service endpoints and service endpoint policies.' },
      { name: 'Design and implement Azure network security services', weight: '', note: 'Official range 15-20%. NSGs and ASGs, virtual network flow logs, Azure Firewall and Firewall Manager, and Web Application Firewall policies.' }
    ],
    essentials: [
      ['Outline version', 'Skills measured as of July 27, 2026, with minor changes to IP addressing, network monitoring and NSG subareas'],
      ['Exam time', '100 minutes per the certification page; 120 minutes of seat time, extended to 120 and 140 if labs appear'],
      ['Passing score', '700 on a scaled 1 to 1,000 range; no penalty for guessing'],
      ['Languages', 'Ten listed: English, German, Spanish, French, Italian, Japanese, Korean, Portuguese (Brazil), Chinese (Simplified) and Chinese (Traditional)'],
      ['Validity', '12 months; renew free with an online assessment in the six months before expiry'],
      ['Retake rule', '24 hours after the first failure, then 14 days between later attempts, up to five attempts in 12 months'],
      ['Weighting', 'Five areas, none above 25-30%; core infrastructure is the largest']
    ],
    timeline: [
      { stage: 'Study and networking labs', duration: '6-10 weeks for candidates with Azure and networking experience' },
      { stage: 'Practice assessment and booking', duration: '1 week; schedule up to 90 days ahead' },
      { stage: 'Exam and result', duration: '120 minutes of seat time; result in minutes' },
      { stage: 'Renewal', duration: 'Every 12 months, free, six-month window' }
    ],
    costBreakdown: {
      items: [
        { item: 'AZ-700 exam fee', fee: 'US$165 typical for associate exams in the United States' },
        { item: 'Microsoft Learn paths, practice assessment, sandbox', fee: 'Free' },
        { item: 'Azure subscription for networking labs', fee: 'Pay-as-you-go; VPN gateways, firewalls and Virtual WAN hubs bill by the hour, so delete them after each lab' },
        { item: 'Annual renewal assessment', fee: 'Free' }
      ],
      total: 'US$165 for a first attempt plus lab spend',
      footnote: 'Price depends on the country where you are proctored and excludes taxes. A retake costs the full fee again.'
    },
    difficulty: 'Challenging',
    audience: 'Network engineers and Azure administrators who design and operate hybrid and cloud networks.',
    timeShort: '6-10 weeks',
    cost: 'US$165 plus lab costs',
    faqs: [
      { q: 'How long is the AZ-700 exam?', a: 'Microsoft states you have 100 minutes to complete the AZ-700 assessment. The seat time is 120 minutes including the agreement and instructions, and a form with labs would carry 120 minutes of exam time. The exam page warns that interactive components may appear. Microsoft does not publish an exact question count.' },
      { q: 'What is the passing score for AZ-700?', a: 'The AZ-700 passing score is 700 on a scale of 1 to 1,000. It is a scaled score, so it does not equal 70 percent of the points, and there is no penalty for guessing. The report shows pass or fail, an overall score and a bar chart by skill area, not the questions you missed.' },
      { q: 'Is the AZ-700 exam hard?', a: 'AZ-700 is rated Challenging because weight is spread across five areas, so you cannot rely on one strength. ExpressRoute, Virtual WAN, Front Door and Private Link DNS integration are the usual weak spots for candidates without hands-on routing experience. Microsoft publishes no pass rate, so there is no official difficulty figure.' },
      { q: 'What does the AZ-700 exam cover?', a: 'AZ-700 covers core networking infrastructure (25-30%), connectivity services (20-25%), application delivery services (15-20%), Azure network security services (15-20%) and private access to Azure services (10-15%). Named topics include ExpressRoute, Virtual WAN, Route Server, NAT Gateway, Front Door, Azure Firewall and Web Application Firewall.' },
      { q: 'How long is the AZ-700 certification valid?', a: 'Azure Network Engineer Associate is valid for 12 months. You renew for free by passing an unproctored, open-book online assessment on Microsoft Learn during the six months before expiry, which extends it one year from the expiration date. You can retry the renewal assessment as often as needed.' },
      { q: 'Do I need AZ-104 before AZ-700?', a: 'No. Microsoft lists no prerequisite exam for Azure Network Engineer Associate. It does expect experience creating and managing compute, storage and networking resources in Azure, which is the ground AZ-104 covers, so many candidates study the AZ-104 outline first or take that exam beforehand.' },
      { q: 'What changed in AZ-700 in July 2026?', a: 'The study guide dated July 27, 2026 made minor changes to IP addressing for Azure resources, network monitoring and the network security group subarea. The audience profile and the five area names did not change, and the percent ranges stayed the same, so earlier preparation still maps to the current outline.' }
    ],
    summaryPoints: [
      'AZ-700 gives 100 minutes per the certification page and passes at 700 of 1,000.',
      'Five areas: core networking 25-30%, connectivity 20-25%, application delivery 15-20%, security 15-20%, private access 10-15%.',
      'US$165 typical fee in the United States; each retake costs the full fee.',
      'The certification expires after 12 months and renews free with an online assessment.',
      'The outline was updated July 27, 2026 with no change to area names or ranges.'
    ],
    relatedSlugs: ['microsoft-az-104', 'microsoft-az-305', 'microsoft-az-140', 'microsoft-sc-500'],
    sourceUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-700',
    confidence: 'high'
  }),

  rec({
    slug: 'microsoft-az-800',
    tagline: 'The retired Windows Server core exam: AD DS carried 30-35% before the move to AZ-802.',
    description: 'Exam AZ-800 for Windows Server Hybrid Core Infrastructure retired on September 30, 2026 at 5:00 PM Central; AZ-802 now earns the certification. The final January 21, 2026 outline weighted Deploy and manage Active Directory Domain Services (AD DS) in on-premises and cloud environments at 30-35%, with Manage virtual machines and containers, hybrid networking and storage and file services at 15-20% each. It was the first of two exams for Windows Server Hybrid Administrator Associate, which Microsoft now titles Windows Server Administrator Associate.',
    summary: 'AZ-800 was retired on September 30, 2026 at 5:00 PM Central and cannot be scheduled. Its final outline had five areas and passed at 700 of 1,000. Microsoft now lists a single exam, AZ-802 Administering Windows Server, with 120 minutes, English only, for Windows Server Administrator Associate.',
    advantages: [
      'The final January 21, 2026 outline is still public and works as a checklist for AD DS, Hyper-V, containers, DNS, DHCP and Azure File Sync skills.',
      'AZ-800 content maps heavily into AZ-802, which keeps AD DS, Hyper-V, networking and storage topics.',
      'The single-exam AZ-802 path replaces the two-exam pair, which removes the second exam fee.',
      'Knowing the retirement date prevents paying for a voucher that can no longer be used.'
    ],
    roadmap: [
      'Confirm AZ-800 is retired and cannot be scheduled',
      'Review the AZ-802 study guide and its seven areas',
      'Use the AZ-800 outline as a topic checklist for AD DS, Hyper-V and storage',
      'Check your Microsoft Learn transcript for any credential you already hold'
    ],
    prerequisites: 'None are enforceable now because the exam cannot be booked. Microsoft described the candidate as responsible for administering Windows Server as a workload in on-premises and hybrid environments, with several years of experience with Windows Server operating systems.',
    eligibility: 'No one can newly sit AZ-800. Microsoft states the exam retired on September 30, 2026 at 5:00 PM Central Standard Time. The certification page now lists AZ-802 as the exam to schedule, offered in English, with a stated duration of 120 minutes.',
    examMeta: {
      questions: 'Not published by Microsoft; Microsoft states most exams have 40-60 questions (retired exam)',
      time: 'Not shown on the retired AZ-800 page; Microsoft lists 100 minutes for role-based exams without labs and 120 with labs; the successor AZ-802 lists 120 minutes',
      pass: '700 on a 1 to 1,000 scaled score',
      fee: 'US$165 typical for associate exams (exam retired; cannot be purchased)',
      format: 'Multiple choice, case studies and other interactive items, delivered by Pearson VUE (retired)',
      admin: 'Microsoft Credentials, delivered by Pearson VUE (retired September 30, 2026)'
    },
    topics: [
      { name: 'Deploy and manage Active Directory Domain Services (AD DS) in on-premises and cloud environments', weight: '', note: 'Official range 30-35%. Domain controllers, RODCs, FSMO roles, trusts, sites, replication, Entra Connect Sync and Cloud Sync, Entra Domain Services and Group Policy.' },
      { name: 'Manage Windows Servers and workloads in a hybrid environment', weight: '', note: 'Official range 10-15%. Windows Admin Center, PowerShell remoting and JEA, SSH, RDP, Azure Arc, Azure Machine Configuration, Update Manager and Automation runbooks.' },
      { name: 'Manage virtual machines and containers', weight: '', note: 'Official range 15-20%. Hyper-V features, checkpoints, NIC Teaming, shielded VMs, Windows Server containers, AKS on Windows Server and Windows Server VMs in Azure.' },
      { name: 'Implement and manage an on-premises and hybrid networking infrastructure', weight: '', note: 'Official range 15-20%. DNS integration and DNSSEC, IPAM, DHCP scopes and high availability, Remote Access, Azure Network Adapter, Web Application Proxy and Entra Private Access.' },
      { name: 'Manage storage and file services', weight: '', note: 'Official range 15-20%. Azure Files and File Sync, DFS, FSRM, BranchCache, SMB over QUIC, Storage Spaces, Storage Replica, Data Deduplication and iSCSI.' }
    ],
    essentials: [
      ['Status', 'Exam AZ-800 retired September 30, 2026 at 5:00 PM Central Standard Time'],
      ['Final blueprint', 'Skills measured as of January 21, 2026, five areas with percent ranges'],
      ['Passing score', '700 on a scaled 1 to 1,000 range'],
      ['Successor', 'AZ-802 Administering Windows Server, 120 minutes, English, for Windows Server Administrator Associate'],
      ['Largest area', 'Deploy and manage AD DS carried 30-35% of the final blueprint'],
      ['Retake rule (when available)', '24 hours after the first failure, then 14 days between later attempts, up to five in 12 months']
    ],
    timeline: [
      { stage: 'Final AZ-800 blueprint update', duration: 'January 21, 2026' },
      { stage: 'AZ-800 retirement', duration: 'September 30, 2026 at 5:00 PM Central' },
      { stage: 'Successor path, AZ-802', duration: 'Microsoft lists 120 minutes of exam time, English only' }
    ],
    costBreakdown: {
      items: [
        { item: 'AZ-800 exam fee while available', fee: 'US$165 typical for associate exams' },
        { item: 'Free Microsoft Learn paths and practice assessment', fee: 'Free' },
        { item: 'AZ-800 today', fee: 'Cannot be purchased; retired September 30, 2026' }
      ],
      total: 'No cost applies now; plan for the AZ-802 exam fee shown at checkout',
      footnote: 'Associate exams typically cost US$165 in the United States, priced by country. Confirm the AZ-802 fee on its Microsoft Learn page.'
    },
    difficulty: 'Challenging',
    audience: 'Windows Server administrators weighing the retired AZ-800 blueprint against the single AZ-802 exam.',
    timeShort: 'Not applicable: retired September 30, 2026',
    cost: 'Not purchasable (retired); was US$165 typical',
    faqs: [
      { q: 'Is the AZ-800 exam retired?', a: 'Yes. Microsoft retired Exam AZ-800 on September 30, 2026 at 5:00 PM Central Standard Time. The study guide shows a retirement warning and still lists the January 21, 2026 skills outline for reference. The Windows Server Administrator Associate certification now lists AZ-802 as its exam instead.' },
      { q: 'What replaced AZ-800 and AZ-801?', a: 'Exam AZ-802, Administering Windows Server, replaced both. Microsoft lists it as the exam for Windows Server Administrator Associate, with 120 minutes, English only, and seven skill areas including Deploy and manage AD DS (20-25%) and Monitor and troubleshoot Windows Server environments (15-20%). It is one exam instead of two.' },
      { q: 'What was the passing score for AZ-800?', a: 'The AZ-800 passing score was 700 on a scale of 1 to 1,000. The score was scaled, so it did not equal 70 percent of the points, and there was no penalty for guessing. Microsoft never published an AZ-800 pass rate, so any percentage you see online is not official.' },
      { q: 'What did the final AZ-800 blueprint cover?', a: 'The January 21, 2026 blueprint had five areas: AD DS in on-premises and cloud environments (30-35%), Windows Servers and workloads in a hybrid environment (10-15%), virtual machines and containers (15-20%), on-premises and hybrid networking (15-20%) and storage and file services (15-20%). AD DS was the largest block.' },
      { q: 'Was the AZ-800 exam hard?', a: 'AZ-800 was rated Challenging because AD DS, hybrid identity with Entra, Hyper-V, DNS and DHCP, and Azure Files all appeared in one exam and rewarded real server administration experience. Microsoft published no pass rate, so there is no official difficulty figure beyond the 700 scaled threshold.' },
      { q: 'Does AZ-800 still count toward the Windows Server certification?', a: 'Not for new candidates, because the exam cannot be scheduled after September 30, 2026. Microsoft now points the certification to AZ-802. Check your Microsoft Learn transcript for the status of any AZ-800 result you already hold, since the retirement notice does not say it is removed.' }
    ],
    summaryPoints: [
      'AZ-800 retired on September 30, 2026 at 5:00 PM Central and cannot be scheduled.',
      'The final outline (January 21, 2026) put AD DS at 30-35% of the exam.',
      'The pass mark was 700 of 1,000 and the typical associate fee was US$165.',
      'AZ-802 Administering Windows Server is now the single exam: 120 minutes, English only.',
      'AZ-801 retired on the same day, so the old two-exam pair is gone.'
    ],
    relatedSlugs: ['microsoft-az-802', 'microsoft-az-801', 'microsoft-az-104', 'microsoft-az-140'],
    sourceUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-800',
    confidence: 'medium'
  }),

  rec({
    slug: 'microsoft-az-801',
    tagline: 'The retired Windows Server advanced exam: security, clustering, disaster recovery and migration.',
    description: 'Exam AZ-801 on Windows Server Hybrid Advanced Services retired on September 30, 2026 at 5:00 PM Central, folded into the single AZ-802 exam. Its last outline, dated October 6, 2025, covered Secure Windows Server on-premises and hybrid infrastructures (25-30%), Migrate servers and workloads (20-25%), Implement and manage Windows Server high availability (15-20%), Monitor and troubleshoot Windows Server environments (15-20%) and Implement disaster recovery (10-15%). It was the second exam for Windows Server Hybrid Administrator Associate and added failover clustering, Azure Site Recovery and Azure Migrate.',
    summary: 'AZ-801 was retired on September 30, 2026 at 5:00 PM Central and cannot be scheduled. Its final outline, dated October 6, 2025, passed at 700 of 1,000 and led with security at 25-30%. The Windows Server certification now lists one exam, AZ-802 Administering Windows Server, which lists 120 minutes of exam time.',
    advantages: [
      'The final October 6, 2025 outline is still public and works as a checklist for failover clustering, Storage Spaces Direct, Azure Site Recovery, Azure Migrate and Windows Server hardening.',
      'Topics such as Credential Guard, Windows LAPS, Defender for Identity, Storage Migration Service and AD forest migration carry into AZ-802.',
      'The single-exam AZ-802 path replaces the two-exam pair, so no second exam fee is needed.',
      'Knowing the retirement date prevents paying for a voucher that can no longer be used.'
    ],
    roadmap: [
      'Confirm AZ-801 is retired and cannot be scheduled',
      'Review the AZ-802 study guide, which folds security, monitoring and storage into seven areas',
      'Use the AZ-801 outline as a checklist for clustering, backup and migration topics',
      'Check your Microsoft Learn transcript for any AZ-801 result you already hold'
    ],
    prerequisites: 'None are enforceable now because the exam cannot be booked. Microsoft described the candidate as administering Windows Server as a workload in on-premises and hybrid environments, with several years of Windows Server experience and use of tools such as Windows Admin Center, PowerShell, Azure Arc and Defender for Cloud.',
    eligibility: 'No one can newly sit AZ-801. Microsoft states the exam retired on September 30, 2026 at 5:00 PM Central Standard Time, and the Windows Server certification page now schedules AZ-802 instead, in English with a stated duration of 120 minutes.',
    examMeta: {
      questions: 'Not published by Microsoft; Microsoft states most exams have 40-60 questions (retired exam)',
      time: 'Not shown on the retired AZ-801 page; Microsoft lists 100 minutes for role-based exams without labs and 120 with labs; the successor AZ-802 lists 120 minutes',
      pass: '700 on a 1 to 1,000 scaled score',
      fee: 'US$165 typical for associate exams (exam retired; cannot be purchased)',
      format: 'Multiple choice, case studies and other interactive items, delivered by Pearson VUE (retired)',
      admin: 'Microsoft Credentials, delivered by Pearson VUE (retired September 30, 2026)'
    },
    topics: [
      { name: 'Secure Windows Server on-premises and hybrid infrastructures', weight: '', note: 'Official range 25-30%. Exploit protection, Credential Guard, Windows LAPS, hardening domain controllers, Defender for Identity, NTLM auditing, Windows Firewall, BitLocker and Azure Disk Encryption.' },
      { name: 'Implement and manage Windows Server high availability', weight: '', note: 'Official range 15-20%. Failover clusters, stretch clusters, quorum and Azure witness, Network ATC, cluster-aware updating and Storage Spaces Direct.' },
      { name: 'Implement disaster recovery', weight: '', note: 'Official range 10-15%. Azure Backup and Recovery Services vault, Azure Backup Server, Azure Site Recovery plans and Hyper-V Replica.' },
      { name: 'Migrate servers and workloads', weight: '', note: 'Official range 20-25%. Storage Migration Service, Azure Migrate, IIS workload migration, RDS, DHCP and print servers, and migrating an AD forest to Windows Server 2025.' },
      { name: 'Monitor and troubleshoot Windows Server environments', weight: '', note: 'Official range 15-20%. Performance Monitor, System Insights, data collection rules, VM Insights, Windows Update, boot and storage issues, AD Recycle Bin and SYSVOL recovery.' }
    ],
    essentials: [
      ['Status', 'Exam AZ-801 retired September 30, 2026 at 5:00 PM Central Standard Time'],
      ['Final blueprint', 'Skills measured as of October 6, 2025, five areas with percent ranges'],
      ['Passing score', '700 on a scaled 1 to 1,000 range'],
      ['Successor', 'AZ-802 Administering Windows Server, 120 minutes, English, covering both retired exams'],
      ['Largest area', 'Secure Windows Server on-premises and hybrid infrastructures carried 25-30%'],
      ['Companion exam', 'AZ-800 retired on the same day']
    ],
    timeline: [
      { stage: 'Final AZ-801 blueprint update', duration: 'October 6, 2025' },
      { stage: 'AZ-801 retirement', duration: 'September 30, 2026 at 5:00 PM Central' },
      { stage: 'Successor path, AZ-802', duration: 'Microsoft lists 120 minutes of exam time, English only' }
    ],
    costBreakdown: {
      items: [
        { item: 'AZ-801 exam fee while available', fee: 'US$165 typical for associate exams' },
        { item: 'Free Microsoft Learn paths and practice assessment', fee: 'Free' },
        { item: 'AZ-801 today', fee: 'Cannot be purchased; retired September 30, 2026' }
      ],
      total: 'No cost applies now; plan for the AZ-802 exam fee shown at checkout',
      footnote: 'Associate exams typically cost US$165 in the United States, priced by country. Confirm the AZ-802 fee on its Microsoft Learn page.'
    },
    difficulty: 'Challenging',
    audience: 'Windows Server administrators who already finished AZ-800 or are moving to the AZ-802 blueprint.',
    timeShort: 'Not applicable: retired September 30, 2026',
    cost: 'Not purchasable (retired); was US$165 typical',
    faqs: [
      { q: 'Is the AZ-801 exam retired?', a: 'Yes. Microsoft retired Exam AZ-801 on September 30, 2026 at 5:00 PM Central Standard Time. The study guide carries a retirement warning and still lists the October 6, 2025 skills outline for reference. The Windows Server certification page now schedules AZ-802 in its place.' },
      { q: 'Do I still need AZ-801 for Windows Server Hybrid Administrator?', a: 'No. The exam retired on September 30, 2026, and Microsoft now lists only AZ-802, Administering Windows Server, on the certification page. It is one exam of 120 minutes, in English, that also covers the security, clustering and migration topics once examined by AZ-801.' },
      { q: 'What was the passing score for AZ-801?', a: 'The AZ-801 passing score was 700 on a scale of 1 to 1,000. The score was scaled, so it did not equal 70 percent of the points, and there was no penalty for guessing. Microsoft never published an AZ-801 pass rate, so any percentage you see online is not official.' },
      { q: 'What did the final AZ-801 blueprint cover?', a: 'The October 6, 2025 blueprint had five areas: security (25-30%), migration (20-25%), high availability (15-20%), monitoring and troubleshooting (15-20%) and disaster recovery (10-15%). Topics included Credential Guard, Windows LAPS, failover clusters, Storage Spaces Direct, Azure Site Recovery, Azure Migrate and Active Directory forest migration.' },
      { q: 'Was the AZ-801 exam hard?', a: 'AZ-801 was rated Challenging because it demanded depth in clustering, Active Directory hardening, backup, site recovery and migration, all topics that are hard to learn without lab practice. Microsoft published no pass rate, so there is no official difficulty figure beyond the 700 scaled threshold.' },
      { q: 'How does AZ-802 differ from AZ-801?', a: 'AZ-802 is one exam with seven areas, including Deploy and manage AD DS (20-25%), Manage storage and file services (15-20%) and Monitor and troubleshoot Windows Server environments (15-20%). It spreads the old AZ-800 and AZ-801 material together, so security is now a 10-15% area rather than the 25-30% AZ-801 block.' }
    ],
    summaryPoints: [
      'AZ-801 retired on September 30, 2026 at 5:00 PM Central and cannot be scheduled.',
      'The final outline (October 6, 2025) put security at 25-30% and migration at 20-25%.',
      'The pass mark was 700 of 1,000 and the typical associate fee was US$165.',
      'AZ-802 Administering Windows Server replaces both AZ-800 and AZ-801: 120 minutes, English only.',
      'AZ-800 retired on the same day.'
    ],
    relatedSlugs: ['microsoft-az-802', 'microsoft-az-800', 'microsoft-az-104', 'microsoft-az-140'],
    sourceUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-801',
    confidence: 'medium'
  })
];

export default { programs, exams };
