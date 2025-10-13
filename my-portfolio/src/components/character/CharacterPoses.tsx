import Image from "next/image";

interface CharacterPosesProps {
  progress: number;
  onClick?: () => void;
}

export default function CharacterPoses({ progress, onClick }: CharacterPosesProps) {
  // Smoother, more gradual transitions with longer overlap periods
  const opacity1 = progress < 0.2 ? 1 : progress < 0.4 ? 1 - (progress - 0.2) / 0.2 : 0;
  const opacity2 = progress < 0.15 ? 0 : progress < 0.35 ? (progress - 0.15) / 0.2 : progress < 0.4 ? 1 : progress < 0.65 ? 1 - (progress - 0.4) / 0.15 : 0;
  const opacity3 = progress < 0.5 ? 0 : Math.min((progress - 0.4) / 0.1, 1);

  return (
    <div className="observer-container" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <div className="poses-container">
        <div className="pose" style={{ opacity: opacity1 }}>
          <Image
            src="/illustrations/binoculars1.png"
            alt="Standing"
            fill
            style={{ objectFit: "contain", objectPosition: "bottom center" }}
            priority
          />
        </div>
        <div className="pose" style={{ opacity: opacity2 }}>
          <Image
            src="/illustrations/binoculars2.png"
            alt="Lifting binoculars"
            fill
            style={{ objectFit: "contain", objectPosition: "bottom center" }}
            priority
          />
        </div>
        <div className="pose" style={{ opacity: opacity3 }}>
          <Image
            src="/illustrations/binoculars3.png"
            alt="Looking through binoculars"
            fill
            style={{ objectFit: "contain", objectPosition: "bottom center" }}
            priority
          />
        </div>
      </div>
      
      {progress > 0.55 && (
        <div className="click-hint">
          <span className="hint-text">Click to read about me</span>
          <svg className="hint-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 16L10 4M10 16L6 12M10 16L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}

      <style jsx>{`
        .observer-container {
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 32vh; /* Slightly reduced to match other poses */
          aspect-ratio: 3 / 5; /* adjust to your figure's ratio (e.g., width:height = 3:5) */
          z-index: 15;
          pointer-events: auto;
          transition: transform 0.3s ease;
        }
        .observer-container:hover {
          transform: translateX(-50%) translateY(-8px);
        }
        .poses-container { position: relative; width: 100%; height: 100%; }
        .pose { position: absolute; inset: 0; transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1); }

        .click-hint {
          position: absolute;
          bottom: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          pointer-events: none;
          z-index: 20;
          animation: floatHint 2.5s ease-in-out infinite;
        }

        .hint-text {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.85);
          white-space: nowrap;
          letter-spacing: 0.01rem;
          font-weight: 400;
        }

        .hint-arrow {
          color: rgba(255, 255, 255, 0.7);
          animation: bounceArrow 1.5s ease-in-out infinite;
        }

        @keyframes floatHint {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        @keyframes bounceArrow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }

        @media (max-width: 768px) {
          .observer-container { height: 28vh; }
          .hint-text { font-size: 0.7rem; }
          .click-hint { bottom: calc(100% + 5px); }
        }
      `}</style>
    </div>
  );
}