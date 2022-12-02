import { SoapCeleb } from './models/celeb.model'
import type { ISoapCeleb } from './models/celeb.model'

interface IQuery {
    name?: string,
    limit?: number,
    gender?: 'male' | 'female'
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

async function queryByGender(gender: 'male' | 'female', query: IQuery) {
    try {
        const { limit } = query
        const res = limit
            ? await SoapCeleb.find({ gender: gender }).limit(Number(limit))
            : await SoapCeleb.find({ gender: gender })
        return res

    } catch (err) {
        return console.log(err)
    }
}


async function getRandom(query: IQuery) {
    try {
        return query.gender
            ? await SoapCeleb.aggregate(
                [
                    { $match: { gender: query.gender } },
                    { $sample: { size: Number(query.limit) || 1 } }
                ])
            : await SoapCeleb.aggregate(
                [{ $sample: { size: Number(query.limit) || 1 } }])
    } catch (err) {
        return console.log(err)
    }
}

async function getCelebList(query: IQuery) {
    try {
        if (!query.gender) {
            const list = await SoapCeleb.find()
            return list.map(({ name }) => name)
        }
        const listByGender = await SoapCeleb.find({ gender: query.gender })
        return listByGender.map(({ name }) => name)
    } catch (err) {
        return err
    }
}

async function addSoapCeleb(celebBody: ISoapCeleb) {
    try {
        const newSoapCeleb = new SoapCeleb({
            name: celebBody.name,
            gender: celebBody.gender,
            scent: celebBody.scent,
            imgUrl: celebBody.imgUrl,
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
    queryByGender,
    getCelebList
}