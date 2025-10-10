import { Project, FeaturedProject, ConstellationPosition } from '@/types';

// Project constellation data - each constellation represents one project
export const PROJECTS: Project[] = [
  {
    id: "depression",
    title: "Depression Trajectory Research",
    category: "Data Science Research Internship",
    categories: ["Data Science"],
    description: "Statistical modeling and machine learning for longitudinal mental health data. Supported a PhD research project on depression trajectories through statistical modeling and machine learning. Identified optimal models for highly imbalanced longitudinal data, created visualizations for pattern analysis, and documented methodologies for research transparency.",
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
        content: "During my internship at NOVA Medical Faculty in Lisbon, I contributed to a PhD research project analyzing depression trajectories using longitudinal data. I worked directly with a psychologist researcher with zero coding background, making clear communication and non-technical reporting essential to the project's success.\n\nThe primary challenge was twofold: working with a highly imbalanced dataset while maintaining model accuracy, and ensuring all findings were interpretable for clinical researchers without statistical training.\n\nMy role spanned the complete research pipeline: identifying the best fitting statistical models through extensive trial and error, conducting detailed data analyses, creating visualizations to uncover patterns, and documenting methodologies for reproducibility. A critical part of my work was translating complex statistical concepts into accessible language and visual formats that my supervisor could understand and use in their research. This experience significantly strengthened my ability to bridge technical and non-technical stakeholders."
      },
      approach: {
        title: "Technical Approach",
        content: "Statistical Modeling: I applied multiple modeling techniques to identify depression patterns in longitudinal data, ultimately combining Generalized Estimating Equations (GEE) with Random Forest classification. GEE is particularly useful for longitudinal studies because it accounts for repeated measurements from the same individuals over time.\n\nHandling Imbalanced Data: Mental health data typically has severe class imbalance (far fewer people in crisis categories than stable categories). To address this, I implemented SMOTE-Tomek resampling techniques, which generate synthetic examples of underrepresented groups while removing ambiguous borderline cases. This allowed the models to learn patterns from all trajectory groups effectively.\n\nPattern Discovery & Visualization: The analysis revealed three distinct depression trajectory groups, each with unique demographic and behavioral characteristics. I created comprehensive visualizations showing how age, education, employment status, multimorbidity, sleep patterns, and exercise habits correlate with different depression trajectories.\n\nResearch Documentation: Documentation was critical for research transparency. I wrote detailed methodological explanations and interpretable output summaries (available in the GitHub repository), ensuring that both technical and non-technical stakeholders could understand the analytical process and results."
      },
      findings: {
        title: "Key Findings",
        content: "The analysis identified three depression trajectory groups with distinct profiles.\n\nGroup 1 (Stable/Low Depression): Primarily younger individuals (late teens to mid-30s) with mid-level education and full-time employment. Regular exercise and moderate alcohol consumption served as protective factors, with low multimorbidity supporting mental stability.\n\nGroup 2 (Fluctuating Depression): Wider age range with concentration in late 20s to mid-30s, higher education levels, and increased unemployment/retirement. Multimorbidity and sleep patterns were key factors contributing to mental health fluctuations.\n\nGroup 3 (Severe/Progressive Depression): Predominantly older individuals (late 60s to 70s) with bimodal education distribution and high rates of retirement/unemployment. Significantly higher multimorbidity, with irregular sleep and exercise patterns exacerbating symptoms.\n\nImpact: These findings demonstrated how demographic and lifestyle factors interact with depression trajectories, providing insights for targeted intervention strategies. The work showcases my ability to handle complex statistical challenges, communicate across disciplines, and produce research-grade documentation."
      }
    }
  },
  {
    id: "menopause",
    title: "Menopause & Cognitive Function Research",
    category: "MSc Thesis Research",
    categories: ["Data Science"],
    description: "Longitudinal analysis of hormonal, cognitive, emotional, and social factors. Analyzed the integrated impact of hormonal, cognitive, emotional, and social factors during menopause using longitudinal data from 2,309 women. Applied linear mixed-effects models to identify how vasomotor symptoms, social support, and menopausal stages affect cognitive function and emotional wellbeing.",
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
        content: "Menopause represents a critical neurocognitive and psychosocial transition affecting up to two-thirds of women through subjective cognitive difficulties like 'brain fog,' forgetfulness, and memory challenges. Approximately 70% experience verbal and working memory issues that impact daily functioning and work performance.\n\nDespite recognition that hormonal changes (decreased estradiol, increased FSH) influence brain function, research has traditionally studied hormonal, cognitive, emotional, and social dimensions separately. My MSc thesis addressed this gap by analyzing how these factors interact across the menopausal transition using longitudinal data from the Study of Women's Health Across the Nation (SWAN)."
      },
      approach: {
        title: "Technical Approach",
        content: "Data Preparation: I analyzed data from 2,309 women (aged 42-52) contributing 24,081 observations across multiple time points. After excluding hormone therapy users and participants with insufficient cognitive assessments, I applied rigorous data preparation: stratified K-Nearest Neighbours imputation for missing data, log and square root transformations for skewed variables, and inverse-frequency weighting to address stage imbalances.\n\nMeasurement & Variables: Cognitive function was measured via the East Boston Memory Test (EBMT) immediate and delayed recall, averaged into a single score. Emotional difficulties, social support, and symptom severity (hot flashes, night sweats, cold sweats, irritability, mood fluctuations) were assessed through validated self-report measures.\n\nStatistical Modeling: I fitted linear mixed-effects models via REML, controlling for menopausal stage, visit number, age, and interview language, with random intercepts and slopes to capture individual trajectories. This approach allowed me to model within-person changes over time while accounting for substantial individual variability. Mixed-effects models are particularly powerful for longitudinal studies because they handle repeated measurements from the same individuals and can separate population-level trends from individual variation."
      },
      findings: {
        title: "Key Findings",
        content: "Surgical Menopause as Primary Cognitive Risk: Natural menopause stages (early/late perimenopause, post-menopause) showed no significant cognitive effects compared to pre-menopause. However, surgical menopause produced very significant memory deficits (p < 0.001), indicating that sudden estrogen loss has distinct neurocognitive consequences that differ from gradual hormonal changes.\n\nVasomotor Symptom Patterns: Night sweats (β = -0.13, p < 0.001), cold sweats (β = -0.10, p < 0.001), irritability, and mood fluctuations predicted lower cognitive scores. Critically, hot flash bothersomeness (β = -0.08, p = 0.002) proved more cognitively impactful than frequency, suggesting that subjective symptom distress matters more than objective occurrence.\n\nSocial Support as Protective Factor: Greater social support positively predicted cognitive performance (β = 0.17, p < 0.001) and negatively associated with emotional struggles. Conversely, higher emotional difficulty (β = -0.18, p < 0.05) and overall symptom severity (β = -0.10, p < 0.01) related to poorer cognitive outcomes.\n\nIndividual Variability: Low marginal R² (≤ 0.03) but moderate conditional R² (∼ 0.50) indicated that while fixed effects explained limited variance, individual trajectories varied substantially. This highlights the importance of personalized approaches to menopausal health rather than one-size-fits-all interventions.\n\nImpact: This research demonstrates how integrating multiple dimensions (hormonal, cognitive, emotional, social) provides a more complete understanding of women's health during menopause. The findings suggest that clinical interventions should address both symptom management and social support systems, particularly for women undergoing surgical menopause."
      }
    }
  },
  {
    id: "lumen",
    title: "Lumen - AI Research Assistant",
    category: "Full-Stack AI Platform",
    categories: ["AI Development", "Frontend", "UX"],
    description: "Full-stack AI platform for analyzing academic papers through conversational AI. An intelligent tool that helps researchers understand academic papers faster through natural conversation. Built with RAG architecture and 5 specialized analysis modes.",
    details: [
      "Built a complete RAG pipeline that retrieves and generates answers from uploaded documents",
      "Created 5 different AI analysis modes (Quick Summary, Detailed Analysis, Critical Review, Methodology Focus, Standard)",
      "Designed an intuitive interface with multi-document chat management",
      "Developed FastAPI backend with real-time document processing"
    ],
    tags: ["RAG", "NLP", "FastAPI", "OpenAI", "Prompt Engineering", "React", "TypeScript", "Python"],
    link: "#",
    github: "https://github.com/julifurjes/ai_research_platform",
    slideshow: ["/projects/lumen"],
    sections: {
      information: {
        title: "Information",
        content: "Lumen is an intelligent document analysis tool that helps researchers, students, and academics quickly understand and interact with academic papers through conversational AI. The platform demonstrates full-stack AI development, from backend RAG architecture to frontend UX design.\n\nResearchers spend hours reading dense academic papers. The core challenge was creating a system that could provide multiple analysis perspectives on the same document. Rather than a one-size-fits-all chatbot, Lumen offers 5 specialized query modes, each using distinct prompt engineering techniques, allowing users to switch between quick summaries, detailed analyses, critical reviews, and methodology deep dives in real time."
      },
      designPrinciples: {
        title: "Design Principles & Direction",
        content: "UX & Frontend: The interface uses a nature-inspired design system (forest greens #355E38, earth browns, warm beige) with the Inter font family for readability. The user flow is intentionally simple: upload PDF, ask questions, switch analysis modes. Multi-chat management via persistent sidebar allows researchers to work across multiple papers simultaneously.\n\nKey UX patterns include smooth fadeIn animations, hover transforms, and a pulsing 'Thinking...' indicator during processing. The 4 preset prompt suggestions lower the barrier to entry, while the query mode selector educates users on AI capabilities. Local storage preserves chat history across sessions.\n\nBackend Architecture: Implemented Retrieval-Augmented Generation (RAG) with PyMuPDF for text extraction, FAISS for vector similarity search, and OpenAI embeddings (text-embedding-ada-002). Documents are chunked at 1000 characters with 200-character overlap to preserve context at boundaries.\n\nPrompt Engineering Showcase: Each mode demonstrates different techniques like role assignment ('You are a critical research reviewer'), structured output prompting (numbered requirements), format constraints (bullet-point enforcement), and temperature tuning (0.0 for factual, 0.7 for ideation). This showcases how prompt design controls AI behavior and output quality."
      },
      technicalApproach: {
        title: "Technical Approach",
        content: "RAG Pipeline: When you upload a paper, the system extracts text from the PDF, breaks it into manageable chunks (with overlap to preserve context), converts chunks into vector embeddings, and stores them in a FAISS vector database. When users query, the system performs semantic search to retrieve the most relevant chunks, injects them into the prompt template, and generates grounded responses via GPT-3.5-turbo.\n\nPrompt Engineering Modes: Standard mode uses basic instruction and context (temp=0, deterministic). Detailed Analysis provides structured multi-part output with answer, evidence, and caveats. Critical Review employs role-based prompting with a 5-point critical framework. Quick Summary uses format-constrained bullet points (Main Point to Details to Significance). Methodology Focus does domain-specific extraction.\n\nAll factual modes use temperature=0 to minimize hallucination. Creative modes (abstract generation, smart suggestions) use higher temperatures (0.3-0.7).\n\nTech Stack: FastAPI with CORS middleware, LangChain for LLM orchestration, FAISS for efficient semantic search, React with TypeScript for frontend. In-memory document storage (suitable for demo; would scale to Redis/database for production)."
      },
      result: {
        title: "Result",
        content: "Lumen successfully demonstrates full-stack AI proficiency across multiple domains.\n\nAI Engineering: Complete RAG implementation from scratch, not just API calls, showing understanding of embeddings, vector search, chunking strategies, and LLM orchestration.\n\nPrompt Engineering Mastery: 5 distinct prompt strategies with temperature tuning, role assignment, output structuring, and chain-of-thought reasoning. Each mode produces measurably different outputs from the same document.\n\nUX Thoughtfulness: Progressive disclosure through mode selector, preset suggestions for quick starts, local persistence for continuity, and clear visual feedback (loading states, file indicators).\n\nProduction Patterns: Modular FastAPI structure, error handling, environment variable management, CORS configuration, and scalable architecture (FAISS is production-grade).\n\nThe platform transforms academic paper analysis from a hours-long reading task into an interactive conversation, with specialized AI perspectives available on demand. It's essentially a domain-specific ChatGPT with built-in research expertise."
      }
    }
  },
  {
    id: "cocreators",
    title: "Co-Creators Website",
    category: "UX/UI Design & Frontend Development",
    categories: ["Frontend", "UX"],
    description: "Repositioning an AI startup through storytelling-driven design. Repositioned an AI startup as a purpose-driven innovation partner through a single-page website blending tech with nature, using malachite-themed minimalism and storytelling-driven UX.",
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
        content: "Co-Creators needed to reposition from a technical AI startup to a purpose-driven innovation partner. The challenge was creating a web presence that communicated both technical credibility and human-centered values while accommodating short attention spans.\n\nUnderstanding the Brief: Co-Creators approached me with a clear vision: they needed a website that would stand apart from typical AI startups by blending technology with nature in a sophisticated, approachable way. The brief emphasized creating a clean, minimal aesthetic, but with a warmer, more organic feel through deep malachite greens and subtle natural elements. Most importantly, they wanted their client testimonials to be the hero of the site, as social proof was crucial for establishing trust in their innovative approach to solving complex systemic challenges. The design needed to feel confident and purpose-driven while remaining inspiring and accessible, avoiding the cold, overly technical aesthetic common in the AI space.\n\nThe Iterative Process: The design process was highly iterative, with multiple feedback rounds to ensure Co-Creators could truly identify themselves in the final product. We worked closely together, refining the visual language, adjusting the narrative flow, and fine-tuning interactive elements until the website felt like an authentic representation of their brand identity. This collaborative approach was essential for creating something they felt proud to share with potential clients.\n\nThe solution was a single-page storytelling experience that progressively reveals information through interactive components, allowing users to engage at their own depth while maintaining visual clarity and narrative flow."
      },
      designPrinciples: {
        title: "Design Principles & Direction",
        content: "Progressive Disclosure for Cognitive Load: The design centered on respecting users' time and attention. Expandable sections, hover-activated content, and interactive quadrants allowed visitors to scan quickly or explore deeply based on their needs. This approach acknowledged that different stakeholders (executives, technical leads, partners) need different levels of detail.\n\nVisual Hierarchy & Scanning: Malachite green accents highlighted key descriptive words, enabling busy decision-makers to extract value propositions without reading full paragraphs. The nature-tech aesthetic balanced Co-Creators' technical capabilities with their philosophical approach, creating visual interest without overwhelming users.\n\nTestimonials as Hero Content: Testimonials were strategically positioned early in the experience, with expandable keyword containers transforming lengthy client feedback into scannable elements. This made social proof immediately visible while allowing interested visitors to read full details.\n\nComponent Architecture: Each section (from case studies to methodology to team bios) used progressive disclosure to maintain clean aesthetics while accommodating comprehensive content. The modular React component structure made it easy to update individual sections as Co-Creators evolved their messaging."
      },
      result: {
        title: "Result",
        content: "The website successfully repositioned Co-Creators as both technically capable and purpose-driven. The modular React architecture enabled rapid iteration and updates as the company evolved, which proved valuable as they refined their positioning.\n\nUser feedback highlighted the effective balance between quick scanning and deep exploration. The interactive components (particularly the case study modals and methodology quadrants) allowed different visitor types to engage at appropriate depth levels, from quick validation to comprehensive evaluation.\n\nMost importantly, the collaborative and iterative design process resulted in a website that Co-Creators genuinely identified with. The final product authentically represented their brand values and resonated with their target audience, establishing them as a distinctive voice in the AI space."
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
  id: p.id,
  title: p.title,
  category: p.category,
  description: p.description,
  tags: p.tags,
  link: p.link
}));