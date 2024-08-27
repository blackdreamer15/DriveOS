const RepairRequest = require('../Model/RepairRequest');
const { Types } = require('mongoose');

const getAllRequests = async (req, res) => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    const skip = req.query.skip ? parseInt(req.query.skip) : 0;
    const requests = await RepairRequest.find().limit(limit).skip(skip);
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching repair requests',
      error: error instanceof Error ? error.message : error,
    });
  }
};

const createRequest = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: 'Request body is empty' });
    }
    const newRequest = new RepairRequest(req.body);
    const savedRequest = await newRequest.save();
    res.status(201).json(savedRequest);
  } catch (error) {
    res.status(400).json({
      message: 'Error creating repair request',
      error: error instanceof Error ? error.message : error,
    });
  }
};

const updateRequestStatus = async (req, res, status) => {
  try {
    if (!Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid request id' });
    }
    const request = await RepairRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    if (request.status === status) {
      return res.status(400).json({ message: `Request is already ${status}` });
    }
    request.status = status;
    const savedRequest = await request.save();
    res.status(200).json(savedRequest);
  } catch (error) {
    res.status(400).json({
      message: `Error ${status} repair request`,
      error: error instanceof Error ? error.message : error,
    });
  }
};

const acceptRequest = async (req, res) => {
  await updateRequestStatus(req, res, 'accepted');
};

const declineRequest = async (req, res) => {
  await updateRequestStatus(req, res, 'declined');
};

module.exports = {
  getAllRequests,
  createRequest,
  acceptRequest,
  declineRequest,
};