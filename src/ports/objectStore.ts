export interface ObjectStore {
  upload(bucket: string, key: string, data: Buffer, contentType?: string): Promise<void>;
  download(bucket: string, key: string): Promise<Buffer>;
  delete(bucket: string, key: string): Promise<void>;
}
