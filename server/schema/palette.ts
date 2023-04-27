import mongoose from 'mongoose'

const ObjectId = mongoose.Types.ObjectId
const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default() {
        return new ObjectId().toString()
      },
    },
    id: {
      type: Number,
    },
    accentClear: String,
    accentDull: String,
    bg: String,
    bgFocus: String,
    clear: String,
    dull: String,
    duller: String,
    likes: Number,
    primaryClear: String,
    primaryDull: String,
    primaryVisible: String,
    prompt: String,
  },
)

export const paletteSchema = mongoose.model('palette_schema', schema, 'palettes')
