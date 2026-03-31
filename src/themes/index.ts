import { defaultTheme } from "./default";
import { cosmicTheme } from "./cosmic";
import { halloweenTheme } from "./halloween";
import { retroTheme } from "./retro80s";

export const themes = {
  default: defaultTheme,
  cosmic: cosmicTheme,
  halloween: halloweenTheme,
  retro: retroTheme,
};

export type ThemeName = keyof typeof themes;