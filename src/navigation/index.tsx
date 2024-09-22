import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StartScreen } from '@/app/start';
import { HomeScreen } from '@/app/home';
import { MapScreen } from '@/app/map';
import { SaveScreen } from '@/app/save';
import { ProfileScreen } from '@/app/profile';
import { LoginScreen } from '@/app/login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Mapa" component={MapScreen} />
    <Tab.Screen name="Favoritos" component={SaveScreen} />
    <Tab.Screen name="Perfil" component={ProfileScreen} />
  </Tab.Navigator>
);

const Navigation = () => (
  <Stack.Navigator initialRouteName="Start">
    <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Main" component={TabNavigation} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default Navigation;
