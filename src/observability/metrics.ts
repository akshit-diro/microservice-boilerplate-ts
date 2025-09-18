import type { Request, Response, NextFunction } from 'express';
import client from 'prom-client';

const register = new client.Registry();
client.collectDefaultMetrics({ register });

export function metricsMiddleware(_req: Request, _res: Response, next: NextFunction) {
  next();
}

export async function metricsEndpoint(_req: Request, res: Response) {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
}

export const metrics = { register };
