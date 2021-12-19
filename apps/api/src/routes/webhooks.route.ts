import { Router } from 'express'
import * as controller from '../controllers/webhooks.controller'
const router = Router()

router.get('/login/github', controller.loginWithGitHub)
// router.post('/login/twitter', controller.loginWithTwitter)
// router.get('/login/facebook', controller.loginWithFacebook)

export default router
