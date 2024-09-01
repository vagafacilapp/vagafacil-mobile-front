import * as React from "react";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Start } from "@/app/start";
import { Login } from "@/app/login";
import { Home } from "@/app/home";

const RootStack = createNativeStackNavigator({
  screens: {
    Start: Start,
    Login: Login,
    Home: Home,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
