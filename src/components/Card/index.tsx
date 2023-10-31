import { Text, TouchableOpacity, View } from "react-native";
import { CardProps } from "../../Types/Types";

export const Card = ({ nome, imagem, descricao, preco }: CardProps) => {
  return (
    <View>
      <TouchableOpacity>
        <Text>{nome}</Text>
        <Text>{imagem}</Text>
        <Text>{descricao}</Text>
        <Text>{preco}</Text>
      </TouchableOpacity>
    </View>
  );
};
