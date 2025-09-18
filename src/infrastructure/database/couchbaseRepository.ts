import type { ExampleRepository } from "../../ports/repositories/index.js";
import type { Example } from "../../domain/models/example.js";

export class CouchbaseRepository implements ExampleRepository {
  async save(_entity: Example): Promise<void> {
    throw new Error("Couchbase integration not implemented");
  }
  async findById(_id: string): Promise<Example | null> {
    throw new Error("Couchbase integration not implemented");
  }
}
