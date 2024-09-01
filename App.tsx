import * as React from "react";
import { createStaticNavigation } from "@react-navigation/native";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Start } from "@/app/start";
import { Login } from "@/app/login";
import { Home } from "@/app/home";
import { NavBar } from "@/components/Navbar";
import { Map } from "@/app/map";
import { Profile } from "@/app/profile";
import { Save } from "@/app/save";

const RootStack = createBottomTabNavigator({
  tabBar: (props: BottomTabBarProps) => <NavBar {...props} />,
  screens: {
    Start: Start,
    Login: Login,
    Home: Home,
    Map: Map,
    Profile: Profile,
    Save: Save,
  },
  screenOptions: {
    animation: "fade",
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
