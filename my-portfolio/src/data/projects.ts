import { Project, FeaturedProject, ConstellationPosition } from '@/types';

// Project constellation data - each constellation represents one project
export const PROJECTS: Project[] = [
  {
    id: "depression",
    title: "Depression Trajectory Analysis",
    category: "Data Science Research Internship",
    categories: ["Data Science"],
    description: "Supported a PhD research project on depression trajectories through statistical modeling and machine learning. Identified optimal models for highly imbalanced longitudinal data, created visualizations for pattern analysis, and documented methodologies for research transparency.",
    details: [
      "Applied GEE, mixed-effects models, and Random Forest to longitudinal depression data",
      "Handled severe class imbalance using SMOTE-Tomek and validation techniques",
      "Created accessible visualizations and documentation for non-technical stakeholders",
      "Identified three distinct depression trajectory groups with key demographic patterns"
    ],
    tags: ["Python", "Statistical Modeling", "GEE", "Random Forest", "SMOTE-Tomek", "Data Visualization", "Research Documentation"],
    link: "#",
    github: "https://github.com/julifurjes/depression-analysis",
    sections: {
      context: {
        title: "Research Context",
        content: "During my internship at NOVA Medical Faculty in Lisbon, I contributed to a PhD research project analyzing depression trajectories using longitudinal data. The primary challenge was working with a highly imbalanced dataset while maintaining model accuracy and interpretability for clinical researchers.\n\nMy role spanned the complete research pipeline: identifying the best-fitting statistical models through extensive trial and error, conducting detailed data analyses, creating visualizations to uncover patterns, and documenting methodologies for reproducibility. A key aspect was translating complex data science concepts for my psychologist supervisor, strengthening my ability to communicate technical work to non-technical audiences."
      },
      approach: {
        title: "Technical Approach",
        content: "I applied multiple modeling techniques to identify depression patterns in longitudinal data, ultimately combining Generalized Estimating Equations (GEE) with Random Forest classification. To address the severe class imbalance (a common challenge in mental health data), I implemented SMOTE-Tomek resampling techniques.\n\nThe analysis revealed three distinct depression trajectory groups, each with unique demographic and behavioral characteristics. I created comprehensive visualizations showing how age, education, employment status, multimorbidity, sleep patterns, and exercise habits correlate with different depression trajectories.\n\nDocumentation was critical for research transparency. I wrote detailed methodological explanations and interpretable output summaries (available in the GitHub repository), ensuring that both technical and non-technical stakeholders could understand the analytical process and results."
      },
      findings: {
        title: "Key Findings",
        content: "The analysis identified three depression trajectory groups with distinct profiles:\n\nGroup 1 (Stable/Low Depression): Primarily younger individuals (late teens to mid-30s) with mid-level education and full-time employment. Regular exercise and moderate alcohol consumption served as protective factors, with low multimorbidity supporting mental stability.\n\nGroup 2 (Fluctuating Depression): Wider age range with concentration in late 20s to mid-30s, higher education levels, and increased unemployment/retirement. Multimorbidity and sleep patterns were key factors contributing to mental health fluctuations.\n\nGroup 3 (Severe/Progressive Depression): Predominantly older individuals (late 60s-70s) with bimodal education distribution and high rates of retirement/unemployment. Significantly higher multimorbidity, with irregular sleep and exercise patterns exacerbating symptoms.\n\nThese findings demonstrated how demographic and lifestyle factors interact with depression trajectories, providing insights for targeted intervention strategies."
      }
    }
  },
  {
    id: "menopause",
    title: "Menopause Cognitive & Emotional Health Study",
    category: "MSc Thesis Research",
    categories: ["Data Science"],
    description: "Analyzed the integrated impact of hormonal, cognitive, emotional, and social factors during menopause using longitudinal data from 2,309 women. Applied linear mixed-effects models to identify how vasomotor symptoms, social support, and menopausal stages affect cognitive function and emotional wellbeing.",
    details: [
      "Analyzed 24,081 observations from SWAN longitudinal cohort using mixed-effects models",
      "Handled complex missing data with stratified K-NN imputation and inverse-frequency weighting",
      "Identified surgical menopause as primary cognitive risk factor (p < 0.001)",
      "Demonstrated protective role of social support on cognitive performance (β = 0.17, p < 0.001)"
    ],
    tags: ["Python", "Linear Mixed-Effects Models", "Longitudinal Analysis", "K-NN Imputation", "Women's Health Research"],
    link: "#",
    github: "https://github.com/julifurjes/msc_thesis",
    slideshow: ["/projects/menopause"],
    sections: {
      context: {
        title: "Research Context",
        content: "Menopause represents a critical neurocognitive and psychosocial transition affecting up to two-thirds of women through subjective cognitive difficulties like 'brain fog,' forgetfulness, and memory challenges. Approximately 70% experience verbal and working memory issues that impact daily functioning and work performance.\n\nDespite recognition that hormonal changes (decreased estradiol, increased FSH) influence prefrontal and temporal lobe function, research has traditionally studied hormonal, cognitive, emotional, and social dimensions separately. My MSc thesis addressed this gap by analyzing how these factors interact across the menopausal transition using longitudinal data from the Study of Women's Health Across the Nation (SWAN)."
      },
      approach: {
        title: "Technical Approach",
        content: "I analyzed data from 2,309 women (aged 42-52) contributing 24,081 observations across multiple time points. After excluding hormone-therapy users and participants with insufficient cognitive assessments, I applied rigorous data preparation: stratified K-Nearest Neighbours imputation for missing data, log and square-root transformations for skewed variables, and inverse-frequency weighting to address stage imbalances.\n\nCognitive function was measured via the East Boston Memory Test (EBMT) immediate and delayed recall, averaged into a single score. Emotional difficulties, social support, and symptom severity (hot flashes, night sweats, cold sweats, irritability, mood fluctuations) were assessed through validated self-report measures.\n\nI fitted linear mixed-effects models via REML, controlling for menopausal stage, visit number, age, and interview language, with random intercepts and slopes to capture individual trajectories. This approach allowed me to model within-person changes over time while accounting for substantial individual variability."
      },
      findings: {
        title: "Key Findings",
        content: "Surgical Menopause as Primary Cognitive Risk: Natural menopause stages (early/late perimenopause, post-menopause) showed no significant cognitive effects compared to pre-menopause. However, surgical menopause produced very significant memory deficits (p < 0.001), indicating that sudden estrogen loss has distinct neurocognitive consequences.\n\nVasomotor Symptom Patterns: Night sweats (β = -0.13, p < 0.001), cold sweats (β = -0.10, p < 0.001), irritability, and mood fluctuations predicted lower cognitive scores. Critically, hot flash bothersomeness (β = -0.08, p = 0.002) proved more cognitively impactful than frequency, suggesting that subjective symptom distress matters more than objective occurrence.\n\nSocial Support as Protective Factor: Greater social support positively predicted cognitive performance (β = 0.17, p < 0.001) and negatively associated with emotional struggles. Conversely, higher emotional difficulty (β = -0.18, p < 0.05) and overall symptom severity (β = -0.10, p < 0.01) related to poorer cognitive outcomes.\n\nIndividual Variability: Low marginal R² (≤ 0.03) but moderate conditional R² (∼ 0.50) indicated that while fixed effects explained limited variance, individual trajectories varied substantially, highlighting the importance of personalized approaches to menopausal health."
      }
    }
  },
  {
    id: "lumen",
    title: "Lumen - AI Research Assistant",
    category: "Full-Stack AI Platform",
    categories: ["AI Development", "Frontend", "UX"],
    description: "Full-stack AI platform for analyzing academic papers through conversational AI. Combines RAG architecture with 6 specialized prompt engineering modes for research analysis, demonstrating end-to-end AI development from vector embeddings to UX design.",
    details: [
      "Built complete RAG pipeline with FAISS vector store and semantic chunking",
      "Engineered 6 distinct prompt templates for different analysis modes (Standard, Detailed, Critical Review, Quick Summary, Methodology Focus, Comparative)",
      "Designed nature-inspired UI with multi-chat management and real-time query mode switching",
      "Implemented FastAPI backend with PyMuPDF processing and LangChain orchestration"
    ],
    tags: ["RAG", "NLP", "FastAPI", "OpenAI", "Prompt Engineering", "React", "TypeScript", "Python"],
    link: "#",
    github: "https://github.com/julifurjes/ai_research_platform",
    slideshow: ["/projects/lumen"],
    sections: {
      information: {
        title: "Information",
        content: "Lumen is an intelligent document analysis tool that helps researchers, students, and academics quickly understand and interact with academic papers through conversational AI. The platform demonstrates full-stack AI development, from backend RAG architecture to frontend UX design.\n\nThe core challenge was creating a system that could provide multiple analysis perspectives on the same document. Rather than a one-size-fits-all chatbot, Lumen offers 6 specialized query modes, each using distinct prompt engineering techniques, allowing users to switch between quick summaries, detailed analyses, critical reviews, methodology deep-dives, and comparative insights in real-time."
      },
      designPrinciples: {
        title: "Design Principles & Direction",
        content: "UX & Frontend:\nThe interface uses a nature-inspired design system (forest greens #355E38, earth browns, warm beige) with the Inter font family for readability. The user flow is intentionally simple: upload PDF, ask questions, switch analysis modes. Multi-chat management via persistent sidebar allows researchers to work across multiple papers simultaneously.\n\nKey UX patterns include smooth fadeIn animations, hover transforms, and a pulsing 'Thinking...' indicator during processing. The 4 preset prompt suggestions lower the barrier to entry, while the query mode selector educates users on AI capabilities. Local storage preserves chat history across sessions.\n\nBackend Architecture:\nImplemented Retrieval-Augmented Generation (RAG) with PyMuPDF for text extraction, FAISS for vector similarity search, and OpenAI embeddings (text-embedding-ada-002). Documents are chunked at 1000 characters with 200-character overlap to preserve context at boundaries.\n\nPrompt Engineering Showcase:\nEach mode demonstrates different techniques like role assignment ('You are a critical research reviewer'), structured output prompting (numbered requirements), format constraints (bullet-point enforcement), and temperature tuning (0.0 for factual, 0.7 for ideation). This showcases how prompt design controls AI behavior and output quality."
      },
      technicalApproach: {
        title: "Technical Approach",
        content: "RAG Pipeline:\nPDF Upload to Text Extraction (PyMuPDF) to Recursive Chunking (1000 chars, 200 overlap) to Embedding (OpenAI) to Vector Store (FAISS). When users query, the system performs semantic search to retrieve 3-6 most relevant chunks, injects them into the prompt template, and generates grounded responses via GPT-3.5-turbo.\n\nPrompt Engineering Modes:\nStandard mode uses basic instruction and context (temp=0, deterministic). Detailed Analysis provides structured multi-part output with answer, evidence, and caveats. Critical Review employs role-based prompting with a 5-point critical framework. Quick Summary uses format-constrained bullet points (Main Point to Details to Significance). Methodology Focus does domain-specific extraction. Comparative Analysis offers contrast-oriented structure with Similarities to Differences to Implications.\n\nAll factual modes use temperature=0 to minimize hallucination. Creative modes (abstract generation, smart suggestions) use higher temperatures (0.3-0.7).\n\nTech Stack:\nFastAPI with CORS middleware, LangChain for LLM orchestration, FAISS for efficient semantic search, React with TypeScript for frontend. In-memory document storage (suitable for demo; would scale to Redis/database for production)."
      },
      result: {
        title: "Result",
        content: "Lumen successfully demonstrates full-stack AI proficiency across multiple domains:\n\nAI Engineering:\nComplete RAG implementation from scratch, not just API calls, showing understanding of embeddings, vector search, chunking strategies, and LLM orchestration.\n\nPrompt Engineering Mastery:\n6 distinct prompt strategies with temperature tuning, role assignment, output structuring, and chain-of-thought reasoning. Each mode produces measurably different outputs from the same document.\n\nUX Thoughtfulness:\nProgressive disclosure through mode selector, preset suggestions for quick starts, local persistence for continuity, and clear visual feedback (loading states, file indicators).\n\nProduction Patterns:\nModular FastAPI structure, error handling, environment variable management, CORS configuration, and scalable architecture (FAISS is production-grade).\n\nThe platform transforms academic paper analysis from a hours-long reading task into an interactive conversation, with specialized AI perspectives available on demand. It's essentially a domain-specific ChatGPT with built-in research expertise."
      }
    }
  },
  {
    id: "cocreators",
    title: "Co-Creators",
    category: "UX/UI Design & Frontend Development",
    categories: ["Frontend", "UX"],
    description: "Repositioned an AI startup as a purpose-driven innovation partner through a single-page website blending tech with nature, using malachite-themed minimalism and storytelling-driven UX.",
    details: [
      "Designed clear storytelling journey guiding users through Co-Creators' narrative",
      "Implemented progressive disclosure (expanders, hover states) to reduce cognitive load",
      "Built interactive testimonial components and logo carousel for social proof",
      "Developed modular React components for flexibility and fast iteration"
    ],
    tags: ["React (TSX)", "UX/UI Design", "Frontend Development", "Storytelling Design", "Component Architecture"],
    link: "#",
    demo: "https://co-creators.net/",
    slideshow: ["/projects/cocreators"],
    sections: {
      information: {
        title: "Information",
        content: "Co-Creators needed to reposition from a technical AI startup to a purpose-driven innovation partner. The challenge was creating a web presence that communicated both technical credibility and human-centered values while accommodating short attention spans.\n\nThe solution was a single-page storytelling experience that progressively reveals information through interactive components, allowing users to engage at their own depth while maintaining visual clarity and narrative flow."
      },
      designPrinciples: {
        title: "Design Principles & Direction",
        content: "The design centered on progressive disclosure to respect cognitive load. Expandable sections, hover-activated content, and interactive quadrants allowed users to scan quickly or explore deeply based on their needs.\n\nMalachite green accents highlighted key descriptive words, enabling busy decision-makers to extract value propositions without reading full paragraphs. The nature-tech aesthetic balanced Co-Creators' technical capabilities with their philosophical approach.\n\nTestimonials were strategically positioned early, with expandable keyword containers transforming lengthy details into scannable elements. Each section (from case studies to methodology to team bios) used progressive disclosure to maintain clean aesthetics while accommodating comprehensive content."
      },
      result: {
        title: "Result",
        content: "The website successfully repositioned Co-Creators as both technically capable and purpose-driven. The modular React architecture enabled rapid iteration and updates as the company evolved.\n\nUser feedback highlighted the effective balance between quick scanning and deep exploration. The interactive components (particularly the case study modals and methodology quadrants) allowed different visitor types to engage at appropriate depth levels, from quick validation to comprehensive evaluation."
      }
    }
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
    position: { top: "15%", left: "8%" },
    image: "/illustrations/constellation1.png",
    label: "Depression Analysis",
    size: "250px"
  },
  menopause: {
    position: { top: "25%", right: "18%" },
    image: "/illustrations/constellation2.png",
    label: "Menopause Study",
    size: "250px"
  },
  lumen: {
    position: { top: "55%", left: "22%" },
    image: "/illustrations/constellation3.png",
    label: "Lumen",
    size: "250px"
  },
  cocreators: {
    position: { top: "65%", right: "10%" },
    image: "/illustrations/constellation4.png",
    label: "Co-Creators Platform",
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