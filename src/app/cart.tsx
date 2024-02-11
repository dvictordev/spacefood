import { Header } from "@/components/header";
import { useCartStore } from "@/store/cart-store";
import { SectionList, Text, View } from "react-native";
import Product from "./product/[id]";
import { MenuItem } from "@/components/menu-item";

export default function Cart() {
  const carStore = useCartStore();
  return (
    <View className="flex-1 pt-10">
      <Header title="Seu carrinho" />
      <View className="p-5 flex-1">
        {carStore.products.map((product) => {
          return <MenuItem key={product.id} data={product} className="pb-5" />;
        })}
      </View>
    </View>
  );
}
