import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { loginSchema } from '@/lib/validations';
import { rateLimit } from '@/lib/rate-limit';
import { signToken, verifyPassword } from '@/lib/auth';
import { User } from '@/models/User';

export async function POST(request) {
  const ip = request.ip ?? 'unknown';
  const limiter = rateLimit(`login:${ip}`, 15, 60000);
  if (!limiter.success) {
    return NextResponse.json({ message: 'Too many login attempts.', retryAfter: limiter.retryAfter }, { status: 429 });
  }

  const body = await request.json();
  const parsed = loginSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: 'Invalid credentials format.', errors: parsed.error.flatten() }, { status: 400 });
  }

  await connectToDatabase();
  const user = await User.findOne({ email: parsed.data.email });
  if (!user) {
    return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 });
  }

  const isValid = await verifyPassword(parsed.data.password, user.password);
  if (!isValid) {
    return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 });
  }

  const token = signToken({ sub: user._id.toString(), role: user.role, email: user.email });
  return NextResponse.json({ token, user: { id: user._id, email: user.email, role: user.role } });
}
