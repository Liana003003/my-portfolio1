"use client";

import CosmicParticles from "./CosmicParticles";
import { defaultTheme } from "../themes/default";

export default function AnimatedBackground({ theme }: { theme?: any }) {
  const safeTheme = theme ?? defaultTheme;
  const { colors, background } = safeTheme;
  const isCosmic = safeTheme?.name === "cosmic" || background?.type === "cosmic";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      
      {/* Gradient base */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(-45deg, ${colors.background}, ${colors.backgroundAlt}, ${colors.accent})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "400% 400%",
          animation: background.animated
            ? "gradientMove 15s ease infinite"
            : "none",
        }}
      />

      {/* Glow blobs */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] opacity-30 blur-3xl rounded-full animate-blob z-0"
        style={{ background: colors.backgroundAlt  }}
      />

      <div
        className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] opacity-30 blur-3xl rounded-full animate-blob z-0"
        style={{ background: colors.backgroundAlt }}
      />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, ${colors.primary}22 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* 🌌 Cosmic particles */}
      {isCosmic && (
        <CosmicParticles theme={safeTheme} />
      )}
    </div>
  );
}