import { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <>
      <div
        className="modal-backdrop"
        onClick={onClose}
        style={{ opacity: project ? 1 : 0, pointerEvents: project ? 'auto' : 'none' }}
      />
      <div
        className="modal"
        style={{
          opacity: project ? 1 : 0,
          transform: project ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.9)',
          pointerEvents: project ? 'auto' : 'none'
        }}
      >
        <button className="close-btn" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="modal-content">
          <div className="modal-header">
            <span className="category">{project.category}</span>
            <h2>{project.title}</h2>
          </div>

          <p className="description">{project.description}</p>

          <div className="details-section">
            <h3>Key Achievements</h3>
            <ul>
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
            ))}
          </div>

          <div className="links">
            {project.link && project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
                View Project ↗
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                GitHub ↗
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          z-index: 100;
          transition: opacity 0.3s ease;
        }

        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
          max-width: 700px;
          max-height: 85vh;
          background: linear-gradient(135deg, rgba(15, 20, 50, 0.95) 0%, rgba(10, 14, 39, 0.98) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          z-index: 101;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.2, 0.9, 0.2, 1);
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          appearance: none;
          border: 0;
          background: rgba(255, 255, 255, 0.1);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: #fff;
          font-size: 1.5rem;
          line-height: 1;
          cursor: pointer;
          opacity: 0.8;
          transition: all 0.2s;
          z-index: 10;
        }

        .close-btn:hover {
          opacity: 1;
          background: rgba(255, 255, 255, 0.15);
          transform: rotate(90deg);
        }

        .modal-content {
          padding: 40px;
          overflow-y: auto;
          max-height: 85vh;
        }

        .modal-header {
          margin-bottom: 24px;
        }

        .category {
          display: inline-block;
          font-size: 0.75rem;
          letter-spacing: 0.15rem;
          text-transform: uppercase;
          color: #8b92ff;
          margin-bottom: 8px;
          opacity: 0.9;
        }

        .modal-header h2 {
          font-size: 2rem;
          font-weight: 600;
          color: #fff;
          margin: 8px 0 0 0;
          line-height: 1.2;
        }

        .description {
          color: #c8c7d3;
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .details-section {
          margin-bottom: 32px;
        }

        .details-section h3 {
          font-size: 1.1rem;
          font-weight: 500;
          color: #cfd2ff;
          margin-bottom: 16px;
        }

        .details-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .details-section li {
          color: #c8c7d3;
          font-size: 0.95rem;
          line-height: 1.6;
          padding-left: 24px;
          margin-bottom: 12px;
          position: relative;
        }

        .details-section li:before {
          content: "▸";
          position: absolute;
          left: 0;
          color: #8b92ff;
          font-size: 1.1rem;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 32px;
        }

        .tag {
          display: inline-block;
          padding: 6px 14px;
          background: rgba(139, 146, 255, 0.1);
          border: 1px solid rgba(139, 146, 255, 0.2);
          border-radius: 20px;
          font-size: 0.85rem;
          color: #8b92ff;
          transition: all 0.2s;
        }

        .tag:hover {
          background: rgba(139, 146, 255, 0.15);
          border-color: rgba(139, 146, 255, 0.3);
        }

        .links {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border: 0;
          border-radius: 10px;
          color: #fff;
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 640px) {
          .modal {
            width: 95%;
            max-height: 90vh;
          }

          .modal-content {
            padding: 30px 24px;
          }

          .modal-header h2 {
            font-size: 1.5rem;
          }

          .close-btn {
            top: 16px;
            right: 16px;
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </>
  );
}
