import type { Request, Response, NextFunction } from 'express';

// Placeholder for JWT/OIDC verification; integrate with your provider later.
export function requireAuth(_req: Request, _res: Response, next: NextFunction) {
  // Accept all requests for now.
  next();
}
