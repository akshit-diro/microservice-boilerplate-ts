import type { Principal } from './authVerifier.js';

export interface Authorizer {
  isAllowed(principal: Principal, action: string, resource: string, context?: Record<string, unknown>): Promise<boolean>;
}
