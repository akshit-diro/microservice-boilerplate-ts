import type { HttpClient, HttpOptions } from "../../ports/httpClient.js";

export class AxiosHttpClient implements HttpClient {
  async get<T = unknown>(_url: string, _options?: HttpOptions): Promise<T> {
    throw new Error("Axios GET not implemented");
  }
  async post<T = unknown>(_url: string, _body: unknown, _options?: HttpOptions): Promise<T> {
    throw new Error("Axios POST not implemented");
  }
  async put<T = unknown>(_url: string, _body: unknown, _options?: HttpOptions): Promise<T> {
    throw new Error("Axios PUT not implemented");
  }
  async del<T = unknown>(_url: string, _options?: HttpOptions): Promise<T> {
    throw new Error("Axios DELETE not implemented");
  }
}
