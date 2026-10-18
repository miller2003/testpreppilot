/**
 * The single definition of "the URL that returns 200 in one hop" for this site.
 *
 * The build emits directory indexes, so the host (Cloudflare Pages) serves
 * `/about/` and answers `/about` with a 308. Every URL the site publishes —
 * <link rel="canonical">, og:url, the WebPage @id, the sitemap — has to be the
 * slashed form, or it points at a redirect. A canonical that redirects is
 * ignored, which is how 533 pages ended up with a decorative canonical tag.
 *
 * Root ("/") and real files (rss.xml, llms.txt, og-image.png) are left alone:
 * appending a slash to a file path produces a 404.
 */

export const SITE_URL = 'https://testpreppilot.com';

const FILE_LIKE = /\.[a-z0-9]{2,6}$/i;

export function canonicalForm(href: string, siteUrl: string = SITE_URL): string {
  const u = new URL(href, siteUrl);
  if (u.pathname === '/' || FILE_LIKE.test(u.pathname)) return u.toString();
  if (!u.pathname.endsWith('/')) u.pathname = `${u.pathname}/`;
  return u.toString();
}

/** Path + canonical form, for schema @ids that must match the canonical. */
export function canonicalPath(pathname: string): string {
  const u = new URL(pathname, SITE_URL);
  if (u.pathname === '/' || FILE_LIKE.test(u.pathname)) return u.pathname;
  if (!u.pathname.endsWith('/')) u.pathname = `${u.pathname}/`;
  return u.pathname;
}
