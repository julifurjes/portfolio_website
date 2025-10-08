import { Project, FeaturedProject, ConstellationPosition } from '@/types';

// Project constellation data - each constellation represents one project
export const PROJECTS: Project[] = [
  {
    id: "depression",
    title: "Depression Trajectory Prediction",
    category: "Behavioral AI Research",
    description: "Mixed-effects models + GEE + Random Forest to forecast depression trajectory surges. Built complete data pipelines and interactive evaluation dashboards for clinical research teams.",
    details: [
      "Developed predictive models using longitudinal patient data",
      "Implemented data preprocessing pipeline for clinical datasets",
      "Created interactive dashboards for model evaluation",
      "Collaborated with mental health researchers on validation"
    ],
    tags: ["Python", "Machine Learning", "Data Science", "Mental Health"],
    link: "#"
  },
  {
    id: "university",
    title: "University Integration System",
    category: "Service Design",
    description: "End-to-end service design and process blueprint that became a permanent institutional role supporting international student integration and cross-cultural adaptation.",
    details: [
      "Conducted ethnographic research with 50+ international students",
      "Designed service blueprints and user journey maps",
      "Facilitated stakeholder workshops across 5 departments",
      "Proposed organizational changes that were institutionalized"
    ],
    tags: ["Service Design", "UX Research", "Ethnography", "Systems Thinking"],
    link: "#"
  },
  {
    id: "ux_assistant",
    title: "Intelligent UX Assistant",
    category: "AI-Powered Tools",
    description: "LLM-powered tool for synthesizing research sessions with automatic theme tagging and journey map insights generation from qualitative data.",
    details: [
      "Built NLP pipeline for qualitative research analysis",
      "Implemented automated theme extraction and clustering",
      "Created visualization tools for journey mapping",
      "Reduced analysis time from days to hours"
    ],
    tags: ["LLM", "NLP", "UX Research", "Python", "AI"],
    link: "#"
  },
  {
    id: "cocreators",
    title: "Co-Creators Platform",
    category: "Collaborative Design",
    description: "Discovery-to-delivery platform with ideation workshops. Converted user insights into reusable UI patterns and facilitation assets for collaborative design.",
    details: [
      "Facilitated 15+ co-creation workshops with diverse stakeholders",
      "Developed design system from workshop insights",
      "Created facilitation toolkit and workshop templates",
      "Built community platform for ongoing collaboration"
    ],
    tags: ["Workshop Design", "UI/UX", "Community", "Design Systems"],
    link: "#"
  }
];

// Constellation visual configuration for each project
export const CONSTELLATION_CONFIG: Record<string, {
  position: ConstellationPosition;
  image: string;
  label: string;
  size?: string;
}> = {
  depression: {
    position: { top: "20%", left: "15%" },
    image: "/illustrations/constellation1.png",
    label: "DEPRESSION PREDICTOR",
    size: "250px"
  },
  university: {
    position: { top: "20%", right: "15%" },
    image: "/illustrations/constellation2.png",
    label: "INTEGRATION SYSTEM",
    size: "250px"
  },
  ux_assistant: {
    position: { top: "60%", left: "15%" },
    image: "/illustrations/constellation3.png",
    label: "UX ASSISTANT",
    size: "250px"
  },
  cocreators: {
    position: { top: "60%", right: "15%" },
    image: "/illustrations/constellation4.png",
    label: "CO-CREATORS",
    size: "250px"
  }
};

export const FEATURED_PROJECTS: FeaturedProject[] = PROJECTS.slice(0, 4).map(p => ({
  title: p.title,
  category: p.category,
  description: p.description,
  tags: p.tags,
  link: p.link
}));