import express from 'express';
import * as repairRequestController from '../Controller/repairRequestController';

const router = express.Router();

router.get('/', repairRequestController.getAllRequests);
router.post('/', repairRequestController.createRequest);
router.put('/:id/accept', repairRequestController.acceptRequest);
router.put('/:id/decline', repairRequestController.declineRequest);

export default router;