export interface SearchClient {
  index(index: string, id: string, document: Record<string, unknown>): Promise<void>;
  search(index: string, query: Record<string, unknown>): Promise<Array<Record<string, unknown>>>;
}
