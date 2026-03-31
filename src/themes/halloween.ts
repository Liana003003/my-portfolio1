export const halloweenTheme = {
  name: "halloween",

  colors: {
    background: "#1a0f0a",      // deep dark brown
    backgroundAlt: "#3b1f0b",   // burnt orange/brown
    primary: "#f97316",         // pumpkin orange
    accent: "#fb923c",          // lighter orange glow
    text: "#fff7ed",            // warm off-white
  },

  font: "cursive",

  background: {
    type: "spooky", 
    backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)",
    backgroundSize: "20px 20px",
    animated: true,
  },
};
