import express from 'express'
import { getAllCelebs } from './controller'
const router = express.Router()

router.get('selebs', getAllCelebs)

export default router