import { useI18n } from "@/lang";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Text } from "react-native";

export default function SongListScreen() {
  const t = useI18n();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: t("song-list-screen") });
  }, []);

  return <Text>{t("song-list-screen")}</Text>;
}
