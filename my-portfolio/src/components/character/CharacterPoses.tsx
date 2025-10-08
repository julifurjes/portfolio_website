import Image from "next/image";

interface CharacterPosesProps {
  progress: number;
  onClick?: () => void;
}

export default function CharacterPoses({ progress, onClick }: CharacterPosesProps) {
  const opacity1 = progress < 0.2 ? 1 : progress < 0.35 ? 1 - (progress - 0.2) / 0.15 : 0;
  const opacity2 = progress < 0.2 ? 0 : progress < 0.35 ? (progress - 0.2) / 0.15 : progress < 0.45 ? 1 : progress < 0.55 ? 1 - (progress - 0.45) / 0.1 : 0;
  const opacity3 = progress < 0.45 ? 0 : Math.min((progress - 0.45) / 0.15, 1);

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
      
      {progress > 0.6 && (
        <div className="click-hint">
          <span>Click to learn about me</span>
        </div>
      )}

      <style jsx>{`
        .observer-container { position: fixed; bottom: 0; left: 50%; transform: translateX(-50%); width: min(400px, 60vw); height: min(600px, 85vh); z-index: 15; pointer-events: auto; }
        .poses-container { position: relative; width: 100%; height: 100%; }
        .pose { position: absolute; inset: 0; transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .click-hint { position: absolute; bottom: 110%; left: 50%; transform: translateX(-50%); font-size: 0.7rem; color: rgba(232, 230, 240, 0.7); white-space: nowrap; animation: subtlePulse 3s ease-in-out infinite; pointer-events: none; letter-spacing: 0.05rem; text-shadow: 0 0 10px rgba(0, 0, 0, 0.8); }
        @keyframes subtlePulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.9; } }
        @media (max-width: 768px) { .observer-container{ width: 70vw; height: 70vh; } }
      `}</style>
    </div>
  );
}