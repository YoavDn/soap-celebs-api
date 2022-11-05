import { SoapCeleb } from './models/celeb.model'
import type { ISoapCeleb } from './models/celeb.model'

interface IQuery {
    name?: string,
    limit?: number
}

async function queryCelebs(query: IQuery) {
    try {

        const { name, limit } = query
        if (name) {
            return limit
                ? await SoapCeleb.find({ name: { $regex: name?.replace('-', ' '), $options: 'i' } }).limit(Number(limit))
                : await SoapCeleb.find({ name: { $regex: name?.replace('-', ' '), $options: 'i' } })
        } else {
            return limit
                ? await SoapCeleb.find().limit(Number(limit))
                : await SoapCeleb.find()
        }

    } catch (err) {
        return console.log(err)
    }
}

async function queryMaleCelebs(query: IQuery) {
    try {
        const { limit } = query
        const res = limit
            ? await SoapCeleb.find({ gender: 'male' }).limit(Number(limit))
            : await SoapCeleb.find({ gender: 'male' })
        return res

    } catch (err) {
        return console.log(err)
    }
}

async function queryFemaleCelebs(query: IQuery) {
    try {
        const { limit } = query
        const res = limit
            ? await SoapCeleb.find({ gender: 'female' }).limit(Number(limit))
            : await SoapCeleb.find({ gender: 'female' })
        return res

    } catch (err) {
        return console.log(err)
    }
}


async function getRandom() {
    try {
        const res = await SoapCeleb.aggregate([{ $sample: { size: 1 } }])
        console.log(res)
        return res
    } catch (err) {
        return console.log(err)
    }
}

async function addSoapCeleb(celebBody: ISoapCeleb) {
    try {

        console.log(celebBody.born)
        const newSoapCeleb = new SoapCeleb({
            name: celebBody.name,
            gender: celebBody.gender,
            scent: celebBody.scent,
            imgUrl: celebBody.imgUrl,
            born: celebBody.born
        })

        return newSoapCeleb.save()
            .then(() => newSoapCeleb)
            .catch((err) => err)

    } catch (err) {
        return console.log(err)
    }
}

export const soapCelebsService = {
    getRandom,
    addSoapCeleb,
    queryCelebs,
    queryMaleCelebs,
    queryFemaleCelebs
}