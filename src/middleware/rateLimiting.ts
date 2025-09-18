import type { Request, Response, NextFunction } from 'express';

// Simple in-memory token bucket for demo purposes
const capacity = 100;
const refillPerSec = 50;
let tokens = capacity;
let last = Date.now();

function takeToken(): boolean {
  const now = Date.now();
  const elapsed = (now - last) / 1000;
  last = now;
  tokens = Math.min(capacity, tokens + elapsed * refillPerSec);
  if (tokens >= 1) { tokens -= 1; return true; }
  return false;
}

export function rateLimiting(_req: Request, res: Response, next: NextFunction) {
  if (!takeToken()) {
    return res.status(429).json({ error: 'RATE_LIMITED' });
  }
  next();
}
