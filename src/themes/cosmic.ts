export const cosmicTheme = {
  name: "cosmic",
  colors: {
  background: "#05070f",
  backgroundAlt: "#0a0f2c",

  surface: "#ffffff",        // cards, modals
  surfaceAlt: "#f1f5f9",     // subtle variation

  primary: "#1e2a78",
  accent: "#7c3aed",

  text: "#e2e8f0",           // on dark background
  textSecondary: "#94a3b8",

  textOnSurface: "#0f172a",  // on light cards ✅ FIX
  textMutedOnSurface: "#64748b",

  textInverse: "#ffffff",    // for buttons on dark accents
},
  font: "'Orbitron', sans-serif",
  background: {
    type: "cosmic",
    animated: true,
    gradient: "linear-gradient(-45deg, #05070f, #0a0f2c, #7c3aed)",
    blobColor: "#0a0f2c",
  },
};