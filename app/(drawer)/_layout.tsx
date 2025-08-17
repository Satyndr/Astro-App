import CustomDrawerContent from "@/components/drawer/CustomDrawerContent";
import { Colors } from "@/constants/Colors";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const _layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: "#fff",
            width: "80%",
          },
          drawerActiveTintColor: Colors.custom.color1,
          drawerInactiveTintColor: "#666",
          overlayColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* <Drawer.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
          }}
        /> */}
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default _layout;
