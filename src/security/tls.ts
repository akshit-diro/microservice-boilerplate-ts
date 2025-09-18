export interface TLSConfig {
  key?: string; // PEM string or path
  cert?: string; // PEM string or path
  ca?: string; // PEM string or path
  mutualTLS?: boolean;
}

export function loadTLSConfig(): TLSConfig {
  // TODO: load from env/secrets
  return { mutualTLS: false };
}

