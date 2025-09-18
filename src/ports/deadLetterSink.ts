export interface DeadLetterSink {
  send(topic: string, message: unknown): Promise<void>;
}
