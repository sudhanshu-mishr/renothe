import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { getTokenFromRequest, verifyToken } from '@/lib/auth';
import { Order } from '@/models/Order';

export async function GET(request) {
  const token = getTokenFromRequest(request);
  if (!token) {
    return NextResponse.json({ message: 'Authentication required.' }, { status: 401 });
  }

  const payload = verifyToken(token);
  await connectToDatabase();

  const query = payload.role === 'admin' ? {} : { buyer: payload.sub };
  const orders = await Order.find(query).sort({ createdAt: -1 }).lean();
  return NextResponse.json(orders);
}

export async function POST(request) {
  const token = getTokenFromRequest(request);
  if (!token) {
    return NextResponse.json({ message: 'Authentication required.' }, { status: 401 });
  }

  const payload = verifyToken(token);
  const body = await request.json();

  await connectToDatabase();
  const order = await Order.create({ ...body, buyer: payload.sub });
  return NextResponse.json(order, { status: 201 });
}
