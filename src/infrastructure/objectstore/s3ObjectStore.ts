import type { ObjectStore } from "../../ports/objectStore.js";

export class S3ObjectStore implements ObjectStore {
  async upload(_bucket: string, _key: string, _data: Buffer, _contentType?: string): Promise<void> {
    throw new Error("S3 upload not implemented");
  }
  async download(_bucket: string, _key: string): Promise<Buffer> {
    throw new Error("S3 download not implemented");
  }
  async delete(_bucket: string, _key: string): Promise<void> {
    throw new Error("S3 delete not implemented");
  }
}
