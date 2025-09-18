import type { SearchClient } from "../../ports/searchClient.js";

export class ElasticsearchClient implements SearchClient {
  async index(_index: string, _id: string, _document: Record<string, unknown>): Promise<void> {
    throw new Error("Elasticsearch index not implemented");
  }
  async search(_index: string, _query: Record<string, unknown>): Promise<Array<Record<string, unknown>>> {
    throw new Error("Elasticsearch search not implemented");
  }
}

