import { Text, View } from "react-native";
import { HeaderBar } from "../../components/HeaderBar";
import { Search } from "../../components/Search";
import { CarouselItens } from "../../components/Carousel";
import { styles } from "./MainScreen.styles";
import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";

export const MainScreen = () => {
  let [fontsLoaded, fontError] = useFonts({
    Anton_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <HeaderBar />
      <Search />
      <Text style={styles.title}>DESTAQUES</Text>
      <CarouselItens />
    </View>
  );
};
