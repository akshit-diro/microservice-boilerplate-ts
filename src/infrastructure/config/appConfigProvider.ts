import type { ConfigProvider } from "../../ports/configProvider.js";

export class AppConfigProvider implements ConfigProvider {
  async get<T = unknown>(_key: string): Promise<T | undefined> {
    throw new Error("AppConfig provider not implemented");
  }
}

