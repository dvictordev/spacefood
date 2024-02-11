import { Feather } from "@expo/vector-icons";
import { ReactNode } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import colors from "tailwindcss/colors";

type AddOrderButtonProps = TouchableOpacityProps & {
  children: ReactNode;
};

type ButtonTextProps = {
  children: ReactNode;
};
type ButtonIconProps = {
  children: ReactNode;
};

function AddOrderButton({ children, ...rest }: AddOrderButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      className="h-12 rounded-md flex-row items-center justify-center bg-lime-400"
      activeOpacity={0.7}
    >
      {children}
    </TouchableOpacity>
  );
}

function ButtonText({ children }: ButtonTextProps) {
  return (
    <Text className="text-black font-heading text-base mx-2">{children}</Text>
  );
}

function ButtonIcon({ children }: ButtonIconProps) {
  return children;
}

AddOrderButton.Text = ButtonText;
AddOrderButton.Icon = ButtonIcon;

export { AddOrderButton };
