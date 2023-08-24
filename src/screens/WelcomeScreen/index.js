import { Text, StyleSheet, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";

export default function WelcomeScreen() {
  const [firstName, setFirstName] = useState("");

  return (
    <ScrollView indicatorStyle="white" style={styles.container}>
      <Text style={styles.title}>Welcome to Little Lemon</Text>
      <Text style={styles.description}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <TextInput
        style={styles.inputBox}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 40,
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
  inputBox: {
    height: 40,
    borderColor: "#edefee",
    borderWidth: 1,
    margin: 12,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#edefee",
  },
});
