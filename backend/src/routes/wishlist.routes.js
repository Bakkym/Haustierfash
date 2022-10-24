import { Router } from "express";
import router from "./products.routes";
import { getWishlistByUserId, addProductToWishlist, removeProductFromWishlist } from "../controllers/wishlist.controller"

router = Router()

router.get('/wishlist/:user_id',getWishlistByUserId)
router.post('/wishlist/:product_id', addProductToWishlist)
router.delete('/wishlist/:product_id', removeProductFromWishlist)

export default router