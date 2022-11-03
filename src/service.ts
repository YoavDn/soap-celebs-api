import { SoapCeleb } from './models/celeb.model'
import type { ISoapCeleb } from './models/celeb.model'
async function getAll() {
    try {
        const res = await SoapCeleb.find()
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
    addSoapCeleb,
    getAll,
}