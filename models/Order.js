import { Schema, model, models } from 'mongoose';

const orderSchema = new Schema(
  {
    buyer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
      {
        product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        mode: { type: String, enum: ['buy', 'rent'], required: true },
        quantity: { type: Number, default: 1 },
        rentalStart: String,
        rentalEnd: String,
        price: Number
      }
    ],
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid', 'refunded'],
      default: 'pending'
    },
    orderStatus: {
      type: String,
      enum: ['placed', 'confirmed', 'shipped', 'active_rental', 'returned', 'completed'],
      default: 'placed'
    },
    shippingAddress: {
      line1: String,
      city: String,
      state: String,
      postalCode: String,
      country: String
    },
    total: { type: Number, required: true }
  },
  { timestamps: true }
);

export const Order = models.Order || model('Order', orderSchema);
