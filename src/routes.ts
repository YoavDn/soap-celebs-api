import express from 'express'
import { auth } from './middleware/auth'
import { queryCelebs, getRandomCeleb, _addCeleb, queryFemaleCelebs, queryMaleCelebs, getCelebList } from './controller'
const router = express.Router()

//base url 

router.get('/', (req, res) => {
    return res.json({
        "celebs": 'https://soapcelebsapi.com/api/celebs',
        "randomCeleb": 'https://soapcelebsapi.com/api/celebs/random',
        "celebsList": 'https://soapcelebsapi.com/api/celebs/list'
    })
})

//celebs req
router.get('/celeb', queryCelebs)
router.get('/celeb/random', getRandomCeleb)
router.get('/celeb/male', queryMaleCelebs)
router.get('/celeb/female', queryFemaleCelebs)
router.get('/celeb/list', getCelebList)

// adding celeb (only in development)
router.post('/add', auth.isDev, _addCeleb)

export default router