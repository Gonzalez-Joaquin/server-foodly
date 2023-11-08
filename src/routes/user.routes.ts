import { Router } from 'express'

import controller from '../controllers/user.controller'

const userRouter = Router()

userRouter.route('/')
    .get(controller.getEntries)
    .post(controller.addEntry)

userRouter.route('/:id')
    .get(controller.getEntry)
    .delete(controller.deleteEntry)
    .put(controller.updateEntry)

userRouter.route('/login')
    .post(controller.loginWithEmailAndPassword)

export default userRouter