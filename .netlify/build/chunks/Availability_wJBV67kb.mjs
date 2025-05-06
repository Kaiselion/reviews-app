import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate } from './astro/server_BewnLdiT.mjs';
import 'kleur/colors';
import 'clsx';
import { a as actions } from './_astro_actions_BhmZyro3.mjs';

const $$Astro = createAstro();
const $$Availability = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Availability;
  const { placeId } = Astro2.props;
  const data = await Astro2.callAction(
    actions.getAvailabilityById.orThrow,
    placeId
  );
  const { isAvailable, message } = data;
  return renderTemplate`${isAvailable ? renderTemplate`${maybeRenderHead()}<p class="bg-blue-300 mt-5 text-center rounded-xl p-2">${message}</p>` : renderTemplate`<p class="bg-red-300 mt-5 text-center rounded-xl p-2">${message}</p>`}`;
}, "/home/kaiselion/Dev/learning/astro/08-reviews-app/src/components/Availability.astro", void 0);

const $$file = "/home/kaiselion/Dev/learning/astro/08-reviews-app/src/components/Availability.astro";
const $$url = undefined;

export { $$Availability as default, $$file as file, $$url as url };
