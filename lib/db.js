import mongoose from 'mongoose';

const globalStore = globalThis;
// Cache the mongoose connection across hot reloads in development.
const cached = globalStore.mongooseConnection || { conn: null, promise: null };
globalStore.mongooseConnection = cached;

export async function connectToDatabase() {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error('Missing MONGODB_URI. Configure the database connection before calling protected API routes.');
  }

  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(mongoUri, {
      bufferCommands: false
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
