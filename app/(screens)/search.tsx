import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import {
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const search = () => {
  const notchHeight = StatusBar.currentHeight || 0;
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          height: notchHeight,
          backgroundColor: Colors.custom.color1,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
        }}
      >
        {/* back button */}
        <TouchableOpacity onPress={handleBackPress}>
          <MaterialIcons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>

        <View
          style={{
            width: "90%",
            marginLeft: 10,
          }}
        >
          <TextInput
            placeholder="Search"
            style={{
              height: 40,
              borderColor: "#ccc",
              borderBottomWidth: 1,
              paddingHorizontal: 20,
              width: "80%",
              fontSize: 16,
            }}
            placeholderTextColor="#999"
            autoFocus
          />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, color: "#888" }}>
          Search functionality is not implemented yet.
        </Text>
        <Text style={{ fontSize: 16, color: "#aaa" }}>
          Stay tuned for updates!
        </Text>
      </View>
    </View>
  );
};

export default search;
