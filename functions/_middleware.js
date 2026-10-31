// Cloudflare Pages middleware: Markdown for Agents (content negotiation).
//
// A GET/HEAD for a page whose Accept header prefers text/markdown gets the
// Markdown twin that _gen_markdown.mjs wrote next to the page at build time
// (dist/<route>/index.md). Everything else passes straight through, so
// browsers, which never ask for text/markdown, keep getting HTML.
//
// Both representations carry `Vary: Accept`, so a shared cache can never hand
// the Markdown to a browser or the HTML to an agent.
//
// public/_routes.json keeps static assets (images, /_astro, /data, …) from
// invoking this function at all; only page routes and the other Functions
// reach it.

/** q-value the Accept header gives to an exact media type (0 when absent). */
function qFor(accept, type) {
  let q = 0;
  for (const part of accept.split(',')) {
    const [range, ...params] = part.trim().toLowerCase().split(';');
    if (range.trim() !== type) continue;
    const qp = params.map((p) => p.trim()).find((p) => p.startsWith('q='));
    const v = qp ? Number(qp.slice(2)) : 1;
    q = Math.max(q, Number.isFinite(v) ? v : 0);
  }
  return q;
}

function wantsMarkdown(request) {
  const accept = request.headers.get('accept') || '';
  const md = qFor(accept, 'text/markdown');
  return md > 0 && md >= qFor(accept, 'text/html');
}

/** /about/ → /about/index.md ; /about → /about/index.md ; files → null */
function twinPath(pathname) {
  if (pathname.endsWith('/')) return pathname + 'index.md';
  const last = pathname.slice(pathname.lastIndexOf('/') + 1);
  if (last.includes('.')) return null;
  return pathname + '/index.md';
}

function withVary(response) {
  const res = new Response(response.body, response);
  const vary = res.headers.get('vary');
  if (!vary || !/\baccept\b/i.test(vary)) res.headers.set('Vary', vary ? `${vary}, Accept` : 'Accept');
  return res;
}

export async function onRequest({ request, next, env }) {
  const url = new URL(request.url);
  const isRead = request.method === 'GET' || request.method === 'HEAD';
  const twin = isRead && wantsMarkdown(request) ? twinPath(url.pathname) : null;

  // The normal response decides first, so _redirects (301s, the 308 to the
  // slashed URL) and 404s behave exactly as they do for a browser. Markdown
  // replaces only a 200 HTML page.
  const response = await next();
  const type = response.headers.get('content-type') || '';
  const isHtml = type.startsWith('text/html');

  if (twin && isHtml && response.status === 200) {
    const asset = await env.ASSETS.fetch(new URL(twin, url.origin));
    if (asset.ok) {
      const markdown = await asset.text();
      const canonical = url.pathname.endsWith('/') ? url.pathname : url.pathname + '/';
      return new Response(request.method === 'HEAD' ? null : markdown, {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept',
          'Cache-Control': 'public, max-age=0, must-revalidate',
          // Rough token estimate (~4 characters per token), as Cloudflare's own
          // Markdown for Agents feature reports it.
          'x-markdown-tokens': String(Math.ceil(markdown.length / 4)),
          'Link': `<${canonical}>; rel="canonical"; type="text/html"`,
          'X-Robots-Tag': 'noindex',
          'X-Content-Type-Options': 'nosniff',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
    // No twin for this page (a page with no <main>): serve the HTML.
  }

  return isHtml ? withVary(response) : response;
}
