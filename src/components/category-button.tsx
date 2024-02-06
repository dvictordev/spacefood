import { Text, Pressable, PressableProps } from "react-native";

type CategoryProps = PressableProps & {
  title: string;
  isSelected?: boolean;
};

export function CategoryButton({
  title,
  isSelected = false,
  ...rest
}: CategoryProps) {
  return (
    <Pressable
      className="bg-slate-800 px-4 items-center justify-center rounded-lg h-10 {isSelected ? 'border-lime-300' : ' border-none'}"
      {...rest}
    >
      <Text className="text-slate-100 font-subtitle text-sm">{title}</Text>
    </Pressable>
  );
}
