import { ScrollView, StyleSheet, Text, View } from "react-native";
import { HeaderBar } from "../../components/HeaderBar";
import { Search } from "../../components/Search";
import { CarouselItens } from "../../components/Carousel";
import { Filter } from "../../components/Filter";
import { Title } from "../../components/Title";

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderBar />
      <Filter />
      <Search />
      <ScrollView>
        <Title nome="DESTAQUES" />
        <CarouselItens />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E3CCAE",
    height: "100%",
  },
});
