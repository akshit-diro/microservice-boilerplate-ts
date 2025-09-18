import type { Authorizer } from '../../ports/authorizer.js';

export class CasbinAuthorizer implements Authorizer {
  async isAllowed(_principal: any, _action: string, _resource: string, _context?: Record<string, unknown>): Promise<boolean> {
    throw new Error('Casbin authorization not implemented');
  }
}

