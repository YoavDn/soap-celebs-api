import { Request, Response, NextFunction } from 'express'

function isDev(req: Request, res: Response, next: NextFunction) {
    if (process.env.NODE_ENV === 'development') next()
}

export const auth = {
    isDev,
}