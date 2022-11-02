import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import { Request, Response, NextFunction } from 'express'

const app = express()
const port = process.env.PORT || 8080



app.get('/', (req: Request, res: Response) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log('app listening on port ' + port)
})