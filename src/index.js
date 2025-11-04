import dotenv from 'dotenv'
import { app } from './app.js'
import mongoose from 'mongoose'

dotenv.config({ path: './.env' })

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("✅ MongoDB connected")
  } catch (err) {
    console.error("❌ MongoDB connection error:", err)
    process.exit(1)
  }
}

connectDB()
.then(() => {
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`) // Fixed template literal
    })
})
.catch((err) => {
    console.error('Database connection failed:', err)
    process.exit(1)
})

app.get('/', (req, res) => {
    res.send('Welcome to the API')
})
