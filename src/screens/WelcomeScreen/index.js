import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Little Lemon</Text>
      <Text style={styles.description}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    padding: 40,
    color: "#edefee",
    textAlign: "center",
  },
  description: {
    fontSize: 24,
    fontWeight: "400",
    padding: 30,
    color: "#edefee",
    textAlign: "center",
  },
});
