import type { Secrets } from "../../ports/secrets.js";

export class AwsSecretsManager implements Secrets {
  async getSecret(_name: string): Promise<string> {
    throw new Error("AWS Secrets Manager integration not implemented");
  }
}

