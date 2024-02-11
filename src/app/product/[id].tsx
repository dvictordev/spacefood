import { Image, Text, View } from "react-native";
import { useLocalSearchParams, Redirect, useNavigation } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { formatCurrency } from "@/utils/functions/format-currency";
import { AddOrderButton } from "@/components/add-order-button";
import { LinkButton } from "@/components/link-button";
import { useCartStore } from "@/store/cart-store";

export default function Product() {
  const cartStore = useCartStore();
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const product = PRODUCTS.filter((item) => item.id === id)[0];
  console.log(cartStore.products);

  function handleAddToCart() {
    if (product) {
      cartStore.add(product);
      navigation.goBack();
    }
  }

  if (!product) {
    return <Redirect href="/" />;
  }
  return (
    <View className="flex-1 items-center">
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
      </View>
      <View className="p-5 pb-8 gap-5 w-full">
        <AddOrderButton onPress={handleAddToCart}>
          <AddOrderButton.Icon>
            <Feather name="plus-circle" size={24} color={colors.black} />
          </AddOrderButton.Icon>
          <AddOrderButton.Text>Adicionar ao pedido</AddOrderButton.Text>
        </AddOrderButton>
        <LinkButton title="Voltar ao cardápio" href="/" />
      </View>
    </View>
  );
}
