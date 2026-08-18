# Sebastian O Rodriguez — Resume: Golden Format Spec (SWE)

Reference: `content/resume/reference/Anthony_Rodriguez_2026-08-15.pdf` (operator's "golden resume").
Scope: one-page, letter, software-engineer resume. This spec is the build input for the resume generator; deviations require operator sign-off.

## 1. Golden mechanics (from Anthony's PDF — KEEP)

- **Header:** Name centered, single centered contact line (`phone | email | LinkedIn`). NO title line ("Full-Stack AI Engineer" removed — operator decision).
- **Alignment:** Date ranges right-aligned on the same row as the item they date (company / degree). Location right-aligned on the secondary row.
- **Education:** Two-line entries — `degree + right-aligned dates` / `school + right-aligned location`.
- **Experience:** Company bold + dates right; subsequent role lines are sub-bullets (`•`), each with `role + dates right` and 1–3 lines of result text.
- **Bullets:** Quantified results, tight (1–3 lines each), no filler.
- **Skills:** Compact multi-line block (category: items), not a grid of rows; minimal chrome.
- **Page:** One page, letter; quiet vertical rhythm; no section rules in body (headers are small caps-ish bold), no decorations.

## 2. Research divergences — SWE trends that VEER from Anthony (ADOPT)

Sources: Tech Interview Handbook (resume), BeamJobs "34 SWE Resume Examples & Guide for 2026", Pika Resume "10 SWE Resume Examples That Got Interviews (2026)", I Got An Offer "Tech Resume Examples (11+ real FAANG resumes)", LockedIn AI + Resumly AI (2026 SWE format), Careery AI-Engineer Resume Guide (2026), indeed ATS guide, Jobscan stat via Resume Optimizer Pro; axialsearch "AI Engineering Job Market: 43,500 Postings Analyzed" (growth + remote salary signal). Jobs logged to `content/resume/research/jobs.csv` (40 postings, 2026-05 → 2026-08).

**FORMAT DECISION (confirmed, operator-leaning IN-FLOW / ATS-clean):** standard reverse-chronological one-pager, standard section headers (Contact, Summary, Technical Skills, Experience, Projects, Education), plain single-column ATS-parseable text, XYZ quantified bullets (`action + what + metric/result`), keyword-dense skills section that mirrors posting vocabulary, 1 page for sub-senior, 2 only for senior. Rationale: source set is unanimous (Tech Interview Handbook = "less is more", 1 page; BeamJobs/Pika = quantified numbers in every bullet, reverse order, standard headers; ATS requirement for tables/images = must not use). This posture fits BOTH FAANG (measured, quantified, standard) and smaller companies (projects prominence, founder ownership).

1. **ATS-first plain structure** — single column, standard fonts, NO tables/text boxes/graphics in the parsed source. Anthony's file is plain-text clean (no tables) → keep it that way; the generator must not emit `<table>` for skills.
2. **Technical Skills is a keyword-dense section** — categorized (Languages / Frameworks / AI-LLM (APIs, RAG, vector, evals) / Data & Infra), exact tool names, full terms + acronyms. Place EARLY (right after Summary) — diverges from Anthony (skills last).
3. **Projects as a primary section** — 2–3 high-impact items formatted like mini-roles (title, one-line outcome, 1 bullet of the hardest technical decision, quantified result). Anthony has NO projects section; SWE requires it. Evidence-led (metrics, test counts, eval scores).
4. **Bullet formula** — `action verb + what you built + technical specifics + quantified impact` on every bullet. Anthony's bullets already follow this; make it uniform.
5. **Education bottom + compressed** for experienced (2020 grad, 5+ yrs) — diverges from Anthony (education near top).
6. **One page; "less is more"** — top 2–3 achievements per role, not every system. 72% of engineering resumes fail ATS (Jobscan 2024, via Resume Optimizer Pro) — plain format is a correctness requirement.
7. **No Interests/Awards/Publications sections** unless one line — Anthony has them; SWE trend drops them for space/ATS noise.

## 3. Final section order + line budgets (target ~34 lines @ 9–9.5pt, letter)

| Section | Lines | Notes |
|---|---|---|
| Header (name + contact) | 3 | name centered; one contact line |
| Summary | 2–3 | mirrors "Full-Stack AI Engineer" target; 2 sentences max |
| Technical Skills | 4 | 4 category lines, keyword-dense (incl. claim-later tools: MCP, LangGraph, pgvector/embeddings, AWS, Kubernetes, Langfuse/LangSmith, Claude Code/Cursor; see §3b) |
| Experience | 13–15 | Guava AI 5–6 (founder, 3 bullets); Scale AI 4 (2 bullets, metrics 25%→75%, 250→25k); Salesforce 2 (1 bullet) |
| Projects | 6–8 | RoutineMe, PMLaD — mini-role: 1 outcome line + 1 decision/metric line each |
| Education | 2 | single two-line entry (Carnegie Mellon, 2020) |
| **Total** | ~32–34 | fits 1 letter page at 9–9.5pt, 10–11mm margins |

## 3b. Skills — additions for this build (operator-approved GUA-397)

Research (market-spec: 6 roles, 37→40 postings; axialsearch market data) shows these are high-value for the AI/Full-Stack target lanes. Split by evidence status so the operator knows what to build.

**CLAIM-NOW (evidenced in repo/site — no caveat needed):**
| Skill | Why | Evidence |
|---|---|---|
| MCP / agent tool ecosystem | top-demand agent skill; matches guava-os | HIGH (guava-os tool routing) |
| LLM-as-judge / golden-set evals / regression floors | hard AI-posting expectation | HIGH (routineme/guava-os eval harness) |
| AI-assisted development (Claude Code, Cursor) | explicitly evaluated ("defend generated code") | MED-HIGH |
| Docker / containers | market standard | HIGH (guavabi/PMLaD deploys) |
| LLM/agent observability (per-call logs, eval dashboards) | AI-lane differentiator | MED (routineme ai_call_logs, /health) |
| Python AI/data stack (FastAPI, SQLAlchemy, Pydantic, Polars) | Applied-AI lanes are Python-first | HIGH |
| Guardrails / rate limiting / eval-driven release | "guarded production AI" signal | MED |

**CLAIM-LATER (added now per operator — UN-evidenced, operator builds evidence in projects):**
| Skill | Why high-value | Build-evidence path |
|---|---|---|
| LangGraph / agent orchestration frameworks | #1 agentic-AI demand; matches guava-os | add orchestration layer / route a task graph in guava-os |
| Vector DBs + embeddings (pgvector, embedding indexes) | RAG-at-scale is a hard expectation | add pgvector + embedding search to routineme RAG |
| AWS (with existing Azure) | AWS/GCP dominate postings; only Azure claimed | deploy guavabi or routineme to AWS (EKS/Lambda) |
| Kubernetes | commonplace in senior infra postings | containerize a service + k8s manifest |
| LLM observability tooling (Langfuse/LangSmith) | market-optional, differentiator | swap/stub the per-call log into a Langfuse-style trace |

Claim-later skills appear on the resume in the Technical Skills line with exact tool names, per operator instruction ("add with no evidence, then LMK"). The CSV (`jobs.csv`) and this section together are the "what I added & why" report.

## 4. Mechanics map (implementation)

- Generator: `content/resume/resume.md` (gfm) + `scripts/resume.css` (print) via `scripts/build-pdf.sh` (pandoc → weasyprint). Right-aligned date rows via minimal raw-HTML rows (`.rolerow > .dates`) — pandoc gfm passes raw HTML through; no `<table>` anywhere.
- Skills as definition-style lines (`.skill-line`), not a table.
- Reduced line-height already tuned (see CSS); adjust only if spec line budgets overshoot.
- Output artifact: `public/resume.pdf` (1 page, letter). `public/resume.md` synced from source.

## 5. Acceptance for build

1. `pdfinfo` → Pages: 1, letter.
2. Header has NO title line; name centered + one contact line.
3. Right-aligned dates on Experience + Education rows (visual render check).
4. Skills = 4 compact category lines, no table.
5. Line budgets per section within ±10% (render check).
6. Operator review gate before Done.