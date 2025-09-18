# Runbook

## Startup
- `npm i` then `npm run dev`.
- Health endpoints: `/healthz`, `/readyz`, `/livez`.

## Common Tasks
- View logs: container logs via `kubectl logs` or local console.
- Metrics: scrape `/metrics` (Prometheus format).

## Incident Steps
1. Check health endpoints and logs.
2. Verify dependencies (Redis/Kafka/S3) are reachable.
3. Roll back or scale via Helm.

