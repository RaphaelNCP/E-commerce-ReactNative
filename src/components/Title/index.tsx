import { Text, View } from "react-native";
import { useFonts, Bitter_800ExtraBold } from "@expo-google-fonts/bitter";
import { TitleProps } from "../../Types/Types";

export const Title = ({ nome }: TitleProps) => {
  let [fontsLoaded, fontError] = useFonts({
    Bitter_800ExtraBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View>
      <Text
        style={{
          fontFamily: "Bitter_800ExtraBold",
          fontSize: 50,
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        {nome}
      </Text>
    </View>
  );
};
