export type Labels = Record<string, string>;

export interface Metrics {
  increment(name: string, value?: number, labels?: Labels): void;
  gauge(name: string, value: number, labels?: Labels): void;
  observe(name: string, value: number, labels?: Labels): void;
}
