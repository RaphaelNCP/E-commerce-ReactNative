import { ScrollView, StyleSheet, Text, View } from "react-native";
import { HeaderBar } from "../../components/HeaderBar";
import { Search } from "../../components/Search";
import { CarouselItens } from "../../components/Carousel";
import { Filter } from "../../components/Filter";
import { Title } from "../../components/Title";
import { Secao } from "../../components/Secao";
import {
  femaleClothesMock,
  maleClothesMock,
  trendyClothesMock,
} from "../../Mocks/CardMock";

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderBar />
      <Filter />
      <Search />
      <ScrollView>
        <Title titulo="DESTAQUES" />
        <CarouselItens />
        <Secao mock={trendyClothesMock} titulo="TENDÊNCIAS" />
        <Secao mock={maleClothesMock} titulo="MASCULINO" />
        <Secao mock={femaleClothesMock} titulo="FEMININO" />
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
