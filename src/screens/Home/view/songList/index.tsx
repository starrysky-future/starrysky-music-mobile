import { useI18n } from "@/lang";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SongListScreen() {
  const t = useI18n();

  return (
    <View>
      <Text>{t("nav_songlist")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
