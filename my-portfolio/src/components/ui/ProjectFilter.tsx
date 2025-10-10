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
      <span className="filter-label">Filter Projects:</span>
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
          <button className="clear-btn" onClick={clearFilters}>
            Clear
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
          background: rgba(10, 14, 39, 0.75);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 10px 18px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .filter-label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.65);
          font-weight: 400;
          letter-spacing: 0.03rem;
          white-space: nowrap;
        }

        .filter-buttons {
          display: flex;
          gap: 7px;
          flex-wrap: wrap;
          align-items: center;
        }

        .filter-btn {
          appearance: none;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: transparent;
          color: rgba(255, 255, 255, 0.75);
          padding: 5px 14px;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 400;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          letter-spacing: 0.02rem;
          text-transform: uppercase;
        }

        .filter-btn:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.28);
          color: rgba(255, 255, 255, 0.95);
          transform: translateY(-1px);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, rgba(200, 180, 255, 0.15) 0%, rgba(180, 190, 255, 0.15) 100%);
          border-color: rgba(200, 180, 255, 0.35);
          color: rgba(255, 255, 255, 1);
        }

        .clear-btn {
          appearance: none;
          border: none;
          background: transparent;
          color: rgba(255, 200, 220, 0.6);
          padding: 5px 10px;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 400;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .clear-btn:hover {
          color: rgba(255, 200, 220, 0.9);
          background: rgba(255, 200, 220, 0.08);
        }

        @media (max-width: 768px) {
          .filter-container {
            padding: 8px 10px;
            top: 10px;
            max-width: 92%;
            flex-direction: column;
            gap: 8px;
          }

          .filter-label {
            font-size: 0.7rem;
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
