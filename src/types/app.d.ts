import type { StaticParamList } from "@react-navigation/native";
import { RootStack } from "@/navigation";
import { I18n } from "@/lang";
import { StateEventTypes } from "@/event/stateEvent";

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }

  var i18n: I18n;
  var state_event: StateEventTypes;
}
