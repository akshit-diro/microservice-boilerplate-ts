import type { Request, Response, NextFunction } from 'express';

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  const status = err.statusCode || 500;
  const code = err.code || 'INTERNAL';
  const message = err.message || 'Internal error';
  res.status(status).json({ error: code, message });
}
