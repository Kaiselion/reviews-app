import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, b as renderComponent, r as renderTemplate } from '../chunks/astro/server_BewnLdiT.mjs';
import 'kleur/colors';
import { a as actions } from '../chunks/_astro_actions_BhmZyro3.mjs';
import { $ as $$Star, a as $$MainLayout } from '../chunks/Star_3w0gZ2FJ.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_C09AiBIC.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Astro$1 = createAstro();
const $$PlaceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PlaceCard;
  const { place } = Astro2.props;
  const imageUrl = `/assets/images/${place.image}`;
  return renderTemplate`<!-- component --><!-- component --><!-- This is an example component -->${maybeRenderHead()}<div class="max-w-2xl mx-auto"> <div class="shadow-md rounded-lg max-w-sm bg-gray-800 border-gray-700"> <a${addAttribute(`/place/${place.id}`, "href")}> ${renderComponent($$result, "Image", $$Image, { "class": "pb-5 rounded-lg overflow-hidden", "src": imageUrl, "alt": place.title, "width": "500", "height": "500" })} </a> <div class="px-5 pb-5"> <h3 class="font-semibold text-xl tracking-tight text-white"> ${place.title} </h3> <div class="flex items-center mt-2.5 mb-5"> <div class="flex flex-1"> ${Array.from({ length: Number(place.avg_rating) }).map((_) => renderTemplate`${renderComponent($$result, "Star", $$Star, {})}`)} </div> <span class="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">${place.avg_rating}</span> </div> </div> </div> </div>`;
}, "/home/kaiselion/Dev/learning/astro/08-reviews-app/src/components/PlaceCard.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { data: places = [], error } = await Astro2.callAction(
    actions.getPlaces,
    {}
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-extrabold">Lugares</h1> <div class="grid grid-cols-3 gap-4"> ${places.map((place) => renderTemplate`${renderComponent($$result2, "PlaceCard", $$PlaceCard, { "place": place })}`)} <!-- <PlaceCard /> --> </div> ` })}`;
}, "/home/kaiselion/Dev/learning/astro/08-reviews-app/src/pages/index.astro", void 0);

const $$file = "/home/kaiselion/Dev/learning/astro/08-reviews-app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
