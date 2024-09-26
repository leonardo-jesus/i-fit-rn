import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";

export default function RestaurantItems({
  id,
  name,
  image,
  address,
  dishes,
  rating,
  description,
  long,
  lat,
  genre,
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Restaurant", {
          id,
          name,
          id,
          name,
          image,
          address,
          dishes,
          rating,
          description,
          long,
          lat,
          genre,
        })
      }
    >
      <View className="mx-1 w-[250px] h-[220px] rounded-lg bg-white overflow-hidden">
        <Image
          source={{ uri: urlFor(image).url() }}
          className="w-full h-32 object-cover"
        />
        <Text className=" mx-3 font-bold text-base text-gray-800 mt-2">
          {name}
        </Text>
        <View className=" flex-row items-center space-x-2 mx-4 mt-1">
          <StarIcon size={18} color="#188345" />
          <Text className=" font-bold text-[#188345]">
            {rating}{""}
          </Text>
          <Text className=" font-semibold text-xs text-gray-500]">{genre}</Text>
        </View>
        <View className=" flex-row items-center space-x-2 mx-4 mt-1">
          <MapPinIcon size={18} color="gray" />
          <Text className=" font-medium text-gray-600 text-xs">
            Perto de {""}
          </Text>
          <Text className=" font-semibold text-xs text-gray-500]">
            {address.length > 18 ? address.slice(0, 18) + "..." : address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
