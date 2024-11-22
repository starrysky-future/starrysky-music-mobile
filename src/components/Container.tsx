import { createContext } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Container(WrappedComponent) {
  const insets = useSafeAreaInsets();
  const ContainerWrapper = (props) => {
    const context = createContext(props);
    return (
      <View
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
        <WrappedComponent {...context} />
      </View>
    );
  };

  return ContainerWrapper;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
