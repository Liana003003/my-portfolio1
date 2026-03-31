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
      className="border px-3 py-2 rounded-lg shadow-sm bg-white hover:shadow-md transition"
    >
      <option value="default">Default ⚪</option>
      <option value="cosmic">Cosmic 🌌</option>
      <option value="halloween">Halloween 🎃</option>
      <option value="retro">Retro 80s 📼</option>
    </select>
  );
}