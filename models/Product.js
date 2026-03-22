import { Schema, model, models } from 'mongoose';

const productSchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    rentPrice: Number,
    size: { type: String, required: true },
    brand: { type: String, required: true },
    condition: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    listingMode: {
      type: String,
      enum: ['sale', 'rent', 'hybrid'],
      required: true
    },
    images: [{ type: String, required: true }],
    tags: [String],
    status: {
      type: String,
      enum: ['draft', 'pending', 'approved', 'rejected'],
      default: 'pending'
    },
    availability: [
      {
        start: String,
        end: String,
        status: {
          type: String,
          enum: ['available', 'booked', 'maintenance'],
          default: 'available'
        }
      }
    ]
  },
  { timestamps: true }
);

export const Product = models.Product || model('Product', productSchema);
