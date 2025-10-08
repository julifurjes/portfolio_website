interface LandingSectionProps {
  progress: number;
}

export default function LandingSection({ progress }: LandingSectionProps) {
  const opacity = progress < 0.2 ? 1 : Math.max(0, 1 - (progress - 0.2) * 3);

  return (
    <section id="landing" className="section">
      <div className="name-title" style={{ opacity }}>
        Juli Furjes
      </div>
      <div className="subtitle" style={{ opacity }}>
        Behavioural Technology Designer · UX Research · Frontend · AI
      </div>
      <div className="scroll-indicator" style={{ opacity: progress < 0.2 ? 1 : Math.max(0, 1 - (progress - 0.2) * 4) }}>
        SCROLL TO EXPLORE
      </div>

      <style jsx>{`
        .section { min-height: 100vh; position: relative; display: flex; align-items: center; justify-content: center; }
        #landing { background: linear-gradient(to bottom, #1a1f3a 0%, #0a0e27 100%); overflow: hidden; }
        .name-title { position: absolute; top: 20%; left: 50%; transform: translateX(-50%); font-size: clamp(2.2rem, 6vw, 4.2rem); font-weight: 300; letter-spacing: .3rem; color: #e8e6f0; text-align: center; z-index: 10; transition: opacity .6s ease; }
        .subtitle { position: absolute; top: calc(20% + 4.8rem); left: 50%; transform: translateX(-50%); font-size: clamp(1rem, 2.2vw, 1.2rem); font-weight: 300; letter-spacing: .2rem; color: #a8a6b8; text-align: center; z-index: 10; transition: opacity .6s ease; }
        .scroll-indicator { position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); color: #a8a6b8; font-size: .95rem; letter-spacing: .1rem; animation: float 2s ease-in-out infinite; z-index: 20; }
        .scroll-indicator::after { content: '↓'; display: block; text-align: center; font-size: 1.5rem; margin-top: .5rem; }
        @keyframes float { 0%,100%{ transform: translateX(-50%) translateY(0);} 50%{ transform: translateX(-50%) translateY(-10px);} }
      `}</style>
    </section>
  );
}