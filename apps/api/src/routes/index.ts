import { Router } from 'express'
import AuthRoute from './auth.route'
import WebhooksRoute from './webhooks.route'
import MemoRoute from './memo.route'

const router = Router()
router.use('/auth', AuthRoute)
router.use('/webhook', WebhooksRoute)
router.use('/memo', MemoRoute)

export default router
