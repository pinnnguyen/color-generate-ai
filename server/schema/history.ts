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
  {
    timestamps: true,
  },
)

export const historySchema = mongoose.model('history_schema', schema, 'historys')
