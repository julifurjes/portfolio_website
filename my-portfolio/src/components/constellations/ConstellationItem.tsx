import { ConstellationPosition, ProjectCategory } from '@/types';
import Image from 'next/image';

interface ConstellationItemProps {
  position: ConstellationPosition;
  image: string;
  label: string;
  categories: ProjectCategory[];
  onClick: () => void;
  opacity: number;
  size?: string;
}

export default function ConstellationItem({
  position,
  image,
  label,
  categories,
  onClick,
  opacity,
  size = "250px"
}: ConstellationItemProps) {
  const baseStyle: React.CSSProperties = {
    ...position,
    opacity: opacity === 0 ? 0 : Math.max(opacity * 0.95, 0.85),
    transition: 'opacity 0.5s ease',
    pointerEvents: opacity === 0 ? 'none' : 'auto',
  };

  return (
    <div className="constellation" style={baseStyle} onClick={onClick}>
      <div className="constellation-image-wrapper">
        <Image
          src={image}
          alt={label}
          width={250}
          height={250}
          className="constellation-image"
          priority
        />
      </div>
      <div className="constellation-info">
        <div className="constellation-label">{label}</div>
        <div className="category-badges">
          {categories.map((cat, idx) => (
            <span key={idx} className="category-badge">{cat}</span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .constellation {
          position: absolute;
          cursor: pointer;
          transition: all .4s ease;
          z-index: 5;
          pointer-events: auto;
          transform: scale(1);
        }
        .constellation:hover {
          transform: scale(1.08);
          opacity: 1 !important;
        }
        .constellation-image-wrapper {
          position: relative;
          width: ${size};
          height: ${size};
          transition: all .4s ease;
        }
        .constellation-image-wrapper :global(.constellation-image) {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: all .4s ease;
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.2));
        }

        .constellation:hover .constellation-image-wrapper :global(.constellation-image) {
          filter:
            drop-shadow(0 0 12px rgba(125, 249, 255, 0.6))
            drop-shadow(0 0 24px rgba(125, 249, 255, 0.4))
            brightness(1.2);
        }

        .constellation-info {
          position: absolute;
          bottom: -62px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .constellation-label {
          color: rgba(255, 255, 255, 0.95);
          font-size: 0.75rem;
          letter-spacing: .05rem;
          white-space: nowrap;
          transition: all .3s ease;
          font-weight: 500;
          text-transform: none;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
        }

        .constellation:hover .constellation-label {
          color: rgba(125, 249, 255, 1);
          letter-spacing: .08rem;
          text-shadow: 0 0 12px rgba(125, 249, 255, 0.5);
        }

        .category-badges {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .category-badge {
          font-size: 0.6rem;
          padding: 2px 10px;
          border-radius: 3px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: rgba(255, 255, 255, 0.75);
          font-weight: 400;
          white-space: nowrap;
          transition: all 0.3s ease;
          letter-spacing: 0.03rem;
          text-transform: uppercase;
        }

        .constellation:hover .category-badge {
          border-color: rgba(139, 146, 255, 0.6);
          color: rgba(139, 146, 255, 0.95);
          background: rgba(139, 146, 255, 0.08);
        }
      `}</style>
    </div>
  );
}