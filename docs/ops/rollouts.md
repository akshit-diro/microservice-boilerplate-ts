# Deployment Strategies: Blue/Green and Canary

This service is packaged with Helm. To implement canary or blue/green:

## Canary (example)
- Use two Deployments (stable/canary) or a controller like Argo Rollouts.
- Split traffic via Ingress weights or service mesh.

## Blue/Green (example)
- Maintain two versions (blue/green) and switch Service selector labels post-verify.

Tip: Integrate with Argo Rollouts or Flagger for automation. Add analysis templates and progressive traffic shifting as needed.

