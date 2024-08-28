const mongoose = require('mongoose');

const repairRequestSchema = new mongoose.Schema({
  carDetails: {
    make: String,
    model: String,
    year: Number,
    licensePlate: String,
  },
  location: {
    latitude: Number,
    longitude: Number,
    address: String,
  },
  userId: String,
  serviceType: String,
  additionalInfo: String,
  status: {
    type: String,
    enum: ['pending', 'accepted', 'inProgress', 'completed', 'declined', 'cancelled'],
    default: 'pending',
  },
  providerName: String,
  serviceCharge: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('RepairRequest', repairRequestSchema);
