"use client";

import CosmicParticles from "./CosmicParticles";
import { defaultTheme } from "../themes/default";

export default function AnimatedBackground({ theme }: { theme?: any }) {
  const safeTheme = theme ?? defaultTheme;
  const { background } = safeTheme;

  const isCosmic =
    safeTheme?.name === "cosmic" || background?.type === "cosmic";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* 🌌 Cosmic Galaxy (very back, slow) */}
      {isCosmic && (
        <div className="cosmic-galaxy absolute inset-0 z-0" />
      )}

      {/* 🌠 Cosmic Stars (above galaxy, subtle movement) */}
      {isCosmic && (
        <div className="cosmic-stars absolute inset-0 z-1" />
      )}

      {/* Gradient base */}
      <div
        className="absolute inset-0 z-2"
        style={{
          backgroundImage: `linear-gradient(-45deg, var(--bg), var(--bg-alt), var(--accent))`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "400% 400%",
          animation: background?.animated
            ? "gradientMove 15s ease infinite"
            : "none",
        }}
      />

      {/* Glow blobs */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] opacity-30 blur-3xl rounded-full animate-blob z-3"
        style={{ background: "var(--bg-alt)" }}
      />

      <div
        className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] opacity-30 blur-3xl rounded-full animate-blob z-3"
        style={{ background: "var(--bg-alt)" }}
      />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 z-4 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, var(--primary)22 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* 🌌 Cosmic particles (top layer but still behind UI) */}
      {isCosmic && (
        <div className="absolute inset-0 z-5">
          <CosmicParticles theme={safeTheme} />
        </div>
      )}
    </div>
  );
}