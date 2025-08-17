import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Pressable, Text, View } from "react-native";

const SearchBox = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push("/search");
  };
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      <Pressable
        onPress={handlePress}
        style={{
          width: "95%",
          height: Dimensions.get("window").height * 0.05,
          borderWidth: 0.5,
          borderColor: "#000",
          borderRadius: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingHorizontal: "3%",
        }}
      >
        {/* seach icon */}
        <MaterialIcons name="search" size={24} color="#ccc" />

        <Text
          style={{
            fontSize: 15,
            color: "#aaa",
            marginLeft: 10,
          }}
        >
          Search Astrologer, Products, Services...
        </Text>
      </Pressable>
    </View>
  );
};

export default SearchBox;
