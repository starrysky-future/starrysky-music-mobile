import type { NAV_ID_Type } from "@/config/constant";

export interface InitState {
  navActiveId: NAV_ID_Type;
  lastNavActiveId: NAV_ID_Type;
  drawer: boolean;
}

const state: InitState = {
  navActiveId: "nav_search",
  lastNavActiveId: "nav_search",
  drawer: false,
};

export default state;
