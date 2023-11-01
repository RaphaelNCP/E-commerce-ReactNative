import { Dimensions, StyleSheet } from "react-native";

const SLIDER_WIDTH = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E3CCAE",
    alignItems: "center",
    justifyContent: "center",
    width: SLIDER_WIDTH,
  },
  button: {
    borderColor: "#fff",
    borderWidth: 5,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF60",
  },
  image: {
    height: 350,
    width: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  discriptionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 300,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    justifyContent: "flex-start",
    width: 150,
    color: "#B8621B",
  },
  price: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#B8621B",
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
  },
  coin: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#B8621B",
  },
});
