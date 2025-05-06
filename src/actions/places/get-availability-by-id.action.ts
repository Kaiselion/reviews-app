import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const getAvailabilityById = defineAction({
	accept: 'json',
	input: z.string(),
	handler: async (placeId) => {
		await new Promise((resolve) => setTimeout(resolve, 2000))

		const isAvailable = Math.random() > 0.5
		const spotAvailable = Math.floor(Math.random() * 10) + 1

		let message = 'No hay espacios disponibles'
		if (isAvailable) {
			message =
				spotAvailable > 1
					? `Hay ${spotAvailable} espacios disponibles`
					: 'Hay 1 espacio disponible'
		}

		return {
			id: placeId,
			isAvailable: isAvailable,
			spotAvailable: spotAvailable,
			message: message
		}
	}
})
