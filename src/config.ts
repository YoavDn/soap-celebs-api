import dotenv from 'dotenv'
dotenv.config()

const localUrl = 'mongodb://localhost:27017/soap_celebs'
const dbUrl: string = (process.env.NODE_ENV as string) === 'production'
    ? (process.env.DATABASE as string)
    : localUrl

const port = Number(process.env.PORT)

interface IConfig {
    dbUrl: string
    port: number
}

const config: IConfig = {
    dbUrl,
    port,
}

export default config