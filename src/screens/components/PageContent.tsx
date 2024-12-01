import Drawer from "@/components/Drawer";
import { useTheme } from "@/store/theme/hooks";
import { useMemo } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const themeComponent = useMemo(
    () => (
      <View
        style={[
          {
            position: "relative",
            flex: 1,
            overflow: "hidden",
            flexDirection: "column",
            backgroundColor: theme["c-main-background"],
          },
        ]}
      >
        {/* <Drawer /> */}
        <View
          style={[
            {
              flex: 1,
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
              paddingLeft: insets.left,
              paddingRight: insets.right,
            },
          ]}
        >
          {children}
        </View>
      </View>
    ),
    [children, theme]
  );

  return <>{themeComponent}</>;
};
