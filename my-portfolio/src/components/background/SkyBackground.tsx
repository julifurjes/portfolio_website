interface SkyBackgroundProps {
  progress: number;
}

export default function SkyBackground({ progress }: SkyBackgroundProps) {
  const opacity = progress > 0.5 ? Math.min((progress - 0.5) / 0.3, 1) : 0;

  return (
    <>
      <div className="sky-background" style={{ opacity }} />
      <style jsx>{`
        .sky-background { position: fixed; inset: 0; background: radial-gradient(ellipse at top, #1a237e 0%, #0a0e27 50%); transition: opacity 1s ease; z-index: 1; }
      `}</style>
    </>
  );
}