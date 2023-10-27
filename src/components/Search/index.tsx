import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./Search";
const lupa = require("../../../assets/lupa.png");

export const Search = () => {
  return (
    <View style={styles.search}>
      <TouchableOpacity>
        <Image style={styles.image} source={lupa} />
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="Pesquisar" />
    </View>
  );
};
