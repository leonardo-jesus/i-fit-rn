import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../slice/CartSlice";

export default function CartIcon() {
  const items = useSelector(selectCartItems);
  const navigation = useNavigation();
  const TotalCart = useSelector(selectCartTotal);
  return (
    <View className="absolute z-50 bottom-10 w-full">
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        className="mx-5 bg-[#188345] rounded-lg p-4 flex-row items-center justify-between"
      >
        <View className=" bg-gray-200 p-2 rounded-lg">
          <Text className="font-bold text-base text-black text-center">
            {items.length}
          </Text>
        </View>
        <Text className=" font-extrabold text-base text-white text-center">
          Ver carrinho
        </Text>
        <Text className="text-lg text-white font-extrabold">
          R$ {""} {TotalCart.toLocaleString()}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
