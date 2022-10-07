const express = require("express");
const router = express.Router();
const costumesController = require("../controllers/costumes");
const multer = require("multer");
const upload = multer()

router.get("/api/products/costumes", costumesController.getAllCostumes);
router.post("/api/products/costumes", upload.none(), costumesController.newCostume);

router.get("/api/products/costumes/:id", costumesController.getOneCostume);
router.put("/api/products/costumes/:id", costumesController.updateCostume);
router.delete("/api/products/costumes/:id", costumesController.deleteCostume);

module.exports = router;
