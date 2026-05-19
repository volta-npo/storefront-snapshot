# API Reference: Storefront Snapshot

## Static app contract

The browser app is local-first. Data is stored in the user's browser unless explicitly exported.

| Capability | File | Contract |
|---|---|---|
| Product config | `src/config.ts` | Mission, rubric, sample scenario, privacy rules. |
| Domain engine | `src/domain-core.ts` | Domain-specific calculations and generated artifacts. |
| release certification | `src/v3-core.ts` | Release gates, export/import, deterministic hashes. |

## Rust backend HTTP API

Base URL: `http://127.0.0.1:8788`

| Method | Path | Purpose |
|---|---|---|
| GET | `/health` | Runtime health and product identity. |
| GET | `/score` | Deterministic sample release score and fingerprint. |

Example:

```bash
curl -s http://127.0.0.1:8788/health
curl -s http://127.0.0.1:8788/score
```

## OpenAPI

See `openapi.yaml` for backend-enabled products.
