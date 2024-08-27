import mongoose, { Schema, Document } from 'mongoose';

export interface IRepairRequest extends Document {
  userId: string;
  serviceType: string;
  description: string;
  status: 'pending' | 'accepted' | 'declined' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

const RepairRequestSchema: Schema = new Schema({
  userId: { type: String, required: true },
  serviceType: { type: String, required: true },
  description: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'accepted', 'declined', 'completed'],
    default: 'pending'
  }
}, { timestamps: true });

export default mongoose.model<IRepairRequest>('RepairRequest', RepairRequestSchema);