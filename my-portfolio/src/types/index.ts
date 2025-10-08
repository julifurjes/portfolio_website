export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  tags: string[];
  link: string;
  github?: string;
  demo?: string;
}

export interface FeaturedProject {
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