'use client';

import { useState, useEffect } from 'react';

interface LandingSectionProps {
  progress: number;
}

export default function LandingSection({ progress }: LandingSectionProps) {
  const textOpacity = progress < 0.2 ? 1 : Math.max(0, 1 - (progress - 0.2) * 3);
  const backgroundIntensity = Math.min(progress * 1.5, 1);

  const [stars, setStars] = useState<Array<{ left: number; top: number; delay: number; opacity: number }>>([]);

  useEffect(() => {
    setStars(
      [...Array(50)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        opacity: Math.random() * 0.3 + 0.1,
      }))
    );
  }, []);

  return (
    <section id="landing" className="section">
      <div className="fixed-background">
        <div className="gradient-overlay" style={{ opacity: backgroundIntensity }} />
        <div className="stars-container">
          {stars.map((star, i) => (
            <div
              key={i}
              className="star"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                animationDelay: `${star.delay}s`,
                opacity: star.opacity,
              }}
            />
          ))}
        </div>
      </div>
      <div className="name-title" style={{ opacity: textOpacity }}>
        Juli Furjes
      </div>
      <div className="subtitle" style={{ opacity: textOpacity }}>
        Cognitive Scientist · Tech-to-Human Designer
      </div>
      <div className="scroll-indicator" style={{ opacity: progress < 0.2 ? 1 : Math.max(0, 1 - (progress - 0.2) * 4) }}>
        SCROLL TO EXPLORE
      </div>

      <style jsx>{`
        .section {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #landing {
          overflow: hidden;
          position: relative;
        }

        .fixed-background {
          position: fixed;
          inset: 0;
          background: linear-gradient(135deg, #1a1f3a 0%, #151a35 25%, #0f1228 50%, #0a0e27 100%);
          z-index: 0;
        }

        .gradient-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top, #1a237e 0%, #0f1228 40%, transparent 70%);
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .stars-container {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
        }

        .star {
          position: absolute;
          width: 1px;
          height: 1px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 2px rgba(255, 255, 255, 0.3);
          animation: twinkle 3s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.4; }
        }
        .name-title { position: absolute; top: 20%; left: 50%; transform: translateX(-50%); font-size: clamp(2.2rem, 6vw, 4.2rem); font-weight: 300; letter-spacing: .3rem; color: #e8e6f0; text-align: center; z-index: 10; transition: opacity .6s ease; }
        .subtitle { position: absolute; top: calc(20% + 4.8rem); left: 50%; transform: translateX(-50%); font-size: clamp(1rem, 2.2vw, 1.2rem); font-weight: 300; letter-spacing: .2rem; color: #a8a6b8; text-align: center; z-index: 10; transition: opacity .6s ease; }
        .scroll-indicator {
          position: absolute;
          top: calc(100vh - 40vh); /* positions it ~10vh above the figure if figure ≈ 33vh tall */
          left: 50%;
          transform: translateX(-50%);
          color: #a8a6b8;
          font-size: 0.85rem;
          letter-spacing: 0.08rem;
          animation: float 2s ease-in-out infinite;
          z-index: 5;
          pointer-events: none;
          transition: top 0.3s ease;
        }

        .scroll-indicator::after {
          content: '↓';
          display: block;
          text-align: center;
          font-size: 1.3rem;
          margin-top: 0.4rem;
        }

        @media (max-width: 1024px) {
          .scroll-indicator { top: calc(100vh - 38vh); }
        }

        @media (max-width: 768px) {
          .scroll-indicator { top: calc(100vh - 36vh); font-size: 0.8rem; }
        }

        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-8px); }
        }
      `}</style>
    </section>
  );
}