import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

export default function PreparingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 5000);
  }, []);

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-[#188345]">
      <Animatable.Image
        source={require("../assets/images/delivery.gif")}
        className="w-96 h-96"
        animation="slideInUp"
        iterationCount={2}
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={3}
        className=" text-base my-10 text-white font-extrabold text-center"
      >
        Aguardando restaurante aprovar o seu pedido!
      </Animatable.Text>
      <Progress.CircleSnail color="white" size={60} indeterminate={true} />
    </SafeAreaView>
  );
}
