/**
 * Site data model — single source of truth for all content.
 * Edit this file to change copy; components never hardcode text.
 */

export interface Project {
  title: string;
  /** Card blurb — hard-capped at 60 chars (P0-04). One positioning line. */
  blurb: string;
  /** 2–3 high-level capability tags (P0-05), not library names. */
  tags: string[];
  /** Domain icon key — rendered before the card title (see Card.astro). */
  icon?: string;
  /** Subtle accent used by the image viewer frame (P0-35). */
  accent?: string;
  /** Panel content opened by the card. */
  caseStudy?: CaseStudy;
  draft?: boolean;
}

/** Panel routing shell: publish status + one-line deck. Article lives in components/articles/. */
export interface CaseStudy {
  /** Draft until the real write-up lands. */
  status: 'published' | 'placeholder';
  /** One-line deck under the headline. */
  subtitle?: string;
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
  blurb: string;
  /** Downloadable resume document, offered on the dedicated resume page. */
  resume: {
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
  blurb: "I am a software engineer and founder, currently building Guava AI. I work on autonomous agents, agent harnesses, and human-AI interaction.",
  resume: {
    download: { href: '/resume.pdf', filename: 'Sebastian-O-Rodriguez-Resume.pdf', label: 'Download Resume (PDF)' },
  },
  links: [
    { label: 'Resume', href: '/resume' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/sebastianorodriguez' },
    { label: 'GitHub', href: 'https://github.com/Sebastian-O-Rodriguez' },
  ],
  projects: [
    {
      title: 'Guava AI',
      blurb: 'AI systems for business operations',
      tags: ['Founder', 'Product'],
      icon: 'globe',
      accent: '#8AA85C',
      caseStudy: {
        status: 'published',
        subtitle: 'AI systems built around real operational constraints.',
      },
    },
    {
      title: 'Guava OS',
      blurb: 'Control plane for parallel AI coding agents',
      tags: ['Systems', 'AI Agents'],
      icon: 'terminal',
      accent: '#C9A87C',
      caseStudy: {
        status: 'published',
        subtitle: 'A control plane for parallel AI coding agents.',
      },
    },
    {
      title: 'Guava BI',
      blurb: 'Decision intelligence for operational data',
      tags: ['AI', 'Data Systems'],
      icon: 'analytics',
      accent: '#5B9BA0',
      caseStudy: {
        status: 'published',
        subtitle: 'Natural-language analytics with deterministic computation.',
      },
    },
    {
      title: 'PMLaD',
      blurb: 'Multi-tenant platform for property operations',
      tags: ['Product', 'Full Stack'],
      icon: 'building',
      accent: '#6A8CAF',
      caseStudy: {
        status: 'published',
        subtitle: 'Property operations built on a connected domain model.',
      },
    },
    {
      title: 'RoutineMe',
      blurb: 'AI-native health and habit tracker',
      tags: ['Product', 'Experiments'],
      icon: 'health',
      accent: '#B57A8A',
      caseStudy: {
        status: 'published',
        subtitle: 'Natural input translated into structured, deterministic workflows.',
      },
    },
  ],
};
