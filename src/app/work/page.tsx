"use client";

import { useState } from "react";
import { projects, Project } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";
import ProjectModal from "../../components/ProjectModal";

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-10"> <h1 className="text-3xl md:text-4xl font-bold mb-8">My Projects</h1>
    <div className="p-1">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
    </div>
  );
}