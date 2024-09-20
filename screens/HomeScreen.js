import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  TrashIcon,
} from "react-native-heroicons/solid";
import { useSelector } from "react-redux";
import CategoriesItem from "../components/CategoriesItem.js";
import FeaturedItems from "../components/FeaturedItems.js";
import { categories, featured } from "../data/mock.js";
import { selectCartItems } from "../slice/CartSlice";

export default function HomeScreen() {
  const navigation = useNavigation();
  const items = useSelector(selectCartItems);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <View style={{ backgroundColor: 'white' }}>
          <View
            style={{
              marginHorizontal: 16,
              padding: 12,
              marginTop: 12,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity>
              <Image
                source={require("../assets/images/avatar.png")}
                style={{ width: 56, height: 56, borderRadius: 28 }}
              />
            </TouchableOpacity>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'gray' }}>
                Seja bem-vindo!
              </Text>
              <Text style={{ fontWeight: '300', fontSize: 12, color: 'gray' }}>
                São Paulo - São Paulo
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Cart")}
              style={{
                padding: 12,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 9999,
                backgroundColor: 'rgb(220, 220, 220)',
              }}
            >
              {items.length > 0 && (
                <Text
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 12,
                    fontWeight: 'bold',
                    color: 'red',
                  }}
                >
                  {items.length}
                </Text>
              )}
              <TrashIcon size={22} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 16, marginBottom: 12 }}>
            <Text style={{ fontWeight: '200', fontSize: 32, color: 'black' }}>
              Peça sua
            </Text>
            <Text style={{ fontWeight: '800', fontSize: 32, color: 'black' }}>
              comida saudável 😋
            </Text>
          </View>
          {/* Search Bar */}
          <View
            style={{
              marginHorizontal: 16,
              marginBottom: 12,
              padding: 12,
              backgroundColor: 'rgb(220, 220, 220)',
              borderRadius: 12,
              position: 'relative',
            }}
          >
            <TouchableOpacity
              style={{ position: 'absolute', top: 12, left: 12 }}
            >
              <MagnifyingGlassIcon size={24} color="black" />
            </TouchableOpacity>
            <TextInput
              placeholder="Procure restaurantes ou pratos..."
              placeholderTextColor="black"
              keyboardType="default"
              style={{ paddingLeft: 40 }}
            />
            <TouchableOpacity
              style={{ position: 'absolute', top: 12, right: 12 }}
            >
              <AdjustmentsHorizontalIcon size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      {/* Categories and Featured Items */}
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={{ marginHorizontal: 16, marginTop: 8, marginBottom: 8 }}>
          <Text
            style={{
              fontWeight: '800',
              fontSize: 18,
              color: '#188345',
            }}
          >
            Categorias
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 8 }}
          >
            {categories.map((category) => (
              <CategoriesItem key={category._id} name={category.name} />
            ))}
          </ScrollView>
          {/* Featured Items */}
          <View style={{ marginTop: 8, marginBottom: 40 }}>
            {featured.map((item) => (
              <FeaturedItems
                key={item._id}
                id={item._id}
                featured={item}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
}
