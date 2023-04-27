import { paletteSchema } from '~/server/schema'

export default defineEventHandler(async (event) => {
  const query = await getQuery(event)

  const palettes = await paletteSchema.find({
    id: {
      $in: query.paletteIds,
    },
  })

  return palettes
})
