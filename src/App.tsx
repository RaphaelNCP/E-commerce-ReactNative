import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { HeaderBar } from "./components/HeaderBar";
import { MainScreen } from "./screens/MainScreen/MainScreen";
import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Anton_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View>
      <MainScreen />
      <StatusBar style="light" translucent={false} backgroundColor="black" />
    </View>
  );
}
