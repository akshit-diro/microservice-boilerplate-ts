# Tech Stack

A TypeScript, Express-based microservice following hexagonal (ports & adapters) architecture with built-in logging, metrics, health probes, request validation, testing, and OpenAPI documentation. Infrastructure adapters are scaffolded as provider-specific stubs.

## Core Stack
- Language/Runtime: TypeScript (ESM) on Node.js >= 18.17
- Web Framework: Express 4
- Security: `helmet`, `cors`
- Validation: `zod`
- Logging: `pino` + `pino-http`
- Metrics: `prom-client` with `/metrics` endpoint
- Tracing: OpenTelemetry bootstrap placeholder (`src/observability/tracing.ts`)
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

| Port (Domain) | Adapter Implementation | External Service | Purpose | Source File | Status |
|---|---|---|---|---|---|
| HTTP Client | AxiosHttpClient | Axios | Outbound HTTP requests | `src/infrastructure/httpclient/axiosHttpClient.ts` | Stub (not implemented) |
| Message Bus | KafkaClient | Apache Kafka | Pub/Sub messaging | `src/infrastructure/messaging/kafkaClient.ts` | Stub (not implemented) |
| Dead Letter Sink | KafkaDeadLetterSink | Apache Kafka | DLQ for failed messages | `src/infrastructure/deadletter/kafkaDeadLetterSink.ts` | Stub (not implemented) |
| Object Store | S3ObjectStore | AWS S3 | Binary/object storage | `src/infrastructure/objectstore/s3ObjectStore.ts` | Stub (not implemented) |
| Cache | RedisCache | Redis | Key-value caching | `src/infrastructure/cache/redisCache.ts` | Stub (not implemented) |
| Rate Limiter | RedisRateLimiter | Redis | Distributed rate limiting | `src/infrastructure/ratelimiter/redisRateLimiter.ts` | Stub (not implemented) |
| Idempotency Store | RedisIdempotencyStore | Redis | Idempotency key storage | `src/infrastructure/idempotency/redisIdempotencyStore.ts` | Stub (not implemented) |
| Auth Verifier | FusionAuthProvider | FusionAuth | Token verification / identity | `src/infrastructure/auth/fusionAuthProvider.ts` | Stub (not implemented) |
| Scheduler | TemporalScheduler | Temporal | Delayed/async jobs | `src/infrastructure/scheduler/temporalScheduler.ts` | Stub (not implemented) |
| Repository | PrismaRepository | Prisma | Database ORM repository | `src/infrastructure/database/prismaRepository.ts` | Stub (not implemented) |
| Repository | CouchbaseRepository | Couchbase | Document DB repository | `src/infrastructure/database/couchbaseRepository.ts` | Stub (not implemented) |
| Makefile / task runner |  |  |  |  |  |
| Correlation/trace context middleware |  |  |  |  |  |
| API versioning (idempotency is listed; versioning not) |  |  |  |  |  |
| PII redaction utilities; Anonymization utilities |  |  |  |  |  |
| CI pipeline templates |  |  |  |  |  |
| E2E smoke runner |  |  |  |  |  |
| Dashboards as code; Alert policies (SLO burn) |  |  |  |  |  |
| Postman/Insomnia collections |  |  |  |  |  |
| Deduplication for MQ |  |  |  |  |  |
| Audit logging |  |  |  |  |  |
| Search |  |  |  |  |  |
| Clock / time source |  |  |  |  |  |
| Retry / backoff / circuit breaker |  |  |  |  |  |
| AuthZ (RBAC/ABAC/policy) |  |  |  |  |  |
| Migrations |  |  |  |  |  |
| Id generator / UUID / KSUID |  |  |  |  |  |
| Input sanitation & encoding |  |  |  |  |  |
| TLS/mTLS bootstrap |  |  |  |  |  |
| SBOM generation; Dependency scanning (SCA); SAST; Container scanning; Image signing & provenance |  |  |  |  |  |
| Test containers harness; Contract testing; Load & resilience tests |  |  |  |  |  |
| API gateway integration |  |  |  |  |  |
| Pre-commit hooks; License policy enforcement |  |  |  |  |  |
| Docs site generator |  |  |  |  |  |
| gRPC (optional) + reflection |  |  |  |  |  |

Notes:
- Additional ports are defined without concrete adapters yet (e.g., `featureFlags`, `secrets`, `tracer`).
- Swap or extend adapters by implementing the respective port interface in `src/ports/*` and wiring in your provider-specific client.
