import { useMemo } from "react";
import { StyleSheet, View } from "react-native";

export default () => {
  return (
    <View style={[styles.container, { backgroundColor: "rgba(0,0,0,0.5)" }]}>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 10,
  },
  content: {
    width: "70%",
  },
});
