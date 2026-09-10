<p>Guava OS is the system I use to run parallel AI coding agents: plan deliberately, dispatch bounded work, and validate before anything ships.</p>

<p>It started as a loop I kept repeating by hand — decompose a goal, brief an agent, review the diff — until the repetition begged to be codified. The system is TypeScript end to end, with Linear as the source of truth and deterministic gates deciding what moves forward.</p>

<p>The full story — the orchestration loop, task lifecycle, review gates, and what I learned building it — lives in the case study.</p>
