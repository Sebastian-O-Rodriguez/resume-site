<p>Property operations break down when work is scattered across spreadsheets, messages, and point tools. PMLaD brings properties, tenants, maintenance, payments, and field work into one system.</p>

<h2>The problem</h2>

<p>No single workflow was hard. The hard part was keeping the moving parts connected — a maintenance issue delays a unit turn, which affects occupancy, which affects revenue. If those links get lost between handoffs, the operation falls apart.</p>

<figure class="arch-figure" aria-label="PMLaD operational model">
  <div class="arch-flow" role="list">
    <span class="arch-step" role="listitem">Property</span>
    <span class="arch-arrow" aria-hidden="true">→</span>
    <span class="arch-step" role="listitem">Units</span>
    <span class="arch-arrow" aria-hidden="true">→</span>
    <span class="arch-step" role="listitem">Tenants · Leases</span>
    <span class="arch-arrow" aria-hidden="true">→</span>
    <span class="arch-step" role="listitem">Maintenance · Payments</span>
    <span class="arch-arrow" aria-hidden="true">→</span>
    <span class="arch-step" role="listitem">Portfolio view</span>
  </div>
</figure>

<h2>The hard engineering choice</h2>

<p>I modeled the operation as one connected system, then scoped authority to the work with a four-layer RLS schema. An owner, manager, tenant, and field worker see the same system but can only act on what they're responsible for — clear accountability today, a safer foundation for automation later.</p>
