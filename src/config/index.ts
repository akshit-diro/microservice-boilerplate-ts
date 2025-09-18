import { ConfigSchema, type AppConfig } from './schema.js';

let cached: AppConfig | null = null;

export function loadConfig(): AppConfig {
  if (cached) return cached;
  const parsed = ConfigSchema.safeParse({});
  if (!parsed.success) {
    throw new Error('Invalid configuration: ' + parsed.error.message);
  }
  cached = parsed.data;
  return cached;
}
