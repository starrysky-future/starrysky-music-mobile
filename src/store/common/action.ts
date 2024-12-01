import state, { type InitState } from "./state";

export default {
  setNavActiveId(id: InitState["navActiveId"]) {
    state.navActiveId = id;
    if (id != "nav_setting") state.lastNavActiveId = id;
    global.state_event.navActiveIdUpdated(id);
  },
  setDrawer(open: InitState["drawer"]) {
    state.drawer = open;
    global.state_even.drawer(open);
  },
};
