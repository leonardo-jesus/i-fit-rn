import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from "react-redux";
import CartScreen from "./screens/CartScreen";
import DeliveryScreen from './screens/DeliveryScreen';
import DetailsScreen from './screens/DetailsScreen';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import PreparingScreen from "./screens/PreparingScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import Signup from './screens/Signup';
import SplashScreen from './screens/SplashScreen';
import { store } from "./store";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Restaurant"
            component={RestaurantScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="Preparing"
            component={PreparingScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
          <Stack.Screen
            name='Splash'
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Login'
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Signup'
            component={Signup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Details'
            component={DetailsScreen}
            options={{ title: 'Detalhes do Prato' }}
          />
          <Stack.Screen
            name='Delivery'
            component={DeliveryScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
