"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Project } from "../data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    if (!project) return null;
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            layoutId={`card-${project.id}`} // 🔥 MAGIC LINK
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[90%] md:w-[70%] h-[80%] rounded-2xl p-6 relative overflow-auto" >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-6 h-full">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="mt-4">{project.fullDescription}</p>
              </div>

              <div className="md:w-1/2 h-64 md:h-full relative flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}