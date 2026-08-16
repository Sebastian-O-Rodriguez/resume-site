# Sebastian O Rodriguez — Full-Stack AI Engineer

**Location:** Delaware, US (Remote)  
**Email:** sebastian@guavatt.com  
**GitHub:** [github.com/Sebastian-O-Rodriguez](https://github.com/Sebastian-O-Rodriguez)  
**LinkedIn:** [linkedin.com/in/sebastianorodriguez](https://www.linkedin.com/in/sebastianorodriguez/)  
**Web:** [guavaai.ai](https://guavaai.ai)

---

## Summary

Full-stack engineer building production AI systems end-to-end — LLM integration, golden-set evals, per-call observability, retrieval-augmented generation, and bounded agentic tool loops on typed actions. Strong security and testing discipline: multi-layer RLS, fail-closed auth, 80%+ coverage gates, real-model eval harnesses. TypeScript/React/Node primary with Python backend across FastAPI, SQLAlchemy, and Polars.

Founder of Guava AI, where I built the full stack: the agent orchestration platform (guava-os), the client BI product (guavabi), and the company's web presence. Previously led strategic data operations at Scale AI and guided a product launch as a technical writer at Salesforce.

---

## Experience

### Guava AI — Founder & Full-Stack Engineer
*2025 – Present | Remote*

Build and operate the entire Guava AI product stack: agent orchestration platform for autonomous engineering workflows, BI analytics product for distributor operations, and client-facing dashboards and automations. Work directly with clients to scope requirements, conduct diagnostics, deliver reports, and run interviews.

**Key systems built:**
- **guava-os** — Agent orchestration platform. Separation-of-concerns architecture: planning layer (guava-os), execution engine (gorp), and OMP runtime. Governed execution with dependency graphs, worktree isolation, review/promotion gates, hash-chained audit, and operator CLI (doctor/status/validate/next). 136 commits. 258 tests passing. OTel tracing + Sentry alerting wired into the audit chain.
- **guavabi** — Operational BI platform for ERP-heavy distributors. Python FastAPI + Next.js + PostgreSQL. Multi-step CSV import with AI-suggested field mappings (human-confirmed), FK resolution, type coercion, and categorized rejection reporting. Deterministic analytics engine computing stockout risk, overstock, shrinkage, fast-moving SKUs, and customer purchase decline. LLM trust boundary: AI parses intent and explains results; metrics are deterministic. 77 commits. 514 tests passing.
- **guava-site** — Company website at guavaai.ai. Built with Astro + Svelte + Tailwind CSS, deployed on Cloudflare Pages. QA automation for performance metrics, accessibility checks, and visual regression (Playwright).
- **Client work:** Custom dashboards, data pipelines, automation workflows. Client scoping, requirements gathering, diagnostic reporting, and interview process.

*TypeScript, Python, FastAPI, Next.js, React, PostgreSQL, SQLAlchemy, Polars, OpenRouter, Astro, Svelte, Docker, Clerk, Railway, Cloudflare*

### Scale AI — Strategic Projects
*2022 – 2024 | Remote*

Led data labeling operations spanning text and multimodal domains. Managed onboarding funnels, created training documentation and product training, and served as internal product manager for data operations tooling.

**Key results:**
- Took queue quality rating from 25% → 75% in 4 days through process redesign and tooling improvements
- Scaled daily production from 250 pieces of quality data to 25,000+ per day within 14 days
- Designed and implemented an onboarding funnel that produced 250+ qualified hires
- Managed teams of 50+ operators across multiple queues and domains
- Built tooling to inspect, curate, and validate data at scale

*Python, Data Operations, Process Design, Training & Documentation, Team Management*

### Salesforce — Technical Writer
*2020 – 2022 | Remote*

Guided a new elastic services product through its successful launch as part of a 3-person team. Responsible for product documentation, API reference content, and internal knowledge base architecture.

*Technical Writing, API Documentation, Product Launch, Cross-functional Collaboration*

### Peloton — Sales Specialist
*2019 – 2020 | New York, NY*

*Role listed for timeline continuity; details available on request.*

---

## Education

**Carnegie Mellon University** — Pittsburgh, PA  
BS Technology & Sonic Product Innovation, Minor Business Administration (2020)

---

## Projects

### RoutineMe — AI-Powered Health Tracking

Natural-language health tracker with full AI pipeline: LLM classifier (10 intents) → normalizer → estimator (RAG-grounded nutrition prediction) → typed Action executor. Chat input and direct tap input converge through a single Zod-validated discriminated union.

**AI features:**
- **LLM Evals (R1):** 17-case golden classifier set. 6-case estimator golden set including RAG-grounded "repeated food from history" case. Real-model eval harness (`npm run evals`) with regression floors. Verified: classifier 100%, estimator coverage 100%, unknown-bounds 100% on live OpenRouter run.
- **AI Observability (R2):** Per-LLM-call instrumentation capturing step, latency, tokens, cost, scenario, fallback. `ai_call_logs` table. `/api/ai/health` endpoint returning volume, latency, fallback rate, cost/week. Plus per-request action traces.
- **RAG / User-Grounded Retrieval (R3):** Retrieves user's most-repeated recent foods from their own logs, injects prior macros into the LLM estimator prompt. Retrieval path: index → retrieve → inject → generate → validate.
- **Agentic Loop (R4):** Post-execution LLM proposes follow-up actions on the same typed Action boundary. Bounded at 3 steps. Validated against Zod discriminated union. Each step observability-logged.
- **Security:** Row-Level Security, server-derived user ID (never trusts client), fail-closed service-role key, per-IP rate limiting, ownership verification (404 over 403).

**Testing:** 116 unit tests across 12 files (2.4s). Real-model eval harness runs separately. Expo SDK 54 + Supabase (PostgreSQL, Auth, RLS) + OpenRouter (Claude Haiku 4.5) + EAS Hosting.

---

### PMLaD — Multi-Tenant Property Management SaaS

Production property management platform with org→entity→property→unit→resident hierarchy, multi-layered tenant isolation, and staged Azure CD.

**Key systems:**
- **Defense-in-depth tenant isolation:** 4 layers — ALS context → Prisma extended-client auto-scoping → OrgEntityGuard → FORCE RLS on all 12 tenant tables. System hard-fails at boot on RLS misconfiguration. RLS re-verified in CI + staging.
- **CI/CD:** GitHub Actions CI (lint, typecheck, 80%+ coverage gate, RLS verification, migration/OpenAPI drift checks, Playwright E2E) → CD (build+push ACR → staging Container Apps → smoke + staging RLS → manual-approval prod + `prisma migrate deploy`).
- **Append-only events:** Hybrid audit log with workflow state machines — idempotent validateTransition, correlationId dedup. Temporal deferred decision.
- **Infrastructure:** Azure Container Apps, ACR, Azure PostgreSQL Flexible PG16, Azure Key Vault, Azure Front Door, Sentry.

*TypeScript, Next.js 15.5, NestJS 10, Prisma, PostgreSQL 16, Clerk, React 19, Zod, Tailwind v4, shadcn/ui, Azure, Sentry*

---

## Technical Skills

| Category | Skills |
|----------|--------|
| **Languages** | TypeScript, JavaScript, Python, SQL |
| **Frontend** | React 19, Next.js 16 (App Router), Expo SDK 54, React Native, Tamagui, Tailwind v4, shadcn/ui, Astro, Svelte |
| **Backend** | Node.js, NestJS, FastAPI, Express, Python (SQLAlchemy, Polars, Pydantic) |
| **AI / LLM** | OpenRouter, Claude, Prompt Engineering, LLM Evals (golden sets, regression floors), AI Observability (per-call latency/cost/tokens), RAG (user-grounded retrieval→generation), Agentic Loops (bounded tool-calling on typed actions) |
| **Database** | PostgreSQL, Supabase (RLS, auth, realtime), Prisma, SQLite, SQLAlchemy, Alembic |
| **Security** | Row-Level Security, Clerk Auth, Supabase Auth, JWT verification, fail-closed architecture, RBAC, rate limiting, trust-boundary design |
| **Testing** | Vitest, Jest, pytest, Playwright, Coverage gates, Contract tests, Real-model eval harnesses |
| **DevOps** | GitHub Actions, Azure Container Apps, Docker, EAS Hosting, Railway, Cloudflare Pages, Staged deployments with manual prod gates |
| **Infrastructure** | Docker Compose, Uvicorn, Azure PostgreSQL, Key Vault, Front Door, Sentry, OTel tracing |
| **Tools** | Agent-driven development (Claude Code, Cursor), tmux, git worktrees, Turborepo, Zod, gorp, Linear |

---

## Additional

- **Deployed products:** [app.guavabi.com](https://app.guavabi.com), [guavaai.ai](https://guavaai.ai), routineme (EAS Hosting)
- **Interview-relevant:** Every project claim traces to a repo commit, test result, or documented decision. Evals methodology (golden sets, regression floors, LLM-as-judge) demonstrable across routineme and guavabi. Trust-boundary design documented in guavabi architecture. Agent governance model defined in guava-os ADR.

---

*Resume constrained to repo-verifiable evidence. Every claim about AI features, security, testing, and deployment traces to a commit, test result, or documented decision in the corresponding repository.*