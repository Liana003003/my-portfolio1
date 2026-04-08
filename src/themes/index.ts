import { defaultTheme } from "./default";
import { cosmicTheme } from "./cosmic";
import { halloweenTheme } from "./halloween";
import { retroTheme } from "./retro80s";
import { forestTheme } from "./forest";
import { sunsetTheme } from "./sunset";

export const themes = {
  default: defaultTheme,
  cosmic: cosmicTheme,
  halloween: halloweenTheme,
  retro80s: retroTheme,
  forest: forestTheme,
  sunset: sunsetTheme,
};

export type ThemeName = keyof typeof themes;