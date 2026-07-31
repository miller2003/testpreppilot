import { b as createAstro, c as createComponent, a as renderTemplate, u as unescapeHTML, d as addAttribute, m as maybeRenderHead } from './astro/server_Dnl69afc.mjs';
import 'piccolore';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://testpreppilot.com");
const $$BreadcrumbNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BreadcrumbNav;
  const { items } = Astro2.props;
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": new URL(item.href, Astro2.site || "https://testpreppilot.com").toString()
    }))
  };
  return renderTemplate(_a || (_a = __template(["", '<nav aria-label="Breadcrumb" class="breadcrumb-nav"> <ol> ', ' </ol> <script type="application/ld+json">', "<\/script>\n</nav</nav>"])), maybeRenderHead(), items.map((item, index) => {
    const isLast = index === items.length - 1;
    return renderTemplate`<li> ${isLast ? renderTemplate`<span aria-current="page">${item.label}</span>` : renderTemplate`<a${addAttribute(item.href, "href")}>${item.label}</a>`} ${!isLast && renderTemplate`<span class="separator" aria-hidden="true">/</span>`} </li>`;
  }), unescapeHTML(JSON.stringify(schemaData, null, 2)));
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/components/BreadcrumbNav.astro", void 0);

export { $$BreadcrumbNav as $ };
