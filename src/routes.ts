import express from 'express'
import { queryCelebs, getRandomCeleb, _addCeleb } from './controller'
const router = express.Router()

router.get('/celebs', queryCelebs)
router.get('/celebs/random', getRandomCeleb)
router.post('/add', _addCeleb)

export default router