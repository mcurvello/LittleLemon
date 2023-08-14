import { View, Text } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View
      style={{ flex: 0.1, backgroundColor: "#f4ce14", alignItems: "center" }}
    >
      <Text
        style={{
          paddingTop: 40,
          fontSize: 30,
          fontWeight: "600",
          color: "black",
        }}
      >
        Little Lemon
      </Text>
    </View>
  );
}
