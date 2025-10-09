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
          <h2 className="section-title">My Story</h2>

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
              <p className="story-text">
                I'm a Cognitive Scientist who discovered my passion at the intersection of human psychology, creative problem-solving, and technology. My academic background in Cognitive Science has given me deep insights into how people think and behave, grounding my work in principles like Gestalt theory and behavioral psychology. Technically, I've spent four years mastering Python for everything from algorithms to full-stack and data analysis, plus a year diving into JavaScript and TypeScript. But what really drives me is fighting for inclusivity and rethinking systems to make them more accessible. Whether that's gamifying coding classes for middle schoolers who initially didn't want to be there, or building user interfaces that truly understand human behavior. I believe the best digital experiences happen when empathy meets technical precision, and a little creativity makes it all come alive.
              </p>
            </div>
          </div>

          <div className="skills-grid">
            <div className="skill-category">
              <h4 className="skill-heading">Design & Research Tools</h4>
              <ul className="skill-list">
                <li><strong>Figma:</strong> UI/UX design, prototyping, design systems</li>
                <li><strong>User Research:</strong> Interviews, surveys, usability testing</li>
                <li><strong>Journey Mapping:</strong> User flows, service blueprints</li>
                <li><strong>Wireframing & Prototyping:</strong> Low to high-fidelity designs</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4 className="skill-heading">Development Skills</h4>
              <ul className="skill-list">
                <li><strong>Frontend:</strong> JavaScript, TypeScript, Vue.js, HTML/CSS, React</li>
                <li><strong>Backend:</strong> Python, SQL, FastAPI</li>
                <li><strong>Data Science:</strong> Machine Learning, NLP, statistical analysis</li>
                <li><strong>Version Control:</strong> Git, collaborative development</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4 className="skill-heading">Research & Analytics</h4>
              <ul className="skill-list">
                <li><strong>Cognitive Psychology:</strong> Behavioral analysis, decision-making patterns</li>
                <li><strong>Data Visualization:</strong> Creating insights from complex datasets</li>
                <li><strong>A/B Testing:</strong> Hypothesis-driven experimentation</li>
                <li><strong>User Behavior Analysis:</strong> Quantitative and qualitative methods</li>
              </ul>
            </div>

            <div className="skill-category">
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

      <style jsx>{`
        .backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(12px);
          z-index: 100;
        }

        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 92%;
          max-width: 1000px;
          max-height: 90vh;
          background: linear-gradient(135deg, rgba(15, 20, 50, 0.98) 0%, rgba(10, 14, 39, 0.99) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
          z-index: 101;
          overflow: hidden;
        }

        .close {
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

        .close:hover {
          opacity: 1;
          background: rgba(255, 255, 255, 0.12);
          transform: rotate(90deg);
        }

        .content {
          padding: 64px 80px;
          overflow-y: auto;
          max-height: 90vh;
        }

        /* Dark scrollbar */
        .content::-webkit-scrollbar {
          width: 10px;
        }

        .content::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
        }

        .content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }

        .content::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 48px 0;
          letter-spacing: -0.02em;
        }

        .profile-section {
          display: flex;
          gap: 40px;
          margin-bottom: 64px;
          align-items: flex-start;
        }

        .image-wrapper {
          flex-shrink: 0;
        }

        .image-wrapper :global(.profile-image) {
          width: 160px;
          height: 210px;
          border-radius: 0;
          object-fit: cover;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .story {
          flex: 1;
        }

        .story-text {
          color: #c8c7d3;
          font-size: 1.05rem;
          line-height: 1.8;
          margin: 0;
          text-align: justify;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 64px;
        }

        .skill-category {
          padding: 28px 32px;
          background: linear-gradient(135deg, rgba(139, 146, 255, 0.03) 0%, rgba(139, 146, 255, 0.01) 100%);
          border: 1px solid rgba(139, 146, 255, 0.06);
          transition: all 0.3s;
        }

        .skill-category:hover {
          background: linear-gradient(135deg, rgba(139, 146, 255, 0.05) 0%, rgba(139, 146, 255, 0.02) 100%);
          border-color: rgba(139, 146, 255, 0.1);
        }

        .skill-heading {
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(139, 146, 255, 0.9);
          margin: 0 0 20px 0;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
        }

        .skill-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .skill-list li {
          color: #c8c7d3;
          font-size: 0.9rem;
          line-height: 1.8;
          margin-bottom: 12px;
          padding-left: 16px;
          position: relative;
        }

        .skill-list li:before {
          content: "·";
          position: absolute;
          left: 0;
          color: rgba(139, 146, 255, 0.5);
          font-size: 1.4rem;
          line-height: 1.3;
        }

        .skill-list li:last-child {
          margin-bottom: 0;
        }

        .skill-list li strong {
          color: #e0e0e8;
          font-weight: 500;
        }

        @media (max-width: 900px) {
          .content {
            padding: 48px 40px;
          }

          .profile-section {
            flex-direction: column;
            gap: 32px;
            align-items: center;
            text-align: center;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .section-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 640px) {
          .modal {
            width: 95%;
            max-height: 94vh;
          }

          .content {
            padding: 40px 28px;
          }

          .close {
            top: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
          }

          .section-title {
            font-size: 1.75rem;
            margin-bottom: 32px;
          }

          .profile-section {
            margin-bottom: 48px;
          }

          .story-text {
            font-size: 1rem;
          }

          .skills-grid {
            margin-top: 48px;
          }

          .skill-toggle {
            padding: 16px 20px;
          }
        }
      `}</style>
    </>
  );
}