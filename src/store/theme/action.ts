import { buildActiveThemeColors } from "@/theme/themes";
import state from "./state";

export default {
  setTheme(theme: SS.Theme) {
    state.theme = buildActiveThemeColors(theme);
  },
};
