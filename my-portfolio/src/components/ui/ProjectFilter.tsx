import { ProjectCategory } from '@/types';

interface ProjectFilterProps {
  selectedCategories: ProjectCategory[];
  onFilterChange: (categories: ProjectCategory[]) => void;
}

const CATEGORIES: ProjectCategory[] = ['AI Development', 'Data Science', 'Frontend', 'UX'];

export default function ProjectFilter({ selectedCategories, onFilterChange }: ProjectFilterProps) {
  const toggleCategory = (category: ProjectCategory) => {
    if (selectedCategories.includes(category)) {
      onFilterChange(selectedCategories.filter(c => c !== category));
    } else {
      onFilterChange([...selectedCategories, category]);
    }
  };

  const clearFilters = () => {
    onFilterChange([]);
  };

  return (
    <div className="filter-container">
      <div className="filter-buttons">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedCategories.includes(category) ? 'active' : ''}`}
            onClick={() => toggleCategory(category)}
          >
            {category}
          </button>
        ))}
        {selectedCategories.length > 0 && (
          <div className="divider" />
        )}
        {selectedCategories.length > 0 && (
          <button className="clear-btn" onClick={clearFilters}>
            Clear All
          </button>
        )}
      </div>

      <style jsx>{`
        .filter-container {
          position: fixed;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          background: rgba(10, 14, 39, 0.7);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 8px 12px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
        }

        .filter-buttons {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          align-items: center;
        }

        .filter-btn {
          appearance: none;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: transparent;
          color: rgba(255, 255, 255, 0.7);
          padding: 6px 16px;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 400;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          letter-spacing: 0.02rem;
          text-transform: uppercase;
        }

        .filter-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.25);
          color: rgba(255, 255, 255, 0.9);
        }

        .filter-btn.active {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.3);
          color: rgba(255, 255, 255, 1);
        }

        .divider {
          width: 1px;
          height: 20px;
          background: rgba(255, 255, 255, 0.15);
          margin: 0 2px;
        }

        .clear-btn {
          appearance: none;
          border: none;
          background: transparent;
          color: rgba(255, 255, 255, 0.5);
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 400;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .clear-btn:hover {
          color: rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 768px) {
          .filter-container {
            padding: 8px 10px;
            top: 10px;
            max-width: 92%;
          }

          .filter-buttons {
            gap: 5px;
          }

          .filter-btn {
            font-size: 0.65rem;
            padding: 5px 12px;
          }

          .clear-btn {
            font-size: 0.65rem;
            padding: 5px 10px;
          }
        }
      `}</style>
    </div>
  );
}
