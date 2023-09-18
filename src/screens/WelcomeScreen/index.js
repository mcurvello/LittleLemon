import {
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function WelcomeScreen() {
  const [firstName, setFirstName] = useState("");

  return (
    <ScrollView indicatorStyle="white" style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require("../../assets/img/logo.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel="Little Lemon Logo"
        />
        <Text style={styles.headerText}>Little Lemon</Text>
      </View>
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
    backgroundColor: "#495e57",
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  headerText: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 30,
    color: "#edefee",
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
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
