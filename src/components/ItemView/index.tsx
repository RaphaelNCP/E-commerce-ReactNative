import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacityComponent,
  View,
} from "react-native";
import { ModalProps } from "../../Types/Types";

export const ItemView = ({ visible, setVisible }: ModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent={false}
      onRequestClose={() => setVisible(false)}
    >
      <ScrollView showsVerticalScrollIndicator>
        <View>
          <Text>Titulo</Text>
          <Image source={{ uri: "https://picsum.photos/200/300" }} />
        </View>
        <Image source={{ uri: "https://picsum.photos/200/300" }} />
        <Text>Descripcion</Text>
        <TouchableOpacityComponent>Comprar</TouchableOpacityComponent>
        <TouchableOpacityComponent>
          Adicionar ao carrinho
        </TouchableOpacityComponent>
      </ScrollView>
    </Modal>
  );
};
