import type { StaticParamList } from "@react-navigation/native";
import { RootStack } from "@/navigation";

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
