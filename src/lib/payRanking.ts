// Astro-facing re-export of the ranked-pay model.
//
// The implementation lives in src/data/examCatalog/payRanking.mjs so that the
// plain-Node build scripts (_gen_llms.mjs) import exactly the same code the
// pages render. Keeping a second copy here is how a ranking drifts.
import {
  money,
  payRankedAll,
  payRankedField,
  rankedFields,
  fieldById,
  RANK_METHOD_NOTE,
} from '../data/examCatalog/payRanking.mjs';

export interface PayRow {
  slug: string;
  name: string;
  category: string;
  url: string;
  /** Parsed figure — ordering only, never rendered. */
  pay: number;
  /** Verbatim researched headline, rendered as-is. */
  payLine: string;
  passLine: string;
  reviewed: string;
  /** Exam fee as stated on the guide; a separately sourced fact, safe to show. */
  fee: string;
}

export interface FieldRankEntry {
  id: string;
  name: string;
  rows: PayRow[];
}

export const payRankedAllTyped: (limit?: number) => PayRow[] = payRankedAll as any;
export const payRankedFieldTyped: (categoryId: string, limit?: number) => PayRow[] = payRankedField as any;
export const rankedFieldsTyped: (minRows?: number) => FieldRankEntry[] = rankedFields as any;

export { money, payRankedAll, payRankedField, rankedFields, fieldById, RANK_METHOD_NOTE };
