import './chunks/_astro_actions_BhmZyro3.mjs';
import * as mod from 'zod';
import { d as defineAction } from './chunks/server_D7RQxqCP.mjs';
import { p as prisma } from './chunks/index_D9xrZjJk.mjs';

const getAvailabilityById = defineAction({
  accept: "json",
  input: mod.string(),
  handler: async (placeId) => {
    await new Promise((resolve) => setTimeout(resolve, 2e3));
    const isAvailable = Math.random() > 0.5;
    const spotAvailable = Math.floor(Math.random() * 10) + 1;
    let message = "No hay espacios disponibles";
    if (isAvailable) {
      message = spotAvailable > 1 ? `Hay ${spotAvailable} espacios disponibles` : "Hay 1 espacio disponible";
    }
    return {
      id: placeId,
      isAvailable,
      spotAvailable,
      message
    };
  }
});

const getPlaces = defineAction({
  accept: "json",
  handler: async () => {
    try {
      const places = await prisma.place.findMany();
      return places;
    } catch (error) {
      console.log(error);
      throw "Error getting places";
    }
    return;
  }
});

const server = {
  getPlaces,
  getAvailabilityById
};

export { server };
