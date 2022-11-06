import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import config from './config'
import routes from './routes'
import { errors } from './middlewares/errors'

const app = express()
const port = process.env.PORT || 8080

app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(config.dbUrl)
    .then(() => console.log('connected to mongo'))
    .catch((err) => console.log('failed to connect', err))

app.use('/api/', routes)

app.use(errors.notFound)

app.listen(port, () => {
    console.log('app listening on port ' + port)
})