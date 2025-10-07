"use client";
import { useEffect, useMemo, useRef, useState } from "react";

// Single-file demo you can paste into app/page.tsx in a new Next.js (App Router) project.
// Tailwind NOT required; styles are styled-jsx below. Works on Vercel out of the box.

export default function Page() {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState<null | string>(null);
  const starsRef = useRef<HTMLDivElement>(null);

  // Simple projects registry — replace with your real projects later
  const PROJECTS: Record<string, { title: string; blurb: string; links?: { label: string; href: string }[] }[]> = useMemo(
    () => ({
      neural: [
        { title: "Depression Trajectory Prediction", blurb: "Mixed-effects + GEE + RF to forecast depression surges. Built data pipelines and evaluation dashboards.", links: [{ label: "Research notes", href: "#" }] },
        { title: "Intelligent UX Assistant", blurb: "LLM-powered synthesis of research sessions; auto-tagging themes and generating journey insights.", links: [{ label: "Prototype", href: "#" }] },
      ],
      ux: [
        { title: "University Integration Redesign", blurb: "Process + service blueprint that became a permanent role supporting international students.", links: [{ label: "Case Study", href: "#" }] },
        { title: "Co‑Creators Website & Workshops", blurb: "Discovery → Ideation → Test loops; converted insights to UI patterns and facilitation assets.", links: [{ label: "Screens", href: "#" }] },
      ],
      human: [
        { title: "Diversity Week Workshop", blurb: "Dotmocracy powered session to collect cross-company qualitative signals.", links: [{ label: "Miro", href: "#" }] },
        { title: "Ecosystem Seminar", blurb: "Participatory process to align incentives and narratives across partners.", links: [{ label: "Overview", href: "#" }] },
      ],
      creative: [
        { title: "Oil → Interface", blurb: "Translating paint composition rules into layout & rhythm systems.", links: [{ label: "Study", href: "#" }] },
        { title: "TEDx Narrative System", blurb: "Story arcs and visuals for inclusive education talk seen by national media.", links: [{ label: "Clip", href: "#" }] },
      ],
      code: [
        { title: "Trading Tools Frontends", blurb: "Vue → React refactors; latency-sensitive UIs with elegant affordances.", links: [{ label: "Demo", href: "#" }] },
        { title: "Design System Seeds", blurb: "Composable tokens and primitives; accessibility-first components.", links: [{ label: "Docs", href: "#" }] },
      ],
      mobile: [
        { title: "Responsive Patterns Library", blurb: "Breakpoints as behaviors; motion that explains, not decorates.", links: [{ label: "Guidelines", href: "#" }] },
        { title: "Micro-interactions Pack", blurb: "Haptic-friendly states for forms and task flows.", links: [{ label: "Figma", href: "#" }] },
      ],
    }),
    []
  );

  useEffect(() => {
    const onScroll = () => {
      const p = Math.min(window.scrollY / (window.innerHeight * 1.5), 1);
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // generate twinkling stars once
    const container = starsRef.current;
    if (!container) return;
    if (container.dataset.seeded) return;
    container.dataset.seeded = "1";

    const count = 160;
    for (let i = 0; i < count; i++) {
      const s = document.createElement("div");
      s.className = "star";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.animationDelay = Math.random() * 3 + "s";
      container.appendChild(s);
    }
  }, []);

  return (
    <main>
      <section id="landing" className="section">
        <div className="name-title">Juli Furjes</div>
        <div className="subtitle">Behavioural Technology Designer · UX Research · Frontend · AI</div>
        <div className="scroll-indicator">SCROLL TO EXPLORE</div>
      </section>

      <section id="projects" className="section" aria-hidden />

      {/* Fixed stage */}
      <div className="observer-container" aria-hidden>
        <BackFigure progress={progress} />
      </div>

      <div className="sky-background" style={{ opacity: progress > 0.5 ? Math.min((progress - 0.5) / 0.3, 1) : 0 }} />
      <div className="stars" ref={starsRef} style={{ opacity: progress > 0.5 ? Math.min((progress - 0.5) / 0.3, 1) : 0 }}>
        <Constellations progress={progress} onOpen={setOpen} />
      </div>

      <Drawer openKey={open} onClose={() => setOpen(null)} items={open ? PROJECTS[open as keyof typeof PROJECTS] : []} />

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { height: 100%; }
        body { font-family: Georgia, ui-serif, serif; overflow-x: hidden; background: #0a0e27; color: #fff; }
        .section { min-height: 100vh; position: relative; display: flex; align-items: center; justify-content: center; }
        #landing { background: linear-gradient(to bottom, #1a1f3a 0%, #0a0e27 100%); overflow: hidden; }
        .name-title { position: absolute; top: 20%; left: 50%; transform: translateX(-50%); font-size: clamp(2.2rem, 6vw, 4.2rem); font-weight: 300; letter-spacing: .3rem; color: #e8e6f0; text-align: center; z-index: 10; transition: opacity .6s ease; }
        .subtitle { position: absolute; top: calc(20% + 4.8rem); left: 50%; transform: translateX(-50%); font-size: clamp(1rem, 2.2vw, 1.2rem); font-weight: 300; letter-spacing: .2rem; color: #a8a6b8; text-align: center; z-index: 10; transition: opacity .6s ease; }
        .scroll-indicator { position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); color: #a8a6b8; font-size: .95rem; letter-spacing: .1rem; animation: float 2s ease-in-out infinite; z-index: 20; }
        .scroll-indicator::after { content: '↓'; display: block; text-align: center; font-size: 1.5rem; margin-top: .5rem; }
        @keyframes float { 0%,100%{ transform: translateX(-50%) translateY(0);} 50%{ transform: translateX(-50%) translateY(-10px);} }

        .observer-container { position: fixed; bottom: 0; left: 50%; transform: translateX(-50%); width: min(360px, 52vw); height: min(520px, 75vh); z-index: 5; pointer-events: none; }
        .sky-background { position: fixed; inset: 0; background: radial-gradient(ellipse at top, #1a237e 0%, #0a0e27 50%); transition: opacity 1s ease; z-index: 1; }
        .stars { position: fixed; inset: 0; transition: opacity 1s ease; z-index: 2; }
        .star { position: absolute; width: 2px; height: 2px; background: white; border-radius: 50%; animation: twinkle 3s infinite; }
        @keyframes twinkle { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }

        .constellation { position: absolute; cursor: pointer; transition: all .4s ease; opacity: 0; z-index: 3; }
        .constellation-group { position: relative; width: 200px; height: 200px; }
        .constellation-star { position: absolute; width: 8px; height: 8px; background: white; border-radius: 50%; box-shadow: 0 0 10px rgba(255,255,255,.8), 0 0 20px rgba(100,150,255,.4); transition: transform .25s ease, box-shadow .25s ease; }
        .constellation:hover .constellation-star { transform: scale(1.5); box-shadow: 0 0 20px rgba(255,255,255,1), 0 0 40px rgba(100,150,255,.8); }
        .constellation-line { position: absolute; height: 2px; background: linear-gradient(to right, rgba(255,255,255,.3), rgba(100,150,255,.4)); transform-origin: left center; opacity: 0; transition: opacity .6s ease; }
        .constellation-label { position: absolute; bottom: -30px; left: 50%; transform: translateX(-50%); color: #e8e6f0; font-size: .9rem; letter-spacing: .1rem; white-space: nowrap; opacity: 0; transition: opacity .3s ease; text-shadow: 0 0 10px rgba(0,0,0,.8); }
        .constellation:hover .constellation-label { opacity: 1; }

        @media (max-width: 768px) { .observer-container{ width: 62vw; height: 56vh; } }
      `}</style>
    </main>
  );
}

function Constellations({ progress, onOpen }: { progress: number; onOpen: (k: string) => void }) {
  const show = progress > 0.7 ? Math.min((progress - 0.7) / 0.3, 1) : 0;
  const lineOpacity = show;
  const baseStyle: React.CSSProperties = { opacity: show };
  return (
    <>
      {/* Neural Nebula */}
      <div className="constellation" style={{ top: "15%", left: "20%", ...baseStyle }} onClick={() => onOpen("neural")}> 
        <div className="constellation-group">
          <div className="constellation-star" style={{ top: 20, left: 30 }} />
          <div className="constellation-star" style={{ top: 40, left: 60 }} />
          <div className="constellation-star" style={{ top: 70, left: 40 }} />
          <div className="constellation-star" style={{ top: 90, left: 70 }} />
          <div className="constellation-star" style={{ top: 50, left: 90 }} />
          <div className="constellation-line" style={{ width: 40, top: 25, left: 35, transform: "rotate(35deg)", opacity: lineOpacity }} />
          <div className="constellation-line" style={{ width: 35, top: 48, left: 58, transform: "rotate(-50deg)", opacity: lineOpacity }} />
          <div className="constellation-line" style={{ width: 40, top: 77, left: 48, transform: "rotate(40deg)", opacity: lineOpacity }} />
          <div className="constellation-line" style={{ width: 30, top: 65, left: 75, transform: "rotate(-70deg)", opacity: lineOpacity }} />
        </div>
        <div className="constellation-label">THE NEURAL NEBULA</div>
      </div>

      {/* UX Galaxy */}
      <div className="constellation" style={{ top: "20%", right: "15%", ...baseStyle }} onClick={() => onOpen("ux")}>
        <div className="constellation-group">
          <div className="constellation-star" style={{ top: 30, left: 50 }} />
          <div className="constellation-star" style={{ top: 60, left: 30 }} />
          <div className="constellation-star" style={{ top: 60, left: 70 }} />
          <div className="constellation-star" style={{ top: 90, left: 50 }} />
          <div className="constellation-star" style={{ top: 45, left: 10 }} />
          <div className="constellation-star" style={{ top: 45, left: 90 }} />
          {[{w:35,t:42,l:35,r:-50},{w:35,t:42,l:58,r:50},{w:40,t:70,l:38,r:-30},{w:40,t:70,l:58,r:30},{w:40,t:48,l:18,r:-5},{w:40,t:48,l:60,r:5}].map((ln,i)=>(
            <div key={i} className="constellation-line" style={{ width: ln.w, top: ln.t, left: ln.l, transform: `rotate(${ln.r}deg)`, opacity: lineOpacity }} />
          ))}
        </div>
        <div className="constellation-label">THE UX GALAXY</div>
      </div>

      {/* Human Connection */}
      <div className="constellation" style={{ top: "45%", left: "15%", ...baseStyle }} onClick={() => onOpen("human")}>
        <div className="constellation-group">
          <div className="constellation-star" style={{ top: 30, left: 40 }} />
          <div className="constellation-star" style={{ top: 60, left: 20 }} />
          <div className="constellation-star" style={{ top: 60, left: 60 }} />
          <div className="constellation-star" style={{ top: 80, left: 40 }} />
          {[{w:35,t:42,l:30,r:-50},{w:35,t:42,l:48,r:50},{w:30,t:68,l:30,r:35},{w:30,t:68,l:50,r:-35}].map((ln,i)=>(
            <div key={i} className="constellation-line" style={{ width: ln.w, top: ln.t, left: ln.l, transform: `rotate(${ln.r}deg)`, opacity: lineOpacity }} />
          ))}
        </div>
        <div className="constellation-label">HUMAN CONNECTION</div>
      </div>

      {/* Creative Cosmos */}
      <div className="constellation" style={{ top: "50%", right: "20%", ...baseStyle }} onClick={() => onOpen("creative")}>
        <div className="constellation-group">
          {[{t:20,l:50},{t:50,l:30},{t:50,l:70},{t:80,l:20},{t:80,l:80},{t:100,l:50}].map((p,i)=>(<div key={i} className="constellation-star" style={{ top: p.t, left: p.l }} />))}
          {[{w:35,t:32,l:42,r:-50},{w:35,t:32,l:56,r:50},{w:35,t:62,l:36,r:-50},{w:35,t:62,l:60,r:50},{w:65,t:88,l:30,r:0}].map((ln,i)=>(
            <div key={i} className="constellation-line" style={{ width: ln.w, top: ln.t, left: ln.l, transform: `rotate(${ln.r}deg)`, opacity: lineOpacity }} />
          ))}
        </div>
        <div className="constellation-label">CREATIVE COSMOS</div>
      </div>

      {/* Code Constellation */}
      <div className="constellation" style={{ top: "70%", left: "25%", ...baseStyle }} onClick={() => onOpen("code")}>
        <div className="constellation-group">
          {[{t:30,l:30},{t:30,l:70},{t:60,l:50},{t:90,l:30},{t:90,l:70}].map((p,i)=>(<div key={i} className="constellation-star" style={{ top: p.t, left: p.l }} />))}
          {[{w:40,t:32,l:36,r:0},{w:35,t:42,l:42,r:35},{w:35,t:42,l:58,r:-35},{w:35,t:72,l:42,r:-35},{w:35,t:72,l:58,r:35}].map((ln,i)=>(
            <div key={i} className="constellation-line" style={{ width: ln.w, top: ln.t, left: ln.l, transform: `rotate(${ln.r}deg)`, opacity: lineOpacity }} />
          ))}
        </div>
        <div className="constellation-label">CODE CONSTELLATION</div>
      </div>

      {/* Mobile Meteor */}
      <div className="constellation" style={{ top: "75%", right: "25%", ...baseStyle }} onClick={() => onOpen("mobile")}>
        <div className="constellation-group">
          {[{t:20,l:50},{t:50,l:50},{t:80,l:50},{t:35,l:30},{t:35,l:70}].map((p,i)=>(<div key={i} className="constellation-star" style={{ top: p.t, left: p.l }} />))}
          {[{w:30,t:35,l:50,r:90},{w:30,t:65,l:50,r:90},{w:25,t:26,l:38,r:-35},{w:25,t:26,l:57,r:35}].map((ln,i)=>(
            <div key={i} className="constellation-line" style={{ width: ln.w, top: ln.t, left: ln.l, transform: `rotate(${ln.r}deg)`, opacity: lineOpacity }} />
          ))}
        </div>
        <div className="constellation-label">MOBILE METEOR</div>
      </div>
    </>
  );
}

function Drawer({ openKey, onClose, items = [] as any[] }: { openKey: string | null; onClose: () => void; items: { title: string; blurb: string; links?: {label: string; href: string}[] }[] }) {
  return (
    <div aria-hidden className="drawer" style={{ transform: openKey ? "translateY(0%)" : "translateY(110%)" }}>
      <div className="drawer-header">
        <div className="drawer-title">{openKey ? label(openKey) : ""}</div>
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
        .drawer { position: fixed; left: 0; right: 0; bottom: 0; background: rgba(10,14,39,.9); border-top: 1px solid rgba(255,255,255,.1); backdrop-filter: blur(8px); padding: 20px 24px 32px; z-index: 50; transition: transform .55s cubic-bezier(.2,.9,.2,1); }
        .drawer-header { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
        .drawer-title { font-size: 1rem; letter-spacing: .18rem; text-transform: uppercase; color: #cfd2ff; }
        .close { appearance: none; border: 0; background: transparent; color: #fff; font-size: 2rem; line-height: 1; cursor: pointer; opacity: .8; }
        .drawer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; }
        .card { border: 1px solid rgba(255,255,255,.08); border-radius: 14px; padding: 14px 16px; background: rgba(255,255,255,.02); }
        .card h3 { font-weight: 500; margin-bottom: 6px; font-size: 1.05rem; }
        .card p { color: #c8c7d3; font-size: .95rem; line-height: 1.35; }
        .links { margin-top: 10px; display: flex; gap: 12px; flex-wrap: wrap; }
        .links a { color: #cfd2ff; text-decoration: none; border-bottom: 1px dashed rgba(207,210,255,.5); }
      `}</style>
    </div>
  );
}

function label(key: string) {
  const labels: Record<string, string> = {
    neural: "Neural Nebula — AI & Intelligent Interfaces",
    ux: "UX Galaxy — User Research & Design",
    human: "Human Connection — Social & Collaborative Tools",
    creative: "Creative Cosmos — Experimental Design",
    code: "Code Constellation — Frontend Engineering",
    mobile: "Mobile Meteor — Responsive Design",
  };
  return labels[key] ?? key;
}

/**
 * Back-facing detailed character with long red hair holding binoculars.
 * Pure CSS/SVG – lightweight and stylable.
 */
function BackFigure({ progress }: { progress: number }) {
  // lift arms + show binoculars between 0.2–0.5 like your original
  const armP = progress > 0.2 ? Math.min((progress - 0.2) / 0.3, 1) : 0;
  return (
    <div className="figure">
      <svg viewBox="0 0 220 340" className="svg">
        {/* Background rock/ledge */}
        <defs>
          <linearGradient id="coat" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#4a5568" />
            <stop offset="100%" stopColor="#2d3748" />
          </linearGradient>
          <linearGradient id="hairGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#d34b33" />
            <stop offset="50%" stopColor="#b8352a" />
            <stop offset="100%" stopColor="#7a241e" />
          </linearGradient>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* Body / coat (back view) */}
        <path d="M90,110 q20,-8 40,0 q20,8 26,34 v110 q0,18 -20,28 q-51,24 -92,0 q-20,-12 -20,-28 v-110 q6,-26 26,-34 q20,-8 40,0 z" fill="url(#coat)" />

        {/* Hair mass (long, wavy, back) */}
        <g className="hair" transform="translate(0,0)">
          <path d="M60,60 q50,-30 100,10 q24,16 20,60 q-2,24 -14,44 q-10,16 -10,34 q0,16 -14,30 q-22,22 -62,18 q-34,-4 -50,-28 q-10,-16 -6,-36 q6,-26 -4,-52 q-12,-30 6,-52 q12,-14 34,-28 z" fill="url(#hairGrad)" />
          {/* strands */}
          {[-6, 0, 6].map((dx, i) => (
            <path
              key={i}
              d={`M80,78 q30,12 ${60 + dx},40`}
              fill="none"
              stroke="#f06a4c"
              strokeOpacity=".25"
              strokeWidth="2"
            />
          ))}
        </g>

        {/* Head silhouette (back) */}
        <ellipse cx="110" cy="90" rx="24" ry="28" fill="#d4a574" filter="url(#soft)" />

        {/* Raised arms (animated by transform) */}
        <g className="arm left" style={{ transform: `translate(0px, ${-armP * 18}px) rotate(${-20 - armP * 20}deg)`, transformOrigin: "80px 150px" }}>
          <path d="M70,150 q-16,6 -16,24 v32 q0,14 12,18 q14,6 24,-2 l8,-6 v-52 z" fill="#d4a574" />
          <rect x="80" y="170" width="22" height="12" rx="6" fill="#4a5568" />
        </g>
        <g className="arm right" style={{ transform: `translate(0px, ${-armP * 18}px) rotate(${20 + armP * 20}deg)`, transformOrigin: "140px 150px" }}>
          <path d="M150,150 q16,6 16,24 v32 q0,14 -12,18 q-14,6 -24,-2 l-8,-6 v-52 z" fill="#d4a574" />
          <rect x="120" y="170" width="22" height="12" rx="6" fill="#4a5568" />
        </g>

        {/* Binoculars (fade in with armP) */}
        <g opacity={armP}>
          <rect x="92" y="110" width="16" height="20" rx="4" fill="#2d3748" stroke="#5f6b84" />
          <rect x="112" y="110" width="16" height="20" rx="4" fill="#2d3748" stroke="#5f6b84" />
          <rect x="106" y="118" width="8" height="4" fill="#5f6b84" />
        </g>
      </svg>
      <style jsx>{`
        .svg { width: 100%; height: 100%; display: block; }
      `}</style>
    </div>
  );
}
