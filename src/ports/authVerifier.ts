export interface Principal {
  sub: string;
  roles?: string[];
  claims?: Record<string, unknown>;
}

export interface AuthVerifier {
  verify(token: string): Promise<Principal>;
}
