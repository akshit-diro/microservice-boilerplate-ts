import type { Scheduler } from "../../ports/scheduler.js";

export class TemporalScheduler implements Scheduler {
  async schedule(_taskName: string, _payload: unknown, _when: Date): Promise<void> {
    throw new Error("Temporal schedule not implemented");
  }
  async cancel(_taskId: string): Promise<void> {
    throw new Error("Temporal cancel not implemented");
  }
}
