const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cybersecurity & offensive-security desk',
    bio: 'We cover OffSec certifications for penetration testing. Format and fee facts come from OffSec official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the OSCP exam structure, scoring, fees and course requirements against OffSec official pages; verified BLS cybersecurity wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'OSCP evidences hands-on penetration-testing skill: information security analysts earned a $124,910 median in May 2024 (BLS)',
    summary: 'The Offensive Security Certified Professional (OSCP) is the flagship certification for penetration testing, evidencing hands-on ability to exploit vulnerable systems within a time-limited, proctored exam. It is a technical certification rather than a job license, so no single BLS SOC code attaches to it; the salary story belongs to the security occupations it serves. BLS reported that information security analysts (SOC 15-1212) earned a median of $124,910 in May 2024, projected to grow 30 percent from 2024 to 2034 - one of the fastest-growing occupations BLS tracks; penetration-testing roles (offensive security, red team, security assessment) sit within and above this range, with specialized offensive roles paying premiums in consulting and product-security teams. The structural point is that the OSCP is the most widely recognized entry credential in offensive security: job postings for penetration testers and security consultants frequently list it, and its hands-on exam format is the credential\u2019s core value - it proves the candidate can actually perform the work, which is rare among certifications. BLS classifies workers by occupation, not certifications, so no certificate maps to a specific wage; the value is the demonstrable skill signal in a market where practical ability is the differentiator. The certification requires the PEN-200 training course (or equivalent preparation), a 24-hour (roughly 23 hours 45 minutes) hands-on exam, and a written report graded alongside the technical exploits; the honest framing is that OSCP is earned, not studied for - the exam is the test.',
    rows: [
      { label: 'Information security analysts median, May 2024', value: '$124,910', note: 'BLS OEWS, SOC 15-1212' },
      { label: 'Computer and mathematical occupations median, May 2024', value: '$105,850', note: 'BLS OEWS occupational group' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'OSCP exam length', value: '~23 hr 45 min hands-on + report', note: 'OffSec' }
    ],
    growth: 'Information-security-analyst employment is projected to grow 30 percent from 2024 to 2034, much faster than the average.',
    source: { label: 'BLS Occupational Outlook Handbook - Information Security Analysts', url: 'https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm' }
  },
  passRate: {
    headline: 'OSCP requires 70 of 110 points across the hands-on exam and the report; OffSec publishes no pass rates',
    summary: 'OffSec does not publish official pass-rate statistics for the OSCP, but the exam mechanics are public. The current OSCP exam is a hands-on, proctored test of roughly 23 hours 45 minutes in which the candidate attacks a network of target machines and earns points for successful exploits (obtaining local proof, local.txt, and root or system access, proof.txt); the total is 110 points, and the passing score is 70 points (approximately 63 percent). The exam includes bonus points (up to 10) awarded for a clean penetration-testing report and documentation submitted within the report window. In the current format, the exam is delivered remotely with proctoring, and the candidate has about 24 hours for the technical portion plus a report submission window (the report is graded as part of the passing criteria). The exam requires the PEN-200 course material as preparation - OffSec requires the course or an acceptable equivalent background, and the exam voucher is bundled with the course - and the practical reality is that the OSCP has a reputation as a demanding exam that many candidates sit more than once; community-sourced pass estimates vary, but OffSec itself does not publish a rate. The honest summary is that the passing bar is 70 of 110 points including report bonuses, the exam is a real hands-on attack with proctoring, and candidates should budget for the possibility of multiple attempts (each attempt requires an exam voucher).',
    source: { label: 'OffSec OSCP exam information', url: 'https://www.offsec.com/courses/pen-200/' },
    caveat: 'OffSec publishes no pass rates; the exam requires 70/110 points including up to 10 report bonus points, with ~24 hours of hands-on time plus a report.'
  },
  studyPlan: {
    summary: 'The OSCP preparation plan is the PEN-200 course plus extensive lab practice, typically 300-600 hours over 3-6 months for a candidate with security or systems fundamentals; OffSec positions the course at a fixed pace but the lab work is where the skill develops. The PEN-200 course (roughly 90 days of lab access with the standard bundle, extendable) covers: information gathering and enumeration, vulnerability identification, exploitation of Windows and Linux targets, buffer overflows (historically a module; the current syllabus emphasizes modern exploitation), privilege escalation, pivoting and lateral movement, and web application attacks. A realistic plan: months 1-2, complete the course modules and the accompanying exercises (the "lab exercises" that earn the bonus points are part of the course), working through each module with the lab machines; months 3-4, grind the lab network - the course lab contains many machines, and the standard advice is to attack machines in order of difficulty, documenting every method; months 5-6, take practice exams (the "Try Harder" exam simulations and the retired-exam machines in the lab), write full reports, and take the real exam. The dominant resources are the PEN-200 course and lab (the required purchase, roughly $1,700-$2,500 depending on the bundle and extensions), the exam voucher, and the reporting templates; free supplementary resources (Hack The Box, TryHackMe) build speed but the official lab is the closest match. The honest framing is that the OSCP is earned through hours of hands-on practice, and candidates who skip the lab and attempt the exam unprepared are the ones who retake.',
    totalHours: '300-600 hours over 3-6 months',
    weeks: [
      { label: 'Months 1-2', focus: 'PEN-200 modules and exercises', tasks: ['Complete the course modules', 'Lab exercises for bonus points'], hours: 200 },
      { label: 'Months 3-4', focus: 'Lab network grind', tasks: ['Attack lab machines in difficulty order', 'Document every method'], hours: 250 },
      { label: 'Months 5-6', focus: 'Practice exams and report', tasks: ['Exam-simulation practice', 'Write full reports; take the real exam'], hours: 120 }
    ],
    variants: [
      { label: 'Exam retake', detail: 'Each attempt requires an exam voucher; many candidates plan for multiple attempts.' },
      { label: 'Equivalent background', detail: 'OffSec requires the course or acceptable equivalent knowledge; the exam voucher is bundled with PEN-200.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective OSCP strategies are about method, documentation and endurance. Strategy one: build a personal methodology - a systematic enumeration checklist (port scanning, service identification, web directories, version exploitation) that you execute identically on every machine, because the exam rewards methodical coverage over cleverness, and a written methodology checklist is the difference between finding the entry point and missing it. Strategy two: document everything as you go - screenshots, commands, flags and the reasoning - because the report is worth up to 10 bonus points and is graded; candidates who exploit machines but cannot document them lose points. Strategy three: practice the enumeration depth that the exam demands: full TCP and UDP scans, service and version enumeration, web application fuzzing, and the "Try Harder" mindset of escalating effort on stuck machines. Strategy four: learn the common privilege-escalation paths cold (kernel exploits, misconfigured services, credential reuse, scheduled tasks) because post-exploitation is where many candidates stall. Strategy five: train the 24-hour endurance - take full-length practice exams that simulate the pacing, including sleep management, because the exam window is a marathon and exhaustion is a real failure mode. Strategy six: use the official lab and practice machines over free platforms for the final weeks, because the scoring and the environment are OffSec-specific.',
    items: [
      { title: 'Build a personal methodology', detail: 'A written enumeration checklist executed on every machine.' },
      { title: 'Document while you work', detail: 'The report is worth bonus points and is graded.' },
      { title: 'Go deep on enumeration', detail: 'Full TCP/UDP scans, version and web fuzzing.' },
      { title: 'Master privilege escalation', detail: 'The most common stall point after initial access.' },
      { title: 'Train the 24-hour endurance', detail: 'Full practice exams build the marathon pacing.' }
    ]
  },
  resourceComparison: {
    summary: 'The OSCP resource market is anchored by OffSec\u2019s official course, which is the required purchase. The PEN-200 course bundle (roughly $1,700-$2,500 depending on the plan, including the course content, lab access and the exam voucher; extensions and retake vouchers add cost) is the core investment; it includes the course modules, the lab network, the exercises and the exam. The official exam guide and reporting template are included. Free and low-cost supplements - Hack The Box, TryHackMe, and community write-ups - build speed and breadth, and are commonly used alongside the official lab; the honest caveat is that only the official lab matches the exam environment, so free platforms should supplement rather than replace it. Private courses and bootcamps ($1,000-$4,000) add structure and are popular with career changers, but the certification itself is earned in the exam, and the value of any paid supplement is practice and accountability. The honest ranking: the PEN-200 course and lab (required), the official exam and report materials (included), free practice platforms for volume, and a bootcamp only for structured learners. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'PEN-200 course + lab + exam voucher', values: ['$1,700-$2,500', 'Online course + lab', 'The required core investment'] },
      { label: 'Hack The Box / TryHackMe', values: ['Free-$30/mo', 'Online platforms', 'Practice volume and speed'] },
      { label: 'Bootcamp / private course', values: ['$1,000-$4,000', 'Live/online', 'Structure and accountability'] },
      { label: 'Community write-ups', values: ['Free', 'Web', 'Methodology and techniques'] }
    ],
    footnote: 'Prices dated 2025-26 and vary by bundle; retake vouchers and lab extensions add cost. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common OSCP mistakes come from underestimating the hands-on nature and skipping the lab. Mistake one: treating the course as reading material; the OSCP is earned by attacking machines, and candidates who complete the modules without grinding the lab arrive at the exam unpracticed. Mistake two: skipping documentation; the report is worth up to 10 bonus points and is graded, and candidates who exploit machines without screenshots and notes lose points they earned. Mistake three: shallow enumeration; the exam rewards exhaustive scanning and version identification, and candidates who rush past enumeration miss entry points. Mistake four: stalling on privilege escalation; post-exploitation is where many candidates fail, and the common paths must be drilled until they are automatic. Mistake five: ignoring the 24-hour endurance; candidates who never simulate the full window exhaust themselves mid-exam. Mistake six: using free platforms exclusively; the official lab matches the exam environment, and candidates who train only on easier platforms misjudge the difficulty. Finally, candidates should plan the retake reality - the OSCP is commonly passed on a second or third attempt - and budget time and voucher cost accordingly, because the honest expectation is that this exam is hard.',
    items: [
      { mistake: 'Reading without attacking', fix: 'Grind the lab; the skill is hands-on.' },
      { mistake: 'Skipping documentation', fix: 'Screenshots and notes earn the report bonus.' },
      { mistake: 'Shallow enumeration', fix: 'Exhaustive scanning finds the entry points.' },
      { mistake: 'Stalling after initial access', fix: 'Drill the privilege-escalation paths.' },
      { mistake: 'Under-budgeting retakes', fix: 'Plan for the real possibility of multiple attempts.' }
    ]
  },
  questionTypes: {
    summary: 'The OSCP exam is not a multiple-choice test; it is a hands-on, proctored exam of roughly 23 hours 45 minutes in which the candidate attacks a network of target machines. Scoring: 110 total points, passing at 70, with up to 10 bonus points for the penetration-testing report; points are earned by obtaining the required proof files (local and proof/root flags) on each machine. The exam requires the PEN-200 course background, is delivered remotely with proctoring, and the report is submitted within the report window after the technical portion. The task is to compromise multiple Windows and Linux targets using enumeration, exploitation, privilege escalation, and lateral movement. Samples below are editor-written illustrations of the published exam format, not live exam items.',
    types: [
      { name: 'Initial access', share: '~40% of points', detail: 'Enumeration and exploitation to obtain local proof.' },
      { name: 'Privilege escalation', share: '~35% of points', detail: 'Local to root/system and the proof flag.' },
      { name: 'Lateral movement and pivoting', share: '~15% of points', detail: 'Moving through the network to further targets.' },
      { name: 'Report', share: 'Up to 10 bonus points', detail: 'Clean documentation of methodology and findings.' }
    ],
    samples: [
      {
        prompt: 'An Nmap scan on a target shows ports 22, 80 and 8080 open. The web application on 8080 has a file upload form. Which is the most appropriate next step in a methodical approach?',
        options: ['A. Try the default password on SSH immediately', 'B. Enumerate the web application and test the upload for filter bypass', 'C. Move to the next machine', 'D. Skip the web app and brute-force SSH'],
        answer: 'B',
        explanation: 'A methodical approach enumerates each service; a file upload with filter bypass is a common entry path, and exhausting the web surface before brute force follows the methodology.'
      },
      {
        prompt: 'After obtaining a low-privilege shell on a Linux target, which local check is most likely to reveal an escalation path?',
        options: ['A. Reviewing the sudo configuration and SUID binaries', 'B. Restarting the network service', 'C. Deleting the logs', 'D. Disabling the firewall'],
        answer: 'A',
        explanation: 'Sudo rules and SUID binaries are classic Linux privilege-escalation vectors; checking them is a standard post-exploitation step.'
      },
      {
        prompt: 'A candidate finds proof.txt in the root directory but the flag file is unreadable. What is the most appropriate action?',
        options: ['A. Escalate privileges to root to read it', 'B. Copy the file without reading it', 'C. Move to the next machine', 'D. Report the machine as complete'],
        answer: 'A',
        explanation: 'The proof flag requires root or system access; escalating privileges to read it is the correct completion of the task, not moving on or reporting partial completion.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam format, not live exam items.'
  },
  examDay: {
    summary: 'The OSCP exam is delivered remotely with proctoring on a scheduled date; candidates must complete the environment and proctor check ahead of time, use a stable connection and a compliant testing setup (the proctoring rules are strict - no assistance, no unauthorized tools beyond the exam environment, camera on). The exam runs roughly 23 hours 45 minutes for the hands-on portion, and the candidate attacks the target network to earn 70 of 110 points; screenshots and notes taken during the exam are used for the report. After the technical window, the candidate submits the penetration-testing report within the report submission window, and the report is graded as part of the passing criteria. Results are typically released within about 7-10 days. Candidates should plan sleep strategically during the long window, keep the methodology checklist visible, and document every machine as they go. Afterwards, if passed, add the certification to your resume with the OffSec credential; if not, use the experience to target the retake (each attempt requires a voucher) with a focused lab plan.',
    bring: ['Compliant exam setup (per the proctoring rules)', 'Stable internet connection', 'Methodology checklist and note template', 'Sleep and fuel plan for the long window'],
    leave: ['Prohibited assistance or tools', 'Unstable connections - test ahead', 'The assumption that the report can be written from memory'],
    timeline: [
      { time: 'Before', detail: 'Complete the environment and proctor check.' },
      { time: 'Hours 0-24', detail: 'Hands-on exam: attack the target network, 70/110 to pass.' },
      { time: 'Report window', detail: 'Submit the penetration-testing report.' },
      { time: '~7-10 days later', detail: 'Results released.' }
    ],
    rules: [
      'The exam is remotely proctored with strict environment rules.',
      'Passing is 70/110 points including up to 10 report bonus points.',
      'The report is required and graded.',
      'Each attempt requires an exam voucher.'
    ],
    afterwards: 'If passed, add the OSCP credential to your resume; if not, target the retake with a focused lab plan, documenting the weak areas from the attempt.'
  }
};

export default data;
