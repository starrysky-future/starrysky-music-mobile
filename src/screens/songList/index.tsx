import { useI18n } from "@/lang";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SongListScreen() {
  const t = useI18n();
  const insets = useSafeAreaInsets();

  return (
    <Text
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {t("song-list-screen")}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
