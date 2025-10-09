interface SkyBackgroundProps {
  progress: number;
}

export default function SkyBackground({ progress }: SkyBackgroundProps) {
  const opacity = progress > 0.3 ? Math.min((progress - 0.3) / 0.4, 1) : 0;

  return (
    <>
      <div className="sky-background" style={{ opacity }} />
      <style jsx>{`
        .sky-background {
          position: fixed;
          inset: 0;
          background: radial-gradient(ellipse at top, #1a237e 0%, #0f1228 40%, #0a0e27 70%);
          transition: opacity 1.2s ease;
          z-index: 1;
        }
      `}</style>
    </>
  );
}