import { Request, Response, NextFunction } from 'express'

function isDev(req: Request, res: Response, next: NextFunction) {
    if (process.env.NODE_ENV !== 'development') {
        res.status(401)
        return res.send('Not authorized')
    }
    next()
}

export const auth = {
    isDev,
}