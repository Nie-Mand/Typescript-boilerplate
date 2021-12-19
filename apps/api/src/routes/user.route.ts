import { Router } from 'express'
import * as controller from '../controllers/user.controller'
const router = Router()

router.get('/', controller.getMe)

export default router
