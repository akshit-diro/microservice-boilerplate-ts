import type { Request, Response } from 'express';
import { PingRequestSchema } from '../dto/ping.js';

export const ping = (req: Request, res: Response) => {
  const parse = PingRequestSchema.safeParse(req.query);
  if (!parse.success) {
    return res.status(400).json({ error: 'INVALID_ARGUMENT', details: parse.error.errors });
  }
  const { name = 'world' } = parse.data;
  res.json({ message: `pong, ${name}` });
};
