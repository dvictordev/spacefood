import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

export function AddOrder() {
  return (
    <View className="w-full flex-1">
      <TouchableOpacity activeOpacity={0.6} className="w-full bg-lime-400">
        <Feather name="plus-circle" size={24} color={colors.black} />
        <Text className="text-lg">Adicionar ao pedido</Text>
      </TouchableOpacity>
    </View>
  );
}
