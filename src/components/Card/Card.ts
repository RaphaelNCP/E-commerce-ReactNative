import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  button: {
    borderColor: "#fff",
    borderWidth: 5,
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF60",
    width: WIDTH - 60,
    height: HEIGHT - 240,
  },
  image: {
    height: 350,
    width: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    marginHorizontal: 10,
  },
  discriptionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 300,
  },
  description: {
    fontSize: 20,
    justifyContent: "flex-start",
    width: 150,
    height: 100,
    color: "#B8621B",
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
  },
  price: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#B8621B",
  },
  coin: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#B8621B",
  },
});
