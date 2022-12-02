import express, { query } from 'express'
import { auth } from './middleware/auth'
import { queryCelebs, getRandomCeleb, _addCeleb, getCelebList, queryByGender } from './controller'
const router = express.Router()

//base url 

router.get('/', (req, res) => {
    return res.json({
        "celebs": "https://soapcelebsapi.onrender.com/api/celeb",
        "randomCeleb": "https://soapcelebsapi.onrender.com/api/celeb/random",
        "celebsByGender": "https://soapcelebsapi.onrender.com/api/celeb/:gender",
        "celebsList": "https://soapcelebsapi.onrender.com/api/celeb/list"
    })
})

//celebs req
router.get('/celeb', queryCelebs)
router.get('/celeb/random', getRandomCeleb)
router.get('/celeb/:gender', queryByGender)
router.get('/celeb/list', getCelebList)

// adding celeb (only in development)
router.post('/add', auth.isDev, _addCeleb)

export default router