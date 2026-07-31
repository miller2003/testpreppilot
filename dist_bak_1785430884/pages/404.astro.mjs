import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dnl69afc.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_THy6veoV.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Page Not Found \u2014 TestPrepPilot", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container | animate-on-scroll" data-astro-cid-zetdm5md> <header class="page-hero" data-astro-cid-zetdm5md> <p class="eyebrow" data-astro-cid-zetdm5md>404 · WRONG TURN</p> <h1 data-astro-cid-zetdm5md>That path isn't <em data-astro-cid-zetdm5md>on the map.</em></h1> <p class="lede" data-astro-cid-zetdm5md>The page you're looking for might have been moved, deleted, or never existed in the first place.</p> <div class="cta-wrapper" data-astro-cid-zetdm5md> <a href="/explore" class="btn btn-primary" data-astro-cid-zetdm5md>Explore all credentials &rarr;</a> </div> </header> </div> ` })} `;
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/pages/404.astro", void 0);

const $$file = "C:/Users/samja/Desktop/testpreppilot-v2/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
