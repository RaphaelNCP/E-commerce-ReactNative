import { Dimensions, StyleSheet } from "react-native";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E3CCAE",
  },
  cardCarousel: {
    borderRadius: 8,
    width: ITEM_WIDTH,
    height: 450,
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "space-between",
  },
  image: {
    height: 400,
    borderRadius: 8,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});
