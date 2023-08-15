import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import WelcomeScreen from "./src/screens/WelcomeScreen";

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
