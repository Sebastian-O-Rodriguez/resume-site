/**
 * Site data model — single source of truth for all content.
 * Edit this file to change copy; components never hardcode text.
 */

export interface Project {
  title: string;
  description: string;
  stack: string[];
  url?: string;
  draft?: boolean;
}

export interface Link {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  education: string;
  photoPath: string;
  blurb: string;
  workLately: string;
  links: Link[];
  projects: Project[];
}

export const site: SiteConfig = {
  name: 'Sebastian O Rodriguez',
  education: 'Carnegie Mellon University · BS Technology & Sonic Product Innovation, Minor Business Administration (2020)',
  photoPath: '/placeholder.svg',
  blurb: `Full-stack engineer building production AI systems end-to-end — LLM integration, golden-set evals, per-call observability, retrieval-augmented generation, and bounded agentic tool loops on typed actions. Strong security and testing discipline: multi-layer RLS, fail-closed auth, 80%+ coverage gates, real-model eval harnesses. TypeScript/React/Node primary with Python backend across FastAPI, SQLAlchemy, and Polars.

Founder of Guava AI, where I built the full stack: the agent orchestration platform (guava-os), the client BI product (guavabi), and the company's web presence. Previously led strategic data operations at Scale AI and guided a product launch as a technical writer at Salesforce.`,
  workLately: `Building and operating the entire Guava AI product stack: agent orchestration platform for autonomous engineering workflows (guava-os), BI analytics for distributor operations (guavabi), and client-facing dashboards. Working directly with clients to scope requirements, conduct diagnostics, deliver reports, and run interviews. Recent deep work on deterministic analytics engines with LLM trust boundaries, agent governance patterns, and real-model eval harnesses.`,
  links: [
    { label: 'Resume', href: '/resume.md' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/sebastianorodriguez' },
    { label: 'GitHub', href: 'https://github.com/Sebastian-O-Rodriguez' },
    { label: 'Web', href: 'https://guavaai.ai' },
  ],
  projects: [
    {
      title: 'guava-os',
      description: 'Agent orchestration platform — separation-of-concerns architecture with planning, execution engine (gorp), and OMP runtime. Governed execution via dependency graphs, worktree isolation, review/promotion gates, hash-chained audit, and operator CLI.',
      stack: ['TypeScript', 'Linear GraphQL', 'OMP', 'OTel', 'Sentry'],
      url: 'https://github.com/Sebastian-O-Rodriguez/guava-os',
    },
    {
      title: 'guavabi',
      description: 'Operational BI platform for ERP-heavy distributors. Multi-step CSV import with AI-suggested field mappings, deterministic analytics engine for stockout risk, overstock, shrinkage, and fast-moving SKUs. LLM trust boundary: AI parses intent; metrics are deterministic.',
      stack: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Polars', 'OpenRouter'],
      url: 'https://app.guavabi.com',
    },
    {
      title: 'routineme',
      description: 'AI-powered health tracker with LLM classifier, RAG-grounded nutrition estimation, typed action execution, per-call AI observability instrumentation, and bounded agentic loops.',
      stack: ['Expo', 'React Native', 'Supabase', 'OpenRouter', 'Zod'],
      url: 'https://github.com/Sebastian-O-Rodriguez/routineme',
    },
    {
      title: 'PMLaD',
      description: 'Multi-tenant property management platform with defense-in-depth tenant isolation (4 layers, FORCE RLS on all 12 tenant tables, boot-time RLS verification). Staged Azure CD with CI gates: lint, typecheck, 80%+ coverage, RLS verification, Playwright E2E.',
      stack: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL 16', 'Azure', 'Clerk'],
      url: 'https://github.com/Sebastian-O-Rodriguez/pmlad',
    },
    {
      title: 'guava-site',
      description: 'Company website at guavaai.ai. Built with Astro + Svelte + Tailwind CSS on Cloudflare Pages. QA automation for perf metrics, a11y, and visual regression (Playwright).',
      stack: ['Astro', 'Svelte', 'Tailwind CSS', 'Cloudflare', 'Playwright'],
      url: 'https://guavaai.ai',
    },
  ],
};