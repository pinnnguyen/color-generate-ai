import { paletteSchema } from '~/server/schema'

export default defineEventHandler(async (event) => {
  const slug = event.context.params?.slug
  let sort = {}

  if (slug === 'top') {
    sort = {
      likes: -1,
    }
  }
  else {
    sort = {
      created_at: -1,
    }
  }

  const palettes = await paletteSchema.find({}).sort(sort)
  return palettes
})
