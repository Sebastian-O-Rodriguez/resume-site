import guavaBiBody from '../../content/projects/guava-bi.md?raw';
import routineMeBody from '../../content/projects/routine-me.md?raw';
import guavaOsBody from '../../content/projects/guava-os.md?raw';
import pmladBody from '../../content/projects/pmlad.md?raw';
import guavaAiBody from '../../content/projects/guava-site.md?raw';

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
  /** Outbound link rendered as the article-end CTA (P1-13). */
  href?: string;
  /** CTA label rendered when href is set. */
  cta?: string;
  /** Panel content opened by the card. */
  caseStudy?: CaseStudy;
  draft?: boolean;
}

/** Structured panel content — one template serves project stories and the resume. */
export interface CaseStudy {
  /** Draft until the real write-up lands. */
  status: 'published' | 'placeholder';
  /** Panel headline; falls back to the project title when omitted. */
  title?: string;
  /** One-line deck under the headline. */
  subtitle?: string;
  /** Body copy; blank line between paragraphs. */
  body: string;
  /** Hero image served from /public. */
  image?: string;
  /** Accessible description for the hero image (P0-38). */
  imageAlt?: string;
  /** Second image rendered below the hero in the panel. */
  image2?: string;
  /** Accessible description for the second image. */
  image2Alt?: string;
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
  tagline: "I like making things, from AI systems and businesses to whatever followed me home from the farmers' market.",
  blurb: "I'm a founder and builder who ships AI products and the systems that keep them honest. Each project below answers a different question about how I work — start with the one that interests you.",
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
      title: 'Guava AI',
      blurb: 'Building AI products around real business problems.',
      tags: ['Founder', 'Product'],
      icon: 'globe',
      accent: '#8AA85C',
      href: 'https://guavaai.ai',
      cta: 'Visit Guava AI ↗',
      caseStudy: {
        status: 'published',
        subtitle: 'The company I\u2019m building: practical AI systems for real business problems.',
        image: '/case-studies/guava-site/1.png',
        imageAlt: 'Guava AI public homepage',
        image2: '/case-studies/guava-site/2.png',
        image2Alt: 'Guava AI positioning and product directions',
        body: guavaAiBody,
      },
    },
    {
      title: 'Guava OS',
      blurb: 'A system for turning plans into controlled execution.',
      tags: ['Systems', 'AI Agents'],
      icon: 'terminal',
      accent: '#C9A87C',
      href: '/guava-os',
      cta: 'Read case study →',
      caseStudy: {
        status: 'published',
        subtitle: 'A control plane for parallel AI coding agents — and the loop I use to build with them.',
        image: '/case-studies/guava-os/1.svg',
        imageAlt: 'Guava OS orchestration loop diagram',
        image2: '/case-studies/guava-os/2.svg',
        image2Alt: 'Guava OS task lifecycle diagram',
        body: guavaOsBody,
      },
    },
    {
      title: 'Guava BI',
      blurb: 'Decision intelligence for operations.',
      tags: ['AI', 'Data Systems'],
      icon: 'analytics',
      accent: '#5B9BA0',
      href: 'https://github.com/Sebastian-O-Rodriguez/showcase-guavabi',
      cta: 'GitHub ↗',
      caseStudy: {
        status: 'published',
        subtitle: 'Deterministic metrics behind an LLM trust boundary — AI interprets, code computes.',
        image: '/case-studies/guava-bi/1.png',
        imageAlt: 'Guava BI Business Pulse dashboard',
        image2: '/case-studies/guava-bi/2.png',
        image2Alt: 'Guava BI operational dashboard',
        body: guavaBiBody,
      },
    },
    {
      title: 'PMLaD',
      blurb: 'Property operations in one connected system.',
      tags: ['Product', 'Full Stack'],
      icon: 'building',
      accent: '#6A8CAF',
      href: 'https://github.com/Sebastian-O-Rodriguez/showcase-pmlad',
      cta: 'GitHub ↗',
      caseStudy: {
        status: 'published',
        subtitle: 'A multi-tenant property platform with database-level isolation and gated delivery.',
        image: '/case-studies/pmlad/1.png',
        imageAlt: 'PMLaD portfolio overview',
        image2: '/case-studies/pmlad/2.png',
        image2Alt: 'PMLaD operational inbox',
        body: pmladBody,
      },
    },
    {
      title: 'RoutineMe',
      blurb: 'Self-tracking with less logging, more useful history.',
      tags: ['Product', 'Experiments'],
      icon: 'health',
      accent: '#B57A8A',
      href: 'https://github.com/Sebastian-O-Rodriguez/showcase-routine-me',
      cta: 'GitHub ↗',
      caseStudy: {
        status: 'published',
        subtitle: 'A production AI health tracker where chat and direct input converge on one typed path.',
        image: '/case-studies/routineme/1.png',
        imageAlt: 'RoutineMe daily tracking view',
        image2: '/case-studies/routineme/2.png',
        image2Alt: 'RoutineMe natural-language meal logging',
        body: routineMeBody,
      },
    },
  ],
};
