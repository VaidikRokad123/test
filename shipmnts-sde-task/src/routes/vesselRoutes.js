const express = require('express');
const router = express.Router();
const { createVessel, getByIdVessel, getAllVessel, DeleteVessel } = require('../controllers/vesselController');

router.post('/', createVessel);
router.get('/', getAllVessel);
router.get('/:id', getByIdVessel);
router.delete('/:id', DeleteVessel);

module.exports = router;
