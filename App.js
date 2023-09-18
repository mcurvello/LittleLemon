import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import MenuItems from "./src/components/MenuItems";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <WelcomeScreen />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495e57",
  },
});
