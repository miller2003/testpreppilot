const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Legal support & administrative certifications desk',
    bio: 'This desk covers administrative and legal-support credentials. Program structure and rules come from the certifying body\'s official pages (NNA, state notary commissions), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the National Notary Association\'s Certified Notary Signing Agent program pages and BLS OOH Real Estate Sales Agents (SOC 41-9022) as the closest-fit occupation, May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$56,620 median for real estate sales agents (BLS, May 2024) — the closest-fit occupation, used with an explicit caveat',
    summary: 'There is no Bureau of Labor Statistics occupation called "notary signing agent", and we state that plainly: BLS does not measure notary-signing work as its own occupation, so no government median wage exists for it. The closest occupational fit by work context is Real Estate Sales Agents, SOC 41-9022, which had a May 2024 median wage of $56,620, with the lowest 10 percent under $28,380 and the highest 10 percent above $126,560 — and we use it only as context, because signing agents work at real-estate and loan closings and their income is transaction-based, exactly like real-estate sales income. The honest framing is that signing-agent income is piece-rate: agents are paid per signing assignment, typically in a range from about $50 to $150 per signing, and annual income depends entirely on volume, travel radius and marketing, so it varies from a modest side income to a full-time producer\'s income. The certification itself produces no wage in any BLS series. Read the real-estate figure as context for the market the work connects to, and treat the per-assignment rate as the actual planning number for this credential.',
    rows: [
      { label: 'Median annual wage, real estate sales agents (closest-fit context)', value: '$56,620', note: 'BLS OOH, SOC 41-9022, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $28,380', note: 'BLS OOH, SOC 41-9022, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $126,560', note: 'BLS OOH, SOC 41-9022, May 2024' },
      { label: 'Typical per-assignment signing fee', value: '~$50-$150', note: 'Market rate, varies by region; not a BLS figure' }
    ],
    growth: 'BLS projects 5 percent growth for real estate sales agents from 2024 to 2034, about 33,700 openings per year — cited as context for the closing-market the work connects to.',
    source: { label: 'BLS Occupational Outlook Handbook - Real Estate Sales Agents', url: 'https://www.bls.gov/ooh/sales/real-estate-sales-agents.htm' }
  },
  passRate: {
    headline: 'NNA publishes the certification requirements — training, exam and background screening — rather than a cohort pass rate',
    summary: 'The National Notary Association does not publish cohort pass rates for its Certified Notary Signing Agent certification, and third-party estimates are not official data, so we do not treat them as authoritative. What the certification path does publish is the structure: a candidate must first hold a valid notary public commission in their state, then complete the NNA\'s signing agent certification training, pass the NNA certification exam, and clear the required background screening. The NNA\'s training and exam cover the signing-agent role: loan documents, notarisation requirements, the signing ceremony, and the professional practices of the work. The absence of a published pass rate is not an absence of standards: the certification is a professional-membership credential that signals training and screening, and the market value comes from the requirement itself — many title companies and signing services work only with certified and screened agents. The practical reading is that preparation is straightforward: complete the training, study the loan-document and notarisation material, and pass the exam, and remember that the real gate for working is the background screening and the state notary commission that precede the certification.',
    source: { label: 'National Notary Association - Certified Notary Signing Agent certification', url: 'https://www.nationalnotary.org/signing-agent-center/certified-notary-signing-agent' },
    caveat: 'NNA publishes the certification requirements but no pass rate; the credential is a training-and-screening certification rather than a scored exam with published statistics.'
  },
  studyPlan: {
    summary: 'The NNA Certified Notary Signing Agent path has three components: the state notary commission (which must come first and is governed by the notary\'s state), the NNA signing agent training and exam, and the background screening. The training covers the signing-agent role: how loan signings work, the documents commonly signed at a closing, the notarisation requirements for each, and the professional practices — appearance, conduct, and the limits of what a signing agent may do (a signing agent may notarise and manage the signing ceremony, but may not explain loan terms or give legal advice). A defensible preparation plan runs 10 to 20 hours over 1 to 2 weeks, assuming the notary commission is already in hand. Days one to three: complete the NNA training course and take notes on the document and notarisation material. Days four to six: study the loan-document overview and the state-specific notarisation rules, and work the practice questions the course provides. Day seven: take the certification exam. The plan is short because the credential is a training-and-screening certification, not a deep technical exam; the background screening and the state commission are the parts that take calendar time, so start those first.',
    totalHours: '10-20 hours over 1-2 weeks (plus the state notary commission and background screening)',
    weeks: [
      { label: 'Step 1 — Commission', focus: 'State notary commission', tasks: ['Obtain or confirm your state notary commission', 'Understand your state\'s notarisation rules', 'Gather the materials the NNA path requires'], hours: 'Calendar time varies by state' },
      { label: 'Step 2 — Training', focus: 'NNA signing agent training', tasks: ['Complete the NNA training course', 'Take notes on documents and notarisation', 'Work the practice questions'], hours: 8 },
      { label: 'Step 3 — Exam and screening', focus: 'Certification and background check', tasks: ['Take and pass the certification exam', 'Complete the background screening', 'Build your signing-agent profile and marketing'], hours: 4 }
    ],
    variants: [
      { label: 'New notary', detail: 'The state commission is the long pole; start it weeks before the NNA path.' },
      { label: 'Experienced notary', detail: 'Compress the commission step and focus on the loan-document and signing-ceremony material.' }
    ]
  },
  prepStrategies: {
    summary: 'The signing-agent certification is a training-and-screening credential, so the dominant strategy is to complete the official NNA training thoroughly and use its practice questions, because the exam is built from that training. Second, master the boundaries of the role: the exam and the work reward knowing what a signing agent may do — notarise, manage the ceremony, witness and handle documents — versus what they may not do, such as explaining loan terms or offering legal advice; those boundary questions are where candidates lose points. Third, learn the documents: loan signings involve a standard set of documents (note, mortgage or deed of trust, closing disclosure, title documents), and familiarity with their purpose and which need notarisation is the core content. Fourth, remember that the background screening is part of the credential: errors or omissions on the disclosure slow or block certification, so be accurate. Finally, plan the business side alongside the credential: the certification opens the door, but the work comes from building relationships with title companies and signing services, which care about your screening, your equipment and your reliability.',
    items: [
      { title: 'Complete the official training', detail: 'The exam is built from the NNA training; work the practice questions.' },
      { title: 'Master the role boundaries', detail: 'Notarise and manage the ceremony; never explain loan terms or give legal advice.' },
      { title: 'Learn the document set', detail: 'Note, mortgage, closing disclosure and title documents — and which need notarisation.' },
      { title: 'Be accurate in the screening', detail: 'The background screening is part of the credential; disclose accurately.' },
      { title: 'Plan the business side', detail: 'The work comes from relationships with title companies and signing services.' }
    ]
  },
  resourceComparison: {
    summary: 'The signing-agent path has a compact cost structure. The NNA\'s Certified Notary Signing Agent package — training course, exam and background screening — typically runs about $100 to $200, with the exact bundle price varying by promotions and included services; the state notary commission costs vary widely by state, from about $20 to several hundred dollars including bond, supplies and filing fees. Equipment is a real cost: a printer/scanner, paper and supplies add a few hundred dollars for a working agent. Optional marketing — a website, business cards and directory listings — adds more. Free resources include the NNA\'s signing-agent articles and state notary handbooks, which are genuinely useful for the boundaries and state rules. A realistic total budget is $150 to $600 to get certified and minimally equipped. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NNA certification package', values: ['~$100-$200', 'Training + exam + background screening', 'The certification itself'] },
      { label: 'State notary commission', values: ['~$20-$300+ by state', 'State filing, bond and supplies', 'The prerequisite commission'] },
      { label: 'State notary handbooks', values: ['Free-$30', 'Official state publications', 'State-specific notarisation rules'] },
      { label: 'Equipment (printer/scanner)', values: ['$150-$400', 'Hardware and supplies', 'Working as a signing agent'] },
      { label: 'Marketing (optional)', values: ['$0-$300', 'Website, cards, directory listings', 'Building the client pipeline'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; state costs vary widely; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common signing-agent mistake is treating the certification as the business: candidates complete the credential and then find no work, because the certification is a ticket, not a pipeline — the work comes from marketing to title companies and signing services. The fix is to build the business plan alongside the certification. The second mistake is crossing the role boundary: signing agents who explain loan terms or give advice risk their certification and their legal exposure; the role is notarisation and ceremony management only. Third, candidates neglect the state-specific rules, assuming the certification overrides state notarisation law; the state commission and its rules govern the notarial acts. Fourth, some candidates skip the background-screening accuracy and then stall on errors in the disclosure. Finally, many candidates under-invest in the practical side — a reliable printer/scanner and paper handling — and then lose work to better-equipped agents. The credential opens the door; reliability and equipment keep it open.',
    items: [
      { mistake: 'Treating the certification as the business', fix: 'Build the title-company and signing-service relationships alongside the credential.' },
      { mistake: 'Crossing the role boundary', fix: 'Notarise and manage the ceremony; never explain loan terms or give advice.' },
      { mistake: 'Neglecting state rules', fix: 'The state commission and its rules govern the notarial acts.' },
      { mistake: 'Inaccurate screening disclosures', fix: 'Disclose accurately; screening errors stall certification.' },
      { mistake: 'Under-investing in equipment', fix: 'A reliable printer/scanner and paper handling are part of the job.' }
    ]
  },
  questionTypes: {
    summary: 'The NNA signing agent certification exam is a multiple-choice exam built from the NNA training, testing the signing-agent role: the loan documents and which require notarisation, the requirements of a proper notarisation (personal appearance, identification, the notarial certificate), the signing ceremony, and the professional boundaries of the role. The exam also covers professional practices — appointment conduct, document handling and the limits of the agent\'s authority. Samples below are editor-written illustrations of the published training content, not live exam items; they show the role-focused style of the real items.',
    types: [
      { name: 'Document and notarisation items', share: 'Majority', detail: 'Which documents appear at a signing and which require notarisation.' },
      { name: 'Role and boundary items', share: 'Large minority', detail: 'What a signing agent may and may not do.' },
      { name: 'Professional practice items', share: 'Minority', detail: 'Ceremony conduct, identification and document handling.' }
    ],
    samples: [
      {
        prompt: 'At a typical loan signing, which of the following generally requires notarisation?',
        options: ['A. The mortgage or deed of trust', 'B. The closing disclosure', 'C. The loan application', 'D. The estimated title insurance policy'],
        answer: 'A',
        explanation: 'The mortgage or deed of trust is typically notarised because it is the instrument that is recorded. The closing disclosure, loan application and title insurance documents are signed but not usually notarised.'
      },
      {
        prompt: 'A borrower asks the signing agent to explain the interest rate terms in the note. The appropriate response is to:',
        options: ['A. Refer the question to the lender or a qualified professional, staying within the notarial role', 'B. Explain the terms in detail', 'C. Refuse to continue the signing', 'D. Provide the explanation and note it on the certificate'],
        answer: 'A',
        explanation: 'A signing agent may not explain loan terms or give legal advice; the appropriate response is to refer the question to the lender or another qualified professional while completing the notarial duties. Explaining terms, refusing the signing or noting the explanation on a certificate each cross the role boundary.'
      },
      {
        prompt: 'Before notarising a signature, the signing agent must:',
        options: ['A. Verify the signer\'s identity and confirm they appear personally', 'B. Confirm the signer\'s credit score', 'C. Review the loan terms for accuracy', 'D. Obtain the lender\'s approval'],
        answer: 'A',
        explanation: 'A proper notarisation requires the signer to appear personally and the notary to verify identity — typically through acceptable identification. Credit scores, loan-term review and lender approval are not part of the notarial act.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published training content, not live exam items.'
  },
  examDay: {
    summary: 'The NNA signing agent certification is completed online: after the training course, you take the certification exam through the NNA platform at a time you choose, then complete the background screening. Confirm your system and schedule a quiet block; the exam is closed-book and timed. Have your notary commission information ready, because the credential is tied to it. On passing, you receive the Certified Notary Signing Agent credential and the NNA profile tools. If you do not pass, you can retake after additional study of the training material. The afterwards is where the work begins: build your profile, prepare your equipment (printer/scanner, paper handling), and start marketing to title companies and signing services, which typically require the certification plus the background screening. Keep your notary commission and any state requirements current, because the certification rides on the commission.',
    bring: ['Computer with stable internet', 'Your NNA account and notary commission information', 'A quiet block of time for the online exam'],
    leave: ['Distractions — the exam is closed-book and timed', 'Any assumption that the certification replaces state notarisation rules'],
    timeline: [
      { time: 'Before', detail: 'Complete the training, confirm your commission, and schedule the exam.' },
      { time: 'Exam', detail: 'Take the closed-book certification exam through the NNA platform.' },
      { time: 'Screening', detail: 'Complete the background screening accurately.' },
      { time: 'Afterwards', detail: 'Receive the credential, build your profile and start marketing to title companies.' }
    ],
    rules: [
      'The exam is closed-book and timed, taken online',
      'The certification requires a valid state notary commission first',
      'The background screening is part of the credential'
    ],
    afterwards: 'On a pass, build your signing-agent profile and marketing while keeping the state commission current. On a fail, retake after additional study of the training material.'
  }
};

export default data;
