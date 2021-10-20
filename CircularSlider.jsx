import React from "react";
import { View } from "react-native";
import Svg from "react-native-svg";

import { SIZE } from "./Constants";
import Quadrant from "./components/Quadrant";


const CircularSlider = () => {
  return (
    <View>
      <Svg width={SIZE} height={SIZE}>
        <Quadrant />
      </Svg>
    </View>
  );
};

export default CircularSlider;