import { useState, useRef } from "react";
import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";
import { MenuItem } from "@/components/menu-item";
import { CATEGORIES, MENU, ProductProps } from "@/utils/data/products";
import { Text, View, FlatList, SectionList } from "react-native";
import { Link } from "expo-router";
import { useCartStore } from "@/store/cart-store";

export default function Home() {
  const cartStore = useCartStore();
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

  const sectionListRef = useRef<SectionList>(null);

  const cartQuantityItems = cartStore.products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  function handleSelectCategory(category: string) {
    setSelectedCategory(category);
    const sectionIndex = CATEGORIES.findIndex((item) => item === category);
    sectionListRef.current?.scrollToLocation({
      sectionIndex,
      itemIndex: 0,
      viewOffset: 20,
    });
  }

  return (
    <View className="flex-1 pt-9">
      <Header title={"Faça seu pedido"} amountItems={cartQuantityItems} />

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
        ref={sectionListRef}
        className="flex-1 p-5"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        sections={MENU}
        keyExtractor={(item: ProductProps) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <MenuItem data={item} className="pb-5" />
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-white text-xl my-8">{title}</Text>
        )}
      />
    </View>
  );
}
