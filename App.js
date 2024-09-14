import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DetailsScreen from './screens/DetailsScreen';
import Login from './screens/Login';
import Menu from './screens/Menu';
import Signup from './screens/Signup';
import SplashScreen from './screens/SplashScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
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
          name='Menu'
          component={Menu}
        />
        <Stack.Screen
          name='Details'
          component={DetailsScreen}
          options={{ title: 'Detalhes do Prato' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
