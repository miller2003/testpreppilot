/**
 * Adaptive SEO title builder.
 *
 * Measured problem: 487 of 629 pages had titles over 60 characters, so Google
 * truncated them in the SERP. 421 of those were exam pages using a fixed
 * "— Requirements, Exam & Costs" suffix (28 chars) bolted onto names that were
 * already long, e.g.
 *   "ASE T7 Medium-Heavy Truck Heating, Ventilation and Air Conditioning
 *    Certification Test — Requirements, Exam & Costs"  (119 chars)
 *
 * Rather than truncating the name (which destroys the keyword), this picks the
 * longest suffix that still fits the budget, and drops the suffix entirely when
 * the name alone already fills it. The name is never cut.
 */

const MAX = 60;

/** Suffix candidates, longest → shortest. First one that fits wins. */
const DEFAULT_SUFFIXES = [
  ' — Requirements, Exam & Costs',
  ' — Requirements & Costs',
  ' — Requirements',
  ' — Exam Guide',
  '',
];

export function buildTitle(name: string, suffixes: string[] = DEFAULT_SUFFIXES, max = MAX): string {
  const base = (name || '').trim();
  for (const s of suffixes) {
    if (base.length + s.length <= max) return base + s;
  }
  return base;
}

/** Exam detail pages. */
export function examTitle(name: string): string {
  return buildTitle(name, DEFAULT_SUFFIXES);
}

/** State hub pages. */
export function stateTitle(stateName: string, count: number): string {
  return buildTitle(`${stateName} Licenses & Certifications`, [
    count > 0 ? ` — ${count} State Credentials` : '',
    ' — Requirements',
    '',
  ]);
}

/** Category hub pages. */
export function categoryTitle(name: string, total: number): string {
  return buildTitle(name, [
    ` — ${total} Certifications Compared`,
    ` — ${total} Credentials`,
    ' — Certifications & Licenses',
    '',
  ]);
}

/** /paths/<credential> national guide pages. */
export function credTitle(name: string): string {
  return buildTitle(name, [
    ' — Requirements & Guide',
    ' — Requirements',
    ' — Guide',
    '',
  ]);
}

/**
 * /<state>/<credential> pages. The state name must survive because it is the
 * whole point of the page, so it is folded into the base rather than the suffix.
 */
export function stateCredTitle(name: string, stateName: string): string {
  // Drop a state name already baked into the credential name
  // ("Texas Real Estate Sales Agent License" in Texas → don't say Texas twice).
  const alreadyNamed = name.toLowerCase().startsWith(stateName.toLowerCase());
  const base = alreadyNamed ? name : `${name} in ${stateName}`;
  // Must never collide with credTitle() (the /paths/<slug> twin page). When the
  // state is already in the name, force a state-scoped suffix so the two URLs
  // carry distinct <title>s and don't emit a duplicate-title signal.
  const suffixes = alreadyNamed
    ? [' — State Requirements', ' — State Guide', '']
    : [' — Requirements & Costs', ' — Requirements', ''];
  return buildTitle(base, suffixes);
}

/**
 * Meta descriptions get cut around 155-160 chars in the SERP. Trim on a word
 * boundary instead of mid-word, and never leave a dangling separator.
 */
export function clampDesc(text: string, max = 155): string {
  const t = (text || '').replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[\s,;:—–-]+$/, '') + '…';
}
