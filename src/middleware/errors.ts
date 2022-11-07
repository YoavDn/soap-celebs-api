import { Request, Response, NextFunction } from 'express'
interface Error {
    code?: number
    status?: number
}

function notFound(req: Request, res: Response, next: NextFunction) {
    const err = new Error('There is nothing here.') as Error
    err.status = 404
    next(err)
}

export const errors = {
    notFound,
}