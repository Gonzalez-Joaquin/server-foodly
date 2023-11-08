import { Router } from "express"

import controller from "../controllers/food.controller"

const food = Router()

food.route('/')
    .get(controller.getEntries)
    .post(controller.addEntry)

food.route('/:id')
    .get(controller.getEntry)
    .put(controller.updateEntry)
    .delete(controller.deleteEntry)

export default food