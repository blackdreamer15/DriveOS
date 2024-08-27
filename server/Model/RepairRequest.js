const mongoose = require('mongoose');
const { Schema } = mongoose;

const RepairRequestSchema = new Schema({
  userId: { type: String, required: true },
  serviceType: { type: String, required: true },
  description: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'accepted', 'declined', 'completed'],
    default: 'pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('RepairRequest', RepairRequestSchema);