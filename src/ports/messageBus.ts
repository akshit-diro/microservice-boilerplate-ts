export type MessageHandler<T = unknown> = (msg: T) => Promise<void>;

export interface MessageBus {
  publish<T = unknown>(topic: string, message: T): Promise<void>;
  subscribe<T = unknown>(topic: string, handler: MessageHandler<T>): Promise<() => Promise<void>>; // returns unsubscribe
}
