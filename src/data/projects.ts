// src/data/projects.ts
export type Project = {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  image: string;
  live: string;
  github: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind.",
    fullDescription: "Full details...",
    tech: ["React", "Next.js", "Tailwind"],
    image: "/projects/portfolio.png",
    live: "#",
    github: "#",
  },
  {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js and Tailwind.",
      fullDescription:
        "This project showcases my work, skills, and transition into web development. It is fully responsive and optimized for performance.",
      tech: ["React", "Next.js", "Tailwind"],
      image: "/projects/portfolio.png",
      live: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js and Tailwind.",
      fullDescription:
        "This project showcases my work, skills, and transition into web development. It is fully responsive and optimized for performance.",
      tech: ["React", "Next.js", "Tailwind"],
      image: "/projects/portfolio.png",
      live: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js and Tailwind.",
      fullDescription:
        "This project showcases my work, skills, and transition into web development. It is fully responsive and optimized for performance.",
      tech: ["React", "Next.js", "Tailwind"],
      image: "/projects/portfolio.png",
      live: "#",
      github: "#",
    },
];