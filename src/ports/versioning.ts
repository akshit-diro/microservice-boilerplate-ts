export interface VersionRouter {
  resolveVersion(path: string, headers: Record<string, string | string[] | undefined>): string;
}

