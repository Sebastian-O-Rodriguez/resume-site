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
  /** Case-study / evidence link (primary CTA). Omitted for non-clickable secondary cards. */
  href?: string;
  /** CTA label rendered when href is set. */
  cta?: string;
  /** Inline case-study body expanded in place on the card. */
  caseStudy?: { status: 'published' | 'placeholder'; content: string };
  draft?: boolean;
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
  links: Link[];
  projects: Project[];
}

export const site: SiteConfig = {
  name: 'Sebastian O Rodriguez',
  brand: 'SOR',
  education: 'Carnegie Mellon University · BS Technology & Sonic Product Innovation, Minor Business Administration (2020)',
  photoPath: '/profile.svg',
  tagline: 'I build reliable AI systems close to the code — evaluated, guarded, and shipped end-to-end.',
  blurb: `Applied AI engineer building reliable LLM systems close to the code: golden-set evals with regression floors, user-grounded RAG, bounded agent workflows, and per-call observability, with strict security and testing discipline. Founder of Guava AI; previously Scale AI and Salesforce.`,
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
      href: '/case-studies/guava-bi',
      cta: 'Read the case study',
    },
    {
      title: 'RoutineMe',
      description: 'Production AI health tracker: user-grounded RAG nutrition estimates, typed actions, and real-model evals.',
      stack: ['Expo', 'React Native', 'Supabase', 'OpenRouter', 'Zod'],
      icon: 'health',
      href: '/case-studies/routineme',
      cta: 'Read the case study',
    },
    {
      title: 'guava-os',
      description: 'Control plane for parallel AI coding agents: dependency graphs, worktree isolation, and review gates.',
      stack: ['TypeScript', 'Linear GraphQL', 'OMP'],
      icon: 'terminal',
    },
    {
      title: 'PMLaD',
      description: 'Multi-tenant property platform with four-layer RLS tenant isolation and gated Azure CD.',
      stack: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL 16', 'Azure', 'Clerk'],
      icon: 'building',
    },
    {
      title: 'guava-site',
      description: 'Company site on Cloudflare Pages with automated Playwright QA.',
      stack: ['Astro', 'Svelte', 'Tailwind CSS', 'Cloudflare', 'Playwright'],
      icon: 'globe',
    },
  ],
};