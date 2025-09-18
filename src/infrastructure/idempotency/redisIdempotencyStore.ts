import type { IdempotencyStore } from "../../ports/idempotencyStore.js";

export class RedisIdempotencyStore implements IdempotencyStore {
  async checkAndInsert(_key: string, _ttlSeconds?: number): Promise<boolean> {
    throw new Error("Redis idempotency not implemented");
  }
}
