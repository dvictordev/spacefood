import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { MenuItemProps } from "@/components/menu-item";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { formatCurrency } from "@/utils/functions/format-currency";
import { AddOrder } from "@/components/add-order";
export default function Product() {
  const { id } = useLocalSearchParams();
  const product = PRODUCTS.filter((item) => item.id === id)[0];

  return (
    <View className="flex-1 items-center ">
      <Image
        source={product.cover}
        className="w-full h-52"
        resizeMode="cover"
      />
      <View className="p-5 mt-8 flex-1">
        <Text className="text-white text-2xl font-heading">
          {product.title}
        </Text>
        <Text className="text-lime-400 text-2xl font-heading my-2">
          {formatCurrency(product.price)}
        </Text>
        <Text className="text-slate-400 font-body text-base leading-6 mb-6">
          {product.description}
        </Text>

        {product.ingredients.map((ingredient) => (
          <Text
            key={ingredient}
            className="text-slate-400 font-body text-base leading-6"
          >{`\u2022 ${ingredient}`}</Text>
        ))}

        <AddOrder />
      </View>
    </View>
  );
}
