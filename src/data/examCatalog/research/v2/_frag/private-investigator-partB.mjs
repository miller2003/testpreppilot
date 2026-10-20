export default {
  key: 'private-investigator',
  compiledOn: '2026-10-20',
  states: {
    HI: {
      agency: "Hawaii Board of Private Detectives and Guards (DCCA Professional and Vocational Licensing)",
      agencyUrl: "https://cca.hawaii.gov/pvl/boards/private/",
      exam: {
        vendor: "State board (in-person examination administered after board approval)",
        vendorUrl: "https://cca.hawaii.gov/pvl/boards/private/",
        parts: [ { name: "Private detective examination", questions: "Not published", time: "Not published", pass: "75%" } ],
        fee: "$50",
        practical: null,
        languages: ["English"],
        sourceUrl: "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf",
        sourceNote: "FAQ licensing requirements; exam fee and study list published by the board"
      },
      education: {
        hours: "None",
        breakdown: "No coursework is required; the board lists recommended study materials including Hawaii Revised Statutes chapter 463, Hawaii Administrative Rules title 16 chapter 97, and The Process of Investigation (Sennewald and Tsukayama).",
        onlineAllowed: "Not applicable",
        apprenticeship: null,
        sourceUrl: "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf"
      },
      experience: "Four years of full-time investigational work. The board accepts employment under a licensed private detective, as a police officer, as a government investigator (federal, state, county, or municipal), or as an investigator for an attorney or law firm. No education substitutes for the experience requirement.",
      eligibility: {
        minAge: 18,
        citizenship: "Not expressly required for individuals by statute; principals and entities must meet board character standards",
        education: "High school education or equivalent",
        other: "Applicant must not have been convicted of a crime reflecting unfavorably on fitness for the profession (unless annulled or expunged), must not suffer from a directly detrimental psychiatric or psychological disorder, and must possess a history of honesty, truthfulness, financial integrity, and fair dealing (HRS 463-6)."
      },
      background: {
        method: "Electronic fingerprinting through Fieldprint Hawaii or another HCJDC-approved provider",
        fee: "$17.50 Fieldprint + $16.50 FBI + $30.00 Hawaii state criminal history check",
        disqualifiers: "Conviction of any crime reflecting unfavorably on fitness for the profession, unless annulled or expunged by court order",
        sourceUrl: "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf"
      },
      fees: [
        { item: "Application (principal / sole proprietor)", fee: "$50", sourceUrl: "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf" },
        { item: "Application (entity / agency)", fee: "$100", sourceUrl: "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf" },
        { item: "Examination", fee: "$50", sourceUrl: "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf" },
        { item: "Fingerprint and criminal history checks", fee: "$17.50 + $16.50 + $30.00", sourceUrl: "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf" },
        { item: "License (private detective, prorated by biennium)", fee: "$210-$260 depending on when issued in the two-year cycle", sourceUrl: "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf" },
        { item: "Surety bond", fee: "$5,000 bond (HRS 463-12); premium paid to a licensed surety", sourceUrl: "https://www.capitol.hawaii.gov/sessions/session2004/bills/HB2421_sd1_.htm" }
      ],
      application: {
        portal: "Paper application filed with the PVL Licensing Branch (MyPVL used for license management)",
        portalUrl: "https://cca.hawaii.gov/pvl/boards/private/",
        steps: [
          "Complete the private detective application and assemble the required attachments, including a 2 x 2 photograph and employment history documentation on board experience forms.",
          "File the application with fee at least 30 days before the board meeting at which it will be considered; the board meets on a published schedule.",
          "After board approval, register for the examination using the approval letter and pass the 75% threshold exam.",
          "Appear before the board for an in-person interview after passing the examination.",
          "Submit the $5,000 surety bond and the prorated license fee, then complete FBI and Hawaii criminal history checks through Fieldprint."
        ],
        processingTime: "Driven by the board meeting calendar; applications must arrive 30 days before a meeting",
        sourceUrl: "https://cca.hawaii.gov/pvl/boards/private/"
      },
      renewal: {
        cycle: "Biennial - renews by June 30 of every even-numbered year",
        ce: "None for private detective licenses; the 4-hour continuing competency training requirement applies to guard employees",
        fee: "$344 (private detective, active) / $408 (private detective agency, active)",
        late: "License restores within 1 year after expiration: $419 for a private detective; after 1 year the license terminates and a new application is required",
        sourceUrl: "https://cca.hawaii.gov/pvl/boards/private/"
      },
      reciprocity: {
        rule: "None. The board states that Hawaii has no reciprocal agreements and all applicants must meet the same licensing and examination requirements.",
        agreements: null,
        sourceUrl: "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$45,750", p25: "$43,790", p75: "$66,350", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=HI" },
      localNuance: "Hawaii licenses detectives and detective agencies at the state level, but a detective agency must employ a resident principal detective, register every investigative employee with the board semi-annually (Form PDG-16), and file a $5,000 surety bond before licensure.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://cca.hawaii.gov/pvl/boards/private/" }
      ],
      stateFaqs: [
        { q: "Does Hawaii offer any education shortcut instead of the four-year experience requirement?", a: "No. The board explicitly rejects academic courses, degrees, and home study in place of the four years of full-time investigative work. Qualifying employment includes working under a licensed private detective, as a police officer, as a government investigator, or for an attorney or law firm." },
        { q: "How does the two-step application and exam sequence work?", a: "You file the application first and the board reviews it at a scheduled meeting; applications must arrive at least 30 days before that meeting. Only after board approval can you register for the 75% exam ($50 fee), and passing applicants then appear for an in-person board interview before paying the license fee." },
        { q: "What does the $5,000 bond cover and when is it due?", a: "HRS 463-12 requires a surety bond of not less than $5,000 issued by a surety authorized in Hawaii. It does not need to be submitted with the application, but it must be in place before licensure and kept current thereafter." },
        { q: "When do Hawaii private detective licenses renew and what does it cost?", a: "All licenses renew by June 30 of every even-numbered year. A private detective license in active status costs $344 to renew ($408 for an agency), and a lapsed license can be restored for $419 within one year of expiration." },
        { q: "Can I hold a Hawaii private detective license based on my license from another state?", a: "No. The board publishes that Hawaii has no reciprocal agreements, so every applicant must meet the four-year experience and examination requirements in full regardless of licensure elsewhere." }
      ],
      sources: [
        { label: "Hawaii Board of Private Detectives and Guards - licensing, renewals, and fee notices", url: "https://cca.hawaii.gov/pvl/boards/private/", checkedOn: "2026-10" },
        { label: "Board of Private Detectives and Guards - Frequently Asked Questions (fees, requirements, reciprocity)", url: "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf", checkedOn: "2026-10" },
        { label: "Hawaii Revised Statutes chapter 463 - Private detectives and guards (HRS 463-6 qualifications, HRS 463-12 bonds)", url: "https://www.capitol.hawaii.gov/sessions/session2004/bills/HB2421_sd1_.htm", checkedOn: "2026-10" },
        { label: "Hawaii PVL - PDG application and exam reference material", url: "https://cca.hawaii.gov/pvl/files/2021/05/PDG_FAQs_05-09-2021.pdf", checkedOn: "2026-10" }
      ]
    },
    IL: {
      agency: "Illinois Department of Financial and Professional Regulation (IDFPR), Division of Professional Regulation - Private Detective",
      agencyUrl: "https://idfpr.illinois.gov/",
      exam: {
        vendor: "Continental Testing Services (administers the IDFPR private detective exam)",
        vendorUrl: "https://www.continentaltesting.net/",
        parts: [ { name: "Illinois private detective examination", questions: "Not published", time: "Not published", pass: "70 (rule 1240.10(c))" } ],
        fee: "Set by the testing vendor and posted on the IDFPR exam schedule; the state application fee is separate",
        practical: null,
        languages: ["English"],
        sourceUrl: "https://ilga.gov/commission/jcar/admincode/068/068012400A00100R.html",
        sourceNote: "68 Ill. Adm. Code 1240.10 - passing grade 70; exam score valid 3 years"
      },
      education: {
        hours: "None required",
        breakdown: "No coursework requirement; a baccalaureate degree in law enforcement or a related field or business counts for 2 of the 3 required experience years, and an associate degree counts for 1 year (225 ILCS 447/15-10(a)(6)).",
        onlineAllowed: "Not applicable",
        apprenticeship: null,
        sourceUrl: "https://ilga.gov/legislation/ilcs/documents/022504470K15-10.htm"
      },
      experience: "Three years of full-time investigative experience (1,500 or more hours annually) within the five years immediately preceding application, working for a licensed Illinois private detective agency, a licensed attorney, an in-house investigative unit of a corporation with 100 or more employees, the US armed forces, or a law enforcement agency (including a state's attorney or public defender office). A bachelor's degree in law enforcement or business credits 2 of the 3 years; an associate degree or qualifying military law enforcement training credits 1 year.",
      eligibility: {
        minAge: 21,
        citizenship: "Not required by statute",
        education: "No minimum; degree credit applies to experience",
        other: "No felony conviction (or at least 10 years since full discharge from sentence), good moral character, no dishonorable discharge from the armed forces, and no alcohol or narcotic dependence (225 ILCS 447/15-10)."
      },
      background: {
        method: "Illinois State Police live-scan fingerprints (or ISP fingerprint card for out-of-state residents)",
        fee: "Paid to the fingerprint vendor; amounts set by ISP or the licensed fingerprint vendor agency",
        disqualifiers: "Felony conviction unless at least 10 years have lapsed since full discharge from sentence; registered sex offenders are absolutely barred",
        sourceUrl: "https://ilga.gov/commission/jcar/admincode/068/068012400A00100R.html"
      },
      fees: [
        { item: "Application fee to IDFPR", fee: "$500 (68 Ill. Adm. Code 1240.570)", sourceUrl: "https://licensenavigator.ai/blog/private-investigator-license-cost-illinois" },
        { item: "Examination", fee: "Vendor fee set by Continental Testing Services and posted on the IDFPR exam schedule", sourceUrl: "https://ilga.gov/commission/jcar/admincode/068/068012400A00100R.html" },
        { item: "Liability insurance", fee: "$1,000,000 general liability policy in the applicant's name (required before licensure)", sourceUrl: "https://ilga.gov/commission/jcar/admincode/068/068012400A00100R.html" },
        { item: "Fingerprints", fee: "Live-scan vendor fee paid directly to the vendor", sourceUrl: "https://ilga.gov/commission/jcar/admincode/068/068012400A00100R.html" }
      ],
      application: {
        portal: "IDFPR CORE online system",
        portalUrl: "https://idfpr.illinois.gov/",
        steps: [
          "File the examination application with experience verification (VE-DET forms) and education documentation at least 60 days before the exam date; IDFPR confirms eligibility before admission.",
          "Complete Illinois live-scan fingerprints through ISP or a certified vendor within 60 days of applying.",
          "Sit for the Continental Testing Services exam; a passing score is 70 or above and remains valid for 3 years.",
          "After passing, submit the licensure application with proof of $1,000,000 general liability insurance, fingerprint verification, and the $500 fee through CORE.",
          "Renew every three years; licenses expire May 31 on the statewide IDFPR cycle."
        ],
        processingTime: "Exam applications must be on file 60 days before the exam date",
        sourceUrl: "https://ilga.gov/commission/jcar/admincode/068/068012400A00100R.html"
      },
      renewal: {
        cycle: "Every 3 years; expiration falls on May 31",
        ce: "None published for private detectives",
        fee: "$150 per year of the cycle ($450 per 3-year renewal) under 68 Ill. Adm. Code 1240.570(b)(1)",
        late: null,
        sourceUrl: "https://licensenavigator.ai/blog/private-investigator-license-cost-illinois"
      },
      reciprocity: {
        rule: "Experience working full-time for a private detective agency licensed in another state (or in a state that does not license agencies) may be accepted in lieu of Illinois agency experience if substantially equivalent; the statute contains no licensure-by-endorsement provision.",
        agreements: null,
        sourceUrl: "https://ilga.gov/legislation/ilcs/documents/022504470K15-10.htm"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$60,210", p25: "$44,380", p75: "$79,140", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=IL" },
      localNuance: "Illinois bundles private detectives, private alarm contractors, private security contractors, fingerprint vendors, and locksmiths under one Private Detective, Private Alarm, Private Security, Fingerprint Vendor, and Locksmith Act, so PI licensees also answer to the shared Board of Private Detective and Private Alarm Services.",
      recentChanges: [
        { year: 2024, change: "Public Act 103-309, effective January 1, 2024, amended the Private Detective, Private Alarm, Private Security, Fingerprint Vendor, and Locksmith Act, including the licensure qualifications at 225 ILCS 447/15-10.", sourceUrl: "https://ilga.gov/legislation/ilcs/documents/022504470K15-10.htm" }
      ],
      stateFaqs: [
        { q: "How many years of experience does Illinois require and can a degree reduce it?", a: "Three years of full-time investigative work (at least 1,500 hours per year) within the five years before applying. A bachelor's degree in law enforcement or a related field or business credits 2 of the 3 years, and an associate degree or approved military law enforcement training credits 1 year." },
        { q: "What score do I need on the Illinois private detective exam and how long is it good for?", a: "A passing grade is 70 or above under 68 Ill. Adm. Code 1240.10(c). A successful score remains valid for 3 years; after that it is void and the applicant must reapply and retest." },
        { q: "Does Illinois require a surety bond?", a: "No bond is required for individual licensure. Instead, applicants must file proof of at least $1,000,000 in general liability insurance in their own name before the license is issued, and letting the coverage lapse cancels the license without a hearing." },
        { q: "When do Illinois private detective licenses expire?", a: "Every three years on May 31, aligned with IDFPR's uniform renewal calendar. Renewal runs $150 per year of the cycle, or $450 total, filed through the CORE portal." },
        { q: "Can out-of-state investigative experience count in Illinois?", a: "Yes, in part. The Department may accept alternative experience working full-time for an agency licensed in another state, or in a state that does not license agencies at all, if the experience is substantially equivalent to Illinois agency work." }
      ],
      sources: [
        { label: "225 ILCS 447/15-10 - Private Detective Act qualifications for licensure", url: "https://ilga.gov/legislation/ilcs/documents/022504470K15-10.htm", checkedOn: "2026-10" },
        { label: "68 Ill. Adm. Code 1240.10 - Application for examination and licensure (passing score, fingerprints, insurance)", url: "https://ilga.gov/commission/jcar/admincode/068/068012400A00100R.html", checkedOn: "2026-10" },
        { label: "Illinois WorkNet - Detectives, Private licensing summary (IDFPR requirements)", url: "https://apps.illinoisworknet.com/cis/clusters/OccupationDetails/100422?parentId=110700&section=license", checkedOn: "2026-10" },
        { label: "Illinois private detective fees and renewal breakdown (cites 68 Ill. Adm. Code 1240.570)", url: "https://licensenavigator.ai/blog/private-investigator-license-cost-illinois", checkedOn: "2026-10" }
      ]
    },
    IN: {
      agency: "Indiana Professional Licensing Agency - Private Investigator and Security Guard Licensing Board",
      agencyUrl: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/",
      exam: null,
      education: {
        hours: "None required",
        breakdown: "A bachelor's degree or higher in criminal justice or a related field from an accredited institution substitutes entirely for the 4,000-hour experience requirement (874 IAC 1-2-1).",
        onlineAllowed: "Not applicable",
        apprenticeship: null,
        sourceUrl: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/"
      },
      experience: "Two years of work experience documented by at least 4,000 hours in the investigative or security guard field, OR a bachelor's degree or higher in criminal justice or a related field. Experience is verified by employer documentation; there is no examination requirement.",
      eligibility: {
        minAge: 21,
        citizenship: "Not specified",
        education: "High school level implied by experience documentation; degree pathway available",
        other: "No felony convictions or convictions bearing directly on the ability to practice competently, and not currently on probation or parole. Indiana issues firm licenses only - even sole proprietors apply as a Private Investigator Firm, and firm employees work under the firm's license."
      },
      background: {
        method: "Limited criminal history checks from every city, county, and state of residence in the prior seven years, plus Indiana State Police / FBI fingerprint check through the application",
        fee: "Varies by jurisdiction; paid to each records repository",
        disqualifiers: "Felony conviction or a misdemeanor with a direct bearing on competent practice; current probation or parole",
        sourceUrl: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/"
      },
      fees: [
        { item: "Initial license (issuance)", fee: "$300 (or $150 if applying within one year of the next October 1 renewal date)", sourceUrl: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/" },
        { item: "Renewal (every 4 years)", fee: "$300", sourceUrl: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/" },
        { item: "Reinstatement (expired 3 or more years)", fee: "$600 ($300 renewal + $300 application)", sourceUrl: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/" },
        { item: "Liability insurance", fee: "Minimum $100,000 general liability naming the State of Indiana as additional insured (IC 25-30-1-15)", sourceUrl: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/" }
      ],
      application: {
        portal: "MyLicense One (Access Indiana login)",
        portalUrl: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/",
        steps: [
          "Create a MyLicense One account through Access Indiana and select the Initial Application for a Private Investigator Firm.",
          "Upload the experience verification form (4,000 hours) or accredited criminal justice transcripts, plus limited criminal history checks covering every jurisdiction of residence for the past seven years.",
          "Upload a certificate of insurance showing at least $100,000 in general liability coverage with the State of Indiana listed as additional insured; the license is issued only after the certificate is on file.",
          "Pay the $300 issuance fee ($150 if within one year of the quadrennial renewal date) - there is no state examination.",
          "Corporate applicants that are not sole proprietors also upload corporate filings for the firm."
        ],
        processingTime: null,
        sourceUrl: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/"
      },
      renewal: {
        cycle: "Every 4 years; licenses expire October 1 (2023, 2027, and so on)",
        ce: "None",
        fee: "$300",
        late: "A license expired 3 or more years can be reinstated online for $600 ($300 renewal + $300 application)",
        sourceUrl: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/"
      },
      reciprocity: {
        rule: "No formal reciprocity or endorsement provision is published by the Board for private investigator firms.",
        agreements: null,
        sourceUrl: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$41,830", p25: "$37,990", p75: "$53,590", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=IN" },
      localNuance: "Indiana licenses the business entity, not the individual: a solo operator must hold a Private Investigator Firm license, while employees of a licensed firm generally do not need their own license. The license also confers no authority to carry a weapon or make arrests.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/" }
      ],
      stateFaqs: [
        { q: "Is there an exam for an Indiana private investigator license?", a: "No. The Private Investigator and Security Guard Licensing Board does not require a state examination; qualification is through 4,000 hours of documented experience or a criminal justice bachelor's degree, background checks, and board approval." },
        { q: "Do I need an individual license or a firm license in Indiana?", a: "Indiana issues firm licenses only, so even a sole proprietor applies as a Private Investigator Firm. Employees working under a licensed firm generally do not need their own license." },
        { q: "What insurance must an Indiana PI firm carry?", a: "At least $100,000 in general liability coverage that names the State of Indiana as an additional insured, with 10 days' cancellation notice to the Board, per IC 25-30-1-15." },
        { q: "When does the Indiana PI firm license renew?", a: "Every four years on October 1 (2023, 2027, and so on) for $300. The qualifier must also submit state-level limited criminal history checks for the four preceding years; third-party background checks are not accepted." },
        { q: "Does an Indiana PI license let me carry a firearm or make arrests?", a: "No. The Board states plainly that nothing in the statutes or rules authorizes a licensee to carry a weapon, and only sworn law enforcement officers may make arrests." }
      ],
      sources: [
        { label: "Indiana PLA - Private Investigator and Security Guard licensing information (requirements, fees, renewal)", url: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/", checkedOn: "2026-10" },
        { label: "874 IAC 1-2 - Private investigator rules (experience and education standards)", url: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/", checkedOn: "2026-10" },
        { label: "IC 25-30-1-15 - Private investigator firm insurance requirement", url: "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/", checkedOn: "2026-10" },
        { label: "Indiana firm-license structure and application checklist (secondary)", url: "https://privateinvestigatoredu.org/indiana/", checkedOn: "2026-10" }
      ]
    },
    IA: {
      agency: "Iowa Department of Public Safety - Private Investigative / Private Security / Bail Enforcement licensing (Program Services Bureau)",
      agencyUrl: "https://dps.iowa.gov/",
      exam: {
        vendor: "None - the Iowa DPS FAQ states no examination is required for a private investigative license",
        vendorUrl: "https://dps.iowa.gov/media/485/download?inline=",
        parts: [],
        fee: null,
        practical: null,
        languages: ["English"],
        sourceUrl: "https://dps.iowa.gov/media/485/download?inline=",
        sourceNote: "DPS FAQ question 8: 'Do I need to take an examination... No'; older 661 IAC 2.4 rules retain examination language"
      },
      education: {
        hours: "None",
        breakdown: "Iowa imposes no education or experience prerequisite for agency licensure; the qualifying standards are character- and background-based (Iowa Code 80A.4; 661 IAC 2.5).",
        onlineAllowed: "Not applicable",
        apprenticeship: null,
        sourceUrl: "https://dps.iowa.gov/media/485/download?inline="
      },
      experience: "No experience requirement. However, a licensed private investigator and that licensee's employees must complete 12 hours of continuing education in the two years before each license renewal.",
      eligibility: {
        minAge: 18,
        citizenship: "No residency requirement; sworn Iowa peace officers are barred (except reserve officers)",
        education: "None",
        other: "No felony or aggravated misdemeanor conviction (a deferred judgment counts as a conviction until discharge), no weapons or assault-related convictions under Iowa Code 708, no alcohol or controlled substance abuse, no history of repeated violence or mental instability, and good moral character (661 IAC 2.5)."
      },
      background: {
        method: "Two FBI FD-258 fingerprint cards rolled by a law enforcement agency, or Fieldprint enrollment using the DPS code issued after filing; $30 fingerprint background check",
        fee: "$30 per fingerprint set",
        disqualifiers: "Felony or aggravated misdemeanor conviction, weapons and harassment convictions under Iowa Code 708.3-708.9, fugitive status, substance abuse, or a history of repeated acts of violence",
        sourceUrl: "https://dps.iowa.gov/media/485/download?inline="
      },
      fees: [
        { item: "Agency license (2 years)", fee: "$100 per license type", sourceUrl: "https://dps.iowa.gov/media/485/download?inline=" },
        { item: "Employee ID card", fee: "$10 per card type (Form PD2)", sourceUrl: "https://dps.iowa.gov/media/485/download?inline=" },
        { item: "Fingerprint background check", fee: "$30", sourceUrl: "https://dps.iowa.gov/media/485/download?inline=" },
        { item: "Surety bond", fee: "$5,000 bond for a single license type; $10,000 if licensed for more than one Chapter 80A activity (Form PD6)", sourceUrl: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-iowa" },
        { item: "Liability insurance", fee: "Certificate covering general liability, completed operations, and personal injury (false arrest, libel/slander/privacy, wrongful entry) per Iowa Code 80A.10A", sourceUrl: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-iowa" }
      ],
      application: {
        portal: "Iowa DPS licensing portal (ImageTrend)",
        portalUrl: "https://iowadps.imagetrendlicense.com/lms/public/portal#/lookup",
        steps: [
          "Create a portal account and submit a 'Start Your Own Company' request; DPS opens the agency record and then the PD1 agency application can be completed.",
          "Upload a current passport-style photo and submit fingerprints (two FD-258 cards or Fieldprint using the DPS code).",
          "Upload the PD6 surety bond form - $5,000 for a PI-only agency, $10,000 if also holding another Chapter 80A license type.",
          "Upload a certificate of insurance for general liability, completed operations, and personal injury coverage, and pay the $100 license fee plus fingerprint and ID card fees.",
          "LLCs and corporations add Form PD5 or PD7 with evidence of authority to do business in Iowa."
        ],
        processingTime: null,
        sourceUrl: "https://dps.iowa.gov/media/485/download?inline="
      },
      renewal: {
        cycle: "2 years",
        ce: "12 hours of continuing education during the two years before renewal for private investigator licenses",
        fee: "$100 per license type",
        late: "Renewal (Form PD3) is due at least 30 days before expiration",
        sourceUrl: "https://dps.iowa.gov/media/485/download?inline="
      },
      reciprocity: {
        rule: "Iowa does not publish a reciprocity pathway; the DPS FAQ addresses licensing only under Iowa Code chapter 80A.",
        agreements: null,
        sourceUrl: "https://dps.iowa.gov/media/485/download?inline="
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$41,110", p25: "$38,380", p75: "$54,680", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=IA" },
      localNuance: "Iowa requires an employee ID card issued under a specific agency name, so the card is only valid while working for the sponsoring agency; staff who split time between firms need a separate $10 ID card from each. Sworn Iowa peace officers are prohibited from holding these licenses.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://dps.iowa.gov/media/485/download?inline=" }
      ],
      stateFaqs: [
        { q: "Does Iowa require an exam or prior experience to become a private investigator?", a: "No. The DPS FAQ states no examination is required, and there are no education or experience prerequisites - qualification rests on the background standards in 661 IAC 2.5 and Iowa Code 80A.4. Continuing education (12 hours per two-year cycle) applies after licensure." },
        { q: "How much does an Iowa private investigative license cost?", a: "$100 for the two-year agency license, $30 for the fingerprint background check, and $10 per employee ID card - $140 in state fees for a typical solo applicant, plus the $5,000 surety bond premium." },
        { q: "What bond and insurance do I need?", a: "A $5,000 surety bond for a single license type, or $10,000 if you hold more than one Chapter 80A license, filed on Form PD6. You must also show a certificate of insurance covering general liability, completed operations, and personal injury exposures such as false arrest and wrongful entry (Iowa Code 80A.10A)." },
        { q: "Can I work for more than one Iowa agency?", a: "Yes. Iowa law does not prohibit it, but each agency issues its own $10 employee ID card and your card for one agency is invalid while you work for another." },
        { q: "Who is barred from Iowa PI licensure?", a: "Sworn Iowa peace officers (other than reserve officers) cannot be licensed, and applicants with felony or aggravated misdemeanor convictions, weapons or harassment convictions under Iowa Code 708, substance abuse problems, or a history of repeated violence are disqualified." }
      ],
      sources: [
        { label: "Iowa DPS - Private Investigative/Private Security/Bail Enforcement FAQ (fees, exam, CE, ID cards)", url: "https://dps.iowa.gov/media/485/download?inline=", checkedOn: "2026-10" },
        { label: "661 Iowa Administrative Code chapter 2 - Private investigation and private security businesses (license standards 2.5, fees 2.7)", url: "https://www.legis.iowa.gov/docs/ACO/GNAC/iacpdf(7-1-98)/iac/661iac/6612/6612.pdf", checkedOn: "2026-10" },
        { label: "661 IAC consolidated rules PDF (April 2021) - license requirements and examination provisions", url: "https://www.legis.iowa.gov/docs/iac/agency/04-07-2021.661.pdf", checkedOn: "2026-10" },
        { label: "Iowa application forms, bond and insurance requirements (secondary, citing Iowa Code 80A and DPS forms)", url: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-iowa", checkedOn: "2026-10" }
      ]
    },
    KS: {
      agency: "Kansas Attorney General - Private Detective Licensing Unit",
      agencyUrl: "https://www.ag.ks.gov/divisions/civil/licensing-inspections/private-detective-licensing",
      exam: {
        vendor: "Kansas Attorney General (state-written exam included in the application packet, plus an interview)",
        vendorUrl: "https://www.ag.ks.gov/divisions/civil/licensing-inspections/private-detective-licensing",
        parts: [ { name: "Written examination", questions: "Not published", time: "Not published", pass: "Not published" } ],
        fee: null,
        practical: null,
        languages: ["English"],
        sourceUrl: "https://www.ag.ks.gov/divisions/civil/licensing-inspections/private-detective-licensing",
        sourceNote: "K.S.A. 75-7b20 authorizes the exam and interview; the AG packet contains the exam materials"
      },
      education: {
        hours: "None",
        breakdown: "Kansas has no education or experience hour requirement; competency is screened through the written examination and interview rather than documented work history.",
        onlineAllowed: "Not applicable",
        apprenticeship: null,
        sourceUrl: "https://www.kslegislature.gov/laws/075_000_0000_chapter/075_007b_0000_article/075_007b_0004_section/075_007b_0004_k"
      },
      experience: "Kansas mandates no specific years of prior investigative or law enforcement experience. Applicants qualify through the written exam, interview, background check, and character references.",
      eligibility: {
        minAge: 21,
        citizenship: "US citizen (statutory requirement, K.S.A. 75-7b04)",
        education: "High school diploma or GED",
        other: "Five verified personal references from reputable citizens who have known the applicant at least 5 years (the AG may shorten this for honorably discharged veterans), plus two photographs taken within 30 days. Felony convictions and a list of misdemeanors within the prior 10 years (moral turpitude, dishonesty, assault, battery, weapon offenses, and others) are grounds for denial."
      },
      background: {
        method: "Two classifiable fingerprint card sets; one is submitted to the Kansas Bureau of Investigation for a state and national criminal history record check (K.S.A. 75-7b04)",
        fee: null,
        disqualifiers: "Any felony conviction; within the previous 10 years, misdemeanor convictions for moral turpitude, dishonesty, vehicular homicide, assault, battery, criminal restraint, sexual battery, endangering a child, witness intimidation, or weapon offenses",
        sourceUrl: "https://www.kslegislature.gov/laws/075_000_0000_chapter/075_007b_0000_article/075_007b_0004_section/075_007b_0004_k"
      },
      fees: [
        { item: "Application (individual detective)", fee: "$250", sourceUrl: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-kansas" },
        { item: "Application (agency officer/director/partner/associate)", fee: "$100", sourceUrl: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-kansas" },
        { item: "Renewal (every 2 years)", fee: "$175", sourceUrl: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-kansas" },
        { item: "Financial responsibility (choose one)", fee: "$100,000 corporate surety bond, OR $100,000 liability insurance, OR a $100,000 cash deposit with the State Treasurer (K.S.A. 75-7b11)", sourceUrl: "https://www.einvestigator.com/how-to-become-a-licensed-private-investigator-in-kansas" },
        { item: "Optional firearm permit", fee: "$50 (separate permit with training and demonstrated need; $50 renewal)", sourceUrl: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-kansas" }
      ],
      application: {
        portal: "Paper application packet from the Attorney General's Licensing Unit",
        portalUrl: "https://www.ag.ks.gov/divisions/civil/licensing-inspections/private-detective-licensing",
        steps: [
          "Request or download the Private Detective Initial Application packet from the Attorney General; a printed packet request carries a small materials fee credited toward the application fee.",
          "Complete the application with employment history, two passport photos taken within 30 days, and two classifiable fingerprint card sets taken by law enforcement.",
          "Obtain verified reference certificates from five reputable citizens who have known you at least five years, notarized before an officer authorized to take oaths.",
          "Choose and document financial responsibility: a $100,000 surety bond, $100,000 liability insurance, or a $100,000 cash deposit with the State Treasurer.",
          "Complete the written examination in the packet and the subsequent interview; the Attorney General processes applications, with licensing decisions typically within about 90 days."
        ],
        processingTime: "Approximately 90 days from receipt of a complete packet",
        sourceUrl: "https://www.ag.ks.gov/divisions/civil/licensing-inspections/private-detective-licensing"
      },
      renewal: {
        cycle: "2 years",
        ce: "8 hours of Attorney General-approved continuing education per renewal cycle",
        fee: "$175",
        late: null,
        sourceUrl: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-kansas"
      },
      reciprocity: {
        rule: "No reciprocity provision appears in the Private Detective Licensing Act; out-of-state licensees apply like any new applicant.",
        agreements: null,
        sourceUrl: "https://www.kslegislature.gov/laws/075_000_0000_chapter/075_007b_0000_article/075_007b_0004_section/075_007b_0004_k"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$45,260", p25: "$36,900", p75: "$60,610", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=KS" },
      localNuance: "Kansas is one of the few states with no experience-hour mandate; the exam and interview do the screening. Detectives who carry firearms need a separate $50 firearms permit from the Attorney General with documented training and need.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://www.ag.ks.gov/divisions/civil/licensing-inspections/private-detective-licensing" }
      ],
      stateFaqs: [
        { q: "Does Kansas require prior investigative experience?", a: "No. Kansas sets no experience-hour or law enforcement prerequisite. The gate is the Attorney General's written examination plus an interview, along with the five five-year character references and the background check." },
        { q: "What are the five references requirement?", a: "Each of five reputable citizens must attest under oath, before an officer authorized to take oaths, that they have personally known the applicant for at least five years, are not related by blood or marriage, and believe the applicant is honest, of good character, and competent. The Attorney General may shorten the five years for recent honorably discharged military veterans." },
        { q: "How do I satisfy the $100,000 financial responsibility rule?", a: "Three options exist under K.S.A. 75-7b11: a $100,000 corporate surety bond, a $100,000 liability insurance policy, or a $100,000 cash deposit with the State Treasurer. The bond route is the most common." },
        { q: "How much does a Kansas detective license cost and how long does it last?", a: "The individual application fee is $250 ($100 for an agency officer or partner), the two-year renewal is $175, and each renewal cycle requires 8 hours of AG-approved continuing education. An optional firearms permit adds $50." },
        { q: "How long does Kansas take to issue a license?", a: "The Attorney General generally processes a complete application packet within about 90 days of receipt, so plan the fingerprinting and reference collection well ahead." }
      ],
      sources: [
        { label: "Kansas Attorney General - Private Detective Licensing (applications, statutes, regulations, directories)", url: "https://www.ag.ks.gov/divisions/civil/licensing-inspections/private-detective-licensing", checkedOn: "2026-10" },
        { label: "K.S.A. 75-7b04 - Licensure, application, references, qualifications, grounds for denial", url: "https://www.kslegislature.gov/laws/075_000_0000_chapter/075_007b_0000_article/075_007b_0004_section/075_007b_0004_k", checkedOn: "2026-10" },
        { label: "Kansas private detective fees, exam, bond, and CE summary (secondary)", url: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-kansas", checkedOn: "2026-10" },
        { label: "Kansas PI licensing overview including financial responsibility options (secondary)", url: "https://www.einvestigator.com/how-to-become-a-licensed-private-investigator-in-kansas", checkedOn: "2026-10" }
      ]
    },
    KY: {
      agency: "Kentucky Board of Licensure for Private Investigators (Public Protection Cabinet)",
      agencyUrl: "https://kpi.ky.gov/",
      exam: {
        vendor: "Schroeder Measurement Technologies (SMT), under contract to the Board",
        vendorUrl: "https://kpi.ky.gov/",
        parts: [ { name: "Kentucky private investigator examination", questions: "Not published (scaled 150-300)", time: "Not published", pass: "260 scaled" } ],
        fee: "$156 (paid to the testing vendor)",
        practical: null,
        languages: ["English"],
        sourceUrl: "https://licensenavigator.ai/blog/private-investigator-in-kentucky-license-2026",
        sourceNote: "Scores scale 150-300 with 260 passing; content covers constitutional principles, eavesdropping/search and seizure law, and investigator liability (201 KAR 41:030)"
      },
      education: {
        hours: "None",
        breakdown: "Kentucky requires a high school diploma or GED only; no college coursework or training hours apply.",
        onlineAllowed: "Not applicable",
        apprenticeship: null,
        sourceUrl: "https://law.justia.com/codes/kentucky/chapter-329a/section-329a-035"
      },
      experience: "No pre-licensure experience hours are required by statute or regulation; the examination and background standards serve as the qualification screen.",
      eligibility: {
        minAge: 21,
        citizenship: "US citizen or resident alien",
        education: "High school diploma or equivalent (KRS 329A.035(3)(c))",
        other: "No felony license until 10 years after release from sentence or restoration of civil rights; no misdemeanor involving moral turpitude or dishonesty within 5 years; no dishonorable discharge; no revoked peace officer certification; controlled substance and mental fitness exclusions apply. Fire or arson investigators must add current national certification from NAFI or IAAI (KRS 329A.035(1)(c))."
      },
      background: {
        method: "Three sets of classifiable fingerprints; Kentucky State Police and FBI record checks plus an Administrative Office of the Courts statewide court record check",
        fee: "State and federal amounts set under 502 KAR 30:060 and 28 CFR 16.33; paid to the Kentucky State Treasurer",
        disqualifiers: "Felony within 10 years of release or before civil rights restoration; moral turpitude or dishonesty misdemeanor within 5 years; dishonorable discharge; revoked peace officer certification",
        sourceUrl: "https://law.justia.com/codes/kentucky/chapter-329a/section-329a-035"
      },
      fees: [
        { item: "Application (nonrefundable)", fee: "$100", sourceUrl: "https://licensenavigator.ai/blog/private-investigator-in-kentucky-license-2026" },
        { item: "License fee (paid after passing exam)", fee: "$300 (completes the $400 initial total)", sourceUrl: "https://licensenavigator.ai/blog/private-investigator-in-kentucky-license-2026" },
        { item: "Examination", fee: "$156 paid to Schroeder Measurement Technologies", sourceUrl: "https://licensenavigator.ai/blog/private-investigator-in-kentucky-license-2026" },
        { item: "Liability insurance", fee: "$250,000 combined single limit (waived only for investigators working exclusively under attorney supervision)", sourceUrl: "https://law.justia.com/codes/kentucky/chapter-329a/section-329a-035" },
        { item: "Company application (if forming an agency)", fee: "$100 sole proprietorship; $400 firm, association, partnership, or corporation", sourceUrl: "https://privateinvestigatoredu.org/kentucky/" }
      ],
      application: {
        portal: "Board application packet (Individual Application for Licensure)",
        portalUrl: "https://kpi.ky.gov/",
        steps: [
          "Submit the Individual Application with the $100 nonrefundable fee, three fingerprint sets, five-year residence and employment history, and the AOC court record check.",
          "Attach the $250,000 combined single limit liability certificate (not required for attorney-supervised investigators) and, for fire/arson work, national certification.",
          "After the Board confirms eligibility, schedule the SMT exam; you must sit within 60 days of eligibility, pass within 6 months (maximum two attempts, then a 12-month wait).",
          "Submit the $300 license fee upon passing to receive the license and photo ID card.",
          "Sole proprietors and companies file the separate Company Application ($100 or $400 depending on entity type)."
        ],
        processingTime: "Applications commonly take two to three months to evaluate",
        sourceUrl: "https://privateinvestigatoredu.org/kentucky/"
      },
      renewal: {
        cycle: "2 years; renewals due June 30",
        ce: "12 hours of continuing education every two years (201 KAR 41:070)",
        fee: "$250",
        late: "Late renewal is permitted July 1 through August 31 with an added $250 late fee",
        sourceUrl: "https://licensenavigator.ai/blog/private-investigator-in-kentucky-license-2026"
      },
      reciprocity: {
        rule: "Kentucky publishes no reciprocity or endorsement route in KRS chapter 329A; out-of-state investigators apply as new applicants.",
        agreements: null,
        sourceUrl: "https://law.justia.com/codes/kentucky/chapter-329a/section-329a-035"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$47,650", p25: "$40,220", p75: "$56,080", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=KY" },
      localNuance: "Kentucky exempts investigators working exclusively under attorney supervision from the $250,000 insurance requirement, and it requires national fire/arson certification (NAFI or IAAI) before a licensee may conduct fire or arson investigations.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://kpi.ky.gov/" }
      ],
      stateFaqs: [
        { q: "What score do I need on the Kentucky PI exam?", a: "The SMT-administered exam is scaled from 150 to 300 and 260 is passing. After the Board declares you eligible you must sit within 60 days, and you have six months and two attempts to pass before a 12-month waiting period applies." },
        { q: "Does Kentucky require investigative experience?", a: "No. KRS chapter 329A and 201 KAR chapter 41 set no experience-hour requirement; the exam, background standards, and insurance requirement do the screening." },
        { q: "How much does Kentucky licensure cost in total?", a: "Budget $400 to the Board ($100 application plus $300 license fee), $156 to the testing vendor, fingerprint and AOC record fees paid to the State Treasurer, and the premium on a $250,000 liability policy. Renewals run $250 every two years plus 12 CE hours." },
        { q: "Who is exempt from Kentucky's insurance requirement?", a: "The $250,000 combined single limit liability policy is waived for investigators who work exclusively under the supervision of an attorney. Everyone else must file the certificate with the application." },
        { q: "What happens if I miss the June 30 renewal?", a: "The Board allows a late renewal window from July 1 through August 31 with an additional $250 late fee, on top of the regular $250 renewal fee and the 12 hours of CE." }
      ],
      sources: [
        { label: "KRS 329A.035 - Applications for licenses, requirements (age, citizenship, fingerprints, insurance, fire/arson certification)", url: "https://law.justia.com/codes/kentucky/chapter-329a/section-329a-035", checkedOn: "2026-10" },
        { label: "Kentucky Board of Licensure for Private Investigators", url: "https://kpi.ky.gov/", checkedOn: "2026-10" },
        { label: "Kentucky PI exam rules, fees, and renewal details citing 201 KAR 41:020-070 (secondary)", url: "https://licensenavigator.ai/blog/private-investigator-in-kentucky-license-2026", checkedOn: "2026-10" },
        { label: "Kentucky application process and company license fees (secondary)", url: "https://privateinvestigatoredu.org/kentucky/", checkedOn: "2026-10" }
      ]
    },
    LA: {
      agency: "Louisiana State Board of Private Investigator Examiners (LSBPIE)",
      agencyUrl: "https://lsbpie.com/licenseinfo.aspx",
      exam: {
        vendor: "LSBPIE (board-administered examination)",
        vendorUrl: "https://lsbpie.com/licenseinfo.aspx",
        parts: [ { name: "LSBPIE private investigator examination", questions: "Not published", time: "Not published", pass: "75%" } ],
        fee: "$100 exam fee; $25 retake after a 30-day wait",
        practical: null,
        languages: ["English"],
        sourceUrl: "https://lsbpie.com/licenseinfo.aspx",
        sourceNote: "LA R.S. 37:3509 - 75% passing score; retakes after 30 days at $25"
      },
      education: {
        hours: "40-hour board-approved course",
        breakdown: "All applicants must complete a Board-approved 40-hour Basic Private Investigation Preparatory course (covering Louisiana PI law, use of force, safety, and investigative techniques) before sitting for the exam; statutory exemptions exist under LA R.S. 37:3510. The optional board manual costs $50 plus $15 shipping.",
        onlineAllowed: "Courses are offered through approved Louisiana colleges and universities; the board lists approved providers",
        apprenticeship: "Apprentice license: one year, nonrenewable, sponsored by a licensed Louisiana agency, allowing time to complete the 40-hour course and exam",
        sourceUrl: "https://lsbpie.com/licenseinfo.aspx"
      },
      experience: "Individual and journeyman licenses require no prior experience beyond the course and exam. An agency license requires three years of investigative experience within the last ten years, either as a private investigator or in an investigative capacity (LA R.S. 37:3507.2).",
      eligibility: {
        minAge: 18,
        citizenship: "US citizen or resident alien with proper work authorization",
        education: "None beyond the 40-hour course",
        other: "No felony or crime of moral turpitude conviction, no court-declared incompetence (unless restored), and not a practicing alcoholic or drug addict (LA R.S. 37:3507). Corporations must be Louisiana-incorporated or qualified to do business in the state."
      },
      background: {
        method: "Two Louisiana State Police forms plus two fingerprint cards for state and national criminal history checks",
        fee: "$43 background check fee per the LSBPIE fee schedule",
        disqualifiers: "Any felony conviction or conviction for a crime involving moral turpitude (LA R.S. 37:3507)",
        sourceUrl: "http://lsbpie.com/forms/application_Journeyman.pdf"
      },
      fees: [
        { item: "Application package request", fee: "$10 money order (packet is mailed, not downloadable)", sourceUrl: "https://lsbpie.com/licenseinfo.aspx" },
        { item: "Journeyman application (total)", fee: "$339.25 (application, exam, initial license, and background check fees combined)", sourceUrl: "http://lsbpie.com/forms/application_Journeyman.pdf" },
        { item: "Examination", fee: "$100; $25 retake after 30 days", sourceUrl: "https://lsbpie.com/licenseinfo.aspx" },
        { item: "Renewal (annual)", fee: "$150 individual / $300 agency", sourceUrl: "https://licensenavigator.ai/blog/private-investigator-in-louisiana-license-exam-fees" },
        { item: "Returned application processing", fee: "$20 (charged when an incomplete packet is returned)", sourceUrl: "http://lsbpie.com/forms/application_Journeyman.pdf" }
      ],
      application: {
        portal: "Paper application by mail (in-person filing Monday-Thursday, 8:00-10:30 am and 12:30-2:00 pm)",
        portalUrl: "https://lsbpie.com/licenseinfo.aspx",
        steps: [
          "Request the application package in writing with a $10 money order, specifying AGENCY, INDIVIDUAL, APPRENTICE, or JOURNEYMAN.",
          "Complete the board-approved 40-hour Basic Private Investigation Preparatory course through an approved college or university and pass the LSBPIE exam at 75% or better.",
          "Assemble the notarized application, affidavit, driver's license copy, one 5 x 7 color photograph on a light background, two State Police forms, and two fingerprint cards.",
          "Submit the complete packet with the fee (money order or check; no cash or credit cards) - incomplete packets are returned with a $20 processing charge.",
          "Journeyman licensees may only work through LSBPIE-licensed agencies and cannot take cases directly from the public, attorneys, businesses, or government agencies."
        ],
        processingTime: "2-3 months average for mailed applications",
        sourceUrl: "http://lsbpie.com/forms/application_Journeyman.pdf"
      },
      renewal: {
        cycle: "Annual; licenses expire on the anniversary of issuance (LA R.S. 37:3517)",
        ce: "At least 8 hours of continuing education per year, plus the LSBPIE-approved online investigative course every two years (LAC 46:LVII-518)",
        fee: "$150 individual / $300 agency",
        late: null,
        sourceUrl: "https://licensenavigator.ai/blog/private-investigator-in-louisiana-license-exam-fees"
      },
      reciprocity: {
        rule: "Act 253 of 2024 created a licensure-by-endorsement path for investigators currently licensed in other states who meet the board's conditions and pass the Louisiana examination.",
        agreements: null,
        sourceUrl: "https://lsbpie.com/licenseinfo.aspx"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$41,950", p25: "$36,750", p75: "$52,930", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=LA" },
      localNuance: "Louisiana's journeyman license is restricted to agency work - direct-to-client cases require an agency license, which demands three years of investigative experience in the past ten years. Application packets are not downloadable; each costs a $10 money order to request by mail.",
      recentChanges: [
        { year: 2024, change: "Act 253 of the 2024 legislative session added licensure by endorsement, allowing currently licensed out-of-state private investigators to obtain a Louisiana license after meeting board conditions and passing the Louisiana exam.", sourceUrl: "https://lsbpie.com/licenseinfo.aspx" }
      ],
      stateFaqs: [
        { q: "What training and exam does Louisiana require?", a: "Every applicant completes the board-approved 40-hour Basic Private Investigation Preparatory course, then passes the LSBPIE exam with 75% or higher. The exam fee is $100, and a failed attempt can be retaken after 30 days for $25." },
        { q: "Do I need experience for an individual Louisiana PI license?", a: "No - individual and journeyman licenses require only the 40-hour course and exam. Only the agency license requires three years of investigative experience within the last ten years (LA R.S. 37:3507.2)." },
        { q: "How do I get an LSBPIE application?", a: "Packets are not available online. Mail a $10 money order to the board at 7414 Perkins Rd, Suite 120, Baton Rouge, LA 70808 with your name, address, and license type; the board mails the paper packet back." },
        { q: "What can a journeyman licensee do?", a: "A journeyman may only provide investigative services through agencies licensed by LSBPIE. Journeyman investigators cannot contract directly with the public, attorneys, private businesses, or government agencies - that requires an agency license." },
        { q: "Does Louisiana recognize out-of-state PI licenses?", a: "Yes, as of 2024. Act 253 created licensure by endorsement for investigators already licensed in other states, provided they satisfy the board's conditions and pass the Louisiana examination." }
      ],
      sources: [
        { label: "LSBPIE License Info - qualifications (R.S. 37:3507, 37:3509), 40-hour course, exam, application instructions", url: "https://lsbpie.com/licenseinfo.aspx", checkedOn: "2026-10" },
        { label: "LSBPIE Journeyman Application Package and Checklist (fees, fingerprint forms, journeyman scope)", url: "http://lsbpie.com/forms/application_Journeyman.pdf", checkedOn: "2026-10" },
        { label: "Louisiana PI statutory fees, renewal, CE, and Act 253 endorsement (secondary)", url: "https://licensenavigator.ai/blog/private-investigator-in-louisiana-license-exam-fees", checkedOn: "2026-10" },
        { label: "Louisiana license categories, fees, and apprentice pathway (secondary)", url: "https://privateinvestigatoredu.org/louisiana", checkedOn: "2026-10" }
      ]
    },
    ME: {
      agency: "Maine State Police - Weapons and Professional Licensing Unit (Special Investigations)",
      agencyUrl: "https://www.maine.gov/dps/msp/",
      exam: {
        vendor: "Maine State Police (examination administered by the chief of the State Police)",
        vendorUrl: "https://www.maine.gov/dps/msp/",
        parts: [ { name: "Maine professional investigators examination", questions: "Not published", time: "Not published", pass: "Not published (chief prescribes subjects)" } ],
        fee: "$450 due upon passing, in addition to the $71 application fee",
        practical: null,
        languages: ["English"],
        sourceUrl: "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/Professional_Investigator_New%20Application.pdf",
        sourceNote: "32 MRSA 8105(8); after processing, the State Police mails a test date letter with study material"
      },
      education: {
        hours: "None required by coursework",
        breakdown: "Education enters through the qualification pathways: 60 postsecondary credits in a related field or a private investigation certificate (pathway A), or an associate degree in police administration, security management, investigation, law, criminal justice, computer forensics, or a similar field (pathway D).",
        onlineAllowed: "Not applicable",
        apprenticeship: "Investigative assistant sponsorship program under a licensed professional investigator (32 MRSA 8110-B), combined with 60 related college credits or a PI certificate",
        sourceUrl: "https://mainelegislature.org/statutes/32/title32sec8105.html"
      },
      experience: "One of four statutory pathways (32 MRSA 8105(7-A)): (A) investigative assistant sponsorship plus 60 related college credits or a PI certificate; (B) 3 years as a full-time federal investigator or armed forces investigator; (B-1) 3 years holding a substantially equivalent license in another state that grants Maine licensees similar reciprocity; (C) 3 years as a trained law enforcement officer of a state or political subdivision; or (D) 6 years of combined preparation including at least 2 years of nonclerical law- or criminal-justice-related work plus an associate degree or 60 related credits.",
      eligibility: {
        minAge: 21,
        citizenship: "US citizen or resident alien",
        education: "High school graduate or state-granted equivalency",
        other: "Good moral character assessed on the prior 5 years (no crime punishable by a year or more of imprisonment, no domestic abuse incidents, no 3 or more Class D/E convictions or civil violations, no child support arrears, no reckless endangerment); no dishonorable discharge (32 MRSA 8105)."
      },
      background: {
        method: "Criminal record checks through law enforcement agencies under the signed authorization in the application; applicants who lived in another state within the last 5 years must obtain a criminal history record from that state's repository",
        fee: "$21 criminal history check fee (part of the $71 initial fee)",
        disqualifiers: "Conviction of any crime punishable by a maximum sentence of one year or more, dishonorable discharge, or failure of the 5-year good moral character review",
        sourceUrl: "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/Professional_Investigator_New%20Application.pdf"
      },
      fees: [
        { item: "Application (with criminal history check)", fee: "$71 ($50 application + $21 criminal history check), submitted with the packet", sourceUrl: "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/Professional_Investigator_New%20Application.pdf" },
        { item: "License issuance (after passing exam)", fee: "$450 (statutory total $500 for the original biennial license, 32 MRSA 8117)", sourceUrl: "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/ProfessionalInvestigatorsHandbook_.pdf" },
        { item: "Renewal (4-year cycle)", fee: "$500 (refundable if renewal is denied)", sourceUrl: "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/ProfessionalInvestigatorsHandbook_.pdf" }
      ],
      application: {
        portal: "Paper application packet mailed to Maine State Police Weapons and Professional Licensing, 164 State House Station, Augusta, ME 04333",
        portalUrl: "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/Professional_Investigator_New%20Application.pdf",
        steps: [
          "Complete the 5-page Professional Investigator application (third page notarized) plus the DHHS Form 577 and P-3E information release forms.",
          "Attach the $71 fee payable to 'Treasurer, State of Maine,' a high school diploma or GED copy, a color photo taken within six months, a birth certificate or resident alien card, and any military discharge copy.",
          "Include detailed qualification documentation for the chosen 8105 pathway - college transcripts, law enforcement academy certificates, investigative assistant sponsorship records, or employer documentation.",
          "Applicants who lived outside Maine in the last 5 years order criminal history records from each prior state's repository.",
          "After processing, the State Police mails a test date letter with study material; the $450 balance is due on the test date."
        ],
        processingTime: "No published timeline; the review, background check, and exam scheduling take several weeks or more",
        sourceUrl: "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/Professional_Investigator_New%20Application.pdf"
      },
      renewal: {
        cycle: "Initial license runs 2 years; renewals then fall on a 4-year cycle (32 MRSA 8109)",
        ce: "None published",
        fee: "$500 per 4-year renewal (32 MRSA 8117)",
        late: "A license not renewed within 60 days of expiration is treated as a new original application with all original fees and requirements",
        sourceUrl: "https://legis.maine.gov/legis/statutes/32/title32sec8109.html"
      },
      reciprocity: {
        rule: "Maine grants a qualification-pathway equivalent for applicants who held another state's PI license for at least 3 years (32 MRSA 8105(7-A)(B-1)), provided the other state's requirements were substantially equivalent and it grants Maine licensees similar reciprocity; the full Maine application and background process still applies.",
        agreements: null,
        sourceUrl: "https://mainelegislature.org/statutes/32/title32sec8105.html"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$43,830", p25: "$39,580", p75: "$54,070", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=ME" },
      localNuance: "Maine titles its licensees 'professional investigators' and separately licenses entry-level investigative assistants, who log sponsored hours toward the professional investigator pathways. Badges that could suggest peace officer status are prohibited, and licensees must show proof of a valid license to clients before contracting.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://www.maine.gov/dps/msp/" }
      ],
      stateFaqs: [
        { q: "How old do I have to be for a Maine professional investigator license?", a: "21. 32 MRSA 8105(1) sets the minimum age at 21 years, along with high school graduation or equivalency and US citizenship or resident alien status." },
        { q: "What are the experience pathways in Maine?", a: "Four routes qualify you under 32 MRSA 8105(7-A): an investigative assistant sponsorship plus 60 related college credits or a PI certificate; 3 years as a federal or armed forces investigator; 3 years as a trained law enforcement officer; or 6 years combining at least 2 years of law- or criminal-justice-related work with an associate degree or 60 credits. Three years licensed in an equivalent reciprocal state also qualifies." },
        { q: "How much does a Maine PI license cost?", a: "The initial packet requires $71 ($50 application plus $21 criminal history check), and the $450 balance is due when you pass the exam, for a statutory $500 original license. Renewals cost $500 on the 4-year cycle." },
        { q: "What happens if my Maine license lapses?", a: "If you fail to renew within 60 days of expiration, the next application is processed as a brand-new original application - full fees, all qualification requirements, and the exam again. There is no grace period beyond the 60 days." },
        { q: "Can I carry a firearm as a Maine professional investigator?", a: "Only with a concealed handgun permit issued by the chief under Title 25 chapter 252 plus a passing score on the chief's written firearms examination (32 MRSA 8120-A). Badges suggesting peace officer status are prohibited outright." }
      ],
      sources: [
        { label: "32 MRSA 8105 - Professional investigator license qualifications (age 21, pathways, examination)", url: "https://mainelegislature.org/statutes/32/title32sec8105.html", checkedOn: "2026-10" },
        { label: "32 MRSA 8109 and 8117 - renewal cycle and fees (Maine Professional Investigators handbook)", url: "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/ProfessionalInvestigatorsHandbook_.pdf", checkedOn: "2026-10" },
        { label: "Maine State Police - Professional Investigator License New application packet (fees, documents, test-date process)", url: "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/Professional_Investigator_New%20Application.pdf", checkedOn: "2026-10" },
        { label: "32 MRSA 8109 - Renewal of license statute", url: "https://legis.maine.gov/legis/statutes/32/title32sec8109.html", checkedOn: "2026-10" }
      ]
    },
    MD: {
      agency: "Maryland State Police - Licensing Division, Professional Licensing",
      agencyUrl: "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx",
      exam: null,
      education: {
        hours: "None",
        breakdown: "Maryland sets no education or training-hour requirement for the individual Private Detective Certificate; eligibility rests on age, background standards, and agency sponsorship.",
        onlineAllowed: "Not applicable",
        apprenticeship: null,
        sourceUrl: "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx"
      },
      experience: "None for the individual Private Detective Certificate. The Private Detective Agency License requires the firm's qualifying member to be at least 25 and meet one of the State Police's experience routes (such as 5 years as a certified private detective, or 3-5 years in specified investigative or law enforcement roles).",
      eligibility: {
        minAge: 18,
        citizenship: "Not specified on the certification page",
        education: "None",
        other: "Applicants must be sponsored by a licensed private detective agency, and certification applies only to that agency - changing employers requires a new sponsored application. Ineligibility covers felony or crime-of-violence convictions (COMAR 29.04.08.03), narcotics or barbiturate addiction, habitual drunkenness, fugitive status, recent institutionalization for mental disorder without physician clearance, and false application statements."
      },
      background: {
        method: "Livescan fingerprints to the Maryland Criminal Justice Information System (CJIS) and FBI using authorization number 9400082495 and ORI MDMSP6000",
        fee: "CJIS and FBI fees paid to the LiveScan vendor; prints expire 30 days after submission",
        disqualifiers: "Crime of violence as defined in COMAR 29.04.08.03, any felony conviction, drug addiction, habitual drunkenness, fugitive from justice, or a work-related criminal conviction",
        sourceUrl: "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx"
      },
      fees: [
        { item: "Private Detective certification (initial)", fee: "$15 (collected electronically in the Licensing Portal; excludes fingerprint fees)", sourceUrl: "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx" },
        { item: "Private Detective certification (renewal)", fee: "$10", sourceUrl: "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx" },
        { item: "Private Detective Agency license (initial)", fee: "$200 individual / $375 incorporated firm ($375 unincorporated or $750 incorporated for combined detective plus security)", sourceUrl: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-maryland" },
        { item: "Agency insurance (if employing 5 or more detectives)", fee: "At least $1,000,000 commercial general liability including errors and omissions (Md. Bus. Occ. and Prof. 13-304)", sourceUrl: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-maryland" }
      ],
      application: {
        portal: "Maryland State Police Licensing Portal (electronic submission since January 2025)",
        portalUrl: "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx",
        steps: [
          "Submit Livescan fingerprints to CJIS and the FBI first - prints are valid for only 30 days, so the application must be filed within that window.",
          "Create or log into the MSP Licensing Portal account and complete the Private Detective application; upload the LiveScan receipt and a passport-style color photo taken within the prior 30 days, and sign the FBI Privacy Act Statement.",
          "Provide your application number and PIN to the sponsoring private detective agency, which then completes and pays for the application through the portal.",
          "MSP issues the certification for a 3-year term tied to the sponsoring agency; the card is state property and must be returned within 5 days if employment ends.",
          "Renew through the portal at least 90 days before expiration with a fresh LiveScan receipt and the $10 fee; late renewals under 30 days before expiration accrue $5 per day up to $150."
        ],
        processingTime: "Allow up to 90 business days for a complete application",
        sourceUrl: "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx"
      },
      renewal: {
        cycle: "3 years (certification is agency-specific)",
        ce: "None",
        fee: "$10",
        late: "$5 per day up to $150 if the renewal is not filed at least 30 calendar days before expiration (waived for incapacity, hospitalization, military duty, or hardship)",
        sourceUrl: "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx"
      },
      reciprocity: {
        rule: "Maryland publishes no reciprocity or endorsement route; every private detective must hold an MSP certification sponsored by a Maryland-licensed agency.",
        agreements: null,
        sourceUrl: "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx"
      },
      localNuance: "Maryland splits licensing in two: individuals hold a cheap, agency-specific Private Detective Certificate (no exam, no experience), while the business owner holds the Agency License with an age-25 qualifier and experience routes. Armed detective work additionally requires a Maryland Wear and Carry Permit. Agencies employing five or more detectives must carry $1,000,000 in commercial general liability.",
      recentChanges: [
        { year: 2025, change: "In January 2025 the Maryland State Police converted all professional licensing applications, including private detective certification, from paper submission to electronic submission and fee collection through the Licensing Portal.", sourceUrl: "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx" }
      ],
      stateFaqs: [
        { q: "Does Maryland require an exam or experience for a private detective certificate?", a: "No. The State Police certification process has no examination and no minimum experience for individuals - the requirements are age 18, Livescan fingerprints, a photo, and sponsorship by a licensed detective agency. Experience rules apply only to the agency license qualifier." },
        { q: "How much does Maryland private detective certification cost?", a: "The initial certification is $15 and the three-year renewal is $10, both paid in the Licensing Portal. Fingerprint fees are separate and paid to the LiveScan vendor." },
        { q: "What is the 30-day fingerprint rule?", a: "Livescan prints submitted to CJIS and the FBI (ORI MDMSP6000, authorization 9400082495) are valid for only 30 days. If MSP does not receive your application within that window, you must be fingerprinted again." },
        { q: "Can I use my Maryland certification at a new agency?", a: "No. The certification is valid only for the sponsoring agency named in the application. Changing agencies requires a new sponsored application with the new employer, and the old card must be returned within 5 days of termination." },
        { q: "What insurance does a Maryland detective agency need?", a: "Under the Business Occupations and Professions Article, an agency that employs five or more private detectives must maintain at least $1,000,000 in commercial general liability coverage, including errors and omissions and completed operations." }
      ],
      sources: [
        { label: "Maryland State Police - Private Detective Certificate (eligibility, fingerprints, fees, renewal, 2025 portal change)", url: "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx", checkedOn: "2026-10" },
        { label: "COMAR 29.04.08.03 - Private detective certification (fees, photographs, disqualifiers, card rules)", url: "https://www.law.cornell.edu/regulations/maryland/COMAR-29-04-08-03", checkedOn: "2026-10" },
        { label: "Maryland agency license fees, qualifier experience, and insurance thresholds (secondary, citing MSP and Md. Code 13-304)", url: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-maryland", checkedOn: "2026-10" },
        { label: "Maryland private detective application walkthrough (secondary)", url: "https://licensenavigator.ai/blog/private-investigator-license-in-maryland", checkedOn: "2026-10" }
      ]
    }
  }
};
