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
  /** Panel content opened by the card's expand control. */
  caseStudy?: CaseStudy;
  draft?: boolean;
}

/** Structured panel content — one template serves case studies and the résumé. */
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
  /** Résumé panel opened from the header nav trigger. */
  resume: {
    title: string;
    eyebrow: string;
    subtitle: string;
    body: string;
    download: { href: string; filename: string; label: string };
  };
  links: Link[];
  projects: Project[];
}

/** Shared stand-in copy for case studies whose real writing is not yet done. */
const placeholderCaseStudy: CaseStudy = {
  status: 'placeholder',
  subtitle: 'Draft — full case study coming soon.',
  body: [
    'Overview of the problem, the constraints, and why it mattered.',
    'How the system was designed and built — key decisions, trade-offs, and what shipped.',
    'What it achieved in practice, and what comes next.',
  ].join('\n\n'),
};


export const site: SiteConfig = {
  name: 'Sebastian O Rodriguez',
  brand: 'SOR',
  education: 'Carnegie Mellon University · BS Technology & Sonic Product Innovation, Minor Business Administration (2020)',
  photoPath: '/profile.svg',
  tagline: 'I build reliable AI systems close to the code — evaluated, guarded, and shipped end-to-end.',
  blurb: `Applied AI engineer building reliable LLM systems close to the code: golden-set evals with regression floors, user-grounded RAG, bounded agent workflows, and per-call observability, with strict security and testing discipline. Founder of Guava AI; previously Scale AI and Salesforce.`,
  resume: {
    title: 'Résumé',
    eyebrow: 'Sebastian O Rodriguez',
    subtitle: 'Carnegie Mellon University · BS Technology & Sonic Product Innovation (2020)',
    body: 'Applied AI engineer building reliable LLM systems: golden-set evals with regression floors, user-grounded RAG, and bounded agent workflows.\n\nFounder of Guava AI; previously Scale AI and Salesforce. The full history is in the PDF — grab it from the download button in the panel.',
    download: { href: '/resume.pdf', filename: 'Sebastian-O-Rodriguez-Resume.pdf', label: 'Download résumé (PDF)' },
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
      href: '/case-studies/guava-bi',
      cta: 'Read the case study',
      caseStudy: placeholderCaseStudy,
    },
    {
      title: 'RoutineMe',
      description: 'Production AI health tracker: user-grounded RAG nutrition estimates, typed actions, and real-model evals.',
      stack: ['Expo', 'React Native', 'Supabase', 'OpenRouter', 'Zod'],
      icon: 'health',
      href: '/case-studies/routineme',
      cta: 'Read the case study',
      caseStudy: placeholderCaseStudy,
    },
    {
      title: 'guava-os',
      description: 'Control plane for parallel AI coding agents: dependency graphs, worktree isolation, and review gates.',
      stack: ['TypeScript', 'Linear GraphQL', 'OMP'],
      icon: 'terminal',
      caseStudy: placeholderCaseStudy,
    },
    {
      title: 'PMLaD',
      description: 'Multi-tenant property platform with four-layer RLS tenant isolation and gated Azure CD.',
      stack: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL 16', 'Azure', 'Clerk'],
      icon: 'building',
      caseStudy: placeholderCaseStudy,
    },
    {
      title: 'guava-site',
      description: 'Company site on Cloudflare Pages with automated Playwright QA.',
      stack: ['Astro', 'Svelte', 'Tailwind CSS', 'Cloudflare', 'Playwright'],
      icon: 'globe',
      caseStudy: placeholderCaseStudy,
    },
  ],
};