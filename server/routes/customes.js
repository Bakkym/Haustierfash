const express = require('express');
const router = express.Router();
const costumesController = require('../controllers/customes');


router.get('/api/costumes', costumesController.getAllCostumes);
router.post('/api/costumes', costumesController.newCostume);

router.get('/api/costumes/:id', costumesController.getOneCostume);
router.put('/api/costumes/:id', costumesController.updateCostume);
router.delete('/api/costumes/:id', costumesController.deleteCostume);


module.exports = router;