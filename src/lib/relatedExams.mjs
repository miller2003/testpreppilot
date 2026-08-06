import { allExams, categoryById } from '../data/examCatalog/index.mjs';

/**
 * Related-exam selection for /exams/<slug>.
 *
 * Measured problem: exam inbound links were min=2, p25=6, and 61 pages sat at
 * 2-3 inbound links. The only routes into a long-tail exam page were /exams
 * (which links all 550 and therefore passes almost nothing) and its category
 * hub. Nothing linked exam → exam, so the tail had no topical neighbourhood
 * and effectively no crawl priority.
 *
 * The naive fix — "list the first N exams in this category" — creates a *new*
 * sink: alphabetical slicing means the same handful of exams collect every
 * inbound link while the rest stay at zero. So the window is rotated by a hash
 * of the source slug. Each page still gets a stable, deterministic list at
 * build time, but across 550 pages the outbound links spread roughly evenly.
 */

// FNV-1a — small, fast, stable across builds. Only used to pick an offset.
function hash(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** Take `n` items starting at a slug-derived offset, wrapping around. */
function rotatedPick(pool, n, seed) {
  if (pool.length <= n) return pool;
  const start = hash(seed) % pool.length;
  const out = [];
  for (let i = 0; i < n; i++) out.push(pool[(start + i) % pool.length]);
  return out;
}

const byName = (a, b) => a.name.localeCompare(b.name);

export function relatedExams(exam, { perBucket = 6 } = {}) {
  if (!exam) return { groups: [] };
  const self = exam.slug;

  const sameCategory = allExams.filter((e) => e.category === exam.category && e.slug !== self);

  // 1. Tightest match: same category AND same group — e.g. every state's
  //    journeyman electrician licence.
  const sameGroup = sameCategory.filter((e) => e.group === exam.group).sort(byName);

  // 2. Same category, different group — stops the cluster being incestuous and
  //    gives the category hub a second-order boost.
  const otherGroup = sameCategory.filter((e) => e.group !== exam.group).sort(byName);

  // 3. Same jurisdiction, different category — the "what else can I get
  //    licensed for in this state" intent, and a genuinely different anchor set.
  const sameState = exam.stateCode
    ? allExams
        .filter(
          (e) => e.stateCode === exam.stateCode && e.category !== exam.category && e.slug !== self
        )
        .sort(byName)
    : [];

  const cat = categoryById[exam.category];
  const groups = [];
  const seen = new Set([self]);

  const push = (title, pool, hint) => {
    const picked = rotatedPick(
      pool.filter((e) => !seen.has(e.slug)),
      perBucket,
      self + title
    );
    if (!picked.length) return;
    picked.forEach((e) => seen.add(e.slug));
    groups.push({ title, hint, exams: picked });
  };

  if (exam.group) {
    push(
      `Other ${exam.group} credentials`,
      sameGroup,
      'Same credential family — hours, fees and the issuing board differ by jurisdiction.'
    );
  }
  if (exam.stateName) {
    push(`More ${exam.stateName} licenses`, sameState, `Other credentials issued in ${exam.stateName}.`);
  }
  if (cat) {
    push(`More in ${cat.name}`, otherGroup, cat.description || 'Related credentials in the same field.');
  }

  return { groups, category: cat };
}

export default relatedExams;
