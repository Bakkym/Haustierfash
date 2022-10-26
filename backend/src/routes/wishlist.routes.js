import { Router } from "express";
import { getWishlistByUserId, addProductToWishlist, removeProductFromWishlist } from "../controllers/wishlist.controller.js"
import { verifyToken } from '../middlewares/authJwt.js'

const router = Router()

router.get('/:user_id', verifyToken, getWishlistByUserId)
router.put('/', verifyToken, addProductToWishlist)
router.delete('/', verifyToken, removeProductFromWishlist)

export default router