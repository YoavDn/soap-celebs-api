import express from 'express'
import { queryCelebs, getRandomCeleb, _addCeleb, queryFemaleCelebs, queryMaleCelebs } from './controller'
const router = express.Router()

router.get('/celebs', queryCelebs)
router.get('/celebs/random', getRandomCeleb)
router.get('/celebs/male', queryMaleCelebs)
router.get('/celebs/female', queryFemaleCelebs)
router.post('/add', _addCeleb)

export default router