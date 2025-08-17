import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Pressable, View } from "react-native";
import Amount from "../../Header/Amount";
import Header from "../../Header/Header";
import Search from "../../Header/Search";

const HistoryHeader = () => {
  return (
    <Header title="History">
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        {/* amount */}
        <Amount />

        {/* search icon */}
        <Search />

        {/* filter icon */}
        <Pressable>
          <MaterialIcons name="filter-list" size={24} color="#fff" />
        </Pressable>
      </View>
    </Header>
  );
};

export default HistoryHeader;
