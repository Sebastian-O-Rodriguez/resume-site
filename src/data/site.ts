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
  tagline: string;
  blurb: string;
  links: Link[];
  projects: Project[];
}

export const site: SiteConfig = {
  name: 'Sebastian O Rodriguez',
  education: 'Carnegie Mellon University · BS Technology & Sonic Product Innovation, Minor Business Administration (2020)',
  photoPath: '/profile.svg',
  tagline: 'my projects, research, and lollygags in one place',
  blurb: `Full-stack engineer shipping production AI systems end-to-end: evals, RAG, and bounded agentic loops, with strict security and testing discipline. Founder of Guava AI; previously Scale AI and Salesforce.`,
  links: [
    { label: 'Resume', href: '/resume.pdf' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/sebastianorodriguez' },
    { label: 'GitHub', href: 'https://github.com/Sebastian-O-Rodriguez' },
    { label: 'Web', href: 'https://guavaai.ai' },
  ],
  projects: [
    {
      title: 'guava-os',
      description: 'Agent orchestration platform: governed AI workflows via dependency graphs, worktree isolation, and review gates.',
      stack: ['TypeScript', 'Linear GraphQL', 'OMP', 'OTel', 'Sentry'],
      url: 'https://github.com/Sebastian-O-Rodriguez/guava-os',
    },
    {
      title: 'guavabi',
      description: 'BI for ERP-heavy distributors: deterministic analytics with an LLM trust boundary.',
      stack: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Polars', 'OpenRouter'],
      url: 'https://app.guavabi.com',
    },
    {
      title: 'routineme',
      description: 'AI health tracker: RAG-grounded nutrition estimates, typed actions, real-model evals.',
      stack: ['Expo', 'React Native', 'Supabase', 'OpenRouter', 'Zod'],
      url: 'https://github.com/Sebastian-O-Rodriguez/routineme',
    },
    {
      title: 'PMLaD',
      description: 'Multi-tenant property platform with four-layer RLS tenant isolation and gated Azure CD.',
      stack: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL 16', 'Azure', 'Clerk'],
      url: 'https://github.com/Sebastian-O-Rodriguez/pmlad',
    },
    {
      title: 'guava-site',
      description: 'Company site on Cloudflare Pages with automated Playwright QA.',
      stack: ['Astro', 'Svelte', 'Tailwind CSS', 'Cloudflare', 'Playwright'],
      url: 'https://guavaai.ai',
    },
  ],
};