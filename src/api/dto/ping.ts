import { z } from 'zod';

export const PingRequestSchema = z.object({
  name: z.string().min(1).max(64).optional()
});
