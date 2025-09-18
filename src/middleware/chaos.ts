import type { Request, Response, NextFunction } from 'express';

const enabled = String(process.env.CHAOS_ENABLED || 'false').toLowerCase() === 'true';
const latencyMs = Number(process.env.CHAOS_LATENCY_MS || 0);
const errorRate = Math.min(1, Math.max(0, Number(process.env.CHAOS_ERROR_RATE || 0)));

export async function chaosMiddleware(_req: Request, _res: Response, next: NextFunction) {
  if (!enabled) return next();
  const maybeFail = Math.random() < errorRate;
  const delay = latencyMs > 0 ? latencyMs : 0;
  if (delay > 0) await new Promise((r) => setTimeout(r, delay));
  if (maybeFail) return next(new Error('Injected chaos error'));
  return next();
}

