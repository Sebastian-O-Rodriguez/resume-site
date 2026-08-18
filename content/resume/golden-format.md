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

Sources: Tech Interview Handbook (resume), LockedIn AI + Resumly AI (2026 SWE format), Careery AI-Engineer Resume Guide (2026), indeed ATS guide, Jobscan stat via Resume Optimizer Pro.

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
| Technical Skills | 4 | 4 category lines, keyword-dense (TypeScript/Python; React/Next/Expo/Tailwind; OpenRouter/LLM evals/RAG/agentic loops/Supabase RLS; FastAPI/Postgres/Azure/Docker/CI) |
| Experience | 13–15 | Guava AI 5–6 (founder, 3 bullets); Scale AI 4 (2 bullets, metrics 25%→75%, 250→25k); Salesforce 2 (1 bullet) |
| Projects | 6–8 | RoutineMe, PMLaD — mini-role: 1 outcome line + 1 decision/metric line each |
| Education | 2 | single two-line entry (Carnegie Mellon, 2020) |
| **Total** | ~32–34 | fits 1 letter page at 9–9.5pt, 10–11mm margins |

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