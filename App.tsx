import { Navigation } from "@/navigation";
import themeState from "@/store/theme/state";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const theme = themeState.theme;
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar
        style={theme.isDark ? "light" : "dark"}
        backgroundColor={theme.isDark ? "#000000" : "#ffffff"}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
