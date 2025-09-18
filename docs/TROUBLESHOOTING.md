# Troubleshooting

- Port already in use: change `PORT` in `.env`.
- Health checks failing in Kubernetes: check container logs and ensure `/readyz` and `/livez` endpoints are reachable.
- Metrics empty: ensure `METRICS_ENABLED` is not set to `false`.
- Local services: start `docker-compose.yml` for Redis/Kafka/MinIO if needed.

