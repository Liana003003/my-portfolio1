"use client";

import { useEffect, useRef, useState } from "react";

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  trail: Array<{ x: number; y: number }>;
}

interface NebulaConfig {
  x: number;
  y: number;
  size: number;
  rotation: number;
  colors: string[];
}

export default function CosmicBackground({
  theme,
  nebulaX = 0.7,
  nebulaY = 0.3,
  nebulaSize = 1.2,
}: {
  theme: any;
  nebulaX?: number;
  nebulaY?: number;
  nebulaSize?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let shootingStars: ShootingStar[] = [];
    let stars: Array<{ x: number; y: number; size: number; opacity: number }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateStars();
      generateShootingStars();
    };

    const generateStars = () => {
      stars = Array.from({ length: 200 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.4,
      }));
    };

    const generateShootingStars = () => {
      shootingStars = Array.from({ length: 3 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * (canvas.height * 0.6),
        vx: Math.random() * 4 + 3,
        vy: Math.random() * 2 + 1,
        length: Math.random() * 80 + 100,
        opacity: 0,
        trail: [],
      }));
    };

    const drawStars = () => {
      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    const drawNebula = () => {
      const nebX = canvas.width * nebulaX;
      const nebY = canvas.height * nebulaY;
      const nebRadius = 300 * nebulaSize;

      const time = Date.now() * 0.0001;

      const gradient = ctx.createRadialGradient(nebX, nebY, 0, nebX, nebY, nebRadius);

      gradient.addColorStop(0, "rgba(124, 58, 237, 0.6)");
      gradient.addColorStop(0.3, "rgba(168, 85, 247, 0.4)");
      gradient.addColorStop(0.6, "rgba(99, 102, 241, 0.2)");
      gradient.addColorStop(1, "rgba(30, 58, 138, 0)");

      ctx.save();
      ctx.translate(nebX, nebY);
      ctx.rotate(time);
      ctx.translate(-nebX, -nebY);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(nebX, nebY, nebRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      const gradient2 = ctx.createRadialGradient(nebX + 100, nebY - 80, 0, nebX + 100, nebY - 80, nebRadius * 0.8);
      gradient2.addColorStop(0, "rgba(167, 139, 250, 0.5)");
      gradient2.addColorStop(0.5, "rgba(168, 85, 247, 0.2)");
      gradient2.addColorStop(1, "rgba(99, 102, 241, 0)");

      ctx.save();
      ctx.translate(nebX + 100, nebY - 80);
      ctx.rotate(-time * 0.7);
      ctx.translate(-nebX - 100, -nebY + 80);

      ctx.fillStyle = gradient2;
      ctx.beginPath();
      ctx.arc(nebX + 100, nebY - 80, nebRadius * 0.8, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const drawShootingStars = () => {
      shootingStars.forEach((star, index) => {
        if (star.opacity < 0.01) {
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * (canvas.height * 0.6);
          star.vx = Math.random() * 4 + 3;
          star.vy = Math.random() * 2 + 1;
          star.opacity = 0;
          star.trail = [];
        }

        star.x += star.vx;
        star.y += star.vy;
        star.opacity -= 0.006;

        if (star.opacity > 0) {
          star.trail.push({ x: star.x, y: star.y });
          if (star.trail.length > star.length / 2) {
            star.trail.shift();
          }

          for (let i = 0; i < star.trail.length; i++) {
            const opacity = (i / star.trail.length) * star.opacity * 0.8;
            const size = (1 - i / star.trail.length) * 2;

            ctx.fillStyle = `rgba(255, 255, 200, ${opacity})`;
            ctx.beginPath();
            ctx.arc(star.trail[i].x, star.trail[i].y, size, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.strokeStyle = `rgba(255, 255, 150, ${star.opacity})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          const prevTrail = star.trail[Math.max(0, star.trail.length - 5)];
          if (prevTrail) {
            ctx.lineTo(prevTrail.x, prevTrail.y);
          }
          ctx.stroke();
        }
      });
    };

    const drawGalaxy = () => {
      const galaxyX = canvas.width * 0.15;
      const galaxyY = canvas.height * 0.7;
      const galaxyRadius = 150;

      const gradient = ctx.createRadialGradient(galaxyX, galaxyY, 0, galaxyX, galaxyY, galaxyRadius);
      gradient.addColorStop(0, "rgba(147, 112, 219, 0.8)");
      gradient.addColorStop(0.4, "rgba(99, 102, 241, 0.5)");
      gradient.addColorStop(0.7, "rgba(59, 130, 246, 0.2)");
      gradient.addColorStop(1, "rgba(30, 58, 138, 0)");

      const time = Date.now() * 0.00005;

      ctx.save();
      ctx.translate(galaxyX, galaxyY);
      ctx.rotate(time);
      ctx.translate(-galaxyX, -galaxyY);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(galaxyX, galaxyY, galaxyRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      for (let i = 0; i < 8; i++) {
        const angle = (time + (i / 8) * Math.PI * 2) * 0.3;
        const x = galaxyX + Math.cos(angle) * galaxyRadius * 0.6;
        const y = galaxyY + Math.sin(angle) * galaxyRadius * 0.6;
        const size = Math.random() * 1.5 + 1;

        ctx.fillStyle = `rgba(147, 112, 219, ${0.6 - i * 0.05})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(5, 7, 15, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.translate(0, scrollY * 0.3);
      drawGalaxy();
      ctx.restore();

      ctx.save();
      ctx.translate(0, scrollY * 0.2);
      drawNebula();
      ctx.restore();

      drawStars();
      drawShootingStars();

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme, nebulaX, nebulaY, nebulaSize, scrollY]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
