import { ComponentRef, useCallback, useMemo, useRef } from "react";
import CollectScreen from "../view/collect";
import LeaderBoardScreen from "../view/leaderBoard";
import SearchScreen from "../view/search";
import SettingScreen from "../view/setting";
import SongListScreen from "../view/songList";
import PagerView, {
  PageScrollStateChangedNativeEvent,
  PagerViewOnPageSelectedEvent,
} from "react-native-pager-view";
import { StyleSheet, View } from "react-native";
import type { NAV_ID_Type } from "@/config/constant";

const viewMap = {
  nav_search: 0,
  nav_songlist: 1,
  nav_leaderBoard: 2,
  nav_collect: 3,
  nav_setting: 4,
};

const CollectPage = () => {
  const component = useMemo(() => <CollectScreen />, []);

  return component;
};

const LeaderBoardPage = () => {
  const component = useMemo(() => <LeaderBoardScreen />, []);

  return component;
};
const SearchPage = () => {
  const component = useMemo(() => <SearchScreen />, []);

  return component;
};

const SettingPage = () => {
  const component = useMemo(() => <SettingScreen />, []);

  return component;
};

const SongListPage = () => {
  const component = useMemo(() => <SongListScreen />, []);

  return component;
};

const setNavActiveId = (index: number) => {
  Object.entries(viewMap).forEach(([key, val]) => {
    if (val === index) {
      global.state_event.navActiveIdUpdated(key as NAV_ID_Type);
    }
  });
};

const Main = () => {
  const pagerViewRef = useRef<ComponentRef<typeof PagerView>>(null);
  let activeIndexRef = useRef(viewMap["nav_search"]);

  const onPageSelected = useCallback(
    ({ nativeEvent }: PagerViewOnPageSelectedEvent) => {
      setNavActiveId(nativeEvent.position);
      activeIndexRef.current = nativeEvent.position;
    },
    []
  );

  const onPageScrollStateChanged = useCallback(
    ({ nativeEvent }: PageScrollStateChangedNativeEvent) => {
      // const idle = nativeEvent.pageScrollState == 'idle'
      // if (global.lx.homePagerIdle != idle) global.lx.homePagerIdle = idle
    },
    []
  );

  const component = useMemo(
    () => (
      <PagerView
        ref={pagerViewRef}
        initialPage={activeIndexRef.current}
        offscreenPageLimit={1}
        onPageSelected={onPageSelected}
        onPageScrollStateChanged={onPageScrollStateChanged}
        style={styles.pagerView}
      >
        <View collapsable={false} key="nav_search" style={styles.pageStyle}>
          <SearchPage />
        </View>
        <View collapsable={false} key="nav_songlist" style={styles.pageStyle}>
          <SongListPage />
        </View>
        <View
          collapsable={false}
          key="nav_leaderBoard"
          style={styles.pageStyle}
        >
          <LeaderBoardPage />
        </View>
        <View collapsable={false} key="nav_collect" style={styles.pageStyle}>
          <CollectPage />
        </View>
        <View collapsable={false} key="nav_setting" style={styles.pageStyle}>
          <SettingPage />
        </View>
      </PagerView>
    ),
    [onPageScrollStateChanged, onPageSelected]
  );

  return component;
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
    overflow: "hidden",
  },
  pageStyle: {
    // alignItems: 'center',
    // padding: 20,
  },
});

export default Main;
