import { useEffect, useRef } from "react";
import Image from "next/image";

type Link = { label: string; href: string };

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  links?: Link[];
}

export default function AboutModal({
  isOpen,
  onClose,
}: AboutModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) closeBtnRef.current?.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="backdrop" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          className="close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="content">
          <div className="profile-section">
            <div className="image-wrapper">
              <Image
                src="/me.jpg"
                alt="Profile"
                width={150}
                height={200}
                className="profile-image"
              />
            </div>

            <div className="story">
              <h2 className="section-title">My Story</h2>
              <p className="story-text">
                I'm a Cognitive Scientist who discovered my passion at the intersection of human psychology, creative problem-solving, and technology. My academic background in Cognitive Science has given me deep insights into how people think and behave, grounding my work in principles like Gestalt theory and behavioral psychology. Technically, I've spent four years mastering Python for everything from algorithms to full-stack and data analysis, plus a year diving into JavaScript and TypeScript. But what really drives me is fighting for inclusivity and rethinking systems to make them more accessible. Whether that's gamifying coding classes for middle schoolers who initially didn't want to be there, or building user interfaces that truly understand human behavior. I believe the best digital experiences happen when empathy meets technical precision, and a little creativity makes it all come alive.
              </p>
            </div>
          </div>

          <div className="skills-grid">
            <div className="skill-category">
              <div className="skills-columns">
                <div className="skill-column">
                  <h4 className="skill-heading">Design & Research Tools</h4>
                  <ul className="skill-list">
                    <li><strong>Figma:</strong> UI/UX design, prototyping, design systems</li>
                    <li><strong>User Research:</strong> Interviews, surveys, usability testing</li>
                    <li><strong>Journey Mapping:</strong> User flows, service blueprints</li>
                    <li><strong>Wireframing & Prototyping:</strong> Low to high-fidelity designs</li>
                  </ul>
                </div>

                <div className="skill-column">
                  <h4 className="skill-heading">Development Skills</h4>
                  <ul className="skill-list">
                    <li><strong>Frontend:</strong> JavaScript, TypeScript, Vue.js, HTML/CSS, React</li>
                    <li><strong>Backend:</strong> Python, SQL, FastAPI</li>
                    <li><strong>Data Science:</strong> Machine Learning, NLP, statistical analysis</li>
                    <li><strong>Version Control:</strong> Git, collaborative development</li>
                  </ul>
                </div>

                <div className="skill-column">
                  <h4 className="skill-heading">Research & Analytics</h4>
                  <ul className="skill-list">
                    <li><strong>Cognitive Psychology:</strong> Behavioral analysis, decision-making patterns</li>
                    <li><strong>Data Visualization:</strong> Creating insights from complex datasets</li>
                    <li><strong>A/B Testing:</strong> Hypothesis-driven experimentation</li>
                    <li><strong>User Behavior Analysis:</strong> Quantitative and qualitative methods</li>
                  </ul>
                </div>

                <div className="skill-column">
                  <h4 className="skill-heading">Soft Skills</h4>
                  <ul className="skill-list">
                    <li><strong>Cross-functional Collaboration:</strong> Bridging technical and creative teams</li>
                    <li><strong>Stakeholder Communication:</strong> Translating complex concepts accessibly</li>
                    <li><strong>Systems Thinking:</strong> Identifying root causes and systematic solutions</li>
                    <li><strong>Inclusive Design:</strong> Accessibility and barrier-free experiences</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(4px);
          z-index: 100;
        }

        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
          max-width: 1100px;
          max-height: 90vh;
          background: rgba(15, 20, 50, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          z-index: 101;
          overflow: hidden;
        }

        .close {
          position: absolute;
          top: 20px;
          right: 20px;
          appearance: none;
          border: 0;
          background: rgba(255, 255, 255, 0.1);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          color: #fff;
          font-size: 1.5rem;
          line-height: 1;
          cursor: pointer;
          opacity: 0.8;
          transition: all 0.2s;
          z-index: 10;
        }

        .close:hover {
          opacity: 1;
          background: rgba(255, 255, 255, 0.15);
        }

        .content {
          padding: 40px;
          overflow-y: auto;
          max-height: 90vh;
        }

        .profile-section {
          display: flex;
          gap: 32px;
          margin-bottom: 32px;
          align-items: flex-start;
        }

        .image-wrapper {
          flex-shrink: 0;
        }

        .image-wrapper :global(.profile-image) {
          width: 150px;
          height: 200px;
          border-radius: 12px;
          object-fit: cover;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .story {
          flex: 1;
        }

        .section-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 12px 0;
        }

        .story-text {
          color: #c8c7d3;
          font-size: 0.95rem;
          line-height: 1.7;
          margin: 0;
        }

        .skills-grid {
          margin-top: 32px;
        }

        .skill-category {
        }

        .skills-columns {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px 32px;
        }

        .skill-column {
        }

        .skill-heading {
          font-size: 1rem;
          font-weight: 600;
          color: #8b92ff;
          margin: 0 0 10px 0;
        }

        .skill-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .skill-list li {
          color: #c8c7d3;
          font-size: 0.875rem;
          line-height: 1.6;
          margin-bottom: 6px;
        }

        .skill-list li strong {
          color: #e0e0e8;
        }

        @media (max-width: 900px) {
          .content {
            padding: 30px 24px;
          }

          .profile-section {
            flex-direction: column;
            gap: 20px;
          }

          .skills-columns {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 640px) {
          .modal {
            width: 95%;
            max-height: 95vh;
          }

          .content {
            padding: 24px 20px;
          }

          .close {
            top: 16px;
            right: 16px;
          }

          .section-title, .category-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}