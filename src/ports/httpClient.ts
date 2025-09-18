export interface HttpOptions {
  headers?: Record<string, string>;
  timeoutMs?: number;
  query?: Record<string, string | number | boolean>;
}

export interface HttpClient {
  get<T = unknown>(url: string, options?: HttpOptions): Promise<T>;
  post<T = unknown>(url: string, body: unknown, options?: HttpOptions): Promise<T>;
  put<T = unknown>(url: string, body: unknown, options?: HttpOptions): Promise<T>;
  del<T = unknown>(url: string, options?: HttpOptions): Promise<T>;
}
