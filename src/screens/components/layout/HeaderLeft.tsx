import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useTheme } from "@/store/theme/hooks";
import { useCallback } from "react";

interface HeaderProps {
  title: string;
}

export default function HeaderLeft(porps: HeaderProps) {
  const theme = useTheme();

  const menu = useCallback(() => {
    console.log("====================================");
    console.log("打开菜单");
    console.log("====================================");
  }, []);

  return (
    <TouchableHighlight
      underlayColor={theme["c-primary-background-active"]}
      onPress={menu}
    >
      <View style={styles.header}>
        <AntDesign name="menu-fold" size={24} color={theme["c-font"]} />
        <Text style={styles.title}>{porps.title}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginLeft: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
