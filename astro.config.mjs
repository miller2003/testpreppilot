import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { releases } from './src/data/examCatalog/release-manifest.mjs';

export default defineConfig({
  site: 'https://testpreppilot.com',
  integrations: [
    sitemap({
      // Was bare <loc> only across 628 URLs — no lastmod, no priority, no
      // changefreq, so Google had no signal about which pages matter or when
      // they changed. Priority is now tiered by the page's role in the graph.
      changefreq: 'weekly',
      lastmod: new Date(),
      // /affiliate-disclosure is canonicalised to /disclosure (they had the same
      // <title> and the same purpose). A canonicalised URL must not be submitted
      // for indexing, or the sitemap contradicts the canonical tag.
      // /privacy-policy is a noindex redirect to /privacy — same reasoning.
      // /how-it-works, /reviews and /contact now redirect to /about (their
      // content was folded into the E-E-A-T hub) — exclude the same way.
      // /exams now redirects to / (the homepage IS the directory) — exclude the
      // bare index but keep /exams/<slug> detail pages indexable.
      filter: (page) =>
        !/\/affiliate-disclosure\/?$/.test(page) &&
        !/\/privacy-policy\/?$/.test(page) &&
        !/\/(how-it-works|reviews|contact)\/?$/.test(page) &&
        !/\/exams\/?$/.test(page),
      serialize(item) {
        const url = new URL(item.url);
        const p = url.pathname.replace(/\/$/, '') || '/';

        // Legal / boilerplate: keep indexable but signal low importance.
        if (/^\/(privacy|disclosure|editorial-policy)$/.test(p)) {
          item.priority = 0.2;
          item.changefreq = 'yearly';
          return item;
        }
        // Root + primary hub
        if (p === '/') { item.priority = 1.0; item.changefreq = 'daily'; return item; }
        if (p === '/explore') {
          item.priority = 0.9; item.changefreq = 'daily'; return item;
        }
        // Category hubs
        if (p.startsWith('/categories/')) { item.priority = 0.8; item.changefreq = 'weekly'; return item; }
        // Exam detail — the money pages
        if (p.startsWith('/exams/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
          // Report the page's actual release date rather than the build
          // timestamp. A build-time lastmod on every URL is indistinguishable
          // from noise, so Google discards it; a per-page date is a real
          // freshness signal and matches the on-page datePublished.
          const slug = p.slice('/exams/'.length);
          if (releases[slug]) item.lastmod = new Date(releases[slug] + 'T00:00:00Z');
          return item;
        }
        // Long-form pathway guides
        if (p.startsWith('/paths/')) { item.priority = 0.7; item.changefreq = 'monthly'; return item; }
        // Editorial long-form guides (/guides/<slug>)
        if (p.startsWith('/guides/')) { item.priority = 0.6; item.changefreq = 'monthly'; return item; }
        // Trust pages (E-E-A-T hub + guides index)
        if (/^\/(about|guides)$/.test(p)) {
          item.priority = 0.5; item.changefreq = 'monthly'; return item;
        }
        // Everything else (legal, 404-adjacent statics)
        item.priority = 0.6;
        item.changefreq = 'weekly';
        return item;
      },
    }),
  ],
  compressHTML: true,
  prefetch: true,
  build: {
    format: 'directory',
  },
  trailingSlash: 'never',
});
