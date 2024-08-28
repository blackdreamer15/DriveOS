const express = require('express');
const repairRequestController = require('../Controller/repairRequestController');

const router = express.Router();

router.get('/', repairRequestController.getAllRequests);
router.post('/', repairRequestController.createRequest);
router.put('/:id/accept', repairRequestController.acceptRequest);
router.put('/:id/decline', repairRequestController.declineRequest);

module.exports = router;