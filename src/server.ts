import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'
import { config } from 'dotenv'
config()

mongoose.connect(
  process.env.DB_URL, 
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('DB CONNECTED')
)

const app = express()
const PORT = 3333

app.use(express.json())
app.use('/characters', routes)

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`))