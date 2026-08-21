// Depth content for: lpic-1-system-administrator
// LPIC-1 Linux System Administrator (exams 101-500 and 102-500).
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & Linux certifications desk',
    bio: 'This guide is compiled and maintained by our IT-certifications desk. LPIC-1 exam structure, version numbers, validity and language options come from the Linux Professional Institute (LPI) official certification pages and the Pearson VUE LPI portal, which we verified directly. LPI publishes no pass-rate statistics, and we state that plainly. Wage figures come from the BLS occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the current LPIC-1 version (5.0, exam codes 101-500 and 102-500), the 60-question, 90-minute format per exam, the 500/800 passing score, the 5-year validity, and the exam fee against LPI and Pearson VUE official pages.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$96,800 median for network and computer systems administrators (BLS, May 2024) — SOC 15-1244',
    summary:
      'The direct answer is that network and computer systems administrators, SOC 15-1244, earned a median of $96,800 per year in May 2024, the most recent BLS Occupational Employment and Wage Statistics survey, and it is the correct series to cite for an LPIC-1 because there is no BLS occupation called "Linux administrator" and BLS classifies by job duties rather than by certificate. That choice deserves a deliberate reading, because LPIC-1 holders sit across the administrator and the software-developer ends of the Linux labour market depending on what they do with the credential. The closest fit is the administrator occupation: the LPIC-1 validates exactly the skills in that series\' task profile — command-line administration, package management, filesystem and storage administration, basic networking, user management, and shell scripting — and its May 2024 median of $96,800 comes with a wide distribution: the lowest 10 percent earned less than $60,320 and the highest 10 percent more than $150,320. The distribution is worth reading carefully because Linux skills behave unusually in it: a candidate adding LPIC-1 to an already-running Windows- or network-administration career competes near the middle of the band, while one who converts the scripting, automation and cloud-facing objectives into platform-engineering work moves toward the top decile. The occupational headwind is real and should be stated plainly: BLS projects a 4 percent employment decline for network and computer systems administrators from 2024 to 2034, with about 14,300 openings a year arising entirely from replacement need, because manual, per-server administration is the part of the work that is disappearing. The mitigation is the same logic the LPIC-1\'s objectives now encode — LPI has kept the certification current with the way Linux administration actually pays, and the candidates who fare best are the ones who pair the certification with automation and cloud skills. The honest framing is that LPIC-1 is a fundamental, portable credential for the administrator track, not a wage catalyst on its own; its value compounds when it is the foundation under automation, container and cloud work.',
    rows: [
      { label: 'Median annual wage, network and computer systems administrators', value: '$96,800', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 15-1244, $46.54/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $60,320', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $150,320', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '331,500 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~14,300 per year', note: 'BLS OOH Job Outlook, 2024-34 — all from replacement need' }
    ],
    growth: '-4% projected change 2024-34 (decline), with ~14,300 replacement openings a year; the credential\'s value compounds with automation, container and cloud skills, which are where the occupation is actually moving',
    source: {
      label: 'BLS Occupational Outlook Handbook — Network and Computer Systems Administrators',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm'
    }
  },

  passRate: {
    headline: 'LPI publishes no pass rate for LPIC-1 — what it publishes is the passing score: 500 out of 800 on each exam',
    summary:
      'There is no published pass rate for the LPIC-1 exams, because the Linux Professional Institute does not release pass-rate statistics for any of its certifications, and we are not going to supply an invented one. What LPI and its delivery partner Pearson VUE do publish is the complete exam specification, and the passing score is the number that matters: each LPIC-1 exam, 101-500 and 102-500, contains 60 multiple-choice and fill-in-the-blank questions, runs 90 minutes, and is scored on a scale from 200 to 800 with a passing score of 500. That is not 62.5 percent of the raw questions in any direct sense — LPI equates exam forms so that equivalent ability passes regardless of which form you draw, and the fill-in-the-blank items, which require typing an exact command or answer, are scored for exactness, so the raw-to-scaled conversion cannot be reverse-engineered from a percentage. Two design facts make the 500/800 cut easier to plan around than it looks. First, the scale\'s midpoint structure means a score of 500 represents the ability level LPI has judged a working Linux administrator needs, not a "barely scrape through" line — candidates who score 600 or better on LPI\'s practice assessments are realistically positioned. Second, because there is no published pass rate, the correct calibration tool is the exam itself: LPI and its training partners publish official practice tests and learning materials aligned to the current 5.0 objectives, and the score you get on those is the honest readiness signal. The retake economics are straightforward — each exam is purchased separately and a failed attempt means buying the voucher again — and the two exams can be taken in any order, though both must be passed to earn the LPIC-1 certification, and passing a higher-level LPI exam later extends the credential. The practical summary is that pass-rate anxiety is misplaced for an exam whose real question is "can you clear the 500/800 line," and the only numbers worth memorising are the 60-question, 90-minute format and the 500 cut.',
    source: {
      label: 'Linux Professional Institute — LPIC-1 certification page',
      url: 'https://www.lpi.org/our-certifications/lpic-1/'
    },
    caveat: 'LPI publishes no pass-rate statistics. The published figures are the format (60 questions, 90 minutes per exam), the scoring scale (200-800), and the passing score (500) per exam, all verified on LPI and Pearson VUE official pages.'
  },

  studyPlan: {
    summary:
      'Plan ten to sixteen weeks and roughly 120 to 180 hours of study to clear both LPIC-1 exams, and start from the premise that the certification is two separate papers — 101-500 and 102-500 — each 60 multiple-choice and fill-in-the-blank questions in 90 minutes with a 500-of-800 passing score, and that you must pass both to earn the LPIC-1, though you may take them in any order. The current version is 5.0, and LPI refreshes exam objectives roughly every three years, so confirm you are studying the current objectives — the 101-500 and 102-500 objectives documents are the syllabus and the only true source of truth. Exam 101 covers system architecture, Linux installation and package management, GNU and Unix commands, and devices, Linux filesystems and the Filesystem Hierarchy Standard; exam 102 covers shells and shell scripting, interfaces and desktops, administrative tasks, essential system services, networking fundamentals, and security. Structure the plan around those topic weights, and build a lab from day one — LPI recommends about twelve months of Linux experience as a realistic background, and no amount of reading substitutes for having typed the commands, especially for the fill-in-the-blank items that demand exact syntax. A workable rhythm is: four weeks on the 101 topic areas with hands-on work on a Linux installation you control, four weeks on the 102 topic areas, then two weeks of exam-specific review and practice questions for 101, and two weeks for 102, keeping the two exams\' objectives separate so you do not blur them. Book the two exams through Pearson VUE, at a test centre or online via OnVUE, in whichever order you prefer, and note the language options — English, German, Japanese, Portuguese (Brazilian), Chinese (Simplified and Traditional) and Spanish (Modern) at VUE test centres, with a smaller set online. Budget roughly $200 per exam in the United States (LPI pricing varies by country), and remember the certification is valid for five years, after which you can renew by passing the current exams again or by passing a higher-level LPI certification.',
    totalHours: '120-180 hours over 10-16 weeks to pass both exams',
    weeks: [
      {
        label: 'Weeks 1-4',
        focus: 'Exam 101 topics — system architecture, installation, packages, commands, filesystems',
        tasks: [
          'Set up a Linux VM or machine you can break and rebuild — the lab is non-negotiable for this exam',
          'Study system architecture: hardware settings, the boot process, systemd targets, and kernel modules',
          'Cover installation and package management on both major families — dpkg/apt and rpm/dnf',
          'Master GNU and Unix commands, and devices, filesystems and the FHS, including permissions and links'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 5-8',
        focus: 'Exam 102 topics — scripting, administrative tasks, services, networking, security',
        tasks: [
          'Study shells and shell scripting, including writing and debugging real scripts',
          'Cover administrative tasks: users and groups, password policies, scheduling with cron and systemd timers, and logging',
          'Master essential system services: time, logging, mail basics, and printing',
          'Cover networking fundamentals — TCP/IP, configuration with ip and nmcli, DNS clients, and basic firewalls'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 9-10',
        focus: 'Exam 101 review and practice',
        tasks: [
          'Work official or authorised practice tests for 101-500',
          'Re-drill the fill-in-the-blank items — exact command syntax is scored for exactness',
          'Return to the objectives document for every missed topic',
          'Book and sit exam 101-500'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 11-12',
        focus: 'Exam 102 review and practice',
        tasks: [
          'Work official or authorised practice tests for 102-500',
          'Re-drill scripting, administrative tasks and networking fundamentals',
          'Close every objective gap the practice tests reveal',
          'Book and sit exam 102-500'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 13-16 (buffer)',
        focus: 'Retakes and final credential administration',
        tasks: [
          'If either exam missed the 500 cut, rebook within your plan window and re-drill the failing objectives',
          'Confirm both scores are recorded against your LPI account',
          'Claim the certification and log the 5-year validity date',
          'Plan the next step — LPIC-2 or a higher-level LPI certification — before the expiry clock matters'
        ],
        hours: 'As needed'
      }
    ],
    variants: [
      { label: 'Experienced Linux administrator', detail: 'Six to eight weeks. Your day job covers most of both papers; spend the time on the objectives you under-use — often the 102 administrative and service items — and on the fill-in-the-blank exactness, then take both exams in quick succession.' },
      { label: 'New to Linux but in IT', detail: 'Eighteen to twenty weeks at 8 hrs/week. Add a month of pure shell and filesystem fluency before the topic study; the fill-in-the-blank items punish a candidate who can recognise commands but not type them, and that muscle needs calendar time.' }
    ]
  },

  prepStrategies: {
    summary:
      'The strategy that reliably moves an LPIC-1 score is "type the commands, weight the objectives, and rehearse the fill-in-the-blank exactness," because the exam is distribution-neutral, objective-driven, and contains items that demand exact syntax rather than recognition. The single biggest error is studying by reading or watching and never sitting at a shell — the fill-in-the-blank questions are designed specifically to catch candidates who can recognise a command but cannot produce it, and no course or book substitutes for the muscle memory of having typed the syntax. The structure that should drive the plan is the one LPI publishes: each exam, 101-500 and 102-500, is 60 multiple-choice and fill-in-the-blank questions in 90 minutes, scored on a 200-800 scale with a 500 passing score, and both exams must be passed for the certification, in any order. The objectives documents are the syllabus and the only true source of truth, and the current version is 5.0 — so the first step is to download the 101-500 and 102-500 objectives and check any paid material against them, because books written for the previous cycle are still on sale and still rank in search results. The lab is the second pillar and the one that decides outcomes: LPI recommends roughly twelve months of Linux experience as a realistic background, and a candidate who performs every objective task by hand — package installs on both dpkg/apt and rpm/dnf families, filesystem mounts, user management, service configuration, firewall rules — has typed the exact syntax the exam scores. The fill-in-the-blank rehearsal is the third pillar: the 60-question format mixes recognition items with production items scored for exactness, so practice should include generating commands from memory, not just selecting them from a list. A candidate who weights the objectives, types everything in a two-family lab, and rehearses the production items is the one for whom the 500/800 cut on both papers is a formality.',
    items: [
      {
        title: 'Build a lab and type everything',
        detail: 'LPI recommends roughly twelve months of Linux experience as a realistic background, and the exam\'s fill-in-the-blank items make reading a losing strategy. Install a Linux VM or use a cloud instance, and perform every objective task by hand — package installs, filesystem mounts, user management, service configuration, firewall rules — because the exact syntax the exam scores is exactly what you will have typed.'
      },
      {
        title: 'Weight the objectives documents',
        detail: 'The 101-500 and 102-500 objectives PDFs are the syllabus and the only source of truth, and LPI refreshes them roughly every three years — the current version is 5.0. Read the objectives before any course or book, and check the coverage of any paid material against them; a course that does not map to the current objectives is teaching the wrong exam.'
      },
      {
        title: 'Rehearse fill-in-the-blank exactness',
        detail: 'The 60-question format mixes multiple choice with fill-in-the-blank items that are scored for exactness — a command typed with the wrong flag or the wrong option order scores nothing. Practise producing answers from memory, not recognising them from a list, and pay special attention to the exact syntax of the high-frequency commands the objectives emphasise.'
      },
      {
        title: 'Study both distribution families',
        detail: 'LPIC-1 is deliberately distribution-neutral and the same paper can ask about dpkg and apt as well as rpm and dnf. Ubuntu-only candidates lose points on RPM-family items, and RHEL-only candidates lose points on Debian-family items. Run both families in your lab, even if one is your production environment, and perform each task twice — once per family.'
      },
      {
        title: 'Take the two exams in the order that fits your study',
        detail: 'The 101 and 102 exams can be taken in any order and must both be passed for the LPIC-1. If one area is your weakness, sit the other exam first to bank a pass and build confidence, then give the harder paper the extra review weeks. Each attempt costs the full voucher, so use the practice tests to judge readiness before booking.'
      }
    ]
  },

  resourceComparison: {
    summary:
      'The buying decision for the LPIC-1 is small and official-source-first: the LPI objectives documents are free and are the syllabus, LPI\'s own learning materials and the free/paid courses from the Linux Professional Institute ecosystem align to the current 5.0 objectives, and the exam vouchers dominate the budget at roughly $200 each in the United States (LPI pricing varies by country), so two vouchers and a realistic retest possibility are the real cost of the certification. The rule is to check any book or course against the objectives document for version currency before buying, because material written for the previous objectives cycle is still on sale and still ranks in search results — the single most common way candidates waste money on this certification is buying prep built for an older paper. LPI and its partners offer official practice tests that mirror the format and are the right readiness tool, and the ordering that makes sense is: the objectives documents first, because they are free and define the scope; the lab second, because a Linux VM or a low-cost cloud instance is the single most valuable resource for an exam that scores typed commands and out-performs most paid products; the official practice tests third, because they calibrate readiness against the real format and the 500/800 cut; and books or video courses last, only for the structure they add to a candidate who needs it. The honest bottom line is that this is one of the cheapest certifications to prepare for in its class — the total can be held near the two vouchers themselves — and a candidate who spends on the lab time and the official materials rather than on the flashiest course stack is spending where the exam actually pays.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Exam vouchers — 101-500 and 102-500', values: ['~$200 each in the US (LPI pricing varies by country)', 'Pearson VUE test centre or OnVUE online', 'The two exams themselves — both required for LPIC-1'] },
      { label: 'LPI objectives documents (101-500, 102-500)', values: ['Free', 'Official PDFs', 'The syllabus — the only true source of truth'] },
      { label: 'LPI Learning Materials and official practice tests', values: ['Varies; some free, some paid', 'Online learning and practice assessments', 'Aligned to the current 5.0 objectives'] },
      { label: 'Your own Linux lab (VM or cloud instance)', values: ['Free to ~$20/month', 'Hands-on shell and services', 'The single most valuable resource for an exam that scores typed commands'] },
      { label: 'LPIC-1 study guides (e.g. LPI, O\'Reilly, Sybex)', values: ['~$40-70', 'Print or eBook', 'Structured review — confirm the edition maps to objectives 5.0'] },
      { label: 'Linux Academy / CBT-style video courses', values: ['Subscription or per-course', 'Video with labs', 'Guided structure for candidates new to Linux'] }
    ],
    footnote: 'Prices checked 2026-08 in USD and approximate; LPI exam pricing varies by country and changes with the objectives cycle, so confirm the current voucher price for your region. Check any paid material against the current 5.0 objectives before buying. We do not rank by commission.'
  },

  commonMistakes: {
    summary:
      'The mistakes that cost LPIC-1 candidates the most are version errors and preparation-method errors: studying objectives from an older cycle, preparing entirely with multiple-choice practice while the paper contains fill-in-the-blank items, learning a single distribution family, and booking an exam before practice-test readiness. Each one is avoidable, and each one is common enough that it explains most of the difference between candidates who pass both papers on the first attempt and candidates who pay for retakes. The version error is the most expensive because it wastes the entire study cycle: the current LPIC-1 is version 5.0 with exams 101-500 and 102-500, LPI refreshes objectives roughly every three years, and books and courses from the previous cycle are still on sale and still rank in search results — so a candidate who checks the objectives document on lpi.org before buying anything protects the whole plan. The multiple-choice-only error is the most common because it feels like preparation: the 60-question paper mixes recognition items with fill-in-the-blank items scored for exact syntax, so a candidate who can select the right command from a list but cannot produce it from memory loses those items outright. The single-distribution error is the most predictable because of how the exam is designed: LPIC-1 is deliberately distribution-neutral and can test dpkg and apt as well as rpm and dnf, so an Ubuntu-only candidate loses RPM-family points and a RHEL-only candidate loses Debian-family points, and running both families in the lab is a few hours a week that closes the gap completely. The booking-too-early error is the most mechanical: each attempt costs the full voucher, and a candidate who schedules on the strength of coursework rather than the official practice assessments converts a routine pass into a paid retake. Add the expiry error — forgetting that LPIC-1 is valid for five years and must be renewed by re-sitting the current exams or passing a higher-level LPI certification — and the list covers the full arc of the certification. Every one of these is fixed by the objectives documents, a two-family lab, and practice-test readiness.',
    items: [
      {
        mistake: 'Studying an older objectives cycle',
        fix: 'The current LPIC-1 is version 5.0 (exams 101-500 and 102-500), and LPI refreshes objectives roughly every three years. Older books and courses are still on sale and still rank in search, but they teach the previous paper. Check the objectives document on lpi.org before buying anything, and confirm any paid material explicitly maps to the current exam codes.'
      },
      {
        mistake: 'Preparing only with multiple-choice practice',
        fix: 'The exams contain fill-in-the-blank items scored for exact syntax — a candidate who can recognise the right command in a list but cannot produce it loses those questions outright. Practise generating answers from memory at the shell, and rehearse the exact flags and option order the objectives emphasise, not just the concepts.'
      },
      {
        mistake: 'Learning one distribution and hoping',
        fix: 'LPIC-1 is deliberately distribution-neutral, and the same paper can test dpkg and apt as well as rpm and dnf. Ubuntu-only candidates lose RPM-family items and RHEL-only candidates lose Debian-family items. Running both families in your lab is a few hours a week that closes the gap completely.'
      },
      {
        mistake: 'Blurring the two exams together',
        fix: 'The 101 and 102 papers are separate — 101 covers architecture, installation, packages, commands and filesystems; 102 covers scripting, administrative tasks, services, networking and security — and candidates who study "Linux" as one blob sit the first paper under-prepared for its focus. Keep the objectives separate, and take each exam after a dedicated review pass over its own list.'
      },
      {
        mistake: 'Forgetting that the certification expires',
        fix: 'LPIC-1 is valid for five years, and LPI extends it when you pass a higher-level LPI certification or re-sit the current exams. Log the validity date the week you pass, and treat the expiry as a prompt to move to LPIC-2 or the current versions rather than a chore — the renewal path is the natural next certification.'
      }
    ]
  },

  questionTypes: {
    summary:
      'Each LPIC-1 exam — 101-500 and 102-500 — is 60 multiple-choice and fill-in-the-blank questions in 90 minutes, scored on a 200-800 scale with a 500 passing score, and the paper\'s defining feature is that it does not reward recognition alone. The multiple-choice items are single-answer in the main, testing command behaviour, configuration files, and the correct approach to a described administrative task, with distractors that are usually real commands or real options that do something adjacent, so partial familiarity is punished. The fill-in-the-blank items are the exam\'s signature: you must produce the exact command or answer — a command line with the correct flags, a file path, or a configuration value — and they are scored for exactness, which is why the preparation advice across this file keeps returning to typing. The 101 paper concentrates its items on system architecture, Linux installation and package management, GNU and Unix commands, and devices, filesystems and the FHS; the 102 paper concentrates on shells and shell scripting, interfaces and desktops, administrative tasks, essential system services, networking fundamentals, and security. The pacing is generous — 90 minutes for 60 questions is a minute and a half per item — so the exam is a breadth-and-accuracy test rather than a speed test, and the discipline is to answer every multiple-choice item and to spend the saved time being careful with the fill-in-the-blank answers. Because LPI equates forms, your scaled score is not a percentage of items correct and cannot be converted into one; the practical implication is to calibrate with official practice assessments rather than percentage heuristics.',
    types: [
      { name: 'Single-answer multiple choice', share: 'The bulk of the paper', detail: 'Command behaviour, configuration files, and the correct approach to a described task; distractors are usually real commands or options that do something adjacent, so partial familiarity is punished.' },
      { name: 'Fill-in-the-blank', share: 'A meaningful minority — the signature item', detail: 'Type the exact command or answer: a command line with the correct flags, a file path, or a configuration value, scored for exactness. This is the family that separates recognised from produced knowledge.' },
      { name: 'Scenario-based multiple choice', share: 'Heaviest in the administrative and troubleshooting content', detail: 'A described system situation — a service that will not start, a user who cannot log in, a filesystem that will not mount — asking for the cause or the next correct step; these reward a diagnostic order rather than pattern-matching.' }
    ],
    samples: [
      {
        prompt: 'An administrator needs to display all processes currently running under the user "deploy" with full command lines. Which command line achieves this?',
        options: [
          'A. ps -u deploy',
          'B. ps aux | grep deploy',
          'C. ps -U deploy -f',
          'D. top -b deploy'
        ],
        answer: 'C',
        explanation: 'ps -U deploy selects processes by real user ID and -f adds the full-format listing including the full command line, which is the exact requirement. A selects the processes but without the full command line. B is a common workaround that is fragile — it can match unrelated lines and misses the full-format guarantee. D is not valid syntax for top, which does not take a user filter in that form. The item rewards knowing the ps selection flags precisely, which is what the fill-in-the-blank sibling of this question would demand.'
      },
      {
        prompt: 'A new user needs to be added to the system with a home directory and the bash shell, and the account should be set to expire after 90 days. Which command accomplishes the account creation part of the task?',
        options: [
          'A. useradd -m -s /bin/bash username',
          'B. adduser username -bash',
          'C. usermod -m username -d /home/bash',
          'D. useradd -d /home -e bash username'
        ],
        answer: 'A',
        explanation: 'useradd -m creates the home directory and -s /bin/bash sets the login shell, which creates the account with the required properties; the 90-day expiry would be set separately with chage. B is not a valid syntax combination for adduser. C uses usermod, which modifies an existing account rather than creating one. D misuses the -d and -e options, which are for the home directory and expiry date, not the shell. The item tests the exact flag meanings, and the exactness matters even more in the fill-in-the-blank version.'
      },
      {
        prompt: 'A service has failed to start at boot on a systemd-based distribution. Which command is the most appropriate first diagnostic step?',
        options: [
          'A. systemctl status servicename',
          'B. systemctl stop servicename',
          'C. reboot the server immediately',
          'D. rm the unit file and recreate it from memory'
        ],
        answer: 'A',
        explanation: 'systemctl status shows whether the unit is loaded, active, or failed, and displays the recent journal output for it — the correct first diagnostic step for a service that fails to start. B stops a service that is not running and reveals nothing. C is a shotgun approach that risks masking the failure. D destroys the unit file without understanding the fault. The item rewards a fixed diagnostic order, which is what the exam\'s administrative and troubleshooting content is built around.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      'An LPIC-1 exam is 60 multiple-choice and fill-in-the-blank questions in 90 minutes, scored on the 200-800 scale with a 500 passing score, delivered through Pearson VUE either at a test centre or online via OnVUE, and the whole session is governed by the standard VUE rules: a government-issued photo ID whose name matches your registration exactly, no personal items in the testing room, and no scheduled break in the 90-minute paper. At a centre, arrive 30 minutes early, check in with your ID and scheduling confirmation, store your phone, watch, bag and notes in the locker, and expect the check-in to include a photograph, an electronic signature and a personal-items search before you are seated at the workstation with an erasable noteboard. For OnVUE, the week before is the critical window: run the system test on the exact machine and network you will use, clear the desk, close the door, and have your phone ready for the check-in photographs of your face, your ID and the whole room — a second monitor must be unplugged and turned away. Once the clock starts, the 60 items run in a mixed order, so build your pacing around the paper\'s real character: it is a breadth-and-accuracy test, not a speed test, and the discipline is to answer the multiple-choice items at a working tempo and spend the saved time being careful with the fill-in-the-blank answers, where exact syntax scores and a partial answer does not. If you fail, LPI requires purchasing the voucher again to retake, so use the result to target the failing objectives before rebooking. On a pass, the exam score and the certification appear in your LPI account, and because the LPIC-1 requires both exams, the second paper is the one that completes the credential — book it while the study habit is fresh, and log the 5-year validity date the week you finish.',
    bring: [
      'Government-issued photo ID matching your registration exactly',
      'Your scheduling confirmation with the test-centre address or OnVUE details',
      'For OnVUE: a phone for check-in photos, a completely clear desk, and a private room with a door you can close',
      'For OnVUE: the system-tested computer, webcam, microphone and connection you will actually use',
      'Your LPI or Pearson VUE login details in case check-in needs to verify the booking'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker at a centre, out of the room for OnVUE',
      'All notes, cheat sheets and printed command references — the exam is closed-book',
      'Your own paper and pens; a test centre issues an erasable noteboard and OnVUE provides a digital whiteboard only',
      'Bags, coats, food and drink beyond what the centre or proctor permits',
      'Second monitors, and any other person in the room for OnVUE'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your ID name matches your registration; for OnVUE, run the system test on the same machine and network you will use.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin OnVUE check-in — around 15 minutes for ID photographs and the room scan.' },
      { time: 'At the workstation', detail: 'Erasable noteboard issued (or digital whiteboard), tutorial completed, then the timer starts: 60 questions, 90 minutes, no scheduled break.' },
      { time: 'During the exam', detail: 'Answer the multiple-choice items at a working tempo and spend the saved time being exact with the fill-in-the-blank answers; flag nothing you cannot return to quickly.' },
      { time: 'After submit', detail: 'Your score on the 200-800 scale appears; on a pass, the result records against your LPI account and you book the second exam to complete the LPIC-1.' }
    ],
    rules: [
      '60 multiple-choice and fill-in-the-blank questions, 90 minutes, per exam; no scheduled break.',
      'Passing score is 500 on a 200-800 scale per exam; it is not a percentage of items correct.',
      'Both exams (101-500 and 102-500) must be passed to earn the LPIC-1, in any order.',
      'Two forms of identification are required at a centre; OnVUE requires the system test, a clean room, and a live room scan.',
      'Retaking a failed exam requires purchasing the voucher again; LPI publishes no waiting-period policy we could verify, so check the current terms at booking.',
      'The certification is valid for five years, renewable by passing the current exams again or a higher-level LPI certification.'
    ],
    afterwards:
      'Your score appears on the 200-800 scale at the end of the session, and the pass line is 500 — read the result against the cut and the two-exam structure: one pass banks that paper, and the LPIC-1 completes when the second exam clears too, so book it while the study habit is fresh. On a pass, the credential is valid for five years and LPI extends it when you pass a higher-level certification or re-sit the current exams, so log the validity date and treat the renewal as the prompt to move toward LPIC-2 or the current version rather than a chore. On a fail, the exam is the diagnostic: LPI publishes no pass-rate statistics and no score breakdown beyond the number, so pair the scaled score with the official practice assessments, re-drill the objectives you know were weak, and rebook with a defined target rather than on hope. Either way the credential sits at the foundation of a $96,800-median occupation (BLS, May 2024) whose long-term employment is projected to decline — which is precisely why the candidates who fare best pair LPIC-1 with the automation, container and cloud skills the objectives now reach toward, and why the certification is best treated as the floor of a career, not its ceiling.'
  }
};

export default data;
