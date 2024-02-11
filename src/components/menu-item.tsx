import { formatCurrency } from "@/utils/functions/format-currency";
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
  title: string;
  description: string;
  cover: ImageProps;
  thumbnail: ImageProps;
  quantity?: number;
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
          <View className="flex-row items-center">
            <Text className="text-slate-100 text-base font-subtitle flex-1">
              {data.title}
            </Text>
            {data.quantity && (
              <Text className="text-slate-100 text-base font font-subtitle">
                x{data.quantity}
              </Text>
            )}
          </View>
          <Text className="text-xs text-slate-400 leading-5 mt-0.5">
            {data.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);
