import type { DeadLetterSink } from "../../ports/deadLetterSink.js";

export class KafkaDeadLetterSink implements DeadLetterSink {
  async send(_topic: string, _message: unknown): Promise<void> {
    throw new Error("Kafka DLQ not implemented");
  }
}
