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
  name: '<Your Name>',
  education: '<University / Degree / Year>',
  photoPath: '/placeholder.svg',
  blurb: 'Write a short bio about yourself. What do you do? What excites you? This will render as one or two paragraphs.',
  workLately: 'What have you been up to recently? New projects, roles, or skills you\'re building?',
  links: [
    { label: 'Resume', href: '/resume.pdf' },
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Web Apps', href: '#' },
  ],
  projects: [
    {
      title: 'Project Name',
      description: 'A short description of what this project does, the problem it solves, and what you learned.',
      stack: ['TypeScript', 'React', 'Tailwind'],
      url: '#',
    },
    {
      title: 'Another Project',
      description: 'Another example project. Add as many as you like — entries with draft: true will be visually marked.',
      stack: ['Python', 'FastAPI', 'PostgreSQL'],
      url: '#',
      draft: true,
    },
  ],
};