import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StartScreen } from '@/app/start';
import { HomeScreen } from '@/app/home';
import { MapScreen } from '@/app/map';
import { SaveScreen } from '@/app/save';
import { ProfileScreen } from '@/app/profile';
import { LoginScreen } from '@/app/login';
import { RootStackParamList, RootTabParamList } from '@/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Save" component={SaveScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
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
