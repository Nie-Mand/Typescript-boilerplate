import { Router } from 'express'
import * as controller from '../controllers/auth.controller'
const router = Router()

router.post('/signup', controller.signup)
router.post('/login', controller.login)
router.get('/github', controller.loginWithGitHub)
// router.get('/login/facebook', controller.loginWithFacebook)
// router.post('/login/twitter', controller.loginWithTwitter)

export default router
