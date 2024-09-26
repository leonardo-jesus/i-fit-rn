import React from "react";
import { ScrollView, Text, View } from "react-native";
import { restaurants } from "../data/mock";
import RestaurantItems from "./RestaurantItems";

export default function FeaturedItems({ featured }) {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#188345' }}>
        {featured.name}
      </Text>
      <Text style={{ color: 'gray', fontWeight: '300' }}>
        {featured.short_description}
      </Text>
      {/* Fetch restaurants APIs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
          paddingTop: 15,
        }}
      >
        {restaurants.map((restaurant) => (
          <RestaurantItems
            key={restaurant._id}
            id={restaurant._id}
            name={restaurant.name}
            image={restaurant.image}
            dishes={restaurant.dishes}
            rating={restaurant.rating}
            address={restaurant.address}
            description={restaurant.short_description}
            genre={restaurant.type?.name}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
}
