import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { hashPassword, signToken } from '@/lib/auth';
import { signupSchema } from '@/lib/validations';
import { rateLimit } from '@/lib/rate-limit';
import { User } from '@/models/User';

export async function POST(request) {
  const ip = request.ip ?? 'unknown';
  const limiter = rateLimit(`signup:${ip}`, 10, 60000);
  if (!limiter.success) {
    return NextResponse.json({ message: 'Too many signup attempts.', retryAfter: limiter.retryAfter }, { status: 429 });
  }

  const body = await request.json();
  const parsed = signupSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: 'Invalid request.', errors: parsed.error.flatten() }, { status: 400 });
  }

  await connectToDatabase();
  const existingUser = await User.findOne({ email: parsed.data.email });
  if (existingUser) {
    return NextResponse.json({ message: 'Account already exists.' }, { status: 409 });
  }

  const password = await hashPassword(parsed.data.password);
  const user = await User.create({ ...parsed.data, password });
  const token = signToken({ sub: user._id.toString(), role: user.role, email: user.email });

  return NextResponse.json({ token, user: { id: user._id, email: user.email, role: user.role } }, { status: 201 });
}
