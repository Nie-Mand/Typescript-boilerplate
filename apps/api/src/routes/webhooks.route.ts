import { Router } from 'express'
import * as controller from '../controllers/webhooks.controller'
const router = Router()

router.get('/login/github', controller.loginWithGitHub)

export default router
