export default {
  key: 'private-investigator',
  compiledOn: '2026-10-20',
  states: {
    MA: {
      agency: "Massachusetts State Police - Certification Unit (Private Investigator & Watch Guard Licensing)",
      agencyUrl: "https://www.mass.gov/how-to/apply-for-or-renew-a-private-investigator-or-watch-guard-license",
      experience: "Three years of regular employment as a detective doing investigative work, as a member of an investigative service of the United States, or as a police officer of rank above patrolman; alternatively, a police officer in good standing formerly employed at least ten years with the Commonwealth or a political subdivision (M.G.L. c. 147, Section 24).",
      eligibility: {
        citizenship: "The application requires U.S. citizenship under the State Police application process; the statute itself does not state a citizenship rule",
        other: "Three Massachusetts citizens who have known the applicant at least three years, are not relatives, and reside in or do business in the applicant's community must certify honesty and good moral character; applicants may not be currently certified by the Peace Officer Standards and Training (POST) Commission"
      },
      background: {
        method: "Background review by the State Police Certification Unit, including disclosure of criminal history, license discipline, civil judgments, and mental health history on the notarized application",
        disqualifiers: "Any felony conviction, or a conviction under M.G.L. c. 272, Sections 99 or 99A (interception of wire or oral communications), bars licensure",
        sourceUrl: "https://www.mass.gov/info-details/requirements-for-a-private-investigator-license"
      },
      fees: [
        { item: "Original application", fee: "$550", sourceUrl: "https://www.mass.gov/how-to/apply-for-or-renew-a-private-investigator-or-watch-guard-license" },
        { item: "Renewal application", fee: "$150", sourceUrl: "https://www.mass.gov/how-to/apply-for-or-renew-a-private-investigator-or-watch-guard-license" },
        { item: "Surety bond", fee: "$5,000 minimum bond, filed with the application and kept active while licensed", sourceUrl: "https://www.mass.gov/how-to/apply-for-or-renew-a-private-investigator-or-watch-guard-license" }
      ],
      application: {
        portal: "Certification Licensing System (Massachusetts State Police)",
        portalUrl: "https://www.mass.gov/how-to/apply-for-or-renew-a-private-investigator-or-watch-guard-license",
        steps: [
          "Create an account in the Certification Licensing System and complete the Private Investigator & Watch Guard License Form.",
          "Assemble the mailed packet: notarized application, certified check or money order for $550 payable to the Commonwealth of Massachusetts, an original $5,000 surety bond, a certificate of business or LLC formation, a signed release, and certification forms from three reputable citizens.",
          "Include documented employment experience - agencies, dates, and job roles for investigative work.",
          "Mail the packet to the Certification Unit, 485 Maple Street, Danvers, MA 01923.",
          "There is no state examination in the published licensing process; qualification rests on the statutory experience categories and character references."
        ],
        sourceUrl: "https://www.mass.gov/how-to/apply-for-or-renew-a-private-investigator-or-watch-guard-license"
      },
      renewal: {
        cycle: "1 year",
        fee: "$150",
        sourceUrl: "https://www.mass.gov/how-to/apply-for-or-renew-a-private-investigator-or-watch-guard-license"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$50,240", p25: "$42,540", p75: "$94,660", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=MA" },
      localNuance: "Massachusetts licenses both private investigators and watch guard (security) agencies under the same Chapter 147 system through the Colonel of the State Police. Business names may not contain the word 'police' or imply a government connection, and the license must be posted conspicuously at the principal office.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://www.mass.gov/how-to/apply-for-or-renew-a-private-investigator-or-watch-guard-license" }
      ],
      stateFaqs: [
        { q: "Does Massachusetts require an exam to become a private investigator?", a: "No. Neither M.G.L. c. 147 nor the State Police application process includes a licensing examination. Qualification is based on three years of qualifying investigative or police experience plus character references." },
        { q: "How much does a Massachusetts PI license cost?", a: "The original application fee is $550 and the annual renewal is $150, paid by certified check or money order. A $5,000 surety bond must also be filed and kept active for the entire license term." },
        { q: "Who qualifies for the experience requirement?", a: "Three years as a working detective, three years in a U.S. investigative service, three years as a police officer above patrolman rank, or ten years as a police officer in good standing with the Commonwealth or a subdivision of it." },
        { q: "Can current police officers get a Massachusetts PI license?", a: "Applicants may not be currently certified by the POST Commission. Retired officers pending expiration of their POST certification must produce proof they retired in good standing." }
      ],
      sources: [
        { label: "Mass.gov - Apply for or renew a private investigator or watch guard license", url: "https://www.mass.gov/how-to/apply-for-or-renew-a-private-investigator-or-watch-guard-license", checkedOn: "2026-10" },
        { label: "Mass.gov - Requirements for a private investigator license", url: "https://www.mass.gov/info-details/requirements-for-a-private-investigator-license", checkedOn: "2026-10" },
        { label: "M.G.L. Chapter 147, Section 24 (legislature.ma.gov)", url: "http://malegislature.gov/Laws/GeneralLaws/PartI/TitleXX/Chapter147/Section24", checkedOn: "2026-10" },
        { label: "M.G.L. Chapter 147, Section 25 (legislature.ma.gov)", url: "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXX/Chapter147/Section25", checkedOn: "2026-10" }
      ]
    },
    MI: {
      agency: "Michigan Department of Licensing and Regulatory Affairs (LARA) - Professional Investigators, Corporations, Securities & Commercial Licensing",
      agencyUrl: "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/detectives/applicant/licensing-requirements",
      experience: "Three years of full-time qualifying experience: licensed investigative work in another state, employment as an investigative employee of a licensed agency, government investigator/detective/special agent/police officer service, or full-time proprietary or in-house investigative work. A bachelor's or postgraduate degree in police administration, security management, investigation, law, criminal justice, or computer forensics accepted by LARA substitutes for the experience requirement (MCL 338.826).",
      eligibility: {
        minAge: 25,
        citizenship: "U.S. citizen",
        education: "High school education or equivalent",
        other: "No felony convictions; no misdemeanor convictions for dishonesty or fraud, divulging information or evidence, impersonating law enforcement, dangerous weapon offenses, two or more alcohol-related offenses, controlled substances, or assault; no dishonorable military discharge"
      },
      background: {
        method: "Qualification review by LARA under MCL 338.826; five reference statements on the department form are required with the application",
        disqualifiers: "Felony conviction, the misdemeanor categories listed in MCL 338.826(1)(d), or a dishonorable discharge from U.S. military service",
        sourceUrl: "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/detectives/applicant/licensing-requirements"
      },
      fees: [
        { item: "Professional Investigator Agency application", fee: "$750", sourceUrl: "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/detectives/professional-investigator-agency-license/pi-agency-initial-license" },
        { item: "Surety bond or insurance", fee: "$10,000 bond, or liability insurance with statutory limits ($10,000 property damage; $100,000 injury/death to one person; $200,000 per incident)", sourceUrl: "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/detectives/professional-investigator-agency-license/pi-agency-initial-license" },
        { item: "Renewal (every 3 years)", fee: "$300 per agency; $125 per branch office", sourceUrl: "https://licensenavigator.ai/blog/private-investigator-license-cost-michigan" }
      ],
      application: {
        portal: "MiCLEAR",
        portalUrl: "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/detectives/professional-investigator-agency-license/pi-agency-initial-license",
        steps: [
          "Form the business entity - Michigan licenses the agency, and a physical Michigan business location is required under MCL 338.828.",
          "Designate a Qualifying Officer who meets all statutory qualifications (age 25+, citizen, experience or degree, good character).",
          "Upload required documents through MiCLEAR: five reference statements, the $10,000 surety bond or certificate of insurance, entity documentation from the Corporations Division (or county DBA), the Entity Members form, and proof of qualifying experience.",
          "Pay the $750 application fee. LARA must issue or deny within 90 days of a completed application.",
          "LARA's published requirements include no state examination; licensure is granted on the documentation above."
        ],
        sourceUrl: "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/detectives/professional-investigator-agency-license/pi-agency-initial-license"
      },
      renewal: {
        cycle: "3 years",
        fee: "$300 (agency); $125 per branch",
        sourceUrl: "https://licensenavigator.ai/blog/private-investigator-license-cost-michigan"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$48,650", p25: "$38,410", p75: "$61,590", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=MI" },
      localNuance: "Michigan licenses the professional investigator agency rather than the individual. One person - the Qualifying Officer - must personally meet every statutory qualification, and any law enforcement officer working as an investigator needs written permission or documented off-duty employment policy from their agency under MCL 338.826(3).",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/detectives/applicant/licensing-requirements" }
      ],
      stateFaqs: [
        { q: "What is the minimum age for a Michigan professional investigator?", a: "25 years old. Applicants must also be U.S. citizens with a high school education or equivalent, per MCL 338.826 and LARA's licensing requirements page." },
        { q: "Does Michigan require a PI licensing exam?", a: "No. LARA's published requirements and application checklist include no state examination; the degree pathway (police administration, security management, investigation, law, criminal justice, or computer forensics) substitutes for three years of experience." },
        { q: "How much is the Michigan PI license and bond?", a: "The agency application fee is $750, and a $10,000 surety bond or liability insurance at statutory limits ($10,000/$100,000/$200,000) must be posted. Renewal is $300 every three years, plus $125 per branch office." },
        { q: "Who must hold the license - the investigator or the firm?", a: "The agency holds the license. An individual working under a licensed agency does not need a separate professional investigator license, but the Qualifying Officer must meet all age, citizenship, education, and experience requirements." }
      ],
      sources: [
        { label: "Michigan LARA - Professional Investigator Licensing Requirements", url: "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/detectives/applicant/licensing-requirements", checkedOn: "2026-10" },
        { label: "Michigan LARA - Professional Investigator Agency Initial License", url: "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/detectives/professional-investigator-agency-license/pi-agency-initial-license", checkedOn: "2026-10" },
        { label: "MCL 338.826 - Professional Investigator Licensure Act qualifications", url: "http://www.legislature.mi.gov/(S(xdqs0svwg1i10zzft3pianq4))/mileg.aspx?page=getObject&objectName=mcl-338-826&highlight=investigator", checkedOn: "2026-10" },
        { label: "License Navigator - Michigan Private Investigator License cost detail", url: "https://licensenavigator.ai/blog/private-investigator-license-cost-michigan", checkedOn: "2026-10" }
      ]
    },
    MN: {
      agency: "Minnesota Department of Public Safety - Private Detective and Protective Agents Board (PDB)",
      agencyUrl: "https://dps.mn.gov/about-dps/associated-boards-cmtes-and-task-forces/private-detective-and-protective-agents-board",
      experience: "A minimum of 6,000 hours of employment as an investigator with a licensed private detective agency, a United States government investigative service, a city police department or sheriff's office, or another occupation the board finds equivalent in scope, responsibility, and training (Minn. Stat. 326.3382, subd. 2).",
      eligibility: {
        minAge: 18,
        other: "Each signer must state under oath they have attained age 18; the board evaluates good character, competency, and integrity"
      },
      background: {
        method: "Full set of fingerprints and a recent photograph submitted with the application for each person signing",
        disqualifiers: "The board screens for good character, competency, and integrity under Minn. Stat. 326.3382; specific disqualifier lists are set in board rules (Minnesota Rules 7506)",
        sourceUrl: "https://revisor.mn.gov/statutes/cite/326.3382"
      },
      fees: [
        { item: "New private detective license (individual)", fee: "$1,000", sourceUrl: "https://mn.gov/elicense/a-z/?id=1083-230712" },
        { item: "New private detective license (corporation/LLC)", fee: "$1,900", sourceUrl: "https://mn.gov/elicense/a-z/?id=1083-230712" },
        { item: "Surety bond", fee: "$10,000 bond to the State of Minnesota, plus proof of financial responsibility (liability insurance meeting statutory coverage)", sourceUrl: "https://revisor.mn.gov/statutes/cite/326.3382" },
        { item: "Renewal (private detective, by employee count)", fee: "$540 (1 employee); $710 (2-10); $880 (11-25); $1,050 (26-50); $1,220 (51+)", sourceUrl: "https://mn.gov/elicense/a-z/?id=1083-230712" },
        { item: "Officer change (Minnesota manager or qualified representative)", fee: "$950", sourceUrl: "https://mn.gov/elicense/a-z/?id=1083-230712" }
      ],
      application: {
        portal: "Private Detective and Protective Agents Board application packets (paper)",
        portalUrl: "https://mn.gov/elicense/a-z/?id=1083-230712",
        steps: [
          "Complete the current PDI packet (Private Detective/Investigator individual) or PDC packet (corporation/LLC) - the board posts 2026 packet versions on its page.",
          "Obtain references on board forms from five persons who have known the signer at least five years and are not related by blood or marriage.",
          "Include a recent photograph and a full set of fingerprints for each signer.",
          "Submit the employer's sworn statement documenting at least 6,000 hours of investigative employment.",
          "File the $10,000 surety bond and proof of liability insurance, then submit the packet to the board office at 1600 University Ave., Suite 200, St. Paul, MN 55104."
        ],
        sourceUrl: "https://mn.gov/elicense/a-z/?id=1083-230712"
      },
      renewal: {
        cycle: "2 years",
        fee: "Tiered by employee count: $540 to $1,220 for a private detective license",
        sourceUrl: "https://mn.gov/elicense/a-z/?id=1083-230712"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$57,880", p25: "$45,930", p75: "$83,670", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=MN" },
      localNuance: "Minnesota's board separately licenses protective agents (security) and private detectives, with different experience thresholds and fee schedules. Corporate applications require signatures from the CEO, CFO, and qualified representative, and out-of-state firms must add a Minnesota manager signature.",
      recentChanges: [
        { year: 2026, change: "The Minnesota Legislature amended Minn. Stat. 326.3382 (license application requirements), subdivisions 1 and 4, during the 2026 Regular Session (Chapter 83).", sourceUrl: "https://revisor.mn.gov/statutes/cite/326.3382" },
        { year: 2026, change: "The board posted refreshed 2026 application packets (PDI, PAI, PDC, PAC) for all license types.", sourceUrl: "https://mn.gov/elicense/a-z/?id=1083-230712" }
      ],
      stateFaqs: [
        { q: "How much investigative experience does Minnesota require?", a: "6,000 hours as an investigator with a licensed detective agency, a U.S. government investigative service, a police department or sheriff's office, or an equivalent occupation the board accepts - documented under oath by a present or previous employer." },
        { q: "What does a Minnesota private detective license cost?", a: "A new individual license is $1,000 and a new corporation/LLC license is $1,900. Renewal runs every two years on a tiered schedule from $540 (1 employee) to $1,220 (51 or more employees)." },
        { q: "What bond and insurance must Minnesota PIs carry?", a: "A $10,000 surety bond executed to the State of Minnesota, plus proof of financial responsibility - generally general liability, completed operations, and personal injury coverage including false arrest, libel and slander, and privacy violations." },
        { q: "How many references does the Minnesota board require?", a: "Five references on board forms from people who have known the applicant at least five years and are not related by blood or marriage, submitted with fingerprints and a photograph." }
      ],
      sources: [
        { label: "Minnesota eLicense - Private Detectives License (fees and requirements)", url: "https://mn.gov/elicense/a-z/?id=1083-230712", checkedOn: "2026-10" },
        { label: "Minn. Stat. 326.3382 - Application for License", url: "https://revisor.mn.gov/statutes/cite/326.3382", checkedOn: "2026-10" },
        { label: "Minnesota DPS - Private Detective and Protective Agents Board", url: "https://dps.mn.gov/about-dps/associated-boards-cmtes-and-task-forces/private-detective-and-protective-agents-board", checkedOn: "2026-10" },
        { label: "Minnesota Rules 7506.0100-.2900 (board rules)", url: "https://www.revisor.mn.gov/rules/7506/", checkedOn: "2026-10" }
      ]
    },
    MO: {
      agency: "Missouri Board of Private Investigator and Private Fire Investigator Examiners (Division of Professional Registration)",
      agencyUrl: "https://pr.mo.gov/privateinvestigator.asp",
      exam: {
        vendor: "State board (exam administered by the Board of Private Investigator and Private Fire Investigator Examiners)",
        vendorUrl: "https://pr.mo.gov/pi-exam-information.asp",
        parts: [ { name: "Missouri private investigator examination", questions: "100 (50 on statutes, 25 on rules, 25 on general investigative practice)", time: "2 hours", pass: "Passing score set by the board; not published" } ],
        fee: "$80",
        practical: null,
        languages: ["English"],
        sourceUrl: "https://pr.mo.gov/pi-exam-information.asp",
        sourceNote: "20 CSR 2234-5.010 - exam scheduled by the board; candidate must pass within one year of application approval; up to four attempts in 12 months"
      },
      experience: "No fixed hour minimum is published in rule. The board reviews documented prior investigative experience (evaluations, supervisor letters, business licenses, client references, and similar evidence). The examination is waived for applicants with two years of lawful private investigator practice within the past three years, reciprocity-eligible applicants, and qualifying law enforcement applicants under RSMo 324.1146 (20 CSR 2234-5.010).",
      eligibility: {
        minAge: 21,
        citizenship: "U.S. citizen",
        other: "Agency employees must be at least 21 (RSMo 324.1116); applicants document experience to the board and pass a background investigation"
      },
      background: {
        method: "Fingerprint submission through the Missouri State Highway Patrol's approved vendor for both MSHP and FBI checks; fees paid by the applicant to the vendor",
        disqualifiers: "The board conducts a background investigation under RSMo 324.1110; unlicensed practice after August 2007 and falsified fingerprints or photographs are statutory denial grounds (RSMo 324.1112)",
        sourceUrl: "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-2.pdf"
      },
      fees: [
        { item: "Application (individual PI)", fee: "$500", sourceUrl: "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-1.pdf" },
        { item: "Examination", fee: "$80", sourceUrl: "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-1.pdf" },
        { item: "Renewal (2 years)", fee: "$400", sourceUrl: "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-1.pdf" },
        { item: "Liability insurance", fee: "$250,000 minimum general liability, with the board named as certificate holder; workers' compensation if subject to the law", sourceUrl: "https://revisor.mo.gov/main/OneSection.aspx?section=324.1108" }
      ],
      application: {
        portal: "Board paper application (Form 375-1011 for individuals) submitted to the board office",
        portalUrl: "https://pr.mo.gov/privateinvestigator.asp",
        steps: [
          "Submit the board application with the fee, two passport-style photos, and proof of U.S. citizenship.",
          "Provide fingerprints through the Missouri State Highway Patrol approved vendor for MSHP and FBI background checks.",
          "File a certificate of insurance showing at least $250,000 liability coverage naming the board as certificate holder, plus workers' compensation proof or an explanation of exemption.",
          "Take and pass the board examination within one year of application approval, unless the exam is waived by experience, reciprocity, or law-enforcement status.",
          "The board reviews the background and experience documentation and notifies the applicant in writing of its decision."
        ],
        processingTime: "The board does not publish a guaranteed turnaround; applications are reviewed by board staff and the executive director",
        sourceUrl: "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-2.pdf"
      },
      renewal: {
        cycle: "2 years",
        ce: "16 hours of continuing education for individual private investigators (8 hours for agency employees), with course review available through the board",
        fee: "$400",
        late: "$100 late renewal fee",
        sourceUrl: "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-1.pdf"
      },
      reciprocity: {
        rule: "Reciprocity-eligible applicants and applicants with two years of lawful Missouri PI practice within the past three years are exempt from the licensing examination; qualifying law enforcement applicants under RSMo 324.1146 are also exempt.",
        agreements: null,
        sourceUrl: "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-5.pdf"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$41,600", p25: "$37,480", p75: "$51,880", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=MO" },
      localNuance: "State PI licensing IS required in Missouri - a common assumption that it is not is wrong. State law also forbids municipalities from imposing an additional bond, local exam, or occupational tax on licensed PIs, and agency employees have the experience requirement waived so they can start working under a licensed agency immediately.",
      recentChanges: [
        { year: 2021, change: "20 CSR 2234-2.010 was amended effective March 30, 2021, adding approved-vendor fingerprint submission and certificate-of-insurance requirements to the application.", sourceUrl: "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-2.pdf" }
      ],
      stateFaqs: [
        { q: "Does Missouri require an exam for private investigators?", a: "Yes - a 100-question exam (50 statute, 25 rule, 25 practice questions) with a two-hour limit and an $80 fee. It is waived for applicants with two years of lawful PI practice in the past three years, reciprocity-eligible applicants, and qualifying law enforcement applicants." },
        { q: "Is a PI license actually required in Missouri?", a: "Yes. The Board of Private Investigator and Private Fire Investigator Examiners licenses individual PIs under RSMo Chapter 324, and unlicensed practice is a Class A misdemeanor for a first offense and a Class D felony thereafter." },
        { q: "What insurance does a Missouri PI need?", a: "General liability coverage of at least $250,000, evidenced by a certificate of insurance that names the board as certificate holder - a certificate issued by an agent is not acceptable. Workers' compensation proof is required if the business is subject to the law." },
        { q: "What are Missouri's renewal and CE requirements?", a: "Licenses renew every two years for $400. Individual PIs complete 16 continuing education hours (agency employees complete 8), and a $100 late fee applies to late renewals." }
      ],
      sources: [
        { label: "20 CSR 2234-2.010 - Application for Licensure (Missouri Secretary of State)", url: "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-2.pdf", checkedOn: "2026-10" },
        { label: "20 CSR 2234-1.050 - Fees (Missouri Secretary of State)", url: "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-1.pdf", checkedOn: "2026-10" },
        { label: "20 CSR 2234-5.010 - Examination rules (Missouri Secretary of State)", url: "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-5.pdf", checkedOn: "2026-10" },
        { label: "Board exam information page (pr.mo.gov)", url: "https://pr.mo.gov/pi-exam-information.asp", checkedOn: "2026-10" },
        { label: "RSMo 324.1108 - Application and insurance requirements", url: "https://revisor.mo.gov/main/OneSection.aspx?section=324.1108", checkedOn: "2026-10" }
      ]
    },
    MT: {
      agency: "Montana Board of Private Security (Department of Labor & Industry) - Private Security Program",
      agencyUrl: "http://boards.bsd.dli.mt.gov/private-security/license-information/private-investigator",
      exam: {
        vendor: "State board (exam based on MCA Title 37, Chapters 1 and 60 and ARM 24, Chapter 182)",
        vendorUrl: "http://boards.bsd.dli.mt.gov/private-security/license-information/private-investigator",
        parts: [ { name: "Montana private investigator written examination", questions: "Question count not published by the board", time: "Not published", pass: "Passing standard set by the board under ARM 24.182.505" } ],
        practical: null,
        languages: ["English"],
        sourceUrl: "https://rules.mt.gov/gateway/RuleNo.asp?RN=24.182.512",
        sourceNote: "The application must be approved before the exam can be taken; out-of-state applicants must arrange their own proctor and notify the board in writing"
      },
      experience: "Three years of full-time experience (5,400 cumulative hours) performing investigative duties, as a government or military investigator/detective/special agent/peace officer, in fire investigation, or as a licensed insurance investigator (maximum 2,700 hours credit). Up to 2,700 hours may be substituted with the Montana Law Enforcement Academy basic course (900 hours), PI-related training, or criminal justice or law credits from an accredited institution (ARM 24.182.512).",
      eligibility: {
        minAge: 21,
        citizenship: "U.S. citizen or legal permanent resident",
        education: "High school diploma or equivalent",
        other: "No dishonorable military discharge; no felony or crime involving moral turpitude or illegal weapon use without a full pardon; three references not related by blood or marriage, two of whom must be former employers or contract counterparts"
      },
      background: {
        method: "Background investigation including a fingerprint check by the Montana Department of Justice and the FBI",
        disqualifiers: "Felony conviction or crime involving moral turpitude or illegal use or possession of a dangerous weapon, absent a full pardon; judicial declaration of mental incompetence not restored; habitual drunkenness or narcotics addiction (MCA 37-60-303)",
        sourceUrl: "https://mca.legmt.gov/bills/2022/mca/title_0370/chapter_0600/part_0030/section_0030/0370-0600-0030-0030.html"
      },
      fees: [
        { item: "Application", fee: "$80 (all fees non-refundable)", sourceUrl: "http://boards.bsd.dli.mt.gov/private-security/license-information/private-investigator" },
        { item: "Renewal", fee: "$160", sourceUrl: "http://boards.bsd.dli.mt.gov/private-security/license-information/private-investigator" },
        { item: "Late renewal", fee: "$80", sourceUrl: "http://boards.bsd.dli.mt.gov/private-security/license-information/private-investigator" },
        { item: "Liability insurance", fee: "$500,000 occurrence-form commercial general liability including personal injury (errors and omissions coverage also required)", sourceUrl: "https://rules.mt.gov/gateway/RuleNo.asp?RN=24.182.512" },
        { item: "Armed endorsement (optional)", fee: "Firearm endorsement requires completion of a board-certified firearms training program taught by a certified firearms instructor; the prior board checklist listed a $50 endorsement fee", sourceUrl: "http://boards.bsd.dli.mt.gov/Portals/133/Documents/psp/PSP-PI-APP_License-App-Checklist.pdf?ver=2018-07-24-103438-773" }
      ],
      application: {
        portal: "eBiz Montana online licensing (ebiz.mt.gov/POL)",
        portalUrl: "http://boards.bsd.dli.mt.gov/private-security/license-information/private-investigator",
        steps: [
          "Apply online through eBiz Montana or with a paper application, paying the $80 application fee.",
          "Provide proof of education, training, and experience totaling 5,400 hours (or the education substitution).",
          "Submit fingerprints for the Montana DOJ and FBI background check, a passport-style photo, and license verifications from any states where you have held a professional license.",
          "List three references not related by blood or marriage - two must be former employers or firms with a contractual working relationship.",
          "Provide proof of the $500,000 commercial general liability policy; once the application is approved, take the board's written examination."
        ],
        sourceUrl: "http://boards.bsd.dli.mt.gov/Portals/133/Documents/psp/PSP-PI-APP_License-App-Checklist.pdf?ver=2018-07-24-103438-773"
      },
      renewal: {
        cycle: "Annual - renewal window January 1 through March 1",
        fee: "$160",
        late: "$80 late fee",
        sourceUrl: "http://boards.bsd.dli.mt.gov/private-security/license-information/private-investigator"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$47,430", p25: "$42,640", p75: "$55,040", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=MT" },
      localNuance: "Montana issues an optional armed endorsement that requires a board-certified firearms instructor course and separate firearms liability coverage. Out-of-state applicants must locate their own proctor for the written exam and notify the board of the location in writing.",
      recentChanges: [
        { year: 2017, change: "ARM 24.182.512, the private investigator licensure rule setting the 5,400-hour experience requirement and education substitutions, took effect October 28, 2017 and remains the operative rule.", sourceUrl: "https://rules.mt.gov/gateway/RuleNo.asp?RN=24.182.512" }
      ],
      stateFaqs: [
        { q: "How much experience does Montana require for a PI license?", a: "Three years full-time, or 5,400 cumulative hours, in investigative work, government or military investigation, fire investigation, or licensed insurance investigating. Up to 2,700 hours can come from the Montana Law Enforcement Academy basic course, related training, or criminal justice or law coursework." },
        { q: "Does Montana have a PI exam?", a: "Yes. Applicants must pass a written examination based on MCA Title 37, Chapters 1 and 60 and ARM 24, Chapter 182. The application must be approved first, and out-of-state applicants arrange their own proctor." },
        { q: "What insurance does a Montana PI need?", a: "At least $500,000 in occurrence-form commercial general liability insurance that includes personal injury coverage, per ARM 24.182.405. Licensees with a firearm endorsement must also carry firearms liability coverage." },
        { q: "When do Montana PI licenses renew?", a: "Annually between January 1 and March 1. The renewal fee is $160, with an $80 late fee; the application fee for a new license is $80." }
      ],
      sources: [
        { label: "Montana Board of Private Security - Private Investigator license information", url: "http://boards.bsd.dli.mt.gov/private-security/license-information/private-investigator", checkedOn: "2026-10" },
        { label: "ARM 24.182.512 - Private Investigator licensure rule", url: "https://rules.mt.gov/gateway/RuleNo.asp?RN=24.182.512", checkedOn: "2026-10" },
        { label: "MCA 37-60-303 - License or registration qualifications", url: "https://mca.legmt.gov/bills/2022/mca/title_0370/chapter_0600/part_0030/section_0030/0370-0600-0030-0030.html", checkedOn: "2026-10" },
        { label: "Montana Board of Private Security - PI application checklist (PDF)", url: "http://boards.bsd.dli.mt.gov/Portals/133/Documents/psp/PSP-PI-APP_License-App-Checklist.pdf?ver=2018-07-24-103438-773", checkedOn: "2026-10" }
      ]
    },
    NE: {
      agency: "Nebraska Secretary of State - Licensing Division (Private Detectives)",
      agencyUrl: "https://sos.nebraska.gov/sites/default/files/doc/regulations/licensing/PD%20instructions.pdf",
      exam: {
        vendor: "Nebraska Secretary of State (in-house written exam)",
        vendorUrl: "https://sos.nebraska.gov/sites/default/files/doc/Chapter-3.pdf",
        parts: [ { name: "Nebraska private detective license exam", questions: "Question count not published; covers the Private Detective Act (Neb. Rev. Stat. 71-3201 to 71-3213), licensing requirements, debt collection restrictions, bond requirements, wiretapping, trespassing, concealed carry, and related rules", time: "Not published", pass: "Passing score set by rule; a passing score is valid for 2 years" } ],
        practical: null,
        languages: ["English"],
        sourceUrl: "https://sos.nebraska.gov/sites/default/files/doc/Chapter-3.pdf",
        sourceNote: "Title 433, Chapter 3, Section 007 - exam held at times set by the Secretary of State, no more than 30 days after an applicant's request; failed applicants wait 21 days to retake, and three failures make an applicant permanently ineligible"
      },
      experience: "One of the following: 3,000 hours of verifiable experience; 2,500 hours plus an associate degree in a relevant field; or 2,000 hours plus a bachelor's degree in a relevant field.",
      eligibility: {
        minAge: 21,
        citizenship: "U.S. citizen (citizenship attestation form required)",
        other: "Good moral character; persons engaged in the debt collection business or employed by a debt collector under the Collection Agency Act are barred from holding a Nebraska PI license (Neb. Rev. Stat. 71-3205)"
      },
      background: {
        method: "Two fingerprint cards processed through the Nebraska State Patrol for an FBI national criminal history check; the State Patrol also investigates each applicant's character and reputation, which statute allows to take up to ninety days",
        fee: "$38 background check application fee (not required on renewal)",
        disqualifiers: "Felony conviction or crime of moral turpitude; engagement in the debt collection business under the Collection Agency Act",
        sourceUrl: "https://sos.nebraska.gov/sites/default/files/doc/regulations/licensing/PD%20instructions.pdf"
      },
      fees: [
        { item: "Private detective application", fee: "$50", sourceUrl: "https://sos.nebraska.gov/sites/default/files/doc/Chapter-3.pdf" },
        { item: "Private detective agency application", fee: "$100", sourceUrl: "https://sos.nebraska.gov/sites/default/files/doc/Chapter-3.pdf" },
        { item: "Plain clothes investigator application", fee: "$25", sourceUrl: "https://sos.nebraska.gov/sites/default/files/doc/Chapter-3.pdf" },
        { item: "Background check fee", fee: "$38 (each application except renewals)", sourceUrl: "https://sos.nebraska.gov/sites/default/files/doc/Chapter-3.pdf" },
        { item: "Surety bond", fee: "$10,000 bond filed with the Secretary of State (agency and private detective licenses only; typically about $100-$300 annual premium)", sourceUrl: "https://www.law.cornell.edu/regulations/nebraska/433-Neb-Admin-Code-ch-3-SS-004" }
      ],
      application: {
        portal: "Paper application mailed to the Secretary of State Licensing Division, 1201 N Street, Suite 120, Lincoln, NE 68508",
        portalUrl: "https://sos.nebraska.gov/sites/default/files/doc/regulations/licensing/PD%20instructions.pdf",
        steps: [
          "Complete the application with all employment and reference sections filled - the State Patrol returns applications with blanks.",
          "Sign the affidavit with original signatures and include the Authorization for Release of Information.",
          "Attach two passport-size color photographs, two fingerprint cards, a copy of your driver's license, and the U.S. Citizenship Attestation Form.",
          "File the $10,000 surety bond or continuation certificate, signed by both the bonding company and the licensee.",
          "Meet all minimum requirements, then sit for the exam held the third Wednesday of each month at 10:00 AM at the Licensing Division office in Lincoln - contact (402) 471-8606 beforehand."
        ],
        processingTime: "The State Patrol character investigation may take up to 90 days under statute",
        sourceUrl: "https://sos.nebraska.gov/sites/default/files/doc/regulations/licensing/PD%20instructions.pdf"
      },
      renewal: {
        cycle: "2 years - all Nebraska PI licenses expire June 30 of even-numbered years",
        fee: "$25 (private detective renewal; $100 agency; $25 plain clothes investigator)",
        sourceUrl: "https://www.careeronestop.org/Toolkit/Training/find-licenses-detail.aspx?keyword=Private Detectives And Investigators&licenseId=31-3390210000&location=US"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$51,750", p25: "$42,800", p75: "$76,000", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=NE" },
      localNuance: "Nebraska licenses private detectives through the Secretary of State, not the State Patrol - the Patrol only runs the fingerprint background check. A statutory bar prohibits anyone in the debt collection business from holding a PI license, and plain clothes investigators must work for a licensed agency.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://sos.nebraska.gov/sites/default/files/doc/Chapter-3.pdf" }
      ],
      stateFaqs: [
        { q: "Who issues Nebraska private detective licenses?", a: "The Nebraska Secretary of State's Licensing Division in Lincoln, under Neb. Rev. Stat. 71-3201 to 71-3213 and Title 433 Chapter 3. The Nebraska State Patrol handles only the fingerprint background check and character investigation." },
        { q: "When and where is the Nebraska PI exam?", a: "The Secretary of State administers the written exam on the third Wednesday of each month at 10:00 AM at 1201 N Street in Lincoln. Applicants must complete all requirements first, contact the office before testing, and a failed attempt requires a 21-day wait - three failures permanently bar licensure." },
        { q: "What experience is required in Nebraska?", a: "3,000 verifiable hours, or 2,500 hours with a relevant associate degree, or 2,000 hours with a relevant bachelor's degree. Applicants must be at least 21, U.S. citizens, and of good moral character." },
        { q: "Can a debt collector be licensed as a Nebraska PI?", a: "No. State statute explicitly bars anyone engaged in the debt collection business, or employed by a debt collector under the Collection Agency Act, from holding a private detective license." }
      ],
      sources: [
        { label: "Nebraska Secretary of State - Title 433 Chapter 3, Private Detectives (rules PDF)", url: "https://sos.nebraska.gov/sites/default/files/doc/Chapter-3.pdf", checkedOn: "2026-10" },
        { label: "Nebraska Secretary of State - Private Detective License Instructions (PDF)", url: "https://sos.nebraska.gov/sites/default/files/doc/regulations/licensing/PD%20instructions.pdf", checkedOn: "2026-10" },
        { label: "433 Neb. Admin. Code ch. 3 s. 004 - License application requirements", url: "https://www.law.cornell.edu/regulations/nebraska/433-Neb-Admin-Code-ch-3-SS-004", checkedOn: "2026-10" },
        { label: "CareerOneStop - Nebraska Private Detective license profile", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses-detail.aspx?keyword=Private Detectives And Investigators&licenseId=31-3390210000&location=US", checkedOn: "2026-10" }
      ]
    },
    NV: {
      agency: "Nevada Private Investigators Licensing Board (PILB)",
      agencyUrl: "https://pilb.nv.gov/licensing/",
      exam: {
        vendor: "State board (PILB licensee examination)",
        vendorUrl: "https://pilb.nv.gov/licensing/",
        parts: [ { name: "PILB licensing exam", questions: "Question count not published by the board", time: "Not published", pass: "75%" } ],
        practical: null,
        languages: ["English"],
        sourceUrl: "https://pilb.nv.gov/uploadedFiles/pilbnvgov/Content/Licensees/FirstTimeLicenseeInfoSheet.pdf",
        sourceNote: "Exams are offered quarterly in January, April, July, and October; only individual and qualified agent applicants take the exam"
      },
      experience: "At least five years (2,000 hours per year, totaling 10,000 hours) of experience as an investigator, or the equivalent as determined by the Board. Education credit: an associate degree in Police Science or Criminal Justice equals 8 months (1,333 hours); a bachelor's degree in those fields equals 18 months (3,000 hours).",
      eligibility: {
        minAge: 21,
        citizenship: "U.S. citizen or lawfully entitled to remain and work in the United States",
        other: "Good moral character and temperate habits; no felony conviction and no crime involving moral turpitude or illegal use or possession of a dangerous weapon"
      },
      background: {
        method: "Criminal history background check through the FBI and the Nevada Department of Public Safety, funded by a $750 investigation deposit ($250 for each additional license category)",
        disqualifiers: "Any felony conviction, or any crime involving moral turpitude or the illegal use or possession of a dangerous weapon",
        sourceUrl: "https://pilb.nv.gov/uploadedFiles/pilbnvgov/Content/Licensees/FirstTimeLicenseeInfoSheet.pdf"
      },
      fees: [
        { item: "Application processing", fee: "$20 per application (non-refundable)", sourceUrl: "https://pilb.nv.gov/uploadedFiles/pilbnvgov/Content/Licensees/FirstTimeLicenseeInfoSheet.pdf" },
        { item: "Examination", fee: "$100 per category (non-refundable)", sourceUrl: "https://pilb.nv.gov/uploadedFiles/pilbnvgov/Content/Licensees/FirstTimeLicenseeInfoSheet.pdf" },
        { item: "Background investigation deposit", fee: "$750 for the first category, $250 for each additional category; applicant is liable for the entire investigation cost", sourceUrl: "https://pilb.nv.gov/uploadedFiles/pilbnvgov/Content/Licensees/FirstTimeLicenseeInfoSheet.pdf" },
        { item: "Abeyance fee", fee: "$100 per license per year", sourceUrl: "https://pilb.nv.gov/uploadedFiles/pilbnvgov/Content/Licensees/FirstTimeLicenseeInfoSheet.pdf" },
        { item: "Liability insurance", fee: "$200,000 minimum liability policy from an insurer authorized in Nevada, or approved self-insurance (NRS 648.135)", sourceUrl: "https://www.leg.state.nv.us/nrs/nrs-648.html" },
        { item: "Annual license fee", fee: "$500 per category per year, prorated by month for licenses issued after July 1", sourceUrl: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-nevada" }
      ],
      application: {
        portal: "PILB paper application (contact pilbinfo@pilb.nv.gov; offices in Carson City and Las Vegas)",
        portalUrl: "https://pilb.nv.gov/licensing/",
        steps: [
          "Submit the license application with the $20 processing fee, $750 background investigation deposit, and $100 exam fee.",
          "Document 10,000 hours of investigative experience on board certification forms, applying any allowable education credit.",
          "Complete the FBI and Nevada DPS criminal history background checks, including fingerprints.",
          "After the application is complete, the board notifies you of the next quarterly exam date (January, April, July, or October); a score of 75% or better is required.",
          "Provide proof of the $200,000 liability insurance policy or self-insurance, then pay the prorated annual license fee upon approval."
        ],
        sourceUrl: "https://pilb.nv.gov/uploadedFiles/pilbnvgov/Content/Licensees/FirstTimeLicenseeInfoSheet.pdf"
      },
      renewal: {
        cycle: "1 year - licenses expire June 30 each year",
        fee: "Renewal fee prescribed under NRS 648.120 ($500 per category per year); window open May 15 through June 30",
        sourceUrl: "https://pilb.nv.gov/licensing/"
      },
      wages: null,
      localNuance: "Nevada requires liability insurance ($200,000 minimum) or self-insurance rather than a surety bond. Employees of licensed companies need a PILB work card instead of a full license, and licensees must maintain a principal place of business in Nevada with the license name and number in all advertising.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://pilb.nv.gov/licensing/" }
      ],
      stateFaqs: [
        { q: "How much experience does Nevada require for a PI license?", a: "Five years, totaling 10,000 hours, as an investigator. An associate degree in Police Science or Criminal Justice counts as 1,333 hours and a bachelor's degree in those fields counts as 3,000 hours toward the total." },
        { q: "What is the Nevada PILB exam like?", a: "It is a board-administered exam requiring a 75% score, offered quarterly in January, April, July, and October. It costs $100 per category and is required only for individual and qualified agent applicants." },
        { q: "Does Nevada require a bond for private investigators?", a: "No surety bond. Instead, NRS 648.135 requires a liability policy of at least $200,000 from a Nevada-authorized insurer, or board-approved self-insurance, kept in force at issuance and every annual renewal." },
        { q: "What does Nevada PI licensing cost?", a: "Budget for the $20 processing fee, $750 background investigation deposit ($250 per additional category), $100 exam fee, and a $500 annual license fee per category prorated from July 1. Licenses expire June 30 and renew between May 15 and June 30." }
      ],
      sources: [
        { label: "Nevada PILB - Licensing page", url: "https://pilb.nv.gov/licensing/", checkedOn: "2026-10" },
        { label: "Nevada PILB - First-Time Licensee Information Sheet (PDF)", url: "https://pilb.nv.gov/uploadedFiles/pilbnvgov/Content/Licensees/FirstTimeLicenseeInfoSheet.pdf", checkedOn: "2026-10" },
        { label: "NRS Chapter 648 - Private Investigators (NRS 648.135 insurance requirement)", url: "https://www.leg.state.nv.us/nrs/nrs-648.html", checkedOn: "2026-10" },
        { label: "License Navigator - Nevada Private Investigator Licensing (fee detail)", url: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-nevada", checkedOn: "2026-10" }
      ]
    },
    NH: {
      agency: "New Hampshire Department of Safety, Division of State Police - Permits and Licensing Unit",
      agencyUrl: "https://www.nhsp.dos.nh.gov/sites/g/files/ehbemt461/files/inline-documents/sonh/dssp259.pdf",
      experience: "Except for employees, one of: four years as a full-time law enforcement officer (federal, state, county, college/university, or municipal), director of security or senior officer of a company or licensed security service, or full-time adjuster/risk manager/claims investigator; an associate or bachelor of science in criminal justice or fire service, or ASIS certified professional investigator or NALI certified legal investigator credential, plus two years as a full-time agency investigator; four years as a full-time investigator for a licensed PI agency; four years as a full-time firefighter with International Association of Arson Investigators certification; or ASIS certification in security operations or executive protection plus two years providing those services (RSA 106-F:5, VII).",
      eligibility: {
        minAge: 18,
        citizenship: "Resident of the United States",
        other: "No felony convictions of any type; no disqualifying misdemeanor convictions for theft, honesty, fraud, controlled substances, or misdemeanor crimes of violence, domestic violence, or abuse; no active domestic violence protective order"
      },
      background: {
        method: "Criminal record check ($25 fee) and background investigation ($10 fee) per RSA 106-F:8; three character references unrelated to the applicant receive questionnaires; armed applicants submit fingerprints at State Police headquarters plus a $26.50 fingerprinting fee and FBI check",
        disqualifiers: "Felony record or the misdemeanor categories listed above, judged by the Commissioner of Safety",
        sourceUrl: "https://www.nhsp.dos.nh.gov/sites/g/files/ehbemt461/files/inline-documents/sonh/dssp259.pdf"
      },
      fees: [
        { item: "Individual PI license application", fee: "$150, plus $25 criminal record check and $10 background investigative fee", sourceUrl: "https://www.nhsp.dos.nh.gov/sites/g/files/ehbemt461/files/inline-documents/sonh/dssp259.pdf" },
        { item: "Agency license", fee: "$150 for an agency employing one licensed person; $350 for more than one (per RSA 106-F:7), plus $25 criminal record check and $10 background fee", sourceUrl: "https://gc.nh.gov/rsa/html/VII/106-F/106-F-7.htm" },
        { item: "Employee license", fee: "$5, plus $25 criminal record check and $10 background investigative fee", sourceUrl: "https://www.nhsp.dos.nh.gov/sites/g/files/ehbemt461/files/inline-documents/sonh/dssp247.pdf" },
        { item: "Surety bond", fee: "$50,000 two-year bond in the licensee's name, running concurrent with the license; increases $50,000 for each additional license type held", sourceUrl: "https://gc.nh.gov/rsa/html/VII/106-F/106-F-mrg.htm" },
        { item: "Armed status", fee: "$26.50 fingerprinting; armed investigators must pass an annual firearms proficiency course with a 75% minimum score and four hours of instruction", sourceUrl: "https://gc.nh.gov/rsa/html/VII/106-F/106-F-mrg.htm" }
      ],
      application: {
        portal: "Paper applications (DSSP 259 individual, DSSP 258 agency, DSSP 247 employee) filed with the Division of State Police, 33 Hazen Drive, Concord",
        portalUrl: "https://www.nhsp.dos.nh.gov/sites/g/files/ehbemt461/files/inline-documents/sonh/dssp259.pdf",
        steps: [
          "Complete the individual application (DSSP 259) and list three unrelated persons who will receive character questionnaires.",
          "Obtain a two-year, $50,000 surety bond on the approved form, dated to run concurrent with the license.",
          "Include the $150 fee plus the $25 criminal record check fee and $10 background investigative fee; armed applicants add $26.50 for fingerprinting, scheduled by appointment.",
          "Submit complete, verifiable documentation of the minimum experience standards under RSA 106-F:5, VII.",
          "There is no state licensing examination; qualification is by the documented experience pathways and background review."
        ],
        sourceUrl: "https://www.nhsp.dos.nh.gov/sites/g/files/ehbemt461/files/inline-documents/sonh/dssp259.pdf"
      },
      renewal: {
        cycle: "2 years",
        fee: "Same fee schedule as initial application ($150 individual or $350 agency per RSA 106-F:7); renewal applications due at least 15 days before expiration with certified evidence the bond remains in force",
        sourceUrl: "https://gc.nh.gov/rsa/html/VII/106-F/106-F-7.htm"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$65,370", p25: "$46,970", p75: "$78,300", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=NH" },
      localNuance: "New Hampshire issues three separate license types - individual, agency, and employee - each with its own application and fee, and the $50,000 bond must increase by another $50,000 for each additional license type held. Armed licensees must complete annual firearms proficiency, and all licensees carry a State Police photo identification card.",
      recentChanges: [
        { year: 2019, change: "Chapter 106-F was recodified effective July 1, 2019, moving private investigator licensing from the 'private detective' framework to the current 'private investigator' licensing structure under the Commissioner of Safety.", sourceUrl: "https://gc.nh.gov/rsa/html/VII/106-F/106-F-mrg.htm" }
      ],
      stateFaqs: [
        { q: "Does New Hampshire require an exam for private investigators?", a: "No state licensing examination is required. Qualification is based on documented experience - typically four years of full-time law enforcement or investigative work, or a degree or professional certification plus two years of agency investigation." },
        { q: "What does a New Hampshire PI license cost?", a: "An individual license costs $150 plus a $25 criminal record check fee and a $10 background investigative fee. Agencies pay $150 (one licensed employee) or $350 (more than one), and employee licenses cost $5 plus the same check fees." },
        { q: "What bond does New Hampshire require?", a: "A two-year, $50,000 surety bond in the individual's or agency's name, running concurrent with the license. The principal sum increases by $50,000 for each additional license type held." },
        { q: "How long is a New Hampshire PI license valid?", a: "Two years. Renewal applications must be submitted at least 15 days before expiration and include certified evidence that the surety bond remains in force." }
      ],
      sources: [
        { label: "New Hampshire State Police - Individual PI Application DSSP 259 (PDF)", url: "https://www.nhsp.dos.nh.gov/sites/g/files/ehbemt461/files/inline-documents/sonh/dssp259.pdf", checkedOn: "2026-10" },
        { label: "New Hampshire State Police - Agency PI Application DSSP 258 (PDF)", url: "https://www.nhsp.dos.nh.gov/sites/g/files/ehbemt461/files/inline-documents/sonh/dssp258.pdf", checkedOn: "2026-10" },
        { label: "RSA Chapter 106-F - Private Investigators, Security Guards, and Bail Recovery Agents", url: "https://gc.nh.gov/rsa/html/VII/106-F/106-F-mrg.htm", checkedOn: "2026-10" },
        { label: "RSA 106-F:7 - License Application and Renewal Fees", url: "https://gc.nh.gov/rsa/html/VII/106-F/106-F-7.htm", checkedOn: "2026-10" },
        { label: "CareerOneStop - New Hampshire Private Investigator license profile", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses-detail.aspx?keyword=Private Investigator (Detective)&licenseId=33-POL02&location=US", checkedOn: "2026-10" }
      ]
    },
    NJ: {
      agency: "New Jersey State Police - Private Detective Unit (PDU)",
      agencyUrl: "https://www.njsp.org/private-detective/",
      experience: "At least five years of experience as an investigator for a licensed investigative agency, or as a police officer with an organized police department of the State, a county or municipality, or with an investigative agency of the United States or any state, county, or municipality (N.J.S.A. 45:19-12).",
      eligibility: {
        minAge: 25,
        citizenship: "U.S. citizen (required)",
        other: "Good character, competency, and integrity; active law enforcement officers and investigators may not hold a PI license or serve as a qualifying member, officer, or director (NJAC 13:55-1.8); an individual may qualify only one agency"
      },
      background: {
        method: "Comprehensive background investigation including criminal history fingerprint check through the State Bureau of Identification and a credit check - derogatory, delinquent, or past-due accounts must be documented and resolved before licensing; five unrelated reputable citizens over 21 sign character vouchers",
        fee: "$30 SBI fee plus fingerprint vendor fee",
        disqualifiers: "Non-citizenship, active law enforcement status, poor credit left unaddressed, and failure to satisfy the experience qualification under N.J.S.A. 45:19-12",
        sourceUrl: "https://www.nj.gov/njsp/private-detective/pdf/sp-171-instructions_2020.pdf"
      },
      fees: [
        { item: "Individual license (per location)", fee: "$250", sourceUrl: "https://law.justia.com/codes/new-jersey/title-45/section-45-19-12/" },
        { item: "Firm, association, or corporation license (per location)", fee: "$300", sourceUrl: "https://law.justia.com/codes/new-jersey/title-45/section-45-19-12/" },
        { item: "Renewal (every 2 years, per location)", fee: "$200 individual; $250 firm/LLC/corporation", sourceUrl: "https://law.justia.com/codes/new-jersey/title-45/section-45-19-12/" },
        { item: "Surety bond", fee: "$3,000 (individual) or $5,000 (firm/association/corporation), with an authorized surety, for the benefit of persons injured by willful, malicious, or wrongful acts", sourceUrl: "https://law.justia.com/codes/new-jersey/title-45/section-45-19-12/" },
        { item: "Fingerprint/background", fee: "$30 State Bureau of Identification fee plus fingerprint vendor fee", sourceUrl: "https://www.nj.gov/njsp/private-detective/pdf/sp-171-instructions_2020.pdf" }
      ],
      application: {
        portal: "Paper application SP-171 mailed to NJSP Private Detective Unit, P.O. Box 7068, West Trenton, NJ 08628",
        portalUrl: "https://www.nj.gov/njsp/private-detective/pdf/sp-171-instructions_2020.pdf",
        steps: [
          "Complete form SP-171, indicating one license type, and have the application notarized.",
          "Pay the non-refundable fee ($250 individual, $300 LLC/corporation) by cashier's check, certified check, business check, or money order payable to the State of New Jersey - no personal checks.",
          "List all members or officers from the current corporate or LLC filing; out-of-state applicants must also file with the NJ Department of Treasury.",
          "Submit a head-and-shoulders photo, five character vouchers from unrelated reputable citizens over 21, the notarized Authorization for Release of Information, and employer affirmations of the qualifying experience.",
          "Complete fingerprinting per the PDU instructions; qualification is by the five-year experience documentation and background investigation - the published process includes no licensing examination."
        ],
        sourceUrl: "https://www.nj.gov/njsp/private-detective/pdf/sp-171-instructions_2020.pdf"
      },
      renewal: {
        cycle: "2 years",
        fee: "$200 (individual) or $250 (firm/LLC/corporation) per location; renewal form SP-415 should reach the PDU within two weeks of expiration",
        late: "Renewals received after expiration may require the licensee to cease operation and reapply",
        sourceUrl: "https://www.njsp.org/faqs-pdu"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$54,710", p25: "$42,890", p75: "$91,990", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=NJ" },
      localNuance: "The license is issued per physical location, so each branch office requires its own fee. A PI license covers investigative work only - security guards and executive protection fall under SORA - and out-of-state residents may be licensed if they meet all qualifications.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://www.njsp.org/private-detective/" }
      ],
      stateFaqs: [
        { q: "What are the qualifications for a New Jersey private detective license?", a: "Age 25 or older, U.S. citizenship, good character and integrity, and at least five years of experience as an investigator or police officer with an organized department or federal/state investigative agency. A comprehensive background investigation with fingerprint and credit checks follows." },
        { q: "Does New Jersey require a PI exam?", a: "The published qualifications and application process under the Private Detective Act of 1939 include no licensing examination - qualification rests on the five-year experience requirement, references, and the background investigation." },
        { q: "What does a New Jersey PI license cost?", a: "$250 per location for an individual or $300 for a firm/LLC/corporation, plus a $3,000 (individual) or $5,000 (firm) surety bond. Renewal every two years is $200 or $250 per location respectively." },
        { q: "Can a current police officer hold a New Jersey PI license?", a: "No. Under NJAC 13:55-1.8, active law enforcement officers and investigators may not hold a private detective license or serve as a qualifying member, officer, or director of a licensed firm." }
      ],
      sources: [
        { label: "New Jersey State Police - Private Detective Unit forms and information", url: "https://www.njsp.org/private-detective/", checkedOn: "2026-10" },
        { label: "NJSP - Private Detective License Application Instructions SP-171 (PDF)", url: "https://www.nj.gov/njsp/private-detective/pdf/sp-171-instructions_2020.pdf", checkedOn: "2026-10" },
        { label: "NJSP - Private Detective Unit FAQ", url: "https://www.njsp.org/faqs-pdu", checkedOn: "2026-10" },
        { label: "N.J.S.A. 45:19-12 - License fees, bond, duration, qualifications", url: "https://law.justia.com/codes/new-jersey/title-45/section-45-19-12/", checkedOn: "2026-10" }
      ]
    }
  }
};
