"use client";
import CosmicBackground from "./CosmicBackground";
import { useState } from "react";

interface BackgroundProps {
  theme: any;
  nebulaX?: number;
  nebulaY?: number;
  nebulaSize?: number;
}

export default function AnimatedBackground({
  theme,
  nebulaX = 0.7,
  nebulaY = 0.3,
  nebulaSize = 1.2,
}: BackgroundProps) {
  const isCosmic = theme.background.type === "cosmic";
  const animated = theme.background.animated ?? true;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">

      {isCosmic ? (
        <CosmicBackground
          theme={theme}
          nebulaX={nebulaX}
          nebulaY={nebulaY}
          nebulaSize={nebulaSize}
        />
      ) : (
        <>
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

          <div
            className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] opacity-30 blur-3xl rounded-full animate-blob"
            style={{ background: theme.background.blobColor, zIndex: 4 }}
          />
          <div
            className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] opacity-30 blur-3xl rounded-full animate-blob"
            style={{ background: theme.background.blobColor, zIndex: 4 }}
          />
        </>
      )}
    </div>
  );
}