import type { APIRoute } from 'astro';
import { credentials } from '../data/credentials';

const SITE = 'https://testpreppilot.com';

function escapeXml(s: string = ''): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = () => {
  const items = credentials.map((c) => {
    const url = `${SITE}/paths/${c.slug}`;
    return `    <item>
      <title>${escapeXml(c.name)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(c.description || c.tagline || '')}</description>
    </item>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>TestPrepPilot — Credential &amp; Exam Guides</title>
    <link>${SITE}</link>
    <description>Verified U.S. exam, license, and certification requirements, built from primary sources.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
${items.join('\n')}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
