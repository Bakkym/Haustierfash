import { Router } from 'express'
import { getShoppingCartByUserId, addProductToShoppingCart, removeProductFromShoppingCart } from '../controllers/shoppingCart.controller.js'
import { verifyToken } from '../middlewares/authJwt.js'
const router = Router()

router.get('/:user_id', verifyToken, getShoppingCartByUserId)
router.put('/', verifyToken, addProductToShoppingCart)
router.delete('/', verifyToken, removeProductFromShoppingCart)

export default router


