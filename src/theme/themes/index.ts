import themes from "./themes";

export type LocalTheme = (typeof themes)[number];
type ColorsKey = keyof SS.Theme["config"]["themeColors"];
type ExtInfoKey = keyof SS.Theme["config"]["extInfo"];
const varColorRxp = /^var\((.+)\)$/;
export const buildActiveThemeColors = (theme: SS.Theme): SS.ActiveTheme => {
  for (const [k, v] of Object.entries(theme.config.extInfo) as Array<
    [ExtInfoKey, SS.Theme["config"]["extInfo"][ExtInfoKey]]
  >) {
    if (!v.startsWith("var(")) continue;
    theme.config.extInfo[k] =
      theme.config.themeColors[v.replace(varColorRxp, "$1") as ColorsKey];
  }

  return {
    id: theme.id,
    name: theme.name,
    isDark: theme.isDark,
    ...theme.config.themeColors,
    ...theme.config.extInfo,
    "c-font": theme.config.themeColors["c-850"],
    "c-font-label": theme.config.themeColors["c-450"],
    "c-primary-font": theme.config.themeColors["c-primary"],
    "c-primary-font-hover": theme.config.themeColors["c-primary-alpha-300"],
    "c-primary-font-active":
      theme.config.themeColors["c-primary-dark-100-alpha-200"],
    "c-primary-background":
      theme.config.themeColors["c-primary-light-400-alpha-700"],
    "c-primary-background-hover":
      theme.config.themeColors["c-primary-light-300-alpha-800"],
    "c-primary-background-active":
      theme.config.themeColors["c-primary-light-100-alpha-800"],
    "c-primary-input-background":
      theme.config.themeColors["c-primary-light-400-alpha-700"],
    "c-button-font": theme.config.themeColors["c-primary-alpha-100"],
    "c-button-font-selected":
      theme.config.themeColors["c-primary-dark-100-alpha-100"],
    "c-button-background":
      theme.config.themeColors["c-primary-light-400-alpha-700"],
    "c-button-background-selected":
      theme.config.themeColors["c-primary-alpha-600"],
    "c-button-background-hover":
      theme.config.themeColors["c-primary-light-300-alpha-600"],
    "c-button-background-active":
      theme.config.themeColors["c-primary-light-100-alpha-600"],
    "c-list-header-border-bottom":
      theme.config.themeColors["c-primary-alpha-900"],
    "c-content-background": theme.config.themeColors["c-primary-light-1000"],
    "c-border-background":
      theme.config.themeColors["c-primary-light-100-alpha-700"],
  } as const;
};
