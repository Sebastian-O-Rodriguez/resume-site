<h1>Guava BI: Decision Intelligence for Operational Data</h1>

<p><em>A product and engineering showcase of Guava BI.</em></p>

<h2>Turn Data Into Decisions</h2>

<p>
Businesses typically have the answers they need, but the story is hidden in the data. Guava BI connects fragmented operational data to reveal the whole story, then lets you dig deeper where it matters most.
</p>

<p>
Skip the grunt work of curating data and get straight to understanding the business and making better decisions.
</p>

<p align="center">
  <a href="/articles/guava-bi/product-pulse.png">
    <img src="/articles/guava-bi/product-pulse.png" alt="Guava BI Business Pulse dashboard" width="65%">
  </a>
</p>

<p align="center"><em>Business Pulse: Adaptive KPIs, trends, drivers, and insights.</em></p>

<hr>

<h2>Fragmented Data, Fragmented Decisions</h2>

<p>
Operational data rarely lives in one place. Sales may sit in a POS or ERP, inventory somewhere else, purchasing in invoices and exports, and historical context across spreadsheets and databases with incompatible schemas.
</p>

<p>
The data exists. Getting it into a form that can reliably answer business questions is the hard part. Guava BI is built to answer questions like:
</p>

<ul>
  <li>What should we reorder, when, and in what quantity?</li>
  <li>Which products are losing sales because inventory is too low?</li>
  <li>Where are overstock and shrinkage creating unnecessary cost?</li>
  <li>How are products and categories performing across locations and time?</li>
  <li>What changed, why did it change, and what needs attention?</li>
</ul>

<p>
Traditional BI becomes useful after the data has been modeled. Guava BI focuses on the harder step before that: turning fragmented operational data into a reliable business model that can support analysis as the data changes.
</p>

<hr>

<h2>See, Ask, Act</h2>

<h3>See What Matters</h3>

<p>
Guava BI adapts KPIs, trends, inventory risks, product movement, and outliers to the data available, so attention stays on the signals that matter.
</p>

<p>
Move quickly from broad performance to the products, categories, and conditions driving the result.
</p>

<p align="center">
  <a href="/articles/guava-bi/product-dashboard.png">
    <img src="/articles/guava-bi/product-dashboard.png" alt="Guava BI operational dashboard" width="60%">
  </a>
</p>

<p align="center"><em>Operational Dashboard: Business performance, inventory risk, and product movement.</em></p>

<h3>Ask the Business</h3>

<p>
Ask questions in plain language, change filters, drill into categories, and investigate anomalies without rebuilding reports.
</p>

<p>
Chat uses the same analytical layer as the dashboards, so every answer stays grounded in the underlying business data.
</p>

<p align="center">
  <a href="/articles/guava-bi/product-chat-answer.png">
    <img src="/articles/guava-bi/product-chat-answer.png" alt="Guava BI chat analysis" width="60%">
  </a>
</p>

<p align="center"><em>Chat: Ask, investigate, filter, and drill into the business.</em></p>

<h3>Act on What Matters</h3>

<p>
Spotlight surfaces the risks, changes, and opportunities that may require action, including stockout risk, overstock, shrinkage, fast-moving products, and customer decline.
</p>

<p>
The goal is to move from what happened, to why it happened, to what deserves attention next.
</p>

<p align="center">
  <a href="/articles/guava-bi/product-spotlight.png">
    <img src="/articles/guava-bi/product-spotlight.png" alt="Guava BI Spotlight recommendations" width="60%">
  </a>
</p>

<p align="center"><em>Spotlight: Prioritized risks, changes, and opportunities.</em></p>

<hr>

<h2>From Raw Data to Trusted Metrics</h2>

<p>
Guava BI connects operational sources, interprets their structure, and maps them into a shared business model. Deterministic metrics then power dashboards, chat, and recommendations from the same underlying data.
</p>

<pre><code class="language-mermaid">flowchart LR
    A["Operational Data&lt;br/&gt;ERP · POS · CSV · Databases"] --&gt; B["Profile"]
    B --&gt; C["Interpret"]
    C --&gt; D["Validate"]
    D --&gt; E["Business Model"]
    E --&gt; F["Deterministic Metrics"]
    F --&gt; G["Dashboards · Chat · Recommendations"]</code></pre>

<p>
This separation matters because operational data is messy, but business metrics cannot be.
</p>

<hr>

<h2>AI Interprets. Code Calculates.</h2>

<p>
Operational datasets rarely agree on structure or language. Revenue might appear as <code>net_sales</code>, <code>revenue_total</code>, or <code>sales_amount</code>. Recognizing that these fields represent the same business concept requires context and semantic reasoning.
</p>

<p>
Calculating revenue does not.
</p>

<blockquote>
<strong>AI handles ambiguity. Deterministic systems own the numbers.</strong>
</blockquote>

<h3>Interpret With Evidence</h3>

<p>
Guava BI profiles unfamiliar data before interpreting it. Types, null rates, cardinality, distributions, and candidate keys provide evidence that constrains semantic mapping and reduces unsupported assumptions.
</p>

<h3>Constrain AI to Ambiguity</h3>

<p>
AI assists where semantic reasoning adds value, such as mapping unfamiliar source fields to business concepts. It does not own business arithmetic or become the source of record for metrics.
</p>

<h3>Validate Before Calculation</h3>

<p>
Interpretations must pass structural and semantic checks before reaching the metric layer. Referenced columns must exist, joins must resolve, and measures must map to compatible data.
</p>

<h3>Keep Metrics Deterministic</h3>

<p>
Once interpretation is complete, deterministic systems own the calculation path. Revenue, inventory value, stockout risk, shrinkage, trends, and other metrics are computed through controlled logic.
</p>

<h3>Preserve Traceability</h3>

<p>
Metrics retain the context needed to explain where they came from, including source data, calculation logic, and relevant time windows.
</p>

<hr>

<h2>Learning From Use</h2>

<p>
Filters, drill-downs, corrections, report usage, and conversations provide signals about how users understand their business.
</p>

<p>
As Guava BI grows, those signals can support better semantic interpretation and model behavior. Building that learning loop efficiently and safely remains an active area of product research.
</p>

<pre><code class="language-mermaid">flowchart LR
    A["Dashboards · Chat · Recommendations"] --&gt; B["User Signals"]
    B --&gt; C["Semantic Refinement"]
    C --&gt; D["Validation"]
    D --&gt; A</code></pre>

<hr>

<h2>About This Showcase</h2>

<p>
This repository showcases Guava BI and selected engineering concepts behind the product. It is not the production application or a release of proprietary production code.
</p>

<p>
<strong><a href="https://guavaai.ai/guava-bi">Learn more about Guava BI →</a></strong>
</p>
