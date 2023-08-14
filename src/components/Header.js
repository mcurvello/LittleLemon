import { View, Text } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={{ flex: 0.2, backgroundColor: "#f4ce14" }}>
      <Text style={{ padding: 40, fontSize: 30, color: "black" }}>
        Welcome to Little Lemon
      </Text>
    </View>
  );
}
