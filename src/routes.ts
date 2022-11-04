import express from 'express'
import { getAllCelebs, getRandomCeleb, _addCeleb } from './controller'
const router = express.Router()

router.get('/celebs', getAllCelebs)
router.get('/celebs/random', getRandomCeleb)
router.post('/add', _addCeleb)

export default router