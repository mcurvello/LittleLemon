import { Text, ScrollView, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="email"
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="password"
        secureTextEntry={true}
        style={styles.input}
        keyboardType="default"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#edefee",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#edefee",
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#edefee",
    borderWidth: 1,
    margin: 12,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#edefee",
  },
});
