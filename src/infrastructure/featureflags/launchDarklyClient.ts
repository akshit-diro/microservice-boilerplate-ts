import type { FeatureFlags } from "../../ports/featureFlags.js";

export class LaunchDarklyClient implements FeatureFlags {
  async isEnabled(_flagKey: string, _context?: Record<string, unknown>): Promise<boolean> {
    throw new Error("LaunchDarkly integration not implemented");
  }
}

