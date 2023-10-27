import { View, Dimensions, Image, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import { styles } from "./Carousel";

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

const carouselRenderItem = ({ item, index }: CarouselItemProps) => {
  return (
    <View style={styles.cardCarousel} key={index}>
      <Image source={{ uri: item.imgURL }} style={styles.image} />
      <Text style={styles.text}>{item.textImg}</Text>
    </View>
  );
};

export const CarouselItens = () => {
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
