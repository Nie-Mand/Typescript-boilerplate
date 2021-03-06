import { Router } from 'express'
import * as controller from '../controllers/memo.controller'
const router = Router()

router.get('/count', controller.count)
router.put('/', controller.update)
router.get('/', controller.getMyMemos)


export default router
