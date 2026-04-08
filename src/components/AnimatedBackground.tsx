"use client";
import CosmicParticles from "./CosmicParticles";

export default function AnimatedBackground({ theme }: { theme: any }) {
  const isCosmic = theme.background.type === "cosmic";
  const animated = theme.background.animated ?? true;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">

      {/* Cosmic-specific layers */}
      {isCosmic && (
        <>
          <div className="cosmic-particles">
            <CosmicParticles theme={theme} />
          </div>
          <div className="cosmic-galaxy" />
          <div className="cosmic-stars" />
        </>
      )}

      {/* Gradient base (all themes) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: theme.background.gradient,
          backgroundRepeat: "no-repeat",
          backgroundSize: "400% 400%",
          animation: animated ? "gradientMove 15s ease infinite" : "none",
          zIndex: 0,
        }}
      />

      {/* Animated blobs (all themes) */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] opacity-30 blur-3xl rounded-full animate-blob"
        style={{ background: theme.background.blobColor, zIndex: 4 }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] opacity-30 blur-3xl rounded-full animate-blob"
        style={{ background: theme.background.blobColor, zIndex: 4 }}
      />
    </div>
  );
}