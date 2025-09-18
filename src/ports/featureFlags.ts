export interface FeatureFlags {
  isEnabled(flagKey: string, context?: Record<string, unknown>): Promise<boolean>;
}
