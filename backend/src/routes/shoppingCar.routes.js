import { Router } from 'express'
import { getShoppingCarByUserId, addProductToShoppingCar, removeProductFromShoppingCar } from '../controllers/shoppingCar.controller.js'

const router = Router()

router.get('/:user_id', getShoppingCarByUserId)
router.put('/', addProductToShoppingCar)
router.delete('/', removeProductFromShoppingCar)

export default router


