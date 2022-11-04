import { Request, Response } from 'express'
import { soapCelebsService } from './service'


export async function queryCelebs(req: Request, res: Response) {
    try {
        const celebs = await soapCelebsService.queryCelebs(req.query)
        return res.send(celebs)
    } catch (err) {
        return console.log(err)
    }
}

export async function getRandomCeleb(req: Request, res: Response) {
    try {
        const randomCeleb = await soapCelebsService.getRandom()
        return res.send(randomCeleb)
    } catch (err) {
        return console.log(err)
    }
}

export async function _addCeleb(req: Request, res: Response) {
    try {

        await soapCelebsService.addSoapCeleb(req.body)
        return res.send('added celeb').status(200)
    } catch (err) {
        return console.log(err)
    }
}