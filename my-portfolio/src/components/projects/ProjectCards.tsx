import { FEATURED_PROJECTS } from '@/data/projects';

interface ProjectCardsProps {
  progress: number;
  onProjectClick: (projectId: string) => void;
}

export default function ProjectCards({ progress, onProjectClick }: ProjectCardsProps) {
  const cardOpacity = progress > 0.85 ? Math.min((progress - 0.85) / 0.15, 1) : 0;

  return (
    <div className="project-cards-container" style={{ opacity: cardOpacity }}>
      <h2 className="projects-heading">Featured Work</h2>
      <div className="project-grid">
        {FEATURED_PROJECTS.map((project, index) => (
          <div
            key={index}
            onClick={() => onProjectClick(project.id)}
            className="project-card"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="project-category">{project.category}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <div className="project-arrow">→</div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .project-cards-container { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; transition: opacity 1s ease; position: relative; z-index: 10; }
        .projects-heading { font-size: clamp(2rem, 4vw, 3rem); font-weight: 300; letter-spacing: 0.2rem; text-align: center; color: #e8e6f0; margin-bottom: 3rem; }
        .project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .project-card {
          position: relative; background: rgba(26, 35, 126, 0.15); border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px; padding: 2rem; text-decoration: none; color: inherit;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; overflow: hidden;
        }
        .project-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(100, 150, 255, 0.1), transparent); opacity: 0; transition: opacity 0.4s ease; }
        .project-card:hover { transform: translateY(-8px); border-color: rgba(255, 255, 255, 0.3); background: rgba(26, 35, 126, 0.25); box-shadow: 0 20px 60px rgba(100, 150, 255, 0.2); }
        .project-card:hover::before { opacity: 1; }
        .project-category { font-size: 0.75rem; letter-spacing: 0.15rem; text-transform: uppercase; color: #a8a6f0; margin-bottom: 0.75rem; font-weight: 500; }
        .project-title { font-size: 1.5rem; font-weight: 400; color: #e8e6f0; margin-bottom: 1rem; line-height: 1.3; }
        .project-description { font-size: 0.95rem; color: #c8c7d3; line-height: 1.6; margin-bottom: 1.5rem; }
        .project-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; }
        .tag { font-size: 0.75rem; padding: 0.35rem 0.75rem; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; color: #a8a6b8; letter-spacing: 0.05rem; }
        .project-arrow { position: absolute; bottom: 1.5rem; right: 1.5rem; font-size: 1.5rem; color: #a8a6f0; opacity: 0; transform: translateX(-10px); transition: all 0.3s ease; }
        .project-card:hover .project-arrow { opacity: 1; transform: translateX(0); }
        @media (max-width: 768px) {
          .project-cards-container { padding: 3rem 1.5rem; padding-bottom: 4rem; }
          .project-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .projects-heading { letter-spacing: 0.1rem; }
        }
      `}</style>
    </div>
  );
}