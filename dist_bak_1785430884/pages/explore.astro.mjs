import { c as createComponent, a as renderTemplate, m as maybeRenderHead, b as createAstro, r as renderComponent, d as addAttribute } from '../chunks/astro/server_Dnl69afc.mjs';
import 'piccolore';
import { $ as $$BaseLayout, c as categories } from '../chunks/BaseLayout_THy6veoV.mjs';
import { c as credentials } from '../chunks/credentials_Cbzyk5E5.mjs';
import { $ as $$BreadcrumbNav } from '../chunks/BreadcrumbNav_kKVC3lws.mjs';
import 'clsx';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$SearchUI = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div id="search" class="search-ui-container" data-astro-cid-u2gwlaad></div> <script>
  window.addEventListener('DOMContentLoaded', (event) => {
    // Only load Pagefind if we're not in the dev server (or if it's been built)
    if (document.getElementById('search')) {
      // Create a style element for pagefind CSS to avoid 404 in dev
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/pagefind/pagefind-ui.css';
      link.onerror = () => {
        // Fallback for dev environment or before pagefind is run
        const devMsg = document.createElement('p');
        devMsg.className = 'search-dev-fallback';
        devMsg.textContent = 'Search is disabled in dev mode. Run \`npm run build\` to test Pagefind.';
        document.getElementById('search').appendChild(devMsg);
      };
      document.head.appendChild(link);

      // Load Pagefind JS
      const script = document.createElement('script');
      script.src = '/pagefind/pagefind-ui.js';
      script.onload = () => {
        // @ts-ignore
        new PagefindUI({ 
          element: "#search", 
          showImages: false,
          showEmptyFilters: false,
          resetStyles: false
        });
      };
      document.body.appendChild(script);
    }
  });
<\/script> `], ["", `<div id="search" class="search-ui-container" data-astro-cid-u2gwlaad></div> <script>
  window.addEventListener('DOMContentLoaded', (event) => {
    // Only load Pagefind if we're not in the dev server (or if it's been built)
    if (document.getElementById('search')) {
      // Create a style element for pagefind CSS to avoid 404 in dev
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/pagefind/pagefind-ui.css';
      link.onerror = () => {
        // Fallback for dev environment or before pagefind is run
        const devMsg = document.createElement('p');
        devMsg.className = 'search-dev-fallback';
        devMsg.textContent = 'Search is disabled in dev mode. Run \\\`npm run build\\\` to test Pagefind.';
        document.getElementById('search').appendChild(devMsg);
      };
      document.head.appendChild(link);

      // Load Pagefind JS
      const script = document.createElement('script');
      script.src = '/pagefind/pagefind-ui.js';
      script.onload = () => {
        // @ts-ignore
        new PagefindUI({ 
          element: "#search", 
          showImages: false,
          showEmptyFilters: false,
          resetStyles: false
        });
      };
      document.body.appendChild(script);
    }
  });
<\/script> `])), maybeRenderHead());
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/components/SearchUI.astro", void 0);

const $$Astro = createAstro("https://testpreppilot.com");
const $$Explore = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Explore;
  const categoryParam = Astro2.url.searchParams.get("category");
  const filteredCredentials = categoryParam ? credentials.filter((c) => c.category === categoryParam) : credentials;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Explore", href: "/explore" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Explore Credentials Directory \u2014 TestPrepPilot", "description": "Browse our comprehensive directory of professional credentials, certifications, and licenses.", "data-astro-cid-jsy7jxlt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container | animate-on-scroll" data-astro-cid-jsy7jxlt> ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": breadcrumbItems, "data-astro-cid-jsy7jxlt": true })} <header class="page-hero" data-astro-cid-jsy7jxlt> <p class="eyebrow" data-astro-cid-jsy7jxlt>CREDENTIAL DIRECTORY</p> <h1 data-astro-cid-jsy7jxlt>Find the path that <em data-astro-cid-jsy7jxlt>fits your future.</em></h1> <p class="lede" data-astro-cid-jsy7jxlt>Browse our curated database of verified professional certifications and state licenses.</p> </header> <div class="directory-layout" data-astro-cid-jsy7jxlt> <aside class="filter-sidebar" data-astro-cid-jsy7jxlt> <nav class="filter-nav" data-astro-cid-jsy7jxlt> <a href="/explore"${addAttribute(!categoryParam ? "active" : "", "class")} data-astro-cid-jsy7jxlt>All paths</a> ${categories.map((cat) => renderTemplate`<a${addAttribute(`/explore?category=${cat.id}`, "href")}${addAttribute(categoryParam === cat.id ? "active" : "", "class")} data-astro-cid-jsy7jxlt> ${cat.name} </a>`)} </nav> </aside> <main class="directory-main" data-astro-cid-jsy7jxlt> <div class="search-bar" data-astro-cid-jsy7jxlt> ${renderComponent($$result2, "SearchUI", $$SearchUI, { "data-astro-cid-jsy7jxlt": true })} </div> <ul class="directory-list" id="directory-list" data-astro-cid-jsy7jxlt> ${filteredCredentials.length > 0 ? filteredCredentials.map((cred) => renderTemplate`<li class="directory-item"${addAttribute(cred.name.toLowerCase(), "data-name")}${addAttribute(cred.category.toLowerCase(), "data-category")}${addAttribute(cred.tagline?.toLowerCase() || "", "data-tagline")} data-astro-cid-jsy7jxlt> <a${addAttribute(`/paths/${cred.slug}`, "href")} class="item-link" data-astro-cid-jsy7jxlt> <div class="item-dot" data-astro-cid-jsy7jxlt></div> <div class="item-content" data-astro-cid-jsy7jxlt> <div class="item-meta" data-astro-cid-jsy7jxlt> <span class="item-category" data-astro-cid-jsy7jxlt>${cred.category}</span> <span class="item-type" data-astro-cid-jsy7jxlt>${cred.type}</span> </div> <h2 class="item-title" data-astro-cid-jsy7jxlt>${cred.name}</h2> <p class="item-tagline" data-astro-cid-jsy7jxlt>${cred.tagline}</p> <div class="item-details" data-astro-cid-jsy7jxlt> ${cred.time && renderTemplate`<span data-astro-cid-jsy7jxlt><i class="icon-clock" data-astro-cid-jsy7jxlt></i> ${cred.time}</span>`} ${cred.cost && renderTemplate`<span data-astro-cid-jsy7jxlt><i class="icon-wallet" data-astro-cid-jsy7jxlt></i> ${cred.cost}</span>`} </div> </div> <div class="item-arrow" data-astro-cid-jsy7jxlt>&rarr;</div> </a> </li>`) : renderTemplate`<li class="empty-state" data-astro-cid-jsy7jxlt> <p data-astro-cid-jsy7jxlt>No credentials found for this category.</p> <a href="/explore" class="btn btn-outline" data-astro-cid-jsy7jxlt>Clear filters</a> </li>`} </ul> </main> </div> </div> ` })} `;
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/pages/explore.astro", void 0);

const $$file = "C:/Users/samja/Desktop/testpreppilot-v2/src/pages/explore.astro";
const $$url = "/explore";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Explore,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
