// Ranked-pay model — the single definition used by the /best pages, the
// categories pages and _gen_llms.mjs.
//
// It lives in a .mjs module (not .ts) because plain-Node build scripts must be
// able to import it too. `src/lib/payRanking.ts` re-exports it for the Astro
// pages. One definition means the ranking in llms.txt can never disagree with
// the ranking rendered on /best.
//
// The honesty constraints are load-bearing, because /best is a recommendation
// list — the one page type where a wrong row is actively misleading:
//   · The parsed figure is used ONLY to decide the ORDER. It is never printed.
//     Printing it would misattribute an occupation median to a certificate.
//   · The printed sentence is the guide's researched headline, verbatim,
//     including its source attribution. Never rewritten for the list.
//   · Retired credentials are dropped — the catalog has no retirement flag, so
//     the signal is the researched sentence itself. This can only REMOVE a row;
//     it can never change a figure.
//   · A credential is an entry ticket to an occupation, not a pay guarantee.

import { allExams } from './index.mjs';
import { examDepth } from './examDepth.mjs';
import { examCategories } from './categories.mjs';

const RETIRED = /no longer obtainable|no further attempts|has been retired|retired exam|withdrawn from/i;
const MIN_HEADLINE = 40;

/** First dollar figure in a string, used for ORDERING ONLY. */
export function money(s) {
  const m = /\$([\d,]+)/.exec(String(s || ''));
  return m ? parseFloat(m[1].replace(/,/g, '')) : null;
}

function allRows() {
  const out = [];
  for (const e of allExams) {
    const dep = examDepth[e.slug];
    if (!dep) continue;
    const payLine = String(dep.salaryOutlook?.headline || '');
    const passLine = String(dep.passRate?.headline || '');
    const pay = money(payLine);
    if (pay === null || payLine.length <= MIN_HEADLINE) continue;
    if (RETIRED.test(`${payLine} ${passLine}`)) continue;
    out.push({
      slug: e.slug,
      name: e.name,
      category: e.category,
      url: `/exams/${e.slug}`,
      pay,
      payLine,
      passLine,
      reviewed: String(dep.lastReviewed || ''),
      fee: String(e.record?.examMeta?.fee || ''),
    });
  }
  return out.sort((a, b) => b.pay - a.pay || a.name.localeCompare(b.name));
}

/** Site-wide ranking, highest published occupation median first. */
export function payRankedAll(limit) {
  const rows = allRows();
  return limit ? rows.slice(0, limit) : rows;
}

/** Ranking restricted to one credential field. */
export function payRankedField(categoryId, limit) {
  const rows = allRows().filter((r) => r.category === categoryId);
  return limit ? rows.slice(0, limit) : rows;
}

/**
 * One entry per field with enough qualifying credentials to justify its own
 * ranking page. Fields below the threshold get no page rather than a thin one.
 */
export function rankedFields(minRows = 5) {
  const byCat = new Map();
  for (const r of allRows()) {
    if (!byCat.has(r.category)) byCat.set(r.category, []);
    byCat.get(r.category).push(r);
  }
  return examCategories
    .map((c) => ({ id: c.id, name: c.name, rows: byCat.get(c.id) || [] }))
    .filter((c) => c.rows.length >= minRows)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function fieldById(id) {
  return examCategories.find((c) => c.id === id) || null;
}

export const RANK_METHOD_NOTE =
  'Ranked by the median annual wage published for the occupation each credential ' +
  'unlocks, most recent figure per occupation, quoted from the source named in the ' +
  'guide (usually the BLS occupational series). A credential is the entry ticket to ' +
  'an occupation, not a pay guarantee: these are occupation medians, not starting salaries.';
