import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { Request, Response, NextFunction } from 'express'
import config from './config'

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(config.dbUrl)
    .then(() => console.log('connected to mongo'))
    .catch((err) => console.log('failed to connect'))

app.get('/', (req: Request, res: Response) => {
    res.send(`<h1>shit fuck shit shit</h1>`)
})

import routes from './routes'
app.use('/api/', routes)

app.listen(port, () => {
    console.log('app listening on port ' + port)
})