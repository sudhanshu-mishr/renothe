const requests = new Map();

export function rateLimit(key, limit = 30, windowMs = 60000) {
  const now = Date.now();
  const current = requests.get(key);

  if (!current || current.resetAt < now) {
    requests.set(key, { count: 1, resetAt: now + windowMs });
    return { success: true, remaining: limit - 1 };
  }

  if (current.count >= limit) {
    return { success: false, remaining: 0, retryAfter: Math.ceil((current.resetAt - now) / 1000) };
  }

  current.count += 1;
  return { success: true, remaining: limit - current.count };
}
