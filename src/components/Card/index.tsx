import { Image, Text, TouchableOpacity, View } from "react-native";
import { CardProps } from "../../Types/Types";
import { styles } from "./Card";

export const Card = ({ nome, imagem, descricao, preco }: CardProps) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image style={styles.image} source={{ uri: imagem }} />
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
        {nome}
      </Text>
      <View style={styles.discriptionContainer}>
        <Text numberOfLines={4} ellipsizeMode="tail" style={styles.description}>
          {descricao}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{preco}</Text>
          <Text style={styles.coin}>R$</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
