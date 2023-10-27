import { useState, useEffect } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./HeaderBar";
const carrinho = require("../../../assets/carrinho.png");

export const HeaderBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>MeteorOlho</Text>
        <TouchableOpacity>
          <Image style={styles.image} source={carrinho} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
