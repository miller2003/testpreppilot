// Provider records in src/data/credentials.ts still carry
// affiliateUrl: '#affiliate-placeholder' for programs we have not joined.
// Treat anything that is not an absolute http(s) URL as "no affiliate link",
// so buttons fall back to the provider's own site instead of a dead anchor.
export function liveAffiliateUrl(url?: string | null): string | undefined {
  return url && /^https?:\/\//i.test(url) ? url : undefined;
}
