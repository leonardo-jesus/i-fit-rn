import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PhoneIcon, XMarkIcon } from "react-native-heroicons/solid";
import MapView, { Marker } from "react-native-maps";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../slice/RestaurantSlice";

export default function DeliveryScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  console.log("Restaurant Slice", restaurant);
  return (
    <View className=" bg-[#188345] flex-1">
      <SafeAreaView className="z-50">
        <View className=" flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon size={20} color="white" />
          </TouchableOpacity>
          <Text className=" font-light text-white text-base">Ajuda no pedido</Text>
        </View>
        <View className=" bg-white mx-5 my-2 rounded-lg p-6 z-50 shadow-lg">
          <View className="flex-row justify-between">
            <View>
              <Text className=" font-bold text-gray-400 text-base">
                Tempo de entrega estimado
              </Text>
              <Text className="text-2xl font-extrabold">40-60 Minutos</Text>
            </View>
            <Image
              source={require("../assets/images/bikeGuy2.gif")}
              className="w-16 h-16"
            />
          </View>
          <Progress.Bar width={140} indeterminate={true} color="#188345" />
          <Text className=" mt-3 text-gray-500 text-xs font-medium">
            Seu pedido no restaurante{" "}
            <Text className=" font-bold text-gray-800">{restaurant.name}</Text>{" "}
            está sendo preparado
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.name}
          description={restaurant.description}
          identifier="origin"
          pinColor="#188345"
        />
      </MapView>
      <SafeAreaView className="bg-[#188345">
        <View className="flex-row items-center justify-between space-x-3 p-4 mx-5">
          <Image
            source={require("../assets/images/bikeGuy.png")}
            className=" w-14 h-14 rounded-full border border-white"
          />
          <View className="flex-1">
            <Text className=" font-extrabold text-base text-white">
              João Silva
            </Text>
            <Text className=" font-bold text-xs text-gray-100">Seu entregador</Text>
          </View>
          <TouchableOpacity className=" bg-white rounded-full p-2 flex items-center justify-center">
            <PhoneIcon size={20} color="#188345" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}