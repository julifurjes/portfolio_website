import ConstellationItem from './ConstellationItem';
import { PROJECTS, CONSTELLATION_CONFIG } from '@/data/projects';

interface ConstellationsProps {
  progress: number;
  onOpen: (projectId: string) => void;
  visibleProjectIds: string[];
}

export default function Constellations({ progress, onOpen, visibleProjectIds }: ConstellationsProps) {
  const show = progress > 0.35 ? Math.min((progress - 0.35) / 0.2, 1) : 0;

  return (
    <>
      {PROJECTS.map((project) => {
        const config = CONSTELLATION_CONFIG[project.id];
        if (!config) return null;

        const isVisible = visibleProjectIds.includes(project.id);
        const finalOpacity = isVisible ? show : 0;

        return (
          <ConstellationItem
            key={project.id}
            position={config.position}
            image={config.image}
            label={config.label}
            categories={project.categories}
            onClick={() => onOpen(project.id)}
            opacity={finalOpacity}
            size={config.size}
          />
        );
      })}
    </>
  );
}