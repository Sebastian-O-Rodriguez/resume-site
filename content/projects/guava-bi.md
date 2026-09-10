<p>Operational data rarely lives in one place: sales in the POS, inventory elsewhere, purchasing in invoices. Guava BI turns that fragmentation into decision intelligence for operations.</p>

<h2>The trust boundary</h2>

<p>An AI that computes revenue is dangerous, because it will confidently get it wrong. An AI that interprets messy data — recognizing that <code>net_sales</code>, <code>revenue_total</code>, and <code>sales_amount</code> mean the same thing — is genuinely useful, as long as the arithmetic stays deterministic.</p>

<figure class="arch-figure" aria-label="Guava BI data flow">
  <div class="arch-flow" role="list">
    <span class="arch-step" role="listitem">Operational data</span>
    <span class="arch-arrow" aria-hidden="true">→</span>
    <span class="arch-step" role="listitem">Profile</span>
    <span class="arch-arrow" aria-hidden="true">→</span>
    <span class="arch-step" role="listitem">Interpret</span>
    <span class="arch-arrow" aria-hidden="true">→</span>
    <span class="arch-step" role="listitem">Validate</span>
    <span class="arch-arrow" aria-hidden="true">→</span>
    <span class="arch-step" role="listitem">Deterministic metrics</span>
    <span class="arch-arrow" aria-hidden="true">→</span>
    <span class="arch-step" role="listitem">Dashboards · Chat</span>
  </div>
</figure>

<h2>What I built</h2>

<p>So the boundary became the design: AI handles ambiguity, code owns the numbers. Interpretations are profiled and validated before they reach the metric layer, and every metric keeps a traceable path back to its source. Dashboards, chat, and recommendations all draw from the same deterministic layer, so no answer floats free of the underlying data.</p>
