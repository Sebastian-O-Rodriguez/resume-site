/**
 * Site data model — single source of truth for all content.
 * Edit this file to change copy; components never hardcode text.
 */

export interface Project {
  title: string;
  description: string;
  stack: string[];
  /** Domain icon key — rendered before the card title (see Projects.astro). */
  icon?: string;
  /** Outbound link rendered as a CTA at the end of the panel. */
  href?: string;
  /** CTA label rendered when href is set. */
  cta?: string;
  /** Panel content opened by the card's expand control. */
  caseStudy?: CaseStudy;
  draft?: boolean;
}

/** Structured panel content — one template serves case studies and the resume. */
export interface CaseStudy {
  /** Draft until the real write-up lands. */
  status: 'published' | 'placeholder';
  /** Panel headline; falls back to the project title when omitted. */
  title?: string;
  /** One-line deck under the headline. */
  subtitle?: string;
  /** Body copy; blank line between paragraphs. */
  body: string;
  /** Hero image served from /public; a placeholder figure renders when omitted. */
  image?: string;
  /** Second image rendered below the hero in the panel. */
  image2?: string;
}

export interface Link {
  label: string;
  href: string;
}

export interface SiteConfig {
  /** Full legal name — used for SEO title/meta, photo alt, footer, resume. */
  name: string;
  /** Visible brand shown in the header wordmark + hero h1 (initials). */
  brand: string;
  education: string;
  photoPath: string;
  tagline: string;
  blurb: string;
  /** resume panel opened from the header nav trigger. */
  resume: {
    title: string;
    download: { href: string; filename: string; label: string };
  };
  links: Link[];
  projects: Project[];
}

export const site: SiteConfig = {
  name: 'Sebastian O Rodriguez',
  brand: 'SOR',
  education: 'Carnegie Mellon University · BS Technology & Sonic Product Innovation, Minor Business Administration (2020)',
  photoPath: '/profile.svg',
  tagline: 'I build reliable AI systems close to the code — evaluated, guarded, and shipped end-to-end.',
  resume: {
    title: "Sebastian's Resume",
    download: { href: '/resume.pdf', filename: 'Sebastian-O-Rodriguez-Resume.pdf', label: 'Download Resume (PDF)' },
  },
  links: [
    { label: 'Resume', href: '/resume.pdf' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/sebastianorodriguez' },
    { label: 'GitHub', href: 'https://github.com/Sebastian-O-Rodriguez' },
  ],
  projects: [
    {
      title: 'Guava BI',
      description: 'Deterministic analytics for ERP-heavy distributors behind an LLM trust boundary — AI proposes, never computes.',
      stack: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Polars', 'OpenRouter'],
      icon: 'analytics',
      href: 'https://github.com/Sebastian-O-Rodriguez/showcase-guavabi',
      cta: 'View showcase',
      caseStudy: {
        status: 'published',
        subtitle: 'Deterministic analytics behind an LLM trust boundary for ERP-heavy distributors.',
        image: '/case-studies/guava-bi/1.png',
        image2: '/case-studies/guava-bi/2.png',
        body: `Distributors run on fragmented ERP exports — CSVs spanning products, inventory, orders, suppliers, and warehouses. Guava BI ingests that operational data, validates it into a canonical PostgreSQL schema, and computes every metric deterministically.

LLMs participate only where they can't corrupt the numbers: parsing intent, suggesting field mappings, and explaining results. They never compute metrics, write SQL, or touch the schema. A validated pipeline turns structured intent into deterministic SQL.

Anomaly detection runs in two layers — stockout, overstock, shrinkage, trend reversals — surfaced in a Spotlight feed with full source traceability. 316 backend tests and five Playwright specs gate every merge.`,
      },
    },
    {
      title: 'RoutineMe',
      description: 'Production AI health tracker: user-grounded RAG nutrition estimates, typed actions, and real-model evals.',
      stack: ['Expo', 'React Native', 'Supabase', 'OpenRouter', 'Zod'],
      icon: 'health',
      href: 'https://github.com/Sebastian-O-Rodriguez/showcase-routine-me',
      cta: 'View showcase',
      caseStudy: {
        status: 'published',
        subtitle: 'A production AI health tracker where chat and direct input converge on one typed action path.',
        image: '/case-studies/routineme/1.png',
        image2: '/case-studies/routineme/2.png',
        body: `RoutineMe tracks nutrition, gym, running, habits, and goals from chat or direct input. Both paths converge on the same typed Action object and route through one executor into RLS-scoped PostgreSQL mutations.

The chat pipeline is a four-stage server-side flow — classify, normalize, estimate, propose. Only classification and macro estimation touch an LLM; every proposal waits for user confirmation before any write.

Identity is derived from the Supabase JWT, never trusted from the client. RLS scopes all five tables, rate limits guard expensive endpoints, and Vitest suites cover auth, cross-user isolation, and the full chat workflow.`,
      },
    },
    {
      title: 'guava-os',
      description: 'Control plane for parallel AI coding agents: dependency graphs, worktree isolation, and review gates.',
      stack: ['TypeScript', 'Linear GraphQL', 'OMP'],
      icon: 'terminal',
      href: '/guava-os',
      cta: 'Read the full story',
      caseStudy: {
        status: 'published',
        subtitle: 'A control plane for parallel coding agents: dependency graphs, worktree isolation, and review gates.',
        image: '/case-studies/guava-os/1.svg',
        image2: '/case-studies/guava-os/2.svg',
        body: `guava-os coordinates teams of coding agents the way a build system coordinates tasks. A session opens in Chat & Plan: the problem decomposes into a dependency graph of scoped deliverables, not one monolithic prompt.

Agents dispatch in waves — only slices whose dependencies are satisfied fan out, each in its own isolated worktree. A review gate inspects every diff before merge; nothing reaches staging or production without passing.

Enforcement is structural. Quality gates, promotion gates, and role boundaries are configured, not requested — unready work is refused with a reason. TypeScript, Linear's GraphQL, and the OMP harness carry the orchestration.`,
      },
    },
    {
      title: 'PMLaD',
      description: 'Multi-tenant property platform with four-layer RLS tenant isolation and gated Azure CD.',
      stack: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL 16', 'Azure', 'Clerk'],
      icon: 'building',
      href: 'https://github.com/Sebastian-O-Rodriguez/showcase-pmlad',
      cta: 'View showcase',
      caseStudy: {
        status: 'published',
        subtitle: 'A multi-tenant property platform with database-level RLS isolation and gated Azure CD.',
        image: '/case-studies/pmlad/1.png',
        image2: '/case-studies/pmlad/2.png',
        body: `PMLaD gives property managers one system for properties, portfolios, tasks, and inbox — a TypeScript monorepo spanning Next.js 15, NestJS 10, and Prisma 6, with shared Zod schemas and OpenAPI bindings.

Tenant isolation is the load-bearing feature. Postgres row-level security scopes all twelve tenant-owned tables to the caller's organization, enforced by a restricted application role with a crash-on-fail startup check.

Delivery runs through gated Azure continuous deployment — lint, tests, build, and OpenAPI drift checks must pass before a change promotes. Now in dogfooding, the system is exercised by real property workflows.`,
      },
    },
    {
      title: 'guava-site',
      description: 'Company site on Cloudflare Pages with automated Playwright QA.',
      stack: ['Astro', 'Svelte', 'Tailwind CSS', 'Cloudflare', 'Playwright'],
      icon: 'globe',
      href: 'https://guavaai.ai',
      cta: 'Visit full site',
      caseStudy: {
        status: 'published',
        subtitle: 'The public home for Guava AI — a fast, mostly-static site with automated Playwright QA.',
        image: '/case-studies/guava-site/1.png',
        image2: '/case-studies/guava-site/2.png',
        body: `guava-site is Guava AI's public face: company positioning, product pages, and the workflows being built under it. Astro ships static HTML by default, so pages load fast with no framework overhead.

Interactive sections — the capability explorer and the 'how we work' visual — are isolated Svelte components behind clear boundaries, so the rest of the site stays plain markup. Tailwind handles the visual system; GSAP motion honors prefers-reduced-motion.

Every branch deploys to Cloudflare Pages, and automated Playwright QA exercises the site so regressions surface before they ship. Boring decisions done carefully: minimal JavaScript, visible content, and no animation hiding the message.`,
      },
    },
  ],
};