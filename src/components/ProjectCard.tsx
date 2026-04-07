"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      whileHover={{ scale: 1.05 }}
      onClick={() => onSelect(project)}
      className="
        relative group cursor-pointer
        rounded-2xl
        bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden
      "
    >
      {/* Expand button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // 🔥 prevents double trigger
          onSelect(project);
        }}
        className="
          absolute top-3 right-3 z-10
          opacity-0 group-hover:opacity-100
          -translate-y-1.25 group-hover:translate-y-0
          transition-all duration-300
          bg-black/70 text-white px-2 py-1 text-sm rounded
        "
      >
        Expand
      </button>

      <div className="flex flex-col md:flex-row h-full">
        {/* TEXT */}
        <div className="p-4 flex flex-col justify-between md:w-1/2"> <div> <h2 className="text-xl font-semibold">{project.title}</h2> <p className="text-sm text-gray-600 mt-2"> {project.description} </p> <div className="mt-2 text-xs text-gray-500"> {project.tech.join(", ")} </div> </div> <div className="flex gap-2 mt-4"> <a href={project.live} target="_blank" className="bg-blue-600 text-white px-3 py-1 text-sm rounded" > Live </a> <a href={project.github} target="_blank" className="border px-3 py-1 text-sm rounded" > GitHub </a> </div> </div>

        {/* IMAGE */}
        <div className="md:w-1/2 h-40 md:h-auto relative bg-black/10 flex items-center justify-center">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain" // ✅ NO CROPPING
          />
        </div>
      </div>
    </motion.div>
  );
}