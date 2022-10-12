import { Router } from "express";
import { authJwt } from "../middlewares";
const router = Router();
const productsController = require("../controllers/products.controller");

router.get("/", productsController.getAllProducts);
router.post("/", [authJwt.verifyToken, authJwt.isModerator], productsController.newProduct);

router.get("/:productId", productsController.getOneProduct);
router.put("/:productId", [authJwt.verifyToken, authJwt.isAdmin], productsController.updateProduct);
router.delete("/:productId", [authJwt.verifyToken, authJwt.isAdmin], productsController.deleteProduct);

module.exports = router;
