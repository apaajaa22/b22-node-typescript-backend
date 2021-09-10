import express from 'express';
import router from './routes';
import cors from 'cors'

const app = express()
app.use(express.urlencoded({ extended: false }))
const { PORT } = process.env

app.use(cors())
app.use('/', router)
app.get('/', (req, res) => {
  return res.json({
    success: true,
    message: 'Backend is running well'
  })
})
app.listen(PORT, () => {
    // tslint:disable-next-line: no-console
    console.log(`app listen to ${PORT}`)
})