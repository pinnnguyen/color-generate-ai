import mongoose from 'mongoose'

export default async () => {
  const config = useRuntimeConfig()

  try {
    await mongoose.connect(config.MONGO_URL as string)
  }
  catch (err) {
    console.error('DB connection failed.', err)
  }
}
