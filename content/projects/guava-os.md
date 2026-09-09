<h1>guava-os</h1>

<p align="center"><strong>An operating system for planning, executing, validating, and improving agent-assisted software delivery.</strong></p>

<p>
Coding agents make implementation faster. guava-os is the system around that work: turn an approved plan into bounded tasks, give each task the right context and capabilities, validate the result before it moves forward, and use delivery friction to improve how future work runs.
</p>

<hr>

<h2>The Core Loop</h2>

<p>
The model is simple: plan deliberately, execute bounded work, validate before promotion, then improve the system from what you learned.
</p>

<pre><code class="language-mermaid">flowchart LR
    A["Plan"] --&gt; B["Execute"]
    B --&gt; C["Validate"]
    C --&gt; D["Ship"]
    D --&gt; E["Learn"]
    E -.-&gt; A</code></pre>

<p align="center"><em>Plan the work. Run it with clear boundaries. Validate the result. Feed what you learn back into the system.</em></p>

<p>
That loop is the central idea behind guava-os. The agents are important, but they are only one part of the delivery system.
</p>

<hr>

<h2>Plan Before Execution</h2>

<p>
Work starts with dialogue and planning, not with an agent immediately editing code.
</p>

<p>
The goal is to establish what should happen, what belongs in the sprint, what depends on something else, and what “done” means. Once that plan is approved, it becomes durable project state that the repository can act on.
</p>

<blockquote>
<strong>Design principle:</strong> Decide what should happen before deciding how to implement it.
</blockquote>

<p>
That gives agents freedom inside a task without giving them freedom to silently redefine the task.
</p>

<hr>

<h2>Turn the Plan Into Bounded Work</h2>

<p>
When execution starts, the in-repo agent already has the planned sprint work available.
</p>

<p>
It takes those tasks, delegates them, and prepares the right execution context for each one.
</p>

<pre><code class="language-mermaid">flowchart LR
    A["Planned Task"] --&gt; D["Execution Context"]
    B["Persona"] --&gt; D
    C["Relevant Skills"] --&gt; D
    D --&gt; E["Delegated Agent"]</code></pre>

<p align="center"><em>The task, role, and relevant capabilities travel together.</em></p>

<p>
A frontend task, infrastructure change, database migration, or review pass should not begin with the same generic agent setup. The relevant persona and reusable skills are activated for the work being performed.
</p>

<p>
That keeps tasks narrower, reduces repeated orientation, and makes delegation more consistent across projects.
</p>

<hr>

<h2>Use Models for Judgment, Code for Rules</h2>

<p>
Not every part of the workflow needs another model call.
</p>

<p>
guava-os uses deterministic scripts and repository controls wherever the requirement can be expressed clearly in code.
</p>

<ul>
  <li>Pre-hooks load known task and project context before execution</li>
  <li>Pre-commit checks catch predictable failures early</li>
  <li>Tests, type checks, formatting, and structural checks validate the work</li>
  <li>Staging and repository rules control what can move forward</li>
</ul>

<blockquote>
<strong>Rule of thumb:</strong> Use models for judgment and implementation. Use deterministic code for invariants.
</blockquote>

<p>
This keeps the flexible parts flexible without making basic workflow correctness probabilistic.
</p>

<hr>

<h2>Validate Before Promotion</h2>

<p>
An agent finishing a task does not make the task complete.
</p>

<p>
The work still has to pass QA, repository checks, staging, and the required approval before it can move to production.
</p>

<pre><code class="language-mermaid">flowchart LR
    A["Agent Work"] --&gt; B["QA &amp; Checks"]
    B --&gt; C["Staging"]
    C --&gt; D["Approval"]
    D --&gt; E["Production"]</code></pre>

<p align="center"><em>Execution produces a candidate change. Validation and approval determine whether it ships.</em></p>

<p>
This separation matters because execution and authority are different responsibilities. Agents can produce work quickly without becoming the final authority over what reaches production.
</p>

<hr>

<h2>Make the Workflow Visible</h2>

<p>
Progress, blockers, validation results, and handoffs should be visible while work is happening, not reconstructed afterward.
</p>

<p>
Telemetry is built into the process so the system can answer simple operational questions:
</p>

<ul>
  <li>What is running?</li>
  <li>What is blocked?</li>
  <li>What failed validation?</li>
  <li>What is waiting for approval?</li>
  <li>Where does the same friction keep appearing?</li>
</ul>

<p>
That last question turns visibility into something more useful than monitoring. It becomes input to system improvement.
</p>

<hr>

<h2>Learn Across Projects</h2>

<p>
guava-os is designed to improve from the work happening across projects, not just inside one repository.
</p>

<p>
Repeated friction—missing context, weak skills, manual steps, unreliable checks, recurring blockers—is logged and reviewed. When the pattern is worth fixing, it becomes infrastructure work.
</p>

<pre><code class="language-mermaid">flowchart LR
    A["Project Friction"] --&gt; B["Identify Pattern"]
    B --&gt; C["Infra Sprint"]
    C --&gt; D["Improve Shared System"]
    D --&gt; E["Future Projects"]</code></pre>

<p align="center"><em>Repeated friction becomes shared infrastructure improvement.</em></p>

<p>
The improvement might be a better skill, a new hook, stronger validation, clearer task structure, or better telemetry.
</p>

<p>
Because those capabilities can be shared across projects, one project can improve the operating system used by the next.
</p>

<hr>

<h2>The CLI Is Just One Interface</h2>

<p>
guava-os includes a CLI for inspecting and interacting with the workflow, but the CLI is not the product idea.
</p>

<p>
The important system is the loop behind it: durable planning, bounded delegation, relevant skill injection, deterministic controls, visible execution, validation, approval, and continuous improvement.
</p>

<pre><code class="language-bash">npm install
npm test
npm run gos -- status
npm run gos -- next</code></pre>

<p>
Per-project configuration lives in <code>.guava-os/config.json</code>. Project credentials and external integrations are provided through the environment.
</p>

<hr>

<h2>Where It Is Headed</h2>

<p>
The direction is toward more of the delivery loop running continuously with less manual coordination.
</p>

<p>
Planned work can be prepared automatically. Relevant skills can be activated per task. Validation can run immediately. Blockers can surface as they happen. Repeated friction can feed directly into infrastructure improvement.
</p>

<p>
The goal is not to give agents unrestricted authority. It is to make execution more autonomous while keeping planning, validation, promotion, and production control explicit.
</p>

<blockquote>
<strong>Product direction:</strong> Increase execution autonomy while keeping delivery authority clear and controlled.
</blockquote>

<hr>

<h2>About guava-os</h2>

<p>
guava-os is a working model for agent-assisted software delivery built around one idea: faster implementation only helps if planning, context, validation, and feedback improve with it.
</p>

<p>
The system combines reusable skills, task-aware delegation, deterministic hooks and checks, workflow visibility, and cross-project learning into one operating loop.
</p>
