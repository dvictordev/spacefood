import { forwardRef } from "react";
import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

export type MenuItemProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  cover: ImageProps;
  thumbnail: ImageProps;
  ingredients: string[];
};

type ProductProps = TouchableOpacityProps & {
  data: MenuItemProps;
};
export const MenuItem = forwardRef<TouchableOpacity, ProductProps>(
  ({ data, ...rest }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        className="w-full flex-row items-center"
        activeOpacity={0.6}
        {...rest}
      >
        <Image source={data.thumbnail} className="w-20 h-20 rounded-md" />
        <View className="flex-1 ml-3">
          <Text className="text-slate-100 text-base font-subtitle flex-1">
            {data.title}
          </Text>
          <Text className="text-xs text-slate-400 leading-5 mt-0.5">
            {data.description}
          </Text>
          <Text className="text-white text-sm font-bold mt-2">
            R$ {data.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);
