import { View, Dimensions, Image, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import { styles } from "./Carousel";
import { useFonts, Bitter_300Light_Italic } from "@expo-google-fonts/bitter";

const SLIDER_WIDTH = Dimensions.get("window").width;

const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

type CarouselItemProps = {
  item: {
    imgURL: string;
    textImg: string;
  };
  index: number;
};

const carouselData = [
  {
    imgURL:
      "https://images.pexels.com/photos/17509326/pexels-photo-17509326/free-photo-of-cidade-meio-urbano-vestido-moda.jpeg",
    textImg: "Moda Urbana 2023",
  },
  {
    imgURL:
      "https://images.pexels.com/photos/5664707/pexels-photo-5664707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    textImg: "Coleção Verão 2023",
  },
  {
    imgURL:
      "https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    textImg: "Moda Masculina 2023",
  },
];

export const CarouselItens = () => {
  let [fontsLoaded, fontError] = useFonts({
    Bitter_300Light_Italic,
  });

  if (!fontsLoaded || fontError) {
    return null;
  }
  const carouselRenderItem = ({ item, index }: CarouselItemProps) => {
    return (
      <View style={styles.cardCarousel} key={index}>
        <Image source={{ uri: item.imgURL }} style={styles.image} />
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            textAlign: "center",
            marginBottom: 10,
            fontFamily: "Bitter_300Light_Italic",
          }}
        >
          {item.textImg}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={carouselData}
        renderItem={carouselRenderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
      />
    </View>
  );
};
