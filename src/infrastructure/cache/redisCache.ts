import type { Cache } from "../../ports/cache.js";

export class RedisCache implements Cache {
  async get<T = unknown>(_key: string): Promise<T | null> {
    throw new Error("Redis get not implemented");
  }
  async set<T = unknown>(_key: string, _value: T, _ttlSeconds?: number): Promise<void> {
    throw new Error("Redis set not implemented");
  }
  async del(_key: string): Promise<void> {
    throw new Error("Redis del not implemented");
  }
}
