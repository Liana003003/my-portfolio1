"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiFlask,
  SiDjango,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export default function Skills() {
  const { theme } = useTheme();

  const [activeCategory, setActiveCategory] = useState("frontend");
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  // -----------------------
  // DATA WITH COLORS
  // -----------------------
  const data = {
    frontend: [
      { name: "HTML", icon: <SiHtml5 />, color: "#E34F26", desc: "Markup language for structuring web content." },
      { name: "CSS", icon: <SiCss />, color: "#1572B6", desc: "Styling and responsive layouts." },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", desc: "Core language for interactivity." },
      { name: "React", icon: <SiReact />, color: "#61DAFB", desc: "Component-based UI library." },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#27F56C", desc: "Fullstack React framework." },
    ],
    backend: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", desc: "JavaScript runtime for backend." },
      { name: "Python", icon: <SiPython />, color: "#3776AB", desc: "Versatile programming language." },
      { name: "Flask", icon: <SiFlask />, color: "#F55427", desc: "Lightweight backend framework." },
      { name: "Django", icon: <SiDjango />, color: "#CFF527", desc: "Full-featured Python framework." },
      { name: "SQL", icon: <SiMysql />, color: "#4479A1", desc: "Database querying language." },
    ],
    tools: [
      { name: "Git", icon: <SiGit />, color: "#F05032", desc: "Version control system." },
      { name: "GitHub", icon: <SiGithub />, color: "#17800F", desc: "Code hosting platform." },
      { name: "VS Code", icon: <VscCode />, color: "#007ACC", desc: "Code editor." },
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E", desc: "UI/UX design tool." },
    ],
    learning: [
      { name: "Databases", icon: <SiMysql />, color: "#4479A1", desc: "Learning database design & optimization." },
    ],
  };

  const categories = [
    { key: "frontend", label: "Front-End" },
    { key: "backend", label: "Back-End" },
    { key: "tools", label: "Tools" },
    { key: "learning", label: "Currently Learning" },
  ];

  const currentSkills = data[activeCategory as keyof typeof data];

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-10">

      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
        Skills & Tools
      </h1>

      {/* -----------------------
          SLIDER / TABS
      ----------------------- */}
      <div className="flex justify-center mb-10">
        <div className="relative flex gap-2 bg-gray-200 p-2 rounded-full flex-wrap">

          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key);
                setActiveSkill(null);
              }}
              className="relative px-4 py-2 rounded-full text-sm sm:text-base z-10"
              style={{
                color:
                  activeCategory === cat.key
                    ? theme.colors.background
                    : theme.colors.text,
              }}
            >
              {activeCategory === cat.key && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full"
                  style={{ background: theme.colors.text }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* -----------------------
          SKILLS ICONS
      ----------------------- */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center flex-wrap gap-6 mb-10"
      >
        {currentSkills.map((skill) => (
          <motion.button
            key={skill.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSkill(skill.name)}
            className="flex flex-col items-center gap-2 p-4 rounded-xl transition"
            style={{
              background:
                activeSkill === skill.name
                  ? theme.colors.text
                  : "transparent",
              color:
                activeSkill === skill.name
                  ? theme.colors.background
                  : theme.colors.text,
            }}
          >
            <div
              className="text-4xl"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <span className="text-sm">{skill.name}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* -----------------------
          DESCRIPTION
      ----------------------- */}
      <div className="flex justify-center text-center max-w-xl mx-auto min-h-25">
        <AnimatePresence mode="wait">
          {activeSkill ? (
            <motion.p
              key={activeSkill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-base sm:text-lg"
            >
              {
                currentSkills.find((s) => s.name === activeSkill)?.desc
              }
            </motion.p>
          ) : (
            <motion.p
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-500"
            >
              Click on a skill to see more details.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}