import { ProjectCategory } from '@/types';
import { useState } from 'react';

interface ProjectFilterProps {
  selectedCategories: ProjectCategory[];
  onFilterChange: (categories: ProjectCategory[]) => void;
  onAboutClick?: () => void;
}

const CATEGORIES: ProjectCategory[] = ['AI Development', 'Data Science', 'Frontend', 'UX'];

export default function ProjectFilter({ selectedCategories, onFilterChange, onAboutClick }: ProjectFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      {/* Desktop version */}
      <div className="filter-container desktop-filter">
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
      </div>

      {/* Mobile version */}
      <div className="mobile-filter">
        <button
          className="filter-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle filter"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2 4h16M5 10h10M8 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          {selectedCategories.length > 0 && (
            <span className="filter-badge">{selectedCategories.length}</span>
          )}
        </button>

        {onAboutClick && (
          <button
            className="about-me-btn"
            onClick={onAboutClick}
            aria-label="About Me"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        )}

        {isOpen && (
          <>
            <div className="filter-overlay" onClick={() => setIsOpen(false)} />
            <div className="filter-popup">
              <div className="filter-popup-header">
                <h3>Filter Projects</h3>
                <button className="close-btn" onClick={() => setIsOpen(false)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <div className="filter-popup-content">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    className={`filter-option ${selectedCategories.includes(category) ? 'active' : ''}`}
                    onClick={() => toggleCategory(category)}
                  >
                    <span className="filter-option-text">{category}</span>
                    {selectedCategories.includes(category) && (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
              {selectedCategories.length > 0 && (
                <div className="filter-popup-footer">
                  <button className="clear-all-btn" onClick={clearFilters}>
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        /* Desktop filter */
        .desktop-filter {
          display: flex;
        }

        .mobile-filter {
          display: none;
        }

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
          .desktop-filter {
            display: none;
          }

          .mobile-filter {
            display: block;
          }

          .filter-toggle-btn {
            position: fixed;
            top: 16px;
            right: 16px;
            z-index: 100;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: rgba(10, 14, 39, 0.85);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: rgba(255, 255, 255, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
          }

          .filter-toggle-btn:active {
            transform: scale(0.95);
          }

          .about-me-btn {
            position: fixed;
            top: 72px;
            right: 16px;
            z-index: 100;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: rgba(10, 14, 39, 0.85);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: rgba(255, 255, 255, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
          }

          .about-me-btn:active {
            transform: scale(0.95);
          }

          .filter-badge {
            position: absolute;
            top: -2px;
            right: -2px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: linear-gradient(135deg, rgba(200, 180, 255, 0.9), rgba(180, 190, 255, 0.9));
            color: #fff;
            font-size: 0.65rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid rgba(10, 14, 39, 1);
          }

          .filter-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            z-index: 90;
            animation: fadeIn 0.2s ease;
          }

          .filter-popup {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(10, 14, 39, 0.98);
            backdrop-filter: blur(20px);
            border-top-left-radius: 24px;
            border-top-right-radius: 24px;
            z-index: 95;
            max-height: 70vh;
            display: flex;
            flex-direction: column;
            animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .filter-popup-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 24px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .filter-popup-header h3 {
            font-size: 1.1rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.95);
            letter-spacing: 0.02rem;
          }

          .close-btn {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: transparent;
            border: none;
            color: rgba(255, 255, 255, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .close-btn:active {
            background: rgba(255, 255, 255, 0.1);
          }

          .filter-popup-content {
            padding: 16px 24px;
            overflow-y: auto;
            flex: 1;
          }

          .filter-option {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 20px;
            margin-bottom: 10px;
            background: rgba(26, 35, 126, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 14px;
            color: rgba(255, 255, 255, 0.85);
            font-size: 0.95rem;
            font-weight: 400;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .filter-option:active {
            transform: scale(0.98);
          }

          .filter-option.active {
            background: linear-gradient(135deg, rgba(200, 180, 255, 0.2), rgba(180, 190, 255, 0.2));
            border-color: rgba(200, 180, 255, 0.4);
            color: rgba(255, 255, 255, 1);
          }

          .filter-option-text {
            flex: 1;
            text-align: left;
          }

          .filter-popup-footer {
            padding: 16px 24px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }

          .clear-all-btn {
            width: 100%;
            padding: 14px;
            background: rgba(255, 100, 120, 0.15);
            border: 1px solid rgba(255, 100, 120, 0.3);
            border-radius: 12px;
            color: rgba(255, 180, 190, 0.9);
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .clear-all-btn:active {
            transform: scale(0.98);
            background: rgba(255, 100, 120, 0.25);
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
        }
      `}</style>
    </>
  );
}
