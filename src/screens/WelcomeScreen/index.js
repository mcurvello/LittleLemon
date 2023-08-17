import { Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

export default function WelcomeScreen() {
  return (
    <ScrollView indicatorStyle="white" style={styles.container}>
      <Text style={styles.title}>Welcome to Little Lemon</Text>
      <Text style={styles.description}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 50,
    fontWeight: "600",
    padding: 40,
    color: "#edefee",
    textAlign: "center",
  },
  description: {
    fontSize: 38,
    fontWeight: "400",
    padding: 30,
    color: "#edefee",
    textAlign: "center",
  },
});
