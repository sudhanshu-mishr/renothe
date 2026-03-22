import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { getTokenFromRequest, verifyToken } from '@/lib/auth';
import { Product } from '@/models/Product';

export async function GET(_request, { params }) {
  await connectToDatabase();
  const product = await Product.findById(params.id).lean();
  if (!product) {
    return NextResponse.json({ message: 'Product not found.' }, { status: 404 });
  }
  return NextResponse.json(product);
}

export async function PATCH(request, { params }) {
  const token = getTokenFromRequest(request);
  if (!token) {
    return NextResponse.json({ message: 'Authentication required.' }, { status: 401 });
  }

  const payload = verifyToken(token);
  await connectToDatabase();
  const product = await Product.findById(params.id);
  if (!product) {
    return NextResponse.json({ message: 'Product not found.' }, { status: 404 });
  }

  const isOwner = product.owner.toString() === payload.sub;
  if (!isOwner && payload.role !== 'admin') {
    return NextResponse.json({ message: 'Not allowed to update this product.' }, { status: 403 });
  }

  Object.assign(product, await request.json());
  await product.save();

  return NextResponse.json(product);
}

export async function DELETE(request, { params }) {
  const token = getTokenFromRequest(request);
  if (!token) {
    return NextResponse.json({ message: 'Authentication required.' }, { status: 401 });
  }

  const payload = verifyToken(token);
  await connectToDatabase();
  const product = await Product.findById(params.id);

  if (!product) {
    return NextResponse.json({ message: 'Product not found.' }, { status: 404 });
  }

  const isOwner = product.owner.toString() === payload.sub;
  if (!isOwner && payload.role !== 'admin') {
    return NextResponse.json({ message: 'Not allowed to delete this product.' }, { status: 403 });
  }

  await product.deleteOne();
  return NextResponse.json({ message: 'Product deleted.' });
}
