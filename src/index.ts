import express from 'express';
import router from './routes';
import cors from 'cors'

const app = express()
app.use(express.urlencoded({ extended: false }))

app.use(cors())
app.use('/', router)
app.listen(8080, () => {
    // tslint:disable-next-line: no-console
    console.log('app listen to 8080')
})