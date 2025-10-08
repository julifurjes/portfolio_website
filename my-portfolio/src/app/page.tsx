"use client";
import { useEffect, useState, useMemo } from "react";
import LandingSection from "@/components/landing/LandingSection";
import CharacterPoses from "@/components/character/CharacterPoses";
import SkyBackground from "@/components/background/SkyBackground";
import Stars from "@/components/background/Stars";
import Constellations from "@/components/constellations/Constellations";
import ProjectCards from "@/components/projects/ProjectCards";
import ProjectModal from "@/components/ui/ProjectModal";
import AboutModal from "@/components/ui/AboutModal";
import ProjectFilter from "@/components/ui/ProjectFilter";
import SocialLinks from "@/components/ui/SocialLinks";
import { PROJECTS } from "@/data/projects";
import { ProjectCategory } from "@/types";

export default function Page() {
  const [progress, setProgress] = useState(0);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<ProjectCategory[]>([]);

  const selectedProject = selectedProjectId
    ? PROJECTS.find(p => p.id === selectedProjectId) || null
    : null;

  // Filter projects based on selected categories
  const visibleProjectIds = useMemo(() => {
    if (selectedCategories.length === 0) {
      return PROJECTS.map(p => p.id);
    }
    return PROJECTS
      .filter(project =>
        project.categories.some(cat => selectedCategories.includes(cat))
      )
      .map(p => p.id);
  }, [selectedCategories]);

  useEffect(() => {
    const onScroll = () => {
      const p = Math.min(window.scrollY / (window.innerHeight * 1.5), 1);
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      <LandingSection progress={progress} />

      {progress > 0.2 && (
        <ProjectFilter
          selectedCategories={selectedCategories}
          onFilterChange={setSelectedCategories}
        />
      )}

      <section id="projects" className="section">
        <ProjectCards progress={progress} />
      </section>

      <CharacterPoses
        progress={progress}
        onClick={() => setAboutOpen(true)}
      />

      <SkyBackground progress={progress} />

      <Stars progress={progress}>
        <Constellations
          progress={progress}
          onOpen={setSelectedProjectId}
          visibleProjectIds={visibleProjectIds}
        />
      </Stars>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />

      <AboutModal
        isOpen={aboutOpen}
        onClose={() => setAboutOpen(false)}
      />

      <SocialLinks />
    </main>
  );
}