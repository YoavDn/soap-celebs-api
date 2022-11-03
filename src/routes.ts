import express from 'express'
import { getAllCelebs, _addCeleb } from './controller'
const router = express.Router()

router.get('/celebs', getAllCelebs)
router.post('/add', _addCeleb)

export default router