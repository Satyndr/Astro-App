import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Pressable, View } from "react-native";
import Amount from "../Header/Amount";
import Header from "../Header/Header";
import Notifications from "../Header/Notifications";

const HomeHeader = () => {
  return (
    <Header title="Astro App">
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          // backgroundColor: "red",
        }}
      >
        {/* notification icon */}
        <Notifications />

        {/* amount */}
        <Amount />

        {/* language icon */}
        <Pressable>
          <MaterialIcons name="language" size={24} color="#fff" />
        </Pressable>
      </View>
    </Header>
  );
};

export default HomeHeader;
