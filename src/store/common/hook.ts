import { useEffect, useState } from "react";
import state from "./state";

export const useNavActiveId = () => {
  const [value, update] = useState(state.navActiveId);

  useEffect(() => {
    global.state_event.on("navActiveIdUpdated", update);
    return () => {
      global.state_event.off("navActiveIdUpdated", update);
    };
  }, []);

  return value;
};

export const useDrawer = () => {
  const [value, update] = useState(state.drawer);

  useEffect(() => {
    global.state_event.on("drawer", update);
    return () => {
      global.state_event.off("drawer", update);
    };
  }, []);

  return value;
};
