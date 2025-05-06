import { c as createComponent, a as createAstro, d as addAttribute, e as renderHead, f as renderSlot, r as renderTemplate, m as maybeRenderHead } from './astro/server_BewnLdiT.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body class="bg-gray-200"> <main class="@container m-auto max-w-5xl px-5 mt-20"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/home/kaiselion/Dev/learning/astro/08-reviews-app/src/layouts/MainLayout.astro", void 0);

const $$Star = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`;
}, "/home/kaiselion/Dev/learning/astro/08-reviews-app/src/components/Star.astro", void 0);

export { $$Star as $, $$MainLayout as a };
