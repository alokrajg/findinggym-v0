import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import GymListScreen from "./gymListScreen";
import WishlistScreen from "./wishlistScreen";
import ProfileScreen from "./profileScreen";

const Tab = createBottomTabNavigator();

export default function TabsLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="GymList"
        options={{ title: "Gyms" }}
        component={GymListScreen}
      />
      <Tab.Screen
        name="Wishlist"
        options={{ title: "Wishlist" }}
        component={WishlistScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{ title: "Profile" }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
