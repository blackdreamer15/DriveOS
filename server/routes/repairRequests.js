// Import necessary modules
const express = require('express');
const router = express.Router();
const RepairRequest = require(''); // Assuming your Mongoose model is named RepairRequest

// PUT route to update the status of a repair request
router.put('/repair-requests/:id', async (req, res) => {
  try {
    const requestId = req.params.id;
    const { status } = req.body;

    // Find the request by ID and update its status
    const updatedRequest = await RepairRequest.findByIdAndUpdate(
      requestId,
      { status: status },
      { new: true } // Return the updated document
    );

    if (!updatedRequest) {
      return res.status(404).json({ message: 'Request not found' });
    }

    res.status(200).json(updatedRequest);
  } catch (error) {
    console.error('Error updating request:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
