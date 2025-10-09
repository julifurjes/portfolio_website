import { Project } from '@/types';
import Image from 'next/image';

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
          {/* TLDR Section */}
          <div className="tldr-section">
            <div className="modal-header">
              <span className="category">{project.category}</span>
              <h2>{project.title}</h2>
            </div>

            <p className="description">{project.description}</p>

            <div className="details-grid">
              <div className="details-column">
                <h3>Key Achievements</h3>
                <ul>
                  {project.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="details-column">
                <h3>Skills</h3>
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
                      {project.id === 'cocreators' ? 'See Website ↗' : 'Live Demo ↗'}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Sections */}
          {project.sections && Object.keys(project.sections).length > 0 && (
            <div className="detailed-sections">
              <div className="section-divider" />

              {Object.entries(project.sections).map(([key, section]) => (
                <section key={key} className="content-section">
                  <div className="section-grid">
                    <h2 className="section-title">{section.title}</h2>
                    <div className="section-content">
                      {section.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                      {section.images && (
                        <div className="section-images">
                          {section.images.map((img, idx) => (
                            <div key={idx} className="image-wrapper">
                              <Image
                                src={img}
                                alt={`${project.title} - ${section.title} ${idx + 1}`}
                                width={800}
                                height={600}
                                className="section-image"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(12px);
          z-index: 100;
          transition: opacity 0.3s ease;
        }

        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 95%;
          max-width: 1400px;
          max-height: 92vh;
          background: linear-gradient(135deg, rgba(15, 20, 50, 0.98) 0%, rgba(10, 14, 39, 0.99) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
          z-index: 101;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.2, 0.9, 0.2, 1);
        }

        .close-btn {
          position: fixed;
          top: 32px;
          right: 32px;
          appearance: none;
          border: 0;
          background: rgba(255, 255, 255, 0.08);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          color: #fff;
          font-size: 1.75rem;
          line-height: 1;
          cursor: pointer;
          opacity: 0.7;
          transition: all 0.2s;
          z-index: 10;
        }

        .close-btn:hover {
          opacity: 1;
          background: rgba(255, 255, 255, 0.12);
          transform: rotate(90deg);
        }

        .modal-content {
          padding: 64px 80px;
          overflow-y: auto;
          max-height: 92vh;
        }

        /* Dark scrollbar */
        .modal-content::-webkit-scrollbar {
          width: 10px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        /* TLDR Section */
        .tldr-section {
          margin-bottom: 64px;
          padding-bottom: 48px;
        }

        .modal-header {
          margin-bottom: 32px;
        }

        .category {
          display: inline-block;
          font-size: 0.7rem;
          letter-spacing: 0.2rem;
          text-transform: uppercase;
          color: #8b92ff;
          margin-bottom: 12px;
          opacity: 0.85;
          font-weight: 500;
        }

        .modal-header h2 {
          font-size: 2.75rem;
          font-weight: 600;
          color: #fff;
          margin: 0;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .description {
          color: #c8c7d3;
          font-size: 1.15rem;
          line-height: 1.7;
          margin-bottom: 48px;
          max-width: 900px;
        }

        .details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          margin-bottom: 40px;
        }

        .details-column h3 {
          font-size: 0.9rem;
          font-weight: 500;
          color: #8b92ff;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
        }

        .details-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .details-column li {
          color: #c8c7d3;
          font-size: 0.95rem;
          line-height: 1.7;
          padding-left: 24px;
          margin-bottom: 14px;
          position: relative;
        }

        .details-column li:before {
          content: "—";
          position: absolute;
          left: 0;
          color: rgba(139, 146, 255, 0.5);
          font-size: 1rem;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tag {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(139, 146, 255, 0.08);
          border: 1px solid rgba(139, 146, 255, 0.15);
          border-radius: 6px;
          font-size: 0.85rem;
          color: rgba(139, 146, 255, 0.9);
          transition: all 0.2s;
        }

        .tag:hover {
          background: rgba(139, 146, 255, 0.12);
          border-color: rgba(139, 146, 255, 0.25);
        }

        .links {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
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
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.35);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.1);
        }

        /* Detailed Sections */
        .detailed-sections {
          margin-top: 64px;
        }

        .section-divider {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1) 50%,
            transparent
          );
          margin: 64px 0;
        }

        .content-section {
          margin-bottom: 80px;
        }

        .content-section:last-child {
          margin-bottom: 0;
        }

        .section-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 48px;
          align-items: start;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #fff;
          margin: 0;
          letter-spacing: -0.01em;
          position: sticky;
          top: 0;
        }

        .section-content {
          margin: 0;
        }

        .section-content p {
          color: #c8c7d3;
          font-size: 1.05rem;
          line-height: 1.8;
          margin: 0 0 24px 0;
        }

        .section-content p:last-child {
          margin-bottom: 0;
        }

        .section-images {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-top: 40px;
        }

        .image-wrapper {
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(0, 0, 0, 0.2);
        }

        .image-wrapper :global(.section-image) {
          width: 100%;
          height: auto;
          display: block;
        }

        @media (max-width: 1024px) {
          .modal {
            width: 95%;
            max-width: 900px;
          }

          .modal-content {
            padding: 48px 56px;
          }

          .details-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .modal-header h2 {
            font-size: 2.25rem;
          }

          .section-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .section-title {
            font-size: 1.35rem;
            position: static;
          }
        }

        @media (max-width: 640px) {
          .modal {
            width: 96%;
            max-height: 94vh;
          }

          .modal-content {
            padding: 40px 28px;
          }

          .modal-header h2 {
            font-size: 1.75rem;
          }

          .section-title {
            font-size: 1.35rem;
          }

          .close-btn {
            top: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
          }

          .description,
          .section-content p {
            font-size: 1rem;
          }

          .tldr-section {
            margin-bottom: 48px;
            padding-bottom: 32px;
          }

          .content-section {
            margin-bottom: 56px;
          }
        }
      `}</style>
    </>
  );
}
