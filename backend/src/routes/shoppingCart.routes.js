import { Router } from 'express'
import { getShoppingCartByUserId, addProductToShoppingCart, removeProductFromShoppingCart } from '../controllers/shoppingCart.controller.js'

const router = Router()

router.get('/:user_id', getShoppingCartByUserId)
router.put('/', addProductToShoppingCart)
router.delete('/', removeProductFromShoppingCart)

export default router


