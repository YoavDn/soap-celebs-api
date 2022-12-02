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
        const randomCeleb = await soapCelebsService.getRandom(req.query)
        return res.send(randomCeleb)
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

// export async function queryMaleCelebs(req: Request, res: Response) {
//     try {
//         const celebs = await soapCelebsService.queryMaleCelebs(req.query)

//         return res.send(celebs)
//     } catch (err) {
//         res.status(400)
//         res.json(err)
//     }
// }

// export async function queryFemaleCelebs(req: Request, res: Response) {
//     try {
//         const celebs = await soapCelebsService.queryFemaleCelebs(req.query)
//         return res.send(celebs)
//     } catch (err) {
//         res.status(400)
//         res.json(err)
//     }
// }

export async function queryByGender(req: Request, res: Response) {
    try {
        const { gender } = req.params
        if (gender !== 'male' && gender !== 'female') {
            return res.status(404).json({
                massage: 'There is nothing here..  check if there\'s a typo.  see all endpoints at https://soapcelebsapi.onrender.com/api/'
            })
        }
        const celebs = await soapCelebsService.queryByGender(gender as "male" | 'female', req.query)
        return res.send(celebs)

    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

export async function getCelebList(req: Request, res: Response) {
    try {
        const list = await soapCelebsService.getCelebList(req.query)
        return res.send(list)
    } catch (err) {
        res.status(400)
        res.json(err)
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