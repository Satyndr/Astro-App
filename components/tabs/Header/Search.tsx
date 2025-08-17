import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

const Search = () => {
  const router = useRouter();
  const handleSearchPress = () => {
    router.push("/(screens)/search");
  };
  return (
    <Pressable onPress={handleSearchPress}>
      <MaterialIcons name="search" size={24} color="#fff" />
    </Pressable>
  );
};

export default Search;
