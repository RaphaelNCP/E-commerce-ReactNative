import { ScrollView, Text, View } from "react-native";
import { SectionProps, Cards, CardProps } from "../../Types/Types";
import { Title } from "../Title";
import { Card } from "../Card";
import { styles } from "./Secao";

export const Secao = ({ titulo, mock }: SectionProps) => {
  return (
    <View style={styles.container}>
      <Title titulo={titulo} />
      <ScrollView horizontal={true}>
        {mock.map(
          (item: {
            id: number;
            name: string;
            price: number;
            description: string;
            image: string;
          }) => {
            return (
              <Card
                key={item.id}
                nome={item.name}
                imagem={item.image}
                descricao={item.description}
                preco={item.price}
              />
            );
          }
        )}
      </ScrollView>
    </View>
  );
};
