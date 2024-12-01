export const NAV_MENUS = [
  { id: "nav_search", icon: "search-2" },
  { id: "nav_songlist", icon: "album" },
  { id: "nav_leaderBoard", icon: "leaderboard" },
  { id: "nav_collect", icon: "collect" },
  { id: "nav_setting", icon: "setting" },
] as const;

export type NAV_ID_Type = (typeof NAV_MENUS)[number]["id"];
