# Resume Site — governed by guava-os

Resume Site is a registered guava-os consumer. Planning and execution go through the shared guava-os control plane (~/dev/guava-os).

## Planning requests
When asked to plan (a sprint, a request, /planning):
1. Read the guava-os playbook: ~/dev/guava-os/.guava-os/PLAYBOOK.md
2. Follow the planning skill: ~/dev/guava-os/.omp/skills/planning/SKILL.md
3. Read this repo's config (.guava-os/config.json) + live Linear state via guava-os tooling. Sprint scope comes from the repo's domain docs, not the agent's head.
4. Produce a Linear-ready sprint: canonical GUA-### ids (pm create prints them), one persona label per child, children per parent ≤ max_subtasks_per_parent, DoR = `pm search --json | validate` exits 0.

## Tooling
Use only guava-os tooling; never Linear MCP directly. Run the CLI from THIS repo root so it loads this project's .guava-os/config.json (project, personas, invariants); the binary lives in the guava-os checkout:
  ~/dev/guava-os/.guava-os/bin/guava-os pm <cmd>