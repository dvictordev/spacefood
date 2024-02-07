import clsx from "clsx";
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
  const buttonClass = clsx(
    "bg-slate-800 px-4 items-center justify-center rounded-lg h-10",
    isSelected && "border border-lime-300"
  );

  return (
    <Pressable className={buttonClass} {...rest}>
      <Text className="text-slate-100 font-subtitle text-sm">{title}</Text>
    </Pressable>
  );
}
