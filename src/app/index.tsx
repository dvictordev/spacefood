import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";
import { MenuItem } from "@/components/menu-item";
import { CATEGORIES, MENU } from "@/utils/data/products";
import { useState } from "react";
import { Text, View, FlatList, SectionList } from "react-native";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleSelectCategory(category: string) {
    console.log(category);
    setSelectedCategory(category);
  }

  return (
    <View className="flex-1 pt-9">
      <Header title={"Faça seu pedido"} amountItems={2} />

      <FlatList
        className="max-h-10 mt-3"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === selectedCategory}
            onPress={() => handleSelectCategory(item)}
          />
        )}
      />
      <SectionList
        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => <MenuItem data={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-white text-xl my-8">{title}</Text>
        )}
      />
    </View>
  );
}
