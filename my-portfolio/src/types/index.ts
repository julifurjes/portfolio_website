export interface ProjectLink {
  label: string;
  href: string;
}

export type ProjectCategory = 'AI Development' | 'Data Science' | 'Frontend' | 'UX';

export interface ProjectSection {
  title: string;
  content: string;
  images?: string[]; // Array of image paths to display in this section
}

export interface Project {
  id: string;
  title: string;
  category: string;
  categories: ProjectCategory[]; // For filtering
  description: string; // TLDR description
  details: string[]; // TLDR key achievements
  tags: string[];
  link: string;
  github?: string;
  demo?: string;
  slideshow?: string[]; // Array of image paths for slideshow
  // New detailed sections - can be flexible for different projects
  sections?: {
    [key: string]: ProjectSection;
  };
}

export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  link: string;
}

export interface ConstellationPosition {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export interface StarPosition {
  top: number;
  left: number;
}

export interface LineStyle {
  width: number;
  top: number;
  left: number;
  transform: string;
}