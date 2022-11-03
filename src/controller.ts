import { Request, Response, NextFunction } from 'express'
import { soapCelebsService } from './service'


export async function getAllCelebs(req: Request, res: Response) {
    try {
        const celebs = await soapCelebsService.getAll()
        return res.send(celebs)
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