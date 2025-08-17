import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Colors.custom.color1 },
        headerTintColor: "#fff",
      }}
      initialRouteName="search"
    >
      <Stack.Screen name="profile" />
      <Stack.Screen name="notifications" options={{ title: "Notifications" }} />
      <Stack.Screen name="search" options={{ headerShown: false }} />
      <Stack.Screen name="CategoriesPage" options={{ title: "Categories" }} />
      <Stack.Screen name="shopping" options={{ title: "Shopping" }} />
      <Stack.Screen name="blogs" options={{ title: "Astrology Blogs" }} />
      <Stack.Screen name="news" options={{ title: "AstroApp in News" }} />
      <Stack.Screen name="panchang" options={{ title: "Panchang" }} />
      <Stack.Screen name="wallet" options={{ title: "My Wallet" }} />
    </Stack>
  );
};

export default Layout;
