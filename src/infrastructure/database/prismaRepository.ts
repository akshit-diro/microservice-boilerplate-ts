import type { ExampleRepository } from "../../ports/repositories/index.js";
import type { Example } from "../../domain/models/example.js";

export class PrismaRepository implements ExampleRepository {
  async save(_entity: Example): Promise<void> {
    throw new Error("Prisma integration not implemented");
  }
  async findById(_id: string): Promise<Example | null> {
    throw new Error("Prisma integration not implemented");
  }
}
