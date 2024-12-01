import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "@/screens/Home";
import PlayDetailScreen from "@/screens/PlayDetail";
import SonglistDetailScreen from "@/screens/SonglistDetail";

export const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: HomeScreen,
    PlayDetail: PlayDetailScreen,
    SonglistDetail: SonglistDetailScreen,
  },
});

export const Navigation = createStaticNavigation(RootStack);
