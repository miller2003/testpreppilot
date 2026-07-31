import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, h as decodeKey } from './chunks/astro/server_Dnl69afc.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/samja/Desktop/testpreppilot-v2/","cacheDir":"file:///C:/Users/samja/Desktop/testpreppilot-v2/node_modules/.astro/","outDir":"file:///C:/Users/samja/Desktop/testpreppilot-v2/dist/","srcDir":"file:///C:/Users/samja/Desktop/testpreppilot-v2/src/","publicDir":"file:///C:/Users/samja/Desktop/testpreppilot-v2/public/","buildClientDir":"file:///C:/Users/samja/Desktop/testpreppilot-v2/dist/client/","buildServerDir":"file:///C:/Users/samja/Desktop/testpreppilot-v2/dist/server/","adapterName":"","routes":[{"file":"file:///C:/Users/samja/Desktop/testpreppilot-v2/dist/404.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_credential_.DmfJNK8v.css"},{"type":"inline","content":".container[data-astro-cid-zetdm5md]{max-width:800px;margin:0 auto;padding:2rem;min-height:70vh;display:flex;align-items:center;justify-content:center}.page-hero[data-astro-cid-zetdm5md]{text-align:center}.page-hero[data-astro-cid-zetdm5md] h1[data-astro-cid-zetdm5md]{font-size:4rem;margin:1rem 0}.page-hero[data-astro-cid-zetdm5md] .lede[data-astro-cid-zetdm5md]{font-size:1.25rem;color:#444;margin-bottom:2rem}.cta-wrapper[data-astro-cid-zetdm5md]{margin-top:3rem}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/samja/Desktop/testpreppilot-v2/dist/disclosure/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_credential_.DmfJNK8v.css"},{"type":"inline","content":".container[data-astro-cid-imluyxhh]{max-width:800px;margin:0 auto;padding:2rem}.page-hero[data-astro-cid-imluyxhh]{padding:4rem 0;border-bottom:2px solid var(--ink);margin-bottom:4rem}.page-hero[data-astro-cid-imluyxhh] h1[data-astro-cid-imluyxhh]{font-size:3.5rem;margin:1rem 0}.page-hero[data-astro-cid-imluyxhh] .lede[data-astro-cid-imluyxhh]{font-size:1.25rem;color:#444}.prose[data-astro-cid-imluyxhh] section[data-astro-cid-imluyxhh]{margin-bottom:3rem}.prose[data-astro-cid-imluyxhh] h2[data-astro-cid-imluyxhh]{font-size:2rem;margin-bottom:1rem}.prose[data-astro-cid-imluyxhh] p[data-astro-cid-imluyxhh]{font-size:1.125rem;line-height:1.8;margin-bottom:1.5rem;color:var(--ink)}.prose[data-astro-cid-imluyxhh] strong[data-astro-cid-imluyxhh]{color:var(--primary)}\n"}],"routeData":{"route":"/disclosure","isIndex":false,"type":"page","pattern":"^\\/disclosure\\/?$","segments":[[{"content":"disclosure","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/disclosure.astro","pathname":"/disclosure","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/samja/Desktop/testpreppilot-v2/dist/editorial-policy/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_credential_.DmfJNK8v.css"},{"type":"inline","content":".container[data-astro-cid-hcg23c2t]{max-width:800px;margin:0 auto;padding:2rem}.page-hero[data-astro-cid-hcg23c2t]{padding:4rem 0;border-bottom:2px solid var(--ink);margin-bottom:4rem}.page-hero[data-astro-cid-hcg23c2t] h1[data-astro-cid-hcg23c2t]{font-size:3.5rem;margin:1rem 0}.page-hero[data-astro-cid-hcg23c2t] .lede[data-astro-cid-hcg23c2t]{font-size:1.25rem;color:#444}.prose[data-astro-cid-hcg23c2t] section[data-astro-cid-hcg23c2t]{margin-bottom:3rem}.prose[data-astro-cid-hcg23c2t] h2[data-astro-cid-hcg23c2t]{font-size:2rem;margin-bottom:1rem}.prose[data-astro-cid-hcg23c2t] p[data-astro-cid-hcg23c2t]{font-size:1.125rem;line-height:1.8;margin-bottom:1.5rem;color:var(--ink)}\n"}],"routeData":{"route":"/editorial-policy","isIndex":false,"type":"page","pattern":"^\\/editorial-policy\\/?$","segments":[[{"content":"editorial-policy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/editorial-policy.astro","pathname":"/editorial-policy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/samja/Desktop/testpreppilot-v2/dist/explore/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_credential_.DmfJNK8v.css"},{"type":"external","src":"/_astro/explore.2d_JIkZa.css"}],"routeData":{"route":"/explore","isIndex":false,"type":"page","pattern":"^\\/explore\\/?$","segments":[[{"content":"explore","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/explore.astro","pathname":"/explore","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/samja/Desktop/testpreppilot-v2/dist/how-it-works/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_credential_.DmfJNK8v.css"},{"type":"inline","content":".container[data-astro-cid-wlncami7]{max-width:900px;margin:0 auto;padding:2rem}.page-hero[data-astro-cid-wlncami7]{padding:4rem 0;border-bottom:2px solid var(--ink);margin-bottom:4rem;text-align:center}.page-hero[data-astro-cid-wlncami7] h1[data-astro-cid-wlncami7]{font-size:4rem;margin:1rem 0}.page-hero[data-astro-cid-wlncami7] .lede[data-astro-cid-wlncami7]{font-size:1.5rem;color:#444;max-width:700px;margin:0 auto}.principles[data-astro-cid-wlncami7]{display:grid;gap:4rem;margin-bottom:6rem}.principle[data-astro-cid-wlncami7]{background:var(--cream);padding:3rem;border-radius:4px;border:1px solid var(--ink);box-shadow:4px 4px 0 var(--ink);position:relative}.numeral[data-astro-cid-wlncami7]{font-family:var(--font-mono);font-size:4rem;color:var(--primary);font-weight:700;position:absolute;top:-2rem;left:2rem;background:var(--paper);padding:0 1rem;border:1px solid var(--ink)}.principle[data-astro-cid-wlncami7] h2[data-astro-cid-wlncami7]{font-size:2.5rem;font-family:var(--font-serif);margin-top:1rem;margin-bottom:1rem}.principle[data-astro-cid-wlncami7] p[data-astro-cid-wlncami7]{font-size:1.25rem;line-height:1.6;color:var(--ink)}\n"}],"routeData":{"route":"/how-it-works","isIndex":false,"type":"page","pattern":"^\\/how-it-works\\/?$","segments":[[{"content":"how-it-works","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/how-it-works.astro","pathname":"/how-it-works","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/samja/Desktop/testpreppilot-v2/dist/methodology/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_credential_.DmfJNK8v.css"},{"type":"inline","content":".container[data-astro-cid-qn2a7f5i]{max-width:900px;margin:0 auto;padding:2rem}.page-hero[data-astro-cid-qn2a7f5i]{padding:4rem 0;border-bottom:2px solid var(--ink);margin-bottom:4rem}.page-hero[data-astro-cid-qn2a7f5i] h1[data-astro-cid-qn2a7f5i]{font-size:4rem;margin:1rem 0}.page-hero[data-astro-cid-qn2a7f5i] .lede[data-astro-cid-qn2a7f5i]{font-size:1.5rem;color:#444;line-height:1.4}.principles[data-astro-cid-qn2a7f5i]{display:flex;flex-direction:column;gap:4rem;margin-bottom:6rem}.principle[data-astro-cid-qn2a7f5i] h2[data-astro-cid-qn2a7f5i]{font-size:2.5rem;font-family:var(--font-serif);margin-bottom:1.5rem;color:var(--primary)}.principle[data-astro-cid-qn2a7f5i] p[data-astro-cid-qn2a7f5i]{font-size:1.25rem;line-height:1.8;color:var(--ink)}.principle[data-astro-cid-qn2a7f5i] a[data-astro-cid-qn2a7f5i]{color:var(--ink);font-weight:700;text-decoration:underline;text-decoration-color:var(--primary);text-underline-offset:4px}.principle[data-astro-cid-qn2a7f5i] a[data-astro-cid-qn2a7f5i]:hover{color:var(--primary)}\n"}],"routeData":{"route":"/methodology","isIndex":false,"type":"page","pattern":"^\\/methodology\\/?$","segments":[[{"content":"methodology","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/methodology.astro","pathname":"/methodology","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/samja/Desktop/testpreppilot-v2/dist/privacy/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_credential_.DmfJNK8v.css"},{"type":"inline","content":".container[data-astro-cid-fb3qbcs3]{max-width:800px;margin:0 auto;padding:2rem}.page-hero[data-astro-cid-fb3qbcs3]{padding:4rem 0;border-bottom:2px solid var(--ink);margin-bottom:4rem}.page-hero[data-astro-cid-fb3qbcs3] h1[data-astro-cid-fb3qbcs3]{font-size:3.5rem;margin:1rem 0}.page-hero[data-astro-cid-fb3qbcs3] .lede[data-astro-cid-fb3qbcs3]{font-size:1.25rem;color:#444}.prose[data-astro-cid-fb3qbcs3] section[data-astro-cid-fb3qbcs3]{margin-bottom:3rem}.prose[data-astro-cid-fb3qbcs3] h2[data-astro-cid-fb3qbcs3]{font-size:2rem;margin-bottom:1rem}.prose[data-astro-cid-fb3qbcs3] p[data-astro-cid-fb3qbcs3]{font-size:1.125rem;line-height:1.8;margin-bottom:1.5rem;color:var(--ink)}\n"}],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/samja/Desktop/testpreppilot-v2/dist/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_credential_.DmfJNK8v.css"},{"type":"external","src":"/_astro/index.B6V-jMy0.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://testpreppilot.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/samja/Desktop/testpreppilot-v2/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/samja/Desktop/testpreppilot-v2/src/pages/[state]/[credential].astro",{"propagation":"none","containsHead":true}],["C:/Users/samja/Desktop/testpreppilot-v2/src/pages/[state]/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/samja/Desktop/testpreppilot-v2/src/pages/categories/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/samja/Desktop/testpreppilot-v2/src/pages/disclosure.astro",{"propagation":"none","containsHead":true}],["C:/Users/samja/Desktop/testpreppilot-v2/src/pages/editorial-policy.astro",{"propagation":"none","containsHead":true}],["C:/Users/samja/Desktop/testpreppilot-v2/src/pages/explore.astro",{"propagation":"none","containsHead":true}],["C:/Users/samja/Desktop/testpreppilot-v2/src/pages/how-it-works.astro",{"propagation":"none","containsHead":true}],["C:/Users/samja/Desktop/testpreppilot-v2/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/samja/Desktop/testpreppilot-v2/src/pages/methodology.astro",{"propagation":"none","containsHead":true}],["C:/Users/samja/Desktop/testpreppilot-v2/src/pages/paths/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/samja/Desktop/testpreppilot-v2/src/pages/privacy.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/[state]/[credential]@_@astro":"pages/_state_/_credential_.astro.mjs","\u0000@astro-page:src/pages/[state]/index@_@astro":"pages/_state_.astro.mjs","\u0000@astro-page:src/pages/categories/[id]@_@astro":"pages/categories/_id_.astro.mjs","\u0000@astro-page:src/pages/disclosure@_@astro":"pages/disclosure.astro.mjs","\u0000@astro-page:src/pages/editorial-policy@_@astro":"pages/editorial-policy.astro.mjs","\u0000@astro-page:src/pages/explore@_@astro":"pages/explore.astro.mjs","\u0000@astro-page:src/pages/how-it-works@_@astro":"pages/how-it-works.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/methodology@_@astro":"pages/methodology.astro.mjs","\u0000@astro-page:src/pages/paths/[slug]@_@astro":"pages/paths/_slug_.astro.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"pages/privacy.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astrojs-manifest":"manifest_-yu1d5j1.mjs","C:/Users/samja/Desktop/testpreppilot-v2/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.DxD8ucBX.js","C:/Users/samja/Desktop/testpreppilot-v2/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CmiFr7QX.js","astro:scripts/page.js":"_astro/page.DTPp-pk-.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/samja/Desktop/testpreppilot-v2/src/pages/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const e=document.getElementById(\"newsletter-form\"),n=document.getElementById(\"newsletter-success\");if(e&&n){const t=e.cloneNode(!0);e.parentNode.replaceChild(t,e),t.addEventListener(\"submit\",s=>{s.preventDefault(),t.style.display=\"none\",n.hidden=!1})}});"]],"assets":["/_astro/page.DTPp-pk-.js","/file:///C:/Users/samja/Desktop/testpreppilot-v2/dist/404.html","/file:///C:/Users/samja/Desktop/testpreppilot-v2/dist/disclosure/index.html","/file:///C:/Users/samja/Desktop/testpreppilot-v2/dist/editorial-policy/index.html","/file:///C:/Users/samja/Desktop/testpreppilot-v2/dist/explore/index.html","/file:///C:/Users/samja/Desktop/testpreppilot-v2/dist/how-it-works/index.html","/file:///C:/Users/samja/Desktop/testpreppilot-v2/dist/methodology/index.html","/file:///C:/Users/samja/Desktop/testpreppilot-v2/dist/privacy/index.html","/file:///C:/Users/samja/Desktop/testpreppilot-v2/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"latZRYCEK4Aaabl3BrAToPt+YeiifkFOkktrLry2lZQ="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
