---
description: Route a planning request through the guava-os planning skill
---
$ARGUMENTS

This is a planning request. Route it through guava-os (no manual path
steering, no Linear MCP):

1. Read `~/dev/guava-os/.guava-os/PLAYBOOK.md`, then the planning skill
   `~/dev/guava-os/.omp/skills/planning/SKILL.md`.
2. Read `.guava-os/config.json` + live Linear state for this project
   (`resume-site`) via guava-os tooling.
3. Produce a Linear-ready sprint: canonical `GUA-###` ids (from `pm create`
   output), one persona label per child, children per parent ≤
   `max_subtasks_per_parent` (3, enforced via V305), DoR via (run from this
   repo root so the project config loads; binary path below):
   `~/dev/guava-os/.guava-os/bin/guava-os pm search --json |
   ~/dev/guava-os/.guava-os/bin/guava-os validate` exiting 0.