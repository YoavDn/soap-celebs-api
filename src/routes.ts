import express from 'express'
import { auth } from './middleware/auth'
import { queryCelebs, getRandomCeleb, _addCeleb, queryFemaleCelebs, queryMaleCelebs, getCelebList } from './controller'
const router = express.Router()

router.get('/celebs', queryCelebs)
router.get('/celebs/random', getRandomCeleb)
router.get('/celebs/male', queryMaleCelebs)
router.get('/celebs/female', queryFemaleCelebs)
router.get('/celebs/list', getCelebList)
router.post('/add', auth.isDev, _addCeleb)

export default router