export interface RateLimiter {
  take(key: string): Promise<boolean>; // true if allowed
}
