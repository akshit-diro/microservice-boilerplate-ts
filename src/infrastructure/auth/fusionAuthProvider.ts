import type { AuthVerifier, Principal } from "../../ports/authVerifier.js";

export class FusionAuthProvider implements AuthVerifier {
  async verify(_token: string): Promise<Principal> {
    throw new Error("FusionAuth verify not implemented");
  }
}
