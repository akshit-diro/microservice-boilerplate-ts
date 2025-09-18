import type { VersionRouter } from '../../ports/versioning.js';

export class HeaderVersionRouter implements VersionRouter {
  resolveVersion(_path: string, headers: Record<string, string | string[] | undefined>): string {
    const v = headers['x-api-version'];
    return Array.isArray(v) ? v[0] : (v as string) || 'v1';
  }
}

