"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { defaultTheme } from "../themes/default";

type Theme = typeof defaultTheme;

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  mounted: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;

    const saved = localStorage.getItem("theme");
    if (!saved) return defaultTheme;

    try {
      const parsed = JSON.parse(saved);
      if (
        !parsed ||
        typeof parsed !== "object" ||
        !("colors" in parsed) ||
        !("background" in parsed)
      ) {
        return defaultTheme;
      }
      return parsed;
    } catch {
      return defaultTheme;
    }
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
     // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.setAttribute("data-theme", theme.name);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}