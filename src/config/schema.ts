import { z } from 'zod';

export const ConfigSchema = z.object({
  serviceName: z.string().default(process.env.SERVICE_NAME || 'boilerplate-microservice'),
  logLevel: z.string().default(process.env.LOG_LEVEL || 'info'),
  metricsEnabled: z.coerce.boolean().default(process.env.METRICS_ENABLED !== 'false'),
});
export type AppConfig = z.infer<typeof ConfigSchema>;
