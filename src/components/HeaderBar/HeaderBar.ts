import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#B8621B",
  },
  image: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  text: {
    marginRight: 65,
    width: 100,
    fontWeight: "bold",
    color: "#fff",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
  },
});
