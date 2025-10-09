"use client";
import { useEffect, useRef } from "react";

interface StarsProps {
  progress: number;
  children?: React.ReactNode;
}

export default function Stars({ progress, children }: StarsProps) {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;
    if ((container as any).dataset.seeded) return;
    (container as any).dataset.seeded = "1";

    const count = 160;
    for (let i = 0; i < count; i++) {
      const s = document.createElement("div");
      s.className = "star";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.animationDelay = Math.random() * 3 + "s";
      container.appendChild(s);
    }
  }, []);

  const starsOpacity = progress > 0.5 ? Math.min((progress - 0.5) / 0.3, 1) : 0;
  const constellationsOpacity = progress > 0.35 ? 1 : 0;

  return (
    <div className="stars" ref={starsRef} style={{ opacity: starsOpacity }}>
      <div className="constellations-container" style={{ opacity: constellationsOpacity }}>
        {children}
      </div>
      <style jsx>{`
        .stars { position: fixed; inset: 0; transition: opacity 1s ease; z-index: 2; pointer-events: none; }
        .constellations-container { position: absolute; top: 0; left: 0; right: 0; height: 50vh; pointer-events: auto; transition: opacity 0.5s ease; }
        :global(.star) { position: absolute; width: 2px; height: 2px; background: white; border-radius: 50%; animation: twinkle 4s ease-in-out infinite; }
        @keyframes twinkle { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
      `}</style>
    </div>
  );
}