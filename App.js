import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import MenuItems from "./src/components/MenuItems";
import LoginScreen from "./src/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <View style={styles.container}>
    //     <Header />
    //     <Stack.Navigator initialRouteName="Login">
    //       <Stack.Screen name="Welcome" component={WelcomeScreen} />
    //       <Stack.Screen name="Login" component={LoginScreen} />
    //     </Stack.Navigator>
    //     <Footer />
    //   </View>
    // </NavigationContainer>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495e57",
  },
});
