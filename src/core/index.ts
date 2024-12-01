import { createStateEventHub } from "@/event/stateEvent";
import { createI18n } from "@/lang";

export const init = () => {
  global.state_event = createStateEventHub();
  global.i18n = createI18n();
};
