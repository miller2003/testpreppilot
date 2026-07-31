import { c as createComponent, a as renderTemplate, m as maybeRenderHead, r as renderComponent, d as addAttribute, b as createAstro, e as renderScript, f as renderSlot, g as renderHead, u as unescapeHTML } from './astro/server_Dnl69afc.mjs';
import 'piccolore';
/* empty css                                */
import 'clsx';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<button id="theme-toggle" class="theme-toggle" aria-label="Toggle dark mode" data-astro-cid-x3pjskd3> <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-x3pjskd3> <circle cx="12" cy="12" r="5" data-astro-cid-x3pjskd3></circle> <line x1="12" y1="1" x2="12" y2="3" data-astro-cid-x3pjskd3></line> <line x1="12" y1="21" x2="12" y2="23" data-astro-cid-x3pjskd3></line> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-astro-cid-x3pjskd3></line> <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-astro-cid-x3pjskd3></line> <line x1="1" y1="12" x2="3" y2="12" data-astro-cid-x3pjskd3></line> <line x1="21" y1="12" x2="23" y2="12" data-astro-cid-x3pjskd3></line> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-astro-cid-x3pjskd3></line> <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-astro-cid-x3pjskd3></line> </svg> <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-x3pjskd3> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" data-astro-cid-x3pjskd3></path> </svg> </button> <script>
  const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  })();
  
  if (theme === 'light') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  window.localStorage.setItem('theme', theme);

  const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("theme-transition");
    
    const isDark = element.getAttribute("data-theme") === "dark";
    if (isDark) {
      element.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      element.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
    
    window.setTimeout(() => {
      element.classList.remove("theme-transition");
    }, 300);
  }

  document.getElementById("theme-toggle")?.addEventListener("click", handleToggleClick);
<\/script> `])), maybeRenderHead());
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/components/ThemeToggle.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header"> <div class="header-container"> <a href="/" class="brand" aria-label="TestPrepPilot Home"> <span class="brand-mark">C</span> <span>TestPrep<br>Pilot</span> </a> <nav class="desktop-nav" aria-label="Main Navigation"> <a href="/explore">Explore</a> <a href="/how-it-works">How it works</a> <a href="/methodology">Methodology</a> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} <a href="/explore" class="button button-small">Explore</a> </nav> <div class="mobile-menu-wrapper"> <input type="checkbox" id="mobile-menu-toggle" class="mobile-menu-toggle-input" aria-label="Toggle mobile menu"> <label for="mobile-menu-toggle" class="mobile-menu-toggle"> <span></span> <span></span> <span></span> </label> <nav class="mobile-nav" aria-label="Mobile Navigation"> <a href="/explore">Explore</a> <a href="/how-it-works">How it works</a> <a href="/methodology">Methodology</a> <a href="/explore" class="button button-small">Explore</a> </nav> </div> </div> </header>`;
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/components/Header.astro", void 0);

const categories = [
  { id: "real-estate", name: "Real Estate", icon: "⌂", color: "coral", description: "Real estate sales, broker, and appraiser licenses", seoTitle: "Real Estate Licenses & Certifications" },
  { id: "accounting", name: "Accounting & Tax", icon: "⌁", color: "blue", description: "CPA, Enrolled Agent, and bookkeeping certifications", seoTitle: "Accounting Certifications & Tax Credentials" },
  { id: "trades", name: "Skilled Trades", icon: "⌘", color: "mint", description: "HVAC, electrical, plumbing, and general contractor licenses", seoTitle: "Skilled Trades Licenses & Certifications" },
  { id: "workplace-safety", name: "Workplace Safety", icon: "✦", color: "gold", description: "OSHA, HAZWOPER, and safety certifications", seoTitle: "Workplace Safety Certifications" },
  { id: "healthcare", name: "Healthcare", icon: "✚", color: "rose", description: "Nursing, medical assisting, and allied health credentials", seoTitle: "Healthcare Credentials & Certifications" },
  { id: "technology", name: "Technology", icon: "⎔", color: "indigo", description: "IT, cloud computing, and cybersecurity certifications", seoTitle: "IT Certifications & Credentials" },
  { id: "finance", name: "Finance & Securities", icon: "Ⓢ", color: "emerald", description: "Series 7, CFA, and financial advisor credentials", seoTitle: "Financial Credentials & Licenses" }
];

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <div class="footer-container"> <div class="footer-brand"> <a href="/" class="brand" aria-label="TestPrepPilot Home"> <span class="brand-mark">C</span> <span>TestPrep<br>Pilot</span> </a> <p class="tagline">Guiding your professional journey with verified credential paths.</p> </div> <div class="footer-links"> <div class="footer-column"> <h4>Explore</h4> <ul> ${categories.map((category) => renderTemplate`<li><a${addAttribute(`/categories/${category.id}`, "href")}>${category.name}</a></li>`)} </ul> </div> <div class="footer-column"> <h4>Trust</h4> <ul> <li><a href="/methodology">Methodology</a></li> <li><a href="/editorial-policy">Editorial Policy</a></li> <li><a href="/disclosure">Disclosure</a></li> <li><a href="/privacy">Privacy</a></li> </ul> </div> </div> </div> <div class="footer-bottom"> <p>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} TestPrepPilot. All rights reserved.</p> </div> </footer>`;
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://testpreppilot.com");
const $$SEOHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEOHead;
  const { title, description, canonical, ogImage, ogTitle } = Astro2.props;
  const siteUrl = Astro2.site || "https://testpreppilot.com";
  const currentUrl = new URL(Astro2.url.pathname, siteUrl).toString();
  const finalOgTitle = ogTitle || title;
  return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`}<meta name="theme-color" content="#f8f7f3">${canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")}>`}<meta property="og:title"${addAttribute(finalOgTitle, "content")}>${description && renderTemplate`<meta property="og:description"${addAttribute(description, "content")}>`}${ogImage && renderTemplate`<meta property="og:image"${addAttribute(new URL(ogImage, siteUrl).toString(), "content")}>`}<meta property="og:type" content="website"><meta property="og:url"${addAttribute(currentUrl, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(finalOgTitle, "content")}>${description && renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>`}<title>${title}</title><link rel="icon" type="image/svg+xml" href="/favicon.svg">`;
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/components/SEOHead.astro", void 0);

const $$Astro$1 = createAstro("https://testpreppilot.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/samja/Desktop/testpreppilot-v2/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/samja/Desktop/testpreppilot-v2/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://testpreppilot.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, canonical, ogImage, schema } = Astro2.props;
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TestPrepPilot",
    "url": "https://testpreppilot.com",
    "logo": "https://testpreppilot.com/logo.png"
  };
  const schemaData = schema || defaultSchema;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', '<script type="application/ld+json">', '<\/script><link rel="icon" type="image/svg+xml" href="/favicon.svg">', "", "</head> <body> ", " <main> ", " </main> ", " <script>\n      document.addEventListener('astro:page-load', () => {\n        const observer = new IntersectionObserver((entries) => {\n          entries.forEach(entry => {\n            if (entry.isIntersecting) {\n              entry.target.classList.add('is-visible');\n              observer.unobserve(entry.target);\n            }\n          });\n        });\n        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));\n      });\n    <\/script> </body> </html>"])), renderComponent($$result, "SEOHead", $$SEOHead, { "title": title, "description": description, "canonical": canonical, "ogImage": ogImage }), unescapeHTML(JSON.stringify(schemaData, null, 2)), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, categories as c };
