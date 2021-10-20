import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Line } from "react-native-svg";
import { FontAwesome } from "@expo/vector-icons";

import CircularSlider from "./CircularSlider";
import { PADDING } from "./Constants";

const size = 80;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1C1B1D",
    padding: PADDING,
  },
  pin: {
    transform: [{ translateY: size / 2 }, { rotateZ: "45deg"}, { translateY: -size / 2 }]
  },
  title: {
    fontFamily: "SFProRounded-Semibold",
    fontSize: 36,
    color: "white",
    marginBottom: 32,
  },
});

const Bedtime = () => {
  return (
    <View style={styles.container}>
      <CircularSlider />
      <View style={{ position: "absolute", transform: [{ translateY: -size / 2 }]}}>
        <FontAwesome name="long-arrow-up" size={ size } color="yellow" style={ styles.pin } />
      </View>
    </View>
  );
};

export default Bedtime;