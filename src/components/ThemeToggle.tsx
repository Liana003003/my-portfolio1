"use client";

import { useTheme } from "../context/ThemeContext";
import { themes, ThemeName } from "../themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as ThemeName;
    setTheme(themes[selected]);
  };

  return (
    <select
      value={theme.name}
      onChange={handleChange}
      style={{
        backgroundColor: theme.colors.surface,
        color: theme.colors.textOnSurface,
        borderColor: theme.colors.textMutedOnSurface,
      }}
      className="border px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg shadow-sm hover:shadow-md transition text-sm sm:text-base"
    >
      <option value="default">Default ⚪</option>
      <option value="cosmic">Cosmic 🌌</option>
      <option value="halloween">Halloween 🎃</option>
      <option value="retro80s">Retro 80s 📼</option>
      <option value="forest">Forest 🌲</option>
      <option value="sunset">Sunset 🌅</option>
    </select>
  );
}