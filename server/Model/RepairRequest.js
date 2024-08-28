// const mongoose = require('mongoose');

// const repairRequestSchema = new mongoose.Schema({
//   carDetails: {
//     make: String,
//     model: String,
//     year: Number,
//     licensePlate: String,
//   },
//   location: {
//     latitude: Number,
//     longitude: Number,
//     address: String,
//   },
//   userId: String,
//   serviceType: String,
//   additionalInfo: String,
//   status: {
//     type: String,
//     enum: ['pending', 'accepted', 'inProgress', 'completed', 'declined', 'cancelled'],
//     default: 'pending',
//   },
//   providerName: String,
//   serviceCharge: String,
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('RepairRequest', repairRequestSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const RepairRequestSchema = new Schema({
  userId: { type: String, required: true },
  serviceType: { 
    type: String, 
    required: true,
    enum: [
      'flatTyre', 
      'batteryJumpStart', 
      'fuelDelivery', 
      'towingService', 
      'mechanicalBreakdownSupport', 
      'mobileCarWash'
    ]
  },
  carDetails: {
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    licensePlate: { type: String, required: true }
  },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    address: { type: String, required: true }
  },
  additionalInfo: { type: String },  // Optional field
  providerName: { type: String },    // New field
  serviceCharge: { type: String },   // New field
  status: { 
    type: String, 
    required: true, 
    enum: ['pending', 'inProgress', 'completed'],
    default: 'pending'
  }
}, { timestamps: true });  // Adds createdAt and updatedAt fields automatically

module.exports = mongoose.model('RepairRequest', RepairRequestSchema);
