import { paletteSchema } from '~/server/schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if (!body.paletteId) {
    return createError({
      statusCode: 400,
      statusMessage: 'Missing paletteId',
    })
  }

  let inc = 1
  if (body.action === 'unsave')
    inc = -1

  const palettes = await paletteSchema.findOneAndUpdate({ id: body.paletteId }, {
    $inc: {
      likes: inc,
    },
  })

  return palettes
})
