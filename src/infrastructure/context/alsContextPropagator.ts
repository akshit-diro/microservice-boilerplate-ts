import { AsyncLocalStorage } from 'node:async_hooks';
import type { ContextPropagator } from '../../ports/context.js';

const als = new AsyncLocalStorage<Map<string, string>>();
const CORRELATION_ID = 'correlationId';

export class AlsContextPropagator implements ContextPropagator {
  getCorrelationId(): string | undefined {
    return als.getStore()?.get(CORRELATION_ID);
  }
  withCorrelationId<T>(id: string, fn: () => Promise<T> | T): Promise<T> | T {
    const store = new Map<string, string>();
    store.set(CORRELATION_ID, id);
    return als.run(store, fn as any);
  }
}

