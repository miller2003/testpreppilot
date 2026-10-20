/**
 * The autocomplete index for the homepage directory.
 *
 * Lives here rather than inside the page because it is served twice: once as a
 * static JSON endpoint (/data/search-index.json) and once, historically, inline
 * in the homepage HTML. Duplicating the mapping is how the two copies drift.
 *
 * Why it is a separate file at all: serialised inline it was 185 KB of the
 * homepage's 651 KB, and it is needed only after the reader types into the
 * search box. As a cached JSON file it costs nothing on first paint and is
 * fetched on first focus.
 */
import { buildDirectory } from '../data/examCatalog/index.mjs';

export interface SearchEntry {
  name: string;
  href: string;
  scope: string;
  state: string;
  meta: string;
  /** lowercased full name */
  n: string;
  /** lowercased words of the name */
  w: string[];
  /** initials, so "cpa" resolves to words starting with c/p/a */
  ini: string;
  short: string;
  aka: string[];
}

const metaOf = (e: any): string =>
  e.type && e.group ? `${e.type} · ${e.group}` : e.blurb || '';

export function buildSearchIndex(): SearchEntry[] {
  const out: SearchEntry[] = [];

  for (const cat of buildDirectory() as any[]) {
    for (const group of cat.groups || []) {
      for (const e of group.exams || []) {
        const n = String(e.name || '').toLowerCase();
        const w = n.split(/\s+/).filter(Boolean);
        out.push({
          name: e.name,
          href: e.href,
          scope: e.scope,
          state: e.stateCode || '',
          meta: metaOf(e),
          n,
          w,
          ini: w.map((s: string) => s[0]).join(''),
          short: String(e.short || '').toLowerCase(),
          aka: (e.aka || []).map((a: string) => String(a).toLowerCase()),
        });
      }
    }
  }

  return out;
}
