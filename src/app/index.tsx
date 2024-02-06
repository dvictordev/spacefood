import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";
import { Text, View } from "react-native";

function click() {
  console.log("teste");
}
export default function Home() {
  return (
    <View className="flex-1 pt-9">
      <Header title={"Faça seu pedido"} amountItems={2} />
      <View className="flex-row">
        <CategoryButton
          title={"Lanche do dia"}
          isSelected={false}
          onPress={click}
        />
        <CategoryButton
          title={"Lanche do dia"}
          isSelected={false}
          onPress={click}
        />
        <CategoryButton
          title={"Lanche do dia"}
          isSelected={false}
          onPress={click}
        />
      </View>
    </View>
  );
}
