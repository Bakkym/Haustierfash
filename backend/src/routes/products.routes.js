import { Router } from "express";
import { verifyToken, isModerator, isAdmin } from "../middlewares/authJwt.js";
import { checkCategoryExistByGet, checkCategoryExistForProduct } from '../middlewares/category.js'
const router = Router();
import { getAllProducts, newProduct,newProducts, getOneProduct, updateProduct, deleteProduct, } from "../controllers/products.controller.js";

router.get("/", checkCategoryExistByGet, getAllProducts);
router.post("/", [verifyToken, isModerator, checkCategoryExistForProduct], newProduct);
router.post("/array", [verifyToken, isModerator], newProducts);
router.get("/:productId", getOneProduct);
router.put("/:productId", [verifyToken, isAdmin], updateProduct);
router.delete("/:productId", [verifyToken, isAdmin], deleteProduct);

export default router
