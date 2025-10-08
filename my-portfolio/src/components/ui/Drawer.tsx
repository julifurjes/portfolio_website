import { ProjectKey } from '@/types';
import { CONSTELLATION_LABELS } from '@/data/projects';

interface DrawerProps {
  openKey: ProjectKey | null;
  onClose: () => void;
}

export default function Drawer({ openKey, onClose, items }: DrawerProps) {
  return (
    <div 
      aria-hidden 
      className="drawer" 
      style={{ transform: openKey ? "translateY(0%)" : "translateY(110%)" }}
    >
      <div className="drawer-header">
        <div className="drawer-title">
          {openKey ? CONSTELLATION_LABELS[openKey] : ""}
        </div>
        <button className="close" onClick={onClose} aria-label="Close">×</button>
      </div>
      <div className="drawer-grid">
        {items.map((p, i) => (
          <article key={i} className="card">
            <h3>{p.title}</h3>
            <p>{p.blurb}</p>
            <div className="links">
              {p.links?.map((l, idx) => (
                <a key={idx} href={l.href}>{l.label} ↗</a>
              ))}
            </div>
          </article>
        ))}
      </div>
      
      <style jsx>{`
        .drawer { 
          position: fixed; left: 0; right: 0; bottom: 0; 
          background: rgba(10,14,39,.95); 
          border-top: 1px solid rgba(255,255,255,.1); 
          backdrop-filter: blur(12px); 
          padding: 20px 24px 32px; 
          z-index: 50; 
          transition: transform .55s cubic-bezier(.2,.9,.2,1); 
          max-height: 70vh; 
          overflow-y: auto; 
        }
        .drawer-header { 
          display: flex; 
          align-items: center; 
          justify-content: space-between; 
          gap: 12px; 
          margin-bottom: 14px; 
        }
        .drawer-title { 
          font-size: 1rem; 
          letter-spacing: .18rem; 
          text-transform: uppercase; 
          color: #cfd2ff; 
        }
        .close { 
          appearance: none; 
          border: 0; 
          background: transparent; 
          color: #fff; 
          font-size: 2rem; 
          line-height: 1; 
          cursor: pointer; 
          opacity: .8; 
          transition: opacity .2s; 
        }
        .close:hover { opacity: 1; }
        .drawer-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
          gap: 16px; 
        }
        .card { 
          border: 1px solid rgba(255,255,255,.08); 
          border-radius: 14px; 
          padding: 16px 18px; 
          background: rgba(255,255,255,.02); 
          transition: all .3s ease; 
        }
        .card:hover { 
          background: rgba(255,255,255,.05); 
          border-color: rgba(255,255,255,.15); 
        }
        .card h3 { 
          font-weight: 500; 
          margin-bottom: 8px; 
          font-size: 1.1rem; 
        }
        .card p { 
          color: #c8c7d3; 
          font-size: .95rem; 
          line-height: 1.45; 
        }
        .links { 
          margin-top: 12px; 
          display: flex; 
          gap: 14px; 
          flex-wrap: wrap; 
        }
        .links a { 
          color: #cfd2ff; 
          text-decoration: none; 
          border-bottom: 1px dashed rgba(207,210,255,.5); 
          transition: border-color .2s; 
        }
        .links a:hover { 
          border-bottom-color: rgba(207,210,255,.9); 
        }
      `}</style>
    </div>
  );
}