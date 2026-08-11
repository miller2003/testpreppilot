// Real, evergreen study & career guides that back the /guides hub.
// Every article is a genuine page (rendered by src/pages/guides/[slug].astro)
// with no placeholder links. Bodies are structured so the template stays
// declarative and the prose stays easy to maintain.

export interface GuideListItem {
  title: string;
  text: string;
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  list?: GuideListItem[];
  callout?: string;
}

export interface GuideRelated {
  label: string;
  href: string;
}

export interface GuideArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  dateDisplay: string;
  dateISO: string;
  readTime: string;
  intro: string;
  sections: GuideSection[];
  related: GuideRelated[];
}

export const guideArticles: GuideArticle[] = [
  {
    slug: 'study-plan-working-full-time',
    title: 'How to Build a Realistic Study Plan While Working Full-Time',
    description:
      'A practical system for passing a license or certification exam when you have a job, a commute, and a life — built on time audits, short daily blocks, and active recall.',
    category: 'Study Strategy',
    dateDisplay: 'August 2026',
    dateISO: '2026-08-06',
    readTime: '8 min read',
    intro:
      `Most study plans fail not because the exam is hard, but because the plan assumed a person with forty free hours a week. If you work full-time, the win isn't studying harder — it's studying on a schedule you can actually keep. Here's the system we recommend to candidates balancing a job and a credential.`,
    sections: [
      {
        heading: 'Start with an honest time audit',
        paragraphs: [
          `Before you pick a study schedule, write down a normal week hour by hour — including the commute, the gym, and the evening you mentally check out. The goal isn't to shame yourself; it's to find the real gaps. Most working professionals have two to four genuinely usable hours on weekdays and a larger block on weekends.`,
          `Then subtract one. If your audit says you have ten free hours, plan for eight. A plan built on your best week collapses the first time real life shows up, and a broken plan is worse than a modest one — it teaches you that you "can't stick to it" when the truth is the plan was never honest.`,
        ],
        callout:
          'Rule of thumb: if a plan only works in your most disciplined week, it is not a plan — it is a wish. Build the plan around your worst week.',
      },
      {
        heading: 'The three-block weekly system',
        paragraphs: [
          `Instead of one heroic weekend cram, split study into three repeatable blocks. This matches how memory actually forms and survives a busy life.`,
        ],
        list: [
          {
            title: 'Daily micro-blocks (25–45 min)',
            text: 'One focused pass a day, six days a week. Short enough to protect when work runs late; consistent enough to keep the material warm.',
          },
          {
            title: 'Weekly deep block (2–3 hrs)',
            text: 'One longer weekend session for practice questions, full-length sections, and connecting topics you met during the week.',
          },
          {
            title: 'Monthly simulated exam',
            text: 'One timed, full-length run under real conditions. It tells you what to study next far more honestly than re-reading notes does.',
          },
        ],
      },
      {
        heading: 'Use active recall, not re-reading',
        paragraphs: [
          `Reading and highlighting feel productive and barely move the needle. Testing yourself — flashcards, blank-page recall, practice questions — is uncomfortable and is what actually builds retrievable memory. Front-load the uncomfortable part.`,
          `If a topic feels "familiar" rather than "I can explain it cold," you have not learned it. Close the book and try to teach it to an empty chair. If you stall, that's your next study target, not a reason to re-read the chapter.`,
        ],
        callout:
          'Spend at least half of every session in retrieval mode — answering questions, not consuming content. Comfort is a warning sign, not a reward.',
      },
      {
        heading: 'A six-week template you can steal',
        paragraphs: [
          `This is a skeleton, not gospel. Shift the weeks based on your exam date and how much material there is.`,
        ],
        list: [
          { title: 'Weeks 1–2', text: 'Map the full syllabus. Daily micro-blocks build breadth; the weekly deep block builds your first set of flashcards.' },
          { title: 'Weeks 3–4', text: 'Drill weak areas. Trade passive review for practice questions. First simulated exam at the end of week 4.' },
          { title: 'Weeks 5–6', text: 'Targeted review of what the sim exposed. Second sim in week 5; a light, confidence-building pass in week 6. No new topics in the final week.' },
        ],
      },
      {
        heading: 'Protect the plan',
        paragraphs: [
          `A plan dies from a thousand small skips. Tell one person your exam date and your weekly target so a missed block costs you social capital, not just a private shrug. When you miss a block — and you will — do the next one. Don't "make it up" with a double session that burns you out; just resume.`,
          `Finally, schedule rest. Memory consolidates off the clock. A candidate who studies six honest hours and sleeps well will out-perform one who studies ten and is fried. The exam rewards consistency, not heroics.`,
        ],
      },
    ],
    related: [
      { label: 'Browse exams by field', href: '/exams' },
      { label: 'How TestPrepPilot works', href: '/how-it-works' },
      { label: 'Beat test anxiety', href: '/guides/beat-test-anxiety-exam-day' },
    ],
  },
  {
    slug: 'license-reciprocity-across-state-lines',
    title: 'Understanding License Reciprocity Across State Lines',
    description:
      'What reciprocity, endorsement, and "full reciprocity" actually mean, where the real answer lives, the traps that derail a move, and a step-by-step way to transfer a license.',
    category: 'Regulation',
    dateDisplay: 'August 2026',
    dateISO: '2026-08-06',
    readTime: '7 min read',
    intro:
      `Few topics generate more bad advice than moving a professional license to a new state. "It transfers automatically" and "you'll have to start over" are both wrong often enough to be dangerous. Here's how to find the answer that actually applies to you.`,
    sections: [
      {
        heading: 'Reciprocity, endorsement, and "full reciprocity"',
        paragraphs: [
          `The words get used interchangeably and they are not the same. Reciprocity is a state-to-state agreement to honor another state's license, often with conditions. Endorsement is the more common modern path: you apply to the new state as an already-licensed professional, and they grant a license based on your existing one — usually after verifying education, exam, and a clean record.`,
          `Some compact or "full reciprocity" frameworks (common in nursing, EMS, and a few trades) let a license travel across member states with minimal extra steps. But "compact" does not mean "automatic," and not every state belongs to every compact. The label on a blog post is never the answer; the receiving state's board is.`,
        ],
      },
      {
        heading: 'Where the real answer lives',
        paragraphs: [
          `Start with the licensing board of the state you're moving to — not a national summary site, not a forum, and not a prep vendor's blog. Boards publish the exact endorsement pathway, the forms, the fees, and the education gaps you'll need to close.`,
          `When a requirement is ambiguous or changes often, treat it as "confirm with the board" rather than a fixed fact. That's the same confidence standard we apply to every guide on this site: a figure we can't pin to a current primary source is flagged, not presented as settled.`,
        ],
        callout:
          'Read the receiving state’s board directly. Anything else is a hint, not the rule — and hints about licenses are how people lose months.',
      },
      {
        heading: 'The traps that derail a move',
        paragraphs: [
          'Several gaps catch experienced professionals by surprise:',
        ],
        list: [
          { title: 'Education-hour gaps', text: 'Your old state accepted fewer training hours than the new one requires. You may need a course, not a whole new license.' },
          { title: 'Exam-version mismatch', text: 'Some states require a specific exam edition or a state-law supplement the others don’t. Verify the exact exam accepted.' },
          { title: 'Background and standing', text: 'A lapse in renewal, an open complaint, or unpaid fees in the old state can block endorsement until cleared.' },
          { title: 'Reciprocity that expired', text: 'Agreements change. A path a colleague used two years ago may no longer exist.' },
        ],
      },
      {
        heading: 'A step-by-step approach',
        paragraphs: [
          `1) Confirm the receiving board's endorsement pathway and the exact documents. 2) Pull your current license, education transcripts, and exam scores. 3) Close any identified gaps before applying. 4) Apply and verify standing in the old state. 5) Only after the new license is granted, notify employers and update any registrations.`,
          `Doing it in this order prevents the most expensive mistake: letting the old license lapse while assuming the new one is "pending." Keep both active until the transfer is complete.`,
        ],
      },
      {
        heading: 'When starting over is faster',
        paragraphs: [
          'Sometimes the gap is so wide — or the new state so restrictive — that endorsement costs more time and money than simply meeting the new requirement directly. Run the numbers honestly, including lost income during the wait. The right answer is the one that gets you working legally, not the one that protects your pride.',
        ],
      },
    ],
    related: [
      { label: 'Browse licenses by state', href: '/states' },
      { label: 'Find your credential', href: '/exams' },
      { label: 'About our editorial desk', href: '/about' },
    ],
  },
  {
    slug: 'beat-test-anxiety-exam-day',
    title: 'Beating Test Anxiety on Exam Day',
    description:
      'Why exam anxiety is physiological, not a character flaw — plus a two-week countdown, the night-before and morning-of routines, and what to do if you freeze mid-exam.',
    category: 'Mindset',
    dateDisplay: 'August 2026',
    dateISO: '2026-08-06',
    readTime: '6 min read',
    intro:
      `If your stomach drops the moment you sit down, you are not weak and you are not alone. Test anxiety is a predictable physical response, which means it is manageable with the same kind of preparation you gave the content. Here's the routine we see work.`,
    sections: [
      {
        heading: 'Anxiety is physiology, not weakness',
        paragraphs: [
          `A racing heart and a blank mind are your nervous system treating the exam like a threat. That response is older than language; arguing with it ("calm down") makes it worse. The fix is to give the body a different signal — slow breathing, familiar routine, and evidence that you've done this before.`,
          `Crucially, anxiety drops as competence rises. The single best anti-anxiety tool is a simulated exam taken under real conditions weeks earlier, so exam day feels like the fourth or fifth time, not the first.`,
        ],
      },
      {
        heading: 'The two-week countdown',
        paragraphs: [
          `In the final two weeks, shift from learning to rehearsing. Take at least one full timed run, then spend the remaining days on targeted review of what it exposed. Protect sleep — cramming the last 48 hours trades retrievable memory for fatigue and spikes anxiety.`,
          `Also rehearse logistics: know the route, parking, ID requirements, and what you can bring. Most exam-day panic is actually logistics panic wearing a content costume.`,
        ],
        callout:
          'Decide the night before what you’ll eat, wear, and do for the 90 minutes before the exam. Remove every small decision from the day itself.',
      },
      {
        heading: 'The night before and the morning of',
        paragraphs: [
          `No new topics. Light review only. A walk, a normal meal, and a fixed bedtime beat "one more chapter." In the morning, do the same warm-up you used in practice — a few easy questions to remind your brain this is familiar, not fatal.`,
          `Use box breathing (four counts in, four hold, four out, four hold) the moment you feel the spike. It is boring and it works, because it directly signals the nervous system that you are safe.`,
        ],
      },
      {
        heading: 'If you freeze mid-exam',
        paragraphs: [
          `When the blank hits, don't fight it. Skip the question, mark it, and move on — momentum restores confidence, and a answered-easy-question streak is the fastest way back. Return to the hard one later with a calmer system. If panic spikes, put the pen down, do one minute of box breathing, and restart with the next item, not the one that scared you.`,
        ],
        callout:
          'Skipping is a strategy, not a failure. Most passers leave questions for later; almost no one answers in perfect order.',
      },
      {
        heading: 'After the test',
        paragraphs: [
          `Whatever the result, the plan you built is what got you here, and it will get you further. If you didn't pass, the score report is a study map, not a verdict — and you now know the room, the clock, and the feeling, which is exactly what this guide was trying to hand you.`,
        ],
      },
    ],
    related: [
      { label: 'Build a study plan', href: '/guides/study-plan-working-full-time' },
      { label: 'How TestPrepPilot works', href: '/how-it-works' },
      { label: 'Our research methodology', href: '/methodology' },
    ],
  },
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return guideArticles.find((a) => a.slug === slug);
}
