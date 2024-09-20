import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import sanityClient from "../sanity";
import RestaurantItems from "./RestaurantItems";

export default function FeaturedItems({ id, featured }) {
  const [restaurants, setRestaurants] = useState([]);

  // Fetch Restaurants Items from API
  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured" && _id == $id]{
          ...,
          restaurants[]-> {
            ...,
            type->{name},
            dishes[]->
          },
        }[0]`,
        { id }
      )
      .then((data) => setRestaurants(data?.restaurants));
  }, [id]);

  console.log("Restaurants Items", restaurants);

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
