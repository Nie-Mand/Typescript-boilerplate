import { Router } from 'express'
import AuthRoute from './auth.route'
import WebhooksRoute from './webhooks.route'
import MemoRoute from './memo.route'
import UserRoute from './user.route'

const router = Router()
router.use('/auth', AuthRoute)
router.use('/webhook', WebhooksRoute)
router.use('/memo', MemoRoute)
router.use('/user', UserRoute)

export default router
