# Boilerplate Microservice (TypeScript, Hexagonal)

A provider-agnostic microservice starter with logging, metrics, health probes, request validation, error taxonomy, basic tests, and OpenAPI docs. Infrastructure implementations are intentionally left as stubs.

## Quick Start
```bash
npm i
npm run dev
# curl http://localhost:3000/healthz
```

## Build
```bash
npm run build && npm start
```

## Test
```bash
npm test
```

## Highlighted Files

### Core
| Item | Files |
|---|---|
| HTTP server bootstrap | `src/index.ts` |
| Response models / DTOs | `src/api/dto/ping.ts` |
| Error taxonomy & mapper | `src/utils/errors.ts`, `src/middleware/errorHandler.ts` |
| Data retention jobs | `src/jobs/dataRetention.ts`, `deployment/helm/templates/cronjob-retention.yaml` |
| Blue/green & canary hooks | `docs/ops/rollouts.md` |
| CLI bootstrap (optional) | `src/cli.ts`, `package.json#scripts.cli` |
| Health/ready/live endpoints | `src/observability/healthcheck.ts`, `src/index.ts`, `deployment/helm/templates/deployment.yaml` |
| Runtime probes & readiness gates | `src/observability/healthcheck.ts`, `deployment/helm/templates/deployment.yaml` |

### Configurations
| Item | Files |
|---|---|
| Env config samples | `.env.example`, `src/config/schema.ts`, `src/config/index.ts` |
| Chaos toggle (non-prod) | `src/middleware/chaos.ts`, `.env.example` |

### Templates & Examples
| Item | Files |
|---|---|
| Project scaffolding (repo files, templates) | `.github/workflows/ci.yml`, `deployment/Dockerfile`, `deployment/helm/Chart.yaml`, `deployment/helm/templates/deployment.yaml`, `deployment/helm/templates/service.yaml`, `docs/openapi.yaml`, `Makefile` |
| Provider adapter skeletons | `src/infrastructure/**/*` |
| Domain layer skeleton | `src/domain/**/*` |
| Ports layer skeleton | `src/ports/**/*` |
| Template service (example app) | `src/api/controllers/pingController.ts`, `src/api/routes/index.ts` |
| API examples & snippets | `docs/examples/requests.http` |

### Architecture
| Item | Files |
|---|---|
| Architectural Decision Records & templates | `docs/adr/template.md`, `docs/adr/0001-record-architecture-decisions.md` |
| Local dev stack | `docker-compose.yml` |


### Maintenance
| Item | Files |
|---|---|
| Conventional commits + changelog | `commitlint.config.cjs`, `CHANGELOG.md` |
| Code formatting & linting | `.editorconfig`, `.prettierrc.json`, `.eslintrc.cjs` |
| README / runbook / troubleshooting | `README.md`, `docs/runbook.md`, `docs/TROUBLESHOOTING.md` |
| License & security policy | `LICENSE`, `SECURITY.md` |
| Ownership & on-call metadata | `.github/CODEOWNERS`, `docs/oncall.md` |
