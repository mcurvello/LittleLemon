import {
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {loggedIn && <Text style={styles.regularText}>You are logged in!</Text>}
      {!loggedIn && (
        <>
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
          <Pressable
            style={styles.button}
            onPress={() => setLoggedIn(!loggedIn)}
          >
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>
        </>
      )}
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
  button: {
    fontSize: 24,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: "#f4ce14",
    borderColor: "#f4ce14",
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 24,
    color: "black",
    textAlign: "center",
  },
});
