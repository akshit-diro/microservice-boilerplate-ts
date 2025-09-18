export interface Secrets {
  getSecret(name: string): Promise<string>;
}
