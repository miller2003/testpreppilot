import type { APIRoute } from 'astro';
import { credentials } from '../data/credentials';
import { allExams, completedGuides } from '../data/examCatalog/index.mjs';
import { releases } from '../data/examCatalog/release-manifest.mjs';
import { guideArticles } from '../data/guides';

const SITE = 'https://testpreppilot.com';

// A feed is a "what changed lately" channel, not a sitemap. 496 items made a
// 190 KB document that no reader app will ever scroll, and every deploy
// re-emitted all of it. 60 is enough to fill any reader and keeps the whole
// document under ~20 KB.
const MAX_ITEMS = 60;

const completedSlugs = new Set(completedGuides.map((g) => g.slug));

function escapeXml(s: string = ''): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Only surface pages with real, indexed substance.
function isSubstantive(exam: { status?: string; scope?: string; researched?: boolean }): boolean {
  return exam.status === 'complete' || exam.scope === 'national' || exam.researched === true;
}

interface FeedItem {
  title: string;
  url: string;
  description: string;
  /** ISO date, '' when unknown — those sort last. */
  date: string;
}

export const GET: APIRoute = () => {
  const items: FeedItem[] = [];

  for (const c of credentials) {
    items.push({
      title: c.name,
      url: `${SITE}/paths/${c.slug}/`,
      description: c.description || c.tagline || '',
      date: c.reviewed || '',
    });
  }

  for (const e of allExams) {
    // The 8 flagship guides already appear above at /paths/<slug>. Their
    // catalog twin is /exams/<slug>, which 404s — emitting it put eight dead
    // links in the feed, right next to the working ones.
    if (completedSlugs.has(e.slug)) continue;
    if (!isSubstantive(e)) continue;
    items.push({
      title: e.name,
      url: `${SITE}/exams/${e.slug}/`,
      description: e.blurb || '',
      date: releases[e.slug] || '',
    });
  }

  for (const g of guideArticles) {
    items.push({
      title: g.title,
      url: `${SITE}/guides/${g.slug}/`,
      description: g.description || '',
      date: g.dateISO || '',
    });
  }

  // Newest first; undated items keep their relative order at the end.
  items.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const shown = items.slice(0, MAX_ITEMS);

  // lastBuildDate is the newest real content date, not the build clock: a feed
  // that claims to have changed on every deploy is a feed readers stop polling.
  const newest = items.reduce((m, i) => (i.date > m ? i.date : m), '');

  const body = shown
    .map(
      (i) => `    <item>
      <title>${escapeXml(i.title)}</title>
      <link>${i.url}</link>
      <guid isPermaLink="true">${i.url}</guid>
      <description>${escapeXml(i.description)}</description>${
        i.date ? `\n      <pubDate>${new Date(`${i.date}T00:00:00Z`).toUTCString()}</pubDate>` : ''
      }
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>TestPrepPilot — Credential &amp; Exam Guides</title>
    <link>${SITE}/</link>
    <description>Verified U.S. exam, license, and certification requirements, built from primary sources.</description>
    <language>en-us</language>${newest ? `\n    <lastBuildDate>${new Date(`${newest}T00:00:00Z`).toUTCString()}</lastBuildDate>` : ''}
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
${body}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
