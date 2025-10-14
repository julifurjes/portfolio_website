"use client";
import { useEffect, useState, useMemo } from "react";
import LandingSection from "@/components/landing/LandingSection";
import CharacterPoses from "@/components/character/CharacterPoses";
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

  // // Initialize project from URL on mount
  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   const projectId = params.get('project');
  //   if (projectId && PROJECTS.find(p => p.id === projectId)) {
  //     setSelectedProjectId(projectId);
  //   }
  // }, []);

  // // Listen for browser back/forward navigation
  // useEffect(() => {
  //   const handlePopState = () => {
  //     const params = new URLSearchParams(window.location.search);
  //     const projectId = params.get('project');
  //     if (projectId && PROJECTS.find(p => p.id === projectId)) {
  //       setSelectedProjectId(projectId);
  //     } else {
  //       setSelectedProjectId(null);
  //     }
  //   };

  //   window.addEventListener('popstate', handlePopState);
  //   return () => window.removeEventListener('popstate', handlePopState);
  // }, []);

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

  // Handle opening project with URL update
  const handleOpenProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    const newUrl = `${window.location.pathname}?project=${projectId}`;
    window.history.pushState({ projectId }, '', newUrl);
  };

  // Handle closing project with URL cleanup
  const handleCloseProject = () => {
    setSelectedProjectId(null);
    window.history.pushState({}, '', window.location.pathname);
  };

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
          onAboutClick={() => setAboutOpen(true)}
        />
      )}

      <section id="projects" className="section">
        <ProjectCards
          progress={progress}
          onProjectClick={handleOpenProject}
          visibleProjectIds={visibleProjectIds}
        />
      </section>

      <CharacterPoses
        progress={progress}
        onClick={() => setAboutOpen(true)}
      />

      <Stars progress={progress}>
        <Constellations
          progress={progress}
          onOpen={handleOpenProject}
          visibleProjectIds={visibleProjectIds}
        />
      </Stars>

      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
      />

      <AboutModal
        isOpen={aboutOpen}
        onClose={() => setAboutOpen(false)}
      />

      <SocialLinks />
    </main>
  );
}
