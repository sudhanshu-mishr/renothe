import { Schema, model, models } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['user', 'shop_owner', 'admin'],
      default: 'user'
    },
    wishlist: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    addresses: [
      {
        label: String,
        line1: String,
        city: String,
        state: String,
        postalCode: String,
        country: String
      }
    ]
  },
  { timestamps: true }
);

export const User = models.User || model('User', userSchema);
