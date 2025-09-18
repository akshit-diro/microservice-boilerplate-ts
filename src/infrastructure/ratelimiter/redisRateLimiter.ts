import type { RateLimiter } from "../../ports/rateLimiter.js";

export class RedisRateLimiter implements RateLimiter {
  async take(_key: string): Promise<boolean> {
    throw new Error("Redis rate limiter not implemented");
  }
}
