import { useState, useEffect } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./HeaderBar";
const sacola = require("../../../assets/sacola.jpg");
const favorito = require("../../../assets/favoritos.jpg");

export const HeaderBar = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Moda & Mais</Text>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Image style={styles.image} source={favorito} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.image} source={sacola} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
