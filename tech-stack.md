# Tech Stack

A TypeScript, Express-based microservice following hexagonal (ports & adapters) architecture with built-in logging, metrics, health probes, request validation, testing, and OpenAPI documentation. Infrastructure adapters are scaffolded as provider-specific stubs.

## Core Stack
- Language/Runtime: TypeScript (ESM) on Node.js >= 18.17
- Web Framework: Express 4
- Security: `helmet`, `cors`
- Validation: `zod`
- Outbound HTTP Client: `axios` or `undici`
- Testing: Jest + ts-jest + Supertest
- Build/Dev: `tsc` for build, `tsx watch` for dev
- API Docs: OpenAPI 3 (`docs/openapi.yaml`), preview via Redocly (`npm run openapi:serve`)
- Config: Zod-validated config (`src/config/schema.ts`), `.env.example`

- Container/Deploy: Dockerfile, Helm chart, K8s probes (`/healthz`, `/readyz`, `/livez`)

## Architecture
- Style: Hexagonal (Clean) Architecture.
- Domain logic in `src/domain/*` with boundaries defined in `src/ports/*`.
- Provider-specific adapters live under `src/infrastructure/*` and can be swapped without affecting domain code.

## External Integrations (Adapters)

| Port (Domain) | Purpose | Ready-made Adapters | External Service | Source File |
|---|---|---|---|---|
| Logger | Structured application logging | pino, pino-http, winston |  | `src/middleware/logging.ts` |
| Metrics | Metrics collection and exposition | prom-client | Prometheus | `src/observability/metrics.ts` |
| Tracing | Distributed tracing instrumentation | OpenTelemetry SDK | OpenTelemetry Collector | `src/observability/tracing.ts` |
| Message Bus | Pub/Sub messaging | kafkajs, node-rdkafka | Apache Kafka | `src/infrastructure/messaging/kafkaClient.ts` |
| Dead Letter Sink | DLQ for failed messages | kafkajs | Apache Kafka | `src/infrastructure/deadletter/kafkaDeadLetterSink.ts` |
| Object Store | Binary/object storage | AWS SDK v3 (S3), MinIO client | AWS S3 / MinIO | `src/infrastructure/objectstore/s3ObjectStore.ts` |
| Cache | Key-value caching | ioredis, node-redis | Redis | `src/infrastructure/cache/redisCache.ts` |
| Rate Limiter | Distributed rate limiting | rate-limiter-flexible | Redis | `src/infrastructure/ratelimiter/redisRateLimiter.ts` |
| Idempotency Store | Idempotency key storage | ioredis | Redis | `src/infrastructure/idempotency/redisIdempotencyStore.ts` |
| Auth Verifier | Token verification / identity | jose, openid-client | FusionAuth / OIDC | `src/infrastructure/auth/fusionAuthProvider.ts` |
| Scheduler | Delayed/async jobs | Temporal TypeScript SDK | Temporal | `src/infrastructure/scheduler/temporalScheduler.ts` |
| Repository | Database ORM repository | Prisma Client | Prisma | `src/infrastructure/database/prismaRepository.ts` |
| Repository | Document DB repository | Couchbase Node SDK | Couchbase | `src/infrastructure/database/couchbaseRepository.ts` |
| Config Management | Centralized configuration provider | node-config, convict, AWS AppConfig SDK | AWS AppConfig | `src/infrastructure/config/appConfigProvider.ts` |
| Secrets Management | Secure secret retrieval | AWS SDK v3 (Secrets Manager), Vault client | AWS Secrets Manager | `src/infrastructure/secrets/awsSecretsManager.ts` |
| Feature Flags | Feature toggle evaluation | LaunchDarkly SDK, Unleash client | LaunchDarkly | `src/infrastructure/featureflags/launchDarklyClient.ts` |
| Search | Full-text / index search | Elasticsearch JS, Meilisearch | Elasticsearch | `src/infrastructure/search/elasticsearchClient.ts` |
| Makefile / task runner | Automate common developer tasks and workflows | GNU Make |  | `Makefile` |
| Correlation/trace context middleware | Propagate request IDs and trace context across calls | AsyncLocalStorage, OpenTelemetry context |  | `src/infrastructure/context/alsContextPropagator.ts` |
| API versioning | Route and manage multiple API versions | express versioning patterns |  | `src/infrastructure/versioning/headerVersionRouter.ts` |
| PII redaction / Anonymization utilities | Mask or remove sensitive data from logs/events | fast-redact, pino redact |  | `src/utils/redaction.ts` |
| CI pipeline templates | Standardize build, test, and packaging in CI | GitHub Actions | GitHub Actions | `.github/workflows/ci.yml` |
| E2E smoke runner | Basic end-to-end checks for environment health | Newman, k6 |  | `scripts/smoke.ts` |
| Dashboards as code; Alert policies (SLO burn) | Define monitoring dashboards and SLO-based alerts | Grafana JSON, Grafonnet, Prometheus Alertmanager | Grafana, Prometheus Alertmanager | `docs/observability/dashboards/README.md` |
| Postman/Insomnia collections | Shareable collections for manual API testing | Postman, Insomnia |  | `docs/collections/README.md` |
| Deduplication for MQ | Prevent duplicate processing of messages | Kafka consumer groups | Redis | `src/infrastructure/idempotency/redisIdempotencyStore.ts` |
| Audit logging | Record security-relevant actions and changes | pino |  | `src/middleware/logging.ts` |
| Clock / time source | Provide deterministic time abstraction for code/tests | dayjs, luxon |  | `src/utils/clock.ts` |
| Retry / backoff / circuit breaker | Resilience patterns for remote calls | p-retry, cockatiel, opossum |  | `src/utils/resilience.ts` |
| AuthZ (RBAC/ABAC/policy) | Authorization decisions over actions and resources | casbin, oso | Casbin | `src/infrastructure/authorization/casbinAuthorizer.ts` |
| Migrations | Manage schema/data changes across environments | Prisma Migrate, Knex | Prisma Migrate | `scripts/migrate.ts` |
| Id generator / UUID / KSUID | Generate globally unique identifiers | uuid, ksuid |  | `src/utils/ids.ts` |
| Input sanitation & encoding | Normalize/sanitize inputs to prevent injection | validator.js |  | `src/utils/sanitize.ts` |
| TLS/mTLS bootstrap | Configure TLS and optional mutual TLS for services | Node.js TLS |  | `src/security/tls.ts` |
| SBOM/SCA/SAST/Scanning/Signing | Supply chain security, scanning, and image integrity | syft, grype, trivy, cosign |  | `docs/security/supply-chain.md` |
| Test containers/Contract/Load tests | Test infra for integration/contract/load and resilience | testcontainers, Pact, k6 |  | `tests/e2e/README.md` |
| API gateway integration | Configure edge routing, auth, and quotas | Kong, NGINX, Traefik |  | `docs/ops/api-gateway.md` |
| Pre-commit hooks; License policy enforcement | Dev workflow checks and license compliance | husky, lint-staged |  | `docs/dev/precommit.md` |
| Docs site generator | Generate and publish documentation sites | Docusaurus, MkDocs |  | `docs/site/README.md` |
| gRPC (optional) + reflection | Binary RPC protocol support and discovery | @grpc/grpc-js, ts-proto |  | `src/infrastructure/grpc/grpcServer.ts` |

Notes:
- Additional ports are defined without concrete adapters yet (e.g., `featureFlags`, `secrets`, `tracer`).
- Swap or extend adapters by implementing the respective port interface in `src/ports/*` and wiring in your provider-specific client.
