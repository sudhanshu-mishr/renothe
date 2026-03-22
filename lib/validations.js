import { z } from 'zod';

export const signupSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(['user', 'shop_owner', 'admin']).default('user')
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export const productSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(20),
  price: z.number().nonnegative(),
  rentPrice: z.number().nonnegative().optional(),
  size: z.string().min(1),
  brand: z.string().min(2),
  condition: z.string().min(2),
  category: z.string().min(2),
  location: z.string().min(2),
  listingMode: z.enum(['sale', 'rent', 'hybrid']),
  images: z.array(z.string().url()).min(1)
});
