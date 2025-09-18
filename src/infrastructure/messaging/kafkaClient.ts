import type { MessageBus, MessageHandler } from "../../ports/messageBus.js";

export class KafkaClient implements MessageBus {
  async publish<T = unknown>(_topic: string, _message: T): Promise<void> {
    throw new Error("Kafka publish not implemented");
  }
  async subscribe<T = unknown>(_topic: string, _handler: MessageHandler<T>): Promise<() => Promise<void>> {
    throw new Error("Kafka subscribe not implemented");
  }
}
