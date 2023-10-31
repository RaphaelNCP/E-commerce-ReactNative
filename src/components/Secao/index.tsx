import { Text, View } from "react-native";
import { TitleProps } from "../../Types/Types";
import { Title } from "../Title";

export const Secao = ({ nome }: TitleProps) => {
  return (
    <View>
      <Title nome={nome} />
    </View>
  );
};
