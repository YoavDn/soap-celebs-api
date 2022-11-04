import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import config from './config'
import routes from './routes'

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(config.dbUrl)
    .then(() => console.log('connected to mongo'))
    .catch((err) => console.log('failed to connect', err))

app.use('/api/', routes)

app.listen(port, () => {
    console.log('app listening on port ' + port)
})