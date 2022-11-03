import { Request, Response, NextFunction } from 'express'
import { soapCelebsService } from './service'


export async function getAllCelebs(req: Request, res: Response) {
    try {
        const celebs = await soapCelebsService.getAllCelebs()
    } catch (err) {
        return console.log(err)
    }
}