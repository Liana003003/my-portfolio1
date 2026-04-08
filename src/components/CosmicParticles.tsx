"use client";

import { useEffect, useRef } from "react";

export default function CosmicParticles({ theme }: any) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: any[] = [];
    let animationFrameId: number;

    const colors = ["#ffffff", "#e2e8f0", theme.colors.accent, theme.colors.primary];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = Array.from({ length: 320 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.8 + 0.6,
        speed: Math.random() * 0.5 + 0.08,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    // Move left → right
    p.x += p.speed * 0.6;

    // Reset ONLY when fully off the right side
    if (p.x - p.radius > canvas.width) {
      p.x = -p.radius; // re-enter from left
      p.y = Math.random() * canvas.height;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2); // correct axis
    ctx.fillStyle = p.color;
    ctx.shadowBlur = 16;
    ctx.shadowColor = p.color;
    ctx.globalAlpha = 1;
    ctx.fill();
  });

  animationFrameId = requestAnimationFrame(draw);
};

    resize();
    createParticles();
    draw();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
  ref={canvasRef}
  className="absolute inset-0 pointer-events-none"
/>
  );
}