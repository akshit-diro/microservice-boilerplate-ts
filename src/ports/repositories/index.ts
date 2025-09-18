import type { Example } from "../../domain/models/example.js";

export interface ExampleRepository {
  save(entity: Example): Promise<void>;
  findById(id: string): Promise<Example | null>;
}
