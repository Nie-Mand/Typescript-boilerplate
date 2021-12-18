import { Router } from 'express'
import * as controller from '../controllers/auth.controller'
const router = Router()

router.post('/login', controller.login)
router.get('/login/github', controller.loginWithGitHub)
router.get('/login/facebook', controller.loginWithFacebook)
router.post('/login/twitter', controller.loginWithTwitter)

export default router
