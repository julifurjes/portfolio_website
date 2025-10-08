import { ConstellationPosition } from '@/types';
import Image from 'next/image';

interface ConstellationItemProps {
  position: ConstellationPosition;
  image: string;
  label: string;
  onClick: () => void;
  opacity: number;
  size?: string;
}

export default function ConstellationItem({
  position,
  image,
  label,
  onClick,
  opacity,
  size = "250px"
}: ConstellationItemProps) {
  const baseStyle: React.CSSProperties = {
    ...position,
    opacity: Math.max(opacity * 0.6, 0.3),
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
      <div className="constellation-label">{label}</div>

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

        .constellation-label {
          position: absolute;
          bottom: -36px;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.7rem;
          letter-spacing: .12rem;
          white-space: nowrap;
          opacity: 0;
          transition: opacity .3s ease;
          font-weight: 400;
          text-transform: uppercase;
        }

        .constellation:hover .constellation-label {
          opacity: 1;
          color: rgba(125, 249, 255, 0.9);
        }
      `}</style>
    </div>
  );
}