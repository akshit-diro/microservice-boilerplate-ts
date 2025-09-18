export interface Scheduler {
  schedule(taskName: string, payload: unknown, when: Date): Promise<void>;
  cancel(taskId: string): Promise<void>;
}
