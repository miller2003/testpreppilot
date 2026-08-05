export const programs = [
  {
    id: 'american-farriers-association',
    body: 'American Farrier’s Association',
    bodyUrl: 'https://americanfarriers.org/',
    about: 'The American Farrier\'s Association (AFA) is the national trade and certification body for professional farriers in the United States. Its voluntary certification ladder sets the only broadly recognised benchmark for hoof-care skill, from entry-level trimming through journeyman forging and therapeutic endorsement.',
    registrationSteps: [
      { title: 'Join the AFA as a member', description: 'Candidates must hold a current AFA membership to register for any certification exam. Membership is purchased on the AFA website before booking.', duration: '15 minutes' },
      { title: 'Confirm experience and prerequisites', description: 'Choose the level that matches your experience: CF needs about one year of horseshoeing, CJF and CTF need the CF plus roughly two years. The Therapeutic Endorsement requires an active CJF.', note: 'AFA membership is required at every level.' },
      { title: 'Register for the written exam', description: 'Sign up through the AFA site, usually around the annual convention or a hosted certification event. Written-only and combined written-plus-shoe options are offered.', duration: '20 minutes' },
      { title: 'Sit the practical shoeing module', description: 'At the testing event, complete the hands-on forging and shoeing portion judged against national standards, plus a horseshoe display.', duration: 'Half to full day' }
    ],
    proctoring: 'Exams are delivered in person at AFA-hosted certification events and conventions, judged by AFA-registered examiners. There is no remote option; candidates must attend the event.',
    retakePolicy: 'Failed modules can be retaken at a later certification event for the applicable per-module fee. The written and shoe exams are priced separately.',
    recertification: 'AFA certifications are maintained through continuing education and periodic recertification requirements; contact the AFA office for the current cycle and fees.',
    scoreReporting: 'Results are announced on site by the examining team and recorded with the AFA certification office.',
    providersNote: 'Preparation comes through apprenticeship, farrier schools, and AFA clinic education. The AFA itself does not sell a single approved course; beware of schools that promise "graduation certification".',
    sourceUrl: 'https://americanfarriers.org/page/certification',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'national-cattlemens-beef-association',
    body: 'National Cattlemen’s Beef Association',
    bodyUrl: 'https://www.bqa.org/',
    about: 'The National Cattlemen\'s Beef Association (NCBA) runs the Beef Quality Assurance (BQA) programme, a producer-funded training and certification system that teaches cattle handling, animal-health product use, records and food-safety practices across US beef operations.',
    registrationSteps: [
      { title: 'Choose a BQA delivery format', description: 'Complete BQA through a free online self-study course at BQA.org, an in-person state workshop, or a chute-side programme led by a state coordinator.', duration: '1-3 hours online' },
      { title: 'Work through the modules', description: 'Study cattle handling, injection-site management, herd health records, withdrawal times and the BQA stockmanship principles.', duration: '2-4 hours' },
      { title: 'Pass the assessment', description: 'Complete the end-of-module checks or the certification exam administered by your state BQA coordinator.', duration: '30-60 minutes' },
      { title: 'Receive your certification', description: 'Your state coordinator issues the BQA certificate, typically valid for a set number of years before renewal is required.' }
    ],
    proctoring: 'The online course is untimed and self-administered; in-person workshops are led by state BQA coordinators. No formal test centre is used.',
    retakePolicy: 'If a module check is failed, review the material and retake it; the programme is built for comprehension rather than a hard pass gate.',
    recertification: 'BQA certification is renewed by completing updated training, commonly on a multi-year cycle, through the state coordinator or BQA.org.',
    scoreReporting: 'Certification status is recorded by the state BQA programme and a certificate is issued to the producer.',
    providersNote: 'BQA is delivered state by state. Start at BQA.org to find your state coordinator and the nearest free or low-cost option.',
    sourceUrl: 'https://www.bqa.org/',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'association-for-animal-welfare-advancement',
    body: 'The Association for Animal Welfare Advancement',
    bodyUrl: 'https://theaawa.org/',
    about: 'The Association for Animal Welfare Advancement (formerly SAWA) supports leaders of animal shelters and welfare organisations. Its Certified Animal Welfare Administrator (CAWA) credential recognises management and leadership competence for people running animal welfare agencies.',
    registrationSteps: [
      { title: 'Confirm eligibility', description: 'CAWA is aimed at professionals with animal-welfare leadership experience, typically a combination of education and management tenure in the field.', note: 'Exact hour and title requirements are set by the association\'s application.' },
      { title: 'Submit the application', description: 'Apply through the association with documentation of your leadership experience and any required references.', duration: '30-60 minutes' },
      { title: 'Schedule the exam', description: 'Once approved, book the CAWA examination, which is delivered online through a proctored platform.', note: 'Confirm the current delivery method and fee with the association.' },
      { title: 'Prepare and sit the exam', description: 'Study governance, finance, operations, human resources and community programmes, then complete the timed exam.', duration: 'Exam day' }
    ],
    proctoring: 'The CAWA exam is delivered online with remote proctoring. Candidates need a quiet space, a webcam and photo ID.',
    retakePolicy: 'Candidates who do not pass may reapply per the association\'s published retake rules; confirm current waiting periods and fees.',
    recertification: 'CAWA holders maintain the credential through continuing education and renewal; check the association for the current cycle and fee.',
    scoreReporting: 'Scores are released through the association after the exam window closes.',
    providersNote: 'Study the association\'s body of knowledge and its conferences; third-party CAWA prep is limited, so lean on official materials.',
    sourceUrl: 'https://theaawa.org/',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'certification-council-for-professional-dog-trainers',
    body: 'Certification Council for Professional Dog Trainers',
    bodyUrl: 'https://www.ccpdt.org/',
    about: 'The Certification Council for Professional Dog Trainers (CCPDT) is the leading independent certifying body for dog-training and behaviour professionals. Its NCCA-accredited exams test science-based learning theory, ethology and professional ethics rather than any one school\'s curriculum.',
    registrationSteps: [
      { title: 'Log your qualifying hours', description: 'Document the required hands-on experience (300 hours for CPDT-KA / CBCC-KA within the last three years) using the CCPDT behaviour/experience log.', duration: 'Ongoing' },
      { title: 'Apply by the deadline', description: 'Submit the online application with your attestation and fee during the spring or fall window. Late applications add a fee.', duration: '30 minutes' },
      { title: 'Schedule your appointment', description: 'Book a computer-based testing slot at a US/Canada centre or via live remote proctoring during the published testing period.', duration: '15 minutes' },
      { title: 'Sit the exam', description: 'Complete the timed multiple-choice exam, then receive your pass/fail result by email from the testing company.', duration: '3 hours' }
    ],
    proctoring: 'Exams are delivered by Professional Testing Corporation at testing centres and via live remote proctoring with webcam ID checks. The CPDT-KSA skills assessment is a video submission instead.',
    retakePolicy: 'Failed candidates may retake in a later testing period after reapplying; the recertification exam may also be used to regain status.',
    recertification: 'CPDT-KA, CPDT-KSA and CBCC-KA are renewed every three years by earning 36 CEUs and paying the $220 recertification fee, or by retaking the exam.',
    scoreReporting: 'Individual scores are released by email only to the candidate; aggregate pass data is used for research but not published as a single rate.',
    providersNote: 'Official study objectives, handbooks and two practice tests are sold by CCPDT. Many reputable academies teach to the blueprint; avoid "buy a certificate" outfits.',
    sourceUrl: 'https://www.ccpdt.org/about',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'equissage',
    body: 'Equissage',
    bodyUrl: 'https://www.equissage.com/',
    about: 'Equissage is a provider of equine massage and animal rehabilitation training. Its Certified Equine Massage Therapist (CEMT) programme combines distance-learning anatomy and technique study with a hands-on practical component.',
    registrationSteps: [
      { title: 'Enrol in the CEMT programme', description: 'Register for the Equissage equine massage course, which is delivered as a home-study curriculum with written materials and video instruction.', duration: 'Enrolment' },
      { title: 'Complete the coursework', description: 'Study equine anatomy, palpation, stroke technique, contraindications and session sequencing at your own pace.', duration: 'Self-paced, weeks' },
      { title: 'Attend the hands-on practical', description: 'Participate in the supervised practical session where you demonstrate massage technique on horses under instructor evaluation.', duration: 'Multi-day' },
      { title: 'Earn the CEMT designation', description: 'On successful completion of coursework and practical assessment, Equissage awards the Certified Equine Massage Therapist title.' }
    ],
    proctoring: 'The practical portion is assessed in person by Equissage instructors; the written component is completed through the course platform.',
    retakePolicy: 'Equissage outlines any remediation for incomplete practical work at the course level; contact the provider for specifics.',
    recertification: 'Equissage communicates any continuing-education or renewal expectations to its certificants; confirm current policy with the provider.',
    scoreReporting: 'Results are issued by Equissage on completion of the programme requirements.',
    providersNote: 'The credential is earned through Equissage training rather than a standalone public exam; compare providers before committing tuition.',
    sourceUrl: 'https://www.equissage.com/',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'national-cat-groomers-institute-of-america',
    body: 'National Cat Groomers Institute of America',
    bodyUrl: 'https://www.nationalcatgroomers.com/',
    about: 'The National Cat Groomers Institute of America (NCGIA) is the specialist certifying body for cat grooming. Its Certified Feline Master Groomer (CFMG) credential validates cat-specific handling, bathing, dematting and styling skills through written and practical testing.',
    registrationSteps: [
      { title: 'Complete NCGIA training', description: 'Most candidates take the NCGIA self-study or workshop course covering feline behaviour, bathing, dematting, lion trims and skin-condition recognition.', duration: 'Self-paced or workshop' },
      { title: 'Register for certification', description: 'Book the CFMG written and practical evaluation, typically at an NCGIA workshop or hosted event.', duration: 'Enrolment' },
      { title: 'Pass the written test', description: 'Complete the written examination on feline grooming theory, safety and skin/coat science.', duration: 'Exam' },
      { title: 'Complete the hands-on groom', description: 'Demonstrate a full cat groom to standard, including handling, bathing and a recognised trim, judged by NCGIA evaluators.', duration: 'Practical' }
    ],
    proctoring: 'Practical evaluations are conducted in person by NCGIA instructors at workshops or approved host sites; the written test accompanies the event.',
    retakePolicy: 'Candidates who do not pass a portion may retest per NCGIA policy; confirm fees and waiting periods with the institute.',
    recertification: 'NCGIA sets continuing-education or renewal terms for the CFMG; verify the current cycle and fee with the institute.',
    scoreReporting: 'Results are provided by NCGIA upon completion of both components.',
    providersNote: 'Training and certification are closely linked through NCGIA; workshops are the most common path to the CFMG.',
    sourceUrl: 'https://www.nationalcatgroomers.com/',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'american-registry-of-professional-animal-scientists',
    body: 'American Registry of Professional Animal Scientists',
    bodyUrl: 'https://www.arpas.org/',
    about: 'The American Registry of Professional Animal Scientists (ARPAS) certifies animal scientists who meet its education and experience standards. The Certified Professional Animal Scientist (PAS) credential signals advanced, species-focused expertise in nutrition, management and production.',
    registrationSteps: [
      { title: 'Confirm education eligibility', description: 'PAS requires an advanced degree in animal science or a closely related discipline from an accepted institution; review the ARPAS criteria before applying.', note: 'A bachelor\'s alone generally does not qualify for PAS.' },
      { title: 'Apply to ARPAS', description: 'Submit transcripts, professional experience and references through the ARPAS application.', duration: '30-60 minutes' },
      { title: 'Prepare for the exam', description: 'Study the ARPAS content outline covering species nutrition, reproduction, management and professional practice.', duration: 'Weeks' },
      { title: 'Sit the certification exam', description: 'Complete the ARPAS examination; details of format, fee and scheduling are confirmed with the registry.', duration: 'Exam day' }
    ],
    proctoring: 'ARPAS administers the certification exam through its approved process; confirm current delivery (testing centre or remote) with the registry.',
    retakePolicy: 'Retake rules and any re-examination fee are set by ARPAS; contact the registry for the current policy.',
    recertification: 'ARPAS members maintain standing through continuing professional development and renewal; verify the current requirements.',
    scoreReporting: 'Exam results are released by ARPAS to the candidate.',
    providersNote: 'PAS is a credential for scientists and advanced practitioners rather than entry-level workers; align it with your degree path.',
    sourceUrl: 'https://www.arpas.org/',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'veterinary-hospital-managers-association',
    body: 'Veterinary Hospital Managers Association',
    bodyUrl: 'https://www.vhma.org/',
    about: 'The Veterinary Hospital Managers Association (VHMA) owns the Certified Veterinary Practice Manager (CVPM) program, the recognised management credential for veterinary-practice leaders. It validates finance, human resources, law, marketing and organisational skill.',
    registrationSteps: [
      { title: 'Confirm eligibility', description: 'Applicants need a combination of practice-management experience (commonly about three years), management college coursework, management CE hours and letters of recommendation.', note: 'Minimum requirements must be met at application.' },
      { title: 'Submit the application', description: 'Complete the online application with documentation and pay the exam fee; incomplete applications are returned.', duration: '30-60 minutes' },
      { title: 'Schedule at a HOST centre', description: 'Once approved (valid two years), book the computer-based exam at a High-stake Online Secure Testing centre in North America. Remote testing is not offered.', duration: '15 minutes' },
      { title: 'Sit the exam', description: 'Complete the true/false and multiple-choice exam (up to 200 points) within 3.5 hours at your scheduled administration.', duration: '3.5 hours' }
    ],
    proctoring: 'The CVPM exam is delivered electronically at proctored HOST testing centres in the US and Canada, four times per year. Remote proctoring is not available.',
    retakePolicy: 'Candidates may retake once per administration cycle; the re-exam fee is $100 less than the application fee ($595 member / $745 non-member as listed).',
    recertification: 'CVPMs renew every two years by completing 48 CE hours (24 in-person) and paying a $225 recertification fee.',
    scoreReporting: 'Results are provided after the exam with a pass/fail standard and an appeals process.',
    providersNote: 'VHMA and many veterinary business educators publish CVPM study resources. The exam blueprint centres on HR, law/ethics, marketing, organisation and finance.',
    sourceUrl: 'https://www.vhma.org/cvpmwhocanapply',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'international-wildlife-rehabilitation-council',
    body: 'International Wildlife Rehabilitation Council',
    bodyUrl: 'https://theiwrc.org/',
    about: 'The International Wildlife Rehabilitation Council (IWRC) advances the profession of wildlife rehabilitation through training and credentials. Its Certified Wildlife Rehabilitator (CWR) exam assesses the knowledge needed to safely admit, house, feed and release native wild animals.',
    registrationSteps: [
      { title: 'Study the IWRC core content', description: 'Prepare using IWRC coursework and manuals covering intake, nutrition, housing, zoonoses, euthanasia and release criteria.', duration: 'Weeks' },
      { title: 'Register for the CWR exam', description: 'Apply for the Certified Wildlife Rehabilitator examination through IWRC; it is offered at conferences and via approved proctoring.', duration: 'Enrolment' },
      { title: 'Schedule a sitting', description: 'Book the exam at an IWRC event or arrange an approved proctored sitting per council guidelines.', duration: '15 minutes' },
      { title: 'Complete the exam', description: 'Sit the multiple-choice CWR exam and receive your result from IWRC.', duration: 'Exam' }
    ],
    proctoring: 'The CWR exam is offered at IWRC events and through arranged proctoring; confirm the current delivery and any ID rules with the council.',
    retakePolicy: 'IWRC sets any retake waiting period and fee; contact the council for current details.',
    recertification: 'The CWR may carry continuing-education or renewal expectations; verify the current policy with IWRC.',
    scoreReporting: 'Results are released by IWRC to the candidate after grading.',
    providersNote: 'IWRC\'s own courses and the " Wildlife Rehabilitation " manual are the primary study sources; few third-party prep options exist.',
    sourceUrl: 'https://theiwrc.org/',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'eastern-apicultural-society',
    body: 'Eastern Apicultural Society',
    bodyUrl: 'https://www.easternapiculture.org/',
    about: 'The Eastern Apicultural Society (EAS) promotes beekeeping education in the eastern United States. Its Master Beekeeper Certification is a recognised ladder of written, oral, practical and laboratory examinations covering bee biology, Colony management, disease and outreach.',
    registrationSteps: [
      { title: 'Progress through the EAS levels', description: 'The Master Beekeeper path builds through tiers (Apprentice, Journeyman, Master) with increasing expectations at each stage.', duration: 'Months to years' },
      { title: 'Prepare the four components', description: 'Study for the written, oral, practical and laboratory portions covering colony management, bee biology, disease and public outreach.', duration: 'Weeks per level' },
      { title: 'Register for testing', description: 'Sign up for the examinations, typically offered at the EAS annual conference and through its certification programme.', duration: 'Enrolment' },
      { title: 'Complete all four parts', description: 'Pass the written, oral, practical and laboratory evaluations to earn the Master Beekeeper Certification.', duration: 'Conference week' }
    ],
    proctoring: 'EAS Master Beekeeper examinations are conducted in person at the EAS conference and approved programme events by certified evaluators.',
    retakePolicy: 'Candidates may repeat unpassed components per EAS programme rules; confirm current fees and scheduling.',
    recertification: 'EAS outlines any renewal or continuing-involvement expectations; verify the current policy with the society.',
    scoreReporting: 'Results are provided by the EAS certification committee after each testing event.',
    providersNote: 'Start at the apprentice level; EAS and many state beekeeper associations offer the preparatory coursework.',
    sourceUrl: 'https://www.easternapiculture.org/',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'international-association-of-animal-behavior-consultants',
    body: 'International Association of Animal Behavior Consultants',
    bodyUrl: 'https://www.iaabc.org/',
    about: 'The International Association of Animal Behavior Consultants (IAABC) certifies behaviour consultants across species using a science-based, Least Intrusive Minimally Aversive (LIMA) framework. Its credentials rest on documented experience plus a knowledge and case-study assessment.',
    registrationSteps: [
      { title: 'Log consulting experience', description: 'Document the required hours of animal behaviour consulting (the dog consultant path asks for substantial, e.g. 500+ hours) within the eligibility window.', duration: 'Ongoing' },
      { title: 'Submit the application', description: 'Provide case histories, references and attestations of ethics compliance through the IAABC application.', duration: '30-60 minutes' },
      { title: 'Complete the knowledge assessment', description: 'Pass the online assessment covering behaviour science, assessment and intervention planning.', duration: 'Assessment' },
      { title: 'Maintain through CE', description: 'Once certified, fulfil the IAABC continuing-education and ethics requirements to keep the credential.', duration: 'Ongoing' }
    ],
    proctoring: 'The knowledge assessment is taken online; case-study documentation is reviewed by IAABC committees. A webcam and ID may be required for the assessment.',
    retakePolicy: 'IAABC publishes retake and reapplication rules; confirm current waiting periods and fees with the association.',
    recertification: 'IAABC certificants renew through continuing education and membership; verify the current cycle and fee.',
    scoreReporting: 'Assessment outcomes are reported by IAABC to the applicant.',
    providersNote: 'IAABC stresses case-based, science-driven practice. Prepare with its position statements, LIMA hierarchy and behaviour-science literature.',
    sourceUrl: 'https://www.iaabc.org/',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'karen-pryor-academy',
    body: 'Karen Pryor Academy',
    bodyUrl: 'https://karenpryoracademy.com/',
    about: 'Karen Pryor Academy (KPA) is the training arm of the clicker-training movement founded by Karen Pryor. Its Certified Training Partner (CTP) designation is earned by completing an assessed professional programme in positive-reinforcement training.',
    registrationSteps: [
      { title: 'Apply to a KPA programme', description: 'Enrol in the Dog Trainer Professional or similar KPA course, which combines online study with in-person workshops.', duration: 'Enrolment' },
      { title: 'Complete the coursework', description: 'Study clicker training, behaviour science and teaching skills, then build a portfolio of training videos across the programme.', duration: 'Roughly six months' },
      { title: 'Pass the assessments', description: 'Meet the video and practical benchmarks set by KPA instructors to demonstrate hands-on training competence.', duration: 'Programme' },
      { title: 'Earn the CTP designation', description: 'On successful completion, KPA awards the Certified Training Partner title and lists you in its directory.' }
    ],
    proctoring: 'Skills are assessed through submitted video work and in-person workshop evaluation by KPA faculty; there is no single sit-down exam.',
    retakePolicy: 'KPA sets any remediation for unmet benchmarks at the programme level; contact the academy for specifics.',
    recertification: 'KPA communicates renewal or continuing-education expectations to CTPs; confirm current policy with the academy.',
    scoreReporting: 'Progress and outcomes are tracked by KPA throughout the programme.',
    providersNote: 'The CTP is earned through KPA training, not a standalone public exam; compare programme tuition and schedule before enrolling.',
    sourceUrl: 'https://karenpryoracademy.com/',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'national-association-of-landscape-professionals',
    body: 'National Association of Landscape Professionals',
    bodyUrl: 'https://www.landscapeprofessionals.org/',
    about: 'The National Association of Landscape Professionals (NALP) certifies green-industry workers through its Landscape Industry Certified programme. The Horticultural Technician credential tests plant identification, installation, maintenance, irrigation and safety for hands-on technicians.',
    registrationSteps: [
      { title: 'Confirm eligibility', description: 'Candidates typically need a mix of landscape-industry experience and/or education; review the NALP eligibility before applying.', note: 'Requirements vary by certification track.' },
      { title: 'Apply and pay', description: 'Submit the NALP certification application with the exam fee and any documentation.', duration: '30 minutes' },
      { title: 'Study the blueprint', description: 'Prepare the written domains (plant ID, installation, maintenance, irrigation, safety) and the hands-on tasks.', duration: 'Weeks' },
      { title: 'Sit written and hands-on tests', description: 'Complete the written exam and the practical station evaluation, often at a hosted testing event.', duration: 'Exam day' }
    ],
    proctoring: 'Landscape Industry Certified exams are delivered at NALP-hosted testing events and approved centres, with in-person practical evaluation.',
    retakePolicy: 'NALP publishes retake rules and any re-examination fee; confirm current details with the association.',
    recertification: 'NALP certifications are renewed on a cycle with continuing-education; verify the current requirements and fee.',
    scoreReporting: 'Results are released by NALP after the testing event.',
    providersNote: 'NALP and state landscape associations offer exam-prep resources; the hands-on portion favours real field experience.',
    sourceUrl: 'https://www.landscapeprofessionals.org/',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'national-animal-care-and-control-association',
    body: 'National Animal Care & Control Association',
    bodyUrl: 'https://www.nacanet.org/',
    about: 'The National Animal Care & Control Association (NACAA) is the US standard-setter for animal control professionals. Its tiered Certified Animal Control Officer (ACO) programme trains officers in law, safe capture, cruelty investigation and agency management.',
    registrationSteps: [
      { title: 'Choose your ACO level', description: 'Start at Level 1 (entry), then progress to Level 2 (investigations) and Level 3 (supervision and complex cases) as experience grows.', note: 'Higher levels build on lower ones.' },
      { title: 'Complete the training', description: 'Work through the NACAA course content for your level, covering law, capture, investigations, evidence and response.', duration: 'Self-paced / course' },
      { title: 'Register for the exam', description: 'Enrol in the certification exam associated with the completed training level.', duration: 'Enrolment' },
      { title: 'Pass the assessment', description: 'Complete the level examination to earn the corresponding ACO certification.', duration: 'Exam' }
    ],
    proctoring: 'NACAA training and exams are delivered online and through its instructor-led programmes; confirm ID and proctor rules with the association.',
    retakePolicy: 'NACAA sets retake policy and any re-exam fee; contact the association for current details.',
    recertification: 'NACAA credentials carry renewal and continuing-training expectations; verify the current cycle and fee.',
    scoreReporting: 'Results are issued by NACAA on completion of the level assessment.',
    providersNote: 'NACAA is the recognised authority for ACO training; many agencies require or prefer its certifications for hiring.',
    sourceUrl: 'https://www.nacanet.org/',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'national-dog-groomers-association-of-america',
    body: 'National Dog Groomers Association of America',
    bodyUrl: 'https://www.nationaldoggroomers.com/',
    about: 'The National Dog Groomers Association of America (NDGAA) is the long-standing US certifier for professional dog groomers. Its National Certified Master Groomer (NCMG) title is earned through written and practical testing across breed groups.',
    registrationSteps: [
      { title: 'Study the breed groups', description: 'Prepare for testing across sporting, non-sporting, terrier and long-coated groups, plus the written theory exam.', duration: 'Weeks' },
      { title: 'Register for certification', description: 'Book the NDGAA written and practical evaluations, typically at a workshop or hosted testing event.', duration: 'Enrolment' },
      { title: 'Pass the written exam', description: 'Complete the multiple-choice theory test on grooming, health, safety and breed standards.', duration: 'Exam' },
      { title: 'Complete the practical grooms', description: 'Groom dogs from the required breed groups to NDGAA standards, judged by association evaluators.', duration: 'Practical' }
    ],
    proctoring: 'Practical evaluations are conducted in person by NDGAA evaluators at workshops or approved sites; the written test accompanies the event.',
    retakePolicy: 'Candidates may retest unpassed portions per NDGAA policy; confirm fees and scheduling with the association.',
    recertification: 'NDGAA sets renewal or continuing-education expectations for the NCMG; verify the current policy.',
    scoreReporting: 'Results are provided by NDGAA upon completion of both components.',
    providersNote: 'NDGAA workshops are the conventional route to the NCMG; practical scoring favours demonstrable breed-standard grooming.',
    sourceUrl: 'https://www.nationaldoggroomers.com/',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'national-association-of-veterinary-technicians-in-america',
    body: 'National Association of Veterinary Technicians in America',
    bodyUrl: 'https://navta.net/',
    about: 'The National Association of Veterinary Technicians in America (NAVTA) represents veterinary technicians and assistants. It created the Approved Veterinary Assistant (AVA) designation and houses the committee that recognises Veterinary Technician Specialties (VTS).',
    registrationSteps: [
      { title: 'Graduate a NAVTA-approved programme', description: 'To sit the AVA exam you must complete a NAVTA-approved veterinary assistant programme and obtain your enrolment code.', note: 'The exam is not open to the general public.' },
      { title: 'Enrol for the exam', description: 'Pay the $100 exam fee through VetMedTeam, NAVTA\'s exam partner, using the code from your programme.', duration: '15 minutes' },
      { title: 'Arrange a proctor', description: 'Secure an approved proctor (a veterinarian, credentialed technician, or testing centre) to observe the timed online exam.', duration: 'Schedule' },
      { title: 'Take the exam', description: 'Complete the 100-question, 150-minute exam within 30 days of enrolment and score at least 75%.', duration: '150 minutes' }
    ],
    proctoring: 'The AVA exam is online but must be observed in person by an approved proctor; remote-only proctoring is not permitted. Five attempts are allowed.',
    retakePolicy: 'Each of the five attempts costs the $100 fee; lapsed designations may require retaking the exam plus a higher renewal fee.',
    recertification: 'The AVA is valid two years and renewed with at least 10 hours of veterinary continuing education; no exam is required to renew.',
    scoreReporting: 'The score and certificate are available immediately on passing; results are forwarded to NAVTA.',
    providersNote: 'Only VetMedTeam administers the official AVA exam. NAVTA does not endorse third-party "prep" courses for the AVA.',
    sourceUrl: 'https://navta.net/veterinary-assistants-program/',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'international-council-for-veterinary-assessment',
    body: 'International Council for Veterinary Assessment',
    bodyUrl: 'https://icva.net/',
    about: 'The International Council for Veterinary Assessment (ICVA) develops and administers the NAVLE, the licensing examination required to practise veterinary medicine in every US and Canadian jurisdiction. It works with the NBME for independent scoring.',
    registrationSteps: [
      { title: 'Confirm eligibility', description: 'You must be a senior student or graduate of an AVMA-accredited (or equivalent approved) college of veterinary medicine, or meet ECFVG/PAVE requirements if internationally trained.', note: 'Expected graduation must be within 10 months of the window close.' },
      { title: 'Apply in the window', description: 'Submit the online NAVLE application and fee through ICVA (US) or the NEB (Canada) by the deadline; no refunds or extensions.', duration: '30 minutes' },
      { title: 'Schedule at Prometric', description: 'Once approved, book a Prometric test centre appointment during one of the three annual testing windows.', duration: '15 minutes' },
      { title: 'Sit the NAVLE', description: 'Complete the 360-question, six-block exam in one appointment and await your pass/fail and scaled score.', duration: '7.5 hours' }
    ],
    proctoring: 'The NAVLE is a secure, in-person exam at Prometric centres across North America and certain international sites, with standard check-in ID and security rules.',
    retakePolicy: 'Candidates get up to five attempts at the NAVLE. A failed attempt requires reapplying and repaying the full fee for the next window.',
    recertification: 'The NAVLE is a one-time licensing exam; it does not expire for licensure purposes, though individual jurisdictions set their own initial-license rules.',
    scoreReporting: 'NBME delivers a pass/fail result, the three-digit scaled score (200-800) and a diagnostic report through a secure portal.',
    providersNote: 'Prepare from the ICVA Candidate Handbook, competency domains and species outline. Third-party Qbanks are common but use only the official blueprint as source of truth.',
    sourceUrl: 'https://icva.net/navle',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'american-association-of-veterinary-state-boards',
    body: 'American Association of Veterinary State Boards',
    bodyUrl: 'https://www.aavsb.org/',
    about: 'The American Association of Veterinary State Boards (AAVSB) owns and delivers the VTNE, the national exam used by most US jurisdictions to credential veterinary technicians. It also runs the licensing mobility and PAVE programmes.',
    registrationSteps: [
      { title: 'Graduate an accredited program', description: 'You must be a graduate or final-semester student of an AVMA- or CVMA-accredited veterinary technology program, verified by transcript.', note: 'This is a hard eligibility gate.' },
      { title: 'Apply through your jurisdiction', description: 'Submit the VTNE application and fee; the fee varies by jurisdiction and is paid via AAVSB / MyAAVSB.', duration: '30 minutes' },
      { title: 'Schedule with PSI', description: 'Book a PSI test centre appointment or Live Remote Proctoring slot within one of the four annual testing windows.', duration: '15 minutes' },
      { title: 'Sit the VTNE', description: 'Complete the 170-question, three-hour exam and receive your score report (scaled 200-800; 425 is the common pass standard).', duration: '3 hours' }
    ],
    proctoring: 'The VTNE is computer-based at PSI test centres or via PSI Live Remote Proctoring (webcam + ID). You may sit it once per 30-day period, up to five attempts.',
    retakePolicy: 'Up to five attempts are allowed; a reschedule to the next window costs about $90 if done at least 48 hours ahead. Full fee is repaid each attempt.',
    recertification: 'The VTNE is a one-time credentialing exam; individual states handle technician license renewal and CE, not AAVSB.',
    scoreReporting: 'Scores are reported on a 200-800 scale; member boards commonly set the passing score at 425. A diagnostic report follows.',
    providersNote: 'Study from the AAVSB VTNE Candidate Handbook and content outline (10 weighted domains). Many schools publish their own pass-rate data.',
    sourceUrl: 'https://www.aavsb.org/',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'navta-committee-on-veterinary-technician-specialties',
    body: 'NAVTA Committee on Veterinary Technician Specialties',
    bodyUrl: 'https://navta.net/',
    about: 'NAVTA\'s Committee on Veterinary Technician Specialties (CVTS) recognises academies that award Veterinary Technician Specialist (VTS) credentials. A VTS shows advanced, focused expertise in areas such as anaesthesia, emergency, dentistry, behaviour or internal medicine.',
    registrationSteps: [
      { title: 'Choose a recognised academy', description: 'Pick the academy matching your specialty (e.g. anaesthesia/analgesia, emergency/critical care, dentistry, behaviour, internal medicine).', note: 'Each academy sets its own rules.' },
      { title: 'Meet experience thresholds', description: 'Most academies require substantial specialty hours (commonly around 1,000) and a log of cases within a defined period.', duration: 'Years' },
      { title: 'Submit the application', description: 'Provide case logs, references and continuing education to the academy for review.', duration: '30-60 minutes' },
      { title: 'Pass the academy exam', description: 'Sit the academy\'s specialty examination (format and fee set by that academy) to earn the VTS.', duration: 'Exam' }
    ],
    proctoring: 'Each recognised academy administers its own VTS examination; delivery (testing centre, online or at a conference) and proctor rules vary by academy.',
    retakePolicy: 'Retake rules and re-exam fees are set individually by each academy; check your chosen academy\'s bylaws.',
    recertification: 'VTS credentials are renewed on the academy\'s cycle, usually with specialty CE; verify the current requirement with that academy.',
    scoreReporting: 'Results are released by the individual academy to the applicant.',
    providersNote: 'The VTS is the veterinary-technician specialty pinnacle. Build the hours and case log first, then target the right academy rather than a generic exam.',
    sourceUrl: 'https://navta.net/veterinary-technician-specialties/',
    verified: true,
    confidence: 'medium'
  }
];

export const exams = [
  {
    slug: 'afa-certified-farrier',
    body: 'American Farrier’s Association',
    tagline: 'The AFA’s first certification rung proves you can trim, shoe and explain hoof care to a national standard.',
    description: 'The AFA Certified Farrier (CF) is the entry-level certification in the American Farrier\'s Association ladder and the credential most employers and horse owners recognise as proof of competent, safe farriery. Candidates must demonstrate both book knowledge and hands-on skill through a written exam plus a practical shoeing and horseshoe-display module judged against national standards. It sits below the Certified Tradesman and Certified Journeyman levels and is a prerequisite for the Therapeutic Endorsement path. Earning the CF signals that you can assess, trim and protect hoof structures and fit shoes to specification rather than by guesswork.',
    quickAnswer: {
      summary: 'The AFA Certified Farrier is a two-part credential requiring a written exam and a practical shoeing module, open to farriers with about one year of horseshoeing experience who are current AFA members. The written exam alone costs about $100 for members (around $350 non-member at a convention), and the combined written-plus-shoe option is about $125 member / $375 non-member. Certification is valid while you maintain AFA membership and meet recertification expectations.',
      advantages: [
        'Nationally recognised proof of competent, standards-based farriery',
        'Unlocks the higher CTF, CJF and Therapeutic Endorsement levels',
        'Judged by independent AFA examiners, not a single school',
        'Strengthens credibility with veterinarians, barns and clients',
        'Signals safe, welfare-focused hoof-care practice'
      ]
    },
    roadmap: ['Join the AFA', 'Log about one year of horseshoeing', 'Register for written + shoe exams', 'Pass both modules', 'Maintain through recertification'],
    prerequisites: 'Current AFA membership and roughly one year of professional horseshoeing experience.',
    eligibility: 'The CF is open to farriers with at least one year of horseshoeing experience who hold a current AFA membership. It is the first certifying level and is not gated by a prior AFA classification.',
    examMeta: {
      questions: 'Written exam plus practical shoeing module',
      time: 'Written 2 hours; practical half to full day',
      pass: 'Pass both written and practical judged modules',
      fee: '$100-$350 written; $125-$375 combined (member/non-member)',
      format: 'In-person written and hands-on forging/shoeing',
      admin: 'AFA-hosted certification events and conventions'
    },
    topics: [
      { name: 'Written theory', weight: '', note: 'Anatomy, physiology, pathology, gaits, horseshoes and their uses' },
      { name: 'Practical shoeing', weight: '', note: 'Trim, shoe fit, modifications and a horseshoe display explained to examiners' }
    ],
    examEssentials: [
      ['Level', 'First AFA certification tier (below CTF and CJF)'],
      ['Experience', 'About 1 year of horseshoeing'],
      ['Membership', 'Current AFA membership required'],
      ['Delivery', 'In person at AFA events'],
      ['Validity', 'Maintained with AFA membership and recertification']
    ],
    timeline: [
      { stage: 'Membership', duration: 'Before applying' },
      { stage: 'Study', duration: '2-4 months' },
      { stage: 'Written exam', duration: 'Exam day' },
      { stage: 'Practical shoeing', duration: 'Exam day' }
    ],
    costBreakdown: {
      items: [
        { item: 'AFA membership', fee: 'Annual dues' },
        { item: 'CF written exam (member)', fee: '$100' },
        { item: 'CF written + shoe (member)', fee: '$125' },
        { item: 'Non-member convention pricing', fee: '$350-$375' }
      ],
      total: '$100-$375 plus membership',
      footnote: '2026 convention pricing; members receive large discounts and must join before registering.'
    },
    difficulty: 'Moderate',
    audience: 'Working farriers seeking the baseline AFA credential.',
    time: '2-4 months preparation',
    cost: '$100-$375 plus membership',
    faqs: [
      { q: 'How hard is the AFA Certified Farrier exam?', a: 'The CF is demanding but achievable for a farrier with about a year of real shoeing experience. The written test covers anatomy and shoeing theory, while the practical judges your trimming, fit and forging to a fixed standard rather than speed.' },
      { q: 'How long should I prepare?', a: 'Most candidates spend two to four months reviewing theory and rehearsing the practical shoeing and horseshoe display. Apprenticeship hours are the best preparation, supported by AFA clinic education.' },
      { q: 'Does the CF expire?', a: 'The CF is maintained through AFA membership and the association\'s recertification expectations rather than a fixed expiry date. Letting membership lapse can put your certified status at risk.' },
      { q: 'Is the CF worth it?', a: 'For career farriers it is valuable: it is the recognised baseline that opens the CTF, CJF and Therapeutic Endorsement levels and signals to veterinarians and clients that your work meets a national standard.' },
      { q: 'Who is eligible?', a: 'Any farrier with roughly one year of horseshoeing experience who holds a current AFA membership may sit the CF. No prior AFA classification is required.' }
    ],
    summaryPoints: [
      'CF is the entry AFA certification combining a written and a practical shoeing exam.',
      'It requires about one year of experience and current AFA membership.',
      'It is the gateway to CTF, CJF and the Therapeutic Endorsement.',
      'Member exam fees run about $100-$125 versus $350-$375 non-member.'
    ],
    relatedSlugs: ['afa-certified-journeyman-farrier', 'afa-therapeutic-endorsement', 'vtne'],
    sourceUrl: 'https://americanfarriers.org/page/certification',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'afa-certified-journeyman-farrier',
    body: 'American Farrier’s Association',
    tagline: 'The AFA’s top certification, proving journeyman-level forging and shoeing artistry.',
    description: 'The AFA Certified Journeyman Farrier (CJF) is the highest level in the American Farrier\'s Association certification ladder and the credential most respected across the US farrier trade. It requires the Certified Farrier as a base, roughly two years of additional horseshoeing experience, and demonstration of in-depth knowledge plus highly developed performance skills. Candidates must pass a written exam and forge a specific bar shoe to fit a predetermined foot pattern within a strict time limit. Holding the CJF marks a farrier as capable of the most exacting corrective and custom work and is a prerequisite for the Therapeutic Endorsement.',
    quickAnswer: {
      summary: 'The AFA Certified Journeyman Farrier is the top AFA certification, requiring the CF plus about two years of experience and a written exam plus a timed bar-shoe forging. Member exam pricing is about $100 for the written or $125 combined with the shoe module, rising to around $350-$375 for non-members at a convention. Certification is maintained through AFA membership and recertification expectations.',
      advantages: [
        'The most prestigious AFA farrier credential in the US',
        'Recognised benchmark for corrective and custom shoeing work',
        'Required gateway to the AFA Therapeutic Endorsement',
        'Signals journeyman-level forging and fitting skill',
        'Commands higher rates and referral trust from veterinarians'
      ]
    },
    roadmap: ['Hold the CF', 'Gain ~2 years experience', 'Register for written + shoe', 'Forge the bar shoe to pattern', 'Maintain through recertification'],
    prerequisites: 'Current AFA membership, the AFA Certified Farrier, and about two years of horseshoeing experience.',
    eligibility: 'Candidates must have earned the CF and have at least two years of horseshoeing experience, plus a current AFA membership. The CJF is the highest certifying tier below international associate exams.',
    examMeta: {
      questions: 'Written exam plus timed practical bar-shoe forging',
      time: 'Written 2 hours; practical with prescribed time limit',
      pass: 'Pass both written and practical judged modules',
      fee: '$100-$350 written; $125-$375 combined (member/non-member)',
      format: 'In-person written and hands-on forging',
      admin: 'AFA-hosted certification events and conventions'
    },
    topics: [
      { name: 'Written theory', weight: '', note: 'Advanced anatomy, pathology, biomechanics and shoeing science' },
      { name: 'Bar-shoe forging', weight: '', note: 'Forge a specific bar shoe fitting a predetermined foot pattern in time' }
    ],
    examEssentials: [
      ['Level', 'Highest AFA certification tier'],
      ['Prerequisite', 'AFA Certified Farrier'],
      ['Experience', 'About 2 years of horseshoeing'],
      ['Membership', 'Current AFA membership required'],
      ['Validity', 'Maintained with AFA membership and recertification']
    ],
    timeline: [
      { stage: 'Earn CF', duration: 'First' },
      { stage: 'Experience', duration: '~2 years' },
      { stage: 'Study', duration: '3-6 months' },
      { stage: 'Written + forging', duration: 'Exam day' }
    ],
    costBreakdown: {
      items: [
        { item: 'AFA membership', fee: 'Annual dues' },
        { item: 'CJF written exam (member)', fee: '$100' },
        { item: 'CJF written + shoe (member)', fee: '$125' },
        { item: 'Non-member convention pricing', fee: '$350-$375' }
      ],
      total: '$100-$375 plus membership',
      footnote: '2026 convention pricing; members receive large discounts and must join before registering.'
    },
    difficulty: 'Hard',
    audience: 'Experienced farriers aiming for the top AFA credential.',
    time: '3-6 months preparation after CF',
    cost: '$100-$375 plus membership',
    faqs: [
      { q: 'How hard is the CJF?', a: 'The CJF is the hardest AFA exam and one of the most respected credentials in the trade. The written portion is advanced, and the practical bar-shoe forging must meet a precise pattern and time limit judged by AFA examiners.' },
      { q: 'How long should I prepare?', a: 'Plan three to six months of focused forging practice after you hold the CF, plus theory review. Rehearsing the timed bar shoe to pattern is the single biggest success factor.' },
      { q: 'Does the CJF expire?', a: 'Like other AFA credentials, the CJF is maintained through AFA membership and recertification expectations rather than a fixed expiry. Letting membership lapse risks your certified status.' },
      { q: 'Is the CJF worth it?', a: 'For serious farriers, yes. It is the recognised pinnacle of US farrier certification, supports higher fees and veterinary referrals, and is required before pursuing the Therapeutic Endorsement.' },
      { q: 'Who is eligible?', a: 'You must hold the AFA Certified Farrier, have about two years of additional horseshoeing experience, and be a current AFA member.' }
    ],
    summaryPoints: [
      'CJF is the top AFA certification, above CF and CTF.',
      'Requires the CF, about two years of experience and a timed bar-shoe forge.',
      'Member fees are about $100-$125 versus $350-$375 non-member.',
      'It is the prerequisite for the AFA Therapeutic Endorsement.'
    ],
    relatedSlugs: ['afa-certified-farrier', 'afa-therapeutic-endorsement', 'vtne'],
    sourceUrl: 'https://americanfarriers.org/page/certification',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'afa-therapeutic-endorsement',
    body: 'American Farrier’s Association',
    tagline: 'A specialty endorsement proving corrective and therapeutic shoeing for lame or diseased hooves.',
    description: 'The AFA Therapeutic Endorsement (TE) is a specialty endorsement available only to farriers who already hold the Certified Journeyman Farrier. It demonstrates advanced ability in therapeutic and corrective shoeing for horses with lameness, disease or conformation problems of the hoof. Candidates sit a written exam focused on pathology, biomechanics and treatment planning rather than a separate practical forge. The TE tells veterinarians and clients that the farrier can work safely within a lameness or rehabilitation plan.',
    quickAnswer: {
      summary: 'The AFA Therapeutic Endorsement is a written-only specialty exam open to current CJF holders, testing therapeutic and corrective shoeing knowledge. The 2026 written exam fee is about $200. It does not carry its own practical forge and is maintained alongside your AFA membership and recertification expectations.',
      advantages: [
        'Proves advanced therapeutic and corrective shoeing skill',
        'Available only to CJFs, so it signals top-tier expertise',
        'Builds referral relationships with equine veterinarians',
        'Focuses on lameness and disease management of the hoof',
        'Sets you apart for rehabilitation and complex cases'
      ]
    },
    roadmap: ['Hold the CJF', 'Register for the TE written exam', 'Study pathology and biomechanics', 'Pass the written exam', 'Maintain with AFA'],
    prerequisites: 'Current AFA Certified Journeyman Farrier (CJF) and AFA membership.',
    eligibility: 'Only farriers who have earned the AFA Certified Journeyman Farrier may pursue the Therapeutic Endorsement. It is an endorsement layered on the CJF, not a standalone credential.',
    examMeta: {
      questions: 'Written examination',
      time: 'Written exam sitting',
      pass: 'Pass the written therapeutic exam',
      fee: 'About $200 (2026 written exam fee)',
      format: 'In-person written exam',
      admin: 'AFA-hosted certification events'
    },
    topics: [
      { name: 'Therapeutic shoeing theory', weight: '', note: 'Pathology, biomechanics, lameness and corrective treatment planning' }
    ],
    examEssentials: [
      ['Type', 'Endorsement on the CJF'],
      ['Prerequisite', 'AFA Certified Journeyman Farrier'],
      ['Format', 'Written exam only'],
      ['Fee', 'About $200 (2026)'],
      ['Validity', 'Maintained with AFA membership']
    ],
    timeline: [
      { stage: 'Earn CJF', duration: 'First' },
      { stage: 'Study', duration: '1-3 months' },
      { stage: 'TE written exam', duration: 'Exam day' }
    ],
    costBreakdown: {
      items: [
        { item: 'AFA membership', fee: 'Annual dues' },
        { item: 'TE written exam', fee: '$200' }
      ],
      total: '$200 plus membership',
      footnote: '2026 written exam fee; members must join before registering. No separate practical forge for the TE.'
    },
    difficulty: 'Challenging',
    audience: 'CJFs specialising in therapeutic and corrective shoeing.',
    time: '1-3 months preparation',
    cost: '$200 plus membership',
    faqs: [
      { q: 'How hard is the Therapeutic Endorsement?', a: 'Because it is restricted to CJFs, the candidate pool is already expert. The written exam is still challenging, concentrating on pathology, biomechanics and corrective treatment planning rather than basic shoeing.' },
      { q: 'How long should I prepare?', a: 'Most CJFs spend one to three months reviewing lameness pathology and therapeutic case planning before sitting the written exam.' },
      { q: 'Does the TE expire?', a: 'The endorsement is maintained through your AFA membership and the association\'s recertification expectations; it does not stand alone apart from the CJF.' },
      { q: 'Is the TE worth it?', a: 'For farriers doing rehabilitation or complex lameness work, it is valuable. It signals to veterinarians that you can execute a therapeutic plan safely and precisely.' },
      { q: 'Who is eligible?', a: 'Only current AFA Certified Journeyman Farriers may sit the Therapeutic Endorsement; there is no practical forge, only a written exam.' }
    ],
    summaryPoints: [
      'The TE is a written endorsement available only to CJFs.',
      'It focuses on therapeutic and corrective shoeing for hoof disease and lameness.',
      'The 2026 written fee is about $200.',
      'It strengthens veterinary referral work for complex cases.'
    ],
    relatedSlugs: ['afa-certified-journeyman-farrier', 'afa-certified-farrier', 'vtne'],
    sourceUrl: 'https://americanfarriers.org/page/certification',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'beef-quality-assurance-certification',
    body: 'National Cattlemen’s Beef Association',
    tagline: 'The free-to-low-cost producer standard for humane, food-safe beef cattle handling.',
    description: 'Beef Quality Assurance (BQA) certification is the national producer training run by the National Cattlemen\'s Beef Association that teaches cattle handlers how to protect animal welfare, use animal-health products responsibly and keep beef safe. It covers low-stress stockmanship, injection-site management, withdrawal times, herd-health records and the BQA ethical principles. Many feedlots, packers and state programmes prefer or require BQA-certified operators, so it functions as a de facto credential for anyone selling cattle or managing a beef operation.',
    quickAnswer: {
      summary: 'BQA certification is earned by completing NCBA\'s training and assessment, most often through a free online self-study course at BQA.org or a low-cost state workshop. There is no published national exam fee; producer certification is typically free or inexpensive and is renewed on a multi-year cycle through updated training. It validates low-stress handling and food-safety practices rather than a single pass mark.',
      advantages: [
        'Often free or very low cost to complete',
        'Preferred or required by many buyers and state programmes',
        'Teaches low-stress, welfare-focused stockmanship',
        'Covers legal product use and withdrawal times',
        'Strengthens market access and consumer trust'
      ]
    },
    roadmap: ['Pick a delivery format', 'Complete the modules', 'Pass the assessment', 'Get your certificate', 'Renew on schedule'],
    prerequisites: 'Open to any cattle producer or handler; no formal education gate.',
    eligibility: 'BQA is open to anyone involved in beef cattle production. There is no degree or experience prerequisite; the programme is designed for working producers and their staff.',
    examMeta: {
      questions: 'End-of-module checks or certification exam',
      time: '2-4 hours of study plus assessment',
      pass: 'Completion of module checks / assessment',
      fee: 'Typically free or low cost (varies by state)',
      format: 'Online self-study or in-person workshop',
      admin: 'State BQA coordinators and BQA.org'
    },
    topics: [
      { name: 'Stockmanship', weight: '', note: 'Low-stress handling and movement' },
      { name: 'Animal health products', weight: '', note: 'Injection sites, withdrawal times, records' },
      { name: 'Food safety', weight: '', note: 'Herd health, biosecurity, ethics' }
    ],
    examEssentials: [
      ['Format', 'Online course or in-person workshop'],
      ['Fee', 'Typically free or low cost'],
      ['Delivery', 'BQA.org or state coordinator'],
      ['Validity', 'Renewed on a multi-year cycle']
    ],
    timeline: [
      { stage: 'Enrol', duration: 'Same day' },
      { stage: 'Study', duration: '2-4 hours' },
      { stage: 'Assessment', duration: '30-60 minutes' }
    ],
    costBreakdown: {
      items: [
        { item: 'Training', fee: 'Free / low cost' },
        { item: 'State workshop', fee: 'Varies' },
        { item: 'Renewal training', fee: 'Varies' }
      ],
      total: 'Usually $0-$50',
      footnote: 'NCBA does not publish a single national exam fee; most producers certify free online. State workshops may charge a modest fee.'
    },
    difficulty: 'Easy',
    audience: 'Beef producers, handlers and feedlot staff.',
    time: '1-2 weeks elapsed',
    cost: '$0-$50',
    faqs: [
      { q: 'How hard is BQA certification?', a: 'BQA is designed for working producers, not as a gatekeeping exam. The online course and checks are straightforward if you already handle cattle, and the focus is comprehension of welfare and food-safety basics.' },
      { q: 'How long does it take?', a: 'Most people finish the online self-study and assessment in a single sitting of two to four hours, though some prefer to spread it across a week.' },
      { q: 'Does BQA expire?', a: 'Yes, BQA certification is renewed by completing updated training on a multi-year cycle set by your state coordinator. The exact interval varies by state.' },
      { q: 'Is BQA worth it?', a: 'For anyone selling cattle, it is worth it: many buyers and state programmes prefer or require BQA-certified sources, and it reduces liability around product use and withdrawal times.' },
      { q: 'How much does it cost?', a: 'The national online course is typically free, and in-person state workshops are usually low cost. NCBA does not publish a single mandatory exam fee.' }
    ],
    summaryPoints: [
      'BQA is the national beef-producer standard for welfare and food safety.',
      'Usually completed free online through BQA.org.',
      'Covers stockmanship, product use and withdrawal times.',
      'Renewed on a multi-year state cycle.'
    ],
    relatedSlugs: ['certified-professional-animal-scientist', 'eas-master-beekeeper', 'landscape-industry-certified-horticultural-technician'],
    sourceUrl: 'https://www.bqa.org/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'certified-animal-welfare-administrator',
    body: 'The Association for Animal Welfare Advancement',
    tagline: 'The management credential for leaders of animal shelters and welfare agencies.',
    description: 'The Certified Animal Welfare Administrator (CAWA) is the professional credential for people who lead animal shelters and welfare organisations. Offered by The Association for Animal Welfare Advancement, it validates the governance, finance, operations, human-resources and community-programme knowledge needed to run a nonprofit animal agency. It is aimed at executives and managers rather than front-line staff, and it signals to boards and funders that a leader understands both mission and management.',
    quickAnswer: {
      summary: 'The CAWA is an online, proctored examination for experienced animal-welfare leaders covering governance, finance, operations and community programmes. Exact eligibility, exam length and fee are set by the association, so confirm current details with The Association for Animal Welfare Advancement before applying. It is renewed through continuing education on the association\'s cycle.',
      advantages: [
        'Recognised credential for shelter and welfare executives',
        'Validates both mission and management competence',
        'Signals credibility to boards and funders',
        'Covers governance, finance and operations',
        'Supports career advancement in the nonprofit sector'
      ]
    },
    roadmap: ['Confirm eligibility', 'Apply with experience docs', 'Schedule the online exam', 'Study the body of knowledge', 'Maintain through CE'],
    prerequisites: 'Animal-welfare leadership experience; specific education/tenure requirements set by the association.',
    eligibility: 'CAWA targets professionals with animal-welfare leadership experience, generally documented through a combination of management tenure and education. Review the association\'s current application criteria before applying.',
    examMeta: {
      questions: 'Online proctored exam (count set by association)',
      time: 'Timed exam (confirm current length)',
      pass: 'Association pass standard',
      fee: 'Confirm current fee with the association',
      format: 'Online with remote proctoring',
      admin: 'The Association for Animal Welfare Advancement'
    },
    topics: [
      { name: 'Governance', weight: '', note: 'Board relations, policy, ethics' },
      { name: 'Finance', weight: '', note: 'Budgets, fundraising, compliance' },
      { name: 'Operations', weight: '', note: 'Shelter management, programmes' },
      { name: 'Community', weight: '', note: 'Outreach, education, services' }
    ],
    examEssentials: [
      ['Audience', 'Shelter and welfare leaders'],
      ['Format', 'Online proctored exam'],
      ['Fee', 'Confirm with association'],
      ['Validity', 'Renewed via CE']
    ],
    timeline: [
      { stage: 'Confirm eligibility', duration: 'Before applying' },
      { stage: 'Study', duration: '1-3 months' },
      { stage: 'Exam', duration: 'Exam day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Application / exam fee', fee: 'Confirm with association' },
        { item: 'Prep materials', fee: 'Varies' }
      ],
      total: 'Confirm with association',
      footnote: 'The association sets current eligibility, exam format, fee and renewal; figures were not confirmed from a primary source for 2026.'
    },
    difficulty: 'Moderate',
    audience: 'Shelter and animal-welfare executives and managers.',
    time: '1-3 months preparation',
    cost: 'Confirm with association',
    faqs: [
      { q: 'How hard is the CAWA?', a: 'The CAWA is moderately difficult because it tests management breadth, not just animal care. Candidates with real shelter leadership experience usually find the operations and governance content familiar.' },
      { q: 'How long should I prepare?', a: 'Plan one to three months reviewing the association\'s body of knowledge, especially finance, governance and HR, alongside your own operational experience.' },
      { q: 'Does the CAWA expire?', a: 'Yes, CAWA holders maintain the credential through continuing education on the association\'s renewal cycle. Verify the current interval and fee with the association.' },
      { q: 'Is the CAWA worth it?', a: 'For shelter leaders it is worthwhile: it is the recognised management credential in the field and signals to boards and funders that you can run the agency effectively.' },
      { q: 'Who is eligible?', a: 'Experienced animal-welfare leaders meeting the association\'s education and management-tenure criteria. Check the current application requirements before applying.' }
    ],
    summaryPoints: [
      'CAWA is the management credential for animal-welfare leaders.',
      'Delivered as a proctored online exam.',
      'Covers governance, finance, operations and community work.',
      'Eligibility and fee are set by the association; confirm before applying.'
    ],
    relatedSlugs: ['iwrc-certified-wildlife-rehabilitator', 'certified-animal-control-officer-level-1', 'navta-approved-veterinary-assistant'],
    sourceUrl: 'https://theaawa.org/',
    reviewed: '2026-08',
    confidence: 'medium'
  }
  ,
  {
    slug: 'ccpdt-cbcc-ka',
    body: 'Certification Council for Professional Dog Trainers',
    tagline: 'The advanced CCPDT credential for consultants who fix complex canine behaviour problems.',
    description: 'The Certified Behavior Consultant Canine – Knowledge Assessed (CBCC-KA) is the Certification Council for Professional Dog Trainers’ advanced credential for people who work on canine behaviour modification. It goes beyond basic training into aggression, fear, separation issues, functional analysis and behaviour-change planning. To sit it you need 300 hours of canine behaviour-consulting experience within the last three years plus an attestation from a CCPDT certificant, veterinarian or other approved professional. It is widely regarded as the most credible behaviour-consultant credential because it is independently accredited and experience-gated.',
    quickAnswer: {
      summary: 'The CBCC-KA is a 200-question (180 scored, 20 pretest) multiple-choice exam with a three-hour limit, delivered at US/Canada test centres or by live remote proctoring during spring and fall windows. The 2026 fee is $425 (plus a $100 late fee if applicable). You need 300 hours of behaviour-consulting experience in the last three years and recertify every three years with 36 CEUs and a $220 fee.',
      advantages: [
        'Independently accredited, experience-gated behaviour credential',
        'Signals expertise in aggression, fear and anxiety cases',
        'Builds client and veterinary referral trust',
        'Renews with CE rather than always retesting',
        'Recognised across North America and internationally'
      ]
    },
    roadmap: ['Log 300 consulting hours', 'Get your attestation', 'Apply by deadline', 'Book a testing slot', 'Recertify every 3 years'],
    prerequisites: 'At least 18 years old, high-school diploma or equivalent, and 300 hours of canine behaviour-consulting experience in the last three years.',
    eligibility: 'You must be 18 or older with a high-school diploma or equivalent, log at least 300 hours of canine behaviour consulting (fear, phobias, anxiety, aggression) within the previous three years, and supply a signed attestation from a CCPDT certificant, veterinarian or other approved professional. Compliance with the CCPDT Standards of Practice and LIMA principles is required.',
    examMeta: {
      questions: '200 (180 scored, 20 pretest)',
      time: '3 hours',
      pass: 'CCPDT passing standard',
      fee: '$425 ($100 late fee)',
      format: 'Multiple-choice, computer-based or remote proctored',
      admin: 'Professional Testing Corporation'
    },
    topics: [
      { name: 'Applied Behavior Analysis, Operant & Classical Conditioning', weight: '35%' },
      { name: 'Ethology, Body Language, Observational Skills', weight: '29%' },
      { name: 'Consulting Skills and Best Practices', weight: '22%' },
      { name: 'Health, Development, Life Stages, Anatomy & Physiology', weight: '14%' }
    ],
    examEssentials: [
      ['Experience', '300 hrs behaviour consulting in 3 yrs'],
      ['Testing', 'Spring and fall windows'],
      ['Recert', 'Every 3 yrs, 36 CEUs + $220'],
      ['Delivery', 'Centre or live remote proctoring']
    ],
    timeline: [
      { stage: 'Log experience', duration: 'Up to 3 years' },
      { stage: 'Study', duration: '3-6 months' },
      { stage: 'Exam', duration: '3 hours' },
      { stage: 'Recertify', duration: 'Every 3 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Exam fee', fee: '$425' },
        { item: 'Late application', fee: '$100' },
        { item: 'Practice test', fee: '$105' },
        { item: 'Recertification', fee: '$220 / 3 yrs' }
      ],
      total: '$425-$640 (plus CE costs)',
      footnote: '2026 CCPDT fee schedule; practice test optional. CEU costs vary.'
    },
    difficulty: 'Challenging',
    audience: 'Canine behaviour consultants and trainers handling complex cases.',
    time: '3-6 months preparation',
    cost: '$425-$640',
    faqs: [
      { q: 'How hard is the CBCC-KA?', a: 'It is challenging because it assumes real consulting experience and tests applied behaviour analysis at depth. Candidates without case exposure to aggression and anxiety struggle more than those who consult regularly.' },
      { q: 'How long should I study?', a: 'Most serious candidates spend three to six months reviewing the blueprint domains, especially the 35% ABA/conditioning and 29% ethology sections, alongside their case logs.' },
      { q: 'Does the CBCC-KA expire?', a: 'Yes, it is renewed every three years either by earning 36 CEUs or by retaking the exam, with a $220 recertification fee.' },
      { q: 'Is the CBCC-KA worth it?', a: 'For behaviour consultants it is the gold-standard, independently accredited credential. It differentiates you from unqualified "behaviourists" and supports veterinary referrals.' },
      { q: 'Who is eligible?', a: 'You need 300 hours of canine behaviour-consulting experience in the past three years, a high-school diploma, and an attestation from an approved professional.' }
    ],
    summaryPoints: [
      'CBCC-KA is CCPDT’s advanced canine behaviour credential.',
      '200 questions, 3 hours, $425 fee, 4 weighted domains.',
      'Requires 300 hours of consulting experience in 3 years.',
      'Renewed every 3 years with 36 CEUs and $220.'
    ],
    relatedSlugs: ['ccpdt-cpdt-ka', 'ccpdt-cpdt-ksa', 'iaabc-certified-dog-behavior-consultant'],
    sourceUrl: 'https://www.ccpdt.org/certification/dog-behavior-consultant/examination',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'certified-equine-massage-therapist',
    body: 'Equissage',
    tagline: 'A course-based credential in equine sports massage and palpation technique.',
    description: 'The Certified Equine Massage Therapist (CEMT) is Equissage’s programme credential for people who want to practise equine sports massage. It combines distance-learning study of equine anatomy, palpation, stroke technique and contraindications with a supervised hands-on practical. Unlike a single public exam, the CEMT is earned by completing the Equissage curriculum and practical assessment, so the cost is programme tuition rather than a separate exam fee. It suits horse owners, trainers and bodyworkers building a fee-based equine massage practice.',
    quickAnswer: {
      summary: 'The CEMT is earned through the Equissage equine massage programme: self-paced home study plus an in-person practical assessment judged by Equissage instructors. The cost is course tuition rather than a standalone exam fee, and completion (not a published pass mark) earns the designation. Confirm current tuition and renewal expectations directly with Equissage.',
      advantages: [
        'Structured anatomy-to-hands-on curriculum',
        'Recognised equine massage_provider name',
        'Supports a fee-based equine bodywork business',
        'Self-paced theory study fits working schedules',
        'Practical skills assessed in person by instructors'
      ]
    },
    roadmap: ['Enrol in Equissage', 'Complete home study', 'Attend the practical', 'Pass the assessment', 'Maintain per provider'],
    prerequisites: 'Open enrolment; no fixed prior credential required.',
    eligibility: 'The programme is open to anyone who enrols; Equissage does not set a formal degree or experience gate for entry, though comfort around horses is expected for the practical.',
    examMeta: {
      questions: 'Coursework plus hands-on practical assessment',
      time: 'Self-paced theory; multi-day practical',
      pass: 'Completion of coursework and practical',
      fee: 'Programme tuition (confirm with Equissage)',
      format: 'Home study + in-person practical',
      admin: 'Equissage'
    },
    topics: [
      { name: 'Equine anatomy', weight: '', note: 'Musculature, skeleton, palpation landmarks' },
      { name: 'Massage technique', weight: '', note: 'Stroke types, sequencing, pressure' },
      { name: 'Contraindications', weight: '', note: 'When not to treat, referral signs' }
    ],
    examEssentials: [
      ['Type', 'Course-based credential'],
      ['Practical', 'In-person assessed by instructors'],
      ['Fee', 'Tuition, not exam fee'],
      ['Validity', 'Per Equissage policy']
    ],
    timeline: [
      { stage: 'Enrol', duration: 'Same day' },
      { stage: 'Home study', duration: 'Weeks to months' },
      { stage: 'Practical', duration: 'Multi-day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Programme tuition', fee: 'Confirm with Equissage' },
        { item: 'Practical travel/lodging', fee: 'Varies' }
      ],
      total: 'Confirm with Equissage',
      footnote: 'CEMT is earned through Equissage training; tuition figures were not confirmed from a primary 2026 source.'
    },
    difficulty: 'Moderate',
    audience: 'Horse owners, trainers and aspiring equine bodyworkers.',
    time: 'Weeks to months',
    cost: 'Confirm with Equissage',
    faqs: [
      { q: 'How hard is the CEMT?', a: 'The CEMT is moderately demanding: the theory is learnable at home, but the practical requires real hands-on skill in palpation and stroke technique, assessed by instructors.' },
      { q: 'How long does it take?', a: 'Theory is self-paced over weeks to months, followed by a multi-day in-person practical where you demonstrate technique on horses.' },
      { q: 'Does the CEMT expire?', a: 'Equissage sets any renewal or continuing-education expectation for its certificants; confirm the current policy with the provider.' },
      { q: 'Is the CEMT worth it?', a: 'If you want to build an equine massage business, the structured curriculum and recognised name help. Compare total tuition and practical scheduling before enrolling.' },
      { q: 'Who is eligible?', a: 'Enrolment is open with no fixed prerequisite, though you should be comfortable handling horses for the practical portion.' }
    ],
    summaryPoints: [
      'CEMT is a course-based equine massage credential from Equissage.',
      'Combines home-study theory with an in-person practical.',
      'Cost is programme tuition, not a separate exam fee.',
      'Confirm tuition and renewal directly with Equissage.'
    ],
    relatedSlugs: ['certified-feline-master-groomer', 'afa-certified-farrier', 'certified-professional-animal-scientist'],
    sourceUrl: 'https://www.equissage.com/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'certified-feline-master-groomer',
    body: 'National Cat Groomers Institute of America',
    tagline: 'The cat-specific grooming credential proving safe handling and styling skill.',
    description: 'The Certified Feline Master Groomer (CFMG) is the National Cat Groomers Institute of America’s flagship credential for professional cat groomers. It validates cat-specific handling, bathing, dematting, lion trims and skin-condition recognition through both a written test and a hands-on groom judged by NCGIA evaluators. Because cats are groomed very differently from dogs, the CFMG tells clients and employers that a groomer understands feline behaviour and safety rather than just canine technique.',
    quickAnswer: {
      summary: 'The CFMG is earned by passing NCGIA’s written exam and a hands-on practical groom, usually at an NCGIA workshop. Training and certification are closely linked, so cost is tied to the workshop or course rather than a single published exam fee. Confirm current fees, exam length and renewal with the National Cat Groomers Institute of America.',
      advantages: [
        'Recognised cat-specific (not just canine) grooming credential',
        'Validates safe feline handling and restraint',
        'Covers bathing, dematting and lion trims',
        'Builds client trust for anxious or matted cats',
        'Taught and tested by NCGIA evaluators'
      ]
    },
    roadmap: ['Train with NCGIA', 'Register for certification', 'Pass the written exam', 'Complete the hands-on groom', 'Maintain per institute'],
    prerequisites: 'Open to groomers; NCGIA training is the usual path.',
    eligibility: 'There is no rigid degree gate, but most candidates complete NCGIA training first. The institute sets any experience expectation for sitting the practical.',
    examMeta: {
      questions: 'Written exam plus hands-on practical groom',
      time: 'Written plus practical at a workshop',
      pass: 'Pass both written and practical',
      fee: 'Tied to NCGIA workshop/course (confirm)',
      format: 'In-person written and practical',
      admin: 'National Cat Groomers Institute of America'
    },
    topics: [
      { name: 'Feline handling', weight: '', note: 'Low-stress restraint and safety' },
      { name: 'Bathing and dematting', weight: '', note: 'Coat care, mat removal' },
      { name: 'Styling', weight: '', note: 'Lion trims and breed-appropriate cuts' },
      { name: 'Skin and coat', weight: '', note: 'Condition recognition' }
    ],
    examEssentials: [
      ['Format', 'Written + practical'],
      ['Delivery', 'NCGIA workshops / host sites'],
      ['Fee', 'Confirm with institute'],
      ['Validity', 'Per NCGIA policy']
    ],
    timeline: [
      { stage: 'Training', duration: 'Weeks' },
      { stage: 'Written exam', duration: 'Exam' },
      { stage: 'Practical groom', duration: 'Exam' }
    ],
    costBreakdown: {
      items: [
        { item: 'NCGIA training/workshop', fee: 'Confirm with institute' },
        { item: 'Certification fees', fee: 'Confirm with institute' }
      ],
      total: 'Confirm with institute',
      footnote: 'NCGIA does not publish a single standalone exam fee; cost is tied to its workshop/course. Figures not confirmed from a 2026 primary source.'
    },
    difficulty: 'Moderate',
    audience: 'Professional cat groomers and multi-species salons.',
    time: 'Weeks to months',
    cost: 'Confirm with institute',
    faqs: [
      { q: 'How hard is the CFMG?', a: 'It is moderately hard: the written test checks feline theory and the practical judges a real groom to standard. Cat handling skill matters more than speed.' },
      { q: 'How long should I prepare?', a: 'Most candidates train over several weeks, either through NCGIA self-study or a workshop, then test at a hosted event.' },
      { q: 'Does the CFMG expire?', a: 'The institute sets renewal or continuing-education expectations for the CFMG; verify the current cycle and fee with NCGIA.' },
      { q: 'Is the CFMG worth it?', a: 'For groomers serving cats, it is worthwhile: it differentiates you from canine-only groomers and reassures owners of anxious or matted cats.' },
      { q: 'Who is eligible?', a: 'Groomers can pursue the CFMG, typically after NCGIA training; the institute sets any experience requirement for the practical.' }
    ],
    summaryPoints: [
      'CFMG is NCGIA’s cat-grooming credential.',
      'Combines a written exam with a hands-on groom.',
      'Cost is tied to NCGIA workshop/course, not a flat exam fee.',
      'Confirm fees and renewal with the institute.'
    ],
    relatedSlugs: ['ndgaa-national-certified-master-groomer', 'certified-equine-massage-therapist', 'karen-pryor-academy-certified-training-partner'],
    sourceUrl: 'https://www.nationalcatgroomers.com/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'certified-professional-animal-scientist',
    body: 'American Registry of Professional Animal Scientists',
    tagline: 'The advanced credential for degreed animal-science professionals.',
    description: 'The Certified Professional Animal Scientist (PAS) is the American Registry of Professional Animal Scientists’ credential for scientists and advanced practitioners in animal science. It recognises species-focused expertise in nutrition, reproduction, management and production across livestock and companion-animal species. Because it requires an advanced degree in animal science or a closely related discipline, the PAS sits well above entry-level technician credentials and signals a rigorous, science-based professional standing.',
    quickAnswer: {
      summary: 'The PAS is ARPAS’s certification for advanced animal-science professionals, requiring an eligible advanced degree and a certification exam. Exact exam format, length, fee and scheduling are confirmed with the registry, so verify current details with ARPAS before applying. Maintenance is through ARPAS continuing professional development and renewal.',
      advantages: [
        'Recognised credential for animal-science professionals',
        'Signals advanced, species-focused expertise',
        'Supports industry, academic and consulting roles',
        'Backed by ARPAS peer standards',
        'Distinct from technician-level credentials'
      ]
    },
    roadmap: ['Confirm degree eligibility', 'Apply to ARPAS', 'Study the outline', 'Sit the exam', 'Maintain through CPD'],
    prerequisites: 'An advanced degree in animal science or a closely related discipline accepted by ARPAS.',
    eligibility: 'PAS requires an advanced (typically graduate-level) degree in animal science or a closely related field from an accepted institution. A bachelor’s alone generally does not qualify; review the ARPAS criteria before applying.',
    examMeta: {
      questions: 'ARPAS certification exam (count set by registry)',
      time: 'Confirm current exam length',
      pass: 'ARPAS passing standard',
      fee: 'Confirm current exam fee with ARPAS',
      format: 'Per ARPAS delivery (testing centre or remote)',
      admin: 'American Registry of Professional Animal Scientists'
    },
    topics: [
      { name: 'Nutrition', weight: '', note: 'Species nutrition and feed' },
      { name: 'Reproduction', weight: '', note: 'Breeding and physiology' },
      { name: 'Management & production', weight: '', note: 'Husbandry and systems' },
      { name: 'Professional practice', weight: '', note: 'Ethics and applied science' }
    ],
    examEssentials: [
      ['Education', 'Advanced animal-science degree'],
      ['Format', 'Per ARPAS delivery'],
      ['Fee', 'Confirm with ARPAS'],
      ['Validity', 'Renewed via CPD']
    ],
    timeline: [
      { stage: 'Confirm eligibility', duration: 'Before applying' },
      { stage: 'Study', duration: '1-3 months' },
      { stage: 'Exam', duration: 'Exam day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Application / exam fee', fee: 'Confirm with ARPAS' },
        { item: 'Prep materials', fee: 'Varies' }
      ],
      total: 'Confirm with ARPAS',
      footnote: 'ARPAS sets current eligibility, exam format, fee and renewal; specifics were not confirmed from a primary 2026 source.'
    },
    difficulty: 'Challenging',
    audience: 'Degreed animal-science professionals and scientists.',
    time: '1-3 months preparation',
    cost: 'Confirm with ARPAS',
    faqs: [
      { q: 'How hard is the PAS?', a: 'It is challenging because it assumes a graduate-level animal-science background and tests applied science across species, not memorised trivia.' },
      { q: 'How long should I prepare?', a: 'Plan one to three months reviewing the ARPAS content outline, focusing on nutrition, reproduction and management for your species focus.' },
      { q: 'Does the PAS expire?', a: 'ARPAS members maintain standing through continuing professional development and renewal; verify the current requirements with the registry.' },
      { q: 'Is the PAS worth it?', a: 'For scientists and advanced practitioners it is worthwhile: it is the recognised professional credential and supports industry, academic and consulting credibility.' },
      { q: 'Who is eligible?', a: 'You need an advanced degree in animal science or a closely related discipline accepted by ARPAS; a bachelor’s alone generally does not qualify.' }
    ],
    summaryPoints: [
      'PAS is ARPAS’s credential for advanced animal scientists.',
      'Requires an eligible graduate-level degree.',
      'Covers nutrition, reproduction and management.',
      'Eligibility and fee are confirmed with ARPAS.'
    ],
    relatedSlugs: ['beef-quality-assurance-certification', 'eas-master-beekeeper', 'certified-veterinary-practice-manager'],
    sourceUrl: 'https://www.arpas.org/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'ccpdt-cpdt-ksa',
    body: 'Certification Council for Professional Dog Trainers',
    tagline: 'The video-skills assessment proving hands-on training ability.',
    description: 'The Certified Professional Dog Trainer – Knowledge and Skills Assessed (CPDT-KSA) is the Certification Council for Professional Dog Trainers’ practical follow-on to the CPDT-KA. Instead of a written test, candidates submit video recordings demonstrating hands-on training of loose-leash walking, recall and stay behaviours, graded by subject-matter experts against CCPDT standards. It is open only to current CPDT-KA certificants and proves that book knowledge translates into real-world training skill.',
    quickAnswer: {
      summary: 'The CPDT-KSA is a video-based skills assessment for current CPDT-KA holders: you submit four video recordings of training exercises within a three-week testing period. The 2026 fee is $255 for current CPDT-KA certificants. It is graded by subject-matter experts on training skills, instruction, equipment use and adherence to CCPDT policies.',
      advantages: [
        'Proves real hands-on training skill, not just knowledge',
        'Open only to CPDT-KA holders, raising its value',
        'Graded by independent subject-matter experts',
        'Lower cost than the knowledge exams',
        'Strengthens your professional profile'
      ]
    },
    roadmap: ['Hold the CPDT-KA', 'Apply in the window', 'Film 4 exercises', 'Submit within 3 weeks', 'Recertify with CE'],
    prerequisites: 'Must be a current CPDT-KA certificant.',
    eligibility: 'Only current CPDT-KA certificants may sit the CPDT-KSA. You submit four video recordings of specified training exercises during a three-week testing period.',
    examMeta: {
      questions: '4 video-recorded training exercises',
      time: '3 weeks to submit videos',
      pass: 'Graded by subject-matter experts',
      fee: '$255 (current CPDT-KA holders)',
      format: 'Video submission, online',
      admin: 'Professional Testing Corporation'
    },
    topics: [
      { name: 'Training skills', weight: '', note: 'Loose-leash, recall, stay demonstrated' },
      { name: 'Instruction skills', weight: '', note: 'Teaching the human end of the leash' },
      { name: 'Equipment & modalities', weight: '', note: 'Humane, LIMA-aligned use' },
      { name: 'CCPDT policies', weight: '', note: 'Standards of Practice compliance' }
    ],
    examEssentials: [
      ['Prerequisite', 'Current CPDT-KA'],
      ['Format', 'Video submission'],
      ['Window', '3 weeks to submit'],
      ['Fee', '$255']
    ],
    timeline: [
      { stage: 'Hold CPDT-KA', duration: 'First' },
      { stage: 'Film exercises', duration: 'Up to 3 weeks' },
      { stage: 'Grading', duration: 'After submission' }
    ],
    costBreakdown: {
      items: [
        { item: 'Skills assessment fee', fee: '$255' },
        { item: 'Late application', fee: '$100' }
      ],
      total: '$255-$355',
      footnote: '2026 CCPDT fee schedule; open only to current CPDT-KA certificants.'
    },
    difficulty: 'Moderate',
    audience: 'CPDT-KA holders adding a practical credential.',
    time: 'Up to 3 weeks to submit',
    cost: '$255-$355',
    faqs: [
      { q: 'How hard is the CPDT-KSA?', a: 'It is moderately hard because the videos are judged on real skill, not theory. CPDT-KA holders with active training practices usually do well if they film clean, standards-compliant sessions.' },
      { q: 'How long does it take?', a: 'You have a three-week window to film and submit four exercises. Prep is mostly about rehearsing the specified behaviours and capturing good footage.' },
      { q: 'Does the CPDT-KSA expire?', a: 'It shares the CPDT-KA three-year renewal cycle; you maintain it with 36 CEUs or by retaking, plus the $220 recertification fee.' },
      { q: 'Is the CPDT-KSA worth it?', a: 'For trainers wanting to prove hands-on ability, yes. It complements the knowledge exam and is cheaper, signalling both theory and practice.' },
      { q: 'Who is eligible?', a: 'Only current CPDT-KA certificants may submit the video skills assessment.' }
    ],
    summaryPoints: [
      'CPDT-KSA is the practical, video-based CPDT follow-on.',
      'Requires current CPDT-KA status.',
      'Four training videos submitted in a 3-week window.',
      '2026 fee is $255 for current certificants.'
    ],
    relatedSlugs: ['ccpdt-cpdt-ka', 'ccpdt-cbcc-ka', 'karen-pryor-academy-certified-training-partner'],
    sourceUrl: 'https://www.ccpdt.org/about',
    reviewed: '2026-08',
    confidence: 'high'
  }
  ,
  {
    slug: 'ccpdt-cpdt-ka',
    body: 'Certification Council for Professional Dog Trainers',
    tagline: 'The foundational, independently accredited dog-trainer knowledge credential.',
    description: 'The Certified Professional Dog Trainer – Knowledge Assessed (CPDT-KA) is the Certification Council for Professional Dog Trainers’ foundational credential and the most widely held dog-trainer certification in North America. It tests learning theory, instruction, ethology, husbandry and professional ethics through a 200-question exam, and it requires 300 hours of documented paid training experience. Because it is NCCA-accredited and experience-gated, the CPDT-KA is the credential employers and clients trust over "buy a certificate" alternatives.',
    quickAnswer: {
      summary: 'The CPDT-KA is a 200-question (180 scored, 20 pretest) multiple-choice exam with a three-hour limit, delivered at US/Canada test centres or by live remote proctoring in spring and fall windows. The 2026 fee is $425 (plus a $100 late fee). You need 300 hours of paid dog-training experience in the last three years, and you recertify every three years with 36 CEUs and a $220 fee.',
      advantages: [
        'NCCA-accredited, independently developed exam',
        'Requires documented 300 hours of real experience',
        'Most recognised dog-trainer credential in North America',
        'Renews with CE rather than always retesting',
        'Trusted by clients and employers over paid certificates'
      ]
    },
    roadmap: ['Log 300 training hours', 'Apply by deadline', 'Book a testing slot', 'Pass the 200-question exam', 'Recertify every 3 years'],
    prerequisites: 'At least 18 years old, high-school diploma or equivalent, and 300 hours of paid dog-training experience in the last three years.',
    eligibility: 'You must be 18 or older with a high-school diploma or equivalent and log at least 300 hours of paid, hands-on dog-training services to a variety of clients within the previous three years. An attestation from a CCPDT certificant, veterinarian or approved professional is required, along with compliance with the CCPDT Code of Ethics and LIMA principles.',
    examMeta: {
      questions: '200 (180 scored, 20 pretest)',
      time: '3 hours',
      pass: 'CCPDT passing standard',
      fee: '$425 ($100 late fee)',
      format: 'Multiple-choice, computer-based or remote proctored',
      admin: 'Professional Testing Corporation'
    },
    topics: [
      { name: 'Instructional and Teaching Skills', weight: '32%' },
      { name: 'Canine Behavior, Ethology, and Well-being', weight: '26%' },
      { name: 'Applied Learning Theory', weight: '25%' },
      { name: 'Professional Skills, Ethics, and Laws & Regulations', weight: '17%' }
    ],
    examEssentials: [
      ['Experience', '300 hrs paid training in 3 yrs'],
      ['Testing', 'Spring and fall windows'],
      ['Recert', 'Every 3 yrs, 36 CEUs + $220'],
      ['Delivery', 'Centre or live remote proctoring']
    ],
    timeline: [
      { stage: 'Log experience', duration: 'Up to 3 years' },
      { stage: 'Study', duration: '3-6 months' },
      { stage: 'Exam', duration: '3 hours' },
      { stage: 'Recertify', duration: 'Every 3 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Exam fee', fee: '$425' },
        { item: 'Late application', fee: '$100' },
        { item: 'Practice test', fee: '$105' },
        { item: 'Recertification', fee: '$220 / 3 yrs' }
      ],
      total: '$425-$640 (plus CE costs)',
      footnote: '2026 CCPDT fee schedule; practice test optional. CEU costs vary.'
    },
    difficulty: 'Moderate',
    audience: 'Working dog trainers seeking the baseline credential.',
    time: '3-6 months preparation',
    cost: '$425-$640',
    faqs: [
      { q: 'How hard is the CPDT-KA?', a: 'It is moderately hard: the breadth of learning theory, ethology and ethics means rote memorisation is not enough. Candidates with real training hours usually do better than those relying only on a course.' },
      { q: 'How long should I study?', a: 'Most candidates spend three to six months reviewing the blueprint, especially the 32% instructional-skills and 26% behaviour sections, alongside logged hours.' },
      { q: 'Does the CPDT-KA expire?', a: 'Yes, it is renewed every three years either by earning 36 CEUs or by retaking the exam, with a $220 recertification fee.' },
      { q: 'Is the CPDT-KA worth it?', a: 'For professional trainers it is the standard, independently accredited credential. It differentiates you from unqualified competitors and reassures clients and veterinarians.' },
      { q: 'Who is eligible?', a: 'You need 300 hours of paid dog-training experience in the past three years, a high-school diploma, and an attestation from an approved professional.' }
    ],
    summaryPoints: [
      'CPDT-KA is CCPDT’s foundational dog-trainer credential.',
      '200 questions, 3 hours, $425 fee, 4 weighted domains.',
      'Requires 300 hours of paid training in 3 years.',
      'Renewed every 3 years with 36 CEUs and $220.'
    ],
    relatedSlugs: ['ccpdt-cbcc-ka', 'ccpdt-cpdt-ksa', 'karen-pryor-academy-certified-training-partner'],
    sourceUrl: 'https://www.ccpdt.org/about',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'certified-veterinary-practice-manager',
    body: 'Veterinary Hospital Managers Association',
    tagline: 'The recognised management credential for veterinary-practice leaders.',
    description: 'The Certified Veterinary Practice Manager (CVPM) is the Veterinary Hospital Managers Association’s credential for people who run veterinary practices. It validates finance, human resources, law and ethics, marketing and organisational management, and it requires documented practice-management experience plus college management coursework and CE. Because it is the only broadly recognised vet-practice management certification, the CVPM carries real weight with practice owners and consolidators when hiring or promoting managers.',
    quickAnswer: {
      summary: 'The CVPM is a computer-based exam of up to 200 points (true/false and multiple-choice, some scenario-based) with a 3.5-hour limit, delivered at HOST testing centres in the US and Canada four times a year. The 2026 fee is $695 for VHMA members and $845 for non-members; the re-exam fee is $100 less. You must meet experience, education and recommendation prerequisites, then renew every two years with 48 CE hours and a $225 fee.',
      advantages: [
        'The recognised veterinary management credential',
        'Validates finance, HR, law and operations skill',
        'Signals readiness for practice-leader roles',
        'Renews with CE rather than a single exam',
        'Member pricing lowers the entry cost'
      ]
    },
    roadmap: ['Meet prerequisites', 'Apply and pay', 'Schedule a HOST centre', 'Pass the 3.5-hour exam', 'Renew every 2 years'],
    prerequisites: 'About 3 years of practice-management experience, 18 college credit hours of management courses, 48 hours of management CE, and 4 letters of recommendation.',
    eligibility: 'Applicants must document roughly three years of active practice-management employment, 18 semester hours of management-related college coursework, 48 hours of management continuing education, and four letters of recommendation. Minimum requirements must be met at application; the application is then valid for two years.',
    examMeta: {
      questions: 'Up to 200 points (true/false and multiple choice)',
      time: '3.5 hours',
      pass: 'VHMA pass/fail standard',
      fee: '$695 member / $845 non-member (2026)',
      format: 'Computer-based at HOST testing centres',
      admin: 'VHMA (HOST centres, no remote option)'
    },
    topics: [
      { name: 'Human Resources', weight: '', note: 'Hiring, law, staff management' },
      { name: 'Law and Ethics', weight: '', note: 'Compliance and professional conduct' },
      { name: 'Marketing', weight: '', note: 'Client growth and retention' },
      { name: 'Organisation of the Practice', weight: '', note: 'Operations and systems' },
      { name: 'Finance', weight: '', note: 'Budgets, P&L, reporting' }
    ],
    examEssentials: [
      ['Delivery', 'HOST centres, 4x per year']
      ['Retake', '$595 member / $745 non-member'],
      ['Renewal', '48 CE hrs + $225 / 2 yrs'],
      ['Remote', 'Not available']
    ],
    timeline: [
      { stage: 'Meet prerequisites', duration: 'Months to years' },
      { stage: 'Apply', duration: '30-60 min' },
      { stage: 'Study', duration: '2-4 months' },
      { stage: 'Exam', duration: '3.5 hours' },
      { stage: 'Recertify', duration: 'Every 2 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Exam fee (member)', fee: '$695' },
        { item: 'Exam fee (non-member)', fee: '$845' },
        { item: 'Re-exam (member)', fee: '$595' },
        { item: 'Recertification', fee: '$225 / 2 yrs' }
      ],
      total: '$695-$845 (plus CE costs)',
      footnote: '2026 VHMA fee schedule; reschedule/cancellation fees of $50-$150 apply by timing.'
    },
    difficulty: 'Challenging',
    audience: 'Veterinary practice managers and aspiring leaders.',
    time: '2-4 months preparation',
    cost: '$695-$845',
    faqs: [
      { q: 'How hard is the CVPM?', a: 'It is challenging because it tests five management domains at a working-manager level, not trivia. Candidates who already manage a practice and have the required coursework usually find it fair.' },
      { q: 'How long should I study?', a: 'Most candidates spend two to four months reviewing finance, HR law, marketing and operations, often using VHMA study resources.' },
      { q: 'Does the CVPM expire?', a: 'Yes, it is renewed every two years by completing 48 CE hours (24 in-person) and paying the $225 recertification fee.' },
      { q: 'Is the CVPM worth it?', a: 'For practice managers it is the recognised credential and supports hiring, promotion and credibility with owners and consolidators.' },
      { q: 'Who is eligible?', a: 'You need about three years of management experience, 18 management college credits, 48 management CE hours and four recommendation letters.' }
    ],
    summaryPoints: [
      'CVPM is VHMA’s veterinary management credential.',
      'Up to 200 points, 3.5 hours, HOST centres only.',
      '2026 fee $695 member / $845 non-member.',
      'Renewed every 2 years with 48 CE hours and $225.'
    ],
    relatedSlugs: ['navta-approved-veterinary-assistant', 'vtne', 'veterinary-technician-specialist'],
    sourceUrl: 'https://www.vhma.org/cvpmwhocanapply',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'iwrc-certified-wildlife-rehabilitator',
    body: 'International Wildlife Rehabilitation Council',
    tagline: 'The knowledge credential for safe, ethical wild-animal rehabilitation.',
    description: 'The Certified Wildlife Rehabilitator (CWR) is the International Wildlife Rehabilitation Council’s credential for people who rehabilitate native wild animals. It covers intake, nutrition, housing, zoonoses, euthanasia and release criteria, and it is aimed at both volunteers and professionals in wildlife centres. The CWR signals that a rehabilitator understands the full care pathway and the public-health and welfare responsibilities that wild-animal work carries.',
    quickAnswer: {
      summary: 'The CWR is a multiple-choice examination offered by IWRC, typically at conferences or via arranged proctoring, assessing intake, nutrition, housing, zoonoses and release criteria. Exact exam length, fee and pass mark are set by the council, so confirm current details with IWRC before registering. The credential supports wildlife-centre staffing and volunteer credibility.',
      advantages: [
        'Recognised wildlife-rehabiliation knowledge credential',
        'Covers the full care pathway and release criteria',
        'Signals zoonosis and welfare awareness',
        'Supports wildlife-centre roles and volunteering',
        'Backed by IWRC training and manuals'
      ]
    },
    roadmap: ['Study IWRC materials', 'Register for the exam', 'Arrange a sitting', 'Pass the multiple-choice exam', 'Maintain per council'],
    prerequisites: 'Open to wildlife rehabilitators and volunteers; review IWRC criteria.',
    eligibility: 'The CWR is aimed at people involved in wildlife rehabilitation. IWRC sets any experience or training expectation for sitting the exam; many candidates study its core coursework first.',
    examMeta: {
      questions: 'Multiple-choice exam (count set by IWRC)',
      time: 'Confirm current exam length',
      pass: 'IWRC passing standard',
      fee: 'Confirm current fee with IWRC',
      format: 'At conferences or via approved proctoring',
      admin: 'International Wildlife Rehabilitation Council'
    },
    topics: [
      { name: 'Intake and assessment', weight: '', note: 'Triage and initial care' },
      { name: 'Nutrition and housing', weight: '', note: 'Species-appropriate care' },
      { name: 'Zoonoses', weight: '', note: 'Public-health safety' },
      { name: 'Release criteria', weight: '', note: 'Fitness and post-release success' }
    ],
    examEssentials: [
      ['Format', 'Multiple-choice'],
      ['Delivery', 'Conferences / proctored'],
      ['Fee', 'Confirm with IWRC'],
      ['Validity', 'Per IWRC policy']
    ],
    timeline: [
      { stage: 'Study', duration: 'Weeks' },
      { stage: 'Exam', duration: 'Exam day' }
    ],
    costBreakdown: {
      items: [
        { item: 'Exam fee', fee: 'Confirm with IWRC' },
        { item: 'Prep course/manual', fee: 'Varies' }
      ],
      total: 'Confirm with IWRC',
      footnote: 'IWRC sets current exam length, fee and renewal; specifics were not confirmed from a primary 2026 source.'
    },
    difficulty: 'Moderate',
    audience: 'Wildlife rehabilitators, centre staff and volunteers.',
    time: 'Weeks to months',
    cost: 'Confirm with IWRC',
    faqs: [
      { q: 'How hard is the CWR?', a: 'It is moderately hard, testing the full rehabilitation pathway including zoonoses and release criteria rather than just handling. IWRC coursework is the best preparation.' },
      { q: 'How long should I prepare?', a: 'Most candidates study for several weeks using IWRC materials, especially the wildlife rehabilitation manual and species care guidance.' },
      { q: 'Does the CWR expire?', a: 'The council sets any continuing-education or renewal expectation for the CWR; verify the current policy with IWRC.' },
      { q: 'Is the CWR worth it?', a: 'For wildlife-centre staff and serious volunteers it is worthwhile, signalling a standardised knowledge base that centres value for permitting and credibility.' },
      { q: 'Who is eligible?', a: 'The exam targets people involved in wildlife rehabilitation; IWRC sets any experience or training prerequisite for sitting it.' }
    ],
    summaryPoints: [
      'CWR is IWRC’s wildlife rehabilitation credential.',
      'Covers intake, nutrition, housing, zoonoses and release.',
      'Delivered at conferences or via proctoring.',
      'Confirm exam length, fee and renewal with IWRC.'
    ],
    relatedSlugs: ['certified-animal-welfare-administrator', 'certified-animal-control-officer-level-1', 'navta-approved-veterinary-assistant'],
    sourceUrl: 'https://theiwrc.org/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'eas-master-beekeeper',
    body: 'Eastern Apicultural Society',
    tagline: 'The four-part beekeeper credential from written theory to lab skill.',
    description: 'The EAS Master Beekeeper Certification is the Eastern Apicultural Society’s advanced beekeeper credential, earned through four parts: written, oral, practical and laboratory examinations. It covers colony management, bee biology, disease diagnosis and public outreach, and it is built as a ladder from Apprentice through Journeyman to Master. The credential is respected by state beekeeping associations and signals a beekeeper who can both keep healthy colonies and teach others.',
    quickAnswer: {
      summary: 'The EAS Master Beekeeper is earned by passing written, oral, practical and laboratory components, typically progressing through Apprentice and Journeyman tiers first. Examinations are conducted in person at EAS conference and programme events; fees and scheduling are set by the society. Confirm current exam structure, cost and renewal with EAS.',
      advantages: [
        'Respected multi-part beekeeper credential',
        'Covers biology, management, disease and outreach',
        'Built as a progressive Apprentice-to-Master ladder',
        'Validates both knowledge and hands-on skill',
        'Supports teaching and extension roles'
      ]
    },
    roadmap: ['Start at Apprentice', 'Progress to Journeyman', 'Prepare 4 components', 'Test at EAS events', 'Maintain per society'],
    prerequisites: 'Open to beekeepers progressing through the EAS levels.',
    eligibility: 'Candidates move through the EAS certification ladder, with the Master level requiring the earlier tiers and their associated experience. The society sets the specifics for each level.',
    examMeta: {
      questions: 'Written, oral, practical and laboratory exams',
      time: 'Across conference/week events',
      pass: 'Pass all four components',
      fee: 'Confirm current fee with EAS',
      format: 'In-person at EAS events',
      admin: 'Eastern Apicultural Society'
    },
    topics: [
      { name: 'Colony management', weight: '', note: 'Hive health and productivity' },
      { name: 'Bee biology', weight: '', note: 'Anatomy, caste, development' },
      { name: 'Disease', weight: '', note: 'Diagnosis and treatment' },
      { name: 'Public outreach', weight: '', note: 'Teaching and extension' }
    ],
    examEssentials: [
      ['Components', 'Written, oral, practical, lab'],
      ['Delivery', 'EAS conference events'],
      ['Ladder', 'Apprentice to Master'],
      ['Fee', 'Confirm with EAS']
    ],
    timeline: [
      { stage: 'Lower tiers', duration: 'Months to years' },
      { stage: 'Study', duration: 'Per level' },
      { stage: 'Master exams', duration: 'Conference week' }
    ],
    costBreakdown: {
      items: [
        { item: 'EAS membership', fee: 'Annual dues' },
        { item: 'Exam/certification fees', fee: 'Confirm with EAS' }
      ],
      total: 'Confirm with EAS',
      footnote: 'EAS sets current fees, scheduling and renewal for each certification tier; not confirmed from a single 2026 primary source.'
    },
    difficulty: 'Challenging',
    audience: 'Serious beekeepers progressing to Master level.',
    time: 'Months to years across tiers',
    cost: 'Confirm with EAS',
    faqs: [
      { q: 'How hard is the EAS Master Beekeeper?', a: 'It is challenging because it combines four assessment types, including a lab and an oral defence, not just a written test. Most candidates build up through the lower tiers first.' },
      { q: 'How long does it take?', a: 'Progressing Apprentice to Master typically takes months to years, with each tier requiring study and a conference-week testing event.' },
      { q: 'Does the Master Beekeeper expire?', a: 'EAS outlines any renewal or continuing-involvement expectation for its certifications; verify the current policy with the society.' },
      { q: 'Is it worth it?', a: 'For beekeepers who teach, sell nucs or lead associations, the Master Beekeeper is worthwhile and respected by state groups.' },
      { q: 'Who is eligible?', a: 'Beekeepers progress through the EAS ladder; the Master level requires the earlier tiers and their experience, per society rules.' }
    ],
    summaryPoints: [
      'EAS Master Beekeeper is a four-part certification.',
      'Written, oral, practical and laboratory components.',
      'Progresses Apprentice to Journeyman to Master.',
      'Confirm fees and renewal with EAS.'
    ],
    relatedSlugs: ['beef-quality-assurance-certification', 'certified-professional-animal-scientist', 'landscape-industry-certified-horticultural-technician'],
    sourceUrl: 'https://www.easternapiculture.org/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'iaabc-certified-dog-behavior-consultant',
    body: 'International Association of Animal Behavior Consultants',
    tagline: 'The case-study and assessment credential for canine behaviour consultants.',
    description: 'The IAABC Certified Dog Behavior Consultant (CDBC) is the International Association of Animal Behavior Consultants’ credential for professionals who resolve complex canine behaviour problems. It rests on documented consulting experience plus a science-based knowledge assessment and case-study review under the LIMA framework. The CDBC is aimed at consultants whose work goes beyond basic training into aggression, anxiety and behaviour-change planning, and it signals adherence to IAABC’s ethics and humane-hierarchy standards.',
    quickAnswer: {
      summary: 'The CDBC is earned through documented behaviour-consulting experience, a case-study application and an online knowledge assessment under IAABC’s LIMA framework. The dog-consultant path asks for substantial consulting hours (commonly 500 or more) within the eligibility window. Confirm current exam length, fee and renewal with IAABC before applying.',
      advantages: [
        'Science-based, LIMA-aligned behaviour credential',
        'Case-study review proves real-world skill',
        'Signals ethics and humane-hierarchy adherence',
        'International, multi-species association backing',
        'Supports veterinary and client referrals'
      ]
    },
    roadmap: ['Log consulting hours', 'Submit case studies', 'Pass knowledge assessment', 'Maintain through CE', 'Renew per IAABC'],
    prerequisites: 'Documented animal behaviour-consulting experience (dog path commonly 500+ hours); review IAABC criteria.',
    eligibility: 'Candidates must document substantial behaviour-consulting experience (the dog consultant path commonly requires 500 or more hours) within the eligibility window, plus references and ethics attestation. IAABC sets the precise threshold.',
    examMeta: {
      questions: 'Knowledge assessment plus case-study review',
      time: 'Assessment + application review',
      pass: 'IAABC standards',
      fee: 'Confirm current fee with IAABC',
      format: 'Online assessment and documented cases',
      admin: 'International Association of Animal Behavior Consultants'
    },
    topics: [
      { name: 'Behaviour science', weight: '', note: 'Learning theory and assessment' },
      { name: 'Intervention planning', weight: '', note: 'Behaviour-change protocols' },
      { name: 'Ethics and LIMA', weight: '', note: 'Humane hierarchy compliance' }
    ],
    examEssentials: [
      ['Experience', 'Commonly 500+ hrs (dog path)'],
      ['Format', 'Online assessment + cases'],
      ['Fee', 'Confirm with IAABC'],
      ['Validity', 'Renewed via CE']
    ],
    timeline: [
      { stage: 'Log experience', duration: 'Years' },
      { stage: 'Apply', duration: '30-60 min' },
      { stage: 'Assessment', duration: 'Exam' }
    ],
    costBreakdown: {
      items: [
        { item: 'Application / exam fee', fee: 'Confirm with IAABC' },
        { item: 'Membership', fee: 'Annual dues' }
      ],
      total: 'Confirm with IAABC',
      footnote: 'IAABC sets current eligibility, exam format, fee and renewal; specifics were not confirmed from a primary 2026 source.'
    },
    difficulty: 'Challenging',
    audience: 'Canine behaviour consultants and trainers handling cases.',
    time: 'Months to years of experience',
    cost: 'Confirm with IAABC',
    faqs: [
      { q: 'How hard is the CDBC?', a: 'It is challenging because it combines a knowledge assessment with case-study review, so both theory and documented practice matter. Candidates without real consulting cases struggle.' },
      { q: 'How long should I prepare?', a: 'Preparation is mostly building the required consulting hours and cases; the assessment itself is studied over weeks using IAABC materials and behaviour-science literature.' },
      { q: 'Does the CDBC expire?', a: 'IAABC certificants renew through continuing education and membership; verify the current cycle and fee with the association.' },
      { q: 'Is the CDBC worth it?', a: 'For serious behaviour consultants it is worthwhile: it is science-based, internationally recognised, and signals humane, ethical practice to clients and vets.' },
      { q: 'Who is eligible?', a: 'You need documented behaviour-consulting experience (commonly 500+ hours for the dog path), references and an ethics attestation; IAABC sets the exact threshold.' }
    ],
    summaryPoints: [
      'CDBC is IAABC’s canine behaviour consultant credential.',
      'Combines a knowledge assessment with case-study review.',
      'Requires substantial documented consulting hours.',
      'Confirm fee and renewal with IAABC.'
    ],
    relatedSlugs: ['ccpdt-cbcc-ka', 'ccpdt-cpdt-ka', 'karen-pryor-academy-certified-training-partner'],
    sourceUrl: 'https://www.iaabc.org/',
    reviewed: '2026-08',
    confidence: 'medium'
  }
  ,
  {
    slug: 'karen-pryor-academy-certified-training-partner',
    body: 'Karen Pryor Academy',
    tagline: 'The assessed clicker-training credential from the KPA programme.',
    description: 'The Karen Pryor Academy Certified Training Partner (KPA CTP) is the professional designation earned by completing KPA’s Dog Trainer Professional programme, a roughly six-month course in clicker training and positive reinforcement. Rather than a single sit-down exam, candidates build a video portfolio and meet practical benchmarks evaluated by KPA faculty. The CTP signals that a trainer was assessed on humane, science-based methods and is listed in KPA’s professional directory.',
    quickAnswer: {
      summary: 'The KPA CTP is earned by completing the KPA Dog Trainer Professional programme: online study plus in-person workshops, with video assessments replacing a written exam. Cost is programme tuition rather than a standalone exam fee, and the designation is awarded on successful completion of the benchmarks. Confirm current tuition and renewal expectations with Karen Pryor Academy.',
      advantages: [
        'Grounded in clicker training and positive reinforcement',
        'Skills assessed by video, not just theory',
        'Listed in KPA’s professional directory',
        'Recognised humane, science-based brand',
        'Builds a portfolio of real training work'
      ]
    },
    roadmap: ['Apply to KPA', 'Complete coursework', 'Build video portfolio', 'Meet benchmarks', 'Earn the CTP'],
    prerequisites: 'Open enrolment into a KPA programme; no fixed prior credential.',
    eligibility: 'The CTP is earned through KPA’s programme, which is open to applicants meeting KPA’s enrolment criteria. There is no separate public exam gate beyond the programme assessments.',
    examMeta: {
      questions: 'Video assessments and programme benchmarks',
      time: 'Roughly six months',
      pass: 'Meet KPA faculty benchmarks',
      fee: 'Programme tuition (confirm with KPA)',
      format: 'Online study + in-person workshops',
      admin: 'Karen Pryor Academy'
    },
    topics: [
      { name: 'Clicker training', weight: '', note: 'Marker training fundamentals' },
      { name: 'Behaviour science', weight: '', note: 'Applied learning theory' },
      { name: 'Teaching skills', weight: '', note: 'Coaching the human end' }
    ],
    examEssentials: [
      ['Type', 'Programme-based credential'],
      ['Assessment', 'Video portfolio + workshops'],
      ['Fee', 'Tuition, not exam fee'],
      ['Validity', 'Per KPA policy']
    ],
    timeline: [
      { stage: 'Enrol', duration: 'Same day' },
      { stage: 'Coursework', duration: '~6 months' },
      { stage: 'Assessment', duration: 'Programme' }
    ],
    costBreakdown: {
      items: [
        { item: 'Programme tuition', fee: 'Confirm with KPA' },
        { item: 'Workshop travel', fee: 'Varies' }
      ],
      total: 'Confirm with KPA',
      footnote: 'The CTP is earned through KPA training; tuition figures were not confirmed from a primary 2026 source.'
    },
    difficulty: 'Moderate',
    audience: 'Dog trainers pursuing clicker-training credentials.',
    time: '~6 months',
    cost: 'Confirm with KPA',
    faqs: [
      { q: 'How hard is the KPA CTP?', a: 'It is moderately demanding because you must demonstrate real training skill on video, not just pass a test. Candidates with regular training practice progress smoothly.' },
      { q: 'How long does it take?', a: 'The Dog Trainer Professional programme runs roughly six months, combining online study with in-person workshop sessions and video submissions.' },
      { q: 'Does the CTP expire?', a: 'KPA communicates renewal or continuing-education expectations to its CTPs; confirm the current policy with the academy.' },
      { q: 'Is the KPA CTP worth it?', a: 'For trainers who want a recognised positive-reinforcement credential and directory listing, it is worthwhile, though total tuition should be weighed against other options.' },
      { q: 'Who is eligible?', a: 'Enrolment is through KPA’s programme; there is no separate public exam prerequisite beyond meeting KPA’s application criteria.' }
    ],
    summaryPoints: [
      'KPA CTP is earned through KPA’s training programme.',
      'Video assessments replace a single written exam.',
      'Cost is programme tuition, not a flat exam fee.',
      'Confirm tuition and renewal with KPA.'
    ],
    relatedSlugs: ['ccpdt-cpdt-ka', 'ccpdt-cbcc-ka', 'iaabc-certified-dog-behavior-consultant'],
    sourceUrl: 'https://karenpryoracademy.com/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'landscape-industry-certified-horticultural-technician',
    body: 'National Association of Landscape Professionals',
    tagline: 'The hands-on green-industry credential for horticultural technicians.',
    description: 'The Landscape Industry Certified Horticultural Technician is the National Association of Landscape Professionals’ credential for technicians who install, maintain and care for landscapes. It pairs a written exam (plant identification, installation, maintenance, irrigation, safety) with a hands-on practical station evaluation. Because it tests field skill, it is valued by employers who need technicians who can identify plants and perform work correctly on site rather than just pass theory.',
    quickAnswer: {
      summary: 'The Landscape Industry Certified Horticultural Technician is earned by passing NALP’s written exam and a hands-on practical evaluation, usually at a hosted testing event. Exam format, length, fee and scheduling are set by NALP, so confirm current details with the association. The credential is renewed on NALP’s cycle with continuing education.',
      advantages: [
        'Recognised green-industry technician credential',
        'Tests real field skill, not just theory',
        'Covers plant ID, install, maintenance, irrigation',
        'Valued by landscape employers',
        'Supports career progression in horticulture'
      ]
    },
    roadmap: ['Confirm eligibility', 'Apply and pay', 'Study the blueprint', 'Sit written + practical', 'Renew via CE'],
    prerequisites: 'Landscape-industry experience and/or education per NALP eligibility.',
    eligibility: 'Candidates typically need a mix of landscape-industry experience and/or education; NALP sets the exact eligibility by certification track. Review the current criteria before applying.',
    examMeta: {
      questions: 'Written exam plus hands-on practical stations',
      time: 'Written and practical on exam day',
      pass: 'NALP passing standard',
      fee: 'Confirm current fee with NALP',
      format: 'In-person written and practical',
      admin: 'National Association of Landscape Professionals'
    },
    topics: [
      { name: 'Plant identification', weight: '', note: 'Ornamental and turf species' },
      { name: 'Installation', weight: '', note: 'Planting and establishment' },
      { name: 'Maintenance', weight: '', note: 'Pruning, care, IPM' },
      { name: 'Irrigation', weight: '', note: 'Systems and efficiency' },
      { name: 'Safety', weight: '', note: 'Equipment and compliance' }
    ],
    examEssentials: [
      ['Format', 'Written + practical'],
      ['Delivery', 'NALP-hosted events'],
      ['Fee', 'Confirm with NALP'],
      ['Validity', 'Renewed via CE']
    ],
    timeline: [
      { stage: 'Study', duration: 'Weeks' },
      { stage: 'Written exam', duration: 'Exam' },
      { stage: 'Practical', duration: 'Exam' }
    ],
    costBreakdown: {
      items: [
        { item: 'Application / exam fee', fee: 'Confirm with NALP' },
        { item: 'Prep materials', fee: 'Varies' }
      ],
      total: 'Confirm with NALP',
      footnote: 'NALP sets current exam length, fee and renewal; not confirmed from a single 2026 primary source.'
    },
    difficulty: 'Moderate',
    audience: 'Landscape and horticulture technicians.',
    time: 'Weeks to months',
    cost: 'Confirm with NALP',
    faqs: [
      { q: 'How hard is the Horticultural Technician cert?', a: 'It is moderately hard: the written theory is learnable, but the practical favours people with real field experience in planting, pruning and irrigation.' },
      { q: 'How long should I prepare?', a: 'Most candidates study the blueprint for several weeks, drilling plant identification and the hands-on tasks before a hosted event.' },
      { q: 'Does it expire?', a: 'NALP certifications are renewed on a cycle with continuing education; verify the current requirements and fee with the association.' },
      { q: 'Is it worth it?', a: 'For landscape technicians it is worthwhile: it is the recognised industry credential and can support hiring and advancement.' },
      { q: 'Who is eligible?', a: 'Candidates need a combination of landscape experience and/or education per NALP’s track-specific eligibility; check current criteria.' }
    ],
    summaryPoints: [
      'Horticultural Technician is NALP’s hands-on landscape credential.',
      'Combines a written exam with practical stations.',
      'Covers plant ID, installation, maintenance, irrigation.',
      'Confirm fee and renewal with NALP.'
    ],
    relatedSlugs: ['beef-quality-assurance-certification', 'certified-professional-animal-scientist', 'eas-master-beekeeper'],
    sourceUrl: 'https://www.landscapeprofessionals.org/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'certified-animal-control-officer-level-1',
    body: 'National Animal Care & Control Association',
    tagline: 'The entry certification for animal control officers.',
    description: 'The NACAA Certified Animal Control Officer Level 1 is the entry credential in the National Animal Care & Control Association’s tiered ACO programme. It covers the legal basis of animal control, safe capture and restraint, investigations fundamentals and field documentation. Level 1 is designed for new officers and establishes the core knowledge needed before progressing to the cruelty-investigation and supervision levels.',
    quickAnswer: {
      summary: 'The ACO Level 1 certification is earned by completing NACAA’s entry training and passing its assessment, delivered online and through instructor-led programmes. Exam length, fee and pass mark are set by NACAA, so confirm current details with the association. The credential carries NACAA renewal and continuing-training expectations.',
      advantages: [
        'Recognised entry credential for animal control work',
        'Covers law, capture, investigations basics',
        'Foundation for Levels 2 and 3',
        'Preferred or required by many agencies',
        'Builds field-documentation skill'
      ]
    },
    roadmap: ['Choose Level 1', 'Complete training', 'Register for exam', 'Pass the assessment', 'Renew per NACAA'],
    prerequisites: 'Open to animal control personnel; no fixed prior credential.',
    eligibility: 'Level 1 is aimed at entry-level animal control officers and those new to the field. NACAA sets any specific experience or training expectation for the assessment.',
    examMeta: {
      questions: 'Level 1 assessment (count set by NACAA)',
      time: 'Confirm current exam length',
      pass: 'NACAA standard',
      fee: 'Confirm current fee with NACAA',
      format: 'Online and instructor-led',
      admin: 'National Animal Care & Control Association'
    },
    topics: [
      { name: 'Animal control law', weight: '', note: 'Statutes and authority' },
      { name: 'Safe capture', weight: '', note: 'Restraint and equipment' },
      { name: 'Investigations', weight: '', note: 'Basics and documentation' }
    ],
    examEssentials: [
      ['Level', 'Entry (ACO 1)'],
      ['Format', 'Online / instructor-led'],
      ['Fee', 'Confirm with NACAA'],
      ['Validity', 'Renewed via training']
    ],
    timeline: [
      { stage: 'Training', duration: 'Course' },
      { stage: 'Exam', duration: 'Exam' }
    ],
    costBreakdown: {
      items: [
        { item: 'Training / exam fee', fee: 'Confirm with NACAA' },
        { item: 'Prep materials', fee: 'Varies' }
      ],
      total: 'Confirm with NACAA',
      footnote: 'NACAA sets current exam length, fee and renewal; not confirmed from a 2026 primary source.'
    },
    difficulty: 'Easy',
    audience: 'New animal control officers.',
    time: 'Weeks',
    cost: 'Confirm with NACAA',
    faqs: [
      { q: 'How hard is ACO Level 1?', a: 'Level 1 is the easiest of the three tiers and is built for newcomers, covering law, capture and documentation basics rather than complex investigations.' },
      { q: 'How long does it take?', a: 'Most candidates complete the training and assessment over a short course or self-paced study of a few weeks.' },
      { q: 'Does Level 1 expire?', a: 'NACAA credentials carry renewal and continuing-training expectations; verify the current cycle and fee with the association.' },
      { q: 'Is Level 1 worth it?', a: 'For new officers it is worthwhile: many agencies prefer or require NACAA certification, and it is the gateway to Levels 2 and 3.' },
      { q: 'Who is eligible?', a: 'Entry-level animal control personnel can pursue Level 1; NACAA sets any specific training prerequisite for the assessment.' }
    ],
    summaryPoints: [
      'ACO Level 1 is NACAA’s entry animal-control credential.',
      'Covers law, safe capture and documentation.',
      'Foundation for Levels 2 and 3.',
      'Confirm fee and renewal with NACAA.'
    ],
    relatedSlugs: ['certified-animal-control-officer-level-2', 'certified-animal-control-officer-level-3', 'certified-animal-welfare-administrator'],
    sourceUrl: 'https://www.nacanet.org/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'certified-animal-control-officer-level-2',
    body: 'National Animal Care & Control Association',
    tagline: 'The mid-tier credential for cruelty investigation and evidence work.',
    description: 'The NACAA Certified Animal Control Officer Level 2 builds on Level 1 with a focus on cruelty investigation, evidence handling, courtroom testimony and dangerous-animal response. It is aimed at officers who investigate neglect and abuse cases and who must document and present findings that hold up legally. Level 2 is the natural progression for ACOs moving from general field work into investigations.',
    quickAnswer: {
      summary: 'The ACO Level 2 certification is earned by completing NACAA’s intermediate training and passing its assessment, building on the Level 1 foundation. Exam length, fee and pass mark are set by NACAA; confirm current details with the association. The credential carries NACAA renewal and continuing-training expectations.',
      advantages: [
        'Deepens cruelty-investigation skill',
        'Covers evidence handling and testimony',
        'Builds on Level 1 foundation',
        'Valued for investigative roles',
        'Strengthens legal defensibility of cases'
      ]
    },
    roadmap: ['Hold Level 1', 'Complete Level 2 training', 'Register for exam', 'Pass the assessment', 'Renew per NACAA'],
    prerequisites: 'NACAA ACO Level 1 (or equivalent per association).',
    eligibility: 'Level 2 is intended for officers who have completed Level 1 or equivalent training. NACAA sets the precise bridge requirements for sitting the Level 2 assessment.',
    examMeta: {
      questions: 'Level 2 assessment (count set by NACAA)',
      time: 'Confirm current exam length',
      pass: 'NACAA standard',
      fee: 'Confirm current fee with NACAA',
      format: 'Online and instructor-led',
      admin: 'National Animal Care & Control Association'
    },
    topics: [
      { name: 'Cruelty investigation', weight: '', note: 'Neglect and abuse cases' },
      { name: 'Evidence handling', weight: '', note: 'Chain of custody' },
      { name: 'Courtroom testimony', weight: '', note: 'Presenting findings' },
      { name: 'Dangerous animal response', weight: '', note: 'Public-safety procedures' }
    ],
    examEssentials: [
      ['Level', 'Intermediate (ACO 2)'],
      ['Prerequisite', 'Level 1 or equivalent'],
      ['Format', 'Online / instructor-led'],
      ['Fee', 'Confirm with NACAA']
    ],
    timeline: [
      { stage: 'Level 1', duration: 'First' },
      { stage: 'Training', duration: 'Course' },
      { stage: 'Exam', duration: 'Exam' }
    ],
    costBreakdown: {
      items: [
        { item: 'Training / exam fee', fee: 'Confirm with NACAA' },
        { item: 'Prep materials', fee: 'Varies' }
      ],
      total: 'Confirm with NACAA',
      footnote: 'NACAA sets current exam length, fee and renewal; not confirmed from a 2026 primary source.'
    },
    difficulty: 'Moderate',
    audience: 'ACOs moving into investigations.',
    time: 'Weeks to months',
    cost: 'Confirm with NACAA',
    faqs: [
      { q: 'How hard is ACO Level 2?', a: 'Level 2 is moderately harder than Level 1 because it centres on investigations, evidence and testimony that must survive legal scrutiny.' },
      { q: 'How long should I prepare?', a: 'Plan a course or self-paced study of several weeks focused on investigation procedure, evidence handling and testimony.' },
      { q: 'Does Level 2 expire?', a: 'NACAA credentials carry renewal and continuing-training expectations; verify the current cycle and fee with the association.' },
      { q: 'Is Level 2 worth it?', a: 'For officers handling cruelty cases it is worthwhile: it validates investigative competence that agencies and courts rely on.' },
      { q: 'Who is eligible?', a: 'Candidates generally need Level 1 or equivalent; NACAA sets the exact bridge requirement for Level 2.' }
    ],
    summaryPoints: [
      'ACO Level 2 focuses on cruelty investigation and evidence.',
      'Builds on the Level 1 foundation.',
      'Covers testimony and dangerous-animal response.',
      'Confirm fee and renewal with NACAA.'
    ],
    relatedSlugs: ['certified-animal-control-officer-level-1', 'certified-animal-control-officer-level-3', 'certified-animal-welfare-administrator'],
    sourceUrl: 'https://www.nacanet.org/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'certified-animal-control-officer-level-3',
    body: 'National Animal Care & Control Association',
    tagline: 'The advanced ACO credential for supervision and complex cases.',
    description: 'The NACAA Certified Animal Control Officer Level 3 is the most advanced tier in the ACO programme, covering supervision, complex cruelty cases, disaster response and agency management. It is aimed at senior officers and supervisors who lead teams and coordinate multi-agency responses. Earning Level 3 signals that an ACO can both run investigations and manage the operational and leadership side of animal control.',
    quickAnswer: {
      summary: 'The ACO Level 3 certification is earned by completing NACAA’s advanced training and passing its assessment, building on Levels 1 and 2. Exam length, fee and pass mark are set by NACAA; confirm current details with the association. The credential carries NACAA renewal and continuing-training expectations.',
      advantages: [
        'Top tier of the NACAA ACO ladder',
        'Covers supervision and agency management',
        'Prepared for disaster and complex cases',
        'Signals leadership competence',
        'Builds on Levels 1 and 2'
      ]
    },
    roadmap: ['Hold Levels 1-2', 'Complete Level 3 training', 'Register for exam', 'Pass the assessment', 'Renew per NACAA'],
    prerequisites: 'NACAA ACO Levels 1 and 2 (or equivalent per association).',
    eligibility: 'Level 3 is for senior officers and supervisors who have completed the lower levels or equivalent. NACAA sets the precise prerequisites for the Level 3 assessment.',
    examMeta: {
      questions: 'Level 3 assessment (count set by NACAA)',
      time: 'Confirm current exam length',
      pass: 'NACAA standard',
      fee: 'Confirm current fee with NACAA',
      format: 'Online and instructor-led',
      admin: 'National Animal Care & Control Association'
    },
    topics: [
      { name: 'Supervision', weight: '', note: 'Leading ACO teams' },
      { name: 'Complex cruelty cases', weight: '', note: 'Multi-agency coordination' },
      { name: 'Disaster response', weight: '', note: 'Emergency animal care' },
      { name: 'Agency management', weight: '', note: 'Operations and policy' }
    ],
    examEssentials: [
      ['Level', 'Advanced (ACO 3)'],
      ['Prerequisite', 'Levels 1-2 or equivalent'],
      ['Format', 'Online / instructor-led'],
      ['Fee', 'Confirm with NACAA']
    ],
    timeline: [
      { stage: 'Lower levels', duration: 'First' },
      { stage: 'Training', duration: 'Course' },
      { stage: 'Exam', duration: 'Exam' }
    ],
    costBreakdown: {
      items: [
        { item: 'Training / exam fee', fee: 'Confirm with NACAA' },
        { item: 'Prep materials', fee: 'Varies' }
      ],
      total: 'Confirm with NACAA',
      footnote: 'NACAA sets current exam length, fee and renewal; not confirmed from a 2026 primary source.'
    },
    difficulty: 'Challenging',
    audience: 'Senior ACOs and supervisors.',
    time: 'Weeks to months',
    cost: 'Confirm with NACAA',
    faqs: [
      { q: 'How hard is ACO Level 3?', a: 'Level 3 is the hardest ACO tier, adding supervision, disaster response and agency management to investigation skill. It is aimed at experienced officers, not newcomers.' },
      { q: 'How long should I prepare?', a: 'Plan a course or self-paced study of several weeks, focusing on leadership, complex-case coordination and disaster protocols.' },
      { q: 'Does Level 3 expire?', a: 'NACAA credentials carry renewal and continuing-training expectations; verify the current cycle and fee with the association.' },
      { q: 'Is Level 3 worth it?', a: 'For senior officers and supervisors it is worthwhile: it is the recognised pinnacle of the ACO ladder and supports leadership roles.' },
      { q: 'Who is eligible?', a: 'Candidates generally need Levels 1 and 2 or equivalent; NACAA sets the exact prerequisite for Level 3.' }
    ],
    summaryPoints: [
      'ACO Level 3 is the advanced NACAA tier.',
      'Covers supervision, disaster response and management.',
      'Builds on Levels 1 and 2.',
      'Confirm fee and renewal with NACAA.'
    ],
    relatedSlugs: ['certified-animal-control-officer-level-1', 'certified-animal-control-officer-level-2', 'certified-animal-welfare-administrator'],
    sourceUrl: 'https://www.nacanet.org/',
    reviewed: '2026-08',
    confidence: 'medium'
  }
  ,
  {
    slug: 'ndgaa-national-certified-master-groomer',
    body: 'National Dog Groomers Association of America',
    tagline: 'The breed-standard master groomer credential across dog groups.',
    description: 'The National Certified Master Groomer (NCMG) is the National Dog Groomers Association of America’s top credential for professional groomers. It requires passing a multiple-choice written theory exam and then demonstrating hands-on grooms to breed-standard across the sporting, non-sporting, terrier and long-coated groups, judged by NDGAA evaluators. The NCMG tells clients and employers that a groomer can execute correct, breed-appropriate styling rather than a single generic cut.',
    quickAnswer: {
      summary: 'The NCMG is earned by passing NDGAA’s written exam and a practical evaluation grooming dogs from the required breed groups to standard, usually at a workshop or hosted testing event. Cost is tied to the workshop/practical fees rather than a single flat exam fee; confirm current fees and renewal with NDGAA before registering.',
      advantages: [
        'Top NDGAA grooming credential',
        'Validates breed-standard styling skill',
        'Covers multiple breed groups hands-on',
        'Judged by NDGAA evaluators',
        'Signals mastery to clients and employers'
      ]
    },
    roadmap: ['Study breed groups', 'Register for certification', 'Pass written exam', 'Complete practical grooms', 'Maintain per NDGAA'],
    prerequisites: 'Open to groomers; NDGAA training is the usual path.',
    eligibility: 'There is no rigid degree gate, but most candidates complete NDGAA training first. The association sets any experience expectation for the practical evaluation.',
    examMeta: {
      questions: 'Written theory exam plus practical grooms',
      time: 'Written and practical at a workshop',
      pass: 'Pass both written and practical',
      fee: 'Tied to NDGAA workshop/practical (confirm)',
      format: 'In-person written and practical',
      admin: 'National Dog Groomers Association of America'
    },
    topics: [
      { name: 'Written theory', weight: '', note: 'Grooming, health, safety, breed standards' },
      { name: 'Sporting group', weight: '', note: 'Breed-standard groom' },
      { name: 'Non-sporting group', weight: '', note: 'Breed-standard groom' },
      { name: 'Terrier group', weight: '', note: 'Breed-standard groom' },
      { name: 'Long-coated group', weight: '', note: 'Breed-standard groom' }
    ],
    examEssentials: [
      ['Format', 'Written + practical'],
      ['Delivery', 'NDGAA workshops / host sites'],
      ['Fee', 'Confirm with NDGAA'],
      ['Validity', 'Per NDGAA policy']
    ],
    timeline: [
      { stage: 'Training', duration: 'Weeks' },
      { stage: 'Written exam', duration: 'Exam' },
      { stage: 'Practical grooms', duration: 'Exam' }
    ],
    costBreakdown: {
      items: [
        { item: 'NDGAA training/workshop', fee: 'Confirm with NDGAA' },
        { item: 'Practical evaluation fees', fee: 'Confirm with NDGAA' }
      ],
      total: 'Confirm with NDGAA',
      footnote: 'NDGAA does not publish a single standalone exam fee; cost is tied to its workshop/practical. Figures not confirmed from a 2026 primary source.'
    },
    difficulty: 'Challenging',
    audience: 'Professional dog groomers seeking master status.',
    time: 'Weeks to months',
    cost: 'Confirm with NDGAA',
    faqs: [
      { q: 'How hard is the NCMG?', a: 'It is challenging because the practical demands correct, breed-standard grooms across several groups, not just a tidy finish. Strong scissoring and breed knowledge are essential.' },
      { q: 'How long should I prepare?', a: 'Most candidates train over several weeks, often through NDGAA workshops, then test at a hosted event with the required breed groups.' },
      { q: 'Does the NCMG expire?', a: 'NDGAA sets renewal or continuing-education expectations for the NCMG; verify the current policy with the association.' },
      { q: 'Is the NCMG worth it?', a: 'For career groomers it is worthwhile: it is the recognised master credential and differentiates you on breed-appropriate styling.' },
      { q: 'Who is eligible?', a: 'Groomers can pursue the NCMG, typically after NDGAA training; the association sets any experience requirement for the practical.' }
    ],
    summaryPoints: [
      'NCMG is NDGAA’s master grooming credential.',
      'Combines a written exam with breed-group practicals.',
      'Cost is tied to workshop/practical, not a flat fee.',
      'Confirm fees and renewal with NDGAA.'
    ],
    relatedSlugs: ['certified-feline-master-groomer', 'certified-equine-massage-therapist', 'karen-pryor-academy-certified-training-partner'],
    sourceUrl: 'https://www.nationaldoggroomers.com/',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'navta-approved-veterinary-assistant',
    body: 'National Association of Veterinary Technicians in America',
    tagline: 'The national assistant credential earned through an approved programme.',
    description: 'The NAVTA Approved Veterinary Assistant (AVA) is the nationally recognised designation for veterinary assistants, created by the National Association of Veterinary Technicians in America. It is earned by graduating from a NAVTA-approved veterinary assistant programme and passing the 100-question AVA examination, which is administered by VetMedTeam and must be observed by an approved proctor. The AVA signals to clinics that an assistant understands restraint, nursing care and clinic operations at a verified standard.',
    quickAnswer: {
      summary: 'The AVA is earned by completing a NAVTA-approved assistant programme and passing a 100-question, 150-minute online exam (pass mark 75%) proctored in person, with five attempts allowed at $100 each. The designation is valid for two years and renewed with at least 10 hours of veterinary continuing education. Only graduates of NAVTA-approved programmes may sit the exam.',
      advantages: [
        'Nationally recognised veterinary assistant credential',
        'Verifies restraint, nursing and clinic skills',
        'Preferred by many veterinary employers',
        'Renews with CE, no re-exam needed',
        'Clear, low-cost per-attempt exam fee'
      ]
    },
    roadmap: ['Graduate approved programme', 'Get enrolment code', 'Pay $100 exam fee', 'Arrange an approved proctor', 'Score 75% to certify'],
    prerequisites: 'Must graduate from a NAVTA-approved veterinary assistant programme.',
    eligibility: 'Only graduates of a NAVTA-approved veterinary assistant programme are eligible. You receive an enrolment code from your programme and must take the exam within 30 days of enrolment.',
    examMeta: {
      questions: '100 multiple choice',
      time: '150 minutes',
      pass: '75%',
      fee: '$100 per attempt (5 attempts allowed)',
      format: 'Online, in-person proctored',
      admin: 'VetMedTeam on behalf of NAVTA'
    },
    topics: [
      { name: 'Office and client relations', weight: '', note: 'Front-desk and communication' },
      { name: 'Pharmacy and preventive care', weight: '', note: 'Medication and protocols' },
      { name: 'Animal nursing', weight: '', note: 'Restraint, care, hygiene' },
      { name: 'Laboratory and surgical assist', weight: '', note: 'Samples, prep, recovery' }
    ],
    examEssentials: [
      ['Attempts', 'Up to 5 at $100 each'],
      ['Proctor', 'Vet, credentialed tech or centre'],
      ['Validity', '2 years'],
      ['Renewal', '10 CE hrs, no exam']
    ],
    timeline: [
      { stage: 'Complete programme', duration: 'Programme length' },
      { stage: 'Enrol + proctor', duration: 'Within 30 days' },
      { stage: 'Exam', duration: '150 minutes' },
      { stage: 'Renew', duration: 'Every 2 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'AVA exam (per attempt)', fee: '$100' },
        { item: 'Programme tuition', fee: 'Varies by school' },
        { item: 'Renewal', fee: 'CE + fee if lapsed' }
      ],
      total: '$100 exam (+ programme tuition)',
      footnote: 'Exam fee is $100 per attempt; programme tuition is separate and varies widely by school.'
    },
    difficulty: 'Easy',
    audience: 'Veterinary assistants and programme graduates.',
    time: 'Programme-dependent; exam day 2.5 hrs',
    cost: '$100 exam',
    faqs: [
      { q: 'How hard is the AVA exam?', a: 'It is considered accessible for programme graduates: 100 straightforward multiple-choice questions with a 75% pass mark. The bigger hurdle is completing an approved programme first.' },
      { q: 'How long should I study?', a: 'Most graduates review for a few weeks using their programme materials and VetMedTeam practice resources, then sit the 150-minute exam.' },
      { q: 'Does the AVA expire?', a: 'Yes, the designation is valid two years from the exam date and renewed with at least 10 hours of veterinary CE. Lapsed status may require retaking the exam plus a higher fee.' },
      { q: 'Is the AVA worth it?', a: 'For assistants it is worthwhile: employers prefer the verified credential, and it can support articulation into veterinary technology programmes.' },
      { q: 'Who is eligible?', a: 'Only graduates of a NAVTA-approved veterinary assistant programme may sit the exam; you need an enrolment code from your school.' }
    ],
    summaryPoints: [
      'AVA is NAVTA’s national veterinary assistant credential.',
      '100 questions, 150 minutes, 75% to pass, $100 per attempt.',
      'Requires graduation from a NAVTA-approved programme.',
      'Valid 2 years; renew with 10 CE hours, no re-exam.'
    ],
    relatedSlugs: ['vtne', 'certified-veterinary-practice-manager', 'veterinary-technician-specialist'],
    sourceUrl: 'https://navta.net/veterinary-assistants-program/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'navle',
    body: 'International Council for Veterinary Assessment',
    tagline: 'The licensing exam every US and Canadian veterinarian must pass.',
    description: 'The North American Veterinary Licensing Examination (NAVLE) is the required licensing exam for veterinarians in the United States and Canada, administered by the International Council for Veterinary Assessment. It tests entry-level clinical competence across all species seen in private practice, using 360 clinically relevant multiple-choice questions in six blocks. Passing the NAVLE is a non-negotiable step in obtaining a licence to practise veterinary medicine in every North American jurisdiction.',
    quickAnswer: {
      summary: 'The NAVLE is a 360-question (300 scored, 60 unscored pilot) computer-based exam delivered in six 60-question blocks over a 7.5-hour appointment at Prometric centres, offered in three annual windows. The 2026 fee is $800 in the US, US territories and Canada ($1,180 internationally). The passing scaled score is 425 on a 200-800 scale, and candidates get up to five attempts.',
      advantages: [
        'Required for veterinary licensure in the US and Canada',
        'Tests all species seen in entry-level practice',
        'Standardised, equated scoring across forms',
        'Three testing windows per year',
        'Clear scaled pass score (425 / 800)'
      ]
    },
    roadmap: ['Confirm eligibility', 'Apply in the window', 'Schedule at Prometric', 'Pass at 425/800', 'Apply for state licence'],
    prerequisites: 'Senior student or graduate of an AVMA-accredited (or approved equivalent) college of veterinary medicine; ECFVG/PAVE for internationally trained.',
    eligibility: 'You must be a senior student or graduate of a veterinary college accredited by the AVMA Council on Education (or meet ECFVG/PAVE requirements if your school is not AVMA-accredited). Expected graduation must be within 10 months of the testing window close. Up to two attempts are allowed before graduation.',
    examMeta: {
      questions: '360 (300 scored, 60 pilot)',
      time: '7.5 hours (6 blocks of 60, 65 min each + breaks)',
      pass: '425 / 800 scaled',
      fee: '$800 (US/Canada); $1,180 international',
      format: 'Computer-based at Prometric centres',
      admin: 'International Council for Veterinary Assessment'
    },
    topics: [
      { name: 'Canine', weight: '25.6%' },
      { name: 'Feline', weight: '24.3%' },
      { name: 'Equine', weight: '14.7%' },
      { name: 'Bovine', weight: '13.3%' },
      { name: 'Other species', weight: '22.1%', note: 'Small mammal, porcine, ovine/caprine, avians, aquatics, reptiles, camelidae/cervidae' }
    ],
    examEssentials: [
      ['Windows', '3 per year (fall, spring, summer)'],
      ['Attempts', 'Up to 5'],
      ['Delivery', 'Prometric centres'],
      ['Scoring', '200-800 scale, 425 pass']
    ],
    timeline: [
      { stage: 'Apply', duration: 'Window deadlines' },
      { stage: 'Study', duration: '3-6 months' },
      { stage: 'Exam', duration: '7.5 hours' },
      { stage: 'Score', duration: 'After window' }
    ],
    costBreakdown: {
      items: [
        { item: 'Exam fee (US/Canada)', fee: '$800' },
        { item: 'International fee', fee: '+$380 (total $1,180)' },
        { item: 'Prep resources', fee: 'Varies' }
      ],
      total: '$800-$1,180',
      footnote: 'Fee is nonrefundable and nontransferable; rescheduling follows Prometric rules. State licence fees are separate.'
    },
    difficulty: 'Hard',
    audience: 'Veterinary students and graduates seeking licensure.',
    time: '3-6 months preparation',
    cost: '$800-$1,180',
    faqs: [
      { q: 'How hard is the NAVLE?', a: 'It is hard: a 7.5-hour, 360-question exam covering every species seen in practice. Success depends on a full curriculum plus focused review of the ICVA blueprint, especially the ~50% small-animal content.' },
      { q: 'How long should I study?', a: 'Most students begin dedicated prep three to six months out, weighting study to the published species breakdown (canine 25.6%, feline 24.3%, equine 14.7%, bovine 13.3%).' },
      { q: 'Does the NAVLE expire?', a: 'The NAVLE is a one-time licensing exam; it does not expire for licensure purposes, though individual jurisdictions set their own initial-licence rules and timelines.' },
      { q: 'Is the NAVLE worth it?', a: 'It is not optional: every US and Canadian jurisdiction requires a passing NAVLE score as part of veterinary licensure, so it is mandatory to practise.' },
      { q: 'Who is eligible?', a: 'Senior students or graduates of an AVMA-accredited veterinary college (or ECFVG/PAVE-approved candidates) may sit the exam; expected graduation must be within 10 months of the window close.' }
    ],
    summaryPoints: [
      'NAVLE is the required veterinary licensing exam in North America.',
      '360 questions, 7.5 hours, passes at 425/800.',
      '2026 fee $800 (US/Canada), $1,180 international.',
      'Three windows per year; up to five attempts.'
    ],
    relatedSlugs: ['vtne', 'veterinary-technician-specialist', 'certified-veterinary-practice-manager'],
    sourceUrl: 'https://icva.net/navle',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'vtne',
    body: 'American Association of Veterinary State Boards',
    tagline: 'The national exam every veterinary technician must pass to be credentialed.',
    description: 'The Veterinary Technician National Examination (VTNE) is the exam most US jurisdictions use to credential veterinary technicians, owned and delivered by the American Association of Veterinary State Boards through PSI. It tests the knowledge needed for entry-level practice across pharmacy, surgery, nursing, anaesthesia, diagnostics, emergency care and client communication. Passing the VTNE is the central step toward state licensure, registration or certification as a veterinary technician.',
    quickAnswer: {
      summary: 'The VTNE is a 170-question (150 scored, 20 unscored pilot) computer-based exam with a three-hour limit, delivered at PSI test centres or via live remote proctoring in four annual windows. The passing scaled score is 425 on a 200-800 scale, and the fee varies by jurisdiction (commonly around $340-$375). You must be a graduate or final-semester student of an AVMA- or CVMA-accredited programme, and you may attempt it up to five times.',
      advantages: [
        'The standard credentialing exam for vet techs',
        'Accepted by most US jurisdictions',
        'Ten weighted domains guide efficient study',
        'Offered four windows per year',
        'Clear scaled pass score (425 / 800)'
      ]
    },
    roadmap: ['Graduate accredited program', 'Apply via jurisdiction', 'Schedule with PSI', 'Pass at 425/800', 'Complete state credentialing'],
    prerequisites: 'Graduate or final-semester student of an AVMA- or CVMA-accredited veterinary technology program.',
    eligibility: 'You must be a graduate or final-semester student of an AVMA- or CVMA-accredited veterinary technology program, with the credential verified by transcript. This is a hard eligibility gate set by AAVSB and member boards.',
    examMeta: {
      questions: '170 (150 scored, 20 unscored pilot)',
      time: '3 hours',
      pass: '425 / 800 scaled (jurisdiction-set)',
      fee: 'Varies by jurisdiction (~$340-$375)',
      format: 'Computer-based at PSI or live remote proctoring',
      admin: 'American Association of Veterinary State Boards (PSI)'
    },
    topics: [
      { name: 'Animal Care and Nursing', weight: '20%' },
      { name: 'Pharmacy and Pharmacology', weight: '13%' },
      { name: 'Surgical Nursing', weight: '13%' },
      { name: 'Anesthesia', weight: '13%' },
      { name: 'Laboratory Procedures', weight: '9%' },
      { name: 'Dentistry', weight: '7%' },
      { name: 'Emergency Medicine and Critical Care', weight: '7%' },
      { name: 'Pain Management and Analgesia', weight: '7%' },
      { name: 'Diagnostic Imaging', weight: '6%' },
      { name: 'Communication and Client Relations', weight: '5%' }
    ],
    examEssentials: [
      ['Attempts', 'Up to 5; once per 30 days'],
      ['Windows', '4 per year (since 2025)'],
      ['Delivery', 'PSI centre or LRP'],
      ['Scoring', '200-800 scale, 425 pass']
    ],
    timeline: [
      { stage: 'Graduate program', duration: 'Programme length' },
      { stage: 'Apply', duration: '30 min' },
      { stage: 'Study', duration: '8-12 weeks' },
      { stage: 'Exam', duration: '3 hours' }
    ],
    costBreakdown: {
      items: [
        { item: 'Exam fee', fee: '~$340-$375 (by jurisdiction)' },
        { item: 'Reschedule', fee: '~$90 if 48h+ notice' },
        { item: 'Prep materials', fee: 'Varies' }
      ],
      total: '~$340-$375',
      footnote: 'AAVSB/PSI fee varies by jurisdiction and window; confirm your state’s exact fee when applying.'
    },
    difficulty: 'Moderate',
    audience: 'Veterinary technology graduates seeking credentialing.',
    time: '8-12 weeks preparation',
    cost: '~$340-$375',
    faqs: [
      { q: 'How hard is the VTNE?', a: 'It is moderately hard: 170 questions across ten domains, with Animal Care and Nursing the largest at 20%. Candidates who under-prepare on pharmacy, surgery and anaesthesia struggle most.' },
      { q: 'How long should I study?', a: 'Most candidates study eight to twelve weeks, weighting time to the blueprint (Animal Care/Nursing, Pharmacy, Surgical Nursing and Anesthesia together are about 59%).' },
      { q: 'Does the VTNE expire?', a: 'The VTNE is a one-time credentialing exam; it does not expire. Individual states handle technician licence renewal and CE separately.' },
      { q: 'Is the VTNE worth it?', a: 'It is mandatory to become a credentialed veterinary technician in most jurisdictions, so it is required to use the protected title and expand your scope of practice.' },
      { q: 'Who is eligible?', a: 'You must be a graduate or final-semester student of an AVMA- or CVMA-accredited veterinary technology program; the transcript is verified by AAVSB.' }
    ],
    summaryPoints: [
      'VTNE is the national vet-tech credentialing exam.',
      '170 questions, 3 hours, passes at 425/800.',
      'Fee varies by jurisdiction (~$340-$375).',
      'Ten weighted domains; up to 5 attempts.'
    ],
    relatedSlugs: ['navta-approved-veterinary-assistant', 'veterinary-technician-specialist', 'certified-veterinary-practice-manager'],
    sourceUrl: 'https://www.aavsb.org/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'veterinary-technician-specialist',
    body: 'NAVTA Committee on Veterinary Technician Specialties',
    tagline: 'The academy-awarded specialty pinnacle for veterinary technicians.',
    description: 'The Veterinary Technician Specialist (VTS) is not a single exam but an advanced credential awarded by NAVTA-recognised academies in focused areas such as anaesthesia, emergency and critical care, dentistry, behaviour and internal medicine. Each academy sets its own eligibility (commonly around 1,000 hours and a case log in the specialty), application and examination. A VTS signals deep, documented expertise beyond the entry-level technician and is the pinnacle of the veterinary-technician career ladder.',
    quickAnswer: {
      summary: 'A VTS is earned through a NAVTA-recognised academy, not one central exam. Each academy requires substantial specialty experience (commonly about 1,000 hours plus case logs), an application and its own examination, with format and fee set by that academy. It is renewed on the academy’s cycle, usually with specialty continuing education. Confirm the specific academy’s rules before applying.',
      advantages: [
        'Recognised advanced technician specialty',
        'Multiple focus areas (anaesthesia, ER, dentistry, behaviour)',
        'Signals documented expertise beyond entry level',
        'Supports higher-skill, higher-pay roles',
        'Backed by NAVTA-recognised academies'
      ]
    },
    roadmap: ['Pick a recognised academy', 'Log specialty hours', 'Submit case logs', 'Pass the academy exam', 'Renew per academy'],
    prerequisites: 'Must be a credentialed veterinary technician; academy-specific experience required.',
    eligibility: 'You must be a credentialed veterinary technician and meet the chosen academy’s experience threshold, commonly around 1,000 specialty hours plus a case log within a defined period. Each academy sets its own detailed criteria.',
    examMeta: {
      questions: 'Set by each academy',
      time: 'Set by each academy',
      pass: 'Academy standard',
      fee: 'Set by each academy',
      format: 'Per academy (testing centre, online or conference)',
      admin: 'Individual NAVTA-recognised academy'
    },
    topics: [
      { name: 'Specialty knowledge', weight: '', note: 'Academy-specific body of knowledge' },
      { name: 'Case log', weight: '', note: 'Documented specialty experience' }
    ],
    examEssentials: [
      ['Type', 'Academy-awarded credential'],
      ['Experience', 'Commonly ~1,000 hrs + cases'],
      ['Exam', 'Set by each academy'],
      ['Validity', 'Renewed per academy']
    ],
    timeline: [
      { stage: 'Build hours', duration: 'Years' },
      { stage: 'Apply', duration: '30-60 min' },
      { stage: 'Academy exam', duration: 'Exam' }
    ],
    costBreakdown: {
      items: [
        { item: 'Academy application / exam', fee: 'Per academy' },
        { item: 'Continuing education', fee: 'Varies' }
      ],
      total: 'Per academy',
      footnote: 'There is no single VTS exam or fee; each recognised academy sets its own requirements, exam and renewal.'
    },
    difficulty: 'Hard',
    audience: 'Credentialed technicians specialising in a field.',
    time: 'Years of specialty experience',
    cost: 'Per academy',
    faqs: [
      { q: 'How hard is a VTS?', a: 'It is hard because each academy requires years of documented specialty experience plus a case log and its own exam. It is a career-capstone credential, not an entry exam.' },
      { q: 'How long should I prepare?', a: 'Preparation is mostly building the required hours and case log over years, then studying the academy’s body of knowledge for its exam.' },
      { q: 'Does a VTS expire?', a: 'VTS credentials are renewed on the individual academy’s cycle, usually with specialty CE; verify the current requirement with that academy.' },
      { q: 'Is a VTS worth it?', a: 'For technicians wanting recognised expertise and advancement in a focus area, it is worthwhile and is the pinnacle of the technician ladder.' },
      { q: 'Who is eligible?', a: 'You must be a credentialed vet tech and meet the specific academy’s experience and case-log criteria; there is no generic VTS exam.' }
    ],
    summaryPoints: [
      'VTS is awarded by NAVTA-recognised academies, not one exam.',
      'Requires ~1,000 specialty hours and a case log.',
      'Each academy sets its own exam, fee and renewal.',
      'It is the advanced pinnacle of the tech career ladder.'
    ],
    relatedSlugs: ['vtne', 'navta-approved-veterinary-assistant', 'certified-veterinary-practice-manager'],
    sourceUrl: 'https://navta.net/veterinary-technician-specialties/',
    reviewed: '2026-08',
    confidence: 'medium'
  }
];

export default { programs, exams };
