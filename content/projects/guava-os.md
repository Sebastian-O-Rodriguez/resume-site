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

<figure class="mermaid-figure"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 668.482 134.9" width="668.482" height="134.9" style="--bg:#FFFFFF;--fg:#27272A;background:var(--bg)">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap');
  text { font-family: 'Inter', system-ui, sans-serif; }
  svg {
    /* Derived from --bg and --fg (overridable via --line, --accent, etc.) */
    --_text:          var(--fg);
    --_text-sec:      var(--muted, color-mix(in srgb, var(--fg) 60%, var(--bg)));
    --_text-muted:    var(--muted, color-mix(in srgb, var(--fg) 40%, var(--bg)));
    --_text-faint:    color-mix(in srgb, var(--fg) 25%, var(--bg));
    --_line:          var(--line, color-mix(in srgb, var(--fg) 50%, var(--bg)));
    --_arrow:         var(--accent, color-mix(in srgb, var(--fg) 85%, var(--bg)));
    --_node-fill:     var(--surface, color-mix(in srgb, var(--fg) 3%, var(--bg)));
    --_node-stroke:   var(--border, color-mix(in srgb, var(--fg) 20%, var(--bg)));
    --_group-fill:    var(--bg);
    --_group-hdr:     color-mix(in srgb, var(--fg) 5%, var(--bg));
    --_inner-stroke:  color-mix(in srgb, var(--fg) 12%, var(--bg));
    --_key-badge:     color-mix(in srgb, var(--fg) 10%, var(--bg));
  }
</style>
<defs>
  <marker id="arrowhead" markerWidth="8" markerHeight="5" refX="7" refY="2.5" orient="auto">
    <polygon points="0 0, 8 2.5, 0 5" fill="var(--_arrow)" stroke="var(--_arrow)" stroke-width="0.75" stroke-linejoin="round" />
  </marker>
  <marker id="arrowhead-start" markerWidth="8" markerHeight="5" refX="1" refY="2.5" orient="auto-start-reverse">
    <polygon points="8 0, 0 2.5, 8 5" fill="var(--_arrow)" stroke="var(--_arrow)" stroke-width="0.75" stroke-linejoin="round" />
  </marker>
</defs>
<polyline class="edge" data-from="A" data-to="B" data-style="solid" data-arrow-start="false" data-arrow-end="true" points="108.626,66.525 144.626,66.525 144.626,58.45 156.626,58.45" fill="none" stroke="var(--_line)" stroke-width="1" marker-end="url(#arrowhead)" />
<polyline class="edge" data-from="B" data-to="C" data-style="solid" data-arrow-start="false" data-arrow-end="true" points="247.482,58.45 295.48199999999997,58.45" fill="none" stroke="var(--_line)" stroke-width="1" marker-end="url(#arrowhead)" />
<polyline class="edge" data-from="C" data-to="D" data-style="solid" data-arrow-start="false" data-arrow-end="true" points="384.856,58.45 432.856,58.45" fill="none" stroke="var(--_line)" stroke-width="1" marker-end="url(#arrowhead)" />
<polyline class="edge" data-from="D" data-to="E" data-style="solid" data-arrow-start="false" data-arrow-end="true" points="501.48199999999997,58.45 537.482,58.45 537.482,66.525 549.482,66.525" fill="none" stroke="var(--_line)" stroke-width="1" marker-end="url(#arrowhead)" />
<polyline class="edge" data-from="E" data-to="A" data-style="dotted" data-arrow-start="false" data-arrow-end="true" points="549.482,78.825 537.482,78.825 537.482,86.9 144.626,86.9 144.626,78.825 108.626,78.825" fill="none" stroke="var(--_line)" stroke-width="1" stroke-dasharray="4 4" marker-end="url(#arrowhead)" />
<g class="node" data-id="A" data-label="Plan" data-shape="rectangle">
  <rect x="40" y="54.224999999999994" width="68.626" height="36.900000000000006" rx="0" ry="0" fill="var(--_node-fill)" stroke="var(--_node-stroke)" stroke-width="0.75" />
  <text x="74.313" y="72.675" text-anchor="middle" font-size="13" font-weight="500" fill="var(--_text)" dy="4.55">Plan</text>
</g>
<g class="node" data-id="B" data-label="Execute" data-shape="rectangle">
  <rect x="156.626" y="40" width="90.856" height="36.900000000000006" rx="0" ry="0" fill="var(--_node-fill)" stroke="var(--_node-stroke)" stroke-width="0.75" />
  <text x="202.054" y="58.45" text-anchor="middle" font-size="13" font-weight="500" fill="var(--_text)" dy="4.55">Execute</text>
</g>
<g class="node" data-id="C" data-label="Validate" data-shape="rectangle">
  <rect x="295.48199999999997" y="40" width="89.374" height="36.900000000000006" rx="0" ry="0" fill="var(--_node-fill)" stroke="var(--_node-stroke)" stroke-width="0.75" />
  <text x="340.169" y="58.45" text-anchor="middle" font-size="13" font-weight="500" fill="var(--_text)" dy="4.55">Validate</text>
</g>
<g class="node" data-id="D" data-label="Ship" data-shape="rectangle">
  <rect x="432.856" y="40" width="68.626" height="36.900000000000006" rx="0" ry="0" fill="var(--_node-fill)" stroke="var(--_node-stroke)" stroke-width="0.75" />
  <text x="467.169" y="58.45" text-anchor="middle" font-size="13" font-weight="500" fill="var(--_text)" dy="4.55">Ship</text>
</g>
<g class="node" data-id="E" data-label="Learn" data-shape="rectangle">
  <rect x="549.482" y="54.224999999999994" width="79" height="36.900000000000006" rx="0" ry="0" fill="var(--_node-fill)" stroke="var(--_node-stroke)" stroke-width="0.75" />
  <text x="588.982" y="72.675" text-anchor="middle" font-size="13" font-weight="500" fill="var(--_text)" dy="4.55">Learn</text>
</g>
</svg></figure>

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

<figure class="mermaid-figure"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566.0989999999999 246.70000000000002" width="566.0989999999999" height="246.70000000000002" style="--bg:#FFFFFF;--fg:#27272A;background:var(--bg)">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap');
  text { font-family: 'Inter', system-ui, sans-serif; }
  svg {
    /* Derived from --bg and --fg (overridable via --line, --accent, etc.) */
    --_text:          var(--fg);
    --_text-sec:      var(--muted, color-mix(in srgb, var(--fg) 60%, var(--bg)));
    --_text-muted:    var(--muted, color-mix(in srgb, var(--fg) 40%, var(--bg)));
    --_text-faint:    color-mix(in srgb, var(--fg) 25%, var(--bg));
    --_line:          var(--line, color-mix(in srgb, var(--fg) 50%, var(--bg)));
    --_arrow:         var(--accent, color-mix(in srgb, var(--fg) 85%, var(--bg)));
    --_node-fill:     var(--surface, color-mix(in srgb, var(--fg) 3%, var(--bg)));
    --_node-stroke:   var(--border, color-mix(in srgb, var(--fg) 20%, var(--bg)));
    --_group-fill:    var(--bg);
    --_group-hdr:     color-mix(in srgb, var(--fg) 5%, var(--bg));
    --_inner-stroke:  color-mix(in srgb, var(--fg) 12%, var(--bg));
    --_key-badge:     color-mix(in srgb, var(--fg) 10%, var(--bg));
  }
</style>
<defs>
  <marker id="arrowhead" markerWidth="8" markerHeight="5" refX="7" refY="2.5" orient="auto">
    <polygon points="0 0, 8 2.5, 0 5" fill="var(--_arrow)" stroke="var(--_arrow)" stroke-width="0.75" stroke-linejoin="round" />
  </marker>
  <marker id="arrowhead-start" markerWidth="8" markerHeight="5" refX="1" refY="2.5" orient="auto-start-reverse">
    <polygon points="8 0, 0 2.5, 8 5" fill="var(--_arrow)" stroke="var(--_arrow)" stroke-width="0.75" stroke-linejoin="round" />
  </marker>
</defs>
<polyline class="edge" data-from="A" data-to="D" data-style="solid" data-arrow-start="false" data-arrow-end="true" points="169.61449999999996,58.45 183.35375,58.45 183.35375,123.35000000000001 192.647,123.35000000000001" fill="none" stroke="var(--_line)" stroke-width="1" marker-end="url(#arrowhead)" />
<polyline class="edge" data-from="B" data-to="D" data-style="solid" data-arrow-start="false" data-arrow-end="true" points="139.2335,123.35000000000001 183.35375,123.35000000000001 183.35375,123.35000000000001 192.647,123.35000000000001" fill="none" stroke="var(--_line)" stroke-width="1" marker-end="url(#arrowhead)" />
<polyline class="edge" data-from="C" data-to="D" data-style="solid" data-arrow-start="false" data-arrow-end="true" points="174.0605,188.25 183.35375,188.25 183.35375,123.35000000000001 192.647,123.35000000000001" fill="none" stroke="var(--_line)" stroke-width="1" marker-end="url(#arrowhead)" />
<polyline class="edge" data-from="D" data-to="E" data-style="solid" data-arrow-start="false" data-arrow-end="true" points="340.56,123.35000000000001 388.56,123.35000000000001" fill="none" stroke="var(--_line)" stroke-width="1" marker-end="url(#arrowhead)" />
<g class="node" data-id="A" data-label="Planned Task" data-shape="rectangle">
  <rect x="45.4135" y="40" width="124.20099999999998" height="36.900000000000006" rx="0" ry="0" fill="var(--_node-fill)" stroke="var(--_node-stroke)" stroke-width="0.75" />
  <text x="107.51399999999998" y="58.45" text-anchor="middle" font-size="13" font-weight="500" fill="var(--_text)" dy="4.55">Planned Task</text>
</g>
<g class="node" data-id="D" data-label="Execution Context" data-shape="rectangle">
  <rect x="192.647" y="104.9" width="147.913" height="36.900000000000006" rx="0" ry="0" fill="var(--_node-fill)" stroke="var(--_node-stroke)" stroke-width="0.75" />
  <text x="266.6035" y="123.35000000000001" text-anchor="middle" font-size="13" font-weight="500" fill="var(--_text)" dy="4.55">Execution Context</text>
</g>
<g class="node" data-id="B" data-label="Persona" data-shape="rectangle">
  <rect x="45.4135" y="104.9" width="93.82" height="36.900000000000006" rx="0" ry="0" fill="var(--_node-fill)" stroke="var(--_node-stroke)" stroke-width="0.75" />
  <text x="92.3235" y="123.35000000000001" text-anchor="middle" font-size="13" font-weight="500" fill="var(--_text)" dy="4.55">Persona</text>
</g>
<g class="node" data-id="C" data-label="Relevant Skills" data-shape="rectangle">
  <rect x="45.4135" y="169.8" width="128.647" height="36.900000000000006" rx="0" ry="0" fill="var(--_node-fill)" stroke="var(--_node-stroke)" stroke-width="0.75" />
  <text x="109.737" y="188.25" text-anchor="middle" font-size="13" font-weight="500" fill="var(--_text)" dy="4.55">Relevant Skills</text>
</g>
<g class="node" data-id="E" data-label="Delegated Agent" data-shape="rectangle">
  <rect x="388.56" y="104.9" width="137.539" height="36.900000000000006" rx="0" ry="0" fill="var(--_node-fill)" stroke="var(--_node-stroke)" stroke-width="0.75" />
  <text x="457.3295" y="123.35000000000001" text-anchor="middle" font-size="13" font-weight="500" fill="var(--_text)" dy="4.55">Delegated Agent</text>
</g>
</svg></figure>

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

<figure class="mermaid-figure"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 790.006 116.9" width="790.006" height="116.9" style="--bg:#FFFFFF;--fg:#27272A;background:var(--bg)">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap');
  text { font-family: 'Inter', system-ui, sans-serif; }
  svg {
    /* Derived from --bg and --fg (overridable via --line, --accent, etc.) */
    --_text:          var(--fg);
    --_text-sec:      var(--muted, color-mix(in srgb, var(--fg) 60%, var(--bg)));
    --_text-muted:    var(--muted, color-mix(in srgb, var(--fg) 40%, var(--bg)));
    --_text-faint:    color-mix(in srgb, var(--fg) 25%, var(--bg));
    --_line:          var(--line, color-mix(in srgb, var(--fg) 50%, var(--bg)));
    --_arrow:         var(--accent, color-mix(in srgb, var(--fg) 85%, var(--bg)));
    --_node-fill:     var(--surface, color-mix(in srgb, var(--fg) 3%, var(--bg)));
    --_node-stroke:   var(--border, color-mix(in srgb, var(--fg) 20%, var(--bg)));
    --_group-fill:    var(--bg);
    --_group-hdr:     color-mix(in srgb, var(--fg) 5%, var(--bg));
    --_inner-stroke:  color-mix(in srgb, var(--fg) 12%, var(--bg));
    --_key-badge:     color-mix(in srgb, var(--fg) 10%, var(--bg));
  }
</style>
<defs>
  <marker id="arrowhead" markerWidth="8" markerHeight="5" refX="7" refY="2.5" orient="auto">
    <polygon points="0 0, 8 2.5, 0 5" fill="var(--_arrow)" stroke="var(--_arrow)" stroke-width="0.75" stroke-linejoin="round" />
  </marker>
  <marker id="arrowhead-start" markerWidth="8" markerHeight="5" refX="1" refY="2.5" orient="auto-start-reverse">
    <polygon points="8 0, 0 2.5, 8 5" fill="var(--_arrow)" stroke="var(--_arrow)" stroke-width="0.75" stroke-linejoin="round" />
  </marker>
</defs>
<polyline class="edge" data-from="A" data-to="B" data-style="solid" data-arrow-start="false" data-arrow-end="true" points="150.122,58.45 198.122,58.45" fill="none" stroke="var(--_line)" stroke-width="1" marker-end="url(#arrowhead)" />
<polyline class="edge" data-from="B" data-to="C" data-style="solid" data-arrow-start="false" data-arrow-end="true" points="315.654,58.45 363.654,58.45" fill="none" stroke="var(--_line)" stroke-width="1" marker-end="url(#arrowhead)" />
<polyline class="edge" data-from="C" data-to="D" data-style="solid" data-arrow-start="false" data-arrow-end="true" points="450.06399999999996,58.45 498.06399999999996,58.45" fill="none" stroke="var(--_line)" stroke-width="1" marker-end="url(#arrowhead)" />
<polyline class="edge" data-from="D" data-to="E" data-style="solid" data-arrow-start="false" data-arrow-end="true" points="594.848,58.45 642.848,58.45" fill="none" stroke="var(--_line)" stroke-width="1" marker-end="url(#arrowhead)" />
<g class="node" data-id="A" data-label="Agent Work" data-shape="rectangle">
  <rect x="40" y="40" width="110.122" height="36.900000000000006" rx="0" ry="0" fill="var(--_node-fill)" stroke="var(--_node-stroke)" stroke-width="0.75" />
  <text x="95.061" y="58.45" text-anchor="middle" font-size="13" font-weight="500" fill="var(--_text)" dy="4.55">Agent Work</text>
</g>
<g class="node" data-id="B" data-label="QA &amp; Checks" data-shape="rectangle">
  <rect x="198.122" y="40" width="117.532" height="36.900000000000006" rx="0" ry="0" fill="var(--_node-fill)" stroke="var(--_node-stroke)" stroke-width="0.75" />
  <text x="256.88800000000003" y="58.45" text-anchor="middle" font-size="13" font-weight="500" fill="var(--_text)" dy="4.55">QA &amp; Checks</text>
</g>
<g class="node" data-id="C" data-label="Staging" data-shape="rectangle">
  <rect x="363.654" y="40" width="86.41" height="36.900000000000006" rx="0" ry="0" fill="var(--_node-fill)" stroke="var(--_node-stroke)" stroke-width="0.75" />
  <text x="406.859" y="58.45" text-anchor="middle" font-size="13" font-weight="500" fill="var(--_text)" dy="4.55">Staging</text>
</g>
<g class="node" data-id="D" data-label="Approval" data-shape="rectangle">
  <rect x="498.06399999999996" y="40" width="96.78399999999999" height="36.900000000000006" rx="0" ry="0" fill="var(--_node-fill)" stroke="var(--_node-stroke)" stroke-width="0.75" />
  <text x="546.4559999999999" y="58.45" text-anchor="middle" font-size="13" font-weight="500" fill="var(--_text)" dy="4.55">Approval</text>
</g>
<g class="node" data-id="E" data-label="Production" data-shape="rectangle">
  <rect x="642.848" y="40" width="107.158" height="36.900000000000006" rx="0" ry="0" fill="var(--_node-fill)" stroke="var(--_node-stroke)" stroke-width="0.75" />
  <text x="696.4269999999999" y="58.45" text-anchor="middle" font-size="13" font-weight="500" fill="var(--_text)" dy="4.55">Production</text>
</g>
</svg></figure>

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

<figure class="mermaid-figure"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 955.9900000000001 116.9" width="955.9900000000001" height="116.9" style="--bg:#FFFFFF;--fg:#27272A;background:var(--bg)">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap');
  text { font-family: 'Inter', system-ui, sans-serif; }
  svg {
    /* Derived from --bg and --fg (overridable via --line, --accent, etc.) */
    --_text:          var(--fg);
    --_text-sec:      var(--muted, color-mix(in srgb, var(--fg) 60%, var(--bg)));
    --_text-muted:    var(--muted, color-mix(in srgb, var(--fg) 40%, var(--bg)));
    --_text-faint:    color-mix(in srgb, var(--fg) 25%, var(--bg));
    --_line:          var(--line, color-mix(in srgb, var(--fg) 50%, var(--bg)));
    --_arrow:         var(--accent, color-mix(in srgb, var(--fg) 85%, var(--bg)));
    --_node-fill:     var(--surface, color-mix(in srgb, var(--fg) 3%, var(--bg)));
    --_node-stroke:   var(--border, color-mix(in srgb, var(--fg) 20%, var(--bg)));
    --_group-fill:    var(--bg);
    --_group-hdr:     color-mix(in srgb, var(--fg) 5%, var(--bg));
    --_inner-stroke:  color-mix(in srgb, var(--fg) 12%, var(--bg));
    --_key-badge:     color-mix(in srgb, var(--fg) 10%, var(--bg));
  }
</style>
<defs>
  <marker id="arrowhead" markerWidth="8" markerHeight="5" refX="7" refY="2.5" orient="auto">
    <polygon points="0 0, 8 2.5, 0 5" fill="var(--_arrow)" stroke="var(--_arrow)" stroke-width="0.75" stroke-linejoin="round" />
  </marker>
  <marker id="arrowhead-start" markerWidth="8" markerHeight="5" refX="1" refY="2.5" orient="auto-start-reverse">
    <polygon points="8 0, 0 2.5, 8 5" fill="var(--_arrow)" stroke="var(--_arrow)" stroke-width="0.75" stroke-linejoin="round" />
  </marker>
</defs>
<polyline class="edge" data-from="A" data-to="B" data-style="solid" data-arrow-start="false" data-arrow-end="true" points="173.09300000000002,58.45 221.09300000000002,58.45" fill="none" stroke="var(--_line)" stroke-width="1" marker-end="url(#arrowhead)" />
<polyline class="edge" data-from="B" data-to="C" data-style="solid" data-arrow-start="false" data-arrow-end="true" points="349.74,58.45 397.74,58.45" fill="none" stroke="var(--_line)" stroke-width="1" marker-end="url(#arrowhead)" />
<polyline class="edge" data-from="C" data-to="D" data-style="solid" data-arrow-start="false" data-arrow-end="true" points="504.15700000000004,58.45 552.157,58.45" fill="none" stroke="var(--_line)" stroke-width="1" marker-end="url(#arrowhead)" />
<polyline class="edge" data-from="D" data-to="E" data-style="solid" data-arrow-start="false" data-arrow-end="true" points="733.4150000000001,58.45 781.4150000000001,58.45" fill="none" stroke="var(--_line)" stroke-width="1" marker-end="url(#arrowhead)" />
<g class="node" data-id="A" data-label="Project Friction" data-shape="rectangle">
  <rect x="40" y="40" width="133.09300000000002" height="36.900000000000006" rx="0" ry="0" fill="var(--_node-fill)" stroke="var(--_node-stroke)" stroke-width="0.75" />
  <text x="106.54650000000001" y="58.45" text-anchor="middle" font-size="13" font-weight="500" fill="var(--_text)" dy="4.55">Project Friction</text>
</g>
<g class="node" data-id="B" data-label="Identify Pattern" data-shape="rectangle">
  <rect x="221.09300000000002" y="40" width="128.647" height="36.900000000000006" rx="0" ry="0" fill="var(--_node-fill)" stroke="var(--_node-stroke)" stroke-width="0.75" />
  <text x="285.41650000000004" y="58.45" text-anchor="middle" font-size="13" font-weight="500" fill="var(--_text)" dy="4.55">Identify Pattern</text>
</g>
<g class="node" data-id="C" data-label="Infra Sprint" data-shape="rectangle">
  <rect x="397.74" y="40" width="106.417" height="36.900000000000006" rx="0" ry="0" fill="var(--_node-fill)" stroke="var(--_node-stroke)" stroke-width="0.75" />
  <text x="450.9485" y="58.45" text-anchor="middle" font-size="13" font-weight="500" fill="var(--_text)" dy="4.55">Infra Sprint</text>
</g>
<g class="node" data-id="D" data-label="Improve Shared System" data-shape="rectangle">
  <rect x="552.157" y="40" width="181.25799999999998" height="36.900000000000006" rx="0" ry="0" fill="var(--_node-fill)" stroke="var(--_node-stroke)" stroke-width="0.75" />
  <text x="642.7860000000001" y="58.45" text-anchor="middle" font-size="13" font-weight="500" fill="var(--_text)" dy="4.55">Improve Shared System</text>
</g>
<g class="node" data-id="E" data-label="Future Projects" data-shape="rectangle">
  <rect x="781.4150000000001" y="40" width="134.575" height="36.900000000000006" rx="0" ry="0" fill="var(--_node-fill)" stroke="var(--_node-stroke)" stroke-width="0.75" />
  <text x="848.7025000000001" y="58.45" text-anchor="middle" font-size="13" font-weight="500" fill="var(--_text)" dy="4.55">Future Projects</text>
</g>
</svg></figure>

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
