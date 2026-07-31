import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, d as addAttribute, r as renderComponent, u as unescapeHTML } from './astro/server_Dnl69afc.mjs';
import 'piccolore';
import 'clsx';

const $$InlineDisclosure = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p class="inline-disclosure">
Some links on this page may earn us a commission. <a href="/disclosure">Learn more</a>.
</p>`;
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/components/InlineDisclosure.astro", void 0);

const $$Astro$3 = createAstro("https://testpreppilot.com");
const $$ProviderTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProviderTable;
  const { providers } = Astro2.props;
  const hasAffiliate = providers.some((p) => p.affiliateUrl);
  return renderTemplate`${maybeRenderHead()}<div class="provider-table-wrapper"> <table class="provider-table desktop-only"> <thead> <tr> <th>Provider</th> <th>Price</th> <th>Key Features</th> <th>Rating</th> <th>Action</th> </tr> </thead> <tbody> ${providers.map((provider) => renderTemplate`<tr> <td> ${provider.name} ${provider.isSponsored && renderTemplate`<span class="sponsored-badge">Sponsored</span>`} </td> <td>${provider.price}</td> <td> <ul> ${provider.features.map((f) => renderTemplate`<li>${f}</li>`)} </ul> </td> <td>${provider.rating ? `${provider.rating} stars` : "N/A"}</td> <td> <a${addAttribute(provider.affiliateUrl || provider.url, "href")} class="button button-small" target="_blank" rel="noopener noreferrer">
View Program
</a> </td> </tr>`)} </tbody> </table> <div class="provider-cards mobile-only"> ${providers.map((provider) => renderTemplate`<div class="provider-card"> <div class="provider-header"> <h4> ${provider.name} ${provider.isSponsored && renderTemplate`<span class="sponsored-badge">Sponsored</span>`} </h4> <span class="provider-rating">${provider.rating ? `${provider.rating} stars` : ""}</span> </div> <div class="provider-price">${provider.price}</div> <ul class="provider-features"> ${provider.features.map((f) => renderTemplate`<li>${f}</li>`)} </ul> <a${addAttribute(provider.affiliateUrl || provider.url, "href")} class="button button-small provider-cta" target="_blank" rel="noopener noreferrer">
View Program
</a> </div>`)} </div> ${hasAffiliate && renderTemplate`${renderComponent($$result, "InlineDisclosure", $$InlineDisclosure, {})}`} </div>`;
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/components/ProviderTable.astro", void 0);

const $$Astro$2 = createAstro("https://testpreppilot.com");
const $$AffiliateBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AffiliateBox;
  const { provider } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="affiliate-box"> <div class="affiliate-header"> <h3>${provider.name}</h3> <span class="affiliate-price">${provider.price}</span> </div> <ul class="affiliate-features"> ${provider.features.slice(0, 3).map((feature) => renderTemplate`<li>${feature}</li>`)} </ul> <a${addAttribute(provider.affiliateUrl || provider.url, "href")} class="button affiliate-cta" target="_blank" rel="noopener noreferrer">
Start with ${provider.name} </a> <p class="disclosure-line">
Sponsored link — see our <a href="/disclosure">disclosure</a> </p> </div>`;
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/components/AffiliateBox.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://testpreppilot.com");
const $$FAQAccordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FAQAccordion;
  const { items } = Astro2.props;
  const schemaData = items && items.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;
  return renderTemplate`${maybeRenderHead()}<div class="faq-accordion"> ${items && items.map((item) => renderTemplate`<details class="faq-item"> <summary>${item.question}</summary> <p>${item.answer}</p> </details>`)} ${schemaData && renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schemaData, null, 2)))} </div>`;
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/components/FAQAccordion.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://testpreppilot.com");
const $$SchemaMarkup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SchemaMarkup;
  const { type, data } = Astro2.props;
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema, null, 2)));
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/components/SchemaMarkup.astro", void 0);

export { $$SchemaMarkup as $, $$InlineDisclosure as a, $$AffiliateBox as b, $$ProviderTable as c, $$FAQAccordion as d };
