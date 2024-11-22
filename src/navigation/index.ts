import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CollectScreen from "@/screens/collect";
import LeaderBoardScreen from "@/screens/leaderBoard";
import SearchScreen from "@/screens/search";
import SettingScreen from "@/screens/setting";
import SongListScreen from "@/screens/songList";

export const RootStack = createNativeStackNavigator({
  initialRouteName: "SongList",
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Collect: CollectScreen,
    LeaderBoard: LeaderBoardScreen,
    Search: SearchScreen,
    Setting: SettingScreen,
    SongList: SongListScreen,
  },
});

export const Navigation = createStaticNavigation(RootStack);
