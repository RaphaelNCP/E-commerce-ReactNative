import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Filter";

export const Filter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>Tendências</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Masculino</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Feminino</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Acessórios</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Coleção 2023</Text>
      </TouchableOpacity>
    </View>
  );
};
