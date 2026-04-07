"use client";

import CosmicParticles from "./CosmicParticles";

export default function AnimatedBackground({ theme }: { theme?: any }) {
  const isCosmic = theme?.name === "cosmic" || theme?.background?.type === "cosmic";
  const animated = theme?.background?.animated ?? true;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Layer 1: Cosmic Galaxy (very slow) */}
      {isCosmic && (
        <div className="cosmic-galaxy absolute inset-0" style={{ zIndex: 0 }} />
      )}

      {/* Layer 2: Cosmic Stars (subtle drift) */}
      {isCosmic && (
        <div className="cosmic-stars absolute inset-0" style={{ zIndex: 1 }} />
      )}

      {/* Layer 3: Gradient base */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(-45deg, var(--bg), var(--bg-alt), var(--accent))",
          backgroundRepeat: "no-repeat",
          backgroundSize: "400% 400%",
          animation: animated ? "gradientMove 15s ease infinite" : "none",
          zIndex: 2,
        }}
      />

      {/* Layer 4: Animated blobs */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] opacity-30 blur-3xl rounded-full animate-blob"
        style={{ background: "var(--bg-alt)", zIndex: 3 }}
      />

      <div
        className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] opacity-30 blur-3xl rounded-full animate-blob"
        style={{ background: "var(--bg-alt)", zIndex: 3 }}
      />

      {/* Layer 5: Pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, color-mix(in srgb, var(--primary) 13%, transparent), transparent 1px)",
          backgroundSize: "24px 24px",
          zIndex: 4,
        }}
      />

      {/* Layer 6: Cosmic particles (interactive layer) */}
      {isCosmic && (
        <div className="absolute inset-0" style={{ zIndex: 5 }}>
          <CosmicParticles theme={theme} />
        </div>
      )}
    </div>
  );
}