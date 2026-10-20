import type { APIRoute } from 'astro';
import { buildSearchIndex } from '../../lib/searchIndex';

// The homepage's autocomplete index, served as a cacheable static file instead
// of being serialised into the homepage HTML (where it was 185 KB of 651 KB).
// Cloudflare Pages caches /data/* for an hour and allows cross-origin reads, so
// this is also usable by anything else that wants to search the catalogue.
export const GET: APIRoute = () => {
  const body = JSON.stringify(buildSearchIndex());
  return new Response(body, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
