export interface ContextPropagator {
  getCorrelationId(): string | undefined;
  withCorrelationId<T>(id: string, fn: () => Promise<T> | T): Promise<T> | T;
}

