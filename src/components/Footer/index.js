import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        All rights reserved by Litte Lemon, 2023
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    height: 45,
    width: "100%",
    backgroundColor: "#f4ce14",
    alignItems: "center",
  },
  content: {
    fontSize: 14,
    fontWeight: "500",
    paddingTop: 8,
  },
});
