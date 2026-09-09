<h1>Guava AI</h1>

<p align="center"><strong>The public home for Guava AI and the products, systems, and business workflows being built under it.</strong></p>

<p>
Guava AI is the company I am building around practical AI systems for real business workflows.
</p>

<p>
This repository contains the public company site at <a href="https://guavaai.ai">guavaai.ai</a>. It brings the company's positioning, products, and public identity together in one fast, responsive web experience.
</p>

<a href="/articles/guava-site/screenshot-hero.png">
  <img src="/articles/guava-site/screenshot-hero.png" alt="Guava AI homepage hero" width="900">
</a>

<p><em>Guava AI's public site, bringing the company's positioning, products, and work together in one experience.</em></p>

<h2>About Guava AI</h2>

<p>
The site's positioning is straightforward: Guava AI builds smarter systems for retail, distribution, wholesale, and multi-location businesses.
</p>

<p>
The core idea is simple: <strong>run your business; we build the systems behind it.</strong>
</p>

<p>
Guava AI connects data, workflows, and software into practical operating systems that reduce manual work and improve visibility.
</p>

<p>
Two product directions carry that idea:
</p>

<ul>
  <li><strong>Operations Automation</strong> moves repetitive workflows, reporting, approvals, and data movement into reliable systems.</li>
  <li><strong>Guava BI</strong> turns fragmented operational data into trusted visibility, important signals, and clearer decisions.</li>
</ul>

<p>
The framing is deliberate. Guava AI is not focused on selling chatbots. It connects the systems a business already runs, removes the manual work between them, and surfaces what needs attention.
</p>

<h2>Building the Site</h2>

<p>
The site is primarily static, so Astro keeps the default experience lightweight and fast. Pages render to HTML and ship no client-side framework unless a section actually needs one.
</p>

<p>
Interactive sections are isolated into Svelte components rather than turning the entire site into a client-side application. The capability explorer and the "How We Work" visual are the primary areas that need client-side state; everything else remains plain markup.
</p>

<p>
Tailwind provides the visual system. GSAP is used selectively for motion, including the rotating industry headline, section reveals, and smooth anchor scrolling.
</p>

<p>
The site also respects <code>prefers-reduced-motion</code>, so content remains accessible when motion is disabled. Core content does not depend on animation or client-side JavaScript to remain visible.
</p>

<p>
The result is a responsive, multi-page marketing site built around simple technical decisions applied carefully:
</p>

<ul>
  <li>Ship as little JavaScript as possible.</li>
  <li>Keep interactive behavior behind clear boundaries.</li>
  <li>Use motion selectively.</li>
  <li>Never let animation hide or block the content.</li>
</ul>

<p>
The site deploys to Cloudflare Pages.
</p>
