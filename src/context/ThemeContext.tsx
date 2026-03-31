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
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Validate shape so we never set an invalid theme and crash consumers.
        if (
          !parsed ||
          typeof parsed !== "object" ||
          !("colors" in parsed) ||
          !("background" in parsed)
        ) {
          setTheme(defaultTheme);
        } else {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setTheme(parsed);
        }
      } catch {
        setTheme(defaultTheme);
      }
    }
    setMounted(true);
  }, []);

  // Save theme
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
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