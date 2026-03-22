import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { getTokenFromRequest, verifyToken } from '@/lib/auth';
import { productSchema } from '@/lib/validations';
import { Product } from '@/models/Product';

export async function GET() {
  await connectToDatabase();
  const items = await Product.find().sort({ createdAt: -1 }).limit(50).lean();
  return NextResponse.json(items);
}

export async function POST(request) {
  const token = getTokenFromRequest(request);
  if (!token) {
    return NextResponse.json({ message: 'Authentication required.' }, { status: 401 });
  }

  const payload = verifyToken(token);
  if (!['user', 'shop_owner', 'admin'].includes(payload.role)) {
    return NextResponse.json({ message: 'Insufficient permissions.' }, { status: 403 });
  }

  const body = await request.json();
  const parsed = productSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: 'Invalid product payload.', errors: parsed.error.flatten() }, { status: 400 });
  }

  await connectToDatabase();
  const item = await Product.create({ ...parsed.data, owner: payload.sub, status: 'pending' });
  return NextResponse.json(item, { status: 201 });
}
