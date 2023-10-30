import { StyleSheet, Text, View } from "react-native";
import { HeaderBar } from "../../components/HeaderBar";
import { Search } from "../../components/Search";
import { CarouselItens } from "../../components/Carousel";
import { useFonts, Bitter_800ExtraBold } from "@expo-google-fonts/bitter";

export const MainScreen = () => {
  let [fontsLoaded, fontError] = useFonts({
    Bitter_800ExtraBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <HeaderBar />
      <Search />
      <Text
        style={{
          fontFamily: "Bitter_800ExtraBold",
          fontSize: 50,
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        DESTAQUES
      </Text>
      <CarouselItens />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E3CCAE",
    height: "100%",
  },
});
