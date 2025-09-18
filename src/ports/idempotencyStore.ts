export interface IdempotencyStore {
  checkAndInsert(key: string, ttlSeconds?: number): Promise<boolean>; // true if first time
}
