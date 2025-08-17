import React from "react";
import { View } from "react-native";
import Header from "../Header/Header";
import Search from "../Header/Search";

const LiveHeader = () => {
  return (
    <Header title="Live with Astrologer">
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        {/* search icon */}
        <Search />
      </View>
    </Header>
  );
};

export default LiveHeader;
