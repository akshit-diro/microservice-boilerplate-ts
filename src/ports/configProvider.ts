export interface ConfigProvider {
  get<T = unknown>(key: string): Promise<T | undefined>;
}

